(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(t,e,n){"use strict";n.r(e);n(42);var r=n(8),o=n.n(r),a=n(54),i=n.n(a),s=n(0),c=n.n(s),l=n(167),u=n(193),p=n(168),f=n(169),h=n(191),d=n(192).a,m=n(197),g=n(265),v=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).closeCarousel=function(){var t=Object(f.h)(null,["props","location","pathname"],i()(i()(e)));Object(p.navigate)(t)},e.renderContent=function(){var t=Object(u.parse)(e.props.location.search);return void 0!==t.image?c.a.createElement(m.a,{photos:g.a,currentPhoto:t.image,onClose:e.closeCarousel,location:e.props.location}):c.a.createElement(d,{title:"Amazon Alexa // Smartlife Roadshow",photos:g.a})},e}return o()(e,t),e.prototype.render=function(){return c.a.createElement(h.a,{location:this.props.location},this.renderContent())},e}(c.a.Component);e.default=Object(l.withStyles)(function(t){var e;return{root:(e={},e[t.breakpoints.up("md")]={marginLeft:"255px"},e)}})(v)},170:function(t,e,n){var r=n(39)("meta"),o=n(11),a=n(28),i=n(27).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(18)(function(){return c(Object.preventExtensions({}))}),u=function(t){i(t,r,{value:{i:"O"+ ++s,w:{}}})},p=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},getWeak:function(t,e){if(!a(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},onFreeze:function(t){return l&&p.NEED&&c(t)&&!a(t,r)&&u(t),t}}},171:function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},172:function(t,e,n){"use strict";var r=n(216),o=n.n(r),a=function(){function t(){this.width=0,this.height=0,this.imageData=null}var e=t.prototype;return e.getDataFromEl=function(t){this.width=t.width,this.height=t.height;var e=document.createElement("canvas"),n=e.getContext("2d");document.body.appendChild(e),e.width=this.width,e.height=this.height,n.drawImage(t,0,0),this.imageData=n.getImageData(0,0,this.width,this.height);var r=this.buildPixels();return e.parentNode.removeChild(e),r},e.buildPixels=function(){for(var t=[],e=0;e<this.getPixelCount();e++){var n=this.imageData.data[4*e+0],r=this.imageData.data[4*e+1],o=this.imageData.data[4*e+2];this.imageData.data[4*e+3]<15||(n>250&&r>250&&o>250||t.push([n,r,o]))}return t},e.getPixelCount=function(){return this.width*this.height},t}();a.getPaletteFromIMG=function(t){var e=(new a).getDataFromEl(t);return o()(e,8).palette()},a.RGBtoHSL=function(t,e,n){var r=null,o=null;t/=255,e/=255,n/=255;var a,i=Math.max(t,e,n),s=Math.min(t,e,n),c=i-s;if(0===c)a=0;else switch(i){case t:o=0,(r=(e-n)/c)<0&&(o=6),a=r+o;break;case e:a=(r=(n-t)/c)+(o=2);break;case n:a=(r=(t-e)/c)+(o=4)}return[a*=60,(i-s)/(1-Math.abs(i+s-1)),(i+s)/2]};var i=a;e.a=i},181:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",function(){return c});n(89),n(56),n(88),n(183);var o=n(202),a=n(167),i=Object(a.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}}});function s(){return{theme:i,sheetsManager:new Map,sheetsRegistry:new o.SheetsRegistry,generateClassName:Object(a.createGenerateClassName)()}}function c(){return t.browser?(r.__INIT_MATERIAL_UI__||(r.__INIT_MATERIAL_UI__=s()),r.__INIT_MATERIAL_UI__):s()}}).call(this,n(182),n(200))},182:function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var c,l=[],u=!1,p=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):p=-1,l.length&&h())}function h(){if(!u){var t=s(f);u=!0;for(var e=l.length;e;){for(c=l,l=[];++p<e;)c&&c[p].run();p=-1,e=l.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||u||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},183:function(t,e,n){"use strict";var r=n(184),o=n(171);t.exports=n(185)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},184:function(t,e,n){"use strict";var r=n(27).f,o=n(58),a=n(80),i=n(19),s=n(78),c=n(79),l=n(57),u=n(87),p=n(85),f=n(17),h=n(170).fastKey,d=n(171),m=f?"_s":"size",g=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var u=t(function(t,r){s(t,u,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[m]=0,null!=r&&c(r,n,t[l],t)});return a(u.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=d(this,e),r=g(n,t);if(r){var o=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=o),o&&(o.p=a),n._f==r&&(n._f=o),n._l==r&&(n._l=a),n[m]--}return!!r},forEach:function(t){d(this,e);for(var n,r=i(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(d(this,e),t)}}),f&&r(u.prototype,"size",{get:function(){return d(this,e)[m]}}),u},def:function(t,e,n){var r,o,a=g(t,e);return a?a.v=n:(t._l=a={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=a),r&&(r.n=a),t[m]++,"F"!==o&&(t._i[o]=a)),t},getEntry:g,setStrong:function(t,e,n){l(t,e,function(t,n){this._t=d(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))},n?"entries":"values",!n,!0),p(e)}}},185:function(t,e,n){"use strict";var r=n(5),o=n(6),a=n(20),i=n(80),s=n(170),c=n(79),l=n(78),u=n(11),p=n(18),f=n(86),h=n(41),d=n(186);t.exports=function(t,e,n,m,g,v){var y=r[t],b=y,w=g?"set":"add",x=b&&b.prototype,E={},k=function(t){var e=x[t];a(x,t,"delete"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof b&&(v||x.forEach&&!p(function(){(new b).entries().next()}))){var C=new b,_=C[w](v?{}:-0,1)!=C,j=p(function(){C.has(1)}),O=f(function(t){new b(t)}),T=!v&&p(function(){for(var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)});O||((b=e(function(e,n){l(e,b,t);var r=d(new y,e,b);return null!=n&&c(n,g,r[w],r),r})).prototype=x,x.constructor=b),(j||T)&&(k("delete"),k("has"),g&&k("get")),(T||_)&&k(w),v&&x.clear&&delete x.clear}else b=m.getConstructor(e,t,g,w),i(b.prototype,n),s.NEED=!0;return h(b,t),E[t]=b,o(o.G+o.W+o.F*(b!=y),E),v||m.setStrong(b,t,g),b}},186:function(t,e,n){var r=n(11),o=n(187).set;t.exports=function(t,e,n){var a,i=e.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(t,a),t}},187:function(t,e,n){var r=n(11),o=n(12),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(19)(Function.call,n(188).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},188:function(t,e,n){var r=n(84),o=n(55),a=n(40),i=n(83),s=n(28),c=n(82),l=Object.getOwnPropertyDescriptor;e.f=n(17)?l:function(t,e){if(t=a(t),e=i(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},189:function(t,e,n){"use strict";var r=n(38);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(190))},190:function(t,e,n){"use strict";var r=n(38);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(176)),a=r(n(177)),i=r(n(178)),s=r(n(179)),c=r(n(180)),l=r(n(0)),u=(r(n(4)),n(167)),p=(r(n(201)),function(t){function e(){return(0,o.default)(this,e),(0,i.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,c.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return this.props.children}}]),e}(l.default.Component));p.propTypes={},p.propTypes={},p.defaultProps={children:null};var f=(0,u.withStyles)(function(t){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},body:{margin:0,backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}}}}},{name:"MuiCssBaseline"})(p);e.default=f},191:function(t,e,n){"use strict";var r=n(8),o=n.n(r),a=n(0),i=n.n(a),s=n(4),c=n.n(s),l=n(167),u=n(189),p=n.n(u),f=n(181);var h=function(t){var e=function(e){function n(t){var n;return(n=e.call(this,t)||this).muiPageContext=null,n.muiPageContext=t.muiPageContext||Object(f.a)(),n}o()(n,e);var r=n.prototype;return r.componentDidMount=function(){var t=document.querySelector("#server-side-jss");t&&t.parentNode&&t.parentNode.removeChild(t)},r.render=function(){return i.a.createElement(l.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(p.a,null),i.a.createElement(t,this.props))},n}(i.a.Component);return e.propTypes={muiPageContext:c.a.object},e},d=n(169),m=n(168),g=n(203),v=n.n(g),y=n(204),b=n.n(y),w=n(208),x=n.n(w),E=n(209),k=n(199),C=n.n(k),_=n(205).a,j=n(206).a,O=n(207).a,T=n(210),P=function(t){function e(e){var n;return(n=t.call(this,e)||this).onOpen=function(){n.setState({drawerOpen:!0})},n.onClose=function(){n.setState({drawerOpen:!1})},n.state={drawerOpen:!1},n}return o()(e,t),e.prototype.render=function(){var t=this,e={fill:"black"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{open:this.state.drawerOpen,onClose:this.onClose},i.a.createElement("div",{className:this.props.classes.drawer},i.a.createElement("a",{href:Object(m.withPrefix)("/"),style:{textDecoration:"none"}},i.a.createElement("h1",{style:{color:"black",textAlign:"center",marginBottom:0}},"Paul Taylor")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(v.a,{component:T.a,to:"https://www.instagram.com/thisispaultaylor"},i.a.createElement(E.a,{style:e})),i.a.createElement(v.a,{component:T.a,to:"https://thisispaultaylor.instagram.com"},i.a.createElement(E.b,{style:e})),i.a.createElement(v.a,{component:T.a,to:"mailto://hello@thisispayltaylor.com"},i.a.createElement(x.a,{style:e})))),i.a.createElement(_,{onMenuClick:function(){return t.onClose()},location:this.props.location})),i.a.createElement("div",null,i.a.createElement(O,{onOpen:this.onOpen},i.a.createElement(v.a,{className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(b.a,null),i.a.createElement(C.a,{variant:"title",color:"inherit"},"PaulTaylor"))),i.a.createElement("div",{className:this.props.classes.root},this.props.children)))},e}(i.a.Component);P.defaultProps={},P.propTypes={location:c.a.object,children:c.a.any};var S=Object(d.a)(h,Object(l.withStyles)(function(t){var e;return{root:(e={},e[t.breakpoints.up("md")]={position:"relative",left:"255px",width:"calc(100vw - 255px)",paddingRight:"30px",paddingLeft:"40px"},e),drawer:{paddingTop:"20px"}}}))(P);e.a=S},192:function(t,e,n){"use strict";n(59);var r=n(8),o=n.n(r),a=n(0),i=n.n(a),s=n(4),c=n.n(s),l=n(167),u=function(t){return i.a.createElement("div",{className:t.classes.masonryContainer},t.children)};u.defaultProps={},u.propTypes={};var p=Object(l.withStyles)(function(t){var e;return{masonryContainer:(e={display:"grid",columnGap:"10px",rowGap:"10px",gridTemplateColumns:"repeat(1, 1fr)",gridAutoRows:"auto"},e[t.breakpoints.up("md")]={gridTemplateColumns:"repeat(12, 1fr)"},e)}})(u),f=function(t){var e={gridRowEnd:t.rowSpan,gridColumnEnd:t.colSpan};return i.a.createElement("div",{className:t.classes.panel,style:e},i.a.createElement("div",{className:t.classes.content},t.children))};f.defaultProps={rowSpan:"auto",colSpan:"auto"},f.propTypes={rowSpan:c.a.string,colSpan:c.a.string};var h=Object(l.withStyles)(function(t){var e;return{panel:(e={breakInside:"avoid",fontSize:0},e[t.breakpoints.up("md")]={gridColumnStart:"auto",gridRowStart:"auto"},e),content:{overflow:"hidden",width:"100%",height:"100%"}}})(f),d=(n(81),n(214)),m=n.n(d),g=(n(212),n(215)),v=n.n(g),y=n(168),b=n(169),w=n(172),x=function(t){function e(e){var n;return(n=t.call(this,e)||this).onImageLoaded=function(){var t=v()(m.a.mark(function t(e){var r,o,a,i,s;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.props.label){t.next=2;break}return t.abrupt("return");case 2:r=w.a.getPaletteFromIMG(e.target),o=r[0],(a=w.a.RGBtoHSL(o[0],o[1],o[2]))[1]=100*a[1],a[2]=(100*a[2]+50)%100,i="rgb("+o[0]+", "+o[1]+", "+o[2]+")",s="hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)",n.setState({backgroundColor:i,color:s,opacity:.9});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.renderPhoto=function(){return i.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},i.a.createElement("img",{src:Object(y.withPrefix)(n.props.path),alt:n.props.alt,className:n.props.classes.img,onLoad:function(t){return n.onImageLoaded(t)}}),i.a.createElement("div",{className:n.props.classes.label,style:{opacity:n.state.opacity,backgroundColor:n.state.backgroundColor}},i.a.createElement("span",{className:n.props.classes.labelSpan,style:{color:n.state.color}},n.props.label)))},n.renderLink=function(t){return i.a.createElement("a",{href:Object(y.withPrefix)(n.props.to),alt:n.props.alt},t)},n.renderCarouselLink=function(t){var e=n.props.path.split("/").pop().split(".").shift();if("undefined"!=typeof window){var r=document.location.pathname+"?image="+e;return i.a.createElement("a",{href:r},t)}return null},n.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},n}return o()(e,t),e.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},e}(i.a.Component);x.defaultProps={label:null},x.propTypes={label:c.a.string};var E=Object(b.a)(Object(l.withStyles)(function(t){var e;return{label:(e={position:"absolute",bottom:"0px",width:"100%",fontSize:"1.7vw",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},e[t.breakpoints.down("sm")]={fontSize:"5vw"},e),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",height:"100%",fontSize:"1px",objectFit:"cover"}}}))(x),k=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).ref=i.a.createRef(),e.goToTop=function(){e.ref.current.scrollTop=0},e}return o()(e,t),e.prototype.render=function(){var t=this.props.classes;return i.a.createElement("div",{className:t.photoPage,ref:this.ref},i.a.createElement(p,null,this.props.photos.map(function(t){return i.a.createElement(h,{key:t.alt,colSpan:t.colSpan?"span "+t.colSpan:"span 6",rowSpan:t.rowSpan?"span "+t.rowSpan:"auto"},i.a.createElement(E,t))})),i.a.createElement("div",{className:t.backToTopBtn,onClick:this.goToTop},i.a.createElement("h2",{style:{display:"block"}},"back to top")))},e}(i.a.Component);k.defaultProps={title:""},k.propTypes={photos:c.a.array,title:c.a.string};e.a=Object(l.withStyles)(function(t){return{photoPage:{paddingTop:"20px",height:"100vh",overflowY:"auto",backgroundColor:"white"},backToTopBtn:{cursor:"pointer",width:"100%",padding:"20px 0",textAlign:"center","&:hover":{backgroundColor:"darkgray"}}}})(k)},193:function(t,e,n){"use strict";const r=n(194),o=n(195);function a(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function i(t,e){return e.decode?o(t):t}function s(t){const e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function c(t,e){const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,arrayFormat:"none"},e)),r=Object.create(null);if("string"!=typeof t)return r;if(!(t=t.trim().replace(/^[?#&]/,"")))return r;for(const o of t.split("&")){let[t,a]=o.replace(/\+/g," ").split("=");a=void 0===a?null:i(a,e),n(i(t,e),a,r)}return Object.keys(r).sort().reduce((t,e)=>{const n=r[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(n):t[e]=n,t},Object.create(null))}e.extract=s,e.parse=c,e.stringify=((t,e)=>{!1===(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=(()=>{}));const n=function(t){switch(t.arrayFormat){case"index":return(e,n,r)=>null===n?[a(e,t),"[",r,"]"].join(""):[a(e,t),"[",a(r,t),"]=",a(n,t)].join("");case"bracket":return(e,n)=>null===n?[a(e,t),"[]"].join(""):[a(e,t),"[]=",a(n,t)].join("");default:return(e,n)=>null===n?a(e,t):[a(e,t),"=",a(n,t)].join("")}}(e);return t?Object.keys(t).sort(e.sort).map(r=>{const o=t[r];if(void 0===o)return"";if(null===o)return a(r,e);if(Array.isArray(o)){const t=[];for(const e of o.slice())void 0!==e&&t.push(n(r,e,t.length));return t.join("&")}return a(r,e)+"="+a(o,e)}).filter(t=>t.length>0).join("&"):""}),e.parseUrl=((t,e)=>({url:t.split("?")[0]||"",query:c(s(t),e)}))},194:function(t,e,n){"use strict";t.exports=(t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},195:function(t,e,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],a(n),a(r))}function i(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var r=i(n[0]);r!==n[0]&&(e[n[0]]=r)}n=o.exec(t)}e["%C2"]="�";for(var a=Object.keys(e),s=0;s<a.length;s++){var c=a[s];t=t.replace(new RegExp(c,"g"),e[c])}return t}(t)}}},196:function(t,e,n){"use strict";var r=n(38);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(0)),a=(0,r(n(211)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})),"Dashboard");e.default=a},197:function(t,e,n){"use strict";n(213),n(81),n(90);var r=n(8),o=n.n(r),a=n(0),i=n.n(a),s=n(4),c=n.n(s),l=n(167),u=n(168),p=n(169),f=n(174),h=n.n(f),d=n(196),m=n.n(d),g=n(172),v="Escape",y="ArrowLeft",b="ArrowRight",w="ArrowDown",x="ArrowUp",E=function(t){function e(e){var n;return(n=t.call(this,e)||this).onKeyUp=function(t){"undefined"!=typeof window&&(t.key===v&&n.props.onClose(),t.key===b&&(document.location=n.getNext()),t.key===y&&(document.location=n.getPrev()),t.key===w&&(document.location=n.getNext()),t.key===x&&(document.location=n.getPrev()))},n.onImageLoaded=function(t){var e=g.a.getPaletteFromIMG(t.target)[0],r=g.a.RGBtoHSL(e[0],e[1],e[2]);r[1]=100*r[1],r[2]=(100*r[2]+50)%100;var o="rgb("+e[0]+", "+e[1]+", "+e[2]+")",a="hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)";n.setState({shadowColor:a,arrowColor:o})},n.getIdx=function(){return Object(p.d)(function(t){return t.path.indexOf(n.props.currentPhoto)>-1},n.props.photos)},n.getOffset=function(t){var e=n.props.photos?n.props.photos.length:0;return(n.getIdx()+e+t)%e},n.getMasonryUrl=function(){return n.props.location.pathname},n.getPrev=function(){var t=n.props.photos[n.getOffset(-1)].path.split("/").pop();return n.props.location.pathname+"?image="+t},n.getNext=function(){var t=n.props.photos[n.getOffset(1)].path.split("/").pop();return n.props.location.pathname+"?image="+t},n.state={arrowColor:"rgba(0, 0, 0, 0)",shadowColor:"rgba(0,0,0,0)"},n}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){document.addEventListener("keyup",this.onKeyUp,!1)},n.componentWillUnmount=function(){document.removeEventListener("keyup",this.onKeyUp,!1)},n.render=function(){var t=this,e=Object(p.c)(function(e){return-1!==e.path.indexOf(t.props.currentPhoto)})(this.props.photos);return i.a.createElement("div",null,i.a.createElement("div",{className:this.props.classes.content},i.a.createElement("img",{src:Object(u.withPrefix)(e.path),alt:this.props.currentPhoto,onLoad:this.onImageLoaded,style:{width:"100%"}}),i.a.createElement("a",{href:this.getPrev(),className:h()(this.props.classes.link,this.props.classes.leftLink),style:{left:0}}),i.a.createElement("a",{href:this.getNext(),className:h()(this.props.classes.link,this.props.classes.rightLink),style:{right:0}}),i.a.createElement("a",{href:this.getMasonryUrl(),className:this.props.classes.masonryLink},i.a.createElement(m.a,{style:{width:"25px",height:"25px",position:"absolute",transform:"scale(1.5)",filter:"blur(5px)"},nativeColor:this.state.arrowColor}),i.a.createElement(m.a,{style:{width:"25px",height:"25px",position:"absolute"},nativeColor:this.state.shadowColor}))),i.a.createElement("span",{className:this.props.classes.prevnext},i.a.createElement("a",{className:this.props.classes.prevnext,href:this.getPrev()},"prev")," // ",i.a.createElement("a",{className:this.props.classes.prevnext,style:{paddingLeft:0},href:this.getNext()},"next")))},e}(i.a.Component);E.defaultProps={},E.propTypes={currentPhoto:c.a.string,photos:c.a.array,onClose:c.a.func,location:c.a.object};var k=Object(l.withStyles)(function(t){return{content:{position:"relative",width:"100%",overflow:"hidden",padding:"20px 20px 20px 30px"},link:{position:"absolute",width:"150px",height:"100%",top:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},leftLink:{cursor:"w-resize"},rightLink:{cursor:"e-resize"},prevnext:{color:"black",display:"inline-block",paddingLeft:"15px"},masonryLink:{position:"absolute",width:"50px",height:"50px",top:"15px",left:"25px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer"}}})(E);e.a=k}}]);
//# sourceMappingURL=component---src-pages-events-amazon-js-501f1deabdc21b7abcde.js.map