(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{195:function(t,e,i){"use strict";var a=i(6),n=i(24),s=i(194),l=i.n(s);e.a=function t(e,i,s,u){var r=this;Object(n.a)(this,t),Object(a.a)(this,"getQueryFragment",(function(){return r.path})),Object(a.a)(this,"serialize",(function(t){return t[r.path]||null})),Object(a.a)(this,"validateInput",(function(){})),Object(a.a)(this,"deserialize",(function(t){return t[r.path]})),Object(a.a)(this,"hasChanged",(function(t,e){return!l()(t[r.path],e[r.path])})),Object(a.a)(this,"getDefaultValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.originalInput,i=void 0===e?{}:e,a=t.prefill,n=void 0===a?{}:a;return r._getDefaultValue({originalInput:i,prefill:n})})),Object(a.a)(this,"initCellView",(function(){var t=r.views.Cell;t&&r.adminMeta.readViews([t])})),Object(a.a)(this,"initFieldView",(function(){var t=r.views.Field;t&&r.adminMeta.readViews([t])})),Object(a.a)(this,"initFilterView",(function(){var t=r.views.Filter;t&&r.adminMeta.readViews([t])})),Object(a.a)(this,"getFilterTypes",(function(){return[]})),this.config=e,this.label=e.label,this.path=e.path,this.type=e.type,this.maybeAccess=e.access,this.isPrimaryKey=e.isPrimaryKey,this.list=i,this.adminMeta=s,this.views=u,"defaultValue"in e?"function"!=typeof e.defaultValue?this._getDefaultValue=function(t){return t.prefill[r.path]||e.defaultValue}:this._getDefaultValue=e.defaultValue:this._getDefaultValue=function(t){return t.prefill[r.path]||void 0}}},790:function(t,e,i){"use strict";i.r(e);var a=i(6),n=(i(24),i(194),i(195));class s extends n.a{constructor(){super(...arguments),Object(a.a)(this,"serialize",t=>{const{path:e}=this;return t&&t[e]?t[e]:null}),Object(a.a)(this,"getQueryFragment",()=>"\n    ".concat(this.path," {\n       id\n       path\n       filename\n       mimetype\n       encoding\n       publicUrl\n    }\n  ")),Object(a.a)(this,"getFilterTypes",()=>[])}}e.default=s}}]);