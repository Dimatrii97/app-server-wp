(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f585180"],{"262d":function(t,s,e){"use strict";var i=e("c118"),a=e.n(i);a.a},6268:function(t,s,e){"use strict";var i=e("fa5e"),a=e.n(i);a.a},6497:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"page"},[e("h2",{staticClass:"main-title"},[t._v("Календарь")]),e("div",{staticClass:"calendar__wrapper"},[e("div",{staticClass:"calendar__container"},[e("article",{staticClass:"substrate"},[e("the-calendar",{attrs:{activeDay:t.activeDay,visibleMonth:t.visibleMonth,events:t.calendarEvents},on:{setTasks:function(s){return t.setTasks(s)},setDay:function(s){return t.setActiveDay(s)}},scopedSlots:t._u([{key:"header",fn:function(){return[e("header-c",{attrs:{visibleMonth:t.visibleMonth},on:{back:function(s){return t.back()},next:function(s){return t.next()}}})]},proxy:!0}])})],1)]),e("div",{staticClass:"calendar__tasks"},[e("article",{staticClass:"substrate"},t._l(t.idTasksDay,(function(s){return e("task-list",{key:s.id,attrs:{isOpen:s.id===t.openTaskId,task:s},on:{open:function(s){return t.setOpenTask(s)}}})})),1)])])])},a=[],n=(e("4de4"),e("caad"),e("d81d"),e("2532"),e("5530")),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"task",style:{backgroundColor:t.task.color},on:{click:function(s){return t.open()}}},[e("div",{staticClass:"task__row"},[e("h3",{staticClass:"task__title"},[t._v(" "+t._s(t.task.title)+" ")]),e("div",{class:["task__users",{phontom:t.hide}]},t._l(t.sliceHide,(function(t,s){return e("img-user",{key:s,staticClass:"user-item",attrs:{src:{img:t.img,name:t.name},className:"sm"}})})),1)]),e("transition-expand",[t.isOpen?e("div",{staticClass:"task__all",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"task__subtitle"},[e("h3",{staticClass:"task__title"},[t._v("Задача:")]),e("p",{staticClass:"task__text",domProps:{innerHTML:t._s(t.additionalInfo.subtitle)}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.additionalInfo.subtasks.length,expression:"additionalInfo.subtasks.length"}]},[e("h3",{staticClass:"task__title"},[t._v("Структура выполнения:")]),e("ul",{staticClass:"subtasks"},t._l(t.additionalInfo.subtasks,(function(s){var i;return e("li",{key:s.id},[s.status?e("div",{staticClass:"subtasks__item"},[e("div",{staticClass:"circle com"},[e("i",{staticClass:"icon-check"})]),e("p",{staticClass:"task__text"},[t._v(t._s(s.title))])]):e("div",{staticClass:"subtasks__item",on:{click:function(e){return t.performSubTask(s.id)}}},[e("div",{staticClass:"circle uncom"},[e("i",{class:(i={},i["icon-check"]=t.changes.includes(s.id),i)})]),e("p",{staticClass:"task__text"},[t._v(t._s(s.title))])])])})),0)]),e("div",{staticClass:"task__executors"},[e("h3",{staticClass:"task__title"},[t._v("Исполнительный состав:")]),t._l(t.users,(function(t,s){return e("v-chip",{key:s,attrs:{user:t}})})),e("v-chip",{attrs:{user:t.user}})],2),e("div",{staticClass:"task__date"},[e("h3",{staticClass:"task__title"},[t._v(" Дата начала: "),e("div",{staticClass:"task__text"},[t._v(t._s(t.task.startdate)+".")])]),e("h3",{staticClass:"task__title"},[t._v(" Дата окончания: "),e("div",{staticClass:"task__text"},[t._v(t._s(t.task.deadline)+".")])])]),e("div",{staticClass:"button-left"},[t.allComplite?e("button",{staticClass:"btn-primary",on:{click:function(s){return t.next()}}},[t._v(" Выполнить задачу ")]):e("button",{staticClass:"btn-primary",attrs:{disabled:!t.changes.length},on:{click:function(s){return t.next()}}},[t._v(" Принять изменения ")])])]):t._e()])],1)},c=[],o=(e("a623"),e("c975"),e("fb6a"),e("a434"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"expand"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave}},[t._t("default")],2)}),l=[],u={name:"TransitionExpand",methods:{enter:function(t){var s=getComputedStyle(t).width;t.style.width=s,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";var e=getComputedStyle(t).height;t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,requestAnimationFrame((function(){t.style.height=e}))},afterEnter:function(t){t.style.height="auto"},leave:function(t){var s=getComputedStyle(t).height;t.style.height=s,getComputedStyle(t).height,requestAnimationFrame((function(){t.style.height=0}))}}},d=u,h=(e("6268"),e("2877")),f=Object(h["a"])(d,o,l,!1,null,"6177a21e",null),v=f.exports,k=e("bd36"),p=e("81ca"),_=e("2f62"),b={components:{ImgUser:k["a"],vChip:p["a"],TransitionExpand:v},data:function(){return{changes:[]}},props:{isOpen:Boolean,task:Object},mounted:function(){this.$store.dispatch("users/thereAreUsers",this.usersIdArray)},computed:Object(n["a"])(Object(n["a"])({},Object(_["b"])("user",{user:"getUserHeaderInfo"})),{},{additionalInfo:function(){return this.$store.getters["tasks/getFindAdditional"](this.$vnode.key)},users:function(){var t=this.$store.getters["users/findUserId"](this.usersIdArray);return t},sliceHide:function(){return this.users.length?this.users.slice(0,3):null},hide:function(){return this.users&&this.users.length>=4},usersIdArray:function(){return this.task.users.map((function(t){return t.id}))},allComplite:function(){return!!this.additionalInfo.subtasks&&this.additionalInfo.subtasks.every((function(t){return t.status}))}}),methods:{open:function(){this.$emit("open",this.$vnode.key),this.$store.dispatch("tasks/viewedTask",this.$vnode.key)},performSubTask:function(t){this.changes.includes(t)?this.changes.splice(this.changes.indexOf(t),1):this.changes.push(t)},updateSubTask:function(){this.$store.dispatch("tasks/updateSubTask",this.changes),this.changes=[]},completeTask:function(){this.$store.dispatch("tasks/completeTask",this.$vnode.key)},next:function(){this.changes.length?this.updateSubTask():this.completeTask(),this.showModal=!1},enter:function(t){var s=getComputedStyle(t).width;t.style.width=s,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";var e=getComputedStyle(t).height;t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,requestAnimationFrame((function(){t.style.height=e}))}}},y=b,m=(e("262d"),Object(h["a"])(y,r,c,!1,null,"038165ca",null)),g=m.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"control"},[e("button",{staticClass:"btn-ghost__square",attrs:{type:"button"},on:{click:function(s){return t.$emit("back")}}},[e("i",{staticClass:"icon-arrow-left"})]),e("h3",{staticClass:"monthName"},[t._v(" "+t._s(t._f("localRuMM")(t.visibleMonth))+" ")]),e("button",{staticClass:"btn-ghost__square",attrs:{type:"button"},on:{click:function(s){return t.$emit("next")}}},[e("i",{staticClass:"icon-arrow-right"})])])},T=[],w={props:{visibleMonth:Date}},x=w,O=(e("e869"),Object(h["a"])(x,C,T,!1,null,"1fa356d4",null)),I=O.exports,$=e("61a5"),D=e("a618"),M=e("74b5"),S={components:{theCalendar:$["a"],HeaderC:I,TaskList:g},data:function(){return{activeDay:new Date,visibleMonth:new Date,tasksDay:[],openTaskId:""}},computed:Object(n["a"])(Object(n["a"])({},Object(_["b"])("tasks",{events:"getTasks"})),{},{idTasksDay:function(){var t=this;return this.events.filter((function(s){return t.tasksDay.includes(s.id)}))},calendarEvents:function(){return this.events.map((function(t){var s=t.id,e=t.startdate,i=t.deadline,a=t.color,n=t.scanned;return{id:s,startdate:e,deadline:i,color:a,scanned:n}}))}}),watch:{idTasksDay:function(t){this.$store.dispatch("tasks/thereAreTaskInfo",t.map((function(t){return t.id})))}},methods:{setActiveDay:function(t){this.activeDay=t},back:function(){this.visibleMonth=Object(D["a"])(this.visibleMonth,1)},next:function(){this.visibleMonth=Object(M["a"])(this.visibleMonth,1)},setOpenTask:function(t){this.openTaskId=this.openTaskId===t?"":t},setTasks:function(t){this.tasksDay=t}}},j=S,A=(e("e82d"),Object(h["a"])(j,i,a,!1,null,"b3289234",null));s["default"]=A.exports},"8de1":function(t,s,e){},"94f3":function(t,s,e){},a623:function(t,s,e){"use strict";var i=e("23e7"),a=e("b727").every,n=e("a640"),r=e("ae40"),c=n("every"),o=r("every");i({target:"Array",proto:!0,forced:!c||!o},{every:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},c118:function(t,s,e){},e82d:function(t,s,e){"use strict";var i=e("8de1"),a=e.n(i);a.a},e869:function(t,s,e){"use strict";var i=e("94f3"),a=e.n(i);a.a},fa5e:function(t,s,e){}}]);
//# sourceMappingURL=chunk-0f585180.967c7b3d.js.map