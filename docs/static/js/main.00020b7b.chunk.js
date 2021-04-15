(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),i=n.n(s),a=(n(15),n(3));var l=function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},o=n(2),d=n(8),m=n.n(d),x=n(9),b=n.n(x),j=n(10),u=n.n(j),f=n.p+"static/media/alarm_beeps.dbf5e1ec.mp3",h=n(0);var O=function(e){var t=e.session,n=e.timeLeft,r=e.handleStartStop,s=e.handleReset,i=e.isRunning,a=e.audioRef;Object(c.useEffect)((function(){0===n&&a.current.play()}),[n,a]);var l=Math.floor(n/60),d=n%60;return Object(h.jsxs)("div",{id:"timer-container",className:"flex flex-col items-center mt-5 sm:mt-4 md:mt-6",children:[Object(h.jsx)("h2",{id:"timer-label",className:"text-4xl md:text-5xl",children:t}),Object(h.jsxs)("p",{id:"time-left",className:"text-6xl md:text-7xl lg:text-8xl",children:[l,":",d<=9?0:null,d]}),Object(h.jsx)("audio",{id:"beep",ref:a,children:Object(h.jsx)("source",{src:f,type:"audio/mp3"})}),Object(h.jsxs)("div",{id:"timer-control",className:"flex",children:[Object(h.jsx)("button",{id:"start-stop",className:"border-2 border-primary rounded-md w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mx-1.5 lg:mx-2",onClick:r,children:Object(h.jsx)(o.Icon,{icon:i?b.a:m.a,width:32})}),Object(h.jsx)("button",{id:"reset",className:"border-2 border-primary rounded-md w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mx-1.5 lg:mx-2",onClick:s,children:Object(h.jsx)(o.Icon,{icon:u.a,width:22,hFlip:!0})})]})]})},p=n(4),g=n.n(p),v=n(5),w=n.n(v);var k=function(e){var t=e.sessionLength,n=e.handleSessionIncrement,c=e.handleSessionDecrement;return Object(h.jsxs)("div",{id:"session-container",className:"flex flex-col items-center mt-6 sm:mt-0",children:[Object(h.jsx)("h2",{id:"session-label",className:"text-2xl md:text-3xl",children:"Session Length"}),Object(h.jsxs)("div",{id:"session-length-control",className:"flex items-center justify-between w-28 md:w-32",children:[Object(h.jsx)("button",{id:"session-decrement",className:"border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5",onClick:c,children:Object(h.jsx)(o.Icon,{icon:g.a})}),Object(h.jsx)("p",{id:"session-length",className:"text-2xl md:text-3xl",children:t}),Object(h.jsx)("button",{id:"session-increment",className:"border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5",onClick:n,children:Object(h.jsx)(o.Icon,{icon:w.a})})]})]})};var y=function(e){var t=e.breakLength,n=e.handleBreakIncrement,c=e.handleBreakDecrement;return Object(h.jsxs)("div",{id:"break-container",className:"flex flex-col items-center mt-4 sm:mt-0",children:[Object(h.jsx)("h2",{id:"break-label",className:"text-2xl md:text-3xl",children:"Break Length"}),Object(h.jsxs)("div",{id:"break-length-control",className:"flex items-center justify-between w-28 md:w-32",children:[Object(h.jsx)("button",{id:"break-decrement",className:"border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5",onClick:c,children:Object(h.jsx)(o.Icon,{icon:g.a})}),Object(h.jsx)("p",{id:"break-length",className:"text-2xl md:text-3xl",children:t}),Object(h.jsx)("button",{id:"break-increment",className:"border-2 border-primary rounded-md w-6 h-6 flex items-center justify-center mx-3 relative -top-0.5",onClick:n,children:Object(h.jsx)(o.Icon,{icon:w.a})})]})]})};var N=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)("Session"),i=Object(a.a)(s,2),o=i[0],d=i[1],m=Object(c.useState)(25),x=Object(a.a)(m,2),b=x[0],j=x[1],u=Object(c.useState)(5),f=Object(a.a)(u,2),p=f[0],g=f[1],v=Object(c.useState)(1500),w=Object(a.a)(v,2),N=w[0],S=w[1],I=Object(c.useRef)();return l((function(){S(N-1)}),n?1e3:null),Object(c.useEffect)((function(){-1===N&&"Session"===o&&(d("Break"),S(60*b)),-1===N&&"Break"===o&&(d("Session"),S(60*p))}),[N,o,b,p]),Object(c.useEffect)((function(){"Session"===o&&S(60*b),"Break"===o&&S(60*p)}),[b,p,o]),Object(h.jsxs)("div",{id:"App",className:"bg-white bg-opacity-30 text-primary p-10 sm:px-16 sm:py-6 md:py-9 md:px-24 lg:px-32 rounded-2xl flex flex-col items-center font-sans",children:[Object(h.jsx)("h1",{id:"app-name",className:"text-4xl md:text-5xl  border-b-2 border-primary w-56 sm:w-60 md:w-80 text-center",children:"Pomodoro Timer"}),Object(h.jsx)(O,{session:o,timeLeft:N,handleStartStop:function(){r((function(e){return!e}))},handleReset:function(){r(!1),d("Session"),j(25),g(5),S(1500),I.current.currentTime=0,I.current.pause()},isRunning:n,audioRef:I}),Object(h.jsxs)("div",{id:"control-container",className:"flex flex-col justify-between sm:flex-row items-center sm:mt-4 md:mt-6 sm:w-72 md:w-96",children:[Object(h.jsx)(k,{sessionLength:b,handleSessionIncrement:function(){!1===n&&b>=1&&b<60&&j(b+1)},handleSessionDecrement:function(){!1===n&&b>1&&b<=60&&j(b-1)}}),Object(h.jsx)(y,{breakLength:p,handleBreakIncrement:function(){!1===n&&p>=1&&p<60&&g(p+1)},handleBreakDecrement:function(){!1===n&&p>1&&p<=60&&g(p-1)}})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.00020b7b.chunk.js.map