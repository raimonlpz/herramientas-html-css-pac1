// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../../../../../usr/local/share/.config/yarn/global/node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../src/assets/book1.jpg":[function(require,module,exports) {
module.exports = "/book1.8d58dcff.jpg";
},{}],"../src/assets/book10.jpg":[function(require,module,exports) {
module.exports = "/book10.7690584c.jpg";
},{}],"../src/assets/book11.jpg":[function(require,module,exports) {
module.exports = "/book11.6e48c5af.jpg";
},{}],"../src/assets/book12.jpg":[function(require,module,exports) {
module.exports = "/book12.77505457.jpg";
},{}],"../src/assets/book13.jpg":[function(require,module,exports) {
module.exports = "/book13.6272ad95.jpg";
},{}],"../src/assets/book14.jpg":[function(require,module,exports) {
module.exports = "/book14.9dcccda8.jpg";
},{}],"../src/assets/book16.jpg":[function(require,module,exports) {
module.exports = "/book16.84bd2d83.jpg";
},{}],"../src/assets/book15.jpg":[function(require,module,exports) {
module.exports = "/book15.e263c177.jpg";
},{}],"../src/assets/book18.jpg":[function(require,module,exports) {
module.exports = "/book18.964d3eba.jpg";
},{}],"../src/assets/book2.jpg":[function(require,module,exports) {
module.exports = "/book2.c466cb16.jpg";
},{}],"../src/assets/book3.jpg":[function(require,module,exports) {
module.exports = "/book3.b8ce4807.jpg";
},{}],"../src/assets/book4.jpg":[function(require,module,exports) {
module.exports = "/book4.c28ce4b6.jpg";
},{}],"../src/assets/book5.jpg":[function(require,module,exports) {
module.exports = "/book5.fdd062b4.jpg";
},{}],"../src/assets/book6.jpg":[function(require,module,exports) {
module.exports = "/book6.d6ff65ca.jpg";
},{}],"../src/assets/book7.jpg":[function(require,module,exports) {
module.exports = "/book7.20cbee44.jpg";
},{}],"../src/assets/book8.jpg":[function(require,module,exports) {
module.exports = "/book8.95e6c570.jpg";
},{}],"../src/assets/book9.jpg":[function(require,module,exports) {
module.exports = "/book9.e1817c81.jpg";
},{}],"../src/assets/photo1.jpg":[function(require,module,exports) {
module.exports = "/photo1.27166372.jpg";
},{}],"../src/assets/photo2.jpg":[function(require,module,exports) {
module.exports = "/photo2.a06f7ce6.jpg";
},{}],"../src/assets/photo3.jpg":[function(require,module,exports) {
module.exports = "/photo3.fb565b33.jpg";
},{}],"../src/assets/book17.jpg":[function(require,module,exports) {
module.exports = "/book17.f0949d94.jpg";
},{}],"../src/assets/*.jpg":[function(require,module,exports) {
module.exports = {
  "book1": require("./book1.jpg"),
  "book10": require("./book10.jpg"),
  "book11": require("./book11.jpg"),
  "book12": require("./book12.jpg"),
  "book13": require("./book13.jpg"),
  "book14": require("./book14.jpg"),
  "book16": require("./book16.jpg"),
  "book15": require("./book15.jpg"),
  "book18": require("./book18.jpg"),
  "book2": require("./book2.jpg"),
  "book3": require("./book3.jpg"),
  "book4": require("./book4.jpg"),
  "book5": require("./book5.jpg"),
  "book6": require("./book6.jpg"),
  "book7": require("./book7.jpg"),
  "book8": require("./book8.jpg"),
  "book9": require("./book9.jpg"),
  "photo1": require("./photo1.jpg"),
  "photo2": require("./photo2.jpg"),
  "photo3": require("./photo3.jpg"),
  "book17": require("./book17.jpg")
};
},{"./book1.jpg":"../src/assets/book1.jpg","./book10.jpg":"../src/assets/book10.jpg","./book11.jpg":"../src/assets/book11.jpg","./book12.jpg":"../src/assets/book12.jpg","./book13.jpg":"../src/assets/book13.jpg","./book14.jpg":"../src/assets/book14.jpg","./book16.jpg":"../src/assets/book16.jpg","./book15.jpg":"../src/assets/book15.jpg","./book18.jpg":"../src/assets/book18.jpg","./book2.jpg":"../src/assets/book2.jpg","./book3.jpg":"../src/assets/book3.jpg","./book4.jpg":"../src/assets/book4.jpg","./book5.jpg":"../src/assets/book5.jpg","./book6.jpg":"../src/assets/book6.jpg","./book7.jpg":"../src/assets/book7.jpg","./book8.jpg":"../src/assets/book8.jpg","./book9.jpg":"../src/assets/book9.jpg","./photo1.jpg":"../src/assets/photo1.jpg","./photo2.jpg":"../src/assets/photo2.jpg","./photo3.jpg":"../src/assets/photo3.jpg","./book17.jpg":"../src/assets/book17.jpg"}],"../src/app.js":[function(require,module,exports) {
"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _ = _interopRequireDefault(require("./assets/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Display random books in showcase section every time user reloads Home page.
var booksJson = "[\n    {\n        \"id\": 1,\n        \"title\": \"A Textbook of quantum mechanics\",\n        \"author\": \"Piravonu Mathews Mathews\",\n        \"price\": 32.45,\n        \"img\": \"book1.jpg\"\n    },\n    {\n        \"id\": 2,\n        \"title\": \"Concepts of modern art\",\n        \"author\": \"Tony Richardson\",\n        \"price\": 45.15,\n        \"img\": \"book2.jpg\"\n    },\n    { \n        \"id\": 3,\n        \"title\": \"Misery\",\n        \"author\": \"Stephen King\",\n        \"price\": 14.53,\n        \"img\": \"book3.jpg\"\n    },\n    {\n        \"id\": 4,\n        \"title\": \"A dictionary of ballet terms\",\n        \"author\": \"Leo Kersley\",\n        \"price\": 61.21,\n        \"img\": \"book4.jpg\"\n    },\n    {\n        \"id\": 5,\n        \"title\": \"Sula\",\n        \"author\": \"Toni Morrison\",\n        \"price\": 42.10,\n        \"img\": \"book5.jpg\"\n    },\n    {\n        \"id\": 6,\n        \"title\": \"Freakonomics\",\n        \"author\": \"Stephen J. Dubner\",\n        \"price\": 33.15,\n        \"img\": \"book6.jpg\"\n    },\n    {\n        \"id\": 7,\n        \"title\": \"Double Take\",\n        \"author\": \"Catherine Coulter\",\n        \"price\": 19.65,\n        \"img\": \"book7.jpg\"\n    },\n    {\n        \"id\": 8,\n        \"title\": \"Dark Justice\",\n        \"author\": \"Jack Higgins\",\n        \"price\": 12.95,\n        \"img\": \"book8.jpg\"\n    },\n    {\n        \"id\": 9,\n        \"title\": \"Principles of instrumental analysis\",\n        \"author\": \"Donald M. West\",\n        \"price\": 31.25,\n        \"img\": \"book9.jpg\"\n    },\n    {\n        \"id\": 10,\n        \"title\": \"Physical Chemistry\",\n        \"author\": \"P.W. Atkins\",\n        \"price\": 11.22,\n        \"img\": \"book10.jpg\"\n    },\n    {\n        \"id\": 11,\n        \"title\": \"His Dark Bond\",\n        \"author\": \"Anne Marsh\",\n        \"price\": 14.82,\n        \"img\": \"book11.jpg\"\n    },\n    {\n        \"id\": 12,\n        \"title\": \"Run To Me\",\n        \"author\": \"Christy Reece\",\n        \"price\": 32.95,\n        \"img\": \"book12.jpg\"\n    },\n    {\n        \"id\": 13,\n        \"title\": \"Fahrenheit 451\",\n        \"author\": \"Ray Bradbury\",\n        \"price\": 42.12,\n        \"img\": \"book13.jpg\"\n    },\n    {\n        \"id\": 14,\n        \"title\": \"The Invisible Man\",\n        \"author\": \"H.G. Wells\",\n        \"price\": 31.15,\n        \"img\": \"book14.jpg\"\n    },\n    {\n        \"id\": 15,\n        \"title\": \"Brave New World\",\n        \"author\": \"Aldous Huxley\",\n        \"price\": 11.32,\n        \"img\": \"book15.jpg\"\n    },\n    {\n        \"id\": 16,\n        \"title\": \"The Age of Innocence\",\n        \"author\": \"Edith Wharton\",\n        \"price\": 10.32,\n        \"img\": \"book16.jpg\"\n    },\n    {\n        \"id\": 17,\n        \"title\": \"Anna Karenin\",\n        \"author\": \"Leo Tolstoy\",\n        \"price\": 17.32,\n        \"img\": \"book17.jpg\"\n    },\n    {\n        \"id\": 18,\n        \"title\": \"Far From the Madding Crowd\",\n        \"author\": \"Thomas Hardy\",\n        \"price\": 21.05,\n        \"img\": \"book18.jpg\"\n    }\n]";
var booksParsed = JSON.parse(booksJson);

var getFourRandomBooks = function getFourRandomBooks() {
  var arrRand = [];

  do {
    var randNum = Math.floor(Math.random() * booksParsed.length);

    if (arrRand.indexOf(booksParsed[randNum]) == -1) {
      arrRand.push(booksParsed[randNum]);
    }
  } while (arrRand.length < 4);

  return arrRand;
};

var populateShowcase = function populateShowcase() {
  var $showcase = document.getElementById('showcase-books');
  var randBooks = getFourRandomBooks();
  randBooks.map(function (book) {
    var divWrapper = document.createElement('div');
    divWrapper.className = 'showcase-card';
    var bookImg = document.createElement('img');
    bookImg.className = 'showcase-card-image';
    bookImg.src = _.default[book.img.replace('.jpg', '')];
    bookImg.alt = book.title;
    var bookContent = document.createElement('div');
    bookContent.className = 'showcase-card-content';
    var title = document.createElement('h2');
    title.className = 'showcase-card-content-title';
    title.innerHTML = book.title;
    var author = document.createElement('p');
    author.className = 'showcase-card-content-author';
    author.innerHTML = "by ".concat(book.author);
    var icon = document.createElement('i');
    icon.className = 'fas fa-bookmark';
    var price = document.createElement('p');
    price.className = 'showcase-card-content-price';
    price.innerHTML = "$".concat(book.price);
    bookContent.append(title, author, icon, price);
    divWrapper.append(bookImg, bookContent);
    $showcase.appendChild(divWrapper);
  });
}; // UI improve: close nav menu when user clicks any page section


var closeNavMenu = function closeNavMenu() {
  var $navItems = document.querySelectorAll(".nav-menu-wrapper-list-item");
  var $checkBox = document.getElementById("menu");
  $navItems.forEach(function ($i) {
    $i.addEventListener('click', function (e) {
      if (e.target.nodeName == 'A') {
        $checkBox.checked = false;
      }
    });
  });
};

var init = function init() {
  populateShowcase();
  closeNavMenu();
};

init();
},{"fs":"../../../../../../../../../usr/local/share/.config/yarn/global/node_modules/parcel-bundler/src/builtins/_empty.js","./assets/*.jpg":"../src/assets/*.jpg"}],"../../../../../../../../../usr/local/share/.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57146" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../../usr/local/share/.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/app.js"], null)
//# sourceMappingURL=/app.581aa3f0.js.map