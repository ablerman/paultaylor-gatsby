(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(167),a=n(168),u=n(180);t.default=Object(i.withStyles)(function(e){return{section:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes;return o.a.createElement(u.a,null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2."),o.a.createElement("p",null,"This page has been styled using global CSS. This approach could be used to style simple HTML markup, e.g. markup generated by Markdown. Here's an example:"),o.a.createElement("h2",null,"Richard Hamming on Luck"),o.a.createElement("div",null,o.a.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",o.a.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),o.a.createElement("blockquote",null,o.a.createElement("p",null,"There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck."," ",o.a.createElement("em",null,"The particular thing you do is luck, but that you do something is not.")))),o.a.createElement("p",null,"Posted April 09, 2011"),o.a.createElement("section",{className:t.section},o.a.createElement(a.Link,{to:"/"},"Go back to the homepage")))})},177:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",function(){return c});n(80),n(56),n(79),n(206);var o=n(208),i=n(167),a=Object(i.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}}});function u(){return{theme:a,sheetsManager:new Map,sheetsRegistry:new o.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function c(){return e.browser?(r.__INIT_MATERIAL_UI__||(r.__INIT_MATERIAL_UI__=u()),r.__INIT_MATERIAL_UI__):u()}}).call(this,n(205),n(204))},180:function(e,t,n){"use strict";var r=n(8),o=n.n(r),i=n(0),a=n.n(i),u=n(4),c=n.n(u),s=n(167),l=n(207),f=n.n(l),p=n(177);var h=function(e){var t=function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=null,n.muiPageContext=e.muiPageContext||Object(p.a)(),n}o()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=document.querySelector("#server-side-jss");e&&e.parentNode&&e.parentNode.removeChild(e)},r.render=function(){return a.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},a.a.createElement(f.a,null),a.a.createElement(e,this.props))},n}(a.a.Component);return t.propTypes={muiPageContext:c.a.object},t},m=n(170),d=n(168),v=n(178),y=n.n(v),g=n(179),_=n.n(g),E=n(209),b=n.n(E),w=n(185),T=n(172),k=n.n(T),x=n(182).a,O=n(183).a,C=n(184).a,M=n(186),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).onOpen=function(){n.setState({drawerOpen:!0})},n.onClose=function(){n.setState({drawerOpen:!1})},n.state={drawerOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t={fill:"black"};return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{open:this.state.drawerOpen,onClose:this.onClose},a.a.createElement("div",{className:this.props.classes.drawer},a.a.createElement("a",{href:Object(d.withPrefix)("/"),style:{textDecoration:"none"}},a.a.createElement("h1",{style:{color:"black",textAlign:"center",marginBottom:0}},"Paul Taylor")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement(y.a,{component:M.a,to:"https://www.instagram.com/thisispaultaylor"},a.a.createElement(w.a,{style:t})),a.a.createElement(y.a,{component:M.a,to:"https://thisispaultaylor.instagram.com"},a.a.createElement(w.b,{style:t})),a.a.createElement(y.a,{component:M.a,to:"mailto://hello@thisispayltaylor.com"},a.a.createElement(b.a,{style:t})))),a.a.createElement(x,{onMenuClick:function(){return e.onClose()},location:this.props.location})),a.a.createElement("div",null,a.a.createElement(C,{onOpen:this.onOpen},a.a.createElement(y.a,{className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},a.a.createElement(_.a,null),a.a.createElement(k.a,{variant:"title",color:"inherit"},"PaulTaylor"))),a.a.createElement("div",{className:this.props.classes.root},this.props.children)))},t}(a.a.Component);j.defaultProps={},j.propTypes={location:c.a.object,children:c.a.any};var P=Object(m.a)(h,Object(s.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.up("md")]={position:"relative",left:"255px",width:"calc(100vw - 255px)",paddingRight:"30px",paddingLeft:"40px"},t),drawer:{paddingTop:"20px"}}}))(j);t.a=P},205:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||u(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},206:function(e,t,n){"use strict";var r=n(234),o=n(230);e.exports=n(235)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},207:function(e,t,n){"use strict";var r=n(38);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(239))},229:function(e,t,n){var r=n(42)("meta"),o=n(11),i=n(29),a=n(28).f,u=0,c=Object.isExtensible||function(){return!0},s=!n(18)(function(){return c(Object.preventExtensions({}))}),l=function(e){a(e,r,{value:{i:"O"+ ++u,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!c(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!c(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return s&&f.NEED&&c(e)&&!i(e,r)&&l(e),e}}},230:function(e,t,n){var r=n(11);e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},234:function(e,t,n){"use strict";var r=n(28).f,o=n(60),i=n(84),a=n(20),u=n(82),c=n(83),s=n(59),l=n(90),f=n(88),p=n(17),h=n(229).fastKey,m=n(230),d=p?"_s":"size",v=function(e,t){var n,r=h(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var l=e(function(e,r){u(e,l,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[d]=0,null!=r&&c(r,n,e[s],e)});return i(l.prototype,{clear:function(){for(var e=m(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[d]=0},delete:function(e){var n=m(this,t),r=v(n,e);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(e){m(this,t);for(var n,r=a(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(m(this,t),e)}}),p&&r(l.prototype,"size",{get:function(){return m(this,t)[d]}}),l},def:function(e,t,n){var r,o,i=v(e,t);return i?i.v=n:(e._l=i={i:o=h(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[d]++,"F"!==o&&(e._i[o]=i)),e},getEntry:v,setStrong:function(e,t,n){s(e,t,function(e,n){this._t=m(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))},n?"entries":"values",!n,!0),f(t)}}},235:function(e,t,n){"use strict";var r=n(5),o=n(6),i=n(21),a=n(84),u=n(229),c=n(83),s=n(82),l=n(11),f=n(18),p=n(89),h=n(44),m=n(236);e.exports=function(e,t,n,d,v,y){var g=r[e],_=g,E=v?"set":"add",b=_&&_.prototype,w={},T=function(e){var t=b[e];i(b,e,"delete"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!l(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof _&&(y||b.forEach&&!f(function(){(new _).entries().next()}))){var k=new _,x=k[E](y?{}:-0,1)!=k,O=f(function(){k.has(1)}),C=p(function(e){new _(e)}),M=!y&&f(function(){for(var e=new _,t=5;t--;)e[E](t,t);return!e.has(-0)});C||((_=t(function(t,n){s(t,_,e);var r=m(new g,t,_);return null!=n&&c(n,v,r[E],r),r})).prototype=b,b.constructor=_),(O||M)&&(T("delete"),T("has"),v&&T("get")),(M||x)&&T(E),y&&b.clear&&delete b.clear}else _=d.getConstructor(t,e,v,E),a(_.prototype,n),u.NEED=!0;return h(_,e),w[e]=_,o(o.G+o.W+o.F*(_!=g),w),y||d.setStrong(_,e,v),_}},236:function(e,t,n){var r=n(11),o=n(237).set;e.exports=function(e,t,n){var i,a=t.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(e,i),e}},237:function(e,t,n){var r=n(11),o=n(12),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(20)(Function.call,n(238).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},238:function(e,t,n){var r=n(87),o=n(58),i=n(43),a=n(86),u=n(29),c=n(85),s=Object.getOwnPropertyDescriptor;t.f=n(17)?s:function(e,t){if(e=i(e),t=a(t,!0),c)try{return s(e,t)}catch(e){}if(u(e,t))return o(!r.f.call(e,t),e[t])}},239:function(e,t,n){"use strict";var r=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(199)),i=r(n(200)),a=r(n(201)),u=r(n(202)),c=r(n(203)),s=r(n(0)),l=(r(n(4)),n(167)),f=(r(n(232)),function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return this.props.children}}]),t}(s.default.Component));f.propTypes={},f.propTypes={},f.defaultProps={children:null};var p=(0,l.withStyles)(function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},body:{margin:0,backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}}}}},{name:"MuiCssBaseline"})(f);t.default=p}}]);
//# sourceMappingURL=component---src-pages-page-2-js-56411a3deaa5f75ff882.js.map