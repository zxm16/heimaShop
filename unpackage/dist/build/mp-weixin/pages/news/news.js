(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{2087:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"29d5":function(t,e,n){"use strict";n.r(e);var u=n("2087"),a=n("8fcc");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("8b68");var r,i=n("f0c5"),o=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=o.exports},"8b68":function(t,e,n){"use strict";var u=n("ad77"),a=n.n(u);a.a},"8fcc":function(t,e,n){"use strict";n.r(e);var u=n("f5ed"),a=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);e["default"]=a.a},ad77:function(t,e,n){},ce96:function(t,e,n){"use strict";(function(t){n("cb92");u(n("66fd"));var e=u(n("29d5"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},f5ed:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{newsList:[]}},methods:{enter:function(e){t.navigateTo({url:"/pages/news-detail/news-detail?id="+e})}},mounted:function(){var e=this;t.request({url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",success:function(t){e.newsList=t.data.message.goods}})}};e.default=n}).call(this,n("543d")["default"])}},[["ce96","common/runtime","common/vendor"]]]);