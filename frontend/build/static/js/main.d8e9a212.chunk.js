(this["webpackJsonpthreejs-journey"]=this["webpackJsonpthreejs-journey"]||[]).push([[0],{23:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(13),n=(c(23),c(2)),a=c(8),i=c(3),r=c(9),o=c.n(r);var l=()=>{const e=new Date,t=e.getMonth(),c=e.getDate(),s=e.getFullYear(),n=e.getHours(),a=e.getMinutes(),i=e.getSeconds();return"".concat(t+1,"/").concat(c,"/").concat(s," ").concat(n,":").concat(a,":").concat(i)},d=c(1);var j=e=>{let{child:t}=e;const[c,s]=Object(n.useState)(""),[i,r]=Object(n.useState)("");Object(n.useEffect)((()=>{!1===t.checkedInOptions.checkedIn?s("checkedStatus_out"):!0===t.checkedInOptions.checkedIn&&s("checkedStatus_in")}),[]);return Object(d.jsxs)("section",{className:"child-progile-row-wrapper",children:["boy"===t.gender&&Object(d.jsx)("div",{className:"child-profile-row_gender-boy"}),"girl"===t.gender&&Object(d.jsx)("div",{className:"child-profile-row_gender-girl"}),Object(d.jsxs)("h4",{className:"child-profile-row_fullName std-text",children:[t.childFirstName," ",t.childLastName]}),"checkedStatus_in"===c&&Object(d.jsx)("div",{className:"child-profile-row_checkedStatusIn ".concat(c),children:Object(d.jsx)("span",{className:"checkedStatus_ball",onClick:()=>(async e=>{r(l()),s("checkedStatus_out");const t=await fetch("/checkout/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:!1})});console.log(t)})(t._id)})}),"checkedStatus_out"===c&&Object(d.jsx)("div",{className:"child-profile-row_checkedStatusOut ".concat(c),children:Object(d.jsx)("span",{className:"checkedStatus_ball",onClick:()=>(async e=>{s("checkedStatus_in"),r(l());const t=await fetch("/checkin/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:!0})});console.log(t)})(t._id)})}),"checkedStatus_in"===c&&Object(d.jsxs)("p",{className:"child-profile-row_status",children:["Checked-in at: ",t.checkedInOptions.checkedInTime," ",i]}),"checkedStatus_out"===c&&Object(d.jsxs)("p",{className:"child-profile-row_status",children:["Checked-out at: ",t.checkedInOptions.checkedOutTime,i]}),Object(d.jsxs)("p",{className:"guardian-name",children:["Guardian Name: ",t.guardianName]}),Object(d.jsxs)("p",{className:"guardian-phone-number",children:["Guardian Phone #: ",t.gueardianPhoneNumber]}),Object(d.jsx)(a.b,{to:{pathname:"/child",search:"?childId=".concat(t.childId)},className:"link-to-child ",children:"See all info"})]})};var h=()=>{const[e,t]=Object(n.useState)([]);Object(n.useEffect)((()=>{(async()=>{const e=await fetch("/all-children"),c=await e.json();t(c),console.log(c)})()}),[]);const[c,s]=Object(n.useState)(o.a.get("logedin")),a=Object(n.useRef)(),i=Object(n.useRef)();return Object(d.jsxs)(n.Fragment,{children:[!c&&Object(d.jsx)("div",{className:"login-screen",children:Object(d.jsxs)("section",{children:[Object(d.jsx)("label",{className:"std-title",children:"Username"}),Object(d.jsx)("p",{className:"std-input",contentEditable:!0,ref:a}),Object(d.jsx)("label",{className:"std-title",children:"Password"}),Object(d.jsx)("p",{className:"std-input",contentEditable:!0,ref:i}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"pink-button",onClick:()=>{a.current&&i.current&&("KidzQuest"===a.current.innerHTML&&"K1dzQu35t!"===i.current.innerHTML?s(o.a.set("logedin",!0,{expires:.2})):alert("Incorrect credentails.Try Again!"))},children:"Enter \ud83d\udeaa \ud83d\udeb6\u200d\u2642\ufe0f"})})]})}),Object(d.jsxs)("div",{className:"admin-page-main-rapper",children:[Object(d.jsx)("h1",{}),e.map((e=>Object(d.jsx)(j,{child:e},e._id))),Object(d.jsx)("div",{className:"std-spacer"})]})]})},u=c.p+"static/media/boy_icon.bdccab95.png",b=c.p+"static/media/girl-icon.e7daf692.png";var m=e=>{let{showQRcode:t,handleCloseForm:c}=e;const s=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),l=Object(n.useRef)(),j=Object(n.useRef)(),[h,m]=Object(n.useState)({boy:"",girl:""}),[p,g]=Object(n.useState)(""),[x,O]=Object(n.useState)(""),[v,f]=Object(n.useState)(""),[N,y]=Object(n.useState)("");return Object(d.jsxs)("div",{className:"register-form",children:[Object(d.jsx)("h2",{className:"std-title",children:"Child's Gender"}),Object(d.jsxs)("section",{className:"register-form_boys-girls-wrapper",children:[Object(d.jsx)("div",{htmlFor:"form_boy",className:"label-boy ".concat(h.boy),onClick:()=>{m({boy:"selected-gender",girl:""}),g("boy")},children:Object(d.jsx)("img",{src:u,alt:"avatar of a boy",className:"form_boy"})}),Object(d.jsx)("div",{htmlFor:"form_girl",className:"label-girl ".concat(h.girl),onClick:()=>{m({boy:"",girl:"selected-gender"}),g("girl")},children:Object(d.jsx)("img",{src:b,alt:"avatar of a girl",className:"form_girl"})})]}),Object(d.jsxs)("section",{className:"register-form_input-wrapper",children:[Object(d.jsx)("label",{children:"Child's First Name"}),Object(d.jsx)("p",{contentEditable:!0,id:"childs-name",ref:s,className:"std-input"}),Object(d.jsx)("label",{children:"Child's Last Name"}),Object(d.jsx)("p",{contentEditable:!0,id:"childs-name",ref:a,className:"std-input"}),Object(d.jsx)("label",{children:"Child's Age"}),Object(d.jsx)("p",{contentEditable:!0,id:"childs-age",ref:i,className:"std-input"}),Object(d.jsx)("label",{children:"Guardian's Name"}),Object(d.jsx)("p",{contentEditable:!0,id:"parents-name",ref:r,className:"std-input"}),Object(d.jsx)("label",{children:"Guardian's Phone #"}),Object(d.jsx)("p",{contentEditable:!0,id:"parents-phone",ref:o,className:"std-input"}),Object(d.jsx)("label",{children:"Submit Photo"}),Object(d.jsx)("label",{htmlFor:"photo",id:"photo-label"}),Object(d.jsx)("input",{type:"file",id:"photo",accept:"image/*",onChange:async e=>{const t=URL.createObjectURL(e.target.files[0]),c=new FileReader;c.readAsDataURL(e.target.files[0]),c.onloadend=()=>{y(c.result)},f(Object(d.jsx)("div",{className:"phot-preview-wrapper ",children:Object(d.jsx)("img",{src:t,alt:"child photo",className:"photo-preview",onLoad:e=>{const t=400/e.target.width;j.current.width=400,j.current.height=e.target.height*t;const c=j.current.getContext("2d");c.drawImage(e.target,0,0,j.current.width,j.current.height);const s=c.canvas.toDataURL(e.target,"image/jpg"),n=.75*N.length/1024,a=.75*s.length/1024;O(s),console.log("original= ".concat(n," vs compressed").concat(a))}})}))},ref:l}),v,Object(d.jsx)("canvas",{ref:j,className:"photo-canvas-place-holder"})]}),Object(d.jsx)("button",{className:"pink-button",onClick:async()=>{if(!0===(""===s.current.innerHTML||" "===s.current.innerHTML?(alert("First Name is required"),!1):""===a.current.innerHTML||" "===a.current.innerHTML?(alert("Last Name is required"),!1):""===i.current.innerHTML||" "===i.current.innerHTML?(alert("Age is required"),!1):""===r.current.innerHTML||" "===r.current.innerHTML?(alert("Guardian Name is required"),!1):""===o.current.innerHTML||" "===o.current.innerHTML?(alert("Phone Number is required"),!1):l.current.value?""!==p||(alert("Gender is required"),!1):(alert("Photo is required"),!1))){const e=s.current.innerHTML.slice(0,2),c=a.current.innerHTML.slice(0,2),n=Math.floor(100*Math.random()),l="".concat(e).concat(c).concat(n),d={childFirstName:s.current.innerHTML,childLastName:a.current.innerHTML,childAge:i.current.innerHTML,guardianName:r.current.innerHTML,guardianPhoneNumber:o.current.innerHTML,gender:p,childId:l,photo:x},j=await fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});console.log(j),200===j.status?t(l):alert("sorry, something went wrong, please try again!")}},children:"Go! \ud83c\udfc3\u200d\u2642\ufe0f"}),Object(d.jsx)("button",{className:"white-button",onClick:c,children:"Close"})]})},p=c(14),g=c.n(p),x=c.p+"static/media/Q1_0001.2fc80cf7.png";const O=new g.a({width:300,height:300,image:x,imageOptions:{crossOrigin:"anonymous",margin:20}});var v=e=>{let{childId:t,handleCloseForm:c}=e;const s=(new Date).getDay(),[a]=Object(n.useState)("http:192.168.1.16:3000/child?childId=".concat(t)),[i]=Object(n.useState)(3===s?"#38a3a5":4===s?"#be0aff":5===s?"#ff0000":""),r=Object(n.useRef)(null);Object(n.useEffect)((()=>{O.append(r.current)}),[]),Object(n.useEffect)((()=>{O.update({data:a,dotsOptions:{color:i,type:"rounded"}})}),[a]);const o=()=>{O.download({extension:"png"})};return Object(d.jsxs)(n.Fragment,{children:[3===s&&Object(d.jsx)("div",{className:"QR-code-wrapper",children:Object(d.jsxs)("div",{className:"subwrapper",children:[Object(d.jsx)("h1",{className:"std-title",children:"Your Child Has Been Successfully Registered! \ud83d\ude00"}),Object(d.jsx)("p",{className:"std-text-info",children:"Please download or take a screenshot of the QR Code below and present it at the entrance. "}),Object(d.jsx)("div",{ref:r,className:"canvas-wrapper"}),Object(d.jsx)("button",{onClick:o,className:"pink-button",children:"Download"}),Object(d.jsx)("button",{className:"white-button",onClick:c,children:"Close"})]})}),3!==s&&Object(d.jsx)("div",{className:"QR-code-wrapper",children:Object(d.jsxs)("div",{className:"subwrapper",children:[Object(d.jsx)("h1",{className:"std-title",children:"Your Child is ready to be checked in "}),Object(d.jsx)("p",{className:"std-text-info",children:"Please download or take a screenshot of the QR Code below and present it at the entrance. "}),Object(d.jsx)("div",{ref:r,className:"canvas-wrapper"}),Object(d.jsx)("button",{onClick:o,className:"pink-button",children:"Download"}),Object(d.jsx)("button",{className:"white-button",onClick:c,children:"Close"})]})})]})},f=c.p+"static/media/hand.b0ebb495.png";var N=e=>{let{showQRcode:t,showRegistrationForm:c}=e;const s=Object(n.useRef)(),[a,i]=Object(n.useState)({children:[],message:""});return Object(d.jsx)("div",{className:"register-form",children:Object(d.jsxs)("section",{className:"register-form_subwrapper",children:[Object(d.jsx)("h2",{className:"std-title",children:"Enter Your Child's First Name"}),Object(d.jsx)("p",{className:"std-text-info",children:Object(d.jsx)("i",{children:"(If already registered)"})}),Object(d.jsx)("p",{contentEditable:!0,id:"childs-name",ref:s,className:"std-input register-form_std-input"}),Object(d.jsx)("button",{className:"pink-button re-register-buttons",onClick:async()=>{i({message:"Looking...\ud83d\udd0e"});try{if(""!==s.current.innerHTML||" "!==s.current.innerHTML){const e=s.current.innerHTML.toLowerCase().replace("&nbsp;",""),t=await fetch("/child/".concat(e)),c=await t.json();console.log(e),0===c.length?i({message:"No children found with that name, please check your spelling"}):i({children:c})}}catch(e){console.log(e)}},children:"Find My Child"}),a.message&&Object(d.jsx)("p",{className:"std-text-info",children:a.message}),a.children&&a.children.map((e=>Object(d.jsxs)("section",{className:"find-child-wrapper",children:[Object(d.jsxs)("p",{className:"std-title",children:["Name:"," ",Object(d.jsxs)("span",{className:"std-title",children:[e.childFirstName," ",e.childLastName]})]}),Object(d.jsxs)("p",{className:"std-title",children:["Age: ",Object(d.jsx)("span",{className:"std-title",children:e.childAge})]}),Object(d.jsx)("button",{className:"purple-button re-register-buttons",onClick:()=>(async e=>{delete e.date,delete e.checkedIn,delete e._id;try{200===(await fetch("/re-registration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).status?t(e.childId):alert("Something went wrong. Please try again!")}catch(c){console.log(c)}})(e),children:"This is my child"})]},e.id))),Object(d.jsx)("h3",{className:"std-title",children:"OR"}),Object(d.jsx)("button",{className:"white-button re-register-buttons",onClick:c,children:"Register My Child"})]})})};var y=()=>{const[e,t]=Object(n.useState)(!1),c=e=>{t(Object(d.jsx)(v,{childId:e,handleCloseForm:()=>t(!1)}))};return Object(d.jsxs)(n.Fragment,{children:[e,Object(d.jsxs)("div",{className:"register-child-wrapper",children:[Object(d.jsx)("img",{src:f,alt:"3 D hand clicking a button",className:"threeDhand"}),Object(d.jsx)("span",{className:"button",onClick:()=>{const e=(new Date).getDay();t(3===e?Object(d.jsx)(m,{showQRcode:c,handleCloseForm:()=>t(!1)}):Object(d.jsx)(N,{showQRcode:c,showRegistrationForm:()=>t(Object(d.jsx)(m,{showQRcode:c,handleCloseForm:()=>t(!1)}))}))}})]})]})};var w=()=>Object(d.jsxs)("div",{className:"kidz-quest-wrapper",children:[Object(d.jsxs)("section",{className:"kidz-quest-wrapper_secrtion-white",children:[Object(d.jsx)("div",{className:"kidz-quest-wrapper_E"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_x"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_p"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_e"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_r"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_i"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_e"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_n"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_c"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_e"})]}),Object(d.jsxs)("section",{className:"kidz-quest-wrapper_secrtion-orange",children:[Object(d.jsx)("div",{className:"kidz-quest-wrapper_k"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_i"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_d"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_z"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_space"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_q"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_u"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_e"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_s"}),Object(d.jsx)("div",{className:"kidz-quest-wrapper_t"})]})]});var k=()=>Object(d.jsx)("p",{className:"move-me-around",children:Object(d.jsx)("i",{children:"Move me around, I am fun \ud83d\udc47"})}),_=c(30),z=c(4),S=c(0),P=c(28),C=c(29);class T extends S.ShaderMaterial{constructor(){super({uniforms:{uTime:{value:0},uColorStart:{value:new S.Color("hotpink")},uColorEnd:{value:new S.Color("white")}},vertexShader:"\n      varying vec2 vUv;\n      void main() {\n        vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n        vec4 viewPosition = viewMatrix * modelPosition;\n        vec4 projectionPosition = projectionMatrix * viewPosition;\n        gl_Position = projectionPosition;\n        vUv = uv;\n      }\n      ",fragmentShader:'\n      //\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_3116809891(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_3116809891(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_3116809891(vec4 x)\n{\n  return mod289_3116809891(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_3116809891(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade_3116809891(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise3(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289_3116809891(Pi0);\n  Pi1 = mod289_3116809891(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute_3116809891(permute_3116809891(ix) + iy);\n  vec4 ixy0 = permute_3116809891(ixy + iz0);\n  vec4 ixy1 = permute_3116809891(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt_3116809891(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt_3116809891(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade_3116809891(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n      uniform float uTime;\n      uniform vec3 uColorStart;\n      uniform vec3 uColorEnd;\n      varying vec2 vUv;\n      void main() {\n        vec2 displacedUv = vUv + cnoise3(vec3(vUv * 7.0, uTime * 0.1));\n        float strength = cnoise3(vec3(displacedUv * 5.0, uTime * 0.2));\n        float outerGlow = distance(vUv, vec2(0.5)) * 4.0 - 1.4;\n        strength += outerGlow;\n        strength += step(-0.2, strength) * 0.8;\n        strength = clamp(strength, 0.0, 1.0);\n        vec3 color = mix(uColorStart, uColorEnd, strength);\n        gl_FragColor = vec4(color, 1.0);\n      }\n      '})}get time(){return this.uniforms.uTime.value}set time(e){this.uniforms.uTime.value=e}get colorStart(){return this.uniforms.uColorStart.value}get colorEnd(){return this.uniforms.uColorEnd.value}}function M(e){const t=Object(n.useRef)(),c=Object(P.a)("/baked-02.jpeg"),{nodes:s}=Object(C.a)("/portal-2.glb");return Object(z.c)(((e,c)=>t.current.time+=c)),Object(d.jsxs)("group",{...e,dispose:null,children:[Object(d.jsx)("mesh",{geometry:s.portalCircle.geometry,position:[0,.78,1.6],rotation:[-Math.PI/2,0,0],children:Object(d.jsx)("portalMaterial",{ref:t,blending:S.AdditiveBlending,colorStart:"pink",colorEnd:"white"})}),Object(d.jsx)("mesh",{geometry:s.lampLightL.geometry,"material-color":"#f0bf94",position:[.89,1.07,-.14],scale:[.07,.11,.07]}),Object(d.jsx)("mesh",{geometry:s.lampLightR.geometry,"material-color":"#f0bf94",position:[-.98,1.07,-.14],scale:[-.07,.11,.07]}),Object(d.jsx)("mesh",{geometry:s.baked.geometry,position:[.9,.34,-1.47],rotation:[0,.14,0],children:Object(d.jsx)("meshBasicMaterial",{map:c,"map-flipY":!1})})]})}Object(z.b)({PortalMaterial:T}),C.a.preload("/portal-2.glb");class L extends S.ShaderMaterial{constructor(){super({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:150}},vertexShader:"\n      uniform float uPixelRatio;\n      uniform float uSize;\n      uniform float uTime;\n      attribute float aScale;    \n      void main() {\n        vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n        modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n        modelPosition.z += cos(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n        modelPosition.x += cos(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n        vec4 viewPosition = viewMatrix * modelPosition;\n        vec4 projectionPostion = projectionMatrix * viewPosition;    \n        gl_Position = projectionPostion;\n        gl_PointSize = uSize * aScale * uPixelRatio;\n        gl_PointSize *= (1.0 / - viewPosition.z);\n      }",fragmentShader:"\n      void main() {\n        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n        float strength = 0.05 / distanceToCenter - 0.1;\n        gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n      }"})}get time(){return this.uniforms.uTime.value}set time(e){this.uniforms.uTime.value=e}}function I(e){let{count:t=40}=e;const c=Object(n.useRef)(),[s,a]=Object(n.useMemo)((()=>{const e=new Float32Array(3*t),c=new Float32Array(t);for(let s=0;s<t;s++)new S.Vector3(4*(Math.random()-.5),1.5*Math.random(),4*(Math.random()-.5)).toArray(e,3*s),c[s]=Math.random();return[e,c]}),[t]);return Object(z.c)(((e,t)=>c.current.time+=t/2)),Object(d.jsxs)("points",{children:[Object(d.jsxs)("bufferGeometry",{children:[Object(d.jsx)("bufferAttribute",{attachObject:["attributes","position"],count:t,array:s,itemSize:3}),Object(d.jsx)("bufferAttribute",{attachObject:["attributes","aScale"],count:t,array:a,itemSize:1})]}),Object(d.jsx)("fireflyMaterial",{ref:c,transparent:!0,depthWrite:!1})]},t)}function R(){return Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)("span",{children:"loading..."}),children:Object(d.jsxs)(z.a,{dpr:[1,2],camera:{fov:45,position:[-4,2,-4]},className:"canvas",children:[Object(d.jsx)("color",{attach:"background",args:["#1e2243"]}),Object(d.jsx)(I,{count:50}),Object(d.jsx)(M,{}),Object(d.jsx)(_.a,{})]})})}Object(z.b)({FireflyMaterial:L});var q=()=>Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{}),Object(d.jsx)(R,{}),Object(d.jsx)(k,{}),Object(d.jsx)(y,{}),Object(d.jsx)("div",{className:"footer"})]});var F=()=>{const[e,t]=Object(n.useState)(""),[c,s]=Object(n.useState)(""),[a,r]=Object(n.useState)([]),j=Object(i.e)().search.split("=")[1];console.log(j);Object(n.useEffect)((()=>{(async()=>{const e=await fetch("/getchild/".concat(j)),c=await e.json();r(c),!1===c.checkedInOptions.checkedIn?t("checkedStatus_out"):!0===c.checkedInOptions.checkedIn&&t("checkedStatus_in")})()}),[]);const[h]=Object(n.useState)(o.a.get("logedin"));return Object(d.jsxs)("div",{className:"child-main-wrapper",children:[Object(d.jsx)("div",{className:"child_photo_wrapper",children:Object(d.jsx)("div",{className:"child_photo",style:{backgroundImage:"url(".concat(a.photo,")")}})}),Object(d.jsx)("h1",{className:"std-title",children:"First Name:"}),Object(d.jsx)("h2",{className:"std-title-white",children:a.childFirstName}),Object(d.jsx)("h1",{className:"std-title",children:"Last Name:"}),Object(d.jsx)("h2",{className:"std-title-white",children:a.childLastName}),Object(d.jsx)("h2",{className:"std-title",children:"Age:"}),Object(d.jsx)("h2",{className:"std-title-white",children:a.childAge}),h&&Object(d.jsxs)("section",{className:"child-progile-row-wrapper",children:["checkedStatus_in"===e&&Object(d.jsx)("div",{className:"child-profile-row_checkedStatusIn ".concat(e),children:Object(d.jsx)("span",{className:"checkedStatus_ball",onClick:()=>(async e=>{s(l()),t("checkedStatus_out");const c=await fetch("/checkout/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:!1})});console.log(c)})(a._id)})}),"checkedStatus_out"===e&&Object(d.jsx)("div",{className:"child-profile-row_checkedStatusOut ".concat(e),children:Object(d.jsx)("span",{className:"checkedStatus_ball",onClick:()=>(async e=>{t("checkedStatus_in"),s(l());const c=await fetch("/checkin/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:!0})});console.log(c)})(a._id)})}),"checkedStatus_in"===e&&Object(d.jsxs)("p",{className:"child-profile-row_status",children:["Checked-in at: ",a.checkedInOptions.checkedInTime," ",c]}),"checkedStatus_out"===e&&Object(d.jsxs)("p",{className:"child-profile-row_status",children:["Checked-out at: ",a.checkedInOptions.checkedOutTime,c]})]}),"checkedStatus_in"===e&&Object(d.jsx)("div",{className:"child-row_status_in",children:Object(d.jsx)("p",{children:"Currently checked-in"})}),"checkedStatus_out"===e&&Object(d.jsx)("div",{className:"child-row_status_out",children:Object(d.jsxs)("p",{children:["Has been checked out since ",a.checkedInOptions.checkedOutTime," "]})})]})};var H=()=>Object(d.jsx)(a.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(q,{})}),Object(d.jsx)(i.a,{path:"/admin",element:Object(d.jsx)(h,{})}),Object(d.jsx)(i.a,{path:"/child",element:Object(d.jsx)(F,{})})]})});Object(s.render)(Object(d.jsx)(H,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d8e9a212.chunk.js.map