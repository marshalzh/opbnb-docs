"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},12559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"opBNB Architecture",icon:"code",index:"yes",dir:{order:2}},o=void 0,c={unversionedId:"tech-specs/architecture",id:"tech-specs/architecture",title:"opBNB Architecture",description:"This is a living document and is susceptible to changes.",source:"@site/docs/tech-specs/architecture.md",sourceDirName:"tech-specs",slug:"/tech-specs/architecture",permalink:"/opbnb-docs/docs/tech-specs/architecture",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/tech-specs/architecture.md",tags:[],version:"current",frontMatter:{title:"opBNB Architecture",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"Wallet Configuration",permalink:"/opbnb-docs/docs/for-developers/wallet-configuration"},next:{title:"Why opBNB",permalink:"/opbnb-docs/docs/tech-specs/why-opbnb"}},s={},l=[{value:"Architecture of opBNB",id:"architecture-of-opbnb",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,a.kt)("h2",{id:"architecture-of-opbnb"},"Architecture of opBNB"),(0,a.kt)("p",null,"The opBNB is a layer 2 scaling solution built on top of BSC (a layer 1 blockchain). It processes transactions off-chain but posts transaction data on-chain, providing scalability as compressed layer 2 transaction data are posted on-chain. It has three main layers: an RPC service layer for interacting with the rollup, an operator interface layer for proposing layer 2 transactions off-chain, and an execution layer for executing transactions and providing an EVM execution environment. "),(0,a.kt)("p",null,"The rollup has a modular design, so the data availability interface and settlement layer can be implemented with different solutions. The data availability layer can be replaced with solutions like Greenfield, Arweave, and others, instead of relying only on BSC. Likewise, the settlement layer can be replaced with other EVM-compatible chains besides BSC, such as the Ethereum mainnet. "),(0,a.kt)("p",null,"The rollup is secured by its settlement chain as transaction data is posted on-chain, benefits from its consensus, and uses its data availability solutions. It is decentralized and permissionless. The rollup provides faster and cheaper transactions than BSC while still being secured."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230605092452839",src:r(16895).Z,width:"1452",height:"556"})))}u.isMDXComponent=!0},16895:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/opBNB-arch-4a52c992733529234d9edf5095f62860.png"}}]);