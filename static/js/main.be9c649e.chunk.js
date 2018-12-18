(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),c=n.n(o),l=n(18),i=n(24),u=n(25),s=n.n(u),d=n(8),m=n(9),f=n(11),h=n(10),p=n(12),b=n(50),v=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={modalIsOpen:!1},t.openModal=function(){t.setState({modalIsOpen:!0})},t.closeModal=function(){t.setState({modalIsOpen:!1})},t}return Object(p.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,this.state,{openModal:this.openModal,closeModal:this.closeModal}))}}]),n}(r.a.Component)},g=n(52),O=n(53),y=n.n(O),E=(n(115),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onInputChangeHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.onDateChangeHandler=function(e){n.setState({date:e})},n.onSubmitHandler=function(e){var t=n.props,a=t.onSubmit,r=t.afterSubmit;e.preventDefault(),a(n.state.title,n.state.date),r&&r()},n.state={date:e.date||new Date,title:""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmitHandler},r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"title",onChange:this.onInputChangeHandler,placeholder:"Title",required:!0,maxLength:30})),r.a.createElement("div",null,r.a.createElement(y.a,{locale:"en-GB",onChange:this.onDateChangeHandler,value:this.state.date,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Save")))}}]),t}(r.a.Component)),D=Object(l.b)(null,{onSubmit:function(e,t){return{type:"ADD_REMINDER",title:e,date:t}}})(E),j=(n(117),function(e,t){return new Date(t,e+1,0).getDate()}),w={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",minHeight:400,minWidth:400,transform:"translate(-50%, -50%)"}},k=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onDateClickHandler=function(e){var t=new Date(n.state.selectedDate.getTime());t.setDate(e),n.setState({selectedDate:t},n.props.openModal())},n.state={selectedDate:e.date||new Date},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.reminders,a=void 0===n?[]:n,o=t.modalIsOpen,c=t.closeModal,l=this.state.selectedDate,i=l.getFullYear(),u=l.getMonth(),d=j(u,i),m=new Date(i,u,1).getDay(),f=7-(m+d)%7,h=(d+m+f)/7,p=function(e,t){var n=t.getFullYear(),a=t.getMonth(),r=new Date(n,a,1),o=j(a,n),c=new Date(n,a,o);return e.reduce(function(e,t){var n=t.date.getTime();return n>=r&&n<=c&&(e[t.date.getDate()]?e[t.date.getDate()].push(t):e[t.date.getDate()]=[t]),e},{})}(a,l);return r.a.createElement("div",{className:"month-container",style:{gridTemplateRows:"32px repeat(".concat(h,", 1fr)")}},k.map(function(e){return r.a.createElement("div",{key:e,className:"month-header"},e)}),new Array(m).fill().map(function(e,t){return r.a.createElement("div",{key:"start-offset-".concat(t),className:"day day--offset"})}),new Array(d).fill().map(function(t,n){return r.a.createElement("div",{key:"".concat(i,"-").concat(u,"-").concat(n),className:"day",onClick:function(){return e.onDateClickHandler(n+1)}},n+1,p[n+1]&&p[n+1].map(function(e,t){var a=e.title;return r.a.createElement("div",{key:"".concat(t,"+").concat(n)},a)}))}),new Array(f).fill().map(function(e,t){return r.a.createElement("div",{key:"end-offset-".concat(t),className:"day day--offset"})}),r.a.createElement(s.a,{isOpen:o,onRequestClose:c,style:w},r.a.createElement(D,{date:l,afterSubmit:c})))}}]),t}(r.a.Component),S=Object(b.a)(v,Object(l.b)(function(e){return{reminders:e}}))(C),M=(n(119),function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"React Redux Calendar Challenge")),r.a.createElement("main",null,r.a.createElement(S,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(55),I=n(54),R=n.n(I),T=function(e,t){return e.date.getTime()-t.date.getTime()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REMINDER":var n=t.date,a=t.title,r=Object(H.a)(e);return R()(r,T,{date:n,title:a}),r;default:return e}};n(121);s.a.setAppElement("#root");var N=Object(i.b)(A);c.a.render(r.a.createElement(l.a,{store:N},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){e.exports=n(123)}},[[56,2,1]]]);
//# sourceMappingURL=main.be9c649e.chunk.js.map