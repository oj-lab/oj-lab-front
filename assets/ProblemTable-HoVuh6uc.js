import{j as e,D as i,d as r,R as h,b as x,e as o}from"./index-_PEAXRg2.js";import{d as m}from"./problem-2pAURE_S.js";import{C as j}from"./CircleCheckIcon-RF_4VfgA.js";const b=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 7l16 0"}),e.jsx("path",{d:"M10 11l0 6"}),e.jsx("path",{d:"M14 11l0 6"}),e.jsx("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),e.jsx("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]}),u=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}),e.jsx("path",{d:"M13.5 6.5l4 4"})]}),g=s=>{const{t}=r();return e.jsxs("dialog",{id:s.id,className:"modal",children:[e.jsxs("div",{className:"modal-box",children:[s.title&&e.jsx("h3",{className:"text-lg font-bold",children:t(s.title)}),e.jsx("p",{className:"py-4",children:t(s.message)}),e.jsx("div",{className:"modal-action",children:e.jsxs("form",{method:"dialog",className:"flex gap-2",children:[e.jsx("button",{className:"btn btn-sm",children:t("Cancel")}),e.jsx("button",{className:"btn btn-error btn-sm",onClick:s.onClickConfirm,children:t("Confirm")})]})})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{})})]})},y=s=>{const{t}=r(),[l,n]=h.useState(""),d=x();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.className,children:e.jsxs("table",{className:"table","aria-label":"Problem Table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-base-content/10",children:[e.jsx("th",{children:t("Accepted")},"accepted"),e.jsx("th",{children:t("Title")},"title"),e.jsx("th",{children:t("Tags")},"tags"),e.jsx("th",{children:t("Difficulty")},"difficulty"),e.jsx("th",{children:t("Accept Rate")},"accept_rate"),s.showActions&&e.jsx("th",{children:t("Actions")},"actions")]})}),e.jsx("tbody",{children:s.data.map(a=>{var c;return e.jsxs("tr",{className:o("border-base-content/10",s.enableRouting&&"hover cursor-pointer"),onClick:()=>{s.enableRouting&&d(a.slug)},children:[e.jsx("td",{children:a.accepted&&e.jsx(j,{className:"ml-3.5 w-6 fill-green-500 stroke-none"})}),e.jsx("th",{children:a.title}),e.jsx("td",{children:e.jsx(f,{tags:a.tags})}),e.jsx("td",{children:e.jsx(N,{difficulty:a.difficulty})}),e.jsx("td",{children:e.jsxs("span",{className:"text-xs",children:[(c=a.passRate)==null?void 0:c.toFixed(2),"%"]})}),s.showActions&&e.jsx("td",{className:"p-2",children:e.jsx(v,{onClickDelete:()=>n(a.slug)})})]},a.slug)})})]})}),e.jsx(g,{id:"delete_confirm_modal",title:"Confirm",message:"Are you sure to delete this problem?",onClickConfirm:()=>{m(l).then(a=>{window.location.reload()})}})]})},f=s=>e.jsx("div",{className:"space-x-2",children:s.tags.map(t=>e.jsx("div",{className:"badge border-0 bg-base-300 font-semibold text-base-content/80",children:t.name},t.name))}),N=s=>e.jsx("div",{className:o("badge border-0 bg-base-300 font-semibold text-base-content/80",s.difficulty==="easy"&&"bg-success/10 text-success",s.difficulty==="medium"&&"bg-warning/10 text-warning",s.difficulty==="hard"&&"bg-error/10 text-error"),children:s.difficulty}),v=s=>{const t=l=>{l.preventDefault(),l.stopPropagation(),s.onClickDelete();const n=document.getElementById("delete_confirm_modal");n==null||n.showModal()};return e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{className:"btn btn-square btn-ghost btn-sm rounded hover:bg-primary/20",children:e.jsx(u,{className:"h-5 w-5 text-primary"})}),e.jsx("button",{className:"btn btn-square btn-ghost btn-sm rounded hover:bg-error/20",onClick:t,children:e.jsx(b,{className:"h-5 w-5 text-error"})})]})};export{y as P};
