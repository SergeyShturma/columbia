"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[338],{5793:function(e,i,t){t.d(i,{Z:function(){return D}});var s=t(3433),a=t(9439),o=t(2791),r="SizeOptions_options__jjNTo",n="SizeOptions_wrapper__0SW+o",c="SizeOptions_label__IryRl",l="SizeOptions_checkbox__y+RN9",p="SizeOptions_gif__g1fHx",m="SizeOptions_gif_wrapper__6G25x",d="SizeOptions_gif_text__ETerz",f="WomenPage_portfolio__examples__ZLWdg",_="WomenPage_portfolio__item__SDSfG",u="WomenPage_portfolio__box__YxkTD",h="WomenPage_portfolio__wrapper__v1VZT",g="WomenPage_portfolio__pic__X64g3",x="WomenPage_portfolio__title_code__8YoCx",j="WomenPage_portfolio__title_link__vvAJ8",w="WomenPage_portfolio__subtitle__DJhd8",k="WomenPage_portfolio__text__wDGkq",b="WomenPage_portfolio__title__REopJ",N="WomenPage_portfolio__overlay__BL3A3",v=t(184),z=function(e){var i=e.sortedItems;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:f,children:i.map((function(e,i){var t=e.id,s=e.price,a=e.size,o=e.image,r=e.link;return s?(0,v.jsx)("li",{className:_,children:(0,v.jsxs)("div",{className:u,children:[(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("img",{className:g,src:o[0],alt:"t-shirt"}),(0,v.jsxs)("p",{className:x,children:["#",t]}),(0,v.jsxs)("p",{className:N,children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c ",(0,v.jsx)("br",{}),"\u0434\u043b\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0445 \u0437\u0430\u043c\u0456\u0440\u0456\u0432 \u0442\u0430 ",(0,v.jsx)("br",{}),"\u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0444\u043e\u0442\u043e ",(0,v.jsx)("br",{})]})]}),(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("a",{className:j,href:r,rel:"noreferrer",target:"_blank",children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,v.jsx)("h2",{className:b,children:a.join(", ")}),(0,v.jsxs)("p",{className:k,children:[s," \u0433\u0440\u043d"]})]})]})},i):(0,v.jsx)("li",{className:_,children:(0,v.jsxs)("div",{className:u,children:[(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("img",{className:g,src:o,alt:"t-shirt"}),(0,v.jsxs)("p",{className:x,children:["#",t]}),(0,v.jsxs)("p",{className:N,children:["\u0420\u043e\u0437\u043c\u0456\u0440\u0438 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u043b\u0438\u0441\u044f. ",(0,v.jsx)("br",{}),"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c ",(0,v.jsx)("br",{})]})]}),(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("p",{className:j,children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,v.jsx)("h2",{className:b,children:a}),(0,v.jsx)("p",{className:k,children:"\xa0"})]})]})},i)}))})})},L=["M","L","XL","XXL"],D=function(e){var i=e.sortedItems,t=(0,o.useState)([]),f=(0,a.Z)(t,2),_=f[0],u=f[1],h=i.filter((function(e){return e.size.some((function(e){return _.includes(e.trim())}))})),g=i.reduce((function(e,i){return i.size.forEach((function(i){L.includes(i)&&(e[i]+=1)})),e}),{M:0,L:0,XL:0,XXL:0});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:r,children:L.map((function(e,i){return(0,v.jsxs)("div",{className:n,children:[(0,v.jsxs)("label",{className:c,htmlFor:i,children:[e,"(",g[e],")"]}),(0,v.jsx)("input",{type:"checkbox",className:l,value:e,id:i,onChange:function(e){return function(e){var i=e.target.value;u((function(e){return e.includes(i)?e.filter((function(e){return e!==i})):[].concat((0,s.Z)(e),[i])}))}(e)}})]},e)}))}),_.length?h.length?(0,v.jsx)(z,{sortedItems:h}):(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{className:d,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0438\u0439 \u0440\u043e\u0437\u043c\u0456\u0440, \u0431\u043e \u0446\u0435\u0439 \u0432\u0436\u0435 \u0440\u043e\u0437\u0456\u0431\u0440\u0430\u043b\u0438..."}),(0,v.jsx)("iframe",{title:"Fun",className:p,src:"https://giphy.com/embed/kcerH6iby9Id8KRTHr",alt:"gif"})]}):(0,v.jsx)(z,{sortedItems:i})]})}},4223:function(e,i,t){t.d(i,{Z:function(){return p}});var s=t(8977),a="DropDown_dropdown_wrapper__9KJHb",o="DropDown_dropdown_select__hdTvP",r="DropDown_dropdown_text__itrhD",n=t(184),c=new Date,l=(0,s.Z)(c,"dd.MM.yyyy"),p=function(e){var i=e.setSortDir;return(0,n.jsxs)("div",{className:a,children:[(0,n.jsxs)("p",{className:r,children:["*\u0426\u0456\u043d\u0438 \u0442\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0456 \u043d\u0430 ",l]}),(0,n.jsxs)("select",{className:o,onChange:function(e){return i(e.target.value)},children:[(0,n.jsx)("option",{value:"default",children:"\u0437\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e "}),(0,n.jsx)("option",{value:"lowtohigh",children:"\u0446\u0456\u043d\u0430: \u0432\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0438\u0445 "}),(0,n.jsx)("option",{value:"hightolow",children:"\u0446\u0456\u043d\u0430: \u0432\u0456\u0434 \u0434\u043e\u0440\u043e\u0433\u0438\u0445 "})]})]})}},9338:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var s=t(9439),a=t(2791),o=t(4223),r=t(3433),n=[{price:3650,size:["M","L","XL"],image:[t(9003)],link:"https://www.kidstaff.com.ua/tema-33849285.html",id:10},{price:3650,size:["L","XL","XXL"],image:[t(9123)],link:"https://www.kidstaff.com.ua/tema-33819891.html",id:12},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[t(338)],link:"",id:13},{price:3500,size:["XL"],image:[t(5248)],link:"https://www.kidstaff.com.ua/tema-33859421.html",id:14},{price:3500,size:["XL"],image:[t(7696)],link:"https://www.kidstaff.com.ua/tema-33862145.html",id:15},{price:2850,size:["L"],image:[t(1007)],link:"https://www.kidstaff.com.ua/tema-32867077.html",id:16},{price:4500,size:["XL"],image:[t(3139)],link:"https://www.kidstaff.com.ua/tema-33811863.html",id:17},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[t(3278)],link:"",id:18},{price:3500,size:["L"],image:[t(5917)],link:"https://www.kidstaff.com.ua/tema-33851462.html",id:19},{price:1600,size:["XXL"],image:[t(8677)],link:"https://www.kidstaff.com.ua/tema-33852802.html",id:23},{price:1500,size:["L"],image:[t(7885)],link:"https://www.kidstaff.com.ua/tema-30454846.html",id:20},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[t(2559)],link:"",id:25}],c=t(5793),l=t(184),p=function(e){var i=e.sortDir,t=(0,a.useMemo)((function(){return(0,r.Z)(n).sort((function(e,t){return"lowtohigh"===i?e.price-t.price:"hightolow"===i?t.price-e.price:e.id-t.id}))}),[i]);return(0,l.jsx)(c.Z,{sortedItems:t})},m=function(){var e=(0,a.useState)("default"),i=(0,s.Z)(e,2),t=i[0],r=i[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{setSortDir:r}),(0,l.jsx)(p,{sortDir:t})]})}},5248:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-1.fceb94e0673790cc6529.jpg"},2559:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-13.c4bd1db7161c41d4a2a2.jpg"},3139:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-18.ae4fb840559dac4593e5.jpg"},7696:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-19.6d51cb498510d476feb5.jpg"},9123:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-2.51eae79373e1e6bbe810.jpg"},9003:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-21.714a14bd2706baa4d1fd.jpg"},3278:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-22.fc79900c8a5a29ced6f0.jpg"},338:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-23.ceabbb930e42bb0f9320.jpg"},1007:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-3.cb169f7eaad0f47c3326.jpg"},5917:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-4.d398ce2e74bdae242094.jpg"},8677:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-5.53ca523d6146c3535c73.jpg"},7885:function(e,i,t){e.exports=t.p+"static/media/portfolio-img-6.39418e606fde3f2c9dd4.jpg"}}]);
//# sourceMappingURL=338.d7085b94.chunk.js.map