(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9345:function(e,t,r){"use strict";r.d(t,{r:function(){return d},P:function(){return u}});var n=r(90063),i=r(93105),a=r(73808),o=r(16678),s=r(4651),c=r(67294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var d=(0,n.G)(((e,t)=>{var{area:r,templateAreas:n,gap:a,rowGap:o,columnGap:s,column:d,row:m,autoFlow:u,autoRows:h,templateRows:g,autoColumns:x,templateColumns:f}=e,j=p(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),b={display:"grid",gridArea:r,gridTemplateAreas:n,gridGap:a,gridRowGap:o,gridColumnGap:s,gridAutoColumns:x,gridColumn:d,gridRow:m,gridAutoFlow:u,gridAutoRows:h,gridTemplateRows:g,gridTemplateColumns:f};return c.createElement(i.m$.div,l({ref:t,__css:b},j))}));function m(e){return(0,o.XQ)(e,(e=>"auto"===e?"auto":"span "+e+"/span "+e))}a.Ts&&(d.displayName="Grid");var u=(0,n.G)(((e,t)=>{var{colSpan:r,colStart:n,colEnd:a,rowEnd:o,rowSpan:d,rowStart:u}=e,h=p(e,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),g=(0,s.YU)({gridColumn:m(r),gridRow:m(d),gridColumnStart:n,gridColumnEnd:a,gridRowStart:u,gridRowEnd:o});return c.createElement(i.m$.div,l({ref:t,__css:g},h))}))},87393:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n=r(92809),i=r(10219),a=r(9008),o=r(11163),s=r(67294),c=r(48017),l=r(40980),p=r(74860),d=r(53850),m=r(94096),u=r(48420),h=r(86034),g=r(64115),x=r(71869),f=r(35063),j=r(49444),b=r(38448),w=r(85893),y=["children","href","currentPath","active"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.children,r=e.href,n=(e.currentPath,e.active),a=(0,i.Z)(e,y),o=(0,s.useState)(!1),l=o[0],p=o[1];return(0,w.jsx)(f.default,{href:r,passHref:!0,children:(0,w.jsxs)(j.r,k(k({bg:"gray.700"===r,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},a),{},{children:[t,(0,w.jsx)(b.M,{children:(0,w.jsx)(c.xu,{width:l?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:n?"brand.700":"brand.600"})})]}))})},E=r(48931),C=r(61475),S=r(46755),T=r(19950),N=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"},{name:"Aethor",route:"/aethor"}],P=function(e){var t=e.links,r=void 0===t?N:t,n=e.TextValue,i=void 0===n?"Tricked.pro":n,a=(0,p.q)(),s=a.isOpen,f=a.onOpen,j=a.onClose,b=(0,l.useColorMode)(),y=b.colorMode,v=b.toggleColorMode,k=(0,o.useRouter)(),P=(0,w.jsx)(w.Fragment,{children:r.map((function(e){return(0,w.jsx)(O,{href:e.route,active:k.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(c.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,w.jsxs)(d.W,{maxW:"container.lg",children:[(0,w.jsxs)(m.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,w.jsx)(u.h,{size:"md",icon:s?(0,w.jsx)(E.T,{}):(0,w.jsx)(C.U,{}),"aria-label":"Open Menu",display:{md:s?"inherit":"none"},onClick:s?j:f}),(0,w.jsx)(h.Ug,{spacing:8,alignItems:"center",children:(0,w.jsxs)(h.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,w.jsx)(g.x,{children:(0,w.jsx)("b",{children:i})}),P]})}),(0,w.jsx)(m.k,{alignItems:"center",children:(0,w.jsx)(x.z,{"aria-label":"Switch Theme",onClick:v,children:"light"===y?(0,w.jsx)(S.k,{}):(0,w.jsx)(T.N,{})})})]}),s?(0,w.jsx)(c.xu,{pb:4,mt:3,children:(0,w.jsx)(h.Kq,{as:"nav",spacing:4,children:P})}):null]})})})},_=[{n:"Matrix",h:"/matrix"},{n:"Discord",h:"/discord"},{n:"Github",h:"/github"}];function z(){return(0,w.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8",children:[(0,w.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,w.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:_.map((function(e,t){return(0,w.jsx)("div",{className:"flex flex-col space-y-4",children:(0,w.jsx)(f.default,{href:e.h,children:e.n})},t)}))}),(0,w.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}var A=["children","Links","TextValue","DontforceWidth"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){var t=(0,s.useState)(!1),r=(t[0],t[1]);(0,s.useEffect)((function(){return r(!0)}),[]);var l=e.children,p=e.Links,d=e.TextValue,m=e.DontforceWidth,u=void 0!==m&&m,h=(0,i.Z)(e,A),g=(0,o.useRouter)(),x=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({title:"Tricked.pro",description:"Rust and Typescript developer, Vscode and Linux enjoyer",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico"},h);return(0,w.jsxs)("div",{children:[(0,w.jsxs)(a.default,{children:[(0,w.jsx)("title",{children:x.title}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/icons/apple-icon-57x57.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/icons/apple-icon-60x60.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/icons/apple-icon-72x72.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/icons/apple-icon-76x76.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/icons/apple-icon-114x114.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/icons/apple-icon-120x120.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/icons/apple-icon-144x144.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/icons/apple-icon-152x152.png"}),(0,w.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-icon-180x180.png"}),(0,w.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/icons/android-icon-192x192.png"}),(0,w.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"}),(0,w.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/icons/favicon-96x96.png"}),(0,w.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"}),(0,w.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,w.jsx)("meta",{name:"msapplication-TileColor",content:x.themeColor}),(0,w.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,w.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,w.jsx)("link",{href:"/assets/icons/icon-48x48.png",rel:"icon",type:"image/png",sizes:"48x48"}),(0,w.jsx)("link",{href:"/assets/icons/icon-72x72.png",rel:"icon",type:"image/png",sizes:"72x72"}),(0,w.jsx)("link",{rel:"apple-touch-icon",href:"/assets/icons/icon-512x512.png"}),(0,w.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(g.asPath)}),(0,w.jsx)("meta",{charSet:"utf-8"}),(0,w.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,w.jsx)("meta",{name:"viewport",content:x.viewport}),(0,w.jsx)("meta",{name:"keywords",content:x.keywords}),(0,w.jsx)("meta",{name:"theme-color",content:x.themeColor}),(0,w.jsx)("meta",{name:"robots",content:"follow, index"}),(0,w.jsx)("meta",{content:x.description,name:"description"}),(0,w.jsx)("link",{rel:"icon",href:x.icon,type:"image/ico"}),(0,w.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(g.asPath)}),(0,w.jsx)("meta",{property:"og:type",content:x.type}),(0,w.jsx)("meta",{property:"og:site_name",content:x.title}),(0,w.jsx)("meta",{property:"og:description",content:x.description}),(0,w.jsx)("meta",{property:"og:title",content:x.title}),(0,w.jsx)("meta",{property:"og:image",content:x.image}),(0,w.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,w.jsx)("meta",{name:"twitter:site",content:"@tricked"}),(0,w.jsx)("meta",{name:"twitter:title",content:x.title}),(0,w.jsx)("meta",{name:"twitter:description",content:x.description}),(0,w.jsx)("meta",{name:"twitter:image",content:x.image}),x.date&&(0,w.jsx)("meta",{property:"article:published_time",content:x.date})]}),(0,w.jsx)(P,{links:p,TextValue:d}),(0,w.jsx)("main",{children:(0,w.jsx)(c.xu,{alignItems:"stretch",maxW:u?"none":"50rem",margin:"auto",padding:u?"none":"4px 10px 40px",children:l})}),(0,w.jsx)(z,{})]})}},88770:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(48017),i=r(9345),a=r(64115),o=r(90063),s=r(93105),c=r(4651),l=r(73808),p=r(67294),d=r(68327);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var h=p.forwardRef(((e,t)=>{var{htmlWidth:r,htmlHeight:n,alt:i}=e,a=u(e,["htmlWidth","htmlHeight","alt"]);return p.createElement("img",m({width:r,height:n,ref:t,alt:i},a))})),g=(0,o.G)(((e,t)=>{var{fallbackSrc:r,fallback:n,src:i,srcSet:a,align:o,fit:l,loading:g,ignoreFallback:x,crossOrigin:f}=e,j=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=g||x||void 0===r&&void 0===n,w=function(e){var{loading:t,src:r,srcSet:n,onLoad:i,onError:a,crossOrigin:o,sizes:s,ignoreFallback:c}=e,[l,m]=(0,p.useState)("pending");(0,p.useEffect)((()=>{m(r?"loading":"pending")}),[r]);var u=(0,p.useRef)(),h=(0,p.useCallback)((()=>{if(r){g();var e=new Image;e.src=r,o&&(e.crossOrigin=o),n&&(e.srcset=n),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{g(),m("loaded"),null==i||i(e)},e.onerror=e=>{g(),m("failed"),null==a||a(e)},u.current=e}}),[r,o,n,s,i,a,t]),g=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,d.G)((()=>{if(!c)return"loading"===l&&h(),()=>{g()}}),[l,h,c]),c?"loaded":l}(m({},e,{ignoreFallback:b})),y=m({ref:t,objectFit:l,objectPosition:o},b?j:(0,c.CE)(j,["onError","onLoad"]));return"loaded"!==w?n||p.createElement(s.m$.img,m({as:h,className:"chakra-image__placeholder",src:r},y)):p.createElement(s.m$.img,m({as:h,src:i,srcSet:a,crossOrigin:f,loading:g,className:"chakra-image"},y))}));l.Ts&&(g.displayName="Image");var x=r(70820),f=r(16678),j=r(84461);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var y=(0,o.G)(((e,t)=>{var{spacing:r="0.5rem",children:n,justify:i,direction:a,align:o,className:c,shouldWrapChildren:l}=e,d=w(e,["spacing","children","justify","direction","align","className","shouldWrapChildren"]),m=p.useMemo((()=>({"--chakra-wrap-spacing":e=>(0,f.XQ)(r,(t=>(0,x.f)("space",t)(e))),"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:i,alignItems:o,flexDirection:a,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}})),[r,i,o,a]),u=l?p.Children.map(n,((e,t)=>p.createElement(v,{key:t},e))):n;return p.createElement(s.m$.div,b({ref:t,className:(0,j.cx)("chakra-wrap",c)},d),p.createElement(s.m$.ul,{className:"chakra-wrap__list",__css:m},u))}));l.Ts&&(y.displayName="Wrap");var v=(0,o.G)(((e,t)=>{var{className:r}=e,n=w(e,["className"]);return p.createElement(s.m$.li,b({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,j.cx)("chakra-wrap__listitem",r)},n))}));l.Ts&&(v.displayName="WrapItem");var k=r(71869),O=r(89867),E=(0,O.I)({displayName:"ArrowLeftIcon",path:p.createElement("g",{fill:"currentColor"},p.createElement("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),p.createElement("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"}))}),C=(0,O.I)({displayName:"ArrowRightIcon",path:p.createElement("g",{fill:"currentColor"},p.createElement("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),p.createElement("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"}))}),S=(0,O.I)({displayName:"ExternalLinkIcon",path:p.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},p.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),p.createElement("path",{d:"M15 3h6v6"}),p.createElement("path",{d:"M10 14L21 3"}))}),T=r(39629),N=r(35063),P=r(85893),_=[{image:"/images/diplo.png",name:"Diplo",description:"A script and dependency manager for deno made in rust ( high performance compiled language )",link:"/diplo",repository:"https://github.com/Tricked-dev/diplo"},{image:"/images/aethor.png",name:"Aethor",description:"Aethor is the perfect multipurpose bot for your discord server",link:"/aethor/general"},{image:"/images/soggaimages.png",name:"Sogga Images",description:"A image uploader made in rust quickest on the market",repository:"https://github.com/Tricked-dev/images-frontend",link:"https://soggaimges.xyz"},{image:"/images/texter.png",name:"Texter",description:"The best powercord plugin if you want to get attention in a discord chat",repository:"https://github.com/Tricked-dev/texter"},{image:"/images/timages.png",name:"NextJs Image Uploader",description:"A simple nextjs image uploader deployable to vercel using mongodb as a database",repository:"https://github.com/Tricked-dev/next-image-uploader"},{image:"/images/lowestbins.png",name:"lowestbins",description:"Lowestbins was my first rust project it uses the hypixel api to fetch all auctions and return the lowest bin of each item",repository:"https://github.com/Tricked-dev/lowestbins",link:"https://api.tricked.pro/lowestbins"},{image:"/images/natico.png",name:"Natico",description:"Natico is a advanced discordeno framework for making discord bots",repository:"https://github.com/naticoo/framework"},{image:"/images/scriptbot.png",name:"Script Bot",description:"Script bot is a bot that can be used to make scripts to be executed within discord for example make channels and rename channels",repository:"https://github.com/Tricked-dev/script-bot"},{image:"/images/website.png",name:"Tricked.is-a.dev",description:"A cool website that hosts cool projects",repository:"https://github.com/Tricked-dev/Tricked-dev.github.io",link:"https://tricked.pro"},{image:"/images/doomfetch.png",name:"Doom Fetch",description:"A fetch wrapper for deno which allows you to use classes to make using fetch easier",repository:"https://github.com/Tricked-dev/doomfetch"},{image:"/images/linuxcommands.png",name:"Linux Commands",description:"A cool website you can use to share intresting linux commands you have found or make yourself",link:"https://linuxcommands.vercel.app/"},{image:"/images/redditbot.png",name:"AI Reddit Bot",description:"A reddit bot that uses ai and the last post's comments to generate a new post feel free to try it out",link:"https://www.reddit.com/r/bottalks/"}];function z(){var e=(0,p.useState)(0),t=e[0],r=e[1],i=function(e){var i=e.x;return(0,P.jsxs)(n.xu,{maxW:"100%",borderColor:"darkgrey",border:"2px",rounded:"md",padding:"3px 8px 8px",children:[(0,P.jsx)(n.xu,{children:(0,P.jsx)(a.x,{variant:"h2",textShadow:"2xl",fontSize:"2xl",children:i.name})}),(0,P.jsx)(n.xu,{children:(0,P.jsx)(T.E.div,{whileHover:{scale:1.1},transition:{duration:.4},children:(0,P.jsx)(g,{src:i.image,className:"object-cover",width:"50rem",height:"24rem",alt:i.name})})}),(0,P.jsx)(n.xu,{minH:"3.4rem",maxW:"100%",children:(0,P.jsx)(a.x,{fontSize:"large",children:i.description})}),(0,P.jsxs)(y,{children:[(0,P.jsx)(v,{children:(0,P.jsx)("button",{onClick:function(){o()},children:(0,P.jsx)(k.z,{leftIcon:(0,P.jsx)(E,{})})})}),(0,P.jsx)(v,{children:(0,P.jsx)("button",{onClick:function(){r(t--),-1==t&&r(_.length-1)},children:(0,P.jsx)(k.z,{leftIcon:(0,P.jsx)(C,{})})})}),(0,P.jsx)(v,{children:i.repository&&(0,P.jsx)(k.z,{leftIcon:(0,P.jsx)(S,{}),children:(0,P.jsx)(N.default,{href:i.repository,children:"Repository"})})}),(0,P.jsx)(v,{children:i.link&&(0,P.jsx)(k.z,{leftIcon:(0,P.jsx)(S,{}),children:(0,P.jsx)(N.default,{href:i.link,children:"Visit Website"})})})]})]})},o=function(){r(t++),t==_.length-1&&r(0)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a.x,{variant:"h1",textShadow:"3xl",fontSize:"3xl",children:"Project showcase"}),(0,P.jsx)(n.xu,{children:(0,P.jsx)(i,{x:_[t]})})]})}var A=r(87393);function I(){return(0,P.jsx)(A.Z,{children:(0,P.jsx)(n.xu,{children:(0,P.jsx)(i.r,{spacing:1,alignItems:"center",wrap:"wrap",justifyContent:"center",children:(0,P.jsx)(i.P,{id:"projects",children:(0,P.jsx)(z,{})})})})})}},4478:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(88770)}])}},function(e){e.O(0,[393,629,774,888,179],(function(){return t=4478,e(e.s=t);var t}));var t=e.O();_N_E=t}]);