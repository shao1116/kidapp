/* Starbud Islands v0.3 — minimap, accessible large map, reading controls. */
(function(){'use strict';
const ZKEY='kidapp-starbud-bopo-v03';
const $=id=>document.getElementById(id);
const BOUNDS={width:900,height:540};
function readPref(){try{return localStorage.getItem(ZKEY)==='on'}catch{return false}}
function savePref(v){try{localStorage.setItem(ZKEY,v?'on':'off')}catch{}}
function setBopo(v){document.body.classList.toggle('bopo-on',v);const b=$('bopoBtn');if(b){b.textContent=v?'ㄅ 注音：開':'ㄅ 注音：關';b.setAttribute('aria-pressed',String(v));}savePref(v)}
function goal(S,objects){if(!S)return null;const F=S.flags;
 let id;
 if(!F.rabbitTalk)id='rabbit';
 else if(!F.bridge){if((S.bag.wood||0)<2)id=objects.find(o=>o.res==='wood'&&!S.collected.includes(o.id))?.id;else if(!(S.bag.rope||0))id='ropeA';else id='bridge';}
 else if(!F.foxTalk)id='fox';
 else if(!F.lantern){if(!(S.bag.crystal||0))id='crystalA';else if(!(S.bag.wood||0))id=objects.find(o=>o.res==='wood'&&!S.collected.includes(o.id))?.id;else id='workbench';}
 else if(!F.treasure)id='cave';
 else if(!F.garden)id=!(S.bag.seed||0)?'seedA':'garden';
 return objects.find(o=>o.id===id)||null;
}
function svgMap(S,objects,wide=false){const goalId=goal(S,objects)?.id;
 let s=`<rect width="180" height="108" rx="8" fill="#b9dfad"/><path d="M0 56Q24 53 60 55T92 54M108 57Q153 52 180 59" fill="none" stroke="#edddaf" stroke-width="13" stroke-linecap="round"/><rect x="88" width="18" height="108" fill="#65b9cc"/><path d="M88 0V108M106 0V108" stroke="#f8e1a0" stroke-width="2" opacity=".7"/>`;
 if(S.flags.bridge)s+='<rect x="85" y="48" width="25" height="11" rx="2" fill="#d29a65" stroke="#805a48" stroke-width="1"/>';
 for(let i=0;i<19;i++){let x=(17+i*33)%175,y=(11+i*29)%105;if(x>86&&x<108)continue;s+=`<circle cx="${x}" cy="${y}" r="${i%3===0?7:4}" fill="${i%2?'#71bc84':'#4fa38c'}" opacity=".6"/>`}
 const ico={rabbit:'🐰',maker:'🛠️',bridge:'🌉',fox:'🦊',cave:'⛰️',garden:'🌷',house:'🏡',workbench:'🪚',chest:'🎁'};
 if(wide){for(const o of objects.filter(o=>ico[o.id])){let x=(55+o.x*70)/5,y=(52+o.y*72)/5;s+=`<g transform="translate(${x} ${y})"><circle r="${goalId===o.id?6.5:4.5}" fill="${goalId===o.id?'#ffc979':'#fffcdf'}" stroke="#fff" stroke-width="1.2"/></g>`;}}
 const cx=(55+S.x*70)/5,cy=(52+S.y*72)/5;s+=`<g transform="translate(${cx} ${cy})"><circle r="7" fill="#fc795f" stroke="#fffdf2" stroke-width="2.4"/><circle r="2.2" fill="#fff8de"/></g>`;
 const g=goal(S,objects);if(g){const gx=(55+g.x*70)/5,gy=(52+g.y*72)/5;s+=`<g transform="translate(${gx} ${gy})"><circle r="7" fill="none" stroke="#fffac0" stroke-width="2.4" stroke-dasharray="3 2"/><circle r="2.8" fill="#f5b443"/></g>`}
 return s;}
function direction(S,g){if(!g)return '自由探索 · 尋找新發現';let dx=g.x-S.x,dy=g.y-S.y;if(!dx&&!dy)return '你已抵達任務附近 ✨';let arrows=[];if(Math.abs(dx)>=1)arrows.push(dx>0?'向右 →':'← 向左');if(Math.abs(dy)>=1)arrows.push(dy>0?'向下 ↓':'↑ 向上');return '任務方向：'+arrows.join(' · ');}
function paint(S,objects){if(!S)return;const g=goal(S,objects);const objective=$('objective');if(objective)objective.textContent=direction(S,g);const m=$('miniMap');if(m)m.innerHTML=svgMap(S,objects);const big=$('largeMap');if(big)big.innerHTML=svgMap(S,objects,true);const note=$('mapNote');if(note)note.textContent=g?'紅點是你的位置，金色圈圈是目前的任務目標。':'紅點是你的位置。可以自由探索已開放的地區。';}
function init(){const btn=$('bopoBtn');if(btn){setBopo(readPref());btn.addEventListener('click',()=>setBopo(!document.body.classList.contains('bopo-on')))}
 const map=$('miniMapBtn'),dlg=$('mapDialog');if(map&&dlg){map.addEventListener('click',()=>{const state=window.STARBUD_TEST?.getState();if(state){paint(state,window.STARBUD_TEST.OBJECTS);dlg.showModal();}});$('mapClose')?.addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()})}}
init();
window.STARBUD_UI={paint,goal,svgMap,setBopo};
})();
