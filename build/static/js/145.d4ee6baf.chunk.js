(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[145],{1146:function(e,t,a){"use strict";a.r(t);var n=a(200),l=a(201),o=a(210),r=a(202),c=a(203),s=a(0),i=a.n(s),m=a(2),u=a(667),p=a(668),d=a(683),f=a(718),h=a(204),g=a(672),E=a.n(g),y=a(50),v=a(1214),b=a(1114),_=a(1115),N=a(679),S=a.n(N),w=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleDeleteList=function(e){y.a.get("admin/dlt_ChatIntek/".concat(e)).then((function(e){l.getuserList(),console.log("resp",e.data)})).catch((function(e){console.log("er",e)}))},l.componentDidMount=function(){l.getuserList()},l.getuserList=function(){var e=JSON.parse(localStorage.getItem("user_id"));y.a.get("/admin/intekListByUser/".concat(e)).then((function(e){!0===e.data.status&&l.setState({allUserList:e.data.data})})).catch((function(e){console.log(e)}))},l.handleChating=function(e){l.handleBalacecheck()},l.handleBalacecheck=function(){var e=JSON.parse(localStorage.getItem("user_id")),t=localStorage.getItem("astroId");console.log("astroId",t);var a={userid:e,astroid:t,type:"Chat"};y.a.post("/user/addCallWallet",a).then((function(e){console.log(e.data),!0===e.data.status?l.props.history.push({pathname:"/waitingpagechat",state:e.data}):S()("Recharge","you don't have enough Balance")})).catch((function(e){console.log(e)}))},l.state={allUserList:[],data:{},fullname:"",all_skills:"",language:"",long_bio:"",Exp:"",sunday:"",monday:"",friday:"",thursday:"",tuesday:"",wednesday:"",saturday:"",To:"",callCharge:"",Form:"",astrid:"",userid:"",astroMobile:"",Gallary:[],astroId:"",astro:"",avg_rating:[!1]},l.state={modal:!1},l.toggle=l.toggle.bind(Object(o.a)(l)),l}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,t=this.state.allUserList;return i.a.createElement(h.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(E.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",{style:{color:"#fff"}},"User Chat List "))))))),i.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},i.a.createElement("div",{className:"category-home"},i.a.createElement("section",{className:"pt-0"},i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement("div",{className:"my-1"},i.a.createElement(m.c,{to:"/userrequestform",className:"btn btn-denger wr"},i.a.createElement("button",{className:"btn btn-denger wr"},"Add New Intake Form"))),(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(t){return i.a.createElement(d.a,{md:"4",key:t._id,className:"mt-1"},i.a.createElement("div",{className:"card "},i.a.createElement("div",{className:"card-body "},i.a.createElement("ul",null,i.a.createElement("li",{className:""},"FirstName:",i.a.createElement("span",null,t.firstname),i.a.createElement("div",{className:"delete",style:{float:"right",cursor:"pointer"},onClick:function(){return e.handleDeleteList(t._id)}},i.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))),i.a.createElement("li",null,"BirthPlace:",i.a.createElement("span",null,t.birthPlace)),i.a.createElement("li",null,"Date Of Time:",i.a.createElement("span",null,t.date_of_time)),i.a.createElement("li",null,"Date Of Birth:",i.a.createElement("span",null,t.dob)),i.a.createElement("li",null,"Gender:",i.a.createElement("span",null,t.gender)),i.a.createElement("li",null,"Mobile:",i.a.createElement("span",null,t.mobile)),i.a.createElement("li",null,"Occupation:",i.a.createElement("span",null,t.occupation)),i.a.createElement("li",null,"Marital Status:",i.a.createElement("span",null,t.marital_status)),t.p_birthPlace?i.a.createElement("li",null,"Partner BirthPlace:",i.a.createElement("span",null,t.p_birthPlace)):null,t.p_date_of_time?i.a.createElement("li",null,"Partner Date Of Time:",i.a.createElement("span",null,t.p_date_of_time)):null,t.p_firstname?i.a.createElement("li",null,"Partner First Name:",i.a.createElement("span",null,t.p_firstname)):null,t.p_lastname?i.a.createElement("li",null,"Partner Last Name:",i.a.createElement("span",null,t.p_lastname)):null,i.a.createElement("div",{style:{float:"right"}},i.a.createElement("button",{className:"btn btn-denger wr",onClick:function(){return e.handleBalacecheck(t._id)}},"Start Chat"))))))})):i.a.createElement("h3",{className:"text-center"},"No Intake Form Available")))))),i.a.createElement(v.a,{size:"md",style:{maxWidth:"600px",width:"100%"},isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},i.a.createElement(b.a,{className:"wr-3",toggle:this.toggle},i.a.createElement("h2",{className:"wr-4"},"Recharge Now")),i.a.createElement(_.a,null,i.a.createElement("div",{className:"Wr-1"},i.a.createElement("h3",null,"Minimum balance of 5 minutes (INR 25.0) is required to start call with RajnishM"),i.a.createElement(m.c,{className:"wr-5"},i.a.createElement(f.a,{color:"secondary",onClick:this.toggle},"Cancel")),i.a.createElement(m.c,{className:"wr-6",to:"/walletmoney"},i.a.createElement(f.a,null,"Recharge"))))))}}]),a}(i.a.Component);t.default=w},672:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},736:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function o(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,c=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?c="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==c){var s=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var m=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;m.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",(function(){return r})),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=145.d4ee6baf.chunk.js.map