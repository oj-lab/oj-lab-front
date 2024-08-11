import{j as e,D as l,d as r,R as i,b as c,e as d}from"./index-I0-dBVJK.js";import{P as m}from"./problem-RaPNGio-.js";const h=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 7l16 0"}),e.jsx("path",{d:"M10 11l0 6"}),e.jsx("path",{d:"M14 11l0 6"}),e.jsx("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),e.jsx("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]}),x=s=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",className:s.className,children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}),e.jsx("path",{d:"M13.5 6.5l4 4"})]}),j=s=>{const{t}=r();return e.jsxs("dialog",{id:s.id,className:"modal",children:[e.jsxs("div",{className:"modal-box",children:[s.title&&e.jsx("h3",{className:"text-lg font-bold",children:t(s.title)}),e.jsx("p",{className:"py-4",children:t(s.message)}),e.jsx("div",{className:"modal-action",children:e.jsxs("form",{method:"dialog",className:"flex gap-2",children:[e.jsx("button",{className:"btn btn-sm",children:t("Cancel")}),e.jsx("button",{className:"btn btn-error btn-sm",onClick:s.onClickConfirm,children:t("Confirm")})]})})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{})})]})},b=[{name:"Title",uid:"title"},{name:"Tags",uid:"tags"},{name:"Actions",uid:"actions"}],w=s=>{const[t,n]=i.useState(""),o=c();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.className,children:e.jsxs("table",{className:"table","aria-label":"Problem Table",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-base-content/10",children:b.map(a=>a.uid==="actions"&&!s.showActions?null:e.jsx("th",{children:a.name},a.uid))})}),e.jsx("tbody",{children:s.data.map(a=>e.jsxs("tr",{className:d("border-base-content/10",s.enableRouting&&"hover cursor-pointer"),onClick:()=>{s.enableRouting&&o(a.slug)},children:[e.jsx("th",{className:"w-1/3",children:a.title}),e.jsx("td",{className:"w-1/3",children:e.jsx(u,{tags:a.tags})}),s.showActions&&e.jsx("td",{className:"w-1/3 p-2",children:e.jsx(g,{onClickDelete:()=>n(a.slug)})})]},a.slug))})]})}),e.jsx(j,{id:"delete_confirm_modal",title:"Confirm",message:"Are you sure to delete this problem?",onClickConfirm:()=>{m.deleteProblem(t).then(a=>{window.location.reload()})}})]})},u=s=>e.jsx("div",{className:"space-x-2",children:s.tags.map(t=>e.jsx("div",{className:"badge border-0 bg-base-300 font-semibold text-base-content/80",children:t.name},t.name))}),g=s=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{className:"btn btn-square btn-ghost btn-sm rounded hover:bg-primary/20",children:e.jsx(x,{className:"h-5 w-5 text-primary"})}),e.jsx("button",{className:"btn btn-square btn-ghost btn-sm rounded hover:bg-error/20",onClick:t=>{t.preventDefault(),t.stopPropagation(),s.onClickDelete();const n=document.getElementById("delete_confirm_modal");n==null||n.showModal()},children:e.jsx(h,{className:"h-5 w-5 text-error"})})]})});export{w as P};
