
const STORAGE_KEY = 'serienTrackerData_stable';
const OLD_KEYS = ['serienTrackerData_v3','serienTrackerData_v2','serienTrackerData_v1'];
const todayISO = () => new Date().toISOString().slice(0,10);
const imdbFind = title => `https://www.imdb.com/find/?q=${encodeURIComponent(title)}&s=tt`;
const seed = [
  {
    "title": "13 Reasons Why",
    "list": "watch",
    "counts": [
      13,
      13,
      13,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt1837492/episodes/",
    "notes": ""
  },
  {
    "title": "13 Reasons Why: Beyond the Reasons",
    "list": "watch",
    "counts": [
      1,
      1,
      1
    ],
    "imdb": "https://www.imdb.com/title/tt8615966/episodes/",
    "notes": ""
  },
  {
    "title": "72 Cutest Animals",
    "list": "watch",
    "counts": [
      12
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Alexa & Katie",
    "list": "watch",
    "counts": [
      13,
      10,
      8,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Big Little Lies",
    "list": "watch",
    "counts": [
      7,
      7
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Black Mirror",
    "list": "watch",
    "counts": [
      3,
      4,
      6,
      6,
      3,
      5,
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Bridgerton",
    "list": "watch",
    "counts": [
      8,
      8,
      8,
      8
    ],
    "imdb": "https://www.imdb.com/title/tt8740790/episodes/",
    "notes": ""
  },
  {
    "title": "Chasing Cameron",
    "list": "watch",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Criminal Minds",
    "list": "watch",
    "counts": [
      22,
      23,
      20,
      26,
      23,
      24,
      24,
      24,
      24,
      23,
      22,
      22,
      22,
      15,
      10,
      10,
      10,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt0452046/episodes/",
    "notes": ""
  },
  {
    "title": "Downton Abbey",
    "list": "watch",
    "counts": [
      7,
      9,
      9,
      9,
      9,
      9
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Élite",
    "list": "watch",
    "counts": [
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Euphoria",
    "list": "watch",
    "counts": [
      8,
      2,
      8
    ],
    "imdb": "",
    "notes": "Staffel 2 enthält hier zusätzlich die 2 Specials als eigene Zwischen-Staffel."
  },
  {
    "title": "Family Guy",
    "list": "watch",
    "counts": [
      7,
      21,
      22,
      30,
      18,
      12,
      16,
      21,
      18,
      23,
      22,
      21,
      18,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      15,
      15,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt0182576/episodes/",
    "notes": ""
  },
  {
    "title": "Fate: The Winx Saga",
    "list": "watch",
    "counts": [
      6,
      7
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Ginny & Georgia",
    "list": "watch",
    "counts": [
      10,
      10,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Grey's Anatomy",
    "list": "watch",
    "counts": [
      9,
      27,
      25,
      17,
      24,
      24,
      22,
      24,
      24,
      24,
      25,
      24,
      24,
      24,
      25,
      21,
      17,
      20,
      20,
      10,
      18,
      18
    ],
    "imdb": "https://www.imdb.com/title/tt0413573/episodes/",
    "notes": ""
  },
  {
    "title": "Hannah Montana",
    "list": "watch",
    "counts": [
      26,
      30,
      30,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Heartstopper",
    "list": "watch",
    "counts": [
      8,
      8,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "How I Met Your Mother",
    "list": "watch",
    "counts": [
      22,
      22,
      20,
      24,
      24,
      24,
      24,
      24,
      24
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Jessie",
    "list": "watch",
    "counts": [
      26,
      26,
      26,
      20
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Locke & Key",
    "list": "watch",
    "counts": [
      10,
      10,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Loki",
    "list": "watch",
    "counts": [
      6,
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Marvel's Iron Fist",
    "list": "watch",
    "counts": [
      13,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Marvel's Jessica Jones",
    "list": "watch",
    "counts": [
      13,
      13,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Marvel's Luke Cage",
    "list": "watch",
    "counts": [
      13,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Marvel's The Punisher",
    "list": "watch",
    "counts": [
      13,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Modern Family",
    "list": "watch",
    "counts": [
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      22,
      22,
      22,
      18
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Navy CIS",
    "list": "watch",
    "counts": [
      23,
      23,
      24,
      24,
      19,
      25,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      20,
      16,
      21,
      22,
      21,
      22,
      20
    ],
    "imdb": "https://www.imdb.com/title/tt0364845/episodes/",
    "notes": "IMDb-Originaltitel: NCIS."
  },
  {
    "title": "Never Have I Ever",
    "list": "watch",
    "counts": [
      10,
      10,
      10,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Outer Banks",
    "list": "watch",
    "counts": [
      10,
      10,
      10,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Peaky Blinders",
    "list": "watch",
    "counts": [
      6,
      6,
      6,
      6,
      6,
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Riverdale",
    "list": "watch",
    "counts": [
      13,
      22,
      22,
      19,
      19,
      22,
      20
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Sex Education",
    "list": "watch",
    "counts": [
      8,
      8,
      8,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Stranger Things",
    "list": "watch",
    "counts": [
      8,
      9,
      8,
      9,
      8
    ],
    "imdb": "https://www.imdb.com/title/tt4574334/episodes/",
    "notes": ""
  },
  {
    "title": "Supernatural",
    "list": "watch",
    "counts": [
      22,
      22,
      16,
      22,
      22,
      22,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      20,
      20
    ],
    "imdb": "https://www.imdb.com/title/tt0460681/episodes/",
    "notes": ""
  },
  {
    "title": "The Fosters",
    "list": "watch",
    "counts": [
      21,
      21,
      20,
      20,
      22
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Good Doctor",
    "list": "watch",
    "counts": [
      18,
      18,
      20,
      20,
      18,
      22,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Rain",
    "list": "watch",
    "counts": [
      8,
      6,
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Simpsons",
    "list": "watch",
    "counts": [
      13,
      22,
      24,
      22,
      22,
      25,
      25,
      25,
      25,
      23,
      22,
      21,
      22,
      22,
      22,
      21,
      22,
      22,
      20,
      21,
      23,
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      21,
      23,
      22,
      22,
      22,
      22,
      18,
      18,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt0096697/episodes/",
    "notes": "Sehr lange laufende Serie; neuere Staffeln bitte bei Bedarf über Bearbeiten anpassen."
  },
  {
    "title": "The Summer I Turned Pretty",
    "list": "watch",
    "counts": [
      7,
      8,
      11
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Umbrella Academy",
    "list": "watch",
    "counts": [
      10,
      10,
      10,
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Wednesday",
    "list": "watch",
    "counts": [
      8,
      8
    ],
    "imdb": "https://www.imdb.com/title/tt13443470/episodes/",
    "notes": ""
  },
  {
    "title": "What If…?",
    "list": "watch",
    "counts": [
      9,
      9,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Wildes Deutschland",
    "list": "watch",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": "Doku-Reihe; Folgenzählung kann je nach IMDb/TV-Fassung abweichen."
  },
  {
    "title": "You",
    "list": "watch",
    "counts": [
      10,
      10,
      10,
      10,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt7335184/episodes/",
    "notes": ""
  },
  {
    "title": "You vs. Wild",
    "list": "watch",
    "counts": [
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Zero Chill",
    "list": "watch",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "72 Dangerous Animals - Asia",
    "list": "watched",
    "counts": [
      12
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "72 Dangerous Animals: Latin America",
    "list": "watched",
    "counts": [
      12
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Agent Carter",
    "list": "watched",
    "counts": [
      8,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Austin & Ally",
    "list": "watched",
    "counts": [
      19,
      26,
      22,
      20
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Brooklyn Nine-Nine",
    "list": "watched",
    "counts": [
      22,
      23,
      23,
      22,
      22,
      18,
      13,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Castle",
    "list": "watched",
    "counts": [
      10,
      24,
      24,
      23,
      24,
      23,
      23,
      22
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Chilling Adventures of Sabrina",
    "list": "watched",
    "counts": [
      11,
      9,
      8,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Deadly Class",
    "list": "watched",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Die Zauberer vom Waverly Place",
    "list": "watched",
    "counts": [
      21,
      30,
      28,
      27
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Explained: Sex",
    "list": "watched",
    "counts": [
      5
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Friends",
    "list": "watched",
    "counts": [
      24,
      24,
      25,
      24,
      24,
      25,
      24,
      24,
      24,
      18
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Forever",
    "list": "watched",
    "counts": [
      22
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Girlboss",
    "list": "watched",
    "counts": [
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Glee",
    "list": "watched",
    "counts": [
      22,
      22,
      22,
      22,
      20,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Hannah Montana",
    "list": "watched",
    "counts": [
      26,
      30,
      30,
      13
    ],
    "imdb": "",
    "notes": "Auch in To-watch-Liste enthalten."
  },
  {
    "title": "How I Met Your Mother",
    "list": "watched",
    "counts": [
      22,
      22,
      20,
      24,
      24,
      24,
      24,
      24,
      24
    ],
    "imdb": "",
    "notes": "Auch in To-watch-Liste enthalten."
  },
  {
    "title": "Insatiable",
    "list": "watched",
    "counts": [
      12,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Jane the Virgin",
    "list": "watched",
    "counts": [
      22,
      22,
      20,
      17,
      19
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Julie and the Phantoms",
    "list": "watched",
    "counts": [
      9
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Kim Possible",
    "list": "watched",
    "counts": [
      21,
      31,
      15,
      22
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Lost in Space",
    "list": "watched",
    "counts": [
      10,
      10,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Lucifer",
    "list": "watched",
    "counts": [
      13,
      18,
      26,
      10,
      16,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Maniac",
    "list": "watched",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Marvel's Daredevil",
    "list": "watched",
    "counts": [
      13,
      13,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Marvel's The Defenders",
    "list": "watched",
    "counts": [
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Pandemie",
    "list": "watched",
    "counts": [
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Penny Dreadful",
    "list": "watched",
    "counts": [
      8,
      10,
      9
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Person of Interest",
    "list": "watched",
    "counts": [
      23,
      22,
      23,
      22,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Pretty Little Liars",
    "list": "watched",
    "counts": [
      22,
      25,
      24,
      24,
      25,
      20,
      20
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Scorpion",
    "list": "watched",
    "counts": [
      22,
      24,
      25,
      22
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Shadowhunters",
    "list": "watched",
    "counts": [
      13,
      20,
      22
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Tales by Light",
    "list": "watched",
    "counts": [
      6,
      6,
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Teen Wolf",
    "list": "watched",
    "counts": [
      12,
      12,
      24,
      12,
      20,
      20
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The 100",
    "list": "watched",
    "counts": [
      13,
      16,
      16,
      13,
      13,
      13,
      16
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Code",
    "list": "watched",
    "counts": [
      12
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The End of the F***ing World",
    "list": "watched",
    "counts": [
      8,
      8
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Falcon and the Winter Soldier",
    "list": "watched",
    "counts": [
      6
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The I-Land",
    "list": "watched",
    "counts": [
      7
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Mentalist",
    "list": "watched",
    "counts": [
      23,
      23,
      24,
      24,
      22,
      22,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Order",
    "list": "watched",
    "counts": [
      10,
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Originals",
    "list": "watched",
    "counts": [
      22,
      22,
      22,
      13,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "The Vampire Diaries",
    "list": "watched",
    "counts": [
      22,
      22,
      22,
      23,
      22,
      22,
      22,
      16
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Treadstone",
    "list": "watched",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Unser Planet",
    "list": "watched",
    "counts": [
      8,
      4
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "V Wars",
    "list": "watched",
    "counts": [
      10
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Victorious",
    "list": "watched",
    "counts": [
      19,
      13,
      12,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "WandaVision",
    "list": "watched",
    "counts": [
      9
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Zoo",
    "list": "watched",
    "counts": [
      13,
      13,
      13
    ],
    "imdb": "",
    "notes": ""
  },
  {
    "title": "Finding Her Edge",
    "list": "watch",
    "counts": [
      8
    ],
    "imdb": "https://www.imdb.com/title/tt35495058/episodes/",
    "notes": "IMDb: Staffel 1 mit 8 Folgen; Staffel 2 wurde angekündigt/ist später ergänzbar."
  },
  {
    "title": "Solange wir lügen",
    "list": "watch",
    "counts": [
      8
    ],
    "imdb": "https://www.imdb.com/title/tt3914054/episodes/",
    "notes": "Originaltitel: We Were Liars."
  },
  {
    "title": "Tal der Könige: Ägyptens verlorene Schätze",
    "list": "watch",
    "counts": [
      6,
      8,
      8,
      10,
      11,
      8
    ],
    "imdb": "https://www.imdb.com/title/tt10115054/episodes/",
    "notes": "Originaltitel: Lost Treasures of Egypt. Folgenzählung kann je nach Plattform-Fassung abweichen; in der App bearbeitbar."
  },
  {
    "title": "Time Scanners – Baukunst in 3D",
    "list": "watch",
    "counts": [
      6
    ],
    "imdb": "https://www.imdb.com/title/tt3687840/episodes/",
    "notes": "Originaltitel: Time Scanners."
  },
  {
    "title": "Gossip Girl",
    "list": "watch",
    "counts": [
      18,
      25,
      22,
      22,
      24,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt0397442/episodes/"
  },
  {
    "title": "Gilmore Girls",
    "list": "watch",
    "counts": [
      21,
      22,
      22,
      22,
      22,
      22,
      22
    ],
    "imdb": "https://www.imdb.com/title/tt0238784/episodes/"
  },
  {
    "title": "The Gentlemen",
    "list": "watch",
    "counts": [
      8
    ],
    "imdb": "https://www.imdb.com/title/tt13210838/episodes/",
    "notes": "TV-Serie 2024; weitere Staffeln später ergänzbar."
  },
  {
    "title": "Maxton Hall",
    "list": "watch",
    "counts": [
      6,
      6
    ],
    "imdb": "https://www.imdb.com/title/tt27792190/episodes/",
    "notes": "IMDb-Titel: Maxton Hall: The World Between Us."
  },
  {
    "title": "Ich und die Walter Boys",
    "list": "watch",
    "counts": [
      10,
      10
    ],
    "imdb": "https://www.imdb.com/title/tt8323628/episodes/",
    "notes": "Originaltitel: My Life with the Walter Boys; weitere bestätigte Staffeln später ergänzbar."
  }
];
function normalize(raw){
  return raw.map(x=>{
    const counts = x.counts || (x.seasons||[]).map(s=>s.episodes? s.episodes.length : s.count).filter(Boolean);
    let total = counts.reduce((a,b)=>a+b,0);
    let cs = x.currentSeason || 0, ce = x.currentEpisode || 0;
    if(x.seasons && !x.currentSeason){
      let watched=0; x.seasons.forEach(se=>(se.episodes||[]).forEach(ep=>{if(ep.status==='watched') watched++;}));
      const pos = fromWatchedCount(counts, watched); cs=pos.season; ce=pos.episode;
    } else if(x.list==='watched' || x.status==='completed') { cs=counts.length; ce=counts[counts.length-1]||0; }
    return {id:x.id||crypto.randomUUID(), title:x.title, list:x.list||'watch', status:x.status || ((x.list==='watched')?'completed':'not_started'), imdb:x.imdb||imdbFind(x.title), notes:x.notes||'', counts, currentSeason:cs, currentEpisode:ce, lastDate:x.lastDate||'', dateMode:x.dateMode||((x.list==='watched')?'na':'none'), updatedAt:x.updatedAt||Date.now()};
  });
}
function fromWatchedCount(counts, watched){ let left=watched; for(let i=0;i<counts.length;i++){ if(left<=0) return {season:0,episode:0}; if(left<=counts[i]) return {season:i+1,episode:left}; left-=counts[i]; } return {season:counts.length, episode:counts[counts.length-1]||0}; }
function watchedCount(s){ let count=0; for(let i=0;i<s.counts.length;i++){ if(i+1 < (s.currentSeason||0)) count += s.counts[i]; else if(i+1 === (s.currentSeason||0)) count += Math.min(s.currentEpisode||0, s.counts[i]); } return count; }
function totalCount(s){ return (s.counts||[]).reduce((a,b)=>a+b,0); }
function pct(s){ const t=totalCount(s); return t?Math.round(watchedCount(s)/t*100):0; }
function syncStatus(s){ const p=pct(s); if(p===100 && !['completed_final','up_to_date','completed'].includes(s.status)) s.status='up_to_date'; else if(p>0 && s.status==='not_started') s.status='watching'; }
function mergeWithSeed(existing){
  const normalizedExisting = normalize(existing || []);
  const normalizedSeed = normalize(seed);
  const byTitle = new Map(normalizedExisting.map(s => [s.title.trim().toLowerCase(), s]));
  for(const starter of normalizedSeed){
    const key = starter.title.trim().toLowerCase();
    if(!byTitle.has(key)){
      normalizedExisting.push(starter);
      byTitle.set(key, starter);
    } else {
      const current = byTitle.get(key);
      // Nur fehlende technische Daten ergänzen, aber deinen Fortschritt/Status nicht überschreiben.
      if((!current.counts || !current.counts.length) && starter.counts?.length) current.counts = starter.counts;
      if(!current.imdb && starter.imdb) current.imdb = starter.imdb;
      if(!current.notes && starter.notes) current.notes = starter.notes;
      if(!current.list && starter.list) current.list = starter.list;
    }
  }
  return normalizedExisting;
}
function load(){
  let raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) for(const k of OLD_KEYS){ raw = localStorage.getItem(k); if(raw) break; }
  if(raw){
    try {
      const parsed = JSON.parse(raw);
      const merged = mergeWithSeed(parsed.series || parsed);
      const data = {version:4, series: merged};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem('serienTrackerData_backupSafe', JSON.stringify(data));
      return data;
    } catch(e){}
  }
  const data={version:4, series:normalize(seed)};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  localStorage.setItem('serienTrackerData_backupSafe', JSON.stringify(data));
  return data;
}
let state=load(); let activeTab='watch'; save();
function save(){ state.version=6; localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); localStorage.setItem('serienTrackerData_backupSafe', JSON.stringify(state)); }
function statusLabel(v){ return ({not_started:'Nicht begonnen',watching:'Schaue gerade',up_to_date:'Alles Verfügbare geschaut',completed_final:'Serie beendet + komplett geschaut',completed:'Komplett geschaut (alt)',paused:'Pausiert',dropped:'Abgebrochen'})[v]||v; }
function statusClass(s){ return ['completed_final','up_to_date','completed'].includes(s.status) ? 'ok' : (pct(s)>0 ? 'warn' : ''); }
function escapeHtml(s){ return String(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function render(){ renderDashboard(); renderGrid(); }
function renderDashboard(){
  const all=state.series,
    total=all.length,
    tw=all.filter(s=>s.list==='watch').length,
    up=all.filter(s=>s.status==='up_to_date').length,
    fin=all.filter(s=>s.status==='completed_final'||s.status==='completed').length,
    eps=all.reduce((a,s)=>a+totalCount(s),0),
    done=all.reduce((a,s)=>a+watchedCount(s),0);
  const totalText = `${done}/${eps} Folgen geschaut`;
  const hp = document.getElementById('headerProgress');
  if(hp) hp.textContent = totalText;
  document.getElementById('dashboard').innerHTML=`<article class="stat"><span>${total}</span><small>Serien gesamt</small></article><article class="stat"><span>${tw}</span><small>To watch</small></article><article class="stat"><span>${up}</span><small>Alles Verfügbare geschaut</small></article><article class="stat"><span>${fin}</span><small>Serien beendet/komplett</small></article>`;
}
function filtered(){ const q=document.getElementById('searchInput').value.trim().toLowerCase(); const lf=document.getElementById('listFilter').value || (activeTab==='all'?'':activeTab); const sf=document.getElementById('statusFilter').value; const sort=document.getElementById('sortSelect').value; let arr=state.series.filter(s=>(!q||s.title.toLowerCase().includes(q))&&(!lf||s.list===lf)&&(!sf||s.status===sf)); if(sort==='title') arr.sort((a,b)=>a.title.localeCompare(b.title,'de')); if(sort==='progress') arr.sort((a,b)=>pct(a)-pct(b)||a.title.localeCompare(b.title,'de')); if(sort==='recent') arr.sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0)); return arr; }
function currentText(s){ if(!s.currentSeason||!s.currentEpisode) return 'Noch keine Folge gesetzt'; return `Aktuell: S${s.currentSeason} F${s.currentEpisode}`; }
function renderGrid(){ const grid=document.getElementById('seriesGrid'); const arr=filtered(); grid.innerHTML=arr.map(s=>{ const p=pct(s), w=watchedCount(s), t=totalCount(s); return `<article class="card" data-open="${s.id}"><div class="card-head"><h3>${escapeHtml(s.title)}</h3><span class="pill ${p===100?'ok':p>0?'warn':''}">${p}%</span></div><div class="badges"><span class="pill">${s.list==='watch'?'To watch':'Geschaut'}</span><span class="pill ${statusClass(s)}">${statusLabel(s.status)}</span><span class="pill">${s.counts.length} Staffeln</span></div><div class="progress"><span style="width:${p}%"></span></div><div class="series-meta"><span>${w}/${t} Folgen</span><span>${currentText(s)}</span></div>${s.lastDate?`<p class="small">Zuletzt: ${s.lastDate}</p>`:''}${s.notes?`<p class="small">${escapeHtml(s.notes)}</p>`:''}</article>`; }).join('') || '<p class="meta">Keine Serien gefunden.</p>'; grid.querySelectorAll('[data-open]').forEach(el=>el.onclick=()=>openDetail(el.dataset.open)); }
function openDetail(id){
  const s=state.series.find(x=>x.id===id); if(!s) return;
  const p=pct(s), w=watchedCount(s), t=totalCount(s);
  const seasonButtons = s.counts.map((c,i)=>`<button class="secondary season-action" onclick="markSeason('${s.id}', ${i+1})">Staffel ${i+1} geschaut</button>`).join('');
  document.getElementById('detailContent').innerHTML=`
    <div class="detail-top">
      <div>
        <p class="eyebrow">${s.list==='watch'?'To watch':'Geschaut'}</p>
        <h2>${escapeHtml(s.title)}</h2>
        <p class="meta">${statusLabel(s.status)} · ${s.counts.length} Staffeln · ${t} Folgen</p>
      </div>
      <button class="secondary" onclick="document.getElementById('detailDialog').close()">Schließen</button>
    </div>
    <div class="progress"><span style="width:${p}%"></span></div>
    <p><b>${w}/${t} Folgen</b> · ${p}% · ${currentText(s)}</p>
    <p class="source"><a href="${s.imdb}" target="_blank" rel="noopener">IMDb öffnen</a></p>
    ${s.notes?`<p class="meta">${escapeHtml(s.notes)}</p>`:''}
    <h3>Schnellaktionen</h3>
    <div class="detail-actions">
      <button onclick="nextEpisode('${s.id}')">+ Nächste Folge</button>
      <button class="secondary" onclick="nextSeason('${s.id}')">+ Nächste Staffel</button>
      <button class="secondary" onclick="markUpToDate('${s.id}')">Alles Verfügbare geschaut</button>
      <button class="secondary" onclick="markComplete('${s.id}')">Serie beendet + geschaut</button>
      <button class="secondary" onclick="openSeriesEditor('${s.id}')">Bis Staffel/Folge ändern</button>
      <button class="secondary" onclick="setToday('${s.id}')">Datum heute</button>
      <button class="secondary" onclick="markOpen('${s.id}')">Zurücksetzen</button>
    </div>
    <h3>Staffeln</h3>
    <div class="season-grid">${s.counts.map((c,i)=>`<div class="season-box"><b>Staffel ${i+1}</b><br>${c} Folgen</div>`).join('')}</div>
    <div class="detail-actions season-actions">${seasonButtons}</div>`;
  document.getElementById('detailDialog').showModal();
}

function setToday(id){ const s=state.series.find(x=>x.id===id); if(!s) return; s.dateMode='date'; s.lastDate=todayISO(); s.updatedAt=Date.now(); save(); render(); openDetail(id); }
function updateAfterProgress(s){
  if(!s) return;
  if(s.currentSeason>0 || s.currentEpisode>0){ if(s.status==='not_started') s.status='watching'; }
  if(pct(s)===100 && !['up_to_date','completed_final','completed'].includes(s.status)) s.status='up_to_date';
  s.lastDate=todayISO(); s.dateMode='date'; s.updatedAt=Date.now();
}
function nextEpisode(id){
  const s=state.series.find(x=>x.id===id); if(!s) return;
  if(!s.currentSeason || s.currentSeason<1){ s.currentSeason=1; s.currentEpisode=0; }
  const max=s.counts[s.currentSeason-1]||0;
  if(s.currentEpisode < max){ s.currentEpisode += 1; }
  else if(s.currentSeason < s.counts.length){ s.currentSeason += 1; s.currentEpisode = 1; }
  updateAfterProgress(s); save(); render(); openDetail(id);
}
function nextSeason(id){
  const s=state.series.find(x=>x.id===id); if(!s) return;
  if(!s.currentSeason || s.currentSeason<1){ s.currentSeason=1; }
  else if(s.currentSeason < s.counts.length){ s.currentSeason += 1; }
  s.currentEpisode = s.counts[s.currentSeason-1]||0;
  updateAfterProgress(s); save(); render(); openDetail(id);
}
function markSeason(id, seasonNo){
  const s=state.series.find(x=>x.id===id); if(!s) return;
  s.currentSeason=Math.max(1, Math.min(seasonNo, s.counts.length));
  s.currentEpisode=s.counts[s.currentSeason-1]||0;
  updateAfterProgress(s); save(); render(); openDetail(id);
}

function markUpToDate(id){ const s=state.series.find(x=>x.id===id); s.currentSeason=s.counts.length; s.currentEpisode=s.counts.at(-1)||0; s.status='up_to_date'; s.list='watched'; s.updatedAt=Date.now(); save(); render(); openDetail(id); }
function markComplete(id){ const s=state.series.find(x=>x.id===id); s.currentSeason=s.counts.length; s.currentEpisode=s.counts.at(-1)||0; s.status='completed_final'; s.list='watched'; s.updatedAt=Date.now(); save(); render(); openDetail(id); }
function markOpen(id){ const s=state.series.find(x=>x.id===id); s.currentSeason=0; s.currentEpisode=0; s.status='not_started'; s.updatedAt=Date.now(); save(); render(); openDetail(id); }
function parseCounts(v){ return v.split(',').map(x=>parseInt(x.trim(),10)).filter(n=>Number.isFinite(n)&&n>0); }
function openSeriesEditor(id){ const s=id?state.series.find(x=>x.id===id):null; document.getElementById('seriesDialogTitle').textContent=s?'Serie bearbeiten':'Neue Serie'; document.getElementById('seriesId').value=s?.id||''; document.getElementById('titleInput').value=s?.title||''; document.getElementById('listInput').value=s?.list||'watch'; document.getElementById('statusInput').value=s?.status||'not_started'; document.getElementById('imdbInput').value=s?.imdb||''; document.getElementById('seasonCountsInput').value=s?s.counts.join(','):''; document.getElementById('currentSeasonInput').value=s?.currentSeason||''; document.getElementById('currentEpisodeInput').value=s?.currentEpisode||''; document.getElementById('lastDateInput').value=s?.lastDate||''; document.getElementById('dateModeInput').value=s?.dateMode||'none'; document.getElementById('notesInput').value=s?.notes||''; document.getElementById('deleteSeriesBtn').classList.toggle('hidden',!s); document.getElementById('seriesDialog').showModal(); }
document.getElementById('addSeriesBtn').onclick=()=>openSeriesEditor();
document.getElementById('cancelSeriesBtn').onclick=()=>document.getElementById('seriesDialog').close();
document.getElementById('deleteSeriesBtn').onclick=()=>{ const id=document.getElementById('seriesId').value; if(confirm('Serie wirklich löschen?')){ state.series=state.series.filter(s=>s.id!==id); save(); document.getElementById('seriesDialog').close(); document.getElementById('detailDialog').close(); render(); } };
document.getElementById('seriesForm').onsubmit=e=>{ e.preventDefault(); const id=document.getElementById('seriesId').value; const counts=parseCounts(document.getElementById('seasonCountsInput').value); if(!counts.length) return alert('Bitte Staffel-Folgen angeben, z.B. 8,8,10'); let s=state.series.find(x=>x.id===id); if(!s){ s={id:crypto.randomUUID()}; state.series.push(s); } s.title=document.getElementById('titleInput').value.trim(); s.list=document.getElementById('listInput').value; s.status=document.getElementById('statusInput').value; s.imdb=document.getElementById('imdbInput').value.trim()||imdbFind(s.title); s.counts=counts; s.currentSeason=parseInt(document.getElementById('currentSeasonInput').value||0,10); s.currentEpisode=parseInt(document.getElementById('currentEpisodeInput').value||0,10); if(s.currentSeason>counts.length) s.currentSeason=counts.length; if(s.currentSeason>0 && s.currentEpisode>counts[s.currentSeason-1]) s.currentEpisode=counts[s.currentSeason-1]; s.dateMode=document.getElementById('dateModeInput').value; s.lastDate=s.dateMode==='today'?todayISO():(s.dateMode==='na'||s.dateMode==='none'?'':document.getElementById('lastDateInput').value); s.notes=document.getElementById('notesInput').value.trim(); syncStatus(s); s.updatedAt=Date.now(); save(); document.getElementById('seriesDialog').close(); document.getElementById('detailDialog').close(); render(); };
['searchInput','listFilter','statusFilter','sortSelect'].forEach(id=>document.getElementById(id).addEventListener('input',renderGrid));
document.querySelectorAll('.tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeTab=btn.dataset.list; document.getElementById('listFilter').value=''; renderGrid();});
document.getElementById('exportBtn').onclick=()=>{
  const date=todayISO();
  const exportState={...state, version:6, backupDate:date, exportedAt:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(exportState,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`serien-tracker-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
};
document.getElementById('importBtn').onclick=()=>document.getElementById('importFile').click();
document.getElementById('importFile').onchange=e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ try{ const data=JSON.parse(r.result); state={version:6, series:mergeWithSeed(data.series||data)}; save(); render(); alert('Backup importiert.'); }catch(err){ alert('Backup konnte nicht gelesen werden.'); } }; r.readAsText(f); };
render();
