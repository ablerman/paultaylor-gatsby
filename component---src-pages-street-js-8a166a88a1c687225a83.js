(window.webpackJsonp=window.webpackJsonp||[]).push([[30,4],{151:function(t,a,e){"use strict";e.r(a);e(41);var o=e(8),n=e.n(o),l=e(55),r=e.n(l),p=e(0),i=e.n(p),s=e(167),c=e(224),h=e(170),u=e(168),f=e(180),g=e(196),m=e(197),d=e(190),S=function(t){function a(){for(var a,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(a=t.call.apply(t,[this].concat(o))||this).closeCarousel=function(){var t=Object(h.h)(null,["props","location","pathname"],r()(r()(a)));Object(u.navigate)(t)},a.renderContent=function(){var t=Object(c.parse)(a.props.location.search);return void 0!==t.image?i.a.createElement(m.a,{photos:d.a,currentPhoto:t.image,onClose:a.closeCarousel,location:a.props.location}):i.a.createElement(g.a,{title:"Street",photos:d.a})},a}return n()(a,t),a.prototype.render=function(){return i.a.createElement(f.a,{location:this.props.location},this.renderContent())},a}(i.a.Component);a.default=Object(s.withStyles)(function(t){var a;return{root:(a={},a[t.breakpoints.up("md")]={marginLeft:"255px"},a)}})(S)},168:function(t,a,e){"use strict";e.r(a),e.d(a,"graphql",function(){return m}),e.d(a,"StaticQueryContext",function(){return f}),e.d(a,"StaticQuery",function(){return g});var o=e(0),n=e.n(o),l=e(4),r=e.n(l),p=e(169),i=e.n(p);e.d(a,"Link",function(){return i.a}),e.d(a,"withPrefix",function(){return p.withPrefix}),e.d(a,"navigate",function(){return p.navigate}),e.d(a,"push",function(){return p.push}),e.d(a,"replace",function(){return p.replace}),e.d(a,"navigateTo",function(){return p.navigateTo});var s=e(27);e.d(a,"waitForRouteChange",function(){return s.c});var c=e(172),h=e.n(c);e.d(a,"PageRenderer",function(){return h.a});var u=e(40);e.d(a,"parsePath",function(){return u.a});var f=n.a.createContext({}),g=function(t){return n.a.createElement(f.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},172:function(t,a,e){var o;t.exports=(o=e(195))&&o.default||o},173:function(t,a,e){"use strict";var o=e(223),n=e.n(o),l=function(){function t(){this.width=0,this.height=0,this.imageData=null}var a=t.prototype;return a.getDataFromEl=function(t){this.width=t.width,this.height=t.height;var a=document.createElement("canvas"),e=a.getContext("2d");document.body.appendChild(a),a.width=this.width,a.height=this.height,e.drawImage(t,0,0),this.imageData=e.getImageData(0,0,this.width,this.height);var o=this.buildPixels();return a.parentNode.removeChild(a),o},a.buildPixels=function(){for(var t=[],a=0;a<this.getPixelCount();a++){var e=this.imageData.data[4*a+0],o=this.imageData.data[4*a+1],n=this.imageData.data[4*a+2];this.imageData.data[4*a+3]<15||(e>250&&o>250&&n>250||t.push([e,o,n]))}return t},a.getPixelCount=function(){return this.width*this.height},t}();l.getPaletteFromIMG=function(t){var a=(new l).getDataFromEl(t);return n()(a,8).palette()},l.RGBtoHSL=function(t,a,e){var o=null,n=null;t/=255,a/=255,e/=255;var l,r=Math.max(t,a,e),p=Math.min(t,a,e),i=r-p;if(0===i)l=0;else switch(r){case t:n=0,(o=(a-e)/i)<0&&(n=6),l=o+n;break;case a:l=(o=(e-t)/i)+(n=2);break;case e:l=(o=(t-a)/i)+(n=4)}return[l*=60,(r-p)/(1-Math.abs(r+p-1)),(r+p)/2]};var r=l;a.a=r},177:function(t,a,e){"use strict";(function(t,o){e.d(a,"a",function(){return i});e(80),e(56),e(79),e(206);var n=e(208),l=e(167),r=Object(l.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}}});function p(){return{theme:r,sheetsManager:new Map,sheetsRegistry:new n.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function i(){return t.browser?(o.__INIT_MATERIAL_UI__||(o.__INIT_MATERIAL_UI__=p()),o.__INIT_MATERIAL_UI__):p()}}).call(this,e(205),e(204))},180:function(t,a,e){"use strict";var o=e(8),n=e.n(o),l=e(0),r=e.n(l),p=e(4),i=e.n(p),s=e(167),c=e(207),h=e.n(c),u=e(177);var f=function(t){var a=function(a){function e(t){var e;return(e=a.call(this,t)||this).muiPageContext=null,e.muiPageContext=t.muiPageContext||Object(u.a)(),e}n()(e,a);var o=e.prototype;return o.componentDidMount=function(){var t=document.querySelector("#server-side-jss");t&&t.parentNode&&t.parentNode.removeChild(t)},o.render=function(){return r.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},r.a.createElement(h.a,null),r.a.createElement(t,this.props))},e}(r.a.Component);return a.propTypes={muiPageContext:i.a.object},a},g=e(170),m=e(168),d=e(178),S=e.n(d),j=e(179),v=e.n(j),y=e(209),w=e.n(y),b=e(185),x=e(171),k=e.n(x),C=e(182).a,E=e(183).a,P=e(184).a,T=e(186),O=function(t){function a(a){var e;return(e=t.call(this,a)||this).onOpen=function(){e.setState({drawerOpen:!0})},e.onClose=function(){e.setState({drawerOpen:!1})},e.state={drawerOpen:!1},e}return n()(a,t),a.prototype.render=function(){var t=this,a={fill:"black"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{open:this.state.drawerOpen,onClose:this.onClose},r.a.createElement("div",{className:this.props.classes.drawer},r.a.createElement("a",{href:Object(m.withPrefix)("/"),style:{textDecoration:"none"}},r.a.createElement("h1",{style:{color:"black",textAlign:"center",marginBottom:0}},"Paul Taylor")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(S.a,{component:T.a,to:"https://www.instagram.com/thisispaultaylor"},r.a.createElement(b.a,{style:a})),r.a.createElement(S.a,{component:T.a,to:"https://thisispaultaylor.instagram.com"},r.a.createElement(b.b,{style:a})),r.a.createElement(S.a,{component:T.a,to:"mailto://hello@thisispayltaylor.com"},r.a.createElement(w.a,{style:a})))),r.a.createElement(C,{onMenuClick:function(){return t.onClose()},location:this.props.location})),r.a.createElement("div",null,r.a.createElement(P,{onOpen:this.onOpen},r.a.createElement(S.a,{className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(v.a,null),r.a.createElement(k.a,{variant:"title",color:"inherit"},"PaulTaylor"))),r.a.createElement("div",{className:this.props.classes.root},this.props.children)))},a}(r.a.Component);O.defaultProps={},O.propTypes={location:i.a.object,children:i.a.any};var N=Object(g.a)(f,Object(s.withStyles)(function(t){var a;return{root:(a={},a[t.breakpoints.up("md")]={position:"relative",left:"255px",width:"calc(100vw - 255px)"},a),drawer:{paddingTop:"20px"}}}))(O);a.a=N},182:function(t,a,e){"use strict";e(210),e(52);var o=e(0),n=e.n(o),l=e(4),r=e.n(l),p=e(167),i=e(170),s=e(168),c=e(211),h=e.n(c),u=e(216),f=e.n(u),g=e(217),m=e.n(g),d=e(212),S=e.n(d),j=e(171),v=e.n(j),y=e(175),w=e.n(y),b=e(194),x=function(t){var a=function(){t.onMenuClick&&t.onMenuClick()},e=function(e){var o,l=Object(i.h)(null,["location","pathname"],t),r=e.location+"/index.html",p=w()(t.classes.root,((o={})[t.classes.active]=Object(s.withPrefix)(l)===r,o));return n.a.createElement(n.a.Fragment,{key:e.name},n.a.createElement(v.a,null,n.a.createElement(S.a,{component:s.Link,to:e.location+"/index.html",onClick:a,className:p},e.name)),function(e){var o=[t.classes.root,t.classes.list];if(e.length)return n.a.createElement(h.a,{dense:!0,className:o.join(" ")},e.map(function(e){var o,l=Object(i.h)(null,["location","pathname"],t),r=e.location+"/index.html",p=w()(t.classes.root,((o={})[t.classes.active]=Object(s.withPrefix)(l)===r,o));return n.a.createElement(f.a,{key:e.name,className:t.classes.listItem},n.a.createElement(m.a,null,n.a.createElement(S.a,{component:s.Link,to:e.location+"/index.html",onClick:a,className:p},e.name)))}))}(e.children))};return n.a.createElement("div",null,b.a.map(function(t){return e(t)}))};x.defaultProps={},x.propTypes={onMenuClick:r.a.func},a.a=Object(p.withStyles)(function(t){return{root:{fontFamily:"Abel, sans-serif"},list:{paddingTop:0,paddingBottom:0},listItem:{padding:"0 24px"},active:{fontWeight:"bolder"}}})(x)},183:function(t,a,e){"use strict";var o=e(0),n=e.n(o),l=e(167),r=e(193),p=e.n(r),i=e(218),s=e.n(i);a.a=Object(l.withStyles)({root:{}},{withTheme:!0})(function(t){var a=t.classes,e=t.theme;return n.a.createElement("div",{className:a.root},n.a.createElement(p.a,{mdUp:!0},n.a.createElement(s.a,{variant:"temporary",anchor:"rtl"===e.direction?"right":"left",open:t.open,onClose:t.onClose,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},t.children)),n.a.createElement(p.a,{smDown:!0,implementation:"css"},n.a.createElement(s.a,{variant:"permanent",open:!0,classes:{paper:a.drawerPaper}},t.children)))})},184:function(t,a,e){"use strict";var o=e(0),n=e.n(o),l=e(167),r=e(219),p=e.n(r),i=e(220),s=e.n(i),c=e(193),h=e.n(c),u=e(178),f=e.n(u),g=e(179),m=e.n(g),d=e(171),S=e.n(d),j=function(t){return n.a.createElement("div",{className:t.classes.root},n.a.createElement(h.a,{mdUp:!0,implementation:"css"},n.a.createElement(p.a,{position:"static",color:"default"},n.a.createElement(s.a,null,n.a.createElement(f.a,{className:t.classes.menuButton,color:"inherit","aria-label":"Menu",onClick:t.onOpen},n.a.createElement(m.a,null)),n.a.createElement(S.a,{variant:"title",color:"inherit",className:t.classes.flex},"Paul Taylor")))))};j.defaultProps={},j.propTypes={},a.a=Object(l.withStyles)(function(t){return{root:{fontFamily:"Abel, sans-serif",flex:{flexGrow:1}},flex:{flexGrow:1},menuButton:{}}})(j)},185:function(t,a,e){"use strict";var o=e(0),n=e.n(o),l=e(181),r=e.n(l);var p=function(t){return n.a.createElement(r.a,t,n.a.createElement("path",{d:"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}))},i=function(t){return n.a.createElement(r.a,t,n.a.createElement("path",{d:"M17,11H13V15.5C13,16.44 13.28,17 14.5,17H17V21C17,21 15.54,21.05 14.17,21.05C10.8,21.05 9.5,19 9.5,16.75V11H7V7C10.07,6.74 10.27,4.5 10.5,3H13V7H17"}))};e.d(a,"a",function(){return p}),e.d(a,"b",function(){return i})},186:function(t,a,e){"use strict";e(39);var o=e(0),n=e.n(o),l=function(t){return n.a.createElement("a",Object.assign({},t,{href:t.to}),t.children)};a.a=l},187:function(t,a,e){"use strict";a.a=[{path:"/portfolio/events/alexa/alexa01.jpg",alt:"alexa01",colSpan:6},{path:"/portfolio/events/alexa/alexa02.jpg",alt:"alexa02",colSpan:6},{path:"/portfolio/events/alexa/alexa03.jpg",alt:"alexa03",colSpan:6},{path:"/portfolio/events/alexa/alexa04.jpg",alt:"alexa04",colSpan:6},{path:"/portfolio/events/alexa/alexa05.jpg",alt:"alexa05",colSpan:6},{path:"/portfolio/events/alexa/alexa06.jpg",alt:"alexa06",colSpan:6},{path:"/portfolio/events/alexa/alexa07.jpg",alt:"alexa07",colSpan:6},{path:"/portfolio/events/alexa/alexa08.jpg",alt:"alexa08",colSpan:6},{path:"/portfolio/events/alexa/alexa09.jpg",alt:"alexa09",colSpan:6},{path:"/portfolio/events/alexa/alexa10.jpg",alt:"alexa10",colSpan:6,rowSpan:3},{path:"/portfolio/events/alexa/alexa11.jpg",alt:"alexa11",colSpan:6},{path:"/portfolio/events/alexa/alexa12.jpg",alt:"alexa12",colSpan:6},{path:"/portfolio/events/alexa/alexa13.jpg",alt:"alexa13",colSpan:6},{path:"/portfolio/events/alexa/alexa14.jpg",alt:"alexa14",colSpan:6},{path:"/portfolio/events/alexa/alexa15.jpg",alt:"alexa15",colSpan:6},{path:"/portfolio/events/alexa/alexa16.jpg",alt:"alexa16",colSpan:6},{path:"/portfolio/events/alexa/alexa17.jpg",alt:"alexa17",colSpan:6},{path:"/portfolio/events/alexa/alexa18.jpg",alt:"alexa18",colSpan:6},{path:"/portfolio/events/alexa/alexa19.jpg",alt:"alexa19",colSpan:6},{path:"/portfolio/events/alexa/alexa20.jpg",alt:"alexa20",colSpan:6},{path:"/portfolio/events/alexa/alexa21.jpg",alt:"alexa21",colSpan:6},{path:"/portfolio/events/alexa/alexa22.jpg",alt:"alexa22",colSpan:6},{path:"/portfolio/events/alexa/alexa23.jpg",alt:"alexa23",colSpan:6},{path:"/portfolio/events/alexa/alexa24.jpg",alt:"alexa24",colSpan:6},{path:"/portfolio/events/alexa/alexa25.jpg",alt:"alexa25",colSpan:6},{path:"/portfolio/events/alexa/alexa26.jpg",alt:"alexa26",colSpan:6}]},188:function(t,a,e){"use strict";a.a=[{path:"/portfolio/events/cyo/cyo01.jpg",alt:"CYO 01"},{path:"/portfolio/events/cyo/cyo02.jpg",alt:"CYO 02"},{path:"/portfolio/events/cyo/cyo03.jpg",alt:"CYO 03"},{path:"/portfolio/events/cyo/cyo04.jpg",alt:"CYO 04"},{path:"/portfolio/events/cyo/cyo05.jpg",alt:"CYO 05"},{path:"/portfolio/events/cyo/cyo06.jpg",alt:"CYO 06"},{path:"/portfolio/events/cyo/cyo07.jpg",alt:"CYO 07"},{path:"/portfolio/events/cyo/cyo08.jpg",alt:"CYO 08"},{path:"/portfolio/events/cyo/cyo09.jpg",alt:"CYO 09"},{path:"/portfolio/events/cyo/cyo10.jpg",alt:"CYO 10",rowSpan:2},{path:"/portfolio/events/cyo/cyo11.jpg",alt:"CYO 11"},{path:"/portfolio/events/cyo/cyo12.jpg",alt:"CYO 12"},{path:"/portfolio/events/cyo/cyo13.jpg",alt:"CYO 13"},{path:"/portfolio/events/cyo/cyo14.jpg",alt:"CYO 14"},{path:"/portfolio/events/cyo/cyo16.jpg",alt:"CYO 16"},{path:"/portfolio/events/cyo/cyo15.jpg",alt:"CYO 15",rowSpan:2,colSpan:12},{path:"/portfolio/events/cyo/cyo17.jpg",alt:"CYO 17"},{path:"/portfolio/events/cyo/cyo18.jpg",alt:"CYO 18"},{path:"/portfolio/events/cyo/cyo19.jpg",alt:"CYO 19"},{path:"/portfolio/events/cyo/cyo20.jpg",alt:"CYO 20"},{path:"/portfolio/events/cyo/cyo21.jpg",alt:"CYO 21"},{path:"/portfolio/events/cyo/cyo22.jpg",alt:"CYO 22"},{path:"/portfolio/events/cyo/cyo23.jpg",alt:"CYO 23"},{path:"/portfolio/events/cyo/cyo24.jpg",alt:"CYO 24"},{path:"/portfolio/events/cyo/cyo25.jpg",alt:"CYO 25"}]},189:function(t,a,e){"use strict";a.a=[{path:"/portfolio/places/cathedralCove.jpg",alt:"cathedralCove",colSpan:8},{path:"/portfolio/places/petronas.jpg",alt:"petronas",colSpan:4},{path:"/portfolio/places/tongWithMe.jpg",alt:"tongWithMe",colSpan:7},{path:"/portfolio/places/pier.jpg",alt:"pier",colSpan:5},{path:"/portfolio/places/reflection.jpg",alt:"reflection",colSpan:12,rowSpan:2},{path:"/portfolio/places/ubud.jpg",alt:"ubud",colSpan:8},{path:"/portfolio/places/napier.jpg",alt:"napier",colSpan:4},{path:"/portfolio/places/ghostTower.jpg",alt:"ghostTower",colSpan:7},{path:"/portfolio/places/thaiBoxing.jpg",alt:"thaiBoxing",colSpan:5},{path:"/portfolio/places/redwoods.jpg",alt:"redwoods",colSpan:12,rowSpan:2},{path:"/portfolio/places/thaiMountains.jpg",alt:"thaiMountains",colSpan:7},{path:"/portfolio/places/abelTasman.jpg",alt:"abelTasman",colSpan:5},{path:"/portfolio/places/bangkokApartment.jpg",alt:"bangkokApartment",colSpan:7},{path:"/portfolio/places/market.jpg",alt:"market",colSpan:5},{path:"/portfolio/places/royspeak.jpg",alt:"royspeak",colSpan:12,rowSpan:2},{path:"/portfolio/places/deejai.jpg",alt:"deejai",colSpan:8},{path:"/portfolio/places/skyTower.jpg",alt:"skyTower",colSpan:4},{path:"/portfolio/places/paiCat.jpg",alt:"paiCat",colSpan:7},{path:"/portfolio/places/girlScooter.jpg",alt:"girlScooter",colSpan:5},{path:"/portfolio/places/floatingVillage.jpg",alt:"floatingVillage",colSpan:12,rowSpan:2},{path:"/portfolio/places/aquaWater.jpg",alt:"aquaWater",colSpan:8},{path:"/portfolio/places/airBalloon.jpg",alt:"airBalloon",colSpan:4},{path:"/portfolio/places/gap.jpg",alt:"gap",colSpan:6},{path:"/portfolio/places/auckland.jpg",alt:"auckland",colSpan:6},{path:"/portfolio/places/bangkok.jpg",alt:"bangkok",colSpan:12,rowSpan:2},{path:"/portfolio/places/sapa.jpg",alt:"sapa",colSpan:8},{path:"/portfolio/places/trainMarket.jpg",alt:"trainMarket",colSpan:4},{path:"/portfolio/places/mountManganui.jpg",alt:"mountManganui",colSpan:6},{path:"/portfolio/places/purpleSky.jpg",alt:"purpleSky",colSpan:6},{path:"/portfolio/places/taranaki.jpg",alt:"taranaki",colSpan:12,rowSpan:2},{path:"/portfolio/places/mountCook.jpg",alt:"mountCook",colSpan:8},{path:"/portfolio/places/morocco.jpg",alt:"morocco",colSpan:4},{path:"/portfolio/places/mcgregor.jpg",alt:"mcgregor",colSpan:6},{path:"/portfolio/places/melbournePier.jpg",alt:"melbournePier",colSpan:6},{path:"/portfolio/places/whararikiBeach.jpg",alt:"whararikiBeach",colSpan:12,rowSpan:2}]},190:function(t,a,e){"use strict";a.a=[{path:"/portfolio/street/subwayScream.jpg",alt:"subwayScream",colSpan:4},{path:"/portfolio/street/doubleTake.jpg",alt:"doubleTake",colSpan:4},{path:"/portfolio/street/tourist.jpg",alt:"tourist",colSpan:4,rowSpan:3},{path:"/portfolio/street/rabbiRoad.jpg",alt:"rabbiRoad",colSpan:8,rowSpan:2},{path:"/portfolio/street/stare.jpg",alt:"stare",colSpan:6},{path:"/portfolio/street/ballers.jpg",alt:"ballers",colSpan:6},{path:"/portfolio/street/delight.jpg",alt:"delight",colSpan:4,rowSpan:3},{path:"/portfolio/street/ferry.jpg",alt:"ferry",colSpan:4},{path:"/portfolio/street/commute.jpg",alt:"commute",colSpan:4},{path:"/portfolio/street/bible.jpg",alt:"bible",colSpan:8,rowSpan:2},{path:"/portfolio/street/duane.jpg",alt:"duane",colSpan:6},{path:"/portfolio/street/miami.jpg",alt:"miami",colSpan:6},{path:"/portfolio/street/dosToros.jpg",alt:"dosToros",colSpan:4},{path:"/portfolio/street/vanessas.jpg",alt:"vanessas",colSpan:4},{path:"/portfolio/street/reflected.jpg",alt:"reflected",colSpan:4,rowSpan:3},{path:"/portfolio/street/birds.jpg",alt:"birds",colSpan:8,rowSpan:2},{path:"/portfolio/street/walkingAway.jpg",alt:"walkingAway",colSpan:7},{path:"/portfolio/street/libertyBike.jpg",alt:"libertyBike",colSpan:5},{path:"/portfolio/street/shelborne.jpg",alt:"shelborne",colSpan:4,rowSpan:3},{path:"/portfolio/street/justMarried.jpg",alt:"justMarried",colSpan:4},{path:"/portfolio/street/primary.jpg",alt:"primary",colSpan:4},{path:"/portfolio/street/chinaTown.jpg",alt:"chinaTown",colSpan:8,rowSpan:2},{path:"/portfolio/street/screenLight.jpg",alt:"screenLight",colSpan:6},{path:"/portfolio/street/waiting.jpg",alt:"waiting",colSpan:6},{path:"/portfolio/street/block.jpg",alt:"block",colSpan:4},{path:"/portfolio/street/building.jpg",alt:"building",colSpan:4},{path:"/portfolio/street/flatiron.jpg",alt:"flatiron",colSpan:4,rowSpan:3},{path:"/portfolio/street/manhattanBridge.jpg",alt:"manhattanBridge",colSpan:8,rowSpan:2},{path:"/portfolio/street/silhouette.jpg",alt:"silhouette",colSpan:6},{path:"/portfolio/street/jewish.jpg",alt:"jewish",colSpan:6},{path:"/portfolio/street/break.jpg",alt:"break",colSpan:4,rowSpan:3},{path:"/portfolio/street/basketball.jpg",alt:"basketball",colSpan:4},{path:"/portfolio/street/hat.jpg",alt:"hat",colSpan:4},{path:"/portfolio/street/green.jpg",alt:"green",colSpan:8,rowSpan:2},{path:"/portfolio/street/minettaTavern.jpg",alt:"minettaTavern",colSpan:6},{path:"/portfolio/street/libertyPhone.jpg",alt:"libertyPhone",colSpan:6},{path:"/portfolio/street/breakfast.jpg",alt:"breakfast",colSpan:4},{path:"/portfolio/street/rockawayTowel.jpg",alt:"rockawayTowel",colSpan:4},{path:"/portfolio/street/information.jpg",alt:"information",colSpan:4,rowSpan:3},{path:"/portfolio/street/pigeonGuy.jpg",alt:"pigeonGuy",colSpan:8,rowSpan:2},{path:"/portfolio/street/underground.jpg",alt:"underground",colSpan:6},{path:"/portfolio/street/gnt.jpg",alt:"gnt",colSpan:6}]},191:function(t,a,e){"use strict";a.a=[{path:"/portfolio/music/jurassicPortrait.jpg",alt:"jurassicPortrait",colSpan:4,rowSpan:3},{path:"/portfolio/music/djEZ.jpg",alt:"djEZ",colSpan:4},{path:"/portfolio/music/onemanHideout.jpg",alt:"onemanHideout",colSpan:4},{path:"/portfolio/music/frank.jpg",alt:"frank",colSpan:8,rowSpan:2},{path:"/portfolio/music/ellesseGirl.jpg",alt:"ellesseGirl",colSpan:4},{path:"/portfolio/music/weAreCrowd.jpg",alt:"weAreCrowd",colSpan:4},{path:"/portfolio/music/fanGirl.jpg",alt:"fanGirl",colSpan:4},{path:"/portfolio/music/rodiganSmoke.jpg",alt:"rodiganSmoke",colSpan:6},{path:"/portfolio/music/nozstockCrowd.jpg",alt:"nozstockCrowd",colSpan:6},{path:"/portfolio/music/skreamHideout.jpg",alt:"skreamHideout",colSpan:6},{path:"/portfolio/music/joyOrbison.jpg",alt:"joyOrbison",colSpan:6},{path:"/portfolio/music/andyC.jpg",alt:"andyC",colSpan:4},{path:"/portfolio/music/lunice.jpg",alt:"lunice",colSpan:4},{path:"/portfolio/music/flava.jpg",alt:"flava",colSpan:4,rowSpan:2},{path:"/portfolio/music/stormzy.jpg",alt:"stormzy",colSpan:4},{path:"/portfolio/music/jamBaxter.jpg",alt:"jamBaxter",colSpan:4},{path:"/portfolio/music/wretch32.jpg",alt:"wretch32",colSpan:8},{path:"/portfolio/music/moat.jpg",alt:"moat",colSpan:4},{path:"/portfolio/music/bicep.jpg",alt:"bicep",colSpan:4},{path:"/portfolio/music/sgpPaint.jpg",alt:"sgpPaint",colSpan:4},{path:"/portfolio/music/dimensions.jpg",alt:"dimensions",colSpan:4},{path:"/portfolio/music/ritaDance.jpg",alt:"ritaDance",colSpan:4},{path:"/portfolio/music/JoeyBadass.jpg",alt:"JoeyBadass",colSpan:4},{path:"/portfolio/music/rudimentalThree.jpg",alt:"rudimentalThree",colSpan:4},{path:"/portfolio/music/kelisPortrait.jpg",alt:"kelisPortrait",colSpan:4,rowSpan:3},{path:"/portfolio/music/actionBronson.jpg",alt:"actionBronson",colSpan:4},{path:"/portfolio/music/oceanWisdom.jpg",alt:"oceanWisdom",colSpan:4},{path:"/portfolio/music/jonHopkins.jpg",alt:"jonHopkins",colSpan:8,rowSpan:2},{path:"/portfolio/music/skream.jpg",alt:"skream",colSpan:4},{path:"/portfolio/music/premier.jpg",alt:"premier",colSpan:4},{path:"/portfolio/music/planB.jpg",alt:"planB",colSpan:4},{path:"/portfolio/music/asap.jpg",alt:"asap",colSpan:6,rowSpan:2},{path:"/portfolio/music/killerMike.jpg",alt:"killerMike",colSpan:6,rowSpan:2},{path:"/portfolio/music/bar.jpg",alt:"bar",colSpan:6,rowSpan:2},{path:"/portfolio/music/handshake.jpg",alt:"handshake",colSpan:6,rowSpan:2},{path:"/portfolio/music/darius.jpg",alt:"darius",colSpan:4},{path:"/portfolio/music/robertPlant.jpg",alt:"robertPlant",colSpan:4},{path:"/portfolio/music/soulClap.jpg",alt:"soulClap",colSpan:4,rowSpan:3},{path:"/portfolio/music/jrocc.jpg",alt:"jrocc",colSpan:8,rowSpan:2},{path:"/portfolio/music/shoulders.jpg",alt:"shoulders",colSpan:4},{path:"/portfolio/music/loveboxCrowd.jpg",alt:"loveboxCrowd",colSpan:4},{path:"/portfolio/music/parklifeCrowd.jpg",alt:"parklifeCrowd",colSpan:4},{path:"/portfolio/music/paloma.jpg",alt:"paloma",colSpan:6},{path:"/portfolio/music/paak.jpg",alt:"paak",colSpan:6},{path:"/portfolio/music/kelis.jpg",alt:"kelis",colSpan:6},{path:"/portfolio/music/example.jpg",alt:"example",colSpan:6},{path:"/portfolio/music/gunshots.jpg",alt:"gunshots",colSpan:4},{path:"/portfolio/music/baauer.jpg",alt:"baauer",colSpan:4},{path:"/portfolio/music/hands.jpg",alt:"hands",colSpan:4},{path:"/portfolio/music/rita.jpg",alt:"rita",colSpan:4,rowSpan:3},{path:"/portfolio/music/ellie.jpg",alt:"ellie",colSpan:4},{path:"/portfolio/music/jurassic5.jpg",alt:"jurassic5",colSpan:4},{path:"/portfolio/music/joey.jpg",alt:"joey",colSpan:8,rowSpan:2},{path:"/portfolio/music/heidi.jpg",alt:"heidi",colSpan:4},{path:"/portfolio/music/daniel.jpg",alt:"daniel",colSpan:4},{path:"/portfolio/music/dj.jpg",alt:"dj",colSpan:4},{path:"/portfolio/music/dangelo.jpg",alt:"dangelo",colSpan:6},{path:"/portfolio/music/tinchy.jpg",alt:"tinchy",colSpan:6},{path:"/portfolio/music/stormzyUp.jpg",alt:"stormzyUp",colSpan:6},{path:"/portfolio/music/damien.jpg",alt:"damien",colSpan:6},{path:"/portfolio/music/guitar.jpg",alt:"guitar",colSpan:4},{path:"/portfolio/music/evolutionCrowd.jpg",alt:"evolutionCrowd",colSpan:4},{path:"/portfolio/music/charlie.jpg",alt:"charlie",colSpan:4,rowSpan:3},{path:"/portfolio/music/daughter.jpg",alt:"daughter",colSpan:8,rowSpan:2},{path:"/portfolio/music/vaccines.jpg",alt:"vaccines",colSpan:4},{path:"/portfolio/music/jake.jpg",alt:"jake",colSpan:4},{path:"/portfolio/music/aluna.jpg",alt:"aluna",colSpan:4}]},192:function(t,a,e){"use strict";a.a=[{path:"clients/amazon.jpg",alt:"Amazon"},{path:"clients/cyo.jpg",alt:"CYO"},{path:"clients/eggland.jpg",alt:"Eggland"},{path:"clients/hulu.jpg",alt:"hulu"},{path:"clients/krazyglue.png",alt:"KrazyGlue"},{path:"clients/natgeo.png",alt:"NationalGeographic"},{path:"clients/netflix.png",alt:"Netflix"},{path:"clients/panasonic.png",alt:"Panaasonic"},{path:"clients/panerabread.jpg",alt:"PaneraBread"},{path:"clients/petsmart.jpg",alt:"Petsmart"},{path:"clients/purina.png",alt:"Purina"},{path:"clients/silk.jpg",alt:"Silk"},{path:"clients/sonic.png",alt:"Sonic"},{path:"clients/unicef.png",alt:"Unicef"},{path:"clients/wetv.jpg",alt:"WE TV"}]},194:function(t,a,e){"use strict";var o=e(187),n=[{path:"/portfolio/events/alexa/alexa02.jpg",alt:"Amazon 02",label:"Amazon Alexa // Smartlife Roadshow",to:"/events/amazon"},{path:"/portfolio/events/cyo/cyo03-2.jpg",alt:"CYO",label:"CYO // Press Evening",to:"/events/cyo"},{path:"/portfolio/events/hulu/hulu06.jpg",alt:"Hulu",label:"Hulu // Agency Presentation",to:"/events/hulu"},{path:"/portfolio/events/krazyGlue/krazyGlue19.jpg",alt:"Krazy Glue",label:"Krazy Glue // Pop-up Store",to:"/events/krazy_glue"},{path:"/portfolio/events/lostInSpace/lostInSpace05.jpg",alt:"LostInSpace",label:"Netflix // Lost in Space Launch",to:"/events/lost_in_space"},{path:"/portfolio/events/narcos/narcos03.jpg",alt:"Netflix: Narcos",label:"Netflix // Narcos Season 3 Launch",to:"/events/narcos"},{path:"/portfolio/events/natGeo/natgeo25-2.jpg",alt:"Nat Geo",label:"National Geographic // One Strange Rock",to:"/events/national_geographic"},{path:"/portfolio/events/panera/panera05.jpg",alt:"Panera Bread",label:"Panera Bread // Breakfast Sandwich Launch",to:"/events/panera"},{path:"/portfolio/events/petSmart/petsmart12.jpg",alt:"Pet Smart & Purina",label:"Pet Smart & Purina // Save a Fortune",to:"/events/pet_smart_and_purina"},{path:"/portfolio/events/rossana/rossana21.jpg",alt:"Rosanna Pansino",label:"Rosanna Pansino // Road Trip",to:"/events/rosanna_pansino"},{path:"/portfolio/events/silk/silk15.jpg",alt:"Silk",label:" Silk // Pedal for Progress",to:"/events/silk"},{path:"/portfolio/events/sonic/sonic15-2.jpg",alt:"Sonic",label:"Sonic Slingers // Food Truck",to:"/events/sonic"},{path:"/portfolio/events/unicefTrick/unicefTrick07.jpg",alt:"Unicef Trick or Treat",label:"Unicef // Trick or Treat",to:"/events/trick_or_treat"},{path:"/portfolio/events/unicefWater/unicefWater23.jpg",alt:"Unicef",label:"Unicef // Water is Unfair",to:"/events/water_is_unfair"},{path:"/portfolio/events/weTV/weTV12.jpg",alt:"we TV",label:"WE TV // Juice Bar",to:"/events/we_tv"}],l=e(188),r=e(189),p=e(190),i=e(191),s=e(192),c=e(214),h=e.n(c),u=e(215),f=e.n(u),g=function(t,a,e){for(var o=[],n=1;n<=e;n++){var l=h()(n).format("00"),r={path:"/portfolio/events/"+t+"/"+a+l+".jpg",alt:f()(t)+" "+l};o.push(r)}return o},m=[{name:"events",location:"/events",photos:n,children:[{name:"Amazon",title:"Amazon Alexa // Smartlife Roadshow",location:"/events/amazon",photos:o.a},{name:"CYO",location:"/events/cyo",photos:l.a},{name:"Hulu",location:"/events/hulu",photos:g("hulu","hulu",29)},{name:"Krazy Glue",location:"/events/krazy_glue",photos:g("krazyGlue","krazyGlue",28)},{name:"Lost In Space",location:"/events/lost_in_space",photos:g("lostInSpace","lostInSpace",36)},{name:"Narcos",location:"/events/narcos",photos:g("narcos","narcos",27)},{name:"National Geographic",location:"/events/national_geographic",photos:g("natGeo","natgeo",31)},{name:"Panera",location:"/events/panera",photos:g("panera","panera",34)},{name:"Pet Smart & Purina",location:"/events/pet_smart_and_purina",photos:g("petSmart","petsmart",33)},{name:"Rossana Pansino",location:"/events/rossana_pansino",photos:g("rossana","rossana",22)},{name:"Silk",location:"/events/silk",photos:g("silk","silk",36)},{name:"Sonic",location:"/events/sonic",photos:g("sonic","sonic",46)},{name:"Trick or Treat",location:"/events/trick_or_treat",photos:g("unicefTrick","unicefTrick",34)},{name:"Water is Unfair",location:"/events/water_is_unfair",photos:g("unicefWater","unicefWater",45)},{name:"WE tv",location:"/events/we_tv",photos:g("weTV","weTV",26)}]},{name:"places",location:"/places",children:[],photos:r.a},{name:"music",location:"/music",children:[],photos:i.a},{name:"street",location:"/street",children:[],photos:p.a},{name:"clients",location:"/clients",children:[],photos:s.a},{name:"contact",location:"/contact",children:[],photos:[]}];a.a=m},195:function(t,a,e){"use strict";e.r(a);e(39);var o=e(0),n=e.n(o),l=e(4),r=e.n(l),p=e(57),i=e(1),s=function(t){var a=t.location,e=i.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(p.a,Object.assign({key:a.pathname,location:a,pageResources:e},e.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=s},196:function(t,a,e){"use strict";e(52);var o=e(8),n=e.n(o),l=e(0),r=e.n(l),p=e(4),i=e.n(p),s=e(167),c=function(t){return r.a.createElement("div",{className:t.classes.masonryContainer},t.children)};c.defaultProps={},c.propTypes={};var h=Object(s.withStyles)(function(t){var a;return{masonryContainer:(a={display:"grid",columnGap:"10px",rowGap:"10px",gridTemplateColumns:"repeat(1, 1fr)",gridAutoRows:"auto"},a[t.breakpoints.up("md")]={gridTemplateColumns:"repeat(12, 1fr)"},a)}})(c),u=function(t){var a={gridRowEnd:t.rowSpan,gridColumnEnd:t.colSpan};return r.a.createElement("div",{className:t.classes.panel,style:a},r.a.createElement("div",{className:t.classes.content},t.children))};u.defaultProps={rowSpan:"auto",colSpan:"auto"},u.propTypes={rowSpan:i.a.string,colSpan:i.a.string};var f=Object(s.withStyles)(function(t){var a;return{panel:(a={breakInside:"avoid",fontSize:0},a[t.breakpoints.up("md")]={gridColumnStart:"auto",gridRowStart:"auto"},a),content:{overflow:"hidden",width:"100%",height:"100%"}}})(u),g=(e(78),e(221)),m=e.n(g),d=(e(213),e(222)),S=e.n(d),j=e(168),v=e(170),y=e(173),w=function(t){function a(a){var e;return(e=t.call(this,a)||this).onImageLoaded=function(){var t=S()(m.a.mark(function t(a){var o,n,l,r,p;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.label){t.next=2;break}return t.abrupt("return");case 2:o=y.a.getPaletteFromIMG(a.target),n=o[0],(l=y.a.RGBtoHSL(n[0],n[1],n[2]))[1]=100*l[1],l[2]=(100*l[2]+50)%100,r="rgb("+n[0]+", "+n[1]+", "+n[2]+")",p="hsl("+l[0]+", "+l[1]+"%, "+l[2]+"%)",e.setState({backgroundColor:r,color:p,opacity:.9});case 10:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),e.renderPhoto=function(){return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},r.a.createElement("img",{src:Object(j.withPrefix)(e.props.path),alt:e.props.alt,className:e.props.classes.img,onLoad:function(t){return e.onImageLoaded(t)}}),r.a.createElement("div",{className:e.props.classes.label,style:{opacity:e.state.opacity,backgroundColor:e.state.backgroundColor}},r.a.createElement("span",{className:e.props.classes.labelSpan,style:{color:e.state.color}},e.props.label)))},e.renderLink=function(t){return r.a.createElement("a",{href:Object(j.withPrefix)(e.props.to),alt:e.props.alt},t)},e.renderCarouselLink=function(t){var a=e.props.path.split("/").pop().split(".").shift();if("undefined"!=typeof window){var o=document.location.pathname+"?image="+a;return r.a.createElement("a",{href:o},t)}return null},e.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},e}return n()(a,t),a.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},a}(r.a.Component);w.defaultProps={label:null},w.propTypes={label:i.a.string};var b=Object(v.a)(Object(s.withStyles)(function(t){var a;return{label:(a={position:"absolute",bottom:"0px",width:"100%",fontSize:"1.7vw",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},a[t.breakpoints.down("sm")]={fontSize:"5vw"},a),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",height:"100%",fontSize:"1px"}}}))(w),x=function(t){function a(){for(var a,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(a=t.call.apply(t,[this].concat(o))||this).ref=r.a.createRef(),a.goToTop=function(){a.ref.current.scrollTop=0},a}return n()(a,t),a.prototype.render=function(){var t=this.props.classes;return r.a.createElement("div",{className:t.photoPage,ref:this.ref},r.a.createElement(h,null,this.props.photos.map(function(t){return r.a.createElement(f,{key:t.alt,colSpan:t.colSpan?"span "+t.colSpan:"span 6",rowSpan:t.rowSpan?"span "+t.rowSpan:"auto"},r.a.createElement(b,t))})),r.a.createElement("div",{className:t.backToTopBtn,onClick:this.goToTop},r.a.createElement("h2",{style:{display:"block"}},"back to top")))},a}(r.a.Component);x.defaultProps={title:""},x.propTypes={photos:i.a.array,title:i.a.string};a.a=Object(s.withStyles)(function(t){return{photoPage:{paddingTop:"20px",height:"100vh",overflowY:"auto",backgroundColor:"white"},backToTopBtn:{cursor:"pointer",width:"100%",padding:"20px 0",textAlign:"center","&:hover":{backgroundColor:"darkgray"}}}})(x)},197:function(t,a,e){"use strict";e(225),e(78),e(81);var o=e(8),n=e.n(o),l=e(0),r=e.n(l),p=e(4),i=e.n(p),s=e(167),c=e(168),h=e(170),u=e(228),f=e.n(u),g=e(226),m=e.n(g),d=e(227),S=e.n(d),j=function t(a){var e={height:""+a.height,width:""+a.height};return r.a.createElement("div",{className:a.classes.arrow,style:e},r.a.createElement("div",{style:{display:a.direction===t.LEFT?"block":"none"}},r.a.createElement(m.a,{nativeColor:a.shadowColor,className:a.classes.backIcon}),r.a.createElement(m.a,{nativeColor:a.color,className:a.classes.foreIcon})),r.a.createElement("div",{style:{display:a.direction===t.RIGHT?"block":"none"}},r.a.createElement(S.a,{nativeColor:a.shadowColor,className:a.classes.backIcon}),r.a.createElement(S.a,{nativeColor:a.color,className:a.classes.foreIcon})))};j.LEFT="left",j.RIGHT="right",j.defaultProps={color:"rgba(0, 0, 0, 0)",shadowColor:"rgba(255, 255, 255 ,1)",direction:j.LEFT,height:"120px",edgeDistance:"10px"},j.propTypes={color:i.a.string,shadowColor:i.a.string,direction:i.a.string,height:i.a.string,edgeDistance:i.a.string};var v=Object(s.withStyles)({arrow:{border:"0px",opacity:.7,position:"absolute",margin:0,padding:0,transition:"all 1s","&:hover":{opacity:1}},foreIcon:{position:"absolute",width:"100%",height:"100%"},backIcon:{position:"absolute",width:"100%",height:"100%",transform:"scale(1.5)",filter:"blur(5px)"}})(j),y=e(173),w="Escape",b="ArrowLeft",x="ArrowRight",k="ArrowDown",C="ArrowUp",E=function(t){function a(a){var e;return(e=t.call(this,a)||this).onKeyUp=function(t){"undefined"!=typeof window&&(t.key===w&&e.props.onClose(),t.key===x&&(document.location=e.getNext()),t.key===b&&(document.location=e.getPrev()),t.key===k&&(document.location=e.getNext()),t.key===C&&(document.location=e.getPrev()))},e.onImageLoaded=function(t){var a=y.a.getPaletteFromIMG(t.target)[0],o=y.a.RGBtoHSL(a[0],a[1],a[2]);o[1]=100*o[1],o[2]=(100*o[2]+50)%100;var n="rgb("+a[0]+", "+a[1]+", "+a[2]+")",l="hsl("+o[0]+", "+o[1]+"%, "+o[2]+"%)";e.setState({shadowColor:l,arrowColor:n})},e.getIdx=function(){return Object(h.d)(function(t){return t.path.indexOf(e.props.currentPhoto)>-1},e.props.photos)},e.getOffset=function(t){var a=e.props.photos?e.props.photos.length:0;return(e.getIdx()+a+t)%a},e.getMasonryUrl=function(){return e.props.location.pathname},e.getPrev=function(){var t=e.props.photos[e.getOffset(-1)].path.split("/").pop();return e.props.location.pathname+"?image="+t},e.getNext=function(){var t=e.props.photos[e.getOffset(1)].path.split("/").pop();return e.props.location.pathname+"?image="+t},e.state={arrowColor:"rgba(0, 0, 0, 0)",shadowColor:"rgba(0,0,0,0)"},e}n()(a,t);var e=a.prototype;return e.componentDidMount=function(){document.addEventListener("keyup",this.onKeyUp,!1)},e.componentWillUnmount=function(){document.removeEventListener("keyup",this.onKeyUp,!1)},e.render=function(){var t=this,a=Object(h.c)(function(a){return-1!==a.path.indexOf(t.props.currentPhoto)})(this.props.photos);return r.a.createElement("div",{className:this.props.classes.content},r.a.createElement("img",{src:Object(c.withPrefix)(a.path),alt:this.props.currentPhoto,onLoad:this.onImageLoaded,style:{width:"100%"}}),r.a.createElement("a",{href:this.getPrev(),className:this.props.classes.link,style:{left:0}},r.a.createElement(v,{direction:v.LEFT,color:this.state.arrowColor,shadowColor:this.state.shadowColor})),r.a.createElement("a",{href:this.getNext(),className:this.props.classes.link,style:{right:0}},r.a.createElement(v,{direction:v.RIGHT,color:this.state.arrowColor,shadowColor:this.state.shadowColor})),r.a.createElement("a",{href:this.getMasonryUrl(),className:this.props.classes.masonryLink},r.a.createElement(f.a,{style:{width:"25px",height:"25px",position:"absolute",transform:"scale(1.5)",filter:"blur(5px)"},nativeColor:this.state.arrowColor}),r.a.createElement(f.a,{style:{width:"25px",height:"25px",position:"absolute"},nativeColor:this.state.shadowColor})))},a}(r.a.Component);E.defaultProps={},E.propTypes={currentPhoto:i.a.string,photos:i.a.array,onClose:i.a.func,location:i.a.object};var P=Object(s.withStyles)(function(t){return{content:{position:"relative",width:"100%",overflow:"hidden",padding:"20px 20px 20px 30px"},link:{position:"absolute",width:"150px",height:"100%",top:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},masonryLink:{position:"absolute",width:"50px",height:"50px",top:"15px",left:"25px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer"}}})(E);a.a=P}}]);
//# sourceMappingURL=component---src-pages-street-js-8a166a88a1c687225a83.js.map