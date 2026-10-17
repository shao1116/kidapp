(function mainV10(){
'use strict';
const DATA=window.STARBUD_V10_DATA;
const C=DATA.chapters,EV=DATA.side;
const OBJECTS=[
{id:'valleyGate',x:10,y:6,ico:'⛵',name:'水晶溪谷入口',label:'溪谷入口',island:'starbud'},
{id:'sideBoard',x:1,y:6,ico:'📌',name:'星芽委託板',label:'支線委託',island:'starbud'},
{id:'petStop',x:4,y:6,ico:'🐾',name:'動物夥伴小屋',label:'動物夥伴',island:'starbud'},
{id:'valleyReturn',x:0,y:3,ico:'⛵',name:'回到星芽村',label:'返回村莊',island:'creek'},
{id:'otter',x:2,y:3,ico:'🦦',name:'水獺小沫',label:'小沫',island:'creek'},
{id:'pebble1',x:4,y:2,ico:'💠',name:'天空河石',label:'藍河石',island:'creek'},
{id:'pebble2',x:6,y:5,ico:'🟡',name:'陽光河石',label:'金河石',island:'creek'},
{id:'pebble3',x:10,y:1,ico:'💗',name:'櫻花河石',label:'粉河石',island:'creek'},
{id:'sluice',x:5,y:2,ico:'🚰',name:'小水閘',label:'水閘',island:'creek'},
{id:'driftwood',x:4,y:5,ico:'🪵',name:'河岸漂流木',label:'整理木頭',island:'creek'},
{id:'frog',x:8,y:4,ico:'🐸',name:'青蛙阿綠',label:'阿綠',island:'creek'},
{id:'firefly',x:8,y:1,ico:'🏮',name:'螢火小徑',label:'花燈',island:'creek'},
{id:'seedling',x:10,y:4,ico:'🌱',name:'河畔小樹苗',label:'小樹苗',island:'creek'},
{id:'waterwheel',x:7,y:3,ico:'⚙️',name:'溪谷水車',label:'水車',island:'creek'},
{id:'windsock',x:9,y:5,ico:'🪁',name:'海風觀察站',label:'風向站',island:'creek'},
{id:'beacon',x:10,y:2,ico:'🗼',name:'星芽燈塔',label:'燈塔',island:'creek'},
{id:'valleyBoard',x:1,y:5,ico:'📌',name:'溪谷委託板',label:'支線委託',island:'creek'}
];
const PETS={cat:['棉花貓','🐱','#f8dfbb'],deer:['小芽鹿','🦌','#c5e5a0'],otter:['泡泡獺','🦦','#b6e2ed']};
const DECOR={rug:['彩虹地毯','🧶',18],pillow:['軟綿抱枕','🛋️',12],flower:['花朵壁飾','🌷',16],globe:['探索地球儀','🌍',24]};
const puzzleSteps={
sluice:[
['先看看水從哪裡來，應該先打開哪裡？',['上游閘門','下游泥土','路邊小屋'],0],
['要讓清水流向田地，現在該怎麼做？',['把水道堵住','打開田地的閘門','把石頭丟進水裡'],1]],
driftwood:[
['木頭有 2、4、6 格，最短的有多長？',['2 格','4 格','6 格'],0],
['中間長度的木頭是哪根？',['6 格','4 格','2 格'],1],
['最後剩下最長的木頭有多長？',['2 格','6 格','4 格'],1]],
firefly:[
['第一盞花燈要亮黃色。',['黃色','藍色','粉色'],0],
['第二盞花燈要亮藍色。',['粉色','黃色','藍色'],2],
['第三盞要亮粉色。',['黃色','粉色','藍色'],1]],
seedling:[
['樹苗需要陽光，應該放在哪裡？',['有適量陽光的地方','密閉紙箱','很深的水裡'],0],
['土壤微乾時，該怎麼澆水？',['一直倒整桶水','適量澆水','永遠不澆水'],1]],
waterwheel:[
['水車靠什麼力量轉動？',['流動的溪水','電視的聲音','桌上的書'],0],
['齒輪之間要如何配合？',['相隔很遠','齒互相咬合','全部丟到水裡'],1],
['水車開始轉動，可以幫忙做什麼？',['帶動簡單機械','讓溪水消失','讓月亮變大'],0]],
windsock:[
['風向袋向右飄，表示風往哪邊吹？',['向左','向右','沒有風'],1],
['突然吹起強風，應該怎麼做？',['靠近電線放風箏','先停下來找安全地方','跳進溪水裡'],1]],
beacon:[
['慶典開始前要做什麼？',['邀請大家一起合作','不讓朋友來','把橋拆掉'],0],
['燈塔點亮後，大家看到的是？',['溫暖的指引燈光','漆黑的煙霧','消失的河流'],0]]
};
const puzzleNames={sluice:'🚰 水道冒險',driftwood:'🪵 河岸清潔隊',firefly:'🏮 螢火小徑',seedling:'🌱 照顧小樹苗',waterwheel:'⚙️ 修復水車',windsock:'🪁 海風觀察站',beacon:'🗼 星芽慶典'};
const finalText={sluice:'水流通往田地了！',driftwood:'漂流木按長度整理好了！',firefly:'三盞花燈都亮起來了！',seedling:'小樹苗長出了新葉！',waterwheel:'溪谷水車開始轉動了！',windsock:'學會了觀察風向和安全放風箏！',beacon:'星芽慶典開始了！你讓兩座島嶼重新閃亮。'};
function normalize(S){
if(!S)return null;
const old=S.v10&&typeof S.v10==='object'?S.v10:{};
const stones=Array.isArray(old.stones)?old.stones.filter(s=>['pebble1','pebble2','pebble3'].includes(s)):[];
S.v10={
 island:old.island==='creek'?'creek':'starbud',
 progress:{...(old.progress||{})},stones:[...new Set(stones)],
 side:{...(old.side||{})},stage:{...(old.stage||{})},
 reward:{...(old.reward||{})},pet:(old.pet&&PETS[old.pet.type])?{type:old.pet.type,bond:Math.min(99,Math.max(0,Number(old.pet.bond)||0))}:null,
 decor:Array.isArray(old.decor)?old.decor.filter(id=>DECOR[id]):[],
 placed:{...(old.placed||{})},pat:!!old.pat
};return S.v10;
}
function complete(S,n){
if(n<=7)return !!S.flags[['','rabbitTalk','bridge','foxTalk','lantern','treasure','garden','chest'][n]];
const v=normalize(S);return n===10?v.stones.length===3:!!v.progress['q'+n];
}
function step(S){normalize(S);for(let i=1;i<=18;i++)if(!complete(S,i))return i;return 19}
function quest(S){const n=step(S);if(n===19)return [18,'星芽慶典已完成','繼續與動物一起探索兩座島嶼、整理小屋，完成二十個支線小冒險！',[['主線進度','18/18',true]]];const ch=C[n-1];let p=[];if(n===2)p=[['木頭',(S.bag.wood||0)+'/2',(S.bag.wood||0)>=2],['繩子',(S.bag.rope||0)+'/1',(S.bag.rope||0)>=1]];if(n===10)p=[['河石',normalize(S).stones.length+'/3',false]];if(n>=11)p=[['溪谷任務',(n-10)+'/8',false]];return [n,ch[0],ch[1],p]}
function goal(S,objects){const n=step(S),id=n===19?'petStop':n===10?(['pebble1','pebble2','pebble3'].find(id=>!S.v10.stones.includes(id))||'otter'):C[n-1][2];return objects.find(o=>o.id===id)||objects.find(o=>o.id==='valleyGate')||null}
function reward(S,key,xp,coins){const v=normalize(S);if(v.reward[key])return false;v.reward[key]=true;S.xp+=xp;S.coins+=coins;if(v.pet)v.pet.bond=Math.min(99,v.pet.bond+2);return true}
function finish(S,n,ctx,title,msg){const k='q'+n;if(S.v10.progress[k])return false;S.v10.progress[k]=true;reward(S,k,20+(n>=14?8:0),12+(n>=14?4:0));ctx.save();ctx.render();ctx.dialogText(title,msg,[],'✨');return true}
function question(ctx,title,ask,options,correct,onWin){
const btn=options.map((label,i)=>({label,action:()=>{if(i===correct)onWin();else ctx.dialogText(title,'再看看題目，試試其他方法！不會扣分喔。',[{label:'再試一次',primary:true,action:()=>question(ctx,title,ask,options,correct,onWin)}],'🌿')}}));
ctx.openDialog(title,'<p>'+ctx.say(ask)+'</p><div class="v10-options">'+options.map((v,i)=>'<div>'+(i+1)+'．'+ctx.say(v)+'</div>').join('')+'</div>',btn);
}
function puzzle(ctx,S,id,n){const steps=puzzleSteps[id],name=puzzleNames[id],k=S.v10.stage[id]||0;if(k>=steps.length){ctx.dialogText(name,'你已經成功幫忙，這裡恢復正常了。',[],'🌟');return}const [ask,options,correct]=steps[k];
question(ctx,name,'第 '+(k+1)+' / '+steps.length+' 步：'+ask,options,correct,()=>{
 S.v10.stage[id]=k+1;ctx.save();ctx.render();
 if(k+1===steps.length)finish(S,n,ctx,name,finalText[id]);
 else ctx.dialogText(name,'完成這一步！接著看看下一道機關。',[{label:'繼續挑戰',primary:true,action:()=>puzzle(ctx,S,id,n)}],'🌟');
});
}
function sideBoard(ctx,S){
const local=EV.filter(e=>e[3]===(S.v10.island==='creek'?'creek':'village'));const done=local.filter(e=>S.v10.side[e[0]]).length;
ctx.openDialog('📌 小小冒險委託板','<div class="v10-banner">已完成 '+done+' / '+local.length+' 件委託。可以慢慢完成，沒有時間限制。</div><div class="v10-event-list">'+local.map(e=>'<div>'+e[2]+' '+e[1]+'　'+(S.v10.side[e[0]]?'✓':'✦')+'</div>').join('')+'</div>',
local.map(e=>({label:(S.v10.side[e[0]]?'✓ ':'✦ ')+e[1],action:()=>sideEvent(ctx,S,e)})).concat([{label:'下次再來',primary:true}]));
}
function sideEvent(ctx,S,e){
if(S.v10.side[e[0]])return ctx.dialogText(e[1],e[7]+' 已經完成這個小冒險。',[{label:'回委託板',action:()=>sideBoard(ctx,S)}],e[2]);
question(ctx,e[2]+' '+e[1],e[4],e[5],e[6],()=>{
S.v10.side[e[0]]=true;reward(S,e[0],8,5);ctx.save();ctx.render();ctx.dialogText(e[1],e[7]+' 獲得經驗和星芽幣！',[{label:'回委託板',action:()=>sideBoard(ctx,S)}],e[2]);
});
}
function journey(ctx,S,to){
S.v10.island=to;S.x=to==='creek'?1:9;S.y=3;ctx.save();ctx.render();ctx.dialogText(to==='creek'?'抵達水晶溪谷':'回到星芽村',to==='creek'?'你來到溪流環繞的新島嶼，水獺小沫正在等你！':'熟悉的森林回來了。你可以繼續探索或整理自己的小屋。',[],'⛵');
}
function action(o,S,ctx){
normalize(S);const id=o.id;
if(id==='valleyGate'){
 if(step(S)<8)ctx.dialogText('水晶溪谷入口','先完成彩虹橋、洞穴、花圃和森林寶箱，就能打開新的航道。',[],'⛵');
 else if(step(S)===8)finish(S,8,ctx,'找到溪谷航道','你開啟了水晶溪谷的路線！再次點擊這個入口就能搭船前往。');
 else journey(ctx,S,'creek');return true;
}
if(id==='valleyReturn'){journey(ctx,S,'starbud');return true}
if(id==='sideBoard'||id==='valleyBoard'){sideBoard(ctx,S);return true}
if(id==='petStop'){window.STARBUD_V10_WORLD?.petDialog(ctx,S);return true}
if(id==='otter'){
if(step(S)===9)finish(S,9,ctx,'水獺小沫','你好！我叫小沫。河道堵住了，我們可以一起讓溪水恢復流動！');
else ctx.dialogText('水獺小沫','很高興你來溪谷！慢慢探險，有困難可以回來找我。',[],'🦦');return true;
}
if(id.startsWith('pebble')){
if(step(S)<10){ctx.dialogText('閃亮河石','先去找水獺小沫認識溪谷，再一起探索三枚河石。',[],'💠');return true}
if(S.v10.stones.includes(id))ctx.dialogText('河石','這顆石頭已經收進探索圖鑑了！',[],'💠');
else{
 S.v10.stones.push(id);reward(S,'stone-'+id,6,3);ctx.save();ctx.render();
 if(S.v10.stones.length===3)finish(S,10,ctx,'三枚河石','三枚不同顏色的河石都找到了！現在可以協助水道復原。');
 else ctx.dialogText('找到河石','找到第 '+S.v10.stones.length+' 顆河石！試著找找溪谷其他角落。',[],'💠');
}return true;
}
if(id==='frog'){
 if(step(S)===13)finish(S,13,ctx,'青蛙阿綠','呱呱！溪水恢復清澈了！謝謝你照顧我的池塘朋友。');
 else ctx.dialogText('青蛙阿綠','河流和池塘是很多小動物的家，記得一起保護環境。',[],'🐸');
 return true;
}
const map={sluice:11,driftwood:12,firefly:14,seedling:15,waterwheel:16,windsock:17,beacon:18};
if(map[id]){
const n=step(S),wanted=map[id];
if(n<wanted)ctx.dialogText(o.name,'先完成「'+C[n-1][0]+'」，稍後再來體驗這個地方。',[],'🌱');
else if(n>wanted)ctx.dialogText(o.name,'這個地方已經恢復了！你的幫忙讓溪谷更漂亮。',[],'✨');
else puzzle(ctx,S,id,n);
return true;
}
return false;
}
window.STARBUD_V10_CORE={normalize,complete,step,quest,goal,objects:OBJECTS,action,sideBoard,side:EV,chapters:C,PETS,DECOR,reward};
})();