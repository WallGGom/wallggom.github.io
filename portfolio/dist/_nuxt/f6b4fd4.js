(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(e,t,r){"use strict";r.r(t);var n={name:"InspirePage"},o=r(83),c=r(132),l=r.n(c),f=(r(15),r(19),r(29),r(30),r(5)),d=(r(8),r(55),r(16),r(26),r(53),r(221),r(48),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232),r(233),r(234),r(49),r(74),r(18),r(54),r(168),r(0)),O=r(92),v=r(3);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=["sm","md","lg","xl"],w=m.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=m.reduce((function(e,t){return e["offset"+Object(v.l)(t)]={type:[String,Number],default:null},e}),{}),S=m.reduce((function(e,t){return e["order"+Object(v.l)(t)]={type:[String,Number],default:null},e}),{}),P={col:Object.keys(w),offset:Object.keys(h),order:Object.keys(S)};function k(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var C=new Map,N=d.a.extend({name:"v-col",functional:!0,props:y(y(y(y({cols:{type:[Boolean,String,Number],default:!1}},w),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,n=t.children,o=(t.parent,"");for(var c in r)o+=String(r[c]);var l=C.get(o);return l||function(){var e,t;for(t in l=[],P)P[t].forEach((function(e){var n=r[e],o=k(t,e,n);o&&l.push(o)}));var n=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!n||!r.cols},Object(f.a)(e,"col-".concat(r.cols),r.cols),Object(f.a)(e,"offset-".concat(r.offset),r.offset),Object(f.a)(e,"order-".concat(r.order),r.order),Object(f.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),C.set(o,l)}(),e(r.tag,Object(O.a)(data,{class:l}),n)}}),_=r(329),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{staticClass:"text-center"},[r("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),e._v(" "),r("blockquote",{staticClass:"blockquote"},[e._v("\n      “First, solve the problem. Then, write the code.”\n      "),r("footer",[r("small",[r("em",[e._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCol:N,VRow:_.a})}}]);