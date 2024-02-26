(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[95],{1046:function(e,t,a){e.exports=function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var t=window.Element.prototype.matches,a=function(e,t){return e.closest(t)},n=function(e,t){return new window.Event(e,t)},r=function(e,t){return new window.CustomEvent(e,t)};!function(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(a=function(e,a){if(!document.documentElement.contains(e))return null;do{if(t.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(n=function(e,t){t=t||{};var a=document.createEvent("Event");return a.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),a}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;r=function(t,a){var n=document.createEvent("CustomEvent");return a=a||{bubbles:!1,cancelable:!1,detail:null},n.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),n.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},n}}}();var l="active",s="linear",i="dstepper-block",o="dstepper-none",c="fade",m="vertical",u=function(e,t,a,n){var s=e.bsStepper;if(!s._steps[t].classList.contains(l)&&!s._stepsContents[t].classList.contains(l)){var o=r("show.bs-stepper",{cancelable:!0,detail:{from:s._currentIndex,to:t,indexStep:t}});e.dispatchEvent(o);var c=s._steps.filter((function(e){return e.classList.contains(l)})),u=s._stepsContents.filter((function(e){return e.classList.contains(l)}));o.defaultPrevented||(c.length&&c[0].classList.remove(l),u.length&&(u[0].classList.remove(l),e.classList.contains(m)||s.options.animation||u[0].classList.remove(i)),d(e,s._steps[t],s._steps,a),p(e,s._stepsContents[t],s._stepsContents,u,n))}},d=function(e,t,a,n){a.forEach((function(t){var a=t.querySelector(n.selectors.trigger);a.setAttribute("aria-selected","false"),e.classList.contains(s)&&a.setAttribute("disabled","disabled")})),t.classList.add(l);var r=t.querySelector(n.selectors.trigger);r.setAttribute("aria-selected","true"),e.classList.contains(s)&&r.removeAttribute("disabled")},p=function(e,t,a,n,s){var m=e.bsStepper,u=a.indexOf(t),d=r("shown.bs-stepper",{cancelable:!0,detail:{from:m._currentIndex,to:u,indexStep:u}});if(t.classList.contains(c)){t.classList.remove(o);var p=h(t);t.addEventListener("transitionend",(function a(){t.classList.add(i),t.removeEventListener("transitionend",a),e.dispatchEvent(d),s()})),n.length&&n[0].classList.add(o),t.classList.add(l),g(t,p)}else t.classList.add(l),t.classList.add(i),e.dispatchEvent(d),s()},h=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],1e3*parseFloat(t)):0},g=function(e,t){var a=!1,r=t+5;function l(){a=!0,e.removeEventListener("transitionend",l)}e.addEventListener("transitionend",l),window.setTimeout((function(){a||e.dispatchEvent(n("transitionend")),e.removeEventListener("transitionend",l)}),r)},E={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,a){var n,r=this;void 0===a&&(a={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},E,{},a),this.options.selectors=e({},E.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(s),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){r._stepsContents.push(r._element.querySelector(e.getAttribute("data-target")))})),n=this._stepsContents,this.options.animation&&n.forEach((function(e){e.classList.add(c),e.classList.add(o)})),this._setLinkListeners(),Object.defineProperty(this._element,"bsStepper",{value:this,writable:!0}),this._steps.length&&u(this._element,this._currentIndex,this.options,(function(){}))}var n=t.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var n,r=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=(e.options,function(e){e.preventDefault()}),r.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=(n=e.options,function(e){e.preventDefault();var t=a(e.target,n.selectors.steps),r=a(t,n.selectors.stepper),l=r.bsStepper,s=l._steps.indexOf(t);u(r,s,n,(function(){l._currentIndex=s}))}),r.addEventListener("click",e._clickStepNonLinearListener))}))},n.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.to=function(e){var t=this,a=e-1,n=a>=0&&a<this._steps.length?a:0;u(this._element,n,this.options,(function(){t._currentIndex=n}))},n.reset=function(){var e=this;u(this._element,0,this.options,(function(){e._currentIndex=0}))},n.destroy=function(){var e=this;this._steps.forEach((function(t){var a=t.querySelector(e.options.selectors.trigger);e.options.linear?a.removeEventListener("click",e._clickStepLinearListener):a.removeEventListener("click",e._clickStepNonLinearListener)})),this._element.bsStepper=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},1047:function(e,t,a){},1221:function(e,t,a){"use strict";a.r(t);var n=a(206),r=a(200),l=a(201),s=a(202),i=a(203),o=a(0),c=a.n(o),m=a(679),u=a.n(m),d=a(1046),p=a.n(d),h=a(50),g=(a(844),a(1047),a(902)),E=a.n(g),f=(a(903),a(672)),b=a.n(f),_=a(667),v=a(733),y=a(668),N=a(683),k=a(849),x=a(749),w=a(718);a(51),a(24);var C=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onChangeHandler=function(t){e.setState({selectedFile:t.target.files[0]}),e.setState({selectedName:t.target.files[0].name}),console.log(t.target.files[0])},e.handlechange=function(t){console.log("SignUp",t.target.value),e.setState(Object(n.a)({},t.target.name,t.target.value))},e.changeHandler=function(t){t.preventDefault(),e.setState(Object(n.a)({},t.target.name,t.target.value))},e.submitHandlerLogin=function(t){t.preventDefault(),h.a.post("/user/signup",e.state).then((function(t){console.log(t),localStorage.setItem("auth-token",t.data.token),e.setState({token:t.data.token}),u()("Success!"," Register Successful Done!","success"),e.props.history.push("/otpverify")})).catch((function(e){console.log(e.response),u()("Error!","Something went wrong","error")}))},e.submitHandler=function(t){t.preventDefault();var a=localStorage.getItem("astroId"),n=new FormData;n.append("_id",a),n.append("gender",e.state.gender),n.append("dob",e.state.dob),n.append("primary_skills",e.state.primary_skills),n.append("language",e.state.language),n.append("all_skills",e.state.all_skills),n.append("exp_in_years",e.state.exp_in_years),n.append("conrubute_hrs",e.state.conrubute_hrs),n.append("hear_abt_astrology",e.state.hear_abt_astrology),n.append("other_online_platform",e.state.other_online_platform),n.append("why_onboard_you",e.state.why_onboard_you),n.append("suitable_tym_interview",e.state.suitable_tym_interview),n.append("crnt_city",e.state.crnt_city),n.append("income_src",e.state.income_src),n.append("highest_qualification",e.state.highest_qualification),n.append("degree_deploma",e.state.degree_deploma),n.append("clg_scl_name",e.state.clg_scl_name),n.append("lrn_abt_astrology",e.state.lrn_abt_astrology),n.append("insta_link",e.state.insta_link),n.append("fb_link",e.state.fb_link),n.append("linkedln_link",e.state.linkedln_link),n.append("youtube_link",e.state.youtube_link),n.append("website_link",e.state.website_link),n.append("anybody_prefer",e.state.anybody_prefer),n.append("min_earning_expe",e.state.min_earning_expe),n.append("max_earning_expe",e.state.max_earning_expe),n.append("long_bio",e.state.long_bio),n.append("status",e.state.status),n.append("callCharge",e.state.callCharge),n.append("fullname",e.state.fullname),n.append("max_amount",e.state.max_amount),n.append("min_amount",e.state.min_amount),n.append("password",e.state.password),n.append("cnfmPassword",e.state.cnfmPassword),null!==e.state.selectedFile&&n.append("img",e.state.selectedFile),h.a.post("/user/editAstroDetails/".concat(e.state.userId),n).then((function(t){console.log(t.data),u()("Success!","Submitted SuccessFull!","success"),e.props.history.push("/")})).catch((function(e){u()("Error!","You clicked the button!","error"),console.log(e.response)}))},e.stepperFirst=function(){var t=e.state,a=t.email,n=t.mobile,r=t.fullname;a&&n&&r&&h.a.post("/user/signup",{mobile:parseInt(n)!==isNaN?parseInt(n):"null",email:a,fullname:r,moblie:n}).then((function(t){e.stepper.next(),console.log("@@@####",t.data);var a=t.data.user;localStorage.setItem("user_id",t.data._id),localStorage.setItem("userInfo",JSON.stringify(a))})).catch((function(e){console.log(e),console.log(e.response),u()("Error!"," Wrong UserName or Password","error")}))},e.stepperSecond=function(){var t=e.state,a=t.otp,n=t.mobile;h.a.post("/user/verifyotp",{otp:parseInt(a,n)!==isNaN?parseInt(a):"null",mobile:n}).then((function(t){e.stepper.next(),console.log("@@@####",t.data);var a=t.data.user;e.setState({userId:t.data._id}),localStorage.setItem("user_id",t.data._id),localStorage.setItem("userInfo",JSON.stringify(a))})).catch((function(e){console.log(e),console.log(e.response),u()("Error!"," Wrong UserName or Password","error")}))},e.state={otp:"",email:"",mobile:""},e.state={gender:"",dob:"",primary_skills:"",all_skills:"",language:"",exp_in_years:"",conrubute_hrs:"",hear_abt_astrology:"",other_online_platform:"",why_onboard_you:"",suitable_tym_interview:"",crnt_city:"",income_src:"",highest_qualification:"",degree_deploma:"",clg_scl_name:"",lrn_abt_astrology:"",insta_link:"",fb_link:"",linkedln_link:"",youtube_link:"",website_link:"",anybody_prefer:"",min_earning_expe:"",max_earning_expe:"",long_bio:"",status:"Active",callCharge:"",fullname:"",img:{},min_amount:"",max_amount:"",Monday:"",Tuesday:"",Wednesday:"",Thursday:"",Friday:"",Saturday:"",Sunday:"",password:"",cnfmPassword:"",approvedstatus:"false",otpverify:"true",selectedName:"",selectedFile:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.stepper=new p.a(document.querySelector("#stepper1"),{linear:!1,animation:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("section",{className:"",style:{backgroundImage:"url(".concat(b.a,")"),width:"100%",padding:"50px 0px",height:"100%",backgroundSize:"cover"}},c.a.createElement(_.a,null,c.a.createElement("section",{className:"ptb-30"},c.a.createElement("div",{className:"stp-1"},c.a.createElement("h2",{className:"th-1"},"Astrogyata"),c.a.createElement("h4",{className:"th-2"},"Astrologer Register"),c.a.createElement("div",{id:"stepper1",className:"bs-stepper"},c.a.createElement("div",{className:"bs-stepper-header"},c.a.createElement("div",{className:"step","data-target":"#test-l-1"},c.a.createElement("button",{className:"step-trigger"},c.a.createElement("span",{className:"bs-stepper-circle"},"1"),c.a.createElement("span",{className:"bs-stepper-label"},"Personal Details"))),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"step","data-target":"#test-otp"},c.a.createElement("button",{className:"step-trigger"},c.a.createElement("span",{className:"bs-stepper-circle"},"2"),c.a.createElement("span",{className:"bs-stepper-label"},"Verify OTP"))),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"step","data-target":"#test-l-2"},c.a.createElement("button",{className:"step-trigger"},c.a.createElement("span",{className:"bs-stepper-circle"},"3"),c.a.createElement("span",{className:"bs-stepper-label"},"Skill Details"))),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"step","data-target":"#test-l-3"},c.a.createElement("button",{className:"step-trigger"},c.a.createElement("span",{className:"bs-stepper-circle"},"4"),c.a.createElement("span",{className:"bs-stepper-label"},"Other Details"))),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"step","data-target":"#test-l-4"},c.a.createElement("button",{className:"step-trigger"},c.a.createElement("span",{className:"bs-stepper-circle"},"5"),c.a.createElement("span",{className:"bs-stepper-label"},"Availability ")))),c.a.createElement("div",{className:"bs-stepper-content"},c.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement("div",{id:"test-l-1",className:"content"},c.a.createElement(y.a,null,c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Name*"),c.a.createElement(x.a,{type:"text",name:"fullname",required:!0,placeholder:"Enter Your FullName",value:this.state.fullname,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Email Address*"),c.a.createElement(x.a,{type:"email",name:"email",required:!0,placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Mobile Number*"),c.a.createElement(E.a,{countryCodeEditable:!1,country:"in",value:this.state.mobile,onChange:function(t){e.setState({mobile:t})}}),""!==this.state.mobileError?c.a.createElement("span",{style:{color:"red"}},this.state.mobileError):null))),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.stepperFirst()}},"Next")),c.a.createElement("div",{id:"test-otp",className:"content"},c.a.createElement(y.a,null,c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"OTP*"),c.a.createElement(x.a,{type:"number",required:!0,name:"otp",value:this.state.otp,placeholder:"Enter OTP",maxLength:6,onChange:this.changeHandler})))),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.stepperSecond()}},"Next")),c.a.createElement("div",{id:"test-l-2",className:"content"},c.a.createElement(y.a,null,c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Gender*"),c.a.createElement("select",{className:"form-control",value:this.state.gender,onChange:this.changeHandler,required:!0,placeholder:!0,name:"gender"},c.a.createElement("option",{selected:!0},"--select--"),c.a.createElement("option",{value:"Male"},"Male"),c.a.createElement("option",{value:"Female"},"Female")))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"DOB*"),c.a.createElement(x.a,{type:"date",required:!0,name:"dob",maxLength:"8",value:this.state.dob,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Primary Skills*"),c.a.createElement(x.a,{type:"text",placeholder:"Primary Skills",name:"primary_skills",required:!0,value:this.state.primary_skills,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"All Skills*"),c.a.createElement(x.a,{placeholder:"All Skills",name:"all_skills",required:!0,type:"text",value:this.state.all_skills,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Minimum Amount*"),c.a.createElement(x.a,{placeholder:"Enter Amount",name:"min_amount",required:!0,type:"number",value:this.state.min_amount,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Maximum Amount*"),c.a.createElement(x.a,{placeholder:"Enter Amount",required:!0,name:"max_amount",type:"number",value:this.state.max_amount,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Language*"),c.a.createElement(x.a,{placeholder:"Language",required:!0,name:"language",type:"text",value:this.state.language,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Experience in years*"),c.a.createElement(x.a,{type:"number",placeholder:"Experience years",name:"exp_in_years",required:!0,value:this.state.exp_in_years,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement(k.a,null,"How many hours you can contribute daily?*"),c.a.createElement(x.a,{type:"number",name:"conrubute_hrs",placeholder:"Daily Hours",required:!0,value:this.state.conrubute_hrs,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Where did you hear about Astrotalk?*"),c.a.createElement(x.a,{type:"text",required:!0,name:"hear_abt_astrology",placeholder:"About Astrotalk",value:this.state.hear_abt_astrology,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"12"},c.a.createElement("p",{className:"mb-0 mt-10"},"Are you working on any other online platform?*"),c.a.createElement(y.a,null,c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Name of platform"),c.a.createElement(x.a,{type:"text",placeholder:"Name of platform",required:!0,name:"other_online_platform",value:this.state.other_online_platform,onChange:this.changeHandler})))))),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),c.a.createElement("div",{id:"test-l-3",className:"content"},c.a.createElement(y.a,null,c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Why do you think we should onboard you?*"),c.a.createElement(x.a,{type:"text",required:!0,placeholder:"Right your opinion",name:"why_onboard_you",value:this.state.why_onboard_you,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"What is a suitable time for interview*"),c.a.createElement(x.a,{type:"text",required:!0,placeholder:"Enter Interview Time",name:"suitable_tym_interview",value:this.state.suitable_tym_interview,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Which city do you currently live in?"),c.a.createElement(x.a,{type:"text",required:!0,name:"crnt_city",placeholder:"Curretly Your Live Location City",value:this.state.crnt_city,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Call Charge"),c.a.createElement(x.a,{type:"number",required:!0,placeholder:"Call Charge",name:"callCharge",value:this.state.callCharge,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Main Source Of Business (Other Than Astrology)*"),c.a.createElement(x.a,{placeholder:"Source Of Business",name:"income_src",required:!0,type:"text",value:this.state.income_src,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Select Your Highest Qualification*"),c.a.createElement(x.a,{placeholder:"Qualification",name:"highest_qualification",type:"text",required:!0,value:this.state.highest_qualification,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Degree/Diploma*"),c.a.createElement(x.a,{placeholder:"Degree/Diploma",name:"degree_deploma",type:"text",required:!0,value:this.state.degree_deploma,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"College/School/University*"),c.a.createElement(x.a,{type:"text",name:"clg_scl_name",required:!0,placeholder:"College/School/University",value:this.state.clg_scl_name,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"From where did you learn Astrology?"),c.a.createElement(x.a,{type:"text",name:"lrn_abt_astrology",required:!0,placeholder:"Your Learn Plateform",value:this.state.lrn_abt_astrology,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement(k.a,null,"User Image"),c.a.createElement(x.a,{className:"form-control",type:"file",name:"img",onChange:this.onChangeHandler})),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Instagram profile link"),c.a.createElement(x.a,{type:"text",name:"insta_link",required:!0,placeholder:"Instagram profile link",value:this.state.insta_link,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Facebook profile link"),c.a.createElement(x.a,{type:"text",name:"fb_link",required:!0,placeholder:"Facebook profile link",value:this.state.fb_link,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"LinkedIn Profile Link"),c.a.createElement(x.a,{type:"text",name:"linkedln_link",required:!0,placeholder:"LinkedIn Profile Link",value:this.state.linkedln_link,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Youtube channel link"),c.a.createElement(x.a,{type:"text",name:"youtube_link",required:!0,placeholder:"Youtube channel link",value:this.state.youtube_link,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Name of the person who referred you?"),c.a.createElement(x.a,{type:"text",name:"anybody_prefer",required:!0,value:this.state.anybody_prefer,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Minimum Earning Expectation from Astrogyata*"),c.a.createElement(x.a,{type:"number",name:"min_earning_expe",required:!0,value:this.state.min_earning_expe,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Maximum Earning Expectation from Astrogyata*"),c.a.createElement(x.a,{type:"number",name:"max_earning_expe",required:!0,value:this.state.max_earning_expe,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"6"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Website profile link"),c.a.createElement(x.a,{type:"text",name:"website_link",required:!0,value:this.state.website_link,onChange:this.changeHandler}))),c.a.createElement(N.a,{md:"12"},c.a.createElement("div",{className:"form-group mtb-10"},c.a.createElement(k.a,null,"Long bio*"),c.a.createElement("textarea",{type:"text",className:"form-control",name:"long_bio",required:!0,value:this.state.long_bio,onChange:this.changeHandler,placeholder:"Please let us know more about you"})))),c.a.createElement("p",{className:"ptb-10"},"You can reach out to us for Astrologer onboarding support team at onboarding@Astrogyata.com in case of any issues or queries."),c.a.createElement(w.a,{type:"submit",className:"btn btn-primary mt-5"},"Submit")),c.a.createElement("div",{id:"test-l-4",className:"content"}))))))))}}]),a}(c.a.Component);t.default=C},672:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},849:function(e,t,a){"use strict";var n=a(7),r=a(15),l=a(0),s=a.n(l),i=a(4),o=a.n(i),c=a(78),m=a.n(c),u=a(55),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.n,className:o.a.string,cssModule:o.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:o.a.array},E={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,l=e.hidden,i=e.widths,o=e.tag,c=e.check,p=e.size,h=e.for,g=Object(r.a)(e,d),E=[];i.forEach((function(t,n){var r=e[t];if(delete g[t],r||""===r){var l,s=!n;if(Object(u.h)(r)){var i,o=s?"-":"-"+t+"-";l=f(s,t,r.size),E.push(Object(u.j)(m()(((i={})[l]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else l=f(s,t,r),E.push(l)}}));var b=Object(u.j)(m()(t,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,E,!!E.length&&"col-form-label"),a);return s.a.createElement(o,Object(n.a)({htmlFor:h},g,{className:b}))};b.propTypes=g,b.defaultProps=E,t.a=b}}]);
//# sourceMappingURL=95.91e743cc.chunk.js.map