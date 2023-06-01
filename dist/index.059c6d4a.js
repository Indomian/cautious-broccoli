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
})({"lxFny":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "97323660059c6d4a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hb2Bw":[function(require,module,exports) {
var _onReady = require("../utils/onReady");
var _getElement = require("../utils/getElement");
var _worker = require("./worker");
var _direct = require("./direct");
function initApplication() {
    console.log("Init application");
    /**
     * @var {HTMLCanvasElement}
     */ const canvas = (0, _getElement.getElement)("#image_canvas");
    const container = (0, _getElement.getElement)("#container");
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    let application;
    if (canvas.transferControlToOffscreen) {
        console.log("Render in worker");
        application = new (0, _worker.WorkerApplication)(canvas);
    } else {
        // There is no support for offscreen render
        console.log("Render in main thread");
        application = new (0, _direct.DirectApplication)(canvas);
    }
    const buttonLoadScene1 = (0, _getElement.getElement)("#scene1");
    const buttonLoadScene2 = (0, _getElement.getElement)("#scene2");
    const buttonLoadScene3 = (0, _getElement.getElement)("#scene3");
    buttonLoadScene1.addEventListener("click", (e)=>{
        e.preventDefault();
        application.loadScene("scene1");
    });
    buttonLoadScene2.addEventListener("click", (e)=>{
        e.preventDefault();
        application.loadScene("scene2");
    });
    buttonLoadScene3.addEventListener("click", (e)=>{
        e.preventDefault();
        application.loadScene("scene3");
    });
}
(0, _onReady.onReady)(initApplication);

},{"../utils/onReady":"8DDHo","../utils/getElement":"asMcw","./worker":"169dr","./direct":"BtOcs"}],"8DDHo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calls function when webpage is ready
 * @param {function} callback
 */ parcelHelpers.export(exports, "onReady", ()=>onReady);
const DOCUMENT_STATE_LOADING = "loading";
function onReady(callback) {
    if (document.readyState !== DOCUMENT_STATE_LOADING) callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"asMcw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementNotFound", ()=>ElementNotFound);
parcelHelpers.export(exports, "getElement", ()=>getElement);
class ElementNotFound extends Error {
}
function getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) throw new ElementNotFound(selector);
    return element;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"169dr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WorkerApplication", ()=>WorkerApplication);
var _input = require("./input");
var _messages = require("./messages");
var _workerWorkaroundJs = require("./workerWorkaround.js");
var _baseEngine = require("../engine/baseEngine");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var WorkerApplication = /** @class */ function(_super) {
    __extends(WorkerApplication, _super);
    function WorkerApplication(canvas) {
        var _this = _super.call(this) || this;
        _this.sendUserInputEvent = function(event) {
            _this.worker.postMessage(new (0, _messages.MessageUserInput)(event));
        };
        _this.sendEngineEvent = function(event) {
            _this.worker.postMessage(new (0, _messages.MessageEngineEvent)(event));
        };
        _this.worker = (0, _workerWorkaroundJs.createWorker)();
        var offscreen = canvas.transferControlToOffscreen();
        _this.worker.postMessage(new (0, _messages.MessageInit)(offscreen), [
            offscreen
        ]);
        _this.userInput = new (0, _input.UserInput)(canvas);
        _this.userInput.addHandler(_this.sendUserInputEvent);
        return _this;
    }
    return WorkerApplication;
}((0, _baseEngine.BaseEngine));

},{"./input":"d2HoK","./messages":"8r34k","./workerWorkaround.js":"9q0ah","../engine/baseEngine":"fCHiv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2HoK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserInput", ()=>UserInput);
var UserInput = /** @class */ function() {
    function UserInput(canvas) {
        var _this = this;
        this.keyPress = function(browserEvent) {
            var event = {
                keyPressed: browserEvent.key
            };
            _this.processEvent(event);
        };
        this.mouseEnter = function(browserEvent) {
            var event = _this.createMouseEvent(browserEvent);
            _this.processEvent(event);
        };
        this.mouseLeave = function(browserEvent) {
            var event = _this.createMouseEvent(browserEvent);
            _this.processEvent(event);
        };
        this.mouseMove = function(browserEvent) {
            var event = _this.createMouseEvent(browserEvent);
            _this.processEvent(event);
        };
        this.mouseDown = function(browserEvent) {
            _this._leftButtonDown = true;
            var event = _this.createMouseEvent(browserEvent);
            _this.processEvent(event);
        };
        this.mouseUp = function(browserEvent) {
            _this._leftButtonDown = false;
            var event = _this.createMouseEvent(browserEvent);
            _this.processEvent(event);
        };
        this.click = function(browserEvent) {
            var event = _this.createMouseEvent(browserEvent);
            _this.processEvent(event);
        };
        this.touchStart = function(browserEvent) {
            browserEvent.preventDefault();
            if (browserEvent.touches.length === 0) return;
            _this._leftButtonDown = true;
            var touch = browserEvent.touches.item(0);
            var event = {
                screenX: touch.pageX,
                screenY: touch.pageY,
                dx: 0,
                dy: 0,
                leftButtonDown: _this._leftButtonDown
            };
            _this.processEvent(event);
        };
        this.touchMove = function(browserEvent) {
            browserEvent.preventDefault();
            var event = _this.createTouchEvent(browserEvent);
            if (event) _this.processEvent(event);
        };
        this.touchEnd = function(browserEvent) {
            browserEvent.preventDefault();
            _this._leftButtonDown = false;
            var event = _this.createTouchEndEvent();
            if (event) _this.processEvent(event);
        };
        this.touchCancel = function(browserEvent) {
            browserEvent.preventDefault();
            _this._leftButtonDown = false;
            var event = _this.createTouchEndEvent();
            if (event) _this.processEvent(event);
        };
        this._canvas = canvas;
        this._handlers = new Set();
        this._leftButtonDown = false;
        this.addHandlers();
    }
    UserInput.prototype.addHandlers = function() {
        this._canvas.addEventListener("mouseenter", this.mouseEnter);
        this._canvas.addEventListener("mouseleave", this.mouseLeave);
        this._canvas.addEventListener("mousemove", this.mouseMove);
        this._canvas.addEventListener("mousedown", this.mouseDown);
        this._canvas.addEventListener("mouseup", this.mouseUp);
        this._canvas.addEventListener("click", this.click);
        // Touch events
        this._canvas.addEventListener("touchstart", this.touchStart, {
            passive: false
        });
        this._canvas.addEventListener("touchmove", this.touchMove, {
            passive: false
        });
        this._canvas.addEventListener("touchcancel", this.touchCancel, {
            passive: false
        });
        this._canvas.addEventListener("touchend", this.touchEnd, {
            passive: false
        });
        // Keyboard events
        document.addEventListener("keypress", this.keyPress);
    };
    UserInput.prototype.removeHandlers = function() {
        document.removeEventListener("keypress", this.keyPress);
    };
    UserInput.prototype.processEvent = function(event) {
        this._handlers.forEach(function(callback) {
            callback(event);
        });
        this._oldX = event.screenX;
        this._oldY = event.screenY;
    };
    UserInput.prototype.addHandler = function(callback) {
        this._handlers.add(callback);
    };
    UserInput.prototype.removeHandler = function(callback) {
        if (this._handlers.has(callback)) this._handlers.delete(callback);
    };
    UserInput.prototype.createMouseEvent = function(browserEvent) {
        return {
            screenX: browserEvent.offsetX,
            screenY: browserEvent.offsetY,
            dx: -this._oldX + browserEvent.offsetX,
            dy: -this._oldY + browserEvent.offsetY,
            leftButtonDown: this._leftButtonDown
        };
    };
    UserInput.prototype.createTouchEvent = function(browserEvent) {
        var touch = browserEvent.touches.item(0);
        return {
            screenX: touch.pageX,
            screenY: touch.pageY,
            dx: -this._oldX + touch.pageX,
            dy: -this._oldY + touch.pageY,
            leftButtonDown: this._leftButtonDown
        };
    };
    UserInput.prototype.createTouchEndEvent = function() {
        return {
            screenX: this._oldX,
            screenY: this._oldY,
            dx: 0,
            dy: 0,
            leftButtonDown: this._leftButtonDown
        };
    };
    return UserInput;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8r34k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageType", ()=>MessageType);
parcelHelpers.export(exports, "MessageEvent", ()=>MessageEvent);
parcelHelpers.export(exports, "MessageInit", ()=>MessageInit);
parcelHelpers.export(exports, "MessageUserInput", ()=>MessageUserInput);
parcelHelpers.export(exports, "MessageEngineEvent", ()=>MessageEngineEvent);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var MessageType;
(function(MessageType) {
    MessageType[MessageType["MessageNone"] = 0] = "MessageNone";
    MessageType[MessageType["MessageInit"] = 1] = "MessageInit";
    MessageType[MessageType["MessageUserInput"] = 2] = "MessageUserInput";
    MessageType[MessageType["MessageEngineEvent"] = 3] = "MessageEngineEvent";
})(MessageType || (MessageType = {}));
var MessageEvent = /** @class */ function() {
    function MessageEvent() {
        this.type = MessageType.MessageNone;
    }
    return MessageEvent;
}();
var MessageInit = /** @class */ function(_super) {
    __extends(MessageInit, _super);
    function MessageInit(canvas) {
        var _this = _super.call(this) || this;
        _this.type = MessageType.MessageInit;
        _this.canvas = canvas;
        return _this;
    }
    return MessageInit;
}(MessageEvent);
var MessageUserInput = /** @class */ function(_super) {
    __extends(MessageUserInput, _super);
    function MessageUserInput(event) {
        var _this = _super.call(this) || this;
        _this.type = MessageType.MessageUserInput;
        _this.event = event;
        return _this;
    }
    return MessageUserInput;
}(MessageEvent);
var MessageEngineEvent = /** @class */ function(_super) {
    __extends(MessageEngineEvent, _super);
    function MessageEngineEvent(event) {
        var _this = _super.call(this) || this;
        _this.type = MessageType.MessageEngineEvent;
        _this.event = event;
        return _this;
    }
    return MessageEngineEvent;
}(MessageEvent);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9q0ah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createWorker", ()=>createWorker);
function createWorker() {
    return new Worker(require("68aa42cabbc06689"));
}

},{"68aa42cabbc06689":"iMywV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMywV":[function(require,module,exports) {
let workerURL = require("c8a0c995d1758967");
let bundleURL = require("1e03b1134d778e2f");
let url = bundleURL.getBundleURL("cYOr9") + "main.8e789c37.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"c8a0c995d1758967":"cn2gM","1e03b1134d778e2f":"lgJ39"}],"cn2gM":[function(require,module,exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? "import " + JSON.stringify(workerUrl) + ";" : "importScripts(" + JSON.stringify(workerUrl) + ");";
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: "application/javascript"
        }));
    }
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fCHiv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseEngine", ()=>BaseEngine);
var BaseEngine = /** @class */ function() {
    function BaseEngine() {}
    BaseEngine.prototype.loadScene = function(sceneName) {
        var event = {
            scene: sceneName
        };
        this.sendEngineEvent(event);
    };
    return BaseEngine;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BtOcs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectApplication", ()=>DirectApplication);
var _render = require("../render");
var _input = require("./input");
var _baseEngine = require("../engine/baseEngine");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var DirectApplication = /** @class */ function(_super) {
    __extends(DirectApplication, _super);
    function DirectApplication(canvas) {
        var _this = _super.call(this) || this;
        _this.sendUserInputEvent = function(event) {
            _this.render.processUserInput(event);
        };
        _this.sendEngineEvent = function(event) {
            _this.render.processEngineEvent(event);
        };
        _this.render = new (0, _render.Render)(canvas);
        _this.render.start();
        _this.userInput = new (0, _input.UserInput)(canvas);
        _this.userInput.addHandler(_this.sendUserInputEvent);
        return _this;
    }
    return DirectApplication;
}((0, _baseEngine.BaseEngine));

},{"../render":"63F0y","./input":"d2HoK","../engine/baseEngine":"fCHiv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63F0y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Render", ()=>Render);
var _vec2 = require("./vector/vec2");
var _solver = require("./solver");
var _frame = require("./items/frame");
var _all = require("./scenes/all");
var _stats = require("./stats");
var Render = /** @class */ function() {
    function Render(canvas) {
        var _this = this;
        /**
         * List of balls
         * @type {RenderableObject[]}
         */ this.objects = [];
        /**
         * @type {Constrain}
         */ this._constrains = null;
        /**
         * Solver for physics
         * @type {Solver}
         */ this.solver = null;
        this.flagRenderGrid = false;
        this.flagRenderPreviousPosition = false;
        this.nextFrame = function(time) {
            _this.step = time - _this.timeRenderEnd;
            if (_this.step < 0) _this.step = 0;
            _this.tick();
            _this.timeRenderEnd = time;
            self.requestAnimationFrame(_this.nextFrame);
        };
        this.nextInterval = function() {
            _this.timeRenderStart = performance.now();
            _this.step = _this.timeRenderStart - _this.timeRenderEnd;
            if (_this.step < 0) _this.step = 0;
            _this.tick();
            _this.timeRenderEnd = performance.now();
        };
        this.stats = new (0, _stats.Stats)();
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.timeRenderStart = performance.now();
        this.timeRenderEnd = performance.now();
        this.step = 0;
        /**
         * @type {RenderableObject[]}
         */ this.objects = [];
        this.items = [];
        this.solver = null;
        this.configure();
    }
    Render.prototype.reset = function() {
        this.objects = [];
        this.items = [];
        this.solver.reset();
    };
    Render.prototype.configure = function() {
        this.solver = new (0, _solver.Solver)(new (0, _vec2.Vec2)(this.canvas.width, this.canvas.height), this.stats);
        this.context.font = "10px serif";
        this.loadScene("scene3");
    };
    Render.prototype.processUserInput = function(event) {
        var keyboardEvent = event;
        if (keyboardEvent.keyPressed === "g") this.flagRenderGrid = !this.flagRenderGrid;
        if (keyboardEvent.keyPressed === "p") this.flagRenderPreviousPosition = !this.flagRenderPreviousPosition;
        this.scene.processUserInput(event);
    };
    Render.prototype.processEngineEvent = function(event) {
        var loadSceneEvent = event;
        if (loadSceneEvent.scene) this.loadScene(loadSceneEvent.scene);
    };
    Render.prototype.loadScene = function(sceneName) {
        this.reset();
        var Scene = (0, _all.ENGINE_SCENES)[sceneName];
        this.scene = new Scene(this);
    };
    /**
     * @param {RenderableObject} obj
     */ Render.prototype.addObject = function(obj) {
        this.objects.push(obj);
        this.solver.addObject(obj.ballsObject);
    };
    Render.prototype.update = function(time) {
        this.solver.update(time);
    };
    Render.prototype.tick = function() {
        if (this.step < 0) this.step = 0;
        var timePassed = this.step / 1000;
        this.scene.tick(timePassed);
        this.update(timePassed);
        this.clear();
        this.renderItems();
        if (this.flagRenderGrid) this.renderGrid();
        if (this.flagRenderPreviousPosition) this.renderPreviousPosition();
        this.printFPS();
        this.stats.resetTick();
        (0, _vec2.Vec2).lengthCallsCount = 0;
        (0, _vec2.Vec2).length2CallsCount = 0;
    };
    Render.prototype.renderItems = function() {
        this.items.forEach(function(item) {
            return item.render();
        });
        this.objects.forEach(function(obj) {
            return obj.render();
        });
    };
    Render.prototype.printText = function(text, x, y) {
        this.context.fillStyle = "#ffffff";
        this.context.textAlign = "start";
        this.context.fillText(text, x, y);
    };
    Render.prototype.printFPS = function() {
        var _this = this;
        this.context.fillStyle = "rgba(0,0,0,0.1)";
        this.context.fillRect(0, 0, 100, 60);
        this.printText("".concat(Math.round(this.step), " ms / ").concat(Math.round(1000 / this.step), " FPS"), 0, 10);
        this.printText("Length calls: ".concat((0, _vec2.Vec2).lengthCallsCount), 0, 20);
        this.printText("Lenght2 calls: ".concat((0, _vec2.Vec2).length2CallsCount), 0, 30);
        this.printText("Objects: ".concat(this.objects.length), 0, 40);
        this.printText("Compares per object: ".concat(Math.round((0, _vec2.Vec2).lengthCallsCount / this.objects.length)), 0, 50);
        var stats = this.stats.getTickData();
        stats.forEach(function(item, index) {
            _this.printText("".concat(item.key, ": ").concat(item.value), 0, index * 10 + 60);
        });
    };
    Render.prototype.clear = function() {
        this.context.fillStyle = "rgba(0, 0, 0, 0.9)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Render.prototype.start = function() {
        if (self.requestAnimationFrame) self.requestAnimationFrame(this.nextFrame);
        else setInterval(this.nextInterval, 16);
    };
    Render.prototype.renderGrid = function() {
        var _this = this;
        this.solver.collisionGrid.forEach(function(column, row, cell, index) {
            var cellPosition = new (0, _vec2.Vec2)(column * _this.solver.cellSize.x, row * _this.solver.cellSize.y);
            var rect = new (0, _frame.Frame)(_this.context, cellPosition, _this.solver.cellSize.diff(new (0, _vec2.Vec2)(5, 5)), cell.count > 0 ? "#ff0000" : "#00ff00");
            if (cell.highlight) _this.context.lineWidth = 10;
            rect.render();
            _this.context.lineWidth = 1;
            _this.printText(index, cellPosition.x + _this.solver.cellSize.x / 2, cellPosition.y + _this.solver.cellSize.y / 2);
        });
    };
    Render.prototype.renderPreviousPosition = function() {
        var _this = this;
        this.objects.forEach(function(renderableObject) {
            var position = renderableObject.ballsObject.previousPosition;
            _this.context.fillStyle = "rgba(0, 0, 255, 0.5)";
            _this.context.beginPath();
            _this.context.arc(position.x, position.y, 10, 0, 2 * Math.PI);
            _this.context.fill();
        });
    };
    Object.defineProperty(Render.prototype, "constrain", {
        get: function() {
            return this._constrains;
        },
        set: function(constrain) {
            this._constrains = constrain;
            this.solver.constrains = this._constrains;
        },
        enumerable: false,
        configurable: true
    });
    return Render;
}();

},{"./vector/vec2":"bp79Y","./solver":"bO5bv","./items/frame":"axM1A","./scenes/all":"bqCRd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./stats":"8G7on"}],"bp79Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2", ()=>Vec2);
var _vec2Math = require("./vec2Math");
var _math = require("./math");
var _exceptions = require("./exceptions");
var Vec2 = /** @class */ function() {
    function Vec2(x, y, l) {
        this._x = 0;
        this._y = 0;
        this._length = null;
        this._length2 = null;
        this._x = x;
        this._y = y;
        if (l) {
            this._length = l;
            this._length2 = l * l;
        }
    }
    Object.defineProperty(Vec2.prototype, "x", {
        get: function() {
            return this._x;
        },
        set: function(x) {
            this._x = x;
            this._length = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "y", {
        get: function() {
            return this._y;
        },
        set: function(y) {
            this._y = y;
            this._length = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "length", {
        get: function() {
            if (this._length === null) {
                this._length = Math.sqrt(this.x * this.x + this.y * this.y);
                Vec2.lengthCallsCount++;
            }
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "length2", {
        /**
         * Returns length^2
         */ get: function() {
            if (this._length2 === null) {
                this._length2 = this._x * this._x + this._y * this._y;
                Vec2.length2CallsCount++;
            }
            return this._length2;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds vec2 to current vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ Vec2.prototype.addSelf = function(vec2) {
        this._x += vec2.x;
        this._y += vec2.y;
        this._length = null;
        return this;
    };
    /**
     * Subtract from current vector given vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ Vec2.prototype.subSelf = function(vec2) {
        this._x -= vec2.x;
        this._y -= vec2.y;
        this._length = null;
        return this;
    };
    /**
     * Flips along X axis
     * @returns {Vec2}
     */ Vec2.prototype.flipYSelf = function() {
        this._y = -this._y;
        return this;
    };
    /**
     * Flips along Y axis
     * @returns {Vec2}
     */ Vec2.prototype.flipXSelf = function() {
        this._x = -this._x;
        return this;
    };
    Vec2.prototype.flipSelf = function() {
        this._x = -this._x;
        this._y = -this._y;
        return this;
    };
    /**
     * Checks if this vector equals given vector using global MATH_ERROR const
     * @param vec2
     */ Vec2.prototype.equals = function(vec2) {
        return (0, _vec2Math.Vec2Math).distance2(this, vec2) < (0, _math.MATH_ERROR2);
    };
    /**
     * Sums current vector and given vector and returns new vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ Vec2.prototype.sum = function(vec2) {
        return new Vec2(this.x + vec2.x, this.y + vec2.y);
    };
    /**
     * Calculate difference between current vector and given vector and returns
     * new vector
     *
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ Vec2.prototype.diff = function(vec2) {
        return new Vec2(this.x - vec2.x, this.y - vec2.y);
    };
    /**
     * Multiplicates vector by number
     * @param {number} value
     * @returns {Vec2}
     */ Vec2.prototype.mul = function(value) {
        return new Vec2(this.x * value, this.y * value);
    };
    Vec2.prototype.copy = function() {
        return new Vec2(this.x, this.y);
    };
    Vec2.prototype.applySelf = function(callback) {
        this.x = callback(this.x);
        this.y = callback(this.y);
        return this;
    };
    /**
     * Checks if this vector inside rect created by 2 other vectors.
     * @param vec1
     * @param vec2
     */ Vec2.prototype.isInsideRect = function(vec1, vec2) {
        var leftTopX = Math.min(vec1.x, vec2.x);
        var leftTopY = Math.min(vec1.y, vec2.y);
        var rightBottomX = Math.max(vec1.x, vec2.x);
        var rightBottomY = Math.max(vec1.y, vec2.y);
        return this._x >= leftTopX && this._x <= rightBottomX && this._y >= leftTopY && this._y <= rightBottomY;
    };
    Object.defineProperty(Vec2.prototype, "ort", {
        /**
         * Returns normalized vector
         * @returns {Vec2}
         */ get: function() {
            var l = this.length;
            return new Vec2(this.x / l, this.y / l, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "perpendicular", {
        get: function() {
            if (this.x === 0) {
                // Vertical
                if (this.y > 0) return Vec2.Horizontal().ort;
                else if (this.y < 0) return Vec2.Horizontal().ort.flipSelf();
                else throw new (0, _exceptions.Vec2ExceptionNoPerpendicularVectorToZeroVector)();
            } else if (this.y === 0) {
                // Horizontal
                if (this.x > 0) return Vec2.Vertical().ort;
                else if (this.x < 0) return Vec2.Vertical().ort.flipSelf();
            }
            return new Vec2(-this.y / this.x, 1).ort;
        },
        enumerable: false,
        configurable: true
    });
    Vec2.Zero = function() {
        return new Vec2(0, 0);
    };
    Vec2.Horizontal = function() {
        return new Vec2(1, 0);
    };
    Vec2.Vertical = function() {
        return new Vec2(0, 1);
    };
    Vec2.Down = function(y) {
        return new Vec2(0, y);
    };
    Vec2.Right = function(x) {
        return new Vec2(x, 0);
    };
    Vec2.lengthCallsCount = 0;
    Vec2.length2CallsCount = 0;
    return Vec2;
}();

},{"./vec2Math":"nZL8C","./math":"fX8MB","./exceptions":"68SyS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nZL8C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Math", ()=>Vec2Math);
var _vec2 = require("./vec2");
var _exceptions = require("./exceptions");
var Vec2Math = /** @class */ function() {
    function Vec2Math() {}
    Vec2Math.diff = function(vec1, vec2) {
        return new (0, _vec2.Vec2)(vec1.x - vec2.x, vec1.y - vec2.y);
    };
    Vec2Math.mul = function(vec1, scalar) {
        return new (0, _vec2.Vec2)(vec1.x * scalar, vec1.y * scalar);
    };
    /**
     * Calculates distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */ Vec2Math.distance = function(vec1, vec2) {
        return Vec2Math.diff(vec1, vec2).length;
    };
    /**
     * Calculates square of distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */ Vec2Math.distance2 = function(vec1, vec2) {
        return Vec2Math.diff(vec1, vec2).length2;
    };
    /**
     * Finds intersection between 2 lines
     * @param {Vec2Line} line1
     * @param {Vec2Line} line2
     * @returns {Vec2}
     */ Vec2Math.intersect = function(line1, line2) {
        if (line1.K === line2.K) throw new (0, _exceptions.Vec2ExceptionParallel)();
        if (isNaN(line1.K) || isNaN(line2.K)) {
            // One of two lines is vertical
            if (isNaN(line1.K)) return line2.makeVec2FromX(line1._vec1.x);
            else return line1.makeVec2FromX(line2._vec1.x);
        } else {
            var x = (line1.B - line2.B) / (line2.K - line1.K);
            return line1.makeVec2FromX(x);
        }
    };
    /**
     * Dot product of 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */ Vec2Math.dot = function(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    };
    /**
     *
     * @param {Vec2} vec
     * @param {Vec2Line} line
     * @returns {Vec2}
     */ Vec2Math.mirror = function(vec, line) {
        var normal = line.direction.perpendicular;
        return vec.diff(normal.mul(2 * Vec2Math.dot(vec, normal)));
    };
    Vec2Math.scale = function(vec1, vec2) {
        return new (0, _vec2.Vec2)(vec1.x / vec2.x, vec1.y / vec2.y);
    };
    return Vec2Math;
}();

},{"./vec2":"bp79Y","./exceptions":"68SyS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68SyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Exception", ()=>Vec2Exception);
parcelHelpers.export(exports, "Vec2ExceptionParallel", ()=>Vec2ExceptionParallel);
parcelHelpers.export(exports, "Vec2ExceptionNoPerpendicularVectorToZeroVector", ()=>Vec2ExceptionNoPerpendicularVectorToZeroVector);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var Vec2Exception = /** @class */ function(_super) {
    __extends(Vec2Exception, _super);
    function Vec2Exception() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vec2Exception;
}(Error);
var Vec2ExceptionParallel = /** @class */ function(_super) {
    __extends(Vec2ExceptionParallel, _super);
    function Vec2ExceptionParallel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vec2ExceptionParallel;
}(Vec2Exception);
var Vec2ExceptionNoPerpendicularVectorToZeroVector = /** @class */ function(_super) {
    __extends(Vec2ExceptionNoPerpendicularVectorToZeroVector, _super);
    function Vec2ExceptionNoPerpendicularVectorToZeroVector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vec2ExceptionNoPerpendicularVectorToZeroVector;
}(Vec2Exception);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fX8MB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MATH_ERROR", ()=>MATH_ERROR);
parcelHelpers.export(exports, "MATH_ERROR2", ()=>MATH_ERROR2);
parcelHelpers.export(exports, "SQRT2", ()=>SQRT2);
/**
 * Checks if a equals b with given error
 * @param {number} a
 * @param {number} b
 * @param {number} error
 * @returns {boolean}
 */ parcelHelpers.export(exports, "isEqual", ()=>isEqual);
var MATH_ERROR = 0.000001;
var MATH_ERROR2 = MATH_ERROR * MATH_ERROR;
var SQRT2 = Math.sqrt(2);
function isEqual(a, b, error) {
    return Math.abs(a - b) < error;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bO5bv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Solver", ()=>Solver);
var _vec2 = require("./vector/vec2");
var _grid = require("./grid");
var Solver = /** @class */ function() {
    function Solver(worldSize, stats) {
        this.objects = [];
        this.constrains = null;
        this.gravity = (0, _vec2.Vec2).Zero();
        this.subSteps = 4;
        this.useFixedTime = true;
        this.stats = stats;
        this.objects = [];
        this.worldSize = worldSize.copy();
        this.configure();
    }
    Solver.prototype.reset = function() {
        this.objects = [];
        this.collisionGrid.clear();
    };
    Solver.prototype.configure = function() {
        this.gravity = new (0, _vec2.Vec2)(0, 100);
        this.useFixedTime = true;
        this.step = 0.017 / this.subSteps;
        var cellSize = 16;
        var gridX = Math.round(this.worldSize.x / cellSize);
        var gridY = Math.round(this.worldSize.y / cellSize);
        this.cellSize = new (0, _vec2.Vec2)(this.worldSize.x / gridX, this.worldSize.y / gridY);
        this.collisionGrid = new (0, _grid.CollisionGrid)(gridX, gridY, this.cellSize);
    };
    /**
     *
     * @param {BallsObject} obj
     */ Solver.prototype.addObject = function(obj) {
        this.objects.push(obj);
    };
    /**
     * Update the simulation by given step.
     * @param {number} time amount of seconds passed since last update.
     */ Solver.prototype.update = function(time) {
        var subTime = this.useFixedTime ? this.step : time / this.subSteps;
        for(var i = 0; i < this.subSteps; i++){
            this.addObjectsToGrid();
            this.processCollisions();
            this.applyGravity();
            this.updateObjects(subTime);
            this.applyConstrains();
        }
    };
    Solver.prototype.addObjectsToGrid = function() {
        var _this = this;
        this.collisionGrid.clear();
        this.objects.forEach(function(obj, index) {
            obj.addToGrid(_this.collisionGrid);
        });
    };
    /**
     * Update objects state
     * @param {number} time amount of seconds passed since last update
     */ Solver.prototype.updateObjects = function(time) {
        this.objects.forEach(function(obj) {
            return obj.update(time);
        });
    };
    Solver.prototype.applyGravity = function() {
        var _this = this;
        this.objects.forEach(function(obj) {
            return obj.accelerate(_this.gravity);
        });
    };
    Solver.prototype.applyConstrains = function() {
        var _this = this;
        this.objects.forEach(function(obj) {
            return _this.constrains.applyConstrain(obj);
        });
    };
    Solver.prototype.processCollisionsInCell = function(objA, cell) {
        this.stats.addStats("processCollisionsInCell.calls", 1);
        cell.objects.forEach(function(objB) {
            if (objA === objB) return;
            if (objA.immovable && objB.immovable) return;
            objA.collide(objB);
        });
    };
    Solver.prototype.processCell = function(index) {
        var _this = this;
        this.stats.addStats("processCell.calls", 1);
        var currentCell = this.collisionGrid.cells[index];
        currentCell.objects.forEach(function(objA) {
            _this.collisionGrid.adjacentCells[index].forEach(function(cell) {
                if (cell === currentCell && cell.objects.length === 1) return; // We don't need to check collisions if I'm only object in cell
                _this.processCollisionsInCell(objA, cell);
            });
        });
    };
    Solver.prototype.processCollisions = function() {
        for(var index = 0; index < this.collisionGrid.size; index++)this.processCell(index);
    };
    return Solver;
}();
function makeKey(obj1, obj2) {
    return [
        obj1.index,
        obj2.index
    ].sort().join("-");
}

},{"./vector/vec2":"bp79Y","./grid":"jLINM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLINM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionCell", ()=>CollisionCell);
parcelHelpers.export(exports, "CollisionGrid", ()=>CollisionGrid);
var _vec2 = require("./vector/vec2");
var _vec2Math = require("./vector/vec2Math");
var CollisionCell = /** @class */ function() {
    function CollisionCell() {
        this.objects = [];
        this.highlight = false;
    }
    CollisionCell.prototype.addObject = function(obj) {
        if (this.objects.length >= CollisionCell.MAX_OBJECT_IN_CELL) return;
        this.objects.push(obj);
    };
    CollisionCell.prototype.clear = function() {
        this.objects = [];
        this.highlight = false;
    };
    CollisionCell.prototype.remove = function(index) {
        var objectIndex = this.objects.findIndex(function(obj) {
            return obj.index === index;
        });
        if (objectIndex !== -1) this.objects.splice(objectIndex, 1);
    };
    Object.defineProperty(CollisionCell.prototype, "count", {
        get: function() {
            return this.objects.length;
        },
        enumerable: false,
        configurable: true
    });
    CollisionCell.MAX_OBJECT_IN_CELL = 100;
    return CollisionCell;
}();
var CollisionGrid = /** @class */ function() {
    function CollisionGrid(width, height, cellSize) {
        this.cells = [];
        this.index2xy = [];
        this.adjacentCells = [];
        this._width = width;
        this._height = height;
        this.cellSize = cellSize;
        this.resize();
    }
    Object.defineProperty(CollisionGrid.prototype, "size", {
        get: function() {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollisionGrid.prototype, "width", {
        get: function() {
            return this._width;
        },
        set: function(w) {
            this._width = w;
            this.resize();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollisionGrid.prototype, "height", {
        get: function() {
            return this._height;
        },
        set: function(h) {
            this._height = h;
            this.resize();
        },
        enumerable: false,
        configurable: true
    });
    CollisionGrid.prototype.recalculateIndex2xy = function() {
        this.index2xy = [];
        for(var i = 0; i < this._size; i++)this.index2xy.push(this.makeVecFromIndex(i));
    };
    /**
     * Calculate cache of collision cells
     */ CollisionGrid.prototype.recalculateCollisionCells = function() {
        var _this = this;
        this.adjacentCells = [];
        this.cells.forEach(function(cell, index) {
            var pos = _this.getVecFromIndex(index);
            var cells = [];
            cells.push(cell); // Add self
            if (pos.y > 0) cells.push(_this.cells[_this.makeIndexFromCoord(pos.x, pos.y - 1)]); //TOP
            if (pos.y + 1 < _this._height) cells.push(_this.cells[_this.makeIndexFromCoord(pos.x, pos.y + 1)]); //BOTTOM
            if (pos.x > 0) {
                if (pos.y > 0) cells.push(_this.cells[_this.makeIndexFromCoord(pos.x - 1, pos.y - 1)]); //LEFT TOP
                cells.push(_this.cells[_this.makeIndexFromCoord(pos.x - 1, pos.y)]); //LEFT
                if (pos.y + 1 < _this._height) cells.push(_this.cells[_this.makeIndexFromCoord(pos.x - 1, pos.y + 1)]); //LEFT BOTTOM
            }
            if (pos.x + 1 < _this._width) {
                if (pos.y > 0) cells.push(_this.cells[_this.makeIndexFromCoord(pos.x + 1, pos.y - 1)]); //RIGHT TOP
                cells.push(_this.cells[_this.makeIndexFromCoord(pos.x + 1, pos.y)]); //RIGHT
                if (pos.y + 1 < _this._height) cells.push(_this.cells[_this.makeIndexFromCoord(pos.x + 1, pos.y + 1)]); //RIGHT BOTTOM
            }
            _this.adjacentCells[index] = cells;
        });
    };
    CollisionGrid.prototype.getVecFromIndex = function(index) {
        return this.index2xy[index];
    };
    CollisionGrid.prototype.resize = function() {
        this.cells = [];
        this._size = this._width * this._height;
        for(var i = 0; i < this._size; i++)this.cells.push(new CollisionCell());
        this.recalculateIndex2xy();
        this.recalculateCollisionCells();
    };
    CollisionGrid.prototype.addObject = function(worldX, worldY, obj) {
        var x = Math.trunc(worldX / this.cellSize.x);
        var y = Math.trunc(worldY / this.cellSize.y);
        var index = x * this._height + y;
        this.addObjectByIndex(index, obj);
    };
    CollisionGrid.prototype.addObjectByIndex = function(index, obj) {
        if (!isNaN(index) && index >= 0 && index < this.size) this.cells[index].addObject(obj);
    };
    CollisionGrid.prototype.makeIndexFromVec = function(vec) {
        return vec.x * this._height + vec.y;
    };
    CollisionGrid.prototype.makeIndexFromCoord = function(x, y) {
        return x * this._height + y;
    };
    CollisionGrid.prototype.makeVecFromIndex = function(index) {
        var x = Math.trunc(index / this._height);
        var y = index - x * this._height;
        return new (0, _vec2.Vec2)(x, y);
    };
    /**
     * Adds object to all cells between given coords
     * @param worldLeftTop
     * @param worldRightBottom
     * @param obj
     */ CollisionGrid.prototype.addObjectToCells = function(worldLeftTop, worldRightBottom, obj) {
        var point1 = (0, _vec2Math.Vec2Math).scale(worldLeftTop, this.cellSize).applySelf(Math.trunc);
        var point2 = (0, _vec2Math.Vec2Math).scale(worldRightBottom, this.cellSize).applySelf(Math.trunc);
        var index1 = this.makeIndexFromVec(point1);
        var index2 = this.makeIndexFromVec(point2);
        var left = Math.min(point1.x, point2.x);
        var top = Math.min(point1.y, point2.y);
        var right = Math.max(point1.x, point2.x);
        var bottom = Math.max(point1.y, point2.y);
        if (right >= this._width || left < 0 || top < 0 || bottom >= this._height) return;
        if (point1.x === point2.x) // Vertical
        for(var cellIndex = index1; cellIndex < index2; cellIndex++)this.cells[cellIndex].addObject(obj);
        else if (point1.y === point2.y) // Horizontal
        for(var cellIndex = index1; cellIndex < index2; cellIndex += this.height)this.cells[cellIndex].addObject(obj);
        else {
            var height = bottom - top;
            var startFrom = this.makeIndexFromCoord(left, top);
            for(var x = 0; x <= right - left; x++)for(var y = 0; y <= height; y++){
                var cellIndex = startFrom + this.makeIndexFromCoord(x, y);
                this.addObjectByIndex(cellIndex, obj);
            }
        }
    };
    CollisionGrid.prototype.clear = function() {
        this.cells.forEach(function(cell) {
            return cell.clear();
        });
    };
    CollisionGrid.prototype.forEach = function(callback) {
        var _this = this;
        this.cells.forEach(function(cell, index) {
            var pos = _this.getVecFromIndex(index);
            callback(pos.x, pos.y, cell, index);
        });
    };
    CollisionGrid.prototype.hasCell = function(index, dt) {
        if (index < 0 || index >= this.size) return false;
        var pos = this.getVecFromIndex(index);
        var x = pos.x;
        var y = pos.y;
        if (y <= 0 && dt < 0) // TOP CELL
        return false;
        if (y === this.height - 1 && dt > 0) // Bottom cell
        return false;
        if (x === 0 && dt < 0) // left cell
        return false;
        if (x >= this.width - 1 && dt > 0) // right cell;
        return false;
        return true;
    };
    return CollisionGrid;
}();

},{"./vector/vec2":"bp79Y","./vector/vec2Math":"nZL8C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axM1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Frame", ()=>Frame);
var _rect = require("./rect");
class Frame extends (0, _rect.Rect) {
    constructor(context, position, size, color){
        super(context, position, size, color);
    }
    render() {
        this.context.strokeStyle = this.color;
        this.context.strokeRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    queue() {}
}

},{"./rect":"7RmsO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7RmsO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rect", ()=>Rect);
var _item = require("./item");
var _vec2 = require("../vector/vec2");
class Rect extends (0, _item.Item) {
    size = (0, _vec2.Vec2).Zero();
    color = "#00ff00";
    constructor(context, position, size, color){
        super(context, position);
        this.size = size;
        if (color) this.color = color;
    }
    render() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.position.x + this.size.x, this.position.y + this.size.y);
    }
}

},{"./item":"62t5i","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62t5i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item);
var _vec2 = require("../vector/vec2");
var Item = /** @class */ function() {
    function Item(context, position) {
        this.position = (0, _vec2.Vec2).Zero();
        this.context = context;
        this.position = position;
    }
    /**
     * Method immediately renders object on context
     */ Item.prototype.render = function() {};
    /**
     * Method tries to put object in render block
     */ Item.prototype.queue = function() {};
    return Item;
}();

},{"../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqCRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ENGINE_SCENES", ()=>ENGINE_SCENES);
var _scene1 = require("./scene1");
var _scene2 = require("./scene2");
var _scene3 = require("./scene3");
var ENGINE_SCENES = {
    "scene1": (0, _scene1.Scene1),
    "scene2": (0, _scene2.Scene2),
    "scene3": (0, _scene3.Scene3)
};

},{"./scene1":"lS7PG","./scene2":"8vIhi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./scene3":"ajxWT"}],"lS7PG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scene1", ()=>Scene1);
var _baseScene = require("./baseScene");
var _totalObjectsGenerator = require("../generators/totalObjectsGenerator");
var _circle = require("../items/circle");
var _vec2 = require("../vector/vec2");
var _vec2Math = require("../vector/vec2Math");
var _ball = require("../objects/ball");
var _object = require("../renderableObjects/object");
var _immovableBall = require("../objects/immovableBall");
var _immovableLine = require("../renderableObjects/immovableLine");
var _immovableLine1 = require("../objects/immovableLine");
var _line = require("../items/line");
var _circleWithText = require("../items/circleWithText");
var _index2Color = require("../items/utils/index2color");
var _viewport = require("../constrains/viewport");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var milkShakePoints = [
    new (0, _vec2.Vec2)(0, 0),
    new (0, _vec2.Vec2)(70, 380),
    new (0, _vec2.Vec2)(270, 380),
    new (0, _vec2.Vec2)(340, 0)
];
var milkShakeLines = [
    [
        milkShakePoints[0],
        (0, _vec2Math.Vec2Math).diff(milkShakePoints[0], milkShakePoints[1]).flipSelf()
    ],
    [
        milkShakePoints[1],
        (0, _vec2Math.Vec2Math).diff(milkShakePoints[1], milkShakePoints[2]).flipSelf()
    ],
    [
        milkShakePoints[2],
        (0, _vec2Math.Vec2Math).diff(milkShakePoints[2], milkShakePoints[3]).flipSelf()
    ]
];
var ballsColors = {
    57: "#ffffff",
    78: "#ffffff",
    71: "#ffffff",
    86: "#ffffff",
    200: "#ffffff",
    202: "#ffffff",
    218: "#ffffff"
};
var Scene1 = /** @class */ function(_super) {
    __extends(Scene1, _super);
    function Scene1(engine) {
        var _this = _super.call(this, engine) || this;
        _this.canMoveRedObject = false;
        var canvasCenter = new (0, _vec2.Vec2)(_this.engine.canvas.width / 2, _this.engine.canvas.height / 2);
        _this.generator = _this.createBallsGenerator(canvasCenter, new (0, _vec2.Vec2)(300, 300), new (0, _vec2.Vec2)(2, -2));
        _this.createBottomBouncyLine();
        _this.createMilkShake(canvasCenter);
        _this.createActor();
        _this.initConstrain();
        return _this;
    }
    Scene1.prototype.createBallsGenerator = function(canvasCenter, pointDelta, baseBallVelocity) {
        var _this = this;
        var ballGeneratorPoint = canvasCenter.diff(pointDelta);
        var ballVelocity = baseBallVelocity.mul(1 / this.engine.solver.subSteps);
        return new (0, _totalObjectsGenerator.TotalObjectsGenerator)(this.engine.solver, 1700, 7, function(index) {
            var obj = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint, 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(_this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(index + 200), "", "#000000"));
            var obj2 = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.sum((0, _vec2.Vec2).Down(20)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(_this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(index + 100), "", "#000000"));
            var obj3 = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.sum((0, _vec2.Vec2).Down(-20)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(_this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(index), "", "#000000"));
            var obj4 = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.sum((0, _vec2.Vec2).Right(-40)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(_this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(index - 100), "", "#000000"));
            return [
                obj,
                obj2,
                obj3,
                obj4
            ];
        });
    };
    Scene1.prototype.createBottomBouncyLine = function() {
        // Bottom bouncy line
        var bottomLine = new (0, _immovableLine1.ImmovableLineObject)(new (0, _vec2.Vec2)(0, this.engine.canvas.height - 10), new (0, _vec2.Vec2)(this.engine.canvas.width, 0));
        bottomLine.bounceValue = 1.5;
        this.engine.addObject(new (0, _immovableLine.ImmovableLineRenderableObject)(bottomLine, new (0, _line.Line)(this.engine.context, (0, _vec2.Vec2).Zero(), (0, _vec2.Vec2).Zero(), "#ff0000")));
    };
    Scene1.prototype.createMilkShake = function(canvasCenter) {
        var _this = this;
        milkShakeLines.forEach(function(line) {
            _this.engine.addObject(new (0, _immovableLine.ImmovableLineRenderableObject)(new (0, _immovableLine1.ImmovableLineObject)(line[0].sum(canvasCenter.diff(new (0, _vec2.Vec2)(170, 190))), line[1]), new (0, _line.Line)(_this.engine.context, (0, _vec2.Vec2).Zero(), (0, _vec2.Vec2).Zero(), "#ffffff")));
        });
    };
    Scene1.prototype.initConstrain = function() {
        this.engine.constrain = new (0, _viewport.ViewportConstrain)(this.engine.canvas.width, this.engine.canvas.height);
    };
    Scene1.prototype.createActor = function() {
        this.actor = new (0, _object.RenderableObject)(new (0, _immovableBall.ImmovableBallsObject)(new (0, _vec2.Vec2)(230, 50), 30), new (0, _circle.Circle)(this.engine.context, (0, _vec2.Vec2).Zero(), 30, "#ff0000"));
        this.engine.addObject(this.actor);
    };
    Scene1.prototype.getActor = function() {
        return this.actor;
    };
    Scene1.prototype.tick = function(timePassed) {
        var _this = this;
        var newBalls = this.generator.getNextObjects(timePassed);
        if (newBalls) newBalls.forEach(function(ball) {
            return _this.engine.addObject(ball);
        });
    };
    Scene1.prototype.processUserInput = function(event) {
        var mouseEvent = event;
        if (mouseEvent.leftButtonDown) {
            if (this.actor.ballsObject.isPointInsideObject(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY))) this.canMoveRedObject = true;
            if (this.canMoveRedObject) this.actor.ballsObject.moveBy(new (0, _vec2.Vec2)(mouseEvent.dx, mouseEvent.dy));
        } else this.canMoveRedObject = false;
    };
    return Scene1;
}((0, _baseScene.BaseScene));

},{"./baseScene":"dRCUa","../generators/totalObjectsGenerator":"h8lsL","../items/circle":"c8cAT","../vector/vec2":"bp79Y","../vector/vec2Math":"nZL8C","../objects/ball":"5IfJk","../renderableObjects/object":"34uaH","../objects/immovableBall":"8kn5q","../renderableObjects/immovableLine":"bihaA","../objects/immovableLine":"f4D1b","../items/line":"b4RnM","../items/circleWithText":"eZiSs","../items/utils/index2color":"datdc","../constrains/viewport":"8fyh9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRCUa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseScene", ()=>BaseScene);
var BaseScene = /** @class */ function() {
    function BaseScene(engine) {
        this.engine = engine;
    }
    return BaseScene;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8lsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TotalObjectsGenerator", ()=>TotalObjectsGenerator);
var _objectsGenerator = require("./objectsGenerator");
class TotalObjectsGenerator extends (0, _objectsGenerator.ObjectsGenerator) {
    constructor(solver, count, delay, createCallback){
        super(solver);
        this.limit = count;
        this.total = 0;
        this.delay = delay;
        this.create = createCallback;
        this.lastCreateTime = 0;
    }
    getNextObjects(step) {
        if (this.total > this.limit) return [];
        this.lastCreateTime += 1;
        if (this.lastCreateTime > this.delay) {
            const newItems = this.create(this.total);
            this.lastCreateTime = 0;
            this.total += newItems.length;
            return newItems;
        }
        return [];
    }
}

},{"./objectsGenerator":"g4Anj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4Anj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectsGenerator", ()=>ObjectsGenerator);
var ObjectsGenerator = /** @class */ function() {
    function ObjectsGenerator(solver) {
        this.solver = null;
        this.solver = solver;
    }
    // TODO Make me iterator
    ObjectsGenerator.prototype.getNextObjects = function(step) {
        return [];
    };
    return ObjectsGenerator;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8cAT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>Circle);
var _item = require("./item");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var Circle = /** @class */ function(_super) {
    __extends(Circle, _super);
    function Circle(context, position, r, color) {
        var _this = _super.call(this, context, position) || this;
        _this.r = 0;
        _this.color = "#00ff00";
        if (r) _this.r = r;
        if (color) _this.color = color;
        return _this;
    }
    Circle.prototype.render = function() {
        this.context.beginPath();
        this.context.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
    };
    return Circle;
}((0, _item.Item));

},{"./item":"62t5i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IfJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BallsObject", ()=>BallsObject);
var _vec2 = require("../vector/vec2");
var _vec2Line = require("../vector/vec2Line");
var _vec2Math = require("../vector/vec2Math");
var _types = require("./types");
var _collisionModels = require("./collisionModels");
var _object = require("./object");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var MAX_VELOCITY = 10;
var MAX_VELOCITY2 = Math.pow(MAX_VELOCITY, 2);
var BallsObject = /** @class */ function(_super) {
    __extends(BallsObject, _super);
    /**
     * Creates balls object
     * @param {Vec2} position
     * @param {number} [radius]
     */ function BallsObject(position, radius) {
        var _this = _super.call(this) || this;
        _this.acc = (0, _vec2.Vec2).Zero();
        _this.radius = 10;
        _this.bounceValue = 1.1;
        _this.motionReduce = 1;
        _this.type = (0, _types.SolverObjectTypes).TypeBall;
        _this.immovable = false;
        _this.previousPosition = position.copy();
        _this.currentPosition = position.copy();
        if (radius !== undefined) _this.radius = radius;
        _this._radius2 = _this.radius * _this.radius;
        return _this;
    }
    /**
     * Updates state of object
     * @param {number} step
     */ BallsObject.prototype.update = function(step) {
        var velocity = this.velocity.mul(this.motionReduce);
        if (velocity.length2 > MAX_VELOCITY2) velocity = velocity.ort.mul(MAX_VELOCITY);
        this.previousPosition = this.currentPosition.copy();
        this.currentPosition.addSelf(velocity.addSelf(this.acc.mul(step * step)));
        this.acc = (0, _vec2.Vec2).Zero();
    };
    BallsObject.prototype.accelerate = function(acc) {
        this.acc.addSelf(acc);
        return this;
    };
    BallsObject.prototype.setVelocity = function(vel) {
        this.velocity = vel;
        return this;
    };
    /**
     *
     * @param {BallsObject} obj
     */ BallsObject.prototype.collide = function(obj) {
        (0, _collisionModels.collide)(this, obj);
    };
    BallsObject.prototype.addToGrid = function(collisionGrid) {
        collisionGrid.addObject(Math.floor(this.currentPosition.x), Math.floor(this.currentPosition.y), this);
    };
    BallsObject.prototype.moveBy = function(delta) {
        this.currentPosition.addSelf(delta);
    };
    BallsObject.prototype.moveTo = function(position) {
        this.currentPosition = position.copy();
    };
    BallsObject.prototype.isPointInsideObject = function(point) {
        return (0, _vec2Math.Vec2Math).distance(this.currentPosition, point) < this.radius;
    };
    Object.defineProperty(BallsObject.prototype, "velocity", {
        get: function() {
            return (0, _vec2Math.Vec2Math).diff(this.currentPosition, this.previousPosition);
        },
        set: function(v) {
            this.previousPosition = (0, _vec2Math.Vec2Math).diff(this.currentPosition, v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BallsObject.prototype, "movementVector", {
        /**
         *
         * @returns {Vec2Line}
         */ get: function() {
            return new (0, _vec2Line.Vec2Line)(this.previousPosition, this.currentPosition);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BallsObject.prototype, "radius2", {
        get: function() {
            return this._radius2;
        },
        enumerable: false,
        configurable: true
    });
    return BallsObject;
}((0, _object.BaseSolverObject));

},{"../vector/vec2":"bp79Y","../vector/vec2Line":"k0EZw","../vector/vec2Math":"nZL8C","./types":"7Eyh2","./collisionModels":"hKRfe","./object":"66Aay","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0EZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Line", ()=>Vec2Line);
var _vec2 = require("./vec2");
var _vec2Math = require("./vec2Math");
var _math = require("./math");
var Vec2Line = /** @class */ function() {
    function Vec2Line(vec1, vec2) {
        this._vec1 = (0, _vec2.Vec2).Zero();
        this._vec2 = (0, _vec2.Vec2).Zero();
        /**
         * Y = K*X + B
         * @type {number}
         */ this._k = 0;
        this._b = 0;
        this._vec1 = vec1;
        this._vec2 = vec2;
        this._direction = (0, _vec2Math.Vec2Math).diff(this._vec1, this._vec2);
        this._length = this._direction.length;
        this._length2 = this._direction.length2;
        this._ort = this._direction.ort;
        this.calculateKB();
    }
    /**
     * Determines if given point lays on the line
     * @param vec
     * @returns {boolean}
     */ Vec2Line.prototype.inBetween = function(vec) {
        var l1 = (0, _vec2Math.Vec2Math).diff(vec, this._vec1).length;
        var l2 = (0, _vec2Math.Vec2Math).diff(this._vec2, vec).length;
        var sum = l1 + l2;
        return (0, _math.isEqual)(this._length, sum, (0, _math.MATH_ERROR));
    };
    /**
     * Checks if vector which lies on this line is in between vec1 and vec2
     * @param vec
     */ Vec2Line.prototype.inBetweenFast = function(vec) {
        return vec.isInsideRect(this._vec1, this._vec2);
    };
    Vec2Line.prototype.calculateKB = function() {
        if (this._vec1.y === this._vec2.y) {
            // Horizontal line
            this._b = this._vec1.y;
            this._k = 0;
        } else if (this._vec1.x === this._vec2.x) {
            // Vertical line
            this._b = NaN;
            this._k = NaN;
        } else {
            this._b = (this._vec1.x * this._vec2.y - this._vec1.y * this._vec2.x) / (this._vec1.x - this._vec2.x);
            this._k = (this._vec1.y - this._vec2.y) / (this._vec1.x - this._vec2.x);
        }
    };
    Vec2Line.prototype.makeVec2FromX = function(x) {
        return new (0, _vec2.Vec2)(x, this._k * x + this._b);
    };
    Vec2Line.prototype.copy = function() {
        return new Vec2Line(this._vec1, this._vec2);
    };
    Vec2Line.prototype.moveBy = function(vec) {
        this._vec1.addSelf(vec);
        this._vec2.addSelf(vec);
        this.calculateKB();
    };
    Vec2Line.prototype.getPointProjection = function(vec) {
        var a = this.direction;
        var b = (0, _vec2Math.Vec2Math).diff(vec, this._vec1);
        var cosabD = (0, _vec2Math.Vec2Math).dot(a, b) / this.length;
        return this._vec1.sum(this.ort.mul(cosabD));
    };
    Object.defineProperty(Vec2Line.prototype, "B", {
        get: function() {
            return this._b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2Line.prototype, "K", {
        get: function() {
            return this._k;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2Line.prototype, "length", {
        get: function() {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2Line.prototype, "direction", {
        get: function() {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2Line.prototype, "ort", {
        get: function() {
            return this._ort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2Line.prototype, "vec1", {
        get: function() {
            return this._vec1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2Line.prototype, "vec2", {
        get: function() {
            return this._vec2;
        },
        enumerable: false,
        configurable: true
    });
    Vec2Line.Vertical = function(x) {
        return new Vec2Line(new (0, _vec2.Vec2)(x, 0), new (0, _vec2.Vec2)(x, Number.MAX_SAFE_INTEGER));
    };
    Vec2Line.Horizontal = function(y) {
        return new Vec2Line(new (0, _vec2.Vec2)(0, y), new (0, _vec2.Vec2)(Number.MAX_SAFE_INTEGER, y));
    };
    return Vec2Line;
}();

},{"./vec2":"bp79Y","./vec2Math":"nZL8C","./math":"fX8MB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Eyh2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SolverObjectTypes", ()=>SolverObjectTypes);
var SolverObjectTypes;
(function(SolverObjectTypes) {
    SolverObjectTypes[SolverObjectTypes["TypeNull"] = 0] = "TypeNull";
    SolverObjectTypes[SolverObjectTypes["TypeBall"] = 1] = "TypeBall";
    SolverObjectTypes[SolverObjectTypes["TypeImmovableBall"] = 2] = "TypeImmovableBall";
    SolverObjectTypes[SolverObjectTypes["TypeImmovableLine"] = 3] = "TypeImmovableLine";
    SolverObjectTypes[SolverObjectTypes["TypeImmovablePolygon"] = 4] = "TypeImmovablePolygon";
})(SolverObjectTypes || (SolverObjectTypes = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKRfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Collision between 2 balls objects
 * @param {BallsObject} obj1
 * @param {BallsObject} obj2
 */ parcelHelpers.export(exports, "collideBallAndBall", ()=>collideBallAndBall);
/**
 * Collision between ball and immovable ball
 * @param {BallsObject} ball
 * @param {ImmovableBallsObject} immovable
 */ parcelHelpers.export(exports, "collideBallAndImmovableBall", ()=>collideBallAndImmovableBall);
/**
 * Collision between ball and immovable line
 * @param {BallsObject} ball
 * @param {ImmovableLineObject} line
 */ parcelHelpers.export(exports, "collideBallAndImmovableLine", ()=>collideBallAndImmovableLine);
/**
 * Collision between ball and immovable line
 * @param {BallsObject} ball
 * @param {ImmovablePolygon} polygon
 */ parcelHelpers.export(exports, "collideBallAndImmovablePolygon", ()=>collideBallAndImmovablePolygon);
parcelHelpers.export(exports, "collide", ()=>collide);
var _vec2Math = require("../vector/vec2Math");
var _types = require("./types");
function collideBallAndBall(obj1, obj2) {
    var between = (0, _vec2Math.Vec2Math).diff(obj1.currentPosition, obj2.currentPosition);
    var distance = between.length;
    var requiredDistance = obj1.radius + obj2.radius;
    if (distance < requiredDistance) {
        var normalized = between.ort;
        var delta = requiredDistance - distance;
        obj1.currentPosition.addSelf((0, _vec2Math.Vec2Math).mul(normalized, obj1.radius / requiredDistance * delta * obj1.bounceValue));
        obj2.currentPosition.subSelf((0, _vec2Math.Vec2Math).mul(normalized, obj2.radius / requiredDistance * delta * obj2.bounceValue));
    }
}
function collideBallAndImmovableBall(ball, immovable) {
    var between = (0, _vec2Math.Vec2Math).diff(ball.currentPosition, immovable.currentPosition);
    var distance = between.length;
    var requiredDistance = ball.radius + immovable.radius;
    if (distance < requiredDistance) {
        var normalized = between.ort;
        var delta = requiredDistance - distance;
        ball.currentPosition.addSelf((0, _vec2Math.Vec2Math).mul(normalized, ball.radius / requiredDistance * delta * ball.bounceValue * immovable.bounceValue));
    }
}
function _collideBallAndLine(ball, line, lineBounce) {
    try {
        var projectionPoint = line.getPointProjection(ball.currentPosition);
        // We definitely know that projection point is on the line, so we just need to check if it's
        // between the ends.
        if (line.inBetweenFast(projectionPoint)) {
            var between = (0, _vec2Math.Vec2Math).diff(projectionPoint, ball.currentPosition);
            if (between.length2 < ball.radius2) {
                var normalized = between.ort;
                var delta = ball.radius - between.length;
                ball.currentPosition.subSelf((0, _vec2Math.Vec2Math).mul(normalized, delta * ball.bounceValue * lineBounce));
            }
        }
    } catch (e) {}
}
function collideBallAndImmovableLine(ball, line) {
    _collideBallAndLine(ball, line._line, line.bounceValue);
}
function collideBallAndImmovablePolygon(ball, polygon) {
    polygon.lines.forEach(function(line) {
        return _collideBallAndLine(ball, line, polygon.bounceValue);
    });
}
function flipObjects(obj1, obj2) {
    return {
        a: obj2,
        b: obj1
    };
}
function collide(a, b) {
    var obj1 = a;
    var obj2 = b;
    if (obj1.type > obj2.type) {
        var flipped = flipObjects(obj1, obj2);
        obj1 = flipped.a;
        obj2 = flipped.b;
    }
    switch(true){
        case obj1.type === (0, _types.SolverObjectTypes).TypeBall && obj2.type === (0, _types.SolverObjectTypes).TypeBall:
            return collideBallAndBall(obj1, obj2);
        case obj1.type === (0, _types.SolverObjectTypes).TypeBall && obj2.type === (0, _types.SolverObjectTypes).TypeImmovableBall:
            return collideBallAndImmovableBall(obj1, obj2);
        case obj1.type === (0, _types.SolverObjectTypes).TypeBall && obj2.type === (0, _types.SolverObjectTypes).TypeImmovableLine:
            return collideBallAndImmovableLine(obj1, obj2);
        case obj1.type === (0, _types.SolverObjectTypes).TypeBall && obj2.type === (0, _types.SolverObjectTypes).TypeImmovablePolygon:
            return collideBallAndImmovablePolygon(obj1, obj2);
        default:
            return;
    }
}

},{"../vector/vec2Math":"nZL8C","./types":"7Eyh2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66Aay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseSolverObject", ()=>BaseSolverObject);
var _types = require("./types");
var _vec2 = require("../vector/vec2");
var BaseSolverObject = /** @class */ function() {
    function BaseSolverObject() {
        this.type = (0, _types.SolverObjectTypes).TypeNull;
        this.previousPosition = (0, _vec2.Vec2).Zero();
        this.currentPosition = (0, _vec2.Vec2).Zero();
        this.index = BaseSolverObject.index++;
    }
    BaseSolverObject.prototype.update = function(step) {};
    BaseSolverObject.prototype.accelerate = function(acc) {};
    BaseSolverObject.prototype.collide = function(obj) {};
    BaseSolverObject.prototype.addToGrid = function(collisionGrid) {};
    BaseSolverObject.index = 0;
    return BaseSolverObject;
}();

},{"./types":"7Eyh2","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34uaH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderableObject", ()=>RenderableObject);
var RenderableObject = /** @class */ function() {
    function RenderableObject(ballsObject, renderItem) {
        /**
         * @type {BallsObject}
         */ this.ballsObject = null;
        /**
         * @type {Item}
         */ this.renderItem = null;
        this.ballsObject = ballsObject;
        this.renderItem = renderItem;
    }
    RenderableObject.prototype.update = function() {
        this.renderItem.position = this.ballsObject.currentPosition;
    };
    RenderableObject.prototype.render = function() {
        this.update();
        this.renderItem.render();
    };
    return RenderableObject;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kn5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableBallsObject", ()=>ImmovableBallsObject);
var _ball = require("./ball");
var _types = require("./types");
var _math = require("../vector/math");
var _vec2 = require("../vector/vec2");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var ImmovableBallsObject = /** @class */ function(_super) {
    __extends(ImmovableBallsObject, _super);
    /**
     * @param {Vec2} position
     * @param {number} [radius]
     */ function ImmovableBallsObject(position, radius) {
        var _this = _super.call(this, position, radius) || this;
        _this.type = (0, _types.SolverObjectTypes).TypeImmovableBall;
        _this.immovable = true;
        _this.bounceValue = 0.5;
        /**
         * @type {Vec2}
         * @private
         */ _this._fixedPosition = null;
        _this._fixedPosition = position.copy();
        return _this;
    }
    ImmovableBallsObject.prototype.update = function(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
    };
    ImmovableBallsObject.prototype.addToGrid = function(collisionGrid) {
        var vec = new (0, _vec2.Vec2)(this.radius * (0, _math.SQRT2), this.radius * (0, _math.SQRT2));
        var leftTop = this.currentPosition.sum(vec);
        var rightBottom = this.currentPosition.diff(vec);
        collisionGrid.addObjectToCells(leftTop, rightBottom, this);
    };
    ImmovableBallsObject.prototype.moveTo = function(position) {
        this.currentPosition = position.copy();
        this.previousPosition = position.copy();
        this._fixedPosition = position.copy();
    };
    return ImmovableBallsObject;
}((0, _ball.BallsObject));

},{"./ball":"5IfJk","./types":"7Eyh2","../vector/math":"fX8MB","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bihaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableLineRenderableObject", ()=>ImmovableLineRenderableObject);
var _object = require("./object");
class ImmovableLineRenderableObject extends (0, _object.RenderableObject) {
    /**
     * @type {ImmovableLineObject}
     */ ballsObject = null;
    constructor(ballsObject, renderItem){
        super(ballsObject);
        this.ballsObject = ballsObject;
        this.renderItem = renderItem;
    }
    update() {
        super.update();
        this.renderItem.direction = this.ballsObject._direction;
    }
}

},{"./object":"34uaH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4D1b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableLineObject", ()=>ImmovableLineObject);
var _ball = require("./ball");
var _vec2Line = require("../vector/vec2Line");
var _types = require("./types");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var ImmovableLineObject = /** @class */ function(_super) {
    __extends(ImmovableLineObject, _super);
    function ImmovableLineObject(position, direction) {
        var _this = _super.call(this, position, 0) || this;
        _this.type = (0, _types.SolverObjectTypes).TypeImmovableLine;
        _this.immovable = true;
        _this.bounceValue = 1;
        _this._direction = direction;
        _this._line = new (0, _vec2Line.Vec2Line)(_this.currentPosition.copy(), _this.currentPosition.copy().sum(_this._direction));
        return _this;
    }
    ImmovableLineObject.prototype.update = function(step) {
        this.currentPosition = this._line._vec1;
        this.previousPosition = this._line._vec2;
    };
    ImmovableLineObject.prototype.addToGrid = function(collisionGrid) {
        collisionGrid.addObjectToCells(this._line._vec1, this._line._vec2, this);
    };
    return ImmovableLineObject;
}((0, _ball.BallsObject));

},{"./ball":"5IfJk","../vector/vec2Line":"k0EZw","./types":"7Eyh2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4RnM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Line", ()=>Line);
var _item = require("./item");
var _vec2 = require("../vector/vec2");
class Line extends (0, _item.Item) {
    direction = (0, _vec2.Vec2).Zero();
    color = "#00ff00";
    constructor(context, position, direction, color){
        super(context, position);
        this.direction = direction;
        if (color) this.color = color;
    }
    render() {
        this.context.strokeStyle = this.color;
        this.context.beginPath(); // Start a new path
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(this.position.x + this.direction.x, this.position.y + this.direction.y);
        this.context.stroke(); // Render the path
    }
}

},{"./item":"62t5i","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZiSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleWithText", ()=>CircleWithText);
var _circle = require("./circle");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var CircleWithText = /** @class */ function(_super) {
    __extends(CircleWithText, _super);
    function CircleWithText(context, position, r, color, text, textColor) {
        var _this = _super.call(this, context, position, r, color) || this;
        _this.text = "";
        _this.textColor = "#ffffff";
        _this.text = text;
        if (textColor) _this.textColor = textColor;
        return _this;
    }
    CircleWithText.prototype.render = function() {
        _super.prototype.render.call(this);
        this.context.fillStyle = this.textColor;
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.fillText(this.text, this.position.x, this.position.y);
    };
    return CircleWithText;
}((0, _circle.Circle));

},{"./circle":"c8cAT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"datdc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "index2color", ()=>index2color);
function index2color(index) {
    var frequency = 0.005;
    var r = Math.floor(Math.sin(frequency * index + 0) * 127 + 128);
    var g = Math.floor(Math.sin(frequency * index + 2) * 127 + 128);
    var b = Math.floor(Math.sin(frequency * index + 4) * 127 + 128);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 1)");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fyh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewportConstrain", ()=>ViewportConstrain);
var _constrain = require("./constrain");
class ViewportConstrain extends (0, _constrain.Constrain) {
    _width = 0;
    _height = 0;
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    applyConstrain(obj) {
        if (obj.currentPosition.x - obj.radius < 0) obj.currentPosition.x = obj.radius;
        if (obj.currentPosition.x + obj.radius > this._width) obj.currentPosition.x = this._width - obj.radius;
        if (obj.currentPosition.y - obj.radius < 0) obj.currentPosition.y = obj.radius;
        if (obj.currentPosition.y + obj.radius > this._height) obj.currentPosition.y = this._height - obj.radius;
    }
}

},{"./constrain":"jvBxb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvBxb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Constrain", ()=>Constrain);
var Constrain = /** @class */ function() {
    function Constrain() {}
    return Constrain;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vIhi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scene2", ()=>Scene2);
var _baseScene = require("./baseScene");
var _circle = require("../items/circle");
var _circleWithText = require("../items/circleWithText");
var _vec2 = require("../vector/vec2");
var _object = require("../renderableObjects/object");
var _immovableBall = require("../objects/immovableBall");
var _circle1 = require("../constrains/circle");
var _objectsGenerator = require("../generators/objectsGenerator");
var _ball = require("../objects/ball");
var _index2Color = require("../items/utils/index2color");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var Scene2 = /** @class */ function(_super) {
    __extends(Scene2, _super);
    function Scene2(engine) {
        var _this = _super.call(this, engine) || this;
        _this._canMoveRedObject = false;
        _this.timePassedSinceLastBallCreated = 0;
        _this.ballIndex = 0;
        _this.center = new (0, _vec2.Vec2)(_this.engine.canvas.width / 2, _this.engine.canvas.height / 2);
        _this.radius = Math.min(_this.center.x, _this.center.y);
        _this.generator = new (0, _objectsGenerator.ObjectsGenerator)(_this.engine.solver);
        _this.createActor();
        _this.initConstrain();
        return _this;
    }
    Scene2.prototype.createBall = function() {
        var baseBallVelocity = new (0, _vec2.Vec2)(0, 0);
        var ballGeneratorPoint = this.actor.ballsObject.currentPosition;
        var toCenter = ballGeneratorPoint.diff(this.center);
        var n = toCenter.ort;
        var ballVelocity = n.mul(-1);
        var obj = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.diff(n.mul(40)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(this.ballIndex + 200), "", "#000000"));
        this.engine.addObject(obj);
        this.ballIndex++;
    };
    Scene2.prototype.createActor = function() {
        this.actor = new (0, _object.RenderableObject)(new (0, _immovableBall.ImmovableBallsObject)(new (0, _vec2.Vec2)(230, 50), 30), new (0, _circle.Circle)(this.engine.context, (0, _vec2.Vec2).Zero(), 30, "#ff0000"));
        this.engine.addObject(this.actor);
    };
    Scene2.prototype.initConstrain = function() {
        this.engine.constrain = new (0, _circle1.CircleConstrain)(this.center, this.radius);
        this.engine.items.push(new (0, _circle.Circle)(this.engine.context, this.center, this.radius, "#ffffff"));
    };
    Scene2.prototype.getActor = function() {
        return this.actor;
    };
    Scene2.prototype.tick = function(timePassed) {
        if (this.canMoveRedObject) {
            this.timePassedSinceLastBallCreated += timePassed;
            if (this.timePassedSinceLastBallCreated > 0.05) {
                this.timePassedSinceLastBallCreated = 0;
                this.createBall();
            }
        }
    };
    Scene2.prototype.processUserInput = function(event) {
        var mouseEvent = event;
        if (mouseEvent.leftButtonDown) {
            if (this.actor.ballsObject.isPointInsideObject(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY))) this.canMoveRedObject = true;
            this.canMoveRedObject;
        } else this.canMoveRedObject = false;
        if (mouseEvent.screenX || mouseEvent.screenY) this.actor.ballsObject.moveTo(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY));
    };
    Object.defineProperty(Scene2.prototype, "canMoveRedObject", {
        get: function() {
            return this._canMoveRedObject;
        },
        set: function(can) {
            this._canMoveRedObject = can;
            if (can) this.actor.renderItem.color = "#00ff00";
            else this.actor.renderItem.color = "#ff0000";
        },
        enumerable: false,
        configurable: true
    });
    return Scene2;
}((0, _baseScene.BaseScene));

},{"./baseScene":"dRCUa","../items/circle":"c8cAT","../items/circleWithText":"eZiSs","../vector/vec2":"bp79Y","../renderableObjects/object":"34uaH","../objects/immovableBall":"8kn5q","../constrains/circle":"hK3W7","../generators/objectsGenerator":"g4Anj","../objects/ball":"5IfJk","../items/utils/index2color":"datdc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hK3W7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleConstrain", ()=>CircleConstrain);
var _constrain = require("./constrain");
var _vec2 = require("../vector/vec2");
class CircleConstrain extends (0, _constrain.Constrain) {
    /**
     *
     * @type {Vec2}
     */ center = (0, _vec2.Vec2).Zero();
    radius = 0;
    constructor(center, radius){
        super();
        this.center = center;
        this.radius = radius;
    }
    applyConstrain(obj) {
        const toCenter = obj.currentPosition.diff(this.center);
        const distance = toCenter.length;
        const r = obj.radius || 0;
        if (distance > this.radius - r) {
            const n = toCenter.ort;
            obj.moveTo(this.center.sum(n.mul(this.radius - r - 1)));
        }
    }
}

},{"./constrain":"jvBxb","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajxWT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scene3", ()=>Scene3);
var _baseScene = require("./baseScene");
var _circle = require("../items/circle");
var _circleWithText = require("../items/circleWithText");
var _vec2 = require("../vector/vec2");
var _object = require("../renderableObjects/object");
var _circle1 = require("../constrains/circle");
var _objectsGenerator = require("../generators/objectsGenerator");
var _ball = require("../objects/ball");
var _index2Color = require("../items/utils/index2color");
var _triangle = require("../primitives/triangle");
var _immovablePolygon = require("../objects/ImmovablePolygon");
var _polygon = require("../items/polygon");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var Scene3 = /** @class */ function(_super) {
    __extends(Scene3, _super);
    function Scene3(engine) {
        var _this = _super.call(this, engine) || this;
        _this._createBalls = false;
        _this.timePassedSinceLastBallCreated = 0;
        _this.ballIndex = 0;
        _this.ballsViews = [];
        _this.center = new (0, _vec2.Vec2)(_this.engine.canvas.width / 2, _this.engine.canvas.height / 2);
        _this.radius = Math.min(_this.center.x, _this.center.y);
        _this.generator = new (0, _objectsGenerator.ObjectsGenerator)(_this.engine.solver);
        _this.createActor();
        _this.initConstrain();
        return _this;
    }
    Scene3.prototype.createBall = function() {
        var baseBallVelocity = new (0, _vec2.Vec2)(0, 0);
        var ballGeneratorPoint = this.actor.ballsObject.currentPosition;
        var toCenter = ballGeneratorPoint.diff(this.center);
        var n = toCenter.ort;
        var ballVelocity = n.mul(-1);
        var ballView = new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(this.ballIndex + 200), "", "#000000");
        this.ballsViews.push(ballView);
        var obj = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.diff(n.mul(40)), 5).setVelocity(ballVelocity), ballView);
        this.engine.addObject(obj);
        this.ballIndex++;
    };
    Scene3.prototype.createActor = function() {
        var trianglePoints = (0, _triangle.createTriangle)(60);
        var polygonObject = new (0, _immovablePolygon.ImmovablePolygon)(this.center, trianglePoints);
        var polygonView = new (0, _polygon.Polygon)(this.engine.context, (0, _vec2.Vec2).Zero(), polygonObject.lines, "#ff0000");
        this.actor = new (0, _object.RenderableObject)(polygonObject, polygonView);
        this.engine.addObject(this.actor);
    };
    Scene3.prototype.initConstrain = function() {
        this.engine.constrain = new (0, _circle1.CircleConstrain)(this.center, this.radius);
        this.engine.items.push(new (0, _circle.Circle)(this.engine.context, this.center, this.radius, "#ffffff"));
    };
    Scene3.prototype.getActor = function() {
        return this.actor;
    };
    Scene3.prototype.tick = function(timePassed) {
        if (this.createBalls) {
            this.timePassedSinceLastBallCreated += timePassed;
            if (this.timePassedSinceLastBallCreated > 0.05) {
                this.timePassedSinceLastBallCreated = 0;
                this.createBall();
            }
        }
        this.ballsViews.forEach(function(ballView) {
            ballView.color = (0, _index2Color.index2color)(ballView.position.y);
        });
    };
    Scene3.prototype.processUserInput = function(event) {
        var mouseEvent = event;
        if (mouseEvent.leftButtonDown) {
            if (this.actor.ballsObject.isPointInsideObject(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY))) this.createBalls = true;
        } else this.createBalls = false;
        if (mouseEvent.screenX || mouseEvent.screenY) this.actor.ballsObject.moveTo(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY));
    };
    Object.defineProperty(Scene3.prototype, "createBalls", {
        get: function() {
            return this._createBalls;
        },
        set: function(can) {
            this._createBalls = can;
            if (can) this.actor.renderItem.color = "#00ff00";
            else this.actor.renderItem.color = "#ff0000";
        },
        enumerable: false,
        configurable: true
    });
    return Scene3;
}((0, _baseScene.BaseScene));

},{"./baseScene":"dRCUa","../items/circle":"c8cAT","../items/circleWithText":"eZiSs","../vector/vec2":"bp79Y","../renderableObjects/object":"34uaH","../constrains/circle":"hK3W7","../generators/objectsGenerator":"g4Anj","../objects/ball":"5IfJk","../items/utils/index2color":"datdc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../primitives/triangle":"2kNMb","../objects/ImmovablePolygon":"iluwZ","../items/polygon":"bKrz3"}],"2kNMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTriangle", ()=>createTriangle);
var _vec2 = require("../vector/vec2");
function createTriangle(size) {
    var height = size * Math.sqrt(3) / 2;
    var center = new (0, _vec2.Vec2)(size / 2, size / 2 * (1 / Math.sqrt(3)));
    return [
        new (0, _vec2.Vec2)(-center.x, -center.y),
        new (0, _vec2.Vec2)(0, height - center.y),
        new (0, _vec2.Vec2)(center.x, -center.y)
    ];
}

},{"../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iluwZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovablePolygon", ()=>ImmovablePolygon);
var _immovable = require("./immovable");
var _types = require("./types");
var _vec2Line = require("../vector/vec2Line");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ImmovablePolygon = /** @class */ function(_super) {
    __extends(ImmovablePolygon, _super);
    function ImmovablePolygon(position, points) {
        var _this = _super.call(this) || this;
        _this._points = [];
        _this._lines = [];
        _this.type = (0, _types.SolverObjectTypes).TypeImmovablePolygon;
        _this.immovable = true;
        _this.bounceValue = 1;
        _this.currentPosition = position.copy();
        _this.previousPosition = position.copy();
        _this._fixedPosition = position.copy();
        points.forEach(function(point) {
            return _this._points.push(point.copy());
        });
        _this._recreateLines();
        return _this;
    }
    ImmovablePolygon.prototype._recreateLines = function() {
        var pointsToProcess = __spreadArray([], this._points, true);
        var firstPoint = pointsToProcess.shift();
        var secondPoint;
        var lastPoint = firstPoint;
        this._lines.splice(0, this._lines.length);
        while(secondPoint = pointsToProcess.shift()){
            this._lines.push(new (0, _vec2Line.Vec2Line)(this._fixedPosition.sum(lastPoint), this._fixedPosition.sum(secondPoint)));
            lastPoint = secondPoint;
        }
        this._lines.push(new (0, _vec2Line.Vec2Line)(this._fixedPosition.sum(lastPoint), this._fixedPosition.sum(firstPoint)));
    };
    ImmovablePolygon.prototype.update = function(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
    };
    ImmovablePolygon.prototype.addToGrid = function(collisionGrid) {
        var _this = this;
        try {
            this._lines.forEach(function(line) {
                collisionGrid.addObjectToCells(line.vec1, line.vec2, _this);
            });
        } catch (e) {
            debugger;
            console.log(e, this._lines);
        }
    };
    ImmovablePolygon.prototype.isPointInsideObject = function(point) {
        return true;
    };
    ImmovablePolygon.prototype.moveBy = function(delta) {
        this.currentPosition.addSelf(delta);
        this.previousPosition.addSelf(delta);
        this._fixedPosition.addSelf(delta);
        this._lines.forEach(function(line) {
            return line.moveBy(delta);
        });
    };
    ImmovablePolygon.prototype.moveTo = function(position) {
        this._fixedPosition = position.copy();
        this.currentPosition = position.copy();
        this.previousPosition = position.copy();
        this._recreateLines();
    };
    Object.defineProperty(ImmovablePolygon.prototype, "lines", {
        get: function() {
            return this._lines;
        },
        enumerable: false,
        configurable: true
    });
    return ImmovablePolygon;
}((0, _immovable.ImmovableSolverObject));

},{"./immovable":"5OzDg","./types":"7Eyh2","../vector/vec2Line":"k0EZw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OzDg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableSolverObject", ()=>ImmovableSolverObject);
var _object = require("./object");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var ImmovableSolverObject = /** @class */ function(_super) {
    __extends(ImmovableSolverObject, _super);
    function ImmovableSolverObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImmovableSolverObject;
}((0, _object.BaseSolverObject));

},{"./object":"66Aay","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKrz3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polygon", ()=>Polygon);
var _item = require("./item");
var _vec2 = require("../vector/vec2");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var Polygon = /** @class */ function(_super) {
    __extends(Polygon, _super);
    function Polygon(context, position, lines, color) {
        var _this = _super.call(this, context, position) || this;
        _this.direction = (0, _vec2.Vec2).Zero();
        _this.color = "#00ff00";
        _this.lines = lines;
        if (color) _this.color = color;
        return _this;
    }
    Polygon.prototype.render = function() {
        var _this = this;
        this.context.strokeStyle = this.color;
        this.context.beginPath(); // Start a new path
        this.lines.forEach(function(line) {
            _this.context.moveTo(line.vec1.x, line.vec1.y);
            _this.context.lineTo(line.vec2.x, line.vec2.y);
        });
        this.context.stroke(); // Render the path
    };
    return Polygon;
}((0, _item.Item));

},{"./item":"62t5i","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8G7on":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Stats", ()=>Stats);
var Stats = /** @class */ function() {
    function Stats() {
        this.tickData = [];
        this.totalData = [];
        this.keys = new Map();
    }
    Stats.prototype.resetTick = function() {
        var _this = this;
        this.tickData.forEach(function(value, index) {
            return _this.tickData[index] = 0;
        });
    };
    Stats.prototype.writeStats = function(key, value) {
        var index = this.registerKey(key);
        this.tickData[index] = value;
        this.totalData[index] = value;
    };
    Stats.prototype.addStats = function(key, value) {
        var index = this.registerKey(key);
        this.tickData[index] += value;
        this.totalData[index] += value;
    };
    Stats.prototype.registerKey = function(key) {
        if (this.keys.has(key)) return this.keys.get(key);
        this.tickData.push(0);
        this.totalData.push(0);
        this.keys.set(key, this.tickData.length - 1);
        return this.tickData.length - 1;
    };
    Stats.prototype.getStats = function(key) {
        if (!this.keys.has(key)) return {
            key: key,
            total: 0,
            tick: 0
        };
        var index = this.keys.get(key);
        return {
            key: key,
            total: this.totalData[index],
            tick: this.tickData[index]
        };
    };
    Stats.prototype.getTickData = function() {
        var _this = this;
        var result = [];
        this.keys.forEach(function(index, key) {
            result.push({
                key: key,
                value: _this.tickData[index]
            });
        });
        return result;
    };
    return Stats;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lxFny","hb2Bw"], "hb2Bw", "parcelRequire62ee")

//# sourceMappingURL=index.059c6d4a.js.map
