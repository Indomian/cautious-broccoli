!function () {
    function t(t, e, i, n) {
        Object.defineProperty(t, e, {get: i, set: n, enumerable: !0, configurable: !0})
    }

    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        i = {}, n = {}, o = e.parcelRequire62ee;
    null == o && ((o = function (t) {
        if (t in i) return i[t].exports;
        if (t in n) {
            var e = n[t];
            delete n[t];
            var o = {id: t, exports: {}};
            return i[t] = o, e.call(o.exports, o, o.exports), o.exports
        }
        var r = new Error("Cannot find module '" + t + "'");
        throw r.code = "MODULE_NOT_FOUND", r
    }).register = function (t, e) {
        n[t] = e
    }, e.parcelRequire62ee = o), o.register("iE7OH", (function (e, i) {
        var n, o;
        t(e.exports, "register", (function () {
            return n
        }), (function (t) {
            return n = t
        })), t(e.exports, "resolve", (function () {
            return o
        }), (function (t) {
            return o = t
        }));
        var r = {};
        n = function (t) {
            for (var e = Object.keys(t), i = 0; i < e.length; i++) r[e[i]] = t[e[i]]
        }, o = function (t) {
            var e = r[t];
            if (null == e) throw new Error("Could not resolve bundle with id " + t);
            return e
        }
    })), o("iE7OH").register(JSON.parse('{"5d7Nu":"index.4e040578.js","bG1Fz":"main.6f291b2b.js"}'));
    const r = "loading";

    class s extends Error {
    }

    function c(t) {
        const e = document.querySelector(t);
        if (!e) throw new s(t);
        return e
    }

    var l = function () {
        function t(t) {
            var e = this;
            this.mouseEnter = function (t) {
                var i = e.createMouseEvent(t);
                e.processEvent(i), e._oldX = i.screenX, e._oldY = i.screenY
            }, this.mouseLeave = function (t) {
                var i = e.createMouseEvent(t);
                e.processEvent(i), e._oldX = i.screenX, e._oldY = i.screenY
            }, this.mouseMove = function (t) {
                var i = e.createMouseEvent(t);
                e.processEvent(i), e._oldX = i.screenX, e._oldY = i.screenY
            }, this.mouseDown = function (t) {
                e._leftButtonDown = !0;
                var i = e.createMouseEvent(t);
                e.processEvent(i), e._oldX = i.screenX, e._oldY = i.screenY
            }, this.mouseUp = function (t) {
                e._leftButtonDown = !1;
                var i = e.createMouseEvent(t);
                e.processEvent(i), e._oldX = i.screenX, e._oldY = i.screenY
            }, this.click = function (t) {
                var i = e.createMouseEvent(t);
                e.processEvent(i), e._oldX = i.screenX, e._oldY = i.screenY
            }, this._canvas = t, this._handlers = new Set, this._leftButtonDown = !1, this.addHandlers()
        }

        return t.prototype.addHandlers = function () {
            this._canvas.addEventListener("mouseenter", this.mouseEnter), this._canvas.addEventListener("mouseleave", this.mouseLeave), this._canvas.addEventListener("mousemove", this.mouseMove), this._canvas.addEventListener("mousedown", this.mouseDown), this._canvas.addEventListener("mouseup", this.mouseUp), this._canvas.addEventListener("click", this.click)
        }, t.prototype.removeHandlers = function () {
        }, t.prototype.processEvent = function (t) {
            this._handlers.forEach((function (e) {
                e(t)
            }))
        }, t.prototype.addHandler = function (t) {
            this._handlers.add(t)
        }, t.prototype.removeHandler = function (t) {
            this._handlers.has(t) && this._handlers.delete(t)
        }, t.prototype.createMouseEvent = function (t) {
            return {
                screenX: t.offsetX,
                screenY: t.offsetY,
                dx: -this._oldX + t.offsetX,
                dy: -this._oldY + t.offsetY,
                leftButtonDown: this._leftButtonDown
            }
        }, t
    }(), h = {};
    t(h, "MessageInit", (function () {
        return _
    }), (function (t) {
        return _ = t
    })), t(h, "MessageUserInput", (function () {
        return g
    }), (function (t) {
        return g = t
    }));
    var u, a, f, p = (u = function (t, e) {
        return u = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }, u(t, e)
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function i() {
            this.constructor = t
        }

        u(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    (f = a || (a = {}))[f.MessageNone = 0] = "MessageNone", f[f.MessageInit = 1] = "MessageInit", f[f.MessageUserInput = 2] = "MessageUserInput";
    var d, y, v, b = function () {
        this.type = a.MessageNone
    }, _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.type = a.MessageInit, i.canvas = e, i
        }

        return p(e, t), e
    }(b), g = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.type = a.MessageUserInput, i.event = e, i
        }

        return p(e, t), e
    }(b), x = {};
    d = function (t, e, i) {
        if (e === self.location.origin) return t;
        var n = i ? "import " + JSON.stringify(t) + ";" : "importScripts(" + JSON.stringify(t) + ");";
        return URL.createObjectURL(new Blob([n], {type: "application/javascript"}))
    };
    var m = {};

    function w(t) {
        return ("" + t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/"
    }

    y = function (t) {
        var e = m[t];
        return e || (e = function () {
            try {
                throw new Error
            } catch (e) {
                var t = ("" + e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
                if (t) return w(t[2])
            }
            return "/"
        }(), m[t] = e), e
    }, v = function (t) {
        var e = ("" + t).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
        if (!e) throw new Error("Origin not found");
        return e[0]
    };
    let j = y("5d7Nu") + o("iE7OH").resolve("bG1Fz");
    x = d(j, v(j), !1);
    var O = function () {
        function t(t) {
            var e = this;
            this.sendUserInputEvent = function (t) {
                e.worker.postMessage(new (0, h.MessageUserInput)(t))
            }, this.worker = new Worker(x);
            var i = t.transferControlToOffscreen();
            this.worker.postMessage(new (0, h.MessageInit)(i), [i]), this.userInput = new l(t), this.userInput.addHandler(this.sendUserInputEvent)
        }

        return t.prototype.initUserInput = function () {
        }, t
    }();

    function P(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    var C = {};
    t(C, "Vec2ExceptionParallel", (function () {
        return I
    }), (function (t) {
        return I = t
    })), t(C, "Vec2ExceptionNoPerpendicularVectorToZeroVector", (function () {
        return T
    }), (function (t) {
        return T = t
    }));
    var E = function () {
        var t = function (e, i) {
            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }, t(e, i)
        };
        return function (e, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }(), S = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return E(e, t), e
    }(Error), I = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return E(e, t), e
    }(S), T = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return E(e, t), e
    }(S), M = function () {
        function t() {
        }

        return t.diff = function (t, e) {
            return new z(t.x - e.x, t.y - e.y)
        }, t.mul = function (t, e) {
            return new z(t.x * e, t.y * e)
        }, t.distance = function (e, i) {
            return t.diff(e, i).length
        }, t.distance2 = function (e, i) {
            return t.diff(e, i).length2
        }, t.intersect = function (t, e) {
            if (t.K === e.K) throw new (0, C.Vec2ExceptionParallel);
            if (isNaN(t.K) || isNaN(e.K)) return isNaN(t.K) ? e.makeVec2FromX(t._vec1.x) : t.makeVec2FromX(e._vec1.x);
            var i = (t.B - e.B) / (e.K - t.K);
            return t.makeVec2FromX(i)
        }, t.dot = function (t, e) {
            return t.x * e.x + t.y * e.y
        }, t.mirror = function (e, i) {
            var n = i.direction.perpendicular;
            return e.diff(n.mul(2 * t.dot(e, n)))
        }, t.scale = function (t, e) {
            return new z(t.x / e.x, t.y / e.y)
        }, t
    }(), B = 1e-6, G = Math.sqrt(2);
    var z = function () {
        function t(t, e, i) {
            this._x = 0, this._y = 0, this._length = null, this._length2 = null, this._x = t, this._y = e, i && (this._length = i, this._length2 = i * i)
        }

        return Object.defineProperty(t.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._length = null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._length = null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "length", {
            get: function () {
                return null === this._length && (this._length = Math.sqrt(this.x * this.x + this.y * this.y), t.lengthCallsCount++), this._length
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "length2", {
            get: function () {
                return null === this._length2 && (this._length2 = this._x * this._x + this._y * this._y, t.length2CallsCount++), this._length2
            }, enumerable: !1, configurable: !0
        }), t.prototype.addSelf = function (t) {
            return this._x += t.x, this._y += t.y, this._length = null, this
        }, t.prototype.subSelf = function (t) {
            return this._x -= t.x, this._y -= t.y, this._length = null, this
        }, t.prototype.flipYSelf = function () {
            return this._y = -this._y, this
        }, t.prototype.flipXSelf = function () {
            return this._x = -this._x, this
        }, t.prototype.flipSelf = function () {
            return this._x = -this._x, this._y = -this._y, this
        }, t.prototype.equals = function (t) {
            return M.distance2(this, t) < 1e-12
        }, t.prototype.sum = function (e) {
            return new t(this.x + e.x, this.y + e.y)
        }, t.prototype.diff = function (e) {
            return new t(this.x - e.x, this.y - e.y)
        }, t.prototype.mul = function (e) {
            return new t(this.x * e, this.y * e)
        }, t.prototype.copy = function () {
            return new t(this.x, this.y)
        }, t.prototype.applySelf = function (t) {
            return this.x = t(this.x), this.y = t(this.y), this
        }, Object.defineProperty(t.prototype, "ort", {
            get: function () {
                var e = this.length;
                return new t(this.x / e, this.y / e, 1)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "perpendicular", {
            get: function () {
                if (0 === this.x) {
                    if (this.y > 0) return t.Horizontal().ort;
                    if (this.y < 0) return t.Horizontal().ort.flipSelf();
                    throw new (0, C.Vec2ExceptionNoPerpendicularVectorToZeroVector)
                }
                if (0 === this.y) {
                    if (this.x > 0) return t.Vertical().ort;
                    if (this.x < 0) return t.Vertical().ort.flipSelf()
                }
                return new t(-this.y / this.x, 1).ort
            }, enumerable: !1, configurable: !0
        }), t.Zero = function () {
            return new t(0, 0)
        }, t.Horizontal = function () {
            return new t(1, 0)
        }, t.Vertical = function () {
            return new t(0, 1)
        }, t.Down = function (e) {
            return new t(0, e)
        }, t.Right = function (e) {
            return new t(e, 0)
        }, t.lengthCallsCount = 0, t.length2CallsCount = 0, t
    }();

    class k {
        render() {
        }

        queue() {
        }

        constructor(t, e) {
            P(this, "position", z.Zero()), this.context = t, this.position = e
        }
    }

    class N extends k {
        render() {
            this.context.beginPath(), this.context.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI), this.context.fillStyle = this.color, this.context.fill()
        }

        constructor(t, e, i, n) {
            super(t, e), P(this, "r", 0), P(this, "color", "#00ff00"), i && (this.r = i), n && (this.color = n)
        }
    }

    var V = {};
    t(V, "BallsObject", (function () {
        return A
    }), (function (t) {
        return A = t
    }));
    var F, R, X = function () {
        function t(t, e) {
            this._vec1 = z.Zero(), this._vec2 = z.Zero(), this._k = 0, this._b = 0, this._vec1 = t, this._vec2 = e, this._direction = M.diff(this._vec1, this._vec2), this._length = this._direction.length, this._length2 = this._direction.length2, this._ort = this._direction.ort, this.calculateKB()
        }

        return t.prototype.inBetween = function (t) {
            var e, i, n, o = M.diff(t, this._vec1).length + M.diff(this._vec2, t).length;
            return e = this._length, i = o, n = B, Math.abs(e - i) < n
        }, t.prototype.calculateKB = function () {
            this._vec1.y === this._vec2.y ? (this._b = this._vec1.y, this._k = 0) : this._vec1.x === this._vec2.x ? (this._b = NaN, this._k = NaN) : (this._b = (this._vec1.x * this._vec2.y - this._vec1.y * this._vec2.x) / (this._vec1.x - this._vec2.x), this._k = (this._vec1.y - this._vec2.y) / (this._vec1.x - this._vec2.x))
        }, t.prototype.makeVec2FromX = function (t) {
            return new z(t, this._k * t + this._b)
        }, t.prototype.copy = function () {
            return new t(this._vec1, this._vec2)
        }, t.prototype.moveBy = function (t) {
            this._vec1.addSelf(t), this._vec2.addSelf(t), this.calculateKB()
        }, t.prototype.getPointProjection = function (t) {
            var e = this.direction, i = M.diff(t, this._vec1), n = M.dot(e, i) / this.length;
            return this._vec1.sum(this.ort.mul(n))
        }, Object.defineProperty(t.prototype, "B", {
            get: function () {
                return this._b
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "K", {
            get: function () {
                return this._k
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "length", {
            get: function () {
                return this._length
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "direction", {
            get: function () {
                return this._direction
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "ort", {
            get: function () {
                return this._ort
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "vec1", {
            get: function () {
                return this._vec1
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "vec2", {
            get: function () {
                return this._vec2
            }, enumerable: !1, configurable: !0
        }), t.Vertical = function (e) {
            return new t(new z(e, 0), new z(e, Number.MAX_SAFE_INTEGER))
        }, t.Horizontal = function (e) {
            return new t(new z(0, e), new z(Number.MAX_SAFE_INTEGER, e))
        }, t
    }();

    function L(t, e) {
        let i = t, n = e;
        if (i.type > n.type) {
            const t = function (t, e) {
                return {a: e, b: t}
            }(i, n);
            i = t.a, n = t.b
        }
        switch (!0) {
            case i.type === F.TypeBall && n.type === F.TypeBall:
                return function (t, e) {
                    const i = M.diff(t.currentPosition, e.currentPosition), n = i.length, o = t.radius + e.radius;
                    if (n < o) {
                        const r = i.ort, s = o - n;
                        t.currentPosition.addSelf(M.mul(r, t.radius / o * s * t.bounceValue)), e.currentPosition.subSelf(M.mul(r, e.radius / o * s * e.bounceValue))
                    }
                }(i, n);
            case i.type === F.TypeBall && n.type === F.TypeImmovableBall:
                return function (t, e) {
                    const i = M.diff(t.currentPosition, e.currentPosition), n = i.length, o = t.radius + e.radius;
                    if (n < o) {
                        const e = i.ort, r = o - n;
                        t.currentPosition.addSelf(M.mul(e, t.radius / o * r * t.bounceValue))
                    }
                }(i, n);
            case i.type === F.TypeBall && n.type === F.TypeImmovableLine:
                return function (t, e) {
                    try {
                        const i = e._line.getPointProjection(t.currentPosition);
                        if (e._line.inBetween(i)) {
                            const e = M.diff(i, t.currentPosition);
                            if (e.length < t.radius) {
                                const i = e.ort, n = t.radius - e.length;
                                t.currentPosition.subSelf(M.mul(i, n * t.bounceValue))
                            }
                        }
                    } catch (t) {
                    }
                }(i, n);
            default:
                return
        }
    }

    (R = F || (F = {}))[R.TypeNull = 0] = "TypeNull", R[R.TypeBall = 1] = "TypeBall", R[R.TypeImmovableBall = 2] = "TypeImmovableBall", R[R.TypeImmovableLine = 3] = "TypeImmovableLine";
    var Z = function () {
        function t() {
            this.type = F.TypeNull, this.previousPosition = z.Zero(), this.currentPosition = z.Zero(), this.index = t.index++
        }

        return t.prototype.update = function (t) {
        }, t.prototype.accelerate = function (t) {
        }, t.prototype.collide = function (t) {
        }, t.prototype.addToGrid = function (t) {
        }, t.index = 0, t
    }(), H = function () {
        var t = function (e, i) {
            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }, t(e, i)
        };
        return function (e, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }(), A = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.acc = z.Zero(), n.radius = 10, n.bounceValue = 1.1, n.type = F.TypeBall, n.immovable = !1, n.previousPosition = e.copy(), n.currentPosition = e.copy(), void 0 !== i && (n.radius = i), n
        }

        return H(e, t), e.prototype.update = function (t) {
            var e = this.velocity;
            this.previousPosition = this.currentPosition.copy(), this.currentPosition.addSelf(e.addSelf(this.acc.mul(t * t))), this.acc = z.Zero()
        }, e.prototype.accelerate = function (t) {
            return this.acc.addSelf(t), this
        }, e.prototype.setVelocity = function (t) {
            return this.velocity = t, this
        }, e.prototype.collide = function (t) {
            L(this, t)
        }, e.prototype.addToGrid = function (t) {
            t.addObject(Math.floor(this.currentPosition.x), Math.floor(this.currentPosition.y), this)
        }, e.prototype.moveBy = function (t) {
            this.currentPosition.addSelf(t)
        }, e.prototype.isPointInsideObject = function (t) {
            return M.distance(this.currentPosition, t) < this.radius
        }, Object.defineProperty(e.prototype, "velocity", {
            get: function () {
                return M.diff(this.currentPosition, this.previousPosition)
            }, set: function (t) {
                this.previousPosition = M.diff(this.currentPosition, t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "movementVector", {
            get: function () {
                return new X(this.previousPosition, this.currentPosition)
            }, enumerable: !1, configurable: !0
        }), e
    }(Z);

    class U {
        applyConstrain(t) {
        }

        constructor() {
        }
    }

    class Y extends U {
        get width() {
            return this._width
        }

        set width(t) {
            this._width = t
        }

        get height() {
            return this._height
        }

        set height(t) {
            this._height = t
        }

        applyConstrain(t) {
            super.applyConstrain(t), t.currentPosition.x - t.radius < 0 && (t.currentPosition.x = t.radius), t.currentPosition.x + t.radius > this._width && (t.currentPosition.x = this._width - t.radius), t.currentPosition.y - t.radius < 0 && (t.currentPosition.y = t.radius), t.currentPosition.y + t.radius > this._height && (t.currentPosition.y = this._height - t.radius)
        }

        constructor(t, e) {
            super(), P(this, "_width", 0), P(this, "_height", 0), this.width = t, this.height = e
        }
    }

    class D extends U {
        applyConstrain(t) {
            super.applyConstrain(t);
            const e = t.currentPosition.diff(this.center), i = e.length, n = t.radius;
            if (i > this.radius - n) {
                const i = e.ort;
                t.currentPosition = this.center.sum(i.mul(this.radius - n))
            }
        }

        constructor(t, e) {
            super(), P(this, "center", z.Zero()), P(this, "radius", 0), this.center = t, this.radius = e
        }
    }

    class q {
        getNextObject(t) {
            return []
        }

        constructor(t) {
            P(this, "solver", null), this.solver = t
        }
    }

    class K {
        constructor(t, e) {
            P(this, "timeout", void 0), P(this, "object", void 0), this.timeout = t, this.object = e
        }
    }

    class $ extends q {
        getNextObject(t) {
            if (this.total > this.limit) return [];
            if (this.lastCreateTime += 1, this.lastCreateTime > this.delay) {
                const t = this.create(this.total);
                return this.lastCreateTime = 0, this.total += t.length, t
            }
        }

        constructor(t, e, i, n) {
            super(t), this.limit = e, this.total = 0, this.delay = i, this.create = n, this.lastCreateTime = 0
        }
    }

    var J = function () {
        function t() {
            this.objects = [], this.highlight = !1
        }

        return t.prototype.addObject = function (e) {
            this.objects.length >= t.MAX_OBJECT_IN_CELL || this.objects.push(e)
        }, t.prototype.clear = function () {
            this.objects = [], this.highlight = !1
        }, t.prototype.remove = function (t) {
            var e = this.objects.findIndex((function (e) {
                return e.index === t
            }));
            -1 !== e && this.objects.splice(e, 1)
        }, Object.defineProperty(t.prototype, "count", {
            get: function () {
                return this.objects.length
            }, enumerable: !1, configurable: !0
        }), t.MAX_OBJECT_IN_CELL = 10, t
    }(), W = function () {
        function t(t, e, i) {
            this.cells = [], this._width = t, this._height = e, this.cellSize = i, this.resize()
        }

        return Object.defineProperty(t.prototype, "size", {
            get: function () {
                return this._size
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "width", {
            get: function () {
                return this._width
            }, set: function (t) {
                this._width = t, this.resize()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "height", {
            get: function () {
                return this._height
            }, set: function (t) {
                this._height = t, this.resize()
            }, enumerable: !1, configurable: !0
        }), t.prototype.resize = function () {
            this.cells = [], this._size = this._width * this._height;
            for (var t = 0; t < this._size; t++) this.cells.push(new J)
        }, t.prototype.addObject = function (t, e, i) {
            var n = Math.floor(t / this.cellSize.x), o = Math.floor(e / this.cellSize.y), r = n * this._height + o;
            this.addObjectByIndex(r, i)
        }, t.prototype.addObjectByIndex = function (t, e) {
            !isNaN(t) && t >= 0 && t < this.size && this.cells[t].addObject(e)
        }, t.prototype.makeIndexFromVec = function (t) {
            return t.x * this._height + t.y
        }, t.prototype.makeIndexFromCoord = function (t, e) {
            return t * this._height + e
        }, t.prototype.makeVecFromIndex = function (t) {
            var e = Math.floor(t / this._height), i = t - e * this._height;
            return new z(e, i)
        }, t.prototype.addObjectToCells = function (t, e, i) {
            var n = M.scale(t, this.cellSize).applySelf(Math.floor),
                o = M.scale(e, this.cellSize).applySelf(Math.floor), r = this.makeIndexFromVec(n),
                s = this.makeIndexFromVec(o);
            if (n.x === o.x) for (var c = r; c < s; c++) this.cells[c].addObject(i); else if (n.y === o.y) for (c = r; c < s; c += this.height) this.cells[c].addObject(i); else for (var l = Math.min(n.x, o.x), h = Math.min(n.y, o.y), u = Math.max(n.x, o.x), a = Math.max(n.y, o.y) - h, f = this.makeIndexFromCoord(l, h), p = 0; p <= u - l; p++) for (var d = 0; d <= a; d++) {
                c = f + p * this.height + d;
                this.addObjectByIndex(c, i)
            }
        }, t.prototype.clear = function () {
            for (var t = 0; t < this.size; t++) this.cells[t].clear()
        }, t.prototype.forEach = function (t) {
            var e = this;
            this.cells.forEach((function (i, n) {
                var o = e.makeVecFromIndex(n);
                t(o.x, o.y, i, n)
            }))
        }, t.prototype.hasCell = function (t, e) {
            if (t < 0 || t >= this.size) return !1;
            var i = this.makeVecFromIndex(t), n = i.x, o = i.y;
            return !(o <= 0 && e < 0) && (!(o === this.height - 1 && e > 0) && (!(0 === n && e < 0) && !(n >= this.width - 1 && e > 0)))
        }, t
    }(), Q = function () {
        function t(t) {
            this.objects = [], this.constrains = null, this.gravity = z.Zero(), this.subSteps = 4, this.useFixedTime = !0, this.objects = [], this.worldSize = t.copy(), this.configure()
        }

        return t.prototype.configure = function () {
            this.gravity = new z(0, 100), this.useFixedTime = !0, this.step = .017 / this.subSteps;
            var t = Math.round(this.worldSize.x / 16), e = Math.round(this.worldSize.y / 16);
            this.cellSize = new z(this.worldSize.x / t, this.worldSize.y / e), this.collisionGrid = new W(t, e, this.cellSize)
        }, t.prototype.addObject = function (t) {
            this.objects.push(t)
        }, t.prototype.update = function (t) {
            for (var e = this.useFixedTime ? this.step : t / this.subSteps, i = 0; i < this.subSteps; i++) this.addObjectsToGrid(), this.processCollisions(), this.applyGravity(), this.updateObjects(e), this.applyConstrains()
        }, t.prototype.addObjectsToGrid = function () {
            var t = this;
            this.collisionGrid.clear(), this.objects.forEach((function (e, i) {
                e.addToGrid(t.collisionGrid)
            }))
        }, t.prototype.updateObjects = function (t) {
            this.objects.forEach((function (e) {
                return e.update(t)
            }))
        }, t.prototype.applyGravity = function () {
            var t = this;
            this.objects.forEach((function (e) {
                return e.accelerate(t.gravity)
            }))
        }, t.prototype.applyConstrains = function () {
            var t = this;
            this.objects.forEach((function (e) {
                return t.constrains.applyConstrain(e)
            }))
        }, t.prototype.processCollisionsInCell = function (t, e) {
            e.objects.forEach((function (e) {
                t !== e && (t.immovable && e.immovable || t.collide(e))
            }))
        }, t.prototype.processCell = function (t) {
            var e = this;
            this.collisionGrid.cells[t].objects.forEach((function (i) {
                e.processCollisionsInCell(i, e.collisionGrid.cells[t]), e.collisionGrid.hasCell(t, -1) && e.processCollisionsInCell(i, e.collisionGrid.cells[t - 1]), e.collisionGrid.hasCell(t, 1) && e.processCollisionsInCell(i, e.collisionGrid.cells[t + 1]), e.collisionGrid.hasCell(t + e.collisionGrid.height, -1) && e.processCollisionsInCell(i, e.collisionGrid.cells[t + e.collisionGrid.height - 1]), e.collisionGrid.hasCell(t + e.collisionGrid.height, 0) && e.processCollisionsInCell(i, e.collisionGrid.cells[t + e.collisionGrid.height]), e.collisionGrid.hasCell(t + e.collisionGrid.height, 1) && e.processCollisionsInCell(i, e.collisionGrid.cells[t + e.collisionGrid.height + 1]), e.collisionGrid.hasCell(t - e.collisionGrid.height, -1) && e.processCollisionsInCell(i, e.collisionGrid.cells[t - e.collisionGrid.height - 1]), e.collisionGrid.hasCell(t - e.collisionGrid.height, 0) && e.processCollisionsInCell(i, e.collisionGrid.cells[t - e.collisionGrid.height]), e.collisionGrid.hasCell(t - e.collisionGrid.height, 1) && e.processCollisionsInCell(i, e.collisionGrid.cells[t - e.collisionGrid.height + 1])
            }))
        }, t.prototype.processCollisions = function () {
            for (var t = 0; t < this.collisionGrid.size; t++) this.processCell(t)
        }, t
    }();

    class tt extends k {
        render() {
            this.context.fillStyle = this.color, this.context.fillRect(this.position.x, this.position.y, this.position.x + this.size.x, this.position.y + this.size.y)
        }

        constructor(t, e, i, n) {
            super(t, e), P(this, "size", z.Zero()), P(this, "color", "#00ff00"), this.size = i, n && (this.color = n)
        }
    }

    class et {
        update() {
            this.renderItem.position = this.ballsObject.currentPosition
        }

        render() {
            this.update(), this.renderItem.render()
        }

        constructor(t, e) {
            P(this, "ballsObject", null), P(this, "renderItem", null), this.ballsObject = t, this.renderItem = e
        }
    }

    var it = {};
    t(it, "ImmovableBallsObject", (function () {
        return ot
    }), (function (t) {
        return ot = t
    }));
    var nt = function () {
        var t = function (e, i) {
            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }, t(e, i)
        };
        return function (e, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }(), ot = function (t) {
        function e(e, i) {
            var n = t.call(this, e, i) || this;
            return n.type = F.TypeImmovableBall, n.immovable = !0, n.bounceValue = .5, n._fixedPosition = null, n._fixedPosition = e.copy(), n
        }

        return nt(e, t), e.prototype.update = function (t) {
            this.currentPosition = this._fixedPosition, this.previousPosition = this._fixedPosition
        }, e.prototype.addToGrid = function (t) {
            var e = new z(this.radius * G, this.radius * G), i = this.currentPosition.sum(e),
                n = this.currentPosition.diff(e);
            t.addObjectToCells(i, n, this)
        }, e
    }(V.BallsObject);

    class rt extends et {
        update() {
            super.update(), this.renderItem.direction = this.ballsObject._direction
        }

        constructor(t, e) {
            super(t), P(this, "ballsObject", null), this.ballsObject = t, this.renderItem = e
        }
    }

    var st = {};
    t(st, "ImmovableLineObject", (function () {
        return lt
    }), (function (t) {
        return lt = t
    }));
    var ct = function () {
        var t = function (e, i) {
            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }, t(e, i)
        };
        return function (e, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }(), lt = function (t) {
        function e(e, i) {
            var n = t.call(this, e, 0) || this;
            return n.type = F.TypeImmovableLine, n.immovable = !0, n._direction = i, n._line = new X(n.currentPosition.copy(), n.currentPosition.copy().sum(n._direction)), n
        }

        return ct(e, t), e.prototype.update = function (t) {
            this.currentPosition = this._line._vec1, this.previousPosition = this._line._vec2
        }, e.prototype.addToGrid = function (t) {
            t.addObjectToCells(this._line._vec1, this._line._vec2, this)
        }, e
    }(V.BallsObject);

    class ht extends k {
        render() {
            this.context.strokeStyle = this.color, this.context.beginPath(), this.context.moveTo(this.position.x, this.position.y), this.context.lineTo(this.position.x + this.direction.x, this.position.y + this.direction.y), this.context.stroke()
        }

        constructor(t, e, i, n) {
            super(t, e), P(this, "direction", z.Zero()), P(this, "color", "#00ff00"), this.direction = i, n && (this.color = n)
        }
    }

    class ut extends N {
        render() {
            super.render(), this.context.fillStyle = this.textColor, this.context.textBaseline = "middle", this.context.textAlign = "center", this.context.fillText(this.text, this.position.x, this.position.y)
        }

        constructor(t, e, i, n, o, r) {
            super(t, e, i, n), P(this, "text", ""), P(this, "textColor", "#ffffff"), this.text = o, r && (this.textColor = r)
        }
    }

    class at extends tt {
        render() {
            this.context.strokeStyle = this.color, this.context.strokeRect(this.position.x, this.position.y, this.size.x, this.size.y)
        }

        queue() {
        }

        constructor(t, e, i, n) {
            super(t, e, i, n)
        }
    }

    new K(1, new (0, V.BallsObject)(new z(10, 10))), new K(2, new (0, V.BallsObject)(new z(10, 10))), new K(3, new (0, V.BallsObject)(new z(10, 10)));
    const ft = [new z(0, 0), new z(70, 380), new z(270, 380), new z(340, 0)],
        pt = [[ft[0], M.diff(ft[0], ft[1]).flipSelf()], [ft[1], M.diff(ft[1], ft[2]).flipSelf()], [ft[2], M.diff(ft[2], ft[3]).flipSelf()]];

    function dt(t) {
        const e = .005;
        return `rgba(${Math.floor(127 * Math.sin(e * t + 0) + 128)}, ${Math.floor(127 * Math.sin(e * t + 2) + 128)}, ${Math.floor(127 * Math.sin(e * t + 4) + 128)}, 1)`
    }

    class yt {
        configure() {
            this.solver = new Q(new z(this.canvas.width, this.canvas.height)), this.context.font = "10px serif", this.switchToViewportConstrain(), this.solver.constrains = this.constrains;
            const t = new z(this.canvas.width / 2, this.canvas.height / 2), e = t.diff(new z(300, 300)),
                i = new z(2, -2).mul(1 / this.solver.subSteps);
            this.generator = new $(this.solver, 1e3, 7, (t => [new et(new (0, V.BallsObject)(e, 5).setVelocity(i), new ut(this.context, z.Zero(), 7, dt(t + 200), "", "#000000")), new et(new (0, V.BallsObject)(e.sum(z.Down(20)), 5).setVelocity(i), new ut(this.context, z.Zero(), 7, dt(t + 100), "", "#000000")), new et(new (0, V.BallsObject)(e.sum(z.Down(-20)), 5).setVelocity(i), new ut(this.context, z.Zero(), 7, dt(t), "", "#000000"))])), this.redBall = new et(new (0, it.ImmovableBallsObject)(new z(230, 50), 30), new N(this.context, z.Zero(), 30, "#ff0000")), this.addObject(this.redBall), pt.forEach((e => {
                this.addObject(new rt(new (0, st.ImmovableLineObject)(e[0].sum(t.diff(new z(170, 190))), e[1]), new ht(this.context, z.Zero(), z.Zero(), "#ffffff")))
            }))
        }

        processUserInput(t) {
            t.leftButtonDown ? (this.redBall.ballsObject.isPointInsideObject(new z(t.screenX, t.screenY)) && (this.canMoveRedObject = !0), this.canMoveRedObject && this.redBall.ballsObject.moveBy(new z(t.dx, t.dy))) : this.canMoveRedObject = !1
        }

        addObject(t) {
            this.objects.push(t), this.solver.addObject(t.ballsObject)
        }

        update(t) {
            this.solver.update(t)
        }

        generatorsTick(t) {
            const e = this.generator.getNextObject(t);
            e && e.forEach((t => this.addObject(t)))
        }

        tick() {
            this.step < 0 && (this.step = 0), this.generatorsTick(this.step / 1e3), this.update(this.step / 1e3), this.clear(), this.renderItems(), this.printFPS(), z.lengthCallsCount = 0
        }

        renderItems() {
            this.items.forEach((t => t.render())), this.objects.forEach((t => t.render()))
        }

        printText(t, e, i) {
            this.context.fillStyle = "#ffffff", this.context.textAlign = "start", this.context.fillText(t, e, i)
        }

        printFPS() {
            this.context.fillStyle = "rgba(0,0,0,0.1)", this.context.fillRect(0, 0, 100, 60), this.printText(`${Math.round(this.step)} ms / ${Math.round(1e3 / this.step)} FPS`, 0, 10), this.printText(`Length calls: ${z.lengthCallsCount}`, 0, 20), this.printText(`Lenght2 calls: ${z.length2CallsCount}`, 0, 30), this.printText(`Objects: ${this.objects.length}`, 0, 40), this.printText(`Compares per object: ${Math.round(z.lengthCallsCount / this.objects.length)}`, 0, 50)
        }

        clear() {
            this.context.fillStyle = "rgba(0, 0, 0, 0.9)", this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        }

        start() {
            self.requestAnimationFrame ? self.requestAnimationFrame(this.nextFrame) : setInterval(this.nextInterval, 16)
        }

        renderGrid() {
            this.solver.collisionGrid.forEach(((t, e, i, n) => {
                const o = new z(t * this.solver.cellSize.x, e * this.solver.cellSize.y),
                    r = new at(this.context, o, this.solver.cellSize.diff(new z(5, 5)), i.count > 0 ? "#ff0000" : "#00ff00");
                i.highlight && (this.context.lineWidth = 10), r.render(), this.context.lineWidth = 1, this.printText(n, o.x + this.solver.cellSize.x / 2, o.y + this.solver.cellSize.y / 2)
            }))
        }

        switchToCircleConstrain() {
            this.constrains = new D(new z(this.canvas.width / 2, this.canvas.height / 2), this.canvas.height / 2), this.items.push(new N(this.context, this.canvas.width / 2, this.canvas.height / 2, this.canvas.height / 2, "#000000"))
        }

        switchToViewportConstrain() {
            this.constrains = new Y(this.canvas.width, this.canvas.height)
        }

        constructor(t) {
            P(this, "objects", []), P(this, "constrains", null), P(this, "solver", null), P(this, "nextFrame", (t => {
                this.step = t - this.timeRenderEnd, this.step < 0 && (this.step = 0), this.tick(), this.timeRenderEnd = t, self.requestAnimationFrame(this.nextFrame)
            })), P(this, "nextInterval", (() => {
                this.timeRenderStart = performance.now(), this.step = this.timeRenderStart - this.timeRenderEnd, this.step < 0 && (this.step = 0), this.tick(), this.timeRenderEnd = performance.now()
            })), this.canvas = t, this.context = this.canvas.getContext("2d"), this.timeRenderStart = performance.now(), this.timeRenderEnd = performance.now(), this.step = 0, this.objects = [], this.items = [], this.generator = null, this.solver = null, this.redBall = null, this.configure()
        }
    }

    var vt, bt = function (t) {
        var e = this;
        this.sendUserInputEvent = function (t) {
            e.render.processUserInput(t)
        }, this.render = new yt(t), this.render.start(), this.userInput = new l(t), this.userInput.addHandler(this.sendUserInputEvent)
    };
    vt = function () {
        console.log("Init application");
        const t = c("#image_canvas"), e = c("#container");
        t.width = e.offsetWidth, t.height = e.offsetHeight, t.transferControlToOffscreen ? (console.log("Render in worker"), new O(t)) : (console.log("Render in main thread"), new bt(t))
    }, document.readyState !== r ? vt() : document.addEventListener("DOMContentLoaded", vt)
}();
//# sourceMappingURL=index.4e040578.js.map
