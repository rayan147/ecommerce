(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{215:function(e,t,r){"use strict";var n=r(87),a=r(252),c=r.n(a),s=r(254),o=r.n(s),i=r(255),j=r.n(i),l=r(253),d=r.n(l),u=r(2),p=function(e){var t=e.value,r=e.text;e.color;return Object(u.jsxs)(u.Fragment,{children:[Object(n.a)(Array(5)).map((function(e,r){return Object(u.jsx)("span",{children:t>=r+1?Object(u.jsx)(c.a,{fontSize:"small",style:{color:d.a[500]}}):t>=r+.5?Object(u.jsx)(o.a,{fontSize:"small",style:{color:d.a[500]}}):Object(u.jsx)(j.a,{fontSize:"small",style:{color:d.a[500]}})},r)})),Object(u.jsxs)("small",{children:[" ",r&&r," "]})]})};p.defaultProps={color:"#f8e824",value:0},t.a=p},223:function(e,t,r){"use strict";var n=r(188),a=r.n(n),c=r(189),s=r(190),o=r.n(s),i=r(13),j=i.a.PRODUCT_LIST_FAILURE,l=i.a.PRODUCT_LIST_REQUEST,d=i.a.PRODUCT_LIST_SUCCESS;t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var r=Object(c.a)(a.a.mark((function r(n,c){var s,i,u,p,b;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:l}),r.next=4,o()("/api/products?keyword=".concat(e,"&pageNumber=").concat(t));case 4:s=r.sent,i=s.data,n({type:d,payload:i}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n({type:j,payload:null!==(u=null===r.t0||void 0===r.t0||null===(p=r.t0.response)||void 0===p||null===(b=p.data)||void 0===b?void 0:b.message)&&void 0!==u?u:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}},225:function(e,t,r){"use strict";r(0);var n=r(257),a=r(2),c=function(e){var t=e.title,r=e.description,c=e.keywords;return Object(a.jsxs)(n.a,{children:[Object(a.jsx)("title",{children:t}),Object(a.jsx)("meta",{name:"description",content:r}),Object(a.jsx)("meta",{name:"keyword",content:c})]})};c.defaultProps={title:"Welcome To ProduceX",description:"We sell organic locally grown produces",keywords:"veggies, buy veggies,vegetable, organic vegetable"},t.a=c},334:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(223),c=r(38),s=r(68),o=r(333),i=r(199),j=r(180),l=r(51),d=r(3),u=r(215),p=r(142),b=r(201),x=r(326),O=r(207),h=r(224),m=r(2),g=Object(p.a)({root:{width:"100%",heigh:"100%",margin:"auto",maxHeight:310,maxWidth:140,borderRadius:"9px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px","&:hover":{transform:"scale(1.05)",transition:"all 0.3s ease-in-out"}}}),f=function(e){var t=e.product,r=g(),n=t._id,a=t.image,c=t.name,o=t.numReviews,i=t.rating,j=t.price;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.Link,{to:"/product/".concat(n),style:{textDecoration:"none"},children:Object(m.jsx)(b.a,{className:r.root,children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(h.a,{image:a,alt:c,component:"img"}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(s.a,{gutterBottom:!0,children:"".concat(c).substr(0,15)}),Object(m.jsx)(s.a,{children:Object(m.jsx)(u.a,{value:i,text:"".concat(o," reviews")})}),Object(m.jsxs)(s.a,{color:"secondary",children:["$",j]})]})]})})})})};f.defaultProps={name:"",_id:"",image:"",numReviews:0,rating:0,price:0};var v=f,y=r(202),T=r(313),w=r(312),S=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}})),k=function(e){var t=e.products,r=e.history,n=e.match,a=e.keyword,c=e.page,s=e.pages,o=e.isAdmin,i=void 0!==o&&o,j=S();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a,{container:!0,className:j.root,spacing:3,children:Object(m.jsx)(y.a,{item:!0,xs:12,children:Object(m.jsx)(y.a,{container:!0,justifyContent:"center",spacing:3,children:t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y.a,{item:!0,children:Object(m.jsx)(v,{product:e,history:r,match:n},e._id)},e._id)})}))})})}),Object(m.jsx)(T.a,{page:c,count:s,renderItem:function(e){return Object(m.jsx)(w.a,Object(d.a)({component:l.Link,to:i?"/admin/productlist/".concat(e.page+1):a?"/search/".concat(a,"/page/").concat(e.page+1):"/page/".concat(e.page)},e))}})]})},P=r(287),R=r.n(P),_=r(105),C=r(188),U=r.n(C),E=r(189),L=r(190),F=r.n(L),D=r(13),A=D.a.PRODUCT_TOP_REQUEST,B=D.a.PRODUCT_TOP_SUCCESS,I=D.a.PRODUCT_TOP_FAILURE,N=function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){var r,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:A}),e.next=4,F.a.get("/api/products/top");case 4:r=e.sent,n=r.data,t({type:B,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:I,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},z=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.productTopRated})),r=t.loading,a=t.error,i=t.products;Object(n.useEffect)((function(){e(N())}),[e]);for(var j=i.length>7?7:i.length,l=[],d=0;d<i.length;d+=j)l.push(Object(m.jsx)("div",{children:Object(m.jsx)(_.a,{display:"flex",justifyContent:"center",children:i.slice(d,d+j).map((function(e,t){return Object(m.jsx)(v,{product:e},t)}))})},d));return console.log(l),Object(m.jsxs)(m.Fragment,{children:[r&&Object(m.jsx)(o.a,{severity:"info",children:"Loading..."}),a&&Object(m.jsx)(o.a,{severity:"error",children:a}),!r&&!a&&i&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{style:{marginTop:"5rem",marginBottom:"2rem"},variant:"h6",gutterBottom:!0,children:"TOP PRODUCTS"}),Object(m.jsx)(R.a,{children:l})]})]})},W=r(225);t.default=function(e){var t=e.history,r=e.match,d=r.params.keyword,u=r.params.pageNumber||1,p=Object(c.b)(),b=Object(c.c)((function(e){return e.productList})),x=b.error,O=b.isLoading,h=b.products,g=b.page,f=b.pages;return Object(n.useEffect)((function(){p(Object(a.a)(d,u))}),[p,d,u]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(W.a,{}),Object(m.jsxs)(n.Suspense,{fallback:O&&Object(m.jsx)("h3",{className:"text-center",children:"Almost There.."}),children:[d?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.Link,{style:{textDecoration:"none",marginTop:"3rem"},to:"/",children:Object(m.jsx)(j.a,{children:"Back to Home"})})}):Object(m.jsx)(z,{}),x?Object(m.jsxs)(o.a,{severity:"error",children:[Object(m.jsx)(i.a,{children:"Error"}),Object(m.jsx)("strong",{children:x})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{style:{marginTop:"5rem",marginBottom:"2rem"},variant:"h6",gutterBottom:!0,children:"LATEST PRODUCTS"}),Object(m.jsx)(k,{products:h,history:t,match:r,keyword:d,page:g,pages:f})]})]})]})}}}]);
//# sourceMappingURL=20.c1a42327.chunk.js.map