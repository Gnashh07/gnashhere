(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{9839:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(7013)}])},2532:(e,t,r)=>{"use strict";var n=r(7836);r(9750);var s=r(6540),i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(s),o=void 0!==n&&n.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,i=void 0===s?o:s;u(a(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var c=document.querySelector('meta[property="csp-nonce"]');this._nonce=c?c.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,r){t&&u(a(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var l=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function d(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return h[n]||(h[n]="jsx-"+l(e+"-"+r)),h[n]}function p(e,t){var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var f=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s;this._sheet=n||new c({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=i,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var s=d(n,r);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return p(s,e)}):[p(s,t)]}}return{styleId:d(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=s.createContext(null);m.displayName="StyleSheetContext";var _=i.default.useInsertionEffect||i.default.useLayoutEffect,S=new f;function v(e){var t=S||s.useContext(m);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=v},5703:(e,t,r)=>{"use strict";e.exports=r(2532).style},7013:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(4848),s=r(5703),i=r.n(s),o=r(6540);function a(){let[e,t]=(0,o.useState)([]),r="Gnashh07";return(0,o.useEffect)(()=>{(async function(){let e=await fetch("https://api.github.com/users/".concat(r,"/repos")),n=await e.json();t(await Promise.all(n.map(async e=>{let t=await c(r,e.name);return{name:e.name,html_url:e.html_url,description:t||"No description available",stars:e.stars||0,forks:e.forks||0}})))})()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:"jsx-742978c24603f631",children:(0,n.jsx)("h1",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"20px"},className:"jsx-742978c24603f631",children:"My Projects"})}),(0,n.jsx)("main",{className:"jsx-742978c24603f631 projects-container",children:e.length>0?e.map(e=>(0,n.jsxs)("div",{className:"jsx-742978c24603f631 project-card",children:[(0,n.jsx)("h2",{className:"jsx-742978c24603f631",children:(0,n.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"jsx-742978c24603f631",children:e.name})}),(0,n.jsx)("p",{className:"jsx-742978c24603f631",children:e.description&&e.description.length>150?e.description.substring(0,150)+"...":e.description}),(0,n.jsxs)("div",{className:"jsx-742978c24603f631 repo-meta",children:["⭐ ",e.stars," Stars | \uD83C\uDF74 ",e.forks," Forks"]})]},e.name)):(0,n.jsx)("p",{style:{textAlign:"center"},className:"jsx-742978c24603f631",children:"Loading projects..."})}),(0,n.jsx)(i(),{id:"742978c24603f631",children:".projects-container.jsx-742978c24603f631{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding:20px}.project-card.jsx-742978c24603f631{background:#111;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:20px;border:1px solid#333;-webkit-box-shadow:0 4px 10px rgba(0,0,0,.3);-moz-box-shadow:0 4px 10px rgba(0,0,0,.3);box-shadow:0 4px 10px rgba(0,0,0,.3);text-align:center}h2.jsx-742978c24603f631 a.jsx-742978c24603f631{text-decoration:none;color:#00b7ff;font-size:20px;font-weight:bold}h2.jsx-742978c24603f631 a.jsx-742978c24603f631:hover{text-decoration:underline}.repo-meta.jsx-742978c24603f631{margin-top:10px;font-size:14px;color:#aaa}"})]})}async function c(e,t){let r=await fetch("https://api.github.com/repos/".concat(e,"/").concat(t));if(!r.ok)return"No README found.";let n=(await r.json()).default_branch,s=await fetch("https://raw.githubusercontent.com/".concat(e,"/").concat(t,"/").concat(n,"/README.md"));return s.ok?await s.text():"No README found."}},9750:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(9839)),_N_E=e.O()}]);