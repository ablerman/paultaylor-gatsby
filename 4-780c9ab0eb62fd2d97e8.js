(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{258:function(e,t,a){var n;e.exports=(n=a(263))&&n.default||n},260:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),o=a(12),i=a.n(o),s=a(255),p=a.n(s);a.d(t,"Link",function(){return p.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(258),c=a.n(l);a.d(t,"PageRenderer",function(){return c.a});var u=a(46);a.d(t,"parsePath",function(){return u.a});var g=r.a.createContext({}),d=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},261:function(e,t,a){"use strict";var n=a(259),r=a.n(n),o=a(293),i=a.n(o);t.a=function(e,t,a){for(var n=[],o=1;o<=a;o++){var s=r()(o).format("00"),p={path:"/portfolio/events/"+e+"/"+t+s+".jpg",alt:i()(e)+" "+s};n.push(p)}return n}},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),s=a(47),p=a(1),l=function(e){var t=e.location,a=p.a.getResourcesForPathname(t.pathname);return r.a.createElement(s.a,{location:t,pageResources:a})};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},264:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(256),i=a(265),s=a.n(i),p=a(292),l=a.n(p);t.a=Object(o.withStyles)({root:{}},{withTheme:!0})(function(e){var t=e.classes,a=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{mdUp:!0},r.a.createElement(l.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:e.open,onClose:e.onClose,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},e.children)),r.a.createElement(s.a,{smDown:!0,implementation:"css"},r.a.createElement(l.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},e.children)))})},266:function(e,t,a){"use strict";a(281),a(119);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),s=a(294),p=a.n(s),l=a(295),c=a.n(l),u=a(296),g=a.n(u),d=a(282),h=a.n(d),f=a(262),m=a.n(f),j=a(260),v=a(275),b=function(e){var t=function(){e.onMenuClick()};return r.a.createElement("div",null,v.a.map(function(e){return function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(m.a,null,r.a.createElement(h.a,{component:j.Link,to:e.location,onClick:t},e.name)),function(e){if(e.length)return r.a.createElement(p.a,{dense:!0},e.map(function(e){return r.a.createElement(c.a,{key:e.name},r.a.createElement(g.a,null,r.a.createElement(h.a,{component:j.Link,to:e.location,onClick:t},e.name)))}))}(e.children))}(e)}))};b.defaultProps={},b.propTypes={onMenuClick:i.a.func},t.a=b},267:function(e,t,a){"use strict";for(var n=a(259),r=a.n(n),o=[],i=1;i<=26;i++){var s=r()(i).format("00"),p={path:"/portfolio/events/alexa/alexa"+s+".jpg",alt:"Amazon "+s};o.push(p)}t.a=o},268:function(e,t,a){"use strict";for(var n=a(259),r=a.n(n),o=[],i=1;i<=25;i++){var s=r()(i).format("00"),p={path:"/portfolio/events/cyo/cyo"+s+".jpg",alt:"CYO "+s};o.push(p)}t.a=o},269:function(e,t,a){"use strict";a(118);var n=a(257),r=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/places/"+e,alt:e.split(".")[0]}}))(["abelTasman.jpg","airBalloon.jpg","aquaWater.jpg","auckland.jpg","bangkok.jpg","bangkokApartment.jpg","cathedralCove.jpg","deejai.jpg","floatingVillage.jpg","gap.jpg","ghostTower.jpg","girlScooter.jpg","market.jpg","mcgregor.jpg","melbournePier.jpg","morocco.jpg","mountCook.jpg","mountManganui.jpg","napier.jpg","paiCat.jpg","petronas.jpg","pier.jpg","purpleSky.jpg","redwoods.jpg","reflection.jpg","royspeak.jpg","sapa.jpg","skyTower.jpg","taranaki.jpg","thaiBoxing.jpg","thaiMountains.jpg","tongWithMe.jpg","trainMarket.jpg","ubud.jpg","whararikiBeach.jpg"]);t.a=r},270:function(e,t,a){"use strict";a(118);var n=a(257),r=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/street/"+e,alt:e.split(".")[0]}}))(["ballers.jpg","basketball.jpg","bible.jpg","birds.jpg","block.jpg","break.jpg","breakfast.jpg","building.jpg","chinaTown.jpg","commute.jpg","delight.jpg","dosToros.jpg","doubleTake.jpg","duane.jpg","ferry.jpg","flatiron.jpg","gnt.jpg","green.jpg","hat.jpg","information.jpg","jewish.jpg","justMarried.jpg","libertyBike.jpg","libertyPhone.jpg","manhattanBridge.jpg","miami.jpg","minettaTavern.jpg","pigeonGuy.jpg","primary.jpg","rabbiRoad.jpg","reflected.jpg","rockawayTowel.jpg","screenLight.jpg","shelborne.jpg","silhouette.jpg","stare.jpg","subwayScream.jpg","tourist.jpg","underground.jpg","vanessas.jpg","waiting.jpg","walkingAway.jpg"]);t.a=r},271:function(e,t,a){"use strict";a(118);var n=a(257),r=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/music/"+e,alt:e.split(".")[0]}}))(["JoeyBadass.jpg","actionBronson.jpg","aluna.jpg","andyC.jpg","asap.jpg","baauer.jpg","bar.jpg","bicep.jpg","charlie.jpg","damien.jpg","dangelo.jpg","daniel.jpg","darius.jpg","daughter.jpg","dimensions.jpg","dj.jpg","djEZ.jpg","ellesseGirl.jpg","ellie.jpg","evolutionCrowd.jpg","example.jpg","fanGirl.jpg","flava.jpg","frank.jpg","guitar.jpg","gunshots.jpg","hands.jpg","handshake.jpg","heidi.jpg","jake.jpg","jamBaxter.jpg","joey.jpg","jonHopkins.jpg","joyOrbison.jpg","jrocc.jpg","jurassic5.jpg","jurassicPortrait.jpg","kelis.jpg","kelisPortrait.jpg","killerMike.jpg","loveboxCrowd.jpg","lunice.jpg","moat.jpg","nozstockCrowd.jpg","nozstockThree.jpg","oceanWisdom.jpg","onemanHideout.jpg","paak.jpg","paloma.jpg","parklifeCrowd.jpg","planB.jpg","premier.jpg","purplePortrait.jpg","rita.jpg","ritaDance.jpg","robertPlant.jpg","rodiganSmoke.jpg","rudimentalThree.jpg","sgpPaint.jpg","shoulders.jpg","skream.jpg","skreamHideout.jpg","soulClap.jpg","stormzy.jpg","stormzyUp.jpg","submotion.jpg","tinchy.jpg","vaccines.jpg","weAreCrowd.jpg","wretch32.jpg"]);t.a=r},272:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(256),i=a(278),s=a.n(i),p=a(279),l=a.n(p),c=a(265),u=a.n(c),g=a(284),d=a.n(g),h=a(286),f=a.n(h),m=a(262),j=a.n(m),v=function(e){return r.a.createElement("div",{className:e.classes.root},r.a.createElement(u.a,{mdUp:!0,implementation:"css"},r.a.createElement(s.a,{position:"static"},r.a.createElement(l.a,null,r.a.createElement(d.a,{className:e.classes.menuButton,color:"inherit","aria-label":"Menu",onClick:e.onOpen},r.a.createElement(f.a,null)),r.a.createElement(j.a,{variant:"title",color:"inherit",className:e.classes.flex},"Paul Taylor")))))};v.defaultProps={},v.propTypes={},t.a=Object(o.withStyles)(function(e){return{root:{flex:{flexGrow:1}},flex:{flexGrow:1},menuButton:{}}})(v)},273:function(e,t,a){"use strict";a(119);var n=a(0),r=a.n(n),o=a(256),i=function(e){return r.a.createElement("div",{className:e.classes.masonryContainer},e.children)};i.defaultProps={},i.propTypes={};var s=Object(o.withStyles)(function(e){var t;return{masonryContainer:(t={},t[e.breakpoints.up("md")]={columnCount:2},t.columnGap=0,t)}})(i),p=function(e){return r.a.createElement("div",{className:e.classes.panel},r.a.createElement("div",{className:e.classes.content},e.children))};p.defaultProps={},p.propTypes={};var l=Object(o.withStyles)(function(e){return{panel:{breakInside:"avoid",padding:"5px"},content:{padding:"10px",borderRadius:"10px",overflow:"hidden"}}})(p),c=(a(118),a(297)),u=a.n(c),g=(a(283),a(298)),d=a.n(g),h=a(16),f=a.n(h),m=a(12),j=a.n(m),v=a(257),b=a(274),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).onImageLoaded=function(){var e=d()(u.a.mark(function e(t){var n,r,o,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.label){e.next=2;break}return e.abrupt("return");case 2:n=b.a.getPaletteFromIMG(t.target),r=n[0],(o=b.a.RGBtoHSL(r[0],r[1],r[2]))[1]=100*o[1],o[2]=(100*o[2]+50)%100,i="rgb("+r[0]+", "+r[1]+", "+r[2]+")",s="hsl("+o[0]+", "+o[1]+"%, "+o[2]+"%)",a.setState({backgroundColor:i,color:s,opacity:.9});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.renderPhoto=function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("img",{src:a.props.path,alt:a.props.alt,className:a.props.classes.img,onLoad:function(e){return a.onImageLoaded(e)}}),r.a.createElement("div",{className:a.props.classes.label,style:{opacity:a.state.opacity,backgroundColor:a.state.backgroundColor}},r.a.createElement("span",{className:a.props.classes.labelSpan,style:{color:a.state.color}},a.props.label)))},a.renderLink=function(e){return r.a.createElement("a",{href:a.props.to,alt:a.props.alt},e)},a.renderCarouselLink=function(e){var t=a.props.path.split("/").pop().split(".").shift();if(console.log(t),"undefined"!=typeof window){var n=document.location.pathname+"?image="+t;return r.a.createElement("a",{href:n},e)}return"dest"},a.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},a}return f()(t,e),t.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},t}(r.a.Component);y.defaultProps={label:null},y.propTypes={label:j.a.string};var k=Object(v.a)(Object(o.withStyles)(function(e){var t;return{label:(t={position:"absolute",bottom:"3px",width:"100%",fontSize:"1.7vw",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},t[e.breakpoints.down("sm")]={fontSize:"5vw"},t),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",borderRadius:"10px"}}}))(y),w=function(e){return r.a.createElement(s,null,r.a.createElement(l,null,r.a.createElement("h1",null,e.title)),e.photos.map(function(e){return r.a.createElement(l,{key:e.alt},r.a.createElement(k,e))}))};w.defaultProps={},w.propTypes={},t.a=w},274:function(e,t,a){"use strict";var n=a(299),r=a.n(n),o=function(){function e(){this.width=0,this.height=0,this.imageData=null}var t=e.prototype;return t.getDataFromEl=function(e){this.width=e.width,this.height=e.height;var t=document.createElement("canvas"),a=t.getContext("2d");document.body.appendChild(t),t.width=this.width,t.height=this.height,a.drawImage(e,0,0),this.imageData=a.getImageData(0,0,this.width,this.height);var n=this.buildPixels();return t.parentNode.removeChild(t),n},t.buildPixels=function(){for(var e=[],t=0;t<this.getPixelCount();t++){var a=this.imageData.data[4*t+0],n=this.imageData.data[4*t+1],r=this.imageData.data[4*t+2];this.imageData.data[4*t+3]<15||a>250&&n>250&&r>250||e.push([a,n,r])}return e},t.getPixelCount=function(){return this.width*this.height},e}();o.getPaletteFromIMG=function(e){var t=(new o).getDataFromEl(e);return r()(t,8).palette()},o.RGBtoHSL=function(e,t,a){var n=null,r=null;e/=255,t/=255,a/=255;var o,i=Math.max(e,t,a),s=Math.min(e,t,a),p=i-s;if(0===p)o=0;else switch(i){case e:r=0,(n=(t-a)/p)<0&&(r=6),o=n+r;break;case t:o=(n=(a-e)/p)+(r=2);break;case a:o=(n=(e-t)/p)+(r=4);break;default:console.log("Unknown color: ",i)}return[o*=60,(i-s)/(1-Math.abs(i+s-1)),(i+s)/2]};var i=o;t.a=i},275:function(e,t,a){"use strict";var n=a(267),r=a(268),o=a(269),i=a(270),s=a(271),p=a(261),l=[{name:"events",location:"/events",photos:[{path:"/portfolio/events/alexa/alexa02.jpg",alt:"Amazon 02",label:"Amazon Alexa // Smartlife Roadshow",to:"/events/amazon"},{path:"/portfolio/events/cyo/cyo03-2.jpg",alt:"CYO",label:"CYO // Press Evening",to:"/events/cyo"},{path:"/portfolio/events/hulu/hulu06.jpg",alt:"Hulu",label:"Hulu // Agency Presentation",to:"/events/hulu"},{path:"/portfolio/events/krazyGlue/krazyGlue19.jpg",alt:"Krazy Glue",label:"Krazy Glue // Pop-up Store",to:"/events/krazy_glue"},{path:"/portfolio/events/lostInSpace/lostInSpace05.jpg",alt:"LostInSpace",label:"Netflix // Lost in Space Launch",to:"/events/lost_in_space"},{path:"/portfolio/events/narcos/narcos03.jpg",alt:"Netflix: Narcos",label:"Netflix // Narcos Season 3 Launch",to:"/events/narcos"},{path:"/portfolio/events/natGeo/natgeo25-2.jpg",alt:"Nat Geo",label:"National Geographic // One Strange Rock",to:"/events/national_geographic"},{path:"/portfolio/events/panera/panera05.jpg",alt:"Panera Bread",label:"Panera Bread // Breakfast Sandwich Launch",to:"/events/panera"},{path:"/portfolio/events/petSmart/petsmart12.jpg",alt:"Pet Smart & Purina",label:"Pet Smart & Purina // Save a Fortune",to:"/events/pet_smart_and_purina"},{path:"/portfolio/events/rossana/rossana21.jpg",alt:"Rosanna Pansino",label:"Rosanna Pansino // Road Trip",to:"/events/rosanna_pansino"},{path:"/portfolio/events/silk/silk15.jpg",alt:"Silk",label:" Silk // Pedal for Progress",to:"/events/silk"},{path:"/portfolio/events/sonic/sonic15-2.jpg",alt:"Sonic",label:"Sonic Slingers // Food Truck",to:"/events/sonic"},{path:"/portfolio/events/unicefTrick/unicefTrick07.jpg",alt:"Unicef Trick or Treat",label:"Unicef // Trick or Treat",to:"/events/trick_or_treat"},{path:"/portfolio/events/unicefWater/unicefWater23.jpg",alt:"Unicef",label:"Unicef // Water is Unfair",to:"/events/water_is_unfair"},{path:"/portfolio/events/weTV/weTV12.jpg",alt:"we TV",label:"WE TV // Juice Bar",to:"/events/we_tv"}],children:[{name:"Amazon",title:"Amazon Alexa // Smartlife Roadshow",location:"/events/amazon",photos:n.a},{name:"CYO",location:"/events/cyo",photos:r.a},{name:"Hulu",location:"/events/hulu",photos:Object(p.a)("hulu","hulu",29)},{name:"Krazy Glue",location:"/events/krazy_glue",photos:Object(p.a)("krazyGlue","krazyGlue",28)},{name:"Lost In Space",location:"/events/lost_in_space",photos:Object(p.a)("lostInSpace","lostInSpace",36)},{name:"Narcos",location:"/events/narcos",photos:Object(p.a)("narcos","narcos",27)},{name:"National Geographic",location:"/events/national_geographic",photos:Object(p.a)("natGeo","natgeo",31)},{name:"Panera",location:"/events/panera",photos:Object(p.a)("panera","panera",34)},{name:"Pet Smart & Purina",location:"/events/pet_smart_and_purina",photos:Object(p.a)("petSmart","petsmart",33)},{name:"Rossana Pansino",location:"/events/rossana_pansino",photos:Object(p.a)("rossana","rossana",22)},{name:"Silk",location:"/events/silk",photos:Object(p.a)("silk","silk",36)},{name:"Sonic",location:"/events/sonic",photos:Object(p.a)("sonic","sonic",46)},{name:"Trick or Treat",location:"/events/trick_or_treat",photos:Object(p.a)("unicefTrick","unicefTrick",34)},{name:"Water is Unfair",location:"/events/water_is_unfair",photos:Object(p.a)("unicefWater","unicefWater",45)},{name:"WE tv",location:"/events/we_tv",photos:Object(p.a)("weTV","weTV",26)}]},{name:"places",location:"/places",children:[],photos:o.a},{name:"music",location:"/music",children:[],photos:s.a},{name:"street",location:"/street",children:[],photos:i.a}];t.a=l},362:function(e,t,a){"use strict";const n=a(468),r=a(469);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e,t){return t.decode?r(e):e}function s(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){const a=function(e){let t;switch(e.arrayFormat){case"index":return(e,a,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return(e,a,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return(e,t,a)=>{void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const r of e.split("&")){let[e,o]=r.replace(/\+/g," ").split("=");o=void 0===o?null:i(o,t),a(i(e,t),o,n)}return Object.keys(n).sort().reduce((e,t)=>{const a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(a):e[t]=a,e},Object.create(null))}t.extract=s,t.parse=p,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const a=function(e){switch(e.arrayFormat){case"index":return(t,a,n)=>null===a?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(a,e)].join("");case"bracket":return(t,a)=>null===a?[o(t,e),"[]"].join(""):[o(t,e),"[]=",o(a,e)].join("");default:return(t,a)=>null===a?o(t,e):[o(t,e),"=",o(a,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(n=>{const r=e[n];if(void 0===r)return"";if(null===r)return o(n,t);if(Array.isArray(r)){const e=[];for(const t of r.slice())void 0!==t&&e.push(a(n,t,e.length));return e.join("&")}return o(n,t)+"="+o(r,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:p(s(e),t)}))},369:function(e,t,a){"use strict";a(118),a(147);var n=a(16),r=a.n(n),o=a(0),i=a.n(o),s=a(12),p=a.n(s),l=a(256),c=a(257),u=a(274),g="ArrowLeft",d="ArrowRight",h="ArrowDown",f="ArrowUp",m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onKeyUp=function(e){"undefined"!=typeof window&&(e.key===d&&(document.location=a.getNext()),e.key===g&&(document.location=a.getPrev()),e.key===h&&(document.location=a.getNext()),e.key===f&&(document.location=a.getPrev()))},a.onImageLoaded=function(e){var t=u.a.getPaletteFromIMG(e.target)[0],n=u.a.RGBtoHSL(t[0],t[1],t[2]);n[1]=100*n[1],n[2]=(100*n[2]+50)%100;var r="rgb("+t[0]+", "+t[1]+", "+t[2]+")";n[0],n[1],n[2],a.setState({borderColor:r})},a.getIdx=function(){return Object(c.d)(function(e){return e.path.indexOf(a.props.currentPhoto)>-1},a.props.photos)},a.getOffset=function(e){var t=a.props.photos?a.props.photos.length:0;return(a.getIdx()+t+e)%t},a.getPrev=function(){var e=a.props.photos[a.getOffset(-1)].path.split("/").pop();return"/events/"+a.getEvent()+"?image="+e},a.getNext=function(){var e=a.props.photos[a.getOffset(1)].path.split("/").pop();return"/events/"+a.getEvent()+"?image="+e},a.getEvent=function(){return document.location.pathname.split("/").pop()},a.state={borderColor:"rgba(0,0,0,0)"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("keyup",this.onKeyUp,!1)},a.componentWillUnmount=function(){document.removeEventListener("keyup",this.onKeyUp,!1)},a.render=function(){var e=this,t=Object(c.c)(function(t){return-1!==t.path.indexOf(e.props.currentPhoto)})(this.props.photos);return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("img",{src:t.path,alt:this.props.currentPhoto,onLoad:this.onImageLoaded}),i.a.createElement("a",{href:this.getPrev(),className:this.props.classes.leftLink},i.a.createElement("div",{className:this.props.classes.leftArrow,style:{borderRight:"60px solid "+this.state.borderColor}})),i.a.createElement("a",{href:this.getNext(),className:this.props.classes.rightLink},i.a.createElement("div",{className:this.props.classes.rightArrow,style:{borderLeft:"60px solid "+this.state.borderColor}})))},t}(i.a.Component);m.defaultProps={},m.propTypes={currentPhoto:p.a.string,photos:p.a.array};var j=Object(l.withStyles)(function(e){return{panel:{breakInside:"avoid",padding:"5px"},content:{padding:"10px",borderRadius:"10px",overflow:"hidden"},leftLink:{position:"absolute",width:"100px",height:"100%",left:0,top:0},rightLink:{position:"absolute",width:"100px",height:"100%",right:0,top:0},leftArrow:{opacity:.7,position:"absolute",top:"calc(50% - 120px/2)",width:0,height:0,borderTop:"60px solid transparent",borderBottom:"60px solid transparent",left:"10px",borderRight:"60px solid #042860",transition:"all 1s"},rightArrow:{opacity:.7,position:"absolute",top:"calc(50% - 120px/2)",width:0,height:0,borderTop:"60px solid transparent",borderBottom:"60px solid transparent",right:"10px",borderLeft:"60px solid #042860",transition:"all 1s"}}})(m);t.a=j},468:function(e,t,a){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},469:function(e,t,a){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(a),o(n))}function i(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(n),a=1;a<t.length;a++)t=(e=o(t,a).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},a=r.exec(e);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(e){var n=i(a[0]);n!==a[0]&&(t[a[0]]=n)}a=r.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var p=o[s];e=e.replace(new RegExp(p,"g"),t[p])}return e}(e)}}}}]);
//# sourceMappingURL=4-780c9ab0eb62fd2d97e8.js.map