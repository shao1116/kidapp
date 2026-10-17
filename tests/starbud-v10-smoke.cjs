/** Starbud Islands v1.0: run with node tests/starbud-v10-smoke.cjs. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const dir=path.resolve(__dirname,'../apps/starbud-adventure');
const read=f=>fs.readFileSync(path.join(dir,f),'utf8');
const scripts=['v10-data.js','v10-core.js','v10-world.js','v10-home.js','game.js'];
for(const s of scripts)new vm.Script(read(s),{filename:s});
const html=read('index.html'),css=read('v10.css'),game=read('game.js');
const win={
 STARBUD_ART:{entity:()=>'<g/>',player:()=>'<g/>'},
 STARBUD_UI:{goal:()=>null,paint:()=>{}},
 STARBUD_V05:{
 goods:{plant:{kind:'decor',name:'綠葉盆栽',icon:'🪴',cost:12}},
 normalize:S=>(S.v05 ||= {decor:[],owned:{},equipped:{}}),
 purchase(S,id){if(S.coins<12)return {ok:false};S.coins-=12;S.v05.decor.push(id);return {ok:true}}
 }
};
const elements=[];
const doc={
 getElementById:()=>null,
 querySelectorAll(selector){
  if(selector==='[data-v10-slot]')return elements;
  return [];
 }
};
const ctxVm={window:win,document:doc};
for(const s of scripts.filter(s=>s!=='game.js'))vm.runInNewContext(read(s),ctxVm,{filename:s});
const v=win.STARBUD_V10_CORE,world=win.STARBUD_V10_WORLD,home=win.STARBUD_V10_HOME;
assert.equal(v.chapters.length,18);assert.equal(v.side.length,20);assert.equal(v.objects.length,17);
assert.equal(typeof home.panel,'function');
const state={
 version:1,name:'原有玩家',x:3,y:3,avatar:1,role:2,coins:94,xp:195,hat:true,
 flags:{rabbitTalk:true,bridge:true,foxTalk:true,lantern:true,treasure:true,garden:true,chest:true},
 bag:{wood:2,rope:1,crystal:1,seed:1,shell:0},collected:['treeA'],awards:['rabbit'],
 v05:{decor:['plant'],owned:{boots:true},equipped:{boots:true}}
};
const q=[];
const ctx={S:state,
 say:s=>s,esc:s=>s,
 save(){q.push('save')},render(){q.push('render')},
 dialogText(title,message,buttons=[]){q.push('dialog:'+title);ctx.buttons=buttons;ctx.message=message},
 openDialog(title,message,buttons=[]){q.push('open:'+title);ctx.buttons=buttons;ctx.message=message}
};
v.normalize(state);
assert.equal(state.version,1);assert.equal(state.v05.decor[0],'plant');
assert.equal(v.step(state),8);
v.action(v.objects.find(o=>o.id==='valleyGate'),state,ctx);
assert.equal(v.step(state),9);assert.equal(state.v10.island,'starbud');
v.action(v.objects.find(o=>o.id==='valleyGate'),state,ctx);
assert.equal(state.v10.island,'creek');assert.equal(state.x,1);assert.equal(state.y,3);
assert.equal(v.goal(state,v.objects).id,'otter');
v.action(v.objects.find(o=>o.id==='otter'),state,ctx);
assert.equal(v.step(state),10);
for(const id of ['pebble1','pebble2','pebble3'])v.action(v.objects.find(o=>o.id===id),state,ctx);
assert.equal(v.step(state),11);assert.equal(state.v10.stones.length,3);
assert.equal(state.v10.progress.q10,true,'three pebble reward');
v.action(v.objects.find(o=>o.id==='sluice'),state,ctx);
assert.equal(ctx.buttons[0].label,'上游閘門');
ctx.buttons[0].action();
assert.equal(ctx.buttons[0].label,'繼續挑戰');
ctx.buttons[0].action();
assert.equal(ctx.buttons[1].label,'打開田地的閘門');
ctx.buttons[1].action();
assert.equal(v.step(state),12);
const before=state.coins;
v.sideBoard(ctx,state);assert.equal(ctx.buttons.length,11,'ten side events + close');
ctx.buttons[0].action();assert.equal(ctx.buttons[0].label,'乾淨飲用水');
ctx.buttons[0].action();
assert.equal(state.v10.side.s11,true);assert.equal(state.coins,before+5);
v.sideBoard(ctx,state);ctx.buttons[0].action();
assert.equal(state.coins,before+5,'no repeat side reward');
home.petDialog(ctx,state);assert.equal(ctx.buttons.length,4);
ctx.buttons[0].action();assert.equal(state.v10.pet.type,'cat');
assert.match(world.companion(state),/🐱/);
const scene=world.creek(state),river=world.art(v.objects.find(o=>o.id==='otter'),state);
assert.ok(scene.length>30000,'creek terrain is substantial');
assert.match(river,/v10-npc/);
for(const svg of [scene,river]){
 const stack=[];for(const m of svg.matchAll(/<([^>]+)>/g)){
  const tag=m[1].trim(),name=tag.split(/\s/)[0];
  if(name.startsWith('/'))assert.equal(stack.pop(),name.slice(1),'balanced SVG tags');
  else if(!tag.endsWith('/'))stack.push(name);
 }assert.deepEqual(stack,[],'SVG fully closed');
}
home.home(ctx,state);assert.match(ctx.message,/v10-home-slot/);
assert.match(ctx.message,/已收藏家具/);
assert.equal(win.STARBUD_UI.goal(state,v.objects).id,'driftwood');
assert.match(world.minimap(state,v.objects,true),/circle/);
assert.equal(state.name,'原有玩家');
assert.equal(state.flags.bridge,true);
assert.equal(state.v05.owned.boots,true);
assert.ok(q.some(x=>x==='save'));
assert.match(game,/kidapp-starbud-adventure-v1/);
assert.match(game,/STARBUD_V10_CORE\.quest\(S\)/);
assert.match(game,/islandObjects\(\)/);
assert.match(game,/WORLD\.creek\(S\)/);
for(const key of ['showBridgePuzzle','caveAction','gardenAction'])assert(game.includes(key),'legacy puzzle: '+key);
for(const name of ['v10-data.js','v10-core.js','v10-world.js','v10-home.js','game.js?v=1000'])assert(html.includes(name));
assert(html.indexOf('v10-data.js')<html.indexOf('v10-core.js'));
assert(html.indexOf('v10-core.js')<html.indexOf('v10-world.js'));
assert(html.indexOf('v10-world.js')<html.indexOf('v10-home.js'));
assert(html.indexOf('v10-home.js')<html.indexOf('game.js?v=1000'));
assert(css.includes('@media(max-width:600px)')&&css.includes('@media(min-width:601px)'));
console.log('Starbud v1.0 PASS: 18 quests, 20 side events, legacy save, island navigation, world SVG, puzzles, companion, home, responsive assets.');
