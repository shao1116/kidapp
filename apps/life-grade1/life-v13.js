/* KidApp life grade 1 v1.3: original illustrated, touch/keyboard friendly activities */
const LIFE_V13_TASKS={
plant:[
{id:'P16',kind:'life13',game:'match',q:'種子尋寶隊：幫三種種子找到長大後的植物！',hint:'仔細看種子的外形與顏色。',explain:'不同植物的種子，外形和大小常常不同。',level:1,pairs:[['sunseed','sunflower'],['acorn','oak'],['melonseed','watermelon']]},
{id:'P17',kind:'life13',game:'sequence',q:'種子時光機：豆子長大的順序是什麼？',hint:'先有種子，接著小根長出來。',explain:'豆子萌芽時，根通常先出現，接著長出芽和葉子。',level:1,order:['seed','rooted','sprout','seedling']},
{id:'P18',kind:'life13',game:'spot',q:'地底下的祕密：植物主要從哪裡吸收水？',hint:'看看藏在土壤下的部分。',explain:'根能從土壤中吸收水分，再運送到植物其他部位。',level:1,items:['root','stem','leaf'],answer:'root'},
{id:'P19',kind:'life13',game:'match',q:'種子的旅行：幫種子找到適合的旅行方法！',hint:'蒲公英像小傘；鬼針草會黏在衣服上。',explain:'蒲公英可隨風飛散，鬼針草果實會附著衣物，椰子能隨水漂流。',level:2,pairs:[['dandelion','wind'],['burr','clothes'],['coconut','waterway']]},
{id:'P20',kind:'life13',game:'bee',q:'花朵快遞員：幫蜜蜂把花粉帶到另一朵花！',hint:'先拜訪左邊的花，再到右邊的花。',explain:'蜜蜂可能將一朵花的花粉帶到同種另一朵花的柱頭，幫助傳粉；傳粉不一定成功結果。',level:2},
{id:'P21',kind:'life13',game:'spot',q:'葉子小偵探：這片葉子的缺口，可能是誰咬的？',hint:'仔細看葉子上的小動物。',explain:'這張示意圖中毛毛蟲正在啃食葉片，因此是合理的線索。',level:2,items:['caterpillar','raindrop','sun'],answer:'caterpillar'},
{id:'P22',kind:'life13',game:'match',q:'蔬菜身體猜猜樂：我們吃的是哪個部分？',hint:'紅蘿蔔在土裡，菠菜有綠葉，番茄是果實。',explain:'紅蘿蔔主要吃根，菠菜吃葉，番茄吃果實。',level:2,pairs:[['carrot','rootPart'],['spinach','leafPart'],['tomato','fruitPart']]},
{id:'P23',kind:'life13',game:'experiment',q:'公平實驗：想比較土壤，就只改變土壤！',hint:'水分和陽光一樣，只有土壤不一樣。',explain:'公平比較時要盡量只改變一個條件。本題比較土壤，不表示某種土一定比較好。',level:3},
{id:'P24',kind:'life13',game:'drain',q:'花盆排水工程師：下雨後，哪個花盆比較不會積水？',hint:'找一找花盆底部的排水孔。',explain:'有適當排水孔的盆器通常更容易排出多餘的水，但還要留意土壤和環境。',level:2},
{id:'P25',kind:'life13',game:'sequence',q:'大樹的四季衣櫃：排出落葉樹的四季變化！',hint:'春天長嫩芽，夏天葉子茂盛。',explain:'某些落葉樹會隨季節萌芽、長葉、變色和落葉；不是所有樹都如此。',level:3,order:['springtree','summertree','autumntree','wintertree']}
],
festival:[
{id:'FES16',kind:'life13',game:'lantern',q:'元宵彩燈設計師：設計自己的安全小燈籠！',hint:'形狀和顏色都可以自己選，用 LED 比明火安全。',explain:'創作沒有固定顏色；使用安全的 LED 光源，不使用明火提燈。',level:1},
{id:'FES17',kind:'life13',game:'spot',q:'元宵猜燈謎：外面綠，裡面紅，還有黑色小種子？',hint:'想想夏天常吃的紅色果肉水果。',explain:'西瓜外皮通常是綠色，果肉常呈紅色，也可能有黑色種子。',level:1,items:['watermelon','apple','banana'],answer:'watermelon'},
{id:'FES18',kind:'life13',game:'sequence',q:'新年時光列車：把除夕、初一、初二排好！',hint:'吃年夜飯通常在除夕。',explain:'除夕之後是農曆正月初一，再來是初二；各家庭安排可能不同。',level:1,order:['newyeareve','newyear1','newyear2']},
{id:'FES19',kind:'life13',game:'coins',q:'紅包小小理財師：分配十枚遊戲硬幣吧！',hint:'可以自己決定存起來、花用或分享的數量。',explain:'金錢安排沒有唯一答案；可以考慮儲蓄、需要與分享。',level:2},
{id:'FES20',kind:'life13',game:'match',q:'清明綠色小隊：把活動後的垃圾分好！',hint:'乾淨紙張和空瓶可回收，使用過的衛生紙放一般垃圾。',explain:'離開活動場地時整理垃圾並保護環境。分類細節請依當地回收規定。',level:2,pairs:[['papertrash','recycle'],['bottletrash','recycle'],['tissue','general']]},
{id:'FES21',kind:'life13',game:'rhythm',q:'龍舟節奏隊長：聽四聲鼓，跟著划四下！',hint:'先按聽鼓聲，再跟著點四次划槳。',explain:'龍舟需要隊員相互配合；這是沒有速度壓力的節奏練習。',level:2},
{id:'FES22',kind:'life13',game:'mooncake',q:'月餅公平分享師：兩條切線分成四等份！',hint:'一條橫線加一條直線，穿過圓心。',explain:'兩條互相垂直、通過圓心的直線，能把圓形月餅分成四個相等部分。',level:2},
{id:'FES23',kind:'life13',game:'tangyuan',q:'冬至湯圓工坊：把四塊麵團揉圓！',hint:'先點四塊麵團，全部變圓後放進碗。',explain:'臺灣許多家庭會在冬至吃湯圓。遊戲只是模擬，熱水烹煮需大人操作。',level:1},
{id:'FES24',kind:'life13',game:'culture',q:'文化小記者：想了解阿美族豐年祭，可以怎麼做？',hint:'尊重部落規定，也可以用心聽族人介紹。',explain:'各部落祭典內容與規範不盡相同，參與前先了解並尊重族人的指引。',level:3},
{id:'FES25',kind:'life13',game:'story',q:'我的節慶故事館：設計一張你家的節慶故事卡！',hint:'自由選一個日子、一種活動及一種感受。',explain:'每個家庭都有不同的相聚方式和故事，沒有標準答案。',level:2}
]};
const LIFE_V13_NAMES={
sunseed:'向日葵種子',sunflower:'向日葵',acorn:'橡實',oak:'橡樹',melonseed:'西瓜種子',watermelon:'西瓜',
seed:'豆子',rooted:'長出小根',sprout:'冒出嫩芽',seedling:'展開綠葉',
root:'根',stem:'莖',leaf:'葉子',dandelion:'蒲公英',wind:'風',burr:'鬼針草果實',clothes:'褲管',coconut:'椰子',waterway:'水',
caterpillar:'毛毛蟲',raindrop:'雨滴',sun:'太陽',carrot:'紅蘿蔔',rootPart:'根',spinach:'菠菜',leafPart:'葉',tomato:'番茄',fruitPart:'果實',
springtree:'春天',summertree:'夏天',autumntree:'秋天',wintertree:'冬天',
apple:'蘋果',banana:'香蕉',newyeareve:'除夕',newyear1:'初一',newyear2:'初二',
papertrash:'乾淨紙張',bottletrash:'空塑膠瓶',tissue:'用過的衛生紙',recycle:'資源回收',general:'一般垃圾'
};
function life13Shape(id){
const rect=(x,y,w,h,color,r=7)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+color+'"/>';
const ell=(x,y,rx,ry,color)=>'<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+color+'"/>';
const circ=(x,y,r,color)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+color+'"/>';
const path=(d,fill,stroke='#668568',w=2)=>'<path d="'+d+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"/>';
const stem=path('M70 85Q66 60 70 33','none','#468957',5)+path('M70 64Q34 36 25 64Q49 76 70 64Z','#62b77a')+path('M70 50Q98 29 110 48Q94 67 70 50Z','#56a767');
const pot=path('M39 75H101L94 105H47Z','#dd9271','#ac7054',3)+rect(35,70,70,9,'#c97d5e',4);
const blossom=(color='#f3a2ad')=>Array.from({length:6},(_,i)=>'<ellipse cx="70" cy="37" rx="13" ry="24" transform="rotate('+(i*60)+' 70 63)" fill="'+color+'" stroke="#c2748b" stroke-width="1.5"/>').join('')+circ(70,63,15,'#f9cf58')+circ(70,63,6,'#d19f32');
const leaves=()=>path('M70 74Q31 24 15 60Q42 88 70 74Z','#62b777')+path('M70 74Q109 19 126 56Q102 83 70 74Z','#67c981');
const tree=(tone='#58ac66',bare=false)=>path('M60 97L63 54L47 43 M63 65L88 40','none','#956743',8)+(bare?'':circ(54,35,24,tone)+circ(89,39,26,tone)+circ(72,22,26,tone));
switch(id){
case 'sunseed':return path('M57 14Q89 20 76 89Q59 111 50 66Z','#3a3532','#b39d7e',3)+path('M58 31Q77 49 60 82','none','#e9dcc0',7);
case 'acorn':return ell(70,65,25,34,'#a86c3b')+path('M42 51Q47 25 71 28Q98 29 98 52Z','#815632','#76503c')+rect(67,20,7,13,'#6e5736',3);
case 'melonseed':return ell(70,61,29,40,'#302e33')+path('M69 28Q52 70 69 100','none','#f8edcf',7);
case 'sunflower':return '<g transform="translate(0,-16)">'+stem+Array.from({length:11},(_,i)=>'<ellipse cx="70" cy="37" rx="12" ry="26" transform="rotate('+(i*360/11)+' 70 47)" fill="#ffca46"/>').join('')+circ(70,47,23,'#784d2f')+'</g>';
case 'oak':return tree('#62a766',false)+ell(69,105,34,5,'#b5a785');
case 'watermelon':return circ(70,57,42,'#469e5b')+path('M50 20Q65 55 50 96M80 18Q96 58 80 97','none','#267a43',7);
case 'seed':return ell(70,70,26,19,'#b37b4a')+ell(61,61,7,4,'#e7b57e');
case 'rooted':return ell(72,55,25,18,'#b47c4e')+path('M75 71Q76 97 57 106','none','#f3e0b9',6);
case 'sprout':return ell(70,82,21,13,'#b78555')+path('M70 72Q64 42 71 22','none','#73ac63',6)+path('M71 40Q38 13 42 43Z','#77c47e');
case 'seedling':return stem;
case 'root':return stem+pot+path('M70 78L70 115M70 91L52 104M70 95L86 112','none','#f1d4ac',5);
case 'stem':return stem+rect(52,44,36,58,'#dff2df',5)+path('M70 88L70 32','none','#237a47',8);
case 'leaf':return leaves()+path('M70 74L29 56M70 74L101 47','none','#2e7949',3);
case 'dandelion':return path('M70 107L70 46','none','#3c9b6d',5)+Array.from({length:13},(_,i)=>{let a=i*2*Math.PI/13;return path('M70 44L'+(70+Math.cos(a)*32).toFixed(1)+' '+(44+Math.sin(a)*32).toFixed(1),'none','#9c9aa2',2)+circ(70+Math.cos(a)*34,44+Math.sin(a)*34,3,'#f7fbff')}).join('');
case 'wind':return path('M20 35Q43 20 74 34Q112 44 123 22M13 60Q60 43 101 60M27 82Q76 70 116 91','none','#4ba9cc',7);
case 'burr':return circ(70,60,26,'#856d42')+Array.from({length:11},(_,i)=>{let a=i*2*Math.PI/11;return path('M'+(70+Math.cos(a)*16)+' '+(60+Math.sin(a)*16)+'L'+(70+Math.cos(a)*39)+' '+(60+Math.sin(a)*39),'none','#6c593c',4)}).join('');
case 'clothes':return path('M44 16H99L91 103H70L65 56L62 103H35Z','#6d98c6','#446f9d',4)+rect(43,15,56,13,'#355c87',1);
case 'coconut':return circ(70,62,34,'#986943')+circ(61,52,5,'#60452e')+circ(82,52,5,'#60452e')+circ(70,74,4,'#60452e');
case 'waterway':return path('M0 40Q20 28 40 40T80 40T140 40M0 65Q20 53 40 65T80 65T140 65M0 90Q20 78 40 90T80 90T140 90','none','#4ca6d7',8);
case 'caterpillar':return leaves()+[38,53,68,83].map((x,i)=>circ(x,57+(i%2)*3,12,i%2?'#83bf50':'#a3d86e')).join('')+circ(91,51,4,'#293b2e');
case 'raindrop':return path('M70 15Q42 58 43 74A27 27 0 0 0 97 74Q99 58 70 15Z','#59b9e0','#2e92c1',3);
case 'sun':return circ(70,55,31,'#ffd054')+Array.from({length:10},(_,i)=>{let a=i*Math.PI/5;return path('M'+(70+Math.cos(a)*38)+' '+(55+Math.sin(a)*38)+'l'+(Math.cos(a)*13)+' '+(Math.sin(a)*13),'none','#f6aa32',5)}).join('');
case 'carrot':return path('M45 39Q71 26 92 41Q85 75 69 105Q55 76 45 39Z','#f79b3e','#d87532',3)+path('M67 39Q44 13 54 8Q75 17 70 37Q82 6 95 11Q96 29 72 41Z','#60af63');
case 'spinach':return Array.from({length:4},(_,i)=>path('M70 97Q'+(15+i*25)+' '+(15+i*3)+' '+(36+i*21)+' 31Q'+(92+i*3)+' 27 70 97Z',i%2?'#70bd6e':'#429f60')).join('');
case 'tomato':return circ(70,68,36,'#ee6659')+path('M70 33L51 44L58 31L70 36L86 29L84 42Z','#489856');
case 'springtree':return tree('#b9d76d')+circ(42,35,8,'#f2adc1')+circ(91,26,8,'#f8c0cb');
case 'summertree':return tree('#289b56');
case 'autumntree':return tree('#db9449')+circ(35,92,5,'#ca7847')+circ(110,101,6,'#e8b34b');
case 'wintertree':return tree('#aaa7a1',true)+path('M15 112H124','none','#9cbbd0',6);
case 'apple':return circ(69,68,33,'#db574d')+path('M68 34Q71 20 78 18','none','#80634c',5)+path('M74 27Q93 13 98 31Z','#62af6e');
case 'banana':return path('M29 35Q31 95 92 97Q113 93 119 58Q90 89 59 75Q43 66 29 35Z','#efd252','#ba9f3a',4);
case 'newyeareve':return rect(22,58,96,40,'#d8a17a')+ell(70,67,32,14,'#ffebcc')+circ(70,61,17,'#e69e5e')+rect(47,15,46,20,'#d25052');
case 'newyear1':return rect(33,25,74,74,'#d35256',8)+rect(42,43,56,33,'#efba59')+circ(70,60,15,'#df514f');
case 'newyear2':return rect(29,24,82,72,'#9ed3bd')+path('M36 70L70 45L104 70','none','#e7a267',7)+rect(59,67,22,29,'#ffe9bc');
case 'papertrash':return rect(35,23,70,73,'#fcf6e5')+path('M48 46H93M48 60H86M48 73H95','none','#8eb7bc',4);
case 'bottletrash':return rect(60,17,20,16,'#59a8c7',2)+path('M60 32L47 51V98H93V51L80 32Z','#8cc9df','#56a1c4',4)+rect(52,61,36,17,'#fbf6c1');
case 'tissue':return path('M25 78Q20 42 44 49Q60 17 79 44Q108 30 116 69Q105 101 72 88Q46 104 25 78Z','#f3ede6','#bfbcb4',3);
case 'recycle':return rect(35,38,70,66,'#64b49b')+path('M44 40L55 23H87L98 40Z','#61b49b','#397e75',3)+path('M58 75L71 52L83 75Z','none','#fff',4);
case 'general':return rect(35,38,70,66,'#9b9faa')+path('M31 38H110L98 26H43Z','#767e8c')+path('M58 57L85 85M85 57L58 85','none','#fff',5);
default:return pot+stem;
}}
function life13Art(id){
return '<svg viewBox="0 0 140 120" class="life13-svg" role="img" aria-label="'+escapeHTML(LIFE_V13_NAMES[id]||id)+'"><rect x="2" y="2" width="136" height="116" rx="16" fill="#f4faf6"/>'+life13Shape(id)+'</svg>';
}
function life13Complete(t,msg){if(!solved)markDone();feedback(msg||('闖關成功！'+t.explain+' 還可以重新玩或按下一題。'),'good');}
function life13Status(msg){const e=$('life13Status');if(e)e.innerHTML=readMarkup(msg);}
function life13Shell(t,body,note='點選圖卡操作，也可以再試一次。'){
$('visualArea').innerHTML='<section class="life13-zone"><div class="life13-head"><span class="life13-sparkle">✦</span> '+readMarkup('動手玩一玩')+'</div>'+body+'<div class="life13-status" id="life13Status" role="status">'+readMarkup(note)+'</div></section>';
}
function life13Card(id,attr='',selected=false){return '<button type="button" class="life13-card'+(selected?' picked':'')+'" '+attr+'>'+life13Art(id)+'<span>'+readMarkup(LIFE_V13_NAMES[id]||id)+'</span></button>';}
function life13Render(t){
const g=t.game; 
if(g==='match')return life13Match(t);
if(g==='sequence')return life13Sequence(t);
if(g==='spot')return life13Spot(t);
if(g==='bee')return life13Bee(t);
if(g==='experiment')return life13Experiment(t);
if(g==='drain')return life13Drain(t);
if(g==='lantern')return life13Lantern(t);
if(g==='coins')return life13Coins(t);
if(g==='rhythm')return life13Rhythm(t);
if(g==='mooncake')return life13Mooncake(t);
if(g==='tangyuan')return life13Tangyuan(t);
if(g==='culture')return life13Culture(t);
if(g==='story')return life13Story(t);
}
function life13Match(t){
let source=null;const done=new Set(),pairs=t.pairs;
const sources=pairs.map(p=>p[0]),dest=[...new Set(pairs.map(p=>p[1]))];
const body='<div class="life13-columns"><div><b>'+readMarkup('先選左邊')+'</b><div class="life13-grid">'+sources.map(id=>life13Card(id,'data-source="'+id+'"')).join('')+'</div></div><div><b>'+readMarkup('再選右邊')+'</b><div class="life13-grid">'+dest.map(id=>life13Card(id,'data-dest="'+id+'"')).join('')+'</div></div></div><div class="life13-links" id="life13Links"></div>';
life13Shell(t,body,'先點左邊圖卡，再點右邊配對。');
const links=$('life13Links');
function refresh(){document.querySelectorAll('[data-source]').forEach(b=>{b.classList.toggle('picked',b.dataset.source===source);b.classList.toggle('matched',done.has(b.dataset.source));b.disabled=done.has(b.dataset.source)});links.innerHTML=[...done].map(x=>'<span class="life13-pill">'+readMarkup(LIFE_V13_NAMES[x]+' ✓')+'</span>').join('');}
document.querySelectorAll('[data-source]').forEach(b=>b.onclick=()=>{source=b.dataset.source;refresh();life13Status('選好了，請點右邊相對應的圖片。');});
document.querySelectorAll('[data-dest]').forEach(b=>b.onclick=()=>{if(!source){life13Status('先選左邊的一張圖卡喔！');return;}const match=pairs.find(p=>p[0]===source);if(match&&match[1]===b.dataset.dest){done.add(source);source=null;refresh();if(done.size===pairs.length){life13Status('全部配對成功！');life13Complete(t);}else life13Status('配對成功！再完成剩下的圖卡。');}else{life13Status('這兩張不太相配，換一個答案再試試。');feedback('看清楚外形和線索，再試一次！','retry');}});
}
function life13Sequence(t){
let selected=[];const original=[...t.order].reverse();
life13Shell(t,'<div class="life13-seq-picked" id="life13Picked"></div><div class="life13-grid life13-seq-cards" id="life13Cards"></div><div class="life13-actions"><button class="small-btn" id="life13Undo" type="button">'+readMarkup('退一步')+'</button><button class="small-btn" id="life13Again" type="button">'+readMarkup('重排')+'</button></div>','照順序點圖片，排錯了也能重新試。');
function redraw(){
$('life13Picked').innerHTML=t.order.map((_,i)=>'<div class="life13-slot">'+(selected[i]?life13Art(selected[i])+'<span>'+readMarkup(LIFE_V13_NAMES[selected[i]])+'</span>':'<span class="life13-empty">'+(i+1)+'</span>')+'</div>').join('');
$('life13Cards').innerHTML=original.filter(x=>!selected.includes(x)).map(id=>life13Card(id,'data-step="'+id+'"')).join('');
document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{selected.push(b.dataset.step);redraw();if(selected.length===t.order.length){if(selected.every((v,i)=>v===t.order[i])){life13Status('順序全部正確！');life13Complete(t);}else{life13Status('順序好像還有不同，再按重排試試看。');feedback('再看看哪一張圖應該先出現。','retry');}}else life13Status('排好了 '+selected.length+' / '+t.order.length+' 張，繼續試！');});
}
$('life13Undo').onclick=()=>{selected.pop();redraw();life13Status('已退回一步。')};
$('life13Again').onclick=()=>{selected=[];redraw();life13Status('重新開始排序。')};redraw();
}
function life13Spot(t){
const scene=t.id==='P18'?'<div class="life13-cutaway"><div class="life13-ground">'+life13Art('root')+'</div><span>'+readMarkup('看看根、莖、葉子')+'</span></div>':t.id==='P21'?'<div class="life13-cutaway">'+life13Art('caterpillar')+'<span>'+readMarkup('看看葉子上的線索')+'</span></div>':'<div class="life13-cutaway">'+life13Art('watermelon')+'<span>'+readMarkup('仔細看裡面的顏色')+'</span></div>';
life13Shell(t,scene+'<div class="life13-grid">'+t.items.map(id=>life13Card(id,'data-spot="'+id+'"')).join('')+'</div>','看看圖片，找出最符合的答案。');
document.querySelectorAll('[data-spot]').forEach(b=>b.onclick=()=>{if(b.dataset.spot===t.answer){b.classList.add('matched');life13Status('找到正確線索了！');life13Complete(t);}else{life13Status('這個還不是最好的答案，再觀察看看。');feedback('再仔細看看圖中的線索。','retry');}});
}
function life13Bee(t){
let stage=0;
const flower=(n)=>'<button class="life13-flower" type="button" data-flower="'+n+'" aria-label="'+(n===1?'第一朵花':'第二朵花')+'"><svg viewBox="0 0 140 150" role="img" aria-label="清楚的花朵與花粉"><path d="M70 84V141" fill="none" stroke="#579b69" stroke-width="8"/><path d="M69 118Q30 83 18 119Q49 132 69 118Z" fill="#77be82"/><g transform="translate(0,2)">'+Array.from({length:6},(_,i)=>'<ellipse cx="70" cy="37" rx="14" ry="27" transform="rotate('+(i*60)+' 70 64)" fill="'+(n===1?'#f7b8c9':'#b6b0e9')+'"/>').join('')+'<circle cx="70" cy="64" r="16" fill="#f2c34c"/><circle cx="70" cy="64" r="5" fill="#bb8830"/></g></svg><span>'+readMarkup(n===1?'第一朵花':'第二朵花')+'</span></button>';
const bee='<svg class="life13-bee" viewBox="0 0 130 85" aria-label="蜜蜂" role="img"><ellipse cx="52" cy="25" rx="19" ry="15" fill="#d7eefa"/><ellipse cx="81" cy="25" rx="19" ry="15" fill="#d7eefa"/><ellipse cx="66" cy="51" rx="42" ry="27" fill="#ffcf4c"/><path d="M55 26V77M80 27V76" stroke="#4b433a" stroke-width="11"/><circle cx="100" cy="49" r="4" fill="#3c352f"/></svg>';
life13Shell(t,'<div class="life13-bee-scene">'+flower(1)+'<div class="life13-bee-center">'+bee+'<div id="beePollen">'+readMarkup('還沒沾到花粉')+'</div></div>'+flower(2)+'</div>','先點第一朵花，幫蜜蜂沾上花粉。');
document.querySelectorAll('[data-flower]').forEach(b=>b.onclick=()=>{const n=Number(b.dataset.flower);if(stage===0&&n===1){stage=1;$('beePollen').innerHTML=readMarkup('蜜蜂沾到花粉啦！');life13Status('再拜訪右邊的同種花。');b.classList.add('picked');}else if(stage===1&&n===2){stage=2;b.classList.add('picked');$('beePollen').innerHTML=readMarkup('花粉送到了！');life13Status('傳粉任務成功！');life13Complete(t);}else if(stage===2){stage=0;document.querySelectorAll('[data-flower]').forEach(x=>x.classList.remove('picked'));$('beePollen').innerHTML=readMarkup('重新開始');life13Status('再來一次，先點左邊。');}else life13Status('先拜訪左邊的花喔！');});
}
function life13Experiment(t){
const vals={water:'same',light:'same',soil:'same'};
const rows=[['water','澆水量'],['light','日照'],['soil','土壤']];
life13Shell(t,'<div class="life13-experiment"><div class="life13-pots">'+life13Art('seedling')+'<span>'+readMarkup('A 盆　　B 盆')+'</span>'+life13Art('seedling')+'</div>'+rows.map(([id,label])=>'<div class="life13-ex-row"><strong>'+readMarkup(label)+'</strong><button type="button" class="life13-toggle" data-variable="'+id+'" aria-pressed="false">'+readMarkup('保持一樣')+'</button></div>').join('')+'</div><div class="life13-actions"><button type="button" class="primary" id="life13Test">'+readMarkup('開始比較')+'</button></div>','點按鈕切換「保持一樣」或「改變條件」。');
document.querySelectorAll('[data-variable]').forEach(b=>b.onclick=()=>{const k=b.dataset.variable;vals[k]=vals[k]==='same'?'different':'same';b.textContent=vals[k]==='same'?'保持一樣':'改變條件';b.classList.toggle('picked',vals[k]==='different');b.setAttribute('aria-pressed',String(vals[k]==='different'));});
$('life13Test').onclick=()=>{const ok=vals.water==='same'&&vals.light==='same'&&vals.soil==='different';if(ok){life13Status('太好了！只有土壤不同，就能公平比較。');life13Complete(t);}else{life13Status('試試讓澆水量和日照一樣，只改變土壤。');feedback('要比較土壤，就不能同時改變太多條件。','retry');}};
}
function life13Drain(t){
let choice=null;
const pot=(holes)=>'<svg class="life13-pot-svg" viewBox="0 0 200 165" role="img" aria-label="'+(holes?'有排水孔花盆':'無排水孔花盆')+'"><path d="M52 43H148L137 133H63Z" fill="#d9a07d" stroke="#976c53" stroke-width="6"/><rect x="45" y="40" width="110" height="16" rx="7" fill="#bd7e5d"/><path d="M70 59Q100 51 129 59" stroke="#876844" stroke-width="7" fill="none"/><path d="M100 56V12M100 34Q65 10 62 26Q78 52 100 34M100 33Q132 5 146 23Q126 46 100 33" stroke="#5a986b" stroke-width="7" fill="#76be84"/>'+(holes?'<circle cx="100" cy="127" r="6" fill="#563d32"/>':'')+'</svg>';
life13Shell(t,'<div class="life13-two-pots"><button class="life13-pot-button" type="button" data-pot="holes">'+pot(true)+'<span>'+readMarkup('有排水孔')+'</span></button><button class="life13-pot-button" type="button" data-pot="solid">'+pot(false)+'<span>'+readMarkup('沒有排水孔')+'</span></button></div><div class="life13-actions"><button id="life13Rain" class="primary" type="button">'+readMarkup('下雨啦！')+'</button></div><div id="life13RainResult" class="life13-rain-result"></div>','先選一個花盆，再按下雨啦。');
document.querySelectorAll('[data-pot]').forEach(b=>b.onclick=()=>{choice=b.dataset.pot;document.querySelectorAll('[data-pot]').forEach(x=>x.classList.toggle('picked',x===b));});
$('life13Rain').onclick=()=>{if(!choice){life13Status('先選一個花盆。');return;}const yes=choice==='holes';$('life13RainResult').innerHTML='<div class="life13-rain-pic">'+pot(yes)+(yes?'<span class="life13-drips">💧 ↓ 💧</span>':'<span class="life13-drips">💦 積水</span>')+'</div><p>'+readMarkup(yes?'多餘的水比較容易流出。':'沒有排水孔，水容易留在盆底。')+'</p></div>';if(yes){life13Complete(t);life13Status('排水成功！還可以換花盆比較。');}else{feedback('這個盆子可能會積水，再試有排水孔的。','retry');life13Status('再選另一個花盆，比較排水差別。');}};
}
function life13Lantern(t){
const v={shape:null,color:null,light:null};const rows=[['shape','燈籠形狀',[['round','圓圓'],['fish','小魚']]],['color','燈籠顏色',[['red','紅色'],['blue','藍色']]],['light','光源',[['led','LED 小燈'],['fire','明火蠟燭']]]];
life13Shell(t,'<div class="life13-lantern-preview" id="life13LanternPic"></div>'+rows.map(([k,label,opts])=>'<div class="life13-selector"><b>'+readMarkup(label)+'</b><div>'+opts.map(([id,name])=>'<button type="button" data-lantern="'+k+'" data-val="'+id+'">'+readMarkup(name)+'</button>').join('')+'</div></div>').join('')+'<div class="life13-actions"><button class="primary" type="button" id="life13Light">'+readMarkup('點亮我的燈籠')+'</button></div>','喜歡的形狀和顏色都可以，自由設計。');
function paint(lit=false){const c=v.color==='blue'?'#7eb8de':'#e96c73';const fish=v.shape==='fish';$('life13LanternPic').innerHTML='<svg viewBox="0 0 320 180" role="img" aria-label="自己設計的燈籠"><rect width="320" height="180" rx="18" fill="'+(lit?'#273d60':'#eaf4fa')+'"/><path d="M159 0V37" stroke="#9b7b5e" stroke-width="5"/><ellipse cx="160" cy="88" rx="'+(fish?76:54)+'" ry="56" fill="'+c+'" stroke="#ac6575" stroke-width="5"/>'+(fish?'<path d="M86 88L52 54L52 125Z" fill="'+c+'" stroke="#ac6575" stroke-width="4"/><circle cx="188" cy="72" r="7" fill="white"/>':'<path d="M126 39Q160 24 194 39M125 140Q160 152 195 140" fill="none" stroke="#f5d4ac" stroke-width="8"/>')+'<rect x="151" y="140" width="18" height="19" fill="#dcb15d"/>'+(lit?'<circle cx="160" cy="88" r="52" fill="#ffeaa1" opacity=".30"/>':'')+'</svg>';}
document.querySelectorAll('[data-lantern]').forEach(b=>b.onclick=()=>{v[b.dataset.lantern]=b.dataset.val;document.querySelectorAll('[data-lantern="'+b.dataset.lantern+'"]').forEach(x=>x.classList.toggle('picked',x===b));paint(false);});paint();
$('life13Light').onclick=()=>{if(!v.shape||!v.color||!v.light){life13Status('先選形狀、顏色和光源。');return;}if(v.light==='fire'){life13Status('真實手提燈籠避免使用明火，請換成 LED。');feedback('改用安全的 LED 光源再試試看。','retry');return;}paint(true);life13Status('燈籠亮起來啦！還能換設計繼續玩。');life13Complete(t);};
}
function life13Coins(t){
const jars=[['save','存起來'],['use','需要的花用'],['share','分享']];const v={save:0,use:0,share:0};
life13Shell(t,'<div class="life13-coin-track" id="life13CoinTrack"></div><div class="life13-jar-grid">'+jars.map(([id,name])=>'<button type="button" data-jar="'+id+'" class="life13-jar"><span class="life13-jar-icon">＄</span><strong>'+readMarkup(name)+'</strong><b id="life13Jar'+id+'">0</b></button>').join('')+'</div><div class="life13-actions"><button type="button" id="life13CoinUndo" class="small-btn">'+readMarkup('退一枚')+'</button><button type="button" id="life13CoinReset" class="small-btn">'+readMarkup('重新分配')+'</button></div>','點一個罐子放進一枚硬幣，十枚都放好就完成。');
let history=[];
function refresh(){const n=history.length;$('life13CoinTrack').innerHTML=Array.from({length:10},(_,i)=>'<span class="life13-coin'+(i<n?' used':'')+'">＄</span>').join('');jars.forEach(([id])=>$('life13Jar'+id).textContent=v[id]);if(n===10){life13Status('十枚都安排好了！可以再試不同分配。');life13Complete(t);}else life13Status('已分配 '+n+' / 10 枚。');}
document.querySelectorAll('[data-jar]').forEach(b=>b.onclick=()=>{if(history.length>=10){life13Status('十枚已分完，按退一枚或重新分配。');return;}history.push(b.dataset.jar);v[b.dataset.jar]++;refresh();});
$('life13CoinUndo').onclick=()=>{const k=history.pop();if(k)v[k]--;refresh();};
$('life13CoinReset').onclick=()=>{history=[];jars.forEach(([k])=>v[k]=0);refresh();};refresh();
}
function life13Rhythm(t){
let taps=0,playing=false;
const boat='<svg viewBox="0 0 360 170" role="img" aria-label="龍舟、鼓手和隊員"><path d="M22 140Q90 127 174 139T346 137V170H22Z" fill="#abddeb"/><path d="M38 96L309 96Q290 142 81 139Z" fill="#d78c4c" stroke="#a96b39" stroke-width="4"/><path d="M300 97Q330 68 342 94L314 111Z" fill="#e9b15b"/>'+Array.from({length:4},(_,i)=>'<circle cx="'+(95+i*50)+'" cy="77" r="13" fill="#f4c7a2"/><path d="M'+(95+i*50)+' 93L'+(111+i*50)+' 111" stroke="#5b84a6" stroke-width="12"/><path d="M'+(101+i*50)+' 104L'+(126+i*50)+' 151" stroke="#936c49" stroke-width="6"/>').join('')+'<circle cx="58" cy="68" r="12" fill="#f4c7a2"/><circle cx="58" cy="99" r="15" fill="#d7bd68"/></svg>';
life13Shell(t,'<div class="life13-boat" id="life13Boat">'+boat+'</div><div class="life13-beats" id="life13Beats"></div><div class="life13-actions"><button class="small-btn" id="life13Hear" type="button">'+readMarkup('聽四聲鼓')+'</button><button class="primary" id="life13Row" type="button">'+readMarkup('划一下！')+'</button><button class="small-btn" id="life13RowReset" type="button">'+readMarkup('重新開始')+'</button></div>','先聽四聲鼓，再點四下划槳。');
function update(){ $('life13Beats').innerHTML=Array.from({length:4},(_,i)=>'<span class="'+(i<taps?'hit':'')+'">'+(i+1)+'</span>').join('');$('life13Boat').style.transform='translateX('+(taps*7)+'px)';}
$('life13Hear').onclick=()=>{if(playing)return;playing=true;let left=0;const run=()=>{if(!document.getElementById('life13Hear')){playing=false;return;}try{const AC=window.AudioContext||window.webkitAudioContext;if(AC){const ctx=window.life13DrumCtx||(window.life13DrumCtx=new AC());if(ctx.state==='suspended')ctx.resume();const osc=ctx.createOscillator(),gain=ctx.createGain(),now=ctx.currentTime;osc.type='triangle';osc.frequency.setValueAtTime(155,now);osc.frequency.exponentialRampToValueAtTime(70,now+.14);gain.gain.setValueAtTime(.16,now);gain.gain.exponentialRampToValueAtTime(.001,now+.17);osc.connect(gain).connect(ctx.destination);osc.start(now);osc.stop(now+.18);}}catch{};left++;if(left<4)setTimeout(run,430);else playing=false;};run();life13Status('聽完鼓聲，跟著點四下！');};
$('life13Row').onclick=()=>{if(taps>=4){taps=0;}taps++;update();if(taps===4){life13Status('四位隊員合作划完了！還能重玩。');life13Complete(t);}else life13Status('划了 '+taps+' / 4 下。');};
$('life13RowReset').onclick=()=>{taps=0;update();life13Status('重新開始！');};update();
}
function life13Mooncake(t){
const lines=new Set();
life13Shell(t,'<div class="life13-moon-svg" id="life13MoonPic"></div><div class="life13-actions"><button type="button" class="small-btn" data-cut="horizontal">'+readMarkup('橫著切')+'</button><button type="button" class="small-btn" data-cut="vertical">'+readMarkup('直著切')+'</button><button type="button" class="small-btn" id="life13CutReset">'+readMarkup('重新切')+'</button></div>','讓兩條切線交叉穿過月餅的中心。');
function draw(){let content='<svg viewBox="0 0 300 240" role="img" aria-label="圓形月餅與切線"><circle cx="150" cy="116" r="90" fill="#dfae64" stroke="#ab7b40" stroke-width="11"/><circle cx="150" cy="116" r="71" fill="#efd090" stroke="#d9a554" stroke-width="6"/><circle cx="150" cy="116" r="37" fill="#ce8553"/>';if(lines.has('horizontal'))content+='<path d="M60 116H240" stroke="#fff" stroke-width="7" stroke-dasharray="10 4"/>';if(lines.has('vertical'))content+='<path d="M150 26V206" stroke="#fff" stroke-width="7" stroke-dasharray="10 4"/>';content+='</svg>';$('life13MoonPic').innerHTML=content;document.querySelectorAll('[data-cut]').forEach(b=>b.classList.toggle('picked',lines.has(b.dataset.cut)));}
document.querySelectorAll('[data-cut]').forEach(b=>b.onclick=()=>{lines.add(b.dataset.cut);draw();if(lines.size===2){life13Status('成功分成四等份！');life13Complete(t);}else life13Status('切出第一條線，再加另一個方向。');});
$('life13CutReset').onclick=()=>{lines.clear();draw();life13Status('重新設計切線。')};draw();
}
function life13Tangyuan(t){
const done=new Set();let bowled=false;
life13Shell(t,'<div class="life13-dough-grid">'+Array.from({length:4},(_,i)=>'<button type="button" data-dough="'+i+'" class="life13-dough"><span class="life13-dough-shape">◌</span><span>'+readMarkup('麵團 '+(i+1))+'</span></button>').join('')+'</div><div class="life13-bowl" id="life13Bowl">◡</div><div class="life13-actions"><button class="primary" id="life13BowlBtn" type="button">'+readMarkup('放進碗裡')+'</button><button class="small-btn" id="life13DoughReset" type="button">'+readMarkup('再做一次')+'</button></div>','點四塊麵團，揉成圓形後放進碗。');
document.querySelectorAll('[data-dough]').forEach(b=>b.onclick=()=>{done.add(Number(b.dataset.dough));b.classList.add('round');b.querySelector('.life13-dough-shape').textContent='●';life13Status('已揉圓 '+done.size+' / 4 顆。');});
$('life13BowlBtn').onclick=()=>{if(done.size!==4){life13Status('先揉圓四顆小湯圓。');return;}bowled=true;$('life13Bowl').innerHTML='<span>●　●<span>●　●</span></span>';life13Status('四顆湯圓都放進碗了！');life13Complete(t);};
$('life13DoughReset').onclick=()=>{done.clear();bowled=false;$('life13Bowl').textContent='◡';document.querySelectorAll('[data-dough]').forEach(b=>{b.classList.remove('round');b.querySelector('.life13-dough-shape').textContent='◌'});life13Status('再做一次！');};
}
function life13Culture(t){
const options=[['listen','用心聽族人介紹'],['rules','先詢問並遵守部落的規定'],['copy','沒問就模仿祭儀'],['mock','取笑不同的文化']];
life13Shell(t,'<div class="life13-culture-scene"><svg viewBox="0 0 340 160" role="img" aria-label="社區集會場景，有一位說話者與聆聽者"><rect width="340" height="160" rx="18" fill="#e8f5ec"/><path d="M0 142Q170 112 340 142V160H0Z" fill="#a3cca9"/>'+[85,170,255].map((x,i)=>'<circle cx="'+x+'" cy="'+(i===1?56:79)+'" r="19" fill="#d6aa8c"/><path d="M'+(x-25)+' '+(i===1?84:105)+'Q'+x+' '+(i===1?70:95)+' '+(x+25)+' '+(i===1?84:105)+'V142H'+(x-25)+'Z" fill="'+['#68a2bd','#c48569','#75b69a'][i]+'"/>').join('')+'</svg><p>'+readMarkup('每個部落都有自己的故事與規範。')+'</p></div><div class="life13-option-list">'+options.map(([id,n])=>'<button type="button" data-culture="'+id+'">'+readMarkup(n)+'</button>').join('')+'</div>','選一個尊重文化的做法。');
document.querySelectorAll('[data-culture]').forEach(b=>b.onclick=()=>{if(['listen','rules'].includes(b.dataset.culture)){b.classList.add('picked');life13Status('尊重不同文化的好方法！');life13Complete(t);}else{life13Status('參與前應先取得同意、了解規則。');feedback('先問一問、聽一聽，再試試。','retry');}});
}
function life13Story(t){
const groups=[['day','選一個日子',['元宵節','冬至','家裡特別的日子']],['action','選一個活動',['一起吃飯','一起說故事','一起做手作']],['feeling','選一個感受',['開心','平靜','好奇']]];const selected={};
life13Shell(t,'<div class="life13-story-card" id="life13StoryPreview"></div>'+groups.map(([id,label,opts])=>'<div class="life13-selector"><b>'+readMarkup(label)+'</b><div>'+opts.map((x,i)=>'<button type="button" data-story="'+id+'" data-choice="'+i+'">'+readMarkup(x)+'</button>').join('')+'</div></div>').join('')+'<div class="life13-actions"><button class="primary" type="button" id="life13StorySave">'+readMarkup('完成故事卡')+'</button></div>','自由選擇，不需要和其他家庭一模一樣。');
function show(){$('life13StoryPreview').innerHTML='<div class="life13-story-sky">★　✦　★</div><strong>'+readMarkup(selected.day||'我的節慶故事')+'</strong><p>'+readMarkup(selected.action||'我們一起度過美好時光')+'</p><small>'+readMarkup(selected.feeling||'今天的心情')+'</small>';}
document.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>{let k=b.dataset.story;const grp=groups.find(x=>x[0]===k);selected[k]=grp[2][Number(b.dataset.choice)];document.querySelectorAll('[data-story="'+k+'"]').forEach(x=>x.classList.toggle('picked',x===b));show();});show();
$('life13StorySave').onclick=()=>{if(groups.some(([k])=>!selected[k])){life13Status('選好日子、活動和感受，再完成故事卡。');return;}life13Status('創作完成！還可以重新搭配。故事卡不會上傳或另外儲存。');life13Complete(t);};
}
const LIFE_V13_ZHUYIN={"芽":"ㄧㄚˊ","橡":"ㄒㄧㄤˋ","葵":"ㄎㄨㄟˊ","瓜":"ㄍㄨㄚ","葉":"ㄧㄝˋ","種":"ㄓㄨㄥˇ","根":"ㄍㄣ","莖":"ㄐㄧㄥ","苗":"ㄇㄧㄠˊ","豆":"ㄉㄡˋ","樹":"ㄕㄨˋ","部":"ㄅㄨˋ","察":"ㄔㄚˊ","泥":"ㄋㄧˊ","土":"ㄊㄨˇ","椰":"ㄧㄝˊ","鬼":"ㄍㄨㄟˇ","針":"ㄓㄣ","草":"ㄘㄠˇ","黏":"ㄋㄧㄢˊ","蒲":"ㄆㄨˊ","英":"ㄧㄥ","傘":"ㄙㄢˇ","蜜":"ㄇㄧˋ","蜂":"ㄈㄥ","粉":"ㄈㄣˇ","咬":"ㄧㄠˇ","洞":"ㄉㄨㄥˋ","蔬":"ㄕㄨ","菠":"ㄅㄛ","菜":"ㄘㄞˋ","蘿":"ㄌㄨㄛˊ","蔔":"˙ㄅㄛ","番":"ㄈㄢ","茄":"ㄑㄧㄝˊ","壤":"ㄖㄤˇ","差":"ㄔㄚ","驗":"ㄧㄢˋ","較":"ㄐㄧㄠˋ","較":"ㄐㄧㄠˋ","盆":"ㄆㄣˊ","排":"ㄆㄞˊ","孔":"ㄎㄨㄥˇ","積":"ㄐㄧ","落":"ㄌㄨㄛˋ","冬":"ㄉㄨㄥ","夏":"ㄒㄧㄚˋ","曬":"ㄕㄞˋ","燭":"ㄓㄨˊ","蠟":"ㄌㄚˋ","魚":"ㄩˊ","猜":"ㄘㄞ","謎":"ㄇㄧˊ","黑":"ㄏㄟ","外":"ㄨㄞˋ","裡":"ㄌㄧˇ","綠":"ㄌㄩˋ","除":"ㄔㄨˊ","夕":"ㄒㄧˋ","農":"ㄋㄨㄥˊ","曆":"ㄌㄧˋ","列":"ㄌㄧㄝˋ","車":"ㄔㄜ","幣":"ㄅㄧˋ","錢":"ㄑㄧㄢˊ","罐":"ㄍㄨㄢˋ","儲":"ㄔㄨˊ","蓄":"ㄒㄩˋ","財":"ㄘㄞˊ","清":"ㄑㄧㄥ","明":"ㄇㄧㄥˊ","圾":"ㄐㄧ","垃":"ㄌㄜˋ","塑":"ㄙㄨˋ","衛":"ㄨㄟˋ","紙":"ㄓˇ","節":"ㄐㄧㄝˊ","奏":"ㄗㄡˋ","鼓":"ㄍㄨˇ","槳":"ㄐㄧㄤˇ","龍":"ㄌㄨㄥˊ","划":"ㄏㄨㄚˊ","圓":"ㄩㄢˊ","等":"ㄉㄥˇ","份":"ㄈㄣˋ","橫":"ㄏㄥˊ","縱":"ㄗㄨㄥˋ","揉":"ㄖㄡˊ","湯":"ㄊㄤ","麵":"ㄇㄧㄢˋ","團":"ㄊㄨㄢˊ","碗":"ㄨㄢˇ","阿":"ㄚ","美":"ㄇㄟˇ","族":"ㄗㄨˊ","祭":"ㄐㄧˋ","儀":"ㄧˊ","規":"ㄍㄨㄟ","範":"ㄈㄢˋ","尊":"ㄗㄨㄣ","故":"ㄍㄨˋ","事":"ㄕˋ","卡":"ㄎㄚˇ","館":"ㄍㄨㄢˇ","動":"ㄉㄨㄥˋ","手":"ㄕㄡˇ","感":"ㄍㄢˇ","受":"ㄕㄡˋ","設":"ㄕㄜˋ","計":"ㄐㄧˋ","先":"ㄒㄧㄢ","燈":"ㄉㄥ","籠":"ㄌㄨㄥˊ","做":"ㄗㄨㄛˋ","玩":"ㄨㄢˊ","變":"ㄅㄧㄢˋ","另":"ㄌㄧㄥˋ","步":"ㄅㄨˋ","序":"ㄒㄩˋ","誤":"ㄨˋ","題":"ㄊㄧˊ","答":"ㄉㄚˊ","分":"ㄈㄣ","配":"ㄆㄟˋ","對":"ㄉㄨㄟˋ","擇":"ㄗㄜˊ","試":"ㄕˋ","再":"ㄗㄞˋ","看":"ㄎㄢˋ","聽":"ㄊㄧㄥ","同":"ㄊㄨㄥˊ","保":"ㄅㄠˇ","持":"ㄔˊ","重":"ㄔㄨㄥˊ","新":"ㄒㄧㄣ","已":"ㄧˇ","完":"ㄨㄢˊ","成":"ㄔㄥˊ","解":"ㄐㄧㄝˇ","釋":"ㄕˋ","安":"ㄢ","全":"ㄑㄩㄢˊ","作":"ㄗㄨㄛˋ","用":"ㄩㄥˋ"};
