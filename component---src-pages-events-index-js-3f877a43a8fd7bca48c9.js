(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return O});a(199);var n=a(8),o=a.n(n),r=a(0),i=a.n(r),s=a(181),l=a.n(s),p=a(182),c=a.n(p),u=a(170),g=a.n(u),m=a(211),h=a.n(m),j=a(168),f=a(188),d=a(165),v=a(186),b=a(185),y=a(192),k=a(166),w=a(183),E=a(187),P=a(189),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).onOpen=function(){a.setState({drawerOpen:!0})},a.onClose=function(){a.setState({drawerOpen:!1})},a.state={drawerOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e={fill:"black"},t=this.props.classes,a=Object(k.a)(Object(k.g)(["photos"]),k.e,Object(k.b)(function(e){return"events"===e.name}))(w.a);return i.a.createElement("div",null,i.a.createElement(v.a,{open:this.state.drawerOpen,onClose:this.onClose},i.a.createElement("div",null,i.a.createElement("a",{href:Object(j.withPrefix)("/"),style:{textDecoration:"none"}},i.a.createElement("h1",{style:{color:"black",textAlign:"center",marginBottom:0}},"Paul Taylor")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(l.a,{component:P.a,to:"https://www.instagram.com/thisispaultaylor"},i.a.createElement(f.a,{style:e})),i.a.createElement(l.a,{component:P.a,to:"https://thisispaultaylor.instagram.com"},i.a.createElement(f.b,{style:e})),i.a.createElement(l.a,{component:P.a,to:"mailto://hello@thisispayltaylor.com"},i.a.createElement(h.a,{style:e})))),i.a.createElement(b.a,{location:this.props.location})),i.a.createElement("div",null,i.a.createElement(E.a,{onOpen:this.onOpen},i.a.createElement(l.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(c.a,null),i.a.createElement(g.a,{variant:"title",color:"inherit"},"PaulTaylor"))),i.a.createElement("div",{className:this.props.classes.root},i.a.createElement(y.a,{title:"Events",photos:a}))))},t}(i.a.Component);C.defaultProps={},C.propTypes={},t.default=Object(d.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.up("md")]={marginLeft:"255px"},t)}})(C);var O="1097489062"},168:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return j}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(167),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var p=a(27);a.d(t,"waitForRouteChange",function(){return p.c});var c=a(171),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var g=a(40);a.d(t,"parsePath",function(){return g.a});var m=o.a.createContext({}),h=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},171:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},172:function(e,t,a){"use strict";var n=a(215),o=a.n(n),r=function(){function e(){this.width=0,this.height=0,this.imageData=null}var t=e.prototype;return t.getDataFromEl=function(e){this.width=e.width,this.height=e.height;var t=document.createElement("canvas"),a=t.getContext("2d");document.body.appendChild(t),t.width=this.width,t.height=this.height,a.drawImage(e,0,0),this.imageData=a.getImageData(0,0,this.width,this.height);var n=this.buildPixels();return t.parentNode.removeChild(t),n},t.buildPixels=function(){for(var e=[],t=0;t<this.getPixelCount();t++){var a=this.imageData.data[4*t+0],n=this.imageData.data[4*t+1],o=this.imageData.data[4*t+2];this.imageData.data[4*t+3]<15||(a>250&&n>250&&o>250||e.push([a,n,o]))}return e},t.getPixelCount=function(){return this.width*this.height},e}();r.getPaletteFromIMG=function(e){var t=(new r).getDataFromEl(e);return o()(t,8).palette()},r.RGBtoHSL=function(e,t,a){var n=null,o=null;e/=255,t/=255,a/=255;var r,i=Math.max(e,t,a),s=Math.min(e,t,a),l=i-s;if(0===l)r=0;else switch(i){case e:o=0,(n=(t-a)/l)<0&&(o=6),r=n+o;break;case t:r=(n=(a-e)/l)+(o=2);break;case a:r=(n=(e-t)/l)+(o=4)}return[r*=60,(i-s)/(1-Math.abs(i+s-1)),(i+s)/2]};var i=r;t.a=i},173:function(e,t,a){"use strict";var n=a(169),o=a.n(n),r=a(203),i=a.n(r);t.a=function(e,t,a){for(var n=[],r=1;r<=a;r++){var s=o()(r).format("00"),l={path:"/portfolio/events/"+e+"/"+t+s+".jpg",alt:i()(e)+" "+s};n.push(l)}return n}},175:function(e,t,a){"use strict";for(var n=a(169),o=a.n(n),r=[],i=1;i<=26;i++){var s=o()(i).format("00"),l={path:"/portfolio/events/alexa/alexa"+s+".jpg",alt:"Amazon "+s};r.push(l)}t.a=r},176:function(e,t,a){"use strict";for(var n=a(169),o=a.n(n),r=[],i=1;i<=25;i++){var s=o()(i).format("00"),l={path:"/portfolio/events/cyo/cyo"+s+".jpg",alt:"CYO "+s};r.push(l)}t.a=r},177:function(e,t,a){"use strict";a(78);var n=a(166),o=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/places/"+e,alt:e.split(".")[0]}}))(["abelTasman.jpg","airBalloon.jpg","aquaWater.jpg","auckland.jpg","bangkok.jpg","bangkokApartment.jpg","cathedralCove.jpg","deejai.jpg","floatingVillage.jpg","gap.jpg","ghostTower.jpg","girlScooter.jpg","market.jpg","mcgregor.jpg","melbournePier.jpg","morocco.jpg","mountCook.jpg","mountManganui.jpg","napier.jpg","paiCat.jpg","petronas.jpg","pier.jpg","purpleSky.jpg","redwoods.jpg","reflection.jpg","royspeak.jpg","sapa.jpg","skyTower.jpg","taranaki.jpg","thaiBoxing.jpg","thaiMountains.jpg","tongWithMe.jpg","trainMarket.jpg","ubud.jpg","whararikiBeach.jpg"]);t.a=o},178:function(e,t,a){"use strict";a(78);var n=a(166),o=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/street/"+e,alt:e.split(".")[0]}}))(["ballers.jpg","basketball.jpg","bible.jpg","birds.jpg","block.jpg","break.jpg","breakfast.jpg","building.jpg","chinaTown.jpg","commute.jpg","delight.jpg","dosToros.jpg","doubleTake.jpg","duane.jpg","ferry.jpg","flatiron.jpg","gnt.jpg","green.jpg","hat.jpg","information.jpg","jewish.jpg","justMarried.jpg","libertyBike.jpg","libertyPhone.jpg","manhattanBridge.jpg","miami.jpg","minettaTavern.jpg","pigeonGuy.jpg","primary.jpg","rabbiRoad.jpg","reflected.jpg","rockawayTowel.jpg","screenLight.jpg","shelborne.jpg","silhouette.jpg","stare.jpg","subwayScream.jpg","tourist.jpg","underground.jpg","vanessas.jpg","waiting.jpg","walkingAway.jpg"]);t.a=o},179:function(e,t,a){"use strict";a(78);var n=a(166),o=Object(n.a)(Object(n.f)(function(e){return{path:"/portfolio/music/"+e,alt:e.split(".")[0]}}))(["JoeyBadass.jpg","actionBronson.jpg","aluna.jpg","andyC.jpg","asap.jpg","baauer.jpg","bar.jpg","bicep.jpg","charlie.jpg","damien.jpg","dangelo.jpg","daniel.jpg","darius.jpg","daughter.jpg","dimensions.jpg","dj.jpg","djEZ.jpg","ellesseGirl.jpg","ellie.jpg","evolutionCrowd.jpg","example.jpg","fanGirl.jpg","flava.jpg","frank.jpg","guitar.jpg","gunshots.jpg","hands.jpg","handshake.jpg","heidi.jpg","jake.jpg","jamBaxter.jpg","joey.jpg","jonHopkins.jpg","joyOrbison.jpg","jrocc.jpg","jurassic5.jpg","jurassicPortrait.jpg","kelis.jpg","kelisPortrait.jpg","killerMike.jpg","loveboxCrowd.jpg","lunice.jpg","moat.jpg","nozstockCrowd.jpg","nozstockThree.jpg","oceanWisdom.jpg","onemanHideout.jpg","paak.jpg","paloma.jpg","parklifeCrowd.jpg","planB.jpg","premier.jpg","purplePortrait.jpg","rita.jpg","ritaDance.jpg","robertPlant.jpg","rodiganSmoke.jpg","rudimentalThree.jpg","sgpPaint.jpg","shoulders.jpg","skream.jpg","skreamHideout.jpg","soulClap.jpg","stormzy.jpg","stormzyUp.jpg","submotion.jpg","tinchy.jpg","vaccines.jpg","weAreCrowd.jpg","wretch32.jpg"]);t.a=o},183:function(e,t,a){"use strict";var n=a(175),o=[{path:"/portfolio/events/alexa/alexa02.jpg",alt:"Amazon 02",label:"Amazon Alexa // Smartlife Roadshow",to:"/events/amazon"},{path:"/portfolio/events/cyo/cyo03-2.jpg",alt:"CYO",label:"CYO // Press Evening",to:"/events/cyo"},{path:"/portfolio/events/hulu/hulu06.jpg",alt:"Hulu",label:"Hulu // Agency Presentation",to:"/events/hulu"},{path:"/portfolio/events/krazyGlue/krazyGlue19.jpg",alt:"Krazy Glue",label:"Krazy Glue // Pop-up Store",to:"/events/krazy_glue"},{path:"/portfolio/events/lostInSpace/lostInSpace05.jpg",alt:"LostInSpace",label:"Netflix // Lost in Space Launch",to:"/events/lost_in_space"},{path:"/portfolio/events/narcos/narcos03.jpg",alt:"Netflix: Narcos",label:"Netflix // Narcos Season 3 Launch",to:"/events/narcos"},{path:"/portfolio/events/natGeo/natgeo25-2.jpg",alt:"Nat Geo",label:"National Geographic // One Strange Rock",to:"/events/national_geographic"},{path:"/portfolio/events/panera/panera05.jpg",alt:"Panera Bread",label:"Panera Bread // Breakfast Sandwich Launch",to:"/events/panera"},{path:"/portfolio/events/petSmart/petsmart12.jpg",alt:"Pet Smart & Purina",label:"Pet Smart & Purina // Save a Fortune",to:"/events/pet_smart_and_purina"},{path:"/portfolio/events/rossana/rossana21.jpg",alt:"Rosanna Pansino",label:"Rosanna Pansino // Road Trip",to:"/events/rosanna_pansino"},{path:"/portfolio/events/silk/silk15.jpg",alt:"Silk",label:" Silk // Pedal for Progress",to:"/events/silk"},{path:"/portfolio/events/sonic/sonic15-2.jpg",alt:"Sonic",label:"Sonic Slingers // Food Truck",to:"/events/sonic"},{path:"/portfolio/events/unicefTrick/unicefTrick07.jpg",alt:"Unicef Trick or Treat",label:"Unicef // Trick or Treat",to:"/events/trick_or_treat"},{path:"/portfolio/events/unicefWater/unicefWater23.jpg",alt:"Unicef",label:"Unicef // Water is Unfair",to:"/events/water_is_unfair"},{path:"/portfolio/events/weTV/weTV12.jpg",alt:"we TV",label:"WE TV // Juice Bar",to:"/events/we_tv"}],r=a(176),i=a(177),s=a(178),l=a(179),p=a(173),c=[{name:"events",location:"/events",photos:o,children:[{name:"Amazon",title:"Amazon Alexa // Smartlife Roadshow",location:"/events/amazon",photos:n.a},{name:"CYO",location:"/events/cyo",photos:r.a},{name:"Hulu",location:"/events/hulu",photos:Object(p.a)("hulu","hulu",29)},{name:"Krazy Glue",location:"/events/krazy_glue",photos:Object(p.a)("krazyGlue","krazyGlue",28)},{name:"Lost In Space",location:"/events/lost_in_space",photos:Object(p.a)("lostInSpace","lostInSpace",36)},{name:"Narcos",location:"/events/narcos",photos:Object(p.a)("narcos","narcos",27)},{name:"National Geographic",location:"/events/national_geographic",photos:Object(p.a)("natGeo","natgeo",31)},{name:"Panera",location:"/events/panera",photos:Object(p.a)("panera","panera",34)},{name:"Pet Smart & Purina",location:"/events/pet_smart_and_purina",photos:Object(p.a)("petSmart","petsmart",33)},{name:"Rossana Pansino",location:"/events/rossana_pansino",photos:Object(p.a)("rossana","rossana",22)},{name:"Silk",location:"/events/silk",photos:Object(p.a)("silk","silk",36)},{name:"Sonic",location:"/events/sonic",photos:Object(p.a)("sonic","sonic",46)},{name:"Trick or Treat",location:"/events/trick_or_treat",photos:Object(p.a)("unicefTrick","unicefTrick",34)},{name:"Water is Unfair",location:"/events/water_is_unfair",photos:Object(p.a)("unicefWater","unicefWater",45)},{name:"WE tv",location:"/events/we_tv",photos:Object(p.a)("weTV","weTV",26)}]},{name:"places",location:"/places",children:[],photos:i.a},{name:"music",location:"/music",children:[],photos:l.a},{name:"street",location:"/street",children:[],photos:s.a}];t.a=c},184:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(57),l=a(1),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},185:function(e,t,a){"use strict";a(199),a(52);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(165),l=a(166),p=a(168),c=a(204),u=a.n(c),g=a(205),m=a.n(g),h=a(206),j=a.n(h),f=a(207),d=a.n(f),v=a(170),b=a.n(v),y=a(193),k=a.n(y),w=a(183),E=function(e){var t=function(){e.onMenuClick&&e.onMenuClick()},a=function(a){var n,r=Object(l.h)(null,["location","pathname"],e),i=a.location+"/index.html",s=k()(e.classes.root,((n={})[e.classes.active]=Object(p.withPrefix)(r)===i,n));return o.a.createElement(o.a.Fragment,{key:a.name},o.a.createElement(b.a,null,o.a.createElement(d.a,{component:p.Link,to:a.location+"/index.html",onClick:t,className:s},a.name)),function(a){if(a.length)return o.a.createElement(u.a,{dense:!0,className:e.classes.root},a.map(function(a){var n,r=Object(l.h)(null,["location","pathname"],e),i=a.location+"/index.html",s=k()(e.classes.root,((n={})[e.classes.active]=Object(p.withPrefix)(r)===i,n));return o.a.createElement(m.a,{key:a.name},o.a.createElement(j.a,null,o.a.createElement(d.a,{component:p.Link,to:a.location+"/index.html",onClick:t,className:s},a.name)))}))}(a.children))};return o.a.createElement("div",null,w.a.map(function(e){return a(e)}))};E.defaultProps={},E.propTypes={onMenuClick:i.a.func},t.a=Object(s.withStyles)(function(e){return{root:{fontFamily:"Abel, sans-serif"},active:{fontWeight:"bolder"}}})(E)},186:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(165),i=a(180),s=a.n(i),l=a(208),p=a.n(l);t.a=Object(r.withStyles)({root:{}},{withTheme:!0})(function(e){var t=e.classes,a=e.theme;return o.a.createElement("div",{className:t.root},o.a.createElement(s.a,{mdUp:!0},o.a.createElement(p.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:e.open,onClose:e.onClose,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},e.children)),o.a.createElement(s.a,{smDown:!0,implementation:"css"},o.a.createElement(p.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},e.children)))})},187:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(165),i=a(209),s=a.n(i),l=a(210),p=a.n(l),c=a(180),u=a.n(c),g=a(181),m=a.n(g),h=a(182),j=a.n(h),f=a(170),d=a.n(f),v=function(e){return o.a.createElement("div",{className:e.classes.root},o.a.createElement(u.a,{mdUp:!0,implementation:"css"},o.a.createElement(s.a,{position:"static",color:"default"},o.a.createElement(p.a,null,o.a.createElement(m.a,{className:e.classes.menuButton,color:"inherit","aria-label":"Menu",onClick:e.onOpen},o.a.createElement(j.a,null)),o.a.createElement(d.a,{variant:"title",color:"inherit",className:e.classes.flex},"Paul Taylor")))))};v.defaultProps={},v.propTypes={},t.a=Object(r.withStyles)(function(e){return{root:{fontFamily:"Abel, sans-serif",flex:{flexGrow:1}},flex:{flexGrow:1},menuButton:{}}})(v)},188:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(174),i=a.n(r);var s=function(e){return o.a.createElement(i.a,e,o.a.createElement("path",{d:"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}))},l=function(e){return o.a.createElement(i.a,e,o.a.createElement("path",{d:"M17,11H13V15.5C13,16.44 13.28,17 14.5,17H17V21C17,21 15.54,21.05 14.17,21.05C10.8,21.05 9.5,19 9.5,16.75V11H7V7C10.07,6.74 10.27,4.5 10.5,3H13V7H17"}))};a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l})},189:function(e,t,a){"use strict";a(39);var n=a(0),o=a.n(n),r=function(e){return o.a.createElement("a",Object.assign({},e,{href:e.to}),e.children)};t.a=r},192:function(e,t,a){"use strict";a(52);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(165),l=function(e){return o.a.createElement("div",{className:e.classes.masonryContainer},e.children)};l.defaultProps={},l.propTypes={};var p=Object(s.withStyles)(function(e){var t;return{masonryContainer:(t={},t[e.breakpoints.up("md")]={columnCount:2},t.columnGap=0,t)}})(l),c=function(e){return o.a.createElement("div",{className:e.classes.panel},o.a.createElement("div",{className:e.classes.content},e.children))};c.defaultProps={},c.propTypes={};var u=Object(s.withStyles)(function(e){return{panel:{breakInside:"avoid",fontSize:0},content:{overflow:"hidden"}}})(c),g=(a(78),a(213)),m=a.n(g),h=(a(212),a(214)),j=a.n(h),f=a(8),d=a.n(f),v=a(168),b=a(166),y=a(172),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).onImageLoaded=function(){var e=j()(m.a.mark(function e(t){var n,o,r,i,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.label){e.next=2;break}return e.abrupt("return");case 2:n=y.a.getPaletteFromIMG(t.target),o=n[0],(r=y.a.RGBtoHSL(o[0],o[1],o[2]))[1]=100*r[1],r[2]=(100*r[2]+50)%100,i="rgb("+o[0]+", "+o[1]+", "+o[2]+")",s="hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)",a.setState({backgroundColor:i,color:s,opacity:.9});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.renderPhoto=function(){return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("img",{src:Object(v.withPrefix)(a.props.path),alt:a.props.alt,className:a.props.classes.img,onLoad:function(e){return a.onImageLoaded(e)}}),o.a.createElement("div",{className:a.props.classes.label,style:{opacity:a.state.opacity,backgroundColor:a.state.backgroundColor}},o.a.createElement("span",{className:a.props.classes.labelSpan,style:{color:a.state.color}},a.props.label)))},a.renderLink=function(e){return o.a.createElement("a",{href:Object(v.withPrefix)(a.props.to),alt:a.props.alt},e)},a.renderCarouselLink=function(e){var t=a.props.path.split("/").pop().split(".").shift();if("undefined"!=typeof window){var n=document.location.pathname+"?image="+t;return o.a.createElement("a",{href:n},e)}return null},a.state={backgroundColor:"hsl(0, 0%, 0%)",color:"hsl(0,0%,0%)",opacity:0},a}return d()(t,e),t.prototype.render=function(){return this.props.to?this.renderLink(this.renderPhoto()):this.renderCarouselLink(this.renderPhoto())},t}(o.a.Component);k.defaultProps={label:null},k.propTypes={label:i.a.string};var w=Object(b.a)(Object(s.withStyles)(function(e){var t;return{label:(t={position:"absolute",bottom:"0px",width:"100%",fontSize:"1.7vw",display:"flex",justifyContent:"center",alignItems:"center","&:empty":{display:"none"},transition:"opacity 0.5s"},t[e.breakpoints.down("sm")]={fontSize:"5vw"},t),labelSpan:{display:"inlineBlock",margin:"0.5em 5px","&:empty":{display:"none"}},img:{width:"100%",fontSize:"1px"}}}))(k),E=function(e){return o.a.createElement(p,null,e.photos.map(function(e){return o.a.createElement(u,{key:e.alt},o.a.createElement(w,e))}))};E.defaultProps={title:""},E.propTypes={photos:i.a.array,title:i.a.string};t.a=E}}]);
//# sourceMappingURL=component---src-pages-events-index-js-3f877a43a8fd7bca48c9.js.map