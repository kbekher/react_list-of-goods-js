(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(4),i=n(7),a=n(1),r=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var l=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),l=Object(o.a)(s,2),b=l[0],j=l[1],h=Object(a.useState)(!1),d=Object(o.a)(h,2),O=d[0],g=d[1],p=function(t,e,n,c){var s=Object(i.a)(t);return e&&s.sort((function(t,e){return t.localeCompare(e)})),n&&s.sort((function(t,e){return t.length-e.length})),c?s.reverse():s}(u,n,b,O);return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"button is-info ".concat(n?"":"is-light"),onClick:function(){c(!0)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"button is-success ".concat(b?"":"is-light"),onClick:function(){j(!0)},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:"button is-warning ".concat(O?"":"is-light"),onClick:function(){return g(!O)},children:"Reverse"}),(n||b||O)&&Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),j(!1),g(!1)},children:"Reset"})]}),Object(r.jsx)("ul",{children:p.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ffd38013.chunk.js.map