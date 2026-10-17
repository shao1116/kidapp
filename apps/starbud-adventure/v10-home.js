(function homeV10(){
'use strict';
const core=window.STARBUD_V10_CORE;
const old=window.STARBUD_V05;
const PETS=core.PETS,EXTRA=core.DECOR;
function owning(S){old.normalize(S);core.normalize(S);return Array.from(new Set([...(S.v05.decor||[]),...(S.v10.decor||[])]))}
function catalog(){const v={};for(const [k,g] of Object.entries(old.goods))if(g.kind==='decor')v[k]={name:g.name,icon:g.icon,cost:g.cost};for(const [k,g] of Object.entries(EXTRA))v[k]={name:g[0],icon:g[1],cost:g[2]};return v}
function petDialog(ctx,S){
core.normalize(S);
if(!S.v10.pet){
ctx.openDialog('🐾 認識動物夥伴','<p>'+ctx.say('三個小朋友都想陪你探索。你可以選擇一位夥伴同行，之後回來也可以換，不會生病，也不需要天天打卡照顧。')+'</p><div class="v10-pet-grid">'+Object.values(PETS).map(p=>'<span>'+p[1]+'<small>'+p[0]+'</small></span>').join('')+'</div>',
Object.entries(PETS).map(([id,p])=>({label:p[1]+' '+p[0],action:()=>{
S.v10.pet={type:id,bond:0};S.v10.pat=false;ctx.save();ctx.render();
ctx.dialogText(p[0],'我們一起去探險吧！你的夥伴會跟在你身旁。',[],p[1]);
}})).concat([{label:'以後再說',primary:true}]));
return;
}
const p=PETS[S.v10.pet.type],bond=S.v10.pet.bond;
ctx.openDialog('🐾 '+p[0],'<div class="v10-pet-hero">'+p[1]+'</div><p>'+ctx.say('我們是好朋友！一起冒險、完成任務，可以讓友情慢慢成長。現在友情值：'+bond+'。')+'</p>',
[{label:'摸摸夥伴',action:()=>{
if(!S.v10.pat){S.v10.pet.bond=Math.min(99,S.v10.pet.bond+1);S.v10.pat=true;ctx.save()}
ctx.dialogText(p[0],'開心！謝謝你和我一起看這個世界。',[],p[1]);
}},{label:'換一位夥伴',action:()=>{S.v10.pet=null;ctx.save();petDialog(ctx,S)}},{label:'繼續冒險',primary:true}]);
}
function home(ctx,S){
core.normalize(S);old.normalize(S);
const own=owning(S),cat=catalog();
const tiles=Array.from({length:9},(_,i)=>{
const id=S.v10.placed[i],it=cat[id];
return '<button type="button" class="v10-home-slot" data-v10-slot="'+i+'"><span>'+(it?it.icon:'＋')+'</span><small>'+(it?it.name:'擺放家具')+'</small></button>'
}).join('');
const h='<div class="v10-banner">🪙 '+S.coins+' 星芽幣　・　已收藏家具 '+own.length+' 件</div>'+
'<div class="v10-home-room"><div class="v10-room-window">☀️　🪟　☁️</div><div class="v10-home-tiles">'+tiles+'</div></div>'+
'<p class="v10-hint">'+ctx.say('點地板格子，選擇家具擺放。所有家具都能重新整理，不會消失。')+'</p>';
ctx.openDialog('🏡 我的星芽小屋',h,[{label:'🛍️ 家具商店',action:()=>shop(ctx,S)},{label:'🐾 動物夥伴',action:()=>petDialog(ctx,S)},{label:'📜 冒險日誌',action:()=>quests(ctx,S)},{label:'收好小屋',primary:true}]);
document.querySelectorAll('[data-v10-slot]').forEach(el=>el.onclick=()=>slot(ctx,S,Number(el.dataset.v10Slot)));
}
function slot(ctx,S,i){
const cat=catalog(),used=Object.entries(S.v10.placed).filter(([k])=>Number(k)!==i).map(([,v])=>v);
const available=owning(S).filter(id=>!used.includes(id));
ctx.openDialog('🏡 擺放第 '+(i+1)+' 格家具','<p>'+ctx.say('選一件家具放好，或收起原本擺放的家具。')+'</p>',
available.map(id=>({label:cat[id].icon+' '+cat[id].name,action:()=>{S.v10.placed[i]=id;ctx.save();home(ctx,S)}}))
.concat([{label:'收起這個位置的家具',action:()=>{delete S.v10.placed[i];ctx.save();home(ctx,S)}},{label:'返回小屋',primary:true,action:()=>home(ctx,S)}]));
}
function shop(ctx,S){
const cat=catalog(),own=owning(S);
const list='<div class="v10-shop-grid">'+Object.entries(cat).map(([id,g])=>'<div class="v10-shop-item">'+g.icon+' '+g.name+'<small>🪙 '+g.cost+'　'+(own.includes(id)?'✓ 已收藏':'可以購買')+'</small></div>').join('')+'</div>';
ctx.openDialog('🛍️ 小屋家具商店','<div class="v10-banner">現有 🪙 '+S.coins+' 星芽幣。買過的家具可以自由搬移，不會重複收費。</div>'+list,
Object.entries(cat).filter(([id])=>!own.includes(id)).map(([id,g])=>({label:g.icon+' '+g.name+'　'+g.cost+'幣',action:()=>{
if(S.coins<g.cost){ctx.dialogText('星芽幣不夠','可以先完成主線任務或支線委託，再回來買家具。',[],'🪙');return}
if(old.goods[id]){
const res=old.purchase(S,id);if(!res.ok){ctx.dialogText('還不能購買',res.message,[],'🪙');return}
}else{S.coins-=g.cost;S.v10.decor.push(id)}
ctx.save();ctx.render();home(ctx,S);
}})).concat([{label:'返回小屋',primary:true,action:()=>home(ctx,S)}]));
}
function quests(ctx,S){
const n=core.step(S),done=n===19?18:n-1,sides=core.side.filter(e=>S.v10.side[e[0]]).length;
const rows='<div class="v10-journal">'+core.chapters.map((c,i)=>'<div><strong>'+(core.complete(S,i+1)?'✓ ':'○ ')+(i+1)+'．'+ctx.esc(c[0])+'</strong><small>'+(core.complete(S,i+1)?'已完成':i===n-1?'現在進行':'等待開放')+'</small></div>').join('')+'</div>';
ctx.openDialog('📜 星芽冒險日誌','<div class="v10-banner">主線 '+done+' / 18　・　支線 '+sides+' / 20　・　兩座冒險島</div>'+rows,
[{label:'📌 支線委託',action:()=>core.sideBoard(ctx,S)},{label:'🐾 動物夥伴',action:()=>petDialog(ctx,S)},{label:'🏡 返回小屋',primary:true,action:()=>home(ctx,S)}]);
}
function book(ctx,S){
const n=core.step(S),sideDone=core.side.filter(e=>S.v10.side[e[0]]).length;
ctx.openDialog('📖 星芽冒險圖鑑','<div class="v10-banner">🌟 主線 '+(n===19?18:n-1)+' / 18　・　🌻 支線 '+sideDone+' / 20</div>'+
'<div class="v10-islands"><span>🌼 星芽村 '+(S.flags.bridge?'✓ 已修橋':'○ 待修復')+'</span><span>💧 水晶溪谷 '+(S.v10.progress.q8?'✓ 已開放':'🔒 待開放')+'</span></div>'+
'<p>'+ctx.say('你修復的橋、河流、燈塔，以及交到的動物朋友，都會成為獨一無二的冒險故事。')+'</p>',
[{label:'查看冒險日誌',action:()=>quests(ctx,S)},{label:'🏡 前往小屋',action:()=>home(ctx,S)},{label:'繼續探險',primary:true}]);
}
function panel(which,ctx){
if(!ctx.S)return false;
if(which==='home'){home(ctx,ctx.S);return true}
if(which==='quests'){quests(ctx,ctx.S);return true}
if(which==='book'){book(ctx,ctx.S);return true}
return false;
}
window.STARBUD_V10_HOME={home,petDialog,quests,book,panel,shop};
window.STARBUD_V10_WORLD.petDialog=petDialog;
})();