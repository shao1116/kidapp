/** Starbud 0.5.1: Taiwanese vertical bopomofo tones + coherent SVG characters.
 * Run with: node tests/starbud-v051-art-bopo-smoke.cjs
 */
'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const dir=path.resolve(__dirname,'../apps/starbud-adventure');
const file=(name)=>fs.readFileSync(path.join(dir,name),'utf8');
const js=file('game.js'),css=file('v051.css'),html=file('index.html'),art=file('v051-art.js');
new vm.Script(js,{filename:'game.js'});new vm.Script(art,{filename:'v051-art.js'});
assert.match(js,/class="zy-body"/,'phonetics have syllable body');
assert.match(js,/tone-second/);assert.match(js,/tone-third/);assert.match(js,/tone-fourth/);
assert.match(js,/STARBUD_PORTRAIT/);
assert.match(css,/\.zy > \.tone/);
assert.match(css,/position:static!important/);
assert.match(css,/grid-template-columns:\.91em \.43em/);
assert.match(html,/v051\.css\?v=0510/);assert.match(html,/v051-art\.js\?v=0510/);
assert.match(js,/kidapp-starbud-adventure-v1/);
assert.match(js,/showBridgePuzzle/);assert.match(js,/caveAction/);assert.match(js,/gardenAction/);
assert.ok(html.indexOf('world-art-v03.js')<html.indexOf('v051-art.js'));
assert.ok(html.indexOf('v051-art.js')<html.indexOf('game.js?v=0510'));
const env={window:{STARBUD_ART:{entity:()=>'<g></g>',player:()=>'<g></g>'}}};
vm.runInNewContext(art,env);
const spr=env.window.STARBUD_PORTRAIT;
assert.equal(spr.fromTitle('兔子波波'),'rabbit');
assert.equal(spr.fromTitle('狐狸米米'),'fox');
assert.equal(spr.fromTitle('工程師木木'),'maker');
for(const type of ['rabbit','fox','maker','player']){
 const svg=spr.portrait(type,{avatar:1,hat:true});
 const tags=[];
 for(const m of svg.matchAll(/<([^>]+)>/g)){
  const t=m[1].trim(),name=t.split(/\s/)[0];
  if(name.startsWith('/'))assert.equal(tags.pop(),name.slice(1),'SVG closing tags');
  else if(!t.endsWith('/'))tags.push(name);
 }
 assert.equal(tags.length,0,'Balanced illustration SVG: '+type);
 assert.ok(svg.length>1000,'Substantial art complexity');
}
for(let i=0;i<3;i++)assert.match(spr.player({avatar:i,hat:i===1}),/v051-player/);
for(const id of ['rabbit','maker','fox']){
 assert.match(env.window.STARBUD_ART.entity({id},{flags:{}}),/v051-(rabbit|maker|fox)/);
}
assert.ok(!/data:|https?:\/\//.test(art),'Art file uses no external images');
console.log('Starbud v0.5.1 phonetic tones and original SVG characters: PASS');
