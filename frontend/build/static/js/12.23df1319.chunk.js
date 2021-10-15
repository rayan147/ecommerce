(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12],{199:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),i=(t(6),t(7)),s=t(68),c=t(5),l=o.forwardRef((function(e,a){var t=e.classes,i=e.className,l=Object(n.a)(e,["classes","className"]);return o.createElement(s.a,Object(r.a)({gutterBottom:!0,component:"div",ref:a,className:Object(c.a)(t.root,i)},l))}));a.a=Object(i.a)((function(e){return{root:{fontWeight:e.typography.fontWeightMedium,marginTop:-2}}}),{name:"MuiAlertTitle"})(l)},200:function(e,a,t){"use strict";a.a={NAME:"name",EMAIL:"email",PASSWORD:"password",CONFIRM_PASSWORD:"confirmPassword",ERROR_MESSAGE:"errorMessage",ADDRESS:"ADDRESS",COUNTRY:"COUNTRY",ZIP_CODE:"ZIP_CODE",CITY:"CITY",STATE:"STATE"}},201:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),i=(t(6),t(5)),s=t(133),c=t(7),l=o.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,u=Object(n.a)(e,["classes","className","raised"]);return o.createElement(s.a,Object(r.a)({className:Object(i.a)(t.root,c),elevation:d?8:1,ref:a},u))}));a.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},207:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),i=(t(6),t(5)),s=t(7),c=o.forwardRef((function(e,a){var t=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(l,Object(r.a)({className:Object(i.a)(t.root,s),ref:a},d))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},227:function(e,a,t){"use strict";var r=t(48),n=t(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(0)),i=(0,r(t(50)).default)(o.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");a.default=i},228:function(e,a,t){"use strict";a.a={name:"",email:"",password:"",confirmPassword:"",errorMessage:null}},229:function(e,a,t){"use strict";var r=t(3),n=t(200),o=n.a.NAME,i=n.a.EMAIL,s=n.a.PASSWORD,c=n.a.CONFIRM_PASSWORD,l=n.a.ERROR_MESSAGE;a.a=function(e,a){switch(a.type){case o:return Object(r.a)(Object(r.a)({},e),{},{name:a.payload});case i:return Object(r.a)(Object(r.a)({},e),{},{email:a.payload});case s:return Object(r.a)(Object(r.a)({},e),{},{password:a.payload});case c:return Object(r.a)(Object(r.a)({},e),{},{confirmPassword:a.payload});case l:return{name:"",email:"",password:"",confirmPassword:"",errorMessage:a.errorMessage};default:return e}}},258:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(20),i=t(0),s=(t(6),t(5)),c=t(7),l=t(8),d=i.forwardRef((function(e,a){var t=e.classes,o=e.className,c=e.component,d=void 0===c?"div":c,u=e.disableGutters,m=void 0!==u&&u,p=e.fixed,b=void 0!==p&&p,f=e.maxWidth,g=void 0===f?"lg":f,h=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(d,Object(r.a)({className:Object(s.a)(t.root,o,b&&t.fixed,m&&t.disableGutters,!1!==g&&t["maxWidth".concat(Object(l.a)(String(g)))]),ref:a},h))}));a.a=Object(c.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var r=e.breakpoints.values[t];return 0!==r&&(a[e.breakpoints.up(t)]={maxWidth:r}),a}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},261:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),i=(t(6),t(5)),s=t(7),c=t(81),l=Object(c.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=o.forwardRef((function(e,a){var t=e.alt,s=e.children,c=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,p=e.imgProps,b=e.sizes,f=e.src,g=e.srcSet,h=e.variant,j=void 0===h?"circular":h,v=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,x=function(e){var a=e.src,t=e.srcSet,r=o.useState(!1),n=r[0],i=r[1];return o.useEffect((function(){if(a||t){i(!1);var e=!0,r=new Image;return r.src=a,r.srcSet=t,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[a,t]),n}({src:f,srcSet:g}),y=f||g,S=y&&"error"!==x;return O=S?o.createElement("img",Object(r.a)({alt:t,src:f,srcSet:g,sizes:b,className:c.img},p)):null!=s?s:y&&t?t[0]:o.createElement(l,{className:c.fallback}),o.createElement(m,Object(r.a)({className:Object(i.a)(c.root,c.system,c[j],d,!S&&c.colorDefault),ref:a},v),O)}));a.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},306:function(e,a,t){"use strict";var r=t(1),n=t(0),o=(t(6),t(7)),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},s=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};a.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},s(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var a=e.children,t=void 0===a?null:a;return e.classes,n.createElement(n.Fragment,null,t)}))},347:function(e,a,t){"use strict";t.r(a);var r=t(41),n=t(0),o=t(51),i=t(38),s=t(188),c=t.n(s),l=t(189),d=t(190),u=t.n(d),m=t(15),p=m.a.USER_REGISTER_REQUEST,b=m.a.USER_REGISTER_FAILURE,f=m.a.USER_REGISTER_SUCCESS,g=m.a.USER_LOGIN_SUCCESS,h=function(e,a,t){return function(){var r=Object(l.a)(c.a.mark((function r(n){var o,i,s,l,d,m;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:p}),o={headers:{"Content-Type":"application/json"}},r.next=5,u.a.post("/api/users/register",{name:e,email:a,password:t},o);case 5:i=r.sent,s=i.data,n({type:f,payload:s}),n({type:g,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),n({type:b,payload:null!==(l=null===r.t0||void 0===r.t0||null===(d=r.t0.response)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.message)&&void 0!==l?l:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},j=t(228),v=t(229),O=t(200),x=t(261),y=t(180),S=t(306),R=t(331),E=t(227),w=t.n(E),k=t(68),C=t(142),N=t(258),M=t(201),W=t(207),A=t(333),P=t(199),I=t(2),T=Object(C.a)((function(e){return{root:{display:"flex",justifyContent:"center",width:"100%",height:"100%",maxHeight:720,margin:"auto",maxWidth:410,borderRadius:"10px",marginTop:e.spacing(5),boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},account:{marginTop:".2rem",marginBottom:".4rem"}}})),_=O.a.NAME,D=O.a.EMAIL,z=O.a.ERROR_MESSAGE,F=O.a.PASSWORD,L=O.a.CONFIRM_PASSWORD;a.default=function(e){var a,t,s=e.location,c=e.history,l=T(),d=Object(n.useReducer)(v.a,j.a),u=Object(r.a)(d,2),m=u[0],p=u[1],b=m.name,f=m.email,g=m.password,O=m.confirmPassword,E=m.errorMessage,C=Object(i.b)(),G=Object(i.c)((function(e){return e.userRegister})),U=G.isRegistering,H=G.error,q=G.userInfo,B=null!==(a=null===s||void 0===s||null===(t=s.search)||void 0===t?void 0:t.split("=")[1])&&void 0!==a?a:"/";Object(n.useEffect)((function(){q&&q._id&&c.push(B)}),[B,c,q]);return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(M.a,{className:l.root,boxShadow:3,children:Object(I.jsx)(W.a,{children:Object(I.jsxs)(N.a,{component:"main",maxWidth:"xs",children:[Object(I.jsx)(S.a,{}),Object(I.jsxs)("div",{className:l.paper,children:[Object(I.jsx)(x.a,{className:l.avatar,children:Object(I.jsx)(w.a,{})}),Object(I.jsx)(k.a,{component:"h1",variant:"h5",children:"Register"}),E&&Object(I.jsx)(A.a,{severity:"error",children:Object(I.jsx)(P.a,{children:E})}),H&&Object(I.jsx)(A.a,{severity:"error",children:Object(I.jsx)(P.a,{children:H})}),U&&Object(I.jsx)(A.a,{severity:"info",children:Object(I.jsx)(P.a,{children:"Registering ..."})}),Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g===O?C(h(b,f,g)):p({type:z,errorMessage:"Passwords do not match"})},className:l.form,noValidate:!0,children:[Object(I.jsx)(R.a,{variant:"outlined",margin:"normal",value:b,onChange:function(e){return p({type:_,payload:e.target.value})},required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0}),Object(I.jsx)(R.a,{variant:"outlined",margin:"normal",value:m.email,onChange:function(e){return p({type:D,payload:e.target.value})},required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(I.jsx)(R.a,{variant:"outlined",margin:"normal",value:g,onChange:function(e){return p({type:F,payload:e.target.value})},required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(I.jsx)(R.a,{variant:"outlined",margin:"normal",value:O,onChange:function(e){return p({type:L,payload:e.target.value})},required:!0,fullWidth:!0,name:"confirmPassword",label:"confirmPassword",type:"password",id:"confirmPassword",autoComplete:"confirmPassword"}),Object(I.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,children:"Register"}),Object(I.jsxs)("span",{className:l.account,children:["Have an Account?"," "]}),Object(I.jsx)(o.Link,{to:B?"/login?redirect=".concat(B):"/login",children:"Login"})]})]})]})})})})}}}]);
//# sourceMappingURL=12.23df1319.chunk.js.map