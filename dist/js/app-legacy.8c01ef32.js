(function(){"use strict";var e={1028:function(e,r,t){t(6992),t(8674),t(9601),t(7727);var n=t(8935),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("user-card",{attrs:{user:e.user}}),t("hr"),t("random-beer",{attrs:{beer:e.beer,handler:e.fetchRandomBeer}})],1)},s=[],o=t(3019),u=t(4665),c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"user-card"},[t("div",{staticClass:"user-card__image"},[t("img",{attrs:{src:e.user.avatar,alt:""}})]),t("h1",{staticClass:"user-card__title"},[e._v(" "+e._s(e.user.first_name)+" "+e._s(e.user.last_name)+", "+e._s(e.currentAge)+" years old ")]),t("div",{staticClass:"user-card__employment"},[t("div",{staticClass:"user-card__employment-title"},[e._v(" "+e._s(e.user.employment.title)+" ")]),t("span",{staticClass:"user-card__employment-description"},[e._v(" "+e._s(e.user.employment.key_skill)+" ")])])])},i=[],l={name:"UserCard",props:{user:{type:Object,required:!0}},computed:{currentAge:function(){return((new Date).getTime()-new Date(this.$props.user.date_of_birth))/315576e5|0}}},d=l,f=t(1001),m=(0,f.Z)(d,c,i,!1,null,"1d3170ac",null),p=m.exports,v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"random-beer"},[t("h2",{staticClass:"random-beer__title"},[e._v(" Пиво дня: ")]),t("div",{staticClass:"random-beer__card"},[t("div",{staticClass:"random-beer__brand"},[e._v(" "+e._s(e.beer.brand)+" ")]),t("div",{staticClass:"random-beer__name"},[e._v(" "+e._s(e.beer.name)+" ")])]),t("button",{staticClass:"random-beer__random",on:{click:e.handler}},[e._v(" Посмотреть другое ")])])},_=[],h={name:"RandomBeer",props:{beer:{type:Object,required:!0},handler:{type:Function,required:!0}}},b=h,g=(0,f.Z)(b,v,_,!1,null,"0ee403f6",null),y=g.exports,R={name:"App",mounted:function(){this.fetchRandomUser(),this.fetchRandomBeer()},computed:(0,o.Z)({},(0,u.Se)({user:"user",beer:"currentBeer"})),methods:(0,o.Z)({},(0,u.nv)({fetchRandomUser:"fetchRandomUser",fetchRandomBeer:"fetchRandomBeer"})),components:{UserCard:p,RandomBeer:y}},w=R,C=(0,f.Z)(w,a,s,!1,null,null,null),Z=C.exports,k=t(6198),x=(t(8975),t(6133)),B=t(2751),O=t(6166),U=t.n(O),j="https://random-data-api.com/api";console.log(j);var $=U().create({baseURL:j}),E=$,P=function(){function e(){(0,x.Z)(this,e)}return(0,B.Z)(e,null,[{key:"getRandomUser",value:function(){return E.get("/users/random_user")}}]),e}(),T={namespased:!0,state:function(){return{user:null}},mutations:{_setUser:function(e,r){e.user=r}},actions:{fetchRandomUser:function(e){return(0,k.Z)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,console.log("yo"),r.prev=2,r.next=5,P.getRandomUser();case 5:n=r.sent,t("_setUser",n.data),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()}},getters:{user:function(e){return e.user}}},q=function(){function e(){(0,x.Z)(this,e)}return(0,B.Z)(e,null,[{key:"getRandomBeer",value:function(){return E.get("/beer/random_beer")}}]),e}(),A={namespased:!0,state:function(){return{beer:null}},mutations:{_setBeer:function(e,r){e.beer=r}},actions:{fetchRandomBeer:function(e){return(0,k.Z)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,r.prev=1,r.next=4,q.getRandomBeer();case 4:n=r.sent,t("_setBeer",n.data),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},getters:{currentBeer:function(e){return e.beer}}};n.Z.use(u.ZP);var D=new u.ZP.Store({modules:{users:T,beers:A}});n.Z.config.productionTip=!1,new n.Z({store:D,render:function(e){return e(Z)}}).$mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var s=r[n]={id:n,loaded:!1,exports:{}};return e[n](s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,s){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],s=e[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(u=!1,s<o&&(o=s));if(u){e.splice(l--,1);var i=a();void 0!==i&&(r=i)}}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,a,s]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,s,o=n[0],u=n[1],c=n[2],i=0;if(o.some((function(r){return 0!==e[r]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(c)var l=c(t)}for(r&&r(n);i<o.length;i++)s=o[i],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(l)},n=self["webpackChunkbanda"]=self["webpackChunkbanda"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1028)}));n=t.O(n)})();
//# sourceMappingURL=app-legacy.8c01ef32.js.map