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
class WorkerApplication extends (0, _baseEngine.BaseEngine) {
    constructor(canvas){
        super();
        this.sendUserInputEvent = (event)=>{
            this.worker.postMessage(new (0, _messages.MessageUserInput)(event));
        };
        this.sendEngineEvent = (event)=>{
            this.worker.postMessage(new (0, _messages.MessageEngineEvent)(event));
        };
        this.worker = (0, _workerWorkaroundJs.createWorker)();
        const offscreen = canvas.transferControlToOffscreen();
        this.worker.postMessage(new (0, _messages.MessageInit)(offscreen), [
            offscreen
        ]);
        this.userInput = new (0, _input.UserInput)(canvas);
        this.userInput.addHandler(this.sendUserInputEvent);
    }
}

},{"./input":"d2HoK","./messages":"8r34k","./workerWorkaround.js":"9q0ah","../engine/baseEngine":"fCHiv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2HoK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserInput", ()=>UserInput);
class UserInput {
    constructor(canvas){
        this.keyPress = (browserEvent)=>{
            const event = {
                keyPressed: browserEvent.key
            };
            this.processEvent(event);
        };
        this.mouseEnter = (browserEvent)=>{
            const event = this.createMouseEvent(browserEvent);
            this.processEvent(event);
        };
        this.mouseLeave = (browserEvent)=>{
            const event = this.createMouseEvent(browserEvent);
            this.processEvent(event);
        };
        this.mouseMove = (browserEvent)=>{
            const event = this.createMouseEvent(browserEvent);
            this.processEvent(event);
        };
        this.mouseDown = (browserEvent)=>{
            this._leftButtonDown = true;
            const event = this.createMouseEvent(browserEvent);
            this.processEvent(event);
        };
        this.mouseUp = (browserEvent)=>{
            this._leftButtonDown = false;
            const event = this.createMouseEvent(browserEvent);
            this.processEvent(event);
        };
        this.click = (browserEvent)=>{
            const event = this.createMouseEvent(browserEvent);
            this.processEvent(event);
        };
        this.touchStart = (browserEvent)=>{
            browserEvent.preventDefault();
            if (browserEvent.touches.length === 0) return;
            this._leftButtonDown = true;
            const touch = browserEvent.touches.item(0);
            const event = {
                screenX: touch.pageX,
                screenY: touch.pageY,
                dx: 0,
                dy: 0,
                leftButtonDown: this._leftButtonDown
            };
            this.processEvent(event);
        };
        this.touchMove = (browserEvent)=>{
            browserEvent.preventDefault();
            const event = this.createTouchEvent(browserEvent);
            if (event) this.processEvent(event);
        };
        this.touchEnd = (browserEvent)=>{
            browserEvent.preventDefault();
            this._leftButtonDown = false;
            const event = this.createTouchEndEvent();
            if (event) this.processEvent(event);
        };
        this.touchCancel = (browserEvent)=>{
            browserEvent.preventDefault();
            this._leftButtonDown = false;
            const event = this.createTouchEndEvent();
            if (event) this.processEvent(event);
        };
        this._canvas = canvas;
        this._handlers = new Set();
        this._leftButtonDown = false;
        this.addHandlers();
    }
    addHandlers() {
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
    }
    removeHandlers() {
        document.removeEventListener("keypress", this.keyPress);
    }
    processEvent(event) {
        this._handlers.forEach((callback)=>{
            callback(event);
        });
        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }
    addHandler(callback) {
        this._handlers.add(callback);
    }
    removeHandler(callback) {
        if (this._handlers.has(callback)) this._handlers.delete(callback);
    }
    createMouseEvent(browserEvent) {
        return {
            screenX: browserEvent.offsetX,
            screenY: browserEvent.offsetY,
            dx: -this._oldX + browserEvent.offsetX,
            dy: -this._oldY + browserEvent.offsetY,
            leftButtonDown: this._leftButtonDown
        };
    }
    createTouchEvent(browserEvent) {
        const touch = browserEvent.touches.item(0);
        return {
            screenX: touch.pageX,
            screenY: touch.pageY,
            dx: -this._oldX + touch.pageX,
            dy: -this._oldY + touch.pageY,
            leftButtonDown: this._leftButtonDown
        };
    }
    createTouchEndEvent() {
        return {
            screenX: this._oldX,
            screenY: this._oldY,
            dx: 0,
            dy: 0,
            leftButtonDown: this._leftButtonDown
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8r34k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageType", ()=>MessageType);
parcelHelpers.export(exports, "MessageEvent", ()=>MessageEvent);
parcelHelpers.export(exports, "MessageInit", ()=>MessageInit);
parcelHelpers.export(exports, "MessageUserInput", ()=>MessageUserInput);
parcelHelpers.export(exports, "MessageEngineEvent", ()=>MessageEngineEvent);
var MessageType;
(function(MessageType) {
    MessageType[MessageType["MessageNone"] = 0] = "MessageNone";
    MessageType[MessageType["MessageInit"] = 1] = "MessageInit";
    MessageType[MessageType["MessageUserInput"] = 2] = "MessageUserInput";
    MessageType[MessageType["MessageEngineEvent"] = 3] = "MessageEngineEvent";
})(MessageType || (MessageType = {}));
class MessageEvent {
    constructor(){
        this.type = MessageType.MessageNone;
    }
}
class MessageInit extends MessageEvent {
    constructor(canvas){
        super();
        this.type = MessageType.MessageInit;
        this.canvas = canvas;
    }
}
class MessageUserInput extends MessageEvent {
    constructor(event){
        super();
        this.type = MessageType.MessageUserInput;
        this.event = event;
    }
}
class MessageEngineEvent extends MessageEvent {
    constructor(event){
        super();
        this.type = MessageType.MessageEngineEvent;
        this.event = event;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9q0ah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createWorker", ()=>createWorker);
function createWorker() {
    return new Worker(require("68aa42cabbc06689"));
}

},{"68aa42cabbc06689":"iAEfQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAEfQ":[function(require,module,exports) {
let workerURL = require("b6cd70138d1a4a29");
let bundleURL = require("59603eb94b5cfa37");
let url = bundleURL.getBundleURL("cYOr9") + "../main.8e789c37.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"b6cd70138d1a4a29":"cn2gM","59603eb94b5cfa37":"lgJ39"}],"cn2gM":[function(require,module,exports) {
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
class BaseEngine {
    loadScene(sceneName) {
        const event = {
            scene: sceneName
        };
        this.sendEngineEvent(event);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BtOcs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectApplication", ()=>DirectApplication);
var _render = require("../render");
var _input = require("./input");
var _baseEngine = require("../engine/baseEngine");
class DirectApplication extends (0, _baseEngine.BaseEngine) {
    constructor(canvas){
        super();
        this.sendUserInputEvent = (event)=>{
            this.render.processUserInput(event);
        };
        this.sendEngineEvent = (event)=>{
            this.render.processEngineEvent(event);
        };
        this.render = new (0, _render.Render)(canvas);
        this.render.start();
        this.userInput = new (0, _input.UserInput)(canvas);
        this.userInput.addHandler(this.sendUserInputEvent);
    }
}

},{"../render":"63F0y","./input":"d2HoK","../engine/baseEngine":"fCHiv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63F0y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Render", ()=>Render);
var _vec2 = require("./vector/vec2");
var _gridSolver = require("./solver/gridSolver");
var _all = require("./scenes/all");
var _stats = require("./stats");
var _quadTreeSolver = require("./solver/quadTreeSolver");
var _canvas2DRender = require("./render/canvas2DRender");
class Render {
    constructor(canvas){
        /**
         * List of balls
         * @type {RenderableObject[]}
         */ this.objects = [];
        /**
         * @type {Constrain}
         */ this._constrains = null;
        /**
         * Solver for physics
         * @type {BaseSolver}
         */ this.solver = null;
        this.flagRenderGrid = false;
        this.flagRenderPreviousPosition = false;
        this.flagSwitchSolver = false;
        this.nextFrame = (time)=>{
            this.step = time - this.timeRenderEnd;
            if (this.step < 0) this.step = 0;
            this.tick();
            this.timeRenderEnd = time;
            self.requestAnimationFrame(this.nextFrame);
        };
        this.nextInterval = ()=>{
            this.timeRenderStart = performance.now();
            this.step = this.timeRenderStart - this.timeRenderEnd;
            if (this.step < 0) this.step = 0;
            this.tick();
            this.timeRenderEnd = performance.now();
        };
        this.stats = new (0, _stats.Stats)();
        this.canvas = canvas;
        this.context = new (0, _canvas2DRender.Canvas2DRender)(this.canvas.getContext("2d"));
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
    reset() {
        this.objects = [];
        this.items = [];
        this.solver.reset();
    }
    switchToGridSolver() {
        const newSolver = new (0, _gridSolver.GridOptimizedSolver)(new (0, _vec2.Vec2)(this.canvas.width, this.canvas.height), this.stats);
        if (this.solver) {
            this.solver.objects.forEach((obj)=>newSolver.addObject(obj));
            newSolver.constrains = this._constrains;
        }
        this.solver = newSolver;
    }
    switchToQuadSolver() {
        const newSolver = new (0, _quadTreeSolver.QuadTreeSolver)(new (0, _vec2.Vec2)(this.canvas.width, this.canvas.height), this.stats);
        if (this.solver) {
            this.solver.objects.forEach((obj)=>newSolver.addObject(obj));
            newSolver.constrains = this._constrains;
        }
        this.solver = newSolver;
    }
    configure() {
        this.switchToGridSolver();
        this.context.font("10px serif");
        this.loadScene("scene1");
    }
    processUserInput(event) {
        const keyboardEvent = event;
        if (keyboardEvent.keyPressed === "g") this.flagRenderGrid = !this.flagRenderGrid;
        if (keyboardEvent.keyPressed === "p") this.flagRenderPreviousPosition = !this.flagRenderPreviousPosition;
        if (keyboardEvent.keyPressed === "s") this.flagSwitchSolver = true;
        this.scene.processUserInput(event);
    }
    processEngineEvent(event) {
        const loadSceneEvent = event;
        if (loadSceneEvent.scene) this.loadScene(loadSceneEvent.scene);
    }
    loadScene(sceneName) {
        this.reset();
        const Scene = (0, _all.ENGINE_SCENES)[sceneName];
        this.scene = new Scene(this);
    }
    /**
     * @param {RenderableObject} obj
     */ addObject(obj) {
        this.objects.push(obj);
        this.solver.addObject(obj.solverObject);
    }
    update(time) {
        this.solver.update(time);
    }
    tick() {
        if (this.step < 0) this.step = 0;
        const timePassed = this.step / 1000;
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
        if (this.flagSwitchSolver) {
            if (this.solver instanceof (0, _gridSolver.GridOptimizedSolver)) this.switchToQuadSolver();
            else this.switchToGridSolver();
            this.flagSwitchSolver = false;
        }
    }
    renderItems() {
        this.items.forEach((item)=>item.render());
        this.objects.forEach((obj)=>obj.render());
    }
    printFPS() {
        this.context.fillStyle("rgba(0,0,0,0.1)");
        this.context.fillRect(0, 0, 100, 60);
        this.context.text(`${Math.round(this.step)} ms / ${Math.round(1000 / this.step)} FPS`, 0, 10);
        this.context.text(`Length calls: ${(0, _vec2.Vec2).lengthCallsCount}`, 0, 20);
        this.context.text(`Lenght2 calls: ${(0, _vec2.Vec2).length2CallsCount}`, 0, 30);
        this.context.text(`Objects: ${this.objects.length}`, 0, 40);
        this.context.text(`Compares per object: ${Math.round((0, _vec2.Vec2).lengthCallsCount / this.objects.length)}`, 0, 50);
        const stats = this.stats.getTickData();
        stats.forEach((item, index)=>{
            this.context.text(`${item.key}: ${item.value}`, 0, index * 10 + 60);
        });
    }
    clear() {
        this.context.fillStyle("rgba(0, 0, 0, 0.9)");
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    start() {
        if (self.requestAnimationFrame) self.requestAnimationFrame(this.nextFrame);
        else setInterval(this.nextInterval, 16);
    }
    renderGrid() {
        this.solver.debugRender(this.context);
    }
    renderPreviousPosition() {
        this.objects.forEach((renderableObject)=>{
            const position = renderableObject.solverObject.previousPosition;
            this.context.fillStyle("rgba(0, 0, 255, 0.5)");
            this.context.fillCircle(10, position);
        });
    }
    set constrain(constrain) {
        this._constrains = constrain;
        this.solver.constrains = this._constrains;
    }
    get constrain() {
        return this._constrains;
    }
}

},{"./vector/vec2":"bp79Y","./solver/gridSolver":"5tW2V","./scenes/all":"bqCRd","./stats":"8G7on","./solver/quadTreeSolver":"eD4iS","./render/canvas2DRender":"3vUyF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bp79Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2", ()=>Vec2);
var _vec2Math = require("./vec2Math");
var _math = require("./math");
var _exceptions = require("./exceptions");
class Vec2 {
    constructor(x, y, l){
        this._x = 0;
        this._y = 0;
        this._length = null;
        this._length2 = null;
        this._x = x;
        if (y === undefined) this._y = x;
        else this._y = y;
        if (l) {
            this._length = l;
            this._length2 = l * l;
        }
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(x) {
        this._x = x;
        this.reset();
    }
    set y(y) {
        this._y = y;
        this.reset();
    }
    get length() {
        if (this._length === null) {
            this._length = Math.sqrt(this.x * this.x + this.y * this.y);
            Vec2.lengthCallsCount++;
        }
        return this._length;
    }
    /**
     * Returns length^2
     */ get length2() {
        if (this._length2 === null) {
            this._length2 = this._x * this._x + this._y * this._y;
            Vec2.length2CallsCount++;
        }
        return this._length2;
    }
    moveTo(x, y) {
        if (x instanceof Vec2) {
            this._x = x.x;
            this._y = x.y;
        } else {
            this._x = x;
            this._y = y;
        }
        this.reset();
    }
    reset() {
        this._length = null;
        this._length2 = null;
    }
    /**
     * Adds vec2 to current vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ addSelf(vec2) {
        this._x += vec2.x;
        this._y += vec2.y;
        this._length = null;
        return this;
    }
    moveBy(delta) {
        this.addSelf(delta);
    }
    /**
     * Subtract from current vector given vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ subSelf(vec2) {
        this._x -= vec2.x;
        this._y -= vec2.y;
        this._length = null;
        return this;
    }
    /**
     * Flips along X axis
     * @returns {Vec2}
     */ flipYSelf() {
        this._y = -this._y;
        return this;
    }
    /**
     * Flips along Y axis
     * @returns {Vec2}
     */ flipXSelf() {
        this._x = -this._x;
        return this;
    }
    flipSelf() {
        this._x = -this._x;
        this._y = -this._y;
        return this;
    }
    /**
     * Checks if this vector equals given vector using global MATH_ERROR const
     * @param vec2
     */ equals(vec2) {
        return (0, _vec2Math.Vec2Math).distance2(this, vec2) < (0, _math.MATH_ERROR2);
    }
    /**
     * Sums current vector and given vector and returns new vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ sum(vec2) {
        return new Vec2(this.x + vec2.x, this.y + vec2.y);
    }
    /**
     * Calculate difference between current vector and given vector and returns
     * new vector
     *
     * @param {Vec2} vec2
     * @returns {Vec2}
     */ diff(vec2) {
        return new Vec2(this.x - vec2.x, this.y - vec2.y);
    }
    /**
     * Multiplicates vector by number
     * @param {number} value
     * @returns {Vec2}
     */ mul(value) {
        return new Vec2(this.x * value, this.y * value);
    }
    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }
    copy() {
        return new Vec2(this.x, this.y);
    }
    applySelf(callback) {
        this.x = callback(this.x);
        this.y = callback(this.y);
        return this;
    }
    /**
     * Checks if this vector inside rect created by 2 other vectors.
     * @param vec1
     * @param vec2
     */ isInsideRect(vec1, vec2) {
        const leftTopX = Math.min(vec1.x, vec2.x);
        const leftTopY = Math.min(vec1.y, vec2.y);
        const rightBottomX = Math.max(vec1.x, vec2.x);
        const rightBottomY = Math.max(vec1.y, vec2.y);
        return this._x >= leftTopX && this._x <= rightBottomX && this._y >= leftTopY && this._y <= rightBottomY;
    }
    /**
     * Returns normalized vector
     * @returns {Vec2}
     */ get ort() {
        const l = this.length;
        return new Vec2(this.x / l, this.y / l, 1);
    }
    /**
     * Returns new vector with absolute values for X and Y
     */ get abs() {
        return new Vec2(Math.abs(this.x), Math.abs(this.y));
    }
    get perpendicular() {
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
        return new Vec2(-this.y, this.x).ort;
    }
    static Zero() {
        return new Vec2(0, 0);
    }
    static Horizontal() {
        return new Vec2(1, 0);
    }
    static Vertical() {
        return new Vec2(0, 1);
    }
    static Down(y) {
        return new Vec2(0, y);
    }
    static Right(x) {
        return new Vec2(x, 0);
    }
}
Vec2.lengthCallsCount = 0;
Vec2.length2CallsCount = 0;

},{"./vec2Math":"nZL8C","./math":"fX8MB","./exceptions":"68SyS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nZL8C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Math", ()=>Vec2Math);
var _vec2 = require("./vec2");
var _exceptions = require("./exceptions");
class Vec2Math {
    static diff(vec1, vec2) {
        return new (0, _vec2.Vec2)(vec1.x - vec2.x, vec1.y - vec2.y);
    }
    static mul(vec1, scalar) {
        return new (0, _vec2.Vec2)(vec1.x * scalar, vec1.y * scalar);
    }
    /**
     * Calculates distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */ static distance(vec1, vec2) {
        return Vec2Math.diff(vec1, vec2).length;
    }
    /**
     * Calculates square of distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */ static distance2(vec1, vec2) {
        return Vec2Math.diff(vec1, vec2).length2;
    }
    /**
     * Finds intersection between 2 lines
     * @param {Vec2Line} line1
     * @param {Vec2Line} line2
     * @returns {Vec2}
     */ static intersect(line1, line2) {
        if (line1.K === line2.K) throw new (0, _exceptions.Vec2ExceptionParallel)();
        if (isNaN(line1.K) || isNaN(line2.K)) {
            // One of two lines is vertical
            if (isNaN(line1.K)) return line2.makeVec2FromX(line1._vec1.x);
            else return line1.makeVec2FromX(line2._vec1.x);
        } else {
            const x = (line1.B - line2.B) / (line2.K - line1.K);
            return line1.makeVec2FromX(x);
        }
    }
    /**
     * Dot product of 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */ static dot(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    }
    /**
     *
     * @param {Vec2} vec
     * @param {Vec2Line} line
     * @returns {Vec2}
     */ static mirror(vec, line) {
        const normal = line.direction.perpendicular;
        return vec.diff(normal.mul(2 * Vec2Math.dot(vec, normal)));
    }
    static scale(vec1, vec2) {
        return new (0, _vec2.Vec2)(vec1.x / vec2.x, vec1.y / vec2.y);
    }
}

},{"./vec2":"bp79Y","./exceptions":"68SyS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68SyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Exception", ()=>Vec2Exception);
parcelHelpers.export(exports, "Vec2ExceptionParallel", ()=>Vec2ExceptionParallel);
parcelHelpers.export(exports, "Vec2ExceptionNoPerpendicularVectorToZeroVector", ()=>Vec2ExceptionNoPerpendicularVectorToZeroVector);
parcelHelpers.export(exports, "Vec2ExceptionRectSizeShouldBePositive", ()=>Vec2ExceptionRectSizeShouldBePositive);
class Vec2Exception extends Error {
}
class Vec2ExceptionParallel extends Vec2Exception {
}
class Vec2ExceptionNoPerpendicularVectorToZeroVector extends Vec2Exception {
}
class Vec2ExceptionRectSizeShouldBePositive extends Vec2Exception {
}

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
const MATH_ERROR = 0.000001;
const MATH_ERROR2 = MATH_ERROR * MATH_ERROR;
const SQRT2 = Math.sqrt(2);
function isEqual(a, b, error) {
    return Math.abs(a - b) < error;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tW2V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridOptimizedSolver", ()=>GridOptimizedSolver);
var _vec2 = require("../vector/vec2");
var _gridSolverSpace = require("./gridSolverSpace");
var _baseSolver = require("./baseSolver");
var _vec2Math = require("../vector/vec2Math");
class GridOptimizedSolver extends (0, _baseSolver.BaseSolver) {
    constructor(worldSize, stats){
        super(worldSize, stats);
        this.gravity = (0, _vec2.Vec2).Zero();
        this.gravityCenter = (0, _vec2.Vec2).Zero();
        this.configure();
    }
    reset() {
        super.reset();
        this.collisionGrid.clear();
    }
    configure() {
        super.configure();
        this.gravity = new (0, _vec2.Vec2)(0, 100);
        this.gravityCenter = new (0, _vec2.Vec2)(this.worldSize.x / 2, this.worldSize.y / 2);
        const cellSize = 16;
        const gridX = Math.round(this.worldSize.x / cellSize);
        const gridY = Math.round(this.worldSize.y / cellSize);
        this.cellSize = new (0, _vec2.Vec2)(this.worldSize.x / gridX, this.worldSize.y / gridY);
        this.collisionGrid = new (0, _gridSolverSpace.GridSolverSpace)(gridX, gridY, this.cellSize);
    }
    processOptimizations() {
        this.collisionGrid.clear();
        this.objects.forEach((obj, index)=>{
            obj.addToSpace(this.collisionGrid);
            this.stats.addStats(`Solver object: ${obj.toString()}`);
        });
    }
    applyForces() {
        this.objects.forEach((obj)=>{
            const direction = (0, _vec2Math.Vec2Math).diff(obj.currentPosition, this.gravityCenter);
            obj.accelerate(direction.ort.mul(-this.gravity.length));
        //obj.accelerate(this.gravity)
        });
    }
    processCollisionsInCell(objA, cell) {
        this.stats.addStats("processCollisionsInCell.calls");
        cell.objects.forEach((objB)=>{
            if (objA === objB) return;
            if (objA.immovable && objB.immovable) return;
            this.stats.addStats("processCollisions.calls");
            objA.collide(objB);
        });
    }
    processCell(index) {
        this.stats.addStats("processCell.calls", 1);
        const currentCell = this.collisionGrid.cells[index];
        currentCell.objects.forEach((objA)=>{
            this.collisionGrid.adjacentCells[index].forEach((cell)=>{
                if (cell === currentCell && cell.objects.length === 1) return; // We don't need to check collisions if I'm only object in cell
                this.processCollisionsInCell(objA, cell);
            });
        });
    }
    processCollisions() {
        for(let index = 0; index < this.collisionGrid.size; index++)this.processCell(index);
    }
    debugRender(context) {
        this.collisionGrid.debugRender(context);
        this.objects.forEach((object)=>object.debugRender(context));
    }
}
function makeKey(obj1, obj2) {
    return [
        obj1.index,
        obj2.index
    ].sort().join("-");
}

},{"../vector/vec2":"bp79Y","./gridSolverSpace":"3VDry","./baseSolver":"jzdWf","../vector/vec2Math":"nZL8C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VDry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionCell", ()=>CollisionCell);
parcelHelpers.export(exports, "GridSolverSpace", ()=>GridSolverSpace);
var _vec2 = require("../vector/vec2");
var _vec2Math = require("../vector/vec2Math");
var _baseSolverSpace = require("./baseSolverSpace");
class CollisionCell {
    constructor(){
        this.objects = [];
        this.highlight = false;
    }
    addObject(obj) {
        if (this.objects.length >= CollisionCell.MAX_OBJECT_IN_CELL) return;
        this.objects.push(obj);
    }
    clear() {
        this.objects = [];
        this.highlight = false;
    }
    remove(index) {
        const objectIndex = this.objects.findIndex((obj)=>obj.index === index);
        if (objectIndex !== -1) this.objects.splice(objectIndex, 1);
    }
    get count() {
        return this.objects.length;
    }
}
CollisionCell.MAX_OBJECT_IN_CELL = 100;
class GridSolverSpace extends (0, _baseSolverSpace.BaseSolverSpace) {
    constructor(width, height, cellSize){
        super();
        this.cells = [];
        this.index2xy = [];
        this.adjacentCells = [];
        this._width = width;
        this._height = height;
        this.cellSize = cellSize;
        this.resize();
    }
    get size() {
        return this._size;
    }
    get width() {
        return this._width;
    }
    set width(w) {
        this._width = w;
        this.resize();
    }
    get height() {
        return this._height;
    }
    set height(h) {
        this._height = h;
        this.resize();
    }
    recalculateIndex2xy() {
        this.index2xy = [];
        for(let i = 0; i < this._size; i++)this.index2xy.push(this.makeVecFromIndex(i));
    }
    /**
     * Calculate cache of collision cells
     */ recalculateCollisionCells() {
        this.adjacentCells = [];
        this.cells.forEach((cell, index)=>{
            const pos = this.getVecFromIndex(index);
            const cells = [];
            cells.push(cell); // Add self
            if (pos.y > 0) cells.push(this.cells[this.makeIndexFromCoord(pos.x, pos.y - 1)]); //TOP
            if (pos.y + 1 < this._height) cells.push(this.cells[this.makeIndexFromCoord(pos.x, pos.y + 1)]); //BOTTOM
            if (pos.x > 0) {
                if (pos.y > 0) cells.push(this.cells[this.makeIndexFromCoord(pos.x - 1, pos.y - 1)]); //LEFT TOP
                cells.push(this.cells[this.makeIndexFromCoord(pos.x - 1, pos.y)]); //LEFT
                if (pos.y + 1 < this._height) cells.push(this.cells[this.makeIndexFromCoord(pos.x - 1, pos.y + 1)]); //LEFT BOTTOM
            }
            if (pos.x + 1 < this._width) {
                if (pos.y > 0) cells.push(this.cells[this.makeIndexFromCoord(pos.x + 1, pos.y - 1)]); //RIGHT TOP
                cells.push(this.cells[this.makeIndexFromCoord(pos.x + 1, pos.y)]); //RIGHT
                if (pos.y + 1 < this._height) cells.push(this.cells[this.makeIndexFromCoord(pos.x + 1, pos.y + 1)]); //RIGHT BOTTOM
            }
            this.adjacentCells[index] = cells;
        });
    }
    getVecFromIndex(index) {
        return this.index2xy[index];
    }
    resize() {
        this.cells = [];
        this._size = this._width * this._height;
        for(let i = 0; i < this._size; i++)this.cells.push(new CollisionCell());
        this.recalculateIndex2xy();
        this.recalculateCollisionCells();
    }
    addObject(obj) {
        this.addObjectByIndex(0, obj);
    }
    addPointObject(worldX, worldY, obj) {
        const x = Math.trunc(worldX / this.cellSize.x);
        const y = Math.trunc(worldY / this.cellSize.y);
        const index = this.makeIndexFromCoord(x, y);
        this.addObjectByIndex(index, obj);
    }
    addObjectByIndex(index, obj) {
        if (!isNaN(index) && index >= 0 && index < this.size) this.cells[index].addObject(obj);
    }
    makeIndexFromVec(vec) {
        return vec.x * this._height + vec.y;
    }
    makeIndexFromCoord(x, y) {
        return x * this._height + y;
    }
    makeVecFromIndex(index) {
        const x = Math.trunc(index / this._height);
        const y = index - x * this._height;
        return new (0, _vec2.Vec2)(x, y);
    }
    /**
     * Adds object to all cells between given coords
     * @param worldLeftTop
     * @param worldRightBottom
     * @param obj
     */ addRectangularObject(worldLeftTop, worldRightBottom, obj) {
        const point1 = (0, _vec2Math.Vec2Math).scale(worldLeftTop, this.cellSize).applySelf(Math.trunc);
        const point2 = (0, _vec2Math.Vec2Math).scale(worldRightBottom, this.cellSize).applySelf(Math.trunc);
        let left = Math.max(Math.min(point1.x, point2.x), 0);
        let top = Math.max(Math.min(point1.y, point2.y), 0);
        let right = Math.min(Math.max(point1.x, point2.x), this._width - 1);
        let bottom = Math.min(Math.max(point1.y, point2.y), this._height - 1);
        const index1 = this.makeIndexFromCoord(left, top);
        const index2 = this.makeIndexFromCoord(right, bottom);
        if (right >= this._width || left < 0 || top < 0 || bottom >= this._height) return;
        if (point1.x === point2.x) // Vertical
        for(let cellIndex = index1; cellIndex <= index2; cellIndex++)this.cells[cellIndex].addObject(obj);
        else if (point1.y === point2.y) // Horizontal
        for(let cellIndex = index1; cellIndex <= index2; cellIndex += this.height)this.cells[cellIndex].addObject(obj);
        else {
            let height = bottom - top;
            let startFrom = this.makeIndexFromCoord(left, top);
            for(let x = 0; x <= right - left; x++)for(let y = 0; y <= height; y++){
                const cellIndex = startFrom + this.makeIndexFromCoord(x, y);
                this.addObjectByIndex(cellIndex, obj);
            }
        }
    }
    clear() {
        this.cells.forEach((cell)=>cell.clear());
    }
    forEach(callback) {
        this.cells.forEach((cell, index)=>{
            const pos = this.getVecFromIndex(index);
            callback(pos.x, pos.y, cell, index);
        });
    }
    hasCell(index, dt) {
        if (index < 0 || index >= this.size) return false;
        const pos = this.getVecFromIndex(index);
        const x = pos.x;
        const y = pos.y;
        if (y <= 0 && dt < 0) // TOP CELL
        return false;
        if (y === this.height - 1 && dt > 0) // Bottom cell
        return false;
        if (x === 0 && dt < 0) // left cell
        return false;
        if (x >= this.width - 1 && dt > 0) // right cell;
        return false;
        return true;
    }
    debugRender(render) {
        this.forEach((column, row, cell, index)=>{
            const cellPosition = new (0, _vec2.Vec2)(column * this.cellSize.x, row * this.cellSize.y);
            render.strokeStyle(cell.count > 0 ? "#ff0000" : "#00ff00");
            render.lineWidth(cell.highlight ? 10 : 1);
            render.rect(cellPosition.x, cellPosition.y, this.cellSize.x - 1, this.cellSize.y - 1);
            render.fillStyle("#ffffff");
            render.text(`${index}`, cellPosition.sum(this.cellSize.mul(0.5)));
        });
    }
}

},{"../vector/vec2":"bp79Y","../vector/vec2Math":"nZL8C","./baseSolverSpace":"3vpVg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vpVg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseSolverSpace", ()=>BaseSolverSpace);
class BaseSolverSpace {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzdWf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseSolver", ()=>BaseSolver);
class BaseSolver {
    constructor(worldSize, stats){
        this.objects = [];
        this.constrains = null;
        this.subSteps = 4;
        this.useFixedTime = true;
        this.stats = stats;
        this.objects = [];
        this.worldSize = worldSize.copy();
        this.configure();
    }
    reset() {
        this.objects = [];
    }
    configure() {
        this.useFixedTime = true;
        this.step = 0.017 / this.subSteps;
    }
    addObject(obj) {
        this.objects.push(obj);
    }
    /**
     * Update the simulation by given step.
     * @param {number} time amount of seconds passed since last update.
     */ update(time) {
        const subTime = this.useFixedTime ? this.step : time / this.subSteps;
        for(let i = 0; i < this.subSteps; i++){
            this.processOptimizations();
            this.processCollisions();
            this.applyForces();
            this.updateObjects(subTime);
            this.applyConstrains();
        }
    }
    /**
     * Update objects state
     * @param {number} time amount of seconds passed since last update
     */ updateObjects(time) {
        this.objects.forEach((obj)=>obj.update(time));
    }
    applyConstrains() {
        this.objects.forEach((obj)=>this.constrains.applyConstrain(obj));
    }
}
function makeKey(obj1, obj2) {
    return [
        obj1.index,
        obj2.index
    ].sort().join("-");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqCRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ENGINE_SCENES", ()=>ENGINE_SCENES);
var _scene1 = require("./scene1");
var _scene2 = require("./scene2");
var _scene3 = require("./scene3");
const ENGINE_SCENES = {
    "scene1": (0, _scene1.Scene1),
    "scene2": (0, _scene2.Scene2),
    "scene3": (0, _scene3.Scene3)
};

},{"./scene1":"lS7PG","./scene2":"8vIhi","./scene3":"ajxWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lS7PG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scene1", ()=>Scene1);
var _baseScene = require("./baseScene");
var _totalObjectsGenerator = require("../generators/totalObjectsGenerator");
var _circle = require("../items/circle");
var _vec2 = require("../vector/vec2");
var _ball = require("../objects/ball");
var _object = require("../renderableObjects/object");
var _immovableBall = require("../objects/immovableBall");
var _immovableLine = require("../renderableObjects/immovableLine");
var _immovableLine1 = require("../objects/immovableLine");
var _line = require("../items/line");
var _circleWithText = require("../items/circleWithText");
var _index2Color = require("../items/utils/index2color");
var _viewport = require("../constrains/viewport");
var _milkshake = require("../primitives/milkshake");
const ballsColors = {
    57: "#ffffff",
    78: "#ffffff",
    71: "#ffffff",
    86: "#ffffff",
    200: "#ffffff",
    202: "#ffffff",
    218: "#ffffff"
};
class Scene1 extends (0, _baseScene.BaseScene) {
    constructor(engine){
        super(engine);
        this.canMoveRedObject = false;
        const canvasCenter = new (0, _vec2.Vec2)(this.engine.canvas.width / 2, this.engine.canvas.height / 2);
        this.generator = this.createBallsGenerator(canvasCenter, new (0, _vec2.Vec2)(300, 300), new (0, _vec2.Vec2)(2, -2));
        this.createBottomBouncyLine();
        this.createMilkShake(canvasCenter);
        this.createActor();
        this.initConstrain();
    }
    createBallsGenerator(canvasCenter, pointDelta, baseBallVelocity) {
        const ballGeneratorPoint = canvasCenter.diff(pointDelta);
        const ballVelocity = baseBallVelocity.mul(1 / this.engine.solver.subSteps);
        return new (0, _totalObjectsGenerator.TotalObjectsGenerator)(this.engine.solver, 1000, 7, (index)=>{
            const obj = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint, 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 5, (0, _index2Color.index2color)(index + 200), "", "#000000"));
            const obj2 = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.sum((0, _vec2.Vec2).Down(20)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 5, (0, _index2Color.index2color)(index + 100), "", "#000000"));
            const obj3 = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.sum((0, _vec2.Vec2).Down(-20)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 5, (0, _index2Color.index2color)(index), "", "#000000"));
            const obj4 = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.sum((0, _vec2.Vec2).Right(-40)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 5, (0, _index2Color.index2color)(index - 100), "", "#000000"));
            return [
                obj,
                obj2,
                obj3,
                obj4
            ];
        });
    }
    createBottomBouncyLine() {
        // Bottom bouncy line
        const bottomLine = new (0, _immovableLine1.ImmovableLineObject)(new (0, _vec2.Vec2)(0, this.engine.canvas.height - 10), new (0, _vec2.Vec2)(this.engine.canvas.width, 0));
        bottomLine.bounceValue = 1.5;
        this.engine.addObject(new (0, _immovableLine.ImmovableLineRenderableObject)(bottomLine, new (0, _line.Line)(this.engine.context, (0, _vec2.Vec2).Zero(), (0, _vec2.Vec2).Zero(), "#ff0000")));
    }
    createMilkShake(canvasCenter) {
        (0, _milkshake.createMilkshake)(1, canvasCenter).forEach((line)=>{
            this.engine.addObject(new (0, _immovableLine.ImmovableLineRenderableObject)(new (0, _immovableLine1.ImmovableLineObject)(line), new (0, _line.Line)(this.engine.context, (0, _vec2.Vec2).Zero(), (0, _vec2.Vec2).Zero(), "#ffffff")));
        });
        (0, _milkshake.createMilkshake)(0.5, canvasCenter).forEach((line)=>{
            this.engine.addObject(new (0, _immovableLine.ImmovableLineRenderableObject)(new (0, _immovableLine1.ImmovableLineObject)(line), new (0, _line.Line)(this.engine.context, (0, _vec2.Vec2).Zero(), (0, _vec2.Vec2).Zero(), "#0000ff")));
        });
    }
    initConstrain() {
        this.engine.constrain = new (0, _viewport.ViewportConstrain)(this.engine.canvas.width, this.engine.canvas.height);
    }
    createActor() {
        this.actor = new (0, _object.RenderableObject)(new (0, _immovableBall.ImmovableBallsObject)(new (0, _vec2.Vec2)(230, 50), 30), new (0, _circle.Circle)(this.engine.context, (0, _vec2.Vec2).Zero(), 30, "#ff0000"));
        this.engine.addObject(this.actor);
    }
    getActor() {
        return this.actor;
    }
    tick(timePassed) {
        this.engine.stats.addStats("Time passed", timePassed);
        if (timePassed > 0.017) return;
        const newBalls = this.generator.getNextObjects(timePassed);
        if (newBalls) newBalls.forEach((ball)=>this.engine.addObject(ball));
    }
    processUserInput(event) {
        const mouseEvent = event;
        if (mouseEvent.leftButtonDown) {
            if (this.actor.solverObject.isPointInsideObject(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY))) this.canMoveRedObject = true;
            if (this.canMoveRedObject) this.actor.solverObject.moveBy(new (0, _vec2.Vec2)(mouseEvent.dx, mouseEvent.dy));
        } else this.canMoveRedObject = false;
    }
}

},{"./baseScene":"dRCUa","../generators/totalObjectsGenerator":"h8lsL","../items/circle":"c8cAT","../vector/vec2":"bp79Y","../objects/ball":"5IfJk","../renderableObjects/object":"34uaH","../objects/immovableBall":"8kn5q","../renderableObjects/immovableLine":"bihaA","../objects/immovableLine":"f4D1b","../items/line":"eAxYY","../items/circleWithText":"eZiSs","../items/utils/index2color":"datdc","../constrains/viewport":"fOYyc","../primitives/milkshake":"ajvKL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRCUa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseScene", ()=>BaseScene);
class BaseScene {
    constructor(engine){
        this.engine = engine;
    }
}

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
class ObjectsGenerator {
    constructor(solver){
        this.solver = null;
        this.solver = solver;
    }
    // TODO Make me iterator
    getNextObjects(step) {
        return [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8cAT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>Circle);
var _item = require("./item");
class Circle extends (0, _item.Item) {
    constructor(renderer, position, r, color){
        super(renderer, position);
        this.r = 0;
        this.color = "#00ff00";
        if (r) this.r = r;
        if (color) this.color = color;
    }
    render() {
        this.renderer.strokeStyle(this.color);
        this.renderer.fillStyle(this.color);
        this.renderer.fillCircle(this.r, this.position);
    }
}

},{"./item":"62t5i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62t5i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item);
var _vec2 = require("../vector/vec2");
class Item {
    constructor(renderer, position){
        this.position = (0, _vec2.Vec2).Zero();
        this.renderer = renderer;
        this.position = position;
    }
    /**
     * Method immediately renders object on context
     */ render() {}
    /**
     * Method tries to put object in render block
     */ queue() {}
}

},{"../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IfJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BallsObject", ()=>BallsObject);
var _vec2 = require("../vector/vec2");
var _vec2Line = require("../vector/vec2Line");
var _vec2Math = require("../vector/vec2Math");
var _types = require("./types");
var _collisionModels = require("./collisionModels");
var _object = require("./object");
var _vec2Rect = require("../vector/vec2Rect");
const MAX_VELOCITY = 10;
const MAX_VELOCITY2 = Math.pow(MAX_VELOCITY, 2);
class BallsObject extends (0, _object.BaseSolverObject) {
    /**
     * Creates balls object
     * @param {Vec2} position
     * @param {number} [radius]
     */ constructor(position, radius){
        super();
        this.acc = (0, _vec2.Vec2).Zero();
        this.radius = 10;
        this.bounceValue = 1.1;
        this.motionReduce = 0.999;
        this.type = (0, _types.SolverObjectTypes).TypeBall;
        this.immovable = false;
        this.previousPosition = position.copy();
        this.currentPosition = position.copy();
        if (radius !== undefined) this.radius = radius;
        this._radius2 = this.radius * this.radius;
        this.collisionRange = new (0, _vec2Rect.Vec2Rect)(this.currentPosition, new (0, _vec2.Vec2)(this.radius * 4));
        this.boundary = new (0, _vec2Rect.Vec2Rect)(this.currentPosition, new (0, _vec2.Vec2)(this.radius * 2));
    }
    /**
     * Updates state of object
     * @param {number} step
     */ update(step) {
        let velocity = this.velocity.mul(this.motionReduce);
        if (velocity.length2 > MAX_VELOCITY2) velocity = velocity.ort.mul(MAX_VELOCITY);
        this.previousPosition = this.currentPosition.copy();
        this.moveBy(velocity.addSelf(this.acc.mul(step * step)));
        this.acc = (0, _vec2.Vec2).Zero();
    }
    accelerate(acc) {
        this.acc.addSelf(acc);
        return this;
    }
    setVelocity(vel) {
        this.velocity = vel;
        return this;
    }
    /**
     *
     * @param {BallsObject} obj
     */ collide(obj) {
        (0, _collisionModels.collide)(this, obj);
    }
    addToSpace(collisionGrid) {
        collisionGrid.addPointObject(Math.floor(this.currentPosition.x), Math.floor(this.currentPosition.y), this);
    }
    moveBy(delta) {
        this.currentPosition.moveBy(delta);
        this.collisionRange.moveBy(delta);
        this.boundary.moveBy(delta);
    }
    moveTo(position) {
        this.currentPosition.moveTo(position);
        this.collisionRange.moveTo(this.currentPosition);
        this.boundary.moveTo(this.currentPosition);
    }
    isPointInsideObject(point) {
        return (0, _vec2Math.Vec2Math).distance(this.currentPosition, point) < this.radius;
    }
    get velocity() {
        return (0, _vec2Math.Vec2Math).diff(this.currentPosition, this.previousPosition);
    }
    set velocity(v) {
        this.previousPosition = (0, _vec2Math.Vec2Math).diff(this.currentPosition, v);
    }
    /**
     *
     * @returns {Vec2Line}
     */ get movementVector() {
        return new (0, _vec2Line.Vec2Line)(this.previousPosition, this.currentPosition);
    }
    get radius2() {
        return this._radius2;
    }
    intersects(range) {
        const myRect = new (0, _vec2Rect.Vec2Rect)(this.currentPosition, new (0, _vec2.Vec2)(this.radius, this.radius));
        return myRect.intersect(range);
    }
    getCollisionRange() {
        return this.collisionRange;
    }
    getBoundary() {
        return this.boundary;
    }
    debugRender(context) {
        context.strokeStyle("#FF0000");
        const range = this.getCollisionRange();
        context.rect(range.left, range.top, range.width, range.height);
    }
}

},{"../vector/vec2":"bp79Y","../vector/vec2Line":"k0EZw","../vector/vec2Math":"nZL8C","./types":"7Eyh2","./collisionModels":"hKRfe","./object":"66Aay","../vector/vec2Rect":"fgsCI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0EZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Line", ()=>Vec2Line);
var _vec2 = require("./vec2");
var _vec2Math = require("./vec2Math");
var _math = require("./math");
class Vec2Line {
    constructor(vec1, vec2){
        this._vec1 = (0, _vec2.Vec2).Zero();
        this._vec2 = (0, _vec2.Vec2).Zero();
        /**
         * Y = K*X + B
         * @type {number}
         */ this._k = 0;
        this._b = 0;
        this._vec1 = vec1.copy();
        this._vec2 = vec2.copy();
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
     */ inBetween(vec) {
        const l1 = (0, _vec2Math.Vec2Math).diff(vec, this._vec1).length;
        const l2 = (0, _vec2Math.Vec2Math).diff(this._vec2, vec).length;
        const sum = l1 + l2;
        return (0, _math.isEqual)(this._length, sum, (0, _math.MATH_ERROR));
    }
    /**
     * Checks if vector which lies on this line is in between vec1 and vec2
     * @param vec
     */ inBetweenFast(vec) {
        return vec.isInsideRect(this._vec1, this._vec2);
    }
    calculateKB() {
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
    }
    makeVec2FromX(x) {
        return new (0, _vec2.Vec2)(x, this._k * x + this._b);
    }
    copy() {
        return new Vec2Line(this._vec1, this._vec2);
    }
    moveBy(vec) {
        this._vec1.addSelf(vec);
        this._vec2.addSelf(vec);
        this.calculateKB();
        return this;
    }
    getPointProjection(vec) {
        const a = this.direction;
        const b = (0, _vec2Math.Vec2Math).diff(vec, this._vec1);
        const cosabD = (0, _vec2Math.Vec2Math).dot(a, b) / this.length;
        return this._vec1.sum(this.ort.mul(cosabD));
    }
    get B() {
        return this._b;
    }
    get K() {
        return this._k;
    }
    get length() {
        return this._length;
    }
    get direction() {
        return this._direction;
    }
    get ort() {
        return this._ort;
    }
    get vec1() {
        return this._vec1;
    }
    get vec2() {
        return this._vec2;
    }
    get normal() {
        return this._vec2.diff(this._vec1).perpendicular;
    }
    static Vertical(x) {
        return new Vec2Line(new (0, _vec2.Vec2)(x, 0), new (0, _vec2.Vec2)(x, Number.MAX_SAFE_INTEGER));
    }
    static Horizontal(y) {
        return new Vec2Line(new (0, _vec2.Vec2)(0, y), new (0, _vec2.Vec2)(Number.MAX_SAFE_INTEGER, y));
    }
}

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
    if (!obj1.getBoundary().intersect(obj2.getBoundary())) return;
    const between = (0, _vec2Math.Vec2Math).diff(obj1.currentPosition, obj2.currentPosition);
    const distance = between.length;
    const requiredDistance = obj1.radius + obj2.radius;
    if (distance < requiredDistance) {
        const normalized = between.ort;
        const delta = requiredDistance - distance;
        obj1.moveBy((0, _vec2Math.Vec2Math).mul(normalized, obj1.radius / requiredDistance * delta * obj1.bounceValue));
        obj2.moveBy((0, _vec2Math.Vec2Math).mul(normalized, -obj2.radius / requiredDistance * delta * obj2.bounceValue));
    }
}
function collideBallAndImmovableBall(ball, immovable) {
    if (!ball.getBoundary().intersect(immovable.getBoundary())) return;
    const between = (0, _vec2Math.Vec2Math).diff(ball.currentPosition, immovable.currentPosition);
    const distance = between.length;
    const requiredDistance = ball.radius + immovable.radius;
    if (distance < requiredDistance) {
        const normalized = between.ort;
        const delta = requiredDistance - distance;
        ball.moveBy((0, _vec2Math.Vec2Math).mul(normalized, ball.radius / requiredDistance * delta * ball.bounceValue * immovable.bounceValue));
    }
}
function _collideBallAndLine(ball, line, lineBounce) {
    try {
        const projectionPoint = line.getPointProjection(ball.currentPosition);
        // We definitely know that projection point is on the line, so we just need to check if it's
        // between the ends.
        if (line.inBetweenFast(projectionPoint)) {
            const between = (0, _vec2Math.Vec2Math).diff(projectionPoint, ball.currentPosition);
            if (between.length2 < ball.radius2) {
                const normalized = between.ort;
                const sign = normalized.dot(line.normal) > 0 ? 1 : -1;
                const delta = sign * (ball.radius - between.length);
                ball.moveBy((0, _vec2Math.Vec2Math).mul(normalized, -delta * ball.bounceValue * lineBounce));
            }
        }
    } catch (e) {}
}
function collideBallAndImmovableLine(ball, line) {
    if (!ball.getBoundary().intersect(line.getCollisionRange())) return;
    _collideBallAndLine(ball, line._line, line.bounceValue);
}
function collideBallAndImmovablePolygon(ball, polygon) {
    if (!ball.getBoundary().intersect(polygon.getCollisionRange())) return;
    polygon.lines.forEach((line)=>_collideBallAndLine(ball, line._line, line.bounceValue));
}
function flipObjects(obj1, obj2) {
    return {
        a: obj2,
        b: obj1
    };
}
function collide(a, b) {
    let obj1 = a;
    let obj2 = b;
    if (obj1.type > obj2.type) {
        const flipped = flipObjects(obj1, obj2);
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
class BaseSolverObject {
    constructor(){
        this.type = (0, _types.SolverObjectTypes).TypeNull;
        this.previousPosition = (0, _vec2.Vec2).Zero();
        this.currentPosition = (0, _vec2.Vec2).Zero();
        BaseSolverObject.index += 1;
        this.index = BaseSolverObject.index;
    }
    update(step) {}
    accelerate(acc) {}
    collide(obj) {}
    inside(boundary) {
        return this.currentPosition.x >= boundary.left && this.currentPosition.x <= boundary.right && this.currentPosition.y >= boundary.top && this.currentPosition.y <= boundary.bottom;
    }
    debugRender(context) {}
    toString() {
        return "BaseSolverObject";
    }
}
BaseSolverObject.index = 0;

},{"./types":"7Eyh2","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgsCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2Rect", ()=>Vec2Rect);
var _vec2 = require("./vec2");
var _exceptions = require("./exceptions");
class Vec2Rect {
    constructor(center, size){
        this.position = center.copy();
        this.size = size.copy();
        if (this.size.x < 0 || this.size.y < 0) throw new (0, _exceptions.Vec2ExceptionRectSizeShouldBePositive)();
        this.recalculate();
    }
    recalculate() {
        this._width2 = this.size.x / 2;
        this._height2 = this.size.y / 2;
        this._left = this.position.x - this._width2;
        this._right = this.position.x + this._width2;
        this._top = this.position.y - this._height2;
        this._bottom = this.position.y + this._height2;
    }
    copy() {
        return new Vec2Rect(this.position, this.size);
    }
    intersect(rect) {
        return !(this.left > rect.right || this.right < rect.left || this.top > rect.bottom || this.bottom < rect.top);
    }
    contains(point) {
        return point.x > this.left && point.x < this.right && point.y > this.top && point.y < this.bottom;
    }
    moveBy(delta) {
        this.position.addSelf(delta);
        this.recalculate();
    }
    moveTo(pos) {
        this.position = pos.copy();
        this.recalculate();
    }
    get nw() {
        return new Vec2Rect(new (0, _vec2.Vec2)(this.position.x - this._width2 / 2, this.position.y - this._height2 / 2), new (0, _vec2.Vec2)(this._width2, this._height2));
    }
    get ne() {
        return new Vec2Rect(new (0, _vec2.Vec2)(this.position.x + this._width2 / 2, this.position.y - this._height2 / 2), new (0, _vec2.Vec2)(this._width2, this._height2));
    }
    get se() {
        return new Vec2Rect(new (0, _vec2.Vec2)(this.position.x + this._width2 / 2, this.position.y + this._height2 / 2), new (0, _vec2.Vec2)(this._width2, this._height2));
    }
    get sw() {
        return new Vec2Rect(new (0, _vec2.Vec2)(this.position.x - this._width2 / 2, this.position.y + this._height2 / 2), new (0, _vec2.Vec2)(this._width2, this._height2));
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    get top() {
        return this._top;
    }
    get bottom() {
        return this._bottom;
    }
    get diag() {
        return this.size.length;
    }
    get width() {
        return this.size.x;
    }
    get height() {
        return this.size.y;
    }
}

},{"./vec2":"bp79Y","./exceptions":"68SyS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34uaH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderableObject", ()=>RenderableObject);
class RenderableObject {
    constructor(solverObject, renderItem){
        this.solverObject = null;
        this.renderItem = null;
        this.solverObject = solverObject;
        this.renderItem = renderItem;
    }
    update() {
        this.renderItem.position = this.solverObject.currentPosition;
    }
    render() {
        this.update();
        this.renderItem.render();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kn5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableBallsObject", ()=>ImmovableBallsObject);
var _ball = require("./ball");
var _types = require("./types");
var _math = require("../vector/math");
var _vec2 = require("../vector/vec2");
class ImmovableBallsObject extends (0, _ball.BallsObject) {
    /**
     * @param {Vec2} position
     * @param {number} [radius]
     */ constructor(position, radius){
        super(position, radius);
        this.type = (0, _types.SolverObjectTypes).TypeImmovableBall;
        this.immovable = true;
        this.bounceValue = 0.5;
        /**
         * @type {Vec2}
         * @private
         */ this._fixedPosition = null;
        this._fixedPosition = position.copy();
    }
    update(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
        this.collisionRange.moveTo(this.currentPosition);
    }
    addToSpace(solverSpace) {
        const vec = new (0, _vec2.Vec2)(this.radius * (0, _math.SQRT2), this.radius * (0, _math.SQRT2));
        const leftTop = this.currentPosition.sum(vec);
        const rightBottom = this.currentPosition.diff(vec);
        solverSpace.addRectangularObject(leftTop, rightBottom, this);
    }
    moveTo(position) {
        this.currentPosition = position.copy();
        this.previousPosition = position.copy();
        this._fixedPosition = position.copy();
        super.moveTo(position);
    }
}

},{"./ball":"5IfJk","./types":"7Eyh2","../vector/math":"fX8MB","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bihaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableLineRenderableObject", ()=>ImmovableLineRenderableObject);
var _object = require("./object");
class ImmovableLineRenderableObject extends (0, _object.RenderableObject) {
    /**
     * @type {ImmovableLineObject}
     */ solverObject = null;
    constructor(ballsObject, renderItem){
        super(ballsObject);
        this.solverObject = ballsObject;
        this.renderItem = renderItem;
    }
    update() {
        super.update();
        this.renderItem.direction = this.solverObject._direction;
    }
}

},{"./object":"34uaH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4D1b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableLineObject", ()=>ImmovableLineObject);
parcelHelpers.export(exports, "createImmovableLine", ()=>createImmovableLine);
parcelHelpers.export(exports, "createImmovableLineFrom2Points", ()=>createImmovableLineFrom2Points);
var _vec2Line = require("../vector/vec2Line");
var _types = require("./types");
var _vec2Math = require("../vector/vec2Math");
var _immovable = require("./immovable");
var _vec2Rect = require("../vector/vec2Rect");
class ImmovableLineObject extends (0, _immovable.ImmovableSolverObject) {
    constructor(position, direction){
        super();
        this.type = (0, _types.SolverObjectTypes).TypeImmovableLine;
        this.immovable = true;
        this.bounceValue = 1;
        if (position instanceof (0, _vec2Line.Vec2Line)) {
            this.currentPosition = position.vec1.copy();
            this.previousPosition = position.vec1.copy();
            this._direction = position.direction.copy().flipSelf();
        } else {
            this.currentPosition = position.copy();
            this.previousPosition = position.copy();
            this._direction = direction;
        }
        this._line = new (0, _vec2Line.Vec2Line)(this.currentPosition.copy(), this.currentPosition.copy().sum(this._direction));
        this.collisionRange = new (0, _vec2Rect.Vec2Rect)(this.currentPosition.sum(this._direction.mul(0.5)), this._direction.abs);
    }
    update(step) {
        this.currentPosition = this._line.vec1;
        this.previousPosition = this._line.vec2;
    }
    addToSpace(solverSpace) {
        solverSpace.addRectangularObject(this._line.vec1, this._line.vec2, this);
    }
    moveBy(delta) {
        this.currentPosition.addSelf(delta);
        this.previousPosition.addSelf(delta);
        this._line.moveBy(delta);
        this.collisionRange = new (0, _vec2Rect.Vec2Rect)(this.currentPosition.sum(this._direction.mul(0.5)), this._direction.abs);
    }
    moveTo(position) {
        const delta = (0, _vec2Math.Vec2Math).diff(position, this._line.vec1);
        this.moveBy(delta);
    }
    debugRender(context) {
        context.strokeStyle("#00FF00");
        context.line(this._line.vec1, this._line.vec2);
        context.text(`${this.index}`, this._line.vec1);
        context.strokeStyle("#FFFFFF");
        context.lineWidth(10);
        const point2 = this.currentPosition.sum(this._line.normal.flipSelf().mul(100));
        context.line(this.currentPosition.x, this.currentPosition.y, point2.x, point2.y);
        context.lineWidth(1);
        context.strokeStyle("#FF0000");
        context.rect(this.collisionRange.left, this.collisionRange.top, this.collisionRange.width, this.collisionRange.height);
    }
    toString() {
        return "ImmovableLine";
    }
    inside(boundary) {
        return boundary.intersect(this.collisionRange);
    }
    intersects(range) {
        if (!range.intersect(this.collisionRange)) return false;
        if (range.contains(this._line.vec1) || range.contains(this._line.vec2)) return true;
        if (this.collisionRange.top < range.top && this.collisionRange.bottom > range.top) // TOP CROSS
        return true;
        if (this.collisionRange.top < range.bottom && this.collisionRange.bottom > range.bottom) // BOTTOM CROSS
        return true;
        if (this.collisionRange.left < range.left && this.collisionRange.right > range.left) // LEFT CROSS
        return true;
        if (this.collisionRange.left < range.right && this.collisionRange.right > range.right) // RIGHT
        return true;
    }
    isPointInsideObject(point) {
        return false;
    }
    getCollisionRange() {
        return this.collisionRange;
    }
}
function createImmovableLine(position, direction) {
    return new ImmovableLineObject(position, direction);
}
function createImmovableLineFrom2Points(point1, point2) {
    return new ImmovableLineObject(point1, (0, _vec2Math.Vec2Math).diff(point2, point1));
}

},{"../vector/vec2Line":"k0EZw","./types":"7Eyh2","../vector/vec2Math":"nZL8C","./immovable":"5OzDg","../vector/vec2Rect":"fgsCI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OzDg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImmovableSolverObject", ()=>ImmovableSolverObject);
var _object = require("./object");
class ImmovableSolverObject extends (0, _object.BaseSolverObject) {
}

},{"./object":"66Aay","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAxYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Line", ()=>Line);
var _item = require("./item");
var _vec2 = require("../vector/vec2");
class Line extends (0, _item.Item) {
    constructor(renderer, position, direction, color){
        super(renderer, position);
        this.direction = (0, _vec2.Vec2).Zero();
        this.color = "#00ff00";
        this.direction = direction;
        if (color) this.color = color;
    }
    render() {
        this.renderer.strokeStyle(this.color);
        this.renderer.vector(this.position, this.direction);
    }
}

},{"./item":"62t5i","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZiSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleWithText", ()=>CircleWithText);
var _circle = require("./circle");
class CircleWithText extends (0, _circle.Circle) {
    constructor(context, position, r, color, text, textColor){
        super(context, position, r, color);
        this.text = "";
        this.textColor = "#ffffff";
        this.text = text;
        if (textColor) this.textColor = textColor;
    }
    render() {
        super.render();
        if (this.text !== "") {
            this.renderer.fillStyle(this.textColor);
            this.renderer.text(this.text, this.position);
        }
    }
}

},{"./circle":"c8cAT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"datdc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "index2color", ()=>index2color);
function index2color(index) {
    const frequency = 0.005;
    const r = Math.floor(Math.sin(frequency * index + 0) * 127 + 128);
    const g = Math.floor(Math.sin(frequency * index + 2) * 127 + 128);
    const b = Math.floor(Math.sin(frequency * index + 4) * 127 + 128);
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOYyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewportConstrain", ()=>ViewportConstrain);
var _constrain = require("./constrain");
class ViewportConstrain extends (0, _constrain.Constrain) {
    constructor(width, height){
        super();
        this._width = 0;
        this._height = 0;
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
        const newPosition = obj.currentPosition.copy();
        let changePosition = false;
        if (obj.currentPosition.x - obj.radius < 0) {
            newPosition.x = obj.radius;
            changePosition = true;
        } else if (obj.currentPosition.x + obj.radius > this._width) {
            newPosition.x = this._width - obj.radius;
            changePosition = true;
        }
        if (obj.currentPosition.y - obj.radius < 0) {
            newPosition.y = obj.radius;
            changePosition = true;
        } else if (obj.currentPosition.y + obj.radius > this._height) {
            newPosition.y = this._height - obj.radius;
            changePosition = true;
        }
        if (changePosition) obj.moveTo(newPosition);
    }
}

},{"./constrain":"jvBxb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvBxb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Constrain", ()=>Constrain);
class Constrain {
    constructor(){}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajvKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMilkshake", ()=>createMilkshake);
var _vec2 = require("../vector/vec2");
var _vec2Line = require("../vector/vec2Line");
const p = [
    new (0, _vec2.Vec2)(0, 0),
    new (0, _vec2.Vec2)(70, 380),
    new (0, _vec2.Vec2)(270, 380),
    new (0, _vec2.Vec2)(340, 0),
    new (0, _vec2.Vec2)(360, 0),
    new (0, _vec2.Vec2)(280, 400),
    new (0, _vec2.Vec2)(60, 400),
    new (0, _vec2.Vec2)(-20, 0)
];
function createMilkshake(size, position) {
    const center = position.diff(new (0, _vec2.Vec2)(180 * size, 200 * size));
    const milkShakeLines = [];
    for(let i = 0; i < p.length - 1; i++)milkShakeLines.push(new (0, _vec2Line.Vec2Line)(p[i].mul(size).sum(center), p[i + 1].mul(size).sum(center)));
    milkShakeLines.push(new (0, _vec2Line.Vec2Line)(p[p.length - 1].mul(size).sum(center), p[0].mul(size).sum(center)));
    return milkShakeLines;
}

},{"../vector/vec2":"bp79Y","../vector/vec2Line":"k0EZw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vIhi":[function(require,module,exports) {
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
class Scene2 extends (0, _baseScene.BaseScene) {
    constructor(engine){
        super(engine);
        this._canMoveRedObject = false;
        this.timePassedSinceLastBallCreated = 0;
        this.ballIndex = 0;
        this.center = new (0, _vec2.Vec2)(this.engine.canvas.width / 2, this.engine.canvas.height / 2);
        this.radius = Math.min(this.center.x, this.center.y);
        this.generator = new (0, _objectsGenerator.ObjectsGenerator)(this.engine.solver);
        this.createActor();
        this.initConstrain();
    }
    createBall() {
        const baseBallVelocity = new (0, _vec2.Vec2)(0, 0);
        const ballGeneratorPoint = this.actor.solverObject.currentPosition;
        const toCenter = ballGeneratorPoint.diff(this.center);
        const n = toCenter.ort;
        const ballVelocity = n.mul(-1);
        const obj = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.diff(n.mul(40)), 5).setVelocity(ballVelocity), new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), 7, (0, _index2Color.index2color)(this.ballIndex + 200), "", "#000000"));
        this.engine.addObject(obj);
        this.ballIndex++;
    }
    createActor() {
        this.actor = new (0, _object.RenderableObject)(new (0, _immovableBall.ImmovableBallsObject)(new (0, _vec2.Vec2)(230, 50), 30), new (0, _circle.Circle)(this.engine.context, (0, _vec2.Vec2).Zero(), 30, "#ff0000"));
        this.engine.addObject(this.actor);
    }
    initConstrain() {
        this.engine.constrain = new (0, _circle1.CircleConstrain)(this.center, this.radius);
        this.engine.items.push(new (0, _circle.Circle)(this.engine.context, this.center, this.radius, "#ffffff"));
    }
    getActor() {
        return this.actor;
    }
    tick(timePassed) {
        if (this.canMoveRedObject) {
            this.timePassedSinceLastBallCreated += timePassed;
            if (this.timePassedSinceLastBallCreated > 0.05) {
                this.timePassedSinceLastBallCreated = 0;
                this.createBall();
            }
        }
    }
    processUserInput(event) {
        const mouseEvent = event;
        if (mouseEvent.leftButtonDown) {
            if (this.actor.solverObject.isPointInsideObject(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY))) this.canMoveRedObject = true;
            this.canMoveRedObject;
        } else this.canMoveRedObject = false;
        if (mouseEvent.screenX || mouseEvent.screenY) this.actor.solverObject.moveTo(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY));
    }
    set canMoveRedObject(can) {
        this._canMoveRedObject = can;
        if (can) this.actor.renderItem.color = "#00ff00";
        else this.actor.renderItem.color = "#ff0000";
    }
    get canMoveRedObject() {
        return this._canMoveRedObject;
    }
}

},{"./baseScene":"dRCUa","../items/circle":"c8cAT","../items/circleWithText":"eZiSs","../vector/vec2":"bp79Y","../renderableObjects/object":"34uaH","../objects/immovableBall":"8kn5q","../constrains/circle":"jNoKM","../generators/objectsGenerator":"g4Anj","../objects/ball":"5IfJk","../items/utils/index2color":"datdc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNoKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleConstrain", ()=>CircleConstrain);
var _constrain = require("./constrain");
var _vec2 = require("../vector/vec2");
class CircleConstrain extends (0, _constrain.Constrain) {
    constructor(center, radius){
        super();
        /**
         *
         * @type {Vec2}
         */ this.center = (0, _vec2.Vec2).Zero();
        this.radius = 0;
        this.center = center;
        this.radius = radius;
    }
    applyConstrain(obj) {
        const toCenter = obj.currentPosition.diff(this.center);
        const distance = toCenter.length;
        const r = obj.radius || 0;
        if (distance > this.radius - r) {
            const n = toCenter.ort;
            obj.moveTo(this.center.sum(n.mul(this.radius - r)));
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
var _polygonRainbow = require("../items/polygonRainbow");
class Scene3 extends (0, _baseScene.BaseScene) {
    constructor(engine){
        super(engine);
        this._createBalls = false;
        this.timePassedSinceLastBallCreated = 0;
        this.ballIndex = 0;
        this.ballsViews = [];
        this.center = new (0, _vec2.Vec2)(this.engine.canvas.width / 2, this.engine.canvas.height / 2);
        this.radius = Math.min(this.center.x, this.center.y);
        this.generator = new (0, _objectsGenerator.ObjectsGenerator)(this.engine.solver);
        this.createActor();
        this.initConstrain();
    }
    createBall() {
        const baseBallVelocity = new (0, _vec2.Vec2)(0, 0);
        const ballGeneratorPoint = this.actor.solverObject.currentPosition;
        const toCenter = ballGeneratorPoint.diff(this.center);
        const n = toCenter.ort;
        const ballVelocity = n.mul(-1);
        const radius = 20 + Math.random() * 30;
        const ballView = new (0, _circleWithText.CircleWithText)(this.engine.context, (0, _vec2.Vec2).Zero(), radius, (0, _index2Color.index2color)(this.ballIndex + 200), "", "#000000");
        this.ballsViews.push(ballView);
        const obj = new (0, _object.RenderableObject)(new (0, _ball.BallsObject)(ballGeneratorPoint.diff(n.mul(40)), radius).setVelocity(ballVelocity), ballView);
        this.engine.addObject(obj);
        this.ballIndex++;
    }
    createActor() {
        const trianglePoints = (0, _triangle.createTriangle)(60);
        this.nextTickActorPosition = this.center;
        const polygonObject = new (0, _immovablePolygon.ImmovablePolygon)(this.center, trianglePoints);
        const polygonView = new (0, _polygonRainbow.PolygonRainbow)(this.engine.context, (0, _vec2.Vec2).Zero(), trianglePoints, "#ff0000");
        this.actor = new (0, _object.RenderableObject)(polygonObject, polygonView);
        this.engine.addObject(this.actor);
    }
    initConstrain() {
        this.engine.constrain = new (0, _circle1.CircleConstrain)(this.center, this.radius);
        this.engine.items.push(new (0, _circle.Circle)(this.engine.context, this.center, this.radius, "#555555"));
    }
    getActor() {
        return this.actor;
    }
    tick(timePassed) {
        this.actor.solverObject.moveTo(this.nextTickActorPosition);
        if (this.createBalls) {
            this.timePassedSinceLastBallCreated += timePassed;
            if (this.timePassedSinceLastBallCreated > 0.05) {
                this.timePassedSinceLastBallCreated = 0;
                this.createBall();
            }
        }
        this.ballsViews.forEach((ballView)=>{
            ballView.color = (0, _index2Color.index2color)(ballView.position.y);
        });
    }
    processUserInput(event) {
        const mouseEvent = event;
        if (mouseEvent.leftButtonDown) {
            if (this.actor.solverObject.isPointInsideObject(new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY))) this.createBalls = true;
        } else this.createBalls = false;
        if (mouseEvent.screenX || mouseEvent.screenY) this.nextTickActorPosition = new (0, _vec2.Vec2)(mouseEvent.screenX, mouseEvent.screenY);
    }
    set createBalls(can) {
        this._createBalls = can;
        if (can) this.actor.renderItem.color = "#00ff00";
        else this.actor.renderItem.color = "#ff0000";
    }
    get createBalls() {
        return this._createBalls;
    }
}

},{"./baseScene":"dRCUa","../items/circle":"c8cAT","../items/circleWithText":"eZiSs","../vector/vec2":"bp79Y","../renderableObjects/object":"34uaH","../constrains/circle":"jNoKM","../generators/objectsGenerator":"g4Anj","../objects/ball":"5IfJk","../items/utils/index2color":"datdc","../primitives/triangle":"2kNMb","../objects/ImmovablePolygon":"iluwZ","../items/polygonRainbow":"3W5Qt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kNMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTriangle", ()=>createTriangle);
var _vec2 = require("../vector/vec2");
function createTriangle(size) {
    const height = size * Math.sqrt(3) / 2;
    const center = new (0, _vec2.Vec2)(size / 2, size / 2 * (1 / Math.sqrt(3)));
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
var _vec2 = require("../vector/vec2");
var _immovableLine = require("./immovableLine");
var _vec2Math = require("../vector/vec2Math");
var _vec2Rect = require("../vector/vec2Rect");
class ImmovablePolygon extends (0, _immovable.ImmovableSolverObject) {
    constructor(position, points){
        super();
        this._localPoints = [];
        this._lines = [];
        this.type = (0, _types.SolverObjectTypes).TypeImmovablePolygon;
        this.immovable = true;
        this.bounceValue = 1;
        this.currentPosition = position.copy();
        this.previousPosition = position.copy();
        this._fixedPosition = position.copy();
        points.forEach((point)=>{
            this._localPoints.push(point.copy());
        });
        this._recreateLines();
    }
    _recreateLines() {
        const pointsToProcess = [
            ...this._localPoints
        ].reverse();
        let firstPoint = pointsToProcess.shift();
        let secondPoint;
        let lastPoint = firstPoint;
        this._lines.splice(0, this._lines.length);
        while(secondPoint = pointsToProcess.shift()){
            const line = (0, _immovableLine.createImmovableLineFrom2Points)(this._fixedPosition.sum(lastPoint), this._fixedPosition.sum(secondPoint));
            this._lines.push(line);
            lastPoint = secondPoint;
        }
        const line = (0, _immovableLine.createImmovableLineFrom2Points)(this._fixedPosition.sum(lastPoint), this._fixedPosition.sum(firstPoint));
        this._lines.push(line);
    }
    update(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
    }
    addToSpace(solverSpace) {
        try {
            this._lines.forEach((line)=>line.addToSpace(solverSpace));
        } catch (e) {
            debugger;
            console.log(e, this._lines);
        }
    }
    isPointInsideObject(point) {
        return true;
    }
    moveBy(delta) {
        this._fixedPosition.addSelf(delta);
        this._lines.forEach((line)=>line.moveBy(delta));
    }
    moveTo(position) {
        const delta = (0, _vec2Math.Vec2Math).diff(position, this._fixedPosition);
        this.moveBy(delta);
    }
    toString() {
        return "ImmovablePolygon";
    }
    debugRender(context) {
        context.strokeStyle("#00FF00");
        this._lines.forEach((line)=>line.debugRender(context));
    }
    get lines() {
        return this._lines;
    }
    intersects(range) {
        return this._lines.some((line)=>line.intersects(range));
    }
    getCollisionRange() {
        return new (0, _vec2Rect.Vec2Rect)(this.currentPosition, new (0, _vec2.Vec2)(60, 60));
    }
}

},{"./immovable":"5OzDg","./types":"7Eyh2","../vector/vec2":"bp79Y","./immovableLine":"f4D1b","../vector/vec2Math":"nZL8C","../vector/vec2Rect":"fgsCI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3W5Qt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PolygonRainbow", ()=>PolygonRainbow);
var _polygon = require("./polygon");
class PolygonRainbow extends (0, _polygon.Polygon) {
}

},{"./polygon":"bKrz3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKrz3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polygon", ()=>Polygon);
var _item = require("./item");
var _vec2 = require("../vector/vec2");
class Polygon extends (0, _item.Item) {
    constructor(renderer, position, points, color){
        super(renderer, position);
        this.direction = (0, _vec2.Vec2).Zero();
        this.color = "#00ff00";
        this.points = points;
        if (color) this.color = color;
    }
    render() {
        this.renderer.strokeStyle(this.color);
        this.renderer.polygon(this.points.map((point)=>point.sum(this.position)));
    }
}

},{"./item":"62t5i","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8G7on":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Stats", ()=>Stats);
class Stats {
    constructor(){
        this.tickData = [];
        this.totalData = [];
        this.keys = new Map();
    }
    resetTick() {
        this.tickData.forEach((value, index)=>this.tickData[index] = 0);
    }
    writeStats(key, value) {
        const index = this.registerKey(key);
        this.tickData[index] = value;
        this.totalData[index] = value;
    }
    addStats(key, value = 1) {
        const index = this.registerKey(key);
        this.tickData[index] += value;
        this.totalData[index] += value;
    }
    registerKey(key) {
        if (this.keys.has(key)) return this.keys.get(key);
        this.tickData.push(0);
        this.totalData.push(0);
        this.keys.set(key, this.tickData.length - 1);
        return this.tickData.length - 1;
    }
    getStats(key) {
        if (!this.keys.has(key)) return {
            key,
            total: 0,
            tick: 0
        };
        const index = this.keys.get(key);
        return {
            key,
            total: this.totalData[index],
            tick: this.tickData[index]
        };
    }
    getTickData() {
        const result = [];
        this.keys.forEach((index, key)=>{
            result.push({
                key,
                value: this.tickData[index]
            });
        });
        return result;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eD4iS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuadTreeSolver", ()=>QuadTreeSolver);
var _vec2 = require("../vector/vec2");
var _baseSolver = require("./baseSolver");
var _quadTreeSolverSpace = require("./quadTreeSolverSpace");
class QuadTreeSolver extends (0, _baseSolver.BaseSolver) {
    constructor(worldSize, stats){
        super(worldSize, stats);
        this.gravity = (0, _vec2.Vec2).Zero();
        this.configure();
    }
    reset() {
        super.reset();
        this.space.clear();
    }
    configure() {
        super.configure();
        this.gravity = new (0, _vec2.Vec2)(0, 100);
        this.space = new (0, _quadTreeSolverSpace.QuadTreeSolverSpace)(this.worldSize.x, this.worldSize.y);
    }
    processOptimizations() {
        this.space.clear();
        this.objects.forEach((obj, index)=>{
            obj.addToSpace(this.space);
            this.stats.addStats(`Solver object: ${obj.toString()}`);
        });
    }
    applyForces() {
        this.objects.forEach((obj)=>obj.accelerate(this.gravity));
    }
    processCollisions() {
        this.objects.forEach((objA)=>{
            const range = objA.getCollisionRange();
            const possibleObjects = this.space.root.query(range);
            this.stats.addStats("processCollisions.queryPossibleObjects.calls");
            possibleObjects.forEach((objB)=>{
                if (objA === objB) return;
                if (objA.immovable && objB.immovable) return;
                this.stats.addStats("processCollisions.calls");
                objA.collide(objB);
            });
        });
    }
    debugRender(context) {
        this.space.debugRender(context);
        this.objects.forEach((object)=>object.debugRender(context));
    }
}
function makeKey(obj1, obj2) {
    return [
        obj1.index,
        obj2.index
    ].sort().join("-");
}

},{"../vector/vec2":"bp79Y","./baseSolver":"jzdWf","./quadTreeSolverSpace":"50FxH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50FxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuadTree", ()=>QuadTree);
parcelHelpers.export(exports, "QuadTreeSolverSpace", ()=>QuadTreeSolverSpace);
var _baseSolverSpace = require("./baseSolverSpace");
var _vec2Rect = require("../vector/vec2Rect");
var _vec2 = require("../vector/vec2");
class QuadTree {
    constructor(boundary, capacity){
        this.divided = false;
        this.minimumDiag = 10;
        this.boundary = boundary.copy();
        this.capacity = capacity;
        this.objects = [];
        this.nodes = [];
        this.divided = false;
    }
    clear() {
        if (this.objects.length > 0) this.objects.splice(0);
        if (this.divided) this.nodes.forEach((node)=>node.clear());
        this.divided = false;
    }
    get canSubdivide() {
        return this.boundary.diag > this.minimumDiag;
    }
    insert(obj) {
        if (!obj.inside(this.boundary)) return;
        if (this.objects.length < this.capacity) {
            this.objects.push(obj);
            return true;
        }
        if (!this.canSubdivide) {
            this.objects.push(obj);
            return true;
        }
        if (!this.divided) {
            this.subdivide();
            this.divided = true;
        }
        let index = 0;
        while(index < 4){
            if (this.nodes[index].insert(obj)) index = 5;
            index++;
        }
        return index === 5;
    }
    subdivide() {
        this.nodes[QuadTree.NW] = new QuadTree(this.boundary.nw, this.capacity);
        this.nodes[QuadTree.NE] = new QuadTree(this.boundary.ne, this.capacity);
        this.nodes[QuadTree.SE] = new QuadTree(this.boundary.se, this.capacity);
        this.nodes[QuadTree.SW] = new QuadTree(this.boundary.sw, this.capacity);
    }
    query(range) {
        let result = [];
        if (!this.boundary.intersect(range)) return result;
        this.objects.forEach((obj)=>{
            if (obj.intersects(range)) result.push(obj);
        });
        if (this.divided) this.nodes.forEach((subTree)=>subTree.query(range).forEach((obj)=>result.push(obj)));
        return result;
    }
    debugRender(render) {
        render.strokeStyle(this.objects.length > 0 ? "#ff0000" : "#00ff00");
        render.rect(this.boundary.left, this.boundary.top, this.boundary.width - 2, this.boundary.height - 2);
        if (this.divided) this.nodes.forEach((subTree)=>subTree.debugRender(render));
    }
}
QuadTree.NW = 0;
QuadTree.NE = 1;
QuadTree.SE = 2;
QuadTree.SW = 3;
class QuadTreeSolverSpace extends (0, _baseSolverSpace.BaseSolverSpace) {
    constructor(width, height){
        super();
        this.root = new QuadTree(new (0, _vec2Rect.Vec2Rect)(new (0, _vec2.Vec2)(width / 2, height / 2), new (0, _vec2.Vec2)(width, height)), 4);
    }
    clear() {
        this.root.clear();
    }
    addObject(obj) {
        this.root.insert(obj);
    }
    addPointObject(worldX, worldY, obj) {
        this.root.insert(obj);
    }
    addRectangularObject(worldLeftTop, worldRightBottom, obj) {
        this.root.insert(obj);
    }
    debugRender(render) {
        this.root.debugRender(render);
    }
}

},{"./baseSolverSpace":"3vpVg","../vector/vec2Rect":"fgsCI","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vUyF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Canvas2DRender", ()=>Canvas2DRender);
var _baseRender = require("./baseRender");
var _vec2 = require("../vector/vec2");
class Canvas2DRender extends (0, _baseRender.BaseRender) {
    constructor(context){
        super();
        this._context = context;
    }
    getCoord(x, y) {
        let cx, cy;
        if (x === undefined) {
            cx = this._position.x;
            cy = this._position.y;
        } else if (x instanceof (0, _vec2.Vec2)) {
            cx = x.x;
            cy = x.y;
        } else {
            cx = x;
            cy = y;
        }
        return [
            cx,
            cy
        ];
    }
    circle(radius, x, y) {
        const [cx, cy] = this.getCoord(x, y);
        this._context.beginPath();
        this._context.arc(cx, cy, radius, 0, 2 * Math.PI);
        this._context.stroke();
    }
    fillCircle(radius, x, y) {
        const [cx, cy] = this.getCoord(x, y);
        this._context.beginPath();
        this._context.arc(cx, cy, radius, 0, 2 * Math.PI);
        this._context.fill();
    }
    color() {}
    fillStyle(style) {
        this._context.fillStyle = style;
    }
    fillRect(x1, y1, x2, y2) {
        this._context.fillRect(x1, y1, x2 - x1, y2 - y1);
    }
    line(x, y, x2, y2) {
        if (y instanceof (0, _vec2.Vec2)) {
            [x, y] = this.getCoord(x);
            [x2, y2] = this.getCoord(y);
        } else [x, y] = this.getCoord(x, y);
        this._context.beginPath();
        this._context.moveTo(x, y);
        this._context.lineTo(x2, y2);
        this._context.stroke();
    }
    vector(position, direction) {
        this._context.beginPath();
        this._context.moveTo(position.x, position.y);
        this._context.lineTo(position.x + direction.x, position.y + direction.y);
        this._context.stroke();
    }
    rect(x, y, width, height) {
        this._context.strokeRect(x, y, width, height);
    }
    text(text, x, y) {
        const [cx, cy] = this.getCoord(x, y);
        this._context.fillStyle = "#ffffff";
        this._context.textAlign = "start";
        this._context.fillText(text, cx, cy);
    }
    moveTo() {}
    font(font) {
        this._context.font = font;
    }
    lineTo(x, y) {
        const [x2, y2] = this.getCoord(x, y);
        this._context.moveTo(this._position.x, this._position.y);
        this._context.lineTo(x2, y2);
    }
    strokeStyle(style) {
        this._context.strokeStyle = style;
    }
    lineWidth(width) {
        this._context.lineWidth = width;
    }
    polygon(worldPoints) {
        this._context.beginPath(); // Start a new path
        let index = 0;
        this._context.moveTo(worldPoints[index].x, worldPoints[index].y);
        while(index < worldPoints.length - 1){
            index++;
            this._context.lineTo(worldPoints[index].x, worldPoints[index].y);
        }
        this._context.lineTo(worldPoints[0].x, worldPoints[0].y);
        this._context.stroke();
    }
}

},{"./baseRender":"7zA4Y","../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7zA4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseRender", ()=>BaseRender);
var _vec2 = require("../vector/vec2");
class BaseRender {
    constructor(){
        this._position = (0, _vec2.Vec2).Zero();
    }
    moveTo(x, y) {
        this._position.moveTo(x, y);
    }
}

},{"../vector/vec2":"bp79Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lxFny","hb2Bw"], "hb2Bw", "parcelRequire62ee")

//# sourceMappingURL=index.059c6d4a.js.map
