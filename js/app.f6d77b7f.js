(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/contributing-gen-web/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var o=n("4402"),a=n("ad21"),r=(n("9074"),n("2877")),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"237ce6df",null);t["default"]=i.exports},"09f2":function(e,t,n){},"2e0b":function(e,t,n){},3721:function(e,t,n){},4402:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"shadow mb-3"},[t("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[t("b-navbar-brand",{attrs:{href:"#"}},[t("img",{staticClass:"d-inline-block align-top",attrs:{id:"logo",src:n("cf05")}}),e._v(" Contributing-Gen ")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{href:"https://github.com/bttger/contributing-gen"}},[e._v("Improve the Template")])],1),t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item",{attrs:{href:"https://github.com/bttger/contributing-gen-web"}},[t("img",{staticClass:"d-inline-block align-top",attrs:{id:"github-logo",src:n("890a"),alt:"GitHub Repository"}})])],1)],1)],1)],1)},a=[]},"454f":function(e,t,n){"use strict";n("09f2")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-lg-6 col-xl-5 pr-auto pr-lg-0 mb-3"},[t("Configurator",{on:{generate:function(t){return e.generate(t)}}})],1),t("div",{staticClass:"col-12 col-lg-6 col-xl-7"},[t("MarkdownOutput",{attrs:{tabs:e.markdownOutput}})],1)])]),t("Footer")],1)},r=[],i=(n("14d9"),n("0418")),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shadow rounded-lg pt-3 px-3 pb-1",attrs:{id:"configurator"}},[e._m(0),t("Input",{attrs:{label:"Project Name",placeholder:"XYZ"},model:{value:e.specs.project.name,callback:function(t){e.$set(e.specs.project,"name",t)},expression:"specs.project.name"}}),t("Input",{attrs:{label:"Default Branch",placeholder:"main"},model:{value:e.specs.project.defaultBranch,callback:function(t){e.$set(e.specs.project,"defaultBranch",t)},expression:"specs.project.defaultBranch"}}),t("Input",{attrs:{label:"Repository URL",placeholder:"https://github.com/user/project-slug",type:"url",tooltip:"The URL of your Git repository"},model:{value:e.specs.project.repoUrl,callback:function(t){e.$set(e.specs.project,"repoUrl",t)},expression:"specs.project.repoUrl"}}),t("Input",{attrs:{label:"Documentation URL",placeholder:"https://docs.xyz-project.io",type:"url",tooltip:"The URL of your documentation"},model:{value:e.specs.project.docsUrl,callback:function(t){e.$set(e.specs.project,"docsUrl",t)},expression:"specs.project.docsUrl"}}),e._m(1),t("InputSwitch",{attrs:{label:"Generate",tooltip:"Should the CONTRIBUTING.md file be generated?"},model:{value:e.specs.contributing.generate,callback:function(t){e.$set(e.specs.contributing,"generate",t)},expression:"specs.contributing.generate"}}),t("Input",{attrs:{label:"Security Email",placeholder:"security@example.com",type:"email",tooltip:"Where would you like to be informed about sensitive bugs?",disabled:!e.specs.contributing.generate},model:{value:e.specs.contributing.emailSensitiveBugs,callback:function(t){e.$set(e.specs.contributing,"emailSensitiveBugs",t)},expression:"specs.contributing.emailSensitiveBugs"}}),e._m(2),t("InputSwitch",{attrs:{label:"Generate",tooltip:"Should the CODE_OF_CONDUCT.md file be generated?"},model:{value:e.specs.codeOfConduct.generate,callback:function(t){e.$set(e.specs.codeOfConduct,"generate",t)},expression:"specs.codeOfConduct.generate"}}),t("Input",{attrs:{label:"Enforcement Email",placeholder:"contact@example.com",type:"email",tooltip:"Where do you want to be notified about violations and misconduct?",disabled:!e.specs.codeOfConduct.generate},model:{value:e.specs.codeOfConduct.enforcementEmail,callback:function(t){e.$set(e.specs.codeOfConduct,"enforcementEmail",t)},expression:"specs.codeOfConduct.enforcementEmail"}}),t("InputSwitch",{attrs:{label:"Enforcement Guide",tooltip:"Should it contain guidelines on how to enforce the rules?",disabled:!e.specs.codeOfConduct.generate},model:{value:e.specs.codeOfConduct.enforcementGuidelines,callback:function(t){e.$set(e.specs.codeOfConduct,"enforcementGuidelines",t)},expression:"specs.codeOfConduct.enforcementGuidelines"}})],1)},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex"},[t("h5",[e._v("Project")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex"},[t("h5",[e._v("CONTRIBUTING.md")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex"},[t("h5",[e._v("CODE_OF_CONDUCT.md")])])}],c=function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"my-3"},[t("b-col",{staticClass:"d-flex pr-0",attrs:{cols:"12",lg:"4"}},[t("b-row",{attrs:{"align-v":"center"}},[t("b-col",{staticClass:"pr-2",attrs:{cols:"12"}},[t("label",{staticClass:"my-0",attrs:{for:e.getKebabCaseLabel}},[e._v(e._s(e.label))]),t("b-icon-info-circle",{directives:[{name:"show",rawName:"v-show",value:e.tooltip,expression:"tooltip"},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-1",attrs:{title:e.tooltip}})],1)],1)],1),t("b-col",{attrs:{cols:"12",lg:"8"}},[t("b-form-input",{attrs:{id:e.getKebabCaseLabel,placeholder:e.placeholder,type:e.computedType,disabled:e.disabled,trim:"",value:e.value},on:{update:function(t){return e.$emit("input",t)}}})],1)],1)},u=[],d={name:"Input",props:["label","placeholder","type","tooltip","disabled","value"],computed:{getKebabCaseLabel(){return this.label.replace(/([A-Z])([A-Z])/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()},computedType(){return this.type?this.type:"text"}}},p=d,b=n("2877"),f=Object(b["a"])(p,c,u,!1,null,"26656a51",null),m=f.exports,g=function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"my-3"},[t("b-col",{staticClass:"d-flex pr-0",attrs:{cols:"12",lg:"4"}},[t("b-row",{attrs:{"align-v":"center"}},[t("b-col",{staticClass:"pr-2",attrs:{cols:"12"}},[t("label",{staticClass:"my-0"},[e._v(e._s(e.label))]),t("b-icon-info-circle",{directives:[{name:"show",rawName:"v-show",value:e.tooltip,expression:"tooltip"},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-1",attrs:{title:e.tooltip}})],1)],1)],1),t("b-col",{staticClass:"d-flex",attrs:{cols:"12",lg:"8"}},[t("b-form-checkbox",{staticClass:"pt-0 mt-0",attrs:{switch:"",disabled:e.disabled,size:"lg",checked:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)],1)},h=[],w={name:"InputSwitch",props:["label","tooltip","disabled","value"]},v=w,A=Object(b["a"])(v,g,h,!1,null,"70ed315e",null),k=A.exports,C={name:"Configurator",components:{Input:m,InputSwitch:k},methods:{generate(){this.$emit("generate",this.specs)}},watch:{specs:{handler:function(){clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.generate,500)},deep:!0}},data(){return{specs:{project:{name:"",defaultBranch:"",repoUrl:"",docsUrl:""},contributing:{generate:!0,emailSensitiveBugs:""},codeOfConduct:{generate:!0,enforcementEmail:"",enforcementGuidelines:!1}},projectSlugManuallyChanged:!1,timeoutId:0}}},O=C,y=(n("8bb9"),Object(b["a"])(O,s,l,!1,null,"f75a555e",null)),j=y.exports,I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shadow rounded-lg p-3 mb-3",attrs:{id:"mdOutputDiv"}},[t("b-tabs",{attrs:{pills:""}},e._l(e.tabs,(function(n){return t("b-tab",{key:n.title,scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(n.title)+" "),n.noDownloadButton?e._e():t("b-button",{staticClass:"ml-1 py-0 px-2",attrs:{size:"sm",pill:""},on:{click:function(t){return t.stopPropagation(),e.clickDownload(n.title,n.markdown)}}},[t("b-icon-download",{staticClass:"my-0 mx-0"})],1)]},proxy:!0}],null,!0)},[t("InputSwitchMarkdown",{model:{value:e.showPlainMarkdown,callback:function(t){e.showPlainMarkdown=t},expression:"showPlainMarkdown"}}),t("div",{staticClass:"inline text-left mt-3"},[t("vue-markdown",{directives:[{name:"show",rawName:"v-show",value:!e.showPlainMarkdown,expression:"!showPlainMarkdown"}],staticClass:"markdown-body",attrs:{toc:!0,"toc-anchor-link":!1,breaks:!1,source:n.markdown}},[e._v(" "+e._s(n.markdown)+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showPlainMarkdown,expression:"showPlainMarkdown"}],domProps:{innerHTML:e._s(e.generatePlainMarkdownHtml(n.markdown))}})],1)],1)})),1)],1)},x=[],D=n("9ce6"),U=n.n(D),B=function(){var e=this,t=e._self._c;return t("div",{staticClass:"float-right"},[t("div",{staticClass:"d-flex"},[t("b-icon-info-circle",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-auto",attrs:{title:"Show plain markdown"}}),t("b-form-checkbox",{staticClass:"ml-1",attrs:{switch:"",size:"lg",checked:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)])},M=[],S={name:"InputSwitchMarkdown",props:["value"]},E=S,T=(n("a77b"),Object(b["a"])(E,B,M,!1,null,"2188a3c0",null)),R=T.exports,N={name:"MarkdownOutput",components:{VueMarkdown:U.a,InputSwitchMarkdown:R},props:["tabs"],data(){return{showPlainMarkdown:!1}},methods:{generatePlainMarkdownHtml(e){return e.replace(/\n/g,"<br>").replace(/<!--/g,"<code>&lt;!--").replace(/-->/g,"--&gt;</code>")},clickDownload(e,t){const n=new Blob([t],{type:"text/markdown; charset=UTF-8"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=e,o.click(),URL.revokeObjectURL(o.href)}}},P=N,L=(n("754d"),Object(b["a"])(P,I,x,!1,null,"1d61ddfe",null)),G=L.exports,J=n("7977"),Y=n("51c1"),Q=n("7bb1"),W="## Welcome to contributing-gen 🎉\n\nEasily generate a contribution guide 📃 to to communicate how people can get involved in your project!\n\nHopefully it will encourage you and others to contribute to open source projects. 😍",Z={name:"App",components:{Header:i["default"],Configurator:j,MarkdownOutput:G},data(){return{contributingGen:new J["a"](Y["a"],Q["a"]),markdownOutput:[{title:"Welcome",markdown:W,noDownloadButton:!0}]}},methods:{generate(e){if(this.markdownOutput=[],e.project.name&&(e.contributing.generate||e.codeOfConduct.generate)){if(e.contributing.generate){let t=this.contributingGen.generateContributing(e);this.markdownOutput.push({title:"CONTRIBUTING.md",markdown:t})}if(e.codeOfConduct.generate){let t=this.contributingGen.generateCodeOfConduct(e);this.markdownOutput.push({title:"CODE_OF_CONDUCT.md",markdown:t})}}else this.markdownOutput.push({title:"Welcome",markdown:W,noDownloadButton:!0})}}},H=Z,_=(n("454f"),Object(b["a"])(H,a,r,!1,null,null,null)),V=_.exports,F=n("5f5b"),X=n("b1e0");n("f9e3"),n("2dd8"),n("e4cbc");o["default"].use(F["a"]),o["default"].use(X["a"]),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(V)}).$mount("#app")},6492:function(e,t,n){},"754d":function(e,t,n){"use strict";n("f3ac")},"890a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},"8bb9":function(e,t,n){"use strict";n("6492")},9074:function(e,t,n){"use strict";n("3721")},a77b:function(e,t,n){"use strict";n("2e0b")},ad21:function(e,t,n){"use strict";var o=n("e504"),a=n.n(o);t["default"]=a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.a59416fc.png"},e504:function(e,t){},f3ac:function(e,t,n){}});
//# sourceMappingURL=app.f6d77b7f.js.map