(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[109,157],{1173:function(e,t,a){"use strict";a.r(t);var n=a(200),c=a(201),l=a(202),o=a(203),r=a(0),s=a.n(r),i=a(2),u=a(667),d=a(668),m=a(683),p=a(204),f=a(832),v=a(50),g=a(672),h=a.n(g),E=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={productList:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("/user/productbycategory/".concat(t)).then((function(t){console.log("productbycategory",t.data.data),e.setState({productList:t.data.data}),t.data.status})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.productList;return s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(h.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(u.a,null,s.a.createElement(d.a,null,s.a.createElement(m.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Online-puja Products"),s.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),s.a.createElement("section",{className:"ptb-0"},e.length?s.a.createElement(u.a,null,s.a.createElement(d.a,null,s.a.createElement(m.a,{lg:"12"},s.a.createElement("div",{className:"pt-10 pb-50"},s.a.createElement(f.default,null),s.a.createElement(d.a,null,e.map((function(e){var t,a;return s.a.createElement(m.a,{md:"4",key:null===e||void 0===e?void 0:e._id},s.a.createElement("div",{className:"po-box text-center"},s.a.createElement(d.a,null,s.a.createElement(m.a,{md:"12"},s.a.createElement("div",{className:"po-1 text-center"},s.a.createElement("img",{src:null===e||void 0===e?void 0:e.category.img,alt:"pooja",width:"250px",height:"200px"}))),s.a.createElement(m.a,{md:"12"},s.a.createElement("div",{className:"po-1 mt-1 mb-1 text-center"},s.a.createElement("h3",null,null===(t=e.product)||void 0===t?void 0:t.title),s.a.createElement("p",null,"Puja Price Rs",(null===e||void 0===e?void 0:e.price)?null===e||void 0===e?void 0:e.price:0,"/-"),s.a.createElement(i.c,{to:"/poojadetail/"+(null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a._id),className:"pto-l text-center"},"Book Now"))))))}))))),s.a.createElement(m.a,{lg:"6"}))):s.a.createElement("div",{className:"notFound text-center",style:{color:"red",height:"50vh"}},s.a.createElement("span",null," No Product Found"))))}}]),a}(s.a.Component);t.default=E},672:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},683:function(e,t,a){"use strict";var n=a(7),c=a(15),l=a(0),o=a.n(l),r=a(4),s=a.n(r),i=a(78),u=a.n(i),d=a(55),m=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),v={tag:d.n,xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.widths,r=e.tag,s=Object(c.a)(e,m),i=[];l.forEach((function(t,n){var c=e[t];if(delete s[t],c||""===c){var l=!n;if(Object(d.h)(c)){var o,r=l?"-":"-"+t+"-",m=h(l,t,c.size);i.push(Object(d.j)(u()(((o={})[m]=c.size||""===c.size,o["order"+r+c.order]=c.order||0===c.order,o["offset"+r+c.offset]=c.offset||0===c.offset,o)),a))}else{var p=h(l,t,c);i.push(p)}}})),i.length||i.push("col");var p=Object(d.j)(u()(t,i),a);return o.a.createElement(r,Object(n.a)({},s,{className:p}))};E.propTypes=v,E.defaultProps=g,t.a=E},743:function(e,t,a){"use strict";t.a=function(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}},832:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(761);t.default=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"st-search"},c.a.createElement(l.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){},autoFocus:!0,formatResult:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),c.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}}}]);
//# sourceMappingURL=109.2edf9404.chunk.js.map