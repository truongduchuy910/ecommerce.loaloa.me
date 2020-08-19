(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{791:function(e,t,a){"use strict";a.r(t);var s=a(6),n=a(4),i=a(1),r=a(71),o=a(0),l=a(3),c=a(2),u=a(12),d=a(11),h=a(22),g=a.n(h),p=a(63),b=a(114),j=a(23);class m extends o.Component{constructor(e){super(e),Object(s.a)(this,"onCancel",()=>{this.props.onChange(this.originalFile),this.setState({changeStatus:this.originalFile?"stored":"empty",dataURI:null,errorMessage:null})}),Object(s.a)(this,"onRemove",()=>{this.setState({changeStatus:"removed",errorMessage:null}),this.props.onChange(null)}),Object(s.a)(this,"onChange",e=>{let{target:{validity:t,files:[a]}}=e;if(!a)return;const{errorMessage:s,onChange:n}=this.props,i={changeStatus:"updated"};t.valid?(a.type.includes("image")?(this.getDataURI(a),i.oldImagePath=this.getImagePath()):this.state.dataURI&&this.setState({dataURI:null,errorMessage:null}),n(a),this.setState(i)):this.setState({errorMessage:s({type:"save"})})}),Object(s.a)(this,"openFileBrowser",()=>{this.inputRef&&this.inputRef.click()}),Object(s.a)(this,"getFile",()=>{const{value:e}=this.props,{changeStatus:t}=this.state,a="removed"===t?this.originalFile:e;return{file:a,type:a&&a.__typename?"server":"client"}}),Object(s.a)(this,"getDataURI",e=>{const{errorMessage:t}=this.props,a=new FileReader;a.readAsDataURL(e),a.onloadstart=()=>{this.setState({isLoading:!0})},a.onerror=e=>{console.error("Error with Cloudinary preview",e),this.setState({errorMessage:t({type:"preview"})})},a.onloadend=e=>{this.setState({isLoading:!1,dataURI:e.target.result})}}),Object(s.a)(this,"getImagePath",()=>{const{dataURI:e}=this.state,{file:t}=this.getFile();return t&&t.mimetype&&t.mimetype.includes("image")?t.publicUrl:e}),Object(s.a)(this,"getInputRef",e=>{this.inputRef=e}),Object(s.a)(this,"renderUploadButton",()=>{const{uploadButtonLabel:e}=this.props,{changeStatus:t,isLoading:a}=this.state;return Object(i.jsx)(d.c,{onClick:this.openFileBrowser,isLoading:a,variant:"ghost"},e({status:t}))}),Object(s.a)(this,"renderCancelButton",()=>{const{cancelButtonLabel:e}=this.props,{changeStatus:t}=this.state;let a="warning",s=this.onRemove;switch(t){case"removed":a="primary",s=this.onCancel;break;case"updated":s=this.onCancel}return Object(i.jsx)(d.a,{onClick:s,variant:"subtle",appearance:a},e({status:t}))});const{value:t}=e;this.originalFile=t;const a=this.originalFile?"stored":"empty";this.state={changeStatus:a,dataURI:null,errorMessage:null,isLoading:!1,oldImagePath:null}}render(){const{autoFocus:e,field:t,statusMessage:a,errors:s}=this.props,{changeStatus:n,errorMessage:o}=this.state,{file:l}=this.getFile(),u=this.getImagePath(),d=["removed","updated"].includes(n),h="ks-input-".concat(t.path);return Object(i.jsx)(r.a,null,Object(i.jsx)(r.d,{htmlFor:h,field:t,errors:s}),t.config.adminDoc&&Object(i.jsx)(r.b,null,t.config.adminDoc),Object(i.jsx)(r.c,null,l?Object(i.jsx)(O,null,u?Object(i.jsx)(x,{src:u,alt:t.path}):null,Object(i.jsx)(f,null,Object(i.jsx)(j.c,{style:{marginBottom:c.d}},this.renderUploadButton(),this.renderCancelButton()),o?Object(i.jsx)(R,null,o):Object(i.jsx)(j.c,{isInline:!0,growIndexes:[0]},Object(i.jsx)(v,{href:l.publicUrl},l.filename||l.name),d?Object(i.jsx)(y,{status:n},a({status:n})):null))):this.renderUploadButton(),Object(i.jsx)(p.b,{autoComplete:"off",autoFocus:e,id:h,innerRef:this.getInputRef,name:t.path,onChange:this.onChange,type:"file"})))}}Object(s.a)(m,"propTypes",{cancelButtonLabel:g.a.func.isRequired,disabled:g.a.bool,errorMessage:g.a.func.isRequired,field:g.a.object,onChange:g.a.func.isRequired,statusMessage:g.a.func.isRequired,uploadButtonLabel:g.a.func.isRequired}),Object(s.a)(m,"defaultProps",{cancelButtonLabel:function(e){let{status:t}=e;switch(t){case"stored":return"Remove File";case"removed":return"Undo Remove";case"updated":default:return"Cancel"}},errorMessage:function(e){let{type:t}=e;switch(t){case"save":return"Something went wrong, please reload and try again.";case"preview":return"Something went wrong, please try again."}},statusMessage:function(e){let{status:t}=e;switch(t){case"removed":return"save to remove";case"updated":return"save to upload"}},uploadButtonLabel:function(e){let{status:t}=e;return"empty"===t?"Upload File":"Change File"}});const O=e=>Object(i.jsx)("div",Object(l.a)({css:{alignItems:"flex-start",display:"flex"}},e)),f=e=>Object(i.jsx)("div",Object(l.a)({css:{flex:1,minWidth:0}},e)),x=e=>Object(i.jsx)("div",{css:{backgroundColor:"white",borderRadius:c.a,border:"1px solid ".concat(c.b.N20),flexShrink:0,lineHeight:0,marginRight:c.d,padding:4,position:"relative",textAlign:"center",width:130}},Object(i.jsx)("img",Object(l.a)({css:{height:"auto",maxWidth:"100%"}},e))),v=e=>Object(i.jsx)(b.a,Object(l.a)({crop:"right"},e)),R=e=>{let{children:t}=e,a=Object(n.a)(e,["children"]);return Object(i.jsx)(b.a,Object(l.a)({style:{backgroundColor:c.b.R.L80,borderColor:"transparent",color:c.b.R.D20,display:"inline-flex"}},a),Object(i.jsx)(u.a,{css:{marginRight:c.d}}),t)},w={default:"primary",removed:"danger",updated:"create"},y=e=>{let{status:t="default"}=e,a=Object(n.a)(e,["status"]);const s=w[t];return Object(i.jsx)(b.a,Object(l.a)({appearance:s},a))};t.default=m}}]);