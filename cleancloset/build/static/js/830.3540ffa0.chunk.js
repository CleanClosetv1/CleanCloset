"use strict";(self.webpackChunkcleancloset=self.webpackChunkcleancloset||[]).push([[830],{2395:function(A,e,t){t.r(e),t.d(e,{default:function(){return m}});var n=t(4165),c=t(5861),a=t(4942),g=t(1413),s=t(9439),B=t(2791),w=t.p+"static/media/location.4ba2450b71e973e57b09.png",r=t.p+"static/media/phone-call.d35848942c955a6232b3.png",o=t.p+"static/media/facebook.8d51a55626e9bf107f8f.png",i=t.p+"static/media/instagram.e80dd0bf91b7be13ec82.png",d=t(560),C=t(184),m=function(){var A,e,t=(0,B.useState)([]),m=(0,s.Z)(t,2),l=m[0],S=m[1],Q=function(t){console.log(t),A=t.target.name,e=t.target.value,S((0,g.Z)((0,g.Z)({},A),{},(0,a.Z)({},A,e)))},D=function(){var A=(0,c.Z)((0,n.Z)().mark((function A(e){var t,c,a,g,s;return(0,n.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e.preventDefault(),t=l.yname,c=l.yemail,a=l.about,A.next=4,fetch("/contactUs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({yname:t,yemail:c,about:a})});case 4:return g=A.sent,A.next=7,g.json();case 7:422!==(s=A.sent).status&&s?(window.alert("valid"),console.log("Send succesfully")):(window.alert("invalid"),console.log("invalid"));case 9:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return(0,C.jsxs)("div",{className:"ContactUsMainContainer",children:[(0,C.jsxs)("div",{className:"ContactUSContainer",children:[(0,C.jsxs)("div",{className:"ContactUsLeftSideContainer",children:[(0,C.jsxs)("div",{className:"ContactUsLeftSideContainerBody",children:[(0,C.jsx)("div",{className:"ContactUsLeftSideIcon",children:(0,C.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),(0,C.jsxs)("div",{className:"ContactUsLeftSideContents",children:[(0,C.jsx)("h5",{children:"Chat to us"}),(0,C.jsx)("p",{children:"Our friendly team is there to help"}),(0,C.jsx)("h6",{children:"hi@cleancloset.com"})]})]}),(0,C.jsxs)("div",{className:"ContactUsLeftSideContainerBody",children:[(0,C.jsx)("div",{className:"ContactUsLeftSideIcon",children:(0,C.jsx)("img",{src:w,alt:""})}),(0,C.jsxs)("div",{className:"ContactUsLeftSideContents",children:[(0,C.jsx)("h5",{children:"Visit us "}),(0,C.jsx)("p",{children:"Come say hello at our office HQ"}),(0,C.jsxs)("h6",{children:["100 World trade center, ",(0,C.jsx)("br",{})," Bangalore, karnataka"]})]})]}),(0,C.jsxs)("div",{className:"ContactUsLeftSideContainerBody",children:[(0,C.jsx)("div",{className:"ContactUsLeftSideIcon",children:(0,C.jsx)("img",{src:r,alt:""})}),(0,C.jsxs)("div",{className:"ContactUsLeftSideContents",children:[(0,C.jsx)("h5",{children:"Call us "}),(0,C.jsx)("p",{children:"Mon-Fri from 8am to 5pm"}),(0,C.jsx)("a",{href:"tel:123-456-7890",children:(0,C.jsx)("h5",{children:"+91 9565178122"})})]})]}),(0,C.jsxs)("div",{className:"ContactUsLeftSideContainerSocialIcon",children:[(0,C.jsx)("a",{href:"https://www.facebook.com/varidhsrivastav/",children:(0,C.jsx)("img",{src:o,alt:""})}),(0,C.jsx)("a",{href:"https://www.instagram.com/varidh_srivastav/",children:(0,C.jsx)("img",{src:i,alt:""})}),(0,C.jsx)("a",{href:"linkedin.com/in/varidh-srivastav-544b9b201",children:(0,C.jsx)("img",{src:"data:image/png;base64,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",alt:""})})]})]}),(0,C.jsxs)("div",{className:"ContactUsFormSideContainer",children:[(0,C.jsxs)("div",{className:"ContactUsFormSideContainerHeading",children:[(0,C.jsx)("h1",{children:"We'd love to hear from you"}),(0,C.jsx)("p",{children:"We have offices and team all around the world."})]}),(0,C.jsx)("div",{className:"ContactUsFormSideContainerForm",children:(0,C.jsxs)("form",{method:"POST",children:[(0,C.jsx)("div",{className:"ContactUsFormSideContainerFormInputF",children:(0,C.jsx)("input",{type:"text",placeholder:"Your Name",value:l.yname,onChange:function(A){S((0,g.Z)((0,g.Z)({},l),{},{yname:A.target.value}))}})})," ",(0,C.jsx)("div",{className:"ContactUsFormSideContainerFormInputF",children:(0,C.jsx)("input",{type:"email",placeholder:"example@email.com",value:l.yemail,onChange:function(A){S((0,g.Z)((0,g.Z)({},l),{},{yemail:A.target.value}))}})})," ",(0,C.jsxs)("div",{className:"ContactUsFormSideContainerFormInputF",children:[(0,C.jsx)("label",{htmlFor:"",children:"Tell us a little more "}),(0,C.jsx)("textarea",{name:"TellAbout",id:"",cols:"10",rows:"3",value:l.about,onChange:function(A){S((0,g.Z)((0,g.Z)({},l),{},{about:A.target.value}))}})]}),(0,C.jsxs)("div",{className:"ContactUsFormSideContainerFormRadioButton",children:[(0,C.jsx)("p",{children:"You are a"}),(0,C.jsx)("input",{type:"radio",name:"type",id:"ngo",value:"NGO",onChange:function(A){S((0,g.Z)((0,g.Z)({},l),{},{type:A.target.value})),Q()}}),(0,C.jsx)("label",{htmlFor:"ngo",className:"button-1",children:"NGO"}),(0,C.jsx)("input",{type:"radio",name:"type",id:"donor",value:"Donor",onChange:function(A){S((0,g.Z)((0,g.Z)({},l),{},{type:A.target.value})),Q()}}),(0,C.jsx)("label",{htmlFor:"donor",className:"button-1",children:"Donor"})]}),(0,C.jsx)("div",{className:"ContactUsSUbmitButton",children:(0,C.jsx)("button",{onClick:D,className:"button-31",children:"Let's get started"})})]})})]})]}),(0,C.jsx)(d.Z,{})]})}},560:function(A,e,t){t.d(e,{Z:function(){return c}});t(2791);var n=t(184),c=function(){return(0,n.jsx)("div",{className:"FooterNgoCardMainSection",children:(0,n.jsx)("div",{className:"FooterAddNgoSection container",children:(0,n.jsx)("div",{className:" FooterAddNgoSectioncontainer",children:(0,n.jsxs)("div",{className:"AddNgoContent",children:[(0,n.jsx)("h1",{children:" Join Our action"}),(0,n.jsx)("h1",{children:"Everyone can help"}),(0,n.jsxs)("div",{className:"AddNgoButton",children:[(0,n.jsx)("button",{class:"button-18",children:"Add ngo"}),(0,n.jsx)("button",{class:"button-18",children:"Donate Now"})]})]})})})})}},1413:function(A,e,t){t.d(e,{Z:function(){return a}});var n=t(4942);function c(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,n.Z)(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}}}]);
//# sourceMappingURL=830.3540ffa0.chunk.js.map