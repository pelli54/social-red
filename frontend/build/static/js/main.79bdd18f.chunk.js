(this.webpackJsonpappdev=this.webpackJsonpappdev||[]).push([[0],{41:function(e,t,a){e.exports=a(74)},46:function(e,t,a){},47:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),s=(a(46),a(47),a(14)),u=a(3),l=a(7),p=a(4),i={post:[],user:{name:"",token:""},error:"",onEdit:"",onProfile:{id:"",name:""},loading:!1},m=function(e,t){switch(t.type){case"SET_POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload||[]});case"SET_USER":return Object(p.a)(Object(p.a)({},e),{},{user:t.payload});case"SET_ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});case"SET_ONEDIT":return Object(p.a)(Object(p.a)({},e),{},{onEdit:t.payload});case"SET_ONPROFILE":return Object(p.a)(Object(p.a)({},e),{},{onProfile:t.payload});case"SET_LOADING":return Object(p.a)(Object(p.a)({},e),{},{loading:!e.loading});default:return e}},d=Object(n.createContext)(),E=function(e){var t=e.children,a=Object(n.useReducer)(m,i),c=Object(l.a)(a,2),o=c[0],s=c[1];return r.a.useEffect((function(){if(localStorage.postToken){var e=JSON.parse(localStorage.postToken);s({type:"SET_USER",payload:e})}localStorage.postToken||s({type:"SET_USER",payload:{username:"",token:""}})}),[]),r.a.createElement(d.Provider,{value:[o,s]},t)},f=function(){return Object(n.useContext)(d)[0]},O=function(){return Object(n.useContext)(d)[1]},y=function(){var e=f().user,t=O(),a=Object(u.g)();return r.a.createElement("div",{className:"navbar"},r.a.createElement(s.b,{exact:!0,to:"/"},r.a.createElement("div",{className:"logo"},"SOCIAL POSTER")),r.a.createElement("div",{className:"buttonBox"},""!==e.username?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return t({type:"SET_ONPROFILE",payload:{name:e.username,id:""}}),void a.push("/profile")}},"hola ",e.username),r.a.createElement("span",{onClick:function(){return localStorage.removeItem("postToken"),void t({type:"SET_USER",payload:{username:"",token:""}})}},"LogOut")):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{exact:!0,to:"/login"},r.a.createElement("span",null,"Login")),r.a.createElement(s.b,{exact:!0,to:"/signup"},r.a.createElement("span",null,"Signup")))))},b=a(39),v=function(e){var t=e.component,a=Object(b.a)(e,["component"]),n=f().user;return r.a.createElement(u.b,Object.assign({},a,{render:function(e){var a=localStorage.getItem("postToken");return""!==n.username||a?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/login"}})}}))},S=a(2),T=a.n(S),g=a(5),k=a(8),_=a.n(k),N="http://localhost:4000/api/",h=function(){var e=Object(g.a)(T.a.mark((function e(t,a){var n,r,c,o,s,u,l,p,i,m,d,E;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},a&&(n={headers:{"x-access-token":a}}),e.t0=t.type,e.next="GET_ALL_POST"===e.t0?5:"GET_MY_POST"===e.t0?9:"GET_POST_BY"===e.t0?13:"GET_ONE_POST"===e.t0?17:"CREATE_POST"===e.t0?22:"UPDATE_POST"===e.t0?26:"DELETE_POST"===e.t0?31:"LIKE"===e.t0?35:"DISLIKE"===e.t0?39:"LOGIN"===e.t0?43:"SIGNUP"===e.t0?47:51;break;case 5:return e.next=7,_.a.get(N+"post",n);case 7:return r=e.sent,e.abrupt("return",r.data);case 9:return e.next=11,_.a.get(N+"mypost",n);case 11:return c=e.sent,e.abrupt("return",c.data);case 13:return e.next=15,_.a.get(N+"postbyuser/"+t.payload,n);case 15:return o=e.sent,e.abrupt("return",o.data);case 17:return console.log("getone",t),e.next=20,_.a.get(N+"post/"+t.payload,n);case 20:return s=e.sent,e.abrupt("return",s.data);case 22:return e.next=24,_.a.post(N+"post",t.payload,n);case 24:return u=e.sent,e.abrupt("return",u.data);case 26:return console.log(n),e.next=29,_.a.put(N+"post/"+t.payload.id,{content:t.payload.content},n);case 29:return l=e.sent,e.abrupt("return",l.data);case 31:return e.next=33,_.a.delete(N+"post/"+t.payload,n);case 33:return p=e.sent,e.abrupt("return",p.data);case 35:return e.next=37,_.a.get(N+"like/"+t.payload,n);case 37:return i=e.sent,e.abrupt("return",i.data);case 39:return e.next=41,_.a.get(N+"dislike/"+t.payload,n);case 41:return m=e.sent,e.abrupt("return",m.data);case 43:return e.next=45,_.a.post(N+"users/login",t.payload);case 45:return d=e.sent,e.abrupt("return",d.data);case 47:return e.next=49,_.a.post(N+"users/signup",t.payload);case 49:return E=e.sent,e.abrupt("return",E.data);case 51:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=a(38),j=a.n(x),w=a(36),P=a.n(w),I=a(35),L=a.n(I),R=a(37),C=a.n(R),G=function(e){var t=e.content,a=e.postname,c=e.id,o=e.like,s=e.index,p=Object(n.useState)(!1),i=Object(l.a)(p,2),m=i[0],d=i[1],E=f(),y=E.user,b=E.post,v=(E.onEdit,O()),S=Object(u.g)(),k=function(){var e=Object(g.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({type:"SET_LOADING"}),e.next=3,h({type:"DELETE_POST",payload:c},y.token);case 3:t=e.sent,v({type:"SET_POST",payload:t}),v({type:"SET_LOADING"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v({type:"SET_ONEDIT",payload:c});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v({type:"SET_LOADING"}),m){e.next=7;break}return e.next=4,h({type:"LIKE",payload:c},y.token);case 4:t=e.sent,v({type:"SET_POST",payload:t}),v({type:"SET_LOADING"});case 7:if(!m){e.next=13;break}return e.next=10,h({type:"DISLIKE",payload:c},y.token);case 10:a=e.sent,v({type:"SET_POST",payload:a}),v({type:"SET_LOADING"});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o.some((function(e){return e===y.username}))&&d(!0),o.some((function(e){return e===y.username}))||d(!1)}),[b]),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"cardHeader"},r.a.createElement("div",{className:"nameContent"},r.a.createElement("div",{className:"foto"}),r.a.createElement("div",{className:"name",onClick:function(){return v({type:"SET_ONPROFILE",payload:{id:b[s].username._id,name:a}}),void S.push("/profile")}},a)),r.a.createElement("div",{className:"btnCont"},a===y.username?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return k()}},r.a.createElement(L.a,null)),r.a.createElement("button",{onClick:function(){return _()}},r.a.createElement(P.a,null))):r.a.createElement(r.a.Fragment,null))),r.a.createElement("div",{className:"cardContent"},r.a.createElement("div",{className:"content"},t),r.a.createElement("div",{className:m?"liked":"like"},r.a.createElement("button",{onClick:function(){return N()}},m?r.a.createElement(j.a,null):r.a.createElement(C.a,null)))))},D=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=f(),s=o.post,u=o.user,p=o.onProfile,i=O(),m=function(){var e=Object(g.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({type:"GET_MY_POST"},u.token);case 2:t=e.sent,i({type:"SET_POST",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(g.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({type:"GET_POST_BY",payload:p.id},u.token);case 2:t=e.sent,i({type:"SET_POST",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){""===p.name&&(c(u.username),m()),p.name===u.username&&(c(u.username),m()),p.name!==u.username&&""!==p.name&&(c(p.name),d()),console.log(a)}),[u]),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"pic"}),r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"label"},"Username:"),r.a.createElement("div",{className:"name"},a))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},p.name===u.username?"My Posts":"Post"),r.a.createElement("div",{className:"cardContain"},0===s.length?r.a.createElement("h2",null,"No post"):s.map((function(e,t){return r.a.createElement(G,{key:e._id,content:e.content,postname:e.username.username,id:e._id,like:e.like,index:t})}))))))},A=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=f(),s=o.user,u=o.onEdit,p=O(),i=function(){var e=Object(g.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({type:"SET_LOADING"}),e.next=3,h({type:"GET_ONE_POST",payload:u},s.token);case 3:t=e.sent,c(t.content),p({type:"SET_LOADING"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(g.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p({type:"SET_LOADING"}),""!==u){e.next=8;break}return e.next=4,h({type:"CREATE_POST",payload:{content:a}},s.token);case 4:t=e.sent,p({type:"SET_POST",payload:t}),c(""),p({type:"SET_LOADING"});case 8:if(""===u){e.next=16;break}return e.next=11,h({type:"UPDATE_POST",payload:{id:u,content:a}},s.token);case 11:n=e.sent,p({type:"SET_POST",payload:n}),c(""),p({type:"SET_ONEDIT",payload:""}),p({type:"SET_LOADING"});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){""!==u&&i(),""===u&&c("")}),[u]),r.a.createElement("div",{className:"formPost"},r.a.createElement("input",{name:"content",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Write a Post"}),r.a.createElement("button",{onClick:function(){return m()}},"Post"))},U=function(){return r.a.createElement("div",{className:"loadingCont"},r.a.createElement("div",{className:"loading"}))},F=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=(t[0],t[1],f()),c=a.post,o=a.user,s=a.loading,u=O(),p=function(){var e=Object(g.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({type:"GET_ALL_POST"},o.token);case 2:t=e.sent,u({type:"SET_POST",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u({type:"SET_LOADING"}),p(),u({type:"SET_LOADING"})}),[o]),r.a.createElement("div",{className:"home"},s?r.a.createElement(U,null):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"container"},r.a.createElement(A,null),r.a.createElement("div",{className:"cardContain"},0===c.length?r.a.createElement("h2",null,"No post"):c.map((function(e,t){return r.a.createElement(G,{key:e._id,content:e.content,postname:e.username.username,id:e._id,like:e.like,index:t})})))))},B=a(17),J=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=(f().user,O()),s=Object(u.g)(),i=function(e){var t=Object(p.a)(Object(p.a)({},a),{},Object(B.a)({},e.target.name,e.target.value));c(t)},m=function(){var e=Object(g.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o({type:"SET_LOADING"}),""!==a.username){e.next=3;break}return e.abrupt("return",o({type:"SET_ERROR",payload:"debe ingresar el Username"}));case 3:if(""!==a.password){e.next=5;break}return e.abrupt("return",o({type:"SET_ERROR",payload:"debe ingresar el Password"}));case 5:return e.next=7,h({type:"LOGIN",payload:t});case 7:(n=e.sent).message,n&&(localStorage.setItem("postToken",JSON.stringify({username:t.username,token:n.token})),o({type:"SET_USER",payload:{username:t.username,token:n.token}}),o({type:"SET_LOADING"}),s.push("/"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"formHeader"},"Sign In"),r.a.createElement("div",{className:"content"},r.a.createElement("input",{placeholder:"Username",value:a.username,name:"username",onChange:i}),r.a.createElement("input",{placeholder:"Password",value:a.password,name:"password",onChange:i,type:"password"}),r.a.createElement("button",{onClick:function(){return m(a)}},"Login"))))},K=function(){var e=Object(n.useState)({username:"",password:"",passwordC:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=(f().user,O()),s=Object(u.g)(),i=function(e){var t=Object(p.a)(Object(p.a)({},a),{},Object(B.a)({},e.target.name,e.target.value));c(t)},m=function(){var e=Object(g.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o({type:"SET_LOADING"}),""!==a.username){e.next=3;break}return e.abrupt("return",o({type:"SET_ERROR",parload:"debe ingresar el Username"}));case 3:if(""!==a.password){e.next=5;break}return e.abrupt("return",o({type:"SET_ERROR",parload:"debe ingresar el Password"}));case 5:if(""!==a.passwordC){e.next=7;break}return e.abrupt("return",o({type:"SET_ERROR",parload:"debe confirmar el password"}));case 7:if(a.password===a.passwordC){e.next=9;break}return e.abrupt("return",o({type:"SET_ERROR",parload:"las contrase\xf1as no coinciden"}));case 9:return e.prev=9,e.next=12,h({type:"SIGNUP",payload:t});case 12:(n=e.sent)&&(console.log(n),localStorage.setItem("postToken",JSON.stringify({username:t.username,token:n.token})),o({type:"SET_USER",payload:{username:t.username,token:n.token}}),o({type:"SET_LOADING"}),s.push("/")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"formHeader"},"Sign Up"),r.a.createElement("div",{className:"content"},r.a.createElement("input",{placeholder:"Username",name:"username",value:a.username,onChange:i}),r.a.createElement("input",{placeholder:"Password",name:"password",value:a.password,onChange:i,type:"password"}),r.a.createElement("input",{placeholder:"Confirm Password",name:"passwordC",value:a.paswordC,onChange:i,type:"password"}),r.a.createElement("button",{onClick:function(){return m(a)}},"Login"))))};var Y=function(){return r.a.createElement(E,null,r.a.createElement(s.a,null,r.a.createElement(y,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/signup",component:K}),r.a.createElement(u.b,{path:"/login",component:J}),r.a.createElement(v,{path:"/profile",component:D}),r.a.createElement(v,{path:"/",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.79bdd18f.chunk.js.map