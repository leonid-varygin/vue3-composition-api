(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4783"],{"0728":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=Object(n["Q"])("data-v-46b9acd7");Object(n["x"])("data-v-46b9acd7");var r=Object(n["i"])("strong",null,"Имя владельца",-1),u=Object(n["i"])("strong",null,"Телефон",-1),s=Object(n["i"])("strong",null,"Сумма",-1),i=Object(n["i"])("strong",null,"Статус",-1),o=Object(n["h"])(": "),b={class:"form-control"},l=Object(n["i"])("label",{for:"status"},"Статус",-1),p=Object(n["i"])("option",{value:"done"},"Завершен",-1),O=Object(n["i"])("option",{value:"cancelled"},"Отменен",-1),j=Object(n["i"])("option",{value:"active"},"Активен",-1),d=Object(n["i"])("option",{value:"pending"},"Выполняется",-1),v={key:2,class:"text-center text-white"};Object(n["v"])();var f=c((function(e,t,a,f,h,m){var g=Object(n["C"])("app-loader"),w=Object(n["C"])("app-status"),k=Object(n["C"])("app-page");return f.loading?(Object(n["u"])(),Object(n["e"])(g,{key:0})):f.request?(Object(n["u"])(),Object(n["e"])(k,{key:1,back:"",title:"Заявка"},{default:c((function(){return[Object(n["i"])("p",null,[r,Object(n["h"])(": "+Object(n["F"])(f.request.fio),1)]),Object(n["i"])("p",null,[u,Object(n["h"])(": "+Object(n["F"])(f.request.phone),1)]),Object(n["i"])("p",null,[s,Object(n["h"])(": "+Object(n["F"])(f.currency(f.request.amount)),1)]),Object(n["i"])("p",null,[i,o,Object(n["i"])(w,{type:f.request.status},null,8,["type"])]),Object(n["i"])("div",b,[l,Object(n["O"])(Object(n["i"])("select",{id:"status","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.status=e})},[p,O,j,d],512),[[n["I"],f.status]])]),Object(n["i"])("button",{class:"btn danger",onClick:t[2]||(t[2]=function(){return f.remove&&f.remove.apply(f,arguments)})},"Удалить"),f.hasChanges?(Object(n["u"])(),Object(n["e"])("button",{key:0,class:"btn",onClick:t[3]||(t[3]=function(){return f.update&&f.update.apply(f,arguments)})},"Обновить")):Object(n["f"])("",!0)]})),_:1})):(Object(n["u"])(),Object(n["e"])("h3",v," Заявки с ID = "+Object(n["F"])(e.$route.params.id)+" нет. ",1))})),h=a("5530"),m=(a("96cf"),a("1da1")),g=a("5502"),w=a("6c02"),k=a("1da6"),y=a("ddc6"),q=a("0aeb"),x=a("3f9b"),C={setup:function(){var e=Object(w["c"])(),t=Object(w["d"])(),a=Object(g["b"])(),c=Object(n["z"])(),r=Object(n["z"])(!0),u=Object(n["z"])({});Object(n["s"])(Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.value=!0,t.next=3,a.dispatch("request/loadOne",e.params.id);case 3:u.value=t.sent,c.value=null===(n=u.value)||void 0===n?void 0:n.status,r.value=!1;case 6:case"end":return t.stop()}}),t)}))));var s=Object(n["c"])((function(){return u.value.status!==c.value})),i=function(){var n=Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.dispatch("request/remove",e.params.id);case 2:t.push("/");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(h["a"])(Object(h["a"])({},u.value),{},{status:c.value,id:e.params.id}),t.next=3,a.dispatch("request/update",n);case 3:u.value.status=c.value;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{loading:r,request:u,currency:x["a"],remove:i,update:o,status:c,hasChanges:s}},components:{AppPage:k["a"],AppLoader:y["a"],AppStatus:q["a"]}};C.render=f,C.__scopeId="data-v-46b9acd7";t["default"]=C}}]);
//# sourceMappingURL=chunk-2d0a4783.a89176a8.js.map