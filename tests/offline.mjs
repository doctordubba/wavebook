import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),scope='https://example.test/wavebook/';
const listeners={},stores=new Map(),calls=[];
function cacheFor(key){if(!stores.has(key))stores.set(key,new Map());const s=stores.get(key);return {addAll:async requests=>{for(const r of requests){const filename=new URL(r.url).pathname.replace('/wavebook/','');assert.ok(fs.existsSync(path.join(root,filename)),filename);s.set(r.url,new Response(fs.readFileSync(path.join(root,filename))));}},match:async key=>s.get(typeof key==='string'?key:key.url)?.clone(),put:async(key,response)=>s.set(typeof key==='string'?key:key.url,response.clone())};}
let network=false,claimed=0,skipped=0;
const context=vm.createContext({self:{registration:{scope},addEventListener:(key,fn)=>listeners[key]=fn,skipWaiting:async()=>skipped++,clients:{claim:async()=>claimed++}},caches:{open:async key=>cacheFor(key),keys:async()=>[...stores.keys()],delete:async key=>stores.delete(key)},URL,Request,Response,AbortController,setTimeout,clearTimeout,fetch:async request=>{calls.push(request.url);if(!network)throw Error('offline');return new Response('updated online app');}});
vm.runInContext(fs.readFileSync(path.join(root,'sw.js'),'utf8'),context);
stores.set('unrelated-cache',new Map());stores.set('wavebook-shell:'+scope+':old',new Map());
async function runEvent(type,event={}){let work;listeners[type]({...event,waitUntil:p=>work=p});await work;}
await runEvent('install');assert.equal(skipped,1);await runEvent('activate');assert.equal(claimed,1);assert.ok(stores.has('unrelated-cache'));assert.ok(!stores.has('wavebook-shell:'+scope+':old'));
async function request(url,mode='cors'){let response;listeners.fetch({request:{url,method:'GET',mode},respondWith:p=>response=p});return response?await response:undefined;}
let response=await request(scope,'navigate');assert.ok((await response.text()).includes('assets/app-v3.js'));
response=await request(scope+'assets/app-v3.js');assert.ok((await response.text()).includes('class Workspace'));const fetches=calls.length;
network=true;response=await request(scope+'assets/app-v3.js');assert.ok((await response.text()).includes('class Workspace'));assert.equal(calls.length,fetches,'Versioned asset uses cached bundle');
response=await request(scope,'navigate');assert.equal(await response.text(),'updated online app');network=false;response=await request(scope,'navigate');assert.equal(await response.text(),'updated online app');
assert.equal(await request('https://source.example/guide'),undefined);assert.equal(await request(scope+'tests/responsive.html','navigate'),undefined);
console.log('PASS offline bundle, scoped cleanup, navigation updates, cache fallback and unrelated requests');
