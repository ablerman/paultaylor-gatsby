(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{252:function(e,t,n){"use strict";n.r(t);for(var o=n(16),a=n.n(o),r=n(0),i=n.n(r),s=n(256),l=(n(362),n(285)),u=n.n(l),c=n(287),p=n.n(c),m=n(280),d=n.n(m),h=n(264),f=n(266),w=n(273),v=n(272),E=n(369),C=n(259),g=n.n(C),O=[],y=1;y<=29;y++){var b=g()(y).format("00"),k={path:"/portfolio/events/hulu/hulu"+b+".jpg",alt:"Hulu "+b};O.push(k)}var P=O,L=function(e){function t(t){var n;return(n=e.call(this,t)||this).onRouteChange=function(e){console.log(e)},n.onOpen=function(){n.setState({drawerOpen:!0})},n.onClose=function(){n.setState({drawerOpen:!1})},n.renderContent=function(){return void 0!==n.state.queryParams.image?i.a.createElement(E.a,{photos:P,currentPhoto:n.state.queryParams.image}):i.a.createElement(w.a,{title:"Hulu",photos:P})},console.log("construct"),n.state={drawerOpen:!1},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("popstate",this.onRouteChange,!1)},n.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("popstate",this.onRouteChange,!1)},n.render=function(){var e=this,t=this.props.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{open:this.state.drawerOpen,onClose:this.onClose},i.a.createElement(f.a,{onMenuClick:function(){return e.onClose()}})),i.a.createElement("div",null,i.a.createElement(v.a,{onOpen:this.onOpen},i.a.createElement(u.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(p.a,null),i.a.createElement(d.a,{variant:"title",color:"inherit"},"PaulTaylor"))),i.a.createElement("div",{className:this.props.classes.root},this.renderContent())))},t}(i.a.Component);t.default=Object(s.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.up("md")]={marginLeft:"255px"},t)}})(L)}}]);
//# sourceMappingURL=component---src-pages-events-hulu-js-2b4e73a00d931d1fb956.js.map