try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class c extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const i=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:c}=this.findMatchingRoute({url:s,request:e,event:t});let i,a=c&&c.handler;if(!a&&this.s&&(a=this.s),a){try{i=a.handle({url:s,request:e,event:t,params:n})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this.i&&(i=i.catch(n=>this.i.handle({url:s,request:e,event:t}))),i}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const c of n){let n;const i=c.match({url:e,request:t,event:s});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:c,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new a,r.addFetchListener(),r.addCacheListener()),r);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),f=e=>e||h(u.precache),l=e=>e||h(u.runtime);function d(e){e.then(()=>{})}const p=new Set;class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:c,includeKeys:i=!1}={}){return await this.transaction([e],"readonly",(a,r)=>{const o=a.objectStore(e),u=t?o.index(t):o,h=[],f=u.openCursor(s,n);f.onsuccess=()=>{const e=f.result;e?(h.push(i?e:e.value),c&&h.length>=c?r(h):e.continue()):r(h)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,c)=>{const i=this.o.transaction(e,t);i.onabort=()=>c(i.error),i.oncomplete=()=>n(),s(i,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,c)=>{const i=s.objectStore(t),a=i[e].apply(i,n);a.onsuccess=()=>c(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}w.prototype.OPEN_TIMEOUT=2e3;const b={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(b))for(const s of t)s in IDBObjectStore.prototype&&(w.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class y{constructor(e){this.m=e,this.o=new w("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this._(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this._(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const c=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),i=[];let a=0;c.onsuccess=()=>{const s=c.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?i.push(s.value):a++),s.continue()}else n(i)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}_(e){return this.m+"|"+g(e)}}class m{constructor(e,t={}){this.q=!1,this.R=!1,this.j=t.maxEntries,this.k=t.maxAgeSeconds,this.m=e,this.U=new y(e)}async expireEntries(){if(this.q)return void(this.R=!0);this.q=!0;const e=this.k?Date.now()-1e3*this.k:0,t=await this.U.expireEntries(e,this.j),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.q=!1,this.R&&(this.R=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.U.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.k){return await this.U.getTimestamp(e)<Date.now()-1e3*this.k}return!1}async delete(){this.R=!1,await this.U.expireEntries(1/0)}}try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}class v{constructor(e={}){this.L=e.statuses,this.N=e.headers}isResponseCacheable(e){let t=!0;return this.L&&(t=this.L.includes(e.status)),this.N&&t&&(t=Object.keys(this.N).some(t=>e.headers.get(t)===this.N[t])),t}}const x=(e,t)=>e.filter(e=>t in e),q=async({request:e,mode:t,plugins:s=[]})=>{const n=x(s,"cacheKeyWillBeUsed");let c=e;for(const e of n)c=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:c}),"string"==typeof c&&(c=new Request(c));return c},R=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:c=[]})=>{const i=await self.caches.open(e),a=await q({plugins:c,request:t,mode:"read"});let r=await i.match(a,n);for(const t of c)if("cachedResponseWillBeUsed"in t){const c=t.cachedResponseWillBeUsed;r=await c.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:a})}return r},j=async({cacheName:e,request:s,response:n,event:c,plugins:a=[],matchOptions:r})=>{const o=await q({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:i(o.url)});const u=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let c=t,i=!1;for(const t of n)if("cacheWillUpdate"in t){i=!0;const n=t.cacheWillUpdate;if(c=await n.call(t,{request:e,response:c,event:s}),!c)break}return i||(c=c&&200===c.status?c:void 0),c||null})({event:c,plugins:a,response:n,request:o});if(!u)return;const h=await self.caches.open(e),f=x(a,"cacheDidUpdate"),l=f.length>0?await R({cacheName:e,matchOptions:r,request:o}):null;try{await h.put(o,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of p)await e()}(),e}for(const t of f)await t.cacheDidUpdate.call(t,{cacheName:e,event:c,oldResponse:l,newResponse:u,request:o})},k=R,U=async({request:e,fetchOptions:s,event:n,plugins:c=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const i=x(c,"fetchDidFail"),a=i.length>0?e.clone():null;try{for(const t of c)if("requestWillFetch"in t){const s=t.requestWillFetch,c=e.clone();e=await s.call(t,{request:c,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of c)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of i)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const L={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let N;async function E(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},c=t?t(n):n,i=function(){if(void 0===N){const e=new Response("");if("body"in e)try{new Response(e.body),N=!0}catch(e){N=!1}N=!1}return N}()?s.body:await s.blob();return new Response(i,c)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function K(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const c=new URL(n,location.href),i=new URL(n,location.href);return c.searchParams.set("__WB_REVISION__",s),{cacheKey:c.href,url:i.href}}class M{constructor(e){this.m=f(e),this.K=new Map,this.M=new Map,this.O=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:c}=K(n),i="string"!=typeof n&&n.revision?"reload":"default";if(this.K.has(c)&&this.K.get(c)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.K.get(c),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.O.has(e)&&this.O.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:c});this.O.set(e,n.integrity)}if(this.K.set(c,e),this.M.set(c,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],c=await self.caches.open(this.m),i=await c.keys(),a=new Set(i.map(e=>e.url));for(const[e,t]of this.K)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const c=this.O.get(s),i=this.M.get(n);return this.T({cacheKey:s,cacheMode:i,event:e,integrity:c,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.K.values()),n=[];for(const c of t)s.has(c.url)||(await e.delete(c),n.push(c.url));return{deletedURLs:n}}async T({cacheKey:e,url:s,cacheMode:n,event:c,plugins:i,integrity:a}){const r=new Request(s,{integrity:a,cache:n,credentials:"same-origin"});let o,u=await U({event:c,plugins:i,request:r});for(const e of i||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:c,request:r,response:u}):u.status<400))throw new t("bad-precaching-response",{url:s,status:u.status});u.redirected&&(u=await E(u)),await j({event:c,plugins:i,response:u,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.K}getCachedURLs(){return[...this.K.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.K.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),c=new Request(e);return()=>n({request:c})}}let O;const T=()=>(O||(O=new M),O);const P=(e,t)=>{const s=T().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:c}={}){const i=new URL(e,location.href);i.hash="",yield i.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(i,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(c){const e=c({url:i});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let S=!1;function D(e){S||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const c=f();self.addEventListener("fetch",i=>{const a=P(i.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let r=self.caches.open(c).then(e=>e.match(a)).then(e=>e||fetch(a));i.respondWith(r)})})(e),S=!0)}const C=[],A={get:()=>C,add(e){C.push(...e)}},I=e=>{const t=T(),s=A.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},W=e=>{const t=T();e.waitUntil(t.activate())};var Q;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),Q={},function(e){T().addToCacheList(e),e.length>0&&(self.addEventListener("install",I),self.addEventListener("activate",W))}([{url:"/_next/../public/sw.js",revision:"1c5f55c9efd231923cf8605fff5fac2c"},{url:"/_next/../public/workbox-22294e6b.js",revision:"10d0caf39608dc7e55062340c0c8e029"},{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/static/ZOEVJb1zjS4Q09KkQhJ_s/_buildManifest.js",revision:"8bfc78386460bfce85b000cf7c734f6e"},{url:"/_next/static/ZOEVJb1zjS4Q09KkQhJ_s/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/ZOEVJb1zjS4Q09KkQhJ_s/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/24-f10a8cdcce4b193d.js",revision:"a7f1cc78511ef575d3e869303013bdf5"},{url:"/_next/static/chunks/385-fb14553188a7cecc.js",revision:"b58e4bb6f1a3123c840aaf95ac400aad"},{url:"/_next/static/chunks/439-6147c516e7775d53.js",revision:"809b55d00f8ce17e09d8be05f3e6423d"},{url:"/_next/static/chunks/466-1c16be37505c67ca.js",revision:"0be932c7c6f5b41d485631e95dc80e5f"},{url:"/_next/static/chunks/496-a03b39a6dd0b99a1.js",revision:"9df4e736d946df8c78932aa7e843104c"},{url:"/_next/static/chunks/511-74dc77e102a54daf.js",revision:"59931d6e9991b24b9043fe0591172611"},{url:"/_next/static/chunks/691-c53be285ee748e43.js",revision:"26e89c4d3450a7d8a56cf55e7405db2f"},{url:"/_next/static/chunks/781-3498e194e440ad33.js",revision:"5b94e7fe70dbf0cfa8391d48f578ce4c"},{url:"/_next/static/chunks/7e4bc21f-a663631b8493ca2b.js",revision:"cad79f674c34c8367d4acaeebe188879"},{url:"/_next/static/chunks/841-80a566e4b80547e5.js",revision:"56d0a9b77e7f882cd79f1c3b337c149c"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"ebfa7545bbc0cb03aa824de5bb5defe6"},{url:"/_next/static/chunks/main-b4fd2002501d885b.js",revision:"c722c0a37289b8a7c1cfb9ab453c5c02"},{url:"/_next/static/chunks/pages/404-d8aaf2212993ca04.js",revision:"8c955b260b687b01688d5d65331fce39"},{url:"/_next/static/chunks/pages/_app-6be943b11d5dcb52.js",revision:"772217c2816ac2cd7884cf1ad416b190"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"66a54eebfe4647af5ccd0ddebae9c60c"},{url:"/_next/static/chunks/pages/_offline-fd10b14e475a5ae9.js",revision:"e9ef4ea71f7e784c9972866f34bd8a53"},{url:"/_next/static/chunks/pages/aethor-52a361201ac4d01c.js",revision:"182699bc0e0a605b62a3a0790d4e9a18"},{url:"/_next/static/chunks/pages/aethor/[commands]-b6ba2f29941c77d4.js",revision:"49700c7d9a1a8e80caaf2bd888ebb60c"},{url:"/_next/static/chunks/pages/aethor/invite-7e0b5cbd825b8c99.js",revision:"2b439c4c68249f5bfa4fd73d3191c371"},{url:"/_next/static/chunks/pages/aethor/support-cf5474fc46dddbbd.js",revision:"a878a8ed37f982a28008235289b0bd11"},{url:"/_next/static/chunks/pages/bridger-3b778a8a19679bfd.js",revision:"e657e994aa16f5b80322365fbcf5f1ee"},{url:"/_next/static/chunks/pages/diplo-7fd3ea0ea7d7ccc4.js",revision:"07b0ba39add335285d2e0937092c6e05"},{url:"/_next/static/chunks/pages/diplo/[...doc]-b5e3d86117029e48.js",revision:"2fa577ff87ba10d1a356fac6a06c9448"},{url:"/_next/static/chunks/pages/discord-31a64a5487aac34c.js",revision:"cdca0a116695bfde57c847fc2da983b7"},{url:"/_next/static/chunks/pages/donating-3addd1acde48b0e6.js",revision:"74656b6c1a7ef29bec7bc3c9c6d5ddd0"},{url:"/_next/static/chunks/pages/github-bf70fe99a861969d.js",revision:"43192bd1fd220da1083e227384c204c0"},{url:"/_next/static/chunks/pages/index-b416d92c00eeab6c.js",revision:"cacc84a7ff8391c8cb90fc1f692e04b6"},{url:"/_next/static/chunks/pages/matrix-13c09c119e0d4f16.js",revision:"344620eadf064274a605a49dbe804eb3"},{url:"/_next/static/chunks/pages/posts-adcd0f30a00d60fe.js",revision:"96f1aad834e2ca268650440223e268fb"},{url:"/_next/static/chunks/pages/posts/[...post]-ba840f85097ec505.js",revision:"cb42b915acab9ba48b881d8e4b8129ad"},{url:"/_next/static/chunks/pages/projects-7c756c9d6c320a09.js",revision:"4f714773a0983a10e5befeab727be124"},{url:"/_next/static/chunks/pages/projects/[...project]-ff18c1f69277332b.js",revision:"07af4a717269dbca82b07fd2afa305bd"},{url:"/_next/static/chunks/pages/services-082eb6cecde7d331.js",revision:"38df43eb8f0ed9cbe575af631345050a"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-f8fe1f0eb2299c5d.js",revision:"95cc88b5ff2c5bb848cc136805a35ce2"},{url:"/_next/static/css/c2174923b9667221.css",revision:"6db6f940c1f4bc353c59aca7923e9d7f"}]),D(Q),function(e,s,i){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,i)}else if(e instanceof RegExp)a=new c(e,s,i);else if("function"==typeof e)a=new n(e,s,i);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}o().registerRoute(a)}(/^https?.*/,new class{constructor(e={}){if(this.m=l(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.P=t?e.plugins:[L,...e.plugins]}else this.P=[L];this.S=e.networkTimeoutSeconds||0,this.D=e.fetchOptions,this.C=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const c=[];let i;if(this.S){const{id:t,promise:a}=this.A({request:s,event:e,logs:n});i=t,c.push(a)}const a=this.I({timeoutId:i,request:s,event:e,logs:n});c.push(a);let r=await Promise.race(c);if(r||(r=await a),!r)throw new t("no-response",{url:s.url});return r}A({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.W({request:e,event:s}))},1e3*this.S)}),id:n}}async I({timeoutId:e,request:t,logs:s,event:n}){let c,i;try{i=await U({request:t,event:n,fetchOptions:this.D,plugins:this.P})}catch(e){c=e}if(e&&clearTimeout(e),c||!i)i=await this.W({request:t,event:n});else{const e=i.clone(),s=j({cacheName:this.m,request:t,response:e,event:n,plugins:this.P});if(n)try{n.waitUntil(s)}catch(e){}}return i}W({event:e,request:t}){return k({cacheName:this.m,request:t,event:e,matchOptions:this.C,plugins:this.P})}}({cacheName:"https-calls",networkTimeoutSeconds:15,plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const c=this.B(n),i=this.F(s);d(i.expireEntries());const a=i.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return c?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.F(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.H=e,this.k=e.maxAgeSeconds,this.J=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),p.add(t))}F(e){if(e===l())throw new t("expire-custom-caches-only");let s=this.J.get(e);return s||(s=new m(e,this.H),this.J.set(e,s)),s}B(e){if(!this.k)return!0;const t=this.V(e);if(null===t)return!0;return t>=Date.now()-1e3*this.k}V(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.J)await self.caches.delete(e),await t.delete();this.J=new Map}}({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this.G.isResponseCacheable(e)?e:null,this.G=new v(e)}}({statuses:[0,200]})]}),"GET");