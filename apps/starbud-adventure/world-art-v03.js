/* Starbud Islands v0.3 — hand-authored storybook world, no network assets. */
(function(){
'use strict';
const A={scene,entity,player,landmarks:[]};
window.STARBUD_ART=A;
const f=n=>Number(n).toFixed(1),rnd=n=>{const v=Math.sin(n*127.1+43.29)*43758.5453;return v-Math.floor(v)};
const C=(x,y,r,col,attr='')=>`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${col}" ${attr}/>`;
const E=(x,y,rx,ry,col,attr='')=>`<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" fill="${col}" ${attr}/>`;
const P=(d,fill,stroke='none',sw=0,attr='')=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" ${attr}/>`;
const R=(x,y,w,h,rx,col,attr='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${col}" ${attr}/>`;
function defs(){return `<defs>
<linearGradient id="v03-ground" x2=".7" y2="1"><stop stop-color="#a4dc94"/><stop offset=".5" stop-color="#b6e3a2"/><stop offset="1" stop-color="#7bbf92"/></linearGradient>
<linearGradient id="v03-leafA" x1=".25" y1="0" x2=".8" y2="1"><stop stop-color="#e5f7a6"/><stop offset=".4" stop-color="#94d578"/><stop offset="1" stop-color="#318968"/></linearGradient>
<linearGradient id="v03-leafB" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d2f1ae"/><stop offset=".45" stop-color="#68b69e"/><stop offset="1" stop-color="#398a8c"/></linearGradient>
<linearGradient id="v03-leafC" x1=".2" y1="0" x2=".8" y2="1"><stop stop-color="#fce3a6"/><stop offset=".47" stop-color="#e6b678"/><stop offset="1" stop-color="#bd8766"/></linearGradient>
<linearGradient id="v03-rock" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e9f1dd"/><stop offset=".55" stop-color="#9abeb7"/><stop offset="1" stop-color="#648e89"/></linearGradient>
<linearGradient id="v03-roof" x2=".9" y2="1"><stop stop-color="#ffdec0"/><stop offset=".46" stop-color="#e9a178"/><stop offset="1" stop-color="#b76e6c"/></linearGradient>
<linearGradient id="v03-water" x2=".5" y2="1"><stop stop-color="#92eeeb"/><stop offset=".48" stop-color="#44b1bd"/><stop offset="1" stop-color="#237f9e"/></linearGradient>
<radialGradient id="v03-sun"><stop stop-color="#fffce5" stop-opacity=".63"/><stop offset="1" stop-color="#fff8e5" stop-opacity="0"/></radialGradient>
<pattern id="v03-grass" width="49" height="51" patternUnits="userSpaceOnUse"><path d="M7 34l-3-7M7 34l5-5M35 14l-2-6M35 14l5-5M25 46l-2-4" stroke="#358666" stroke-width="1.1" opacity=".25" stroke-linecap="round"/></pattern>
<pattern id="v03-water-line" width="38" height="72" patternUnits="userSpaceOnUse"><path class="v03-ripple" d="M5 19Q19 13 31 18M13 45Q21 41 30 45" fill="none" stroke="#defaff" opacity=".38" stroke-width="2" stroke-linecap="round"/></pattern>
</defs>`}
function rock(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})">${E(0,11,19,7,'#375e4a28')}${P('M-18 7L-14-10L-1-15L13-7L19 7L5 12L-11 10Z','url(#v03-rock)','#7aaca1',1.4)}${P('M-13-4L-2-13L8-9','none','#f6f4d8',2)}${C(4,-2,1.8,'#d5e7d3')}</g>`}
function grass(x,y,s=1,col='#569b6c'){return `<g transform="translate(${x} ${y}) scale(${s})" opacity=".92">${P('M-8 0Q-12-13-15-16M-3 0Q-7-18-2-23M3 0Q3-18 10-23M5 0Q11-12 16-12','none',col,2.5)}${P('M0 0Q-1-11 4-17','none','#a5cf73',2)}</g>`}
function flower(x,y,s=1,kind=0){let colors=['#ffdfac','#f6a9c9','#fff6ba','#cbb7ed','#aad6ff'];let petals='';for(let i=0;i<5;i++){let a=i*Math.PI*2/5;petals+=E(Math.sin(a)*6,-13+Math.cos(a)*6,4,5,colors[kind%colors.length]);}return `<g transform="translate(${x} ${y}) scale(${s})">${P('M0 1Q2-9 0-13','none','#538e57',2)}${P('M0-7q-10-8-11 0q4 5 11 4',' #6ebd70'.trim())}${petals}${C(0,-13,3.2,'#e6b66e')}${C(-1.1,-14,1,'#fff7db')}</g>`}
function mushrooms(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})">${P('M-5 5L-4-10H4L5 5Z','#fff3cf','#d1caa0',1)}${P('M-15-9Q-13-25 0-26Q14-25 15-9Z','#e9a286','#b56b61',1.3)}${C(-6,-14,2.5,'#fff4d5')}${C(4,-17,2.8,'#fff4d5')}</g>`}
function conifer(x,y,s=1){return `<g class="v03-tree" transform="translate(${x} ${y}) scale(${s})">${E(7,11,35,12,'#2b65465c')}${R(-6,-23,12,34,3,'#8b7150')}<g class="v03-sway">${P('M0-108L-37-33H-24L-45-7H45L24-33H37Z','#3a9b7a','#287f67',2)}${P('M0-112L-30-53H30Z','#79c68d','#3a9c7d',2)}${P('M-22-31H22M-30-14H30','none','#a7daa0',4)}</g></g>`}
function tree(x,y,s=1,type=0){let pal=type%4===0?'url(#v03-leafA)':type%4===1?'url(#v03-leafB)':type%4===2?'url(#v03-leafC)':'url(#v03-leafA)';return `<g class="v03-tree" transform="translate(${x} ${y}) scale(${s})">${E(9,15,45,15,'#2d6a4d4d')}${P('M-7 12L-9-42Q-7-48 1-49L12-42L9 12Z','#9d7657','#795b4e',2)}${P('M1-13L-29-40M1-28L25-61','none','#966f50',7)}<g class="v03-sway">${E(-24,-50,26,30,pal)}${E(11,-65,32,34,pal)}${E(32,-44,29,30,pal)}${E(-4,-86,25,22,pal)}${P('M-33-56Q-22-73-13-71M6-78Q19-89 30-76M22-37Q35-47 45-43','none','#e8f3bb',3,'opacity=".55"')}${type===2?C(20,-61,4.5,'#ecb17e')+C(-19,-55,5,'#edb781')+C(6,-84,4,'#ffdf91'):''}</g></g>`}
function bench(x,y){return `<g transform="translate(${x} ${y})">${E(0,12,36,10,'#2f654548')}${R(-30,-6,60,9,3,'#d9ad78','stroke="#92684c" stroke-width="2"')}${R(-26,5,52,8,2,'#bf855d')}${P('M-22 12V23M22 12V23','none','#805b49',4)}</g>`}
function fence(x,y,len){let s=`<g transform="translate(${x} ${y})">`+P(`M0 3H${len}M0 17H${len}`,'none','#e4b67f',7);for(let i=0;i<=len;i+=26)s+=P(`M${i}-5l5-6l5 6v35h-10Z`,'#f3d4a7','#ac805f',1.5);return s+'</g>'}
function firefly(x,y,s=1){return `<g class="v03-glint" transform="translate(${x} ${y}) scale(${s})">${C(0,0,9,'#fff3b9','opacity=".25"')}${C(0,0,3,'#fffde5')}${P('M-7 0H7M0-7V7','none','#fffad2',1)}</g>`}
function butterfly(x,y){return `<g class="v03-butterfly" transform="translate(${x} ${y})">${E(-5,-4,8,5,'#f7bbcc')}${E(5,-4,8,5,'#eab4da')}${E(-5,3,6,4,'#ffe3d0')}${E(5,3,6,4,'#ffe3d0')}${P('M0-8V8','none','#785d6c',2)}</g>`}
function waterDecor(){let s=P('M435-5Q442 125 438 264Q444 391 437 545','none','#f3d7a0',13,'opacity=".83"')+P('M530-5Q528 117 529 252Q532 404 530 545','none','#f0d5a7',13,'opacity=".83"');
for(let j=0;j<20;j++){let yy=13+j*29,xx=481+(j%2?52:-50);s+=rock(xx,yy,.39+(j%3)*.09);}
for(let j=0;j<20;j++){let yy=j*31+9;let x=454+((j*17)%51);s+=P(`M${x} ${yy}q6-3 15 0`,'none','#defeff',1.8,`opacity=".45" class="v03-water-wave"`)}
for(let j=0;j<9;j++){let y=31+j*55;s+=grass(427,y,.56,'#5b9a68')+grass(537,y+15,.8,'#599d68');}return s;}
function scene(bridgeDone,gardenDone,withoutGPU){let s=defs();if(withoutGPU){s+=R(0,0,900,540,0,'url(#v03-ground)')+R(0,0,900,540,0,'url(#v03-grass)');s+=P('M-15 300Q130 274 232 290T438 279V314Q200 339-15 318ZM529 281Q730 260 915 299V330Q690 324 529 311Z','#f0d9a5');s+=P('M442-8Q449 232 441 542H523Q530 302 525-8Z','url(#v03-water)')+R(441,0,83,540,0,'url(#v03-water-line)');}
// Soft raised hills, edges and long winding trails. GPU's field and river stay visible beneath.
s+=P('M0 50Q65 3 143 24T276 24Q344 5 431 39L431-6H0Z','#d2eab3','none',0,'opacity=".35"');
s+=P('M551 44Q624 2 686 26T860 8L900 0V63Q790 93 703 72T551 44Z','#d3eabd','none',0,'opacity=".33"');
s+=P('M8 279Q88 255 162 275T306 286Q376 303 426 273','none','#f6e4b5',13,'opacity=".6"');
s+=P('M541 283Q598 273 648 281T897 291','none','#f6e4b5',13,'opacity=".57"');
s+=P('M192 283Q192 354 195 443T266 478M684 274Q732 348 752 402','none','#f7e4b8',10,'opacity=".35"');
s+=waterDecor();
const treePositions=[[27,86,.94,0],[170,50,1.0,1],[293,77,.78,2],[389,46,.81,0],[36,477,1.0,1],[381,482,.96,0],[90,362,.63,3],[372,367,.6,3],[583,37,.89,1],[669,51,.83,0],[835,83,1.02,2],[887,296,.8,0],[588,479,.83,1],[875,487,1.05,1],[728,488,.7,2],[817,338,.64,3]];
for(let i=0;i<treePositions.length;i++){let t=treePositions[i];s+=(i===0||i===3||i===8||i===12)?conifer(t[0],t[1],t[2]*.83):tree(...t);}
for(let i=0;i<22;i++){const x=31+(i*191)%836,y=52+(i*107)%443;if(x>415&&x<549)continue;if(Math.abs(x-195)<45&&Math.abs(y-420)<70)continue;s+=grass(x,y,.6+(i%3)*.14,i%3?'#498a6b':'#76b57a');}
for(let i=0;i<69;i++){const x=30+(i*139)%849,y=29+(i*89)%484;if(x>416&&x<543)continue;s+=flower(x,y,.55+.16*(i%3),i%5);}
for(let i=0;i<15;i++){const x=46+(i*233)%818,y=70+(i*97)%412;if(x>428&&x<537)continue;s+=mushrooms(x,y,.55+.2*(i%3));}
for(let i=0;i<13;i++){const x=29+(i*83)%841,y=72+(i*53)%420;if(x>421&&x<543)continue;s+=rock(x,y,.45+.16*(i%4));}
s+=fence(55,324,85)+fence(280,337,85)+fence(563,343,67)+fence(758,352,50)+bench(367,260);
s+=`<g transform="translate(349 282)">${P('M-3-15V22','none','#957354',5)}${R(-22,-35,47,23,7,'#f9efc9','stroke="#bd986c" stroke-width="2"')}${P('M-8-28L0-24L-8-19M3-24H14','none','#7d9767',2.6)}</g>`;
s+=`<g transform="translate(653 347)">${P('M0-18V23','none','#8e7056',5)}${R(-26,-39,56,25,7,'#f8e7c6','stroke="#ba946f" stroke-width="2"')}${P('M-13-30H17M-13-23H10','none','#71918a',2.5)}</g>`;
// Bridge is intentionally at x=475,y=268; both states are visually distinct.
if(bridgeDone){s+=`<g>${E(481,303,77,15,'#31677953')}${R(430,246,103,74,5,'#9d6948','stroke="#734e39" stroke-width="3"')}`;for(let k=0;k<8;k++){s+=R(433+k*12.5,249,10.5,68,2,k%2?'#e6b481':'#d29a6d',`stroke="#a97352" stroke-width="1.2"`);}
s+=P('M431 242H535M431 327H535','none','#ac734f',7)+P('M430 243L423 268M536 243L543 268','none','#f2d39d',4)+`</g>`;}
else s+=`<g>${P('M426 274H457M505 274H537','none','#a77851',16)}${P('M453 263l10 18M507 263l-8 18','none','#7b5847',4)}${C(482,211,19,'#fff0c8')}${P('M482 202V214M482 221V222','none','#b57554',4)}</g>`;
s+=`<g opacity=".7">`+butterfly(360,177)+butterfly(702,177)+butterfly(92,256)+firefly(372,104)+firefly(816,287)+firefly(633,101,.7)+`</g>`;
return s;}
function npc(kind){let body=kind==='rabbit'?'#fff3de':kind==='fox'?'#efb078':'#b98c66';let ear='';if(kind==='rabbit')ear=`${E(-13,-37,8,24,'#fff0dc','stroke="#c99797" stroke-width="2"')}${E(14,-38,8,24,'#fff0dc','stroke="#c99797" stroke-width="2"')}${E(-13,-38,3,14,'#efb6ad')}${E(14,-38,3,14,'#efb6ad')}`;
if(kind==='fox')ear=P('M-25-7L-25-39L-10-24L11-26L26-39L27-7Z','#d98e5d','#b16e54',2)+P('M-22-35L-13-23M22-35L13-23','none','#fff0cf',4);
if(kind==='maker')ear=E(-26,-12,11,13,body)+E(26,-12,11,13,body);
let s=`<g class="v03-npc">${E(0,22,26,9,'#295a4761')}${P('M-23 12Q-25-3 -14-9L15-9Q28 0 24 14Z',kind==='maker'?'#73aeb7':kind==='fox'?'#9ec57c':'#edbeab')}${ear}${E(0,-13,25,24,body,'stroke="#ffffff80" stroke-width="1.3"')}${E(0,-1,15,12,kind==='fox'?'#fbe9cc':'#fff6e8')}${C(-9,-17,2.6,'#43535a')}${C(10,-17,2.6,'#43535a')}${C(0,-8,3.5,'#a87570')}${P('M0-5Q-4-1-7-4M0-5Q4-1 7-4','none','#976b63',1.7)}`;
if(kind==='maker')s+=R(-19,-46,38,12,6,'#84a8bc')+R(-13,-56,25,16,4,'#d9c39a')+C(18,-2,4,'#fff1d2');
if(kind==='rabbit')s+=C(-18,-5,4,'#f4b4b0','opacity=".7"')+C(18,-5,4,'#f4b4b0','opacity=".7"');return s+'</g>';}
function house(){return `<g>${E(4,23,49,17,'#2b614750')}${R(-38,-13,76,41,7,'#ffefd0','stroke="#b98f6b" stroke-width="3"')}${R(-29,-6,14,19,4,'#a7dbe1','stroke="#fffdf5" stroke-width="3"')}${R(15,-6,14,19,4,'#a7dbe1','stroke="#fffdf5" stroke-width="3"')}${P('M-48-17L0-60L48-17L34-8L0-39L-34-7Z','url(#v03-roof)','#a66e59',3)}${P('M-40-16L0-50L40-16','none','#ffe6bd',3)}${R(-12,-7,24,35,5,'#b77f57','stroke="#936345" stroke-width="2"')}${C(6,11,2,'#f7df9d')}${R(23,-57,10,23,2,'#bb8c74')}${flower(-40,10,.95,1)}${flower(38,16,.88,2)}</g>`}
function workstation(){return `<g>${E(0,21,34,11,'#325e4d53')}${R(-29,-13,58,14,3,'#d8ad77','stroke="#966547" stroke-width="2"')}${P('M-22 1V24M22 1V24','none','#956f54',6)}${P('M-14-13L-9-31M-3-14L10-38M-8-21L0-17','none','#a5b5ac',6)}${C(12,-25,7,'#ead4a7')}${R(-20,-10,19,5,2,'#ffe2a2')}</g>`}
function cave(){return `<g>${E(0,19,43,13,'#365e5b62')}${P('M-41 18L-35-18L-10-42L21-37L42-11L46 19Z','url(#v03-rock)','#68918f',2.4)}${P('M-26 18Q-29-9 -15-19Q-3-29 12-16Q24-4 22 18Z','#394a61')}${P('M-32-4L-17-28M4-32L20-21M19-9L34-1','none','#ecf5de',3,'opacity=".75"')}${firefly(3,-8,.7)}</g>`}
function chest(opened){return `<g>${E(0,22,35,11,'#35574264')}${R(-30,-12,60,33,5,'#b87a55','stroke="#79513f" stroke-width="3"')}${opened?P('M-32-16L-30-34Q0-44 30-34L32-16Z','#dca976','#85604e',3):P('M-31-12Q-31-36 0-37Q31-36 31-12Z','#e5ac75','#835640',3)}${R(-5,-31,10,49,2,'#ffdc86')}${C(0,1,5,'#f8f2bc')}${P('M-29-10H29','none','#ffe2a0',3)}</g>`}
function gardenArt(bloom){let s=`<g>${E(0,23,36,12,'#305c4961')}${R(-29,-4,58,26,7,'#cb976e','stroke="#986f4c" stroke-width="3"')}${R(-25,-5,50,7,4,'#efc693')}`;if(bloom)for(let j=0;j<5;j++)s+=flower(-18+j*9,-8-j%2*7,1.15,j%5);else s+=P('M0-6V-32M0-15L-14-23M0-20L13-28','none','#5ca96a',4);return s+'</g>';}
function resource(o){if(o.res==='wood')return `<g>${E(1,17,24,7,'#406b5451')}${R(-24,-9,49,21,8,'#be8a5f','stroke="#8d654b" stroke-width="3"')}${E(-19,1,9,10,'#edc99b','stroke="#ad7d56" stroke-width="2"')}${C(-19,1,4,'#bd936d')}${P('M-11-5Q4-13 18-7','none','#e7b680',3)}</g>`;
if(o.res==='rope')return `<g>${E(0,18,26,7,'#41665240')}${E(0,-3,18,13,'none','stroke="#e8c090" stroke-width="8"')}${E(0,-3,18,13,'none','stroke="#986b51" stroke-width="2" stroke-dasharray="4 4"')}${P('M12 7L23 18','none','#b48760',7)}</g>`;
if(o.res==='crystal')return `<g>${E(0,22,19,8,'#2d6a6c44')}${P('M0-34L19-12L12 19L-12 19L-21-12Z','#8cd6e7','#f4fded',3)}${P('M0-34V19M-21-12H19M0-34L-12 19','none','#3d9bb2',2)}${firefly(22,-27,.65)}</g>`;
if(o.res==='seed')return `<g>${E(0,21,20,7,'#3268494b')}${P('M0 16V-20','none','#518e67',4)}${P('M0-9Q-21-25-18-9Q-13-1 0-9ZM0-17Q16-30 21-17Q19-4 0-17Z','#8bcf83','#5f9767',2)}${C(0,-20,3,'#f8e9b1')}</g>`;return '';}
function entity(o,S){if(o.res)return resource(o);if(o.id==='rabbit')return npc('rabbit');if(o.id==='maker')return npc('maker');if(o.id==='fox')return npc('fox');if(o.id==='house')return house();if(o.id==='workbench')return workstation();if(o.id==='cave')return cave();if(o.id==='chest')return chest(!!S.flags.chest);if(o.id==='garden')return gardenArt(!!S.flags.garden);if(o.id==='bridge')return S.flags.bridge?'<g>'+firefly(0,-30,.7)+C(0,-11,8,'#faedc2','opacity=".9"')+'</g>':'<g>'+C(0,-19,12,'#ffedb7')+P('M0-25V-15M0-11V-10','none','#bd8b5a',3)+'</g>';return null;}
function player(S){let skins=['#f8cda8','#f5bf99','#b98365'],shirts=['#6cba96','#e7a0a0','#799fcd'];let shirt=shirts[S.avatar]||shirts[0],skin=skins[S.avatar]||skins[0];let eye='#56483d';return `<g class="v03-player">${E(0,23,23,7,'#315e525f')}${P('M-12 8L-13 22M12 8L13 22','none','#677b73',7)}${P('M-18-6Q0-17 18-6L15 13H-15Z',shirt,'#ffffff',2)}${P('M-16-4L-24 9M16-4L24 9','none',skin,6)}${E(0,-21,18,20,skin,'stroke="#d4a084" stroke-width="1"')}${P('M-17-27Q-20-46 -4-46Q14-47 18-30Q4-38-1-35Q-13-35-17-27Z',S.avatar===1?'#775348':'#594c43')}${C(-7,-23,2.1,eye)}${C(7,-23,2.1,eye)}${C(-12,-16,3,'#ec9f99','opacity=".65"')}${C(12,-16,3,'#ec9f99','opacity=".65"')}${P('M-4-14Q0-11 4-14','none','#a97570',1.6)}${S.hat?P('M-22-40Q-17-54 0-53Q17-54 22-40L28-36H-28Z','#e8c386','#a07855',2)+P('M-19-40H19','none','#8cab85',4):''}${E(-8,-27,2,3,'#fff8e5','opacity=".8"')}</g>`}
})();
