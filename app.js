const STORAGE_KEY = 'serienTrackerData_v1';
const todayISO = () => new Date().toISOString().slice(0,10);
const imdbFind = title => `https://www.imdb.com/find/?q=${encodeURIComponent(title)}&s=tt`;
const make = (title, list, seasonCounts, opts={}) => ({
  id: crypto.randomUUID(), title, list, status: opts.status || (list === 'watched' ? 'completed' : 'not_started'),
  imdb: opts.imdb || imdbFind(title), notes: opts.notes || '', updatedAt: Date.now(), seasons: seasonCounts.map((count, i)=>({
    number:i+1, episodes:Array.from({length:count},(_,j)=>({number:j+1,status:list==='watched'?'watched':'open',date:list==='watched'?'n/a':''}))
  }))
});

const seed = [
// To watch
make('13 Reasons Why','watch',[13,13,13,10],{imdb:'https://www.imdb.com/title/tt1837492/episodes/'}),
make('13 Reasons Why: Beyond the Reasons','watch',[1,1,1],{imdb:'https://www.imdb.com/title/tt8615966/episodes/'}),
make('72 Cutest Animals','watch',[12]),
make('Alexa & Katie','watch',[13,10,8,8]),
make('Big Little Lies','watch',[7,7]),
make('Black Mirror','watch',[3,4,6,6,3,5,6]),
make('Bridgerton','watch',[8,8,8,8],{imdb:'https://www.imdb.com/title/tt8740790/episodes/'}),
make('Chasing Cameron','watch',[10]),
make('Criminal Minds','watch',[22,23,20,26,23,24,24,24,24,23,22,22,22,15,10,10,10,10],{imdb:'https://www.imdb.com/title/tt0452046/episodes/'}),
make('Downton Abbey','watch',[7,9,9,9,9,9]),
make('Élite','watch',[8,8,8,8,8,8,8,8]),
make('Euphoria','watch',[8,2,8],{notes:'Staffel 2 enthält hier zusätzlich die 2 Specials als eigene Zwischen-Staffel.'}),
make('Family Guy','watch',[7,21,22,30,18,12,16,21,18,23,22,21,18,20,20,20,20,20,20,20,20,15,15,10],{imdb:'https://www.imdb.com/title/tt0182576/episodes/'}),
make('Fate: The Winx Saga','watch',[6,7]),
make('Ginny & Georgia','watch',[10,10,10]),
make("Grey's Anatomy",'watch',[9,27,25,17,24,24,22,24,24,24,25,24,24,24,25,21,17,20,20,10,18,18],{imdb:'https://www.imdb.com/title/tt0413573/episodes/'}),
make('Hannah Montana','watch',[26,30,30,13]),
make('Heartstopper','watch',[8,8,8]),
make('How I Met Your Mother','watch',[22,22,20,24,24,24,24,24,24]),
make('Jessie','watch',[26,26,26,20]),
make('Locke & Key','watch',[10,10,8]),
make('Loki','watch',[6,6]),
make("Marvel's Iron Fist",'watch',[13,10]),
make("Marvel's Jessica Jones",'watch',[13,13,13]),
make("Marvel's Luke Cage",'watch',[13,13]),
make("Marvel's The Punisher",'watch',[13,13]),
make('Modern Family','watch',[24,24,24,24,24,24,24,22,22,22,18]),
make('Navy CIS','watch',[23,23,24,24,19,25,24,24,24,24,24,24,24,24,24,24,20,16,21,22,21,22,20],{imdb:'https://www.imdb.com/title/tt0364845/episodes/',notes:'IMDb-Originaltitel: NCIS.'}),
make('Never Have I Ever','watch',[10,10,10,10]),
make('Outer Banks','watch',[10,10,10,10]),
make('Peaky Blinders','watch',[6,6,6,6,6,6]),
make('Riverdale','watch',[13,22,22,19,19,22,20]),
make('Sex Education','watch',[8,8,8,8]),
make('Stranger Things','watch',[8,9,8,9,8],{imdb:'https://www.imdb.com/title/tt4574334/episodes/'}),
make('Supernatural','watch',[22,22,16,22,22,22,23,23,23,23,23,23,23,20,20],{imdb:'https://www.imdb.com/title/tt0460681/episodes/'}),
make('The Fosters','watch',[21,21,20,20,22]),
make('The Good Doctor','watch',[18,18,20,20,18,22,10]),
make('The Rain','watch',[8,6,6]),
make('The Simpsons','watch',[13,22,24,22,22,25,25,25,25,23,22,21,22,22,22,21,22,22,20,21,23,22,22,22,22,22,22,22,21,23,22,22,22,22,18,18,10],{imdb:'https://www.imdb.com/title/tt0096697/episodes/',notes:'Sehr lange laufende Serie; neuere Staffeln bitte bei Bedarf über Bearbeiten anpassen.'}),
make('The Summer I Turned Pretty','watch',[7,8,11]),
make('The Umbrella Academy','watch',[10,10,10,6]),
make('Wednesday','watch',[8,8],{imdb:'https://www.imdb.com/title/tt13443470/episodes/'}),
make('What If…?','watch',[9,9,8]),
make('Wildes Deutschland','watch',[10],{notes:'Doku-Reihe; Folgenzählung kann je nach IMDb/TV-Fassung abweichen.'}),
make('You','watch',[10,10,10,10,10],{imdb:'https://www.imdb.com/title/tt7335184/episodes/'}),
make('You vs. Wild','watch',[8]),
make('Zero Chill','watch',[10]),
// Watched
make('72 Dangerous Animals - Asia','watched',[12]),
make('72 Dangerous Animals: Latin America','watched',[12]),
make('Agent Carter','watched',[8,10]),
make('Austin & Ally','watched',[19,26,22,20]),
make('Brooklyn Nine-Nine','watched',[22,23,23,22,22,18,13,10]),
make('Castle','watched',[10,24,24,23,24,23,23,22]),
make('Chilling Adventures of Sabrina','watched',[11,9,8,8]),
make('Deadly Class','watched',[10]),
make('Die Zauberer vom Waverly Place','watched',[21,30,28,27]),
make('Explained: Sex','watched',[5]),
make('Friends','watched',[24,24,25,24,24,25,24,24,24,18]),
make('Forever','watched',[22]),
make('Girlboss','watched',[13]),
make('Glee','watched',[22,22,22,22,20,13]),
make('Hannah Montana','watched',[26,30,30,13],{notes:'Auch in To-watch-Liste enthalten.'}),
make('How I Met Your Mother','watched',[22,22,20,24,24,24,24,24,24],{notes:'Auch in To-watch-Liste enthalten.'}),
make('Insatiable','watched',[12,10]),
make('Jane the Virgin','watched',[22,22,20,17,19]),
make('Julie and the Phantoms','watched',[9]),
make('Kim Possible','watched',[21,31,15,22]),
make('Lost in Space','watched',[10,10,8]),
make('Lucifer','watched',[13,18,26,10,16,10]),
make('Maniac','watched',[10]),
make("Marvel's Daredevil",'watched',[13,13,13]),
make("Marvel's The Defenders",'watched',[8]),
make('Pandemie','watched',[6]),
make('Penny Dreadful','watched',[8,10,9]),
make('Person of Interest','watched',[23,22,23,22,13]),
make('Pretty Little Liars','watched',[22,25,24,24,25,20,20]),
make('Scorpion','watched',[22,24,25,22]),
make('Shadowhunters','watched',[13,20,22]),
make('Tales by Light','watched',[6,6,6]),
make('Teen Wolf','watched',[12,12,24,12,20,20]),
make('The 100','watched',[13,16,16,13,13,13,16]),
make('The Code','watched',[12]),
make('The End of the F***ing World','watched',[8,8]),
make('The Falcon and the Winter Soldier','watched',[6]),
make('The I-Land','watched',[7]),
make('The Mentalist','watched',[23,23,24,24,22,22,13]),
make('The Order','watched',[10,10]),
make('The Originals','watched',[22,22,22,13,13]),
make('The Vampire Diaries','watched',[22,22,22,23,22,22,22,16]),
make('Treadstone','watched',[10]),
make('Unser Planet','watched',[8,4]),
make('V Wars','watched',[10]),
make('Victorious','watched',[19,13,12,13]),
make('WandaVision','watched',[9]),
make('Zoo','watched',[13,13,13])
];

let state = load();
let activeTab = 'watch';

function load(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){ try { return JSON.parse(raw); } catch(e){} }
  const data = {version:1, series: seed};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function totalEpisodes(s){ return s.seasons.reduce((sum,season)=>sum+season.episodes.length,0); }
function watchedEpisodes(s){ return s.seasons.reduce((sum,season)=>sum+season.episodes.filter(e=>e.status==='watched').length,0); }
function pct(s){ const t=totalEpisodes(s); return t?Math.round(watchedEpisodes(s)/t*100):0; }
function statusLabel(v){ return ({not_started:'Nicht begonnen',watching:'Schaue gerade',completed:'Komplett geschaut',paused:'Pausiert',dropped:'Abgebrochen'})[v]||v; }
function syncStatus(s){ const p=pct(s); if(p===100) s.status='completed'; else if(p>0 && s.status==='not_started') s.status='watching'; }
function render(){ renderDashboard(); renderGrid(); }
function renderDashboard(){
  const all=state.series, total=all.length, watched=all.filter(s=>s.list==='watched').length, watch=all.filter(s=>s.list==='watch').length;
  const eps=all.reduce((a,s)=>a+totalEpisodes(s),0), done=all.reduce((a,s)=>a+watchedEpisodes(s),0);
  document.getElementById('dashboard').innerHTML = `
  <article class="stat"><span>${total}</span><small>Serien gesamt</small></article>
  <article class="stat"><span>${watch}</span><small>To watch</small></article>
  <article class="stat"><span>${watched}</span><small>Geschaut-Liste</small></article>
  <article class="stat"><span>${done}/${eps}</span><small>Folgen geschaut</small></article>`;
}
function filtered(){
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  const lf=document.getElementById('listFilter').value || (activeTab==='all'?'':activeTab);
  const sf=document.getElementById('statusFilter').value;
  const sort=document.getElementById('sortSelect').value;
  let arr=state.series.filter(s=>(!q||s.title.toLowerCase().includes(q)) && (!lf||s.list===lf) && (!sf||s.status===sf));
  if(sort==='title') arr.sort((a,b)=>a.title.localeCompare(b.title,'de'));
  if(sort==='progress') arr.sort((a,b)=>pct(a)-pct(b)||a.title.localeCompare(b.title,'de'));
  if(sort==='recent') arr.sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
  return arr;
}
function renderGrid(){
  const grid=document.getElementById('seriesGrid');
  const arr=filtered();
  grid.innerHTML = arr.map(s=>{
    const t=totalEpisodes(s), w=watchedEpisodes(s), p=pct(s);
    return `<article class="card" data-open="${s.id}">
      <div class="card-head"><h3>${escapeHtml(s.title)}</h3><span class="pill ${p===100?'ok':p>0?'warn':''}">${p}%</span></div>
      <div class="badges"><span class="pill">${s.list==='watch'?'To watch':'Geschaut'}</span><span class="pill">${statusLabel(s.status)}</span><span class="pill">${s.seasons.length} Staffeln</span></div>
      <div class="progress"><span style="width:${p}%"></span></div>
      <div class="series-meta"><span>${w}/${t} Folgen</span><span>${s.seasons.length} Staffeln</span></div>
      ${s.notes?`<p class="small">${escapeHtml(s.notes)}</p>`:''}
    </article>`;
  }).join('') || '<p class="meta">Keine Serien gefunden.</p>';
  grid.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.open)));
}
function openDetail(id){
  const s=state.series.find(x=>x.id===id); if(!s) return;
  const t=totalEpisodes(s), w=watchedEpisodes(s), p=pct(s);
  const html=`<div class="detail-header"><div><p class="eyebrow">${s.list==='watch'?'To watch':'Geschaut'}</p><h2>${escapeHtml(s.title)}</h2><p class="meta">${w}/${t} Folgen · ${s.seasons.length} Staffeln · ${p}%</p>${s.imdb?`<a class="source" href="${escapeAttr(s.imdb)}" target="_blank" rel="noreferrer">IMDb öffnen</a>`:''}</div><button class="secondary" id="closeDetailBtn">Schließen</button></div>
  <div class="quick-controls">
    <button id="editSeriesDetail" class="secondary" type="button">Serie bearbeiten</button>
    <button id="markAllWatched" type="button">Alles geschaut</button>
    <button id="markAllOpen" class="secondary" type="button">Alles offen</button>
    <label>Bis hier geschaut <div style="display:flex;gap:.4rem"><input id="untilSeason" type="number" min="1" placeholder="S"/><input id="untilEpisode" type="number" min="1" placeholder="F"/><button id="markUntil" type="button">OK</button></div></label>
  </div>
  <div class="progress"><span style="width:${p}%"></span></div>
  ${s.seasons.map(season=>`<section class="season"><h3>Staffel ${season.number} <small class="meta">${season.episodes.filter(e=>e.status==='watched').length}/${season.episodes.length}</small></h3><div class="episode-grid">${season.episodes.map(ep=>`<button class="episode ${ep.status}" data-ep="${season.number}|${ep.number}" title="S${season.number} F${ep.number}${ep.date?' · '+ep.date:''}">${ep.number}</button>`).join('')}</div></section>`).join('')}`;
  const dialog=document.getElementById('detailDialog'); document.getElementById('detailContent').innerHTML=html;
  document.getElementById('closeDetailBtn').onclick=()=>dialog.close();
  document.getElementById('editSeriesDetail').onclick=()=>openSeriesEditor(s.id);
  document.getElementById('markAllWatched').onclick=()=>{ setAll(s,'watched',todayISO()); dialog.close(); render(); openDetail(id); };
  document.getElementById('markAllOpen').onclick=()=>{ setAll(s,'open',''); dialog.close(); render(); openDetail(id); };
  document.getElementById('markUntil').onclick=()=>{ const ss=+document.getElementById('untilSeason').value, ee=+document.getElementById('untilEpisode').value; markUntil(s,ss,ee); dialog.close(); render(); openDetail(id); };
  document.querySelectorAll('[data-ep]').forEach(btn=>btn.onclick=()=>{ const [season,ep]=btn.dataset.ep.split('|').map(Number); openEpisodeEditor(s.id,season,ep); });
  if(!dialog.open) dialog.showModal();
}
function setAll(s,status,date){ s.seasons.forEach(season=>season.episodes.forEach(ep=>{ep.status=status; ep.date=status==='watched'?date:'';})); s.updatedAt=Date.now(); syncStatus(s); save(); }
function markUntil(s,seasonNum,epNum){ if(!seasonNum||!epNum) return; s.seasons.forEach(season=>season.episodes.forEach(ep=>{ if(season.number<seasonNum || (season.number===seasonNum && ep.number<=epNum)){ep.status='watched'; ep.date=ep.date || todayISO();} })); s.updatedAt=Date.now(); syncStatus(s); save(); }
function openEpisodeEditor(seriesId,seasonNum,epNum){
  const s=state.series.find(x=>x.id===seriesId), ep=s?.seasons.find(x=>x.number===seasonNum)?.episodes.find(e=>e.number===epNum); if(!s||!ep) return;
  document.getElementById('episodeTitle').textContent=`${s.title} · S${seasonNum} F${epNum}`;
  document.getElementById('episodeSeriesId').value=seriesId; document.getElementById('episodeSeason').value=seasonNum; document.getElementById('episodeNumber').value=epNum;
  document.getElementById('episodeStatus').value=ep.status; document.getElementById('episodeDate').value=ep.date==='n/a'?'':ep.date;
  document.getElementById('episodeDialog').showModal();
}
function openSeriesEditor(id){
  const s=id?state.series.find(x=>x.id===id):null;
  document.getElementById('seriesDialogTitle').textContent=s?'Serie bearbeiten':'Neue Serie';
  document.getElementById('seriesId').value=s?.id||''; document.getElementById('titleInput').value=s?.title||'';
  document.getElementById('listInput').value=s?.list||'watch'; document.getElementById('statusInput').value=s?.status||'not_started';
  document.getElementById('imdbInput').value=s?.imdb||''; document.getElementById('seasonCountsInput').value=s?s.seasons.map(se=>se.episodes.length).join(','):'';
  document.getElementById('notesInput').value=s?.notes||''; document.getElementById('deleteSeriesBtn').classList.toggle('hidden',!s);
  document.getElementById('seriesDialog').showModal();
}
function parseCounts(v){ return v.split(',').map(x=>parseInt(x.trim(),10)).filter(n=>Number.isFinite(n)&&n>0); }
function applyCounts(existing, counts, list){
  return counts.map((count,i)=>{ const old=existing?.[i]; return {number:i+1, episodes:Array.from({length:count},(_,j)=>old?.episodes[j]||{number:j+1,status:list==='watched'?'watched':'open',date:list==='watched'?'n/a':''})}; });
}
function escapeHtml(s){ return String(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function escapeAttr(s){ return escapeHtml(s); }

// listeners
document.getElementById('addSeriesBtn').onclick=()=>openSeriesEditor();
document.getElementById('cancelSeriesBtn').onclick=()=>document.getElementById('seriesDialog').close();
document.getElementById('deleteSeriesBtn').onclick=()=>{ const id=document.getElementById('seriesId').value; if(confirm('Serie wirklich löschen?')){ state.series=state.series.filter(s=>s.id!==id); save(); document.getElementById('seriesDialog').close(); document.getElementById('detailDialog').close(); render(); } };
document.getElementById('seriesForm').onsubmit=e=>{ e.preventDefault(); const id=document.getElementById('seriesId').value; const counts=parseCounts(document.getElementById('seasonCountsInput').value); if(!counts.length) return alert('Bitte Staffel-Folgen angeben, z.B. 8,8,10'); let s=state.series.find(x=>x.id===id); const list=document.getElementById('listInput').value; if(!s){ s={id:crypto.randomUUID(),seasons:[]}; state.series.push(s); } s.title=document.getElementById('titleInput').value.trim(); s.list=list; s.status=document.getElementById('statusInput').value; s.imdb=document.getElementById('imdbInput').value.trim() || imdbFind(s.title); s.notes=document.getElementById('notesInput').value.trim(); s.seasons=applyCounts(s.seasons,counts,list); s.updatedAt=Date.now(); save(); document.getElementById('seriesDialog').close(); render(); };
document.getElementById('episodeForm').onsubmit=e=>{ e.preventDefault(); const s=state.series.find(x=>x.id===document.getElementById('episodeSeriesId').value); const season=s.seasons.find(x=>x.number===+document.getElementById('episodeSeason').value); const ep=season.episodes.find(x=>x.number===+document.getElementById('episodeNumber').value); ep.status=document.getElementById('episodeStatus').value; ep.date=ep.status==='na'?'n/a':document.getElementById('episodeDate').value; s.updatedAt=Date.now(); syncStatus(s); save(); document.getElementById('episodeDialog').close(); document.getElementById('detailDialog').close(); render(); openDetail(s.id); };
document.getElementById('cancelEpisodeBtn').onclick=()=>document.getElementById('episodeDialog').close();
document.getElementById('todayBtn').onclick=()=>{ document.getElementById('episodeStatus').value='watched'; document.getElementById('episodeDate').value=todayISO(); };
document.getElementById('naDateBtn').onclick=()=>{ document.getElementById('episodeStatus').value='na'; document.getElementById('episodeDate').value=''; };
document.getElementById('clearDateBtn').onclick=()=>document.getElementById('episodeDate').value='';
['searchInput','listFilter','statusFilter','sortSelect'].forEach(id=>document.getElementById(id).addEventListener('input',renderGrid));
document.querySelectorAll('.tab').forEach(btn=>btn.onclick=()=>{ document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeTab=btn.dataset.list; document.getElementById('listFilter').value=''; renderGrid(); });
document.getElementById('exportBtn').onclick=()=>{ const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`serien-tracker-backup-${todayISO()}.json`; a.click(); URL.revokeObjectURL(a.href); };
document.getElementById('importBtn').onclick=()=>document.getElementById('importFile').click();
document.getElementById('importFile').onchange=e=>{ const file=e.target.files[0]; if(!file) return; const r=new FileReader(); r.onload=()=>{ try{ const data=JSON.parse(r.result); if(!Array.isArray(data.series)) throw new Error('Ungültiges Backup'); state=data; save(); render(); alert('Backup importiert.'); }catch(err){ alert('Backup konnte nicht importiert werden.'); } }; r.readAsText(file); e.target.value=''; };
render();
