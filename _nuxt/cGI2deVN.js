import{u as p,$ as f,r as _,a0 as O,a1 as j,O as M,a2 as R,b as E,N as H,a3 as P,a4 as N,a5 as q,X as S,E as w}from"./CX3xnJWr.js";const V=s=>s==="defer"||s===!1;function T(...s){var v;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[e,d,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=p(),b=d,C=()=>f.value,B=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server??(a.server=!0),a.default??(a.default=C),a.getCachedData??(a.getCachedData=B),a.lazy??(a.lazy=!1),a.immediate??(a.immediate=!0),a.deep??(a.deep=f.deep),a.dedupe??(a.dedupe="cancel");const u=a.getCachedData(e,t),D=u!=null;if(!t._asyncData[e]||!a.immediate){(v=t.payload._errors)[e]??(v[e]=f.errorValue);const c=a.deep?_:O;t._asyncData[e]={data:c(D?u:a.default()),pending:_(!D),error:j(t.payload._errors,e),status:_("idle"),_default:a.default}}const r={...t._asyncData[e]};delete r._default,r.refresh=r.execute=(c={})=>{if(t._asyncDataPromises[e]){if(V(c.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(c._initial||t.isHydrating&&c._initial!==!1){const o=c._initial?u:a.getCachedData(e,t);if(o!=null)return Promise.resolve(o)}r.pending.value=!0,r.status.value="pending";const l=new Promise((o,i)=>{try{o(b(t))}catch(y){i(y)}}).then(async o=>{if(l.cancelled)return t._asyncDataPromises[e];let i=o;a.transform&&(i=await a.transform(o)),a.pick&&(i=J(i,a.pick)),t.payload.data[e]=i,r.data.value=i,r.error.value=f.errorValue,r.status.value="success"}).catch(o=>{if(l.cancelled)return t._asyncDataPromises[e];r.error.value=S(o),r.data.value=w(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},r.clear=()=>z(t,e);const h=()=>r.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const c=M();if(c&&m&&a.immediate&&!c.sp&&(c.sp=[]),c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;R(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),E(()=>i.splice(0,i.length))}m&&t.isHydrating&&(r.error.value||u!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=q();if(a.watch){const i=H(a.watch,()=>r.refresh());l&&P(i)}const o=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await r.refresh()});l&&P(o)}const g=Promise.resolve(t._asyncDataPromises[e]).then(()=>r);return Object.assign(g,r),g}async function U(s){await new Promise(e=>N(e)),await p().hooks.callHookParallel("app:data:refresh",void 0)}function z(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=f.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=w(s._asyncData[n]._default()),s._asyncData[n].error.value=f.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n]&&(s._asyncDataPromises[n].cancelled=!0),s._asyncDataPromises[n]=void 0)}function J(s,n){const e={};for(const d of n)e[d]=s[d];return e}const Y={faq:"v3.3.0--5JcgBw4JkzpRUCc9inB4k4Yi_rWrBpmOnL4ofBnhD-Y"},x={faq:"_content_faq",info:"_content_info"},F={faq:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",category:"string",tags:"json"}},info:{type:"data",fields:{}}};export{F as a,Y as c,U as r,x as t,T as u};
