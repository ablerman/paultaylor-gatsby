(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{165:function(t,e,n){"use strict";n.r(e);n(42);var o=n(8),r=n.n(o),i=n(54),a=n.n(i),s=n(0),c=n.n(s),l=n(167),p=n(193),u=n(168),f=n(169),h=n(191),d=n(192),m=n(197),g=[{path:"/portfolio/events/sonic/sonic01.jpg",alt:"sonic01"},{path:"/portfolio/events/sonic/sonic02.jpg",alt:"sonic02"},{path:"/portfolio/events/sonic/sonic03.jpg",alt:"sonic03"},{path:"/portfolio/events/sonic/sonic04.jpg",alt:"sonic04"},{path:"/portfolio/events/sonic/sonic05.jpg",alt:"sonic05"},{path:"/portfolio/events/sonic/sonic06.jpg",alt:"sonic06"},{path:"/portfolio/events/sonic/sonic07.jpg",alt:"sonic07"},{path:"/portfolio/events/sonic/sonic08.jpg",alt:"sonic08"},{path:"/portfolio/events/sonic/sonic09.jpg",alt:"sonic09"},{path:"/portfolio/events/sonic/sonic10.jpg",alt:"sonic10"},{path:"/portfolio/events/sonic/sonic11.jpg",alt:"sonic11"},{path:"/portfolio/events/sonic/sonic12.jpg",alt:"sonic12"},{path:"/portfolio/events/sonic/sonic13.jpg",alt:"sonic13"},{path:"/portfolio/events/sonic/sonic14.jpg",alt:"sonic14"},{path:"/portfolio/events/sonic/sonic15-2.jpg",alt:"sonic15-2"},{path:"/portfolio/events/sonic/sonic15.jpg",alt:"sonic15"},{path:"/portfolio/events/sonic/sonic16.jpg",alt:"sonic16"},{path:"/portfolio/events/sonic/sonic17.jpg",alt:"sonic17"},{path:"/portfolio/events/sonic/sonic18.jpg",alt:"sonic18"},{path:"/portfolio/events/sonic/sonic19.jpg",alt:"sonic19"},{path:"/portfolio/events/sonic/sonic20.jpg",alt:"sonic20"},{path:"/portfolio/events/sonic/sonic21.jpg",alt:"sonic21"},{path:"/portfolio/events/sonic/sonic22.jpg",alt:"sonic22"},{path:"/portfolio/events/sonic/sonic23.jpg",alt:"sonic23"},{path:"/portfolio/events/sonic/sonic24.jpg",alt:"sonic24"},{path:"/portfolio/events/sonic/sonic25.jpg",alt:"sonic25"},{path:"/portfolio/events/sonic/sonic26.jpg",alt:"sonic26"},{path:"/portfolio/events/sonic/sonic27.jpg",alt:"sonic27"},{path:"/portfolio/events/sonic/sonic28.jpg",alt:"sonic28"},{path:"/portfolio/events/sonic/sonic29.jpg",alt:"sonic29"},{path:"/portfolio/events/sonic/sonic30.jpg",alt:"sonic30"},{path:"/portfolio/events/sonic/sonic31.jpg",alt:"sonic31"},{path:"/portfolio/events/sonic/sonic32.jpg",alt:"sonic32"},{path:"/portfolio/events/sonic/sonic33.jpg",alt:"sonic33"},{path:"/portfolio/events/sonic/sonic34.jpg",alt:"sonic34"},{path:"/portfolio/events/sonic/sonic35.jpg",alt:"sonic35"},{path:"/portfolio/events/sonic/sonic36.jpg",alt:"sonic36"},{path:"/portfolio/events/sonic/sonic37.jpg",alt:"sonic37"},{path:"/portfolio/events/sonic/sonic38.jpg",alt:"sonic38"},{path:"/portfolio/events/sonic/sonic39.jpg",alt:"sonic39"},{path:"/portfolio/events/sonic/sonic40.jpg",alt:"sonic40"},{path:"/portfolio/events/sonic/sonic41.jpg",alt:"sonic41"},{path:"/portfolio/events/sonic/sonic42.jpg",alt:"sonic42"},{path:"/portfolio/events/sonic/sonic43.jpg",alt:"sonic43"},{path:"/portfolio/events/sonic/sonic44.jpg",alt:"sonic44"},{path:"/portfolio/events/sonic/sonic45.jpg",alt:"sonic45"},{path:"/portfolio/events/sonic/sonic46.jpg",alt:"sonic46"}],v=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).closeCarousel=function(){var t=Object(f.h)(null,["props","location","pathname"],a()(a()(e)));Object(u.navigate)(t)},e.renderContent=function(){var t=Object(p.parse)(e.props.location.search);return void 0!==t.image?c.a.createElement(m.a,{photos:g,currentPhoto:t.image,onClose:e.closeCarousel,location:e.props.location}):c.a.createElement(d.a,{title:"Sonic",photos:g})},e}return r()(e,t),e.prototype.render=function(){return c.a.createElement(h.a,{location:this.props.location},this.renderContent())},e}(c.a.Component);e.default=Object(l.withStyles)(function(t){var e;return{root:(e={},e[t.breakpoints.up("md")]={marginLeft:"255px"},e)}})(v)},170:function(t,e,n){var o=n(39)("meta"),r=n(11),i=n(28),a=n(27).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(18)(function(){return c(Object.preventExtensions({}))}),p=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},u=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!c(t))return"F";if(!e)return"E";p(t)}return t[o].i},getWeak:function(t,e){if(!i(t,o)){if(!c(t))return!0;if(!e)return!1;p(t)}return t[o].w},onFreeze:function(t){return l&&u.NEED&&c(t)&&!i(t,o)&&p(t),t}}},171:function(t,e,n){var o=n(11);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},172:function(t,e,n){"use strict";var o=n(216),r=n.n(o),i=function(){function t(){this.width=0,this.height=0,this.imageData=null}var e=t.prototype;return e.getDataFromEl=function(t){this.width=t.width,this.height=t.height;var e=document.createElement("canvas"),n=e.getContext("2d");document.body.appendChild(e),e.width=this.width,e.height=this.height,n.drawImage(t,0,0),this.imageData=n.getImageData(0,0,this.width,this.height);var o=this.buildPixels();return e.parentNode.removeChild(e),o},e.buildPixels=function(){for(var t=[],e=0;e<this.getPixelCount();e++){var n=this.imageData.data[4*e+0],o=this.imageData.data[4*e+1],r=this.imageData.data[4*e+2];this.imageData.data[4*e+3]<15||(n>250&&o>250&&r>250||t.push([n,o,r]))}return t},e.getPixelCount=function(){return this.width*this.height},t}();i.getPaletteFromIMG=function(t){var e=(new i).getDataFromEl(t);return r()(e,8).palette()},i.RGBtoHSL=function(t,e,n){var o=null,r=null;t/=255,e/=255,n/=255;var i,a=Math.max(t,e,n),s=Math.min(t,e,n),c=a-s;if(0===c)i=0;else switch(a){case t:r=0,(o=(e-n)/c)<0&&(r=6),i=o+r;break;case e:i=(o=(n-t)/c)+(r=2);break;case n:i=(o=(t-e)/c)+(r=4)}return[i*=60,(a-s)/(1-Math.abs(a+s-1)),(a+s)/2]};var a=i;e.a=a},181:function(t,e,n){"use strict";(function(t,o){n.d(e,"a",function(){return c});n(89),n(56),n(88),n(183);var r=n(202),i=n(167),a=Object(i.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}}});function s(){return{theme:a,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function c(){return t.browser?(o.__INIT_MATERIAL_UI__||(o.__INIT_MATERIAL_UI__=s()),o.__INIT_MATERIAL_UI__):s()}}).call(this,n(182),n(200))},182:function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,l=[],p=!1,u=-1;function f(){p&&c&&(p=!1,c.length?l=c.concat(l):u=-1,l.length&&h())}function h(){if(!p){var t=s(f);p=!0;for(var e=l.length;e;){for(c=l,l=[];++u<e;)c&&c[u].run();u=-1,e=l.length}c=null,p=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||p||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},183:function(t,e,n){"use strict";var o=n(184),r=n(171);t.exports=n(185)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(r(this,"Map"),0===t?0:t,e)}},o,!0)},184:function(t,e,n){"use strict";var o=n(27).f,r=n(58),i=n(80),a=n(19),s=n(78),c=n(79),l=n(57),p=n(87),u=n(85),f=n(17),h=n(170).fastKey,d=n(171),m=f?"_s":"size",g=function(t,e){var n,o=h(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var p=t(function(t,o){s(t,p,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[m]=0,null!=o&&c(o,n,t[l],t)});return i(p.prototype,{clear:function(){for(var t=d(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=d(this,e),o=g(n,t);if(o){var r=o.n,i=o.p;delete n._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==o&&(n._f=r),n._l==o&&(n._l=i),n[m]--}return!!o},forEach:function(t){d(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(d(this,e),t)}}),f&&o(p.prototype,"size",{get:function(){return d(this,e)[m]}}),p},def:function(t,e,n){var o,r,i=g(t,e);return i?i.v=n:(t._l=i={i:r=h(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[m]++,"F"!==r&&(t._i[r]=i)),t},getEntry:g,setStrong:function(t,e,n){l(t,e,function(t,n){this._t=d(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?p(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,p(1))},n?"entries":"values",!n,!0),u(e)}}},185:function(t,e,n){"use strict";var o=n(5),r=n(6),i=n(20),a=n(80),s=n(170),c=n(79),l=n(78),p=n(11),u=n(18),f=n(86),h=n(41),d=n(186);t.exports=function(t,e,n,m,g,v){var y=o[t],b=y,w=g?"set":"add",j=b&&b.prototype,x={},E=function(t){var e=j[t];i(j,t,"delete"==t?function(t){return!(v&&!p(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!p(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!p(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof b&&(v||j.forEach&&!u(function(){(new b).entries().next()}))){var k=new b,C=k[w](v?{}:-0,1)!=k,_=u(function(){k.has(1)}),O=f(function(t){new b(t)}),T=!v&&u(function(){for(var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)});O||((b=e(function(e,n){l(e,b,t);var o=d(new y,e,b);return null!=n&&c(n,g,o[w],o),o})).prototype=j,j.constructor=b),(_||T)&&(E("delete"),E("has"),g&&E("get")),(T||C)&&E(w),v&&j.clear&&delete j.clear}else b=m.getConstructor(e,t,g,w),a(b.prototype,n),s.NEED=!0;return h(b,t),x[t]=b,r(r.G+r.W+r.F*(b!=y),x),v||m.setStrong(b,t,g),b}},186:function(t,e,n){var o=n(11),r=n(187).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},187:function(t,e,n){var o=n(11),r=n(12),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(19)(Function.call,n(188).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},188:function(t,e,n){var o=n(84),r=n(55),i=n(40),a=n(83),s=n(28),c=n(82),l=Object.getOwnPropertyDescriptor;e.f=n(17)?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},189:function(t,e,n){"use strict";var o=n(38);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}});var r=o(n(190))},190:function(t,e,n){"use strict";var o=n(38);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(176)),i=o(n(177)),a=o(n(178)),s=o(n(179)),c=o(n(180)),l=o(n(0)),p=(o(n(4)),n(167)),u=(o(n(201)),function(t){function e(){return(0,r.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,c.default)(e,t),(0,i.default)(e,[{key:"render",value:function(){return this.props.children}}]),e}(l.default.Component));u.propTypes={},u.propTypes={},u.defaultProps={children:null};var f=(0,p.withStyles)(function(t){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},body:{margin:0,backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}}}}},{name:"MuiCssBaseline"})(u);e.default=f},191:function(t,e,n){"use strict";var o=n(8),r=n.n(o),i=n(0),a=n.n(i),s=n(4),c=n.n(s),l=n(167),p=n(189),u=n.n(p),f=n(181);var h=function(t){var e=function(e){function n(t){var n;return(n=e.call(this,t)||this).muiPageContext=null,n.muiPageContext=t.muiPageContext||Object(f.a)(),n}r()(n,e);var o=n.prototype;return o.componentDidMount=function(){var t=document.querySelector("#server-side-jss");t&&t.parentNode&&t.parentNode.removeChild(t)},o.render=function(){return a.a.createElement(l.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},a.a.createElement(u.a,null),a.a.createElement(t,this.props))},n}(a.a.Component);return e.propTypes={muiPageContext:c.a.object},e},d=n(169),m=n(168),g=n(203),v=n.n(g),y=n(204),b=n.n(y),w=n(208),j=n.n(w),x=n(209),E=n(199),k=n.n(E),C=n(205).a,_=n(206).a,O=n(207).a,T=n(210),P=function(t){function e(e){var n;return(n=t.call(this,e)||this).onOpen=function(){n.setState({drawerOpen:!0})},n.onClose=function(){n.setState({drawerOpen:!1})},n.state={drawerOpen:!1},n}return r()(e,t),e.prototype.render=function(){var t=this,e={fill:"black"};return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{open:this.state.drawerOpen,onClose:this.onClose},a.a.createElement("div",{className:this.props.classes.drawer},a.a.createElement("a",{href:Object(m.withPrefix)("/"),style:{textDecoration:"none"}},a.a.createElement("h1",{style:{color:"black",textAlign:"center",marginBottom:0}},"Paul Taylor")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement(v.a,{component:T.a,to:"https://www.instagram.com/thisispaultaylor"},a.a.createElement(x.a,{style:e})),a.a.createElement(v.a,{component:T.a,to:"https://thisispaultaylor.instagram.com"},a.a.createElement(x.b,{style:e})),a.a.createElement(v.a,{component:T.a,to:"mailto://hello@thisispayltaylor.com"},a.a.createElement(j.a,{style:e})))),a.a.createElement(C,{onMenuClick:function(){return t.onClose()},location:this.props.location})),a.a.createElement("div",null,a.a.createElement(O,{onOpen:this.onOpen},a.a.createElement(v.a,{className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},a.a.createElement(b.a,null),a.a.createElement(k.a,{variant:"title",color:"inherit"},"PaulTaylor"))),a.a.createElement("div",{className:this.props.classes.root},this.props.children)))},e}(a.a.Component);P.defaultProps={},P.propTypes={location:c.a.object,children:c.a.any};var S=Object(d.a)(h,Object(l.withStyles)(function(t){var e;return{root:(e={},e[t.breakpoints.up("md")]={position:"relative",left:"255px",width:"calc(100vw - 255px)",paddingRight:"30px",paddingLeft:"40px"},e),drawer:{paddingTop:"20px"}}}))(P);e.a=S},192:function(t,e,n){"use strict";n(59);var o=n(8),r=n.n(o),i=n(0),a=n.n(i),s=n(4),c=n.n(s),l=n(167),p=function(t){return a.a.createElement("div",{className:t.classes.masonryContainer},t.children)};p.defaultProps={},p.propTypes={};var u=Object(l.withStyles)(function(t){var e;return{masonryContainer:(e={display:"grid",columnGap:"10px",rowGap:"10px",gridTemplateColumns:"repeat(1, 1fr)",gridAutoRows:"auto"},e[t.breakpoints.up("md")]={gridTemplateColumns:"repeat(12, 1fr)"},e)}})(p),f=function(t){var e={gridRowEnd:t.rowSpan,gridColumnEnd:t.colSpan};return a.a.createElement("div",{className:t.classes.panel,style:e},a.a.createElement("div",{className:t.classes.content},t.children))};f.defaultProps={rowSpan:"auto",colSpan:"auto"},f.propTypes={rowSpan:c.a.string,colSpan:c.a.string};var h=Object(l.withStyles)(function(t){var e;return{panel:(e={breakInside:"avoid",fontSize:0},e[t.breakpoints.up("md")]={gridColumnStart:"auto",gridRowStart:"auto"},e),content:{overflow:"hidden",width:"100%",height:"100%"}}})(f),d=(n(81),n(214)),m=n.n(d),g=(n(212),n(215)),v=n.n(g),y=n(168),b=n(169),w=n(172),j=function(t){function e(e){var n;return(n=t.call(this,e)||this).onImageLoaded=function(){var t=v()(m.a.mark(function t(e){var o,r,i,a,s;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.props.label){t.next=2;break}return t.abrupt("return");case 2:o=w.a.getPaletteFromIMG(e.target),r=o[0],(i=w.a.RGBtoHSL(r[0],r[1],r[2]))[1]=100*i[1],i[2]=(100*i[2]+50)%100,a="rgb("+r[0]+", "+r[1]+", "+r[2]+")",s="hsl("+i[0]+", "+i[1]+"%, "+i[2]+"%)",n.setState({backgroundColor:a,color:s,opacity:.9});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.renderPhoto=function(){return a.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},a.a.createElement("img",{src:Object(y.withPrefix)(n.props.path),alt:n.props.alt,className:n.props.classes.img,onLoad:function(t){return n.onImageLoaded(t)}}),a.a.createElement("div",{className:n.props.classes.label,style:{opacity:n.state.opacity,backgroundColor:n.state.backgroundColor}},a.a.createElement("span",{className:n.props.classes.labelSpan,style:{color:n.state.color}},n.props.label)))},n.renderLink=function(t){return a.a.createElement("a",{href:Object(y.withPrefix)(n.props.to),alt:n.props.alt},t)},n.renderCarouselLink=function(t){var e=n.props.path.split("/").pop().split(".").shift();if("undefined"!=typeof window){var o=document.location.pathname+"?image="+e;return a.a.createElement("a",{href:o},t)}return null},n.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},n}return r()(e,t),e.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},e}(a.a.Component);j.defaultProps={label:null},j.propTypes={label:c.a.string};var x=Object(b.a)(Object(l.withStyles)(function(t){var e;return{label:(e={position:"absolute",bottom:"0px",width:"100%",fontSize:"1.7vw",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},e[t.breakpoints.down("sm")]={fontSize:"5vw"},e),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",height:"100%",fontSize:"1px",objectFit:"cover"}}}))(j),E=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).ref=a.a.createRef(),e.goToTop=function(){e.ref.current.scrollTop=0},e}return r()(e,t),e.prototype.render=function(){var t=this.props.classes;return a.a.createElement("div",{className:t.photoPage,ref:this.ref},a.a.createElement(u,null,this.props.photos.map(function(t){return a.a.createElement(h,{key:t.alt,colSpan:t.colSpan?"span "+t.colSpan:"span 6",rowSpan:t.rowSpan?"span "+t.rowSpan:"auto"},a.a.createElement(x,t))})),a.a.createElement("div",{className:t.backToTopBtn,onClick:this.goToTop},a.a.createElement("h2",{style:{display:"block"}},"back to top")))},e}(a.a.Component);E.defaultProps={title:""},E.propTypes={photos:c.a.array,title:c.a.string};e.a=Object(l.withStyles)(function(t){return{photoPage:{paddingTop:"20px",height:"100vh",overflowY:"auto",backgroundColor:"white"},backToTopBtn:{cursor:"pointer",width:"100%",padding:"20px 0",textAlign:"center","&:hover":{backgroundColor:"darkgray"}}}})(E)},193:function(t,e,n){"use strict";const o=n(194),r=n(195);function i(t,e){return e.encode?e.strict?o(t):encodeURIComponent(t):t}function a(t,e){return e.decode?r(t):t}function s(t){const e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function c(t,e){const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,o)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===o[t]&&(o[t]={}),o[t][e[1]]=n):o[t]=n};case"bracket":return(t,n,o)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],n):o[t]=[n]:o[t]=n};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,arrayFormat:"none"},e)),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;for(const r of t.split("&")){let[t,i]=r.replace(/\+/g," ").split("=");i=void 0===i?null:a(i,e),n(a(t,e),i,o)}return Object.keys(o).sort().reduce((t,e)=>{const n=o[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(n):t[e]=n,t},Object.create(null))}e.extract=s,e.parse=c,e.stringify=((t,e)=>{!1===(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=(()=>{}));const n=function(t){switch(t.arrayFormat){case"index":return(e,n,o)=>null===n?[i(e,t),"[",o,"]"].join(""):[i(e,t),"[",i(o,t),"]=",i(n,t)].join("");case"bracket":return(e,n)=>null===n?[i(e,t),"[]"].join(""):[i(e,t),"[]=",i(n,t)].join("");default:return(e,n)=>null===n?i(e,t):[i(e,t),"=",i(n,t)].join("")}}(e);return t?Object.keys(t).sort(e.sort).map(o=>{const r=t[o];if(void 0===r)return"";if(null===r)return i(o,e);if(Array.isArray(r)){const t=[];for(const e of r.slice())void 0!==e&&t.push(n(o,e,t.length));return t.join("&")}return i(o,e)+"="+i(r,e)}).filter(t=>t.length>0).join("&"):""}),e.parseUrl=((t,e)=>({url:t.split("?")[0]||"",query:c(s(t),e)}))},194:function(t,e,n){"use strict";t.exports=(t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},195:function(t,e,n){"use strict";var o=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],i(n),i(o))}function a(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(o),n=1;n<e.length;n++)e=(t=i(e,n).join("")).match(o);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var o=a(n[0]);o!==n[0]&&(e[n[0]]=o)}n=r.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),s=0;s<i.length;s++){var c=i[s];t=t.replace(new RegExp(c,"g"),e[c])}return t}(t)}}},196:function(t,e,n){"use strict";var o=n(38);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(0)),i=(0,o(n(211)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})),"Dashboard");e.default=i},197:function(t,e,n){"use strict";n(213),n(81),n(90);var o=n(8),r=n.n(o),i=n(0),a=n.n(i),s=n(4),c=n.n(s),l=n(167),p=n(168),u=n(169),f=n(174),h=n.n(f),d=n(196),m=n.n(d),g=n(172),v="Escape",y="ArrowLeft",b="ArrowRight",w="ArrowDown",j="ArrowUp",x=function(t){function e(e){var n;return(n=t.call(this,e)||this).onKeyUp=function(t){"undefined"!=typeof window&&(t.key===v&&n.props.onClose(),t.key===b&&(document.location=n.getNext()),t.key===y&&(document.location=n.getPrev()),t.key===w&&(document.location=n.getNext()),t.key===j&&(document.location=n.getPrev()))},n.onImageLoaded=function(t){var e=g.a.getPaletteFromIMG(t.target)[0],o=g.a.RGBtoHSL(e[0],e[1],e[2]);o[1]=100*o[1],o[2]=(100*o[2]+50)%100;var r="rgb("+e[0]+", "+e[1]+", "+e[2]+")",i="hsl("+o[0]+", "+o[1]+"%, "+o[2]+"%)";n.setState({shadowColor:i,arrowColor:r})},n.getIdx=function(){return Object(u.d)(function(t){return t.path.indexOf(n.props.currentPhoto)>-1},n.props.photos)},n.getOffset=function(t){var e=n.props.photos?n.props.photos.length:0;return(n.getIdx()+e+t)%e},n.getMasonryUrl=function(){return n.props.location.pathname},n.getPrev=function(){var t=n.props.photos[n.getOffset(-1)].path.split("/").pop();return n.props.location.pathname+"?image="+t},n.getNext=function(){var t=n.props.photos[n.getOffset(1)].path.split("/").pop();return n.props.location.pathname+"?image="+t},n.state={arrowColor:"rgba(0, 0, 0, 0)",shadowColor:"rgba(0,0,0,0)"},n}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){document.addEventListener("keyup",this.onKeyUp,!1)},n.componentWillUnmount=function(){document.removeEventListener("keyup",this.onKeyUp,!1)},n.render=function(){var t=this,e=Object(u.c)(function(e){return-1!==e.path.indexOf(t.props.currentPhoto)})(this.props.photos);return a.a.createElement("div",null,a.a.createElement("div",{className:this.props.classes.content},a.a.createElement("img",{src:Object(p.withPrefix)(e.path),alt:this.props.currentPhoto,onLoad:this.onImageLoaded,style:{width:"100%"}}),a.a.createElement("a",{href:this.getPrev(),className:h()(this.props.classes.link,this.props.classes.leftLink),style:{left:0}}),a.a.createElement("a",{href:this.getNext(),className:h()(this.props.classes.link,this.props.classes.rightLink),style:{right:0}}),a.a.createElement("a",{href:this.getMasonryUrl(),className:this.props.classes.masonryLink},a.a.createElement(m.a,{style:{width:"25px",height:"25px",position:"absolute",transform:"scale(1.5)",filter:"blur(5px)"},nativeColor:this.state.arrowColor}),a.a.createElement(m.a,{style:{width:"25px",height:"25px",position:"absolute"},nativeColor:this.state.shadowColor}))),a.a.createElement("span",{className:this.props.classes.prevnext},a.a.createElement("a",{className:this.props.classes.prevnext,href:this.getPrev()},"prev")," // ",a.a.createElement("a",{className:this.props.classes.prevnext,style:{paddingLeft:0},href:this.getNext()},"next")))},e}(a.a.Component);x.defaultProps={},x.propTypes={currentPhoto:c.a.string,photos:c.a.array,onClose:c.a.func,location:c.a.object};var E=Object(l.withStyles)(function(t){return{content:{position:"relative",width:"100%",overflow:"hidden",padding:"20px 20px 20px 30px"},link:{position:"absolute",width:"150px",height:"100%",top:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},leftLink:{cursor:"w-resize"},rightLink:{cursor:"e-resize"},prevnext:{color:"black",display:"inline-block",paddingLeft:"15px"},masonryLink:{position:"absolute",width:"50px",height:"50px",top:"15px",left:"25px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer"}}})(x);e.a=E}}]);
//# sourceMappingURL=component---src-pages-events-sonic-js-5c889474834926ece314.js.map