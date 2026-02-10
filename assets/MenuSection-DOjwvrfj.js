import{c as s,r as n,j as e}from"./index-DV8nQ1UD.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=[["path",{d:"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826",key:"xi88qy"}],["path",{d:"M20.804 14.869a9 9 0 0 1-17.608 0",key:"1r28rg"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]],l=s("dessert",r);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],d=s("leaf",i);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]],o=s("pizza",x);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]],p=s("soup",m);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],g=s("star",h),u=t=>t.includes("pizza")?e.jsx(o,{size:20,className:"text-green-600"}):t.includes("ensalada")?e.jsx(d,{size:20,className:"text-green-600"}):t.includes("pasta")?e.jsx(p,{size:20,className:"text-green-600"}):t.includes("postres")?e.jsx(l,{size:20,className:"text-green-600"}):e.jsx(g,{size:20,className:"text-green-600"}),f=n.memo(({category:t})=>e.jsxs("section",{id:t.id,className:"py-16 md:py-20 scroll-mt-24",children:[e.jsxs("div",{className:"flex flex-col items-center mb-12 md:mb-16",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"h-[1.5px] w-8 bg-green-200"}),u(t.id),e.jsx("div",{className:"h-[1.5px] w-8 bg-green-200"})]}),e.jsx("h2",{className:"text-4xl md:text-5xl lg:text-7xl font-black text-green-950 text-center uppercase tracking-tighter",children:t.title})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10",children:t.items.map((a,c)=>e.jsx("div",{className:"group bg-white rounded-[40px] p-8 md:p-10 border border-stone-200/60 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center text-center justify-center min-h-[200px]",children:e.jsxs("div",{className:"flex flex-col items-center w-full space-y-3",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-bold text-green-900 leading-tight tracking-[0.05em] uppercase",children:a.name}),a.description&&e.jsx("p",{className:"text-stone-500 leading-relaxed font-medium text-sm md:text-base italic max-w-[280px] md:max-w-xs opacity-80",children:a.description}),e.jsxs("div",{className:"pt-2 flex flex-col items-center",children:[e.jsx("span",{className:"text-2xl md:text-3xl font-black text-stone-900 tracking-tighter",children:a.price}),e.jsx("div",{className:"mt-2 h-1 w-6 bg-green-100 rounded-full group-hover:w-12 transition-all duration-300"})]})]})},`${t.id}-${c}`))})]}));f.displayName="MenuSection";export{f as default};
