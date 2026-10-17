(function worldV10(){
'use strict';
const k=(s)=>Number(s).toFixed(0),c=(x,y,r,fill)=>`<circle cx="${k(x)}" cy="${k(y)}" r="${r}" fill="${fill}"/>`;
const p=(d,fill,stroke='none',w=0)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const e=(x,y,rx,ry,fill)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}"/>`;
function creek(S){
if(S?.v10?.island!=='creek')return null;
let s=`<defs>
<linearGradient id="v10-grass" x2=".9" y2="1"><stop stop-color="#d8f1c8"/><stop offset=".55" stop-color="#a4e5bf"/><stop offset="1" stop-color="#86c9ab"/></linearGradient>
<linearGradient id="v10-water" x2=".8" y2=".5"><stop stop-color="#abf6e9"/><stop offset=".5" stop-color="#5ac5d3"/><stop offset="1" stop-color="#2987b4"/></linearGradient>
<radialGradient id="v10-light"><stop stop-color="#fff5b5" stop-opacity=".9"/><stop offset="1" stop-color="#fff5b5" stop-opacity="0"/></radialGradient>
</defs>
<rect width="900" height="540" fill="url(#v10-grass)"/>
${p('M-10 73Q141-5 310 60T596 32Q757 9 920 57V-10H-10Z','#d8f5d1')}
${p('M-10 457Q222 406 389 462T765 430Q831 419 911 449V546H-10Z','#91d8aa')}
${p('M-5 327Q168 312 332 338T675 320Q780 297 911 323','none','#eed9ae',33)}
${p('M-5 326Q175 307 340 334T675 315Q784 293 909 325','none','#f8e7c0',12)}
${p('M48-15Q-22 121 151 193T466 174Q616 87 751 196T876 553L800 553Q802 262 670 256T449 250Q243 309 107 235T-25 12Z','url(#v10-water)','#a1e6c6',9)}
${p('M53 3Q40 131 168 183T464 157Q625 90 741 178T849 530','none','#d9fcfa',5)}
${p('M86 31Q89 136 196 173T489 156Q632 119 728 204','none','#dafcfa',2)}
<g opacity=".55">${e(130,185,11,5,'#fff')}${e(301,232,12,4,'#fff')}${e(584,174,7,4,'#fff')}${e(808,332,11,4,'#fff')}</g>`;
const treePlaces=[[43,63,1],[175,46,.85],[293,72,.95],[440,66,1.12],[620,65,.9],[770,48,1],[881,82,1.05],[45,469,1],[205,475,.82],[337,462,1.12],[480,479,.85],[620,476,.85],[763,482,.9],[872,455,1]];
treePlaces.forEach(([x,y,z],i)=>{
s+=`<g transform="translate(${x} ${y}) scale(${z})">${e(4,12,34,11,'#2a695446')}${p('M-5 9L-7-44L7-47L9 9Z','#a4775a','#8a6a50',2)}
<g class="v10-leaves">${e(-20,-49,27,31,i%3?'#7fce9b':'#c8dea7')}${e(10,-67,32,33,i%2?'#68bfa9':'#99d591')}${e(30,-43,24,27,'#69bda3')}${p('M-24-58Q-16-74-8-70M3-78Q17-87 29-70','none','#e5f7c7',3)}</g></g>`;
});
for(let i=0;i<65;i++){
const x=28+(i*157)%849,y=17+(i*73)%502;
s+=`<g transform="translate(${x} ${y})">${p('M0 0V-12','none','#5aa078',2)}${c(-5,-13,4,['#fbc4d7','#ffe8af','#c7b4e9','#fff0cd'][i%4])}${c(5,-13,4,['#fbc4d7','#ffe8af','#c7b4e9','#fff0cd'][i%4])}${c(0,-17,4,['#fbc4d7','#ffe8af','#c7b4e9','#fff0cd'][i%4])}${c(0,-13,3,'#ffd685')}</g>`;
}
for(let i=0;i<15;i++){const x=52+(i*113)%828,y=70+(i*103)%393;s+=`<g transform="translate(${x} ${y})">${e(0,6,19,7,'#356d524f')}${p('M-15 5L-9-10L6-15L17-5L17 6Z','#b5cfc2','#7aa89c',2)}${p('M-9-7L4-13','none','#f6eace',2)}</g>`}
s+=`<g transform="translate(550 287)">${e(0,26,70,15,'#25585b47')}${c(0,-13,46,'#9bd3d2')}${c(0,-13,36,'#bce7df')}${c(0,-13,27,'#6dbacc')}${p('M-46-13H46M0-59V33M-32-45L32 19M32-45L-32 19','none','#fff0be',6)}${c(0,-13,9,'#b78d5e')}</g>`;
s+=`<g transform="translate(753 142)">${e(0,69,59,18,'#225e6a52')}${p('M-37 52L-28-12L0-55L28-12L37 52Z','#fff4d3','#9b998c',4)}${p('M-42-13L0-64L42-13Z','#e6b0a2','#bd897f',3)}${p('M-14 52V8Q0-12 14 8V52Z','#92b0c1')}${c(0,-38,18,S.v10?.progress?.q18?'url(#v10-light)':'#e5ece1')}</g>`;
s+=`<g transform="translate(125 326)">${e(0,19,35,9,'#2c675147')}${p('M-28 6L0-20L28 6V25H-28Z','#f7e9ce','#ad9979',2)}${p('M-34 6L0-33L34 6Z','#d59a80','#a97a69',2)}${p('M-9 25V7H9V25Z','#8cadb4')}</g>`;
return s;
}
function art(o,S){
if(!o.island)return null;
const id=o.id;
if(id==='otter')return `<g class="v10-npc">${e(0,20,26,9,'#2d67535a')}${p('M-22 7Q-21-10 0-10Q22-10 23 8L21 21H-21Z','#7fbdc5','#649caa',2)}${c(-19,-32,10,'#bd9979')}${c(19,-32,10,'#bd9979')}${e(0,-20,24,25,'#bb9271')}${e(0,-7,15,12,'#eed7b9')}${c(-8,-24,2.8,'#3a4d4a')}${c(8,-24,2.8,'#3a4d4a')}${c(0,-13,3.3,'#6a5046')}${p('M-6-7Q0-3 6-7','none','#98765f',2)}</g>`;
if(id==='frog')return `<g>${e(0,19,25,8,'#31645056')}${e(0,-1,23,19,'#8bd081')}${c(-13,-19,10,'#a9e59c')}${c(13,-19,10,'#a9e59c')}${c(-13,-20,3.2,'#365b4a')}${c(13,-20,3.2,'#365b4a')}${p('M-8 4Q0 10 8 4','none','#5c9364',2.5)}</g>`;
if(id.startsWith('pebble')){
const color=id==='pebble1'?'#b9ebf6':id==='pebble2'?'#fff0ae':'#f6c8df';
return `<g>${e(0,19,22,8,'#47726161')}${p('M0-27L22-7L12 18H-12L-22-7Z',color,'#fffaf0',3)}${p('M0-27V16M-21-6H21','none','#fff',2)}</g>`;}
if(id==='waterwheel')return `<g>${c(0,-11,30,'#8fbbc7')}${c(0,-11,21,'#c5e6df')}${c(0,-11,13,'#6ab6c7')}${p('M-30-11H30M0-41V19M-21-32L21 10M21-32L-21 10','none','#ffebbb',5)}${c(0,-11,7,'#9c7a54')}</g>`;
if(id==='valleyGate'||id==='valleyReturn')return `<g>${e(0,19,28,8,'#3d755358')}${p('M-29 4H29L19 23H-18Z','#ad7d57','#835d43',2)}${p('M0-43V6M4-37L24-4H4Z','#fff0d5','#91745b',3)}${c(0,-44,4,'#ffdf9a')}</g>`;
if(id==='seedling')return `<g>${p('M-21 1H21L17 22H-16Z','#cf9870','#a1755a',2)}${p('M0 0V-19','none','#5eaa80',4)}${p('M0-12Q-18-29-20-12Q-14-3 0-12M0-14Q17-28 19-14Q12-4 0-14','#80c794','#4e9a76',2)}</g>`;
if(id==='sluice')return `<g><rect x="-26" y="-13" width="52" height="42" rx="7" fill="#debb85" stroke="#a4775a" stroke-width="4"/>${p('M-22-5H22M-22 8H22M-22 20H22','none','#fff4da',4)}${c(0,-29,10,'#75c5d8')}</g>`;
if(id==='driftwood')return `<g><rect x="-28" y="-7" width="54" height="18" rx="7" fill="#b78b64" stroke="#8a684e" stroke-width="3"/><rect x="-19" y="-19" width="43" height="13" rx="6" fill="#d4aa7a"/>${e(-18,1,7,8,'#f5d4a0')}</g>`;
if(id==='firefly')return `<g>${p('M-22 21V-17M0 21V-26M22 21V-16','none','#967a64',5)}${c(-22,-19,12,'#ffe8ad')}${c(0,-28,12,'#a9e0f0')}${c(22,-18,12,'#f7c8d6')}</g>`;
if(id==='windsock')return `<g>${p('M0 25V-42','none','#977c62',6)}${p('M0-38L26-27L44-18L30-9L0-19Z','#f5b6a3','#c98079',3)}</g>`;
if(id==='beacon')return `<g>${p('M-21 23L-12-42L0-55L13-42L21 23Z','#fff1d1','#ae9a8e',4)}${p('M-19-7H19M-16 10H16','none','#88b8bb',5)}${c(0,-44,8,S.v10?.progress?.q18?'#ffe8a0':'#acccca')}</g>`;
if(id.endsWith('Board'))return `<g>${p('M-20 26V-24M20 26V-24','none','#9d795c',7)}<rect x="-35" y="-39" width="70" height="51" rx="7" fill="#dfb687" stroke="#aa8564" stroke-width="3"/><rect x="-28" y="-32" width="56" height="37" rx="4" fill="#fff4d3"/><text y="-7" font-size="29" text-anchor="middle">📜</text></g>`;
if(id==='petStop')return `<g>${p('M-31-14L0-40L32-14V24H-31Z','#fff0d1','#b48e70',3)}${p('M-36-15L0-48L37-15','none','#d6a489',9)}<text y="13" font-size="31" text-anchor="middle">🐾</text></g>`;
return `<text font-size="33" text-anchor="middle" y="8">${o.ico||'✨'}</text>`;
}
function companion(S){
if(!S?.v10?.pet)return '';
const pet=window.STARBUD_V10_CORE.PETS[S.v10.pet.type];if(!pet)return '';
return `<g class="v10-companion" transform="translate(-39 6)">${e(0,19,19,6,'#37675353')}${c(0,-8,16,pet[2])}<text x="0" y="1" font-size="23" text-anchor="middle">${pet[1]}</text><text x="0" y="-30" font-size="12" text-anchor="middle" fill="#366858" stroke="#fff8e2" stroke-width="3" paint-order="stroke">${pet[0]}</text></g>`;
}
function minimap(S,objects,wide=false){
const creek=S.v10?.island==='creek',g=window.STARBUD_V10_CORE.goal(S,objects);
let s=`<rect width="180" height="108" rx="8" fill="${creek?'#b6e6ca':'#b9dfad'}"/>`;
s+=creek?p('M8-12Q2 30 32 36T96 47Q148 27 160 109','none','#67c1cf',18):'<rect x="87" width="19" height="108" fill="#62bcce"/>';
s+=p('M0 57Q45 47 87 57M108 57Q143 48 180 59','none','#f6e6c1',9);
for(let i=0;i<15;i++){const x=(i*37+16)%175,y=(i*31+14)%103;s+=c(x,y,i%3?3:5,'#70bba0')}
if(wide){for(const o of objects.filter(o=>creek?o.island==='creek':!o.island||o.island==='starbud')){if(['rabbit','bridge','house','fox','valleyGate','otter','waterwheel','beacon'].includes(o.id))s+=c((55+o.x*70)/5,(52+o.y*72)/5,4,'#fff2ca')}}
if(g)s+=`<circle cx="${(55+g.x*70)/5}" cy="${(52+g.y*72)/5}" r="7" fill="none" stroke="#ffd474" stroke-width="3"/>`;
s+=`<circle cx="${(55+S.x*70)/5}" cy="${(52+S.y*72)/5}" r="6" fill="#f16b60" stroke="#fff" stroke-width="2.2"/>`;
return s;
}

window.STARBUD_V10_WORLD={creek,art,companion,minimap};
if(window.STARBUD_ART){
 const previous=window.STARBUD_ART.entity.bind(window.STARBUD_ART);
 window.STARBUD_ART.entity=(o,S)=>o.island?art(o,S):previous(o,S);
}
if(window.STARBUD_UI){
 window.STARBUD_UI.goal=(S,objects)=>window.STARBUD_V10_CORE.goal(S,objects);
 window.STARBUD_UI.paint=(S,objects)=>{
  if(!S)return;
  const goal=window.STARBUD_V10_CORE.goal(S,objects), badge=document.getElementById('objective');
  if(badge){
   const dx=goal?goal.x-S.x:0,dy=goal?goal.y-S.y:0;
   const direction=[dx>0?'→ 向右':dx<0?'← 向左':'',dy>0?'↓ 向下':dy<0?'↑ 向上':''].filter(Boolean).join(' · ');
   badge.textContent=goal?'任務：'+goal.name+' '+(direction||'✨ 在附近'):'✨ 自由探索';
  }
  const mini=document.getElementById('miniMap'),large=document.getElementById('largeMap');
  if(mini)mini.innerHTML=minimap(S,objects);
  if(large)large.innerHTML=minimap(S,objects,true);
  const note=document.getElementById('mapNote');
  if(note)note.textContent=(S.v10?.island==='creek'?'目前在水晶溪谷。':'目前在星芽村與露露森林。')+' 紅點是玩家、金色圈是任務目標；可從入口搭船往返兩島。';
 };
}

})();