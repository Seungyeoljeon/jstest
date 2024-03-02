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
})({"gettype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getType;
function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
},{}],"getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandom;
function getRandom() {
  return Math.floor(Math.random() * 10);
}
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _gettype = _interopRequireDefault(require("./gettype"));
var _getRandom = _interopRequireDefault(require("./getRandom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// 덧셈
console.log(1 + 2); // 3

// 뺄셈     
console.log(1 - 2); // -1

// 곱셈
console.log(1 * 2); // 2

// 나눗셈
console.log(1 / 2); // 0.5

// 나머지
console.log(1 % 2); // 1

// 거듭제곱
console.log(Math.pow(2, 3)); // 8   

// 단항 산술 연산자
var x = 1;

//비교 연산자

// 동등 비교
console.log(1 == 1); // true

// 일치 비교
console.log(1 === '1'); // false

// 대소 비교

console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 1); // true
console.log(1 <= 1); // true

// 논리 연산자

// NOT
console.log(!true); // false
console.log(!false); // true

// AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 삼항 연산자

// 세 개의 피연산자를 이용해 조건에 따라 값을 결정할 수 있다.
// 조건 ? 조건이 참이면 값 1 실행 : 조건이 거짓이면 값 2 실행
var flag = true;
console.log(flag ? '참' : '거짓'); // 참

// 할당 연산자
var a, b, c;
a = 1;
console.log(a); // 1

a += 1;
console.log(a); // a = a + 1 => a = 2

a -= 1;
console.log(a); // a = a(2) - a(1) = 1

a *= 3;
console.log(a); // a = a(1) * a(3) = 3

a /= 3;
console.log(a); // a = a(3) / a(3) = 1

a %= 3;
console.log(a); // a = a(1) % a(3) = 1

a = Math.pow(a, 3);
console.log(a); // a = a(1) ** a(3) = 1

a = 2;
a = Math.pow(a, 3);
console.log(a); // 8

// 쉼표 연산자

a = 1, b = 2, c = 3;
console.log(a, b, c); // 1 2 3

// 비트 연산자

// NOT
console.log(~5); // -6

// AND
console.log(5 & 3); // 1

// OR
console.log(5 | 3); // 7

// XOR
console.log(5 ^ 3); // 6

// 왼쪽 시프트
console.log(5 << 1); // 10

// 오른쪽 시프트
console.log(5 >> 1); // 2

//if문
console.log((0, _getRandom.default)());
var number = (0, _getRandom.default)();
if (number === 0) {
  console.log('number is 0');
} else if (number === 2) {
  console.log('number is not 0');
} else {
  console.log('number is not 0 and 2');
}
//switch문
switch (number) {
  case 0:
    console.log('number is 0');
    break;
  case 2:
    console.log('number is not 0');
    break;
  default:
    console.log('number is not 0 and 2');
}
(0, _gettype.default)(1); // 'Number'
(0, _gettype.default)('test'); // 'String'
(0, _gettype.default)(true); // 'Boolean'
(0, _gettype.default)(null); // 'Null'
(0, _gettype.default)([]); // 'Array'
(0, _gettype.default)({}); // 'Object'
(0, _gettype.default)(new Map()); // 'Map'
(0, _gettype.default)(Symbol()); // 'Symbol'
(0, _gettype.default)(undefined); // 'Undefined'
(0, _gettype.default)(function () {}); // 'Function'

//for문 
// for (시작조건; 종료조건; 변화조건) {}
//i++는 i += 1과 같다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

//변수 유효범위
// var, let, const
// var: 함수 스코프
// let, const: 블록 스코프
// var는 함수 스코프를 가지므로 블록 스코프를 가지지 않는다.
// var는 함수 내에서 선언한 변수는 함수 내에서만 유효하다.

function scope() {
  if (true) {
    var a = 123;
    var _b = 123;
    var _c = 123;
  }
  console.log(a); // 123
  console.log(b); // ReferenceError: b is not defined
  console.log(c); // ReferenceError: c is not defined
}
scope();

//형 변환
// 문자형으로 변환
// Truthy한 값: true, {}, [], 1, 2, 'false', -12, '3.14', ...
// Falsy한 값: false, '', null, undefined, 0, -0, NaN

// String()
console.log(String(1)); // '1'
console.log(String(true)); // 'true'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'

console.log(1 .toString()); // '1'
console.log(true.toString()); // 'true'
console.log(1 == '1'); // true
console.log(1 === '1'); // false

//함수
// 함수 선언문

// function sum(x, y) {

//     return x + y;
// }

// 함수 표현식

// const sum = function (x, y) {

//     return x + y;
// }

// 화살표 함수
// 화살표 함수는 항상 익명 함수로 정의한다.
// 익명 함수는 이름이 없는 함수를 말한다.
// 화살표 함수는 항상 변수에 할당해서 사용한다.
// 화살표 함수는 함수 표현식을 간결하게 만들어준다.
// () => {} // 매개변수가 없을 때 vs function (일반 함수) {}
// x => {} // 매개변수가 하나일 때
// (x, y) => {} // 매개변수가 두개 이상일 때
// x => x * x // 중괄호 안에 return문만 있을 때
// (x, y) => x * y // 중괄호 안에 return문만 있을 때
// () => ({}) // 중괄호를 사용하여 객체를 반환할 때
// () => { return {} } // 중괄호를 사용하여 객체를 반환할 때
// 

// const sum = (x, y) => x + y;

// // 함수 호출

// console.log(sum(1, 2)); // 3

// 매개변수

function sum(x, y) {
  console.log(x); // 1
  console.log(y); // 2
}
sum(1, 2);

// 기본 매개변수

function sum() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  console.log(x); // 1
  console.log(y); // 2
}
sum();

// 나머지 매개변수

function sum() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  console.log(rest); // [1, 2, 3, 4, 5]
}
sum(1, 2, 3, 4, 5);

// hoisting
// 호이스팅은 변수, 함수의 선언을 끌어올리는 것을 말한다.
// 함수 이름을 통해 함수를 유추할 수 있어서,
// 호이스팅을 이용해서 함수 선언문을 하단에 작성해도 상관없다. 

// 변수 호이스팅
// var는 선언과 초기화가 동시에 이루어진다.
// let, const는 선언과 초기화가 분리되어 진행된다.
// var는 선언과 초기화가 동시에 이루어지기 때문에 호이스팅이 발생한다.
// let, const는 선언과 초기화가 분리되어 있기 때문에 호이스팅이 발생하지 않는다.

// console.log(a); // undefined
// var a = 1;

// console.log(b); // ReferenceError: b is not defined
// let b = 2;

// 함수 호이스팅
// 함수 선언문은 전체 코드가 실행되기 전에 로드된다.
// 함수 표현식은 변수에 할당되는 시점에 로드된다.

sum(2, 3); // 5, 호이스팅 발생

function sum(x, y) {
  return x + y;
}

// 함수 표현식

// sum(2, 3); // TypeError: sum is not a function

// const sum = function (x, y) {
//     return x + y;
// }

//클로저

// 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
// 클로저는 함수가 생성될 당시의 외부 변수를 기억한다.

function makeCounter() {
  var num = 0;
  return function () {
    return num++;
  };
}

// 즉시 실행 함수
// 함수를 선언과 동시에 실행한다.
// 함수를 한 번만 실행할 때 사용한다.
// 전역 스코프의 오염을 막기 위해 사용한다.
// 즉시 실행 함수 사이에 세미콜론으로 문장을 종료한다.
// IIFE (Immediately Invoked Function Expression)
// 익명 함수를 사용한다.

// const a = 7;
// function double() {
//     console.log(a * 2);
// }
// double();//세미콜론 필수
console.log(a);
(function () {
  console.log(a * 2);
})();
(function () {
  console.log(a * 2);
})();

// 같다

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout

setTimeout(function () {
  console.log('안녕하세요!');
}, 3000);
setTimeout(function () {
  console.log('안녕하세요!');
}, 3000);

// 1초(1000ms) 후에 실행
var timer = setTimeout(function () {
  console.log('Hi!');
}, 1000);

// 2초(2000ms) 후에 실행
var h1 = setTimeout(function () {
  console.log('Hello!');
}, 2000);

// 3초(3000ms) 후에 실행

var h2 = setTimeout(function () {
  console.log('Hello!');
}, 3000);

// 4초(4000ms) 후에 실행
var h3 = setTimeout(function () {
  console.log('Hello!');
}, 4000);

// setInterval
// 1초(1000ms) 간격으로 실행
var interval = setInterval(function () {
  console.log('안녕하세요!');
}, 1000);

//clearTimeout
clearTimeout(timer);
clearTimeout(h1);
clearTimeout(h2);
clearTimeout(h3);
var h1El = document.querySelector('h1');
h1El.addEventListener('click', function () {
  clearTimeout(timer);
});

//clearInterval
clearInterval(interval);

//콜백

// 콜백은 함수의 인수로 사용되는 함수이다.
// 함수 내부에서 어떤 시점에 호출되는 함수이다.
// 비동기 처리 방식으로 사용된다.
// 콜백 함수는 함수의 매개변수로 전달되어 어떤 이벤트가 발생한 후에 호출된다.

// function getData(callback) {

//     setTimeout(() => {
//         const data = {
//             name: 'John',
//             age: 22
//         };
//         callback(data);
//     }, 1000);
// }

function timeout(cb) {
  setTimeout(function () {
    console.log('1초 뒤 실행');
    cb();
  }, 1000);
}
timeout(function () {
  console.log('다음 작업');
});

//콜백 지옥
// 콜백 지옥은 들여쓰기가 깊어지는 현상을 말한다.
// 콜백 지옥을 해결하는 방법은 Promise, async/await이 있다.

// Promise
// 비동기 작업을 위해 사용하는 객체이다.
},{"./gettype":"gettype.js","./getRandom":"getRandom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50228" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map