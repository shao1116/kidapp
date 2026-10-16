/** Regression: node tests/starbud-v03-smoke.cjs */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const dir=path.join(__dirname,'../apps/starbud-adventure');
const get=(n)=>fs.readFileSync(path.join(dir,n),'utf8');
const art=get('world-art-v03.js'),ui=get('ui-v03.js'),game=get('game.js'),html=get('index.html'),css=get('v03-style.css');
for(const js of [art,ui,game])new vm.Script(js,{filename:'starbud-v03'});
const env={window:{},document:{getElementById:()=>null}};
vm.runInNewContext(art,env);vm.runInNewContext(ui,env);
const a=env.window.STARBUD_ART,u=env.window.STARBUD_UI;
assert(a&&u,'Game modules not registered');
for(const bridge of [false,true])for(const garden of [false,true])for(const gpu of [false,true]){
 const svg=a.scene(bridge,garden,!gpu);
 assert(svg.includes('v03-rock')&&svg.includes('v03-leafA'));
 const tags=[],rx=/<([^>]+)>/g;let m;
 while((m=rx.exec(svg))){
 const raw=m[1].trim();if(raw.startsWith('/'))assert.equal(tags.pop(),raw.slice(1).split(/\s/)[0]);
 else if(!raw.endsWith('/')&&!raw.startsWith('!')&&!raw.startsWith('?'))tags.push(raw.split(/[\s>]/)[0]);
 }
 assert.deepEqual(tags,[],'Malformed SVG scenery');
 assert(svg.length>24000,'Illustration looks incomplete');
}
for(const id of ['rabbit','maker','fox','house','workbench','cave','chest','garden','bridge']){
 assert(a.entity({id},{flags:{bridge:true,chest:true,garden:true}}),'Missing original sprite '+id);
}
for(const res of ['wood','rope','crystal','seed'])assert(a.entity({res},{flags:{}}));
for(const avatar of [0,1,2])assert.match(a.player({avatar,hat:true}),/v03-player/);
const objs=[{id:'rabbit',x:3,y:3},{id:'bridge',x:6,y:3},{id:'fox',x:9,y:3}];
const state={x:2,y:3,flags:{rabbitTalk:false,bridge:false,foxTalk:false,lantern:false,treasure:false,garden:false},bag:{wood:0,rope:0,crystal:0,seed:0},collected:[]};
assert.equal(u.goal(state,objs)?.id,'rabbit');
state.flags.rabbitTalk=true;state.bag.wood=2;state.bag.rope=1;
assert.equal(u.goal(state,objs)?.id,'bridge');
state.flags.bridge=true;assert.equal(u.goal(state,objs)?.id,'fox');
assert.match(u.svgMap(state,objs),/<svg|<rect/);
assert.match(game,/getBoundingClientRect\(\),ratio/);
assert.match(game,/sceneryCache=new Map/);
assert.match(game,/kidapp-starbud-adventure-v1/);
for(const text of ['id="world"','id="miniMapBtn"','id="mapDialog"','id="bopoBtn"','id="objective"','id="largeMap"'])assert(html.includes(text),text);
for(const term of ['world-art-v03.js?v=0300','ui-v03.js?v=0300','game.js?v=0300','v03-style.css?v=0300'])assert(html.includes(term),term);
for(const term of ['min-width:1060px','min-width:601px','max-width:600px','bopo-on','.mini-map','.v03-map-dialog'])assert(css.includes(term),term);
const index=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
assert(index.includes('apps/starbud-adventure/'));
console.log('Starbud v0.3 cross-device RPG smoke checks passed.');
