(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{162:function(e,t,n){"use strict";t.a=n.p+"static/media/vk.4a641c6d.svg"},163:function(e,t,n){"use strict";n.p},221:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return be}));var a=n(13),o=n(8),c=n(12),i=n(0),s=n.n(i),r=n(31),l=n(223),b=n(312),d=n(224),u=n(325),j=n(198),g=n(225),h=n.n(g),p=n(85),x=n(310),f=n(308),O=n(309),m=n(335),v=n(226),k=n(42),y=n(7),w=n(19),C=n(306),I=n(305),R=n(201),S=n.n(R),N=n(202),F=n.n(N),T=n(207),L=n.n(T),B=n(203),q=n.n(B),E=n(205),W=n.n(E),z=n(204),H=n.n(z),P=n(206),V=n.n(P),$=n(307),G=n(4),J=["labelText","labelIcon","color","bgColor"],X=Object(j.a)((function(e){return{root:{color:"#FFF","&:focus > $content":{backgroundColor:"#FFF"}},content:{color:e.palette.text.secondary,paddingRight:e.spacing(1),fontWeight:e.typography.fontWeightMedium},group:{marginLeft:0,"& $content":{paddingLeft:e.spacing(2)}},expanded:{},label:{fontWeight:"inherit",color:"inherit"},labelRoot:{display:"flex",alignItems:"center",padding:e.spacing(1.2,0)},labelIcon:{marginRight:e.spacing(2)},labelText:{color:"#3c4b5a",flexGrow:1,lineHeight:"40px"}}}));function A(e){var t=X(),n=e.labelText,o=(e.labelIcon,e.color,e.bgColor,Object(y.a)(e,J));return Object(G.jsx)(I.a,Object(a.a)({label:Object(G.jsx)("div",{className:t.labelRoot,children:Object(G.jsx)("h4",{children:n})}),classes:{root:t.root,content:t.content,expanded:t.expanded,group:t.group,label:t.label}},o))}var D=Object(j.a)({root:{flexGrow:1,maxWidth:400}}),M=function(e){var t=D(),n=e.hide,a=s.a.useContext(w.b);return Object(G.jsxs)(C.a,{className:t.root,defaultCollapseIcon:Object(G.jsx)(S.a,{}),defaultExpandIcon:Object(G.jsx)(F.a,{}),defaultEndIcon:Object(G.jsx)("div",{style:{width:24}}),style:{paddingBottom:"60px"},children:[Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}}),Object(G.jsx)(r.b,{to:"/",onClick:function(){return n()},children:Object(G.jsx)(A,{nodeId:"0",labelText:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",labelIcon:q.a})}),Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}}),Object(G.jsxs)(A,{nodeId:"1",labelText:"\u041f\u043e\u0441\u0435\u043b\u043a\u0438",labelIcon:H.a,color:"#1a73e8",bgColor:"#e8f0fe",children:[Object(G.jsx)(r.b,{to:"/villages",onClick:function(){n(),a.selectOnlyVillageType(1)},children:Object(G.jsx)(A,{nodeId:"2",labelText:"\u041a\u043e\u0442\u0442\u0435\u0434\u0436\u043d\u044b\u0435 \u043f\u043e\u0441\u0435\u043b\u043a\u0438",labelIcon:W.a,color:"#1a73e8",bgColor:"#e8f0fe"})}),Object(G.jsx)(r.b,{to:"/villages",onClick:function(){n(),a.selectOnlyVillageType(2)},children:Object(G.jsx)(A,{nodeId:"3",labelText:"\u0414\u0430\u0447\u043d\u044b\u0435 \u043f\u043e\u0441\u0435\u043b\u043a\u0438",labelIcon:W.a,color:"#1a73e8",bgColor:"#e8f0fe"})})]}),Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}}),Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}}),Object(G.jsx)(r.b,{to:"/services",onClick:function(){return n()},children:Object(G.jsx)(A,{nodeId:"5",labelText:"\u0423\u0441\u043b\u0443\u0433\u0438",labelIcon:V.a,color:"#1a73e8",bgColor:"#e8f0fe"})}),Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}}),Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}}),Object(G.jsx)(r.b,{to:"/contact",onClick:function(){return n()},children:Object(G.jsx)(A,{nodeId:"7",labelText:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",labelIcon:L.a,color:"#1a73e8",bgColor:"#e8f0fe"})}),Object(G.jsx)($.a,{style:{background:"#eff3f4",height:"0.5px"}})]})},Y=n(20),_=n(11),K=n(21),Q=n(23),U=n(208),Z=n.n(U),ee=(n(221),n(222)),te=n(22).villages.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{keyFields:"\u043f\u043e\u0441\u0435\u043b\u043e\u043a "+e.name})})),ne=new ee.a(te,{keys:["keyFields"],includeScore:!0});function ae(e){var t=e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return""===t?[]:ne.search(t).map((function(e){return Object(a.a)({},e.item)}))}function oe(e){return e.name}function ce(e){var t=e.uname;return Object(G.jsx)(r.b,{to:"/village/".concat(t),children:Object(G.jsx)("span",{children:e.name})})}var ie=function(e){Object(K.a)(n,e);var t=Object(Q.a)(n);function n(){var e;return Object(Y.a)(this,n),(e=t.call(this)).onChange=function(t,n){var a=n.newValue;n.method;e.setState({value:a})},e.onSuggestionsFetchRequested=function(t){var n=t.value;e.setState({suggestions:ae(n)})},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[],value:""})},e.state={value:"",suggestions:[]},e}return Object(_.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a={placeholder:"\u041f\u043e\u0438\u0441\u043a",value:t,onChange:this.onChange};return Object(G.jsx)(Z.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:oe,renderSuggestion:ce,inputProps:a})}}]),n}(s.a.Component),se=n(162),re=(n(163),Object(j.a)((function(e){var t;return{bar:function(e){return{height:"80px",boxShadow:"none",display:"flex",justifyContent:"center",marginTop:"0",background:"#fff"}},menuButton:function(t){return Object(c.a)({width:"50px",height:"50px",display:"block",color:"#78d85b"},e.breakpoints.up("md"),{display:"none"})},search:Object(c.a)({position:"relative",marginLeft:e.spacing(3),width:"auto"},e.breakpoints.up("md"),{marginLeft:e.spacing(4)}),grow:{flexGrow:1},menu:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),phone:function(t){return Object(c.a)({display:"none",color:"#01eb88"},e.breakpoints.up("md"),{display:"flex"})},logo:(t={display:"none",width:"60px",height:"60px",backgroundImage:"url(".concat(k.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",marginRight:e.spacing(1)},Object(c.a)(t,e.breakpoints.up("md"),{display:"block"}),Object(c.a)(t,e.breakpoints.up("lg"),{marginRight:e.spacing(2)}),t),logoDrawer:{width:"60px",height:"60px",backgroundImage:"url(".concat(k.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"},logoText:Object(c.a)({fontFamily:"Roboto,sans-serif",color:"#3c4b5a",display:"none",fontSize:"1.5rem",fontWeight:"700"},e.breakpoints.up("md"),{display:"block"}),icon:{width:"35px","&:hover":{cursor:"pointer"}},menuBtn:function(t){return Object(c.a)({position:"relative",color:"#3c4b5a",transition:"all ease .3s",cursor:"pointer",marginRight:e.spacing(3),"&:before":{transform:"translateX(-50%)",transition:"all ease .3s",width:"20%",height:"4px",position:"absolute",bottom:"-10px",left:"50%",opacity:"0",pointerEvents:"none",content:"''",borderRadius:"6px",background:"linear-gradient(90deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)"},"&:hover:before":{width:"70%",opacity:"1"}},e.breakpoints.up("lg"),{marginRight:e.spacing(4)})}}})));function le(e){var t=e.children,n=e.window,a=Object(f.a)({target:n?n():void 0});return Object(G.jsx)(O.a,{appear:!1,direction:"down",in:!a,children:t})}function be(e){var t=s.a.useContext(w.b),n=s.a.useState(!1),c=Object(o.a)(n,2),j=c[0],g=c[1],f=Object(i.useState)(0),O=Object(o.a)(f,2),k=O[0],y=O[1],C=function(){var e=window.pageYOffset;y(e)};Object(i.useEffect)((function(){return window.addEventListener("scroll",C,{passive:!0}),function(){window.removeEventListener("scroll",C)}}),[]);var I=re({scrollPosition:k});var R=Object(G.jsxs)("div",{className:I.menu,children:[Object(G.jsx)(r.b,{to:"/villages",className:I.menuBtn,onClick:function(e){t.resetFilter()},children:Object(G.jsx)("h4",{children:"\u041f\u043e\u0441\u0435\u043b\u043a\u0438"})}),Object(G.jsx)(r.b,{to:"/services",className:I.menuBtn,children:Object(G.jsx)("h4",{children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(G.jsx)(r.b,{to:"/contact",className:I.menuBtn,children:Object(G.jsx)("h4",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]});return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(x.a,{}),Object(G.jsx)(le,Object(a.a)(Object(a.a)({},e),{},{children:Object(G.jsx)(l.a,{className:I.bar,children:Object(G.jsx)(d.a,{maxWidth:"lg",children:Object(G.jsxs)(b.a,{style:{marginLeft:"0px",paddingLeft:"0px"},children:[Object(G.jsxs)(r.b,{to:"/",style:{display:"flex",alignItems:"center"},children:[Object(G.jsx)("div",{className:I.logo}),Object(G.jsx)("div",{className:I.logoText,children:"\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0435 \u0417\u0435\u043c\u043b\u0438"})]}),Object(G.jsx)(h.a,{onClick:function(){return g(!0)},className:I.menuButton}),Object(G.jsx)("div",{className:I.search,children:Object(G.jsx)(ie,{})}),Object(G.jsx)("div",{className:I.grow}),R,Object(G.jsx)("h4",{className:I.phone,onClick:function(){return window.location.href="tel:89200920625"},children:"+7 920 092-06-25"}),Object(G.jsx)("img",{src:se.a,style:{margin:"0 10px"},className:I.icon,onClick:function(){window.open("https://vk.com/zagorodnyezemli","_blank")}})]})})})})),Object(G.jsx)(m.a,{anchor:"left",open:j,onOpen:function(){return g(!0)},onClose:function(){return g(!1)},children:Object(G.jsxs)(v.a,{style:{position:"relative",padding:0,overflowX:"hidden",minHeight:"100%"},children:[Object(G.jsx)(u.a,{m:2,children:Object(G.jsxs)(p.a,{container:!0,alignItems:"center",style:{minHeight:"80px",width:"290px"},children:[Object(G.jsx)("h3",{style:{textAlign:"left",lineHeight:"110%",padding:"0 0 5px 15px"},children:Object(G.jsx)("strong",{children:"\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0435 \u0417\u0435\u043c\u043b\u0438"})}),Object(G.jsx)(p.a,{item:!0,children:Object(G.jsx)(u.a,{m:2,children:Object(G.jsx)("h5",{className:"light-text",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0439 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"})})})]})}),Object(G.jsx)(u.a,{m:2,children:Object(G.jsx)(M,{hide:function(){return g(!1)}})})]})})]})}}}]);
//# sourceMappingURL=16.f3e36574.chunk.js.map