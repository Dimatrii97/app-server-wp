(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},a={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0d31464e":"9cc78369","chunk-1e45dd10":"39bfe90b","chunk-5ef6270d":"f39d7346","chunk-020c5b38":"aebb4a56","chunk-4f5a7b38":"3873f5b4","chunk-679b0324":"7fb3c6e6","chunk-7342cb95":"7f2258b2","chunk-77201ff6":"c6971fd8","chunk-7dfb4ebd":"72dd28bd","chunk-0f585180":"967c7b3d","chunk-2085d195":"4c360468"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0d31464e":1,"chunk-1e45dd10":1,"chunk-020c5b38":1,"chunk-4f5a7b38":1,"chunk-679b0324":1,"chunk-7342cb95":1,"chunk-77201ff6":1,"chunk-7dfb4ebd":1,"chunk-0f585180":1,"chunk-2085d195":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0d31464e":"28ac6524","chunk-1e45dd10":"4a582a20","chunk-5ef6270d":"31d6cfe0","chunk-020c5b38":"2dc679ab","chunk-4f5a7b38":"50d1d743","chunk-679b0324":"79281f96","chunk-7342cb95":"528fb5a8","chunk-77201ff6":"0b862ca5","chunk-7dfb4ebd":"ad6821fa","chunk-0f585180":"0c68a29d","chunk-2085d195":"69efcc6c"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f1":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a}));n("caad"),n("13d5"),n("b0c0"),n("2532");function r(e,t){return t.toLowerCase().includes(e.toLowerCase())}function s(e,t,n){return e.reduce((function(e,s){return r(t,n[s].name)&&e.push(n[s]),e}),[])}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;try{return Object.prototype.hasOwnProperty.call(e,t)}catch(n){throw new Error("hasOwnProperty")}}},"04cb":function(e,t,n){"use strict";var r=n("5c45"),s=n.n(r);s.a},"0b53":function(e,t,n){},1:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{class:[e.className,"input-clear"],attrs:{tag:"div",name:"search"}},[e.isShowInput?e._e():n("div",{key:"title",staticClass:"input-clear__title title",on:{click:function(t){return e.toggleSearch()}}},[e._v(" "+e._s(e.title)+" ")]),n("i",{key:e.isShowInput,staticClass:"icon-search",on:{click:function(t){return e.toggleSearch()}}}),e.isShowInput?n("input",{key:"input",ref:"input",staticClass:"input-clear__input",attrs:{placeholder:e.placeholder,autocomplete:"off",type:"text"},domProps:{value:e.value},on:{input:function(t){return e.onEmit(t)}}}):e._e()])},s=[],a=n("534d"),i={props:{className:String,title:String,value:String,placeholder:{type:String,default:"Поиск"}},data:function(){return{isShowInput:!1}},computed:{debounceInput:function(){return Object(a["a"])((function(e){this.$emit("input",e)}),400)}},beforeDestroy:function(){this.$emit("input","")},methods:{toggleSearch:function(){var e=this;this.isShowInput=!this.isShowInput,this.isShowInput?this.$nextTick((function(){e.$refs.input.focus()})):this.$emit("input","")},onEmit:function(e){this.debounceInput(e.target.value)}}},o=i,c=(n("f7a4"),n("2877")),u=Object(c["a"])(o,r,s,!1,null,"b789dca0",null);t["a"]=u.exports},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.568029fe.png"},"50e0":function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));n("ac1f"),n("1276");var r="token";function s(e){localStorage.setItem(r,e)}function a(){localStorage.removeItem(r)}function i(){return localStorage.getItem(r)}function o(e){return c(e).payload}function c(e){var t=e.split(".");return{header:u(t[0]),payload:u(t[1]),sign:t[2]}}function u(e){return JSON.parse(atob(e))}},"534d":function(e,t,n){"use strict";function r(e,t){var n;return function(){var r=arguments,s=this,a=function(){n=null,e.apply(s,r)};clearTimeout(n),n=setTimeout(a,t)}}n.d(t,"a",(function(){return r}))},"54a9":function(e,t,n){"use strict";var r=n("9ac7"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"name",(function(){return ue})),n.d(r,"map",(function(){return le})),n.d(r,"date",(function(){return de}));n("e260e"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.getLayout,{tag:"component"})],1)},i=[],o=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("the-sidebar",{staticClass:"sidebar"}),n("div",{staticClass:"wrap__main__content"},[n("the-topbar",{staticClass:"conteiner-max"}),n("router-view",{staticClass:"conteiner"})],1)],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-bar"},[n("div",{staticClass:"top-bar__logo logo"},[e._m(0),n("v-search",{attrs:{title:"Web Portal",className:"top-bar__search"}})],1),e.isSizeDesktop?n("div",{staticClass:"top-bar__list"},[n("div",{staticClass:"top-bar__time"},[n("h3",{staticClass:"topBar__time"},[e._v(e._s(e._f("localRuHMDM")(e.getTime)))])]),n("div",{staticClass:"top-bar__profile profile",on:{mouseout:function(t){return e.setShowProfile(!1)},mouseover:function(t){return e.setShowProfile(!0)}}},[n("i",{staticClass:"icon-user"}),n("transition",{attrs:{name:"menu-up"}},[e.profileNav?n("nav",{staticClass:"profile__nav"},[n("ul",{staticClass:"profile__list"},[n("router-link",{staticClass:"profile__item",attrs:{to:"/profile",tag:"li"}},[n("div",{staticClass:"profile__img"},[n("user-img",{staticClass:"profile__img",attrs:{className:"sm",src:{img:e.user.img,name:e.user.name}}})],1),n("a",{staticClass:"profile__link",attrs:{href:""}},[e._v("Профиль")])]),n("router-link",{staticClass:"profile__item",attrs:{to:"/",tag:"li"}},[n("a",{staticClass:"profile__link",attrs:{href:""}},[e._v("Помощь")])]),n("li",{staticClass:"profile__item",on:{click:function(t){return e.outUser()}}},[n("a",{staticClass:"profile__link",attrs:{href:""}},[e._v("Выйти")])])],1)]):e._e()])],1)]):n("div",{staticClass:"nav__toggle"},[n("button",{staticClass:"nav__toggle__button",attrs:{type:"button"}},[n("div",{class:["menu-btn",{open:e.isOpenSidebar}],on:{click:function(t){return e.isShowSideNav()}}},[n("div",{staticClass:"menu-btn__burger"})])])])])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"logo__img"},[r("img",{attrs:{src:n("4ffd"),alt:""}})])}],f=n("2f39"),m=n("bd36"),p=n("2f62"),h=n("50e0"),_=n("534d"),b={components:{userImg:m["a"],vSearch:f["a"]},data:function(){return{date:null,resizeTimer:null,profileNav:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(p["b"])("user",{user:"getUserHeaderInfo"})),Object(p["b"])(["isSizeDesktop","isOpenSidebar","getTime"])),{},{resizeDebounce:function(){return Object(_["a"])(this.setSize,100)},mouseDebounce:function(){var e=this;return Object(_["a"])((function(t){return e.profileNav=t}),400)}}),created:function(){this.$store.dispatch("user/getUser"),this.setSize(),window.addEventListener("resize",this.resizeDebounce)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeDebounce)},methods:Object(o["a"])(Object(o["a"])({},Object(p["c"])(["SET_SIDEBAR_OPEN"])),{},{isShowSideNav:function(){this.SET_SIDEBAR_OPEN(!this.isOpenSidebar)},setShowProfile:function(e){this.mouseDebounce(e)},setSize:function(){this.$store.dispatch("setSize",+window.innerWidth)},outUser:function(){Object(h["a"])(),this.$socket.disconnected,this.$router.push("/login").then((function(){document.location.reload()}))}})},v=b,g=(n("54a9"),n("2877")),S=Object(g["a"])(v,l,d,!1,null,null,null),k=S.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{class:[{active:this.isOpenSidebar},"sideBar"]},[n("nav",{staticClass:"sideBar__navigation"},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-list__item"},[n("v-search",{attrs:{title:"Web Portal",className:"nav-list__search"}})],1),e._l(e.navlist,(function(t,r){return n("li",{key:r,staticClass:"nav-list__item",on:{click:function(n){return e.navClick(t.event)}}},[n("router-link",{staticClass:"nav-list__link",attrs:{to:t.to}},[n("span",{class:["nav-list__icon",t.className],attrs:{"data-count":t.dataAttribute}},[n("i",{class:"icon-"+t.icon})]),n("span",{staticClass:"nav-list__title"},[e._v(" "+e._s(t.ruName)+" ")])])],1)}))],2)])])},T=[],E={components:{vSearch:f["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(p["b"])(["isOpenSidebar"])),Object(p["b"])("mapList",{navlist:"getNavlist"})),watch:{$route:function(){this.isOpenSidebar&&this.SET_SIDEBAR_OPEN(!1)}},methods:Object(o["a"])(Object(o["a"])({},Object(p["c"])(["SET_SIDEBAR_OPEN"])),{},{navClick:function(e){e&&this[e]()},outUser:function(){Object(h["a"])(),this.$socket.disconnected,this.$router.push("/login").then((function(){document.location.reload()}))}})},O=E,A=(n("04cb"),Object(g["a"])(O,y,T,!1,null,"99026040",null)),U=A.exports,w={components:{theTopbar:k,theSidebar:U},created:function(){this.$socket.client.query.token=Object(h["b"])(),this.$socket.client.open()},mounted:function(){this.$store.dispatch("messages/getSocketUserLastMess"),this.$store.dispatch("tasks/getTasks")}},j=w,N=Object(g["a"])(j,c,u,!1,null,null,null),D=N.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("router-view")],1)},C=[],I={},L=I,R=Object(g["a"])(L,M,C,!1,null,null,null),P=R.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("router-view")],1)},$=[],B={},W=B,z=Object(g["a"])(W,x,$,!1,null,null,null),q=z.exports,K={computed:Object(o["a"])(Object(o["a"])({},Object(p["b"])(["isOpenSidebar"])),{},{getLayout:function(){return this.$route.meta.layout+"-layout"}}),components:{userLayout:D,emptyLayout:q,adminLayout:P},watch:{isOpenSidebar:function(e){var t=document.querySelector("body");t.style=e?"overflow:hidden;":"overflow:auto;"}}},F=K,V=(n("5c0b"),Object(g["a"])(F,a,i,!1,null,null,null)),H=V.exports,G=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),J=n("8c4f"),Y=(n("dca8"),n("4de4"),n("7db0"),n("c740"),n("4160"),n("a434"),n("159b"),n("b85c")),Z=(n("13d5"),n("01f1"));function X(e,t){for(var n in t)Object(Z["c"])(e[t.id],n)&&e[t.id][n]===t[n]||"id"!==n&&s["a"].set(e[t.id],n,t[n])}function Q(e,t,n,r){Object(Z["c"])(e,n)?X(e,t):(s["a"].set(e,n,t),r&&s["a"].set(e[n],r,t.id),s["a"].delete(e[n],"id"))}var ee={namespaced:!0,state:{tasks:[],AdditionalTask:{}},getters:{getTasks:function(e){return e.tasks},getFindAdditional:function(e){return function(t){return e.AdditionalTask[t]}},getCountOfUnreadTasks:function(e){return e.tasks.filter((function(e){return!e.scanned})).length},getClassNameforNavList:function(e,t){return t.getCountOfUnreadTasks?"once-circle":""}},mutations:{SET_NEW_TASK:function(e,t){s["a"].set(t,"scanned",t.scanned),e.tasks.push(t)},SET_ALL_TASKS:function(e,t){e.tasks=t},SET_TASK_ADDITIONAL:function(e,t){t.forEach((function(t){Q(e.AdditionalTask,t,t.id)}))},DELETE_TASK:function(e,t){var n=e.tasks.findIndex((function(e){return e.id===t}));-1!==n&&(e.tasks.splice(n,1),s["a"].delete(e.AdditionalTask,t))},UPDATE_SCANNED_TASK:function(e,t){e.tasks.forEach((function(e){e.id==t&&(e.scanned=!0)}))},UPDATE_SUBTASKS:function(e,t){for(var n=t.idTask,r=t.idSubtasks,s=e.AdditionalTask[n].subtasks,a=function(e){s.find((function(t){return t.id===r[e]})).status=!0},i=0;i<r.length;i++)a(i)}},actions:{setTask:function(e,t){e.state;this._vm.$socket.client.emit("setTasks",t)},getTasks:function(){this._vm.$socket.client.emit("getTasks")},viewedTask:function(e,t){var n=e.commit;this._vm.$socket.client.emit("updateViewedTask",t),n("UPDATE_SCANNED_TASK",t)},updateSubTask:function(e,t){e.state;this._vm.$socket.client.emit("updateSubTask",t)},thereAreTaskInfo:function(e,t){var n=e.state,r=e.dispatch,s=t.filter((function(e){return!n.AdditionalTask[e]}));s.length&&r("getTaskById",s)},getTaskById:function(e,t){e.state;this._vm.$socket.client.emit("getTaskById",t)},completeTask:function(e,t){e.state;this._vm.$socket.client.emit("completeTask",t)},socket_newTasksOnline:function(e,t){var n=e.commit;n("SET_NEW_TASK",t)},socket_getAllTasks:function(e,t){var n,r=e.commit,s=(e.state,e.rootGetters,Object(Y["a"])(t));try{for(s.s();!(n=s.n()).done;){var a=n.value,i=a.users.findIndex((function(e){return e.id===Object(h["c"])(Object(h["b"])()).id}));if(-1===i)return;a.users.splice(i,1)}}catch(o){s.e(o)}finally{s.f()}r("SET_ALL_TASKS",t)},socket_setTaskAdditional:function(e,t){var n=e.commit;e.dispatch;n("SET_TASK_ADDITIONAL",t)},socket_updatedSubtask:function(e,t){var n=e.commit;n("UPDATE_SUBTASKS",t)},socket_closeTask:function(e,t){var n=e.commit,r=t.idTask;n("DELETE_TASK",r)}}};n("b0c0");function te(e){return ne.apply(this,arguments)}function ne(){return ne=Object(G["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].http.post("http://localhost:5000/api/auth/login",t).then((function(e){return e.json()}));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}var re,se={namespaced:!0,state:{check:!1,user:{}},getters:{getUserHeaderInfo:function(e){return{img:e.user.img,name:e.user.name}},getUserRange:function(e){return e.user.range},getUserDepartment:function(e){return e.user.department},getUserNameIdImg:function(e){return{id:e.user.id,img:e.user.img,name:e.user.name}},getUserId:function(e){return e.user.id},getUserFullData:function(e){var t=e.user,n=t.img,r=t.name,s=t.department,a=t.age,i=t.position,o=t.tel;return{img:n,name:r,info:[{nameRu:"Отдел",value:s},{nameRu:"Специальность",value:i},{nameRu:"Дата рождения",value:a},{nameRu:"Телефон",value:o}]}}},mutations:{SET_USER:function(e,t){e.user=t}},actions:{login:function(e,t){return Object(G["a"])(regeneratorRuntime.mark((function n(){var r,s,a,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,te(t);case 3:if(s=n.sent,a=s.token,i=s.user,o=s.is_admin,!a){n.next=15;break}if(Object(h["d"])(a),r("SET_USER",i),1!=o){n.next=14;break}return r("admin/SET_ADMIN",!0,{root:!0}),Te.push("/admin"),n.abrupt("return");case 14:Te.push("/home");case 15:case"end":return n.stop()}}),n)})))()},getUser:function(){this._vm.$socket.client.emit("getUser")},socket_currentUser:function(e,t){var n=e.commit;n("SET_USER",t)}}},ae=(n("d81d"),n("07ac"),{namespaced:!0,state:{users:{},searchUsersName:"",idUsersSearchServer:[]},getters:{getRangeLevelUsers:function(e,t,n,r){return t.getUsersFromMyDepartment.filter((function(e){return e.range<=r["user/getUserRange"]}))},getUsersFromMyDepartment:function(e,t,n,r){return t.usersArray.filter((function(e){return e.department===r["user/getUserDepartment"]}))},findUserId:function(e){return function(t){return Array.isArray(t)?t.map((function(t){return e.users[t]})).filter((function(e){return e})):e.users[t]}},findUsersByNameId:function(e){return function(t){return Array.isArray(t)?Object(Z["b"])(t,e.searchUsersName,e.users):Object(Z["a"])(e.users[t].name,e.searchUsersName)?e.users[t]:void 0}},usersFromServer:function(e){return e.searchUsersName?e.idUsersSearchServer.map((function(t){return e.users[t]})):[]},usersArray:function(e){return Object.values(e.users)}},mutations:{SET_USERS:function(e,t){Array.isArray(t)?t.forEach((function(t){Q(e.users,t,t.id,"user_id")})):Q(e.users,t,t.id,"user_id")},SET_SEARCH_USERS:function(e,t){e.searchUsersName=t},SET_ID_USERS_FOUND:function(e,t){e.idUsersSearchServer=t}},actions:{getUsersDepartment:function(e,t){e.state;this._vm.$socket.client.emit("getUsersDepartment")},getUserById:function(e,t){e.state;this._vm.$socket.client.emit("getUserById",t)},thereAreUsers:function(e,t){var n=e.state,r=e.dispatch;if(Array.isArray(t)){var s=t.filter((function(e){return!n.users[e]}));s.length&&r("getUserById",s)}else n.users[t]||r("getUserById",t)},searchUsersByName:function(e,t){e.commit;this._vm.$socket.client.emit("searchUsersByName",t)},socket_currentUsers:function(e,t){var n=e.commit;n("SET_USERS",t)},socket_searchUsers:function(e,t){var n=e.commit,r=e.dispatch;t.length?(n("SET_ID_USERS_FOUND",t.map((function(e){return e.id}))),n("SET_USERS",t)):r("searchUsersByName","")}}}),ie=new Promise((function(e){re=e})),oe={namespaced:!0,state:{isAdmin:!1,usersChek:!1,users:[],department:[],position:[]},getters:{isAdmin:function(e){return e.isAdmin},readyRole:function(){return ie},getDepartment:function(e){return e.department.map((function(e){return e.department}))},getPosition:function(e){return e.position.map((function(e){return e.position}))}},mutations:{SET_USERS:function(e,t){e.usersChek=!0,e.users=t},SET_DEPARTAMENT_USERS:function(e,t){e.department=t},SET_POSITION_USERS:function(e,t){e.position=t},SET_ADMIN:function(e){e.isAdmin=!0,re()}},actions:{addUser:function(e,t){e.commit;this._vm.$socket.client.emit("adminNewUser",t)},getSocketAllDepartaments:function(){this._vm.$socket.client.emit("getDepartamentsUsers")},getSocketAllPosition:function(e,t){this._vm.$socket.client.emit("getpositions",t)},addDepartment:function(e,t){e.commit;this._vm.$socket.client.emit("addNewDepartment",t)},socket_allUsers:function(e,t){var n=e.commit;n("SET_USERS",t)},socket_setDepartaments:function(e,t){var n=e.commit;n("SET_DEPARTAMENT_USERS",t)},socket_setPosition:function(e,t){var n=e.commit;n("SET_POSITION_USERS",t)},socket_setRoleAdmin:function(e){var t=e.commit;t("SET_ADMIN")}}},ce=(n("99af"),n("caad"),n("fb6a"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("2909")),ue=function(e){return e?function(e,t){return e.title.localeCompare(t.title)}:function(e,t){return t.title.localeCompare(e.title)}},le=function(e,t,n){return e?function(e,r){return n[r[t]]-n[e[t]]}:function(e,r){return n[e[t]]-n[r[t]]}},de=function(e,t){return e?function(e,n){return new Date(n[t]||0)-new Date(e[t]||0)}:function(e,n){return new Date(e[t]||0)-new Date(n[t]||0)}},fe={namespaced:!0,state:{textSearch:"",documentType:"",hasMap:null,countItemDocs:10,activePage:1,orderBy:"name",name_sort_functions:"name",orderDirection:!0,docs:[{title:"Протокол общего собрания учредителей от 01.09.20",documentType:"Протокол",type:"Word",date:"2020-09-01"},{title:"Приказ от 17.03.20 о повышении премиальных выплат",documentType:"Приказ",type:"Word",date:"2020-02-01",update:"2020-03-12"},{title:"Устав общества с ограниченной ответственностью",documentType:"Устав",type:"Word",date:"2020-08-22",update:"2020-08-23"},{title:"Журнал регистрации приказов по личному составу",documentType:"Журнал",type:"Exel",date:"2020-01-12",update:"2020-06-23"},{title:"Правила внутреннего трудового распорядка",documentType:"",type:"Word",date:"2020-03-14"},{title:"Приказ о проведении инвентаризации",documentType:"Приказ",type:"Exel",date:"2020-08-15"},{title:"Приказ об утверждении штатного расписания",documentType:"Приказ",type:"Word",date:"2020-08-23"},{title:"Приказ о выводе из эксплуатации котла",documentType:"Приказ",type:"Word",date:"2020-08-23",update:"2020-08-23"},{title:"Приказ о внесении изменений в график отпусков",documentType:"Приказ",type:"Exel",date:"2020-08-23"},{title:"Устав закрытого акционерного общества, созданного в результате выделения",documentType:"Устав",type:"Word",date:"2020-08-23"},{title:"Устав союза работодателей",documentType:"Устав",type:"Word",date:"2020-08-23"},{title:"Устав федерального государственного учреждения",documentType:"Устав",type:"Word",date:"2020-02-26"},{title:"Приказ о внесении изменений в график отпусков",documentType:"Приказ",type:"Word",date:"2020-05-21"},{title:"Приказ о внесении изменений в график отпусков",documentType:"Приказ",type:"Word",date:"2020-02-23"},{title:"Протокол совещаний руководителй структурных подразделений",documentType:"Протокол",type:"Word",date:"2020-03-23"},{title:"Форма № Т-2. Личная карточка работника Сергеев А.Е.",documentType:"Форма",type:"Exel",date:"2018-03-23"},{title:"Форма № Т-2. Личная карточка работника Мерзоев Д.Г.",documentType:"Форма",type:"Exel",date:"2018-05-17"},{title:"Приказ о приеме на работу работника Сергеева А.Е.",documentType:"Приказ",type:"Word",date:"2018-03-23"},{title:"Приказ о приеме на работу работника Мерзоева Д.Г.",documentType:"Приказ",type:"Word",date:"2018-05-17"},{title:"Акт о приеме работ, выполненных по срочному трудовому договору",documentType:"Акт",type:"Word",date:"2020-01-23"},{title:"Табель учета рабочего времени структурных подразделений К-1",documentType:"Табель",type:"Exel",date:"2019-05-23",update:"2019-08-23"},{title:"Протокол совещаний руководителей структурных подразделений",documentType:"Протокол",type:"Word",date:"2020-09-23"},{title:"Уведомление о расторжении договора",documentType:"",type:"Word",date:"2020-05-11"},{title:"Табель учета рабочего времени структурных подразделений К-2",documentType:"Табель",type:"Exel",date:"2019-05-23",update:"2019-08-23"},{title:"Протокол совещаний руководителй структурных подразделений",documentType:"Протокол",type:"Word",date:"2020-09-12"},{title:"Распорещение о проведении внеплановых работ",documentType:"",type:"Word",date:"2020-01-23"}]},getters:{getSearchText:function(e){return e.docs.filter((function(t){return t.title.toLowerCase().includes(e.textSearch.toLowerCase())&&t.documentType.includes(e.documentType)}))},getOrderSearchDocs:function(e,t,n){var s=e.hasMap?n.mapList[e.hasMap]:null;return Object(ce["a"])(t.getSearchText).sort(r[e.name_sort_functions](e.orderDirection,e.orderBy,s))}},mutations:{SET_ORDER_BY:function(e,t){var n=t.replace(/type/i,"map").match(/map|date/i),r="map".concat(t[0].toUpperCase()).concat(t.slice(1),"Sort");this.state.mapList[r]&&(e.hasMap=r),e.orderBy===t&&(e.orderDirection=!e.orderDirection),e.name_sort_functions=Array.isArray(n)?n[0]:t,e.orderBy=t},SET_TEXT_SEARCH:function(e,t){e.textSearch=t},SET_DOCUMENT_TYPE:function(e,t){e.documentType=t},SET_ACTIVE_PAGE:function(e,t){e.activePage=t}},actions:{},modules:{}},me=(n("b64b"),n("15fd")),pe=n("b71a"),he=n.n(pe),_e={namespaced:!0,state:{newMess:!1,lastMessages:{}},getters:{sortUserMessage:function(e,t,n,r){return function(t){return t.map((function(t){return Object(o["a"])(Object(o["a"])({},e.lastMessages[t.user_id]),t)})).sort((function(e,t){return t.message_id-e.message_id}))}},UsersMessagesId:function(e,t,n,r){return r["users/findUsersByNameId"](t.lastMessagesIdArray)},getUsersmess:function(e,t,n,r){var s=t.sortUserMessage(t.UsersMessagesId),a=r["users/usersFromServer"];return a.length?he()([].concat(Object(ce["a"])(s),Object(ce["a"])(a)),"user_id"):s},countOfUnreadMessages:function(e,t,n,r){var s=t.lastMessagesArray.filter((function(e){return e.toid==r["user/getUserId"]&&!e.scanned})).length;if(s>0)return s},getClassNameforNavList:function(e,t){return t.countOfUnreadMessages?"once-circle":""},lastMessagesIdArray:function(e){return Object.keys(e.lastMessages)},lastMessagesArray:function(e){return Object.values(e.lastMessages)}},mutations:{SET_LAST_MESSAGES:function(e,t){t.forEach((function(t){var n=t.id,r=t.mess;Q(e.lastMessages,r,n,"message_id")}))},UPDATE_LAST_MESS:function(e,t){var n=t.message,r=t.id;s["a"].set(e.lastMessages,r,n)},UPDATE_LOCAL_VIEWED_MESS:function(e,t){e.lastMessages[t].toid!==t&&(e.lastMessages[t].scanned=!0)},UPDATE_LOCAL_VIEWED_MESS_OF_SOCKET:function(e,t){e.lastMessages[t].scanned=!0}},actions:{updateViewedMess:function(e,t){var n=e.state,r=(e.commit,e.rootGetters);n.lastMessages[t]&&n.lastMessages[t].toid===r["user/getUserId"]&&this._vm.$socket.client.emit("updateViewedMess",t)},getSocketUserLastMess:function(){this._vm.$socket.client.emit("getUserLastMess")},newMessUsers:function(e,t){e.commit,e.state;this._vm.$socket.client.emit("newMessUsers",t)},socket_setUserLastMess:function(e,t){var n=e.commit;n("SET_LAST_MESSAGES",t),n("users/SET_USERS",t.map((function(e){e.mess;var t=Object(me["a"])(e,["mess"]);return t})),{root:!0})},socket_setNewMess:function(e,t){var n=e.commit,r=(e.dispatch,e.rootState),s=e.rootGetters,a=s["user/getUserId"],i=a===t.fromid?t.toid:t.fromid;Object(Z["c"])(r.users.users,i)?n("UPDATE_LAST_MESS",{message:t,id:i}):this._vm.$socket.client.emit("getUserLastMess")},socket_updateScanned:function(e,t){var n=e.commit;e.state;n("UPDATE_LOCAL_VIEWED_MESS_OF_SOCKET",t)}}},be={namespaced:!0,state:{navlist:{root:{ruName:"Главная",to:"/home",icon:"graph"},taskList:{ruName:"Список задач",to:"/calendar",icon:"calendar"},messages:{ruName:"Сообщения",to:"/messagesList",icon:"mail"},newTask:{ruName:"Поставить новую задачу",to:"/newTasks",icon:"new-tasks"},Docs:{ruName:"Документы",to:"/docs",icon:"file"}},additionalNavList:{user:{ruName:"Пользователь",to:"/profile",icon:"user"},output:{ruName:"Выйти",to:"",icon:"out",event:"outUser"}},mapDocumentTypeSort:{"Устав":0,"Приказ":1,"Протокол":2,"Журнал":3,"Форма":4,"Акт":5,"Табель":6,"":-1},mapTypeSort:{Exel:0,Word:1},theader:{name:{name:"Название",sort:"default"},documentType:{name:"Тип документа",sort:"default"},type:{name:"Файл",sort:"default"},date:{name:"Дата публикации",sort:"default"},update:{name:"Дата изменения",sort:"default"}}},getters:{getNavlist:function(e,t,n,r){var s=r["messages/getClassNameforNavList"],a=r["messages/countOfUnreadMessages"],i=r["tasks/getClassNameforNavList"],c=r["tasks/getCountOfUnreadTasks"];return e.navlist.messages.className=s,e.navlist.taskList.className=i,a&&(e.navlist.messages.dataAttribute=a),c&&(e.navlist.taskList.dataAttribute=c),r["isSizeDesktop"]?Object.values(e.navlist):Object.values(Object(o["a"])(Object(o["a"])({},e.navlist),e.additionalNavList))},getMapTypeDocSort:function(e){return e.mapTypeDocSort},getMapTypeSort:function(e){return e.mapTypeSort}}};function ve(){return ge.apply(this,arguments)}function ge(){return ge=Object(G["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].http.get("http://localhost:5000/api/news").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}s["a"].use(p["a"]);var Se=new p["a"].Store({state:{navbarSnow:!1,sizeDesktop:!0,size:null,interval:null,time:null,news:[]},getters:{isShowNavbar:function(e){return e.navbarSnow},isSizeDesktop:function(e){return e.size>768},getNews:function(e){return e.news},isOpenSidebar:function(e){return e.navbarSnow},getTime:function(e){return e.time},getSize:function(e){return e.size}},mutations:{SET_SIZE:function(e,t){e.size=t},SET_SIDEBAR_OPEN:function(e,t){e.navbarSnow=t},SET_TIME:function(e){e.time=new Date},SET_INTERVAL:function(e){var t=this;e.interval=setInterval((function(){t.commit("SET_TIME")}),1e3)},DELETE_INTERVAL:function(e){e.interval&&(clearInterval(e.interval),e.time=null)},SET_NEWS:function(e,t){e.news=Object.freeze(t)}},actions:{setNews:function(e,t){return Object(G["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ve();case 3:r=t.sent,n("SET_NEWS",r);case 5:case"end":return t.stop()}}),t)})))()},setSize:function(e,t){var n=e.commit,r=e.getters;e.state,e.dispatch;n("SET_SIZE",t),n("SET_SIDEBAR_OPEN",!1),n("DELETE_INTERVAL"),r.isSizeDesktop&&n("SET_INTERVAL")}},modules:{tasks:ee,user:se,users:ae,admin:oe,messages:_e,mapList:be,docs:fe}});s["a"].use(J["a"]);var ke=[{path:"/login",name:"login",component:function(){return n.e("chunk-7342cb95").then(n.bind(null,"71a8"))},meta:{layout:"empty",guest:!0},beforeEnter:function(e,t,n){null===Object(h["b"])()?n():n({name:"home"})}},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-5ef6270d"),n.e("chunk-020c5b38")]).then(n.bind(null,"fc51"))},meta:{layout:"user",requiresAuth:!0}},{path:"/calendar",name:"calendar",component:function(){return Promise.all([n.e("chunk-7dfb4ebd"),n.e("chunk-0f585180")]).then(n.bind(null,"6497"))},meta:{layout:"user",requiresAuth:!0}},{path:"/messagesList",name:"messagesList",component:function(){return n.e("chunk-1e45dd10").then(n.bind(null,"71ad"))},meta:{layout:"user",requiresAuth:!0}},{path:"/message/:id",component:function(){return n.e("chunk-679b0324").then(n.bind(null,"99c0"))},meta:{layout:"user",requiresAuth:!0}},{path:"/newTasks",name:"newTasks",component:function(){return Promise.all([n.e("chunk-7dfb4ebd"),n.e("chunk-2085d195")]).then(n.bind(null,"5205"))},meta:{layout:"user",requiresAuth:!0}},{path:"/docs",name:"docs",component:function(){return n.e("chunk-0d31464e").then(n.bind(null,"d0fe"))},meta:{layout:"user",requiresAuth:!0}},{path:"/admin/",name:"admin",component:function(){return n.e("chunk-77201ff6").then(n.bind(null,"8b28"))},meta:{layout:"admin",requiresAuth:!0},beforeEnter:function(){var e=Object(G["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s["a"].prototype.$socket.client.query.token=Object(h["b"])(),s["a"].prototype.$socket.client.open(),e.next=4,Se.getters["admin/readyRole"];case 4:Se.getters["admin/isAdmin"]?r():r({name:"login"});case 5:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/profile",component:function(){return Promise.all([n.e("chunk-5ef6270d"),n.e("chunk-4f5a7b38")]).then(n.bind(null,"669d"))},meta:{layout:"user",requiresAuth:!0}},{path:"/*",name:"all",component:function(){return n.e("chunk-7342cb95").then(n.bind(null,"71a8"))},meta:{layout:"empty"}}],ye=new J["a"]({mode:"history",base:"/",routes:ke});ye.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))&&null===Object(h["b"])()?n({path:"/login",params:{nextUrl:e.fullPath}}):n()}));var Te=ye,Ee=n("1dce"),Oe=n.n(Ee),Ae=n("28dd"),Ue=n("f87c"),we=n("8055"),je=n.n(we);n("8b2f");s["a"].directive("click-outside",{bind:function(e,t,n){if("function"!==typeof t.value){var r=n.context.name,s="[Vue-click-outside:] provided expression '".concat(t.expression,"' is not a function, but has to be");r&&(s+="Found in component '".concat(r,"'")),console.warn(s)}var a=t.modifiers.bubble,i=function(n){(a||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=i,document.addEventListener("click",i)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}});var Ne=je()("http://localhost:5000/",{autoConnect:!1,query:{token:null}});s["a"].use(Ue["a"],Ne,{store:Se}),s["a"].use(Oe.a),s["a"].use(Ae["a"]),s["a"].config.productionTip=!1,new s["a"]({router:Te,store:Se,render:function(e){return e(H)}}).$mount("#app")},"583c":function(e,t,n){"use strict";var r=n("e260"),s=n.n(r);s.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"5c45":function(e,t,n){},"8b2f":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));n("4de4"),n("fb6a"),n("ac1f"),n("5319");var r=n("2b0e"),s=n("a7e4"),a=n("b166"),i=n("7070"),o=n("ad53");function c(e){return Object(a["a"])(e,"yyyy-MM-dd",{locale:o["a"]})}function u(e){return Object(a["a"])(e,"d MMM",{locale:o["a"]})}r["a"].filter("localRu",(function(e){return Object(s["a"])(e)?Object(a["a"])(e,"dd",{locale:o["a"]}):e})),r["a"].filter("localRuDM",(function(e){return Object(s["a"])(e)?Object(a["a"])(e,"dd MMMM",{locale:o["a"]}):e})),r["a"].filter("localRuMM",(function(e){var t={2:"",4:"й",7:""};if(Object(s["a"])(e)){var n="string"===typeof t[Object(i["a"])(e)]?t[Object(i["a"])(e)]:"ь",r=Object(a["a"])(e,"MMMM",{locale:o["a"]}).replace(/.$/gi,n);return r=r[0].toUpperCase()+r.slice(1),r}})),r["a"].filter("localRuHMDM",(function(e){return Object(s["a"])(e)?Object(a["a"])(e,"H:mm dd MMMM",{locale:o["a"]}):e}))},"9ac7":function(e,t,n){},"9c0c":function(e,t,n){},bd36:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{class:["img-user",e.className]},[e.srcParse.defaulName?n("div",{staticClass:"name-user",attrs:{alt:"user avatar"}},[e._v(" "+e._s(e.srcParse.name)+" ")]):n("img",{staticClass:"img-user__circle",attrs:{src:e.src.img,alt:""}})])},s=[],a=(n("a15b"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),{props:{src:{type:Object,required:!0,default:function(){return{name:"",img:"default"}}},className:{type:String,required:!1,default:""}},computed:{srcParse:function(){if("default"===this.src.img){var e=this.src.name?this.src.name.split(" ").map((function(e){return e[0]})).join(" ").toUpperCase():"";return{name:e,defaulName:!0}}return{src:this.src.img,defaulName:!1}}}}),i=a,o=(n("583c"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"37b1d92a",null);t["a"]=c.exports},e260:function(e,t,n){},f7a4:function(e,t,n){"use strict";var r=n("0b53"),s=n.n(r);s.a}});
//# sourceMappingURL=app.51e2c370.js.map