(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45064e05"],{"18c6":function(t,e,a){"use strict";a("e067")},"1c9e":function(t,e,a){t.exports=a.p+"img/homepod.e3172634.png"},"2f8c":function(t,e,a){t.exports=a.p+"img/iphone-x.ff1daa9e.png"},"308e":function(t,e,a){t.exports=a.p+"img/macbook-pro.fbbe4299.png"},"3f7e":function(t,e,a){t.exports=a.p+"img/magic-mouse.3cf7a781.png"},4916:function(t,e,a){"use strict";a("cea4")},"5fda":function(t,e,a){"use strict";a.d(e,"a",(function(){return B}));var s,i=a("2b0e"),r=a("2f79"),n=a("c637"),c=a("0056"),o=a("a723"),l=a("9b76"),u=a("906c"),d=a("7b1e"),p=a("58f2"),m=a("3a58"),b=a("d82f"),f=a("cf75"),h=a("8c18"),v=a("f29e"),C=a("ce2a");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach((function(e){x(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function x(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _=Object(p["a"])("show",{type:o["i"],defaultValue:!1}),y=_.mixin,O=_.props,k=_.prop,j=_.event,I=function(t){return""===t||Object(d["b"])(t)?0:(t=Object(m["c"])(t,0),t>0?t:0)},S=function(t){return""===t||!0===t||!(Object(m["c"])(t,0)<1)&&!!t},P=Object(f["d"])(Object(b["m"])(g(g({},O),{},{dismissLabel:Object(f["c"])(o["u"],"Close"),dismissible:Object(f["c"])(o["g"],!1),fade:Object(f["c"])(o["g"],!1),variant:Object(f["c"])(o["u"],"info")})),n["a"]),B=i["default"].extend({name:n["a"],mixins:[y,h["a"]],props:P,data:function(){return{countDown:0,localShow:S(this[k])}},watch:(s={},x(s,k,(function(t){this.countDown=I(t),this.localShow=S(t)})),x(s,"countDown",(function(t){var e=this;this.clearCountDownInterval();var a=this[k];Object(d["i"])(a)&&(this.$emit(c["n"],t),a!==t&&this.$emit(j,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(u["B"])((function(){e.localShow=!1}))})))})),x(s,"localShow",(function(t){var e=this[k];t||!this.dismissible&&!Object(d["i"])(e)||this.$emit(c["m"]),Object(d["i"])(e)||e===t||this.$emit(j,t)})),s),created:function(){this.$_filterTimer=null;var t=this[k];this.countDown=I(t),this.localShow=S(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var a=this.dismissible,s=this.variant,i=t();a&&(i=t(v["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(l["k"])])),e=t("div",{staticClass:"alert",class:x({"alert-dismissible":a},"alert-".concat(s),s),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[r["a"]]},[i,this.normalizeSlot()])}return t(C["a"],{props:{noFade:!this.fade}},[e])}})},a923:function(t,e,a){t.exports=a.p+"img/apple-watch.c51a5f8c.png"},cbad:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-ecommerce-details"},[a("b-alert",{attrs:{variant:"danger",show:void 0===t.product}},[a("h4",{staticClass:"alert-heading"},[t._v(" Error fetching product data ")]),a("div",{staticClass:"alert-body"},[t._v(" No item found with this item slug. Check "),a("b-link",{staticClass:"alert-link",attrs:{to:{name:"apps-e-commerce-shop"}}},[t._v(" Shop ")]),t._v(" for other items. ")],1)]),t.product?a("b-card",{attrs:{"no-body":""}},[a("b-card-body",[a("b-row",{staticClass:"my-2"},[a("b-col",{staticClass:"d-flex align-items-center justify-content-center mb-2 mb-md-0",attrs:{cols:"12",md:"5"}},[a("div",{staticClass:"d-flex align-items-center justify-content-center"},[a("b-img",{staticClass:"product-img",attrs:{src:t.product.image,alt:"Image of "+t.product.name,fluid:""}})],1)]),a("b-col",{attrs:{cols:"12",md:"7"}},[a("h4",[t._v(t._s(t.product.name))]),a("b-card-text",{staticClass:"item-company mb-0"},[a("span",[t._v("by")]),a("b-link",{staticClass:"company-name"},[t._v(" "+t._s(t.product.brand)+" ")])],1),a("div",{staticClass:"ecommerce-details-price d-flex flex-wrap mt-1"},[a("h4",{staticClass:"item-price mr-1"},[t._v(" $"+t._s(t.product.price)+" ")]),a("ul",{staticClass:"unstyled-list list-inline pl-1 border-left"},t._l(5,(function(e){return a("li",{key:e,staticClass:"ratings-list-item mr-25"},[a("feather-icon",{class:[{"fill-current":e<=t.product.rating},e<=t.product.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"18"}})],1)})),0)]),a("b-card-text",[t._v("Available - "),a("span",{staticClass:"text-success"},[t._v("In stock")])]),a("b-card-text",[t._v(t._s(t.product.description))]),a("ul",{staticClass:"product-features list-unstyled"},[t.product.hasFreeShipping?a("li",[a("feather-icon",{attrs:{icon:"ShoppingCartIcon"}}),a("span",[t._v("Free Shipping")])],1):t._e(),a("li",[a("feather-icon",{attrs:{icon:"DollarSignIcon"}}),a("span",[t._v("EMI options available")])],1)]),a("hr"),a("div",{staticClass:"product-color-options"},[a("h6",[t._v("Colors")]),a("ul",{staticClass:"list-unstyled mb-0"},t._l(t.product.colorOptions,(function(e){return a("li",{key:e,staticClass:"d-inline-block",class:{selected:t.selectedColor===e},on:{click:function(a){t.selectedColor=e}}},[a("div",{staticClass:"color-option",class:"b-"+e},[a("div",{staticClass:"filloption",class:"bg-"+e})])])})),0)]),a("hr"),a("div",{staticClass:"d-flex flex-column flex-sm-row pt-1"},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",attrs:{variant:"primary"},on:{click:function(e){return t.handleCartActionClick(t.product)}}},[a("feather-icon",{staticClass:"mr-50",attrs:{icon:"ShoppingCartIcon"}}),a("span",[t._v(t._s(t.product.isInCart?"View In Cart":"Add to Cart"))])],1),a("b-button",{staticClass:"btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0",attrs:{variant:"outline-secondary"},on:{click:function(e){return t.toggleProductInWishlist(t.product)}}},[a("feather-icon",{staticClass:"mr-50",class:{"text-danger":t.product.isInWishlist},attrs:{icon:"HeartIcon"}}),a("span",[t._v("Wishlist")])],1),a("b-dropdown",{staticClass:"btn-share",attrs:{variant:"outline-secondary","no-caret":"","toggle-class":"btn-icon",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("feather-icon",{attrs:{icon:"Share2Icon"}})]},proxy:!0}],null,!1,4254340102)},t._l(["FacebookIcon","TwitterIcon","YoutubeIcon","InstagramIcon"],(function(t){return a("b-dropdown-item",{key:t},[a("feather-icon",{attrs:{icon:t}})],1)})),1)],1)],1)],1)],1),a("e-commerce-product-details-item-features"),a("e-commerce-product-details-related-products")],1):t._e()],1)},i=[],r=(a("baa5"),a("ca6e")),n=a("4360"),c=a("a6f4"),o=a("205f"),l=a("6197"),u=a("a15b"),d=a("b28b"),p=a("4918"),m=a("d6e4"),b=a("aa59"),f=a("1947"),h=a("dd9a"),v=a("9eaa"),C=a("5fda"),w=a("e009"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-features"},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[a("div",{staticClass:"w-75 mx-auto"},[a("feather-icon",{attrs:{icon:"AwardIcon",size:"35"}}),a("h4",{staticClass:"mt-2 mb-1"},[t._v(" 100% Original ")]),a("p",{staticClass:"card-text"},[t._v(" Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah. ")])],1)]),a("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[a("div",{staticClass:"w-75 mx-auto"},[a("feather-icon",{attrs:{icon:"ClockIcon",size:"35"}}),a("h4",{staticClass:"mt-2 mb-1"},[t._v(" 10 Day Replacement ")]),a("p",{staticClass:"card-text"},[t._v(" Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake. ")])],1)]),a("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[a("div",{staticClass:"w-75 mx-auto"},[a("feather-icon",{attrs:{icon:"ShieldIcon",size:"35"}}),a("h4",{staticClass:"mt-2 mb-1"},[t._v(" 1 Year Warranty ")]),a("p",{staticClass:"card-text"},[t._v(" Cotton candy gingerbread cake I love sugar plum I love sweet croissant. ")])],1)])])])},x=[],_={},y=_,O=a("2877"),k=Object(O["a"])(y,g,x,!1,null,null,null),j=k.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-body",[a("div",{staticClass:"mt-4 mb-2 text-center"},[a("h4",[t._v("Related Products")]),a("b-card-text",[t._v("People also search for this items")])],1),a("swiper",{staticClass:"swiper-responsive-breakpoints px-4 py-2",attrs:{options:t.swiperOptions}},[t._l(t.relatedProducts,(function(e,s){return a("swiper-slide",{key:s},[a("b-link",[a("div",{staticClass:"item-heading"},[a("h5",{staticClass:"text-truncate mb-0"},[t._v(" "+t._s(e.name)+" ")]),a("small",{staticClass:"text-body"},[t._v("by "+t._s(e.brand))])]),a("div",{staticClass:"img-container w-50 mx-auto py-75"},[a("b-img",{attrs:{src:e.image,fluid:""}})],1),a("div",{staticClass:"item-meta"},[a("ul",{staticClass:"unstyled-list list-inline mb-25"},t._l(5,(function(t){return a("li",{key:t,staticClass:"ratings-list-item"},[a("feather-icon",{staticClass:"mr-25",class:[{"fill-current":t<=e.rating},t<=e.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"18"}})],1)})),0),a("p",{staticClass:"card-text text-primary mb-0"},[t._v(" $"+t._s(e.price)+" ")])])])],1)})),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"})],2)],1)},S=[],P=a("7212"),B={components:{BCardBody:l["a"],BCardText:m["a"],BImg:p["a"],BLink:b["a"],Swiper:P["Swiper"],SwiperSlide:P["SwiperSlide"]},setup:function(){var t={slidesPerView:5,spaceBetween:55,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}},e=[{name:"Apple Watch Series 6",brand:"Apple",price:399.98,rating:4,image:a("a923")},{name:"Apple MacBook Pro - Silver",brand:"Apple",price:2449.49,rating:2,image:a("308e")},{name:"Apple HomePod (Space Grey)",brand:"Apple",price:229.29,rating:3,image:a("1c9e")},{name:"Magic Mouse 2 - Black",brand:"Apple",price:90.98,rating:5,image:a("3f7e")},{name:"iPhone 12 Pro",brand:"Apple",price:1559.99,rating:4,image:a("2f8c")}];return{swiperOptions:t,relatedProducts:e}}},D=B,A=(a("4916"),Object(O["a"])(D,I,S,!1,null,null,null)),$=A.exports,E=a("e316"),T={directives:{Ripple:w["a"]},components:{BCard:o["a"],BCardBody:l["a"],BRow:u["a"],BCol:d["a"],BImg:p["a"],BCardText:m["a"],BLink:b["a"],BButton:f["a"],BDropdown:h["a"],BDropdownItem:v["a"],BAlert:C["a"],ECommerceProductDetailsItemFeatures:j,ECommerceProductDetailsRelatedProducts:$},setup:function(){var t=Object(E["b"])(),e=t.handleCartActionClick,a=t.toggleProductInWishlist,s=Object(c["ref"])(null),i=function(){var t=Object(r["d"])(),e=t.route,a=e.value.params.slug,i=a.substring(a.lastIndexOf("-")+1);n["a"].dispatch("app-ecommerce/fetchProduct",{productId:i}).then((function(t){s.value=t.data.product}))["catch"]((function(t){404===t.response.status&&(s.value=void 0)}))},o=Object(c["ref"])(null);return i(),{product:s,selectedColor:o,handleCartActionClick:e,toggleProductInWishlist:a}}},z=T,V=(a("18c6"),Object(O["a"])(z,s,i,!1,null,null,null));e["default"]=V.exports},cea4:function(t,e,a){},e067:function(t,e,a){}}]);
//# sourceMappingURL=chunk-45064e05.fbeafc56.js.map