(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{9345:function(e,t,n){"use strict";n.d(t,{r:function(){return u},P:function(){return x}});var r=n(90063),i=n(93105),o=n(73808),s=n(16678),a=n(4651),c=n(67294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var u=(0,r.G)(((e,t)=>{var{area:n,templateAreas:r,gap:o,rowGap:s,columnGap:a,column:u,row:d,autoFlow:x,autoRows:m,templateRows:h,autoColumns:f,templateColumns:g}=e,j=p(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),w={display:"grid",gridArea:n,gridTemplateAreas:r,gridGap:o,gridRowGap:s,gridColumnGap:a,gridAutoColumns:f,gridColumn:u,gridRow:d,gridAutoFlow:x,gridAutoRows:m,gridTemplateRows:h,gridTemplateColumns:g};return c.createElement(i.m$.div,l({ref:t,__css:w},j))}));function d(e){return(0,s.XQ)(e,(e=>"auto"===e?"auto":"span "+e+"/span "+e))}o.Ts&&(u.displayName="Grid");var x=(0,r.G)(((e,t)=>{var{colSpan:n,colStart:r,colEnd:o,rowEnd:s,rowSpan:u,rowStart:x}=e,m=p(e,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),h=(0,a.YU)({gridColumn:d(n),gridRow:d(u),gridColumnStart:r,gridColumnEnd:o,gridRowStart:x,gridRowEnd:s});return c.createElement(i.m$.div,l({ref:t,__css:h},m))}))},27086:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(90063),i=n(73808),o=n(16678),s=n(67294),a=n(9345);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=(0,r.G)(((e,t)=>{var n,r,{columns:l,spacingX:p,spacingY:u,spacing:d,minChildWidth:x}=e,m=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),h=x?(r=x,(0,o.XQ)(r,(e=>{return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(t=e,((0,i.hj)(t)?t+"px":t)+", 1fr))");var t}))):(n=l,(0,o.XQ)(n,(e=>(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))")));return s.createElement(a.r,c({ref:t,gap:d,columnGap:p,rowGap:u,templateColumns:h},m))}));i.Ts&&(l.displayName="SimpleGrid")},87393:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(92809),i=n(10219),o=n(9008),s=n(11163),a=n(67294),c=n(48017),l=n(40980),p=n(74860),u=n(53850),d=n(94096),x=n(48420),m=n(86034),h=n(64115),f=n(71869),g=n(35063),j=n(49444),w=n(38448),y=n(85893),b=["children","href","currentPath","active"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.children,n=e.href,r=(e.currentPath,e.active),o=(0,i.Z)(e,b),s=(0,a.useState)(!1),l=s[0],p=s[1];return(0,y.jsx)(g.default,{href:n,passHref:!0,children:(0,y.jsxs)(j.r,O(O({bg:"gray.700"===n,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},o),{},{children:[t,(0,y.jsx)(w.M,{children:(0,y.jsx)(c.xu,{width:l?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:r?"brand.700":"brand.600"})})]}))})},C=n(48931),P=n(61475),_=n(46755),E=n(19950),S=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"},{name:"Aethor",route:"/aethor"}],T=function(e){var t=e.links,n=void 0===t?S:t,r=e.TextValue,i=void 0===r?"Tricked.pro":r,o=(0,p.q)(),a=o.isOpen,g=o.onOpen,j=o.onClose,w=(0,l.useColorMode)(),b=w.colorMode,v=w.toggleColorMode,O=(0,s.useRouter)(),T=(0,y.jsx)(y.Fragment,{children:n.map((function(e){return(0,y.jsx)(k,{href:e.route,active:O.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(c.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,y.jsxs)(u.W,{maxW:"container.lg",children:[(0,y.jsxs)(d.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,y.jsx)(x.h,{size:"md",icon:a?(0,y.jsx)(C.T,{}):(0,y.jsx)(P.U,{}),"aria-label":"Open Menu",display:{md:a?"inherit":"none"},onClick:a?j:g}),(0,y.jsx)(m.Ug,{spacing:8,alignItems:"center",children:(0,y.jsxs)(m.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,y.jsx)(h.x,{children:(0,y.jsx)("b",{children:i})}),T]})}),(0,y.jsx)(d.k,{alignItems:"center",children:(0,y.jsx)(f.z,{"aria-label":"Switch Theme",onClick:v,children:"light"===b?(0,y.jsx)(_.k,{}):(0,y.jsx)(E.N,{})})})]}),a?(0,y.jsx)(c.xu,{pb:4,mt:3,children:(0,y.jsx)(m.Kq,{as:"nav",spacing:4,children:T})}):null]})})})},z=[{n:"Matrix",h:"/matrix"},{n:"Discord",h:"/discord"},{n:"Github",h:"/github"}];function G(){return(0,y.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8",children:[(0,y.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,y.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:z.map((function(e,t){return(0,y.jsx)("div",{className:"flex flex-col space-y-4",children:(0,y.jsx)(g.default,{href:e.h,children:e.n})},t)}))}),(0,y.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}var R=["children","Links","TextValue","DontforceWidth"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){var t=(0,a.useState)(!1),n=(t[0],t[1]);(0,a.useEffect)((function(){return n(!0)}),[]);var l=e.children,p=e.Links,u=e.TextValue,d=e.DontforceWidth,x=void 0!==d&&d,m=(0,i.Z)(e,R),h=(0,s.useRouter)(),f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Tricked.pro",description:"Rust and Typescript developer, Vscode and Linux enjoyer",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico"},m);return(0,y.jsxs)("div",{children:[(0,y.jsxs)(o.default,{children:[(0,y.jsx)("title",{children:f.title}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/icons/apple-icon-57x57.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/icons/apple-icon-60x60.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/icons/apple-icon-72x72.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/icons/apple-icon-76x76.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/icons/apple-icon-114x114.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/icons/apple-icon-120x120.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/icons/apple-icon-144x144.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/icons/apple-icon-152x152.png"}),(0,y.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-icon-180x180.png"}),(0,y.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/icons/android-icon-192x192.png"}),(0,y.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"}),(0,y.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/icons/favicon-96x96.png"}),(0,y.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"}),(0,y.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,y.jsx)("meta",{name:"msapplication-TileColor",content:f.themeColor}),(0,y.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,y.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,y.jsx)("link",{href:"/assets/icons/icon-48x48.png",rel:"icon",type:"image/png",sizes:"48x48"}),(0,y.jsx)("link",{href:"/assets/icons/icon-72x72.png",rel:"icon",type:"image/png",sizes:"72x72"}),(0,y.jsx)("link",{rel:"apple-touch-icon",href:"/assets/icons/icon-512x512.png"}),(0,y.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(h.asPath)}),(0,y.jsx)("meta",{charSet:"utf-8"}),(0,y.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,y.jsx)("meta",{name:"viewport",content:f.viewport}),(0,y.jsx)("meta",{name:"keywords",content:f.keywords}),(0,y.jsx)("meta",{name:"theme-color",content:f.themeColor}),(0,y.jsx)("meta",{name:"robots",content:"follow, index"}),(0,y.jsx)("meta",{content:f.description,name:"description"}),(0,y.jsx)("link",{rel:"icon",href:f.icon,type:"image/ico"}),(0,y.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(h.asPath)}),(0,y.jsx)("meta",{property:"og:type",content:f.type}),(0,y.jsx)("meta",{property:"og:site_name",content:f.title}),(0,y.jsx)("meta",{property:"og:description",content:f.description}),(0,y.jsx)("meta",{property:"og:title",content:f.title}),(0,y.jsx)("meta",{property:"og:image",content:f.image}),(0,y.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,y.jsx)("meta",{name:"twitter:site",content:"@tricked"}),(0,y.jsx)("meta",{name:"twitter:title",content:f.title}),(0,y.jsx)("meta",{name:"twitter:description",content:f.description}),(0,y.jsx)("meta",{name:"twitter:image",content:f.image}),f.date&&(0,y.jsx)("meta",{property:"article:published_time",content:f.date})]}),(0,y.jsx)(T,{links:p,TextValue:u}),(0,y.jsx)("main",{children:(0,y.jsx)(c.xu,{alignItems:"stretch",maxW:x?"none":"50rem",margin:"auto",padding:x?"none":"4px 10px 40px",children:l})}),(0,y.jsx)(G,{})]})}},37323:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return u}});var r=n(9345),i=n(48017),o=n(64115),s=n(27086),a=n(35063),c=n(87393),l=n(85893),p=!0;function u(e){var t=e.posts,n=function(e){var t=e.x;e.y;return(0,l.jsx)(r.P,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",width:"15rem",cursor:"pointer",_hover:{backgroundColor:"telegram.900",color:"white"},children:(0,l.jsx)(a.default,{href:"/posts/".concat(t.slug),passHref:!0,children:(0,l.jsx)(i.xu,{children:(0,l.jsx)(i.xu,{children:(0,l.jsxs)(i.xu,{children:[(0,l.jsx)(o.x,{variant:"h5",component:"h2",color:"brand.200",children:t.title||t.slug}),(0,l.jsx)(o.x,{variant:"body2",color:"textSecondary",component:"p",height:"2rem",children:t.description})]})})})})})};return(0,l.jsx)(c.Z,{children:(0,l.jsxs)(i.xu,{children:[(0,l.jsx)(o.x,{fontSize:"2xl",children:"Recent posts"}),(0,l.jsx)(s.M,{minChildWidth:"15rem",spacing:1,justifyContent:"center",padding:"10px 10px 10px",children:t.map((function(e,t){return(0,l.jsx)(n,{x:e,y:t},t)}))})]})})}},16252:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(37323)}])}},function(e){e.O(0,[393,774,888,179],(function(){return t=16252,e(e.s=t);var t}));var t=e.O();_N_E=t}]);