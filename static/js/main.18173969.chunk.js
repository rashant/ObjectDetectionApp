(this.webpackJsonpOnjectDetectionApp=this.webpackJsonpOnjectDetectionApp||[]).push([[0],{247:function(t,e,n){t.exports=n(274)},252:function(t,e,n){},258:function(t,e){},259:function(t,e){},267:function(t,e){},270:function(t,e){},271:function(t,e){},272:function(t,e,n){},274:function(t,e,n){"use strict";n.r(e);var r=n(59),i=n.n(r),a=n(226),c=n.n(a),o=(n(252),n(5)),u=n.n(o),f=n(13),s=(n(273),n(246)),l=n(245),d=n.n(l),h=(n(272),n(8)),p=function(t,e){t.forEach((function(t){var n=Object(h.a)(t.bbox,4),r=n[0],i=n[1],a=n[2],c=n[3],o=t.class,u=t.score,f="#"+Math.floor(17777215*Math.random()).toString(16);e.strokeStyle=f,e.font="18px Arial",e.fillStyle=f,e.beginPath(),e.fillText(o,r,i),e.fillText(u,r,i+20),e.rect(r,i,a,c),e.stroke()}))};var v=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=function(){var t=Object(f.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a();case 2:e=t.sent,setInterval((function(){a(e)}),10);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var n=Object(f.a)(u.a.mark((function n(r){var i,a,c,o,f;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof t.current||null===t.current||4!==t.current.video.readyState){n.next=13;break}return i=t.current.video,a=t.current.video.videoWidth,c=t.current.video.videoHeight,t.current.video.width=a,t.current.video.height=c,e.current.width=a,e.current.height=c,n.next=10,r.detect(i);case 10:o=n.sent,f=e.current.getContext("2d"),p(o,f);case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[]),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{id:"video-stream"},i.a.createElement(d.a,{ref:t,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,objectFit:"fit",height:"auto",width:"100%"}}),i.a.createElement("canvas",{id:"bounding-box",ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,objectFit:"fit",height:"auto",width:"100%"}}))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.18173969.chunk.js.map