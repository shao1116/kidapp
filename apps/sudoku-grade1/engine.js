/* KidApp Sudoku v1.0 — deterministic, offline, logic-checked puzzle engine. */
(()=>{'use strict';
const LEVELS=[
 {id:1,n:4,br:2,bc:2,name:'數字小學徒',clues:12,skill:'找出橫排少的數字'},
 {id:2,n:4,br:2,bc:2,name:'數字觀察家',clues:9,skill:'一起檢查橫排與直排'},
 {id:3,n:4,br:2,bc:2,name:'數字小偵探',clues:7,skill:'觀察小宮格，交叉排除'},
 {id:4,n:6,br:2,bc:3,name:'數字探險家',clues:27,skill:'從 1 到 6 的數字推理'},
 {id:5,n:6,br:2,bc:3,name:'邏輯小高手',clues:22,skill:'找出唯一能填的地方'},
 {id:6,n:9,br:3,bc:3,name:'數獨勇者',clues:45,skill:'學習經典 9×9 數獨'},
 {id:7,n:9,br:3,bc:3,name:'數獨大師',clues:36,skill:'連續推理，挑戰大棋盤'}
];
function rand(seed){let s=(seed>>>0)||1;return()=>{s^=s<<13;s^=s>>>17;s^=s<<5;return(s>>>0)/4294967296}}
function shuffle(a,r){for(let i=a.length-1;i>0;i--){let j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function units(n,br,bc){const result=[];for(let r=0;r<n;r++)result.push(Array.from({length:n},(_,c)=>r*n+c));for(let c=0;c<n;c++)result.push(Array.from({length:n},(_,r)=>r*n+c));for(let r=0;r<n;r+=br)for(let c=0;c<n;c+=bc){let u=[];for(let y=0;y<br;y++)for(let x=0;x<bc;x++)u.push((r+y)*n+c+x);result.push(u)}return result}
function candidates(a,n,br,bc,pos){if(a[pos])return [];const row=Math.floor(pos/n),col=pos%n,blocked=new Set();for(let k=0;k<n;k++){blocked.add(a[row*n+k]);blocked.add(a[k*n+col])}for(let y=Math.floor(row/br)*br;y<Math.floor(row/br)*br+br;y++)for(let x=Math.floor(col/bc)*bc;x<Math.floor(col/bc)*bc+bc;x++)blocked.add(a[y*n+x]);return Array.from({length:n},(_,j)=>j+1).filter(v=>!blocked.has(v))}
function conflicts(a,n,br,bc){const bad=new Set();for(const u of units(n,br,bc)){let seen=new Map();for(const i of u){const v=a[i];if(!v)continue;if(seen.has(v)){bad.add(i);bad.add(seen.get(v))}else seen.set(v,i)}}return bad}
function countSolutions(board,n,br,bc,limit=2){const a=board.slice();let count=0;function go(){if(count>=limit)return;let best=-1,opts;for(let i=0;i<a.length;i++)if(!a[i]){const p=candidates(a,n,br,bc,i);if(!p.length)return;if(!opts||p.length<opts.length){opts=p;best=i;if(p.length===1)break}}if(best===-1){count++;return}for(const v of opts){a[best]=v;go();a[best]=0;if(count>=limit)return}}if(conflicts(a,n,br,bc).size)return 0;go();return count}
function nextLogical(a,n,br,bc){for(let i=0;i<a.length;i++)if(!a[i]){const opts=candidates(a,n,br,bc,i);if(opts.length===1)return{index:i,value:opts[0],kind:'single',unit:[...units(n,br,bc).find(u=>u.includes(i))]};if(opts.length===0)return null}
 const all=units(n,br,bc);
 for(let j=0;j<all.length;j++){const u=all[j];for(let value=1;value<=n;value++){if(u.some(i=>a[i]===value))continue;const poss=u.filter(i=>!a[i]&&candidates(a,n,br,bc,i).includes(value));if(poss.length===1)return{index:poss[0],value,kind:'hidden',unit:u,unitType:j<n?'橫排':j<2*n?'直排':'小宮格'}}}return null}
function solveLogical(board,n,br,bc){const a=board.slice();let hidden=0;for(let k=0;k<a.length;k++){const step=nextLogical(a,n,br,bc);if(!step)break;a[step.index]=step.value;if(step.kind==='hidden')hidden++}return{ok:a.every(x=>x!==0)&&conflicts(a,n,br,bc).size===0,hidden,board:a}}
function solutionFor(level,idx,variant=0){const {n,br,bc}=level;const r=rand(0x65a4b92^(level.id*73856093)^((idx+1)*19349663)^(variant*83492791));let symbols=shuffle(Array.from({length:n},(_,i)=>i+1),r);
 const rowGroups=shuffle(Array.from({length:n/br},(_,i)=>i),r);
 const colGroups=shuffle(Array.from({length:n/bc},(_,i)=>i),r);
 const rows=rowGroups.flatMap(g=>shuffle(Array.from({length:br},(_,k)=>g*br+k),r));
 const cols=colGroups.flatMap(g=>shuffle(Array.from({length:bc},(_,k)=>g*bc+k),r));
 const board=Array.from({length:n*n},(_,i)=>symbols[(rows[Math.floor(i/n)]*bc+Math.floor(rows[Math.floor(i/n)]/br)+cols[i%n])%n]);
 return board
}
function generate(levelId,index){const level=LEVELS[levelId-1];if(!level||!Number.isInteger(index)||index<0||index>=30)throw Error('Invalid puzzle');const {n,br,bc}=level;let best=null;
 for(let variant=0;variant<(levelId>=5?3:2);variant++){
  const solution=solutionFor(level,index,variant),puzzle=solution.slice();
  const r=rand(0x7fab1d^(levelId*100003)^((index+1)*2654435761)^(variant*641));
  let order=shuffle(Array.from({length:n*n},(_,i)=>i),r);
  let left=n*n;
  for(let pass=0;pass<2&&left>level.clues;pass++){
   if(pass)order=shuffle(order.slice(),r);
   for(const pos of order){if(left<=level.clues)break;if(!puzzle[pos])continue;const keep=puzzle[pos];puzzle[pos]=0;
    if(countSolutions(puzzle,n,br,bc,2)!==1||!solveLogical(puzzle,n,br,bc).ok)puzzle[pos]=keep;
    else left--
   }
  }
  const hidden=solveLogical(puzzle,n,br,bc).hidden;
  const score=(levelId===5||levelId===7)?(hidden>0?1000:0)+(n*n-left):n*n-left;
  if(!best||score>best.score)best={level:levelId,index,n,br,bc,puzzle,solution,clues:left,hidden,score};
  if(left<=level.clues&&(levelId!==5&&levelId!==7||hidden>0))break;
 }
 return best
}
function hint(board,p){if(conflicts(board,p.n,p.br,p.bc).size)return{kind:'conflict',message:'有數字重複了，先檢查亮起來的格子。'};
 if(board.some((v,i)=>v&&v!==p.solution[i]))return{kind:'incorrect',message:'有一格的數字需要再想一想，可以用擦除重新試。'};
 const step=nextLogical(board,p.n,p.br,p.bc);if(!step)return null;
 const row=Math.floor(step.index/p.n)+1,col=step.index%p.n+1;
 return{...step,message:step.kind==='single'?('第 '+row+' 排、第 '+col+' 格，看看橫排、直排與宮格已經有的數字。'):('在這個'+step.unitType+'裡，數字 '+step.value+' 只有一個位置可以填。')}
}
window.SudokuEngine={LEVELS,generate,candidates,conflicts,countSolutions,solveLogical,hint,units};
})();