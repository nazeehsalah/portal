(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{edcM:function(i,e,t){"use strict";t.r(e),t.d(e,"ion_split_pane",(function(){return l}));var n=t("dSyh");t("AfW+");const s={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},l=class{constructor(i){Object(n.l)(this,i),this.visible=!1,this.disabled=!1,this.when=s.lg,this.ionSplitPaneVisible=Object(n.d)(this,"ionSplitPaneVisible",7)}visibleChanged(i){const e={visible:i,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(e)}connectedCallback(){this.styleChildren(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}componentWillLoad(){void 0===this.contentId&&console.warn('[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-split-pane>\n    ...\n    <div main>...</div>\n  </ion-split-pane>\n\nAFTER:\n  <ion-split-pane contentId="main-content">\n    ...\n    <div id="main-content">...</div>\n  </ion-split-pane>\n')}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const i=this.when;if("boolean"==typeof i)return void(this.visible=i);const e=s[i]||i;if(0!==e.length){if(window.matchMedia){const i=i=>{this.visible=i.matches},t=window.matchMedia(e);t.addListener(i),this.rmL=()=>t.removeListener(i),this.visible=t.matches}}else this.visible=!1}isPane(i){return!!this.visible&&i.parentElement===this.el&&i.classList.contains("split-pane-side")}styleChildren(){const i=this.contentId,e=this.el.children,t=this.el.childElementCount;let n=!1;for(let s=0;s<t;s++){const t=e[s],l=void 0!==i?t.id===i:t.hasAttribute("main");if(l){if(n)return void console.warn("split pane cannot have more than one main node");n=!0}a(t,l)}n||console.warn("split pane does not have a specified main node")}render(){const i=Object(n.e)(this);return Object(n.i)(n.a,{class:{[i]:!0,[`split-pane-${i}`]:!0,"split-pane-visible":this.visible}})}get el(){return Object(n.f)(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}static get style(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"}},a=(i,e)=>{let t,n;e?(t="split-pane-main",n="split-pane-side"):(t="split-pane-side",n="split-pane-main");const s=i.classList;s.add(t),s.remove(n)}}}]);