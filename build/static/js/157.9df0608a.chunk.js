(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[157,186],{1212:function(e,t,a){"use strict";a.r(t);var n=a(198),l=a(199),r=a(201),c=a(200),o=a(146),m=a(202),s=a(0),i=a.n(s),u=a(730),p=a(718),E=a(208),f=a.n(E),h=a(967);function d(e,t,a){return t=Object(o.a)(t),Object(r.a)(e,Object(c.a)()?Reflect.construct(t,a||[],Object(o.a)(e).constructor):t.apply(e,a))}var v=function(e){function t(){return Object(n.a)(this,t),d(this,t,arguments)}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"tab-st"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"heading bt"},i.a.createElement("h2",null,"Update / Predictions"),i.a.createElement("img",{src:f.a,alt:""})),i.a.createElement(u.a.Container,{defaultActiveKey:"bestSeller"},i.a.createElement(p.a,{variant:"pills",className:"product-tab-list pt-30 pb-20 text-left"},i.a.createElement(p.a.Item,null,i.a.createElement(p.a.Link,{eventKey:"newArrival"},i.a.createElement("h4",null,"Daily"))),i.a.createElement(p.a.Item,null,i.a.createElement(p.a.Link,{eventKey:"bestSeller"},i.a.createElement("h4",null,"Weekly"))),i.a.createElement(p.a.Item,null,i.a.createElement(p.a.Link,{eventKey:"saleItems"},i.a.createElement("h4",null,"Monthly")))),i.a.createElement("hr",null),i.a.createElement(u.a.Content,null,i.a.createElement(u.a.Pane,{eventKey:"newArrival"},i.a.createElement("div",{className:"row three-column"},i.a.createElement("h3",{className:"s-tt"},"Daily"),i.a.createElement(h.default,null))),i.a.createElement(u.a.Pane,{eventKey:"bestSeller"},i.a.createElement("div",{className:"row three-column"},i.a.createElement("h3",{className:"s-tt"},"Weekly"),i.a.createElement(h.default,null))),i.a.createElement(u.a.Pane,{eventKey:"saleItems"},i.a.createElement("div",{className:"row three-column"},i.a.createElement("h3",{className:"s-tt"},"Monthly"),i.a.createElement(h.default,null))))),i.a.createElement("div",{className:"view-more text-center mt-20 toggle-btn6 col-12"})))}}]),t}(i.a.Component);t.default=v},712:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function r(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function c(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,c=null,o=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?o="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==a||null!==c||null!==o){var m=e.displayName||e.name,s="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+m+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==c?"\n  "+c:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var i=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;i.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",(function(){return c})),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},967:function(e,t,a){"use strict";a.r(t);var n=a(198),l=a(199),r=a(201),c=a(200),o=a(146),m=a(202),s=a(0),i=a.n(s),u=a(2),p=a(664),E=a(665),f=a(675),h=a(830),d=a.n(h),v=a(831),g=a.n(v),y=a(832),b=a.n(y),N=a(833),S=a.n(N),A=a(834),U=a.n(A),W=a(835),_=a.n(W),M=a(836),w=a.n(M),P=a(837),D=a.n(P),j=a(838),x=a.n(j),F=a(839),O=a.n(F),k=a(840),I=a.n(k),C=a(781),R=a.n(C);function K(e,t,a){return t=Object(o.a)(t),Object(r.a)(e,Object(c.a)()?Reflect.construct(t,a||[],Object(o.a)(e).constructor):t.apply(e,a))}var B=function(e){function t(){return Object(n.a)(this,t),K(this,t,arguments)}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},i.a.createElement("div",{className:"category-home"},i.a.createElement("section",null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:R.a,alt:""}),i.a.createElement("h5",null,"Aries"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:I.a,alt:""}),i.a.createElement("h5",null,"Taurus"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:U.a,alt:""}),i.a.createElement("h5",null,"Gemini"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:b.a,alt:""}),i.a.createElement("h5",null,"Cancer"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:_.a,alt:""}),i.a.createElement("h5",null,"Leo"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:d.a,alt:""}),i.a.createElement("h5",null,"virgo"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:w.a,alt:""}),i.a.createElement("h5",null,"libra"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:O.a,alt:""}),i.a.createElement("h5",null,"Scorpio"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:x.a,alt:""}),i.a.createElement("h5",null,"Sagittarius"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:S.a,alt:""}),i.a.createElement("h5",null,"Capricorn"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:g.a,alt:""}),i.a.createElement("h5",null,"Aquarius"),i.a.createElement("p",null,"Mar 21 - Apr 19")))),i.a.createElement(f.a,{lg:"2"},i.a.createElement("div",{className:"bx-1"},i.a.createElement(u.c,null,i.a.createElement("img",{src:D.a,alt:""}),i.a.createElement("h5",null,"Pisces"),i.a.createElement("p",null,"Mar 21 - Apr 19")))))))))}}]),t}(i.a.Component);t.default=B}}]);
//# sourceMappingURL=157.9df0608a.chunk.js.map