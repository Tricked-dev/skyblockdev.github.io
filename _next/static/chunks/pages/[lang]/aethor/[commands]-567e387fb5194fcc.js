(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{6725:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/aethor/[commands]",function(){return n(7056)}])},363:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(385);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=[{name:"Commands",route:"/aethor/general"},{name:"Invite",route:"/aethor/invite"},{name:"Support",route:"/aethor/support"},{name:"Back to main page",route:"/"}],c={title:"Aethor",description:"Aethor is the best discord bot for all your needs",type:"website",themeColor:"#317EFB",keywords:"discord bot discordbot aethor tricked.pro",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"};function s(e){var t=e.children;return(0,r.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({Links:a,TextValue:"Aethor"},c,{children:t}))}},385:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5893),o=n(9008),i=n(1163),a=n(8527),c=n(7375),s=n(949),l=n(5113),d=n(1664);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.children,n=e.href,o=(e.currentPath,e.lang),c=void 0===o?"en":o,s=(e.active,h(e,["children","href","currentPath","lang","active"])),l=(0,i.useRouter)(),u=[l.asPath.endsWith("/")?l.asPath:"".concat(l.asPath,"/"),"/".concat(c).concat(n).endsWith("/")?"/".concat(c).concat(n):"/".concat(c).concat(n,"/")],p=u[0]===u[1];return(0,r.jsx)(d.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(n),as:"/".concat(c).concat(n),children:(0,r.jsx)(a.rU,m({fontSize:"larger",p:"3",rounded:"md",borderBottom:"4px",borderBottomColor:p?"green.600":"gray.600",roundedBottom:"none",borderRadius:"none",className:"hover:bg-gray-700"},s,{children:t}))})},x=n(9876),f=n(7294),j=n(5135),g=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],b=function(e){var t=e.links,n=void 0===t?g:t,o=e.lang,d=void 0===o?"en":o,u=e.TextValue,m=void 0===u?"Tricked.pro":u,h=(0,c.qY)(),b=h.isOpen,y=h.onOpen,v=h.onClose,w=(0,s.If)(),k=w.colorMode,O=w.toggleColorMode,P=(0,i.useRouter)(),T=(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(p,{lang:d,href:e.route,active:P.pathname==e.route,children:e.name},e.name)}))});return(0,f.useEffect)((function(){window.document&&("light"==k?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.xu,{as:s.t7,borderTop:"2px",borderTopColor:"green.500",width:"100%",bg:"gray.900",py:"1",children:[(0,r.jsxs)(a.kC,{alignItems:"center",justifyContent:"space-between",py:"1",px:"5",children:[(0,r.jsx)(l.hU,{size:"md",icon:b?(0,r.jsx)(x.Tw,{}):(0,r.jsx)(x.Uq,{}),"aria-label":"Open Menu",display:{md:b?"inherit":"none"},onClick:b?v:y}),(0,r.jsx)(a.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(a.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(a.xv,{fontSize:"large",children:(0,r.jsx)("b",{children:m})}),T]})}),(0,r.jsx)(a.kC,{alignItems:"center",children:(0,r.jsx)(l.zx,{as:j.E.div,whileHover:{scale:1.2,rotate:-20},whileTap:{scale:.3,rotate:-360},"aria-label":"Switch Theme",onClick:function(){O(),localStorage.theme=k,"light"==k?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")},children:"light"===k?(0,r.jsx)(x.kL,{}):(0,r.jsx)(x.NW,{})})})]}),b?(0,r.jsx)(a.xu,{children:(0,r.jsx)(a.Kq,{pt:"2",as:"nav",spacing:4,children:T})}):null]})})},y=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0},{n:"Analytics",h:"https://analytics.tricked.pro/share/95j8oPGF/tricked.pro",i:!1}];function v(e){var t=e.lang,n=void 0===t?"en":t;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:y.map((function(e,t){return(0,r.jsx)("div",{className:"flex flex-col space-y-4 hover:text-emerald-600 duration-150",children:e.i?(0,r.jsx)(d.default,{href:"/[lang]".concat(e.h),as:"/".concat(n).concat(e.h),children:e.n}):(0,r.jsx)(d.default,{href:e.h,children:e.n})},t)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function P(e){var t=e.children,n=e.Links,c=e.TextValue,s=e.lang,l=k(e,["children","Links","TextValue","lang"]),d=(0,i.useRouter)(),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico",image:"/cards/".concat(d.route.replace("/","").replace(/\//gim,"_"),".png")},O.en,O[s],l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("html",{lang:s}),(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:u.themeColor}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(d.asPath)}),(0,r.jsx)("meta",{name:"viewport",content:u.viewport}),(0,r.jsx)("meta",{name:"keywords",content:u.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:u.themeColor}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("link",{rel:"icon",href:u.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(d.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:u.type}),(0,r.jsx)("meta",{property:"og:site_name",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:image",content:u.image}),(0,r.jsx)("meta",{name:"twitter:title",content:u.title}),(0,r.jsx)("meta",{name:"twitter:description",content:u.description}),(0,r.jsx)("meta",{name:"twitter:image",content:u.image}),u.date&&(0,r.jsx)("meta",{property:"article:published_time",content:u.date})]}),(0,r.jsx)(b,{links:n,lang:s,TextValue:c}),(0,r.jsx)(a.xu,{as:"main",alignItems:"stretch",maxW:"80rem",margin:"auto",padding:"4px 10px 40px",children:t}),(0,r.jsx)(v,{lang:s})]})}},7056:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(5893),o=n(363),i=n(8527),a=n(5113),c=n(6599),s=n(6356),l=n(1664),d=!0;t.default=function(e){var t=e.commands,n=e.categories;return(0,r.jsx)(o.Z,{children:(0,r.jsxs)(i.kC,{children:[(0,r.jsxs)(i.xu,{height:"100%",children:[(0,r.jsx)(i.MI,{columns:1,height:"auto",children:n.map((function(e,t){return""==e?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(i.P4,{children:(0,r.jsx)(l.default,{href:"/aethor/".concat(e),passHref:!0,children:(0,r.jsx)(a.zx,{children:e})})},t)}))}),(0,r.jsx)(i.LZ,{})]}),(0,r.jsx)(i.xu,{maxW:"50rem",width:"100%",children:(0,r.jsx)(c.UQ,{allowToggle:!0,width:"100%",children:t.map((function(e,t){var n;return(0,r.jsxs)(c.Qd,{children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(c.KF,{children:[(0,r.jsx)(i.xu,{flex:"1",textAlign:"left",children:Array.isArray(e.n)?e.n.join(" "):e.n}),(0,r.jsx)(c.XE,{})]})}),(0,r.jsxs)(c.Hk,{pb:4,children:[(0,r.jsx)(i.xu,{children:null===(n=e.a)||void 0===n?void 0:n.map((function(t,n){return(0,r.jsx)(s.Vp,{color:"teal.50",children:Array.isArray(e.n)?"".concat(e.n[0]," ").concat(t):t},n)}))}),(0,r.jsxs)(i.xu,{children:[(0,r.jsx)(i.xv,{children:"Syntax"}),(0,r.jsx)(i.EK,{children:e.s})]}),(0,r.jsx)(i.xu,{children:(0,r.jsx)(i.xv,{children:e.d})})]})]},t)}))})})]})})}}},function(e){e.O(0,[479,742,774,888,179],(function(){return t=6725,e(e.s=t);var t}));var t=e.O();_N_E=t}]);