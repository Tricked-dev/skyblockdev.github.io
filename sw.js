if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts("fallback-Hfk3G53PpER1jYY-vGunM.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/Hfk3G53PpER1jYY-vGunM/_buildManifest.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/Hfk3G53PpER1jYY-vGunM/_middlewareManifest.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/Hfk3G53PpER1jYY-vGunM/_ssgManifest.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/24-c22bef1d0f4622b3.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/256-1b382ad00be16bfd.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/385-b3bb2bdabe0e93f4.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/466-af1385cd6720dee9.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/557-dc3077b9214c1922.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/726-853050ef38501f26.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/797-73b1b9f991150219.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/7e4bc21f-f21ba96da8689809.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/920-f8be4ff493e7821f.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/951-048cbdfb3f94bfa6.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/framework-33299f356f3911e5.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/main-dfb9ecca75fbf13f.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/404-0b8f98e4942a4646.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/_app-c0b7119c3f5aafc0.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/_offline-e6018d56141716c1.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/aethor-795b82b132b5f336.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/aethor/%5Bcommands%5D-8280418e2052677a.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/aethor/invite-9d91ddfd510c5240.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/aethor/support-dbafd385ff5dbfa5.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/bridger-6efebc40bea5d6d8.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/diplo-59b1879beba56662.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/diplo/%5B...doc%5D-ad8c4b6b9801bb8b.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/discord-a8368f8d9dad5e49.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/donating-2f2bff8c779b7544.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/github-bf80ca32070207f8.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/index-e6e5403c1a570103.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/matrix-5b910fba9d27af22.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/posts-49f707e32720c5d6.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/posts/%5B...post%5D-1ef5769ebd24dab9.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/pages/projects-46dbd311375fb5c8.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/chunks/webpack-f8fe1f0eb2299c5d.js",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_next/static/css/729f917aadefb594.css",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/_offline",revision:"Hfk3G53PpER1jYY-vGunM"},{url:"/aethor.ico",revision:"b9a8f527d7d0c4657403f10549a10309"},{url:"/aethor.png",revision:"8e75687888b501ea8de7d1251e32e896"},{url:"/assets/icons/android-icon-144x144.png",revision:"063676d9db98c6f5458df18023563972"},{url:"/assets/icons/android-icon-192x192.png",revision:"535f73bca0411bee1780be38a4a8f22f"},{url:"/assets/icons/android-icon-36x36.png",revision:"72dfc35efb4a00bb9d79990bffd3deb3"},{url:"/assets/icons/android-icon-48x48.png",revision:"ed98099bbcb1710c301c31ac0f7f09cc"},{url:"/assets/icons/android-icon-72x72.png",revision:"9497a1042bdb7b4e88db5f98c0c19f36"},{url:"/assets/icons/android-icon-96x96.png",revision:"58aad480d44f02783ca7787118ec7470"},{url:"/assets/icons/apple-icon-114x114.png",revision:"c6a43869ea7c39df827794deb6b04860"},{url:"/assets/icons/apple-icon-120x120.png",revision:"db08dbfa98c026854a063052940e725f"},{url:"/assets/icons/apple-icon-144x144.png",revision:"da0492ba1d267c7efbcdcc5d200eeea2"},{url:"/assets/icons/apple-icon-152x152.png",revision:"0467ff6306e5e42891fca6307b6e8d19"},{url:"/assets/icons/apple-icon-180x180.png",revision:"8ca1be4f0f0e353fd6bfb26ea2b31a04"},{url:"/assets/icons/apple-icon-57x57.png",revision:"5a57d64d15602f17d8c2fa428b3efca1"},{url:"/assets/icons/apple-icon-60x60.png",revision:"8f8b66f22609b62ec20cbdfb3a8c4add"},{url:"/assets/icons/apple-icon-72x72.png",revision:"3560222ae9ef7507f3d27bbc621393c4"},{url:"/assets/icons/apple-icon-76x76.png",revision:"699d89970ff1f6f6b20b319762cb2fdc"},{url:"/assets/icons/apple-icon-precomposed.png",revision:"d1f4dff97538e546f523c97721d4edf1"},{url:"/assets/icons/apple-icon.png",revision:"d1f4dff97538e546f523c97721d4edf1"},{url:"/assets/icons/favicon-16x16.png",revision:"0ae30ed68168a850a74be667bf7de953"},{url:"/assets/icons/favicon-32x32.png",revision:"9f094b68cd7a1cbf149789ce348307c9"},{url:"/assets/icons/favicon-96x96.png",revision:"d03678d36bcdc8982bff7b963c73dd22"},{url:"/assets/icons/favicon.ico",revision:"1ed12b0bf3222567eff48a5bbee36734"},{url:"/assets/icons/icon-128x128.png",revision:"86b1dd0df6780adbf59c69c611f4939e"},{url:"/assets/icons/icon-144x144.png",revision:"851b0ad40a7315868319802cdbe0f13d"},{url:"/assets/icons/icon-152x152.png",revision:"22b2e2c49ebf112f2e0de84fd63a8cfb"},{url:"/assets/icons/icon-192x192.png",revision:"2921593d74dc922409df1380f9afed5e"},{url:"/assets/icons/icon-384x384.png",revision:"684f42c80f77b11aff161c71c28ea9bb"},{url:"/assets/icons/icon-48x48.png",revision:"e2d2549d67623bc9dca4a9e8a81f7ec8"},{url:"/assets/icons/icon-512x512.png",revision:"25289939f1204b8b3c2e910bbd838e66"},{url:"/assets/icons/icon-72x72.png",revision:"6f5f88940358c4a3b6961ba3e8b1e1f1"},{url:"/assets/icons/icon-96x96.png",revision:"8b86c21df4f5d3f0c7e7c9694802ad95"},{url:"/assets/icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/assets/icons/ms-icon-144x144.png",revision:"da0492ba1d267c7efbcdcc5d200eeea2"},{url:"/assets/icons/ms-icon-150x150.png",revision:"0f8062a1195c9224348510346dca883c"},{url:"/assets/icons/ms-icon-310x310.png",revision:"1089bcd789b991127212d7eeda5ad229"},{url:"/assets/icons/ms-icon-70x70.png",revision:"f2a03adf6910f5834f2a0ebb3698206c"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/eth.png",revision:"3c2184e5ee0684727cb90bdb129d52b6"},{url:"/favicon.ico",revision:"be1926d71fe6a3b3912d950776d9b056"},{url:"/images/aethor.png",revision:"d5868860b84be2a0bc6ccf3523b32249"},{url:"/images/diplo.png",revision:"ec888c2808a47a9c359c859722bafb33"},{url:"/images/diplo_cover.png",revision:"69d030387537e55b9f56c391a62e6653"},{url:"/images/doomfetch.png",revision:"841de3cb26c8700be8e05cbaf86b9a38"},{url:"/images/linuxcommands.png",revision:"38c6a0d3d4b16e48709350add83f4a62"},{url:"/images/lowestbins.png",revision:"9f77beaaf9136d026e6c99e821abd837"},{url:"/images/malil.png",revision:"ed83342b2406a5c2a216b095cc7d8cc8"},{url:"/images/natico.png",revision:"976adb40dba0fead4905f6aae1f5b728"},{url:"/images/redditbot.png",revision:"01d9ee2be36bde58f9a6629576b5be88"},{url:"/images/scriptbot.png",revision:"6ccf5c0b4aaaa229d1e3cbf1f5aa2a44"},{url:"/images/soggaimages.png",revision:"141299ad09df8069ca2fc82563fd5679"},{url:"/images/texter.png",revision:"f01c7568d3b387f9e9e1887a25f21ffd"},{url:"/images/timages.png",revision:"e73f18ef657f6bdcb497c315aa8fc7c3"},{url:"/images/website.png",revision:"07ab1f5988a6efaa93f73ac233f01098"},{url:"/manifest.json",revision:"502de52fe576fdf6c6c5ee3679f926e9"},{url:"/robots.txt",revision:"cd1eb4b2ef627e46c744b2dc22b98c47"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
