(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(249)},118:function(e,t){},120:function(e,t){},155:function(e,t){},156:function(e,t){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(100),o=a.n(r),s=a(101),l=a.n(s),c=a(102),m=a(103),d=a(109),h=a(104),p=a(110),g=a(53),u=a(51),f=a(13),b=a.n(f),v=a(108),y=function(e){return e.split(" ").slice(0,15).join(" ")+"\u2026"},w=b()({navbar:{display:"flex",justifyContent:"center",marginTop:"13px"},logo:{height:"17px"}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.navbar},i.a.createElement("a",{href:"http://columbiaspectator.com"},i.a.createElement("img",{className:t.logo,src:"https://s3.amazonaws.com/spec-imagehosting/spectator-logo.png",alt:"Columbia Spectator Logo"})))}),x=b()({header:{marginBottom:"80vh",marginTop:"33vh"},headline:{textAlign:"center",padding:"0 15%",fontFamily:"Merriweather",fontSize:"2.5rem",lineHeight:1.5,color:"#333",margin:0,marginBottom:"1.7rem"},meta:{margin:"0 auto",maxWidth:"650px",textAlign:"center"},byline:{fontSize:"0.9rem",fontFamily:"Open Sans",color:"#777",margin:0,fontWeight:300,marginBottom:"5px","& a":{color:"#000"}},smallButMightyLine:{margin:"35px auto 25px auto",width:"80px",height:"1px",backgroundColor:"#ddd"},timestamp:{fontSize:"0.8rem",fontFamily:"Open Sans",padding:"0 10%",margin:"0 auto",color:"#aaa",lineHeight:1.6},"@media (max-width: 991px)":{title:{width:"92%"}},"@media (max-width: 575px)":{headline:{fontSize:"2.1rem"}}})(function(e){var t=e.classes,a=e.header,n=a.headline,r=a.writer,o=a.photographer,s=a.date;return s=s.toUpperCase(),i.a.createElement("div",{className:t.header},i.a.createElement("p",{className:t.headline},n),i.a.createElement("div",{className:t.meta},i.a.createElement("p",{className:t.byline},"Written by ",r),i.a.createElement("p",{className:t.byline},"Photography by ",o),i.a.createElement("div",{className:t.smallButMightyLine}),i.a.createElement("p",{className:t.timestamp},s,i.a.createElement("br",null),"GRAPHICS BY JASON KAO")))}),E=b()({})(function(e){e.classes;return null});Object(v.a)("#make-me-rad-n-sticky");var k=window.innerWidth>575?.5:.8,N={position:"absolute",width:"100%",height:"100%",objectFit:"cover",transitionDuration:".6s"},j={main:{marginBottom:"2rem",fontFamily:"Helvetica",display:"flex"},imageContainer:{transform:"translate3d(0, 0, 0)",position:"sticky",width:"50vw",height:"100vh",top:0,alignSelf:"flex-start",display:"flex",justifyContent:"center",alignItems:"center"},img:Object(g.a)({},N,{visibility:"visible",opacity:1}),hideImg:Object(g.a)({},N,{visibility:"hidden",opacity:0}),content:{width:"50vw"},step:{margin:"0 auto",maxWidth:"360px",padding:"0 10%",marginBottom:"90vh"},text:{fontFamily:"Merriweather",fontSize:"1.2rem",lineHeight:"1.8",margin:0},"@media (max-width: 767px)":{main:{flexDirection:"column-reverse"},imageContainer:{width:"100vw"},content:{paddingTop:0,zIndex:"1",width:"100%"},step:{backgroundColor:"rgba(255, 255, 255, 0.9)",padding:"20px"},text:{justifyContent:"center",textAlign:"center"}}},C=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onStepEnter=function(e){var t=e.data;a.setState({image:t})};var n=e.classes,r=e.slides;return a.images=[],a.steps=r.map(function(e){var t=e.image,r=e.text;return a.images.push({src:t,alt:y(r)}),i.a.createElement(u.b,{data:t,key:t},i.a.createElement("div",{className:n.step},i.a.createElement("p",{className:n.text},r)))}),a.state={image:a.images[0].src},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.image,t=this.props,a=t.classes,n=t.header;return i.a.createElement("div",{className:a.main},i.a.createElement("div",{className:a.content},i.a.createElement(w,null),i.a.createElement(x,{header:n}),i.a.createElement(u.a,{offset:k,onStepEnter:this.onStepEnter},this.steps),i.a.createElement(E,null)),i.a.createElement("div",{className:a.imageContainer,id:"make-me-rad-n-sticky"},this.images.map(function(t){var n=t.src,r=t.alt;return i.a.createElement("img",{key:n,className:e===n?a.img:a.hideImg,src:n,alt:r})})))}}]),t}(n.Component),S=b()(j)(C),O=l.a.load("\n\n{header}\n\nheadline: Dean Awn Funeral Photo Essay + Graphics\nwriter: Jelani Cobbs\nphotographer: Amelia Amelia\ndate: May 14, 2019\n{}\n\n[slides]\n\nimage: https://int.nyt.com/data/tap-stories/assets/5c06dc9c94db960001b82f84/069d4821f81611e894354b825341e8a4-img.jpg\n\ntext: On Monday night and Tuesday, lines snaked throughout the Capitol as people waited for a chance to stand before Mr. Bush\u2019s coffin.\n\nimage: https://int.nyt.com/data/tap-stories/assets/5c06dc9c94db960001b82f84/7330bdb1f80111e88828fb98e26a0fcb-img.jpg\n\ntext: On Monday night and Tuesday, lines snaked throughout the Capitol as people waited for a chance to stand before Mr. Bush\u2019s coffin.\n\n[]\n"),B=O.header,A=O.slides,M=function(){return i.a.createElement("div",null,i.a.createElement(S,{slides:A,header:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248);o.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.3012d552.chunk.js.map