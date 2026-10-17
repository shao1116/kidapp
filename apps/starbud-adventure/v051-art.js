(function installArt(){
'use strict';
const old=window.STARBUD_ART;if(!old)return;
const path=(d,fill,stroke='#75685e',w=1.7)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const ell=(x,y,rx,ry,fill,stroke='none',w=1)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
const circ=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
const spark=(x,y,col='#fff1ae')=>`<g transform="translate(${x} ${y})">${path('M0-6Q2-2 6 0Q2 2 0 6Q-2 2-6 0Q-2-2 0-6Z',col,'none')}</g>`;
const shadow=ell(0,22,25,6,'#365a5056');
const eyes=(y)=>ell(-10,y,2.9,4.0,'#41504c')+ell(10,y,2.9,4,'#41504c')+circ(-11,y-1.5,1,'#fff')+circ(9,y-1.5,1,'#fff');
function rabbit(){
return `<g class="v051-character v051-rabbit">${shadow}
${ell(-12,15,10,6,'#e4ddd8','#cdbeb9')}${ell(12,15,10,6,'#e4ddd8','#cdbeb9')}
${ell(0,4,22,19,'#fff4e9','#dac9bb',1.7)}
${path('M-20-27Q-34-73-20-77Q-6-77-6-29Z','#fff5ea','#c0ada7',2)}
${path('M7-27Q6-76 19-75Q33-70 18-26Z','#fff5ea','#c0ada7',2)}
${path('M-19-36Q-27-70-19-69Q-11-68-13-36Z','#e9bbc3','none')}
${path('M14-36Q11-68 19-67Q26-63 16-35Z','#e9bbc3','none')}
${path('M-26-18Q-27-44 1-47Q28-44 27-18Q30 5 9 12Q-11 18-24 2Z','#fff9ee','#cdb6ae',1.7)}
${ell(0,-2,16,13,'#fffdf4')}${ell(-17,-11,4,2.8,'#f1b4b7')}${ell(17,-11,4,2.8,'#f1b4b7')}
${eyes(-23)}
${path('M-4-10Q0-13 4-10Q0-5-4-10Z','#bd7b81','none')}${path('M0-8V-4M0-4Q-5 1-9-4M0-4Q5 1 9-4','none','#998078',1.5)}
${path('M-17 10Q0 19 17 10L14 23Q0 26-14 20Z','#83c5b2','#65a394',1.4)}
${path('M12 16Q22 20 18 31L9 25Z','#72b5a4','#6b9b8d',1.2)}
${path('M-15 10L12 21','none','#cdb18a',2.6)}
${path('M10 17L23 15L25 27L11 28Z','#e9c990','#ad916d',1.4)}${circ(18,21,2,'#fef4d0')}
${spark(-31,-41)}</g>`;
}
function fox(){
return `<g class="v051-character v051-fox">${shadow}
${path('M13 8Q39-3 33-29Q31-43 18-47Q26-22 7-13Z','#e99a49','#9e7157',2)}
${path('M32-29Q36-37 27-44L23-33Z','#fff0df','none')}
${path('M-23-6Q0-17 23-6L22 16Q2 25-23 16Z','#f4b16c','#9d694f',2)}
${path('M-21-3L-26 13L-5 22L-2-4Z','#7ab6a0','#568d7d',1.6)}
${ell(-11,17,9,6,'#bd7951')}${ell(12,17,9,6,'#bd7951')}
${path('M-28-22L-26-65L-8-42H9L26-65L29-22Z','#e58f46','#a46d4e',2)}
${path('M-23-52L-19-34L-11-43Z','#fbc8c6','none')}${path('M22-52L18-34L11-43Z','#fbc8c6','none')}
${path('M-26-26Q-23-48 0-49Q24-47 27-25Q29-5 14 8Q0 17-16 7Q-30-4-26-26Z','#f7ad60','#a56c4f',1.9)}
${path('M-23-14Q-16-8-8-8L0-5L8-8Q18-12 23-14Q22 9 0 12Q-22 12-23-14Z','#fff0dd','#e0c4a8',1.3)}
${ell(-16,-12,4,2.8,'#efb0a6')}${ell(16,-12,4,2.8,'#efb0a6')}${eyes(-24)}
${path('M-4-9Q0-13 4-9L0-5Z','#5b4c47','none')}
${path('M0-5Q-5 0-9-4M0-5Q5 0 9-4','none','#926f5c',1.5)}
${path('M-19 7Q0 15 19 7L16 19Q0 24-15 19Z','#a7d2bf','#658f86',1.6)}
${path('M16 15L21 29L10 25Z','#87b9a9','#658f86',1.3)}
${path('M-6 9L16 24','none','#a9755a',3)}
${path('M12 19L26 18L27 31L11 30Z','#d4a274','#987453',1.4)}
${spark(30,-47,'#ffebbb')}</g>`;
}
function maker(){
return `<g class="v051-character v051-maker">${shadow}
${path('M15 4Q38 8 33 25Q18 31 7 13Z','#b88a6a','#8d705b',2)}
${path('M-24-5Q0-19 24-5L25 15Q8 26-22 16Z','#77aeb5','#557e86',2)}
${ell(-12,18,10,6,'#a57e60')}${ell(13,18,10,6,'#a57e60')}
${path('M-19 5Q0 10 19 5L20 14Q0 18-18 14Z','#b88c62','#8d684d',1.6)}${circ(0,11,3,'#f3ce82')}
${circ(-24,-26,11,'#be9577')}${circ(24,-26,11,'#be9577')}${circ(-24,-26,5,'#e6b8a7')}${circ(24,-26,5,'#e6b8a7')}
${ell(0,-24,27,23,'#bb9477','#8f705c',2)}
${ell(0,-8,18,12,'#ead0ae','#bea186',1)}
${ell(-17,-15,4.4,2.7,'#e2a39c')}${ell(17,-15,4.4,2.7,'#e2a39c')}
${eyes(-25)}
${path('M-4-14Q0-19 4-14L0-10Z','#655249','none')}
${path('M-6-5Q0-1 6-5','none','#98745e',1.6)}
${path('M-26-37Q-23-65 0-65Q23-65 26-37Z','#f0c96a','#b48648',2)}
${path('M-29-38Q0-46 29-38L31-33Q0-29-31-33Z','#f2c55c','#a17846',2)}
${path('M0-62V-42','none','#ffebae',3)}
${path('M-17-44Q-8-49-1-45M3-45Q11-50 18-44','none','#a6dce1',3)}
${path('M19 3L31-12M27-12L34-20M27-12L22-22','none','#748c90',5)}
${circ(20,5,5,'#bb9578')}${spark(-32,-43)}</g>`;
}
function player(S={}){
const i=S.avatar||0;const skin=['#f7cba7','#f5bea3','#bf9077'][i]||'#f7cba7';
const hair=['#584a41','#765143','#4c4350'][i]||'#584a41';
const shirt=['#71b69b','#e19db7','#83a4d0'][i]||'#71b69b';
const hairline=i===1?path('M-22-30Q-26-50 0-51Q23-49 23-31Q6-41-2-35Q-11-45-22-30Z',hair,'none')
:i===2?path('M-23-33Q-22-50-8-53Q10-56 22-36Q4-43-6-36Z',hair,'none')
:path('M-23-32Q-22-48-4-49Q15-51 22-33Q10-40-2-37Q-13-40-23-32Z',hair,'none');
const cap=i===0?path('M-25-43Q-18-60 0-60Q20-59 26-43L29-37Q0-33-29-37Z','#85bc91','#619b85',1.8)+path('M-17-43H16','none','#e8f4c7',2)
:i===1?path('M13-40L24-55L30-39L24-33Z','#f2d088','#b59475',1.3)+circ(25,-48,4,'#fff6ce')
:path('M-25-43Q-15-58 6-58Q20-56 25-45L27-39H-27Z','#799fc9','#607f9d',1.8)+circ(15,-47,3.5,'#f7e59c');
return `<g class="v051-character v051-player">${shadow}
${path('M-14 7L-14 20L-4 22L-3 10Z','#6e7881','#556570',1.7)}
${path('M8 10L9 21L20 21L17 7Z','#6e7881','#556570',1.7)}
${ell(-12,23,9,4,'#56636b')}${ell(16,23,9,4,'#56636b')}
${path('M-18-11Q-32-8-29 13L-17 14Z','#c7a270','#9e7d55',1.4)}
${path('M-17-9Q0-19 19-9L18 14Q0 18-18 14Z',shirt,'#5e8a84',1.8)}
${path('M-17 10Q0 15 17 10','none','#fce7ac',2.5)}
${path('M-15-10L-22-2M15-10L23-2','none','#f4eac6',3.5)}
${path('M-21-6L-30 7M21-6L30 7','none',skin,7)}${circ(-30,7,4,skin)}${circ(30,7,4,skin)}
${path('M-2-2L2 2L0 8L-4 2Z','#ffdf92','none')}
${ell(0,-27,23,23,skin,'#bf9982',1.5)}
${hairline}${ell(-16,-18,4.4,2.5,'#eda99f')}${ell(16,-18,4.4,2.5,'#eda99f')}
${eyes(-28)}${path('M-5-16Q0-12 5-16','none','#9f7470',1.6)}
${cap}${S.hat?path('M-24-49Q-16-68 0-68Q17-67 24-49L30-43Q0-39-30-43Z','#e5c68a','#9b7b58',2)+path('M-20-47H20','none','#8fba96',3):''}
${spark(-32,-51,'#ffecbd')}</g>`;
}
const prev=old.entity.bind(old);
old.entity=(o,S)=>o.id==='rabbit'?rabbit():o.id==='fox'?fox():o.id==='maker'?maker():prev(o,S);
old.player=player;
function portrait(kind,S){const graphic=kind==='rabbit'?rabbit():kind==='fox'?fox():kind==='maker'?maker():player(S);
return `<div class="v051-dialog-portrait" aria-hidden="true"><svg viewBox="-45 -84 90 120" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation">${graphic}</svg><span class="v051-portrait-sparkle">✦</span></div>`;}
window.STARBUD_PORTRAIT={rabbit,fox,maker,player,portrait,fromTitle:s=>/兔子|波波/.test(s)?'rabbit':/狐狸|米米/.test(s)?'fox':/工程師|木木/.test(s)?'maker':null};
})();