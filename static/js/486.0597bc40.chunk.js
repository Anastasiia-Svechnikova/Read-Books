"use strict";(self.webpackChunkread_books=self.webpackChunkread_books||[]).push([[486],{7717:function(t,n,e){e.d(n,{r:function(){return d}});var r,i,o=e(2791),l=["title","titleId"];function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a.apply(this,arguments)}function c(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function s(t,n){var e=t.title,s=t.titleId,d=c(t,l);return o.createElement("svg",a({width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":s},d),e?o.createElement("title",{id:s},e):null,r||(r=o.createElement("g",{clipPath:"url(#clip0_4306_7314)"},o.createElement("path",{d:"M15.0078 1.32812H14.2109V0H12.8828V1.32812H4.11719V0H2.78906V1.32812H1.99219C0.893695 1.32812 0 2.22182 0 3.32031V15.0078C0 16.1063 0.893695 17 1.99219 17H15.0078C16.1063 17 17 16.1063 17 15.0078V3.32031C17 2.22182 16.1063 1.32812 15.0078 1.32812ZM15.6719 15.0078C15.6719 15.374 15.374 15.6719 15.0078 15.6719H1.99219C1.62602 15.6719 1.32812 15.374 1.32812 15.0078V6.24219H15.6719V15.0078ZM15.6719 4.91406H1.32812V3.32031C1.32812 2.95415 1.62602 2.65625 1.99219 2.65625H2.78906V3.98438H4.11719V2.65625H12.8828V3.98438H14.2109V2.65625H15.0078C15.374 2.65625 15.6719 2.95415 15.6719 3.32031V4.91406Z",fill:"#A6ABB9"}),o.createElement("path",{d:"M3.85156 7.63672H2.52344V8.96484H3.85156V7.63672Z",fill:"#A6ABB9"}),o.createElement("path",{d:"M6.50781 7.63672H5.17969V8.96484H6.50781V7.63672Z",fill:"#A6ABB9"}),o.createElement("path",{d:"M9.16406 7.63672H7.83594V8.96484H9.16406V7.63672Z",fill:"#A6ABB9"}),o.createElement("path",{d:"M11.8203 7.63672H10.4922V8.96484H11.8203V7.63672Z",fill:"#A6ABB9"}),o.createElement("path",{d:"M14.4766 7.63672H13.1484V8.96484H14.4766V7.63672Z",fill:"#A6ABB9"}))),i||(i=o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_4306_7314"},o.createElement("rect",{width:17,height:17,fill:"white"})))))}var d=o.forwardRef(s);e.p},7074:function(t,n,e){e.d(n,{BR:function(){return d},L6:function(){return h},Nk:function(){return p},WP:function(){return a},YF:function(){return l},Zw:function(){return c},cf:function(){return g},jy:function(){return f},qo:function(){return u},tZ:function(){return m},tj:function(){return s},xM:function(){return x}});var r=e(2982),i=e(6916),o=e(4961),l=function(t){return t.planning.books},a=function(t){return t.planning.isPlanningActive},c=function(t){return t.planning.startDate},s=function(t){return t.planning.endDate},d=function(t){return t.planning.planFact},p=function(t){return t.planning.duration},u=function(t){return t.planning.stats},h=function(t){return t.planning.pagesPerDay},x=function(t){return t.planning.isShowResults},f=(0,i.P1)([l],(function(t){return t.reduce((function(t,n){return t+n.pagesTotal}),0)})),m=(0,i.P1)([u],(function(t){return t.reduce((function(t,n){return t+n.pagesCount}),0)})),g=(0,i.P1)([p,a,u,c],(function(t,n,e,i){if(n&&e.length>0){var l=(0,r.Z)(Array(t+1).keys()).map((function(t,n){return{day:n,y:0}})),a=(0,o.QH)(i,e[e.length-1]),c=(0,o._y)(a);return e.forEach((function(t){var n=(0,o.Tw)(i,t.time.split(" ")[0])+1;l[n]?(l[n].y+=t.pagesCount,l[n].label="FACT: ".concat(l[n].y," pages")):l[n]={day:n,y:t.pagesCount,label:"FACT: ".concat(t.pagesCount," pages")}})),(0,o.Jp)(l),{result:(0,o.dI)(l,c),currentWeek:c}}return[{day:0,y:0}]}))},4961:function(t,n,e){e.d(n,{Jp:function(){return c},QH:function(){return a},Tw:function(){return i},_y:function(){return l},cO:function(){return o},dI:function(){return s}});var r=e(2982);function i(t,n){var e=o(n),r=(new Date(e)-new Date(t))/1e3/60/60/24;return Math.floor(r)}function o(t){var n=t.split("-")[2],e=t.split("-")[1],r=t.split("-")[0],i=2===n.length?n:n.padStart(2,"0"),o=2===e.length?e:e.padStart(2,"0");return"".concat(r,"-").concat(o,"-").concat(i)}function l(t){return t?Math.ceil(t/7):1}function a(t,n){return i(t,n.time.split(" ")[0])}function c(t){for(var n=0;n<t.length;n+=1)if(n&&0===t[n].y){if(t.slice(n).some((function(t){return 0!==t.y})))continue;t[n].y=null}}function s(t,n){var e=n-1,i=n;return 1===n?[{day:0,y:0,label:"FACT: 0 pages"}].concat((0,r.Z)(t.slice(7*e+1,7*i+1))):t.slice(7*e+1,7*i+1)}},5188:function(t,n,e){e.d(n,{H6:function(){return u},KF:function(){return h},f$:function(){return d},oY:function(){return p},zx:function(){return x}});var r,i,o,l,a,c=e(168),s=e(3081),d=s.Z.div(r||(r=(0,c.Z)(["\n\tdisplay: grid;\n\tpadding: 16px 20px;\n\tmargin-top: 16px;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tbox-shadow: ",";\n\tbackground-color: ",";\n\t@media screen and (min-width: 768px) {\n\t\tgrid-template-columns: 35px 300px 200px 100px 80px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: 40px 580px 380px 120px 80px;\n\t}\n"])),(function(t){return t.theme.shadow.box}),(function(t){return t.theme.colors.white})),p=s.Z.div(i||(i=(0,c.Z)(["\n\tdisplay: grid;\n\tgap: 5px;\n\talign-items: center;\n\tpadding: 16px 20px;\n\tmargin-top: 16px;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tbox-shadow: ",";\n\tbackground-color: ",";\n\t@media screen and (min-width: 768px) {\n\t\tgrid-template-columns: 35px 150px 110px 75px 45px 120px 75px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: 35px 300px 260px 115px 130px 155px 210px;\n\t}\n"])),(function(t){return t.theme.shadow.box}),(function(t){return t.theme.colors.white})),u=s.Z.p(o||(o=(0,c.Z)(["\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n"]))),h=s.Z.ul(l||(l=(0,c.Z)(["\n\twidth: fit-content;\n\tdisplay: flex;\n"]))),x=s.Z.button(a||(a=(0,c.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 127px;\n\theight: 40px;\n\tmargin: 10px auto;\n\n\tbackground-color: ",";\n\tborder: none;\n\tcolor: ",";\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\ttransition: ",";\n\t:hover {\n\t\tborder: 1px solid ",";\n\t\tbackground: transparent;\n\t\tcolor: ",";\n\t}\n\t@media screen and (min-width: 768px) {\n\t\tmargin: 0;\n\t\twidth: 80px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 130px;\n\t}\n"])),(function(t){return t.theme.colors.bookIcons}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.transition}),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.textMain}))},7796:function(t,n,e){e.d(n,{Z:function(){return p}});var r,i,o=e(2791),l=e(168),a=e(3081),c=a.Z.div(r||(r=(0,l.Z)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ",";\n\tz-index: 1200;\n"])),(function(t){return t.theme.colors.backdrop})),s=a.Z.div(i||(i=(0,l.Z)(["\n\twidth: 100%;\n\tmax-width: 300px;\n\ttext-align: center;\n\n\tmin-height: 395px;\n\tpadding: 48px;\n\tmargin: 0 auto;\n\n\tbackground-color: ",";\n\n\t@media screen and (min-width: 768px) {\n\t\tmin-height: 250px;\n\t\tmax-width: fit-content;\n\n\t\tmin-width: 394px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tmin-width: 608px;\n\t}\n"])),(function(t){return t.theme.colors.white})),d=e(184);var p=function(t){var n=t.onClose,e=t.children,r=t.offBackdrop,i=void 0!==r&&r;return(0,o.useEffect)((function(){var t=function(t){"Escape"===t.code&&n()};return document.body.style.overflow="hidden",window.addEventListener("keydown",t),function(){document.body.style.overflow="auto",window.removeEventListener("keydown",t)}}),[]),(0,d.jsx)(c,{onClick:function(t){i||t.currentTarget===t.target&&n()},children:(0,d.jsx)(s,{children:e})})}},1602:function(t,n,e){e.d(n,{Z:function(){return kt}});var r,i,o,l,a,c=e(885),s=e(7796),d=e(5097),p=e(4961),u=e(168),h=e(3081),x=h.Z.li(r||(r=(0,u.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1.3fr 0.5fr 1.2fr;\n\talign-items: center;\n\tgap: 20px;\n\t@media screen and (min-width: 768px) {\n\t\twidth: 240px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t}\n"]))),f=h.Z.p(i||(i=(0,u.Z)(["\n\tfont-size: 14px;\n\tline-height: 1.21;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textMain})),m=h.Z.p(o||(o=(0,u.Z)(["\n\tfont-size: 14px;\n\tline-height: 1.21;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textSecondary})),g=h.Z.p(l||(l=(0,u.Z)(["\n\tfont-size: 14px;\n\tline-height: 1.21;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textMain})),b=h.Z.span(a||(a=(0,u.Z)(["\n\tfont-size: 14px;\n\tline-height: 1.21px;\n\tmargin-left: 3px;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textSecondary})),w=e(184);function v(t){var n=t.data,e=n.time,r=n.pagesCount,i=(0,p.cO)(e.split(" ")[0]),o=e.split(" ")[1],l=(0,d.Z)();return(0,w.jsxs)(x,{children:[(0,w.jsx)(f,{children:i}),(0,w.jsx)(m,{children:o}),(0,w.jsxs)(g,{children:[r," ",(0,w.jsxs)(b,{children:[" ",l.results.pages]})]})]})}var y,j,Z,k,O,C,H,M,E,V,B,L,D,I,z,A,P,S,F=e(2791),N=e(7717),T=h.Z.div(y||(y=(0,u.Z)(["\n\twidth: 280px;\n\theight: 340px;\n\tpadding: 20px;\n\n\tbackground-color: ",";\n\tbox-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n\toverflow-y: scroll;\n\n\t@media screen and (min-width: 768px) {\n\t\twidth: 704px;\n\t\theight: 309px;\n\t\tpadding: 28px 96px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 288px;\n\t\theight: 340px;\n\t\tpadding: 20px;\n\t}\n\n\t::-webkit-scrollbar {\n\t\twidth: 2px; /* \u0448\u0438\u0440\u0438\u043d\u0430 \u0434\u043b\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u043b\u0430 */\n\n\t\tbackground-color: ",";\n\t}\n\n\t/* \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: ",";\n\t\tborder-radius: 9em;\n\t\tbox-shadow: inset 1px 1px 10px #f3faf7;\n\t}\n\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbackground-color: ",";\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.icons}),(function(t){return t.theme.colors.brand}),(function(t){return t.theme.colors.icons})),_=h.Z.h2(j||(j=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tfont-size: 12px;\n\tcolor: ",";\n\ttext-transform: uppercase;\n"])),(function(t){return t.theme.colors.textMain})),R=h.Z.form(Z||(Z=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-direction: column;\n\tmargin-top: 12px;\n\tgap: 28px;\n\n\tfont-size: 12px;\n\tcolor: ",";\n\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: flex-end;\n\t\tflex-direction: row;\n\t\tmargin-bottom: 20px;\n\t\t/* gap: 32px; */\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-direction: column;\n\t\tmargin-top: 12px;\n\n\t\tfont-size: 12px;\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.textMain})),Y=h.Z.div(k||(k=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 12px;\n\tgap: 20px;\n\tfont-size: 12px;\n\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textMain})),q=h.Z.label(O||(O=(0,u.Z)(["\n\tposition: relative;\n\twidth: 105px;\n\tfont-size: 11px;\n\tcolor: ",";\n\n\t@media screen and (min-width: 768px) {\n\t\tgap: 20px;\n\t\twidth: 110px;\n\t}\n"])),(function(t){return t.theme.colors.textSecondary})),G=(0,h.Z)(N.r)(C||(C=(0,u.Z)(["\n\tposition: absolute;\n\ttop: 48%;\n\tright: 6px;\n"]))),J=h.Z.input(H||(H=(0,u.Z)(["\n\twidth: 100%;\n\tmargin-top: 4px;\n\tpadding-left: 4px;\n\theight: 42px;\n\n\tbackground: ",";\n\tborder: 1px solid ",";\n\tmargin-top: 4px;\n\tcolor: ",";\n\n\t@media screen and (min-width: 768px) {\n\t\twidth: 110px;\n\t\tpadding-left: 8px;\n\t}\n"])),(function(t){return t.theme.colors.body}),(function(t){return t.theme.colors.icons}),(function(t){return t.theme.colors.textMain})),Q=h.Z.button(M||(M=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 40px;\n\tmargin-bottom: 24px;\n\n\tfont-size: 16px;\n\tline-height: 1.21;\n\tfont-weight: 600px;\n\n\tborder: none;\n\tcolor: ",";\n\tbackground-color: ",";\n\ttransition: ",";\n\t:hover {\n\t\tborder: 1px solid ",";\n\t\tbackground: transparent;\n\t\tcolor: ",";\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 0px;\n\t\theight: 42px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\theight: 40px;\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.brand}),(function(t){return t.theme.transition}),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.textMain})),W=h.Z.button(E||(E=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 40px;\n\tmargin-bottom: 24px;\n\n\tfont-size: 16px;\n\tline-height: 1.21;\n\tfont-weight: 600px;\n\n\tborder: 1px solid ",";\n\tcolor: ",";\n\tbackground-color: ",";\n\ttransition: ",";\n\t:hover {\n\t\tborder: none;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 0px;\n\t\theight: 42px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\theight: 40px;\n\t}\n"])),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.transparent}),(function(t){return t.theme.transition}),(function(t){return t.theme.colors.brand}),(function(t){return t.theme.colors.white})),K=h.Z.div(V||(V=(0,u.Z)(["\n\tposition: relative;\n\n\t@media screen and (min-width: 768px) {\n\t\ttext-align: left;\n\t}\n"]))),$=h.Z.h2(B||(B=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tfont-weight: 700;\n\tfont-size: 12px;\n\tline-height: 1.21;\n\tcolor: ",";\n\ttext-transform: uppercase;\n\n\t@media screen and (min-width: 768px) {\n\t\tjustify-content: left;\n\t}\n\n\t::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 0;\n\t\twidth: 74px;\n\t\theight: 1px;\n\t\tbackground-color: ",";\n\t}\n\t::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tright: 0;\n\t\twidth: 74px;\n\t\theight: 1px;\n\t\tbackground-color: ",";\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\t::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 0;\n\t\t\twidth: 1px;\n\t\t\theight: 1px;\n\t\t\tbackground-color: transparent;\n\t\t}\n\n\t\t::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tright: 53%;\n\t\t\twidth: 159px;\n\t\t\theight: 1px;\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\tfont-weight: 700px;\n\t\tfont-size: 12px;\n\t\tline-height: 1.21;\n\t\tcolor: ",";\n\t\ttext-transform: uppercase;\n\n\t\t::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 0;\n\t\t\twidth: 74px;\n\t\t\theight: 1px;\n\t\t\tbackground-color: ",";\n\t\t}\n\t\t::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tright: 0;\n\t\t\twidth: 74px;\n\t\t\theight: 1px;\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"])),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.borderNav}),(function(t){return t.theme.colors.borderNav}),(function(t){return t.theme.colors.borderNav}),(function(t){return t.theme.colors.textMain}),(function(t){return t.theme.colors.borderNav}),(function(t){return t.theme.colors.borderNav})),U=h.Z.ul(L||(L=(0,u.Z)(["\n\tmargin-top: 4px;\n"]))),X=(h.Z.div(D||(D=(0,u.Z)(["\n\twidth: 49px;\n\theight: 45px;\n\tmargin: 0;\n"]))),h.Z.div(I||(I=(0,u.Z)(["\n\tmargin-top: 24px;\n\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 32px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 32px;\n\t}\n"])))),tt=h.Z.div(z||(z=(0,u.Z)(["\nwidth: 205px;\n@media screen and (min-width: 768px) {\n\t\twidth: 400px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 510px;\n\t}\n"]))),nt=h.Z.p(A||(A=(0,u.Z)(["\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 14px;\n"]))),et=(h.Z.div(P||(P=(0,u.Z)(["\n\twidth: 150px;\n\tborder-radius: 1px !important;\n"]))),["title","titleId"]);function rt(){return rt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},rt.apply(this,arguments)}function it(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function ot(t,n){var e=t.title,r=t.titleId,i=it(t,et);return F.createElement("svg",rt({width:50,height:46,viewBox:"0 0 50 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),e?F.createElement("title",{id:r},e):null,S||(S=F.createElement("path",{d:"M18.25 45.25H38.5C40.3675 45.25 41.965 44.125 42.64 42.505L49.435 26.6425C49.6375 26.125 49.75 25.585 49.75 25V20.5C49.75 18.025 47.725 16 45.25 16H31.0525L33.19 5.7175L33.2575 4.9975C33.2575 4.075 32.875 3.22 32.2675 2.6125L29.8825 0.25L15.055 15.0775C14.245 15.8875 13.75 17.0125 13.75 18.25V40.75C13.75 43.225 15.775 45.25 18.25 45.25ZM18.25 18.25L28.015 8.485L25 20.5H45.25V25L38.5 40.75H18.25V18.25ZM0.25 18.25H9.25V45.25H0.25V18.25Z",fill:"#A6ABB9"})))}var lt,at,ct=F.forwardRef(ot),st=(e.p,e(7689)),dt=e(9434),pt=e(7074),ut=e(3905),ht=e(674),xt=e(4933),ft=function(t){var n=t.onClose,e=(0,d.Z)(),r=(0,st.s0)(),i=(0,dt.v9)(pt.tZ),o=(0,dt.I0)(),l=(0,dt.v9)(pt.jy);return(0,w.jsxs)(tt,{children:[(0,w.jsx)(ct,{}),(0,w.jsx)(nt,{children:e.modalFaster.text}),(0,w.jsxs)(X,{children:[(0,w.jsx)(W,{type:"button",onClick:function(){o((0,ut.Or)({pages:l-i})).unwrap().then((function(){return r("/library")})),o((0,ht.v)()),o((0,xt.p5)())},children:e.modalFaster.btnNew}),(0,w.jsx)(Q,{type:"button",onClick:n,children:e.modalFaster.btnBack})]})]})},mt=["title","titleId"];function gt(){return gt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},gt.apply(this,arguments)}function bt(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function wt(t,n){var e=t.title,r=t.titleId,i=bt(t,mt);return F.createElement("svg",gt({width:54,height:54,viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),e?F.createElement("title",{id:r},e):null,lt||(lt=F.createElement("g",{clipPath:"url(#clip0_4306_8402)"},F.createElement("path",{d:"M20.25 47.25H40.5C42.3675 47.25 43.965 46.125 44.64 44.505L51.435 28.6425C51.6375 28.125 51.75 27.585 51.75 27V22.5C51.75 20.025 49.725 18 47.25 18H33.0525L35.19 7.7175L35.2575 6.9975C35.2575 6.075 34.875 5.22 34.2675 4.6125L31.8825 2.25L17.055 17.0775C16.245 17.8875 15.75 19.0125 15.75 20.25V42.75C15.75 45.225 17.775 47.25 20.25 47.25ZM20.25 20.25L30.015 10.485L27 22.5H47.25V27L40.5 42.75H20.25V20.25ZM2.25 20.25H11.25V47.25H2.25V20.25Z",fill:"#FF6B08"}))),at||(at=F.createElement("defs",null,F.createElement("clipPath",{id:"clip0_4306_8402"},F.createElement("rect",{width:54,height:54,fill:"white"})))))}var vt=F.forwardRef(wt),yt=(e.p,function(t){var n=t.onClose,e=(0,d.Z)();return(0,w.jsxs)(tt,{children:[(0,w.jsx)(vt,{}),(0,w.jsx)(nt,{children:e.modalDone.text}),(0,w.jsx)(X,{children:(0,w.jsx)(Q,{type:"button",onClick:n,children:e.modalDone.btnDone})})]})}),jt=e(5264),Zt=e(1384);function kt(){var t=(0,F.useState)(!1),n=(0,c.Z)(t,2),e=n[0],r=n[1],i=(0,F.useState)(!1),o=(0,c.Z)(i,2),l=o[0],a=o[1],p=(0,F.useState)(!1),u=(0,c.Z)(p,2),h=u[0],x=u[1],f=(0,dt.v9)(pt.BR),m=(0,dt.v9)(pt.tZ),g=(0,d.Z)(),b=(0,dt.I0)(),y=(0,Zt.P9)(Date.now()),j=(0,dt.v9)(pt.qo);(0,F.useEffect)((function(){!function(){var t=null===j||void 0===j?void 0:j.reduce((function(t,n){return t+n.pagesCount}),0);f.length>0&&f[f.length-1].plan===t&&(a(!0),x(!0))}()}),[f,b,j]);(0,F.useEffect)((function(){b((0,ut.Dq)())}),[m,b]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(T,{children:[(0,w.jsx)(_,{children:g.results.title}),(0,w.jsxs)(R,{onSubmit:function(t){var n,e;t.preventDefault();var i=Number(t.target.elements.page.value),o=(null===(n=f[f.length-1])||void 0===n?void 0:n.plan)-(null===(e=f[0])||void 0===e?void 0:e.fact);if(Number.isNaN(i))jt.Notify.failure("Enter numbers, please");else{if(i>o)return jt.Notify.failure("".concat(g.results.notify1part," ").concat(o," ").concat(g.results.notify2part));if(0===i)return jt.Notify.failure("You have entered 0. Enter correct data");b((0,ut.Or)({pages:i})),f[0].fact+i<f[0].plan&&r(!0)}},children:[(0,w.jsxs)(Y,{children:[(0,w.jsxs)(q,{children:[g.results.label1,(0,w.jsx)(J,{type:"text",value:y,disabled:!0}),(0,w.jsx)(G,{})]}),(0,w.jsxs)(q,{children:[g.results.label2,(0,w.jsx)(J,{type:"text",name:"page"})]})]}),(0,w.jsx)(Q,{type:"submit",disabled:h,children:g.results.btn})]}),(0,w.jsx)(K,{children:(0,w.jsx)($,{children:g.results.stat})}),(0,w.jsx)(U,{children:j&&j.map((function(t,n){return(0,w.jsx)(v,{data:t},n)}))})]}),e&&(0,w.jsx)(s.Z,{onClose:function(){return r(!1)},children:(0,w.jsx)(ft,{onClose:function(){return r(!1)}})}),l&&(0,w.jsx)(s.Z,{onClose:function(){return a(!1)},offBackdrop:h,children:(0,w.jsx)(yt,{onClose:function(){a(!1),b((0,ht.v)()),b((0,xt.p5)())}})})]})}},5907:function(t,n,e){e.d(n,{Z:function(){return M}});var r,i,o,l,a,c,s,d=e(5097),p=e(885),u=e(2791),h=e(168),x=e(3081),f=x.Z.p(r||(r=(0,h.Z)(["\n\tfont-weight: 700;\n\tfont-size: 25px;\n\tline-height: 38px;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textMain})),m=x.Z.span(i||(i=(0,h.Z)(["\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tline-height: 12px;\n\ttext-align: center;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textSecondary})),g=e(184),b=function(t){var n=t.value,e=t.type;return(0,g.jsxs)("div",{children:[(0,g.jsx)(f,{children:n}),(0,g.jsx)(m,{children:e})]})},w=function(t){return[Math.floor(t/864e5),Math.floor(t%864e5/36e5),Math.floor(t%36e5/6e4),Math.floor(t%6e4/1e3)]},v=x.Z.div(o||(o=(0,h.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\tmargin: 12px 0px;\n"]))),y=x.Z.p(l||(l=(0,h.Z)(["\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tline-height: 17px;\n\tmargin-bottom: 9px;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textSecondary})),j=x.Z.p(a||(a=(0,h.Z)(["\n\tfont-weight: 700;\n\tfont-size: 25px;\n\tline-height: 38px;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textMain})),Z=x.Z.div(c||(c=(0,h.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: baseline;\n\n\tpadding: 8px 33px;\n\tmin-width: 280px;\n\tbackground-color: ",";\n\tbox-shadow: ",";\n\t@media screen and (min-width: 768px) {\n\t\tpadding: 8px 30px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tpadding: 8px 45px;\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.shadow.box})),k=function(t){var n=t.targetDate,e=t.title,r=(0,d.Z)(),i=function(t){var n=new Date(t).getTime(),e=(0,u.useState)(n-(new Date).getTime()),r=(0,p.Z)(e,2),i=r[0],o=r[1];return(0,u.useEffect)((function(){var t=setInterval((function(){o(n-(new Date).getTime())}),1e3);return function(){return clearInterval(t)}}),[n]),w(i)}(n),o=(0,p.Z)(i,4),l=o[0],a=o[1],c=o[2],s=o[3];return l+a+c+s<=0?(0,g.jsx)("p",{children:"TIME IS GONE"}):(0,g.jsxs)(v,{children:[(0,g.jsx)(y,{children:e}),(0,g.jsxs)(Z,{children:[(0,g.jsx)(b,{value:l,type:r.timer.days,isDanger:l<=3}),(0,g.jsx)(j,{children:":"}),(0,g.jsx)(b,{value:a,type:r.timer.hours,isDanger:!1}),(0,g.jsx)(j,{children:":"}),(0,g.jsx)(b,{value:c,type:r.timer.min,isDanger:!1}),(0,g.jsx)(j,{children:":"}),(0,g.jsx)(b,{value:s,type:r.timer.sec,isDanger:!1})]})]})},O=x.Z.div(s||(s=(0,h.Z)(["\n\tbox-sizing: border-box;\n\tmargin: 0px auto;\n\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tmax-width: 800px;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tmax-width: 900px;\n\t}\n"]))),C=e(9434),H=e(7074),M=function(){var t=(0,d.Z)(),n=(0,C.v9)(H.tj),e=(new Date).getFullYear()+"-12-31",r=60*(new Date).getTimezoneOffset()*1e3,i=new Date(e).getTime(),o=new Date(i+r),l=new Date(n).getTime(),a=new Date(l+r);return(0,g.jsxs)(O,{children:[(0,g.jsx)(k,{title:t.timer.title1,targetDate:o}),(0,g.jsx)(k,{title:t.timer.title2,targetDate:a})]})}},7602:function(t,n,e){e.d(n,{Z:function(){return $}});var r,i=e(5097),o=e(6138),l=e(2791),a=["title","titleId"];function c(){return c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},c.apply(this,arguments)}function s(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function d(t,n){var e=t.title,i=t.titleId,o=s(t,a);return l.createElement("svg",c({width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},o),e?l.createElement("title",{id:i},e):null,r||(r=l.createElement("path",{d:"M11.9508 1.19299L4.51063 7.95533C4.44509 8.01489 4.33898 8.01489 4.2736 7.95533L0.0490365 4.11553C-0.0163455 4.05624 -0.0163455 3.9598 0.0490365 3.90023L1.07555 2.96725C1.14108 2.90782 1.2472 2.90782 1.31258 2.96725L4.39227 5.76621L10.6875 0.0445687C10.7531 -0.0148562 10.859 -0.0148562 10.9245 0.0445687L11.9508 0.977555C12.0164 1.03698 12.0164 1.13328 11.9508 1.19299Z",fill:"#FF6B08"})))}var p,u=l.forwardRef(d),h=(e.p,["title","titleId"]);function x(){return x=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},x.apply(this,arguments)}function f(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function m(t,n){var e=t.title,r=t.titleId,i=f(t,h);return l.createElement("svg",x({width:14,height:18,viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),e?l.createElement("title",{id:r},e):null,p||(p=l.createElement("path",{d:"M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z",fill:"#A6ABB9"})))}var g,b,w,v,y,j,Z,k,O,C,H,M,E,V=l.forwardRef(m),B=(e.p,e(168)),L=e(3081),D=L.Z.div(g||(g=(0,B.Z)(["\n\tposition: relative;\n\n\tpadding: 20px 30px 20px 54px;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n    border-bottom: 1px solid  ",";\n\n\t/* background-color: ","; */\n\t/* box-shadow: ","; */\n    :first-of-type{\n        border-top: 1px solid  ",";\n    }\n"])),(function(t){return t.theme.colors.borderNav}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.shadow.box}),(function(t){return t.theme.colors.borderNav})),I=L.Z.div(b||(b=(0,B.Z)(["\n    \tposition: absolute;\n\tright: 20px;\n\twidth: fit-content;\n\theight: fit-content;\n"]))),z=L.Z.table(w||(w=(0,B.Z)(["\n\ttable-layout: fixed;\n\twidth: 100%;\n\tmax-width: 280px;\n\tmargin-top: 12px;\n"]))),A=L.Z.td(v||(v=(0,B.Z)(["\n\twidth: 80px;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.textSecondary})),P=L.Z.td(y||(y=(0,B.Z)(["\n\twidth: 80px;\n"]))),S=L.Z.tr(j||(j=(0,B.Z)(["\n\twidth: 200px;\n\tdisplay: block;\n\tmargin-bottom: 14px;\n\t&:last-of-type {\n\t\tmargin-bottom: 0;\n\t}\n"]))),F=L.Z.div(Z||(Z=(0,B.Z)(["\n\tposition: absolute;\n\tleft: 20px;\n\twidth: fit-content;\n\theight: fit-content;\n"]))),N=e(5188),T=e(9434),_=e(7074),R=L.Z.div(k||(k=(0,B.Z)(["\n\t/* display: none; */\n\n\t@media screen and (min-width: 768px) {\n\t\tpadding: 12px 0px;\n\t\tborder-top: 1px solid #e0e5eb;\n\t\tborder-bottom: 1px solid #e0e5eb;\n\t\tcolor: ",";\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 285px 205px 110px 1rem;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: 405px 220px 120px 1rem;\n\t}\n"])),(function(t){return t.theme.colors.textSecondary})),Y=L.Z.div(O||(O=(0,B.Z)(["\n\tdisplay: none;\n\tpadding: 10px 0px;\n\t/* margin-top: 16px; */\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tbox-shadow: ",";\n\n\tbackground-color: ",";\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 40px 245px 205px 110px 60px 1rem;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: 35px 370px 220px 120px 140px 1rem;\n\t}\n"])),(function(t){return t.theme.shadow.box}),(function(t){return t.theme.colors.transparent})),q=(L.Z.div(C||(C=(0,B.Z)(["\n\tposition: absolute;\n\tleft: 20px;\n\twidth: fit-content;\n\theight: fit-content;\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: inline;\n\t\tposition: static;\n\t}\n"]))),L.Z.div(H||(H=(0,B.Z)(["\n\tinput {\n\t\topacity: 0;\n\t\tposition: absolute;\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\t& + label {\n\t\t\tposition: relative;\n\t\t\twidth: 15px;\n\t\t\theight: 15px;\n\t\t\tborder: 1px solid #a6abb9;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\t& > svg {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&:checked + label {\n\t\t\tborder: 1px solid #ff6b08;\n\t\t\tbackground-image: url('Assets/svg/CheckBox.svg');\n\t\t\tbackground-size: contain;\n\t\t\tfill: green;\n\n\t\t\t& > svg {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n"])))),G=L.Z.ul(M||(M=(0,B.Z)(["\nmargin-bottom: 20px;\n\t/* background-color: red; */\n\t@media screen and (min-width: 768px) {\n\t\tmargin-bottom: 30px;\n\t\twidth: 704px;\n\t\theight: 150px;\n\t\tmax-height: 235px;\n\n\t\toverflow-y: scroll;\n\t}\n\t@media screen and (min-width: 1280px) {\n\t\twidth: 928px;\n\t\t/* height: 250px; */\n\n\n\t}\n\n\t::-webkit-scrollbar {\n\t\twidth: 5px; /* \u0448\u0438\u0440\u0438\u043d\u0430 \u0434\u043b\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u043b\u0430 */\n\t\tbackground-color: ",";\n\t}\n\n\t/* \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: ",";\n\t\tborder-radius: 9em;\n\t\tbox-shadow: inset 1px 1px 10px #f3faf7;\n\t}\n"])),(function(t){return t.theme.colors.backdrop}),(function(t){return t.theme.colors.trainingGrey})),J=L.Z.button(E||(E=(0,B.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: flex-start;\nwidth: 33px;\nheight: 33px;\nborder: none;\nbackground-color: inherit;\n\n"]))),Q=e(184),W=function(t){var n=t.title,e=t.author,r=t.publishYear,l=(t.fill,t.pagesTotal),a=t.pagesFinished,c=t.handleDelete,s=t.id,d=(0,i.Z)(),p=(0,T.v9)(_.xM);return(0,Q.jsxs)(D,{children:[(0,Q.jsxs)(F,{children:[!p&&(0,Q.jsx)(o.r,{fill:"#A6ABB9",width:22,height:17}),p&&(0,Q.jsxs)(q,{children:[a===l?(0,Q.jsx)("input",{type:"checkbox",id:s,checked:!0,disabled:!0}):(0,Q.jsx)("input",{type:"checkbox",id:s,disabled:!0}),(0,Q.jsx)("label",{htmlFor:s,children:(0,Q.jsx)(u,{})})]})]}),!p&&(0,Q.jsx)(I,{children:(0,Q.jsx)(J,{type:"button",onClick:function(){return c(s)},children:(0,Q.jsx)(V,{width:22,height:17})})}),(0,Q.jsx)(N.H6,{children:n}),(0,Q.jsx)(z,{children:(0,Q.jsxs)("tbody",{children:[(0,Q.jsxs)(S,{children:[(0,Q.jsx)(A,{children:d.mobileLibraryItem.author}),(0,Q.jsx)(P,{children:e})]}),(0,Q.jsxs)(S,{children:[(0,Q.jsx)(A,{children:d.mobileLibraryItem.year}),(0,Q.jsx)(P,{children:r})]}),(0,Q.jsxs)(S,{children:[(0,Q.jsx)(A,{children:d.mobileLibraryItem.pages}),(0,Q.jsx)(P,{children:l})]})]})})]})},K=e(3905),$=function(t){var n=t.isMobile,e=(0,i.Z)(),r=(0,T.I0)(),l=(0,T.v9)(_.YF),a=(0,T.v9)(_.xM),c=function(t){r((0,K.Vc)(t))};return(0,Q.jsxs)("div",{children:[!n&&(0,Q.jsxs)(R,{children:[(0,Q.jsx)("span",{children:e.trainingBookList.title}),(0,Q.jsx)("span",{children:e.trainingBookList.author}),(0,Q.jsx)("span",{children:e.trainingBookList.year}),(0,Q.jsx)("span",{children:e.trainingBookList.pages})]}),(0,Q.jsx)(G,{id:"planning-list",children:0!==l.length&&(null===l||void 0===l?void 0:l.map((function(t){var e=t.title,r=t.author,i=t.publishYear,s=t.pagesTotal,d=t._id,p=t.pagesFinished;return(0,Q.jsx)("li",{children:n?(0,Q.jsx)(W,{handleDelete:c,title:e,author:r,publishYear:i,pagesTotal:s,pagesFinished:p,id:d}):(0,Q.jsxs)(Y,{children:[!a&&(0,Q.jsx)(o.r,{fill:"#A6ABB9",width:22,height:17}),a&&(0,Q.jsx)(q,{children:p>=s&&(0,Q.jsx)(u,{})}),(0,Q.jsx)("span",{children:e}),(0,Q.jsx)("span",{children:r}),(0,Q.jsx)("span",{children:i}),(0,Q.jsx)("span",{children:s}),!a&&l.length>1&&(0,Q.jsx)(J,{type:"button",onClick:function(){return c(d)},children:(0,Q.jsx)(V,{width:22,height:17})})]})},d)})))})]})}}}]);
//# sourceMappingURL=486.0597bc40.chunk.js.map