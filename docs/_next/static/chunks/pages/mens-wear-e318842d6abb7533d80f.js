_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function s(e){r(c,a,o,s,i,"next",e)}function i(e){r(c,a,o,s,i,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return a}))},LdGO:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("q1tI"),s=n.n(c),i=(n("RMg3"),n("jTTj")),u=s.a.createElement;t.default=function(){var e=Object(c.useState)([]),t=e[0],n=e[1];return Object(c.useEffect)((function(){try{(function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/shop-app/data/mens_outerwear.json");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,n(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){}}),[]),u("div",null,u("section",{className:"mens-outerwear"},u("img",{className:"mens-outerwear-img",src:"/shop-app/images/mens_outerwear.jpg",alt:"Men's Outerwear"}),u("p",{className:"shop-category"},"Men's Outerwear"),u("p",{className:"mens-outerwear-quantity"},"(",t.length," items)")),u("ul",{className:"mens-apparel"},t.map((function(e){return u(i.a,{key:e.id,id:e.id,imgSrc:"./".concat(e.image),title:e.title,price:e.price,category:"mens_outerwear"})}))))}},RMg3:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),c=n.n(o),s=a.a.createElement;t.a=function(){return s("nav",{className:"nav-menu"},s(c.a,{href:"/mens-wear"},"Men's Outerwear"),s(c.a,{href:"/womens-wear"},"Ladies Outerwear"),s(c.a,{href:"/mens-tshirt"},"Men's T-Shirts"),s(c.a,{href:"/womens-tshirt"},"Ladies T-Shirts"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),s=n("elyg"),i=n("nOHt"),u=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function h(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],u=a[1],d=(0,i.useRouter)(),m=d&&d.pathname||"/",v=c.default.useMemo((function(){var t=(0,s.resolveHref)(m,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),w=v.href,g=v.as;c.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,s.isLocalURL)(w)&&!l[w+"%"+g])return p(o,(function(){h(d,w,g)}))}),[t,o,w,g,d]);var y=e.children,E=e.replace,_=e.shallow,N=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var O=c.Children.only(y),L={ref:function(e){e&&u(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,w,g,E,_,N)}};return t&&(L.onMouseEnter=function(e){(0,s.isLocalURL)(w)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),h(d,w,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(L.href=(0,s.addBasePath)((0,s.addLocale)(g,d&&d.locale,d&&d.defaultLocale))),c.default.cloneElement(O,L)};t.default=d},jTTj:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),c=n.n(o),s=a.a.createElement;t.a=function(e){var t=e.imgSrc,n=e.title,r=e.price,a=e.id,o=e.category;return s("li",{className:"pointer"},s(c.a,{href:"/".concat(a,"?category=").concat(o)},s("img",{src:"/shop-app/".concat(t)})),s("p",{className:"item-name"},n),s("p",{className:"price"},r))}},nzOp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mens-wear",function(){return n("LdGO")}])}},[["nzOp",0,1,2]]]);