(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{100:function(e,t,n){"use strict";var a=n(12),i=(n(0),n(87)),c=n(4),r=Object(i.a)((function(e){return{root:function(t){return Object(a.a)({position:"relative",padding:"15px 0px 0px 0px"},e.breakpoints.up("md"),{})},input:function(e){return{background:"#f9f9f9",color:"#191a1d",transition:"border-color ease .3s",cursor:"pointer",borderRadius:"1000px",border:"2px solid #e2e2e2",width:"100%",padding:"15px 20px",outline:"0","&:hover":{border:"2px solid rgba(158,209,91,1)"}}},label:{padding:"10px",color:"#919191",width:"100%",textTransform:"uppercase"}}}));t.a=function(e){var t=e.handler,n=e.type,a=e.placeholder,i=e.value,o=r(e);return Object(c.jsx)("div",{className:o.root,children:Object(c.jsx)("input",{type:n,className:o.input,onChange:t,placeholder:a,value:i})})}},101:function(e,t,n){"use strict";var a=n(20),i=n(11),c=n(21),r=n(22),o=n(0),s=n.n(o),l=n(97),d=(n(113),n(4)),p=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={},i}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.value;return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)(l.a,{defaultCountry:"RU",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 *",value:e,onChange:this.props.setValue,style:{marginTop:"15px",height:"4em"}})})}}]),n}(s.a.Component);t.a=p},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));n(2),n(13),n(5);function a(e,t,n,a){var i=new FormData;return i.append("fields[name_2]","\u0417\u0430\u044f\u0432\u043a\u0430 \u0441 '\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0435 \u0437\u0435\u043c\u043b\u0438'"),e&&i.append("fields[name_1]",e),t&&i.append("fields[222715_1][430461]",t),n&&i.append("fields[222717_1][430473]",n),a&&i.append("fields[note_2]",a),i.append("form_id","582790"),i.append("hash","384168b51bc44afef80081fe1c9de840"),fetch("https://forms.amocrm.ru/queue/add",{method:"POST",body:i})}function i(e,t){var n=new FormData;return n.append("fields[name_2]","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0443 \u043f\u043e\u0441\u0435\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"),n.append("fields[222717_1][430473]",e),n.append("fields[note_2]","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0443 \u043f\u043e\u0441\u0435\u043b\u043a\u0430 ".concat(t," \u043d\u0430 ").concat(e)),n.append("form_id","892084"),n.append("hash","ecb202cf2535d0e2e6d8486fe5363dfd"),fetch("https://forms.amocrm.ru/queue/add",{method:"POST",body:n})}},113:function(e,t,n){},161:function(e,t,n){"use strict";t.a=n.p+"static/media/vk.f5ae1a15.svg"},162:function(e,t,n){"use strict";t.a=n.p+"static/media/instagram.1fcf0e72.svg"},163:function(e,t,n){"use strict";var a=n(8),i=n(12),c=n(0),r=n.n(c),o=n(199),s=n(83),l=n(325),d=n(100),p=n(101),b=n(97),u=n(87),j=n(102),m=n(4),h=Object(u.a)((function(e){return{root:function(e){return{}},body:{display:"flex",alignItems:"center"},bodyForm:{background:"#fff",padding:"15px",borderRadius:"15px"},btnTarget:{margin:"10px 0px 0px 0px"},bodyText:{fontFamily:"Montserrat",padding:"15px",fontSize:"2rem",color:"#263238",lineHeight:"110%"},textarea:{fontFamily:"Montserrat",fontWeight:"400",width:"100%",borderRadius:"15px",background:"#f9f9f9",color:"#3c4b5a",cursor:"pointer",border:"2px solid #e2e2e2",fontSize:"1.1rem",marginTop:"15px",outline:"0",padding:"15px"},formContainer:Object(i.a)({display:"flex",flexDirection:"column",justifyContent:"space-around"},e.breakpoints.up("md"),{flexDirection:"row"})}}));t.a=function(e){var t=r.a.useState(""),n=Object(a.a)(t,2),i=n[0],c=n[1],u=r.a.useState(""),x=Object(a.a)(u,2),f=x[0],g=x[1],O=r.a.useState(""),v=Object(a.a)(O,2),y=v[0],w=v[1],k=r.a.useState(""),N=Object(a.a)(k,2),C=N[0],_=N[1],z=r.a.useState(!1),T=Object(a.a)(z,2),S=T[0],A=T[1],R=h({});return S?Object(m.jsx)("div",{className:R.root,children:Object(m.jsx)(s.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(m.jsx)(o.a,{align:"center",className:R.bodyText,children:"\u041f\u0438\u0441\u044c\u043c\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e, \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u043a\u043e\u0440\u043e \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f"})})}):Object(m.jsx)("div",{style:{margin:"15px"},className:R.root,children:Object(m.jsx)(s.a,{container:!0,children:Object(m.jsx)(s.a,{item:!0,xs:12,children:Object(m.jsxs)("div",{className:R.bodyForm,style:{transform:"initial"},children:[Object(m.jsx)(l.a,{my:2,mx:4,children:Object(m.jsx)("center",{children:Object(m.jsx)("h3",{style:{fontSize:"27px"},children:"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435 \u0438 \u043c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438"})})}),Object(m.jsx)(d.a,{placeholder:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442? *",handler:function(e){return g(e.target.value)},value:f,type:"text"}),Object(m.jsx)(d.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email *",handler:function(e){return w(e.target.value)},value:y,type:"email"}),Object(m.jsx)(p.a,{value:i,setValue:function(e){console.log("val",e),c(e)}}),Object(m.jsx)("textarea",{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c",multiline:!0,rows:4,value:C,onChange:function(e){return _(e.target.value)},className:R.textarea}),Object(m.jsx)("div",{className:R.btnTarget,children:Object(m.jsx)(s.a,{container:!0,justifyContent:"center",children:Object(m.jsx)("button",{className:"main-button",style:{margin:"0px"},onClick:function(){return function(){console.log("submit, phone",i);var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(y);f?e?Object(b.b)(i)?(Object(b.c)(i)&&(console.log("submit, phone valid"),Object(j.a)(f,i,y).then((function(e){c(""),g(""),w(""),A(!0)})).catch((function(e){c(""),g(""),w(""),A(!0)}))),console.log("submit, name",f),console.log("submit, email",y),window.ym(70872661,"reachGoal","order1")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f")}()},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})})]})})})})}},315:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(8),i=n(13),c=n(12),r=n(0),o=n.n(r),s=n(19),l=n(32),d=n(325),p=n(83),b=n(227),u=n(309),j=n(197),m=n(223),h=n(161),x=n(162),f=n(163),g=n(42),O=n(4),v=Object(j.a)((function(e){var t,n;return{footer:{padding:e.spacing(2,2,2),marginTop:"auto",borderTop:"1px solid #eff3f4",backgroundColor:"#fff"},menuBtn:(t={position:"relative",padding:e.spacing(3,1),color:"#3c4b5a",textAlign:"center",width:"100%",transition:"all ease .3s","&:before":{transform:"translateX(-50%)",transition:"all ease .3s",width:"20%",height:"4px",position:"absolute",top:"54px",left:"50%",opacity:"0",pointerEvents:"none",content:"''",borderRadius:"6px",background:"linear-gradient(90deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)"}},Object(c.a)(t,e.breakpoints.up("sm"),{"&:hover:before":{opacity:"1",top:"54px",width:"85%"}}),Object(c.a)(t,"&:hover",{}),Object(c.a)(t,e.breakpoints.up("md"),{textAlign:"left",width:"211px"}),Object(c.a)(t,e.breakpoints.between("xs","sm"),{"&:hover:before":{opacity:"0"}}),t),menuBtn_dacha:Object(c.a)({position:"relative",padding:e.spacing(3,1),color:"#3c4b5a",width:"100%",transition:"all ease .3s","&:before":{transform:"translateX(-50%)",transition:"all ease .3s",width:"10%",height:"4px",position:"absolute",top:"54px",left:"20%",opacity:"0",pointerEvents:"none",content:"''",borderRadius:"6px",background:"linear-gradient(90deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)"},"&:hover:before":{width:"32%",opacity:"1",top:"54px",left:"20%"}},e.breakpoints.between("xs","sm"),{"&:hover:before":{opacity:"0"}}),menuBtn_services:{"&:before":{width:"10%",opacity:"0",left:"20%"},"&:hover:before":{width:"24%",left:"19%"}},menuBtn_contact:{"&:before":{width:"10%",opacity:"0",left:"24%"},"&:hover:before":{width:"36%",left:"24%"}},icons:{maxWidth:"350px"},icon:{cursor:"pointer"},phone:{textAlign:"center",color:"#3c4b5a",padding:e.spacing(1,0,2)},top:{background:"#fff",borderBottom:"1px solid #eff3f4",padding:e.spacing(1,0,2)},tail:{padding:e.spacing(3,0,1),color:"#919fa3"},header:Object(c.a)({padding:e.spacing(1,1),textAlign:"center",color:"#3c4b5a",cursor:"pointer"},e.breakpoints.up("md"),{textAlign:"left",width:"379px"}),descr:Object(c.a)({padding:e.spacing(2,1),textAlign:"center",color:"#919fa3"},e.breakpoints.up("md"),{textAlign:"right"}),logo:(n={display:"none",width:"60px",height:"60px",backgroundImage:"url(".concat(g.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",marginRight:e.spacing(1)},Object(c.a)(n,e.breakpoints.up("md"),{display:"block"}),Object(c.a)(n,e.breakpoints.up("lg"),{marginRight:e.spacing(2)}),n),logoText:Object(c.a)({display:"none",color:"#01eb88",fontSize:"1.2rem"},e.breakpoints.up("md"),{display:"block"}),logoTitle:Object(c.a)({width:"308px",fontSize:"1.5rem",fontFamily:"Roboto, sans-serif"},e.breakpoints.up("md"),{fontSize:"1.5rem",fontFamily:"Roboto, sans-serif"})}})),y=o.a.forwardRef((function(e,t){return Object(O.jsx)(u.a,Object(i.a)({direction:"up",ref:t},e))}));function w(){var e=v(),t=o.a.useContext(s.b),n=o.a.useState(!1),i=Object(a.a)(n,2),c=i[0],r=i[1];return Object(O.jsxs)("footer",{className:e.footer,children:[Object(O.jsxs)(m.a,{maxWidth:"lg",children:[Object(O.jsxs)(p.a,{container:!0,justifyContent:"center",alignItems:"center",className:e.top,children:[Object(O.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(O.jsx)("div",{className:e.header,children:Object(O.jsxs)(l.b,{to:"/",onClick:function(){return window.scrollTo(0,0)},style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)("div",{className:e.logo}),Object(O.jsx)("h3",{className:e.logoTitle,children:"\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0435 \u0417\u0435\u043c\u043b\u0438"})]})})}),Object(O.jsx)(p.a,{item:!0,xs:12,md:7,children:Object(O.jsxs)(p.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(O.jsx)(p.a,{item:!0,xs:12,md:5}),Object(O.jsx)(p.a,{item:!0,xs:12,md:7,children:Object(O.jsx)(p.a,{container:!0,justifyContent:"center",children:Object(O.jsxs)(p.a,{container:!0,justifyContent:"center",alignItems:"center",flexDirection:"row",className:e.icons,children:[Object(O.jsx)("div",{className:e.descr,children:Object(O.jsx)("h5",{className:"light-text",style:{padding:"0 10px"},children:"\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043d\u0430\u043c\u0438 \u0432 "})}),Object(O.jsx)("img",{src:h.a,style:{marginRight:"10px"},className:e.icon,onClick:function(){window.open("https://vk.com/zagorodnyezemli","_blank")}}),Object(O.jsx)("img",{src:x.a,className:e.icon,onClick:function(){window.open("https://www.instagram.com/zagzem","_blank")}})]})})})]})})]}),Object(O.jsx)(d.a,{my:2,children:Object(O.jsxs)(p.a,{container:!0,children:[Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(O.jsxs)(p.a,{container:!0,direction:"column",children:[Object(O.jsx)(l.b,{to:"/villages",className:e.menuBtn,onClick:function(){return t.selectOnlyVillageType(1)},children:Object(O.jsx)("h4",{className:"light-text",children:"\u041a\u043e\u0442\u0442\u0435\u0434\u0436\u043d\u044b\u0435 \u043f\u043e\u0441\u0435\u043b\u043a\u0438"})}),Object(O.jsx)(l.b,{to:"/villages",className:e.menuBtn+" "+e.menuBtn_dacha,onClick:function(){return t.selectOnlyVillageType(2)},children:Object(O.jsx)("h4",{className:"light-text menu-butt",children:"\u0414\u0430\u0447\u043d\u044b\u0435 \u043f\u043e\u0441\u0435\u043b\u043a\u0438"})})]})}),Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(O.jsxs)(p.a,{container:!0,direction:"column",children:[Object(O.jsx)(l.b,{to:"/services",className:e.menuBtn+" "+e.menuBtn_services,children:Object(O.jsx)("h4",{className:"light-text ",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(O.jsx)(l.b,{to:"/contact",className:e.menuBtn+" "+e.menuBtn_contact,children:Object(O.jsx)("h4",{className:"light-text ",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})}),Object(O.jsx)(p.a,{item:!0,xs:12,sm:12,md:4,children:Object(O.jsxs)(p.a,{container:!0,justifyContent:"center",alignItems:"center",children:[Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,md:12,children:Object(O.jsx)("div",{className:e.phone,children:Object(O.jsx)("h3",{onClick:function(){return window.location.href="tel:84999389228"},children:"+7 (499) 938-92-28"})})}),Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,md:12,children:Object(O.jsx)("button",{className:"main-button main-button-large",onClick:function(){return r(!0)},children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c"})})]})})]})}),Object(O.jsx)(p.a,{container:!0,justifyContent:"center",alignItems:"center",className:e.tail,children:Object(O.jsx)("h5",{className:"light-text",style:{padding:"0 10px"},children:"\xa9 2021 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."})})]}),Object(O.jsx)(b.a,{open:c,fullWidth:!0,maxWidth:"sm",TransitionComponent:y,onClose:function(){return r(!1)},children:Object(O.jsx)(f.a,{})})]})}}}]);
//# sourceMappingURL=13.3afe7608.chunk.js.map