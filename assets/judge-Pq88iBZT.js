import{h as f,r,c as h,g as p,A as J}from"./index-uGkR4gBj.js";async function w(t,e,s){let a=JSON.stringify({code:e,language:s}),u=await f.post(`/api/v1/problem/${t}/judge`,a);if(u.status!==200)throw Error("failed to run judge");return u.data}async function E(t,e){t=t||10,e=e||0;let s=await f.get("/api/v1/judge",{params:{limit:t,offset:e}});if(s.status!==200)throw Error("failed to get judge list");return s.data}async function $(t){let e=await f.get(`/api/v1/judge/${t}`);if(e.status!==200)throw Error("failed to get judge detail");return e.data}const b=t=>{const[e,s]=r.useState();r.useEffect(()=>{$(t).then(a=>{s(a)}).catch(a=>{console.log(a)})},[t]);function o(){return e}return{getJudge:o}},x=t=>{const e=h(),{t:s}=p(),[o,a]=r.useState(""),[u,c]=r.useState("");function i(l){w(t,o,u).then(g=>{l(g)}).catch(g=>{e({type:J,payload:{id:"judge-fetch-error",content:`${s("Failed to fetch judge")}`,duration:3e3,level:"error",err:g.toString()}})})}function d(){return u}return{runJudge:i,setSrc:a,setSrcLanguage:c,getSrcLanguage:d}},F=()=>{const t=h(),{t:e}=p(),[s,o]=r.useState(0),[a,u]=r.useState(10),[c,i]=r.useState(0),[d,l]=r.useState([]),g=()=>{E().then(n=>{l(n.list),o(n.total)}).catch(n=>{t({type:J,payload:{id:"judge-list-fetch-error",content:`${e("Failed to fetch judge list")}`,duration:3e3,level:"error",err:n.toString()}})})};r.useEffect(g,[t,a,c,e]);function S(){return d}function j(){g()}function L(n){return Math.ceil(s/n)}function y(n,v){u(n),i(v)}return{getJudgeList:S,refreshJudgeList:j,getPageCount:L,setPagenation:y}};export{F as a,b,x as u};
