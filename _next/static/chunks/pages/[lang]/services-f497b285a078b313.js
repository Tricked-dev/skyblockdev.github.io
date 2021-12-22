(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{4067:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/services",function(){return n(5296)}])},385:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5893),i=n(9008),o=n(1163),a=n(8527),c=n(7375),s=n(949),l=n(5113),d=n(1664),u=n(7294);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=function(e){var t=e.children,n=e.href,i=(e.currentPath,e.lang),o=void 0===i?"en":i,c=e.active,s=h(e,["children","href","currentPath","lang","active"]),l=(0,u.useState)(!1),x=l[0],p=l[1];return(0,r.jsx)(d.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(n),as:"/".concat(o).concat(n),children:(0,r.jsxs)(a.rU,m({bg:"gray.700"===n,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},s,{children:[t,(0,r.jsx)(a.M5,{children:(0,r.jsx)(a.xu,{width:x?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:c?"brand.700":"brand.600"})})]}))})},j=n(8485),f=n(5135),g=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],b=function(e){var t=e.links,n=void 0===t?g:t,i=e.lang,d=void 0===i?"en":i,x=e.TextValue,m=void 0===x?"Tricked.pro":x,h=(0,c.qY)(),b=h.isOpen,v=h.onOpen,y=h.onClose,w=(0,s.If)(),k=w.colorMode,O=w.toggleColorMode,P=(0,u.useState)(!1),_=(P[0],P[1]),E=(0,o.useRouter)(),T=(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(p,{lang:d,href:e.route,active:E.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,u.useEffect)((function(){window.document&&("light"==k?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,r.jsxs)(a.W2,{maxW:"container.lg",children:[(0,r.jsxs)(a.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(l.hU,{size:"md",icon:b?(0,r.jsx)(j.Tw,{}):(0,r.jsx)(j.Uq,{}),"aria-label":"Open Menu",display:{md:b?"inherit":"none"},onClick:b?y:v}),(0,r.jsx)(a.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(a.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(a.xv,{children:(0,r.jsx)("b",{children:m})}),T]})}),(0,r.jsx)(a.kC,{alignItems:"center",children:(0,r.jsx)(l.zx,{as:f.E.div,whileHover:{scale:1.2,rotate:-20},whileTap:{scale:.3,rotate:-360},"aria-label":"Switch Theme",onClick:function(){_(!0),O(),localStorage.theme=k,"light"==k?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),_(!1)},children:"light"===k?(0,r.jsx)(j.kL,{}):(0,r.jsx)(j.NW,{})})})]}),b?(0,r.jsx)(a.xu,{pb:4,mt:3,children:(0,r.jsx)(a.Kq,{as:"nav",spacing:4,children:T})}):null]})})})},v=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0}];function y(e){var t=e.lang,n=void 0===t?"en":t;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:v.map((function(e,t){return(0,r.jsx)("div",{className:"flex flex-col space-y-4 hover:text-emerald-600 duration-150",children:e.i?(0,r.jsx)(d.default,{href:"/[lang]".concat(e.h),as:"/".concat(n).concat(e.h),children:e.n}):(0,r.jsx)(d.default,{href:e.h,children:e.n})},t)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var O={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function P(e){var t=e.children,n=e.Links,c=e.TextValue,s=e.DontforceWidth,l=void 0!==s&&s,d=e.lang,u=k(e,["children","Links","TextValue","DontforceWidth","lang"]),x=(0,o.useRouter)(),m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico",image:"/cards/".concat(x.route.replace("/","").replace(/\//gim,"_"),".png")},O.en,O[d],u);return(0,r.jsxs)(f.E.div,{initial:"initial",animate:"animate",exit:"exit",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("html",{lang:d}),(0,r.jsx)("title",{children:m.title}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:m.themeColor}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(x.asPath)}),(0,r.jsx)("meta",{name:"viewport",content:m.viewport}),(0,r.jsx)("meta",{name:"keywords",content:m.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:m.themeColor}),(0,r.jsx)("meta",{name:"description",content:m.description}),(0,r.jsx)("link",{rel:"icon",href:m.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(x.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:m.type}),(0,r.jsx)("meta",{property:"og:site_name",content:m.title}),(0,r.jsx)("meta",{property:"og:description",content:m.description}),(0,r.jsx)("meta",{property:"og:title",content:m.title}),(0,r.jsx)("meta",{property:"og:image",content:m.image}),(0,r.jsx)("meta",{name:"twitter:title",content:m.title}),(0,r.jsx)("meta",{name:"twitter:description",content:m.description}),(0,r.jsx)("meta",{name:"twitter:image",content:m.image}),m.date&&(0,r.jsx)("meta",{property:"article:published_time",content:m.date})]}),(0,r.jsx)(b,{links:n,lang:d,TextValue:c}),(0,r.jsx)("main",{children:(0,r.jsxs)(f.E.div,{variants:{animate:{transition:{staggerChildren:.1}},exit:{transition:{staggerChildren:.1}}},children:[" ",(0,r.jsx)(a.xu,{alignItems:"stretch",maxW:l?"none":"80rem",margin:"auto",padding:l?"none":"4px 10px 40px",children:t})]})}),(0,r.jsx)(y,{lang:d})]})}},5296:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return l}});var r=n(5893),i=n(385),o=n(8527),a=n(2020);n(7294);var c=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.M5,{children:(0,r.jsx)(o.xv,{variant:"h3",fontSize:"3xl",children:a.ZP.t("services")})}),(0,r.jsx)(o.xu,{children:(0,r.jsx)(o.M5,{children:(0,r.jsx)(o.xv,{variant:"h3",fontSize:"larger",noOfLines:2,children:(0,r.jsxs)(o.Eq,{children:[(0,r.jsx)(o.xv,{children:a.ZP.t("make_bots")}),(0,r.jsx)(o.xv,{color:"green.500",children:"monaro/etherium/bitcoin cash"})]})})})}),(0,r.jsx)("br",{}),(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(o.xv,{children:a.ZP.t("pricing")}),(0,r.jsxs)(o.xv,{children:["Dm"," ",(0,r.jsx)(o.rU,{color:"green.600",href:"https://discord.com/users/336465356304678913",children:"tricked#3777"})," ",a.ZP.t("on_discord")]}),(0,r.jsxs)(o.Eq,{children:[(0,r.jsxs)(o.xv,{color:"red",children:[" ",a.ZP.t("not_host")]}),(0,r.jsxs)(o.xv,{children:[" ",a.ZP.t("written")]})]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(o.xu,{children:(0,r.jsx)(o.xv,{textColor:"GrayText",children:a.ZP.t("program_other")})})]})},s=!0;function l(e){var t=e.lang;return(0,r.jsx)(i.Z,{lang:t,children:(0,r.jsx)(c,{})})}}},function(e){e.O(0,[673,774,888,179],(function(){return t=4067,e(e.s=t);var t}));var t=e.O();_N_E=t}]);