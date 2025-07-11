(self.webpackChunk = self.webpackChunk || []).push([["942"], {
    5487: function() {
        "use strict";
        window.tram = function(e) {
            function t(e, t) {
                return (new F.Bare).init(e, t)
            }
            function n(e) {
                var t = parseInt(e.slice(1), 16);
                return [t >> 16 & 255, t >> 8 & 255, 255 & t]
            }
            function a(e, t, n) {
                return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
            }
            function i() {}
            function o(e, t, n) {
                if (void 0 !== t && (n = t),
                void 0 === e)
                    return n;
                var a = n;
                return $.test(e) || !q.test(e) ? a = parseInt(e, 10) : q.test(e) && (a = 1e3 * parseFloat(e)),
                0 > a && (a = 0),
                a == a ? a : n
            }
            function r(e) {
                Y.debug && window && window.console.warn(e)
            }
            var l, c, d, s = function(e, t, n) {
                function a(e) {
                    return "object" == typeof e
                }
                function i(e) {
                    return "function" == typeof e
                }
                function o() {}
                return function r(l, c) {
                    function d() {
                        var e = new s;
                        return i(e.init) && e.init.apply(e, arguments),
                        e
                    }
                    function s() {}
                    c === n && (c = l,
                    l = Object),
                    d.Bare = s;
                    var u, f = o[e] = l[e], p = s[e] = d[e] = new o;
                    return p.constructor = d,
                    d.mixin = function(t) {
                        return s[e] = d[e] = r(d, t)[e],
                        d
                    }
                    ,
                    d.open = function(e) {
                        if (u = {},
                        i(e) ? u = e.call(d, p, f, d, l) : a(e) && (u = e),
                        a(u))
                            for (var n in u)
                                t.call(u, n) && (p[n] = u[n]);
                        return i(p.init) || (p.init = l),
                        d
                    }
                    ,
                    d.open(c)
                }
            }("prototype", {}.hasOwnProperty), u = {
                ease: ["ease", function(e, t, n, a) {
                    var i = (e /= a) * e
                      , o = i * e;
                    return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                }
                ],
                "ease-in": ["ease-in", function(e, t, n, a) {
                    var i = (e /= a) * e
                      , o = i * e;
                    return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }
                ],
                "ease-out": ["ease-out", function(e, t, n, a) {
                    var i = (e /= a) * e
                      , o = i * e;
                    return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                }
                ],
                "ease-in-out": ["ease-in-out", function(e, t, n, a) {
                    var i = (e /= a) * e
                      , o = i * e;
                    return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }
                ],
                linear: ["linear", function(e, t, n, a) {
                    return n * e / a + t
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, a) {
                    return n * (e /= a) * e + t
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, a) {
                    return -n * (e /= a) * (e - 2) + t
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, a) {
                    return n * (e /= a) * e * e + t
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, a) {
                    return n * ((e = e / a - 1) * e * e + 1) + t
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, a) {
                    return n * (e /= a) * e * e * e + t
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, a) {
                    return -n * ((e = e / a - 1) * e * e * e - 1) + t
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, a) {
                    return n * (e /= a) * e * e * e * e + t
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, a) {
                    return n * ((e = e / a - 1) * e * e * e * e + 1) + t
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, a) {
                    return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, a) {
                    return n * Math.sin(e / a * (Math.PI / 2)) + t
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, a) {
                    return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, a) {
                    return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, a) {
                    return e === a ? t + n : n * (-Math.pow(2, -10 * e / a) + 1) + t
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, a) {
                    return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, a) {
                    return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, a) {
                    return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, a, i) {
                    return void 0 === i && (i = 1.70158),
                    n * (e /= a) * e * ((i + 1) * e - i) + t
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, a, i) {
                    return void 0 === i && (i = 1.70158),
                    n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, a, i) {
                    return void 0 === i && (i = 1.70158),
                    (e /= a / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                }
                ]
            }, f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }, p = window, g = "bkwld-tram", I = /[\-\.0-9]/g, E = /[A-Z]/, T = "number", y = /^(rgb|#)/, m = /(em|cm|mm|in|pt|pc|px)$/, b = /(em|cm|mm|in|pt|pc|px|%)$/, O = /(deg|rad|turn)$/, v = "unitless", h = /(all|none) 0s ease 0s/, _ = /^(width|height)$/, S = document.createElement("a"), L = ["Webkit", "Moz", "O", "ms"], R = ["-webkit-", "-moz-", "-o-", "-ms-"], A = function(e) {
                if (e in S.style)
                    return {
                        dom: e,
                        css: e
                    };
                var t, n, a = "", i = e.split("-");
                for (t = 0; t < i.length; t++)
                    a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                for (t = 0; t < L.length; t++)
                    if ((n = L[t] + a)in S.style)
                        return {
                            dom: n,
                            css: R[t] + e
                        }
            }, C = t.support = {
                bind: Function.prototype.bind,
                transform: A("transform"),
                transition: A("transition"),
                backface: A("backface-visibility"),
                timing: A("transition-timing-function")
            };
            if (C.transition) {
                var N = C.timing.dom;
                if (S.style[N] = u["ease-in-back"][0],
                !S.style[N])
                    for (var w in f)
                        u[w][0] = f[w]
            }
            var V = t.frame = (l = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && C.bind ? l.bind(p) : function(e) {
                p.setTimeout(e, 16)
            }
              , x = t.now = (d = (c = p.performance) && (c.now || c.webkitNow || c.msNow || c.mozNow)) && C.bind ? d.bind(c) : Date.now || function() {
                return +new Date
            }
              , M = s(function(t) {
                function n(e, t) {
                    var n = function(e) {
                        for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                            var i = e[t];
                            i && a.push(i)
                        }
                        return a
                    }(("" + e).split(" "))
                      , a = n[0];
                    t = t || {};
                    var i = z[a];
                    if (!i)
                        return r("Unsupported property: " + a);
                    if (!t.weak || !this.props[a]) {
                        var o = i[0]
                          , l = this.props[a];
                        return l || (l = this.props[a] = new o.Bare),
                        l.init(this.$el, n, i, t),
                        l
                    }
                }
                function a(e, t, a) {
                    if (e) {
                        var r = typeof e;
                        if (t || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        "number" == r && t)
                            return this.timer = new B({
                                duration: e,
                                context: this,
                                complete: i
                            }),
                            void (this.active = !0);
                        if ("string" == r && t) {
                            switch (e) {
                            case "hide":
                                c.call(this);
                                break;
                            case "stop":
                                l.call(this);
                                break;
                            case "redraw":
                                d.call(this);
                                break;
                            default:
                                n.call(this, e, a && a[1])
                            }
                            return i.call(this)
                        }
                        if ("function" == r)
                            return void e.call(this, this);
                        if ("object" == r) {
                            var f = 0;
                            u.call(this, e, function(e, t) {
                                e.span > f && (f = e.span),
                                e.stop(),
                                e.animate(t)
                            }, function(e) {
                                "wait"in e && (f = o(e.wait, 0))
                            }),
                            s.call(this),
                            f > 0 && (this.timer = new B({
                                duration: f,
                                context: this
                            }),
                            this.active = !0,
                            t && (this.timer.complete = i));
                            var p = this
                              , g = !1
                              , I = {};
                            V(function() {
                                u.call(p, e, function(e) {
                                    e.active && (g = !0,
                                    I[e.name] = e.nextStyle)
                                }),
                                g && p.$el.css(I)
                            })
                        }
                    }
                }
                function i() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var e = this.queue.shift();
                        a.call(this, e.options, !0, e.args)
                    }
                }
                function l(e) {
                    var t;
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1,
                    "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props,
                    u.call(this, t, f),
                    s.call(this)
                }
                function c() {
                    l.call(this),
                    this.el.style.display = "none"
                }
                function d() {
                    this.el.offsetHeight
                }
                function s() {
                    var e, t, n = [];
                    for (e in this.upstream && n.push(this.upstream),
                    this.props)
                        (t = this.props[e]).active && n.push(t.string);
                    n = n.join(","),
                    this.style !== n && (this.style = n,
                    this.el.style[C.transition.dom] = n)
                }
                function u(e, t, a) {
                    var i, o, r, l, c = t !== f, d = {};
                    for (i in e)
                        r = e[i],
                        i in Q ? (d.transform || (d.transform = {}),
                        d.transform[i] = r) : (E.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        })),
                        i in z ? d[i] = r : (l || (l = {}),
                        l[i] = r));
                    for (i in d) {
                        if (r = d[i],
                        !(o = this.props[i])) {
                            if (!c)
                                continue;
                            o = n.call(this, i)
                        }
                        t.call(this, o, r)
                    }
                    a && l && a.call(this, l)
                }
                function f(e) {
                    e.stop()
                }
                function p(e, t) {
                    e.set(t)
                }
                function I(e) {
                    this.$el.css(e)
                }
                function T(e, n) {
                    t[e] = function() {
                        return this.children ? y.call(this, n, arguments) : (this.el && n.apply(this, arguments),
                        this)
                    }
                }
                function y(e, t) {
                    var n, a = this.children.length;
                    for (n = 0; a > n; n++)
                        e.apply(this.children[n], t);
                    return this
                }
                t.init = function(t) {
                    if (this.$el = e(t),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    Y.keepInherited && !Y.fallback) {
                        var n = j(this.el, "transition");
                        n && !h.test(n) && (this.upstream = n)
                    }
                    C.backface && Y.hideBackface && W(this.el, C.backface.css, "hidden")
                }
                ,
                T("add", n),
                T("start", a),
                T("wait", function(e) {
                    e = o(e, 0),
                    this.active ? this.queue.push({
                        options: e
                    }) : (this.timer = new B({
                        duration: e,
                        context: this,
                        complete: i
                    }),
                    this.active = !0)
                }),
                T("then", function(e) {
                    return this.active ? (this.queue.push({
                        options: e,
                        args: arguments
                    }),
                    void (this.timer.complete = i)) : r("No active transition timer. Use start() or wait() before then().")
                }),
                T("next", i),
                T("stop", l),
                T("set", function(e) {
                    l.call(this, e),
                    u.call(this, e, p, I)
                }),
                T("show", function(e) {
                    "string" != typeof e && (e = "block"),
                    this.el.style.display = e
                }),
                T("hide", c),
                T("redraw", d),
                T("destroy", function() {
                    l.call(this),
                    e.removeData(this.el, g),
                    this.$el = this.el = null
                })
            })
              , F = s(M, function(t) {
                function n(t, n) {
                    var a = e.data(t, g) || e.data(t, g, new M.Bare);
                    return a.el || a.init(t),
                    n ? a.start(n) : a
                }
                t.init = function(t, a) {
                    var i = e(t);
                    if (!i.length)
                        return this;
                    if (1 === i.length)
                        return n(i[0], a);
                    var o = [];
                    return i.each(function(e, t) {
                        o.push(n(t, a))
                    }),
                    this.children = o,
                    this
                }
            })
              , P = s(function(e) {
                function t() {
                    var e = this.get();
                    this.update("auto");
                    var t = this.get();
                    return this.update(e),
                    t
                }
                var n = 500
                  , i = "ease"
                  , l = 0;
                e.init = function(e, t, a, r) {
                    this.$el = e,
                    this.el = e[0];
                    var c, d, s, f = t[0];
                    a[2] && (f = a[2]),
                    H[f] && (f = H[f]),
                    this.name = f,
                    this.type = a[1],
                    this.duration = o(t[1], this.duration, n),
                    this.ease = (c = t[2],
                    d = this.ease,
                    s = i,
                    void 0 !== d && (s = d),
                    c in u ? c : s),
                    this.delay = o(t[3], this.delay, l),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = _.test(this.name),
                    this.unit = r.unit || this.unit || Y.defaultUnit,
                    this.angle = r.angle || this.angle || Y.defaultAngle,
                    Y.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                }
                ,
                e.set = function(e) {
                    e = this.convert(e, this.type),
                    this.update(e),
                    this.redraw()
                }
                ,
                e.transition = function(e) {
                    this.active = !0,
                    e = this.convert(e, this.type),
                    this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()),
                    this.redraw()),
                    "auto" == e && (e = t.call(this))),
                    this.nextStyle = e
                }
                ,
                e.fallback = function(e) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    e = this.convert(e, this.type),
                    this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                    this.tween = new k({
                        from: n,
                        to: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                e.get = function() {
                    return j(this.el, this.name)
                }
                ,
                e.update = function(e) {
                    W(this.el, this.name, e)
                }
                ,
                e.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    W(this.el, this.name, this.get()));
                    var e = this.tween;
                    e && e.context && e.destroy()
                }
                ,
                e.convert = function(e, t) {
                    if ("auto" == e && this.auto)
                        return e;
                    var n, i, o, l, c = "number" == typeof e, d = "string" == typeof e;
                    switch (t) {
                    case T:
                        if (c)
                            return e;
                        if (d && "" === e.replace(I, ""))
                            return +e;
                        l = "number(unitless)";
                        break;
                    case y:
                        if (d) {
                            if ("" === e && this.original)
                                return this.original;
                            if (t.test(e)) {
                                ;return "#" == e.charAt(0) && 7 == e.length ? e : (n = e,
                                ((i = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n)) ? a(i[1], i[2], i[3]) : n).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"))
                            }
                        }
                        l = "hex or rgb string";
                        break;
                    case m:
                        if (c)
                            return e + this.unit;
                        if (d && t.test(e))
                            return e;
                        l = "number(px) or string(unit)";
                        break;
                    case b:
                        if (c)
                            return e + this.unit;
                        if (d && t.test(e))
                            return e;
                        l = "number(px) or string(unit or %)";
                        break;
                    case O:
                        if (c)
                            return e + this.angle;
                        if (d && t.test(e))
                            return e;
                        l = "number(deg) or string(angle)";
                        break;
                    case v:
                        if (c || d && b.test(e))
                            return e;
                        l = "number(unitless) or string(unit or %)"
                    }
                    return r("Type warning: Expected: [" + l + "] Got: [" + typeof (o = e) + "] " + o),
                    e
                }
                ,
                e.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , U = s(P, function(e, t) {
                e.init = function() {
                    t.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), y))
                }
            })
              , G = s(P, function(e, t) {
                e.init = function() {
                    t.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                e.get = function() {
                    return this.$el[this.name]()
                }
                ,
                e.update = function(e) {
                    this.$el[this.name](e)
                }
            })
              , D = s(P, function(e, t) {
                function n(e, t) {
                    var n, a, i, o, r;
                    for (n in e)
                        i = (o = Q[n])[0],
                        a = o[1] || n,
                        r = this.convert(e[n], i),
                        t.call(this, a, r, i)
                }
                e.init = function() {
                    t.init.apply(this, arguments),
                    this.current || (this.current = {},
                    Q.perspective && Y.perspective && (this.current.perspective = Y.perspective,
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                e.set = function(e) {
                    n.call(this, e, function(e, t) {
                        this.current[e] = t
                    }),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                e.transition = function(e) {
                    var t = this.values(e);
                    this.tween = new X({
                        current: this.current,
                        values: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, a = {};
                    for (n in this.current)
                        a[n] = n in t ? t[n] : this.current[n];
                    this.active = !0,
                    this.nextStyle = this.style(a)
                }
                ,
                e.fallback = function(e) {
                    var t = this.values(e);
                    this.tween = new X({
                        current: this.current,
                        values: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                e.update = function() {
                    W(this.el, this.name, this.style(this.current))
                }
                ,
                e.style = function(e) {
                    var t, n = "";
                    for (t in e)
                        n += t + "(" + e[t] + ") ";
                    return n
                }
                ,
                e.values = function(e) {
                    var t, a = {};
                    return n.call(this, e, function(e, n, i) {
                        a[e] = n,
                        void 0 === this.current[e] && (t = 0,
                        ~e.indexOf("scale") && (t = 1),
                        this.current[e] = this.convert(t, i))
                    }),
                    a
                }
            })
              , k = s(function(t) {
                function o() {
                    var e, t, n, a = c.length;
                    if (a)
                        for (V(o),
                        t = x(),
                        e = a; e--; )
                            (n = c[e]) && n.render(t)
                }
                var l = {
                    ease: u.ease[1],
                    from: 0,
                    to: 1
                };
                t.init = function(e) {
                    this.duration = e.duration || 0,
                    this.delay = e.delay || 0;
                    var t = e.ease || l.ease;
                    u[t] && (t = u[t][1]),
                    "function" != typeof t && (t = l.ease),
                    this.ease = t,
                    this.update = e.update || i,
                    this.complete = e.complete || i,
                    this.context = e.context || this,
                    this.name = e.name;
                    var n = e.from
                      , a = e.to;
                    void 0 === n && (n = l.from),
                    void 0 === a && (a = l.to),
                    this.unit = e.unit || "",
                    "number" == typeof n && "number" == typeof a ? (this.begin = n,
                    this.change = a - n) : this.format(a, n),
                    this.value = this.begin + this.unit,
                    this.start = x(),
                    !1 !== e.autoplay && this.play()
                }
                ,
                t.play = function() {
                    var e;
                    this.active || (this.start || (this.start = x()),
                    this.active = !0,
                    e = this,
                    1 === c.push(e) && V(o))
                }
                ,
                t.stop = function() {
                    var t, n, a;
                    this.active && (this.active = !1,
                    t = this,
                    (a = e.inArray(t, c)) >= 0 && (n = c.slice(a + 1),
                    c.length = a,
                    n.length && (c = c.concat(n))))
                }
                ,
                t.render = function(e) {
                    var t, n = e - this.start;
                    if (this.delay) {
                        if (n <= this.delay)
                            return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var i, o, r, l = this.ease(n, 0, 1, this.duration);
                        return t = this.startRGB ? (i = this.startRGB,
                        o = this.endRGB,
                        r = l,
                        a(i[0] + r * (o[0] - i[0]), i[1] + r * (o[1] - i[1]), i[2] + r * (o[2] - i[2]))) : Math.round((this.begin + l * this.change) * d) / d,
                        this.value = t + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    t = this.endHex || this.begin + this.change,
                    this.value = t + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                t.format = function(e, t) {
                    if (t += "",
                    "#" == (e += "").charAt(0))
                        return this.startRGB = n(t),
                        this.endRGB = n(e),
                        this.endHex = e,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var a = t.replace(I, "");
                        a !== e.replace(I, "") && r("Units do not match [tween]: " + t + ", " + e),
                        this.unit = a
                    }
                    t = parseFloat(t),
                    e = parseFloat(e),
                    this.begin = this.value = t,
                    this.change = e - t
                }
                ,
                t.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var c = []
                  , d = 1e3
            })
              , B = s(k, function(e) {
                e.init = function(e) {
                    this.duration = e.duration || 0,
                    this.complete = e.complete || i,
                    this.context = e.context,
                    this.play()
                }
                ,
                e.render = function(e) {
                    e - this.start < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , X = s(k, function(e, t) {
                e.init = function(e) {
                    var t, n;
                    for (t in this.context = e.context,
                    this.update = e.update,
                    this.tweens = [],
                    this.current = e.current,
                    e.values)
                        n = e.values[t],
                        this.current[t] !== n && this.tweens.push(new k({
                            name: t,
                            from: this.current[t],
                            to: n,
                            duration: e.duration,
                            delay: e.delay,
                            ease: e.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                e.render = function(e) {
                    var t, n, a = this.tweens.length, i = !1;
                    for (t = a; t--; )
                        (n = this.tweens[t]).context && (n.render(e),
                        this.current[n.name] = n.value,
                        i = !0);
                    return i ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                e.destroy = function() {
                    if (t.destroy.call(this),
                    this.tweens) {
                        var e, n;
                        for (e = this.tweens.length; e--; )
                            this.tweens[e].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , Y = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !C.transition,
                agentTests: []
            };
            t.fallback = function(e) {
                if (!C.transition)
                    return Y.fallback = !0;
                Y.agentTests.push("(" + e + ")");
                var t = RegExp(Y.agentTests.join("|"), "i");
                Y.fallback = t.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(e) {
                return new k(e)
            }
            ,
            t.delay = function(e, t, n) {
                return new B({
                    complete: t,
                    duration: e,
                    context: n
                })
            }
            ,
            e.fn.tram = function(e) {
                return t.call(null, this, e)
            }
            ;
            var W = e.style
              , j = e.css
              , H = {
                transform: C.transform && C.transform.css
            }
              , z = {
                color: [U, y],
                background: [U, y, "background-color"],
                "outline-color": [U, y],
                "border-color": [U, y],
                "border-top-color": [U, y],
                "border-right-color": [U, y],
                "border-bottom-color": [U, y],
                "border-left-color": [U, y],
                "border-width": [P, m],
                "border-top-width": [P, m],
                "border-right-width": [P, m],
                "border-bottom-width": [P, m],
                "border-left-width": [P, m],
                "border-spacing": [P, m],
                "letter-spacing": [P, m],
                margin: [P, m],
                "margin-top": [P, m],
                "margin-right": [P, m],
                "margin-bottom": [P, m],
                "margin-left": [P, m],
                padding: [P, m],
                "padding-top": [P, m],
                "padding-right": [P, m],
                "padding-bottom": [P, m],
                "padding-left": [P, m],
                "outline-width": [P, m],
                opacity: [P, T],
                top: [P, b],
                right: [P, b],
                bottom: [P, b],
                left: [P, b],
                "font-size": [P, b],
                "text-indent": [P, b],
                "word-spacing": [P, b],
                width: [P, b],
                "min-width": [P, b],
                "max-width": [P, b],
                height: [P, b],
                "min-height": [P, b],
                "max-height": [P, b],
                "line-height": [P, v],
                "scroll-top": [G, T, "scrollTop"],
                "scroll-left": [G, T, "scrollLeft"]
            }
              , Q = {};
            C.transform && (z.transform = [D],
            Q = {
                x: [b, "translateX"],
                y: [b, "translateY"],
                rotate: [O],
                rotateX: [O],
                rotateY: [O],
                scale: [T],
                scaleX: [T],
                scaleY: [T],
                skew: [O],
                skewX: [O],
                skewY: [O]
            }),
            C.transform && C.backface && (Q.z = [b, "translateZ"],
            Q.rotateZ = [O],
            Q.scaleZ = [T],
            Q.perspective = [m]);
            var $ = /ms/
              , q = /s|\./;
            return e.tram = t
        }(window.jQuery)
    },
    5756: function(e, t, n) {
        "use strict";
        var a, i, o, r, l, c, d, s, u, f, p, g, I, E, T, y, m, b, O, v, h = window.$, _ = n(5487) && h.tram;
        e.exports = ((a = {}).VERSION = "1.6.0-Webflow",
        i = {},
        o = Array.prototype,
        r = Object.prototype,
        l = Function.prototype,
        o.push,
        c = o.slice,
        d = (o.concat,
        r.toString,
        r.hasOwnProperty),
        s = o.forEach,
        u = o.map,
        f = (o.reduce,
        o.reduceRight,
        o.filter),
        p = (o.every,
        o.some),
        g = o.indexOf,
        I = (o.lastIndexOf,
        Object.keys),
        l.bind,
        E = a.each = a.forEach = function(e, t, n) {
            if (null == e)
                return e;
            if (s && e.forEach === s)
                e.forEach(t, n);
            else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                    if (t.call(n, e[o], o, e) === i)
                        return
            } else {
                for (var l = a.keys(e), o = 0, r = l.length; o < r; o++)
                    if (t.call(n, e[l[o]], l[o], e) === i)
                        return
            }
            return e
        }
        ,
        a.map = a.collect = function(e, t, n) {
            var a = [];
            return null == e ? a : u && e.map === u ? e.map(t, n) : (E(e, function(e, i, o) {
                a.push(t.call(n, e, i, o))
            }),
            a)
        }
        ,
        a.find = a.detect = function(e, t, n) {
            var a;
            return T(e, function(e, i, o) {
                if (t.call(n, e, i, o))
                    return a = e,
                    !0
            }),
            a
        }
        ,
        a.filter = a.select = function(e, t, n) {
            var a = [];
            return null == e ? a : f && e.filter === f ? e.filter(t, n) : (E(e, function(e, i, o) {
                t.call(n, e, i, o) && a.push(e)
            }),
            a)
        }
        ,
        T = a.some = a.any = function(e, t, n) {
            t || (t = a.identity);
            var o = !1;
            return null == e ? o : p && e.some === p ? e.some(t, n) : (E(e, function(e, a, r) {
                if (o || (o = t.call(n, e, a, r)))
                    return i
            }),
            !!o)
        }
        ,
        a.contains = a.include = function(e, t) {
            return null != e && (g && e.indexOf === g ? -1 != e.indexOf(t) : T(e, function(e) {
                return e === t
            }))
        }
        ,
        a.delay = function(e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }
        ,
        a.defer = function(e) {
            return a.delay.apply(a, [e, 1].concat(c.call(arguments, 1)))
        }
        ,
        a.throttle = function(e) {
            var t, n, a;
            return function() {
                !t && (t = !0,
                n = arguments,
                a = this,
                _.frame(function() {
                    t = !1,
                    e.apply(a, n)
                }))
            }
        }
        ,
        a.debounce = function(e, t, n) {
            var i, o, r, l, c, d = function() {
                var s = a.now() - l;
                s < t ? i = setTimeout(d, t - s) : (i = null,
                !n && (c = e.apply(r, o),
                r = o = null))
            };
            return function() {
                r = this,
                o = arguments,
                l = a.now();
                var s = n && !i;
                return !i && (i = setTimeout(d, t)),
                s && (c = e.apply(r, o),
                r = o = null),
                c
            }
        }
        ,
        a.defaults = function(e) {
            if (!a.isObject(e))
                return e;
            for (var t = 1, n = arguments.length; t < n; t++) {
                var i = arguments[t];
                for (var o in i)
                    void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }
        ,
        a.keys = function(e) {
            if (!a.isObject(e))
                return [];
            if (I)
                return I(e);
            var t = [];
            for (var n in e)
                a.has(e, n) && t.push(n);
            return t
        }
        ,
        a.has = function(e, t) {
            return d.call(e, t)
        }
        ,
        a.isObject = function(e) {
            return e === Object(e)
        }
        ,
        a.now = Date.now || function() {
            return new Date().getTime()
        }
        ,
        a.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        },
        y = /(.)^/,
        m = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        b = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function(e) {
            return "\\" + m[e]
        }
        ,
        v = /^\s*(\w|\$)+\s*$/,
        a.template = function(e, t, n) {
            !t && n && (t = n);
            var i, o = RegExp([((t = a.defaults({}, t, a.templateSettings)).escape || y).source, (t.interpolate || y).source, (t.evaluate || y).source].join("|") + "|$", "g"), r = 0, l = "__p+='";
            e.replace(o, function(t, n, a, i, o) {
                return l += e.slice(r, o).replace(b, O),
                r = o + t.length,
                n ? l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : a ? l += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (l += "';\n" + i + "\n__p+='"),
                t
            }),
            l += "';\n";
            var c = t.variable;
            if (c) {
                if (!v.test(c))
                    throw Error("variable is not a bare identifier: " + c)
            } else
                l = "with(obj||{}){\n" + l + "}\n",
                c = "obj";
            l = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + l + "return __p;\n";
            try {
                i = Function(t.variable || "obj", "_", l)
            } catch (e) {
                throw e.source = l,
                e
            }
            var d = function(e) {
                return i.call(this, e, a)
            };
            return d.source = "function(" + c + "){\n" + l + "}",
            d
        }
        ,
        a)
    },
    9461: function(e, t, n) {
        "use strict";
        var a = n(3949);
        a.define("brand", e.exports = function(e) {
            var t, n = {}, i = document, o = e("html"), r = e("body"), l = window.location, c = /PhantomJS/i.test(navigator.userAgent), d = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function s() {
                var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                e(t).attr("style", n ? "display: none !important;" : "")
            }
            n.ready = function() {
                var n = o.attr("data-wf-status")
                  , a = o.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(a) && l.hostname !== a && (n = !0),
                n && !c && (t = t || function() {
                    var t = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                      , n = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    })
                      , a = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                    return t.append(n, a),
                    t[0]
                }(),
                u(),
                setTimeout(u, 500),
                e(i).off(d, s).on(d, s))
            }
            ;
            function u() {
                var e = r.children(".w-webflow-badge")
                  , n = e.length && e.get(0) === t
                  , i = a.env("editor");
                if (n) {
                    i && e.remove();
                    return
                }
                e.length && e.remove(),
                !i && r.append(t)
            }
            return n
        }
        )
    },
    322: function(e, t, n) {
        "use strict";
        var a = n(3949);
        a.define("edit", e.exports = function(e, t, n) {
            if (n = n || {},
            (a.env("test") || a.env("frame")) && !n.fixture && !function() {
                try {
                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                } catch (e) {
                    return !1
                }
            }())
                return {
                    exit: 1
                };
            var i, o = e(window), r = e(document.documentElement), l = document.location, c = "hashchange", d = n.load || function() {
                i = !0,
                window.WebflowEditor = !0,
                o.off(c, u),
                function(e) {
                    var t = window.document.createElement("iframe");
                    t.src = "https://webflow.com/site/third-party-cookie-check.html",
                    t.style.display = "none",
                    t.sandbox = "allow-scripts allow-same-origin";
                    var n = function(a) {
                        "WF_third_party_cookies_unsupported" === a.data ? (g(t, n),
                        e(!1)) : "WF_third_party_cookies_supported" === a.data && (g(t, n),
                        e(!0))
                    };
                    t.onerror = function() {
                        g(t, n),
                        e(!1)
                    }
                    ,
                    window.addEventListener("message", n, !1),
                    window.document.body.appendChild(t)
                }(function(t) {
                    e.ajax({
                        url: p("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: r.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: function(t) {
                            return function(n) {
                                if (!n) {
                                    console.error("Could not load editor data");
                                    return
                                }
                                n.thirdPartyCookiesSupported = t,
                                function(t, n) {
                                    e.ajax({
                                        type: "GET",
                                        url: t,
                                        dataType: "script",
                                        cache: !0
                                    }).then(n, f)
                                }(function(e) {
                                    return e.indexOf("//") >= 0 ? e : p("https://editor-api.webflow.com" + e)
                                }(n.scriptPath), function() {
                                    window.WebflowEditor(n)
                                })
                            }
                        }(t)
                    })
                })
            }
            , s = !1;
            try {
                s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch (e) {}
            function u() {
                if (!i)
                    /\?edit/.test(l.hash) && d()
            }
            s ? d() : l.search ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) || /\?edit$/.test(l.href)) && d() : o.on(c, u).triggerHandler(c);
            function f(e, t, n) {
                throw console.error("Could not load editor script: " + t),
                n
            }
            function p(e) {
                return e.replace(/([^:])\/\//g, "$1/")
            }
            function g(e, t) {
                window.removeEventListener("message", t, !1),
                e.remove()
            }
            return {}
        }
        )
    },
    2338: function(e, t, n) {
        "use strict";
        n(3949).define("focus-visible", e.exports = function() {
            return {
                ready: function() {
                    if ("undefined" != typeof document)
                        try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            !function(e) {
                                var t = !0
                                  , n = !1
                                  , a = null
                                  , i = {
                                    text: !0,
                                    search: !0,
                                    url: !0,
                                    tel: !0,
                                    email: !0,
                                    password: !0,
                                    number: !0,
                                    date: !0,
                                    month: !0,
                                    week: !0,
                                    time: !0,
                                    datetime: !0,
                                    "datetime-local": !0
                                };
                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList"in e && "contains"in e.classList || !1
                                }
                                function r(e) {
                                    if (!e.getAttribute("data-wf-focus-visible"))
                                        e.setAttribute("data-wf-focus-visible", "true")
                                }
                                function l() {
                                    t = !1
                                }
                                function c() {
                                    document.addEventListener("mousemove", d),
                                    document.addEventListener("mousedown", d),
                                    document.addEventListener("mouseup", d),
                                    document.addEventListener("pointermove", d),
                                    document.addEventListener("pointerdown", d),
                                    document.addEventListener("pointerup", d),
                                    document.addEventListener("touchmove", d),
                                    document.addEventListener("touchstart", d),
                                    document.addEventListener("touchend", d)
                                }
                                function d(e) {
                                    if (!e.target.nodeName || "html" !== e.target.nodeName.toLowerCase())
                                        t = !1,
                                        document.removeEventListener("mousemove", d),
                                        document.removeEventListener("mousedown", d),
                                        document.removeEventListener("mouseup", d),
                                        document.removeEventListener("pointermove", d),
                                        document.removeEventListener("pointerdown", d),
                                        document.removeEventListener("pointerup", d),
                                        document.removeEventListener("touchmove", d),
                                        document.removeEventListener("touchstart", d),
                                        document.removeEventListener("touchend", d)
                                }
                                document.addEventListener("keydown", function(n) {
                                    if (!n.metaKey && !n.altKey && !n.ctrlKey)
                                        o(e.activeElement) && r(e.activeElement),
                                        t = !0
                                }, !0),
                                document.addEventListener("mousedown", l, !0),
                                document.addEventListener("pointerdown", l, !0),
                                document.addEventListener("touchstart", l, !0),
                                document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0),
                                    c())
                                }, !0),
                                c(),
                                e.addEventListener("focus", function(e) {
                                    var n, a, l;
                                    if (!!o(e.target)) {
                                        if (t || (a = (n = e.target).type,
                                        "INPUT" === (l = n.tagName) && i[a] && !n.readOnly || "TEXTAREA" === l && !n.readOnly || n.isContentEditable))
                                            r(e.target)
                                    }
                                }, !0),
                                e.addEventListener("blur", function(e) {
                                    if (!!o(e.target))
                                        e.target.hasAttribute("data-wf-focus-visible") && (n = !0,
                                        window.clearTimeout(a),
                                        a = window.setTimeout(function() {
                                            n = !1
                                        }, 100),
                                        !function(e) {
                                            if (!!e.getAttribute("data-wf-focus-visible"))
                                                e.removeAttribute("data-wf-focus-visible")
                                        }(e.target))
                                }, !0)
                            }(document)
                        }
                }
            }
        }
        )
    },
    8334: function(e, t, n) {
        "use strict";
        var a = n(3949);
        a.define("focus", e.exports = function() {
            var e = []
              , t = !1;
            function n(n) {
                t && (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                e.unshift(n))
            }
            function i(n) {
                var a, i;
                if (i = (a = n.target).tagName,
                /^a$/i.test(i) && null != a.href || /^(button|textarea)$/i.test(i) && !0 !== a.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === a.controls)
                    t = !0,
                    setTimeout( () => {
                        for (t = !1,
                        n.target.focus(); e.length > 0; ) {
                            var a = e.pop();
                            a.target.dispatchEvent(new MouseEvent(a.type,a))
                        }
                    }
                    , 0)
            }
            return {
                ready: function() {
                    "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", i, !0),
                    document.addEventListener("mouseup", n, !0),
                    document.addEventListener("click", n, !0))
                }
            }
        }
        )
    },
    7199: function(e) {
        "use strict";
        var t = window.jQuery
          , n = {}
          , a = []
          , i = ".w-ix"
          , o = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, a) {
                if (!a.__wf_intro)
                    a.__wf_intro = !0,
                    t(a).triggerHandler(n.types.INTRO)
            },
            outro: function(e, a) {
                if (!!a.__wf_intro)
                    a.__wf_intro = null,
                    t(a).triggerHandler(n.types.OUTRO)
            }
        };
        n.triggers = {},
        n.types = {
            INTRO: "w-ix-intro" + i,
            OUTRO: "w-ix-outro" + i
        },
        n.init = function() {
            for (var e = a.length, i = 0; i < e; i++) {
                var r = a[i];
                r[0](0, r[1])
            }
            a = [],
            t.extend(n.triggers, o)
        }
        ,
        n.async = function() {
            for (var e in o) {
                var t = o[e];
                if (!!o.hasOwnProperty(e))
                    n.triggers[e] = function(e, n) {
                        a.push([t, n])
                    }
            }
        }
        ,
        n.async(),
        e.exports = n
    },
    5134: function(e, t, n) {
        "use strict";
        var a = n(7199);
        function i(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(n)
        }
        var o = window.jQuery
          , r = {}
          , l = ".w-ix";
        r.triggers = {},
        r.types = {
            INTRO: "w-ix-intro" + l,
            OUTRO: "w-ix-outro" + l
        },
        o.extend(r.triggers, {
            reset: function(e, t) {
                a.triggers.reset(e, t)
            },
            intro: function(e, t) {
                a.triggers.intro(e, t),
                i(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                a.triggers.outro(e, t),
                i(t, "COMPONENT_INACTIVE")
            }
        }),
        e.exports = r
    },
    941: function(e, t, n) {
        "use strict";
        var a = n(3949)
          , i = n(6011);
        i.setEnv(a.env),
        a.define("ix2", e.exports = function() {
            return i
        }
        )
    },
    3949: function(e, t, n) {
        "use strict";
        var a, i, o = {}, r = {}, l = [], c = window.Webflow || [], d = window.jQuery, s = d(window), u = d(document), f = d.isFunction, p = o._ = n(5756), g = o.tram = n(5487) && d.tram, I = !1, E = !1;
        function T(e) {
            o.env() && (f(e.design) && s.on("__wf_design", e.design),
            f(e.preview) && s.on("__wf_preview", e.preview)),
            f(e.destroy) && s.on("__wf_destroy", e.destroy),
            e.ready && f(e.ready) && function(e) {
                if (I) {
                    e.ready();
                    return
                }
                if (!p.contains(l, e.ready))
                    l.push(e.ready)
            }(e)
        }
        g.config.hideBackface = !1,
        g.config.keepInherited = !0,
        o.define = function(e, t, n) {
            r[e] && y(r[e]);
            var a = r[e] = t(d, p, n) || {};
            return T(a),
            a
        }
        ,
        o.require = function(e) {
            return r[e]
        }
        ;
        function y(e) {
            f(e.design) && s.off("__wf_design", e.design),
            f(e.preview) && s.off("__wf_preview", e.preview),
            f(e.destroy) && s.off("__wf_destroy", e.destroy),
            e.ready && f(e.ready) && function(e) {
                l = p.filter(l, function(t) {
                    return t !== e.ready
                })
            }(e)
        }
        o.push = function(e) {
            if (I) {
                f(e) && e();
                return
            }
            c.push(e)
        }
        ,
        o.env = function(e) {
            var t = window.__wf_design
              , n = void 0 !== t;
            return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
        }
        ;
        var m = navigator.userAgent.toLowerCase()
          , b = o.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , O = o.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10)
          , v = o.env.ios = /(ipod|iphone|ipad)/.test(m);
        o.env.safari = /safari/.test(m) && !O && !v,
        b && u.on("touchstart mousedown", function(e) {
            a = e.target
        }),
        o.validClick = b ? function(e) {
            return e === a || d.contains(e, a)
        }
        : function() {
            return !0
        }
        ;
        var h = "resize.webflow orientationchange.webflow load.webflow"
          , _ = "scroll.webflow " + h;
        function S(e, t) {
            var n = []
              , a = {};
            return a.up = p.throttle(function(e) {
                p.each(n, function(t) {
                    t(e)
                })
            }),
            e && t && e.on(t, a.up),
            a.on = function(e) {
                if (!("function" != typeof e || p.contains(n, e)))
                    n.push(e)
            }
            ,
            a.off = function(e) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = p.filter(n, function(t) {
                    return t !== e
                })
            }
            ,
            a
        }
        function L(e) {
            f(e) && e()
        }
        o.resize = S(s, h),
        o.scroll = S(s, _),
        o.redraw = S(),
        o.location = function(e) {
            window.location = e
        }
        ,
        o.env() && (o.location = function() {}
        ),
        o.ready = function() {
            I = !0,
            E ? function() {
                E = !1,
                p.each(r, T)
            }() : p.each(l, L),
            p.each(c, L),
            o.resize.up()
        }
        ;
        function R() {
            i && (i.reject(),
            s.off("load", i.resolve)),
            i = new d.Deferred,
            s.on("load", i.resolve)
        }
        o.load = function(e) {
            i.then(e)
        }
        ,
        o.destroy = function(e) {
            e = e || {},
            E = !0,
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(r, y),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            l = [],
            c = [],
            "pending" === i.state() && R()
        }
        ,
        d(o.ready),
        R(),
        e.exports = window.Webflow = o
    },
    7624: function(e, t, n) {
        "use strict";
        var a = n(3949);
        a.define("links", e.exports = function(e, t) {
            var n, i, o, r = {}, l = e(window), c = a.env(), d = window.location, s = document.createElement("a"), u = "w--current", f = /index\.(html|php)$/, p = /\/$/;
            r.ready = r.design = r.preview = function() {
                n = c && a.env("design"),
                o = a.env("slug") || d.pathname || "",
                a.scroll.off(g),
                i = [];
                for (var t = document.links, r = 0; r < t.length; ++r)
                    (function(t) {
                        if (t.getAttribute("hreflang"))
                            return;
                        var a = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                        if (s.href = a,
                        a.indexOf(":") >= 0)
                            return;
                        var r = e(t);
                        if (s.hash.length > 1 && s.host + s.pathname === d.host + d.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var l = e(s.hash);
                            l.length && i.push({
                                link: r,
                                sec: l,
                                active: !1
                            });
                            return
                        }
                        if ("#" !== a && "" !== a)
                            I(r, u, s.href === d.href || a === o || f.test(a) && p.test(o))
                    }
                    )(t[r]);
                i.length && (a.scroll.on(g),
                g())
            }
            ;
            function g() {
                var e = l.scrollTop()
                  , n = l.height();
                t.each(i, function(t) {
                    if (t.link.attr("hreflang"))
                        return;
                    var a = t.link
                      , i = t.sec
                      , o = i.offset().top
                      , r = i.outerHeight()
                      , l = .5 * n
                      , c = i.is(":visible") && o + r - l >= e && o + l <= e + n;
                    if (t.active !== c)
                        t.active = c,
                        I(a, u, c)
                })
            }
            function I(e, t, n) {
                var a = e.hasClass(t);
                if ((!n || !a) && (!!n || !!a))
                    n ? e.addClass(t) : e.removeClass(t)
            }
            return r
        }
        )
    },
    286: function(e, t, n) {
        "use strict";
        var a = n(3949);
        a.define("scroll", e.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , n = window.location
              , i = function() {
                try {
                    return !!window.frameElement
                } catch (e) {
                    return !0
                }
            }() ? null : window.history
              , o = e(window)
              , r = e(document)
              , l = e(document.body)
              , c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                window.setTimeout(e, 15)
            }
              , d = a.env("editor") ? ".w-editor-body" : "body"
              , s = "header, " + d + " > .header, " + d + " > .w-nav:not([data-no-scroll])"
              , u = 'a[href="#"]'
              , f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")"
              , p = document.createElement("style");
            p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
            var g = /^#[a-zA-Z0-9][\w:.-]*$/;
            let I = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
            function E(e, t) {
                var n;
                switch (t) {
                case "add":
                    (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n) : e.attr("tabindex", "-1");
                    break;
                case "remove":
                    (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                }
                e.toggleClass("wf-force-outline-none", "add" === t)
            }
            function T(t) {
                var r, d = t.currentTarget;
                if (!(a.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
                    var u = (r = d,
                    g.test(r.hash) && r.host + r.pathname === n.host + n.pathname) ? d.hash : "";
                    if ("" !== u) {
                        var f = e(u);
                        if (!f.length)
                            return;
                        t && (t.preventDefault(),
                        t.stopPropagation()),
                        function(e) {
                            n.hash !== e && i && i.pushState && !(a.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== e && i.pushState({
                                hash: e
                            }, "", e)
                        }(u, t),
                        window.setTimeout(function() {
                            (function(t, n) {
                                var a = o.scrollTop()
                                  , i = function(t) {
                                    var n = e(s)
                                      , a = "fixed" === n.css("position") ? n.outerHeight() : 0
                                      , i = t.offset().top - a;
                                    if ("mid" === t.data("scroll")) {
                                        var r = o.height() - a
                                          , l = t.outerHeight();
                                        l < r && (i -= Math.round((r - l) / 2))
                                    }
                                    return i
                                }(t);
                                if (a !== i) {
                                    var r = function(e, t, n) {
                                        if ("none" === document.body.getAttribute("data-wf-scroll-motion") || I.matches)
                                            return 0;
                                        var a = 1;
                                        return l.add(e).each(function(e, t) {
                                            var n = parseFloat(t.getAttribute("data-scroll-time"));
                                            !isNaN(n) && n >= 0 && (a = n)
                                        }),
                                        (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * a
                                    }(t, a, i)
                                      , d = Date.now()
                                      , u = function() {
                                        var e = Date.now() - d;
                                        window.scroll(0, function(e, t, n, a) {
                                            return n > a ? t : e + (t - e) * function(e) {
                                                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                                            }(n / a)
                                        }(a, i, e, r)),
                                        e <= r ? c(u) : "function" == typeof n && n()
                                    };
                                    c(u)
                                }
                            }
                            )(f, function() {
                                E(f, "add"),
                                f.get(0).focus({
                                    preventScroll: !0
                                }),
                                E(f, "remove")
                            })
                        }, t ? 0 : 300)
                    }
                }
            }
            return {
                ready: function() {
                    var {WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n} = t;
                    r.on(n, f, T),
                    r.on(e, u, function(e) {
                        e.preventDefault()
                    }),
                    document.head.insertBefore(p, document.head.firstChild)
                }
            }
        }
        )
    },
    3695: function(e, t, n) {
        "use strict";
        n(3949).define("touch", e.exports = function(e) {
            var t = {}
              , n = window.getSelection;
            function a(t) {
                var a, i, o = !1, r = !1, l = Math.min(Math.round(.04 * window.innerWidth), 40);
                function c(e) {
                    var t = e.touches;
                    if (!t || !(t.length > 1))
                        o = !0,
                        t ? (r = !0,
                        a = t[0].clientX) : a = e.clientX,
                        i = a
                }
                function d(t) {
                    if (!!o) {
                        if (r && "mousemove" === t.type) {
                            t.preventDefault(),
                            t.stopPropagation();
                            return
                        }
                        var a = t.touches
                          , c = a ? a[0].clientX : t.clientX
                          , d = c - i;
                        i = c,
                        Math.abs(d) > l && n && "" === String(n()) && (function(t, n, a) {
                            var i = e.Event(t, {
                                originalEvent: n
                            });
                            e(n.target).trigger(i, a)
                        }("swipe", t, {
                            direction: d > 0 ? "right" : "left"
                        }),
                        u())
                    }
                }
                function s(e) {
                    if (!!o) {
                        if (o = !1,
                        r && "mouseup" === e.type) {
                            e.preventDefault(),
                            e.stopPropagation(),
                            r = !1;
                            return
                        }
                    }
                }
                function u() {
                    o = !1
                }
                t.addEventListener("touchstart", c, !1),
                t.addEventListener("touchmove", d, !1),
                t.addEventListener("touchend", s, !1),
                t.addEventListener("touchcancel", u, !1),
                t.addEventListener("mousedown", c, !1),
                t.addEventListener("mousemove", d, !1),
                t.addEventListener("mouseup", s, !1),
                t.addEventListener("mouseout", u, !1);
                this.destroy = function() {
                    t.removeEventListener("touchstart", c, !1),
                    t.removeEventListener("touchmove", d, !1),
                    t.removeEventListener("touchend", s, !1),
                    t.removeEventListener("touchcancel", u, !1),
                    t.removeEventListener("mousedown", c, !1),
                    t.removeEventListener("mousemove", d, !1),
                    t.removeEventListener("mouseup", s, !1),
                    t.removeEventListener("mouseout", u, !1),
                    t = null
                }
            }
            return e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(t) {
                return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null
            }
            ,
            t.instance = t.init(document),
            t
        }
        )
    },
    6524: function(e, t) {
        "use strict";
        function n(e, t, n, a, i, o, r, l, c, d, s, u, f) {
            return function(p) {
                e(p);
                var g = p.form
                  , I = {
                    name: g.attr("data-name") || g.attr("name") || "Untitled Form",
                    pageId: g.attr("data-wf-page-id") || "",
                    elementId: g.attr("data-wf-element-id") || "",
                    domain: u("html").attr("data-wf-domain") || null,
                    source: t.href,
                    test: n.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(g.html()),
                    trackingCookies: a()
                };
                let E = g.attr("data-wf-flow");
                E && (I.wfFlow = E),
                i(p);
                var T = o(g, I.fields);
                if (T)
                    return r(T);
                if (I.fileUploads = l(g),
                c(p),
                !d) {
                    s(p);
                    return
                }
                u.ajax({
                    url: f,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(e) {
                    e && 200 === e.code && (p.success = !0),
                    s(p)
                }).fail(function() {
                    s(p)
                })
            }
        }
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    7527: function(e, t, n) {
        "use strict";
        var a = n(3949);
        let i = (e, t, n, a) => {
            let i = document.createElement("div");
            t.appendChild(i),
            turnstile.render(i, {
                sitekey: e,
                callback: function(e) {
                    n(e)
                },
                "error-callback": function() {
                    a()
                }
            })
        }
        ;
        a.define("forms", e.exports = function(e, t) {
            let o;
            let r = "TURNSTILE_LOADED";
            var l, c, d, s, u, f = {}, p = e(document), g = window.location, I = window.XDomainRequest && !window.atob, E = ".w-form", T = /e(-)?mail/i, y = /^\S+@\S+$/, m = window.alert, b = a.env();
            let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
            f.ready = f.design = f.preview = function() {
                (function() {
                    O && ((o = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
                    document.head.appendChild(o),
                    o.onload = () => {
                        p.trigger(r)
                    }
                    )
                }
                )(),
                function() {
                    if (s = "https://webflow.com/api/v1/form/" + (c = e("html").attr("data-wf-site")),
                    I && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "https://formdata.webflow.com")),
                    u = `${s}/signFile`,
                    !!(l = e(E + " form")).length)
                        l.each(_)
                }(),
                (!b || a.env("preview")) && !d && function() {
                    d = !0,
                    p.on("submit", E + " form", function(t) {
                        var n = e.data(this, E);
                        n.handler && (n.evt = t,
                        n.handler(n))
                    });
                    let t = ".w-checkbox-input"
                      , n = ".w-radio-input"
                      , a = "w--redirected-checked"
                      , i = "w--redirected-focus"
                      , o = "w--redirected-focus-visible"
                      , r = [["checkbox", t], ["radio", n]];
                    p.on("change", E + ' form input[type="checkbox"]:not(' + t + ")", n => {
                        e(n.target).siblings(t).toggleClass(a)
                    }
                    ),
                    p.on("change", E + ' form input[type="radio"]', i => {
                        e(`input[name="${i.target.name}"]:not(${t})`).map( (t, i) => e(i).siblings(n).removeClass(a));
                        let o = e(i.target);
                        !o.hasClass("w-radio-input") && o.siblings(n).addClass(a)
                    }
                    ),
                    r.forEach( ([t,n]) => {
                        p.on("focus", E + ` form input[type="${t}"]:not(` + n + ")", t => {
                            e(t.target).siblings(n).addClass(i),
                            e(t.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(n).addClass(o)
                        }
                        ),
                        p.on("blur", E + ` form input[type="${t}"]:not(` + n + ")", t => {
                            e(t.target).siblings(n).removeClass(`${i} ${o}`)
                        }
                        )
                    }
                    )
                }()
            }
            ;
            function _(t, o) {
                var l = e(o)
                  , d = e.data(o, E);
                !d && (d = e.data(o, E, {
                    form: l
                })),
                S(d);
                var f = l.closest("div.w-form");
                d.done = f.find("> .w-form-done"),
                d.fail = f.find("> .w-form-fail"),
                d.fileUploads = f.find(".w-file-upload"),
                d.fileUploads.each(function(t) {
                    (function(t, n) {
                        if (!!n.fileUploads && !!n.fileUploads[t]) {
                            var a, i = e(n.fileUploads[t]), o = i.find("> .w-file-upload-default"), r = i.find("> .w-file-upload-uploading"), l = i.find("> .w-file-upload-success"), c = i.find("> .w-file-upload-error"), d = o.find(".w-file-upload-input"), s = o.find(".w-file-upload-label"), f = s.children(), p = c.find(".w-file-upload-error-msg"), g = l.find(".w-file-upload-file"), I = l.find(".w-file-remove-link"), E = g.find(".w-file-upload-file-name"), T = p.attr("data-w-size-error"), y = p.attr("data-w-type-error"), m = p.attr("data-w-generic-error");
                            if (!b && s.on("click keydown", function(e) {
                                if ("keydown" !== e.type || 13 === e.which || 32 === e.which)
                                    e.preventDefault(),
                                    d.click()
                            }),
                            s.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                            I.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                            b)
                                d.on("click", function(e) {
                                    e.preventDefault()
                                }),
                                s.on("click", function(e) {
                                    e.preventDefault()
                                }),
                                f.on("click", function(e) {
                                    e.preventDefault()
                                });
                            else {
                                I.on("click keydown", function(e) {
                                    if ("keydown" === e.type) {
                                        if (13 !== e.which && 32 !== e.which)
                                            return;
                                        e.preventDefault()
                                    }
                                    d.removeAttr("data-value"),
                                    d.val(""),
                                    E.html(""),
                                    o.toggle(!0),
                                    l.toggle(!1),
                                    s.focus()
                                }),
                                d.on("change", function(i) {
                                    if (!!(a = i.target && i.target.files && i.target.files[0]))
                                        o.toggle(!1),
                                        c.toggle(!1),
                                        r.toggle(!0),
                                        r.focus(),
                                        E.text(a.name),
                                        !R() && L(n),
                                        n.fileUploads[t].uploading = !0,
                                        function(t, n) {
                                            var a = new URLSearchParams({
                                                name: t.name,
                                                size: t.size
                                            });
                                            e.ajax({
                                                type: "GET",
                                                url: `${u}?${a}`,
                                                crossDomain: !0
                                            }).done(function(e) {
                                                n(null, e)
                                            }).fail(function(e) {
                                                n(e)
                                            })
                                        }(a, h)
                                });
                                var O = s.outerHeight();
                                d.height(O),
                                d.width(1)
                            }
                        }
                        function v(e) {
                            var a = e.responseJSON && e.responseJSON.msg
                              , i = m;
                            "string" == typeof a && 0 === a.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof a && 0 === a.indexOf("MaxFileSizeError") && (i = T),
                            p.text(i),
                            d.removeAttr("data-value"),
                            d.val(""),
                            r.toggle(!1),
                            o.toggle(!0),
                            c.toggle(!0),
                            c.focus(),
                            n.fileUploads[t].uploading = !1,
                            !R() && S(n)
                        }
                        function h(t, n) {
                            if (t)
                                return v(t);
                            var i = n.fileName
                              , o = n.postData
                              , r = n.fileId
                              , l = n.s3Url;
                            d.attr("data-value", r),
                            function(t, n, a, i, o) {
                                var r = new FormData;
                                for (var l in n)
                                    r.append(l, n[l]);
                                r.append("file", a, i),
                                e.ajax({
                                    type: "POST",
                                    url: t,
                                    data: r,
                                    processData: !1,
                                    contentType: !1
                                }).done(function() {
                                    o(null)
                                }).fail(function(e) {
                                    o(e)
                                })
                            }(l, o, a, i, _)
                        }
                        function _(e) {
                            if (e)
                                return v(e);
                            r.toggle(!1),
                            l.css("display", "inline-block"),
                            l.focus(),
                            n.fileUploads[t].uploading = !1,
                            !R() && S(n)
                        }
                        function R() {
                            return (n.fileUploads && n.fileUploads.toArray() || []).some(function(e) {
                                return e.uploading
                            })
                        }
                    }
                    )(t, d)
                }),
                O && (d.wait = !1,
                L(d),
                p.on("undefined" != typeof turnstile ? "ready" : r, function() {
                    i(O, o, e => {
                        d.turnstileToken = e,
                        S(d)
                    }
                    , () => {
                        L(d)
                    }
                    )
                }));
                var I = d.form.attr("aria-label") || d.form.attr("data-name") || "Form";
                !d.done.attr("aria-label") && d.form.attr("aria-label", I),
                d.done.attr("tabindex", "-1"),
                d.done.attr("role", "region"),
                !d.done.attr("aria-label") && d.done.attr("aria-label", I + " success"),
                d.fail.attr("tabindex", "-1"),
                d.fail.attr("role", "region"),
                !d.fail.attr("aria-label") && d.fail.attr("aria-label", I + " failure");
                var T = d.action = l.attr("action");
                if (d.handler = null,
                d.redirect = l.attr("data-redirect"),
                v.test(T)) {
                    d.handler = w;
                    return
                }
                if (!T) {
                    if (c) {
                        d.handler = (0,
                        n(6524).default)(S, g, a, N, x, R, m, A, L, c, V, e, s);
                        return
                    }
                    h()
                }
            }
            function S(e) {
                var t = e.btn = e.form.find(':input[type="submit"]');
                e.wait = e.btn.attr("data-wait") || null,
                e.success = !1,
                t.prop("disabled", !!(O && !e.turnstileToken)),
                e.label && t.val(e.label)
            }
            function L(e) {
                var t = e.btn
                  , n = e.wait;
                t.prop("disabled", !0),
                n && (e.label = t.val(),
                t.val(n))
            }
            function R(t, n) {
                var a = null;
                return n = n || {},
                t.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, o) {
                    var r = e(o)
                      , l = r.attr("type")
                      , c = r.attr("data-name") || r.attr("name") || "Field " + (i + 1);
                    c = encodeURIComponent(c);
                    var d = r.val();
                    if ("checkbox" === l)
                        d = r.is(":checked");
                    else if ("radio" === l) {
                        if (null === n[c] || "string" == typeof n[c])
                            return;
                        d = t.find('input[name="' + r.attr("name") + '"]:checked').val() || null
                    }
                    "string" == typeof d && (d = e.trim(d)),
                    n[c] = d,
                    a = a || function(e, t, n, a) {
                        var i = null;
                        return "password" === t ? i = "Passwords cannot be submitted." : e.attr("required") ? a ? T.test(e.attr("type")) && !y.test(a) && (i = "Please enter a valid email address for: " + n) : i = "Please fill out the required field: " + n : "g-recaptcha-response" === n && !a && (i = "Please confirm you’re not a robot."),
                        i
                    }(r, l, c, d)
                }),
                a
            }
            function A(t) {
                var n = {};
                return t.find(':input[type="file"]').each(function(t, a) {
                    var i = e(a)
                      , o = i.attr("data-name") || i.attr("name") || "File " + (t + 1)
                      , r = i.attr("data-value");
                    "string" == typeof r && (r = e.trim(r)),
                    n[o] = r
                }),
                n
            }
            let C = {
                _mkto_trk: "marketo"
            };
            function N() {
                return document.cookie.split("; ").reduce(function(e, t) {
                    let n = t.split("=")
                      , a = n[0];
                    if (a in C) {
                        let t = C[a]
                          , i = n.slice(1).join("=");
                        e[t] = i
                    }
                    return e
                }, {})
            }
            function w(n) {
                S(n);
                var a, i = n.form, o = {};
                if (/^https/.test(g.href) && !/^https/.test(n.action)) {
                    i.attr("method", "post");
                    return
                }
                x(n);
                var r = R(i, o);
                if (r)
                    return m(r);
                L(n),
                t.each(o, function(e, t) {
                    T.test(t) && (o.EMAIL = e),
                    /^((full[ _-]?)?name)$/i.test(t) && (a = e),
                    /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                    /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e)
                }),
                a && !o.FNAME && (a = a.split(" "),
                o.FNAME = a[0],
                o.LNAME = o.LNAME || a[1]);
                var l = n.action.replace("/post?", "/post-json?") + "&c=?"
                  , c = l.indexOf("u=") + 2;
                c = l.substring(c, l.indexOf("&", c));
                var d = l.indexOf("id=") + 3;
                o["b_" + c + "_" + (d = l.substring(d, l.indexOf("&", d)))] = "",
                e.ajax({
                    url: l,
                    data: o,
                    dataType: "jsonp"
                }).done(function(e) {
                    n.success = "success" === e.result || /already/.test(e.msg),
                    !n.success && console.info("MailChimp error: " + e.msg),
                    V(n)
                }).fail(function() {
                    V(n)
                })
            }
            function V(e) {
                var t = e.form
                  , n = e.redirect
                  , i = e.success;
                if (i && n) {
                    a.location(n);
                    return
                }
                e.done.toggle(i),
                e.fail.toggle(!i),
                i ? e.done.focus() : e.fail.focus(),
                t.toggle(!i),
                S(e)
            }
            function x(e) {
                e.evt && e.evt.preventDefault(),
                e.evt = null
            }
            return f
        }
        )
    },
    1655: function(e, t, n) {
        "use strict";
        var a = n(3949)
          , i = n(5134);
        let o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        a.define("navbar", e.exports = function(e, t) {
            var n, r, l, c, d = {}, s = e.tram, u = e(window), f = e(document), p = t.debounce, g = a.env(), I = ".w-nav", E = "w--open", T = "w--nav-dropdown-open", y = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open", b = "w--nav-link-open", O = i.triggers, v = e();
            d.ready = d.design = d.preview = function() {
                if (l = g && a.env("design"),
                c = a.env("editor"),
                n = e(document.body),
                !!(r = f.find(I)).length)
                    r.each(S),
                    h(),
                    function() {
                        a.resize.on(_)
                    }()
            }
            ,
            d.destroy = function() {
                v = e(),
                h(),
                r && r.length && r.each(L)
            }
            ;
            function h() {
                a.resize.off(_)
            }
            function _() {
                r.each(M)
            }
            function S(n, a) {
                var i = e(a)
                  , r = e.data(a, I);
                !r && (r = e.data(a, I, {
                    open: !1,
                    el: i,
                    config: {},
                    selectedIdx: -1
                })),
                r.menu = i.find(".w-nav-menu"),
                r.links = r.menu.find(".w-nav-link"),
                r.dropdowns = r.menu.find(".w-dropdown"),
                r.dropdownToggle = r.menu.find(".w-dropdown-toggle"),
                r.dropdownList = r.menu.find(".w-dropdown-list"),
                r.button = i.find(".w-nav-button"),
                r.container = i.find(".w-container"),
                r.overlayContainerId = "w-nav-overlay-" + n,
                r.outside = function(t) {
                    return t.outside && f.off("click" + I, t.outside),
                    function(n) {
                        var a = e(n.target);
                        if (!c || !a.closest(".w-editor-bem-EditorOverlay").length)
                            x(t, a)
                    }
                }(r);
                var d = i.find(".w-nav-brand");
                d && "/" === d.attr("href") && null == d.attr("aria-label") && d.attr("aria-label", "home"),
                r.button.attr("style", "-webkit-user-select: text;"),
                null == r.button.attr("aria-label") && r.button.attr("aria-label", "menu"),
                r.button.attr("role", "button"),
                r.button.attr("tabindex", "0"),
                r.button.attr("aria-controls", r.overlayContainerId),
                r.button.attr("aria-haspopup", "menu"),
                r.button.attr("aria-expanded", "false"),
                r.el.off(I),
                r.button.off(I),
                r.menu.off(I),
                A(r),
                l ? (R(r),
                r.el.on("setting" + I, function(e) {
                    return function(n, a) {
                        a = a || {};
                        var i = u.width();
                        A(e),
                        !0 === a.open && G(e, !0),
                        !1 === a.open && k(e, !0),
                        e.open && t.defer(function() {
                            i !== u.width() && N(e)
                        })
                    }
                }(r))) : (function(t) {
                    if (!t.overlay)
                        t.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(t.el),
                        t.overlay.attr("id", t.overlayContainerId),
                        t.parent = t.menu.parent(),
                        k(t, !0)
                }(r),
                r.button.on("click" + I, w(r)),
                r.menu.on("click" + I, "a", V(r)),
                r.button.on("keydown" + I, function(e) {
                    return function(t) {
                        switch (t.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return w(e)(),
                            t.preventDefault(),
                            t.stopPropagation();
                        case o.ESCAPE:
                            return k(e),
                            t.preventDefault(),
                            t.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            if (!e.open)
                                return t.preventDefault(),
                                t.stopPropagation();
                            return t.keyCode === o.END ? e.selectedIdx = e.links.length - 1 : e.selectedIdx = 0,
                            C(e),
                            t.preventDefault(),
                            t.stopPropagation()
                        }
                    }
                }(r)),
                r.el.on("keydown" + I, function(e) {
                    return function(t) {
                        if (!!e.open)
                            switch (e.selectedIdx = e.links.index(document.activeElement),
                            t.keyCode) {
                            case o.HOME:
                            case o.END:
                                return t.keyCode === o.END ? e.selectedIdx = e.links.length - 1 : e.selectedIdx = 0,
                                C(e),
                                t.preventDefault(),
                                t.stopPropagation();
                            case o.ESCAPE:
                                return k(e),
                                e.button.focus(),
                                t.preventDefault(),
                                t.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return e.selectedIdx = Math.max(-1, e.selectedIdx - 1),
                                C(e),
                                t.preventDefault(),
                                t.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return e.selectedIdx = Math.min(e.links.length - 1, e.selectedIdx + 1),
                                C(e),
                                t.preventDefault(),
                                t.stopPropagation()
                            }
                    }
                }(r))),
                M(n, a)
            }
            function L(t, n) {
                var a = e.data(n, I);
                a && (R(a),
                e.removeData(n, I))
            }
            function R(e) {
                if (!!e.overlay)
                    k(e, !0),
                    e.overlay.remove(),
                    e.overlay = null
            }
            function A(e) {
                var n = {}
                  , a = e.config || {}
                  , i = n.animation = e.el.attr("data-animation") || "default";
                n.animOver = /^over/.test(i),
                n.animDirect = /left$/.test(i) ? -1 : 1,
                a.animation !== i && e.open && t.defer(N, e),
                n.easing = e.el.attr("data-easing") || "ease",
                n.easing2 = e.el.attr("data-easing2") || "ease";
                var o = e.el.attr("data-duration");
                n.duration = null != o ? Number(o) : 400,
                n.docHeight = e.el.attr("data-doc-height"),
                e.config = n
            }
            function C(e) {
                if (e.links[e.selectedIdx]) {
                    var t = e.links[e.selectedIdx];
                    t.focus(),
                    V(t)
                }
            }
            function N(e) {
                if (!!e.open)
                    k(e, !0),
                    G(e, !0)
            }
            function w(e) {
                return p(function() {
                    e.open ? k(e) : G(e)
                })
            }
            function V(t) {
                return function(n) {
                    var i = e(this).attr("href");
                    if (!a.validClick(n.currentTarget)) {
                        n.preventDefault();
                        return
                    }
                    i && 0 === i.indexOf("#") && t.open && k(t)
                }
            }
            var x = p(function(e, t) {
                if (!!e.open) {
                    var n = t.closest(".w-nav-menu");
                    !e.menu.is(n) && k(e)
                }
            });
            function M(t, n) {
                var a = e.data(n, I)
                  , i = a.collapsed = "none" !== a.button.css("display");
                if (a.open && !i && !l && k(a, !0),
                a.container.length) {
                    var o = function(t) {
                        var n = t.container.css(F);
                        return "none" === n && (n = ""),
                        function(t, a) {
                            (a = e(a)).css(F, ""),
                            "none" === a.css(F) && a.css(F, n)
                        }
                    }(a);
                    a.links.each(o),
                    a.dropdowns.each(o)
                }
                a.open && D(a)
            }
            var F = "max-width";
            function P(e, t) {
                t.setAttribute("data-nav-menu-open", "")
            }
            function U(e, t) {
                t.removeAttribute("data-nav-menu-open")
            }
            function G(e, t) {
                if (!e.open) {
                    e.open = !0,
                    e.menu.each(P),
                    e.links.addClass(b),
                    e.dropdowns.addClass(T),
                    e.dropdownToggle.addClass(y),
                    e.dropdownList.addClass(m),
                    e.button.addClass(E);
                    var n = e.config;
                    ("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0);
                    var i = D(e)
                      , o = e.menu.outerHeight(!0)
                      , r = e.menu.outerWidth(!0)
                      , c = e.el.height()
                      , d = e.el[0];
                    if (M(0, d),
                    O.intro(0, d),
                    a.redraw.up(),
                    !l && f.on("click" + I, e.outside),
                    t) {
                        p();
                        return
                    }
                    var u = "transform " + n.duration + "ms " + n.easing;
                    if (e.overlay && (v = e.menu.prev(),
                    e.overlay.show().append(e.menu)),
                    n.animOver) {
                        s(e.menu).add(u).set({
                            x: n.animDirect * r,
                            height: i
                        }).start({
                            x: 0
                        }).then(p),
                        e.overlay && e.overlay.width(r);
                        return
                    }
                    s(e.menu).add(u).set({
                        y: -(c + o)
                    }).start({
                        y: 0
                    }).then(p)
                }
                function p() {
                    e.button.attr("aria-expanded", "true")
                }
            }
            function D(e) {
                var t = e.config
                  , a = t.docHeight ? f.height() : n.height();
                return t.animOver ? e.menu.height(a) : "fixed" !== e.el.css("position") && (a -= e.el.outerHeight(!0)),
                e.overlay && e.overlay.height(a),
                a
            }
            function k(e, t) {
                if (!!e.open) {
                    e.open = !1,
                    e.button.removeClass(E);
                    var n = e.config;
                    if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0),
                    O.outro(0, e.el[0]),
                    f.off("click" + I, e.outside),
                    t) {
                        s(e.menu).stop(),
                        l();
                        return
                    }
                    var a = "transform " + n.duration + "ms " + n.easing2
                      , i = e.menu.outerHeight(!0)
                      , o = e.menu.outerWidth(!0)
                      , r = e.el.height();
                    if (n.animOver) {
                        s(e.menu).add(a).start({
                            x: o * n.animDirect
                        }).then(l);
                        return
                    }
                    s(e.menu).add(a).start({
                        y: -(r + i)
                    }).then(l)
                }
                function l() {
                    e.menu.height(""),
                    s(e.menu).set({
                        x: 0,
                        y: 0
                    }),
                    e.menu.each(U),
                    e.links.removeClass(b),
                    e.dropdowns.removeClass(T),
                    e.dropdownToggle.removeClass(y),
                    e.dropdownList.removeClass(m),
                    e.overlay && e.overlay.children().length && (v.length ? e.menu.insertAfter(v) : e.menu.prependTo(e.parent),
                    e.overlay.attr("style", "").hide()),
                    e.el.triggerHandler("w-close"),
                    e.button.attr("aria-expanded", "false")
                }
            }
            return d
        }
        )
    },
    3946: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            actionListPlaybackChanged: function() {
                return Y
            },
            animationFrameChanged: function() {
                return U
            },
            clearRequested: function() {
                return x
            },
            elementStateChanged: function() {
                return X
            },
            eventListenerAdded: function() {
                return M
            },
            eventStateChanged: function() {
                return P
            },
            instanceAdded: function() {
                return D
            },
            instanceRemoved: function() {
                return B
            },
            instanceStarted: function() {
                return k
            },
            mediaQueriesDefined: function() {
                return j
            },
            parameterChanged: function() {
                return G
            },
            playbackRequested: function() {
                return w
            },
            previewRequested: function() {
                return N
            },
            rawDataImported: function() {
                return L
            },
            sessionInitialized: function() {
                return R
            },
            sessionStarted: function() {
                return A
            },
            sessionStopped: function() {
                return C
            },
            stopRequested: function() {
                return V
            },
            testFrameRendered: function() {
                return F
            },
            viewportWidthChanged: function() {
                return W
            }
        });
        let a = n(7087)
          , i = n(9468)
          , {IX2_RAW_DATA_IMPORTED: o, IX2_SESSION_INITIALIZED: r, IX2_SESSION_STARTED: l, IX2_SESSION_STOPPED: c, IX2_PREVIEW_REQUESTED: d, IX2_PLAYBACK_REQUESTED: s, IX2_STOP_REQUESTED: u, IX2_CLEAR_REQUESTED: f, IX2_EVENT_LISTENER_ADDED: p, IX2_TEST_FRAME_RENDERED: g, IX2_EVENT_STATE_CHANGED: I, IX2_ANIMATION_FRAME_CHANGED: E, IX2_PARAMETER_CHANGED: T, IX2_INSTANCE_ADDED: y, IX2_INSTANCE_STARTED: m, IX2_INSTANCE_REMOVED: b, IX2_ELEMENT_STATE_CHANGED: O, IX2_ACTION_LIST_PLAYBACK_CHANGED: v, IX2_VIEWPORT_WIDTH_CHANGED: h, IX2_MEDIA_QUERIES_DEFINED: _} = a.IX2EngineActionTypes
          , {reifyState: S} = i.IX2VanillaUtils
          , L = e => ({
            type: o,
            payload: {
                ...S(e)
            }
        })
          , R = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: r,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        })
          , A = () => ({
            type: l
        })
          , C = () => ({
            type: c
        })
          , N = ({rawData: e, defer: t}) => ({
            type: d,
            payload: {
                defer: t,
                rawData: e
            }
        })
          , w = ({actionTypeId: e=a.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: n, eventId: i, allowEvents: o, immediate: r, testManual: l, verbose: c, rawData: d}) => ({
            type: s,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: l,
                eventId: i,
                allowEvents: o,
                immediate: r,
                verbose: c,
                rawData: d
            }
        })
          , V = e => ({
            type: u,
            payload: {
                actionListId: e
            }
        })
          , x = () => ({
            type: f
        })
          , M = (e, t) => ({
            type: p,
            payload: {
                target: e,
                listenerParams: t
            }
        })
          , F = (e=1) => ({
            type: g,
            payload: {
                step: e
            }
        })
          , P = (e, t) => ({
            type: I,
            payload: {
                stateKey: e,
                newState: t
            }
        })
          , U = (e, t) => ({
            type: E,
            payload: {
                now: e,
                parameters: t
            }
        })
          , G = (e, t) => ({
            type: T,
            payload: {
                key: e,
                value: t
            }
        })
          , D = e => ({
            type: y,
            payload: {
                ...e
            }
        })
          , k = (e, t) => ({
            type: m,
            payload: {
                instanceId: e,
                time: t
            }
        })
          , B = e => ({
            type: b,
            payload: {
                instanceId: e
            }
        })
          , X = (e, t, n, a) => ({
            type: O,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: a
            }
        })
          , Y = ({actionListId: e, isPlaying: t}) => ({
            type: v,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        })
          , W = ({width: e, mediaQueries: t}) => ({
            type: h,
            payload: {
                width: e,
                mediaQueries: t
            }
        })
          , j = () => ({
            type: _
        })
    },
    6011: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            actions: function() {
                return r
            },
            destroy: function() {
                return u
            },
            init: function() {
                return s
            },
            setEnv: function() {
                return d
            },
            store: function() {
                return c
            }
        });
        let a = n(9516)
          , i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(7243))
          , o = n(1970)
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = l(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }(n(3946));
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (l = function(e) {
                return e ? n : t
            }
            )(e)
        }
        let c = (0,
        a.createStore)(i.default);
        function d(e) {
            e() && (0,
            o.observeRequests)(c)
        }
        function s(e) {
            u(),
            (0,
            o.startEngine)({
                store: c,
                rawData: e,
                allowEvents: !0
            })
        }
        function u() {
            (0,
            o.stopEngine)(c)
        }
    },
    5012: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            elementContains: function() {
                return T
            },
            getChildElements: function() {
                return m
            },
            getClosestElement: function() {
                return O
            },
            getProperty: function() {
                return f
            },
            getQuerySelector: function() {
                return g
            },
            getRefType: function() {
                return v
            },
            getSiblingElements: function() {
                return b
            },
            getStyle: function() {
                return u
            },
            getValidDocument: function() {
                return I
            },
            isSiblingNode: function() {
                return y
            },
            matchSelector: function() {
                return p
            },
            queryDocument: function() {
                return E
            },
            setStyle: function() {
                return s
            }
        });
        let a = n(9468)
          , i = n(7087)
          , {ELEMENT_MATCHES: o} = a.IX2BrowserSupport
          , {IX2_ID_DELIMITER: r, HTML_ELEMENT: l, PLAIN_OBJECT: c, WF_PAGE: d} = i.IX2EngineConstants;
        function s(e, t, n) {
            e.style[t] = n
        }
        function u(e, t) {
            return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
        }
        function f(e, t) {
            return e[t]
        }
        function p(e) {
            return t => t[o](e)
        }
        function g({id: e, selector: t}) {
            if (e) {
                let t = e;
                if (-1 !== e.indexOf(r)) {
                    let n = e.split(r)
                      , a = n[0];
                    if (t = n[1],
                    a !== document.documentElement.getAttribute(d))
                        return null
                }
                return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
            }
            return t
        }
        function I(e) {
            return null == e || e === document.documentElement.getAttribute(d) ? document : null
        }
        function E(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function T(e, t) {
            return e.contains(t)
        }
        function y(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function m(e) {
            let t = [];
            for (let n = 0, {length: a} = e || []; n < a; n++) {
                let {children: a} = e[n]
                  , {length: i} = a;
                if (!!i)
                    for (let e = 0; e < i; e++)
                        t.push(a[e])
            }
            return t
        }
        function b(e=[]) {
            let t = []
              , n = [];
            for (let a = 0, {length: i} = e; a < i; a++) {
                let {parentNode: i} = e[a];
                if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
                    continue;
                n.push(i);
                let o = i.firstElementChild;
                for (; null != o; )
                    -1 === e.indexOf(o) && t.push(o),
                    o = o.nextElementSibling
            }
            return t
        }
        let O = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let n = e;
            do {
                if (n[o] && n[o](t))
                    return n;
                n = n.parentNode
            } while (null != n);
            return null
        }
        ;
        function v(e) {
            return null != e && "object" == typeof e ? e instanceof Element ? l : c : null
        }
    },
    1970: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            observeRequests: function() {
                return $
            },
            startActionGroup: function() {
                return ef
            },
            startEngine: function() {
                return et
            },
            stopActionGroup: function() {
                return eu
            },
            stopAllActionGroups: function() {
                return es
            },
            stopEngine: function() {
                return en
            }
        });
        let a = E(n(9777))
          , i = E(n(4738))
          , o = E(n(4659))
          , r = E(n(3452))
          , l = E(n(6633))
          , c = E(n(3729))
          , d = E(n(2397))
          , s = E(n(5082))
          , u = n(7087)
          , f = n(9468)
          , p = n(3946)
          , g = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = T(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }(n(5012))
          , I = E(n(8955));
        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function T(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (T = function(e) {
                return e ? n : t
            }
            )(e)
        }
        let y = Object.keys(u.QuickEffectIds)
          , m = e => y.includes(e)
          , {COLON_DELIMITER: b, BOUNDARY_SELECTOR: O, HTML_ELEMENT: v, RENDER_GENERAL: h, W_MOD_IX: _} = u.IX2EngineConstants
          , {getAffectedElements: S, getElementId: L, getDestinationValues: R, observeStore: A, getInstanceId: C, renderHTMLElement: N, clearAllStyles: w, getMaxDurationItemIndex: V, getComputedStyle: x, getInstanceOrigin: M, reduceListToGroup: F, shouldNamespaceEventParameter: P, getNamespacedParameterId: U, shouldAllowMediaQuery: G, cleanupHTMLElement: D, clearObjectCache: k, stringifyTarget: B, mediaQueriesEqual: X, shallowEqual: Y} = f.IX2VanillaUtils
          , {isPluginType: W, createPluginInstance: j, getPluginDuration: H} = f.IX2VanillaPlugins
          , z = navigator.userAgent
          , Q = z.match(/iPad/i) || z.match(/iPhone/);
        function $(e) {
            A({
                store: e,
                select: ({ixRequest: e}) => e.preview,
                onChange: q
            }),
            A({
                store: e,
                select: ({ixRequest: e}) => e.playback,
                onChange: Z
            }),
            A({
                store: e,
                select: ({ixRequest: e}) => e.stop,
                onChange: J
            }),
            A({
                store: e,
                select: ({ixRequest: e}) => e.clear,
                onChange: ee
            })
        }
        function q({rawData: e, defer: t}, n) {
            let a = () => {
                et({
                    store: n,
                    rawData: e,
                    allowEvents: !0
                }),
                K()
            }
            ;
            t ? setTimeout(a, 0) : a()
        }
        function K() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function Z(e, t) {
            let {actionTypeId: n, actionListId: a, actionItemId: i, eventId: o, allowEvents: r, immediate: l, testManual: c, verbose: d=!0} = e
              , {rawData: s} = e;
            if (a && i && s && l) {
                let e = s.actionLists[a];
                e && (s = F({
                    actionList: e,
                    actionItemId: i,
                    rawData: s
                }))
            }
            if (et({
                store: t,
                rawData: s,
                allowEvents: r,
                testManual: c
            }),
            a && n === u.ActionTypeConsts.GENERAL_START_ACTION || m(n)) {
                eu({
                    store: t,
                    actionListId: a
                }),
                ed({
                    store: t,
                    actionListId: a,
                    eventId: o
                });
                let e = ef({
                    store: t,
                    eventId: o,
                    actionListId: a,
                    immediate: l,
                    verbose: d
                });
                d && e && t.dispatch((0,
                p.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !l
                }))
            }
        }
        function J({actionListId: e}, t) {
            e ? eu({
                store: t,
                actionListId: e
            }) : es({
                store: t
            }),
            en(t)
        }
        function ee(e, t) {
            en(t),
            w({
                store: t,
                elementApi: g
            })
        }
        function et({store: e, rawData: t, allowEvents: n, testManual: r}) {
            let {ixSession: l} = e.getState();
            if (t && e.dispatch((0,
            p.rawDataImported)(t)),
            !l.active) {
                if (e.dispatch((0,
                p.sessionInitialized)({
                    hasBoundaryNodes: !!document.querySelector(O),
                    reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                })),
                n && (function(e) {
                    let {ixData: t} = e.getState()
                      , {eventTypeMap: n} = t;
                    eo(e),
                    (0,
                    d.default)(n, (t, n) => {
                        let r = I.default[n];
                        if (!r) {
                            console.warn(`IX2 event type not configured: ${n}`);
                            return
                        }
                        (function({logic: e, store: t, events: n}) {
                            (function(e) {
                                if (!Q)
                                    return;
                                let t = {}
                                  , n = "";
                                for (let a in e) {
                                    let {eventTypeId: i, target: o} = e[a]
                                      , r = g.getQuerySelector(o);
                                    if (!t[r])
                                        (i === u.EventTypeConsts.MOUSE_CLICK || i === u.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[r] = !0,
                                        n += r + "{cursor: pointer;touch-action: manipulation;}")
                                }
                                if (n) {
                                    let e = document.createElement("style");
                                    e.textContent = n,
                                    document.body.appendChild(e)
                                }
                            }
                            )(n);
                            let {types: r, handler: l} = e
                              , {ixData: c} = t.getState()
                              , {actionLists: f} = c
                              , I = er(n, ec);
                            if (!(0,
                            o.default)(I))
                                return;
                            (0,
                            d.default)(I, (e, o) => {
                                let r = n[o]
                                  , {action: l, id: d, mediaQueries: s=c.mediaQueryKeys} = r
                                  , {actionListId: I} = l.config;
                                !X(s, c.mediaQueryKeys) && t.dispatch((0,
                                p.mediaQueriesDefined)()),
                                l.actionTypeId === u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(r.config) ? r.config : [r.config]).forEach(n => {
                                    let {continuousParameterGroupId: o} = n
                                      , r = (0,
                                    i.default)(f, `${I}.continuousParameterGroups`, [])
                                      , l = (0,
                                    a.default)(r, ({id: e}) => e === o)
                                      , c = (n.smoothing || 0) / 100
                                      , s = (n.restingState || 0) / 100;
                                    if (!!l)
                                        e.forEach( (e, a) => {
                                            !function({store: e, eventStateKey: t, eventTarget: n, eventId: a, eventConfig: o, actionListId: r, parameterGroup: l, smoothing: c, restingValue: d}) {
                                                let {ixData: s, ixSession: f} = e.getState()
                                                  , {events: p} = s
                                                  , I = p[a]
                                                  , {eventTypeId: E} = I
                                                  , T = {}
                                                  , y = {}
                                                  , m = []
                                                  , {continuousActionGroups: v} = l
                                                  , {id: h} = l;
                                                P(E, o) && (h = U(t, h));
                                                let _ = f.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null;
                                                v.forEach(e => {
                                                    let {keyframe: t, actionItems: a} = e;
                                                    a.forEach(e => {
                                                        let {actionTypeId: a} = e
                                                          , {target: i} = e.config;
                                                        if (!i)
                                                            return;
                                                        let o = i.boundaryMode ? _ : null
                                                          , r = B(i) + b + a;
                                                        if (y[r] = function(e=[], t, n) {
                                                            let a;
                                                            let i = [...e];
                                                            return i.some( (e, n) => e.keyframe === t && (a = n,
                                                            !0)),
                                                            null == a && (a = i.length,
                                                            i.push({
                                                                keyframe: t,
                                                                actionItems: []
                                                            })),
                                                            i[a].actionItems.push(n),
                                                            i
                                                        }(y[r], t, e),
                                                        !T[r]) {
                                                            T[r] = !0;
                                                            let {config: t} = e;
                                                            S({
                                                                config: t,
                                                                event: I,
                                                                eventTarget: n,
                                                                elementRoot: o,
                                                                elementApi: g
                                                            }).forEach(e => {
                                                                m.push({
                                                                    element: e,
                                                                    key: r
                                                                })
                                                            }
                                                            )
                                                        }
                                                    }
                                                    )
                                                }
                                                ),
                                                m.forEach( ({element: t, key: n}) => {
                                                    let o = y[n]
                                                      , l = (0,
                                                    i.default)(o, "[0].actionItems[0]", {})
                                                      , {actionTypeId: s} = l
                                                      , f = (s === u.ActionTypeConsts.PLUGIN_RIVE ? 0 === (l.config?.target?.selectorGuids || []).length : W(s)) ? j(s)?.(t, l) : null
                                                      , p = R({
                                                        element: t,
                                                        actionItem: l,
                                                        elementApi: g
                                                    }, f);
                                                    ep({
                                                        store: e,
                                                        element: t,
                                                        eventId: a,
                                                        actionListId: r,
                                                        actionItem: l,
                                                        destination: p,
                                                        continuous: !0,
                                                        parameterId: h,
                                                        actionGroups: o,
                                                        smoothing: c,
                                                        restingValue: d,
                                                        pluginInstance: f
                                                    })
                                                }
                                                )
                                            }({
                                                store: t,
                                                eventStateKey: d + b + a,
                                                eventTarget: e,
                                                eventId: d,
                                                eventConfig: n,
                                                actionListId: I,
                                                parameterGroup: l,
                                                smoothing: c,
                                                restingValue: s
                                            })
                                        }
                                        )
                                }
                                ),
                                (l.actionTypeId === u.ActionTypeConsts.GENERAL_START_ACTION || m(l.actionTypeId)) && ed({
                                    store: t,
                                    actionListId: I,
                                    eventId: d
                                })
                            }
                            );
                            let E = e => {
                                let {ixSession: a} = t.getState();
                                el(I, (i, o, r) => {
                                    let d = n[o]
                                      , s = a.eventState[r]
                                      , {action: f, mediaQueries: g=c.mediaQueryKeys} = d;
                                    if (!G(g, a.mediaQueryKey))
                                        return;
                                    let I = (n={}) => {
                                        let a = l({
                                            store: t,
                                            element: i,
                                            event: d,
                                            eventConfig: n,
                                            nativeEvent: e,
                                            eventStateKey: r
                                        }, s);
                                        !Y(a, s) && t.dispatch((0,
                                        p.eventStateChanged)(r, a))
                                    }
                                    ;
                                    f.actionTypeId === u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(d.config) ? d.config : [d.config]).forEach(I) : I()
                                }
                                )
                            }
                              , T = (0,
                            s.default)(E, 12)
                              , y = ({target: e=document, types: n, throttle: a}) => {
                                n.split(" ").filter(Boolean).forEach(n => {
                                    let i = a ? T : E;
                                    e.addEventListener(n, i),
                                    t.dispatch((0,
                                    p.eventListenerAdded)(e, [n, i]))
                                }
                                )
                            }
                            ;
                            Array.isArray(r) ? r.forEach(y) : "string" == typeof r && y(e)
                        }
                        )({
                            logic: r,
                            store: e,
                            events: t
                        })
                    }
                    );
                    let {ixSession: r} = e.getState();
                    r.eventListeners.length && function(e) {
                        let t = () => {
                            eo(e)
                        }
                        ;
                        ei.forEach(n => {
                            window.addEventListener(n, t),
                            e.dispatch((0,
                            p.eventListenerAdded)(window, [n, t]))
                        }
                        ),
                        t()
                    }(e)
                }(e),
                function() {
                    let {documentElement: e} = document;
                    -1 === e.className.indexOf(_) && (e.className += ` ${_}`)
                }(),
                e.getState().ixSession.hasDefinedMediaQueries)) {
                    var c;
                    A({
                        store: c = e,
                        select: ({ixSession: e}) => e.mediaQueryKey,
                        onChange: () => {
                            en(c),
                            w({
                                store: c,
                                elementApi: g
                            }),
                            et({
                                store: c,
                                allowEvents: !0
                            }),
                            K()
                        }
                    })
                }
                e.dispatch((0,
                p.sessionStarted)()),
                function(e, t) {
                    let n = a => {
                        let {ixSession: i, ixParameters: o} = e.getState();
                        i.active && (e.dispatch((0,
                        p.animationFrameChanged)(a, o)),
                        t ? !function(e, t) {
                            let n = A({
                                store: e,
                                select: ({ixSession: e}) => e.tick,
                                onChange: e => {
                                    t(e),
                                    n()
                                }
                            })
                        }(e, n) : requestAnimationFrame(n))
                    }
                    ;
                    n(window.performance.now())
                }(e, r)
            }
        }
        function en(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: n} = t;
                n.forEach(ea),
                k(),
                e.dispatch((0,
                p.sessionStopped)())
            }
        }
        function ea({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        let ei = ["resize", "orientationchange"];
        function eo(e) {
            let {ixSession: t, ixData: n} = e.getState()
              , a = window.innerWidth;
            if (a !== t.viewportWidth) {
                let {mediaQueries: t} = n;
                e.dispatch((0,
                p.viewportWidthChanged)({
                    width: a,
                    mediaQueries: t
                }))
            }
        }
        let er = (e, t) => (0,
        r.default)((0,
        c.default)(e, t), l.default)
          , el = (e, t) => {
            (0,
            d.default)(e, (e, n) => {
                e.forEach( (e, a) => {
                    t(e, n, n + b + a)
                }
                )
            }
            )
        }
          , ec = e => S({
            config: {
                target: e.target,
                targets: e.targets
            },
            elementApi: g
        });
        function ed({store: e, actionListId: t, eventId: n}) {
            let {ixData: a, ixSession: o} = e.getState()
              , {actionLists: r, events: l} = a
              , c = l[n]
              , d = r[t];
            if (d && d.useFirstGroupAsInitialState) {
                let r = (0,
                i.default)(d, "actionItemGroups[0].actionItems", []);
                if (!G((0,
                i.default)(c, "mediaQueries", a.mediaQueryKeys), o.mediaQueryKey))
                    return;
                r.forEach(a => {
                    let {config: i, actionTypeId: o} = a
                      , r = S({
                        config: i?.target?.useEventTarget === !0 && i?.target?.objectId == null ? {
                            target: c.target,
                            targets: c.targets
                        } : i,
                        event: c,
                        elementApi: g
                    })
                      , l = W(o);
                    r.forEach(i => {
                        let r = l ? j(o)?.(i, a) : null;
                        ep({
                            destination: R({
                                element: i,
                                actionItem: a,
                                elementApi: g
                            }, r),
                            immediate: !0,
                            store: e,
                            element: i,
                            eventId: n,
                            actionItem: a,
                            actionListId: t,
                            pluginInstance: r
                        })
                    }
                    )
                }
                )
            }
        }
        function es({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            d.default)(t, t => {
                if (!t.continuous) {
                    let {actionListId: n, verbose: a} = t;
                    eg(t, e),
                    a && e.dispatch((0,
                    p.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function eu({store: e, eventId: t, eventTarget: n, eventStateKey: a, actionListId: o}) {
            let {ixInstances: r, ixSession: l} = e.getState()
              , c = l.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null;
            (0,
            d.default)(r, n => {
                let r = (0,
                i.default)(n, "actionItem.config.target.boundaryMode")
                  , l = !a || n.eventStateKey === a;
                if (n.actionListId === o && n.eventId === t && l) {
                    if (c && r && !g.elementContains(c, n.element))
                        return;
                    eg(n, e),
                    n.verbose && e.dispatch((0,
                    p.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function ef({store: e, eventId: t, eventTarget: n, eventStateKey: a, actionListId: o, groupIndex: r=0, immediate: l, verbose: c}) {
            let {ixData: d, ixSession: s} = e.getState()
              , {events: u} = d
              , f = u[t] || {}
              , {mediaQueries: p=d.mediaQueryKeys} = f
              , {actionItemGroups: I, useFirstGroupAsInitialState: E} = (0,
            i.default)(d, `actionLists.${o}`, {});
            if (!I || !I.length)
                return !1;
            r >= I.length && (0,
            i.default)(f, "config.loop") && (r = 0),
            0 === r && E && r++;
            let T = (0 === r || 1 === r && E) && m(f.action?.actionTypeId) ? f.config.delay : void 0
              , y = (0,
            i.default)(I, [r, "actionItems"], []);
            if (!y.length || !G(p, s.mediaQueryKey))
                return !1;
            let b = s.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null
              , v = V(y)
              , h = !1;
            return y.forEach( (i, d) => {
                let {config: s, actionTypeId: u} = i
                  , p = W(u)
                  , {target: I} = s;
                if (!!I)
                    S({
                        config: s,
                        event: f,
                        eventTarget: n,
                        elementRoot: I.boundaryMode ? b : null,
                        elementApi: g
                    }).forEach( (s, f) => {
                        let I = p ? j(u)?.(s, i) : null
                          , E = p ? H(u)(s, i) : null;
                        h = !0;
                        let y = x({
                            element: s,
                            actionItem: i
                        })
                          , m = R({
                            element: s,
                            actionItem: i,
                            elementApi: g
                        }, I);
                        ep({
                            store: e,
                            element: s,
                            actionItem: i,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: o,
                            groupIndex: r,
                            isCarrier: v === d && 0 === f,
                            computedStyle: y,
                            destination: m,
                            immediate: l,
                            verbose: c,
                            pluginInstance: I,
                            pluginDuration: E,
                            instanceDelay: T
                        })
                    }
                    )
            }
            ),
            h
        }
        function ep(e) {
            let t;
            let {store: n, computedStyle: a, ...i} = e
              , {element: o, actionItem: r, immediate: l, pluginInstance: c, continuous: d, restingValue: s, eventId: f} = i
              , I = C()
              , {ixElements: E, ixSession: T, ixData: y} = n.getState()
              , m = L(E, o)
              , {refState: b} = E[m] || {}
              , O = g.getRefType(o)
              , v = T.reducedMotion && u.ReducedMotionTypes[r.actionTypeId];
            if (v && d)
                switch (y.events[f]?.eventTypeId) {
                case u.EventTypeConsts.MOUSE_MOVE:
                case u.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    t = s;
                    break;
                default:
                    t = .5
                }
            let h = M(o, b, a, r, g, c);
            if (n.dispatch((0,
            p.instanceAdded)({
                instanceId: I,
                elementId: m,
                origin: h,
                refType: O,
                skipMotion: v,
                skipToValue: t,
                ...i
            })),
            eI(document.body, "ix2-animation-started", I),
            l) {
                (function(e, t) {
                    let {ixParameters: n} = e.getState();
                    e.dispatch((0,
                    p.instanceStarted)(t, 0)),
                    e.dispatch((0,
                    p.animationFrameChanged)(performance.now(), n));
                    let {ixInstances: a} = e.getState();
                    eE(a[t], e)
                }
                )(n, I);
                return
            }
            A({
                store: n,
                select: ({ixInstances: e}) => e[I],
                onChange: eE
            }),
            !d && n.dispatch((0,
            p.instanceStarted)(I, T.tick))
        }
        function eg(e, t) {
            eI(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: n, actionItem: a} = e
              , {ixElements: i} = t.getState()
              , {ref: o, refType: r} = i[n] || {};
            r === v && D(o, a, g),
            t.dispatch((0,
            p.instanceRemoved)(e.id))
        }
        function eI(e, t, n) {
            let a = document.createEvent("CustomEvent");
            a.initCustomEvent(t, !0, !0, n),
            e.dispatchEvent(a)
        }
        function eE(e, t) {
            let {active: n, continuous: a, complete: i, elementId: o, actionItem: r, actionTypeId: l, renderType: c, current: d, groupIndex: s, eventId: u, eventTarget: f, eventStateKey: I, actionListId: E, isCarrier: T, styleProp: y, verbose: m, pluginInstance: b} = e
              , {ixData: O, ixSession: _} = t.getState()
              , {events: S} = O
              , {mediaQueries: L=O.mediaQueryKeys} = S && S[u] ? S[u] : {};
            if (!!G(L, _.mediaQueryKey)) {
                if (a || n || i) {
                    if (d || c === h && i) {
                        t.dispatch((0,
                        p.elementStateChanged)(o, l, d, r));
                        let {ixElements: e} = t.getState()
                          , {ref: n, refType: a, refState: i} = e[o] || {}
                          , s = i && i[l];
                        (a === v || W(l)) && N(n, i, s, u, r, y, g, c, b)
                    }
                    if (i) {
                        if (T) {
                            let e = ef({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: I,
                                actionListId: E,
                                groupIndex: s + 1,
                                verbose: m
                            });
                            m && !e && t.dispatch((0,
                            p.actionListPlaybackChanged)({
                                actionListId: E,
                                isPlaying: !1
                            }))
                        }
                        eg(e, t)
                    }
                }
            }
        }
    },
    8955: function(e, t, n) {
        "use strict";
        let a, i, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return eI
            }
        });
        let r = p(n(5801))
          , l = p(n(4738))
          , c = p(n(3789))
          , d = n(7087)
          , s = n(1970)
          , u = n(3946)
          , f = n(9468);
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let {MOUSE_CLICK: g, MOUSE_SECOND_CLICK: I, MOUSE_DOWN: E, MOUSE_UP: T, MOUSE_OVER: y, MOUSE_OUT: m, DROPDOWN_CLOSE: b, DROPDOWN_OPEN: O, SLIDER_ACTIVE: v, SLIDER_INACTIVE: h, TAB_ACTIVE: _, TAB_INACTIVE: S, NAVBAR_CLOSE: L, NAVBAR_OPEN: R, MOUSE_MOVE: A, PAGE_SCROLL_DOWN: C, SCROLL_INTO_VIEW: N, SCROLL_OUT_OF_VIEW: w, PAGE_SCROLL_UP: V, SCROLLING_IN_VIEW: x, PAGE_FINISH: M, ECOMMERCE_CART_CLOSE: F, ECOMMERCE_CART_OPEN: P, PAGE_START: U, PAGE_SCROLL: G} = d.EventTypeConsts
          , D = "COMPONENT_ACTIVE"
          , k = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: B} = d.IX2EngineConstants
          , {getNamespacedParameterId: X} = f.IX2VanillaUtils
          , Y = e => t => !!("object" == typeof t && e(t)) || t
          , W = Y( ({element: e, nativeEvent: t}) => e === t.target)
          , j = Y( ({element: e, nativeEvent: t}) => e.contains(t.target))
          , H = (0,
        r.default)([W, j])
          , z = (e, t) => {
            if (t) {
                let {ixData: n} = e.getState()
                  , {events: a} = n
                  , i = a[t];
                if (i && !en[i.eventTypeId])
                    return i
            }
            return null
        }
          , Q = ({store: e, event: t}) => {
            let {action: n} = t
              , {autoStopEventId: a} = n.config;
            return !!z(e, a)
        }
          , $ = ({store: e, event: t, element: n, eventStateKey: a}, i) => {
            let {action: o, id: r} = t
              , {actionListId: c, autoStopEventId: d} = o.config
              , u = z(e, d);
            return u && (0,
            s.stopActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: d + B + a.split(B)[1],
                actionListId: (0,
                l.default)(u, "action.config.actionListId")
            }),
            (0,
            s.stopActionGroup)({
                store: e,
                eventId: r,
                eventTarget: n,
                eventStateKey: a,
                actionListId: c
            }),
            (0,
            s.startActionGroup)({
                store: e,
                eventId: r,
                eventTarget: n,
                eventStateKey: a,
                actionListId: c
            }),
            i
        }
          , q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a
          , K = {
            handler: q(H, $)
        }
          , Z = {
            ...K,
            types: [D, k].join(" ")
        }
          , J = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , ee = "mouseover mouseout"
          , et = {
            types: J
        }
          , en = {
            PAGE_START: U,
            PAGE_FINISH: M
        }
          , ea = ( () => {
            let e = void 0 !== window.pageXOffset
              , t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                scrollTop: e ? window.pageYOffset : t.scrollTop,
                stiffScrollTop: (0,
                c.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                scrollWidth: t.scrollWidth,
                scrollHeight: t.scrollHeight,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , ei = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , eo = ({element: e, nativeEvent: t}) => {
            let {type: n, target: a, relatedTarget: i} = t
              , o = e.contains(a);
            if ("mouseover" === n && o)
                return !0;
            let r = e.contains(i);
            return "mouseout" === n && !!o && !!r || !1
        }
          , er = e => {
            let {element: t, event: {config: n}} = e
              , {clientWidth: a, clientHeight: i} = ea()
              , o = n.scrollOffsetValue
              , r = n.scrollOffsetUnit
              , l = "PX" === r ? o : i * (o || 0) / 100;
            return ei(t.getBoundingClientRect(), {
                left: 0,
                top: l,
                right: a,
                bottom: i - l
            })
        }
          , el = e => (t, n) => {
            let {type: a} = t.nativeEvent
              , i = -1 !== [D, k].indexOf(a) ? a === D : n.isActive
              , o = {
                ...n,
                isActive: i
            };
            return n && o.isActive === n.isActive ? o : e(t, o) || o
        }
          , ec = e => (t, n) => {
            let a = {
                elementHovered: eo(t)
            };
            return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
        }
          , ed = e => (t, n={}) => {
            let a, i;
            let {stiffScrollTop: o, scrollHeight: r, innerHeight: l} = ea()
              , {event: {config: c, eventTypeId: d}} = t
              , {scrollOffsetValue: s, scrollOffsetUnit: u} = c
              , f = r - l
              , p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p)
                return n;
            let g = ("PX" === u ? s : l * (s || 0) / 100) / f
              , I = 0;
            n && (a = p > n.percentTop,
            I = (i = n.scrollingDown !== a) ? p : n.anchorTop);
            let E = d === C ? p >= I + g : p <= I - g
              , T = {
                ...n,
                percentTop: p,
                inBounds: E,
                anchorTop: I,
                scrollingDown: a
            };
            return n && E && (i || T.inBounds !== n.inBounds) && e(t, T) || T
        }
          , es = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , eu = e => (t, n={
            clickCount: 0
        }) => {
            let a = {
                clickCount: n.clickCount % 2 + 1
            };
            return a.clickCount !== n.clickCount && e(t, a) || a
        }
          , ef = (e=!0) => ({
            ...Z,
            handler: q(e ? H : W, el( (e, t) => t.isActive ? K.handler(e, t) : t))
        })
          , ep = (e=!0) => ({
            ...Z,
            handler: q(e ? H : W, el( (e, t) => t.isActive ? t : K.handler(e, t)))
        });
        let eg = {
            ...et,
            handler: (a = (e, t) => {
                let {elementVisible: n} = t
                  , {event: a, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: r} = o;
                return !r[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === N === n ? ($(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            ,
            (e, t) => {
                let n = {
                    ...t,
                    elementVisible: er(e)
                };
                return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
            }
            )
        };
        let eI = {
            [v]: ef(),
            [h]: ep(),
            [O]: ef(),
            [b]: ep(),
            [R]: ef(!1),
            [L]: ep(!1),
            [_]: ef(),
            [S]: ep(),
            [P]: {
                types: "ecommerce-cart-open",
                handler: q(H, $)
            },
            [F]: {
                types: "ecommerce-cart-close",
                handler: q(H, $)
            },
            [g]: {
                types: "click",
                handler: q(H, eu( (e, {clickCount: t}) => {
                    Q(e) ? 1 === t && $(e) : $(e)
                }
                ))
            },
            [I]: {
                types: "click",
                handler: q(H, eu( (e, {clickCount: t}) => {
                    2 === t && $(e)
                }
                ))
            },
            [E]: {
                ...K,
                types: "mousedown"
            },
            [T]: {
                ...K,
                types: "mouseup"
            },
            [y]: {
                types: ee,
                handler: q(H, ec( (e, t) => {
                    t.elementHovered && $(e)
                }
                ))
            },
            [m]: {
                types: ee,
                handler: q(H, ec( (e, t) => {
                    !t.elementHovered && $(e)
                }
                ))
            },
            [A]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: n, nativeEvent: a, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: r, selectedAxis: l, continuousParameterGroupId: c, reverse: s, restingState: f=0} = n
                      , {clientX: p=o.clientX, clientY: g=o.clientY, pageX: I=o.pageX, pageY: E=o.pageY} = a
                      , T = "X_AXIS" === l
                      , y = "mouseout" === a.type
                      , m = f / 100
                      , b = c
                      , O = !1;
                    switch (r) {
                    case d.EventBasedOn.VIEWPORT:
                        m = T ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                        break;
                    case d.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: e, scrollTop: t, scrollWidth: n, scrollHeight: a} = ea();
                            m = T ? Math.min(e + I, n) / n : Math.min(t + E, a) / a;
                            break
                        }
                    case d.EventBasedOn.ELEMENT:
                    default:
                        {
                            b = X(i, c);
                            let e = 0 === a.type.indexOf("mouse");
                            if (e && !0 !== H({
                                element: t,
                                nativeEvent: a
                            }))
                                break;
                            let n = t.getBoundingClientRect()
                              , {left: o, top: r, width: l, height: d} = n;
                            if (!e && !es({
                                left: p,
                                top: g
                            }, n))
                                break;
                            O = !0,
                            m = T ? (p - o) / l : (g - r) / d
                        }
                    }
                    return y && (m > .95 || m < .05) && (m = Math.round(m)),
                    (r !== d.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (m = s ? 1 - m : m,
                    e.dispatch((0,
                    u.parameterChanged)(b, m))),
                    {
                        elementHovered: O,
                        clientX: p,
                        clientY: g,
                        pageX: I,
                        pageY: E
                    }
                }
            },
            [G]: {
                types: J,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: n, reverse: a} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: r} = ea()
                      , l = i / (o - r);
                    l = a ? 1 - l : l,
                    e.dispatch((0,
                    u.parameterChanged)(n, l))
                }
            },
            [x]: {
                types: J,
                handler: ({element: e, store: t, eventConfig: n, eventStateKey: a}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: r, scrollWidth: l, scrollHeight: c, clientHeight: s} = ea()
                      , {basedOn: f, selectedAxis: p, continuousParameterGroupId: g, startsEntering: I, startsExiting: E, addEndOffset: T, addStartOffset: y, addOffsetValue: m=0, endOffsetValue: b=0} = n;
                    if (f === d.EventBasedOn.VIEWPORT) {
                        let e = "X_AXIS" === p ? o / l : r / c;
                        return e !== i.scrollPercent && t.dispatch((0,
                        u.parameterChanged)(g, e)),
                        {
                            scrollPercent: e
                        }
                    }
                    {
                        let n = X(a, g)
                          , o = e.getBoundingClientRect()
                          , r = (y ? m : 0) / 100
                          , l = (T ? b : 0) / 100;
                        r = I ? r : 1 - r,
                        l = E ? l : 1 - l;
                        let d = o.top + Math.min(o.height * r, s)
                          , f = o.top + o.height * l
                          , p = Math.min(s + (f - d), c)
                          , O = Math.min(Math.max(0, s - d), p) / p;
                        return O !== i.scrollPercent && t.dispatch((0,
                        u.parameterChanged)(n, O)),
                        {
                            scrollPercent: O
                        }
                    }
                }
            },
            [N]: eg,
            [w]: eg,
            [C]: {
                ...et,
                handler: ed( (e, t) => {
                    t.scrollingDown && $(e)
                }
                )
            },
            [V]: {
                ...et,
                handler: ed( (e, t) => {
                    !t.scrollingDown && $(e)
                }
                )
            },
            [M]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: q(W, (i = $,
                (e, t) => {
                    let n = {
                        finished: "complete" === document.readyState
                    };
                    return n.finished && !(t && t.finshed) && i(e),
                    n
                }
                ))
            },
            [U]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: q(W, (o = $,
                (e, t) => (t || o(e),
                {
                    started: !0
                })))
            }
        }
    },
    4609: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let {IX2_RAW_DATA_IMPORTED: a} = n(7087).IX2EngineActionTypes
          , i = (e=Object.freeze({}), t) => {
            if (t.type === a)
                return t.payload.ixData || Object.freeze({});
            return e
        }
    },
    7718: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function() {
                return O
            }
        });
        let a = n(7087)
          , i = n(9468)
          , o = n(1185)
          , {IX2_RAW_DATA_IMPORTED: r, IX2_SESSION_STOPPED: l, IX2_INSTANCE_ADDED: c, IX2_INSTANCE_STARTED: d, IX2_INSTANCE_REMOVED: s, IX2_ANIMATION_FRAME_CHANGED: u} = a.IX2EngineActionTypes
          , {optimizeFloat: f, applyEasing: p, createBezierEasing: g} = i.IX2EasingUtils
          , {RENDER_GENERAL: I} = a.IX2EngineConstants
          , {getItemConfigByKey: E, getRenderType: T, getStyleProp: y} = i.IX2VanillaUtils
          , m = (e, t) => {
            let n, a, i, r;
            let {position: l, parameterId: c, actionGroups: d, destinationKeys: s, smoothing: u, restingValue: g, actionTypeId: I, customEasingFn: T, skipMotion: y, skipToValue: m} = e
              , {parameters: b} = t.payload
              , O = Math.max(1 - u, .01)
              , v = b[c];
            null == v && (O = 1,
            v = g);
            let h = f((Math.max(v, 0) || 0) - l)
              , _ = y ? m : f(l + h * O)
              , S = 100 * _;
            if (_ === l && e.current)
                return e;
            for (let e = 0, {length: t} = d; e < t; e++) {
                let {keyframe: t, actionItems: o} = d[e];
                if (0 === e && (n = o[0]),
                S >= t) {
                    n = o[0];
                    let l = d[e + 1]
                      , c = l && S !== t;
                    a = c ? l.actionItems[0] : null,
                    c && (i = t / 100,
                    r = (l.keyframe - t) / 100)
                }
            }
            let L = {};
            if (n && !a)
                for (let e = 0, {length: t} = s; e < t; e++) {
                    let t = s[e];
                    L[t] = E(I, t, n.config)
                }
            else if (n && a && void 0 !== i && void 0 !== r) {
                let e = (_ - i) / r
                  , t = p(n.config.easing, e, T);
                for (let e = 0, {length: i} = s; e < i; e++) {
                    let i = s[e]
                      , o = E(I, i, n.config)
                      , r = (E(I, i, a.config) - o) * t + o;
                    L[i] = r
                }
            }
            return (0,
            o.merge)(e, {
                position: _,
                current: L
            })
        }
          , b = (e, t) => {
            let {active: n, origin: a, start: i, immediate: r, renderType: l, verbose: c, actionItem: d, destination: s, destinationKeys: u, pluginDuration: g, instanceDelay: E, customEasingFn: T, skipMotion: y} = e
              , m = d.config.easing
              , {duration: b, delay: O} = d.config;
            null != g && (b = g),
            O = null != E ? E : O,
            l === I ? b = 0 : (r || y) && (b = O = 0);
            let {now: v} = t.payload;
            if (n && a) {
                let t = v - (i + O);
                if (c) {
                    let t = b + O
                      , n = f(Math.min(Math.max(0, (v - i) / t), 1));
                    e = (0,
                    o.set)(e, "verboseTimeElapsed", t * n)
                }
                if (t < 0)
                    return e;
                let n = f(Math.min(Math.max(0, t / b), 1))
                  , r = p(m, n, T)
                  , l = {}
                  , d = null;
                return u.length && (d = u.reduce( (e, t) => {
                    let n = s[t]
                      , i = parseFloat(a[t]) || 0
                      , o = parseFloat(n) - i;
                    return e[t] = o * r + i,
                    e
                }
                , {})),
                l.current = d,
                l.position = n,
                1 === n && (l.active = !1,
                l.complete = !0),
                (0,
                o.merge)(e, l)
            }
            return e
        }
          , O = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case r:
                return t.payload.ixInstances || Object.freeze({});
            case l:
                return Object.freeze({});
            case c:
                {
                    let {instanceId: n, elementId: a, actionItem: i, eventId: r, eventTarget: l, eventStateKey: c, actionListId: d, groupIndex: s, isCarrier: u, origin: f, destination: p, immediate: I, verbose: E, continuous: m, parameterId: b, actionGroups: O, smoothing: v, restingValue: h, pluginInstance: _, pluginDuration: S, instanceDelay: L, skipMotion: R, skipToValue: A} = t.payload
                      , {actionTypeId: C} = i
                      , N = T(C)
                      , w = y(N, C)
                      , V = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e])
                      , {easing: x} = i.config;
                    return (0,
                    o.set)(e, n, {
                        id: n,
                        elementId: a,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: f,
                        destination: p,
                        destinationKeys: V,
                        immediate: I,
                        verbose: E,
                        current: null,
                        actionItem: i,
                        actionTypeId: C,
                        eventId: r,
                        eventTarget: l,
                        eventStateKey: c,
                        actionListId: d,
                        groupIndex: s,
                        renderType: N,
                        isCarrier: u,
                        styleProp: w,
                        continuous: m,
                        parameterId: b,
                        actionGroups: O,
                        smoothing: v,
                        restingValue: h,
                        pluginInstance: _,
                        pluginDuration: S,
                        instanceDelay: L,
                        skipMotion: R,
                        skipToValue: A,
                        customEasingFn: Array.isArray(x) && 4 === x.length ? g(x) : void 0
                    })
                }
            case d:
                {
                    let {instanceId: n, time: a} = t.payload;
                    return (0,
                    o.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: a
                    })
                }
            case s:
                {
                    let {instanceId: n} = t.payload;
                    if (!e[n])
                        return e;
                    let a = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let t = 0; t < o; t++) {
                        let o = i[t];
                        o !== n && (a[o] = e[o])
                    }
                    return a
                }
            case u:
                {
                    let n = e
                      , a = Object.keys(e)
                      , {length: i} = a;
                    for (let r = 0; r < i; r++) {
                        let i = a[r]
                          , l = e[i]
                          , c = l.continuous ? m : b;
                        n = (0,
                        o.set)(n, i, c(l, t))
                    }
                    return n
                }
            default:
                return e
            }
        }
    },
    1540: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let {IX2_RAW_DATA_IMPORTED: a, IX2_SESSION_STOPPED: i, IX2_PARAMETER_CHANGED: o} = n(7087).IX2EngineActionTypes
          , r = (e={}, t) => {
            switch (t.type) {
            case a:
                return t.payload.ixParameters || {};
            case i:
                return {};
            case o:
                {
                    let {key: n, value: a} = t.payload;
                    return e[n] = a,
                    e
                }
            default:
                return e
            }
        }
    },
    7243: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let a = n(9516)
          , i = n(4609)
          , o = n(628)
          , r = n(5862)
          , l = n(9468)
          , c = n(7718)
          , d = n(1540)
          , {ixElements: s} = l.IX2ElementsReducer
          , u = (0,
        a.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: r.ixSession,
            ixElements: s,
            ixInstances: c.ixInstances,
            ixParameters: d.ixParameters
        })
    },
    628: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let a = n(7087)
          , i = n(1185)
          , {IX2_PREVIEW_REQUESTED: o, IX2_PLAYBACK_REQUESTED: r, IX2_STOP_REQUESTED: l, IX2_CLEAR_REQUESTED: c} = a.IX2EngineActionTypes
          , d = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , s = Object.create(null, {
            [o]: {
                value: "preview"
            },
            [r]: {
                value: "playback"
            },
            [l]: {
                value: "stop"
            },
            [c]: {
                value: "clear"
            }
        })
          , u = (e=d, t) => {
            if (t.type in s) {
                let n = [s[t.type]];
                return (0,
                i.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    },
    5862: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function() {
                return E
            }
        });
        let a = n(7087)
          , i = n(1185)
          , {IX2_SESSION_INITIALIZED: o, IX2_SESSION_STARTED: r, IX2_TEST_FRAME_RENDERED: l, IX2_SESSION_STOPPED: c, IX2_EVENT_LISTENER_ADDED: d, IX2_EVENT_STATE_CHANGED: s, IX2_ANIMATION_FRAME_CHANGED: u, IX2_ACTION_LIST_PLAYBACK_CHANGED: f, IX2_VIEWPORT_WIDTH_CHANGED: p, IX2_MEDIA_QUERIES_DEFINED: g} = a.IX2EngineActionTypes
          , I = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , E = (e=I, t) => {
            switch (t.type) {
            case o:
                {
                    let {hasBoundaryNodes: n, reducedMotion: a} = t.payload;
                    return (0,
                    i.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: a
                    })
                }
            case r:
                return (0,
                i.set)(e, "active", !0);
            case l:
                {
                    let {payload: {step: n=20}} = t;
                    return (0,
                    i.set)(e, "tick", e.tick + n)
                }
            case c:
                return I;
            case u:
                {
                    let {payload: {now: n}} = t;
                    return (0,
                    i.set)(e, "tick", n)
                }
            case d:
                {
                    let n = (0,
                    i.addLast)(e.eventListeners, t.payload);
                    return (0,
                    i.set)(e, "eventListeners", n)
                }
            case s:
                {
                    let {stateKey: n, newState: a} = t.payload;
                    return (0,
                    i.setIn)(e, ["eventState", n], a)
                }
            case f:
                {
                    let {actionListId: n, isPlaying: a} = t.payload;
                    return (0,
                    i.setIn)(e, ["playbackState", n], a)
                }
            case p:
                {
                    let {width: n, mediaQueries: a} = t.payload
                      , o = a.length
                      , r = null;
                    for (let e = 0; e < o; e++) {
                        let {key: t, min: i, max: o} = a[e];
                        if (n >= i && n <= o) {
                            r = t;
                            break
                        }
                    }
                    return (0,
                    i.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: r
                    })
                }
            case g:
                return (0,
                i.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    },
    7377: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            clearPlugin: function() {
                return c
            },
            createPluginInstance: function() {
                return r
            },
            getPluginConfig: function() {
                return n
            },
            getPluginDestination: function() {
                return o
            },
            getPluginDuration: function() {
                return a
            },
            getPluginOrigin: function() {
                return i
            },
            renderPlugin: function() {
                return l
            }
        });
        let n = e => e.value
          , a = (e, t) => {
            if ("auto" !== t.config.duration)
                return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
        }
          , i = e => e || {
            value: 0
        }
          , o = e => ({
            value: e.value
        })
          , r = e => {
            let t = window.Webflow.require("lottie");
            if (!t)
                return null;
            let n = t.createInstance(e);
            return n.stop(),
            n.setSubframe(!0),
            n
        }
          , l = (e, t, n) => {
            if (!e)
                return;
            let a = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * a)
        }
          , c = e => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop()
        }
    },
    2570: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            clearPlugin: function() {
                return f
            },
            createPluginInstance: function() {
                return s
            },
            getPluginConfig: function() {
                return r
            },
            getPluginDestination: function() {
                return d
            },
            getPluginDuration: function() {
                return l
            },
            getPluginOrigin: function() {
                return c
            },
            renderPlugin: function() {
                return u
            }
        });
        let n = "--wf-rive-fit"
          , a = "--wf-rive-alignment"
          , i = e => document.querySelector(`[data-w-id="${e}"]`)
          , o = () => window.Webflow.require("rive")
          , r = (e, t) => e.value.inputs[t]
          , l = () => null
          , c = (e, t) => {
            if (e)
                return e;
            let n = {}
              , {inputs: a={}} = t.config.value;
            for (let e in a)
                null == a[e] && (n[e] = 0);
            return n
        }
          , d = e => e.value.inputs ?? {}
          , s = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0)
                return e;
            let n = t?.config?.target?.pluginElement;
            return n ? i(n) : null
        }
          , u = (e, {PLUGIN_RIVE: t}, i) => {
            let r = o();
            if (!r)
                return;
            let l = r.getInstance(e)
              , c = r.rive.StateMachineInputType
              , {name: d, inputs: s={}} = i.config.value || {};
            function u(e) {
                if (e.loaded)
                    i();
                else {
                    let t = () => {
                        i(),
                        e?.off("load", t)
                    }
                    ;
                    e?.on("load", t)
                }
                function i() {
                    let i = e.stateMachineInputs(d);
                    if (null != i) {
                        if (!e.isPlaying && e.play(d, !1),
                        n in s || a in s) {
                            let t = e.layout
                              , i = s[n] ?? t.fit
                              , o = s[a] ?? t.alignment;
                            (i !== t.fit || o !== t.alignment) && (e.layout = t.copyWith({
                                fit: i,
                                alignment: o
                            }))
                        }
                        for (let e in s) {
                            if (e === n || e === a)
                                continue;
                            let o = i.find(t => t.name === e);
                            if (null != o)
                                switch (o.type) {
                                case c.Boolean:
                                    if (null != s[e]) {
                                        let t = !!s[e];
                                        o.value = t
                                    }
                                    break;
                                case c.Number:
                                    {
                                        let n = t[e];
                                        null != n && (o.value = n);
                                        break
                                    }
                                case c.Trigger:
                                    s[e] && o.fire()
                                }
                        }
                    }
                }
            }
            l?.rive ? u(l.rive) : r.setLoadHandler(e, u)
        }
          , f = (e, t) => null
    },
    2866: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            clearPlugin: function() {
                return f
            },
            createPluginInstance: function() {
                return s
            },
            getPluginConfig: function() {
                return o
            },
            getPluginDestination: function() {
                return d
            },
            getPluginDuration: function() {
                return r
            },
            getPluginOrigin: function() {
                return c
            },
            renderPlugin: function() {
                return u
            }
        });
        let n = e => document.querySelector(`[data-w-id="${e}"]`)
          , a = () => window.Webflow.require("spline")
          , i = (e, t) => e.filter(e => !t.includes(e))
          , o = (e, t) => e.value[t]
          , r = () => null
          , l = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , c = (e, t) => {
            let n = Object.keys(t.config.value);
            if (e) {
                let t = i(n, Object.keys(e));
                return t.length ? t.reduce( (e, t) => (e[t] = l[t],
                e), e) : e
            }
            return n.reduce( (e, t) => (e[t] = l[t],
            e), {})
        }
          , d = e => e.value
          , s = (e, t) => {
            let a = t?.config?.target?.pluginElement;
            return a ? n(a) : null
        }
          , u = (e, t, n) => {
            let i = a();
            if (!i)
                return;
            let o = i.getInstance(e)
              , r = n.config.target.objectId
              , l = e => {
                if (!e)
                    throw Error("Invalid spline app passed to renderSpline");
                let n = r && e.findObjectById(r);
                if (!n)
                    return;
                let {PLUGIN_SPLINE: a} = t;
                null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ)
            }
            ;
            o ? l(o.spline) : i.setLoadHandler(e, l)
        }
          , f = () => null
    },
    1407: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            clearPlugin: function() {
                return u
            },
            createPluginInstance: function() {
                return c
            },
            getPluginConfig: function() {
                return i
            },
            getPluginDestination: function() {
                return l
            },
            getPluginDuration: function() {
                return o
            },
            getPluginOrigin: function() {
                return r
            },
            renderPlugin: function() {
                return s
            }
        });
        let a = n(380)
          , i = (e, t) => e.value[t]
          , o = () => null
          , r = (e, t) => {
            if (e)
                return e;
            let n = t.config.value
              , i = t.config.target.objectId
              , o = getComputedStyle(document.documentElement).getPropertyValue(i);
            return null != n.size ? {
                size: parseInt(o, 10)
            } : "%" === n.unit || "-" === n.unit ? {
                size: parseFloat(o)
            } : null != n.red && null != n.green && null != n.blue ? (0,
            a.normalizeColor)(o) : void 0
        }
          , l = e => e.value
          , c = () => null
          , d = {
            color: {
                match: ({red: e, green: t, blue: n, alpha: a}) => [e, t, n, a].every(e => null != e),
                getValue: ({red: e, green: t, blue: n, alpha: a}) => `rgba(${e}, ${t}, ${n}, ${a})`
            },
            size: {
                match: ({size: e}) => null != e,
                getValue: ({size: e}, t) => {
                    if ("-" === t)
                        return e;
                    return `${e}${t}`
                }
            }
        }
          , s = (e, t, n) => {
            let {target: {objectId: a}, value: {unit: i}} = n.config
              , o = t.PLUGIN_VARIABLE
              , r = Object.values(d).find(e => e.match(o, i));
            r && document.documentElement.style.setProperty(a, r.getValue(o, i))
        }
          , u = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    },
    3690: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let a = n(7087)
          , i = d(n(7377))
          , o = d(n(2866))
          , r = d(n(2570))
          , l = d(n(1407));
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (c = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function d(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = c(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }
        let s = new Map([[a.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...i
        }], [a.ActionTypeConsts.PLUGIN_SPLINE, {
            ...o
        }], [a.ActionTypeConsts.PLUGIN_RIVE, {
            ...r
        }], [a.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...l
        }]])
    },
    8023: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                return y
            },
            IX2_ANIMATION_FRAME_CHANGED: function() {
                return f
            },
            IX2_CLEAR_REQUESTED: function() {
                return d
            },
            IX2_ELEMENT_STATE_CHANGED: function() {
                return T
            },
            IX2_EVENT_LISTENER_ADDED: function() {
                return s
            },
            IX2_EVENT_STATE_CHANGED: function() {
                return u
            },
            IX2_INSTANCE_ADDED: function() {
                return g
            },
            IX2_INSTANCE_REMOVED: function() {
                return E
            },
            IX2_INSTANCE_STARTED: function() {
                return I
            },
            IX2_MEDIA_QUERIES_DEFINED: function() {
                return b
            },
            IX2_PARAMETER_CHANGED: function() {
                return p
            },
            IX2_PLAYBACK_REQUESTED: function() {
                return l
            },
            IX2_PREVIEW_REQUESTED: function() {
                return r
            },
            IX2_RAW_DATA_IMPORTED: function() {
                return n
            },
            IX2_SESSION_INITIALIZED: function() {
                return a
            },
            IX2_SESSION_STARTED: function() {
                return i
            },
            IX2_SESSION_STOPPED: function() {
                return o
            },
            IX2_STOP_REQUESTED: function() {
                return c
            },
            IX2_TEST_FRAME_RENDERED: function() {
                return O
            },
            IX2_VIEWPORT_WIDTH_CHANGED: function() {
                return m
            }
        });
        let n = "IX2_RAW_DATA_IMPORTED"
          , a = "IX2_SESSION_INITIALIZED"
          , i = "IX2_SESSION_STARTED"
          , o = "IX2_SESSION_STOPPED"
          , r = "IX2_PREVIEW_REQUESTED"
          , l = "IX2_PLAYBACK_REQUESTED"
          , c = "IX2_STOP_REQUESTED"
          , d = "IX2_CLEAR_REQUESTED"
          , s = "IX2_EVENT_LISTENER_ADDED"
          , u = "IX2_EVENT_STATE_CHANGED"
          , f = "IX2_ANIMATION_FRAME_CHANGED"
          , p = "IX2_PARAMETER_CHANGED"
          , g = "IX2_INSTANCE_ADDED"
          , I = "IX2_INSTANCE_STARTED"
          , E = "IX2_INSTANCE_REMOVED"
          , T = "IX2_ELEMENT_STATE_CHANGED"
          , y = "IX2_ACTION_LIST_PLAYBACK_CHANGED"
          , m = "IX2_VIEWPORT_WIDTH_CHANGED"
          , b = "IX2_MEDIA_QUERIES_DEFINED"
          , O = "IX2_TEST_FRAME_RENDERED"
    },
    2686: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ABSTRACT_NODE: function() {
                return J
            },
            AUTO: function() {
                return X
            },
            BACKGROUND: function() {
                return P
            },
            BACKGROUND_COLOR: function() {
                return F
            },
            BAR_DELIMITER: function() {
                return j
            },
            BORDER_COLOR: function() {
                return U
            },
            BOUNDARY_SELECTOR: function() {
                return r
            },
            CHILDREN: function() {
                return H
            },
            COLON_DELIMITER: function() {
                return W
            },
            COLOR: function() {
                return G
            },
            COMMA_DELIMITER: function() {
                return Y
            },
            CONFIG_UNIT: function() {
                return g
            },
            CONFIG_VALUE: function() {
                return s
            },
            CONFIG_X_UNIT: function() {
                return u
            },
            CONFIG_X_VALUE: function() {
                return l
            },
            CONFIG_Y_UNIT: function() {
                return f
            },
            CONFIG_Y_VALUE: function() {
                return c
            },
            CONFIG_Z_UNIT: function() {
                return p
            },
            CONFIG_Z_VALUE: function() {
                return d
            },
            DISPLAY: function() {
                return D
            },
            FILTER: function() {
                return w
            },
            FLEX: function() {
                return k
            },
            FONT_VARIATION_SETTINGS: function() {
                return V
            },
            HEIGHT: function() {
                return M
            },
            HTML_ELEMENT: function() {
                return K
            },
            IMMEDIATE_CHILDREN: function() {
                return z
            },
            IX2_ID_DELIMITER: function() {
                return n
            },
            OPACITY: function() {
                return N
            },
            PARENT: function() {
                return $
            },
            PLAIN_OBJECT: function() {
                return Z
            },
            PRESERVE_3D: function() {
                return q
            },
            RENDER_GENERAL: function() {
                return et
            },
            RENDER_PLUGIN: function() {
                return ea
            },
            RENDER_STYLE: function() {
                return en
            },
            RENDER_TRANSFORM: function() {
                return ee
            },
            ROTATE_X: function() {
                return _
            },
            ROTATE_Y: function() {
                return S
            },
            ROTATE_Z: function() {
                return L
            },
            SCALE_3D: function() {
                return h
            },
            SCALE_X: function() {
                return b
            },
            SCALE_Y: function() {
                return O
            },
            SCALE_Z: function() {
                return v
            },
            SIBLINGS: function() {
                return Q
            },
            SKEW: function() {
                return R
            },
            SKEW_X: function() {
                return A
            },
            SKEW_Y: function() {
                return C
            },
            TRANSFORM: function() {
                return I
            },
            TRANSLATE_3D: function() {
                return m
            },
            TRANSLATE_X: function() {
                return E
            },
            TRANSLATE_Y: function() {
                return T
            },
            TRANSLATE_Z: function() {
                return y
            },
            WF_PAGE: function() {
                return a
            },
            WIDTH: function() {
                return x
            },
            WILL_CHANGE: function() {
                return B
            },
            W_MOD_IX: function() {
                return o
            },
            W_MOD_JS: function() {
                return i
            }
        });
        let n = "|"
          , a = "data-wf-page"
          , i = "w-mod-js"
          , o = "w-mod-ix"
          , r = ".w-dyn-item"
          , l = "xValue"
          , c = "yValue"
          , d = "zValue"
          , s = "value"
          , u = "xUnit"
          , f = "yUnit"
          , p = "zUnit"
          , g = "unit"
          , I = "transform"
          , E = "translateX"
          , T = "translateY"
          , y = "translateZ"
          , m = "translate3d"
          , b = "scaleX"
          , O = "scaleY"
          , v = "scaleZ"
          , h = "scale3d"
          , _ = "rotateX"
          , S = "rotateY"
          , L = "rotateZ"
          , R = "skew"
          , A = "skewX"
          , C = "skewY"
          , N = "opacity"
          , w = "filter"
          , V = "font-variation-settings"
          , x = "width"
          , M = "height"
          , F = "backgroundColor"
          , P = "background"
          , U = "borderColor"
          , G = "color"
          , D = "display"
          , k = "flex"
          , B = "willChange"
          , X = "AUTO"
          , Y = ","
          , W = ":"
          , j = "|"
          , H = "CHILDREN"
          , z = "IMMEDIATE_CHILDREN"
          , Q = "SIBLINGS"
          , $ = "PARENT"
          , q = "preserve-3d"
          , K = "HTML_ELEMENT"
          , Z = "PLAIN_OBJECT"
          , J = "ABSTRACT_NODE"
          , ee = "RENDER_TRANSFORM"
          , et = "RENDER_GENERAL"
          , en = "RENDER_STYLE"
          , ea = "RENDER_PLUGIN"
    },
    262: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ActionAppliesTo: function() {
                return a
            },
            ActionTypeConsts: function() {
                return n
            }
        });
        let n = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }
          , a = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    },
    7087: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ActionTypeConsts: function() {
                return i.ActionTypeConsts
            },
            IX2EngineActionTypes: function() {
                return o
            },
            IX2EngineConstants: function() {
                return r
            },
            QuickEffectIds: function() {
                return a.QuickEffectIds
            }
        });
        let a = l(n(1833), t)
          , i = l(n(262), t);
        l(n(8704), t),
        l(n(3213), t);
        let o = d(n(8023))
          , r = d(n(2686));
        function l(e, t) {
            return Object.keys(e).forEach(function(n) {
                "default" !== n && !Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            }),
            e
        }
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (c = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function d(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = c(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }
    },
    3213: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let {TRANSFORM_MOVE: a, TRANSFORM_SCALE: i, TRANSFORM_ROTATE: o, TRANSFORM_SKEW: r, STYLE_SIZE: l, STYLE_FILTER: c, STYLE_FONT_VARIATION: d} = n(262).ActionTypeConsts
          , s = {
            [a]: !0,
            [i]: !0,
            [o]: !0,
            [r]: !0,
            [l]: !0,
            [c]: !0,
            [d]: !0
        }
    },
    1833: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            EventAppliesTo: function() {
                return a
            },
            EventBasedOn: function() {
                return i
            },
            EventContinuousMouseAxes: function() {
                return o
            },
            EventLimitAffectedElements: function() {
                return r
            },
            EventTypeConsts: function() {
                return n
            },
            QuickEffectDirectionConsts: function() {
                return c
            },
            QuickEffectIds: function() {
                return l
            }
        });
        let n = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }
          , a = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }
          , i = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }
          , o = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }
          , r = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }
          , l = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }
          , c = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    },
    8704: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    },
    380: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function a(e) {
            let t, a, i;
            let o = 1
              , r = e.replace(/\s/g, "").toLowerCase()
              , l = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
            if (l.startsWith("#")) {
                let e = l.substring(1);
                3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16),
                a = parseInt(e[1] + e[1], 16),
                i = parseInt(e[2] + e[2], 16),
                4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16),
                a = parseInt(e.substring(2, 4), 16),
                i = parseInt(e.substring(4, 6), 16),
                8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
            } else if (l.startsWith("rgba")) {
                let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(e[0], 10),
                a = parseInt(e[1], 10),
                i = parseInt(e[2], 10),
                o = parseFloat(e[3])
            } else if (l.startsWith("rgb")) {
                let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(e[0], 10),
                a = parseInt(e[1], 10),
                i = parseInt(e[2], 10)
            } else if (l.startsWith("hsla")) {
                let e, n, r;
                let c = l.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , d = parseFloat(c[0])
                  , s = parseFloat(c[1].replace("%", "")) / 100
                  , u = parseFloat(c[2].replace("%", "")) / 100;
                o = parseFloat(c[3]);
                let f = (1 - Math.abs(2 * u - 1)) * s
                  , p = f * (1 - Math.abs(d / 60 % 2 - 1))
                  , g = u - f / 2;
                d >= 0 && d < 60 ? (e = f,
                n = p,
                r = 0) : d >= 60 && d < 120 ? (e = p,
                n = f,
                r = 0) : d >= 120 && d < 180 ? (e = 0,
                n = f,
                r = p) : d >= 180 && d < 240 ? (e = 0,
                n = p,
                r = f) : d >= 240 && d < 300 ? (e = p,
                n = 0,
                r = f) : (e = f,
                n = 0,
                r = p),
                t = Math.round((e + g) * 255),
                a = Math.round((n + g) * 255),
                i = Math.round((r + g) * 255)
            } else if (l.startsWith("hsl")) {
                let e, n, o;
                let r = l.match(/hsl\(([^)]+)\)/)[1].split(",")
                  , c = parseFloat(r[0])
                  , d = parseFloat(r[1].replace("%", "")) / 100
                  , s = parseFloat(r[2].replace("%", "")) / 100
                  , u = (1 - Math.abs(2 * s - 1)) * d
                  , f = u * (1 - Math.abs(c / 60 % 2 - 1))
                  , p = s - u / 2;
                c >= 0 && c < 60 ? (e = u,
                n = f,
                o = 0) : c >= 60 && c < 120 ? (e = f,
                n = u,
                o = 0) : c >= 120 && c < 180 ? (e = 0,
                n = u,
                o = f) : c >= 180 && c < 240 ? (e = 0,
                n = f,
                o = u) : c >= 240 && c < 300 ? (e = f,
                n = 0,
                o = u) : (e = u,
                n = 0,
                o = f),
                t = Math.round((e + p) * 255),
                a = Math.round((n + p) * 255),
                i = Math.round((o + p) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
                throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: a,
                blue: i,
                alpha: o
            }
        }
    },
    9468: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            IX2BrowserSupport: function() {
                return a
            },
            IX2EasingUtils: function() {
                return o
            },
            IX2Easings: function() {
                return i
            },
            IX2ElementsReducer: function() {
                return r
            },
            IX2VanillaPlugins: function() {
                return l
            },
            IX2VanillaUtils: function() {
                return c
            }
        });
        let a = s(n(2662))
          , i = s(n(8686))
          , o = s(n(3767))
          , r = s(n(5861))
          , l = s(n(1799))
          , c = s(n(4124));
        function d(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (d = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function s(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = d(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }
    },
    2662: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ELEMENT_MATCHES: function() {
                return r
            },
            FLEX_PREFIXED: function() {
                return l
            },
            IS_BROWSER_ENV: function() {
                return i
            },
            TRANSFORM_PREFIXED: function() {
                return c
            },
            TRANSFORM_STYLE_PREFIXED: function() {
                return s
            },
            withBrowser: function() {
                return o
            }
        });
        let a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(9777))
          , i = "undefined" != typeof window
          , o = (e, t) => i ? e() : t
          , r = o( () => (0,
        a.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype))
          , l = o( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                let {length: n} = t;
                for (let a = 0; a < n; a++) {
                    let n = t[a];
                    if (e.style.display = n,
                    e.style.display === n)
                        return n
                }
                return ""
            } catch (e) {
                return ""
            }
        }
        , "flex")
          , c = o( () => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
                let t = ["Webkit", "Moz", "ms"]
                  , {length: n} = t;
                for (let a = 0; a < n; a++) {
                    let n = t[a] + "Transform";
                    if (void 0 !== e.style[n])
                        return n
                }
            }
            return "transform"
        }
        , "transform")
          , d = c.split("transform")[0]
          , s = d ? d + "TransformStyle" : "transformStyle"
    },
    3767: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            applyEasing: function() {
                return c
            },
            createBezierEasing: function() {
                return l
            },
            optimizeFloat: function() {
                return r
            }
        });
        let a = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = o(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }(n(8686))
          , i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1361));
        function o(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (o = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function r(e, t=5, n=10) {
            let a = Math.pow(n, t)
              , i = Number(Math.round(e * a) / a);
            return Math.abs(i) > 1e-4 ? i : 0
        }
        function l(e) {
            return (0,
            i.default)(...e)
        }
        function c(e, t, n) {
            return 0 === t ? 0 : 1 === t ? 1 : n ? r(t > 0 ? n(t) : t) : r(t > 0 && e && a[e] ? a[e](t) : t)
        }
    },
    8686: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            bounce: function() {
                return D
            },
            bouncePast: function() {
                return k
            },
            ease: function() {
                return i
            },
            easeIn: function() {
                return o
            },
            easeInOut: function() {
                return l
            },
            easeOut: function() {
                return r
            },
            inBack: function() {
                return N
            },
            inCirc: function() {
                return L
            },
            inCubic: function() {
                return u
            },
            inElastic: function() {
                return x
            },
            inExpo: function() {
                return h
            },
            inOutBack: function() {
                return V
            },
            inOutCirc: function() {
                return A
            },
            inOutCubic: function() {
                return p
            },
            inOutElastic: function() {
                return F
            },
            inOutExpo: function() {
                return S
            },
            inOutQuad: function() {
                return s
            },
            inOutQuart: function() {
                return E
            },
            inOutQuint: function() {
                return m
            },
            inOutSine: function() {
                return v
            },
            inQuad: function() {
                return c
            },
            inQuart: function() {
                return g
            },
            inQuint: function() {
                return T
            },
            inSine: function() {
                return b
            },
            outBack: function() {
                return w
            },
            outBounce: function() {
                return C
            },
            outCirc: function() {
                return R
            },
            outCubic: function() {
                return f
            },
            outElastic: function() {
                return M
            },
            outExpo: function() {
                return _
            },
            outQuad: function() {
                return d
            },
            outQuart: function() {
                return I
            },
            outQuint: function() {
                return y
            },
            outSine: function() {
                return O
            },
            swingFrom: function() {
                return U
            },
            swingFromTo: function() {
                return P
            },
            swingTo: function() {
                return G
            }
        });
        let a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1361))
          , i = (0,
        a.default)(.25, .1, .25, 1)
          , o = (0,
        a.default)(.42, 0, 1, 1)
          , r = (0,
        a.default)(0, 0, .58, 1)
          , l = (0,
        a.default)(.42, 0, .58, 1);
        function c(e) {
            return Math.pow(e, 2)
        }
        function d(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function s(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function u(e) {
            return Math.pow(e, 3)
        }
        function f(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function p(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function g(e) {
            return Math.pow(e, 4)
        }
        function I(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function E(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function T(e) {
            return Math.pow(e, 5)
        }
        function y(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function m(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function b(e) {
            return -Math.cos(Math.PI / 2 * e) + 1
        }
        function O(e) {
            return Math.sin(Math.PI / 2 * e)
        }
        function v(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function h(e) {
            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function _(e) {
            return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function S(e) {
            return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function L(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function R(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function A(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function C(e) {
            if (e < 1 / 2.75)
                return 7.5625 * e * e;
            if (e < 2 / 2.75)
                return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
            if (e < 2.5 / 2.75)
                return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
            else
                return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function N(e) {
            return e * e * (2.70158 * e - 1.70158)
        }
        function w(e) {
            return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
        }
        function V(e) {
            let t = 1.70158;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function x(e) {
            let t = 1.70158
              , n = 0
              , a = 1;
            return 0 === e ? 0 : 1 === e ? 1 : (!n && (n = .3),
            a < 1 ? (a = 1,
            t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a),
            -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
        }
        function M(e) {
            let t = 1.70158
              , n = 0
              , a = 1;
            return 0 === e ? 0 : 1 === e ? 1 : (!n && (n = .3),
            a < 1 ? (a = 1,
            t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a),
            a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
        }
        function F(e) {
            let t = 1.70158
              , n = 0
              , a = 1;
            return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (!n && (n = .3 * 1.5),
            a < 1 ? (a = 1,
            t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a),
            e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
        }
        function P(e) {
            let t = 1.70158;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function U(e) {
            return e * e * (2.70158 * e - 1.70158)
        }
        function G(e) {
            return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
        }
        function D(e) {
            if (e < 1 / 2.75)
                return 7.5625 * e * e;
            if (e < 2 / 2.75)
                return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
            if (e < 2.5 / 2.75)
                return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
            else
                return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function k(e) {
            if (e < 1 / 2.75)
                return 7.5625 * e * e;
            if (e < 2 / 2.75)
                return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75);
            if (e < 2.5 / 2.75)
                return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375);
            else
                return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    },
    1799: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            clearPlugin: function() {
                return p
            },
            createPluginInstance: function() {
                return u
            },
            getPluginConfig: function() {
                return l
            },
            getPluginDestination: function() {
                return s
            },
            getPluginDuration: function() {
                return d
            },
            getPluginOrigin: function() {
                return c
            },
            isPluginType: function() {
                return o
            },
            renderPlugin: function() {
                return f
            }
        });
        let a = n(2662)
          , i = n(3690);
        function o(e) {
            return i.pluginMethodMap.has(e)
        }
        let r = e => t => {
            if (!a.IS_BROWSER_ENV)
                return () => null;
            let n = i.pluginMethodMap.get(t);
            if (!n)
                throw Error(`IX2 no plugin configured for: ${t}`);
            let o = n[e];
            if (!o)
                throw Error(`IX2 invalid plugin method: ${e}`);
            return o
        }
          , l = r("getPluginConfig")
          , c = r("getPluginOrigin")
          , d = r("getPluginDuration")
          , s = r("getPluginDestination")
          , u = r("createPluginInstance")
          , f = r("renderPlugin")
          , p = r("clearPlugin")
    },
    4124: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            cleanupHTMLElement: function() {
                return eY
            },
            clearAllStyles: function() {
                return ek
            },
            clearObjectCache: function() {
                return ed
            },
            getActionListProgress: function() {
                return ez
            },
            getAffectedElements: function() {
                return ey
            },
            getComputedStyle: function() {
                return em
            },
            getDestinationValues: function() {
                return eR
            },
            getElementId: function() {
                return ep
            },
            getInstanceId: function() {
                return eu
            },
            getInstanceOrigin: function() {
                return eh
            },
            getItemConfigByKey: function() {
                return eL
            },
            getMaxDurationItemIndex: function() {
                return eH
            },
            getNamespacedParameterId: function() {
                return eq
            },
            getRenderType: function() {
                return eA
            },
            getStyleProp: function() {
                return eC
            },
            mediaQueriesEqual: function() {
                return eZ
            },
            observeStore: function() {
                return eE
            },
            reduceListToGroup: function() {
                return eQ
            },
            reifyState: function() {
                return eg
            },
            renderHTMLElement: function() {
                return eN
            },
            shallowEqual: function() {
                return c.default
            },
            shouldAllowMediaQuery: function() {
                return eK
            },
            shouldNamespaceEventParameter: function() {
                return e$
            },
            stringifyTarget: function() {
                return eJ
            }
        });
        let a = p(n(4075))
          , i = p(n(1455))
          , o = p(n(5720))
          , r = n(1185)
          , l = n(7087)
          , c = p(n(7164))
          , d = n(3767)
          , s = n(380)
          , u = n(1799)
          , f = n(2662);
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let {BACKGROUND: g, TRANSFORM: I, TRANSLATE_3D: E, SCALE_3D: T, ROTATE_X: y, ROTATE_Y: m, ROTATE_Z: b, SKEW: O, PRESERVE_3D: v, FLEX: h, OPACITY: _, FILTER: S, FONT_VARIATION_SETTINGS: L, WIDTH: R, HEIGHT: A, BACKGROUND_COLOR: C, BORDER_COLOR: N, COLOR: w, CHILDREN: V, IMMEDIATE_CHILDREN: x, SIBLINGS: M, PARENT: F, DISPLAY: P, WILL_CHANGE: U, AUTO: G, COMMA_DELIMITER: D, COLON_DELIMITER: k, BAR_DELIMITER: B, RENDER_TRANSFORM: X, RENDER_GENERAL: Y, RENDER_STYLE: W, RENDER_PLUGIN: j} = l.IX2EngineConstants
          , {TRANSFORM_MOVE: H, TRANSFORM_SCALE: z, TRANSFORM_ROTATE: Q, TRANSFORM_SKEW: $, STYLE_OPACITY: q, STYLE_FILTER: K, STYLE_FONT_VARIATION: Z, STYLE_SIZE: J, STYLE_BACKGROUND_COLOR: ee, STYLE_BORDER: et, STYLE_TEXT_COLOR: en, GENERAL_DISPLAY: ea, OBJECT_VALUE: ei} = l.ActionTypeConsts
          , eo = e => e.trim()
          , er = Object.freeze({
            [ee]: C,
            [et]: N,
            [en]: w
        })
          , el = Object.freeze({
            [f.TRANSFORM_PREFIXED]: I,
            [C]: g,
            [_]: _,
            [S]: S,
            [R]: R,
            [A]: A,
            [L]: L
        })
          , ec = new Map;
        function ed() {
            ec.clear()
        }
        let es = 1;
        function eu() {
            return "i" + es++
        }
        let ef = 1;
        function ep(e, t) {
            for (let n in e) {
                let a = e[n];
                if (a && a.ref === t)
                    return a.id
            }
            return "e" + ef++
        }
        function eg({events: e, actionLists: t, site: n}={}) {
            let a = (0,
            i.default)(e, (e, t) => {
                let {eventTypeId: n} = t;
                return !e[n] && (e[n] = {}),
                e[n][t.id] = t,
                e
            }
            , {})
              , o = n && n.mediaQueries
              , r = [];
            return o ? r = o.map(e => e.key) : (o = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: a,
                    mediaQueries: o,
                    mediaQueryKeys: r
                }
            }
        }
        let eI = (e, t) => e === t;
        function eE({store: e, select: t, onChange: n, comparator: a=eI}) {
            let {getState: i, subscribe: o} = e
              , r = o(function() {
                let o = t(i());
                if (null == o) {
                    r();
                    return
                }
                !a(o, l) && n(l = o, e)
            })
              , l = t(i());
            return r
        }
        function eT(e) {
            let t = typeof e;
            if ("string" === t)
                return {
                    id: e
                };
            if (null != e && "object" === t) {
                let {id: t, objectId: n, selector: a, selectorGuids: i, appliesTo: o, useEventTarget: r} = e;
                return {
                    id: t,
                    objectId: n,
                    selector: a,
                    selectorGuids: i,
                    appliesTo: o,
                    useEventTarget: r
                }
            }
            return {}
        }
        function ey({config: e, event: t, eventTarget: n, elementRoot: a, elementApi: i}) {
            let o, r, c;
            if (!i)
                throw Error("IX2 missing elementApi");
            let {targets: d} = e;
            if (Array.isArray(d) && d.length > 0)
                return d.reduce( (e, o) => e.concat(ey({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i
                })), []);
            let {getValidDocument: s, getQuerySelector: u, queryDocument: p, getChildElements: g, getSiblingElements: I, matchSelector: E, elementContains: T, isSiblingNode: y} = i
              , {target: m} = e;
            if (!m)
                return [];
            let {id: b, objectId: O, selector: v, selectorGuids: h, appliesTo: _, useEventTarget: S} = eT(m);
            if (O)
                return [ec.has(O) ? ec.get(O) : ec.set(O, {}).get(O)];
            if (_ === l.EventAppliesTo.PAGE) {
                let e = s(b);
                return e ? [e] : []
            }
            let L = (t?.action?.config?.affectedElements ?? {})[b || v] || {}
              , R = !!(L.id || L.selector)
              , A = t && u(eT(t.target));
            if (R ? (o = L.limitAffectedElements,
            r = A,
            c = u(L)) : r = c = u({
                id: b,
                selector: v,
                selectorGuids: h
            }),
            t && S) {
                let e = n && (c || !0 === S) ? [n] : p(A);
                if (c) {
                    if (S === F)
                        return p(c).filter(t => e.some(e => T(t, e)));
                    if (S === V)
                        return p(c).filter(t => e.some(e => T(e, t)));
                    if (S === M)
                        return p(c).filter(t => e.some(e => y(e, t)))
                }
                return e
            }
            if (null == r || null == c)
                return [];
            if (f.IS_BROWSER_ENV && a)
                return p(c).filter(e => a.contains(e));
            if (o === V)
                return p(r, c);
            if (o === x)
                return g(p(r)).filter(E(c));
            if (o === M)
                return I(p(r)).filter(E(c));
            else
                return p(c)
        }
        function em({element: e, actionItem: t}) {
            if (!f.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: n} = t;
            switch (n) {
            case J:
            case ee:
            case et:
            case en:
            case ea:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        let eb = /px/
          , eO = (e, t) => t.reduce( (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]),
        e), e || {})
          , ev = (e, t) => t.reduce( (e, t) => (null == e[t.type] && (e[t.type] = ex[t.type] || t.defaultValue || 0),
        e), e || {});
        function eh(e, t={}, n={}, i, o) {
            let {getStyle: r} = o
              , {actionTypeId: l} = i;
            if ((0,
            u.isPluginType)(l))
                return (0,
                u.getPluginOrigin)(l)(t[l], i);
            switch (i.actionTypeId) {
            case H:
            case z:
            case Q:
            case $:
                return t[i.actionTypeId] || ew[i.actionTypeId];
            case K:
                return eO(t[i.actionTypeId], i.config.filters);
            case Z:
                return ev(t[i.actionTypeId], i.config.fontVariations);
            case q:
                return {
                    value: (0,
                    a.default)(parseFloat(r(e, _)), 1)
                };
            case J:
                {
                    let t, o;
                    let l = r(e, R)
                      , c = r(e, A);
                    return t = i.config.widthUnit === G ? eb.test(l) ? parseFloat(l) : parseFloat(n.width) : (0,
                    a.default)(parseFloat(l), parseFloat(n.width)),
                    {
                        widthValue: t,
                        heightValue: o = i.config.heightUnit === G ? eb.test(c) ? parseFloat(c) : parseFloat(n.height) : (0,
                        a.default)(parseFloat(c), parseFloat(n.height))
                    }
                }
            case ee:
            case et:
            case en:
                return function({element: e, actionTypeId: t, computedStyle: n, getStyle: i}) {
                    let o = er[t]
                      , r = i(e, o)
                      , l = (function(e, t) {
                        let n = e.exec(t);
                        return n ? n[1] : ""
                    }
                    )(eU, eP.test(r) ? r : n[o]).split(D);
                    return {
                        rValue: (0,
                        a.default)(parseInt(l[0], 10), 255),
                        gValue: (0,
                        a.default)(parseInt(l[1], 10), 255),
                        bValue: (0,
                        a.default)(parseInt(l[2], 10), 255),
                        aValue: (0,
                        a.default)(parseFloat(l[3]), 1)
                    }
                }({
                    element: e,
                    actionTypeId: i.actionTypeId,
                    computedStyle: n,
                    getStyle: r
                });
            case ea:
                return {
                    value: (0,
                    a.default)(r(e, P), n.display)
                };
            case ei:
                return t[i.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        let e_ = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , eS = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , eL = (e, t, n) => {
            if ((0,
            u.isPluginType)(e))
                return (0,
                u.getPluginConfig)(e)(n, t);
            switch (e) {
            case K:
                {
                    let e = (0,
                    o.default)(n.filters, ({type: e}) => e === t);
                    return e ? e.value : 0
                }
            case Z:
                {
                    let e = (0,
                    o.default)(n.fontVariations, ({type: e}) => e === t);
                    return e ? e.value : 0
                }
            default:
                return n[t]
            }
        }
        ;
        function eR({element: e, actionItem: t, elementApi: n}) {
            if ((0,
            u.isPluginType)(t.actionTypeId))
                return (0,
                u.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case H:
            case z:
            case Q:
            case $:
                {
                    let {xValue: e, yValue: n, zValue: a} = t.config;
                    return {
                        xValue: e,
                        yValue: n,
                        zValue: a
                    }
                }
            case J:
                {
                    let {getStyle: a, setStyle: i, getProperty: o} = n
                      , {widthUnit: r, heightUnit: l} = t.config
                      , {widthValue: c, heightValue: d} = t.config;
                    if (!f.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: d
                        };
                    if (r === G) {
                        let t = a(e, R);
                        i(e, R, ""),
                        c = o(e, "offsetWidth"),
                        i(e, R, t)
                    }
                    if (l === G) {
                        let t = a(e, A);
                        i(e, A, ""),
                        d = o(e, "offsetHeight"),
                        i(e, A, t)
                    }
                    return {
                        widthValue: c,
                        heightValue: d
                    }
                }
            case ee:
            case et:
            case en:
                {
                    let {rValue: a, gValue: i, bValue: o, aValue: r, globalSwatchId: l} = t.config;
                    if (l && l.startsWith("--")) {
                        let {getStyle: t} = n
                          , a = t(e, l)
                          , i = (0,
                        s.normalizeColor)(a);
                        return {
                            rValue: i.red,
                            gValue: i.green,
                            bValue: i.blue,
                            aValue: i.alpha
                        }
                    }
                    return {
                        rValue: a,
                        gValue: i,
                        bValue: o,
                        aValue: r
                    }
                }
            case K:
                return t.config.filters.reduce(e_, {});
            case Z:
                return t.config.fontVariations.reduce(eS, {});
            default:
                {
                    let {value: e} = t.config;
                    return {
                        value: e
                    }
                }
            }
        }
        function eA(e) {
            return /^TRANSFORM_/.test(e) ? X : /^STYLE_/.test(e) ? W : /^GENERAL_/.test(e) ? Y : /^PLUGIN_/.test(e) ? j : void 0
        }
        function eC(e, t) {
            return e === W ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function eN(e, t, n, a, o, r, l, c, d) {
            switch (c) {
            case X:
                return function(e, t, n, a, i) {
                    let o = eF.map(e => {
                        let n = ew[e]
                          , {xValue: a=n.xValue, yValue: i=n.yValue, zValue: o=n.zValue, xUnit: r="", yUnit: l="", zUnit: c=""} = t[e] || {};
                        switch (e) {
                        case H:
                            return `${E}(${a}${r}, ${i}${l}, ${o}${c})`;
                        case z:
                            return `${T}(${a}${r}, ${i}${l}, ${o}${c})`;
                        case Q:
                            return `${y}(${a}${r}) ${m}(${i}${l}) ${b}(${o}${c})`;
                        case $:
                            return `${O}(${a}${r}, ${i}${l})`;
                        default:
                            return ""
                        }
                    }
                    ).join(" ")
                      , {setStyle: r} = i;
                    eG(e, f.TRANSFORM_PREFIXED, i),
                    r(e, f.TRANSFORM_PREFIXED, o),
                    function({actionTypeId: e}, {xValue: t, yValue: n, zValue: a}) {
                        return e === H && void 0 !== a || e === z && void 0 !== a || e === Q && (void 0 !== t || void 0 !== n)
                    }(a, n) && r(e, f.TRANSFORM_STYLE_PREFIXED, v)
                }(e, t, n, o, l);
            case W:
                return function(e, t, n, a, o, r) {
                    let {setStyle: l} = r;
                    switch (a.actionTypeId) {
                    case J:
                        {
                            let {widthUnit: t="", heightUnit: i=""} = a.config
                              , {widthValue: o, heightValue: c} = n;
                            void 0 !== o && (t === G && (t = "px"),
                            eG(e, R, r),
                            l(e, R, o + t)),
                            void 0 !== c && (i === G && (i = "px"),
                            eG(e, A, r),
                            l(e, A, c + i));
                            break
                        }
                    case K:
                        !function(e, t, n, a) {
                            let o = (0,
                            i.default)(t, (e, t, a) => `${e} ${a}(${t}${eM(a, n)})`, "")
                              , {setStyle: r} = a;
                            eG(e, S, a),
                            r(e, S, o)
                        }(e, n, a.config, r);
                        break;
                    case Z:
                        !function(e, t, n, a) {
                            let o = (0,
                            i.default)(t, (e, t, n) => (e.push(`"${n}" ${t}`),
                            e), []).join(", ")
                              , {setStyle: r} = a;
                            eG(e, L, a),
                            r(e, L, o)
                        }(e, n, a.config, r);
                        break;
                    case ee:
                    case et:
                    case en:
                        {
                            let t = er[a.actionTypeId]
                              , i = Math.round(n.rValue)
                              , o = Math.round(n.gValue)
                              , c = Math.round(n.bValue)
                              , d = n.aValue;
                            eG(e, t, r),
                            l(e, t, d >= 1 ? `rgb(${i},${o},${c})` : `rgba(${i},${o},${c},${d})`);
                            break
                        }
                    default:
                        {
                            let {unit: t=""} = a.config;
                            eG(e, o, r),
                            l(e, o, n.value + t)
                        }
                    }
                }(e, t, n, o, r, l);
            case Y:
                return function(e, t, n) {
                    let {setStyle: a} = n;
                    if (t.actionTypeId === ea) {
                        let {value: n} = t.config;
                        a(e, P, n === h && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : n);
                        return
                    }
                }(e, o, l);
            case j:
                {
                    let {actionTypeId: e} = o;
                    if ((0,
                    u.isPluginType)(e))
                        return (0,
                        u.renderPlugin)(e)(d, t, o)
                }
            }
        }
        let ew = {
            [H]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [z]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Q]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [$]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , eV = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , ex = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , eM = (e, t) => {
            let n = (0,
            o.default)(t.filters, ({type: t}) => t === e);
            if (n && n.unit)
                return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , eF = Object.keys(ew)
          , eP = /^rgb/
          , eU = RegExp("rgba?\\(([^)]+)\\)");
        function eG(e, t, n) {
            if (!f.IS_BROWSER_ENV)
                return;
            let a = el[t];
            if (!a)
                return;
            let {getStyle: i, setStyle: o} = n
              , r = i(e, U);
            if (!r) {
                o(e, U, a);
                return
            }
            let l = r.split(D).map(eo);
            -1 === l.indexOf(a) && o(e, U, l.concat(a).join(D))
        }
        function eD(e, t, n) {
            if (!f.IS_BROWSER_ENV)
                return;
            let a = el[t];
            if (!a)
                return;
            let {getStyle: i, setStyle: o} = n
              , r = i(e, U);
            if (!!r && -1 !== r.indexOf(a))
                o(e, U, r.split(D).map(eo).filter(e => e !== a).join(D))
        }
        function ek({store: e, elementApi: t}) {
            let {ixData: n} = e.getState()
              , {events: a={}, actionLists: i={}} = n;
            Object.keys(a).forEach(e => {
                let n = a[e]
                  , {config: o} = n.action
                  , {actionListId: r} = o
                  , l = i[r];
                l && eB({
                    actionList: l,
                    event: n,
                    elementApi: t
                })
            }
            ),
            Object.keys(i).forEach(e => {
                eB({
                    actionList: i[e],
                    elementApi: t
                })
            }
            )
        }
        function eB({actionList: e={}, event: t, elementApi: n}) {
            let {actionItemGroups: a, continuousParameterGroups: i} = e;
            a && a.forEach(e => {
                eX({
                    actionGroup: e,
                    event: t,
                    elementApi: n
                })
            }
            ),
            i && i.forEach(e => {
                let {continuousActionGroups: a} = e;
                a.forEach(e => {
                    eX({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }
                )
            }
            )
        }
        function eX({actionGroup: e, event: t, elementApi: n}) {
            let {actionItems: a} = e;
            a.forEach(e => {
                let a;
                let {actionTypeId: i, config: o} = e;
                a = (0,
                u.isPluginType)(i) ? t => (0,
                u.clearPlugin)(i)(t, e) : eW({
                    effect: ej,
                    actionTypeId: i,
                    elementApi: n
                }),
                ey({
                    config: o,
                    event: t,
                    elementApi: n
                }).forEach(a)
            }
            )
        }
        function eY(e, t, n) {
            let {setStyle: a, getStyle: i} = n
              , {actionTypeId: o} = t;
            if (o === J) {
                let {config: n} = t;
                n.widthUnit === G && a(e, R, ""),
                n.heightUnit === G && a(e, A, "")
            }
            i(e, U) && eW({
                effect: eD,
                actionTypeId: o,
                elementApi: n
            })(e)
        }
        let eW = ({effect: e, actionTypeId: t, elementApi: n}) => a => {
            switch (t) {
            case H:
            case z:
            case Q:
            case $:
                e(a, f.TRANSFORM_PREFIXED, n);
                break;
            case K:
                e(a, S, n);
                break;
            case Z:
                e(a, L, n);
                break;
            case q:
                e(a, _, n);
                break;
            case J:
                e(a, R, n),
                e(a, A, n);
                break;
            case ee:
            case et:
            case en:
                e(a, er[t], n);
                break;
            case ea:
                e(a, P, n)
            }
        }
        ;
        function ej(e, t, n) {
            let {setStyle: a} = n;
            eD(e, t, n),
            a(e, t, ""),
            t === f.TRANSFORM_PREFIXED && a(e, f.TRANSFORM_STYLE_PREFIXED, "")
        }
        function eH(e) {
            let t = 0
              , n = 0;
            return e.forEach( (e, a) => {
                let {config: i} = e
                  , o = i.delay + i.duration;
                o >= t && (t = o,
                n = a)
            }
            ),
            n
        }
        function ez(e, t) {
            let {actionItemGroups: n, useFirstGroupAsInitialState: a} = e
              , {actionItem: i, verboseTimeElapsed: o=0} = t
              , r = 0
              , l = 0;
            return n.forEach( (e, t) => {
                if (a && 0 === t)
                    return;
                let {actionItems: n} = e
                  , c = n[eH(n)]
                  , {config: d, actionTypeId: s} = c;
                i.id === c.id && (l = r + o);
                let u = eA(s) === Y ? 0 : d.duration;
                r += d.delay + u
            }
            ),
            r > 0 ? (0,
            d.optimizeFloat)(l / r) : 0
        }
        function eQ({actionList: e, actionItemId: t, rawData: n}) {
            let {actionItemGroups: a, continuousParameterGroups: i} = e
              , o = []
              , l = e => (o.push((0,
            r.mergeIn)(e, ["config"], {
                delay: 0,
                duration: 0
            })),
            e.id === t);
            return a && a.some( ({actionItems: e}) => e.some(l)),
            i && i.some(e => {
                let {continuousActionGroups: t} = e;
                return t.some( ({actionItems: e}) => e.some(l))
            }
            ),
            (0,
            r.setIn)(n, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: o
                    }]
                }
            })
        }
        function e$(e, {basedOn: t}) {
            return e === l.EventTypeConsts.SCROLLING_IN_VIEW && (t === l.EventBasedOn.ELEMENT || null == t) || e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT
        }
        function eq(e, t) {
            return e + k + t
        }
        function eK(e, t) {
            return null == t || -1 !== e.indexOf(t)
        }
        function eZ(e, t) {
            return (0,
            c.default)(e && e.sort(), t && t.sort())
        }
        function eJ(e) {
            if ("string" == typeof e)
                return e;
            if (e.pluginElement && e.objectId)
                return e.pluginElement + B + e.objectId;
            if (e.objectId)
                return e.objectId;
            let {id: t="", selector: n="", useEventTarget: a=""} = e;
            return t + B + n + B + a
        }
    },
    7164: function(e, t) {
        "use strict";
        function n(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let a = function(e, t) {
            if (n(e, t))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
            let a = Object.keys(e)
              , i = Object.keys(t);
            if (a.length !== i.length)
                return !1;
            for (let i = 0; i < a.length; i++)
                if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]]))
                    return !1;
            return !0
        }
    },
    5861: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            createElementState: function() {
                return O
            },
            ixElements: function() {
                return b
            },
            mergeActionState: function() {
                return v
            }
        });
        let a = n(1185)
          , i = n(7087)
          , {HTML_ELEMENT: o, PLAIN_OBJECT: r, ABSTRACT_NODE: l, CONFIG_X_VALUE: c, CONFIG_Y_VALUE: d, CONFIG_Z_VALUE: s, CONFIG_VALUE: u, CONFIG_X_UNIT: f, CONFIG_Y_UNIT: p, CONFIG_Z_UNIT: g, CONFIG_UNIT: I} = i.IX2EngineConstants
          , {IX2_SESSION_STOPPED: E, IX2_INSTANCE_ADDED: T, IX2_ELEMENT_STATE_CHANGED: y} = i.IX2EngineActionTypes
          , m = {}
          , b = (e=m, t={}) => {
            switch (t.type) {
            case E:
                return m;
            case T:
                {
                    let {elementId: n, element: i, origin: o, actionItem: r, refType: l} = t.payload
                      , {actionTypeId: c} = r
                      , d = e;
                    return (0,
                    a.getIn)(d, [n, i]) !== i && (d = O(d, i, l, n, r)),
                    v(d, n, c, o, r)
                }
            case y:
                {
                    let {elementId: n, actionTypeId: a, current: i, actionItem: o} = t.payload;
                    return v(e, n, a, i, o)
                }
            default:
                return e
            }
        }
        ;
        function O(e, t, n, i, o) {
            let l = n === r ? (0,
            a.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0,
            a.mergeIn)(e, [i], {
                id: i,
                ref: t,
                refId: l,
                refType: n
            })
        }
        function v(e, t, n, i, o) {
            let r = function(e) {
                let {config: t} = e;
                return h.reduce( (e, n) => {
                    let a = n[0]
                      , i = n[1]
                      , o = t[a]
                      , r = t[i];
                    return null != o && null != r && (e[i] = r),
                    e
                }
                , {})
            }(o);
            return (0,
            a.mergeIn)(e, [t, "refState", n], i, r)
        }
        let h = [[c, f], [d, p], [s, g], [u, I]]
    },
    8775: function() {
        Webflow.require("ix2").init({
            events: {
                e: {
                    id: "e",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-95"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".fade-in-on-scroll",
                        originalId: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".fade-in-on-scroll",
                        originalId: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x182445797f9
                },
                "e-3": {
                    id: "e-3",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_START",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-4"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x186230d9731
                },
                "e-4": {
                    id: "e-4",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_FINISH",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-62",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-3"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x186230d9732
                },
                "e-12": {
                    id: "e-12",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-13"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".featured-logo-wrapper",
                        originalId: "67f82974e65f89a3c0ca8b6f|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".featured-logo-wrapper",
                        originalId: "67f82974e65f89a3c0ca8b6f|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1862660cf38
                },
                "e-14": {
                    id: "e-14",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-15"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".title-container",
                        originalId: "67f82974e65f89a3c0ca8b6f|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".title-container",
                        originalId: "67f82974e65f89a3c0ca8b6f|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1862660f020
                },
                "e-16": {
                    id: "e-16",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-17"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".paragraph-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".paragraph-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18626610755
                },
                "e-18": {
                    id: "e-18",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-19"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".early-access-tag-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|ede77518-7561-2248-c811-452853b87491",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".early-access-tag-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|ede77518-7561-2248-c811-452853b87491",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18626618b81
                },
                "e-20": {
                    id: "e-20",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-21"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".early-access-title-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".early-access-title-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18626619f45
                },
                "e-22": {
                    id: "e-22",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-23"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".early-access-paraghaph-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|4c9c4307-106c-be6d-738d-d09730864a25",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".early-access-paraghaph-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|4c9c4307-106c-be6d-738d-d09730864a25",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1862661b887
                },
                "e-24": {
                    id: "e-24",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-25"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".early-access-button-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|2fd1adc7-a016-60a8-e041-af5290c334ea",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".early-access-button-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|2fd1adc7-a016-60a8-e041-af5290c334ea",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1862661cda1
                },
                "e-40": {
                    id: "e-40",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-41"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".power-feature-heading",
                        originalId: "67f82974e65f89a3c0ca8b6f|93d70ad6-7625-200b-5dfd-bd850990f3fd",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".power-feature-heading",
                        originalId: "67f82974e65f89a3c0ca8b6f|93d70ad6-7625-200b-5dfd-bd850990f3fd",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18626746991
                },
                "e-42": {
                    id: "e-42",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-43"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".power-feature-paragraph",
                        originalId: "67f82974e65f89a3c0ca8b6f|44c6d9db-29c3-2396-72c1-32492179481b",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".power-feature-paragraph",
                        originalId: "67f82974e65f89a3c0ca8b6f|44c6d9db-29c3-2396-72c1-32492179481b",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 7,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18626747f00
                },
                "e-46": {
                    id: "e-46",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-47"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".checked-list-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".checked-list-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18627242e64
                },
                "e-48": {
                    id: "e-48",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-49"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".pricing-footer-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|4fbcff52-53ec-c681-6c72-16023f59cb28",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".pricing-footer-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|4fbcff52-53ec-c681-6c72-16023f59cb28",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18627244a46
                },
                "e-50": {
                    id: "e-50",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-51"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".pricing-list-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".pricing-list-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x186272460f1
                },
                "e-52": {
                    id: "e-52",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-53"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".pricing-header",
                        originalId: "67f82974e65f89a3c0ca8b6f|e304e7a6-8278-db59-7b91-6f2a88c134da",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".pricing-header",
                        originalId: "67f82974e65f89a3c0ca8b6f|e304e7a6-8278-db59-7b91-6f2a88c134da",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x186272478ca
                },
                "e-54": {
                    id: "e-54",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-55"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".pricing-tag",
                        originalId: "67f82974e65f89a3c0ca8b6f|e24521b3-dd2e-36c7-294f-c709844f83f2",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".pricing-tag",
                        originalId: "67f82974e65f89a3c0ca8b6f|e24521b3-dd2e-36c7-294f-c709844f83f2",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18627248aca
                },
                "e-56": {
                    id: "e-56",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-57"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".tab-container",
                        originalId: "67f82974e65f89a3c0ca8b6f|4935aa35-662b-aad1-2151-5fc0eb8e4168",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".tab-container",
                        originalId: "67f82974e65f89a3c0ca8b6f|4935aa35-662b-aad1-2151-5fc0eb8e4168",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18758cfd7fe
                },
                "e-60": {
                    id: "e-60",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-3",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main", "medium", "small"],
                    target: {
                        id: "8113ed4d-4712-233c-062c-5f78a700da01",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "8113ed4d-4712-233c-062c-5f78a700da01",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-3-p",
                        smoothing: 89,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 60,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 3
                    }],
                    createdOn: 0x187ba13b023
                },
                "e-61": {
                    id: "e-61",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-62"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".reviews-logos-holder",
                        originalId: "18c7e41b-8f9a-bfaa-cb10-bdd3f8017076",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".reviews-logos-holder",
                        originalId: "18c7e41b-8f9a-bfaa-cb10-bdd3f8017076",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x187ba186863
                },
                "e-71": {
                    id: "e-71",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-72"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".deploying-app-title-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|8c853ba8-f592-9c30-b04e-f8c9842dbbcb",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".deploying-app-title-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|8c853ba8-f592-9c30-b04e-f8c9842dbbcb",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x187ba1bd9a0
                },
                "e-73": {
                    id: "e-73",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-74"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".deploying-app-paragraph-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|e3326f3f-b5da-0492-248b-7de28e12f9e2",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".deploying-app-paragraph-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|e3326f3f-b5da-0492-248b-7de28e12f9e2",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x187ba1bf1f1
                },
                "e-75": {
                    id: "e-75",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-76"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".deploying-app-link-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|61ef7aee-9814-4aae-d1b8-c3d2abc51541",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".deploying-app-link-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|61ef7aee-9814-4aae-d1b8-c3d2abc51541",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x187ba1c062b
                },
                "e-83": {
                    id: "e-83",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-84"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".gradient-line",
                        originalId: "67f82974e65f89a3c0ca8b6f|1da346bf-b188-94ed-13eb-c73cb482c9f0",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".gradient-line",
                        originalId: "67f82974e65f89a3c0ca8b6f|1da346bf-b188-94ed-13eb-c73cb482c9f0",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x187ba1f965b
                },
                "e-96": {
                    id: "e-96",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-21",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-97"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".questions-container",
                        originalId: "63f45a17-d0eb-a69b-4095-8950e157b285",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".questions-container",
                        originalId: "63f45a17-d0eb-a69b-4095-8950e157b285",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18b19de5859
                },
                "e-97": {
                    id: "e-97",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_SECOND_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-22",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-96"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".questions-container",
                        originalId: "63f45a17-d0eb-a69b-4095-8950e157b285",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".questions-container",
                        originalId: "63f45a17-d0eb-a69b-4095-8950e157b285",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18b19de585a
                },
                "e-98": {
                    id: "e-98",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-99"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".questions-container",
                        originalId: "63f45a17-d0eb-a69b-4095-8950e157b285",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".questions-container",
                        originalId: "63f45a17-d0eb-a69b-4095-8950e157b285",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18b19ecf528
                },
                "e-102": {
                    id: "e-102",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "PAGE_START",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-103"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19431d9e41e
                },
                "e-106": {
                    id: "e-106",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "PAGE_START",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-107"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19431f2375b
                },
                "e-110": {
                    id: "e-110",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "PAGE_START",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-290"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b79",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b79",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194321a8aa5
                },
                "e-114": {
                    id: "e-114",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-115"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".blog-grid-twos-item",
                        originalId: "65cb78e8153a95df763aa11f|32d198d9-b34b-f843-79be-12c72df2fb88",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".blog-grid-twos-item",
                        originalId: "65cb78e8153a95df763aa11f|32d198d9-b34b-f843-79be-12c72df2fb88",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1876105a621
                },
                "e-116": {
                    id: "e-116",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-117"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b7a|658a5cac-625e-e38c-5a31-25ff89c1f9fc",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b7a|658a5cac-625e-e38c-5a31-25ff89c1f9fc",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 1e3,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x18ce56bec76
                },
                "e-118": {
                    id: "e-118",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "PAGE_START",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-119"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b7b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b7b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194325b835c
                },
                "e-122": {
                    id: "e-122",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-123"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".title-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|1cc669f0-5524-6400-fc0e-18c1a1354955",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".title-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|1cc669f0-5524-6400-fc0e-18c1a1354955",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19432f62408
                },
                "e-132": {
                    id: "e-132",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-133"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".tag",
                        originalId: "67f82974e65f89a3c0ca8b6f|a5c73393-1f71-73ae-21b1-46f5a0e8b4a5",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".tag",
                        originalId: "67f82974e65f89a3c0ca8b6f|a5c73393-1f71-73ae-21b1-46f5a0e8b4a5",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 0,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x19432f7fbd6
                },
                "e-140": {
                    id: "e-140",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-141"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "1f52c58d-3f28-242e-772c-91c1415445a1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "1f52c58d-3f28-242e-772c-91c1415445a1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19432faad34
                },
                "e-144": {
                    id: "e-144",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-145"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".cta-content-holder",
                        originalId: "b4db9fec-1986-6c44-068f-352852774576",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".cta-content-holder",
                        originalId: "b4db9fec-1986-6c44-068f-352852774576",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19432fd3f0a
                },
                "e-177": {
                    id: "e-177",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_FINISH",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-176"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b7a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b7a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194332ffa37
                },
                "e-178": {
                    id: "e-178",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-179"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|ab139ee6-3d32-44e6-743c-d4e865bfb013",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|ab139ee6-3d32-44e6-743c-d4e865bfb013",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19489bb7563
                },
                "e-186": {
                    id: "e-186",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-187"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".testimonail-slider-container",
                        originalId: "cd68082a-8e9b-2e0f-bf0d-eae18f61c05a",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".testimonail-slider-container",
                        originalId: "cd68082a-8e9b-2e0f-bf0d-eae18f61c05a",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 12,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18b58f50f34
                },
                "e-190": {
                    id: "e-190",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-191"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|7199dbb4-01b3-fdc0-c88e-73426e5fb0e1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|7199dbb4-01b3-fdc0-c88e-73426e5fb0e1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x194938715af
                },
                "e-192": {
                    id: "e-192",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SLIDER_ACTIVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-193"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".feature-slide",
                        originalId: "67f82974e65f89a3c0ca8b78|70272f35-151e-2a3c-3a62-d1b2870c4404",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".feature-slide",
                        originalId: "67f82974e65f89a3c0ca8b78|70272f35-151e-2a3c-3a62-d1b2870c4404",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19493afcdc7
                },
                "e-193": {
                    id: "e-193",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SLIDER_INACTIVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-51",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-192"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".feature-slide",
                        originalId: "67f82974e65f89a3c0ca8b78|70272f35-151e-2a3c-3a62-d1b2870c4404",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".feature-slide",
                        originalId: "67f82974e65f89a3c0ca8b78|70272f35-151e-2a3c-3a62-d1b2870c4404",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19493afcdc8
                },
                "e-198": {
                    id: "e-198",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-199"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78|56efb6db-6da6-6f23-7059-9849a8999e70",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78|56efb6db-6da6-6f23-7059-9849a8999e70",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19493c2eb64
                },
                "e-210": {
                    id: "e-210",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-211"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".box-with-shadow",
                        originalId: "67f82974e65f89a3c0ca8b6f|3a4cae02-10d2-360c-3be4-6973cf658874",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".box-with-shadow",
                        originalId: "67f82974e65f89a3c0ca8b6f|3a4cae02-10d2-360c-3be4-6973cf658874",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19493f81e76
                },
                "e-212": {
                    id: "e-212",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-213"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".deploying-app-bg",
                        originalId: "67f82974e65f89a3c0ca8b6f|318cc8be-1502-5c00-846d-c2d49b067aae",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".deploying-app-bg",
                        originalId: "67f82974e65f89a3c0ca8b6f|318cc8be-1502-5c00-846d-c2d49b067aae",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19494017a08
                },
                "e-222": {
                    id: "e-222",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-223"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".price-holder",
                        originalId: "64ba48f9-51dd-723d-a0d3-c3c5ddc9419f",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".price-holder",
                        originalId: "64ba48f9-51dd-723d-a0d3-c3c5ddc9419f",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1949402dc95
                },
                "e-224": {
                    id: "e-224",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-225"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".price-button-holder",
                        originalId: "64ba48f9-51dd-723d-a0d3-c3c5ddc941a8",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".price-button-holder",
                        originalId: "64ba48f9-51dd-723d-a0d3-c3c5ddc941a8",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1949402f56e
                },
                "e-226": {
                    id: "e-226",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-227"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".list-holder",
                        originalId: "64ba48f9-51dd-723d-a0d3-c3c5ddc941ae",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".list-holder",
                        originalId: "64ba48f9-51dd-723d-a0d3-c3c5ddc941ae",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1949403194d
                },
                "e-230": {
                    id: "e-230",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-32",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-231"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|cd18a7bd-8553-f9f4-fcf9-1a6c462e4f13",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|cd18a7bd-8553-f9f4-fcf9-1a6c462e4f13",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194949b3d15
                },
                "e-231": {
                    id: "e-231",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-33",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-230"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|cd18a7bd-8553-f9f4-fcf9-1a6c462e4f13",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|cd18a7bd-8553-f9f4-fcf9-1a6c462e4f13",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194949b3d16
                },
                "e-262": {
                    id: "e-262",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-32",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-263"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|de862249-f760-1539-bcd4-5c03a307308b",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|de862249-f760-1539-bcd4-5c03a307308b",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194994cfb66
                },
                "e-263": {
                    id: "e-263",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_SECOND_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-33",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-262"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|de862249-f760-1539-bcd4-5c03a307308b",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".card-grid-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|de862249-f760-1539-bcd4-5c03a307308b",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194994cfb67
                },
                "e-280": {
                    id: "e-280",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-37",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-281"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".dashboard-stats",
                        originalId: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".dashboard-stats",
                        originalId: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x195fdecdb40
                },
                "e-281": {
                    id: "e-281",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-38",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-280"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".dashboard-stats",
                        originalId: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".dashboard-stats",
                        originalId: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x195fdecdb41
                },
                "e-282": {
                    id: "e-282",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-39",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|f0cc27d6-0662-c343-df0c-671378ad15d7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|f0cc27d6-0662-c343-df0c-671378ad15d7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-39-p",
                        smoothing: 80,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 26,
                        startsExiting: !1,
                        addEndOffset: !0,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x195fe3a059c
                },
                "e-283": {
                    id: "e-283",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-284"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|ba5813f2-e4f4-760a-aa15-d19293adbae8",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|ba5813f2-e4f4-760a-aa15-d19293adbae8",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 350,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x196024b48e6
                },
                "e-285": {
                    id: "e-285",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-286"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|fb25bc10-c851-a1fe-df7c-bf12b1a227ef",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|fb25bc10-c851-a1fe-df7c-bf12b1a227ef",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x196024b4a90
                },
                "e-297": {
                    id: "e-297",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-45",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-298"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "2f018919-2232-8bef-68ea-e0d0c907bfd4",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "2f018919-2232-8bef-68ea-e0d0c907bfd4",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960c959201
                },
                "e-299": {
                    id: "e-299",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-46",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-300"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".awards-item",
                        originalId: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".awards-item",
                        originalId: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960ca30f94
                },
                "e-300": {
                    id: "e-300",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-47",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-299"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".awards-item",
                        originalId: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".awards-item",
                        originalId: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960ca30f94
                },
                "e-301": {
                    id: "e-301",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-48",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-302"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".join-us-links",
                        originalId: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".join-us-links",
                        originalId: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960cbb0aa7
                },
                "e-302": {
                    id: "e-302",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-49",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-301"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".join-us-links",
                        originalId: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".join-us-links",
                        originalId: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960cbb0aa8
                },
                "e-313": {
                    id: "e-313",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-314"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".home-image-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|f0987d52-e7f9-5463-9036-c106b1446d4b",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".home-image-holder",
                        originalId: "67f82974e65f89a3c0ca8b6f|f0987d52-e7f9-5463-9036-c106b1446d4b",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960ceb1f9f
                },
                "e-323": {
                    id: "e-323",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-324"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".service-content",
                        originalId: "67f82974e65f89a3c0ca8b77|ab139ee6-3d32-44e6-743c-d4e865bfb014",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".service-content",
                        originalId: "67f82974e65f89a3c0ca8b77|ab139ee6-3d32-44e6-743c-d4e865bfb014",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960cf0b299
                },
                "e-333": {
                    id: "e-333",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-53",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-334"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".fancy-testimonial-holder",
                        originalId: "323d9317-83a3-4c51-1eb0-c7b7a476f578",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".fancy-testimonial-holder",
                        originalId: "323d9317-83a3-4c51-1eb0-c7b7a476f578",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960684a50f
                },
                "e-334": {
                    id: "e-334",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_SECOND_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-54",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-333"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".fancy-testimonial-holder",
                        originalId: "323d9317-83a3-4c51-1eb0-c7b7a476f578",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".fancy-testimonial-holder",
                        originalId: "323d9317-83a3-4c51-1eb0-c7b7a476f578",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960684a511
                },
                "e-335": {
                    id: "e-335",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-336"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78|8f53500d-648f-4ee3-c2a1-9744d4760135",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78|8f53500d-648f-4ee3-c2a1-9744d4760135",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1960d043098
                },
                "e-337": {
                    id: "e-337",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-338"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78|0d0b13c1-de31-b039-b679-136e2cd2af3c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78|0d0b13c1-de31-b039-b679-136e2cd2af3c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1960d0453dc
                },
                "e-339": {
                    id: "e-339",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-340"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78|94fd621e-9aa9-3b14-d0a3-c0c7cfe5912c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78|94fd621e-9aa9-3b14-d0a3-c0c7cfe5912c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 350,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1960d0471b5
                },
                "e-345": {
                    id: "e-345",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-346"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".join-us-links",
                        originalId: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".join-us-links",
                        originalId: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 15,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960d05b437
                },
                "e-347": {
                    id: "e-347",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-348"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".cta-dashboard-holder",
                        originalId: "d3076a3a-290c-2108-2679-05d252e31dc1",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".cta-dashboard-holder",
                        originalId: "d3076a3a-290c-2108-2679-05d252e31dc1",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 15,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960d1330fe
                },
                "e-349": {
                    id: "e-349",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-350"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa1944",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa1944",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1962190ba00
                },
                "e-351": {
                    id: "e-351",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-352"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa194b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa194b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1962190ba00
                },
                "e-353": {
                    id: "e-353",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-354"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa1952",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa1952",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 350,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1962190ba00
                },
                "e-355": {
                    id: "e-355",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-356"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa1959",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|e0f8b6df-e5be-ab98-3547-1724d2aa1959",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1962190ba00
                },
                "e-357": {
                    id: "e-357",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-358"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|3ff66e8a-6efe-54a0-aa98-80b99cc12b8f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|3ff66e8a-6efe-54a0-aa98-80b99cc12b8f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 350,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19621921166
                },
                "e-359": {
                    id: "e-359",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-360"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|9609eec1-32fd-ddfe-53c3-2cc1cb366572",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|9609eec1-32fd-ddfe-53c3-2cc1cb366572",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x196219212a5
                },
                "e-378": {
                    id: "e-378",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FADE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "fadeIn",
                            autoStopEventId: "e-368"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".feature-image-blur",
                        originalId: "67f82974e65f89a3c0ca8b6f|e5b4a9f2-978a-d998-ece6-b03bfedc8d74",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".feature-image-blur",
                        originalId: "67f82974e65f89a3c0ca8b6f|e5b4a9f2-978a-d998-ece6-b03bfedc8d74",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: null,
                        effectIn: !0
                    },
                    createdOn: 0x1951fb9ed03
                },
                "e-380": {
                    id: "e-380",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "TAB_ACTIVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-59",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-381"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".tab-link-2",
                        originalId: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".tab-link-2",
                        originalId: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x182fe47e66d
                },
                "e-381": {
                    id: "e-381",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "TAB_INACTIVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-60",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-380"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".tab-link-2",
                        originalId: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".tab-link-2",
                        originalId: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x182fe47e66d
                },
                "e-382": {
                    id: "e-382",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-3",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|fa14a2cc-8e59-b8f9-6108-3fd80f7015c7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|fa14a2cc-8e59-b8f9-6108-3fd80f7015c7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-3-p",
                        smoothing: 94,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x19659a20b93
                },
                "e-383": {
                    id: "e-383",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-61",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-61-p",
                        smoothing: 93,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x19659c1685c
                },
                "e-384": {
                    id: "e-384",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-385"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".line",
                        originalId: "67f82974e65f89a3c0ca8b6f|457c128f-6964-dc8b-dd53-7a872c5aae20",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".line",
                        originalId: "67f82974e65f89a3c0ca8b6f|457c128f-6964-dc8b-dd53-7a872c5aae20",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 0,
                        direction: null,
                        effectIn: !0
                    },
                    createdOn: 0x19659d60622
                },
                "e-386": {
                    id: "e-386",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-387"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|e5b4a9f2-978a-d998-ece6-b03bfedc8d71",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|e5b4a9f2-978a-d998-ece6-b03bfedc8d71",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x19659d6446c
                },
                "e-388": {
                    id: "e-388",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-389"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|605cbd16-3a90-ff0c-09e3-5eecc3d56cc7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|605cbd16-3a90-ff0c-09e3-5eecc3d56cc7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 700,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19659d679de
                },
                "e-390": {
                    id: "e-390",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInLeft",
                            autoStopEventId: "e-391"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|e5b4a9f2-978a-d998-ece6-b03bfedc8d76",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|e5b4a9f2-978a-d998-ece6-b03bfedc8d76",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x19659d72cda
                },
                "e-392": {
                    id: "e-392",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-393"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|ff79b50e-e77a-1cf6-588e-e07271a1e06e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|ff79b50e-e77a-1cf6-588e-e07271a1e06e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 700,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19659d78ccf
                },
                "e-394": {
                    id: "e-394",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-395"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b4c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b4c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19659e97f79
                },
                "e-396": {
                    id: "e-396",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-397"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b55",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b55",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19659e99781
                },
                "e-398": {
                    id: "e-398",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-399"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b5e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b5e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19659e9b711
                },
                "e-400": {
                    id: "e-400",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-401"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b67",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "80a1f1dc-0a2d-dc9b-b9d2-ffe788622b67",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x19659e9d1cd
                },
                "e-402": {
                    id: "e-402",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-403"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|10320f91-84f3-410b-cce4-55211f97362e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|10320f91-84f3-410b-cce4-55211f97362e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3d219f
                },
                "e-404": {
                    id: "e-404",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInLeft",
                            autoStopEventId: "e-405"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|422de833-d02f-3c99-9611-75eab4fe13e3",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|422de833-d02f-3c99-9611-75eab4fe13e3",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3d4ce5
                },
                "e-406": {
                    id: "e-406",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SHRINK_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "shrinkIn",
                            autoStopEventId: "e-407"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|9ef61e6e-027b-7dcb-6c2b-ff0b998a8c93",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|9ef61e6e-027b-7dcb-6c2b-ff0b998a8c93",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 0,
                        direction: null,
                        effectIn: !0
                    },
                    createdOn: 0x1965a3dbb41
                },
                "e-408": {
                    id: "e-408",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-409"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|25dcbe5d-5119-10e2-3603-f9fb9a7b2fe2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|25dcbe5d-5119-10e2-3603-f9fb9a7b2fe2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3ddcf7
                },
                "e-410": {
                    id: "e-410",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-411"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|7a78f7dd-b6b1-33e5-7e71-1dfdd33778fe",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|7a78f7dd-b6b1-33e5-7e71-1dfdd33778fe",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e0544
                },
                "e-412": {
                    id: "e-412",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInLeft",
                            autoStopEventId: "e-413"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|6b7f17a5-b0ea-4a3b-75ce-1403e38de069",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|6b7f17a5-b0ea-4a3b-75ce-1403e38de069",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e227f
                },
                "e-414": {
                    id: "e-414",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInLeft",
                            autoStopEventId: "e-415"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|6b6084b5-e915-3f19-fad2-5edd00325bb2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|6b6084b5-e915-3f19-fad2-5edd00325bb2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e4792
                },
                "e-416": {
                    id: "e-416",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-417"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c0472468",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c0472468",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e87da
                },
                "e-418": {
                    id: "e-418",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-419"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c0472469",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c0472469",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e87da
                },
                "e-420": {
                    id: "e-420",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SHRINK_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "shrinkIn",
                            autoStopEventId: "e-421"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c047246a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c047246a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 0,
                        direction: null,
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e87da
                },
                "e-422": {
                    id: "e-422",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInLeft",
                            autoStopEventId: "e-423"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c047246b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c047246b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e87da
                },
                "e-424": {
                    id: "e-424",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInLeft",
                            autoStopEventId: "e-425"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c047246c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|70cce8ac-909d-7f09-705e-b243c047246c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 250,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3e87da
                },
                "e-426": {
                    id: "e-426",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInRight",
                            autoStopEventId: "e-427"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b77|33729938-6cf3-b3d1-d30d-38451c131af2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b77|33729938-6cf3-b3d1-d30d-38451c131af2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 150,
                        direction: "RIGHT",
                        effectIn: !0
                    },
                    createdOn: 0x1965a3f2e8a
                },
                "e-428": {
                    id: "e-428",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-429"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".simple-card-image-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|af5f7f6a-f0cb-f00d-1d60-b0dc3b389dc8",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".simple-card-image-holder",
                        originalId: "67f82974e65f89a3c0ca8b77|af5f7f6a-f0cb-f00d-1d60-b0dc3b389dc8",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1965a3f5c27
                },
                "e-430": {
                    id: "e-430",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SLIDER_ACTIVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-63",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-431"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".slide",
                        originalId: "67f82974e65f89a3c0ca8b78|106289d0-dfc6-d19b-4fd3-08a5d2a67632",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".slide",
                        originalId: "67f82974e65f89a3c0ca8b78|106289d0-dfc6-d19b-4fd3-08a5d2a67632",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1965a52d9c2
                },
                "e-431": {
                    id: "e-431",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SLIDER_INACTIVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-64",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-430"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".slide",
                        originalId: "67f82974e65f89a3c0ca8b78|106289d0-dfc6-d19b-4fd3-08a5d2a67632",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".slide",
                        originalId: "67f82974e65f89a3c0ca8b78|106289d0-dfc6-d19b-4fd3-08a5d2a67632",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1965a52d9c3
                },
                "e-432": {
                    id: "e-432",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-65",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f|fa14a2cc-8e59-b8f9-6108-3fd80f7015c7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f|fa14a2cc-8e59-b8f9-6108-3fd80f7015c7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-65-p",
                        smoothing: 93,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1965a64c81c
                },
                "e-433": {
                    id: "e-433",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-66",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b6f",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-66-p",
                        smoothing: 93,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1965a6952ee
                },
                "e-434": {
                    id: "e-434",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-61",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-61-p",
                        smoothing: 93,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1965a7c937f
                },
                "e-435": {
                    id: "e-435",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-66",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "67f82974e65f89a3c0ca8b78",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f82974e65f89a3c0ca8b78",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-66-p",
                        smoothing: 93,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1965a7cb69b
                },
                "e-436": {
                    id: "e-436",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-58",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".section.apple-watch-section",
                        originalId: "67f82974e65f89a3c0ca8b6f|c99ce768-cf18-a701-0b6c-feaed4659ecd",
                        appliesTo: "CLASS"
                    },
                    targets: [],
                    config: [{
                        continuousParameterGroupId: "a-58-p",
                        smoothing: 93,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x196a54ae4ad
                }
            },
            actionLists: {
                a: {
                    id: "a",
                    title: "\uD83D\uDC41 Fade In On Scroll",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
                                },
                                yValue: 45,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: !0,
                                    id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: !0,
                                    id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1824457a552
                },
                "a-2": {
                    id: "a-2",
                    title: "⏰Animate On Load",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-2-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-01",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0e"]
                                },
                                yValue: 45,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-73",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".feature-image-wrapper",
                                    selectorGuids: ["a72fe0fb-b4f5-ce71-7fbd-400046f04d2a"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-72",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".feature-image-wrapper",
                                    selectorGuids: ["a72fe0fb-b4f5-ce71-7fbd-400046f04d2a"]
                                },
                                xValue: 30,
                                yValue: 54,
                                zValue: -26,
                                xUnit: "deg",
                                yUnit: "deg",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-2-n-71",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".feature-image-wrapper",
                                    selectorGuids: ["a72fe0fb-b4f5-ce71-7fbd-400046f04d2a"]
                                },
                                xValue: 350,
                                yValue: 450,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-68",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-67",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                yValue: -500,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-40",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".home-content-wrapper",
                                    selectorGuids: ["6364b003-685a-25f3-57f8-fb2baa59cbc5"]
                                },
                                yValue: 120,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-31",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".navbar",
                                    selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-01",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0e"]
                                },
                                xValue: .96,
                                yValue: .96,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-01",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0e"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-02",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef07"]
                                },
                                yValue: 45,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-02",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef07"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-02",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef07"]
                                },
                                xValue: .96,
                                yValue: .96,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-03",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0f"]
                                },
                                yValue: 45,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-03",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0f"]
                                },
                                xValue: .96,
                                yValue: .96,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-03",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0f"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-04",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef05"]
                                },
                                yValue: 45,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-04",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef05"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-11",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".animate-on-load-04",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef05"]
                                },
                                xValue: .96,
                                yValue: .96,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-2-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-01",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0e"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-14",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-01",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0e"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-01",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0e"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-43",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 2e3,
                                target: {
                                    selector: ".home-content-wrapper",
                                    selectorGuids: ["6364b003-685a-25f3-57f8-fb2baa59cbc5"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-69",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-70",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 300,
                                easing: "outExpo",
                                duration: 1200,
                                target: {},
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 400,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-02",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef07"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 400,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-02",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef07"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-17",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 400,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-02",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef07"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-19",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 500,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-03",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0f"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-21",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 500,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-03",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0f"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-20",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 500,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-03",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef0f"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 600,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-04",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef05"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-24",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 600,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-04",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef05"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-23",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 600,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    selector: ".animate-on-load-04",
                                    selectorGuids: ["68512793-94a0-b906-2c90-ec2f1ef6ef05"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-2-n-32",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 600,
                                easing: "ease",
                                duration: 1200,
                                target: {
                                    selector: ".navbar",
                                    selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-74",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 600,
                                easing: "outExpo",
                                duration: 1300,
                                target: {
                                    selector: ".feature-image-wrapper",
                                    selectorGuids: ["a72fe0fb-b4f5-ce71-7fbd-400046f04d2a"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-2-n-76",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 600,
                                easing: "outExpo",
                                duration: 1300,
                                target: {
                                    selector: ".feature-image-wrapper",
                                    selectorGuids: ["a72fe0fb-b4f5-ce71-7fbd-400046f04d2a"]
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-2-n-75",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 600,
                                easing: "outExpo",
                                duration: 1300,
                                target: {
                                    selector: ".feature-image-wrapper",
                                    selectorGuids: ["a72fe0fb-b4f5-ce71-7fbd-400046f04d2a"]
                                },
                                xValue: 20,
                                yValue: 18,
                                zValue: -22,
                                xUnit: "deg",
                                yUnit: "deg",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x186230da21b
                },
                "a-62": {
                    id: "a-62",
                    title: "Company Logo Loop",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-62-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".company-logo-container",
                                    selectorGuids: ["aab12a68-69f6-6883-0845-8ac5d66d17ea"]
                                },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-62-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 2e4,
                                target: {
                                    selector: ".company-logo-container",
                                    selectorGuids: ["aab12a68-69f6-6883-0845-8ac5d66d17ea"]
                                },
                                xValue: -100,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-62-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".company-logo-container",
                                    selectorGuids: ["aab12a68-69f6-6883-0845-8ac5d66d17ea"]
                                },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19659eaefb2
                },
                "a-3": {
                    id: "a-3",
                    title: "Hero Animation -> While Scrolling",
                    continuousParameterGroups: [{
                        id: "a-3-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 9,
                            actionItems: [{
                                id: "a-3-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-3-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".content-holder",
                                        selectorGuids: ["bd3d9a21-e8b0-9310-4e46-5adb512dfa34"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".full-image",
                                        selectorGuids: ["f00a0e1b-e5a5-59a8-7ef3-41f1373f7e3f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 23,
                            actionItems: [{
                                id: "a-3-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-3-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".content-holder",
                                        selectorGuids: ["bd3d9a21-e8b0-9310-4e46-5adb512dfa34"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blue-blur",
                                        selectorGuids: ["d3e51f9e-bb4d-be67-b30c-0c3b9952e4d1"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-3-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 150,
                                    yValue: 210,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-3-n-18",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-3-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    xValue: -260,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-22",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    yValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            keyframe: 42,
                            actionItems: [{
                                id: "a-3-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".full-image",
                                        selectorGuids: ["f00a0e1b-e5a5-59a8-7ef3-41f1373f7e3f"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blue-blur",
                                        selectorGuids: ["d3e51f9e-bb4d-be67-b30c-0c3b9952e4d1"]
                                    },
                                    value: .2,
                                    unit: ""
                                }
                            }, {
                                id: "a-3-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 500,
                                    yValue: 820,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-23",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    yValue: -28,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            keyframe: 45,
                            actionItems: [{
                                id: "a-3-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-3-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-3-n-24",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-3-n-26",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 500,
                                    yValue: 1220,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-3-n-27",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: null,
                                    yValue: -45,
                                    zValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-3-n-25",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    xValue: 0,
                                    yValue: 380,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x186231a0840
                },
                "a-21": {
                    id: "a-21",
                    title: "Question -> Open",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-21-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".answer-holder",
                                    selectorGuids: ["dad8c9ed-bcbd-f3e6-759e-6f6741dbde7a"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-21-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".question-icon",
                                    selectorGuids: ["dad8c9ed-bcbd-f3e6-759e-6f6741dbde71"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-21-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".answer-holder",
                                    selectorGuids: ["dad8c9ed-bcbd-f3e6-759e-6f6741dbde7a"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-21-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".question-icon",
                                    selectorGuids: ["dad8c9ed-bcbd-f3e6-759e-6f6741dbde71"]
                                },
                                zValue: 225,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x18b19de60e4
                },
                "a-22": {
                    id: "a-22",
                    title: "Question -> Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-22-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".answer-holder",
                                    selectorGuids: ["dad8c9ed-bcbd-f3e6-759e-6f6741dbde7a"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-22-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".question-icon",
                                    selectorGuids: ["dad8c9ed-bcbd-f3e6-759e-6f6741dbde71"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x18b19de60e4
                },
                "a-29": {
                    id: "a-29",
                    title: "Slider -> In View",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-29-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                globalSwatchId: "",
                                rValue: 0,
                                bValue: 0,
                                gValue: 0,
                                aValue: 1
                            }
                        }, {
                            id: "a-29-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-29-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {},
                                globalSwatchId: "",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-29-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 1737644562e3
                },
                "a-51": {
                    id: "a-51",
                    title: "Slider -> Out of view",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-51-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                globalSwatchId: "",
                                rValue: 0,
                                bValue: 0,
                                gValue: 0,
                                aValue: 1
                            }
                        }, {
                            id: "a-51-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-51-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {},
                                globalSwatchId: "",
                                rValue: 0,
                                bValue: 0,
                                gValue: 0,
                                aValue: 1
                            }
                        }, {
                            id: "a-51-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 1737644562e3
                },
                "a-32": {
                    id: "a-32",
                    title: "Card Flip -> Hover On",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-32-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG"
                            }
                        }, {
                            id: "a-32-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-32-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "swingTo",
                                duration: 1200,
                                target: {},
                                yValue: 180,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG"
                            }
                        }, {
                            id: "a-32-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x194949b4487
                },
                "a-33": {
                    id: "a-33",
                    title: "Card Flip -> Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-33-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "swingFromTo",
                                duration: 1200,
                                target: {},
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG"
                            }
                        }, {
                            id: "a-33-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "swingFromTo",
                                duration: 1200,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x194949b4487
                },
                "a-37": {
                    id: "a-37",
                    title: "Dashboard Stats -> On Hover",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-37-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-37-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                xValue: 0,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-37-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-37-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-37-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-37-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad"
                                },
                                yValue: -50,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-37-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-37-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {},
                                xValue: -20,
                                yValue: 43,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x195fdece229
                },
                "a-38": {
                    id: "a-38",
                    title: "Dashboard Stats -> On Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-38-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-38-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 500,
                                target: {},
                                xValue: 0,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-38-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-38-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b6f|b1af6d83-2c47-a369-a61a-2a4089b2fbad"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x195fdece229
                },
                "a-39": {
                    id: "a-39",
                    title: "Dark -> White Switch",
                    continuousParameterGroups: [{
                        id: "a-39-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-39-n-3",
                                actionTypeId: "PLUGIN_VARIABLE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    value: {
                                        size: 70,
                                        unit: "px",
                                        value: 80
                                    },
                                    target: {}
                                }
                            }, {
                                id: "a-39-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    widthValue: 80,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-39-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: .5,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 4,
                            actionItems: [{
                                id: "a-39-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-14",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    filters: [{
                                        type: "blur",
                                        filterId: "3c5b",
                                        value: 11,
                                        unit: "px"
                                    }]
                                }
                            }]
                        }, {
                            keyframe: 15,
                            actionItems: [{
                                id: "a-39-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-16",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    filters: [{
                                        type: "blur",
                                        filterId: "3c5b",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }]
                        }, {
                            keyframe: 20,
                            actionItems: [{
                                id: "a-39-n-4",
                                actionTypeId: "PLUGIN_VARIABLE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    value: {
                                        size: 0,
                                        unit: "px",
                                        value: 80
                                    },
                                    target: {}
                                }
                            }, {
                                id: "a-39-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x195fe3a1c49
                },
                "a-45": {
                    id: "a-45",
                    title: "About Images Loop",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-45-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-45-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 2e4,
                                target: {},
                                xValue: -160,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-45-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {},
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1960c959895
                },
                "a-46": {
                    id: "a-46",
                    title: "Award Item -> Hover On",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-46-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f"
                                },
                                widthValue: 100,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }, {
                            id: "a-46-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                heightValue: 0,
                                widthUnit: "%",
                                heightUnit: "px",
                                locked: !1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-46-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f"
                                },
                                widthValue: 180,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }, {
                            id: "a-46-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {},
                                widthUnit: "%",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1960ca31af2
                },
                "a-47": {
                    id: "a-47",
                    title: "Award Item -> Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-47-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b78|c410695b-f3d5-c2fe-a704-6089df3e4c8f"
                                },
                                widthValue: 100,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }, {
                            id: "a-47-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 500,
                                target: {},
                                heightValue: 0,
                                widthUnit: "%",
                                heightUnit: "px",
                                locked: !1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1960ca31af2
                },
                "a-48": {
                    id: "a-48",
                    title: "Join Us -> Hover On",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-48-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-48-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".arrow-holder-join",
                                    selectorGuids: ["2f84567b-13e2-f414-fe12-e1c180081da0"]
                                },
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-48-n-5",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535"
                                },
                                globalSwatchId: "--colors--element-stroke-color",
                                rValue: 14,
                                bValue: 78,
                                gValue: 26,
                                aValue: 1
                            }
                        }, {
                            id: "a-48-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-48-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                xValue: .9,
                                yValue: .9,
                                locked: !0
                            }
                        }, {
                            id: "a-48-n-2",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                filters: [{
                                    type: "blur",
                                    filterId: "3376",
                                    value: 5,
                                    unit: "px"
                                }]
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-48-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-48-n-10",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                filters: [{
                                    type: "blur",
                                    filterId: "3376",
                                    value: 0,
                                    unit: "px"
                                }]
                            }
                        }, {
                            id: "a-48-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-48-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-48-n-7",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535"
                                },
                                globalSwatchId: "",
                                rValue: 14,
                                bValue: 78,
                                gValue: 26,
                                aValue: 0
                            }
                        }, {
                            id: "a-48-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 700,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".arrow-holder-join",
                                    selectorGuids: ["2f84567b-13e2-f414-fe12-e1c180081da0"]
                                },
                                xValue: -20,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1960cbb1184
                },
                "a-49": {
                    id: "a-49",
                    title: "Join Us -> Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-49-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-49-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".arrow-holder-join",
                                    selectorGuids: ["2f84567b-13e2-f414-fe12-e1c180081da0"]
                                },
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-49-n-3",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 600,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b78|8e8c8ed3-c1f7-0126-b7af-c665a5ff3535"
                                },
                                globalSwatchId: "--colors--element-stroke-color",
                                rValue: 14,
                                bValue: 78,
                                gValue: 26,
                                aValue: 1
                            }
                        }, {
                            id: "a-49-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 600,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-49-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                xValue: .9,
                                yValue: .9,
                                locked: !0
                            }
                        }, {
                            id: "a-49-n-6",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".join-us-bg",
                                    selectorGuids: ["58cf44bb-056f-196c-115b-d73c0bc36a6b"]
                                },
                                filters: [{
                                    type: "blur",
                                    filterId: "3376",
                                    value: 5,
                                    unit: "px"
                                }]
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1960cbb1184
                },
                "a-53": {
                    id: "a-53",
                    title: "Testimonial -> Open",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-53-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {},
                                value: "none"
                            }
                        }, {
                            id: "a-53-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                yValue: 50,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-53-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-53-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-53-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                xValue: .8,
                                yValue: .8,
                                locked: !0
                            }
                        }, {
                            id: "a-53-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-53-n-7",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {},
                                value: "flex"
                            }
                        }, {
                            id: "a-53-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-53-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "swingTo",
                                duration: 400,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-53-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-53-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 200,
                                easing: "outExpo",
                                duration: 800,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-53-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 200,
                                easing: "outExpo",
                                duration: 800,
                                target: {},
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19606821ba0
                },
                "a-54": {
                    id: "a-54",
                    title: "Testimonial -> Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-54-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {},
                                yValue: 50,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-54-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-54-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-54-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {},
                                xValue: .8,
                                yValue: .8,
                                locked: !0
                            }
                        }, {
                            id: "a-54-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-54-n-6",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 100,
                                easing: "outExpo",
                                duration: 0,
                                target: {},
                                value: "none"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19606821ba0
                },
                "a-59": {
                    id: "a-59",
                    title: "\uD83D\uDDC2Tab In View Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-59-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".active-line",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136bb"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-59-n-10",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".paragraph-wrapper",
                                    selectorGuids: ["efcc32d4-0528-0fb2-2030-fa5a45e05903"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-59-n-4",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739"
                                },
                                globalSwatchId: "--colors--element-color",
                                rValue: 223,
                                bValue: 249,
                                gValue: 231,
                                aValue: 1
                            }
                        }, {
                            id: "a-59-n-3",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".active-line",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136bb"]
                                },
                                globalSwatchId: "",
                                rValue: 166,
                                bValue: 251,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-59-n-7",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".paragraph",
                                    selectorGuids: ["620fe35d-59c7-ff43-bfd9-dfbb6ca46721"]
                                },
                                globalSwatchId: "--colors--accent-color",
                                rValue: 46,
                                bValue: 91,
                                gValue: 51,
                                aValue: 1
                            }
                        }, {
                            id: "a-59-n-6",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".feature-title",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136ba"]
                                },
                                globalSwatchId: "--colors--accent-color",
                                rValue: 46,
                                bValue: 91,
                                gValue: 51,
                                aValue: 1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-59-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".active-line",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136bb"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-59-n-5",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739"
                                },
                                globalSwatchId: "--colors--accent-color",
                                rValue: 46,
                                bValue: 91,
                                gValue: 51,
                                aValue: 1
                            }
                        }, {
                            id: "a-59-n-8",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".paragraph",
                                    selectorGuids: ["620fe35d-59c7-ff43-bfd9-dfbb6ca46721"]
                                },
                                globalSwatchId: "--colors--element-color",
                                rValue: 223,
                                bValue: 249,
                                gValue: 231,
                                aValue: 1
                            }
                        }, {
                            id: "a-59-n-9",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".feature-title",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136ba"]
                                },
                                globalSwatchId: "--colors--bg-color",
                                rValue: 245,
                                bValue: 253,
                                gValue: 244,
                                aValue: 1
                            }
                        }, {
                            id: "a-59-n-11",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".paragraph-wrapper",
                                    selectorGuids: ["efcc32d4-0528-0fb2-2030-fa5a45e05903"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x182fe47fb84
                },
                "a-60": {
                    id: "a-60",
                    title: "\uD83D\uDDC2Tab Out Of View Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-60-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".active-line",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136bb"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-60-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".paragraph-wrapper",
                                    selectorGuids: ["efcc32d4-0528-0fb2-2030-fa5a45e05903"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-60-n-3",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f82974e65f89a3c0ca8b77|fe88516e-bb79-a9b6-a24c-b69e39eed739"
                                },
                                globalSwatchId: "--colors--element-color",
                                rValue: 223,
                                bValue: 249,
                                gValue: 231,
                                aValue: 1
                            }
                        }, {
                            id: "a-60-n-4",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".active-line",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136bb"]
                                },
                                globalSwatchId: "",
                                rValue: 166,
                                bValue: 251,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-60-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".paragraph",
                                    selectorGuids: ["620fe35d-59c7-ff43-bfd9-dfbb6ca46721"]
                                },
                                globalSwatchId: "--colors--accent-color",
                                rValue: 46,
                                bValue: 91,
                                gValue: 51,
                                aValue: 1
                            }
                        }, {
                            id: "a-60-n-6",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".feature-title",
                                    selectorGuids: ["22106c57-c591-d12c-3776-de67fdc136ba"]
                                },
                                globalSwatchId: "--colors--accent-color",
                                rValue: 46,
                                bValue: 91,
                                gValue: 51,
                                aValue: 1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x182fe47fb84
                },
                "a-61": {
                    id: "a-61",
                    title: "Transparent Navbar -> Solid Navbar",
                    continuousParameterGroups: [{
                        id: "a-61-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-61-n-10",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .05
                                }
                            }, {
                                id: "a-61-n-11",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand-image",
                                        selectorGuids: ["a72a26a1-cfab-df0a-c805-815147f7e8d2"]
                                    },
                                    filters: [{
                                        type: "invert",
                                        filterId: "8494",
                                        value: 100,
                                        unit: "%"
                                    }]
                                }
                            }, {
                                id: "a-61-n-12",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-link",
                                        selectorGuids: ["648be50e-e418-48d7-460f-adf3576a3188"]
                                    },
                                    globalSwatchId: "--colors--bg-color",
                                    rValue: 245,
                                    bValue: 253,
                                    gValue: 244,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-13",
                                actionTypeId: "STYLE_BORDER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .08
                                }
                            }]
                        }, {
                            keyframe: 3,
                            actionItems: [{
                                id: "a-61-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .05
                                }
                            }, {
                                id: "a-61-n-3",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand-image",
                                        selectorGuids: ["a72a26a1-cfab-df0a-c805-815147f7e8d2"]
                                    },
                                    filters: [{
                                        type: "invert",
                                        filterId: "8494",
                                        value: 100,
                                        unit: "%"
                                    }]
                                }
                            }, {
                                id: "a-61-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-link",
                                        selectorGuids: ["648be50e-e418-48d7-460f-adf3576a3188"]
                                    },
                                    globalSwatchId: "--colors--bg-color",
                                    rValue: 245,
                                    bValue: 253,
                                    gValue: 244,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-5",
                                actionTypeId: "STYLE_BORDER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .08
                                }
                            }]
                        }, {
                            keyframe: 4,
                            actionItems: [{
                                id: "a-61-n-6",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "--colors--bg-color",
                                    rValue: 245,
                                    bValue: 253,
                                    gValue: 244,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-7",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand-image",
                                        selectorGuids: ["a72a26a1-cfab-df0a-c805-815147f7e8d2"]
                                    },
                                    filters: [{
                                        type: "invert",
                                        filterId: "8494",
                                        value: 0,
                                        unit: "%"
                                    }]
                                }
                            }, {
                                id: "a-61-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-link",
                                        selectorGuids: ["648be50e-e418-48d7-460f-adf3576a3188"]
                                    },
                                    globalSwatchId: "--colors--accent-color",
                                    rValue: 46,
                                    bValue: 91,
                                    gValue: 51,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-9",
                                actionTypeId: "STYLE_BORDER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "--colors--acent-color-low",
                                    rValue: 46,
                                    bValue: 91,
                                    gValue: 51,
                                    aValue: .4
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x19659c17d75
                },
                "a-63": {
                    id: "a-63",
                    title: "Slider -> In View",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-63-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 40,
                                yValue: -40,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-63-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 1.2,
                                yValue: 1.2,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-63-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 40,
                                yValue: -40,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-63-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 1.2,
                                yValue: 1.2,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1965a52e2d0
                },
                "a-64": {
                    id: "a-64",
                    title: "Slider -> Out of View",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-64-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-64-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 100,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-64-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-64-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 1200,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slider-wrapper",
                                    selectorGuids: ["8d50ed0e-5de5-a651-0313-a91671969ca4"]
                                },
                                xValue: 100,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1965a52e2d0
                },
                "a-65": {
                    id: "a-65",
                    title: "Hero Animation -> While Scrolling Mobile",
                    continuousParameterGroups: [{
                        id: "a-65-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 9,
                            actionItems: [{
                                id: "a-65-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-65-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".content-holder",
                                        selectorGuids: ["bd3d9a21-e8b0-9310-4e46-5adb512dfa34"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".full-image",
                                        selectorGuids: ["f00a0e1b-e5a5-59a8-7ef3-41f1373f7e3f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-65-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    xValue: -260,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 23,
                            actionItems: [{
                                id: "a-65-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-65-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".content-holder",
                                        selectorGuids: ["bd3d9a21-e8b0-9310-4e46-5adb512dfa34"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blue-blur",
                                        selectorGuids: ["d3e51f9e-bb4d-be67-b30c-0c3b9952e4d1"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-65-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 0,
                                    yValue: 290,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-65-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    yValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-65-n-17",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-65-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 42,
                            actionItems: [{
                                id: "a-65-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".full-image",
                                        selectorGuids: ["f00a0e1b-e5a5-59a8-7ef3-41f1373f7e3f"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blue-blur",
                                        selectorGuids: ["d3e51f9e-bb4d-be67-b30c-0c3b9952e4d1"]
                                    },
                                    value: .2,
                                    unit: ""
                                }
                            }, {
                                id: "a-65-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 0,
                                    yValue: 350,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-16",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    yValue: -28,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-65-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-65-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: 0,
                                    yValue: 900,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-65-n-21",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dashobard-wrapper",
                                        selectorGuids: ["0383892d-124b-5537-3d7b-674f792c71d0"]
                                    },
                                    xValue: null,
                                    yValue: -45,
                                    zValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-65-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".feature-grid-content-holder-2",
                                        selectorGuids: ["10f04124-abca-fa38-e111-31a5e6b6de7f"]
                                    },
                                    xValue: 0,
                                    yValue: 380,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x186231a0840
                },
                "a-66": {
                    id: "a-66",
                    title: "Transparent Navbar -> Solid Navbar Mobile",
                    continuousParameterGroups: [{
                        id: "a-66-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-66-n-11",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .05
                                }
                            }, {
                                id: "a-66-n-12",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand-image",
                                        selectorGuids: ["a72a26a1-cfab-df0a-c805-815147f7e8d2"]
                                    },
                                    filters: [{
                                        type: "invert",
                                        filterId: "8494",
                                        value: 100,
                                        unit: "%"
                                    }]
                                }
                            }, {
                                id: "a-66-n-13",
                                actionTypeId: "STYLE_BORDER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .08
                                }
                            }, {
                                id: "a-66-n-14",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu-button",
                                        selectorGuids: ["63913273-9f65-63a4-d681-de845d79a2dd"]
                                    },
                                    globalSwatchId: "--colors--bg-color",
                                    rValue: 245,
                                    bValue: 253,
                                    gValue: 244,
                                    aValue: 1
                                }
                            }]
                        }, {
                            keyframe: 3,
                            actionItems: [{
                                id: "a-66-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .05
                                }
                            }, {
                                id: "a-66-n-2",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand-image",
                                        selectorGuids: ["a72a26a1-cfab-df0a-c805-815147f7e8d2"]
                                    },
                                    filters: [{
                                        type: "invert",
                                        filterId: "8494",
                                        value: 100,
                                        unit: "%"
                                    }]
                                }
                            }, {
                                id: "a-66-n-4",
                                actionTypeId: "STYLE_BORDER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .08
                                }
                            }, {
                                id: "a-66-n-9",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu-button",
                                        selectorGuids: ["63913273-9f65-63a4-d681-de845d79a2dd"]
                                    },
                                    globalSwatchId: "--colors--bg-color",
                                    rValue: 245,
                                    bValue: 253,
                                    gValue: 244,
                                    aValue: 1
                                }
                            }]
                        }, {
                            keyframe: 4,
                            actionItems: [{
                                id: "a-66-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "--colors--bg-color",
                                    rValue: 245,
                                    bValue: 253,
                                    gValue: 244,
                                    aValue: 1
                                }
                            }, {
                                id: "a-66-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand-image",
                                        selectorGuids: ["a72a26a1-cfab-df0a-c805-815147f7e8d2"]
                                    },
                                    filters: [{
                                        type: "invert",
                                        filterId: "8494",
                                        value: 0,
                                        unit: "%"
                                    }]
                                }
                            }, {
                                id: "a-66-n-8",
                                actionTypeId: "STYLE_BORDER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navbar",
                                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
                                    },
                                    globalSwatchId: "--colors--acent-color-low",
                                    rValue: 46,
                                    bValue: 91,
                                    gValue: 51,
                                    aValue: .4
                                }
                            }, {
                                id: "a-66-n-10",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu-button",
                                        selectorGuids: ["63913273-9f65-63a4-d681-de845d79a2dd"]
                                    },
                                    globalSwatchId: "--colors--font-color",
                                    rValue: 46,
                                    bValue: 91,
                                    gValue: 51,
                                    aValue: 1
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x19659c17d75
                },
                "a-58": {
                    id: "a-58",
                    title: "⌚️ Apple Watch Animation While Scrolling",
                    continuousParameterGroups: [{
                        id: "a-58-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-58-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hand-holder",
                                        selectorGuids: ["1c6ca3ca-3019-b0ca-bf4b-6f45c734e72a"]
                                    },
                                    xValue: null,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-58-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".center-hand-text",
                                        selectorGuids: ["427aac75-9216-0f52-825b-8fd8105dff11"]
                                    },
                                    yValue: 140,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 55,
                            actionItems: [{
                                id: "a-58-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hand-holder",
                                        selectorGuids: ["1c6ca3ca-3019-b0ca-bf4b-6f45c734e72a"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-58-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".center-hand-text",
                                        selectorGuids: ["427aac75-9216-0f52-825b-8fd8105dff11"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x1836539a834
                },
                slideInBottom: {
                    id: "slideInBottom",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }]
                    }]
                },
                fadeIn: {
                    id: "fadeIn",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }]
                    }]
                },
                slideInRight: {
                    id: "slideInRight",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }, {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }]
                },
                slideInLeft: {
                    id: "slideInLeft",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: -100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }, {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }]
                },
                shrinkIn: {
                    id: "shrinkIn",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 1.25,
                                yValue: 1.25
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 1,
                                yValue: 1
                            }
                        }, {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }]
                    }]
                }
            },
            site: {
                mediaQueries: [{
                    key: "main",
                    min: 992,
                    max: 1e4
                }, {
                    key: "medium",
                    min: 768,
                    max: 991
                }, {
                    key: "small",
                    min: 480,
                    max: 767
                }, {
                    key: "tiny",
                    min: 0,
                    max: 479
                }]
            }
        })
    }
}]);
