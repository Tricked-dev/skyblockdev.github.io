(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return f},mdx:function(){return x},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"===typeof e?e:i,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8093:function(e,t,n){"use strict";var r=n(7294),i=n(3905);function o(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var s=o(r),a=c(i);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:i}){const[o,c]=r.useState(!i||"undefined"===typeof window);r.useEffect((()=>{if(i){const e=window.requestIdleCallback((()=>{c(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:a.mdx,React:s.default},t),r=Object.keys(n),i=Object.values(n),o=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return o.apply(o,i)}),[t,e]);if(!o)return s.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const p=s.default.createElement(a.MDXProvider,{components:n},s.default.createElement(l,null));return i?s.default.createElement("div",null,p):p}},7393:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(2809),i=n(219),o=n(9008),c=n(1163),s=n(7294),a=n(980),l=n(9050),p=n(8017),u=n(3850),f=n(4096),m=n(8420),d=n(6034),x=n(4115),j=n(8101),h=n(5063),y=n(9444),g=n(5893),b=["children","href","currentPath"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.children,n=e.href,r=(e.currentPath,(0,i.Z)(e,b));return(0,g.jsx)(h.default,{href:n,passHref:!0,children:(0,g.jsx)(y.r,O(O({bg:"gray.700"===n,_hover:{textDecoration:"none",bg:"gray.700"}},r),{},{children:t}))})},P=n(8931),k=n(1475),E=n(6755),T=n(9950),_=[{name:"Home",route:"/"},{name:"Projects",route:"/#projects"},{name:"Posts",route:"/#posts"}],C=function(){var e=(0,l.q)(),t=e.isOpen,n=e.onOpen,r=e.onClose,i=(0,a.useColorMode)(),o=i.colorMode,c=i.toggleColorMode,s=(0,g.jsx)(g.Fragment,{children:_.map((function(e){return(0,g.jsx)(w,{href:e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,g.jsxs)(u.W,{maxW:"container.lg",children:[(0,g.jsxs)(f.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,g.jsx)(m.h,{size:"md",icon:t?(0,g.jsx)(P.T,{}):(0,g.jsx)(k.U,{}),"aria-label":"Open Menu",display:{md:t?"inherit":"none"},onClick:t?r:n}),(0,g.jsx)(d.Ug,{spacing:8,alignItems:"center",children:(0,g.jsxs)(d.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,g.jsx)(x.x,{children:(0,g.jsx)("b",{children:"Tricked.pro"})}),s]})}),(0,g.jsx)(f.k,{alignItems:"center",children:(0,g.jsx)(j.z,{"aria-label":"Switch Theme",onClick:c,children:"light"===o?(0,g.jsx)(E.k,{}):(0,g.jsx)(T.N,{})})})]}),t?(0,g.jsx)(p.xu,{pb:4,mt:3,children:(0,g.jsx)(d.Kq,{as:"nav",spacing:4,children:s})}):null]})})})};function D(){return(0,g.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8",children:[(0,g.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,g.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}var S=["children"];function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){var t=(0,s.useState)(!1),n=(t[0],t[1]);(0,s.useEffect)((function(){return n(!0)}),[]);var a=e.children,l=(0,i.Z)(e,S),p=(0,c.useRouter)(),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Tricked.pro",description:"Typescript/javscript developer",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"},l);return(0,g.jsxs)("div",{children:[(0,g.jsxs)(o.default,{children:[(0,g.jsx)("title",{children:u.title}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/icons/apple-icon-57x57.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/icons/apple-icon-60x60.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/icons/apple-icon-72x72.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/icons/apple-icon-76x76.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/icons/apple-icon-114x114.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/icons/apple-icon-120x120.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/icons/apple-icon-144x144.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/icons/apple-icon-152x152.png"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-icon-180x180.png"}),(0,g.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/icons/android-icon-192x192.png"}),(0,g.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"}),(0,g.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/icons/favicon-96x96.png"}),(0,g.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"}),(0,g.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,g.jsx)("meta",{name:"msapplication-TileColor",content:u.themeColor}),(0,g.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,g.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,g.jsx)("link",{href:"/assets/icons/icon-48x48.png",rel:"icon",type:"image/png",sizes:"48x48"}),(0,g.jsx)("link",{href:"/assets/icons/icon-72x72.png",rel:"icon",type:"image/png",sizes:"72x72"}),(0,g.jsx)("link",{rel:"apple-touch-icon",href:"/assets/icons/icon-512x512.png"}),(0,g.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(p.asPath)}),(0,g.jsx)("meta",{charSet:"utf-8"}),(0,g.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,g.jsx)("meta",{name:"viewport",content:u.viewport}),(0,g.jsx)("meta",{name:"keywords",content:u.keywords}),(0,g.jsx)("meta",{name:"theme-color",content:u.themeColor}),(0,g.jsx)("meta",{name:"robots",content:"follow, index"}),(0,g.jsx)("meta",{content:u.description,name:"description"}),(0,g.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(p.asPath)}),(0,g.jsx)("meta",{property:"og:type",content:u.type}),(0,g.jsx)("meta",{property:"og:site_name",content:u.title}),(0,g.jsx)("meta",{property:"og:description",content:u.description}),(0,g.jsx)("meta",{property:"og:title",content:u.title}),(0,g.jsx)("meta",{property:"og:image",content:u.image}),(0,g.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,g.jsx)("meta",{name:"twitter:site",content:"@tricked"}),(0,g.jsx)("meta",{name:"twitter:title",content:u.title}),(0,g.jsx)("meta",{name:"twitter:description",content:u.description}),(0,g.jsx)("meta",{name:"twitter:image",content:u.image}),u.date&&(0,g.jsx)("meta",{property:"article:published_time",content:u.date})]}),(0,g.jsx)(C,{}),(0,g.jsxs)("main",{children:[a,(0,g.jsx)(D,{})]})]})}},7464:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return D},default:function(){return S}});var r=n(2809),i=n(9008),o=n(7393),c=n(58),s=n(63),a=n(2326),l=n(5284),p=n(9676),u=n(3105),f=n(3808),m=n(4255),d=n(7294);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var h=(0,s.G)(((e,t)=>{var n=(0,a.j)("List",e),r=(0,l.Lr)(e),{children:i,styleType:o="none",stylePosition:c,spacing:s}=r,f=j(r,["children","styleType","stylePosition","spacing"]),h=(0,m.W)(i),y=s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{};return d.createElement(p.Fo,{value:n},d.createElement(u.m$.ul,x({ref:t,listStyleType:o,listStylePosition:c,role:"list",__css:x({},n.container,y)},f),h))}));f.Ts&&(h.displayName="List");var y=(0,s.G)(((e,t)=>{var n=j(e,["as"]);return d.createElement(h,x({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))}));f.Ts&&(y.displayName="OrderedList");var g=(0,s.G)(((e,t)=>{var n=j(e,["as"]);return d.createElement(h,x({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))}));f.Ts&&(g.displayName="UnorderedList");var b=(0,s.G)(((e,t)=>{var n=(0,p.yK)();return d.createElement(u.m$.li,x({ref:t},e,{__css:n.item}))}));f.Ts&&(b.displayName="ListItem");var v=(0,s.G)(((e,t)=>{var n=(0,p.yK)();return d.createElement(c.J,x({ref:t,role:"presentation"},e,{__css:n.icon}))}));f.Ts&&(v.displayName="ListIcon");var O=n(9444),w=n(4115),P=n(8017),k=n(8093),E=n(5893);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={ul:g,li:b,a:function(e){var t=e.children,n=e.href;return console.log(t,n),(0,E.jsx)(O.r,{color:"green.300",href:n,children:(0,E.jsx)(w.x,{as:"u",children:t})})},h4:function(e){var t=e.children;return(0,E.jsx)(w.x,{variant:"h4",fontSize:"large",children:t})},h3:function(e){var t=e.children;return(0,E.jsx)(w.x,{variant:"h3",fontSize:"x-large",children:t})},h2:function(e){var t=e.children;return(0,E.jsx)(w.x,{variant:"h2",fontSize:"2xl",children:t})},h1:function(e){var t=e.children;return(0,E.jsx)(w.x,{variant:"h1",fontSize:"3xl",children:t})}},D=!0;function S(e){var t=e.title,n=e.content,r=e.description;return(0,E.jsx)(o.Z,{children:(0,E.jsxs)(P.xu,{variant:"elevation",shadow:"md",children:[(0,E.jsxs)(i.default,{children:[(0,E.jsxs)("title",{children:[t," | Tricked.pro"]}),(0,E.jsx)("meta",{name:"description",content:r})]}),(0,E.jsx)("main",{children:(0,E.jsxs)("article",{children:[(0,E.jsx)(P.xu,{margin:"auto",justifyContent:"center",marginRight:"auto",marginLeft:"auto",maxW:"60rem",className:"posts",children:(0,E.jsx)(k.R,_(_({},n),{},{components:C}))}),(0,E.jsx)("br",{})]})})]})})}},3834:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[...post]",function(){return n(7464)}])}},function(e){e.O(0,[936,774,888,179],(function(){return t=3834,e(e.s=t);var t}));var t=e.O();_N_E=t}]);