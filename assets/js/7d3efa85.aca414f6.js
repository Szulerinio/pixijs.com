"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[42853],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(t),m=a,d=l["".concat(s,".").concat(m)]||l[m]||y[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={hide_table_of_contents:!0},i="GSAP 3 Basic Examples",p={unversionedId:"examples/gsap3-interaction/gsap3-basic",id:"examples/gsap3-interaction/gsap3-basic",title:"GSAP 3 Basic Examples",description:"",source:"@site/docs/examples/gsap3-interaction/gsap3-basic.md",sourceDirName:"examples/gsap3-interaction",slug:"/examples/gsap3-interaction/gsap3-basic",permalink:"/examples/gsap3-interaction/gsap3-basic",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/gsap3-interaction/gsap3-basic.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"GSAP 3 Random Draw",permalink:"/examples/gsap3-interaction/gsap3-random-draw"},next:{title:"GSAP 3 Filters",permalink:"/examples/gsap3-interaction/gsap3-filters"}},s={},c=[],u={toc:c};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gsap-3-basic-examples"},"GSAP 3 Basic Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// Note: In this example we have two \"requestAnimationFrame\", PIXI + gsap.\n// gsap coordinate his animations (bunnies).\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Create a new texture\nconst texture = PIXI.Texture.from('https://beta.pixijs.com/assets/bunny.png');\n\n// time animation in seconds\nconst time = 2.0;\n\nconst bunny1 = new PIXI.Sprite(texture);\napp.stage.addChild(bunny1);\n\ngsap.to(bunny1, {\n    x: 500, duration: time, repeat: -1, yoyo: true,\n});\n\nconst bunny2 = new PIXI.Sprite(texture);\nbunny2.y = 100;\napp.stage.addChild(bunny2);\n\ngsap.to(bunny2, {\n    alpha: 0.0, duration: time, repeat: -1, yoyo: true,\n});\n\nconst bunny3 = new PIXI.Sprite(texture);\nbunny3.y = 200;\napp.stage.addChild(bunny3);\n\ngsap.to(bunny3.scale, {\n    x: 2.0, y: 2.0, duration: time, repeat: -1, yoyo: true,\n});\n\nconst bunny4 = new PIXI.Sprite(texture);\nbunny4.y = 350;\nbunny4.x = 100;\nbunny4.anchor.set(0.5, 0.5);\napp.stage.addChild(bunny4);\n\ngsap.to(bunny4, {\n    rotation: 2 * Math.PI, duration: time, repeat: -1, yoyo: true,\n});\n\nlet colorBunny = null;\ncreateNewBunny();\n\nfunction createNewBunny() {\n    if (colorBunny) {\n        app.stage.removeChild(colorBunny);\n    }\n\n    colorBunny = new PIXI.Sprite(texture);\n    colorBunny.y = 500;\n    colorBunny.x = 50;\n    colorBunny.tint = `0x${Math.floor(Math.random() * 16777215).toString(16)}`;\n    app.stage.addChild(colorBunny);\n\n    gsap.to(colorBunny, { x: 500, duration: time, onComplete: createNewBunny });\n}\n")))}l.isMDXComponent=!0}}]);