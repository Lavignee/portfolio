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
})({"emU3S":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"bL4SD"}],"hrodE":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "8b13b54ed170b752";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
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
            it = o[Symbol.iterator]();
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

},{}],"7415F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_skillDetailDefault.default
);
var _skillDetail = require("./skillDetail");
var _skillDetailDefault = parcelHelpers.interopDefault(_skillDetail);

},{"./skillDetail":"4Ccf8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Ccf8":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$990a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$990a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _commonValue = require("../../Modules/commonValue");
var _reactDeviceDetect = require("react-device-detect");
var _gsap = require("gsap");
var _scrollTrigger = require("gsap/ScrollTrigger");
var _languageSkillJson = require("../../data/dataSkill/languageSkill.json");
var _languageSkillJsonDefault = parcelHelpers.interopDefault(_languageSkillJson);
var _libSkillJson = require("../../data/dataSkill/libSkill.json");
var _libSkillJsonDefault = parcelHelpers.interopDefault(_libSkillJson);
var _toolSkillJson = require("../../data/dataSkill/toolSkill.json");
var _toolSkillJsonDefault = parcelHelpers.interopDefault(_toolSkillJson);
var _interestSkillJson = require("../../data/dataSkill/interestSkill.json");
var _interestSkillJsonDefault = parcelHelpers.interopDefault(_interestSkillJson);
var _iconSvgJson = require("../../static/images/icon-svg.json");
var _iconSvgJsonDefault = parcelHelpers.interopDefault(_iconSvgJson);
var _skillDetailScss = require("./skillDetail.scss");
var _smoothScrollbar = require("smooth-scrollbar");
var _smoothScrollbarDefault = parcelHelpers.interopDefault(_smoothScrollbar);
var _s = $RefreshSig$();
_gsap.gsap.registerPlugin(_scrollTrigger.ScrollTrigger);
// react-router-dom으로 화면 호출.
const empty = [
    {
        number: 0,
        id: '',
        name: '',
        workmanship: 0,
        summary: '',
        svg: ''
    }, 
];
const SkillDetail = ({ onHover , onLeave  })=>{
    _s();
    // redux dispatch 정의.
    const dispatch = _reactRedux.useDispatch();
    const gsapReady = _react.useCallback((value)=>dispatch(_commonValue.changeGsapState(value))
    , [
        dispatch
    ]);
    // redux useSelector 정의.
    const [currentGsapState] = _reactRedux.useSelector((state)=>[
            state.CommonValue.currentGsapState
        ]
    , _reactRedux.shallowEqual);
    // react-router-dom으로 url 확인.
    let location = _reactRouterDom.useLocation();
    let navigate = _reactRouterDom.useNavigate();
    const lists = _react.useRef([]);
    const scrollPosition = _react.useRef(null);
    const [currentSkillScroller, setCurrentSkillScroller] = _react.useState(null);
    const [currentList, setCurrentList] = _react.useState(location.pathname);
    const [listHoverMotion, setListHoverMotion] = _react.useState('');
    const [currentTarget, setCurrentTarget] = _react.useState(0);
    const [opacity, setOpacity] = _react.useState('');
    // 스무스 스크롤 재생성.
    const makeSmoothScrollbarforSkill = _react.useCallback(()=>{
        let skillScrollBar;
        // 기기에 따라 다른 스크롤 딜레이 적용.
        if (_reactDeviceDetect.isDesktop) skillScrollBar = _smoothScrollbarDefault.default.init(scrollPosition.current, {
            damping: 0.02,
            alwaysShowTracks: true
        });
        else skillScrollBar = _smoothScrollbarDefault.default.init(scrollPosition.current, {
            damping: 0.1,
            alwaysShowTracks: true
        });
        // 새로운 스크롤 생성 시 위치 초기화.(재랜더가 아니므로 이전 위치로 인한 오류 방지.)
        skillScrollBar.setPosition(0, 0);
        //GSAP 스크롤 트리거에 스무스 스크롤의 스크롤 값 동기화.
        _scrollTrigger.ScrollTrigger.scrollerProxy(scrollPosition.current, {
            scrollTop (value) {
                if (arguments.length) skillScrollBar.scrollTop = value;
                return skillScrollBar.scrollTop;
            }
        });
        _scrollTrigger.ScrollTrigger.defaults({
            scroller: scrollPosition.current
        });
        skillScrollBar.addListener(_scrollTrigger.ScrollTrigger.update);
        // 다른 함수에서도 스크롤 컨트롤을 위해 state에 지정.
        setCurrentSkillScroller(skillScrollBar);
        // GSAP의 사용 준비 완료.
        gsapReady(true);
    }, []);
    // skill 세부 목록에 마우스 오버 시,
    const listHover = (number)=>{
        // 커서 형태 변경.
        onHover(' focus-cursor');
        // 마우스 오버 된 컨텐츠의 위치(위, 아래)에 따라 애니메이션 동작.
        if (currentTarget + 1 > number) setListHoverMotion('top');
        else if (currentTarget + 1 < number) setListHoverMotion('bottom');
    };
    // skill 세부 목록에서 마우스 벗어날 시,
    const onListLeave = _react.useCallback(()=>{
        // 커서 형태 초기화.
        onLeave();
        // 마우스 오버 애니메이션 제거.
        setListHoverMotion('');
    }, []);
    // skill 목록에 클릭 시
    const changeList = (e)=>{
        // 클릭 된 목록이 현재 목록인지 체크하여,
        if (e.target.dataset.list !== currentList) // 다른 경우 해당 url로 화면 다시 호출.
        navigate('/skill/' + e.target.dataset.list);
        else // 같은 경우 해당 목록의 최상단으로 이동.
        currentSkillScroller.scrollTo(0, 0, 600);
    };
    // 클릭이 아닌 히스토리를 통한 목록 변경 시.
    const changeHistoryList = _react.useCallback(async ()=>{
        // 기존의 skill 세부 목록을 초기화.
        lists.current = [];
        // 기존의 스크롤 데이터 삭제.
        _smoothScrollbarDefault.default.destroyAll();
        // 스크롤과 동기화 된 gsap 관련 로직 비활성화.
        await gsapReady(false);
        // 활성화 된 skill content 초기화.
        setCurrentTarget(0);
        // 현재 url 정보를 활성화 목록에 재정의.
        setCurrentList(location.pathname.split('/skill/')[1]);
        // 재정의된 내용으로 스크롤 다시 생성.
        makeSmoothScrollbarforSkill();
    }, [
        location
    ]);
    //스크롤 트리거가 변경 된 경우.
    const changeTarget = _react.useCallback((id)=>{
        // 스크롤 트리거가 감지한 영역 ID로 content를 변경.
        setCurrentTarget(id);
        // content의 text를 숨김.
        setOpacity('');
        // 시간차를 두고 텍스트 출력.
        const opacityTimer = setTimeout(()=>{
            setOpacity('opacity');
        }, 100);
        return ()=>clearTimeout(opacityTimer)
        ;
    }, []);
    const addToRefs = (el)=>{
        if (el && !lists.current.includes(el) && currentGsapState) lists.current.push(el);
    };
    // 중앙에 위치한 skill 세부 목록 영역에 스크롤 트리거 적용.
    const listScroller = _react.useCallback(()=>{
        lists.current.forEach((el, index)=>{
            _gsap.gsap.to(el, {
                scrollTrigger: {
                    id: `list-${index + 1}`,
                    trigger: el,
                    scroller: '.skill-list',
                    start: 'top center',
                    // 활성화 클래스를 토글.
                    toggleClass: {
                        targets: el,
                        className: 'active'
                    },
                    // 아래에서 부터 영역 들어올 시 활성화 대상을 전달.
                    onEnter: ()=>changeTarget(index)
                    ,
                    // 위에서 부터 영역 들어올 시 활성화 대상을 전달.
                    onEnterBack: ()=>changeTarget(index)
                    ,
                    end: 'bottom center'
                }
            });
        });
    }, []);
    // 스크롤 트리거와 연동된 skew 애니메이션 적용.
    const scrollSkew = ()=>{
        let proxy = {
            skew: 0
        }, skewSetter = _gsap.gsap.quickSetter('.list', 'skewY', 'deg'), clamp = _gsap.gsap.utils.clamp(-20, 20);
        _scrollTrigger.ScrollTrigger.create({
            scroller: '.skill-list',
            onUpdate: (self)=>{
                let skew = clamp(self.getVelocity() / -200);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    _gsap.gsap.to(proxy, {
                        skew: 0,
                        duration: 0.3,
                        ease: 'power3',
                        overwrite: true,
                        onUpdate: ()=>skewSetter(proxy.skew)
                    });
                }
            }
        });
    };
    // skill 세부 목록을 클릭 시,
    const clickList = (target)=>{
        // skill 세부 목록의 중앙 영역을 계산.
        const listHeight = scrollPosition.current.clientHeight / 3;
        // skill 세부 목록의 중앙 영역으로 스크롤 이동.
        currentSkillScroller.scrollTo(0, listHeight * (+target.number - 1), 600);
    };
    const SkillList = (targetUrl, text)=>{
        return(/*#__PURE__*/ _reactDefault.default.createElement("li", null, /*#__PURE__*/ _reactDefault.default.createElement("button", {
            className: currentList === targetUrl ? 'active' : '',
            onClick: (e)=>changeList(e)
            ,
            onMouseEnter: ()=>onHover(' focus-cursor')
            ,
            onMouseLeave: onListLeave,
            "data-list": targetUrl
        }, text)));
    };
    const contents = (target, contentKind)=>{
        let content1;
        let svgs = Object.entries(_iconSvgJsonDefault.default);
        let svgContent = new Map();
        svgs.forEach((item)=>{
            svgContent.set(item[0], item[1]);
        });
        if (target === 'language') content1 = _languageSkillJsonDefault.default.language;
        else if (target === 'lib') content1 = _libSkillJsonDefault.default.lib;
        else if (target === 'tool') content1 = _toolSkillJsonDefault.default.tool;
        else if (target === 'interest') content1 = _interestSkillJsonDefault.default.interest;
        else content1 = empty;
        return contentKind === 'list' ? content1.map((content)=>/*#__PURE__*/ _reactDefault.default.createElement("li", {
                key: content.number,
                className: 'list col-4 col-l-3 pl-pr-none',
                ref: addToRefs,
                onClick: ()=>clickList(content)
                ,
                onMouseEnter: ()=>listHover(content.number)
                ,
                onMouseLeave: onListLeave
            }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
                className: `inner ${listHoverMotion}`
            }, svgContent.has(content.id) === false ? /*#__PURE__*/ _reactDefault.default.createElement("div", null, content.name) : /*#__PURE__*/ _reactDefault.default.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: svgContent.get(content.id)
                }
            })))
        ) : /*#__PURE__*/ _reactDefault.default.createElement(_reactDefault.default.Fragment, null, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'pagenation'
        }, /*#__PURE__*/ _reactDefault.default.createElement("span", null, currentTarget + 1), "/", /*#__PURE__*/ _reactDefault.default.createElement("span", null, content1.length)), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: 'content'
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", null, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: `levels level-${content1[currentTarget].workmanship} ${opacity}`
        }, /*#__PURE__*/ _reactDefault.default.createElement("span", null), /*#__PURE__*/ _reactDefault.default.createElement("span", null), /*#__PURE__*/ _reactDefault.default.createElement("span", null), /*#__PURE__*/ _reactDefault.default.createElement("span", null), /*#__PURE__*/ _reactDefault.default.createElement("span", null)), /*#__PURE__*/ _reactDefault.default.createElement("h2", {
            className: opacity
        }, content1[currentTarget].name)), /*#__PURE__*/ _reactDefault.default.createElement("p", {
            className: `${opacity}${content1[currentTarget].workmanship}`
        }, content1[currentTarget].summary)), /*#__PURE__*/ _reactDefault.default.createElement("span", {
            className: `back-text ${opacity}`
        }, content1[currentTarget].name));
    };
    _react.useEffect(()=>{
        _smoothScrollbarDefault.default.destroyAll();
        gsapReady(false);
        makeSmoothScrollbarforSkill();
        return ()=>{
            let triggers = _scrollTrigger.ScrollTrigger.getAll();
            triggers.forEach((item)=>{
                item.kill();
            });
            onLeave();
        };
    }, [
        gsapReady,
        makeSmoothScrollbarforSkill,
        onLeave
    ]);
    _react.useEffect(()=>{
        if (currentGsapState) {
            listScroller();
            scrollSkew();
        }
    }, [
        currentGsapState,
        currentList
    ]);
    _react.useEffect(()=>{
        if (location.pathname.split('/skill/')[1] !== currentList) changeHistoryList();
    }, [
        currentList,
        location
    ]);
    return(/*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'skill-detail'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'container fluid pl-pr-none'
    }, /*#__PURE__*/ _reactDefault.default.createElement("ul", {
        className: 'skill-tab'
    }, /*#__PURE__*/ _reactDefault.default.createElement("li", null, /*#__PURE__*/ _reactDefault.default.createElement("button", {
        className: currentList === 'language' ? 'active' : '',
        onClick: (e)=>changeList(e)
        ,
        onMouseEnter: ()=>onHover(' focus-cursor')
        ,
        onMouseLeave: onListLeave,
        "data-list": 'language'
    }, "\uC5B8 \uC5B4")), /*#__PURE__*/ _reactDefault.default.createElement("li", null, /*#__PURE__*/ _reactDefault.default.createElement("button", {
        className: currentList === 'lib' ? 'active' : '',
        onClick: (e)=>changeList(e)
        ,
        onMouseEnter: ()=>onHover(' focus-cursor')
        ,
        onMouseLeave: onListLeave,
        "data-list": 'lib'
    }, "\uD504\uB808\uC784\uC6CC\uD06C&\uB77C\uC774\uBE0C\uB7EC\uB9AC")), /*#__PURE__*/ _reactDefault.default.createElement("li", null, /*#__PURE__*/ _reactDefault.default.createElement("button", {
        className: currentList === 'tool' ? 'active' : '',
        onClick: (e)=>changeList(e)
        ,
        onMouseEnter: ()=>onHover(' focus-cursor')
        ,
        onMouseLeave: onListLeave,
        "data-list": 'tool'
    }, "\uAC1C\uBC1C \uB3C4\uAD6C")), /*#__PURE__*/ _reactDefault.default.createElement("li", null, /*#__PURE__*/ _reactDefault.default.createElement("button", {
        className: currentList === 'interest' ? 'active' : '',
        onClick: (e)=>changeList(e)
        ,
        onMouseEnter: ()=>onHover(' focus-cursor')
        ,
        onMouseLeave: onListLeave,
        "data-list": 'interest'
    }, "\uCD5C\uADFC \uAD00\uC2EC \uAE30\uC220"))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'row content-frame'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'col-12 pl-pr-none skill-list-frame'
    }, /*#__PURE__*/ _reactDefault.default.createElement("ul", {
        className: 'skill-list',
        ref: scrollPosition
    }, /*#__PURE__*/ _reactDefault.default.createElement("li", {
        className: 'default-list col-4 col-l-3'
    }), contents(currentList, 'list'), /*#__PURE__*/ _reactDefault.default.createElement("li", {
        className: 'default-list col-4 col-l-3'
    }))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'col-8 off-4 col-l-9 off-l-3 pl-pr-none skill-detail-content-frame'
    }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
        className: 'skill-detail-content'
    }, contents(currentList, 'detail')))))));
};
_s(SkillDetail, "UqhoOuKHZJ4Ps3coqYCzzZlHuqw=", false, function() {
    return [
        _reactRedux.useDispatch,
        _reactRedux.useSelector,
        _reactRouterDom.useLocation,
        _reactRouterDom.useNavigate
    ];
});
_c = SkillDetail;
exports.default = SkillDetail;
var _c;
$RefreshReg$(_c, "SkillDetail");

  $parcel$ReactRefreshHelpers$990a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"4mchR","react-redux":"lT3ms","react-router-dom":"16kZP","../../Modules/commonValue":"l1RcA","react-device-detect":"gQONV","gsap":"2aTR0","gsap/ScrollTrigger":"41HI5","./skillDetail.scss":"6fqcW","smooth-scrollbar":"jRlDB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13","../../data/dataSkill/languageSkill.json":"9Anx4","../../data/dataSkill/libSkill.json":"hlmSY","../../data/dataSkill/toolSkill.json":"9Dsg3","../../data/dataSkill/interestSkill.json":"4qEPQ","../../static/images/icon-svg.json":"3w5FX"}],"6fqcW":[function() {},{}],"9Anx4":[function(require,module,exports) {
module.exports = JSON.parse("{\"language\":[{\"number\":1,\"id\":\"html\",\"name\":\"HTML\",\"workmanship\":5,\"summary\":\"대부분 목적에 맞는 올바른 태그를 사용하고 있습니다. 스크린리더의 적용 여부에 따라 더 까다롭게 신경 써 볼 수 있겠지만 현재는 웹 표준과 가이드가 너무 잘 나와 있기 때문에 완전히 자유롭고 다양하게 사용할 수 있습니다\"},{\"number\":2,\"id\":\"css\",\"name\":\"CSS\",\"workmanship\":4,\"summary\":\"대부분의 style 종류와 우선순위, 상관관계를 파악하고 있습니다. 이전에는 'Internet Explorer 8~9' 까지 Cross Browsing 하는 개발 조건을 많이 겪어 보기도 했습니다. 3D Animation을 곧바로 작성하는 수준까지는 경험이 더 필요할 것 같습니다.\"},{\"number\":3,\"id\":\"javascript\",\"name\":\"JavaScript\",\"workmanship\":4,\"summary\":\"MDN을 통째로 외우는 수준은 멀었지만, 언어 사용에 제한은 없는 수준입니다.\"}]}");

},{}],"hlmSY":[function(require,module,exports) {
module.exports = JSON.parse("{\"lib\":[{\"number\":1,\"id\":\"react\",\"name\":\"React\",\"workmanship\":4,\"summary\":\"Class 기반일 때부터 React를 익히고 있었지만, 실무에서 사용해볼 기회가 없었습니다. 커스터디 프로젝트에서 Hooks를 주로 사용하며 실무를 겪어보았고, 이번 포트폴리오는 Hooks 기반으로 제작하였습니다. 초기부터 지금까지 React에 변화가 많아 학습 시에 혼란이 많았지만 개발 및 설계는 이제 익숙합니다.\"},{\"number\":2,\"id\":\"redux\",\"name\":\"Redux\",\"workmanship\":3,\"summary\":\"간단한 상태 값과 트리거등의 역할로 이번 포트폴리오부터 사용하였습니다. 다양한 미들웨어들과 효율적인 사용은 경험이 더 필요할 것 같습니다.\"},{\"number\":3,\"id\":\"webpack\",\"name\":\"Webpack\",\"workmanship\":3,\"summary\":\"React를 처음 익히면서 Webpack을 배우게 되었습니다. 최근에는 개인 프로젝트를 진행하기 위해 webpack 5를 직접 세팅하여 사용해 보았습니다.\"},{\"number\":4,\"id\":\"parcel\",\"name\":\"Parcel\",\"workmanship\":4,\"summary\":\"이번 포트폴리오 개발에 사용한 번들러입니다. Webpack과 비교하여 Learning curve가 적고 바로 사용이 쉬우나 아직 관련 정보나 사례가 좀 적다는 단점을 겪었습니다.\"},{\"number\":5,\"id\":\"sass\",\"name\":\"SASS(SCSS)\",\"workmanship\":5,\"summary\":\"CSS보다 작성에서 오는 피로도가 적고 약간의 함수나 변수 사용이 꽤 편리합니다. 다루는데 큰 이해가 필요하진 않습니다.\"},{\"number\":6,\"id\":\"gsap\",\"name\":\"GSAP\",\"workmanship\":4,\"summary\":\"순수 CSS로 작성해서 만들어지는 애니메이션보다 시각적, 성능적으로 월등한 동적 효과를 표현할 수 있습니다. 유료 버전은 다뤄보지 않았지만 대부분의 기능이 무료이며, 응용에 무리가 없다고 생각합니다.\"},{\"number\":7,\"id\":\"i18next\",\"name\":\"I18next\",\"workmanship\":5,\"summary\":\"html이나 Javascript 환경, 서버에서 오는 텍스트 등 다양한 번역을 개발해보았습니다.\"},{\"number\":8,\"id\":\"jquery\",\"name\":\"Jquery\",\"workmanship\":4,\"summary\":\"Javascript를 처음 익힐 때 JQuery는 Learning curve를 줄여주는 좋은 도구였습니다. 사용하지 않은지 오래되긴 했지만 여전히 다루는 데는 문제가 없을 것 같습니다.\"},{\"number\":9,\"id\":\"bootstrap\",\"name\":\"Bootstrap\",\"workmanship\":5,\"summary\":\"반응형 사이트를 처음 접하고 개발할 당시 자주 사용하였던 프레임워크입니다, 현재도 BreakPoint 등을 참고하고, Grid 커스텀에도 응용하여 사용합니다.\"},{\"number\":10,\"id\":\"materialui\",\"name\":\"Material-UI\",\"workmanship\":4,\"summary\":\"커스터디 프로젝트에서 접하게 되었습니다. Bootstrap처럼 React에서 사용되는 프레임워크로 사용이나 커스텀의 방식도 꽤 익숙했다고 생각합니다.\"},{\"number\":11,\"id\":\"axios\",\"name\":\"Axios\",\"workmanship\":3,\"summary\":\"개인 프로젝트에서 주로 다루어보았고, 실무에서는 깊게 사용해볼 기회는 아직 없었습니다. 익히기 쉬웠고 사용도 간편했습니다.\"},{\"number\":12,\"id\":\"storoybook\",\"name\":\"Storybook\",\"workmanship\":4,\"summary\":\"삼성의 차세대 Knox Portal 프로젝트에서 공통 컴포넌트를 개발하며 다른 개발팀에 사용법을 공유하기 위해 개발하였습니다. 라이브러리 개발에는 적합한 도구입니다.\"}]}");

},{}],"9Dsg3":[function(require,module,exports) {
module.exports = JSON.parse("{\"tool\":[{\"number\":1,\"id\":\"git\",\"name\":\"Git\",\"workmanship\":4,\"summary\":\"개발자에게는 필수이고 당연히, 또 오랜 시간 사용하고 있지만 터미널에서 cli로 써본 적은 별로 없는 것 같습니다.\"},{\"number\":2,\"id\":\"github\",\"name\":\"Github\",\"workmanship\":4,\"summary\":\"대표적인 서비스지만 공개적인 형태라는 점에서 사용빈도가 낮았습니다. 이번 포트폴리오 프로젝트부터는 Github를 사용하려고 합니다.\"},{\"number\":3,\"id\":\"bitbucket\",\"name\":\"Bitbucket\",\"workmanship\":4,\"summary\":\"대부분의 Git 관련 프로젝트들이 직장과 관계되어 있고 소규모 팀에서 무료 Private 프로젝트를 만들 수 있었으므로 가장 많이 사용했습니다.\"},{\"number\":4,\"id\":\"sourcetree\",\"name\":\"Sourcetree\",\"workmanship\":3,\"summary\":\"GUI가 한눈에 들어오기도 하고 Bitbucket을 오래 사용하였기에 지금까지 사용하고 있는 Git 형상관리 툴입니다. 기능이 많지만 느리고 버그가 좀 잦다는 단점이 있습니다.\"},{\"number\":5,\"id\":\"jira\",\"name\":\"Jira\",\"workmanship\":4,\"summary\":\"처음부터 끝까지 세팅해본적은 없지만, 멤버로서 사용에는 아주 익숙합니다. 삼성에서 PL의 역할로써 사용해보기도 했습니다.\"},{\"number\":6,\"id\":\"figma\",\"name\":\"Figma\",\"workmanship\":4,\"summary\":\"예전 초기 프로젝트에서 PSD나 AI를 받아서 작업할 때를 제외하고 대부분은 Figma로 디자인을 전달받아 작업하였습니다. \"},{\"number\":7,\"id\":\"zeplin\",\"name\":\"Zeplin\",\"workmanship\":4,\"summary\":\"예전 초기 프로젝트에서 PSD나 AI를 받아서 작업할 때와 삼성 Knox포털 작업 시 기획서의 대용으로 사용하였습니다.\"},{\"number\":8,\"id\":\"netlify\",\"name\":\"Netlify\",\"workmanship\":3,\"summary\":\"이번 포트폴리오를 올리면서 사용하였는데, Netlify 사이트의 자체 빌드는 에러가 많아, 빌드는 local에서 진행하고 올렸습니다. 그래도 간편하고 성능도 좋은 것 같습니다.\"},{\"number\":9,\"id\":\"lighthouse\",\"name\":\"Lighthouse\",\"workmanship\":3,\"summary\":\"이번 포트폴리오를 개발하며 성능 개선을 위해 사용하였습니다. 이해하기 쉽고 가이드가 자세하게 나와서 사용이 편했습니다.\"}]}");

},{}],"4qEPQ":[function(require,module,exports) {
module.exports = JSON.parse("{\"interest\":[{\"number\":1,\"id\":\"typescript\",\"name\":\"TypeScript\",\"workmanship\":2,\"summary\":\"어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다. 현재 가장 많이 쓰이고 있는듯하여 최우선으로 숙달할 예정입니다.\"},{\"number\":2,\"id\":\"graphql\",\"name\":\"GraphQL\",\"workmanship\":2,\"summary\":\"개념과 기본 사용법은 익혀두었지만, 실무에서 사용해보진 못했습니다.\"},{\"number\":3,\"id\":\"mobx\",\"name\":\"MobX\",\"workmanship\":1,\"summary\":\"이미 적용된 프로젝트에서 잠시 사용해 보았지만, 직접 세팅해보지는 않았습니다. Redux보다는 편리하다고 들었는데, 시간이 나면 다뤄볼 생각입니다.\"},{\"number\":4,\"id\":\"nextjs\",\"name\":\"Next.js\",\"workmanship\":1,\"summary\":\"이미 적용된 프로젝트는 종종 있었으나, 직접적으로 다뤄보진 않았습니다.\"},{\"number\":5,\"id\":\"express\",\"name\":\"Express.js\",\"workmanship\":1,\"summary\":\"아직 직접 다룰 기회가 없었지만 쓰이는 곳이 많아, 시간 나는 대로 익혀둘 생각입니다.\"},{\"number\":6,\"id\":\"nginx\",\"name\":\"Nginx\",\"workmanship\":1,\"summary\":\"아직 직접 다룰 기회가 없었지만 쓰이는 곳이 많아, 시간 나는 대로 익혀둘 생각입니다.\"},{\"number\":7,\"id\":\"webgl\",\"name\":\"WebGL\",\"workmanship\":1,\"summary\":\"나중에 꼭 다뤄보고 싶은 생각이 있습니다.\"},{\"number\":8,\"id\":\"analytics\",\"name\":\"Google Analytics\",\"workmanship\":0,\"summary\":\"\"}]}");

},{}]},["emU3S","hrodE"], null, "parcelRequire2041")

//# sourceMappingURL=skillDetail.d170b752.js.map
