(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vt(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Y={},hn=[],Oe=()=>{},Qi=()=>!1,ut=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),pt=e=>e.startsWith("onUpdate:"),le=Object.assign,Kt=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},no=Object.prototype.hasOwnProperty,G=(e,n)=>no.call(e,n),N=Array.isArray,vn=e=>Hn(e)==="[object Map]",gt=e=>Hn(e)==="[object Set]",gi=e=>Hn(e)==="[object Date]",q=e=>typeof e=="function",te=e=>typeof e=="string",je=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Yi=e=>(V(e)||q(e))&&q(e.then)&&q(e.catch),Zi=Object.prototype.toString,Hn=e=>Zi.call(e),to=e=>Hn(e).slice(8,-1),Ji=e=>Hn(e)==="[object Object]",Qt=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Vt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_t=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},io=/-\w/g,xe=_t(e=>e.replace(io,n=>n.slice(1).toUpperCase())),so=/\B([A-Z])/g,mn=_t(e=>e.replace(so,"-$1").toLowerCase()),Xi=_t(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dt=_t(e=>e?`on${Xi(e)}`:""),qe=(e,n)=>!Object.is(e,n),et=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},es=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},ft=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let _i;const ht=()=>_i||(_i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yt(e){if(N(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=te(i)?ro(i):Yt(i);if(s)for(const o in s)n[o]=s[o]}return n}else if(te(e)||V(e))return e}const oo=/;(?![^(]*\))/g,ao=/:([^]+)/,co=/\/\*[^]*?\*\//g;function ro(e){const n={};return e.replace(co,"").split(oo).forEach(t=>{if(t){const i=t.split(ao);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function nn(e){let n="";if(te(e))n=e;else if(N(e))for(let t=0;t<e.length;t++){const i=nn(e[t]);i&&(n+=i+" ")}else if(V(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const lo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mo=Vt(lo);function ns(e){return!!e||e===""}function uo(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=Gn(e[i],n[i]);return t}function Gn(e,n){if(e===n)return!0;let t=gi(e),i=gi(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=je(e),i=je(n),t||i)return e===n;if(t=N(e),i=N(n),t||i)return t&&i?uo(e,n):!1;if(t=V(e),i=V(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,o=Object.keys(n).length;if(s!==o)return!1;for(const a in e){const c=e.hasOwnProperty(a),l=n.hasOwnProperty(a);if(c&&!l||!c&&l||!Gn(e[a],n[a]))return!1}}return String(e)===String(n)}function po(e,n){return e.findIndex(t=>Gn(t,n))}const ts=e=>!!(e&&e.__v_isRef===!0),z=e=>te(e)?e:e==null?"":N(e)||V(e)&&(e.toString===Zi||!q(e.toString))?ts(e)?z(e.value):JSON.stringify(e,is,2):String(e),is=(e,n)=>ts(n)?is(e,n.value):vn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],o)=>(t[It(i,o)+" =>"]=s,t),{})}:gt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>It(t))}:je(n)?It(n):V(n)&&!N(n)&&!Ji(n)?String(n):n,It=(e,n="")=>{var t;return je(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class go{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=de,!n&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=de;try{return de=this,n()}finally{de=t}}}on(){++this._on===1&&(this.prevScope=de,de=this)}off(){if(this._on>0&&--this._on===0){if(de===this)de=this.prevScope;else{let n=de;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function _o(){return de}let X;const Tt=new WeakSet;class ss{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tt.has(this)&&(Tt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||as(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fi(this),cs(this);const n=X,t=De;X=this,De=!0;try{return this.fn()}finally{rs(this),X=n,De=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Xt(n);this.deps=this.depsTail=void 0,fi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ft(this)&&this.run()}get dirty(){return Ft(this)}}let os=0,Rn,Nn;function as(e,n=!1){if(e.flags|=8,n){e.next=Nn,Nn=e;return}e.next=Rn,Rn=e}function Zt(){os++}function Jt(){if(--os>0)return;if(Nn){let n=Nn;for(Nn=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Rn;){let n=Rn;for(Rn=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function cs(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function rs(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Xt(i),fo(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function Ft(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ls(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ls(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===jn)||(e.globalVersion=jn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ft(e))))return;e.flags|=2;const n=e.dep,t=X,i=De;X=e,De=!0;try{cs(e);const s=e.fn(e._value);(n.version===0||qe(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{X=t,De=i,rs(e),e.flags&=-3}}function Xt(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Xt(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function fo(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let De=!0;const ds=[];function Ye(){ds.push(De),De=!1}function Ze(){const e=ds.pop();De=e===void 0?!0:e}function fi(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=X;X=void 0;try{n()}finally{X=t}}}let jn=0;class ho{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ei{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!X||!De||X===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==X)t=this.activeLink=new ho(X,this),X.deps?(t.prevDep=X.depsTail,X.depsTail.nextDep=t,X.depsTail=t):X.deps=X.depsTail=t,ms(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=X.depsTail,t.nextDep=void 0,X.depsTail.nextDep=t,X.depsTail=t,X.deps===t&&(X.deps=i)}return t}trigger(n){this.version++,jn++,this.notify(n)}notify(n){Zt();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jt()}}}function ms(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)ms(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const qt=new WeakMap,ln=Symbol(""),Ot=Symbol(""),$n=Symbol("");function me(e,n,t){if(De&&X){let i=qt.get(e);i||qt.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new ei),s.map=i,s.key=t),s.track()}}function Ke(e,n,t,i,s,o){const a=qt.get(e);if(!a){jn++;return}const c=l=>{l&&l.trigger()};if(Zt(),n==="clear")a.forEach(c);else{const l=N(e),p=l&&Qt(t);if(l&&t==="length"){const m=Number(i);a.forEach((_,T)=>{(T==="length"||T===$n||!je(T)&&T>=m)&&c(_)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),p&&c(a.get($n)),n){case"add":l?p&&c(a.get("length")):(c(a.get(ln)),vn(e)&&c(a.get(Ot)));break;case"delete":l||(c(a.get(ln)),vn(e)&&c(a.get(Ot)));break;case"set":vn(e)&&c(a.get(ln));break}}Jt()}function _n(e){const n=H(e);return n===e?n:(me(n,"iterate",$n),Se(e)?n:n.map(Ie))}function vt(e){return me(e=H(e),"iterate",$n),e}function Ne(e,n){return Je(e)?kn(dn(e)?Ie(n):n):Ie(n)}const vo={__proto__:null,[Symbol.iterator](){return Ct(this,Symbol.iterator,e=>Ne(this,e))},concat(...e){return _n(this).concat(...e.map(n=>N(n)?_n(n):n))},entries(){return Ct(this,"entries",e=>(e[1]=Ne(this,e[1]),e))},every(e,n){return Be(this,"every",e,n,void 0,arguments)},filter(e,n){return Be(this,"filter",e,n,t=>t.map(i=>Ne(this,i)),arguments)},find(e,n){return Be(this,"find",e,n,t=>Ne(this,t),arguments)},findIndex(e,n){return Be(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Be(this,"findLast",e,n,t=>Ne(this,t),arguments)},findLastIndex(e,n){return Be(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Be(this,"forEach",e,n,void 0,arguments)},includes(...e){return Et(this,"includes",e)},indexOf(...e){return Et(this,"indexOf",e)},join(e){return _n(this).join(e)},lastIndexOf(...e){return Et(this,"lastIndexOf",e)},map(e,n){return Be(this,"map",e,n,void 0,arguments)},pop(){return Cn(this,"pop")},push(...e){return Cn(this,"push",e)},reduce(e,...n){return hi(this,"reduce",e,n)},reduceRight(e,...n){return hi(this,"reduceRight",e,n)},shift(){return Cn(this,"shift")},some(e,n){return Be(this,"some",e,n,void 0,arguments)},splice(...e){return Cn(this,"splice",e)},toReversed(){return _n(this).toReversed()},toSorted(e){return _n(this).toSorted(e)},toSpliced(...e){return _n(this).toSpliced(...e)},unshift(...e){return Cn(this,"unshift",e)},values(){return Ct(this,"values",e=>Ne(this,e))}};function Ct(e,n,t){const i=vt(e),s=i[n]();return i!==e&&!Se(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=t(o.value)),o}),s}const yo=Array.prototype;function Be(e,n,t,i,s,o){const a=vt(e),c=a!==e&&!Se(e),l=a[n];if(l!==yo[n]){const _=l.apply(e,o);return c?Ie(_):_}let p=t;a!==e&&(c?p=function(_,T){return t.call(this,Ne(e,_),T,e)}:t.length>2&&(p=function(_,T){return t.call(this,_,T,e)}));const m=l.call(a,p,i);return c&&s?s(m):m}function hi(e,n,t,i){const s=vt(e),o=s!==e&&!Se(e);let a=t,c=!1;s!==e&&(o?(c=i.length===0,a=function(p,m,_){return c&&(c=!1,p=Ne(e,p)),t.call(this,p,Ne(e,m),_,e)}):t.length>3&&(a=function(p,m,_){return t.call(this,p,m,_,e)}));const l=s[n](a,...i);return c?Ne(e,l):l}function Et(e,n,t){const i=H(e);me(i,"iterate",$n);const s=i[n](...t);return(s===-1||s===!1)&&si(t[0])?(t[0]=H(t[0]),i[n](...t)):s}function Cn(e,n,t=[]){Ye(),Zt();const i=H(e)[n].apply(e,t);return Jt(),Ze(),i}const wo=Vt("__proto__,__v_isRef,__isVue"),us=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function bo(e){je(e)||(e=String(e));const n=H(this);return me(n,"has",e),n.hasOwnProperty(e)}class ps{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw")return i===(s?o?Ao:hs:o?fs:_s).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const a=N(n);if(!s){let l;if(a&&(l=vo[t]))return l;if(t==="hasOwnProperty")return bo}const c=Reflect.get(n,t,ue(n)?n:i);if((je(t)?us.has(t):wo(t))||(s||me(n,"get",t),o))return c;if(ue(c)){const l=a&&Qt(t)?c:c.value;return s&&V(l)?jt(l):l}return V(c)?s?jt(c):ti(c):c}}class gs extends ps{constructor(n=!1){super(!1,n)}set(n,t,i,s){let o=n[t];const a=N(n)&&Qt(t);if(!this._isShallow){const p=Je(o);if(!Se(i)&&!Je(i)&&(o=H(o),i=H(i)),!a&&ue(o)&&!ue(i))return p||(o.value=i),!0}const c=a?Number(t)<n.length:G(n,t),l=Reflect.set(n,t,i,ue(n)?n:s);return n===H(s)&&(c?qe(i,o)&&Ke(n,"set",t,i):Ke(n,"add",t,i)),l}deleteProperty(n,t){const i=G(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&Ke(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!je(t)||!us.has(t))&&me(n,"has",t),i}ownKeys(n){return me(n,"iterate",N(n)?"length":ln),Reflect.ownKeys(n)}}class ko extends ps{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const So=new gs,xo=new ko,Do=new gs(!0);const Wt=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function Io(e,n,t){return function(...i){const s=this.__v_raw,o=H(s),a=vn(o),c=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,p=s[e](...i),m=t?Wt:n?kn:Ie;return!n&&me(o,"iterate",l?Ot:ln),le(Object.create(p),{next(){const{value:_,done:T}=p.next();return T?{value:_,done:T}:{value:c?[m(_[0]),m(_[1])]:m(_),done:T}}})}}function Zn(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function To(e,n){const t={get(s){const o=this.__v_raw,a=H(o),c=H(s);e||(qe(s,c)&&me(a,"get",s),me(a,"get",c));const{has:l}=Yn(a),p=n?Wt:e?kn:Ie;if(l.call(a,s))return p(o.get(s));if(l.call(a,c))return p(o.get(c));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!e&&me(H(s),"iterate",ln),s.size},has(s){const o=this.__v_raw,a=H(o),c=H(s);return e||(qe(s,c)&&me(a,"has",s),me(a,"has",c)),s===c?o.has(s):o.has(s)||o.has(c)},forEach(s,o){const a=this,c=a.__v_raw,l=H(c),p=n?Wt:e?kn:Ie;return!e&&me(l,"iterate",ln),c.forEach((m,_)=>s.call(o,p(m),p(_),a))}};return le(t,e?{add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear")}:{add(s){const o=H(this),a=Yn(o),c=H(s),l=!n&&!Se(s)&&!Je(s)?c:s;return a.has.call(o,l)||qe(s,l)&&a.has.call(o,s)||qe(c,l)&&a.has.call(o,c)||(o.add(l),Ke(o,"add",l,l)),this},set(s,o){!n&&!Se(o)&&!Je(o)&&(o=H(o));const a=H(this),{has:c,get:l}=Yn(a);let p=c.call(a,s);p||(s=H(s),p=c.call(a,s));const m=l.call(a,s);return a.set(s,o),p?qe(o,m)&&Ke(a,"set",s,o):Ke(a,"add",s,o),this},delete(s){const o=H(this),{has:a,get:c}=Yn(o);let l=a.call(o,s);l||(s=H(s),l=a.call(o,s)),c&&c.call(o,s);const p=o.delete(s);return l&&Ke(o,"delete",s,void 0),p},clear(){const s=H(this),o=s.size!==0,a=s.clear();return o&&Ke(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Io(s,e,n)}),t}function ni(e,n){const t=To(e,n);return(i,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(G(t,s)&&s in i?t:i,s,o)}const Co={get:ni(!1,!1)},Eo={get:ni(!1,!0)},Po={get:ni(!0,!1)};const _s=new WeakMap,fs=new WeakMap,hs=new WeakMap,Ao=new WeakMap;function Lo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mo(e){return e.__v_skip||!Object.isExtensible(e)?0:Lo(to(e))}function ti(e){return Je(e)?e:ii(e,!1,So,Co,_s)}function Ro(e){return ii(e,!1,Do,Eo,fs)}function jt(e){return ii(e,!0,xo,Po,hs)}function ii(e,n,t,i,s){if(!V(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=Mo(e);if(o===0)return e;const a=s.get(e);if(a)return a;const c=new Proxy(e,o===2?i:t);return s.set(e,c),c}function dn(e){return Je(e)?dn(e.__v_raw):!!(e&&e.__v_isReactive)}function Je(e){return!!(e&&e.__v_isReadonly)}function Se(e){return!!(e&&e.__v_isShallow)}function si(e){return e?!!e.__v_raw:!1}function H(e){const n=e&&e.__v_raw;return n?H(n):e}function No(e){return!G(e,"__v_skip")&&Object.isExtensible(e)&&es(e,"__v_skip",!0),e}const Ie=e=>V(e)?ti(e):e,kn=e=>V(e)?jt(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function Le(e){return Fo(e,!1)}function Fo(e,n){return ue(e)?e:new qo(e,n)}class qo{constructor(n,t){this.dep=new ei,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:H(n),this._value=t?n:Ie(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||Se(n)||Je(n);n=i?n:H(n),qe(n,t)&&(this._rawValue=n,this._value=i?n:Ie(n),this.dep.trigger())}}function Oo(e){return ue(e)?e.value:e}const Wo={get:(e,n,t)=>n==="__v_raw"?e:Oo(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return ue(s)&&!ue(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function vs(e){return dn(e)?e:new Proxy(e,Wo)}class jo{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new ei(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&X!==this)return as(this,!0),!0}get value(){const n=this.dep.track();return ls(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function $o(e,n,t=!1){let i,s;return q(e)?i=e:(i=e.get,s=e.set),new jo(i,s,t)}const Jn={},st=new WeakMap;let cn;function Uo(e,n=!1,t=cn){if(t){let i=st.get(t);i||st.set(t,i=[]),i.push(e)}}function zo(e,n,t=Y){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:c,call:l}=t,p=L=>s?L:Se(L)||s===!1||s===0?Qe(L,1):Qe(L);let m,_,T,C,B=!1,F=!1;if(ue(e)?(_=()=>e.value,B=Se(e)):dn(e)?(_=()=>p(e),B=!0):N(e)?(F=!0,B=e.some(L=>dn(L)||Se(L)),_=()=>e.map(L=>{if(ue(L))return L.value;if(dn(L))return p(L);if(q(L))return l?l(L,2):L()})):q(e)?n?_=l?()=>l(e,2):e:_=()=>{if(T){Ye();try{T()}finally{Ze()}}const L=cn;cn=m;try{return l?l(e,3,[C]):e(C)}finally{cn=L}}:_=Oe,n&&s){const L=_,ie=s===!0?1/0:s;_=()=>Qe(L(),ie)}const ee=_o(),Z=()=>{m.stop(),ee&&ee.active&&Kt(ee.effects,m)};if(o&&n){const L=n;n=(...ie)=>{L(...ie),Z()}}let W=F?new Array(e.length).fill(Jn):Jn;const K=L=>{if(!(!(m.flags&1)||!m.dirty&&!L))if(n){const ie=m.run();if(s||B||(F?ie.some((Te,be)=>qe(Te,W[be])):qe(ie,W))){T&&T();const Te=cn;cn=m;try{const be=[ie,W===Jn?void 0:F&&W[0]===Jn?[]:W,C];W=ie,l?l(n,3,be):n(...be)}finally{cn=Te}}}else m.run()};return c&&c(K),m=new ss(_),m.scheduler=a?()=>a(K,!1):K,C=L=>Uo(L,!1,m),T=m.onStop=()=>{const L=st.get(m);if(L){if(l)l(L,4);else for(const ie of L)ie();st.delete(m)}},n?i?K(!0):W=m.run():a?a(K.bind(null,!0),!0):m.run(),Z.pause=m.pause.bind(m),Z.resume=m.resume.bind(m),Z.stop=Z,Z}function Qe(e,n=1/0,t){if(n<=0||!V(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,ue(e))Qe(e.value,n,t);else if(N(e))for(let i=0;i<e.length;i++)Qe(e[i],n,t);else if(gt(e)||vn(e))e.forEach(i=>{Qe(i,n,t)});else if(Ji(e)){for(const i in e)Qe(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Qe(e[i],n,t)}return e}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(e,n,t,i){try{return i?e(...i):e()}catch(s){yt(s,n,t)}}function $e(e,n,t,i){if(q(e)){const s=Vn(e,n,t,i);return s&&Yi(s)&&s.catch(o=>{yt(o,n,t)}),s}if(N(e)){const s=[];for(let o=0;o<e.length;o++)s.push($e(e[o],n,t,i));return s}}function yt(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||Y;if(n){let c=n.parent;const l=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const m=c.ec;if(m){for(let _=0;_<m.length;_++)if(m[_](e,l,p)===!1)return}c=c.parent}if(o){Ye(),Vn(o,null,10,[e,l,p]),Ze();return}}Bo(e,t,s,i,a)}function Bo(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const ge=[];let Re=-1;const yn=[];let en=null,fn=0;const ys=Promise.resolve();let ot=null;function ws(e){const n=ot||ys;return e?n.then(this?e.bind(this):e):n}function Ho(e){let n=Re+1,t=ge.length;for(;n<t;){const i=n+t>>>1,s=ge[i],o=Un(s);o<e||o===e&&s.flags&2?n=i+1:t=i}return n}function oi(e){if(!(e.flags&1)){const n=Un(e),t=ge[ge.length-1];!t||!(e.flags&2)&&n>=Un(t)?ge.push(e):ge.splice(Ho(n),0,e),e.flags|=1,bs()}}function bs(){ot||(ot=ys.then(Ss))}function Go(e){N(e)?yn.push(...e):en&&e.id===-1?en.splice(fn+1,0,e):e.flags&1||(yn.push(e),e.flags|=1),bs()}function vi(e,n,t=Re+1){for(;t<ge.length;t++){const i=ge[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;ge.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ks(e){if(yn.length){const n=[...new Set(yn)].sort((t,i)=>Un(t)-Un(i));if(yn.length=0,en){en.push(...n);return}for(en=n,fn=0;fn<en.length;fn++){const t=en[fn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}en=null,fn=0}}const Un=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ss(e){try{for(Re=0;Re<ge.length;Re++){const n=ge[Re];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Vn(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Re<ge.length;Re++){const n=ge[Re];n&&(n.flags&=-2)}Re=-1,ge.length=0,ks(),ot=null,(ge.length||yn.length)&&Ss()}}let ke=null,xs=null;function at(e){const n=ke;return ke=e,xs=e&&e.type.__scopeId||null,n}function Vo(e,n=ke,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&Ei(-1);const o=at(n);let a;try{a=e(...s)}finally{at(o),i._d&&Ei(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Pt(e,n){if(ke===null)return e;const t=St(ke),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[o,a,c,l=Y]=n[s];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&Qe(a),i.push({dir:o,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function on(e,n,t,i){const s=e.dirs,o=n&&n.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let l=c.dir[i];l&&(Ye(),$e(l,t,8,[e.el,c,e,n]),Ze())}}function Ko(e,n){if(_e){let t=_e.provides;const i=_e.parent&&_e.parent.provides;i===t&&(t=_e.provides=Object.create(i)),t[e]=n}}function nt(e,n,t=!1){const i=Ka();if(i||wn){let s=wn?wn._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&q(n)?n.call(i&&i.proxy):n}}const Qo=Symbol.for("v-scx"),Yo=()=>nt(Qo);function At(e,n,t){return Ds(e,n,t)}function Ds(e,n,t=Y){const{immediate:i,deep:s,flush:o,once:a}=t,c=le({},t),l=n&&i||!n&&o!=="post";let p;if(Bn){if(o==="sync"){const C=Yo();p=C.__watcherHandles||(C.__watcherHandles=[])}else if(!l){const C=()=>{};return C.stop=Oe,C.resume=Oe,C.pause=Oe,C}}const m=_e;c.call=(C,B,F)=>$e(C,m,B,F);let _=!1;o==="post"?c.scheduler=C=>{he(C,m&&m.suspense)}:o!=="sync"&&(_=!0,c.scheduler=(C,B)=>{B?C():oi(C)}),c.augmentJob=C=>{n&&(C.flags|=4),_&&(C.flags|=2,m&&(C.id=m.uid,C.i=m))};const T=zo(e,n,c);return Bn&&(p?p.push(T):l&&T()),T}function Zo(e,n,t){const i=this.proxy,s=te(e)?e.includes(".")?Is(i,e):()=>i[e]:e.bind(i,i);let o;q(n)?o=n:(o=n.handler,t=n);const a=Kn(this),c=Ds(s,o.bind(i),t);return a(),c}function Is(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Jo=Symbol("_vte"),Xo=e=>e.__isTeleport,ea=Symbol("_leaveCb");function ai(e,n){e.shapeFlag&6&&e.component?(e.transition=n,ai(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function na(e,n){return q(e)?le({name:e.name},n,{setup:e}):e}function Ts(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function yi(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const ct=new WeakMap;function Fn(e,n,t,i,s=!1){if(N(e)){e.forEach((F,ee)=>Fn(F,n&&(N(n)?n[ee]:n),t,i,s));return}if(qn(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fn(e,n,t,i.component.subTree);return}const o=i.shapeFlag&4?St(i.component):i.el,a=s?null:o,{i:c,r:l}=e,p=n&&n.r,m=c.refs===Y?c.refs={}:c.refs,_=c.setupState,T=H(_),C=_===Y?Qi:F=>yi(m,F)?!1:G(T,F),B=(F,ee)=>!(ee&&yi(m,ee));if(p!=null&&p!==l){if(wi(n),te(p))m[p]=null,C(p)&&(_[p]=null);else if(ue(p)){const F=n;B(p,F.k)&&(p.value=null),F.k&&(m[F.k]=null)}}if(q(l))Vn(l,c,12,[a,m]);else{const F=te(l),ee=ue(l);if(F||ee){const Z=()=>{if(e.f){const W=F?C(l)?_[l]:m[l]:B()||!e.k?l.value:m[e.k];if(s)N(W)&&Kt(W,o);else if(N(W))W.includes(o)||W.push(o);else if(F)m[l]=[o],C(l)&&(_[l]=m[l]);else{const K=[o];B(l,e.k)&&(l.value=K),e.k&&(m[e.k]=K)}}else F?(m[l]=a,C(l)&&(_[l]=a)):ee&&(B(l,e.k)&&(l.value=a),e.k&&(m[e.k]=a))};if(a){const W=()=>{Z(),ct.delete(e)};W.id=-1,ct.set(e,W),he(W,t)}else wi(e),Z()}}}function wi(e){const n=ct.get(e);n&&(n.flags|=8,ct.delete(e))}ht().requestIdleCallback;ht().cancelIdleCallback;const qn=e=>!!e.type.__asyncLoader,Cs=e=>e.type.__isKeepAlive;function ta(e,n){Es(e,"a",n)}function ia(e,n){Es(e,"da",n)}function Es(e,n,t=_e){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(wt(n,i,t),t){let s=t.parent;for(;s&&s.parent;)Cs(s.parent.vnode)&&sa(i,n,t,s),s=s.parent}}function sa(e,n,t,i){const s=wt(n,e,i,!0);As(()=>{Kt(i[n],s)},t)}function wt(e,n,t=_e,i=!1){if(t){const s=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...a)=>{Ye();const c=Kn(t),l=$e(n,t,e,a);return c(),Ze(),l});return i?s.unshift(o):s.push(o),o}}const Xe=e=>(n,t=_e)=>{(!Bn||e==="sp")&&wt(e,(...i)=>n(...i),t)},oa=Xe("bm"),Ps=Xe("m"),aa=Xe("bu"),ca=Xe("u"),ra=Xe("bum"),As=Xe("um"),la=Xe("sp"),da=Xe("rtg"),ma=Xe("rtc");function ua(e,n=_e){wt("ec",e,n)}const pa=Symbol.for("v-ndc");function Xn(e,n,t,i){let s;const o=t,a=N(e);if(a||te(e)){const c=a&&dn(e);let l=!1,p=!1;c&&(l=!Se(e),p=Je(e),e=vt(e)),s=new Array(e.length);for(let m=0,_=e.length;m<_;m++)s[m]=n(l?p?kn(Ie(e[m])):Ie(e[m]):e[m],m,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=n(c+1,c,void 0,o)}else if(V(e))if(e[Symbol.iterator])s=Array.from(e,(c,l)=>n(c,l,void 0,o));else{const c=Object.keys(e);s=new Array(c.length);for(let l=0,p=c.length;l<p;l++){const m=c[l];s[l]=n(e[m],m,l,o)}}else s=[];return s}const $t=e=>e?Js(e)?St(e):$t(e.parent):null,On=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$t(e.parent),$root:e=>$t(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ms(e),$forceUpdate:e=>e.f||(e.f=()=>{oi(e.update)}),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>Zo.bind(e)}),Lt=(e,n)=>e!==Y&&!e.__isScriptSetup&&G(e,n),ga={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:l}=e;if(n[0]!=="$"){const T=a[n];if(T!==void 0)switch(T){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if(Lt(i,n))return a[n]=1,i[n];if(s!==Y&&G(s,n))return a[n]=2,s[n];if(G(o,n))return a[n]=3,o[n];if(t!==Y&&G(t,n))return a[n]=4,t[n];Ut&&(a[n]=0)}}const p=On[n];let m,_;if(p)return n==="$attrs"&&me(e.attrs,"get",""),p(e);if((m=c.__cssModules)&&(m=m[n]))return m;if(t!==Y&&G(t,n))return a[n]=4,t[n];if(_=l.config.globalProperties,G(_,n))return _[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:o}=e;return Lt(s,n)?(s[n]=t,!0):i!==Y&&G(i,n)?(i[n]=t,!0):G(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:o,type:a}},c){let l;return!!(t[c]||e!==Y&&c[0]!=="$"&&G(e,c)||Lt(n,c)||G(o,c)||G(i,c)||G(On,c)||G(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:G(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function bi(e){return N(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ut=!0;function _a(e){const n=Ms(e),t=e.proxy,i=e.ctx;Ut=!1,n.beforeCreate&&ki(n.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:p,created:m,beforeMount:_,mounted:T,beforeUpdate:C,updated:B,activated:F,deactivated:ee,beforeDestroy:Z,beforeUnmount:W,destroyed:K,unmounted:L,render:ie,renderTracked:Te,renderTriggered:be,errorCaptured:Ce,serverPrefetch:un,expose:Ue,inheritAttrs:sn,components:pn,directives:S,filters:u}=n;if(p&&fa(p,i,null),a)for(const P in a){const M=a[P];q(M)&&(i[P]=M.bind(t))}if(s){const P=s.call(t,t);V(P)&&(e.data=ti(P))}if(Ut=!0,o)for(const P in o){const M=o[P],j=q(M)?M.bind(t,t):q(M.get)?M.get.bind(t,t):Oe,ce=!q(M)&&q(M.set)?M.set.bind(t):Oe,U=An({get:j,set:ce});Object.defineProperty(i,P,{enumerable:!0,configurable:!0,get:()=>U.value,set:fe=>U.value=fe})}if(c)for(const P in c)Ls(c[P],i,t,P);if(l){const P=q(l)?l.call(t):l;Reflect.ownKeys(P).forEach(M=>{Ko(M,P[M])})}m&&ki(m,e,"c");function f(P,M){N(M)?M.forEach(j=>P(j.bind(t))):M&&P(M.bind(t))}if(f(oa,_),f(Ps,T),f(aa,C),f(ca,B),f(ta,F),f(ia,ee),f(ua,Ce),f(ma,Te),f(da,be),f(ra,W),f(As,L),f(la,un),N(Ue))if(Ue.length){const P=e.exposed||(e.exposed={});Ue.forEach(M=>{Object.defineProperty(P,M,{get:()=>t[M],set:j=>t[M]=j,enumerable:!0})})}else e.exposed||(e.exposed={});ie&&e.render===Oe&&(e.render=ie),sn!=null&&(e.inheritAttrs=sn),pn&&(e.components=pn),S&&(e.directives=S),un&&Ts(e)}function fa(e,n,t=Oe){N(e)&&(e=zt(e));for(const i in e){const s=e[i];let o;V(s)?"default"in s?o=nt(s.from||i,s.default,!0):o=nt(s.from||i):o=nt(s),ue(o)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):n[i]=o}}function ki(e,n,t){$e(N(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ls(e,n,t,i){let s=i.includes(".")?Is(t,i):()=>t[i];if(te(e)){const o=n[e];q(o)&&At(s,o)}else if(q(e))At(s,e.bind(t));else if(V(e))if(N(e))e.forEach(o=>Ls(o,n,t,i));else{const o=q(e.handler)?e.handler.bind(t):n[e.handler];q(o)&&At(s,o,e)}}function Ms(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(n);let l;return c?l=c:!s.length&&!t&&!i?l=n:(l={},s.length&&s.forEach(p=>rt(l,p,a,!0)),rt(l,n,a)),V(n)&&o.set(n,l),l}function rt(e,n,t,i=!1){const{mixins:s,extends:o}=n;o&&rt(e,o,t,!0),s&&s.forEach(a=>rt(e,a,t,!0));for(const a in n)if(!(i&&a==="expose")){const c=ha[a]||t&&t[a];e[a]=c?c(e[a],n[a]):n[a]}return e}const ha={data:Si,props:xi,emits:xi,methods:Pn,computed:Pn,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:Pn,directives:Pn,watch:ya,provide:Si,inject:va};function Si(e,n){return n?e?function(){return le(q(e)?e.call(this,this):e,q(n)?n.call(this,this):n)}:n:e}function va(e,n){return Pn(zt(e),zt(n))}function zt(e){if(N(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function pe(e,n){return e?[...new Set([].concat(e,n))]:n}function Pn(e,n){return e?le(Object.create(null),e,n):n}function xi(e,n){return e?N(e)&&N(n)?[...new Set([...e,...n])]:le(Object.create(null),bi(e),bi(n??{})):n}function ya(e,n){if(!e)return n;if(!n)return e;const t=le(Object.create(null),e);for(const i in n)t[i]=pe(e[i],n[i]);return t}function Rs(){return{app:null,config:{isNativeTag:Qi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wa=0;function ba(e,n){return function(i,s=null){q(i)||(i=le({},i)),s!=null&&!V(s)&&(s=null);const o=Rs(),a=new WeakSet,c=[];let l=!1;const p=o.app={_uid:wa++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:ec,get config(){return o.config},set config(m){},use(m,..._){return a.has(m)||(m&&q(m.install)?(a.add(m),m.install(p,..._)):q(m)&&(a.add(m),m(p,..._))),p},mixin(m){return o.mixins.includes(m)||o.mixins.push(m),p},component(m,_){return _?(o.components[m]=_,p):o.components[m]},directive(m,_){return _?(o.directives[m]=_,p):o.directives[m]},mount(m,_,T){if(!l){const C=p._ceVNode||We(i,s);return C.appContext=o,T===!0?T="svg":T===!1&&(T=void 0),e(C,m,T),l=!0,p._container=m,m.__vue_app__=p,St(C.component)}},onUnmount(m){c.push(m)},unmount(){l&&($e(c,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(m,_){return o.provides[m]=_,p},runWithContext(m){const _=wn;wn=p;try{return m()}finally{wn=_}}};return p}}let wn=null;const ka=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${xe(n)}Modifiers`]||e[`${mn(n)}Modifiers`];function Sa(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||Y;let s=t;const o=n.startsWith("update:"),a=o&&ka(i,n.slice(7));a&&(a.trim&&(s=t.map(m=>te(m)?m.trim():m)),a.number&&(s=t.map(ft)));let c,l=i[c=Dt(n)]||i[c=Dt(xe(n))];!l&&o&&(l=i[c=Dt(mn(n))]),l&&$e(l,e,6,s);const p=i[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,$e(p,e,6,s)}}const xa=new WeakMap;function Ns(e,n,t=!1){const i=t?xa:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const o=e.emits;let a={},c=!1;if(!q(e)){const l=p=>{const m=Ns(p,n,!0);m&&(c=!0,le(a,m))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!c?(V(e)&&i.set(e,null),null):(N(o)?o.forEach(l=>a[l]=null):le(a,o),V(e)&&i.set(e,a),a)}function bt(e,n){return!e||!ut(n)?!1:(n=n.slice(2).replace(/Once$/,""),G(e,n[0].toLowerCase()+n.slice(1))||G(e,mn(n))||G(e,n))}function Di(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:p,renderCache:m,props:_,data:T,setupState:C,ctx:B,inheritAttrs:F}=e,ee=at(e);let Z,W;try{if(t.shapeFlag&4){const L=s||i,ie=L;Z=Fe(p.call(ie,L,m,_,C,T,B)),W=c}else{const L=n;Z=Fe(L.length>1?L(_,{attrs:c,slots:a,emit:l}):L(_,null)),W=n.props?c:Da(c)}}catch(L){Wn.length=0,yt(L,e,1),Z=We(tn)}let K=Z;if(W&&F!==!1){const L=Object.keys(W),{shapeFlag:ie}=K;L.length&&ie&7&&(o&&L.some(pt)&&(W=Ia(W,o)),K=Sn(K,W,!1,!0))}return t.dirs&&(K=Sn(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&ai(K,t.transition),Z=K,at(ee),Z}const Da=e=>{let n;for(const t in e)(t==="class"||t==="style"||ut(t))&&((n||(n={}))[t]=e[t]);return n},Ia=(e,n)=>{const t={};for(const i in e)(!pt(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function Ta(e,n,t){const{props:i,children:s,component:o}=e,{props:a,children:c,patchFlag:l}=n,p=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ii(i,a,p):!!a;if(l&8){const m=n.dynamicProps;for(let _=0;_<m.length;_++){const T=m[_];if(Fs(a,i,T)&&!bt(p,T))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:i===a?!1:i?a?Ii(i,a,p):!0:!!a;return!1}function Ii(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(Fs(n,e,o)&&!bt(t,o))return!0}return!1}function Fs(e,n,t){const i=e[t],s=n[t];return t==="style"&&V(i)&&V(s)?!Gn(i,s):i!==s}function Ca({vnode:e,parent:n,suspense:t},i){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=n.vnode).el=i,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=i)}const qs={},Os=()=>Object.create(qs),Ws=e=>Object.getPrototypeOf(e)===qs;function Ea(e,n,t,i=!1){const s={},o=Os();e.propsDefaults=Object.create(null),js(e,n,s,o);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);t?e.props=i?s:Ro(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Pa(e,n,t,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=H(s),[l]=e.propsOptions;let p=!1;if((i||a>0)&&!(a&16)){if(a&8){const m=e.vnode.dynamicProps;for(let _=0;_<m.length;_++){let T=m[_];if(bt(e.emitsOptions,T))continue;const C=n[T];if(l)if(G(o,T))C!==o[T]&&(o[T]=C,p=!0);else{const B=xe(T);s[B]=Bt(l,c,B,C,e,!1)}else C!==o[T]&&(o[T]=C,p=!0)}}}else{js(e,n,s,o)&&(p=!0);let m;for(const _ in c)(!n||!G(n,_)&&((m=mn(_))===_||!G(n,m)))&&(l?t&&(t[_]!==void 0||t[m]!==void 0)&&(s[_]=Bt(l,c,_,void 0,e,!0)):delete s[_]);if(o!==c)for(const _ in o)(!n||!G(n,_))&&(delete o[_],p=!0)}p&&Ke(e.attrs,"set","")}function js(e,n,t,i){const[s,o]=e.propsOptions;let a=!1,c;if(n)for(let l in n){if(Mn(l))continue;const p=n[l];let m;s&&G(s,m=xe(l))?!o||!o.includes(m)?t[m]=p:(c||(c={}))[m]=p:bt(e.emitsOptions,l)||(!(l in i)||p!==i[l])&&(i[l]=p,a=!0)}if(o){const l=H(t),p=c||Y;for(let m=0;m<o.length;m++){const _=o[m];t[_]=Bt(s,l,_,p[_],e,!G(p,_))}}return a}function Bt(e,n,t,i,s,o){const a=e[t];if(a!=null){const c=G(a,"default");if(c&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&q(l)){const{propsDefaults:p}=s;if(t in p)i=p[t];else{const m=Kn(s);i=p[t]=l.call(null,n),m()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(o&&!c?i=!1:a[1]&&(i===""||i===mn(t))&&(i=!0))}return i}const Aa=new WeakMap;function $s(e,n,t=!1){const i=t?Aa:n.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!q(e)){const m=_=>{l=!0;const[T,C]=$s(_,n,!0);le(a,T),C&&c.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!o&&!l)return V(e)&&i.set(e,hn),hn;if(N(o))for(let m=0;m<o.length;m++){const _=xe(o[m]);Ti(_)&&(a[_]=Y)}else if(o)for(const m in o){const _=xe(m);if(Ti(_)){const T=o[m],C=a[_]=N(T)||q(T)?{type:T}:le({},T),B=C.type;let F=!1,ee=!0;if(N(B))for(let Z=0;Z<B.length;++Z){const W=B[Z],K=q(W)&&W.name;if(K==="Boolean"){F=!0;break}else K==="String"&&(ee=!1)}else F=q(B)&&B.name==="Boolean";C[0]=F,C[1]=ee,(F||G(C,"default"))&&c.push(_)}}const p=[a,c];return V(e)&&i.set(e,p),p}function Ti(e){return e[0]!=="$"&&!Mn(e)}const ci=e=>e==="_"||e==="_ctx"||e==="$stable",ri=e=>N(e)?e.map(Fe):[Fe(e)],La=(e,n,t)=>{if(n._n)return n;const i=Vo((...s)=>ri(n(...s)),t);return i._c=!1,i},Us=(e,n,t)=>{const i=e._ctx;for(const s in e){if(ci(s))continue;const o=e[s];if(q(o))n[s]=La(s,o,i);else if(o!=null){const a=ri(o);n[s]=()=>a}}},zs=(e,n)=>{const t=ri(n);e.slots.default=()=>t},Bs=(e,n,t)=>{for(const i in n)(t||!ci(i))&&(e[i]=n[i])},Ma=(e,n,t)=>{const i=e.slots=Os();if(e.vnode.shapeFlag&32){const s=n._;s?(Bs(i,n,t),t&&es(i,"_",s,!0)):Us(n,i)}else n&&zs(e,n)},Ra=(e,n,t)=>{const{vnode:i,slots:s}=e;let o=!0,a=Y;if(i.shapeFlag&32){const c=n._;c?t&&c===1?o=!1:Bs(s,n,t):(o=!n.$stable,Us(n,s)),a=n}else n&&(zs(e,n),a={default:1});if(o)for(const c in s)!ci(c)&&a[c]==null&&delete s[c]},he=Wa;function Na(e){return Fa(e)}function Fa(e,n){const t=ht();t.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:p,setElementText:m,parentNode:_,nextSibling:T,setScopeId:C=Oe,insertStaticContent:B}=e,F=(r,d,g,w=null,h=null,v=null,D=void 0,x=null,k=!!d.dynamicChildren)=>{if(r===d)return;r&&!En(r,d)&&(w=Qn(r),fe(r,h,v,!0),r=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:A,shapeFlag:I}=d;switch(y){case kt:ee(r,d,g,w);break;case tn:Z(r,d,g,w);break;case tt:r==null&&W(d,g,w,D);break;case ve:pn(r,d,g,w,h,v,D,x,k);break;default:I&1?ie(r,d,g,w,h,v,D,x,k):I&6?S(r,d,g,w,h,v,D,x,k):(I&64||I&128)&&y.process(r,d,g,w,h,v,D,x,k,In)}A!=null&&h?Fn(A,r&&r.ref,v,d||r,!d):A==null&&r&&r.ref!=null&&Fn(r.ref,null,v,r,!0)},ee=(r,d,g,w)=>{if(r==null)i(d.el=c(d.children),g,w);else{const h=d.el=r.el;d.children!==r.children&&p(h,d.children)}},Z=(r,d,g,w)=>{r==null?i(d.el=l(d.children||""),g,w):d.el=r.el},W=(r,d,g,w)=>{[r.el,r.anchor]=B(r.children,d,g,w,r.el,r.anchor)},K=({el:r,anchor:d},g,w)=>{let h;for(;r&&r!==d;)h=T(r),i(r,g,w),r=h;i(d,g,w)},L=({el:r,anchor:d})=>{let g;for(;r&&r!==d;)g=T(r),s(r),r=g;s(d)},ie=(r,d,g,w,h,v,D,x,k)=>{if(d.type==="svg"?D="svg":d.type==="math"&&(D="mathml"),r==null)Te(d,g,w,h,v,D,x,k);else{const y=r.el&&r.el._isVueCE?r.el:null;try{y&&y._beginPatch(),un(r,d,h,v,D,x,k)}finally{y&&y._endPatch()}}},Te=(r,d,g,w,h,v,D,x)=>{let k,y;const{props:A,shapeFlag:I,transition:E,dirs:R}=r;if(k=r.el=a(r.type,v,A&&A.is,A),I&8?m(k,r.children):I&16&&Ce(r.children,k,null,w,h,Mt(r,v),D,x),R&&on(r,null,w,"created"),be(k,r,r.scopeId,D,w),A){for(const Q in A)Q!=="value"&&!Mn(Q)&&o(k,Q,null,A[Q],v,w);"value"in A&&o(k,"value",null,A.value,v),(y=A.onVnodeBeforeMount)&&Me(y,w,r)}R&&on(r,null,w,"beforeMount");const $=qa(h,E);$&&E.beforeEnter(k),i(k,d,g),((y=A&&A.onVnodeMounted)||$||R)&&he(()=>{try{y&&Me(y,w,r),$&&E.enter(k),R&&on(r,null,w,"mounted")}finally{}},h)},be=(r,d,g,w,h)=>{if(g&&C(r,g),w)for(let v=0;v<w.length;v++)C(r,w[v]);if(h){let v=h.subTree;if(d===v||Ks(v.type)&&(v.ssContent===d||v.ssFallback===d)){const D=h.vnode;be(r,D,D.scopeId,D.slotScopeIds,h.parent)}}},Ce=(r,d,g,w,h,v,D,x,k=0)=>{for(let y=k;y<r.length;y++){const A=r[y]=x?Ve(r[y]):Fe(r[y]);F(null,A,d,g,w,h,v,D,x)}},un=(r,d,g,w,h,v,D)=>{const x=d.el=r.el;let{patchFlag:k,dynamicChildren:y,dirs:A}=d;k|=r.patchFlag&16;const I=r.props||Y,E=d.props||Y;let R;if(g&&an(g,!1),(R=E.onVnodeBeforeUpdate)&&Me(R,g,d,r),A&&on(d,r,g,"beforeUpdate"),g&&an(g,!0),(I.innerHTML&&E.innerHTML==null||I.textContent&&E.textContent==null)&&m(x,""),y?Ue(r.dynamicChildren,y,x,g,w,Mt(d,h),v):D||M(r,d,x,null,g,w,Mt(d,h),v,!1),k>0){if(k&16)sn(x,I,E,g,h);else if(k&2&&I.class!==E.class&&o(x,"class",null,E.class,h),k&4&&o(x,"style",I.style,E.style,h),k&8){const $=d.dynamicProps;for(let Q=0;Q<$.length;Q++){const J=$[Q],oe=I[J],re=E[J];(re!==oe||J==="value")&&o(x,J,oe,re,h,g)}}k&1&&r.children!==d.children&&m(x,d.children)}else!D&&y==null&&sn(x,I,E,g,h);((R=E.onVnodeUpdated)||A)&&he(()=>{R&&Me(R,g,d,r),A&&on(d,r,g,"updated")},w)},Ue=(r,d,g,w,h,v,D)=>{for(let x=0;x<d.length;x++){const k=r[x],y=d[x],A=k.el&&(k.type===ve||!En(k,y)||k.shapeFlag&198)?_(k.el):g;F(k,y,A,null,w,h,v,D,!0)}},sn=(r,d,g,w,h)=>{if(d!==g){if(d!==Y)for(const v in d)!Mn(v)&&!(v in g)&&o(r,v,d[v],null,h,w);for(const v in g){if(Mn(v))continue;const D=g[v],x=d[v];D!==x&&v!=="value"&&o(r,v,x,D,h,w)}"value"in g&&o(r,"value",d.value,g.value,h)}},pn=(r,d,g,w,h,v,D,x,k)=>{const y=d.el=r?r.el:c(""),A=d.anchor=r?r.anchor:c("");let{patchFlag:I,dynamicChildren:E,slotScopeIds:R}=d;R&&(x=x?x.concat(R):R),r==null?(i(y,g,w),i(A,g,w),Ce(d.children||[],g,A,h,v,D,x,k)):I>0&&I&64&&E&&r.dynamicChildren&&r.dynamicChildren.length===E.length?(Ue(r.dynamicChildren,E,g,h,v,D,x),(d.key!=null||h&&d===h.subTree)&&Hs(r,d,!0)):M(r,d,g,A,h,v,D,x,k)},S=(r,d,g,w,h,v,D,x,k)=>{d.slotScopeIds=x,r==null?d.shapeFlag&512?h.ctx.activate(d,g,w,D,k):u(d,g,w,h,v,D,k):O(r,d,k)},u=(r,d,g,w,h,v,D)=>{const x=r.component=Va(r,w,h);if(Cs(r)&&(x.ctx.renderer=In),Qa(x,!1,D),x.asyncDep){if(h&&h.registerDep(x,f,D),!r.el){const k=x.subTree=We(tn);Z(null,k,d,g),r.placeholder=k.el}}else f(x,r,d,g,h,v,D)},O=(r,d,g)=>{const w=d.component=r.component;if(Ta(r,d,g))if(w.asyncDep&&!w.asyncResolved){P(w,d,g);return}else w.next=d,w.update();else d.el=r.el,w.vnode=d},f=(r,d,g,w,h,v,D)=>{const x=()=>{if(r.isMounted){let{next:I,bu:E,u:R,parent:$,vnode:Q}=r;{const Pe=Gs(r);if(Pe){I&&(I.el=Q.el,P(r,I,D)),Pe.asyncDep.then(()=>{he(()=>{r.isUnmounted||y()},h)});return}}let J=I,oe;an(r,!1),I?(I.el=Q.el,P(r,I,D)):I=Q,E&&et(E),(oe=I.props&&I.props.onVnodeBeforeUpdate)&&Me(oe,$,I,Q),an(r,!0);const re=Di(r),Ee=r.subTree;r.subTree=re,F(Ee,re,_(Ee.el),Qn(Ee),r,h,v),I.el=re.el,J===null&&Ca(r,re.el),R&&he(R,h),(oe=I.props&&I.props.onVnodeUpdated)&&he(()=>Me(oe,$,I,Q),h)}else{let I;const{el:E,props:R}=d,{bm:$,m:Q,parent:J,root:oe,type:re}=r,Ee=qn(d);an(r,!1),$&&et($),!Ee&&(I=R&&R.onVnodeBeforeMount)&&Me(I,J,d),an(r,!0);{oe.ce&&oe.ce._hasShadowRoot()&&oe.ce._injectChildStyle(re,r.parent?r.parent.type:void 0);const Pe=r.subTree=Di(r);F(null,Pe,g,w,r,h,v),d.el=Pe.el}if(Q&&he(Q,h),!Ee&&(I=R&&R.onVnodeMounted)){const Pe=d;he(()=>Me(I,J,Pe),h)}(d.shapeFlag&256||J&&qn(J.vnode)&&J.vnode.shapeFlag&256)&&r.a&&he(r.a,h),r.isMounted=!0,d=g=w=null}};r.scope.on();const k=r.effect=new ss(x);r.scope.off();const y=r.update=k.run.bind(k),A=r.job=k.runIfDirty.bind(k);A.i=r,A.id=r.uid,k.scheduler=()=>oi(A),an(r,!0),y()},P=(r,d,g)=>{d.component=r;const w=r.vnode.props;r.vnode=d,r.next=null,Pa(r,d.props,w,g),Ra(r,d.children,g),Ye(),vi(r),Ze()},M=(r,d,g,w,h,v,D,x,k=!1)=>{const y=r&&r.children,A=r?r.shapeFlag:0,I=d.children,{patchFlag:E,shapeFlag:R}=d;if(E>0){if(E&128){ce(y,I,g,w,h,v,D,x,k);return}else if(E&256){j(y,I,g,w,h,v,D,x,k);return}}R&8?(A&16&&Dn(y,h,v),I!==y&&m(g,I)):A&16?R&16?ce(y,I,g,w,h,v,D,x,k):Dn(y,h,v,!0):(A&8&&m(g,""),R&16&&Ce(I,g,w,h,v,D,x,k))},j=(r,d,g,w,h,v,D,x,k)=>{r=r||hn,d=d||hn;const y=r.length,A=d.length,I=Math.min(y,A);let E;for(E=0;E<I;E++){const R=d[E]=k?Ve(d[E]):Fe(d[E]);F(r[E],R,g,null,h,v,D,x,k)}y>A?Dn(r,h,v,!0,!1,I):Ce(d,g,w,h,v,D,x,k,I)},ce=(r,d,g,w,h,v,D,x,k)=>{let y=0;const A=d.length;let I=r.length-1,E=A-1;for(;y<=I&&y<=E;){const R=r[y],$=d[y]=k?Ve(d[y]):Fe(d[y]);if(En(R,$))F(R,$,g,null,h,v,D,x,k);else break;y++}for(;y<=I&&y<=E;){const R=r[I],$=d[E]=k?Ve(d[E]):Fe(d[E]);if(En(R,$))F(R,$,g,null,h,v,D,x,k);else break;I--,E--}if(y>I){if(y<=E){const R=E+1,$=R<A?d[R].el:w;for(;y<=E;)F(null,d[y]=k?Ve(d[y]):Fe(d[y]),g,$,h,v,D,x,k),y++}}else if(y>E)for(;y<=I;)fe(r[y],h,v,!0),y++;else{const R=y,$=y,Q=new Map;for(y=$;y<=E;y++){const ye=d[y]=k?Ve(d[y]):Fe(d[y]);ye.key!=null&&Q.set(ye.key,y)}let J,oe=0;const re=E-$+1;let Ee=!1,Pe=0;const Tn=new Array(re);for(y=0;y<re;y++)Tn[y]=0;for(y=R;y<=I;y++){const ye=r[y];if(oe>=re){fe(ye,h,v,!0);continue}let Ae;if(ye.key!=null)Ae=Q.get(ye.key);else for(J=$;J<=E;J++)if(Tn[J-$]===0&&En(ye,d[J])){Ae=J;break}Ae===void 0?fe(ye,h,v,!0):(Tn[Ae-$]=y+1,Ae>=Pe?Pe=Ae:Ee=!0,F(ye,d[Ae],g,null,h,v,D,x,k),oe++)}const mi=Ee?Oa(Tn):hn;for(J=mi.length-1,y=re-1;y>=0;y--){const ye=$+y,Ae=d[ye],ui=d[ye+1],pi=ye+1<A?ui.el||Vs(ui):w;Tn[y]===0?F(null,Ae,g,pi,h,v,D,x,k):Ee&&(J<0||y!==mi[J]?U(Ae,g,pi,2):J--)}}},U=(r,d,g,w,h=null)=>{const{el:v,type:D,transition:x,children:k,shapeFlag:y}=r;if(y&6){U(r.component.subTree,d,g,w);return}if(y&128){r.suspense.move(d,g,w);return}if(y&64){D.move(r,d,g,In);return}if(D===ve){i(v,d,g);for(let I=0;I<k.length;I++)U(k[I],d,g,w);i(r.anchor,d,g);return}if(D===tt){K(r,d,g);return}if(w!==2&&y&1&&x)if(w===0)x.beforeEnter(v),i(v,d,g),he(()=>x.enter(v),h);else{const{leave:I,delayLeave:E,afterLeave:R}=x,$=()=>{r.ctx.isUnmounted?s(v):i(v,d,g)},Q=()=>{v._isLeaving&&v[ea](!0),I(v,()=>{$(),R&&R()})};E?E(v,$,Q):Q()}else i(v,d,g)},fe=(r,d,g,w=!1,h=!1)=>{const{type:v,props:D,ref:x,children:k,dynamicChildren:y,shapeFlag:A,patchFlag:I,dirs:E,cacheIndex:R,memo:$}=r;if(I===-2&&(h=!1),x!=null&&(Ye(),Fn(x,null,g,r,!0),Ze()),R!=null&&(d.renderCache[R]=void 0),A&256){d.ctx.deactivate(r);return}const Q=A&1&&E,J=!qn(r);let oe;if(J&&(oe=D&&D.onVnodeBeforeUnmount)&&Me(oe,d,r),A&6)ze(r.component,g,w);else{if(A&128){r.suspense.unmount(g,w);return}Q&&on(r,null,d,"beforeUnmount"),A&64?r.type.remove(r,d,g,In,w):y&&!y.hasOnce&&(v!==ve||I>0&&I&64)?Dn(y,d,g,!1,!0):(v===ve&&I&384||!h&&A&16)&&Dn(k,d,g),w&&gn(r)}const re=$!=null&&R==null;(J&&(oe=D&&D.onVnodeUnmounted)||Q||re)&&he(()=>{oe&&Me(oe,d,r),Q&&on(r,null,d,"unmounted"),re&&(r.el=null)},g)},gn=r=>{const{type:d,el:g,anchor:w,transition:h}=r;if(d===ve){xn(g,w);return}if(d===tt){L(r);return}const v=()=>{s(g),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(r.shapeFlag&1&&h&&!h.persisted){const{leave:D,delayLeave:x}=h,k=()=>D(g,v);x?x(r.el,v,k):k()}else v()},xn=(r,d)=>{let g;for(;r!==d;)g=T(r),s(r),r=g;s(d)},ze=(r,d,g)=>{const{bum:w,scope:h,job:v,subTree:D,um:x,m:k,a:y}=r;Ci(k),Ci(y),w&&et(w),h.stop(),v&&(v.flags|=8,fe(D,r,d,g)),x&&he(x,d),he(()=>{r.isUnmounted=!0},d)},Dn=(r,d,g,w=!1,h=!1,v=0)=>{for(let D=v;D<r.length;D++)fe(r[D],d,g,w,h)},Qn=r=>{if(r.shapeFlag&6)return Qn(r.component.subTree);if(r.shapeFlag&128)return r.suspense.next();const d=T(r.anchor||r.el),g=d&&d[Jo];return g?T(g):d};let xt=!1;const di=(r,d,g)=>{let w;r==null?d._vnode&&(fe(d._vnode,null,null,!0),w=d._vnode.component):F(d._vnode||null,r,d,null,null,null,g),d._vnode=r,xt||(xt=!0,vi(w),ks(),xt=!1)},In={p:F,um:fe,m:U,r:gn,mt:u,mc:Ce,pc:M,pbc:Ue,n:Qn,o:e};return{render:di,hydrate:void 0,createApp:ba(di)}}function Mt({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function an({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function qa(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Hs(e,n,t=!1){const i=e.children,s=n.children;if(N(i)&&N(s))for(let o=0;o<i.length;o++){const a=i[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=Ve(s[o]),c.el=a.el),!t&&c.patchFlag!==-2&&Hs(a,c)),c.type===kt&&(c.patchFlag===-1&&(c=s[o]=Ve(c)),c.el=a.el),c.type===tn&&!c.el&&(c.el=a.el)}}function Oa(e){const n=e.slice(),t=[0];let i,s,o,a,c;const l=e.length;for(i=0;i<l;i++){const p=e[i];if(p!==0){if(s=t[t.length-1],e[s]<p){n[i]=s,t.push(i);continue}for(o=0,a=t.length-1;o<a;)c=o+a>>1,e[t[c]]<p?o=c+1:a=c;p<e[t[o]]&&(o>0&&(n[i]=t[o-1]),t[o]=i)}}for(o=t.length,a=t[o-1];o-- >0;)t[o]=a,a=n[a];return t}function Gs(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Gs(n)}function Ci(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Vs(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Vs(n.subTree):null}const Ks=e=>e.__isSuspense;function Wa(e,n){n&&n.pendingBranch?N(e)?n.effects.push(...e):n.effects.push(e):Go(e)}const ve=Symbol.for("v-fgt"),kt=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),tt=Symbol.for("v-stc"),Wn=[];let we=null;function se(e=!1){Wn.push(we=e?null:[])}function ja(){Wn.pop(),we=Wn[Wn.length-1]||null}let zn=1;function Ei(e,n=!1){zn+=e,e<0&&we&&n&&(we.hasOnce=!0)}function Qs(e){return e.dynamicChildren=zn>0?we||hn:null,ja(),zn>0&&we&&we.push(e),e}function ae(e,n,t,i,s,o){return Qs(b(e,n,t,i,s,o,!0))}function $a(e,n,t,i,s){return Qs(We(e,n,t,i,s,!0))}function Ys(e){return e?e.__v_isVNode===!0:!1}function En(e,n){return e.type===n.type&&e.key===n.key}const Zs=({key:e})=>e??null,it=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||ue(e)||q(e)?{i:ke,r:e,k:n,f:!!t}:e:null);function b(e,n=null,t=null,i=0,s=null,o=e===ve?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Zs(n),ref:n&&it(n),scopeId:xs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return c?(li(l,t),o&128&&e.normalize(l)):t&&(l.shapeFlag|=te(t)?8:16),zn>0&&!a&&we&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&we.push(l),l}const We=Ua;function Ua(e,n=null,t=null,i=0,s=null,o=!1){if((!e||e===pa)&&(e=tn),Ys(e)){const c=Sn(e,n,!0);return t&&li(c,t),zn>0&&!o&&we&&(c.shapeFlag&6?we[we.indexOf(e)]=c:we.push(c)),c.patchFlag=-2,c}if(Xa(e)&&(e=e.__vccOpts),n){n=za(n);let{class:c,style:l}=n;c&&!te(c)&&(n.class=nn(c)),V(l)&&(si(l)&&!N(l)&&(l=le({},l)),n.style=Yt(l))}const a=te(e)?1:Ks(e)?128:Xo(e)?64:V(e)?4:q(e)?2:0;return b(e,n,t,i,s,a,o,!0)}function za(e){return e?si(e)||Ws(e)?le({},e):e:null}function Sn(e,n,t=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,p=n?Ba(s||{},n):s,m={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Zs(p),ref:n&&n.ref?t&&o?N(o)?o.concat(it(n)):[o,it(n)]:it(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ve?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sn(e.ssContent),ssFallback:e.ssFallback&&Sn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&ai(m,l.clone(m)),m}function ne(e=" ",n=0){return We(kt,null,e,n)}function Pi(e,n){const t=We(tt,null,e);return t.staticCount=n,t}function He(e="",n=!1){return n?(se(),$a(tn,null,e)):We(tn,null,e)}function Fe(e){return e==null||typeof e=="boolean"?We(tn):N(e)?We(ve,null,e.slice()):Ys(e)?Ve(e):We(kt,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Sn(e)}function li(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(N(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),li(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Ws(n)?n._ctx=ke:s===3&&ke&&(ke.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else q(n)?(n={default:n,_ctx:ke},t=32):(n=String(n),i&64?(t=16,n=[ne(n)]):t=8);e.children=n,e.shapeFlag|=t}function Ba(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=nn([n.class,i.class]));else if(s==="style")n.style=Yt([n.style,i.style]);else if(ut(s)){const o=n[s],a=i[s];a&&o!==a&&!(N(o)&&o.includes(a))?n[s]=o?[].concat(o,a):a:a==null&&o==null&&!pt(s)&&(n[s]=a)}else s!==""&&(n[s]=i[s])}return n}function Me(e,n,t,i=null){$e(e,n,7,[t,i])}const Ha=Rs();let Ga=0;function Va(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||Ha,o={uid:Ga++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new go(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$s(i,s),emitsOptions:Ns(i,s),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:i.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Sa.bind(null,o),e.ce&&e.ce(o),o}let _e=null;const Ka=()=>_e||ke;let lt,Ht;{const e=ht(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};lt=n("__VUE_INSTANCE_SETTERS__",t=>_e=t),Ht=n("__VUE_SSR_SETTERS__",t=>Bn=t)}const Kn=e=>{const n=_e;return lt(e),e.scope.on(),()=>{e.scope.off(),lt(n)}},Ai=()=>{_e&&_e.scope.off(),lt(null)};function Js(e){return e.vnode.shapeFlag&4}let Bn=!1;function Qa(e,n=!1,t=!1){n&&Ht(n);const{props:i,children:s}=e.vnode,o=Js(e);Ea(e,i,o,n),Ma(e,s,t||n);const a=o?Ya(e,n):void 0;return n&&Ht(!1),a}function Ya(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ga);const{setup:i}=t;if(i){Ye();const s=e.setupContext=i.length>1?Ja(e):null,o=Kn(e),a=Vn(i,e,0,[e.props,s]),c=Yi(a);if(Ze(),o(),(c||e.sp)&&!qn(e)&&Ts(e),c){if(a.then(Ai,Ai),n)return a.then(l=>{Li(e,l)}).catch(l=>{yt(l,e,0)});e.asyncDep=a}else Li(e,a)}else Xs(e)}function Li(e,n,t){q(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:V(n)&&(e.setupState=vs(n)),Xs(e)}function Xs(e,n,t){const i=e.type;e.render||(e.render=i.render||Oe);{const s=Kn(e);Ye();try{_a(e)}finally{Ze(),s()}}}const Za={get(e,n){return me(e,"get",""),e[n]}};function Ja(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Za),slots:e.slots,emit:e.emit,expose:n}}function St(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vs(No(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in On)return On[t](e)},has(n,t){return t in n||t in On}})):e.proxy}function Xa(e){return q(e)&&"__vccOpts"in e}const An=(e,n)=>$o(e,n,Bn),ec="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;const Mi=typeof window<"u"&&window.trustedTypes;if(Mi)try{Gt=Mi.createPolicy("vue",{createHTML:e=>e})}catch{}const eo=Gt?e=>Gt.createHTML(e):e=>e,nc="http://www.w3.org/2000/svg",tc="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,Ri=Ge&&Ge.createElement("template"),ic={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?Ge.createElementNS(nc,e):n==="mathml"?Ge.createElementNS(tc,e):t?Ge.createElement(e,{is:t}):Ge.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,o){const a=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{Ri.innerHTML=eo(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const c=Ri.content;if(i==="svg"||i==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}n.insertBefore(c,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},sc=Symbol("_vtc");function oc(e,n,t){const i=e[sc];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Ni=Symbol("_vod"),ac=Symbol("_vsh"),cc=Symbol(""),rc=/(?:^|;)\s*display\s*:/;function lc(e,n,t){const i=e.style,s=te(t);let o=!1;if(t&&!s){if(n)if(te(n))for(const a of n.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Ln(i,c,"")}else for(const a in n)t[a]==null&&Ln(i,a,"");for(const a in t){a==="display"&&(o=!0);const c=t[a];c!=null?mc(e,a,!te(n)&&n?n[a]:void 0,c)||Ln(i,a,c):Ln(i,a,"")}}else if(s){if(n!==t){const a=i[cc];a&&(t+=";"+a),i.cssText=t,o=rc.test(t)}}else n&&e.removeAttribute("style");Ni in e&&(e[Ni]=o?i.display:"",e[ac]&&(i.display="none"))}const Fi=/\s*!important$/;function Ln(e,n,t){if(N(t))t.forEach(i=>Ln(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=dc(e,n);Fi.test(t)?e.setProperty(mn(i),t.replace(Fi,""),"important"):e[i]=t}}const qi=["Webkit","Moz","ms"],Rt={};function dc(e,n){const t=Rt[n];if(t)return t;let i=xe(n);if(i!=="filter"&&i in e)return Rt[n]=i;i=Xi(i);for(let s=0;s<qi.length;s++){const o=qi[s]+i;if(o in e)return Rt[n]=o}return n}function mc(e,n,t,i){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&te(i)&&t===i}const Oi="http://www.w3.org/1999/xlink";function Wi(e,n,t,i,s,o=mo(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Oi,n.slice(6,n.length)):e.setAttributeNS(Oi,n,t):t==null||o&&!ns(t)?e.removeAttribute(n):e.setAttribute(n,o?"":je(t)?String(t):t)}function ji(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?eo(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=ns(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(s||n)}function rn(e,n,t,i){e.addEventListener(n,t,i)}function uc(e,n,t,i){e.removeEventListener(n,t,i)}const $i=Symbol("_vei");function pc(e,n,t,i,s=null){const o=e[$i]||(e[$i]={}),a=o[n];if(i&&a)a.value=i;else{const[c,l]=gc(n);if(i){const p=o[n]=hc(i,s);rn(e,c,p,l)}else a&&(uc(e,c,a,l),o[n]=void 0)}}const Ui=/(?:Once|Passive|Capture)$/;function gc(e){let n;if(Ui.test(e)){n={};let i;for(;i=e.match(Ui);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mn(e.slice(2)),n]}let Nt=0;const _c=Promise.resolve(),fc=()=>Nt||(_c.then(()=>Nt=0),Nt=Date.now());function hc(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;$e(vc(i,t.value),n,5,[i])};return t.value=e,t.attached=fc(),t}function vc(e,n){if(N(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const zi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yc=(e,n,t,i,s,o)=>{const a=s==="svg";n==="class"?oc(e,i,a):n==="style"?lc(e,t,i):ut(n)?pt(n)||pc(e,n,t,i,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):wc(e,n,i,a))?(ji(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Wi(e,n,i,a,o,n!=="value")):e._isVueCE&&(bc(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!te(i)))?ji(e,xe(n),i,o,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),Wi(e,n,i,a))};function wc(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&zi(n)&&q(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return zi(n)&&te(t)?!1:n in e}function bc(e,n){const t=e._def.props;if(!t)return!1;const i=xe(n);return Array.isArray(t)?t.some(s=>xe(s)===i):Object.keys(t).some(s=>xe(s)===i)}const dt=e=>{const n=e.props["onUpdate:modelValue"]||!1;return N(n)?t=>et(n,t):n};function kc(e){e.target.composing=!0}function Bi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const bn=Symbol("_assign");function Hi(e,n,t){return n&&(e=e.trim()),t&&(e=ft(e)),e}const Sc={created(e,{modifiers:{lazy:n,trim:t,number:i}},s){e[bn]=dt(s);const o=i||s.props&&s.props.type==="number";rn(e,n?"change":"input",a=>{a.target.composing||e[bn](Hi(e.value,t,o))}),(t||o)&&rn(e,"change",()=>{e.value=Hi(e.value,t,o)}),n||(rn(e,"compositionstart",kc),rn(e,"compositionend",Bi),rn(e,"change",Bi))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:i,trim:s,number:o}},a){if(e[bn]=dt(a),e.composing)return;const c=(o||e.type==="number")&&!/^0\d/.test(e.value)?ft(e.value):e.value,l=n??"";if(c===l)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(i&&n===t||s&&e.value.trim()===l)||(e.value=l)}},Gi={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=gt(n);rn(e,"change",()=>{const o=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>t?ft(mt(a)):mt(a));e[bn](e.multiple?s?new Set(o):o:o[0]),e._assigning=!0,ws(()=>{e._assigning=!1})}),e[bn]=dt(i)},mounted(e,{value:n}){Vi(e,n)},beforeUpdate(e,n,t){e[bn]=dt(t)},updated(e,{value:n}){e._assigning||Vi(e,n)}};function Vi(e,n){const t=e.multiple,i=N(n);if(!(t&&!i&&!gt(n))){for(let s=0,o=e.options.length;s<o;s++){const a=e.options[s],c=mt(a);if(t)if(i){const l=typeof c;l==="string"||l==="number"?a.selected=n.some(p=>String(p)===String(c)):a.selected=po(n,c)>-1}else a.selected=n.has(c);else if(Gn(mt(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function mt(e){return"_value"in e?e._value:e.value}const xc=["ctrl","shift","alt","meta"],Dc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>xc.some(t=>e[`${t}Key`]&&!n.includes(t))},Ic=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=(s,...o)=>{for(let a=0;a<n.length;a++){const c=Dc[n[a]];if(c&&c(s,n))return}return e(s,...o)})},Tc=le({patchProp:yc},ic);let Ki;function Cc(){return Ki||(Ki=Na(Tc))}const Ec=(...e)=>{const n=Cc().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=Ac(i);if(!s)return;const o=n._component;!q(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Pc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},n};function Pc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ac(e){return te(e)?document.querySelector(e):e}const Lc=`---
title: Abnormal TLS/SSL Certificate Anomalies
id: a1b2c3d4-e5f6-7890-abcd-1234567890ef
status: experimental
description: >
  "Detects suspicious TLS/SSL certificate characteristics from Zeek logs such as self-signed certs, mismatched subject/issuer, or uncommon
  issuers—potential indicators of malware C2, unauthorized services, or MitM attacks."
references:
  - https://attack.mitre.org/techniques/T1587/003/
  - https://attack.mitre.org/techniques/T1557/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.t1587.003
  - attack.t1557
logsource:
  product: zeek
  service: ssl
detection:
  self_signed:
    validation_status: "self signed certificate"
  bad_issuer:
    issuer|contains:
      - "CN=localhost"
      - "CN=example"
      - "CN=fake"
  mismatched_cn:
    subject|startswith: "CN="
    issuer|startswith: "CN="
    subject|contains: "test"
  condition: self_signed OR bad_issuer OR mismatched_cn
falsepositives:
  - Internal self-signed certs for testing or dev environments.
level: high
`,Mc=`---
title: Default Account Abuse Detection
id: d3a8e5f1-4c7b-4e2f-b6a9-8e1c3f7d2a5b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects abuse of default accounts by monitoring for authentication attempts
  using common default usernames, unchanged default passwords, or suspicious
  activities from well-known default service accounts.
references:
  - https://attack.mitre.org/techniques/T1078/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1078.001
  - default_account
  - authentication
  - weak_credentials
logsource:
  product: windows
  service: security
detection:
  default_users:
    EventID: 4624
    TargetUserName|contains:
      - 'admin'
      - 'administrator'
      - 'guest'
      - 'test'
      - 'user'
      - 'default'
      - 'sa'
  service_accounts:
    EventID: 4624
    TargetUserName|startswith:
      - 'svc'
      - 'service'
    LogonType: 3
  condition: default_users or service_accounts
falsepositives:
  - Legitimate use of administrative accounts
  - Authorized service account activities
level: medium
`,Rc=`---
title: Domain Account Brute Force Attack
id: d7a3e5f2-8c1b-4f6e-a9d4-2b7c6e3f1a8d
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects brute force attacks against domain accounts by monitoring for
  multiple failed authentication attempts followed by successful logins
  from the same source IP or user account.
references:
  - https://attack.mitre.org/techniques/T1078/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.credential_access
  - attack.t1078.002
  - windows
  - authentication
logsource:
  product: windows
  service: security
detection:
  failed_logon:
    EventID: 4625
    LogonType:
      - 2
      - 3
      - 10
  success_after_failures:
    EventID: 4624
    LogonType:
      - 2
      - 3
      - 10
  condition: failed_logon and success_after_failures
falsepositives:
  - Users with forgotten passwords
  - System accounts with configuration issues
level: medium
`,Nc=`---
title: Local Account Abuse Detection
id: a1f4c7e8-2d9b-4e6f-b3c5-8a7e9f2d1c6b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects abuse of local accounts including privilege escalation attempts,
  unusual logon patterns, and suspicious activities from local user accounts
  that may indicate compromise.
references:
  - https://attack.mitre.org/techniques/T1078/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.privilege_escalation
  - attack.t1078.003
  - windows
  - local_account
logsource:
  product: windows
  service: security
detection:
  local_admin_logon:
    EventID: 4624
    LogonType: 2
    TargetUserName|endswith: '$'
  service_logon:
    EventID: 4624
    LogonType: 5
    TargetUserName|contains:
      - 'service'
      - 'svc'
  unusual_hours:
    EventID: 4624
    TimeGenerated|contains:
      - 'T22:'
      - 'T23:'
      - 'T00:'
      - 'T01:'
      - 'T02:'
      - 'T03:'
      - 'T04:'
      - 'T05:'
  condition: local_admin_logon or service_logon or unusual_hours
falsepositives:
  - Scheduled maintenance tasks
  - Legitimate service accounts
level: medium
`,Fc=`title: Cloud Account Compromise Detection
id: 364h71fc-a12d-3456-7890-bcdef0123456
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1078/004/
    - https://docs.microsoft.com/en-us/azure/security/fundamentals/
logsource:
    product: azure
    service: signinlogs
detection:
    selection_impossible_travel:
        EventName: 'SigninLogs'
        ResultType: 0
    # Login from geographic locations impossible to reach in timeframe
    selection_multiple_failed_then_success:
        EventName: 'SigninLogs'
        UserPrincipalName: '*'
    # Pattern: multiple failed attempts followed by successful login
    selection_off_hours_access:
        EventName: 'SigninLogs'
        ResultType: 0
    # Access outside typical business hours for user's timezone
    selection_new_device_access:
        EventName: 'SigninLogs'
        ResultType: 0
        DeviceDetail.isCompliant: false
        DeviceDetail.isManaged: false
    # Access from unmanaged/non-compliant devices
    selection_privilege_changes:
        EventName: 'AuditLogs'
        ActivityDisplayName:
            - 'Add member to role'
            - 'Remove member from role'
            - 'Update role'
        TargetResources.userPrincipalName: '*'
    # Unexpected privilege changes
    selection_resource_enumeration:
        EventName: 'AuditLogs'
        ActivityDisplayName:
            - 'List applications'
            - 'List service principals'
            - 'List users'
            - 'List groups'
    # Rapid enumeration activities post-login
    selection_suspicious_app_access:
        EventName: 'SigninLogs'
        ResultType: 0
        AppDisplayName|contains:
            - 'Graph'
            - 'Exchange'
            - 'SharePoint'
            - 'PowerBI'
    # Access to high-value applications
    selection_api_abuse:
        EventName: 'AuditLogs'
        ActivityDisplayName|contains:
            - 'API'
            - 'Graph'
    # Unusual API usage patterns
    condition: selection_impossible_travel or selection_multiple_failed_then_success or
               selection_off_hours_access or selection_new_device_access or
               selection_privilege_changes or selection_resource_enumeration or
               selection_suspicious_app_access or selection_api_abuse
falsepositives:
    - Legitimate users traveling or working from new locations
    - Authorized administrative activities
    - New device enrollment and legitimate device access
    - Legitimate after-hours work and different timezone access
    - Authorized application integrations and API usage
level: high
tags:
    - attack.initial_access
    - attack.t1078.004
    - attack.privilege_escalation
    - attack.t1484
    - attack.discovery
    - attack.t1087
    - azure
    - account_compromise
    - cloud
`,qc=`---
title: Malware Replication Through Removable Media
id: f6a4e8c2-9d7b-4f3e-a1c5-8e2f9c7d4a6b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects potential malware replication through removable media by monitoring
  for automatic execution of suspicious files from USB devices, creation of
  autorun files, or unusual file activities on removable drives.
references:
  - https://attack.mitre.org/techniques/T1091/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1091
  - usb
  - removable_media
  - autorun
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  usb_execution:
    Image|startswith:
      - 'E:\\'
      - 'F:\\'
      - 'G:\\'
      - 'H:\\'
    Image|endswith: '.exe'
  autorun_creation:
    TargetFilename|endswith:
      - 'autorun.inf'
      - 'desktop.ini'
    TargetFilename|contains: ':'
  suspicious_files:
    TargetFilename|contains:
      - 'USB'
      - 'removable'
    TargetFilename|endswith:
      - '.exe'
      - '.scr'
      - '.bat'
  condition: usb_execution or autorun_creation or suspicious_files
falsepositives:
  - Legitimate portable applications
  - Authorized USB software installations
level: medium
`,Oc=`---
title: Legitimate Web Service Abuse
id: d8f3e6a2-9c4b-4e7f-a1d5-8f3e9c6d4a8b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects abuse of legitimate web services for malicious purposes including
  command and control communications, data exfiltration, or malware hosting
  using trusted platforms to bypass security controls.
references:
  - https://attack.mitre.org/techniques/T1102/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.command_and_control
  - attack.t1102
  - web_service
  - cloud_service
logsource:
  product: zeek
  service: http
detection:
  cloud_services:
    host|endswith:
      - '.dropbox.com'
      - '.googledrive.com'
      - '.onedrive.com'
      - '.github.com'
      - '.pastebin.com'
  suspicious_uploads:
    method: 'POST'
    request_body_len|gte: 10000
  encoded_content:
    uri|contains:
      - 'base64'
      - 'encoded'
      - '%20%20%20'
  condition: cloud_services and (suspicious_uploads or encoded_content)
falsepositives:
  - Legitimate cloud service usage
  - Normal file uploads and downloads
level: low
`,Wc=`---
title: External Remote Services Abuse
id: a8f3e7c1-5b9d-4e2f-c6a4-7e9f2d1c8b5a
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects abuse of external remote services by monitoring for suspicious
  VPN connections, RDP access from external networks, or unauthorized
  remote service usage that may indicate initial access attempts.
references:
  - https://attack.mitre.org/techniques/T1133/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1133
  - remote_services
  - vpn
  - rdp
logsource:
  product: windows
  service: security
detection:
  external_rdp:
    EventID: 4624
    LogonType: 10
    IpAddress|startswith:
      - '10.'
      - '172.'
      - '192.168.'
    not: true
  vpn_logon:
    EventID: 4624
    LogonType: 3
    AuthenticationPackageName: 'NTLM'
    WorkstationName|contains:
      - 'vpn'
      - 'remote'
  suspicious_source:
    EventID: 4625
    IpAddress|contains:
      - 'tor-exit'
      - 'proxy'
  condition: external_rdp or vpn_logon or suspicious_source
falsepositives:
  - Legitimate remote work connections
  - Authorized VPN usage
level: medium
`,jc=`---
title: Drive-by Compromise Detection
id: e7f2c9a4-8b5d-4e1f-a3c6-9f2e7d8c4a1b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects drive-by compromise attempts by monitoring for malicious web content
  exploitation, suspicious JavaScript execution, and browser exploit patterns
  that may lead to initial system compromise.
references:
  - https://attack.mitre.org/techniques/T1189/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1189
  - browser
  - exploit
  - javascript
logsource:
  product: zeek
  service: http
detection:
  malicious_js:
    uri|contains:
      - 'eval('
      - 'unescape('
      - 'fromCharCode('
    method: 'GET'
  exploit_kit:
    user_agent|contains:
      - 'exploit'
      - 'kit'
      - 'angler'
      - 'blackhole'
  suspicious_redirect:
    response_code: 302
    location|contains:
      - 'bit.ly'
      - 'tinyurl'
      - '.tk/'
  condition: malicious_js or exploit_kit or suspicious_redirect
falsepositives:
  - Legitimate JavaScript applications
  - Normal website redirects
level: high
`,$c=`title: Cloud Storage Bucket Compromise Detection
id: d0eb15f6-4567-7890-1234-56789abcdef0
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1190/
    - https://docs.aws.amazon.com/s3/latest/userguide/security.html
logsource:
    product: aws
    service: cloudtrail
detection:
    selection_bucket_policy_changes:
        eventName:
            - 'PutBucketPolicy'
            - 'DeleteBucketPolicy'
            - 'PutBucketAcl'
            - 'PutObjectAcl'
        responseElements.policy|contains:
            - '"Principal":"*"'
            - '"Effect":"Allow"'
            - '"Action":"s3:GetObject"'
    selection_suspicious_data_access:
        eventName:
            - 'GetObject'
            - 'ListObjects'
            - 'GetBucketLocation'
    # High volume of object access from single IP
        sourceIPAddress|cidr:
            - '0.0.0.0/0'  # Will be filtered for known malicious ranges
    selection_bucket_enumeration:
        eventName:
            - 'ListBuckets'
            - 'GetBucketLocation'
            - 'GetBucketAcl'
            - 'GetBucketPolicy'
    # Rapid enumeration of multiple buckets
    selection_anonymous_access:
        eventName: 'GetObject'
        userIdentity.type: 'Unknown'
    # Anonymous access to bucket objects
    selection_tor_vpn_access:
        eventName:
            - 'GetObject'
            - 'ListObjects'
            - 'PutObject'
        userAgent|contains:
            - 'Tor'
            - 'anonymized'
            - 'proxy'
    selection_geographic_anomaly:
        eventName:
            - 'GetObject'
            - 'ListObjects'
    # Access from countries not typical for the organization
    condition: selection_bucket_policy_changes or selection_suspicious_data_access or
               selection_bucket_enumeration or selection_anonymous_access or
               selection_tor_vpn_access or selection_geographic_anomaly
falsepositives:
    - Legitimate administrative changes to bucket policies
    - Content delivery networks and caching services
    - Legitimate users accessing data while traveling
    - Automated backup and synchronization tools
    - Public content intentionally shared via S3
level: high
tags:
    - attack.initial_access
    - attack.t1190
    - attack.collection
    - attack.t1530
    - attack.exfiltration
    - attack.t1041
    - aws
    - s3
    - storage
    - bucket_compromise
`,Uc=`---
title: Web Application Exploitation Attempt
id: b5e7c9f1-2a4d-4c8e-9f2b-6a3e7d1c5b9a
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects potential web application exploitation attempts by monitoring HTTP
  traffic for common attack patterns including SQL injection, XSS, command
  injection, and path traversal attempts.
references:
  - https://attack.mitre.org/techniques/T1190/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1190
  - web
  - http
  - exploit
logsource:
  product: zeek
  service: http
detection:
  sql_injection:
    uri|contains:
      - 'union select'
      - 'or 1=1'
      - 'drop table'
      - '; insert into'
      - 'exec xp_'
  xss_attempt:
    uri|contains:
      - '<script'
      - 'javascript:'
      - 'onerror='
      - 'onload='
  command_injection:
    uri|contains:
      - ';cat /etc/passwd'
      - '|id'
      - '&whoami'
      - ';ls -la'
  path_traversal:
    uri|contains:
      - '../../../'
      - '..\\\\..\\\\..\\\\'
      - '/etc/passwd'
      - '/proc/version'
  condition: sql_injection or xss_attempt or command_injection or path_traversal
falsepositives:
  - Legitimate security testing by authorized personnel
level: high
`,zc=`---
title: Supply Chain Compromise Software Installation
id: f2c8e4a1-9b7d-4e6c-a3f8-5d2b9e1c7a4f
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects potential supply chain compromises by monitoring for installation
  or execution of software from unexpected sources, unsigned binaries, or
  processes with suspicious digital signatures.
references:
  - https://attack.mitre.org/techniques/T1195/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1195.001
  - supply_chain
  - software
  - signature
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  unsigned_process:
    Signed: 'false'
    Image|endswith:
      - '.exe'
      - '.dll'
  suspicious_signer:
    SignatureStatus: 'Valid'
    Signature|contains:
      - 'Test Certificate'
      - 'Self-signed'
      - 'Expired'
  unexpected_location:
    Image|startswith:
      - 'C:\\Users\\Public\\'
      - 'C:\\Temp\\'
      - 'C:\\Windows\\Temp\\'
  condition: unsigned_process or suspicious_signer or unexpected_location
falsepositives:
  - Internal development tools
  - Legitimate unsigned utilities
level: high
`,Bc=`title: Container Image Supply Chain Attack Detection
id: e1fc26a7-5678-8901-2345-6789abcdef01
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1195/002/
    - https://kubernetes.io/docs/concepts/security/
    - https://docs.docker.com/engine/security/
logsource:
    product: kubernetes
    service: audit
detection:
    selection_suspicious_image_source:
        verb: 'create'
        objectRef.resource: 'pods'
        requestObject.spec.containers.image|contains:
            - 'dockerhub.com'
            - 'ghcr.io'
            - 'quay.io'
    # Images from public registries without organization control
        requestObject.spec.containers.image|endswith:
            - ':latest'
            - ':main'
            - ':master'
    # Using mutable tags instead of specific versions
    selection_privileged_containers:
        verb: 'create'
        objectRef.resource: 'pods'
        requestObject.spec.containers.securityContext.privileged: true
        requestObject.spec.containers.securityContext.runAsRoot: true
    selection_excessive_capabilities:
        verb: 'create'
        objectRef.resource: 'pods'
        requestObject.spec.containers.securityContext.capabilities.add|contains:
            - 'SYS_ADMIN'
            - 'NET_ADMIN'
            - 'SYS_PTRACE'
            - 'SYS_MODULE'
    selection_suspicious_registry:
        verb: 'create'
        objectRef.resource: 'pods'
        requestObject.spec.containers.image|contains:
            - '.onion'
            - 'tor'
            - 'anonymous'
            - 'proxy'
    selection_untrusted_namespace:
        verb: 'create'
        objectRef.resource: 'pods'
        objectRef.namespace:
            - 'default'
            - 'kube-public'
    # Deployments in default or public namespaces
    selection_image_without_digest:
        verb: 'create'
        objectRef.resource: 'pods'
    # Images without SHA256 digest verification
    condition: selection_suspicious_image_source or selection_privileged_containers or
               selection_excessive_capabilities or selection_suspicious_registry or
               selection_untrusted_namespace or selection_image_without_digest
falsepositives:
    - Legitimate development and testing environments
    - Approved third-party containers with proper security review
    - System containers requiring elevated privileges
    - Legacy applications in migration process
level: high
tags:
    - attack.initial_access
    - attack.t1195.002
    - attack.execution
    - attack.t1610
    - attack.privilege_escalation
    - attack.t1611
    - kubernetes
    - container
    - supply_chain
    - docker
`,Hc=`---
title: Hardware Supply Chain Compromise Detection
id: b8e3f2a5-6c9d-4f7e-a1b4-9e2c7f8d3a6b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects potential hardware supply chain compromises by monitoring for
  unexpected USB device insertions, unknown hardware components, or
  suspicious driver installations that may indicate compromised hardware.
references:
  - https://attack.mitre.org/techniques/T1195/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1195.002
  - supply_chain
  - hardware
  - usb
logsource:
  product: windows
  service: security
detection:
  usb_insertion:
    EventID: 6416
    DeviceDescription|contains:
      - 'USB'
      - 'Mass Storage'
  unknown_driver:
    EventID: 7045
    ServiceName|contains:
      - 'usb'
      - 'storage'
      - 'disk'
    StartType: 3
  pnp_device:
    EventID: 6005
    DeviceInstanceId|startswith:
      - 'USB\\'
      - 'USBSTOR\\'
  condition: usb_insertion or unknown_driver or pnp_device
falsepositives:
  - Legitimate USB devices and storage
  - Authorized hardware installations
level: medium
`,Gc=`---
title: Compromised Software Dependencies Detection
id: e8f5c2a9-7d4b-4e1f-a6c3-9f2e8d1c5a8b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects potential compromise of software dependencies by monitoring for
  unusual package installations, dependency confusion attacks, or suspicious
  library downloads that may indicate supply chain attacks.
references:
  - https://attack.mitre.org/techniques/T1195/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1195.003
  - supply_chain
  - dependencies
  - packages
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  package_managers:
    Image|endswith:
      - '\\npm.exe'
      - '\\pip.exe'
      - '\\composer.exe'
      - '\\nuget.exe'
    CommandLine|contains:
      - 'install'
      - 'update'
  suspicious_repos:
    CommandLine|contains:
      - 'pypi.org'
      - 'npmjs.com'
      - 'packagist.org'
      - 'typosquatting'
      - 'similar'
  private_install:
    CommandLine|contains:
      - '--index-url'
      - '--extra-index-url'
      - '--registry'
  condition: package_managers and (suspicious_repos or private_install)
falsepositives:
  - Legitimate package installations
  - Internal package repositories
level: medium
`,Vc=`---
title: Unauthorized Package Manager Activity on Networking Equipment
id: e2f4a789-bc12-345d-8abc-1234567890ab
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects unauthorized package manager activity on networking equipment by monitoring syslog events for commands like 'install add file', 'install activate', 'upgrade file', or
  'software install' that may indicate unsanctioned software or firmware changes.
references:
  - https://attack.mitre.org/techniques/T1195/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.supply_chain_compromise
  - attack.t1195
logsource:
  product: network
  service: syslog
  category: package
detection:
  selection:
    Message|contains:
      - "install add file"
      - "install activate"
      - "upgrade file"
      - "software install"
  condition: selection
falsepositives:
  - Legitimate and scheduled software or firmware updates performed by authorized network administrators.
level: medium
`,Kc=`title: Cloud Identity Provider Attack Detection
id: 253g60eb-901c-2345-6789-abcdef012345
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1199/
    - https://docs.microsoft.com/en-us/azure/active-directory/hybrid/
logsource:
    product: azure
    service: auditlogs
detection:
    selection_federation_changes:
        ActivityDisplayName:
            - 'Set federation settings on domain'
            - 'Add federated domain'
            - 'Update federated domain'
            - 'Remove federated domain'
            - 'Set domain authentication'
        Result: 'success'
    selection_saml_manipulation:
        ActivityDisplayName:
            - 'Update application'
            - 'Update service principal'
        TargetResources.modifiedProperties.displayName|contains:
            - 'SamlMetadataUrl'
            - 'ReplyUrls'
            - 'SignOnUrl'
            - 'LogoutUrl'
    # Modifications to SAML configuration
    selection_identity_sync_attacks:
        ActivityDisplayName:
            - 'Add service principal'
            - 'Update application'
        TargetResources.displayName|contains:
            - 'Azure AD Connect'
            - 'Directory Sync'
            - 'ADFS'
            - 'Identity Sync'
    selection_certificate_attacks:
        ActivityDisplayName:
            - 'Add application'
            - 'Update application'
            - 'Add service principal credentials'
        TargetResources.modifiedProperties.displayName: 'KeyCredentials'
    # Certificate-based authentication attacks
    selection_suspicious_token_signing:
        ActivityDisplayName:
            - 'Update application'
            - 'Add application'
        TargetResources.modifiedProperties.displayName|contains:
            - 'TokenEncryptionKeyId'
            - 'TokenSigningCertificates'
    selection_identity_provider_abuse:
        ActivityDisplayName: 'Sign-in activity'
        AuthenticationDetails.succeeded: true
        AuthenticationProtocol:
            - 'SAML2'
            - 'WS-Fed'
            - 'OAuth2'
    # Sign-ins through potentially compromised identity providers
        UserPrincipalName|contains: '@federated.'
    selection_privileged_federation_access:
        ActivityDisplayName:
            - 'Add member to role'
            - 'Add app role assignment'
        TargetResources.displayName|contains:
            - 'Global Administrator'
            - 'Application Administrator'
            - 'Cloud Application Administrator'
    # Privilege escalation through federation
    selection_adfs_configuration_changes:
        ActivityDisplayName|contains:
            - 'ADFS'
            - 'Federation Service'
        OperationType:
            - 'Update'
            - 'Add'
            - 'Delete'
    condition: selection_federation_changes or selection_saml_manipulation or
               selection_identity_sync_attacks or selection_certificate_attacks or
               selection_suspicious_token_signing or selection_identity_provider_abuse or
               selection_privileged_federation_access or selection_adfs_configuration_changes
falsepositives:
    - Legitimate identity provider configuration changes
    - Planned federation setup and maintenance activities
    - Authorized certificate renewals and updates
    - Legitimate directory synchronization activities
    - Administrative tasks by authorized personnel
level: critical
tags:
    - attack.initial_access
    - attack.t1199
    - attack.credential_access
    - attack.t1606
    - attack.defense_evasion
    - attack.t1484
    - azure
    - saml
    - federation
    - identity_provider
    - adfs
`,Qc=`---
title: Trusted Relationship Abuse Detection
id: c9e4f7a2-6b8d-4f1e-a5c3-8f2e9d1c7a6b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects abuse of trusted relationships by monitoring for suspicious access
  from partner networks, third-party connections, or trusted domain accounts
  that may indicate compromise of trusted entities.
references:
  - https://attack.mitre.org/techniques/T1199/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1199
  - trusted_relationship
  - third_party
  - partner
logsource:
  product: windows
  service: security
detection:
  external_domain:
    EventID: 4624
    TargetDomainName|endswith:
      - '.partner.com'
      - '.vendor.com'
      - '.contractor.com'
  service_account:
    EventID: 4624
    TargetUserName|startswith:
      - 'svc-'
      - 'service-'
    LogonType: 3
  unusual_hours:
    EventID: 4624
    TimeGenerated|contains:
      - 'T20:'
      - 'T21:'
      - 'T22:'
      - 'T23:'
      - 'T00:'
      - 'T01:'
  condition: external_domain or (service_account and unusual_hours)
falsepositives:
  - Legitimate partner access
  - Authorized third-party services
level: medium
`,Yc=`---
title: Unauthorized Hardware Addition Detection
id: b7e9f4c3-2a8d-4f6e-c1b5-9e3f8c2d7a4b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects unauthorized hardware additions by monitoring for new device
  installations, USB insertions, network adapter changes, or other hardware
  modifications that may indicate malicious hardware implants.
references:
  - https://attack.mitre.org/techniques/T1200/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1200
  - hardware
  - usb
  - device
logsource:
  product: windows
  service: system
detection:
  new_device:
    EventID: 20001
    DeviceInstanceId|startswith:
      - 'USB\\'
      - 'HID\\'
      - 'ROOT\\'
  pnp_install:
    EventID: 20003
    DriverName|contains:
      - 'usb'
      - 'hid'
      - 'generic'
  storage_device:
    EventID: 7036
    ServiceName|contains:
      - 'disk'
      - 'storage'
      - 'usb'
  condition: new_device or pnp_install or storage_device
falsepositives:
  - Legitimate hardware installations
  - Authorized USB devices
level: low
`,Zc=`---
title: User Execution of Malicious Links
id: e9a5f8c3-7d4b-4e6f-a2c1-9f4e8d3c6a8b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects user execution of malicious links by monitoring for browser
  processes launched with suspicious URLs, click-through patterns, or
  downloads initiated from potentially malicious web content.
references:
  - https://attack.mitre.org/techniques/T1204/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.execution
  - attack.t1204.001
  - browser
  - malicious_link
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  browser_launch:
    Image|endswith:
      - '\\chrome.exe'
      - '\\firefox.exe'
      - '\\msedge.exe'
    CommandLine|contains:
      - 'http'
      - 'https'
  suspicious_domains:
    CommandLine|contains:
      - '.tk/'
      - '.ml/'
      - '.cf/'
      - 'bit.ly'
      - 'tinyurl'
  download_activity:
    CommandLine|contains:
      - 'download'
      - 'save'
      - 'temp'
  condition: browser_launch and (suspicious_domains or download_activity)
falsepositives:
  - Normal web browsing activity
  - Legitimate downloads
level: low
`,Jc=`---
title: User Execution of Malicious Files
id: f4b7e9c6-8a3d-4e5f-a2c7-9f5e8d4c7a9b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects user execution of potentially malicious files by monitoring for
  execution of suspicious file types, files from untrusted locations, or
  unsigned executables that may indicate malware execution.
references:
  - https://attack.mitre.org/techniques/T1204/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.execution
  - attack.t1204.002
  - malicious_file
  - user_execution
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  suspicious_extensions:
    Image|endswith:
      - '.scr'
      - '.pif'
      - '.com'
      - '.bat'
      - '.vbs'
  temp_execution:
    Image|startswith:
      - 'C:\\Users\\'
      - 'C:\\Temp\\'
      - 'C:\\Windows\\Temp\\'
    Image|endswith: '.exe'
  download_execution:
    Image|contains:
      - '\\Downloads\\'
      - '\\Desktop\\'
      - '\\Documents\\'
  condition: suspicious_extensions or temp_execution or download_execution
falsepositives:
  - Legitimate software installations
  - User productivity applications
level: low
`,Xc=`---
title: Malicious Image File Execution
id: a3f6e8c9-7b4d-4e2f-c5a8-9f6e8d5c8a4b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects execution of malicious code embedded in image files by monitoring
  for steganography tools, image parsing vulnerabilities, or suspicious
  processes launched from image file interactions.
references:
  - https://attack.mitre.org/techniques/T1204/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.execution
  - attack.t1204.003
  - steganography
  - image_file
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  image_viewers:
    ParentImage|endswith:
      - '\\mspaint.exe'
      - '\\PhotoViewer.exe'
      - '\\Photos.exe'
    Image|endswith: '.exe'
  steganography_tools:
    Image|contains:
      - 'steghide'
      - 'openstego'
      - 'outguess'
  suspicious_image_process:
    CommandLine|contains:
      - '.jpg'
      - '.png'
      - '.bmp'
      - '.gif'
    Image|endswith: '.exe'
  condition: image_viewers or steganography_tools or suspicious_image_process
falsepositives:
  - Legitimate image processing applications
  - Photo editing software
level: medium
`,er=`title: SaaS OAuth Token Abuse and Session Hijacking
id: c9fa04e5-3456-6789-0123-456789abcdef
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1528/
    - https://tools.ietf.org/html/rfc6749
    - https://docs.microsoft.com/en-us/azure/active-directory/develop/
logsource:
    product: azure
    service: auditlogs
detection:
    selection_oauth_token_abuse:
        ActivityDisplayName:
            - 'Add OAuth2PermissionGrant'
            - 'Consent to application'
            - 'Add service principal'
        Result: 'success'
        InitiatedBy.app.displayName|contains:
            - 'suspicious'
            - 'phishing'
            - 'malicious'
    selection_token_geographic_anomaly:
        ActivityDisplayName: 'Sign-in activity'
        AuthenticationDetails.succeeded: true
    # Token used from multiple countries within short timeframe
    selection_rapid_api_calls:
        Category: 'ApplicationManagement'
        Result: 'success'
    # High volume of API calls within minutes of OAuth consent
    selection_suspicious_oauth_apps:
        ActivityDisplayName: 'Consent to application'
        TargetResources.displayName|contains:
            - 'Microsoft Office'
            - 'Office 365'
            - 'OneDrive'
            - 'SharePoint'
    # Apps mimicking legitimate Microsoft services
        InitiatedBy.app.appId|contains:
    # Known malicious OAuth app IDs would go here
            - '00000000-0000-0000-0000-000000000000'
    selection_session_hijacking:
        ActivityDisplayName: 'Sign-in activity'
        AuthenticationDetails.succeeded: true
    # Multiple concurrent sessions from different geographic locations
    condition: selection_oauth_token_abuse or selection_token_geographic_anomaly or selection_rapid_api_calls or selection_suspicious_oauth_apps or selection_session_hijacking
falsepositives:
    - Legitimate OAuth applications and integrations
    - Users traveling or using VPN services
    - Automated scripts and service accounts with legitimate business purposes
    - Corporate applications with broad permissions
level: high
tags:
    - attack.initial_access
    - attack.t1528
    - attack.credential_access
    - attack.t1550.001
    - oauth
    - saas
    - token_abuse
    - session_hijacking
    - azure
`,nr=`title: Cloud API Key Compromise Detection
id: 031e48c9-789a-0123-4567-89abcdef0123
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1552/001/
    - https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
logsource:
    product: aws
    service: cloudtrail
detection:
    selection_api_geographic_anomaly:
        userIdentity.type: 'IAMUser'
        # API calls from countries not typical for the user
        awsRegion|contains:
            - 'ap-'
            - 'eu-'
            - 'sa-'
            # Focus on cross-region activities
    selection_rapid_enumeration:
        userIdentity.type: 'IAMUser'
        eventName:
            - 'ListUsers'
            - 'ListRoles'
            - 'ListPolicies'
            - 'ListBuckets'
            - 'DescribeInstances'
            - 'DescribeSecurityGroups'
            - 'GetCallerIdentity'
            # Multiple enumeration calls within short timeframe
    selection_sensitive_access:
        userIdentity.type: 'IAMUser'
        eventName:
            - 'GetSecretValue'
            - 'GetParameter'
            - 'DescribeDBInstances'
            - 'GetObject'
            - 'CreateAccessKey'
            - 'CreateRole'
            # Access to sensitive resources and credential creation
    selection_unusual_user_agent:
        userIdentity.type: 'IAMUser'
        userAgent|contains:
            - 'curl'
            - 'wget'
            - 'python-requests'
            - 'aws-cli/1.'
            - 'boto3'
            - 'Postman'
            # Non-standard or programmatic user agents
    selection_concurrent_geographic_usage:
        userIdentity.type: 'IAMUser'
        # Same API key used from multiple geographic locations simultaneously
    selection_privilege_escalation:
        userIdentity.type: 'IAMUser'
        eventName:
            - 'AttachUserPolicy'
            - 'AttachRolePolicy'
            - 'PutUserPolicy'
            - 'PutRolePolicy'
            - 'CreateRole'
            - 'AssumeRole'
            # Attempts to escalate privileges
    selection_suspicious_ip_ranges:
        userIdentity.type: 'IAMUser'
        sourceIPAddress|cidr:
            - '0.0.0.0/8'
            - '10.0.0.0/8'
            - '172.16.0.0/12'
            - '192.168.0.0/16'
            # Focus on external and potentially malicious IP ranges
    condition: selection_api_geographic_anomaly or selection_rapid_enumeration or
               selection_sensitive_access or selection_unusual_user_agent or
               selection_concurrent_geographic_usage or selection_privilege_escalation or
               selection_suspicious_ip_ranges
falsepositives:
    - Legitimate users traveling or working remotely
    - Automated scripts and CI/CD pipelines
    - Third-party integrations and monitoring tools
    - Development and testing environments
    - Service accounts with legitimate automation
level: high
tags:
    - attack.initial_access
    - attack.t1552.001
    - attack.credential_access
    - attack.t1087
    - attack.discovery
    - attack.t1526
    - aws
    - api_key
    - compromise
    - cloudtrail
`,tr=`title: Multi-Factor Authentication Bypass Detection
id: 142f59da-890b-1234-5678-9abcdef01234
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1556/006/
    - https://docs.microsoft.com/en-us/azure/active-directory/authentication/
logsource:
    product: azure
    service: auditlogs
detection:
    selection_mfa_disable:
        ActivityDisplayName:
            - 'Disable Strong Authentication'
            - 'User disabled'
            - 'Update user'
        TargetResources.modifiedProperties.displayName|contains:
            - 'StrongAuthenticationMethods'
            - 'StrongAuthenticationRequirements'
        TargetResources.modifiedProperties.newValue: '[]'
    selection_mfa_policy_changes:
        ActivityDisplayName:
            - 'Update conditional access policy'
            - 'Delete conditional access policy'
            - 'Update authentication methods policy'
        TargetResources.displayName|contains:
            - 'MFA'
            - 'Multi-Factor'
            - 'Strong Authentication'
    selection_emergency_access:
        ActivityDisplayName: 'Sign-in activity'
        AuthenticationRequirement: 'singleFactorAuthentication'
        ConditionalAccessStatus: 'notApplied'
        UserPrincipalName|contains:
            - 'breakglass'
            - 'emergency'
            - 'admin'
            # Emergency access accounts used without MFA
    selection_suspicious_auth_flow:
        ActivityDisplayName: 'Sign-in activity'
        AuthenticationDetails.succeeded: true
        AuthenticationMethodsUsed: 'Password'
        # Successful authentication with only password, no MFA
        RiskLevelDuringSignIn:
            - 'high'
            - 'medium'
    selection_mfa_reset_abuse:
        ActivityDisplayName:
            - 'Reset user password'
            - 'Admin updated user'
            - 'User registered security info'
        InitiatedBy.user.userPrincipalName|endswith:
            - '@external.com'
            - '@guest.com'
            # External users performing MFA-related admin actions
    selection_token_replay:
        ActivityDisplayName: 'Sign-in activity'
        AuthenticationDetails.succeeded: true
        # Multiple sign-ins with identical authentication tokens
        TokenIssuerType: 'AzureAD'
    selection_device_registration_bypass:
        ActivityDisplayName:
            - 'Add registered users'
            - 'Update device'
            - 'Register device'
        TargetResources.modifiedProperties.displayName: 'TrustedForDelegation'
        TargetResources.modifiedProperties.newValue: 'True'
    condition: selection_mfa_disable or selection_mfa_policy_changes or selection_emergency_access or
               selection_suspicious_auth_flow or selection_mfa_reset_abuse or
               selection_token_replay or selection_device_registration_bypass
falsepositives:
    - Legitimate MFA policy updates by administrators
    - Authorized emergency access during incidents
    - Service accounts with approved MFA exemptions
    - Legitimate device registration and management
    - Password reset flows for legitimate users
level: critical
tags:
    - attack.initial_access
    - attack.t1556.006
    - attack.credential_access
    - attack.t1556
    - attack.defense_evasion
    - attack.t1621
    - azure
    - mfa
    - authentication
    - bypass
`,ir=`title: Cloud Security Tool Disabling Detection
id: 475i82ad-b23e-4567-8901-cdef01234567
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1562/007/
    - https://docs.aws.amazon.com/cloudtrail/latest/userguide/
logsource:
    product: aws
    service: cloudtrail
detection:
    selection_cloudtrail_disable:
        eventName:
            - 'StopLogging'
            - 'DeleteTrail'
            - 'PutEventSelectors'
        responseElements.trail.includeGlobalServiceEvents: false
    selection_guardduty_disable:
        eventName:
            - 'DeleteDetector'
            - 'UpdateDetector'
            - 'DeleteIPSet'
            - 'DeleteThreatIntelSet'
            # GuardDuty security service tampering
    selection_security_hub_disable:
        eventName:
            - 'DisableSecurityHub'
            - 'DeleteInsight'
            - 'BatchDisableStandards'
            # Security Hub disabling
    selection_config_disable:
        eventName:
            - 'StopConfigurationRecorder'
            - 'DeleteConfigurationRecorder'
            - 'DeleteDeliveryChannel'
            # AWS Config service disabling
    selection_vpc_flow_logs_disable:
        eventName:
            - 'DeleteFlowLogs'
            - 'ModifyVpcAttribute'
        requestParameters.enableDnsHostnames: false
    selection_cloudwatch_tampering:
        eventName:
            - 'DeleteLogGroup'
            - 'DeleteLogStream'
            - 'DeleteMetricAlarm'
            # CloudWatch monitoring disabling
    selection_iam_logging_disable:
        eventName:
            - 'DeleteAccessKey'
            - 'DeactivateMFADevice'
            - 'DeleteAccountPasswordPolicy'
            # IAM security feature disabling
    selection_network_security_disable:
        eventName:
            - 'DeleteSecurityGroup'
            - 'AuthorizeSecurityGroupIngress'
            - 'RevokeSecurityGroupEgress'
        requestParameters.groupId: '*'
        requestParameters.ipPermissions.cidrIp: '0.0.0.0/0'
    condition: selection_cloudtrail_disable or selection_guardduty_disable or
               selection_security_hub_disable or selection_config_disable or
               selection_vpc_flow_logs_disable or selection_cloudwatch_tampering or
               selection_iam_logging_disable or selection_network_security_disable
falsepositives:
    - Legitimate administrative maintenance activities
    - Cost optimization efforts to disable unused services
    - Authorized security tool reconfiguration
    - Disaster recovery and backup operations
    - Compliance-driven security configuration changes
level: critical
tags:
    - attack.initial_access
    - attack.t1562.007
    - attack.defense_evasion
    - attack.t1562
    - attack.impact
    - attack.t1489
    - aws
    - cloudtrail
    - security_disable
    - monitoring
`,sr=`---
title: Suspicious Email Attachment Execution
id: f4c2e8a7-1b39-4df2-8c5e-3a7b9c4d6f8e
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects execution of potentially malicious email attachments by monitoring
  process creation events for common attachment file types executed from
  temporary directories or email client locations.
references:
  - https://attack.mitre.org/techniques/T1566/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.001
  - windows
  - email
  - attachment
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith:
      - '\\excel.exe'
      - '\\winword.exe'
      - '\\powerpnt.exe'
      - '\\acrord32.exe'
    CommandLine|contains:
      - '\\Temp\\'
      - '\\AppData\\Local\\Microsoft\\Windows\\INetCache\\'
      - '\\Downloads\\'
    ParentImage|endswith:
      - '\\outlook.exe'
      - '\\thunderbird.exe'
  condition: selection
falsepositives:
  - Legitimate document processing from email clients
level: medium
`,or=`title: AWS Console Credential Phishing Detection
id: b8e9f3d4-2345-5678-9012-3456789abcde
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1566/002/
    - https://docs.aws.amazon.com/cloudtrail/latest/userguide/
logsource:
    product: aws
    service: cloudtrail
detection:
    selection_suspicious_console_login:
        eventName: 'ConsoleLogin'
        responseElements.ConsoleLogin: 'Success'
        sourceIPAddress|cidr:
            - '10.0.0.0/8'
            - '172.16.0.0/12'
            - '192.168.0.0/16'
            - '127.0.0.0/8'
            # Exclude internal networks, focus on external suspicious IPs
    selection_tor_vpn_indicators:
        eventName: 'ConsoleLogin'
        responseElements.ConsoleLogin: 'Success'
        userAgent|contains:
            - 'Tor Browser'
            - 'Tails'
            - 'anonymized'
    selection_rapid_enumeration:
        eventName:
            - 'GetCallerIdentity'
            - 'ListUsers'
            - 'ListRoles'
            - 'ListPolicies'
            - 'DescribeRegions'
            - 'ListBuckets'
            # Multiple enumeration activities within 10 minutes of console login
    selection_geographic_anomaly:
        eventName: 'ConsoleLogin'
        responseElements.ConsoleLogin: 'Success'
        # Login from country different from user's typical location
    condition: selection_suspicious_console_login or selection_tor_vpn_indicators or (selection_rapid_enumeration and selection_suspicious_console_login)
falsepositives:
    - Legitimate administrators using VPN or proxy services
    - New employees or contractors accessing from different geographic locations
    - Legitimate security testing and auditing activities
level: high
tags:
    - attack.initial_access
    - attack.t1566.002
    - attack.credential_access
    - attack.t1110
    - aws
    - cloudtrail
    - console
    - phishing
`,ar=`title: O365 Credential Phishing Attack Detection
id: a7f8d2c3-1234-4567-8901-23456789abcd
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1566/002/
    - https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/
logsource:
    product: azure
    service: signinlogs
detection:
    selection_phishing_indicators:
        - EventName: 'SigninLogs'
          ResultType: 0  # Success
          ClientAppUsed: 'Browser'
          UserAgent|contains:
              - 'PhantomJS'
              - 'headless'
              - 'selenium'
              - 'puppeteer'
        - EventName: 'SigninLogs'
          ResultType: 0
          Location|contains: 'Anonymous Proxy'
        - EventName: 'SigninLogs'
          ResultType: 0
          AuthenticationRequirement: 'singleFactorAuthentication'
          ConditionalAccessStatus: 'notApplied'
    selection_rapid_geo_change:
        EventName: 'SigninLogs'
        ResultType: 0
        # Detect authentication from different countries within 30 minutes
    selection_failed_then_success:
        EventName: 'SigninLogs'
        # Failed auth followed by success from different IP within 5 minutes
    timeframe: 30m
    condition: selection_phishing_indicators or selection_rapid_geo_change or selection_failed_then_success
falsepositives:
    - Legitimate users traveling or using VPN services
    - Automated testing environments
    - Service accounts with legitimate automation
level: high
tags:
    - attack.initial_access
    - attack.t1566.002
    - attack.credential_access
    - attack.t1110
    - azure
    - o365
    - phishing
`,cr=`---
title: Malicious Link Click from Email
id: a8d3f7e2-9c4b-41f5-b2e8-7d6c3a9f1e4b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects potential malicious link clicks by monitoring browser process creation
  with suspicious URLs or domains that may originate from phishing emails.
references:
  - https://attack.mitre.org/techniques/T1566/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.002
  - windows
  - browser
  - phishing
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith:
      - '\\chrome.exe'
      - '\\firefox.exe'
      - '\\msedge.exe'
      - '\\iexplore.exe'
    CommandLine|contains:
      - 'bit.ly'
      - 'tinyurl.com'
      - 'goo.gl'
      - 't.co'
      - 'short.link'
  suspicious_tld:
    CommandLine|contains:
      - '.tk'
      - '.ml'
      - '.cf'
      - '.ga'
  condition: selection or suspicious_tld
falsepositives:
  - Legitimate URL shortener usage
  - Social media link clicks
level: medium
`,rr=`---
title: Email Service Abuse for Initial Access
id: e6b9c4f7-3a8e-4d2c-b1f5-7e4a9c2d8f6b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects abuse of legitimate email services for malicious purposes including
  mass email sending, suspicious attachments, or phishing campaigns using
  compromised or newly created accounts.
references:
  - https://attack.mitre.org/techniques/T1566/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.003
  - email
  - phishing
  - service_abuse
logsource:
  product: o365
  service: exchange
detection:
  mass_email:
    Operation: 'Send'
    RecipientCount|gte: 50
  suspicious_attachment:
    Operation: 'Send'
    AttachmentExtension|contains:
      - '.exe'
      - '.scr'
      - '.bat'
      - '.ps1'
      - '.vbs'
  external_sender:
    Operation: 'Send'
    SenderDomain|contains:
      - 'gmail.com'
      - 'yahoo.com'
      - 'hotmail.com'
      - 'outlook.com'
  condition: mass_email or (suspicious_attachment and external_sender)
falsepositives:
  - Legitimate marketing campaigns
  - Authorized bulk email operations
level: medium
`,lr=`---
title: Email Server Compromise Detection
id: c5f8e2a9-1d4b-4e7c-a6f3-2b8e9c1d5a7e
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects compromise of email servers by monitoring for unauthorized access,
  configuration changes, suspicious email forwarding rules, or unexpected
  administrative activities on email infrastructure.
references:
  - https://attack.mitre.org/techniques/T1566/004/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.004
  - email_server
  - exchange
  - compromise
logsource:
  product: windows
  service: msexchange-management
detection:
  mailbox_rules:
    EventID: 1
    OperationName|contains:
      - 'New-InboxRule'
      - 'Set-InboxRule'
      - 'New-MailboxRule'
  admin_changes:
    OperationName|contains:
      - 'Add-RoleGroupMember'
      - 'New-ManagementRoleAssignment'
      - 'Set-OrganizationConfig'
  suspicious_forwarding:
    OperationName|contains:
      - 'Set-Mailbox'
    Parameters|contains:
      - 'ForwardingAddress'
      - 'ForwardingSmtpAddress'
  condition: mailbox_rules or admin_changes or suspicious_forwarding
falsepositives:
  - Legitimate administrative changes
  - Authorized email forwarding configurations
level: high
`,dr=`---
title: Email Bombing Attack Detection
id: d4a7e3f8-9c2b-4e5f-a1d6-8e3f9c4d2a7b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects email bombing attacks by monitoring for high volumes of emails
  sent to single recipients, mass subscription attempts, or email flood
  patterns that may be used to overwhelm targets or hide malicious activity.
references:
  - https://attack.mitre.org/techniques/T1566/005/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.005
  - email_bombing
  - denial_of_service
  - email_flood
logsource:
  product: o365
  service: exchange
detection:
  high_volume:
    Operation: 'Send'
    RecipientCount|gte: 100
  same_recipient:
    Operation: 'Send'
    Recipients|count|gte: 50
  subscription_spam:
    Subject|contains:
      - 'Welcome to'
      - 'Confirm subscription'
      - 'You have subscribed'
      - 'Newsletter signup'
  condition: high_volume or same_recipient or subscription_spam
falsepositives:
  - Legitimate bulk email campaigns
  - Newsletter subscriptions
level: medium
`,mr=`---
title: SMS Phishing (Smishing) Attack Detection
id: f3c7e9a5-8b2d-4e6f-a1c4-9e2f7d8c3a5b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects SMS phishing attacks by monitoring for suspicious text messages
  containing malicious links, fake alerts, or social engineering attempts
  that may lead to credential theft or malware installation.
references:
  - https://attack.mitre.org/techniques/T1566/006/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.006
  - sms
  - phishing
  - social_engineering
logsource:
  product: mobile
  service: sms
detection:
  suspicious_links:
    message_body|contains:
      - 'bit.ly'
      - 'tinyurl.com'
      - 'click here'
      - 'urgent action required'
  fake_alerts:
    message_body|contains:
      - 'account suspended'
      - 'security alert'
      - 'verify account'
      - 'payment failed'
  impersonation:
    sender|contains:
      - 'bank'
      - 'paypal'
      - 'amazon'
      - 'microsoft'
  condition: suspicious_links or fake_alerts or impersonation
falsepositives:
  - Legitimate SMS notifications
  - Authorized marketing messages
level: medium
`,ur=`---
title: Voice Phishing (Vishing) Attack Detection
id: a6e2f9c4-7d8b-4e3f-c1a5-8f2e9c6d4a7b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects voice phishing attacks by monitoring for suspicious phone calls,
  voice message patterns, or social engineering attempts via voice
  communication that may lead to credential disclosure or system access.
references:
  - https://attack.mitre.org/techniques/T1566/007/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1566.007
  - voice
  - phishing
  - social_engineering
logsource:
  product: voip
  service: asterisk
detection:
  suspicious_keywords:
    call_transcript|contains:
      - 'verify account'
      - 'urgent security'
      - 'suspend account'
      - 'payment issue'
  impersonation_attempts:
    caller_id|contains:
      - 'IT Support'
      - 'Security Team'
      - 'Help Desk'
      - 'Microsoft'
  high_frequency:
    source_number|count|gte: 10
    time_window: '1h'
  condition: suspicious_keywords or impersonation_attempts or high_frequency
falsepositives:
  - Legitimate support calls
  - Authorized IT communications
level: medium
`,pr=`---
title: System Image Modification Detection
id: b9f4e7c8-3a5d-4e2f-c6a1-9e3f8c5d2a7b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects unauthorized modification of system images including firmware,
  BIOS updates, bootloader changes, or operating system image tampering
  that may indicate persistent compromise or rootkit installation.
references:
  - https://attack.mitre.org/techniques/T1601/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.persistence
  - attack.t1601
  - firmware
  - bios
  - bootloader
logsource:
  product: windows
  service: system
detection:
  firmware_update:
    EventID: 6
    DriverName|contains:
      - 'bios'
      - 'firmware'
      - 'uefi'
  boot_modification:
    EventID: 12
    RegistryKey|contains:
      - 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Boot'
      - 'HKLM\\BCD'
  system_image:
    EventID: 7045
    ServiceName|contains:
      - 'boot'
      - 'image'
      - 'recovery'
  condition: firmware_update or boot_modification or system_image
falsepositives:
  - Legitimate firmware updates
  - Authorized system maintenance
level: high
`,gr=`title: Serverless Function Abuse for Initial Access
id: f20d37b8-6789-9012-3456-789abcdef012
status: experimental
description: Detects cloud-based security attacks and access attempts.
references:
    - https://attack.mitre.org/techniques/T1609/
    - https://docs.aws.amazon.com/lambda/latest/dg/security.html
logsource:
    product: aws
    service: cloudtrail
detection:
    selection_suspicious_lambda_creation:
        eventName: 'CreateFunction'
        requestParameters.functionName|contains:
            - 'shell'
            - 'cmd'
            - 'exec'
            - 'backdoor'
            - 'reverse'
            - 'pivot'
        requestParameters.runtime|contains:
            - 'provided'
            - 'custom'
    selection_excessive_permissions:
        eventName: 'CreateFunction'
        requestParameters.role|contains:
            - 'AdministratorAccess'
            - 'PowerUserAccess'
            - '*:*'
            - 'FullAccess'
    selection_suspicious_invocations:
        eventName: 'Invoke'
        responseElements.statusCode: 200
        # Functions invoked from unusual geographic locations
        sourceIPAddress|cidr:
            - '10.0.0.0/8'
            - '172.16.0.0/12'
            - '192.168.0.0/16'
    selection_data_access_functions:
        eventName: 'Invoke'
        # Functions accessing sensitive AWS services
        requestParameters.functionName|regex: '.*-(s3|rds|secrets|ssm|kms)-.*'
    selection_reverse_shell_indicators:
        eventName: 'Invoke'
        userAgent|contains:
            - 'curl'
            - 'wget'
            - 'nc'
            - 'netcat'
            - 'bash'
    selection_code_injection:
        eventName: 'UpdateFunctionCode'
        requestParameters.zipFile|contains:
            - 'eval('
            - 'exec('
            - 'system('
            - 'shell_exec'
            - 'passthru'
            - 'proc_open'
    selection_environment_tampering:
        eventName: 'UpdateFunctionConfiguration'
        requestParameters.environment.variables|contains:
            - 'AWS_ACCESS_KEY_ID'
            - 'AWS_SECRET_ACCESS_KEY'
            - 'PATH=/tmp'
    condition: selection_suspicious_lambda_creation or selection_excessive_permissions or
               selection_suspicious_invocations or selection_data_access_functions or
               selection_reverse_shell_indicators or selection_code_injection or selection_environment_tampering
falsepositives:
    - Legitimate serverless applications with required permissions
    - Development and testing environments
    - Automated deployment tools and CI/CD pipelines
    - Administrative functions requiring elevated access
level: high
tags:
    - attack.initial_access
    - attack.t1609
    - attack.execution
    - attack.t1059
    - attack.privilege_escalation
    - attack.t1068
    - aws
    - lambda
    - serverless
    - function
`,_r=`---
title: Content Injection Attack Detection
id: c7e4f9a3-8d2b-4e5f-a1c6-9f3e8d2c5a7b
status: experimental
description: Detects cloud-based security attacks and access attempts.
  Detects content injection attacks by monitoring for malicious script
  injection, HTML manipulation, or content spoofing attempts that may
  be used to compromise users or deliver malicious payloads.
references:
  - https://attack.mitre.org/techniques/T1659/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.initial_access
  - attack.t1659
  - content_injection
  - xss
  - html_injection
logsource:
  product: zeek
  service: http
detection:
  script_injection:
    uri|contains:
      - '<script>'
      - 'javascript:'
      - 'eval('
      - 'document.write'
  html_injection:
    uri|contains:
      - '<iframe>'
      - '<object>'
      - '<embed>'
      - '<form>'
  parameter_injection:
    uri|contains:
      - '%3Cscript%3E'
      - '%22%3E%3Cscript%3E'
      - 'javascript%3A'
  condition: script_injection or html_injection or parameter_injection
falsepositives:
  - Legitimate web application functionality
  - Dynamic content generation
level: medium
`,fr=`---
title: Suspicious WMI-Based Execution (Wmiprvse Spawning Scripting Engines)
id: c682cb7c-7231-45a4-89ec-5ee6894c14cc
status: experimental
description: Detects suspicious use of WMI where wmiprvse.exe spawns PowerShell, cmd.exe, or other scripting engines.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection_event:
    EventID:
      - 1
      - 3
  selection_parent:
    ParentImage|endswith: '\\wmiprvse.exe'
  selection_child:
    Image|endswith:
      - '\\powershell.exe'
      - '\\cmd.exe'
      - '\\mshta.exe'
      - '\\wscript.exe'
      - '\\cscript.exe'
  condition: selection_event and selection_parent and selection_child
fields:
  - ParentImage
  - Image
  - CommandLine
  - ProcessId
  - ParentProcessId
  - DestinationIp
  - DestinationPort
  - Protocol
  - ComputerName
falsepositives:
  - Legitimate scripts or automation frameworks using WMI (e.g., SCCM)
  - Domain joined management tools
level: high
tags:
  - attack.execution
  - attack.persistence
  - attack.t1047
  - sysmon
`,hr=`---
title: WMI Remote Command Execution
id: n4o5p6q7-r8s9-0123-4567-890123nopqrs
status: experimental
description: Detects WMI being used for remote command execution and lateral movement
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_wmic:
    EventID: 1
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - '/node:'
      - 'process call create'
      - '/user:'
      - '/password:'
      - 'Win32_Process'
  selection_powershell_wmi:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Invoke-WmiMethod'
      - 'Get-WmiObject'
      - 'gwmi'
      - 'Win32_Process'
      - 'Create'
      - '-ComputerName'
      - '-Credential'
  selection_wmiprvse:
    EventID: 1
    Image|endswith: '\\wmiprvse.exe'
    ParentImage|endswith: '\\svchost.exe'
  remote_indicators:
    CommandLine|contains:
      - 'cmd.exe /c'
      - 'powershell.exe -c'
      - 'rundll32.exe'
      - 'regsvr32.exe'
      - 'mshta.exe'
      - 'bitsadmin.exe'
      - 'certutil.exe'
  network_indicators:
    CommandLine|re: '.*\\\\\\\\[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}.*'
  condition: (selection_wmic or selection_powershell_wmi) and (remote_indicators or network_indicators) or selection_wmiprvse
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
  - LogonId
falsepositives:
  - System administration
  - Remote management tools
  - Monitoring software
level: medium
tags:
  - attack.execution
  - attack.lateral-movement
  - attack.t1047
  - sysmon
  - windows
`,vr=`---
title: WMI Win32_Process.Create Executed Remotely (WMI-Activity)
id: 6f2e9b12-3a0a-4b7a-9b31-0000aaaawmi2
status: experimental
description: Flags remote WMI method execution of Win32_Process.Create via WMI-Activity Operational log (commonly used for lateral movement).
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1047/
logsource:
  product: windows
  service: Microsoft-Windows-WMI-Activity/Operational
detection:
  selection_5858:
    EventID: 5858
  selection_method:
    Message|contains|all:
      - 'Win32_Process.Create'
      - 'Execute Method'
  filter_localhost:
    Message|contains:
      - 'ClientMachine=localhost'
      - 'ClientMachine=127.0.0.1'
  condition: selection_5858 and selection_method and not filter_localhost
fields:
  - EventID
  - User
  - Computer
  - Message
  - CorrelationActivityID
  - Operation
  - NamespaceName
  - ClientProcessId
falsepositives:
  - Approved admin tools that orchestrate software installs or updates via WMI
level: critical
tags:
  - attack.T1047
  - execution
  - windows
  - wmi-activity
  - lateral-movement
  - APT32
  - TrickBot
`,yr=`---
title: Suspicious WMIC Usage for Remote Process Execution
id: 3c1a1c4b-7c6c-4f5d-bb77-0000aaaawmi1
status: stable
description: Detects suspicious use of wmic.exe to spawn processes (e.g., cmd.exe/powershell.exe) locally or on remote hosts using 'process call create'.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1047/
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection_parent_wmic:
    ParentImage|endswith: '\\wmic.exe'
  selection_image_wmic:
    Image|endswith: '\\wmic.exe'
  selection_params:
    CommandLine|contains:
      - 'process call create'
      - '/node:'
      - '/user:'
  selection_spawned:
    CommandLine|contains:
      - 'cmd.exe /c'
      - 'powershell.exe'
      - 'pwsh.exe'
  condition: (selection_parent_wmic or selection_image_wmic) and selection_params and selection_spawned
fields:
  - UtcTime
  - Image
  - ParentImage
  - CommandLine
  - ParentCommandLine
  - User
  - CurrentDirectory
falsepositives:
  - Legitimate remote admin or software deployment using WMIC
level: high
tags:
  - attack.T1047
  - execution
  - windows
  - sysmon
  - lolbin
  - APT29
  - FIN7
`,wr=`---
title: Suspicious Execution of wmiexec
id: f07d8d74-1234-5678-9abc-def123456789
status: experimental
description: >
  Detects potential malicious usage of wmiexec, a tool often employed by adversaries for lateral movement and remote command execution. The
  rule looks for process creation events where the CommandLine field contains "wmiexec". Legitimate administrative use may trigger this, so
  further investigation is recommended.
author: Matthew Iverson
date: 2025-04-08
references:
  - https://attack.mitre.org/techniques/T1047/
tags:
  - attack.execution
  - attack.lateral_movement
  - attack.t1047
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - "wmiexec"
  condition: selection
falsepositives:
  - Legitimate administrative use of wmiexec for remote management
level: medium
`,br=`title: Fileless Code Execution in Container Environments
id: f8c1d4e7-a3b6-4f9c-8e2a-1d5b3c7f9a2e
status: experimental
description: Detects fileless malware execution techniques within containerized environments using memory-resident payloads
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1055/002/
  - https://www.crowdstrike.com/blog/fileless-malware-in-containers/
logsource:
  product: linux
  service: auditd
detection:
  selection_memfd_create:
    type: 'SYSCALL'
    syscall: 'memfd_create'
    success: 'yes'
  selection_proc_self_mem:
    type: 'PATH'
    name|contains:
      - '/proc/self/mem'
      - '/proc/*/mem'
      - '/dev/shm'
  selection_ptrace_injection:
    type: 'SYSCALL'
    syscall: 'ptrace'
    a0|contains:
      - 'PTRACE_POKETEXT'
      - 'PTRACE_POKEDATA'
      - 'PTRACE_SETREGS'
      - 'PTRACE_ATTACH'
    success: 'yes'
  selection_mmap_execution:
    type: 'SYSCALL'
    syscall: 'mmap'
    a2|contains:
      - 'PROT_EXEC'
      - 'PROT_READ|PROT_WRITE|PROT_EXEC'
    success: 'yes'
  selection_execve_memfd:
    type: 'SYSCALL'
    syscall: 'execve'
    a0|startswith:
      - '/proc/self/fd/'
      - '/dev/fd/'
    success: 'yes'
  selection_container_escape:
    type: 'PATH'
    name|contains:
      - '/var/lib/docker'
      - '/var/run/docker.sock'
      - '/proc/1/root'
      - '/host'
  selection_shared_memory:
    type: 'SYSCALL'
    syscall:
      - 'shmget'
      - 'shmat'
      - 'shmctl'
    success: 'yes'
  selection_process_injection:
    type: 'SYSCALL'
    syscall: 'process_vm_writev'
    success: 'yes'
  selection_ld_preload:
    type: 'EXECVE'
    a2|contains: 'LD_PRELOAD='
  condition: 1 of selection_*
falsepositives:
  - Legitimate container runtime operations
  - Dynamic linking and library loading
  - Performance optimization tools
  - Container orchestration platforms
level: high
tags:
  - attack.defense_evasion
  - attack.t1055
  - attack.t1055.002
  - fileless_execution
  - container_security
  - memory_injection
  - linux
  - auditd
`,kr=`title: Process Hollowing in Virtualized Environments
id: c5f2a8b1-d3e7-4c9a-8f6b-1a4d2e5c3b7f
status: experimental
description: Detects process hollowing techniques specifically designed to evade detection in virtual machine environments
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1055/012/
  - https://www.elastic.co/guide/en/security/current/process-injection-detected.html
logsource:
  product: windows
  service: sysmon
detection:
  selection_process_creation:
    EventID: 1
    ParentImage|endswith:
      - '\\explorer.exe'
      - '\\winlogon.exe'
      - '\\services.exe'
    Image|endswith:
      - '\\svchost.exe'
      - '\\rundll32.exe'
      - '\\dllhost.exe'
      - '\\regsvr32.exe'
    CommandLine|contains:
      - '/s'
      - '-s'
      - 'silent'
  selection_process_access:
    EventID: 10
    SourceImage|endswith:
      - '\\powershell.exe'
      - '\\cmd.exe'
      - '\\rundll32.exe'
      - '\\regsvr32.exe'
    TargetImage|endswith:
      - '\\svchost.exe'
      - '\\explorer.exe'
      - '\\winlogon.exe'
    GrantedAccess:
      - '0x1F0FFF'
      - '0x1FFFFF'
      - '0x143A'
      - '0x1410'
      - '0x1438'
  selection_image_load:
    EventID: 7
    Image|endswith:
      - '\\svchost.exe'
      - '\\explorer.exe'
      - '\\winlogon.exe'
    ImageLoaded|endswith:
      - '\\ntdll.dll'
      - '\\kernel32.dll'
      - '\\kernelbase.dll'
    Signed: 'false'
  selection_vm_timing:
    EventID: 1
    CommandLine|contains|all:
      - 'sleep'
      - 'delay'
    CommandLine|contains:
      - '30000'
      - '60000'
      - '120000'
      - '180000'
  selection_api_calls:
    EventID: 10
    CallTrace|contains:
      - 'CreateRemoteThread'
      - 'WriteProcessMemory'
      - 'VirtualAllocEx'
      - 'NtUnmapViewOfSection'
      - 'NtMapViewOfSection'
      - 'ZwUnmapViewOfSection'
  condition: selection_process_creation and (selection_process_access or selection_image_load) and (selection_vm_timing or selection_api_calls)
falsepositives:
  - Legitimate software installation
  - System maintenance operations
  - Antivirus software behavior
level: high
tags:
  - attack.defense_evasion
  - attack.privilege_escalation
  - attack.t1055
  - attack.t1055.012
  - process_hollowing
  - vm_evasion
  - sysmon
  - windows
`,Sr=`---
title: Suspicious Process Injection into LSASS or Explorer
id: 57e5e43f-ae10-4db4-88a5-49980d05e7cc
status: experimental
description: >
  Detects process injection behavior either via Sysmon (CreateRemoteThread, ProcessAccess) or Windows Security logs when sensitive processes like
  lsass.exe or explorer.exe are accessed in a privileged manner.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
detection:
  sysmon_event:
    EventID:
      - 8
      - 10
  sysmon_target:
    TargetImage|endswith:
      - '\\lsass.exe'
      - '\\explorer.exe'
  security_event:
    EventID:
      - 4673
      - 4674
  security_target:
    Message|contains:
      - 'lsass.exe'
      - 'explorer.exe'
  condition: (sysmon_event and sysmon_target) or (security_event and security_target)
fields:
  - Image
  - TargetImage
  - SourceProcessId
  - TargetProcessId
  - Message
  - ComputerName
falsepositives:
  - Security tools
  - Backup or monitoring software
level: high
tags:
  - attack.defense_evasion
  - attack.t1055
  - attack.t1055.001
  - windows
  - sysmon
`,xr=`---
title: Process Injection Techniques
id: a1b2c3d4-5678-90ab-cdef-1234567890ab
status: experimental
description: >
  "Detects potential process injection activity on Windows systems by monitoring Sysmon events including process access (EventID 10) with
  suspicious granted access rights and remote thread creation events (EventID 8)."
references:
  - https://attack.mitre.org/techniques/T1055/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.execution
  - attack.t1055
logsource:
  product: windows
  service: sysmon
detection:
  suspicious_access:
    EventID: 10
    GrantedAccess|re: "(?i)0x1F0FFF|0x1fffff|0x1410|0x143a"
  suspicious_thread:
    EventID: 8
  condition: suspicious_access OR suspicious_thread
falsepositives:
  - Legitimate use of process injection techniques by security tools, EDR/antivirus software, or for debugging purposes.
level: high
`,Dr=`---
title: PowerShell Download and Execute Patterns
id: m3n4o5p6-q7r8-9012-3456-789012mnopqr
status: experimental
description: Detects PowerShell commands that download and execute files or scripts
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: powershell-classic
detection:
  selection_download:
    EventID: 4104
    Message|contains:
      - 'DownloadString'
      - 'DownloadFile'
      - 'Invoke-WebRequest'
      - 'iwr'
      - 'wget'
      - 'curl'
      - 'WebClient'
      - 'Net.WebClient'
      - 'Start-BitsTransfer'
  selection_execute:
    EventID: 4104
    Message|contains:
      - 'Invoke-Expression'
      - 'iex'
      - 'Invoke-Command'
      - 'icm'
      - 'Start-Process'
      - 'saps'
      - '&'
      - 'cmd /c'
      - 'powershell -c'
  selection_fileless:
    EventID: 4104
    Message|contains:
      - 'FromBase64String'
      - 'EncodedCommand'
      - 'Reflection.Assembly'
      - 'Load'
      - 'GetType'
      - 'GetMethod'
      - 'Invoke'
  suspicious_domains:
    Message|contains:
      - 'raw.githubusercontent'
      - 'pastebin.com'
      - 'hastebin'
      - 'ghostbin'
      - 'bit.ly'
      - 'tinyurl'
      - '.tk'
      - '.ml'
      - '.ga'
      - '.cf'
  condition: (selection_download and selection_execute) or (selection_download and suspicious_domains) or selection_fileless
fields:
  - Computer
  - User
  - ProcessId
  - ScriptBlockId
  - Message
falsepositives:
  - Legitimate PowerShell scripts
  - Software installation
  - System administration
level: high
tags:
  - attack.execution
  - attack.t1059.001
  - powershell
  - windows
`,Ir=`---
title: Suspicious PowerShell Script Block Execution
id: 3d487b47-8b1e-47b6-94bb-0e973de14989
status: experimental
description: Detects execution of suspicious or obfuscated PowerShell commands, such as AMSI bypasses or encoded payloads, using either Sysmon or PowerShell Operational Logs.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
detection:
  sysmon_event:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'FromBase64String'
      - 'amsi'
      - 'IEX'
      - 'Invoke-Obfuscation'
      - 'DownloadString'
  powershell_event:
    EventID: 4104
    Channel: Microsoft-Windows-PowerShell/Operational
    Message|contains:
      - 'FromBase64String'
      - 'amsi'
      - 'IEX'
      - 'Invoke-Obfuscation'
      - 'DownloadString'
  condition: sysmon_event or powershell_event
fields:
  - Image
  - CommandLine
  - Message
  - ComputerName
  - EventID
  - ProcessId
  - ParentImage
falsepositives:
  - Legitimate administrative scripts
  - Red team activity
level: high
tags:
  - attack.execution
  - attack.t1059
  - attack.t1059.001
  - sysmon
  - windows
`,Tr=`---
title: Suspicious Command Shell Activity (Encoded or Obfuscated Commands)
id: 82a7dfe1-59f9-4b2a-bb02-7a2a63f0d002
status: experimental
description: Detects suspicious use of cmd.exe executing encoded or obfuscated commands often used by attackers to evade detection.
references:
  - https://attack.mitre.org/techniques/T1059/003/
author: Matthew Iverson
date: 2025-10-20
tags:
  - attack.execution
  - attack.t1059.003
  - windows
  - cmd
  - malware
  - apt
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - '/c'
      - '&&'
      - '||'
      - '^'
      - '%'
      - 'set '
      - 'for '
      - 'call '
      - 'powershell'
      - 'certutil'
      - 'bitsadmin'
      - 'whoami'
  condition: selection
falsepositives:
  - Administrative scripts or automation tasks
level: medium
tactic: Execution
`,Cr=`---
title: CMD Launched From Suspicious Parent Process
id: 1dcbf2a9-c7a1-4121-b4b9-3bce6e0c7e2b
status: experimental
description: Detects when cmd.exe is launched from a suspicious or uncommon parent process (e.g., Office apps, browsers, or script hosts), which can indicate malicious code execution.
references:
  - https://attack.mitre.org/techniques/T1059/003/
author: Matthew Iverson
date: 2025-10-20
tags:
  - attack.execution
  - attack.t1059.003
  - cmd
  - apt
  - malware
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith: '\\cmd.exe'
    ParentImage|endswith:
      - '\\winword.exe'
      - '\\excel.exe'
      - '\\outlook.exe'
      - '\\wscript.exe'
      - '\\cscript.exe'
      - '\\mshta.exe'
      - '\\iexplore.exe'
      - '\\chrome.exe'
      - '\\firefox.exe'
  condition: selection
falsepositives:
  - Legitimate scripts or macros
level: high
tactic: Execution
`,Er=`---
title: Suspicious Office-Initiated Scripting or Execution Chain
id: 6df2e2b1-14db-4fc7-9759-8869c8d3e1d9
status: experimental
description: Detects suspicious parent-child chains such as Office apps spawning script interpreters like powershell.exe, mshta.exe, etc., based on Sysmon Event ID 1.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  parent_office:
    ParentImage|endswith:
      - '\\winword.exe'
      - '\\excel.exe'
      - '\\outlook.exe'
  child_scripting:
    Image|endswith:
      - '\\powershell.exe'
      - '\\mshta.exe'
      - '\\cmd.exe'
      - '\\wscript.exe'
      - '\\cscript.exe'
  condition: parent_office and child_scripting
fields:
  - ParentImage
  - Image
  - CommandLine
  - ProcessId
  - ParentProcessId
  - ComputerName
falsepositives:
  - Automated tools/scripts generating reports or emails
  - Plugins or add-ins executing scripts legitimately
level: high
tags:
  - attack.execution
  - attack.t1059
  - attack.t1059.001
  - attack.t1218
  - sysmon
`,Pr=`---
title: PowerShell Encoded Command Execution
id: 8f1b6a27-62cb-44ce-9811-1111aaaapsh1
status: stable
description: Detects PowerShell command lines that contain base64-encoded commands, which adversaries often use to obfuscate malicious scripts or payloads.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1086/
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection_image:
    Image|endswith: '\\powershell.exe'
  selection_encoded:
    CommandLine|contains:
      - '-encodedCommand'
      - '-enc '
      - '/e '
  condition: selection_image and selection_encoded
fields:
  - UtcTime
  - Image
  - CommandLine
  - ParentImage
  - User
falsepositives:
  - System administrators using legitimate encoded commands for automation
level: high
tags:
  - attack.T1086
  - execution
  - windows
  - sysmon
  - powershell
  - lolbin
  - APT29
  - APT32
`,Ar=`---
title: PowerShell Download and Execution from Remote Source
id: 9e2c3f5a-8f88-4b77-bd29-2222bbbapsh2
status: experimental
description: Detects PowerShell commands that download and execute scripts or payloads directly from remote URLs or network shares.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1086/
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection_image:
    Image|endswith: '\\powershell.exe'
  selection_remote:
    CommandLine|contains:
      - 'Invoke-WebRequest'
      - 'Start-BitsTransfer'
      - 'DownloadString'
      - 'DownloadFile'
      - 'Net.WebClient'
      - 'IEX'
  selection_protocol:
    CommandLine|contains:
      - 'http://'
      - 'https://'
      - '\\\\\\\\'
  condition: selection_image and selection_remote and selection_protocol
fields:
  - CommandLine
  - ParentCommandLine
  - Image
  - User
  - ParentImage
falsepositives:
  - Legitimate update scripts or cloud-based administration tasks
level: critical
tags:
  - attack.T1086
  - execution
  - windows
  - sysmon
  - powershell
  - cloud
  - CobaltStrike
  - FIN7
`,Lr=`---
title: Cryptographic Native API Usage
id: b1c2d3e4-f5g6-7890-abcd-555555555555
status: experimental
description: Detects suspicious cryptographic operations via native APIs
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'CryptAcquireContext'
      - 'CryptCreateHash'
      - 'CryptHashData'
      - 'CryptGetHashParam'
      - 'CryptEncrypt'
      - 'CryptDecrypt'
      - 'CryptGenKey'
      - 'CryptImportKey'
      - 'CryptExportKey'
      - 'BCryptOpenAlgorithmProvider'
      - 'BCryptCreateHash'
      - 'BCryptHashData'
      - 'BCryptEncrypt'
      - 'BCryptDecrypt'
      - 'BCryptGenRandom'
  condition: selection
fields:
  - Image
  - CommandLine
  - ProcessId
  - User
falsepositives:
  - Encryption software
  - Security applications
  - Digital signature tools
level: medium
tags:
  - attack.execution
  - attack.t1106
  - sysmon
  - windows
`,Mr=`---
title: File System Native API Operations
id: b1c2d3e4-f5g6-7890-abcd-333333333333
status: experimental
description: Detects suspicious file system operations via native APIs
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'NtCreateFile'
      - 'NtOpenFile'
      - 'NtDeleteFile'
      - 'NtWriteFile'
      - 'NtReadFile'
      - 'NtQueryInformationFile'
      - 'NtSetInformationFile'
      - 'ZwCreateFile'
      - 'ZwOpenFile'
      - 'ZwDeleteFile'
      - 'CreateFileA'
      - 'CreateFileW'
      - 'DeleteFileA'
      - 'DeleteFileW'
      - 'WriteFile'
      - 'ReadFile'
  condition: selection
fields:
  - Image
  - CommandLine
  - ProcessId
  - User
falsepositives:
  - File management utilities
  - Backup software
  - System monitoring tools
level: medium
tags:
  - attack.execution
  - attack.t1106
  - sysmon
  - windows
`,Rr=`---
title: Managed code P/Invoke or runtime interop usage detected
id: 6e1a7c4d-9f5b-4g78-0h9i-3c4d5e6f7a8b
status: experimental
description: Detect managed (.NET) applications or scripts that declare P/Invoke signatures, use Runtime.InteropServices or Marshal methods to call native APIs (indicative of Native API usage).
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1106/
tags:
  - attack.t1106
  - tactic.execution
  - platform:windows
  - technique:T1106
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - "Add-Type"
      - "System.Runtime.InteropServices"
      - "PInvoke"
  selection_dotnet:
    EventID: 1
    Image|endswith: '\\dotnet.exe'
    CommandLine|contains:
      - "DllImport"
      - "Marshal."
  condition: selection or selection_dotnet
falsepositives:
  - Legitimate .NET interop libraries and internal tools using P/Invoke.
level: high
`,Nr=`---
title: Native API function names observed in scripts or commandlines
id: 3b8d4f1e-7c2a-4d45-9f6b-0e9a1c2b3d4f
status: experimental
description: >
  Detect references to common native NT API function names (Nt*/Zw* like NtQueryInformationProcess, ZwCreateThread) inside script blocks,
  commandlines, or process creation events indicating direct native API usage.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1106/
tags:
  - attack.t1106
  - tactic.execution
  - platform:windows
  - technique:T1106
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_proc:
    EventID: 1
    CommandLine|contains:
      - "NtQueryInformationProcess"
      - "ZwQueryInformationProcess"
      - "NtOpenProcess"
      - "ZwOpenProcess"
      - "NtCreateThread"
      - "ZwCreateThread"
  selection_ps:
    EventID: 4104
    ScriptBlockText|contains:
      - "NtQueryInformationProcess"
      - "ZwQueryInformationProcess"
      - "NtOpenProcess"
      - "ZwOpenProcess"
  condition: selection_proc or selection_ps
falsepositives:
  - Rare legitimate code samples or admin debugging scripts that embed native names.
level: high
`,Fr=`---
title: Network Native API Calls
id: b1c2d3e4-f5g6-7890-abcd-444444444444
status: experimental
description: Detects suspicious network operations via native APIs
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'WSAStartup'
      - 'WSASocket'
      - 'WSAConnect'
      - 'WSASend'
      - 'WSARecv'
      - 'socket'
      - 'connect'
      - 'send'
      - 'recv'
      - 'InternetOpen'
      - 'InternetConnect'
      - 'HttpOpenRequest'
      - 'HttpSendRequest'
      - 'WinHttpOpen'
      - 'WinHttpConnect'
      - 'WinHttpOpenRequest'
      - 'WinHttpSendRequest'
  condition: selection
fields:
  - Image
  - CommandLine
  - ProcessId
  - User
falsepositives:
  - Network applications
  - Web browsers
  - Download managers
level: medium
tags:
  - attack.execution
  - attack.t1106
  - sysmon
  - windows
`,qr=`---
title: PowerShell Add-Type and DllImport usage
id: 2a7c3d8e-5b4f-4c1a-9e2d-1f0e2d3c4b5a
status: experimental
description: Detect PowerShell using Add-Type / DllImport / System.Runtime.InteropServices to import native DLLs (ntdll/kernel32). This is commonly used to call native APIs from scripts.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1106/
tags:
  - attack.t1106
  - tactic.execution
  - platform:windows
  - technique:T1106
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection_addtype:
    EventID: 4104
    ScriptBlockText|contains:
      - "Add-Type"
      - "[DllImport"
      - "System.Runtime.InteropServices"
      - "DllImport("
      - "kernel32.dll"
      - "ntdll.dll"
  condition: selection_addtype
falsepositives:
  - Legitimate signed tooling or internal scripts that embed native interop for performance or functionality.
level: high
`,Or=`---
title: Process Manipulation Native API Calls
id: b1c2d3e4-f5g6-7890-abcd-111111111111
status: experimental
description: Detects native API calls for process manipulation and injection
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_injection:
    EventID: 1
    CommandLine|contains:
      - 'NtCreateProcess'
      - 'NtCreateProcessEx'
      - 'NtCreateUserProcess'
      - 'RtlCreateUserProcess'
      - 'ZwCreateProcess'
      - 'CreateRemoteProcess'
  selection_memory:
    EventID: 1
    CommandLine|contains:
      - 'NtAllocateVirtualMemory'
      - 'NtFreeVirtualMemory'
      - 'NtProtectVirtualMemory'
      - 'VirtualAllocEx'
      - 'VirtualProtectEx'
      - 'NtMapViewOfSection'
  selection_threads:
    EventID: 1
    CommandLine|contains:
      - 'NtCreateThreadEx'
      - 'RtlCreateUserThread'
      - 'CreateRemoteThreadEx'
      - 'NtQueueApcThread'
      - 'NtAlertResumeThread'
  condition: selection_injection or selection_memory or selection_threads
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - Legitimate debugging tools
  - Security software
  - System utilities
level: medium
tags:
  - attack.execution
  - attack.t1106
  - sysmon
  - windows
`,Wr=`---
title: Registry Native API Access
id: b1c2d3e4-f5g6-7890-abcd-222222222222
status: experimental
description: Detects suspicious registry access via native APIs
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'NtCreateKey'
      - 'NtOpenKey'
      - 'NtDeleteKey'
      - 'NtSetValueKey'
      - 'NtQueryValueKey'
      - 'NtEnumerateKey'
      - 'ZwCreateKey'
      - 'ZwOpenKey'
      - 'ZwDeleteKey'
      - 'RegCreateKeyEx'
      - 'RegOpenKeyEx'
      - 'RegDeleteKey'
      - 'RegSetValueEx'
      - 'RegQueryValueEx'
  condition: selection
fields:
  - Image
  - CommandLine
  - ProcessId
  - User
falsepositives:
  - System administration tools
  - Software installation
  - Registry monitoring tools
level: medium
tags:
  - attack.execution
  - attack.t1106
  - sysmon
  - windows
`,jr=`---
title: Suspicious Native API Function Calls
id: b2c3d4e5-f6g7-8901-2345-678901bcdefg
status: experimental
description: Detects potentially malicious native API function calls often used by malware
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_process:
    EventID: 1
    CommandLine|contains:
      - 'NtCreateSection'
      - 'NtMapViewOfSection'
      - 'NtUnmapViewOfSection'
      - 'NtAllocateVirtualMemory'
      - 'NtProtectVirtualMemory'
      - 'NtWriteVirtualMemory'
      - 'NtReadVirtualMemory'
      - 'NtCreateThreadEx'
      - 'NtResumeThread'
      - 'NtSuspendThread'
      - 'NtTerminateProcess'
      - 'NtOpenProcess'
      - 'NtQueryInformationProcess'
      - 'LdrLoadDll'
      - 'RtlCreateUserThread'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - '[DllImport("ntdll")]'
      - 'VirtualAlloc'
      - 'VirtualProtect'
      - 'CreateRemoteThread'
      - 'WriteProcessMemory'
      - 'ReadProcessMemory'
      - 'OpenProcess'
      - 'GetProcAddress'
      - 'LoadLibrary'
  condition: selection_process or selection_powershell
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - Legitimate system utilities
  - Development tools
  - Security software
level: medium
tags:
  - attack.execution
  - attack.t1106
  - sysmon
  - windows
`,$r=`---
title: Rundll32 Loading Remote or Non-System DLLs
id: 9c2a7a3e-2b11-46c7-8123-bbbb4444cccc
status: experimental
description: Detects rundll32.exe loading DLLs from non-standard directories, network shares, or remote URLs, which may indicate lateral movement or execution of malicious code.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1218/011/
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith: '\\rundll32.exe'
    CommandLine|contains:
      - '\\\\\\\\'
      - 'http://'
      - 'https://'
      - 'C:\\Users\\'
  condition: selection
fields:
  - CommandLine
  - ParentCommandLine
  - ImageLoaded
  - User
falsepositives:
  - Legitimate DLLs loaded from shared drives in enterprise environments
level: critical
tags:
  - attack.T1218
  - attack.T1218.011
  - execution
  - windows
  - sysmon
  - lolbin
  - APT29
  - Lazarus
`,Ur=`---
title: Suspicious Rundll32 Execution with Unusual Parameters
id: 5e89e2fa-21b3-4f09-9011-aaaa3333bbbb
status: stable
description: Detects potentially malicious use of rundll32.exe with uncommon parameters or DLL paths that may indicate proxy execution of code.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1218/011/
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith: '\\rundll32.exe'
  filter_known:
    CommandLine|contains:
      - 'shell32.dll,Control_RunDLL'
      - 'desk.cpl'
      - 'appwiz.cpl'
  condition: selection and not filter_known
fields:
  - CommandLine
  - ParentImage
  - Image
  - User
falsepositives:
  - Legitimate control panel actions
  - Software invoking valid DLLs
level: high
tags:
  - attack.T1218
  - attack.T1218.011
  - execution
  - windows
  - sysmon
  - living-off-the-land
  - APT41
  - FIN7
`,zr=`---
title: Utility Abuse (Regsvr32, Rundll32, etc.)
id: 7bd3a9ce-4f1e-4b5c-bd3e-1234567890ab
status: experimental
description: "Detects the execution of legitimate Windows utilities (e.g., regsvr32.exe, rundll32.exe) that may be abused to execute arbitrary code, load malicious DLLs, or bypass security controls."
references:
  - https://attack.mitre.org/techniques/T1218/011/  # Reference for Regsvr32 abuse
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.execution
  - attack.t1218.011
logsource:
  product: windows
  category: process_creation
detection:
  regsvr32:
    Image|endswith: "regsvr32.exe"
  rundll32:
    Image|endswith: "rundll32.exe"
  condition: regsvr32 OR rundll32
falsepositives:
  - Legitimate use of regsvr32 or rundll32 by system processes, software installers, and administrative tools.
level: medium
`,Br=`title: CPUID-Based Virtual Machine Detection Evasion
id: a3f8b2c1-e4d7-4a9b-8c6f-1e5a2b3d4c5f
status: experimental
description: Detects attempts to bypass virtual machine detection using CPUID instruction manipulation and timing analysis
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1497/001/
  - https://evasions.checkpoint.com/techniques/generic.html
logsource:
  product: windows
  service: sysmon
detection:
  selection_cpuid_check:
    EventID: 1
    Image|endswith:
      - '\\rundll32.exe'
      - '\\regsvr32.exe'
      - '\\powershell.exe'
      - '\\cmd.exe'
    CommandLine|contains:
      - 'cpuid'
      - 'rdtsc'
      - 'cpu_vendor'
      - 'hypervisor_present'
  selection_timing_attack:
    EventID: 1
    CommandLine|contains|all:
      - 'timer'
      - 'performance'
      - 'benchmark'
    CommandLine|contains:
      - 'QueryPerformanceCounter'
      - 'GetTickCount'
      - 'timeGetTime'
      - 'clock_gettime'
  selection_vm_artifacts:
    EventID: 1
    CommandLine|contains:
      - 'vmware'
      - 'virtualbox'
      - 'vbox'
      - 'qemu'
      - 'xen'
      - 'hyper-v'
      - 'parallels'
  selection_registry_vm_check:
    EventID: 13
    TargetObject|contains:
      - '\\HARDWARE\\Description\\System\\BIOS'
      - '\\HARDWARE\\Description\\System\\SystemBiosVersion'
      - '\\SYSTEM\\CurrentControlSet\\Services\\Disk\\Enum'
      - '\\SYSTEM\\ControlSet001\\Services\\Disk\\Enum'
  selection_process_hollowing:
    EventID: 10
    GrantedAccess:
      - '0x1F0FFF'
      - '0x1FFFFF'
      - '0x143A'
      - '0x1410'
    CallTrace|contains:
      - 'KERNELBASE.dll+CreateRemoteThread'
      - 'ntdll.dll+NtCreateThreadEx'
      - 'KERNEL32.dll+WriteProcessMemory'
  condition: 1 of selection_*
falsepositives:
  - Legitimate system performance monitoring tools
  - Hardware inventory software
  - Virtualization management tools
level: high
tags:
  - attack.defense_evasion
  - attack.t1497
  - attack.t1497.001
  - sysmon
  - windows
  - vm_evasion
`,Hr=`title: Hardware Fingerprinting and System Artifact Evasion
id: e7b4c5d8-f2a9-4e1c-8d6b-2a3f5e1c4b7d
status: experimental
description: Detects attempts to evade detection by manipulating or checking hardware fingerprints and system artifacts
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1497/001/
  - https://www.sans.org/white-papers/37821/
logsource:
  product: windows
  service: sysmon
detection:
  selection_bios_checks:
    EventID: 13  # Registry value set
    TargetObject|contains:
      - '\\HARDWARE\\DESCRIPTION\\System\\BIOS'
      - '\\HARDWARE\\DESCRIPTION\\System\\SystemBiosVersion'
      - '\\HARDWARE\\DESCRIPTION\\System\\SystemManufacturer'
      - '\\HARDWARE\\DESCRIPTION\\System\\SystemProductName'
      - '\\HARDWARE\\DESCRIPTION\\System\\SystemFamily'
  selection_cpu_info:
    EventID: 13
    TargetObject|contains:
      - '\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor'
      - '\\HARDWARE\\DESCRIPTION\\System\\ProcessorNameString'
      - '\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment\\PROCESSOR_'
  selection_disk_enumeration:
    EventID: 13
    TargetObject|contains:
      - '\\SYSTEM\\CurrentControlSet\\Services\\Disk\\Enum'
      - '\\SYSTEM\\ControlSet001\\Services\\Disk\\Enum'
      - '\\HARDWARE\\DEVICEMAP\\Scsi'
  selection_mac_address:
    EventID: 1
    CommandLine|contains:
      - 'getmac'
      - 'ipconfig /all'
      - 'wmic nic'
      - 'Get-NetAdapter'
      - 'NetworkInterface'
  selection_system_info:
    EventID: 1
    CommandLine|contains:
      - 'systeminfo'
      - 'wmic computersystem'
      - 'wmic bios'
      - 'Get-ComputerInfo'
      - 'Get-WmiObject Win32_'
  selection_vm_services:
    EventID: 1
    CommandLine|contains:
      - 'sc query'
      - 'Get-Service'
      - 'tasklist'
      - 'vmware'
      - 'vbox'
      - 'virtualbox'
      - 'qemu'
      - 'xen'
      - 'parallels'
  selection_memory_info:
    EventID: 1
    CommandLine|contains:
      - 'GlobalMemoryStatusEx'
      - 'GetPhysicallyInstalledSystemMemory'
      - 'wmic memorychip'
      - 'Get-WmiObject Win32_PhysicalMemory'
  selection_gpu_detection:
    EventID: 1
    CommandLine|contains:
      - 'wmic path win32_VideoController'
      - 'Get-WmiObject Win32_VideoController'
      - 'dxdiag'
      - 'DirectX'
  selection_hypervisor_detection:
    EventID: 1
    CommandLine|contains|all:
      - 'cpuid'
      - 'leaf'
    CommandLine|contains:
      - '0x40000000'
      - '0x40000001'
      - 'hypervisor'
      - 'vm_vendor'
  condition: 2 of selection_*
falsepositives:
  - System inventory and asset management tools
  - Hardware diagnostic utilities
  - Legitimate system administration scripts
  - Performance monitoring applications
level: medium
tags:
  - attack.defense_evasion
  - attack.t1497
  - attack.t1497.001
  - hardware_fingerprinting
  - vm_detection
  - sysmon
  - windows
`,Gr=`title: Time-Based Anti-Analysis and Sandbox Evasion
id: d6a3b9c4-e1f8-4d2b-9c7a-3e5f1b8d4c6a
status: experimental
description: Detects malware using timing-based techniques to evade automated analysis and sandbox environments
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1497/003/
  - https://www.fireeye.com/blog/threat-research/2017/02/hiding_in_plain_sigh.html
logsource:
  product: windows
  service: sysmon
detection:
  selection_timing_functions:
    EventID: 1
    CommandLine|contains:
      - 'QueryPerformanceCounter'
      - 'GetTickCount'
      - 'timeGetTime'
      - 'GetSystemTimeAsFileTime'
      - 'NtQuerySystemTime'
      - 'clock_gettime'
      - 'gettimeofday'
  selection_sleep_delays:
    EventID: 1
    CommandLine|contains:
      - 'Sleep('
      - 'sleep '
      - 'usleep'
      - 'nanosleep'
      - 'select('
      - 'WaitForSingleObject'
    CommandLine|re: '.*[sS]leep\\s*\\(\\s*[1-9][0-9]{4,}\\s*\\)'  # Sleep with 5+ digit numbers
  selection_date_checks:
    EventID: 1
    CommandLine|contains|all:
      - 'date'
      - 'time'
    CommandLine|contains:
      - 'GetSystemTime'
      - 'GetLocalTime'
      - 'SystemTimeToFileTime'
      - 'GetDateFormat'
      - 'GetTimeFormat'
  selection_execution_delay:
    EventID: 1
    CommandLine|contains:
      - 'ping 127.0.0.1'
      - 'ping localhost'
      - 'timeout'
      - 'waitfor'
    CommandLine|re: '.*ping\\s+127\\.0\\.0\\.1\\s+-n\\s+[1-9][0-9]+'  # ping with high count
  selection_vm_specific_timing:
    EventID: 1
    CommandLine|contains|all:
      - 'rdtsc'
      - 'cpu'
    CommandLine|contains:
      - 'frequency'
      - 'speed'
      - 'performance'
      - 'benchmark'
  selection_user_interaction:
    EventID: 1
    CommandLine|contains:
      - 'GetCursorPos'
      - 'GetAsyncKeyState'
      - 'GetForegroundWindow'
      - 'FindWindow'
      - 'GetWindowText'
      - 'mouse_event'
      - 'keybd_event'
  selection_file_timestamps:
    EventID:
      - 11
      - 2  # File creation time change
    TargetFilename|endswith: '.tmp'
  condition: 2 of selection_*
falsepositives:
  - Legitimate applications with timing requirements
  - Performance benchmarking tools
  - System monitoring utilities
  - Games and multimedia applications
level: medium
tags:
  - attack.defense_evasion
  - attack.t1497
  - attack.t1497.003
  - timing_attack
  - sandbox_evasion
  - sysmon
  - windows
`,Vr=`title: Memory Artifacts Anti-Forensics and Evidence Destruction
id: b5d3c7f1-e8a4-4f2b-9c6d-1a5e3b7c9f2a
status: experimental
description: Detects attempts to destroy or obfuscate memory artifacts to evade forensic analysis and incident response
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1562/009/
  - https://www.volexity.com/blog/2021/12/09/one-more-on-the-roof/
logsource:
  product: windows
  service: sysmon
detection:
  selection_memory_dump:
    EventID: 1
    CommandLine|contains:
      - 'procdump'
      - 'dumpit'
      - 'winpmem'
      - 'volatility'
      - 'rekall'
      - 'comae'
  selection_memory_manipulation:
    EventID: 10  # Process access
    GrantedAccess:
      - '0x1F0FFF'  # PROCESS_ALL_ACCESS
      - '0x1FFFFF'  # PROCESS_ALL_ACCESS (extended)
      - '0x0010'    # PROCESS_VM_READ
      - '0x0020'    # PROCESS_VM_WRITE
    CallTrace|contains:
      - 'VirtualAllocEx'
      - 'VirtualFreeEx'
      - 'WriteProcessMemory'
      - 'ReadProcessMemory'
      - 'VirtualProtectEx'
  selection_heap_spray:
    EventID: 1
    CommandLine|contains:
      - 'HeapAlloc'
      - 'HeapFree'
      - 'RtlAllocateHeap'
      - 'RtlFreeHeap'
      - 'LocalAlloc'
      - 'GlobalAlloc'
  selection_code_cave:
    EventID: 7  # Image loaded
    ImageLoaded|endswith:
      - '\\ntdll.dll'
      - '\\kernel32.dll'
      - '\\kernelbase.dll'
    Signed: 'false'
  selection_process_overwrite:
    EventID: 1
    ParentImage|endswith:
      - '\\explorer.exe'
      - '\\winlogon.exe'
      - '\\services.exe'
    Image|endswith:
      - '\\svchost.exe'
      - '\\rundll32.exe'
      - '\\dllhost.exe'
    CommandLine: ''  # Empty command line may indicate hollowing
  selection_memory_clearing:
    EventID: 1
    CommandLine|contains:
      - 'RtlZeroMemory'
      - 'SecureZeroMemory'
      - 'memset'
      - 'ZeroMemory'
      - 'RtlSecureZeroMemory'
  selection_debugger_evasion:
    EventID: 1
    CommandLine|contains:
      - 'IsDebuggerPresent'
      - 'CheckRemoteDebuggerPresent'
      - 'NtQueryInformationProcess'
      - 'OutputDebugString'
      - 'FindWindow'
      - 'ollydbg'
      - 'windbg'
      - 'x64dbg'
      - 'immunity'
      - 'ida'
  selection_vm_memory_detection:
    EventID: 1
    CommandLine|contains:
      - 'GlobalMemoryStatusEx'
      - 'GetPhysicallyInstalledSystemMemory'
      - 'GetSystemInfo'
    CommandLine|contains|all:
      - 'memory'
      - 'size'
  selection_hook_removal:
    EventID: 1
    CommandLine|contains:
      - 'SetWindowsHookEx'
      - 'UnhookWindowsHookEx'
      - 'CallNextHookEx'
      - 'NtSetWindowsHookEx'
  condition: 2 of selection_*
falsepositives:
  - Legitimate memory analysis tools
  - Debugging and development activities
  - System performance monitoring
  - Antivirus memory scanning
level: high
tags:
  - attack.defense_evasion
  - attack.t1562
  - attack.t1562.009
  - memory_manipulation
  - anti_forensics
  - evidence_destruction
  - sysmon
  - windows
`,Kr=`title: Container Escape and Breakout Attempts
id: b4e9c3d2-f6a8-4b1c-9d7e-2f3a5c8b1e4f
status: experimental
description: Detects attempts to escape from containerized environments and break out to the host system
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1611/
  - https://kubernetes.io/docs/concepts/security/pod-security-standards/
logsource:
  product: linux
  service: auditd
detection:
  selection_privileged_container:
    type: 'SYSCALL'
    syscall:
      - 'mount'
      - 'umount'
      - 'pivot_root'
      - 'chroot'
      - 'unshare'
      - 'clone'
    success: 'yes'
  selection_proc_filesystem:
    type: 'PATH'
    name|contains:
      - '/proc/1/root'
      - '/proc/self/root'
      - '/proc/*/root'
      - '/host'
      - '/var/lib/docker'
      - '/var/run/docker.sock'
  selection_device_access:
    type: 'PATH'
    name|startswith:
      - '/dev/disk'
      - '/dev/sd'
      - '/dev/nvme'
      - '/dev/loop'
      - '/dev/dm-'
      - '/dev/mapper'
  selection_kernel_modules:
    type: 'SYSCALL'
    syscall:
      - 'init_module'
      - 'finit_module'
      - 'delete_module'
    success: 'yes'
  selection_namespace_escape:
    type: 'SYSCALL'
    syscall: 'setns'
    a0|contains:
      - '/proc/1/ns'
      - '/proc/self/ns'
    success: 'yes'
  selection_cgroup_manipulation:
    type: 'PATH'
    name|contains:
      - '/sys/fs/cgroup'
      - '/proc/cgroups'
      - '/proc/self/cgroup'
  selection_capabilities:
    type: 'SYSCALL'
    syscall: 'capset'
    success: 'yes'
  condition: 1 of selection_*
falsepositives:
  - Legitimate container orchestration operations
  - System administration tasks
  - Container runtime operations
level: critical
tags:
  - attack.privilege_escalation
  - attack.t1611
  - container_escape
  - linux
  - auditd
  - kubernetes
  - docker
`,Qr=`---
title: Beacon Object File (BOF) Reflective Loading Detection
id: f1a2b3c4-d5e6-7890-abcd-ef1234567890
status: experimental
description: >
  Detects patterns consistent with Beacon Object File (BOF) reflective loading used by Cobalt Strike.
  BOFs are position-independent code that executes in memory without touching disk.
references:
  - https://attack.mitre.org/techniques/T1620/
  - https://www.cobaltstrike.com/help-beacon-object-files
  - https://github.com/trustedsec/CS-Situational-Awareness-BOF
author: Defensive Rules Project
date: 2026/04/27
logsource:
  category: process_creation
  product: windows
detection:
  selection_apis:
    Image|endswith: '\\rundll32.exe'
    CommandLine|contains:
      - 'VirtualAlloc'
      - 'VirtualProtect'
      - 'CreateThread'
      - 'ReflectiveLoader'
  selection_injection:
    TargetImage|endswith:
      - '\\explorer.exe'
      - '\\svchost.exe'
      - '\\winlogon.exe'
    CallTrace|contains:
      - 'UNKNOWN'
      - 'Unbacked'
  selection_memory:
    EventID: 10
    GrantedAccess:
      - '0x1F0FFF'
      - '0x1FFFFF'
      - '0x143A'
    CallTrace|contains: 'UNKNOWN'
  condition: any of selection_*
falsepositives:
  - Legitimate software using similar memory manipulation techniques
  - Security tools performing memory analysis
level: high
tags:
  - attack.execution
  - attack.t1620
  - attack.t1055
  - sysmon
  - windows
  - cobalt_strike
  - bof
`,Yr=`title: Hypervisor Escape and VM Breakout Attempts
id: a9e2f5c8-b7d4-4c1f-9e6a-2b8d5f1c3e7b
status: experimental
description: Detects attempts to escape from virtual machine guest environments to compromise the hypervisor or host system
author: matthewiver@protonmail.com
date: 2026/04/27
references:
  - https://attack.mitre.org/techniques/T1620/
  - https://www.vmware.com/security/hardening-guides.html
logsource:
  product: windows
  service: sysmon
detection:
  selection_vmware_tools_abuse:
    EventID: 1
    Image|endswith:
      - '\\vmtoolsd.exe'
      - '\\vmwaretray.exe'
      - '\\vmwareuser.exe'
    CommandLine|contains:
      - '-cmd'
      - '-command'
      - '-script'
      - 'guestinfo'
  selection_vm_backdoor:
    EventID: 1
    CommandLine|contains:
      - 'VMware backdoor'
      - 'in al, 0x5658'
      - 'vmware_backdoor'
      - 'hypervisor_cpuid'
  selection_shared_folders:
    EventID: 11  # File create
    TargetFilename|startswith:
      - '\\\\vmware-host\\'
      - '\\\\vboxsrv\\'
      - '\\\\vboxsvr\\'
      - 'Z:\\'
      - 'E:\\'
    TargetFilename|endswith:
      - '.exe'
      - '.dll'
      - '.bat'
      - '.ps1'
      - '.vbs'
  selection_clipboard_access:
    EventID: 1
    CommandLine|contains:
      - 'GetClipboardData'
      - 'SetClipboardData'
      - 'OpenClipboard'
      - 'vmware-vmx'
  selection_vm_memory_access:
    EventID: 10  # Process access
    TargetImage|endswith:
      - '\\vmware-vmx.exe'
      - '\\VBoxHeadless.exe'
      - '\\qemu-system-x86_64.exe'
    GrantedAccess:
      - '0x1F0FFF'
      - '0x1FFFFF'
  selection_device_exploitation:
    EventID: 1
    CommandLine|contains:
      - 'CreateFile'
      - '\\\\\\\\.\\\\pipe\\\\'
      - '\\\\\\\\.\\\\mailslot\\\\'
      - '\\\\\\\\.\\\\vmci'
      - '\\\\\\\\.\\\\vmmouse'
  selection_dma_attack:
    EventID: 1
    CommandLine|contains:
      - 'physical memory'
      - 'DMA'
      - 'IOMMU'
      - 'PCI'
      - 'memory mapping'
  selection_vm_communication:
    EventID: 3  # Network connection
    DestinationIp:
      - '169.254.1.1'  # VMware host-guest communication
      - '10.0.2.2'     # VirtualBox host
      - '192.168.122.1'  # QEMU/KVM default
    DestinationPort:
      - 427    # Service Location Protocol
      - 902    # VMware vCenter
      - 903    # VMware console
  selection_hypercall:
    EventID: 1
    CommandLine|contains:
      - 'hypercall'
      - 'vmcall'
      - 'vmmcall'
      - 'syscall'
      - 'int 0x2e'
  condition: 2 of selection_*
falsepositives:
  - Legitimate VMware Tools operations
  - Virtual machine administration
  - Shared folder access
  - VM performance monitoring
level: critical
tags:
  - attack.escape_virtualization
  - attack.t1620
  - hypervisor_escape
  - vm_breakout
  - sysmon
  - windows
  - virtualization
`,Zr=`title: Command and Script Obfuscation Detection
id: c4a9d7e2-8f3b-4e1a-9c5d-6b8e7a3f4c2d
status: experimental
description: Detects various command and script obfuscation techniques used to evade detection by security tools and analysts
logsource:
  product: windows
  service: powershell-classic
detection:
  selection_powershell_obfuscation:
    EventID: 4104
    ScriptBlockText|contains:
      - 'iex('
      - 'invoke-expression'
      - '&('
      - '.('
      - 'ForEach-Object'
      - '%{'
  selection_base64_powershell:
    EventID: 4104
    ScriptBlockText|re:
      - '.*[a-zA-Z0-9+/]{50,}={0,2}.*'
      - '.*\\[System\\.Convert\\]::FromBase64String.*'
      - '.*\\[System\\.Text\\.Encoding\\]::.*\\.GetString.*'
  selection_char_substitution:
    EventID: 4104
    ScriptBlockText|re:
      - '.*\\[char\\]\\d+.*\\[char\\]\\d+.*\\[char\\]\\d+.*'
      - '.*\\[System\\.Char\\].*'
      - '.*-join\\s*\\(\\s*\\d+.*'
  selection_string_manipulation:
    EventID: 4104
    ScriptBlockText|contains:
      - '-replace'
      - '-split'
      - '-join'
      - 'substring('
      - '.reverse()'
      - 'tolower()'
      - 'toupper()'
  selection_format_operators:
    EventID: 4104
    ScriptBlockText|re:
      - '.*"{[0-9]+}".*-f.*'
      - '.*\\$\\w+\\s*=\\s*"{[0-9,]+}".*'
  selection_compression:
    EventID: 4104
    ScriptBlockText|contains:
      - 'System.IO.Compression.GzipStream'
      - 'System.IO.Compression.DeflateStream'
      - 'System.IO.MemoryStream'
      - 'FromBase64String'
  selection_cmd_obfuscation:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - '^&'
      - '""'
      - "'"
      - '^^^'
      - '%ComSpec%'
      - '%SystemRoot%'
      - '%windir%'
  selection_batch_obfuscation:
    EventID: 1
    CommandLine|re:
      - '.*set\\s+\\w+=[^&]*&.*'
      - '.*for\\s+/[lf]\\s+.*'
      - '.*if\\s+.*==.*'
  selection_wmi_obfuscation:
    EventID: 1
    CommandLine|contains:
      - 'wmic process call create'
      - 'wmic os get'
      - 'wmic computersystem get'
    CommandLine|re:
      - '.*"[^"]*\\^[^"]*".*'
  condition: selection_powershell_obfuscation or selection_base64_powershell or selection_char_substitution or selection_string_manipulation or select
               ion_format_operators or selection_compression or selection_cmd_obfuscation or selection_batch_obfuscation or selection_wmi_obfuscation
falsepositives:
  - Legitimate scripts using advanced PowerShell features
  - Administrative automation scripts
  - Software installation scripts
  - Development and testing activities
level: high
tags:
  - attack.defense_evasion
  - attack.t1027.010
  - attack.execution
  - attack.t1059.001
  - attack.t1059.003
  - powershell
  - cmd
  - windows
  - obfuscation
references:
  - https://attack.mitre.org/techniques/T1027/010/
  - https://www.fireeye.com/blog/threat-research/2017/06/obfuscation-in-the-wild.html
`,Jr=`title: Early Bird Process Injection Detection
id: b7c4e9f2-8d5a-4c3b-9e1f-7a2d5c8b4e9a
status: experimental
description: Detects Early Bird process injection technique where malicious code is injected into a process before its main thread begins execution, bypassing many security monitoring solutions
logsource:
  product: windows
  service: sysmon
detection:
  selection_process_create:
    EventID: 1
  selection_process_access:
    EventID: 10
    GrantedAccess:
      - '0x1F3FFF'  # PROCESS_ALL_ACCESS
      - '0x1FFFFF'  # PROCESS_ALL_ACCESS (alternative)
      - '0x143A'    # Common injection access
      - '0x1438'    # WriteProcessMemory + CreateRemoteThread
    CallTrace|contains:
      - 'ntdll.dll+NtQueueApcThread'
      - 'ntdll.dll+NtCreateThread'
      - 'kernel32.dll+WriteProcessMemory'
      - 'ntdll.dll+NtWriteVirtualMemory'
  selection_image_load:
    EventID: 7
    ImageLoaded|contains:
      - 'ntdll.dll'
    ProcessId: 'ProcessId'  # Same process being accessed
  selection_thread_create:
    EventID: 8
    StartModule|contains:
      - 'ntdll.dll'
    NewThreadId: '*'
  time_correlation:
    # Events should occur within 5 seconds of process creation
    - EventID: 1
    - EventID: 10
    - EventID: 7
    - EventID: 8
  suspicious_targets:
    TargetImage|endswith:
      - '\\svchost.exe'
      - '\\explorer.exe'
      - '\\winlogon.exe'
      - '\\lsass.exe'
      - '\\dwm.exe'
      - '\\csrss.exe'
  condition: selection_process_create and selection_process_access and selection_thread_create and suspicious_targets
falsepositives:
  - Legitimate debugging tools
  - Security software performing process analysis
  - System administration tools
level: critical
tags:
  - attack.defense_evasion
  - attack.t1055.004
  - attack.privilege_escalation
  - attack.t1055
  - sysmon
  - windows
  - process_injection
references:
  - https://attack.mitre.org/techniques/T1055/004/
  - https://blog.malwarebytes.com/threat-analysis/2019/09/early-bird-injection/
`,Xr=`title: Process Doppelganging Attack Detection
id: c9e2f4a8-7b5d-4a1c-8e9f-3c7a6b2d4f8e
status: experimental
description: Detects Process Doppelganging technique where attackers use NTFS transactions to replace legitimate process images with malicious code during process creation
logsource:
  product: windows
  service: sysmon
detection:
  selection_process_create:
    EventID: 1
  selection_file_create:
    EventID: 11
    TargetFilename|contains: '\\*.tmp'
  selection_file_transaction:
    EventID: 15
    Hash|contains: '*'
  selection_process_access:
    EventID: 10
    GrantedAccess:
      - '0x1F3FFF'
      - '0x1FFFFF'
    CallTrace|contains:
      - 'ntdll.dll+NtCreateTransaction'
      - 'ntdll.dll+NtCreateSection'
      - 'ntdll.dll+NtCreateProcessEx'
      - 'ntdll.dll+RtlSetCurrentTransaction'
  suspicious_process_characteristics:
    - ParentImage|endswith:
        - '\\explorer.exe'
        - '\\winlogon.exe'
    - Image|endswith:
        - '\\svchost.exe'
        - '\\lsass.exe'
        - '\\csrss.exe'
        - '\\winlogon.exe'
        - '\\dwm.exe'
    - IntegrityLevel: 'High'
  selection_registry_transaction:
    EventID: 13
    TargetObject|contains:
      - 'HKLM\\SYSTEM\\CurrentControlSet\\Services'
      - 'HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options'
  network_callback:
    EventID: 3
    Initiated: 'true'
    Protocol: 'tcp'
  condition: (selection_process_create and selection_file_create and selection_file_transaction) or
             (selection_process_access and suspicious_process_characteristics) or
             (selection_registry_transaction and network_callback)
falsepositives:
  - Legitimate software using NTFS transactions
  - System recovery operations
  - Backup and restore utilities
level: critical
tags:
  - attack.defense_evasion
  - attack.t1055.013
  - attack.execution
  - attack.t1055
  - sysmon
  - windows
  - process_doppelganging
references:
  - https://attack.mitre.org/techniques/T1055/013/
  - https://www.blackhat.com/docs/eu-17/materials/eu-17-Liberman-Lost-In-Transaction-Process-Doppelganging.pdf
`,el=`---
title: BOF Process Injection and Memory Manipulation
id: b1c2d3e4-f5a6-7890-cdef-345678901234
status: experimental
description: >
  Detects process injection techniques commonly used by Beacon Object Files (BOFs).
  BOFs often inject into legitimate processes to evade detection and maintain persistence.
references:
  - https://attack.mitre.org/techniques/T1055/
  - https://www.cobaltstrike.com/help-process-injection
author: Defensive Rules Project
date: 2026/04/27
logsource:
  category: process_access
  product: windows
  service: sysmon
detection:
  selection_injection:
    EventID: 10
    TargetImage|endswith:
      - '\\explorer.exe'
      - '\\svchost.exe'
      - '\\winlogon.exe'
      - '\\lsass.exe'
    GrantedAccess:
      - '0x1F0FFF'
      - '0x1FFFFF'
      - '0x143A'
      - '0x1410'
      - '0x1038'
  selection_memory:
    EventID: 7
    ImageLoaded|contains: 'UNKNOWN'
    Signed: 'false'
  selection_thread:
    EventID: 8
    TargetImage|endswith:
      - '\\explorer.exe'
      - '\\svchost.exe'
      - '\\winlogon.exe'
    StartModule: 'null'
  selection_hollowing:
    EventID: 1
    ParentImage|endswith: '\\rundll32.exe'
    CommandLine|contains:
      - 'VirtualAlloc'
      - 'WriteProcessMemory'
      - 'CreateRemoteThread'
  filter_legit:
    Image|startswith:
      - 'C:\\Program Files\\'
      - 'C:\\Program Files (x86)\\'
      - 'C:\\Windows\\System32\\'
    Signed: 'true'
  condition: (any of selection_*) and not filter_legit
falsepositives:
  - Legitimate security software
  - System administration tools
  - Debugging applications
level: high
tags:
  - attack.defense_evasion
  - attack.t1055
  - attack.t1055.001
  - attack.t1055.002
  - sysmon
  - windows
  - cobalt_strike
  - bof
`,nl=`---
title: CSRSS Spawned by Suspicious Parent Process
id: d4e5f6a7-b8c9-0123-def4-456789012345
status: experimental
description: Detects csrss.exe spawned by process other than smss.exe which indicates process masquerading or injection
references:
    - https://attack.mitre.org/techniques/T1055/
    - https://attack.mitre.org/techniques/T1036/
author: Defensive Rules Project
date: 2026/04/27
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith: '\\csrss.exe'
    filter:
        ParentImage|endswith: '\\smss.exe'
    condition: selection and not filter
falsepositives:
    - None known - CSRSS should always be spawned by smss.exe
level: critical
tags:
    - attack.defense_evasion
    - attack.t1055
    - attack.t1036
    - sysmon
    - windows
`,tl=`---
title: Explorer Spawned by Suspicious Parent Process
id: b2c3d4e5-f6a7-8901-bcde-f23456789012
status: experimental
description: Detects explorer.exe spawned by process other than winlogon.exe or userinit.exe which may indicate process injection
references:
    - https://attack.mitre.org/techniques/T1055/
    - https://docs.microsoft.com/en-us/windows/win32/services/interactive-services
author: Defensive Rules Project
date: 2026/04/27
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith: '\\explorer.exe'
    filter:
        ParentImage|endswith:
            - '\\winlogon.exe'
            - '\\userinit.exe'
    condition: selection and not filter
falsepositives:
    - Legitimate spawning by other system processes (rare)
level: high
tags:
    - attack.defense_evasion
    - attack.t1055
    - sysmon
    - windows
`,il=`---
title: LSASS Spawned by Suspicious Parent Process
id: c3d4e5f6-a7b8-9012-cdef-345678901234
status: experimental
description: Detects lsass.exe spawned by process other than wininit.exe which may indicate process hollowing or masquerading
references:
    - https://attack.mitre.org/techniques/T1055/
    - https://attack.mitre.org/techniques/T1036/
author: Defensive Rules Project
date: 2026/04/27
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith: '\\lsass.exe'
    filter:
        ParentImage|endswith: '\\wininit.exe'
    condition: selection and not filter
falsepositives:
    - None known - LSASS should always be spawned by wininit.exe
level: critical
tags:
    - attack.defense_evasion
    - attack.t1055
    - attack.t1036
    - sysmon
    - windows
`,sl=`---
title: Spoolsv Spawned by Suspicious Parent Process
id: e5f6a7b8-c9d0-1234-efa5-567890123456
status: experimental
description: Detects spoolsv.exe spawned by process other than services.exe which may indicate process injection or masquerading
references:
    - https://attack.mitre.org/techniques/T1055/
    - https://attack.mitre.org/techniques/T1036/
author: Defensive Rules Project
date: 2026/04/27
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith: '\\spoolsv.exe'
    filter:
        ParentImage|endswith: '\\services.exe'
    condition: selection and not filter
falsepositives:
    - Unknown legitimate processes spawning spoolsv (rare)
level: high
tags:
    - attack.defense_evasion
    - attack.t1055
    - attack.t1036
    - sysmon
    - windows
`,ol=`---
title: Svchost Spawned by Suspicious Parent Process
id: a1b2c3d4-e5f6-7890-abcd-ef1234567890
status: experimental
description: Detects svchost.exe spawned by process other than services.exe which may indicate process hollowing or injection
references:
    - https://attack.mitre.org/techniques/T1055/
    - https://www.microsoft.com/en-us/security/blog/2021/01/21/deep-dive-into-the-solorigate-second-stage-activation-from-sunburst-to-teardrop-and-raindrop/
author: Defensive Rules Project
date: 2026/04/27
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith: '\\svchost.exe'
    filter:
        ParentImage|endswith: '\\services.exe'
    condition: selection and not filter
falsepositives:
    - Unknown legitimate processes spawning svchost (rare)
level: high
tags:
    - attack.defense_evasion
    - attack.t1055
    - sysmon
    - windows
`,al=`title: Supply Chain Compromise Indicators Detection
id: b8a4f6c2-7d9e-4b3a-8f1c-5e7a9b2d4c6f
status: experimental
description: Detects indicators of supply chain compromises including suspicious software updates, package managers, and trusted binary modifications
logsource:
  product: windows
  service: sysmon
detection:
  selection_suspicious_updates:
    EventID: 1
    ParentImage|endswith:
      - '\\Windows\\System32\\wuauclt.exe'
      - '\\Windows\\System32\\svchost.exe'
    Image|contains:
      - 'update'
      - 'installer'
      - 'setup'
    CommandLine|contains:
      - 'http://'
      - 'https://'
  selection_package_managers:
    EventID: 1
    Image|endswith:
      - '\\npm.exe'
      - '\\pip.exe'
      - '\\gem.exe'
      - '\\nuget.exe'
      - '\\yarn.exe'
      - '\\composer.exe'
      - '\\mvn.exe'
      - '\\gradle.exe'
    CommandLine|contains:
      - 'install'
      - 'update'
      - 'upgrade'
  selection_trusted_binary_modification:
    EventID: 11
    TargetFilename|endswith:
      - '\\Windows\\System32\\*.exe'
      - '\\Windows\\SysWOW64\\*.exe'
      - '\\Program Files\\*.exe'
      - '\\Program Files (x86)\\*.exe'
  selection_certificate_anomaly:
    EventID: 7
    Signed: 'true'
    Signature|contains:
      - 'CN=Microsoft'
      - 'CN=Adobe'
      - 'CN=Oracle'
      - 'CN=Apple'
    SignatureStatus: 'Valid'
  selection_network_suspicious:
    EventID: 3
    Protocol: 'tcp'
    DestinationPort:
      - 80
      - 443
      - 8080
    Image|endswith:
      - '\\svchost.exe'
      - '\\explorer.exe'
      - '\\winlogon.exe'
  selection_registry_persistence:
    EventID: 13
    TargetObject|contains:
      - 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run'
      - 'HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Run'
      - 'HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run'
      - 'HKLM\\SYSTEM\\CurrentControlSet\\Services'
  selection_file_hash_mismatch:
    EventID: 15
    Hash|re: 'MD5=[A-F0-9]{32}'
    TargetFilename|endswith:
      - '\\System32\\*.exe'
      - '\\System32\\*.dll'
      - '\\SysWOW64\\*.exe'
      - '\\SysWOW64\\*.dll'
  selection_process_creation_trusted:
    EventID: 1
    Image|endswith:
      - '\\notepad.exe'
      - '\\calc.exe'
      - '\\mspaint.exe'
      - '\\cmd.exe'
      - '\\powershell.exe'
    ParentImage|endswith:
      - '\\explorer.exe'
      - '\\winlogon.exe'
    CommandLine|contains:
      - 'http'
      - 'download'
      - 'curl'
      - 'wget'
      - 'invoke-webrequest'
  selection_dll_sideloading:
    EventID: 7
    ImageLoaded|re: '.*\\\\[a-zA-Z0-9_-]+\\.dll$'
    Signed: 'false'
    ProcessId: 'ProcessId'
  condition: selection_suspicious_updates or (selection_package_managers and selection_network_suspicious) or
             (selection_trusted_binary_modification and selection_file_hash_mismatch) or
             (selection_certificate_anomaly and selection_registry_persistence) or
             (selection_process_creation_trusted and selection_dll_sideloading)
falsepositives:
  - Legitimate software updates and installations
  - Normal package manager operations
  - Authorized system maintenance
  - Development environment activities
level: high
tags:
  - attack.initial_access
  - attack.t1195.002
  - attack.defense_evasion
  - attack.t1027
  - attack.persistence
  - attack.t1547
  - sysmon
  - windows
  - supply_chain
references:
  - https://attack.mitre.org/techniques/T1195/002/
  - https://www.crowdstrike.com/blog/supply-chain-strategy-release/
`,cl=`title: Living-off-the-Land Binary MSHTA Suspicious Execution
id: e7f5a9c3-6d2b-4a8e-9f1c-7b5d8a3e6f2a
status: experimental
description: Detects suspicious use of mshta.exe to execute JavaScript, VBScript, or download and execute remote content for defense evasion
logsource:
  product: windows
  service: sysmon
detection:
  selection_process:
    EventID: 1
    Image|endswith: '\\mshta.exe'
  selection_suspicious_args:
    CommandLine|contains:
      - 'javascript:'
      - 'vbscript:'
      - 'http://'
      - 'https://'
      - 'ftp://'
      - '.hta'
      - 'about:blank'
      - 'data:text/html'
  selection_encoded_content:
    CommandLine|contains:
      - 'FromBase64String'
      - 'MemoryStream'
      - 'GZipStream'
      - 'DeflateStream'
      - 'eval('
      - 'unescape('
  selection_network_download:
    CommandLine|contains|all:
      - 'mshta'
      - 'http'
  selection_parent_suspicious:
    ParentImage|endswith:
      - '\\cmd.exe'
      - '\\powershell.exe'
      - '\\wscript.exe'
      - '\\cscript.exe'
      - '\\winword.exe'
      - '\\excel.exe'
      - '\\powerpnt.exe'
      - '\\outlook.exe'
  selection_network_connection:
    EventID: 3
    Image|endswith: '\\mshta.exe'
    Protocol: 'tcp'
    Initiated: 'true'
  filter_legitimate:
    CommandLine|contains:
      - 'res://ieframe.dll'
      - 'res://mshtml.dll'
  condition: selection_process and (selection_suspicious_args or selection_encoded_content or
             selection_network_download or selection_parent_suspicious or
             selection_network_connection) and not filter_legitimate
falsepositives:
  - Legitimate HTML applications
  - Corporate intranet applications
  - Administrative tools using HTA files
level: high
tags:
  - attack.defense_evasion
  - attack.t1218.005
  - attack.execution
  - attack.t1059
  - sysmon
  - windows
  - lolbins
  - mshta
references:
  - https://attack.mitre.org/techniques/T1218/005/
  - https://lolbas-project.github.io/lolbas/Binaries/Mshta/
`,rl=`title: Living-off-the-Land Binary Rundll32 Suspicious Execution
id: a8f2b8dc-4e7f-4b8a-9c3d-2e1f5a8b9c7d
status: experimental
description: Detects suspicious use of rundll32.exe to execute potentially malicious code, commonly used for defense evasion by abusing legitimate Windows binaries
logsource:
  product: windows
  service: sysmon
detection:
  selection_process:
    EventID: 1
    Image|endswith: '\\rundll32.exe'
  selection_suspicious:
    - CommandLine|contains|all:
        - 'javascript:'
        - 'eval('
    - CommandLine|contains:
        - 'vbscript:'
        - 'data:text/html'
        - '.dat,'
        - '.tmp,'
        - 'shell32.dll,Control_RunDLL'
        - 'advpack.dll,LaunchINFSection'
        - 'ieadvpack.dll,LaunchINFSection'
        - 'setupapi.dll,InstallHinfSection'
        - 'syssetup.dll,SetupInfObjectInstallAction'
        - 'zipfldr.dll,RouteTheCall'
        - 'url.dll,OpenURL'
        - 'url.dll,FileProtocolHandler'
    - CommandLine|re: '.*rundll32\\.exe.*\\w+\\.\\w+,#\\d+'
  selection_network_dll:
    CommandLine|contains|all:
      - 'rundll32'
      - 'http'
  filter_legitimate:
    CommandLine|contains:
      - 'shell32.dll,SHCreateLocalServerRunDll'
      - 'shell32.dll,OpenAs_RunDLL'
      - 'shell32.dll,ShellExec_RunDLL'
  condition: selection_process and (selection_suspicious or selection_network_dll) and not filter_legitimate
falsepositives:
  - Legitimate software using rundll32 for specific functions
  - Administrative tools and scripts
level: high
tags:
  - attack.defense_evasion
  - attack.t1218.011
  - attack.execution
  - attack.t1059
  - sysmon
  - windows
  - lolbins
references:
  - https://attack.mitre.org/techniques/T1218/011/
  - https://lolbas-project.github.io/lolbas/Binaries/Rundll32/
`,ll=`title: Certificate Pinning Bypass Detection
id: a5d8f7c3-9e2b-4f1a-8c6d-7b9e3a2f5c8d
status: experimental
description: Detects attempts to bypass SSL/TLS certificate pinning mechanisms in applications to enable man-in-the-middle attacks or malware communication
logsource:
  product: windows
  service: sysmon
detection:
  selection_process_access:
    EventID: 10
    TargetImage|contains:
      - 'chrome.exe'
      - 'firefox.exe'
      - 'msedge.exe'
      - 'iexplore.exe'
      - 'opera.exe'
    CallTrace|contains:
      - 'crypt32.dll'
      - 'wininet.dll'
      - 'schannel.dll'
      - 'ncrypt.dll'
    GrantedAccess:
      - '0x1F3FFF'
      - '0x1FFFFF'
      - '0x143A'
  selection_registry_modification:
    EventID: 13
    TargetObject|contains:
      - 'HKLM\\SOFTWARE\\Policies\\Microsoft\\SystemCertificates'
      - 'HKCU\\SOFTWARE\\Microsoft\\SystemCertificates'
      - 'HKLM\\SOFTWARE\\Microsoft\\Cryptography\\OID'
    TargetObject|endswith:
      - '\\DisableCertificateTrustList'
      - '\\DisableRootAutoUpdate'
      - '\\EnableCertPaddingCheck'
  selection_file_modification:
    EventID: 11
    TargetFilename|contains:
      - '\\Local State\\Local Storage'
      - '\\User Data\\Default\\Local Storage'
      - '\\AppData\\Local\\Google\\Chrome\\User Data'
      - '\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles'
    TargetFilename|endswith:
      - '.db'
      - '.sqlite'
      - '.json'
  selection_powershell_crypto:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'System.Net.ServicePointManager'
      - 'ServerCertificateValidationCallback'
      - 'CertificatePolicy'
      - 'X509Certificate'
      - 'SslPolicyErrors.None'
      - 'return $true'
      - '[System.Net.ServicePointManager]::CheckCertificateRevocationList'
      - '[Net.SecurityProtocolType]::Tls12'
  selection_dll_injection:
    EventID: 7
    ImageLoaded|endswith:
      - '\\crypt32.dll'
      - '\\wininet.dll'
      - '\\schannel.dll'
    ProcessId: 'ProcessId'
  selection_network_anomaly:
    EventID: 3
    Protocol: 'tcp'
    DestinationPort:
      - 443
      - 8443
    Initiated: 'true'
  selection_certificate_store:
    EventID: 11
    TargetFilename|contains:
      - '\\Microsoft\\SystemCertificates\\CA\\Certificates'
      - '\\Microsoft\\SystemCertificates\\ROOT\\Certificates'
      - '\\Microsoft\\SystemCertificates\\TrustedPublisher\\Certificates'
  condition: (selection_process_access and selection_dll_injection) or selection_registry_modification or (selection_file_modification and selection_n
               etwork_anomaly) or selection_powershell_crypto or selection_certificate_store
falsepositives:
  - Legitimate certificate management tools
  - Development and testing environments
  - Network debugging tools
  - Corporate proxy configurations
level: high
tags:
  - attack.defense_evasion
  - attack.t1553.003
  - attack.man_in_the_middle
  - attack.t1557
  - sysmon
  - windows
  - certificate_pinning
  - ssl_bypass
references:
  - https://attack.mitre.org/techniques/T1553/003/
  - https://blog.netspi.com/certificate-pinning-bypass-techniques/
`,dl=`title: AMSI Bypass Technique Detection
id: f7a9c4d2-8e3b-4f1a-9c5d-6b7e8a2f4c9d
status: experimental
description: Detects attempts to bypass Anti-Malware Scan Interface (AMSI) through various techniques including memory patching, COM hijacking, and reflection
logsource:
  product: windows
  service: powershell-classic
detection:
  selection_powershell_amsi:
    EventID: 4104
    ScriptBlockText|contains:
      - '[Ref].Assembly.GetType'
      - 'System.Management.Automation.AmsiUtils'
      - 'amsiInitFailed'
      - 'amsiContext'
      - 'AmsiScanBuffer'
      - 'amsiSession'
  selection_amsi_bypass_strings:
    EventID: 4104
    ScriptBlockText|contains:
      - 'Add-Type -TypeDefinition'
      - '[Runtime.InteropServices.Marshal]::Copy'
      - 'VirtualProtect'
      - 'GetProcAddress'
      - 'LoadLibrary'
      - 'amsi.dll'
  selection_obfuscation:
    EventID: 4104
    ScriptBlockText|re:
      - '.*[aA][mM][sS][iI].*'
      - '.*\\$[a-zA-Z0-9_]+\\s*=\\s*"[aAmMsS][mMsS][iI].*'
      - '.*\\[char\\]\\d+.*\\[char\\]\\d+.*\\[char\\]\\d+.*\\[char\\]\\d+.*'
  selection_reflection:
    EventID: 4104
    ScriptBlockText|contains|all:
      - '[System.Reflection.BindingFlags]'
      - 'NonPublic'
      - 'Static'
      - 'GetField'
  selection_com_hijack:
    EventID: 4104
    ScriptBlockText|contains:
      - 'New-Object -ComObject'
      - 'WScript.Shell'
      - 'HKEY_CURRENT_USER\\Software\\Classes\\CLSID'
  selection_memory_patch:
    EventID: 4104
    ScriptBlockText|contains|all:
      - 'System.Runtime.InteropServices.Marshal'
      - 'PtrToStructure'
      - 'StructureToPtr'
      - 'amsi'
  filter_legitimate:
    ScriptBlockText|contains:
      - 'Get-Help about_*'
      - 'Import-Module'
      - 'Test-Path'
  condition: (selection_powershell_amsi or selection_amsi_bypass_strings or selection_obfuscation or selection_reflection or selection_com_hijack or s
               election_memory_patch) and not filter_legitimate
falsepositives:
  - Security research and educational content
  - Penetration testing frameworks
  - Red team exercises
level: critical
tags:
  - attack.defense_evasion
  - attack.t1562.001
  - attack.execution
  - attack.t1059.001
  - powershell
  - windows
  - amsi_bypass
references:
  - https://attack.mitre.org/techniques/T1562/001/
  - https://blog.f-secure.com/hunting-for-amsi-bypasses/
`,ml=`title: EDR/AV API Unhooking Detection
id: d4f8a7e2-9c1b-4f5e-8a3d-7b6c9e2f4a8d
status: experimental
description: Detects attempts to unhook EDR/AV API monitoring by restoring original API function code from disk or memory, commonly used to evade security monitoring
logsource:
  product: windows
  service: sysmon
detection:
  selection_process_access:
    EventID: 10
    CallTrace|contains:
      - 'ntdll.dll+NtProtectVirtualMemory'
      - 'ntdll.dll+NtWriteVirtualMemory'
      - 'kernel32.dll+VirtualProtect'
      - 'kernel32.dll+WriteProcessMemory'
    GrantedAccess:
      - '0x1F3FFF'  # PROCESS_ALL_ACCESS
      - '0x1FFFFF'
      - '0x143A'    # PROCESS_VM_WRITE | PROCESS_VM_OPERATION
  selection_api_modules:
    EventID: 7
    ImageLoaded|endswith:
      - '\\ntdll.dll'
      - '\\kernel32.dll'
      - '\\kernelbase.dll'
      - '\\advapi32.dll'
      - '\\user32.dll'
  selection_suspicious_calls:
    EventID: 1
    CommandLine|contains:
      - 'VirtualProtect'
      - 'NtProtectVirtualMemory'
      - 'WriteProcessMemory'
      - 'SetWindowsHookEx'
      - 'UnhookWindowsHookEx'
      - 'GetProcAddress'
      - 'LoadLibrary'
  selection_memory_protection:
    EventID: 10
    TargetImage|endswith:
      - '\\ntdll.dll'
      - '\\kernel32.dll'
    CallTrace|contains:
      - 'PAGE_EXECUTE_READWRITE'
      - 'PAGE_READWRITE'
  selection_file_access:
    EventID: 11
    TargetFilename|contains:
      - '\\Windows\\System32\\ntdll.dll'
      - '\\Windows\\SysWOW64\\ntdll.dll'
      - '\\Windows\\System32\\kernel32.dll'
  edr_processes:
    Image|contains:
      - 'cylance'
      - 'crowdstrike'
      - 'sentinel'
      - 'defender'
      - 'symantec'
      - 'mcafee'
      - 'kaspersky'
      - 'bitdefender'
      - 'carbon'
      - 'elastic'
  condition: (selection_process_access and selection_api_modules) or (selection_suspicious_calls and selection_memory_protection) or (selection_file_a
               ccess and edr_processes)
falsepositives:
  - Legitimate debugging and development tools
  - Security research tools
  - Some penetration testing frameworks
level: critical
tags:
  - attack.defense_evasion
  - attack.t1562.001
  - attack.privilege_escalation
  - attack.t1055
  - sysmon
  - windows
  - api_unhooking
  - edr_evasion
references:
  - https://attack.mitre.org/techniques/T1562/001/
  - https://blog.malwarebytes.com/threat-analysis/2021/02/lazyscripter-from-empire-to-double-rat/
`,ul=`title: PowerShell Logging Evasion Detection
id: e8b7f9a2-4c5d-3e1a-9f6b-7d8a2c4e9f1b
status: experimental
description: Detects attempts to disable or evade PowerShell script block logging and transcription logging to hide malicious activity
logsource:
  product: windows
  service: sysmon
detection:
  selection_registry_policy:
    EventID: 13
    TargetObject|contains:
      - 'HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell'
      - 'HKLM\\SOFTWARE\\WOW6432Node\\Policies\\Microsoft\\Windows\\PowerShell'
      - 'HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell'
    TargetObject|endswith:
      - '\\ScriptBlockLogging\\EnableScriptBlockLogging'
      - '\\ScriptBlockLogging\\EnableScriptBlockInvocationLogging'
      - '\\Transcription\\EnableTranscripting'
      - '\\Transcription\\EnableInvocationHeader'
      - '\\ModuleLogging\\EnableModuleLogging'
    Details:
      - 'DWORD (0x00000000)'
      - '0'
  selection_registry_direct:
    EventID: 13
    TargetObject|contains:
      - 'HKLM\\SOFTWARE\\Microsoft\\PowerShell\\1\\ShellIds\\Microsoft.PowerShell'
      - 'HKLM\\SOFTWARE\\Microsoft\\PowerShell\\3\\ShellIds\\Microsoft.PowerShell'
    TargetObject|endswith:
      - '\\ExecutionPolicy'
    Details|contains:
      - 'Bypass'
      - 'Unrestricted'
  selection_powershell_commands:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Set-ExecutionPolicy Bypass'
      - 'Set-ExecutionPolicy Unrestricted'
      - '-ExecutionPolicy Bypass'
      - '-ep bypass'
      - '-exec bypass'
      - 'Remove-Item -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell"'
      - '$env:PSModulePath'
      - 'Get-WinEvent -FilterHashtable'
      - 'Clear-EventLog'
      - 'wevtutil cl'
  selection_process_manipulation:
    EventID: 10
    TargetImage|endswith: '\\powershell.exe'
    CallTrace|contains:
      - 'ntdll.dll+NtWriteVirtualMemory'
      - 'kernel32.dll+WriteProcessMemory'
    GrantedAccess:
      - '0x1F3FFF'
      - '0x1FFFFF'
  selection_etw_tampering:
    EventID: 1
    CommandLine|contains:
      - '[System.Diagnostics.Eventing.EventProvider]'
      - 'System.Management.Automation.Tracing.PSEtwLogProvider'
      - 'Disable-PSTrace'
      - 'Set-EtwTraceProvider'
  selection_assembly_loading:
    EventID: 7
    Image|endswith: '\\powershell.exe'
    ImageLoaded|contains:
      - 'System.Management.Automation'
      - 'Microsoft.PowerShell'
    ProcessId: 'ProcessId'
  condition: selection_registry_policy or selection_registry_direct or selection_powershell_commands or (selection_process_manipulation and selection_
               assembly_loading) or selection_etw_tampering
falsepositives:
  - Administrative scripts requiring execution policy changes
  - Legitimate system administration tasks
  - Software installation requiring PowerShell policy modifications
level: high
tags:
  - attack.defense_evasion
  - attack.t1562.002
  - attack.execution
  - attack.t1059.001
  - sysmon
  - powershell
  - windows
  - logging_evasion
references:
  - https://attack.mitre.org/techniques/T1562/002/
  - https://blog.palantir.com/tampering-with-windows-event-tracing-background-offense-and-defense-4be7ac62ac63
`,pl=`title: Event Tracing for Windows (ETW) Tampering Detection
id: f9e6a7c4-8d2b-4a1e-9c5f-7b3a8e2d6f4c
status: experimental
description: Detects attempts to tamper with Event Tracing for Windows (ETW) to disable logging and evade detection by security monitoring tools
logsource:
  product: windows
  service: sysmon
detection:
  selection_etw_registry:
    EventID: 13
    TargetObject|contains:
      - 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\WMI\\Autologger'
      - 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WINEVT\\Channels'
      - 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WINEVT\\Publishers'
    TargetObject|endswith:
      - '\\Enabled'
      - '\\EnableLevel'
      - '\\MatchAnyKeyword'
    Details:
      - 'DWORD (0x00000000)'
      - '0'
  selection_etw_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Set-EtwTraceProvider'
      - 'Remove-EtwTraceProvider'
      - 'Disable-EtwTraceProvider'
      - 'System.Diagnostics.Eventing.EventProvider'
      - 'Microsoft-Windows-PowerShell'
      - 'Microsoft-Windows-Kernel-EventTracing'
  selection_etw_wevtutil:
    EventID: 1
    Image|endswith: '\\wevtutil.exe'
    CommandLine|contains:
      - 'set-log'
      - 'sl'
      - '/e:false'
      - '/enabled:false'
      - 'Microsoft-Windows-PowerShell/Operational'
      - 'Microsoft-Windows-WMI-Activity/Operational'
      - 'Microsoft-Windows-Sysmon/Operational'
  selection_etw_process_access:
    EventID: 10
    TargetImage|endswith: '\\svchost.exe'
    CallTrace|contains:
      - 'advapi32.dll+EventRegister'
      - 'advapi32.dll+EventUnregister'
      - 'ntdll.dll+EtwRegisterTraceGuids'
      - 'ntdll.dll+EtwUnregisterTraceGuids'
    GrantedAccess:
      - '0x1F3FFF'
      - '0x1FFFFF'
  selection_etw_api_calls:
    EventID: 1
    CommandLine|contains:
      - 'EtwEventWrite'
      - 'EtwEventRegister'
      - 'EtwEventUnregister'
      - 'EtwTraceMessage'
      - 'TraceEvent'
  selection_etw_logman:
    EventID: 1
    Image|endswith: '\\logman.exe'
    CommandLine|contains:
      - 'stop'
      - 'delete'
      - 'update'
      - 'EventLog-System'
      - 'EventLog-Security'
      - 'EventLog-Application'
      - 'NT Kernel Logger'
  selection_etw_service_stop:
    EventID: 7045
    ServiceName|contains:
      - 'EventLog'
      - 'Wecsvc'
      - 'WinRM'
    StartType: 'Disabled'
  selection_etw_com:
    EventID: 1
    CommandLine|contains:
      - 'Microsoft.Diagnostics.Tracing'
      - 'System.Diagnostics.Eventing'
      - 'TraceLogging'
  condition: selection_etw_registry or selection_etw_powershell or selection_etw_wevtutil or selection_etw_process_access or selection_etw_api_calls o
               r selection_etw_logman or selection_etw_service_stop or selection_etw_com
falsepositives:
  - Legitimate system administration tasks
  - Performance troubleshooting activities
  - Security software configuration changes
  - Windows diagnostic tools
level: critical
tags:
  - attack.defense_evasion
  - attack.t1562.006
  - attack.execution
  - attack.t1059.001
  - sysmon
  - windows
  - etw_tampering
  - logging_evasion
references:
  - https://attack.mitre.org/techniques/T1562/006/
  - https://blog.palantir.com/tampering-with-windows-event-tracing-background-offense-and-defense-4be7ac62ac63
`,gl=`title: Memory-Only Malware Execution Detection
id: f2c9e7a4-6d8b-4a1c-9f5e-3b7a8c2d6f9e
status: experimental
description: Detects reflective DLL loading and memory-only malware execution techniques that avoid writing malicious files to disk
logsource:
  product: windows
  service: sysmon
detection:
  selection_process_creation:
    EventID: 1
  selection_image_load_suspicious:
    EventID: 7
    ImageLoaded|contains:
      - 'C:\\Windows\\MEMORY'
      - '\\Device\\HarddiskVolume'
    ImageLoaded|re: '.*\\\\0x[0-9a-fA-F]{8,16}.*'
    Signed: 'false'
  selection_process_access_memory:
    EventID: 10
    CallTrace|contains:
      - 'ntdll.dll+LdrLoadDll'
      - 'ntdll.dll+NtMapViewOfSection'
      - 'ntdll.dll+NtAllocateVirtualMemory'
      - 'kernel32.dll+VirtualAlloc'
      - 'kernel32.dll+VirtualAllocEx'
    GrantedAccess:
      - '0x1F3FFF'
      - '0x1FFFFF'
      - '0x143A'
  selection_memory_allocation:
    EventID: 8
    StartModule|contains: 'Unknown'
    StartAddress|re: '^0x[0-9a-fA-F]{8,16}$'
  selection_powershell_reflection:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - '[System.Reflection.Assembly]::Load'
      - '[Reflection.Assembly]::Load'
      - 'System.Runtime.InteropServices.Marshal'
      - 'VirtualAlloc'
      - 'CreateThread'
      - 'WaitForSingleObject'
  selection_dotnet_assembly:
    EventID: 7
    ImageLoaded|contains:
      - 'clr.dll'
      - 'mscorwks.dll'
      - 'mscoreei.dll'
    ProcessId: 'ProcessId'
  selection_hollow_process:
    EventID: 1
    IntegrityLevel: 'High'
    ParentImage|endswith:
      - '\\explorer.exe'
      - '\\winlogon.exe'
      - '\\services.exe'
    Image|endswith:
      - '\\svchost.exe'
      - '\\lsass.exe'
      - '\\csrss.exe'
      - '\\dwm.exe'
  selection_injection_indicators:
    EventID: 10
    TargetImage|endswith:
      - '\\svchost.exe'
      - '\\explorer.exe'
      - '\\winlogon.exe'
    CallTrace|contains:
      - 'UNKNOWN'
      - 'Unbacked'
  selection_network_memory:
    EventID: 3
    Protocol: 'tcp'
    Initiated: 'true'
    DestinationPort:
      - 80
      - 443
      - 8080
      - 4444
      - 1337
  condition: (selection_process_creation and selection_image_load_suspicious) or
             (selection_process_access_memory and selection_memory_allocation) or
             (selection_powershell_reflection and selection_dotnet_assembly) or
             (selection_hollow_process and selection_injection_indicators) or
             (selection_network_memory and selection_injection_indicators)
falsepositives:
  - Legitimate .NET applications using reflection
  - Development and debugging tools
  - Security software performing analysis
  - JIT compilation in managed applications
level: critical
tags:
  - attack.defense_evasion
  - attack.t1620
  - attack.execution
  - attack.t1055
  - attack.t1027
  - sysmon
  - windows
  - reflective_dll
  - memory_execution
references:
  - https://attack.mitre.org/techniques/T1620/
  - https://blog.malwarebytes.com/threat-analysis/2018/06/process-doppelganging-meets-process-hollowing-osiris/
`,_l=`---
title: Malicious Scheduled Task Creation
id: e4f2d6b7-8c90-4a71-bd3e-1234567890ab
status: experimental
description: "Detects suspicious creation or modification of scheduled tasks (EventID 4698) that may be used for persistence or malicious code execution."
references:
  - https://attack.mitre.org/techniques/T1053/005/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.persistence
  - attack.t1053.005
logsource:
  product: windows
  service: security
detection:
  selection:
    EventID: 4698
  condition: selection
falsepositives:
  - Legitimate scheduled task creation by system administrators or software update mechanisms.
level: high
`,fl=`---
title: Scheduled Task Creation
id: e7f9d280-bb95-4203-a34d-238b09d7b8a2
status: experimental
description: Detects new scheduled tasks which may indicate attacker persistence. Uses Windows Security Event ID 4698 and correlates with Sysmon Event ID 1 for related tooling.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
detection:
  windows_event:
    EventID: 4698
  sysmon_process:
    EventID: 1
    CommandLine|contains:
      - 'schtasks'
      - 'New-ScheduledTask'
      - 'at.exe'
  condition: windows_event or sysmon_process
fields:
  - TaskName
  - CommandLine
  - Image
  - SubjectUserName
  - ComputerName
falsepositives:
  - Legitimate task configuration by admins
  - Patch management or monitoring tools
level: high
tags:
  - attack.persistence
  - attack.execution
  - attack.t1053
  - attack.t1053.005
  - windows
  - sysmon
`,hl=`---
title: Unauthorized Cron Job Creation
id: e9c71683-79f8-40c0-93e4-1234567890ab
status: experimental
description: >
  "Detects syslog events indicating new or modified cron jobs by monitoring for messages such as 'crontab: installing new crontab'
  or 'crontab: installing for', which may signal unauthorized cron job creation."
references:
  - https://attack.mitre.org/techniques/T1053/
author: Matthew Iverson
date: 2025-04-08
tags:
  - job.creation
  - attack.t1053
logsource:
  product: linux
  service: syslog
  category: cron
detection:
  selection:
    Message|contains:
      - "crontab: installing new crontab"
      - "crontab: installing for"
  condition: selection
falsepositives:
  - Legitimate cron job modifications performed by authorized administrators or system processes.
level: medium
`,vl=`---
title: Abnormal User Account Modifications
id: e8b3fa21-9d45-4c2a-90d7-1234567890ab
status: experimental
description: "Detects abnormal modifications to user accounts, such as creation, modification, or deletion, that may indicate unauthorized account manipulation."
references:
  - https://attack.mitre.org/techniques/T1098/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.account_manipulation
  - attack.t1098
logsource:
  product: linux
  service: syslog
  category: authentication
detection:
  selection:
    Message|contains:
      - "useradd"
      - "usermod"
      - "userdel"
      - "groupadd"
      - "groupdel"
      - "passwd: password changed"
  condition: selection
falsepositives:
  - Legitimate user account changes performed by system administrators or automated system processes.
level: medium
`,yl=`---
title: User Added to Domain Admins Group
id: c187f01b-2e2c-4f91-a4b0-81834b935d4d
status: stable
description: Detects unauthorized or suspicious additions to the Domain Admins group using Windows Security Event ID 4728 and correlates with suspicious process activity via Sysmon Event ID 1.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
detection:
  windows_event:
    EventID: 4728
    GroupName|endswith: 'Domain Admins'
  sysmon_process:
    EventID: 1
    CommandLine|contains:
      - 'net group'
      - 'Domain Admins'
      - '/add'
      - 'Add-ADGroupMember'
      - 'dsadd'
  condition: windows_event or sysmon_process
fields:
  - TargetUserName
  - GroupName
  - SubjectUserName
  - CommandLine
  - Image
  - ComputerName
  - EventID
falsepositives:
  - Authorized IT admin account provisioning
  - Legitimate domain admin role assignments
level: high
tags:
  - attack.persistence
  - attack.privilege_escalation
  - attack.t1098
  - windows
  - sysmon
`,wl=`---
title: Suspicious native module load from non-standard path
id: 4c9e5a2b-6d3f-4e56-8a7b-1f2e3d4c5b6a
status: experimental
description: >
  Detect processes loading native modules (DLLs) from unexpected or user-writable locations (AppData, Temp, user profile paths)
  which may indicate custom native API usage or dropped native helpers.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1106/
tags:
  - attack.t1106
  - tactic.persistence
  - platform:windows
  - technique:T1106
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 7
    Image|endswith:
      - '\\rundll32.exe'
      - '\\svchost.exe'
      - '\\explorer.exe'
    TargetFilename|contains:
      - "\\\\AppData\\\\"
      - "\\\\Local\\\\Temp\\\\"
      - "\\\\Temp\\\\"
      - "\\\\Users\\\\"
  condition: selection
falsepositives:
  - Legitimate applications that extract native helpers to user profile locations (rare).
  - Some installers that stage DLLs to Temp during updates.
level: high
`,bl=`---
title: New User Account Created
id: d799d84f-d03f-4a7b-a1a3-3bd12a3e22d2
status: stable
description: Detects creation of new local or domain user accounts using Windows Security Event ID 4720.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: security
  category: account_management
detection:
  selection_event:
    EventID: 4720
  condition: selection_event
fields:
  - TargetUserName
  - SubjectUserName
  - SubjectDomainName
  - ComputerName
falsepositives:
  - Legitimate user provisioning by IT
level: high
tags:
  - attack.persistence
  - attack.t1136
  - attack.t1136.001
  - windows
`,kl=`---
title: Abnormal Kernel Module Loading
id: 2f7e9d45-8c3a-4d5e-bf90-1234567890ab
status: experimental
description: >
  "Detects potential abnormal kernel module loading on Linux systems by monitoring syslog messages for module load commands (e.g.,
  insmod, modprobe) executed from non-standard directories such as /tmp/."
references:
  - https://attack.mitre.org/techniques/T1542/007/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.persistence
  - attack.t1542.007
logsource:
  product: linux
  service: syslog
  category: kernel
detection:
  selection:
    Message|contains:
      - "insmod"
      - "modprobe"
  abnormal_path:
    Message|contains: "/tmp/"
  condition: selection and abnormal_path
falsepositives:
  - Legitimate kernel module loading during system updates or when modules are temporarily staged in /tmp/ during packaging.
level: medium
`,Sl=`---
title: Suspicious Service Creation
id: 76e6d2c2-9d4f-41c0-a56a-847cf50a6470
status: experimental
description: Detects creation of new services which may indicate attacker persistence. Uses Windows System Event ID 7045 and correlated process creation from Sysmon.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
detection:
  windows_event:
    EventID: 7045
  sysmon_process:
    EventID: 1
    CommandLine|contains:
      - 'sc create'
      - 'New-Service'
      - 'srvany.exe'
      - 'powershell'
      - 'service'
  condition: windows_event or sysmon_process
fields:
  - ServiceName
  - ServiceFileName
  - CommandLine
  - Image
  - User
  - ComputerName
falsepositives:
  - Software installation
  - Legitimate administrative service setup
level: high
tags:
  - attack.persistence
  - attack.privilege_escalation
  - attack.t1543
  - attack.t1543.003
  - windows
  - sysmon
`,xl=`---
title: Suspicious Driver Installations or Modifications
id: 4a9c8b7d-1234-4e6a-bcde-1234567890ab
status: experimental
description: "Detects the creation or modification of driver services (EventID 7045) where the service file (driver) ends with .sys and is installed outside of known trusted directories."
references:
  - https://attack.mitre.org/techniques/T1543/003/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.persistence
  - attack.t1543.003
logsource:
  product: windows
  service: system
detection:
  selection:
    EventID: 7045
    ServiceFileName|endswith: ".sys"
  whitelist:
    ServiceFileName|startswith: "C:\\\\Windows\\\\System32\\\\drivers\\\\"
  condition: selection and not whitelist
falsepositives:
  - Legitimate driver updates or installations by trusted vendors in standard directories.
level: high
`,Dl=`---
title: Executable or Script Dropped in Persistence Path
id: 9e212d9c-028d-4930-a186-19bdfde8ff87
status: experimental
description: Detects creation of executables or script files in suspicious persistence paths like AppData or Startup folders using Sysmon Event ID 11.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  selection_event:
    EventID: 11
  selection_path:
    TargetFilename|contains:
      - '\\AppData\\'
      - '\\Start Menu\\Programs\\Startup\\'
  selection_extension:
    TargetFilename|endswith:
      - '.exe'
      - '.bat'
      - '.ps1'
      - '.vbs'
  condition: selection_event and selection_path and selection_extension
fields:
  - Image
  - TargetFilename
  - ProcessId
  - ComputerName
falsepositives:
  - Software installations or legitimate automation
level: high
tags:
  - attack.persistence
  - attack.t1547
  - attack.t1547.001
  - sysmon
`,Il=`---
title: DLL Loaded from Non-standard Directory
id: 1f775e2d-1341-4e25-8bfb-8f5e7f488eb7
status: experimental
description: Detects DLL image load operations from suspicious directories like user folders, temp paths, or network shares. Based on Sysmon Event ID 7.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: image_load
detection:
  selection_event:
    EventID: 7
  selection_path:
    ImageLoaded|startswith:
      - 'C:\\Users\\'
      - 'C:\\Windows\\Temp\\'
    ImageLoaded|contains:
      - '\\\\'
  condition: selection_event and selection_path
fields:
  - Image
  - ImageLoaded
  - ProcessId
  - ComputerName
falsepositives:
  - Developer tools
  - Software updaters
level: high
tags:
  - attack.persistence
  - attack.t1574
  - attack.t1574.002
  - sysmon
`,Tl=`---
title: Suspicious Sudo Command Usage
id: c021bac1-4d2e-4ebc-9d0c-1a2b3c4d5e6f
status: experimental
description: >
  "Detects suspicious sudo command usage from syslog events, where unusual or abnormal sudo commands (indicated by the presence of 'sudo:'
  and 'COMMAND=') may indicate unauthorized privilege escalation attempts."
references: []
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.privilege_escalation
  - custom.t0000
logsource:
  product: linux
  service: syslog
  category: authentication
detection:
  selection:
    Message|contains:
      - "sudo:"
      - "COMMAND="
  condition: selection
falsepositives:
  - Legitimate sudo usage by authorized administrators.
level: medium
`,Cl=`---
title: Suspicious Domain Token Theft or Impersonation
id: 12345678-9abc-def0-1234-56789abcdef0
status: experimental
description: >
  Detects behavior that may indicate the theft or impersonation of domain tokens on a Windows system.
  This rule focuses on Sysmon events that capture process access operations (Event ID 10) and remote thread
  creation (Event ID 8) against high-value processes like LSASS or Winlogon, which are common targets for
  credential or token theft.
references:
  - https://attack.mitre.org/techniques/T1134/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.privilege_escalation
  - attack.credential_access
  - attack.t1134
logsource:
  product: windows
  service: sysmon
detection:
  # SECTION 1: Suspicious Process Access (Sysmon EID 10)
  suspicious_access:
    EventID: 10
    TargetImage|endswith:
      - '\\lsass.exe'
      - '\\winlogon.exe'
      - '\\spoolsv.exe'
    # Common suspicious access rights for token theft
    #  - 0x1F0FFF or 0x1fffff = PROCESS_ALL_ACCESS
    #  - 0x143A and 0x1410 are typical handles for duplication and injection
    GrantedAccess|re: '(?i)0x1F0FFF|0x1fffff|0x143a|0x1410'
  # SECTION 2: CreateRemoteThread into LSASS or other system processes (Sysmon EID 8)
  suspicious_thread:
    EventID: 8
    TargetImage|endswith:
      - '\\lsass.exe'
      - '\\winlogon.exe'
      - '\\spoolsv.exe'

  condition: suspicious_access OR suspicious_thread
falsepositives:
  - Legitimate antivirus or EDR tools accessing LSASS
  - Legitimate backup or monitoring software with special privileges
level: high
`,El=`---
title: Service Creation Using a Named Pipe
id: 8ca2a7bf-42a1-4d95-8d55-93f4df3b4b7f
status: experimental
description: >
  Detects the creation of a Windows service (Event ID 7045) referencing a named pipe path in the service file name (e.g., \\\\.\\pipe\\...).
  Attackers sometimes abuse named pipes when creating malicious services for lateral movement or privilege escalation.
references:
  - https://attack.mitre.org/techniques/T1543/003/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.privilege_escalation
  - attack.persistence
  - attack.t1543.003
logsource:
  product: windows
  service: system
detection:
  selection:
    EventID: 7045
    # "A service was installed in the system"
    ServiceFileName|contains: '\\\\.\\pipe\\'
  condition: selection
falsepositives:
  - Legitimate internal or custom services using named pipes
level: high
`,Pl=`---
title: Privilege Escalation Attempts
id: f87a1b2c-3d4e-5f6a-9b7c-abcdef123456
status: experimental
description: >
  "Detects potential privilege escalation attempts by monitoring syslog events for failed sudo authentications, messages indicating a user
  is not in the sudoers file, or failed su attempts."
references:
  - https://attack.mitre.org/techniques/T1548/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.privilege_escalation
  - attack.t1548
logsource:
  product: linux
  service: syslog
  category: authentication
detection:
  sudo_failure:
    Message|contains:
      - "sudo:"
      - "authentication failure"
  sudo_not_in_sudoers:
    Message|contains:
      - "sudo:"
      - "not in the sudoers file"
  su_failure:
    Message|contains:
      - "su:"
      - "FAILED"
  condition: sudo_failure or sudo_not_in_sudoers or su_failure
falsepositives:
  - Legitimate authentication errors due to mistyped passwords or configuration issues.
level: medium
`,Al=`---
title: Unusual File Access or Modification
id: d4c3b2a1-5678-4def-9abc-abcdef123456
status: experimental
description: >
  Detects unusual file access or modification events by monitoring syslog messages for keywords such as 'modified', 'changed', 'deleted', or 'created' in relation to sensitive
  files or directories (e.g., /etc/passwd, /etc/shadow, /etc/sudoers, /etc/group, /var/log), which may signal potential indicator removal or tampering.
references:
  - https://attack.mitre.org/techniques/T1070/004/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.indicator_removal
  - attack.t1070.004
logsource:
  product: linux
  service: syslog
  category: file_activity
detection:
  selection:
    Message|contains:
      - "/etc/passwd"
      - "/etc/shadow"
      - "/etc/sudoers"
      - "/etc/group"
      - "/var/log"
  modifications:
    Message|contains:
      - "modified"
      - "changed"
      - "deleted"
      - "created"
  condition: selection and modifications
falsepositives:
  - Legitimate file changes resulting from system updates, routine maintenance, or authorized administrative activities.
level: medium
`,Ll=`---
title: Log Tampering or Deletion
id: 9d2f1c73-6f4e-4b2a-bd33-1234567890ab
status: experimental
description: >
  Detects potential log tampering or deletion on Linux systems by monitoring syslog events for suspicious commands or messages (e.g.
  'rm -rf /var/log', 'deleted log', 'truncated log', 'log cleared') that may indicate attempts to remove or obscure log data.
references:
  - https://attack.mitre.org/techniques/T1070/001/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.indicator_removal
  - attack.t1070
logsource:
  product: linux
  service: syslog
  category: system
detection:
  selection:
    Message|contains:
      - "rm -rf /var/log"
      - "rm -f /var/log"
      - "deleted log"
      - "truncated log"
      - "log cleared"
  condition: selection
falsepositives:
  - Legitimate log rotation events, scheduled maintenance, or authorized system cleanup tasks.
level: medium
`,Ml=`---
title: Syscall strings or inline syscall opcodes in scriptblocks
id: 5d0f6b3c-8e4a-4f67-9c8d-2b3f4e5d6c7b
status: experimental
description: >
  Detect occurrences of "syscall" usage strings or inline syscall opcodes in scripts or commandlines (shellcode-like patterns, raw syscall numbers) that indicate attempts to invoke
  native syscalls directly.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1106/
tags:
  - attack.t1106
  - tactic.defense-evasion
  - platform:windows
  - technique:T1106
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection:
    EventID: 4104
    ScriptBlockText|contains:
      - "syscall"
      - "mov r10"
      - "mov eax"
      - "0x"
  condition: selection
falsepositives:
  - Developers embedding assembly snippets or legitimate security tools including inline assembly for testing.
level: high
`,Rl=`---
title: Rundll32 Proxy Execution for Defense Evasion
id: o5p6q7r8-s9t0-1234-5678-901234opqrst
status: experimental
description: Detects rundll32.exe being used to proxy execution of malicious code
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_base:
    EventID: 1
    Image|endswith: '\\rundll32.exe'
  suspicious_dlls:
    CommandLine|contains:
      - 'javascript:'
      - 'vbscript:'
      - 'mshtml'
      - 'shell32.dll,ShellExec_RunDLL'
      - 'advpack.dll'
      - 'ieframe.dll'
      - 'shdocvw.dll'
      - 'urlmon.dll'
      - 'ieadvpack.dll'
      - 'setupapi.dll'
      - 'ieframe.dll'
  suspicious_functions:
    CommandLine|contains:
      - 'DllCanUnloadNow'
      - 'DllGetVersion'
      - 'DllInstall'
      - 'DllRegisterServer'
      - 'DllUnregisterServer'
      - 'OpenURL'
      - 'RouteTheCall'
      - 'LaunchApplication'
  remote_sources:
    CommandLine|contains:
      - 'http://'
      - 'https://'
      - 'ftp://'
      - '\\\\\\\\'  # UNC paths
  encoded_commands:
    CommandLine|contains:
      - ' -e '
      - ' -en '
      - ' -enc '
      - ' -encoded '
      - 'FromBase64String'
  temp_paths:
    CommandLine|contains:
      - '%TEMP%'
      - '%TMP%'
      - 'C:\\Users\\*\\AppData\\Local\\Temp'
      - 'C:\\Windows\\Temp'
  condition: selection_base and (suspicious_dlls or suspicious_functions or remote_sources or encoded_commands or temp_paths)
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
  - CurrentDirectory
falsepositives:
  - Legitimate software installation
  - Windows built-in functions
  - System administration
level: medium
tags:
  - attack.defense-evasion
  - attack.t1218.011
  - sysmon
  - windows
`,Nl=`---
title: CPU Count Checks for Sandbox Detection
id: d1e2f3g4-h5i6-7890-abcd-333333333333
status: experimental
description: Detects CPU core count checks for sandbox evasion
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'NUMBER_OF_PROCESSORS'
      - 'Win32_Processor'
      - 'Get-WmiObject.*Processor'
      - 'nproc'
      - '/proc/cpuinfo'
      - 'lscpu'
      - 'sysctl hw.ncpu'
  condition: selection
falsepositives:
  - System monitoring
  - Performance tools
level: low
tags:
  - attack.defense-evasion
  - attack.t1497.003
`,Fl=`---
title: Extended Sleep and Delay Commands for Evasion
id: d4e5f6g7-h8i9-0123-4567-890123defghi
status: experimental
description: Detects extended sleep, delay, or timeout commands often used for sandbox evasion
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_timeout:
    EventID: 1
    CommandLine|contains:
      - 'timeout /t'
      - 'ping -n'
      - 'ping 127.0.0.1 -n'
      - 'ping localhost -n'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Start-Sleep'
      - 'sleep'
      - 'System.Threading.Thread.Sleep'
      - '[Threading.Thread]::Sleep'
  selection_batch:
    EventID: 1
    Image|endswith:
      - '\\cmd.exe'
      - '\\choice.exe'
    CommandLine|contains:
      - 'choice /t'
      - 'choice /d'
      - '/t 10'
      - '/t 30'
      - '/t 60'
      - '/n 10'
      - '/n 30'
      - '/n 60'
  long_delays:
    CommandLine|re: '.*(/t\\s+|sleep\\s+|Sleep\\()\\d{2,}.*'
  condition: (selection_timeout or selection_powershell or selection_batch) and long_delays
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - Legitimate system administration scripts
  - Network testing utilities
  - Backup scripts with delays
level: medium
tags:
  - attack.defense-evasion
  - attack.t1497.003
  - sysmon
  - windows
`,ql=`---
title: High uptime checks and conditional long delays
id: 8b1d4f3c-5e6a-4f7b-9c8d-2e3f4a5b6c7d
status: experimental
description: Detect attempts to check system uptime or tick counts and then delay execution for long periods (indicates time-based sandbox evasion logic).
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1497/003/
tags:
  - attack.t1497.003
  - tactic.defense-evasion
  - platform:windows
  - technique:T1497.003
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_uptime_check_ps:
    EventID: 4104
    ScriptBlockText|contains:
      - "Get-Uptime"
      - "Get-CimInstance Win32_OperatingSystem"
      - "LastBootUpTime"
      - "GetTickCount"
      - "GetTickCount64"
  selection_then_sleep:
    EventID: 4104
    ScriptBlockText|contains:
      - "Start-Sleep -Seconds 600"
      - "Start-Sleep -Seconds 900"
  condition: selection_uptime_check_ps and selection_then_sleep
falsepositives:
  - Monitoring or inventory scripts that evaluate uptime for maintenance scheduling.
level: high
`,Ol=`---
title: Long delay in compiled binaries via Sleep or NtDelayExecution
id: 9c2e5a4d-6f7b-4g8h-0i1j-3k4l5m6n7o8p
status: experimental
description: >
  Detect process creations of binaries whose commandline, scriptblock, or loaded modules contain Sleep calls, NtDelayExecution, or suspicious long-wait logic often used to evade
  sandbox runtime limits.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1497/003/
tags:
  - attack.t1497.003
  - tactic.defense-evasion
  - platform:windows
  - technique:T1497.003
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_proc:
    EventID: 1
    CommandLine|contains:
      - "sleep("
      - "Sleep("
      - "NtDelayExecution"
      - "NtDelayExecution("
  selection_image_load:
    EventID: 7
    TargetFilename|contains:
      - "\\\\Temp\\\\"
      - "\\\\AppData\\\\"
  condition: selection_proc or selection_image_load
falsepositives:
  - Legitimate software that uses sleep/delay for throttling or retry logic.
level: high
`,Wl=`---
title: Memory Size Checks for Sandbox Detection
id: d1e2f3g4-h5i6-7890-abcd-444444444444
status: experimental
description: Detects memory size checks for sandbox evasion
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'Win32_PhysicalMemory'
      - 'TotalPhysicalMemory'
      - 'GlobalMemoryStatusEx'
      - '/proc/meminfo'
      - 'free -m'
      - 'sysctl hw.memsize'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1497.003
`,jl=`---
title: Sleep-Based Sandbox Evasion Techniques
id: d1e2f3g4-h5i6-7890-abcd-222222222222
status: experimental
description: Detects sleep-based sandbox evasion
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|re: '.*(Sleep|sleep|timeout|ping.*-n|choice.*-t)\\s+[3-9][0-9].*'
  condition: selection
fields:
  - Image
  - CommandLine
  - ProcessId
  - User
falsepositives:
  - System scripts
  - Backup operations
level: medium
tags:
  - attack.defense-evasion
  - attack.t1497.003
  - sysmon
  - windows
`,$l=`---
title: Start-Sleep long duration in PowerShell
id: 6f9b2d1a-3c4e-4f5b-9a7c-0b1d2e3f4a5b
status: experimental
description: Detect PowerShell scriptblocks using Start-Sleep with unusually long durations commonly used to evade sandbox analysis.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1497/003/
tags:
  - attack.t1497.003
  - tactic.defense-evasion
  - platform:windows
  - technique:T1497.003
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection_long_sleep:
    EventID: 4104
    ScriptBlockText|contains:
      - "Start-Sleep -Seconds 60"
      - "Start-Sleep -Seconds 120"
      - "Start-Sleep -Seconds 300"
      - "Start-Sleep -Seconds 600"
      - "Start-Sleep -Seconds 900"
  selection_sleep_s:
    EventID: 4104
    ScriptBlockText|contains:
      - "Start-Sleep -s 60"
      - "Start-Sleep -s 300"
  condition: selection_long_sleep or selection_sleep_s
falsepositives:
  - Legitimate maintenance, orchestration, or sequencing scripts that pause for windows or retries.
level: medium
`,Ul=`---
title: Stepped timer loops or exponential backoff used as long delay
id: a0f3b6c7-1d2e-4f5a-9b8c-0d1e2f3a4b5c
status: experimental
description: Detect patterns indicative of scripted stepped waits or exponential backoff loops (incremental sleep/ping loops) used to extend execution time beyond sandbox limits.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1497/003/
tags:
  - attack.t1497.003
  - tactic.defense-evasion
  - platform:windows
  - technique:T1497.003
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection_backoff_loop:
    EventID: 4104
    ScriptBlockText|contains|all:
      - "for("
      - "Start-Sleep"
      - "$i++"
  selection_incremental_sleep:
    EventID: 4104
    ScriptBlockText|contains:
      - "Start-Sleep ($i)"
      - "Start-Sleep -Seconds $i"
      - "Start-Sleep -Seconds ($i *"
  condition: selection_backoff_loop or selection_incremental_sleep
falsepositives:
  - Legitimate retry/backoff implementations in automation and resilient scripts.
level: medium
`,zl=`---
title: Timeout / choice based long delays in cmd/batch
id: 7a0c3e2b-4d5f-4e6a-8b9c-1d2e3f4a5b6c
status: experimental
description: Detect use of \`timeout\`, \`choice\` or other cmd-based delay constructs with long durations frequently used to bypass sandbox time windows.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1497/003/
tags:
  - attack.t1497.003
  - tactic.defense-evasion
  - platform:windows
  - technique:T1497.003
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_timeout:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - "timeout /t 60"
      - "timeout /t 300"
      - "choice /t 60"
      - "choice /t 300"
  selection_ping_delay:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - "ping -n 60 127.0.0.1"
      - "ping -n 300 127.0.0.1"
  condition: selection_timeout or selection_ping_delay
falsepositives:
  - Long-running deployment or maintenance batch scripts.
level: medium
`,Bl=`---
title: System Uptime Checks for Sandbox Detection
id: d1e2f3g4-h5i6-7890-abcd-555555555555
status: experimental
description: Detects uptime checks for sandbox evasion
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'GetTickCount'
      - 'timeGetTime'
      - 'QueryPerformanceCounter'
      - 'uptime'
      - 'LastBootUpTime'
      - '/proc/uptime'
      - 'sysctl kern.boottime'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1497.003
`,Hl=`---
title: Virtual Machine Detection Evasion
id: d1e2f3g4-h5i6-7890-abcd-111111111111
status: experimental
description: Detects VM detection evasion techniques
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'SELECT * FROM Win32_ComputerSystem'
      - 'SELECT * FROM Win32_BIOS'
      - 'SELECT * FROM Win32_BaseBoard'
      - 'VMware'
      - 'VirtualBox'
      - 'VBOX'
      - 'Hyper-V'
      - 'Xen'
      - 'QEMU'
      - 'Bochs'
      - 'Parallels'
      - 'virt-what'
      - 'systemd-detect-virt'
      - 'dmidecode'
      - 'lscpu'
      - 'hostnamectl'
  condition: selection
fields:
  - Image
  - CommandLine
  - ProcessId
  - User
falsepositives:
  - System administration
  - Virtualization management
  - System inventory tools
level: medium
tags:
  - attack.defense-evasion
  - attack.t1497.003
  - sysmon
  - windows
`,Gl=`---
title: Time-Based Evasion via Sleep, Ping-Delay, or Timeout
id: 9d1e7b44-2e65-4e5d-bc2f-1e1b2a3c4d5e
status: experimental
description: Detect long execution delays often used to evade sandboxes, including Start-Sleep, timeout, and ping loops as timers.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1497/003/
tags:
  - attack.t1497.003
  - tactic.defense-evasion
  - platform:windows
  - technique:T1497.003
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  ps_sleep:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Start-Sleep"
      - "Start-Sleep -s"
      - "Start-Sleep -Seconds"
  cmd_timeout:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - "timeout /t "
      - "choice /t "
  ping_delay:
    EventID: 1
    CommandLine|contains:
      - "ping -n "
      - "ping -w "
  high_delay_hint:
    EventID: 1
    CommandLine|contains:
      - "300"
      - "600"
      - "900"
      - "1200"
  condition: (ps_sleep or cmd_timeout or ping_delay) and high_delay_hint
falsepositives:
  - Scripts legitimately pausing for maintenance windows or sequencing.
level: medium
`,Vl=`---
title: Audit Policy Change or Clearing Attempt
id: 8f94eb0d-3aa2-4a9a-953d-cafbe548732f
status: experimental
description: Detects audit policy changes (Event ID 4719) and correlates with suspicious tools that modify or clear logs (auditpol, secedit, wevtutil).
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
detection:
  windows_event:
    EventID: 4719
  sysmon_process:
    EventID: 1
    CommandLine|contains:
      - 'auditpol'
      - 'secedit'
      - 'wevtutil cl'
  condition: windows_event or sysmon_process
fields:
  - SubjectUserName
  - CommandLine
  - Image
  - EventID
  - ComputerName
falsepositives:
  - Security configuration changes by IT
  - Group Policy updates
level: high
tags:
  - attack.defense_evasion
  - attack.t1562
  - attack.t1562.002
  - windows
  - sysmon
`,Kl=`---
title: Enabling RDP Through Firewall Modification Detected
id: 0e2a15fa-1234-5678-9abc-def098765432
status: experimental
description: >
  Detects modification of Windows Firewall rules that enable Remote Desktop Protocol (RDP).
  This rule looks for events (e.g. EventID 4946) that indicate a firewall rule change where the rule
  involves port 3389 or mentions "Remote Desktop". This behavior can be indicative of an adversary enabling RDP
  for remote access.
references:
    - https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/basic-security-audit-events
author: Matthew Iverson
date: 2025-04-08
tags:
    - attack.defense_evasion
    - attack.t1562
logsource:
    product: windows
    service: security
detection:
    selection:
        EventID: 4946
    rdp_indicators:
        Message|contains:
            - "3389"
            - "Remote Desktop"
    condition: selection and rdp_indicators
falsepositives:
    - Legitimate administrative firewall rule changes for enabling RDP
level: medium
`,Ql=`---
title: Anti-Debug API Calls and Techniques
id: e5f6g7h8-i9j0-1234-5678-901234efghij
status: experimental
description: Detects anti-debugging techniques and API calls used to evade debugger detection
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_apis:
    EventID: 1
    CommandLine|contains:
      - 'IsDebuggerPresent'
      - 'CheckRemoteDebuggerPresent'
      - 'NtQueryInformationProcess'
      - 'OutputDebugString'
      - 'GetTickCount'
      - 'QueryPerformanceCounter'
      - 'timeGetTime'
      - 'SetUnhandledExceptionFilter'
      - 'UnhandledExceptionFilter'
      - 'NtSetInformationThread'
      - 'ThreadHideFromDebugger'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-Process | Where Name -like "*debug*"'
      - 'Get-WmiObject Win32_Process | Where Name -like "*debug*"'
      - 'Test-Path "*debug*"'
      - '[Environment]::TickCount'
      - 'Stopwatch'
  selection_processes:
    EventID: 1
    CommandLine|contains:
      - 'tasklist | findstr debug'
      - 'wmic process get name | findstr debug'
      - 'query process'
      - 'tlist'
  debugger_names:
    CommandLine|contains:
      - 'windbg'
      - 'x64dbg'
      - 'ollydbg'
      - 'ida'
      - 'ghidra'
      - 'cheat engine'
      - 'processhacker'
      - 'process monitor'
      - 'regmon'
      - 'filemon'
  condition: (selection_apis or selection_powershell or selection_processes) and debugger_names
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - Legitimate debugging sessions
  - Development tools
  - System monitoring utilities
level: medium
tags:
  - attack.defense-evasion
  - attack.t1622
  - sysmon
  - windows
`,Yl=`---
title: Debugger Evasion Indicators in Command Line or ScriptBlock
id: 2f8adbb1-1331-4c13-9d90-0e6a4a2bd1c1
status: experimental
description: Detect common anti-debug techniques including IsDebuggerPresent/CheckRemoteDebuggerPresent strings, anti-debug flags, or tooling checks.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1622/
tags:
  - attack.t1622
  - tactic.defense-evasion
  - platform:windows
  - technique:T1622
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  api_strings:
    EventID: 1
    CommandLine|contains:
      - "IsDebuggerPresent"
      - "CheckRemoteDebuggerPresent"
      - "NtQueryInformationProcess"
      - "OutputDebugString"
  tool_checks:
    EventID: 1
    CommandLine|contains:
      - "ollydbg"
      - "x64dbg"
      - "windbg"
      - "scylla_hide"
      - "procmon"
  powershell_blocks:
    EventID: 4104
    ScriptBlockText|contains:
      - "IsDebuggerPresent"
      - "CheckRemoteDebuggerPresent"
  condition: api_strings or tool_checks or powershell_blocks
falsepositives:
  - Developers and reverse engineers testing applications; security research hosts.
level: high
`,Zl=`---
title: Exception Handler Anti-Debug Checks
id: e1f2g3h4-i5j6-7890-abcd-444444444444
status: experimental
description: Detects exception handler debugger checks
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'SetUnhandledExceptionFilter'
      - 'AddVectoredExceptionHandler'
      - 'RaiseException'
      - 'UnhandledExceptionFilter'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1622
`,Jl=`---
title: Hardware Breakpoint Detection
id: e1f2g3h4-i5j6-7890-abcd-222222222222
status: experimental
description: Detects hardware breakpoint detection techniques
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'GetThreadContext'
      - 'SetThreadContext'
      - 'Dr0'
      - 'Dr1'
      - 'Dr2'
      - 'Dr3'
      - 'Dr6'
      - 'Dr7'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1622
`,Xl=`---
title: Memory Protection Anti-Debug Checks
id: e1f2g3h4-i5j6-7890-abcd-555555555555
status: experimental
description: Detects memory protection debugger checks
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'VirtualProtect'
      - 'VirtualQuery'
      - 'NtProtectVirtualMemory'
      - 'NtQueryVirtualMemory'
      - 'PAGE_GUARD'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1622
`,ed=`---
title: Module loads of debugging libraries from user-writable paths
id: b5e6f708-1234-5678-9abc-def012345678
status: experimental
description: >
  Detect image/module load events where common debug / debugging helper DLLs (dbghelp.dll, dbgcore.dll, vsjitdebugger.exe components) are loaded from user-writable locations (Temp,
  AppData, Downloads) — suspicious for evasion or illicit debugging helpers.
references:
  - https://attack.mitre.org/techniques/T1622/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1622
  - tactic.defense-evasion
  - platform:windows
  - technique:T1622
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_image_load:
    EventID: 7
    TargetFilename|contains:
      - "dbghelp.dll"
      - "dbgcore.dll"
      - "vsjitdebugger.exe"
  selection_path_user:
    EventID: 7
    TargetFilename|contains:
      - "\\\\AppData\\\\"
      - "\\\\Local\\\\Temp\\\\"
      - "\\\\Temp\\\\"
      - "\\\\Downloads\\\\"
  condition: selection_image_load and selection_path_user
falsepositives:
  - Portable installers or legitimate apps staging debug helpers in Temp during updates (tune with file hashes or parent process).
level: high
`,nd=`---
title: PowerShell IsDebuggerPresent or Debug API checks in ScriptBlock
id: d1a2b3c4-5d6e-7f80-1234-abcdef012345
status: experimental
description: >
  Detect PowerShell scriptblocks that reference common anti-debugging APIs or strings such as IsDebuggerPresent, CheckRemoteDebuggerPresent, OutputDebugString, or CheckRemoteDebuggerPresent.
  Attackers may call these to detect attached debuggers.
references:
  - https://attack.mitre.org/techniques/T1622/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1622
  - tactic.defense-evasion
  - platform:windows
  - technique:T1622
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection_scriptblock:
    EventID: 4104
    ScriptBlockText|contains:
      - "IsDebuggerPresent"
      - "CheckRemoteDebuggerPresent"
      - "OutputDebugString"
      - "NtQueryInformationProcess"
      - "IsProcessorFeaturePresent"
  condition: selection_scriptblock
falsepositives:
  - Developer/debug scripts, legitimate diagnostics or monitoring scripts that probe runtime.
level: high
`,td=`---
title: Process Debug Flag Checks
id: e1f2g3h4-i5j6-7890-abcd-111111111111
status: experimental
description: Detects process debug flag checks
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'NtQueryInformationProcess'
      - 'ProcessDebugPort'
      - 'ProcessDebugFlags'
      - 'ProcessDebugObjectHandle'
      - 'CheckRemoteDebuggerPresent'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1622
`,id=`---
title: ptrace/syscall or gdb invocation detected in syslog/auditd
id: f3c4d5e6-7f01-2345-6789-0abcdef12345
status: experimental
description: >
  Detect Linux host events indicating ptrace usage, gdb invocation, or auditd syscall logs for ptrace (possible debugger detection/evasion behavior).
  Monitors syslog/auditd messages for ptrace/gdb/strace/gcore related activity.
references:
  - https://attack.mitre.org/techniques/T1622/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1622
  - tactic.defense-evasion
  - platform:linux
  - technique:T1622
  - mitre_version:16.1
logsource:
  product: linux
  service: syslog
detection:
  selection_ptrace_syscall:
    Message|contains:
      - "syscall=101"       # common ptrace syscall number on x86_64 (auditd formatting may vary)
      - "ptrace("
      - "PTRACE_ATTACH"
  selection_gdb_invocation:
    Message|contains:
      - "gdb"
      - "gdbserver"
      - "gcore"
  selection_strace:
    Message|contains:
      - "strace"
  condition: selection_ptrace_syscall or selection_gdb_invocation or selection_strace
falsepositives:
  - Legitimate debugging/diagnostic activity by developers or operators; scheduled crash-dumps (gcore) during troubleshooting.
level: high
`,sd=`---
title: CommandLine contains common debugger tool names (ollydbg, x64dbg, windbg)
id: e2b3c4d5-6f70-8123-4567-fedcba987654
status: experimental
description: >
  Detect process creations where command line or image indicate execution of common debugger tools or utilities used for reversing/debugging (e.g., ollydbg, x64dbg, windbg, IDA).
  Useful to identify local debugging or adversary tooling.
references:
  - https://attack.mitre.org/techniques/T1622/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1622
  - tactic.defense-evasion
  - platform:windows
  - technique:T1622
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_proc_create:
    EventID: 1
    CommandLine|contains:
      - "ollydbg"
      - "x64dbg"
      - "windbg"
      - "idaq"
      - "ida64"
      - "scylla"
      - "scylla_x64"
      - "dbgview"
  selection_image:
    EventID: 1
    Image|endswith:
      - '\\ollydbg.exe'
      - '\\x64dbg.exe'
      - '\\windbg.exe'
      - '\\idaq.exe'
      - '\\ida64.exe'
  condition: selection_proc_create or selection_image
falsepositives:
  - Legitimate reverse-engineering or debugging performed by developers and security researchers.
level: medium
`,od=`---
title: Timing Attack Anti-Debug Detection
id: e1f2g3h4-i5j6-7890-abcd-333333333333
status: experimental
description: Detects timing-based debugger detection
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'rdtsc'
      - 'QueryPerformanceFrequency'
      - 'QueryPerformanceCounter'
      - 'GetSystemTime'
      - 'GetLocalTime'
  condition: selection
tags:
  - attack.defense-evasion
  - attack.t1622
`,ad=`---
title: Zeek HTTP logs - download or user-agent indicative of debugger tools
id: a4d5e6f7-0123-4567-89ab-cdef01234567
status: experimental
description: >
  Detect HTTP downloads or user-agents that reference common debugger or reverse-engineering tool names (x64dbg, ollydbg, ida, windbg).
  Network detection of tooling acquisition can indicate active analysis or adversary tooling movement.
references:
  - https://attack.mitre.org/techniques/T1622/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1622
  - tactic.defense-evasion
  - platform:network
  - technique:T1622
  - mitre_version:16.1
logsource:
  product: network
  service: zeek
detection:
  selection_uri:
    zeek.http.uri|contains:
      - "x64dbg"
      - "ollydbg"
      - "ida"
      - "idaq"
      - "windbg"
      - "scylla"
  selection_useragent:
    zeek.http.user_agent|contains:
      - "x64dbg"
      - "ollydbg"
      - "ida"
  selection_filename:
    zeek.file.name|contains:
      - "x64dbg"
      - "ollydbg"
      - "ida"
  condition: selection_uri or selection_useragent or selection_filename
falsepositives:
  - Legitimate user downloads by analysts, students, or vendor update endpoints.
level: medium
`,cd=`---
title: Mimikatz LSASS Memory Access or Execution
id: 2b8f9c1b-7a8e-4f02-9563-7d11fa0df8aa
status: experimental
description: Detects access to lsass.exe memory or usage of common Mimikatz commands like sekurlsa or logonpasswords.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection_event:
    EventID:
      - 1
      - 10
  selection_access:
    TargetImage|endswith: '\\lsass.exe'
  selection_cmdline:
    CommandLine|contains:
      - 'sekurlsa'
      - 'logonpasswords'
  condition: selection_event and (selection_access or selection_cmdline)
fields:
  - Image
  - TargetImage
  - CommandLine
  - EventID
  - ComputerName
  - SourceProcessId
  - TargetProcessId
falsepositives:
  - Debugging tools
  - Antivirus scanners
level: high
tags:
  - attack.credential_access
  - attack.t1003.001
  - sysmon
`,rd=`---
title: Suspicious Cloud Account Logins from New Geolocations
id: 7b5c7b43-fd62-4f6d-91a8-1111aaaa1111
status: stable
description: Detects cloud logins from unusual geolocations or impossible travel patterns, possibly indicating stolen credentials or compromised cloud accounts.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1078/
logsource:
  product: azure
  service: signinlogs
detection:
  selection:
    ResultType: 0
    Location:
      - '*'
  filter_known_locations:
    Location:
      - 'United States'
      - 'Canada'
  condition: selection and not filter_known_locations
fields:
  - UserPrincipalName
  - IPAddress
  - Location
  - DeviceDetail
  - AppDisplayName
falsepositives:
  - New employee traveling
  - VPN usage
level: high
tags:
  - attack.T1078
  - attack.T1078.004
  - azure
  - cloud
  - credential.access
  - APT29
  - APT33
`,ld=`---
title: Cloud Account Credential Use from Unregistered or Inactive Devices
id: 9b3d5d64-b1f2-48f8-bb12-2222bbbb2222
status: experimental
description: Detects successful logins using valid cloud credentials from unregistered, unmanaged, or inactive devices — potentially indicating credential theft or reuse.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1078/
logsource:
  product: aws
  service: cloudtrail
detection:
  selection:
    eventName: "ConsoleLogin"
    additionalEventData.MFAUsed: "No"
    userIdentity.type: "IAMUser"
  filter_known_devices:
    sourceIPAddress:
      - '10.*'
      - '192.168.*'
  condition: selection and not filter_known_devices
fields:
  - userIdentity.userName
  - sourceIPAddress
  - eventTime
  - awsRegion
falsepositives:
  - Legacy API scripts
  - Administrator troubleshooting sessions
level: critical
tags:
  - attack.T1078
  - attack.T1078.004
  - credential-access
  - aws
  - cloud
  - APT28
  - UNC2452
`,dd=`---
title: Brute-Force SSH Attempts
id: f9c8123a-4567-4e9b-a012-abcdef123456
status: experimental
description: "Detects repeated failed SSH login attempts using Zeek logs by identifying high volumes of connection attempts with 'failed' authentication results from a single source."
references:
  - https://attack.mitre.org/techniques/T1110/001/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.credential_access
  - attack.t1110.001
logsource:
  product: zeek
  service: ssh
detection:
  selection:
    auth_success: "F"
  condition: selection
  timeframe: 5m
  threshold:
    count: 5
falsepositives:
  - Mistyped credentials by users, poor password managers, or misconfigured automation.
level: high
`,md=`---
title: Multiple Account Lockouts Detected
id: 3de5cc64-87fc-41d5-8663-d8cc0d1cb165
status: experimental
description: Detects repeated user account lockouts which may suggest password spraying or brute force attacks. Uses Windows Security Event ID 4740.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: security
  category: account_management
detection:
  selection_event:
    EventID: 4740
  condition: selection_event
fields:
  - TargetUserName
  - CallerComputerName
  - ComputerName
  - _time
falsepositives:
  - Forgotten passwords
  - Misconfigured applications
level: medium
tags:
  - attack.credential_access
  - attack.t1110
  - attack.t1110.003
  - windows
`,ud=`---
title: Repeated Failed Login Attempts
id: 4e7c2b3d-89fa-4cda-8123-abcdef123456
status: experimental
description: "Detects repeated failed SSH login attempts by monitoring syslog events containing 'Failed password for', aggregated over a short timeframe to indicate brute force activity."
references:
  - https://attack.mitre.org/techniques/T1110/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.credential_access
  - attack.t1110
logsource:
  product: linux
  service: sshd
  category: authentication
detection:
  selection:
    Message|contains:
      - "Failed password for"
  # Note: The aggregation/threshold capability may depend on the Sigma runner implementation.
  timeframe: 5m
  threshold:
    count: 5
  condition: selection
falsepositives:
  - Legitimate authentication errors due to mistyped passwords or transient network issues.
level: high
`,pd=`---
title: SSH Brute-Force Attack Detection
id: d3f6a1b2-7e3b-4c9f-82ec-abcdef123456
status: experimental
description: "Detects brute force SSH login attempts by monitoring syslog events for failed authentication attempts indicated by 'Failed password for' messages."
references:
  - https://attack.mitre.org/techniques/T1110/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.credential_access
  - attack.t1110
logsource:
  product: linux
  service: sshd
  category: authentication
detection:
  selection:
    Message|contains:
      - "Failed password for"
  condition: selection
falsepositives:
  - Legitimate authentication errors or temporary issues causing failed SSH logins.
level: high
`,gd=`---
title: Pass_the_Hash
id: 1c2f3b4d-5e6f-7890-abcd-ef1234567890
status: experimental
description: "Detects potential pass-the-hash attack by identifying network logon events using NTLM authentication in Windows Security EventID 4624 with LogonType 3."
references:
  - https://attack.mitre.org/techniques/T1550/002/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.credential_access
  - attack.t1550.002
logsource:
  product: windows
  service: security
detection:
  selection:
    EventID: 4624
    LogonType: 3
    AuthenticationPackageName: "NTLM"
  condition: selection
falsepositives:
  - Legitimate network logon activity that uses NTLM authentication.
level: high
`,_d=`---
title: Detect Scanning or IPsec Probing via Public IPs or Port 500
id: 2d8dc2ac-01f4-45be-a72d-cccf594e0155
description: Detects external IP scans or use of port 500 (commonly used for ISAKMP/IPsec VPNs), indicating reconnaissance or tunneling attempts.
status: experimental
logsource:
  category: network-connection
  product: syslog
detection:
  selection:
    src_ip|cidr:
      - "!10.0.0.0/8"
      - "!192.168.0.0/16"
      - "!172.16.0.0/12"
    condition1:
      src_ip|cidr: 137.0.0.0/16
    condition2:
      src_port: 500
    condition3:
      dest_port: 500
  condition: selection and (condition1 or condition2 or condition3)
fields:
  - _time
  - src_ip
  - dest_ip
  - src_port
  - dest_port
  - http_header
falsepositives:
  - Legitimate VPN clients using port 500
  - Monitoring services scanning external hosts
level: high
tags:
  - attack.discovery
  - attack.t1046
  - volt_typhoon
  - ipsec
  - isakmp
  - yara_compatible
metadata:
  author: Matthew Iverson
  created: 2025-04-15
  last_modified: 2025-04-15
  test_date: ""
  priority: high
  mitre_version: 16
  apt_group: Volt Typhoon
  hunting_trigger: Detects suspicious connections to non-private IPs or port 500 usage.
  mitre_tactic: Discovery
  mitre_technique: Network Service Scanning
  mitre_technique_id: T1046
  mitre_link: https://attack.mitre.org/techniques/T1046/
`,fd=`---
title: Advanced Process Enumeration and Discovery
id: h8i9j0k1-l2m3-4567-8901-234567hijklm
status: experimental
description: Detects advanced process enumeration techniques beyond basic tasklist
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_wmic:
    EventID: 1
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - 'process list'
      - 'process get'
      - 'process where'
      - 'process call'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-Process'
      - 'Get-WmiObject Win32_Process'
      - 'Get-CimInstance Win32_Process'
      - 'gwmi Win32_Process'
      - 'gcim Win32_Process'
      - 'ps'
  selection_advanced:
    EventID: 1
    CommandLine|contains:
      - 'tasklist /svc'
      - 'tasklist /m'
      - 'tasklist /v'
      - 'query process'
      - 'qprocess'
  selection_suspicious_filters:
    EventID: 1
    CommandLine|contains:
      - 'findstr /i antivirus'
      - 'findstr /i defender'
      - 'findstr /i security'
      - 'findstr /i firewall'
      - 'findstr /i monitoring'
      - 'Where-Object.*antivirus'
      - 'Where-Object.*defender'
      - 'Where-Object.*security'
      - 'where.*av'
  condition: (selection_wmic or selection_powershell or selection_advanced) and selection_suspicious_filters
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - System administration
  - Security software
  - System monitoring tools
level: medium
tags:
  - attack.discovery
  - attack.t1057
  - sysmon
  - windows
`,hd=`---
title: Linux ps/top or /proc Enumeration (syslog/audit)
id: a1057a01-1111-4c11-8a57-000000000005
status: experimental
description: Detects process discovery on Linux via ps, top in batch mode, pgrep, or reading /proc to list running processes as seen in syslog/audit logs.
references:
  - https://attack.mitre.org/techniques/T1057/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1057
  - tactic.discovery
  - platform:linux
  - technique:T1057
  - mitre_version:16.1
logsource:
  product: linux
  service: syslog
detection:
  sel_ps:
    Message|contains:
      - " ps -ef"
      - " ps aux"
      - " ps -eo"
  sel_top_batch:
    Message|contains:
      - " top -b"
      - " top -n "
  sel_procfs:
    Message|contains:
      - "/proc/*/cmdline"
      - "/proc/*/status"
      - "pgrep "
  condition: sel_ps or sel_top_batch or sel_procfs
falsepositives:
  - Routine admin diagnostics, monitoring scripts, or health checks.
level: medium
fields:
  - Message
  - Hostname
  - Time
  - Program
`,vd=`---
title: Process Memory Usage Analysis
id: h1i2j3k4-l5m6-7890-abcd-333333333333
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'tasklist /fo csv'
      - 'Get-Process | Sort WorkingSet'
      - 'wmic process get workingsetsize'
      - 'ps aux --sort=-%mem'
      - 'top -o %MEM'
      - 'htop'
      - 'free -h'
  condition: selection
tags:
  - attack.discovery
  - attack.t1057
`,yd=`---
title: Network Process Correlation Analysis
id: h1i2j3k4-l5m6-7890-abcd-555555555555
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'netstat -ano'
      - 'Get-NetTCPConnection'
      - 'ss -tulpn'
      - 'lsof -i'
      - 'netstat -tulpn'
      - 'nmap -sT -O localhost'
  condition: selection
tags:
  - attack.discovery
  - attack.t1057
`,wd=`---
title: PowerShell Get-Process or WMI/CIM Win32_Process Discovery
id: a1057a01-1111-4c11-8a57-000000000003
status: experimental
description: Detects PowerShell-based process discovery via Get-Process, Get-WmiObject Win32_Process, or Get-CimInstance Win32_Process.
references:
  - https://attack.mitre.org/techniques/T1057/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1057
  - tactic.discovery
  - platform:windows
  - technique:T1057
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  sel_scriptblock:
    EventID: 4104
    ScriptBlockText|contains:
      - "Get-Process"
      - "Get-WmiObject"
      - "Get-CimInstance"
      - "Win32_Process"
  sel_proc_create:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Get-Process"
      - "Get-WmiObject Win32_Process"
      - "Get-CimInstance Win32_Process"
  condition: sel_scriptblock or sel_proc_create
falsepositives:
  - Legitimate admin and monitoring scripts; Intune/SCCM actions.
level: medium
fields:
  - EventID
  - ScriptBlockText
  - Image
  - CommandLine
  - ParentImage
`,bd=`---
title: Process Handle Analysis
id: h1i2j3k4-l5m6-7890-abcd-444444444444
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'handle.exe'
      - 'Get-Process | Select Handles'
      - 'wmic process get handlecount'
      - 'lsof'
      - 'netstat -tulpn'
      - 'ss -tulpn'
  condition: selection
tags:
  - attack.discovery
  - attack.t1057
`,kd=`---
title: Process Tree Analysis
id: h1i2j3k4-l5m6-7890-abcd-222222222222
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'pstree'
      - 'Get-Process | Select ProcessName,Id,Parent'
      - 'wmic process get processid,parentprocessid'
      - 'tasklist /fo tree'
      - 'ps -ef --forest'
      - 'ps axjf'
  condition: selection
tags:
  - attack.discovery
  - attack.t1057
`,Sd=`---
title: Service Process Discovery
id: h1i2j3k4-l5m6-7890-abcd-111111111111
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'sc query'
      - 'Get-Service'
      - 'wmic service list'
      - 'net start'
      - 'systemctl list-units'
      - 'service --status-all'
      - 'chkconfig --list'
  condition: selection
tags:
  - attack.discovery
  - attack.t1057
`,xd=`---
title: Tasklist Process Enumeration
id: a1057a01-1111-4c11-8a57-000000000001
status: experimental
description: Detects cmd-based process discovery using tasklist with common enumeration flags (e.g., /v, /svc, /fo, /m).
references:
  - https://attack.mitre.org/techniques/T1057/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1057
  - tactic.discovery
  - platform:windows
  - technique:T1057
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_tasklist:
    EventID: 1
    Image|endswith: '\\tasklist.exe'
  selection_cmdline:
    EventID: 1
    CommandLine|contains:
      - "tasklist"
      - "tasklist /v"
      - "tasklist /svc"
      - "tasklist /fo"
      - "tasklist /m"
  condition: selection_tasklist or selection_cmdline
falsepositives:
  - Administrator troubleshooting or inventory scripts.
level: medium
fields:
  - EventID
  - Image
  - CommandLine
  - ParentImage
  - User
`,Dd=`---
title: WMI Activity - Win32_Process Query
id: a1057a01-1111-4c11-8a57-000000000004
status: experimental
description: Detects WMI queries against Win32_Process in the WMI-Activity Operational log (remote or local process discovery).
references:
  - https://attack.mitre.org/techniques/T1057/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1057
  - tactic.discovery
  - platform:windows
  - technique:T1057
  - mitre_version:16.1
logsource:
  product: windows
  service: wmi
detection:
  sel_query:
    EventID: 5857
    Query|contains:
      - "Select * from Win32_Process"
      - "select Name,ProcessId from Win32_Process"
  sel_consumer:
    EventID: 5858
    Consumer|contains: "Win32_Process"
  condition: sel_query or sel_consumer
falsepositives:
  - Enterprise management tooling performing inventory via WMI.
level: high
fields:
  - EventID
  - User
  - Computer
  - Query
  - Operation
`,Id=`---
title: WMIC Process List or Get
id: a1057a01-1111-4c11-8a57-000000000002
status: experimental
description: Detects WMIC usage to enumerate processes (e.g., 'wmic process list', 'wmic process get').
references:
  - https://attack.mitre.org/techniques/T1057/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1057
  - tactic.discovery
  - platform:windows
  - technique:T1057
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  sel_image:
    EventID: 1
    Image|endswith: '\\wmic.exe'
  sel_cmd:
    EventID: 1
    CommandLine|contains:
      - "wmic process list"
      - "wmic process get"
      - "wmic /node:"
  condition: sel_image and sel_cmd
falsepositives:
  - Asset inventory or remote administration scripts using WMIC.
level: high
fields:
  - EventID
  - Image
  - CommandLine
  - ParentImage
  - User
`,Td=`---
title: Environment Variable Enumeration for System Discovery
id: a1b2c3d4-e5f6-7890-abcd-111111111111
status: experimental
description: Detects enumeration of environment variables for system information discovery
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_set:
    EventID: 1
    CommandLine|contains:
      - 'set'
      - 'echo %'
      - '$env:'
      - 'Get-ChildItem Env:'
      - 'dir env:'
      - 'printenv'
  selection_specific:
    EventID: 1
    CommandLine|contains:
      - '%COMPUTERNAME%'
      - '%USERNAME%'
      - '%USERDOMAIN%'
      - '%PROCESSOR_ARCHITECTURE%'
      - '%OS%'
      - '%SYSTEMROOT%'
      - '%WINDIR%'
      - '%TEMP%'
      - '%TMP%'
      - '%PATH%'
  condition: selection_set and selection_specific
fields:
  - Image
  - CommandLine
  - User
  - ComputerName
falsepositives:
  - System administration
  - Software installation
  - Batch scripts
level: low
tags:
  - attack.discovery
  - attack.t1082
  - sysmon
  - windows
`,Cd=`---
title: Hardware Information Discovery Commands
id: a1b2c3d4-e5f6-7890-abcd-333333333333
status: experimental
description: Detects commands used to discover hardware information
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_wmic:
    EventID: 1
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - 'baseboard'
      - 'bios'
      - 'cpu'
      - 'diskdrive'
      - 'memorychip'
      - 'computersystem'
      - 'systemenclosure'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-WmiObject Win32_BaseBoard'
      - 'Get-WmiObject Win32_BIOS'
      - 'Get-WmiObject Win32_Processor'
      - 'Get-WmiObject Win32_DiskDrive'
      - 'Get-WmiObject Win32_PhysicalMemory'
      - 'Get-CimInstance Win32_ComputerSystem'
  condition: selection_wmic or selection_powershell
fields:
  - Image
  - CommandLine
  - User
  - ComputerName
falsepositives:
  - System inventory
  - Hardware monitoring tools
  - IT asset management
level: low
tags:
  - attack.discovery
  - attack.t1082
  - sysmon
  - windows
`,Ed=`---
title: Network Configuration Discovery
id: a1b2c3d4-e5f6-7890-abcd-444444444444
status: experimental
description: Detects network configuration discovery commands
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_ipconfig:
    EventID: 1
    Image|endswith: '\\ipconfig.exe'
    CommandLine|contains:
      - '/all'
      - '/displaydns'
      - '/flushdns'
  selection_netsh:
    EventID: 1
    Image|endswith: '\\netsh.exe'
    CommandLine|contains:
      - 'interface'
      - 'profile'
      - 'wlan'
      - 'advfirewall'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-NetIPConfiguration'
      - 'Get-NetAdapter'
      - 'Get-DnsClientServerAddress'
      - 'Get-NetRoute'
      - 'Get-NetFirewallRule'
  condition: selection_ipconfig or selection_netsh or selection_powershell
fields:
  - Image
  - CommandLine
  - User
  - ComputerName
falsepositives:
  - Network troubleshooting
  - System administration
  - Network monitoring tools
level: low
tags:
  - attack.discovery
  - attack.t1082
  - sysmon
  - windows
`,Pd=`---
title: System Information Discovery - PowerShell Get-CimInstance / Get-WmiObject / Get-ComputerInfo
id: e0b6b3a7-3a72-49e4-9dce-4f5f2a6c9b3c
status: experimental
description: Detect PowerShell commands invoking Get-CimInstance, Get-WmiObject, Get-ComputerInfo or common WMI/Win32 class queries used to enumerate system information.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1082/
tags:
  - attack.t1082
  - tactic.discovery
  - platform:windows
logsource:
  product: windows
  service: powershell
detection:
  selection_powershell_cmdline:
    EventID: 4104
    ScriptBlockText|contains:
      - "Get-CimInstance"
      - "Get-WmiObject"
      - "Get-ComputerInfo"
      - "Win32_OperatingSystem"
      - "Win32_ComputerSystem"
      - "Win32_BIOS"
  selection_sysmon_proc:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - "Get-CimInstance"
      - "Get-WmiObject"
      - "Get-ComputerInfo"
  condition: selection_powershell_cmdline or selection_sysmon_proc
falsepositives:
  - Legitimate admin scripts and monitoring/orchestration tooling.
  - Configuration management/CMDB scanning activities.
level: high
`,Ad=`---
title: Registry System Information Queries
id: a1b2c3d4-e5f6-7890-abcd-222222222222
status: experimental
description: Detects registry queries for system information discovery
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_reg:
    EventID: 1
    Image|endswith: '\\reg.exe'
    CommandLine|contains:
      - 'query'
      - 'HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion'
      - 'HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control\\\\ComputerName'
      - 'HKLM\\\\HARDWARE\\\\DESCRIPTION\\\\System'
      - 'HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-ItemProperty'
      - 'HKLM:\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion'
      - 'HKLM:\\\\SYSTEM\\\\CurrentControlSet\\\\Control\\\\ComputerName'
      - 'Get-ComputerInfo'
      - 'Get-WmiObject Win32_OperatingSystem'
  condition: selection_reg or selection_powershell
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
falsepositives:
  - System administration
  - Software inventory tools
  - System monitoring
level: low
tags:
  - attack.discovery
  - attack.t1082
  - sysmon
  - windows
`,Ld=`---
title: System Information Discovery - systeminfo.exe Execution
id: a8f3f9d6-9b2b-4f0d-8f2c-1c2e0a9b7f01
status: experimental
description: Detect execution of systeminfo.exe which is often used by attackers to enumerate OS and patch-level information.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1082/
tags:
  - attack.t1082
  - tactic.discovery
  - platform:windows
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    Image|endswith: '\\systeminfo.exe'
  commandline_indicators:
    EventID: 1
    CommandLine|contains:
      - "systeminfo"
  condition: selection or commandline_indicators
falsepositives:
  - Routine admin or support activities (inventory scripts, helpdesk, patch management).
level: medium
`,Md=`---
title: System Version and Patch Level Discovery
id: a1b2c3d4-e5f6-7890-abcd-555555555555
status: experimental
description: Detects discovery of system version and installed patches
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_systeminfo:
    EventID: 1
    Image|endswith: '\\systeminfo.exe'
  selection_wmic_qfe:
    EventID: 1
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - 'qfe'
      - 'os get'
      - 'computersystem get'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-HotFix'
      - 'Get-WmiObject Win32_QuickFixEngineering'
      - 'Get-ComputerInfo'
      - 'Get-ItemProperty.*CurrentVersion'
      - '[System.Environment]::OSVersion'
  condition: selection_systeminfo or selection_wmic_qfe or selection_powershell
fields:
  - Image
  - CommandLine
  - User
  - ComputerName
falsepositives:
  - System administration
  - Patch management tools
  - Security assessment tools
level: low
tags:
  - attack.discovery
  - attack.t1082
  - sysmon
  - windows
`,Rd=`---
title: System Information Discovery - WMIC Queries for OS and BIOS
id: 2c9d2b34-5ba8-4c35-8f08-5f0e3d9ea8b2
status: experimental
description: Detect WMIC usage that queries OS, BIOS, or computer system information (e.g., wmic os get / wmic bios get / wmic computersystem). WMIC is commonly used by attackers for host enumeration.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1082/
tags:
  - attack.t1082
  - tactic.discovery
  - platform:windows
logsource:
  product: windows
  service: sysmon
detection:
  selection_wmic_image:
    EventID: 1
    Image|endswith: '\\wmic.exe'
  selection_wmic_cmd:
    EventID: 1
    CommandLine|contains:
      - "wmic os get"
      - "wmic bios get"
      - "wmic computersystem get"
      - "wmic csproduct get"
  condition: selection_wmic_image and selection_wmic_cmd
falsepositives:
  - Administrative discovery and asset inventory scripts that use WMIC.
level: high
`,Nd=`---
title: System Information Discovery - ipconfig / hostname / net config executions
id: 4b2c1f8e-d5a4-426f-bf7c-c1d2e3f4a5b6
status: experimental
description: Detect execution of common network/host discovery commands such as ipconfig, hostname or net config which can be used to enumerate host and network configuration.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1082/
tags:
  - attack.t1082
  - tactic.discovery
  - platform:windows
logsource:
  product: windows
  service: sysmon
detection:
  selection_network_commands:
    EventID: 1
    CommandLine|contains:
      - "ipconfig"
      - "ipconfig /all"
      - "hostname"
      - "net config"
      - "net view"
  selection_images:
    EventID: 1
    Image|endswith:
      - '\\ipconfig.exe'
      - '\\hostname.exe'
      - '\\net.exe'
  condition: selection_images or selection_network_commands
falsepositives:
  - Normal admin and user operations (e.g., troubleshooting, support sessions).
  - DHCP/client configuration tooling.
level: low
`,Fd=`---
title: System Information Discovery - reg query for ComputerName / Hardware info
id: 7f1a4d50-6a9c-4b8d-9a2f-0b3e2c4d5e6f
status: experimental
description: >
  Detect use of 'reg query' targeting keys often used to gather system identity and hardware info (ComputerName,
  SystemBiosVersion, etc.). Attackers sometimes use reg query to collect host metadata.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1082/
tags:
  - attack.t1082
  - tactic.discovery
  - platform:windows
logsource:
  product: windows
  service: sysmon
detection:
  selection_reg_image:
    EventID: 1
    Image|endswith: '\\reg.exe'
  selection_reg_keys:
    EventID: 1
    CommandLine|contains:
      - "HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control\\\\ComputerName"
      - "HKLM\\\\HARDWARE\\\\DESCRIPTION\\\\System"
      - "HKLM\\\\HARDWARE\\\\DESCRIPTION\\\\System\\\\BIOS"
      - "ComputerName"
  condition: selection_reg_image and selection_reg_keys
falsepositives:
  - Admin scripts and configuration checks.
  - Some software installers or asset collection tooling that query registry for inventory.
level: medium
`,qd=`---
title: System Information Discovery via whoami and hostname
id: a1b2c3d4-e5f6-7890-1234-567890abcdef
status: experimental
description: Detects system information discovery attempts using whoami, hostname, and similar commands
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_whoami:
    EventID: 1
    Image|endswith:
      - '\\whoami.exe'
      - '\\hostname.exe'
    CommandLine|contains:
      - 'whoami'
      - 'hostname'
      - '/all'
      - '/groups'
      - '/priv'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - '$env:username'
      - '$env:computername'
      - 'Get-WmiObject Win32_ComputerSystem'
      - '[Environment]::UserName'
      - '[Environment]::MachineName'
  condition: selection_whoami or selection_powershell
fields:
  - Image
  - CommandLine
  - User
  - ComputerName
falsepositives:
  - Legitimate system administration
  - Software installation scripts
level: low
tags:
  - attack.discovery
  - attack.t1082
  - sysmon
  - windows
`,Od=`---
title: Cmd_dir_and_where_recursive
id: 0f1a2b3c-4d5e-6f70-8a9b-0c1d2e3f4a5b
status: experimental
description: Detect Windows cmd.exe or where.exe usage with recursive file/directory enumeration flags (e.g., dir /s, where /r) often used for wide file discovery.
references:
  - https://attack.mitre.org/techniques/T1083/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1083
  - tactic.discovery
  - platform:windows
  - technique:T1083
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_dir_cmd:
    EventID: 1
    Image|endswith:
      - '\\cmd.exe'
    CommandLine|contains:
      - " dir /s"
      - " dir /b /s"
      - " dir /s /b"
      - " dir /a /s"
  selection_where:
    EventID: 1
    Image|endswith:
      - '\\where.exe'
    CommandLine|contains:
      - "where /r"
      - "where /R"
  condition: selection_dir_cmd or selection_where
falsepositives:
  - Automated inventory scripts, installers, or support sessions run by administrators.
level: medium
fields:
  - EventID
  - TimeCreated
  - Image
  - CommandLine
`,Wd=`---
title: Configuration File Discovery
id: f1g2h3i4-j5k6-7890-abcd-444444444444
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - '*.ini'
      - '*.conf'
      - '*.config'
      - '*.xml'
      - '*.json'
      - '*.yaml'
      - '*.yml'
      - 'web.config'
      - 'app.config'
      - '.htaccess'
      - '.env'
  condition: selection
tags:
  - attack.discovery
  - attack.t1083
`,jd=`---
title: Database File Discovery
id: f1g2h3i4-j5k6-7890-abcd-555555555555
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - '*.mdb'
      - '*.mdf'
      - '*.ldf'
      - '*.accdb'
      - '*.db'
      - '*.sqlite'
      - '*.sqlite3'
      - '*.dbf'
      - '*.frm'
      - '*.ibd'
      - '*.wal'
  condition: selection
tags:
  - attack.discovery
  - attack.t1083
`,$d=`---
title: Specific File Extension Discovery
id: f1g2h3i4-j5k6-7890-abcd-333333333333
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - '*.docx'
      - '*.xlsx'
      - '*.pptx'
      - '*.pdf'
      - '*.zip'
      - '*.rar'
      - '*.7z'
      - '*.sql'
      - '*.bak'
      - '*.key'
      - '*.pem'
      - '*.p12'
      - '*.pfx'
  condition: selection
tags:
  - attack.discovery
  - attack.t1083
`,Ud=`---
title: File and Directory Discovery Commands (dir /s, where /r, Get-ChildItem -Recurse)
id: 7b6f2a40-9c9f-4a4b-92ad-8f13a0d7c1a2
status: experimental
description: Detect enumeration of files/folders using recursive or wide-scope discovery commands that adversaries use to locate data of interest.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1083/
tags:
  - attack.t1083
  - tactic.discovery
  - platform:windows
  - technique:T1083
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  cmd_dir:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - " dir "
      - " dir /s"
      - " dir /b"
  where_cmd:
    EventID: 1
    Image|endswith:
      - '\\cmd.exe'
      - '\\where.exe'
    CommandLine|contains:
      - "where /r "
  powershell_gci:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Get-ChildItem -Recurse"
      - "gci -Recurse"
      - "Get-ChildItem -Path"
  condition: cmd_dir or where_cmd or powershell_gci
falsepositives:
  - Routine admin scripts, inventory tools, backup/indexing utilities.
level: medium
`,zd=`---
title: Find_and_ls_recursive_unix_syslog
id: 2b3c4d5e-6f70-8192-0a1b-2c3d4e5f6a7b
status: experimental
description: Detect Unix/Linux file and directory discovery via auditd/syslog commands such as find / -type f, ls -R, tree or recursive locate usage recorded in syslog/audit.
references:
  - https://attack.mitre.org/techniques/T1083/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1083
  - tactic.discovery
  - platform:linux
  - technique:T1083
  - mitre_version:16.1
logsource:
  product: linux
  service: syslog
detection:
  selection_find:
    Message|contains:
      - "find / -type f"
      - "find / -name"
      - "find . -type f -name"
  selection_ls:
    Message|contains:
      - "ls -R"
      - "ls -laR"
      - "tree "
  selection_locate_updatedb:
    Message|contains:
      - "updatedb"
      - "locate "
  condition: selection_find or selection_ls or selection_locate_updatedb
falsepositives:
  - System administration tasks, backup validation, or sysadmin inventory commands.
level: medium
fields:
  - Message
  - Time
  - Hostname
`,Bd=`---
title: Hidden File and Folder Discovery
id: f1g2h3i4-j5k6-7890-abcd-111111111111
status: experimental
description: Detects discovery of hidden files and folders
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'dir /ah'
      - 'dir /a:h'
      - 'attrib +h'
      - 'Get-ChildItem -Force'
      - 'Get-ChildItem -Hidden'
      - 'ls -la'
      - 'find . -name ".*"'
  condition: selection
tags:
  - attack.discovery
  - attack.t1083
`,Hd=`---
title: Large File Discovery
id: f1g2h3i4-j5k6-7890-abcd-222222222222
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'forfiles /s /m *.* /c "cmd /c if @fsize gtr 1000000'
      - 'Get-ChildItem -Recurse | Where-Object {$_.Length -gt'
      - 'find . -size +'
      - 'du -h | grep G'
  condition: selection
tags:
  - attack.discovery
  - attack.t1083
`,Gd=`---
title: PowerShell_Get-ChildItem_Recurse
id: 1a2b3c4d-5e6f-7081-9a0b-1c2d3e4f5a6b
status: experimental
description: Detect PowerShell recursive file and directory enumeration (Get-ChildItem -Recurse, gci -Recurse, Get-ChildItem -File) commonly used by attackers to locate sensitive files.
references:
  - https://attack.mitre.org/techniques/T1083/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1083
  - tactic.discovery
  - platform:windows
  - technique:T1083
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection_scriptblock:
    EventID: 4104
    ScriptBlockText|contains|all:
      - "Get-ChildItem"
      - "-Recurse"
  selection_cmdline:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Get-ChildItem -Recurse"
      - "gci -Recurse"
      - "Get-ChildItem -Path * -Recurse"
  condition: selection_scriptblock or selection_cmdline
falsepositives:
  - Backup scripts, file indexing, search and inventory tools used by IT teams.
level: high
fields:
  - EventID
  - ScriptBlockText
  - Image
  - CommandLine
`,Vd=`---
title: Suspicious_File_Enumeration_Tools
id: 4d5e6f70-8192-0a1b-2c3d-4e5f6a7b8c9d
status: experimental
description: >
  Detect execution of common file-enumeration or bulk-copying utilities and commands that indicate broad file/directory discovery
  (robocopy, xcopy, tree, dirb/dirsearch) across Windows and Unix telemetry.
references:
  - https://attack.mitre.org/techniques/T1083/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1083
  - tactic.discovery
  - platform:cross-platform
  - technique:T1083
  - mitre_version:16.1
logsource:
  product: cross-platform
  service: sysmon
detection:
  selection_windows_tools:
    EventID: 1
    CommandLine|contains:
      - "robocopy"
      - "xcopy "
      - "tree "
      - "dir /s"
  selection_unix_tools:
    EventID: 1
    CommandLine|contains:
      - "dirb "
      - "dirsearch"
      - "find "
      - "rsync -av"
  condition: selection_windows_tools or selection_unix_tools
falsepositives:
  - Legitimate backup, sync, or inventory operations executed by IT or automated tooling.
level: medium
fields:
  - EventID
  - TimeCreated
  - Image
  - CommandLine
`,Kd=`---
title: Suspicious File and Directory Search Commands
id: f6g7h8i9-j0k1-2345-6789-012345fghijk
status: experimental
description: Detects suspicious file and directory enumeration commands often used by attackers
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_dir:
    EventID: 1
    Image|endswith:
      - '\\cmd.exe'
      - '\\dir.exe'
    CommandLine|contains:
      - 'dir /s'
      - 'dir /a'
      - 'dir /b'
      - 'dir *.txt'
      - 'dir *.doc'
      - 'dir *.pdf'
      - 'dir *.xls'
      - 'dir *.ppt'
      - 'dir *password*'
      - 'dir *config*'
      - 'dir *secret*'
      - 'dir *backup*'
  selection_where:
    EventID: 1
    Image|endswith: '\\where.exe'
    CommandLine|contains:
      - 'where /r'
      - 'where *.exe'
      - 'where *.bat'
      - 'where *.ps1'
  selection_findstr:
    EventID: 1
    Image|endswith:
      - '\\findstr.exe'
      - '\\find.exe'
    CommandLine|contains:
      - '/s'
      - '/i password'
      - '/i admin'
      - '/i login'
      - '/i secret'
      - '/i key'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-ChildItem -Recurse'
      - 'gci -r'
      - 'ls -r'
      - 'dir -r'
      - 'Select-String'
      - 'Get-Content | Select-String'
  sensitive_paths:
    CommandLine|contains:
      - 'C:\\Users'
      - 'C:\\Windows\\System32'
      - 'C:\\Program Files'
      - 'C:\\ProgramData'
      - '%USERPROFILE%'
      - '%APPDATA%'
  condition: (selection_dir or selection_where or selection_findstr or selection_powershell) and sensitive_paths
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - System administration tasks
  - Software installation
  - Backup scripts
level: low
tags:
  - attack.discovery
  - attack.t1083
  - sysmon
  - windows
`,Qd=`---
title: WebDAV_PROPFIND_Directory_Enumeration_Zeek
id: 3c4d5e6f-7081-92a0-b1c2-3d4e5f6a7b8c
status: experimental
description: >
  Detect WebDAV/HTTP directory enumeration via PROPFIND requests and directory traversal-like URIs (Depth header, PROPFIND method)
  observed in Zeek/HTTP logs indicating remote directory discovery.
references:
  - https://attack.mitre.org/techniques/T1083/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1083
  - tactic.discovery
  - platform:network
  - technique:T1083
  - mitre_version:16.1
logsource:
  product: network
  service: zeek
detection:
  selection_propfind:
    zeek.http.method|contains:
      - "PROPFIND"
  selection_depth_header:
    zeek.http.headers|contains:
      - "Depth: 1"
      - "Depth: infinity"
  selection_path_pattern:
    zeek.http.uri|matches:
      - "^/.*(/|%2F).*"   # URIs containing directory-like patterns (basic)
  condition: selection_propfind and selection_depth_header
falsepositives:
  - Legitimate WebDAV clients and sync tools (SharePoint, Nextcloud, DAV mounts). Consider allowing known sync servers.
level: medium
fields:
  - zeek.http.method
  - zeek.http.uri
  - zeek.http.headers
`,Yd=`---
title: System Boot Time Discovery
id: g1h2i3j4-k5l6-7890-abcd-555555555555
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'systeminfo | findstr /i "boot time"'
      - 'Get-CimInstance Win32_OperatingSystem | Select LastBootUpTime'
      - 'uptime'
      - 'who -b'
      - 'last reboot'
      - '/proc/uptime'
      - 'sysctl kern.boottime'
  condition: selection
tags:
  - attack.discovery
  - attack.t1124
`,Zd=`---
title: Event Log Time Analysis
id: g1h2i3j4-k5l6-7890-abcd-444444444444
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'wevtutil qe'
      - 'Get-WinEvent | Sort TimeCreated'
      - 'Get-EventLog | Sort TimeGenerated'
      - 'journalctl --since'
      - 'tail -f /var/log'
      - 'grep -i "$(date"'
  condition: selection
tags:
  - attack.discovery
  - attack.t1124
`,Jd=`---
title: NTP Configuration Discovery
id: g1h2i3j4-k5l6-7890-abcd-111111111111
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'w32tm /query /configuration'
      - 'w32tm /query /source'
      - 'w32tm /query /peers'
      - 'w32tm /query /status'
      - 'reg query HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Services\\\\W32Time'
      - 'Get-ItemProperty.*W32Time'
      - 'ntpq -p'
      - 'chrony sources'
  condition: selection
tags:
  - attack.discovery
  - attack.t1124
`,Xd=`---
title: PowerShell Get-Date or Get-TimeZone usage
id: 3b4c5d6e-7f80-9012-3456-7890abcdef12
status: experimental
description: Detects PowerShell usage that queries system time, timezone, or UTC time (Get-Date, Get-TimeZone, Get-Culture) which may be used for time discovery or time-based evasion.
references:
  - https://attack.mitre.org/techniques/T1124/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1124
  - tactic.discovery
  - platform:windows
  - technique:T1124
  - mitre_version:16.1
logsource:
  product: windows
  service: powershell
detection:
  selection_scriptblock:
    EventID: 4104
    ScriptBlockText|contains:
      - "Get-Date"
      - "Get-TimeZone"
      - "Get-Culture"
      - "Get-Uptime"
      - "Get-Date -UFormat"
  selection_proc:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Get-Date"
      - "Get-TimeZone"
  condition: selection_scriptblock or selection_proc
falsepositives:
  - Legitimate scripts that log time, schedule tasks, or perform timestamping for monitoring/automation.
level: low
fields:
  - EventID
  - ScriptBlockText
  - Image
  - CommandLine
`,em=`---
title: Regional Settings and Locale Discovery
id: g1h2i3j4-k5l6-7890-abcd-333333333333
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'systeminfo | findstr /i "time zone"'
      - 'Get-WinSystemLocale'
      - 'Get-Culture'
      - 'reg query "HKCU\\\\Control Panel\\\\International"'
      - 'locale'
      - 'timedatectl'
      - 'localectl'
  condition: selection
tags:
  - attack.discovery
  - attack.t1124
`,nm=`---
title: System Clock Enumeration
id: g1h2i3j4-k5l6-7890-abcd-222222222222
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'GetSystemTime'
      - 'GetLocalTime'
      - 'GetTickCount'
      - 'QueryPerformanceCounter'
      - '[DateTime]::Now'
      - 'Get-Date -Format'
      - 'date +%s'
      - 'clock_gettime'
  condition: selection
tags:
  - attack.discovery
  - attack.t1124
`,tm=`---
title: System Time Discovery via tzutil, w32tm, date/time, or Get-Date
id: e4f0cd3e-9a8d-4c2a-a5d0-b2b1c3d4e5f6
status: experimental
description: Detect commands that query local system time or timezone, often used prior to time-based evasion or scheduling.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1124/
tags:
  - attack.t1124
  - tactic.discovery
  - platform:windows
  - technique:T1124
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  tzutil:
    EventID: 1
    Image|endswith: '\\tzutil.exe'
    CommandLine|contains:
      - " /g"
      - " /s "
  w32tm:
    EventID: 1
    Image|endswith: '\\w32tm.exe'
    CommandLine|contains:
      - "/query"
      - "/status"
      - "/configuration"
  date_time_cmd:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - " time /t"
      - " date /t"
  ps_getdate:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Get-Date"
  condition: tzutil or w32tm or date_time_cmd or ps_getdate
falsepositives:
  - Normal administrative checks, scripts querying time or timezone.
level: low
`,im=`---
title: System Time and Timezone Discovery Commands
id: g7h8i9j0-k1l2-3456-7890-123456ghijkl
status: experimental
description: Detects commands used to discover system time, timezone, and date information
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_time:
    EventID: 1
    Image|endswith:
      - '\\time.exe'
      - '\\date.exe'
      - '\\tzutil.exe'
      - '\\w32tm.exe'
    CommandLine|contains:
      - 'time /t'
      - 'date /t'
      - 'tzutil /g'
      - 'tzutil /l'
      - 'w32tm /query'
      - 'w32tm /stripchart'
  selection_net_time:
    EventID: 1
    Image|endswith: '\\net.exe'
    CommandLine|contains:
      - 'net time'
      - 'net view'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-Date'
      - 'Get-TimeZone'
      - '[DateTime]::Now'
      - '[DateTime]::UtcNow'
      - '[TimeZone]::CurrentTimeZone'
      - 'Get-WmiObject Win32_TimeZone'
      - 'Get-WmiObject Win32_LocalTime'
      - 'Get-CimInstance Win32_TimeZone'
  selection_wmic:
    EventID: 1
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - 'wmic timezone'
      - 'wmic os get localdatetime'
      - 'wmic os get lastbootuptime'
  condition: selection_time or selection_net_time or selection_powershell or selection_wmic
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - System administration scripts
  - Time synchronization tools
  - Backup and logging scripts
level: low
tags:
  - attack.discovery
  - attack.t1124
  - sysmon
  - windows
`,sm=`---
title: Zeek NTP or UDP 123 traffic indicating external time queries
id: 4c5d6e7f-8012-3456-7890-abcdef123456
status: experimental
description: Detects NTP (UDP/123) requests or responses observed in Zeek logs which may indicate a host querying external time sources for time discovery or sync changes.
references:
  - https://attack.mitre.org/techniques/T1124/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1124
  - tactic.discovery
  - platform:network
  - technique:T1124
  - mitre_version:16.1
logsource:
  product: network
  service: zeek
detection:
  selection_ntp_port:
    zeek.conn.service|contains: "ntp"
  selection_udp123:
    zeek.udp.dport:
      - 123
    zeek.udp.sport:
      - 123
  selection_ntp_req:
    zeek.ntp.request|exists: true
  condition: selection_ntp_port or selection_udp123 or selection_ntp_req
falsepositives:
  - Legitimate NTP synchronization with corporate or public NTP servers (domain controllers, NTP pools).
level: low
fields:
  - zeek.id
  - zeek.orig_h
  - zeek.resp_h
  - zeek.udp.sport
  - zeek.udp.dport
`,om=`---
title: timedatectl hwclock or chronyc usage on Linux
id: 5d6e7f80-9123-4567-89ab-cdef01234567
status: experimental
description: >
  Detects Linux commands that query or set system time and NTP clients (timedatectl, hwclock, chronyc, ntpq) recorded in syslog or audit
  logs indicating system time discovery or manipulation.
references:
  - https://attack.mitre.org/techniques/T1124/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1124
  - tactic.discovery
  - platform:linux
  - technique:T1124
  - mitre_version:16.1
logsource:
  product: linux
  service: syslog
detection:
  selection_timedatectl:
    Message|contains:
      - "timedatectl"
      - "timedatectl status"
  selection_hwclock:
    Message|contains:
      - "hwclock"
      - "hwclock --show"
  selection_chronyc_ntpq:
    Message|contains:
      - "chronyc"
      - "ntpq"
      - "chronyc tracking"
  condition: selection_timedatectl or selection_hwclock or selection_chronyc_ntpq
falsepositives:
  - System administration and NTP troubleshooting or scheduled sync checks.
level: low
fields:
  - Message
  - Time
  - Hostname
`,am=`---
title: tzutil query timezone
id: 1f2e3d4c-5b6a-7890-ab12-cdef34567890
status: experimental
description: Detects use of tzutil to query or set the system timezone which may indicate system time discovery or manipulation.
references:
  - https://attack.mitre.org/techniques/T1124/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1124
  - tactic.discovery
  - platform:windows
  - technique:T1124
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    Image|endswith: '\\tzutil.exe'
    CommandLine|contains:
      - " /g"
      - " /s "
      - " /l"
  condition: selection
falsepositives:
  - Legitimate admin scripts or processes checking timezone for configuration or troubleshooting.
level: low
fields:
  - EventID
  - TimeCreated
  - Image
  - CommandLine
`,cm=`---
title: w32tm query or status checks
id: 2a3b4c5d-6e7f-8901-2345-6789abcdef01
status: experimental
description: Detects w32tm queries and status commands used to inspect Windows time service configuration and synchronization state.
references:
  - https://attack.mitre.org/techniques/T1124/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1124
  - tactic.discovery
  - platform:windows
  - technique:T1124
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  selection_w32tm:
    EventID: 1
    Image|endswith: '\\w32tm.exe'
    CommandLine|contains:
      - "/query"
      - "/status"
      - "/stripchart"
  selection_cmdline:
    EventID: 1
    Image|endswith: '\\cmd.exe'
    CommandLine|contains:
      - "w32tm /query"
  condition: selection_w32tm or selection_cmdline
falsepositives:
  - Time synchronization troubleshooting or monitoring by administrators.
level: medium
fields:
  - EventID
  - Image
  - CommandLine
`,rm=`---
title: RDP Lateral Movement Detection
id: b6f2e9d4-8c7a-4e3f-a1b5-9e2f8d7c4a6b
status: experimental
description: >-
  Detects lateral movement via RDP by monitoring for RDP connections between
  internal hosts, suspicious RDP logon patterns, or unauthorized remote
  desktop access that may indicate attacker movement through the network.
references:
  - https://attack.mitre.org/techniques/T1021/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1021.001
  - rdp
  - remote_desktop
  - windows
logsource:
  product: windows
  service: security
detection:
  rdp_logon:
    EventID: 4624
    LogonType: 10
    AuthenticationPackageName: 'Negotiate'
  internal_source:
    IpAddress|startswith:
      - '10.'
      - '172.'
      - '192.168.'
  unusual_account:
    TargetUserName|contains:
      - 'admin'
      - 'service'
      - 'test'
  condition: rdp_logon and internal_source and unusual_account
falsepositives:
  - Legitimate administrative remote access
  - Authorized IT support activities
level: medium
`,lm=`---
title: SMB Admin Share Access for Lateral Movement
id: c8e5f3a7-9d2b-4e6f-a4c1-8f3e9d2c7a5b
status: experimental
description: >-
  Detects lateral movement via SMB admin shares by monitoring for access
  to administrative shares (C$, ADMIN$, IPC$) from remote hosts that may
  indicate attacker attempts to move laterally through the network.
references:
  - https://attack.mitre.org/techniques/T1021/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1021.002
  - smb
  - admin_shares
  - windows
logsource:
  product: windows
  service: security
detection:
  admin_share_access:
    EventID: 5140
    ShareName|endswith:
      - 'C$'
      - 'ADMIN$'
      - 'IPC$'
  remote_access:
    IpAddress|startswith:
      - '10.'
      - '172.'
      - '192.168.'
    SubjectUserName|contains:
      - 'admin'
      - 'service'
  condition: admin_share_access and remote_access
falsepositives:
  - Legitimate administrative tools
  - System backup operations
level: medium
`,dm=`---
title: DCOM Lateral Movement Detection
id: d7a4f8e2-6c9b-4e3f-a5d1-9f4e8d3c6a7b
status: experimental
description: >-
  Detects lateral movement via Distributed Component Object Model (DCOM) by
  monitoring for suspicious DCOM object creation, remote DCOM execution, or
  unusual DCOM service activities that may indicate attacker abuse.
references:
  - https://attack.mitre.org/techniques/T1021/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1021.003
  - dcom
  - com
  - windows
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  dcom_execution:
    Image|endswith: '\\svchost.exe'
    CommandLine|contains:
      - '-k DcomLaunch'
      - 'rpcss'
  wmi_dcom:
    Image|endswith: '\\wmiprvse.exe'
    ParentImage|endswith: '\\svchost.exe'
  remote_dcom:
    Image|endswith: '\\dllhost.exe'
    CommandLine|contains:
      - '/Processid:'
      - 'CLSID'
  condition: dcom_execution or wmi_dcom or remote_dcom
falsepositives:
  - Normal DCOM service operations
  - Legitimate remote management tools
level: medium
`,mm=`---
title: SSH Lateral Movement Detection
id: e9b6f2a8-3d5c-4e7f-a2b6-8f3e9d5c2a8b
status: experimental
description: >-
  Detects lateral movement via SSH by monitoring for SSH connections between
  internal hosts, suspicious authentication patterns, or unusual SSH session
  activities that may indicate attacker movement through Linux/Unix systems.
references:
  - https://attack.mitre.org/techniques/T1021/004/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1021.004
  - ssh
  - linux
  - unix
logsource:
  product: linux
  service: sshd
detection:
  ssh_login:
    program: 'sshd'
    message|contains:
      - 'Accepted password'
      - 'Accepted publickey'
  internal_connection:
    src_ip|startswith:
      - '10.'
      - '172.'
      - '192.168.'
  suspicious_user:
    user|contains:
      - 'root'
      - 'admin'
      - 'service'
      - 'test'
  condition: ssh_login and internal_connection and suspicious_user
falsepositives:
  - Legitimate administrative SSH access
  - Automated system management
level: medium
`,um=`---
title: VNC Remote Access for Lateral Movement
id: f2c7e4a9-8b6d-4e5f-a3c2-9f7e8d6c4a9b
status: experimental
description: >-
  Detects lateral movement via VNC by monitoring for VNC connections, remote
  desktop sharing sessions, or suspicious VNC server activities that may
  indicate unauthorized remote access for lateral movement.
references:
  - https://attack.mitre.org/techniques/T1021/005/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1021.005
  - vnc
  - remote_access
  - screen_sharing
logsource:
  product: zeek
  service: conn
detection:
  vnc_port:
    id.resp_p|contains:
      - 5900
      - 5901
      - 5902
      - 5903
  internal_connection:
    id.orig_h|startswith:
      - '10.'
      - '172.'
      - '192.168.'
    id.resp_h|startswith:
      - '10.'
      - '172.'
      - '192.168.'
  established_connection:
    conn_state: 'SF'
    proto: 'tcp'
  condition: vnc_port and internal_connection and established_connection
falsepositives:
  - Legitimate VNC remote support
  - Authorized screen sharing applications
level: medium
`,pm=`---
title: Windows Remote Management Lateral Movement
id: a8d5e3f7-9c4b-4e6f-a2d8-8f5e9c4d7a3b
status: experimental
description: >-
  Detects lateral movement via Windows Remote Management (WinRM) by monitoring
  for WinRM connections, PowerShell remoting sessions, or suspicious remote
  command execution that may indicate attacker lateral movement.
references:
  - https://attack.mitre.org/techniques/T1021/006/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1021.006
  - winrm
  - powershell_remoting
  - windows
logsource:
  product: windows
  service: microsoft-windows-winrm
detection:
  winrm_connection:
    EventID: 91
    User|contains:
      - 'admin'
      - 'service'
  remote_shell:
    EventID: 169
    ProcessName|contains:
      - 'wsmprovhost.exe'
      - 'powershell.exe'
  powershell_remoting:
    EventID: 134
    ClientIP|startswith:
      - '10.'
      - '172.'
      - '192.168.'
  condition: winrm_connection or remote_shell or powershell_remoting
falsepositives:
  - Legitimate PowerShell remoting
  - Authorized remote administration
level: medium
`,gm=`---
title: Abnormal Host-to-Host Communication Patterns
id: a123bc45-6789-4def-9012-abcdef987654
status: experimental
description: >
  "Detects abnormal internal host-to-host communication using Zeek conn logs, such as previously unseen IP pairs, unexpected protocols, or new lateral
  connections that may indicate reconnaissance or lateral movement."
references:
  - https://attack.mitre.org/techniques/T1021/
  - https://attack.mitre.org/techniques/T1049/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.lateral_movement
  - attack.discovery
  - attack.t1021
  - attack.t1049
logsource:
  product: zeek
  service: conn
detection:
  internal_pair:
    id.orig_h|startswith: "192.168."
    id.resp_h|startswith: "192.168."
  uncommon_service:
    service|contains:
      - "rdp"
      - "winrm"
      - "dcerpc"
      - "msrpc"
  condition: internal_pair AND uncommon_service
falsepositives:
  - New software deployments or administrative connections from IT or monitoring systems.
level: high
`,_m=`---
title: Lateral Movement Activity Analysis
id: e123fa45-6789-4dce-91ab-abcdef987654
status: experimental
description: >
  "Detects potential lateral movement by identifying unexpected internal connections using protocols such as RDP, SMB, SSH, and WinRM.
  This rule uses Zeek conn logs to analyze host-to-host activity across the internal network."
references:
  - https://attack.mitre.org/techniques/T1021/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.lateral_movement
  - attack.t1021
logsource:
  product: zeek
  service: conn
detection:
  selection:
    service|contains:
      - "smb"
      - "rdp"
      - "ssh"
      - "winrm"
    id_orig_h|startswith: "192.168."  # internal IP range (customize for your network)
    id_resp_h|startswith: "192.168."
  condition: selection
falsepositives:
  - Normal administrative operations or backups using remote management protocols.
level: high
`,fm=`---
title: Windows Remote Management Service Abuse
id: a4c8f7e3-9b5d-4e6f-a4c8-7f3e9b5d6a4b
status: experimental
description: >-
  Detects abuse of Windows Remote Management service by monitoring for
  suspicious WinRM activities, unauthorized remote PowerShell sessions, or
  malicious use of remote management capabilities for lateral movement.
references:
  - https://attack.mitre.org/techniques/T1028/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1028
  - winrm
  - remote_management
  - powershell
logsource:
  product: windows
  service: microsoft-windows-winrm
detection:
  winrm_shell:
    EventID: 142
    ShellId|contains: 'Microsoft.PowerShell'
  remote_command:
    EventID: 143
    CommandLine|contains:
      - 'Invoke-Command'
      - 'Enter-PSSession'
  suspicious_user:
    EventID: 91
    User|contains:
      - 'admin'
      - 'service'
      - 'guest'
  condition: winrm_shell or remote_command or suspicious_user
falsepositives:
  - Legitimate PowerShell remoting
  - Authorized remote administration
level: medium
`,hm=`---
title: Data Access from Network Shared Drives
id: f3a7e9c5-8b6d-4e2f-f3a7-9e5c8b6d2f3b
status: experimental
description: >-
  Detects suspicious data access from network shared drives by monitoring
  for unusual file access patterns, bulk data retrieval, or unauthorized
  access to sensitive shared resources during lateral movement.
references:
  - https://attack.mitre.org/techniques/T1039/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.collection
  - attack.t1039
  - network_shares
  - data_access
logsource:
  product: windows
  service: security
detection:
  share_access:
    EventID: 5140
    ShareName|endswith:
      - '$'
      - 'SHARE'
      - 'DATA'
  bulk_access:
    EventID: 5145
    AccessMask: '0x120089'
    RelativeTargetName|count|gte: 10
  sensitive_files:
    EventID: 5145
    RelativeTargetName|endswith:
      - '.xlsx'
      - '.docx'
      - '.pdf'
      - '.txt'
  condition: share_access and (bulk_access or sensitive_files)
falsepositives:
  - Legitimate file server access
  - Backup operations
level: low
`,vm=`---
title: WMI Lateral Movement Detection
id: b9f6e4a3-7d8c-4e5f-a4b9-9f6e8d8c5a4b
status: experimental
description: >-
  Detects lateral movement via Windows Management Instrumentation (WMI) by
  monitoring for remote WMI execution, suspicious WMI process creation, or
  WMI event subscriptions that may indicate attacker lateral movement.
references:
  - https://attack.mitre.org/techniques/T1047/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.execution
  - attack.t1047
  - wmi
  - windows
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  wmi_execution:
    ParentImage|endswith: '\\wmiprvse.exe'
    Image|endswith:
      - '\\cmd.exe'
      - '\\powershell.exe'
      - '\\wmic.exe'
  remote_wmi:
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - '/node:'
      - 'process call create'
  wmi_provider:
    Image|endswith: '\\wmiprvse.exe'
    CommandLine|contains:
      - '-Embedding'
      - '-secured'
  condition: wmi_execution or remote_wmi or wmi_provider
falsepositives:
  - Legitimate WMI administration
  - System management tools
level: medium
`,ym=`---
title: Suspicious Use of ADMIN$ Administrative Share
id: 9a8d3f1e-7c12-45ef-8d9a-123456789abc
status: experimental
description: >
  Detects potential malicious use of the ADMIN$ share. Although ADMIN$ is a legitimate
  administrative share, adversaries may abuse it during lateral movement to remotely
  access systems. This rule searches for process creation events where the command line or
  related fields reference "ADMIN$".
references:
    - https://attack.mitre.org/techniques/T1077/
author: Matthew Iverson
date: 2025-04-08
tags:
    - attack.lateral_movement
    - attack.t1077
logsource:
    product: windows
    category: process_creation
detection:
    selection:
        CommandLine|contains: "ADMIN$"
    condition: selection
falsepositives:
    - Legitimate administrative activities and remote management tools accessing ADMIN$ for maintenance or backups.
level: medium
`,wm=`---
title: Taint Shared Content Detection
id: f6c9e4a7-8d3b-4e5f-a6f9-9e4c8d3b6a7b
status: experimental
description: >-
  Detects tainting of shared content by monitoring for malicious modifications
  to shared files, network shares, or collaborative platforms that may be
  used to spread malware or gain access to other systems.
references:
  - https://attack.mitre.org/techniques/T1080/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1080
  - shared_content
  - file_modification
  - network_share
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  shared_location:
    TargetFilename|startswith:
      - '\\\\\\'
      - 'C:\\Share\\'
      - 'C:\\Public\\'
  suspicious_extension:
    TargetFilename|endswith:
      - '.exe'
      - '.scr'
      - '.bat'
      - '.vbs'
      - '.ps1'
  document_macro:
    TargetFilename|endswith:
      - '.docm'
      - '.xlsm'
      - '.pptm'
  condition: shared_location and (suspicious_extension or document_macro)
falsepositives:
  - Legitimate shared file updates
  - Normal document collaboration
level: medium
`,bm=`---
title: Network Share Discovery for Lateral Movement
id: e9f6c4a8-7d3b-4e5f-e9f6-4c8a7d3b5e9b
status: experimental
description: >-
  Detects network share discovery activities by monitoring for share
  enumeration commands, network scanning for SMB services, or reconnaissance
  activities that may precede lateral movement attempts.
references:
  - https://attack.mitre.org/techniques/T1135/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.discovery
  - attack.t1135
  - network_shares
  - enumeration
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  share_enum:
    CommandLine|contains:
      - 'net share'
      - 'net view'
      - 'dir \\\\'
  smb_tools:
    Image|endswith:
      - '\\smbclient.exe'
      - '\\enum4linux.exe'
      - '\\nbtscan.exe'
  powershell_enum:
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Get-WmiObject'
      - 'Win32_Share'
      - 'Get-SmbShare'
  condition: share_enum or smb_tools or powershell_enum
falsepositives:
  - Legitimate network administration
  - System inventory tools
level: medium
`,km=`---
title: Remote Service Exploitation Detection
id: b8e3f6a4-9c7d-4e2f-b8e3-9f6c9d7e4a8b
status: experimental
description: >-
  Detects exploitation of remote services by monitoring for exploit attempts
  against network services, suspicious service interactions, or unusual
  network traffic patterns that may indicate remote service exploitation.
references:
  - https://attack.mitre.org/techniques/T1210/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1210
  - remote_services
  - exploitation
  - vulnerability
logsource:
  product: zeek
  service: conn
detection:
  vulnerable_ports:
    id.resp_p|contains:
      - 445
      - 135
      - 139
      - 3389
      - 1433
  exploit_attempt:
    orig_bytes|gte: 1000
    resp_bytes|lte: 100
  multiple_targets:
    id.orig_h|count|gte: 5
    duration|lte: 60
  condition: vulnerable_ports and (exploit_attempt or multiple_targets)
falsepositives:
  - Legitimate service connections
  - Network scanning tools
level: medium
`,Sm=`---
title: Exploitation for Credential Access Detection
id: d8e5f2a9-6c4b-4e7f-d8e5-2f9a6c4b7d8b
status: experimental
description: >-
  Detects exploitation attempts aimed at credential access by monitoring for
  vulnerability exploitation, credential dumping tools, or suspicious
  activities targeting credential stores during lateral movement.
references:
  - https://attack.mitre.org/techniques/T1212/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.credential_access
  - attack.t1212
  - exploitation
  - credential_dumping
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  credential_tools:
    Image|endswith:
      - '\\mimikatz.exe'
      - '\\pwdump.exe'
      - '\\procdump.exe'
  lsass_access:
    TargetImage|endswith: '\\lsass.exe'
    GrantedAccess: '0x1010'
  memory_dump:
    CommandLine|contains:
      - 'sekurlsa'
      - 'logonpasswords'
      - 'dump'
  condition: credential_tools or lsass_access or memory_dump
falsepositives:
  - Security research tools
  - Legitimate debugging activities
level: high
`,xm=`---
title: Abuse of Remote Administration Tools
id: b2cfa123-45de-6789-abcd-ef1234567890
status: experimental
description: >
  "Detects potential abuse of remote administration tools (e.g., psexec, winrs, wmic, wmiexec) from process creation events that may indicate lateral
  movement or unauthorized remote access attempts."
references:
  - https://attack.mitre.org/techniques/T1219/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.lateral_movement
  - attack.t1219
logsource:
  product: windows
  category: process_creation
detection:
  selection:
    CommandLine|contains:
      - "psexec"
      - "winrs"
      - "wmic /node:"
      - "wmiexec"
  condition: selection
falsepositives:
  - Legitimate remote administration activity by system or network administrators.
level: medium
`,Dm=`---
title: Potential Meterpreter Execution Detected
id: dcoxidm8-abcd-win1-met6-infinit3i456
status: experimental
description: >
  Detects potential Meterpreter activity by searching for the string "meterpreter"
  in process creation events. Meterpreter is a payload commonly used in
  penetration testing frameworks (e.g., Metasploit) and may indicate
  unauthorized remote control activity.
author: Matthew Iverson
date: 2025/04/08
references:
  - https://attack.mitre.org/techniques/T1219/   # MITRE ATT&CK: T1219 - Remote Access Tools
tags:
  - attack.t1219
  - attack.execution
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - meterpreter
  condition: selection
falsepositives:
  - Legitimate penetration testing or red team activities using Meterpreter.
  - Administrative or security tools that might incidentally include the keyword.
level: medium
`,Im=`---
title: Internal Spearphishing Detection
id: a7d2f9c5-6b8e-4f3a-d7a2-8f9c6b8e4a7b
status: experimental
description: >-
  Detects internal spearphishing attempts by monitoring for suspicious
  internal email communications, phishing content within the organization,
  or malicious attachments sent from compromised internal accounts.
references:
  - https://attack.mitre.org/techniques/T1534/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1534
  - internal_phishing
  - email
  - spearphishing
logsource:
  product: o365
  service: exchange
detection:
  internal_sender:
    Operation: 'Send'
    SenderDomain: '@company.com'
  suspicious_attachment:
    AttachmentExtension|contains:
      - '.exe'
      - '.scr'
      - '.bat'
      - '.vbs'
  phishing_keywords:
    Subject|contains:
      - 'urgent action required'
      - 'verify account'
      - 'click here'
      - 'security alert'
  condition: internal_sender and (suspicious_attachment or phishing_keywords)
falsepositives:
  - Legitimate internal communications
  - Security awareness training
level: medium
`,Tm=`---
title: Application Access Token Abuse
id: c9f4e7a8-5d6b-4e3f-c9f4-8e7a5d6b4c9b
status: experimental
description: >-
  Detects abuse of application access tokens by monitoring for suspicious
  token usage, token theft attempts, or unauthorized application access
  that may indicate lateral movement through application credentials.
references:
  - https://attack.mitre.org/techniques/T1550/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1550.001
  - access_token
  - application
  - credential_theft
logsource:
  product: azure
  service: auditlogs
detection:
  app_access:
    Category: 'ApplicationManagement'
    OperationName|contains:
      - 'Add application'
      - 'Update application credentials'
  token_usage:
    Category: 'SignInLogs'
    ClientAppUsed|contains:
      - 'Exchange Web Services'
      - 'Other clients'
  suspicious_scope:
    ConsentContext.IsAdminConsent: 'true'
    PermissionDisplayName|contains:
      - 'Read all'
      - 'Full access'
  condition: app_access or token_usage or suspicious_scope
falsepositives:
  - Legitimate application integrations
  - Authorized API access
level: medium
`,Cm=`---
title: Pass the Hash Attack Detection
id: d5a8f3e9-6c4b-4e7f-d5a8-9f3e6c4b7d5b
status: experimental
description: >-
  Detects pass the hash attacks by monitoring for NTLM authentication events
  with suspicious characteristics, unusual logon patterns, or authentication
  attempts that may indicate hash credential reuse.
references:
  - https://attack.mitre.org/techniques/T1550/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1550.002
  - pass_the_hash
  - ntlm
  - credential_theft
logsource:
  product: windows
  service: security
detection:
  ntlm_logon:
    EventID: 4624
    LogonType: 3
    AuthenticationPackageName: 'NTLM'
  unusual_source:
    WorkstationName|contains:
      - 'WORKSTATION'
      - 'UNKNOWN'
      - 'DESKTOP'
  no_password:
    LogonProcessName: 'NtLmSsp'
    SubStatus: '0x0'
  condition: ntlm_logon and (unusual_source or no_password)
falsepositives:
  - Legacy NTLM applications
  - Normal network authentication
level: medium
`,Em=`---
title: Pass the Ticket Attack Detection
id: e6b9f2a7-8d5c-4e4f-e6b9-7f2a8d5c4e6b
status: experimental
description: >-
  Detects pass the ticket attacks by monitoring for Kerberos authentication
  anomalies, suspicious ticket usage patterns, or unusual Kerberos events
  that may indicate ticket theft and reuse for lateral movement.
references:
  - https://attack.mitre.org/techniques/T1550/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1550.003
  - pass_the_ticket
  - kerberos
  - ticket_theft
logsource:
  product: windows
  service: security
detection:
  kerberos_logon:
    EventID: 4624
    LogonType: 3
    AuthenticationPackageName: 'Kerberos'
  unusual_ticket:
    EventID: 4769
    TicketEncryptionType: '0x17'
    IpAddress|startswith:
      - '10.'
      - '172.'
      - '192.168.'
  ticket_reuse:
    EventID: 4768
    TargetUserName|endswith: '$'
    ClientAddress: '::1'
  condition: kerberos_logon and (unusual_ticket or ticket_reuse)
falsepositives:
  - Normal Kerberos authentication
  - Service account activities
level: medium
`,Pm=`---
title: Web Session Cookie Theft Detection
id: f7c4e8a3-9d6b-4e5f-f7c4-8e3a9d6b5f7b
status: experimental
description: >-
  Detects web session cookie theft by monitoring for suspicious cookie usage,
  session hijacking attempts, or unusual web authentication patterns that
  may indicate stolen session cookies being used for lateral movement.
references:
  - https://attack.mitre.org/techniques/T1550/004/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1550.004
  - session_cookie
  - web_session
  - cookie_theft
logsource:
  product: zeek
  service: http
detection:
  session_cookie:
    cookie|contains:
      - 'PHPSESSID'
      - 'JSESSIONID'
      - 'ASP.NET_SessionId'
      - 'session'
  multiple_ips:
    cookie|count|gte: 2
    id.orig_h|count|gte: 2
  suspicious_ua:
    user_agent|contains:
      - 'curl'
      - 'wget'
      - 'python'
      - 'powershell'
  condition: session_cookie and (multiple_ips or suspicious_ua)
falsepositives:
  - Legitimate session management
  - Load balancer configurations
level: medium
`,Am=`---
title: SAML Token Abuse Detection
id: b9e6f3a2-8c5d-4e7f-b9e6-3f2a8c5d7b9b
status: experimental
description: >-
  Detects abuse of SAML tokens by monitoring for suspicious SAML assertion
  usage, token manipulation, or unauthorized access using compromised or
  forged SAML tokens for lateral movement in federated environments.
references:
  - https://attack.mitre.org/techniques/T1550/005/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1550.005
  - saml
  - federation
  - token_abuse
logsource:
  product: azure
  service: signinlogs
detection:
  saml_logon:
    AuthenticationProtocol: 'saml'
    TokenIssuerType: 'AzureAD'
  suspicious_issuer:
    TokenIssuerName|contains:
      - 'adfs'
      - 'sso'
      - 'federation'
  unusual_attributes:
    ConditionalAccessStatus: 'notApplied'
    RiskLevelAggregated: 'high'
  condition: saml_logon and (suspicious_issuer or unusual_attributes)
falsepositives:
  - Legitimate federated authentication
  - Normal SAML SSO operations
level: medium
`,Lm=`---
title: SSH Session Hijacking Detection
id: d4a9f6e8-2c7b-4e5f-a7d4-9f6e8c7b5a4b
status: experimental
description: >-
  Detects SSH session hijacking by monitoring for suspicious SSH session
  activities, connection takeovers, or unauthorized access to existing
  SSH sessions that may indicate session hijacking attempts.
references:
  - https://attack.mitre.org/techniques/T1563/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1563.001
  - ssh
  - session_hijacking
  - linux
logsource:
  product: linux
  service: sshd
detection:
  concurrent_sessions:
    program: 'sshd'
    message|contains: 'Accepted'
    user|count|gte: 2
  session_reuse:
    program: 'sshd'
    message|contains:
      - 'session opened'
      - 'session closed'
  pty_allocation:
    program: 'sshd'
    message|contains:
      - 'Allocated pty'
      - 'Released pty'
  condition: concurrent_sessions or (session_reuse and pty_allocation)
falsepositives:
  - Legitimate multiple SSH sessions
  - Normal SSH reconnections
level: medium
`,Mm=`---
title: RDP Session Hijacking Detection
id: e5b8f3a9-6d4c-4e7f-a5e8-8f3e9d4c6a5b
status: experimental
description: >-
  Detects RDP session hijacking by monitoring for suspicious RDP session
  takeovers, concurrent RDP sessions, or unauthorized access to existing
  RDP connections that may indicate session hijacking attempts.
references:
  - https://attack.mitre.org/techniques/T1563/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1563.002
  - rdp
  - session_hijacking
  - windows
logsource:
  product: windows
  service: security
detection:
  rdp_session_start:
    EventID: 4624
    LogonType: 10
  rdp_session_end:
    EventID: 4634
    LogonType: 10
  concurrent_rdp:
    EventID: 21
    SessionName|count|gte: 2
  session_takeover:
    EventID: 4778
    AccountName|contains:
      - 'admin'
      - 'service'
  condition: (rdp_session_start and rdp_session_end) or concurrent_rdp or session_takeover
falsepositives:
  - Legitimate RDP reconnections
  - Multiple authorized RDP sessions
level: medium
`,Rm=`---
title: Lateral Tool Transfer Detection
id: c3f8e7a6-9d5b-4e2f-a6c3-8f7e9d5c3a6b
status: experimental
description: >-
  Detects lateral tool transfer by monitoring for file transfers between
  internal hosts, tool deployment activities, or suspicious binary movement
  that may indicate attacker tool propagation across the network.
references:
  - https://attack.mitre.org/techniques/T1570/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1570
  - tool_transfer
  - file_transfer
  - network
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  executable_transfer:
    TargetFilename|endswith:
      - '.exe'
      - '.dll'
      - '.bat'
      - '.ps1'
    TargetFilename|startswith:
      - 'C:\\Windows\\Temp\\'
      - 'C:\\Temp\\'
      - 'C:\\Users\\Public\\'
  network_tool:
    TargetFilename|contains:
      - 'psexec'
      - 'mimikatz'
      - 'pwdump'
      - 'procdump'
  remote_source:
    ProcessName|contains:
      - 'svchost.exe'
      - 'services.exe'
  condition: executable_transfer and (network_tool or remote_source)
falsepositives:
  - Legitimate software deployment
  - System administration tools
level: medium
`,Nm=`---
title: Authentication Certificate Theft or Forgery
id: a8f5c9e4-7b2d-4e6f-a8f5-9c4e7b2d6a8b
status: experimental
description: >-
  Detects theft or forgery of authentication certificates by monitoring for
  suspicious certificate operations, unauthorized certificate access, or
  certificate abuse that may be used for lateral movement.
references:
  - https://attack.mitre.org/techniques/T1649/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.credential_access
  - attack.t1649
  - certificates
  - authentication
logsource:
  product: windows
  service: security
detection:
  cert_access:
    EventID: 5058
    SubjectUserName|contains:
      - 'admin'
      - 'service'
  cert_export:
    EventID: 5061
    KeyName|contains:
      - 'Certificate'
      - 'Private Key'
  cert_install:
    EventID: 4887
    CertificateSubjectName|contains:
      - 'CN='
      - 'O='
  condition: cert_access or cert_export or cert_install
falsepositives:
  - Legitimate certificate management
  - PKI operations
level: medium
`,Fm=`---
title: Account Impersonation Detection
id: c7f4e9a6-9d8b-4e3f-c7f4-9e6a9d8b3c7b
status: experimental
description: >-
  Detects account impersonation attempts by monitoring for suspicious logon
  activities, unusual user behavior patterns, or authentication events that
  may indicate an attacker impersonating legitimate users.
references:
  - https://attack.mitre.org/techniques/T1656/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.lateral_movement
  - attack.t1656
  - impersonation
  - account_takeover
  - authentication
logsource:
  product: windows
  service: security
detection:
  unusual_logon:
    EventID: 4624
    LogonType:
      - 2
      - 3
      - 10
  geographic_anomaly:
    IpAddress|startswith:
      - '192.168.'
      - '10.'
    WorkstationName|contains: 'EXTERNAL'
  service_impersonation:
    EventID: 4648
    TargetUserName|contains:
      - 'admin'
      - 'service'
      - 'system'
  condition: unusual_logon and (geographic_anomaly or service_impersonation)
falsepositives:
  - Legitimate remote access
  - Service account operations
level: medium
`,qm=`---
title: Data Obfuscation with Junk Data
id: c8e5f3a9-7d6b-4e4f-c8e5-3f9a7d6b4c8b
status: experimental
description: >-
  Detects data obfuscation using junk data by monitoring for padded
  communications, noise injection, or unnecessary data transmission
  patterns that may be used to hide C2 communications.
references:
  - https://attack.mitre.org/techniques/T1001/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1001.001
  - junk_data
  - data_padding
  - obfuscation
logsource:
  product: zeek
  service: http
detection:
  large_requests:
    method: 'POST'
    request_body_len|gte: 10000
    response_body_len|lte: 1000
  padding_patterns:
    request_body_len: response_body_len
    ratio|gte: 10
  repeated_data:
    uri|contains:
      - 'AAAAAAA'
      - '0000000'
      - 'padding'
  condition: large_requests or padding_patterns or repeated_data
falsepositives:
  - File upload applications
  - Large form submissions
level: low
`,Om=`title: Steganographic Command and Control in Images and Documents
id: 9f6e8c4d-3a7b-4e2f-8c5a-7d9e6b3f4a2c
status: experimental
description: Detects potential steganographic command and control communication hidden in image and document files
logsource:
  product: proxy
  service: web
detection:
  selection_image_files:
    c-uri|endswith:
      - '.jpg'
      - '.jpeg'
      - '.png'
      - '.gif'
      - '.bmp'
      - '.tiff'
      - '.webp'
  selection_document_files:
    c-uri|endswith:
      - '.pdf'
      - '.docx'
      - '.xlsx'
      - '.pptx'
      - '.rtf'
  selection_suspicious_size:
    sc-bytes|gt: 1048576  # Files larger than 1MB
  selection_unusual_headers:
    cs-content-type|contains:
      - 'application/octet-stream'
      - 'text/plain'
  selection_frequent_downloads:
    cs-method: 'GET'
  selection_suspicious_paths:
    c-uri|contains:
      - '/upload/'
      - '/share/'
      - '/temp/'
      - '/tmp/'
      - '/cache/'
  frequency_condition:
    - count() by src_ip > 10
    - timeframe: 5m
  condition: (selection_image_files or selection_document_files) and selection_suspicious_size and selection_frequent_downloads
level: medium
tags:
  - attack.command_and_control
  - attack.t1001.002
  - attack.t1071.001
  - steganography
  - data_hiding
  - c2_channel
references:
  - https://attack.mitre.org/techniques/T1001/002/
  - https://attack.mitre.org/techniques/T1071/001/
`,Wm=`---
title: Steganography for Data Obfuscation
id: d9f6e4a2-8c7b-4e5f-d9f6-4e2a8c7b5d9b
status: experimental
description: >-
  Detects steganography usage by monitoring for steganography tools,
  suspicious image/media file transfers, or data hiding techniques
  within multimedia files for covert C2 communications.
references:
  - https://attack.mitre.org/techniques/T1001/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1001.002
  - steganography
  - data_hiding
  - multimedia
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  stego_tools:
    Image|endswith:
      - '\\steghide.exe'
      - '\\openstego.exe'
      - '\\outguess.exe'
  image_processing:
    CommandLine|contains:
      - '.jpg'
      - '.png'
      - '.bmp'
      - '.wav'
  embed_extract:
    CommandLine|contains:
      - 'embed'
      - 'extract'
      - 'hide'
      - 'reveal'
  condition: stego_tools or (image_processing and embed_extract)
falsepositives:
  - Legitimate image editing
  - Media processing applications
level: medium
`,jm=`---
title: Protocol Impersonation for Data Obfuscation
id: e4a7f9c5-6d8b-4e3f-e4a7-9f5c6d8b3e4b
status: experimental
description: >-
  Detects protocol impersonation by monitoring for traffic that mimics
  legitimate protocols, protocol spoofing, or disguised communications
  that may be used to hide C2 traffic within expected network patterns.
references:
  - https://attack.mitre.org/techniques/T1001/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1001.003
  - protocol_impersonation
  - protocol_spoofing
  - traffic_disguise
logsource:
  product: zeek
  service: conn
detection:
  port_mismatch:
    id.resp_p: 80
    service: 'ssl'
  protocol_confusion:
    id.resp_p: 443
    service: 'ftp'
  unusual_patterns:
    orig_bytes: resp_bytes
    duration|lte: 10
    service: 'unknown'
  condition: port_mismatch or protocol_confusion or unusual_patterns
falsepositives:
  - Misconfigured services
  - Protocol negotiations
level: medium
`,$m=`---
title: Many Subdomains Looking Like Exfiltration
id: f4e1c7a2-8d9b-4d11-bcde-123456abcdef
status: experimental
description: "Detects large volumes of unique subdomain queries to the same root domain, which may indicate DNS-based data exfiltration using tunneling or encoding schemes."
references:
  - https://attack.mitre.org/techniques/T1071/004/
  - https://attack.mitre.org/techniques/T1048/003/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.exfiltration
  - attack.command_and_control
  - attack.t1071.004
  - attack.t1048.003
logsource:
  product: zeek
  service: dns
detection:
  encoded_query:
    query|re: "([a-zA-Z0-9]{10,}\\\\.){3,}"  # Deeply nested and encoded-looking subdomains
  condition: encoded_query
falsepositives:
  - Legitimate telemetry domains (e.g., antivirus or EDR heartbeat pings) and some CDN services.
level: high
`,Um=`---
title: Anomalous Connection Volume and Duration
id: b231fa84-6789-4cde-9abc-def123456789
status: experimental
description: "Detects hosts with a high number of connections or abnormally long connection durations using Zeek conn logs. These may indicate beaconing, data exfiltration, or scanning behavior."
references:
  - https://attack.mitre.org/techniques/T1071/001/
  - https://attack.mitre.org/techniques/T1041/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.command_and_control
  - attack.exfiltration
  - attack.t1071.001
  - attack.t1041
logsource:
  product: zeek
  service: conn
detection:
  long_duration:
    duration|gt: 600.0  # connections > 10 minutes
  high_volume:
    history|contains: "S"  # many TCP SYNs, i.e. initiating lots of connections
  condition: long_duration OR high_volume
falsepositives:
  - Backup systems, monitoring agents, or CDN connections.
level: medium
`,zm=`---
title: Anomalous Network Traffic / C2 Beaconing
id: fa1b2c3d-4e5f-6789-abcd-ef1234567890
status: experimental
description: >
  "Detects potential C2 beaconing activity by identifying periodic or anomalous network traffic patterns characterized by small outbound TCP payload
  sizes, which can indicate command and control communications."
references:
  - https://attack.mitre.org/techniques/T1071/001/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.command_and_control
  - attack.t1071.001
logsource:
  product: network
  service: firewall
detection:
  selection:
    Protocol: tcp
    PayloadSize: "<=150"
  condition: selection
falsepositives:
  - Legitimate periodic traffic generated by system health checks, monitoring services, or other benign applications.
level: medium
`,Bm=`---
title: Command and Control via Web Protocols
id: a6f3e8c9-5b7d-4e2f-a6f3-8e9c5b7d2a6b
status: experimental
description: >-
  Detects command and control communications via web protocols by monitoring
  for suspicious HTTP/HTTPS traffic patterns, unusual user agents, or
  web-based C2 communication channels.
references:
  - https://attack.mitre.org/techniques/T1071/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1071.001
  - web_protocols
  - http
  - c2_communication
logsource:
  product: zeek
  service: http
detection:
  suspicious_ua:
    user_agent|contains:
      - 'curl'
      - 'wget'
      - 'python'
      - 'powershell'
      - 'empire'
  beacon_pattern:
    method: 'POST'
    request_body_len|lte: 100
    response_body_len|lte: 100
  encoded_communication:
    uri|contains:
      - 'base64'
      - '%20%20%20'
      - 'encoded'
  condition: suspicious_ua or beacon_pattern or encoded_communication
falsepositives:
  - Legitimate automation tools
  - API communications
level: medium
`,Hm=`---
title: BOF Command and Control Beaconing Patterns
id: a1b2c3d4-e5f6-7890-bcde-f23456789012
status: experimental
description: >
  Detects network patterns consistent with Beacon Object File (BOF) command and control communications.
  BOFs often use HTTP/HTTPS for C2 with specific timing and payload characteristics.
references:
  - https://attack.mitre.org/techniques/T1071.001/
  - https://www.cobaltstrike.com/help-malleable-c2
author: Defensive Rules Project
date: 2026/04/27
logsource:
  category: network
  product: zeek
  service: http
detection:
  selection_user_agents:
    user_agent|contains:
      - 'Mozilla/5.0 (compatible; MSIE'
      - 'Mozilla/4.0 (compatible; MSIE'
      - 'Mozilla/5.0 (Windows NT'
    user_agent|endswith: 'Trident/7.0; rv:11.0) like Gecko'
  selection_uri_patterns:
    uri|contains:
      - '/jquery-'
      - '/bootstrap'
      - '/analytics'
      - '/visit.js'
      - '/pixel'
      - '/ga.js'
  selection_headers:
    request_headers|contains:
      - 'Cookie: __cfduid='
      - 'Cookie: SESSIONID='
      - 'Accept-Language: en-US,en'
      - 'Accept-Encoding: gzip, deflate'
  selection_timing:
    status_code: 200
    response_body_len: '<1000'
  selection_post_data:
    method: 'POST'
    request_body_len: '<500'
    uri|contains:
      - '/submit.php'
      - '/fakeurl.html'
      - '/updates.rss'
  condition: (selection_user_agents and selection_uri_patterns) and (selection_headers or selection_timing or selection_post_data)
falsepositives:
  - Legitimate web browsing with similar patterns
  - CDN and analytics traffic
level: medium
tags:
  - attack.command_and_control
  - attack.t1071.001
  - network
  - zeek
  - cobalt_strike
  - bof
  - c2
`,Gm=`---
title: C2 Framework Network Indicators
id: i1j2k3l4-m5n6-7890-abcd-555555555555
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection:
    uri|contains:
      - '/admin/get.php'
      - '/admin/post.php'
      - '/gate.php'
      - '/panel/index.php'
      - '__utm.gif'
      - '/pixel'
      - '/submit.php?id='
      - '/api/v1/data'
      - '/rest/2/api'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.001
`,Vm=`---
title: DNS over HTTPS C2 Channel
id: j1k2l3m4-n5o6-7890-abcd-555555555555
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection:
    uri|contains:
      - '/dns-query'
      - '/resolve'
    host|contains:
      - 'cloudflare-dns.com'
      - 'dns.google'
      - 'dns.quad9.net'
    method: 'POST'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.001
`,Km=`---
title: Domain Generation Algorithm Detection
id: i1j2k3l4-m5n6-7890-abcd-444444444444
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: dns
detection:
  selection:
    query|re: '[a-zA-Z0-9]{8,}\\.com|[a-zA-Z0-9]{8,}\\.net|[a-zA-Z0-9]{8,}\\.org'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.004
`,Qm=`---
title: Base64 Encoded C2 Communication
id: j1k2l3m4-n5o6-7890-abcd-333333333333
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection:
    request_body_len: '>100'
    uri|contains:
      - '?data='
      - '&cmd='
      - 'payload='
    post_data|re: '^[A-Za-z0-9+/]{20,}={0,2}$'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.001
`,Ym=`title: Fake Software Update Click-to-Fix Malware Campaign
id: 5f2a8c91-4b3d-4e7a-9f1c-2d8e6b4a7c9e
status: experimental
description: Detects network indicators of fake software update campaigns using "click to fix" social engineering techniques commonly associated with malware distribution
logsource:
  product: proxy
  service: web
detection:
  selection_fake_update:
    c-uri|contains:
      - '/fake-update'
      - '/software-update'
      - '/security-patch'
      - '/urgent-fix'
      - '/click-to-update'
      - '/download-fix'
      - '/install-patch'
  selection_suspicious_domains:
    c-uri|contains:
      - 'update-security'
      - 'fix-computer'
      - 'repair-now'
      - 'install-update'
      - 'security-alert'
  selection_fake_installers:
    c-uri|endswith:
      - '.exe'
      - '.msi'
      - '.bat'
      - '.scr'
      - '.com'
  selection_user_agents:
    c-useragent|contains:
      - 'Windows-Update'
      - 'SecurityUpdate'
      - 'Microsoft-Patch'
  condition: (selection_fake_update or selection_suspicious_domains) and selection_fake_installers
level: high
tags:
  - attack.command_and_control
  - attack.t1071.001
  - attack.initial_access
  - attack.t1566.002
  - social_engineering
  - fake_update
references:
  - https://attack.mitre.org/techniques/T1071/001/
  - https://attack.mitre.org/techniques/T1566/002/
`,Zm=`---
title: HTTP Beaconing and Suspicious Web Protocols
id: e1071001-9b2c-4d5e-af01-1234567890ab
status: experimental
description: >
  Detects suspicious use of web protocols for C2, data staging, or tooling ingress
  (unusual HTTP/HTTPS POSTs, uncommon user-agents, periodic beaconing, and HTTP downloads
  of executables). Covers network (Zeek/Proxy), endpoint (Sysmon NetworkConnect), and web server logs.
references:
  - https://attack.mitre.org/techniques/T1071/001/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1071.001
  - tactic.command-and-control
  - platform:cross-platform
  - technique:T1071.001
  - mitre_version:16.1
  - HTTP
  - Cobalt_Strike
  - Metasploit
  - Bazar
associated_groups: []
associated_malware:
  - Cobalt Strike
  - Metasploit
  - Bazar

# Note: multiple log sources shown in detection selections to cover different telemetry types.
logsource:
  product: cross-platform
  service: network

detection:
  # Zeek / HTTP proxy indicators: uncommon UA, suspicious URIs, frequent small POSTs
  zeek_http_ua_uri:
    zeek.http.user_agent|contains:
      - "curl"
      - "Wget"
      - "python-requests"
      - "Go-http-client"
      - "libwww-perl"
    zeek.http.uri|contains:
      - "/api/"
      - "/upload"
      - "/ws/"
      - "/update"
  zeek_http_small_post:
    zeek.http.method|contains: "POST"
    zeek.http.content_length|lt: 200
    zeek.http.uri|matches:
      - "^/.{1,50}$"
  zeek_http_download_exec:
    zeek.http.uri|contains:
      - ".exe"
      - ".dll"
      - ".zip"
      - ".ps1"
      - ".jar"

  # Sysmon NetworkConnect (EventID 3) to web ports from non-browser parents or suspicious processes
  sysmon_net_connect:
    EventID: 3
    DestinationPort:
      - 80
      - 443
    ParentImage|not_endswith:
      - '\\chrome.exe'
      - '\\firefox.exe'
      - '\\msedge.exe'
      - '\\iexplore.exe'
    Image|not_endswith:
      - '\\pwsh.exe'
      - '\\powershell.exe'   # exclude legitimate PS when allowedlist exists; adjust for your environment

  # Web server logs: unusual user-agent + POST to endpoints returning 200 and executable content-type
  webserver_post_exec:
    http.method: "POST"
    http.status: 200
    http.user_agent|contains:
      - "python-requests"
      - "curl"
    http.content_type|contains:
      - "application/octet-stream"
      - "application/x-msdownload"

  # Time-based / periodic beaconing: repeated small POSTs to same host/path
  beaconing_pattern:
    zeek.conn.count|gt: 5
    zeek.http.uri|contains: "/api/"
    zeek.http.content_length|lt: 300

  condition: (zeek_http_ua_uri and (zeek_http_small_post or zeek_http_download_exec))
             or sysmon_net_connect
             or webserver_post_exec
             or beaconing_pattern

falsepositives:
  - Automated software update checks, configuration management tooling (e.g., Puppet, Chef, SCCM, Intune) and legitimate backup/upload utilities.
  - Developer or CI systems (curl/Wget/python-requests) used for legitimate automation.
  - Tune with allowlists for known update servers, CDNs, and management endpoints.

level: high

fields:
  - zeek.http.uri
  - zeek.http.user_agent
  - zeek.http.content_length
  - EventID
  - Image
  - ParentImage
  - DestinationPort
  - http.method
  - http.status
  - http.content_type
`,Jm=`---
title: HTTP Tunneling Detection
id: j1k2l3m4-n5o6-7890-abcd-444444444444
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection:
    method: 'CONNECT'
    status_code: '200'
    response_body_len: '>1000'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.001
`,Xm=`---
title: Suspicious HTTP User-Agent Strings
id: f2c1a8b9-d456-4e7c-8123-abcdef987654
status: experimental
description: "Detects suspicious or malicious HTTP User-Agent strings observed in Zeek HTTP logs, which may indicate malware beaconing, automated tools, or penetration testing frameworks."
references:
  - https://attack.mitre.org/techniques/T1071/001/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.command_and_control
  - attack.t1071.001
logsource:
  product: zeek
  service: http
detection:
  selection:
    user_agent|contains:
      - "curl/"
      - "python-requests"
      - "powershell"
      - "Go-http-client"
      - "wget"
      - "nmap"
      - "sqlmap"
      - "fuzz"
      - "bot"
  condition: selection
falsepositives:
  - Custom integrations, vulnerability scanners, or monitoring tools with non-standard User-Agents.
level: medium
`,eu=`---
title: Suspicious Web-based Command and Control Patterns
id: j0k1l2m3-n4o5-6789-0123-456789jklmno
status: experimental
description: Detects suspicious web-based command and control communication patterns
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection_user_agents:
    user_agent|contains:
      - 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
      - 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
      - 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1)'
      - 'python-requests'
      - 'python-urllib'
      - 'curl'
      - 'wget'
      - 'PowerShell'
      - 'WinHTTP'
      - ''  # Empty user agent
  selection_post_patterns:
    method: 'POST'
    request_body_len: '>1024'  # Large POST requests
  selection_suspicious_paths:
    uri|contains:
      - '/admin'
      - '/panel'
      - '/gate'
      - '/log'
      - '/upload'
      - '/download'
      - '/data'
      - '.php?id='
      - '.aspx?id='
      - '.jsp?id='
  selection_beaconing:
    request_body_len: '<100'  # Small consistent requests
    status_code: '200'
  timing_patterns: {}  # Placeholder for beaconing detection logic
  condition: (selection_user_agents or selection_suspicious_paths) and (selection_post_patterns or selection_beaconing)
fields:
  - src_ip
  - dst_ip
  - host
  - uri
  - method
  - user_agent
  - status_code
falsepositives:
  - Legacy applications
  - Automated tools
  - API clients
level: medium
tags:
  - attack.command-and-control
  - attack.t1071.001
  - zeek
  - network
`,nu=`---
title: Suspicious TLS Certificate Patterns
id: j1k2l3m4-n5o6-7890-abcd-111111111111
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: ssl
detection:
  selection:
    certificate_subject|contains:
      - 'Self-Signed'
      - 'localhost'
      - 'test'
      - 'temp'
      - '127.0.0.1'
      - 'example.com'
      - 'default'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.001
`,tu=`---
title: Uncommon HTTP User Agents
id: i1j2k3l4-m5n6-7890-abcd-333333333333
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection:
    user_agent|contains:
      - 'Cobalt Strike'
      - 'Metasploit'
      - 'Empire'
      - 'PowerShell'
      - 'curl/7'
      - 'wget/'
      - 'python-requests'
      - 'Go-http-client'
      - 'Nim httpclient'
      - 'rust-reqwest'
      - 'okhttp/'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1071.001
`,iu=`---
title: Unencrypted Traffic on TCP 443
id: 9c3f12ab-8d45-4f71-a7ef-abcdef987654
status: experimental
description: "Detects network connections to port 443 (typically HTTPS) that do not negotiate TLS/SSL, which may indicate misuse of the port for unencrypted or covert communication."
references:
  - https://attack.mitre.org/techniques/T1071/001/
  - https://attack.mitre.org/techniques/T1041/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.command_and_control
  - attack.exfiltration
  - attack.t1071.001
  - attack.t1041
logsource:
  product: zeek
  service: conn
detection:
  unencrypted_443:
    proto: "tcp"
    id_resp_p: 443
    service: "-"
  condition: unencrypted_443
falsepositives:
  - Port 443 used for non-TLS services in test or legacy environments.
level: high
`,su=`---
title: Command and Control via File Transfer Protocols
id: b7e4f9c2-6a8d-4e3f-b7e4-9f2c6a8d3b7b
status: experimental
description: >-
  Detects command and control communications via file transfer protocols
  by monitoring for suspicious FTP, SFTP, or SCP activities that may be
  used for C2 communications or file staging.
references:
  - https://attack.mitre.org/techniques/T1071/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1071.002
  - file_transfer
  - ftp
  - sftp
logsource:
  product: zeek
  service: conn
detection:
  ftp_ports:
    id.resp_p|contains:
      - 21
      - 22
      - 990
      - 989
  suspicious_transfer:
    service: 'ftp'
    orig_bytes|gte: 1000
    resp_bytes|gte: 1000
  encrypted_ftp:
    service: 'ssh'
    id.resp_p: 22
    orig_bytes|lte: 10000
  condition: ftp_ports and (suspicious_transfer or encrypted_ftp)
falsepositives:
  - Legitimate file transfers
  - System backups
level: low
`,ou=`---
title: Command and Control via Mail Protocols
id: c8f5e3a6-7b9d-4e4f-c8f5-3e6a7b9d4c8b
status: experimental
description: >-
  Detects command and control communications via mail protocols by monitoring
  for suspicious SMTP, IMAP, or POP3 activities that may be used for
  email-based C2 communications or data staging.
references:
  - https://attack.mitre.org/techniques/T1071/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1071.003
  - mail_protocols
  - smtp
  - imap
logsource:
  product: zeek
  service: conn
detection:
  mail_ports:
    id.resp_p|contains:
      - 25
      - 587
      - 993
      - 995
  unusual_traffic:
    service: 'ssl'
    orig_bytes|gte: 10000
    duration|gte: 300
  automated_mail:
    id.orig_h|count|lte: 5
    id.resp_p: 25
    orig_bytes|gte: 1000
  condition: mail_ports and (unusual_traffic or automated_mail)
falsepositives:
  - Legitimate email communications
  - Email server operations
level: low
`,au=`---
title: Command and Control via DNS Protocol
id: d9a6f4e7-8c2b-4e5f-d9a6-4f7e8c2b5d9b
status: experimental
description: >-
  Detects command and control communications via DNS protocol by monitoring
  for DNS tunneling, suspicious DNS queries, or unusual DNS traffic patterns
  that may indicate DNS-based C2 communications.
references:
  - https://attack.mitre.org/techniques/T1071/004/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1071.004
  - dns
  - dns_tunneling
  - c2_communication
logsource:
  product: zeek
  service: dns
detection:
  long_queries:
    query|length|gte: 50
    qtype_name: 'TXT'
  suspicious_domains:
    query|contains:
      - '.tk'
      - '.ml'
      - '.cf'
      - '.ga'
  base64_encoded:
    query|contains:
      - 'A=='
      - 'Q=='
      - 'g=='
      - 'w=='
  condition: long_queries or suspicious_domains or base64_encoded
falsepositives:
  - Legitimate TXT record queries
  - DNS-based services
level: medium
`,cu=`title: DNS-over-HTTPS Command and Control Communication
id: 7d3e9b2f-4c8a-4f1e-8d7b-6a5c9e3f2d8a
status: experimental
description: Detects potential command and control communication through DNS-over-HTTPS channels with suspicious query patterns
logsource:
  product: dns
  service: dns
detection:
  selection_doh_providers:
    query|contains:
      - 'cloudflare-dns.com'
      - 'dns.google'
      - 'dns.quad9.net'
      - 'dns.adguard.com'
      - '1.1.1.1'
      - '8.8.8.8'
      - '9.9.9.9'
  selection_suspicious_queries:
    query|contains:
      - '.tk'
      - '.ml'
      - '.ga'
      - '.cf'
      - 'dyndns'
      - 'no-ip'
      - 'ddns'
  selection_encoded_subdomains:
    query|re: '[a-f0-9]{32,}\\..*'
  selection_long_queries:
    query|length|gt: 100
  selection_txt_records:
    record_type: 'TXT'
  frequency_condition:
    - count() by src_ip > 100
    - timeframe: 10m
  condition: selection_doh_providers and (selection_suspicious_queries or selection_encoded_subdomains or selection_long_queries or selection_txt_records)
level: medium
tags:
  - attack.command_and_control
  - attack.t1071.004
  - attack.t1568.002
  - dns_over_https
  - dns_tunneling
  - c2_channel
references:
  - https://attack.mitre.org/techniques/T1071/004/
  - https://attack.mitre.org/techniques/T1568/002/
`,ru=`---
title: DNS Tunneling via High Volume or Suspicious Subdomains
id: 14f932db-1817-4224-9490-bd2b2e0a63a1
status: experimental
description: Detects DNS tunneling behavior by identifying high-frequency or unusual DNS queries with long or encoded subdomains. Uses Sysmon Event ID 22.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: dns_query
detection:
  selection_event:
    EventID: 22
  selection_pattern:
    QueryName|contains:
      - '.'
  selection_anomalous:
    QueryName|endswith:
      - '.com'
      - '.net'
      - '.org'
  condition: selection_event and selection_pattern and selection_anomalous
fields:
  - QueryName
  - Image
  - User
  - ComputerName
falsepositives:
  - Content delivery networks (CDNs)
  - Misconfigured software
level: high
tags:
  - attack.command_and_control
  - attack.t1071
  - attack.t1071.004
  - sysmon
`,lu=`---
title: DNS Tunneling Detection
id: 123fabc4-5678-4def-9876-a1b2c3d4e5f6
status: experimental
description: "Detects potential DNS tunneling by identifying long or high-frequency DNS queries, especially those using NULL or TXT query types, which are commonly abused for data exfiltration or C2."
references:
  - https://attack.mitre.org/techniques/T1071/004/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.command_and_control
  - attack.t1071.004
logsource:
  product: zeek
  service: dns
detection:
  long_query:
    qtype_name|contains:
      - "TXT"
      - "NULL"
    query|re: ".{50,}"  # Queries longer than 50 characters
  condition: long_query
falsepositives:
  - Large DNS records used by cloud services or CDNs.
level: high
`,du=`---
title: Detect FRPC Communication on Designated Ports
id: b33f772a-12f3-4ae6-942c-f6c81803d107
description: Detects possible FRPC (Fast Reverse Proxy Client) activity by identifying traffic on high-risk ports (6000, 7000) using Zeek logs.
status: experimental
logsource:
  category: network-connection
  product: zeek
detection:
  selection:
    - id.orig_p:
        - 6000
        - 7000
    - id.resp_p:
        - 6000
        - 7000
  condition: selection
fields:
  - _time
  - id.orig_p
  - id.resp_p
  - id.orig_h
  - id.resp_h
  - hash_sha256
  - proto
falsepositives:
  - Legitimate applications using the same ports
level: high
tags:
  - attack.command_and_control
  - attack.t1071
  - frpc
  - volt_typhoon
  - ports.6000
  - ports.7000
  - zeek
  - yara_compatible
metadata:
  author: Matthew Iverson
  created: 2025-04-15
  last_modified: 2025-04-15
  test_date: 2025-04-15
  priority: high
  mitre_version: 16.1
  apt_group: Volt Typhoon
  hunting_trigger: Detects FRPC communication using designated ports.
  mitre_tactic: Command and Control
  mitre_technique: Application Layer Protocol
  mitre_technique_id: T1071
  mitre_link: https://attack.mitre.org/techniques/T1071/
`,mu=`---
title: Internal Proxy for Command and Control
id: c5f8e6a3-9b7d-4e2f-c5f8-6e3a9b7d2c5b
status: experimental
description: >-
  Detects internal proxy usage for command and control by monitoring for
  proxy server establishment, traffic redirection, or internal traffic
  forwarding that may be used to hide C2 communications.
references:
  - https://attack.mitre.org/techniques/T1090/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1090.001
  - internal_proxy
  - traffic_forwarding
  - c2_evasion
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  proxy_tools:
    Image|endswith:
      - '\\netsh.exe'
      - '\\socat.exe'
      - '\\stunnel.exe'
  port_forwarding:
    CommandLine|contains:
      - 'portproxy'
      - 'interface'
      - 'forward'
      - 'tunnel'
  proxy_setup:
    CommandLine|contains:
      - 'add v4tov4'
      - 'connectaddress'
      - 'listenaddress'
  condition: proxy_tools and (port_forwarding or proxy_setup)
falsepositives:
  - Legitimate network administration
  - VPN configurations
level: medium
`,uu=`---
title: External Proxy for Command and Control
id: d6a9f4e7-8c2b-4e5f-d6a9-4f7e8c2b5d6b
status: experimental
description: >-
  Detects external proxy usage for command and control by monitoring for
  connections to known proxy services, SOCKS proxy usage, or external
  traffic redirection that may be used to hide C2 communications.
references:
  - https://attack.mitre.org/techniques/T1090/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1090.002
  - external_proxy
  - socks
  - proxy_service
logsource:
  product: zeek
  service: conn
detection:
  proxy_ports:
    id.resp_p|contains:
      - 1080
      - 8080
      - 3128
      - 8888
  socks_traffic:
    service: 'unknown'
    id.resp_p: 1080
    orig_bytes|gte: 100
  proxy_services:
    service: 'http'
    id.resp_p: 8080
    orig_bytes|gte: 1000
  condition: proxy_ports and (socks_traffic or proxy_services)
falsepositives:
  - Legitimate proxy usage
  - Corporate proxy servers
level: medium
`,pu=`---
title: Multi-hop Proxy for Command and Control
id: e7b4f8c9-5d3a-4e6f-e7b4-8f9c5d3a6e7b
status: experimental
description: >-
  Detects multi-hop proxy usage for command and control by monitoring for
  chained proxy connections, multiple proxy hops, or complex traffic
  routing that may be used to obscure C2 communications.
references:
  - https://attack.mitre.org/techniques/T1090/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1090.003
  - multi_hop_proxy
  - proxy_chain
  - traffic_obfuscation
logsource:
  product: zeek
  service: conn
detection:
  proxy_chain:
    id.orig_h|count|gte: 3
    service: 'unknown'
    duration|gte: 300
  multiple_hops:
    id.resp_h|count|gte: 2
    orig_bytes|gte: 1000
    resp_bytes|gte: 1000
  tor_indicators:
    id.resp_p: 9050
    service: 'unknown'
  condition: proxy_chain or multiple_hops or tor_indicators
falsepositives:
  - Complex network architectures
  - Legitimate anonymization services
level: medium
`,gu=`title: Domain Fronting and CDN Abuse for Command and Control
id: 2c8f5a3e-7b9d-4e2a-9f6c-3d1a8b7e5c9f
status: experimental
description: Detects domain fronting techniques using CDN services to hide command and control communication
logsource:
  product: proxy
  service: web
detection:
  selection_cdn_providers:
    c-uri|contains:
      - 'cloudfront.net'
      - 'fastly.com'
      - 'cloudflare.com'
      - 'akamai.com'
      - 'azure.com'
      - 'amazonaws.com'
  selection_host_mismatch:
    c-uri|contains:
      - 'amazonaws.com'
    cs-host|contains:
      - 'cloudfront.net'
  selection_suspicious_paths:
    c-uri|contains:
      - '/api/v1/'
      - '/endpoint/'
      - '/gateway/'
      - '/proxy/'
      - '/tunnel/'
  selection_encrypted_traffic:
    cs-method: 'POST'
    sc-bytes|gt: 512
    cs-bytes|gt: 256
  selection_https_tunnel:
    cs-method: 'CONNECT'
    cs-uri-port:
      - 443
      - 8443
      - 9443
  condition: (selection_cdn_providers and selection_suspicious_paths and selection_encrypted_traffic) or (selection_host_mismatch) or (selection_https_tunnel and selection_cdn_providers)
level: medium
tags:
  - attack.command_and_control
  - attack.t1090.004
  - attack.t1071.001
  - domain_fronting
  - cdn_abuse
  - traffic_tunneling
references:
  - https://attack.mitre.org/techniques/T1090/004/
  - https://attack.mitre.org/techniques/T1071/001/
`,_u=`---
title: Domain Fronting for Command and Control
id: f8c5e9a2-6d4b-4e7f-f8c5-9e2a6d4b7f8b
status: experimental
description: >-
  Detects domain fronting for command and control by monitoring for CDN
  usage with mismatched SNI/Host headers, domain fronting patterns, or
  traffic routing through content delivery networks.
references:
  - https://attack.mitre.org/techniques/T1090/004/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1090.004
  - domain_fronting
  - cdn
  - traffic_routing
logsource:
  product: zeek
  service: ssl
detection:
  cdn_hosts:
    server_name|endswith:
      - '.cloudfront.net'
      - '.azureedge.net'
      - '.fastly.com'
      - '.cloudflare.com'
  sni_mismatch:
    server_name: cert_subject
    not: true
  unusual_cert:
    cert_subject|contains:
      - 'cloudflare'
      - 'amazonaws'
    established: true
  condition: cdn_hosts and (sni_mismatch or unusual_cert)
falsepositives:
  - Legitimate CDN usage
  - Content delivery services
level: medium
`,fu=`---
title: Detect ICMP-Based FRPC Communication
id: 49e5a81b-f83d-4c26-aeaa-6b423d678c2c
description: Detects ICMP echo request and reply traffic which may indicate FRPC tunneling behavior for C2 using non-application layer protocols.
status: experimental
logsource:
  category: network-connection
  product: zeek
detection:
  selection:
    icmp_type:
      - 0
      - 8
  condition: selection
fields:
  - _time
  - icmp_type
  - icmp_code
  - src_ip
  - dest_ip
  - event_description
falsepositives:
  - Legitimate ping traffic
level: high
tags:
  - attack.command_and_control
  - attack.t1095
  - volt_typhoon
  - icmp
  - frpc
  - yara_compatible
metadata:
  author: Matthew Iverson
  created: 2025-04-15
  last_modified: 2025-04-15
  test_date: ""
  priority: high
  mitre_version: 16.1
  apt_group: Volt Typhoon
  hunting_trigger: Detects ICMP-based communication indicative of covert FRPC tunneling.
  mitre_tactic: Command and Control
  mitre_technique: Non-Application Layer Protocol
  mitre_technique_id: T1095
  mitre_link: https://attack.mitre.org/techniques/T1095/
`,hu=`---
title: Command and Control via Non-Standard Ports
id: a9d6f3e8-7c5b-4e4f-a9d6-3f8e7c5b4a9b
status: experimental
description: >-
  Detects command and control communications via non-standard ports by
  monitoring for services running on unusual ports, port hopping, or
  protocol mismatches that may indicate C2 evasion techniques.
references:
  - https://attack.mitre.org/techniques/T1095/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1095
  - non_standard_port
  - port_evasion
  - c2_communication
logsource:
  product: zeek
  service: conn
detection:
  unusual_ports:
    id.resp_p|gte: 8000
    id.resp_p|lte: 65535
    service: 'unknown'
  high_ports:
    id.resp_p|gte: 49152
    orig_bytes|gte: 1000
    resp_bytes|gte: 1000
  protocol_mismatch:
    id.resp_p: 80
    service: 'ssl'
  condition: unusual_ports or high_ports or protocol_mismatch
falsepositives:
  - Application-specific ports
  - Development servers
level: low
`,vu=`---
title: Dead Drop Resolver for Command and Control
id: d9f6e3a8-5c7b-4e4f-d9f6-3e8a5c7b4d9b
status: experimental
description: >-
  Detects dead drop resolver usage by monitoring for suspicious web service
  communications, automated content retrieval, or covert channel usage
  through legitimate web platforms for C2 communications.
references:
  - https://attack.mitre.org/techniques/T1102/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1102.001
  - dead_drop
  - web_service
  - covert_channel
logsource:
  product: zeek
  service: http
detection:
  social_media:
    host|endswith:
      - '.twitter.com'
      - '.facebook.com'
      - '.reddit.com'
      - '.telegram.org'
  automated_access:
    user_agent|contains:
      - 'curl'
      - 'wget'
      - 'python'
      - 'bot'
  api_endpoints:
    uri|contains:
      - '/api/'
      - '/v1/'
      - '/v2/'
      - '/rest/'
  condition: social_media and (automated_access or api_endpoints)
falsepositives:
  - Legitimate API usage
  - Social media automation
level: low
`,yu=`title: Legitimate Service Abuse for Command and Control
id: 8e4f7c2d-9a1b-4e3c-8f7a-5b9d6e2c4a8f
status: experimental
description: Detects abuse of legitimate services like Discord, Telegram, and GitHub for command and control operations
logsource:
  product: proxy
  service: web
detection:
  selection_discord:
    c-uri|contains:
      - 'discord.com/api/webhooks'
      - 'discordapp.com/api/webhooks'
      - 'cdn.discordapp.com'
  selection_telegram:
    c-uri|contains:
      - 'api.telegram.org/bot'
      - 't.me/bot'
  selection_github:
    c-uri|contains:
      - 'api.github.com/repos'
      - 'raw.githubusercontent.com'
      - 'gist.githubusercontent.com'
  selection_pastebin:
    c-uri|contains:
      - 'pastebin.com/raw'
      - 'paste.ee/r'
      - 'hastebin.com/raw'
  selection_suspicious_activity:
    cs-method:
      - 'POST'
      - 'PUT'
      - 'PATCH'
  selection_automated:
    c-useragent|contains:
      - 'python'
      - 'curl'
      - 'wget'
      - 'powershell'
      - 'bot'
  frequency_condition:
    - count() by src_ip > 20
    - timeframe: 5m
  condition: (selection_discord or selection_telegram or selection_github or selection_pastebin) and selection_suspicious_activity and selection_automated
level: high
tags:
  - attack.command_and_control
  - attack.t1102.001
  - attack.t1071.001
  - legitimate_service_abuse
  - discord
  - telegram
  - github
references:
  - https://attack.mitre.org/techniques/T1102/001/
  - https://attack.mitre.org/techniques/T1071/001/
`,wu=`---
title: Bidirectional Communication via Web Service
id: e4a7f9c6-8d5b-4e2f-e4a7-9f6c8d5b2e4b
status: experimental
description: >-
  Detects bidirectional communication via web services by monitoring for
  two-way data exchange through web platforms, interactive web sessions, or
  command execution through web service interfaces.
references:
  - https://attack.mitre.org/techniques/T1102/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1102.002
  - bidirectional
  - web_service
  - interactive_session
logsource:
  product: zeek
  service: http
detection:
  interactive_session:
    method: 'POST'
    response_code: 200
    orig_bytes|gte: 100
    resp_bytes|gte: 100
  web_shell:
    uri|contains:
      - '/shell'
      - '/cmd'
      - '/exec'
      - '/webshell'
  command_execution:
    method: 'POST'
    uri|contains:
      - 'cmd='
      - 'execute='
      - 'run='
  condition: interactive_session or web_shell or command_execution
falsepositives:
  - Legitimate web applications
  - Administrative interfaces
level: medium
`,bu=`title: Social Media Platform Command and Control Communication
id: 3a7b9f2e-8d4c-4f1a-b5e7-6c3d9a8b7f2e
status: experimental
description: Detects potential command and control communication through social media platforms using suspicious posting patterns and encoded content
logsource:
  product: proxy
  service: web
detection:
  selection_platforms:
    c-uri|contains:
      - 'twitter.com/api'
      - 'facebook.com/api'
      - 'instagram.com/api'
      - 'linkedin.com/api'
      - 'reddit.com/api'
      - 'tiktok.com/api'
      - 'youtube.com/api'
  selection_suspicious_posts:
    r-uri|contains:
      - '/post'
      - '/comment'
      - '/message'
      - '/status'
  selection_encoded_content:
    cs-method: 'POST'
    sc-bytes|gt: 1024
  selection_automated_patterns:
    c-useragent|contains:
      - 'bot'
      - 'crawler'
      - 'automation'
      - 'script'
  time_condition:
    - count() by src_ip > 50
    - timeframe: 10m
  condition: selection_platforms and selection_suspicious_posts and selection_encoded_content and not selection_automated_patterns
level: medium
tags:
  - attack.command_and_control
  - attack.t1102.002
  - attack.t1071.001
  - social_media
  - c2_channel
references:
  - https://attack.mitre.org/techniques/T1102/002/
  - https://attack.mitre.org/techniques/T1071/001/
`,ku=`---
title: One-Way Communication via Web Service
id: f5b8e2a7-6c9d-4e3f-f5b8-2e7a6c9d3f5b
status: experimental
description: >-
  Detects one-way communication via web services by monitoring for
  data retrieval without response, beacon-like patterns, or unidirectional
  data flow through web platforms for C2 communications.
references:
  - https://attack.mitre.org/techniques/T1102/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1102.003
  - one_way
  - beacon
  - data_retrieval
logsource:
  product: zeek
  service: http
detection:
  beacon_pattern:
    method: 'GET'
    response_code: 200
    orig_bytes|lte: 500
    resp_bytes|lte: 1000
  data_retrieval:
    method: 'GET'
    uri|contains:
      - '/data'
      - '/config'
      - '/update'
  periodic_access:
    host|count|gte: 10
    method: 'GET'
    time_interval: '300'
  condition: beacon_pattern or data_retrieval or periodic_access
falsepositives:
  - Legitimate data synchronization
  - Application updates
level: low
`,Su=`---
title: CertUtil download to suspicious path
id: d1105a01-0001-4c11-8a05-000000000001
status: experimental
description: >
  Detects usage of certutil to download files (usually via URL) into user-writable or suspicious directories (e.g., %TEMP%, AppData, Downloads) —
  common technique for ingress tool transfer on Windows.
references:
  - https://attack.mitre.org/techniques/T1105/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1105
  - tactic.command-and-control
  - platform:windows
  - technique:T1105
  - mitre_version:16.1
  - Cobalt_Strike
  - certutil
associated_groups: []
associated_malware:
  - Cobalt Strike
logsource:
  product: windows
  service: sysmon
detection:
  selection_certutil:
    EventID: 1
    Image|endswith: '\\certutil.exe'
    CommandLine|contains:
      - "-urlcache"
      - "-f"
      - "http://"
      - "https://"
  selection_target_path:
    EventID: 11
    TargetFilename|contains:
      - "\\\\AppData\\\\"
      - "\\\\Local\\\\Temp\\\\"
      - "\\\\Temp\\\\"
      - "\\\\Downloads\\\\"
  condition: selection_certutil and selection_target_path
falsepositives:
  - Admin or patching tools that use certutil for legitimate certificate or file operations.
level: high
fields:
  - EventID
  - Image
  - CommandLine
  - TargetFilename
`,xu=`---
title: Email-Based File Exfiltration
id: j1k2l3m4-n5o6-7890-abcd-222222222222
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'Send-MailMessage'
      - 'System.Net.Mail.SmtpClient'
      - 'mutt -a'
      - 'mail -a'
      - 'sendmail'
      - 'swaks'
      - 'blat.exe'
  condition: selection
tags:
  - attack.exfiltration
  - attack.t1105
`,Du=`---
title: FTP File Transfer Activities
id: i1j2k3l4-m5n6-7890-abcd-222222222222
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'ftp.exe'
      - 'sftp'
      - 'ftps'
      - 'wget ftp://'
      - 'curl ftp://'
      - 'tftp'
      - 'Put-FtpFile'
      - 'Get-FtpFile'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1105
`,Iu=`---
title: FTP or anonymous file transfer indicators (ftp, ftps, smb file transfer)
id: d1105a01-0005-4c11-8a05-000000000005
status: experimental
description: Detect FTP activity, SMB file copy events, or anonymous uploads/downloads that indicate tools being brought into the environment via legacy protocols (ftp/ftps, smb put/get).
references:
  - https://attack.mitre.org/techniques/T1105/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1105
  - tactic.command-and-control
  - platform:network
  - technique:T1105
  - mitre_version:16.1
  - Metasploit
associated_groups: []
associated_malware:
  - Metasploit
logsource:
  product: network
  service: zeek
detection:
  selection_ftp:
    zeek.ftp.request|exists: true
  selection_smb:
    zeek.smb.command|contains:
      - "NT_CREATE_ANDX"
      - "SMB_COM_WRITE"
  selection_anonymous_upload:
    zeek.ftp.request|contains:
      - "STOR"
      - "PUT"
      - "anonymous"
  condition: selection_ftp or selection_smb or selection_anonymous_upload
falsepositives:
  - Legitimate file transfer systems and anonymous FTP servers used for business processes.
level: medium
fields:
  - zeek.ftp.request
  - zeek.smb.command
  - zeek.orig_h
`,Tu=`---
title: HTTP file downloads — Zeek detection by URI/user-agent/filename
id: d1105a01-0003-4c11-8a05-000000000003
status: experimental
description: Detect HTTP file downloads (common tool installers, payload names) via Zeek by matching URIs, filenames, or suspicious User-Agent strings often used when retrieving adversary tools.
references:
  - https://attack.mitre.org/techniques/T1105/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1105
  - tactic.command-and-control
  - platform:network
  - technique:T1105
  - mitre_version:16.1
  - Metasploit
  - Cobalt_Strike
associated_groups: []
associated_malware:
  - Metasploit
  - Cobalt Strike
logsource:
  product: network
  service: zeek
detection:
  selection_uri:
    zeek.http.uri|contains:
      - ".exe"
      - ".dll"
      - ".zip"
      - ".tar.gz"
      - "download"
      - "installer"
  selection_filename:
    zeek.file.name|contains:
      - "meterpreter"
      - "cobalt"
      - "beacon"
      - "agent"
  selection_useragent:
    zeek.http.user_agent|contains:
      - "curl"
      - "Wget"
      - "python-requests"
  condition: selection_uri or selection_filename or selection_useragent
falsepositives:
  - Legitimate software downloads, package updates, and developer downloads. Correlate with endpoint execution to improve fidelity.
level: medium
fields:
  - zeek.http.uri
  - zeek.http.user_agent
  - zeek.file.name
  - zeek.orig_h
`,Cu=`---
title: Ingress Tool Transfer Detection
id: b4e7f2a9-8d6c-4e5f-b4e7-2f9a8d6c5b4b
status: experimental
description: >-
  Detects ingress tool transfer by monitoring for file downloads, tool
  staging activities, or binary transfers from external sources that
  may indicate malware or tool deployment.
references:
  - https://attack.mitre.org/techniques/T1105/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1105
  - tool_transfer
  - file_download
  - binary_staging
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  executable_download:
    TargetFilename|endswith:
      - '.exe'
      - '.dll'
      - '.bat'
      - '.ps1'
    TargetFilename|contains:
      - '\\Temp\\'
      - '\\Downloads\\'
  script_download:
    TargetFilename|endswith:
      - '.vbs'
      - '.js'
      - '.py'
      - '.pl'
  suspicious_location:
    TargetFilename|startswith:
      - 'C:\\Users\\Public\\'
      - 'C:\\Windows\\Temp\\'
      - 'C:\\Temp\\'
  condition: executable_download or script_download or suspicious_location
falsepositives:
  - Legitimate software downloads
  - System updates
level: medium
`,Eu=`---
title: Linux curl/wget/scp/rsync downloads in syslog
id: d1105a01-0004-4c11-8a05-000000000004
status: experimental
description: Detect use of curl, wget, scp, sftp or rsync to retrieve files from remote hosts recorded in syslog/audit — common ingress tool transfer on Linux hosts.
references:
  - https://attack.mitre.org/techniques/T1105/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1105
  - tactic.command-and-control
  - platform:linux
  - technique:T1105
  - mitre_version:16.1
  - Lazarus
associated_groups:
  - Lazarus
associated_malware: []
logsource:
  product: linux
  service: syslog
detection:
  selection_curl_wget:
    Message|contains:
      - "curl -O"
      - "curl -o"
      - "wget "
      - "scp "
      - "sftp "
      - "rsync "
  selection_target_path:
    Message|contains:
      - "/tmp/"
      - "/var/tmp/"
      - "/home/"
      - "/dev/shm/"
  condition: selection_curl_wget and selection_target_path
falsepositives:
  - Admins or automation using curl/wget/rsync for legitimate package retrieval or configuration management. Tune allowlists for repo servers and configuration management hosts.
level: high
fields:
  - Message
  - Time
  - Hostname
`,Pu=`---
title: Unusual Process Making Network Connection
id: b8a8d7b1-77c4-42ea-8dd5-21290fefaa51
status: experimental
description: Detects outbound network activity from suspicious or abused processes like powershell.exe, regsvr32.exe, rundll32.exe, or mshta.exe using Sysmon Event ID 3.
author: Matthew Iverson
date: 2025/04/20
logsource:
  product: windows
  service: sysmon
  category: network_connection
detection:
  selection_event:
    EventID: 3
  selection_process:
    Image|endswith:
      - '\\powershell.exe'
      - '\\regsvr32.exe'
      - '\\mshta.exe'
      - '\\rundll32.exe'
  condition: selection_event and selection_process
fields:
  - Image
  - DestinationIp
  - DestinationPort
  - Protocol
  - Initiated
  - ProcessId
  - ComputerName
falsepositives:
  - Legitimate automation or admin tools
  - Internal management scripts
level: high
tags:
  - attack.command_and_control
  - attack.t1105
  - sysmon
`,Au=`---
title: PowerShell BITSJob or Invoke-WebRequest file downloads
id: d1105a01-0002-4c11-8a05-000000000002
status: experimental
description: >
  Detect PowerShell using BITS (Start-BitsTransfer / BITSJob) or Invoke-WebRequest/Invoke-RestMethod to download executables or archives into
  user-writable paths — often used for ingress tool transfer.
references:
  - https://attack.mitre.org/techniques/T1105/
author: Matthew Iverson
date: 2025-10-19
tags:
  - attack.t1105
  - tactic.command-and-control
  - platform:windows
  - technique:T1105
  - mitre_version:16.1
  - Powershell_Empire
  - Invoke-WebRequest
associated_groups: []
associated_malware:
  - PowerShell Empire
logsource:
  product: windows
  service: powershell
detection:
  selection_bits:
    EventID: 4104
    ScriptBlockText|contains:
      - "Start-BitsTransfer"
      - "Add-BitsFile"
      - "Complete-BitsTransfer"
  selection_invoke:
    EventID: 4104
    ScriptBlockText|contains:
      - "Invoke-WebRequest"
      - "Invoke-RestMethod"
      - "-OutFile"
  selection_target_path:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
    CommandLine|contains:
      - "-OutFile"
      - ".exe"
      - ".zip"
      - ".ps1"
  condition: (selection_bits or selection_invoke) or selection_target_path
falsepositives:
  - Legitimate automation or update scripts using BITS/Invoke-WebRequest to fetch payloads.
level: high
fields:
  - EventID
  - ScriptBlockText
  - CommandLine
  - Image
`,Lu=`---
title: SMB File Transfer Activities
id: i1j2k3l4-m5n6-7890-abcd-111111111111
status: experimental
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'copy \\\\\\\\*'
      - 'xcopy \\\\\\\\*'
      - 'robocopy \\\\\\\\*'
      - 'net use \\\\\\\\*'
      - 'New-PSDrive'
      - 'Copy-Item \\\\\\\\*'
      - 'scp'
      - 'rsync'
      - 'smbclient'
  condition: selection
tags:
  - attack.command-and-control
  - attack.t1105
`,Mu=`---
title: Suspicious Download Tools and Methods
id: i9j0k1l2-m3n4-5678-9012-345678ijklmn
status: experimental
description: Detects suspicious file download methods and tools used for ingress tool transfer
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_certutil:
    EventID: 1
    Image|endswith: '\\certutil.exe'
    CommandLine|contains:
      - '-urlcache'
      - '-split'
      - '-f'
      - 'http'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Invoke-WebRequest'
      - 'iwr'
      - 'wget'
      - 'curl'
      - 'DownloadFile'
      - 'DownloadString'
      - 'WebClient'
      - 'Net.WebClient'
      - 'Start-BitsTransfer'
  selection_bitsadmin:
    EventID: 1
    Image|endswith: '\\bitsadmin.exe'
    CommandLine|contains:
      - '/transfer'
      - '/download'
      - '/addfile'
  selection_hh:
    EventID: 1
    Image|endswith: '\\hh.exe'
    CommandLine|contains:
      - 'http'
      - 'https'
      - '.chm'
  selection_mshta:
    EventID: 1
    Image|endswith: '\\mshta.exe'
    CommandLine|contains:
      - 'http'
      - 'https'
      - 'javascript'
      - 'vbscript'
  suspicious_urls:
    CommandLine|contains:
      - 'raw.githubusercontent'
      - 'pastebin.com'
      - 'bit.ly'
      - 'tinyurl'
      - 'shortened'
      - '.tk'
      - '.ml'
      - '.ga'
      - '.cf'
  condition: (selection_certutil or selection_powershell or selection_bitsadmin or selection_hh or selection_mshta) and suspicious_urls
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
falsepositives:
  - Software updates
  - Legitimate administrative downloads
  - Development tools
level: medium
tags:
  - attack.command-and-control
  - attack.t1105
  - sysmon
  - windows
`,Ru=`---
title: Standard Encoding for Data Encoding
id: f5b8e3a6-9c7d-4e2f-f5b8-3e6a9c7d2f5b
status: experimental
description: >-
  Detects standard encoding usage by monitoring for Base64, hex, or other
  standard encoding patterns in network communications that may be used
  to encode C2 data and evade detection.
references:
  - https://attack.mitre.org/techniques/T1132/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1132.001
  - standard_encoding
  - base64
  - data_encoding
logsource:
  product: zeek
  service: http
detection:
  base64_data:
    uri|contains:
      - 'base64'
      - '==='
      - 'encode'
  hex_encoding:
    uri|regex: '[0-9a-fA-F]{20,}'
    method: 'POST'
  url_encoding:
    uri|contains:
      - '%2F%2F'
      - '%3A%2F%2F'
      - '%20%20%20'
  condition: base64_data or hex_encoding or url_encoding
falsepositives:
  - Legitimate data encoding
  - Web application functionality
level: low
`,Nu=`---
title: Non-Standard Encoding for Data Encoding
id: a9c6f4e7-8d5b-4e3f-a9c6-4f7e8d5b3a9b
status: experimental
description: >-
  Detects non-standard encoding usage by monitoring for custom encoding
  schemes, unusual character sets, or proprietary encoding methods that
  may be used to obfuscate C2 communications and evade detection.
references:
  - https://attack.mitre.org/techniques/T1132/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1132.002
  - non_standard_encoding
  - custom_encoding
  - obfuscation
logsource:
  product: zeek
  service: http
detection:
  unusual_charset:
    uri|contains:
      - 'charset=unknown'
      - 'custom'
      - 'proprietary'
  binary_data:
    content_type: 'application/octet-stream'
    request_body_len|gte: 1000
  encoded_patterns:
    uri|regex: '^[!@#$%^&*()_+{}|:<>?]{10,}$'
  condition: unusual_charset or binary_data or encoded_patterns
falsepositives:
  - Custom applications
  - Binary file transfers
level: medium
`,Fu=`---
title: Remote Access Software for Command and Control
id: a6c9f4e8-7b5d-4e2f-a6c9-4f8e7b5d2a6b
status: experimental
description: >-
  Detects remote access software usage for command and control by monitoring
  for TeamViewer, VNC, RDP, or other remote access tools that may be
  abused for unauthorized system access and C2 communications.
references:
  - https://attack.mitre.org/techniques/T1219/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1219
  - remote_access
  - teamviewer
  - vnc
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  remote_tools:
    Image|endswith:
      - '\\teamviewer.exe'
      - '\\vnc.exe'
      - '\\anydesk.exe'
      - '\\logmein.exe'
  suspicious_args:
    CommandLine|contains:
      - '/password'
      - '/connect'
      - '/silent'
      - '/hide'
  network_access:
    Image|contains:
      - 'remote'
      - 'access'
      - 'desktop'
  condition: remote_tools or (suspicious_args and network_access)
falsepositives:
  - Legitimate remote support
  - Authorized remote access
level: medium
`,qu=`title: AI-Generated Phishing Content Detection
id: 4e7f8c2a-9b3d-4f1e-8a6c-5d7b9e4f2a8c
status: experimental
description: Detects network indicators of AI-generated phishing campaigns with modern language model characteristics
logsource:
  product: proxy
  service: web
detection:
  selection_phishing_domains:
    c-uri|contains:
      - 'phish'
      - 'secure-'
      - 'verify-'
      - 'update-'
      - 'confirm-'
      - 'account-'
  selection_ai_indicators:
    c-uri|contains:
      - 'chatgpt'
      - 'claude'
      - 'gemini'
      - 'copilot'
      - 'ai-assist'
  selection_fake_auth:
    c-uri|contains:
      - '/login'
      - '/signin'
      - '/auth'
      - '/verify'
      - '/confirm'
  selection_typosquatting:
    c-uri|re: '.*(microsoft|google|amazon|apple|meta|paypal|bank)[0-9-].*'
  selection_suspicious_tlds:
    c-uri|contains:
      - '.tk'
      - '.ml'
      - '.ga'
      - '.cf'
      - '.top'
      - '.click'
  selection_post_data:
    cs-method: 'POST'
    cs-bytes|gt: 100
  condition: (selection_phishing_domains or selection_typosquatting) and selection_fake_auth and selection_post_data and not selection_ai_indicators
level: high
tags:
  - attack.initial_access
  - attack.t1566.001
  - attack.t1566.002
  - attack.command_and_control
  - attack.t1071.001
  - ai_generated
  - phishing
  - social_engineering
references:
  - https://attack.mitre.org/techniques/T1566/001/
  - https://attack.mitre.org/techniques/T1566/002/
`,Ou=`title: Deepfake Voice and Video Call Social Engineering Indicators
id: 6a9e7c3f-8d2b-4f5a-9c7e-3f8a6b4d7e9c
status: experimental
description: Detects network indicators of deepfake voice/video-based social engineering attacks through communication platforms
logsource:
  product: proxy
  service: web
detection:
  selection_voip_platforms:
    c-uri|contains:
      - 'zoom.us'
      - 'teams.microsoft.com'
      - 'meet.google.com'
      - 'webex.com'
      - 'gotomeeting.com'
      - 'skype.com'
      - 'discord.com'
      - 'slack.com'
  selection_media_streams:
    c-uri|contains:
      - '/media'
      - '/stream'
      - '/video'
      - '/audio'
      - '/call'
      - '/conference'
  selection_high_bandwidth:
    sc-bytes|gt: 10485760  # > 10MB indicating video/audio streams
    cs-bytes|gt: 1048576   # > 1MB upload
  selection_suspicious_patterns:
    c-useragent|contains:
      - 'deepfake'
      - 'voice-clone'
      - 'synthetic'
      - 'artificial'
  selection_ai_services:
    c-uri|contains:
      - 'elevenlabs'
      - 'murf.ai'
      - 'resemble.ai'
      - 'replica.ai'
      - 'speechify'
  selection_unusual_timing:
    time|gt: 22:00:00  # Calls outside business hours
    time|lt: 06:00:00
  condition: selection_voip_platforms and selection_media_streams and selection_high_bandwidth and not selection_suspicious_patterns
level: medium
tags:
  - attack.initial_access
  - attack.t1566.004
  - attack.command_and_control
  - attack.t1071.001
  - deepfake
  - voice_cloning
  - social_engineering
  - voip_abuse
references:
  - https://attack.mitre.org/techniques/T1566/004/
  - https://attack.mitre.org/techniques/T1071/001/
`,Wu=`---
title: Dynamic DNS for Command and Control
id: a9c6f3e4-7b8d-4e5f-a9c6-3f4e7b8d5a9b
status: experimental
description: >-
  Detects dynamic DNS usage for command and control by monitoring for
  connections to dynamic DNS providers, frequently changing DNS records,
  or suspicious domain resolution patterns.
references:
  - https://attack.mitre.org/techniques/T1568/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1568.001
  - dynamic_dns
  - dns_provider
  - c2_infrastructure
logsource:
  product: zeek
  service: dns
detection:
  ddns_providers:
    query|endswith:
      - '.dyndns.org'
      - '.no-ip.com'
      - '.ddns.net'
      - '.freedns.org'
  short_ttl:
    TTL|lte: 300
    qtype_name: 'A'
  frequent_changes:
    query|count|gte: 10
    answers|count|gte: 5
  condition: ddns_providers or short_ttl or frequent_changes
falsepositives:
  - Legitimate dynamic DNS usage
  - Home network services
level: medium
`,ju=`---
title: Domain Generation Algorithm Detection
id: b7d4f8e5-9c6a-4e3f-b7d4-8f5e9c6a3b7b
status: experimental
description: >-
  Detects domain generation algorithm (DGA) usage by monitoring for
  algorithmically generated domains, suspicious domain patterns, or
  DNS queries to randomly generated domain names.
references:
  - https://attack.mitre.org/techniques/T1568/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1568.002
  - dga
  - algorithmic_domains
  - random_domains
logsource:
  product: zeek
  service: dns
detection:
  random_domains:
    query|length|gte: 15
    query|contains:
      - 'qwertyuiop'
      - 'abcdefgh'
      - 'aaaaaaa'
  entropy_check:
    query|regex: '^[a-z]{10,20}\\.(com|net|org)$'
  numeric_domains:
    query|contains: '[0-9]{5,}'
    qtype_name: 'A'
  condition: random_domains or entropy_check or numeric_domains
falsepositives:
  - CDN-generated subdomains
  - Legitimate random identifiers
level: high
`,$u=`---
title: DNS Calculation for Command and Control
id: c8e5f2a9-4d7b-4e6f-c8e5-2f9a4d7b6c8b
status: experimental
description: >-
  Detects DNS calculation techniques by monitoring for DNS queries with
  mathematical patterns, calculated domain names, or algorithmic DNS
  resolution patterns used for C2 communication.
references:
  - https://attack.mitre.org/techniques/T1568/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1568.003
  - dns_calculation
  - algorithmic_dns
  - calculated_domains
logsource:
  product: zeek
  service: dns
detection:
  calculated_pattern:
    query|contains:
      - 'calc'
      - 'math'
      - 'sum'
      - 'hash'
  time_based:
    query|contains: '202[0-9]'
    qtype_name: 'A'
  hex_patterns:
    query|regex: '^[a-f0-9]{8,16}\\.(com|net|org)$'
  condition: calculated_pattern or time_based or hex_patterns
falsepositives:
  - Timestamp-based services
  - Legitimate calculated identifiers
level: medium
`,Uu=`---
title: Protocol Tunneling for Command and Control
id: b7d4e9f3-8c6a-4e5f-b7d4-9e3f8c6a5b7b
status: experimental
description: >-
  Detects protocol tunneling by monitoring for encapsulated protocols,
  suspicious tunneling tools, or unusual protocol usage patterns that
  may be used to hide C2 communications within legitimate traffic.
references:
  - https://attack.mitre.org/techniques/T1572/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1572
  - protocol_tunneling
  - encapsulation
  - traffic_hiding
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  tunnel_tools:
    Image|endswith:
      - '\\ssh.exe'
      - '\\plink.exe'
      - '\\stunnel.exe'
      - '\\chisel.exe'
  tunnel_args:
    CommandLine|contains:
      - '-L '
      - '-R '
      - '-D '
      - 'tunnel'
  port_forwarding:
    CommandLine|contains:
      - 'portproxy'
      - 'forward'
      - 'redirect'
  condition: tunnel_tools or tunnel_args or port_forwarding
falsepositives:
  - Legitimate SSH usage
  - Network administration
level: medium
`,zu=`---
title: Command and Control with Symmetric Cryptography
id: e4b7f8c5-9d3a-4e6f-e4b7-8f5c9d3a6e4b
status: experimental
description: >-
  Detects command and control communications using symmetric cryptography
  by monitoring for encrypted traffic patterns, symmetric cipher usage, or
  encrypted C2 channels that may indicate protected communications.
references:
  - https://attack.mitre.org/techniques/T1573/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1573.001
  - symmetric_cryptography
  - encryption
  - c2_communication
logsource:
  product: zeek
  service: ssl
detection:
  symmetric_ciphers:
    cipher|contains:
      - 'AES'
      - 'ChaCha'
      - 'DES'
  weak_encryption:
    cipher|contains:
      - 'RC4'
      - 'DES'
    version: 'TLSv10'
  self_signed_cert:
    cert_subject|contains: 'self-signed'
    established: true
  condition: symmetric_ciphers or weak_encryption or self_signed_cert
falsepositives:
  - Legitimate encrypted communications
  - Legacy applications
level: low
`,Bu=`---
title: Command and Control with Asymmetric Cryptography
id: f5c8e9a6-4b7d-4e3f-f5c8-9e6a4b7d3f5b
status: experimental
description: >-
  Detects command and control communications using asymmetric cryptography
  by monitoring for RSA/ECC key exchanges, certificate anomalies, or
  public key cryptography patterns in C2 communications.
references:
  - https://attack.mitre.org/techniques/T1573/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.command_and_control
  - attack.t1573.002
  - asymmetric_cryptography
  - public_key
  - certificate
logsource:
  product: zeek
  service: x509
detection:
  unusual_key_size:
    certificate.key_length|gte: 4096
    certificate.key_type: 'rsa'
  short_validity:
    certificate.not_valid_before: certificate.not_valid_after
    validity_period|lte: 30
  suspicious_subject:
    certificate.subject|contains:
      - 'CN=temp'
      - 'CN=test'
      - 'CN=localhost'
  condition: unusual_key_size or short_validity or suspicious_subject
falsepositives:
  - High-security applications
  - Development environments
level: low
`,Hu=`---
title: Data Exfiltration Over Bluetooth
id: f6c8e4a9-7b5d-4e3f-f6c8-4e9a7b5d3f6b
status: experimental
description: >-
  Detects data exfiltration over Bluetooth by monitoring for Bluetooth file
  transfers, suspicious Bluetooth connections, or data transmission via
  Bluetooth-enabled devices that may bypass network monitoring.
references:
  - https://attack.mitre.org/techniques/T1011/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1011.001
  - bluetooth
  - wireless
  - file_transfer
logsource:
  product: windows
  service: system
detection:
  bluetooth_service:
    EventID: 7036
    ServiceName|contains:
      - 'bluetooth'
      - 'bth'
  file_transfer:
    EventID: 7045
    ServiceName|contains:
      - 'obex'
      - 'ftp'
    ServiceType: 'bluetooth'
  bluetooth_connection:
    EventID: 20001
    DeviceInstanceId|contains: 'BTH'
  condition: bluetooth_service or file_transfer or bluetooth_connection
falsepositives:
  - Legitimate Bluetooth file sharing
  - Bluetooth peripheral connections
level: medium
`,Gu=`---
title: Data Exfiltration Over Wi-Fi
id: a7d9f5c8-6b3e-4e2f-a7d9-5f8c6b3e2a7b
status: experimental
description: >-
  Detects data exfiltration over Wi-Fi by monitoring for suspicious wireless
  network connections, ad-hoc Wi-Fi networks, or data transfers via
  unauthorized wireless access points.
references:
  - https://attack.mitre.org/techniques/T1011/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1011.002
  - wifi
  - wireless
  - access_point
logsource:
  product: windows
  service: wlansvc
detection:
  wifi_connection:
    EventID: 8001
    SSID|contains:
      - 'free'
      - 'guest'
      - 'open'
      - 'public'
  adhoc_network:
    EventID: 8002
    NetworkType: 'adhoc'
  suspicious_ap:
    EventID: 8003
    SecurityType: 'none'
    SignalStrength|gte: 80
  condition: wifi_connection or adhoc_network or suspicious_ap
falsepositives:
  - Legitimate public Wi-Fi usage
  - Guest network connections
level: low
`,Vu=`---
title: Traffic Duplication for Exfiltration
id: e9c7f5a8-2d4b-4e6f-e9c7-5f8a2d4b6e9b
status: experimental
description: >-
  Detects traffic duplication techniques used for data exfiltration by
  monitoring for network mirroring, packet duplication, or suspicious
  network redirection that may indicate data interception.
references:
  - https://attack.mitre.org/techniques/T1020/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1020.001
  - traffic_duplication
  - network_mirroring
  - packet_capture
logsource:
  product: zeek
  service: conn
detection:
  mirrored_traffic:
    id.orig_h: id.resp_h
    duration|lte: 1
  duplicate_connections:
    id.orig_h|count|gte: 2
    id.resp_h|count|gte: 2
  span_port_activity:
    service: 'unknown'
    orig_bytes|gte: 1000000
  condition: mirrored_traffic or duplicate_connections or span_port_activity
falsepositives:
  - Network monitoring tools
  - Legitimate traffic analysis
level: medium
`,Ku=`---
title: Scheduled Data Transfer Detection
id: c9f5e3a7-8d6b-4e2f-c9f5-3e7a8d6b2c9b
status: experimental
description: >-
  Detects scheduled data transfers by monitoring for automated file transfers,
  recurring upload patterns, or scheduled tasks that may be used to
  systematically exfiltrate data over time.
references:
  - https://attack.mitre.org/techniques/T1029/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1029
  - scheduled_transfer
  - automation
  - data_transfer
logsource:
  product: windows
  service: taskscheduler
detection:
  scheduled_upload:
    EventID: 129
    TaskName|contains:
      - 'upload'
      - 'sync'
      - 'backup'
      - 'transfer'
  recurring_task:
    EventID: 200
    ActionName|contains:
      - 'curl'
      - 'wget'
      - 'powershell'
  network_task:
    EventID: 201
    TaskName|contains:
      - 'ftp'
      - 'http'
      - 'sftp'
  condition: scheduled_upload or recurring_task or network_task
falsepositives:
  - Legitimate backup operations
  - Authorized file synchronization
level: medium
`,Qu=`---
title: Data Transfer Size Limits Evasion
id: d4a6f8e2-7c9b-4e5f-d4a6-8f2e7c9b5d4b
status: experimental
description: >-
  Detects attempts to evade data transfer size limits by monitoring for
  file splitting, chunked transfers, or multiple small transfers that may
  be used to bypass DLP or network monitoring thresholds.
references:
  - https://attack.mitre.org/techniques/T1030/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1030
  - size_limits
  - file_splitting
  - chunked_transfer
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  split_files:
    TargetFilename|endswith:
      - '.part'
      - '.001'
      - '.002'
      - '.zip'
  archive_creation:
    Image|endswith:
      - '\\7z.exe'
      - '\\winrar.exe'
      - '\\zip.exe'
  multiple_uploads:
    ProcessName|count|gte: 10
    TargetFilename|contains: 'upload'
  condition: split_files or archive_creation or multiple_uploads
falsepositives:
  - Legitimate file archiving
  - Large file management
level: low
`,Yu=`---
title: Exfiltration Over Command and Control Channel
id: a5e9f3c7-8b2d-4e6f-a5e9-3f7c8b2d6a5b
status: experimental
description: >-
  Detects data exfiltration over command and control channels by monitoring
  for large outbound data transfers, suspicious network communications, or
  data encoding patterns that may indicate C2 exfiltration.
references:
  - https://attack.mitre.org/techniques/T1041/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1041
  - c2_channel
  - data_transfer
  - network
logsource:
  product: zeek
  service: conn
detection:
  large_upload:
    orig_bytes|gte: 10000000
    duration|gte: 60
  suspicious_destination:
    id.resp_h|startswith:
      - '10.'
      - '172.'
      - '192.168.'
    not: true
  encrypted_traffic:
    service: 'ssl'
    orig_bytes|gte: 1000000
  condition: large_upload or (suspicious_destination and encrypted_traffic)
falsepositives:
  - Legitimate large file uploads
  - Cloud backup operations
level: medium
`,Zu=`---
title: Large Volume of HTTP POST Traffic
id: bdf91234-5a6b-4c7d-9ef0-abcdef123456
status: experimental
description: "Detects hosts generating an unusually high number of HTTP POST requests, which may indicate data exfiltration, beaconing, or abuse of web services for command and control."
references:
  - https://attack.mitre.org/techniques/T1041/
  - https://attack.mitre.org/techniques/T1071/001/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.exfiltration
  - attack.command_and_control
  - attack.t1041
  - attack.t1071.001
logsource:
  product: zeek
  service: http
detection:
  post_method:
    method: "POST"
  timeframe: 5m
  threshold:
    count: 20
  condition: post_method
falsepositives:
  - High-volume API integrations or legitimate applications uploading data.
level: high
`,Ju=`---
title: Exfiltration Over Symmetric Encrypted Non-C2 Protocol
id: b6f4e8c2-9d7a-4e3f-b6f4-8e2c9d7a3b6b
status: experimental
description: >-
  Detects data exfiltration over symmetric encrypted non-C2 protocols by
  monitoring for unusual encrypted communications, suspicious protocol usage,
  or large data transfers over encrypted channels.
references:
  - https://attack.mitre.org/techniques/T1048/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1048.001
  - encrypted_protocol
  - symmetric_encryption
  - data_transfer
logsource:
  product: zeek
  service: ssl
detection:
  unusual_ssl:
    cipher|contains:
      - 'AES'
      - 'ChaCha'
    cert_subject|contains: 'self-signed'
  large_encrypted:
    orig_bytes|gte: 5000000
    duration|gte: 300
  suspicious_cert:
    cert_subject|contains:
      - 'localhost'
      - 'test'
      - 'temp'
  condition: unusual_ssl or large_encrypted or suspicious_cert
falsepositives:
  - Legitimate encrypted communications
  - Normal HTTPS traffic
level: low
`,Xu=`---
title: Exfiltration Over Asymmetric Encrypted Non-C2 Protocol
id: c7a5f9e3-8c6b-4e4f-c7a5-9f3e8c6b4c7b
status: experimental
description: >-
  Detects data exfiltration over asymmetric encrypted non-C2 protocols by
  monitoring for unusual PKI usage, suspicious certificate exchanges, or
  large data transfers using asymmetric encryption methods.
references:
  - https://attack.mitre.org/techniques/T1048/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1048.002
  - asymmetric_encryption
  - pki
  - certificate
logsource:
  product: zeek
  service: x509
detection:
  unusual_cert:
    certificate.subject|contains:
      - 'CN=temp'
      - 'CN=test'
      - 'CN=localhost'
  short_lived_cert:
    certificate.not_valid_before|contains: '2026'
    certificate.not_valid_after|contains: '2026'
  suspicious_key:
    certificate.key_length|gte: 4096
    certificate.key_type: 'rsa'
  condition: unusual_cert or short_lived_cert or suspicious_key
falsepositives:
  - Legitimate certificate operations
  - Development environments
level: low
`,ep=`---
title: Exfiltration Over Unencrypted Non-C2 Protocol
id: d8b6f4a7-9e3c-4e5f-d8b6-4f7a9e3c5d8b
status: experimental
description: >-
  Detects data exfiltration over unencrypted non-C2 protocols by monitoring
  for large data transfers over HTTP, FTP, SMTP, or other unencrypted
  protocols that may indicate data exfiltration attempts.
references:
  - https://attack.mitre.org/techniques/T1048/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1048.003
  - unencrypted_protocol
  - data_transfer
  - cleartext
logsource:
  product: zeek
  service: http
detection:
  large_post:
    method: 'POST'
    request_body_len|gte: 1000000
  file_upload:
    uri|contains:
      - '/upload'
      - '/submit'
      - '/data'
    method: 'POST'
  suspicious_content:
    content_type|contains:
      - 'application/octet-stream'
      - 'multipart/form-data'
  condition: large_post or (file_upload and suspicious_content)
falsepositives:
  - Legitimate file uploads
  - Web application functionality
level: low
`,np=`---
title: Unusual File Transfer Activity
id: b789c2f1-45e6-4d91-abcd-0987654321ef
status: experimental
description: >
  "Detects unusual file transfer activity using Zeek logs, such as large file sizes, executable/script MIME types, or transfers over
  unexpected protocols like FTP or HTTP instead of secure channels."
references:
  - https://attack.mitre.org/techniques/T1048/
author: Matthew Iverson
date: 2025-04-08
tags:
  - attack.exfiltration
  - attack.t1048
logsource:
  product: zeek
  service: files
detection:
  suspicious_mime:
    mime_type|contains:
      - "application/x-dosexec"
      - "application/x-sh"
      - "application/x-executable"
      - "application/x-msdownload"
  large_file:
    total_bytes|gt: 50000000  # >50MB
  protocol_anomaly:
    tx_hosts|contains: "ftp"
  condition: suspicious_mime OR large_file OR protocol_anomaly
falsepositives:
  - Legitimate large file transfers or patching events.
level: high
`,tp=`---
title: Data Exfiltration over USB Device
id: e5b7f9c3-8a4d-4e6f-e5b7-9f3c8a4d6e5b
status: experimental
description: >-
  Detects data exfiltration over USB devices by monitoring for large file
  transfers to removable media, suspicious USB activity, or unauthorized
  data copying to external storage devices.
references:
  - https://attack.mitre.org/techniques/T1052/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1052.001
  - usb
  - removable_media
  - data_transfer
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  usb_drive:
    TargetFilename|startswith:
      - 'E:\\'
      - 'F:\\'
      - 'G:\\'
      - 'H:\\'
  large_files:
    Image|endswith: '\\explorer.exe'
    TargetFilename|contains: ':'
    FileSize|gte: 10000000
  sensitive_data:
    TargetFilename|endswith:
      - '.xlsx'
      - '.docx'
      - '.pdf'
      - '.txt'
      - '.csv'
  condition: usb_drive and (large_files or sensitive_data)
falsepositives:
  - Legitimate USB file transfers
  - Authorized data backup
level: medium
`,ip=`---
title: Local Email Collection Detection
id: f9c6e4a7-8b3d-4e5f-f9c6-4e7a8b3d5f9b
status: experimental
description: >-
  Detects local email collection activities by monitoring for email database
  access, PST file operations, or mailbox enumeration that may indicate
  attempts to collect email data for exfiltration.
references:
  - https://attack.mitre.org/techniques/T1114/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1114.001
  - email
  - mailbox
logsource:
  product: windows
  service: sysmon
  category: file_access
detection:
  pst_access:
    TargetFilename|endswith:
      - '.pst'
      - '.ost'
      - '.edb'
  outlook_db:
    TargetFilename|contains:
      - '\\Outlook\\'
      - '\\Microsoft\\Outlook\\'
  email_export:
    Image|endswith: '\\outlook.exe'
    CommandLine|contains:
      - '/export'
      - '/backup'
  condition: pst_access or outlook_db or email_export
falsepositives:
  - Legitimate email backup operations
  - Email client maintenance
level: medium
`,sp=`---
title: Remote Email Collection Detection
id: a5d8f2e9-6c4b-4e7f-a5d8-2f9e6c4b7a5b
status: experimental
description: >-
  Detects remote email collection activities by monitoring for IMAP/POP3
  connections, email server API access, or remote mailbox enumeration
  that may indicate email data harvesting from external sources.
references:
  - https://attack.mitre.org/techniques/T1114/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1114.002
  - email
  - remote_access
logsource:
  product: zeek
  service: conn
detection:
  email_ports:
    id.resp_p|contains:
      - 993
      - 995
      - 143
      - 110
  large_download:
    service: 'ssl'
    resp_bytes|gte: 100000000
    id.resp_p: 993
  api_access:
    id.resp_p: 443
    orig_bytes|gte: 10000
    service: 'ssl'
  condition: email_ports and (large_download or api_access)
falsepositives:
  - Legitimate email client synchronization
  - Authorized email access
level: medium
`,op=`---
title: Email Forwarding Rule Creation
id: b6e9f3c7-7d5a-4e8f-b6e9-3f7c7d5a8b6b
status: experimental
description: >-
  Detects creation of email forwarding rules by monitoring for new inbox
  rules, mail flow rules, or forwarding configurations that may be used
  to automatically exfiltrate email communications.
references:
  - https://attack.mitre.org/techniques/T1114/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1114.003
  - email_forwarding
  - inbox_rules
logsource:
  product: o365
  service: exchange
detection:
  forwarding_rule:
    Operation: 'New-InboxRule'
    Parameters|contains:
      - 'ForwardTo'
      - 'ForwardAsAttachmentTo'
      - 'RedirectTo'
  transport_rule:
    Operation: 'New-TransportRule'
    Parameters|contains:
      - 'BlindCopyTo'
      - 'RedirectMessageTo'
  mailbox_forwarding:
    Operation: 'Set-Mailbox'
    Parameters|contains:
      - 'ForwardingAddress'
      - 'ForwardingSmtpAddress'
  condition: forwarding_rule or transport_rule or mailbox_forwarding
falsepositives:
  - Legitimate email delegation
  - Authorized forwarding configurations
level: high
`,ap=`---
title: Data Collection from SharePoint Repositories
id: c9f6e3a8-7d4b-4e5f-c9f6-3e8a7d4b5c9b
status: experimental
description: >-
  Detects suspicious data collection from SharePoint repositories by
  monitoring for bulk downloads, unusual access patterns, or automated
  data retrieval that may indicate data harvesting activities.
references:
  - https://attack.mitre.org/techniques/T1213/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1213.001
  - sharepoint
  - data_collection
logsource:
  product: o365
  service: sharepoint
detection:
  bulk_download:
    Operation: 'FileDownloaded'
    ItemType: 'File'
    ObjectId|count|gte: 50
  automated_access:
    UserAgent|contains:
      - 'curl'
      - 'wget'
      - 'python'
      - 'powershell'
  sensitive_files:
    Operation: 'FileAccessed'
    SourceFileName|endswith:
      - '.xlsx'
      - '.docx'
      - '.pdf'
  condition: bulk_download or automated_access or sensitive_files
falsepositives:
  - Legitimate bulk file operations
  - Authorized automated processes
level: medium
`,cp=`---
title: Data Collection from Confluence Repositories
id: d4a7f9e5-8c2b-4e6f-d4a7-9f5e8c2b6d4b
status: experimental
description: >-
  Detects suspicious data collection from Confluence repositories by
  monitoring for bulk page exports, unusual API usage, or automated
  content retrieval that may indicate data harvesting.
references:
  - https://attack.mitre.org/techniques/T1213/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1213.002
  - confluence
  - wiki
logsource:
  product: confluence
  service: audit
detection:
  bulk_export:
    action: 'EXPORT'
    objectType: 'PAGE'
    objectName|count|gte: 20
  api_access:
    action: 'VIEW'
    user_agent|contains:
      - 'curl'
      - 'wget'
      - 'python'
      - 'api'
  mass_viewing:
    action: 'VIEW'
    objectType: 'PAGE'
    userId|count|gte: 100
  condition: bulk_export or api_access or mass_viewing
falsepositives:
  - Legitimate documentation exports
  - Authorized API integrations
level: medium
`,rp=`---
title: Data Collection from Code Repositories
id: e8b5f3a6-9d7c-4e4f-e8b5-3f6a9d7c4e8b
status: experimental
description: >-
  Detects suspicious data collection from code repositories by monitoring
  for bulk repository cloning, mass file downloads, or unauthorized access
  to source code repositories that may indicate intellectual property theft.
references:
  - https://attack.mitre.org/techniques/T1213/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1213.003
  - code_repository
  - source_code
logsource:
  product: zeek
  service: http
detection:
  git_clone:
    uri|contains:
      - '/git-upload-pack'
      - '/info/refs'
      - '.git/'
    method: 'GET'
  bulk_download:
    host|endswith:
      - '.github.com'
      - '.gitlab.com'
      - '.bitbucket.org'
    orig_bytes|gte: 100000000
  api_access:
    uri|contains: '/api/'
    user_agent|contains:
      - 'curl'
      - 'wget'
      - 'python'
  condition: git_clone or bulk_download or api_access
falsepositives:
  - Legitimate development activities
  - CI/CD pipeline operations
level: low
`,lp=`---
title: Transfer Data to Cloud Account
id: b8e5f2a9-9c6d-4e7f-b8e5-2f9a9c6d7b8b
status: experimental
description: >-
  Detects unauthorized transfer of data to cloud accounts by monitoring for
  suspicious cloud uploads, account synchronization activities, or data
  transfers to personal cloud storage from corporate environments.
references:
  - https://attack.mitre.org/techniques/T1537/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1537
  - cloud_account
  - data_transfer
  - synchronization
logsource:
  product: o365
  service: sharepoint
detection:
  external_sharing:
    Operation: 'SharingSet'
    EventSource: 'SharePoint'
    SharingLevel: 'ExternalUserSharingOnly'
  large_upload:
    Operation: 'FileUploaded'
    ItemType: 'File'
    ObjectId|contains: 'personal'
  sync_activity:
    Operation: 'FileSyncDownloadedFull'
    UserAgent|contains: 'OneDrive'
  condition: external_sharing or large_upload or sync_activity
falsepositives:
  - Legitimate business cloud sharing
  - Authorized file synchronization
level: medium
`,dp=`---
title: Data Archiving via Utility
id: c7f4e8a2-8d6b-4e9f-c7f4-8e2a8d6b9c7b
status: experimental
description: >-
  Detects data archiving via utilities by monitoring for compression tool
  usage, archive creation activities, or file packaging operations that
  may be used to prepare data for exfiltration.
references:
  - https://attack.mitre.org/techniques/T1560/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1560.001
  - archive
  - compression
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  archive_tools:
    Image|endswith:
      - '\\7z.exe'
      - '\\winrar.exe'
      - '\\zip.exe'
      - '\\tar.exe'
  archive_creation:
    CommandLine|contains:
      - ' a '
      - ' -a '
      - 'create'
      - 'compress'
  sensitive_directories:
    CommandLine|contains:
      - 'C:\\Users\\'
      - 'Documents'
      - 'Desktop'
      - 'Downloads'
  condition: archive_tools and (archive_creation or sensitive_directories)
falsepositives:
  - Legitimate file archiving
  - Backup operations
level: low
`,mp=`---
title: Data Archiving via Library
id: d8e5f9a6-9c7b-4e3f-d8e5-9f6a9c7b3d8b
status: experimental
description: >-
  Detects data archiving via programming libraries by monitoring for
  archive library usage in scripts, compression API calls, or programmatic
  file packaging that may be used to prepare data for exfiltration.
references:
  - https://attack.mitre.org/techniques/T1560/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1560.002
  - library
  - scripting
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  script_archiving:
    Image|endswith:
      - '\\python.exe'
      - '\\powershell.exe'
      - '\\node.exe'
    CommandLine|contains:
      - 'zipfile'
      - 'tarfile'
      - 'compress-archive'
  library_usage:
    CommandLine|contains:
      - 'System.IO.Compression'
      - 'SharpZipLib'
      - 'archiver'
  bulk_processing:
    CommandLine|contains:
      - 'foreach'
      - 'for file in'
      - 'glob'
  condition: script_archiving or library_usage or bulk_processing
falsepositives:
  - Legitimate script operations
  - Development activities
level: low
`,up=`---
title: Data Archiving via Custom Method
id: e9f6c4a8-7d3b-4e5f-e9f6-4c8a7d3b5e9b
status: experimental
description: >-
  Detects data archiving via custom methods by monitoring for unusual file
  operations, custom compression algorithms, or non-standard data packaging
  techniques that may be used to evade detection during exfiltration.
references:
  - https://attack.mitre.org/techniques/T1560/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1560.003
  - custom_method
  - obfuscation
logsource:
  product: windows
  service: sysmon
  category: file_create
detection:
  unusual_extensions:
    TargetFilename|endswith:
      - '.dat'
      - '.bin'
      - '.tmp'
      - '.enc'
  large_files:
    FileSize|gte: 100000000
    TargetFilename|contains: 'temp'
  custom_tools:
    ProcessName|contains:
      - 'custom'
      - 'pack'
      - 'bundle'
  condition: unusual_extensions or large_files or custom_tools
falsepositives:
  - Legitimate application data files
  - System temporary files
level: low
`,pp=`---
title: Exfiltration to Code Repository
id: f4a8e6c9-3b5d-4e7f-f4a8-6e9c3b5d7f4b
status: experimental
description: >-
  Detects data exfiltration to code repositories by monitoring for suspicious
  uploads to GitHub, GitLab, or other version control platforms that may
  be used to exfiltrate sensitive data disguised as code commits.
references:
  - https://attack.mitre.org/techniques/T1567/001/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1567.001
  - code_repository
  - git
  - version_control
logsource:
  product: zeek
  service: http
detection:
  git_hosts:
    host|endswith:
      - '.github.com'
      - '.gitlab.com'
      - '.bitbucket.org'
      - '.sourceforge.net'
  large_push:
    method: 'POST'
    request_body_len|gte: 10000000
    uri|contains: 'git'
  suspicious_commit:
    method: 'POST'
    uri|contains:
      - '/upload'
      - '/commit'
      - '/push'
  condition: git_hosts and (large_push or suspicious_commit)
falsepositives:
  - Legitimate code development
  - Normal repository operations
level: low
`,gp=`---
title: Exfiltration to Cloud Storage
id: a3f7e9c5-8b4d-4e6f-a3f7-9e5c8b4d6a3b
status: experimental
description: >-
  Detects data exfiltration to cloud storage services by monitoring for
  large uploads to Dropbox, Google Drive, OneDrive, or other cloud platforms
  that may be used to exfiltrate sensitive organizational data.
references:
  - https://attack.mitre.org/techniques/T1567/002/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1567.002
  - cloud_storage
  - file_upload
  - data_transfer
logsource:
  product: zeek
  service: http
detection:
  cloud_services:
    host|endswith:
      - '.dropbox.com'
      - '.googledrive.com'
      - '.onedrive.com'
      - '.box.com'
      - '.mega.nz'
  large_upload:
    method: 'POST'
    request_body_len|gte: 50000000
  file_sync:
    uri|contains:
      - '/upload'
      - '/sync'
      - '/files'
    method: 'PUT'
  condition: cloud_services and (large_upload or file_sync)
falsepositives:
  - Legitimate cloud storage usage
  - Business file synchronization
level: low
`,_p=`---
title: Exfiltration to Text Storage Sites
id: b8e4f2a6-9c7d-4e5f-b8e4-2f6a9c7d5b8b
status: experimental
description: >-
  Detects data exfiltration to text storage sites by monitoring for uploads
  to Pastebin, GitHub Gists, or other text sharing platforms that may be
  used to exfiltrate sensitive text-based data.
references:
  - https://attack.mitre.org/techniques/T1567/003/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1567.003
  - text_storage
  - pastebin
  - data_sharing
logsource:
  product: zeek
  service: http
detection:
  text_sites:
    host|endswith:
      - '.pastebin.com'
      - '.hastebin.com'
      - '.ghostbin.com'
      - '.dpaste.org'
      - 'gist.github.com'
  text_upload:
    method: 'POST'
    content_type|contains: 'text/plain'
  large_text:
    method: 'POST'
    request_body_len|gte: 100000
    uri|contains: 'paste'
  condition: text_sites and (text_upload or large_text)
falsepositives:
  - Legitimate code sharing
  - Technical support activities
level: medium
`,fp=`---
title: Exfiltration to Instant Messaging Platforms
id: b4c7f8e5-9a6d-4e2f-b4c7-8f5e9a6d2b4b
status: experimental
description: >-
  Detects data exfiltration to instant messaging platforms by monitoring
  for large uploads to messaging services, file sharing through chat
  applications, or suspicious messaging activity that may indicate data theft.
references:
  - https://attack.mitre.org/techniques/T1567/004/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.exfiltration
  - attack.t1567.004
  - instant_messaging
  - chat_applications
  - file_sharing
logsource:
  product: zeek
  service: http
detection:
  messaging_platforms:
    host|endswith:
      - '.telegram.org'
      - '.discord.com'
      - '.slack.com'
      - '.whatsapp.com'
      - '.messenger.com'
  file_upload:
    method: 'POST'
    request_body_len|gte: 1000000
    uri|contains:
      - '/upload'
      - '/file'
      - '/attach'
  api_messaging:
    uri|contains:
      - '/api/v'
      - '/webhooks'
      - '/bot'
    method: 'POST'
  condition: messaging_platforms and (file_upload or api_messaging)
falsepositives:
  - Legitimate business communications
  - Authorized file sharing
level: medium
`,hp=`---
title: Log Enumeration for Data Collection
id: f4a7e9c5-8b6d-4e2f-f4a7-9e5c8b6d2f4b
status: experimental
description: >-
  Detects log enumeration activities by monitoring for log file access,
  event log queries, or log parsing activities that may be used to collect
  sensitive information from system logs for exfiltration.
references:
  - https://attack.mitre.org/techniques/T1654/
author: Matthew Iverson
date: 2026-04-27
tags:
  - attack.collection
  - attack.exfiltration
  - attack.t1654
  - log_enumeration
  - log_access
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  log_commands:
    CommandLine|contains:
      - 'wevtutil'
      - 'Get-EventLog'
      - 'Get-WinEvent'
      - 'eventvwr'
  log_file_access:
    TargetFilename|contains:
      - '\\Windows\\System32\\winevt\\Logs\\'
      - '.evtx'
      - '.log'
  log_export:
    CommandLine|contains:
      - '/export'
      - '/query'
      - '/format'
  condition: log_commands or log_file_access or log_export
falsepositives:
  - Legitimate system administration
  - Log analysis tools
level: medium
`,vp=`---
title: Browser Automation Tools for Click Fraud
id: l2m3n4o5-p6q7-8901-2345-678901lmnopq
status: experimental
description: Detects browser automation tools commonly used for click fraud
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_automation_tools:
    EventID: 1
    Image|endswith:
      - '\\chromedriver.exe'
      - '\\geckodriver.exe'
      - '\\selenium-server.exe'
      - '\\phantom.exe'
      - '\\phantomjs.exe'
    CommandLine|contains:
      - '--headless'
      - '--no-sandbox'
      - '--disable-gpu'
      - '--remote-debugging'
      - '--user-data-dir'
  selection_suspicious_scripts:
    EventID: 1
    Image|endswith:
      - '\\python.exe'
      - '\\node.exe'
      - '\\powershell.exe'
    CommandLine|contains:
      - 'selenium'
      - 'webdriver'
      - 'puppeteer'
      - 'playwright'
      - 'autoclick'
      - 'clickbot'
      - 'adclick'
  selection_browser_args:
    EventID: 1
    Image|endswith:
      - '\\chrome.exe'
      - '\\firefox.exe'
      - '\\msedge.exe'
    CommandLine|contains:
      - '--disable-blink-features=AutomationControlled'
      - '--disable-web-security'
      - '--allow-running-insecure-content'
      - '--disable-features=VizDisplayCompositor'
      - '--remote-debugging-port'
      - '--enable-automation'
  selection_click_scripts:
    EventID: 11  # File creation
    TargetFilename|endswith:
      - '.py'
      - '.js'
      - '.ps1'
      - '.vbs'
    TargetFilename|contains:
      - 'click'
      - 'auto'
      - 'bot'
      - 'farm'
      - 'ad'
  condition: selection_automation_tools or selection_suspicious_scripts or selection_browser_args or selection_click_scripts
fields:
  - Image
  - CommandLine
  - ProcessId
  - ParentImage
  - User
  - TargetFilename
falsepositives:
  - Legitimate web testing
  - Development environments
  - QA automation
level: medium
tags:
  - attack.impact
  - attack.t0000
  - sysmon
  - windows
  - click-fraud
`,yp=`---
title: Click Fraud and Automated Clicking Detection
id: k1l2m3n4-o5p6-7890-1234-567890klmnop
status: experimental
description: Detects automated clicking patterns and click fraud activities
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: zeek
  service: http
detection:
  selection_rapid_clicks:
    method: 'GET'
    uri|contains:
      - 'click'
      - 'ad'
      - 'banner'
      - 'impression'
      - 'cpc'
      - 'cpm'
      - 'adsense'
      - 'doubleclick'
  selection_user_agents:
    user_agent|contains:
      - 'bot'
      - 'crawler'
      - 'spider'
      - 'automated'
      - 'phantom'
      - 'selenium'
      - 'headless'
      - 'chrome/99'  # Suspicious static versions
      - 'firefox/99'
  selection_suspicious_referrers:
    referrer|contains:
      - 'google.com/search?q=click'
      - 'bing.com/search?q=click'
      - 'clickfarm'
      - 'autoclick'
      - 'botclick'
  rapid_requests:
    # Would need correlation rule for timing
    src_ip: '*'  # Same source IP
  condition: (selection_rapid_clicks and selection_user_agents) or selection_suspicious_referrers
fields:
  - src_ip
  - dst_ip
  - host
  - uri
  - method
  - user_agent
  - referrer
falsepositives:
  - Legitimate web crawlers
  - Monitoring tools
  - Load testing
level: medium
tags:
  - attack.impact
  - attack.t0000
  - zeek
  - network
  - click-fraud
`,wp=`title: Supply Chain Poisoning Through Package Managers
id: 7f9e2d4c-8b5a-4e3f-9d1c-6a8e5f2b9c4d
status: experimental
description: Detects supply chain attacks targeting package managers through malicious packages and dependency confusion attacks.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1195/
    - https://attack.mitre.org/techniques/T1195.002/
logsource:
    product: windows
    service: sysmon
detection:
    selection_package_managers:
        EventID: 1
        Image|endswith:
            - '\\npm.exe'
            - '\\pip.exe'
            - '\\gem.exe'
            - '\\nuget.exe'
            - '\\yarn.exe'
            - '\\composer.exe'
            - '\\cargo.exe'
            - '\\go.exe'
        CommandLine|contains:
            - 'install'
            - 'add'
            - 'update'
    selection_typosquatting:
        EventID: 1
        CommandLine|contains:
            - 'react-dom'  # Common typosquats
            - 'lodash'
            - 'express'
            - 'axios'
            - 'moment'
            - 'underscore'
            - 'bootstrap'
            - 'jquery'
    selection_suspicious_install:
        EventID: 1
        CommandLine|contains:
            - '--force'
            - '--ignore-scripts'
            - '--unsafe-perm'
            - '--allow-root'
            - 'postinstall'
    selection_network_exfil:
        EventID: 3
        Image|contains:
            - 'node.exe'
            - 'python.exe'
            - 'ruby.exe'
        DestinationPort:
            - 443
            - 80
            - 8080
            - 9000
        Initiated: true
    selection_file_creation:
        EventID: 11
        Image|contains:
            - 'npm'
            - 'pip'
            - 'gem'
            - 'nuget'
        TargetFilename|contains:
            - '\\AppData\\Roaming\\npm\\'
            - '\\site-packages\\'
            - '\\gems\\'
            - '\\packages\\'
    selection_malicious_scripts:
        EventID: 1
        ParentImage|contains:
            - 'npm'
            - 'pip'
            - 'gem'
        Image|endswith:
            - '\\powershell.exe'
            - '\\cmd.exe'
            - '\\bash.exe'
            - '\\sh.exe'
        CommandLine|contains:
            - 'curl'
            - 'wget'
            - 'Invoke-WebRequest'
            - 'Start-Process'
            - 'IEX'
            - 'DownloadString'
    condition: selection_package_managers and (selection_typosquatting or selection_suspicious_install or selection_malicious_scripts) or (selection_network_exfil and selection_file_creation)
level: critical
tags:
    - attack.impact
    - attack.t1195
    - attack.t1195.002
    - attack.initial_access
    - attack.t1566.002
    - sysmon
    - windows
    - supply_chain
    - package_manager
    - dependency_confusion
falsepositives:
    - Legitimate package installations with --force flag
    - Development environments with custom package repositories
    - Automated CI/CD pipeline package updates
`,bp=`title: Cloud Infrastructure Destruction Attacks
id: 3e7f8a9b-2c4d-5f1e-8a6b-9c3d4e5f7a8b
status: experimental
description: Detects malicious destruction of cloud infrastructure including VM termination, storage deletion, network isolation, and resource exhaustion attacks targeting AWS, Azure, GCP platforms.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1485/
    - https://attack.mitre.org/techniques/T1499/
logsource:
    product: windows
    service: powershell
detection:
    selection_aws_destruction:
        EventID: 4104
        ScriptBlockText|contains:
            - 'aws ec2 terminate-instances'
            - 'aws s3 rm'
            - 'aws s3api delete-bucket'
            - 'aws rds delete-db-instance'
            - 'aws lambda delete-function'
            - 'aws iam delete-'
            - 'aws cloudformation delete-stack'
            - 'DeleteVolume'
            - 'DeleteSnapshot'
    selection_azure_destruction:
        EventID: 4104
        ScriptBlockText|contains:
            - 'az vm delete'
            - 'az storage account delete'
            - 'az sql db delete'
            - 'az group delete'
            - 'az keyvault delete'
            - 'Remove-AzVM'
            - 'Remove-AzStorageAccount'
            - 'Remove-AzResourceGroup'
    selection_gcp_destruction:
        EventID: 4104
        ScriptBlockText|contains:
            - 'gcloud compute instances delete'
            - 'gcloud storage rm'
            - 'gcloud sql instances delete'
            - 'gcloud container clusters delete'
            - 'gcloud projects delete'
            - 'gsutil rm -r'
    selection_mass_operations:
        EventID: 4104
        ScriptBlockText|contains:
            - '--force'
            - '--yes'
            - '--quiet'
            - 'ForEach'
            - 'foreach'
            - 'while'
            - 'for i in'
    selection_cli_tools:
        EventID: 1
        Image|endswith:
            - '\\aws.exe'
            - '\\az.exe'
            - '\\gcloud.exe'
            - '\\kubectl.exe'
            - '\\terraform.exe'
            - '\\powershell.exe'
        CommandLine|contains:
            - 'delete'
            - 'destroy'
            - 'terminate'
            - 'remove'
            - 'rm'
    selection_network_calls:
        EventID: 3
        DestinationHostname|contains:
            - 'amazonaws.com'
            - 'azure.com'
            - 'googleapis.com'
            - 'gcp.com'
        DestinationPort: 443
    condition: (selection_aws_destruction or selection_azure_destruction or selection_gcp_destruction) and selection_mass_operations or (selection_cli_tools and selection_network_calls)
level: critical
tags:
    - attack.impact
    - attack.t1485
    - attack.t1499
    - attack.resource_hijacking
    - attack.t1496
    - powershell
    - windows
    - cloud
    - aws
    - azure
    - gcp
    - infrastructure_destruction
falsepositives:
    - Legitimate infrastructure cleanup operations
    - Automated cloud resource management scripts
    - Scheduled maintenance and decommissioning activities
`,kp=`title: Modern Wiper Malware Targeting Cloud Storage
id: 6e4f7a8b-9c2d-5e3f-7a6e-4f8b2c5d9a3e
status: experimental
description: Detects modern wiper malware targeting cloud storage services. Monitors mass file deletion and storage API abuse.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1485/
    - https://attack.mitre.org/techniques/T1070.004/
logsource:
    product: windows
    service: sysmon
detection:
    selection_cloud_sync_paths:
        EventID: 11
        TargetFilename|contains:
            - '\\OneDrive\\'
            - '\\Google Drive\\'
            - '\\Dropbox\\'
            - '\\Box Sync\\'
            - '\\iCloudDrive\\'
            - '\\pCloud\\'
            - '\\MEGA\\'
        TargetFilename|endswith:
            - '.tmp'
            - '.lock'
            - '.conflict'
            - '.deleted'
    selection_mass_deletion:
        EventID: 23  # File Delete
        Image|contains:
            - 'wiper'
            - 'destroy'
            - 'shred'
            - 'erase'
        TargetFilename|contains:
            - '\\OneDrive\\'
            - '\\Google Drive\\'
            - '\\Dropbox\\'
    selection_sync_manipulation:
        EventID: 1
        Image|endswith:
            - '\\OneDrive.exe'
            - '\\GoogleDriveSync.exe'
            - '\\Dropbox.exe'
            - '\\Box.exe'
        CommandLine|contains:
            - '/shutdown'
            - '/reset'
            - '/unlink'
            - '/signout'
            - '/pause'
    selection_api_abuse:
        EventID: 3
        DestinationHostname|contains:
            - 'onedrive.live.com'
            - 'drive.google.com'
            - 'dropbox.com'
            - 'box.com'
            - 's3.amazonaws.com'
            - 'blob.core.windows.net'
            - 'storage.googleapis.com'
        DestinationPort: 443
    selection_powershell_destruction:
        EventID: 4104
        ScriptBlockText|contains:
            - 'Remove-Item'
            - 'Clear-Content'
            - 'Set-Content'
            - 'Out-File'
            - 'OneDrive'
            - 'Google Drive'
            - 'Dropbox'
            - 'Box'
            - '-Recurse'
            - '-Force'
    selection_registry_manipulation:
        EventID: 13  # Registry value set
        TargetObject|contains:
            - 'OneDrive'
            - 'GoogleDrive'
            - 'Dropbox'
            - 'Box'
        Details|contains:
            - 'false'
            - '0'
            - 'disabled'
    selection_credential_theft:
        EventID: 10  # Process access
        TargetImage|endswith:
            - '\\OneDrive.exe'
            - '\\GoogleDriveSync.exe'
            - '\\Dropbox.exe'
        GrantedAccess: '0x1010'  # PROCESS_VM_READ
    condition: (selection_mass_deletion and selection_cloud_sync_paths) or
               (selection_sync_manipulation and selection_api_abuse) or
               (selection_powershell_destruction and selection_registry_manipulation) or selection_credential_theft
level: critical
tags:
    - attack.impact
    - attack.t1485
    - attack.t1070.004
    - attack.credential_access
    - attack.t1555
    - sysmon
    - windows
    - wiper
    - cloud_storage
    - onedrive
    - google_drive
    - dropbox
falsepositives:
    - Legitimate cloud storage maintenance and cleanup
    - User-initiated sync resets and account changes
    - Automated backup and archival processes
`,Sp=`title: SaaS Data Destruction and Exfiltration
id: 5d8e2f3a-9b6c-4e7f-2a5d-8e3f6b9c4a7e
status: experimental
description: Detects malicious data destruction and exfiltration in SaaS platforms through API abuse and bulk operations.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1485/
    - https://attack.mitre.org/techniques/T1567/
logsource:
    product: windows
    service: powershell
detection:
    selection_o365_destruction:
        EventID: 4104
        ScriptBlockText|contains:
            - 'Remove-Mailbox'
            - 'Remove-MailboxFolder'
            - 'Remove-UnifiedGroup'
            - 'Remove-SPOSite'
            - 'Remove-PnPFile'
            - 'Clear-RecycleBin'
            - 'Remove-AzureADUser'
            - 'Remove-MgUser'
    selection_google_workspace:
        EventID: 4104
        ScriptBlockText|contains:
            - 'gam delete'
            - 'gam remove'
            - 'gsuite delete'
            - 'google-api-python-client'
            - 'drive.files().delete'
            - 'gmail.users().messages().delete'
    selection_salesforce_api:
        EventID: 4104
        ScriptBlockText|contains:
            - 'sfdx force:data:record:delete'
            - 'sf data delete'
            - 'salesforce api delete'
            - 'DELETE /services/data/'
    selection_bulk_operations:
        EventID: 4104
        ScriptBlockText|contains:
            - 'Invoke-RestMethod'
            - 'Invoke-WebRequest'
            - 'HttpClient'
            - 'WebClient'
        ScriptBlockText|regex:
            - '.*delete.*\\d{2,}.*'  # delete with numbers (bulk)
            - '.*remove.*\\d{2,}.*'  # remove with numbers (bulk)
    selection_exfiltration:
        EventID: 4104
        ScriptBlockText|contains:
            - 'Export-Mailbox'
            - 'Export-PST'
            - 'Get-Mailbox | ForEach'
            - 'Get-SPOFile'
            - 'Download-File'
            - 'Copy-Item'
    selection_api_tools:
        EventID: 1
        Image|endswith:
            - '\\powershell.exe'
            - '\\python.exe'
            - '\\curl.exe'
            - '\\wget.exe'
        CommandLine|contains:
            - 'api'
            - 'rest'
            - 'graph.microsoft.com'
            - 'googleapis.com'
            - 'salesforce.com'
    selection_network_activity:
        EventID: 3
        DestinationHostname|contains:
            - 'graph.microsoft.com'
            - 'outlook.office365.com'
            - 'googleapis.com'
            - 'salesforce.com'
            - 'dropbox.com'
            - 'box.com'
        DestinationPort: 443
    condition: (selection_o365_destruction or selection_google_workspace or selection_salesforce_api) and
               selection_bulk_operations or (selection_exfiltration and selection_api_tools and selection_network_activity)
level: critical
tags:
    - attack.impact
    - attack.t1485
    - attack.exfiltration
    - attack.t1567
    - attack.t1567.002
    - powershell
    - windows
    - saas
    - office365
    - google_workspace
    - salesforce
    - data_destruction
falsepositives:
    - Legitimate bulk data management operations
    - Automated backup and archival processes
    - Administrative cleanup and maintenance tasks
`,xp=`title: AI-Powered Ransomware with Adaptive Encryption
id: 4c8a3f2e-5b1d-4e6f-9c2a-8d7e5f3a9b1c
status: experimental
description: Detects AI-powered ransomware using adaptive encryption. Monitors neural network loading and dynamic key generation.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1486/
    - https://www.mitre.org/publications/systems-engineering-guide/
logsource:
    product: windows
    service: sysmon
detection:
    selection_ai_models:
        EventID: 1
        Image|endswith:
            - '\\python.exe'
            - '\\tensorflow.exe'
            - '\\pytorch.exe'
        CommandLine|contains:
            - 'tensorflow'
            - 'pytorch'
            - 'sklearn'
            - 'neural_network'
            - 'deep_learning'
            - '.h5'
            - '.pb'
            - '.onnx'
    selection_encryption:
        EventID: 11
        TargetFilename|endswith:
            - '.locked'
            - '.encrypted'
            - '.ai_enc'
            - '.neural'
            - '.adaptive'
    selection_mass_file_ops:
        EventID: 11
        Image|contains:
            - 'encrypt'
            - 'cipher'
            - 'crypto'
        ProcessId: '*'
    selection_adaptive_behavior:
        EventID: 1
        CommandLine|contains:
            - 'adaptive_encrypt'
            - 'ml_crypto'
            - 'neural_cipher'
            - 'ai_ransom'
            - 'smart_encrypt'
            - 'learning_crypto'
    selection_network_ml:
        EventID: 3
        DestinationPort:
            - 443
            - 8080
            - 9090
        Image|contains:
            - 'ml_'
            - 'ai_'
            - 'neural_'
    condition: (selection_ai_models and selection_encryption) or (selection_mass_file_ops and selection_adaptive_behavior) or (selection_network_ml and selection_encryption)
level: critical
tags:
    - attack.impact
    - attack.t1486
    - attack.persistence
    - attack.t1543.003
    - sysmon
    - windows
    - ransomware
    - artificial_intelligence
    - machine_learning
falsepositives:
    - Legitimate machine learning development environments
    - Data science applications performing encryption
    - Automated backup tools with ML components
`,Dp=`title: Quantum-Resistant Cryptographic Ransomware
id: 3d9e7f4a-6b8c-5e2f-9d3e-7f4a8c6b5e2f
status: experimental
description: Detects next-generation ransomware using quantum-resistant cryptographic algorithms (post-quantum cryptography) to future-proof encryption against quantum computing threats.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1486/
    - https://csrc.nist.gov/projects/post-quantum-cryptography
logsource:
    product: windows
    service: sysmon
detection:
    selection_pqc_libraries:
        EventID: 1
        Image|endswith:
            - '\\python.exe'
            - '\\openssl.exe'
        CommandLine|contains:
            - 'kyber'
            - 'dilithium'
            - 'falcon'
            - 'sphincs'
            - 'lattice'
            - 'isogeny'
            - 'post-quantum'
            - 'pqc'
            - 'ntru'
            - 'rainbow'
    selection_quantum_encryption:
        EventID: 11
        TargetFilename|endswith:
            - '.qenc'
            - '.pqc'
            - '.quantum'
            - '.kyber'
            - '.dilithium'
            - '.falcon'
            - '.locked'
        Image|contains:
            - 'encrypt'
            - 'crypto'
            - 'quantum'
    selection_crypto_process:
        EventID: 1
        CommandLine|contains:
            - 'CRYSTALS-Kyber'
            - 'CRYSTALS-Dilithium'
            - 'FALCON'
            - 'SPHINCS+'
            - 'SIKE'
            - 'BIKE'
            - 'HQC'
    selection_ransom_note:
        EventID: 11
        TargetFilename|endswith:
            - '.txt'
            - '.html'
            - '.md'
        TargetFilename|contains:
            - 'RANSOM'
            - 'DECRYPT'
            - 'QUANTUM'
            - 'PAYMENT'
            - 'RECOVERY'
    selection_mass_encryption:
        EventID: 11
        Image|contains:
            - 'encrypt'
            - 'cipher'
            - 'crypto'
            - 'quantum'
        ProcessId: '*'
    selection_network_c2:
        EventID: 3
        DestinationPort:
            - 443
            - 8080
            - 9050  # Tor
            - 4444
        Image|contains:
            - 'python'
            - 'powershell'
            - 'cmd'
    selection_crypto_apis:
        EventID: 7  # Image loaded
        ImageLoaded|endswith:
            - '\\bcrypt.dll'
            - '\\ncrypt.dll'
            - '\\crypt32.dll'
        ProcessName|contains:
            - 'encrypt'
            - 'crypto'
            - 'quantum'
    condition: (selection_pqc_libraries and selection_quantum_encryption) or
               (selection_crypto_process and selection_mass_encryption) or
               (selection_ransom_note and selection_crypto_apis and selection_network_c2)
level: critical
tags:
    - attack.impact
    - attack.t1486
    - attack.persistence
    - attack.t1547
    - attack.command_and_control
    - attack.t1071.001
    - sysmon
    - windows
    - ransomware
    - quantum_cryptography
    - post_quantum
    - advanced_encryption
falsepositives:
    - Legitimate post-quantum cryptography research and testing
    - Security software implementing quantum-resistant algorithms
    - Cryptographic library updates and implementations
`,Ip=`---
title: Backup Service Disruption
id: c1d2e3f4-g5h6-7890-abcd-222222222222
status: experimental
description: Detects attempts to stop or disable backup services
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'stop'
      - 'delete'
      - 'config'
      - 'disable'
  backup_services:
    CommandLine|contains:
      - 'VSS'
      - 'VssVC'
      - 'swprv'
      - 'MSSQL$VEEAMSQL'
      - 'VeeamDeploymentService'
      - 'VeeamNFSSvc'
      - 'AcronisSyncAgent'
      - 'BackupExecVSSProvider'
      - 'BackupExecAgentAccelerator'
      - 'BackupExecAgentBrowser'
      - 'BackupExecDeviceMediaService'
      - 'BackupExecJobEngine'
      - 'BackupExecManagementService'
      - 'BackupExecRPCService'
      - 'AcronisAgent'
      - 'CASAD2DWebSvc'
      - 'CAARCUpdateSvc'
  condition: selection and backup_services
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
falsepositives:
  - Backup maintenance
  - Service updates
  - System troubleshooting
level: high
tags:
  - attack.impact
  - attack.t1489
  - sysmon
  - windows
`,Tp=`---
title: Critical System Service Disable
id: c1d2e3f4-g5h6-7890-abcd-111111111111
status: experimental
description: Detects disabling of critical system services
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection_sc:
    EventID: 1
    Image|endswith: '\\sc.exe'
    CommandLine|contains:
      - 'config'
      - 'start= disabled'
      - 'stop'
  critical_services:
    CommandLine|contains:
      - 'Themes'
      - 'AudioSrv'
      - 'Browser'
      - 'Dhcp'
      - 'Dnscache'
      - 'LanmanWorkstation'
      - 'Netlogon'
      - 'PlugPlay'
      - 'PolicyAgent'
      - 'RpcSs'
      - 'Schedule'
      - 'Spooler'
      - 'TrkWks'
      - 'UxSms'
      - 'W32Time'
      - 'Workstation'
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Set-Service'
      - 'Stop-Service'
      - '-StartupType Disabled'
      - '-Status Stopped'
  condition: (selection_sc or selection_powershell) and critical_services
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
  - ParentImage
falsepositives:
  - System maintenance
  - Service troubleshooting
  - System hardening
level: high
tags:
  - attack.impact
  - attack.t1489
  - sysmon
  - windows
`,Cp=`---
title: Database Service Disruption
id: c1d2e3f4-g5h6-7890-abcd-333333333333
status: experimental
description: Detects attempts to stop database services
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'stop'
      - 'delete'
      - 'config'
      - 'disable'
  database_services:
    CommandLine|contains:
      - 'MSSQLSERVER'
      - 'SQLSERVERAGENT'
      - 'MSSQLLaunchpad'
      - 'SQLBrowser'
      - 'MySQL'
      - 'OracleService'
      - 'PostgreSQL'
      - 'MongoDB'
      - 'Redis'
      - 'Cassandra'
      - 'Neo4j'
      - 'InfluxDB'
      - 'CouchDB'
      - 'RavenDB'
  condition: selection and database_services
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
falsepositives:
  - Database maintenance
  - Service updates
  - Planned downtime
level: high
tags:
  - attack.impact
  - attack.t1489
  - sysmon
  - windows
`,Ep=`---
title: Email Service Disruption
id: c1d2e3f4-g5h6-7890-abcd-444444444444
status: experimental
description: Detects attempts to stop email services
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'stop'
      - 'delete'
      - 'config'
      - 'disable'
  email_services:
    CommandLine|contains:
      - 'MSExchangeTransport'
      - 'MSExchangeIS'
      - 'MSExchangeMailboxAssistants'
      - 'MSExchangeRPC'
      - 'MSExchangeServiceHost'
      - 'MSExchangeADTopology'
      - 'MSExchangeAntispamUpdate'
      - 'MSExchangeDelivery'
      - 'MSExchangeDiagnostics'
      - 'MSExchangeEdgeSync'
      - 'MSExchangeFDS'
      - 'MSExchangeFastSearch'
      - 'MSExchangeHM'
      - 'MSExchangeHMHost'
      - 'MSExchangeHMRecovery'
      - 'MSExchangeHMWorker'
      - 'MSExchangeImap4'
      - 'MSExchangeMailboxReplication'
      - 'MSExchangeMonitoring'
      - 'MSExchangePop3'
      - 'MSExchangeProtectedServiceHost'
      - 'MSExchangeRepl'
      - 'MSExchangeSearch'
      - 'MSExchangeSearchHost'
      - 'MSExchangeSubmission'
      - 'MSExchangeThrottling'
      - 'MSExchangeUM'
      - 'MSExchangeUMCR'
      - 'W3SVC'
      - 'IISADMIN'
  condition: selection and email_services
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
falsepositives:
  - Exchange maintenance
  - Service updates
  - Planned maintenance
level: high
tags:
  - attack.impact
  - attack.t1489
  - sysmon
  - windows
`,Pp=`---
title: Security Service Termination
id: c3d4e5f6-g7h8-9012-3456-789012cdefgh
status: experimental
description: Detects attempts to stop or disable security-related services
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: system
detection:
  selection_sc:
    EventID: 1
    Image|endswith:
      - '\\sc.exe'
      - '\\net.exe'
    CommandLine|contains:
      - 'stop'
      - 'delete'
      - 'config'
      - 'disable'
  service_names:
    CommandLine|contains:
      - 'WinDefend'          # Windows Defender
      - 'MsMpSvc'           # Windows Defender Antimalware
      - 'WdNisSvc'          # Windows Defender Network Inspection
      - 'Sense'             # Windows Defender ATP
      - 'SamSs'             # Security Account Manager
      - 'LanmanServer'      # Server service
      - 'EventLog'          # Windows Event Log
      - 'Winmgmt'           # WMI
      - 'BITS'              # Background Transfer
      - 'wuauserv'          # Windows Update
      - 'CryptSvc'          # Cryptographic Services
      - 'VSS'               # Volume Shadow Copy
      - 'swprv'             # Shadow Copy Provider
      - 'Fax'               # Fax service
      - 'TermService'       # Terminal Services
  selection_powershell:
    EventID: 1
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - 'Stop-Service'
      - 'Set-Service'
      - 'Remove-Service'
      - 'Disable-Service'
      - 'Get-Service | Stop'
  condition: (selection_sc or selection_powershell) and service_names
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
  - ParentImage
falsepositives:
  - Legitimate system administration
  - Software updates
  - Maintenance scripts
level: high
tags:
  - attack.impact
  - attack.t1489
  - sysmon
  - windows
`,Ap=`---
title: Service Stop via sc.exe, net, Stop-Service, or WMIC
id: 6a5d9c1e-b2b3-4f71-a6b5-8f9a7a1c2d11
status: experimental
description: Detect attempts to stop Windows services using sc.exe stop, net stop, PowerShell Stop-Service, or WMIC service calls.
author: Matthew Iverson
date: 2025-10-19
references:
  - https://attack.mitre.org/techniques/T1489/
tags:
  - attack.t1489
  - tactic.impact
  - platform:windows
  - technique:T1489
  - mitre_version:16.1
logsource:
  product: windows
  service: sysmon
detection:
  proc_sc:
    EventID: 1
    Image|endswith: '\\sc.exe'
    CommandLine|contains|all:
      - " stop "
  proc_net:
    EventID: 1
    Image|endswith: '\\net.exe'
    CommandLine|contains:
      - " net stop "
      - " net  stop "
      - " net  stop"
  proc_ps:
    EventID: 1
    Image|endswith:
      - '\\powershell.exe'
      - '\\pwsh.exe'
    CommandLine|contains:
      - "Stop-Service"
      - "Set-Service -Status Stopped"
  proc_wmic:
    EventID: 1
    Image|endswith: '\\wmic.exe'
    CommandLine|contains:
      - "service"
      - "call stopservice"
      - " where "
  condition: proc_sc or proc_net or proc_ps or proc_wmic
falsepositives:
  - Legitimate administration, software installs/uninstalls, EDR actions.
level: medium
`,Lp=`---
title: Web Service Disruption
id: c1d2e3f4-g5h6-7890-abcd-555555555555
status: experimental
description: Detects attempts to stop web services
author: Matthew Iverson
date: 2026/04/27
logsource:
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 1
    CommandLine|contains:
      - 'stop'
      - 'delete'
      - 'config'
      - 'disable'
  web_services:
    CommandLine|contains:
      - 'W3SVC'
      - 'IISADMIN'
      - 'WAS'
      - 'Apache'
      - 'Nginx'
      - 'Tomcat'
      - 'JBoss'
      - 'Jetty'
      - 'GlassFish'
      - 'WebSphere'
      - 'WebLogic'
      - 'NodeJS'
      - 'PM2'
  condition: selection and web_services
fields:
  - Image
  - CommandLine
  - User
  - ProcessId
falsepositives:
  - Web server maintenance
  - Service updates
  - Planned maintenance
level: high
tags:
  - attack.impact
  - attack.t1489
  - sysmon
  - windows
`,Mp=`title: Container Cluster Compromise and Cryptocurrency Mining
id: 9b4e6f2a-7c8d-3e5f-1a9b-4d6e8f2c5a7b
status: experimental
description: Detects container cluster compromise for cryptocurrency mining. Monitors unauthorized deployments and resource hijacking.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1496/
    - https://attack.mitre.org/techniques/T1610/
logsource:
    product: linux
    service: auditd
detection:
    selection_container_tools:
        type: EXECVE
        exe:
            - '/usr/bin/docker'
            - '/usr/bin/kubectl'
            - '/usr/bin/podman'
            - '/usr/bin/containerd'
        a0|contains:
            - 'run'
            - 'exec'
            - 'apply'
            - 'create'
    selection_mining_software:
        type: EXECVE
        exe|endswith:
            - 'xmrig'
            - 'cpuminer'
            - 'cgminer'
            - 'bfgminer'
            - 'ethminer'
            - 'claymore'
            - 't-rex'
            - 'phoenixminer'
        a1|contains:
            - '--donate-level'
            - '--pool'
            - '--wallet'
            - '--algorithm'
            - '--cuda'
            - '--opencl'
    selection_container_images:
        type: EXECVE
        a2|contains:
            - 'alpine/xmrig'
            - 'ubuntu/mining'
            - 'crypto/miner'
            - 'monero'
            - 'bitcoin'
            - 'ethereum'
            - 'mining'
    selection_kubernetes_deployments:
        type: EXECVE
        exe: '/usr/bin/kubectl'
        a1|contains:
            - 'apply'
            - 'create'
            - 'run'
        a3|contains:
            - 'deployment'
            - 'daemonset'
            - 'job'
            - 'cronjob'
    selection_resource_requests:
        type: EXECVE
        a0|contains:
            - '--cpu='
            - '--memory='
            - '--gpus='
            - 'resources.requests'
            - 'resources.limits'
    selection_network_mining:
        type: SYSCALL
        syscall: 42  # connect
        success: true
    condition: (selection_container_tools and selection_mining_software) or
               (selection_kubernetes_deployments and selection_container_images) or
               (selection_container_tools and selection_resource_requests and selection_network_mining)
level: critical
tags:
    - attack.impact
    - attack.t1496
    - attack.resource_hijacking
    - attack.t1610
    - attack.deploy_container
    - auditd
    - linux
    - containers
    - kubernetes
    - docker
    - cryptocurrency
    - mining
falsepositives:
    - Legitimate cryptocurrency mining in authorized environments
    - Performance testing and benchmarking tools
    - Resource monitoring and stress testing applications
`,Rp=`title: IoT Botnet Recruitment and DDoS Amplification
id: 2f7e9a4b-8c5d-6e3f-4a2f-7e9a5c8d6b3f
status: experimental
description: Detects IoT device recruitment into botnets and DDoS amplification attacks targeting DNS, NTP, SSDP, and other UDP-based services for traffic amplification and infrastructure disruption.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1499/
    - https://attack.mitre.org/techniques/T1499.004/
logsource:
    product: zeek
    service: conn
detection:
    selection_iot_scanning:
        proto: tcp
        service: ssh
        conn_state: REJ
        resp_h|contains:
            - '192.168.'
            - '10.'
            - '172.16.'
        orig_bytes: '<100'
        duration: '<1'
    selection_telnet_bruteforce:
        proto: tcp
        id.resp_p: 23
        conn_state:
            - 'SF'
            - 'REJ'
        duration: '<5'
    selection_mirai_payloads:
        proto: tcp
        id.resp_p:
            - 22
            - 23
            - 2323
            - 8080
            - 8888
        history|contains:
            - 'Sh'  # Successful connection
        orig_bytes: '>100'
        resp_bytes: '>100'
    selection_amplification_dns:
        proto: udp
        id.resp_p: 53
        query_type: ANY
        orig_bytes: '<100'
        resp_bytes: '>1000'  # Amplification ratio
    selection_amplification_ntp:
        proto: udp
        id.resp_p: 123
        orig_bytes: '<100'
        resp_bytes: '>1000'
    selection_amplification_ssdp:
        proto: udp
        id.resp_p: 1900
        orig_bytes: '<200'
        resp_bytes: '>1000'
    selection_mass_targeting:
        proto:
            - 'tcp'
            - 'udp'
        orig_h: '*'
        missed_bytes: 0
        local_orig: false
        local_resp: false
    condition: (selection_iot_scanning or selection_telnet_bruteforce or selection_mirai_payloads) or
               (selection_amplification_dns or selection_amplification_ntp or selection_amplification_ssdp) and selection_mass_targeting
level: critical
tags:
    - attack.impact
    - attack.t1499
    - attack.t1499.004
    - attack.resource_hijacking
    - attack.t1496
    - zeek
    - network
    - iot
    - botnet
    - ddos
    - amplification
    - mirai
falsepositives:
    - Legitimate network scanning and monitoring tools
    - DNS resolution spikes during normal operations
    - NTP synchronization bursts in large networks
`,Np=`title: AI-Powered Data Manipulation and Integrity Attacks
id: 1a5e8f2b-7c9d-4e6f-8a1e-5f2b9c7d4e6f
status: experimental
description: Detects AI-powered data manipulation attacks that use machine learning to alter data integrity, modify records subtly, and perform intelligent data poisoning while avoiding detection.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1565/
    - https://attack.mitre.org/techniques/T1565.001/
logsource:
    product: windows
    service: sysmon
detection:
    selection_ai_frameworks:
        EventID: 1
        Image|endswith:
            - '\\python.exe'
            - '\\R.exe'
            - '\\julia.exe'
        CommandLine|contains:
            - 'pandas'
            - 'numpy'
            - 'scikit-learn'
            - 'tensorflow'
            - 'pytorch'
            - 'data_manipulation'
            - 'integrity_attack'
    selection_database_access:
        EventID: 3
        DestinationPort:
            - 1433  # SQL Server
            - 3306  # MySQL
            - 5432  # PostgreSQL
            - 1521  # Oracle
            - 27017  # MongoDB
        Image|contains:
            - 'python'
            - 'ml_'
            - 'ai_'
    selection_data_modification:
        EventID: 11
        TargetFilename|endswith:
            - '.csv'
            - '.xlsx'
            - '.json'
            - '.xml'
            - '.db'
            - '.sqlite'
        Image|contains:
            - 'modify'
            - 'alter'
            - 'manipulate'
            - 'poison'
    selection_steganography:
        EventID: 1
        CommandLine|contains:
            - 'steghide'
            - 'outguess'
            - 'openstego'
            - 'hide_data'
            - 'embed_payload'
            - 'lsb_'  # Least Significant Bit
    selection_ml_models:
        EventID: 11
        TargetFilename|endswith:
            - '.pkl'
            - '.joblib'
            - '.h5'
            - '.pb'
            - '.onnx'
            - '.pt'
            - '.pth'
        TargetFilename|contains:
            - 'poison'
            - 'backdoor'
            - 'manipulate'
            - 'adversarial'
    selection_network_exfil:
        EventID: 3
        DestinationPort: 443
        Initiated: true
        Image|contains:
            - 'python'
            - 'curl'
            - 'wget'
    selection_registry_persistence:
        EventID: 13
        TargetObject|contains:
            - '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run'
            - '\\Software\\Policies\\'
        Details|contains:
            - 'python'
            - 'ml_'
            - 'ai_'
            - 'data_proc'
    condition: (selection_ai_frameworks and selection_database_access) or
               (selection_data_modification and selection_ml_models) or
               (selection_steganography and selection_network_exfil) or selection_registry_persistence
level: critical
tags:
    - attack.impact
    - attack.t1565
    - attack.t1565.001
    - attack.t1565.002
    - attack.persistence
    - attack.t1547.001
    - sysmon
    - windows
    - artificial_intelligence
    - data_manipulation
    - integrity_attack
    - steganography
falsepositives:
    - Legitimate data science and analytics workflows
    - Database maintenance and ETL processes
    - Research and development activities with ML models
`,Fp=`title: Deepfake-Based Business Email Compromise
id: 8a3f5e2b-6c9d-7e4f-3a8b-5e2f9c6d4a7e
status: experimental
description: Detects deepfake-based business email compromise attacks using AI-generated audio/video content, voice cloning, and synthetic media for social engineering and financial fraud.
author: Cybersecurity Detection Engineering
date: 2024-12-01
modified: 2026-04-27
references:
    - https://attack.mitre.org/techniques/T1566/
    - https://attack.mitre.org/techniques/T1598/
logsource:
    product: windows
    service: sysmon
detection:
    selection_ai_tools:
        EventID: 1
        Image|endswith:
            - '\\python.exe'
            - '\\ffmpeg.exe'
            - '\\audacity.exe'
        CommandLine|contains:
            - 'deepfake'
            - 'voice_clone'
            - 'speech_synthesis'
            - 'face_swap'
            - 'wav2lip'
            - 'real-esrgan'
            - 'first-order'
            - 'faceswap'
            - 'deepvoice'
    selection_media_generation:
        EventID: 11
        TargetFilename|endswith:
            - '.wav'
            - '.mp3'
            - '.mp4'
            - '.avi'
            - '.mov'
        Image|contains:
            - 'synthesis'
            - 'generate'
            - 'clone'
            - 'fake'
    selection_email_clients:
        EventID: 1
        Image|endswith:
            - '\\outlook.exe'
            - '\\thunderbird.exe'
            - '\\mailbird.exe'
        CommandLine|contains:
            - 'attach'
            - 'send'
            - 'compose'
    selection_recording_tools:
        EventID: 1
        Image|contains:
            - 'record'
            - 'capture'
            - 'screen'
            - 'audio'
        CommandLine|contains:
            - '--audio'
            - '--video'
            - '--microphone'
            - '--camera'
    selection_browser_activity:
        EventID: 1
        Image|endswith:
            - '\\chrome.exe'
            - '\\firefox.exe'
            - '\\msedge.exe'
        CommandLine|contains:
            - 'webrtc'
            - 'getUserMedia'
            - 'mediaRecorder'
    selection_network_upload:
        EventID: 3
        DestinationPort:
            - 443
            - 587
            - 993
            - 995
        Initiated: true
        Image|contains:
            - 'mail'
            - 'smtp'
            - 'email'
    selection_suspicious_files:
        EventID: 11
        TargetFilename|contains:
            - 'voice_'
            - 'audio_'
            - 'video_'
            - 'deepfake_'
            - 'synthetic_'
            - 'generated_'
            - 'cloned_'
    condition: (selection_ai_tools and selection_media_generation) or
               (selection_email_clients and selection_suspicious_files) or
               (selection_recording_tools and selection_browser_activity and selection_network_upload)
level: critical
tags:
    - attack.impact
    - attack.t1566
    - attack.t1566.001
    - attack.t1566.002
    - attack.t1598
    - attack.social_engineering
    - sysmon
    - windows
    - deepfake
    - business_email_compromise
    - synthetic_media
    - voice_cloning
falsepositives:
    - Legitimate video/audio editing and production work
    - Content creation and multimedia development
    - Voice recognition and speech processing research
`,qp=`rule Javascript_Anti_Forensics 
{
    meta:
        author = "Infinit3i"
        date = "2025-09-25"
        description = "Arguements callee checks against a value to see if it has been modified"
    strings:
        $str0 = "arguments.callee"
    condition:
        $str0
}
`,Op=`rule PDF_Suspicious_Features
{
    meta:
        description = "PDF with risky features (JS, Launch, EmbeddedFiles, OpenAction, etc.)"
        author = "Infinit3i"
        date = "2025-09-24"

    strings:
        // PDF magic to limit matches to PDFs
        $pdf_magic = "%PDF-" ascii

        // Suspicious PDF name objects (case-insensitive to be safe)
        $k0 = "/JS"            ascii nocase
        $k1 = "/JavaScript"    ascii nocase
        $k2 = "/AcroForm"      ascii nocase
        $k3 = "/XFA"           ascii nocase
        $k4 = "/Launch"        ascii nocase
        $k5 = "/EmbeddedFiles" ascii nocase
        $k6 = "/OpenAction"    ascii nocase
        $k7 = "/AA"            ascii nocase
        $k8 = "/URI"           ascii nocase
        $k9 = "/SubmitForm"    ascii nocase

    condition:
        // Must be a PDF AND contain at least one of the risky keywords
        $pdf_magic at 0 and any of ($k*)
}
`,Wp=`import "pe"

rule WIN_AntiDebug_Common_APIs
{
  meta:
    author = "MJ"
    purpose = "Detects binaries using common Windows anti-debugging APIs"
    date = "2025-09-27"
    references = "IsDebuggerPresent, CheckRemoteDebuggerPresent, Nt/ZwQueryInformationProcess, OutputDebugString, GetTickCount"
    severity = "medium"

  strings:
    // ASCII + wide strings for when names are present but not imported (e.g., GetProcAddress)
    $s_isdbg      = "IsDebuggerPresent" ascii wide nocase
    $s_chkremote  = "CheckRemoteDebuggerPresent" ascii wide nocase
    $s_ntqip      = "NtQueryInformationProcess" ascii wide nocase
    $s_zwqip      = "ZwQueryInformationProcess" ascii wide nocase
    $s_odsA       = "OutputDebugStringA" ascii wide nocase
    $s_odsW       = "OutputDebugStringW" ascii wide nocase
    $s_gtc32      = "GetTickCount" ascii wide nocase
    $s_gtc64      = "GetTickCount64" ascii wide nocase
    $s_qpc        = "QueryPerformanceCounter" ascii wide nocase
    $s_qpf        = "QueryPerformanceFrequency" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Import-based hits (most reliable)
      pe.imports("KERNEL32.dll", "IsDebuggerPresent") or
      pe.imports("kernel32.dll", "IsDebuggerPresent") or
      pe.imports("KERNEL32.dll", "CheckRemoteDebuggerPresent") or
      pe.imports("kernel32.dll", "CheckRemoteDebuggerPresent") or
      pe.imports("KERNEL32.dll", "OutputDebugStringA") or
      pe.imports("kernel32.dll", "OutputDebugStringA") or
      pe.imports("KERNEL32.dll", "OutputDebugStringW") or
      pe.imports("kernel32.dll", "OutputDebugStringW") or
      pe.imports("KERNEL32.dll", "GetTickCount") or
      pe.imports("kernel32.dll", "GetTickCount") or
      pe.imports("KERNEL32.dll", "GetTickCount64") or
      pe.imports("kernel32.dll", "GetTickCount64") or
      pe.imports("KERNEL32.dll", "QueryPerformanceCounter") or
      pe.imports("kernel32.dll", "QueryPerformanceCounter") or
      pe.imports("KERNEL32.dll", "QueryPerformanceFrequency") or
      pe.imports("kernel32.dll", "QueryPerformanceFrequency") or
      pe.imports("NTDLL.DLL", "NtQueryInformationProcess") or
      pe.imports("ntdll.dll", "NtQueryInformationProcess") or
      pe.imports("NTDLL.DLL", "ZwQueryInformationProcess") or
      pe.imports("ntdll.dll", "ZwQueryInformationProcess") or

      // Fallback: string-based hits (covers GetProcAddress/dynamic resolution)
      2 of ($s_*)
    )
}
`,jp=`/*
   YARA Rules: Beacon Object File (BOF) Detection
   Author: Defensive Rules Project
   Date: 2026-04-27
   Description: Detects Beacon Object Files (BOFs) used by Cobalt Strike and similar frameworks
*/

rule BOF_Binary_Characteristics {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOF binary characteristics and structure"
        mitre_attack = "T1620"
        severity = "high"
        reference = "https://www.cobaltstrike.com/help-beacon-object-files"

    strings:
        // BOF entry point functions
        $entry1 = "go" ascii wide
        $entry2 = "main" ascii wide
        $entry3 = "start" ascii wide

        // BOF API imports common in position-independent code
        $api1 = "BeaconDataParse" ascii wide
        $api2 = "BeaconDataInt" ascii wide
        $api3 = "BeaconDataShort" ascii wide
        $api4 = "BeaconDataLength" ascii wide
        $api5 = "BeaconPrintf" ascii wide
        $api6 = "BeaconOutput" ascii wide
        $api7 = "BeaconDataExtract" ascii wide

        // Position-independent code patterns
        $pic1 = { E8 00 00 00 00 5? } // call $+5; pop reg (get EIP)
        $pic2 = { 48 8B 05 ?? ?? ?? ?? } // mov rax, [rip+offset]
        $pic3 = { E9 ?? ?? ?? ?? } // jmp relative

        // Memory manipulation patterns common in BOFs
        $mem1 = "VirtualAlloc" ascii wide
        $mem2 = "VirtualProtect" ascii wide
        $mem3 = "WriteProcessMemory" ascii wide
        $mem4 = "ReadProcessMemory" ascii wide
        $mem5 = "CreateRemoteThread" ascii wide

        // Cobalt Strike specific patterns
        $cs1 = "teamserver" ascii wide nocase
        $cs2 = "malleable" ascii wide nocase
        $cs3 = "beacon.dll" ascii wide nocase

        // BOF compilation artifacts
        $compile1 = "x64-mingw32" ascii wide
        $compile2 = "i686-w64-mingw32" ascii wide
        $compile3 = ".rdata$zzz" ascii wide

    condition:
        (uint16(0) == 0x5A4D or uint32(0) == 0x464C457F) and // PE or ELF header
        (
            (3 of ($api*)) or
            (any of ($pic*) and any of ($mem*)) or
            (any of ($cs*) and any of ($entry*)) or
            (2 of ($compile*))
        )
}

rule BOF_Reflective_Loader {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects reflective loading patterns used in BOFs"
        mitre_attack = "T1055.001"
        severity = "high"

    strings:
        // Reflective DLL loading patterns
        $refl1 = "ReflectiveLoader" ascii wide
        $refl2 = "DllMain" ascii wide
        $refl3 = "_ReflectiveLoader@" ascii wide

        // Manual DLL loading functions
        $load1 = "LdrLoadDll" ascii wide
        $load2 = "LdrGetDllHandle" ascii wide
        $load3 = "LdrGetProcedureAddress" ascii wide

        // Manual PE parsing
        $pe1 = "IMAGE_DOS_HEADER" ascii wide
        $pe2 = "IMAGE_NT_HEADERS" ascii wide
        $pe3 = "IMAGE_EXPORT_DIRECTORY" ascii wide
        $pe4 = "IMAGE_IMPORT_DESCRIPTOR" ascii wide

        // Hash-based API resolution (common in BOFs)
        $hash1 = { 33 C0 AC 84 C0 74 ?? C1 CA 0D 03 D0 } // ROR13 hash algorithm
        $hash2 = { B8 ?? ?? ?? ?? F7 E1 C1 EA ?? } // hash calculation

        // Shellcode patterns
        $shell1 = { FC 48 83 E4 F0 E8 } // common shellcode prologue
        $shell2 = { 41 51 41 50 52 51 56 48 31 D2 } // shellcode register setup

    condition:
        (
            (any of ($refl*)) or
            (2 of ($load*) and any of ($pe*)) or
            (any of ($hash*)) or
            (any of ($shell*) and filesize < 100KB)
        )
}

rule BOF_Command_Execution {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOFs designed for command execution"
        mitre_attack = "T1059"
        severity = "medium"

    strings:
        // Command execution APIs
        $exec1 = "CreateProcessA" ascii wide
        $exec2 = "CreateProcessW" ascii wide
        $exec3 = "WinExec" ascii wide
        $exec4 = "ShellExecuteA" ascii wide
        $exec5 = "ShellExecuteW" ascii wide
        $exec6 = "system" ascii wide

        // Process manipulation
        $proc1 = "OpenProcess" ascii wide
        $proc2 = "TerminateProcess" ascii wide
        $proc3 = "GetCurrentProcess" ascii wide
        $proc4 = "EnumProcesses" ascii wide

        // File operations
        $file1 = "CreateFileA" ascii wide
        $file2 = "CreateFileW" ascii wide
        $file3 = "DeleteFileA" ascii wide
        $file4 = "DeleteFileW" ascii wide
        $file5 = "MoveFileA" ascii wide
        $file6 = "MoveFileW" ascii wide

        // Registry operations
        $reg1 = "RegOpenKeyA" ascii wide
        $reg2 = "RegOpenKeyW" ascii wide
        $reg3 = "RegCreateKeyA" ascii wide
        $reg4 = "RegCreateKeyW" ascii wide
        $reg5 = "RegSetValueA" ascii wide
        $reg6 = "RegSetValueW" ascii wide

        // Network operations
        $net1 = "WSAStartup" ascii wide
        $net2 = "socket" ascii wide
        $net3 = "connect" ascii wide
        $net4 = "InternetOpenA" ascii wide
        $net5 = "InternetOpenW" ascii wide
        $net6 = "HttpOpenRequestA" ascii wide
        $net7 = "HttpOpenRequestW" ascii wide

    condition:
        (uint16(0) == 0x5A4D) and filesize < 500KB and
        (
            (3 of ($exec*)) or
            (2 of ($proc*) and 2 of ($file*)) or
            (2 of ($reg*) and any of ($exec*)) or
            (3 of ($net*))
        )
}

rule BOF_Credential_Access {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOFs designed for credential harvesting"
        mitre_attack = "T1003"
        severity = "high"

    strings:
        // LSASS interaction
        $lsass1 = "lsass.exe" ascii wide nocase
        $lsass2 = "LsaEnumerateLogonSessions" ascii wide
        $lsass3 = "LsaGetLogonSessionData" ascii wide
        $lsass4 = "LsaFreeReturnBuffer" ascii wide

        // Credential dumping
        $cred1 = "SamConnect" ascii wide
        $cred2 = "SamOpenDomain" ascii wide
        $cred3 = "SamOpenUser" ascii wide
        $cred4 = "SamQueryInformationUser" ascii wide
        $cred5 = "NetUserEnum" ascii wide
        $cred6 = "NetUserGetInfo" ascii wide

        // Security package interaction
        $sec1 = "AcquireCredentialsHandleA" ascii wide
        $sec2 = "AcquireCredentialsHandleW" ascii wide
        $sec3 = "InitializeSecurityContextA" ascii wide
        $sec4 = "InitializeSecurityContextW" ascii wide
        $sec5 = "QuerySecurityPackageInfoA" ascii wide
        $sec6 = "QuerySecurityPackageInfoW" ascii wide

        // Token manipulation
        $tok1 = "OpenProcessToken" ascii wide
        $tok2 = "DuplicateToken" ascii wide
        $tok3 = "DuplicateTokenEx" ascii wide
        $tok4 = "ImpersonateLoggedOnUser" ascii wide
        $tok5 = "SetThreadToken" ascii wide

        // Password/hash strings
        $pass1 = "password" ascii wide nocase
        $pass2 = "credential" ascii wide nocase
        $pass3 = "ntlm" ascii wide nocase
        $pass4 = "kerberos" ascii wide nocase
        $pass5 = "mimikatz" ascii wide nocase

    condition:
        (uint16(0) == 0x5A4D) and
        (
            (2 of ($lsass*)) or
            (3 of ($cred*)) or
            (2 of ($sec*) and any of ($tok*)) or
            (3 of ($tok*)) or
            (any of ($pass*) and (any of ($lsass*) or any of ($cred*) or any of ($tok*)))
        )
}

rule BOF_Persistence_Mechanisms {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOFs designed for persistence establishment"
        mitre_attack = "T1547"
        severity = "medium"

    strings:
        // Service creation/modification
        $svc1 = "OpenSCManagerA" ascii wide
        $svc2 = "OpenSCManagerW" ascii wide
        $svc3 = "CreateServiceA" ascii wide
        $svc4 = "CreateServiceW" ascii wide
        $svc5 = "ChangeServiceConfigA" ascii wide
        $svc6 = "ChangeServiceConfigW" ascii wide

        // Registry persistence
        $reg_persist1 = "SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run" ascii wide
        $reg_persist2 = "SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\RunOnce" ascii wide
        $reg_persist3 = "SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Winlogon" ascii wide
        $reg_persist4 = "SYSTEM\\\\CurrentControlSet\\\\Services" ascii wide

        // Scheduled task creation
        $task1 = "schtasks" ascii wide
        $task2 = "TaskScheduler" ascii wide
        $task3 = "ITaskService" ascii wide
        $task4 = "ITaskFolder" ascii wide

        // WMI persistence
        $wmi1 = "WbemServices" ascii wide
        $wmi2 = "WbemContext" ascii wide
        $wmi3 = "__EventFilter" ascii wide
        $wmi4 = "__EventConsumer" ascii wide

        // Startup folder
        $startup1 = "\\\\Start Menu\\\\Programs\\\\Startup" ascii wide
        $startup2 = "\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup" ascii wide

    condition:
        (uint16(0) == 0x5A4D) and
        (
            (2 of ($svc*)) or
            (any of ($reg_persist*)) or
            (2 of ($task*)) or
            (2 of ($wmi*)) or
            (any of ($startup*))
        )
}`,$p=`/*
   YARA Rule: Parent Process Spoofing Detection
   Author: Defensive Rules Project
   Date: 2026-04-27
   Description: Detects parent process spoofing and advanced injection techniques
*/

rule Parent_Process_Spoofing {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects CreateProcess with parent spoofing techniques"
        mitre_attack = "T1134.004"
        severity = "high"

    strings:
        $api1 = "CreateProcessA" ascii wide
        $api2 = "CreateProcessW" ascii wide
        $api3 = "UpdateProcThreadAttribute" ascii wide
        $api4 = "InitializeProcThreadAttributeList" ascii wide
        $flag1 = "PROC_THREAD_ATTRIBUTE_PARENT_PROCESS" ascii wide
        $flag2 = { 00 00 02 00 } // PROC_THREAD_ATTRIBUTE_PARENT_PROCESS value
        $extended = "EXTENDED_STARTUPINFO" ascii wide

    condition:
        any of ($api1, $api2) and ($api3 or $api4) and (any of ($flag*) or $extended)
}

rule Token_Manipulation_Injection {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects token manipulation for process injection"
        mitre_attack = "T1134"
        severity = "high"

    strings:
        $api1 = "OpenProcessToken" ascii wide
        $api2 = "DuplicateToken" ascii wide
        $api3 = "DuplicateTokenEx" ascii wide
        $api4 = "SetThreadToken" ascii wide
        $api5 = "ImpersonateLoggedOnUser" ascii wide
        $api6 = "CreateProcessWithTokenW" ascii wide
        $api7 = "CreateProcessAsUserA" ascii wide
        $api8 = "CreateProcessAsUserW" ascii wide

    condition:
        3 of them
}

rule Advanced_Process_Injection {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects advanced process injection techniques"
        mitre_attack = "T1055"
        severity = "high"

    strings:
        // Process Doppelganging
        $api1 = "NtCreateTransaction" ascii wide
        $api2 = "NtCreateSection" ascii wide
        $api3 = "NtRollbackTransaction" ascii wide

        // AtomBombing
        $api4 = "GlobalAddAtomA" ascii wide
        $api5 = "GlobalAddAtomW" ascii wide
        $api6 = "GlobalGetAtomNameA" ascii wide
        $api7 = "GlobalGetAtomNameW" ascii wide
        $api8 = "QueueUserAPC" ascii wide

        // Thread Execution Hijacking
        $api9 = "SuspendThread" ascii wide
        $api10 = "GetThreadContext" ascii wide
        $api11 = "SetThreadContext" ascii wide
        $api12 = "ResumeThread" ascii wide

    condition:
        (3 of ($api1, $api2, $api3)) or
        (4 of ($api4, $api5, $api6, $api7, $api8)) or
        (all of ($api9, $api10, $api11, $api12))
}

rule Hollow_Process_Indicators {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects indicators of process hollowing in memory"
        mitre_attack = "T1055.012"
        severity = "medium"

    strings:
        // Unusual PE sections or headers in hollowed processes
        $pe_magic = { 4D 5A }
        $pe_signature = { 50 45 00 00 }

        // Memory allocation patterns
        $alloc1 = "VirtualAllocEx" ascii wide
        $alloc2 = "NtAllocateVirtualMemory" ascii wide
        $write1 = "WriteProcessMemory" ascii wide
        $write2 = "NtWriteVirtualMemory" ascii wide

        // Section unmapping
        $unmap1 = "NtUnmapViewOfSection" ascii wide
        $unmap2 = "ZwUnmapViewOfSection" ascii wide

    condition:
        ($pe_magic at 0 or $pe_signature) and
        (any of ($alloc*) and any of ($write*)) and
        any of ($unmap*)
}`,Up=`/*
   YARA Rule: Process Hollowing Detection
   Author: Defensive Rules Project
   Date: 2026-04-27
   Description: Detects process hollowing techniques and suspicious process injection patterns
*/

rule ProcessHollowing_CreateProcess_Suspended {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects CreateProcess with CREATE_SUSPENDED flag often used in process hollowing"
        mitre_attack = "T1055.012"
        severity = "high"

    strings:
        $api1 = "CreateProcessA" ascii wide
        $api2 = "CreateProcessW" ascii wide
        $api3 = "NtCreateProcess" ascii wide
        $flag1 = { 04 00 00 00 } // CREATE_SUSPENDED = 0x00000004
        $flag2 = "CREATE_SUSPENDED" ascii wide
        $memory1 = "VirtualAllocEx" ascii wide
        $memory2 = "WriteProcessMemory" ascii wide
        $memory3 = "SetThreadContext" ascii wide
        $memory4 = "ResumeThread" ascii wide

    condition:
        any of ($api*) and any of ($flag*) and 2 of ($memory*)
}

rule ProcessHollowing_NtUnmapViewOfSection {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects NtUnmapViewOfSection API commonly used in process hollowing"
        mitre_attack = "T1055.012"
        severity = "high"

    strings:
        $api1 = "NtUnmapViewOfSection" ascii wide
        $api2 = "ZwUnmapViewOfSection" ascii wide
        $memory1 = "VirtualAllocEx" ascii wide
        $memory2 = "WriteProcessMemory" ascii wide
        $process1 = "CreateProcessA" ascii wide
        $process2 = "CreateProcessW" ascii wide

    condition:
        any of ($api*) and any of ($memory*) and any of ($process*)
}

rule DLL_Injection_Pattern {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects classic DLL injection pattern"
        mitre_attack = "T1055.001"
        severity = "medium"

    strings:
        $api1 = "OpenProcess" ascii wide
        $api2 = "VirtualAllocEx" ascii wide
        $api3 = "WriteProcessMemory" ascii wide
        $api4 = "CreateRemoteThread" ascii wide
        $api5 = "LoadLibraryA" ascii wide
        $api6 = "LoadLibraryW" ascii wide
        $api7 = "GetProcAddress" ascii wide

    condition:
        4 of them
}

rule ReflectiveDLL_Loading {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects reflective DLL loading patterns"
        mitre_attack = "T1055.001"
        severity = "high"

    strings:
        $string1 = "ReflectiveLoader" ascii wide
        $string2 = "DllMain" ascii wide
        $api1 = "VirtualAlloc" ascii wide
        $api2 = "VirtualProtect" ascii wide
        $api3 = "GetProcAddress" ascii wide
        $api4 = "LoadLibraryA" ascii wide
        $magic1 = { 4D 5A } // PE header
        $magic2 = { 50 45 00 00 } // PE signature

    condition:
        (any of ($string*) or 3 of ($api*)) and all of ($magic*)
}

rule Process_Masquerading_Paths {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects system processes in suspicious locations"
        mitre_attack = "T1036.005"
        severity = "medium"

    strings:
        // Legitimate system process names
        $proc1 = "svchost.exe" ascii wide nocase
        $proc2 = "lsass.exe" ascii wide nocase
        $proc3 = "csrss.exe" ascii wide nocase
        $proc4 = "winlogon.exe" ascii wide nocase
        $proc5 = "explorer.exe" ascii wide nocase

        // Suspicious paths (not system32)
        $path1 = "\\\\temp\\\\" ascii wide nocase
        $path2 = "\\\\users\\\\" ascii wide nocase
        $path3 = "\\\\downloads\\\\" ascii wide nocase
        $path4 = "\\\\desktop\\\\" ascii wide nocase
        $path5 = "\\\\appdata\\\\" ascii wide nocase

    condition:
        any of ($proc*) and any of ($path*)
}`,zp={class:"nav"},Bp={class:"container"},Hp={class:"nav-tabs"},Gp={class:"main"},Vp={class:"container"},Kp={key:0,class:"search-section"},Qp={class:"search-bar"},Yp={key:0,class:"filters"},Zp=["value"],Jp={key:1,class:"rules-grid"},Xp=["onClick"],eg={class:"rule-header"},ng={class:"rule-title"},tg={class:"rule-meta"},ig={class:"rule-tactic"},sg={class:"rule-technique"},og={class:"rule-description"},ag={key:2,class:"rules-grid"},cg=["onClick"],rg={class:"rule-header"},lg={class:"rule-title"},dg={class:"rule-meta"},mg={class:"rule-technique"},ug={class:"rule-description"},pg={key:3,class:"stats-grid"},gg={class:"stat-card"},_g={class:"stat-value"},fg={class:"stat-card"},hg={class:"stat-value"},vg={class:"stat-card"},yg={class:"stat-value"},wg={class:"stat-card"},bg={class:"stat-value"},kg={class:"modal-header"},Sg={class:"modal-content"},xg={key:0,class:"rule-details"},Dg={class:"detail-row"},Ig={class:"detail-row"},Tg={class:"detail-row"},Cg={class:"detail-row"},Eg={class:"detail-row"},Pg={class:"detail-row"},Ag={key:0,class:"detail-row"},Lg={key:1,class:"detail-row"},Mg={class:"rule-commands"},Rg={key:2,class:"detail-row"},Ng=["href"],Fg={key:1,class:"rule-details"},qg={class:"detail-row"},Og={class:"detail-row"},Wg={class:"detail-row"},jg={class:"detail-row"},$g=na({__name:"App",setup(e){const n=Le("sigma"),t=Le(""),i=Le(""),s=Le(""),o=Le(null),a=Le([]),c=Le([]),l=Le(!0),p=Le([]),m=Le([]),_=An(()=>{let S=a.value;if(t.value){const u=t.value.toLowerCase();S=S.filter(O=>O.title.toLowerCase().includes(u)||O.description.toLowerCase().includes(u)||O.technique&&O.technique.toLowerCase().includes(u))}return i.value&&(S=S.filter(u=>u.tactic.toLowerCase().includes(i.value.toLowerCase()))),s.value&&(S=S.filter(u=>u.level===s.value)),S}),T=An(()=>{if(!t.value)return c.value;const S=t.value.toLowerCase();return c.value.filter(u=>u.name.toLowerCase().includes(S)||u.description.toLowerCase().includes(S)||u.mitre_attack&&u.mitre_attack.toLowerCase().includes(S))}),C=An(()=>a.value.length+c.value.length),B=An(()=>Math.round(m.value.length/400*100)),F=S=>{try{const u=new URL(S);return u.protocol==="http:"||u.protocol==="https:"}catch{return!1}},ee=async()=>{try{console.log("Loading rules from local repository..."),console.log("Environment:","production"),console.log("Base URL:","/Defensive-Rules/");const S=Object.assign({"../../Sigma/02 Resource Development/[T1587.003]Abnormal_TLS_SSL_Certificate_Anomalies.yml":Lc,"../../Sigma/03 Initial Access/[T1078.001]Default_Account_Abuse.yml":Mc,"../../Sigma/03 Initial Access/[T1078.002]Domain_Account_Brute_Force.yml":Rc,"../../Sigma/03 Initial Access/[T1078.003]Local_Account_Abuse.yml":Nc,"../../Sigma/03 Initial Access/[T1078.004]Cloud_Account_Compromise.yml":Fc,"../../Sigma/03 Initial Access/[T1091]Replication_Through_Removable_Media.yml":qc,"../../Sigma/03 Initial Access/[T1102]Web_Service_Abuse.yml":Oc,"../../Sigma/03 Initial Access/[T1133]External_Remote_Services.yml":Wc,"../../Sigma/03 Initial Access/[T1189]Drive_by_Compromise.yml":jc,"../../Sigma/03 Initial Access/[T1190]Cloud_Storage_Bucket_Compromise.yml":$c,"../../Sigma/03 Initial Access/[T1190]Web_Application_Exploit.yml":Uc,"../../Sigma/03 Initial Access/[T1195.001]Supply_Chain_Compromise_Software.yml":zc,"../../Sigma/03 Initial Access/[T1195.002]Container_Supply_Chain_Attack.yml":Bc,"../../Sigma/03 Initial Access/[T1195.002]Supply_Chain_Compromise_Hardware.yml":Hc,"../../Sigma/03 Initial Access/[T1195.003]Compromise_Software_Dependencies.yml":Gc,"../../Sigma/03 Initial Access/[T1195]Unauthorized_Package_Manager_Activity_Networking.yml":Vc,"../../Sigma/03 Initial Access/[T1199]Cloud_Identity_Provider_Attacks.yml":Kc,"../../Sigma/03 Initial Access/[T1199]Trusted_Relationship.yml":Qc,"../../Sigma/03 Initial Access/[T1200]Hardware_Additions.yml":Yc,"../../Sigma/03 Initial Access/[T1204.001]Malicious_Link_Execution.yml":Zc,"../../Sigma/03 Initial Access/[T1204.002]Malicious_File_Execution.yml":Jc,"../../Sigma/03 Initial Access/[T1204.003]Malicious_Image_Execution.yml":Xc,"../../Sigma/03 Initial Access/[T1528]SaaS_Token_Abuse_OAuth.yml":er,"../../Sigma/03 Initial Access/[T1552.001]Cloud_API_Key_Compromise.yml":nr,"../../Sigma/03 Initial Access/[T1556.006]MFA_Bypass_Techniques.yml":tr,"../../Sigma/03 Initial Access/[T1562.007]Cloud_Security_Tool_Disable.yml":ir,"../../Sigma/03 Initial Access/[T1566.001]Email_Attachment_Execution.yml":sr,"../../Sigma/03 Initial Access/[T1566.002]AWS_Console_Credential_Phishing.yml":or,"../../Sigma/03 Initial Access/[T1566.002]Cloud_Credential_Phishing_O365.yml":ar,"../../Sigma/03 Initial Access/[T1566.002]Malicious_Link_Click.yml":cr,"../../Sigma/03 Initial Access/[T1566.003]Service_Abuse_Email.yml":rr,"../../Sigma/03 Initial Access/[T1566.004]Email_Server_Compromise.yml":lr,"../../Sigma/03 Initial Access/[T1566.005]Email_Bombing.yml":dr,"../../Sigma/03 Initial Access/[T1566.006]SMS_Phishing.yml":mr,"../../Sigma/03 Initial Access/[T1566.007]Voice_Phishing.yml":ur,"../../Sigma/03 Initial Access/[T1601]Modify_System_Image.yml":pr,"../../Sigma/03 Initial Access/[T1609]Serverless_Function_Initial_Access.yml":gr,"../../Sigma/03 Initial Access/[T1659]Content_Injection.yml":_r,"../../Sigma/04 Execution/[T1047]WMIPersistence.yml":fr,"../../Sigma/04 Execution/[T1047]WMI_Remote_Command_Execution.yml":hr,"../../Sigma/04 Execution/[T1047]wmi_remote_process_create.yml":vr,"../../Sigma/04 Execution/[T1047]wmic_suspicious_usage.yml":yr,"../../Sigma/04 Execution/[T1047]wmiexec.yml":wr,"../../Sigma/04 Execution/[T1055.002]Fileless_Container_Execution.yml":br,"../../Sigma/04 Execution/[T1055.012]Process_Hollowing_VM_Environment.yml":kr,"../../Sigma/04 Execution/[T1055]ProcessInjection.yml":Sr,"../../Sigma/04 Execution/[T1055]Process_Injection_Techniques.yml":xr,"../../Sigma/04 Execution/[T1059.001]PowerShell_Download_and_Execute.yml":Dr,"../../Sigma/04 Execution/[T1059.001]ScriptBlockLoggingWithSuspiciousContent.yml":Ir,"../../Sigma/04 Execution/[T1059.003]Windows_CT1059.003_Windows_CommandShell_EncodedCmd.yml":Tr,"../../Sigma/04 Execution/[T1059.003]Windows_CommandShell_SuspiciousParent.yml":Cr,"../../Sigma/04 Execution/[T1059]SuspiciousParentChildChain.yml":Er,"../../Sigma/04 Execution/[T1086]powershell_encoded_command.yml":Pr,"../../Sigma/04 Execution/[T1086]powershell_remote_download.yml":Ar,"../../Sigma/04 Execution/[T1106]Crypto_Native_API_Usage.yml":Lr,"../../Sigma/04 Execution/[T1106]File_System_Native_APIs.yml":Mr,"../../Sigma/04 Execution/[T1106]Managed_Code_PInvoke_or_Runtime_Interop_usage.yml":Rr,"../../Sigma/04 Execution/[T1106]Native_API_Function_Names_in_Script.yml":Nr,"../../Sigma/04 Execution/[T1106]Network_Native_API_Calls.yml":Fr,"../../Sigma/04 Execution/[T1106]PowerShell_Add-Type_DllImport_usage.yml":qr,"../../Sigma/04 Execution/[T1106]Process_Manipulation_APIs.yml":Or,"../../Sigma/04 Execution/[T1106]Registry_Native_API_Access.yml":Wr,"../../Sigma/04 Execution/[T1106]Suspicious_Native_API_Calls.yml":jr,"../../Sigma/04 Execution/[T1218.011]rundll32_remote_dll_load.yml":$r,"../../Sigma/04 Execution/[T1218.011]rundll32_suspicious_parameters.yml":Ur,"../../Sigma/04 Execution/[T1218]Utility_Abuse.yml":zr,"../../Sigma/04 Execution/[T1497.001]CPUID_VM_Detection_Evasion.yml":Br,"../../Sigma/04 Execution/[T1497.001]Hardware_Fingerprinting_Evasion.yml":Hr,"../../Sigma/04 Execution/[T1497.003]Time_Based_Anti_Analysis.yml":Gr,"../../Sigma/04 Execution/[T1562.009]Memory_Artifacts_Anti_Forensics.yml":Vr,"../../Sigma/04 Execution/[T1611]Container_Breakout_Attempts.yml":Kr,"../../Sigma/04 Execution/[T1620]BOF_Reflective_Code_Loading.yml":Qr,"../../Sigma/04 Execution/[T1620]Hypervisor_Escape_Techniques.yml":Yr,"../../Sigma/05 Defense Evasion/[T1027.010]Command_Obfuscation_Detection.yml":Zr,"../../Sigma/05 Defense Evasion/[T1055.004]Process_Injection_Early_Bird.yml":Jr,"../../Sigma/05 Defense Evasion/[T1055.013]Process_Doppelganging_Detection.yml":Xr,"../../Sigma/05 Defense Evasion/[T1055]BOF_Process_Injection.yml":el,"../../Sigma/05 Defense Evasion/[T1055]CsrssInvalidParent.yml":nl,"../../Sigma/05 Defense Evasion/[T1055]ExplorerInvalidParent.yml":tl,"../../Sigma/05 Defense Evasion/[T1055]LsassInvalidParent.yml":il,"../../Sigma/05 Defense Evasion/[T1055]SpoolsvInvalidParent.yml":sl,"../../Sigma/05 Defense Evasion/[T1055]SvchostInvalidParent.yml":ol,"../../Sigma/05 Defense Evasion/[T1195.002]Supply_Chain_Compromise_Detection.yml":al,"../../Sigma/05 Defense Evasion/[T1218.005]LOLBin_Mshta_Abuse.yml":cl,"../../Sigma/05 Defense Evasion/[T1218.011]LOLBin_Rundll32_Abuse.yml":rl,"../../Sigma/05 Defense Evasion/[T1553.003]Certificate_Pinning_Bypass.yml":ll,"../../Sigma/05 Defense Evasion/[T1562.001]AMSI_Bypass_Detection.yml":dl,"../../Sigma/05 Defense Evasion/[T1562.001]EDR_API_Unhooking_Detection.yml":ml,"../../Sigma/05 Defense Evasion/[T1562.002]PowerShell_Logging_Evasion.yml":ul,"../../Sigma/05 Defense Evasion/[T1562.006]ETW_Tampering_Detection.yml":pl,"../../Sigma/05 Defense Evasion/[T1620]Memory_Only_Malware_Detection.yml":gl,"../../Sigma/05 Persistence/[T1053.005]Malicious_Scheduled_Task_Creation.yml":_l,"../../Sigma/05 Persistence/[T1053.005]ScheduledTaskCreation.yml":fl,"../../Sigma/05 Persistence/[T1053]Unauthorized_Cron_Job_Creation.yml":hl,"../../Sigma/05 Persistence/[T1098]Abnormal_User_Account_Modifications.yml":vl,"../../Sigma/05 Persistence/[T1098]UserAddedToDomainAdmins.yml":yl,"../../Sigma/05 Persistence/[T1106]Suspicious_Module_Load_From_NonStandard_Path.yml":wl,"../../Sigma/05 Persistence/[T1136.001]NewUserCreated.yml":bl,"../../Sigma/05 Persistence/[T1542.007]Abnormal_Kernel_Module_Loading.yml":kl,"../../Sigma/05 Persistence/[T1543.003]Service_Creation.yml":Sl,"../../Sigma/05 Persistence/[T1543.003]Suspicious_Driver_Installations_or_Modifications.yml":xl,"../../Sigma/05 Persistence/[T1547.001]FileCreationsInSuspiciousPaths.yml":Dl,"../../Sigma/05 Persistence/[T1574.002]ImageLoadFromNonStandardDirectories.yml":Il,"../../Sigma/06 Privilege Escalation/[T0000]Suspicious_Sudo_Command_Usage.yml":Tl,"../../Sigma/06 Privilege Escalation/[T1134]token_theft.yml":Cl,"../../Sigma/06 Privilege Escalation/[T1543_003]named_pipe.yml":El,"../../Sigma/06 Privilege Escalation/[T1548]Privilege_Escalation_Attempts.yml":Pl,"../../Sigma/07 Defense Evasion/[T1070.004]Unusual_File_Access_or_Modification.yml":Al,"../../Sigma/07 Defense Evasion/[T1070]Log_Tampering_or_Deletion.yml":Ll,"../../Sigma/07 Defense Evasion/[T1106]Syscall_Indicators_In_Scripts.yml":Ml,"../../Sigma/07 Defense Evasion/[T1218.011]Rundll32_Proxy_Execution.yml":Rl,"../../Sigma/07 Defense Evasion/[T1497.003]CPU_Count_Checks.yml":Nl,"../../Sigma/07 Defense Evasion/[T1497.003]Extended_Sleep_and_Delay_Commands.yml":Fl,"../../Sigma/07 Defense Evasion/[T1497.003]High_Uptime_Checks_and_Delays.yml":ql,"../../Sigma/07 Defense Evasion/[T1497.003]Long_Delay_In_Compiled_Binary_via_Sleep_or_NtDelayExecution.yml":Ol,"../../Sigma/07 Defense Evasion/[T1497.003]Memory_Size_Checks.yml":Wl,"../../Sigma/07 Defense Evasion/[T1497.003]Sleep_Based_Sandbox_Evasion.yml":jl,"../../Sigma/07 Defense Evasion/[T1497.003]Start-Sleep_Long_Duration_PowerShell.yml":$l,"../../Sigma/07 Defense Evasion/[T1497.003]Stepped_Timer_Loops_and_Exponential_Backoff_patterns.yml":Ul,"../../Sigma/07 Defense Evasion/[T1497.003]Timeout_and_Choice_Delays_in_Cmd_And_Batch.yml":zl,"../../Sigma/07 Defense Evasion/[T1497.003]Uptime_Checks.yml":Bl,"../../Sigma/07 Defense Evasion/[T1497.003]VM_Detection_Evasion.yml":Hl,"../../Sigma/07 Defense Evasion/[T1497.003]Virtualization_Sandbox_Evasion_Time_Based_Evasion.yml":Gl,"../../Sigma/07 Defense Evasion/[T1562.002]AuditPolicyChanges.yml":Vl,"../../Sigma/07 Defense Evasion/[T1562]rdp.yml":Kl,"../../Sigma/07 Defense Evasion/[T1622]Anti_Debug_API_Calls.yml":Ql,"../../Sigma/07 Defense Evasion/[T1622]Debugger_Evasion.yml":Yl,"../../Sigma/07 Defense Evasion/[T1622]Exception_Handler_Checks.yml":Zl,"../../Sigma/07 Defense Evasion/[T1622]Hardware_Breakpoint_Detection.yml":Jl,"../../Sigma/07 Defense Evasion/[T1622]Memory_Protection_Checks.yml":Xl,"../../Sigma/07 Defense Evasion/[T1622]Module_Loads_Debug_DLLs_from_UserPaths.yml":ed,"../../Sigma/07 Defense Evasion/[T1622]PowerShell_IsDebuggerPresent_and_Debug_API_checks.yml":nd,"../../Sigma/07 Defense Evasion/[T1622]Process_Debug_Flag_Checks.yml":td,"../../Sigma/07 Defense Evasion/[T1622]Syslog_Auditd_ptrace_or_gdb_activity.yml":id,"../../Sigma/07 Defense Evasion/[T1622]Sysmon_CommandLine_Debugger_Tool_Invocations.yml":sd,"../../Sigma/07 Defense Evasion/[T1622]Timing_Attack_Detection.yml":od,"../../Sigma/07 Defense Evasion/[T1622]Zeek_HTTP_Debugger_Downloads_or_UserAgent.yml":ad,"../../Sigma/08 Credential Access/[T1003.001]MimikatzExecution.yml":cd,"../../Sigma/08 Credential Access/[T1078.004]suspicious_cloud_logins.yml":rd,"../../Sigma/08 Credential Access/[T1078.004]unregistered_device_logins.yml":ld,"../../Sigma/08 Credential Access/[T1110.001]Brute-Force_SSH_Attempts.yml":dd,"../../Sigma/08 Credential Access/[T1110.003]AccountLockouts.yml":md,"../../Sigma/08 Credential Access/[T1110]Repeated_Failed_Login_Attempts.yml":ud,"../../Sigma/08 Credential Access/[T1110]SSH_Brute-Force_Attack_Detection.yml":pd,"../../Sigma/08 Credential Access/[T1550.002]Pass_the_Hash.yml":gd,"../../Sigma/09 Discovery/[T1046]NonPrivate_Port500_Scan_Detection.yml":_d,"../../Sigma/09 Discovery/[T1057]Advanced_Process_Enumeration.yml":fd,"../../Sigma/09 Discovery/[T1057]Linux_ps_top_procfs_Enumeration_syslog.yml":hd,"../../Sigma/09 Discovery/[T1057]Memory_Usage_Analysis.yml":vd,"../../Sigma/09 Discovery/[T1057]Network_Process_Correlation.yml":yd,"../../Sigma/09 Discovery/[T1057]PowerShell_Get-Process_or_WMI_CIM_Win32_Process.yml":wd,"../../Sigma/09 Discovery/[T1057]Process_Handle_Analysis.yml":bd,"../../Sigma/09 Discovery/[T1057]Process_Tree_Analysis.yml":kd,"../../Sigma/09 Discovery/[T1057]Service_Process_Discovery.yml":Sd,"../../Sigma/09 Discovery/[T1057]Tasklist_Process_Enumeration.yml":xd,"../../Sigma/09 Discovery/[T1057]WMI-Activity_Win32_Process_Query.yml":Dd,"../../Sigma/09 Discovery/[T1057]WMIC_Process_List_or_Get.yml":Id,"../../Sigma/09 Discovery/[T1082]Environment_Variable_Enumeration.yml":Td,"../../Sigma/09 Discovery/[T1082]Hardware_Information_Discovery.yml":Cd,"../../Sigma/09 Discovery/[T1082]Network_Configuration_Discovery.yml":Ed,"../../Sigma/09 Discovery/[T1082]PowerShell Get-CimInstance Get-WmiObject Get-ComputerInfo.yml":Pd,"../../Sigma/09 Discovery/[T1082]Registry_System_Information_Queries.yml":Ad,"../../Sigma/09 Discovery/[T1082]System_Info_Systeminfo.yml":Ld,"../../Sigma/09 Discovery/[T1082]System_Version_and_Patch_Discovery.yml":Md,"../../Sigma/09 Discovery/[T1082]WMIC Queries for OS and BIOS.yml":Rd,"../../Sigma/09 Discovery/[T1082]ipconfig.yml":Nd,"../../Sigma/09 Discovery/[T1082]reg query for ComputerName.yml":Fd,"../../Sigma/09 Discovery/[T1082]whoami_and_hostname_enumeration.yml":qd,"../../Sigma/09 Discovery/[T1083]Cmd_dir_and_where_recursive.yml":Od,"../../Sigma/09 Discovery/[T1083]Configuration_File_Discovery.yml":Wd,"../../Sigma/09 Discovery/[T1083]Database_File_Discovery.yml":jd,"../../Sigma/09 Discovery/[T1083]File_Extension_Discovery.yml":$d,"../../Sigma/09 Discovery/[T1083]File_and_Directory_Discovery.yml":Ud,"../../Sigma/09 Discovery/[T1083]Find_and_ls_recursive_unix_syslog.yml":zd,"../../Sigma/09 Discovery/[T1083]Hidden_File_Discovery.yml":Bd,"../../Sigma/09 Discovery/[T1083]Large_File_Discovery.yml":Hd,"../../Sigma/09 Discovery/[T1083]PowerShell_Get-ChildItem_Recurse.yml":Gd,"../../Sigma/09 Discovery/[T1083]Suspicious_File_Enumeration_Tools.yml":Vd,"../../Sigma/09 Discovery/[T1083]Suspicious_File_Search_Commands.yml":Kd,"../../Sigma/09 Discovery/[T1083]WebDAV_PROPFIND_Directory_Enumeration_Zeek.yml":Qd,"../../Sigma/09 Discovery/[T1124]Boot_Time_Discovery.yml":Yd,"../../Sigma/09 Discovery/[T1124]Event_Log_Time_Analysis.yml":Zd,"../../Sigma/09 Discovery/[T1124]NTP_Configuration_Discovery.yml":Jd,"../../Sigma/09 Discovery/[T1124]PowerShell_Get-Date_GetTimeZone_GetUtcTime.yml":Xd,"../../Sigma/09 Discovery/[T1124]Regional_Settings_Discovery.yml":em,"../../Sigma/09 Discovery/[T1124]System_Clock_Enumeration.yml":nm,"../../Sigma/09 Discovery/[T1124]System_Time_Discovery.yml":tm,"../../Sigma/09 Discovery/[T1124]Time_Zone_and_Date_Discovery.yml":im,"../../Sigma/09 Discovery/[T1124]Zeek_NTP_or_UDP123_queries.yml":sm,"../../Sigma/09 Discovery/[T1124]timedatectl_hwclock_chronyc_syslog.yml":om,"../../Sigma/09 Discovery/[T1124]tzutil_query_timezone.yml":am,"../../Sigma/09 Discovery/[T1124]w32tm_query_status.yml":cm,"../../Sigma/10 Lateral Movement/[T1021.001]RDP_Lateral_Movement.yml":rm,"../../Sigma/10 Lateral Movement/[T1021.002]SMB_Windows_Admin_Shares.yml":lm,"../../Sigma/10 Lateral Movement/[T1021.003]Distributed_Component_Object_Model.yml":dm,"../../Sigma/10 Lateral Movement/[T1021.004]SSH_Lateral_Movement.yml":mm,"../../Sigma/10 Lateral Movement/[T1021.005]VNC_Remote_Access.yml":um,"../../Sigma/10 Lateral Movement/[T1021.006]Windows_Remote_Management.yml":pm,"../../Sigma/10 Lateral Movement/[T1021]Abnormal_Host_to_Host_Communication_Patterns.yml":gm,"../../Sigma/10 Lateral Movement/[T1021]Lateral_Movement_Activity_Analysis.yml":_m,"../../Sigma/10 Lateral Movement/[T1028]Windows_Remote_Management_Abuse.yml":fm,"../../Sigma/10 Lateral Movement/[T1039]Data_from_Network_Shared_Drive.yml":hm,"../../Sigma/10 Lateral Movement/[T1047]Windows_Management_Instrumentation.yml":vm,"../../Sigma/10 Lateral Movement/[T1077]admin_share.yml":ym,"../../Sigma/10 Lateral Movement/[T1080]Taint_Shared_Content.yml":wm,"../../Sigma/10 Lateral Movement/[T1135]Network_Share_Discovery.yml":bm,"../../Sigma/10 Lateral Movement/[T1210]Exploitation_Remote_Services.yml":km,"../../Sigma/10 Lateral Movement/[T1212]Exploitation_for_Credential_Access.yml":Sm,"../../Sigma/10 Lateral Movement/[T1219]Abuse_of_Remote_Administration_Tools.yml":xm,"../../Sigma/10 Lateral Movement/[T1219]meterpreter.yml":Dm,"../../Sigma/10 Lateral Movement/[T1534]Internal_Spearphishing.yml":Im,"../../Sigma/10 Lateral Movement/[T1550.001]Application_Access_Token.yml":Tm,"../../Sigma/10 Lateral Movement/[T1550.002]Pass_the_Hash.yml":Cm,"../../Sigma/10 Lateral Movement/[T1550.003]Pass_the_Ticket.yml":Em,"../../Sigma/10 Lateral Movement/[T1550.004]Web_Session_Cookie.yml":Pm,"../../Sigma/10 Lateral Movement/[T1550.005]SAML_Token_Abuse.yml":Am,"../../Sigma/10 Lateral Movement/[T1563.001]SSH_Hijacking.yml":Lm,"../../Sigma/10 Lateral Movement/[T1563.002]RDP_Hijacking.yml":Mm,"../../Sigma/10 Lateral Movement/[T1570]Lateral_Tool_Transfer.yml":Rm,"../../Sigma/10 Lateral Movement/[T1649]Steal_or_Forge_Authentication_Certificates.yml":Nm,"../../Sigma/10 Lateral Movement/[T1656]Impersonation.yml":Fm,"../../Sigma/12 Command and Control/[T1001.001]Junk_Data.yml":qm,"../../Sigma/12 Command and Control/[T1001.002]SteganographicC2.yml":Om,"../../Sigma/12 Command and Control/[T1001.002]Steganography.yml":Wm,"../../Sigma/12 Command and Control/[T1001.003]Protocol_Impersonation.yml":jm,"../../Sigma/12 Command and Control/[T1048.003]Many_Subdomains_Looking_Like_Exfiltration.yml":$m,"../../Sigma/12 Command and Control/[T1071.001]Anomalous_Connection_Volume_and_Duration.yml":Um,"../../Sigma/12 Command and Control/[T1071.001]Anomalous_Network_Traffic_or_C2_Beaconing.yml":zm,"../../Sigma/12 Command and Control/[T1071.001]Application_Layer_Protocol_Web_Protocols.yml":Bm,"../../Sigma/12 Command and Control/[T1071.001]BOF_C2_Beaconing_Patterns.yml":Hm,"../../Sigma/12 Command and Control/[T1071.001]C2_Framework_Indicators.yml":Gm,"../../Sigma/12 Command and Control/[T1071.001]DNS_Over_HTTPS.yml":Vm,"../../Sigma/12 Command and Control/[T1071.001]Domain_Generation_Algorithm.yml":Km,"../../Sigma/12 Command and Control/[T1071.001]Encoded_C2_Communication.yml":Qm,"../../Sigma/12 Command and Control/[T1071.001]FakeUpdateClickToFix.yml":Ym,"../../Sigma/12 Command and Control/[T1071.001]HTTP_Beaconing_and_Suspicious_Web_Protocols.yml":Zm,"../../Sigma/12 Command and Control/[T1071.001]HTTP_Tunneling.yml":Jm,"../../Sigma/12 Command and Control/[T1071.001]Suspicious_HTTP_User-Agent_Strings.yml":Xm,"../../Sigma/12 Command and Control/[T1071.001]Suspicious_Web_C2_Patterns.yml":eu,"../../Sigma/12 Command and Control/[T1071.001]TLS_Certificate_Anomalies.yml":nu,"../../Sigma/12 Command and Control/[T1071.001]Uncommon_User_Agents.yml":tu,"../../Sigma/12 Command and Control/[T1071.001]Unencrypted_Traffic_on_TCP_443.yml":iu,"../../Sigma/12 Command and Control/[T1071.002]Application_Layer_Protocol_File_Transfer_Protocols.yml":su,"../../Sigma/12 Command and Control/[T1071.003]Application_Layer_Protocol_Mail_Protocols.yml":ou,"../../Sigma/12 Command and Control/[T1071.004]Application_Layer_Protocol_DNS.yml":au,"../../Sigma/12 Command and Control/[T1071.004]DNSOverHTTPS_C2.yml":cu,"../../Sigma/12 Command and Control/[T1071.004]DNSTunneling.yml":ru,"../../Sigma/12 Command and Control/[T1071.004]DNS_Tunneling_Detection.yml":lu,"../../Sigma/12 Command and Control/[T1071]FRPC_Designated_Ports_Detection.yml":du,"../../Sigma/12 Command and Control/[T1090.001]Internal_Proxy.yml":mu,"../../Sigma/12 Command and Control/[T1090.002]External_Proxy.yml":uu,"../../Sigma/12 Command and Control/[T1090.003]Multi_hop_Proxy.yml":pu,"../../Sigma/12 Command and Control/[T1090.004]DomainFrontingCDNAbuse.yml":gu,"../../Sigma/12 Command and Control/[T1090.004]Domain_Fronting.yml":_u,"../../Sigma/12 Command and Control/[T1095]FRPC_ICMP_Tunnel_Detection.yml":fu,"../../Sigma/12 Command and Control/[T1095]Non_Standard_Port.yml":hu,"../../Sigma/12 Command and Control/[T1102.001]Dead_Drop_Resolver.yml":vu,"../../Sigma/12 Command and Control/[T1102.001]DiscordTelegramGitHubAbuse.yml":yu,"../../Sigma/12 Command and Control/[T1102.002]Bidirectional_Communication.yml":wu,"../../Sigma/12 Command and Control/[T1102.002]SocialMediaC2.yml":bu,"../../Sigma/12 Command and Control/[T1102.003]One_Way_Communication.yml":ku,"../../Sigma/12 Command and Control/[T1105]CertUtil_Downloads_To_Suspicious_Path.yml":Su,"../../Sigma/12 Command and Control/[T1105]Email_File_Exfiltration.yml":xu,"../../Sigma/12 Command and Control/[T1105]FTP_File_Transfer.yml":Du,"../../Sigma/12 Command and Control/[T1105]FTP_and_Anonymous_File_Transfers_YARA_or_Suricata_Indicators.yml":Iu,"../../Sigma/12 Command and Control/[T1105]HTTP_File_Downloads_Zeek_USERAGENT_URI_FILENAME.yml":Tu,"../../Sigma/12 Command and Control/[T1105]Ingress_Tool_Transfer.yml":Cu,"../../Sigma/12 Command and Control/[T1105]Linux_curl_wget_scp_rsync_downloads_syslog.yml":Eu,"../../Sigma/12 Command and Control/[T1105]NetworkConnectionsFromUnusualProcesses.yml":Pu,"../../Sigma/12 Command and Control/[T1105]PowerShell_BitsTransfer_And_Invoke-WebRequest_Downloads.yml":Au,"../../Sigma/12 Command and Control/[T1105]SMB_File_Transfer.yml":Lu,"../../Sigma/12 Command and Control/[T1105]Suspicious_Download_Tools.yml":Mu,"../../Sigma/12 Command and Control/[T1132.001]Standard_Encoding.yml":Ru,"../../Sigma/12 Command and Control/[T1132.002]Non_Standard_Encoding.yml":Nu,"../../Sigma/12 Command and Control/[T1219]Remote_Access_Software.yml":Fu,"../../Sigma/12 Command and Control/[T1566.001]AIGeneratedPhishing.yml":qu,"../../Sigma/12 Command and Control/[T1566.004]DeepfakeVoiceVideoDetection.yml":Ou,"../../Sigma/12 Command and Control/[T1568.001]Dynamic_DNS.yml":Wu,"../../Sigma/12 Command and Control/[T1568.002]Domain_Generation_Algorithms.yml":ju,"../../Sigma/12 Command and Control/[T1568.003]DNS_Calculation.yml":$u,"../../Sigma/12 Command and Control/[T1572]Protocol_Tunneling.yml":Uu,"../../Sigma/12 Command and Control/[T1573.001]Symmetric_Cryptography.yml":zu,"../../Sigma/12 Command and Control/[T1573.002]Asymmetric_Cryptography.yml":Bu,"../../Sigma/13 Exfiltration/[T1011.001]Exfiltration_Over_Bluetooth.yml":Hu,"../../Sigma/13 Exfiltration/[T1011.002]Exfiltration_Over_Wi-Fi.yml":Gu,"../../Sigma/13 Exfiltration/[T1020.001]Traffic_Duplication.yml":Vu,"../../Sigma/13 Exfiltration/[T1029]Scheduled_Transfer.yml":Ku,"../../Sigma/13 Exfiltration/[T1030]Data_Transfer_Size_Limits.yml":Qu,"../../Sigma/13 Exfiltration/[T1041]Exfiltration_Over_C2_Channel.yml":Yu,"../../Sigma/13 Exfiltration/[T1041]Large_Volume_of_HTTP_POST_Traffic.yml":Zu,"../../Sigma/13 Exfiltration/[T1048.001]Exfiltration_Over_Symmetric_Encrypted_Non_C2_Protocol.yml":Ju,"../../Sigma/13 Exfiltration/[T1048.002]Exfiltration_Over_Asymmetric_Encrypted_Non_C2_Protocol.yml":Xu,"../../Sigma/13 Exfiltration/[T1048.003]Exfiltration_Over_Unencrypted_Non_C2_Protocol.yml":ep,"../../Sigma/13 Exfiltration/[T1048]Unusual_File_Transfer_Activity.yml":np,"../../Sigma/13 Exfiltration/[T1052.001]Exfiltration_over_USB.yml":tp,"../../Sigma/13 Exfiltration/[T1114.001]Email_Collection_Local.yml":ip,"../../Sigma/13 Exfiltration/[T1114.002]Email_Collection_Remote.yml":sp,"../../Sigma/13 Exfiltration/[T1114.003]Email_Forwarding_Rule.yml":op,"../../Sigma/13 Exfiltration/[T1213.001]Data_from_Information_Repositories_Sharepoint.yml":ap,"../../Sigma/13 Exfiltration/[T1213.002]Data_from_Information_Repositories_Confluence.yml":cp,"../../Sigma/13 Exfiltration/[T1213.003]Code_Repositories.yml":rp,"../../Sigma/13 Exfiltration/[T1537]Transfer_Data_to_Cloud_Account.yml":lp,"../../Sigma/13 Exfiltration/[T1560.001]Archive_via_Utility.yml":dp,"../../Sigma/13 Exfiltration/[T1560.002]Archive_via_Library.yml":mp,"../../Sigma/13 Exfiltration/[T1560.003]Archive_via_Custom_Method.yml":up,"../../Sigma/13 Exfiltration/[T1567.001]Exfiltration_to_Code_Repository.yml":pp,"../../Sigma/13 Exfiltration/[T1567.002]Exfiltration_to_Cloud_Storage.yml":gp,"../../Sigma/13 Exfiltration/[T1567.003]Exfiltration_to_Text_Storage_Sites.yml":_p,"../../Sigma/13 Exfiltration/[T1567.004]Exfiltration_to_Instant_Messaging.yml":fp,"../../Sigma/13 Exfiltration/[T1654]Log_Enumeration.yml":hp,"../../Sigma/14 Impact/[T0000]Browser_Automation_Click_Fraud.yml":vp,"../../Sigma/14 Impact/[T0000]Click_Fraud_Detection.yml":yp,"../../Sigma/14 Impact/[T1195]Supply_Chain_Package_Poisoning.yml":wp,"../../Sigma/14 Impact/[T1485]Cloud_Infrastructure_Destruction.yml":bp,"../../Sigma/14 Impact/[T1485]Modern_Wiper_Cloud_Storage.yml":kp,"../../Sigma/14 Impact/[T1485]SaaS_Data_Destruction_Exfiltration.yml":Sp,"../../Sigma/14 Impact/[T1486]AI_Powered_Ransomware_Detection.yml":xp,"../../Sigma/14 Impact/[T1486]Quantum_Resistant_Ransomware.yml":Dp,"../../Sigma/14 Impact/[T1489]Backup_Service_Disruption.yml":Ip,"../../Sigma/14 Impact/[T1489]Critical_System_Service_Disable.yml":Tp,"../../Sigma/14 Impact/[T1489]Database_Service_Disruption.yml":Cp,"../../Sigma/14 Impact/[T1489]Email_Service_Disruption.yml":Ep,"../../Sigma/14 Impact/[T1489]Security_Service_Termination.yml":Pp,"../../Sigma/14 Impact/[T1489]Service_Stop.yml":Ap,"../../Sigma/14 Impact/[T1489]Web_Service_Disruption.yml":Lp,"../../Sigma/14 Impact/[T1496]Container_Cluster_Cryptomining.yml":Mp,"../../Sigma/14 Impact/[T1499]IoT_Botnet_DDoS_Amplification.yml":Rp,"../../Sigma/14 Impact/[T1565]AI_Powered_Data_Manipulation.yml":Np,"../../Sigma/14 Impact/[T1566]Deepfake_Business_Email_Compromise.yml":Fp});console.log(`Found ${Object.keys(S).length} Sigma files`),console.log("Sigma file paths:",Object.keys(S).slice(0,5));let u=0;for(const[P,M]of Object.entries(S))try{const j=P.split("/").pop()||"",ce=P.split("/")[3]||"",U=W(M,j,ce);U&&(a.value.push(U),u++)}catch(j){console.warn(`Failed to parse Sigma rule ${P}:`,j)}console.log(`Successfully parsed ${u} Sigma rules`);const O=Object.assign({"../../Yara/Javascript_Anti_Forensics.yar":qp,"../../Yara/PDF_Suspicious_Features.yar":Op,"../../Yara/WIN_AntiDebug_Common_APIs.yar":Wp,"../../Yara/bof_detection.yar":jp,"../../Yara/parent_process_spoofing.yar":$p,"../../Yara/process_hollowing_detection.yar":Up});console.log(`Found ${Object.keys(O).length} YARA files`);let f=0;for(const[P,M]of Object.entries(O))try{const j=P.split("/").pop()||"",ce=Ce(M,j);c.value.push(...ce),f+=ce.length}catch(j){console.warn(`Failed to parse YARA rule ${P}:`,j)}console.log(`Successfully parsed ${f} YARA rules`),console.log(`Final count: ${a.value.length} Sigma rules and ${c.value.length} YARA rules`),a.value.length===0&&c.value.length===0&&console.error("No rules loaded! This might be a build configuration issue."),Z()}catch(S){console.error("Error loading rules:",S),console.error("This might be a GitHub Pages build issue. Check Vite configuration.")}finally{l.value=!1}},Z=()=>{const S=new Set,u=new Set;a.value.forEach(O=>{O.tactic&&S.add(O.tactic),O.technique&&u.add(O.technique)}),c.value.forEach(O=>{O.mitre_attack&&u.add(O.mitre_attack)}),p.value=Array.from(S).sort(),m.value=Array.from(u).sort()},W=(S,u,O)=>{try{const f=K(S);return{id:f.id||u,title:f.title||"Untitled",status:f.status||"experimental",description:be(f.description||""),level:f.level||"medium",author:f.author||"Unknown",date:f.date||"",technique:ie(f.tags||[]),tactic:Te(O),tags:f.tags||[],references:f.references||[],filename:u,detection:f.detection||{},logsource:f.logsource||{},rawContent:S}}catch(f){return console.warn(`Failed to parse ${u}:`,f),null}},K=S=>{const u=S.split(`
`),O={};let f=null,P=[],M=!1,j={};for(let ce=0;ce<u.length;ce++){let U=u[ce];const fe=U;if(U=U.trim(),!(U.startsWith("---")||U===""||U.startsWith("#"))){if(U.includes(":")&&!fe.startsWith(" ")){f&&(M&&Object.keys(j).length>0?(O[f]=j,j={},M=!1):O[f]=L(P));const[gn,...xn]=U.split(":");f=gn.trim();const ze=xn.join(":").trim();ze===""||ze.startsWith(">")||ze.startsWith("|")?(P=[ze],M=!1):(P=[ze],M=!1)}else if(f&&fe.startsWith(" "))if(U.includes(":")&&!U.startsWith("-")){const[gn,...xn]=U.split(":"),ze=xn.join(":").trim();j[gn.trim()]=ze,M=!0}else P.push(fe)}}return f&&(M&&Object.keys(j).length>0?O[f]=j:O[f]=L(P)),O},L=S=>{const u=S.join(`
`).trim();if(u.startsWith(">")||u.startsWith("|")){const f=u.split(`
`);if(f.length>1)return f.slice(1).filter(P=>P.trim()).map(P=>P.trim()).join(" ")}return u.startsWith("[")&&u.endsWith("]")?u.slice(1,-1).split(",").map(f=>f.trim().replace(/['"]/g,"")):u.includes(`
-`)||u.includes(`
  -`)?u.split(`
`).filter(f=>f.trim().startsWith("-")).map(f=>f.trim().substring(1).trim().replace(/['"]/g,"")).filter(f=>f.length>0):u.replace(/['"]/g,"").trim()||u},ie=S=>{if(!Array.isArray(S))return null;for(const u of S)if(typeof u=="string"&&u.startsWith("attack.t"))return u.replace("attack.","").toUpperCase();return null},Te=S=>({"02 Resource Development":"Resource Development","03 Initial Access":"Initial Access","04 Execution":"Execution","05 Defense Evasion":"Defense Evasion","05 Persistence":"Persistence","06 Privilege Escalation":"Privilege Escalation","07 Defense Evasion":"Defense Evasion","08 Credential Access":"Credential Access","09 Discovery":"Discovery","10 Lateral Movement":"Lateral Movement","11 Collection":"Collection","12 Command and Control":"Command and Control","13 Exfiltration":"Exfiltration","14 Impact":"Impact"})[S]||"Unknown",be=S=>(Array.isArray(S)&&(S=S.join(" ")),S.replace(/\s+/g," ").trim()),Ce=(S,u)=>{const O=[],f=S.match(/rule\s+(\w+)\s*{([^}]*meta:[^}]*?)}/gs);if(f)for(const P of f){const M=P.match(/rule\s+(\w+)/),j=P.match(/meta:\s*(.*?)(?=strings:|condition:|$)/s);if(M&&j){const ce=M[1],U=un(j[1]);O.push({name:ce,filename:u,description:U.description||"",author:U.author||"Unknown",date:U.date||"",severity:U.severity||"medium",mitre_attack:U.mitre_attack||"",reference:U.reference||""})}}return O},un=S=>{const u={},O=S.split(`
`);for(const f of O){const P=f.trim();if(P.includes("=")){const[M,j]=P.split("=",2),ce=M.trim(),U=j.trim().replace(/['"]/g,"");u[ce]=U}}return u},Ue=S=>S?Array.isArray(S)&&S.every(u=>typeof u=="string"&&u.length>1)?S:Array.isArray(S)&&S.every(u=>typeof u=="string"&&u.length===1)?[S.join("")]:typeof S=="string"?[S]:Array.isArray(S)?S.map(String):[String(S)]:[],sn=S=>{if(!S||typeof S!="object")return"Unknown";const u=[];return S.product&&u.push(`Product: ${S.product}`),S.service&&u.push(`Service: ${S.service}`),S.category&&u.push(`Category: ${S.category}`),u.length>0?u.join(", "):"Generic"},pn=S=>{if(!S||typeof S!="object"||Object.keys(S).length===0)return"No detection logic parsed - check YAML structure";let u="";return Object.entries(S).forEach(([O,f],P)=>{O==="condition"?u+=`Condition: ${f}`:(u+=`${O}:`,typeof f=="object"&&f!==null?Array.isArray(f)?f.forEach((M,j)=>{u+=`
  [${j}]: ${M}`}):Object.entries(f).forEach(([M,j])=>{Array.isArray(j)?(u+=`
  ${M}:`,j.forEach(ce=>{u+=`
    - ${ce}`})):u+=`
  ${M}: ${j}`}):u+=`
  ${f}`),P<Object.keys(S).length-1&&(u+=`
`)}),u||"Detection structure exists but content is empty"};return Ps(async()=>{await ee()}),(S,u)=>{var O;return se(),ae(ve,null,[u[36]||(u[36]=Pi('<header class="header"><div class="container"><h1 class="title"><i class="nf nf-fa-shield"></i> Defensive Rules Repository </h1><p class="subtitle">Cybersecurity Detection Rules - Sigma &amp; YARA</p></div></header>',1)),b("nav",zp,[b("div",Bp,[b("div",Hp,[b("button",{class:nn(["nav-tab",{active:n.value==="sigma"}]),onClick:u[0]||(u[0]=f=>n.value="sigma")},[u[9]||(u[9]=b("i",{class:"nf nf-fa-search"},null,-1)),ne(" Sigma Rules ("+z(a.value.length)+") ",1)],2),b("button",{class:nn(["nav-tab",{active:n.value==="yara"}]),onClick:u[1]||(u[1]=f=>n.value="yara")},[u[10]||(u[10]=b("i",{class:"nf nf-fa-bug"},null,-1)),ne(" YARA Rules ("+z(c.value.length)+") ",1)],2),b("button",{class:nn(["nav-tab",{active:n.value==="stats"}]),onClick:u[2]||(u[2]=f=>n.value="stats")},[...u[11]||(u[11]=[b("i",{class:"nf nf-fa-bar_chart"},null,-1),ne(" Statistics ",-1)])],2)])])]),b("main",Gp,[b("div",Vp,[n.value!=="stats"?(se(),ae("div",Kp,[b("div",Qp,[u[12]||(u[12]=b("i",{class:"nf nf-fa-search search-icon"},null,-1)),Pt(b("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>t.value=f),type:"text",placeholder:"Search rules...",class:"search-input"},null,512),[[Sc,t.value]])]),n.value==="sigma"?(se(),ae("div",Yp,[Pt(b("select",{"onUpdate:modelValue":u[4]||(u[4]=f=>i.value=f),class:"filter-select"},[u[13]||(u[13]=b("option",{value:""},"All Tactics",-1)),(se(!0),ae(ve,null,Xn(p.value,f=>(se(),ae("option",{key:f,value:f},z(f),9,Zp))),128))],512),[[Gi,i.value]]),Pt(b("select",{"onUpdate:modelValue":u[5]||(u[5]=f=>s.value=f),class:"filter-select"},[...u[14]||(u[14]=[Pi('<option value="">All Severities</option><option value="critical">Critical</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>',5)])],512),[[Gi,s.value]])])):He("",!0)])):He("",!0),n.value==="sigma"?(se(),ae("div",Jp,[(se(!0),ae(ve,null,Xn(_.value,f=>(se(),ae("div",{key:f.id,class:"rule-card",onClick:P=>o.value=f},[b("div",eg,[b("h3",ng,z(f.title),1),b("span",{class:nn(["rule-severity",f.level])},z(f.level),3)]),b("div",tg,[b("span",ig,[u[15]||(u[15]=b("i",{class:"nf nf-fa-crosshairs"},null,-1)),ne(" "+z(f.tactic),1)]),b("span",sg,[u[16]||(u[16]=b("i",{class:"nf nf-fa-tag"},null,-1)),ne(" "+z(f.technique),1)])]),b("p",og,z(f.description),1)],8,Xp))),128))])):He("",!0),n.value==="yara"?(se(),ae("div",ag,[(se(!0),ae(ve,null,Xn(T.value,f=>(se(),ae("div",{key:f.name,class:"rule-card",onClick:P=>o.value=f},[b("div",rg,[b("h3",lg,z(f.name),1),b("span",{class:nn(["rule-severity",f.severity])},z(f.severity),3)]),b("div",dg,[b("span",mg,[u[17]||(u[17]=b("i",{class:"nf nf-fa-tag"},null,-1)),ne(" "+z(f.mitre_attack),1)])]),b("p",ug,z(f.description),1)],8,cg))),128))])):He("",!0),n.value==="stats"?(se(),ae("div",pg,[b("div",gg,[u[18]||(u[18]=b("h3",null,[b("i",{class:"nf nf-fa-shield"}),ne(" Total Rules ")],-1)),b("div",_g,z(C.value),1)]),b("div",fg,[u[19]||(u[19]=b("h3",null,[b("i",{class:"nf nf-fa-crosshairs"}),ne(" MITRE Techniques ")],-1)),b("div",hg,z(m.value.length),1)]),b("div",vg,[u[20]||(u[20]=b("h3",null,[b("i",{class:"nf nf-fa-bullseye"}),ne(" MITRE Tactics ")],-1)),b("div",yg,z(p.value.length),1)]),b("div",wg,[u[21]||(u[21]=b("h3",null,[b("i",{class:"nf nf-fa-percentage"}),ne(" Coverage ")],-1)),b("div",bg,z(B.value)+"%",1)])])):He("",!0)])]),o.value?(se(),ae("div",{key:0,class:"modal-overlay",onClick:u[8]||(u[8]=f=>o.value=null)},[b("div",{class:"modal",onClick:u[7]||(u[7]=Ic(()=>{},["stop"]))},[b("div",kg,[b("h2",null,z(o.value.title||o.value.name),1),b("button",{class:"close-btn",onClick:u[6]||(u[6]=f=>o.value=null)},[...u[22]||(u[22]=[b("i",{class:"nf nf-fa-times"},null,-1)])])]),b("div",Sg,[o.value.title?(se(),ae("div",xg,[b("div",Dg,[u[23]||(u[23]=b("strong",null,"ID:",-1)),ne(" "+z(o.value.id),1)]),b("div",Ig,[u[24]||(u[24]=b("strong",null,"Status:",-1)),ne(" "+z(o.value.status),1)]),b("div",Tg,[u[25]||(u[25]=b("strong",null,"Level:",-1)),ne(" "+z(o.value.level),1)]),b("div",Cg,[u[26]||(u[26]=b("strong",null,"Author:",-1)),ne(" "+z(o.value.author),1)]),b("div",Eg,[u[27]||(u[27]=b("strong",null,"Technique:",-1)),ne(" "+z(o.value.technique),1)]),b("div",Pg,[u[28]||(u[28]=b("strong",null,"Description:",-1)),ne(" "+z(o.value.description),1)]),o.value.logsource?(se(),ae("div",Ag,[u[29]||(u[29]=b("strong",null,"Log Source:",-1)),ne(" "+z(sn(o.value.logsource)),1)])):He("",!0),o.value.detection?(se(),ae("div",Lg,[u[30]||(u[30]=b("div",{class:"rule-commands-title"},"Detection Logic:",-1)),b("div",Mg,z(pn(o.value.detection)),1)])):He("",!0),(O=o.value.references)!=null&&O.length?(se(),ae("div",Rg,[u[31]||(u[31]=b("strong",null,"References:",-1)),b("ul",null,[(se(!0),ae(ve,null,Xn(Ue(o.value.references),(f,P)=>(se(),ae("li",{key:P},[b("a",{href:F(f)?f:"#",target:"_blank",rel:"noopener noreferrer"},z(f),9,Ng)]))),128))])])):He("",!0)])):(se(),ae("div",Fg,[b("div",qg,[u[32]||(u[32]=b("strong",null,"Name:",-1)),ne(" "+z(o.value.name),1)]),b("div",Og,[u[33]||(u[33]=b("strong",null,"MITRE:",-1)),ne(" "+z(o.value.mitre_attack),1)]),b("div",Wg,[u[34]||(u[34]=b("strong",null,"Severity:",-1)),ne(" "+z(o.value.severity),1)]),b("div",jg,[u[35]||(u[35]=b("strong",null,"Description:",-1)),ne(" "+z(o.value.description),1)])]))])])])):He("",!0)],64)}}});Ec($g).mount("#app");
