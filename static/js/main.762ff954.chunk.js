(this["webpackJsonpconsulta-cep-react"]=this["webpackJsonpconsulta-cep-react"]||[]).push([[0],{13:function(e,n,t){"use strict";n.a="AIzaSyCZTrU7Aiu986D32m4yyPWvA2iwJiyYFX4"},21:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(8),u=t.n(c),o=t(1),i=t(2),s=t(3),l=t.n(s),f=t(4),d=t(5),p=t(6);function b(){var e=Object(o.a)(["\n  border-radius: 5px;\n  border: 0.5px #cfcfcf;\n  background: #9e9e9e;\n  color: black;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: .35rem 1rem;\n  \n  &:hover {\n    border: 1px solid #cfcfcf;\n  }\n"]);return b=function(){return e},e}var m=i.a.button(b()),h=function(){return a.a.createElement(m,null,"Buscar")},v=t(17),O=t.n(v),E=t(7);function g(){var e=Object(o.a)(["\n  border: 1px solid darkgray;\n  border-radius: 5px;\n  box-shadow: 0;\n  font-size: 1rem;\n  padding: 5px 10px;\n"]);return g=function(){return e},e}var j=Object(i.a)(O.a)(g()),y=function(e){return a.a.createElement(j,Object.assign({},Object(E.omit)(e,"onChange"),{mask:"99999-999",onChange:function(n){e.onChange(n.target.value)},"data-testid":"search-field",placeholder:"01234-567",required:!0}))};function x(){var e=Object(o.a)(["\n  > * {\n    margin-right: 1rem;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(o.a)(["\n  display: flex;\n"]);return w=function(){return e},e}function S(){var e=Object(o.a)(["\n  font-weight: 600;\n  margin-bottom: 2rem;\n"]);return S=function(){return e},e}function D(){var e=Object(o.a)(["\n  background: #0d47a1;\n  box-sizing: border-box;\n  padding: 2rem 2rem 4rem;\n  width: 100%;\n  color: white;\n"]);return D=function(){return e},e}var k=i.a.form(D()),C=i.a.div(S()),A=i.a.div(w()),P=i.a.label(x()),R=function(){var e=Object(r.useContext)(p.a),n=Object(r.useState)(""),t=Object(d.a)(n,2),c=t[0],u=t[1],o=function(){var n=Object(f.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),c){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.action.fetchAddress(c);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(k,{onSubmit:o,"data-testid":"form-search-container"},a.a.createElement(C,null,"Consultar"),a.a.createElement(A,null,a.a.createElement(P,{htmlFor:"search-field"},a.a.createElement("span",null,"CEP"),a.a.createElement(y,{id:"search-field",value:c,onChange:u})),a.a.createElement(h,null)))};function F(){var e=Object(o.a)(["\n  font-size: 2rem;\n  margin-block: 0;\n  font-weight: bold;\n  padding: 2rem 0;\n  background: #002171;\n  height: 100%\n  color: white;\n  padding-inline: 2rem;\n"]);return F=function(){return e},e}function _(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  font-family: arial;\n"]);return _=function(){return e},e}var T=i.a.div(_()),z=i.a.h1(F()),H=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,63))})),I=function(){return a.a.createElement(T,null,a.a.createElement(z,null,"Consulta de CEP"),a.a.createElement(R,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Carregando informa\xe7\xf5es...")},a.a.createElement(H,null)))},J=function(){return a.a.createElement(p.b,null,a.a.createElement(I,null))};u.a.render(a.a.createElement(J,null),document.getElementById("root"))},6:function(e,n,t){"use strict";var r=t(3),a=t.n(r),c=t(4),u=t(5),o=t(14),i=t(0),s=t.n(i),l=t(7),f=t(13),d=function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://viacep.com.br/ws/".concat(n,"/json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(!(r=e.sent).erro){e.next=8;break}throw new Error;case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(n.cep," ").concat(n.localidade,"  ").concat(n.logradouro),e.next=3,fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(t,"&key=").concat(f.a));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",Object(l.get)(c,"results[0].geometry.location",{}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(t,!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return E}));var h=Object(i.createContext)({}),v={address:{},status:""},O=function(e,n){switch(n.type){case"FETCH_ADDRESS":return m({},e,{address:n.payload,status:"LOADED"});case"FETCH_ADDRESS_FAIL":return m({},e,{address:{},status:"ERROR"});case"ADDRESS_RESET":return m({},e,{address:{},status:""});default:return e}},E=function(e){var n=function(){var e=Object(i.useReducer)(O,v),n=Object(u.a)(e,2),t=n[0],r=n[1];return[t,{fetchAddress:function(){var e=Object(c.a)(a.a.mark((function e(n){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(n);case 3:return t=e.sent,e.next=6,p(t);case 6:return c=e.sent,e.abrupt("return",r({type:"FETCH_ADDRESS",payload:m({},t,{mapsCoordinates:c})}));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",r({type:"FETCH_ADDRESS_FAIL"}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),resetState:function(){return r({type:"ADDRESS_RESET"})}}]}(),t=Object(u.a)(n,2),r=t[0],o=t[1];return s.a.createElement(h.Provider,{value:{state:r,action:o}},e.children)}}},[[21,1,2]]]);
//# sourceMappingURL=main.762ff954.chunk.js.map