(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(t,e,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("dc093880",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";var n={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=r(82),l=r(131),c=r.n(l),d=r(337),v=r(341),h=r(342),f=r(343),_=r(338),m=r(339),w=r(340),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",height:"100",color:"#00BFA5"}},[r("v-row",{attrs:{align:"center",justify:"space-around"}},[r("v-btn",{attrs:{width:"140",height:"70",text:""}},[t._v(" Normal ")]),t._v(" "),r("v-btn",{attrs:{width:"140",height:"70",text:"",color:"primary"}},[t._v(" Primary ")]),t._v(" "),r("v-btn",{attrs:{width:"140",height:"70",text:"",color:"error"}},[t._v(" Error ")]),t._v(" "),r("v-btn",{attrs:{width:"140",height:"70",text:"",disabled:""}},[t._v(" Disabled ")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,"3dba291c",null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VBtn:h.a,VContainer:f.a,VFooter:_.a,VMain:m.a,VRow:w.a})},244:function(t,e,r){r(245),t.exports=r(246)},278:function(t,e,r){"use strict";r(211)},279:function(t,e,r){var n=r(32)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},74:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(278),r(82)),l=r(131),c=r.n(l),d=r(337),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[244,7,1,8]]]);