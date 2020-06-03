(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),c=n.n(a),s=n(5),u=n(23),l=n(4),i=n(24),d=n(7),m=n(21),b=function(e){return{type:"SORT_FIELD",sortField:e}},p=function(e){return e.loading},f=function(e){return e.message},O=function(e){var t=Object(i.a)(e.todos);switch(e.sortField){case"byTitle":e.sortReverse?t.sort((function(e,t){return e.title.localeCompare(t.title)})):t.sort((function(e,t){return t.title.localeCompare(e.title)}));break;case"byName":e.sortReverse?t.sort((function(e,t){if(void 0===e.user||void 0===t.user)throw new TypeError("ERROR");return e.user.name.localeCompare(t.user.name)})):t.sort((function(e,t){if(void 0===e.user||void 0===t.user)throw new TypeError("ERROR");return t.user.name.localeCompare(e.user.name)}));break;case"byCompleted":e.sortReverse?t.sort((function(e,t){return+t.completed-+e.completed})):t.sort((function(e,t){return+e.completed-+t.completed}));break;case"ERROR_LOADING":throw new TypeError("ERROR_LOADING");default:return t}return t},E={todos:[],loading:!1,message:"",sortField:"byTitle",sortReverse:!1},y=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"FINISH_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,message:t.message,todos:t.todos});case"SORT_FIELD":return Object(l.a)(Object(l.a)({},e),{},{sortField:t.sortField,sortReverse:!e.sortReverse});case"delete":return Object(l.a)(Object(l.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});default:return e}}),Object(m.composeWithDevTools)()),v=n(15),R=n.n(v),h=n(25),j=n(22),N=(n(36),function(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e).then((function(e){return e.json()}))}),g=(n(37),function(e){var t=e.todos,n=Object(s.b)();return o.a.createElement("div",null,o.a.createElement("ul",{className:"list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:e.completed?"completed":"notCompleted"},o.a.createElement("input",{type:"checkbox",checked:e.completed,disabled:!0}),"".concat(e.title," "),"(",e.user?e.user.name:"Unknown",")",o.a.createElement("div",{className:"button_wrapper"},o.a.createElement("button",{type:"button",className:"delete-button",onClick:function(){return n({type:"delete",id:e.id})}},"Delete todo")))}))))}),k=function(){var e=Object(s.b)(),t=Object(s.c)(p),n=Object(s.c)(f)||"Ready!",r=Object(s.c)(O),a=function(){var e=Object(j.a)(R.a.mark((function e(){var t,n,r,o,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([N("/todos.json"),N("/users.json")]);case 2:return t=e.sent,n=Object(h.a)(t,2),r=n[0],o=n[1],a=r.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:o.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Redux list of TODOs"),o.a.createElement("h2",null,t?o.a.createElement("div",{className:"spinner",role:"status"}):n),o.a.createElement("div",null,0===r.length?o.a.createElement("button",{className:"button",type:"button",onClick:function(){e({type:"START_LOADING"}),a().then((function(t){return e(function(e,t){return{type:"FINISH_LOADING",message:e,todos:t}}("Data uploaded successfully!",t))})).catch((function(){return e(function(e){return{type:"ERROR_LOADING",message:e}}("Loading error"))}))}},"Load All ToDos"):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"button",className:"button",onClick:function(){return e(b("byTitle"))}},"Sort by title"),o.a.createElement("button",{type:"button",className:"button",onClick:function(){return e(b("byCompleted"))}},"Sort by completed"),o.a.createElement("button",{type:"button",className:"button",onClick:function(){return e(b("byName"))}},"Sort by user")),o.a.createElement(g,{todos:r}))))},I=function(){return o.a.createElement(s.a,{store:y},o.a.createElement(u.a,null,o.a.createElement(k,null)))};c.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.13edd750.chunk.js.map