(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(t,r){!function(r){"use strict";var n,e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,h=r.regeneratorRuntime;if(h)s&&(t.exports=h);else{(h=r.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",l="suspendedYield",p="executing",v="completed",g={},y={};y[u]=function(){return this};var m=Object.getPrototypeOf,d=m&&m(m(R([])));d&&d!==e&&o.call(d,u)&&(y=d);var b=E.prototype=L.prototype=Object.create(y);_.prototype=b.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},h.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[a]=function(){return this},h.AsyncIterator=k,h.async=function(t,r,n,e){var o=new k(w(t,r,n,e));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(b),b[c]="Generator",b[u]=function(){return this},b.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},h.values=R,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,o){return a.type="throw",a.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return e("end");if(u.tryLoc<=this.prev){var c=o.call(u,"catchLoc"),s=o.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return e(u.catchLoc,!0);if(this.prev<u.finallyLoc)return e(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return e(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return e(u.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:R(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),g}}}function w(t,r,n,e){var o=r&&r.prototype instanceof L?r:L,i=Object.create(o.prototype),u=new N(e||[]);return i._invoke=function(t,r,n){var e=f;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw i;return G()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=j(u,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===f)throw e=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=p;var c=x(t,r,n);if("normal"===c.type){if(e=n.done?v:l,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(e=v,n.method="throw",n.arg=c.arg)}}}(t,n,u),i}function x(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}function L(){}function _(){}function E(){}function O(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function k(t){var r;this._invoke=function(n,e){function i(){return new Promise(function(r,i){!function r(n,e,i,u){var a=x(t[n],t,e);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,u)},function(t){r("throw",t,i,u)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},u)}u(a.arg)}(n,e,r,i)})}return r=r?r.then(i,i):i()}}function j(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,j(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function R(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=n,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},213:function(t,r,n){t.exports=n(393)},214:function(t,r){function n(t,r,n,e,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?r(c):Promise.resolve(c).then(e,o)}t.exports=function(t){return function(){var r=this,e=arguments;return new Promise(function(o,i){var u=t.apply(r,e);function a(t){n(u,o,i,a,c,"next",t)}function c(t){n(u,o,i,a,c,"throw",t)}a(void 0)})}}},215:function(t,r){if(!n)var n={map:function(t,r){var n={};return r?t.map(function(t,e){return n.index=e,r.call(n,t)}):t.slice()},naturalOrder:function(t,r){return t<r?-1:t>r?1:0},sum:function(t,r){var n={};return t.reduce(r?function(t,e,o){return n.index=o,t+r.call(n,e)}:function(t,r){return t+r},0)},max:function(t,r){return Math.max.apply(null,r?n.map(t,r):t)}};var e=function(){var t=5,r=8-t,e=1e3,o=.75;function i(r,n,e){return(r<<2*t)+(n<<t)+e}function u(t){var r=[],n=!1;function e(){r.sort(t),n=!0}return{push:function(t){r.push(t),n=!1},peek:function(t){return n||e(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return n||e(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return n||e(),r}}}function a(t,r,n,e,o,i,u){this.r1=t,this.r2=r,this.g1=n,this.g2=e,this.b1=o,this.b2=i,this.histo=u}function c(){this.vboxes=new u(function(t,r){return n.naturalOrder(t.vbox.count()*t.vbox.volume(),r.vbox.count()*r.vbox.volume())})}function s(t,r){if(r.count()){var e=r.r2-r.r1+1,o=r.g2-r.g1+1,u=r.b2-r.b1+1,a=n.max([e,o,u]);if(1==r.count())return[r.copy()];var c,s,h,f,l=0,p=[],v=[];if(a==e)for(c=r.r1;c<=r.r2;c++){for(f=0,s=r.g1;s<=r.g2;s++)for(h=r.b1;h<=r.b2;h++)f+=t[i(c,s,h)]||0;l+=f,p[c]=l}else if(a==o)for(c=r.g1;c<=r.g2;c++){for(f=0,s=r.r1;s<=r.r2;s++)for(h=r.b1;h<=r.b2;h++)f+=t[i(s,c,h)]||0;l+=f,p[c]=l}else for(c=r.b1;c<=r.b2;c++){for(f=0,s=r.r1;s<=r.r2;s++)for(h=r.g1;h<=r.g2;h++)f+=t[i(s,h,c)]||0;l+=f,p[c]=l}return p.forEach(function(t,r){v[r]=l-t}),g(a==e?"r":a==o?"g":"b")}function g(t){var n,e,o,i,u,a=t+"1",s=t+"2",h=0;for(c=r[a];c<=r[s];c++)if(p[c]>l/2){for(o=r.copy(),i=r.copy(),u=(n=c-r[a])<=(e=r[s]-c)?Math.min(r[s]-1,~~(c+e/2)):Math.max(r[a],~~(c-1-n/2));!p[u];)u++;for(h=v[u];!h&&p[u-1];)h=v[--u];return o[s]=u,i[a]=o[s]+1,[o,i]}}}return a.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var r=this.histo;if(!this._count_set||t){var n,e,o,u=0;for(n=this.r1;n<=this.r2;n++)for(e=this.g1;e<=this.g2;e++)for(o=this.b1;o<=this.b2;o++)u+=r[i(n,e,o)]||0;this._count=u,this._count_set=!0}return this._count},copy:function(){return new a(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(r){var n=this.histo;if(!this._avg||r){var e,o,u,a,c=0,s=1<<8-t,h=0,f=0,l=0;for(o=this.r1;o<=this.r2;o++)for(u=this.g1;u<=this.g2;u++)for(a=this.b1;a<=this.b2;a++)c+=e=n[i(o,u,a)]||0,h+=e*(o+.5)*s,f+=e*(u+.5)*s,l+=e*(a+.5)*s;this._avg=c?[~~(h/c),~~(f/c),~~(l/c)]:[~~(s*(this.r1+this.r2+1)/2),~~(s*(this.g1+this.g2+1)/2),~~(s*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var n=t[0]>>r;return gval=t[1]>>r,bval=t[2]>>r,n>=this.r1&&n<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},c.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,n=0;n<r.size();n++)if(r.peek(n).vbox.contains(t))return r.peek(n).color;return this.nearest(t)},nearest:function(t){for(var r,n,e,o=this.vboxes,i=0;i<o.size();i++)((n=Math.sqrt(Math.pow(t[0]-o.peek(i).color[0],2)+Math.pow(t[1]-o.peek(i).color[1],2)+Math.pow(t[2]-o.peek(i).color[2],2)))<r||void 0===r)&&(r=n,e=o.peek(i).color);return e},forcebw:function(){var t=this.vboxes;t.sort(function(t,r){return n.naturalOrder(n.sum(t.color),n.sum(r.color))});var r=t[0].color;r[0]<5&&r[1]<5&&r[2]<5&&(t[0].color=[0,0,0]);var e=t.length-1,o=t[e].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[e].color=[255,255,255])}},{quantize:function(h,f){if(!h.length||f<2||f>256)return!1;var l=function(n){var e,o,u,a,c=new Array(1<<3*t);return n.forEach(function(t){o=t[0]>>r,u=t[1]>>r,a=t[2]>>r,e=i(o,u,a),c[e]=(c[e]||0)+1}),c}(h);l.forEach(function(){});var p=function(t,n){var e,o,i,u=1e6,c=0,s=1e6,h=0,f=1e6,l=0;return t.forEach(function(t){e=t[0]>>r,o=t[1]>>r,i=t[2]>>r,e<u?u=e:e>c&&(c=e),o<s?s=o:o>h&&(h=o),i<f?f=i:i>l&&(l=i)}),new a(u,c,s,h,f,l,n)}(h,l),v=new u(function(t,r){return n.naturalOrder(t.count(),r.count())});function g(t,r){for(var n,o=1,i=0;i<e;)if((n=t.pop()).count()){var u=s(l,n),a=u[0],c=u[1];if(!a)return;if(t.push(a),c&&(t.push(c),o++),o>=r)return;if(i++>e)return}else t.push(n),i++}v.push(p),g(v,o*f);for(var y=new u(function(t,r){return n.naturalOrder(t.count()*t.volume(),r.count()*r.volume())});v.size();)y.push(v.pop());g(y,f-y.size());for(var m=new c;y.size();)m.push(y.pop());return m}}}();t.exports=e.quantize},393:function(t,r,n){var e=function(){return this}()||Function("return this")(),o=e.regeneratorRuntime&&Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime")>=0,i=o&&e.regeneratorRuntime;if(e.regeneratorRuntime=void 0,t.exports=n(212),o)e.regeneratorRuntime=i;else try{delete e.regeneratorRuntime}catch(t){e.regeneratorRuntime=void 0}}}]);
//# sourceMappingURL=2-88b4444a48da151b792b.js.map