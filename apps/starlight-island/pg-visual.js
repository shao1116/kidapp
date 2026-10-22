/* Leaf Kingdom v1.1 refined illustrated art layer. All gameplay mechanics remain unchanged. */
(() => {
  const art = typeof PG_ART_IMAGE !== 'undefined' ? PG_ART_IMAGE : null;
  const frames = typeof PG_ART_FRAMES !== 'undefined' ? PG_ART_FRAMES : {};
  const sizes = { sunflower: 103, cactus: 108, sundew: 102, flytrap: 110, mint: 106, alyssum: 104 };
  const species = { c: 'c', a: 'a', b: 'b', g: 'g', w: 'w', caterpillar: 'c', aphid: 'a' };
  const artOK = () => !!(art && art.complete && art.naturalWidth > 0);
  const inlineThumbs = {};

  function sprite(key, x, bottom, height, wobble=0, rotation=0, alpha=1) {
    if (!artOK() || !frames[key]) return false;
    const [sx,sy,sw,sh] = frames[key], width = height * sw / sh;
    ctx.save();
    ctx.globalAlpha *= alpha;
    ctx.translate(x, bottom);
    if (rotation) ctx.rotate(rotation);
    if (wobble) ctx.translate(Math.sin(visualTick*1.65 + x*.037)*wobble, 0);
    ctx.drawImage(art, sx,sy,sw,sh, -width/2, -height, width, height);
    ctx.restore();
    return true;
  }
  const originalDrawTree = drawTree;
  drawTree = function () {
    if (!artOK()) {originalDrawTree(); return;}
    const size=242;
    ctx.save();
    if (game.tree<=2) { ctx.globalAlpha = .78; }
    sprite('sacred', 907, 509, size, 2.4);
    ctx.restore();
    if (game.tree>0) {
      const beats=4 + (game.tree>3?2:0);
      for(let i=0;i<beats;i++){
        const a=visualTick*.51+i*Math.PI*2/beats;
        const x=906+Math.cos(a)*75, y=384+Math.sin(a*1.2)*95;
        const glow=ctx.createRadialGradient(x,y,0,x,y,13);
        glow.addColorStop(0,'#fff9cdcc'); glow.addColorStop(.35,'#fff4a888');glow.addColorStop(1,'#fff4a800');
        ctx.fillStyle=glow;ctx.beginPath();ctx.arc(x,y,13,0,Math.PI*2);ctx.fill();
      }
    }
  };

  const originalDrawSlot=drawSlot;
  drawSlot=function(site){
    if(!artOK()||!site.plant||!frames[site.plant.type]){originalDrawSlot(site);return;}
    const [x,y]=site.pos, p=site.plant, selected=site.id===selectedSite;
    ctx.save();
    if(selected){ctx.fillStyle='#fff2b62a';ctx.beginPath();ctx.arc(x,y,79,0,2*Math.PI);ctx.fill();strokeCircle(x,y,76,'#ffe39f9b',2)}
    ellipse(x,y+29,40,15,'#38654861');
    circle(x,y+9,39,'#d9b78b');strokeCircle(x,y+9,39,selected?'#ffdf9a':'#f9eed1',selected?5:3);
    const h=(sizes[p.type]||105)*(1+(p.level-1)*.09);
    sprite(p.type,x,y+30,h,1.5+(p.level-1)*.3,Math.sin(visualTick*1.15+x*.023)*.016);
    if(p.level>1){
      ctx.globalAlpha=.72;
      strokeCircle(x,y-22,46+(p.level-1)*8,p.level===3?'#e9f4a0':'#d2f5b1',p.level===3?2.5:1.5);
      for(let i=0;i<p.level;i++){
        const theta=i*Math.PI*2/p.level+visualTick*.8;
        circle(x+Math.cos(theta)*34,y-22+Math.sin(theta)*35,2.8,'#fff3ac');
      }
    }
    for(let i=0;i<p.level;i++){
      circle(x-11+i*11,y+45,4.3,'#ffd773');strokeCircle(x-11+i*11,y+45,4.3,'#b99352',1);
    }
    ctx.font='900 14px system-ui';ctx.textAlign='center';ctx.fillStyle='#fff9dc';
    ctx.shadowColor='#425942';ctx.shadowBlur=4;ctx.fillText(String(site.id+1),x,y+57);
    ctx.restore();
  };

  const originalDrawBug=drawBug;
  drawBug=function(b){
    if(!artOK()||!frames[species[b.kind]]){originalDrawBug(b);return;}
    const kind=species[b.kind], xy=pointOnPath(b.progress);
    const jump=kind==='g' ? -Math.abs(Math.sin(visualTick*5+b.wobble))*14 : Math.sin(visualTick*9+b.wobble)*2.2;
    const fly=kind==='w'?-24+Math.sin(visualTick*7+b.wobble)*5:0;
    const height=kind==='a'?49:kind==='w'?56:kind==='g'?56:kind==='b'?48:51;
    const bottom=xy[1]+jump+fly+21;
    ctx.save();
    ellipse(xy[0],xy[1]+19,kind==='w'?18:25,kind==='w'?4:7,'#33583a42');
    // Subtle lean shows motion but preserves a child-recognizable insect silhouette.
    sprite(kind,xy[0],bottom,height,0,Math.sin(visualTick*6+b.wobble)*.034);
    if(b.slow>0||b.aura>0){
      ctx.globalAlpha=.8;
      strokeCircle(xy[0],xy[1]-12+fly,28,b.slow>0?'#f8a9c9':'#a5e5c1',2.3);
      circle(xy[0]+22,xy[1]-29+fly,3,'#f4d6ee');
    }
    if(b.hp<b.maxHp){
      const yy=xy[1]-height-17+fly;
      rr(xy[0]-24,yy,48,6,3,'#fff6df');
      rr(xy[0]-24,yy,Math.max(0,48*b.hp/b.maxHp),6,3,'#70be77');
    }
    ctx.restore();
  };

  function distanceToRoad(x,y){
    let m=Infinity;
    for(let i=1;i<PATH.length;i++){
      const [ax,ay]=PATH[i-1], [bx,by]=PATH[i], vx=bx-ax,vy=by-ay;
      const t=Math.max(0,Math.min(1,((x-ax)*vx+(y-ay)*vy)/(vx*vx+vy*vy||1)));
      m=Math.min(m,Math.hypot(x-ax-t*vx,y-ay-t*vy));
    }
    return m;
  }
  const originalBackground=drawBackground;
  const candidates=[
    [64,82,'bloomshrub',68],[325,70,'broad',84],[597,62,'leafshrub',71],
    [922,90,'tall',91],[62,532,'leafshrub',85],[318,547,'sapling',90],
    [528,550,'bloomshrub',77],[727,549,'broad',94],
    [400,57,'bloomshrub',65],[557,77,'tall',84],[956,566,'leafshrub',65],
    [100,560,'sapling',82],[821,77,'bloomshrub',64],
    [275,534,'leafshrub',62],[686,87,'sapling',70],
    [54,395,'berryshrub',75],[458,68,'fern',70],[965,77,'berryshrub',72],[390,547,'fern',69]
  ];
  let decoCacheStage='',decorations=[];
  drawBackground=function(){
    originalBackground();
    if(!artOK())return;
    const stage=game.stage||1;
    if(decoCacheStage!==stage){
      decoCacheStage=stage;
      decorations=candidates.filter(([x,y])=>
        distanceToRoad(x,y)>110 &&
        Math.hypot(x-905,y-475)>174 &&
        game.spots.every(s=>Math.hypot(x-s.pos[0],y-s.pos[1])>100)
      ).slice(0,8);
    }
    for(const [x,y,k,h] of decorations) sprite(k,x,y,h, .5, 0, .84);
  };

  // Atlas-to-HTML thumbnails are generated once and cached; no large inline image duplication.
  function thumbnail(key){
    if(inlineThumbs[key])return inlineThumbs[key];
    if(!artOK()||!frames[key])return '';
    const [sx,sy,sw,sh]=frames[key],c=document.createElement('canvas');
    c.width=100;c.height=100;
    const g=c.getContext('2d');
    const ratio=Math.min(98/sw,98/sh),w=sw*ratio,h=sh*ratio;
    g.drawImage(art,sx,sy,sw,sh,(100-w)/2,100-h,w,h);
    return (inlineThumbs[key]=c.toDataURL('image/webp',.79));
  }
  function decorateUI(){
    if(!artOK())return;
    document.querySelectorAll('[data-plant]').forEach(b=>{
      const key=b.dataset.plant,icon=b.querySelector('.plant-icon');
      if(icon){const path=thumbnail(key); if(path){icon.innerHTML='<img class="pg-art-thumb" src="'+path+'" alt="" draggable="false">';}}
    });
    document.querySelectorAll('.science article').forEach(a=>{
      const title=a.querySelector('b')?.textContent||'';
      const key=Object.keys(PLANTS).find(k=>title.includes(PLANTS[k].name));
      if(key&&!a.querySelector('.pg-science-thumb')){
        const img=document.createElement('img');img.src=thumbnail(key);img.className='pg-science-thumb';img.alt='';img.loading='lazy';
        a.insertBefore(img,a.firstChild);
      }
    });
  }
  const originalRefreshPlaces=refreshPlaces;
  refreshPlaces=function(){
    originalRefreshPlaces();
    if(!artOK())return;
    document.querySelectorAll('[data-place]').forEach(b=>{
      const site=game.spots[Number(b.dataset.place)];
      if(site?.plant){const src=thumbnail(site.plant.type);if(src)b.innerHTML='<img class="pg-place-thumb" src="'+src+'" alt="" draggable="false">';}
    });
  };
  if(art){
    art.addEventListener('load',()=>{decorateUI();refreshPlaces();});
    art.addEventListener('error',()=>{console.warn('Plant Guardians artwork unavailable; keeping Canvas artwork fallback.');});
    if(artOK()){decorateUI();refreshPlaces();}
  }
})();