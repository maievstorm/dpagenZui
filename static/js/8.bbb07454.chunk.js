(this["webpackJsonpdpzui-react"]=this["webpackJsonpdpzui-react"]||[]).push([[8],{1330:function(e,t,a){"use strict";(function(e){var n=a(99),r=a.n(n),c=a(144),i=a(161),o=a(162),s=a(609),l=function(){function t(){Object(i.a)(this,t)}return Object(o.a)(t,[{key:"upload",value:function(t,a){console.log(t),(new FormData).append("file",t);var n=t,i=n.name,o=n.type,l=new FileReader;l.readAsArrayBuffer(n),l.onload=function(){var t=Object(c.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.target.readyState!==FileReader.DONE){t.next=5;break}return c=new Uint8Array(n.target.result),t.next=4,s.a.putObject(a,i,e.from(c),{"Content-Type":o,"X-Amz-Meta-App":"ReactJS"});case 4:return t.abrupt("return",t.sent);case 5:l.onerror=function(){l.abort()};case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]),t}();t.a=new l}).call(this,a(221).Buffer)},1441:function(e,t,a){"use strict";var n=a(58),r=a(6),c=a(2),i=a(0),o=a(4),s=a(32),l=a(48),u=a(8),d=a(10),b=a(5),f=a(24),p=a(26);function m(e){return Object(f.a)("MuiCircularProgress",e)}Object(p.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v,j,O,h,g,y,x,k,S=a(1),w=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,N=Object(l.keyframes)(g||(g=v||(v=Object(n.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),M=Object(l.keyframes)(y||(y=j||(j=Object(n.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),P=Object(b.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["color".concat(Object(u.a)(a.color))]]}})((function(e){var t=e.ownerState,a=e.theme;return Object(c.a)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&Object(l.css)(x||(x=O||(O=Object(n.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),N)})),A=Object(b.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),D=Object(b.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var a=e.ownerState;return[t.circle,t["circle".concat(Object(u.a)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,a=e.theme;return Object(c.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&Object(l.css)(k||(k=h||(h=Object(n.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),M)})),I=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCircularProgress"}),n=a.className,i=a.color,l=void 0===i?"primary":i,b=a.disableShrink,f=void 0!==b&&b,p=a.size,v=void 0===p?40:p,j=a.style,O=a.thickness,h=void 0===O?3.6:O,g=a.value,y=void 0===g?0:g,x=a.variant,k=void 0===x?"indeterminate":x,N=Object(r.a)(a,w),M=Object(c.a)({},a,{color:l,disableShrink:f,size:v,thickness:h,value:y,variant:k}),I=function(e){var t=e.classes,a=e.variant,n=e.color,r=e.disableShrink,c={root:["root",a,"color".concat(Object(u.a)(n))],svg:["svg"],circle:["circle","circle".concat(Object(u.a)(a)),r&&"circleDisableShrink"]};return Object(s.a)(c,m,t)}(M),R={},T={},z={};if("determinate"===k){var B=2*Math.PI*((C-h)/2);R.strokeDasharray=B.toFixed(3),z["aria-valuenow"]=Math.round(y),R.strokeDashoffset="".concat(((100-y)/100*B).toFixed(3),"px"),T.transform="rotate(-90deg)"}return Object(S.jsx)(P,Object(c.a)({className:Object(o.default)(I.root,n),style:Object(c.a)({width:v,height:v},T,j),ownerState:M,ref:t,role:"progressbar"},z,N,{children:Object(S.jsx)(A,{className:I.svg,ownerState:M,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:Object(S.jsx)(D,{className:I.circle,style:R,ownerState:M,cx:C,cy:C,r:(C-h)/2,fill:"none",strokeWidth:h})})}))}));t.a=I},1468:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(0),c=a(1330),i=a(235),o=a(416),s=a(387),l=a(325),u=a(1441),d=a(20),b=a(476),f=a(52),p=a(44),m=a(163),v=a.n(m),j=a(1);t.default=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),m=a[0],O=a[1],h=Object(r.useState)([]),g=Object(n.a)(h,2),y=g[0],x=g[1],k=Object(d.f)(),S=Object(r.useState)(),w=Object(n.a)(S,2),C=w[0],N=w[1],M=Object(r.useState)([]),P=Object(n.a)(M,2),A=P[0],D=P[1],I=Object(r.useState)([]),R=Object(n.a)(I,2),T=R[0],z=(R[1],Object(r.useState)([])),B=Object(n.a)(z,2),F=B[0],V=(B[1],Object(r.useState)(!1)),G=Object(n.a)(V,2),E=G[0],L=G[1];Object(r.useEffect)((function(){var e=f.a.rootapi+"/invoice/usernamentype/"+p.a.getUsername()+"&storage";v.a.get(e).then((function(e){O(e.data.data.map((function(e){return{id:e.item_name,name:e.item_name}})))})).catch((function(e){console.log(e)}))}),[]);var U=function(){k("/ojectstorage")};return console.log(y.length),Object(j.jsxs)(o.a,{children:[A&&A.map((function(e,t){return Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("span",{children:e.fileName}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsxs)("div",{className:"progress-bar progress-bar-info",role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100",style:{width:e.percentage+"%"},children:[e.percentage,"%"]})})]},t)})),Object(j.jsxs)(o.a,{className:"row my-3",children:[Object(j.jsx)("strong",{children:"Ch\u1ecdn th\u01b0 m\u1ee5c : "}),Object(j.jsx)(i.a,{id:"listbucket",name:"listbucket",value:null===m||void 0===m?void 0:m.id,onChange:function(e){var t=e.target.value;x(t)},size:"small",children:null===m||void 0===m?void 0:m.map((function(e){return Object(j.jsx)(b.a,{value:e.name,children:e.name},e.id)}))}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"file",multiple:!0,onChange:function(e){D([]),N(e.target.files)}}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)(l.a,{className:"btn btn-success btn-sm",disabled:!C||0==y.length,onClick:function(){L(!0);for(var e=0;e<C.length;e++)t=C[e],c.a.upload(t,y);var t;setTimeout((function(){L(!1),U()}),2e3)},children:"T\u1ea3i l\xean"})})]}),T.length>0&&Object(j.jsx)("div",{className:"alert alert-secondary",role:"alert",children:Object(j.jsx)("ul",{children:T.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))})}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-header"}),Object(j.jsx)("ul",{className:"list-group list-group-flush",children:F&&F.map((function(e,t){return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)("a",{href:e.url,children:e.name})},t)}))})]}),Object(j.jsx)(o.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"80px"},children:Object(j.jsx)(s.a,{in:E,style:{transitionDelay:E?"800ms":"0ms"},unmountOnExit:!0,children:Object(j.jsx)(u.a,{})})})]})}},438:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},440:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(24),r=a(26);function c(e){return Object(n.a)("MuiMenuItem",e)}var i=Object(r.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);t.a=i},444:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},448:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},476:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(2),i=a(0),o=a(4),s=a(32),l=a(51),u=a(5),d=a(10),b=a(34),f=a(216),p=a(53),m=a(16),v=a(200),j=a(203),O=a(121),h=a(440),g=a(1),y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],x=Object(u.a)(f.a,{shouldForwardProp:function(e){return Object(u.b)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,r=e.ownerState;return Object(c.a)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},Object(n.a)(t,"&.".concat(h.a.selected),Object(n.a)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(h.a.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),Object(n.a)(t,"&.".concat(h.a.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),Object(n.a)(t,"&.".concat(h.a.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),Object(n.a)(t,"&.".concat(h.a.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),Object(n.a)(t,"& + .".concat(v.a.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),Object(n.a)(t,"& + .".concat(v.a.inset),{marginLeft:52}),Object(n.a)(t,"& .".concat(O.a.root),{marginTop:0,marginBottom:0}),Object(n.a)(t,"& .".concat(O.a.inset),{paddingLeft:36}),Object(n.a)(t,"& .".concat(j.a.root),{minWidth:36}),t),!r.dense&&Object(n.a)({},a.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&Object(c.a)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,Object(n.a)({},"& .".concat(j.a.root," svg"),{fontSize:"1.25rem"})))})),k=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiMenuItem"}),n=a.autoFocus,l=void 0!==n&&n,u=a.component,f=void 0===u?"li":u,v=a.dense,j=void 0!==v&&v,O=a.divider,k=void 0!==O&&O,S=a.disableGutters,w=void 0!==S&&S,C=a.focusVisibleClassName,N=a.role,M=void 0===N?"menuitem":N,P=a.tabIndex,A=Object(r.a)(a,y),D=i.useContext(b.a),I={dense:j||D.dense||!1,disableGutters:w},R=i.useRef(null);Object(p.a)((function(){l&&R.current&&R.current.focus()}),[l]);var T,z=Object(c.a)({},a,{dense:I.dense,divider:k,disableGutters:w}),B=function(e){var t=e.disabled,a=e.dense,n=e.divider,r=e.disableGutters,i=e.selected,o=e.classes,l={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",i&&"selected"]},u=Object(s.a)(l,h.b,o);return Object(c.a)({},o,u)}(a),F=Object(m.a)(R,t);return a.disabled||(T=void 0!==P?P:-1),Object(g.jsx)(b.a.Provider,{value:I,children:Object(g.jsx)(x,Object(c.a)({ref:F,role:M,tabIndex:T,component:f,focusVisibleClassName:Object(o.default)(B.focusVisible,C)},A,{ownerState:z,classes:B}))})}));t.a=k},552:function(e,t,a){var n=a(602),r=a(603),c=a(553),i=a(604);e.exports=function(e,t){return n(e)||r(e,t)||c(e,t)||i()}},553:function(e,t,a){var n=a(554);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},554:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},555:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},602:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},603:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}},604:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},609:function(e,t,a){"use strict";var n=a(748),r=new n.Client({endPoint:"apilakedpa.apps.xplat.fis.com.vn",useSSL:!0,port:443,accessKey:"naQrl3yAjoue8o22",secretKey:"A0d6ZmTAbcVrhgTorNzCFBddtAWUjruP"});t.a=r},754:function(e,t){},755:function(e,t){},761:function(e,t){},762:function(e,t){},778:function(e,t){},779:function(e,t){},803:function(e,t){},805:function(e,t){},806:function(e,t){},809:function(e,t){},810:function(e,t){},815:function(e,t){},816:function(e,t){},824:function(e,t){},830:function(e,t){},833:function(e,t){}}]);
//# sourceMappingURL=8.bbb07454.chunk.js.map