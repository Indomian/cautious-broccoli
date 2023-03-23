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
})({"ccn6U":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "c2528bfa8e789c37";
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

},{}],"fXkCw":[function(require,module,exports) {
var _index = require("../render/index");
var _messages = require("../host/messages");
var render;
onmessage = function(event) {
    switch(event.data.type){
        case (0, _messages.MessageType).MessageInit:
            render = new (0, _index.Render)(event.data.canvas);
            render.start();
            break;
        case (0, _messages.MessageType).MessageUserInput:
            if (render) render.processUserInput(event.data.event);
            break;
    }
};

},{"../render/index":"1c5al","../host/messages":"8fDji"}],"1c5al":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Render", ()=>Render);
var _circle = require("./items/circle");
var _vec2 = require("./vector/vec2");
var _viewport = require("./constrains/viewport");
var _circle1 = require("./constrains/circle");
var _solver = require("./solver");
var _object = require("./renderableObjects/object");
var _frame = require("./items/frame");
var _scene1 = require("./scenes/scene1");
class Render {
    /**
     * List of balls
     * @type {RenderableObject[]}
     */ objects = [];
    /**
     * @type {Constrain}
     */ constrains = null;
    /**
     * Solver for physics
     * @type {Solver}
     */ solver = null;
    flagRenderGrid = false;
    constructor(canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.timeRenderStart = performance.now();
        this.timeRenderEnd = performance.now();
        this.step = 0;
        /**
         * @type {RenderableObject[]}
         */ this.objects = [];
        this.items = [];
        this.generator = null;
        this.solver = null;
        this.redBall = null;
        this.configure();
    }
    configure() {
        this.solver = new (0, _solver.Solver)(new (0, _vec2.Vec2)(this.canvas.width, this.canvas.height));
        this.context.font = "10px serif";
        //this.switchToCircleConstrain();
        this.switchToViewportConstrain();
        this.solver.constrains = this.constrains;
        const scene = new (0, _scene1.Scene1)(this);
        this.generator = scene.generator;
        this.redBall = scene.getActor();
    }
    processUserInput(event) {
        if (event.leftButtonDown) {
            if (this.redBall.ballsObject.isPointInsideObject(new (0, _vec2.Vec2)(event.screenX, event.screenY))) this.canMoveRedObject = true;
            if (this.canMoveRedObject) this.redBall.ballsObject.moveBy(new (0, _vec2.Vec2)(event.dx, event.dy));
        } else this.canMoveRedObject = false;
        if (event.keyPressed === "g") this.flagRenderGrid = !this.flagRenderGrid;
    }
    /**
     * @param {RenderableObject} obj
     */ addObject(obj) {
        this.objects.push(obj);
        this.solver.addObject(obj.ballsObject);
    }
    update(time) {
        this.solver.update(time);
    }
    generatorsTick(time) {
        const newBalls = this.generator.getNextObjects(time);
        if (newBalls) newBalls.forEach((ball)=>this.addObject(ball));
    }
    tick() {
        if (this.step < 0) this.step = 0;
        this.generatorsTick(this.step / 1000);
        this.update(this.step / 1000);
        this.clear();
        this.renderItems();
        if (this.flagRenderGrid) this.renderGrid();
        this.printFPS();
        (0, _vec2.Vec2).lengthCallsCount = 0;
        (0, _vec2.Vec2).length2CallsCount = 0;
    }
    nextFrame = (time)=>{
        this.step = time - this.timeRenderEnd;
        if (this.step < 0) this.step = 0;
        this.tick();
        this.timeRenderEnd = time;
        self.requestAnimationFrame(this.nextFrame);
    };
    nextInterval = ()=>{
        this.timeRenderStart = performance.now();
        this.step = this.timeRenderStart - this.timeRenderEnd;
        if (this.step < 0) this.step = 0;
        this.tick();
        this.timeRenderEnd = performance.now();
    };
    renderItems() {
        this.items.forEach((item)=>item.render());
        this.objects.forEach((obj)=>obj.render());
    }
    printText(text, x, y) {
        this.context.fillStyle = "#ffffff";
        this.context.textAlign = "start";
        this.context.fillText(text, x, y);
    }
    printFPS() {
        this.context.fillStyle = "rgba(0,0,0,0.1)";
        this.context.fillRect(0, 0, 100, 60);
        this.printText(`${Math.round(this.step)} ms / ${Math.round(1000 / this.step)} FPS`, 0, 10);
        this.printText(`Length calls: ${(0, _vec2.Vec2).lengthCallsCount}`, 0, 20);
        this.printText(`Lenght2 calls: ${(0, _vec2.Vec2).length2CallsCount}`, 0, 30);
        this.printText(`Objects: ${this.objects.length}`, 0, 40);
        this.printText(`Compares per object: ${Math.round((0, _vec2.Vec2).lengthCallsCount / this.objects.length)}`, 0, 50);
    }
    clear() {
        this.context.fillStyle = "rgba(0, 0, 0, 0.9)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    start() {
        if (self.requestAnimationFrame) self.requestAnimationFrame(this.nextFrame);
        else setInterval(this.nextInterval, 16);
    }
    renderGrid() {
        this.solver.collisionGrid.forEach((column, row, cell, index)=>{
            const cellPosition = new (0, _vec2.Vec2)(column * this.solver.cellSize.x, row * this.solver.cellSize.y);
            const rect = new (0, _frame.Frame)(this.context, cellPosition, this.solver.cellSize.diff(new (0, _vec2.Vec2)(5, 5)), cell.count > 0 ? "#ff0000" : "#00ff00");
            if (cell.highlight) this.context.lineWidth = 10;
            rect.render();
            this.context.lineWidth = 1;
            this.printText(index, cellPosition.x + this.solver.cellSize.x / 2, cellPosition.y + this.solver.cellSize.y / 2);
        });
    }
    switchToCircleConstrain() {
        this.constrains = new (0, _circle1.CircleConstrain)(new (0, _vec2.Vec2)(this.canvas.width / 2, this.canvas.height / 2), this.canvas.height / 2);
        this.items.push(new (0, _circle.Circle)(this.context, this.canvas.width / 2, this.canvas.height / 2, this.canvas.height / 2, "#000000"));
    }
    switchToViewportConstrain() {
        this.constrains = new (0, _viewport.ViewportConstrain)(this.canvas.width, this.canvas.height);
    // this.items.push(
    //     new Rect(
    //         this.context,
    //         Vec2.Zero(),
    //         new Vec2(
    //             this.canvas.width,
    //             this.canvas.height
    //         ),
    //         '#000000'
    //     )
    // );
    }
}

},{"./items/circle":"1t8sT","./vector/vec2":"9XJHV","./constrains/viewport":"j2D16","./constrains/circle":"if6MS","./solver":"jiRu0","./renderableObjects/object":"lW37O","./items/frame":"fuQ1z","./scenes/scene1":"inrCn","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"1t8sT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>Circle);
var _item = require("./item");
class Circle extends (0, _item.Item) {
    r = 0;
    color = "#00ff00";
    constructor(context, position, r, color){
        super(context, position);
        if (r) this.r = r;
        if (color) this.color = color;
    }
    render() {
        this.context.beginPath();
        this.context.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}

},{"./item":"aIQJw","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"aIQJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item);
var _vec2 = require("../vector/vec2");
class Item {
    position = (0, _vec2.Vec2).Zero();
    /**
     *
     * @param {CanvasRenderingContext2D} context
     */ constructor(context, position){
        this.context = context;
        this.position = position;
    }
    /**
     * Method immediately renders object on context
     */ render() {}
    /**
     * Method tries to put object in render block
     */ queue() {}
}

},{"../vector/vec2":"9XJHV","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9XJHV":[function(require,module,exports) {
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

},{"./vec2Math":"j4cED","./math":"efHiM","./exceptions":"a3jqY","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"j4cED":[function(require,module,exports) {
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

},{"./vec2":"9XJHV","./exceptions":"a3jqY","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"a3jqY":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fn8Fk":[function(require,module,exports) {
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

},{}],"efHiM":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"j2D16":[function(require,module,exports) {
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
        super.applyConstrain(obj);
        if (obj.currentPosition.x - obj.radius < 0) obj.currentPosition.x = obj.radius;
        if (obj.currentPosition.x + obj.radius > this._width) obj.currentPosition.x = this._width - obj.radius;
        if (obj.currentPosition.y - obj.radius < 0) obj.currentPosition.y = obj.radius;
        if (obj.currentPosition.y + obj.radius > this._height) obj.currentPosition.y = this._height - obj.radius;
    }
}

},{"./constrain":"hb3g5","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hb3g5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Constrain", ()=>Constrain);
class Constrain {
    constructor(){}
    /**
     *
     * @param {BallsObject} obj
     */ applyConstrain(obj) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"if6MS":[function(require,module,exports) {
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
        super.applyConstrain(obj);
        const toCenter = obj.currentPosition.diff(this.center);
        const distance = toCenter.length;
        const r = obj.radius;
        if (distance > this.radius - r) {
            const n = toCenter.ort;
            obj.currentPosition = this.center.sum(n.mul(this.radius - r));
        }
    }
}

},{"./constrain":"hb3g5","../vector/vec2":"9XJHV","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"jiRu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Solver", ()=>Solver);
var _vec2 = require("./vector/vec2");
var _grid = require("./grid");
var Solver = /** @class */ function() {
    function Solver(worldSize) {
        this.objects = [];
        this.constrains = null;
        this.gravity = (0, _vec2.Vec2).Zero();
        this.subSteps = 4;
        this.useFixedTime = true;
        this.objects = [];
        this.worldSize = worldSize.copy();
        this.configure();
    }
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
        cell.objects.forEach(function(objB) {
            if (objA === objB) return;
            if (objA.immovable && objB.immovable) return;
            objA.collide(objB);
        });
    };
    Solver.prototype.processCell = function(index) {
        var _this = this;
        this.collisionGrid.cells[index].objects.forEach(function(objA) {
            _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index]); // SELF
            if (_this.collisionGrid.hasCell(index, -1)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index - 1]); // TOP
            if (_this.collisionGrid.hasCell(index, 1)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index + 1]); // BOTTOM
            if (_this.collisionGrid.hasCell(index + _this.collisionGrid.height, -1)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index + _this.collisionGrid.height - 1]); // RIGHT TOP
            if (_this.collisionGrid.hasCell(index + _this.collisionGrid.height, 0)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index + _this.collisionGrid.height]); // RIGHT
            if (_this.collisionGrid.hasCell(index + _this.collisionGrid.height, 1)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index + _this.collisionGrid.height + 1]); // RIGHT BOTTOM
            if (_this.collisionGrid.hasCell(index - _this.collisionGrid.height, -1)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index - _this.collisionGrid.height - 1]); // LEFT TOP
            if (_this.collisionGrid.hasCell(index - _this.collisionGrid.height, 0)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index - _this.collisionGrid.height]); // LEFT
            if (_this.collisionGrid.hasCell(index - _this.collisionGrid.height, 1)) _this.processCollisionsInCell(objA, _this.collisionGrid.cells[index - _this.collisionGrid.height + 1]); // LEFT BOTTOM
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

},{"./vector/vec2":"9XJHV","./grid":"8w6aC","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"8w6aC":[function(require,module,exports) {
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
    CollisionGrid.prototype.resize = function() {
        this.cells = [];
        this._size = this._width * this._height;
        for(var i = 0; i < this._size; i++)this.cells.push(new CollisionCell());
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
        if (point1.x === point2.x) // Vertical
        for(var cellIndex = index1; cellIndex < index2; cellIndex++)this.cells[cellIndex].addObject(obj);
        else if (point1.y === point2.y) // Horizontal
        for(var cellIndex = index1; cellIndex < index2; cellIndex += this.height)this.cells[cellIndex].addObject(obj);
        else {
            var left = Math.min(point1.x, point2.x);
            var top = Math.min(point1.y, point2.y);
            var right = Math.max(point1.x, point2.x);
            var bottom = Math.max(point1.y, point2.y);
            var height = bottom - top;
            var startFrom = this.makeIndexFromCoord(left, top);
            for(var x = 0; x <= right - left; x++)for(var y = 0; y <= height; y++){
                var cellIndex = startFrom + this.makeIndexFromCoord(x, y);
                this.addObjectByIndex(cellIndex, obj);
            }
        }
    };
    CollisionGrid.prototype.clear = function() {
        for(var i = 0; i < this.size; i++)this.cells[i].clear();
    };
    CollisionGrid.prototype.forEach = function(callback) {
        var _this = this;
        this.cells.forEach(function(cell, index) {
            var pos = _this.makeVecFromIndex(index);
            callback(pos.x, pos.y, cell, index);
        });
    };
    CollisionGrid.prototype.hasCell = function(index, dt) {
        if (index < 0 || index >= this.size) return false;
        var pos = this.makeVecFromIndex(index);
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

},{"./vector/vec2":"9XJHV","./vector/vec2Math":"j4cED","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"lW37O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderableObject", ()=>RenderableObject);
class RenderableObject {
    /**
     * @type {BallsObject}
     */ ballsObject = null;
    /**
     * @type {Item}
     */ renderItem = null;
    constructor(ballsObject, renderItem){
        this.ballsObject = ballsObject;
        this.renderItem = renderItem;
    }
    update() {
        this.renderItem.position = this.ballsObject.currentPosition;
    }
    render() {
        this.update();
        this.renderItem.render();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fuQ1z":[function(require,module,exports) {
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

},{"./rect":"d4B3G","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"d4B3G":[function(require,module,exports) {
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

},{"./item":"aIQJw","../vector/vec2":"9XJHV","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"inrCn":[function(require,module,exports) {
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
        var canvasCenter = new (0, _vec2.Vec2)(_this.engine.canvas.width / 2, _this.engine.canvas.height / 2);
        _this.generator = _this.createBallsGenerator(canvasCenter, new (0, _vec2.Vec2)(300, 300), new (0, _vec2.Vec2)(2, -2));
        _this.createBottomBouncyLine();
        _this.createMilkShake(canvasCenter);
        _this.createActor();
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
    Scene1.prototype.createActor = function() {
        this.actor = new (0, _object.RenderableObject)(new (0, _immovableBall.ImmovableBallsObject)(new (0, _vec2.Vec2)(230, 50), 30), new (0, _circle.Circle)(this.engine.context, (0, _vec2.Vec2).Zero(), 30, "#ff0000"));
        this.engine.addObject(this.actor);
    };
    Scene1.prototype.getActor = function() {
        return this.actor;
    };
    return Scene1;
}((0, _baseScene.BaseScene));

},{"./baseScene":"dsDU5","../generators/totalObjectsGenerator":"8eOrt","../items/circle":"1t8sT","../vector/vec2":"9XJHV","../vector/vec2Math":"j4cED","../objects/ball":"1Qukc","../renderableObjects/object":"lW37O","../objects/immovableBall":"izS6X","../renderableObjects/immovableLine":"ah7D5","../objects/immovableLine":"4U8jS","../items/line":"bcihL","../items/circleWithText":"2IXVz","../items/utils/index2color":"frxih","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"dsDU5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseScene", ()=>BaseScene);
var BaseScene = /** @class */ function() {
    function BaseScene(engine) {
        this.engine = engine;
    }
    return BaseScene;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"8eOrt":[function(require,module,exports) {
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

},{"./objectsGenerator":"h8l83","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"h8l83":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"1Qukc":[function(require,module,exports) {
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

},{"../vector/vec2":"9XJHV","../vector/vec2Line":"fsq6M","../vector/vec2Math":"j4cED","./types":"46hd3","./collisionModels":"iDnZq","./object":"evzjS","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fsq6M":[function(require,module,exports) {
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

},{"./vec2":"9XJHV","./vec2Math":"j4cED","./math":"efHiM","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"46hd3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SolverObjectTypes", ()=>SolverObjectTypes);
var SolverObjectTypes;
(function(SolverObjectTypes) {
    SolverObjectTypes[SolverObjectTypes["TypeNull"] = 0] = "TypeNull";
    SolverObjectTypes[SolverObjectTypes["TypeBall"] = 1] = "TypeBall";
    SolverObjectTypes[SolverObjectTypes["TypeImmovableBall"] = 2] = "TypeImmovableBall";
    SolverObjectTypes[SolverObjectTypes["TypeImmovableLine"] = 3] = "TypeImmovableLine";
})(SolverObjectTypes || (SolverObjectTypes = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"iDnZq":[function(require,module,exports) {
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
function collideBallAndImmovableLine(ball, line) {
    try {
        var projectionPoint = line._line.getPointProjection(ball.currentPosition);
        // We definitely know that projection point is on the line, so we just need to check if it's
        // between the ends.
        if (line._line.inBetweenFast(projectionPoint)) {
            var between = (0, _vec2Math.Vec2Math).diff(projectionPoint, ball.currentPosition);
            if (between.length2 < ball.radius2) {
                var normalized = between.ort;
                var delta = ball.radius - between.length;
                ball.currentPosition.subSelf((0, _vec2Math.Vec2Math).mul(normalized, delta * ball.bounceValue * line.bounceValue));
            }
        }
    } catch (e) {}
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
        default:
            return;
    }
}

},{"../vector/vec2Math":"j4cED","./types":"46hd3","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"evzjS":[function(require,module,exports) {
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

},{"./types":"46hd3","../vector/vec2":"9XJHV","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"izS6X":[function(require,module,exports) {
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
    return ImmovableBallsObject;
}((0, _ball.BallsObject));

},{"./ball":"1Qukc","./types":"46hd3","../vector/math":"efHiM","../vector/vec2":"9XJHV","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ah7D5":[function(require,module,exports) {
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

},{"./object":"lW37O","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4U8jS":[function(require,module,exports) {
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

},{"./ball":"1Qukc","../vector/vec2Line":"fsq6M","./types":"46hd3","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"bcihL":[function(require,module,exports) {
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

},{"./item":"aIQJw","../vector/vec2":"9XJHV","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2IXVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleWithText", ()=>CircleWithText);
var _circle = require("./circle");
class CircleWithText extends (0, _circle.Circle) {
    text = "";
    textColor = "#ffffff";
    constructor(context, position, r, color, text, textColor){
        super(context, position, r, color);
        this.text = text;
        if (textColor) this.textColor = textColor;
    }
    render() {
        super.render();
        this.context.fillStyle = this.textColor;
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.fillText(this.text, this.position.x, this.position.y);
    }
}

},{"./circle":"1t8sT","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"frxih":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"8fDji":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageType", ()=>MessageType);
parcelHelpers.export(exports, "MessageEvent", ()=>MessageEvent);
parcelHelpers.export(exports, "MessageInit", ()=>MessageInit);
parcelHelpers.export(exports, "MessageUserInput", ()=>MessageUserInput);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}]},["ccn6U","fXkCw"], "fXkCw", "parcelRequire62ee")

//# sourceMappingURL=main.8e789c37.js.map
