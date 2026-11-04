const $=s=>document.querySelector(s);
const exName=()=>'pessoa';
/* ----- ícones (traço, 24x24) ----- */
const ICO={list:'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',board:'M4 4h6v16H4zM14 4h6v9h-6z',calendar:'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',gantt:'M3 5h9M7 12h10M13 19h8',people:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',chart:'M3 3v18h18M7 15l4-4 3 3 5-6',search:'M21 21l-4.3-4.3M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',filter:'M3 5h18l-7 8v6l-4-2v-4z',bell:'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',help:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01',trash:'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6',plus:'M12 5v14M5 12h14',sliders:'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',tag:'M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8zM7 7h.01',zap:'M13 2L3 14h9l-1 8 10-12h-9z',download:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',upload:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',file:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8',alert:'M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01',user:'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',star:'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z',ban:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM4.9 4.9l14.2 14.2',down:'M6 9l6 6 6-6',menu:'M3 6h18M3 12h18M3 18h18',db:'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',lock:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',check:'M20 6L9 17l-5-5',x:'M18 6L6 18M6 6l12 12',cloud:'M18 10a6 6 0 0 0-11.5-1.5A4.5 4.5 0 0 0 7 18h11a4 4 0 0 0 0-8z',dots:'M5 12h.01M12 12h.01M19 12h.01',image:'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9.5h.01',edit:'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z',chevL:'M15 18l-6-6 6-6',chevR:'M9 18l6-6-6-6',sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',eye:'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'};
const ic=(n,s)=>`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"${s?` style="width:${s}px;height:${s}px"`:''}><path d="${ICO[n]||''}"/></svg>`;
function hydrateIcons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.outerHTML=ic(e.dataset.i,e.dataset.s)})}
const uid=()=>Math.random().toString(36).slice(2,9);
const KEY='quire-like-v3';
const ST=[{id:'todo',n:'A fazer',c:'#6b7280'},{id:'doing',n:'Em andamento',c:'#3b82f6'},{id:'review',n:'Em revisão',c:'#a855f7'},{id:'blocked',n:'Impedido',c:'#ef4444'},{id:'done',n:'Concluído',c:'#3ecf74'}];
const stOf=id=>ST.find(s=>s.id===id)||ST[0];
const PR={1:'Baixa',2:'Média',3:'Alta'};
const COLORS=['#c0121f','#e0446b','#ff6fa0','#3d566e','#2ba5b5','#e8a33d','#6fae4e','#8a63d2'];
const REP=[['','Não repete'],['day','Diariamente'],['weekdays','Dias úteis'],['week','Semanalmente'],['month','Mensalmente'],['year','Anualmente']];
const REPU={day:'dia(s)',weekdays:'dia(s) útil(eis)',week:'semana(s)',month:'mês(es)',year:'ano(s)'};
const pad=n=>String(n).padStart(2,'0');
const ymd=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const today=()=>ymd(new Date());
const nowHM=()=>{const d=new Date();return pad(d.getHours())+':'+pad(d.getMinutes())};
const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return ymd(d)};
const dayDiff=d=>Math.round((new Date(d+'T00:00')-new Date(today()+'T00:00'))/864e5);
const fmtD=d=>{if(!d)return'';const x=new Date(d+'T00:00');const o={day:'numeric',month:'short'};if(x.getFullYear()!==new Date().getFullYear())o.year='numeric';return x.toLocaleDateString('pt-BR',o)};
const fmtS=d=>fmtD(d).replace(' de ',' ');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ini=n=>n.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase()||'?';
const validEmail=e=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
function addInt(ds,f,n){
  const d=new Date(ds+'T00:00');
  if(f==='day')d.setDate(d.getDate()+n);
  else if(f==='weekdays'){let k=n;while(k>0){d.setDate(d.getDate()+1);if(d.getDay()%6)k--}}
  else if(f==='week')d.setDate(d.getDate()+7*n);
  else if(f==='month'){const day=d.getDate();d.setDate(1);d.setMonth(d.getMonth()+n);d.setDate(Math.min(day,new Date(d.getFullYear(),d.getMonth()+1,0).getDate()))}
  else if(f==='year'){const day=d.getDate(),m=d.getMonth();d.setDate(1);d.setFullYear(d.getFullYear()+n);d.setMonth(m);d.setDate(Math.min(day,new Date(d.getFullYear(),m+1,0).getDate()))}
  return ymd(d);
}

/* ---------- data ---------- */
let S;
function mkTask(o){return {id:uid(),pid:'',parent:null,title:'',desc:'',imgs:[],status:'todo',prio:2,start:'',startTime:'',due:'',dueTime:'',repeat:null,assignees:[],tags:[],open:true,created:Date.now(),doneAt:null,doneLog:[],comments:[],by:(S&&S.me)||'',sec:false,ms:false,star:false,est:0,spent:0,timerStart:null,deps:[],...o}}
function seed(){
  const p=uid(),w=uid(),r=uid(),tr=uid(),tw=uid(),ti=uid(),tf=uid();
  const T=(parent,title,o={})=>mkTask({pid:p,parent,title,created:Date.now()-21*864e5,...o});
  const s1=T(null,'Prioridades diárias'),tec=T(s1.id,'Tecnologia'),con=T(s1.id,'Consultorias');
  S={cur:p,view:'list',dash:'cur',link:'',me:'',
   members:[{id:w,name:'Maria',email:'',color:COLORS[3],status:'active'},{id:r,name:'João',email:'',color:COLORS[0],status:'active'}],
   tags:[{id:tr,name:'João',color:COLORS[0]},{id:tw,name:'Maria',color:COLORS[3]},{id:ti,name:'infra',color:COLORS[4]},{id:tf,name:'fiscal',color:COLORS[2]}],
   projects:[{id:p,name:'Operação CS Infra'}],
   tasks:[s1,tec,con,
    T(tec.id,'Exemplo: atualizar servidores',{assignees:[r],tags:[tr,ti],status:'doing',est:6,start:addDays(-1),due:addDays(3),dueTime:'18:00'}),
    T(tec.id,'Exemplo: revisar backups (semanal)',{assignees:[r],tags:[tr],prio:1,est:1,due:addDays(10),repeat:{freq:'week',every:1}}),
    T(con.id,'PLANNING - Retificação EFD Contribuições',{assignees:[w],tags:[tw,tf],prio:3,est:4,star:true,due:addDays(-10)}),
    T(con.id,'Exemplo: reunião com cliente',{assignees:[w],tags:[tw],status:'review',est:2,start:addDays(1),startTime:'09:00',due:addDays(1),dueTime:'10:30'}),
    T(con.id,'Exemplo: relatório mensal',{status:'done',doneAt:Date.now()-2*864e5,doneLog:[Date.now()-2*864e5],assignees:[w],tags:[tw]}),
    T(con.id,'Exemplo: atividade impedida',{status:'blocked',prio:3,est:2,due:addDays(5)})]};
  const f=x=>S.tasks.find(t=>t.title.startsWith(x));
  f('Exemplo: revisar backups').deps=[f('Exemplo: atualizar servidores').id];
}
function migrate(d){
  d.members=(d.members||[]).map(m=>({email:'',status:'active',...m}));
  d.tags=d.tags||[];
  d.tasks.forEach(t=>{
    t.tags=(t.tags||[]).map(x=>{
      if(d.tags.some(g=>g.id===x))return x;
      const ex=d.tags.find(g=>g.name.toLowerCase()===String(x).toLowerCase());if(ex)return ex.id;
      const g={id:uid(),name:String(x),color:COLORS[d.tags.length%COLORS.length]};d.tags.push(g);return g.id});
    ['start','startTime','due','dueTime'].forEach(k=>t[k]=t[k]||'');
    t.repeat=t.repeat||null;t.comments=t.comments||[];t.assignees=t.assignees||[];t.doneLog=t.doneLog||(t.doneAt?[t.doneAt]:[]);
    if(t.status===undefined)t.status='todo';
  });
  d.link=d.link||'';d.me=d.me||'';d.dash=d.dash||'cur';d.view=d.view||'list';
  return defaults(d);
}
function load(){
  for(const k of [KEY,'quire-like-v2']){try{const d=JSON.parse(localStorage.getItem(k));if(d&&d.projects){S=migrate(d);return}}catch(e){}}
  seed();
}
function save(){
  if(typeof CLOUD!=='undefined'&&CLOUD){try{pushHist()}catch(e){}saveUI();cloudSchedule();return}
  try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}try{pushHist()}catch(e){}}
load();defaults(S);

const proj=()=>S.projects.find(p=>p.id===S.cur)||S.projects[0];
const ptasks=()=>S.tasks.filter(t=>t.pid===proj().id);
const kidsOf=id=>S.tasks.filter(t=>t.parent===id);
const byId=id=>S.tasks.find(t=>t.id===id);
const mem=id=>S.members.find(m=>m.id===id);
const tagOf=id=>S.tags.find(g=>g.id===id);
const isLeaf=t=>!S.tasks.some(x=>x.parent===t.id);
function desc(id){let r=[];kidsOf(id).forEach(k=>{r.push(k);r=r.concat(desc(k.id))});return r}
function leavesUnder(t){return isLeaf(t)?[t]:desc(t.id).filter(isLeaf)}
function prog(t){if(isLeaf(t))return null;const l=leavesUnder(t);return [l.filter(x=>x.status==='done').length,l.length]}
function depthOf(t){let d=0;while(t.parent){t=byId(t.parent);d++}return d}
const isLate=t=>t.status!=='done'&&t.due&&(t.due<today()||(t.due===today()&&t.dueTime&&t.dueTime<nowHM()));
const hasRep=t=>t.repeat&&t.repeat.freq;
function normDates(t){if(t.start&&t.due&&t.due<t.start)t.due=t.start}
function toast(m,act){const e=$('#toast');toast.act=act||null;if(act){e.innerHTML='<span></span><button class="tundo" type="button">Desfazer</button>';e.firstChild.textContent=m}else e.textContent=m;e.classList.toggle('act',!!act);e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>{e.classList.remove('on');toast.act=null},act?7000:3800)}
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.tundo')){const a=toast.act;toast.act=null;$('#toast').classList.remove('on');if(a)a()}},true);
function advance(t){
  const n=Math.max(1,+t.repeat.every||1),f=t.repeat.freq;
  if(t.start)t.start=addInt(t.start,f,n);
  if(t.due)t.due=addInt(t.due,f,n);
  return t.due||t.start;
}
function setStatus(t,st){
  const was=t.status==='done';
  if(st==='done'&&!was){
    t.doneLog.push(Date.now());
    if(hasRep(t)&&(t.due||t.start)){const nx=advance(t);t.status='todo';t.doneAt=null;toast('🔁 Atividade recorrente concluída — próxima data: '+fmtD(nx));return}
    t.doneAt=Date.now();
  }
  if(st!=='done'&&was){t.doneLog.pop();t.doneAt=null}
  t.status=st;
}
function completeTask(t,checked){
  const ds=desc(t.id);
  if(checked){
    setStatus(t,'done');
    let n=0;ds.forEach(x=>{if(x.status!=='done'){setStatus(x,'done');n++}});
    if(n)toast('✔ '+n+' subatividade(s) também concluída(s)');
  }else{
    setStatus(t,'todo');
    if(S.rules&&S.rules.parentDone)ds.forEach(x=>{if(x.status==='done')setStatus(x,'todo')});
  }
}
function createTag(name){
  name=name.trim();if(!name)return null;
  let g=S.tags.find(x=>x.name.toLowerCase()===name.toLowerCase());
  if(!g){g={id:uid(),name,color:COLORS[S.tags.length%COLORS.length]};S.tags.push(g)}
  return g;
}

/* ---------- filters ---------- */
function filtering(){return !!((S.qf&&S.qf!=='all')||$('#q').value.trim()||$('#fm').value||$('#ft').value||$('#fs').value||$('#fp').value)}
function match(t){
  if(S.hideDone&&S.qf!=='done'&&t.status==='done')return false;
  const q=$('#q').value.trim().toLowerCase(),fm=$('#fm').value,ft=$('#ft').value,fs=$('#fs').value,fp=$('#fp').value;
  if(S.qf&&S.qf!=='all'&&!qfPred(S.qf)(t))return false;
  if(fp&&String(t.prio)!==fp)return false;
  if(fs&&t.status!==fs)return false;
  if(ft&&!t.tags.includes(ft))return false;
  if(fm==='none'&&t.assignees.length)return false;
  if(fm&&fm!=='none'&&!t.assignees.includes(fm))return false;
  if(q){const nm=t.assignees.map(a=>(mem(a)||{}).name||'').join(' ')+' '+t.tags.map(a=>(tagOf(a)||{}).name||'').join(' ');
    if(!(t.id+' '+t.title+' '+t.desc+' '+nm+' '+(t.comments||[]).map(c=>c.text).join(' ')).toLowerCase().includes(q))return false}
  return true;
}
const matchTree=t=>match(t)||desc(t.id).some(match);

/* ---------- chips ---------- */
const avs=t=>{const a=t.assignees.map(mem).filter(Boolean);return a.slice(0,3).map(m=>`<span class="av" style="background:${m.color}" title="${esc(m.name)}">${esc(ini(m.name))}</span>`).join('')+(a.length>3?`<span class="av" style="background:#555">+${a.length-3}</span>`:'')};
const tagChips=(t,max=3)=>{const g=t.tags.map(tagOf).filter(Boolean);return g.slice(0,max).map(x=>`<span class="ac tg2" style="--c:${x.color};background:${x.color}" title="${esc(x.name)}">${esc(x.name)}</span>`).join('')+(g.length>max?`<span class="ac" style="background:#555">+${g.length-max}</span>`:'')};
const stChip=t=>{const s=stOf(t.status);return `<span class="st ${t.status==='todo'?'st0':''}" style="color:${s.c};border-color:${s.c}">${s.n}</span>`};
function dateTxt(t){
  const tm=x=>x?' '+x:'';let s='';
  if(t.start&&t.due)s=`${fmtS(t.start)}${tm(t.startTime)} → ${fmtS(t.due)}${tm(t.dueTime)}`;
  else if(t.due)s=fmtD(t.due)+tm(t.dueTime);
  else if(t.start)s='Início '+fmtS(t.start)+tm(t.startTime);
  return (hasRep(t)?'🔁 ':'')+s;
}
function dueCls(t){if(!t.due||t.status==='done')return'';if(isLate(t))return'late';return dayDiff(t.due)<=3?'soon':''}
function repLabel(t){if(!hasRep(t))return'';const n=+t.repeat.every||1;return n===1?'Repete: '+REP.find(r=>r[0]===t.repeat.freq)[1].toLowerCase():`Repete a cada ${n} ${REPU[t.repeat.freq]}`}

/* ---------- render ---------- */
let adding=null;
function fillFilters(){
  const key=S.members.map(m=>m.id+m.name).join('|')+'#'+S.tags.map(g=>g.id+g.name).join('|');
  if(fillFilters.k===key)return;fillFilters.k=key;
  const a=$('#fm').value,b=$('#ft').value,c=$('#fs').value;
  $('#fm').innerHTML='<option value="">Responsável: todos</option><option value="none">Sem responsável</option>'+S.members.map(m=>`<option value="${m.id}">${esc(m.name)}</option>`).join('');
  $('#ft').innerHTML='<option value="">Etiqueta: todas</option>'+S.tags.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('');
  $('#fs').innerHTML='<option value="">Status: todos</option>'+ST.map(s=>`<option value="${s.id}">${s.n}</option>`).join('');
  $('#fm').value=[...$('#fm').options].some(o=>o.value===a)?a:'';
  $('#ft').value=[...$('#ft').options].some(o=>o.value===b)?b:'';
  $('#fs').value=c;
}
/* ---------- LIST (outline) ---------- */
function addRow(pid,depth){
  return `<div class="row addrow"><span class="grip" style="visibility:hidden"></span><span class="gut"></span><div class="main" style="padding-left:${depth*24+16}px"><input data-addin="${pid}" placeholder="Nova atividade — Enter adiciona, Esc fecha"></div></div>`;
}
/* ---------- BOARD ---------- */
function board(){
  const leaves=ptasks().filter(isLeaf);
  let h='<div class="board">';
  ST.forEach(s=>{
    if(S.hideDone&&S.qf!=='done'&&s.id==='done')return;
    const ts=leaves.filter(t=>t.status===s.id&&match(t));
    h+=`<div class="col" data-st="${s.id}"><div class="ch"><i style="background:${s.c}"></i>${s.n}<span class="n">${ts.length}</span></div><div class="cb">`+
    ts.map(t=>{const par=t.parent?byId(t.parent):null,dt=dateTxt(t);
      return `<div class="card p${t.prio}" draggable="true" data-t="${t.id}"><button class="cdel" data-qdel="${t.id}" title="Excluir atividade">${ic('trash',14)}</button>${par?`<small>${esc(par.title)}</small>`:''}<div>${esc(t.title)}</div>
      <div class="cm">${(t.imgs||[]).length?`<span class="imgc">${ic('image',13)}${t.imgs.length}</span>`:''}${avs(t)}${tagChips(t)}${dt?`<span class="${dueCls(t)}">📅 ${dt}</span>`:''}</div></div>`}).join('')+
    `</div></div>`;
  });
  $('#view').innerHTML=h+'</div>';
}

/* ---------- DASHBOARD ---------- */
function dashBase(){
  const all=S.dash==='all';
  const pids=all?S.projects.map(p=>p.id):[proj().id];
  const T=S.tasks.filter(t=>pids.includes(t.pid));
  const L=T.filter(isLeaf),td=today();
  const open=L.filter(t=>t.status!=='done'),done=L.filter(t=>t.status==='done');
  const late=open.filter(isLate);
  const soon=open.filter(t=>t.due&&!isLate(t)&&dayDiff(t.due)<=7);
  const blocked=L.filter(t=>t.status==='blocked');
  const noOwner=open.filter(t=>!t.assignees.length),noDue=open.filter(t=>!t.due);
  const pct=L.length?Math.round(done.length/L.length*100):0;
  const kpi=(v,l,c='')=>`<div class="kpi ${c}"><b>${v}</b><span>${l}</span></div>`;
  let h=`<div class="dh"><h3>Visão executiva<small>${all?'Todos os projetos':esc(proj().name)}</small></h3>
   <div class="seg"><button data-ds="cur" class="${!all?'on':''}">Este projeto</button><button data-ds="all" class="${all?'on':''}">Todos os projetos</button></div></div>`;
  h+=`<div class="kpis">${kpi(L.length,'Atividades (itens de trabalho)')}${kpi(pct+'%','Concluído ('+done.length+' de '+L.length+')','g')}${kpi(open.filter(t=>t.status==='doing').length,'Em andamento')}${kpi(late.length,'Atrasadas','r')}${kpi(soon.length,'Vencem em 7 dias','a')}${kpi(blocked.length,'Impedidas','r')}${kpi(noOwner.length,'Sem responsável','a')}${kpi(noDue.length,'Sem prazo')}</div>`;
  if(!L.length){$('#view').innerHTML=h+'<div class="empty">Sem atividades para exibir.</div>';return}

  const C=2*Math.PI*40;let off=0,segs='';
  ST.forEach(s=>{const n=L.filter(t=>t.status===s.id).length;if(!n)return;const len=n/L.length*C;
    segs+=`<circle r="40" cx="60" cy="60" fill="none" stroke="${s.c}" stroke-width="20" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-off}" transform="rotate(-90 60 60)"/>`;off+=len});
  const donut=`<div class="donut"><svg width="150" height="150" viewBox="0 0 120 120"><circle r="40" cx="60" cy="60" fill="none" style="stroke:var(--bd)" stroke-width="20"/>${segs}<text x="60" y="58" text-anchor="middle" style="fill:var(--tx)" font-size="20" font-weight="700">${pct}%</text><text x="60" y="73" text-anchor="middle" style="fill:var(--mu)" font-size="8">concluído</text></svg>
   <div class="leg">${ST.map(s=>`<div><i style="background:${s.c}"></i>${s.n}<b>${L.filter(t=>t.status===s.id).length}</b></div>`).join('')}</div></div>`;

  const owners=[...S.members.map(m=>({n:m.name,c:m.color,id:m.id})),{n:'Sem responsável',c:'#555',id:null}];
  const rows=owners.map(o=>({...o,ts:L.filter(t=>o.id?t.assignees.includes(o.id):!t.assignees.length)})).filter(o=>o.ts.length);
  const mx=Math.max(1,...rows.map(o=>o.ts.length));
  const carga=rows.map(o=>{const lt=o.ts.filter(isLate).length;
    return `<div class="hb"><span class="nm"><span class="ac" style="background:${o.c}">${esc(o.n)}</span></span><span class="tr" style="width:${o.ts.length/mx*100}%;flex:none;min-width:30px;max-width:calc(100% - 210px)">${ST.map(s=>{const n=o.ts.filter(t=>t.status===s.id).length;return n?`<i title="${s.n}: ${n}" style="background:${s.c};width:${n/o.ts.length*100}%"></i>`:''}).join('')}</span><span class="nn">${o.ts.length} atividade(s)${lt?`<br><span style="color:var(--red)">${lt} atrasada(s)</span>`:''}</span></div>`}).join('')||'<div class="empty">—</div>';

  const trows=S.tags.map(g=>({g,ts:open.filter(t=>t.tags.includes(g.id))})).filter(r=>r.ts.length);
  const tmx=Math.max(1,...trows.map(r=>r.ts.length));
  const porTag=trows.map(r=>`<div class="hb"><span class="nm"><span class="ac" style="background:${r.g.color}">${esc(r.g.name)}</span></span><span class="tr"><i style="background:${r.g.color};width:${r.ts.length/tmx*100}%"></i></span><span class="nn">${r.ts.length} aberta(s)${r.ts.filter(isLate).length?`<br><span style="color:var(--red)">${r.ts.filter(isLate).length} atras.</span>`:''}</span></div>`).join('')||'<div style="color:var(--mu)">Nenhuma atividade aberta com etiqueta.</div>';

  const pmx=Math.max(1,...[1,2,3].map(p=>open.filter(t=>t.prio===p).length));
  const prio=[3,2,1].map(p=>{const n=open.filter(t=>t.prio===p).length;const c={3:'#ff5b8a',2:'#f2a93b',1:'#6b87a8'}[p];
    return `<div class="hb"><span class="nm">${PR[p]}</span><span class="tr"><i style="background:${c};width:${n/pmx*100}%"></i></span><span class="nn">${n} abertas</span></div>`}).join('');

  const bk=[['Atrasadas',t=>isLate(t),'#ff5b6e'],['0–7 dias',t=>!isLate(t)&&dayDiff(t.due)<=7,'#f2a93b'],['8–14',t=>dayDiff(t.due)>7&&dayDiff(t.due)<=14,'#2fb7c4'],['15–30',t=>dayDiff(t.due)>14&&dayDiff(t.due)<=30,'#3b82f6'],['> 30',t=>dayDiff(t.due)>30,'#6b7280']];
  const bv=bk.map(b=>open.filter(t=>t.due&&b[1](t)).length).concat([noDue.length]);
  const bmx=Math.max(1,...bv);
  const prazos=`<div class="cols">${bk.map((b,i)=>`<div><b>${bv[i]}</b><i style="height:${bv[i]/bmx*100}px;background:${b[2]}"></i><span>${b[0]}</span></div>`).join('')}<div><b>${bv[5]}</b><i style="height:${bv[5]/bmx*100}px;background:#444a56"></i><span>Sem prazo</span></div></div>`;

  const wk=ts=>{const d=new Date(ts);d.setHours(0,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7));return d.getTime()};
  const w0=wk(Date.now()),weeks=[...Array(8)].map((_,i)=>w0-(7-i)*7*864e5);
  const logs=L.flatMap(t=>t.doneLog||[]);
  const wv=weeks.map(w=>logs.filter(ts=>wk(ts)===w).length),wmx=Math.max(1,...wv);
  const thr=`<div class="cols">${weeks.map((w,i)=>`<div><b>${wv[i]}</b><i style="height:${wv[i]/wmx*100}px;background:var(--ok)"></i><span>${new Date(w).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})}</span></div>`).join('')}</div>`;

  let prows=[];
  if(all)S.projects.forEach(p=>{const l=L.filter(t=>t.pid===p.id);if(l.length)prows.push([p.name,l.filter(t=>t.status==='done').length,l.length,l.filter(isLate).length])});
  else T.filter(t=>!t.parent).forEach(t=>{const l=leavesUnder(t);prows.push([t.title,l.filter(x=>x.status==='done').length,l.length,l.filter(isLate).length])});
  const secs=prows.map(r=>`<div class="hb"><span class="nm" style="width:150px" title="${esc(r[0])}">${esc(r[0])}</span><span class="tr"><i style="background:var(--ok);width:${r[2]?r[1]/r[2]*100:0}%"></i></span><span class="nn" style="width:90px">${r[1]}/${r[2]} · ${r[2]?Math.round(r[1]/r[2]*100):0}%${r[3]?`<br><span style="color:var(--red)">${r[3]} atras.</span>`:''}</span></div>`).join('');

  const path=t=>{let p=[],x=t;while(x.parent){x=byId(x.parent);p.unshift(x.title)}return (all?[(S.projects.find(q=>q.id===t.pid)||{}).name,...p]:p).join(' › ')};
  const tbl=(arr,empty)=>arr.length?`<table>${arr.slice(0,8).map(t=>`<tr class="lk" data-t="${t.id}"><td>${esc(t.title)}<span class="sub">${esc(path(t))}</span></td><td style="width:90px">${avs(t)}</td><td style="width:120px;text-align:right" class="${dueCls(t)}">${t.due?fmtS(t.due)+(t.dueTime?' '+t.dueTime:'')+'<span class="sub">'+(dayDiff(t.due)<0?Math.abs(dayDiff(t.due))+' d atraso':dayDiff(t.due)===0?'hoje':'em '+dayDiff(t.due)+' d')+'</span>':''}</td></tr>`).join('')}</table>${arr.length>8?`<div style="color:var(--mu);font-size:12px;margin-top:6px">+ ${arr.length-8} outras</div>`:''}`:`<div style="color:var(--mu)">${empty}</div>`;
  const byDue=(a,b)=>(a.due||'9').localeCompare(b.due||'9');

  h+=`<div class="grid"><div class="card2"><h4>Status</h4>${donut}</div><div class="card2"><h4>Carga por responsável</h4>${carga}</div><div class="card2"><h4>Abertas por etiqueta</h4>${porTag}</div></div>
  <div class="grid"><div class="card2"><h4>Abertas por prioridade</h4>${prio}</div><div class="card2"><h4>Vencimentos (abertas)</h4>${prazos}</div><div class="card2"><h4>Concluídas por semana</h4>${thr}</div></div>
  <div class="grid"><div class="card2" style="grid-column:1/-1"><h4>Progresso por ${all?'projeto':'seção'}</h4>${secs||'—'}</div></div>
  <div class="grid"><div class="card2"><h4 style="color:var(--red)">Atrasadas (${late.length})</h4>${tbl(late.sort(byDue),'Nenhuma atividade atrasada 🎉')}</div>
  <div class="card2"><h4 style="color:var(--amb)">Vencem nos próximos 7 dias (${soon.length})</h4>${tbl(soon.sort(byDue),'Nada vencendo nesta semana.')}</div>
  <div class="card2"><h4 style="color:var(--red)">Impedidas (${blocked.length})</h4>${tbl(blocked.sort(byDue),'Nenhuma atividade impedida.')}</div></div>`;
  $('#view').innerHTML=h;
}

/* ---------- POPOVER (edição direta na linha) ---------- */
let pop=null;
function openPop(type,id,el){if(type!=='r'&&type!=='u'&&type!=='m'&&!canEdit(byId(id))){deny('edit');return}pop={type,id};renderPop(el)}
function closePop(){pop=null;$('#pop').style.display='none'}
function renderPop(anchor){
  const P=$('#pop');if(!pop){P.style.display='none';return}
  if(pop.type==='r'||pop.type==='u'){renderSpecialPop(anchor);return}
  const t=byId(pop.id);if(!t){closePop();return}
  let h='';
  if(pop.type==='a'){
    h=(S.members.map(m=>`<label class="pl"><input type="checkbox" data-pa="${m.id}" ${t.assignees.includes(m.id)?'checked':''}><span class="av" style="background:${m.color}">${esc(ini(m.name))}</span><span>${esc(m.name)}${m.email?`<br><small>${esc(m.email)}</small>`:''}</span></label>`).join('')||'<div style="padding:6px;color:var(--mu);font-size:13px">Nenhum membro cadastrado.</div>')+
      `<div class="ft"><button data-act="team">+ Convidar / gerenciar equipe</button></div>`;
  }else if(pop.type==='t'){
    h=(S.tags.map(g=>`<label class="pl"><input type="checkbox" data-pt="${g.id}" ${t.tags.includes(g.id)?'checked':''}><span class="ac" style="background:${g.color};max-width:200px">${esc(g.name)}</span></label>`).join('')||'<div style="padding:6px;color:var(--mu);font-size:13px">Nenhuma etiqueta criada.</div>')+
      `<div class="ft"><input id="pop_new" placeholder="+ Nova etiqueta (Enter)"><button data-act="tags" style="margin-top:6px">Gerenciar etiquetas</button></div>`;
  }else if(pop.type==='s'){
    h=ST.map(s=>`<label class="pl" tabindex="0" data-ps="${s.id}"><span class="st" style="color:${s.c};border-color:${s.c}">${s.n}</span>${t.status===s.id?'✓':''}</label>`).join('');
  }else if(pop.type==='p'){
    h=[3,2,1].map(n=>`<label class="pl" tabindex="0" data-pp="${n}"><span class="gut p${n}" style="width:20px;cursor:default">${{3:'↑',2:'–',1:'↓'}[n]}</span>${PR[n]}${t.prio===n?' ✓':''}</label>`).join('');
  }else if(pop.type==='j'){
    h='<div style="padding:4px 6px;color:var(--mu);font-size:12px">Mover para o projeto:</div>'+S.projects.map(p=>`<label class="pl" tabindex="0" data-pj="${p.id}">📁 ${esc(p.name)}${p.id===t.pid?' ✓':''}</label>`).join('');
  }else if(pop.type==='m'){
    h=[['edit','✎ Editar nome','F2'],['panel','⤢ Abrir painel de detalhes','Espaço'],['pop:a','Definir responsável','@'],['pop:s','Definir estado','?'],['pop:t','Definir etiqueta','#'],['pop:d','Definir datas / prazo','&lt;'],['pop:p','Definir prioridade','!'],['pop:j','Mover para outro projeto','&gt;'],['addsub','Adicionar subatividade','⇧+Enter'],['sublist','Adicionar sublista','l'],['comment','Comentar','c'],['done','Concluir / reabrir','⇧+C'],['copy','Copiar','Ctrl+C'],['cut','Recortar','Ctrl+X'],['paste','Colar','Ctrl+V'],['indent','Tornar subatividade da anterior','Alt+P'],['outdent','Promover um nível','Ctrl+←'],['section','Transformar em seção','Ctrl+S'],['milestone','Marco','Ctrl+Alt+M'],['star','★ Favoritar','*'],['zoom','Zoom na atividade','z'],['info','ID e detalhes','i'],['del','🗑 Excluir','Ctrl+Del']].map(m=>`<label class="pl" tabindex="0" data-mact="${m[0]}"><span style="flex:1">${m[1]}</span><kbd>${m[2]}</kbd></label>`).join('');
  }else if(pop.type==='d'){
    const r=t.repeat||{freq:'',every:1};
    h=`<label class="k" style="margin-top:2px">Início (data e hora)</label><div class="dg"><input type="date" data-pf="start" value="${t.start}"><input type="time" data-pf="startTime" value="${t.startTime}"></div>
    <label class="k">Finalização / prazo (data e hora)</label><div class="dg"><input type="date" data-pf="due" value="${t.due}"><input type="time" data-pf="dueTime" value="${t.dueTime}"></div>
    <label class="k">Repetir</label><div class="dg"><select data-pf="rep">${REP.map(o=>`<option value="${o[0]}" ${o[0]===r.freq?'selected':''}>${o[1]}</option>`).join('')}</select>${r.freq?`<input type="number" min="1" max="99" data-pf="every" value="${r.every||1}" title="A cada N">`:'<span></span>'}</div>
    ${r.freq?`<div class="hint">A cada ${r.every||1} ${REPU[r.freq]}. ${(t.due||t.start)?'Ao concluir, as datas avançam sozinhas.':'Defina uma data para a repetição funcionar.'}</div>`:''}
    <div class="ft"><button data-act="clear">Limpar datas e repetição</button></div>`;
  }
  const hint={a:'↑ ↓ navega · Enter marca / desmarca · Esc fecha · letra pula para o nome',t:'↑ ↓ navega · Enter marca / desmarca · Esc fecha · letra pula para a etiqueta',s:'↑ ↓ navega · Enter escolhe · letra pula',p:'↑ ↓ navega · Enter escolhe',j:'↑ ↓ navega · Enter escolhe · letra pula',d:'Tab muda de campo · Enter aplica · Esc fecha'}[pop.type];
  P.innerHTML=h+(hint?`<div class="kh">${hint}</div>`:'');P.style.display='block';
  if(anchor){
    const r=anchor.getBoundingClientRect();
    let x=Math.min(r.left,innerWidth-P.offsetWidth-8),y=r.bottom+4;
    if(y+P.offsetHeight>innerHeight-8)y=Math.max(8,r.top-P.offsetHeight-4);
    P.style.left=Math.max(8,x)+'px';P.style.top=y+'px';
  }
}
function startEdit(span){
  const t=byId(span.dataset.ie);if(!t)return;
  const inp=document.createElement('input');inp.value=t.title;inp.className='ie';
  span.replaceWith(inp);inp.focus();inp.select();
  let fin=false;
  const end=ok=>{if(fin)return;fin=true;if(ok&&inp.value.trim()&&inp.value.trim()!==t.title){t.title=inp.value.trim();save()}render()};
  inp.onblur=()=>end(true);
  inp.onkeydown=e=>{
    if(e.key==='Enter'){e.preventDefault();end(true)}
    else if(e.key==='Escape'){e.stopPropagation();end(false)}
    else if(e.key==='Tab'){e.preventDefault();e.stopPropagation();const id=t.id,sh=e.shiftKey;end(true);(sh?outdent:indent)(id);render();const sp=document.querySelector(`[data-ie="${id}"]`);if(sp)startEdit(sp)}
  };
}

/* ---------- TASK PANEL (modal) ---------- */
let editing=null,modalRO=false;
function openTaskBase(id){
  const t=byId(id);if(!t)return;
  if(editing&&editing!==id&&$('#ov').classList.contains('on')&&$('#modal').dataset.kind==='task'&&$('#m_title')){collect();save()}
  editing=id;closePop();
  const path=[];let p=t.parent;while(p){const x=byId(p);path.unshift(x);p=x.parent}
  const bc=path.length?`<div class="bc">${path.map(x=>`<a data-t="${x.id}">${esc(x.title)}</a>`).join(' › ')} ›</div>`:'';
  const ks=kidsOf(id),banned=[id,...desc(id).map(d=>d.id)];
  const ordered=[];(function walk(par){S.tasks.filter(x=>x.pid===t.pid&&(x.parent||null)===par&&!banned.includes(x.id)).forEach(x=>{ordered.push(x);walk(x.id)})})(null);
  const r=t.repeat||{freq:'',every:1};
  const M0=$('#modal');M0.dataset.kind='task';M0.style.width='';
  if(innerWidth>900&&innerWidth<1500)document.body.classList.add('sca');
  $('#modal').innerHTML=`<button class="dxb" id="m_x" type="button" title="Fechar (Esc)">${ic('x',18)}</button>${bc}<h3><input id="m_title" value="${esc(t.title)}" style="font-size:16px;font-weight:600"></h3>
  <div class="g3">
    <div><label>Status</label><select id="m_st">${ST.map(s=>`<option value="${s.id}" ${s.id===t.status?'selected':''}>${s.n}</option>`).join('')}</select></div>
    <div><label>Prioridade</label><select id="m_prio">${[1,2,3].map(n=>`<option value="${n}" ${t.prio==n?'selected':''}>${PR[n]}</option>`).join('')}</select></div>
    <div><label>Atividade pai</label><select id="m_par"><option value="">(raiz do projeto)</option>${ordered.map(x=>`<option value="${x.id}" ${x.id===t.parent?'selected':''}>${esc('— '.repeat(depthOf(x))+x.title)}</option>`).join('')}</select></div>
  </div>
  <div class="g4">
    <div><label>Início — data</label><input type="date" id="m_start" value="${t.start}"></div>
    <div><label>Início — hora</label><input type="time" id="m_stime" value="${t.startTime}"></div>
    <div><label>Finalização — data</label><input type="date" id="m_due" value="${t.due}"></div>
    <div><label>Finalização — hora</label><input type="time" id="m_dtime" value="${t.dueTime}"></div>
  </div>
  <div class="g4">
    <div style="grid-column:span 2"><label>Repetir</label><select id="m_rep">${REP.map(o=>`<option value="${o[0]}" ${o[0]===r.freq?'selected':''}>${o[1]}</option>`).join('')}</select></div>
    <div><label>A cada (nº)</label><input type="number" min="1" max="99" id="m_every" value="${r.every||1}"></div>
    <div style="align-self:end;color:var(--mu);font-size:12px;padding-bottom:8px">Ao concluir, as datas avançam.</div>
  </div>
  ${taskExtraHTML(t)}
  <label>Responsáveis (clique para atribuir)</label>
  <div class="pick" id="m_as">${S.members.map(m=>`<span class="pa ${t.assignees.includes(m.id)?'on':''}" data-pm="${m.id}"><span class="av" style="background:${m.color};border-color:transparent">${esc(ini(m.name))}</span>${esc(m.name)}</span>`).join('')||'<span style="color:var(--mu)">Cadastre pessoas em “Equipe”.</span>'}</div>
  <label>Etiquetas (clique para marcar) — ou crie uma nova</label>
  <div class="pick" id="m_tg">${S.tags.map(g=>`<span class="ac ${t.tags.includes(g.id)?'on':''}" data-pg="${g.id}" style="background:${g.color}">${esc(g.name)}</span>`).join('')}<input id="m_newtag" placeholder="+ nova etiqueta (Enter)" style="width:190px"></div>
  <label>Descrição / observações</label><textarea id="m_desc" rows="4">${esc(t.desc)}</textarea>
  ${CLOUD?`<div class="galwrap" id="m_gw"><div class="gal" id="m_gal">${galHTML(t)}</div>${canImg(t)?`<button type="button" class="gadd" id="m_addimg">${ic('image',16)} Adicionar imagem <small style="opacity:.7;margin-left:6px">ou cole (Ctrl+V) / arraste</small></button><input type="file" id="m_file" accept="image/jpeg,image/png,image/gif,image/webp" multiple hidden>`:''}</div>${canImg(t)?'<div class="hint">Cole com Ctrl+V, arraste para cá ou clique em “Adicionar imagem”.</div>':''}`:''}
  <label>Subatividades</label>
  <div class="sub2">${ks.map(k=>`<div class="row ${k.status==='done'?'done':''}"><div class="main"><input type="checkbox" data-mck="${k.id}" ${k.status==='done'?'checked':''}><span class="tt" data-t="${k.id}" style="cursor:pointer">${esc(k.title)}</span></div><div class="rt"><span class="col-a" style="display:flex">${avs(k)}</span><span class="col-d ${dueCls(k)}" style="width:150px">${dateTxt(k)}</span></div></div>`).join('')}
  <div style="padding:6px 8px"><input id="m_sub" placeholder="+ Nova subatividade (Enter)"></div></div>
  <label>Comentários (${t.comments.length}) — atalho: c</label>
  <div>${t.comments.map(c=>`<div class="cmt"><b>${esc(c.by||'Você')}</b> <small style="color:var(--mu)">${new Date(c.ts).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}</small> <button class="ghost" data-cdel="${c.id}" style="float:right;padding:0 6px">✕</button><div style="white-space:pre-wrap;margin-top:3px">${esc(c.text)}</div></div>`).join('')}</div>
  <textarea id="m_comment" rows="2" placeholder="Escreva um comentário — Enter envia, ⇧+Enter quebra a linha"></textarea>
  <div class="acts"><span><button id="m_del" style="color:var(--red)">Excluir</button> <button id="m_mail">✉ Avisar responsáveis</button> <button id="m_link" title="Copiar link desta atividade">🔗 Link</button></span><span><button id="m_x">Fechar</button> <button class="pri" id="m_ok">Salvar</button></span></div>`;
  $('#ov').classList.add('on');
  hydrateImgs();
}
function collect(){
  const t=byId(editing);if(!t||!$('#m_title')||modalRO)return;
  t.title=$('#m_title').value.trim()||t.title;
  t.prio=+$('#m_prio').value;t.desc=$('#m_desc').value;
  t.start=$('#m_start').value;t.startTime=$('#m_stime').value;t.due=$('#m_due').value;t.dueTime=$('#m_dtime').value;
  normDates(t);
  if($('#m_est')){t.est=num($('#m_est').value);t.spent=num($('#m_spent').value);t.star=$('#m_star').checked}
  const f=$('#m_rep').value;t.repeat=f?{freq:f,every:Math.max(1,+$('#m_every').value||1)}:null;
  t.assignees=[...document.querySelectorAll('#m_as .pa.on')].map(e=>e.dataset.pm);
  t.tags=[...document.querySelectorAll('#m_tg .ac.on')].map(e=>e.dataset.pg);
  const np=$('#m_par').value||null;if(np!==t.parent){t.parent=np;if(np)byId(np).open=true}
  setStatus(t,$('#m_st').value);
}
function closeModal(){document.body.classList.remove('sca');if(typeof cloud!=='undefined'&&cloud.stale){cloud.stale=false;setTimeout(()=>{try{render()}catch(e){}},0)}$('#ov').classList.remove('on');editing=null;modalRO=false;const M=$('#modal');M.dataset.kind='';M.style.width=''}
function quickDelete(id){
  const t=byId(id);if(!t)return;
  if(!can('del')||!canEdit(t)){deny('del');return}
  const n=desc(id).length;
  delTask(id);if(cur===id)cur=null;sel.delete(id);if(zoom===id)zoom=null;
  save();render();
  toast('Atividade excluída'+(n?` (e ${n} subatividade${n>1?'s':''})`:''),()=>{if(hist.length>1){restore(hist.length-1);save()}});
}
function delTask(id){const ids=[id,...desc(id).map(d=>d.id)];
  const files=CLOUD?S.tasks.filter(t=>ids.includes(t.id)).flatMap(t=>(t.imgs||[]).map(g=>g.p)):[];
  S.tasks=S.tasks.filter(t=>!ids.includes(t.id));
  if(files.length)setTimeout(()=>{const keep=new Set(S.tasks.flatMap(t=>(t.imgs||[]).map(g=>g.p)));files.filter(p=>!keep.has(p)).forEach(delImg)},60000)}
function addTask(title,parent){
  if(!can('add')){deny('add');return}
  const par=parent&&parent!=='root'?byId(parent):null;
  S.tasks.push(mkTask({pid:proj().id,parent:par?par.id:null,title}));
  if(par)par.open=true;
}
function move(id,dir){
  const t=byId(id),sib=S.tasks.filter(x=>x.pid===t.pid&&(x.parent||null)===(t.parent||null));
  const i=sib.indexOf(t),o=sib[i+dir];if(!o)return false;
  const a=S.tasks.indexOf(t),b=S.tasks.indexOf(o);[S.tasks[a],S.tasks[b]]=[S.tasks[b],S.tasks[a]];return true;
}

/* ---------- dialogs (prompt/confirm são bloqueados no sandbox) ---------- */
function ask(title,def,cb,opts={}){
  $('#modal').dataset.kind='ask';$('#modal').style.width='';
  $('#modal').innerHTML=`<h3>${esc(title)}</h3>${opts.text?`<textarea id="dlg" rows="12" ${opts.ro?'readonly':''}>${esc(def||'')}</textarea>`:opts.confirm?'':`<input id="dlg" value="${esc(def||'')}">`}
   <div class="acts"><span></span><span>${opts.noCancel?'':'<button id="dx">Cancelar</button> '}<button class="pri" id="dok">${opts.ok||'OK'}</button></span></div>`;
  $('#ov').classList.add('on');
  const back=()=>{opts.back?opts.back():closeModal()};
  if($('#dx'))$('#dx').onclick=back;
  $('#dok').onclick=()=>{const v=$('#dlg')?$('#dlg').value:true;if(cb(v)!==false&&!opts.keep)closeModal()};
  if(opts.confirm)$('#dok').focus();const d=$('#dlg');if(d){d.focus();if(opts.text&&opts.ro)d.select();if(!opts.text)d.onkeydown=e=>{if(e.key==='Enter')$('#dok').click()}}
}
function mailLink(to,sub,body){return 'mailto:'+encodeURIComponent(to.join(','))+'?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent(body)}
function mailDialog(title,to,sub,body,back){
  $('#modal').innerHTML=`<h3>${esc(title)}</h3>
  <label>Para</label><input id="ml_to" value="${esc(to.join(', '))}" readonly>
  <label>Assunto</label><input id="ml_sub" value="${esc(sub)}">
  <label>Mensagem (pode editar)</label><textarea id="ml_body" rows="9">${esc(body)}</textarea>
  <div class="hint">O sistema não envia e-mails sozinho: o botão abaixo abre o seu programa de e-mail com a mensagem pronta. Se ele não abrir, use “Copiar mensagem”.</div>
  <div class="acts"><button id="ml_back">Voltar</button><span><button id="ml_copy">Copiar mensagem</button> <a class="btn pri" id="ml_go" href="#">✉ Abrir no e-mail</a></span></div>`;
  $('#ov').classList.add('on');
  const upd=()=>{$('#ml_go').href=mailLink(to,$('#ml_sub').value,$('#ml_body').value)};
  upd();$('#ml_sub').oninput=upd;$('#ml_body').oninput=upd;
  $('#ml_back').onclick=back;
  $('#ml_copy').onclick=async()=>{try{await navigator.clipboard.writeText($('#ml_body').value);toast('Mensagem copiada')}catch(e){$('#ml_body').select();toast('Selecione e copie com Ctrl+C')}};
}
function mailText(t,o,note){
  const dt=dateTxt(t).replace('🔁 ','');
  const ppl=t.assignees.map(a=>(mem(a)||{}).name).filter(Boolean).join(', ');
  const url=location.origin+'/t/'+t.id;
  let s=(note?note+'\n\n':'Olá!\n\n')+`Atividade: ${t.title}\nProjeto: ${(S.projects.find(p=>p.id===t.pid)||{}).name||''}`;
  if(o.det)s+=`\nStatus: ${stOf(t.status).n} | Prioridade: ${PR[t.prio]}${dt?'\nPrazo: '+dt:''}${ppl?'\nResponsáveis: '+ppl:''}${t.desc?'\n\n'+t.desc:''}`;
  if(o.com&&(t.comments||[]).length)s+='\n\nComentários:\n'+t.comments.slice(-5).map(c=>`- ${c.by||'Alguém'} (${new Date(c.ts).toLocaleDateString('pt-BR')}): ${c.text}`).join('\n');
  if(o.img&&(t.imgs||[]).length)s+=`\n\n${t.imgs.length} imagem(ns) anexada(s) — veja no sistema.`;
  return s+'\n\nAbrir no sistema: '+url;
}
function notifyDialog(id){
  const t=byId(id);if(!t)return;
  const cands=S.members.filter(m=>validEmail(m.email||'')&&m.access!==false);
  const pre=new Set(t.assignees),ncom=(t.comments||[]).length,nimg=(t.imgs||[]).length;
  const M=$('#modal');M.dataset.kind='notify';M.style.width='';editing=null;closePop();window._ntId=id;
  M.innerHTML=`<h3>Avisar por e-mail</h3><div class="hint" style="margin:-6px 0 4px">${esc(t.title)}</div>
  <label>Para quem</label><div class="alist" style="max-height:210px;overflow:auto">${cands.map(m=>`<label class="arow"><input type="checkbox" class="nt_to" value="${m.id}" ${pre.has(m.id)?'checked':''}><span class="av" style="background:${m.color};border-color:transparent">${esc(ini(m.name))}</span><span class="an"><b>${esc(m.name)}</b><small>${esc(m.email)}</small></span>${pre.has(m.id)?'<em>responsável</em>':''}</label>`).join('')||'<div class="hint" style="padding:14px">Ninguém tem e-mail cadastrado. Adicione em Configurações → Membros.</div>'}</div>
  <label>Assunto</label><input id="nt_subj" value="${esc('Atividade: '+t.title)}" maxlength="150">
  <label>Recado (opcional)</label><textarea id="nt_note" rows="3" placeholder="Escreva um recado para quem vai receber…"></textarea>
  <label>Enviar junto</label>
  <div class="nopts"><label class="chk"><input type="checkbox" id="nt_det" checked> Detalhes (status, prazo, descrição)</label><label class="chk"><input type="checkbox" id="nt_com" ${ncom?'checked':'disabled'}> Comentários (${ncom})</label><label class="chk"><input type="checkbox" id="nt_savecom"> Guardar o recado como comentário na atividade</label><label class="chk"><input type="checkbox" id="nt_img" ${nimg?'checked':'disabled'}> Imagens (${nimg})</label></div>
  <div class="hint" id="nt_msg"></div>
  <div class="acts"><span><button id="nt_back" type="button">Voltar</button></span><span><button class="pri" id="nt_send" type="button" ${cands.length?'':'disabled'}>Enviar e-mail</button></span></div>
  <div class="hint" style="margin-top:10px">O e-mail sai pelo próprio sistema (não do seu e-mail pessoal) e as respostas chegam a você. <a href="#" id="nt_mailto" style="color:var(--ac)">Prefiro abrir no meu programa de e-mail</a></div>`;
  $('#ov').classList.add('on');
}
function ntRead(){return{ids:[...document.querySelectorAll('.nt_to:checked')].map(x=>x.value),subject:($('#nt_subj').value||'').trim(),note:($('#nt_note').value||'').trim(),det:$('#nt_det').checked,com:$('#nt_com').checked,img:$('#nt_img').checked,save:!!($('#nt_savecom')&&$('#nt_savecom').checked)}}
function ntMailto(){
  const t=byId(window._ntId),o=ntRead();if(!t)return;
  const to=o.ids.map(i=>(mem(i)||{}).email).filter(Boolean);if(!to.length){toast('Escolha ao menos uma pessoa.');return}
  location.href='mailto:'+to.join(',')+'?subject='+encodeURIComponent(o.subject)+'&body='+encodeURIComponent(mailText(t,o,o.note).slice(0,1700));
}
document.addEventListener('click',async e=>{
  const g=s=>e.target.closest&&e.target.closest(s);
  if(g('#nt_back')){e.stopImmediatePropagation();openTask(window._ntId);return}
  if(g('#nt_mailto')){e.stopImmediatePropagation();e.preventDefault();ntMailto();return}
  if(g('#nt_send')){
    e.stopImmediatePropagation();const t=byId(window._ntId),o=ntRead();if(!t)return;
    if(!o.ids.length){toast('Escolha ao menos uma pessoa.');return}
    if(!CLOUD){ntMailto();return}
    const bt=$('#nt_send'),msg=$('#nt_msg');bt.disabled=true;bt.textContent='Enviando…';msg.textContent='';msg.style.color='';
    try{
      let com=o.com;
      if(o.save&&o.note){t.comments.push({id:uid(),text:o.note,ts:Date.now(),by:(mem(S.me)||{}).name||'Você'});com=true}
      msg.textContent='Salvando as alterações…';await flushSync();msg.textContent='';
      const r=await fnCall({action:'notify',task_id:t.id,member_ids:o.ids,subject:o.subject,note:o.note,details:o.det,comments:com,images:o.img});
      closeModal();render();toast('✔ E-mail enviado'+(r&&r.sent?' para '+r.sent+' pessoa'+(r.sent>1?'s':''):''));
    }catch(x){
      bt.disabled=false;bt.textContent='Enviar e-mail';
      if(fnMissing(x)||/smtp_not_configured/.test(x.message||'')){msg.style.color='var(--amb)';msg.innerHTML='O envio pelo sistema ainda não foi ativado pelo administrador (Configurações → Geral → E-mail do sistema explica em 2 minutos). Enquanto isso, use “Prefiro abrir no meu programa de e-mail”.'}
      else{msg.style.color='var(--red)';msg.textContent=trErr(x.message)}
    }
    return}
},true);

/* ---------- Equipe e Etiquetas ---------- */
function openTags(){
  if(!can('tags')){deny('tags');return}
  editing=null;closePop();
  $('#modal').innerHTML=`<h3>🏷 Etiquetas</h3>
  ${S.tags.map(g=>`<div style="display:flex;gap:10px;align-items:center;margin:8px 0"><span class="ac" style="background:${g.color};width:90px;max-width:90px;text-align:center">${esc(g.name)}</span><input data-gn="${g.id}" value="${esc(g.name)}" style="flex:1">
   <span style="white-space:nowrap">${COLORS.map(c=>`<span class="sw ${c===g.color?'on':''}" data-gc="${g.id}|${c}" style="background:${c}"></span>`).join('')}</span>
   <small style="color:var(--mu);width:60px">${S.tasks.filter(t=>t.tags.includes(g.id)).length} atividade(s)</small><button class="ghost" data-gd="${g.id}" title="Excluir etiqueta">🗑</button></div>`).join('')||'<div style="color:var(--mu)">Nenhuma etiqueta ainda.</div>'}
  <input id="newTag" placeholder="+ Nova etiqueta (Enter)" style="margin-top:10px">
  <div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
}

/* ---------- export ---------- */
function csv(){
  const q=s=>'"'+String(s).replace(/"/g,'""')+'"';
  const rows=[['Projeto','Caminho','Título','Status','Prioridade','Responsáveis','Etiquetas','Início','Hora início','Prazo','Hora prazo','Repete','Concluída em','Estimativa (h)','Registrado (h)','Descrição']];
  S.tasks.forEach(t=>{let p=[],x=t;while(x.parent){x=byId(x.parent);p.unshift(x.title)}
    rows.push([(S.projects.find(a=>a.id===t.pid)||{}).name,p.join(' > '),t.title,stOf(t.status).n,PR[t.prio],t.assignees.map(a=>(mem(a)||{}).name).filter(Boolean).join(', '),t.tags.map(a=>(tagOf(a)||{}).name).filter(Boolean).join(', '),t.start,t.startTime,t.due,t.dueTime,repLabel(t),t.doneAt?ymd(new Date(t.doneAt)):'',t.est||'',Math.round((t.spent||0)*100)/100||'',t.desc]);});
  return rows.map(r=>r.map(q).join(';')).join('\n');
}

/* ----- menu suspenso genérico ----- */
function closeMenu(){const m=$('#menu');if(m)m.remove()}
function openMenu(anchor,items,o={}){
  closeMenu();const m=document.createElement('div');m.id='menu';
  m.innerHTML=items.map((it,i)=>it==='-'?'<div class="msep"></div>':`<button type="button" class="mit ${it.on?'on':''}" data-mi2="${i}" ${it.dis?'disabled':''}>${it.sw?`<i class="msw" style="background:${it.sw}"></i>`:it.ic?ic(it.ic):''}<span>${esc(it.l)}</span>${it.h?`<small>${esc(it.h)}</small>`:''}${it.on?ic('check',16):''}</button>`).join('');
  document.body.appendChild(m);
  const r=anchor.getBoundingClientRect(),w=m.offsetWidth,h=m.offsetHeight;
  let x,y;
  if(o.side==='right'){x=Math.min(r.right+8,innerWidth-w-8);y=Math.max(8,Math.min(r.bottom-h,innerHeight-h-8))}
  else if(o.align==='left'){x=Math.max(8,Math.min(r.left,innerWidth-w-8));y=Math.min(r.bottom+6,innerHeight-h-8)}
  else{x=Math.max(8,Math.min(r.right-w,innerWidth-w-8));y=Math.min(r.bottom+6,innerHeight-h-8)}
  m.style.left=x+'px';m.style.top=y+'px';
  m.onclick=e=>{const b=e.target.closest('[data-mi2]');if(!b)return;const it=items[+b.dataset.mi2];closeMenu();if(it&&it.f)setTimeout(()=>it.f(),0)};
  setTimeout(()=>{const off=e=>{if(!e.target.closest('#menu')){closeMenu();document.removeEventListener('mousedown',off,true)}};document.addEventListener('mousedown',off,true);document.addEventListener('keydown',function k(e){if(e.key==='Escape'){closeMenu();document.removeEventListener('keydown',k,true)}},true)},0);
}
function userMenu(){
  const m=mem(S.me),email=(sess&&sess.user&&sess.user.email)||(m&&m.email)||'';
  const B=id=>()=>{const b=$(id);if(b)b.click()};
  openMenu($('#bUser'),[
    {l:m?m.name:'Conta',h:ROLES[role()].n,dis:true},{l:email,dis:true},'-',
    {l:'Configurações',ic:'sliders',f:B('#bSet')},
    ...(can('members')?[{l:'Equipe e convites',ic:'people',f:B('#bTeam')}]:[]),
    ...(can('tags')?[{l:'Etiquetas',ic:'tag',f:B('#bTags')}]:[]),
    ...(can('rules')?[{l:'Automações',ic:'zap',f:B('#bRules')}]:[]),'-',
    {l:'Importar e exportar',ic:'download',f:()=>openDataHub()},
'-',
    {l:'Ajuda e atalhos',ic:'help',f:()=>toggleHelp()},
    {l:'Alterar senha',ic:'lock',f:()=>changePwDialog()},{l:'Sair da conta',ic:'x',f:()=>cloudLogout()}
  ],{side:'right'});
}
const setTheme=k=>{S.theme=k;save();render()};
const themeItems=()=>THEMES.map(([k,n,d,c])=>({l:n,sw:c[2],on:S.theme===k,f:()=>setTheme(k)}));

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);let el;
  if(el=g('[data-pren]')){e.stopImmediatePropagation();e.preventDefault();renameProj(el.dataset.pren);return}
  if(el=g('[data-qdel]')){e.stopImmediatePropagation();e.preventDefault();quickDelete(el.dataset.qdel);return}
  if(!g('#pop')&&!g('[data-pop]'))closePop();
  const rw=g('[data-row],.card');
  if(rw&&!g('#pop')&&S.view!=='dash'){
    const id=rw.dataset.row||rw.dataset.t;
    if(e.ctrlKey||e.metaKey){sel.has(id)?sel.delete(id):sel.add(id);cur=id;anchor=id;markSel();return}
    if(e.shiftKey){setCur(id,true);return}
    if(!(sel.has(id)&&sel.size>1&&g('button,input,[data-pop]'))){cur=id;anchor=id;sel=new Set([id]);markSel()}
    if($('#ov').classList.contains('on')&&$('#modal').dataset.kind==='task'&&id!==editing&&!g('button,input,select,textarea,[data-pop],.tg,.grip,.gut')){e.stopImmediatePropagation();e.preventDefault();openTask(id);return}
  }
  if(e.target.id==='ov'){if(editing)collect();closeModal();render();return}
  /* dentro do popover */
  if(g('#pop')){
    const t=pop&&byId(pop.id);
    if(el=g('[data-ps]')){ptargets().forEach(x=>setStatus(x,el.dataset.ps));closePop();render();return}
    if(el=g('[data-pp]')){ptargets().forEach(x=>x.prio=+el.dataset.pp);closePop();render();return}
    if(el=g('[data-pj]')){const ids=ptargets().map(x=>x.id);closePop();moveToProject(ids,el.dataset.pj);return}
    if(el=g('[data-mact]')){const a=el.dataset.mact;closePop();act(a);return}
    if(el=g('[data-act]')){const a=el.dataset.act;
      if(a==='team'){closePop();openTeam()}
      else if(a==='tags'){closePop();openTags()}
      else if(a==='clear'){ptargets().forEach(x=>{x.start=x.startTime=x.due=x.dueTime='';x.repeat=null});renderPop();render()}
      return}
    return;
  }
  if((el=g('.cell.col-i,.cell.col-ih,.cell.col-d,.cell.col-dh,.cell.col-u'))&&el.dataset.pop&&canEdit(byId(el.dataset.pop.split(':')[1]))){closePop();startCellEdit(el);return}
  if(el=g('[data-pop]')){const[ty,id]=el.dataset.pop.split(':');if(pop&&pop.type===ty&&pop.id===id)closePop();else openPop(ty,id,el);return}
  if(el=g('[data-descid]')){const id=el.dataset.descid;if(canEdit(byId(id)))startDescEdit(el);else openTask(id);return}
  if(el=g('[data-cid]')){copyLink(el.dataset.cid,'ID '+el.dataset.cid+' copiado');return}
  if(el=g('[data-ie]')){if(matchMedia('(hover:none),(max-width:900px)').matches&&el.closest('.row')&&!el.closest('.row.root')){openTask(el.dataset.ie);return}startEdit(el);return}
  if(el=g('[data-pr]')){const t=byId(el.dataset.pr);t.prio=t.prio%3+1;render();return}
  if(el=g('[data-ds]')){S.dash=el.dataset.ds;render();return}
  if(el=g('.pi')){S.cur=el.dataset.id;adding=null;zoom=null;cur=null;sel=new Set();if(S.view==='smart')S.view='list';else if(S.view==='settings')S.view=(S.prevView&&!['smart','settings'].includes(S.prevView))?S.prevView:'list';render();if(CLOUD&&Date.now()-(cloud.last||0)>4000)pollPull(true);return}
  if(el=g('[data-tg]')){const t=byId(el.dataset.tg);t.open=t.open===false;render();return}
  if(el=g('[data-add]')){adding=el.dataset.add;if(adding!=='root'){const t=byId(adding);if(t)t.open=true}render();return}
  if(el=g('[data-mv]')){const[a,b]=el.dataset.mv.split(':');move(a,+b);render();return}
  if(el=g('[data-pm]')){el.classList.toggle('on');return}
  if(el=g('[data-pg]')){el.classList.toggle('on');return}
  if(el=g('[data-mc]')){const[id,c]=el.dataset.mc.split('|');mem(id).color=c;save();openTeam();return}
  if(el=g('[data-gc]')){const[id,c]=el.dataset.gc.split('|');tagOf(id).color=c;save();openTags();return}
  if(el=g('[data-md]')){const id=el.dataset.md;S.members=S.members.filter(m=>m.id!==id);S.tasks.forEach(t=>t.assignees=t.assignees.filter(a=>a!==id));save();openTeam();return}
  if(el=g('[data-gd]')){const id=el.dataset.gd;S.tags=S.tags.filter(x=>x.id!==id);S.tasks.forEach(t=>t.tags=t.tags.filter(a=>a!==id));save();openTags();return}
  if(el=g('[data-mst]')){const m=mem(el.dataset.mst);m.status=m.status==='invited'?'active':'invited';save();openTeam();return}
  if(el=g('[data-mi]')){const m=mem(el.dataset.mi);if(!validEmail(m.email||'')){toast('Informe um e-mail válido para '+m.name);return}inviteDialog(m);return}
  if(g('#inv_go')){
    const em=$('#inv_email').value.trim();if(!validEmail(em)){toast('Digite um e-mail válido');$('#inv_email').focus();return}
    let m=S.members.find(x=>(x.email||'').toLowerCase()===em.toLowerCase());
    if(!m){const nm=$('#inv_name').value.trim()||em.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      m={id:uid(),name:nm,email:em,color:COLORS[S.members.length%COLORS.length],status:'invited'};S.members.push(m);save();render()}
    inviteDialog(m);return}
  if(el=g('[data-me-set]')){S.me=S.me===el.dataset.meSet?'':el.dataset.meSet;save();openTeam();return}
  if(el=g('[data-cdel]')){collect();const k=byId(editing);k.comments=k.comments.filter(c=>c.id!==el.dataset.cdel);openTask(editing);render();return}
  if(el=g('[data-undo]')){restore(+el.dataset.undo);return}
  if(g('#bHelp')){toggleHelp();return}
  if(g('#t_ok')||g('#g_ok')){closeModal();render();return}
  if(el=g('[data-t]')){if(editing)collect();openTask(el.dataset.t);return}
  if(g('#m_ok')||g('#m_x')){collect();closeModal();render();return}
  if(g('#m_link')){copyLink(location.origin+'/t/'+editing);return}
  if(g('#m_mail')){collect();const cm=$('#m_comment'),tx=cm&&cm.value.trim(),tt=byId(editing);if(tx&&tt){tt.comments.push({id:uid(),text:tx,ts:Date.now(),by:(mem(S.me)||{}).name||'Você'});cm.value=''}render();notifyDialog(editing);return}
  if(g('#m_del')){collect();const id=editing;ask('Excluir esta atividade e todas as subatividades?','',()=>{delTask(id);editing=null;render()},{confirm:1,ok:'Excluir',back:()=>openTask(id)});return}
});
document.addEventListener('change',e=>{
  const c=e.target.dataset,tg=e.target;
  if(tg.closest('#pop')&&pop){
    if(!byId(pop.id))return;const TT=ptargets();
    if(c.pa){TT.forEach(t=>{t.assignees=tg.checked?[...new Set([...t.assignees,c.pa])]:t.assignees.filter(x=>x!==c.pa)});render();return}
    if(c.pt){TT.forEach(t=>{t.tags=tg.checked?[...new Set([...t.tags,c.pt])]:t.tags.filter(x=>x!==c.pt)});render();return}
    if(c.pf){
      const f=c.pf;
      TT.forEach(t=>{
        if(f==='rep'){t.repeat=tg.value?{freq:tg.value,every:(t.repeat&&t.repeat.every)||1}:null}
        else if(f==='every'){if(t.repeat)t.repeat.every=Math.max(1,+tg.value||1)}
        else t[f]=tg.value;
        normDates(t)});
      render();if(['rep','every','due','start'].includes(f))renderPop();return}
    return;
  }
  if(c.ck){completeTask(byId(c.ck),tg.checked);render()}
  if(c.mck){completeTask(byId(c.mck),tg.checked);collect();openTask(editing);render()}
  if(['fm','ft','fs','fp'].includes(tg.id))render();
});
document.addEventListener('input',e=>{
  const c=e.target.dataset;
  if(c.mn){mem(c.mn).name=e.target.value;save()}
  if(c.me){mem(c.me).email=e.target.value.trim();save()}
  if(c.gn){tagOf(c.gn).name=e.target.value;save()}
  if(e.target.id==='inv_link'){S.link=e.target.value.trim();save()}
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(pop){closePop();return}
    if(adding){adding=null;render();return}
    if($('#ov').classList.contains('on')){if(editing)collect();closeModal();render();return}if(sel.size){sel=new Set();cur=null;markSel()}return}
  if(e.key!=='Enter')return;
  if(e.target.id==='m_comment'){if(!e.shiftKey){e.preventDefault();addComment()}return}
  const t=e.target,v=t.value&&t.value.trim();if(!v)return;
  if(t.dataset.addin){addTask(v,t.dataset.addin);adding=t.dataset.addin;render()}
  else if(t.id==='m_sub'){collect();addTask(v,editing);openTask(editing);render()}
  else if(t.id==='m_newtag'){collect();const g=createTag(v);const k=byId(editing);if(g&&!k.tags.includes(g.id))k.tags.push(g.id);openTask(editing);render()}
  else if(t.id==='pop_new'&&pop){const k=byId(pop.id),g=createTag(v);if(g&&!k.tags.includes(g.id))k.tags.push(g.id);render();renderPop();const i=$('#pop_new');if(i)i.focus()}
  else if(t.id==='newMember'){S.members.push({id:uid(),name:v,email:'',color:COLORS[S.members.length%COLORS.length],status:'active'});save();openTeam();setTimeout(()=>$('#newMember')&&$('#newMember').focus(),0)}
  else if(t.id==='newTag'){createTag(v);save();openTags();setTimeout(()=>$('#newTag')&&$('#newTag').focus(),0);render()}
  else if(t.id==='inv_email'||t.id==='inv_name')$('#inv_go').click();
});
$('#q').oninput=render;
$('#vl').onclick=()=>{S.view='list';render()};
$('#vb').onclick=()=>{S.view='board';render()};
$('#vd').onclick=()=>{S.view='dash';render()};
$('#bTeam').onclick=openTeam;
$('#bTags').onclick=openTags;
$('#addProj').onclick=()=>ask('Nome do novo projeto','',v=>{if(!v.trim())return false;const id=uid();S.projects.push({id,name:v.trim()});S.cur=id;adding=null;render()});
$('#pswitch').onclick=()=>openPalette('proj');
$('#pname').ondblclick=e=>{e.stopPropagation();if(!['smart','settings'].includes(S.view))renameProj()};
$('#bPal').onclick=()=>openPalette();
$('#pedit').onclick=()=>renameProj();
$('#delProj').onclick=()=>{
  if(S.projects.length<2){ask('Mantenha ao menos um projeto.','',()=>{},{confirm:1,noCancel:1});return}
  ask('Excluir o projeto "'+proj().name+'" e todas as suas atividades?','',()=>{const id=proj().id;S.tasks=S.tasks.filter(t=>t.pid!==id);S.projects=S.projects.filter(p=>p.id!==id);S.cur=S.projects[0].id;render()},{confirm:1,ok:'Excluir'})};
$('#bExp').onclick=()=>ask('Exportar JSON — copie (Ctrl+C) e salve em um arquivo .json',JSON.stringify(S,null,1),()=>{},{text:1,ro:1,ok:'Fechar',noCancel:1});
$('#bCsv').onclick=()=>ask('Exportar CSV (separador “;”) — copie e cole em um arquivo .csv ou no Excel',csv(),()=>{},{text:1,ro:1,ok:'Fechar',noCancel:1});
$('#bImp').onclick=()=>ask('Importar — cole o JSON exportado (substitui os dados atuais)','',v=>{
  try{const d=JSON.parse(v);if(!d.projects||!d.tasks)throw 0;S=migrate(d);adding=null;render()}
  catch(x){ask('JSON inválido. Nada foi alterado.','',()=>{},{confirm:1,noCancel:1});return false}},{text:1,ok:'Importar'});

/* drag & drop no quadro: muda o status */
let drag=null;
document.addEventListener('dragstart',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){drag=c.dataset.t;c.classList.add('dragging');e.dataTransfer.setData('text/plain',drag)}});
document.addEventListener('dragend',()=>{drag=null;document.querySelectorAll('.dragging,.over').forEach(x=>x.classList.remove('dragging','over'))});
document.addEventListener('dragover',e=>{const c=e.target.closest&&e.target.closest('.col');if(c&&drag){e.preventDefault();document.querySelectorAll('.over').forEach(x=>x!==c&&x.classList.remove('over'));c.classList.add('over')}});
document.addEventListener('drop',e=>{const c=e.target.closest&&e.target.closest('.col');if(!c||!drag)return;e.preventDefault();setStatus(byId(drag),c.dataset.st);drag=null;render()});
/* ====================== ATALHOS DE TECLADO ====================== */
let cur=null,anchor=null,sel=new Set(),zoom=null,clip=null,lvl=null,hist=[];

const HELP=[
['Navegar',[['↑ , ↓ , PgUp , PgDn , Home , End','Mover o cursor entre as atividades'],['← , →','Na lista: mover entre as colunas da linha (← no nome recolhe / vai ao pai; → num grupo fechado expande)'],['Enter , F2','Editar a coluna marcada (no nome: renomear; nas outras: abre o seletor de responsável, etiqueta, status ou datas)'],['Espaço','Abrir / fechar o painel da atividade'],['Esc','Sai da coluna marcada / limpa a seleção'],['Tab , ⇧+Tab','Próxima / anterior'],['Ctrl+⇧+↑ , Ctrl+⇧+↓ , Ctrl+⇧+← , Ctrl+⇧+→','Mover-se no Quadro entre cartões e colunas']]],
['Reduzir ou expandir atividades',[['← , →','Recolher / expandir (← vai ao pai; → entra na 1ª subatividade)'],['⇧+← , ⇧+→','Recolher / expandir todas as subatividades'],['o','Alternar recolher / expandir'],['⇧+Alt+← , ⇧+Alt+→','Reduzir / expandir o projeto por nível']]],
['Selecionar várias atividades',[['⇧+↑ , ⇧+↓ , ⇧+PgUp , ⇧+PgDn','Estender a seleção'],['Ctrl+Clique , ⇧+Clique','Alternar / selecionar intervalo'],['Ctrl+A','Selecionar tudo'],['Esc','Limpar a seleção']]],
['Recuar atividade no modo de edição',[['Tab , ⇧+Tab','Ao editar o nome na lista: recuar / avançar nível']]],
['Mover atividades',[['Arrastar ⋮⋮','Mover com o mouse: borda de cima/baixo = mesmo nível · meio = vira subatividade'],['Ctrl+↑ , Ctrl+↓','Subir / descer entre irmãs'],['Ctrl+→ , Ctrl+←','Recuar (vira subatividade) / promover'],['Ctrl+PgUp , Ctrl+PgDn','Para o início / fim (o navegador pode capturar)']]],
['Administrar atividade selecionada',[['@','Definir responsável'],['?','Definir estado'],['#','Definir etiqueta (tag)'],['<','Definir datas / prazo / repetição'],['!','Definir prioridade'],['>','Mover para outro projeto'],['⇧+F10 , Menu','Menu de contexto (botão direito também)']]],
['Editar',[['F2 , Alt+Enter','Editar nome da atividade (F2 numa coluna marcada edita a coluna)'],['d , Ctrl+D','Editar descrição']]],
['Criar',[['q','Ir para a barra de adição rápida (linguagem natural)'],['t','Nova atividade no primeiro nível'],['Ctrl+Enter , Insert','Nova atividade (no mesmo nível) — com nada selecionado, Enter também cria'],['⇧+Enter','Nova subatividade'],['l','Adicionar sublista (seção filha)']]],
['Ações sobre as selecionadas',[['Ctrl+Del','Excluir'],['c','Comentar'],['Ctrl+M','Auto-atribuir (defina “eu” em Equipe 👤)'],['Ctrl+X , Ctrl+C , Ctrl+V','Cortar / copiar / colar'],['Ctrl+E','Selecionar todas as subatividades'],['Alt+P','Tornar subatividade da anterior'],['Ctrl+S','Transformar em seção'],['Ctrl+Alt+M','Transformar em marco'],['⇧+C , Ctrl+/','Concluir / reabrir'],['i','Mostrar ID e detalhes'],['*','Favoritar']]],
['Visualizar',[['=','Minhas atividades (filtro por “eu”)'],['Ctrl+K , Ctrl+B','Busca rápida: projetos, atividades, pessoas e comandos'],['s','Pesquisar atividades e comentários'],['Espaço','Abrir / fechar o painel de detalhes'],['[ , ]','Recolher / expandir o menu lateral'],['( , )','Alternar entre as vistas'],['1 , 2 , 3 , 4 , 5 , 6','Lista, Quadro, Calendário, Cronograma, Pessoas, Painel'],['Ctrl+.','Tela cheia'],['z','Zoom na atividade selecionada'],['a , ⇧+Esc','Menos zoom']]],
['Outros',[['Ctrl+Z','Lista de operações para desfazer'],['Alt+Q','Citar o texto selecionado no comentário (painel aberto)'],['Ctrl+P','Imprimir (impressão do navegador, com layout próprio)'],['F1','Esta ajuda']]]
];
const K=s=>s.split(' , ').map(x=>`<kbd>${esc(x)}</kbd>`).join(' ');
/* ----- cursor e seleção ----- */
const navIds=()=>[...document.querySelectorAll(S.view==='board'?'#view .card':'#view [data-row]')].map(e=>e.dataset.row||e.dataset.t);
function markSel(scroll){
  document.querySelectorAll('#view [data-row],#view .card').forEach(el=>{const id=el.dataset.row||el.dataset.t;el.classList.toggle('sel',sel.has(id));el.classList.toggle('cur',id===cur)});
  document.querySelectorAll('#view .cellsel').forEach(x=>x.classList.remove('cellsel'));
  if(ccol&&cur&&(S.view==='list'||S.view==='smart')){const row=document.querySelector(`#view [data-row="${cur}"]`);const c=row&&CELLS.find(c=>c[0]===ccol);const el=c&&row.querySelector(c[1]);if(el&&el.getClientRects().length)el.classList.add('cellsel');else if(row&&ccol!=='tt'){ccol=null}}
  if(scroll&&cur){const el=document.querySelector(`#view [data-row="${cur}"],#view .card[data-t="${cur}"]`);if(el)el.scrollIntoView({block:'nearest'})}
}
function setCur(id,extend){
  if(!id)return;const ids=navIds();
  if(extend){if(!anchor||!ids.includes(anchor))anchor=(cur&&ids.includes(cur))?cur:id;const a=ids.indexOf(anchor),b=ids.indexOf(id);sel=new Set(ids.slice(Math.min(a,b),Math.max(a,b)+1))}
  else{anchor=id;sel=new Set([id])}
  cur=id;markSel(true);
}
function step(kind,extend){
  const ids=navIds();if(!ids.length)return;
  const i=ids.indexOf(cur);
  if(i<0){setCur(ids[0],false);return}
  const n={up:i-1,down:i+1,pgup:i-10,pgdn:i+10,home:0,end:ids.length-1}[kind];
  setCur(ids[Math.max(0,Math.min(ids.length-1,n))],extend);
}
function boardStep(dx,dy){
  const cols=[...document.querySelectorAll('#view .col')].map(c=>[...c.querySelectorAll('.card')].map(x=>x.dataset.t));
  let ci=cols.findIndex(c=>c.includes(cur));
  if(ci<0){const f=cols.find(c=>c.length);if(f)setCur(f[0]);return}
  let ri=cols[ci].indexOf(cur);
  if(dy)ri=Math.max(0,Math.min(cols[ci].length-1,ri+dy));
  if(dx){let c=ci+dx;while(c>=0&&c<cols.length&&!cols[c].length)c+=dx;if(c<0||c>=cols.length)return;ci=c;ri=Math.min(ri,cols[ci].length-1)}
  setCur(cols[ci][ri]);
}
function selectAll(){const ids=navIds();if(!ids.length)return;sel=new Set(ids);cur=cur||ids[0];anchor=ids[0];markSel()}
let ccol=null;
const CELLS=[['tt','.tt'],['id','.col-id'],['a','.col-a'],['t','.col-t'],['s','.col-s'],['i','.col-i'],['ih','.col-ih'],['d','.col-d'],['dh','.col-dh'],['u','.col-u'],['ds','.col-ds']];
function cellVisible(row,k){const sel=CELLS.find(c=>c[0]===k)[1],el=row.querySelector(sel);return !!el&&el.getClientRects().length>0}
function visCells(){const row=document.querySelector(`#view [data-row="${cur}"]`);if(!row)return['tt'];return ['tt',...(S.cols?S.cols.order:CELLS.map(c=>c[0]).slice(1))].filter(k=>cellVisible(row,k))}
function cellMove(d){
  const v=visCells();let i=v.indexOf(ccol||'tt');i=Math.max(0,Math.min(v.length-1,i+d));ccol=v[i];markSel(true);
}
function typeCell(ch){
  const t=byId(cur),k=ccol||'tt';if(!t)return;
  if(!canEdit(t)){deny('edit');return}
  const row=document.querySelector(`#view [data-row="${cur}"]`);if(!row)return;
  const setv=(el,v)=>{if(el){el.value=v;el.setSelectionRange&&el.setSelectionRange(v.length,v.length);el.dispatchEvent(new Event('input',{bubbles:true}))}};
  if(k==='id')return;
  if(k==='tt'){const sp=row.querySelector('.tt');if(sp){startEdit(sp);setv(document.activeElement,ch)}return}
  if(k==='ds'){const c=row.querySelector('.col-ds');if(c){startDescEdit(c);setv(c.querySelector('textarea'),ch)}return}
  if(EDITCOLS.includes(k)){const c=row.querySelector('.col-'+k);if(c){startCellEdit(c);setv(c.querySelector('input'),ch)}return}
  popKey({a:'a',t:'t',s:'s'}[k]);
  const P=$('#pop'),q=norm(ch),rows=[...P.querySelectorAll('.pl')];
  const r=rows.find(x=>norm(x.textContent.trim()).startsWith(q));if(r){(r.querySelector('input[type=checkbox]')||r).focus()}
}
function clearCell(){
  const t=byId(cur),k=ccol;if(!t||!k)return;
  if(!canEdit(t)){deny('edit');return}
  const m={i:()=>{t.start='';t.startTime=''},ih:()=>{t.startTime=''},d:()=>{t.due='';t.dueTime=''},dh:()=>{t.dueTime=''},u:()=>{t.start='';t.due='';t.startTime='';t.dueTime=''},ds:()=>{t.desc=''},a:()=>{t.assignees=[]},t:()=>{t.tags=[]}}[k];
  if(!m)return;m();normDates(t);save();render();markSel();toast('Campo limpo');
}
function editCell(){
  const k=ccol||'tt';
  if(k==='tt'){act('edit');return}
  if(k==='id'){const t=byId(cur);if(t)copyLink(t.id,'ID '+t.id+' copiado');return}
  if(k==='ds'){const el=document.querySelector(`#view [data-row="${cur}"] .col-ds`);if(el&&canEdit(byId(cur)))startDescEdit(el);else openTask(cur);return}
  if(['i','ih','d','dh','u'].includes(k)){const el=document.querySelector(`#view [data-row="${cur}"] .col-${k}`);if(el&&canEdit(byId(cur))){startCellEdit(el);return}deny('edit');return}
  popKey({a:'a',t:'t',s:'s'}[k]);
}
function leftKey(){const t=byId(cur);if(!t)return;if(kidsOf(t.id).length&&t.open!==false){t.open=false;render()}else if(t.parent&&navIds().includes(t.parent))setCur(t.parent)}
function rightKey(){const t=byId(cur);if(!t)return;const ks=kidsOf(t.id);if(!ks.length)return;if(t.open===false){t.open=true;render()}else if(navIds().includes(ks[0].id))setCur(ks[0].id)}
function subtreeOpen(open){targets().forEach(i=>[byId(i),...desc(i)].forEach(x=>x.open=open));render()}
function levelAll(d){const all=ptasks(),mx=Math.max(0,...all.map(depthOf));if(lvl===null)lvl=mx+1;lvl=Math.max(0,Math.min(mx+1,lvl+d));all.forEach(t=>t.open=depthOf(t)<lvl);toast('Níveis expandidos: '+lvl+' de '+(mx+1));render()}

/* ----- estrutura ----- */
function treeOrder(pid){const r=[];(function w(par){S.tasks.filter(t=>t.pid===pid&&(t.parent||null)===par).forEach(t=>{r.push(t.id);w(t.id)})})(null);return r}
const targets=()=>(sel.size?[...sel]:(cur?[cur]:[])).filter(byId);
function topT(){const ids=targets(),set=new Set(ids),ord=treeOrder(proj().id);return ids.filter(id=>{let p=byId(id).parent;while(p){if(set.has(p))return false;p=byId(p).parent}return true}).sort((a,b)=>ord.indexOf(a)-ord.indexOf(b))}
const sibs=t=>S.tasks.filter(x=>x.pid===t.pid&&(x.parent||null)===(t.parent||null));
function indent(id){const t=byId(id),s=sibs(t),i=s.indexOf(t);if(i<1)return false;const p=s[i-1];S.tasks=S.tasks.filter(x=>x!==t);const ks=kidsOf(p.id),ref=ks.length?ks[ks.length-1]:p;S.tasks.splice(S.tasks.indexOf(ref)+1,0,t);t.parent=p.id;p.open=true;return true}
function outdent(id){const t=byId(id);if(!t.parent)return false;const p=byId(t.parent);S.tasks=S.tasks.filter(x=>x!==t);S.tasks.splice(S.tasks.indexOf(p)+1,0,t);t.parent=p.parent||null;return true}
function moveEdge(id,dir){let g=200;while(g--&&move(id,dir)!==false);}
function moveToProject(ids,pid){
  const tops=ids.map(byId).filter(Boolean);if(!tops.length)return;
  tops.forEach(t=>{[t,...desc(t.id)].forEach(x=>x.pid=pid);t.parent=null});
  const name=(S.projects.find(p=>p.id===pid)||{}).name;
  cur=null;sel=new Set();render();toast(tops.length+' atividade(s) movida(s) para “'+name+'”');
}
function cloneTree(id,parent,pid){
  const out=[];
  const walk=(oid,par)=>{const o=byId(oid);const n=mkTask({...JSON.parse(JSON.stringify(o)),id:uid(),pid,parent:par,created:Date.now(),doneLog:[],doneAt:o.status==='done'?Date.now():null});out.push(n);kidsOf(oid).forEach(k=>walk(k.id,n.id))};
  walk(id,parent);return out;
}
function pasteClip(){
  if(!clip||!clip.ids.length){toast('Nada copiado — use Ctrl+C ou Ctrl+X');return}
  const ref=cur&&byId(cur);
  const pid=ref?ref.pid:proj().id,parent=ref?ref.parent:(zoom||null);
  let tops=[];
  if(clip.mode==='cut'){
    const objs=clip.ids.map(byId).filter(Boolean);
    if(ref&&objs.some(o=>o===ref||desc(o.id).some(d=>d===ref))){toast('Não é possível colar dentro da própria atividade');return}
    const moved=objs.flatMap(o=>[o,...desc(o.id)]);
    S.tasks=S.tasks.filter(x=>!moved.includes(x));
    moved.forEach(x=>x.pid=pid);objs.forEach(o=>o.parent=parent);
    const idx=ref?S.tasks.indexOf(ref)+1:S.tasks.length;
    S.tasks.splice(idx,0,...moved);tops=objs;clip=null;
  }else{
    const clones=clip.ids.filter(byId).map(i=>cloneTree(i,parent,pid));
    const idx=ref?S.tasks.indexOf(ref)+1:S.tasks.length;
    S.tasks.splice(idx,0,...clones.flat());tops=clones.map(c=>c[0]);
  }
  if(parent&&byId(parent))byId(parent).open=true;
  sel=new Set(tops.map(t=>t.id));cur=tops[0].id;anchor=cur;
  render();markSel(true);toast(tops.length+' atividade(s) coladas');
}

/* ----- popover por teclado ----- */
function ptargets(){if(!pop)return [];const ids=(sel.size>1&&sel.has(pop.id))?[...sel]:[pop.id];return ids.map(byId).filter(Boolean)}
function popKey(type){
  const id=cur||targets()[0];
  if(!id||!byId(id)){toast('Selecione uma atividade (clique ou use ↑ ↓)');return}
  if(!cur){cur=id;sel=new Set([id])}
  const el=document.querySelector(`#view [data-pop="${type}:${id}"]`)||document.querySelector(`#view [data-row="${id}"],#view .card[data-t="${id}"]`);
  if(!el){toast('Mude para a visão Lista ou Quadro');return}
  openPop(type,id,el);
  const P2=$('#pop'),mark=[...P2.querySelectorAll('.pl[tabindex]')].find(x=>/✓/.test(x.textContent)),f=mark||P2.querySelector('input,select,.pl[tabindex]');if(f)f.focus();
}

/* ----- ações ----- */
function act(name){
  if(name.startsWith('pop:')){popKey(name.slice(4));return}
  const tg=targets(),first=cur||tg[0];
  if(!actAllowed(name,tg,first))return;
  const need=()=>{if(!first||!byId(first)){toast('Selecione uma atividade (clique ou use ↑ ↓)');return false}return true};
  const needSel=()=>{if(!tg.length){need();return false}return true};
  switch(name){
    case 'edit':{if(!need())return;const sp=document.querySelector(`#view [data-ie="${first}"]`);sp?startEdit(sp):openTask(first);return}
    case 'panel':if(need())openTask(first);return;
    case 'desc':if(!need())return;openTask(first);setTimeout(()=>{const x=$('#m_desc');if(x)x.focus()},0);return;
    case 'comment':if(!need())return;openTask(first);setTimeout(()=>{const x=$('#m_comment');if(x)x.focus()},0);return;
    case 'addroot':S.view='list';adding=zoom||'root';render();return;
    case 'add':{S.view='list';const t=first&&byId(first);adding=t?(t.id===zoom?t.id:(t.parent||(zoom||'root'))):(zoom||'root');render();return}
    case 'addsub':{if(!need())return;S.view='list';adding=first;byId(first).open=true;render();return}
    case 'sublist':{if(!need())return;S.view='list';const p=byId(first);const n=mkTask({pid:p.pid,parent:p.id,title:'Nova sublista',sec:true});S.tasks.push(n);p.open=true;cur=n.id;anchor=n.id;sel=new Set([n.id]);render();const sp=document.querySelector(`[data-ie="${n.id}"]`);if(sp)startEdit(sp);return}
    case 'del':{if(!needSel())return;const tops=topT();ask(`Excluir ${tops.length} atividade(s) selecionada(s) e todas as suas subatividades?`,'',()=>{tops.forEach(delTask);sel=new Set();cur=null;render()},{confirm:1,ok:'Excluir'});return}
    case 'done':{if(!needSel())return;const all=tg.every(i=>byId(i).status==='done');tg.forEach(i=>completeTask(byId(i),!all));render();return}
    case 'self':{if(!needSel())return;if(!S.me||!mem(S.me)){toast('Defina quem é você em Equipe (botão 👤)');openTeam();return}
      const all=tg.every(i=>byId(i).assignees.includes(S.me));
      tg.forEach(i=>{const t=byId(i);t.assignees=all?t.assignees.filter(x=>x!==S.me):[...new Set([...t.assignees,S.me])]});render();toast(all?'Removido de você':'Atribuído a você');return}
    case 'copy':case 'cut':{if(!needSel())return;clip={mode:name,ids:topT()};toast((name==='copy'?'Copiadas ':'Recortadas ')+clip.ids.length+' atividade(s) — Ctrl+V cola');return}
    case 'paste':pasteClip();return;
    case 'selsub':{if(!needSel())return;const s=new Set(tg);tg.forEach(i=>desc(i).forEach(d=>s.add(d.id)));sel=s;markSel();return}
    case 'indent':{if(!needSel())return;let n=0;topT().forEach(i=>{if(indent(i))n++});if(!n)toast('Não há atividade anterior no mesmo nível para recuar');render();return}
    case 'outdent':{if(!needSel())return;let n=0;topT().reverse().forEach(i=>{if(outdent(i))n++});if(!n)toast('Já está no primeiro nível');render();return}
    case 'mup':{if(!needSel())return;topT().forEach(i=>move(i,-1));render();markSel(true);return}
    case 'mdown':{if(!needSel())return;topT().reverse().forEach(i=>move(i,1));render();markSel(true);return}
    case 'mtop':{if(!needSel())return;topT().reverse().forEach(i=>moveEdge(i,-1));render();markSel(true);return}
    case 'mbottom':{if(!needSel())return;topT().forEach(i=>moveEdge(i,1));render();markSel(true);return}
    case 'section':{if(!needSel())return;tg.forEach(i=>{const t=byId(i);t.sec=!t.sec});render();return}
    case 'milestone':{if(!needSel())return;tg.forEach(i=>{const t=byId(i);t.ms=!t.ms});render();return}
    case 'info':if(need())infoDialog(first);return;
    case 'toggle':{if(!needSel())return;tg.forEach(i=>{const t=byId(i);if(kidsOf(i).length)t.open=t.open===false});render();return}
    case 'zoom':{if(!need())return;zoom=first;S.view='list';render();toast('Zoom ativo — “a” ou ⇧+Esc para sair');return}
    case 'unzoom':{if(!zoom)return;const z=byId(zoom);zoom=(z&&z.parent&&byId(z.parent))?z.parent:null;render();return}
    case 'mine':{if(!S.me||!mem(S.me)){toast('Defina quem é você em Equipe (botão 👤)');openTeam();return}
      const f=$('#fm');f.value=f.value===S.me?'':S.me;if(S.view==='dash')S.view='list';render();toast(f.value?'Minhas atividades: filtro ligado':'Minhas atividades: filtro desligado');return}
    case 'star':{if(!needSel())return;const all=tg.every(i=>byId(i).star);tg.forEach(i=>byId(i).star=!all);render();return}
    case 'ctx':if(need())popKey('m');return;
  }
}
const zoomBar=()=>{const p=[];let x=byId(zoom);while(x){p.unshift(x.title);x=x.parent?byId(x.parent):null}return `<div class="zoombar">🔍 Zoom: ${esc(p.join(' › '))} <button id="unz" data-unz="1">Sair do zoom (a)</button></div>`};
function infoDialog(id){
  const t=byId(id),p=[];let x=t;while(x.parent){x=byId(x.parent);p.unshift(x.title)}
  const row=(a,b)=>`<tr><td style="color:var(--mu);width:150px">${a}</td><td>${b}</td></tr>`;
  const lastDone=t.doneLog.length?new Date(t.doneLog[t.doneLog.length-1]).toLocaleString('pt-BR'):'—';
  $('#modal').innerHTML=`<h3>ℹ Detalhes da atividade</h3><table>${row('ID',`<code>${t.id}</code>`)}${row('Título',esc(t.title))}${row('Caminho',esc(p.join(' › ')||'(raiz)'))}${row('Projeto',esc((S.projects.find(q=>q.id===t.pid)||{}).name||''))}${row('Status',stOf(t.status).n)}${row('Prioridade',PR[t.prio])}${row('Datas',esc(dateTxt(t)||'—'))}${row('Repetição',esc(repLabel(t)||'—'))}${row('Responsáveis',esc(t.assignees.map(a=>(mem(a)||{}).name).filter(Boolean).join(', ')||'—'))}${row('Etiquetas',esc(t.tags.map(a=>(tagOf(a)||{}).name).filter(Boolean).join(', ')||'—'))}${row('Subatividades',desc(id).length)}${row('Comentários',t.comments.length)}${row('Criada em',new Date(t.created).toLocaleString('pt-BR'))}${row('Concluída (vezes)',t.doneLog.length+' · última: '+lastDone)}</table><div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
}
function addComment(){
  const c=$('#m_comment');if(!c)return;const text=c.value.trim();if(!text)return;
  collect();const t=byId(editing);t.comments.push({id:uid(),text,ts:Date.now(),by:(mem(S.me)||{}).name||'Você'});
  openTask(editing);render();const n=$('#m_comment');if(n)n.focus();
}
function quoteSel(){
  const s=String(getSelection()).trim(),c=$('#m_comment');if(!c)return;
  if(!s){toast('Selecione um texto na tela para citar');return}
  c.value+=(c.value?'\n':'')+'> '+s.replace(/\n/g,'\n> ')+'\n';c.focus();
}

/* ----- pesquisa rápida (Ctrl+B) ----- */
function goTask(id){
  const t=byId(id);if(!t)return;
  S.cur=t.pid;zoom=null;S.view='list';$('#q').value='';['fm','ft','fs','fp'].forEach(k=>$('#'+k).value='');
  let p=t.parent;while(p){const x=byId(p);x.open=true;p=x.parent}
  cur=id;anchor=id;sel=new Set([id]);render();markSel(true);
}
function openPalette(mode){
  editing=null;closePop();const M=$('#modal');M.dataset.kind='pal';M.style.width='';
  const ph=mode==='proj'?'Trocar de projeto…':'Buscar projetos, atividades, pessoas ou comandos…';
  M.innerHTML=`<div class="pk"><div class="pk-in">${ic('search')}<input id="pl_q" placeholder="${ph}" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div><div id="pl_l" class="pk-l"></div><div class="pk-f"><span><kbd>↑</kbd><kbd>↓</kbd> navegar</span><span><kbd>Enter</kbd> abrir</span><span><kbd>Esc</kbd> fechar</span></div></div>`;
  $('#ov').classList.add('on');
  let items=[],idx=0;
  const go=(v,extra)=>()=>{S.view=v;if(extra)extra();zoom=null;cur=null;sel=new Set()};
  const btn=id=>()=>setTimeout(()=>{const b=$(id);if(b)b.click()},0);
  const VIEWS=[['list','Lista','list'],['board','Quadro','board'],['cal','Calendário','calendar'],['gantt','Cronograma','gantt'],['people','Pessoas e carga','people'],['dash','Painel executivo','chart']];
  const ACTS0=[['Copiar link desta página','link',()=>copyLink(location.href)],['Nova atividade','plus',()=>{if(['dash','settings','people','smart'].includes(S.view))S.view='list';setTimeout(()=>{const q=$('#qa');if(q)q.focus()},60)}],
    ['Novo projeto','plus',btn('#addProj')],['Renomear projeto atual','list',()=>setTimeout(renameProj,0)],['Excluir projeto atual','trash',btn('#delProj')],
    ['Configurações','sliders',btn('#bSet')],['Membros e convites','people',btn('#bTeam')],['Etiquetas','tag',btn('#bTags')],['Automações','zap',btn('#bRules')],
    ['Tema: Claro','moon',()=>setTheme('light')],['Tema: Escuro','moon',()=>setTheme('dark')],['Tema: CS Infra','moon',()=>setTheme('cs')],['Importar e exportar (Excel, PDF, CSV…)','download',()=>setTimeout(openDataHub,0)],['Atualizar dados agora','zap',()=>{if(CLOUD)pollPull(true);toast('Atualizando…')}],['Ajuda e atalhos','help',()=>setTimeout(()=>toggleHelp(),0)]];
  const PK={'Nova atividade':'add','Novo projeto':'project','Renomear projeto atual':'project','Excluir projeto atual':'delProject','Membros e convites':'members','Etiquetas':'tags','Automações':'rules'};
  const ACTS=ACTS0.filter(a=>!PK[a[0]]||can(PK[a[0]]));
  if(CLOUD)ACTS.push(['Sair da conta','lock',()=>setTimeout(()=>cloudLogout(),0)]);
  const draw=()=>{
    const q=$('#pl_q').value.trim().toLowerCase(),has=s=>!q||s.toLowerCase().includes(q);items=[];
    const nOpen=p=>S.tasks.filter(t=>t.pid===p.id&&isLeaf(t)&&t.status!=='done').length;
    S.projects.filter(p=>!p.virtual&&has(p.name)).forEach(p=>items.push({g:'Projetos',ic:'dot',col:pcol(p),l:p.name,r:nOpen(p)+' abertas',cur:!['smart','settings'].includes(S.view)&&p.id===S.cur,f:()=>{S.cur=p.id;if(['smart','settings'].includes(S.view))S.view='list';zoom=null;cur=null;sel=new Set()}}));
    if(mode==='proj'&&can('project')&&has('novo projeto'))items.push({g:'Projetos',ic:'plus',l:'Novo projeto',r:'',f:btn('#addProj')});
    if(mode!=='proj'||q){
      VIEWS.filter(v=>has(v[1])).forEach(v=>items.push({g:'Ir para',ic:v[2],l:v[1],r:'',f:go(v[0])}));
      SMARTS.filter(s=>has(s[1].replace(/^\S+\s/,''))).forEach(s=>items.push({g:'Ir para',ic:s[2],l:s[1].replace(/^\S+\s/,''),r:'todos os projetos',f:()=>{S.view='smart';S.smart=s[0];cur=null;sel=new Set()}}));
      ACTS.filter(a=>has(a[0])).forEach(a=>items.push({g:'Ações',ic:a[1],l:a[0],r:'',f:a[2]}));
      S.members.filter(m=>q&&has(m.name+' '+(m.email||''))).forEach(m=>items.push({g:'Pessoas',ic:'user',l:m.name,r:m.email||'',f:()=>{$('#fm').value=m.id;if(['dash','settings','smart'].includes(S.view))S.view='list'}}));
      S.tags.filter(g=>q&&has(g.name)).forEach(g=>items.push({g:'Etiquetas',ic:'tag',l:g.name,r:'',f:()=>{$('#ft').value=g.id;if(['dash','settings','smart'].includes(S.view))S.view='list'}}));
      if(q)S.tasks.filter(t=>!t.sec&&(has(t.title)||(t.comments||[]).some(c=>c.text.toLowerCase().includes(q)))).slice(0,12).forEach(t=>{const p=S.projects.find(x=>x.id===t.pid);items.push({g:'Atividades',ic:'check',l:t.title,r:p?p.name:'',f:()=>goTask(t.id)})});
    }
    items=items.slice(0,60);idx=Math.min(idx,Math.max(0,items.length-1));
    let h='',last='';
    items.forEach((it,i)=>{
      if(it.g!==last){h+=`<div class="pk-g">${it.g}</div>`;last=it.g}
      h+=`<div class="pk-i ${i===idx?'on':''}" data-i="${i}">${it.ic==='dot'?`<i class="pd" style="background:${it.col}"></i>`:ic(it.ic)}<span class="pk-t">${esc(it.l)}</span>${it.cur?'<em>atual</em>':''}<small>${esc(it.r||'')}</small></div>`;
    });
    $('#pl_l').innerHTML=h||'<div class="pk-e">Nada encontrado.</div>';
    const a=document.querySelector('#pl_l .on');if(a)a.scrollIntoView({block:'nearest'});
  };
  const run=i=>{const it=items[i];if(!it)return;closeModal();it.f();render()};
  const q=$('#pl_q');q.oninput=()=>{idx=0;draw()};
  q.onkeydown=e=>{
    if(e.key==='ArrowDown'){e.preventDefault();idx=Math.min(items.length-1,idx+1);draw()}
    else if(e.key==='ArrowUp'){e.preventDefault();idx=Math.max(0,idx-1);draw()}
    else if(e.key==='Enter'){e.preventDefault();run(idx)}
  };
  $('#pl_l').onmousemove=e=>{const el=e.target.closest('.pk-i');if(el&&+el.dataset.i!==idx){idx=+el.dataset.i;document.querySelectorAll('#pl_l .pk-i').forEach(x=>x.classList.toggle('on',+x.dataset.i===idx))}};
  $('#pl_l').onclick=e=>{const el=e.target.closest('.pk-i');if(el)run(+el.dataset.i)};
  draw();q.focus();
}
function renameProj(id){if(!can('project')){deny('project');return}const P=(id&&S.projects.find(p=>p.id===id))||proj();if(!P||P.virtual)return;ask('Renomear projeto',P.name,v=>{if(!v.trim())return false;P.name=v.trim();render()})}

/* ----- desfazer (Ctrl+Z) ----- */
const snapJSON=()=>JSON.stringify({members:S.members,tags:S.tags,projects:S.projects,link:S.link,me:S.me,tasks:S.tasks},(k,v)=>k==='open'?undefined:v);
function diffLabel(a,b){
  const A=JSON.parse(a),B=JSON.parse(b),am=new Map(A.tasks.map(t=>[t.id,JSON.stringify(t)])),bm=new Map(B.tasks.map(t=>[t.id,t]));
  let add=0,del=0;const chg=[];
  bm.forEach((t,id)=>{if(!am.has(id))add++;else if(am.get(id)!==JSON.stringify(t))chg.push(t)});
  am.forEach((_,id)=>{if(!bm.has(id))del++});
  const p=[];
  if(add)p.push('Adicionou '+add+' atividade(s)');if(del)p.push('Excluiu '+del+' atividade(s)');
  if(chg.length)p.push(chg.length===1?'Editou “'+chg[0].title.slice(0,40)+'”':'Editou '+chg.length+' atividades');
  if(JSON.stringify(A.members)!==JSON.stringify(B.members))p.push('Equipe');
  if(JSON.stringify(A.tags)!==JSON.stringify(B.tags))p.push('Etiquetas');
  if(JSON.stringify(A.projects)!==JSON.stringify(B.projects))p.push('Projetos');
  if(!p.length&&A.tasks.map(t=>t.id).join()!==B.tasks.map(t=>t.id).join())p.push('Moveu atividades');
  return p.join(' · ')||'Alteração';
}
function pushHist(){
  const j=snapJSON(),last=hist.length?hist[hist.length-1].j:null;
  if(j===last)return;
  hist.push({ts:Date.now(),j,label:last?diffLabel(last,j):'Estado inicial'});
  if(hist.length>100)hist.shift();
}
function restore(i){
  if(i<1||i>=hist.length)return;
  const label=hist[i].label,d=JSON.parse(hist[i-1].j),open={};
  S.tasks.forEach(t=>open[t.id]=t.open);
  Object.assign(S,{members:d.members,tags:d.tags,projects:d.projects,link:d.link,me:d.me,tasks:d.tasks});
  S.tasks.forEach(t=>t.open=open[t.id]!==false);
  if(!S.projects.some(p=>p.id===S.cur))S.cur=S.projects[0].id;
  hist.length=i;closeModal();closePop();render();toast('↶ Desfeito: '+label);
}
function openUndo(){
  if(!can('project')){deny('project');return}
  editing=null;closePop();const M=$('#modal');M.dataset.kind='undo';
  const items=[];
  for(let i=hist.length-1;i>=1;i--)items.push(`<button data-undo="${i}" style="display:block;width:100%;text-align:left;margin:3px 0">↶ ${esc(hist[i].label)} <small style="color:var(--mu);float:right">${new Date(hist[i].ts).toLocaleTimeString('pt-BR')}</small></button>`);
  M.innerHTML=`<h3>↶ Desfazer operações</h3><div class="hint" style="margin:0 0 8px">Clique numa operação para voltar ao estado anterior a ela (as mais recentes também são desfeitas). Ctrl+Z de novo desfaz só a última.</div>${items.slice(0,40).join('')||'<div class="empty">Nada para desfazer.</div>'}<div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');const b=M.querySelector('[data-undo]');if(b)b.focus();
}

/* ----- vistas e extras ----- */
function setView(n){S.view=['list','board','cal','gantt','people','dash'][n-1]||'list';render()}
function cycleView(d){const a=['list','board','cal','gantt','people','dash'];S.view=a[(Math.max(0,a.indexOf(S.view))+d+a.length)%a.length];render()}
function toggleSide(force){const on=force===undefined?!document.body.classList.contains('sc'):!!force;document.body.classList.toggle('sc',on);try{localStorage.setItem('quire-sc',on?'1':'')}catch(e){}const b=$('#bCollapse');if(b){b.innerHTML=ic(on?'chevR':'chevL');b.title=on?'Expandir menu ([)':'Recolher menu ([)'}}
try{if(localStorage.getItem('quire-sc'))document.body.classList.add('sc')}catch(e){}
function fullscreen(){
  try{const p=document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
    if(p&&p.catch)p.catch(()=>toast('Tela cheia bloqueada neste ambiente — abra o arquivo direto no navegador (ou use F11)'))}
  catch(e){toast('Tela cheia indisponível aqui — use F11')}
}
const hasTextSel=()=>String(getSelection()).length>0;

/* ----- tratador principal de teclas ----- */
function kbd(e){
  if(e.isComposing||(CLOUD&&$('#login').style.display!=='none'))return;
  const t=e.target,k=e.key,ag=e.getModifierState&&e.getModifierState('AltGraph');
  const ctrl=(e.ctrlKey||e.metaKey)&&!ag,alt=e.altKey&&!ag,sh=e.shiftKey;
  const typing=/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)||t.isContentEditable;
  const eat=()=>{e.preventDefault();e.stopImmediatePropagation()};
  const L=k.length===1?k.toLowerCase():k;
  if(k==='F1'){eat();toggleHelp();return}
  const modalOpen=$('#ov').classList.contains('on'),kind=$('#modal').dataset.kind||'';
  if(modalOpen){
    if(kind==='undo'&&ctrl&&L==='z'){eat();if(hist.length>1)restore(hist.length-1);else{closeModal();render()}return}
    if(ctrl&&L==='b'&&(kind==='undo'||kind==='help')){eat();openPalette();return}
    if(editing&&alt&&L==='q'){eat();quoteSel();return}
    if(editing&&!typing&&k===' '&&!ctrl&&!alt&&t.tagName!=='BUTTON'){eat();collect();closeModal();render();return}
    return;
  }
  if(pop){
    const P=$('#pop');
    if(k==='Escape'||!P.contains(t))return;
    const fo=[...P.querySelectorAll('.pl[tabindex],.pl>input[type=checkbox],#pop_new,button[data-act]')];
    if((k==='ArrowDown'||k==='ArrowUp')&&!(t.tagName==='INPUT'&&t.type!=='checkbox')&&t.tagName!=='SELECT'){
      eat();let i=fo.indexOf(t);if(i<0)i=0;else i=k==='ArrowDown'?Math.min(fo.length-1,i+1):Math.max(0,i-1);if(fo[i])fo[i].focus();return}
    if((k==='Enter'||k===' ')&&t.matches&&t.matches('.pl[tabindex]')){eat();t.click();return}
    if(k==='Enter'&&t.matches&&t.matches('.pl>input[type=checkbox]')){eat();t.click();return}
    if(k==='Enter'&&t.matches&&t.matches('#pop input[type=date],#pop input[type=time],#pop select,#pop input[type=number]')){eat();try{t.blur()}catch(e){}setTimeout(()=>{closePop();render();markSel()},0);return}
    if(k.length===1&&!ctrl&&!alt&&!(t.tagName==='INPUT'&&t.type!=='checkbox')&&t.tagName!=='SELECT'&&/\S/.test(k)){
      const q=norm(k);const rows=[...P.querySelectorAll('.pl')];
      const cur=rows.findIndex(r=>r.contains(t)),n=rows.length;
      for(let o=1;o<=n;o++){const r=rows[(cur+o)%n];if(norm(r.textContent.trim()).startsWith(q)){eat();const f=r.querySelector('input[type=checkbox]')||r;f.focus();return}}
    }
    return;
  }
  if(typing)return;
  if(k==='Escape'&&S.view==='settings'&&!sh){eat();backFromSettings();return}
  if(k==='Escape'&&sh){eat();act('unzoom');return}
  if(k==='F2'){eat();if(ccol&&ccol!=='tt'&&['list','smart'].includes(S.view))editCell();else act('edit');return}
  if(k==='Escape'&&ccol){ccol=null;markSel()}
  if(k==='Insert'){eat();act('add');return}
  if((k==='F10'&&sh)||k==='ContextMenu'){eat();act('ctx');return}
  const list=['list','board','smart'].includes(S.view);
  if(ctrl&&alt){if(L==='m'){eat();act('milestone')}return}
  if(ctrl){
    if(sh){
      const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[k];
      if(m&&list){eat();if(S.view==='board')boardStep(m[0],m[1]);else if(m[1])step(m[1]<0?'up':'down',false);else m[0]<0?leftKey():rightKey()}
      return;
    }
    switch(L){
      case 'Enter':eat();act('add');return;
      case 'a':if(list){eat();selectAll()}return;
      case 'e':eat();act('selsub');return;
      case 'd':eat();act('desc');return;
      case 'm':eat();act('self');return;
      case 's':eat();act('section');return;
      case 'b':case 'k':eat();openPalette();return;
      case 'x':if(hasTextSel())return;eat();act('cut');return;
      case 'c':if(hasTextSel())return;eat();act('copy');return;
      case 'v':eat();act('paste');return;
      case 'z':eat();openUndo();return;
      case '/':eat();act('done');return;
      case '.':eat();fullscreen();return;
      case 'Delete':eat();act('del');return;
      case 'ArrowUp':eat();act('mup');return;
      case 'ArrowDown':eat();act('mdown');return;
      case 'ArrowRight':eat();act('indent');return;
      case 'ArrowLeft':eat();act('outdent');return;
      case 'PageUp':eat();act('mtop');return;
      case 'PageDown':eat();act('mbottom');return;
    }
    return;
  }
  if(alt){
    if(L==='p'){eat();act('indent');return}
    if(k==='Enter'){eat();act('edit');return}
    if(sh&&(k==='ArrowLeft'||k==='ArrowRight')){eat();levelAll(k==='ArrowRight'?1:-1)}
    return;
  }
  if(list){
    const mv={ArrowUp:'up',ArrowDown:'down',PageUp:'pgup',PageDown:'pgdn',Home:'home',End:'end'}[k];
    if(mv){eat();if(S.view==='board'&&!sh&&(mv==='up'||mv==='down'))boardStep(0,mv==='up'?-1:1);else step(mv,sh);return}
    if(k==='Tab'&&t===document.body){eat();step(sh?'up':'down',false);return}
    if(k==='ArrowLeft'||k==='ArrowRight'){
      eat();
      if(S.view==='board'){boardStep(k==='ArrowLeft'?-1:1,0);return}
      if(sh){subtreeOpen(k==='ArrowRight');return}
      if(cur&&byId(cur)){
        const tcur=byId(cur),hasK=kidsOf(tcur.id).length>0;
        if(k==='ArrowRight'){if((!ccol||ccol==='tt')&&hasK&&tcur.open===false){rightKey();return}cellMove(1);return}
        if(ccol&&ccol!=='tt'){cellMove(-1);return}
        leftKey();return}
      k==='ArrowLeft'?leftKey():rightKey();return}
  }
  if(ccol&&cur&&byId(cur)&&['list','smart'].includes(S.view)){
    if(k.length===1&&!ctrl&&!alt){eat();typeCell(k);return}
    if(k==='Backspace'||k==='Delete'){eat();clearCell();return}
  }
  if(k==='*'){eat();act('star');return}
  if(k==='C'&&sh){eat();act('done');return}
  const pk={'@':'a','?':'s','#':'t','<':'d','!':'p','>':'j'}[k];
  if(pk){eat();popKey(pk);return}
  if(k==='Enter'){if(t.tagName==='BUTTON'||t.tagName==='A')return;eat();if(sh){act('addsub');return}if(cur&&byId(cur)&&['list','smart'].includes(S.view)){editCell();return}act('add');return}
  if(k===' '){if(t.tagName==='BUTTON')return;eat();if(cur)openTask(cur);else toast('Selecione uma atividade (clique ou use ↑ ↓)');return}
  if(k===']'||k==='['){eat();toggleSide();return}
  if(k==='('||k===')'){eat();cycleView(k===')'?1:-1);return}
  if(k==='='){eat();act('mine');return}
  if(/^[1-6]$/.test(k)&&!sh){eat();setView(+k);return}
  if(k.length===1&&!sh){
    switch(L){
      case 't':eat();act('addroot');return;
      case 'q':eat();$('#qa').focus();return;
      case 'd':eat();act('desc');return;
      case 'c':eat();act('comment');return;
      case 'l':eat();act('sublist');return;
      case 'i':eat();act('info');return;
      case 'o':eat();act('toggle');return;
      case 's':eat();$('#q').focus();return;
      case 'z':eat();act('zoom');return;
      case 'a':eat();act('unzoom');return;
    }
  }
}
document.addEventListener('keydown',kbd,true);
document.addEventListener('click',e=>{if(e.target.closest('[data-unz]'))act('unzoom')});
document.addEventListener('contextmenu',e=>{
  const rw=e.target.closest('[data-row],.card');if(!rw||S.view==='dash'||$('#ov').classList.contains('on'))return;
  e.preventDefault();const id=rw.dataset.row||rw.dataset.t;
  if(!sel.has(id)){cur=id;anchor=id;sel=new Set([id])}else cur=id;
  markSel();pop={type:'m',id};
  renderPop({getBoundingClientRect:()=>({left:e.clientX,bottom:e.clientY,top:e.clientY})});
});

/* ----- cabeçalho e arrastar linhas com o mouse ----- */
let ldrag=null,dropInfo=null;
const ldragIds=()=>(sel.size>1&&sel.has(ldrag))?topT():[ldrag];
function invalidDrop(id){
  return ldragIds().some(d=>{if(d===id)return true;let p=byId(id).parent;while(p){if(p===d)return true;p=byId(p).parent}return false});
}
function clearDD(){document.querySelectorAll('.dd-before,.dd-after,.dd-child').forEach(x=>x.classList.remove('dd-before','dd-after','dd-child'))}
function place(o,ref,after){S.tasks=S.tasks.filter(x=>x!==o);S.tasks.splice(S.tasks.indexOf(ref)+(after?1:0),0,o)}
function dropRows(ids,tid,pos){
  const tgt=byId(tid);if(!tgt)return;
  const objs=ids.map(byId).filter(Boolean);if(!objs.length)return;
  const others=kidsOf(tid).filter(k=>!objs.includes(k));
  if(pos==='before'){
    objs.forEach(o=>{place(o,tgt,false);o.parent=tgt.parent||null});
  }else if(pos==='after'&&others.length&&tgt.open!==false){
    const first=others[0];objs.forEach(o=>{place(o,first,false);o.parent=tgt.id});tgt.open=true;
  }else if(pos==='after'){
    let ref=tgt;objs.forEach(o=>{place(o,ref,true);o.parent=tgt.parent||null;ref=o});
  }else{
    let ref=others.length?others[others.length-1]:tgt;objs.forEach(o=>{place(o,ref,true);o.parent=tgt.id;ref=o});tgt.open=true;
  }
  sel=new Set(objs.map(o=>o.id));cur=objs[0].id;anchor=cur;
  render();markSel(true);
}
document.addEventListener('mousedown',e=>{const gp=e.target.closest&&e.target.closest('.grip');if(gp){const r=gp.closest('[data-row]');if(r)r.draggable=true}});
document.addEventListener('dragstart',e=>{
  const r=e.target.closest&&e.target.closest('[data-row]');if(!r||e.target!==r)return;
  ldrag=r.dataset.row;
  if(!sel.has(ldrag)){cur=ldrag;anchor=ldrag;sel=new Set([ldrag]);markSel()}
  e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',ldrag);
  setTimeout(()=>r.classList.add('dragging'),0);
});
document.addEventListener('dragover',e=>{
  if(!ldrag)return;
  const v=$('#view'),vr=v.getBoundingClientRect();
  if(e.clientY<vr.top+50)v.scrollTop-=14;else if(e.clientY>vr.bottom-50)v.scrollTop+=14;
  clearDD();dropInfo=null;
  const r=e.target.closest&&e.target.closest('[data-row]');if(!r)return;
  const id=r.dataset.row;if(invalidDrop(id))return;
  e.preventDefault();e.dataTransfer.dropEffect='move';
  const rc=r.getBoundingClientRect(),y=(e.clientY-rc.top)/rc.height;
  const pos=y<.28?'before':y>.72?'after':'child';
  r.classList.add('dd-'+pos);dropInfo={id,pos};
});
document.addEventListener('drop',e=>{
  if(!ldrag||!dropInfo)return;
  e.preventDefault();const d=dropInfo,ids=ldragIds();clearDD();ldrag=null;dropInfo=null;
  dropRows(ids,d.id,d.pos);
});
document.addEventListener('dragend',()=>{
  ldrag=null;dropInfo=null;clearDD();
  document.querySelectorAll('[data-row]').forEach(r=>{r.draggable=false;r.classList.remove('dragging')});
});

/* ====================== RECURSOS NOVOS (v6) ====================== */
const PCOL=['#5b8cff','#3ecf8e','#f6b24c','#e0629a','#8a63d2','#2ba5b5'];
const pcol=p=>p.color||PCOL[Math.max(0,S.projects.indexOf(p))%PCOL.length];
const norm=s=>String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const dparse=s=>new Date(s+'T00:00');
const diffDays=(a,b)=>Math.round((dparse(b)-dparse(a))/864e5);
const plus=(s,n)=>{const d=dparse(s);d.setDate(d.getDate()+n);return ymd(d)};
const num=v=>parseFloat(String(v).replace(',','.'))||0;
const fmtDur=ms=>{const m=Math.floor(ms/60000);return Math.floor(m/60)+'h'+pad(m%60)};
function defaults(d){
  d.hideDone=!!d.hideDone;d.rules=d.rules||{};d.qf=d.qf||'all';d.theme=d.theme||'light';d.calMonth=d.calMonth||today().slice(0,7);d.gz=d.gz||'week';
  d.smart=d.smart||null;d.seen=!!d.seen;d.helpTab=d.helpTab||'guia';
  d.tasks.forEach(t=>{if(t.star===undefined)t.star=false;t.est=+t.est||0;t.spent=+t.spent||0;if(t.timerStart===undefined)t.timerStart=null;t.deps=t.deps||[]});
  d.members.forEach(m=>{m.cap=+m.cap||40;m.role=m.role||'admin';if(m.team===undefined)m.team=null});
  d.org=d.org||'CS Infra';d.teams=d.teams||[];d.defaultRole=d.defaultRole||'normal';d.setTab=d.setTab||'membros';
  d.projects.forEach(p=>{p.desc=p.desc||'';p.start=p.start||'';p.end=p.end||''});
  d.tasks.forEach(t=>{t.by=t.by||''});
  if(!['list','board','cal','gantt','people','dash','smart','settings'].includes(d.view))d.view='list';
  return d;
}

/* ----- filtros rápidos e visões inteligentes ----- */
const depsBlocked=t=>(t.deps||[]).some(d=>{const x=byId(d);return x&&x.status!=='done'});
const QF={all:()=>true,
  today:t=>t.status!=='done'&&!!t.due&&t.due<=today(),
  week:t=>t.status!=='done'&&!!t.due&&dayDiff(t.due)>=0&&dayDiff(t.due)<=7,
  late:t=>isLate(t),
  mine:t=>!!S.me&&t.assignees.includes(S.me),
  blocked:t=>t.status==='blocked'||(t.status!=='done'&&depsBlocked(t)),
  star:t=>!!t.star,
  done:t=>t.status==='done'};
const qfPred=k=>QF[k]||QF.all;
const CHIPS=[['all','Todas'],['today','Hoje'],['week','7 dias'],['late','Atrasadas'],['mine','Minhas'],['blocked','Impedidas'],['star','★ Favoritas'],['done','Concluídas']];
const SMARTS=[['today','🗓 Hoje','calendar'],['week','📅 Próximos 7 dias','gantt'],['late','⚠ Atrasadas','alert'],['mine','👤 Minhas atividades','user'],['star','★ Favoritas','star'],['blocked','🚧 Impedidas','ban']];
const EMPTY={today:'Nenhuma atividade vence hoje nem está atrasada.',week:'Nada vence nos próximos 7 dias.',late:'Nenhuma atividade atrasada. Bom trabalho!',mine:'Você não tem atividades abertas atribuídas.',star:'Marque atividades com ★ (tecla *) para vê-las aqui.',blocked:'Nenhuma atividade impedida.'};
const alertCount=()=>S.tasks.filter(t=>isLeaf(t)&&QF.today(t)).length;

/* ----- renderização principal ----- */
/* ----- imagens da atividade (Supabase Storage) ----- */
const IMGB='task-images',imgCache=new Map(),MAXIMG=12;
const canImg=t=>!!(CLOUD&&t&&canEdit(t)&&role()!=='guest');
const authHdr=async()=>{if(sess&&sess.expires_at&&Date.now()/1000>sess.expires_at-30)await refreshSession();return{apikey:SB.key,Authorization:'Bearer '+((sess&&sess.access_token)||SB.key)}};
function loadImg(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file),i=new Image();i.onload=()=>{URL.revokeObjectURL(u);res(i)};i.onerror=()=>{URL.revokeObjectURL(u);rej(new Error('Arquivo de imagem inválido.'))};i.src=u})}
async function shrinkImg(file){
  if(!/^image\/(jpeg|png|gif|webp)$/.test(file.type))throw new Error('Use imagens JPG, PNG, GIF ou WebP.');
  if(file.size>15*1024*1024)throw new Error('Imagem muito grande (máximo 15 MB).');
  const im=await loadImg(file);let w=im.naturalWidth,h=im.naturalHeight;
  if(file.type==='image/gif'||(file.size<350*1024&&Math.max(w,h)<=1600)){if(file.size>5*1024*1024)throw new Error('GIF muito grande (máximo 5 MB).');return{blob:file,type:file.type,w,h}}
  const k=Math.min(1,1600/Math.max(w,h));w=Math.round(w*k);h=Math.round(h*k);
  const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(im,0,0,w,h);
  const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',.85));
  return{blob,type:'image/jpeg',w,h};
}
async function uploadImg(t,file){
  const r=await shrinkImg(file),ext={'image/jpeg':'jpg','image/png':'png','image/gif':'gif','image/webp':'webp'}[r.type];
  const path=`${t.pid}/${t.id}/${uid()}${uid()}.${ext}`;
  const res=await fetch(`${SB.url}/storage/v1/object/${IMGB}/${path}`,{method:'POST',headers:{...(await authHdr()),'Content-Type':r.type},body:r.blob});
  if(!res.ok){let m='';try{m=(await res.json()).message||''}catch(e){}throw new Error(res.status===403||/row-level|policy|unauthorized/i.test(m)?'Seu perfil não pode enviar imagens neste projeto.':(m||'Falha ao enviar a imagem.'))}
  return{p:path,n:(file.name||'imagem').replace(/[<>"]/g,'').slice(0,80),w:r.w,h:r.h};
}
async function signImgs(paths){
  const now=Date.now(),need=[...new Set(paths)].filter(p=>{const c=imgCache.get(p);return !c||c.exp<now});
  if(need.length){try{const res=await fetch(`${SB.url}/storage/v1/object/sign/${IMGB}`,{method:'POST',headers:{...(await authHdr()),'Content-Type':'application/json'},body:JSON.stringify({expiresIn:3600,paths:need})});
    if(res.ok)(await res.json()).forEach(o=>{if(o&&o.signedURL)imgCache.set(o.path,{url:SB.url+'/storage/v1'+o.signedURL,exp:now+3300e3})})}catch(e){}}
  return paths.map(p=>(imgCache.get(p)||{}).url||'');
}
const delImg=p=>authHdr().then(h=>fetch(`${SB.url}/storage/v1/object/${IMGB}/${p}`,{method:'DELETE',headers:h})).catch(()=>{});
const galHTML=t=>(t.imgs||[]).map((g,i)=>`<figure class="gi" data-gi="${i}" title="${esc(g.n)}"><img alt="${esc(g.n)}" data-ip="${esc(g.p)}">${canImg(t)?`<button type="button" class="gdel" data-gdel="${i}" title="Remover imagem">${ic('x',14)}</button>`:''}</figure>`).join('');
async function hydrateImgs(){
  const els=[...document.querySelectorAll('img[data-ip]')];if(!els.length)return;
  const urls=await signImgs(els.map(e=>e.dataset.ip));
  els.forEach((e,i)=>{if(urls[i]){e.onerror=()=>e.classList.add('broken');e.src=urls[i];e.removeAttribute('data-ip')}else e.classList.add('broken')});
}
function refreshGal(){const t=byId(editing),g=$('#m_gal');if(!t||!g)return;g.innerHTML=galHTML(t);hydrateImgs();const b=$('#m_addimg');if(b)b.style.display=(t.imgs||[]).length>=MAXIMG?'none':''}
async function addFiles(files){const t=byId(editing);if(t)return addFilesTo(t,files)}
async function addFilesTo(t,files){
  if(!t||!canImg(t)){if(t)deny('edit');return}
  files=[...files].filter(f=>/^image\//.test(f.type));if(!files.length)return;
  const room=MAXIMG-(t.imgs||[]).length;if(room<=0){toast('Limite de '+MAXIMG+' imagens por atividade.');return}
  const inPanel=editing===t.id&&!!$('#m_gal'),g=inPanel?$('#m_gal'):null;
  const use=files.slice(0,room);
  const phs=use.map(()=>{const ph=document.createElement('figure');ph.className='gi up';ph.innerHTML='<span class="spin"></span>';if(g)g.appendChild(ph);return ph});
  if(!inPanel)toast('⏳ Enviando '+use.length+' imagem'+(use.length>1?'ns':'')+'…');
  const res=await Promise.all(use.map(async(f,i)=>{try{return await uploadImg(t,f)}catch(e){toast('⚠ '+trErr(e.message));return null}finally{phs[i].remove()}}));
  const ok=res.filter(Boolean);
  if(files.length>room)toast('Só cabem '+MAXIMG+' imagens por atividade.');
  if(ok.length){t.imgs=[...(t.imgs||[]),...ok];if(inPanel)refreshGal();save();render();toast(ok.length===1?'Imagem adicionada':ok.length+' imagens adicionadas')}
}
const imgFiles=dt=>[...(dt&&dt.files||[])].filter(f=>/^image\//.test(f.type));
/* anexar sem abrir o painel: botão 📎 da linha, Ctrl+V com a linha selecionada, ou soltar a imagem sobre a linha */
let attachFor=null;
document.addEventListener('click',e=>{
  const b=e.target.closest&&e.target.closest('[data-attach]');if(!b)return;
  e.stopImmediatePropagation();e.preventDefault();
  const t=byId(b.dataset.attach);if(!t)return;if(!canImg(t)){deny('edit');return}
  attachFor=t.id;let f=$('#quickfile');if(!f){f=document.createElement('input');f.type='file';f.id='quickfile';f.accept='image/*';f.multiple=true;f.hidden=true;document.body.appendChild(f);
    f.onchange=()=>{const t2=byId(attachFor);if(t2)addFilesTo(t2,f.files);f.value=''}}
  f.click();
},true);
document.addEventListener('paste',e=>{
  if($('#ov').classList.contains('on')||(e.target.matches&&e.target.matches('input,textarea,[contenteditable]')))return;
  const fs=imgFiles(e.clipboardData);if(!fs.length)return;
  const t=byId(cur);if(!t){toast('Selecione uma atividade (clique na linha) e cole de novo');return}
  e.preventDefault();addFilesTo(t,fs);
});
['dragover','drop','dragleave'].forEach(ev=>document.addEventListener(ev,e=>{
  if($('#ov').classList.contains('on')||!e.dataTransfer||![...(e.dataTransfer.types||[])].includes('Files'))return;
  const r=e.target.closest&&e.target.closest('#view [data-row],#view .card[data-t]');
  document.querySelectorAll('.fdrop').forEach(x=>x!==r&&x.classList.remove('fdrop'));
  if(!r){return}
  const items=[...(e.dataTransfer.items||[])];if(items.length&&!items.some(i=>/^image\//.test(i.type)))return;
  e.preventDefault();
  if(ev==='dragover')r.classList.add('fdrop');
  if(ev==='drop'){e.stopImmediatePropagation();r.classList.remove('fdrop');const t=byId(r.dataset.row||r.dataset.t);const fs=imgFiles(e.dataTransfer);if(t&&fs.length)addFilesTo(t,fs)}
},true));
async function openLB(tid,idx){
  const t=byId(tid);if(!t||!(t.imgs||[]).length)return;let i=Math.min(idx,t.imgs.length-1);
  closeLB();const lb=document.createElement('div');lb.id='lb';
  lb.innerHTML=`<button class="lbx" data-lbx type="button" title="Fechar (Esc)">${ic('x',22)}</button><button class="lbn lbp" data-lbp type="button">${ic('chevL',26)}</button><figure><img id="lbi" alt=""><figcaption id="lbc"></figcaption></figure><button class="lbn lbq" data-lbq type="button">${ic('chevR',26)}</button><a id="lbd" class="lbdl" target="_blank" rel="noopener">Abrir original</a>`;
  document.body.appendChild(lb);
  const show=async()=>{const g=t.imgs[i];$('#lbc').textContent=`${g.n}  ·  ${i+1} de ${t.imgs.length}`;$('#lbi').removeAttribute('src');const[u]=await signImgs([g.p]);if($('#lbi')){$('#lbi').src=u;$('#lbd').href=u}lb.querySelector('.lbp').style.visibility=i>0?'':'hidden';lb.querySelector('.lbq').style.visibility=i<t.imgs.length-1?'':'hidden'};
  lb.onclick=e=>{if(e.target.closest('[data-lbp]')){i--;show()}else if(e.target.closest('[data-lbq]')){i++;show()}else if(e.target.closest('[data-lbx]')||e.target===lb)closeLB()};
  openLB.key=e=>{if(e.key==='Escape'){e.stopImmediatePropagation();e.preventDefault();closeLB()}else if(e.key==='ArrowLeft'&&i>0){e.stopImmediatePropagation();i--;show()}else if(e.key==='ArrowRight'&&i<t.imgs.length-1){e.stopImmediatePropagation();i++;show()}};
  document.addEventListener('keydown',openLB.key,true);show();
}
function closeLB(){const l=$('#lb');if(l)l.remove();if(openLB.key){document.removeEventListener('keydown',openLB.key,true);openLB.key=null}}
document.addEventListener('click',async e=>{
  const t0=e.target;if(!t0.closest)return;
  if(t0.closest('#m_addimg')){const f=$('#m_file');if(f)f.click();return}
  const del=t0.closest('[data-gdel]');
  if(del){e.stopImmediatePropagation();e.preventDefault();const t=byId(editing);if(!t)return;const g=(t.imgs||[])[+del.dataset.gdel];if(!g)return;
    t.imgs=t.imgs.filter(x=>x!==g);refreshGal();save();render();delImg(g.p);toast('Imagem removida',null);return}
  const fig=t0.closest('.gi:not(.up)');
  if(fig&&fig.closest('#m_gal')){const t=byId(editing);if(t)openLB(t.id,+fig.dataset.gi);return}
},true);
document.addEventListener('change',e=>{if(e.target&&e.target.id==='m_file'){addFiles(e.target.files);e.target.value=''}});
document.addEventListener('paste',e=>{
  if(!editing||$('#modal').dataset.kind!=='task')return;
  const fs=[...(e.clipboardData&&e.clipboardData.files||[])].filter(f=>/^image\//.test(f.type));
  if(fs.length){e.preventDefault();addFiles(fs)}
});
['dragover','drop'].forEach(ev=>document.addEventListener(ev,e=>{
  const m=e.target.closest&&e.target.closest('#modal[data-kind=task]');if(!m||!e.dataTransfer||![...(e.dataTransfer.types||[])].includes('Files'))return;
  e.preventDefault();m.classList.toggle('dropping',ev==='dragover');
  if(ev==='drop'){m.classList.remove('dropping');addFiles(e.dataTransfer.files)}
}));
document.addEventListener('dragleave',e=>{if(e.target.id==='modal')e.target.classList.remove('dropping')});
document.addEventListener('mousedown',e=>{const f=$('#fpanel');if(f&&f.classList.contains('open')&&!e.target.closest('#fpanel,#bFilt,#menu'))f.classList.remove('open')},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const f=$('#fpanel');if(f&&f.classList.contains('open')&&!$('#menu')&&!$('#ov').classList.contains('on')){f.classList.remove('open');e.stopImmediatePropagation()}}},true);
/* ----- filtros em "pílulas" (substituem os selects nativos) ----- */
const FDEFS=[
  ['fm','Responsável',()=>[{v:'',l:'Todos'},{v:'none',l:'Sem responsável'},...S.members.map(m=>({v:m.id,l:m.name,sw:m.color}))]],
  ['ft','Etiqueta',()=>[{v:'',l:'Todas'},...S.tags.map(g=>({v:g.id,l:g.name,sw:g.color}))]],
  ['fs','Status',()=>[{v:'',l:'Todos'},...ST.map(s=>({v:s.id,l:s.n,sw:s.c}))]],
  ['fp','Prioridade',()=>[{v:'',l:'Todas'},{v:'3',l:'Alta',sw:'#d23f3f'},{v:'2',l:'Média',sw:'#d99a2b'},{v:'1',l:'Baixa',sw:'#8a97ab'}]]];
function fpillsRender(){
  const el=$('#fpills');if(!el)return;
  let any=S.qf&&S.qf!=='all'||S.hideDone;
  const h=FDEFS.map(([id,label,items])=>{
    const val=$('#'+id).value;if(val)any=true;
    const cur=val?items().find(x=>x.v===val):null;
    return `<button type="button" class="fpill ${val?'on':''}" data-fpill="${id}">${cur&&cur.sw?`<i class="msw" style="background:${cur.sw}"></i>`:''}<span>${label}${val?`: <b>${esc(cur?cur.l:'—')}</b>`:''}</span>${val?`<span class="fpx" data-fpclear="${id}" title="Remover filtro">${ic('x',13)}</span>`:ic('down',14)}</button>`}).join('');
  setHTML('#fpills',h+(any?`<button type="button" class="fclear" id="fclear">Limpar tudo</button>`:''));
}
document.addEventListener('click',e=>{
  const c=e.target.closest&&e.target.closest('[data-fpclear]');
  if(c){e.stopImmediatePropagation();e.preventDefault();$('#'+c.dataset.fpclear).value='';render();return}
  const p=e.target.closest&&e.target.closest('[data-fpill]');
  if(p){e.stopImmediatePropagation();const d=FDEFS.find(x=>x[0]===p.dataset.fpill),cur=$('#'+d[0]).value;
    openMenu(p,d[2]().map(it=>({l:it.l,sw:it.sw,on:it.v===cur,f:()=>{$('#'+d[0]).value=it.v;render()}})),{align:'left'});return}
  if(e.target.closest&&e.target.closest('#fclear')){['fm','ft','fs','fp'].forEach(i=>$('#'+i).value='');S.qf='all';S.hideDone=false;$('#q').value='';render();save()}
},true);
const setHTML=(sel,h)=>{const e=$(sel);if(e&&e.__h!==h){e.__h=h;e.innerHTML=h}};
function render(){
  if(S.projects.length>1&&S.projects.some(p=>p.virtual))S.projects=S.projects.filter(p=>!p.virtual);
  const P=proj();S.cur=P.id;
  document.documentElement.dataset.theme=S.theme;
  document.body.dataset.view=S.view;
  document.body.className=document.body.className.replace(/\br-\w+/g,'').trim()+' r-'+role();
  runRules();
  fillFilters();
  fpillsRender();
  if(cur&&!byId(cur))cur=null;sel=new Set([...sel].filter(byId));
  const V=S.view,smart=V==='smart';
  const lf=ptasks().filter(isLeaf),dn=lf.filter(t=>t.status==='done').length,lt=lf.filter(isLate).length,op=lf.length-dn,pct=lf.length?Math.round(dn/lf.length*100):0;
  const sm=SMARTS.find(s=>s[0]===S.smart)||SMARTS[0];
  $('#pname').textContent=smart?sm[1].replace(/^\S+\s/,''):P.name;
  $('#pname').title=smart?'Visão inteligente: reúne atividades de todos os projetos':'Duplo clique para renomear';
  $('#pedit').style.display=(smart||V==='settings'||P.virtual)?'none':'';
  const pd=$('#pdot');pd.style.display=(smart||V==='settings')?'none':'';pd.style.background=pcol(P);
  $('#subline').innerHTML=smart?'<span>Reúne as atividades de todos os projetos</span>':`<b>${pct}%</b> concluído <span class="pbar"><i style="width:${pct}%"></i></span> <span>${op} abertas</span>${lt?`<span class="late">· ${lt} atrasada(s)</span>`:''}`;
  if(V==='settings'){$('#pname').textContent='Configurações';$('#subline').innerHTML='<span>Perfis, membros e preferências</span>'}
  [['l','list'],['b','board'],['c','cal'],['g','gantt'],['p','people'],['d','dash']].forEach(([k,v])=>$('#v'+k).classList.toggle('on',V===v));
  const all=S.tasks.filter(isLeaf);
  setHTML('#smarts',SMARTS.filter(s=>['today','week','late','mine'].includes(s[0])).map(([k,l,i])=>{const n=k==='late'?all.filter(qfPred(k)).length:0;return `<div class="si ${smart&&S.smart===k?'on':''}" data-smart="${k}" title="${l.replace(/^\S+\s/,'')}">${ic(i)}<span>${l.replace(/^\S+\s/,'')}</span>${n?`<small class="bad">${n}</small>`:''}</div>`}).join(''));
  setHTML('#projs',S.projects.every(p=>p.virtual)?`<div class="pempty">Nenhum projeto ainda.${can('project')?'<button type="button" id="addProj2">Criar o primeiro projeto</button>':'<span>Peça a um administrador para liberar o acesso.</span>'}</div>`:S.projects.map(p=>`<div class="pi ${!smart&&p.id===P.id?'on':''}" data-id="${p.id}" title="${esc(p.name)}"><i class="pd" style="background:${pcol(p)}"></i><span>${esc(p.name)}</span>${p.restricted?`<span class="plock" title="Projeto restrito">${ic('lock',13)}</span>`:''}</div>`).join(''));
  $('#chips').style.display=['list','board','cal','gantt'].includes(V)?'flex':'none';
  $('#chips').innerHTML=CHIPS.map(([k,l])=>{const n=lf.filter(qfPred(k)).length;return `<span class="chip ${S.qf===k?'on':''} ${k==='late'&&n?'bad':''}" data-qf="${k}">${l}${k!=='all'?` <small>${n}</small>`:''}</span>`}).join('')+`<span class="chip ${S.hideDone?'on':''}" data-hd="1" title="Esconde as atividades concluídas da lista, quadro, calendário, cronograma e pessoas" style="margin-left:10px">${S.hideDone?'👁 Mostrar':'🙈 Ocultar'} concluídas</span>`;
  const nf=['fm','ft','fs','fp'].filter(i=>$('#'+i).value).length+(S.qf&&S.qf!=='all'?1:0)+(S.hideDone?1:0);
  $('#bFilt').innerHTML=ic('filter')+'<span class="bl">Filtros</span>'+(nf?` <span class="badge" style="position:static;margin-left:4px">${nf}</span>`:'');
  $('#bTheme').innerHTML=ic(S.theme==='dark'?'sun':'moon');
  const al=alertCount();$('#bBell').innerHTML=ic('bell')+(al?`<span class="badge">${al}</span>`:'');
  ({list,board,cal:calView,gantt,people,dash,smart:smartView,settings}[V]||list)();
  document.querySelectorAll('input[data-part]').forEach(i=>i.indeterminate=true);
  applyRoleUI();
  markSel();
  save();
  if(adding){const i=document.querySelector('[data-addin]');if(i)setTimeout(()=>i.focus(),0)}
}

/* ----- lista em árvore (com modo plano para as visões inteligentes) ----- */
/* ===== colunas da tabela: ordem e visibilidade (preferência só deste usuário/navegador) ===== */
const COLDEFS=[['a','Resp.',60],['t','Etiquetas',128],['s','Status',96],['i','Início',84],['ih','Hora',46],['d','Conclusão',84],['dh','Hora',46],['u','Dur.',60],['ds','Descrição',240],['id','ID',62]];
const COLNAME={a:'Responsável',t:'Etiquetas',s:'Status',i:'Início (data)',ih:'Início (hora)',d:'Conclusão (data)',dh:'Conclusão (hora)',u:'Duração',ds:'Descrição',id:'ID'};
const COLDEF_HIDE=['ds'];
function colsKey(){return 'cs-cols-'+(S.me||'local')}
function colsLoad(){
  let o=null;try{o=JSON.parse(localStorage.getItem(colsKey()))}catch(e){}
  const all=COLDEFS.map(c=>c[0]);
  const order=[...((o&&o.order)||[]).filter(k=>all.includes(k)),...all.filter(k=>!((o&&o.order)||[]).includes(k))];
  const hide=o&&Array.isArray(o.hide)?o.hide.filter(k=>all.includes(k)):COLDEF_HIDE.slice();
  S.cols={order,hide};
}
function colsSave(){try{localStorage.setItem(colsKey(),JSON.stringify(S.cols))}catch(e){}colsCSS()}
function colsCSS(){
  if(!S.cols)colsLoad();
  let st=document.getElementById('colcss');if(!st){st=document.createElement('style');st.id='colcss';document.head.appendChild(st)}
  st.textContent=S.cols.order.map((k,i)=>`.col-${k}{order:${i+1}}`).join('')+S.cols.hide.map(k=>`.hc.col-${k},.rt>.cell.col-${k}{display:none!important}`).join('')+COLDEFS.map(c=>`.col-${c[0]}{width:${c[2]}px}`).join('')+`:root{--colsw:${COLDEFS.filter(c=>!S.cols.hide.includes(c[0])).reduce((n,c)=>n+c[2],0)}px}`;
}
function colMove(k,d){const o=S.cols.order,i=o.indexOf(k),j=i+d;if(i<0||j<0||j>=o.length)return;o.splice(i,1);o.splice(j,0,k);colsSave()}
function colMenu(anchor){
  closeMenu();const m=document.createElement('div');m.id='colmenu';
  const draw=()=>{m.innerHTML=`<div class="cmh"><b>Colunas</b><button type="button" data-cm="reset" class="ghost">Restaurar padrão</button></div><div class="cmsub">Marque o que quer ver e use ▲ ▼ para mudar a ordem. Vale só para você, neste navegador.</div>`+
    S.cols.order.map((k,i)=>`<div class="cmr"><label><input type="checkbox" data-cmv="${k}" ${S.cols.hide.includes(k)?'':'checked'}> ${COLNAME[k]}</label><span><button type="button" data-cmu="${k}" ${i?'':'disabled'} title="Mover para a esquerda">▲</button><button type="button" data-cmd="${k}" ${i<S.cols.order.length-1?'':'disabled'} title="Mover para a direita">▼</button></span></div>`).join('')+`<div class="cmsub" style="margin-top:6px">Dica: também dá para arrastar os títulos da tabela.</div>`};
  draw();document.body.appendChild(m);
  const r=anchor.getBoundingClientRect();m.style.left=Math.max(8,Math.min(r.right-m.offsetWidth,innerWidth-m.offsetWidth-8))+'px';m.style.top=Math.min(r.bottom+6,Math.max(8,innerHeight-m.offsetHeight-8))+'px';
  const close=()=>{m.remove();document.removeEventListener('mousedown',off,true);document.removeEventListener('keydown',key,true)};
  const off=e=>{if(!e.target.closest('#colmenu,#bCols'))close()};
  const key=e=>{if(e.key==='Escape'){e.stopImmediatePropagation();close();if(document.activeElement&&document.activeElement.blur)document.activeElement.blur()}};
  setTimeout(()=>{document.addEventListener('mousedown',off,true);document.addEventListener('keydown',key,true)},0);
  m.addEventListener('click',e=>{
    const t=e.target;
    if(t.dataset.cm==='reset'){S.cols={order:COLDEFS.map(c=>c[0]),hide:COLDEF_HIDE.slice()};colsSave();draw();render();return}
    if(t.dataset.cmu){colMove(t.dataset.cmu,-1);draw();render();return}
    if(t.dataset.cmd){colMove(t.dataset.cmd,1);draw();render();return}
  });
  m.addEventListener('change',e=>{const k=e.target.dataset.cmv;if(!k)return;const h=S.cols.hide;if(e.target.checked){const i=h.indexOf(k);if(i>=0)h.splice(i,1)}else if(!h.includes(k))h.push(k);colsSave();render()});
  const f=m.querySelector('input');if(f)f.focus();
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#bCols');if(b){e.stopImmediatePropagation();if(!S.cols)colsLoad();const o=document.getElementById('colmenu');if(o){o.remove();return}colMenu(b)}},true);
/* arrastar os títulos para reordenar */
let colDrag=null;
document.addEventListener('dragstart',e=>{const h=e.target.closest&&e.target.closest('.hc[data-col]');if(!h)return;colDrag=h.dataset.col;e.dataTransfer.effectAllowed='move';try{e.dataTransfer.setData('text/plain','col:'+colDrag)}catch(_){}h.classList.add('cdrag')});
document.addEventListener('dragover',e=>{if(!colDrag)return;const h=e.target.closest&&e.target.closest('.hc[data-col]');if(!h)return;e.preventDefault();document.querySelectorAll('.hc.cover').forEach(x=>x!==h&&x.classList.remove('cover'));h.classList.add('cover')});
document.addEventListener('dragend',()=>{colDrag=null;document.querySelectorAll('.hc.cdrag,.hc.cover').forEach(x=>x.classList.remove('cdrag','cover'))});
document.addEventListener('drop',e=>{
  if(!colDrag)return;const h=e.target.closest&&e.target.closest('.hc[data-col]');if(!h)return;e.preventDefault();e.stopImmediatePropagation();
  const from=colDrag,to=h.dataset.col;colDrag=null;if(from===to)return;
  const o=S.cols.order;o.splice(o.indexOf(from),1);o.splice(o.indexOf(to),0,from);colsSave();render();
},true);
function listHeader(n){
  return `<div class="row hdr"><span class="grip" style="visibility:hidden"></span><span class="gut"></span>
   <div class="main"><span class="hc" style="padding-left:24px;text-align:left">Atividade <span style="font-weight:400;text-transform:none;letter-spacing:0">· ${n} item(ns)</span></span></div>
   <div class="rt">${COLDEFS.map(c=>`<span class="hc col-${c[0]}" data-col="${c[0]}" draggable="true" title="Arraste para mudar a posição · ${c[1]}">${c[1]}</span>`).join('')}</div></div>`;
}
const fmtFull=d=>d?d.split('-').reverse().join('/'):'';
function dateCols(t){
  const own=t.start||t.due,leaf=isLeaf(t);
  const sp=own||leaf?null:tspan(t);
  const a=own?t.start:(sp&&sp[0]),b=own?t.due:(sp&&sp[1]);
  let u='';
  if(a&&b){
    if(a===b&&t.startTime&&t.dueTime&&own){const m=(+t.dueTime.slice(0,2)*60+ +t.dueTime.slice(3))-(+t.startTime.slice(0,2)*60+ +t.startTime.slice(3));u=m>0?fmtDur(m*60000):'1 d'}
    else u=(diffDays(a,b)+1)+' d';
  }
  return{i:fmtFull(a),d:(hasRep(t)?'🔁 ':'')+fmtFull(b),u,agg:!own&&!!sp,ih:own?(t.startTime||''):'',dh:own?(t.dueTime||''):''};
}
function rowHTML(t,depth,flat){
  const ks=flat?[]:kidsOf(t.id),pr=flat?null:prog(t),done=t.status==='done',f=filtering();
  const shown=(f||S.hideDone)?ks.filter(matchTree):ks;
  const open=f||t.open!==false;
  const dt=dateTxt(t),ds=dateCols(t),blocked=!done&&depsBlocked(t);
  const rootish=!flat&&(depth===0||t.sec);
  let path='';if(flat){const p=[];let x=t;while(x.parent){x=byId(x.parent);p.unshift(x.title)}if(p.length)path=`<span class="bcs">${esc(p.join(' › '))}</span>`}
  const wait=(t.deps||[]).map(byId).filter(x=>x&&x.status!=='done').map(x=>x.title).join(', ');
  let h=`<div class="row ${rootish?'root':''} ${!rootish&&ks.length?'par':''} ${depth>0&&!flat?'sub':''} ${done?'done':''}" data-row="${t.id}" data-d="${flat?0:depth}">
   <span class="grip" ${flat?'style="visibility:hidden"':'title="Arraste para mover (acima/abaixo = mesmo nível · no meio = subatividade)"'}>⋮⋮</span><span class="gut p${t.prio}" data-pr="${t.id}" title="Prioridade ${PR[t.prio]} — clique para alterar">${{3:'↑',2:'–',1:'↓'}[t.prio]}</span>
   <div class="main" style="padding-left:${flat?4:depth*24}px;--d:${flat?0:depth}">
    <span class="tg" ${flat?'':`data-tg="${t.id}"`}>${ks.length?(open?'▾':'▸'):''}</span>
    <input type="checkbox" data-ck="${t.id}" ${done?'checked':''} ${ks.length&&!done&&desc(t.id).some(x=>x.status==='done')?'data-part="1"':''} title="${ks.length?'Concluir esta atividade e todas as subatividades':'Concluir'}">
    ${t.ms?'<span style="color:var(--amb)" title="Marco">◆</span>':''}<span class="tt" data-ie="${t.id}" title="Clique para editar o nome">${esc(t.title)}</span>
    ${(t.imgs||[]).length?`<span class="imgc" title="${t.imgs.length} imagem(ns)">${ic('image',13)}${t.imgs.length}</span>`:''}${t.star?`<span class="star" data-star="${t.id}" title="Favorita">★</span>`:''}${blocked?`<span class="lk" title="Aguardando: ${esc(wait)}">🔒</span>`:''}${t.timerStart?'<span class="tim" title="Cronômetro em andamento">⏱</span>':''}${t.comments.length?`<span class="pg" title="Comentários">💬${t.comments.length}</span>`:''}
    ${pr?`<span class="pg">${pr[0]}/${pr[1]}</span><span class="bar"><i style="width:${pr[1]?pr[0]/pr[1]*100:0}%"></i></span>`:''}${path}
    <button class="op" data-t="${t.id}" title="Abrir painel de edição (Espaço)">⤢ abrir</button>
    <span class="hv"><button data-star="${t.id}" title="Favoritar (*)">${t.star?'★':'☆'}</button>${CLOUD?`<button data-attach="${t.id}" title="Anexar imagem — ou cole com Ctrl+V / solte a imagem sobre a linha">${ic('image',14)}</button>`:''}<button class="hdel" data-qdel="${t.id}" title="Excluir atividade">${ic('trash',14)}</button>${flat?'':`<button data-add="${t.id}" title="Nova subatividade">+</button><button data-mv="${t.id}:-1" title="Subir">▲</button><button data-mv="${t.id}:1" title="Descer">▼</button>`}</span>
   </div>
   <div class="rt">
    <span class="cell col-id" data-cid="${t.id}" title="ID ${t.id} — clique para copiar">${esc(t.id)}</span>
    <span class="cell col-a ${t.assignees.length?'':'e'}" data-pop="a:${t.id}" title="Responsáveis">${avs(t)}</span>
    <span class="cell col-t ${t.tags.length?'':'e'}" data-pop="t:${t.id}" title="Etiquetas">${tagChips(t)}</span>
    <span class="cell col-s" data-pop="s:${t.id}" title="Status">${stChip(t)}</span>
    <span class="cell col-i ${ds.i?'':'e'} ${ds.agg?'agg':''}" data-pop="d:${t.id}" title="Data de início">${ds.i}</span>
    <span class="cell col-ih ${ds.ih?'':'e'}" data-pop="d:${t.id}" title="Hora de início">${ds.ih}</span>
    <span class="cell col-d ${dueCls(t)} ${ds.d?'':'e'} ${ds.agg?'agg':''}" data-pop="d:${t.id}" title="${esc((ds.d?'Data de conclusão':'Definir datas')+(hasRep(t)?' — '+repLabel(t):''))}">${ds.d}</span>
    <span class="cell col-dh ${dueCls(t)} ${ds.dh?'':'e'}" data-pop="d:${t.id}" title="Hora de conclusão">${ds.dh}</span>
    <span class="cell col-u ${ds.u?'':'e'}" data-pop="d:${t.id}" title="Duração (início → conclusão, contando os dois dias)">${ds.u}</span>
    <span class="cell col-ds ${t.desc?'':'e'}" data-descid="${t.id}" title="${esc(t.desc||'Adicionar descrição')}">${esc((t.desc||'').replace(/\s+/g,' ').slice(0,140))}</span>
   </div></div>`;
  if(open){
    shown.forEach(k=>h+=rowHTML(k,depth+1));
    if(adding===t.id)h+=addRow(t.id,depth+1);
  }
  return h;
}
function list(){
  if(zoom&&!byId(zoom))zoom=null;
  const roots=zoom?[byId(zoom)]:ptasks().filter(t=>!t.parent);
  const vis=(filtering()||S.hideDone)?roots.filter(matchTree):roots;
  let h=zoom?zoomBar():'';
  h+=`<div class="outline">`+listHeader(ptasks().length);
  const emptyMsg=noProj()?`<div class="empty"><b>Nenhum projeto liberado para você</b>Peça a um administrador para incluir você em um projeto.<br>Assim que ele liberar, o projeto aparece aqui sozinho.</div>`:(!can('add')&&!ptasks().length)?`<div class="empty"><b>Nenhuma atividade neste projeto ainda</b>Seu perfil é somente leitura/comentário.</div>`:!ptasks().length?`<div class="empty"><b>Projeto vazio — vamos começar?</b>Digite na barra acima, por exemplo:<br><span class="ex" data-qaex="Enviar SPED amanhã 14h @${exName()} #fiscal !alta">Enviar SPED amanhã 14h @${exName()} #fiscal !alta</span><span class="ex" data-qaex="Revisar backups toda segunda">Revisar backups toda segunda</span><br>ou crie um projeto pronto com <b style="display:inline">+ Projetos → modelos</b>.</div>`:`<div class="empty"><b>Nenhuma atividade encontrada</b>Ajuste a busca ou os filtros rápidos acima.</div>`;
  h+=vis.map(t=>rowHTML(t,0)).join('')||emptyMsg;
  h+=(adding==='root'?addRow('root',0):`<div class="row addrow" style="min-height:42px"><span class="grip" style="visibility:hidden"></span><span class="gut"></span><div class="main" style="padding-left:16px"><button class="ghost" data-add="root" style="color:var(--ac)">+ Nova seção / atividade</button></div></div>`);
  $('#view').innerHTML=h+'</div>';
}
function smartView(){
  const key=S.smart||'today',pred=qfPred(key);
  if(key==='mine'&&!S.me){$('#view').innerHTML=`<div class="empty"><b>Quem é você?</b>Para ver “Minhas atividades”, marque seu nome em <button id="goTeam">👥 Equipe</button> usando o botão 👤.</div>`;return}
  const ts=S.tasks.filter(t=>isLeaf(t)&&pred(t)&&match(t)).sort((a,b)=>(a.due||'9999').localeCompare(b.due||'9999')||b.prio-a.prio);
  const groups=S.projects.map(p=>[p,ts.filter(t=>t.pid===p.id)]).filter(g=>g[1].length);
  let h='<div class="outline">'+listHeader(ts.length);
  h+=groups.map(([p,l])=>`<div class="row root"><span class="grip" style="visibility:hidden"></span><span class="gut"></span><div class="main"><i class="pd" style="background:${pcol(p)}"></i><span class="tt" style="cursor:default">${esc(p.name)}</span><span class="pg">${l.length}</span></div></div>`+l.map(t=>rowHTML(t,0,true)).join('')).join('')||`<div class="empty"><b>Nada por aqui 🎉</b>${EMPTY[key]||''}</div>`;
  $('#view').innerHTML=h+'</div>';
}

/* ----- adição rápida em linguagem natural ----- */
const WD={domingo:0,segunda:1,terca:2,quarta:3,quinta:4,sexta:5,sabado:6};
const nextWd=w=>plus(today(),((w-new Date().getDay()+7)%7)||7);
/* @pessoa: só vale o nome exato escolhido na lista (nada de adivinhar pelo começo do nome) */
const nameParts=m=>norm(m.name).split(/\s+/).filter(Boolean);
const emailLocal=m=>norm(m.email||'').split('@')[0];
function handleOf(m){
  const p=nameParts(m),first=p[0]||emailLocal(m)||'pessoa';
  if(S.members.filter(x=>x.id!==m.id&&(nameParts(x)[0]||'')===first).length===0)return first;
  const two=p.slice(0,2).join('.');
  if(S.members.filter(x=>x.id!==m.id&&nameParts(x).slice(0,2).join('.')===two).length===0)return two;
  return emailLocal(m)||two;
}
function memberByHandle(q){
  q=norm(q);
  const exact=S.members.filter(m=>handleOf(m)===q);if(exact.length===1)return exact[0];
  const alt=S.members.filter(m=>emailLocal(m)===q||norm(m.email||'')===q||nameParts(m).join('.')===q||nameParts(m).join('-')===q||nameParts(m).join('_')===q);
  if(alt.length===1)return alt[0];
  const fn=S.members.filter(m=>nameParts(m)[0]===q);
  return fn.length===1?fn[0]:null;
}
function parseQuick(raw){
  let s=raw.trim(),n=norm(s);
  const o={assignees:[],tags:[],prio:2,due:'',dueTime:'',repeat:null},left=[];
  const take=re=>{const m=re.exec(n);if(!m)return null;const orig=s.slice(m.index,m.index+m[0].length);s=s.slice(0,m.index)+' '+s.slice(m.index+m[0].length);n=n.slice(0,m.index)+' '+n.slice(m.index+m[0].length);return {m,orig}};
  let r;
  while(r=take(/(^|\s)!(alta|urgente|p1)(?=\s|$)/))o.prio=3;
  while(r=take(/(^|\s)!(media|p2)(?=\s|$)/))o.prio=2;
  while(r=take(/(^|\s)!(baixa|p3)(?=\s|$)/))o.prio=1;
  while(r=take(/(^|\s)@([a-z0-9._-]+)(?=\s|$)/)){
    const mm=memberByHandle(r.m[2]);
    if(mm){if(!o.assignees.includes(mm.id))o.assignees.push(mm.id)}else left.push(r.orig.trim());
  }
  while(r=take(/(^|\s)#([a-z0-9._-]+)(?=\s|$)/)){const nm=r.orig.trim().slice(1),ex=S.tags.find(g=>norm(g.name)===norm(nm));o.tags.push(ex?ex.id:'new:'+nm)}
  const RP=[[/(^|\s)(todo dia|todos os dias|diariamente)(?=\s|$)/,'day'],[/(^|\s)dias uteis(?=\s|$)/,'weekdays'],[/(^|\s)(toda semana|todas as semanas|semanalmente)(?=\s|$)/,'week'],[/(^|\s)(todo mes|todos os meses|mensalmente)(?=\s|$)/,'month'],[/(^|\s)(todo ano|todos os anos|anualmente)(?=\s|$)/,'year']];
  for(const [re,f] of RP){if(take(re)){o.repeat={freq:f,every:1};break}}
  if(!o.repeat&&(r=take(/(^|\s)a cada (\d+) (dias?|semanas?|mes(?:es)?|anos?)(?=\s|$)/))){const u=r.m[3];o.repeat={freq:/^dia/.test(u)?'day':/^sem/.test(u)?'week':/^mes/.test(u)?'month':'year',every:+r.m[2]}}
  if(r=take(/(^|\s)tod[ao]s? (?:as |os )?(segunda|terca|quarta|quinta|sexta|sabado|domingo)s?(?:-feira)?(?=\s|$)/)){o.repeat={freq:'week',every:1};o.due=nextWd(WD[r.m[2]])}
  if(!o.due){
    if(take(/(^|\s)(?:ate )?depois de amanha(?=\s|$)/))o.due=addDays(2);
    else if(take(/(^|\s)(?:ate )?amanha(?=\s|$)/))o.due=addDays(1);
    else if(take(/(^|\s)(?:ate )?hoje(?=\s|$)/))o.due=addDays(0);
    else if(take(/(^|\s)(?:na )?(?:semana que vem|proxima semana)(?=\s|$)/))o.due=addDays(7);
    else if(r=take(/(^|\s)em (\d+) (dias?|semanas?|mes(?:es)?)(?=\s|$)/)){const k=+r.m[2],u=r.m[3];o.due=/^dia/.test(u)?addDays(k):/^sem/.test(u)?addDays(7*k):addInt(today(),'month',k)}
    else if(r=take(/(^|\s)(?:ate |no dia |dia )?(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?(?=\s|$)/)){let y=r.m[4]?+r.m[4]:new Date().getFullYear();if(y<100)y+=2000;const d=new Date(y,+r.m[3]-1,+r.m[2]);if(!r.m[4]&&ymd(d)<today())d.setFullYear(y+1);o.due=ymd(d)}
    else if(r=take(/(^|\s)(?:ate |na |no |proxima |proximo )?(segunda|terca|quarta|quinta|sexta|sabado|domingo)(?:-feira)?(?=\s|$)/))o.due=nextWd(WD[r.m[2]]);
    else if(r=take(/(^|\s)dia (\d{1,2})(?=\s|$)/)){const dd=+r.m[2],d=new Date();let mo=d.getMonth();if(dd<d.getDate())mo++;o.due=ymd(new Date(d.getFullYear(),mo,dd))}
  }
  if(r=take(/(^|\s)(?:as\s+)?(\d{1,2})(?::(\d{2})|h(\d{2})?)(?=\s|$)/)){const hh=+r.m[2];if(hh<24)o.dueTime=pad(hh)+':'+(r.m[3]||r.m[4]||'00')}
  else if(r=take(/(^|\s)as\s+(\d{1,2})(?=\s|$)/)){const hh=+r.m[2];if(hh<24)o.dueTime=pad(hh)+':00'}
  if((o.dueTime||o.repeat)&&!o.due)o.due=today();
  o.title=(s+' '+left.join(' ')).replace(/\s+/g,' ').trim()||raw.trim();
  return o;
}
function quickPreview(){
  const v=$('#qa').value.trim(),P=$('#qaprev');
  if(!v){P.innerHTML='';return}
  const o=parseQuick(v),b=[];
  if(o.due)b.push('📅 '+fmtD(o.due)+(o.dueTime?' às '+o.dueTime:''));
  if(o.repeat)b.push('🔁 '+(o.repeat.every>1?'a cada '+o.repeat.every+' ':'')+(REP.find(x=>x[0]===o.repeat.freq)||[0,''])[1].toLowerCase());
  if(o.assignees.length)b.push('👤 '+o.assignees.map(a=>mem(a).name).join(', '));
  o.tags.forEach(g=>b.push('# '+(g.startsWith('new:')?g.slice(4)+' (nova)':tagOf(g).name)));
  if(o.prio!==2)b.push('! '+PR[o.prio]);
  P.innerHTML=`<span>Será criada: <b style="color:var(--tx)">${esc(o.title)}</b></span>`+b.map(x=>`<span class="pv">${esc(x)}</span>`).join('');
}
function quickAdd(txt){
  txt=txt.trim();if(!txt)return false;
  if(!can('add')){deny('add');return false}
  const o=parseQuick(txt),P=proj();let parent;
  if(zoom&&byId(zoom))parent=zoom;
  else{
    let inbox=S.tasks.find(t=>t.pid===P.id&&!t.parent&&t.sec&&/caixa de entrada/i.test(t.title));
    if(!inbox){inbox=mkTask({pid:P.id,parent:null,title:'📥 Caixa de entrada',sec:true});S.tasks.unshift(inbox)}
    inbox.open=true;parent=inbox.id;
  }
  const tags=o.tags.map(x=>x.startsWith('new:')?createTag(x.slice(4)).id:x);
  const nt=mkTask({pid:P.id,parent,title:o.title,prio:o.prio,due:o.due,dueTime:o.dueTime,repeat:o.repeat,assignees:o.assignees,tags});
  S.tasks.push(nt);
  if(S.view==='dash'||S.view==='smart')S.view='list';
  cur=nt.id;anchor=nt.id;sel=new Set([nt.id]);
  render();markSel(true);toast('✔ Atividade criada'+(o.due?' · 📅 '+fmtD(o.due)+(o.dueTime?' '+o.dueTime:''):''));
  return true;
}

/* ----- calendário ----- */
function calView(){
  const [y,m]=S.calMonth.split('-').map(Number);
  const st=new Date(y,m-1,1-new Date(y,m-1,1).getDay());
  const days=[...Array(42)].map((_,i)=>new Date(st.getFullYear(),st.getMonth(),st.getDate()+i));
  const lf=ptasks().filter(t=>isLeaf(t)&&match(t));
  const by={};lf.filter(t=>t.due).forEach(t=>(by[t.due]=by[t.due]||[]).push(t));
  const nodate=lf.filter(t=>!t.due&&t.status!=='done'),td=today();
  const chip=t=>`<div class="cc ${isLate(t)?'late':''} ${t.status==='done'?'done':''}" draggable="true" data-cd="${t.id}" data-t="${t.id}" title="${esc(t.title)}${t.dueTime?' — '+t.dueTime:''}"><i style="background:${stOf(t.status).c}"></i>${t.ms?'◆ ':''}${t.dueTime?`<b>${t.dueTime}</b>`:''} ${esc(t.title)}</div>`;
  const label=new Date(y,m-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
  let h=`<div class="calhead"><button data-cal="-1">‹</button><button data-cal="0">Hoje</button><button data-cal="1">›</button><h3>${label[0].toUpperCase()+label.slice(1)}</h3><span class="hint">Arraste uma atividade para outro dia para reagendar · passe o mouse sobre um dia e clique em + para criar</span></div>
  <div class="calwrap"><div class="cal">${['dom','seg','ter','qua','qui','sex','sáb'].map(d=>`<div class="cwd">${d}</div>`).join('')}`;
  days.forEach(d=>{const k=ymd(d);h+=`<div class="cd ${d.getMonth()!==m-1?'off':''} ${k===td?'today':''}" data-day="${k}"><div class="cdn"><span>${d.getDate()}</span><button class="cadd" data-caladd="${k}" title="Nova atividade neste dia">+</button></div>${(by[k]||[]).map(chip).join('')}</div>`});
  h+=`</div><aside class="cside"><h4>Sem data (${nodate.length})</h4>${nodate.map(chip).join('')||'<div class="hint">Todas as atividades abertas têm prazo ✔</div>'}<div class="hint" style="margin-top:10px">Arraste para um dia para definir o prazo.</div></aside></div>`;
  $('#view').innerHTML=h;
}
let cdrag=null;
function reschedule(id,day){
  const t=byId(id);if(!t)return;
  if(t.start&&t.due)t.start=plus(t.start,diffDays(t.due,day));
  t.due=day;normDates(t);render();toast('📅 Novo prazo: '+fmtD(day));
}

/* ----- cronograma (Gantt) ----- */
let gScroll=0,gScrollSet=false,gd=null;
const gpx=()=>S.gz==='month'?9:30;
function ganttRows(){
  const out=[],f=filtering();
  (function w(par,d){ptasks().filter(t=>(t.parent||null)===par).forEach(t=>{if((f||S.hideDone)&&!matchTree(t))return;out.push({t,d});if(kidsOf(t.id).length&&(f||t.open!==false))w(t.id,d+1)})})(null,0);
  return out;
}
function tspan(t){
  if(isLeaf(t)){const a=t.start||t.due,b=t.due||t.start;return a?[a,b<a?a:b]:null}
  let a=null,b=null;
  leavesUnder(t).forEach(x=>{const s=tspan(x);if(s){if(!a||s[0]<a)a=s[0];if(!b||s[1]>b)b=s[1]}});
  return a?[a,b]:null;
}
function gantt(){
  const px=gpx(),rows=ganttRows(),td=today();
  let mn=null,mx=null;
  rows.forEach(r=>{const s=tspan(r.t);if(s){if(!mn||s[0]<mn)mn=s[0];if(!mx||s[1]>mx)mx=s[1]}});
  if(!mn){mn=plus(td,-3);mx=plus(td,30)}
  if(td<mn)mn=td;if(td>mx)mx=td;
  mn=plus(mn,-4);mx=plus(mx,10);
  const d0=dparse(mn);d0.setDate(d0.getDate()-((d0.getDay()+6)%7));mn=ymd(d0);
  const nd=diffDays(mn,mx)+1,W=nd*px,X=d=>diffDays(mn,d)*px;
  let mo='',dy='';
  for(let i=0;i<nd;i++){
    const d=dparse(plus(mn,i)),x=i*px;
    if(i===0||d.getDate()===1){const left=new Date(d.getFullYear(),d.getMonth()+1,0).getDate()-d.getDate()+1;mo+=`<div class="gmo" style="left:${x}px;width:${Math.min(nd-i,left)*px}px">${(m=>m[0].toUpperCase()+m.slice(1))(d.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}))}</div>`}
    if(px>=20)dy+=`<div class="gdy ${d.getDay()%6===0?'we':''}" style="left:${x}px;width:${px}px">${d.getDate()}</div>`;
    else if(d.getDay()===1)dy+=`<div class="gdy" style="left:${x}px;width:${px*7}px">${pad(d.getDate())}/${pad(d.getMonth()+1)}</div>`;
  }
  let left='',right='',pos={};
  rows.forEach((r,i)=>{
    const t=r.t,s=tspan(t),leaf=isLeaf(t),done=t.status==='done',f=filtering();
    left+=`<div class="gln" style="padding-left:${8+r.d*18}px"><span class="tg" ${leaf?'':`data-tg="${t.id}"`}>${leaf?'':(t.open!==false||f?'▾':'▸')}</span><span class="tt" data-t="${t.id}" style="cursor:pointer;font-weight:${leaf?400:700}">${t.ms?'◆ ':''}${esc(t.title)}</span><small data-pop="d:${t.id}" title="Definir datas">${s?fmtS(s[0])+(s[0]!==s[1]?' → '+fmtS(s[1]):''):'+ datas'}</small></div>`;
    let bar='';
    if(s){
      const x=X(s[0]),w=Math.max(px*(diffDays(s[0],s[1])+1),px*.8);
      pos[t.id]={x,w,i};
      if(!leaf){const p=prog(t);bar=`<div class="gb sec" style="left:${x}px;width:${w}px" title="${esc(t.title)}"><i class="gp" style="width:${p&&p[1]?p[0]/p[1]*100:0}%;background:var(--ok);opacity:1"></i></div>`}
      else if(t.ms){const mx2=X(s[1])+px/2-10;pos[t.id]={x:mx2,w:20,i};bar=`<div class="gb ms" data-gb="${t.id}" style="left:${mx2}px" title="Marco: ${esc(t.title)}">◆</div>`}
      else bar=`<div class="gb ${isLate(t)?'late':''}" data-gb="${t.id}" style="left:${x}px;width:${w}px;background:${stOf(t.status).c};${done?'opacity:.55':''}" title="${esc(t.title)} — arraste para mover; bordas alteram início/fim"><span class="gh l" data-gh="l"></span>${w>80?esc(t.title):''}<span class="gh r" data-gh="r"></span></div>`;
    }
    right+=`<div class="grow" style="background-image:linear-gradient(to right,var(--bd) 1px,transparent 1px);background-size:${px*7}px 100%">${bar}</div>`;
  });
  let arrows='';
  rows.forEach(r=>(r.t.deps||[]).forEach(did=>{
    const a=pos[did],b=pos[r.t.id];if(!a||!b)return;
    const x1=a.x+a.w,y1=a.i*36+18,x2=b.x,y2=b.i*36+18,bad=x2<x1;
    arrows+=`<path d="M${x1},${y1} h8 V${y2} H${x2-2}" fill="none" stroke="${bad?'#ff6b7a':'#8c96ab'}" stroke-width="1.6" marker-end="url(#ah)"/>`;
  }));
  const bar=`<div class="gbar2"><b>Cronograma</b><div class="tabs" style="padding:2px"><button data-gz="week" class="${S.gz==='week'?'on':''}">Semanas</button><button data-gz="month" class="${S.gz==='month'?'on':''}">Meses</button></div><button data-gtoday="1">Ir para hoje</button><span class="hint" style="margin:0">Arraste a barra para mover · arraste as bordas para mudar início/fim · setas ligam dependências (vermelha = conflito)</span></div>`;
  $('#view').innerHTML=`<div class="gwrap">${bar}<div class="gscroll" id="gsc"><div class="gt"><div class="gl"><div class="gh1">Atividade · datas</div>${left}</div><div class="gr" style="width:${W}px"><div class="gth" style="width:${W}px">${mo}${dy}</div>${right}<div class="gnow" style="left:${X(td)+px/2}px"></div><svg class="gsvg" width="${W}" height="${rows.length*36}"><defs><marker id="ah" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#8c96ab"/></marker></defs>${arrows}</svg></div></div></div></div>`+(rows.length?'':'<div class="empty"><b>Sem atividades para exibir</b>Adicione atividades com datas para ver o cronograma.</div>');
  const sc=$('#gsc');
  if(sc){sc.scrollLeft=gScrollSet?gScroll:Math.max(0,X(td)-260);sc.onscroll=()=>{gScroll=sc.scrollLeft;gScrollSet=true}}
}
document.addEventListener('mousedown',e=>{
  const b=e.target.closest&&e.target.closest('.gb[data-gb]');if(!b||e.button!==0)return;
  const h=e.target.dataset&&e.target.dataset.gh;
  gd={id:b.dataset.gb,mode:h==='l'?'l':h==='r'?'r':'m',x0:e.clientX,el:b,left0:parseFloat(b.style.left),w0:parseFloat(b.style.width)||20,moved:false,ro:!canEdit(byId(b.dataset.gb))};
  e.preventDefault();
});
document.addEventListener('mousemove',e=>{
  if(!gd)return;const dx=e.clientX-gd.x0;if(Math.abs(dx)>3)gd.moved=true;if(!gd.moved||gd.ro)return;
  const px=gpx(),sn=Math.round(dx/px)*px;
  if(gd.mode==='m')gd.el.style.left=(gd.left0+sn)+'px';
  else if(gd.mode==='r')gd.el.style.width=Math.max(px,gd.w0+sn)+'px';
  else{gd.el.style.left=(gd.left0+sn)+'px';gd.el.style.width=Math.max(px,gd.w0-sn)+'px'}
});
document.addEventListener('mouseup',e=>{
  if(!gd)return;const g=gd;gd=null;
  if(!g.moved){openTask(g.id);return}
  if(g.ro){render();deny('edit');return}
  const t=byId(g.id),days=Math.round((e.clientX-g.x0)/gpx());if(!t)return;
  if(days===0){render();return}
  if(g.mode==='m'){if(t.start)t.start=plus(t.start,days);if(t.due)t.due=plus(t.due,days)}
  else if(g.mode==='r'){const b=t.due||t.start;t.due=plus(b,days);if(t.start&&t.due<t.start)t.due=t.start}
  else{const b=t.start||t.due;t.start=plus(b,days);if(t.due&&t.start>t.due)t.start=t.due}
  normDates(t);render();
});

/* ----- carga de trabalho (Pessoas) ----- */
function wkOf(s){const d=dparse(s);d.setDate(d.getDate()-((d.getDay()+6)%7));return ymd(d)}
function people(){
  const w0=wkOf(today()),weeks=[...Array(8)].map((_,i)=>plus(w0,i*7));
  const cols=['late',...weeks,'later','nodate'];
  const tasks=ptasks().filter(t=>isLeaf(t)&&t.status!=='done'&&match(t));
  const P=[...S.members.map(m=>({id:m.id,n:m.name,c:m.color,cap:m.cap||40})),{id:'none',n:'Sem responsável',c:'#667085',cap:40}];
  const grid={},add=(pid,col,h,t)=>{const k=pid+'|'+col,c=grid[k]=grid[k]||{h:0,list:[]};c.h+=h;if(!c.list.includes(t))c.list.push(t)};
  tasks.forEach(t=>{
    const eff=t.est||1,owners=t.assignees.length?t.assignees:['none'];
    owners.forEach(o=>{
      const h=eff/owners.length;
      if(isLate(t)){add(o,'late',h,t);return}
      const a=t.start||t.due,b=t.due||t.start;
      if(!a){add(o,'nodate',h,t);return}
      const dys=[];for(let d=a,k=0;d<=b&&k<250;d=plus(d,1),k++){if(dparse(d).getDay()%6)dys.push(d)}
      if(!dys.length)dys.push(a);
      dys.forEach(d=>{const w=wkOf(d);add(o,w<weeks[0]?weeks[0]:w>weeks[7]?'later':w,h/dys.length,t)});
    });
  });
  const lab={late:'Atrasadas',later:'Depois',nodate:'Sem data'};
  let h=`<div class="card2"><h4>Carga de trabalho — próximas 8 semanas</h4><div class="hint" style="margin:-6px 0 12px">Horas por pessoa e semana (soma das estimativas). Atividade sem estimativa conta 1 h. A capacidade (h/semana) de cada pessoa é editada em Configurações → Membros. Clique numa célula para ver as atividades.</div><div style="overflow:auto"><table class="wl"><tr><th style="text-align:left">Pessoa</th>${cols.map(c=>`<th>${lab[c]||new Date(c+'T00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})}</th>`).join('')}</tr>`;
  P.forEach(p=>{
    const tot=Object.keys(grid).filter(k=>k.startsWith(p.id+'|')).reduce((a,k)=>a+grid[k].list.length,0);
    if(p.id==='none'&&!tot)return;
    h+=`<tr><td><div class="wn"><span class="av" style="background:${p.c};border-color:transparent">${esc(ini(p.n))}</span><div><b>${esc(p.n)}</b><div class="hint" style="margin:0">${p.id==='none'?'sem dono':'cap. '+p.cap+' h/sem'}</div></div></div></td>`;
    cols.forEach(c=>{
      const g=grid[p.id+'|'+c],hrs=g?g.h:0,r=hrs/p.cap;
      const lv=!g?0:c==='late'?4:(c==='later'||c==='nodate')?2:r<.5?1:r<=.9?2:r<=1.1?3:4;
      h+=`<td><div class="wc l${lv}" ${g?`data-wl="${p.id}|${c}"`:''}>${g?(Math.round(hrs*10)/10)+'h':'—'}${g?`<small>${g.list.length} atividade(s)</small>`:''}</div></td>`;
    });
    h+='</tr>';
  });
  h+=`</table></div><div class="hint" style="margin-top:12px">Cores: <span style="color:var(--ok)">■</span> folga · <span style="color:var(--ac)">■</span> adequado · <span style="color:var(--amb)">■</span> no limite · <span style="color:var(--red)">■</span> sobrecarga / atrasadas</div></div>`;
  $('#view').innerHTML=h;
  window._wl=grid;
}
function wlDetail(key){
  const g=(window._wl||{})[key];if(!g)return;
  const [pid,col]=key.split('|'),M=$('#modal');M.dataset.kind='wl';
  const who=pid==='none'?'Sem responsável':(mem(pid)||{}).name;
  M.innerHTML=`<h3>${esc(who)} — ${col==='late'?'Atrasadas':col==='later'?'Depois':col==='nodate'?'Sem data':'Semana de '+fmtD(col)}</h3>`+g.list.map(t=>`<div class="al" data-goto="${t.id}"><span>${esc(t.title)}</span><small>${t.est?t.est+' h':'1 h (sem estimativa)'}${t.due?' · '+fmtS(t.due):''}</small></div>`).join('')+`<div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
}

/* ----- saúde (semáforo), resumo e painel extra ----- */
function health(l){
  const op=l.filter(t=>t.status!=='done');
  if(!l.length)return{c:'var(--mu)',l:'Sem atividades'};
  if(!op.length)return{c:'var(--ok)',l:'Concluída'};
  const late=op.filter(isLate).length,bl=op.filter(t=>QF.blocked(t)).length;
  if(late/op.length>=.2||late>=3)return{c:'var(--red)',l:'Em risco'};
  if(late||bl)return{c:'var(--amb)',l:'Atenção'};
  return{c:'var(--ok)',l:'No prazo'};
}
function dashScope(){const all=S.dash==='all',pids=all?S.projects.map(p=>p.id):[proj().id],T=S.tasks.filter(t=>pids.includes(t.pid));return{all,T,L:T.filter(isLeaf)}}
function dash(){dashBase();dashExtra()}
function dashExtra(){
  const {all,T,L}=dashScope(),op=L.filter(t=>t.status!=='done');
  const kp=document.querySelector('#view .kpis');if(!kp)return;
  const dh=document.querySelector('#view .dh .seg');
  if(dh)dh.insertAdjacentHTML('beforebegin','<button data-act2="summary">✉ Resumo executivo</button><button data-act2="pdf">📄 Exportar PDF</button><button data-act2="xls">📊 Excel</button>');
  const groups=[];
  if(all)S.projects.forEach(p=>{const l=L.filter(t=>t.pid===p.id);if(l.length)groups.push([p.name,l])});
  else T.filter(t=>!t.parent).forEach(t=>groups.push([t.title,leavesUnder(t)]));
  const hl=groups.map(([n,l])=>{const hh=health(l),d=l.filter(t=>t.status==='done').length;return `<tr><td>${esc(n)}</td><td><span class="rag" style="color:${hh.c};border-color:${hh.c}">● ${hh.l}</span></td><td style="text-align:right;color:var(--mu)">${d}/${l.length}</td></tr>`}).join('')||'<tr><td>—</td></tr>';
  const days=[...Array(30)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-(29-i));d.setHours(23,59,59,999);return d});
  const vals=days.map(d=>L.filter(t=>t.created<=d.getTime()&&!(t.status==='done'&&t.doneAt&&t.doneAt<=d.getTime())).length);
  const mxv=Math.max(1,...vals),Wc=520,Hc=130;
  const pts=vals.map((v,i)=>[10+i*(Wc-20)/29,Hc-12-v/mxv*(Hc-30)]);
  const line=pts.map(p=>p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
  const evo=`<svg viewBox="0 0 ${Wc} ${Hc+14}" width="100%" style="max-height:170px"><polygon points="10,${Hc-12} ${line} ${Wc-10},${Hc-12}" style="fill:var(--ac);opacity:.15"/><polyline points="${line}" fill="none" style="stroke:var(--ac)" stroke-width="2.5" stroke-linejoin="round"/><text x="10" y="${Hc+8}" style="fill:var(--mu)" font-size="11">${days[0].toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})}</text><text x="${Wc-10}" y="${Hc+8}" text-anchor="end" style="fill:var(--mu)" font-size="11">hoje · ${vals[29]} abertas</text><text x="10" y="12" style="fill:var(--mu)" font-size="11">máx. ${mxv}</text></svg><div class="hint">Atividades abertas por dia, calculadas a partir das datas de criação e conclusão.</div>`;
  const est=op.reduce((a,t)=>a+(t.est||0),0),spent=L.reduce((a,t)=>a+(t.spent||0),0);
  const kpi=(v,l,c='')=>`<div class="kpi ${c}"><b>${v}</b><span>${l}</span></div>`;
  const waiting=op.filter(t=>depsBlocked(t)).length,ms=L.filter(t=>t.ms&&t.status!=='done').length;
  kp.insertAdjacentHTML('afterend',`<div class="kpis">${kpi(Math.round(est*10)/10+' h','Horas estimadas (abertas)')}${kpi(Math.round(spent*10)/10+' h','Horas registradas')}${kpi(waiting,'Aguardando dependência','a')}${kpi(ms,'Marcos pendentes')}</div>
  <div class="grid"><div class="card2"><h4>Saúde por ${all?'projeto':'seção'}</h4><table>${hl}</table><div class="hint">🟢 no prazo · 🟡 atenção (atraso ou impedimento) · 🔴 em risco (20%+ atrasadas)</div></div><div class="card2" style="grid-column:span 2;min-width:0"><h4>Evolução — últimos 30 dias</h4>${evo}</div></div>`);
}
function summaryText(){
  const {all,L}=dashScope(),op=L.filter(t=>t.status!=='done'),late=op.filter(isLate);
  const soon=op.filter(t=>t.due&&!isLate(t)&&dayDiff(t.due)<=7).sort((a,b)=>a.due.localeCompare(b.due));
  const bl=L.filter(QF.blocked),d7=L.filter(t=>(t.doneLog||[]).some(x=>Date.now()-x<7*864e5));
  const pct=L.length?Math.round((L.length-op.length)/L.length*100):0;
  const nm=t=>'• '+t.title+(t.assignees.length?' ('+t.assignees.map(a=>(mem(a)||{}).name).filter(Boolean).join(', ')+')':'')+(t.due?' — '+fmtD(t.due):'');
  const sec=(ttl,arr)=>arr.length?`\n${ttl} (${arr.length})\n`+arr.slice(0,10).map(nm).join('\n')+(arr.length>10?`\n… e mais ${arr.length-10}`:'')+'\n':'';
  return `RESUMO EXECUTIVO — ${all?'Todos os projetos':proj().name}\n${new Date().toLocaleDateString('pt-BR',{dateStyle:'full'})}\n\nProgresso: ${pct}% (${L.length-op.length} de ${L.length} atividades concluídas)\nEm andamento: ${op.filter(t=>t.status==='doing').length} · Atrasadas: ${late.length} · Vencem em 7 dias: ${soon.length} · Impedidas: ${bl.length}\nConcluídas nos últimos 7 dias: ${d7.length}\n`+sec('⚠ ATRASADAS',late)+sec('📅 PRÓXIMOS 7 DIAS',soon)+sec('🚧 IMPEDIDAS / AGUARDANDO',bl)+(S.me?'':'')+'\n— Gerado pelo Controle de Atividades';
}

/* ----- alertas (sino) ----- */
function openAlerts(){
  editing=null;closePop();const M=$('#modal');M.dataset.kind='alerts';
  const L=S.tasks.filter(isLeaf),op=L.filter(t=>t.status!=='done'),td=today();
  const sec=(ttl,arr,c)=>arr.length?`<h4 style="margin:14px 0 4px;color:${c}">${ttl} (${arr.length})</h4>`+arr.slice(0,8).map(t=>`<div class="al" data-goto="${t.id}"><span>${esc(t.title)}</span><small>${esc((S.projects.find(p=>p.id===t.pid)||{}).name||'')}${t.due?' · '+fmtS(t.due):''}</small></div>`).join('')+(arr.length>8?`<div class="hint">+ ${arr.length-8} outras</div>`:''):'';
  const body=sec('⚠ Atrasadas',op.filter(isLate),'var(--red)')+sec('🗓 Vencem hoje',op.filter(t=>t.due===td&&!isLate(t)),'var(--amb)')+sec('📅 Vencem amanhã',op.filter(t=>t.due&&dayDiff(t.due)===1),'var(--ac)')+sec('🚧 Impedidas',op.filter(t=>t.status==='blocked'),'var(--red)')+sec('🔒 Aguardando dependência',op.filter(t=>t.status!=='blocked'&&depsBlocked(t)),'var(--mu)');
  M.innerHTML=`<h3>🔔 Central de alertas</h3>${body||'<div class="empty"><b>Tudo em dia 🎉</b>Nenhum alerta no momento.</div>'}<div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
}

/* ----- automações ----- */
const RULES=[['parentDone','Concluir a atividade-mãe automaticamente','Quando todas as subatividades são concluídas, a atividade-mãe (ou seção) também vira “Concluído” — e reabre se uma subatividade voltar.'],['lateHigh','Atrasou? Prioridade Alta','Atividades atrasadas sobem sozinhas para prioridade Alta.'],['blockedTag','Marcar impedidas com a etiqueta “Impedido”','Ao mudar o status para “Impedido” a etiqueta é aplicada, e removida quando o status muda.'],['autoStart','Iniciar atividades na data de início','Atividades “A fazer” cuja data de início chegou passam para “Em andamento”.']];
function runRules(){
  const R=S.rules||{};let ch=false;
  if(R.parentDone){S.tasks.filter(t=>!isLeaf(t)).sort((a,b)=>depthOf(b)-depthOf(a)).forEach(p=>{const ks=kidsOf(p.id),all=ks.every(k=>k.status==='done');if(all&&p.status!=='done'){setStatus(p,'done');ch=true}else if(!all&&p.status==='done'){p.status='doing';p.doneAt=null;ch=true}})}
  if(R.lateHigh)S.tasks.forEach(t=>{if(isLate(t)&&t.prio<3){t.prio=3;ch=true}});
  if(R.blockedTag){
    const need=S.tasks.some(t=>t.status==='blocked');let g=S.tags.find(x=>x.name==='Impedido');
    if(need&&!g)g=createTag('Impedido');
    if(g)S.tasks.forEach(t=>{const b=t.status==='blocked',has=t.tags.includes(g.id);if(b&&!has){t.tags.push(g.id);ch=true}else if(!b&&has){t.tags=t.tags.filter(x=>x!==g.id);ch=true}});
  }
  if(R.autoStart)S.tasks.forEach(t=>{if(isLeaf(t)&&t.status==='todo'&&t.start&&t.start<=today()){t.status='doing';ch=true}});
  return ch;
}
function openRules(){
  if(!can('rules')){deny('rules');return}
  editing=null;closePop();const M=$('#modal');M.dataset.kind='rules';
  M.innerHTML=`<h3>⚡ Automações</h3><div class="hint" >Regras “quando isso acontece, faça aquilo”. Ligue só as que fizerem sentido para você.</div>${RULES.map(r=>`<label class="rule" style="margin:0;font-size:14px;color:var(--tx);font-weight:400"><input type="checkbox" data-rule="${r[0]}" ${S.rules[r[0]]?'checked':''}><div><b>${r[1]}</b><small>${r[2]}</small></div></label>`).join('')}<div class="hint">Atividades recorrentes já se reagendam sozinhas ao serem concluídas (defina em Prazo → Repetir).</div><div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
}

/* ----- modelos de projeto ----- */
const TPL=[
 {id:'blank',i:'📄',n:'Projeto em branco',d:'Comece do zero e monte do seu jeito.',s:[]},
 {id:'fiscal',i:'🧾',n:'Fechamento fiscal mensal',d:'Documentos, apuração, SPED/EFD e entrega ao cliente.',s:[
  ['Preparação',[['Receber documentos e extratos do cliente',2,{prio:3,est:2}],['Importar XMLs e notas do período',3,{est:2}]]],
  ['Apuração',[['Conferir CFOP / CST e inconsistências',6,{est:4,tags:['fiscal']}],['Apurar PIS e COFINS',7,{prio:3,est:3,tags:['fiscal']}],['Apurar ICMS e IPI',8,{est:3,tags:['fiscal']}]]],
  ['Obrigações acessórias',[['Gerar SPED Fiscal',10,{prio:3,est:2,tags:['fiscal']}],['Gerar EFD Contribuições',11,{prio:3,est:2,tags:['fiscal']}],['Validar no PVA e transmitir',13,{prio:3,est:1,ms:true,tags:['fiscal']}]]],
  ['Entrega',[['Enviar guias e relatório ao cliente',15,{est:1}],['Arquivar evidências do fechamento',16,{est:1,ms:true}]]]]},
 {id:'cliente',i:'🤝',n:'Implantação de cliente',d:'Kickoff, levantamento, configuração, treinamento e go-live.',s:[
  ['Kickoff',[['Reunião de kickoff',3,{est:2,ms:true}],['Definir escopo e responsáveis',5,{est:2}]]],
  ['Levantamento',[['Mapear processos atuais',10,{est:6}],['Coletar acessos e credenciais',10,{est:2}]]],
  ['Configuração',[['Configurar ambiente',20,{est:8}],['Migrar dados',24,{est:8,prio:3}]]],
  ['Treinamento e go-live',[['Treinar usuários',28,{est:4}],['Go-live',30,{ms:true,prio:3}],['Acompanhamento pós go-live',37,{est:3}]]]]},
 {id:'ti',i:'🖥',n:'Rotina de TI',d:'Rotinas diárias, semanais e mensais de infraestrutura.',s:[
  ['Diário',[['Verificar backups',1,{est:.5}],['Monitorar servidores e alertas',1,{est:.5}]]],
  ['Semanal',[['Revisar chamados em aberto',5,{est:2}],['Testar restauração de backup',6,{est:1}]]],
  ['Mensal',[['Aplicar atualizações e patches',25,{est:4,prio:3}],['Revisar acessos e licenças',28,{est:2}],['Relatório mensal de TI',30,{est:2,ms:true}]]]]},
 {id:'proj',i:'🚀',n:'Projeto genérico',d:'Planejar › Executar › Entregar, com marcos.',s:[
  ['Planejar',[['Definir objetivo e escopo',5,{est:2}],['Montar cronograma',7,{est:3,ms:true}]]],
  ['Executar',[['Etapa 1',15,{est:8}],['Etapa 2',25,{est:8}]]],
  ['Entregar',[['Validar com o cliente',30,{est:2}],['Entrega final',33,{ms:true,prio:3}]]]]}
];
let tplSel='blank';
function openNewProject(){
  if(!can('project')){deny('project');return}
  editing=null;closePop();tplSel='blank';const M=$('#modal');M.dataset.kind='newproj';
  M.innerHTML=`<h3>+ Novo projeto</h3><label style="margin-top:0">Nome do projeto</label><input id="np_name" placeholder="Ex.: Fechamento fiscal — Cliente X"><label>Comece com um modelo pronto</label>${TPL.map(t=>`<div class="tpl ${t.id==='blank'?'on':''}" data-tpl="${t.id}"><div style="font-size:24px">${t.i}</div><div><b>${t.n}</b><small>${t.d}</small></div></div>`).join('')}<div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="np_go">Criar projeto</button></span></div>`;
  $('#ov').classList.add('on');$('#np_name').focus();
}
function createFromTemplate(name,id){
  const tpl=TPL.find(x=>x.id===id)||TPL[0],p={id:uid(),name:name||tpl.n};S.projects.push(p);
  tpl.s.forEach(([sec,items])=>{
    const root=mkTask({pid:p.id,parent:null,title:sec});S.tasks.push(root);
    items.forEach(([title,days,o])=>{o=o||{};S.tasks.push(mkTask({pid:p.id,parent:root.id,title,due:addDays(days),prio:o.prio||2,est:o.est||0,ms:!!o.ms,tags:(o.tags||[]).map(g=>createTag(g).id)}))});
  });
  S.cur=p.id;S.view='list';cur=null;sel=new Set();zoom=null;
}

/* ----- painel da atividade: horas, favorita e dependências ----- */
function wouldCycle(id,dep){const seen=new Set(),st=[dep];while(st.length){const x=st.pop();if(x===id)return true;if(seen.has(x))continue;seen.add(x);const t=byId(x);(t&&t.deps||[]).forEach(d=>st.push(d))}return false}
function addDep(id,dep){const t=byId(id);if(!t||id===dep||t.deps.includes(dep)||wouldCycle(id,dep)){toast('Dependência inválida (criaria um ciclo)');return}t.deps.push(dep)}
function depConflict(t){
  const p=(t.deps||[]).map(byId).filter(x=>x&&x.status!=='done'&&x.due);if(!p.length||t.status==='done')return null;
  const end=p.map(x=>x.due).sort().pop(),s=t.start||t.due;
  return s&&s<=end?`Começa em ${fmtS(s)}, antes do fim da predecessora (${fmtS(end)}).`:null;
}
function reschedAfterDeps(id){
  const t=byId(id),ends=(t.deps||[]).map(byId).filter(x=>x&&x.due).map(x=>x.due).sort();if(!ends.length)return;
  const ns=plus(ends[ends.length-1],1),dur=(t.start&&t.due)?diffDays(t.start,t.due):0;t.start=ns;t.due=plus(ns,dur);
}
function toggleTimer(id){
  const t=byId(id);if(!t)return;
  if(t.timerStart){t.spent=(+t.spent||0)+(Date.now()-t.timerStart)/36e5;t.timerStart=null;toast('⏹ Tempo registrado')}
  else{t.timerStart=Date.now();toast('▶ Cronômetro iniciado')}
}
function taskExtraHTML(t){
  const banned=new Set([t.id,...desc(t.id).map(d=>d.id),...t.deps]);
  const opts=S.tasks.filter(x=>x.pid===t.pid&&!banned.has(x.id)&&!wouldCycle(t.id,x.id)).map(x=>`<option value="${x.id}">${esc('— '.repeat(depthOf(x))+x.title)}</option>`).join('');
  const chips=t.deps.map(byId).filter(Boolean).map(x=>`<span class="ac on" style="background:${x.status==='done'?'var(--ok)':'var(--amb)'};max-width:280px;opacity:1" data-dep-del="${x.id}" title="Clique para remover">${x.status==='done'?'✓':'⏳'} ${esc(x.title)} ✕</span>`).join('');
  const cf=depConflict(t);
  return `<div class="g4">
    <div><label>Estimativa (h)</label><input id="m_est" value="${t.est||''}" placeholder="0"></div>
    <div><label>Registrado (h)</label><input id="m_spent" value="${t.spent?Math.round(t.spent*100)/100:''}" placeholder="0"></div>
    <div style="grid-column:span 2;align-self:end;display:flex;gap:12px;align-items:center;flex-wrap:wrap"><button id="m_timer">${t.timerStart?'⏹ Parar ('+fmtDur(Date.now()-t.timerStart)+')':'▶ Iniciar cronômetro'}</button><label style="display:inline-flex;gap:6px;align-items:center;margin:0;color:var(--tx)"><input type="checkbox" id="m_star" ${t.star?'checked':''}>★ Favorita</label></div>
  </div>
  <label>Depende de (predecessoras) — a atividade fica 🔒 até serem concluídas</label>
  <div class="pick">${chips}<select id="m_dep" style="width:auto;max-width:300px"><option value="">+ adicionar dependência…</option>${opts}</select></div>
  ${cf?`<div class="hint" style="color:var(--red)">⚠ ${cf} <button id="m_resched">Reagendar após predecessoras</button></div>`:''}`;
}

/* ----- ajuda: guia rápido + atalhos ----- */
function guideHTML(){
  const ex=s=>`<span class="ex" data-qaex="${esc(s)}">${esc(s)}</span>`;
  return `<div class="steps">
   <div class="step"><b><span class="n">1</span>Adicione rápido</b><p>Use a barra no topo (tecla <kbd>q</kbd>). Escreva do jeito natural — datas, pessoas, etiquetas e prioridade são entendidos:</p>${ex('Enviar SPED amanhã 14h @${exName()} #fiscal !alta')}${ex('Revisar backups toda segunda')}${ex('Reunião com cliente 05/11 10h')}</div>
   <div class="step"><b><span class="n">2</span>Organize em níveis</b><p>Atividades podem ter subatividades sem limite. Arraste pelo <b>⋮⋮</b>: borda de cima/baixo = mesmo nível, meio = vira subatividade. Clique no nome para renomear.</p></div>
   <div class="step"><b><span class="n">3</span>Edite sem abrir o painel</b><p>Na lista, clique direto em <b>Resp.</b>, <b>Etiquetas</b>, <b>Status</b> ou <b>Prazo</b>. Quer tudo de uma vez? Botão <b>⤢ abrir</b> (ou Espaço).</p></div>
   <div class="step"><b><span class="n">4</span>Veja do jeito certo</b><p><b>Lista</b> (detalhe) · <b>Quadro</b> (fluxo) · <b>Calendário</b> (prazos) · <b>Cronograma</b> (Gantt com dependências) · <b>Pessoas</b> (carga de trabalho) · <b>Painel</b> (visão executiva).</p></div>
   <div class="step"><b><span class="n">5</span>Foque no que importa</b><p>Na lateral, <b>Hoje</b>, <b>Próximos 7 dias</b>, <b>Atrasadas</b> e <b>Minhas atividades</b> reúnem todos os projetos. O botão <b>Filtros</b> (acima da lista) filtra o projeto atual.</p></div>
   <div class="step"><b><span class="n">6</span>Acompanhe e reporte</b><p>🔔 mostra alertas. No <b>Painel</b>, use <b>Resumo executivo</b> para gerar o texto de status e enviar por e-mail.</p></div>
  </div>
  <div class="hint" style="margin-top:14px"><b>Glossário:</b> <b>Seção</b> = grupo de atividades (linha em destaque) · <b>Marco</b> ◆ = entrega-chave · <b>Dependência</b> 🔒 = só começa quando a predecessora termina · <b>Saúde</b> 🟢🟡🔴 = situação da seção no painel · <b>Automações</b> ⚡ = regras “quando… faça…” · <b>Perfis</b> = Administrador, Normal, Limitado e Convidado (⚙ Configurações).</div>`;
}
function toggleHelp(force){
  const M=$('#modal');
  if($('#ov').classList.contains('on')&&M.dataset.kind==='help'&&force!==true){closeModal();render();return}
  editing=null;closePop();M.dataset.kind='help';M.style.width='min(1020px,100%)';
  const tab=S.helpTab||'guia';
  M.innerHTML=`<div style="display:flex;align-items:center;gap:10px"><h3 style="flex:1">❔ Ajuda</h3><button id="g_ok">Fechar (F1 / Esc)</button></div>
  <div class="tabs2"><button data-htab="guia" class="${tab==='guia'?'on':''}">Guia rápido</button><button data-htab="atalhos" class="${tab==='atalhos'?'on':''}">⌨ Atalhos de teclado</button></div>
  ${tab==='guia'?guideHTML():`<div class="hk">${HELP.map(sec=>`<div class="hs"><h4>${sec[0]}</h4>${sec[1].map(r=>`<div class="hr"><span class="kk">${K(r[0])}</span><span>${esc(r[1])}</span></div>`).join('')}</div>`).join('')}</div><div class="hint">Os atalhos de uma tecla (t, d, c, o…) funcionam quando você não está digitando em um campo. Clique numa atividade (ou use ↑ ↓) para selecioná-la.</div>`}`;
  $('#ov').classList.add('on');
}
function openWelcome(){
  S.seen=true;save();editing=null;closePop();const M=$('#modal');M.dataset.kind='welcome';M.style.width='min(900px,100%)';
  M.innerHTML=`<h3 style="font-size:22px;margin-bottom:4px">👋 Bem-vindo ao seu Controle de Atividades</h3><div class="hint" style="margin:0 0 14px">Reunimos o melhor de Planner, Todoist, Trello, Quire, Wrike e monday num só lugar. Em 1 minuto você já domina:</div>${guideHTML()}<div class="acts"><button id="w_keys">Ver atalhos de teclado</button><button class="pri" id="w_ok">Começar a usar</button></div>`;
  $('#ov').classList.add('on');
}

/* ----- interações dos novos recursos ----- */
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);let el;
  if(el=g('[data-star]')){const t=byId(el.dataset.star);if(t){t.star=!t.star;render()}return}
  if(el=g('[data-smart]')){S.view='smart';S.smart=el.dataset.smart;adding=null;cur=null;sel=new Set();render();return}
  if(el=g('[data-qf]')){S.qf=el.dataset.qf;render();return}
  if(g('[data-hd]')){S.hideDone=!S.hideDone;render();toast(S.hideDone?'🙈 Atividades concluídas ocultas':'👁 Atividades concluídas visíveis');return}
  if(g('#bFilt')){$('#fpanel').classList.toggle('open');return}
  if(g('#bBell')){openAlerts();return}
  if(g('#bTheme')){openMenu($('#bTheme'),themeItems());return}
  if(el=g('[data-gth]')){setTheme(el.dataset.gth);return}
  if(g('#addProj2')){$('#addProj').click();return}
  if(CLOUD&&g('#bUser')){e.stopImmediatePropagation();userMenu();return}
  if(g('#bData')){openDataHub();return}
  if(g('#bMore')){const B=id=>()=>{const b=$(id);if(b)b.click()};openMenu($('#bMore'),[...(can('tags')?[{l:'Etiquetas',ic:'tag',f:B('#bTags')}]:[]),...(can('rules')?[{l:'Automações',ic:'zap',f:B('#bRules')}]:[]),...(can('tags')||can('rules')?['-']:[]),{l:'Exportar Excel',ic:'download',f:B('#bXls')},...(can('import')?[{l:'Importar Excel',ic:'upload',f:B('#bXlsIn')}]:[]),{l:'Exportar PDF',ic:'file',f:B('#bPdf')},{l:'Modelo de planilha',ic:'file',f:B('#bXlsTpl')},'-',{l:'Exportar JSON / CSV',ic:'download',f:B('#bExp')},...(can('import')?[{l:'Importar JSON',ic:'upload',f:B('#bImp')}]:[]),'-',{l:'Ajuda e atalhos',ic:'help',f:()=>toggleHelp()}],{side:'right'});return}
  if(g('#bRules')){openRules();return}
  if(g('#newTask')){$('#qa').focus();return}
  if(g('#qaGo')){const i=$('#qa');if(quickAdd(i.value)){i.value='';quickPreview()}return}
  if(el=g('[data-qaex]')){if($('#ov').classList.contains('on')){closeModal();render()}const i=$('#qa');i.value=el.dataset.qaex;quickPreview();i.focus();return}
  if(el=g('[data-cal]')){const k=+el.dataset.cal;if(k===0)S.calMonth=today().slice(0,7);else{const [y,m]=S.calMonth.split('-').map(Number),d=new Date(y,m-1+k,1);S.calMonth=d.getFullYear()+'-'+pad(d.getMonth()+1)}render();return}
  if(el=g('[data-caladd]')){const day=el.dataset.caladd;ask('Nova atividade em '+fmtD(day),'',v=>{if(!v.trim())return false;const o=parseQuick(v);o.due=o.due||day;const P=proj();let inbox=S.tasks.find(t=>t.pid===P.id&&!t.parent&&t.sec&&/caixa de entrada/i.test(t.title));if(!inbox){inbox=mkTask({pid:P.id,parent:null,title:'📥 Caixa de entrada',sec:true});S.tasks.unshift(inbox)}S.tasks.push(mkTask({pid:P.id,parent:inbox.id,title:o.title,due:o.due,dueTime:o.dueTime,prio:o.prio,assignees:o.assignees,repeat:o.repeat,tags:o.tags.map(x=>x.startsWith('new:')?createTag(x.slice(4)).id:x)}));render()});return}
  if(el=g('[data-gz]')){S.gz=el.dataset.gz;gScrollSet=false;render();return}
  if(g('[data-gtoday]')){gScrollSet=false;render();return}
  if(el=g('[data-wl]')){wlDetail(el.dataset.wl);return}
  if(el=g('[data-goto]')){const id=el.dataset.goto;closeModal();goTask(id);return}
  if(el=g('[data-htab]')){S.helpTab=el.dataset.htab;toggleHelp(true);return}
  if(el=g('[data-act2]')){
    if(el.dataset.act2==='pdf'){openExportPdf();return}
    if(el.dataset.act2==='xls'){exportXlsx();return}
    if(el.dataset.act2==='print'){try{window.print()}catch(x){toast('Use Ctrl+P no navegador')}}
    else{const em=S.members.filter(m=>m.email).map(m=>m.email);mailDialog('📄 Resumo executivo',em,'Resumo executivo — '+(dashScope().all?'Todos os projetos':proj().name),summaryText(),()=>{closeModal();render()})}
    return}
  if(g('#goTeam')){openTeam();return}
  if(el=g('[data-tpl]')){tplSel=el.dataset.tpl;document.querySelectorAll('.tpl').forEach(x=>x.classList.toggle('on',x===el));return}
  if(g('#np_go')){createFromTemplate($('#np_name').value.trim(),tplSel);closeModal();render();toast('Projeto criado');return}
  if(g('#w_ok')){S.seen=true;closeModal();render();$('#qa').focus();return}
  if(g('#w_keys')){S.seen=true;S.helpTab='atalhos';toggleHelp(true);return}
  if(g('#m_timer')){collect();toggleTimer(editing);openTask(editing);render();return}
  if(g('#m_resched')){collect();reschedAfterDeps(editing);openTask(editing);render();return}
  if(el=g('[data-dep-del]')){collect();const t=byId(editing);t.deps=t.deps.filter(x=>x!==el.dataset.depDel);openTask(editing);render();return}
});
document.addEventListener('change',e=>{
  const tg=e.target;
  if(tg.id==='m_dep'&&tg.value){collect();addDep(editing,tg.value);openTask(editing);render();return}
  if(tg.dataset&&tg.dataset.rule){S.rules[tg.dataset.rule]=tg.checked;render();toast(tg.checked?'Automação ligada':'Automação desligada')}
});
document.addEventListener('input',e=>{
  const c=e.target.dataset||{};
  if(c.mcap){const m=mem(c.mcap);if(m){m.cap=Math.max(1,num(e.target.value)||40);save()}}
});
document.addEventListener('dragstart',e=>{const c=e.target.closest&&e.target.closest('[data-cd]');if(c){cdrag=c.dataset.cd;e.dataTransfer.setData('text/plain',cdrag);e.dataTransfer.effectAllowed='move'}});
document.addEventListener('dragover',e=>{if(!cdrag)return;const d=e.target.closest&&e.target.closest('.cd');if(d){e.preventDefault();document.querySelectorAll('.cd.over').forEach(x=>x!==d&&x.classList.remove('over'));d.classList.add('over')}});
document.addEventListener('drop',e=>{if(!cdrag)return;const d=e.target.closest&&e.target.closest('.cd');if(!d)return;e.preventDefault();const id=cdrag;cdrag=null;reschedule(id,d.dataset.day)});
document.addEventListener('dragend',()=>{cdrag=null;document.querySelectorAll('.cd.over').forEach(x=>x.classList.remove('over'))});
$('#vc').onclick=()=>{S.view='cal';render()};
$('#vg').onclick=()=>{S.view='gantt';render()};
$('#vp').onclick=()=>{S.view='people';render()};
$('#addProj').onclick=openNewProject;
$('#qa').oninput=quickPreview;
$('#qa').onkeydown=e=>{
  if(e.key==='Enter'){e.preventDefault();const i=e.target;if(quickAdd(i.value)){i.value='';quickPreview()}}
  else if(e.key==='Escape'){e.stopPropagation();e.target.blur()}
};

/* ====================== EXCEL (.xlsx) E PDF ====================== */
const UN={day:'dias',weekdays:'dias úteis',week:'semanas',month:'meses',year:'anos'};
const repText=t=>{if(!hasRep(t))return'';const n=+t.repeat.every||1;return n===1?(REP.find(r=>r[0]===t.repeat.freq)||[0,''])[1]:'A cada '+n+' '+UN[t.repeat.freq]};
const xd=s=>{if(!s)return '';const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const haveXLSX=()=>{if(typeof XLSX==='undefined'){toast('Biblioteca do Excel não carregada');return false}return true};
function dlBlob(name,blob){
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},2000);
}
const XLS_COLS=['ID','Projeto','Caminho','Título','Status','Prioridade','Responsáveis','Etiquetas','Início','Hora início','Prazo','Hora prazo','Repete','Estimativa (h)','Registrado (h)','Marco','Favorita','Concluída em','Descrição'];
const XLS_W=[10,22,30,46,14,11,24,20,12,10,12,10,16,13,13,8,9,17,50];
const HOWTO=[['Como importar atividades pelo Excel'],[''],
 ['1. Preencha a aba “Atividades”. Só o Título é obrigatório; as demais colunas são opcionais.'],
 ['2. Caminho: informe a seção/atividade-mãe separando os níveis com “>”. Ex.: Fiscal > SPED. O que não existir é criado.'],
 ['3. Responsáveis e Etiquetas: separe vários com “;” (ponto e vírgula). Nomes novos são cadastrados automaticamente.'],
 ['4. Datas no formato dd/mm/aaaa e horas no formato hh:mm.'],
 ['5. Status: A fazer, Em andamento, Em revisão, Impedido ou Concluído. Prioridade: Baixa, Média ou Alta.'],
 ['6. Repete: Diariamente, Dias úteis, Semanalmente, Mensalmente, Anualmente ou “A cada 2 semanas”, “A cada 3 meses”…'],
 ['7. Marco e Favorita: escreva Sim para marcar.'],
 ['8. Coluna ID preenchida (arquivo exportado pelo sistema) = a atividade é ATUALIZADA. ID vazio = atividade NOVA (ou atualizada, se já existir uma com o mesmo título e caminho).'],
 ['9. No sistema: botão “Importar / Exportar” (acima da lista) → arraste o arquivo ou clique para escolher. Você vê uma prévia antes de confirmar.']];
function sheetFrom(rows,widths,dateCols){
  const ws=XLSX.utils.aoa_to_sheet(rows,{cellDates:true});
  if(widths)ws['!cols']=widths.map(w=>({wch:w}));
  Object.keys(ws).forEach(k=>{if(k[0]!=='!'&&ws[k].t==='d'){const c=XLSX.utils.decode_cell(k).c;ws[k].z=(dateCols&&dateCols[c])||'dd/mm/yyyy'}});
  return ws;
}
function saveWb(wb,name){
  const out=XLSX.write(wb,{bookType:'xlsx',type:'array',cellDates:true});
  dlBlob(name,new Blob([out],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
}
function exportXlsx(scope){
  if(!haveXLSX())return;
  const PS=scope==='cur'?[proj()]:S.projects.filter(p=>!p.virtual);
  const wb=XLSX.utils.book_new(),rows=[XLS_COLS];
  PS.forEach(p=>treeOrder(p.id).forEach(id=>{
    const t=byId(id),path=[];let x=t;while(x.parent){x=byId(x.parent);path.unshift(x.title)}
    rows.push([t.id,p.name,path.join(' > '),t.title,stOf(t.status).n,PR[t.prio],t.assignees.map(a=>(mem(a)||{}).name).filter(Boolean).join('; '),t.tags.map(a=>(tagOf(a)||{}).name).filter(Boolean).join('; '),xd(t.start),t.startTime,xd(t.due),t.dueTime,repText(t),t.est||'',Math.round((t.spent||0)*100)/100||'',t.ms?'Sim':'',t.star?'Sim':'',t.doneAt?new Date(t.doneAt):'',t.desc||'']);
  }));
  const ws=sheetFrom(rows,XLS_W,{17:'dd/mm/yyyy hh:mm'});
  ws['!autofilter']={ref:XLSX.utils.encode_range({s:{r:0,c:0},e:{r:rows.length-1,c:XLS_COLS.length-1}})};
  XLSX.utils.book_append_sheet(wb,ws,'Atividades');
  const res=[['Projeto','Atividades','Concluídas','% concluído','Em andamento','Impedidas','Atrasadas','Horas estimadas','Horas registradas']];
  let tt=[0,0,0,0,0,0,0];
  PS.forEach(p=>{const l=S.tasks.filter(t=>t.pid===p.id&&isLeaf(t)),d=l.filter(t=>t.status==='done').length,ip=l.filter(t=>t.status==='doing').length,bl=l.filter(t=>t.status==='blocked').length,lt=l.filter(isLate).length,he=l.filter(t=>t.status!=='done').reduce((a,t)=>a+(t.est||0),0),hs=l.reduce((a,t)=>a+(t.spent||0),0);
    res.push([p.name,l.length,d,l.length?d/l.length:0,ip,bl,lt,Math.round(he*10)/10,Math.round(hs*10)/10]);tt[0]+=l.length;tt[1]+=d;tt[2]+=ip;tt[3]+=bl;tt[4]+=lt;tt[5]+=he;tt[6]+=hs});
  res.push(['TOTAL',tt[0],tt[1],tt[0]?tt[1]/tt[0]:0,tt[2],tt[3],tt[4],Math.round(tt[5]*10)/10,Math.round(tt[6]*10)/10]);
  const wr=sheetFrom(res,[28,10,12,13,14,11,11,15,17]);
  Object.keys(wr).forEach(k=>{if(k[0]!=='!'&&XLSX.utils.decode_cell(k).c===3&&XLSX.utils.decode_cell(k).r>0)wr[k].z='0%'});
  XLSX.utils.book_append_sheet(wb,wr,'Resumo');
  XLSX.utils.book_append_sheet(wb,sheetFrom([['Nome','E-mail','Perfil','Status','Capacidade (h/semana)'],...S.members.map(m=>[m.name,m.email||'',ROLES[roleOfM(m)].n,m.status==='invited'?'Convidado':'Ativo',m.cap||40])],[24,32,16,12,20]),'Equipe');
  XLSX.utils.book_append_sheet(wb,sheetFrom([['Etiqueta'],...S.tags.map(g=>[g.name])],[24]),'Etiquetas');
  XLSX.utils.book_append_sheet(wb,sheetFrom(HOWTO,[140]),'Como importar');
  const slug=scope==='cur'?'_'+proj().name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\w]+/g,'-').replace(/^-|-$/g,'').slice(0,30):'';
  saveWb(wb,'atividades'+slug+'_'+today()+'.xlsx');
  toast('📊 Excel gerado — veja a pasta Downloads');
}
function exportTemplate(){
  if(!haveXLSX())return;
  const wb=XLSX.utils.book_new();
  const ex=[XLS_COLS,
   ['','Operação CS Infra','Fiscal > SPED','Gerar SPED Fiscal','A fazer','Alta',(S.members[0]?S.members[0].name:'Pessoa 1')+'; '+(S.members[1]?S.members[1].name:'Pessoa 2'),'fiscal',xd(addDays(0)),'',xd(addDays(5)),'17:00','',2,'','','','','Conferir CFOP antes de transmitir'],
   ['','Operação CS Infra','Fiscal > SPED','Validar no PVA e transmitir','A fazer','Alta',(S.members[0]?S.members[0].name:'Pessoa 1'),'fiscal','','',xd(addDays(7)),'','',1,'','Sim','','',''],
   ['','Operação CS Infra','Rotinas','Revisar backups','Em andamento','Média',(S.members[S.members.length>1?1:0]?S.members[S.members.length>1?1:0].name:'Pessoa 1'),'infra','','',xd(addDays(3)),'','Semanalmente',1,'','','Sim','',''],
   ['','','','Atividade simples sem seção','','','','','','','','','','','','','','','']];
  XLSX.utils.book_append_sheet(wb,sheetFrom(HOWTO,[140]),'Como importar');
  XLSX.utils.book_append_sheet(wb,sheetFrom(ex,XLS_W),'Atividades');
  XLSX.utils.book_append_sheet(wb,sheetFrom([['Status','Prioridade','Repete'],['A fazer','Baixa','Diariamente'],['Em andamento','Média','Dias úteis'],['Em revisão','Alta','Semanalmente'],['Impedido','','Mensalmente'],['Concluído','','Anualmente']],[16,12,16]),'Valores aceitos');
  saveWb(wb,'modelo_importacao_atividades.xlsx');
  toast('📄 Modelo gerado — preencha a aba “Atividades”');
}

/* ----- importar ----- */
const nh=h=>norm(h).replace(/\s+/g,' ').trim();
const ALIAS={id:['id'],projeto:['projeto'],caminho:['caminho','secao','grupo','atividade pai','tarefa pai','pai'],titulo:['titulo','atividade','tarefa','nome','nome da atividade','nome da tarefa','assunto'],status:['status','situacao','estado'],prio:['prioridade','prio'],resp:['responsaveis','responsavel','atribuido a','resp','dono'],tags:['etiquetas','etiqueta','tags','tag'],start:['inicio','data inicio','data de inicio'],stime:['hora inicio','hora de inicio'],due:['prazo','data fim','fim','vencimento','data limite','termino','entrega','finalizacao'],dtime:['hora prazo','hora fim','hora','hora de termino'],rep:['repete','recorrencia','repeticao'],est:['estimativa (h)','estimativa','horas estimadas'],spent:['registrado (h)','registrado','horas registradas'],ms:['marco'],star:['favorita','favorito'],desc:['descricao','observacoes','observacao','notas']};
function pDate(v){
  if(v===''||v==null)return '';
  if(v instanceof Date)return ymd(v);
  if(typeof v==='number'){const d=new Date(Math.round((v-25569)*864e5));return d.getUTCFullYear()+'-'+pad(d.getUTCMonth()+1)+'-'+pad(d.getUTCDate())}
  const s=String(v).trim();let m;
  if(!s)return '';
  if(m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))return m[1]+'-'+pad(+m[2])+'-'+pad(+m[3]);
  if(m=s.match(/^(\d{1,2})[\/.-](\d{1,2})(?:[\/.-](\d{2,4}))?/)){let y=m[3]?+m[3]:new Date().getFullYear();if(y<100)y+=2000;if(+m[2]>12||+m[1]>31)return null;return y+'-'+pad(+m[2])+'-'+pad(+m[1])}
  return null;
}
function pTime(v){
  if(v===''||v==null)return '';
  if(v instanceof Date)return pad(v.getHours())+':'+pad(v.getMinutes());
  if(typeof v==='number'){if(v>=1)v=v%1;const mn=Math.round(v*1440);return pad(Math.floor(mn/60)%24)+':'+pad(mn%60)}
  const s=String(v).trim();if(!s)return '';const m=s.match(/^(\d{1,2})\s*[:h]\s*(\d{2})?/);
  return m&&+m[1]<24?pad(+m[1])+':'+(m[2]||'00'):null;
}
const STMAP={'a fazer':'todo','pendente':'todo','nao iniciada':'todo','nao iniciado':'todo','todo':'todo','em andamento':'doing','andamento':'doing','fazendo':'doing','em progresso':'doing','em revisao':'review','revisao':'review','impedido':'blocked','impedida':'blocked','bloqueado':'blocked','bloqueada':'blocked','concluido':'done','concluida':'done','feito':'done','finalizado':'done','finalizada':'done','done':'done'};
const PRMAP={'alta':3,'urgente':3,'high':3,'3':3,'media':2,'normal':2,'2':2,'baixa':1,'low':1,'1':1};
function pRepeat(v){
  const n=norm(v).trim();if(!n)return undefined;
  if(/^(nao|nenhum|-)/.test(n))return null;
  let m=n.match(/a cada (\d+) (dias? uteis|dias?|semanas?|mes(?:es)?|anos?)/);
  if(m){const u=m[2];return{freq:/uteis/.test(u)?'weekdays':/^dia/.test(u)?'day':/^sem/.test(u)?'week':/^mes/.test(u)?'month':'year',every:Math.max(1,+m[1])}}
  if(/dias uteis/.test(n))return{freq:'weekdays',every:1};
  if(/diari|todo dia/.test(n))return{freq:'day',every:1};
  if(/seman/.test(n))return{freq:'week',every:1};
  if(/mens|todo mes/.test(n))return{freq:'month',every:1};
  if(/anual|todo ano/.test(n))return{freq:'year',every:1};
  return {bad:true};
}
const yes=v=>/^(sim|s|x|1|true|yes|verdadeiro)$/i.test(String(v).trim());
function findMember(n){const q=norm(n).trim();return S.members.find(m=>norm(m.name)===q||norm(m.email||'')===q||norm(m.name).split(' ')[0]===q)}
function planImport(grid){
  const hi=grid.findIndex(r=>r.some(c=>ALIAS.titulo.includes(nh(c))));
  if(hi<0)return{error:'Não encontrei a coluna “Título” (ou “Atividade”). Use o modelo para garantir o formato.'};
  const map={};grid[hi].forEach((h,i)=>{const k=Object.keys(ALIAS).find(k=>ALIAS[k].includes(nh(h)));if(k&&!(k in map))map[k]=i});
  const get=(r,k)=>map[k]===undefined?'':r[map[k]];
  const items=[],warn=[],newP=new Set(),newM=new Set(),newT=new Set();
  for(let i=hi+1;i<grid.length;i++){
    const r=grid[i];if(!r||r.every(c=>c===''||c==null))continue;
    const rn=i+1,title=String(get(r,'titulo')).trim();
    if(!title){warn.push(`Linha ${rn}: sem título — ignorada`);continue}
    const it={row:rn,id:String(get(r,'id')).trim(),project:String(get(r,'projeto')).trim(),path:String(get(r,'caminho')).split(/\s*[>›]\s*/).map(x=>x.trim()).filter(Boolean),title,f:{}};
    const f=it.f,sv=String(get(r,'status')).trim();
    if(sv){const k=STMAP[nh(sv)];if(k)f.status=k;else warn.push(`Linha ${rn}: status “${sv}” não reconhecido`)}
    const pv=String(get(r,'prio')).trim();
    if(pv){const k=PRMAP[nh(pv)];if(k)f.prio=k;else warn.push(`Linha ${rn}: prioridade “${pv}” não reconhecida`)}
    [['start','start','Início'],['due','due','Prazo']].forEach(([k,fk,lb])=>{const d=pDate(get(r,k));if(d===null)warn.push(`Linha ${rn}: ${lb} inválido (“${get(r,k)}”)`);else if(d)f[fk]=d});
    [['stime','startTime','Hora início'],['dtime','dueTime','Hora prazo']].forEach(([k,fk,lb])=>{const d=pTime(get(r,k));if(d===null)warn.push(`Linha ${rn}: ${lb} inválida`);else if(d)f[fk]=d});
    const rp=pRepeat(get(r,'rep'));if(rp&&rp.bad)warn.push(`Linha ${rn}: repetição “${get(r,'rep')}” não reconhecida`);else if(rp!==undefined)f.repeat=rp;
    ['est','spent'].forEach(k=>{const v=get(r,k);if(v!==''&&v!=null){const n=parseFloat(String(v).replace(',','.'));if(isNaN(n))warn.push(`Linha ${rn}: número inválido em ${k==='est'?'Estimativa':'Registrado'}`);else f[k]=n}});
    if(get(r,'ms')!=='')f.ms=yes(get(r,'ms'));
    if(get(r,'star')!=='')f.star=yes(get(r,'star'));
    if(String(get(r,'desc')).trim())f.desc=String(get(r,'desc')).trim();
    const rs=String(get(r,'resp')).split(/[;,]/).map(x=>x.trim()).filter(Boolean);
    if(rs.length){f.resp=rs;rs.forEach(n=>{if(!findMember(n))newM.add(n)})}
    const tg=String(get(r,'tags')).split(/[;,]/).map(x=>x.trim()).filter(Boolean);
    if(tg.length){f.tags=tg;tg.forEach(n=>{if(!S.tags.some(g=>norm(g.name)===norm(n)))newT.add(n)})}
    let P=it.project?S.projects.find(p=>norm(p.name)===norm(it.project)):proj();
    if(it.project&&!P)newP.add(it.project);
    let exists=!!(it.id&&byId(it.id));
    if(!exists&&P){let parent=null,ok=true;for(const seg of it.path){const a=S.tasks.find(x=>x.pid===P.id&&(x.parent||null)===parent&&norm(x.title)===norm(seg));if(!a){ok=false;break}parent=a.id}
      if(ok&&S.tasks.some(x=>x.pid===P.id&&(x.parent||null)===parent&&norm(x.title)===norm(title)))exists=true}
    it.action=exists?'update':'create';
    items.push(it);
  }
  return{items,warn,newP,newM,newT,hi};
}
function applyImport(plan){
  let cr=0,up=0;
  const touched=[];
  plan.items.forEach(it=>{
    let P=it.project?S.projects.find(p=>norm(p.name)===norm(it.project)):proj();
    if(!P){P={id:uid(),name:it.project};S.projects.push(P)}
    let t=it.id?byId(it.id):null;
    if(t){up++}
    else{
      let parent=null;
      it.path.forEach(seg=>{let a=S.tasks.find(x=>x.pid===P.id&&(x.parent||null)===parent&&norm(x.title)===norm(seg));if(!a){a=mkTask({pid:P.id,parent,title:seg});S.tasks.push(a);cr++}parent=a.id;if(a.open===false)a.open=true});
      t=S.tasks.find(x=>x.pid===P.id&&(x.parent||null)===parent&&norm(x.title)===norm(it.title));
      if(t)up++;else{t=mkTask({pid:P.id,parent,title:it.title});S.tasks.push(t);cr++}
    }
    const f=it.f;t.title=it.title;
    ['prio','start','due','startTime','dueTime','est','spent','ms','star','desc'].forEach(k=>{if(k in f)t[k]=f[k]});
    if('repeat' in f)t.repeat=f.repeat;
    if(f.resp)t.assignees=[...new Set(f.resp.map(n=>{let m=findMember(n);if(!m){const em=/@/.test(n);m={id:uid(),name:em?n.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase()):n,email:em?n:'',color:COLORS[S.members.length%COLORS.length],status:'active',cap:40};S.members.push(m)}return m.id}))];
    if(f.tags)t.tags=[...new Set(f.tags.map(n=>createTag(n).id))];
    normDates(t);
    if(f.status)setStatus(t,f.status);
    touched.push(t.id);
  });
  S.cur=(plan.items.length&&plan.items[0].project&&S.projects.find(p=>norm(p.name)===norm(plan.items[0].project)))?S.projects.find(p=>norm(p.name)===norm(plan.items[0].project)).id:S.cur;
  S.view='list';
  render();
  toast(`✔ Importação concluída: ${cr} criada(s), ${up} atualizada(s)`);
}
function importPreview(plan,fname,sheet){
  const M=$('#modal');M.dataset.kind='import';M.style.width='min(860px,100%)';
  const cr=plan.items.filter(i=>i.action==='create').length,up=plan.items.length-cr;
  const ex=[];
  if(plan.newP.size)ex.push('Projetos novos: <b>'+[...plan.newP].map(esc).join(', ')+'</b>');
  if(plan.newM.size)ex.push('Pessoas novas: <b>'+[...plan.newM].map(esc).join(', ')+'</b>');
  if(plan.newT.size)ex.push('Etiquetas novas: <b>'+[...plan.newT].map(esc).join(', ')+'</b>');
  M.innerHTML=`<h3>📥 Importar do Excel</h3><div class="hint" style="margin:-4px 0 12px">Arquivo: <b>${esc(fname)}</b> · aba “${esc(sheet)}” · ${plan.items.length} linha(s) válida(s). Nada foi alterado ainda — confira e confirme.</div>
  <div class="kpis" style="grid-template-columns:repeat(3,1fr);margin-bottom:10px"><div class="kpi g"><b>${cr}</b><span>atividades novas</span></div><div class="kpi"><b>${up}</b><span>atividades atualizadas</span></div><div class="kpi ${plan.warn.length?'a':''}"><b>${plan.warn.length}</b><span>avisos</span></div></div>
  ${ex.length?`<div class="hint" style="margin:0 0 8px">${ex.join(' · ')}</div>`:''}
  <label>Prévia (primeiras linhas)</label>
  <div class="sub2" style="max-height:260px;overflow:auto"><table>${plan.items.slice(0,14).map(i=>`<tr><td style="width:62px"><span class="st" style="color:${i.action==='create'?'var(--ok)':'var(--ac)'};border-color:${i.action==='create'?'var(--ok)':'var(--ac)'}">${i.action==='create'?'Nova':'Atualiza'}</span></td><td>${esc(i.title)}<span class="sub">${esc([i.project,...i.path].filter(Boolean).join(' › '))}</span></td><td style="width:100px;color:var(--mu)">${esc(i.f.due?fmtS(i.f.due):'')}</td></tr>`).join('')}</table></div>
  ${plan.items.length>14?`<div class="hint">… e mais ${plan.items.length-14} linha(s)</div>`:''}
  ${plan.warn.length?`<label style="color:var(--amb)">Avisos (a linha é importada mesmo assim, ignorando o campo)</label><div class="hint" style="max-height:90px;overflow:auto;margin:0">${plan.warn.slice(0,12).map(esc).join('<br>')}${plan.warn.length>12?'<br>…':''}</div>`:''}
  <div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="imp_go" ${plan.items.length?'':'disabled'}>Importar ${plan.items.length} linha(s)</button></span></div>`;
  $('#ov').classList.add('on');
  window._plan=plan;
}
async function onXlsFile(e){const f=e.target.files[0];e.target.value='';if(f)importFile(f)}
async function importFile(f){
  if(!f||!haveXLSX())return;
  if(!can('import')){deny('import');return}
  if(/\.json$/i.test(f.name)){restoreJson(f);return}
  if(!/\.(xlsx|xls|csv|txt)$/i.test(f.name)){toast('Use um arquivo Excel (.xlsx) ou CSV.');return}
  try{
    const wb=XLSX.read(await f.arrayBuffer(),{type:'array',codepage:65001});
    const order=[...wb.SheetNames.filter(n=>/atividade|tarefa/i.test(n)),...wb.SheetNames.filter(n=>!/atividade|tarefa/i.test(n))];
    let grid=null,sheet='';
    for(const n of order){const g=XLSX.utils.sheet_to_json(wb.Sheets[n],{header:1,raw:true,defval:''});if(g.some(r=>r.some(c=>ALIAS.titulo.includes(nh(c))))){grid=g;sheet=n;break}}
    if(!grid){ask('Não encontrei uma aba com a coluna “Título” (ou “Atividade”). Use o botão “Importar / Exportar” → Baixar modelo de planilha.','',()=>{},{confirm:1,noCancel:1});return}
    const plan=planImport(grid);
    if(plan.error){ask(plan.error,'',()=>{},{confirm:1,noCancel:1});return}
    importPreview(plan,f.name,sheet);
  }catch(err){ask('Não consegui ler o arquivo: '+(err&&err.message||err),'',()=>{},{confirm:1,noCancel:1})}
}

/* ----- central de importar / exportar ----- */
function jsonBackup(){return JSON.stringify({exportedAt:new Date().toISOString(),org:S.org,members:S.members,tags:S.tags,projects:S.projects,tasks:S.tasks},null,1)}
function restoreJson(f){
  if(CLOUD){ask('Backups .json servem para guardar uma cópia dos dados. Para trazer atividades de volta ao sistema online, use a planilha Excel (a prévia mostra o que será criado ou atualizado).','',()=>{},{confirm:1,noCancel:1});return}
  const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!d.projects||!d.tasks)throw 0;
    ask('Restaurar este backup? Os dados atuais serão substituídos ('+d.tasks.length+' atividades no arquivo).','',()=>{S=migrate(d);adding=null;render();toast('Backup restaurado')},{confirm:1,ok:'Restaurar'})}
    catch(x){ask('Arquivo inválido. Nada foi alterado.','',()=>{},{confirm:1,noCancel:1})}};r.readAsText(f);
}
function openDataHub(){
  editing=null;closePop();const M=$('#modal');M.dataset.kind='hub';M.style.width='min(860px,100%)';
  const imp=can('import'),n=S.tasks.filter(t=>t.pid===proj().id).length,np=S.projects.filter(p=>!p.virtual).length;
  const card=(k,icn,t,d)=>`<button type="button" class="dcard" data-dx="${k}"><span class="dic">${ic(icn,20)}</span><span class="dtx"><b>${t}</b><small>${d}</small></span>${ic('chevR',16)}</button>`;
  M.innerHTML=`<h3>Importar e exportar</h3>
  <div class="dhub">
   <section><h4>${ic('download',16)} Exportar</h4>
    ${card('xlsx-cur','file','Excel — este projeto',esc(proj().name)+' · '+n+' item(ns)')}
    ${card('xlsx-all','file','Excel — todos os projetos',np+' projeto(s) · com resumo, membros e etiquetas')}
    ${card('pdf','file','PDF — relatório executivo','Indicadores, gráficos e listas de atenção')}
    ${card('csv','download','CSV','Planilha simples (abre no Excel)')}
    ${card('json','download','Backup (.json)','Cópia completa dos dados para guardar')}
   </section>
   <section><h4>${ic('upload',16)} Importar</h4>
    <div class="dz ${imp?'':'off'}" id="dz" tabindex="0">${ic('upload',28)}<b>Arraste a planilha aqui</b><span>ou clique para escolher · Excel (.xlsx) ou CSV</span></div>
    ${card('tpl','file','Baixar modelo de planilha','Já vem com exemplos e instruções')}
    <ul class="dtips"><li>Só o <b>Título</b> é obrigatório.</li><li>Planilha exportada daqui, editada e reenviada <b>atualiza</b> as atividades (coluna ID).</li><li>Pessoas e etiquetas novas são cadastradas.</li><li>Você vê uma <b>prévia</b> antes de confirmar.</li></ul>
    ${imp?'':'<div class="hint" style="color:var(--amb)">Seu perfil não importa atividades.</div>'}
   </section>
  </div>
  <div class="acts"><span class="hint">Dica: você também pode soltar uma planilha em qualquer tela do sistema.</span><button class="pri" id="g_ok" type="button">Fechar</button></div>`;
  $('#ov').classList.add('on');
}
document.addEventListener('click',e=>{
  const dz=e.target.closest&&e.target.closest('#dz');
  if(dz){e.stopImmediatePropagation();if(can('import'))$('#xlsIn').click();else deny('import');return}
  const b=e.target.closest&&e.target.closest('[data-dx]');if(!b)return;
  e.stopImmediatePropagation();const k=b.dataset.dx;
  if(k==='xlsx-cur'){exportXlsx('cur');return}
  if(k==='xlsx-all'){exportXlsx('all');return}
  if(k==='pdf'){openExportPdf();return}
  if(k==='tpl'){exportTemplate();return}
  if(k==='csv'){dlBlob('atividades_'+today()+'.csv',new Blob(['﻿'+csv()],{type:'text/csv;charset=utf-8'}));toast('CSV gerado — veja a pasta Downloads');return}
  if(k==='json'){dlBlob('backup_atividades_'+today()+'.json',new Blob([jsonBackup()],{type:'application/json'}));toast('Backup gerado — veja a pasta Downloads');return}
},true);
/* soltar planilha em qualquer lugar da tela */
(()=>{let n=0;const on=e=>e.dataTransfer&&[...(e.dataTransfer.types||[])].includes('Files')&&!(e.dataTransfer.items&&e.dataTransfer.items.length&&[...e.dataTransfer.items].every(i=>/^image\//.test(i.type)));
  const hide=()=>{n=0;document.body.classList.remove('filedrag')};
  window.addEventListener('dragenter',e=>{if(!on(e)||e.target.closest&&e.target.closest('#modal[data-kind=task]'))return;n++;document.body.classList.add('filedrag')});
  window.addEventListener('dragleave',e=>{if(!on(e))return;n--;if(n<=0)hide()});
  window.addEventListener('dragover',e=>{if(on(e)&&!(e.target.closest&&e.target.closest('#modal[data-kind=task]')))e.preventDefault()});
  window.addEventListener('drop',e=>{if(!on(e))return;hide();if(e.target.closest&&e.target.closest('#modal[data-kind=task]'))return;e.preventDefault();
    const f=[...e.dataTransfer.files][0];if(!f||($('#login')&&$('#login').style.display!=='none'))return;
    if(/\.(xlsx|xls|csv|txt|json)$/i.test(f.name)){importFile(f)}else toast('Solte uma planilha Excel (.xlsx) ou CSV.')});
})();

/* ----- PDF executivo ----- */
function openExportPdf(){
  editing=null;closePop();const M=$('#modal');M.dataset.kind='pdf';
  const all=S.view==='dash'&&S.dash==='all';
  M.innerHTML=`<h3>📄 Exportar relatório executivo (PDF)</h3><div class="hint" >PDF A4 com indicadores, gráficos, saúde por seção, carga por responsável e listas de atenção (atrasadas, próximos 7 dias e impedidas).</div>
  <label>Escopo do relatório</label>
  <label class="rule" style="margin:0;color:var(--tx);font-weight:400;font-size:14px"><input type="radio" name="pdfsc" value="cur" ${all?'':'checked'}><div><b>Este projeto</b><small>${esc(proj().name)}</small></div></label>
  <label class="rule" style="margin:0;color:var(--tx);font-weight:400;font-size:14px"><input type="radio" name="pdfsc" value="all" ${all?'checked':''}><div><b>Todos os projetos</b><small>${S.projects.length} projeto(s) somados</small></div></label>
  <label class="rule" style="margin:0;color:var(--tx);font-weight:400;font-size:14px;border:0"><input type="checkbox" id="pdf_full"><div><b>Incluir lista completa de atividades abertas</b><small>Acrescenta páginas com todas as atividades em aberto</small></div></label>
  <div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="pdf_go">Gerar PDF</button></span></div>`;
  $('#ov').classList.add('on');
}
function exportPdf(opts){
  if(!(window.jspdf&&window.jspdf.jsPDF)){toast('Biblioteca de PDF não carregada');return}
  const {jsPDF}=window.jspdf,doc=new jsPDF({unit:'pt',format:'a4',compress:true});
  const W=595.28,H=841.89,M=34,CW=W-2*M;
  const all=!!opts.all,pids=all?S.projects.map(p=>p.id):[proj().id];
  const Tk=S.tasks.filter(t=>pids.includes(t.pid)),L=Tk.filter(isLeaf),op=L.filter(t=>t.status!=='done'),dn=L.filter(t=>t.status==='done');
  const late=op.filter(isLate),soon=op.filter(t=>t.due&&!isLate(t)&&dayDiff(t.due)<=7).sort((a,b)=>a.due.localeCompare(b.due)),bl=L.filter(QF.blocked);
  const pct=L.length?Math.round(dn.length/L.length*100):0;
  const NAVY=[13,23,48],AC=[37,99,235],TX=[27,36,53],MU=[102,112,133],BD=[225,230,239],OK=[18,149,93],RD=[220,63,74],AM=[217,138,11],BG=[248,250,253];
  const C=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];
  const cl=s=>String(s==null?'':s).replace(/[^ -~ -ÿ–—‘-”•]/g,'').replace(/\s+/g,' ').trim();
  const font=(sz,b,c)=>{doc.setFont('helvetica',b?'bold':'normal');doc.setFontSize(sz);doc.setTextColor(...(c||TX))};
  const fit=(s,w)=>{s=cl(s);if(doc.getTextWidth(s)<=w)return s;while(s.length>1&&doc.getTextWidth(s+'...')>w)s=s.slice(0,-1);return s+'...'};
  const tx=(s,x,yy,sz,b,c,al)=>{font(sz,b,c);doc.text(cl(s),x,yy,al?{align:al}:undefined)};
  const rr=(x,yy,w,h,fill,line,r)=>{doc.setFillColor(...fill);doc.setDrawColor(...(line||fill));doc.setLineWidth(.6);doc.roundedRect(x,yy,w,h,r||6,r||6,line?'FD':'F')};
  const poly=(pts,fill)=>{doc.setFillColor(...fill);doc.lines(pts.slice(1).map((p,i)=>[p[0]-pts[i][0],p[1]-pts[i][1]]),pts[0][0],pts[0][1],[1,1],'F',true)};
  const card=(x,yy,w,h,title)=>{rr(x,yy,w,h,[255,255,255],BD);tx(title.toUpperCase(),x+12,yy+17,8,1,MU)};
  const ragOf=l=>{const op2=l.filter(t=>t.status!=='done');if(!l.length)return[MU,'Sem atividades'];if(!op2.length)return[OK,'Concluida'];const lt=op2.filter(isLate).length,b=op2.filter(QF.blocked).length;if(lt/op2.length>=.2||lt>=3)return[RD,'Em risco'];if(lt||b)return[AM,'Atencao'];return[OK,'No prazo']};
  const nameOwners=t=>t.assignees.map(a=>(mem(a)||{}).name).filter(Boolean).join(', ')||'-';
  const scopeName=all?'Todos os projetos':proj().name;
  let y=0;
  const ensure=h=>{if(y+h>H-46){doc.addPage();y=M}};

  /* cabeçalho */
  doc.setFillColor(...NAVY);doc.rect(0,0,W,84,'F');
  doc.setFillColor(...AC);doc.rect(0,84,W,3,'F');
  tx('Relatorio Executivo de Atividades'.replace('Relatorio','Relatório'),M,40,21,1,[255,255,255]);
  tx(scopeName,M,60,11.5,0,[190,205,235]);
  tx('Gerado em '+new Date().toLocaleDateString('pt-BR')+' '+new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),W-M,40,9,0,[190,205,235],'right');
  tx('CS Infra - Controle de Atividades',W-M,60,9,0,[190,205,235],'right');
  y=104;

  /* KPIs */
  const kp=[[L.length,'Atividades (itens de trabalho)',TX],[pct+'%','Concluido ('+dn.length+' de '+L.length+')',OK],[op.filter(t=>t.status==='doing').length,'Em andamento',TX],[late.length,'Atrasadas',late.length?RD:TX],[soon.length,'Vencem em 7 dias',soon.length?AM:TX],[bl.length,'Impedidas / aguardando',bl.length?RD:TX],[op.filter(t=>!t.assignees.length).length,'Sem responsavel',AM],[Math.round(op.reduce((a,t)=>a+(t.est||0),0)*10)/10+' h','Horas estimadas (abertas)',TX]];
  const kw=(CW-30)/4;
  kp.forEach((k,i)=>{const x=M+(i%4)*(kw+10),yy=y+Math.floor(i/4)*62;rr(x,yy,kw,52,BG,BD);tx(k[0],x+12,yy+27,20,1,k[2]);tx(k[1].replace('Concluido','Concluído').replace('responsavel','responsável'),x+12,yy+42,8.5,0,MU)});
  y+=62*2+4;

  /* status + saúde */
  const hw=(CW-10)/2,ch=158;
  card(M,y,hw,ch,'Status das atividades');
  const parts=ST.map(s=>({v:L.filter(t=>t.status===s.id).length,c:C(s.c),n:s.n})).filter(p=>p.v>0);
  const cx=M+66,cy=y+ch/2+8,ro=48,ri=30;
  if(parts.length===1){doc.setFillColor(...parts[0].c);doc.circle(cx,cy,ro,'F');doc.setFillColor(255,255,255);doc.circle(cx,cy,ri,'F')}
  else{let a0=-Math.PI/2;parts.forEach(p=>{const a1=a0+p.v/L.length*2*Math.PI,n=Math.max(3,Math.ceil((a1-a0)/(Math.PI/36))),pts=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;pts.push([cx+ro*Math.cos(a),cy+ro*Math.sin(a)])}for(let i=n;i>=0;i--){const a=a0+(a1-a0)*i/n;pts.push([cx+ri*Math.cos(a),cy+ri*Math.sin(a)])}poly(pts,p.c);a0=a1})}
  tx(pct+'%',cx,cy+3,14,1,TX,'center');tx('concluído',cx,cy+13,6.5,0,MU,'center');
  ST.forEach((s,i)=>{const yy=y+42+i*20,n=L.filter(t=>t.status===s.id).length;doc.setFillColor(...C(s.c));doc.circle(M+134,yy-3,3.5,'F');tx(s.n,M+144,yy,9.5,0,TX);tx(String(n),M+hw-14,yy,9.5,1,TX,'right')});
  const hx=M+hw+10;card(hx,y,hw,ch,'Saúde por '+(all?'projeto':'seção'));
  const groups=[];if(all)S.projects.forEach(p=>{const l=L.filter(t=>t.pid===p.id);if(l.length)groups.push([p.name,l])});else Tk.filter(t=>!t.parent).forEach(t=>groups.push([t.title,leavesUnder(t)]));
  groups.slice(0,7).forEach(([n,l],i)=>{const yy=y+40+i*17,[c,lb]=ragOf(l),d=l.filter(t=>t.status==='done').length;doc.setFillColor(...c);doc.circle(hx+16,yy-3,3.5,'F');tx(fit(n,hw-150),hx+26,yy,9.5,0,TX);tx(lb,hx+hw-62,yy,8.5,1,c,'right');tx(d+'/'+l.length,hx+hw-12,yy,9,0,MU,'right')});
  if(!groups.length)tx('Sem dados',hx+12,y+44,9,0,MU);
  y+=ch+10;

  /* carga por responsável */
  const owners=[...S.members.map(m=>({n:m.name,c:C(m.color),id:m.id})),{n:'Sem responsável',c:MU,id:null}].map(o=>({...o,ts:L.filter(t=>o.id?t.assignees.includes(o.id):!t.assignees.length)})).filter(o=>o.ts.length).slice(0,8);
  const oh=34+owners.length*22+6;ensure(oh);
  card(M,y,CW,oh,'Carga por responsável (atividades por status)');
  const mxo=Math.max(1,...owners.map(o=>o.ts.length)),bx=M+130,bw=CW-130-150;
  owners.forEach((o,i)=>{const yy=y+40+i*22;doc.setFillColor(...o.c);doc.circle(M+18,yy-3,4,'F');tx(fit(o.n,100),M+28,yy,9.5,0,TX);
    let x=bx;const full=bw*o.ts.length/mxo;ST.forEach(s=>{const n=o.ts.filter(t=>t.status===s.id).length;if(!n)return;const w=full*n/o.ts.length;doc.setFillColor(...C(s.c));doc.rect(x,yy-9,Math.max(w,1),11,'F');x+=w});
    const lt=o.ts.filter(isLate).length;tx(o.ts.length+' atividade(s)'+(lt?' · '+lt+' atrasada(s)':''),M+CW-12,yy,8.5,0,lt?RD:MU,'right')});
  if(!owners.length)tx('Sem dados',M+12,y+44,9,0,MU);
  y+=oh+10;

  /* vencimentos + evolução */
  const gh=150;ensure(gh);
  card(M,y,hw,gh,'Vencimentos (atividades abertas)');
  const bk=[['Atrasadas',t=>isLate(t),RD],['0-7 dias',t=>!isLate(t)&&dayDiff(t.due)<=7,AM],['8-14',t=>dayDiff(t.due)>7&&dayDiff(t.due)<=14,AC],['15-30',t=>dayDiff(t.due)>14&&dayDiff(t.due)<=30,[59,130,246]],['> 30',t=>dayDiff(t.due)>30,MU]];
  const bv=bk.map(b=>op.filter(t=>t.due&&b[1](t)).length).concat([op.filter(t=>!t.due).length]);
  const bmx=Math.max(1,...bv),cw2=(hw-24)/6;
  bv.forEach((v,i)=>{const h=v/bmx*72,x=M+12+i*cw2+cw2*.15,w=cw2*.7;doc.setFillColor(...(i<5?bk[i][2]:[140,148,165]));doc.rect(x,y+gh-30-h,w,Math.max(h,1.5),'F');tx(String(v),x+w/2,y+gh-34-h,9,1,TX,'center');tx(i<5?bk[i][0]:'Sem prazo',x+w/2,y+gh-14,7,0,MU,'center')});
  const ex=M+hw+10;card(ex,y,hw,gh,'Evolução: atividades abertas (30 dias)');
  const days=[...Array(30)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-(29-i));d.setHours(23,59,59,999);return d});
  const vals=days.map(d=>L.filter(t=>t.created<=d.getTime()&&!(t.status==='done'&&t.doneAt&&t.doneAt<=d.getTime())).length),mxv=Math.max(1,...vals);
  const ax=ex+14,aw=hw-28,ay=y+34,ah=gh-62,pts=vals.map((v,i)=>[ax+i*aw/29,ay+ah-v/mxv*ah]);
  poly([[ax,ay+ah],...pts,[ax+aw,ay+ah]],[228,236,255]);
  doc.setDrawColor(...AC);doc.setLineWidth(1.8);doc.lines(pts.slice(1).map((p,i)=>[p[0]-pts[i][0],p[1]-pts[i][1]]),pts[0][0],pts[0][1],[1,1],'S',false);
  doc.setDrawColor(...BD);doc.setLineWidth(.6);doc.line(ax,ay+ah,ax+aw,ay+ah);
  tx(days[0].toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}),ax,y+gh-14,7.5,0,MU);tx('hoje: '+vals[29]+' abertas',ax+aw,y+gh-14,7.5,1,TX,'right');tx('máx. '+mxv,ax,ay-4,7.5,0,MU);
  y+=gh+10;

  /* progresso por seção */
  const prow=groups.map(([n,l])=>[n,l.filter(t=>t.status==='done').length,l.length,l.filter(isLate).length]).slice(0,14);
  const ph=34+prow.length*20+6;ensure(ph);
  card(M,y,CW,ph,'Progresso por '+(all?'projeto':'seção'));
  prow.forEach((r,i)=>{const yy=y+42+i*20;tx(fit(r[0],150),M+12,yy,9.5,0,TX);const x0=M+176,w0=CW-176-130;doc.setFillColor(...BD);doc.rect(x0,yy-9,w0,10,'F');doc.setFillColor(...OK);doc.rect(x0,yy-9,w0*(r[2]?r[1]/r[2]:0),10,'F');tx(r[1]+'/'+r[2]+' · '+(r[2]?Math.round(r[1]/r[2]*100):0)+'%',x0+w0+8,yy,8.5,1,TX);if(r[3])tx(r[3]+' atras.',M+CW-12,yy,8,1,RD,'right')});
  y+=ph+12;

  /* tabelas */
  const table=(title,color,arr,cols)=>{
    ensure(60);tx(title+' ('+arr.length+')',M,y+10,11,1,color);y+=18;
    if(!arr.length){tx('Nenhuma.',M+6,y+8,9,0,MU);y+=22;return}
    const draw=()=>{rr(M,y,CW,16,[240,243,249]);let x=M+8;cols.forEach(c=>{tx(c.h,x,y+11,8,1,MU);x+=c.w});y+=18};
    draw();
    arr.forEach((t,i)=>{if(y+16>H-46){doc.addPage();y=M;draw()}if(i%2)rr(M,y-2,CW,16,[250,251,253]);let x=M+8;cols.forEach(c=>{const v=c.f(t);font(9,c.b?1:0);tx(fit(v[0],c.w-10),x,y+9,9,c.b?1:0,v[1]||TX);x+=c.w});y+=16});
    y+=10;
  };
  const pth=t=>{const p=[];let x=t;while(x.parent){x=byId(x.parent);p.unshift(x.title)}return p.slice(-1)[0]||''};
  const baseCols=[{h:'ATIVIDADE',w:CW-300,f:t=>[t.title+(pth(t)?'  ('+pth(t)+')':'')]},{h:'RESPONSÁVEL',w:130,f:t=>[nameOwners(t)]},{h:'PRAZO',w:70,f:t=>[(t.due?fmtS(t.due):'-')+(t.dueTime?' '+t.dueTime:''),isLate(t)?RD:TX],b:1},{h:'STATUS',w:100,f:t=>[stOf(t.status).n]}];
  doc.addPage();y=M;
  table('Atrasadas',RD,late.sort((a,b)=>(a.due||'').localeCompare(b.due||'')),baseCols);
  table('Vencem nos próximos 7 dias',AM,soon,baseCols);
  table('Impedidas / aguardando dependência',RD,bl,baseCols);
  if(opts.full){
    doc.addPage();y=M;
    const ord=[];pids.forEach(pid=>treeOrder(pid).forEach(id=>ord.push(byId(id))));
    const lst=ord.filter(t=>isLeaf(t)&&t.status!=='done');
    table('Lista completa de atividades abertas',AC,lst,[{h:'ATIVIDADE',w:CW-300,f:t=>[(all?(S.projects.find(p=>p.id===t.pid)||{}).name+' > ':'')+(pth(t)?pth(t)+' > ':'')+t.title]},baseCols[1],baseCols[2],baseCols[3]]);
  }
  /* rodapé */
  const n=doc.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setDrawColor(...BD);doc.setLineWidth(.6);doc.line(M,H-30,W-M,H-30);tx('Controle de Atividades - CS Infra  |  Relatório executivo  |  '+scopeName,M,H-18,7.5,0,MU);tx('Página '+i+' de '+n,W-M,H-18,7.5,0,MU,'right')}
  dlBlob('relatorio_executivo_'+today()+'.pdf',doc.output('blob'));
  toast('📄 PDF gerado — veja a pasta Downloads');
}

/* ----- ligações dos botões ----- */
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);
  if(g('#bXls')){exportXlsx();return}
  if(g('#bXlsTpl')){exportTemplate();return}
  if(g('#bXlsIn')){$('#xlsIn').click();return}
  if(g('#bPdf')){openExportPdf();return}
  if(g('#pdf_go')){const all=(document.querySelector('input[name=pdfsc]:checked')||{}).value==='all',full=$('#pdf_full').checked;closeModal();render();setTimeout(()=>exportPdf({all,full}),50);return}
  if(g('#imp_go')){const pl=window._plan;closeModal();if(pl)applyImport(pl);return}
});
$('#xlsIn').onchange=onXlsFile;

/* ====================== CONFIGURAÇÕES, MEMBROS E PERFIS ====================== */
const ROLES={
  admin:{n:'Administrador',d:'Pode gerenciar todas as atividades e membros neste projeto.'},
  normal:{n:'Normal',d:'Pode adicionar e editar todas as atividades e gerenciar o projeto, exceto seus usuários ou excluí-lo.'},
  limited:{n:'Limitado',d:'Pode adicionar atividades e gerenciar as atividades atribuídas a si, exceto excluir.'},
  guest:{n:'Convidado',d:'Pode ler e postar comentários.'}};
const PERM={
  admin:{add:1,editAll:1,del:1,tags:1,rules:1,project:1,delProject:1,members:1,import:1,comment:1},
  normal:{add:1,editAll:1,del:1,tags:1,rules:1,project:1,members:1,import:1,comment:1},
  limited:{add:1,own:1,comment:1},
  guest:{comment:1}};
const roleOfM=m=>m?(m.role||'normal'):'admin';
/* administrador gerencia qualquer pessoa; perfil Normal gerencia todos, menos administradores e a si mesmo */
const canManage=m=>!!m&&can('members')&&(role()==='admin'||(roleOfM(m)!=='admin'&&m.id!==S.me));
const isAdm=()=>role()==='admin';
const onlyAdm=()=>{if(isAdm())return true;toast('Só administradores bloqueiam, removem ou tiram pessoas de projetos.');return false};
const guardM=m=>{if(canManage(m))return true;toast(role()==='admin'?'Sem permissão.':'Só administradores gerenciam administradores (e você não pode alterar a si mesmo).');return false};
const role=()=>roleOfM(mem(S.me));
const noProj=()=>{try{return CLOUD&&proj().virtual&&!PERM[role()].project}catch(e){return false}};
const can=p=>!!PERM[role()][p]&&!(p==='add'&&noProj());
const canEdit=t=>{if(!t)return false;const P=PERM[role()];if(P.editAll)return true;if(P.own)return t.assignees.includes(S.me)||t.by===S.me;return false};
const DENY={add:'não pode criar atividades.',edit:'só pode editar atividades atribuídas a você ou criadas por você.',del:'não pode excluir.',tags:'não pode gerenciar etiquetas.',rules:'não pode gerenciar automações.',project:'não pode gerenciar o projeto.',delProject:'só administradores excluem projetos.',members:'só administradores gerenciam membros e configurações.',import:'não pode importar atividades.'};
function deny(k){if(k==='add'&&noProj()){toast('Ainda não há projetos. Peça a um administrador para criar o primeiro.');return}toast('🔒 Perfil '+ROLES[role()].n+': '+(DENY[k]||'ação não permitida.'))}
const ADDA=['add','addroot','addsub','sublist','paste'],EDITA=['edit','done','self','indent','outdent','mup','mdown','mtop','mbottom','section','milestone','star','cut'];
function actAllowed(name,tg,first){
  if(ADDA.includes(name)&&!can('add')){deny('add');return false}
  if(EDITA.includes(name)){const ids=tg.length?tg:(first?[first]:[]);if(ids.some(i=>!canEdit(byId(i)))){deny('edit');return false}}
  if(name==='del'&&!can('del')){deny('del');return false}
  return true;
}

/* ----- ajuste de interface por perfil ----- */
function applyRoleUI(){
  const set=(sel,ok,why)=>{const e=$(sel);if(!e)return;e.disabled=!ok;e.style.opacity=ok?'':'.4';if(!ok)e.title='🔒 '+why;};
  set('#bTags',can('tags'),'Seu perfil não gerencia etiquetas');
  set('#bRules',can('rules'),'Seu perfil não gerencia automações');
  set('#addProj',can('project'),'Seu perfil não cria projetos');
  set('#delProj',can('delProject'),'Somente administradores excluem projetos');
  set('#bXlsIn',can('import'),'Seu perfil não importa atividades');
  set('#qaGo',can('add'),'Seu perfil não cria atividades');
  set('#newTask',can('add'),'Seu perfil não cria atividades');
  const qa=$('#qa');qa.disabled=!can('add');qa.placeholder=can('add')?('Adicionar atividade — ex.: Enviar SPED amanhã 14h @'+exName()+' #fiscal !alta'):noProj()?'Ainda não há projetos — peça a um administrador para criar o primeiro':'Seu perfil ('+ROLES[role()].n+') só pode ler e comentar';
  const m=mem(S.me),u=$('#bUser');
  u.innerHTML=m?`<span class="av" style="background:${m.color};border-color:transparent">${esc(ini(m.name))}</span><span style="display:flex;flex-direction:column;line-height:1.1;text-align:left"><b style="font-size:12.5px">${esc(m.name)}</b><small style="color:var(--mu);font-size:10.5px">${ROLES[role()].n}</small></span>`:`<span class="av" style="background:#667085;border-color:transparent">?</span><span style="display:flex;flex-direction:column;line-height:1.1;text-align:left"><b style="font-size:12.5px">Quem é você?</b><small style="color:var(--mu);font-size:10.5px">Administrador (sem login)</small></span>`;
  $('#brandName').textContent=(S.org||'CS Infra');
}

/* ----- menus flutuantes: perfil do membro (r) e trocar de usuário (u) ----- */
function placePop(anchor){
  const P=$('#pop');P.style.display='block';
  if(anchor&&anchor.getBoundingClientRect){const r=anchor.getBoundingClientRect();let x=Math.min(r.left,innerWidth-P.offsetWidth-8),yy=r.bottom+4;if(yy+P.offsetHeight>innerHeight-8)yy=Math.max(8,r.top-P.offsetHeight-4);P.style.left=Math.max(8,x)+'px';P.style.top=yy+'px'}
}
function renderSpecialPop(anchor){
  const P=$('#pop');
  if(CLOUD&&pop.type==='u'){P.innerHTML=cloudUserPop();placePop(anchor);return}
  if(pop.type==='r'){
    const m=mem(pop.id);if(!m){closePop();return}
    P.innerHTML=Object.keys(ROLES).filter(k=>k!=='admin'||role()==='admin').map(k=>`<label class="pl" tabindex="0" data-setrole="${k}" style="align-items:flex-start;min-width:300px"><div style="flex:1"><b style="color:${roleOfM(m)===k?'var(--ac)':'var(--tx)'}">${ROLES[k].n}</b><small style="display:block;margin-top:2px">${ROLES[k].d}</small></div>${roleOfM(m)===k?'<span style="color:var(--ac)">✓</span>':''}</label>`).join('')+`<div class="ft"><div class="hint" style="margin:0">Veja a tabela de permissões abaixo da lista de membros.</div></div>`;
  }else{
    P.innerHTML=`<div style="padding:4px 8px;color:var(--mu);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px">Entrar como</div>`+S.members.map(m=>`<label class="pl" tabindex="0" data-asuser="${m.id}"><span class="av" style="background:${m.color};border-color:transparent">${esc(ini(m.name))}</span><div style="flex:1"><b>${esc(m.name)}</b><small style="display:block">${ROLES[roleOfM(m)].n}</small></div>${S.me===m.id?'<span style="color:var(--ac)">✓</span>':''}</label>`).join('')+`<div class="ft"><div class="hint" style="margin:0">Sem servidor, trocar de usuário não exige senha: o perfil limita a interface, mas não é segurança real.</div></div>`;
  }
  placePop(anchor);
}
function setRole(mid,r){
  const m=mem(mid);if(!m)return;
  if(!can('members')){deny('members');return}
  if(!guardM(m))return;
  if(r==='admin'&&role()!=='admin'){toast('Só administradores criam administradores.');return}
  if(roleOfM(m)==='admin'&&r!=='admin'&&S.members.filter(x=>roleOfM(x)==='admin').length<2){toast('Mantenha pelo menos um administrador.');return}
  m.role=r;save();closePop();render();toast(m.name+' agora é '+ROLES[r].n);
}

/* ----- painel da atividade em modo leitura ----- */
function openTask(id){
  openTaskBase(id);
  const t=byId(id);if(!t)return;
  modalRO=!canEdit(t);
  if(!modalRO)return;
  const M=$('#modal');
  M.querySelectorAll('input,select,textarea,button').forEach(el=>{if(el.id==='m_comment'||el.id==='m_x')return;el.disabled=true});
  ['m_ok','m_del','m_mail'].forEach(i=>{const e=$('#'+i);if(e)e.style.display='none'});
  const sb=$('#m_sub');if(sb)sb.parentElement.style.display='none';
  const nt=$('#m_newtag');if(nt)nt.style.display='none';
  M.insertAdjacentHTML('afterbegin',`<div class="hint" style="background:var(--ac2);color:var(--ac);border-radius:8px;padding:8px 12px;margin:0 0 10px;font-weight:600">🔒 Somente leitura — perfil ${ROLES[role()].n}: ${role()==='guest'?'você pode ler e comentar.':'você edita apenas atividades atribuídas a você ou criadas por você. Comentar é permitido.'}</div>`);
}

/* ----- bloqueios (fase de captura, antes dos demais tratadores) ----- */
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);let el,k=null,id=null;
  if(el=g('[data-ck]')){id=el.dataset.ck;k='edit'}
  else if(el=g('[data-mck]')){id=el.dataset.mck;k='edit'}
  else if(el=g('[data-pop]')){const [ty,i]=el.dataset.pop.split(':');if(ty==='r'||ty==='u')return;id=i;k='edit'}
  else if(el=g('[data-ie]')){id=el.dataset.ie;k='edit'}
  else if(el=g('[data-pr]')){id=el.dataset.pr;k='edit'}
  else if(el=g('[data-mv]')){id=el.dataset.mv.split(':')[0];k='edit'}
  else if(el=g('[data-star]')){id=el.dataset.star;k='edit'}
  else if(g('[data-add]')||g('[data-caladd]'))k='add';
  else if(g('#m_del'))k='del';
  else if(g('#bRules'))k='rules';
  else if(g('#bTags'))k='tags';
  else if(g('#addProj'))k='project';
  else if(g('#delProj'))k='delProject';
  else if(g('#bXlsIn'))k='import';
  else return;
  const ok=k==='edit'?canEdit(byId(id)):k==='add'?can('add'):can(k);
  if(!ok){e.preventDefault();e.stopImmediatePropagation();deny(k)}
},true);
document.addEventListener('dragstart',e=>{
  const el=e.target.closest&&e.target.closest('[data-row],.card,[data-cd]');if(!el)return;
  const id=el.dataset.row||el.dataset.t||el.dataset.cd;
  const ids=(sel.size>1&&sel.has(id))?[...sel]:[id];
  if(ids.some(i=>!canEdit(byId(i)))){e.preventDefault();e.stopImmediatePropagation();deny('edit')}
},true);

/* ----- página de Configurações ----- */
function openSettings(tab){
  if(S.view!=='settings'){S.prevView=S.view;S.prevSmart=S.smart;S.prevCur=S.cur}
  S.view='settings';if(tab)S.setTab=tab;adding=null;render()
}
function backFromSettings(){
  const v=S.prevView&&S.prevView!=='settings'?S.prevView:'list';
  if(S.prevCur&&S.projects.some(p=>p.id===S.prevCur))S.cur=S.prevCur;
  if(v==='smart'){S.view='smart';S.smart=S.prevSmart||S.smart}else S.view=v;
  adding=null;cur=null;sel=new Set();render();
}
function backLabel(){
  if(S.prevView==='smart'){const sm=SMARTS.find(s=>s[0]===(S.prevSmart||S.smart))||SMARTS[0];return sm[1].replace(/^\S+\s/,'')}
  const p=S.projects.find(x=>x.id===(S.prevCur||S.cur))||proj();return p&&!p.virtual?p.name:'o sistema';
}
function openTeam(){openSettings('membros')}
function inviteDialog(m){
  const link=S.link?`\n\nAcesse o sistema: ${S.link}`:'';
  mailDialog('Convite por e-mail',[m.email],`Convite: ${proj().name}`,
   `Olá${m.name&&m.name!==m.email?', '+m.name:''}!\n\nVocê foi convidado(a) para colaborar no projeto "${proj().name}" no Controle de Atividades.\n\nSeu perfil: ${ROLES[roleOfM(m)].n} — ${ROLES[roleOfM(m)].d}${link}`,()=>{closeModal();openSettings('membros')});
}
const SETTABS=[['geral','Geral'],['membros','Membros'],['equipes','Equipes externas'],['links','Links compartilhados'],['props','Propriedades'],['opcoes','Opções']];
const PERMROWS=[['Ver atividades, projetos e painéis',()=>1],['Comentar',r=>PERM[r].comment],['Criar atividades',r=>PERM[r].add],['Editar atividades atribuídas a si ou criadas por si',r=>PERM[r].own||PERM[r].editAll],['Editar qualquer atividade',r=>PERM[r].editAll],['Excluir atividades',r=>PERM[r].del],['Etiquetas, automações, modelos e importação Excel',r=>PERM[r].tags&&PERM[r].import],['Gerenciar membros: convidar, bloquear, remover e escolher projetos (administradores só o administrador gerencia)',r=>PERM[r].members],['Criar administradores',r=>r==='admin'],['Excluir projeto',r=>PERM[r].delProject]];
function memberCard(m,adm){
  if(CLOUD)return memberCardCloud(m,adm);
  const r=roleOfM(m),you=S.me===m.id;
  return `<div class="mcard"><span class="avl" style="background:${m.color}">${esc(ini(m.name))}</span>
   <div class="mi">
    ${adm?`<input class="mn" data-mn="${m.id}" value="${esc(m.name)}" placeholder="Nome">`:`<div class="mn"><b>${esc(m.name)}</b></div>`}
    ${adm?`<input class="me" data-me="${m.id}" value="${esc(m.email||'')}" placeholder="e-mail">`:`<div class="me">${esc(m.email||'sem e-mail')}</div>`}
    <div class="mx">${you?'<span class="st" style="color:var(--ac);border-color:var(--ac)">você</span>':''}<span class="st" style="color:${m.status==='invited'?'var(--amb)':'var(--ok)'};border-color:${m.status==='invited'?'var(--amb)':'var(--ok)'}">${m.status==='invited'?'⏳ convidado':'✔ ativo'}</span>${m.team?`<span class="st" style="color:var(--mu);border-color:var(--bd)">${esc((S.teams.find(t=>t.id===m.team)||{}).name||'equipe')}</span>`:''}<span style="color:var(--mu);font-size:12px">capacidade <input data-mcap="${m.id}" type="number" min="1" max="80" value="${m.cap||40}" style="width:58px;padding:2px 6px" ${adm?'':'disabled'}> h/sem</span>${adm?'<span class="sws">'+COLORS.map(c=>`<span class="sw ${c===m.color?'on':''}" data-mc="${m.id}|${c}" style="background:${c}"></span>`).join('')+'</span>':''}</div>
    ${memberProjChips(m)}
   </div>
   <div class="mr"><button class="rolebtn" data-pop="r:${m.id}" ${adm?'':'disabled'}><span>${ROLES[r].n}</span><span>▾</span></button>
    ${adm?`<div class="mact"><button data-asuser="${m.id}" title="Usar o sistema como esta pessoa">Entrar como</button><button data-mst="${m.id}" title="Alternar convidado/ativo">${m.status==='invited'?'Marcar ativo':'Marcar convidado'}</button><button data-mi="${m.id}" title="Enviar convite por e-mail">✉</button><button class="ghost" data-sdel="${m.id}" title="REMOVER DEFINITIVAMENTE: apaga a pessoa e tira o nome dela das atividades. Não dá para desfazer.">🗑 Remover definitivamente</button></div>`:''}
   </div></div>`;
}
const THEMES=[['light','Claro','Visual limpo e neutro. Padrão.',['#f5f6f8','#ffffff','#0e7a6e','#e4e7ec']],['dark','Escuro','Menos brilho para ambientes escuros.',['#0b0e0d','#121716','#38d6b3','#222a29']],['cs','CS Infra','Azul, laranja e verde da identidade da marca.',['#f3f4fa','#262c6e','#3b4796','#f07d12']]];
const themePicker=()=>`<div class="theme-grid">${THEMES.map(([k,n,d,c])=>`<button type="button" class="tcard ${S.theme===k?'on':''}" data-gth="${k}"><span class="tprev" style="background:${c[0]}"><i style="width:26%;background:${k==='light'?'#fff':c[1]};border-right:1px solid ${c[3]}"></i><span class="tbody"><b style="width:62%;background:${c[2]}"></b><b style="width:90%;background:${c[3]}"></b><b style="width:74%;background:${c[3]}"></b>${k==='cs'?'<em style="background:#f07d12"></em>':''}</span></span><span class="tn">${n}${S.theme===k?'<em>em uso</em>':''}</span><small>${d}</small></button>`).join('')}</div>`;
function settings(){
  let tab=S.setTab||'membros';const adm=can('members'),prj=can('project');if(!adm&&['membros','equipes','links'].includes(tab)){tab='geral';S.setTab='geral'}
  const NAV=[['geral','sliders','Geral'],['membros','people','Membros'],['equipes','user','Equipes externas'],['links','file','Links e convites'],['props','board','Projeto atual'],['opcoes','moon','Aparência e dados']];
  const NAVV=NAV.filter(n=>adm||!['membros','equipes','links'].includes(n[0]));
  if(!NAVV.some(n=>n[0]===tab))S.setTab='geral';
  const back=`<button type="button" class="backbtn" data-sback title="Voltar para onde você estava (Esc)">← Voltar para ${esc(backLabel())}</button>`;
  const nav=`<nav class="setnav">${NAVV.map(([k,i,l])=>`<a data-stab="${k}" class="${tab===k?'on':''}">${ic(i)}<span>${l}</span></a>`).join('')}</nav>`;
  const ro=adm?'':'<div class="sro">🔒 Somente leitura — apenas administradores alteram estas configurações.</div>';
  const card=(t,d,body,cls,act)=>`<section class="scard ${cls||''}"><header><div><h3>${t}</h3>${d?`<p>${d}</p>`:''}</div>${act?`<div class="sact">${act}</div>`:''}</header><div class="sb">${body}</div></section>`;
  const row=(l,h,c)=>`<div class="frow"><div class="fl"><label>${l}</label>${h?`<span>${h}</span>`:''}</div><div class="fc">${c}</div></div>`;
  let b='';
  if(tab==='membros'){
    const act=adm?`<button class="pri" data-act3="invite">${ic('plus',16)} Convidar</button>${CLOUD?`<button data-act3="addperson" title="Pessoa que só aparece para atribuir atividades, sem login">Pessoa sem acesso</button>`:''}`:'';
    b=ro+card(`Membros <span class="cnt">${S.members.length}</span>`,'Quem pode entrar no sistema e com qual perfil.',S.members.map(m=>memberCard(m,adm)).join(''),'',act)+
    card('Perfis e permissões','O que cada perfil pode fazer.',`<table class="perm"><tr><th></th>${Object.keys(ROLES).map(k=>`<th>${ROLES[k].n}</th>`).join('')}</tr>${PERMROWS.map(r=>`<tr><td>${r[0]}</td>${Object.keys(ROLES).map(k=>`<td>${r[1](k)?'<span style="color:var(--ok)">✔</span>':'<span style="color:var(--mu)">—</span>'}</td>`).join('')}</tr>`).join('')}</table>${CLOUD?'<div class="hint" style="margin-top:12px">As permissões são aplicadas também no banco de dados (não só na tela).</div>':'<div class="hint" style="margin-top:12px">⚠ Sem login em servidor, este controle vale apenas na interface.</div>'}`);
  }else if(tab==='equipes'){
    b=ro+card('Equipes externas',`Grupos de pessoas de fora (clientes, parceiros) com perfil limitado. ${S.teams.length} equipe(s).`,
    S.teams.map(t=>{const ms=S.members.filter(m=>m.team===t.id);return `<div class="mcard" style="align-items:flex-start"><span class="avl" style="background:var(--ac2);color:var(--ac);font-size:22px">👥</span><div class="mi"><div class="mn"><b>${esc(t.name)}</b></div><div class="mx">${ms.map(m=>`<span class="pa on" style="opacity:1"><span class="av" style="background:${m.color};border-color:transparent">${esc(ini(m.name))}</span>${esc(m.name)}</span>`).join('')||'<span class="hint">Sem membros</span>'}</div>${adm?`<input data-teamadd="${t.id}" placeholder="+ adicionar pessoa por e-mail (Enter)" style="margin-top:8px;max-width:340px">`:''}</div><div class="mr"><select data-teamrole="${t.id}" ${adm?'':'disabled'}>${['limited','guest'].map(k=>`<option value="${k}" ${t.role===k?'selected':''}>${ROLES[k].n}</option>`).join('')}</select>${adm?`<div class="mact"><button class="ghost" data-teamdel="${t.id}">Excluir equipe</button></div>`:''}</div></div>`}).join('')||'<div class="hint" style="padding:12px 0">Nenhuma equipe criada ainda.</div>',
    '',adm?`<button class="pri" data-act3="newteam">${ic('plus',16)} Nova equipe</button>`:'');
  }else if(tab==='links'){
    if(adm&&CLOUD)setTimeout(loadMailStatus,60);
    b=ro+card('Link do sistema','Endereço onde a equipe acessa o sistema. Entra nas mensagens de convite.',row('Endereço','Ex.: https://csinfra-fiscal.vercel.app',`<input data-glink="1" value="${esc(S.link||'')}" placeholder="Cole aqui o endereço publicado" ${adm?'':'disabled'}>`))+
    (adm&&CLOUD?card('E-mail do sistema','Os avisos por e-mail (“Avisar responsáveis”) saem do próprio sistema, não do e-mail de quem clicou.','<div id="mailst" class="hint">Verificando…</div>'):'')+
    card('Mensagem de convite por perfil','Abre no seu programa de e-mail, pronta para enviar.',Object.keys(ROLES).map(k=>`<div class="frow"><div class="fl"><label>${ROLES[k].n}</label><span>${ROLES[k].d}</span></div><div class="fc"><button data-linkrole="${k}">${ic('file',16)} Gerar convite</button></div></div>`).join(''));
  }else if(tab==='props'){
    const p=proj(),d=!prj?'disabled':'';
    b=(prj?'':'<div class="sro">🔒 Somente leitura para o seu perfil.</div>')+card('Projeto atual',esc(p.name),
      row('Nome','',`<input data-pprop="name" value="${esc(p.name)}" ${d}>`)+
      row('Descrição','',`<textarea data-pprop="desc" rows="3" ${d}>${esc(p.desc||'')}</textarea>`)+
      row('Início do projeto','',`<input type="date" data-pprop="start" value="${p.start||''}" ${d}>`)+
      row('Término previsto','',`<input type="date" data-pprop="end" value="${p.end||''}" ${d}>`)+
      row('Cor','Aparece no menu e nas etiquetas do projeto',`<div class="swrow">${PCOL.map(c=>`<span class="sw ${pcol(p)===c?'on':''}" data-pcolor="${c}" style="background:${c}"></span>`).join('')}</div>`))+
      accessCard(p,adm)+
      card('Acesso','',row('Perfil padrão para novos membros','Aplicado a quem for convidado sem perfil definido',`<select data-grole="1" ${adm?'':'disabled'}>${Object.keys(ROLES).filter(k=>k!=='admin'||role()==='admin').map(k=>`<option value="${k}" ${(S.defaultRole||'normal')===k?'selected':''}>${ROLES[k].n}</option>`).join('')}</select>`));
  }else if(tab==='opcoes'){
    b=card('Aparência','Escolha o tema do sistema. Fica salvo neste navegador.',themePicker())+
      card('Dados e backup','Exporte suas atividades ou traga atividades de uma planilha.',`<div class="btns"><button class="pri" data-act3="hub">${ic('download',16)} Importar e exportar</button>`)+
      card('Ajuda','',`<div class="btns"><button data-act3="welcome">Rever guia de boas-vindas</button><button data-act3="keys">Atalhos de teclado</button></div>`)+
      card('Zona de risco','Ações que apagam dados.',`<div class="btns"><button data-act3="rmex" ${prj?'':'disabled'}>Remover atividades de exemplo</button><button data-act3="delproj" style="color:var(--red)" ${can('delProject')?'':'disabled'}>Excluir este projeto</button></div>`,'danger');
  }else{
    const m=mem(S.me);
    b=ro+card('Organização','',row('Nome da organização','Aparece no topo do menu',`<input data-gorg="1" value="${esc(S.org||'CS Infra')}" ${adm?'':'disabled'}>`))+
      card('Sua conta','',CLOUD?`<div class="frow"><div class="fl"><label>Conectado como</label><span>Perfil <b>${ROLES[role()].n}</b></span></div><div class="fc"><b>${esc((sess&&sess.user&&sess.user.email)||(cloud.me&&cloud.me.email)||'')}</b></div></div><div class="frow"><div class="fl"><label>Segurança</label></div><div class="fc btns"><button data-cloud="pw">Alterar senha</button><button data-cloud="out">Sair da conta</button></div></div>`:
        row('Usuário atual','Entrar como outra pessoa',`<select data-gme="1"><option value="">— ninguém definido (administrador) —</option>${S.members.map(x=>`<option value="${x.id}" ${S.me===x.id?'selected':''}>${esc(x.name)} — ${ROLES[roleOfM(x)].n}</option>`).join('')}</select>`))+
      card('Idioma e fuso','',row('Região','',`Português (Brasil) · ${esc(Intl.DateTimeFormat().resolvedOptions().timeZone)}`));
  }
  $('#view').innerHTML=`<div class="setpg">${back}<header class="sph"><h1>Configurações</h1><p>Perfis, equipe, aparência e dados do sistema.</p></header><div class="setwrap">${nav}<div class="setmain">${b}</div></div></div>`;
}

/* ----- remover pessoa: o que fazer com as atividades dela ----- */
async function flushSync(){
  if(!CLOUD||!cloud.ready)return;
  clearTimeout(cloud.timer);cloud.timer=null;
  const wait=async()=>{for(let i=0;i<60&&cloud.pushing;i++)await new Promise(r=>setTimeout(r,100))};
  await wait();await pushNow();await wait();
}
async function finishRemoveMember(m){
  const hasLogin=CLOUD&&m.access&&validEmail(m.email||'');
  if(CLOUD)await flushSync();
  if(hasLogin){
    try{await fnCall({action:'delete',email:m.email,name:m.name,role:roleOfM(m)});await pullAll(false,true);render();return 'login'}
    catch(x){if(!fnMissing(x)){toast(trErr(x.message));return 'erro'}}
  }
  S.members=S.members.filter(x=>x.id!==m.id);S.tasks.forEach(t=>t.assignees=t.assignees.filter(a=>a!==m.id));if(S.me===m.id)S.me='';
  render();save();return 'ok';
}
function removeMemberDialog(m){
  const mine=S.tasks.filter(t=>(t.assignees||[]).includes(m.id)),excl=mine.filter(t=>t.assignees.length===1);
  const hasLogin=CLOUD&&m.access&&validEmail(m.email||'');
  const loginNote=hasLogin?'<div class="hint" style="margin-top:10px">O login dela (Authentication → Users do Supabase) também será excluído.</div>':'';
  if(!mine.length){
    ask('Remover '+m.name+' do sistema?'+(hasLogin?' O login dela (Authentication → Users do Supabase) também será excluído.':''),'',async()=>{await finishRemoveMember(m);toast('Pessoa removida')},{confirm:1,ok:'Remover'});return}
  const others=S.members.filter(x=>x.id!==m.id&&x.access!==false);
  const extra=excl.reduce((n,t)=>n+desc(t.id).filter(d=>!(d.assignees||[]).includes(m.id)).length,0);
  const M=$('#modal');M.dataset.kind='rmm';M.style.width='';editing=null;closePop();window._rmId=m.id;
  M.innerHTML=`<h3>Remover ${esc(m.name)}</h3>
  <div class="hint" style="margin:-6px 0 12px"><b>${mine.length}</b> atividade${mine.length>1?'s':''} no nome dela${mine.length>excl.length?` (${mine.length-excl.length} compartilhada${mine.length-excl.length>1?'s':''} com outras pessoas)`:''}. O que fazer com elas?</div>
  <label class="opt"><input type="radio" name="rm_mode" value="move" checked><span><b>Passar para outra(s) pessoa(s)</b><small>As atividades continuam, com os novos responsáveis.</small></span></label>
  <div class="alist" id="rm_who" style="margin:4px 0 10px;max-height:190px;overflow:auto">${others.map(x=>`<label class="arow"><input type="checkbox" class="rm_to" value="${x.id}"><span class="av" style="background:${x.color};border-color:transparent">${esc(ini(x.name))}</span><span class="an"><b>${esc(x.name)}</b><small>${esc(x.email||'sem e-mail')}</small></span>${roleBadge(x)}</label>`).join('')||'<div class="hint" style="padding:14px">Não há outra pessoa para receber as atividades.</div>'}</div>
  <label class="opt"><input type="radio" name="rm_mode" value="del"><span><b>Excluir as atividades</b><small>${excl.length?`Apaga ${excl.length} atividade${excl.length>1?'s':''} que ${excl.length>1?'são só dela':'é só dela'}${extra?` e ${extra} subatividade${extra>1?'s':''} de outras pessoas`:''}. Nas compartilhadas ela só deixa de ser responsável.`:'Não há atividades só dela; nas compartilhadas ela apenas deixa de ser responsável.'}</small></span></label>
  <label class="opt"><input type="radio" name="rm_mode" value="none"><span><b>Deixar sem responsável</b><small>As atividades continuam, sem ninguém atribuído.</small></span></label>
  ${loginNote}
  <div class="hint" id="rm_msg" style="color:var(--red)"></div>
  <div class="acts"><span></span><span><button id="g_ok" type="button">Cancelar</button> <button class="pri" id="rm_go" type="button" style="background:var(--red);border-color:var(--red)">Remover pessoa</button></span></div>`;
  $('#ov').classList.add('on');
}
document.addEventListener('click',async e=>{
  const b=e.target.closest&&e.target.closest('#rm_go');if(!b)return;
  e.stopImmediatePropagation();
  const m=mem(window._rmId);if(!m)return;
  const mode=(document.querySelector('input[name=rm_mode]:checked')||{}).value||'move';
  const ids=[...document.querySelectorAll('.rm_to:checked')].map(x=>x.value);
  if(mode==='move'&&!ids.length){$('#rm_msg').textContent='Escolha para quem passar as atividades (ou use outra opção).';return}
  b.disabled=true;b.textContent='Removendo…';
  const mine=S.tasks.filter(t=>(t.assignees||[]).includes(m.id));let moved=0,gone=0;
  if(mode==='move'){mine.forEach(t=>{t.assignees=[...new Set(t.assignees.filter(a=>a!==m.id).concat(ids))];moved++})}
  else if(mode==='del'){
    const excl=mine.filter(t=>t.assignees.length===1);
    excl.forEach(t=>{if(byId(t.id)){delTask(t.id);gone++}});
    S.tasks.forEach(t=>{t.assignees=(t.assignees||[]).filter(a=>a!==m.id)});
  }else{S.tasks.forEach(t=>{t.assignees=(t.assignees||[]).filter(a=>a!==m.id)})}
  const r=await finishRemoveMember(m);
  if(r==='erro'){closeModal();render();return}
  closeModal();render();
  toast(mode==='move'?`Pessoa removida; ${moved} atividade${moved!==1?'s':''} passaram para ${ids.map(i=>(mem(i)||{}).name).filter(Boolean).join(', ')}`:mode==='del'?`Pessoa removida; ${gone} atividade${gone!==1?'s':''} excluída${gone!==1?'s':''}`:'Pessoa removida; atividades sem responsável');
},true);
document.addEventListener('change',e=>{if(e.target&&e.target.classList&&e.target.classList.contains('rm_to')){const r=document.querySelector('input[name=rm_mode][value=move]');if(r)r.checked=true}});

/* ----- acesso por projeto ----- */
const roleBadge=m=>`<span class="rb rb-${roleOfM(m)}">${ROLES[roleOfM(m)].n}</span>`;
function projAccessNote(p){
  if(p.restricted)return 'Somente administradores e as pessoas marcadas abaixo veem este projeto e suas atividades.';
  return 'Todos os membros com perfil Administrador ou Normal veem este projeto. Pessoas de fora (Limitado e Convidado) só veem se estiverem marcadas abaixo.';
}
const inProject=(m,p)=>{const r=roleOfM(m);if(r==='admin')return true;if((p.access||[]).includes(m.id))return true;return r==='normal'&&!p.restricted&&!m.only&&m.access!==false};
function memberProjChips(m){
  const r=roleOfM(m);
  if(r==='admin')return `<div class="mprojs"><span class="mpl">Projetos:</span><span class="pchip all">Todos os projetos (administrador)</span></div>`;
  const ps=projsOf(m);
  return `<div class="mprojs"><span class="mpl">Projetos (${ps.length}):</span>${ps.map(p=>`<button type="button" class="pchip" data-gopj="${p.id}" title="Ver quem participa de “${esc(p.name)}”"><i style="background:${pcol(p)}"></i>${esc(p.name)}</button>`).join('')||'<span class="pchip none">nenhum projeto</span>'}</div>`;
}
const projsOf=m=>{const r=roleOfM(m);return S.projects.filter(p=>!p.virtual&&inProject(m,p))};
function accessCard(p,adm){
  const mem2=S.members.filter(m=>inProject(m,p)&&(m.access!==false||(p.access||[]).includes(m.id)));
  const out=S.members.filter(m=>!inProject(m,p)&&roleOfM(m)!=='admin'&&m.access!==false);
  const how=m=>{const r=roleOfM(m);return r==='admin'?'administrador':((p.access||[]).includes(m.id)?'incluído':'automático (projeto aberto)')};
  const row=m=>{const r=roleOfM(m),inc=(p.access||[]).includes(m.id);
    return `<div class="arow"><span class="av" style="background:${m.color};border-color:transparent">${esc(ini(m.name))}</span><span class="an"><b>${esc(m.name)}</b><small>${esc(m.email||'sem e-mail')}</small></span>${roleBadge(m)}<em>${how(m)}</em>${adm&&isAdm()&&r!=='admin'?`<button type="button" class="ghost rmp" data-rmproj="${p.id}|${m.id}" title="Tira ${esc(m.name)} só deste projeto. Os outros projetos e o acesso ao sistema não mudam.">Tirar do projeto</button>`:''}</div>`};
  const seg=`<div class="seg"><button type="button" class="${!p.restricted?'on':''}" data-pacc="open" ${adm&&isAdm()?'':'disabled'}>${ic('people',16)} Equipe toda</button><button type="button" class="${p.restricted?'on':''}" data-pacc="restricted" ${adm&&isAdm()?'':'disabled'}>${ic('lock',16)} Somente selecionados</button></div>`;
  const add=adm?`<div class="addmem"><select id="pm_add"><option value="">+ Adicionar pessoa a este projeto…</option>${out.map(m=>`<option value="${m.id}">${esc(m.name)} — ${ROLES[roleOfM(m)].n}</option>`).join('')}</select><button type="button" class="pri" data-pmadd ${out.length?'':'disabled'}>Adicionar</button></div>`:'';
  return `<section class="scard"><header><div><h3>Membros deste projeto <span class="cnt">${mem2.length}</span></h3><p>${projAccessNote(p)} Quem não aparece aqui não enxerga “${esc(p.name)}”. A lista de todas as pessoas, com os projetos de cada uma, está na aba <b>Membros</b>.</p></div></header><div class="sb">${adm?'':'<div class="hint" style="margin:0 0 10px">Somente quem gerencia membros altera o acesso.</div>'}${seg}<div class="alist">${mem2.map(row).join('')||'<div class="hint">Só administradores enxergam este projeto.</div>'}</div>${add}</section>`;
}
function setAccess(pid,mid,on){
  const p=S.projects.find(x=>x.id===pid);if(!p||!can('members'))return;
  if(!on&&!isAdm()){toast('Só administradores tiram pessoas de projetos.');render();return}
  const a=new Set(p.access||[]);on?a.add(mid):a.delete(mid);p.access=[...a].sort();save();
}
function memberProjectsDialog(mid){
  if(!can('members')){deny('members');return}
  const m=mem(mid);if(!m)return;window._mpMid=mid;
  const M=$('#modal');M.dataset.kind='mproj';M.style.width='';editing=null;closePop();
  const ps=S.projects.filter(p=>!p.virtual);
  M.innerHTML=`<h3>Projetos de ${esc(m.name)}</h3><div class="hint" style="margin:-6px 0 10px">${roleBadge(m)} ${roleOfM(m)==='limited'||roleOfM(m)==='guest'?'Pessoa de fora: vê somente os projetos marcados.':roleOfM(m)==='normal'?'Vê os projetos abertos automaticamente; os restritos só se marcados.':'Administrador vê tudo.'}</div>
  ${roleOfM(m)==='normal'?`<label class="opt" style="margin:0 0 10px"><input type="checkbox" id="mp_only" ${m.only?'checked':''} ${isAdm()?'':'disabled'}><span><b>Só vê os projetos marcados abaixo</b><small>Desligado: vê todos os projetos abertos da equipe. Ligado: vê apenas os marcados e os que ela mesma criar.</small></span></label>`:''}
  <div class="alist">${ps.map(p=>{const on=(p.access||[]).includes(m.id),auto=roleOfM(m)==='admin'||(roleOfM(m)==='normal'&&!p.restricted&&!m.only);return `<label class="arow ${auto?'auto':''}"><input type="checkbox" data-mp2="${p.id}|${m.id}" ${on||auto?'checked':''} ${(auto||(on&&!isAdm()))?'disabled':''}><i class="pd" style="background:${pcol(p)}"></i><span class="an"><b>${esc(p.name)}</b><small>${p.restricted?'Projeto restrito':'Projeto aberto'}</small></span>${auto?'<em>automático</em>':''}${(on||auto)&&roleOfM(m)!=='admin'&&isAdm()?`<button type="button" class="ghost rmp" data-rmproj="${p.id}|${m.id}" title="Tira ${esc(m.name)} só do projeto ${esc(p.name)}. Os outros projetos e o acesso ao sistema não mudam.">Tirar deste projeto</button>`:''}</label>`}).join('')||'<div class="hint">Nenhum projeto criado.</div>'}</div>
  <div class="acts"><span></span><button class="pri" id="g_ok">Concluir</button></div>`;
  $('#ov').classList.add('on');
}
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset&&t.dataset.pm2){setAccess(proj().id,t.dataset.pm2,t.checked);return}
  if(t.dataset&&t.dataset.mp2){const[pid,mid]=t.dataset.mp2.split('|');setAccess(pid,mid,t.checked);return}
});
document.addEventListener('click',e=>{
  const b=e.target.closest&&e.target.closest('[data-pacc]');
  if(b&&!b.disabled){const p=proj();if(!can('members')||!onlyAdm())return;p.restricted=b.dataset.pacc==='restricted';
    if(p.restricted&&S.me&&!(p.access||[]).includes(S.me)&&roleOfM(mem(S.me))==='normal')p.access=[...(p.access||[]),S.me];
    save();render();return}
  const mp=e.target.closest&&e.target.closest('[data-mproj]');
  if(mp){const mm=mem(mp.dataset.mproj);if(mm&&guardM(mm))memberProjectsDialog(mp.dataset.mproj)}
});

/* ----- ações da página de Configurações ----- */
function inviteMemberDialog(teamId){
  if(!can('members')){deny('members');return}
  const M=$('#modal');M.dataset.kind='invite';editing=null;closePop();
  const dr=teamId?(S.teams.find(t=>t.id===teamId)||{}).role:(S.defaultRole||'normal');
  M.innerHTML=`<h3>＋ Convidar novos membros</h3><label style="margin-top:0">E-mail</label><input id="iv_email" placeholder="email@empresa.com.br"><label>Nome (opcional)</label><input id="iv_name" placeholder="Nome da pessoa"><label>Perfil</label><select id="iv_role">${Object.keys(ROLES).filter(k=>k!=='admin'||role()==='admin').map(k=>`<option value="${k}" ${dr===k?'selected':''}>${ROLES[k].n} — ${ROLES[k].d}</option>`).join('')}</select>
  ${cloud.on?`<label>Como cadastrar</label><select id="iv_mode"><option value="mail">Enviar convite por e-mail</option><option value="manual">Cadastrar manualmente (eu defino a senha, sem e-mail)</option></select>
  <div id="iv_manual" style="display:none"><label>Senha provisória (mín. 8 caracteres)</label><div style="display:flex;gap:6px"><input id="iv_pw" type="text" autocomplete="off" style="flex:1" placeholder="Senha provisória"><button type="button" id="iv_gen">Gerar</button></div><div class="hint" style="margin:6px 0 0">A conta é criada já ativa. Passe o e-mail e a senha para a pessoa por onde preferir (WhatsApp, pessoalmente…). Ela pode trocar a senha depois em “Alterar senha”.</div></div>`:''}
  <div id="iv_pwrap"><label>Projetos que esta pessoa vai acessar</label><div class="hint" id="iv_phint" style="margin:0 0 6px"></div><div class="alist" style="max-height:190px;overflow:auto">${S.projects.filter(p=>!p.virtual).map(p=>`<label class="arow"><input type="checkbox" class="iv_p" value="${p.id}"><i class="pd" style="background:${pcol(p)}"></i><span class="an"><b>${esc(p.name)}</b><small>${p.restricted?'Projeto restrito':'Projeto aberto'}</small></span></label>`).join('')||'<div class="hint">Nenhum projeto criado ainda — a pessoa entra vazia e cria os dela.</div>'}</div></div>
  <div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="iv_go">Enviar convite</button></span></div>`;
  const ivSync=()=>{const r=$('#iv_role').value;$('#iv_pwrap').style.display=r==='admin'?'none':'';$('#iv_phint').textContent='A pessoa verá SOMENTE os projetos marcados aqui. Se não marcar nenhum, ela entra sem projeto nenhum e cria os dela do zero (e só ela os vê, além dos administradores).'};
  $('#iv_role').onchange=ivSync;ivSync();
  const md=$('#iv_mode');if(md){const sw=()=>{const man=md.value==='manual';$('#iv_manual').style.display=man?'':'none';$('#iv_go').textContent=man?'Cadastrar pessoa':'Enviar convite'};md.onchange=sw;sw();
    $('#iv_gen').onclick=()=>{const a='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789',r=new Uint32Array(12);crypto.getRandomValues(r);$('#iv_pw').value=[...r].map(x=>a[x%a.length]).join('')}}
  window._ivTeam=teamId||null;$('#ov').classList.add('on');$('#iv_email').focus();
}
function addMember(email,name,r,teamId){
  const em=email.trim();let m=S.members.find(x=>(x.email||'').toLowerCase()===em.toLowerCase());
  if(m)return m;
  const nm=(name||'').trim()||em.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  m={id:uid(),name:nm,email:em,color:COLORS[S.members.length%COLORS.length],status:'invited',cap:40,role:r,team:teamId||null};
  S.members.push(m);return m;
}
function newTeamDialog(){
  if(!can('members')){deny('members');return}
  const M=$('#modal');M.dataset.kind='team';editing=null;closePop();
  M.innerHTML=`<h3>＋ Criar uma nova equipe externa</h3><label style="margin-top:0">Nome da equipe</label><input id="tm_name" placeholder="Ex.: Cliente ACME"><label>Perfil das pessoas da equipe</label><select id="tm_role"><option value="limited">${ROLES.limited.n} — ${ROLES.limited.d}</option><option value="guest">${ROLES.guest.n} — ${ROLES.guest.d}</option></select><label>E-mails (um por linha — opcional)</label><textarea id="tm_mails" rows="4" placeholder="maria@cliente.com&#10;joao@cliente.com"></textarea><div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="tm_go">Criar equipe</button></span></div>`;
  $('#ov').classList.add('on');$('#tm_name').focus();
}
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);let el;
  if(el=g('[data-stab]')){S.setTab=el.dataset.stab;render();return}
  if(g('#bSet')){if(S.view==='settings')backFromSettings();else openSettings();return}
  if(g('[data-sback]')){backFromSettings();return}
  if(g('#bTeam')){openSettings('membros');return}
  if(el=g('[data-setrole]')){if(pop)setRole(pop.id,el.dataset.setrole);return}
  if(el=g('[data-asuser]')){S.me=el.dataset.asuser;closePop();render();toast('Agora você é '+(mem(S.me)||{}).name+' ('+ROLES[role()].n+')');return}
  if(el=g('[data-sdel]')){
    if(!can('members')){deny('members');return}
    const m=mem(el.dataset.sdel);if(!m||!guardM(m)||!onlyAdm())return;
    if(roleOfM(m)==='admin'&&S.members.filter(x=>roleOfM(x)==='admin').length<2){toast('Mantenha pelo menos um administrador.');return}
    removeMemberDialog(m);return}
  if(el=g('[data-act3]')){
    const a=el.dataset.act3;
    if(a==='invite'){inviteMemberDialog();return}
    if(a==='newteam'){newTeamDialog();return}
    if(a==='hub'){openDataHub();return}
    if(a==='expjson'){$('#bExp').click();return}
    if(a==='csv'){$('#bCsv').click();return}
    if(a==='impjson'){$('#bImp').click();return}
    if(a==='xls'){exportXlsx();return}
    if(a==='pdf'){openExportPdf();return}
    if(a==='welcome'){openWelcome();return}
    if(a==='keys'){S.helpTab='atalhos';toggleHelp(true);return}
    if(a==='delproj'){$('#delProj').click();return}
    if(a==='rmex'){const ids=S.tasks.filter(t=>t.pid===proj().id&&/^Exemplo:/.test(t.title)).map(t=>t.id);ask('Remover '+ids.length+' atividade(s) de exemplo deste projeto?','',()=>{ids.forEach(delTask);render();toast('Exemplos removidos')},{confirm:1,ok:'Remover'});return}
  }
  if(el=g('[data-linkrole]')){const k=el.dataset.linkrole,em=S.members.filter(m=>m.email).map(m=>m.email);mailDialog('Convite por link — perfil '+ROLES[k].n,[],'Convite: '+proj().name,`Olá!\n\nVocê foi convidado(a) para colaborar no projeto "${proj().name}" no Controle de Atividades.\n\nSeu perfil será: ${ROLES[k].n} — ${ROLES[k].d}${S.link?'\n\nAcesse o sistema: '+S.link:''}`,()=>{closeModal();render()});return}
  if(el=g('[data-teamdel]')){if(!can('members')){deny('members');return}const t=S.teams.find(x=>x.id===el.dataset.teamdel);ask('Excluir a equipe “'+t.name+'”? As pessoas continuam cadastradas, mas sem equipe.','',()=>{S.members.forEach(m=>{if(m.team===t.id)m.team=null});S.teams=S.teams.filter(x=>x.id!==t.id);render()},{confirm:1,ok:'Excluir'});return}
  if(el=g('[data-pcolor]')){if(!can('project')){deny('project');return}proj().color=el.dataset.pcolor;render();return}
  if(g('#iv_go')){
    const em=$('#iv_email').value.trim();if(!validEmail(em)){toast('Digite um e-mail válido');return}
    const m=addMember(em,$('#iv_name').value,$('#iv_role').value,window._ivTeam);m.role=$('#iv_role').value;
    save();closeModal();render();inviteDialog(m);return}
  if(g('#tm_go')){
    const nm=$('#tm_name').value.trim();if(!nm){toast('Dê um nome à equipe');return}
    const r=$('#tm_role').value,t={id:uid(),name:nm,role:r};S.teams.push(t);
    $('#tm_mails').value.split(/[\n;, ]+/).map(x=>x.trim()).filter(validEmail).forEach(x=>{const m=addMember(x,'',r,t.id);m.team=t.id;m.role=r});
    closeModal();render();toast('Equipe criada');return}
});
document.addEventListener('change',e=>{
  const tg=e.target,c=tg.dataset||{};
  if(c.gme!==undefined){S.me=tg.value;render();return}
  if(c.gtheme!==undefined){S.theme=tg.value;render();return}
  if(c.grole!==undefined){if(!can('members')){deny('members');return}S.defaultRole=tg.value;save();toast('Perfil padrão atualizado');return}
  if(c.teamrole){if(!can('members')){deny('members');return}const t=S.teams.find(x=>x.id===c.teamrole);t.role=tg.value;S.members.forEach(m=>{if(m.team===t.id)m.role=tg.value});render();return}
  if(c.pprop){if(!can('project')){deny('project');return}const k=c.pprop,v=tg.value;if(k==='name'&&!v.trim())return;proj()[k]=k==='name'?v.trim():v;render();return}
});
document.addEventListener('input',e=>{
  const tg=e.target,c=tg.dataset||{};
  if(c.gorg!==undefined){S.org=tg.value;save();$('#brandName').textContent=(S.org||'CS Infra')}
  if(c.glink!==undefined){S.link=tg.value.trim();save()}
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;const t=e.target;
  if(t.dataset&&t.dataset.teamadd){e.preventDefault();const v=t.value.trim();if(!validEmail(v)){toast('Digite um e-mail válido');return}const tm=S.teams.find(x=>x.id===t.dataset.teamadd);const m=addMember(v,'',tm.role,tm.id);m.team=tm.id;m.role=tm.role;t.value='';render()}
  else if(t.id==='iv_email'||t.id==='iv_name'){e.preventDefault();$('#iv_go').click()}
});

/* ====================== NUVEM: SUPABASE (login por convite + sincronização) ====================== */
const SB={url:'https://mnxkfqxixyllbdtjxfkj.supabase.co',key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ueGtmcXhpeHlsbGJkdGp4ZmtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzOTk2NjAsImV4cCI6MjEwODk3NTY2MH0.kYIHOnj2oHd9Km-B3_P5Ds0DRnZvSgXGfdDAUhCOzzc'};
const CLOUD=!!(SB.url&&SB.key);
const cloud={on:false,ready:false,base:null,timer:null,pushing:false,again:false,poll:null,me:null,localCopy:null,mode:'',sig:''};
const SESSK='quire-sb-session',UIK='quire-ui';
let sess=null,refreshing=null;
const sessLoad=()=>{try{sess=JSON.parse(localStorage.getItem(SESSK))}catch(e){sess=null}};
const sessSave=s=>{sess=s;try{s?localStorage.setItem(SESSK,JSON.stringify(s)):localStorage.removeItem(SESSK)}catch(e){}};
const UIKEYS=['theme','hideDone','qf','view','calMonth','gz','seen','helpTab','setTab','dash','smart','cur'];
function saveUI(){try{const o={};UIKEYS.forEach(k=>o[k]=S[k]);localStorage.setItem(UIK,JSON.stringify(o))}catch(e){}}
function loadUI(){try{const o=JSON.parse(localStorage.getItem(UIK))||{};UIKEYS.forEach(k=>{if(o[k]!==undefined)S[k]=o[k]})}catch(e){}}
function trErr(m){
  m=String(m||'');
  if(/invalid login credentials/i.test(m))return 'E-mail ou senha incorretos.';
  if(/email not confirmed/i.test(m))return 'O convite ainda não foi ativado. Use “Recebi um convite”.';
  if(/(token|otp|code|link).*(expired|invalid)|(expired|invalid).*(token|otp|code|link)/i.test(m))return 'Código ou link inválido ou expirado. Peça um novo convite ao administrador.';
  if(/rate limit|too many|security purposes/i.test(m))return 'Muitas tentativas. Aguarde um minuto e tente de novo.';
  if(/signups? not allowed|not authorized|nao autorizado|database error saving new user|user not found/i.test(m))return 'E-mail não autorizado. Peça um convite ao administrador.';
  if(/password should be|at least \d+ char|weak/i.test(m))return 'A senha precisa ter pelo menos 8 caracteres.';
  if(/different from the old|same password/i.test(m))return 'Escolha uma senha diferente da anterior.';
  if(/failed to fetch|networkerror|load failed/i.test(m))return 'Sem conexão com o servidor. Verifique a internet.';
  if(/row-level security|42501|permission denied/i.test(m))return 'Seu perfil não permite esta alteração.';
  if(/foreign key|23503|violates.*constraint.*fkey/i.test(m))return 'Outra pessoa alterou ou excluiu algo ao mesmo tempo. A tela foi atualizada; refaça a ação.';
  if(/duplicate key|23505|already exists/i.test(m))return 'Já existe um registro igual (e-mail ou nome repetido).';
  if(/jwt expired|invalid jwt|JWT/i.test(m))return 'Sessão expirada. Entre novamente.';
  if(/payload too large|413/i.test(m))return 'Arquivo grande demais para enviar de uma vez.';
  return m;
}
async function sbFetch(path,o={}){
  const {method='GET',body,headers={},auth=true,prefer}=o;
  if(auth&&sess&&sess.expires_at&&Date.now()/1000>sess.expires_at-30)await refreshSession();
  const mk=()=>{const h={apikey:SB.key,'Content-Type':'application/json',...headers};h.Authorization='Bearer '+((auth&&sess)?sess.access_token:SB.key);if(prefer)h.Prefer=prefer;return h};
  let r=await fetch(SB.url+path,{method,headers:mk(),body:body===undefined?undefined:JSON.stringify(body)});
  if(r.status===401&&auth&&sess&&await refreshSession())r=await fetch(SB.url+path,{method,headers:mk(),body:body===undefined?undefined:JSON.stringify(body)});
  const txt=await r.text();let data=null;try{data=txt?JSON.parse(txt):null}catch(e){data=txt}
  if(!r.ok){const e=new Error((data&&(data.msg||data.message||data.error_description||data.error||data.hint))||('HTTP '+r.status));e.status=r.status;e.data=data;e.code=data&&data.code;throw e}
  return data;
}
async function refreshSession(){
  if(!sess||!sess.refresh_token)return false;
  if(refreshing)return refreshing;
  refreshing=(async()=>{
    try{
      const r=await fetch(SB.url+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{apikey:SB.key,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:sess.refresh_token})});
      const d=await r.json();if(!r.ok||!d.access_token){sessSave(null);return false}
      sessSave(normSess(d,sess.user));return true;
    }catch(e){return false}finally{refreshing=null}
  })();
  return refreshing;
}
const normSess=(d,u)=>({access_token:d.access_token,refresh_token:d.refresh_token,expires_at:d.expires_at||Math.floor(Date.now()/1000)+(d.expires_in||3600),user:d.user||u||null});
const authLogin=async(email,password)=>sessSave(normSess(await sbFetch('/auth/v1/token?grant_type=password',{method:'POST',auth:false,body:{email,password}})));
const authVerify=async b=>sessSave(normSess(await sbFetch('/auth/v1/verify',{method:'POST',auth:false,body:b})));
const authSetPassword=pw=>sbFetch('/auth/v1/user',{method:'PUT',body:{password:pw}});
const authRecover=email=>sbFetch('/auth/v1/recover',{method:'POST',auth:false,body:{email}});

/* ----- tela de login ----- */
function loginShow(on){$('#login').style.display=on?'flex':'none'}
function loginView(mode,msg,pre){
  cloud.mode=mode;pre=pre||{};
  const inp=(id,label,type,ph,val,ac)=>`<div class="fld"><label for="${id}">${label}</label><div class="fin"><input id="${id}" type="${type||'text'}" placeholder="${ph||''}" value="${esc(val||'')}" autocomplete="${ac||'off'}" spellcheck="false">${type==='password'?'<button type="button" class="eye" data-eye="'+id+'" tabindex="-1" aria-label="Mostrar senha">👁</button>':''}</div></div>`;
  const back='<div class="llinks"><a data-lmode="signin">← Voltar para entrar</a></div>';
  let b='';
  if(mode==='signin')b=`<h2>Bem-vindo(a) de volta</h2><p class="lsub">Entre com seu e-mail e senha para acessar o painel.</p>${inp('lg_email','E-mail','email','voce@empresa.com.br',pre.email,'username')}${inp('lg_pw','Senha','password','',''  ,'current-password')}<button class="pri lbtn" id="lg_go">Entrar</button><div class="llinks"><a data-lmode="activate">Recebi um convite</a><a data-lmode="forgot">Esqueci minha senha</a></div>`;
  else if(mode==='activate')b=`<h2>Ativar convite</h2><div class="hint">Se o e-mail trouxe um botão ou link, basta clicar nele. Se trouxe um código, preencha abaixo.</div>${inp('lg_email','E-mail do convite','email','voce@empresa.com.br',pre.email,'username')}${inp('lg_code','Código recebido por e-mail','text','código do e-mail','', 'one-time-code')}${inp('lg_pw','Crie uma senha (mín. 8 caracteres)','password','','','new-password')}${inp('lg_pw2','Repita a senha','password','','','new-password')}<button class="pri lbtn" id="lg_act">Ativar e entrar</button>${back}`;
  else if(mode==='setpw')b=`<input type="text" class="uhide" name="username" autocomplete="username" tabindex="-1" aria-hidden="true" value="${esc(pre.email||'')}"><h2>${pre.recovery?'Nova senha':'Bem-vindo(a)! Crie sua senha'}</h2><div class="hint" >${pre.email?'Conta: <b>'+esc(pre.email)+'</b>':''}</div>${inp('lg_pw','Nova senha (mín. 8 caracteres)','password','','','new-password')}${inp('lg_pw2','Repita a senha','password','','','new-password')}<button class="pri lbtn" id="lg_setpw">Salvar e entrar</button>`;
  else if(mode==='forgot')b=`<h2>Esqueci minha senha</h2><div class="hint" >Enviaremos um e-mail com um link (e um código) para criar uma nova senha.</div>${inp('lg_email','E-mail','email','voce@empresa.com.br',pre.email,'username')}<button class="pri lbtn" id="lg_forgot">Enviar e-mail</button><div class="llinks"><a data-lmode="reset">Já tenho o código</a></div>${back}`;
  else if(mode==='reset')b=`<h2>Redefinir senha</h2>${inp('lg_email','E-mail','email','voce@empresa.com.br',pre.email,'username')}${inp('lg_code','Código recebido por e-mail','text','código do e-mail','','one-time-code')}${inp('lg_pw','Nova senha (mín. 8 caracteres)','password','','','new-password')}${inp('lg_pw2','Repita a senha','password','','','new-password')}<button class="pri lbtn" id="lg_reset">Salvar e entrar</button>${back}`;
  else if(mode==='noaccess')b=`<h2>Sem acesso</h2><div class="hint">Sua conta existe, mas não está autorizada neste sistema (ou foi bloqueada). Fale com o administrador.</div><button class="lbtn" data-cloud="out">Sair</button>`;
  else b=`<h2>Carregando…</h2><div class="hint">Conectando ao banco de dados.</div>`;
  $('#login .lbox').innerHTML=`<img class="lfull" src="assets/logo-full.png" alt="CS Infra"><div class="lmob"><img src="assets/logo-full.png" alt="CS Infra" height="40"></div>${b}<div id="lmsg" class="lmsg" role="alert">${msg?esc(msg):''}</div><div class="lfoot">🔒 Acesso restrito a pessoas convidadas · CS Infra</div>`;
  loginShow(true);
  const f=$('#login input');if(f)setTimeout(()=>{const ae=document.activeElement;if(!(ae&&ae.closest&&ae.closest('#login .lbox input')))f.focus()},30);
}
const lmsg=(m,ok)=>{const e=$('#lmsg');if(e){e.textContent=m||'';e.className='lmsg'+(ok?' ok':'')}};
const lval=id=>($('#'+id)||{value:''}).value.trim();
function checkPw(){const a=($('#lg_pw')||{}).value||'',b=($('#lg_pw2')||{value:a}).value;if(a.length<8){lmsg('A senha precisa ter pelo menos 8 caracteres.');return null}if(a!==b){lmsg('As senhas não conferem.');return null}return a}
async function lbusy(fn){const bt=document.querySelector('#login .lbtn');if(bt){bt.disabled=true;bt.classList.add('busy')}lmsg('');try{await fn()}catch(e){lmsg(trErr(e.message))}finally{if(bt){bt.disabled=false;bt.classList.remove('busy')}}}
const loginActions={
  lg_go:()=>lbusy(async()=>{const em=lval('lg_email'),pw=$('#lg_pw').value;if(!em||!pw){lmsg('Informe e-mail e senha.');return}await authLogin(em,pw);await enterApp()}),
  lg_act:()=>lbusy(async()=>{const em=lval('lg_email'),code=lval('lg_code');if(!em||!code){lmsg('Informe o e-mail e o código do convite.');return}const pw=checkPw();if(!pw)return;await authVerify({type:'invite',email:em,token:code});await authSetPassword(pw);await enterApp()}),
  lg_setpw:()=>lbusy(async()=>{const pw=checkPw();if(!pw)return;await authSetPassword(pw);await enterApp()}),
  lg_forgot:()=>lbusy(async()=>{const em=lval('lg_email');if(!em){lmsg('Informe seu e-mail.');return}await authRecover(em);loginView('reset','Se o e-mail estiver cadastrado, você receberá o link e o código em instantes.',{email:em});const m=$('#lmsg');if(m)m.className='lmsg ok'}),
  lg_reset:()=>lbusy(async()=>{const em=lval('lg_email'),code=lval('lg_code');if(!em||!code){lmsg('Informe o e-mail e o código.');return}const pw=checkPw();if(!pw)return;await authVerify({type:'recovery',email:em,token:code});await authSetPassword(pw);await enterApp()}),
};
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);let el;
  if(el=g('#login [data-eye]')){const i=$('#'+el.dataset.eye);if(i){const sh=i.type==='password';i.type=sh?'text':'password';el.classList.toggle('on',sh);el.setAttribute('aria-label',sh?'Ocultar senha':'Mostrar senha')}return}
  if(el=g('#login [data-lmode]')){loginView(el.dataset.lmode,'',{email:lval('lg_email')});return}
  for(const k in loginActions){if(g('#'+k)){loginActions[k]();return}}
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter'||!e.target.closest||!e.target.closest('#login'))return;
  const m={signin:'lg_go',activate:'lg_act',setpw:'lg_setpw',forgot:'lg_forgot',reset:'lg_reset'}[cloud.mode];
  if(m){e.preventDefault();loginActions[m]()}
},true);

/* ----- arranque ----- */
async function cloudBoot(){
  try{cloud.localCopy=localStorage.getItem(KEY)}catch(e){}
  loadUI();sessLoad();loginShow(true);loginView('loading');
  const q=new URLSearchParams(location.search),hp=new URLSearchParams((location.hash||'').replace(/^#/,''));
  try{
    if(q.get('token_hash')&&q.get('type')){
      const type=q.get('type'),em=q.get('email')||'';
      history.replaceState(null,'',location.pathname);
      const th=q.get('token_hash');let ok=false,lastE=null;
      for(const ty of (type==='recovery'?['recovery']:[type,'signup','email'])){
        try{await authVerify({type:ty,token_hash:th});ok=true;break}catch(e){lastE=e;if(e.status&&e.status!==403&&e.status!==400&&e.status!==422)break}
      }
      if(!ok){
        const rec=type==='recovery';
        loginView(rec?'forgot':'activate','Este link já foi usado ou expirou (links de e-mail valem uma vez só). '+(rec?'Peça um novo código abaixo.':'Peça ao administrador para reenviar o convite, ou use o código do e-mail.'),{email:em});return;
      }
      let u=null;try{u=await sbFetch('/auth/v1/user')}catch(e){}
      loginView('setpw','',{email:(u&&u.email)||em,recovery:type==='recovery'});return;
    }
    if(hp.get('access_token')){
      const type=hp.get('type');history.replaceState(null,'',location.pathname+location.search);
      sessSave({access_token:hp.get('access_token'),refresh_token:hp.get('refresh_token'),expires_at:+hp.get('expires_at')||Math.floor(Date.now()/1000)+(+hp.get('expires_in')||3600),user:null});
      let u=null;try{u=await sbFetch('/auth/v1/user')}catch(e){}
      if(type==='invite'||type==='recovery'){loginView('setpw','',{email:u&&u.email,recovery:type==='recovery'});return}
      await enterApp();return;
    }
    if(hp.get('error_description')){history.replaceState(null,'',location.pathname);loginView('signin',trErr(hp.get('error_description').replace(/\+/g,' ')));return}
    if(sess){
      if(sess.expires_at&&Date.now()/1000>sess.expires_at-30&&!(await refreshSession())){loginView('signin','Sua sessão expirou. Entre novamente.');return}
      await enterApp();return;
    }
    loginView('signin');
  }catch(e){loginView('signin',trErr(e.message))}
}
async function enterApp(){
  loginView('loading');
  let me=null;
  try{me=await sbFetch('/rest/v1/rpc/activate_me',{method:'POST',body:{}})}
  catch(e){if(e.status===401||e.status===403){sessSave(null);loginView('signin','Sessão inválida. Entre novamente.');return}throw e}
  if(!me||!me.id){loginView('noaccess');return}
  cloud.me=me;
  await pullAll(true);
  cloud.on=true;cloud.ready=true;
  loginShow(false);setSync('ok');
  if(ROUTER_ON&&!/^\/(index\.html)?$/.test(location.pathname)&&!new URLSearchParams(location.search).get('task'))applyRoute(location.pathname,true);else render();
  if(cloud.poll)clearInterval(cloud.poll);
  const tq=new URLSearchParams(location.search).get('task');if(tq){history.replaceState(null,'',location.pathname);if(byId(tq))setTimeout(()=>goTask(tq),300)}
  cloud.poll=setInterval(pollPull,6000);
  if(!cloud.vis){cloud.vis=1;document.addEventListener('visibilitychange',()=>{if(!document.hidden)pollPull(true)});window.addEventListener('focus',()=>{if(cloud.on&&Date.now()-(cloud.last||0)>3000)pollPull(true)})}
  maybeOfferMigration();
  if(!S.seen)setTimeout(openWelcome,400);
}

/* ----- leitura (banco → sistema) ----- */
async function getAll(t,order){
  let out=[],off=0;
  for(;;){const r=await sbFetch(`/rest/v1/${t}?select=*&order=${order}.asc&limit=1000&offset=${off}`);out=out.concat(r||[]);if(!r||r.length<1000)break;off+=1000}
  return out;
}
const T0=s=>s?Date.parse(s):null;
function applyRows(R){
  const open={};S.tasks.forEach(t=>open[t.id]=t.open);
  const uidMem={};
  S.members=R.members.map(r=>{if(r.user_id)uidMem[r.user_id]=r.id;return{id:r.id,name:r.name,email:r.email||'',color:r.color||'#5b8cff',cap:+r.capacity||40,role:r.role,status:r.status,access:!!r.access_enabled,only:!!r.projects_only,team:r.team_id||null,uid:r.user_id||null,last:r.last_login_at||null}});
  S.teams=R.teams.map(r=>({id:r.id,name:r.name,role:r.role}));
  S.tags=R.tags.map(r=>({id:r.id,name:r.name,color:r.color}));
  const PA=new Map();(R.pacc||[]).forEach(r=>{if(!PA.has(r.project_id))PA.set(r.project_id,[]);PA.get(r.project_id).push(r.member_id)});
  S.projects=R.projects.map(r=>({id:r.id,name:r.name,desc:r.description||'',color:r.color||'',start:r.start_date||'',end:r.end_date||'',_pos:+r.position,restricted:!!r.restricted,access:(PA.get(r.id)||[]).sort()}));
  const by=(rows,k,v)=>{const m=new Map();rows.forEach(r=>{if(!m.has(r[k]))m.set(r[k],[]);m.get(r[k]).push(v?r[v]:r)});return m};
  const A=by(R.asg,'task_id','member_id'),TG=by(R.ttag,'task_id','tag_id'),D=by(R.dep,'task_id','depends_on_id'),C=by(R.cmt,'task_id');
  const stars=new Set(R.stars.map(r=>r.task_id));
  S.tasks=R.tasks.map(r=>({id:r.id,pid:r.project_id,parent:r.parent_id||null,title:r.title,desc:r.description||'',imgs:Array.isArray(r.attachments)?r.attachments:[],status:r.status,prio:r.priority,start:r.start_date||'',startTime:r.start_time||'',due:r.due_date||'',dueTime:r.due_time||'',
    repeat:r.repeat_freq?{freq:r.repeat_freq,every:r.repeat_every||1}:null,assignees:A.get(r.id)||[],tags:TG.get(r.id)||[],open:open[r.id]!==false,created:T0(r.created_at)||Date.now(),
    doneAt:T0(r.done_at),doneLog:(r.done_log||[]).map(T0),comments:(C.get(r.id)||[]).sort((a,b)=>a.created_at<b.created_at?-1:1).map(c=>({id:c.id,text:c.body,ts:T0(c.created_at),by:c.author_name||''})),
    by:uidMem[r.created_by]||'',sec:!!r.is_section,ms:!!r.is_milestone,star:stars.has(r.id),est:+r.estimate_h||0,spent:+r.spent_h||0,timerStart:T0(r.timer_started_at),deps:D.get(r.id)||[],_pos:+r.position}));
  const w=R.ws[0];if(w){S.org=w.org_name;S.link=w.system_link||'';S.defaultRole=w.default_role;S.rules=w.rules||{}}
  const my=S.members.find(m=>m.uid===(sess&&sess.user&&sess.user.id))||S.members.find(m=>m.id===(cloud.me&&cloud.me.id));
  S.me=my?my.id:'';
  if(!S.projects.length)S.projects=[{id:'__v',name:'Sem projetos ainda',virtual:true}];
  if(!S.projects.some(p=>p.id===S.cur))S.cur=S.projects[0].id;
  defaults(S);
}
async function pullAll(first,force){
  const rev0=cloud.rev||0;
  const [members,teams,tags,projects,tasks,asg,ttag,dep,cmt,stars,ws,pacc]=await Promise.all([getAll('members','created_at'),getAll('teams','created_at'),getAll('tags','name'),getAll('projects','position'),getAll('tasks','position'),getAll('task_assignees','task_id'),getAll('task_tags','task_id'),getAll('task_deps','task_id'),getAll('comments','created_at'),getAll('task_stars','task_id'),getAll('workspace','id'),getAll('project_access','created_at').catch(()=>[])]);
  if(!first&&!force&&((cloud.rev||0)!==rev0||cloud.timer||cloud.pushing))return false; // houve edição local durante a busca: descarta para não sobrescrever
  applyRows({members,teams,tags,projects,tasks,asg,ttag,dep,cmt,stars,ws,pacc});
  const rows=dbRows();const sig=sigOf(rows);
  const changed=first||sig!==cloud.sig;
  cloud.base=cloneRows(rows);cloud.sig=sig;
  return changed;
}
function busyUI(){return $('#ov').classList.contains('on')||(pop!==null)||adding||document.activeElement&&/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)&&!['q','qa'].includes(document.activeElement.id)}
async function pollPull(force){
  if(!cloud.ready||!cloud.on||cloud.pushing||cloud.timer||(document.hidden&&!force)||cloud.pulling)return;
  cloud.pulling=true;
  try{
    const ch=await pullAll(false);cloud.last=Date.now();setSync('ok');
    if(ch){if(busyUI())cloud.stale=true;else{cloud.stale=false;render()}}
  }catch(e){setSync('err')}finally{cloud.pulling=false}
}

/* ----- posições (ordem) sem reescrever a lista inteira ----- */
function assignPos(arr){
  const n=arr.length;if(!n)return;
  const val=arr.map(x=>typeof x._pos==='number'&&isFinite(x._pos)?x._pos:null);
  const tails=[],prev=new Array(n).fill(-1);
  for(let i=0;i<n;i++){if(val[i]===null)continue;let lo=0,hi=tails.length;while(lo<hi){const m=(lo+hi)>>1;if(val[tails[m]]<val[i])lo=m+1;else hi=m}if(lo>0)prev[i]=tails[lo-1];tails[lo]=i}
  const keep=new Set();let k=tails.length?tails[tails.length-1]:-1;while(k>=0){keep.add(k);k=prev[k]}
  let lastPos=null,i=0;
  while(i<n){
    if(keep.has(i)){lastPos=val[i];i++;continue}
    let j=i;while(j<n&&!keep.has(j))j++;
    const hi=j<n?val[j]:null,lo=lastPos,cnt=j-i;
    for(let q=0;q<cnt;q++){arr[i+q]._pos=(lo===null&&hi===null)?(q+1)*1000:hi===null?lo+(q+1)*1000:lo===null?hi-(cnt-q)*1000:lo+(hi-lo)*(q+1)/(cnt+1)}
    i=j;
  }
  for(let q=1;q<n;q++){if(!(arr[q]._pos>arr[q-1]._pos)){arr.forEach((x,z)=>x._pos=(z+1)*1000);break}}
}

/* ----- escrita (sistema → banco), só o que mudou ----- */
const iso=ms=>ms?new Date(ms).toISOString():null;
function dbRows(){
  const P=S.projects.filter(p=>!p.virtual);assignPos(P);assignPos(S.tasks);
  const R={teams:new Map(),members:new Map(),tags:new Map(),projects:new Map(),tasks:new Map(),comments:new Map(),asg:new Map(),ttag:new Map(),dep:new Map(),stars:new Set(),pacc:new Map(),ws:null};
  S.teams.forEach(t=>R.teams.set(t.id,{id:t.id,name:t.name,role:t.role}));
  S.members.forEach(m=>R.members.set(m.id,{id:m.id,name:m.name,email:m.email||null,color:m.color,capacity:m.cap||40,role:m.role||'normal',status:m.status||'active',access_enabled:!!m.access,projects_only:!!m.only,team_id:m.team||null}));
  S.tags.forEach(t=>R.tags.set(t.id,{id:t.id,name:t.name,color:t.color}));
  P.forEach(p=>R.projects.set(p.id,{id:p.id,name:p.name,description:p.desc||'',color:p.color||null,start_date:p.start||null,end_date:p.end||null,position:p._pos,restricted:!!p.restricted}));
  P.forEach(p=>R.pacc.set(p.id,[...new Set(p.access||[])].sort()));
  S.tasks.forEach(t=>{
    R.tasks.set(t.id,{id:t.id,project_id:t.pid,parent_id:t.parent||null,title:t.title,description:t.desc||'',attachments:t.imgs||[],status:t.status,priority:t.prio,start_date:t.start||null,start_time:t.startTime||null,due_date:t.due||null,due_time:t.dueTime||null,repeat_freq:t.repeat?t.repeat.freq:null,repeat_every:t.repeat?t.repeat.every:null,estimate_h:t.est||0,spent_h:t.spent||0,timer_started_at:iso(t.timerStart),is_section:!!t.sec,is_milestone:!!t.ms,position:t._pos,done_at:iso(t.doneAt),done_log:(t.doneLog||[]).map(iso)});
    R.asg.set(t.id,[...(t.assignees||[])].sort());R.ttag.set(t.id,[...(t.tags||[])].sort());R.dep.set(t.id,[...(t.deps||[])].sort());
    (t.comments||[]).forEach(c=>R.comments.set(c.id,{id:c.id,task_id:t.id,author_name:c.by||'',body:c.text}));
    if(t.star)R.stars.add(t.id);
  });
  R.ws={org_name:S.org||'CS Infra',system_link:S.link||'',default_role:S.defaultRole||'normal',rules:S.rules||{}};
  return R;
}
const sigOf=R=>JSON.stringify([...R.teams],0)+JSON.stringify([...R.members])+JSON.stringify([...R.tags])+JSON.stringify([...R.projects])+JSON.stringify([...R.tasks])+JSON.stringify([...R.comments])+JSON.stringify([...R.asg])+JSON.stringify([...R.ttag])+JSON.stringify([...R.dep])+JSON.stringify([...R.stars].sort())+JSON.stringify([...R.pacc])+JSON.stringify(R.ws);
const cloneRows=R=>{const c=JSON.parse(JSON.stringify({teams:[...R.teams],members:[...R.members],tags:[...R.tags],projects:[...R.projects],tasks:[...R.tasks],comments:[...R.comments],asg:[...R.asg],ttag:[...R.ttag],dep:[...R.dep],stars:[...R.stars],pacc:[...R.pacc],ws:R.ws}));return{teams:new Map(c.teams),members:new Map(c.members),tags:new Map(c.tags),projects:new Map(c.projects),tasks:new Map(c.tasks),comments:new Map(c.comments),asg:new Map(c.asg),ttag:new Map(c.ttag),dep:new Map(c.dep),stars:new Set(c.stars),pacc:new Map(c.pacc),ws:c.ws}};
const chunk=(a,n)=>{const o=[];for(let i=0;i<a.length;i+=n)o.push(a.slice(i,i+n));return o};
const inList=ids=>'in.('+ids.join(',')+')';
let denied=false;
async function syncTable(t,cur,base){
  const ins=[],patches=new Map();
  cur.forEach((row,id)=>{
    const b=base.get(id);
    if(!b){ins.push(row);return}
    const ch={};let any=false;for(const k in row){if(JSON.stringify(row[k])!==JSON.stringify(b[k])){ch[k]=row[k];any=true}}
    if(any){const key=JSON.stringify(ch);if(!patches.has(key))patches.set(key,{ch,ids:[]});patches.get(key).ids.push(id)}
  });
  for(const c of chunk(ins,200))await sbFetch(`/rest/v1/${t}`,{method:'POST',body:c,prefer:'return=minimal'});
  for(const {ch,ids} of patches.values()){
    for(const c of chunk(ids,100)){const r=await sbFetch(`/rest/v1/${t}?id=${inList(c)}`,{method:'PATCH',body:ch,prefer:'return=representation'});if(!r||r.length<c.length)denied=true}
  }
}
async function delRows(t,ids){for(const c of chunk(ids,100)){const r=await sbFetch(`/rest/v1/${t}?id=${inList(c)}`,{method:'DELETE',prefer:'return=representation'});if(!r||r.length<c.length)denied=true}}
async function syncLinks(t,cur,base,col,tasksCur,key='task_id'){
  const ch=[];cur.forEach((arr,id)=>{if(!tasksCur.has(id))return;const b=base.get(id)||[];if(JSON.stringify(arr)!==JSON.stringify(b))ch.push(id)});
  if(!ch.length)return;
  if(t==='project_access'&&!isAdm()){
    /* perfil Normal só INCLUI pessoas em projetos (não apaga acessos existentes) */
    const rows=[];ch.forEach(id=>{const b=new Set(base.get(id)||[]);cur.get(id).forEach(v=>{if(!b.has(v))rows.push({[key]:id,[col]:v})})});
    for(const r of chunk(rows,300))await sbFetch(`/rest/v1/${t}`,{method:'POST',body:r,prefer:'return=minimal'});
    return;
  }
  for(const c of chunk(ch,100)){
    if(c.some(id=>(base.get(id)||[]).length))await sbFetch(`/rest/v1/${t}?${key}=${inList(c)}`,{method:'DELETE',prefer:'return=minimal'});
    const rows=[];c.forEach(id=>cur.get(id).forEach(v=>rows.push({[key]:id,[col]:v})));
    for(const r of chunk(rows,300))await sbFetch(`/rest/v1/${t}`,{method:'POST',body:r,prefer:'return=minimal'});
  }
}
function cloudSchedule(){
  if(!CLOUD||!cloud.ready)return;
  cloud.rev=(cloud.rev||0)+1;
  setSync('busy');clearTimeout(cloud.timer);cloud.timer=setTimeout(()=>{cloud.timer=null;pushNow()},700);
}
async function pushNow(){
  if(!cloud.ready||!cloud.on)return;
  if(cloud.pushing){cloud.again=true;return}
  cloud.pushing=true;denied=false;
  try{
    const vp=S.projects.find(p=>p.virtual);
    if(vp&&S.tasks.some(t=>t.pid===vp.id)){const nid=uid();S.tasks.forEach(t=>{if(t.pid===vp.id)t.pid=nid});if(S.cur===vp.id)S.cur=nid;vp.id=nid;vp.virtual=false;vp.name='Meu primeiro projeto';render()}
    if(S.projects.length>1)S.projects=S.projects.filter(p=>!p.virtual);
    const cur=dbRows(),b=cloud.base;
    if(sigOf(cur)===cloud.sig){setSync('ok');return}
    await syncTable('teams',cur.teams,b.teams);
    await syncTable('members',cur.members,b.members);
    await syncTable('tags',cur.tags,b.tags);
    await syncTable('projects',cur.projects,b.projects);
    if(JSON.stringify(cur.ws)!==JSON.stringify(b.ws))await sbFetch('/rest/v1/workspace?id=eq.1',{method:'PATCH',body:cur.ws,prefer:'return=minimal'});
    await syncLinks('project_access',cur.pacc,b.pacc,'member_id',cur.projects,'project_id');
    await syncTable('tasks',cur.tasks,b.tasks);
    await syncLinks('task_assignees',cur.asg,b.asg,'member_id',cur.tasks);
    await syncLinks('task_tags',cur.ttag,b.ttag,'tag_id',cur.tasks);
    await syncLinks('task_deps',cur.dep,b.dep,'depends_on_id',cur.tasks);
    const cIns=[...cur.comments.values()].filter(c=>!b.comments.has(c.id));
    for(const c of chunk(cIns,200))await sbFetch('/rest/v1/comments',{method:'POST',body:c,prefer:'return=minimal'});
    const cDel=[...b.comments.keys()].filter(id=>!cur.comments.has(id));if(cDel.length)await delRows('comments',cDel);
    const sAdd=[...cur.stars].filter(x=>!b.stars.has(x)),sDel=[...b.stars].filter(x=>!cur.stars.has(x)&&cur.tasks.has(x));
    for(const c of chunk(sAdd,300))await sbFetch('/rest/v1/task_stars',{method:'POST',body:c.map(task_id=>({task_id})),prefer:'return=minimal'});
    for(const c of chunk(sDel,100))await sbFetch(`/rest/v1/task_stars?task_id=${inList(c)}`,{method:'DELETE',prefer:'return=minimal'});
    const dT=[...b.tasks.keys()].filter(id=>!cur.tasks.has(id));if(dT.length)await delRows('tasks',dT);
    const dP=[...b.projects.keys()].filter(id=>!cur.projects.has(id));if(dP.length)await delRows('projects',dP);
    const dG=[...b.tags.keys()].filter(id=>!cur.tags.has(id));if(dG.length)await delRows('tags',dG);
    const dM=[...b.members.keys()].filter(id=>!cur.members.has(id));if(dM.length)await delRows('members',dM);
    const dTm=[...b.teams.keys()].filter(id=>!cur.teams.has(id));if(dTm.length)await delRows('teams',dTm);
    if(denied)throw Object.assign(new Error('42501'),{denied:true});
    cloud.base=cloneRows(cur);cloud.sig=sigOf(cur);setSync('ok');
    setTimeout(()=>pollPull(),1500);
  }catch(e){
    setSync('err');
    const net=!e.denied&&(e.name==='TypeError'||/failed to fetch|networkerror|load failed|conex/i.test(e.message||''));
    if(net){toast('⚠ Sem conexão. Suas alterações serão enviadas assim que a internet voltar.');clearTimeout(cloud.retry);cloud.retry=setTimeout(()=>{cloud.retry=null;cloud.again=false;pushNow()},6000)}
    else if(e.status===401||/jwt/i.test(e.message||'')){if(!(await refreshSession())){sessSave(null);cloud.on=false;cloud.ready=false;loginView('signin','Sua sessão expirou. Entre novamente.')}else cloud.retry=setTimeout(pushNow,500)}
    else{
      toast('⚠ '+(e.denied?'Algumas alterações não foram aceitas pelo seu perfil e foram desfeitas.':trErr(e.message)));
      try{await pullAll(false,true);render();setSync('ok')}catch(x){}
    }
  }finally{
    cloud.pushing=false;
    if(cloud.again){cloud.again=false;cloudSchedule()}
  }
}
function setSync(st){
  document.body.dataset.sync=st||'ok';
  const e=$('#syncst');if(!e)return;
  e.textContent=st==='err'?'Sem sincronizar — tentando de novo':'';
}

/* ----- migração dos dados locais (1ª vez) ----- */
function maybeOfferMigration(){
  if(!cloud.localCopy||localStorage.getItem('quire-migrated'))return;
  let L;try{L=migrate(JSON.parse(cloud.localCopy))}catch(e){return}
  if(!L||!L.tasks||!L.tasks.length)return;
  if(S.projects.some(p=>!p.virtual)||role()!=='admin')return;
  ask(`Encontrei neste navegador ${L.tasks.length} atividade(s) em ${L.projects.length} projeto(s). Enviar esses dados para o banco de dados (visível para toda a equipe)?`,'',()=>{migrateLocal(L)},{confirm:1,ok:'Enviar para o banco',back:()=>{localStorage.setItem('quire-migrated','1');closeModal()}});
}
function migrateLocal(L){
  const myEm=((S.members.find(m=>m.id===S.me)||{}).email||'').toLowerCase(),map={};
  const mem0=S.members.slice();
  L.members.forEach(m=>{const mine=myEm&&(m.email||'').toLowerCase()===myEm;if(mine)map[m.id]=S.me;else{const nm={id:uid(),name:m.name,email:m.email||'',color:m.color,cap:m.cap||40,role:'normal',status:'active',access:false,team:null};map[m.id]=nm.id;mem0.push(nm)}});
  S.members=mem0;
  S.tags=L.tags;S.projects=L.projects.map(p=>({...p,_pos:undefined}));
  S.tasks=L.tasks.map(t=>({...t,assignees:(t.assignees||[]).map(a=>map[a]).filter(Boolean),by:'',_pos:undefined,star:!!t.star}));
  if(L.org)S.org=L.org;
  S.cur=S.projects[0].id;
  try{localStorage.setItem('quire-local-backup',cloud.localCopy);localStorage.removeItem(KEY);localStorage.setItem('quire-migrated','1')}catch(e){}
  closeModal();render();toast('Enviando dados para o banco…');
}

/* ----- conta, convites e membros (modo nuvem) ----- */
const fnCall=body=>sbFetch('/functions/v1/invite-user',{method:'POST',body});
const fnMissing=e=>e.status===404||/not found|failed to fetch|load failed/i.test(e.message||'');
async function cloudInvite(email,name,role,teamId,pids){
  try{
    const r=await fnCall({action:'invite',email,name,role,team_id:teamId||null,...(pids?{projects_only:role!=='admin',project_ids:pids}:{})});
    await pullAll(false,true);render();return{ok:true,msg:(r&&r.message)||('Convite enviado para '+email)};
  }catch(e){
    if(fnMissing(e)){
      if(!S.members.some(m=>(m.email||'').toLowerCase()===email.toLowerCase()))S.members.push({id:uid(),name:name||email.split('@')[0],email,color:COLORS[S.members.length%COLORS.length],cap:40,role,status:'invited',access:true,team:teamId||null});
      else{const m=S.members.find(x=>(x.email||'').toLowerCase()===email.toLowerCase());m.access=true;m.status='invited';m.role=role}
      cloudSchedule();render();return{ok:false,fallback:true};
    }
    return{ok:false,msg:trErr(e.message)};
  }
}
function manualResult(res,email,pw){
  const M=$('#modal');M.dataset.kind='invres';editing=null;closePop();
  if(res.ok)M.innerHTML=`<h3>✔ Pessoa cadastrada</h3><div class="hint" style="line-height:1.6">Nenhum e-mail foi enviado. Passe estes dados para a pessoa:<br><br>Endereço: <b>${esc(location.origin)}</b><br>E-mail: <b>${esc(email)}</b><br>Senha provisória: <b style="letter-spacing:1px">${esc(pw)}</b><br><br>Esta senha só aparece agora. Se perder, é só remover o cadastro e cadastrar de novo, ou a pessoa usar “Esqueci minha senha”.</div><div class="acts"><button id="cp_cred">Copiar dados</button><button class="pri" id="g_ok">Ok</button></div>`;
  else M.innerHTML=`<h3>Não foi possível cadastrar</h3><div class="hint" style="color:var(--red)">${esc(res.msg||'Erro desconhecido')}</div><div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
  const cp=$('#cp_cred');if(cp)cp.onclick=async()=>{const t=`Acesso ao Controle de Atividades — CS Infra\nEndereço: ${location.origin}\nE-mail: ${email}\nSenha provisória: ${pw}`;try{await navigator.clipboard.writeText(t);toast('Dados copiados')}catch(e){toast(t)}};
}
function inviteResult(res,email){
  const M=$('#modal');M.dataset.kind='invres';editing=null;closePop();
  if(res.ok)M.innerHTML=`<h3>✔ Convite enviado</h3><div class="hint">${esc(res.msg)}. A pessoa receberá o e-mail com o link (e o código) para criar a senha.</div><div class="acts"><span></span><button class="pri" id="g_ok">Ok</button></div>`;
  else if(res.fallback)M.innerHTML=`<h3>Pessoa autorizada — falta enviar o convite</h3><div class="hint" style="line-height:1.6"><b>${esc(email)}</b> já está autorizada no sistema, mas o e-mail do convite ainda não saiu porque a função <code>invite-user</code> não está publicada no Supabase.<br><br><b>Opção 1 (recomendada, 1 minuto):</b> publique a função (Supabase → Edge Functions → Deploy a new function → <code>invite-user</code> → cole o arquivo <code>index.ts</code> do guia). Depois use <b>Reenviar convite</b> neste cartão.<br><b>Opção 2 (agora):</b> Supabase → Authentication → Users → <b>Invite user</b> → <code>${esc(email)}</code>.</div><div class="acts"><button id="cp_mail">Copiar e-mail</button><button class="pri" id="g_ok">Entendi</button></div>`;
  else M.innerHTML=`<h3>Não foi possível convidar</h3><div class="hint" style="color:var(--red)">${esc(res.msg||'Erro desconhecido')}</div><div class="acts"><span></span><button class="pri" id="g_ok">Fechar</button></div>`;
  $('#ov').classList.add('on');
  const cp=$('#cp_mail');if(cp)cp.onclick=async()=>{try{await navigator.clipboard.writeText(email);toast('E-mail copiado')}catch(e){toast(email)}};
}
function memberCardCloud(m,adm0){
  const r=roleOfM(m),you=S.me===m.id,adm=adm0&&canManage(m);
  const st=!m.access?['sem acesso ao sistema','var(--mu)']:m.status==='blocked'?['⛔ bloqueado','var(--red)']:m.status==='invited'?['⏳ convite pendente','var(--amb)']:['✔ ativo','var(--ok)'];
  const last=m.last?new Date(m.last).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'}):'';
  return `<div class="mcard"><span class="avl" style="background:${m.color}">${esc(ini(m.name))}</span>
   <div class="mi">
    ${adm?`<input class="mn" data-mn="${m.id}" value="${esc(m.name)}" placeholder="Nome">`:`<div class="mn"><b>${esc(m.name)}</b></div>`}
    ${adm?`<input class="me" data-me="${m.id}" value="${esc(m.email||'')}" placeholder="e-mail" ${m.access?'disabled title="O e-mail de quem tem acesso não pode ser alterado"':''}>`:`<div class="me">${esc(m.email||'sem e-mail')}</div>`}
    <div class="mx">${you?'<span class="st" style="color:var(--ac);border-color:var(--ac)">você</span>':''}<span class="st" style="color:${st[1]};border-color:${st[1]}">${st[0]}</span>${m.team?`<span class="st" style="color:var(--mu);border-color:var(--bd)">${esc((S.teams.find(t=>t.id===m.team)||{}).name||'equipe')}</span>`:''}${last?`<span style="color:var(--mu);font-size:12px">último acesso ${last}</span>`:''}<span style="color:var(--mu);font-size:12px">capacidade <input data-mcap="${m.id}" type="number" min="1" max="80" value="${m.cap||40}" style="width:58px;padding:2px 6px" ${adm?'':'disabled'}> h/sem</span>${adm?'<span class="sws">'+COLORS.map(c=>`<span class="sw ${c===m.color?'on':''}" data-mc="${m.id}|${c}" style="background:${c}"></span>`).join('')+'</span>':''}</div>
    ${memberProjChips(m)}
   </div>
   <div class="mr"><button class="rolebtn" data-pop="r:${m.id}" ${adm?'':'disabled'}><span>${ROLES[r].n}</span><span>▾</span></button>
    ${adm?`<div class="mact">${r!=='admin'?`<button data-mproj="${m.id}" title="PROJETOS: escolha em quais projetos esta pessoa entra e use “Tirar deste projeto” para retirá-la de UM projeto sem mexer nos outros nem no acesso ao sistema.">Projetos${r==='limited'||r==='guest'||m.only?' ('+S.projects.filter(p=>(p.access||[]).includes(m.id)).length+')':''}</button>`:''}${!m.access?'<button data-cgrant="'+m.id+'" title="Autorizar e enviar convite por e-mail">Dar acesso (convidar)</button>':m.status==='invited'?'<button data-cresend="'+m.id+'">Reenviar convite</button>':''}${(!m.access||m.status==='invited')&&m.email?'<button data-cmanual="'+m.id+'" title="Não chegou e-mail? Defina você mesmo uma senha provisória: a conta fica ativa na hora, sem enviar nada.">Cadastrar com senha</button>':''}${m.access&&!you&&isAdm()?'<button data-crevoke="'+m.id+'" title="BLOQUEAR ACESSO: a pessoa não consegue mais entrar no sistema (o login dela é desativado). Ela continua na lista de membros e as atividades dela continuam no nome dela. Dá para liberar de novo depois com “Dar acesso”.">Bloquear acesso</button>':''}${you||!isAdm()?'':'<button class="ghost" data-sdel="'+m.id+'" title="REMOVER DEFINITIVAMENTE: apaga a pessoa de TODOS os projetos e exclui o login dela. O sistema pergunta o que fazer com as atividades dela (passar para outra pessoa ou excluir). Não dá para desfazer — para voltar, só convidando de novo. Para tirar de um projeto só, use “Projetos”.">🗑 Remover definitivamente</button>'}</div>`:''}
   </div></div>`;
}
const cloudAccountHTML=()=>`<label>Conta</label><div class="hint" style="margin:0 0 8px">Conectado como <b>${esc((sess&&sess.user&&sess.user.email)||(cloud.me&&cloud.me.email)||'')}</b> · perfil <b>${ROLES[role()].n}</b>.</div><div style="display:flex;gap:8px"><button data-cloud="pw">Alterar senha</button><button data-cloud="out">Sair</button></div>`;
function cloudUserPop(){
  const m=mem(S.me),email=(sess&&sess.user&&sess.user.email)||(m&&m.email)||'';
  return `<div style="padding:6px 8px;min-width:240px"><div style="display:flex;gap:10px;align-items:center"><span class="av" style="background:${m?m.color:'#667085'};width:34px;height:34px;font-size:13px;border-color:transparent">${esc(ini(m?m.name:'?'))}</span><div><b>${esc(m?m.name:'Conta')}</b><div class="hint" style="margin:0">${esc(email)}</div><div class="hint" style="margin:0">Perfil: ${ROLES[role()].n}</div></div></div></div><div class="ft"><button data-cloud="sync" style="margin-bottom:6px">↻ Sincronizar agora</button><button data-cloud="pw" style="margin-bottom:6px">Alterar senha</button><button data-cloud="out">Sair</button></div>`;
}
async function cloudLogout(){try{await sbFetch('/auth/v1/logout',{method:'POST'})}catch(e){}sessSave(null);try{localStorage.removeItem('quire-ui')}catch(e){}location.reload()}
function changePwDialog(){
  const M=$('#modal');M.dataset.kind='pw';editing=null;closePop();
  M.innerHTML=`<input type="text" class="uhide" name="username" autocomplete="username" tabindex="-1" aria-hidden="true" value="${esc((sess&&sess.user&&sess.user.email)||'')}"><h3>Alterar senha</h3><label style="margin-top:0">Nova senha (mín. 8 caracteres)</label><input id="np1" type="password" autocomplete="new-password"><label>Repita a senha</label><input id="np2" type="password" autocomplete="new-password"><div id="npm" class="lmsg"></div><div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="np_save">Salvar senha</button></span></div>`;
  $('#ov').classList.add('on');$('#np1').focus();
}
/* capturas: assumem o lugar dos tratadores locais quando há nuvem */
document.addEventListener('click',async e=>{
  if(!CLOUD)return;
  const g=s=>e.target.closest(s);let el;
  const stop=()=>{e.preventDefault();e.stopImmediatePropagation()};
  if(el=g('[data-cloud]')){stop();const a=el.dataset.cloud;closePop();
    if(a==='out')cloudLogout();
    else if(a==='pw')changePwDialog();
    else if(a==='sync'){setSync('busy');try{await pullAll(false,true);render();setSync('ok');toast('Sincronizado')}catch(x){setSync('err');toast(trErr(x.message))}}
    return}
  if(g('#np_save')){stop();const a=$('#np1').value,b=$('#np2').value,m=$('#npm');if(a.length<8){m.textContent='A senha precisa ter pelo menos 8 caracteres.';return}if(a!==b){m.textContent='As senhas não conferem.';return}
    try{await authSetPassword(a);closeModal();toast('Senha alterada')}catch(x){m.textContent=trErr(x.message)}return}
  if(g('#iv_go')){stop();
    const em=$('#iv_email').value.trim(),nm=$('#iv_name').value.trim(),rl=$('#iv_role').value;
    if(!validEmail(em)){toast('Digite um e-mail válido');return}
    const pids=[...document.querySelectorAll('.iv_p:checked')].map(x=>x.value);
    const mdv=$('#iv_mode');
    if(mdv&&mdv.value==='manual'){
      const pw=($('#iv_pw').value||'');if(pw.length<8){toast('A senha provisória precisa ter pelo menos 8 caracteres');return}
      const b2=$('#iv_go');b2.disabled=true;b2.textContent='Cadastrando…';
      try{await fnCall({action:'create',email:em,name:nm,role:rl,password:pw,team_id:window._ivTeam||null,...(rl!=='admin'?{projects_only:true,project_ids:pids}:{})});await pullAll(false,true);render();manualResult({ok:true},em,pw)}
      catch(x){manualResult({ok:false,msg:fnMissing(x)?'A função invite-user ainda não foi republicada no Supabase com a opção de cadastro manual. Publique o index.ts novo (GUIA, parte E7).':trErr(x.message)},em,pw)}
      return}
    const bt=$('#iv_go');bt.disabled=true;bt.textContent='Enviando…';
    const res=await cloudInvite(em,nm,rl,window._ivTeam,pids);
    if(res.fallback){const m=S.members.find(x=>(x.email||'').toLowerCase()===em.toLowerCase());if(m){if(rl!=='admin')m.only=true;pids.forEach(pid=>{const p=S.projects.find(x=>x.id===pid);if(p&&!(p.access||[]).includes(m.id))p.access=[...(p.access||[]),m.id].sort()});save()}}
    inviteResult(res,em);return}
  if(el=g('[data-cgrant]')){stop();const m=mem(el.dataset.cgrant);if(!m||!guardM(m))return;if(!validEmail(m.email||'')){toast('Preencha um e-mail válido no cartão antes de dar acesso.');return}
    toast('Enviando convite…');const res=await cloudInvite(m.email,m.name,roleOfM(m),m.team);inviteResult(res,m.email);return}
  if(el=g('[data-cmanual]')){stop();const m=mem(el.dataset.cmanual);if(!m||!guardM(m))return;if(!validEmail(m.email||'')){toast('Preencha um e-mail válido no cartão antes.');return}
    const M=$('#modal');M.dataset.kind='cman';editing=null;closePop();
    M.innerHTML=`<h3>Cadastrar ${esc(m.name)} com senha</h3><div class="hint">${esc(m.email)} — a conta fica ativa agora, sem enviar e-mail.</div><label>Senha provisória (mín. 8 caracteres)</label><div style="display:flex;gap:6px"><input id="cm_pw" type="text" autocomplete="off" style="flex:1"><button type="button" id="cm_gen">Gerar</button></div><div class="acts"><span></span><span><button id="g_ok">Cancelar</button> <button class="pri" id="cm_go" data-mid="${m.id}">Cadastrar</button></span></div>`;
    $('#ov').classList.add('on');$('#cm_pw').focus();return}
  if(g('#cm_gen')){stop();const a='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789',r=new Uint32Array(12);crypto.getRandomValues(r);$('#cm_pw').value=[...r].map(x=>a[x%a.length]).join('');return}
  if(el=g('#cm_go')){stop();const m=mem(el.dataset.mid),pw=$('#cm_pw').value;if(!m)return;if(pw.length<8){toast('A senha precisa ter pelo menos 8 caracteres');return}
    el.disabled=true;el.textContent='Cadastrando…';
    try{await fnCall({action:'create',email:m.email,name:m.name,role:roleOfM(m),password:pw});await pullAll(false,true);render();manualResult({ok:true},m.email,pw)}
    catch(x){manualResult({ok:false,msg:fnMissing(x)?'A função invite-user ainda não foi republicada com o cadastro manual (GUIA, parte E7).':trErr(x.message)},m.email,pw)}
    return}
  if(el=g('[data-cresend]')){stop();const m=mem(el.dataset.cresend);if(!m||!guardM(m))return;
    try{const r=await fnCall({action:'resend',email:m.email,name:m.name,role:roleOfM(m)});toast((r&&r.message)||'Convite reenviado')}catch(x){if(fnMissing(x))inviteResult({fallback:true},m.email);else toast(trErr(x.message))}return}
  if(el=g('[data-crevoke]')){stop();const m=mem(el.dataset.crevoke);if(!m||!guardM(m)||!onlyAdm())return;
    ask('Bloquear o acesso de '+m.name+'? Ela deixa de conseguir entrar (os dados e atividades dela continuam).','',async()=>{
      try{await fnCall({action:'revoke',email:m.email,name:m.name,role:roleOfM(m)});await pullAll(false,true)}
      catch(x){if(fnMissing(x)){m.access=false;m.status='blocked';cloudSchedule()}else{toast(trErr(x.message));return}}
      render();toast('Acesso bloqueado')},{confirm:1,ok:'Bloquear acesso'});return}
  if(g('[data-asuser]')||g('[data-mst]')||g('[data-mi]')){stop();return}
},true);
/* ligações no arranque */
if(CLOUD)loadUI();

document.addEventListener('click',e=>{
  if(!CLOUD)return;const el=e.target.closest('[data-act3="addperson"]');if(!el)return;
  e.preventDefault();e.stopImmediatePropagation();
  if(!can('members')){deny('members');return}
  ask('Nome da pessoa (só para atribuir atividades, sem acesso ao sistema)','',v=>{if(!v.trim())return false;S.members.push({id:uid(),name:v.trim(),email:'',color:COLORS[S.members.length%COLORS.length],cap:40,role:'limited',status:'active',access:false,team:null});render()});
},true);

pushHist();

window.addEventListener('beforeunload',e=>{if(typeof cloud!=='undefined'&&cloud.on&&(cloud.timer||cloud.pushing)){e.preventDefault();e.returnValue=''}});
window.addEventListener('online',()=>{if(typeof cloud!=='undefined'&&cloud.on){cloudSchedule();pollPull()}});
document.addEventListener('click',e=>{const t=e.target;if(t.closest&&t.closest('#bCollapse')){toggleSide();return}if(t.closest&&t.closest('#mnu')){document.body.classList.toggle('menu');return}if(t.id==='scrim'||(document.body.classList.contains('menu')&&t.closest&&t.closest('#side .si,#side .pi,#side .fi,#side #newTask,#side #bPal,#side #addProj,#side #bUser')))document.body.classList.remove('menu')});
hydrateIcons();
(()=>{const fix=r=>r.querySelectorAll('input:not([autocomplete]),textarea:not([autocomplete])').forEach(i=>{i.setAttribute('autocomplete',i.type==='password'?'new-password':'off')});
  ['#view','#modal','#pop'].forEach(s=>{const e=$(s);if(e){fix(e);new MutationObserver(()=>fix(e)).observe(e,{childList:true,subtree:true})}})})();
if(CLOUD){const bu=$('#bUser');if(bu)bu.removeAttribute('data-pop')}
toggleSide(document.body.classList.contains('sc'));
render();
if(CLOUD){loginShow(true);cloudBoot()}else{loginShow(false);if(!S.seen)setTimeout(openWelcome,350)}


/* ===== links e navegação por endereço (/hoje, /p/projeto/quadro, /t/id, /config/membros) ===== */
const ROUTER_ON=/^https?:$/.test(location.protocol);
const VIEWPATH={list:'lista',board:'quadro',cal:'calendario',gantt:'cronograma',people:'pessoas',dash:'painel'};
const PATHVIEW=Object.fromEntries(Object.entries(VIEWPATH).map(([k,v])=>[v,k]));
const SMARTPATH={today:'hoje',week:'proximos',late:'atrasadas',mine:'minhas',star:'favoritas',blocked:'impedidas'};
const PATHSMART=Object.fromEntries(Object.entries(SMARTPATH).map(([k,v])=>[v,k]));
const slugify=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')||'projeto';
function pslug(p){
  const base=slugify(p.name);const same=S.projects.filter(x=>!x.virtual&&slugify(x.name)===base);
  if(same.length<2)return base;
  return base+'-'+(same.findIndex(x=>x.id===p.id)+1);
}
function currentPath(){
  if(!(typeof cloud!=='undefined'&&cloud.ready))return null;
  const M=$('#modal');
  if($('#ov').classList.contains('on')&&M.dataset.kind==='task'&&editing&&byId(editing))return '/t/'+editing;
  if(S.view==='settings')return '/config/'+(S.setTab||'membros');
  if(S.view==='smart')return '/'+(SMARTPATH[S.smart||'today']||'hoje');
  const p=proj();if(!p||p.virtual)return '/';
  return '/p/'+pslug(p)+'/'+(VIEWPATH[S.view]||'lista');
}
const PAGETITLE={'/':'Início'};
let routing=false,routeFirst=true;
function syncURL(){
  if(!ROUTER_ON||routing)return;
  const path=currentPath();if(!path)return;
  try{
    if(path!==location.pathname){
      const st={r:1};
      if(routeFirst||location.pathname==='/'||/index\.html$/.test(location.pathname))history.replaceState(st,'',path+location.search.replace(/[?&]task=[^&]*/,''));else history.pushState(st,'',path);
    }
    routeFirst=false;
    let lab;
    if(path.startsWith('/t/')){const t=byId(editing);lab=t?t.title:'Atividade'}
    else if(path.startsWith('/config'))lab='Configurações';
    else if(S.view==='smart'){const sm=SMARTS.find(x=>x[0]===S.smart)||SMARTS[0];lab=sm[1].replace(/^\S+\s/,'')}
    else{const p=proj();lab=p&&!p.virtual?p.name:'Controle de Atividades'}
    document.title=lab+' — CS Infra';
  }catch(e){}
}
function applyRoute(path,quiet){
  const seg=String(path||'/').replace(/\/+$/,'').split('/').filter(Boolean).map(decodeURIComponent);
  let msg='';
  routing=true;
  try{
    if(typeof closeModal==='function'&&$('#ov').classList.contains('on'))closeModal();
    adding=null;cur=null;sel=new Set();zoom=null;
    const a=seg[0];
    if(!a||a==='index.html'){/* início: mantém o que estava */}
    else if(PATHSMART[a]){S.view='smart';S.smart=PATHSMART[a]}
    else if(a==='config'||a==='configuracoes'){S.view='settings';if(seg[1])S.setTab=seg[1]}
    else if(a==='p'){
      const p=S.projects.find(x=>!x.virtual&&(pslug(x)===seg[1]||x.id===seg[1]));
      if(p){S.cur=p.id;S.view=PATHVIEW[seg[2]]||'list'}else msg='Projeto não encontrado ou você não tem acesso a ele.';
    }
    else if(a==='t'){
      const t=byId(seg[1]);
      if(t){S.cur=t.pid;if(['smart','settings','dash'].includes(S.view))S.view='list';let q=t.parent;while(q){const x=byId(q);x.open=true;q=x.parent}cur=t.id;anchor=t.id;sel=new Set([t.id]);
        routing=false;render();markSel(true);openTask(t.id);if(msg)toast(msg);return}
      msg='Atividade não encontrada ou você não tem acesso a ela.';
    }
    else msg='Endereço não reconhecido — abrindo o início.';
  }finally{routing=false}
  render();
  if(msg)toast(msg);
}
async function copyLink(url,msg){
  msg=msg||'🔗 Link copiado';
  try{await navigator.clipboard.writeText(url);toast(msg)}
  catch(e){const i=document.createElement('input');i.value=url;document.body.appendChild(i);i.select();try{document.execCommand('copy');toast(msg)}catch(_){toast(url)}i.remove()}
}
if(ROUTER_ON){
  const _render=render;render=function(){_render.apply(this,arguments);syncURL()};
  const _openTask=openTask;openTask=function(){_openTask.apply(this,arguments);syncURL()};
  const _closeModal=closeModal;closeModal=function(){_closeModal.apply(this,arguments);syncURL()};
  window.addEventListener('popstate',()=>{if(cloud.ready)applyRoute(location.pathname,true)});
}

{const _r3=render;render=function(){if(!S.cols||S._colsFor!==(S.me||'local')){colsLoad();S._colsFor=S.me||'local'}colsCSS();_r3.apply(this,arguments);try{markSel()}catch(e){}};}


/* ===== autocomplete de @pessoa na barra de adição ===== */
(function(){
  let box=null,items=[],act=0,inp=null,tokStart=-1;
  const hide=()=>{if(box){box.remove();box=null}items=[];inp=null};
  function token(i){
    const v=i.value,c=i.selectionStart,m=/(^|\s)@([^\s@]*)$/.exec(v.slice(0,c));
    if(!m)return null;return{start:c-m[2].length-1,q:m[2],end:c};
  }
  function render(){
    if(!box){box=document.createElement('div');box.id='mpop';box.setAttribute('role','listbox');document.body.appendChild(box)}
    const r=inp.getBoundingClientRect();
    box.style.left=Math.max(8,Math.min(r.left,innerWidth-308))+'px';box.style.top=(r.bottom+6)+'px';box.style.width=Math.min(300,innerWidth-16)+'px';
    box.innerHTML=items.length?items.map((m,i)=>`<div class="mi2 ${i===act?'on':''}" role="option" data-mi="${i}"><span class="av" style="background:${m.color}">${esc(ini(m.name))}</span><span class="mt"><b>${esc(m.name)}</b><small>${esc(m.email||'sem e-mail')}</small></span><kbd>@${esc(handleOf(m))}</kbd></div>`).join('')+'<div class="mf">↑ ↓ escolhe · Enter / Tab insere · Esc fecha</div>':'<div class="mf">Nenhuma pessoa com esse nome</div>';
  }
  function update(i){
    const t=token(i);if(!t){hide();return}
    inp=i;tokStart=t.start;
    const q=norm(t.q);
    const sc=m=>{const n=norm(m.name),e=norm(m.email||'');if(!q)return 1;if(nameParts(m).some(w=>w.startsWith(q))||e.startsWith(q))return 0;if(n.includes(q)||e.includes(q))return 2;return 9};
    items=S.members.filter(m=>sc(m)<9).sort((a,b)=>sc(a)-sc(b)||a.name.localeCompare(b.name)).slice(0,6);
    act=0;render();
  }
  function pick(m){
    const i=inp,t=token(i);if(!t||!m)return;
    const v=i.value,ins='@'+handleOf(m)+' ';
    i.value=v.slice(0,t.start)+ins+v.slice(t.end);
    const p=t.start+ins.length;i.setSelectionRange(p,p);
    hide();i.dispatchEvent(new Event('input',{bubbles:true}));i.focus();
  }
  document.addEventListener('input',e=>{if(e.target.id==='qa')update(e.target)},true);
  document.addEventListener('click',e=>{if(e.target.id==='qa')update(e.target);else if(!e.target.closest('#mpop'))hide()},true);
  document.addEventListener('mousedown',e=>{const el=e.target.closest&&e.target.closest('#mpop .mi2');if(el){e.preventDefault();e.stopPropagation();pick(items[+el.dataset.mi])}},true);
  document.addEventListener('focusout',e=>{if(e.target.id==='qa')setTimeout(()=>{if(document.activeElement!==e.target)hide()},120)},true);
  document.addEventListener('keydown',e=>{
    if(!box||e.target!==inp)return;
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){if(!items.length)return;e.preventDefault();e.stopImmediatePropagation();act=(act+(e.key==='ArrowDown'?1:items.length-1))%items.length;render();return}
    if((e.key==='Enter'||e.key==='Tab')&&items.length){e.preventDefault();e.stopImmediatePropagation();pick(items[act]);return}
    if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();hide();return}
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'||e.key==='Home'||e.key==='End')setTimeout(()=>{if(inp)update(inp)},0);
  },true);
})();


/* ===== e-mail do sistema: estado e teste ===== */
async function loadMailStatus(test){
  const el=$('#mailst');if(!el)return;
  try{
    const r=await fnCall({action:'mail_status',test:!!test});
    if(test){toast('✔ '+(r.message||'E-mail de teste enviado'))}
    el.innerHTML=r.provider?`<div style="color:var(--ok);font-weight:600">✔ Ativo (${r.provider==='resend'?'Resend':'SMTP'})</div><div class="hint" style="margin:4px 0 10px">Remetente: <b>${esc(r.from)}</b> · as respostas vão para quem enviou o aviso.</div><button id="mail_test">Enviar e-mail de teste para mim</button>`:mailHowTo();
  }catch(e){
    el.innerHTML=(fnMissing(e)||/smtp_not_configured/.test(e.message||''))?mailHowTo():`<div style="color:var(--red)">${esc(trErr(e.message))}</div><div style="margin-top:8px">${mailHowTo()}</div>`;
  }
}
function mailHowTo(){return `<div style="color:var(--amb);font-weight:600">Ainda não ativado</div><div class="hint" style="margin:4px 0 8px;line-height:1.6">Em <b>Supabase → Edge Functions → Secrets</b> crie <code>RESEND_API_KEY</code> (chave gratuita em resend.com) e <code>MAIL_FROM</code> (ex.: <code>CS Infra &lt;avisos@seudominio.com.br&gt;</code>). Depois reimplante a função <code>invite-user</code> com o arquivo novo do GitHub (pasta supabase/functions). Alternativa: <code>SMTP_USER</code> + <code>SMTP_PASS</code>. Passo a passo no <b>GUIA_SUPABASE.md</b>.</div><button id="mail_test">Testar agora</button>`}
document.addEventListener('click',e=>{if(e.target&&e.target.id==='mail_test'){e.stopImmediatePropagation();loadMailStatus(true)}},true);


/* ===== descrição direto na tabela (sem abrir a caixa grande) ===== */
function startDescEdit(cell){
  if(cell.querySelector('textarea'))return;
  const t=byId(cell.dataset.descid||(cell.closest('[data-row]')||{dataset:{}}).dataset.row);if(!t)return;
  const ta=document.createElement('textarea');ta.value=t.desc||'';ta.className='descin';ta.rows=1;ta.placeholder='Escreva a descrição — Enter salva, ⇧+Enter quebra linha, Esc cancela';
  cell.classList.add('editing');cell.appendChild(ta);
  const fit=()=>{ta.style.height='auto';ta.style.height=Math.min(140,ta.scrollHeight+2)+'px'};
  ta.addEventListener('input',fit);fit();ta.focus();ta.setSelectionRange(ta.value.length,ta.value.length);
  let done=false;
  const end=ok=>{if(done)return;done=true;if(ok){const v=ta.value.replace(/\s+$/,'');if(v!==(t.desc||'')){t.desc=v;save()}}render();markSel()};
  ta.addEventListener('keydown',e=>{
    e.stopPropagation();
    if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();end(true)}
    else if(e.key==='Escape'){e.preventDefault();end(false)}
    else if(e.key==='Tab'){e.preventDefault();end(true)}
  });
  ta.addEventListener('blur',()=>end(true));
  ta.addEventListener('click',e=>e.stopPropagation());
}


/* ===== edição direta em todas as colunas editáveis (data, hora, duração) ===== */
function parseDateIn(v){
  v=norm(v).trim();if(!v)return '';
  const td=today();
  if(v==='hoje'||v==='h')return td;if(v==='amanha'||v==='a')return plus(td,1);
  let m=/^\+(\d{1,3})$/.exec(v);if(m)return plus(td,+m[1]);
  m=/^(\d{1,2})[\/.\-\s]?(\d{1,2})(?:[\/.\-\s]?(\d{2}|\d{4}))?$/.exec(v);
  if(m){let d=+m[1],mo=+m[2],y=m[3]?+m[3]:new Date().getFullYear();if(y<100)y+=2000;const dt=new Date(y,mo-1,d);if(dt.getFullYear()===y&&dt.getMonth()===mo-1&&dt.getDate()===d)return ymd(dt)}
  m=/^(\d{1,2})$/.exec(v);if(m){const d=+m[1],n=new Date();let dt=new Date(n.getFullYear(),n.getMonth(),d);if(d<n.getDate())dt=new Date(n.getFullYear(),n.getMonth()+1,d);if(dt.getDate()===d)return ymd(dt)}
  return null;
}
function parseTimeIn(v){
  v=norm(v).trim().replace(/\s+/g,'');if(!v)return '';
  const m=/^(\d{1,2})(?::?(\d{2}))?h?(\d{2})?$/.exec(v);if(!m)return null;
  const h=+m[1],mi=+(m[2]||m[3]||0);if(h>23||mi>59)return null;
  return pad(h)+':'+pad(mi);
}
const EDITCOLS=['i','ih','d','dh','u'];
function startCellEdit(cell){
  if(cell.querySelector('input'))return;
  const row=cell.closest('[data-row]'),t=byId(row&&row.dataset.row);if(!t)return;
  const col=EDITCOLS.find(c=>cell.classList.contains('col-'+c));if(!col)return;
  const cur0={i:fmtFull(t.start),ih:t.startTime||'',d:fmtFull(t.due),dh:t.dueTime||'',u:(()=>{const x=dateCols(t);return x.u&&!x.agg?x.u.replace(/\s*d$/,''):''})()}[col];
  const hint={i:'dd/mm/aaaa · hoje · amanhã · +3',d:'dd/mm/aaaa · hoje · amanhã · +3',ih:'hh:mm',dh:'hh:mm',u:'dias (ex.: 5) ou horas (2h30)'}[col];
  const inp=document.createElement('input');inp.className='cin';inp.value=cur0;inp.placeholder=hint;inp.title=hint;inp.setAttribute('aria-label',hint);
  cell.classList.add('editing');cell.appendChild(inp);inp.focus();inp.select();
  let done=false;
  const apply=()=>{
    const v=inp.value.trim();
    if(col==='i'||col==='d'){const r=parseDateIn(v);if(r===null)return 'Data inválida — use dd/mm/aaaa, hoje, amanhã ou +3';if(col==='i')t.start=r;else t.due=r;if(!r){/* limpou */}}
    else if(col==='ih'||col==='dh'){const r=parseTimeIn(v);if(r===null)return 'Hora inválida — use hh:mm';if(col==='ih'){t.startTime=r;if(r&&!t.start)t.start=t.due||today()}else{t.dueTime=r;if(r&&!t.due)t.due=t.start||today()}}
    else{
      const x=norm(v).replace(/\s+/g,'');if(!x){return ''}
      let m=/^(\d+)d?$/.exec(x);
      if(m){const n=Math.max(1,+m[1]);if(t.start){t.due=plus(t.start,n-1)}else if(t.due){t.start=plus(t.due,-(n-1))}else{t.start=today();t.due=plus(t.start,n-1)}}
      else if((m=/^(\d+)h(\d{1,2})?$/.exec(x))){
        const mins=(+m[1])*60+(+(m[2]||0));if(!mins)return 'Duração inválida';
        if(!t.start)t.start=t.due||today();if(!t.startTime)t.startTime='09:00';
        const tot=(+t.startTime.slice(0,2))*60+(+t.startTime.slice(3))+mins;t.due=plus(t.start,Math.floor(tot/1440));const rm=tot%1440;t.dueTime=pad(Math.floor(rm/60))+':'+pad(rm%60)}
      else return 'Duração inválida — use 5 (dias) ou 2h30';
    }
    normDates(t);return '';
  };
  const end=(ok,next)=>{
    if(done)return;
    if(ok){const er=apply();if(er){toast('⚠ '+er);inp.classList.add('bad');inp.focus();inp.select();return}save()}
    done=true;render();markSel();
    if(next){const c=nextEditCell(t.id,col,next);if(c)setTimeout(()=>{const el=document.querySelector(`#view [data-row="${t.id}"] .col-${c}`);if(el)startCellEdit(el)},0)}
  };
  inp.addEventListener('keydown',e=>{
    e.stopPropagation();
    if(e.key==='Enter'){e.preventDefault();end(true)}
    else if(e.key==='Escape'){e.preventDefault();end(false)}
    else if(e.key==='Tab'){e.preventDefault();end(true,e.shiftKey?-1:1)}
  });
  inp.addEventListener('blur',()=>end(true));
  inp.addEventListener('click',e=>e.stopPropagation());
}
function nextEditCell(id,col,dir){
  const row=document.querySelector(`#view [data-row="${id}"]`);if(!row)return null;
  const order=(S.cols?S.cols.order:[]).filter(c=>EDITCOLS.includes(c)&&row.querySelector('.col-'+c)&&row.querySelector('.col-'+c).getClientRects().length);
  const i=order.indexOf(col),j=i+dir;return j>=0&&j<order.length?order[j]:null;
}


/* ===== tirar a pessoa de UM projeto (sem mexer nos outros nem no acesso ao sistema) ===== */
function removeFromProject(pid,mid){
  if(!can('members')||!onlyAdm())return;
  const p=S.projects.find(x=>x.id===pid),m=mem(mid);if(!p||!m)return;
  if(roleOfM(m)==='admin'){toast('Administradores enxergam todos os projetos.');return}
  const mine=S.tasks.filter(t=>t.pid===pid&&(t.assignees||[]).includes(mid));
  const open=!p.restricted&&roleOfM(m)==='normal'&&!m.only;
  const M=$('#modal');M.dataset.kind='rmproj';M.style.width='';editing=null;closePop();window._rpj=[pid,mid];
  M.innerHTML=`<h3>Tirar ${esc(m.name)} de “${esc(p.name)}”</h3>
  <div class="hint" style="margin:-6px 0 12px">Só este projeto muda: ${esc(m.name)} continua com acesso ao sistema e aos <b>outros projetos</b>.</div>
  ${open?`<div class="sro" style="margin:0 0 12px">“${esc(p.name)}” está aberto à equipe toda. Para tirar só ${esc(m.name)}, o projeto passa a <b>“Somente selecionados”</b> e todas as outras pessoas que já enxergam continuam com acesso. Quem for cadastrado depois precisará ser incluído à mão.</div>`:''}
  ${mine.length?`<label class="opt"><input type="radio" name="rp_mode" value="unassign" checked><span><b>Tirar o nome dele das ${mine.length} atividade${mine.length>1?'s':''} deste projeto</b><small>As atividades continuam, sem esse responsável.</small></span></label>
  <label class="opt"><input type="radio" name="rp_mode" value="keep"><span><b>Manter o nome dele nas atividades</b><small>Ele deixa de ver o projeto, mas o nome segue nas atividades.</small></span></label>`:`<div class="hint">Ele não é responsável por nenhuma atividade deste projeto.</div>`}
  <div class="acts"><span></span><span><button id="rp_x" type="button">Cancelar</button> <button class="pri" id="rp_ok" type="button">Tirar do projeto</button></span></div>`;
  $('#ov').classList.add('on');
}
document.addEventListener('click',e=>{
  const g=q=>e.target.closest&&e.target.closest(q);
  let el=g('[data-rmproj]');
  if(el){e.preventDefault();e.stopImmediatePropagation();const[a,b]=el.dataset.rmproj.split('|');removeFromProject(a,b);return}
  if(g('#rp_x')){e.stopImmediatePropagation();const[,mid]=window._rpj||[];closeModal();if(mid&&S.view!=='settings')render();return}
  if(g('#rp_ok')){
    e.stopImmediatePropagation();const[pid,mid]=window._rpj||[];const p=S.projects.find(x=>x.id===pid),m=mem(mid);if(!p||!m)return;
    const mode=(document.querySelector('input[name=rp_mode]:checked')||{}).value;
    if(!p.restricted&&roleOfM(m)==='normal'&&!m.only){p.restricted=true;p.access=S.members.filter(x=>roleOfM(x)!=='admin'&&x.access!==false&&x.id!==mid).map(x=>x.id).sort()}
    else p.access=(p.access||[]).filter(x=>x!==mid);
    let n=0;if(mode==='unassign')S.tasks.forEach(t=>{if(t.pid===pid&&(t.assignees||[]).includes(mid)){t.assignees=t.assignees.filter(a=>a!==mid);n++}});
    save();closeModal();render();toast(m.name+' saiu de “'+p.name+'”'+(n?' · tirado de '+n+' atividade'+(n>1?'s':''):''));return}
},true);

document.addEventListener('change',e=>{
  if(e.target&&e.target.id==='mp_only'){
    const mid=window._mpMid;
    const m=mid&&mem(mid);if(!m||!can('members'))return;
    if(!onlyAdm()){e.target.checked=!!m.only;return}m.only=e.target.checked;save();memberProjectsDialog(mid);toast(m.only?'Agora '+m.name+' vê só os projetos marcados':m.name+' volta a ver os projetos abertos');
  }
});

document.addEventListener('click',e=>{
  const g=q=>e.target.closest&&e.target.closest(q);
  if(g('[data-pmadd]')){
    e.stopImmediatePropagation();const sel=$('#pm_add'),mid=sel&&sel.value;if(!mid){toast('Escolha uma pessoa na lista.');return}
    if(!can('members')){deny('members');return}
    const m=mem(mid);if(!m||!guardM(m))return;setAccess(proj().id,mid,true);render();toast((m?m.name:'Pessoa')+' agora participa de “'+proj().name+'”');return}
  const gp=g('[data-gopj]');
  if(gp){e.stopImmediatePropagation();S.cur=gp.dataset.gopj;S.setTab='props';render();return}
},true);


/* ===== rede de segurança do salvamento =====
   Qualquer alteração feita na tela que esqueça de chamar save() é detectada aqui:
   depois de cada clique, tecla, mudança de campo ou redesenho, se os dados diferem do que está no banco, agenda o envio. */
(function(){
  if(typeof CLOUD==='undefined'||!CLOUD)return;
  let tm=null;
  const check=()=>{
    tm=null;
    if(!cloud.ready||!cloud.on||document.body.dataset.sync==='err')return;
    if(cloud.pushing||cloud.timer){tm=setTimeout(check,1000);return}
    try{if(sigOf(dbRows())!==cloud.sig){cloudSchedule()}}catch(e){}
  };
  const kick=()=>{clearTimeout(tm);tm=setTimeout(check,350)};
  ['click','keyup','change','focusout','drop','pointerup'].forEach(ev=>document.addEventListener(ev,kick,true));
  const _r=render;render=function(){_r.apply(this,arguments);kick()};
})();
