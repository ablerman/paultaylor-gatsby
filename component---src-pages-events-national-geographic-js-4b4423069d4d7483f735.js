(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{157:function(t,e,n){"use strict";n.r(e);n(42);var o=n(8),r=n.n(o),a=n(54),i=n.n(a),s=n(0),l=n.n(s),c=n(167),p=n(193),u=n(168),f=n(169),h=n(191),g=n(192),d=n(197),m=[{path:"/portfolio/events/natgeo/natgeo01.jpg",alt:"natgeo01"},{path:"/portfolio/events/natgeo/natgeo02.jpg",alt:"natgeo02"},{path:"/portfolio/events/natgeo/natgeo03.jpg",alt:"natgeo03"},{path:"/portfolio/events/natgeo/natgeo04.jpg",alt:"natgeo04"},{path:"/portfolio/events/natgeo/natgeo05.jpg",alt:"natgeo05"},{path:"/portfolio/events/natgeo/natgeo06.jpg",alt:"natgeo06"},{path:"/portfolio/events/natgeo/natgeo07.jpg",alt:"natgeo07"},{path:"/portfolio/events/natgeo/natgeo08.jpg",alt:"natgeo08"},{path:"/portfolio/events/natgeo/natgeo09.jpg",alt:"natgeo09"},{path:"/portfolio/events/natgeo/natgeo10.jpg",alt:"natgeo10"},{path:"/portfolio/events/natgeo/natgeo11.jpg",alt:"natgeo11"},{path:"/portfolio/events/natgeo/natgeo12.jpg",alt:"natgeo12"},{path:"/portfolio/events/natgeo/natgeo13.jpg",alt:"natgeo13"},{path:"/portfolio/events/natgeo/natgeo14.jpg",alt:"natgeo14"},{path:"/portfolio/events/natgeo/natgeo15.jpg",alt:"natgeo15"},{path:"/portfolio/events/natgeo/natgeo16.jpg",alt:"natgeo16"},{path:"/portfolio/events/natgeo/natgeo17.jpg",alt:"natgeo17"},{path:"/portfolio/events/natgeo/natgeo18.jpg",alt:"natgeo18"},{path:"/portfolio/events/natgeo/natgeo19.jpg",alt:"natgeo19"},{path:"/portfolio/events/natgeo/natgeo20.jpg",alt:"natgeo20"},{path:"/portfolio/events/natgeo/natgeo21.jpg",alt:"natgeo21"},{path:"/portfolio/events/natgeo/natgeo22.jpg",alt:"natgeo22"},{path:"/portfolio/events/natgeo/natgeo23.jpg",alt:"natgeo23"},{path:"/portfolio/events/natgeo/natgeo24.jpg",alt:"natgeo24"},{path:"/portfolio/events/natgeo/natgeo25-2.jpg",alt:"natgeo25-2"},{path:"/portfolio/events/natgeo/natgeo25.jpg",alt:"natgeo25"},{path:"/portfolio/events/natgeo/natgeo26.jpg",alt:"natgeo26"},{path:"/portfolio/events/natgeo/natgeo27.jpg",alt:"natgeo27"},{path:"/portfolio/events/natgeo/natgeo28.jpg",alt:"natgeo28"},{path:"/portfolio/events/natgeo/natgeo29.jpg",alt:"natgeo29"},{path:"/portfolio/events/natgeo/natgeo30.jpg",alt:"natgeo30"},{path:"/portfolio/events/natgeo/natgeo31.jpg",alt:"natgeo31"}],v=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).closeCarousel=function(){var t=Object(f.h)(null,["props","location","pathname"],i()(i()(e)));Object(u.navigate)(t)},e.renderContent=function(){var t=Object(p.parse)(e.props.location.search);return void 0!==t.image?l.a.createElement(d.a,{photos:m,currentPhoto:t.image,onClose:e.closeCarousel,location:e.props.location}):l.a.createElement(g.a,{title:"National Geographic",photos:m})},e}return r()(e,t),e.prototype.render=function(){return l.a.createElement(h.a,{location:this.props.location},this.renderContent())},e}(l.a.Component);e.default=Object(c.withStyles)(function(t){var e;return{root:(e={},e[t.breakpoints.up("md")]={marginLeft:"255px"},e)}})(v)},170:function(t,e,n){var o=n(39)("meta"),r=n(11),a=n(28),i=n(27).f,s=0,l=Object.isExtensible||function(){return!0},c=!n(18)(function(){return l(Object.preventExtensions({}))}),p=function(t){i(t,o,{value:{i:"O"+ ++s,w:{}}})},u=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,o)){if(!l(t))return"F";if(!e)return"E";p(t)}return t[o].i},getWeak:function(t,e){if(!a(t,o)){if(!l(t))return!0;if(!e)return!1;p(t)}return t[o].w},onFreeze:function(t){return c&&u.NEED&&l(t)&&!a(t,o)&&p(t),t}}},171:function(t,e,n){var o=n(11);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},172:function(t,e,n){"use strict";var o=n(216),r=n.n(o),a=function(){function t(){this.width=0,this.height=0,this.imageData=null}var e=t.prototype;return e.getDataFromEl=function(t){this.width=t.width,this.height=t.height;var e=document.createElement("canvas"),n=e.getContext("2d");document.body.appendChild(e),e.width=this.width,e.height=this.height,n.drawImage(t,0,0),this.imageData=n.getImageData(0,0,this.width,this.height);var o=this.buildPixels();return e.parentNode.removeChild(e),o},e.buildPixels=function(){for(var t=[],e=0;e<this.getPixelCount();e++){var n=this.imageData.data[4*e+0],o=this.imageData.data[4*e+1],r=this.imageData.data[4*e+2];this.imageData.data[4*e+3]<15||(n>250&&o>250&&r>250||t.push([n,o,r]))}return t},e.getPixelCount=function(){return this.width*this.height},t}();a.getPaletteFromIMG=function(t){var e=(new a).getDataFromEl(t);return r()(e,8).palette()},a.RGBtoHSL=function(t,e,n){var o=null,r=null;t/=255,e/=255,n/=255;var a,i=Math.max(t,e,n),s=Math.min(t,e,n),l=i-s;if(0===l)a=0;else switch(i){case t:r=0,(o=(e-n)/l)<0&&(r=6),a=o+r;break;case e:a=(o=(n-t)/l)+(r=2);break;case n:a=(o=(t-e)/l)+(r=4)}return[a*=60,(i-s)/(1-Math.abs(i+s-1)),(i+s)/2]};var i=a;e.a=i},181:function(t,e,n){"use strict";(function(t,o){n.d(e,"a",function(){return l});n(89),n(56),n(88),n(183);var r=n(202),a=n(167),i=Object(a.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}}});function s(){return{theme:i,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(a.createGenerateClassName)()}}function l(){return t.browser?(o.__INIT_MATERIAL_UI__||(o.__INIT_MATERIAL_UI__=s()),o.__INIT_MATERIAL_UI__):s()}}).call(this,n(182),n(200))},182:function(t,e){var n,o,r=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(t){o=i}}();var l,c=[],p=!1,u=-1;function f(){p&&l&&(p=!1,l.length?c=l.concat(c):u=-1,c.length&&h())}function h(){if(!p){var t=s(f);p=!0;for(var e=c.length;e;){for(l=c,c=[];++u<e;)l&&l[u].run();u=-1,e=c.length}l=null,p=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new g(t,e)),1!==c.length||p||s(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},183:function(t,e,n){"use strict";var o=n(184),r=n(171);t.exports=n(185)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(r(this,"Map"),0===t?0:t,e)}},o,!0)},184:function(t,e,n){"use strict";var o=n(27).f,r=n(58),a=n(80),i=n(19),s=n(78),l=n(79),c=n(57),p=n(87),u=n(85),f=n(17),h=n(170).fastKey,g=n(171),d=f?"_s":"size",m=function(t,e){var n,o=h(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var p=t(function(t,o){s(t,p,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[d]=0,null!=o&&l(o,n,t[c],t)});return a(p.prototype,{clear:function(){for(var t=g(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=g(this,e),o=m(n,t);if(o){var r=o.n,a=o.p;delete n._i[o.i],o.r=!0,a&&(a.n=r),r&&(r.p=a),n._f==o&&(n._f=r),n._l==o&&(n._l=a),n[d]--}return!!o},forEach:function(t){g(this,e);for(var n,o=i(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(g(this,e),t)}}),f&&o(p.prototype,"size",{get:function(){return g(this,e)[d]}}),p},def:function(t,e,n){var o,r,a=m(t,e);return a?a.v=n:(t._l=a={i:r=h(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=a),o&&(o.n=a),t[d]++,"F"!==r&&(t._i[r]=a)),t},getEntry:m,setStrong:function(t,e,n){c(t,e,function(t,n){this._t=g(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?p(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,p(1))},n?"entries":"values",!n,!0),u(e)}}},185:function(t,e,n){"use strict";var o=n(5),r=n(6),a=n(20),i=n(80),s=n(170),l=n(79),c=n(78),p=n(11),u=n(18),f=n(86),h=n(41),g=n(186);t.exports=function(t,e,n,d,m,v){var y=o[t],b=y,w=m?"set":"add",x=b&&b.prototype,E={},j=function(t){var e=x[t];a(x,t,"delete"==t?function(t){return!(v&&!p(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!p(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!p(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof b&&(v||x.forEach&&!u(function(){(new b).entries().next()}))){var k=new b,C=k[w](v?{}:-0,1)!=k,_=u(function(){k.has(1)}),O=f(function(t){new b(t)}),T=!v&&u(function(){for(var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)});O||((b=e(function(e,n){c(e,b,t);var o=g(new y,e,b);return null!=n&&l(n,m,o[w],o),o})).prototype=x,x.constructor=b),(_||T)&&(j("delete"),j("has"),m&&j("get")),(T||C)&&j(w),v&&x.clear&&delete x.clear}else b=d.getConstructor(e,t,m,w),i(b.prototype,n),s.NEED=!0;return h(b,t),E[t]=b,r(r.G+r.W+r.F*(b!=y),E),v||d.setStrong(b,t,m),b}},186:function(t,e,n){var o=n(11),r=n(187).set;t.exports=function(t,e,n){var a,i=e.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&o(a)&&r&&r(t,a),t}},187:function(t,e,n){var o=n(11),r=n(12),a=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(19)(Function.call,n(188).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:a}},188:function(t,e,n){var o=n(84),r=n(55),a=n(40),i=n(83),s=n(28),l=n(82),c=Object.getOwnPropertyDescriptor;e.f=n(17)?c:function(t,e){if(t=a(t),e=i(e,!0),l)try{return c(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},189:function(t,e,n){"use strict";var o=n(38);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}});var r=o(n(190))},190:function(t,e,n){"use strict";var o=n(38);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(176)),a=o(n(177)),i=o(n(178)),s=o(n(179)),l=o(n(180)),c=o(n(0)),p=(o(n(4)),n(167)),u=(o(n(201)),function(t){function e(){return(0,r.default)(this,e),(0,i.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return this.props.children}}]),e}(c.default.Component));u.propTypes={},u.propTypes={},u.defaultProps={children:null};var f=(0,p.withStyles)(function(t){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},body:{margin:0,backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}}}}},{name:"MuiCssBaseline"})(u);e.default=f},191:function(t,e,n){"use strict";var o=n(8),r=n.n(o),a=n(0),i=n.n(a),s=n(4),l=n.n(s),c=n(167),p=n(189),u=n.n(p),f=n(181);var h=function(t){var e=function(e){function n(t){var n;return(n=e.call(this,t)||this).muiPageContext=null,n.muiPageContext=t.muiPageContext||Object(f.a)(),n}r()(n,e);var o=n.prototype;return o.componentDidMount=function(){var t=document.querySelector("#server-side-jss");t&&t.parentNode&&t.parentNode.removeChild(t)},o.render=function(){return i.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(u.a,null),i.a.createElement(t,this.props))},n}(i.a.Component);return e.propTypes={muiPageContext:l.a.object},e},g=n(169),d=n(168),m=n(203),v=n.n(m),y=n(204),b=n.n(y),w=n(208),x=n.n(w),E=n(209),j=n(199),k=n.n(j),C=n(205).a,_=n(206).a,O=n(207).a,T=n(210),P=function(t){function e(e){var n;return(n=t.call(this,e)||this).onOpen=function(){n.setState({drawerOpen:!0})},n.onClose=function(){n.setState({drawerOpen:!1})},n.state={drawerOpen:!1},n}return r()(e,t),e.prototype.render=function(){var t=this,e={fill:"black"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{open:this.state.drawerOpen,onClose:this.onClose},i.a.createElement("div",{className:this.props.classes.drawer},i.a.createElement("a",{href:Object(d.withPrefix)("/"),style:{textDecoration:"none"}},i.a.createElement("h1",{style:{color:"black",textAlign:"center",marginBottom:0}},"Paul Taylor")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(v.a,{component:T.a,to:"https://www.instagram.com/thisispaultaylor"},i.a.createElement(E.a,{style:e})),i.a.createElement(v.a,{component:T.a,to:"https://thisispaultaylor.instagram.com"},i.a.createElement(E.b,{style:e})),i.a.createElement(v.a,{component:T.a,to:"mailto://hello@thisispayltaylor.com"},i.a.createElement(x.a,{style:e})))),i.a.createElement(C,{onMenuClick:function(){return t.onClose()},location:this.props.location})),i.a.createElement("div",null,i.a.createElement(O,{onOpen:this.onOpen},i.a.createElement(v.a,{className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(b.a,null),i.a.createElement(k.a,{variant:"title",color:"inherit"},"PaulTaylor"))),i.a.createElement("div",{className:this.props.classes.root},this.props.children)))},e}(i.a.Component);P.defaultProps={},P.propTypes={location:l.a.object,children:l.a.any};var S=Object(g.a)(h,Object(c.withStyles)(function(t){var e;return{root:(e={},e[t.breakpoints.up("md")]={position:"relative",left:"255px",width:"calc(100vw - 255px)",paddingRight:"30px",paddingLeft:"40px"},e),drawer:{paddingTop:"20px"}}}))(P);e.a=S},192:function(t,e,n){"use strict";n(59);var o=n(8),r=n.n(o),a=n(0),i=n.n(a),s=n(4),l=n.n(s),c=n(167),p=function(t){return i.a.createElement("div",{className:t.classes.masonryContainer},t.children)};p.defaultProps={},p.propTypes={};var u=Object(c.withStyles)(function(t){var e;return{masonryContainer:(e={display:"grid",columnGap:"10px",rowGap:"10px",gridTemplateColumns:"repeat(1, 1fr)",gridAutoRows:"auto"},e[t.breakpoints.up("md")]={gridTemplateColumns:"repeat(12, 1fr)"},e)}})(p),f=function(t){var e={gridRowEnd:t.rowSpan,gridColumnEnd:t.colSpan};return i.a.createElement("div",{className:t.classes.panel,style:e},i.a.createElement("div",{className:t.classes.content},t.children))};f.defaultProps={rowSpan:"auto",colSpan:"auto"},f.propTypes={rowSpan:l.a.string,colSpan:l.a.string};var h=Object(c.withStyles)(function(t){var e;return{panel:(e={breakInside:"avoid",fontSize:0},e[t.breakpoints.up("md")]={gridColumnStart:"auto",gridRowStart:"auto"},e),content:{overflow:"hidden",width:"100%",height:"100%"}}})(f),g=(n(81),n(214)),d=n.n(g),m=(n(212),n(215)),v=n.n(m),y=n(168),b=n(169),w=n(172),x=function(t){function e(e){var n;return(n=t.call(this,e)||this).onImageLoaded=function(){var t=v()(d.a.mark(function t(e){var o,r,a,i,s;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.props.label){t.next=2;break}return t.abrupt("return");case 2:o=w.a.getPaletteFromIMG(e.target),r=o[0],(a=w.a.RGBtoHSL(r[0],r[1],r[2]))[1]=100*a[1],a[2]=(100*a[2]+50)%100,i="rgb("+r[0]+", "+r[1]+", "+r[2]+")",s="hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)",n.setState({backgroundColor:i,color:s,opacity:.9});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.renderPhoto=function(){return i.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},i.a.createElement("img",{src:Object(y.withPrefix)(n.props.path),alt:n.props.alt,className:n.props.classes.img,onLoad:function(t){return n.onImageLoaded(t)}}),i.a.createElement("div",{className:n.props.classes.label,style:{opacity:n.state.opacity,backgroundColor:n.state.backgroundColor}},i.a.createElement("span",{className:n.props.classes.labelSpan,style:{color:n.state.color}},n.props.label)))},n.renderLink=function(t){return i.a.createElement("a",{href:Object(y.withPrefix)(n.props.to),alt:n.props.alt},t)},n.renderCarouselLink=function(t){var e=n.props.path.split("/").pop().split(".").shift();if("undefined"!=typeof window){var o=document.location.pathname+"?image="+e;return i.a.createElement("a",{href:o},t)}return null},n.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},n}return r()(e,t),e.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},e}(i.a.Component);x.defaultProps={label:null},x.propTypes={label:l.a.string};var E=Object(b.a)(Object(c.withStyles)(function(t){var e;return{label:(e={position:"absolute",bottom:"0px",width:"100%",fontSize:"1.7vw",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},e[t.breakpoints.down("sm")]={fontSize:"5vw"},e),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",height:"100%",fontSize:"1px",objectFit:"cover"}}}))(x),j=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).ref=i.a.createRef(),e.goToTop=function(){e.ref.current.scrollTop=0},e}return r()(e,t),e.prototype.render=function(){var t=this.props.classes;return i.a.createElement("div",{className:t.photoPage,ref:this.ref},i.a.createElement(u,null,this.props.photos.map(function(t){return i.a.createElement(h,{key:t.alt,colSpan:t.colSpan?"span "+t.colSpan:"span 6",rowSpan:t.rowSpan?"span "+t.rowSpan:"auto"},i.a.createElement(E,t))})),i.a.createElement("div",{className:t.backToTopBtn,onClick:this.goToTop},i.a.createElement("h2",{style:{display:"block"}},"back to top")))},e}(i.a.Component);j.defaultProps={title:""},j.propTypes={photos:l.a.array,title:l.a.string};e.a=Object(c.withStyles)(function(t){return{photoPage:{paddingTop:"20px",height:"100vh",overflowY:"auto",backgroundColor:"white"},backToTopBtn:{cursor:"pointer",width:"100%",padding:"20px 0",textAlign:"center","&:hover":{backgroundColor:"darkgray"}}}})(j)},193:function(t,e,n){"use strict";const o=n(194),r=n(195);function a(t,e){return e.encode?e.strict?o(t):encodeURIComponent(t):t}function i(t,e){return e.decode?r(t):t}function s(t){const e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function l(t,e){const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,o)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===o[t]&&(o[t]={}),o[t][e[1]]=n):o[t]=n};case"bracket":return(t,n,o)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],n):o[t]=[n]:o[t]=n};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,arrayFormat:"none"},e)),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;for(const r of t.split("&")){let[t,a]=r.replace(/\+/g," ").split("=");a=void 0===a?null:i(a,e),n(i(t,e),a,o)}return Object.keys(o).sort().reduce((t,e)=>{const n=o[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(n):t[e]=n,t},Object.create(null))}e.extract=s,e.parse=l,e.stringify=((t,e)=>{!1===(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=(()=>{}));const n=function(t){switch(t.arrayFormat){case"index":return(e,n,o)=>null===n?[a(e,t),"[",o,"]"].join(""):[a(e,t),"[",a(o,t),"]=",a(n,t)].join("");case"bracket":return(e,n)=>null===n?[a(e,t),"[]"].join(""):[a(e,t),"[]=",a(n,t)].join("");default:return(e,n)=>null===n?a(e,t):[a(e,t),"=",a(n,t)].join("")}}(e);return t?Object.keys(t).sort(e.sort).map(o=>{const r=t[o];if(void 0===r)return"";if(null===r)return a(o,e);if(Array.isArray(r)){const t=[];for(const e of r.slice())void 0!==e&&t.push(n(o,e,t.length));return t.join("&")}return a(o,e)+"="+a(r,e)}).filter(t=>t.length>0).join("&"):""}),e.parseUrl=((t,e)=>({url:t.split("?")[0]||"",query:l(s(t),e)}))},194:function(t,e,n){"use strict";t.exports=(t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},195:function(t,e,n){"use strict";var o=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],a(n),a(o))}function i(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(o),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(o);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(e[n[0]]=o)}n=r.exec(t)}e["%C2"]="�";for(var a=Object.keys(e),s=0;s<a.length;s++){var l=a[s];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},196:function(t,e,n){"use strict";var o=n(38);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(0)),a=(0,o(n(211)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})),"Dashboard");e.default=a},197:function(t,e,n){"use strict";n(213),n(81),n(90);var o=n(8),r=n.n(o),a=n(0),i=n.n(a),s=n(4),l=n.n(s),c=n(167),p=n(168),u=n(169),f=n(174),h=n.n(f),g=n(196),d=n.n(g),m=n(172),v="Escape",y="ArrowLeft",b="ArrowRight",w="ArrowDown",x="ArrowUp",E=function(t){function e(e){var n;return(n=t.call(this,e)||this).onKeyUp=function(t){"undefined"!=typeof window&&(t.key===v&&n.props.onClose(),t.key===b&&(document.location=n.getNext()),t.key===y&&(document.location=n.getPrev()),t.key===w&&(document.location=n.getNext()),t.key===x&&(document.location=n.getPrev()))},n.onImageLoaded=function(t){var e=m.a.getPaletteFromIMG(t.target)[0],o=m.a.RGBtoHSL(e[0],e[1],e[2]);o[1]=100*o[1],o[2]=(100*o[2]+50)%100;var r="rgb("+e[0]+", "+e[1]+", "+e[2]+")",a="hsl("+o[0]+", "+o[1]+"%, "+o[2]+"%)";n.setState({shadowColor:a,arrowColor:r})},n.getIdx=function(){return Object(u.d)(function(t){return t.path.indexOf(n.props.currentPhoto)>-1},n.props.photos)},n.getOffset=function(t){var e=n.props.photos?n.props.photos.length:0;return(n.getIdx()+e+t)%e},n.getMasonryUrl=function(){return n.props.location.pathname},n.getPrev=function(){var t=n.props.photos[n.getOffset(-1)].path.split("/").pop();return n.props.location.pathname+"?image="+t},n.getNext=function(){var t=n.props.photos[n.getOffset(1)].path.split("/").pop();return n.props.location.pathname+"?image="+t},n.state={arrowColor:"rgba(0, 0, 0, 0)",shadowColor:"rgba(0,0,0,0)"},n}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){document.addEventListener("keyup",this.onKeyUp,!1)},n.componentWillUnmount=function(){document.removeEventListener("keyup",this.onKeyUp,!1)},n.render=function(){var t=this,e=Object(u.c)(function(e){return-1!==e.path.indexOf(t.props.currentPhoto)})(this.props.photos);return i.a.createElement("div",null,i.a.createElement("div",{className:this.props.classes.content},i.a.createElement("img",{src:Object(p.withPrefix)(e.path),alt:this.props.currentPhoto,onLoad:this.onImageLoaded,style:{width:"100%"}}),i.a.createElement("a",{href:this.getPrev(),className:h()(this.props.classes.link,this.props.classes.leftLink),style:{left:0}}),i.a.createElement("a",{href:this.getNext(),className:h()(this.props.classes.link,this.props.classes.rightLink),style:{right:0}}),i.a.createElement("a",{href:this.getMasonryUrl(),className:this.props.classes.masonryLink},i.a.createElement(d.a,{style:{width:"25px",height:"25px",position:"absolute",transform:"scale(1.5)",filter:"blur(5px)"},nativeColor:this.state.arrowColor}),i.a.createElement(d.a,{style:{width:"25px",height:"25px",position:"absolute"},nativeColor:this.state.shadowColor}))),i.a.createElement("span",{className:this.props.classes.prevnext},i.a.createElement("a",{className:this.props.classes.prevnext,href:this.getPrev()},"prev")," // ",i.a.createElement("a",{className:this.props.classes.prevnext,style:{paddingLeft:0},href:this.getNext()},"next")))},e}(i.a.Component);E.defaultProps={},E.propTypes={currentPhoto:l.a.string,photos:l.a.array,onClose:l.a.func,location:l.a.object};var j=Object(c.withStyles)(function(t){return{content:{position:"relative",width:"100%",overflow:"hidden",padding:"20px 20px 20px 30px"},link:{position:"absolute",width:"150px",height:"100%",top:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},leftLink:{cursor:"w-resize"},rightLink:{cursor:"e-resize"},prevnext:{color:"black",display:"inline-block",paddingLeft:"15px"},masonryLink:{position:"absolute",width:"50px",height:"50px",top:"15px",left:"25px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer"}}})(E);e.a=j}}]);
//# sourceMappingURL=component---src-pages-events-national-geographic-js-4b4423069d4d7483f735.js.map