/* KidApp v1.3.2: 15 original, visually grounded interactive water-conservation lessons.
   Every activity uses buttons for small-screen/touch/keyboard access. No external assets. */
const LIFE_WATER_V14_TASKS=[
{id:'U01',kind:'lifeWater14',game:'sequence',q:'洗手小超人：用正確的順序洗乾淨小手！',hint:'先沾濕，再關水用肥皂搓手，最後沖乾淨。',explain:'肥皂要搓遍手心、手背、指縫，搓洗時可關水，最後用清水沖淨。',level:1,steps:['wet','soap','rinse'],choices:['soap','rinse','wet']},
{id:'U02',kind:'lifeWater14',game:'sequence',q:'刷牙小隊長：刷牙時怎樣不浪費水？',hint:'牙刷沾濕後先把水關掉；刷好再漱口。',explain:'刷牙時不必讓水一直流；需要沖洗與漱口時再用適量清水。',level:1,steps:['brushWet','brushOff','brushClean','brushRinse'],choices:['brushClean','brushWet','brushRinse','brushOff']},
{id:'U03',kind:'lifeWater14',game:'detect',q:'漏水小偵探：找到一直漏水的地方，再找大人！',hint:'洗手台下方有水在滴，先指出漏水位置。',explain:'發現水管或水龍頭漏水，遠離濕滑區域，告訴老師或家長處理，不自行拆修。',level:1},
{id:'U04',kind:'lifeWater14',game:'sequence',q:'水果清潔員：怎樣把蘋果安全洗乾淨？',hint:'在流動的乾淨水下輕輕搓洗，不需要肥皂。',explain:'水果要用安全的流動清水洗淨；不使用肥皂清洗水果，洗好記得關水。',level:1,steps:['fruitRinse','fruitRub','fruitOff'],choices:['fruitRub','fruitOff','fruitRinse']},
{id:'U05',kind:'lifeWater14',game:'faucet',q:'關水守門員：離開洗手台前，先做哪件事？',hint:'看看水龍頭還有沒有水在流。',explain:'用完水檢查水龍頭是否已關緊，避免持續流水或漏水。',level:1,correct:'close',choices:[['leave','直接離開'],['close','把水龍頭關緊'],['play','用水沖地板玩']]},
{id:'U06',kind:'lifeWater14',game:'fill',q:'飲水剛剛好：幫小杯子裝適量的飲用水！',hint:'裝到杯子的記號附近就停下，不要讓水滿出來。',explain:'先裝自己喝得完的量，需要再補充，避免溢出，也別忘了補充足夠的飲水。',level:2},
{id:'U07',kind:'lifeWater14',game:'plant',q:'植物澆水員：觀察兩個花盆，決定要不要澆水！',hint:'土壤乾燥要適量澆水；土壤已經濕潤可以先觀察。',explain:'澆水應考慮植物種類與土壤狀況。土乾時適量澆，土仍濕潤時不要再灌大量的水。',level:2},
{id:'U08',kind:'lifeWater14',game:'sequence',q:'洗澡小達人：洗乾淨，也別讓水白白流！',hint:'先沖濕、暫時關水抹沐浴乳，最後再沖淨。',explain:'安全的情況下，抹沐浴乳時可暫時關水；身上的泡泡仍要沖乾淨。',level:2,steps:['showerWet','showerOff','showerSoap','showerRinse'],choices:['showerSoap','showerWet','showerRinse','showerOff']},
{id:'U09',kind:'lifeWater14',game:'sequence',q:'畫筆清潔站：清洗畫筆時，怎麼用水比較好？',hint:'先用專用水杯洗筆，再擦拭，髒水請大人依材料處理。',explain:'可以用專用水杯清洗畫筆、擦拭筆毛；顏料水不要拿來飲用或澆菜，清理方式請大人確認。',level:2,steps:['paintCup','paintWipe','paintAdult'],choices:['paintAdult','paintCup','paintWipe']},
{id:'U10',kind:'lifeWater14',game:'hazard',q:'濕滑警報！看到漏水和地上積水，怎麼辦？',hint:'先避開積水，再告訴大人。',explain:'水管漏水與地面積水可能造成滑倒，先退到安全處，請老師或家長處理。',level:2},
{id:'U11',kind:'lifeWater14',game:'match',q:'水的用途配對：幫兩個地方找到合適用途！',hint:'安全飲水機的水可以喝；洗手台可用水洗手。',explain:'飲用水應來自可靠安全的水源；清潔雙手也需要適量乾淨的水。',level:2,pairs:[['dispenser','drink'],['sink','wash']]},
{id:'U12',kind:'lifeWater14',game:'path',q:'操場安全路線：避開濕滑積水，走到同學旁邊！',hint:'只能走相鄰的乾燥地磚，不能踏進水坑。',explain:'看到積水或濕滑地面時要慢慢繞開；必要時提醒老師、等待協助。',level:3},
{id:'U13',kind:'lifeWater14',game:'source',q:'飲水補給站：口渴時，哪裡可以安全補水？',hint:'選擇有正常維護的乾淨飲水設備。',explain:'飲用水應來自符合飲用衛生要求的設備或來源；不要喝水溝或來源不明的水。',level:2},
{id:'U14',kind:'lifeWater14',game:'reuse',q:'水再利用小管家：三種情況可以怎麼做？',hint:'乾淨、沒加清潔劑的洗菜水，有時可由大人評估再利用；不明或含清潔劑的水不要亂用。',explain:'水的再利用要先看水質與用途。未經處理的雨水不能直接喝；含清潔劑的髒水也不宜拿去澆植物。',level:3},
{id:'U15',kind:'lifeWater14',game:'pledge',q:'我的節水徽章：選兩件你今天願意做到的好習慣！',hint:'四種做法都很好，選你最想先練習的兩項。',explain:'願意在生活中落實正確習慣，就是最棒的水資源守護員。',level:3}
];
const LIFE_WATER_V14_LABEL={
wet:'用清水沾濕雙手',soap:'關水，搓肥皂',rinse:'沖乾淨泡泡',
brushWet:'先把牙刷沾濕',brushOff:'關掉水龍頭',brushClean:'認真刷牙',brushRinse:'需要時用水漱口',
fruitRinse:'用流動清水沖蘋果',fruitRub:'輕輕搓洗果皮',fruitOff:'關水，完成清洗',
showerWet:'先沖濕身體',showerOff:'抹沐浴乳前先關水',showerSoap:'搓洗身體',showerRinse:'再沖乾淨泡泡',
paintCup:'用專用水杯洗畫筆',paintWipe:'拿布或紙擦淨筆毛',paintAdult:'請大人確認髒水怎麼處理',
dispenser:'飲水機',drink:'喝乾淨的水',sink:'洗手台',wash:'清洗雙手'
};
const LIFE_WATER_V14_ZHUYIN={"徽":"ㄏㄨㄟ","章":"ㄓㄤ","濕":"ㄕ","滑":"ㄏㄨㄚˊ","漏":"ㄌㄡˋ","警":"ㄐㄧㄥˇ","報":"ㄅㄠˋ","偵":"ㄓㄣ","探":"ㄊㄢˋ","容":"ㄖㄨㄥˊ","量":"ㄌㄧㄤˋ","蘋":"ㄆㄧㄥˊ","果":"ㄍㄨㄛˇ","搓":"ㄘㄨㄛ","肥":"ㄈㄟˊ","皂":"ㄗㄠˋ","沖":"ㄔㄨㄥ","淨":"ㄐㄧㄥˋ","刷":"ㄕㄨㄚ","漱":"ㄕㄨˋ","背":"ㄅㄟˋ","指":"ㄓˇ","縫":"ㄈㄥˋ","護":"ㄏㄨˋ","員":"ㄩㄢˊ","維":"ㄨㄟˊ","修":"ㄒㄧㄡ","漆":"ㄑㄧ","顏":"ㄧㄢˊ","料":"ㄌㄧㄠˋ","廢":"ㄈㄟˋ","理":"ㄌㄧˇ","洗":"ㄒㄧˇ","澡":"ㄗㄠˇ","抹":"ㄇㄛˇ","沐":"ㄇㄨˋ","浴":"ㄩˋ","擦":"ㄘㄚ","澆":"ㄐㄧㄠ","壺":"ㄏㄨˊ","盆":"ㄆㄣˊ","杯":"ㄅㄟ","泉":"ㄑㄩㄢˊ","飲":"ㄧㄣˇ","夠":"ㄍㄡˋ","餘":"ㄩˊ","髒":"ㄗㄤ","潔":"ㄐㄧㄝˊ","安":"ㄢ","選":"ㄒㄩㄢˇ","擇":"ㄗㄜˊ","鬆":"ㄙㄨㄥ","剛":"ㄍㄤ","桶":"ㄊㄨㄥˇ","飽":"ㄅㄠˇ","透":"ㄊㄡˋ","傾":"ㄑㄧㄥ","斜":"ㄒㄧㄝˊ","倒":"ㄉㄠˋ","戴":"ㄉㄞˋ","提":"ㄊㄧˊ","醒":"ㄒㄧㄥˇ","澡":"ㄗㄠˇ","滴":"ㄉㄧ","省":"ㄕㄥˇ","綠":"ㄌㄩˋ","植":"ㄓˊ","潤":"ㄖㄨㄣˋ","土":"ㄊㄨˇ","壤":"ㄖㄤˇ","嚴":"ㄧㄢˊ","重":"ㄓㄨㄥˋ","飲":"ㄧㄣˇ","漉":"ㄌㄨˋ","污":"ㄨ","染":"ㄖㄢˇ","互":"ㄏㄨˋ","約":"ㄩㄝ"};
function lifeWater14Svg(t,stage=0,opts={}){
 const c=(x,y,r,f,stroke='none')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'" stroke="'+stroke+'"/';
 const rect=(x,y,w,h,r,f,stroke='none')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+f+'" stroke="'+stroke+'"/';
 const path=(d,fill,stroke='none',sw=3)=>'<path d="'+d+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round"/>';
 const drop=(x,y,k=1)=>'<g transform="translate('+x+' '+y+') scale('+k+')">'+path('M0 -12Q-12 2-9 9A10 10 0 0 0 9 9Q12 2 0 -12Z','#4bbbe2','#238fbd',1.5)+'</g>';
 const bubble=(x,y,r)=>c(x,y,r,'#eefaff','#82bad9')+c(x-r*.3,y-r*.32,Math.max(1,r*.19),'#fff');
 const tap=(run=false,leak=false)=>'<g>'+rect(243,48,72,20,9,'#a5c4d2','#7394a4')+rect(282,55,20,66,7,'#98b3c4','#6b899b')+rect(211,104,94,21,7,'#9fc0d2','#6b899b')+rect(205,87,17,37,6,'#759aaf')+rect(276,25,11,26,5,'#5c8095')+rect(255,23,52,10,5,'#5c8095')+(run?path('M212 122Q213 149 211 196','none','#55bce3',9)+Array.from({length:4},(_,i)=>drop(208+i*5,146+i*12,.65)).join(''):leak?drop(215,146,1)+drop(218,186,.7):'')+'</g>';
 const sink=()=>path('M141 198Q157 254 265 261Q375 260 394 198Z','#e3f0f4','#87a9bb',7)+rect(133,193,270,14,7,'#f7fcff','#a4c8d1')+c(268,227,8,'#6f8d9d');
 const hand=(x,y)=>'<g transform="translate('+x+' '+y+')">'+path('M0 29Q-17 23-19 11Q-17 2-9 5L8 15L9 -31Q13 -41 21 -36L24 -6L26 -41Q33 -48 39 -39L41 -8L43 -39Q51 -45 56 -35L58 -6Q76 -20 81 -8Q89 14 76 37Q69 52 42 55L15 49Z','#f5c9a5','#c88b6d',3)+'</g>';
 const glass=(level=0)=>'<g>'+path('M224 105H381L364 257H241Z','#e8f7ff','#6aa8cb',6)+(level?rect(241,250-level*29,123-3*level,level*29,4,'#77c7e7'):'')+path('M224 105H381','none','#6aa8cb',6)+path('M239 149H370','none','#93bbc5',4)+path('M243 180H366','none','#93bbc5',4)+'</g>';
 const flower=(dry=false,extra=false)=>'<g>'+path('M477 180Q459 139 455 105','none','#477d50',8)+path('M461 151Q404 120 410 165Q437 177 461 151Z',dry?'#aaa96e':'#6bb978','#4f9861',3)+path('M461 139Q516 109 517 155Q481 168 461 139Z',dry?'#acaf6e':'#79cb86','#4f9861',3)+c(456,98,19,dry?'#bcb270':'#f0b3c0')+path('M402 183H510L499 259H415Z','#dba786','#a97357',5)+rect(401,181,111,12,5,'#c47f5f')+rect(414,192,84,12,5,extra?'#6e5740':dry?'#c7a072':'#a27758')+'</g>';
 const shower=(running=false)=>'<g>'+rect(164,30,20,131,8,'#8caebb')+rect(168,28,114,18,8,'#8caebb')+path('M279 46Q319 48 336 75','none','#6a96a9',11)+path('M304 74H362L357 91H309Z','#87b2c5','#4d849a',4)+(running?Array.from({length:7},(_,i)=>drop(309+i*9,111+(i%3)*30,1)).join(''):'')+'</g>';
 const child=()=>'<g>'+c(437,124,34,'#f5c8a6')+path('M411 111Q423 72 454 94Q476 112 467 126Q453 104 429 106Z','#50494a')+path('M410 157Q439 147 465 160L473 238H406Z','#77a8c8','#598bac',4)+path('M414 230L405 273M459 233L469 273','none','#586d8e',11)+path('M416 169L379 197M458 167L492 193','none','#f0c39f',11)+'</g>';
 const brush=()=>'<g>'+path('M460 112L477 242','none','#aa7144',12)+path('M454 113L470 138M447 126L470 145','none','#ffffff',11)+rect(437,86,36,29,4,'#79a5d6')+Array.from({length:6},(_,i)=>path('M'+(438+i*6)+' 88V66','none','#f6f0d4',3)).join('')+'</g>';
 const fruits=()=>'<g>'+c(457,170,63,stage>=2?'#dc655f':'#dc8862','#a75550')+path('M457 112V97M458 114Q479 98 484 108','none','#4e8d5d',7)+(stage>=2?c(434,149,8,'#fff5de'):Array.from({length:5},(_,i)=>c(421+(i%3)*20,137+i*13,3,'#836045')).join(''))+'</g>';
 const bench=()=>rect(58,244,500,17,6,'#a7c6b6');
 const bg='<svg class="water14-svg" viewBox="0 0 620 290" role="img" aria-label="'+escapeHTML(t.q)+'"><rect width="620" height="290" rx="23" fill="#e9f7fe"/>'+rect(20,22,580,236,19,'#f9fdf8')+path('M21 226H599V258H21Z','#daf0e1');
 let body='';
 const g=t.game;
 if(t.id==='U01')body=bench()+sink()+tap(stage===0||stage===2)+hand(330,157)+hand(375,179)+(stage===1?Array.from({length:8},(_,i)=>bubble(321+i*15,179+(i%2)*13,7+i%3)).join(''):'')+(stage>2?c(487,78,25,'#7cc78d')+path('M474 77L485 89L503 66','none','#fff',7):'');
 else if(t.id==='U02')body=bench()+tap(stage===0||stage===3)+path('M432 135V215','none','#d5ae79',15)+rect(413,100,40,27,4,'#83b8d8')+rect(440,90,21,18,3,'#efffff')+child()+(stage>=2?Array.from({length:4},(_,i)=>bubble(430+i*10,140+i%2*12,6)).join(''):'');
 else if(t.id==='U03')body=bench()+sink()+tap(false,true)+path('M218 199V274M217 248L249 250','none','#8b9f9f',10)+c(230,256,18,'#9dd6e8')+drop(224,232)+drop(221,269,.9)+(stage>=1?path('M433 71L456 95','none','#e58e6c',13)+c(471,97,28,'#f2c49d'):'');
 else if(t.id==='U04')body=bench()+sink()+tap(stage<3)+fruits()+(stage===1?hand(392,187):'')+(stage===3?c(529,80,23,'#7fcd9f')+path('M516 79L527 90L540 69','none','#fff',6):'');
 else if(t.id==='U05')body=bench()+sink()+tap(stage===0,false)+(stage===1?c(467,92,30,'#7ec990')+path('M451 89L467 102L484 78','none','#fff',8):'');
 else if(t.id==='U06')body=bench()+tap(stage<0)+glass(opts.fill||0)+(opts.fill>3?path('M218 258H399','none','#64bde2',7):'')+(opts.fill>=3?c(493,97,22,opts.fill>3?'#e9a67a':'#8fc99e'):'');
 else if(t.id==='U07')body=bench()+flower(opts.soil==='dry'&&stage===0,opts.soil==='moist'||stage>0)+((opts.soil==='dry'&&stage===0)?path('M416 210L441 215L426 225M471 214L485 222','none','#eed7ab',4):'')+(stage>0?path('M341 99Q377 117 421 155','none','#4cb7d5',8)+drop(384,146,1.4)+drop(407,166,.9):'');
 else if(t.id==='U08')body=bench()+shower(stage===0||stage>=3)+child()+(stage===2?Array.from({length:12},(_,i)=>bubble(396+i%4*21,174+Math.floor(i/4)*16,7)).join(''):'');
 else if(t.id==='U09')body=bench()+rect(325,171,115,91,12,stage>=1?'#b1cce3':'#d9edf3','#74a9bd')+path('M344 174H418','none','#75a8c5',5)+brush()+rect(72,200,160,45,9,'#f5e5c5','#dabf92')+path('M90 206H217','none','#d5b985',6)+(stage>=2?rect(86,168,92,23,10,'#79bed7'):'');
 else if(t.id==='U10')body=bench()+tap(false,true)+path('M355 231Q365 204 421 208Q465 204 486 234Q476 257 401 259Z','#8ed0e9','#4aa8d0',4)+rect(385,162,18,72,2,'#e2b063')+path('M394 139L370 170H417Z','#f6c96e','#bd9439',3)+(stage?c(524,100,28,'#8ed2a4'):'');
 else if(t.id==='U11')body=bench()+rect(91,62,162,180,13,'#a7d8e8','#6aacc5')+rect(108,80,128,41,8,'#f5faf6')+c(171,151,22,'#8dbacb')+rect(163,179,12,52,4,'#78a1b5')+sink()+tap(false,false);
 else if(t.id==='U12')body=rect(76,53,467,180,15,'#b4d7ad')+path('M85 113Q122 83 165 109T241 110Q278 78 328 110T452 107','none','#dff0ca',18)+c(190,176,41,'#84cfe4')+c(360,151,37,'#80cadd')+c(471,192,24,'#7ecbdc');
 else if(t.id==='U13')body=bench()+rect(85,45,155,196,20,'#8abccc','#6598b0')+rect(105,63,114,51,10,'#e3f3fd')+rect(140,135,38,37,8,'#ffffff')+path('M162 167V183','none','#4ca6d0',9)+rect(334,148,154,89,14,'#a3aaad')+path('M342 155L477 217','none','#dc7474',10);
 else if(t.id==='U14')body=bench()+rect(82,94,135,155,20,'#7caac6')+rect(95,76,107,30,12,'#5d9dbf')+path('M146 86V138','none','#d9f2f3',9)+flower(false,false);
 else if(t.id==='U15')body=bench()+c(310,138,90,'#e5b860','#bc9545')+c(310,138,72,'#ffefae')+path('M268 133L299 166L357 103','none','#63a47c',15)+path('M252 212L235 268L283 245L306 280L325 214','none','#6dc5b9',7)+path('M325 214L357 276L374 240L405 267L371 207','none','#87b6e2',7);
 return bg+body+'</svg>';
}
function lifeWater14Status(msg){const node=$('water14Status');if(node)node.innerHTML=readMarkup(msg)}
function lifeWater14Panel(t,body,note){$('visualArea').innerHTML='<section class="water14-lab"><div class="water14-title">'+readMarkup('水資源救援小隊')+'</div><div class="water14-stage" id="water14Picture">'+lifeWater14Svg(t,0)+'</div>'+body+'<div class="water14-feedback" role="status" id="water14Status">'+readMarkup(note||'觀察場景，開始幫忙吧！')+'</div></section>';$('choiceArea').innerHTML='';}
function lifeWater14Draw(t,step,opts){$('water14Picture').innerHTML=lifeWater14Svg(t,step,opts||{});}
function lifeWater14Pass(t,text){if(!solved)markDone();feedback(text||('成功！'+t.explain+' 可以按下一題，也可以繼續試試。'),'good');lifeWater14Status(text||t.explain);}
function lifeWater14Try(msg){feedback(msg,'retry');lifeWater14Status(msg)}
function lifeWater14Sequence(t){
 let n=0;const options=t.choices;
 const body='<div class="water14-meter"><span id="water14StepMeter">'+readMarkup('完成步驟：0 / '+t.steps.length)+'</span><button type="button" class="water14-reset" id="water14Reset">'+readMarkup('重新練習 ↻')+'</button></div>'+
 '<div class="water14-choice-grid">'+options.map((id,i)=>'<button type="button" class="water14-choice" data-water-step="'+id+'"><span class="water14-choice-num">'+(i+1)+'</span>'+readMarkup(LIFE_WATER_V14_LABEL[id])+'</button>').join('')+'</div>';
 lifeWater14Panel(t,body,'按正確順序完成步驟，場景會跟著改變。');
 const update=()=>{$('water14StepMeter').innerHTML=readMarkup('完成步驟：'+n+' / '+t.steps.length);lifeWater14Draw(t,n);document.querySelectorAll('[data-water-step]').forEach(b=>{b.classList.toggle('water14-done',t.steps.indexOf(b.dataset.waterStep)<n);b.disabled=t.steps.indexOf(b.dataset.waterStep)<n;});};
 document.querySelectorAll('[data-water-step]').forEach(b=>b.onclick=()=>{
 if(n===t.steps.length){lifeWater14Status('已經完成！按重新練習可再玩一次。');return;}
 if(b.dataset.waterStep!==t.steps[n]){lifeWater14Try('這個步驟還不到喔。'+t.hint);return;}
 n++;update();if(n===t.steps.length)lifeWater14Pass(t,'順序都正確！'+t.explain+' 也可以重新練習。');else lifeWater14Status('很好！接著要做什麼？');
 });
 $('water14Reset').onclick=()=>{n=0;update();lifeWater14Status('重新開始，試著把步驟依序完成。')};update();
}
function lifeWater14Detect(t){
 let seen=false;
 const body='<div class="water14-choice-grid"><button type="button" data-water-find="leak" class="water14-choice">'+readMarkup('點出滴水的水管')+'</button><button type="button" data-water-find="soap" class="water14-choice">'+readMarkup('水槽旁的肥皂')+'</button><button type="button" data-water-find="wall" class="water14-choice">'+readMarkup('牆上的窗戶')+'</button></div>'+
 '<div id="water14DetectNext" hidden><div class="water14-choice-grid"><button class="water14-choice" type="button" data-water-help="adult">'+readMarkup('遠離濕地並告訴老師或家人')+'</button><button class="water14-choice" type="button" data-water-help="fix">'+readMarkup('自己拆水管')+'</button></div></div>';
 lifeWater14Panel(t,body,'第一步：找到哪個地方正在漏水。');
 document.querySelectorAll('[data-water-find]').forEach(b=>b.onclick=()=>{
 if(b.dataset.waterFind!=='leak')return lifeWater14Try('再看看水槽下方，哪裡有水滴？');
 seen=true;$('water14DetectNext').hidden=false;lifeWater14Draw(t,1);lifeWater14Status('找到漏水處了！第二步：要怎麼做才安全？');
 });
 document.querySelectorAll('[data-water-help]').forEach(b=>b.onclick=()=>{
 if(!seen){lifeWater14Status('請先找出漏水處。');return;}
 if(b.dataset.waterHelp==='adult')lifeWater14Pass(t,'你找到漏水處，也懂得請大人協助修理！');
 else lifeWater14Try('水管需要大人檢查，小朋友不要自己拆修。');
 });
}
function lifeWater14Faucet(t){
 lifeWater14Panel(t,'<div class="water14-choice-grid">'+t.choices.map(([v,label])=>'<button type="button" class="water14-choice" data-water-faucet="'+v+'">'+readMarkup(label)+'</button>').join('')+'</div>','仔細看水龍頭，選出離開前該做的事。');
 document.querySelectorAll('[data-water-faucet]').forEach(b=>b.onclick=()=>{
 if(b.dataset.waterFaucet!==t.correct){lifeWater14Try('水還在流呢！想想先做哪件事。');return;}
 lifeWater14Draw(t,1);lifeWater14Pass(t,'水龍頭關好了，水不會白白流走！');
 });
}
function lifeWater14Fill(t){
 let amount=0;const target=3;
 lifeWater14Panel(t,'<div class="water14-fill-meter" id="water14FillMeter"></div><div class="water14-actions"><button class="water14-action" type="button" id="water14Pour">'+readMarkup('再裝一點水')+'</button><button class="water14-action good" type="button" id="water14Stop">'+readMarkup('關水，停止裝水')+'</button><button class="water14-action" type="button" id="water14FillAgain">'+readMarkup('再試一次 ↻')+'</button></div>','點「再裝一點水」，讓杯子的水位接近記號再停下。');
 const redraw=()=>{lifeWater14Draw(t,0,{fill:amount});$('water14FillMeter').innerHTML='<div class="water14-level-track">'+Array.from({length:5},(_,i)=>'<span class="'+(i<amount?'filled':'')+'"></span>').join('')+'</div><b>'+readMarkup(amount>3?'水快滿出來了！':amount>=2?'接近喝得完的量，可以關水了。':'水杯正在裝水。')+'</b>';};
 $('water14Pour').onclick=()=>{if(amount<5)amount++;redraw();if(amount>3)lifeWater14Try('水快溢出來了！按「再試一次」，早一點停下。');else lifeWater14Status('看看杯子的水位，再決定是否停止。');};
 $('water14Stop').onclick=()=>{if(amount>=2&&amount<=3)lifeWater14Pass(t,'成功裝了適量飲用水！想再喝可以補充，不必一次裝到溢出。');else if(amount===0||amount===1)lifeWater14Try('這次只裝了一點點。可以依需要多裝一些，再停下。');else lifeWater14Try('水已經太滿了，下次裝到記號附近就停。');};
 $('water14FillAgain').onclick=()=>{amount=0;redraw();lifeWater14Status('重新開始，這次試著在水溢出之前停下。');};redraw();
}
function lifeWater14Plant(t){
 let soil=null,results=new Set();
 lifeWater14Panel(t,'<div class="water14-choice-grid"><button class="water14-choice" type="button" data-water-soil="dry">'+readMarkup('觀察：土壤乾乾的')+'</button><button class="water14-choice" type="button" data-water-soil="moist">'+readMarkup('觀察：土壤還濕濕的')+'</button></div><div class="water14-choice-grid"><button class="water14-choice" type="button" data-water-plant="pour">'+readMarkup('用澆水壺適量澆水')+'</button><button class="water14-choice" type="button" data-water-plant="wait">'+readMarkup('今天先觀察，不再澆水')+'</button></div><div class="water14-bubbles" id="water14PlantResults"></div>','先點一種土壤情況，再選合適的照顧方式。兩種都試試看。');
 document.querySelectorAll('[data-water-soil]').forEach(b=>b.onclick=()=>{soil=b.dataset.waterSoil;document.querySelectorAll('[data-water-soil]').forEach(x=>x.classList.toggle('selected',x===b));lifeWater14Draw(t,0,{soil});lifeWater14Status(soil==='dry'?'這盆土壤乾乾的，接下來怎麼做？':'這盆土壤已經濕濕的，接下來怎麼做？');});
 document.querySelectorAll('[data-water-plant]').forEach(b=>b.onclick=()=>{
 if(!soil){lifeWater14Status('先點選土壤狀況。');return;}
 const good=soil==='dry'?b.dataset.waterPlant==='pour':b.dataset.waterPlant==='wait';
 if(!good){lifeWater14Try(soil==='dry'?'這盆比較乾，可以試著適量澆水。':'土壤已濕潤，先不要一直澆水。');return;}
 results.add(soil);lifeWater14Draw(t,soil==='dry'?1:0,{soil});$('water14PlantResults').innerHTML=[...results].map(x=>'<span class="water14-pill">'+readMarkup(x==='dry'?'乾土照顧完成 ✓':'濕土照顧完成 ✓')+'</span>').join('');
 if(results.size===2)lifeWater14Pass(t,'兩種狀況都照顧好了！植物需要觀察，不是一味澆很多水。');else lifeWater14Status('照顧成功！再試另外一種土壤狀況。');
 });
}
function lifeWater14Hazard(t){
 let first=false;
 lifeWater14Panel(t,'<div class="water14-choice-grid"><button type="button" class="water14-choice" data-water-hazard="avoid">'+readMarkup('慢慢退到乾燥安全的地方')+'</button><button type="button" class="water14-choice" data-water-hazard="run">'+readMarkup('跳進水裡玩')+'</button></div><div id="water14HazardFinal" hidden><div class="water14-choice-grid"><button type="button" class="water14-choice" data-water-hazard-next="adult">'+readMarkup('提醒別人並通知老師或家人')+'</button><button type="button" class="water14-choice" data-water-hazard-next="fix">'+readMarkup('自己打開水管修理')+'</button></div></div>','第一步：看到積水，先讓自己安全。');
 document.querySelectorAll('[data-water-hazard]').forEach(b=>b.onclick=()=>{if(b.dataset.waterHazard!=='avoid')return lifeWater14Try('濕滑的地板很危險，不能跑跳。');first=true;$('water14HazardFinal').hidden=false;lifeWater14Draw(t,1);lifeWater14Status('避開積水了！下一步要怎麼提醒大家？');});
 document.querySelectorAll('[data-water-hazard-next]').forEach(b=>b.onclick=()=>{if(!first){lifeWater14Status('先退到安全處。');return;}if(b.dataset.waterHazardNext==='adult')lifeWater14Pass(t,'你知道避開濕滑地板，也會找大人處理了！');else lifeWater14Try('不要自行拆水管，要請大人或維修人員處理。');});
}
function lifeWater14Match(t){
 let selected=null,done=new Set();
 const labels=LIFE_WATER_V14_LABEL;
 lifeWater14Panel(t,'<div class="water14-pair-grid"><div><b>'+readMarkup('選擇水源或地方')+'</b>'+['dispenser','sink'].map(x=>'<button type="button" class="water14-pair" data-water-origin="'+x+'"><span class="water14-mini-art">'+(x==='dispenser'?'🚰':'🧼')+'</span>'+readMarkup(labels[x])+'</button>').join('')+'</div><div><b>'+readMarkup('選擇它的用途')+'</b>'+['wash','drink'].map(x=>'<button type="button" class="water14-pair" data-water-use="'+x+'">'+readMarkup(labels[x])+'</button>').join('')+'</div></div><div class="water14-bubbles" id="water14Matched"></div>','先選左邊，再選右邊，將適合的用途連起來。');
 const correct={dispenser:'drink',sink:'wash'};
 document.querySelectorAll('[data-water-origin]').forEach(b=>b.onclick=()=>{selected=b.dataset.waterOrigin;document.querySelectorAll('[data-water-origin]').forEach(x=>x.classList.toggle('selected',x===b));lifeWater14Status('選好了！再點右邊適合的用途。')});
 document.querySelectorAll('[data-water-use]').forEach(b=>b.onclick=()=>{if(!selected){lifeWater14Status('先選一個水源或地方。');return;}if(correct[selected]!==b.dataset.waterUse)return lifeWater14Try('再想想這個地方的水適合做什麼。');done.add(selected);selected=null;$('water14Matched').innerHTML=[...done].map(x=>'<span class="water14-pill">'+readMarkup(labels[x]+' ✓')+'</span>').join('');document.querySelectorAll('[data-water-origin]').forEach(x=>{x.classList.toggle('selected',false);x.classList.toggle('water14-done',done.has(x.dataset.waterOrigin));x.disabled=done.has(x.dataset.waterOrigin)});if(done.size===2)lifeWater14Pass(t,'兩組都配對成功！不同水源要注意用途與安全。');else lifeWater14Status('配對成功！再完成剩下一組。')});
}
function lifeWater14Path(t){
 let at=0;const blocked=new Set([1,5,6,9,10]),dest=15;
 lifeWater14Panel(t,'<div class="water14-route-label">'+readMarkup('小隊起點 → 同學所在的終點')+'</div><div class="water14-route" id="water14Route"></div><div class="water14-actions"><button class="water14-action" type="button" id="water14RouteReset">'+readMarkup('重新走一遍 ↻')+'</button></div>','一次只能走到上下左右相鄰的乾地磚。水坑不能走。');
 const visited=new Set([0]);
 const render=()=>{ $('water14Route').innerHTML=Array.from({length:16},(_,i)=>'<button type="button" class="water14-tile '+(i===at?'current ':i===dest?'goal ':blocked.has(i)?'wet ':visited.has(i)?'visited ':'')+'" data-water-tile="'+i+'" aria-label="'+(i===at?'我站在這裡':i===dest?'終點':blocked.has(i)?'積水危險':('乾燥地磚 '+(i+1)))+'">'+(i===at?'🧒':i===dest?'🏁':blocked.has(i)?'〰':'')+'</button>').join('');document.querySelectorAll('[data-water-tile]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.waterTile);if(blocked.has(i))return lifeWater14Try('有積水！這裡可能濕滑，換條路走。');if(!(Math.abs(Math.floor(i/4)-Math.floor(at/4))+Math.abs(i%4-at%4)===1))return lifeWater14Try('只能走到旁邊的地磚喔，不能跳過去。');at=i;visited.add(i);render();if(at===dest)lifeWater14Pass(t,'你安全繞過積水，找到同學了！');else lifeWater14Status('走得很好！繼續選旁邊乾燥的地磚。')});};
 $('water14RouteReset').onclick=()=>{at=0;visited.clear();visited.add(0);render();lifeWater14Status('重新從左上角的起點出發。')};render();
}
function lifeWater14Source(t){
 const options=[['dispenser','正常維護的飲水機'],['ditch','路邊的水溝'],['bucket','來源不明的桶子水']];
 lifeWater14Panel(t,'<div class="water14-source-grid">'+options.map(([x,label])=>'<button type="button" class="water14-source" data-water-source="'+x+'"><div class="water14-source-icon">'+(x==='dispenser'?'🚰':x==='ditch'?'🌫️':'🪣')+'</div>'+readMarkup(label)+'</button>').join('')+'</div>','觀察三個水源，哪個比較適合喝？');
 document.querySelectorAll('[data-water-source]').forEach(b=>b.onclick=()=>{if(b.dataset.waterSource!=='dispenser')return lifeWater14Try('這個水源不一定安全，不能直接喝。');lifeWater14Pass(t,'找到安全飲水來源了！飲水設備仍需正常維護。')});
}
function lifeWater14Reuse(t){
 let n=0;const cases=[
 {name:'沒加清潔劑的洗菜水',q:'經大人確認乾淨後，能否拿來澆非食用觀賞植物？',answer:true,success:'在適當情況下，這些水可以由大人評估再利用。'},
 {name:'收集到的雨水',q:'可以直接倒進杯子喝嗎？',answer:false,success:'未經處理的雨水不能當飲用水。'},
 {name:'加了肥皂的髒水',q:'可以拿來澆植物嗎？',answer:false,success:'含清潔劑的水可能傷害植物，不應直接拿來澆。'}];
 const update=()=>{const x=cases[n];$('water14ReuseCase').innerHTML='<div class="water14-case-num">'+readMarkup('第 '+(n+1)+' / 3 個情境')+'</div><strong>'+readMarkup(x.name)+'</strong><p>'+readMarkup(x.q)+'</p>';};
 lifeWater14Panel(t,'<div class="water14-reuse-card" id="water14ReuseCase"></div><div class="water14-choice-grid"><button class="water14-choice" type="button" data-water-reuse="yes">'+readMarkup('可以，條件適合')+'</button><button class="water14-choice" type="button" data-water-reuse="no">'+readMarkup('不可以，可能不安全')+'</button></div>','每個情境都想想水質、安全和用途。');
 document.querySelectorAll('[data-water-reuse]').forEach(b=>b.onclick=()=>{if(n===3)return;const x=cases[n],isYes=b.dataset.waterReuse==='yes';if(isYes!==x.answer)return lifeWater14Try('再想想這種水是否適合這個用途。');n++;if(n===3){$('water14ReuseCase').innerHTML='<div class="water14-win">🏅 '+readMarkup('三個情境都完成！')+'</div>';lifeWater14Pass(t,'三個情境都答對了！先評估水質，不是所有水都能再利用。');}else{update();lifeWater14Status(x.success+' 接著看看下一個情境。')}});
 update();
}
function lifeWater14Pledge(t){
 const options=['刷牙時記得關水','喝多少就先裝多少','洗手沖乾淨，也關好水','發現漏水就告訴大人'],selected=new Set();
 lifeWater14Panel(t,'<div class="water14-pledge"><div class="water14-badge">🏅</div><p>'+readMarkup('四種方法都很好，選你最願意做到的兩件事！')+'</p></div><div class="water14-choice-grid">'+options.map((x,i)=>'<button class="water14-choice" type="button" data-water-pledge="'+i+'" aria-pressed="false">'+readMarkup(x)+'</button>').join('')+'</div><div class="water14-pledge-foot"><span id="water14PledgeCount">'+readMarkup('已選 0 / 2')+'</span><button type="button" class="water14-action good" id="water14PledgeConfirm" disabled>'+readMarkup('領取我的守護徽章')+'</button></div>','沒有唯一答案，挑兩件今天願意實踐的事。');
 const redraw=()=>{document.querySelectorAll('[data-water-pledge]').forEach(b=>{const yes=selected.has(Number(b.dataset.waterPledge));b.classList.toggle('selected',yes);b.setAttribute('aria-pressed',String(yes))});$('water14PledgeCount').innerHTML=readMarkup('已選 '+selected.size+' / 2');$('water14PledgeConfirm').disabled=selected.size!==2};
 document.querySelectorAll('[data-water-pledge]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.waterPledge);if(selected.has(i))selected.delete(i);else if(selected.size<2)selected.add(i);else{lifeWater14Status('先取消一項，再選另一個吧！');return;}redraw();});
 $('water14PledgeConfirm').onclick=()=>{if(selected.size!==2)return;$('water14Status').innerHTML=readMarkup('獲得節水徽章！你選擇了：'+[...selected].map(i=>options[i]).join('、')+'。記得在生活中實踐。');lifeWater14Pass(t,'獲得節水守護徽章！這四件都是好習慣，你可以繼續換選擇。')};redraw();
}
function lifeWater14Render(t){
 const fn={
 sequence:lifeWater14Sequence,detect:lifeWater14Detect,faucet:lifeWater14Faucet,fill:lifeWater14Fill,
 plant:lifeWater14Plant,hazard:lifeWater14Hazard,match:lifeWater14Match,path:lifeWater14Path,
 source:lifeWater14Source,reuse:lifeWater14Reuse,pledge:lifeWater14Pledge
 }[t.game];
 if(!fn)throw Error('Unknown water activity '+t.game);
 fn(t);
}

Object.assign(LIFE_WATER_V14_ZHUYIN,{"超":"ㄔㄠ","遍":"ㄅㄧㄢˋ","灌":"ㄍㄨㄢˋ","專":"ㄓㄨㄢ","拭":"ㄕˋ","鄰":"ㄌㄧㄣˊ","磚":"ㄓㄨㄢ","踏":"ㄊㄚˋ","渴":"ㄎㄜˇ","溝":"ㄍㄡ","估":"ㄍㄨ","質":"ㄓˊ","救":"ㄐㄧㄡˋ","驟":"ㄗㄡˋ","槽":"ㄘㄠˊ","懂":"ㄉㄨㄥˇ","味":"ㄨㄟˋ","領":"ㄌㄧㄥˇ","踐":"ㄐㄧㄢˋ","獲":"ㄏㄨㄛˋ"});
