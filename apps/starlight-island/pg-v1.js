/* Plant Guardians v1.0 - campaign, kid-friendly encyclopedia and guided nature play.
   Loaded after pg-visual.js; keeps the original tower-defense engine and v0.5 saves. */
(() => {
'use strict';
const VERSION='1.0';
const MORE_PLANTS={
  pitcher:{name:'豬籠草',symbol:'🪴',cost:100,range:120,description:'瓶狀陷阱抓小蟲',unlock:6},
  dandelion:{name:'蒲公英',symbol:'🌼',cost:85,range:180,description:'風球把小蟲推回去',unlock:9}
};
Object.assign(PLANTS,MORE_PLANTS);
Object.assign(PG_BUGS,{
 n:{name:'象鼻蟲',hp:140,speed:36,reward:31,bite:2.1,armor:.30},
 j:{name:'葉蟬',hp:66,speed:85,reward:25,bite:1.65}
});
const LEVELS_V1=[
 {name:'小芽花園',world:'花園學校',fact:'向日葵的綠葉能利用陽光製造養分。',mission:'認識向日葵和仙人掌'},
 {name:'葉片農場',world:'花園學校',fact:'茅膏菜用黏液黏住小昆蟲；葉甲也叫金花蟲。',mission:'認識茅膏菜的黏液'},
 {name:'風之草原',world:'花園學校',fact:'捕蠅草的捕蟲葉會閉合；蚱蜢很會跳。',mission:'認識捕蠅草和蚱蜢'},
 {name:'花香祕境',world:'花園學校',fact:'薄荷有芳香的葉片，粉蝨能吸食植物汁液。',mission:'認識薄荷和粉蝨'},
 {name:'神樹之森',world:'花園學校',fact:'香雪球有許多小小的四瓣花，可提供部分昆蟲花蜜。',mission:'認識香雪球與昆蟲'},
 {name:'露珠溼地',world:'神奇溼地',fact:'豬籠草的捕蟲籠是變形的葉子。',mission:'解鎖豬籠草'},
 {name:'蜿蜒溪谷',world:'神奇溼地',fact:'茅膏菜的黏液能黏住小昆蟲。',mission:'認識黏液陷阱'},
 {name:'昆蟲祕徑',world:'神奇溼地',fact:'象鼻蟲有長長的口吻。',mission:'認識象鼻蟲'},
 {name:'風種子山丘',world:'種子森林',fact:'蒲公英的果實帶著冠毛，可以隨風傳播。',mission:'解鎖蒲公英'},
 {name:'跳跳葉林',world:'種子森林',fact:'葉蟬善於跳躍，也會吸取植物汁液。',mission:'認識葉蟬'},
 {name:'星光木橋',world:'種子森林',fact:'不同植物有不同的葉子與防禦方式。',mission:'搭配植物守衛'},
 {name:'神樹大守護',world:'種子森林',fact:'照顧植物，也要認識昆蟲的重要。',mission:'完成森林守護'}
];
const MAPS_EXTRA=[
 {from:2,path:[[-30,205],[230,205],[230,395],[555,395],[555,151],[804,151],[804,481],[923,481]],sites:[[86,90],[112,333],[358,267],[436,513],[669,288],[660,53],[903,290],[914,547]],sun:370,hearts:8,unlock:7,waves:[[7,1.8,'bca'],[8,1.53,'can'],[10,1.4,'cnb'],[11,1.25,'anb']]},
 {from:3,path:[[-32,436],[169,436],[169,126],[464,126],[464,424],[711,424],[711,232],[841,232],[841,480],[923,480]],sites:[[73,268],[330,48],[311,277],[542,281],[598,536],[764,105],[951,348],[888,546]],sun:390,hearts:8,unlock:7,waves:[[8,1.6,'gca'],[9,1.45,'gbc'],[11,1.31,'nca'],[12,1.2,'ngba']]},
 {from:4,path:[[-37,162],[222,162],[222,373],[461,373],[461,175],[697,175],[697,485],[924,485]],sites:[[101,296],[115,55],[354,243],[347,530],[571,57],[573,324],[826,324],[912,551]],sun:410,hearts:8,unlock:7,waves:[[8,1.48,'wab'],[10,1.33,'bnc'],[12,1.22,'gwc'],[13,1.1,'ngab']]},
 {from:1,path:[[-32,134],[211,134],[211,287],[523,287],[523,138],[800,138],[800,482],[923,482]],sites:[[102,255],[326,156],[358,396],[488,403],[620,209],[708,344],[917,270],[893,549]],sun:435,hearts:8,unlock:8,waves:[[8,1.42,'cag'],[10,1.32,'bcw'],[12,1.2,'jga'],[13,1.08,'jcab']]},
 {from:2,path:[[-29,195],[249,195],[249,401],[570,401],[570,146],[814,146],[814,484],[923,484]],sites:[[94,89],[121,333],[379,273],[453,524],[667,292],[678,53],[911,292],[910,547]],sun:445,hearts:8,unlock:8,waves:[[10,1.37,'jac'],[11,1.24,'wja'],[12,1.16,'ncb'],[15,1.08,'jgwn']]},
 {from:3,path:[[-30,434],[179,434],[179,126],[476,126],[476,425],[711,425],[711,231],[841,231],[841,485],[923,485]],sites:[[75,272],[336,50],[321,278],[555,280],[600,538],[780,103],[959,349],[901,550]],sun:460,hearts:8,unlock:8,waves:[[10,1.4,'gwb'],[11,1.26,'jca'],[13,1.15,'nwja'],[15,1.03,'jncgw']]},
 {from:5,path:[[-35,315],[169,315],[169,92],[373,92],[373,471],[596,471],[596,221],[793,221],[793,484],[923,484]],sites:[[73,129],[75,475],[269,220],[278,561],[487,314],[705,92],[701,405],[914,336]],sun:480,hearts:9,unlock:8,waves:[[10,1.4,'wca'],[12,1.26,'jgb'],[13,1.16,'nwja'],[15,1.07,'jnbg'],[17,.99,'nwjgca']]}
];
for(let i=0;i<MAPS_EXTRA.length;i++){
 const e=MAPS_EXTRA[i];PG_MAPS.push({name:LEVELS_V1[i+5].name,note:LEVELS_V1[i+5].mission,sun:e.sun,hearts:e.hearts,unlock:e.unlock,color:['#b8deba','#b5e5cf','#b1dcc2','#d6eaba','#b2d7a2','#c0df9e','#b7d6b1'][i],path:e.path,sites:e.sites,waves:e.waves});
}
// The v0.5 loading code only keeps stages 1–5; preserve existing clears and future clears.
record.clearedLevels=Array.from(new Set((record.clearedLevels||[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=12)));

// Original KidApp right-aligned vertical Bopomofo engine is reused everywhere in the science book.
// These are additional readings introduced in the new child-friendly descriptions.
Object.assign(ZHUYIN_MAP,{
 '豬':'ㄓㄨ','籠':'ㄌㄨㄥˊ','蒲':'ㄆㄨˊ','公':'ㄍㄨㄥ','英':'ㄧㄥ','象':'ㄒㄧㄤˋ','鼻':'ㄅㄧˊ','蟬':'ㄔㄢˊ','溪':'ㄒㄧ','谷':'ㄍㄨˇ','露':'ㄌㄨˋ','珠':'ㄓㄨ','蜿':'ㄨㄢ','蜒':'ㄧㄢˊ','徑':'ㄐㄧㄥˋ','種':'ㄓㄨㄥˇ','丘':'ㄑㄧㄡ','跳':'ㄊㄧㄠˋ','蓬':'ㄆㄥˊ','毛':'ㄇㄠˊ','嘴':'ㄗㄨㄟˇ','吻':'ㄨㄣˇ','訊':'ㄒㄩㄣˋ','陸':'ㄌㄨˋ','伴':'ㄅㄢˋ','寓':'ㄩˋ','敵':'ㄉㄧˊ','別':'ㄅㄧㄝˊ','陣':'ㄓㄣˋ','限':'ㄒㄧㄢˋ','近':'ㄐㄧㄣˋ','遠':'ㄩㄢˇ','觸':'ㄔㄨˋ','藏':'ㄘㄤˊ','迴':'ㄏㄨㄟˊ','避':'ㄅㄧˋ','疊':'ㄉㄧㄝˊ','料':'ㄌㄧㄠˋ','觀':'ㄍㄨㄢ','扭':'ㄋㄧㄡˇ','尾':'ㄨㄟˇ','端':'ㄉㄨㄢ','蓋':'ㄍㄞˋ','器':'ㄑㄧˋ','舉':'ㄐㄩˇ','膨':'ㄆㄥˊ','輪':'ㄌㄨㄣˊ','巢':'ㄔㄠˊ','脈':'ㄇㄞˋ','翹':'ㄑㄧㄠˋ','葉':'ㄧㄝˋ','甲':'ㄐㄧㄚˇ','鞘':'ㄑㄧㄠˋ','翅':'ㄔˋ','粉':'ㄈㄣˇ','蝨':'ㄕ','蟲':'ㄔㄨㄥˊ','蝶':'ㄉㄧㄝˊ','瓢':'ㄆㄧㄠˊ','蚜':'ㄧㄚˊ','蜢':'ㄇㄥˇ','蚱':'ㄓㄚˋ','草':'ㄘㄠˇ','刺':'ㄘˋ','液':'ㄧㄝˋ','腺':'ㄒㄧㄢˋ','捕':'ㄅㄨˇ','陷':'ㄒㄧㄢˋ','阱':'ㄐㄧㄥˇ','膜':'ㄇㄛˊ','噴':'ㄆㄣ','擋':'ㄉㄤˇ','斑':'ㄅㄢ','嘴':'ㄗㄨㄟˇ','背':'ㄅㄟˋ','真':'ㄓㄣ','假':'ㄐㄧㄚˇ','敵':'ㄉㄧˊ','界':'ㄐㄧㄝˋ','樹':'ㄕㄨˋ','秘':'ㄇㄧˋ','祕':'ㄇㄧˋ','徑':'ㄐㄧㄥˋ','溼':'ㄕ','濕':'ㄕ','飄':'ㄆㄧㄠ','散':'ㄙㄢˋ','藉':'ㄐㄧㄝˋ','冠':'ㄍㄨㄢ','玩':'ㄨㄢˊ','風':'ㄈㄥ','彈':'ㄊㄢˊ','飛':'ㄈㄟ','起':'ㄑㄧˇ','轉':'ㄓㄨㄢˇ',
'七':'ㄑㄧ','二':'ㄦˋ','介':'ㄐㄧㄝˋ','供':'ㄍㄨㄥ','係':'ㄒㄧˋ','像':'ㄒㄧㄤˋ','八':'ㄅㄚ','十':'ㄕˊ','叭':'ㄅㄚ','吸':'ㄒㄧ','咬':'ㄧㄠˇ','喇':'ㄌㄚˇ','壯':'ㄓㄨㄤˋ','容':'ㄖㄨㄥˊ','山':'ㄕㄢ','彎':'ㄨㄢ','愛':'ㄞˋ','打':'ㄉㄚˇ','抓':'ㄓㄨㄚ','拖':'ㄊㄨㄛ','揮':'ㄏㄨㄟ','擊':'ㄐㄧˊ','擺':'ㄅㄞˇ','攻':'ㄍㄨㄥ','教':'ㄐㄧㄠˋ','旁':'ㄆㄤˊ','易':'ㄧˋ','朵':'ㄉㄨㄛˇ','校':'ㄒㄧㄠˋ','武':'ㄨˇ','比':'ㄅㄧˇ','汁':'ㄓ','激':'ㄐㄧ','爭':'ㄓㄥ','牠':'ㄊㄚ','狀':'ㄓㄨㄤˋ','球':'ㄑㄧㄡˊ','瓶':'ㄆㄧㄥˊ','移':'ㄧˊ','紹':'ㄕㄠˋ','綜':'ㄗㄨㄥˋ','群':'ㄑㄩㄣˊ','耐':'ㄋㄞˋ','腿':'ㄊㄨㄟˇ','膀':'ㄅㄤˇ','荷':'ㄏㄜˊ','薄':'ㄅㄛˋ','處':'ㄔㄨˋ','蛾':'ㄜˊ','蝴':'ㄏㄨˊ','蠅':'ㄧㄥˊ','躍':'ㄩㄝˋ','較':'ㄐㄧㄠˋ','農':'ㄋㄨㄥˊ','遇':'ㄩˋ','配':'ㄆㄟˋ','醒':'ㄒㄧㄥˇ','鎖':'ㄙㄨㄛˇ','鑑':'ㄐㄧㄢˋ','閉':'ㄅㄧˋ','隨':'ㄙㄨㄟˊ','雪':'ㄒㄩㄝˇ'
});

// 2D vectors serve as graceful fallback for new characters not yet included in v0.5.1 atlas.
const VEC={
 pitcher:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 126"><defs><linearGradient id="a" x1="0" x2="1" y2="1"><stop stop-color="#bcf3a0"/><stop offset="1" stop-color="#3a9b65"/></linearGradient></defs><ellipse cx="62" cy="117" rx="42" ry="7" fill="#305b3b" opacity=".23"/><path d="M50 106Q18 98 15 65Q39 53 57 80Q56 42 74 25" stroke="#378b52" stroke-width="7" fill="none"/><path d="M50 94Q45 62 59 35Q88 28 92 53L95 86Q94 114 66 113Q46 108 50 94Z" fill="url(#a)" stroke="#276c4b" stroke-width="4"/><path d="M43 38Q67 17 92 35" stroke="#8c4d65" stroke-width="12" stroke-linecap="round"/><path d="M52 41Q67 33 87 41" stroke="#ffd194" stroke-width="5"/><path d="M87 40Q102 17 92 12" stroke="#348b56" stroke-width="6" fill="none"/><ellipse cx="40" cy="83" rx="20" ry="11" transform="rotate(-28 40 83)" fill="#57c384"/><circle cx="65" cy="79" r="5" fill="#284b3d"/><circle cx="82" cy="78" r="5" fill="#284b3d"/><path d="M67 93Q75 99 82 91" fill="none" stroke="#2c6348" stroke-width="3"/><circle cx="59" cy="88" r="4" fill="#ffa4a6" opacity=".7"/></svg>`,
 dandelion:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 126"><ellipse cx="60" cy="116" rx="38" ry="8" fill="#355c41" opacity=".24"/><path d="M61 116L64 50" stroke="#329465" stroke-width="8"/><path d="M59 108Q22 93 22 72Q47 69 61 89" fill="#64c77a" stroke="#328359" stroke-width="3"/><path d="M64 95Q94 65 102 77Q96 101 64 109" fill="#76d386" stroke="#328359" stroke-width="3"/><g fill="#fffbea" stroke="#a6cb7f" stroke-width="1.4"><circle cx="64" cy="40" r="24"/><circle cx="38" cy="34" r="9"/><circle cx="82" cy="23" r="8"/><circle cx="44" cy="16" r="8"/><circle cx="81" cy="57" r="10"/></g><g stroke="#fff" stroke-width="2.2"><path d="M64 40v-27M64 40L42 25M64 40L86 26M64 40L88 53M64 40L41 51"/></g><circle cx="56" cy="40" r="4" fill="#46594a"/><circle cx="71" cy="40" r="4" fill="#46594a"/><path d="M58 51Q64 57 70 50" stroke="#508b65" stroke-width="2.6" fill="none"/></svg>`,
 n:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 105"><g stroke="#4d6650" stroke-width="4" stroke-linecap="round"><path d="M35 71L16 88M52 75L44 99M84 70L97 89"/></g><ellipse cx="65" cy="55" rx="43" ry="34" fill="#956e48" stroke="#6b503e" stroke-width="4"/><ellipse cx="55" cy="49" rx="31" ry="25" fill="#b48a51"/><path d="M62 23Q69 52 66 81" stroke="#69462d" stroke-width="3"/><ellipse cx="30" cy="56" rx="23" ry="20" fill="#aa7f57"/><path d="M21 61Q8 69 9 82Q17 91 26 82" fill="#a67f5b" stroke="#6b503e" stroke-width="3"/><circle cx="26" cy="50" r="7" fill="#fff"/><circle cx="24" cy="50" r="3.5" fill="#403a2d"/><path d="M21 34L12 18M37 35L40 18" stroke="#654634" stroke-width="3"/></svg>`,
 j:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100"><g stroke="#53935a" stroke-width="4" stroke-linecap="round"><path d="M77 67L103 91M58 65L54 94M37 64L15 79"/></g><path d="M31 42Q60 9 100 43Q94 73 57 75Z" fill="#9bcf66" stroke="#588e4d" stroke-width="4"/><path d="M47 46Q75 29 96 42L58 63" fill="#d5e79d"/><ellipse cx="29" cy="49" rx="21" ry="19" fill="#81c65c" stroke="#588e4d" stroke-width="3"/><circle cx="22" cy="46" r="6" fill="#fff"/><circle cx="21" cy="45" r="3" fill="#4d4d35"/><path d="M19 31L13 10M38 32L46 11" stroke="#5c9251" stroke-width="3"/></svg>`
};
const artImages={};for(const [key,svg] of Object.entries(VEC)){const image=new Image();image.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);artImages[key]=image;}
function thumb(key){
 const spriteKey={c:'c',a:'a',b:'b',g:'g',w:'w'}[key]||key;
 if(VEC[spriteKey]&&!(typeof PG_ART_FRAMES!=='undefined'&&PG_ART_FRAMES[spriteKey]&&typeof PG_ART_IMAGE!=='undefined'&&PG_ART_IMAGE.complete&&PG_ART_IMAGE.naturalWidth))return artImages[spriteKey].src;
 if(typeof PG_ART_IMAGE==='undefined'||!PG_ART_IMAGE.complete||!PG_ART_IMAGE.naturalWidth||!PG_ART_FRAMES[spriteKey])return '';
 if(!thumb.cache)thumb.cache={};if(thumb.cache[spriteKey])return thumb.cache[spriteKey];
 const [sx,sy,sw,sh]=PG_ART_FRAMES[spriteKey],c=document.createElement('canvas');c.width=120;c.height=120;
 const ct=c.getContext('2d');const k=Math.min(116/sw,116/sh);ct.drawImage(PG_ART_IMAGE,sx,sy,sw,sh,(120-sw*k)/2,117-sh*k,sw*k,sh*k);
 return (thumb.cache[spriteKey]=c.toDataURL('image/webp',.83));
}
function drawCustom(key,x,y,h){if(typeof PG_ART_IMAGE!=='undefined'&&PG_ART_IMAGE.complete&&PG_ART_IMAGE.naturalWidth&&typeof PG_ART_FRAMES!=='undefined'&&PG_ART_FRAMES[key]){const [sx,sy,sw,sh]=PG_ART_FRAMES[key],w=h*sw/sh;ctx.drawImage(PG_ART_IMAGE,sx,sy,sw,sh,x-w/2,y-h,w,h);return true}const im=artImages[key];if(im?.complete&&im.naturalWidth){const w=h*im.naturalWidth/im.naturalHeight;ctx.drawImage(im,x-w/2,y-h,w,h);return true}return false;}
const originalDrawSlot=drawSlot;
drawSlot=function(s){const p=s.plant;if(!p||!VEC[p.type])return originalDrawSlot(s);const [x,y]=s.pos;ctx.save();ellipse(x,y+26,40,17,'#47745566');circle(x,y+7,39,'#d9ba8c');strokeCircle(x,y+7,38,s.id===selectedSite?'#fff0a7':'#f0eac8',4);drawCustom(p.type,x,y+23,108*(1+.09*(p.level-1)));for(let i=0;i<p.level;i++)circle(x-12+i*12,y+47,4,'#ffd875');ctx.textAlign='center';ctx.fillStyle='#fff9db';ctx.font='900 14px system-ui';ctx.fillText(String(s.id+1),x,y+57);ctx.restore()};
const originalDrawBug=drawBug;
drawBug=function(b){if(!VEC[b.kind])return originalDrawBug(b);const xy=pointOnPath(b.progress),x=xy[0],y=xy[1]+18;ctx.save();ellipse(x,xy[1]+18,24,6,'#426c5545');const jump=b.kind==='j'?Math.sin(visualTick*10+b.wobble)*8:Math.sin(visualTick*6+b.wobble)*2;drawCustom(b.kind,x,y+jump,55);if(b.hp<b.maxHp){rr(x-23,y-66,46,6,3,'#fff6df');rr(x-23,y-66,Math.max(0,46*b.hp/b.maxHp),6,3,'#73c47b')}if(b.slow>0)strokeCircle(x,xy[1]-14,25,'#f5c9d5',2);ctx.restore()};

const PG_SPECIES=[
 {id:'sunflower',type:'plant',name:'向日葵',real:'向日葵的綠葉利用陽光進行光合作用，製造養分。',fantasy:'在遊戲中定期收集陽光，幫忙種更多植物。',tip:'先種向日葵，再種仙人掌。'},
 {id:'cactus',type:'plant',name:'仙人掌',real:'許多仙人掌的刺是特化的葉子，能幫助保護植物。',fantasy:'在遊戲中發射小刺，攻擊路上的昆蟲。',tip:'放在道路轉彎附近。'},
 {id:'sundew',type:'plant',name:'茅膏菜',real:'茅膏菜的葉片有腺毛，會分泌黏液黏住小昆蟲。',fantasy:'在遊戲中發射黏液泡泡，讓小蟲慢下來。',tip:'和仙人掌一起守護。'},
 {id:'flytrap',type:'plant',name:'捕蠅草',real:'捕蠅草的捕蟲葉受到適當觸碰後會快速閉合。',fantasy:'在遊戲中近距離咬住小蟲。',tip:'要種在靠近道路的位置。'},
 {id:'mint',type:'plant',name:'薄荷',real:'薄荷的葉片含有芳香成分，揉一揉會有清涼香氣。',fantasy:'在遊戲中用香氣讓附近的昆蟲變慢。',tip:'適合種在彎道旁邊。'},
 {id:'alyssum',type:'plant',name:'香雪球',real:'香雪球有許多小小的四瓣花，可以提供部分昆蟲花蜜。',fantasy:'在遊戲中邀請瓢蟲幫忙防守。',tip:'適合遇到成群小蟲時使用。'},
 {id:'pitcher',type:'plant',name:'豬籠草',real:'豬籠草的捕蟲籠是特化的葉片，能讓掉入的小動物不易逃出。',fantasy:'在遊戲中用瓶狀陷阱捕捉小蟲。',tip:'需要靠近小蟲會經過的道路。'},
 {id:'dandelion',type:'plant',name:'蒲公英',real:'蒲公英的果實帶有冠毛，能隨風飄散。',fantasy:'在遊戲中吹出風球，把小蟲推回去。',tip:'適合放在道路較長的地方。'},
 {id:'c',type:'bug',name:'毛毛蟲',real:'毛毛蟲是許多蝴蝶或蛾的幼蟲，不少種類會吃植物葉片。',fantasy:'在遊戲中沿著道路往神樹前進。',tip:'可以先觀察牠走得多快。'},
 {id:'a',type:'bug',name:'蚜蟲',real:'蚜蟲用刺吸式口器吸取植物的汁液。',fantasy:'在遊戲中成群出現，移動比較快。',tip:'用仙人掌幫忙防守。'},
 {id:'b',type:'bug',name:'葉甲',real:'葉甲在臺灣也常叫金花蟲。許多種類會吃植物，成蟲有鞘翅。',fantasy:'在遊戲中比較耐打。',tip:'搭配多株攻擊植物。'},
 {id:'g',type:'bug',name:'蚱蜢',real:'蚱蜢有發達的後腿，很會跳躍，不少種類吃植物。',fantasy:'在遊戲中有時會突然加速。',tip:'用薄荷幫忙減速。'},
 {id:'w',type:'bug',name:'粉蝨',real:'粉蝨成蟲有翅膀，成蟲和若蟲能刺吸植物汁液。',fantasy:'在遊戲中能飛過部分近地陷阱。',tip:'改用能攻擊飛行目標的植物。'},
 {id:'n',type:'bug',name:'象鼻蟲',real:'許多象鼻蟲的頭部有長長的口吻，口器位在前端。',fantasy:'在遊戲中防禦比較強。',tip:'用高傷害的植物慢慢對付。'},
 {id:'j',type:'bug',name:'葉蟬',real:'葉蟬用刺吸式口器吸取植物汁液，也很會跳。',fantasy:'在遊戲中移動速度很快。',tip:'用薄荷和蒲公英爭取時間。'}
];
let bookFilter='all';
function say(text){if(!('speechSynthesis' in window))return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='zh-TW';u.rate=.82;u.pitch=1.08;const options=speechSynthesis.getVoices();u.voice=options.find(v=>v.lang.toLowerCase()==='zh-tw')||null;speechSynthesis.speak(u)}catch(e){console.warn('Speech unavailable',e)}}
const book=document.querySelector('#scienceDetails');const science=book.querySelector('.science-box');
book.querySelector('summary').textContent='🔎 植物與昆蟲圖鑑（有注音和圖片）';
book.querySelector('summary').innerHTML=bopomofo('🔎 植物與昆蟲圖鑑');
science.innerHTML='<div class="pg-book-controls" role="group" aria-label="圖鑑分類"><button type="button" data-book="all" aria-pressed="true">全部 15 種</button><button type="button" data-book="plant" aria-pressed="false">🌱 植物 8 種</button><button type="button" data-book="bug" aria-pressed="false">🐛 昆蟲 7 種</button><button type="button" id="pg-book-read" aria-label="朗讀植物昆蟲圖鑑說明">🔊 聽說明</button></div><div id="pgBookCards" class="pg-book-cards"></div><p class="pg-book-note">⚠️ 植物不會真的發射武器，昆蟲也不是全部都會傷害植物。這些是遊戲中的幻想。</p>';
science.querySelector('.pg-book-note').innerHTML=bopomofo(science.querySelector('.pg-book-note').textContent);
function renderBook(){
 const list=PG_SPECIES.filter(o=>bookFilter==='all'||o.type===bookFilter),box=$('pgBookCards');
 box.innerHTML=list.map(o=>{const picture=thumb(o.id);return `<article class="pg-fact-card" data-species="${o.id}"><div class="pg-fact-top"><div class="pg-fact-img">${picture?`<img class="pg-science-thumb" src="${picture}" alt="${o.name}" loading="lazy">`:'<span>🌱</span>'}</div><div><div class="pg-fact-type">${o.type==='plant'?'🌿 植物':'🐛 昆蟲'}</div><h3>${bopomofo(o.name)}</h3></div><button type="button" class="pg-fact-speak" data-say="${o.id}" aria-label="朗讀${o.name}介紹">🔊</button></div><p><b>${bopomofo("自然小知識：")}</b>${bopomofo(o.real)}</p><p><b>${bopomofo("遊戲裡：")}</b>${bopomofo(o.fantasy)}</p><p class="pg-fact-tip">⭐ ${bopomofo(o.tip)}</p></article>`}).join('');
 box.querySelectorAll('[data-say]').forEach(btn=>btn.onclick=()=>{const o=PG_SPECIES.find(o=>o.id===btn.dataset.say);say(`${o.name}。${o.real}。在遊戲中，${o.fantasy}。${o.tip}`)});
 science.querySelectorAll('[data-book]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.book===bookFilter)));
}
science.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>{bookFilter=b.dataset.book;renderBook()}));
$('pg-book-read').onclick=()=>say('這本圖鑑共有八種植物和七種昆蟲。點每張卡片上的喇叭，就能聽植物或昆蟲的介紹。');
book.addEventListener('toggle',()=>{if(book.open)renderBook()});
function refreshExtendedArt(){if(book.open)renderBook();shop?.querySelectorAll('[data-plant="pitcher"],[data-plant="dandelion"]').forEach(btn=>{const img=btn.querySelector('.pg-art-thumb');if(img)img.src=thumb(btn.dataset.plant)||artImages[btn.dataset.plant].src});refreshPlaces()}
if(typeof PG_ART_IMAGE!=='undefined')PG_ART_IMAGE.addEventListener('load',()=>queueMicrotask(refreshExtendedArt));
if(typeof PG_ART_IMAGE!=='undefined')PG_ART_IMAGE.addEventListener('load',()=>{if(book.open)renderBook()});

// Give each plant a card, and explain that it is temporarily locked rather than disabling discovery.
const shop=$('plantCards');for(const [id,t] of Object.entries(MORE_PLANTS)){
 const b=document.createElement('button');b.className='plant-card';b.type='button';b.dataset.plant=id;b.setAttribute('aria-pressed','false');b.innerHTML=`<span class="plant-icon"><img class="pg-art-thumb" src="${thumb(id)||artImages[id].src}" alt=""></span><span><b>${t.name}</b><small>${t.description}</small><span class="cost">☀️ ${t.cost}</span></span><em class="lock-label" hidden>🔒 第 ${t.unlock} 關</em>`;shop.append(b);
}
// The original image layer only decorates six defenders. For these two vector units, shop icons are already assigned.
const pgOldCards=refreshCards;
refreshCards=function(){pgOldCards();const keys=Object.keys(PLANTS);document.querySelectorAll('[data-plant]').forEach(el=>{const key=el.dataset.plant,unlocked=keys.indexOf(key)<pgMap().unlock;el.disabled=!unlocked||game.ended||(game.sun<PLANTS[key].cost&&selectedKind!==key);el.classList.toggle('locked',!unlocked);el.classList.toggle('selected',selectedKind===key);el.setAttribute('aria-pressed',String(selectedKind===key));const lock=el.querySelector('.lock-label');if(lock){lock.hidden=unlocked;lock.textContent='🔒 第 '+(MORE_PLANTS[key]?.unlock||keys.indexOf(key)+1)+'關'};});};
clickPlant=function(key){const keys=Object.keys(PLANTS);if(game.ended)return;if(keys.indexOf(key)>=pgMap().unlock){notice('這株植物要完成前面的關卡才能使用。');return}selectedKind=selectedKind===key?null:key;selectedSite=-1;refreshCards();refreshInspector();notice(selectedKind?'已選 '+PLANTS[key].name+'，再點地圖上空的圓圈。':'選植物卡，再點空的圓圈。')};
shop.querySelectorAll('[data-plant="pitcher"],[data-plant="dandelion"]').forEach(b=>b.addEventListener('click',()=>clickPlant(b.dataset.plant)));

const oldPlaces=refreshPlaces;
refreshPlaces=function(){oldPlaces();document.querySelectorAll('.mobile-place').forEach(b=>{const spot=game.spots[Number(b.dataset.place)];if(spot?.plant&&VEC[spot.plant.type])b.innerHTML=`<img class="pg-place-thumb" src="${thumb(spot.plant.type)||artImages[spot.plant.type].src}" alt="">`})};

const oldMenu=pgMenu;
const levelBox=document.querySelector('.level-list');levelBox.innerHTML=LEVELS_V1.map((v,i)=>`<button type="button" class="level-btn" data-level="${i+1}" aria-label="第${i+1}關 ${v.name}"><i>🔒</i><span>${i+1} ${v.name}</span></button>`).join('');
levelBox.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>pgSelect(Number(b.dataset.level))));
pgMenu=function(){oldMenu();$('stageCount').textContent=`${record.clearedLevels.length} / 12 關完成`;const lvl=LEVELS_V1[game.stage-1];$('stageFocus').innerHTML=bopomofo(`${lvl.world}・${lvl.mission}`);document.querySelector('.intro-chip').innerHTML=bopomofo(`森林探險・十二關`)};
pgOpen=function(n){return n===1||record.clearedLevels.includes(n-1)};
const oldFresh=fresh;
fresh=function(level){const n=Math.max(1,Math.min(12,Number(level)||game?.stage||1));oldFresh(n);game.stage=n;pgMenu();const fact=LEVELS_V1[n-1];notice(`第 ${n} 關，${fact.name}。${fact.mission}。`)};
pgSelect=function(n){if(!pgOpen(n)){notice('先守住前一關，才能挑戰這一關！');return}if(n===game.stage)return;if(phase==='running'||phase==='paused')showDialog('🗺️','要換關卡嗎？','這一場要重新開始。','換關卡',()=>{closeDialog();fresh(n)});else fresh(n)};
const origStartWave=begin;
begin=function(){origStartWave();if(phase==='running'&&game.wave===0){setBanner(`🐛 第 ${game.stage} 關：${pgMap().name}`,2.5)}};
finish=function(win){game.ended=true;phase=win?'win':'lose';$('waveButton').disabled=true;$('waveButton').textContent=win?'🏆 成功守護':'🌳 再試一次';$('floatBanner').hidden=true;if(win){record.best=Math.max(record.best,game.stage);record.clears++;record.clearedLevels=Array.from(new Set([...record.clearedLevels,game.stage])).sort((a,b)=>a-b);save();pgMenu();sound('win');const next=game.stage+1;showDialog('🌳✨','神樹守護成功！',`第 ${game.stage} 關完成，神樹還有 ${game.tree} 顆愛心！`,next<=12?'下一關':'再玩一次',()=>{closeDialog();fresh(next<=12?next:game.stage)},next<=12?`下一關：${LEVELS_V1[next-1].name}`:'十二關完成！謝謝你守護森林！')}else{sound('ouch');showDialog('🌱💛','再試一次！','小蟲吃到了神樹，換個位置再來！','重新挑戰',()=>{closeDialog();fresh(game.stage)},'也可以試試不同植物的組合。')}};
const oldUpdate=update;
update=function(dt){oldUpdate(dt);if(phase!=='running')return;
 for(const s of game.spots){const p=s.plant;if(!p||!VEC[p.type])continue;
   p.extraCool=(p.extraCool??(.7+(s.id%3)*.3))-dt;if(p.extraCool>0)continue;
   const range=PLANTS[p.type].range+(p.level-1)*17;
   const targets=bugs.filter(b=>b.hp>0&&!(p.type==='pitcher'&&b.kind==='w')&&Math.hypot(pointOnPath(b.progress)[0]-s.pos[0],pointOnPath(b.progress)[1]-s.pos[1])<=range).sort((a,b)=>b.progress-a.progress);
   const bug=targets[0];if(!bug)continue;const xy=pointOnPath(bug.progress);
   if(p.type==='pitcher'){bug.hp-=(47+24*(p.level-1))*(1-(PG_BUGS[bug.kind].armor||0));bug.slow=Math.max(bug.slow,.9+(p.level-1)*.4);burst(xy[0],xy[1]-17,'#9bdc84',12);p.extraCool=Math.max(.7,2.2-(p.level-1)*.37);sound('pop')}
   else if(p.type==='dandelion'){bug.progress=Math.max(0,bug.progress-(54+22*(p.level-1)));bug.slow=Math.max(bug.slow,.34);burst(xy[0],xy[1]-18,'#fff8d2',15);p.extraCool=Math.max(.66,2.05-(p.level-1)*.32);sound('goo')}
 }
};
const oldInspector=refreshInspector;
refreshInspector=function(){oldInspector();const spot=game.spots[selectedSite];if(spot?.plant&&VEC[spot.plant.type])annotated('inspectBody',spot.plant.level===3?'已長成最強守衛！':PLANTS[spot.plant.type].description+`。升級需要 ${upgradeCost(spot.plant)} 陽光。`)};

// Friendly three-page introduction. A tap is required to play any spoken guidance.
const guideSteps=[
 ['🌻','第一步：選植物','點下面的植物卡片，再點地圖上空的圈圈。'],
 ['☀️','第二步：用陽光','種植物要花陽光。向日葵可以幫你收集陽光。'],
 ['🐛','第三步：守護神樹','按開始防守，小蟲就會走過來。點植物可以升級，按暫停就能慢慢想。']
];
function guide(i){if(i>=guideSteps.length){record.guideV1=true;save();closeDialog();setBanner('👇 點植物卡，再點空圈圈',5);return}const [icon,title,body]=guideSteps[i];showDialog(icon,title,body,i===guideSteps.length-1?'開始冒險':'下一步',()=>guide(i+1),`第 ${i+1} / ${guideSteps.length} 步`);const speakBtn=$('pgGuideVoice');if(speakBtn)speakBtn.onclick=()=>say(title+'。'+body)}
const voiceBtn=document.createElement('button');voiceBtn.id='pgGuideVoice';voiceBtn.type='button';voiceBtn.className='pg-guide-voice';voiceBtn.textContent='🔊 聽解說';document.querySelector('.dialog').insertBefore(voiceBtn,$('modalButton'));
const guideReplay=document.createElement('button');guideReplay.type='button';guideReplay.className='smallbtn';guideReplay.id='pgGuideAgain';guideReplay.textContent='❔ 新手教學';document.querySelector('.nav').prepend(guideReplay);guideReplay.addEventListener('click',()=>guide(0));
// Label each science card and the category tabs with the same Bopomofo style.
science.querySelectorAll('[data-book]').forEach(b=>{b.innerHTML=bopomofo(b.textContent)});
const note=document.createElement('p');note.className='pg-eco-note';note.innerHTML=bopomofo('小提醒：不是所有昆蟲都是害蟲。打敗遊戲裡的小蟲，只是守護神樹的幻想故事。');book.insertAdjacentElement('afterend',note);
// Replace the initial v0.5 introductory dialog with the complete tutorial for new players.
pgMenu();refreshCards();refreshPlaces();
if(!record.guideV1){if(modalOpen)closeDialog();guide(0)}
window.PG_V1_DEBUG={levels:LEVELS_V1,encyclopedia:PG_SPECIES,maps:PG_MAPS,getState:()=>({stage:game.stage,wave:game.wave,sun:game.sun,life:game.tree,phase,bugs:bugs.length})};
})();