import{r as l,b as v,u as w,j as e}from"./index-c47VQD-F.js";import{M as N}from"./MarkdownRender-0WAdnkzn.js";import{P as x}from"./problem-_AC1twF1.js";import"./index-hmUx_v3V.js";function C({title:s,titleId:t,...r},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),s?l.createElement("title",{id:t},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))}const k=l.forwardRef(C),P=k;function y({title:s,titleId:t,...r},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),s?l.createElement("title",{id:t},s):null,l.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",clipRule:"evenodd"}))}const E=l.forwardRef(y),R=E;function S({title:s,titleId:t,...r},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),s?l.createElement("title",{id:t},s):null,l.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",clipRule:"evenodd"}))}const T=l.forwardRef(S),O=T,I=`Output a string with format: \`Hello! %s\`.

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

`,D=()=>{const[s,t]=l.useState(""),[r,n]=l.useState(""),[m,f]=l.useState(I),[c,p]=l.useState(["default"]),[u,b]=l.useState(""),[d,h]=l.useState(void 0),{t:i}=v(),g=w(),j=a=>{p(c.filter(o=>o!==a))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx("h1",{className:"text-3xl font-bold",children:i("Create Problem")}),e.jsxs("div",{className:"flex gap-4 px-2",children:[e.jsx("button",{className:"btn btn-error btn-sm text-base-100","aria-label":"Delete",onClick:()=>{window.history.back()},children:i("Cancel")}),e.jsx("button",{className:"btn btn-primary btn-sm text-base-100",onClick:()=>{x.putProblem({slug:s,title:r,description:m,tags:c.map(a=>({name:a}))}).then(a=>{g("/admin/problem")})},children:i("Create")})]})]}),e.jsxs("div",{className:"w-full pt-2",children:[e.jsx("p",{className:"",children:i("Please fill in the information below to create a new problem.")}),e.jsx("p",{className:"",children:i("The information marked with * is required.")})]}),e.jsx("div",{className:"card mt-4 w-full rounded border border-base-content/10 bg-base-100 pt-4 shadow-xl",children:e.jsxs("div",{className:"card-body -mt-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Problem Slug"})}),e.jsx("input",{type:"text",placeholder:"slug should be unique",className:"input input-bordered w-full max-w-xs",onChange:a=>{if(t(a.target.value),a.target.value===""){h(void 0);return}x.checkProblemSlug(a.target.value).then(o=>{h(o.valid)})},value:s})]}),e.jsxs("div",{className:"mt-9",children:[s&&d===void 0&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"loading loading-spinner loading-md"}),e.jsx("p",{className:"text-sm ",children:i("Checking slug is valid...")})]}),d&&e.jsx(R,{className:"h-8 fill-green-500"}),d===!1&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-8 fill-red-500","aria-label":"Error"}),e.jsx("p",{className:"text-sm ",children:i("Slug is not valid.")})]})]})]}),e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Upload Package"})}),e.jsx("input",{type:"file",className:"file-input w-full max-w-xs",onChange:a=>{a.target.files&&x.putProblemPackage(s,a.target.files[0]).then(o=>{console.log("uploaded")})},disabled:!d,accept:".zip"})]}),e.jsx("div",{className:"divider"}),e.jsxs("label",{className:"form-control -mt-3 w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Problem Title"})}),e.jsx("input",{type:"text",placeholder:"which displays on problem header",className:"input input-bordered w-full max-w-xs",onChange:a=>{n(a.target.value)},value:r})]}),e.jsx("span",{className:"ml-1 mt-4 text-sm",children:"Problem Description"}),e.jsxs("div",{role:"tablist",className:"tabs-boxed tabs p-1",children:[e.jsx("input",{type:"radio",name:"problem_description_tabs",role:"tab",className:"tab","aria-label":"Raw",defaultChecked:!0}),e.jsx("div",{role:"tabpanel",className:"tab-content rounded-md border-base-300 bg-base-100 p-2",children:e.jsx("textarea",{className:"textarea m-0 h-64 w-full",placeholder:"write problem description here",onChange:a=>{f(a.target.value)},value:m})}),e.jsx("input",{type:"radio",name:"problem_description_tabs",role:"tab",className:"tab","aria-label":"Preview"}),e.jsx("div",{role:"tabpanel",className:"tab-content rounded-md border-base-300 bg-base-100 p-2",children:e.jsx("div",{className:"h-64 w-full overflow-auto p-4",children:e.jsx(N,{content:m})})})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[c.length>0&&e.jsx("div",{className:"flex gap-2",children:c.map(a=>e.jsx("div",{className:"badge badge-neutral cursor-pointer gap-2",onClick:()=>{j(a)},children:e.jsx("span",{children:a})},a))}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Problem Tags"})}),e.jsx("input",{type:"text",placeholder:"click tag to remove",className:"input input-bordered w-full max-w-xs",onChange:a=>{b(a.target.value)}})]}),e.jsx("div",{className:"mt-9",children:e.jsx("button",{className:"btn btn-circle btn-primary btn-sm",onClick:()=>{if(u){let a=!1;c.forEach(o=>{o===u&&(a=!0)}),a||(p([...c,u]),b(""))}},children:e.jsx(P,{className:"h-6 w-6"})})})]})]})]})})]})};export{D as default};