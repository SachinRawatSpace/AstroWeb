(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[87],{1198:function(e,t,a){"use strict";a.r(t);var n=a(198),l=a(199),r=a(201),o=a(200),s=a(146),c=a(202),i=a(0),u=a.n(i),d=a(664),m=a(665),b=a(675),f=a(765),p=a(669),v=a.n(p),g=a(203),h=(a(681),a(53));var E=function(e){function t(e){var a,l,c,i;return Object(n.a)(this,t),l=this,c=t,i=[e],c=Object(s.a)(c),(a=Object(r.a)(l,Object(o.a)()?Reflect.construct(c,i||[],Object(s.a)(l).constructor):c.apply(l,i))).state={userChatList:[]},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));h.a.get("/user/userVideohistory/".concat(t)).then((function(t){var a;!0===t.data.status&&e.setState({userChatList:null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.userChatList;return u.a.createElement(g.a,{headerTop:"visible"},u.a.createElement("section",{className:"pt-0 pb-0"},u.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(b.a,{md:"12"},u.a.createElement("div",{className:"leftcont text-left"},u.a.createElement("h1",null,"User VideoCall History"))))))),u.a.createElement("section",null,u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(b.a,{lg:"12"},u.a.createElement("div",{className:""},u.a.createElement(f.a,{striped:!0,className:""},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Astrologer Name"),u.a.createElement("th",null,"Conversation Type"),u.a.createElement("th",null,"Rate"),u.a.createElement("th",null,"Duration"),u.a.createElement("th",null,"Deducation"),u.a.createElement("th",null,"Date/Time"))),e.length?e.map((function(e){var t,a;return u.a.createElement("tbody",{key:e._id},u.a.createElement("tr",null,u.a.createElement("td",null,null===e||void 0===e||null===(t=e.astroId)||void 0===t?void 0:t.fullname),u.a.createElement("td",null,null===e||void 0===e?void 0:e.type," Call"),u.a.createElement("td",null,null===e||void 0===e||null===(a=e.astroId)||void 0===a?void 0:a.callCharge,"/Min."),u.a.createElement("td",null,null===e||void 0===e?void 0:e.duration," Min"),u.a.createElement("td",null,"Rs ",null===e||void 0===e?void 0:e.userdeductedAmt," "),u.a.createElement("td",null,null===e||void 0===e?void 0:e.createdAt.split("T")[0])))})):null)))))))}}]),t}(u.a.Component);t.default=E},669:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},675:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(0),o=a.n(r),s=a(4),c=a.n(s),i=a(77),u=a.n(i),d=a(58),m=["className","cssModule","widths","tag"],b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),p={tag:d.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,c=Object(l.a)(e,m),i=[];r.forEach((function(t,n){var l=e[t];if(delete c[t],l||""===l){var r=!n;if(Object(d.h)(l)){var o,s=r?"-":"-"+t+"-",m=g(r,t,l.size);i.push(Object(d.j)(u()(((o={})[m]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o)),a))}else{var b=g(r,t,l);i.push(b)}}})),i.length||i.push("col");var b=Object(d.j)(u()(t,i),a);return o.a.createElement(s,Object(n.a)({},c,{className:b}))};h.propTypes=p,h.defaultProps=v,t.a=h},681:function(e,t,a){},765:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(0),o=a.n(r),s=a(4),c=a.n(s),i=a(77),u=a.n(i),d=a(58),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],b={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.n,responsiveTag:d.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var t=e.className,a=e.cssModule,r=e.size,s=e.bordered,c=e.borderless,i=e.striped,b=e.dark,f=e.hover,p=e.responsive,v=e.tag,g=e.responsiveTag,h=e.innerRef,E=Object(l.a)(e,m),j=Object(d.j)(u()(t,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!f&&"table-hover"),a),O=o.a.createElement(v,Object(n.a)({},E,{ref:h,className:j}));if(p){var y=Object(d.j)(!0===p?"table-responsive":"table-responsive-"+p,a);return o.a.createElement(g,{className:y},O)}return O};f.propTypes=b,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f}}]);
//# sourceMappingURL=87.0973f80f.chunk.js.map