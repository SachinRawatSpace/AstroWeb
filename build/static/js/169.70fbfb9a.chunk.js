(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[169],{677:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),c=a(207);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}},905:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(206),r=a(200),l=a(201),c=a(210),i=a(202),s=a(203),o=a(0),m=a.n(o),u=a(685),p=a.n(u),d=a(906),b=a.n(d),E=a(50),v=a(704),h=a(204),f=a(677),g=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"",otp:"123456",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),E.a.post("/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null,m.a.createElement(p.a,null,m.a.createElement("title",null,"Astrogyata | Login"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(h.a,{headerTop:"visible"},m.a.createElement(f.a,null),m.a.createElement("div",{className:"login-register-area pt-100 pb-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},m.a.createElement("div",{className:"login-register-wrapper"},m.a.createElement(v.a.Container,{defaultActiveKey:"login"},m.a.createElement(v.a.Content,null,m.a.createElement(v.a.Pane,{eventKey:"login"},m.a.createElement("div",{className:"login-form-container"},m.a.createElement("div",{className:"login-register-form"},m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",null,m.a.createElement(b.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:m.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),m.a.createElement("div",{className:"button-box"},m.a.createElement("button",{type:"back"},"Back"),m.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=169.70fbfb9a.chunk.js.map