(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,r){e.exports=r(58)},53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n,a=r(0),o=r.n(a),c=r(34),i=r.n(c),u=r(19),s=r(12),l=r(14),f=r(6),m=r(7),p=r(61);function h(){h=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(S){u=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new _(a||[]);return n(c,"_invoke",{value:w(e,r,i)}),c}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var f={};function m(){}function p(){}function d(){}var v={};u(v,o,function(){return this});var b=Object.getPrototypeOf,y=b&&b(b(x([])));y&&y!==t&&r.call(y,o)&&(v=y);var g=d.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t(function(a,c){!function n(a,o,c,i){var u=l(e[a],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(f).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(u.arg)}(n,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=N(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function N(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(k.prototype),u(k.prototype,c,function(){return this}),e.AsyncIterator=k,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new k(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),u(g,i,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var d="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0GHbRJM3Rw0sScdVnx5z",v=(Object(l.b)("books/createApp",Object(m.a)(h().mark(function e(){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))),Object(l.b)("books/postBooks",function(){var e=Object(m.a)(h().mark(function e(t){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p.a.post("".concat(d,"/books"),t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())),b=Object(l.b)("books/fetchBooks",function(){var e=Object(m.a)(h().mark(function e(t,r){var n,a;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(d,"/books"));case 3:return n=e.sent,r.getState().books.books,a=n.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,r){return e.apply(this,arguments)}}()),y=Object(l.b)("books/deleteBook",function(){var e=Object(m.a)(h().mark(function e(t){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p.a.delete("".concat(d,"/books/").concat(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),g=Object(l.c)({name:"books",initialState:{books:[]},reducers:{clearBooks:function(e){var t=e;return t.books=[],t},addBook:function(e,t){var r=t.payload;e.books[r.item_id]=[{title:r.title,category:r.category,author:r.author}]},removeBook:function(e,t){var r=t.payload,n=e;return delete n.books[r],n},filterBooks:function(e,t){var r=t.payload,n=e;return n.books=e.books.find(function(e){return e.category===r}),n}},extraReducers:(n={},Object(f.a)(n,b.pending,function(e){var t=e;return t.books=[],t}),Object(f.a)(n,b.fulfilled,function(e,t){var r=e;return r.books=t.payload,r}),Object(f.a)(n,b.rejected,function(e,t){var r=e;return r.books=t.payload,r}),n)}),E=g.actions,k=(E.clearBooks,E.addBook),w=E.removeBook,N=(E.filterBooks,g.reducer),O=Object(l.c)({name:"categories",initialState:{categories:["Action","Biography","History","Horror","Kids","Learning","Sci-Fi","Economy","Mystery","Thriller","Literary Fiction","Romance","Poetry","Comedy","Drama","Fantasy","Adventure","Crime","Music","Art","Self Help","Travel","Religion","Spirituality","Science","Math"]},reducers:{checkCategory:function(e,t){return Boolean(e.categories.includes(t.payload))}}}),j=(O.actions.checkCategory,O.reducer),_=Object(l.a)({reducer:{books:N,categories:j}}),x=r(2),L=(r(53),function(e){var t=e.book,r=e.id,n=Object(s.b)();return o.a.createElement("div",{className:"book-item-wrap"},o.a.createElement("div",{className:"book-details"},o.a.createElement("div",{className:"book-item__category"},JSON.parse(t).category),o.a.createElement("div",{className:"book-item__title"},JSON.parse(t).title),o.a.createElement("div",{className:"book-item__author"},JSON.parse(t).author),o.a.createElement("div",{className:"book-details-btns"},o.a.createElement("button",{type:"button",className:"book-item__comment"},"Comments"),o.a.createElement("div",{className:"line-divide"}),o.a.createElement("button",{type:"button",className:"book-item__remove",id:r,onClick:function(e){n(w(e.target.id)),n(y(e.target.id))}},"Remove"),o.a.createElement("div",{className:"line-divide"}),o.a.createElement("button",{type:"button",className:"book-item__edit"},"Edit"))),o.a.createElement("div",{className:"book-item__status"},o.a.createElement("div",{className:"Oval-2"}),o.a.createElement("div",{className:"status-data"},o.a.createElement("span",{className:"status-data__title"},"64%"),o.a.createElement("span",{className:"status-data__completed"},"Completed"))),o.a.createElement("div",{className:"line-divide Line-2"}),o.a.createElement("div",{className:"book-item__progress"},o.a.createElement("div",{className:"progress-title"},"CURRENT CHAPTER"),o.a.createElement("div",{className:"progress-details"},"Chapter 17"),o.a.createElement("button",{type:"button",className:"progress-update"},"UPDATE PROGRESS")))}),S=(r(54),function(){var e=Object(s.b)(),t=Object(s.c)(function(e){return e.books}).books;Object(a.useEffect)(function(){e(b())},[e]);var r=Object.entries(t);return o.a.createElement("div",{className:"books-list-wrap"},r.map(function(e){return o.a.createElement(L,{key:e[0],id:e[0],book:JSON.stringify(e[1][0])})}))}),B=r(5),C=r(62),A=(r(55),function(){var e=Object(s.b)(),t=Object(s.c)(function(e){return e.categories.categories}),r=Object(a.useState)(""),n=Object(B.a)(r,2),c=n[0],i=n[1],u=Object(a.useState)(""),l=Object(B.a)(u,2),f=l[0],m=l[1],p=Object(a.useState)(""),h=Object(B.a)(p,2),d=h[0],b=h[1],y=function(){m(""),b(""),i("")};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Line"}),o.a.createElement("span",{className:"add-book-title"},"ADD NEW BOOK"),o.a.createElement("form",{className:"add-book-form",onSubmit:function(t){return function(t){t.preventDefault();var r={item_id:Object(C.a)(),title:f,category:d||"Other",author:c};e(k(r)),e(v(r)),y()}(t)}},o.a.createElement("input",{onChange:function(e){m(e.target.value)},type:"text",value:f,placeholder:"Book title",className:"title-input"}),o.a.createElement("select",{onChange:function(e){return b(e.target.value)},value:d,className:"categories-select"},t.map(function(e){return o.a.createElement("option",{key:e,value:e},e)})),o.a.createElement("input",{onChange:function(e){i(e.target.value)},type:"name",value:c,placeholder:"Author",className:"author-input"}),o.a.createElement("button",{type:"submit",className:"add-book-btn"},"Add Book")))}),R=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(S,null),o.a.createElement(A,null))},P=function(){return o.a.createElement("div",null,o.a.createElement("button",{type:"button"},"Status"))},F=(r(56),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("a",{className:"nav-brand",href:"/"},"Bookstore CMS"),o.a.createElement("ul",{className:"nav-links"},[{name:"Books",path:"/"},{name:"Categories",path:"categories"}].map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement(u.b,{className:"nav-link active-link",to:e.path},e.name))})),o.a.createElement("button",{className:"icon-button",type:"button"},o.a.createElement("span",{className:"material-icons primary-color"},"person"))))});r(57);var G=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(F,null),o.a.createElement(x.c,null,o.a.createElement(x.a,{path:"/",element:o.a.createElement(R,null)}),o.a.createElement(x.a,{path:"categories",element:o.a.createElement(P,null)})))};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:_},o.a.createElement(u.a,null,o.a.createElement(G,null)))))}},[[37,1,2]]]);
//# sourceMappingURL=main.fe75a080.chunk.js.map