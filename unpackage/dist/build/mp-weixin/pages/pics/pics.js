(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pics/pics"],{4940:function(t,n,e){"use strict";(function(t){e("cb92");u(e("66fd"));var n=u(e("f3a6"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"8ff7":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},ad88:function(t,n,e){"use strict";e.r(n);var u=e("c9f9"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);n["default"]=a.a},c9f9:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{picList:[],active:0,name:"优质服饰"}},methods:{changeList:function(t,n){this.active=t,this.name=n}},mounted:function(){var n=this;t.request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",success:function(t){console.log(t),n.picList=t.data.message[0].product_list}})}};n.default=e}).call(this,e("543d")["default"])},d66a:function(t,n,e){"use strict";var u=e("fc58"),a=e.n(u);a.a},f3a6:function(t,n,e){"use strict";e.r(n);var u=e("8ff7"),a=e("ad88");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("d66a");var i,f=e("f0c5"),r=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=r.exports},fc58:function(t,n,e){}},[["4940","common/runtime","common/vendor"]]]);