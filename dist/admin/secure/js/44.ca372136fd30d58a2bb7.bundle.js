(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{868:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n(0),r=n.n(o),s=n(177),c=n(45);class u extends o.Component{constructor(){super(...arguments),Object(a.a)(this,"onChange",e=>{const t=e.target.value;this.props.onChange(t.replace(/\D/g,""))}),Object(a.a)(this,"valueToString",e=>"string"==typeof e?e:"number"==typeof e?String(e):"")}render(){const{autoFocus:e,field:t,value:n,errors:a}=this.props,o="ks-input-".concat(t.path);return r.a.createElement(s.a,null,r.a.createElement(s.c,{htmlFor:o,field:t,errors:a}),r.a.createElement(s.b,null,r.a.createElement(c.c,{autoComplete:"off",autoFocus:e,type:"text",value:this.valueToString(n),onChange:this.onChange,id:o})))}}t.default=u}}]);