(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{207:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("dc093880",content,!0,{sourceMap:!1})},209:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("192a9e5b",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var o={name:"DefaultLayout",created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},data:function(){return{menu:[[0,"h4","메뉴"],[1,"h4","메뉴"],[2,"h4","메뉴"],[3,"h4","메뉴"],[4,"h4","메뉴"],[5,"h4","메뉴"],[6,"h4","메뉴"]],selectIndex:0}},methods:{selectMenu:function(t){console.log("click",t),this.selectIndex=t},handleScroll:function(){this.$store.commit("setScrollOffset",document.scrollingElement.scrollTop)}}},r=(n(285),n(83)),l=n(114),c=n.n(l),f=n(332),d=n(336),h=n(337),v=n(333),m=n(334),_=n(335),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{fixed:"",app:"",height:"100",color:"#00BFA5"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",[t._v(t._s(t.$store.state.scrollOffset))]),t._v(" "),t._l(t.menu,(function(e){return n("div",{key:e[0],staticClass:"transition-swing px-4 menu-item mx-4",class:[t.selectIndex==e[0]?"text-h3":"text-"+e[1],,],domProps:{textContent:t._s(e[2])},on:{click:function(n){return t.selectMenu(e[0])}}})}))],2)],1),t._v(" "),n("v-main",[n("v-container",{attrs:{"max-width":"1920px"}},[n("Nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!0,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,"4c24e57a",null);e.a=component.exports;c()(component,{VApp:f.a,VAppBar:d.a,VContainer:h.a,VFooter:v.a,VMain:m.a,VRow:_.a})},245:function(t,e,n){n(246),t.exports=n(247)},279:function(t,e,n){"use strict";n(207)},280:function(t,e,n){var o=n(34)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},285:function(t,e,n){"use strict";n(209)},286:function(t,e,n){var o=n(34)(!1);o.push([t.i,".menu-item[data-v-4c24e57a]{cursor:pointer}",""]),t.exports=o},325:function(t,e,n){"use strict";n.r(e);var o=n(82);e.default=function(){return new o.a.Store({state:{scrollOffset:0},mutations:{setScrollOffset:function(t,e){console.log("hello"),t.scrollOffset=e}}})}},72:function(t,e,n){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(279),n(83)),l=n(114),c=n.n(l),f=n(332),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;c()(component,{VApp:f.a})}},[[245,9,2,10]]]);