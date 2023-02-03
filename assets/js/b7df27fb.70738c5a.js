"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[99025],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var i=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,i,s=function(n,e){if(null==n)return{};var t,i,s={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var l=i.createContext({}),c=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return i.createElement(l.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(n,e){var t=n.components,s=n.mdxType,a=n.originalType,l=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),d=c(t),h=s,g=d["".concat(l,".").concat(h)]||d[h]||m[h]||a;return t?i.createElement(g,o(o({ref:e},p),{},{components:t})):i.createElement(g,o({ref:e},p))}));function g(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var a=t.length,o=new Array(a);o[0]=h;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r[d]="string"==typeof n?n:s,o[1]=r;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},99222:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(87462),s=(t(67294),t(3905));const a={hide_table_of_contents:!0},o="Spinners",r={unversionedId:"examples/demos-advanced/spinners",id:"examples/demos-advanced/spinners",title:"Spinners",description:"",source:"@site/docs/examples/demos-advanced/spinners.md",sourceDirName:"examples/demos-advanced",slug:"/examples/demos-advanced/spinners",permalink:"/examples/demos-advanced/spinners",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/demos-advanced/spinners.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Collision",permalink:"/examples/demos-advanced/collision-detection"},next:{title:"Textured Mesh - Basic",permalink:"/examples/mesh-and-shaders/textured-mesh-basic"}},l={},c=[],p={toc:c};function d(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spinners"},"Spinners"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n/* ---------------------------------------\n Spinner 1. Square with radial completion.\n -------------------------------------- */\nconst generateSpinner1 = (position) => {\n    const container = new PIXI.Container();\n    container.position = position;\n    app.stage.addChild(container);\n\n    const base = PIXI.Sprite.from('https://beta.pixijs.com/assets/bg_scene_rotate.jpg');\n    const size = 100;\n    base.width = size;\n    base.height = size;\n\n    const bottom = PIXI.Sprite.from('https://beta.pixijs.com/assets/bg_rotate.jpg');\n    bottom.width = size;\n    bottom.height = size;\n\n    const mask = new PIXI.Graphics();\n    mask.position.set(size / 2, size / 2);\n    base.mask = mask;\n    window.mask = mask;\n\n    container.addChild(bottom);\n    container.addChild(base);\n    container.addChild(mask);\n\n    let phase = 0;\n    return (delta) => {\n        // Update phase\n        phase += delta / 60;\n        phase %= (Math.PI * 2);\n\n        // Calculate target point.\n        const x = Math.cos(phase - Math.PI / 2) * size;\n        const y = Math.sin(phase - Math.PI / 2) * size;\n\n        const segments = [\n            [-size / 2, -size / 2, size / 2, -size / 2], // top segment\n            [size / 2, -size / 2, size / 2, size / 2], // right\n            [-size / 2, size / 2, size / 2, size / 2], // bottom\n            [-size / 2, -size / 2, -size / 2, size / 2], // left\n        ];\n\n        // Find the intersecting segment.\n        let intersection = null;\n        let winding = 0;\n        for (let i = 0; i < segments.length; i++) {\n            const segment = segments[i];\n            const hit = intersect(0, 0, x, y, segment[0], segment[1], segment[2], segment[3]);\n            if (hit) {\n                intersection = hit;\n                if (i === 0) winding = hit.x > 0 ? 0 : 4;\n                else winding = i;\n                break;\n            }\n        }\n\n        const corners = [\n            size / 2, -size / 2, // Top right\n            size / 2, size / 2, // Bottom right\n            -size / 2, size / 2, // Bottom left\n            -size / 2, -size / 2, // Top left,\n            0, -size / 2, // End point\n        ];\n\n        // Redraw mask\n        mask.clear();\n        mask.lineStyle(2, 0xff0000, 1);\n        mask.beginFill(0xff0000, 1);\n        mask.moveTo(0, -size / 2);\n        mask.lineTo(0, 0);\n\n        mask.lineTo(intersection.x, intersection.y);\n\n        // fill the corners\n        for (let i = winding; i < corners.length / 2; i++) {\n            mask.lineTo(corners[i * 2], corners[i * 2 + 1]);\n        }\n        mask.endFill();\n    };\n};\n\n/* -----------------------\n Spinner 2. Scaling balls.\n ---------------------- */\nconst generateSpinner2 = (position) => {\n    const container = new PIXI.Container();\n    container.position = position;\n    app.stage.addChild(container);\n\n    const size = 100;\n    const ballAmount = 7;\n    const balls = [];\n    for (let i = 0; i < ballAmount; i++) {\n        const ball = PIXI.Sprite.from('https://beta.pixijs.com/assets/circle.png');\n        ball.anchor.set(0.5);\n        container.addChild(ball);\n        ball.position.set(\n            size / 2 + Math.cos(i / ballAmount * Math.PI * 2) * size / 3,\n            size / 2 + Math.sin(i / ballAmount * Math.PI * 2) * size / 3,\n        );\n        balls.push(ball);\n    }\n\n    let phase = 0;\n    return (delta) => {\n        // Update phase\n        phase += delta / 60;\n        phase %= (Math.PI * 2);\n\n        // Update ball scales\n        balls.forEach((b, i) => {\n            const sin = Math.sin(i / ballAmount * Math.PI - phase);\n            // Multiply sin with itself to get more steeper edge.\n            b.scale.set(Math.abs(sin * sin * sin * 0.5) + 0.5);\n        });\n    };\n};\n\n/* ---------------------\n Spinner 3. Radial mask.\n -------------------- */\nconst generateSpinner3 = (position) => {\n    const container = new PIXI.Container();\n    container.position = position;\n    app.stage.addChild(container);\n\n    const base = PIXI.Sprite.from('https://beta.pixijs.com/assets/bg_scene_rotate.jpg');\n    const size = 100;\n    base.width = size;\n    base.height = size;\n\n    const mask = new PIXI.Graphics();\n    mask.position.set(size / 2, size / 2);\n    base.mask = mask;\n    window.mask = mask;\n\n    container.addChild(base);\n    container.addChild(mask);\n\n    let phase = 0;\n    return (delta) => {\n        // Update phase\n        phase += delta / 60;\n        phase %= (Math.PI * 2);\n\n        const angleStart = 0 - Math.PI / 2;\n        const angle = phase + angleStart;\n        const radius = 50;\n\n        const x1 = Math.cos(angleStart) * radius;\n        const y1 = Math.sin(angleStart) * radius;\n\n        // Redraw mask\n        mask.clear();\n        mask.lineStyle(2, 0xff0000, 1);\n        mask.beginFill(0xff0000, 1);\n        mask.moveTo(0, 0);\n        mask.lineTo(x1, y1);\n        mask.arc(0, 0, radius, angleStart, angle, false);\n        mask.lineTo(0, 0);\n        mask.endFill();\n    };\n};\n\n/* ---------------------------------\n Spinner 4. Rounded rectangle edges.\n ------------------------------- */\nconst generateSpinner4 = (position) => {\n    const container = new PIXI.Container();\n    container.position = position;\n    app.stage.addChild(container);\n\n    const size = 100;\n    const arcRadius = 15;\n\n    const base = PIXI.Sprite.from('https://beta.pixijs.com/assets/bg_scene_rotate.jpg');\n    base.width = size;\n    base.height = size;\n\n    // For better performance having assets prerounded would be better than masking.\n    const roundingMask = new PIXI.Graphics();\n    roundingMask.beginFill(0, 1);\n    roundingMask.lineStyle(1, 0xff0000, 1);\n    roundingMask.drawRoundedRect(0, 0, size, size, arcRadius);\n    roundingMask.endFill();\n    base.mask = roundingMask;\n\n    // The edge could be replaced with image as well.\n    const lineSize = 5;\n    const edge = new PIXI.Graphics();\n    edge.lineStyle(lineSize, 0xff0000, 1);\n    edge.drawRoundedRect(0, 0, size, size, arcRadius);\n    edge.endFill();\n\n    // Mask in this example works basically the same way as in example 1. Except it is reversed and calculates the mask in straight lines in edges.\n    const mask = new PIXI.Graphics();\n    mask.position.set(size / 2, size / 2);\n    edge.mask = mask;\n\n    container.addChild(base);\n    container.addChild(roundingMask);\n    container.addChild(edge);\n    container.addChild(mask);\n\n    let phase = 0;\n    return (delta) => {\n        // Update phase\n        phase += delta / 160;\n        phase %= (Math.PI * 2);\n\n        // Calculate target point.\n        const x = Math.cos(phase - Math.PI / 2) * size;\n        const y = Math.sin(phase - Math.PI / 2) * size;\n        // Line segments\n        const segments = [\n            [-size / 2 + lineSize, -size / 2 + lineSize, size / 2 - lineSize, -size / 2 + lineSize], // top segment\n            [size / 2 - lineSize, -size / 2 + lineSize, size / 2 - lineSize, size / 2 - lineSize], // right\n            [-size / 2 + lineSize, size / 2 - lineSize, size / 2 - lineSize, size / 2 - lineSize], // bottom\n            [-size / 2 + lineSize, -size / 2 + lineSize, -size / 2 + lineSize, size / 2 - lineSize], // left\n        ];\n        // To which dir should mask continue at each segment\n        let outDir = [\n            [0, -1],\n            [1, 0],\n            [0, 1],\n            [-1, 0],\n        ];\n\n        // Find the intersecting segment.\n        let intersection = null;\n        let winding = 0;\n        // What direction should the line continue after hit has been found before hitting the line size\n        for (let i = 0; i < segments.length; i++) {\n            const segment = segments[i];\n            const hit = intersect(0, 0, x, y, segment[0], segment[1], segment[2], segment[3]);\n            if (hit) {\n                intersection = hit;\n                if (i === 0) winding = hit.x < 0 ? 0 : 4;\n                else winding = 4 - i;\n                outDir = outDir[i];\n                break;\n            }\n        }\n\n        const corners = [\n            -size / 2 - lineSize, -size / 2 - lineSize, // Top left,\n            -size / 2 - lineSize, size / 2 + lineSize, // Bottom left\n            size / 2 + lineSize, size / 2 + lineSize, // Bottom right\n            size / 2 + lineSize, -size / 2 - lineSize, // Top right\n        ];\n\n        // Redraw mask\n        mask.clear();\n        mask.lineStyle(2, 0x00ff00, 1);\n        mask.beginFill(0xff0000, 1);\n\n        mask.moveTo(0, 0);\n        mask.moveTo(0, -size / 2 - lineSize);\n\n        // fill the corners\n        for (let i = 0; i < winding; i++) {\n            mask.lineTo(corners[i * 2], corners[i * 2 + 1]);\n        }\n\n        mask.lineTo(intersection.x + outDir[0] * lineSize * 2, intersection.y + outDir[1] * lineSize * 2);\n        mask.lineTo(intersection.x, intersection.y);\n        mask.lineTo(0, 0);\n\n        mask.endFill();\n    };\n};\n\n/* ---------------------\n Spinner 5. Rounded rectangle fixed length spinner by jonlepage\n -------------------- */\nconst generateSpinner5 = (position) => {\n    const container = new PIXI.Container();\n    container.position = position;\n    app.stage.addChild(container);\n\n    const halfCircle = new PIXI.Graphics();\n    halfCircle.beginFill(0xff0000);\n    halfCircle.lineStyle(2, 0xffffff);\n    halfCircle.arc(0, 0, 100, 0, Math.PI);\n    halfCircle.endFill();\n    halfCircle.position.set(50, 50);\n\n    const rectangle = new PIXI.Graphics();\n    rectangle.lineStyle(2, 0xffffff, 1);\n    rectangle.drawRoundedRect(0, 0, 100, 100, 16);\n    rectangle.endFill();\n    rectangle.mask = halfCircle;\n\n    container.addChild(rectangle);\n    container.addChild(halfCircle);\n\n    let phase = 0;\n    return (delta) => {\n        // Update phase\n        phase += delta / 6;\n        phase %= (Math.PI * 2);\n\n        halfCircle.rotation = phase;\n    };\n};\n\nconst onTick = [\n    generateSpinner1(new PIXI.Point(50, 50)),\n    generateSpinner2(new PIXI.Point(160, 50)),\n    generateSpinner3(new PIXI.Point(270, 50)),\n    generateSpinner4(new PIXI.Point(380, 50)),\n    generateSpinner5(new PIXI.Point(490, 50)),\n];\n\n// Listen for animate update\napp.ticker.add((delta) => {\n    // Call tick handling for each spinner.\n    onTick.forEach((cb) => {\n        cb(delta);\n    });\n});\n\n/**\n * Helper functions\n\n    line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/\n    Determine the intersection point of two line segments\n    Return FALSE if the lines don't intersect\n\n    Code modified from original to match pixi examples linting rules.\n*/\nfunction intersect(x1, y1, x2, y2, x3, y3, x4, y4) {\n    // Check if none of the lines are of length 0\n    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {\n        return false;\n    }\n\n    const denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));\n\n    // Lines are parallel\n    if (denominator === 0) {\n        return false;\n    }\n\n    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;\n    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;\n\n    // is the intersection along the segments\n    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {\n        return false;\n    }\n\n    // Return a object with the x and y coordinates of the intersection\n    const x = x1 + ua * (x2 - x1);\n    const y = y1 + ua * (y2 - y1);\n\n    return { x, y };\n}\n")))}d.isMDXComponent=!0}}]);