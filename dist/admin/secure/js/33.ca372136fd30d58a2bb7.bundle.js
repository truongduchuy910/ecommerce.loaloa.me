(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{881:function(t,e,i){"use strict";i.r(e);var a=i(8),s=i(2),n=i(166),r=i(165),l=i.n(r),u=function t(e,i,r){var u=this,h=i.readViews,c=i.preloadViews,o=i.getListByKey,p=i.adminPath,b=i.authStrategy,d=e.label,f=e.path,y=e.type,g=e.access,w=e.isOrderable,j=e.isPrimaryKey,O=e.isRequired,V=e.adminDoc,m=e.defaultValue,v=Object(s.a)(e,["label","path","type","access","isOrderable","isPrimaryKey","isRequired","adminDoc","defaultValue"]);Object(n.a)(this,t),Object(a.a)(this,"getQueryFragment",(function(){return u.path})),Object(a.a)(this,"serialize",(function(t){return t[u.path]||null})),Object(a.a)(this,"validateInput",(function(){})),Object(a.a)(this,"deserialize",(function(t){return t[u.path]})),Object(a.a)(this,"hasChanged",(function(t,e){return!l()(t[u.path],e[u.path])})),Object(a.a)(this,"getDefaultValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.originalInput,i=void 0===e?{}:e,a=t.prefill,s=void 0===a?{}:a;return u._getDefaultValue({originalInput:i,prefill:s})})),Object(a.a)(this,"initCellView",(function(){var t=u.views.Cell;t&&u.readViews([t])})),Object(a.a)(this,"initFieldView",(function(){var t=u.views.Field;t&&u.readViews([t])})),Object(a.a)(this,"initFilterView",(function(){var t=u.views.Filter;t&&u.readViews([t])})),Object(a.a)(this,"getFilterTypes",(function(){return[]})),Object(a.a)(this,"getFilterValue",(function(t){return t})),this.config=v,this.label=d,this.path=f,this.type=y,this.maybeAccess=g,this.isOrderable=w,this.isPrimaryKey=j,this.isRequired=O,this.adminDoc=V,this.readViews=h,this.preloadViews=c,this.getListByKey=o,this.adminPath=p,this.authStrategy=b,this.views=r,this._getDefaultValue="function"!=typeof m?function(t){return t.prefill[u.path]||m}:m};e.default=class extends u{constructor(...t){super(...t),Object(a.a)(this,"getFilterGraphQL",({type:t,value:e})=>{switch(t){case"is":return`${this.path}: "${e}"`;case"not":return`${this.path}_not: "${e}"`;case"in":return`${this.path}_in: [${e.split(",").map(t=>`"${t.trim()}"`).join(",")}]`;case"not_in":return`${this.path}_not_in: [${e.split(",").map(t=>`"${t.trim()}"`).join(",")}]`}}),Object(a.a)(this,"getFilterLabel",({label:t,type:e})=>{let i="";return["in","not_in"].includes(e)&&(i=" (comma separated)"),`${this.label} ${t.toLowerCase()}${i}`}),Object(a.a)(this,"formatFilter",({label:t,type:e,value:i})=>{let a=i;return["in","not_in"].includes(e)&&(a=i.split(",").map(t=>t.trim()).join(", ")),`${this.label} ${t.toLowerCase()}: ${a}`}),Object(a.a)(this,"getFilterTypes",()=>[{type:"is",label:"Is exactly",getInitialValue:()=>""},{type:"not",label:"Is not",getInitialValue:()=>""},{type:"in",label:"Is one of",getInitialValue:()=>""},{type:"not_in",label:"Is not one of",getInitialValue:()=>""}])}}}}]);