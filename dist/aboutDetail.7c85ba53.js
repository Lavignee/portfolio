// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"3FsDI"}],"9nPFN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2b5774897c85ba53";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fIFZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_aboutDetailDefault.default
);
var _aboutDetail = require("./aboutDetail");
var _aboutDetailDefault = parcelHelpers.interopDefault(_aboutDetail);

},{"./aboutDetail":"3p5XY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3p5XY":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$90f0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$90f0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRedux = require("react-redux");
var _commonValue = require("../../Modules/commonValue");
var _swiper = require("swiper");
var _swiperReactJs = require("swiper/react/swiper-react.js");
var _gsap = require("gsap");
var _scrollTrigger = require("gsap/ScrollTrigger");
var _hashtagAboutJson = require("../../data/dataAbout/hashtagAbout.json");
var _hashtagAboutJsonDefault = parcelHelpers.interopDefault(_hashtagAboutJson);
var _introduceAboutJson = require("../../data/dataAbout/introduceAbout.json");
var _introduceAboutJsonDefault = parcelHelpers.interopDefault(_introduceAboutJson);
var _childJpg = require("../../static/images/child.jpg");
var _childJpgDefault = parcelHelpers.interopDefault(_childJpg);
var _shop1Jpg = require("../../static/images/shop1.jpg");
var _shop1JpgDefault = parcelHelpers.interopDefault(_shop1Jpg);
var _shop2Jpg = require("../../static/images/shop2.jpg");
var _shop2JpgDefault = parcelHelpers.interopDefault(_shop2Jpg);
var _shop3Jpg = require("../../static/images/shop3.jpg");
var _shop3JpgDefault = parcelHelpers.interopDefault(_shop3Jpg);
var _shop4Jpg = require("../../static/images/shop4.jpg");
var _shop4JpgDefault = parcelHelpers.interopDefault(_shop4Jpg);
var _current1Jpg = require("../../static/images/current1.jpg");
var _current1JpgDefault = parcelHelpers.interopDefault(_current1Jpg);
var _current2Jpg = require("../../static/images/current2.jpg");
var _current2JpgDefault = parcelHelpers.interopDefault(_current2Jpg);
var _current3Jpg = require("../../static/images/current3.jpg");
var _current3JpgDefault = parcelHelpers.interopDefault(_current3Jpg);
var _aboutDetailScss = require("./aboutDetail.scss");
var _swiperScss = require("swiper/swiper.scss");
var _navigationScss = require("swiper/modules/navigation/navigation.scss");
var _paginationScss = require("swiper/modules/pagination/pagination.scss");
var _effectFadeScss = require("swiper/modules/effect-fade/effect-fade.scss");
var _useWindowSize = require("../../utils/useWindowSize");
var _useWindowSizeDefault = parcelHelpers.interopDefault(_useWindowSize);
var _splitText = require("../../components/splitText");
var _splitTextDefault = parcelHelpers.interopDefault(_splitText);
var _tooltip = require("../../components/tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);
var _s = $RefreshSig$();
_gsap.gsap.registerPlugin(_scrollTrigger.ScrollTrigger);
// 반복적인 dom구조에서 다른 부분만 배열로 정의.
const textCondition = [
    {
        colInfo: 'col-12 col-xs-10 col-s-8 col-m-6 about-first',
        scroll: 'aboutFirst',
        index1: 'abl1',
        index2: 'abl2',
        align: 'left'
    },
    {
        colInfo: 'col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 about-second',
        scroll: 'aboutSecond',
        index1: 'abc1',
        index2: 'abc2',
        align: 'center'
    },
    {
        colInfo: 'col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 about-third',
        scroll: 'aboutThird',
        index1: 'abr1',
        index2: 'abr2',
        align: 'right'
    }, 
];
// 반복적인 dom구조에서 다른 부분만 배열로 정의.
const textCondition2 = [
    {
        colInfo: 'col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 about-third',
        align: 'left'
    },
    {
        colInfo: 'col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 about-second',
        align: 'center'
    },
    {
        colInfo: 'col-12 col-xs-10 col-s-8 col-m-6 about-first',
        align: 'right'
    }, 
];
// 너무 길어진 데이터 선택자 별도 정의.
const firstIntroContent = _introduceAboutJsonDefault.default.introduce.first;
const firstTooltipContent = _introduceAboutJsonDefault.default.tooltipInfo.first;
const secondIntroContent = _introduceAboutJsonDefault.default.introduce.second;
const secondTooltipContent = _introduceAboutJsonDefault.default.tooltipInfo.second;
const thirdIntroContent = _introduceAboutJsonDefault.default.introduce.third;
const thirdTooltipContent = _introduceAboutJsonDefault.default.tooltipInfo.third;
// 사용 될 이미지 배열로 정의.
const growBackgroundImage2 = [
    _shop1JpgDefault.default,
    _shop2JpgDefault.default,
    _shop3JpgDefault.default,
    _shop4JpgDefault.default
];
const growBackgroundImage3 = [
    _current1JpgDefault.default,
    _current2JpgDefault.default,
    _current3JpgDefault.default
];
const AboutDetail = ({ _onHover , _onLeave  })=>{
    _s();
    // redux dispatch 정의.
    const dispatch = _reactRedux.useDispatch();
    const onScrollAbout = _reactDefault.default.useCallback((value)=>dispatch(_commonValue.splitTextStart(value))
    , [
        dispatch
    ]);
    const makeScroll = _reactDefault.default.useCallback((value)=>dispatch(_commonValue.makeSmoothScroll(value))
    , [
        dispatch
    ]);
    const filmReady = _reactDefault.default.useCallback((value)=>dispatch(_commonValue.changeFilmState(value))
    , [
        dispatch
    ]);
    const gsapReady = _reactDefault.default.useCallback((value)=>dispatch(_commonValue.changeGsapState(value))
    , [
        dispatch
    ]);
    // redux useSelector 정의.
    const [currentGsapState, currentFilmState] = _reactRedux.useSelector((state)=>[
            state.CommonValue.currentGsapState,
            state.CommonValue.currentFilmState
        ]
    , _reactRedux.shallowEqual);
    // 윈도우 리사이즈 감지 및 해당 사이즈 반환 훅.
    const { width  } = _useWindowSizeDefault.default();
    // 이미지 슬라이드 템플릿.
    const growBackgroundImageSlider = (target1, kind)=>{
        return(/*#__PURE__*/ _reactDefault.default.createElement(_swiperReactJs.Swiper, {
            modules: [
                _swiper.Navigation,
                _swiper.Pagination,
                _swiper.EffectFade
            ],
            className: `${kind === 'shop' ? 'second-images' : 'third-images'}`,
            slidesPerView: 1,
            effect: 'fade',
            resizeObserver: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                clickable: false
            }
        }, target1.map((target, idx)=>/*#__PURE__*/ _reactDefault.default.createElement(_swiperReactJs.SwiperSlide, {
                key: idx
            }, /*#__PURE__*/ _reactDefault.default.createElement("img", {
                width: '70%',
                height: 'auto',
                src: target,
                alt: `${kind} ${idx + 1}`
            }))
        ), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'swiper-button-next',
            onMouseEnter: ()=>_onHover(' bl-cursor', 'next')
            ,
            onMouseLeave: ()=>_onLeave()
        }), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'swiper-button-prev',
            onMouseEnter: ()=>_onHover(' bl-cursor', 'prev')
            ,
            onMouseLeave: ()=>_onLeave()
        })));
    };
    // 스크롤 트리거 설정.
    const aboutDetailGsap = ()=>{
        _gsap.gsap.fromTo('.back-keyword', {
            yPercent: -100
        }, {
            yPercent: 0,
            scrollTrigger: {
                trigger: '.first-content-area',
                start: 'center center',
                end: 'bottom center',
                scrub: 0.5
            }
        });
        _gsap.gsap.fromTo('.back-keyword-second', {
            yPercent: -100
        }, {
            yPercent: 0,
            scrollTrigger: {
                trigger: '.first-content-area',
                start: 'top+=1480 center',
                end: 'bottom+=1880 center',
                scrub: 0.5
            }
        });
        _gsap.gsap.fromTo('.first-content-area', {
            opacity: 1
        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.first-content-area',
                start: 'top+=1080 center',
                end: 'top+=1480 center',
                scrub: true
            }
        });
        _gsap.gsap.fromTo('.second-content-area', {
            opacity: 0
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: '.first-content-area',
                start: 'top+=1480 center',
                end: 'top+=1880 center',
                scrub: true
            }
        });
        _gsap.gsap.to('.about-keywords', {
            scrollTrigger: {
                trigger: '.about-keywords',
                pin: true,
                start: 'top top',
                end: 'bottom+=800 top'
            }
        });
        _gsap.gsap.fromTo('.fill-black', {
            maxWidth: "0%"
        }, {
            maxWidth: "100%",
            scrollTrigger: {
                trigger: '.background-title-frame',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        });
        _gsap.gsap.fromTo('.film-frame', {
            opacity: 0
        }, {
            opacity: 0.8,
            scrollTrigger: {
                trigger: '.background-title-frame',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        });
        _scrollTrigger.ScrollTrigger.matchMedia({
            '(min-width: 769px)': ()=>{
                _gsap.gsap.to('.photo-area', {
                    scrollTrigger: {
                        trigger: '.photo-area',
                        pin: true,
                        start: 'top top+=72',
                        end: 'bottom+=100% top'
                    }
                });
                _gsap.gsap.to('.first-image', {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: '.first-image-trigger',
                        start: 'bottom+=72 center',
                        end: 'bottom+=72 center',
                        scrub: true
                    }
                });
                _gsap.gsap.to('.second-images', {
                    scrollTrigger: {
                        trigger: '.second-image-trigger',
                        start: 'top+=72 center',
                        toggleClass: {
                            targets: '.second-images',
                            className: 'view'
                        },
                        end: 'bottom+=72 center',
                        scrub: true
                    }
                });
                _gsap.gsap.to('.third-images', {
                    scrollTrigger: {
                        trigger: '.third-image-trigger',
                        start: 'top+=72 center',
                        toggleClass: {
                            targets: '.third-images',
                            className: 'view'
                        },
                        end: 'bottom+=72 center',
                        scrub: true
                    }
                });
            }
        });
    };
    // 툴팁 템플릿.
    const TooltipContent = (targetInfo)=>{
        let result = targetInfo.map((item, idx)=>{
            return(/*#__PURE__*/ _reactDefault.default.createElement(_tooltipDefault.default, {
                key: item.text + idx,
                _onHover: _onHover,
                _onLeave: _onLeave,
                info: item.info
            }, item.text));
        });
        return result;
    };
    // json string 데이터와 툴팁 템플릿 결합하여 컨텐츠 생성.
    const introduceContent = (target, element)=>{
        let combineContent = target.split('$$');
        let i = 0;
        combineContent.forEach((item, idx)=>{
            if (idx % 2 !== 0) {
                combineContent.splice(idx, 1, element[i]);
                i++;
            }
        });
        return combineContent;
    };
    // 화면 진입 후 DOM 랜더 시,
    _reactDefault.default.useEffect(()=>{
        // 스크롤 트리거 연결 해제.
        gsapReady(false);
        // 해당 페이지에서만 사용될 별도 필름 추가 랜더.
        filmReady(true);
        // 현재 컨텐츠를 기준으로 스크롤 재생성.
        makeScroll(true);
        // 화면 벗어날 시 스크롤 트리거, 커서, 추가 필름, splitText 초기화.
        return ()=>{
            let triggers = _scrollTrigger.ScrollTrigger.getAll();
            triggers.forEach((trigger)=>{
                trigger.kill();
            });
            _onLeave();
            filmReady(false);
        };
    }, [
        filmReady,
        gsapReady,
        makeScroll,
        _onLeave
    ]);
    // gsap 및 추가 Film이 준비되면 스크롤트리거 생성 및 splitText 동작.
    _reactDefault.default.useEffect(()=>{
        let firstTimer;
        let secondTimer;
        let thirdTimer;
        if (currentGsapState && currentFilmState) {
            aboutDetailGsap();
            firstTimer = setTimeout(()=>{
                onScrollAbout('aboutFirst');
                clearTimeout(firstTimer);
            }, 100);
            secondTimer = setTimeout(()=>{
                onScrollAbout('aboutSecond');
                clearTimeout(secondTimer);
            }, 700);
            thirdTimer = setTimeout(()=>{
                onScrollAbout('aboutThird');
                clearTimeout(thirdTimer);
            }, 1400);
        }
        return ()=>{
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            onScrollAbout('');
        };
    }, [
        currentFilmState,
        currentGsapState,
        onScrollAbout
    ]);
    // splitText에 시간 차 동작 설정.
    _reactDefault.default.useEffect(()=>{
    }, [
        onScrollAbout
    ]);
    // 반복되는 Text 정의.
    const subTitleText = 'GROWTH\r\rBACKGROUND';
    return(/*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'about-detail'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'container'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'about-keywords'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'first-content-area'
    }, textCondition.map((textCondition1, idx)=>/*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'row keyword-frame',
            key: idx
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: textCondition1.colInfo
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'position-frame'
        }, /*#__PURE__*/ _reactDefault.default.createElement("h2", {
            className: 'about-tag'
        }, /*#__PURE__*/ _reactDefault.default.createElement(_splitTextDefault.default, {
            animation: 'up',
            scroll: textCondition1.scroll,
            setTime: 100,
            index: textCondition1.index1
        }, _hashtagAboutJsonDefault.default.hashtagFirst[idx].title)), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'type-p'
        }, /*#__PURE__*/ _reactDefault.default.createElement(_splitTextDefault.default, {
            animation: 'up',
            scroll: textCondition1.scroll,
            setTime: 15,
            index: textCondition1.index2
        }, _hashtagAboutJsonDefault.default.hashtagFirst[idx].text)))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: `back-keyword ${textCondition1.align}`
        }, /*#__PURE__*/ _reactDefault.default.createElement("span", null, _hashtagAboutJsonDefault.default.hashtagFirst[idx].back)))
    )), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'second-content-area'
    }, textCondition2.map((textCondition21, idx)=>/*#__PURE__*/ _reactDefault.default.createElement("div", {
            key: idx,
            className: 'row keyword-frame'
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: textCondition21.colInfo
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'position-frame'
        }, /*#__PURE__*/ _reactDefault.default.createElement("h2", {
            className: 'about-tag'
        }, _hashtagAboutJsonDefault.default.hashtagSecond[idx].title), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'type-p'
        }, _hashtagAboutJsonDefault.default.hashtagSecond[idx].text))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: `back-keyword-second ${textCondition21.align}`
        }, /*#__PURE__*/ _reactDefault.default.createElement("span", null, _hashtagAboutJsonDefault.default.hashtagSecond[idx].back)))
    )))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'container fluid about-background'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'container relative pl-pr-none'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'background-title-frame'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'col-12 col-m-7 off-m-5'
    }, /*#__PURE__*/ _reactDefault.default.createElement("h2", null, subTitleText), /*#__PURE__*/ _reactDefault.default.createElement("h2", {
        className: 'fill-black'
    }, subTitleText))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'photo-area d-m-block d-xs-none'
    }, /*#__PURE__*/ _reactDefault.default.createElement("img", {
        width: '70%',
        height: 'auto',
        className: 'first-image',
        src: _childJpgDefault.default,
        alt: 'childhood'
    }), /*#__PURE__*/ _reactDefault.default.createElement("div", null, growBackgroundImageSlider(growBackgroundImage2, 'shop'), growBackgroundImageSlider(growBackgroundImage3, 'current'))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'col-12 col-m-7 off-m-5'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'background-story-frame first-image-trigger'
    }, width < 768 && /*#__PURE__*/ _reactDefault.default.createElement("img", {
        width: '50%',
        height: 'auto',
        className: 'first-image',
        src: _childJpgDefault.default,
        alt: 'childhood'
    }), /*#__PURE__*/ _reactDefault.default.createElement("h3", null, "\uD559\uC0DD\uC2DC\uC808"), /*#__PURE__*/ _reactDefault.default.createElement("p", null, introduceContent(firstIntroContent, TooltipContent(firstTooltipContent)))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'background-story-frame second-image-trigger'
    }, width < 768 && growBackgroundImageSlider(growBackgroundImage2, 'shop'), /*#__PURE__*/ _reactDefault.default.createElement("h3", null, "\uC804\uC5ED \uD6C4"), /*#__PURE__*/ _reactDefault.default.createElement("p", null, introduceContent(secondIntroContent, TooltipContent(secondTooltipContent)))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'background-story-frame third-image-trigger'
    }, width < 768 && growBackgroundImageSlider(growBackgroundImage3, 'current'), /*#__PURE__*/ _reactDefault.default.createElement("h3", null, "\uC6F9 \uAC1C\uBC1C\uC790 ~ \uD604\uC7AC"), /*#__PURE__*/ _reactDefault.default.createElement("p", null, introduceContent(thirdIntroContent, TooltipContent(thirdTooltipContent)))))))));
};
_s(AboutDetail, "QzLk5QI5ahc29iIDbRKt5+1djsk=", false, function() {
    return [
        _reactRedux.useDispatch,
        _reactRedux.useSelector,
        _useWindowSizeDefault.default
    ];
});
_c = AboutDetail;
exports.default = /*#__PURE__*/ _c1 = _reactDefault.default.memo(AboutDetail);
var _c, _c1;
$RefreshReg$(_c, "AboutDetail");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$90f0.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-redux":"bdVon","../../Modules/commonValue":"lRfSx","swiper":"cCbRx","swiper/react/swiper-react.js":"273KY","gsap":"fPSuC","gsap/ScrollTrigger":"7wnFk","../../data/dataAbout/hashtagAbout.json":"6NZBR","../../data/dataAbout/introduceAbout.json":"euGrn","../../static/images/child.jpg":"cxrL0","../../static/images/shop1.jpg":"4IqcJ","../../static/images/shop2.jpg":"7Nz71","../../static/images/shop3.jpg":"3AmWH","../../static/images/shop4.jpg":"haW9J","../../static/images/current1.jpg":"lz6Zb","../../static/images/current2.jpg":"5FmOj","../../static/images/current3.jpg":"ekyt3","./aboutDetail.scss":"aWf3O","swiper/swiper.scss":"iXKG4","swiper/modules/navigation/navigation.scss":"bghXC","swiper/modules/pagination/pagination.scss":"awB7C","swiper/modules/effect-fade/effect-fade.scss":"9FhdL","../../utils/useWindowSize":"8ocw7","../../components/splitText":"1kFNc","../../components/tooltip":"8jxEu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"cCbRx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */ parcelHelpers.export(exports, "Swiper", ()=>_coreJsDefault.default
);
parcelHelpers.export(exports, "default", ()=>_coreJsDefault.default
);
parcelHelpers.export(exports, "Virtual", ()=>_virtualJsDefault.default
);
parcelHelpers.export(exports, "Keyboard", ()=>_keyboardJsDefault.default
);
parcelHelpers.export(exports, "Mousewheel", ()=>_mousewheelJsDefault.default
);
parcelHelpers.export(exports, "Navigation", ()=>_navigationJsDefault.default
);
parcelHelpers.export(exports, "Pagination", ()=>_paginationJsDefault.default
);
parcelHelpers.export(exports, "Scrollbar", ()=>_scrollbarJsDefault.default
);
parcelHelpers.export(exports, "Parallax", ()=>_parallaxJsDefault.default
);
parcelHelpers.export(exports, "Zoom", ()=>_zoomJsDefault.default
);
parcelHelpers.export(exports, "Lazy", ()=>_lazyJsDefault.default
);
parcelHelpers.export(exports, "Controller", ()=>_controllerJsDefault.default
);
parcelHelpers.export(exports, "A11y", ()=>_a11YJsDefault.default
);
parcelHelpers.export(exports, "History", ()=>_historyJsDefault.default
);
parcelHelpers.export(exports, "HashNavigation", ()=>_hashNavigationJsDefault.default
);
parcelHelpers.export(exports, "Autoplay", ()=>_autoplayJsDefault.default
);
parcelHelpers.export(exports, "Thumbs", ()=>_thumbsJsDefault.default
);
parcelHelpers.export(exports, "FreeMode", ()=>_freeModeJsDefault.default
);
parcelHelpers.export(exports, "Grid", ()=>_gridJsDefault.default
);
parcelHelpers.export(exports, "Manipulation", ()=>_manipulationJsDefault.default
);
parcelHelpers.export(exports, "EffectFade", ()=>_effectFadeJsDefault.default
);
parcelHelpers.export(exports, "EffectCube", ()=>_effectCubeJsDefault.default
);
parcelHelpers.export(exports, "EffectFlip", ()=>_effectFlipJsDefault.default
);
parcelHelpers.export(exports, "EffectCoverflow", ()=>_effectCoverflowJsDefault.default
);
parcelHelpers.export(exports, "EffectCreative", ()=>_effectCreativeJsDefault.default
);
parcelHelpers.export(exports, "EffectCards", ()=>_effectCardsJsDefault.default
);
var _coreJs = require("./core/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _virtualJs = require("./modules/virtual/virtual.js");
var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
var _keyboardJs = require("./modules/keyboard/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
var _navigationJs = require("./modules/navigation/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _paginationJs = require("./modules/pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
var _parallaxJs = require("./modules/parallax/parallax.js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
var _zoomJs = require("./modules/zoom/zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _lazyJs = require("./modules/lazy/lazy.js");
var _lazyJsDefault = parcelHelpers.interopDefault(_lazyJs);
var _controllerJs = require("./modules/controller/controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _a11YJs = require("./modules/a11y/a11y.js");
var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
var _historyJs = require("./modules/history/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
var _autoplayJs = require("./modules/autoplay/autoplay.js");
var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
var _thumbsJs = require("./modules/thumbs/thumbs.js");
var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
var _freeModeJs = require("./modules/free-mode/free-mode.js");
var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
var _gridJs = require("./modules/grid/grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _manipulationJs = require("./modules/manipulation/manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);

},{"./core/core.js":"jvZQa","./modules/virtual/virtual.js":"13JV9","./modules/keyboard/keyboard.js":"82wTs","./modules/mousewheel/mousewheel.js":"dP6Ui","./modules/navigation/navigation.js":"lGdRo","./modules/pagination/pagination.js":"40Lys","./modules/scrollbar/scrollbar.js":"bfOsF","./modules/parallax/parallax.js":"aEM3Y","./modules/zoom/zoom.js":"5YHxH","./modules/lazy/lazy.js":"kPhLF","./modules/controller/controller.js":"hcdrq","./modules/a11y/a11y.js":"lDTl7","./modules/history/history.js":"7pifE","./modules/hash-navigation/hash-navigation.js":"6TTnC","./modules/autoplay/autoplay.js":"1YoHq","./modules/thumbs/thumbs.js":"e0dJV","./modules/free-mode/free-mode.js":"4NFQW","./modules/grid/grid.js":"gE5KG","./modules/manipulation/manipulation.js":"ga5Sr","./modules/effect-fade/effect-fade.js":"fBGpM","./modules/effect-cube/effect-cube.js":"hV6iY","./modules/effect-flip/effect-flip.js":"dI6Dz","./modules/effect-coverflow/effect-coverflow.js":"9UFNU","./modules/effect-creative/effect-creative.js":"6uSvC","./modules/effect-cards/effect-cards.js":"9saRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvZQa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-param-reassign: "off" */ var _ssrWindow = require("ssr-window");
var _domJs = require("../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../shared/utils.js");
var _getSupportJs = require("../shared/get-support.js");
var _getDeviceJs = require("../shared/get-device.js");
var _getBrowserJs = require("../shared/get-browser.js");
var _resizeJs = require("./modules/resize/resize.js");
var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
var _observerJs = require("./modules/observer/observer.js");
var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
var _eventsEmitterJs = require("./events-emitter.js");
var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
var _indexJs = require("./update/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./translate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./transition/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./slide/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./loop/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./grab-cursor/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./events/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./breakpoints/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./classes/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./images/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./check-overflow/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _moduleExtendParamsJs = require("./moduleExtendParams.js");
var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
const prototypes = {
    eventsEmitter: _eventsEmitterJsDefault.default,
    update: _indexJsDefault.default,
    translate: _indexJsDefault1.default,
    transition: _indexJsDefault2.default,
    slide: _indexJsDefault3.default,
    loop: _indexJsDefault4.default,
    grabCursor: _indexJsDefault5.default,
    events: _indexJsDefault6.default,
    breakpoints: _indexJsDefault7.default,
    checkOverflow: _indexJsDefault10.default,
    classes: _indexJsDefault8.default,
    images: _indexJsDefault9.default
};
const extendedDefaults = {
};
class Swiper {
    constructor(...args){
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else [el, params] = args;
        if (!params) params = {
        };
        params = _utilsJs.extend({
        }, params);
        if (el && !params.el) params.el = el;
        if (params.el && _domJsDefault.default(params.el).length > 1) {
            const swipers = [];
            _domJsDefault.default(params.el).each((containerEl)=>{
                const newParams = _utilsJs.extend({
                }, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = _getSupportJs.getSupport();
        swiper.device = _getDeviceJs.getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = _getBrowserJs.getBrowser();
        swiper.eventsListeners = {
        };
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {
        };
        swiper.modules.forEach((mod)=>{
            mod({
                swiper,
                extendParams: _moduleExtendParamsJsDefault.default(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = _utilsJs.extend({
        }, _defaultsJsDefault.default, allModulesParams); // Extend defaults with passed params
        swiper.params = _utilsJs.extend({
        }, swiperParams, extendedDefaults, params);
        swiper.originalParams = _utilsJs.extend({
        }, swiper.params);
        swiper.passedParams = _utilsJs.extend({
        }, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = _domJsDefault.default; // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: _domJsDefault.default(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel'
                ];
                const desktop = [
                    'pointerdown',
                    'pointermove',
                    'pointerup'
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: _utilsJs.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        return swiper;
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit('enable');
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view = 'current', exact = false) {
        const swiper = this;
        const { params , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i1 = activeIndex - 1; i1 >= 0; i1 -= 1)if (slides[i1] && !breakLoop) {
                slideSize += slides[i1].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i2 = activeIndex - 1; i2 >= 0; i2 -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid , params  } = swiper; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl)=>{
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    }
    mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = _domJsDefault.default(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = _domJsDefault.default(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options)
                ;
                return res;
            }
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            const document = _ssrWindow.getDocument();
            const wrapper = document.createElement('div');
            $wrapperEl = _domJsDefault.default(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params , $el , $wrapperEl , slides  } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
        swiper.emit('beforeDestroy'); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
        swiper.emit('destroy'); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            _utilsJs.deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        _utilsJs.extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return _defaultsJsDefault.default;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m)
            );
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    _resizeJsDefault.default,
    _observerJsDefault.default
]);
exports.default = Swiper;

},{"ssr-window":"3lyfI","../shared/dom.js":"7pW5q","../shared/utils.js":"dbikn","../shared/get-support.js":"dU80s","../shared/get-device.js":"fHzNz","../shared/get-browser.js":"2AwWY","./modules/resize/resize.js":"awiu0","./modules/observer/observer.js":"Fvg8a","./events-emitter.js":"970nW","./update/index.js":"5pXU1","./translate/index.js":"82UFa","./transition/index.js":"8Knou","./slide/index.js":"5VZY1","./loop/index.js":"6S1wN","./grab-cursor/index.js":"6y5ez","./events/index.js":"jPWSg","./breakpoints/index.js":"6sZHb","./classes/index.js":"dJ7YF","./images/index.js":"4xpbQ","./check-overflow/index.js":"cCZBR","./defaults.js":"jwKb5","./moduleExtendParams.js":"2G6E7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lyfI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "getDocument", ()=>getDocument
);
parcelHelpers.export(exports, "getWindow", ()=>getWindow
);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument
);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow
);
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ function isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target = {
}, src = {
}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    activeElement: {
        blur () {
        },
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {
            }
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {
            },
            setAttribute () {
            },
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {
        };
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {
    };
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {
        },
        pushState () {
        },
        go () {
        },
        back () {
        }
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {
    },
    Date () {
    },
    screen: {
    },
    setTimeout () {
    },
    clearTimeout () {
    },
    matchMedia () {
        return {
        };
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {
    };
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pW5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom7 = require("dom7");
const Methods = {
    addClass: _dom7.addClass,
    removeClass: _dom7.removeClass,
    hasClass: _dom7.hasClass,
    toggleClass: _dom7.toggleClass,
    attr: _dom7.attr,
    removeAttr: _dom7.removeAttr,
    transform: _dom7.transform,
    transition: _dom7.transition,
    on: _dom7.on,
    off: _dom7.off,
    trigger: _dom7.trigger,
    transitionEnd: _dom7.transitionEnd,
    outerWidth: _dom7.outerWidth,
    outerHeight: _dom7.outerHeight,
    styles: _dom7.styles,
    offset: _dom7.offset,
    css: _dom7.css,
    each: _dom7.each,
    html: _dom7.html,
    text: _dom7.text,
    is: _dom7.is,
    index: _dom7.index,
    eq: _dom7.eq,
    append: _dom7.append,
    prepend: _dom7.prepend,
    next: _dom7.next,
    nextAll: _dom7.nextAll,
    prev: _dom7.prev,
    prevAll: _dom7.prevAll,
    parent: _dom7.parent,
    parents: _dom7.parents,
    closest: _dom7.closest,
    find: _dom7.find,
    children: _dom7.children,
    filter: _dom7.filter,
    remove: _dom7.remove
};
Object.keys(Methods).forEach((methodName)=>{
    Object.defineProperty(_dom7.$.fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
exports.default = _dom7.$;

},{"dom7":"fDQYr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDQYr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$
);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "addClass", ()=>addClass
);
parcelHelpers.export(exports, "animate", ()=>animate
);
parcelHelpers.export(exports, "animationEnd", ()=>animationEnd
);
parcelHelpers.export(exports, "append", ()=>append
);
parcelHelpers.export(exports, "appendTo", ()=>appendTo
);
parcelHelpers.export(exports, "attr", ()=>attr
);
parcelHelpers.export(exports, "blur", ()=>blur
);
parcelHelpers.export(exports, "change", ()=>change
);
parcelHelpers.export(exports, "children", ()=>children
);
parcelHelpers.export(exports, "click", ()=>click
);
parcelHelpers.export(exports, "closest", ()=>closest
);
parcelHelpers.export(exports, "css", ()=>css
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "dataset", ()=>dataset
);
parcelHelpers.export(exports, "detach", ()=>detach
);
parcelHelpers.export(exports, "each", ()=>each
);
parcelHelpers.export(exports, "empty", ()=>empty
);
parcelHelpers.export(exports, "eq", ()=>eq
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "focus", ()=>focus
);
parcelHelpers.export(exports, "focusin", ()=>focusin
);
parcelHelpers.export(exports, "focusout", ()=>focusout
);
parcelHelpers.export(exports, "hasClass", ()=>hasClass
);
parcelHelpers.export(exports, "height", ()=>height
);
parcelHelpers.export(exports, "hide", ()=>hide
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "index", ()=>index
);
parcelHelpers.export(exports, "insertAfter", ()=>insertAfter
);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore
);
parcelHelpers.export(exports, "is", ()=>is
);
parcelHelpers.export(exports, "keydown", ()=>keydown
);
parcelHelpers.export(exports, "keypress", ()=>keypress
);
parcelHelpers.export(exports, "keyup", ()=>keyup
);
parcelHelpers.export(exports, "mousedown", ()=>mousedown
);
parcelHelpers.export(exports, "mouseenter", ()=>mouseenter
);
parcelHelpers.export(exports, "mouseleave", ()=>mouseleave
);
parcelHelpers.export(exports, "mousemove", ()=>mousemove
);
parcelHelpers.export(exports, "mouseout", ()=>mouseout
);
parcelHelpers.export(exports, "mouseover", ()=>mouseover
);
parcelHelpers.export(exports, "mouseup", ()=>mouseup
);
parcelHelpers.export(exports, "next", ()=>next
);
parcelHelpers.export(exports, "nextAll", ()=>nextAll
);
parcelHelpers.export(exports, "off", ()=>off
);
parcelHelpers.export(exports, "offset", ()=>offset
);
parcelHelpers.export(exports, "on", ()=>on
);
parcelHelpers.export(exports, "once", ()=>once
);
parcelHelpers.export(exports, "outerHeight", ()=>outerHeight
);
parcelHelpers.export(exports, "outerWidth", ()=>outerWidth
);
parcelHelpers.export(exports, "parent", ()=>parent
);
parcelHelpers.export(exports, "parents", ()=>parents
);
parcelHelpers.export(exports, "prepend", ()=>prepend
);
parcelHelpers.export(exports, "prependTo", ()=>prependTo
);
parcelHelpers.export(exports, "prev", ()=>prev
);
parcelHelpers.export(exports, "prevAll", ()=>prevAll
);
parcelHelpers.export(exports, "prop", ()=>prop
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "removeAttr", ()=>removeAttr
);
parcelHelpers.export(exports, "removeClass", ()=>removeClass
);
parcelHelpers.export(exports, "removeData", ()=>removeData
);
parcelHelpers.export(exports, "resize", ()=>resize
);
parcelHelpers.export(exports, "scroll", ()=>scroll
);
parcelHelpers.export(exports, "scrollLeft", ()=>scrollLeft
);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo
);
parcelHelpers.export(exports, "scrollTop", ()=>scrollTop
);
parcelHelpers.export(exports, "show", ()=>show
);
parcelHelpers.export(exports, "siblings", ()=>siblings
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "styles", ()=>styles
);
parcelHelpers.export(exports, "submit", ()=>submit
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass
);
parcelHelpers.export(exports, "touchend", ()=>touchend
);
parcelHelpers.export(exports, "touchmove", ()=>touchmove
);
parcelHelpers.export(exports, "touchstart", ()=>touchstart
);
parcelHelpers.export(exports, "transform", ()=>transform
);
parcelHelpers.export(exports, "transition", ()=>transition
);
parcelHelpers.export(exports, "transitionEnd", ()=>transitionEnd
);
parcelHelpers.export(exports, "trigger", ()=>trigger
);
parcelHelpers.export(exports, "val", ()=>val
);
parcelHelpers.export(exports, "value", ()=>value
);
parcelHelpers.export(exports, "width", ()=>width
);
/**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */ var _ssrWindow = require("ssr-window");
/* eslint-disable no-proto */ function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
        get () {
            return proto;
        },
        set (value1) {
            proto.__proto__ = value1;
        }
    });
}
class Dom7 extends Array {
    constructor(items){
        if (typeof items === 'number') super(items);
        else {
            super(...items || []);
            makeReactive(this);
        }
    }
}
function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase()
    );
}
// eslint-disable-next-line
function qsa(selector, context) {
    if (typeof selector !== 'string') return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    const window = _ssrWindow.getWindow();
    const document = _ssrWindow.getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if (typeof selector === 'string') {
        const html1 = selector.trim();
        if (html1.indexOf('<') >= 0 && html1.indexOf('>') >= 0) {
            let toCreate = 'div';
            if (html1.indexOf('<li') === 0) toCreate = 'ul';
            if (html1.indexOf('<tr') === 0) toCreate = 'tbody';
            if (html1.indexOf('<td') === 0 || html1.indexOf('<th') === 0) toCreate = 'tr';
            if (html1.indexOf('<tbody') === 0) toCreate = 'table';
            if (html1.indexOf('<option') === 0) toCreate = 'select';
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html1;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
    }
    return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
// eslint-disable-next-line
function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    return arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)
        ).length > 0;
    }).length > 0;
}
function attr(attrs, value2) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value2);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr1) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr1);
    return this;
}
function prop(props, value3) {
    if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = value3;
            else // Object
            for(const propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function data(key, value4) {
    let el;
    if (typeof value4 === 'undefined') {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(let i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {
        };
        el.dom7ElementDataStorage[key] = value4;
    }
    return this;
}
function removeData(key) {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function dataset() {
    const el = this[0];
    if (!el) return undefined;
    const dataset1 = {
    }; // eslint-disable-line
    if (el.dataset) for(const dataKey in el.dataset)dataset1[dataKey] = el.dataset[dataKey];
    else for(let i = 0; i < el.attributes.length; i += 1){
        const attr2 = el.attributes[i];
        if (attr2.name.indexOf('data-') >= 0) dataset1[toCamelCase(attr2.name.split('data-')[1])] = attr2.value;
    }
    for(const key in dataset1){
        if (dataset1[key] === 'false') dataset1[key] = false;
        else if (dataset1[key] === 'true') dataset1[key] = true;
        else if (parseFloat(dataset1[key]) === dataset1[key] * 1) dataset1[key] *= 1;
    }
    return dataset1;
}
function val(value5) {
    if (typeof value5 === 'undefined') {
        // get value
        const el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
            const values = [];
            for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (Array.isArray(value5) && el.multiple && el.nodeName.toLowerCase() === 'select') for(let j = 0; j < el.options.length; j += 1)el.options[j].selected = value5.indexOf(el.options[j].value) >= 0;
        else el.value = value5;
    }
    return this;
}
function value(value6) {
    return this.val(value6);
}
function transform(transform1) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform1;
    return this;
}
function transition(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
    return this;
}
function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const parents1 = $(target).parents(); // eslint-disable-line
            for(let k = 0; k < parents1.length; k += 1)if ($(parents1[k]).is(targetSelector)) listener.apply(parents1[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {
            };
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {
            };
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(' ');
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function once(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventName, listener, capture] = args;
        targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
    const window = _ssrWindow.getWindow();
    const events = args[0].split(' ');
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0
                );
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
    }
    if (callback) dom.on('transitionend', fireCallBack);
    return this;
}
function animationEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('animationend', fireCallBack);
    }
    if (callback) dom.on('animationend', fireCallBack);
    return this;
}
function width() {
    const window = _ssrWindow.getWindow();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css('width'));
    return null;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles1 = this.styles();
            return this[0].offsetWidth + parseFloat(styles1.getPropertyValue('margin-right')) + parseFloat(styles1.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function height() {
    const window = _ssrWindow.getWindow();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css('height'));
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles2 = this.styles();
            return this[0].offsetHeight + parseFloat(styles2.getPropertyValue('margin-top')) + parseFloat(styles2.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        const window = _ssrWindow.getWindow();
        const document = _ssrWindow.getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop1 = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft1 = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop1 - clientTop,
            left: box.left + scrollLeft1 - clientLeft
        };
    }
    return null;
}
function hide() {
    for(let i = 0; i < this.length; i += 1)this[i].style.display = 'none';
    return this;
}
function show() {
    const window = _ssrWindow.getWindow();
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.style.display === 'none') el.style.display = '';
        if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') // Still not visible
        el.style.display = 'block';
    }
    return this;
}
function styles() {
    const window = _ssrWindow.getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {
    };
}
function css(props, value7) {
    const window = _ssrWindow.getWindow();
    let i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value7;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach((el, index1)=>{
        callback.apply(el, [
            el,
            index1
        ]);
    });
    return this;
}
function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
}
function html(html2) {
    if (typeof html2 === 'undefined') return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html2;
    return this;
}
function text(text1) {
    if (typeof text1 === 'undefined') return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = text1;
    return this;
}
function is(selector) {
    const window = _ssrWindow.getWindow();
    const document = _ssrWindow.getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index2) {
    if (typeof index2 === 'undefined') return this;
    const length = this.length;
    if (index2 > length - 1) return $([]);
    if (index2 < 0) {
        const returnIndex = length + index2;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index2]
    ]);
}
function append(...els) {
    let newChild;
    const document = _ssrWindow.getDocument();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function appendTo(parent1) {
    $(parent1).append(this);
    return this;
}
function prepend(newChild) {
    const document = _ssrWindow.getDocument();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function prependTo(parent2) {
    $(parent2).prepend(this);
    return this;
}
function insertBefore(selector) {
    const before = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function insertAfter(selector) {
    const after = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        const next1 = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next1).is(selector)) nextEls.push(next1);
        } else nextEls.push(next1);
        el = next1;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        const prev1 = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev1).is(selector)) prevEls.push(prev1);
        } else prevEls.push(prev1);
        el = prev1;
    }
    return $(prevEls);
}
function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
    const parents2 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents2.push(this[i].parentNode);
        } else parents2.push(this[i].parentNode);
    }
    return $(parents2);
}
function parents(selector) {
    const parents3 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let parent3 = this[i].parentNode; // eslint-disable-line
        while(parent3){
            if (selector) {
                if ($(parent3).is(selector)) parents3.push(parent3);
            } else parents3.push(parent3);
            parent3 = parent3.parentNode;
        }
    }
    return $(parents3);
}
function closest(selector) {
    let closest1 = this; // eslint-disable-line
    if (typeof selector === 'undefined') return $([]);
    if (!closest1.is(selector)) closest1 = closest1.parents(selector).eq(0);
    return closest1;
}
function find(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    const children1 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children1.push(childNodes[j]);
    }
    return $(children1);
}
function remove() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function detach() {
    return this.remove();
}
function add(...els) {
    const dom = this;
    let i;
    let j;
    for(i = 0; i < els.length; i += 1){
        const toAdd = $(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function empty() {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.nodeType === 1) {
            for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = '';
        }
    }
    return this;
}
// eslint-disable-next-line
function scrollTo(...args) {
    const window = _ssrWindow.getWindow();
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === 'undefined') easing = 'swing';
    return this.each(function animate() {
        const el = this;
        let currentTop;
        let currentLeft;
        let maxTop;
        let maxLeft;
        let newTop;
        let newLeft;
        let scrollTop2; // eslint-disable-line
        let scrollLeft2; // eslint-disable-line
        let animateTop = top > 0 || top === 0;
        let animateLeft = left > 0 || left === 0;
        if (typeof easing === 'undefined') easing = 'swing';
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        let startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time = new Date().getTime()) {
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            let done;
            if (animateTop) scrollTop2 = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) scrollLeft2 = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && scrollTop2 >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && scrollTop2 <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft2 >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft2 <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = scrollTop2;
            if (animateLeft) el.scrollLeft = scrollLeft2;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [top, duration, callback, easing] = args;
    const dom = this;
    if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [left, duration, callback, easing] = args;
    const dom = this;
    if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
// eslint-disable-next-line
function animate(initialProps, initialParams) {
    const window = _ssrWindow.getWindow();
    const els = this;
    const a = {
        props: Object.assign({
        }, initialProps),
        params: Object.assign({
            duration: 300,
            easing: 'swing' // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress (easing, progress) {
            if (easing === 'swing') return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === 'function') return easing(progress);
            return progress;
        },
        stop () {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done (complete) {
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                const que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate (props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            const elements = []; // Define & Cache Initials & Units
            a.elements.each((el, index)=>{
                let initialFullValue;
                let initialValue;
                let unit;
                let finalValue;
                let finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                elements[index] = {
                    container: el
                };
                Object.keys(props).forEach((prop1)=>{
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop1).replace(',', '.');
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, '');
                    finalValue = parseFloat(props[prop1]);
                    finalFullValue = props[prop1] + unit;
                    elements[index][prop1] = {
                        initialFullValue,
                        initialValue,
                        unit,
                        finalValue,
                        finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            let startTime = null;
            let time;
            let elementsDone = 0;
            let propsDone = 0;
            let done;
            let began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                let progress;
                let easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach((element)=>{
                    const el = element;
                    if (done || el.done) return;
                    Object.keys(props).forEach((prop)=>{
                        if (done || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        const { initialValue , finalValue , unit  } = el[prop];
                        el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        const currentValue = el[prop].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[prop] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done = true;
                        }
                        if (done) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[prop] = currentValue + unit;
                    });
                });
                if (done) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    let animateInstance;
    for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === 'stop') animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function stop() {
    const els = this;
    for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
const noTrigger = 'resize scroll'.split(' ');
function shortcut(name) {
    function eventHandler(...args) {
        if (typeof args[0] === 'undefined') {
            for(let i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $(this[i]).trigger(name);
            }
            return this;
        }
        return this.on(name, ...args);
    }
    return eventHandler;
}
const click = shortcut('click');
const blur = shortcut('blur');
const focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const scroll = shortcut('scroll');
exports.default = $;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbikn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateCSSModeScroll", ()=>animateCSSModeScroll
);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps
);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "now", ()=>now
);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle
);
parcelHelpers.export(exports, "setCSSProperty", ()=>setCSSProperty
);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        }
        try {
            delete object[key];
        } catch (e1) {
        }
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window = _ssrWindow.getWindow();
    let style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis = 'x') {
    const window = _ssrWindow.getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el, null);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')
        ).join(', ');
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0
            );
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {
                        };
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper , targetPosition , side  }) {
    const window = _ssrWindow.getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.scrollSnapType = '';
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dU80s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport
);
var _ssrWindow = require("ssr-window");
let support;
function calcSupport() {
    const window = _ssrWindow.getWindow();
    const document = _ssrWindow.getDocument();
    return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: (function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({
                }, 'passive', {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {
            }
            return supportsPassive;
        })(),
        gestures: (function checkGestures() {
            return 'ongesturestart' in window;
        })()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHzNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice
);
var _ssrWindow = require("ssr-window");
var _getSupportJs = require("./get-support.js");
let deviceCached;
function calcDevice({ userAgent  } = {
}) {
    const support = _getSupportJs.getSupport();
    const window = _ssrWindow.getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel'; // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    } // Export object
    return device;
}
function getDevice(overrides = {
}) {
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}

},{"ssr-window":"3lyfI","./get-support.js":"dU80s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AwWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser
);
var _ssrWindow = require("ssr-window");
let browser;
function calcBrowser() {
    const window = _ssrWindow.getWindow();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awiu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function Resize({ swiper , on , emit  }) {
    const window = _ssrWindow.getWindow();
    let observer = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            const { width , height  } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(({ contentBoxSize , contentRect , target  })=>{
                if (target && target !== swiper.el) return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) resizeHandler();
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on('init', ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', ()=>{
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
}
exports.default = Resize;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Fvg8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function Observer({ swiper , extendParams , on , emit  }) {
    const observers = [];
    const window = _ssrWindow.getWindow();
    const attach = (target, options = {
    })=>{
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
}
exports.default = Observer;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"970nW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on (events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5pXU1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSizeJs = require("./updateSize.js");
var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
var _updateSlidesJs = require("./updateSlides.js");
var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
var _updateAutoHeightJs = require("./updateAutoHeight.js");
var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
var _updateProgressJs = require("./updateProgress.js");
var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
var _updateActiveIndexJs = require("./updateActiveIndex.js");
var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
var _updateClickedSlideJs = require("./updateClickedSlide.js");
var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
exports.default = {
    updateSize: _updateSizeJsDefault.default,
    updateSlides: _updateSlidesJsDefault.default,
    updateAutoHeight: _updateAutoHeightJsDefault.default,
    updateSlidesOffset: _updateSlidesOffsetJsDefault.default,
    updateSlidesProgress: _updateSlidesProgressJsDefault.default,
    updateProgress: _updateProgressJsDefault.default,
    updateSlidesClasses: _updateSlidesClassesJsDefault.default,
    updateActiveIndex: _updateActiveIndexJsDefault.default,
    updateClickedSlide: _updateClickedSlideJsDefault.default
};

},{"./updateSize.js":"bsa2K","./updateSlides.js":"eZm9z","./updateAutoHeight.js":"7KfeT","./updateSlidesOffset.js":"6FBIR","./updateSlidesProgress.js":"f3Dkt","./updateProgress.js":"2zH9x","./updateSlidesClasses.js":"28hyn","./updateActiveIndex.js":"8xZJ6","./updateClickedSlide.js":"e8k92","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsa2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
exports.default = updateSize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZm9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
    });
    else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel('width')] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = 'none';
            if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth , offsetWidth  } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid
        );
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid
        );
    }
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
}
exports.default = updateSlides;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KfeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index
        )[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) swiper.visibleSlides.each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}
exports.default = updateAutoHeight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FBIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}
exports.default = updateSlidesOffset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Dkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides , rtlTranslate: rtl , snapGrid  } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = _domJsDefault.default(swiper.visibleSlides);
}
exports.default = updateSlidesProgress;

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zH9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress , isBeginning , isEnd  } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}
exports.default = updateProgress;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28hyn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesClasses() {
    const swiper = this;
    const { slides , params , $wrapperEl , activeIndex , realIndex  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}
exports.default = updateSlidesClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xZJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid , snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
}
exports.default = updateActiveIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8k92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = _domJsDefault.default(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(_domJsDefault.default(slide).attr('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
exports.default = updateClickedSlide;

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82UFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslateJs = require("./getTranslate.js");
var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
var _setTranslateJs = require("./setTranslate.js");
var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
var _minTranslateJs = require("./minTranslate.js");
var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
var _maxTranslateJs = require("./maxTranslate.js");
var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
var _translateToJs = require("./translateTo.js");
var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
exports.default = {
    getTranslate: _getTranslateJsDefault.default,
    setTranslate: _setTranslateJsDefault.default,
    minTranslate: _minTranslateJsDefault.default,
    maxTranslate: _maxTranslateJsDefault.default,
    translateTo: _translateToJsDefault.default
};

},{"./getTranslate.js":"l7sfz","./setTranslate.js":"g0P3q","./minTranslate.js":"hopBm","./maxTranslate.js":"izojh","./translateTo.js":"9fo5P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7sfz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
    const swiper = this;
    const { params , rtlTranslate: rtl , translate , $wrapperEl  } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = _utilsJs.getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
exports.default = getSwiperTranslate;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0P3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl , params , $wrapperEl , wrapperEl , progress  } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}
exports.default = setTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hopBm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minTranslate() {
    return -this.snapGrid[0];
}
exports.default = minTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izojh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
exports.default = maxTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fo5P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params , wrapperEl  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                _utilsJs.animateCSSModeScroll({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
exports.default = translateTo;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Knou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransitionJs = require("./setTransition.js");
var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
var _transitionStartJs = require("./transitionStart.js");
var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
var _transitionEndJs = require("./transitionEnd.js");
var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
exports.default = {
    setTransition: _setTransitionJsDefault.default,
    transitionStart: _transitionStartJsDefault.default,
    transitionEnd: _transitionEndJsDefault.default
};

},{"./setTransition.js":"g4hnj","./transitionStart.js":"ZupG2","./transitionEnd.js":"6fcJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4hnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}
exports.default = setTransition;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZupG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params  } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    _transitionEmitJsDefault.default({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
    });
}
exports.default = transitionStart;

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6fZ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function transitionEmit({ swiper , runCallbacks , direction , step  }) {
    const { activeIndex , previousIndex  } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
exports.default = transitionEmit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fcJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params  } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    _transitionEmitJsDefault.default({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
    });
}
exports.default = transitionEnd;

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VZY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToJs = require("./slideTo.js");
var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
var _slideToLoopJs = require("./slideToLoop.js");
var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
var _slideNextJs = require("./slideNext.js");
var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
var _slidePrevJs = require("./slidePrev.js");
var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
var _slideResetJs = require("./slideReset.js");
var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
var _slideToClosestJs = require("./slideToClosest.js");
var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
exports.default = {
    slideTo: _slideToJsDefault.default,
    slideToLoop: _slideToLoopJsDefault.default,
    slideNext: _slideNextJsDefault.default,
    slidePrev: _slidePrevJsDefault.default,
    slideReset: _slideResetJsDefault.default,
    slideToClosest: _slideToClosestJsDefault.default,
    slideToClickedSlide: _slideToClickedSlideJsDefault.default
};

},{"./slideTo.js":"iYsU0","./slideToLoop.js":"c0zrc","./slideNext.js":"6QRzM","./slidePrev.js":"2gloi","./slideReset.js":"2Jl3v","./slideToClosest.js":"c03V7","./slideToClickedSlide.js":"kCvnh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYsU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index !== 'number' && typeof index !== 'string') throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
    const translate = -snapGrid[snapIndex]; // Update progress
    swiper.updateProgress(translate); // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset'; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = '';
                swiper._swiperImmediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                _utilsJs.animateCSSModeScroll({
                    swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
exports.default = slideTo;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0zrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
exports.default = slideToLoop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QRzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { animating , enabled , params  } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
exports.default = slideNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gloi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params , animating , snapGrid , slidesGrid , rtlTranslate , enabled  } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val)
    );
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== 'undefined') prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
exports.default = slidePrev;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Jl3v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
exports.default = slideReset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c03V7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
exports.default = slideToClosest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCvnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function slideToClickedSlide() {
    const swiper = this;
    const { params , $wrapperEl  } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(_domJsDefault.default(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                _utilsJs.nextTick(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            _utilsJs.nextTick(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
exports.default = slideToClickedSlide;

},{"../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S1wN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreateJs = require("./loopCreate.js");
var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
var _loopFixJs = require("./loopFix.js");
var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
var _loopDestroyJs = require("./loopDestroy.js");
var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
exports.default = {
    loopCreate: _loopCreateJsDefault.default,
    loopFix: _loopFixJsDefault.default,
    loopDestroy: _loopDestroyJsDefault.default
};

},{"./loopCreate.js":"2lRpX","./loopFix.js":"iCLJj","./loopDestroy.js":"in4TF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lRpX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loopCreate() {
    const swiper = this;
    const document = _ssrWindow.getDocument();
    const { params , $wrapperEl  } = swiper; // Remove duplicated slides
    const $selector = $wrapperEl.children().length > 0 ? _domJsDefault.default($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = _domJsDefault.default(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $selector.append(blankNode);
            }
            slides = $selector.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index)=>{
        const slide = _domJsDefault.default(el);
        if (index < swiper.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
    });
    for(let i = 0; i < appendSlides.length; i += 1)$selector.append(_domJsDefault.default(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i1 = prependSlides.length - 1; i1 >= 0; i1 -= 1)$selector.prepend(_domJsDefault.default(prependSlides[i1].cloneNode(true)).addClass(params.slideDuplicateClass));
}
exports.default = loopCreate;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCLJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopFix() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const { activeIndex , slides , loopedSlides , allowSlidePrev , allowSlideNext , snapGrid , rtlTranslate: rtl  } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
}
exports.default = loopFix;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"in4TF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopDestroy() {
    const swiper = this;
    const { $wrapperEl , params , slides  } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr('data-swiper-slide-index');
}
exports.default = loopDestroy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6y5ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursorJs = require("./setGrabCursor.js");
var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
exports.default = {
    setGrabCursor: _setGrabCursorJsDefault.default,
    unsetGrabCursor: _unsetGrabCursorJsDefault.default
};

},{"./setGrabCursor.js":"6iLu0","./unsetGrabCursor.js":"fKd0x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iLu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}
exports.default = setGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKd0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}
exports.default = unsetGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPWSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStartJs = require("./onTouchStart.js");
var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
var _onTouchMoveJs = require("./onTouchMove.js");
var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
var _onTouchEndJs = require("./onTouchEnd.js");
var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
var _onResizeJs = require("./onResize.js");
var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
var _onClickJs = require("./onClick.js");
var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
var _onScrollJs = require("./onScroll.js");
var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
let dummyEventAttached = false;
function dummyEventListener() {
}
const events = (swiper, method)=>{
    const document = _ssrWindow.getDocument();
    const { params , touchEvents , el , wrapperEl , device , support  } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method; // Touch Events
    if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResizeJsDefault.default, true);
    else swiper[swiperMethod]('observerUpdate', _onResizeJsDefault.default, true);
};
function attachEvents() {
    const swiper = this;
    const document = _ssrWindow.getDocument();
    const { params , support  } = swiper;
    swiper.onTouchStart = _onTouchStartJsDefault.default.bind(swiper);
    swiper.onTouchMove = _onTouchMoveJsDefault.default.bind(swiper);
    swiper.onTouchEnd = _onTouchEndJsDefault.default.bind(swiper);
    if (params.cssMode) swiper.onScroll = _onScrollJsDefault.default.bind(swiper);
    swiper.onClick = _onClickJsDefault.default.bind(swiper);
    if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, 'on');
}
function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
}
exports.default = {
    attachEvents,
    detachEvents
};

},{"ssr-window":"3lyfI","./onTouchStart.js":"kkzrg","./onTouchMove.js":"cSIvX","./onTouchEnd.js":"db2nG","./onResize.js":"4q7ER","./onClick.js":"leO2O","./onScroll.js":"ik2Ty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkzrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === _ssrWindow.getDocument() || el === _ssrWindow.getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = _ssrWindow.getDocument();
    const window = _ssrWindow.getWindow();
    const data = swiper.touchEventsData;
    const { params , touches , enabled  } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = _domJsDefault.default(e.target);
    if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = _domJsDefault.default(event.path[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = _utilsJs.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;
        if (document.activeElement && _domJsDefault.default(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    swiper.emit('touchStart', e);
}
exports.default = onTouchStart;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSIvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function onTouchMove(event) {
    const document = _ssrWindow.getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = _utilsJs.now();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && _domJsDefault.default(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}
exports.default = onTouchMove;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db2nG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = _utilsJs.now();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = _utilsJs.now();
    _utilsJs.nextTick(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
exports.default = onTouchEnd;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q7ER":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onResize() {
    const swiper = this;
    const { params , el  } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
exports.default = onResize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leO2O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
exports.default = onClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ik2Ty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onScroll() {
    const swiper = this;
    const { wrapperEl , rtlTranslate , enabled  } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}
exports.default = onScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sZHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpointJs = require("./setBreakpoint.js");
var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
var _getBreakpointJs = require("./getBreakpoint.js");
var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
exports.default = {
    setBreakpoint: _setBreakpointJsDefault.default,
    getBreakpoint: _getBreakpointJsDefault.default
};

},{"./setBreakpoint.js":"9am8j","./getBreakpoint.js":"dePRa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9am8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { activeIndex , initialized , loopedSlides =0 , params , $el  } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    _utilsJs.extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
}
exports.default = setBreakpoint;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dePRa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base = 'window', containerEl) {
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = _ssrWindow.getWindow();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10)
    );
    for(let i = 0; i < points.length; i += 1){
        const { point , value  } = points[i];
        if (base === 'window') {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}
exports.default = getBreakpoint;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJ7YF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClassesJs = require("./addClasses.js");
var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
var _removeClassesJs = require("./removeClasses.js");
var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
exports.default = {
    addClasses: _addClassesJsDefault.default,
    removeClasses: _removeClassesJsDefault.default
};

},{"./addClasses.js":"2wJnK","./removeClasses.js":"bfksE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wJnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames , params , rtl , $el , device , support  } = swiper; // prettier-ignore
    const suffixes = prepareClasses([
        'initialized',
        params.direction,
        {
            'pointer-events': !support.touch
        },
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(' '));
    swiper.emitContainerClasses();
}
exports.default = addClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfksE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeClasses() {
    const swiper = this;
    const { $el , classNames  } = swiper;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
}
exports.default = removeClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xpbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadImageJs = require("./loadImage.js");
var _loadImageJsDefault = parcelHelpers.interopDefault(_loadImageJs);
var _preloadImagesJs = require("./preloadImages.js");
var _preloadImagesJsDefault = parcelHelpers.interopDefault(_preloadImagesJs);
exports.default = {
    loadImage: _loadImageJsDefault.default,
    preloadImages: _preloadImagesJsDefault.default
};

},{"./loadImage.js":"lapsD","./preloadImages.js":"4DDtH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lapsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = _ssrWindow.getWindow();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = _domJsDefault.default(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}
exports.default = loadImage;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DDtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}
exports.default = preloadImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCZBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked , params  } = swiper;
    const { slidesOffsetBefore  } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
exports.default = {
    checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwKb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2G6E7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../shared/utils.js");
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {
    }) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            _utilsJs.extend(allModulesParams, obj);
            return;
        }
        if ([
            'navigation',
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            _utilsJs.extend(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        _utilsJs.extend(allModulesParams, obj);
    };
}
exports.default = moduleExtendParams;

},{"../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13JV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Virtual({ swiper , extendParams , on  }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    swiper.virtual = {
        cache: {
        },
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        const $slideEl = params.renderSlide ? _domJsDefault.default(params.renderSlide.call(swiper, slide, index)) : _domJsDefault.default(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    }
    function update(force) {
        const { slidesPerView , slidesPerGroup , centeredSlides  } = swiper.params;
        const { addSlidesBefore , addSlidesAfter  } = swiper.params.virtual;
        const { from: previousFrom , to: previousTo , slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
            swiper.updateProgress();
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i1 = 0; i1 < slides.length; i1 += 1)if (i1 >= from && i1 <= to) {
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(i1);
            else {
                if (i1 > previousTo) appendIndexes.push(i1);
                if (i1 < previousFrom) prependIndexes.push(i1);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b)=>b - a
        ).forEach((index)=>{
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {
            };
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {
        };
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', ()=>{
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on('init update resize', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}
exports.default = Virtual;

},{"../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82wTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable consistent-return */ var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Keyboard({ swiper , extendParams , on , emit  }) {
    const document = _ssrWindow.getDocument();
    const window = _ssrWindow.getWindow();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl  } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        _domJsDefault.default(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        _domJsDefault.default(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    on('init', ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}
exports.default = Keyboard;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dP6Ui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable consistent-return */ var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Mousewheel({ swiper , extendParams , on , emit  }) {
    const window = _ssrWindow.getWindow();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = _utilsJs.now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && _utilsJs.now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && _utilsJs.now() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domJsDefault.default(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: _utilsJs.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: _utilsJs.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = _utilsJs.nextTick(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = _utilsJs.nextTick(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domJsDefault.default(swiper.params.mousewheel.eventsTarget);
        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}
exports.default = Mousewheel;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGdRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Navigation({ swiper , extendParams , on , emit  }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock'
        }
    });
    swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el) {
        let $el;
        if (el) {
            $el = _domJsDefault.default(el);
            if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
            if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
    }
    function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const { $nextEl , $prevEl  } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = _createElementIfNotDefinedJsDefault.default(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick);
        Object.assign(swiper.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    }
    function destroy() {
        const { $nextEl , $prevEl  } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off('click', onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off('click', onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
    on('init', ()=>{
        init();
        update();
    });
    on('toEdge fromEdge lock unlock', ()=>{
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $nextEl , $prevEl  } = swiper.navigation;
        if ($nextEl) $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    });
    on('click', (_s, e)=>{
        const { $nextEl , $prevEl  } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !_domJsDefault.default(targetEl).is($prevEl) && !_domJsDefault.default(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit('navigationShow');
            else emit('navigationHide');
            if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
    });
    Object.assign(swiper.navigation, {
        update,
        init,
        destroy
    });
}
exports.default = Navigation;

},{"../../shared/create-element-if-not-defined.js":"4uqq0","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uqq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document = _ssrWindow.getDocument();
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
                element = document.createElement('div');
                element.className = checkProps[key];
                swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}
exports.default = createElementIfNotDefined;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40Lys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Pagination({ swiper , extendParams , on , emit  }) {
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number
            ,
            formatFractionTotal: (number)=>number
            ,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`
        }
    });
    swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass  } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                '',
                '-next',
                '-next-next',
                '-prev',
                '-prev-prev',
                '-main'
            ].map((suffix)=>`${params.bulletActiveClass}${suffix}`
            ).join(' '));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = _domJsDefault.default(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, 'prev');
                    if (bulletIndex === lastIndex) setSideBullets($bullet, 'next');
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length) {
                            for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, 'prev');
                            setSideBullets($lastDisplayedBullet, 'next');
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, 'prev');
                        setSideBullets($lastDisplayedBullet, 'next');
                    }
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
            }
        }
        if (params.type === 'fraction') {
            $el.find(_classesToSelectorJsDefault.default(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find(_classesToSelectorJsDefault.default(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
            let progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === 'horizontal') scaleX = scale;
            else scaleY = scale;
            $el.find(_classesToSelectorJsDefault.default(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            emit('paginationRender', $el[0]);
        } else emit('paginationUpdate', $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find(_classesToSelectorJsDefault.default(params.bulletClass));
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type !== 'custom') emit('paginationRender', swiper.pagination.$el[0]);
    }
    function init() {
        swiper.params.pagination = _createElementIfNotDefinedJsDefault.default(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = _domJsDefault.default(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
            $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el)=>{
                if (_domJsDefault.default(el).parents('.swiper')[0] !== swiper.el) return false;
                return true;
            });
        }
        if (params.type === 'bullets' && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(params.modifierClass + swiper.params.direction);
        if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on('click', _classesToSelectorJsDefault.default(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = _domJsDefault.default(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        Object.assign(swiper.pagination, {
            $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(params.modifierClass + swiper.params.direction);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off('click', _classesToSelectorJsDefault.default(params.bulletClass));
    }
    on('init', ()=>{
        init();
        render();
        update();
    });
    on('activeIndexChange', ()=>{
        if (swiper.params.loop) update();
        else if (typeof swiper.snapIndex === 'undefined') update();
    });
    on('snapIndexChange', ()=>{
        if (!swiper.params.loop) update();
    });
    on('slidesLengthChange', ()=>{
        if (swiper.params.loop) {
            render();
            update();
        }
    });
    on('snapGridLengthChange', ()=>{
        if (!swiper.params.loop) {
            render();
            update();
        }
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $el  } = swiper.pagination;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    });
    on('lock unlock', ()=>{
        update();
    });
    on('click', (_s, e)=>{
        const targetEl = e.target;
        const { $el  } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !_domJsDefault.default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit('paginationShow');
            else emit('paginationHide');
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
    });
    Object.assign(swiper.pagination, {
        render,
        update,
        init,
        destroy
    });
}
exports.default = Pagination;

},{"../../shared/dom.js":"7pW5q","../../shared/classes-to-selector.js":"227R4","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"227R4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function classesToSelector(classes = '') {
    return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}
exports.default = classesToSelector;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfOsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Scrollbar({ swiper , extendParams , on , emit  }) {
    const document = _ssrWindow.getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag'
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar , rtlTranslate: rtl , progress  } = swiper;
        const { $dragEl , $el  } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar  } = swiper;
        const { $dragEl , $el  } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = 'none';
        else $el[0].style.display = '';
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar , rtlTranslate: rtl  } = swiper;
        const { $el  } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar , $wrapperEl  } = swiper;
        const { $el , $dragEl  } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css('opacity', 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css('scroll-snap-type', 'none');
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar , $wrapperEl  } = swiper;
        const { $el , $dragEl  } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar , $wrapperEl  } = swiper;
        const { $el  } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = _utilsJs.nextTick(()=>{
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar , touchEventsTouch , touchEventsDesktop , params , support  } = swiper;
        const $el = scrollbar.$el;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        if (!support.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('on');
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('off');
    }
    function init() {
        const { scrollbar , $el: $swiperEl  } = swiper;
        swiper.params.scrollbar = _createElementIfNotDefinedJsDefault.default(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = _domJsDefault.default(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = _domJsDefault.default(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) enableDraggable();
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        disableDraggable();
    }
    on('init', ()=>{
        init();
        updateSize();
        setTranslate();
    });
    on('update resize observerUpdate lock unlock', ()=>{
        updateSize();
    });
    on('setTranslate', ()=>{
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        setTransition(duration);
    });
    on('enable disable', ()=>{
        const { $el  } = swiper.scrollbar;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    });
    on('destroy', ()=>{
        destroy();
    });
    Object.assign(swiper.scrollbar, {
        updateSize,
        setTranslate,
        init,
        destroy
    });
}
exports.default = Scrollbar;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEM3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Parallax({ swiper , extendParams , on  }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl  } = swiper;
        const $el = _domJsDefault.default(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf('%') >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate = ()=>{
        const { $el , slides , progress , snapGrid  } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
            setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            _domJsDefault.default(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
                setTransform(el, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed)=>{
        const { $el  } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((parallaxEl)=>{
            const $parallaxEl = _domJsDefault.default(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on('beforeInit', ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}
exports.default = Parallax;

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YHxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Zoom({ swiper , extendParams , on , emit  }) {
    const window = _ssrWindow.getWindow();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {
        },
        touchesCurrent: {
        }
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = _domJsDefault.default(e.target).closest(`.${swiper.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === 'gesturechange') onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = _utilsJs.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = _utilsJs.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = _domJsDefault.default(e.target).closest(`.${swiper.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener  } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    on('init', ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on('destroy', ()=>{
        disable();
    });
    on('touchStart', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on('touchEnd', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on('doubleTap', (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on('transitionEnd', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on('slideChange', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}
exports.default = Zoom;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPhLF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Lazy({ swiper , extendParams , on , emit  }) {
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
        }
    });
    swiper.lazy = {
    };
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate = true) {
        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = _domJsDefault.default(imageEl);
            $imageEl.addClass(params.loadingClass);
            const background = $imageEl.attr('data-background');
            const src = $imageEl.attr('data-src');
            const srcset = $imageEl.attr('data-srcset');
            const sizes = $imageEl.attr('data-sizes');
            const $pictureEl = $imageEl.parent('picture');
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css('background-image', `url("${background}")`);
                    $imageEl.removeAttr('data-background');
                } else {
                    if (srcset) {
                        $imageEl.attr('srcset', srcset);
                        $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                        $imageEl.attr('sizes', sizes);
                        $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) $pictureEl.children('source').each((sourceEl)=>{
                        const $source = _domJsDefault.default(sourceEl);
                        if ($source.attr('data-srcset')) {
                            $source.attr('srcset', $source.attr('data-srcset'));
                            $source.removeAttr('data-srcset');
                        }
                    });
                    if (src) {
                        $imageEl.attr('src', src);
                        $imageEl.removeAttr('data-src');
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl , params: swiperParams , slides , activeIndex  } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return _domJsDefault.default(slideEl).attr('data-swiper-slide-index');
            return _domJsDefault.default(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
            const index = isVirtual ? _domJsDefault.default(slideEl).attr('data-swiper-slide-index') : _domJsDefault.default(slideEl).index();
            loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = slidesPerView;
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + slidesPerView; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i1 = minIndex; i1 < activeIndex; i1 += 1)if (slideExist(i1)) loadInSlide(i1);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = _ssrWindow.getWindow();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? _domJsDefault.default(swiper.params.lazy.scrollingElement) : _domJsDefault.default(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const { rtlTranslate: rtl  } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
    }
    on('beforeInit', ()=>{
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
    });
    on('init', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('scroll', ()=>{
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
    });
    on('scrollbarDragMove resize _freeModeNoMomentumRelease', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('transitionStart', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on('transitionEnd', ()=>{
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('slideChange', ()=>{
        const { lazy , cssMode , watchSlidesProgress , touchReleaseOnEdges , resistanceRatio  } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    Object.assign(swiper.lazy, {
        load,
        loadInSlide
    });
}
exports.default = Lazy;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcdrq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var _utilsJs = require("../../shared/utils.js");
function Controller({ swiper , extendParams , on  }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) _utilsJs.nextTick(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === 'slide') c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', ()=>{
        swiper.controller.control = swiper.params.controller.control;
    });
    on('update', ()=>{
        removeSpline();
    });
    on('resize', ()=>{
        removeSpline();
    });
    on('observerUpdate', ()=>{
        removeSpline();
    });
    on('setTranslate', (_s, translate, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}
exports.default = Controller;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDTl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function A11y({ swiper , extendParams , on  }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group'
        }
    });
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16)
        ;
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
    }
    function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
    }
    function addElRole($el, role) {
        $el.attr('role', role);
    }
    function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
    }
    function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
    }
    function addElLabel($el, label) {
        $el.attr('aria-label', label);
    }
    function addElId($el, id) {
        $el.attr('id', id);
    }
    function addElLive($el, live) {
        $el.attr('aria-live', live);
    }
    function disableEl($el) {
        $el.attr('aria-disabled', true);
    }
    function enableEl($el) {
        $el.attr('aria-disabled', false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = _domJsDefault.default(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is(_classesToSelectorJsDefault.default(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { $nextEl , $prevEl  } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = _domJsDefault.default(bulletEl);
            if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, 'button');
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
            }
            if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr('aria-current', 'true');
            else $bulletEl.removeAttr('aria-current');
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== 'BUTTON') {
            addElRole($el, 'button');
            $el.on('keydown', onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    function init() {
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
         // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        if (params.itemRoleDescriptionMessage) addElRoleDescription(_domJsDefault.default(swiper.slides), params.itemRoleDescriptionMessage);
        addElRole(_domJsDefault.default(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)
        ).length : swiper.slides.length;
        swiper.slides.each((slideEl, index)=>{
            const $slideEl = _domJsDefault.default(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.on('keydown', _classesToSelectorJsDefault.default(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off('keydown', onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off('keydown', onEnterOrSpaceKey);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.off('keydown', _classesToSelectorJsDefault.default(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
    on('beforeInit', ()=>{
        liveRegion = _domJsDefault.default(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on('afterInit', ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
        updateNavigation();
    });
    on('toEdge', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('fromEdge', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('paginationUpdate', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on('destroy', ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}
exports.default = A11y;

},{"../../shared/classes-to-selector.js":"227R4","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pifE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function History({ swiper , extendParams , on  }) {
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides'
        }
    });
    let initialized = false;
    let paths = {
    };
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = _ssrWindow.getWindow();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== ''
        );
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = _ssrWindow.getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, swiper.paths.value, false);
    };
    const init = ()=>{
        const window = _ssrWindow.getWindow();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
    };
    const destroy = ()=>{
        const window = _ssrWindow.getWindow();
        if (!swiper.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
    };
    on('init', ()=>{
        if (swiper.params.history.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}
exports.default = History;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TTnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function HashNavigation({ swiper , extendParams , emit , on  }) {
    let initialized = false;
    const document = _ssrWindow.getDocument();
    const window = _ssrWindow.getWindow();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === 'undefined') return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
            emit('hashSet');
        } else {
            const slide = swiper.slides.eq(swiper.activeIndex);
            const hash = slide.attr('data-hash') || slide.attr('data-history');
            document.location.hash = hash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) _domJsDefault.default(window).on('hashchange', onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) _domJsDefault.default(window).off('hashchange', onHashChange);
    };
    on('init', ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHash();
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}
exports.default = HashNavigation;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YoHq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Autoplay({ swiper , extendParams , on , emit  }) {
    let timeout;
    swiper.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = _utilsJs.nextTick(()=>{
            let autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit('autoplay');
                } else stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit('autoplay');
            } else stop();
            if (swiper.params.cssMode && swiper.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
    }
    function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
    }
    function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            run();
        } else [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = _ssrWindow.getDocument();
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) pause();
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            run();
            swiper.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) stop();
        else pause();
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        run();
    }
    function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on('mouseenter', onMouseEnter);
            swiper.$el.on('mouseleave', onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
    }
    on('init', ()=>{
        if (swiper.params.autoplay.enabled) {
            start();
            const document = _ssrWindow.getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
            attachMouseEvents();
        }
    });
    on('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
            else stop();
        }
    });
    on('sliderFirstMove', ()=>{
        if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on('touchEnd', ()=>{
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
    });
    on('destroy', ()=>{
        detachMouseEvents();
        if (swiper.autoplay.running) stop();
        const document = _ssrWindow.getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
    });
}
exports.default = Autoplay;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0dJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Thumb({ swiper , extendParams , on  }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && _domJsDefault.default(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt(_domJsDefault.default(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams  } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if (_utilsJs.isObject(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({
            }, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        } // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i1 = 0; i1 < thumbsToActivate; i1 += 1)thumbsSwiper.slides.eq(swiper.realIndex + i1).addClass(thumbActiveClass);
    }
    on('beforeInit', ()=>{
        const { thumbs  } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
    });
    on('slideChange update resize observerUpdate', ()=>{
        if (!swiper.thumbs.swiper) return;
        update();
    });
    on('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        if (swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}
exports.default = Thumb;

},{"../../shared/utils.js":"dbikn","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NFQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function freeMode({ swiper , extendParams , emit , once  }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchMove() {
        const { touchEventsData: data , touches  } = swiper; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: _utilsJs.now()
        });
    }
    function onTouchEnd({ currentPos  }) {
        const { params , $wrapperEl , rtlTranslate: rtl , snapGrid , touchEventsData: data  } = swiper; // Time diff
        const touchEndTime = _utilsJs.now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || _utilsJs.now() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once('transitionEnd', ()=>{
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit('_freeModeNoMomentumRelease');
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchMove,
            onTouchEnd
        }
    });
}
exports.default = freeMode;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gE5KG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Grid({ swiper , extendParams  }) {
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView  } = swiper.params;
        const { rows , fill  } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup , spaceBetween  } = swiper.params;
        const { rows , fill  } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween , centeredSlides , roundLengths  } = swiper.params;
        const { rows  } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
            [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}
exports.default = Grid;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ga5Sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appendSlideJs = require("./methods/appendSlide.js");
var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
var _prependSlideJs = require("./methods/prependSlide.js");
var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
var _addSlideJs = require("./methods/addSlide.js");
var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
var _removeSlideJs = require("./methods/removeSlide.js");
var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
function Manipulation({ swiper  }) {
    Object.assign(swiper, {
        appendSlide: _appendSlideJsDefault.default.bind(swiper),
        prependSlide: _prependSlideJsDefault.default.bind(swiper),
        addSlide: _addSlideJsDefault.default.bind(swiper),
        removeSlide: _removeSlideJsDefault.default.bind(swiper),
        removeAllSlides: _removeAllSlidesJsDefault.default.bind(swiper)
    });
}
exports.default = Manipulation;

},{"./methods/appendSlide.js":"69bun","./methods/prependSlide.js":"djuuM","./methods/addSlide.js":"4opfk","./methods/removeSlide.js":"8WI06","./methods/removeAllSlides.js":"7pufd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69bun":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function appendSlide(slides) {
    const swiper = this;
    const { $wrapperEl , params  } = swiper;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
}
exports.default = appendSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djuuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prependSlide(slides) {
    const swiper = this;
    const { params , $wrapperEl , activeIndex  } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = prependSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4opfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addSlide(index, slides) {
    const swiper = this;
    const { $wrapperEl , params , activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i1 = 0; i1 < slidesBuffer.length; i1 += 1)$wrapperEl.append(slidesBuffer[i1]);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = addSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WI06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params , $wrapperEl , activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = removeSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pufd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}
exports.default = removeAllSlides;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBGpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFade({ swiper , extendParams , on  }) {
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides  } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper.slides.eq(i);
            const offset = $slideEl[0].swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    _effectInitJsDefault.default({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectFade;

},{"../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DnvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectInit(params) {
    const { effect , swiper , on , setTranslate , setTransition , overwriteParams , perspective  } = params;
    on('beforeInit', ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {
        };
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
}
exports.default = effectInit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKqS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden'
    });
    return $slideEl;
}
exports.default = effectTarget;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VhYFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectVirtualTransitionEnd({ swiper , duration , transformEl , allSlides  }) {
    const { slides , activeIndex , $wrapperEl  } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = [
                'webkitTransitionEnd',
                'transitionend'
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}
exports.default = effectVirtualTransitionEnd;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV6iY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
function EffectCube({ swiper , extendParams , on  }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const setTranslate = ()=>{
        const { $el , $wrapperEl , slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser  } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = _domJsDefault.default('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = _domJsDefault.default('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) {
                // Set shadows
                let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) {
                    shadowBefore = _domJsDefault.default(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                    $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                    shadowAfter = _domJsDefault.default(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                    $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
        }
        $wrapperEl.css({
            '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
            'transform-origin': `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    };
    const setTransition = (duration)=>{
        const { $el , slides  } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
    };
    _effectInitJsDefault.default({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}
exports.default = EffectCube;

},{"../../shared/dom.js":"7pW5q","../../shared/effect-init.js":"5DnvG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dI6Dz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFlip({ swiper , extendParams , on  }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides , rtlTranslate: rtl  } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) {
                // Set shadows
                let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) shadowBefore = _createShadowJsDefault.default(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                if (shadowAfter.length === 0) shadowAfter = _createShadowJsDefault.default(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl
        });
    };
    _effectInitJsDefault.default({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectFlip;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JYAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("./dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function createShadow(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = _domJsDefault.default(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}
exports.default = createShadow;

},{"./dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UFNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
function EffectCoverflow({ swiper , extendParams , on  }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth , height: swiperHeight , slides , slidesSizesGrid  } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = _createShadowJsDefault.default(params, $slideEl, isHorizontal ? 'left' : 'top');
                if ($shadowAfterEl.length === 0) $shadowAfterEl = _createShadowJsDefault.default(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    };
    _effectInitJsDefault.default({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}
exports.default = EffectCoverflow;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uSvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCreative({ swiper , extendParams , on  }) {
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides , $wrapperEl , slidesSizesGrid  } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier  } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
            const offset = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            } // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow');
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = _createShadowJsDefault.default(params, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(transform).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css('transform-origin', data.origin);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    _effectInitJsDefault.default({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectCreative;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9saRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCards({ swiper , extendParams , on  }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides , activeIndex  } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate , isTouched  } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = $slideEl[0].swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -2 * progress;
            let tXAdd = 8 - Math.abs(progress) * 0.75;
            const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow');
                if ($shadowEl.length === 0) $shadowEl = _createShadowJsDefault.default(params, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl
        });
    };
    _effectInitJsDefault.default({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectCards;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"273KY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>_swiperJs.Swiper
);
parcelHelpers.export(exports, "SwiperSlide", ()=>_swiperSlideJs.SwiperSlide
);
/**
 * Swiper React 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */ var _swiperJs = require("./swiper.js");
var _swiperSlideJs = require("./swiper-slide.js");

},{"./swiper.js":"5fu0x","./swiper-slide.js":"cPudX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fu0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>Swiper
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _getParamsJs = require("./get-params.js");
var _initSwiperJs = require("./init-swiper.js");
var _utilsJs = require("./utils.js");
var _loopJs = require("./loop.js");
var _getChangedParamsJs = require("./get-changed-params.js");
var _getChildrenJs = require("./get-children.js");
var _updateSwiperJs = require("./update-swiper.js");
var _virtualJs = require("./virtual.js");
var _useIsomorphicLayoutEffectJs = require("./use-isomorphic-layout-effect.js");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const Swiper = /*#__PURE__*/ _react.forwardRef(({ className , tag: Tag = 'div' , wrapperTag: WrapperTag = 'div' , children , onSwiper , ...rest } = {
}, externalElRef)=>{
    let eventsAssigned = false;
    const [containerClasses, setContainerClasses] = _react.useState('swiper');
    const [virtualData, setVirtualData] = _react.useState(null);
    const [breakpointChanged, setBreakpointChanged] = _react.useState(false);
    const initializedRef = _react.useRef(false);
    const swiperElRef = _react.useRef(null);
    const swiperRef = _react.useRef(null);
    const oldPassedParamsRef = _react.useRef(null);
    const oldSlides = _react.useRef(null);
    const nextElRef = _react.useRef(null);
    const prevElRef = _react.useRef(null);
    const paginationElRef = _react.useRef(null);
    const scrollbarElRef = _react.useRef(null);
    const { params: swiperParams , passedParams , rest: restProps , events  } = _getParamsJs.getParams(rest);
    const { slides , slots  } = _getChildrenJs.getChildren(children);
    const onBeforeBreakpoint = ()=>{
        setBreakpointChanged(!breakpointChanged);
    };
    Object.assign(swiperParams.on, {
        _containerClasses (swiper, classes) {
            setContainerClasses(classes);
        }
    });
    if (!swiperElRef.current) {
        // init swiper
        Object.assign(swiperParams.on, events);
        eventsAssigned = true;
        swiperRef.current = _initSwiperJs.initSwiper(swiperParams);
        swiperRef.current.loopCreate = ()=>{
        };
        swiperRef.current.loopDestroy = ()=>{
        };
        if (swiperParams.loop) swiperRef.current.loopedSlides = _loopJs.calcLoopedSlides(slides, swiperParams);
        if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
            swiperRef.current.virtual.slides = slides;
            const extendWith = {
                cache: false,
                slides,
                renderExternal: setVirtualData,
                renderExternalUpdate: false
            };
            _utilsJs.extend(swiperRef.current.params.virtual, extendWith);
            _utilsJs.extend(swiperRef.current.originalParams.virtual, extendWith);
        }
    } // Listen for breakpoints change
    if (swiperRef.current) swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
    const attachEvents = ()=>{
        if (eventsAssigned || !events || !swiperRef.current) return;
        Object.keys(events).forEach((eventName)=>{
            swiperRef.current.on(eventName, events[eventName]);
        });
    };
    const detachEvents = ()=>{
        if (!events || !swiperRef.current) return;
        Object.keys(events).forEach((eventName)=>{
            swiperRef.current.off(eventName, events[eventName]);
        });
    };
    _react.useEffect(()=>{
        return ()=>{
            if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
        };
    }); // set initialized flag
    _react.useEffect(()=>{
        if (!initializedRef.current && swiperRef.current) {
            swiperRef.current.emitSlidesClasses();
            initializedRef.current = true;
        }
    }); // mount swiper
    _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect(()=>{
        if (externalElRef) externalElRef.current = swiperElRef.current;
        if (!swiperElRef.current) return;
        _initSwiperJs.mountSwiper({
            el: swiperElRef.current,
            nextEl: nextElRef.current,
            prevEl: prevElRef.current,
            paginationEl: paginationElRef.current,
            scrollbarEl: scrollbarElRef.current,
            swiper: swiperRef.current
        }, swiperParams);
        if (onSwiper) onSwiper(swiperRef.current); // eslint-disable-next-line
        return ()=>{
            if (swiperRef.current && !swiperRef.current.destroyed) swiperRef.current.destroy(true, false);
        };
    }, []); // watch for params change
    _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect(()=>{
        attachEvents();
        const changedParams = _getChangedParamsJs.getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current);
        oldPassedParamsRef.current = passedParams;
        oldSlides.current = slides;
        if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) _updateSwiperJs.updateSwiper({
            swiper: swiperRef.current,
            slides,
            passedParams,
            changedParams,
            nextEl: nextElRef.current,
            prevEl: prevElRef.current,
            scrollbarEl: scrollbarElRef.current,
            paginationEl: paginationElRef.current
        });
        return ()=>{
            detachEvents();
        };
    }); // update on virtual update
    _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect(()=>{
        _virtualJs.updateOnVirtualData(swiperRef.current);
    }, [
        virtualData
    ]); // bypass swiper instance to slides
    function renderSlides() {
        if (swiperParams.virtual) return _virtualJs.renderVirtual(swiperRef.current, slides, virtualData);
        if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) return slides.map((child)=>{
            return(/*#__PURE__*/ _reactDefault.default.cloneElement(child, {
                swiper: swiperRef.current
            }));
        });
        return _loopJs.renderLoop(swiperRef.current, slides, swiperParams);
    }
    return(/*#__PURE__*/ _reactDefault.default.createElement(Tag, _extends({
        ref: swiperElRef,
        className: _utilsJs.uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`)
    }, restProps), slots['container-start'], _utilsJs.needsNavigation(swiperParams) && /*#__PURE__*/ _reactDefault.default.createElement(_reactDefault.default.Fragment, null, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        ref: prevElRef,
        className: "swiper-button-prev"
    }), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        ref: nextElRef,
        className: "swiper-button-next"
    })), _utilsJs.needsScrollbar(swiperParams) && /*#__PURE__*/ _reactDefault.default.createElement("div", {
        ref: scrollbarElRef,
        className: "swiper-scrollbar"
    }), _utilsJs.needsPagination(swiperParams) && /*#__PURE__*/ _reactDefault.default.createElement("div", {
        ref: paginationElRef,
        className: "swiper-pagination"
    }), /*#__PURE__*/ _reactDefault.default.createElement(WrapperTag, {
        className: "swiper-wrapper"
    }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), slots['container-end']));
});
Swiper.displayName = 'Swiper';

},{"react":"21dqq","./get-params.js":"hhZGT","./init-swiper.js":"c2LMh","./utils.js":"aHZkn","./loop.js":"1GmSc","./get-changed-params.js":"kmEMs","./get-children.js":"eAASP","./update-swiper.js":"89378","./virtual.js":"1Qn3d","./use-isomorphic-layout-effect.js":"fpyc0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhZGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getParams", ()=>getParams
);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _utilsJs = require("./utils.js");
var _paramsListJs = require("./params-list.js");
function getParams(obj = {
}) {
    const params = {
        on: {
        }
    };
    const events = {
    };
    const passedParams = {
    };
    _utilsJs.extend(params, _swiperDefault.default.defaults);
    _utilsJs.extend(params, _swiperDefault.default.extendedDefaults);
    params._emitClasses = true;
    params.init = false;
    const rest = {
    };
    const allowedParams = _paramsListJs.paramsList.map((key)=>key.replace(/_/, '')
    );
    Object.keys(obj).forEach((key)=>{
        if (allowedParams.indexOf(key) >= 0) {
            if (_utilsJs.isObject(obj[key])) {
                params[key] = {
                };
                passedParams[key] = {
                };
                _utilsJs.extend(params[key], obj[key]);
                _utilsJs.extend(passedParams[key], obj[key]);
            } else {
                params[key] = obj[key];
                passedParams[key] = obj[key];
            }
        } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
        else rest[key] = obj[key];
    });
    [
        'navigation',
        'pagination',
        'scrollbar'
    ].forEach((key)=>{
        if (params[key] === true) params[key] = {
        };
        if (params[key] === false) delete params[key];
    });
    return {
        params,
        passedParams,
        rest,
        events
    };
}

},{"swiper":"cCbRx","./utils.js":"aHZkn","./params-list.js":"fLzFR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHZkn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "needsNavigation", ()=>needsNavigation
);
parcelHelpers.export(exports, "needsPagination", ()=>needsPagination
);
parcelHelpers.export(exports, "needsScrollbar", ()=>needsScrollbar
);
parcelHelpers.export(exports, "uniqueClasses", ()=>uniqueClasses
);
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function extend(target, src) {
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    Object.keys(src).filter((key)=>noExtend.indexOf(key) < 0
    ).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
            if (src[key].__swiper__) target[key] = src[key];
            else extend(target[key], src[key]);
        } else target[key] = src[key];
    });
}
function needsNavigation(params = {
}) {
    return params.navigation && typeof params.navigation.nextEl === 'undefined' && typeof params.navigation.prevEl === 'undefined';
}
function needsPagination(params = {
}) {
    return params.pagination && typeof params.pagination.el === 'undefined';
}
function needsScrollbar(params = {
}) {
    return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}
function uniqueClasses(classNames = '') {
    const classes = classNames.split(' ').map((c)=>c.trim()
    ).filter((c)=>!!c
    );
    const unique = [];
    classes.forEach((c)=>{
        if (unique.indexOf(c) < 0) unique.push(c);
    });
    return unique.join(' ');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fLzFR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paramsList", ()=>paramsList
);
/* underscore in name -> watch for changes */ const paramsList = [
    'modules',
    'init',
    '_direction',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    '_spaceBetween',
    '_slidesPerView',
    '_grid',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_slidesPerGroupAuto',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_preloadImages',
    'updateOnImagesReady',
    '_loop',
    '_loopAdditionalSlides',
    '_loopedSlides',
    '_loopFillGroupWithBlank',
    'loopPreventsSlide',
    '_rewind',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideBlankClass',
    'slideActiveClass',
    'slideDuplicateActiveClass',
    'slideVisibleClass',
    'slideDuplicateClass',
    'slideNextClass',
    'slideDuplicateNextClass',
    'slidePrevClass',
    'slideDuplicatePrevClass',
    'wrapperClass',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    'a11y',
    'autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'creativeEffect',
    'cardsEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'lazy',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom'
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c2LMh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSwiper", ()=>initSwiper
);
parcelHelpers.export(exports, "mountSwiper", ()=>mountSwiper
);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _utilsJs = require("./utils.js");
function initSwiper(swiperParams) {
    return new _swiperDefault.default(swiperParams);
}
function mountSwiper({ el , nextEl , prevEl , paginationEl , scrollbarEl , swiper  }, swiperParams) {
    if (_utilsJs.needsNavigation(swiperParams) && nextEl && prevEl) {
        swiper.params.navigation.nextEl = nextEl;
        swiper.originalParams.navigation.nextEl = nextEl;
        swiper.params.navigation.prevEl = prevEl;
        swiper.originalParams.navigation.prevEl = prevEl;
    }
    if (_utilsJs.needsPagination(swiperParams) && paginationEl) {
        swiper.params.pagination.el = paginationEl;
        swiper.originalParams.pagination.el = paginationEl;
    }
    if (_utilsJs.needsScrollbar(swiperParams) && scrollbarEl) {
        swiper.params.scrollbar.el = scrollbarEl;
        swiper.originalParams.scrollbar.el = scrollbarEl;
    }
    swiper.init(el);
}

},{"swiper":"cCbRx","./utils.js":"aHZkn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GmSc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcLoopedSlides", ()=>calcLoopedSlides
);
parcelHelpers.export(exports, "renderLoop", ()=>renderLoop
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
function calcLoopedSlides(slides, swiperParams) {
    let slidesPerViewParams = swiperParams.slidesPerView;
    if (swiperParams.breakpoints) {
        const breakpoint = _swiperDefault.default.prototype.getBreakpoint(swiperParams.breakpoints);
        const breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : undefined;
        if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
    let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
    loopedSlides += swiperParams.loopAdditionalSlides;
    if (loopedSlides > slides.length) loopedSlides = slides.length;
    return loopedSlides;
}
function renderLoop(swiper, slides, swiperParams) {
    const modifiedSlides = slides.map((child, index)=>{
        return(/*#__PURE__*/ _reactDefault.default.cloneElement(child, {
            swiper,
            'data-swiper-slide-index': index
        }));
    });
    function duplicateSlide(child, index, position) {
        return(/*#__PURE__*/ _reactDefault.default.cloneElement(child, {
            key: `${child.key}-duplicate-${index}-${position}`,
            className: `${child.props.className || ''} ${swiperParams.slideDuplicateClass}`
        }));
    }
    if (swiperParams.loopFillGroupWithBlank) {
        const blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;
        if (blankSlidesNum !== swiperParams.slidesPerGroup) for(let i = 0; i < blankSlidesNum; i += 1){
            const blankSlide = /*#__PURE__*/ _reactDefault.default.createElement("div", {
                className: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
            });
            modifiedSlides.push(blankSlide);
        }
    }
    if (swiperParams.slidesPerView === 'auto' && !swiperParams.loopedSlides) swiperParams.loopedSlides = modifiedSlides.length;
    const loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
    const prependSlides = [];
    const appendSlides = [];
    modifiedSlides.forEach((child, index)=>{
        if (index < loopedSlides) appendSlides.push(duplicateSlide(child, index, 'prepend'));
        if (index < modifiedSlides.length && index >= modifiedSlides.length - loopedSlides) prependSlides.push(duplicateSlide(child, index, 'append'));
    });
    if (swiper) swiper.loopedSlides = loopedSlides;
    return [
        ...prependSlides,
        ...modifiedSlides,
        ...appendSlides
    ];
}

},{"react":"21dqq","swiper":"cCbRx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmEMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChangedParams", ()=>getChangedParams
);
var _paramsListJs = require("./params-list.js");
var _utilsJs = require("./utils.js");
function getChangedParams(swiperParams, oldParams, children, oldChildren) {
    const keys = [];
    if (!oldParams) return keys;
    const addKey = (key)=>{
        if (keys.indexOf(key) < 0) keys.push(key);
    };
    const oldChildrenKeys = oldChildren.map((child)=>child.key
    );
    const childrenKeys = children.map((child)=>child.key
    );
    if (oldChildrenKeys.join('') !== childrenKeys.join('')) addKey('children');
    if (oldChildren.length !== children.length) addKey('children');
    const watchParams = _paramsListJs.paramsList.filter((key)=>key[0] === '_'
    ).map((key)=>key.replace(/_/, '')
    );
    watchParams.forEach((key)=>{
        if (key in swiperParams && key in oldParams) {
            if (_utilsJs.isObject(swiperParams[key]) && _utilsJs.isObject(oldParams[key])) {
                const newKeys = Object.keys(swiperParams[key]);
                const oldKeys = Object.keys(oldParams[key]);
                if (newKeys.length !== oldKeys.length) addKey(key);
                else {
                    newKeys.forEach((newKey)=>{
                        if (swiperParams[key][newKey] !== oldParams[key][newKey]) addKey(key);
                    });
                    oldKeys.forEach((oldKey)=>{
                        if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
                    });
                }
            } else if (swiperParams[key] !== oldParams[key]) addKey(key);
        }
    });
    return keys;
}

},{"./params-list.js":"fLzFR","./utils.js":"aHZkn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAASP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChildren", ()=>getChildren
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function processChildren(c) {
    const slides = [];
    _reactDefault.default.Children.toArray(c).forEach((child)=>{
        if (child.type && child.type.displayName === 'SwiperSlide') slides.push(child);
        else if (child.props && child.props.children) processChildren(child.props.children).forEach((slide)=>slides.push(slide)
        );
    });
    return slides;
}
function getChildren(c) {
    const slides = [];
    const slots = {
        'container-start': [],
        'container-end': [],
        'wrapper-start': [],
        'wrapper-end': []
    };
    _reactDefault.default.Children.toArray(c).forEach((child)=>{
        if (child.type && child.type.displayName === 'SwiperSlide') slides.push(child);
        else if (child.props && child.props.slot && slots[child.props.slot]) slots[child.props.slot].push(child);
        else if (child.props && child.props.children) {
            const foundSlides = processChildren(child.props.children);
            if (foundSlides.length > 0) foundSlides.forEach((slide)=>slides.push(slide)
            );
            else slots['container-end'].push(child);
        } else slots['container-end'].push(child);
    });
    return {
        slides,
        slots
    };
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89378":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSwiper", ()=>updateSwiper
);
var _utilsJs = require("./utils.js");
function updateSwiper({ swiper , slides , passedParams , changedParams , nextEl , prevEl , scrollbarEl , paginationEl  }) {
    const updateParams = changedParams.filter((key)=>key !== 'children' && key !== 'direction'
    );
    const { params: currentParams , pagination , navigation , scrollbar , virtual , thumbs  } = swiper;
    let needThumbsInit;
    let needControllerInit;
    let needPaginationInit;
    let needScrollbarInit;
    let needNavigationInit;
    if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) needThumbsInit = true;
    if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) needControllerInit = true;
    if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) needPaginationInit = true;
    if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) needScrollbarInit = true;
    if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) needNavigationInit = true;
    const destroyModule = (mod)=>{
        if (!swiper[mod]) return;
        swiper[mod].destroy();
        if (mod === 'navigation') {
            currentParams[mod].prevEl = undefined;
            currentParams[mod].nextEl = undefined;
            swiper[mod].prevEl = undefined;
            swiper[mod].nextEl = undefined;
        } else {
            currentParams[mod].el = undefined;
            swiper[mod].el = undefined;
        }
    };
    updateParams.forEach((key)=>{
        if (_utilsJs.isObject(currentParams[key]) && _utilsJs.isObject(passedParams[key])) _utilsJs.extend(currentParams[key], passedParams[key]);
        else {
            const newValue = passedParams[key];
            if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
                if (newValue === false) destroyModule(key);
            } else currentParams[key] = passedParams[key];
        }
    });
    if (changedParams.includes('children') && virtual && currentParams.virtual.enabled) {
        virtual.slides = slides;
        virtual.update(true);
    } else if (changedParams.includes('children') && swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
    if (needThumbsInit) {
        const initialized = thumbs.init();
        if (initialized) thumbs.update(true);
    }
    if (needControllerInit) swiper.controller.control = currentParams.controller.control;
    if (needPaginationInit) {
        if (paginationEl) currentParams.pagination.el = paginationEl;
        pagination.init();
        pagination.render();
        pagination.update();
    }
    if (needScrollbarInit) {
        if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
        scrollbar.init();
        scrollbar.updateSize();
        scrollbar.setTranslate();
    }
    if (needNavigationInit) {
        if (nextEl) currentParams.navigation.nextEl = nextEl;
        if (prevEl) currentParams.navigation.prevEl = prevEl;
        navigation.init();
        navigation.update();
    }
    if (changedParams.includes('allowSlideNext')) swiper.allowSlideNext = passedParams.allowSlideNext;
    if (changedParams.includes('allowSlidePrev')) swiper.allowSlidePrev = passedParams.allowSlidePrev;
    if (changedParams.includes('direction')) swiper.changeDirection(passedParams.direction, false);
    swiper.update();
}

},{"./utils.js":"aHZkn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Qn3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderVirtual", ()=>renderVirtual
);
parcelHelpers.export(exports, "updateOnVirtualData", ()=>updateOnVirtualData
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function updateOnVirtualData(swiper) {
    if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
    if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) swiper.parallax.setTranslate();
}
function renderVirtual(swiper, slides, virtualData) {
    if (!virtualData) return null;
    const style = swiper.isHorizontal() ? {
        [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
    } : {
        top: `${virtualData.offset}px`
    };
    return slides.filter((child, index)=>index >= virtualData.from && index <= virtualData.to
    ).map((child)=>{
        return(/*#__PURE__*/ _reactDefault.default.cloneElement(child, {
            swiper,
            style
        }));
    });
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpyc0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useIsomorphicLayoutEffect", ()=>useIsomorphicLayoutEffect
);
var _react = require("react");
function useIsomorphicLayoutEffect(callback, deps) {
    // eslint-disable-next-line
    if (typeof window === 'undefined') return _react.useEffect(callback, deps);
    return _react.useLayoutEffect(callback, deps);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPudX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SwiperSlide", ()=>SwiperSlide
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _utilsJs = require("./utils.js");
var _useIsomorphicLayoutEffectJs = require("./use-isomorphic-layout-effect.js");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const SwiperSlide = /*#__PURE__*/ _react.forwardRef(({ tag: Tag = 'div' , children , className ='' , swiper , zoom , virtualIndex , ...rest } = {
}, externalRef)=>{
    const slideElRef = _react.useRef(null);
    const [slideClasses, setSlideClasses] = _react.useState('swiper-slide');
    function updateClasses(_s, el, classNames) {
        if (el === slideElRef.current) setSlideClasses(classNames);
    }
    _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect(()=>{
        if (externalRef) externalRef.current = slideElRef.current;
        if (!slideElRef.current || !swiper) return;
        if (swiper.destroyed) {
            if (slideClasses !== 'swiper-slide') setSlideClasses('swiper-slide');
            return;
        }
        swiper.on('_slideClass', updateClasses); // eslint-disable-next-line
        return ()=>{
            if (!swiper) return;
            swiper.off('_slideClass', updateClasses);
        };
    });
    _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect(()=>{
        if (swiper && slideElRef.current) setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }, [
        swiper
    ]);
    let slideData;
    if (typeof children === 'function') slideData = {
        isActive: slideClasses.indexOf('swiper-slide-active') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
        isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
        isDuplicate: slideClasses.indexOf('swiper-slide-duplicate') >= 0,
        isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
        isNext: slideClasses.indexOf('swiper-slide-next') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
    };
    const renderChildren = ()=>{
        return typeof children === 'function' ? children(slideData) : children;
    };
    return(/*#__PURE__*/ _reactDefault.default.createElement(Tag, _extends({
        ref: slideElRef,
        className: _utilsJs.uniqueClasses(`${slideClasses}${className ? ` ${className}` : ''}`),
        "data-swiper-slide-index": virtualIndex
    }, rest), zoom ? /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
    }, renderChildren()) : renderChildren()));
});
SwiperSlide.displayName = 'SwiperSlide';

},{"react":"21dqq","./utils.js":"aHZkn","./use-isomorphic-layout-effect.js":"fpyc0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6NZBR":[function(require,module,exports) {
module.exports = JSON.parse("{\"hashtagFirst\":[{\"id\":1,\"title\":\"# 애자일\",\"text\":\"'정해진 대로', '늘 하던 대로' 도 좋지만 작업 간에 알게 되는 다양한 방식과 변화를 유연하게 받아들이고 빠르게 검토하여 곧바로 적용하는 편입니다.\",\"back\":\"AGILE\"},{\"id\":2,\"title\":\"# 될 때까지\",\"text\":\"목표가 생기고 필요하다고 생각되면, 많은 노력과 시간이 들더라도 꿋꿋이 해내어 성취감을 얻는 걸 좋아합니다. 처음의 생각과 다르게 아주 많이 어렵고, 말도 안 되더라도 말입니다.\",\"back\":\"Until it works\"},{\"id\":3,\"title\":\"# 솔직한\",\"text\":\"당연한데 의외로 많은 사람이 못하고 있습니다. 잘못한 걸 잘했다고, 나쁜 것 을 좋다고 하지 않습니다. 단점과 잘못을 포장하지 않습니다. 양보를 영원히 할 수는 없고, 부끄러움 없이는 나아지기 어렵다고 생각합니다.\",\"back\":\"Honest\"}],\"hashtagSecond\":[{\"id\":4,\"title\":\"# 아이디어\",\"text\":\"항상 자신 있는 부분입니다. 아주 사소하고 작은 것부터 당연하다고 여기는 것까지 뻔한 것을 뻔하게 하기 싫어합니다. 남과 같이 해서는 남보다 나아질 수 없다고 생각합니다.\",\"back\":\"Idea\"},{\"id\":5,\"title\":\"# 계획적인\",\"text\":\"일의 순서와 계획을 논리적으로 잘 세우고, 갑작스러운 변수에 대한 대비도 잘 하는 편입니다. 메사에 침착하고 효율적일 수 있습니다.\",\"back\":\"Premeditated\"},{\"id\":6,\"title\":\"# 세심한\",\"text\":\"정리 정돈을 잘하며, 나의 행동과 주변 환경을 잘 인지하는 편입니다. 15세 이후 제 물건을 잃어버린 적이 없습니다. 차분하고 침착하게 생활합니다.\",\"back\":\"Meticulous\"}]}");

},{}],"euGrn":[function(require,module,exports) {
module.exports = JSON.parse("{\"introduce\":{\"first\":\"초등학교부터 사용한 컴퓨터는 제게는 너무 신기하고 배울 것이 참 많은 기기였습니다. 학교에서 배우는 공부보다 컴퓨터의 탐색기를 하나하나 열어보고 윈도우의 기능과 타자 연습, 다양한 게임들을 해보는 게 가장 큰 재미였습니다. 일찍 배운 컴퓨터 타자로 당시 대학교수셨던 아버지의 $$책$$ 출간을 돕기도 했습니다. 이후 미술 전공을 준비했었지만, 보여주기식의 반복적이고 지루한 입시 미술이 적성에 맞지 않아 고등학교를 졸업하고 바로 입대하였습니다.\",\"second\":\"22세에 전역을 하고는 다양한 일을 경험했습니다. 2~30대로 이루어진 $$건설팀$$에 들어가 1년 정도 몸을 쓰는 일도 해보았고, 2년 정도 $$다양한 공장$$에서 OP(Operator) 일도 하였습니다. 이후 학생 시절에 PC방 아르바이트 일이 즐거웠던 기억이 있어 $$프랜차이즈$$PC방에 점장으로 취업하여 2년간 일했습니다. 하드웨어에 대한 공부도 많이 하였고, $$전국 매출 상위 1%$$의 매장이 되어 또 다른 프랜차이즈 기업에서 스카우트 제의를 받아 $$여러 매장$$을 오픈 및 관리 하였습니다. 하지만 해당 분야에서 좋은 여건에 있었음에도 앞으로 전망이 밝지 않다는 판단에 그만두게 되었습니다. 이후 $$웹 사이트$$를 운영하려는 지인을 돕게 되면서 웹 개발자의 영역을 알게 되었습니다. 대부분 구글과 간단한 서적으로 독학하여 퍼블리싱을 배우고 $$지인들과 팀$$을 꾸려 외주 업무를 받아서 처리하기 시작했습니다.\",\"third\":\"함께 일하는 팀은 점점 전문화되어 $$회사$$가 되었고, 저는 설립 멤버로서 개발과 회사 운영을 함께 해왔습니다. 주니어 개발자였지만 기획자가 따로 없었으므로 서비스의 개발과 개선 등을 기획부터 해왔고, 회사의 $$인사$$, $$고객 응대$$, $$세무$$, $$관리$$를 전부 맡아 처리하였습니다. $$적은 인원$$과 자본이지만 성장하는 실력과 회사를 보고 즐겁게 일할 수 있었습니다. 다양한 업무 경험으로 넓은 시각이 생겼지만, 이렇게 일을 해서는 전문가가 되기는 어렵겠다는 생각에 퇴사하게 되었습니다. 이후 프리랜서로 짧은 기간 일을 하였고, 얼마 뒤 결혼을 하였습니다. 그리고 아내의 임신부터 아들의 100일까지 육아와 가사를 보조하며 공부와 포트폴리오 작업을 병행했고, 현재 취업을 준비하고 있습니다.\"},\"tooltipInfo\":{\"first\":[{\"info\":\"도벽@환경도예\",\"text\":\"책\"}],\"second\":[{\"info\":\"시스템 동바리 (prefabricated shoring system)\",\"text\":\"건설팀\"},{\"info\":\"LED, LCD, Clalen (콘택트 렌즈), PCI\",\"text\":\"다양한 공장\"},{\"info\":\"시즌아이(seasoni)\",\"text\":\"프랜차이즈\"},{\"info\":\"피카라이브 전국 비교 보고서 기준\",\"text\":\"전국 매출 상위 1%\"},{\"info\":\"오산(2), 천안, 평택\",\"text\":\"여러 매장\"},{\"info\":\"일반기업 솔루션 쇼핑몰\",\"text\":\"웹 사이트\"},{\"info\":\"본인 외 디자이너, 계약담당 등 총 3인\",\"text\":\"지인들과 팀\"}],\"third\":[{\"info\":\"크리에이티브코드(CC)\",\"text\":\"회사\"},{\"info\":\"면접, 채용, 근태, 해고, 정부 혜택 처리 등\",\"text\":\"인사\"},{\"info\":\"계약, 기획, 기능명세, 회의, 수금 등\",\"text\":\"고객 응대\"},{\"info\":\"급여 명세, 연말 정산\",\"text\":\"세무\"},{\"info\":\"시설 및 비품 구입, PC 및 채굴기 관리 등\",\"text\":\"관리\"},{\"info\":\"프론트 2명, 백엔드 1명, 디자이너 1명, 대표\",\"text\":\"적은 인원\"}]}}");

},{}],"cxrL0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "child.c7beb84e.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4IqcJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "shop1.31210507.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7Nz71":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "shop2.42797d6d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3AmWH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "shop3.764b809b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"haW9J":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "shop4.8783c642.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lz6Zb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "current1.c971265f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5FmOj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "current2.01390aaf.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ekyt3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3IHNx') + "current3.92b1367f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aWf3O":[function() {},{}],"iXKG4":[function() {},{}],"bghXC":[function() {},{}],"awB7C":[function() {},{}],"9FhdL":[function() {},{}],"8ocw7":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a474 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a474.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _s = $RefreshSig$();
const useWindowSize = ()=>{
    _s();
    const isSSR = typeof window !== 'undefined';
    const [windowSize, setWindowSize] = _reactDefault.default.useState({
        width: isSSR ? window.innerWidth : 1200,
        height: isSSR ? window.innerHeight : 800
    });
    const changeWindowSize = ()=>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    _reactDefault.default.useEffect(()=>{
        window.addEventListener('resize', changeWindowSize);
        return ()=>window.removeEventListener('resize', changeWindowSize)
        ;
    }, []);
    return windowSize;
};
_s(useWindowSize, "hQ0mXtDtgFkFk1RKPNRRgLncxTo=");
exports.default = useWindowSize;

  $parcel$ReactRefreshHelpers$a474.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8jxEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_tooltipDefault.default
);
var _tooltip = require("./tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);

},{"./tooltip":"dQYlX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQYlX":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3252 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3252.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _tooltipScss = require("./tooltip.scss");
var _s = $RefreshSig$();
const Tooltip = ({ _onHover , _onLeave , children , info  })=>{
    _s();
    const [tooltipState, setTooltipState] = _reactDefault.default.useState(false);
    const hoverTooltip = ()=>{
        _onHover(' pagination-cursor');
        setTooltipState(true);
    };
    const leaveTooltip = ()=>{
        _onLeave();
        setTooltipState(false);
    };
    return(/*#__PURE__*/ _reactDefault.default.createElement("span", {
        className: 'tooltip-area',
        onMouseEnter: hoverTooltip,
        onMouseLeave: leaveTooltip
    }, tooltipState && /*#__PURE__*/ _reactDefault.default.createElement("span", {
        className: 'tooltip-frame',
        onMouseEnter: hoverTooltip
    }, /*#__PURE__*/ _reactDefault.default.createElement("span", null, info)), children));
};
_s(Tooltip, "loS5khdskryv+6TuYKKBDXs7Im0=");
_c = Tooltip;
exports.default = Tooltip;
var _c;
$RefreshReg$(_c, "Tooltip");

  $parcel$ReactRefreshHelpers$3252.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","./tooltip.scss":"7CNi5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7CNi5":[function() {},{}]},["kn9T2","9nPFN"], null, "parcelRequire2041")

//# sourceMappingURL=aboutDetail.7c85ba53.js.map
