parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ALvb":[function(require,module,exports) {

},{"./..\\img\\bg-header--mobile.jpg":[["bg-header--mobile.6e73f1e6.jpg","FAiY"],"FAiY"],"./..\\img\\bg-header.jpg":[["bg-header.51e4b7d4.jpg","mhob"],"mhob"],"./..\\img\\Щебень.png":[["Щебень.f8b567f6.png","rBmV"],"rBmV"],"./..\\img\\Песок.png":[["Песок.57b07079.png","t3Ur"],"t3Ur"],"./..\\img\\Ковш.png":[["Ковш.79c4c2a0.png","td9p"],"td9p"],"./..\\img\\Камаз.png":[["Камаз.f554bd3a.png","HRMR"],"HRMR"],"./..\\img\\Скания.png":[["Скания.580bbb81.png","S3Rd"],"S3Rd"]}],"fx60":[function(require,module,exports) {

},{}],"d6sW":[function(require,module,exports) {
"use strict";require("../scss/_non-critical.scss"),require("../scss/main.scss");var e=window.navigator.userAgent,t=window.location.search,n=new URLSearchParams(t),c=n.get("utm_source"),o=n.get("utm_medium"),i=n.get("utm_campaign"),s=n.get("utm_content"),r=n.get("utm_term");function a(e,t){e.parentNode.insertBefore(t,e.nextSibling)}var d=document.getElementById("main-cta"),u=document.querySelectorAll(".btn-cta--order"),m=document.getElementById("module-form"),l=document.getElementById("user-name-module");function v(e){m.classList.contains("show")&&e.target.contains(m)&&e.target===m&&(m.classList.remove("show"),document.body.removeEventListener("click",v))}d.addEventListener("click",function(e){m.classList.add("show"),l.focus(),document.body.addEventListener("click",v),e.preventDefault()}),u.forEach(function(e){e.addEventListener("click",function(e){m.classList.add("show"),l.focus(),document.body.addEventListener("click",v),e.preventDefault()})});var g=document.getElementById("menu-toggle"),f=document.querySelectorAll(".nav-item__link");g.addEventListener("click",function(){f.forEach(function(e){e.addEventListener("click",function t(){g.checked=!1,e.removeEventListener("click",t)})})});
},{"../scss/_non-critical.scss":"ALvb","../scss/main.scss":"fx60"}]},{},["d6sW"], null)
//# sourceMappingURL=main.ab94ca95.js.map