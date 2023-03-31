/*!
 * helper-js v3.1.4
 * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: null
 * Released under the MIT License.
 */function m(t){return Object.prototype.toString.call(t)==="[object Array]"}function p(t){return m(t)?t:[t]}function g(t,o){const e=p(o);for(const i of e)t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")}function c(t,o,e,i){t.addEventListener?t.addEventListener(o,e,i):t.attachEvent&&t.attachEvent("on".concat(o),e,i)}let s=document.querySelector(".back-top"),u=0;const d=()=>{u=window.innerHeight-s.getBoundingClientRect().bottom-10};d();c(window,"resize",d);let l=document.scrollingElement;l.scrollHeight>l.clientHeight&&(s.style.visibility="unset");let a=0,n,r=!0;const f=()=>{let t=l.scrollTop-a>0;a=l.scrollTop;let o=l.scrollTop/(l.scrollHeight-l.clientHeight);s.style.translate=`0px ${u*o}px`;let e=0;r||(e=t?0:180),s.style.rotate=e+"deg",r=!1,n&&(clearTimeout(n),n=null),n=setTimeout(()=>{s.style.rotate="0deg"},2e3)};f();c(window,"scroll",f,{passive:!0});c(s,"click",()=>{document.body.scrollIntoView({behavior:"smooth"})});export{c as o,g as r};
