(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[8643],{59142:function(e,t){var o,n,r;n=[t],o=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var o=!1;if("undefined"!=typeof window){var n={get passive(){o=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],s=!1,a=-1,l=void 0,c=void 0,d=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},u=function(e){var t=e||window.event;return!!d(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},p=function(){setTimeout((function(){void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)}))};e.disableBodyScroll=function(e,n){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var p={targetElement:e,options:n||{}};i=[].concat(t(i),[p]),e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var o,n,r,i;1===t.targetTouches.length&&(n=e,i=(o=t).targetTouches[0].clientY-a,!d(o.target)&&(n&&0===n.scrollTop&&0<i||(r=n)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&i<0?u(o):o.stopPropagation()))},s||(document.addEventListener("touchmove",u,o?{passive:!1}:void 0),s=!0)}}else{h=n,setTimeout((function(){if(void 0===c){var e=!!h&&!0===h.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(c=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:n||{}};i=[].concat(t(i),[m])}var h},e.clearAllBodyScrollLocks=function(){r?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",u,o?{passive:!1}:void 0),s=!1),i=[],a=-1):(p(),i=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){return t.targetElement!==e})),s&&0===i.length&&(document.removeEventListener("touchmove",u,o?{passive:!1}:void 0),s=!1)}else 1===i.length&&i[0].targetElement===e?(p(),i=[]):i=i.filter((function(t){return t.targetElement!==e}))}},void 0===(r="function"==typeof o?o.apply(t,n):o)||(e.exports=r)},62978:e=>{e.exports={primary:"primary-PVWoXu5j",gray:"gray-PVWoXu5j",selected:"selected-PVWoXu5j",grouped:"grouped-PVWoXu5j",pills:"pills-PVWoXu5j",active:"active-PVWoXu5j",
disableActiveOnTouch:"disableActiveOnTouch-PVWoXu5j",disableActiveStateStyles:"disableActiveStateStyles-PVWoXu5j",withGrouped:"withGrouped-PVWoXu5j","quiet-primary":"quiet-primary-PVWoXu5j",green:"green-PVWoXu5j",red:"red-PVWoXu5j",secondary:"secondary-PVWoXu5j",ghost:"ghost-PVWoXu5j"}},29075:e=>{e.exports={lightButton:"lightButton-bYDQcOkp",link:"link-bYDQcOkp",ltr:"ltr-bYDQcOkp",rtl:"rtl-bYDQcOkp","typography-regular16px":"typography-regular16px-bYDQcOkp","typography-medium16px":"typography-medium16px-bYDQcOkp","typography-regular14px":"typography-regular14px-bYDQcOkp","typography-semibold14px":"typography-semibold14px-bYDQcOkp","typography-semibold16px":"typography-semibold16px-bYDQcOkp",content:"content-bYDQcOkp",visuallyHidden:"visuallyHidden-bYDQcOkp",nowrap:"nowrap-bYDQcOkp",ellipsisContainer:"ellipsisContainer-bYDQcOkp",textWrapContainer:"textWrapContainer-bYDQcOkp",textWrapWithEllipsis:"textWrapWithEllipsis-bYDQcOkp",slot:"slot-bYDQcOkp",caret:"caret-bYDQcOkp",activeCaret:"activeCaret-bYDQcOkp",xsmall:"xsmall-bYDQcOkp",withStartSlot:"withStartSlot-bYDQcOkp",withEndSlot:"withEndSlot-bYDQcOkp",noContent:"noContent-bYDQcOkp",wrap:"wrap-bYDQcOkp",small:"small-bYDQcOkp",medium:"medium-bYDQcOkp"}},69658:e=>{e.exports={"default-drawer-min-top-distance":"100px",wrap:"wrap-_HnK0UIN",positionBottom:"positionBottom-_HnK0UIN",backdrop:"backdrop-_HnK0UIN",drawer:"drawer-_HnK0UIN",positionLeft:"positionLeft-_HnK0UIN"}},27011:(e,t,o)=>{"use strict";function n(e,t){return t||null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}o.d(t,{isIconOnly:()=>n})},9038:(e,t,o)=>{"use strict";o.d(t,{useLightButtonClasses:()=>c});var n=o(50959),r=o(97754),i=o(17946),s=o(27011),a=o(86332);const l=n.createContext({isInButtonGroup:!1,isGroupPrimary:!1}),c=(e,t,o)=>{const c=(0,n.useContext)(i.CustomBehaviourContext),{className:d,isSelected:u,children:p,showCaret:m,forceDirection:h,iconOnly:v,color:g="gray",variant:f="primary",size:y="medium",enableActiveStateStyles:w=c.enableActiveStateStyles,typography:x,isLink:b=!1,textWrap:E,isPills:C,isActive:S,startSlot:W,endSlot:_}=t,k=e[`typography-${((e,t,o)=>{if(o){const e=o.replace(/^\D+/g,"");return t?`semibold${e}`:o}switch(e){case"xsmall":return t?"semibold14px":"regular14px";case"small":case"medium":return t?"semibold16px":"regular16px";default:return""}})(y,u||C,x||void 0)}`],D=(0,n.useContext)(a.ControlGroupContext),{isInButtonGroup:B,isGroupPrimary:I}=(0,n.useContext)(l);return r(d,e.lightButton,b&&e.link,S&&e.active,u&&e.selected,(0,s.isIconOnly)(p,v)&&e.noContent,!!W&&e.withStartSlot,(m||!!_)&&e.withEndSlot,o&&e.withGrouped,h&&e[h],e[I?"primary":f],e[I?"gray":g],e[y],k,!w&&e.disableActiveStateStyles,D.isGrouped&&e.grouped,E&&e.wrap,B&&e.disableActiveOnTouch,C&&e.pills)}},66860:(e,t,o)=>{"use strict";o.d(t,{LightButtonContent:()=>u});var n=o(50959),r=o(97754),i=o(34094),s=o(27011),a=o(9745),l=o(2948),c=o(29075),d=o.n(c);function u(e){const{showCaret:t,iconOnly:o,ellipsis:c=!0,textWrap:u,tooltipText:p,children:m,endSlot:h,startSlot:v,isActiveCaret:g}=e;[h,t].filter((e=>!!e))
;return n.createElement(n.Fragment,null,v&&n.createElement("span",{className:r(d().slot,d().startSlot)},v),!(0,s.isIconOnly)(m,o)&&n.createElement("span",{className:r(d().content,!u&&d().nowrap,"apply-overflow-tooltip","apply-overflow-tooltip--check-children-recursively","apply-overflow-tooltip--allow-text"),"data-overflow-tooltip-text":null!=p?p:(0,i.getTextForTooltip)(m)},u||c?n.createElement(n.Fragment,null,n.createElement("span",{className:r(!u&&c&&d().ellipsisContainer,u&&d().textWrapContainer,u&&c&&d().textWrapWithEllipsis)},m),n.createElement("span",{className:d().visuallyHidden,"aria-hidden":!0},m)):n.createElement(n.Fragment,null,m,n.createElement("span",{className:d().visuallyHidden,"aria-hidden":!0},m))),h&&n.createElement("span",{className:r(d().slot,d().endSlot)},h),t&&(e=>n.createElement(a.Icon,{className:r(d().caret,e&&d().activeCaret),icon:l}))(g))}},15893:(e,t,o)=>{"use strict";o.d(t,{LightButton:()=>u});var n=o(50959),r=o(86332),i=o(9038),s=o(66860),a=o(29075),l=o.n(a),c=o(62978),d=o.n(c);function u(e){const{isGrouped:t}=n.useContext(r.ControlGroupContext),{reference:o,className:a,isSelected:c,children:u,iconOnly:p,ellipsis:m,showCaret:h,forceDirection:v,endSlot:g,startSlot:f,color:y,variant:w,size:x,enableActiveStateStyles:b,typography:E,textWrap:C=!1,maxLines:S,style:W={},isPills:_,isActive:k,tooltipText:D,role:B,...I}=e,O=C?null!=S?S:2:1,N=O>0?{...W,"--ui-lib-light-button-content-max-lines":O}:W;return n.createElement("button",{...I,className:(0,i.useLightButtonClasses)({...d(),...l()},{className:a,isSelected:c,children:u,iconOnly:p,showCaret:h,forceDirection:v,endSlot:g,startSlot:f,color:y,variant:w,size:x,enableActiveStateStyles:b,typography:E,textWrap:C,isPills:_,isActive:k},t),ref:o,style:N,role:B},n.createElement(s.LightButtonContent,{showCaret:h,isActiveCaret:h&&(_||k||c),iconOnly:p,ellipsis:m,textWrap:C,tooltipText:D,endSlot:g,startSlot:f},u))}},86332:(e,t,o)=>{"use strict";o.d(t,{ControlGroupContext:()=>n});const n=o(50959).createContext({isGrouped:!1,cellState:{isTop:!0,isRight:!0,isBottom:!0,isLeft:!0}})},17946:(e,t,o)=>{"use strict";o.d(t,{CustomBehaviourContext:()=>n});const n=(0,o(50959).createContext)({enableActiveStateStyles:!0});n.displayName="CustomBehaviourContext"},43010:(e,t,o)=>{"use strict";o.d(t,{useIsomorphicLayoutEffect:()=>r});var n=o(50959);function r(e,t){("undefined"==typeof window?n.useEffect:n.useLayoutEffect)(e,t)}},36383:(e,t,o)=>{"use strict";o.d(t,{useOutsideEvent:()=>s});var n=o(50959),r=o(43010),i=o(27267);function s(e){const{click:t,mouseDown:o,touchEnd:s,touchStart:a,handler:l,reference:c}=e,d=(0,n.useRef)(null),u=(0,n.useRef)("undefined"==typeof window?0:new window.CustomEvent("timestamp").timeStamp);return(0,r.useIsomorphicLayoutEffect)((()=>{const e={click:t,mouseDown:o,touchEnd:s,touchStart:a},n=c?c.current:d.current;return(0,i.addOutsideEventListener)(u.current,n,l,document,e)}),[t,o,s,a,l]),c||d}},9745:(e,t,o)=>{"use strict";o.d(t,{Icon:()=>r});var n=o(50959);const r=n.forwardRef(((e,t)=>{
const{icon:o="",title:r,ariaLabel:i,ariaLabelledby:s,ariaHidden:a,...l}=e,c=!!(r||i||s);return n.createElement("span",{...l,ref:t,role:"img","aria-label":i,"aria-labelledby":s,"aria-hidden":a||!c,title:r,dangerouslySetInnerHTML:{__html:o}})}))},99663:(e,t,o)=>{"use strict";o.d(t,{Slot:()=>r,SlotContext:()=>i});var n=o(50959);class r extends n.Component{shouldComponentUpdate(){return!1}render(){return n.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const i=n.createContext(null)},34094:(e,t,o)=>{"use strict";o.d(t,{getTextForTooltip:()=>s});var n=o(50959);const r=e=>(0,n.isValidElement)(e)&&Boolean(e.props.children),i=e=>null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString()+" ",s=e=>Array.isArray(e)||(0,n.isValidElement)(e)?n.Children.toArray(e).reduce(((e,t)=>{let o="";return o=(0,n.isValidElement)(t)&&r(t)?s(t.props.children):(0,n.isValidElement)(t)&&!r(t)?"":i(t),e.concat(o)}),"").trim():i(e)},67961:(e,t,o)=>{"use strict";o.d(t,{OverlapManager:()=>i,getRootOverlapManager:()=>a});var n=o(50151);class r{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter((t=>e!==t))}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class i{constructor(e=document){this._storage=new r,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,o=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)}))}(t,o),this._container=o}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const o=this._windows.get(e);if(void 0!==o)return o;this.registerWindow(e);const n=this._document.createElement("div");if(n.style.position=t.position,n.style.zIndex=this._index.toString(),n.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(n);else if(t.index<=0)this._container.insertBefore(n,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(n,e)}}else"reverse"===t.direction?this._container.insertBefore(n,this._container.firstChild):this._container.appendChild(n);return this._windows.set(e,n),++this._index,n}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){const t=this.ensureWindow(e);this._windows.forEach(((e,o)=>{e.hasAttribute("data-focus-trap")&&e.setAttribute("data-focus-trap",e===t?"true":"false")})),t.style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const s=new WeakMap;function a(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return(0,n.ensureDefined)(s.get(t));{
const t=new i(e),o=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return s.set(o,t),t.setContainer(o),e.body.appendChild(o),t}}var l;!function(e){e[e.BaseZindex=150]="BaseZindex"}(l||(l={}))},99054:(e,t,o)=>{"use strict";o.d(t,{setFixedBodyState:()=>c});const n=(()=>{let e;return()=>{var t;if(void 0===e){const o=document.createElement("div"),n=o.style;n.visibility="hidden",n.width="100px",n.msOverflowStyle="scrollbar",document.body.appendChild(o);const r=o.offsetWidth;o.style.overflow="scroll";const i=document.createElement("div");i.style.width="100%",o.appendChild(i);const s=i.offsetWidth;null===(t=o.parentNode)||void 0===t||t.removeChild(o),e=r-s}return e}})();function r(e,t,o){null!==e&&e.style.setProperty(t,o)}function i(e,t){return getComputedStyle(e,null).getPropertyValue(t)}function s(e,t){return parseInt(i(e,t))}let a=0,l=!1;function c(e){const{body:t}=document,o=t.querySelector(".widgetbar-wrap");if(e&&1==++a){const e=i(t,"overflow"),a=s(t,"padding-right");"hidden"!==e.toLowerCase()&&t.scrollHeight>t.offsetHeight&&(r(o,"right",`${n()}px`),t.style.paddingRight=`${a+n()}px`,l=!0),t.classList.add("i-no-scroll")}else if(!e&&a>0&&0==--a&&(t.classList.remove("i-no-scroll"),l)){r(o,"right","0px");let e=0;0,t.scrollHeight<=t.clientHeight&&(e-=n()),t.style.paddingRight=(e<0?0:e)+"px",l=!1}}},37558:(e,t,o)=>{"use strict";o.d(t,{DrawerContext:()=>s,DrawerManager:()=>i});var n=o(50959),r=o(99054);class i extends n.PureComponent{constructor(e){super(e),this._isBodyFixed=!1,this._addDrawer=e=>{this.setState((t=>({stack:[...t.stack,e]})))},this._removeDrawer=e=>{this.setState((t=>({stack:t.stack.filter((t=>t!==e))})))},this.state={stack:[]}}componentDidUpdate(e,t){!t.stack.length&&this.state.stack.length&&((0,r.setFixedBodyState)(!0),this._isBodyFixed=!0),t.stack.length&&!this.state.stack.length&&this._isBodyFixed&&((0,r.setFixedBodyState)(!1),this._isBodyFixed=!1)}componentWillUnmount(){this.state.stack.length&&this._isBodyFixed&&(0,r.setFixedBodyState)(!1)}render(){return n.createElement(s.Provider,{value:{addDrawer:this._addDrawer,removeDrawer:this._removeDrawer,currentDrawer:this.state.stack.length?this.state.stack[this.state.stack.length-1]:null}},this.props.children)}}const s=n.createContext(null)},41590:(e,t,o)=>{"use strict";o.d(t,{Drawer:()=>m});var n=o(50959),r=o(50151),i=o(97754),s=o(92184),a=o(42842),l=o(37558),c=o(29197),d=o(86656),u=o(69658);var p;function m(e){const{position:t="Bottom",onClose:o,children:d,reference:p,className:m,theme:v=u}=e,g=(0,r.ensureNotNull)((0,n.useContext)(l.DrawerContext)),[f]=(0,n.useState)((()=>(0,s.randomHash)())),y=(0,n.useRef)(null),w=(0,n.useContext)(c.CloseDelegateContext);return(0,n.useLayoutEffect)((()=>((0,r.ensureNotNull)(y.current).focus({preventScroll:!0}),w.subscribe(g,o),g.addDrawer(f),()=>{g.removeDrawer(f),w.unsubscribe(g,o)})),[]),n.createElement(a.Portal,null,n.createElement("div",{ref:p,className:i(u.wrap,u[`position${t}`])
},f===g.currentDrawer&&n.createElement("div",{className:u.backdrop,onClick:o}),n.createElement(h,{className:i(v.drawer,u[`position${t}`],m),ref:y,"data-name":e["data-name"]},d)))}!function(e){e.Left="Left",e.Bottom="Bottom"}(p||(p={}));const h=(0,n.forwardRef)(((e,t)=>{const{className:o,...r}=e;return n.createElement(d.TouchScrollContainer,{className:i(u.drawer,o),tabIndex:-1,ref:t,...r})}))},42842:(e,t,o)=>{"use strict";o.d(t,{Portal:()=>l,PortalContext:()=>c});var n=o(50959),r=o(32227),i=o(55698),s=o(67961),a=o(99663);class l extends n.PureComponent{constructor(){super(...arguments),this._uuid=(0,i.nanoid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"";const t=this.props.className;return t&&("string"==typeof t?e.classList.add(t):e.classList.add(...t)),this.props.shouldTrapFocus&&!e.hasAttribute("data-focus-trap")&&e.setAttribute("data-focus-trap","true"),this.props["aria-hidden"]&&e.setAttribute("aria-hidden","true"),r.createPortal(n.createElement(c.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?(0,s.getRootOverlapManager)():this.context}}l.contextType=a.SlotContext;const c=n.createContext(null)},86656:(e,t,o)=>{"use strict";o.d(t,{TouchScrollContainer:()=>c});var n=o(50959),r=o(59142),i=o(50151),s=o(49483);const a=CSS.supports("overscroll-behavior","none");let l=0;const c=(0,n.forwardRef)(((e,t)=>{const{children:o,...i}=e,c=(0,n.useRef)(null);return(0,n.useImperativeHandle)(t,(()=>c.current)),(0,n.useLayoutEffect)((()=>{if(s.CheckMobile.iOS())return l++,null!==c.current&&(a?1===l&&(document.body.style.overscrollBehavior="none"):(0,r.disableBodyScroll)(c.current,{allowTouchMove:d(c)})),()=>{l--,null!==c.current&&(a?0===l&&(document.body.style.overscrollBehavior=""):(0,r.enableBodyScroll)(c.current))}}),[]),n.createElement("div",{ref:c,...i},o)}));function d(e){return t=>{const o=(0,i.ensureNotNull)(e.current),n=document.activeElement;return!o.contains(t)||null!==n&&o.contains(n)&&n.contains(t)}}},28188:e=>{e.exports={"css-value-small-size":"18px","css-value-medium-size":"22px","css-value-large-size":"28px","css-value-border-radius-small-size":"9px","css-value-border-radius-medium-size":"11px","css-value-border-radius-large-size":"8px","css-value-vertical-padding-size":"12px","css-value-horizontal-padding-size":"16px",popupWidget:"popupWidget-Wu2pIo3E",large:"large-Wu2pIo3E",mobile:"mobile-Wu2pIo3E",desc:"desc-Wu2pIo3E",icon:"icon-Wu2pIo3E",small:"small-Wu2pIo3E",medium:"medium-Wu2pIo3E",title:"title-Wu2pIo3E",text:"text-Wu2pIo3E",item:"item-Wu2pIo3E",boldItem:"boldItem-Wu2pIo3E",action:"action-Wu2pIo3E",actionBtn:"actionBtn-Wu2pIo3E",additionalWidget:"additionalWidget-Wu2pIo3E"}},12048:(e,t,o)=>{"use strict";o.r(t),o.d(t,{render:()=>S})
;var n=o(50959),r=o(32227),i=o(20520),s=o(90692),a=o(41590),l=o(37558),c=o(92184),d=o(97754),u=o(50151),p=o(9745),m=o(15893),h=o(77975),v=o(37265),g=o(10492),f=o(28188);const y=new WeakMap,w=new WeakMap;function x(e){const t=(0,h.useWatchedValueReadonly)({watchedValue:e.info});if(null===t)return null;const o=t.map((t=>{const{title:o,titleColor:r,icon:i,iconClassName:s,html:a,action:l,size:h,solutionId:x}=t;y.has(t)||y.set(t,(0,c.randomHash)());let b=[];return void 0!==e.additionalWidgets&&(b=e.additionalWidgets.map((e=>(w.has(e)||w.set(e,(0,c.randomHash)()),e.renderer((0,u.ensureDefined)(w.get(e)),f.additionalWidget))))),n.createElement("div",{key:y.get(t),className:d(f.popupWidget,f[h],e.isMobile&&f.mobile)},n.createElement(p.Icon,{className:d(f.icon,s,g[h],f[h]),style:{"--custom-status-color":r||void 0},icon:i||void 0}),n.createElement("div",{className:f.desc},n.createElement("span",{style:{color:r||void 0},className:d(f.title,f[h])},n.createElement("span",null,o),!1),a&&n.createElement("p",{className:d(f.text,f[h])},a.map(((e,t)=>{let o,r;return(0,v.isObject)(e)?(o=e.text,r=e.bold):o=e,n.createElement("span",{key:`html_item_${t}`,className:d(f.item,r&&f.boldItem),dangerouslySetInnerHTML:{__html:o}})}))),l&&n.createElement(m.LightButton,{className:f.actionBtn,onClick:()=>{e.onClose(),null==l||l.onClick()},size:"xsmall",tooltipText:l.tooltip},l.text),b))}));return n.createElement(n.Fragment,null,o)}const b=new WeakMap;function E(e){const{statusWidgetInfos:t,matchMediaRule:o="screen and (min-width: 431px)"}=e;return n.createElement(l.DrawerManager,null,n.createElement(s.MatchMedia,{rule:o},(o=>o?n.createElement(i.PopupMenu,{isOpened:!0,onClose:e.onClose,position:e.position,doNotCloseOn:e.rendererButton},n.createElement(C,{widgetInfo:t,onClose:e.onClose,isMobile:!o})):n.createElement(a.Drawer,{onClose:e.onClose,position:"Bottom"},n.createElement(C,{widgetInfo:t,onClose:e.onClose,isMobile:!o})))))}function C(e){return n.createElement(n.Fragment,null,e.widgetInfo.filter((e=>e.visible.value())).map((t=>(b.has(t)||b.set(t,(0,c.randomHash)()),n.createElement(x,{key:b.get(t),info:t.model.fullInfo(),onClose:e.onClose,additionalWidgets:t.additionalWidgets,isMobile:e.isMobile})))))}function S(e){const{opened:t,container:o,...i}=e;t?r.render(n.createElement(E,{...i}),o):r.unmountComponentAtNode(o)}},2948:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.92 7.83 9 12.29l5.08-4.46-1-1.13L9 10.29l-4.09-3.6-.99 1.14Z"/></svg>'},55698:(e,t,o)=>{"use strict";o.d(t,{nanoid:()=>n});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}}]);