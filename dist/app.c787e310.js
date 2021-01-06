parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"h2f8":[function(require,module,exports) {

},{}],"xERC":[function(require,module,exports) {
module.exports="/book1.7616d85d.jpg";
},{}],"D7Te":[function(require,module,exports) {
module.exports="/book10.db096959.jpg";
},{}],"QZ4o":[function(require,module,exports) {
module.exports="/book11.7278b36f.jpg";
},{}],"Nmia":[function(require,module,exports) {
module.exports="/book12.31b1c35d.jpg";
},{}],"Okz3":[function(require,module,exports) {
module.exports="/book13.f50daea0.jpg";
},{}],"jjky":[function(require,module,exports) {
module.exports="/book14.c590fe0a.jpg";
},{}],"tRz8":[function(require,module,exports) {
module.exports="/book15.04d030f5.jpg";
},{}],"XIiS":[function(require,module,exports) {
module.exports="/book16.bc031d29.jpg";
},{}],"FbVY":[function(require,module,exports) {
module.exports="/book17.ee34790b.jpg";
},{}],"OxZn":[function(require,module,exports) {
module.exports="/book18.51727cd7.jpg";
},{}],"E4sg":[function(require,module,exports) {
module.exports="/book2.05023d92.jpg";
},{}],"QyQY":[function(require,module,exports) {
module.exports="/book3.2ab3d032.jpg";
},{}],"EQhp":[function(require,module,exports) {
module.exports="/book4.b5774895.jpg";
},{}],"r5zf":[function(require,module,exports) {
module.exports="/book5.00e202a9.jpg";
},{}],"wmWh":[function(require,module,exports) {
module.exports="/book6.893975bb.jpg";
},{}],"M4nq":[function(require,module,exports) {
module.exports="/book7.08620707.jpg";
},{}],"mAbI":[function(require,module,exports) {
module.exports="/book8.3e9c6dde.jpg";
},{}],"UGCQ":[function(require,module,exports) {
module.exports="/book9.f8380608.jpg";
},{}],"VGzE":[function(require,module,exports) {
module.exports="/photo1.dc785f25.jpg";
},{}],"bujC":[function(require,module,exports) {
module.exports="/photo2.8b9f1012.jpg";
},{}],"fgj5":[function(require,module,exports) {
module.exports="/photo3.05143633.jpg";
},{}],"f2eV":[function(require,module,exports) {
module.exports={book1:require("./book1.jpg"),book10:require("./book10.jpg"),book11:require("./book11.jpg"),book12:require("./book12.jpg"),book13:require("./book13.jpg"),book14:require("./book14.jpg"),book15:require("./book15.jpg"),book16:require("./book16.jpg"),book17:require("./book17.jpg"),book18:require("./book18.jpg"),book2:require("./book2.jpg"),book3:require("./book3.jpg"),book4:require("./book4.jpg"),book5:require("./book5.jpg"),book6:require("./book6.jpg"),book7:require("./book7.jpg"),book8:require("./book8.jpg"),book9:require("./book9.jpg"),photo1:require("./photo1.jpg"),photo2:require("./photo2.jpg"),photo3:require("./photo3.jpg")};
},{"./book1.jpg":"xERC","./book10.jpg":"D7Te","./book11.jpg":"QZ4o","./book12.jpg":"Nmia","./book13.jpg":"Okz3","./book14.jpg":"jjky","./book15.jpg":"tRz8","./book16.jpg":"XIiS","./book17.jpg":"FbVY","./book18.jpg":"OxZn","./book2.jpg":"E4sg","./book3.jpg":"QyQY","./book4.jpg":"EQhp","./book5.jpg":"r5zf","./book6.jpg":"wmWh","./book7.jpg":"M4nq","./book8.jpg":"mAbI","./book9.jpg":"UGCQ","./photo1.jpg":"VGzE","./photo2.jpg":"bujC","./photo3.jpg":"fgj5"}],"ffN9":[function(require,module,exports) {
"use strict";var n=t(require("fs")),e=t(require("./assets/*.jpg"));function t(n){return n&&n.__esModule?n:{default:n}}var i='[\n    {\n        "id": 1,\n        "title": "A Textbook of quantum mechanics",\n        "author": "Piravonu Mathews Mathews",\n        "price": 32.45,\n        "img": "book1.jpg"\n    },\n    {\n        "id": 2,\n        "title": "Concepts of modern art",\n        "author": "Tony Richardson",\n        "price": 45.15,\n        "img": "book2.jpg"\n    },\n    { \n        "id": 3,\n        "title": "Misery",\n        "author": "Stephen King",\n        "price": 14.53,\n        "img": "book3.jpg"\n    },\n    {\n        "id": 4,\n        "title": "A dictionary of ballet terms",\n        "author": "Leo Kersley",\n        "price": 61.21,\n        "img": "book4.jpg"\n    },\n    {\n        "id": 5,\n        "title": "Sula",\n        "author": "Toni Morrison",\n        "price": 42.10,\n        "img": "book5.jpg"\n    },\n    {\n        "id": 6,\n        "title": "Freakonomics",\n        "author": "Stephen J. Dubner",\n        "price": 33.15,\n        "img": "book6.jpg"\n    },\n    {\n        "id": 7,\n        "title": "Double Take",\n        "author": "Catherine Coulter",\n        "price": 19.65,\n        "img": "book7.jpg"\n    },\n    {\n        "id": 8,\n        "title": "Dark Justice",\n        "author": "Jack Higgins",\n        "price": 12.95,\n        "img": "book8.jpg"\n    },\n    {\n        "id": 9,\n        "title": "Principles of instrumental analysis",\n        "author": "Donald M. West",\n        "price": 31.25,\n        "img": "book9.jpg"\n    },\n    {\n        "id": 10,\n        "title": "Physical Chemistry",\n        "author": "P.W. Atkins",\n        "price": 11.22,\n        "img": "book10.jpg"\n    },\n    {\n        "id": 11,\n        "title": "His Dark Bond",\n        "author": "Anne Marsh",\n        "price": 14.82,\n        "img": "book11.jpg"\n    },\n    {\n        "id": 12,\n        "title": "Run To Me",\n        "author": "Christy Reece",\n        "price": 32.95,\n        "img": "book12.jpg"\n    },\n    {\n        "id": 13,\n        "title": "Fahrenheit 451",\n        "author": "Ray Bradbury",\n        "price": 42.12,\n        "img": "book13.jpg"\n    },\n    {\n        "id": 14,\n        "title": "The Invisible Man",\n        "author": "H.G. Wells",\n        "price": 31.15,\n        "img": "book14.jpg"\n    },\n    {\n        "id": 15,\n        "title": "Brave New World",\n        "author": "Aldous Huxley",\n        "price": 11.32,\n        "img": "book15.jpg"\n    },\n    {\n        "id": 16,\n        "title": "The Age of Innocence",\n        "author": "Edith Wharton",\n        "price": 10.32,\n        "img": "book16.jpg"\n    },\n    {\n        "id": 17,\n        "title": "Anna Karenin",\n        "author": "Leo Tolstoy",\n        "price": 17.32,\n        "img": "book17.jpg"\n    },\n    {\n        "id": 18,\n        "title": "Far From the Madding Crowd",\n        "author": "Thomas Hardy",\n        "price": 21.05,\n        "img": "book18.jpg"\n    }\n]',o=JSON.parse(i),a=function(){var n=[];do{var e=Math.floor(Math.random()*o.length);-1==n.indexOf(o[e])&&n.push(o[e])}while(n.length<4);return n},r=function(){var n=document.getElementById("showcase-books");a().map(function(t){var i=document.createElement("div");i.className="showcase-card";var o=document.createElement("img");o.className="showcase-card-image",o.src=e.default[t.img.replace(".jpg","")],o.alt=t.title;var a=document.createElement("div");a.className="showcase-card-content";var r=document.createElement("h2");r.className="showcase-card-content-title",r.innerHTML=t.title;var c=document.createElement("p");c.className="showcase-card-content-author",c.innerHTML="by ".concat(t.author);var l=document.createElement("i");l.className="fas fa-bookmark";var s=document.createElement("p");s.className="showcase-card-content-price",s.innerHTML="$".concat(t.price),a.append(r,c,l,s),i.append(o,a),n.appendChild(i)})},c=function(){var n=document.querySelectorAll(".nav-menu-wrapper-list-item"),e=document.getElementById("menu");n.forEach(function(n){n.addEventListener("click",function(n){"A"==n.target.nodeName&&(e.checked=!1)})})},l=function(){r(),c()};l();
},{"fs":"h2f8","./assets/*.jpg":"f2eV"}]},{},["ffN9"], null)
//# sourceMappingURL=/app.c787e310.js.map