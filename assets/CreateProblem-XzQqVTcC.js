import{j as e,D as u,r as n,d as N,b as v}from"./index-AaoH2rTe.js";import{M as w}from"./MarkdownRender-LkyD83pK.js";import{p as k,c as C,a as P}from"./problem-Np5QxP6n.js";import{P as S}from"./PlusIcon-qgP_Pf6o.js";const y=l=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round",className:l.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"})]}),T=l=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round",className:l.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"})]}),z=`Output a string with format: \`Hello! %s\`.

## Input

- The first line contains a string \`s\`.

## Output

- Output a string \`Hello! %s\`.

## Example

### Input:

\`\`\`
world!
\`\`\`

### Output:

\`\`\`
Hello! world!
\`\`\`

`,E=()=>{const[l,h]=n.useState(""),[d,b]=n.useState(""),[o,j]=n.useState(z),[t,m]=n.useState(["default"]),[c,x]=n.useState(""),[i,p]=n.useState(void 0),{t:a}=N(),g=v(),f=s=>{m(t.filter(r=>r!==s))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx("h1",{className:"text-3xl font-bold",children:a("Create Problem")}),e.jsxs("div",{className:"flex gap-4 px-2",children:[e.jsx("button",{className:"btn btn-error btn-sm text-base-100","aria-label":"Delete",onClick:()=>{window.history.back()},children:a("Cancel")}),e.jsx("button",{className:"btn btn-primary btn-sm text-base-100",onClick:()=>{k({slug:l,title:d,description:o,tags:t.map(s=>({name:s}))}).then(s=>{g("/admin/problems")})},children:a("Create")})]})]}),e.jsxs("div",{className:"w-full pt-2",children:[e.jsx("p",{className:"",children:a("Please fill in the information below to create a new problem.")}),e.jsx("p",{className:"",children:a("The information marked with * is required.")})]}),e.jsx("div",{className:"card mt-4 w-full rounded border border-base-content/10 bg-base-100 pt-4 shadow-xl",children:e.jsxs("div",{className:"card-body -mt-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Problem Slug"})}),e.jsx("input",{type:"text",placeholder:"slug should be unique",className:"input input-bordered w-full max-w-xs",onChange:s=>{if(h(s.target.value),s.target.value===""){p(void 0);return}C(s.target.value).then(r=>{p(r.valid)})},value:l})]}),e.jsxs("div",{className:"mt-9",children:[l&&i===void 0&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"loading loading-spinner loading-md"}),e.jsx("p",{className:"text-sm ",children:a("Checking slug is valid...")})]}),i&&e.jsx(y,{className:"h-8 fill-green-500 stroke-none"}),i===!1&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{className:"h-8 fill-red-500 stroke-none","aria-label":"Error"}),e.jsx("p",{className:"text-sm ",children:a("Slug is not valid.")})]})]})]}),e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Upload Package"})}),e.jsx("input",{type:"file",className:"file-input w-full max-w-xs",onChange:s=>{s.target.files&&P(l,s.target.files[0]).then(r=>{console.log("uploaded")})},disabled:!i,accept:".zip"})]}),e.jsx("div",{className:"divider"}),e.jsxs("label",{className:"form-control -mt-3 w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Problem Title"})}),e.jsx("input",{type:"text",placeholder:"which displays on problem header",className:"input input-bordered w-full max-w-xs",onChange:s=>{b(s.target.value)},value:d})]}),e.jsx("span",{className:"ml-1 mt-4 text-sm",children:"Problem Description"}),e.jsxs("div",{role:"tablist",className:"tabs-boxed tabs p-1",children:[e.jsx("input",{type:"radio",name:"problem_description_tabs",role:"tab",className:"tab","aria-label":"Raw",defaultChecked:!0}),e.jsx("div",{role:"tabpanel",className:"tab-content rounded-md border-base-300 bg-base-100 p-2",children:e.jsx("textarea",{className:"textarea m-0 h-64 w-full",placeholder:"write problem description here",onChange:s=>{j(s.target.value)},value:o})}),e.jsx("input",{type:"radio",name:"problem_description_tabs",role:"tab",className:"tab","aria-label":"Preview"}),e.jsx("div",{role:"tabpanel",className:"tab-content rounded-md border-base-300 bg-base-100 p-2",children:e.jsx("div",{className:"h-64 w-full overflow-auto p-4",children:e.jsx(w,{content:o})})})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[t.length>0&&e.jsx("div",{className:"flex gap-2",children:t.map(s=>e.jsx("div",{className:"badge badge-neutral cursor-pointer gap-2",onClick:()=>{f(s)},children:e.jsx("span",{children:s})},s))}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Problem Tags"})}),e.jsx("input",{type:"text",placeholder:"click tag to remove",className:"input input-bordered w-full max-w-xs",onChange:s=>{x(s.target.value)}})]}),e.jsx("div",{className:"mt-9",children:e.jsx("button",{className:"btn btn-circle btn-primary btn-sm",onClick:()=>{if(c){let s=!1;t.forEach(r=>{r===c&&(s=!0)}),s||(m([...t,c]),x(""))}},children:e.jsx(S,{className:"h-6 w-6 "})})})]})]})]})})]})};export{E as default};
