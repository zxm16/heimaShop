(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["component/swiper"],{"07ad":function(t,n,e){},"2a43":function(t,n,e){"use strict";var a=e("07ad"),u=e.n(a);u.a},3372:function(t,n,e){"use strict";e.r(n);var a=e("de00"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=u.a},a445:function(t,n,e){"use strict";e.r(n);var a=e("a79a"),u=e("3372");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("2a43");var i,c=e("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=o.exports},a79a:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},de00:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{swiperList:[]}},mounted:function(){var n=this;t.request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",success:function(t){n.swiperList=t.data.message}})}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'component/swiper-create-component',
    {
        'component/swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a445"))
        })
    },
    [['component/swiper-create-component']]
]);
