(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(27),r=n.n(s),i=(n(34),n(14)),o=n(5),l=n(1),u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"inicio"})})},d=n(17),j=n.n(d),b=n(21),p=n(20),m=n(13),h=n(28),O=(n(37),n(46),h.a.initializeApp({apiKey:"AIzaSyAdJU8NW0xw220UBODhs6EUnhzFORuBwMI",authDomain:"prueba-react-6c6d3.firebaseapp.com",projectId:"prueba-react-6c6d3",storageBucket:"prueba-react-6c6d3.appspot.com",messagingSenderId:"727511814872",appId:"1:727511814872:web:f0129fa2ece22a258dfdad",measurementId:"G-E6RZLVGTYK"})),x=O.auth(),f=O.firestore(),v=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(m.a)(s,2),i=r[0],o=r[1],u=Object(c.useState)(""),d=Object(m.a)(u,2),h=d[0],O=d[1],x=Object(c.useState)(""),v=Object(m.a)(x,2),g=v[0],N=v[1];Object(c.useEffect)((function(){(function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("todos").get();case 2:t=e.sent,n=t.docs,c=n.map((function(e){return Object(b.a)({id:e.id},e.data())})),O(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(p.a)(j.a.mark((function e(t){var c,s,r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.trim()||N("La tarea no puede estar vac\xeda"),i.trim()||N("La descripci\xf3n no puede estar vac\xeda"),i.trim()||n.trim()||N("Los campos no pueden estar vac\xedos"),c={tarea:n,descripcion:i},e.prev=5,e.next=8,f.collection("todos").add(c);case 8:return e.sent,e.next=11,f.collection("todos").get();case 11:s=e.sent,r=s.docs,l=r.map((function(e){return Object(b.a)({id:e.id},e.data())})),O(l),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0);case 20:a(""),o("");case 22:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.collection("todos").doc(t).delete();case 3:return e.next=5,f.collection("todos").get();case 5:n=e.sent,c=n.docs,a=c.map((function(e){return Object(b.a)({id:e.id},e.data())})),O(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h2",{children:"To Do's"}),Object(l.jsxs)("form",{onSubmit:k,children:[Object(l.jsx)("input",{value:n,onChange:function(e){a(e.target.value)},className:"form-control",placeholder:"Introduce la tarea",type:"text"}),Object(l.jsx)("input",{value:i,onChange:function(e){o(e.target.value)},className:"form-control mt-3",placeholder:"Introduce la descripci\xf3n",type:"text"}),Object(l.jsx)("input",{type:"submit",className:"btn btn-dark btn-block mt-3"})]}),g?Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:g})}):Object(l.jsx)("span",{})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h2",{children:"Lista de To Do's"}),Object(l.jsx)("ul",{className:"list-group",children:0!==h.length?h.map((function(e){return Object(l.jsxs)("li",{className:"list-group-item list-group-item-dark",children:[e.tarea,Object(l.jsx)("button",{className:"btn btn-danger float-right",onClick:function(t){w(e.id)},children:"X"}),Object(l.jsx)("ul",{children:e.descripcion})]},e.id)})):Object(l.jsx)("span",{children:"La lista est\xe1 vacia"})})]})]})})},g=function(){var e=Object(o.f)(),t=Object(c.useState)(""),n=Object(m.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(m.a)(r,2),u=i[0],d=i[1],j=Object(c.useState)(null),b=Object(m.a)(j,2),p=b[0],h=b[1];return Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col"}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(a,u).then((function(t){e.push("/")})).catch((function(e){"auth/invalid-email"==e.code&&h("Formato incorrecto"),"auth/weak-password"==e.code&&h("La password debe tener 6 caracteres o mas")}))},className:"form-group",children:[Object(l.jsx)("input",{onChange:function(e){s(e.target.value)},className:"form-control",type:"text",placeholder:"Introduce el Email"}),Object(l.jsx)("input",{onChange:function(e){d(e.target.value)},className:"form-control mt-4",type:"password",placeholder:"Introduce la password"}),Object(l.jsx)("input",{className:"btn btn-dark btn-block mt-4",value:"Registrar Usuario",type:"submit"})]}),Object(l.jsx)("button",{onClick:function(){x.signInWithEmailAndPassword(a,u).then((function(t){e.push("/")})).catch((function(e){"auth/wrong-password"==e.code&&h("Contrase\xf1a incorrecta"),"auth/user-not-found"==e.code&&h("Correo invalido")}))},className:"btn btn-success btn-block",children:"Iniciar sesion"}),null!=p?Object(l.jsx)("div",{children:p}):Object(l.jsx)("span",{})]}),Object(l.jsx)("div",{className:"col"})]})},N=function(){var e=Object(c.useState)(null),t=Object(m.a)(e,2),n=t[0],a=t[1],s=Object(o.f)();Object(c.useEffect)((function(){x.onAuthStateChanged((function(e){e&&a(e.email)}))}),[]);return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/",children:"Inicio"})}),Object(l.jsx)("li",{className:"nav-item",children:n?Object(l.jsx)("span",{}):Object(l.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item",children:n?Object(l.jsx)(i.b,{className:"nav-link",to:"/admin",children:"Admin"}):Object(l.jsx)("span",{})})]}),n?Object(l.jsx)("button",{onClick:function(){x.signOut(),a(null),s.push("/")},className:"btn btn-danger",children:"Cerrar sesion"}):Object(l.jsx)("span",{})]})})};var k=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(N,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{path:"/admin",component:v}),Object(l.jsx)(o.a,{path:"/login",component:g})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(44);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),w()}},[[45,1,2]]]);
//# sourceMappingURL=main.abade9ca.chunk.js.map