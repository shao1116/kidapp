/* Starbud Islands v0.5 core — upgrades, equipment, workshop, home decoration.
   Save compatibility: the existing v1 schema and main quest flags never change. */
(function(){
'use strict';
const GOODS={
  lens:{icon:'🔍',name:'星光放大鏡',cost:18,kind:'gear',description:'在背包裡觀察下一步的冒險線索。'},
  compass:{icon:'🧭',name:'探險指南針',cost:24,kind:'gear',description:'顯示任務目標和距離，探索不容易迷路。'},
  boots:{icon:'🥾',name:'輕快探險靴',cost:30,kind:'gear',description:'穿上後可以加快地圖移動速度。'},
  plant:{icon:'🪴',name:'綠葉盆栽',cost:12,kind:'decor',description:'擺在小屋裡的綠色植物。'},
  shelf:{icon:'📚',name:'故事書架',cost:18,kind:'decor',description:'收集的故事有一個溫暖的家。'},
  light:{icon:'🏮',name:'暖光小燈',cost:16,kind:'decor',description:'讓小屋多一點暖暖的光。'}
};
function normalize(S){
 if(!S||typeof S!=='object')return null;
 const prev=S.v05&&typeof S.v05==='object'?S.v05:{};
 S.v05={
   owned:{...(prev.owned&&typeof prev.owned==='object'?prev.owned:{})},
   equipped:{boots:prev.equipped?.boots===true},
   decor:Array.isArray(prev.decor)?Array.from(new Set(prev.decor.filter(k=>GOODS[k]?.kind==='decor'))):[],
   discoveries:Math.max(0,Math.floor(Number(prev.discoveries)||0)),
   awarded:{...(prev.awarded&&typeof prev.awarded==='object'?prev.awarded:{})}
 };
 return S.v05;
}
function owns(S,id){return GOODS[id]?.kind==='decor'?S.v05.decor.includes(id):!!S.v05.owned[id];}
function purchase(S,id){
 const item=GOODS[id];
 if(!item)return {ok:false,message:'找不到這件物品。'};
 normalize(S);
 if(owns(S,id))return {ok:false,message:'已經擁有這件物品囉！'};
 if((S.coins||0)<item.cost)return {ok:false,message:'星芽幣還不夠，可以先去完成冒險任務。'};
 S.coins-=item.cost;
 if(item.kind==='decor')S.v05.decor.push(id);
 else S.v05.owned[id]=true;
 if(id==='boots')S.v05.equipped.boots=true;
 return {ok:true,message:'獲得'+item.name+'！'};
}
function toggleBoots(S){
 normalize(S);
 if(!owns(S,'boots'))return false;
 S.v05.equipped.boots=!S.v05.equipped.boots;
 return true;
}
function travelDuration(S){return S?.v05?.equipped?.boots&&owns(S,'boots')?49:85;}
function target(S,objects){
 if(!S||!objects)return null;
 const uiGoal=window.STARBUD_UI?.goal?.(S,objects);
 return uiGoal||objects.find(x=>x.id==='rabbit')||null;
}
function hint(S,objects){
 normalize(S);
 const t=target(S,objects);
 if(!t)return '主線已完成！到森林與村莊尋找新的風景吧。';
 const dx=t.x-S.x,dy=t.y-S.y;
 const compass=owns(S,'compass');
 const name=t.name||t.label||'冒險目標';
 const horiz=dx>0?'向右':dx<0?'向左':'';
 const vert=dy>0?'向下':dy<0?'向上':'';
 const dir=[horiz,vert].filter(Boolean).join('，');
 if(!dx&&!dy)return '就在身邊！點選「'+name+'」即可互動。';
 if(!compass)return '朝著地圖上的金色任務標記走，就能找到「'+name+'」。';
 return '目標：'+name+'。方向：'+(dir||'已抵達')+'，約'+(Math.abs(dx)+Math.abs(dy))+'步。';
}
function gatherBonus(S){
 normalize(S);
 S.v05.discoveries+=1;
 let bonus=0;
 if(S.role===0){ // exploratory specialty: non-repeatable reward for each first collectible
  bonus=2;
  S.coins+=bonus;
 }
 return bonus;
}
function htmlInventory(S,RESOURCE){
 normalize(S);
 return '<div class="inventory">'+Object.entries(RESOURCE).map(([id,meta])=>'<div class="inventory-item"><span>'+meta[0]+' '+meta[1]+'</span><b>× '+(S.bag[id]||0)+'</b></div>').join('')+'</div>';
}
function panel(which,ctx){
 const {S,RESOURCE,say,esc,openDialog,dialogText,render,save,toast,craftLamp}=ctx;
 normalize(S);
 const banner='<div class="v05-summary">⭐ 等級 '+(1+Math.floor(S.xp/60))+'　🪙 星芽幣 '+S.coins+'　🎒 蒐集 '+S.v05.discoveries+' 件</div>';
 function done(id){
  const result=purchase(S,id);
  if(!result.ok){toast(result.message);return}
  save();render();dialogText('獲得新物品！',result.message,[],'✨');
 }
 function shopCards(kind){
  return Object.entries(GOODS).filter(([id,g])=>g.kind===kind).map(([id,g])=>'<div class="v05-shop-item"><div class="v05-shop-icon">'+g.icon+'</div><div class="v05-shop-copy"><strong>'+g.name+'</strong><p>'+say(g.description)+'</p><small>🪙 '+g.cost+' 星芽幣</small></div><span class="v05-owned">'+(owns(S,id)?'✓ 已擁有':'可購買')+'</span></div>').join('');
 }
 if(which==='bag'){
  const gear=Object.entries(GOODS).filter(([id,g])=>g.kind==='gear'&&owns(S,id));
  const equipment='<div class="list-card"><strong>🎒 已有裝備</strong><p>'+say(S.flags.lantern?'🏮 星光提燈：已製作':'🏮 星光提燈：尚未製作')+'<br>'+say(S.hat?'🎩 星芽探險帽：已戴上':'🎩 星芽探險帽：尚未購買')+'<br>'+gear.map(([id,g])=>g.icon+' '+g.name+(id==='boots'?(S.v05.equipped.boots?'（穿著中）':'（已脫下）'):'')).join('<br>')+'</p></div>';
  openDialog('🎒 我的冒險背包',banner+htmlInventory(S,RESOURCE)+equipment+
  '<p class="note">'+say('裝備和家具都會自動存檔。想看方向，可以使用放大鏡或指南針。')+'</p>',
  [{label:'觀察線索',action:()=>{dialogText('冒險線索',hint(S,ctx.objects),[],'🔍')}},
   ...(owns(S,'boots')?[{label:S.v05.equipped.boots?'脫下探險靴':'穿上探險靴',action:()=>{toggleBoots(S);save();render();dialogText('探險靴',S.v05.equipped.boots?'已穿上，移動會更快速。':'已脫下，走路恢復原本速度。',[],'🥾')}}]:[]),
   {label:'前往工作台',action:()=>panel('craft',ctx)},{label:'收好背包',primary:true}]);
  return true;
 }
 if(which==='craft'){
  const list='<div class="v05-shop-grid">'+shopCards('gear')+'</div>';
  openDialog('🛠️ 星芽工作台',banner+
   '<div class="list-card"><strong>🏮 星光提燈</strong><p>'+say('需要一塊木頭、一顆水晶，能照亮洞穴。')+'</p><small>🪵 '+S.bag.wood+'/1　💎 '+S.bag.crystal+'/1</small></div>'+
   '<div class="list-card"><strong>🎩 星芽探險帽</strong><p>'+say('讓冒險家戴上可愛的帽子，需要二十枚星芽幣。')+'</p><small>🪙 '+S.coins+'/20</small></div>'+
   '<h3 class="v05-shop-heading">🔧 冒險裝備商店</h3>'+list,
   [{label:S.flags.lantern?'✅ 已有提燈':'製作提燈',action:craftLamp},
    {label:S.hat?'✅ 已有帽子':'購買帽子',action:()=>{if(S.hat)return toast('已經有星芽帽了！');if(S.coins<20)return toast('還需要二十枚星芽幣。');S.coins-=20;S.hat=true;save();render();dialogText('星芽探險帽','新帽子已經戴上，回地圖看看！',[],'🎩')}},
    ...Object.entries(GOODS).filter(([id,g])=>g.kind==='gear'&&!owns(S,id)).map(([id,g])=>({label:g.icon+' '+g.name+' '+g.cost+'幣',action:()=>done(id)})),
    {label:'回背包',action:()=>panel('bag',ctx),primary:true}]);
  return true;
 }
 if(which==='home'){
  const decor=S.v05.decor.map(id=>GOODS[id]?.icon+' '+GOODS[id]?.name).join('　')||'還沒有擺設，先從盆栽開始吧！';
  openDialog('🏡 我的星芽小屋',banner+
    '<div class="v05-home-preview"><div>🏡 🌷 '+S.v05.decor.map(id=>GOODS[id]?.icon).join(' ')+'</div><p>'+say('這是你的冒險基地，家具會一直保留在小屋裡。')+'</p></div>'+
    '<div class="list-card"><strong>我的家具</strong><p>'+say(decor)+'</p></div>'+
    '<h3 class="v05-shop-heading">🏠 裝飾小屋</h3><div class="v05-shop-grid">'+shopCards('decor')+'</div>',
    [...Object.entries(GOODS).filter(([id,g])=>g.kind==='decor'&&!owns(S,id)).map(([id,g])=>({label:g.icon+' '+g.name+' '+g.cost+'幣',action:()=>done(id)})),
     {label:'返回背包',action:()=>panel('bag',ctx),primary:true},
     {label:'重新建立角色',action:()=>{openDialog('⚠️ 確認重新開始','<p>'+say('這會清除星芽群島目前的冒險進度與物品，而且無法復原。其他 KidApp 遊戲不受影響。')+'</p>',[{label:'取消',primary:true},{label:'確認清除',action:ctx.resetAdventure}]);}}]);
  return true;
 }
 return false;
}
window.STARBUD_V05={normalize,owns,purchase,toggleBoots,travelDuration,gatherBonus,hint,panel,goods:GOODS};
})();