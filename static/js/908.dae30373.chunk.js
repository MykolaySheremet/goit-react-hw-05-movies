"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[908],{908:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,o,u,c,i=t(885),s=t(791),a=t(739),f=t(861),l=t(757),h=t.n(l),m=t(711),p=function(){var n=(0,f.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(m.Jx,"movie/").concat(e,"/reviews?api_key=").concat(m.Fn));case 2:if(!(t=n.sent).ok){n.next=5;break}return n.abrupt("return",t.json());case 5:return n.abrupt("return",Promise.reject(new Error("Sorry, but we can't find reviews information about this film. Try more")));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=t(682),d=t(168),w=t(444),x=w.ZP.p(r||(r=(0,d.Z)(["\n    font-size: ",";\n    color:  ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.primary})),Z=w.ZP.p(o||(o=(0,d.Z)(["\n    font-weight: ",";\n    color:  ",";\n   \n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.primary})),b=w.ZP.p(u||(u=(0,d.Z)(["\n    font-size: ",";\n   \n"])),(function(n){return n.theme.fontSizes.m})),k=w.ZP.li(c||(c=(0,d.Z)(["\n    margin-bottom: ","px;\n    font-size: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.l})),y=t(184),j=function(){var n=(0,s.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,a.UO)().renderId;return(0,s.useEffect)((function(){p(Number(o)).then((function(n){console.log(n.results),r(n)})).catch((function(n){Promise.reject(new Error("".concat(n.message)))}))}),[o]),t?(console.log(t),(0,y.jsx)(v.x,{as:"ul",p:4,children:0!==t.results.length?t.results.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,y.jsxs)(k,{children:[(0,y.jsxs)(Z,{children:["Author: ",t]}),(0,y.jsx)(b,{children:r})]},e)})):(0,y.jsx)(x,{children:" Sorry, we haven`t reviews yet!"})})):null}},861:function(n,e,t){function r(n,e,t,r,o,u,c){try{var i=n[u](c),s=i.value}catch(a){return void t(a)}i.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,u){var c=n.apply(e,t);function i(n){r(c,o,u,i,s,"next",n)}function s(n){r(c,o,u,i,s,"throw",n)}i(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=908.dae30373.chunk.js.map