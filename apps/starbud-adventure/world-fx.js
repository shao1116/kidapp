/* Starbud v0.2 – original GPU terrain, water optics, physically modeled weather, SVG illustration */
(function(){
'use strict';
var api={active:false,sync:sync,overlay:overlay,entityArt:entityArt,playerArt:playerArt,setEnabled:setEnabled,diagnostics:function(){return {renderer:api.active?'WebGL2':'SVG fallback',frames:frames,particles:particles.length}}};
window.STARBUD_FX=api;
var svg=document.getElementById('world'),frame=document.getElementById('worldFrame');
var particles=[],frames=0,l=0,top=0,vw=900,vh=540,time=0,last=0,bridge=false,garden=false,raf=0;
function sync(s){l=s.left||0;top=s.top||0;vw=s.width||900;vh=s.height||540;bridge=!!s.bridge;garden=!!s.garden;}
function setEnabled(v){api.active=!!v&&!!gl;if(canvas)canvas.hidden=!api.active;return api.active;}
var gl=null,canvas=null;
if(!svg||!frame)return;
canvas=document.createElement('canvas');canvas.id='worldFx';canvas.setAttribute('aria-hidden','true');
try{gl=canvas.getContext('webgl2',{alpha:false,antialias:false,depth:false,powerPreference:'low-power'});}catch(e){}
if(!gl)return;
var motion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var slow=(navigator.hardwareConcurrency||4)<=4||innerWidth<400;
var vert=['#version 300 es','precision highp float;','void main(){vec2 p=gl_VertexID==0?vec2(-1.,-1.):gl_VertexID==1?vec2(3.,-1.):vec2(-1.,3.);gl_Position=vec4(p,0.,1.);}'].join('\n');
var frag=['#version 300 es','precision highp float;','uniform vec2 res,view,offset;','uniform float tm;','out vec4 color;',
'float hash(vec2 p){p=fract(p*vec2(127.1,311.7));p+=dot(p,p+19.19);return fract(p.x*p.y);}',
'float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}',
'float fbm(vec2 p){return .57*noise(p)+.29*noise(2.05*p)+.14*noise(4.1*p);}',
'void main(){vec2 u=gl_FragCoord.xy/res;vec2 p=offset+vec2(u.x*view.x,(1.-u.y)*view.y);float n=fbm(p*.026);',
'vec3 c=mix(vec3(.48,.74,.43),vec3(.77,.91,.58),n);c+=vec3(.02,.045,.018)*(sin(p.x*.013+p.y*.025)+sin(p.x*.033-p.y*.015));',
'float wood=fbm(p*.008+vec2(14.,4.));c=mix(c,vec3(.30,.61,.46)+n*.1,smoothstep(.5,.95,wood)*.28);',
'float trail=abs(p.y-(282.+12.*sin(p.x*.016)+5.*sin(p.x*.047)));c=mix(c,vec3(.92,.78,.56)+.05*(n-.5),(1.-smoothstep(23.,36.,trail))*.93);',
'float riverX=481.+7.*sin(p.y*.009)+2.*sin(p.y*.045);float riverW=44.+4.*sin(p.y*.011+.5);float d=abs(p.x-riverX);',
'float bank=1.-smoothstep(riverW+18.,riverW+42.,d);c=mix(c,vec3(.91,.83,.59),bank*.88);',
'float wave=sin(p.y*.12-tm*1.45+sin(p.x*.12+tm*.6)*1.4);float rip=sin(p.x*.27+p.y*.08-tm*2.3)+sin(p.x*.1-p.y*.17+tm);',
'float caust=pow(.5+.5*sin(p.x*.21+3.*sin(p.y*.045-tm*.7)+tm*1.2),7.);',
'vec3 water=mix(vec3(.12,.53,.68),vec3(.29,.78,.82),clamp(.47+.32*wave+.2*n,0.,1.));water+=vec3(.13,.19,.17)*caust+vec3(.07,.11,.14)*smoothstep(.8,1.7,rip);',
'float foam=(1.-smoothstep(0.,6.,abs(d-riverW+4.)))*(.4+.35*wave);water=mix(water,vec3(.9,.99,.94),foam*.6);',
'c=mix(c,water,1.-smoothstep(riverW-2.,riverW+3.,d));',
'float spots=step(.981,noise(p*.45))*smoothstep(5.,28.,d-riverW);c+=spots*vec3(.14,.13,.06);',
'float sun=pow(clamp(1.-length((p-vec2(160.,-150.))/vec2(830.,760.)),0.,1.),1.8);c+=sun*vec3(.07,.06,.02);',
'c*=.93+.1*fbm(p*.006+vec2(tm*.01,1.));c*=clamp(1.-.12*pow(length((p-vec2(450.,270.))/vec2(550.,380.)),2.),.78,1.);',
'color=vec4(clamp(c,0.,1.),1.);}'
].join('\n');
var pv=['#version 300 es','precision highp float;','layout(location=0) in vec2 pos;layout(location=1) in float size;layout(location=2) in vec4 tint;','uniform vec2 res,view,offset;out vec4 shade;','void main(){vec2 p=(pos-offset)/view;gl_Position=vec4(p.x*2.-1.,1.-p.y*2.,0.,1.);gl_PointSize=min(25.,size*res.x/view.x);shade=tint;}'].join('\n');
var pf=['#version 300 es','precision highp float;','in vec4 shade;out vec4 color;','void main(){vec2 p=gl_PointCoord*2.-1.;float r=length(p);color=vec4(shade.rgb,shade.a*(.5*exp(-r*r*3.)+.5*(1.-smoothstep(.35,.95,r))));}'].join('\n');
function program(a,b){function sh(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;}var p=gl.createProgram();gl.attachShader(p,sh(gl.VERTEX_SHADER,a));gl.attachShader(p,sh(gl.FRAGMENT_SHADER,b));gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));return p;}
var bg,parts,vao,pa,buf,u,pU;
function uniform(p,name){return gl.getUniformLocation(p,name);}
try{bg=program(vert,frag);parts=program(pv,pf);vao=gl.createVertexArray();pa=gl.createVertexArray();buf=gl.createBuffer();
gl.bindVertexArray(pa);gl.bindBuffer(gl.ARRAY_BUFFER,buf);
gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,28,0);
gl.enableVertexAttribArray(1);gl.vertexAttribPointer(1,1,gl.FLOAT,false,28,8);
gl.enableVertexAttribArray(2);gl.vertexAttribPointer(2,4,gl.FLOAT,false,28,12);gl.bindVertexArray(null);
u=[uniform(bg,'res'),uniform(bg,'view'),uniform(bg,'offset'),uniform(bg,'tm')];pU=[uniform(parts,'res'),uniform(parts,'view'),uniform(parts,'offset')];
}catch(e){console.warn('Starbud FX: SVG fallback',e);return;}
frame.insertBefore(canvas,svg);api.active=true;api.supported=true;
var seed=149833;function rand(){seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;}
function reset(p,initial){p.x=p.kind==='water'?449+rand()*70:rand()*900;p.y=initial?rand()*540:-40-rand()*50;p.vx=(rand()-.5)*1.2;p.vy=.2+rand()*.8;p.life=1;p.phase=rand()*7;p.size=3+rand()*5;
p.col=p.kind==='fire'?[1,.94,.6]:p.kind==='water'?[.82,.98,1]:[[.94,.71,.34],[.98,.80,.50],[.61,.83,.45],[.97,.64,.58]][Math.floor(rand()*4)];return p;}
if(!motion)for(var i=0;i<(slow?38:80);i++)particles.push(reset({kind:i%7===0?'water':i%5===0?'fire':'leaf'},true));
function physics(dt){for(var i=0;i<particles.length;i++){var p=particles[i],gust=.5*Math.sin(time*.7+p.y*.014)+.3*Math.cos(p.x*.025+time*.3);
if(p.kind==='water'){p.vy=Math.min(2.7,(p.vy+.085*dt)*.998);p.vx+=(gust*.04-p.vx*.08)*dt;}
else if(p.kind==='fire'){p.vy+=(-.025+.035*Math.sin(time*1.5+p.phase)-p.vy*.018)*dt;p.vx+=(gust*.07-p.vx*.05)*dt;}
else{p.vx+=(gust*.052-.014*p.vx*Math.abs(p.vx))*dt;p.vy+=(.045-.012*p.vy*Math.abs(p.vy))*dt;}
p.x+=p.vx*dt;p.y+=p.vy*dt;
if(p.kind==='leaf'&&p.y>506&&Math.abs(p.x-481)>60){p.y=506;p.vy*=-.36;p.vx*=.78;p.life-=.014*dt;}
if(p.x>940||p.x< -40||p.y>550||p.y< -85||p.life<.1)reset(p,false);
}}
function draw(ms){raf=requestAnimationFrame(draw);if(!api.active||document.hidden||frame.offsetParent===null)return;
var r=frame.getBoundingClientRect();if(r.width<2)return;var dpr=Math.min(devicePixelRatio||1,1.5,1300/r.width),w=Math.max(1,Math.round(r.width*dpr)),h=Math.max(1,Math.round(r.height*dpr));
if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}if(ms-last<(slow?32:24))return;
var dt=last?Math.min(2,(ms-last)/16.67):1;last=ms;time+=Math.min(.05,dt/60);if(!motion)physics(dt);
gl.viewport(0,0,w,h);gl.disable(gl.BLEND);gl.useProgram(bg);gl.bindVertexArray(vao);
gl.uniform2f(u[0],w,h);gl.uniform2f(u[1],vw,vh);gl.uniform2f(u[2],l,top);gl.uniform1f(u[3],time);gl.drawArrays(gl.TRIANGLES,0,3);
if(particles.length){var data=new Float32Array(particles.length*7),k=0;particles.forEach(function(p){data[k++]=p.x;data[k++]=p.y;data[k++]=p.size;data[k++]=p.col[0];data[k++]=p.col[1];data[k++]=p.col[2];data[k++]=p.kind==='fire'?.85:.6;});
gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.useProgram(parts);gl.bindVertexArray(pa);
gl.uniform2f(pU[0],w,h);gl.uniform2f(pU[1],vw,vh);gl.uniform2f(pU[2],l,top);gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);gl.drawArrays(gl.POINTS,0,particles.length);}
frames++;
}
raf=requestAnimationFrame(draw);
canvas.addEventListener('webglcontextlost',function(e){e.preventDefault();api.active=false;cancelAnimationFrame(raf);window.dispatchEvent(new Event('resize'));});
canvas.addEventListener('webglcontextrestored',function(){location.reload()});
window.addEventListener('pagehide',function(){cancelAnimationFrame(raf);});
function circ(x,y,r,c){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+c+'"/>';}
function pth(d,fill,stroke,sw){return '<path d="'+d+'" fill="'+(fill||'none')+'" stroke="'+(stroke||'none')+'" stroke-width="'+(sw||2)+'" stroke-linejoin="round" stroke-linecap="round"/>';}
function tree(x,y,z,n){var t='<g transform="translate('+x+' '+y+') scale('+z+')" class="fx-tree"><ellipse cy="11" rx="38" ry="13" fill="#416e5360"/><path d="M-7 8L-6-36L8-37L8 8Z" fill="#ba8660"/><g class="fx-canopy">';
[[-8,-47,26],[-27,-29,22],[17,-36,27],[6,-53,23]].forEach(function(a,i){t+=circ(a[0],a[1],a[2],['url(#leaf1)','url(#leaf2)','url(#leaf1)','url(#leaf3)'][(n+i)%4]);});return t+'</g></g>';}
function flower(x,y,s,color){var r='<g transform="translate('+x+' '+y+') scale('+s+')">'+pth('M0 0V-14','none','#4b9965',2);
for(var i=0;i<5;i++){var a=i*Math.PI*2/5;r+='<ellipse cx="'+(Math.sin(a)*6)+'" cy="'+(-13+Math.cos(a)*6)+'" rx="4" ry="5" fill="'+color+'"/>';}return r+circ(0,-13,3,'#fbe4a4')+'</g>';}
function overlay(ready,bloom){var s='<defs><linearGradient id="leaf1" x2=".8" y2="1"><stop stop-color="#c9ec8a"/><stop offset=".55" stop-color="#79be7c"/><stop offset="1" stop-color="#448b63"/></linearGradient><linearGradient id="leaf2" x2="1" y2="1"><stop stop-color="#d9edab"/><stop offset=".6" stop-color="#77bca6"/><stop offset="1" stop-color="#3d8b80"/></linearGradient><linearGradient id="leaf3" x2="1" y2="1"><stop stop-color="#f4ebb2"/><stop offset=".7" stop-color="#a4cb81"/></linearGradient><linearGradient id="roof" x2=".7" y2="1"><stop stop-color="#ffdbb1"/><stop offset=".5" stop-color="#e79a82"/><stop offset="1" stop-color="#ba6e6e"/></linearGradient><linearGradient id="rock" x2=".7" y2="1"><stop stop-color="#f0f3e3"/><stop offset="1" stop-color="#8bada5"/></linearGradient></defs>';
[[65,68,1.13,0],[153,90,.75,1],[295,55,.97,0],[374,443,.94,1],[84,450,1.09,2],[616,83,.97,1],[738,460,1.14,0],[837,100,1.12,1],[854,425,1.08,2],[652,464,.66,0],[332,482,.73,1]].forEach(function(t){s+=tree.apply(null,t);});
var colors=['#ffd3a7','#f5b7cf','#fff2ae','#c0c5fe'];
for(var i=0;i<72;i++){var x=25+(i*137)%855,y=23+(i*103)%506;if(x>417&&x<545)continue;s+=flower(x,y,.52+(i%3)*.12,colors[i%4]);}
for(var j=0;j<13;j++){var yy=22+j*40,xx=481+(j%2?1:-1)*54;s+='<ellipse cx="'+xx+'" cy="'+yy+'" rx="12" ry="7" fill="#8ea8a3"/>'+circ(xx-4,yy-3,4,'#e5e9da');}
s+='<g><ellipse cx="167" cy="325" rx="85" ry="20" fill="#487a5570"/>'+pth('M103 317V238L170 189L235 236V317Z','#ffe8ba','#b18b69',5)+pth('M96 240L170 181L247 240L230 246L170 204L113 250Z','url(#roof)','#b76c64',5)+'<rect x="159" y="268" width="31" height="49" rx="6" fill="#a4755b"/><rect x="120" y="250" width="26" height="26" rx="5" fill="#a8dfe5" stroke="#fff8e0" stroke-width="5"/></g>';
s+='<g><ellipse cx="290" cy="472" rx="49" ry="16" fill="#49785977"/><rect x="245" y="456" width="90" height="23" rx="5" fill="#c38959" stroke="#8a604b" stroke-width="3"/>';
if(bloom){for(var f=0;f<6;f++)s+=flower(255+f*14,450,1,f%2?'#f3b3ce':'#ffe1a4');}else s+=pth('M283 456V438M284 445L270 436M284 442L297 431','none','#549e67',3);s+='</g>';
s+='<g><rect x="576" y="326" width="70" height="10" rx="5" fill="#b78653"/>'+pth('M588 335V357M637 335V357','none','#a7774b',6)+'<text x="611" y="323" text-anchor="middle" font-size="17">🌿</text></g>';
s+='<g transform="translate(794 184)"><ellipse cy="15" rx="34" ry="17" fill="#4a7e5677"/>'+pth('M-21 16L-24-14L-8-31L15-27L28 16Z','url(#rock)','#799b90',3)+pth('M-13 17Q-12-9 1-12Q16-8 14 17Z','#4f6470')+'</g>';
if(ready){s+='<g><rect x="424" y="246" width="114" height="78" rx="6" fill="#9d714b" stroke="#80573d" stroke-width="4"/>';for(var k=0;k<8;k++)s+='<rect x="'+(427+k*14)+'" y="249" width="12" height="71" rx="3" fill="'+(k%2?'#edbd82':'#d69b63')+'"/>';s+=pth('M427 239H536M427 327H536','none','#996a47',7)+'</g>';}
else s+='<g>'+pth('M423 273H455M505 273H538','none','#9f754c',15)+circ(480,225,21,'#fff0c0')+'<text x="480" y="234" text-anchor="middle" font-size="29" fill="#bd8851">!</text></g>';
return s;
}
function entityArt(o,S){var id=o.id;
if(id==='bridge')return circ(0,-29,13,'#fff2bd')+pth('M-6-29H6M0-35V-23','none','#bc9352',3);
if(o.res==='wood')return '<g><rect x="-23" y="-13" width="47" height="22" rx="9" fill="#bb875c" stroke="#83543f" stroke-width="3"/><ellipse cx="-21" cy="-2" rx="9" ry="10" fill="#f2cc90" stroke="#b07b56" stroke-width="2"/>'+circ(-22,-2,3,'#aa7b57')+'</g>';
if(o.res==='crystal')return pth('M-13 9L-18-9L-1-27L16-11L13 12L0 18Z','#8be0f1','#f6f9e8',3)+pth('M-1-27L0 18M-18-9L16-11','none','#47b1c7',2);
if(o.res==='seed')return pth('M0 11V-15','none','#539c69',4)+pth('M0-5Q-23-24-22-6Q-13 1 0-5ZM0-12Q10-25 22-19Q22-5 0-12Z','#8bc87a','#4e9466',2);
if(o.res==='rope')return '<ellipse cy="-5" rx="21" ry="13" fill="none" stroke="#c9a16b" stroke-width="8"/>'+pth('M15-4L24 7','none','#9b744f',5);
if(id==='rabbit'||id==='fox'||id==='maker'){var bunny=id==='rabbit',fox=id==='fox',fur=bunny?'#fff4e7':fox?'#efac76':'#bd8f67',s='<g class="fx-npc"><ellipse cy="18" rx="25" ry="9" fill="#4e735b66"/>';
if(bunny)s+='<ellipse cx="-13" cy="-29" rx="9" ry="25" fill="#fff4e7" stroke="#ceafa7" stroke-width="2"/><ellipse cx="12" cy="-29" rx="9" ry="25" fill="#fff4e7" stroke="#ceafa7" stroke-width="2"/>';
if(fox)s+=pth('M-28-2L-23-35L-6-22L12-24L26-35L29-2Z',fur,'#ab7252',3);
s+=circ(0,-6,26,fur)+circ(-9,-10,3,'#344f4a')+circ(9,-10,3,'#344f4a')+circ(0,4,4,'#9d6c65')+pth('M0 8L-5 12M0 8L5 12','none','#966f63',2)+'</g>';return s;}
if(id==='chest')return '<rect x="-27" y="-11" width="54" height="30" rx="5" fill="#b77c4d" stroke="#85583e" stroke-width="3"/>'+pth('M-27-11Q-20-31 0-31Q20-31 27-11Z','#e3b475','#926742',3)+pth('M0-30V18M-27-11H27','none','#ffe092',5);
if(id==='cave')return pth('M-33 18L-24-18L-6-36L19-29L35 17Z','url(#rock)','#75948f',3)+pth('M-18 18Q-20-9 0-12Q20-9 18 18Z','#45516a');
if(id==='garden')return '<rect x="-29" y="-6" width="58" height="22" rx="6" fill="#c58b62" stroke="#8d664b" stroke-width="3"/>'+(S.flags.garden?flower(-12,-10,1.5,'#f5b4cd')+flower(11,-10,1.5,'#ffe3a0'):pth('M0-5V-22M0-15L-12-22M0-18L11-26','none','#60ac68',4));
if(id==='house')return '<rect x="-28" y="-16" width="56" height="35" rx="4" fill="#fff0cd" stroke="#bc8d6b" stroke-width="3"/>'+pth('M-35-15L0-44L35-15Z','url(#roof)','#bc7768',3)+'<rect x="-9" y="-5" width="18" height="24" rx="4" fill="#a47854"/>';
if(id==='workbench')return '<rect x="-31" y="-9" width="62" height="14" rx="3" fill="#e1ac78" stroke="#986942" stroke-width="3"/>'+pth('M-23 5V19M23 5V19M-15-10L-5-28L8-9','none','#8b785d',5);
return null;
}
function playerArt(S){var colors=['#60ad88','#e39ca5','#89a4df'];var shirt=colors[S.avatar],skin=S.avatar===2?'#bd916f':'#f6caaa';
return '<g class="fx-player"><ellipse cy="22" rx="23" ry="8" fill="#456b5666"/>'+pth('M-13 5L-14 20M14 5L15 20','none','#765c56',8)+pth('M-19-5Q0-16 19-5L17 13H-17Z',shirt,'#fff2d4',2)+pth('M-17-5L-25 6M17-5L25 6','none',skin,7)+circ(0,-22,18,skin)+pth('M-16-27Q-19-45 0-43Q20-45 17-27Q4-40-16-27Z','#664b3d')+circ(-7,-23,2.1,'#324b4c')+circ(7,-23,2.1,'#324b4c')+pth('M-5-16Q0-12 5-16','none','#bd7671',1.8)+(S.hat?pth('M-21-41Q-17-56 0-52Q17-56 21-41L24-37H-24Z','#e5c18b','#ae7d4f',2):'')+'</g>';
}
})();