import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
// Test fixture only: no browser automation or runtime dependency.
const {parseHTML}=require(process.env.WAVEBOOK_DOM_MODULE||'linkedom');
const root=path.resolve(import.meta.dirname,'..');
const {window,document}=parseHTML('<!doctype html><html><body><div id="fixture"></div></body></html>');
const saved=new Map(),events=new Map();
const context=vm.createContext({window,document,module:{exports:{}},localStorage:{getItem:k=>saved.get(k)||null,setItem:(k,v)=>saved.set(k,v)},location:{hash:'#overview',search:'',protocol:'https:'},navigator:{},URL,URLSearchParams,Blob,console,setTimeout:(fn,t)=>{const x=setTimeout(fn,Math.min(t,5));x.unref();return x;},clearTimeout});
window.scrollTo=()=>{};window.confirm=()=>true;

for(const f of ['preact-v1.js','data-v3.js','app-v3.1.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets',f),'utf8'),context,{filename:f});
const api=context.module.exports;
const plain=x=>JSON.parse(JSON.stringify(x));
let checks=0;
function check(name,fn){fn();checks++;console.log('PASS',name);}
check('18 complete guides and role-specific routes',()=>{
 assert.equal(api.DATA.characters.length,18);
 for(const c of api.DATA.characters){assert.ok(c.guide.focus&&c.guide.weapon&&c.guide.source.startsWith('https://'));assert.ok(Object.keys(c.benchmarks).length);for(const p of c.presets){assert.equal(p.mains.length,5);assert.ok(p.costs.reduce((a,b)=>a+b,0)<=12);assert.equal(p.talents.length,5);assert.ok(api.routeFor(c,p).length>=3,`${c.id}/${p.id}`);}}
});
check('older backups retain ownership, S2, goals, notes, checks and stats',()=>{
 const old=plain(api.makeDefault());delete old.customSquads;delete old.lastBackup;
 for(const r of Object.values(old.profiles)){delete r.statsByPreset;delete r.statsPreset;delete r.stats.atk;delete r.stats.def;delete r.stats.critDmg;}
 old.profiles.iuno.notes='Keep my tested route';old.profiles.iuno.checks.inherents=true;old.profiles.iuno.stats.er='128';
 const next=api.cleanImport(old);assert.equal(next.profiles.lucy.sequence,'2');assert.equal(next.profiles.iuno.targetSequence,'2');assert.equal(next.profiles.iuno.notes,'Keep my tested route');assert.equal(next.profiles.iuno.checks.inherents,true);assert.equal(next.profiles.iuno.stats.er,'128');assert.deepEqual(plain(next.customSquads),[null,null,null,null]);
});
check('malformed backups are rejected and unsafe values are sanitized',()=>{
 assert.throws(()=>api.cleanImport({schemaVersion:2}),/backup/);
 const raw=plain(api.makeDefault());raw.customSquads=[['__proto__','jingran','bogus'],{},['jinhsi','hsin','shorekeeper']];raw.profiles.jingran.stats.hp='Infinity';raw.profiles.jingran.stats.er='-10';raw.profiles.jingran.stats.crit='130';raw.profiles.jingran.notes='x'.repeat(6000);raw.favorites=['__proto__','iuno','iuno'];
 const next=api.cleanImport(raw);assert.equal(next.profiles.jingran.stats.hp,'');assert.equal(next.profiles.jingran.stats.er,'');assert.equal(next.profiles.jingran.stats.crit,'');assert.equal(next.profiles.jingran.notes.length,5000);assert.deepEqual(plain(next.favorites),['iuno']);assert.deepEqual(plain(next.customSquads[0]),['','jingran','']);
});
check('ER, Crit cap and average Crit arithmetic preserve unknowns',()=>{
 const s=api.makeDefault();let x=api.statSummary(api.DB.shorekeeper,s);assert.equal(x.er,null);assert.equal(x.averageCrit,null);
 Object.assign(s.profiles.shorekeeper.stats,{er:'230',extraER:'20',crit:'80',extraCrit:'30',critDmg:'250'});x=api.statSummary(api.DB.shorekeeper,s);assert.equal(x.er,250);assert.equal(x.crit,110);assert.equal(x.averageCrit,2.5);assert.ok(api.upgradeAction(api.DB.shorekeeper,s).includes('overcapped'));
 Object.assign(s.profiles.jingran.stats,{hp:'42000',er:'120'});assert.ok(api.upgradeAction(api.DB.jingran,s).includes('8,000'));
});
check('team checks detect repeated members, sustain and mode mismatches',()=>{
 const s=api.makeDefault();s.customSquads[0]=['hsin','lynae','jingran'];s.profiles.hsin.preset='unison';let issues=api.teamIssues(api.squadAt(s,0),s);assert.ok(issues.some(x=>x.text.includes('sustain')));assert.ok(issues.some(x=>x.text.includes('Unison')));
 s.customSquads[0]=['jingran','jingran','shorekeeper'];assert.ok(api.teamIssues(api.squadAt(s,0),s).some(x=>x.text.includes('twice')));assert.ok(api.squadConflicts(s).some(([id])=>id==='jingran'));
 s.customSquads[0]=['aemeath','denia','chisa'];s.profiles.aemeath.preset='fusion';s.profiles.denia.preset='tune';assert.ok(api.teamIssues(api.squadAt(s,0),s).some(x=>x.text.includes('different modes')));
 s.profiles.chisa.preset='healer';s.profiles.denia.preset='fusion';assert.equal(api.teamIssues(api.squadAt(s,0),s).filter(x=>x.kind==='warning').length,0);
});
const app=new api.Workspace({});
app.setState=(patch,cb)=>{app.state={...app.state,...(typeof patch==='function'?patch(app.state):patch)};cb?.();};
check('changing presets preserves separate recorded loadouts',()=>{
 app.setStat('iuno','er','128');app.setPreset('iuno','carry');assert.equal(app.state.store.profiles.iuno.stats.er,'');app.setStat('iuno','er','110');app.setPreset('iuno','hybrid');assert.equal(app.state.store.profiles.iuno.stats.er,'128');app.setPreset('iuno','carry');assert.equal(app.state.store.profiles.iuno.stats.er,'110');
 const roundtrip=api.cleanImport(plain(app.state.store));assert.equal(roundtrip.profiles.iuno.statsByPreset.hybrid.er,'128');assert.equal(roundtrip.profiles.iuno.statsByPreset.carry.er,'110');app.setPreset('iuno','hybrid');app.setStat('iuno','er','129');app.undoLast();assert.equal(app.state.store.profiles.iuno.preset,'carry');assert.equal(app.state.store.profiles.iuno.statsByPreset.hybrid.er,'129');
});
check('editing, clearing, template replacement and undo preserve custom teams',()=>{
 app.editMember(0,1,'lynae');app.updateProfile('jingran',{notes:'Keep this note after Undo'});assert.equal(api.squadAt(app.state.store,0).members[1],'lynae');app.undoLast();assert.equal(api.squadAt(app.state.store,0).members[1],'iuno');assert.equal(app.state.store.profiles.jingran.notes,'Keep this note after Undo');app.editMember(0,1,'rebecca');const clean=api.cleanImport(plain(app.state.store));assert.equal(api.squadAt(clean,0).members[1],'rebecca');app.assignTeam(0,'jingran-core');assert.equal(app.state.store.customSquads[0],null);app.assignTeam(0,'');assert.equal(api.squadAt(app.state.store,0),null);
});
const render=vm.runInContext('Preact.render',context),fixture=document.getElementById('fixture');
check('all pages and all character sections render usable content',()=>{
 app.state.store=api.makeDefault();
 for(const view of ['overview','roster','teams','echoes','rotation','compare','planner','reference']){app.state.view=view;render(app.render(),fixture);assert.ok(fixture.textContent.length>300,view);assert.ok(fixture.querySelector('main'),view);}
 for(const c of api.DATA.characters)for(const tab of ['build','teams','rotation','progress','sources']){app.state={...app.state,view:'character',character:c.id,tab};render(app.render(),fixture);assert.ok(fixture.textContent.includes(c.name),`${c.id}/${tab}`);if(tab==='progress')assert.equal(fixture.querySelectorAll('.stat-checker input').length,8);}
});
check('all practice presets and opener/loop phases render without stale diagnostics',()=>{
 app.state.view='rotation';for(const c of api.DATA.characters)for(const p of c.presets)for(const phase of ['opener','loop']){app.state.store.profiles[c.id].preset=p.id;app.state.rotationId=c.id;app.state.practicePhase=phase;app.state.step=0;render(app.render(),fixture);assert.ok(fixture.querySelector('.action-box')?.textContent.length>5,`${c.id}/${p.id}/${phase}`);}
});
check('search, ownership, role filters and sorting remain combinable',()=>{
 app.state={...app.state,query:'Bell-Borne',role:'All',element:'All',ownedOnly:false,sort:'name'};assert.ok(app.filteredCharacters().some(c=>c.id==='iuno'));
 app.state={...app.state,query:'',ownedOnly:true};assert.deepEqual(plain(app.filteredCharacters().map(c=>c.id)),['lucy']);
 app.state={...app.state,ownedOnly:false,role:'Sustain'};assert.ok(app.filteredCharacters().some(c=>c.id==='chisa'));
});
check('all linked app assets and offline pre-cache entries exist',()=>{
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const match of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))assert.ok(fs.existsSync(path.join(root,match[1])),match[1]);
 const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');for(const f of ['assets/preact-v1.js','assets/data-v3.js','assets/app-v3.1.js','assets/styles-v3.css','assets/workspace-v3.1.css','assets/original-report.pdf'])assert.ok(sw.includes(f),f);
 assert.ok(fs.readFileSync(path.join(root,'assets/original-report.pdf')).subarray(0,4).toString()==='%PDF');
});
console.log(`\n${checks} checks passed.`);
