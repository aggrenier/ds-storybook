/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class r{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new r(e,t,s)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",c=l.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),r=t.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:u).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=r,this[r]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const b=window,x=b.trustedTypes,m=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,$=`<${w}>`,S=document,k=(t="")=>S.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,M=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),z=/'/g,U=/"/g,T=/^(?:script|style|textarea|title)$/i,O=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),R=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),I=new WeakMap,P=S.createTreeWalker(S,129,null,!1),L=(t,i)=>{const s=t.length-1,e=[];let r,n=2===i?"<svg>":"",o=E;for(let i=0;i<s;i++){const s=t[i];let a,l,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),null!==l);)d=o.lastIndex,o===E?"!--"===l[1]?o=_:void 0!==l[1]?o=M:void 0!==l[2]?(T.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=j):void 0!==l[3]&&(o=j):o===j?">"===l[0]?(o=null!=r?r:E,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?j:'"'===l[3]?U:z):o===U||o===z?o=j:o===_||o===M?o=E:(o=j,r=void 0);const c=o===j&&t[i+1].startsWith("/>")?" ":"";n+=o===E?s+$:h>=0?(e.push(a),s.slice(0,h)+"$lit$"+s.slice(h)+y+c):s+y+(-2===h?(e.push(void 0),i):c)}const a=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=L(t,i);if(this.el=B.createElement(l,s),P.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=P.nextNode())&&a.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const s=h[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(s);a.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?J:"?"===i[1]?Y:"@"===i[1]?Z:H})}else a.push({type:6,index:r})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=x?x.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],k()),P.nextNode(),a.push({type:2,index:++r});e.append(t[i],k())}}}else if(8===e.nodeType)if(e.data===w)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)a.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function q(t,i,s=t,e){var r,n,o,a;if(i===R)return i;let l=void 0!==e?null===(r=s._$Co)||void 0===r?void 0:r[e]:s._$Cl;const h=A(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,e)),void 0!==e?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[e]=l:s._$Cl=l),void 0!==l&&(i=q(t,l._$AS(t,i.values),l,e)),i}class D{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,r=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);P.currentNode=r;let n=P.nextNode(),o=0,a=0,l=e[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new V(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new K(n,this,t)),this.u.push(i),l=e[++a]}o!==(null==l?void 0:l.index)&&(n=P.nextNode(),o++)}return r}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class V{constructor(t,i,s,e){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(r=null==e?void 0:e.isConnected)||void 0===r||r}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=q(this,t,i),A(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==R&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,r="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=B.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===r)this._$AH.p(s);else{const t=new D(r,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=I.get(t.strings);return void 0===i&&I.set(t.strings,i=new B(t)),i}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const r of t)e===i.length?i.push(s=new V(this.O(k()),this.O(k()),this,this.options)):s=i[e],s._$AI(r),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class H{constructor(t,i,s,e,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const r=this.strings;let n=!1;if(void 0===r)t=q(this,t,i,0),n=!A(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const e=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=q(this,e[s+o],i,o),a===R&&(a=this._$AH[o]),n||(n=!A(a)||a!==this._$AH[o]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!e&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const W=x?x.emptyScript:"";class Y extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class Z extends H{constructor(t,i,s,e,r){super(t,i,s,e,r),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=q(this,t,i,0))&&void 0!==s?s:N)===R)return;const e=this._$AH,r=t===N&&e!==N||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==N&&(e===N||r);r&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const F=b.litHtmlPolyfillSupport;null==F||F(B,V),(null!==(f=b.litHtmlVersions)&&void 0!==f?f:b.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;class X extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,r;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new V(i.insertBefore(k(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");class it extends X{static styles=n`
    .ds-avatar {
      /* background-color: pink; */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 10px;
    }

    .border {
      border: 2px solid rgba(149, 157, 165, 0.25);
      /* background-color: rgba(149, 157, 165, 0.5); */
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .type-circle,
    .type-circle .profile {
      border-radius: 50px;
    }
    .type-square .type-square .profile {
      border-radius: 5px;
    }

    .small,
    .small svg {
      width: 28px;
      height: 28px;
      max-width: 28px;
    }
    .small .profile {
      width: 26px;
      height: 26px;
      max-width: 26px;
    }

    .medium,
    .medium svg {
      width: 36px;
      height: 36px;
      max-width: 36px;
    }
    .medium .profile {
      width: 34px;
      height: 34px;
      max-width: 34px;
    }

    .large,
    .large svg {
      width: 48px;
      height: 48px;
      max-width: 48px;
    }
    .large .profile {
      width: 48px;
      height: 48px;
      max-width: 48px;
    }

    .profile {
      animation: fadein 0.5s;
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    svg {
      width: fit-content;
    }
  `;static properties={appearance:{type:String},size:{type:String},backgroundColor:{type:String},profilePicture:{type:String},isDisabled:{type:Boolean}};async connectedCallback(){super.connectedCallback(),this.profilePicture||await this.fetchData()}constructor(){super(),this.appearance="circle",this.size="small"}getApperence(){return"circle"===this.appearance?"circle":"square"}getSize(){switch(this.size){case"large":return"large";case"medium":return"medium";default:return"small"}}async fetchData(){let t=await fetch("https://randomuser.me/api/");const i=await t.json();i.results[0]&&(this.profilePicture=i.results[0].picture.medium)}render(){let t;return t=this.profilePicture?O`<img class="profile" src="${this.profilePicture}" />`:O`${N}`,O`<div
      class="ds-avatar"
      style="background-color: ${this.backgroundColor}"
    >
      <div
        class="border type-${this.getApperence()} 
          ${this.getSize()}"
      >
        ${t}
      </div>
    </div>`}}customElements.define("ds-avatar",it);class st extends X{static styles=n`
    .ds-avatar-group {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ds-avatar {
      display: inline-block;
    }

    .small ds-avatar:not(:first-child) {
      margin-left: -30px;
    }

    .medium ds-avatar:not(:first-child) {
      margin-left: -30px;
    }

    .large ds-avatar:not(:first-child) {
      margin-left: -30px;
    }
  `;static properties={appearance:{type:String},size:{type:String},avatars:{type:Array}};getSize(){switch(this.size){case"large":return"large";case"medium":return"medium";default:return"small"}}constructor(){super()}render(){let t=this.avatars.length;return O`<div class="ds-avatar-group ${this.getSize()}">
      ${this.avatars.map((i=>{let s=O`<ds-avatar
          appearance="${this.appearance}"
          size="${this.size}"
          profilePicture=${i.profilePicture}
          style="z-index: ${t}"
        ></ds-avatar>`;return t--,s}))}
    </div>`}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et;customElements.define("ds-avatar-group",st),null===(et=window.HTMLSlotElement)||void 0===et||et.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const rt=n`
  .box-shadow {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .border-radius {
    border-radius: 5px;
  }
`;class nt extends X{static styles=[rt,n`
      .banner {
        padding: 12px;
        border-radius: 5px;
        min-height: 24px;
        display: flex;
        align-items: center;
      }

      .banner:hover {
        box-shadow: inset rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .banner-announcement {
        background-color: rgb(66, 82, 110);
        color: rgb(255, 255, 255);
      }
      .banner-warning {
        background-color: rgb(255, 171, 0);
        color: rgb(23, 43, 77);
      }
      .banner-error {
        background-color: rgb(222, 53, 11);
        color: rgb(255, 255, 255);
      }

      svg {
        padding-right: 12px;
      }
    `];static properties={type:{type:String},text:{type:String}};constructor(){super(),this.type="announcement"}getIcon(){return"warning"===this.type?O` <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="presentation"
      >
        <g fill-rule="evenodd">
          <path
            d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z"
            fill="currentColor"
          ></path>
          <path
            d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
            fill="inherit"
          ></path>
        </g>
      </svg>`:"error"===this.type?O`<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="presentation"
      >
        <g fill-rule="evenodd">
          <path
            d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z"
            fill="currentColor"
          ></path>
          <path
            d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
            fill="inherit"
          ></path>
        </g>
      </svg>`:O`${N}`}render(){return O`<div class="banner banner-${this.type} box-shadow">
      ${this.getIcon()} <span>${this.text}</span>
    </div>`}}customElements.define("ds-banner",nt);class ot extends X{static styles=[rt,n`
      .button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        padding: 10px 14px;
        border-radius: 5px;
      }

      .button-default {
        background: rgba(255, 255, 255, 0.35);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .button-default:hover {
        box-shadow: rgba(100, 100, 100, 0.35) 0px 5px 15px;
        background: rgba(255, 255, 255, 0.15);
      }

      .button-default:active {
        box-shadow: inset rgba(0, 0, 0, 0.25) 0px 5px 15px;
        transform: translateY(4px);
      }

      .button-subtle {
        border: 1px solid transparent;
        background: white;
      }

      .button-subtle:hover {
        border: 1px solid rgba(100, 100, 100, 0.35);
        background: rgba(255, 255, 255, 0.15);
      }

      .button-subtle:active {
        border: 1px solid rgba(100, 100, 100, 0.35);
        box-shadow: inset rgba(0, 0, 0, 0.25) 0px 5px 15px;
        transform: translateY(4px);
      }

      .rounded{
        border-radius: 25px;
        padding: 10px 20px;
      }
    `];static properties={type:{type:String},text:{type:String},rounded:{type:String}};constructor(){super(),this.type="default",this.rounded="false"}getRounded(){return"true"===this.rounded?"rounded":""}render(){return O`<button class="button button-${this.type} ${this.getRounded()}">
      <slot></slot>
    </button>`}}customElements.define("ds-button",ot);export{it as Avatar,st as AvatarGroup,nt as Banner,ot as Button};
