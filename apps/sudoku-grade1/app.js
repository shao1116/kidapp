/* KidApp Sudoku Adventure v1.0 */
(()=>{'use strict';
const E=window.SudokuEngine,L=E.LEVELS,$=id=>document.getElementById(id),KEY='kidapp-sudoku-v1';
const fresh=()=>({done:{},daily:{},current:null,settings:{bopo:true,voice:true},totalHints:0});let data;
try{data={...fresh(),...JSON.parse(localStorage.getItem(KEY)||'null')}}catch{data=fresh()}
data.done=data.done&&typeof data.done==='object'?data.done:{};data.daily=data.daily&&typeof data.daily==='object'?data.daily:{};data.settings={...fresh().settings,...data.settings};
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch{}},icons=['🌱','🔎','🦊','⛵','🌈','🏰','🏆'];
const goals=['找出每一排缺少的數字。','先看橫排，再看看直排。','一起檢查橫排、直排和小宮格。','填入 1 到 6，每個數字不能重複。','仔細觀察，有些數字只有一個位置。','挑戰 1 到 9 的經典數獨。','用觀察和排除，一步一步解開難題。'];
const rules=['每一排、每一行和每個 2×2 小宮格，都要有 1 到 4。','橫排和直排不能重複，還要看小宮格。','每個 2×2 小宮格，都要有 1、2、3、4。','每個 2×3 小宮格，都要有 1 到 6。','先找最容易的一格，不用猜。','每個 3×3 小宮格，都要有 1 到 9。','可以用候選筆記，慢慢找出唯一的位置。'];
const zh='小:ㄒㄧㄠˇ 數:ㄕㄨˋ 字:ㄗˋ 學:ㄒㄩㄝˊ 徒:ㄊㄨˊ 觀:ㄍㄨㄢ 察:ㄔㄚˊ 家:ㄐㄧㄚ 偵:ㄓㄣ 探:ㄊㄢˋ 險:ㄒㄧㄢˇ 邏:ㄌㄨㄛˊ 輯:ㄐㄧˊ 高:ㄍㄠ 手:ㄕㄡˇ 勇:ㄩㄥˇ 大:ㄉㄚˋ 師:ㄕ 找:ㄓㄠˇ 出:ㄔㄨ 每:ㄇㄟˇ 一:ㄧ 排:ㄆㄞˊ 缺:ㄑㄩㄝ 少:ㄕㄠˇ 的:ㄉㄜ˙ 先:ㄒㄧㄢ 看:ㄎㄢˋ 橫:ㄏㄥˊ 再:ㄗㄞˋ 直:ㄓˊ 起:ㄑㄧˇ 檢:ㄐㄧㄢˇ 查:ㄔㄚˊ 和:ㄏㄢˋ 宮:ㄍㄨㄥ 格:ㄍㄜˊ 填:ㄊㄧㄢˊ 入:ㄖㄨˋ 到:ㄉㄠˋ 不:ㄅㄨˋ 能:ㄋㄥˊ 重:ㄔㄨㄥˊ 複:ㄈㄨˋ 仔:ㄗˇ 細:ㄒㄧˋ 有:ㄧㄡˇ 些:ㄒㄧㄝ 只:ㄓˇ 是:ㄕˋ 個:ㄍㄜˋ 位:ㄨㄟˋ 置:ㄓˋ 挑:ㄊㄧㄠˇ 戰:ㄓㄢˋ 經:ㄐㄧㄥ 典:ㄉㄧㄢˇ 用:ㄩㄥˋ 步:ㄅㄨˋ 解:ㄐㄧㄝˇ 開:ㄎㄞ 難:ㄋㄢˊ 題:ㄊㄧˊ 這:ㄓㄜˋ 裡:ㄌㄧˇ 要:ㄧㄠˋ 行:ㄏㄤˊ 都:ㄉㄡ 還:ㄏㄞˊ 記:ㄐㄧˋ 得:ㄉㄜˊ 可:ㄎㄜˇ 以:ㄧˇ 候:ㄏㄡˋ 選:ㄒㄩㄢˇ 筆:ㄅㄧˇ 慢:ㄇㄢˋ 唯:ㄨㄟˊ 持:ㄔˊ 續:ㄒㄩˋ 嘗:ㄔㄤˊ 試:ㄕˋ 會:ㄏㄨㄟˋ 很:ㄏㄣˇ 棒:ㄅㄤˋ 從:ㄘㄨㄥˊ 兩:ㄌㄧㄤˇ 三:ㄙㄢ 四:ㄙˋ 五:ㄨˇ 六:ㄌㄧㄡˋ 七:ㄑㄧ 八:ㄅㄚ 九:ㄐㄧㄡˇ 十:ㄕˊ 成:ㄔㄥˊ 功:ㄍㄨㄥ 完:ㄨㄢˊ 正:ㄓㄥˋ 確:ㄑㄩㄝˋ 關:ㄍㄨㄢ 卡:ㄎㄚˇ 方:ㄈㄤ 法:ㄈㄚˇ 明:ㄇㄧㄥˊ 白:ㄅㄞˊ 了:ㄌㄜ˙ 讓:ㄖㄤˋ 我:ㄨㄛˇ 們:ㄇㄣ˙ 輕:ㄑㄧㄥ 鬆:ㄙㄨㄥ 想:ㄒㄧㄤˇ 答:ㄉㄚˊ 案:ㄢˋ';
const BOP=Object.fromEntries(zh.split(' ').map(x=>x.split(':'))),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function marked(s){return [...s].map(ch=>data.settings.bopo&&BOP[ch]?'<span class="zi"><span class="han">'+esc(ch)+'</span><span class="bo">'+esc(BOP[ch])+'</span></span>':esc(ch)).join('')}
function updateBopo(){document.querySelectorAll('[data-bopo]').forEach(x=>x.innerHTML=marked(x.dataset.bopo));$('bopoToggle').textContent='注音 '+(data.settings.bopo?'開':'關');$('bopoToggle').setAttribute('aria-pressed',String(data.settings.bopo))}
function speak(s){if(!data.settings.voice||!('speechSynthesis'in window))return;try{speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(s);u.lang='zh-TW';u.rate=.83;speechSynthesis.speak(u)}catch{}}
function stopVoice(){if('speechSynthesis'in window)try{speechSynthesis.cancel()}catch{}}
let g=null,sel=0,noteMode=false,hintStep=0,hintTarget=null,history=[],activeTab='adventure';const bank=new Map();
const key=(l,i)=>'L'+l+'-P'+i,done=l=>Object.keys(data.done).filter(k=>k.startsWith('L'+l+'-')).length;
function nextIndex(l){for(let i=0;i<30;i++)if(!data.done[key(l,i)])return i;return 0}
function unlocked(){let max=1;for(let l=1;l<=7;l++)if(done(l)>0)max=Math.min(7,l+1);return max}
function dateId(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function hash(s){let h=2166136261>>>0;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function dailyQuestion(step){const day=dateId();if(!data.dailyPlan||data.dailyPlan.date!==day||!Array.isArray(data.dailyPlan.tasks)||data.dailyPlan.tasks.length!==3){const base=unlocked();data.dailyPlan={date:day,tasks:Array.from({length:3},(_,j)=>({l:Math.min(7,Math.max(1,base+j-1)),i:hash(day+':'+j)%30}))};save()}return data.dailyPlan.tasks[step]}
function dailyKey(step){return dateId()+':'+step}
function puzzle(l,i){const id=key(l,i);if(!bank.has(id))bank.set(id,E.generate(l,i));return bank.get(id)}
function saveGame(){if(!g)return;data.current={l:g.l,i:g.i,mode:g.mode,step:g.step,board:g.board.slice(),notes:g.notes,hints:g.hints};save()}
function start(l,i,mode='adventure',step=0,restart=false){
 stopVoice();const p=puzzle(l,i),old=!restart&&data.current&&data.current.l===l&&data.current.i===i&&data.current.mode===mode&&data.current.step===step?data.current:null;
 const valid=old&&Array.isArray(old.board)&&old.board.length===p.n*p.n&&old.board.every((x,j)=>Number.isInteger(x)&&x>=0&&x<=p.n&&(p.puzzle[j]===0||x===p.puzzle[j]));
 g={p,l,i,mode,step,board:valid?old.board.slice():p.puzzle.slice(),notes:valid&&old.notes&&typeof old.notes==='object'?old.notes:{},hints:valid?(old.hints||0):0};
 sel=g.board.findIndex((x,j)=>!p.puzzle[j]&&!x);if(sel<0)sel=p.puzzle.findIndex(x=>!x);if(sel<0)sel=0;
 noteMode=false;hintStep=0;hintTarget=null;history=[];
 $('home').classList.add('hidden');document.querySelector('.hero').classList.add('hidden');$('game').classList.remove('hidden');$('winBox').classList.add('hidden');$('hintBox').classList.add('hidden');$('noteMode').checked=false;$('boardFrame').classList.remove('zoomed');$('zoomBtn').textContent='🔎 放大棋盤';
 $('gameTitle').textContent=icons[l-1]+' '+L[l-1].name;
 $('gameSub').textContent=p.n+'×'+p.n+' · '+(mode==='daily'?'今日第 '+(step+1)+' 題':'第 '+(i+1)+' 題');
 $('skillText').textContent=L[l-1].skill;$('learningTip').textContent=l<=3?'找一排已經有很多數字的地方開始吧。':l<=5?'先從最容易的一格開始推理。':'可以使用候選數字筆記，記下還可能出現的數字。';
 $('goalText').innerHTML=marked(goals[l-1]);$('ruleText').innerHTML=marked(rules[l-1]);$('ruleText').classList.add('subtle');
 draw();pad();updateGame();message('先點一個空格，再選下面的數字。');updateBopo();saveGame();window.scrollTo({top:0,behavior:'smooth'});speak(goals[l-1]);
}
function message(s,kind=''){$('feedback').className='feedback'+(kind?' '+kind:'');$('feedback').textContent=s}
function draw(){if(!g)return;const{p,board}=g,n=p.n,err=E.conflicts(board,n,p.br,p.bc),r0=Math.floor(sel/n),c0=sel%n;
 const box=i=>Math.floor(Math.floor(i/n)/p.br)*Math.ceil(n/p.bc)+Math.floor((i%n)/p.bc),area=box(sel),grid=$('board');
 grid.style.setProperty('--n',n);grid.className='sudoku-board n'+n;grid.replaceChildren();
 for(let i=0;i<n*n;i++){const row=Math.floor(i/n),col=i%n,b=document.createElement('button');let cl='cell';
 if((Math.floor(row/p.br)+Math.floor(col/p.bc))%2)cl+=' box-alt';
 if(row===r0||col===c0||box(i)===area)cl+=' related';
 if(p.puzzle[i])cl+=' given';else if(board[i])cl+=' entry';
 if(sel===i)cl+=' selected';if(err.has(i))cl+=' wrong';if(hintTarget&&hintTarget.index===i)cl+=' has-hint';
 if((col+1)%p.bc===0&&col<n-1)cl+=' border-right';
 if((row+1)%p.br===0&&row<n-1)cl+=' border-bottom';
 b.type='button';b.className=cl;b.dataset.index=i;b.setAttribute('aria-label','第 '+(row+1)+' 排第 '+(col+1)+' 格，'+(board[i]||'空格')+(p.puzzle[i]?'，題目原始數字':''));b.setAttribute('aria-pressed',String(sel===i));
 if(board[i])b.textContent=board[i];else if(Array.isArray(g.notes[i])&&g.notes[i].length){const notes=document.createElement('span');notes.className='tiny-notes';for(let v=1;v<=9;v++){let t=document.createElement('span');t.textContent=g.notes[i].includes(v)?v:'';notes.append(t)}b.append(notes)}
 b.onclick=()=>{sel=i;clearHint();draw()};grid.append(b)}
}
function pad(){const area=$('numberPad'),n=g.p.n;area.style.setProperty('--n',n);area.replaceChildren();for(let v=1;v<=n;v++){const b=document.createElement('button');b.textContent=v;b.setAttribute('aria-label','填入數字 '+v);b.onclick=()=>input(v);area.append(b)}}
function remember(){history.push({board:g.board.slice(),notes:JSON.parse(JSON.stringify(g.notes))});if(history.length>80)history.shift()}
function clearHint(){hintStep=0;hintTarget=null;$('hintBox').classList.add('hidden')}
function input(v,forced=false){if(!g||!$('winBox').classList.contains('hidden'))return;
 const{p,board}=g;if(p.puzzle[sel]){message('深色數字是題目給的，不用修改喔。');return}remember();
 if(noteMode&&!forced){const arr=new Set(g.notes[sel]||[]);arr.has(v)?arr.delete(v):arr.add(v);g.notes[sel]=[...arr].sort();message('已更新候選數字筆記。')}
 else{board[sel]=v;delete g.notes[sel];const conflict=E.conflicts(board,p.n,p.br,p.bc).size;
 message(conflict?'這個數字和同一排、直排或宮格裡的數字重複了，換個數字試試。':'已填入 '+v+'，繼續找找看！',conflict?'warn':'good')}
 clearHint();draw();saveGame();
 if(board.every((x,i)=>x===p.solution[i]))win();else if(board.every(Boolean))message('已填完！但還有位置需要檢查，可以修改或按提示。','warn')
}
function erase(){if(!g||g.p.puzzle[sel]||!$('winBox').classList.contains('hidden'))return;remember();g.board[sel]=0;delete g.notes[sel];clearHint();draw();saveGame();message('擦除成功，可以再想想。')}
function undo(){if(!g||!history.length||!$('winBox').classList.contains('hidden'))return;const x=history.pop();g.board=x.board;g.notes=x.notes;clearHint();draw();saveGame();message('已回到上一步。')}
function hint(){if(!g||!$('winBox').classList.contains('hidden'))return;const h=E.hint(g.board,g.p);if(!h){message('已經沒有空格了。');return}
 if(h.kind==='conflict'||h.kind==='incorrect'){message(h.message,'warn');return}
 if(!hintTarget||hintTarget.index!==h.index){hintStep=0;hintTarget=h}hintStep++;g.hints++;data.totalHints=(data.totalHints||0)+1;sel=h.index;
 const pos='第 '+(Math.floor(h.index/g.p.n)+1)+' 排，第 '+(h.index%g.p.n+1)+' 格。';
 if(hintStep===1)$('hintBox').innerHTML='<strong>💡 第一步：看位置</strong>'+esc(pos)+'看看橫排、直排和小宮格。';
 else if(hintStep===2)$('hintBox').innerHTML='<strong>🔎 第二步：學排除</strong>'+esc(h.kind==='single'?'這格的其他數字都被排除了，所以只能填 '+h.value+'。':h.message)+'<br>這格可能填：'+esc(E.candidates(g.board,g.p.n,g.p.br,g.p.bc,h.index).join('、'));
 else{hintStep=0;sel=h.index;input(h.value,true);message('狐狸小老師示範填入 '+h.value+'。下一格可以自己試試！','good');return}
 $('hintBox').classList.remove('hidden');draw();updateGame();saveGame();speak(hintStep===1?'找找看這一格在哪裡。':'看看其他數字能放在哪裡。')}
function updateGame(){if(!g)return;$('gameProgress').textContent=done(g.l)+'/30 題';$('gameStats').textContent='這一級完成 '+done(g.l)+' 題。這題使用 '+g.hints+' 次提示。';$('skipBtn').textContent=g.mode==='daily'?'下一個每日任務 →':'換一題 →';$('nextBtn').textContent=g.mode==='daily'&&g.step===2?'回每日挑戰':'下一題 →'}
function win(){const k=key(g.l,g.i);if(!data.done[k])data.done[k]={date:dateId(),hints:g.hints};if(g.mode==='daily')data.daily[dailyKey(g.step)]=true;data.current=null;save();$('winBox').classList.remove('hidden');$('hintBox').classList.add('hidden');message('恭喜完成！你自己找到了所有數字！','good');updateGame();speak('太棒了！你完成數獨了！');$('winBox').scrollIntoView({behavior:'smooth',block:'nearest'})}
function next(){if(!g)return;if(g.mode==='daily'){if(g.step===2){home();return}const d=dailyQuestion(g.step+1);start(d.l,d.i,'daily',g.step+1)}
 else start(g.l,(g.i+1)%30,g.mode)}
function home(){stopVoice();g=null;$('game').classList.add('hidden');$('home').classList.remove('hidden');document.querySelector('.hero').classList.remove('hidden');renderHome();window.scrollTo({top:0,behavior:'smooth'})}
function tab(t){activeTab=t;document.querySelectorAll('[data-mode]').forEach(x=>{x.classList.toggle('active',x.dataset.mode===t);x.setAttribute('aria-selected',String(x.dataset.mode===t))});['adventure','free','daily'].forEach(n=>$(n+'Panel').classList.toggle('hidden',t!==n));if(t==='daily')renderDaily()}
function renderDaily(){const area=$('dailyCards');area.replaceChildren();for(let step=0;step<3;step++){const d=dailyQuestion(step),ok=!!data.daily[dailyKey(step)],div=document.createElement('div');div.className='daily-card';div.innerHTML='<div>⭐ '+(step+1)+' / 3</div><strong>'+esc(L[d.l-1].name)+'</strong><span>'+L[d.l-1].n+'×'+L[d.l-1].n+' · '+(ok?'今天完成了！':'動腦思考')+'</span><button class="'+(ok?'secondary':'primary')+'">'+(ok?'再玩一次':'開始挑戰 →')+'</button>';
 div.querySelector('button').onclick=()=>start(d.l,d.i,'daily',step,ok);area.append(div)}}
function renderHome(){const total=Object.keys(data.done).length;$('adventureSummary').textContent='完成 '+total+' / 210 題';const list=$('levelCards');list.replaceChildren();
 for(const l of L){const b=document.createElement('button');b.className='level';b.innerHTML='<span class="level-icon" aria-hidden="true">'+icons[l.id-1]+'</span><span><strong>Lv.'+l.id+' '+esc(l.name)+'</strong><small>'+l.n+'×'+l.n+' · '+esc(l.skill)+'</small><span class="small-progress">⭐ 已完成 '+done(l.id)+'/30 題</span></span>';b.onclick=()=>start(l.id,nextIndex(l.id));list.append(b)}
 const s=(ids)=>ids.reduce((a,id)=>a+done(id),0);
 $('recordBox').innerHTML='<div class="stat-line"><span>完成的數獨</span><strong>'+total+' 題</strong></div><div class="stat-line"><span>4×4 / 6×6 / 9×9</span><strong>'+s([1,2,3])+' / '+s([4,5])+' / '+s([6,7])+'</strong></div><div class="stat-line"><span>使用提示</span><strong>'+(data.totalHints||0)+' 次</strong></div>';
 tab(activeTab)}
for(const l of L){const o=document.createElement('option');o.value=l.id;o.textContent='Lv.'+l.id+' '+l.name+' · '+l.n+'×'+l.n;$('freeLevel').append(o)}
for(let i=0;i<30;i++){const o=document.createElement('option');o.value=i;o.textContent='第 '+(i+1)+' 題';$('freeIndex').append(o)}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>tab(b.dataset.mode));$('freeStart').onclick=()=>start(Number($('freeLevel').value),Number($('freeIndex').value),'free');
$('gameBack').onclick=home;$('undoBtn').onclick=undo;$('eraseBtn').onclick=erase;$('hintBtn').onclick=hint;$('skipBtn').onclick=next;$('nextBtn').onclick=next;
$('restartBtn').onclick=()=>{if(confirm('要重新開始這一題嗎？'))start(g.l,g.i,g.mode,g.step,true)};
$('replayBtn').onclick=()=>start(g.l,g.i,g.mode,g.step,true);
$('bopoToggle').onclick=()=>{data.settings.bopo=!data.settings.bopo;save();if(g){$('goalText').innerHTML=marked(goals[g.l-1]);$('ruleText').innerHTML=marked(rules[g.l-1])}updateBopo()};
$('voiceToggle').onclick=()=>{data.settings.voice=!data.settings.voice;save();$('voiceToggle').textContent='語音 '+(data.settings.voice?'開':'關');$('voiceToggle').setAttribute('aria-pressed',String(data.settings.voice));if(!data.settings.voice)stopVoice();else if(g)speak(goals[g.l-1])};
$('readInstruction').onclick=()=>{if(g){data.settings.voice=true;save();$('voiceToggle').textContent='語音 開';$('voiceToggle').setAttribute('aria-pressed','true');speak(goals[g.l-1]+' '+rules[g.l-1])}};
$('noteMode').onchange=e=>{noteMode=e.target.checked;message(noteMode?'筆記模式：選數字會留下候選筆記。':'填入模式：選數字就能填入格子。')};
$('zoomBtn').onclick=()=>{const frame=$('boardFrame');frame.classList.toggle('zoomed');$('zoomBtn').textContent=frame.classList.contains('zoomed')?'🔍 縮小棋盤':'🔎 放大棋盤'};
$('resetRecord').onclick=()=>{if(!confirm('確定清除這個瀏覽器的全部數獨紀錄嗎？無法復原。'))return;data=fresh();save();renderHome()};
window.addEventListener('keydown',e=>{if(!g||e.altKey||e.metaKey||e.ctrlKey||['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName))return;
 if(/^[1-9]$/.test(e.key)&&Number(e.key)<=g.p.n){input(Number(e.key));e.preventDefault();return}if(e.key==='Backspace'||e.key==='Delete'){erase();e.preventDefault();return}
 const n=g.p.n,r=Math.floor(sel/n),c=sel%n;let next=sel;if(e.key==='ArrowUp')next=Math.max(0,r-1)*n+c;else if(e.key==='ArrowDown')next=Math.min(n-1,r+1)*n+c;else if(e.key==='ArrowLeft')next=r*n+Math.max(0,c-1);else if(e.key==='ArrowRight')next=r*n+Math.min(n-1,c+1);else return;sel=next;clearHint();draw();e.preventDefault()});
$('voiceToggle').textContent='語音 '+(data.settings.voice?'開':'關');$('voiceToggle').setAttribute('aria-pressed',String(data.settings.voice));
updateBopo();renderHome();
if(data.current&&L[data.current.l-1]&&Number.isInteger(data.current.i)&&data.current.i>=0&&data.current.i<30){const s=data.current;start(s.l,s.i,s.mode,s.step||0)}
})();