(this["webpackJsonpassignment-8"]=this["webpackJsonpassignment-8"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),i=c.n(a),r=(c(13),c(14),c(15),c(0)),j=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("span",{children:"Copyright 2021. Developed by Asraful"})})})},l=(c(17),function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:"Make a Advengers team of Inc. IT Institue"}),Object(r.jsx)("p",{children:"The IT institue is special and developoing the growth of the IT sector. Follow the institute as per your need."}),Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{className:"last-h2",children:"Total Budget : 150 Milion"})]})})}),o=c(8),d=c(5),h=c(7),b=(c(18),function(e){console.log(e.team);var t,c=e.team,s=0,n=Object(h.a)(c);try{for(n.s();!(t=n.n()).done;){s+=t.value.salary}}catch(a){n.e(a)}finally{n.f()}return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Your Order History"}),Object(r.jsx)("hr",{className:"hr"}),Object(r.jsxs)("h3",{children:[" ",Object(r.jsx)("i",{class:"far fa-user"})," member added: ",e.team.length]}),Object(r.jsxs)("h5",{children:["Total cost : $",s]}),Object(r.jsxs)("h6",{children:[" Your Hired Persons: ",Object(r.jsx)("br",{}),c.map((function(e){return Object(r.jsx)("span",{children:e.name})}))]}),Object(r.jsx)("button",{children:"Buy Now"})]})}),u=(c(19),function(e){var t=e.team,c=t.name,s=t.img,n=t.designation,a=t.country,i=t.age,j=t.salary;return Object(r.jsxs)("div",{className:"team",children:[Object(r.jsx)("img",{style:{width:"150px",height:"150px"},src:s,alt:""}),Object(r.jsxs)("h3",{children:["Name: ",c]}),Object(r.jsxs)("h6",{children:[" Rule: ",n]}),Object(r.jsxs)("h6",{children:["Location: ",a]}),Object(r.jsxs)("h6",{children:["Age: ",i]}),Object(r.jsxs)("h5",{children:["Salary: $",j]}),Object(r.jsxs)("button",{onClick:function(){return e.handleAddToCart(e.team)},children:[" ",Object(r.jsx)("i",{class:"fas fa-shopping-cart"})," add to cart"]}),Object(r.jsxs)("div",{className:"social",children:[Object(r.jsx)("i",{class:"fab fa-twitter"}),Object(r.jsx)("i",{class:"fab fa-stack-overflow"}),Object(r.jsx)("i",{class:"fab fa-quora"}),Object(r.jsx)("i",{class:"fab fa-github"})]})]})}),O=(c(20),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(d.a)(a,2),j=i[0],l=i[1];Object(s.useEffect)((function(){fetch("team.JSON").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var h=function(e){var t=[].concat(Object(o.a)(j),[e]);l(t)};return Object(r.jsx)("div",{className:"team py-5",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-8",children:Object(r.jsx)("div",{className:"team-container",children:c.map((function(e){return Object(r.jsx)(u,{team:e,handleAddToCart:h},e.key)}))})}),Object(r.jsx)("div",{className:"col-lg-4",children:Object(r.jsx)("div",{className:"team-aside",children:Object(r.jsx)(b,{team:j})})})]})})})});var x=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(O,{}),Object(r.jsx)(j,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.97bfc6af.chunk.js.map