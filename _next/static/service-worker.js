try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class c{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let a,c=i&&i.handler;if(!c&&this.s&&(c=this.s),c){try{a=c.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this.i&&(a=a.catch(n=>this.i.handle({url:s,request:e,event:t}))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const a=i.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new c,r.addFetchListener(),r.addCacheListener()),r);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||h(u.precache),f=e=>e||h(u.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(c,r)=>{const o=c.objectStore(e),u=t?o.index(t):o,h=[],l=u.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(h.push(a?e:e.value),i&&h.length>=i?r(h):e.continue()):r(h)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const a=this.o.transaction(e,t);a.onabort=()=>i(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const a=s.objectStore(t),c=a[e].apply(a,n);c.onsuccess=()=>i(c.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const b={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(b))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class y{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this._(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this._(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let c=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&c>=t?a.push(s.value):c++),s.continue()}else n(a)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}_(e){return this.m+"|"+g(e)}}class m{constructor(e,t={}){this.q=!1,this.R=!1,this.j=t.maxEntries,this.U=t.maxAgeSeconds,this.m=e,this.k=new y(e)}async expireEntries(){if(this.q)return void(this.R=!0);this.q=!0;const e=this.U?Date.now()-1e3*this.U:0,t=await this.k.expireEntries(e,this.j),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.q=!1,this.R&&(this.R=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.k.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.U){return await this.k.getTimestamp(e)<Date.now()-1e3*this.U}return!1}async delete(){this.R=!1,await this.k.expireEntries(1/0)}}const v=(e,t)=>e.filter(e=>t in e),x=async({request:e,mode:t,plugins:s=[]})=>{const n=v(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},q=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const a=await self.caches.open(e),c=await x({plugins:i,request:t,mode:"read"});let r=await a.match(c,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;r=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:c})}return r},R=async({cacheName:e,request:s,response:n,event:i,plugins:c=[],matchOptions:r})=>{const o=await x({plugins:c,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});const u=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return a||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:c,response:n,request:o});if(!u)return;const h=await self.caches.open(e),l=v(c,"cacheDidUpdate"),f=l.length>0?await q({cacheName:e,matchOptions:r,request:o}):null;try{await h.put(o,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:u,request:o})},j=q,U=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=v(i,"fetchDidFail"),c=a.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const k={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let L;async function N(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,a=function(){if(void 0===L){const e=new Response("");if("body"in e)try{new Response(e.body),L=!0}catch(e){L=!1}L=!1}return L}()?s.body:await s.blob();return new Response(a,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function M(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),a=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:a.href}}class T{constructor(e){this.m=l(e),this.L=new Map,this.N=new Map,this.M=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=M(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.L.has(i)&&this.L.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.L.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.M.has(e)&&this.M.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.M.set(e,n.integrity)}if(this.L.set(i,e),this.N.set(i,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),a=await i.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this.L)c.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const i=this.M.get(s),a=this.N.get(n);return this.T({cacheKey:s,cacheMode:a,event:e,integrity:i,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.L.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async T({cacheKey:e,url:s,cacheMode:n,event:i,plugins:a,integrity:c}){const r=new Request(s,{integrity:c,cache:n,credentials:"same-origin"});let o,u=await U({event:i,plugins:a,request:r});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:r,response:u}):u.status<400))throw new t("bad-precaching-response",{url:s,status:u.status});u.redirected&&(u=await N(u)),await R({event:i,plugins:a,response:u,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.L}getCachedURLs(){return[...this.L.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.L.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let E;const P=()=>(E||(E=new T),E);const K=(e,t)=>{const s=P().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let O=!1;function D(e){O||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",a=>{const c=K(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return;let r=self.caches.open(i).then(e=>e.match(c)).then(e=>e||fetch(c));a.respondWith(r)})})(e),O=!0)}const I=[],S={get:()=>I,add(e){I.push(...e)}},C=e=>{const t=P(),s=S.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},A=e=>{const t=P();e.waitUntil(t.activate())};var F;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),F={},function(e){P().addToCacheList(e),e.length>0&&(self.addEventListener("install",C),self.addEventListener("activate",A))}([{url:"/_next/../public/sw.js",revision:"8064212ebb09a76d08ca361debf60c4a"},{url:"/_next/../public/workbox-1846d813.js",revision:"36b4db292ef7f477e5e005240e9ba895"},{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/static/chunks/135-952e26cc678bdd43.js",revision:"44c481dd06634e41506f1978ee642d62"},{url:"/_next/static/chunks/385-72135642c75925c4.js",revision:"e44fc709e74f3e571bbcefe431841d95"},{url:"/_next/static/chunks/393-1424929865070d57.js",revision:"fa6a121c5305fd6866b6b61e898c1d11"},{url:"/_next/static/chunks/47-366b43f63f10b70b.js",revision:"2d5bba7fae5d2f856058b1592d2827d2"},{url:"/_next/static/chunks/472-87e65cdb0de355f5.js",revision:"d3f77937b9d6f113554bc19021fa86a5"},{url:"/_next/static/chunks/691-0f5785a4367e4f59.js",revision:"3792612d9d0b31a669521b02e966df91"},{url:"/_next/static/chunks/742-be88f05ba636872d.js",revision:"f37a5a5e47c5bd868179a79dd1a85e83"},{url:"/_next/static/chunks/framework-8dbce5f194cf5c28.js",revision:"86a102b62744225dc86ba38748fb10af"},{url:"/_next/static/chunks/main-8787d60cf63d4080.js",revision:"5483dbb231f048d5c7cc6513cf1376b9"},{url:"/_next/static/chunks/pages/404-51e1d2265dad096e.js",revision:"11bf17e44f242e6cd250da4c1be1cf47"},{url:"/_next/static/chunks/pages/[lang]-d8380e9ffe66d08b.js",revision:"c5c8edda306bbf22b4f519c89cb1c278"},{url:"/_next/static/chunks/pages/[lang]/aethor-a395da4259f5f519.js",revision:"7a71b587e82b0ea741c083d40a18052e"},{url:"/_next/static/chunks/pages/[lang]/aethor/[commands]-21a9f4bd5834916b.js",revision:"5fa5272429f762b3788b2351db2773c7"},{url:"/_next/static/chunks/pages/[lang]/aethor/invite-22e2ad2f4a809b40.js",revision:"8fe99255af03ed0aabb45db91760a61a"},{url:"/_next/static/chunks/pages/[lang]/aethor/support-c51cfb566945b80f.js",revision:"04d03718901dd1d9a62224f398057c80"},{url:"/_next/static/chunks/pages/[lang]/donating-e6b2a0b222d0d4be.js",revision:"a408db71a42f9b8de5fdeb3e1417dff8"},{url:"/_next/static/chunks/pages/[lang]/posts-7a28fba8986ef898.js",revision:"0945d78a30add32681744726f59d7814"},{url:"/_next/static/chunks/pages/[lang]/posts/[...post]-8477ed8aec34a79d.js",revision:"8e40c2cefc7ec53ed072c4204a4b1390"},{url:"/_next/static/chunks/pages/[lang]/projects-5b78f562efb437cd.js",revision:"4b60e76773efc4fea49f0b55bd648f13"},{url:"/_next/static/chunks/pages/[lang]/projects/[...project]-8fbcf27d5784e8aa.js",revision:"b3c4be8b3e88d2aed2952a636f647a47"},{url:"/_next/static/chunks/pages/[lang]/services-123aed4bf2dc0471.js",revision:"5e27529e116615b25cb6397d2c1acf8a"},{url:"/_next/static/chunks/pages/_app-f48fe45069a2ea8e.js",revision:"94f7c66b4524aa32d97fee0bc1c0b611"},{url:"/_next/static/chunks/pages/_error-8f217dcfc432571b.js",revision:"ce7c96c9da9d0ca7b168b3f8652df0a4"},{url:"/_next/static/chunks/pages/_offline-cec1e5e826d2d05f.js",revision:"f815920808cedb08e9438b5b43e77c8b"},{url:"/_next/static/chunks/pages/index-3df21c8c805bad91.js",revision:"f1707e022dcbd6f45675dac453dabb05"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-acce82745379e4a0.js",revision:"9e9f037d91416fbd7e4418920d76e826"},{url:"/_next/static/css/ec7b56b06f19d138.css",revision:"84856b029542762c7c7fe7846358f3bb"},{url:"/_next/static/tiYHT_YhP53sScUIuMF2d/_buildManifest.js",revision:"1ed288797df58aed8a05a99e77cbccaa"},{url:"/_next/static/tiYHT_YhP53sScUIuMF2d/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/tiYHT_YhP53sScUIuMF2d/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}]),D(F),function(e,s,a){let c;if("string"==typeof e){const t=new URL(e,location.href);c=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)c=new i(e,s,a);else if("function"==typeof e)c=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}o().registerRoute(c)}(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.P=t?e.plugins:[k,...e.plugins]}else this.P=[k];this.K=e.networkTimeoutSeconds||0,this.O=e.fetchOptions,this.D=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let a;if(this.K){const{id:t,promise:c}=this.I({request:s,event:e,logs:n});a=t,i.push(c)}const c=this.S({timeoutId:a,request:s,event:e,logs:n});i.push(c);let r=await Promise.race(i);if(r||(r=await c),!r)throw new t("no-response",{url:s.url});return r}I({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.C({request:e,event:s}))},1e3*this.K)}),id:n}}async S({timeoutId:e,request:t,logs:s,event:n}){let i,a;try{a=await U({request:t,event:n,fetchOptions:this.O,plugins:this.P})}catch(e){i=e}if(e&&clearTimeout(e),i||!a)a=await this.C({request:t,event:n});else{const e=a.clone(),s=R({cacheName:this.m,request:t,response:e,event:n,plugins:this.P});if(n)try{n.waitUntil(s)}catch(e){}}return a}C({event:e,request:t}){return j({cacheName:this.m,request:t,event:e,matchOptions:this.D,plugins:this.P})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.A(n),a=this.F(s);d(a.expireEntries());const c=a.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.F(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.H=e,this.U=e.maxAgeSeconds,this.W=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}F(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.W.get(e);return s||(s=new m(e,this.H),this.W.set(e,s)),s}A(e){if(!this.U)return!0;const t=this.B(e);if(null===t)return!0;return t>=Date.now()-1e3*this.U}B(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.W)await self.caches.delete(e),await t.delete();this.W=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
