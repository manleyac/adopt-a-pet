(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(14),s=c.n(a),i=(c(20),c.p+"static/media/logo.ebb667d1.svg"),l=c(0),o=function(){return Object(l.jsx)("div",{className:"flex justify-center w-full py-2 md:py-4",style:{backgroundColor:"rgb(1,173,181)"},children:Object(l.jsx)("img",{className:"h-12 lg:h-24 object-center",src:i,alt:"logo"})})},d=function(){return Object(l.jsx)("div",{style:{backgroundColor:"rgb(1,173,181)"},children:Object(l.jsx)("div",{className:"container py-8",children:Object(l.jsx)("a",{className:"text-sm md:text-base text-white",target:"_blank",rel:"noreferrer",href:"https://www.manleyweb.dev",children:"site by manleyweb.dev"})})})},j=function(e){var t=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),t,Object(l.jsx)(d,{})]})},b=c(3),x="https://via.placeholder.com/100",u=function(e){var t,c=e.name,n=e.link,r=e.pic,a=e.description,s=a||"No description given.";try{t="small"in r?r.small:x}catch(i){t=x}return Object(l.jsx)("div",{className:"my-2 w-full lg:max-w-3xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg justify-center",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,children:Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("div",{className:"flex flex-initial items-center",children:Object(l.jsx)("img",{src:t,className:"rounded-md border-2 border-gray-300",alt:c})}),Object(l.jsxs)("div",{className:"w-full",children:[Object(l.jsx)("h2",{className:"text-center text-xl font-semibold mb-2",children:c}),Object(l.jsx)("p",{className:"text-center",children:s})]})]})})})},m="https://via.placeholder.com/300",h=function(e){var t,c=e.pic,n=e.name,r=e.gender,a=e.age,s=e.description,i=e.contact,o=e.breeds,d=e.link,j=i.email?i.email:"Not Listed",b=i.phone?i.phone:"Not Listed",x=o.mixed?"".concat(o.primary," mixed"):o.primary,u=s||"No description given.";try{t="small"in c?c.small:m}catch(h){t=m}return Object(l.jsx)("div",{className:"m-3 bg-white border-2 border-gray-300 p-5 rounded-md",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:d,children:Object(l.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[Object(l.jsx)("img",{className:"w-full",src:t,alt:n}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"text-center text-xl font-semibold mb-2",children:n}),Object(l.jsx)("p",{className:"text-gray-600",children:u}),Object(l.jsx)("p",{children:"Breed: ".concat(x)}),Object(l.jsxs)("div",{className:"flex justify-between text-gray-900 font-medium",children:[Object(l.jsx)("p",{children:"Gender: ".concat(r)}),Object(l.jsx)("p",{children:"Age: ".concat(a)})]}),Object(l.jsx)("p",{children:"Email: ".concat(j)}),Object(l.jsx)("p",{children:"Phone: ".concat(b)})]})]})})})},p=function(e){return e.animals?e.view?Object(l.jsx)("div",{className:"container flex flex-col justify-center items-center",children:e.animals.map((function(e,t){return Object(l.jsx)(u,{name:e.name,link:e.url,description:e.description,pic:e.photos[0]},t)}))}):Object(l.jsx)("div",{className:"container grid md:grid-cols-2 xl:grid-cols-3 gap-4",children:e.animals.map((function(e,t){return Object(l.jsx)(h,{name:e.name,pic:e.primary_photo_cropped,gender:e.gender,age:e.age,description:e.description,contact:e.contact,breeds:e.breeds,link:e.url},t)}))}):null},O=c(15),f=c.n(O),g=function(e,t,c){return f.a.get("".concat("/api","/").concat(e,"/").concat(t,"/").concat(c))},v=function(){var e="h-2.5 w-2.5 rounded-full";return Object(l.jsxs)("div",{className:"pt-10 flex justify-center",children:[Object(l.jsx)("div",{style:{backgroundColor:"rgb(1,173,181)"},className:"".concat(e," mr-1 animate-bounce")}),Object(l.jsx)("div",{style:{backgroundColor:"rgb(1,173,181)"},className:"".concat(e," mr-1 animate-bounce200")}),Object(l.jsx)("div",{style:{backgroundColor:"rgb(1,173,181)"},className:"".concat(e," animate-bounce400")})]})},y=c(4),w=function(e){return e.view?Object(l.jsx)(y.a,{size:24,onClick:e.onClick}):Object(l.jsx)(y.b,{size:24,onClick:e.onClick})};var N=function(e,t){if(""===e)return{show:!0,message:"Please select an animal type"};if(5!==t.length)return{show:!0,message:"Please enter a valid zipcode"};try{Number(t);return{show:!1,message:""}}catch(c){return{show:!0,message:"Please enter a valid zipcode"}}},k=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:Object(l.jsx)("div",{className:"object-top w-auto my-72 mx-auto max-w-3xl",children:Object(l.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(l.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[Object(l.jsx)("h3",{className:"text-3xl font-semibold",children:"Input Error"}),Object(l.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:e.onClick,children:Object(l.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),Object(l.jsx)("div",{className:"relative p-6 flex-auto",children:Object(l.jsx)("p",{className:"my-4 text-blueGray-500 text-lg leading-relaxed",children:e.message})}),Object(l.jsx)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",children:Object(l.jsx)("button",{className:"bg-purple-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:e.onClick,children:"Close"})})]})})}),Object(l.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})},C=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({type:"",location:""}),i=Object(b.a)(s,2),o=i[0],d=i[1],j=Object(n.useState)({show:!1,message:""}),x=Object(b.a)(j,2),u=x[0],m=x[1],h=Object(n.useState)(""),O=Object(b.a)(h,2),f=O[0],y=O[1],C=Object(n.useState)([]),S=Object(b.a)(C,2),_=S[0],z=S[1],F=Object(n.useState)(!0),B=Object(b.a)(F,2),P=B[0],E=B[1],R=Object(n.useState)(1),G=Object(b.a)(R,2),A=G[0],D=G[1];Object(n.useEffect)((function(){""!==o.type&&""!==o.location&&(a(!0),g(o.type,o.location,A).then((function(e){z(e.data),a(!1)})))}),[o,A]);var H=r.a.createRef();function I(e){y(e.target.value)}function J(){var e=H.current.value;m(N(f,e)),u.show||d({type:f,location:e})}function L(){A>1&&D(A-1)}function M(){A<_.pagination.total_pages&&D(A+1)}var Z=function(){return Object(l.jsxs)("select",{value:f,className:"border border-gray-300 rounded-md text-gray-600 h-10 px-5 bg-gray hover:border-gray-400 focus:outline-none ",onChange:I,children:[Object(l.jsx)("option",{children:"Select an Animal"}),Object(l.jsx)("option",{value:"Dog",children:"Dog"}),Object(l.jsx)("option",{value:"Cat",children:"Cat"}),Object(l.jsx)("option",{value:"Rabbit",children:"Rabbit"}),Object(l.jsx)("option",{value:"Bird",children:"Bird"}),Object(l.jsx)("option",{value:"Horse",children:"Horse"}),Object(l.jsx)("option",{value:"Barnyard",children:"Barnyard"}),Object(l.jsx)("option",{value:"Small & Furry",children:"Small & Furry"}),Object(l.jsx)("option",{value:"Scales, Fins & Other",children:"Scales, Fins & Other"})]},1)},q=r.a.forwardRef((function(e,t){return Object(l.jsx)("div",{className:"flex bg-white shadow-lg",children:Object(l.jsx)("div",{className:"container flex justify-center p-2",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(Z,{}),Object(l.jsx)("input",{ref:t,className:"border border-gray-300 mr-1 lg:mx-4 rounded-md text-gray-600 h-10 px-5 my-1 bg-white",id:"zip",type:"text",placeholder:"Enter Zipcode",name:"zip"},2),Object(l.jsx)("button",{onClick:J,className:"items-center px-8 py-2 ml-auto font-semibold text-white bg-purple-500 rounded-lg",children:"Search"})]})})})})),K=function(){return Object(l.jsxs)("div",{className:"flex justify-center py-2",children:[Object(l.jsx)("button",{onClick:L,className:"items-center px-4 py-2 mr-1 font-semibold text-white bg-purple-500 rounded-lg",children:"Prev"}),Object(l.jsx)("button",{onClick:M,className:"items-center px-4 py-2 ml-1 font-semibold text-white bg-purple-500 rounded-lg",children:"Next"})]})};return Object(l.jsxs)("div",{children:[Object(l.jsx)(q,{ref:H}),Object(l.jsxs)("div",{className:"flex justify-between py-2 px-4",children:[u.show&&Object(l.jsx)(k,{onClick:function(){m({show:!1,message:""})},message:u.message}),Object(l.jsx)("div",{children:_.pagination&&Object(l.jsx)("p",{children:"Results: ".concat(_.pagination.total_count," Page: ").concat(_.pagination.current_page," of ").concat(_.pagination.total_pages)})}),Object(l.jsx)(w,{view:P,onClick:function(){E(!P)}})]}),Object(l.jsx)("div",{className:"min-h-1/2",children:c?Object(l.jsx)(v,{}):Object(l.jsx)(l.Fragment,{children:0===_.length?Object(l.jsx)("h1",{className:"m-6 text-4xl font-bold text-gray-700 text-center ",children:"Search to find a new pet!"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{view:P,animals:_.animals}),Object(l.jsx)(K,{})]})})})]})};var S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(j,{children:Object(l.jsx)(C,{})})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.353c90db.chunk.js.map