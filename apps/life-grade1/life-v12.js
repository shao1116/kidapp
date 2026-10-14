/* KidApp 生活探索樂園 v1.2 extension.  All assets are local/original SVG. */
const LIFE_V12_MODES=[
 {id:'festival',name:'節慶文化探索',icon:'🎏',summary:'看節慶活動的插畫，觀察年節、端午與中秋的生活文化。',color:'#fff0dc'},
 {id:'library',name:'圖書館小幫手',icon:'📚',summary:'看書封找書、分類放書架，再練習借還書與愛護圖書。',color:'#e6efff'},
 {id:'diary',name:'我的成長日記',icon:'🌟',summary:'挑選心情與今日的生活行動，留下自己的小成長，不必擔心選錯。',color:'#fcebf4'}
];
const LIFE_V12_FAMILY=[
 {id:'F01',icon:'🏫',name:'認識校園',note:'和孩子實際走訪校園，指出一個可求助的地方。'},
 {id:'F02',icon:'🌬️',name:'觀察風吹動的物品',note:'觀察一片葉子與一個較重的物品，說說移動差異。'},
 {id:'F03',icon:'🌱',name:'照顧一盆植物',note:'連續觀察三天的葉片、土壤，適量澆水並記錄。'},
 {id:'F04',icon:'💧',name:'安全用水',note:'洗手後確認水龍頭關好，不犧牲清潔衛生。'},
 {id:'F05',icon:'🧸',name:'自製安全玩具',note:'和大人一起用可回收材料製作，測試後再調整。'},
 {id:'F06',icon:'🎏',name:'分享一個節慶故事',note:'聽家人分享慶祝方式，也尊重不同家庭的習慣。'},
 {id:'F07',icon:'📚',name:'走訪圖書館',note:'尋找一本有興趣的書，練習借還與愛護書籍。'},
 {id:'F08',icon:'🌟',name:'分享今天的小進步',note:'讓孩子選擇想說的生活小發現，感受被傾聽。'}
];
const LIFE_V12_TASKS={festival:[],library:[],diary:[]};
function addFestival(id,scene,q,options,right,explain,hint,level=1){
 LIFE_V12_TASKS.festival.push({id,kind:'festival',scene,q,options,right,explain,hint,level,...(right.length===2?{selectCount:2}:{})});
}
const festivals=[
 ['FES01','spring','畫面中的紅燈籠和春聯，讓你想到哪個節慶？',['農曆新年','端午節','中秋節','運動會'],['農曆新年'],'紅燈籠與春聯常見於農曆新年。','看看門口的紅色裝飾。'],
 ['FES02','spring','想向家人說新年祝福，可以說什麼？',['新年快樂','明天考試','不要理我','我要吵架'],['新年快樂'],'祝福可以讓家人感受到心意。','想一句有禮貌的祝賀。'],
 ['FES03','spring','年節時大家一起吃飯，什麼行為比較合宜？',['輪流說話並尊重長輩','把餐具丟在地上','搶走別人的食物','大聲責怪家人'],['輪流說話並尊重長輩'],'一起吃飯時可以尊重、傾聽，享受相聚。','想想怎樣一起愉快吃飯。'],
 ['FES04','spring','新年期間走訪親友家，可以做哪兩件事？',['先打招呼','尊重別人的生活習慣','亂翻別人的東西','拿走未經同意的玩具'],['先打招呼','尊重別人的生活習慣'],'拜訪親友要有禮貌並尊重對方。','選兩種讓主人感覺被尊重的做法。',2],
 ['FES05','spring','看到桌上的年節布置，想做家庭紀錄，先做什麼？',['問家人布置的意義','全部拆掉','說每個家庭一定相同','不理會家人的分享'],['問家人布置的意義'],'每個家庭可能有不同的節慶方式，可以先觀察再提問。','好奇時可以問問家人。',2],
 ['FES06','dragon','圖中划著長長龍舟的活動，最常讓人想到什麼節日？',['端午節','元宵節','中秋節','母親節'],['端午節'],'划龍舟是端午節常見的活動之一。','看看水上的長船和隊員。'],
 ['FES07','dragon','想觀察龍舟比賽，站在哪裡比較安全？',['有大人陪同的岸邊觀賞區','自己跳進河裡','站上沒有護欄的岸邊','推擠其他觀眾'],['有大人陪同的岸邊觀賞區'],'觀賞水上活動要遠離危險水域並遵守規定。','岸邊和河裡，哪裡比較適合孩子？'],
 ['FES08','dragon','圖中用葉子包起來的米食，最常見的名稱是什麼？',['粽子','月餅','蛋糕','吐司'],['粽子'],'粽子是端午節常見的節慶食物。','看綠葉包住的三角形食物。'],
 ['FES09','dragon','端午節和家人參加活動，哪兩件事比較合宜？',['注意安全與集合地點','聽聽家人介紹習俗','擅自跑進河中','在人群裡故意推人'],['注意安全與集合地點','聽聽家人介紹習俗'],'在活動中可以安全參與，也能認識家庭文化。','選兩種兼顧安全與學習的做法。',2],
 ['FES10','dragon','如果朋友家的端午節做法和自己不同，可以怎麼做？',['尊重並聽他分享','嘲笑他的家庭','說只有自己家才對','不准他介紹'],['尊重並聽他分享'],'節慶有不同地方與家庭的慶祝方式，互相尊重。','文化習俗可以彼此分享。',3],
 ['FES11','moon','畫面中的滿月和月餅，最容易讓人想到哪個節日？',['中秋節','端午節','清明節','教師節'],['中秋節'],'賞月與分享月餅是中秋節常見活動。','看夜空的圓月亮與桌上的點心。'],
 ['FES12','moon','中秋節晚上到戶外賞月，應該注意什麼？',['和家人一起留意環境安全','跑到馬路中間','不看路一直倒退走','在暗處獨自跑遠'],['和家人一起留意環境安全'],'夜晚賞月要注意光線與周圍安全。','晚上出門需要注意什麼？'],
 ['FES13','moon','想與家人分享月餅，哪一種做法比較合宜？',['先詢問要不要一起分享','強迫每個人都吃','用手搶走別人的','把食物丟向朋友'],['先詢問要不要一起分享'],'分享之前可以先詢問，也要尊重不想吃的人。','分享和尊重可以一起做到。'],
 ['FES14','moon','觀察月亮時，可以使用哪兩種方式留下紀錄？',['畫下月亮的形狀','告訴家人今天的觀察','一直盯著很亮的燈看','隨意編造沒有看到的事'],['畫下月亮的形狀','告訴家人今天的觀察'],'畫畫或口頭說明都是觀察紀錄的方法。','想想哪些是真正觀察到的事。',2],
 ['FES15','moon','有的家庭不吃月餅也不賞月，應該怎麼想？',['每個家庭有自己的生活方式','一定要和別人完全相同','取笑別人的選擇','大家不能慶祝節日'],['每個家庭有自己的生活方式'],'我們可以欣賞不同家庭的節慶方式。','尊重不同，生活才更豐富。',3]
];
for(const row of festivals)addFestival(...row);
const BOOKS=[
 {id:'rabbit',title:'小兔子的冒險',cat:'story',icon:'🐰',hue:'#f6a9ba'},
 {id:'stars',title:'星星的秘密',cat:'science',icon:'🌟',hue:'#8fa8f0'},
 {id:'flowers',title:'認識小花',cat:'nature',icon:'🌸',hue:'#9cd4a0'},
 {id:'paint',title:'彩色畫畫書',cat:'art',icon:'🎨',hue:'#f2bb78'},
 {id:'dinosaur',title:'恐龍的故事',cat:'story',icon:'🦕',hue:'#b3a0e5'},
 {id:'water',title:'水從哪裡來',cat:'science',icon:'💧',hue:'#8bd5e4'},
 {id:'bird',title:'鳥兒觀察簿',cat:'nature',icon:'🐦',hue:'#abd48d'},
 {id:'music',title:'一起唱歌吧',cat:'art',icon:'🎵',hue:'#f4b7b2'},
 {id:'friend',title:'好朋友互相幫忙',cat:'story',icon:'🤝',hue:'#e5b2b9'},
 {id:'moon',title:'月亮會變化',cat:'science',icon:'🌙',hue:'#a9bbeb'},
 {id:'bugs',title:'小昆蟲在哪裡',cat:'nature',icon:'🐞',hue:'#bed9a1'},
 {id:'shapes',title:'紙張變魔法',cat:'art',icon:'✂️',hue:'#e7bf8f'}
];
function addLibrary(id,q,bookIDs,answer,explain,hint,level=1){
 LIFE_V12_TASKS.library.push({id,kind:'library',q,bookIDs,answer,explain,hint,level});
}
const bookRows=[
 ['LIB01','想聽兔子主角的故事，請找到哪一本書？',['rabbit','stars','flowers','paint'],'rabbit','書名是「小兔子的冒險」，封面也有小兔子。','觀察封面的兔子圖案。'],
 ['LIB02','想觀察花朵，可以選哪一本書？',['flowers','dinosaur','paint','water'],'flowers','「認識小花」可以幫助你觀察植物。','找有花朵封面的書。'],
 ['LIB03','想學習太空中的星星，應該找哪一本？',['stars','rabbit','bird','music'],'stars','「星星的秘密」適合認識星星。','找星空圖案的書。'],
 ['LIB04','想練習畫圖與顏色，可以選哪一本？',['paint','bugs','friend','moon'],'paint','「彩色畫畫書」是練習繪畫的選擇。','找有畫筆和顏料的封面。'],
 ['LIB05','要找一本和水有關的知識書，選哪一本？',['water','dinosaur','music','shapes'],'water','「水從哪裡來」介紹水的知識。','找水滴圖案的封面。',2],
 ['LIB06','想聽到有恐龍角色的故事，選哪一本？',['dinosaur','bugs','moon','flowers'],'dinosaur','「恐龍的故事」是故事類型的書。','封面上哪一本有恐龍？',2],
 ['LIB07','想知道鳥兒住在哪裡，哪本最合適？',['bird','paint','friend','stars'],'bird','「鳥兒觀察簿」可以認識自然界的鳥類。','找鳥兒的圖案。',2],
 ['LIB08','想和朋友學新歌，可以借哪一本？',['music','water','rabbit','bugs'],'music','「一起唱歌吧」適合音樂活動。','看封面有音符的書。',2],
 ['LIB09','想知道月亮有時圓、有時彎，應該找哪一本？',['moon','flowers','shapes','friend'],'moon','「月亮會變化」可以認識自然現象。','找夜空的月亮封面。',3],
 ['LIB10','想練習剪紙創作，哪一本比較符合需要？',['shapes','bird','dinosaur','stars'],'shapes','「紙張變魔法」適合探索藝術與手作。','封面上有剪紙工具。',3]
];
for(const r of bookRows)addLibrary(...r);
function addChoice(group,id,scene,q,options,right,explain,hint,level=1){
 LIFE_V12_TASKS[group].push({id,kind:'choice',scene,q,options,right,explain,hint,level,...(right.length===2?{selectCount:2}:{})});
}
const bookChoices=[
 ['LIB11','library','從書架拿書後，借閱前要做什麼？',['依圖書館規定辦理借閱','直接藏進書包帶走','在書上亂畫','把書頁撕掉'],['依圖書館規定辦理借閱'],'借書要遵守借閱規則。','看看圖書館的借書方式。',2],
 ['LIB12','library','如果圖書館裡有人在安靜閱讀，你可以怎麼做？',['放輕聲音','在旁邊大聲吼叫','追逐跑跳','用力敲桌子'],['放輕聲音'],'維持安靜能讓大家安心看書。','圖書館的聲音應該多大？',2],
 ['LIB13','library','借來的書不小心弄濕，哪兩個方法比較合宜？',['先告訴大人或管理人員','依照館方方式處理','偷偷把濕頁黏住','故意藏起來不還'],['先告訴大人或管理人員','依照館方方式處理'],'誠實說明並詢問管理人員，是愛護公物的方法。','先說明，再一起尋求處理方式。',3],
 ['LIB14','library','想將已借的書還回圖書館，應該怎麼做？',['放到指定還書處','隨手丟在地上','藏在別人桌下','撕掉借閱標籤'],['放到指定還書處'],'還書要放在圖書館指定的位置。','仔細找找還書指示。',2],
 ['LIB15','library','在閱讀區分享一本喜歡的書，哪兩個做法適合？',['先詢問朋友想不想聽','輕聲介紹有趣的部分','強迫別人一定要讀','把書扔給對方'],['先詢問朋友想不想聽','輕聲介紹有趣的部分'],'分享書籍要顧及別人的意願和環境。','分享、尊重與安靜都很重要。',3]
];
for(const row of bookChoices)addChoice('library',...row);
function addDiary(id,scene,q,actions,hint,level=1){
 LIFE_V12_TASKS.diary.push({id,kind:'diary',scene,q,actions,hint,explain:'心情沒有標準答案；用自己的方式觀察與分享，就是一種成長。',level});
}
const diaryRows=[
 ['DIA01','school','今天進教室時，你有什麼心情？',['試著向同學打招呼','找老師聊聊','先安靜觀察教室'],'留意自己的感受，不需要選別人期待的答案。'],
 ['DIA02','friend','今天跟朋友一起玩時，感覺如何？',['邀請朋友一起玩','聽聽朋友的想法','需要時說出自己的界線'],'開心或緊張都可以說出來。'],
 ['DIA03','nature','觀察一棵樹或一片葉子，你的心情是什麼？',['看葉子的顏色','記錄今天看到什麼','和家人分享發現'],'觀察自然可以慢慢來。'],
 ['DIA04','try','今天遇到一件不太容易的事，你有什麼感受？',['試一次再調整','請大人協助','先休息再嘗試'],'感到困難不代表做不好。',2],
 ['DIA05','book','今天看到一本有趣的書，你覺得如何？',['選一本喜歡的書','和家人說說書裡的事','有時間再讀一次'],'每個人喜歡的書可能不同。'],
 ['DIA06','help','今天有幫忙做家事嗎？你有什麼感受？',['整理自己的物品','詢問可以幫什麼忙','向幫忙的人說謝謝'],'每個小行動都可以被看見。',2],
 ['DIA07','art','今天完成一個作品時，你感覺怎樣？',['和家人介紹作品','找出想改善的地方','欣賞其他人的作品'],'作品沒有一定要跟別人一樣。',2],
 ['DIA08','listen','今天聽到別人的想法，你有什麼感受？',['讓對方說完','分享自己的感受','若不同意也能有禮貌表達'],'尊重不同想法不等於不能表達自己。',2],
 ['DIA09','weather','今天觀察天氣，你有什麼感覺？',['看看天空和雲','比較今天與昨天','說說適合什麼活動'],'不同天氣可能帶來不同心情。',3],
 ['DIA10','brave','回想今天的一個小進步，你的感覺是什麼？',['謝謝自己的努力','再挑戰一次','把發現告訴家人'],'無論進步大小，都可以溫柔地看待自己。',3]
];
for(const row of diaryRows)addDiary(...row);
const diaryChoices=[
 ['DIA11','diary','朋友今天不想談自己的心情，你可以怎麼做？',['尊重他暫時不想說','一直追問直到他回答','大聲宣布他的秘密','拿他的心情開玩笑'],['尊重他暫時不想說'],'尊重別人分享的意願。','心情是每個人的感受。',2],
 ['DIA12','diary','遇到不順利的事時，哪兩個方法比較能幫助自己？',['找信任的大人討論','休息一下再想辦法','責怪所有同學','故意破壞作品'],['找信任的大人討論','休息一下再想辦法'],'有困難可以找人幫忙，也可以調整步調。','遇到困難時，可以試哪兩種安全做法？',2],
 ['DIA13','diary','今天學會一項生活技能，可以怎麼記錄？',['用畫圖或口頭分享','說自己什麼都不會','嘲笑沒有學會的人','假裝別人幫忙的成果是自己的'],['用畫圖或口頭分享'],'自己的學習可以用不同方式留下紀錄。','畫畫和說話都能記錄成長。',2],
 ['DIA14','diary','當同學完成自己還做不到的事，你可以怎麼想？',['每個人學習速度不同','我永遠不可能學會','一定要把他的作品弄壞','我比他差所以不值得被喜歡'],['每個人學習速度不同'],'欣賞別人，也可以按照自己的速度學習。','每個人都能慢慢進步。',3],
 ['DIA15','diary','回顧今天的生活，哪兩種做法有助於成長？',['想想自己有什麼新發現','選一件想再試一次的事','只記得別人哪裡做錯','只要沒拿第一名就放棄'],['想想自己有什麼新發現','選一件想再試一次的事'],'回顧與再嘗試可以支持學習。','看看今天的發現，再想下一步。',3]
];
for(const row of diaryChoices)addChoice('diary',...row);

function lifeFestivalArt(scene){
 const base='<svg class="life-v12-scene-svg" viewBox="0 0 620 286" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="節慶場景插畫">';
 if(scene==='spring')return base+
 '<rect width="620" height="286" rx="24" fill="#fff0d8"/><path d="M0 249Q310 216 620 244V286H0Z" fill="#f7d9b8"/>'+
 '<path d="M173 70H448V245H173Z" fill="#eac095" stroke="#c58d69" stroke-width="8"/>'+
 '<path d="M149 75L310 17 472 75Z" fill="#aa4b48" stroke="#873c40" stroke-width="9"/>'+
 '<rect x="249" y="118" width="123" height="127" fill="#c85e55" stroke="#a14745" stroke-width="6"/><path d="M310 118V245" stroke="#f6c66e" stroke-width="4"/>'+
 '<g fill="#e9ba55"><circle cx="294" cy="182" r="7"/><circle cx="325" cy="182" r="7"/></g>'+
 '<g stroke="#a94346" stroke-width="6"><path d="M129 69V108M491 69V108"/></g>'+
 '<g fill="#e94e54" stroke="#a73b46" stroke-width="5"><ellipse cx="129" cy="131" rx="29" ry="32"/><ellipse cx="491" cy="131" rx="29" ry="32"/></g>'+
 '<g stroke="#f5c56b" stroke-width="4"><path d="M102 126h54 M464 126h54 M129 163v26 M491 163v26"/></g>'+
 '<rect x="198" y="111" width="33" height="119" rx="4" fill="#d95b55"/><rect x="390" y="111" width="33" height="119" rx="4" fill="#d95b55"/>'+
 '<g fill="#f6d580"><circle cx="214" cy="140" r="6"/><circle cx="406" cy="140" r="6"/><path d="M214 163l7 7-7 7-7-7z M406 163l7 7-7 7-7-7z"/></g>'+
 '<rect x="53" y="210" width="64" height="54" rx="8" fill="#df5954" stroke="#ab4a4b" stroke-width="5"/><path d="M53 229h64 M85 210v54" stroke="#ffda7e" stroke-width="6"/>'+
 '<circle cx="545" cy="78" r="10" fill="#f3b75e"/><g stroke="#f2b55d" stroke-width="4"><path d="M545 52V39 M545 103v14 M520 78h-14 M571 78h14 M528 61l-13-11 M563 61l13-11"/></g></svg>';
 if(scene==='dragon')return base+
 '<rect width="620" height="286" rx="24" fill="#e7f7ff"/><path d="M0 140Q155 118 310 142T620 140V286H0Z" fill="#83cbe4"/>'+
 '<g fill="none" stroke="#4fb4d9" stroke-width="8" opacity=".65"><path d="M10 193Q50 179 95 193T180 193 M330 214Q375 200 425 214T540 214 M60 257Q105 244 150 257T250 257"/></g>'+
 '<path d="M85 170L505 170Q489 223 414 228H168Q109 219 85 170Z" fill="#d79d65" stroke="#ab7249" stroke-width="8"/>'+
 '<path d="M84 170Q38 129 70 106Q106 88 128 136L113 169Z" fill="#5ac18b" stroke="#379b6b" stroke-width="7"/>'+
 '<circle cx="94" cy="121" r="7" fill="#2c5260"/><path d="M58 127l-22 12 27 8" fill="#e5c875" stroke="#b78b43" stroke-width="4"/>'+
 '<path d="M502 167L544 106 557 165" fill="#f0aa6c" stroke="#b67a4b" stroke-width="6"/>'+
 '<g fill="#536d8c" stroke="#415977" stroke-width="4"><circle cx="189" cy="116" r="17"/><circle cx="271" cy="116" r="17"/><circle cx="353" cy="116" r="17"/><circle cx="435" cy="116" r="17"/></g>'+
 '<g stroke="#639aa2" stroke-width="7"><path d="M185 132l-22 46M267 132l-15 47M349 132l-13 48M431 132l-14 48"/></g>'+
 '<g stroke="#aa7451" stroke-width="9"><path d="M166 144l-24 80 M256 144l-17 80 M346 144l-17 80 M433 144l-17 80"/></g>'+
 '<g fill="#e6ad6a"><path d="M134 207l33 13-10 15-23-13z M230 208l33 13-10 15-23-13z M322 208l33 13-10 15-23-13z"/></g>'+
 '<g transform="translate(489 13)"><path d="M6 72L55 11 103 77Q54 106 6 72Z" fill="#6cac76" stroke="#3b835c" stroke-width="6"/><path d="M55 11Q80 47 103 77L58 75Q48 40 55 11Z" fill="#8cc68c"/><path d="M6 72Q45 64 58 75L103 77Q56 106 6 72Z" fill="#459969"/><path d="M23 65Q48 49 78 64L87 76Q53 83 28 76Z" fill="#e9d3a2" stroke="#bfad87" stroke-width="3"/><path d="M19 50Q53 68 91 58M55 15Q56 58 54 91" stroke="#f5ecce" stroke-width="6" fill="none"/><path d="M55 85q12 11 20 0" fill="none" stroke="#f5ecce" stroke-width="5"/></g></svg>';
 return base+
 '<rect width="620" height="286" rx="24" fill="#253e72"/><g fill="#f6e5a4"><circle cx="79" cy="58" r="3"/><circle cx="136" cy="90" r="3"/><circle cx="473" cy="62" r="4"/><circle cx="543" cy="104" r="3"/><circle cx="393" cy="24" r="3"/></g>'+
 '<circle cx="307" cy="99" r="73" fill="#ffe3a2" stroke="#ffeab9" stroke-width="10"/><circle cx="286" cy="76" r="11" fill="#f4d49c"/><circle cx="331" cy="118" r="17" fill="#f4d49c"/><circle cx="291" cy="135" r="10" fill="#f4d49c"/>'+
 '<path d="M0 246Q160 216 310 243T620 244V286H0Z" fill="#65899d"/>'+
 '<path d="M115 216L267 216 248 260H133Z" fill="#e3b27d" stroke="#af8155" stroke-width="6"/><path d="M111 213L271 213" stroke="#efc990" stroke-width="10"/>'+
 '<circle cx="190" cy="211" r="50" fill="#e2a85f" stroke="#b87a45" stroke-width="7"/><circle cx="190" cy="211" r="34" fill="#f7d8a6"/><circle cx="190" cy="211" r="22" fill="#dea26c"/><path d="M164 198h52 M164 221h52" stroke="#b67d4e" stroke-width="4"/>'+
 '<g fill="#f7f4eb" stroke="#d8dfd9" stroke-width="4"><ellipse cx="472" cy="218" rx="34" ry="43"/><ellipse cx="440" cy="146" rx="12" ry="47" transform="rotate(-12 440 146)"/><ellipse cx="495" cy="146" rx="12" ry="47" transform="rotate(12 495 146)"/></g>'+
 '<circle cx="459" cy="203" r="4" fill="#48576e"/><circle cx="483" cy="203" r="4" fill="#48576e"/><path d="M468 214l7 1-3 6z" fill="#d19ba0"/>'+
 '<rect x="39" y="234" width="56" height="25" rx="12" fill="#81b0a6"/><rect x="528" y="239" width="58" height="23" rx="12" fill="#81b0a6"/></svg>';
}
function lifeBookCover(book){
 const art={
 rabbit:'<ellipse cx="61" cy="55" rx="17" ry="25" fill="#fff"/><ellipse cx="41" cy="23" rx="9" ry="27" fill="#fff"/><ellipse cx="76" cy="23" rx="9" ry="27" fill="#fff"/><circle cx="54" cy="52" r="3" fill="#5b666c"/><circle cx="69" cy="52" r="3" fill="#5b666c"/><path d="M58 64q5 5 10 0" stroke="#8b6d75" stroke-width="3" fill="none"/>',
 stars:'<circle cx="90" cy="45" r="25" fill="#fff1b0"/><circle cx="99" cy="33" r="24" fill="#8fa8f0"/><path d="M43 35l8 12 14 2-10 10 2 14-14-7-12 7 2-14-10-10 14-2z" fill="#ffe8a1"/><circle cx="86" cy="77" r="5" fill="#fff"/>',
 flowers:'<path d="M60 38V94" stroke="#3b9763" stroke-width="7"/><ellipse cx="46" cy="75" rx="19" ry="10" fill="#4cae67"/><ellipse cx="75" cy="80" rx="19" ry="9" fill="#4cae67"/><g fill="#ffefb9"><circle cx="60" cy="24" r="15"/><circle cx="45" cy="37" r="15"/><circle cx="76" cy="37" r="15"/><circle cx="54" cy="55" r="15"/><circle cx="69" cy="55" r="15"/></g><circle cx="60" cy="40" r="12" fill="#f9b75b"/>',
 paint:'<ellipse cx="60" cy="55" rx="43" ry="33" fill="#ffe4bb" stroke="#b88164" stroke-width="5"/><circle cx="38" cy="45" r="9" fill="#e36c71"/><circle cx="59" cy="34" r="9" fill="#6bb5db"/><circle cx="82" cy="45" r="9" fill="#7fc68c"/><circle cx="76" cy="70" r="9" fill="#f6b857"/><path d="M57 53l30 44" stroke="#946f57" stroke-width="9"/>',
 dinosaur:'<path d="M28 81Q18 48 46 39L68 36 88 17 92 53Q115 76 89 87L63 80 42 95Z" fill="#64bfa4" stroke="#388f79" stroke-width="5"/><path d="M56 37l7-16 10 14 9-14" fill="#80dbb9"/><circle cx="91" cy="44" r="5" fill="#304f57"/><path d="M60 81l-4 23M82 81l-4 23" stroke="#388f79" stroke-width="8"/>',
 water:'<path d="M62 10Q103 56 98 75Q94 104 61 106Q26 107 24 75Q24 55 62 10Z" fill="#79ccf0" stroke="#3b9fc9" stroke-width="6"/><path d="M44 69Q48 45 67 36" stroke="#dcf7ff" stroke-width="8" fill="none" stroke-linecap="round"/>',
 bird:'<ellipse cx="62" cy="64" rx="37" ry="29" fill="#75b8d7"/><circle cx="84" cy="42" r="20" fill="#82c5e1"/><path d="M100 40l17 8-17 10" fill="#f1bc72"/><circle cx="90" cy="37" r="5" fill="#304962"/><path d="M42 56Q65 41 81 65Q63 89 42 56" fill="#c8ecf4"/><path d="M56 89l-5 19 M77 91l-5 18" stroke="#e0a267" stroke-width="5"/>',
 music:'<path d="M57 17v66M91 13v60M57 19l34-7" stroke="#455a99" stroke-width="9" fill="none"/><ellipse cx="45" cy="89" rx="16" ry="11" fill="#5e6fb3" transform="rotate(-21 45 89)"/><ellipse cx="79" cy="77" rx="16" ry="11" fill="#5e6fb3" transform="rotate(-21 79 77)"/>',
 friend:'<circle cx="39" cy="38" r="17" fill="#f5d5b5"/><circle cx="82" cy="36" r="17" fill="#f0bd99"/><path d="M9 107Q5 65 38 65Q65 65 68 103" fill="#7eb8d9"/><path d="M56 103Q57 64 83 64Q116 65 113 106" fill="#ce92bd"/><path d="M46 78l29 9" stroke="#f5d7ba" stroke-width="10"/>',
 moon:'<circle cx="60" cy="55" r="41" fill="#fff2b5"/><circle cx="79" cy="39" r="38" fill="#a9bbeb"/><circle cx="27" cy="20" r="4" fill="#fff"/><circle cx="103" cy="88" r="5" fill="#fff"/>',
 bugs:'<ellipse cx="61" cy="66" rx="33" ry="36" fill="#e96d6b" stroke="#923c48" stroke-width="5"/><circle cx="61" cy="36" r="18" fill="#404c60"/><path d="M61 51V99" stroke="#404c60" stroke-width="4"/><circle cx="47" cy="69" r="7" fill="#404c60"/><circle cx="77" cy="69" r="7" fill="#404c60"/><circle cx="45" cy="87" r="6" fill="#404c60"/><circle cx="77" cy="87" r="6" fill="#404c60"/>',
 shapes:'<path d="M20 16L100 16 100 98 20 98Z" fill="#ffeba3" stroke="#d9a65b" stroke-width="5"/><path d="M20 16L100 97 65 56Z" fill="#7eb4dc"/><path d="M20 97L100 16 64 58Z" fill="#e99fb4"/>'
 }[book.id]||'<circle cx="60" cy="54" r="37" fill="#fff"/>';
 return '<svg class="life-book-cover" viewBox="0 0 142 173" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+escapeHTML(book.title)+'的書封">'+
 '<rect x="10" y="4" width="124" height="165" rx="9" fill="'+book.hue+'" stroke="#5c7292" stroke-width="5"/>'+
 '<path d="M20 9V164" stroke="#ffffff" stroke-opacity=".65" stroke-width="5"/>'+
 '<rect x="21" y="19" width="103" height="106" rx="12" fill="#fff" fill-opacity=".7"/>'+
 '<g transform="translate(12 25) scale(.85)">'+art+'</g>'+
 '<rect x="26" y="133" width="92" height="27" rx="8" fill="#fff" fill-opacity=".88"/>'+
 '<path d="M40 142H104M44 151H100" stroke="#8591a5" stroke-width="4" stroke-linecap="round"/></svg>';
}
function lifeDiaryArt(scene){
 const child='<circle cx="166" cy="98" r="46" fill="#f6d8b8" stroke="#d19e79" stroke-width="5"/><path d="M118 97Q112 34 166 41Q221 35 213 99Q193 64 166 68Q146 83 118 97Z" fill="#795a52"/><circle cx="151" cy="105" r="4" fill="#4a525c"/><circle cx="183" cy="105" r="4" fill="#4a525c"/><path d="M155 124Q167 137 180 124" stroke="#b57674" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M108 214Q108 159 164 160Q221 159 223 214" fill="#7cbead" stroke="#549d8c" stroke-width="6"/>';
 const deco={
 school:'<path d="M338 92L433 38 525 92V221H338Z" fill="#ffdc9e" stroke="#c28a59" stroke-width="7"/><path d="M353 91H511" stroke="#b77c60" stroke-width="8"/><rect x="407" y="136" width="45" height="85" fill="#a1d1ea"/><rect x="359" y="110" width="32" height="35" fill="#a1d1ea"/><rect x="468" y="110" width="32" height="35" fill="#a1d1ea"/>',
 friend:'<circle cx="436" cy="101" r="42" fill="#efc3a4"/><path d="M389 91Q399 38 442 55Q479 56 480 95" fill="#655961"/><circle cx="422" cy="106" r="4"/><circle cx="448" cy="106" r="4"/><path d="M418 124Q436 137 453 124" stroke="#aa6b6f" stroke-width="5" fill="none"/><path d="M373 218Q375 160 433 164Q494 159 498 217" fill="#deaccc" stroke="#ac7eac" stroke-width="5"/>',
 nature:'<path d="M433 98V222" stroke="#a87556" stroke-width="28"/><circle cx="433" cy="70" r="65" fill="#92d7a4"/><circle cx="395" cy="102" r="42" fill="#7dcba0"/><circle cx="485" cy="98" r="44" fill="#6ebe91"/><path d="M490 170l18-23" stroke="#70ac71" stroke-width="7"/>',
 try:'<path d="M320 218L380 126 450 184 506 88 565 218Z" fill="#b3cadf" stroke="#7199b3" stroke-width="7"/><path d="M490 121l16-33 23 47" fill="#fff"/><path d="M430 42l7 17 18 3-14 12 4 19-15-9-17 10 4-20-13-12 19-3Z" fill="#f7cd70"/>',
 book:'<path d="M336 79Q395 53 435 93Q491 52 546 78V206Q487 183 435 219Q388 187 336 207Z" fill="#fff4d9" stroke="#8aa7c8" stroke-width="8"/><path d="M435 94V218" stroke="#8aa7c8" stroke-width="6"/><path d="M353 111q35-15 63 5 M458 117q29-18 69-7" stroke="#b5c2bd" stroke-width="5" fill="none"/>',
 help:'<rect x="345" y="152" width="160" height="52" rx="10" fill="#c4a37d"/><rect x="361" y="120" width="128" height="43" rx="8" fill="#f1d1ab"/><path d="M527 65L507 216" stroke="#b68d6a" stroke-width="12"/><path d="M472 206l64 10 13-34-62-10Z" fill="#67b4a7"/>',
 art:'<rect x="349" y="47" width="164" height="146" rx="9" fill="#f9f5ec" stroke="#a2b7a1" stroke-width="10"/><path d="M367 173l48-64 33 27 31-49 17 86Z" fill="#8ed0a5"/><circle cx="394" cy="84" r="17" fill="#ffd06e"/><path d="M426 192l-18 39M444 192l23 39" stroke="#a78263" stroke-width="9"/>',
 listen:'<path d="M329 47H529Q546 47 546 64V147Q546 165 528 165H433L397 193 402 165H329Q314 165 314 148V64Q314 47 329 47Z" fill="#fff" stroke="#7bbab0" stroke-width="8"/><path d="M353 83h150M357 115h107" stroke="#9fb9cc" stroke-width="9" stroke-linecap="round"/>',
 weather:'<circle cx="509" cy="63" r="36" fill="#ffd276"/><path d="M342 118Q350 67 404 78Q431 36 478 76Q518 76 520 116Q520 151 481 151H373Q336 149 342 118" fill="#fff" stroke="#c5dbe0" stroke-width="7"/><path d="M378 176l-10 23M435 180l-10 23M490 175l-10 23" stroke="#6fb8e3" stroke-width="8" stroke-linecap="round"/>',
 brave:'<path d="M435 37l22 43 48 7-35 34 8 48-43-22-43 22 9-48-35-34 47-7Z" fill="#ffd57b" stroke="#dca85a" stroke-width="7"/><circle cx="436" cy="108" r="15" fill="#fff0bd"/><path d="M344 198Q395 172 435 204Q487 178 532 200" stroke="#e6b6cc" stroke-width="13" fill="none"/>'
 }[scene]||'';
 return '<svg class="life-diary-scene" viewBox="0 0 600 246" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="成長日記生活情境圖">'+
 '<rect width="600" height="246" rx="25" fill="#eaf7ff"/><path d="M0 217Q300 190 600 218V246H0Z" fill="#e5efce"/>'+child+deco+'</svg>';
}
const LIFE_V12_MOODS=[{id:'happy',name:'開心',color:'#ffe5a2'},{id:'calm',name:'平靜',color:'#c7eedb'},{id:'worried',name:'有點擔心',color:'#d5d9f7'},{id:'tired',name:'有點累',color:'#efd3dd'}];
function lifeMoodFace(mood){
 const eyes=mood==='tired'?'<path d="M42 48q8-6 16 0 M80 48q8-6 16 0" stroke="#5d6470" stroke-width="4" fill="none"/>':
 '<circle cx="49" cy="51" r="4" fill="#596370"/><circle cx="86" cy="51" r="4" fill="#596370"/>';
 const mouth=mood==='happy'?'<path d="M47 75Q68 96 89 75" stroke="#bf777b" stroke-width="5" fill="none" stroke-linecap="round"/>':mood==='worried'?'<path d="M50 83Q67 68 85 83" stroke="#a87c8c" stroke-width="5" fill="none"/>':
 mood==='tired'?'<path d="M57 81h26" stroke="#a77789" stroke-width="5" stroke-linecap="round"/>':'<path d="M54 77q13 8 26 0" stroke="#a77789" stroke-width="4" fill="none"/>';
 const bg=LIFE_V12_MOODS.find(x=>x.id===mood)?.color||'#fff5df';
 return '<svg class="life-mood-svg" viewBox="0 0 134 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="67" cy="61" r="54" fill="'+bg+'" stroke="#d0a67b" stroke-width="5"/>'+eyes+mouth+'</svg>';
}
function lifeV12RenderFestival(t){
 $('visualArea').innerHTML='<div class="life-festival-wrap">'+lifeFestivalArt(t.scene)+
 '<p class="life-v12-art-note">先看看人物、物品和環境，再回答生活情境題。不同家庭的節慶方式可能不同。</p></div>';
}
function lifeV12RenderBookshelf(t){
 const choices=t.bookIDs.map(id=>BOOKS.find(b=>b.id===id));
 if(choices.some(x=>!x))throw Error('Missing library book');
 $('visualArea').innerHTML='<div class="life-library-lab"><div class="life-library-header">'+
 '<svg viewBox="0 0 250 82" xmlns="http://www.w3.org/2000/svg" aria-label="圖書館書架" role="img"><rect x="3" y="10" width="244" height="63" rx="12" fill="#e5b986" stroke="#ad7e5e" stroke-width="5"/>'+
 '<rect x="22" y="19" width="30" height="46" rx="4" fill="#82b8d5"/><rect x="57" y="17" width="30" height="48" rx="4" fill="#e9b5b3"/><rect x="92" y="21" width="30" height="44" rx="4" fill="#a3d7af"/><rect x="128" y="17" width="30" height="48" rx="4" fill="#f7d383"/><rect x="164" y="18" width="30" height="47" rx="4" fill="#ad9ed2"/><rect x="199" y="20" width="28" height="45" rx="4" fill="#a7cad7"/></svg>'+
 '<strong>找到適合的書，再點一下書封！</strong></div><div class="life-books-grid">'+choices.map(b=>'<button class="life-book-option" type="button" data-book="'+b.id+'">'+lifeBookCover(b)+'<span>'+readMarkup(b.title)+'</span></button>').join('')+
 '</div><div class="life-v12-observation" id="lifeLibraryObservation" role="status">'+readMarkup('觀察書封的圖片和書名，找最符合題目的書。')+'</div></div>';
 [...document.querySelectorAll('.life-book-option')].forEach(btn=>btn.onclick=()=>{
  const b=BOOKS.find(x=>x.id===btn.dataset.book),ok=b.id===t.answer;
  document.querySelectorAll('.life-book-option').forEach(x=>x.classList.toggle('picked',x===btn));
  if(ok){if(!solved)markDone();setMarkup('lifeLibraryObservation','找到了：「'+b.title+'」。'+t.explain+' 想看其他書封也可以再選，想換題再按下一個任務。');feedback('找書成功！'+t.explain,'good');}
  else{setMarkup('lifeLibraryObservation','這本是「'+b.title+'」，看看題目想找的主題，再試另一冊。');feedback(solved?'這本也很有趣，但和題目要找的內容不同；你已完成任務。':'再比較其他書封和題目的線索，慢慢找就好。',solved?'':'retry');}
 });
}
function lifeV12RenderCategoryScene(t){
 if(mode==='library'){
  $('visualArea').innerHTML='<div class="life-library-scene"><div class="life-library-scene-books">'+
  BOOKS.slice(0,4).map(x=>lifeBookCover(x)).join('')+'</div><p>📚 書的分類、借還與愛護</p></div>';
 }else if(mode==='diary'){
  $('visualArea').innerHTML='<div class="life-diary-image">'+lifeDiaryArt('listen')+'<p>每個人都有自己的感受，和別人相處時也要尊重。</p></div>';
 }
}
function lifeV12RenderDiary(t){
 const previous=saved.diaryEntries?.[t.id];
 const selected={mood:previous?.mood||null,action:previous?.action??null};
 $('visualArea').innerHTML='<div class="life-diary-lab">'+lifeDiaryArt(t.scene)+
 '<p class="life-diary-caption">心情沒有對錯，也可以選擇不分享給別人。紀錄只保存在這個瀏覽器。</p>'+
 '<div class="life-diary-title">① 選一個現在最接近的心情</div><div class="life-diary-moods">'+
 LIFE_V12_MOODS.map(m=>'<button type="button" class="life-mood-option'+(selected.mood===m.id?' chosen':'')+'" data-mood="'+m.id+'" aria-pressed="'+(selected.mood===m.id)+'">'+lifeMoodFace(m.id)+'<span>'+readMarkup(m.name)+'</span></button>').join('')+'</div>'+
 '<div class="life-diary-title">② 選一件願意試試的生活小事</div><div class="life-diary-actions">'+
 t.actions.map((a,i)=>'<button type="button" data-diary-action="'+i+'" class="life-diary-action'+(selected.action===i?' chosen':'')+'">'+readMarkup(a)+'</button>').join('')+'</div>'+
 '<div class="life-diary-save"><button type="button" id="saveDiary" class="primary">🌟 留下我的小紀錄</button></div><p id="lifeDiaryNote" class="life-diary-note">'+readMarkup(previous?'之前的紀錄已載入，可以再修改。':'可以慢慢挑選，沒有標準答案。')+'</p></div>';
 const update=()=>{
  document.querySelectorAll('[data-mood]').forEach(b=>{const on=b.dataset.mood===selected.mood;b.classList.toggle('chosen',on);b.setAttribute('aria-pressed',String(on));});
  document.querySelectorAll('[data-diary-action]').forEach(b=>b.classList.toggle('chosen',Number(b.dataset.diaryAction)===selected.action));
 };
 document.querySelectorAll('[data-mood]').forEach(b=>b.onclick=()=>{selected.mood=b.dataset.mood;update();});
 document.querySelectorAll('[data-diary-action]').forEach(b=>b.onclick=()=>{selected.action=Number(b.dataset.diaryAction);update();});
 $('saveDiary').onclick=()=>{
  if(!selected.mood||selected.action===null){feedback('先選一個心情，再選一件生活小事，就能保存。','retry');return;}
  if(!saved.diaryEntries)saved.diaryEntries={};
  saved.diaryEntries[t.id]={mood:selected.mood,action:selected.action};
  if(!Array.isArray(saved.diaryHistory))saved.diaryHistory=[];
  const day=new Date().toLocaleDateString('sv-SE');
  const record={id:t.id,date:day,mood:selected.mood,action:selected.action};
  saved.diaryHistory=saved.diaryHistory.filter(x=>!(x.id===record.id&&x.date===record.date));
  saved.diaryHistory.push(record);saved.diaryHistory=saved.diaryHistory.slice(-90);
  persist();if(!solved)markDone();
  setMarkup('lifeDiaryNote','已保存今天的選擇，改變心情或行動也可以再存一次。');
  feedback('已記下自己的小發現！心情沒有對錯。可以繼續調整，或按下一題。','good');
  if(typeof lifeV12RenderParent==='function')lifeV12RenderParent();
 };
}
function lifeV12RenderParent(){
 const target=$('familyChecklist');if(!target)return;
 if(!Array.isArray(saved.familyDone))saved.familyDone=[];
 const totalDone=MODES.reduce((n,m)=>n+(saved.done[m.id]?.length||0),0);
 const completed=saved.familyDone.length;
 $('familySummary').textContent='遊戲已探索 '+totalDone+' / 150 個任務　｜　親子實作 '+completed+' / '+LIFE_V12_FAMILY.length+' 項';
 const countNote=$('familyProgressNote');if(countNote)countNote.textContent='這是家庭陪伴紀錄，不是孩子能力評分；進度只儲存在本機。';
 target.innerHTML=LIFE_V12_FAMILY.map(x=>'<label class="life-family-item"><input type="checkbox" data-family="'+x.id+'" '+(saved.familyDone.includes(x.id)?'checked':'')+'/><span class="life-family-icon" aria-hidden="true">'+x.icon+'</span><span><strong>'+readMarkup(x.name)+'</strong><small>'+readMarkup(x.note)+'</small></span></label>').join('');
 const history=$('familyDiaryHistory');if(history){const recent=(saved.diaryHistory||[]).slice(-6).reverse();history.innerHTML=recent.length?'<h4>🌟 最近的成長日記</h4>'+recent.map(item=>{const t=TASKS.diary.find(x=>x.id===item.id);const mood=LIFE_V12_MOODS.find(x=>x.id===item.mood);return t&&mood&&t.actions[item.action]!==undefined?'<article class="life-history-item"><small>'+escapeHTML(item.date)+'</small><span> '+readMarkup(mood.name)+' · '+readMarkup(t.actions[item.action])+'</span></article>':'';}).join(''):'<p>還沒有成長日記紀錄，可以先到「我的成長日記」探索。</p>';}
 target.querySelectorAll('[data-family]').forEach(b=>b.onchange=()=>{
  if(b.checked&&!saved.familyDone.includes(b.dataset.family))saved.familyDone.push(b.dataset.family);
  if(!b.checked)saved.familyDone=saved.familyDone.filter(x=>x!==b.dataset.family);
  persist();lifeV12RenderParent();
 });
}

const LIFE_V12_ZHUYIN={"慶":"ㄑㄧㄥˋ","插":"ㄔㄚ","端":"ㄉㄨㄢ","秋":"ㄑㄧㄡ","架":"ㄐㄧㄚˋ","擔":"ㄉㄢ","錯":"ㄘㄨㄛˋ","孩":"ㄏㄞˊ","訪":"ㄈㄤˇ","犧":"ㄒㄧ","牲":"ㄕㄥ","祝":"ㄓㄨˋ","庭":"ㄊㄧㄥˊ","興":"ㄒㄧㄥˋ","紅":"ㄏㄨㄥˊ","燈":"ㄉㄥ","籠":"ㄌㄨㄥˊ","春":"ㄔㄨㄣ","聯":"ㄌㄧㄢˊ","農":"ㄋㄨㄥˊ","曆":"ㄌㄧˋ","福":"ㄈㄨˊ","考":"ㄎㄠˇ","句":"ㄐㄩˋ","賀":"ㄏㄜˋ","飯":"ㄈㄢˋ","輩":"ㄅㄟˋ","聚":"ㄐㄩˋ","愉":"ㄩˊ","未":"ㄨㄟˋ","拜":"ㄅㄞˋ","義":"ㄧˋ","划":"ㄏㄨㄚˊ","舟":"ㄓㄡ","元":"ㄩㄢˊ","宵":"ㄒㄧㄠ","母":"ㄇㄨˇ","員":"ㄩㄢˊ","賽":"ㄙㄞˋ","岸":"ㄢˋ","河":"ㄏㄜˊ","欄":"ㄌㄢˊ","擠":"ㄐㄧˇ","眾":"ㄓㄨㄥˋ","域":"ㄩˋ","遵":"ㄗㄨㄣ","米":"ㄇㄧˇ","粽":"ㄗㄨㄥˋ","月":"ㄩㄝˋ","餅":"ㄅㄧㄥˇ","蛋":"ㄉㄢˋ","糕":"ㄍㄠ","吐":"ㄊㄨˇ","司":"ㄙ","集":"ㄐㄧˊ","介":"ㄐㄧㄝˋ","紹":"ㄕㄠˋ","俗":"ㄙㄨˊ","擅":"ㄕㄢˋ","群":"ㄑㄩㄣˊ","彼":"ㄅㄧˇ","此":"ㄘˇ","夜":"ㄧㄝˋ","晚":"ㄨㄢˇ","退":"ㄊㄨㄟˋ","獨":"ㄉㄨˊ","盯":"ㄉㄧㄥ","編":"ㄅㄧㄢ","豐":"ㄈㄥ","富":"ㄈㄨˋ","兔":"ㄊㄨˋ","星":"ㄒㄧㄥ","秘":"ㄇㄧˋ","密":"ㄇㄧˋ","恐":"ㄎㄨㄥˇ","簿":"ㄅㄨˋ","昆":"ㄎㄨㄣ","蟲":"ㄔㄨㄥˊ","魔":"ㄇㄛˊ","朵":"ㄉㄨㄛˇ","顏":"ㄧㄢˊ","象":"ㄒㄧㄤˋ","藝":"ㄧˋ","術":"ㄕㄨˋ","黏":"ㄋㄧㄢˊ","籤":"ㄑㄧㄢ","扔":"ㄖㄥ","聊":"ㄌㄧㄠˊ","棵":"ㄎㄜ","困":"ㄎㄨㄣˋ","雲":"ㄩㄣˊ","溫":"ㄨㄣ","柔":"ㄖㄡˊ","談":"ㄊㄢˊ","技":"ㄐㄧˋ","棄":"ㄑㄧˋ","景":"ㄐㄧㄥˇ","累":"ㄌㄟˋ","但":"ㄉㄢˋ","載":"ㄗㄞˋ","評":"ㄆㄧㄥˊ","儲":"ㄔㄨˊ"};