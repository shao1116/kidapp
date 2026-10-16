/** Starbud WebGL/SVG compatibility smoke check: node tests/starbud-webgl-v02-smoke.cjs */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..','apps','starbud-adventure');
const src=fs.readFileSync(path.join(root,'world-fx.js'),'utf8');
const game=fs.readFileSync(path.join(root,'game.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'world-fx.css'),'utf8');
new vm.Script(src);new vm.Script(game);
assert.match(html,/world-fx\.js\?v=0200/);
assert.match(html,/world-fx\.css\?v=0200/);
assert.match(html,/id="fxToggle"/);
assert.match(game,/mobile\?270:540/);
assert.match(game,/window\.STARBUD_FX\.sync/);
assert.match(game,/kidapp-starbud-adventure-v1/);
assert.match(css,/#worldFx\[hidden\]/);
let initCount=0,compiled=0,raf=0;
const gl=new Proxy({createShader:()=>({}),createProgram:()=>({}),createVertexArray:()=>({}),createBuffer:()=>({}),
getShaderParameter:()=>true,getProgramParameter:()=>true,getUniformLocation:()=>1,
shaderSource:()=>compiled++},{get:(o,k)=>o[k]||(()=>{})});
function boot(webgl){
 const canvas={hidden:false,getContext:()=>webgl?gl:null,setAttribute(){},addEventListener(){}};
 const frame={offsetParent:{},insertBefore(){initCount++}};
 const world={},document={getElementById:id=>id==='world'?world:id==='worldFrame'?frame:null,createElement:()=>canvas};
 const window={addEventListener(){},matchMedia:()=>({matches:false})};
 vm.runInNewContext(src,{window,document,navigator:{hardwareConcurrency:4},innerWidth:390,devicePixelRatio:1,requestAnimationFrame:()=>++raf,cancelAnimationFrame(){},console:{warn(){}}});
 return window.STARBUD_FX;
}
const fallback=boot(false);
assert.equal(fallback.active,false);
assert.equal(fallback.diagnostics().renderer,'SVG fallback');
const fx=boot(true);
assert.equal(fx.active,true);assert.ok(initCount>=1);assert.equal(compiled,4);
for(const [bridge,garden] of [[false,false],[true,false],[true,true]]){
 const svg=fx.overlay(bridge,garden);
 assert.match(svg,/<defs>/);assert.match(svg,/class="fx-tree"/);assert.match(svg,/class="fx-canopy"/);
 const st=[];let tags=0;
 for(const match of svg.matchAll(/<([^>]+)>/g)){
  const s=match[1].trim();if(s.startsWith('/'))assert.equal(st.pop(),s.slice(1).split(/\s/)[0]);
  else if(!s.startsWith('!')&&!s.endsWith('/'))st.push(s.split(/\s/)[0]);tags++;
 }
 assert.deepEqual(st,[]);assert.ok(tags>300);
}
for(const id of ['bridge','rabbit','fox','maker','chest','cave','garden','house','workbench']){
 assert.ok(fx.entityArt({id},{flags:{}})?.includes('<'),'Missing illustration: '+id);
}
for(const res of ['wood','rope','crystal','seed'])assert.ok(fx.entityArt({id:'test',res},{flags:{}}));
assert.match(fx.playerArt({avatar:1,hat:true}),/fx-player/);
fx.sync({left:200,top:50,width:450,height:270,bridge:true,garden:true});
assert.equal(fx.setEnabled(false),false);
assert.equal(fx.setEnabled(true),true);
console.log('Starbud WebGL v0.2 regression passed (mock GL + SVG structure + mobile hooks).');
