(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{239:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a.n(n),r=a(0),i=a.n(r),s=a(256),l=a(264),p=a(266),c=a(273),u=a(269),g=a(272),h=a(285),m=a.n(h),j=a(287),d=a.n(j),f=a(280),v=a.n(f),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{open:this.state.drawerOpen,onClose:this.onClose},i.a.createElement(p.a,{onMenuClick:function(){return e.onClose()}})),i.a.createElement("div",null,i.a.createElement(g.a,{onOpen:this.onOpen},i.a.createElement(m.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(d.a,null),i.a.createElement(v.a,{variant:"title",color:"inherit"},"PaulTaylor"))),i.a.createElement("div",{className:this.props.classes.root},i.a.createElement(c.a,{title:"Places",photos:u.a}))))},t}(i.a.Component);t.default=Object(s.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.up("md")]={marginLeft:"255px"},t)}})(b)},258:function(e,t,a){var n;e.exports=(n=a(263))&&n.default||n},260:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return h});var n=a(0),o=a.n(n),r=a(12),i=a.n(r),s=a(255),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var p=a(258),c=a.n(p);a.d(t,"PageRenderer",function(){return c.a});var u=a(46);a.d(t,"parsePath",function(){return u.a});var g=o.a.createContext({}),h=function(e){return o.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},261:function(e,t,a){"use strict";var n=a(259),o=a.n(n),r=a(293),i=a.n(r);t.a=function(e,t,a){for(var n=[],r=1;r<=a;r++){var s=o()(r).format("00"),l={path:"/portfolio/events/"+e+"/"+t+s+".jpg",alt:i()(e)+" "+s};n.push(l)}return n}},263:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),s=a(47),l=a(1),p=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return o.a.createElement(s.a,{location:t,pageResources:a})};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},264:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(256),i=a(265),s=a.n(i),l=a(292),p=a.n(l);t.a=Object(r.withStyles)({root:{}},{withTheme:!0})(function(e){var t=e.classes,a=e.theme;return o.a.createElement("div",{className:t.root},o.a.createElement(s.a,{mdUp:!0},o.a.createElement(p.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:e.open,onClose:e.onClose,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},e.children)),o.a.createElement(s.a,{smDown:!0,implementation:"css"},o.a.createElement(p.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},e.children)))})},266:function(e,t,a){"use strict";a(281),a(119);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),s=a(294),l=a.n(s),p=a(295),c=a.n(p),u=a(296),g=a.n(u),h=a(282),m=a.n(h),j=a(262),d=a.n(j),f=a(260),v=a(275),b=function(e){var t=function(){e.onMenuClick()};return o.a.createElement("div",null,v.a.map(function(e){return function(e){return o.a.createElement(o.a.Fragment,{key:e.name},o.a.createElement(d.a,null,o.a.createElement(m.a,{component:f.Link,to:e.location,onClick:t},e.name)),function(e){if(e.length)return o.a.createElement(l.a,{dense:!0},e.map(function(e){return o.a.createElement(c.a,{key:e.name},o.a.createElement(g.a,null,o.a.createElement(m.a,{component:f.Link,to:e.location,onClick:t},e.name)))}))}(e.children))}(e)}))};b.defaultProps={},b.propTypes={onMenuClick:i.a.func},t.a=b},267:function(e,t,a){"use strict";for(var n=a(259),o=a.n(n),r=[],i=1;i<=26;i++){var s=o()(i).format("00"),l={path:"/portfolio/events/alexa/alexa"+s+".jpg",alt:"Amazon "+s};r.push(l)}t.a=r},268:function(e,t,a){"use strict";for(var n=a(259),o=a.n(n),r=[],i=1;i<=25;i++){var s=o()(i).format("00"),l={path:"/portfolio/events/cyo/cyo"+s+".jpg",alt:"CYO "+s};r.push(l)}t.a=r},269:function(e,t,a){"use strict";a(118);var n=a(257),o=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/places/"+e,alt:e.split(".")[0]}}))(["abelTasman.jpg","airBalloon.jpg","aquaWater.jpg","auckland.jpg","bangkok.jpg","bangkokApartment.jpg","cathedralCove.jpg","deejai.jpg","floatingVillage.jpg","gap.jpg","ghostTower.jpg","girlScooter.jpg","market.jpg","mcgregor.jpg","melbournePier.jpg","morocco.jpg","mountCook.jpg","mountManganui.jpg","napier.jpg","paiCat.jpg","petronas.jpg","pier.jpg","purpleSky.jpg","redwoods.jpg","reflection.jpg","royspeak.jpg","sapa.jpg","skyTower.jpg","taranaki.jpg","thaiBoxing.jpg","thaiMountains.jpg","tongWithMe.jpg","trainMarket.jpg","ubud.jpg","whararikiBeach.jpg"]);t.a=o},270:function(e,t,a){"use strict";a(118);var n=a(257),o=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/street/"+e,alt:e.split(".")[0]}}))(["ballers.jpg","basketball.jpg","bible.jpg","birds.jpg","block.jpg","break.jpg","breakfast.jpg","building.jpg","chinaTown.jpg","commute.jpg","delight.jpg","dosToros.jpg","doubleTake.jpg","duane.jpg","ferry.jpg","flatiron.jpg","gnt.jpg","green.jpg","hat.jpg","information.jpg","jewish.jpg","justMarried.jpg","libertyBike.jpg","libertyPhone.jpg","manhattanBridge.jpg","miami.jpg","minettaTavern.jpg","pigeonGuy.jpg","primary.jpg","rabbiRoad.jpg","reflected.jpg","rockawayTowel.jpg","screenLight.jpg","shelborne.jpg","silhouette.jpg","stare.jpg","subwayScream.jpg","tourist.jpg","underground.jpg","vanessas.jpg","waiting.jpg","walkingAway.jpg"]);t.a=o},271:function(e,t,a){"use strict";a(118);var n=a(257),o=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/music/"+e,alt:e.split(".")[0]}}))(["JoeyBadass.jpg","actionBronson.jpg","aluna.jpg","andyC.jpg","asap.jpg","baauer.jpg","bar.jpg","bicep.jpg","charlie.jpg","damien.jpg","dangelo.jpg","daniel.jpg","darius.jpg","daughter.jpg","dimensions.jpg","dj.jpg","djEZ.jpg","ellesseGirl.jpg","ellie.jpg","evolutionCrowd.jpg","example.jpg","fanGirl.jpg","flava.jpg","frank.jpg","guitar.jpg","gunshots.jpg","hands.jpg","handshake.jpg","heidi.jpg","jake.jpg","jamBaxter.jpg","joey.jpg","jonHopkins.jpg","joyOrbison.jpg","jrocc.jpg","jurassic5.jpg","jurassicPortrait.jpg","kelis.jpg","kelisPortrait.jpg","killerMike.jpg","loveboxCrowd.jpg","lunice.jpg","moat.jpg","nozstockCrowd.jpg","nozstockThree.jpg","oceanWisdom.jpg","onemanHideout.jpg","paak.jpg","paloma.jpg","parklifeCrowd.jpg","planB.jpg","premier.jpg","purplePortrait.jpg","rita.jpg","ritaDance.jpg","robertPlant.jpg","rodiganSmoke.jpg","rudimentalThree.jpg","sgpPaint.jpg","shoulders.jpg","skream.jpg","skreamHideout.jpg","soulClap.jpg","stormzy.jpg","stormzyUp.jpg","submotion.jpg","tinchy.jpg","vaccines.jpg","weAreCrowd.jpg","wretch32.jpg"]);t.a=o},272:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(256),i=a(278),s=a.n(i),l=a(279),p=a.n(l),c=a(265),u=a.n(c),g=a(284),h=a.n(g),m=a(286),j=a.n(m),d=a(262),f=a.n(d),v=function(e){return o.a.createElement("div",{className:e.classes.root},o.a.createElement(u.a,{mdUp:!0,implementation:"css"},o.a.createElement(s.a,{position:"static"},o.a.createElement(p.a,null,o.a.createElement(h.a,{className:e.classes.menuButton,color:"inherit","aria-label":"Menu",onClick:e.onOpen},o.a.createElement(j.a,null)),o.a.createElement(f.a,{variant:"title",color:"inherit",className:e.classes.flex},"Paul Taylor")))))};v.defaultProps={},v.propTypes={},t.a=Object(r.withStyles)(function(e){return{root:{flex:{flexGrow:1}},flex:{flexGrow:1},menuButton:{}}})(v)},273:function(e,t,a){"use strict";a(119);var n=a(0),o=a.n(n),r=a(256),i=function(e){return o.a.createElement("div",{className:e.classes.masonryContainer},e.children)};i.defaultProps={},i.propTypes={};var s=Object(r.withStyles)(function(e){var t;return{masonryContainer:(t={},t[e.breakpoints.up("md")]={columnCount:2},t.columnGap=0,t)}})(i),l=function(e){return o.a.createElement("div",{className:e.classes.panel},o.a.createElement("div",{className:e.classes.content},e.children))};l.defaultProps={},l.propTypes={};var p=Object(r.withStyles)(function(e){return{panel:{breakInside:"avoid",padding:"5px"},content:{padding:"10px",borderRadius:"10px",overflow:"hidden"}}})(l),c=(a(118),a(297)),u=a.n(c),g=(a(283),a(298)),h=a.n(g),m=a(16),j=a.n(m),d=a(12),f=a.n(d),v=a(257),b=a(274),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).onImageLoaded=function(){var e=h()(u.a.mark(function e(t){var n,o,r,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.label){e.next=2;break}return e.abrupt("return");case 2:n=b.a.getPaletteFromIMG(t.target),o=n[0],(r=b.a.RGBtoHSL(o[0],o[1],o[2]))[1]=100*r[1],r[2]=(100*r[2]+50)%100,i="rgb("+o[0]+", "+o[1]+", "+o[2]+")",s="hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)",a.setState({backgroundColor:i,color:s,opacity:.9});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.renderPhoto=function(){return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("img",{src:a.props.path,alt:a.props.alt,className:a.props.classes.img,onLoad:function(e){return a.onImageLoaded(e)}}),o.a.createElement("div",{className:a.props.classes.label,style:{opacity:a.state.opacity,backgroundColor:a.state.backgroundColor}},o.a.createElement("span",{className:a.props.classes.labelSpan,style:{color:a.state.color}},a.props.label)))},a.renderLink=function(e){return o.a.createElement("a",{href:a.props.to,alt:a.props.alt},e)},a.renderCarouselLink=function(e){var t=a.props.path.split("/").pop().split(".").shift();console.log(t);var n=window.location.pathname+"?image="+t;return o.a.createElement("a",{href:n},e)},a.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},a}return j()(t,e),t.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},t}(o.a.Component);k.defaultProps={label:null},k.propTypes={label:f.a.string};var y=Object(v.a)(Object(r.withStyles)(function(e){var t;return{label:(t={position:"absolute",bottom:"3px",width:"100%",fontSize:"1.7vw",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},t[e.breakpoints.down("sm")]={fontSize:"5vw"},t),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",borderRadius:"10px"}}}))(k),w=function(e){return o.a.createElement(s,null,o.a.createElement(p,null,o.a.createElement("h1",null,e.title)),e.photos.map(function(e){return o.a.createElement(p,{key:e.alt},o.a.createElement(y,e))}))};w.defaultProps={},w.propTypes={},t.a=w},274:function(e,t,a){"use strict";var n=a(299),o=a.n(n),r=function(){function e(){this.width=0,this.height=0,this.imageData=null}var t=e.prototype;return t.getDataFromEl=function(e){this.width=e.width,this.height=e.height;var t=document.createElement("canvas"),a=t.getContext("2d");document.body.appendChild(t),t.width=this.width,t.height=this.height,a.drawImage(e,0,0),this.imageData=a.getImageData(0,0,this.width,this.height);var n=this.buildPixels();return t.parentNode.removeChild(t),n},t.buildPixels=function(){for(var e=[],t=0;t<this.getPixelCount();t++){var a=this.imageData.data[4*t+0],n=this.imageData.data[4*t+1],o=this.imageData.data[4*t+2];this.imageData.data[4*t+3]<15||a>250&&n>250&&o>250||e.push([a,n,o])}return e},t.getPixelCount=function(){return this.width*this.height},e}();r.getPaletteFromIMG=function(e){var t=(new r).getDataFromEl(e);return o()(t,8).palette()},r.RGBtoHSL=function(e,t,a){var n=null,o=null;e/=255,t/=255,a/=255;var r,i=Math.max(e,t,a),s=Math.min(e,t,a),l=i-s;if(0===l)r=0;else switch(i){case e:o=0,(n=(t-a)/l)<0&&(o=6),r=n+o;break;case t:r=(n=(a-e)/l)+(o=2);break;case a:r=(n=(e-t)/l)+(o=4);break;default:console.log("Unknown color: ",i)}return[r*=60,(i-s)/(1-Math.abs(i+s-1)),(i+s)/2]};var i=r;t.a=i},275:function(e,t,a){"use strict";var n=a(267),o=a(268),r=a(269),i=a(270),s=a(271),l=a(261),p=[{name:"events",location:"/events",photos:[{path:"/portfolio/events/alexa/alexa02.jpg",alt:"Amazon 02",label:"Amazon Alexa // Smartlife Roadshow",to:"/events/amazon"},{path:"/portfolio/events/cyo/cyo03-2.jpg",alt:"CYO",label:"CYO // Press Evening",to:"/events/cyo"},{path:"/portfolio/events/hulu/hulu06.jpg",alt:"Hulu",label:"Hulu // Agency Presentation",to:"/events/hulu"},{path:"/portfolio/events/krazyGlue/krazyGlue19.jpg",alt:"Krazy Glue",label:"Krazy Glue // Pop-up Store",to:"/events/krazy_glue"},{path:"/portfolio/events/lostInSpace/lostInSpace05.jpg",alt:"LostInSpace",label:"Netflix // Lost in Space Launch",to:"/events/lost_in_space"},{path:"/portfolio/events/narcos/narcos03.jpg",alt:"Netflix: Narcos",label:"Netflix // Narcos Season 3 Launch",to:"/events/narcos"},{path:"/portfolio/events/natGeo/natgeo25-2.jpg",alt:"Nat Geo",label:"National Geographic // One Strange Rock",to:"/events/national_geographic"},{path:"/portfolio/events/panera/panera05.jpg",alt:"Panera Bread",label:"Panera Bread // Breakfast Sandwich Launch",to:"/events/panera"},{path:"/portfolio/events/petSmart/petsmart12.jpg",alt:"Pet Smart & Purina",label:"Pet Smart & Purina // Save a Fortune",to:"/events/pet_smart_and_purina"},{path:"/portfolio/events/rossana/rossana21.jpg",alt:"Rosanna Pansino",label:"Rosanna Pansino // Road Trip",to:"/events/rosanna_pansino"},{path:"/portfolio/events/silk/silk15.jpg",alt:"Silk",label:" Silk // Pedal for Progress",to:"/events/silk"},{path:"/portfolio/events/sonic/sonic15-2.jpg",alt:"Sonic",label:"Sonic Slingers // Food Truck",to:"/events/sonic"},{path:"/portfolio/events/unicefTrick/unicefTrick07.jpg",alt:"Unicef Trick or Treat",label:"Unicef // Trick or Treat",to:"/events/trick_or_treat"},{path:"/portfolio/events/unicefWater/unicefWater23.jpg",alt:"Unicef",label:"Unicef // Water is Unfair",to:"/events/water_is_unfair"},{path:"/portfolio/events/weTV/weTV12.jpg",alt:"we TV",label:"WE TV // Juice Bar",to:"/events/we_tv"}],children:[{name:"Amazon",title:"Amazon Alexa // Smartlife Roadshow",location:"/events/amazon",photos:n.a},{name:"CYO",location:"/events/cyo",photos:o.a},{name:"Hulu",location:"/events/hulu",photos:Object(l.a)("hulu","hulu",29)},{name:"Krazy Glue",location:"/events/krazy_glue",photos:Object(l.a)("krazyGlue","krazyGlue",28)},{name:"Lost In Space",location:"/events/lost_in_space",photos:Object(l.a)("lostInSpace","lostInSpace",36)},{name:"Narcos",location:"/events/narcos",photos:Object(l.a)("narcos","narcos",27)},{name:"National Geographic",location:"/events/national_geographic",photos:Object(l.a)("natGeo","natgeo",31)},{name:"Panera",location:"/events/panera",photos:Object(l.a)("panera","panera",34)},{name:"Pet Smart & Purina",location:"/events/pet_smart_and_purina",photos:Object(l.a)("petSmart","petsmart",33)},{name:"Rossana Pansino",location:"/events/rossana_pansino",photos:Object(l.a)("rossana","rossana",22)},{name:"Silk",location:"/events/silk",photos:Object(l.a)("silk","silk",36)},{name:"Sonic",location:"/events/sonic",photos:Object(l.a)("sonic","sonic",46)},{name:"Trick or Treat",location:"/events/trick_or_treat",photos:Object(l.a)("unicefTrick","unicefTrick",34)},{name:"Water is Unfair",location:"/events/water_is_unfair",photos:Object(l.a)("unicefWater","unicefWater",45)},{name:"WE tv",location:"/events/we_tv",photos:Object(l.a)("weTV","weTV",26)}]},{name:"places",location:"/places",children:[],photos:r.a},{name:"music",location:"/music",children:[],photos:s.a},{name:"street",location:"/street",children:[],photos:i.a}];t.a=p}}]);
//# sourceMappingURL=component---src-pages-places-js-57892b60a0a883246eb0.js.map