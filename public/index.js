function Lf(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const s in n)
                if (s !== "default" && !(s in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, s);
                    i && Object.defineProperty(e, s, i.get ? i : {
                        enumerable: !0,
                        get: () => n[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = r(s);
        fetch(s.href, i)
    }
}
)();
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function $f(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(n) {
        var s = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }),
    r
}
var Pc = {
    exports: {}
}
  , xi = {}
  , Cc = {
    exports: {}
}
  , I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts = Symbol.for("react.element")
  , If = Symbol.for("react.portal")
  , Df = Symbol.for("react.fragment")
  , Af = Symbol.for("react.strict_mode")
  , Mf = Symbol.for("react.profiler")
  , Uf = Symbol.for("react.provider")
  , zf = Symbol.for("react.context")
  , Ff = Symbol.for("react.forward_ref")
  , Bf = Symbol.for("react.suspense")
  , Wf = Symbol.for("react.memo")
  , Vf = Symbol.for("react.lazy")
  , Ul = Symbol.iterator;
function Hf(e) {
    return e === null || typeof e != "object" ? null : (e = Ul && e[Ul] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Tc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Oc = Object.assign
  , Rc = {};
function Zr(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Rc,
    this.updater = r || Tc
}
Zr.prototype.isReactComponent = {};
Zr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Zr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Lc() {}
Lc.prototype = Zr.prototype;
function Ia(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Rc,
    this.updater = r || Tc
}
var Da = Ia.prototype = new Lc;
Da.constructor = Ia;
Oc(Da, Zr.prototype);
Da.isPureReactComponent = !0;
var zl = Array.isArray
  , $c = Object.prototype.hasOwnProperty
  , Aa = {
    current: null
}
  , Ic = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dc(e, t, r) {
    var n, s = {}, i = null, o = null;
    if (t != null)
        for (n in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            $c.call(t, n) && !Ic.hasOwnProperty(n) && (s[n] = t[n]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = r;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (n in a = e.defaultProps,
        a)
            s[n] === void 0 && (s[n] = a[n]);
    return {
        $$typeof: ts,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Aa.current
    }
}
function qf(e, t) {
    return {
        $$typeof: ts,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ma(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ts
}
function Yf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var Fl = /\/+/g;
function Ki(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Yf("" + e.key) : t.toString(36)
}
function $s(e, t, r, n, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ts:
            case If:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = n === "" ? "." + Ki(o, 0) : n,
        zl(s) ? (r = "",
        e != null && (r = e.replace(Fl, "$&/") + "/"),
        $s(s, t, r, "", function(c) {
            return c
        })) : s != null && (Ma(s) && (s = qf(s, r + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Fl, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    n = n === "" ? "." : n + ":",
    zl(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = n + Ki(i, a);
            o += $s(i, t, r, l, s)
        }
    else if (l = Hf(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = n + Ki(i, a++),
            o += $s(i, t, r, l, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function hs(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , s = 0;
    return $s(e, n, "", "", function(i) {
        return t.call(r, i, s++)
    }),
    n
}
function Jf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ye = {
    current: null
}
  , Is = {
    transition: null
}
  , Qf = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Is,
    ReactCurrentOwner: Aa
};
function Ac() {
    throw Error("act(...) is not supported in production builds of React.")
}
I.Children = {
    map: hs,
    forEach: function(e, t, r) {
        hs(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return hs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return hs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ma(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = Zr;
I.Fragment = Df;
I.Profiler = Mf;
I.PureComponent = Ia;
I.StrictMode = Af;
I.Suspense = Bf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf;
I.act = Ac;
I.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = Oc({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Aa.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            $c.call(t, l) && !Ic.hasOwnProperty(l) && (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        n.children = a
    }
    return {
        $$typeof: ts,
        type: e.type,
        key: s,
        ref: i,
        props: n,
        _owner: o
    }
}
;
I.createContext = function(e) {
    return e = {
        $$typeof: zf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Uf,
        _context: e
    },
    e.Consumer = e
}
;
I.createElement = Dc;
I.createFactory = function(e) {
    var t = Dc.bind(null, e);
    return t.type = e,
    t
}
;
I.createRef = function() {
    return {
        current: null
    }
}
;
I.forwardRef = function(e) {
    return {
        $$typeof: Ff,
        render: e
    }
}
;
I.isValidElement = Ma;
I.lazy = function(e) {
    return {
        $$typeof: Vf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Jf
    }
}
;
I.memo = function(e, t) {
    return {
        $$typeof: Wf,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
I.startTransition = function(e) {
    var t = Is.transition;
    Is.transition = {};
    try {
        e()
    } finally {
        Is.transition = t
    }
}
;
I.unstable_act = Ac;
I.useCallback = function(e, t) {
    return ye.current.useCallback(e, t)
}
;
I.useContext = function(e) {
    return ye.current.useContext(e)
}
;
I.useDebugValue = function() {}
;
I.useDeferredValue = function(e) {
    return ye.current.useDeferredValue(e)
}
;
I.useEffect = function(e, t) {
    return ye.current.useEffect(e, t)
}
;
I.useId = function() {
    return ye.current.useId()
}
;
I.useImperativeHandle = function(e, t, r) {
    return ye.current.useImperativeHandle(e, t, r)
}
;
I.useInsertionEffect = function(e, t) {
    return ye.current.useInsertionEffect(e, t)
}
;
I.useLayoutEffect = function(e, t) {
    return ye.current.useLayoutEffect(e, t)
}
;
I.useMemo = function(e, t) {
    return ye.current.useMemo(e, t)
}
;
I.useReducer = function(e, t, r) {
    return ye.current.useReducer(e, t, r)
}
;
I.useRef = function(e) {
    return ye.current.useRef(e)
}
;
I.useState = function(e) {
    return ye.current.useState(e)
}
;
I.useSyncExternalStore = function(e, t, r) {
    return ye.current.useSyncExternalStore(e, t, r)
}
;
I.useTransition = function() {
    return ye.current.useTransition()
}
;
I.version = "18.3.1";
Cc.exports = I;
var k = Cc.exports;
const Ua = Nc(k)
  , Gf = Lf({
    __proto__: null,
    default: Ua
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kf = k
  , Xf = Symbol.for("react.element")
  , Zf = Symbol.for("react.fragment")
  , ep = Object.prototype.hasOwnProperty
  , tp = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , rp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mc(e, t, r) {
    var n, s = {}, i = null, o = null;
    r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (n in t)
        ep.call(t, n) && !rp.hasOwnProperty(n) && (s[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps,
        t)
            s[n] === void 0 && (s[n] = t[n]);
    return {
        $$typeof: Xf,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: tp.current
    }
}
xi.Fragment = Zf;
xi.jsx = Mc;
xi.jsxs = Mc;
Pc.exports = xi;
var u = Pc.exports
  , Uc = {
    exports: {}
}
  , Re = {}
  , zc = {
    exports: {}
}
  , Fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, O) {
        var L = C.length;
        C.push(O);
        e: for (; 0 < L; ) {
            var X = L - 1 >>> 1
              , ie = C[X];
            if (0 < s(ie, O))
                C[X] = O,
                C[L] = ie,
                L = X;
            else
                break e
        }
    }
    function r(C) {
        return C.length === 0 ? null : C[0]
    }
    function n(C) {
        if (C.length === 0)
            return null;
        var O = C[0]
          , L = C.pop();
        if (L !== O) {
            C[0] = L;
            e: for (var X = 0, ie = C.length, cs = ie >>> 1; X < cs; ) {
                var Ht = 2 * (X + 1) - 1
                  , Gi = C[Ht]
                  , qt = Ht + 1
                  , ds = C[qt];
                if (0 > s(Gi, L))
                    qt < ie && 0 > s(ds, Gi) ? (C[X] = ds,
                    C[qt] = L,
                    X = qt) : (C[X] = Gi,
                    C[Ht] = L,
                    X = Ht);
                else if (qt < ie && 0 > s(ds, L))
                    C[X] = ds,
                    C[qt] = L,
                    X = qt;
                else
                    break e
            }
        }
        return O
    }
    function s(C, O) {
        var L = C.sortIndex - O.sortIndex;
        return L !== 0 ? L : C.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , c = []
      , d = 1
      , h = null
      , f = 3
      , w = !1
      , p = !1
      , y = !1
      , b = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(C) {
        for (var O = r(c); O !== null; ) {
            if (O.callback === null)
                n(c);
            else if (O.startTime <= C)
                n(c),
                O.sortIndex = O.expirationTime,
                t(l, O);
            else
                break;
            O = r(c)
        }
    }
    function x(C) {
        if (y = !1,
        v(C),
        !p)
            if (r(l) !== null)
                p = !0,
                Ji(S);
            else {
                var O = r(c);
                O !== null && Qi(x, O.startTime - C)
            }
    }
    function S(C, O) {
        p = !1,
        y && (y = !1,
        m(E),
        E = -1),
        w = !0;
        var L = f;
        try {
            for (v(O),
            h = r(l); h !== null && (!(h.expirationTime > O) || C && !T()); ) {
                var X = h.callback;
                if (typeof X == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var ie = X(h.expirationTime <= O);
                    O = e.unstable_now(),
                    typeof ie == "function" ? h.callback = ie : h === r(l) && n(l),
                    v(O)
                } else
                    n(l);
                h = r(l)
            }
            if (h !== null)
                var cs = !0;
            else {
                var Ht = r(c);
                Ht !== null && Qi(x, Ht.startTime - O),
                cs = !1
            }
            return cs
        } finally {
            h = null,
            f = L,
            w = !1
        }
    }
    var N = !1
      , _ = null
      , E = -1
      , D = 5
      , $ = -1;
    function T() {
        return !(e.unstable_now() - $ < D)
    }
    function re() {
        if (_ !== null) {
            var C = e.unstable_now();
            $ = C;
            var O = !0;
            try {
                O = _(!0, C)
            } finally {
                O ? Vt() : (N = !1,
                _ = null)
            }
        } else
            N = !1
    }
    var Vt;
    if (typeof g == "function")
        Vt = function() {
            g(re)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Ml = new MessageChannel
          , Rf = Ml.port2;
        Ml.port1.onmessage = re,
        Vt = function() {
            Rf.postMessage(null)
        }
    } else
        Vt = function() {
            b(re, 0)
        }
        ;
    function Ji(C) {
        _ = C,
        N || (N = !0,
        Vt())
    }
    function Qi(C, O) {
        E = b(function() {
            C(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        p || w || (p = !0,
        Ji(S))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    e.unstable_next = function(C) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = f
        }
        var L = f;
        f = O;
        try {
            return C()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, O) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var L = f;
        f = C;
        try {
            return O()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, O, L) {
        var X = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? X + L : X) : L = X,
        C) {
        case 1:
            var ie = -1;
            break;
        case 2:
            ie = 250;
            break;
        case 5:
            ie = 1073741823;
            break;
        case 4:
            ie = 1e4;
            break;
        default:
            ie = 5e3
        }
        return ie = L + ie,
        C = {
            id: d++,
            callback: O,
            priorityLevel: C,
            startTime: L,
            expirationTime: ie,
            sortIndex: -1
        },
        L > X ? (C.sortIndex = L,
        t(c, C),
        r(l) === null && C === r(c) && (y ? (m(E),
        E = -1) : y = !0,
        Qi(x, L - X))) : (C.sortIndex = ie,
        t(l, C),
        p || w || (p = !0,
        Ji(S))),
        C
    }
    ,
    e.unstable_shouldYield = T,
    e.unstable_wrapCallback = function(C) {
        var O = f;
        return function() {
            var L = f;
            f = O;
            try {
                return C.apply(this, arguments)
            } finally {
                f = L
            }
        }
    }
}
)(Fc);
zc.exports = Fc;
var np = zc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp = k
  , Oe = np;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Bc = new Set
  , $n = {};
function cr(e, t) {
    zr(e, t),
    zr(e + "Capture", t)
}
function zr(e, t) {
    for ($n[e] = t,
    e = 0; e < t.length; e++)
        Bc.add(t[e])
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Lo = Object.prototype.hasOwnProperty
  , ip = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Bl = {}
  , Wl = {};
function op(e) {
    return Lo.call(Wl, e) ? !0 : Lo.call(Bl, e) ? !1 : ip.test(e) ? Wl[e] = !0 : (Bl[e] = !0,
    !1)
}
function ap(e, t, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function lp(e, t, r, n) {
    if (t === null || typeof t > "u" || ap(e, t, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function we(e, t, r, n, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = s,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    de[e] = new we(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    de[t] = new we(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    de[e] = new we(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    de[e] = new we(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    de[e] = new we(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    de[e] = new we(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    de[e] = new we(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    de[e] = new we(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    de[e] = new we(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var za = /[\-:]([a-z])/g;
function Fa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(za, Fa);
    de[t] = new we(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(za, Fa);
    de[t] = new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(za, Fa);
    de[t] = new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    de[e] = new we(e,1,!1,e.toLowerCase(),null,!1,!1)
});
de.xlinkHref = new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    de[e] = new we(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ba(e, t, r, n) {
    var s = de.hasOwnProperty(t) ? de[t] : null;
    (s !== null ? s.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lp(t, r, s, n) && (r = null),
    n || s === null ? op(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : s.mustUseProperty ? e[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (t = s.attributeName,
    n = s.attributeNamespace,
    r === null ? e.removeAttribute(t) : (s = s.type,
    r = s === 3 || s === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var mt = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , fs = Symbol.for("react.element")
  , _r = Symbol.for("react.portal")
  , kr = Symbol.for("react.fragment")
  , Wa = Symbol.for("react.strict_mode")
  , $o = Symbol.for("react.profiler")
  , Wc = Symbol.for("react.provider")
  , Vc = Symbol.for("react.context")
  , Va = Symbol.for("react.forward_ref")
  , Io = Symbol.for("react.suspense")
  , Do = Symbol.for("react.suspense_list")
  , Ha = Symbol.for("react.memo")
  , xt = Symbol.for("react.lazy")
  , Hc = Symbol.for("react.offscreen")
  , Vl = Symbol.iterator;
function on(e) {
    return e === null || typeof e != "object" ? null : (e = Vl && e[Vl] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var J = Object.assign, Xi;
function yn(e) {
    if (Xi === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Xi = t && t[1] || ""
        }
    return `
` + Xi + e
}
var Zi = !1;
function eo(e, t) {
    if (!e || Zi)
        return "";
    Zi = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var n = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    n = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                n = c
            }
            e()
        }
    } catch (c) {
        if (c && n && typeof c.stack == "string") {
            for (var s = c.stack.split(`
`), i = n.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Zi = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? yn(e) : ""
}
function up(e) {
    switch (e.tag) {
    case 5:
        return yn(e.type);
    case 16:
        return yn("Lazy");
    case 13:
        return yn("Suspense");
    case 19:
        return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = eo(e.type, !1),
        e;
    case 11:
        return e = eo(e.type.render, !1),
        e;
    case 1:
        return e = eo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ao(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case kr:
        return "Fragment";
    case _r:
        return "Portal";
    case $o:
        return "Profiler";
    case Wa:
        return "StrictMode";
    case Io:
        return "Suspense";
    case Do:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Vc:
            return (e.displayName || "Context") + ".Consumer";
        case Wc:
            return (e._context.displayName || "Context") + ".Provider";
        case Va:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ha:
            return t = e.displayName || null,
            t !== null ? t : Ao(e.type) || "Memo";
        case xt:
            t = e._payload,
            e = e._init;
            try {
                return Ao(e(t))
            } catch {}
        }
    return null
}
function cp(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ao(t);
    case 8:
        return t === Wa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Mt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function qc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function dp(e) {
    var t = qc(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var s = r.get
          , i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                n = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(o) {
                n = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ps(e) {
    e._valueTracker || (e._valueTracker = dp(e))
}
function Yc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , n = "";
    return e && (n = qc(e) ? e.checked ? "true" : "false" : e.value),
    e = n,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function qs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Mo(e, t) {
    var r = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function Hl(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = Mt(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Jc(e, t) {
    t = t.checked,
    t != null && Ba(e, "checked", t, !1)
}
function Uo(e, t) {
    Jc(e, t);
    var r = Mt(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? zo(e, t.type, r) : t.hasOwnProperty("defaultValue") && zo(e, t.type, Mt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ql(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function zo(e, t, r) {
    (t !== "number" || qs(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var wn = Array.isArray;
function Lr(e, t, r, n) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < r.length; s++)
            t["$" + r[s]] = !0;
        for (r = 0; r < e.length; r++)
            s = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== s && (e[r].selected = s),
            s && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + Mt(r),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === r) {
                e[s].selected = !0,
                n && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function Fo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Yl(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(j(92));
            if (wn(r)) {
                if (1 < r.length)
                    throw Error(j(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: Mt(r)
    }
}
function Qc(e, t) {
    var r = Mt(t.value)
      , n = Mt(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function Jl(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Gc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Bo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ms, Kc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ms = ms || document.createElement("div"),
        ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ms.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function In(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Sn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , hp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sn).forEach(function(e) {
    hp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Sn[t] = Sn[e]
    })
});
function Xc(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Sn.hasOwnProperty(e) && Sn[e] ? ("" + t).trim() : t + "px"
}
function Zc(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , s = Xc(r, t[r], n);
            r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, s) : e[r] = s
        }
}
var fp = J({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Wo(e, t) {
    if (t) {
        if (fp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Vo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ho = null;
function qa(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var qo = null
  , $r = null
  , Ir = null;
function Ql(e) {
    if (e = ss(e)) {
        if (typeof qo != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = ji(t),
        qo(e.stateNode, e.type, t))
    }
}
function ed(e) {
    $r ? Ir ? Ir.push(e) : Ir = [e] : $r = e
}
function td() {
    if ($r) {
        var e = $r
          , t = Ir;
        if (Ir = $r = null,
        Ql(e),
        t)
            for (e = 0; e < t.length; e++)
                Ql(t[e])
    }
}
function rd(e, t) {
    return e(t)
}
function nd() {}
var to = !1;
function sd(e, t, r) {
    if (to)
        return e(t, r);
    to = !0;
    try {
        return rd(e, t, r)
    } finally {
        to = !1,
        ($r !== null || Ir !== null) && (nd(),
        td())
    }
}
function Dn(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = ji(r);
    if (n === null)
        return null;
    r = n[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (e = e.type,
        n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !n;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(j(231, t, typeof r));
    return r
}
var Yo = !1;
if (ct)
    try {
        var an = {};
        Object.defineProperty(an, "passive", {
            get: function() {
                Yo = !0
            }
        }),
        window.addEventListener("test", an, an),
        window.removeEventListener("test", an, an)
    } catch {
        Yo = !1
    }
function pp(e, t, r, n, s, i, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, c)
    } catch (d) {
        this.onError(d)
    }
}
var bn = !1
  , Ys = null
  , Js = !1
  , Jo = null
  , mp = {
    onError: function(e) {
        bn = !0,
        Ys = e
    }
};
function gp(e, t, r, n, s, i, o, a, l) {
    bn = !1,
    Ys = null,
    pp.apply(mp, arguments)
}
function vp(e, t, r, n, s, i, o, a, l) {
    if (gp.apply(this, arguments),
    bn) {
        if (bn) {
            var c = Ys;
            bn = !1,
            Ys = null
        } else
            throw Error(j(198));
        Js || (Js = !0,
        Jo = c)
    }
}
function dr(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function id(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Gl(e) {
    if (dr(e) !== e)
        throw Error(j(188))
}
function yp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = dr(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var s = r.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (n = s.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === r)
                    return Gl(s),
                    e;
                if (i === n)
                    return Gl(s),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (r.return !== n.return)
            r = s,
            n = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(j(189))
            }
        }
        if (r.alternate !== n)
            throw Error(j(190))
    }
    if (r.tag !== 3)
        throw Error(j(188));
    return r.stateNode.current === r ? e : t
}
function od(e) {
    return e = yp(e),
    e !== null ? ad(e) : null
}
function ad(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ad(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ld = Oe.unstable_scheduleCallback
  , Kl = Oe.unstable_cancelCallback
  , wp = Oe.unstable_shouldYield
  , xp = Oe.unstable_requestPaint
  , Z = Oe.unstable_now
  , _p = Oe.unstable_getCurrentPriorityLevel
  , Ya = Oe.unstable_ImmediatePriority
  , ud = Oe.unstable_UserBlockingPriority
  , Qs = Oe.unstable_NormalPriority
  , kp = Oe.unstable_LowPriority
  , cd = Oe.unstable_IdlePriority
  , _i = null
  , et = null;
function Sp(e) {
    if (et && typeof et.onCommitFiberRoot == "function")
        try {
            et.onCommitFiberRoot(_i, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Ep
  , bp = Math.log
  , jp = Math.LN2;
function Ep(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (bp(e) / jp | 0) | 0
}
var gs = 64
  , vs = 4194304;
function xn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Gs(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = r & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? n = xn(a) : (i &= o,
        i !== 0 && (n = xn(i)))
    } else
        o = r & ~s,
        o !== 0 ? n = xn(o) : i !== 0 && (n = xn(i));
    if (n === 0)
        return 0;
    if (t !== 0 && t !== n && !(t & s) && (s = n & -n,
    i = t & -t,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (n & 4 && (n |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= n; 0 < t; )
            r = 31 - qe(t),
            s = 1 << r,
            n |= e[r],
            t &= ~s;
    return n
}
function Np(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Pp(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - qe(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & r) || a & n) && (s[o] = Np(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Qo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function dd() {
    var e = gs;
    return gs <<= 1,
    !(gs & 4194240) && (gs = 64),
    e
}
function ro(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function rs(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - qe(t),
    e[t] = r
}
function Cp(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var s = 31 - qe(r)
          , i = 1 << s;
        t[s] = 0,
        n[s] = -1,
        e[s] = -1,
        r &= ~i
    }
}
function Ja(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - qe(r)
          , s = 1 << n;
        s & t | e[n] & t && (e[n] |= t),
        r &= ~s
    }
}
var z = 0;
function hd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var fd, Qa, pd, md, gd, Go = !1, ys = [], Ct = null, Tt = null, Ot = null, An = new Map, Mn = new Map, St = [], Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xl(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ct = null;
        break;
    case "dragenter":
    case "dragleave":
        Tt = null;
        break;
    case "mouseover":
    case "mouseout":
        Ot = null;
        break;
    case "pointerover":
    case "pointerout":
        An.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Mn.delete(t.pointerId)
    }
}
function ln(e, t, r, n, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s]
    },
    t !== null && (t = ss(t),
    t !== null && Qa(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function Op(e, t, r, n, s) {
    switch (t) {
    case "focusin":
        return Ct = ln(Ct, e, t, r, n, s),
        !0;
    case "dragenter":
        return Tt = ln(Tt, e, t, r, n, s),
        !0;
    case "mouseover":
        return Ot = ln(Ot, e, t, r, n, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return An.set(i, ln(An.get(i) || null, e, t, r, n, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Mn.set(i, ln(Mn.get(i) || null, e, t, r, n, s)),
        !0
    }
    return !1
}
function vd(e) {
    var t = Zt(e.target);
    if (t !== null) {
        var r = dr(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = id(r),
                t !== null) {
                    e.blockedOn = t,
                    gd(e.priority, function() {
                        pd(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ds(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            Ho = n,
            r.target.dispatchEvent(n),
            Ho = null
        } else
            return t = ss(r),
            t !== null && Qa(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function Zl(e, t, r) {
    Ds(e) && r.delete(t)
}
function Rp() {
    Go = !1,
    Ct !== null && Ds(Ct) && (Ct = null),
    Tt !== null && Ds(Tt) && (Tt = null),
    Ot !== null && Ds(Ot) && (Ot = null),
    An.forEach(Zl),
    Mn.forEach(Zl)
}
function un(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Go || (Go = !0,
    Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Rp)))
}
function Un(e) {
    function t(s) {
        return un(s, e)
    }
    if (0 < ys.length) {
        un(ys[0], e);
        for (var r = 1; r < ys.length; r++) {
            var n = ys[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Ct !== null && un(Ct, e),
    Tt !== null && un(Tt, e),
    Ot !== null && un(Ot, e),
    An.forEach(t),
    Mn.forEach(t),
    r = 0; r < St.length; r++)
        n = St[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < St.length && (r = St[0],
    r.blockedOn === null); )
        vd(r),
        r.blockedOn === null && St.shift()
}
var Dr = mt.ReactCurrentBatchConfig
  , Ks = !0;
function Lp(e, t, r, n) {
    var s = z
      , i = Dr.transition;
    Dr.transition = null;
    try {
        z = 1,
        Ga(e, t, r, n)
    } finally {
        z = s,
        Dr.transition = i
    }
}
function $p(e, t, r, n) {
    var s = z
      , i = Dr.transition;
    Dr.transition = null;
    try {
        z = 4,
        Ga(e, t, r, n)
    } finally {
        z = s,
        Dr.transition = i
    }
}
function Ga(e, t, r, n) {
    if (Ks) {
        var s = Ko(e, t, r, n);
        if (s === null)
            fo(e, t, n, Xs, r),
            Xl(e, n);
        else if (Op(s, e, t, r, n))
            n.stopPropagation();
        else if (Xl(e, n),
        t & 4 && -1 < Tp.indexOf(e)) {
            for (; s !== null; ) {
                var i = ss(s);
                if (i !== null && fd(i),
                i = Ko(e, t, r, n),
                i === null && fo(e, t, n, Xs, r),
                i === s)
                    break;
                s = i
            }
            s !== null && n.stopPropagation()
        } else
            fo(e, t, n, null, r)
    }
}
var Xs = null;
function Ko(e, t, r, n) {
    if (Xs = null,
    e = qa(n),
    e = Zt(e),
    e !== null)
        if (t = dr(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = id(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Xs = e,
    null
}
function yd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (_p()) {
        case Ya:
            return 1;
        case ud:
            return 4;
        case Qs:
        case kp:
            return 16;
        case cd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Et = null
  , Ka = null
  , As = null;
function wd() {
    if (As)
        return As;
    var e, t = Ka, r = t.length, n, s = "value"in Et ? Et.value : Et.textContent, i = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++)
        ;
    var o = r - e;
    for (n = 1; n <= o && t[r - n] === s[i - n]; n++)
        ;
    return As = s.slice(e, 1 < n ? 1 - n : void 0)
}
function Ms(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ws() {
    return !0
}
function eu() {
    return !1
}
function Le(e) {
    function t(r, n, s, i, o) {
        this._reactName = r,
        this._targetInst = s,
        this.type = n,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (r = e[a],
            this[a] = r ? r(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ws : eu,
        this.isPropagationStopped = eu,
        this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = ws)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = ws)
        },
        persist: function() {},
        isPersistent: ws
    }),
    t
}
var en = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Xa = Le(en), ns = J({}, en, {
    view: 0,
    detail: 0
}), Ip = Le(ns), no, so, cn, ki = J({}, ns, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Za,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== cn && (cn && e.type === "mousemove" ? (no = e.screenX - cn.screenX,
        so = e.screenY - cn.screenY) : so = no = 0,
        cn = e),
        no)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : so
    }
}), tu = Le(ki), Dp = J({}, ki, {
    dataTransfer: 0
}), Ap = Le(Dp), Mp = J({}, ns, {
    relatedTarget: 0
}), io = Le(Mp), Up = J({}, en, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), zp = Le(Up), Fp = J({}, en, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Bp = Le(Fp), Wp = J({}, en, {
    data: 0
}), ru = Le(Wp), Vp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Hp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Yp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qp[e]) ? !!t[e] : !1
}
function Za() {
    return Yp
}
var Jp = J({}, ns, {
    key: function(e) {
        if (e.key) {
            var t = Vp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ms(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hp[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Za,
    charCode: function(e) {
        return e.type === "keypress" ? Ms(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Qp = Le(Jp)
  , Gp = J({}, ki, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , nu = Le(Gp)
  , Kp = J({}, ns, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Za
})
  , Xp = Le(Kp)
  , Zp = J({}, en, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , em = Le(Zp)
  , tm = J({}, ki, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , rm = Le(tm)
  , nm = [9, 13, 27, 32]
  , el = ct && "CompositionEvent"in window
  , jn = null;
ct && "documentMode"in document && (jn = document.documentMode);
var sm = ct && "TextEvent"in window && !jn
  , xd = ct && (!el || jn && 8 < jn && 11 >= jn)
  , su = " "
  , iu = !1;
function _d(e, t) {
    switch (e) {
    case "keyup":
        return nm.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function kd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Sr = !1;
function im(e, t) {
    switch (e) {
    case "compositionend":
        return kd(t);
    case "keypress":
        return t.which !== 32 ? null : (iu = !0,
        su);
    case "textInput":
        return e = t.data,
        e === su && iu ? null : e;
    default:
        return null
    }
}
function om(e, t) {
    if (Sr)
        return e === "compositionend" || !el && _d(e, t) ? (e = wd(),
        As = Ka = Et = null,
        Sr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return xd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var am = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!am[e.type] : t === "textarea"
}
function Sd(e, t, r, n) {
    ed(n),
    t = Zs(t, "onChange"),
    0 < t.length && (r = new Xa("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var En = null
  , zn = null;
function lm(e) {
    $d(e, 0)
}
function Si(e) {
    var t = Er(e);
    if (Yc(t))
        return e
}
function um(e, t) {
    if (e === "change")
        return t
}
var bd = !1;
if (ct) {
    var oo;
    if (ct) {
        var ao = "oninput"in document;
        if (!ao) {
            var au = document.createElement("div");
            au.setAttribute("oninput", "return;"),
            ao = typeof au.oninput == "function"
        }
        oo = ao
    } else
        oo = !1;
    bd = oo && (!document.documentMode || 9 < document.documentMode)
}
function lu() {
    En && (En.detachEvent("onpropertychange", jd),
    zn = En = null)
}
function jd(e) {
    if (e.propertyName === "value" && Si(zn)) {
        var t = [];
        Sd(t, zn, e, qa(e)),
        sd(lm, t)
    }
}
function cm(e, t, r) {
    e === "focusin" ? (lu(),
    En = t,
    zn = r,
    En.attachEvent("onpropertychange", jd)) : e === "focusout" && lu()
}
function dm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Si(zn)
}
function hm(e, t) {
    if (e === "click")
        return Si(t)
}
function fm(e, t) {
    if (e === "input" || e === "change")
        return Si(t)
}
function pm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Je = typeof Object.is == "function" ? Object.is : pm;
function Fn(e, t) {
    if (Je(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!Lo.call(t, s) || !Je(e[s], t[s]))
            return !1
    }
    return !0
}
function uu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function cu(e, t) {
    var r = uu(e);
    e = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length,
            e <= t && n >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = uu(r)
    }
}
function Ed(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Nd() {
    for (var e = window, t = qs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = qs(e.document)
    }
    return t
}
function tl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function mm(e) {
    var t = Nd()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Ed(r.ownerDocument.documentElement, r)) {
        if (n !== null && tl(r)) {
            if (t = n.start,
            e = n.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = r.textContent.length
                  , i = Math.min(n.start, s);
                n = n.end === void 0 ? i : Math.min(n.end, s),
                !e.extend && i > n && (s = n,
                n = i,
                i = s),
                s = cu(r, i);
                var o = cu(r, n);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                i > n ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var gm = ct && "documentMode"in document && 11 >= document.documentMode
  , br = null
  , Xo = null
  , Nn = null
  , Zo = !1;
function du(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Zo || br == null || br !== qs(n) || (n = br,
    "selectionStart"in n && tl(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    Nn && Fn(Nn, n) || (Nn = n,
    n = Zs(Xo, "onSelect"),
    0 < n.length && (t = new Xa("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = br)))
}
function xs(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var jr = {
    animationend: xs("Animation", "AnimationEnd"),
    animationiteration: xs("Animation", "AnimationIteration"),
    animationstart: xs("Animation", "AnimationStart"),
    transitionend: xs("Transition", "TransitionEnd")
}
  , lo = {}
  , Pd = {};
ct && (Pd = document.createElement("div").style,
"AnimationEvent"in window || (delete jr.animationend.animation,
delete jr.animationiteration.animation,
delete jr.animationstart.animation),
"TransitionEvent"in window || delete jr.transitionend.transition);
function bi(e) {
    if (lo[e])
        return lo[e];
    if (!jr[e])
        return e;
    var t = jr[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in Pd)
            return lo[e] = t[r];
    return e
}
var Cd = bi("animationend")
  , Td = bi("animationiteration")
  , Od = bi("animationstart")
  , Rd = bi("transitionend")
  , Ld = new Map
  , hu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
    Ld.set(e, t),
    cr(t, [e])
}
for (var uo = 0; uo < hu.length; uo++) {
    var co = hu[uo]
      , vm = co.toLowerCase()
      , ym = co[0].toUpperCase() + co.slice(1);
    zt(vm, "on" + ym)
}
zt(Cd, "onAnimationEnd");
zt(Td, "onAnimationIteration");
zt(Od, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Rd, "onTransitionEnd");
zr("onMouseEnter", ["mouseout", "mouseover"]);
zr("onMouseLeave", ["mouseout", "mouseover"]);
zr("onPointerEnter", ["pointerout", "pointerover"]);
zr("onPointerLeave", ["pointerout", "pointerover"]);
cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , wm = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function fu(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r,
    vp(n, t, void 0, e),
    e.currentTarget = null
}
function $d(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
          , s = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = n.length - 1; 0 <= o; o--) {
                    var a = n[o]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    fu(s, a, c),
                    i = l
                }
            else
                for (o = 0; o < n.length; o++) {
                    if (a = n[o],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    fu(s, a, c),
                    i = l
                }
        }
    }
    if (Js)
        throw e = Jo,
        Js = !1,
        Jo = null,
        e
}
function W(e, t) {
    var r = t[sa];
    r === void 0 && (r = t[sa] = new Set);
    var n = e + "__bubble";
    r.has(n) || (Id(t, e, 2, !1),
    r.add(n))
}
function ho(e, t, r) {
    var n = 0;
    t && (n |= 4),
    Id(r, e, n, t)
}
var _s = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
    if (!e[_s]) {
        e[_s] = !0,
        Bc.forEach(function(r) {
            r !== "selectionchange" && (wm.has(r) || ho(r, !1, e),
            ho(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_s] || (t[_s] = !0,
        ho("selectionchange", !1, t))
    }
}
function Id(e, t, r, n) {
    switch (yd(t)) {
    case 1:
        var s = Lp;
        break;
    case 4:
        s = $p;
        break;
    default:
        s = Ga
    }
    r = s.bind(null, t, r, e),
    s = void 0,
    !Yo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    n ? s !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, r, !0) : s !== void 0 ? e.addEventListener(t, r, {
        passive: s
    }) : e.addEventListener(t, r, !1)
}
function fo(e, t, r, n, s) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var o = n.tag;
            if (o === 3 || o === 4) {
                var a = n.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = n.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Zt(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        n = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            n = n.return
        }
    sd(function() {
        var c = i
          , d = qa(r)
          , h = [];
        e: {
            var f = Ld.get(e);
            if (f !== void 0) {
                var w = Xa
                  , p = e;
                switch (e) {
                case "keypress":
                    if (Ms(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Qp;
                    break;
                case "focusin":
                    p = "focus",
                    w = io;
                    break;
                case "focusout":
                    p = "blur",
                    w = io;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = io;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = tu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = Ap;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = Xp;
                    break;
                case Cd:
                case Td:
                case Od:
                    w = zp;
                    break;
                case Rd:
                    w = em;
                    break;
                case "scroll":
                    w = Ip;
                    break;
                case "wheel":
                    w = rm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Bp;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = nu
                }
                var y = (t & 4) !== 0
                  , b = !y && e === "scroll"
                  , m = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var g = c, v; g !== null; ) {
                    v = g;
                    var x = v.stateNode;
                    if (v.tag === 5 && x !== null && (v = x,
                    m !== null && (x = Dn(g, m),
                    x != null && y.push(Wn(g, x, v)))),
                    b)
                        break;
                    g = g.return
                }
                0 < y.length && (f = new w(f,p,null,r,d),
                h.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                f && r !== Ho && (p = r.relatedTarget || r.fromElement) && (Zt(p) || p[dt]))
                    break e;
                if ((w || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                w ? (p = r.relatedTarget || r.toElement,
                w = c,
                p = p ? Zt(p) : null,
                p !== null && (b = dr(p),
                p !== b || p.tag !== 5 && p.tag !== 6) && (p = null)) : (w = null,
                p = c),
                w !== p)) {
                    if (y = tu,
                    x = "onMouseLeave",
                    m = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = nu,
                    x = "onPointerLeave",
                    m = "onPointerEnter",
                    g = "pointer"),
                    b = w == null ? f : Er(w),
                    v = p == null ? f : Er(p),
                    f = new y(x,g + "leave",w,r,d),
                    f.target = b,
                    f.relatedTarget = v,
                    x = null,
                    Zt(d) === c && (y = new y(m,g + "enter",p,r,d),
                    y.target = v,
                    y.relatedTarget = b,
                    x = y),
                    b = x,
                    w && p)
                        t: {
                            for (y = w,
                            m = p,
                            g = 0,
                            v = y; v; v = gr(v))
                                g++;
                            for (v = 0,
                            x = m; x; x = gr(x))
                                v++;
                            for (; 0 < g - v; )
                                y = gr(y),
                                g--;
                            for (; 0 < v - g; )
                                m = gr(m),
                                v--;
                            for (; g--; ) {
                                if (y === m || m !== null && y === m.alternate)
                                    break t;
                                y = gr(y),
                                m = gr(m)
                            }
                            y = null
                        }
                    else
                        y = null;
                    w !== null && pu(h, f, w, y, !1),
                    p !== null && b !== null && pu(h, b, p, y, !0)
                }
            }
            e: {
                if (f = c ? Er(c) : window,
                w = f.nodeName && f.nodeName.toLowerCase(),
                w === "select" || w === "input" && f.type === "file")
                    var S = um;
                else if (ou(f))
                    if (bd)
                        S = fm;
                    else {
                        S = dm;
                        var N = cm
                    }
                else
                    (w = f.nodeName) && w.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = hm);
                if (S && (S = S(e, c))) {
                    Sd(h, S, r, d);
                    break e
                }
                N && N(e, f, c),
                e === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && zo(f, "number", f.value)
            }
            switch (N = c ? Er(c) : window,
            e) {
            case "focusin":
                (ou(N) || N.contentEditable === "true") && (br = N,
                Xo = c,
                Nn = null);
                break;
            case "focusout":
                Nn = Xo = br = null;
                break;
            case "mousedown":
                Zo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Zo = !1,
                du(h, r, d);
                break;
            case "selectionchange":
                if (gm)
                    break;
            case "keydown":
            case "keyup":
                du(h, r, d)
            }
            var _;
            if (el)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                Sr ? _d(e, r) && (E = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
            E && (xd && r.locale !== "ko" && (Sr || E !== "onCompositionStart" ? E === "onCompositionEnd" && Sr && (_ = wd()) : (Et = d,
            Ka = "value"in Et ? Et.value : Et.textContent,
            Sr = !0)),
            N = Zs(c, E),
            0 < N.length && (E = new ru(E,e,null,r,d),
            h.push({
                event: E,
                listeners: N
            }),
            _ ? E.data = _ : (_ = kd(r),
            _ !== null && (E.data = _)))),
            (_ = sm ? im(e, r) : om(e, r)) && (c = Zs(c, "onBeforeInput"),
            0 < c.length && (d = new ru("onBeforeInput","beforeinput",null,r,d),
            h.push({
                event: d,
                listeners: c
            }),
            d.data = _))
        }
        $d(h, t)
    })
}
function Wn(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function Zs(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Dn(e, r),
        i != null && n.unshift(Wn(e, i, s)),
        i = Dn(e, t),
        i != null && n.push(Wn(e, i, s))),
        e = e.return
    }
    return n
}
function gr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function pu(e, t, r, n, s) {
    for (var i = t._reactName, o = []; r !== null && r !== n; ) {
        var a = r
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === n)
            break;
        a.tag === 5 && c !== null && (a = c,
        s ? (l = Dn(r, i),
        l != null && o.unshift(Wn(r, l, a))) : s || (l = Dn(r, i),
        l != null && o.push(Wn(r, l, a)))),
        r = r.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var xm = /\r\n?/g
  , _m = /\u0000|\uFFFD/g;
function mu(e) {
    return (typeof e == "string" ? e : "" + e).replace(xm, `
`).replace(_m, "")
}
function ks(e, t, r) {
    if (t = mu(t),
    mu(e) !== t && r)
        throw Error(j(425))
}
function ei() {}
var ea = null
  , ta = null;
function ra(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var na = typeof setTimeout == "function" ? setTimeout : void 0
  , km = typeof clearTimeout == "function" ? clearTimeout : void 0
  , gu = typeof Promise == "function" ? Promise : void 0
  , Sm = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
    return gu.resolve(null).then(e).catch(bm)
}
: na;
function bm(e) {
    setTimeout(function() {
        throw e
    })
}
function po(e, t) {
    var r = t
      , n = 0;
    do {
        var s = r.nextSibling;
        if (e.removeChild(r),
        s && s.nodeType === 8)
            if (r = s.data,
            r === "/$") {
                if (n === 0) {
                    e.removeChild(s),
                    Un(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    Un(t)
}
function Rt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function vu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var tn = Math.random().toString(36).slice(2)
  , Ze = "__reactFiber$" + tn
  , Vn = "__reactProps$" + tn
  , dt = "__reactContainer$" + tn
  , sa = "__reactEvents$" + tn
  , jm = "__reactListeners$" + tn
  , Em = "__reactHandles$" + tn;
function Zt(e) {
    var t = e[Ze];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[dt] || r[Ze]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = vu(e); e !== null; ) {
                    if (r = e[Ze])
                        return r;
                    e = vu(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function ss(e) {
    return e = e[Ze] || e[dt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Er(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function ji(e) {
    return e[Vn] || null
}
var ia = []
  , Nr = -1;
function Ft(e) {
    return {
        current: e
    }
}
function V(e) {
    0 > Nr || (e.current = ia[Nr],
    ia[Nr] = null,
    Nr--)
}
function B(e, t) {
    Nr++,
    ia[Nr] = e.current,
    e.current = t
}
var Ut = {}
  , me = Ft(Ut)
  , be = Ft(!1)
  , sr = Ut;
function Fr(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return Ut;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in r)
        s[i] = t[i];
    return n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function je(e) {
    return e = e.childContextTypes,
    e != null
}
function ti() {
    V(be),
    V(me)
}
function yu(e, t, r) {
    if (me.current !== Ut)
        throw Error(j(168));
    B(me, t),
    B(be, r)
}
function Dd(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in t))
            throw Error(j(108, cp(e) || "Unknown", s));
    return J({}, r, n)
}
function ri(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut,
    sr = me.current,
    B(me, e),
    B(be, be.current),
    !0
}
function wu(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(j(169));
    r ? (e = Dd(e, t, sr),
    n.__reactInternalMemoizedMergedChildContext = e,
    V(be),
    V(me),
    B(me, e)) : V(be),
    B(be, r)
}
var ot = null
  , Ei = !1
  , mo = !1;
function Ad(e) {
    ot === null ? ot = [e] : ot.push(e)
}
function Nm(e) {
    Ei = !0,
    Ad(e)
}
function Bt() {
    if (!mo && ot !== null) {
        mo = !0;
        var e = 0
          , t = z;
        try {
            var r = ot;
            for (z = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            ot = null,
            Ei = !1
        } catch (s) {
            throw ot !== null && (ot = ot.slice(e + 1)),
            ld(Ya, Bt),
            s
        } finally {
            z = t,
            mo = !1
        }
    }
    return null
}
var Pr = []
  , Cr = 0
  , ni = null
  , si = 0
  , $e = []
  , Ie = 0
  , ir = null
  , at = 1
  , lt = "";
function Jt(e, t) {
    Pr[Cr++] = si,
    Pr[Cr++] = ni,
    ni = e,
    si = t
}
function Md(e, t, r) {
    $e[Ie++] = at,
    $e[Ie++] = lt,
    $e[Ie++] = ir,
    ir = e;
    var n = at;
    e = lt;
    var s = 32 - qe(n) - 1;
    n &= ~(1 << s),
    r += 1;
    var i = 32 - qe(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (n & (1 << o) - 1).toString(32),
        n >>= o,
        s -= o,
        at = 1 << 32 - qe(t) + s | r << s | n,
        lt = i + e
    } else
        at = 1 << i | r << s | n,
        lt = e
}
function rl(e) {
    e.return !== null && (Jt(e, 1),
    Md(e, 1, 0))
}
function nl(e) {
    for (; e === ni; )
        ni = Pr[--Cr],
        Pr[Cr] = null,
        si = Pr[--Cr],
        Pr[Cr] = null;
    for (; e === ir; )
        ir = $e[--Ie],
        $e[Ie] = null,
        lt = $e[--Ie],
        $e[Ie] = null,
        at = $e[--Ie],
        $e[Ie] = null
}
var Te = null
  , Ce = null
  , H = !1
  , He = null;
function Ud(e, t) {
    var r = De(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function xu(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Te = e,
        Ce = Rt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Te = e,
        Ce = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = ir !== null ? {
            id: at,
            overflow: lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = De(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        Te = e,
        Ce = null,
        !0) : !1;
    default:
        return !1
    }
}
function oa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function aa(e) {
    if (H) {
        var t = Ce;
        if (t) {
            var r = t;
            if (!xu(e, t)) {
                if (oa(e))
                    throw Error(j(418));
                t = Rt(r.nextSibling);
                var n = Te;
                t && xu(e, t) ? Ud(n, r) : (e.flags = e.flags & -4097 | 2,
                H = !1,
                Te = e)
            }
        } else {
            if (oa(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            H = !1,
            Te = e
        }
    }
}
function _u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Te = e
}
function Ss(e) {
    if (e !== Te)
        return !1;
    if (!H)
        return _u(e),
        H = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ra(e.type, e.memoizedProps)),
    t && (t = Ce)) {
        if (oa(e))
            throw zd(),
            Error(j(418));
        for (; t; )
            Ud(e, t),
            t = Rt(t.nextSibling)
    }
    if (_u(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            Ce = Rt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ce = null
        }
    } else
        Ce = Te ? Rt(e.stateNode.nextSibling) : null;
    return !0
}
function zd() {
    for (var e = Ce; e; )
        e = Rt(e.nextSibling)
}
function Br() {
    Ce = Te = null,
    H = !1
}
function sl(e) {
    He === null ? He = [e] : He.push(e)
}
var Pm = mt.ReactCurrentBatchConfig;
function dn(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(j(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(j(147, e));
            var s = n
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!r._owner)
            throw Error(j(290, e))
    }
    return e
}
function bs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ku(e) {
    var t = e._init;
    return t(e._payload)
}
function Fd(e) {
    function t(m, g) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [g],
            m.flags |= 16) : v.push(g)
        }
    }
    function r(m, g) {
        if (!e)
            return null;
        for (; g !== null; )
            t(m, g),
            g = g.sibling;
        return null
    }
    function n(m, g) {
        for (m = new Map; g !== null; )
            g.key !== null ? m.set(g.key, g) : m.set(g.index, g),
            g = g.sibling;
        return m
    }
    function s(m, g) {
        return m = Dt(m, g),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, g, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < g ? (m.flags |= 2,
        g) : v) : (m.flags |= 2,
        g)) : (m.flags |= 1048576,
        g)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, g, v, x) {
        return g === null || g.tag !== 6 ? (g = ko(v, m.mode, x),
        g.return = m,
        g) : (g = s(g, v),
        g.return = m,
        g)
    }
    function l(m, g, v, x) {
        var S = v.type;
        return S === kr ? d(m, g, v.props.children, x, v.key) : g !== null && (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === xt && ku(S) === g.type) ? (x = s(g, v.props),
        x.ref = dn(m, g, v),
        x.return = m,
        x) : (x = Hs(v.type, v.key, v.props, null, m.mode, x),
        x.ref = dn(m, g, v),
        x.return = m,
        x)
    }
    function c(m, g, v, x) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== v.containerInfo || g.stateNode.implementation !== v.implementation ? (g = So(v, m.mode, x),
        g.return = m,
        g) : (g = s(g, v.children || []),
        g.return = m,
        g)
    }
    function d(m, g, v, x, S) {
        return g === null || g.tag !== 7 ? (g = nr(v, m.mode, x, S),
        g.return = m,
        g) : (g = s(g, v),
        g.return = m,
        g)
    }
    function h(m, g, v) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = ko("" + g, m.mode, v),
            g.return = m,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case fs:
                return v = Hs(g.type, g.key, g.props, null, m.mode, v),
                v.ref = dn(m, null, g),
                v.return = m,
                v;
            case _r:
                return g = So(g, m.mode, v),
                g.return = m,
                g;
            case xt:
                var x = g._init;
                return h(m, x(g._payload), v)
            }
            if (wn(g) || on(g))
                return g = nr(g, m.mode, v, null),
                g.return = m,
                g;
            bs(m, g)
        }
        return null
    }
    function f(m, g, v, x) {
        var S = g !== null ? g.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return S !== null ? null : a(m, g, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case fs:
                return v.key === S ? l(m, g, v, x) : null;
            case _r:
                return v.key === S ? c(m, g, v, x) : null;
            case xt:
                return S = v._init,
                f(m, g, S(v._payload), x)
            }
            if (wn(v) || on(v))
                return S !== null ? null : d(m, g, v, x, null);
            bs(m, v)
        }
        return null
    }
    function w(m, g, v, x, S) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return m = m.get(v) || null,
            a(g, m, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case fs:
                return m = m.get(x.key === null ? v : x.key) || null,
                l(g, m, x, S);
            case _r:
                return m = m.get(x.key === null ? v : x.key) || null,
                c(g, m, x, S);
            case xt:
                var N = x._init;
                return w(m, g, v, N(x._payload), S)
            }
            if (wn(x) || on(x))
                return m = m.get(v) || null,
                d(g, m, x, S, null);
            bs(g, x)
        }
        return null
    }
    function p(m, g, v, x) {
        for (var S = null, N = null, _ = g, E = g = 0, D = null; _ !== null && E < v.length; E++) {
            _.index > E ? (D = _,
            _ = null) : D = _.sibling;
            var $ = f(m, _, v[E], x);
            if ($ === null) {
                _ === null && (_ = D);
                break
            }
            e && _ && $.alternate === null && t(m, _),
            g = i($, g, E),
            N === null ? S = $ : N.sibling = $,
            N = $,
            _ = D
        }
        if (E === v.length)
            return r(m, _),
            H && Jt(m, E),
            S;
        if (_ === null) {
            for (; E < v.length; E++)
                _ = h(m, v[E], x),
                _ !== null && (g = i(_, g, E),
                N === null ? S = _ : N.sibling = _,
                N = _);
            return H && Jt(m, E),
            S
        }
        for (_ = n(m, _); E < v.length; E++)
            D = w(_, m, E, v[E], x),
            D !== null && (e && D.alternate !== null && _.delete(D.key === null ? E : D.key),
            g = i(D, g, E),
            N === null ? S = D : N.sibling = D,
            N = D);
        return e && _.forEach(function(T) {
            return t(m, T)
        }),
        H && Jt(m, E),
        S
    }
    function y(m, g, v, x) {
        var S = on(v);
        if (typeof S != "function")
            throw Error(j(150));
        if (v = S.call(v),
        v == null)
            throw Error(j(151));
        for (var N = S = null, _ = g, E = g = 0, D = null, $ = v.next(); _ !== null && !$.done; E++,
        $ = v.next()) {
            _.index > E ? (D = _,
            _ = null) : D = _.sibling;
            var T = f(m, _, $.value, x);
            if (T === null) {
                _ === null && (_ = D);
                break
            }
            e && _ && T.alternate === null && t(m, _),
            g = i(T, g, E),
            N === null ? S = T : N.sibling = T,
            N = T,
            _ = D
        }
        if ($.done)
            return r(m, _),
            H && Jt(m, E),
            S;
        if (_ === null) {
            for (; !$.done; E++,
            $ = v.next())
                $ = h(m, $.value, x),
                $ !== null && (g = i($, g, E),
                N === null ? S = $ : N.sibling = $,
                N = $);
            return H && Jt(m, E),
            S
        }
        for (_ = n(m, _); !$.done; E++,
        $ = v.next())
            $ = w(_, m, E, $.value, x),
            $ !== null && (e && $.alternate !== null && _.delete($.key === null ? E : $.key),
            g = i($, g, E),
            N === null ? S = $ : N.sibling = $,
            N = $);
        return e && _.forEach(function(re) {
            return t(m, re)
        }),
        H && Jt(m, E),
        S
    }
    function b(m, g, v, x) {
        if (typeof v == "object" && v !== null && v.type === kr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case fs:
                e: {
                    for (var S = v.key, N = g; N !== null; ) {
                        if (N.key === S) {
                            if (S = v.type,
                            S === kr) {
                                if (N.tag === 7) {
                                    r(m, N.sibling),
                                    g = s(N, v.props.children),
                                    g.return = m,
                                    m = g;
                                    break e
                                }
                            } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === xt && ku(S) === N.type) {
                                r(m, N.sibling),
                                g = s(N, v.props),
                                g.ref = dn(m, N, v),
                                g.return = m,
                                m = g;
                                break e
                            }
                            r(m, N);
                            break
                        } else
                            t(m, N);
                        N = N.sibling
                    }
                    v.type === kr ? (g = nr(v.props.children, m.mode, x, v.key),
                    g.return = m,
                    m = g) : (x = Hs(v.type, v.key, v.props, null, m.mode, x),
                    x.ref = dn(m, g, v),
                    x.return = m,
                    m = x)
                }
                return o(m);
            case _r:
                e: {
                    for (N = v.key; g !== null; ) {
                        if (g.key === N)
                            if (g.tag === 4 && g.stateNode.containerInfo === v.containerInfo && g.stateNode.implementation === v.implementation) {
                                r(m, g.sibling),
                                g = s(g, v.children || []),
                                g.return = m,
                                m = g;
                                break e
                            } else {
                                r(m, g);
                                break
                            }
                        else
                            t(m, g);
                        g = g.sibling
                    }
                    g = So(v, m.mode, x),
                    g.return = m,
                    m = g
                }
                return o(m);
            case xt:
                return N = v._init,
                b(m, g, N(v._payload), x)
            }
            if (wn(v))
                return p(m, g, v, x);
            if (on(v))
                return y(m, g, v, x);
            bs(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        g !== null && g.tag === 6 ? (r(m, g.sibling),
        g = s(g, v),
        g.return = m,
        m = g) : (r(m, g),
        g = ko(v, m.mode, x),
        g.return = m,
        m = g),
        o(m)) : r(m, g)
    }
    return b
}
var Wr = Fd(!0)
  , Bd = Fd(!1)
  , ii = Ft(null)
  , oi = null
  , Tr = null
  , il = null;
function ol() {
    il = Tr = oi = null
}
function al(e) {
    var t = ii.current;
    V(ii),
    e._currentValue = t
}
function la(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function Ar(e, t) {
    oi = e,
    il = Tr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0),
    e.firstContext = null)
}
function Ue(e) {
    var t = e._currentValue;
    if (il !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Tr === null) {
            if (oi === null)
                throw Error(j(308));
            Tr = e,
            oi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Tr = Tr.next = e;
    return t
}
var er = null;
function ll(e) {
    er === null ? er = [e] : er.push(e)
}
function Wd(e, t, r, n) {
    var s = t.interleaved;
    return s === null ? (r.next = r,
    ll(t)) : (r.next = s.next,
    s.next = r),
    t.interleaved = r,
    ht(e, n)
}
function ht(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var _t = !1;
function ul(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Vd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Lt(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    M & 2) {
        var s = n.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        n.pending = t,
        ht(e, r)
    }
    return s = n.interleaved,
    s === null ? (t.next = t,
    ll(n)) : (t.next = s.next,
    s.next = t),
    n.interleaved = t,
    ht(e, r)
}
function Us(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Ja(e, r)
    }
}
function Su(e, t) {
    var r = e.updateQueue
      , n = e.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var s = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                r = r.next
            } while (r !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function ai(e, t, r, n) {
    var s = e.updateQueue;
    _t = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        o === null ? i = c : o.next = c,
        o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== o && (a === null ? d.firstBaseUpdate = c : a.next = c,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var h = s.baseState;
        o = 0,
        d = c = l = null,
        a = i;
        do {
            var f = a.lane
              , w = a.eventTime;
            if ((n & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var p = e
                      , y = a;
                    switch (f = t,
                    w = r,
                    y.tag) {
                    case 1:
                        if (p = y.payload,
                        typeof p == "function") {
                            h = p.call(w, h, f);
                            break e
                        }
                        h = p;
                        break e;
                    case 3:
                        p.flags = p.flags & -65537 | 128;
                    case 0:
                        if (p = y.payload,
                        f = typeof p == "function" ? p.call(w, h, f) : p,
                        f == null)
                            break e;
                        h = J({}, h, f);
                        break e;
                    case 2:
                        _t = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (c = d = w,
                l = h) : d = d.next = w,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = h),
        s.baseState = l,
        s.firstBaseUpdate = c,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                o |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        ar |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function bu(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t]
              , s = n.callback;
            if (s !== null) {
                if (n.callback = null,
                n = r,
                typeof s != "function")
                    throw Error(j(191, s));
                s.call(n)
            }
        }
}
var is = {}
  , tt = Ft(is)
  , Hn = Ft(is)
  , qn = Ft(is);
function tr(e) {
    if (e === is)
        throw Error(j(174));
    return e
}
function cl(e, t) {
    switch (B(qn, t),
    B(Hn, e),
    B(tt, is),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Bo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Bo(t, e)
    }
    V(tt),
    B(tt, t)
}
function Vr() {
    V(tt),
    V(Hn),
    V(qn)
}
function Hd(e) {
    tr(qn.current);
    var t = tr(tt.current)
      , r = Bo(t, e.type);
    t !== r && (B(Hn, e),
    B(tt, r))
}
function dl(e) {
    Hn.current === e && (V(tt),
    V(Hn))
}
var q = Ft(0);
function li(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var go = [];
function hl() {
    for (var e = 0; e < go.length; e++)
        go[e]._workInProgressVersionPrimary = null;
    go.length = 0
}
var zs = mt.ReactCurrentDispatcher
  , vo = mt.ReactCurrentBatchConfig
  , or = 0
  , Y = null
  , ne = null
  , ae = null
  , ui = !1
  , Pn = !1
  , Yn = 0
  , Cm = 0;
function he() {
    throw Error(j(321))
}
function fl(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!Je(e[r], t[r]))
            return !1;
    return !0
}
function pl(e, t, r, n, s, i) {
    if (or = i,
    Y = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    zs.current = e === null || e.memoizedState === null ? Lm : $m,
    e = r(n, s),
    Pn) {
        i = 0;
        do {
            if (Pn = !1,
            Yn = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            ae = ne = null,
            t.updateQueue = null,
            zs.current = Im,
            e = r(n, s)
        } while (Pn)
    }
    if (zs.current = ci,
    t = ne !== null && ne.next !== null,
    or = 0,
    ae = ne = Y = null,
    ui = !1,
    t)
        throw Error(j(300));
    return e
}
function ml() {
    var e = Yn !== 0;
    return Yn = 0,
    e
}
function Xe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ae === null ? Y.memoizedState = ae = e : ae = ae.next = e,
    ae
}
function ze() {
    if (ne === null) {
        var e = Y.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ne.next;
    var t = ae === null ? Y.memoizedState : ae.next;
    if (t !== null)
        ae = t,
        ne = e;
    else {
        if (e === null)
            throw Error(j(310));
        ne = e,
        e = {
            memoizedState: ne.memoizedState,
            baseState: ne.baseState,
            baseQueue: ne.baseQueue,
            queue: ne.queue,
            next: null
        },
        ae === null ? Y.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}
function Jn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yo(e) {
    var t = ze()
      , r = t.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = e;
    var n = ne
      , s = n.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        n.baseQueue = s = i,
        r.pending = null
    }
    if (s !== null) {
        i = s.next,
        n = n.baseState;
        var a = o = null
          , l = null
          , c = i;
        do {
            var d = c.lane;
            if ((or & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                n = c.hasEagerState ? c.eagerState : e(n, c.action);
            else {
                var h = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = h,
                o = n) : l = l.next = h,
                Y.lanes |= d,
                ar |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        l === null ? o = n : l.next = a,
        Je(n, t.memoizedState) || (Se = !0),
        t.memoizedState = n,
        t.baseState = o,
        t.baseQueue = l,
        r.lastRenderedState = n
    }
    if (e = r.interleaved,
    e !== null) {
        s = e;
        do
            i = s.lane,
            Y.lanes |= i,
            ar |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function wo(e) {
    var t = ze()
      , r = t.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch
      , s = r.pending
      , i = t.memoizedState;
    if (s !== null) {
        r.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== s);
        Je(i, t.memoizedState) || (Se = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function qd() {}
function Yd(e, t) {
    var r = Y
      , n = ze()
      , s = t()
      , i = !Je(n.memoizedState, s);
    if (i && (n.memoizedState = s,
    Se = !0),
    n = n.queue,
    gl(Gd.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || ae !== null && ae.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        Qn(9, Qd.bind(null, r, n, s, t), void 0, null),
        le === null)
            throw Error(j(349));
        or & 30 || Jd(r, t, s)
    }
    return s
}
function Jd(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = Y.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function Qd(e, t, r, n) {
    t.value = r,
    t.getSnapshot = n,
    Kd(t) && Xd(e)
}
function Gd(e, t, r) {
    return r(function() {
        Kd(t) && Xd(e)
    })
}
function Kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !Je(e, r)
    } catch {
        return !0
    }
}
function Xd(e) {
    var t = ht(e, 1);
    t !== null && Ye(t, e, 1, -1)
}
function ju(e) {
    var t = Xe();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Rm.bind(null, Y, e),
    [t.memoizedState, e]
}
function Qn(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = Y.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function Zd() {
    return ze().memoizedState
}
function Fs(e, t, r, n) {
    var s = Xe();
    Y.flags |= e,
    s.memoizedState = Qn(1 | t, r, void 0, n === void 0 ? null : n)
}
function Ni(e, t, r, n) {
    var s = ze();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (ne !== null) {
        var o = ne.memoizedState;
        if (i = o.destroy,
        n !== null && fl(n, o.deps)) {
            s.memoizedState = Qn(t, r, i, n);
            return
        }
    }
    Y.flags |= e,
    s.memoizedState = Qn(1 | t, r, i, n)
}
function Eu(e, t) {
    return Fs(8390656, 8, e, t)
}
function gl(e, t) {
    return Ni(2048, 8, e, t)
}
function eh(e, t) {
    return Ni(4, 2, e, t)
}
function th(e, t) {
    return Ni(4, 4, e, t)
}
function rh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function nh(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    Ni(4, 4, rh.bind(null, t, e), r)
}
function vl() {}
function sh(e, t) {
    var r = ze();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && fl(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function ih(e, t) {
    var r = ze();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && fl(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function oh(e, t, r) {
    return or & 21 ? (Je(r, t) || (r = dd(),
    Y.lanes |= r,
    ar |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Se = !0),
    e.memoizedState = r)
}
function Tm(e, t) {
    var r = z;
    z = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = vo.transition;
    vo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        z = r,
        vo.transition = n
    }
}
function ah() {
    return ze().memoizedState
}
function Om(e, t, r) {
    var n = It(e);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    lh(e))
        uh(t, r);
    else if (r = Wd(e, t, r, n),
    r !== null) {
        var s = ve();
        Ye(r, e, n, s),
        ch(r, t, n)
    }
}
function Rm(e, t, r) {
    var n = It(e)
      , s = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (lh(e))
        uh(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, r);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                Je(a, o)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    ll(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        r = Wd(e, t, s, n),
        r !== null && (s = ve(),
        Ye(r, e, n, s),
        ch(r, t, n))
    }
}
function lh(e) {
    var t = e.alternate;
    return e === Y || t !== null && t === Y
}
function uh(e, t) {
    Pn = ui = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function ch(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Ja(e, r)
    }
}
var ci = {
    readContext: Ue,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1
}
  , Lm = {
    readContext: Ue,
    useCallback: function(e, t) {
        return Xe().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ue,
    useEffect: Eu,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        Fs(4194308, 4, rh.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return Fs(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Fs(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = Xe();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = Xe();
        return t = r !== void 0 ? r(t) : t,
        n.memoizedState = n.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        n.queue = e,
        e = e.dispatch = Om.bind(null, Y, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = Xe();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ju,
    useDebugValue: vl,
    useDeferredValue: function(e) {
        return Xe().memoizedState = e
    },
    useTransition: function() {
        var e = ju(!1)
          , t = e[0];
        return e = Tm.bind(null, e[1]),
        Xe().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = Y
          , s = Xe();
        if (H) {
            if (r === void 0)
                throw Error(j(407));
            r = r()
        } else {
            if (r = t(),
            le === null)
                throw Error(j(349));
            or & 30 || Jd(n, t, r)
        }
        s.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: t
        };
        return s.queue = i,
        Eu(Gd.bind(null, n, i, e), [e]),
        n.flags |= 2048,
        Qn(9, Qd.bind(null, n, i, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = Xe()
          , t = le.identifierPrefix;
        if (H) {
            var r = lt
              , n = at;
            r = (n & ~(1 << 32 - qe(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = Yn++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = Cm++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , $m = {
    readContext: Ue,
    useCallback: sh,
    useContext: Ue,
    useEffect: gl,
    useImperativeHandle: nh,
    useInsertionEffect: eh,
    useLayoutEffect: th,
    useMemo: ih,
    useReducer: yo,
    useRef: Zd,
    useState: function() {
        return yo(Jn)
    },
    useDebugValue: vl,
    useDeferredValue: function(e) {
        var t = ze();
        return oh(t, ne.memoizedState, e)
    },
    useTransition: function() {
        var e = yo(Jn)[0]
          , t = ze().memoizedState;
        return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: Yd,
    useId: ah,
    unstable_isNewReconciler: !1
}
  , Im = {
    readContext: Ue,
    useCallback: sh,
    useContext: Ue,
    useEffect: gl,
    useImperativeHandle: nh,
    useInsertionEffect: eh,
    useLayoutEffect: th,
    useMemo: ih,
    useReducer: wo,
    useRef: Zd,
    useState: function() {
        return wo(Jn)
    },
    useDebugValue: vl,
    useDeferredValue: function(e) {
        var t = ze();
        return ne === null ? t.memoizedState = e : oh(t, ne.memoizedState, e)
    },
    useTransition: function() {
        var e = wo(Jn)[0]
          , t = ze().memoizedState;
        return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: Yd,
    useId: ah,
    unstable_isNewReconciler: !1
};
function Be(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
function ua(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : J({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Pi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dr(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = ve()
          , s = It(e)
          , i = ut(n, s);
        i.payload = t,
        r != null && (i.callback = r),
        t = Lt(e, i, s),
        t !== null && (Ye(t, e, s, n),
        Us(t, e, s))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = ve()
          , s = It(e)
          , i = ut(n, s);
        i.tag = 1,
        i.payload = t,
        r != null && (i.callback = r),
        t = Lt(e, i, s),
        t !== null && (Ye(t, e, s, n),
        Us(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = ve()
          , n = It(e)
          , s = ut(r, n);
        s.tag = 2,
        t != null && (s.callback = t),
        t = Lt(e, s, n),
        t !== null && (Ye(t, e, n, r),
        Us(t, e, n))
    }
};
function Nu(e, t, r, n, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Fn(r, n) || !Fn(s, i) : !0
}
function dh(e, t, r) {
    var n = !1
      , s = Ut
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ue(i) : (s = je(t) ? sr : me.current,
    n = t.contextTypes,
    i = (n = n != null) ? Fr(e, s) : Ut),
    t = new t(r,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Pi,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Pu(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Pi.enqueueReplaceState(t, t.state, null)
}
function ca(e, t, r, n) {
    var s = e.stateNode;
    s.props = r,
    s.state = e.memoizedState,
    s.refs = {},
    ul(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = Ue(i) : (i = je(t) ? sr : me.current,
    s.context = Fr(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ua(e, t, i, r),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Pi.enqueueReplaceState(s, s.state, null),
    ai(e, r, s, n),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Hr(e, t) {
    try {
        var r = ""
          , n = t;
        do
            r += up(n),
            n = n.return;
        while (n);
        var s = r
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function xo(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function da(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Dm = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, r) {
    r = ut(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        hi || (hi = !0,
        _a = n),
        da(e, t)
    }
    ,
    r
}
function fh(e, t, r) {
    r = ut(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = t.value;
        r.payload = function() {
            return n(s)
        }
        ,
        r.callback = function() {
            da(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        da(e, t),
        typeof n != "function" && ($t === null ? $t = new Set([this]) : $t.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    r
}
function Cu(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Dm;
        var s = new Set;
        n.set(t, s)
    } else
        s = n.get(t),
        s === void 0 && (s = new Set,
        n.set(t, s));
    s.has(r) || (s.add(r),
    e = Gm.bind(null, e, t, r),
    t.then(e, e))
}
function Tu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ou(e, t, r, n, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = ut(-1, 1),
    t.tag = 2,
    Lt(r, t, 1))),
    r.lanes |= 1),
    e)
}
var Am = mt.ReactCurrentOwner
  , Se = !1;
function ge(e, t, r, n) {
    t.child = e === null ? Bd(t, null, r, n) : Wr(t, e.child, r, n)
}
function Ru(e, t, r, n, s) {
    r = r.render;
    var i = t.ref;
    return Ar(t, s),
    n = pl(e, t, r, n, i, s),
    r = ml(),
    e !== null && !Se ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    ft(e, t, s)) : (H && r && rl(t),
    t.flags |= 1,
    ge(e, t, n, s),
    t.child)
}
function Lu(e, t, r, n, s) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !jl(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        ph(e, t, i, n, s)) : (e = Hs(r.type, null, n, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Fn,
        r(o, n) && e.ref === t.ref)
            return ft(e, t, s)
    }
    return t.flags |= 1,
    e = Dt(i, n),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ph(e, t, r, n, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Fn(i, n) && e.ref === t.ref)
            if (Se = !1,
            t.pendingProps = n = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (Se = !0);
            else
                return t.lanes = e.lanes,
                ft(e, t, s)
    }
    return ha(e, t, r, n, s)
}
function mh(e, t, r) {
    var n = t.pendingProps
      , s = n.children
      , i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            B(Rr, Pe),
            Pe |= r;
        else {
            if (!(r & 1073741824))
                return e = i !== null ? i.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                B(Rr, Pe),
                Pe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            B(Rr, Pe),
            Pe |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        t.memoizedState = null) : n = r,
        B(Rr, Pe),
        Pe |= n;
    return ge(e, t, s, r),
    t.child
}
function gh(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ha(e, t, r, n, s) {
    var i = je(r) ? sr : me.current;
    return i = Fr(t, i),
    Ar(t, s),
    r = pl(e, t, r, n, i, s),
    n = ml(),
    e !== null && !Se ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    ft(e, t, s)) : (H && n && rl(t),
    t.flags |= 1,
    ge(e, t, r, s),
    t.child)
}
function $u(e, t, r, n, s) {
    if (je(r)) {
        var i = !0;
        ri(t)
    } else
        i = !1;
    if (Ar(t, s),
    t.stateNode === null)
        Bs(e, t),
        dh(t, r, n),
        ca(t, r, n, s),
        n = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , c = r.contextType;
        typeof c == "object" && c !== null ? c = Ue(c) : (c = je(r) ? sr : me.current,
        c = Fr(t, c));
        var d = r.getDerivedStateFromProps
          , h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== c) && Pu(t, o, n, c),
        _t = !1;
        var f = t.memoizedState;
        o.state = f,
        ai(t, n, o, s),
        l = t.memoizedState,
        a !== n || f !== l || be.current || _t ? (typeof d == "function" && (ua(t, r, d, n),
        l = t.memoizedState),
        (a = _t || Nu(t, r, a, n, f, l, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = n,
        t.memoizedState = l),
        o.props = n,
        o.state = l,
        o.context = c,
        n = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        n = !1)
    } else {
        o = t.stateNode,
        Vd(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : Be(t.type, a),
        o.props = c,
        h = t.pendingProps,
        f = o.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = Ue(l) : (l = je(r) ? sr : me.current,
        l = Fr(t, l));
        var w = r.getDerivedStateFromProps;
        (d = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || f !== l) && Pu(t, o, n, l),
        _t = !1,
        f = t.memoizedState,
        o.state = f,
        ai(t, n, o, s);
        var p = t.memoizedState;
        a !== h || f !== p || be.current || _t ? (typeof w == "function" && (ua(t, r, w, n),
        p = t.memoizedState),
        (c = _t || Nu(t, r, c, n, f, p, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, p, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, p, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = n,
        t.memoizedState = p),
        o.props = n,
        o.state = p,
        o.context = l,
        n = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        n = !1)
    }
    return fa(e, t, r, n, i, s)
}
function fa(e, t, r, n, s, i) {
    gh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!n && !o)
        return s && wu(t, r, !1),
        ft(e, t, i);
    n = t.stateNode,
    Am.current = t;
    var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Wr(t, e.child, null, i),
    t.child = Wr(t, null, a, i)) : ge(e, t, a, i),
    t.memoizedState = n.state,
    s && wu(t, r, !0),
    t.child
}
function vh(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1),
    cl(e, t.containerInfo)
}
function Iu(e, t, r, n, s) {
    return Br(),
    sl(s),
    t.flags |= 256,
    ge(e, t, r, n),
    t.child
}
var pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ma(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function yh(e, t, r) {
    var n = t.pendingProps, s = q.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    B(q, s & 1),
    e === null)
        return aa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = n.children,
        e = n.fallback,
        i ? (n = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(n & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Oi(o, n, 0, null),
        e = nr(e, n, r, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ma(r),
        t.memoizedState = pa,
        e) : yl(t, o));
    if (s = e.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return Mm(e, t, o, n, a, s, r);
    if (i) {
        i = n.fallback,
        o = t.mode,
        s = e.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(o & 1) && t.child !== s ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = l,
        t.deletions = null) : (n = Dt(s, l),
        n.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = Dt(a, i) : (i = nr(i, o, r, null),
        i.flags |= 2),
        i.return = t,
        n.return = t,
        n.sibling = i,
        t.child = n,
        n = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? ma(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~r,
        t.memoizedState = pa,
        n
    }
    return i = e.child,
    e = i.sibling,
    n = Dt(i, {
        mode: "visible",
        children: n.children
    }),
    !(t.mode & 1) && (n.lanes = r),
    n.return = t,
    n.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = n,
    t.memoizedState = null,
    n
}
function yl(e, t) {
    return t = Oi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function js(e, t, r, n) {
    return n !== null && sl(n),
    Wr(t, e.child, null, r),
    e = yl(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Mm(e, t, r, n, s, i, o) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = xo(Error(j(422))),
        js(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = n.fallback,
        s = t.mode,
        n = Oi({
            mode: "visible",
            children: n.children
        }, s, 0, null),
        i = nr(i, s, o, null),
        i.flags |= 2,
        n.return = t,
        i.return = t,
        n.sibling = i,
        t.child = n,
        t.mode & 1 && Wr(t, e.child, null, o),
        t.child.memoizedState = ma(o),
        t.memoizedState = pa,
        i);
    if (!(t.mode & 1))
        return js(e, t, o, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset,
        n)
            var a = n.dgst;
        return n = a,
        i = Error(j(419)),
        n = xo(i, n, void 0),
        js(e, t, o, n)
    }
    if (a = (o & e.childLanes) !== 0,
    Se || a) {
        if (n = le,
        n !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (n.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            ht(e, s),
            Ye(n, e, s, -1))
        }
        return bl(),
        n = xo(Error(j(421))),
        js(e, t, o, n)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Km.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    Ce = Rt(s.nextSibling),
    Te = t,
    H = !0,
    He = null,
    e !== null && ($e[Ie++] = at,
    $e[Ie++] = lt,
    $e[Ie++] = ir,
    at = e.id,
    lt = e.overflow,
    ir = t),
    t = yl(t, n.children),
    t.flags |= 4096,
    t)
}
function Du(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    la(e.return, t, r)
}
function _o(e, t, r, n, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = n,
    i.tail = r,
    i.tailMode = s)
}
function wh(e, t, r) {
    var n = t.pendingProps
      , s = n.revealOrder
      , i = n.tail;
    if (ge(e, t, n.children, r),
    n = q.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Du(e, r, t);
                else if (e.tag === 19)
                    Du(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        n &= 1
    }
    if (B(q, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (r = t.child,
            s = null; r !== null; )
                e = r.alternate,
                e !== null && li(e) === null && (s = r),
                r = r.sibling;
            r = s,
            r === null ? (s = t.child,
            t.child = null) : (s = r.sibling,
            r.sibling = null),
            _o(t, !1, s, r, i);
            break;
        case "backwards":
            for (r = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && li(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = r,
                r = s,
                s = e
            }
            _o(t, !0, r, null, i);
            break;
        case "together":
            _o(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Bs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ft(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    ar |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        r = Dt(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = Dt(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function Um(e, t, r) {
    switch (t.tag) {
    case 3:
        vh(t),
        Br();
        break;
    case 5:
        Hd(t);
        break;
    case 1:
        je(t.type) && ri(t);
        break;
    case 4:
        cl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , s = t.memoizedProps.value;
        B(ii, n._currentValue),
        n._currentValue = s;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (B(q, q.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? yh(e, t, r) : (B(q, q.current & 1),
            e = ft(e, t, r),
            e !== null ? e.sibling : null);
        B(q, q.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (n)
                return wh(e, t, r);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        B(q, q.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        mh(e, t, r)
    }
    return ft(e, t, r)
}
var xh, ga, _h, kh;
xh = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
ga = function() {}
;
_h = function(e, t, r, n) {
    var s = e.memoizedProps;
    if (s !== n) {
        e = t.stateNode,
        tr(tt.current);
        var i = null;
        switch (r) {
        case "input":
            s = Mo(e, s),
            n = Mo(e, n),
            i = [];
            break;
        case "select":
            s = J({}, s, {
                value: void 0
            }),
            n = J({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = Fo(e, s),
            n = Fo(e, n),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ei)
        }
        Wo(r, n);
        var o;
        r = null;
        for (c in s)
            if (!n.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === "style") {
                    var a = s[c];
                    for (o in a)
                        a.hasOwnProperty(o) && (r || (r = {}),
                        r[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && ($n.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in n) {
            var l = n[c];
            if (a = s != null ? s[c] : void 0,
            n.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}),
                            r[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}),
                            r[o] = l[o])
                    } else
                        r || (i || (i = []),
                        i.push(c, r)),
                        r = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && ($n.hasOwnProperty(c) ? (l != null && c === "onScroll" && W("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(c, l))
        }
        r && (i = i || []).push("style", r);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
kh = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
}
;
function hn(e, t) {
    if (!H)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
}
function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , n = 0;
    if (t)
        for (var s = e.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags & 14680064,
            n |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags,
            n |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= n,
    e.childLanes = r,
    t
}
function zm(e, t, r) {
    var n = t.pendingProps;
    switch (nl(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return fe(t),
        null;
    case 1:
        return je(t.type) && ti(),
        fe(t),
        null;
    case 3:
        return n = t.stateNode,
        Vr(),
        V(be),
        V(me),
        hl(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (Ss(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        He !== null && (ba(He),
        He = null))),
        ga(e, t),
        fe(t),
        null;
    case 5:
        dl(t);
        var s = tr(qn.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            _h(e, t, r, n, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return fe(t),
                null
            }
            if (e = tr(tt.current),
            Ss(t)) {
                n = t.stateNode,
                r = t.type;
                var i = t.memoizedProps;
                switch (n[Ze] = t,
                n[Vn] = i,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    W("cancel", n),
                    W("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", n);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < _n.length; s++)
                        W(_n[s], n);
                    break;
                case "source":
                    W("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", n),
                    W("load", n);
                    break;
                case "details":
                    W("toggle", n);
                    break;
                case "input":
                    Hl(n, i),
                    W("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    W("invalid", n);
                    break;
                case "textarea":
                    Yl(n, i),
                    W("invalid", n)
                }
                Wo(r, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && ks(n.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ks(n.textContent, a, e),
                        s = ["children", "" + a]) : $n.hasOwnProperty(o) && a != null && o === "onScroll" && W("scroll", n)
                    }
                switch (r) {
                case "input":
                    ps(n),
                    ql(n, i, !0);
                    break;
                case "textarea":
                    ps(n),
                    Jl(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = ei)
                }
                n = s,
                t.updateQueue = n,
                n !== null && (t.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Gc(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, {
                    is: n.is
                }) : (e = o.createElement(r),
                r === "select" && (o = e,
                n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r),
                e[Ze] = t,
                e[Vn] = n,
                xh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Vo(r, n),
                    r) {
                    case "dialog":
                        W("cancel", e),
                        W("close", e),
                        s = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", e),
                        s = n;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < _n.length; s++)
                            W(_n[s], e);
                        s = n;
                        break;
                    case "source":
                        W("error", e),
                        s = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", e),
                        W("load", e),
                        s = n;
                        break;
                    case "details":
                        W("toggle", e),
                        s = n;
                        break;
                    case "input":
                        Hl(e, n),
                        s = Mo(e, n),
                        W("invalid", e);
                        break;
                    case "option":
                        s = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        s = J({}, n, {
                            value: void 0
                        }),
                        W("invalid", e);
                        break;
                    case "textarea":
                        Yl(e, n),
                        s = Fo(e, n),
                        W("invalid", e);
                        break;
                    default:
                        s = n
                    }
                    Wo(r, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Zc(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Kc(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && In(e, l) : typeof l == "number" && In(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && ($n.hasOwnProperty(i) ? l != null && i === "onScroll" && W("scroll", e) : l != null && Ba(e, i, l, o))
                        }
                    switch (r) {
                    case "input":
                        ps(e),
                        ql(e, n, !1);
                        break;
                    case "textarea":
                        ps(e),
                        Jl(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + Mt(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? Lr(e, !!n.multiple, i, !1) : n.defaultValue != null && Lr(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = ei)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return fe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            kh(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(j(166));
            if (r = tr(qn.current),
            tr(tt.current),
            Ss(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[Ze] = t,
                (i = n.nodeValue !== r) && (e = Te,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ks(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ks(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Ze] = t,
                t.stateNode = n
        }
        return fe(t),
        null;
    case 13:
        if (V(q),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (H && Ce !== null && t.mode & 1 && !(t.flags & 128))
                zd(),
                Br(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ss(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[Ze] = t
                } else
                    Br(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                fe(t),
                i = !1
            } else
                He !== null && (ba(He),
                He = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || q.current & 1 ? se === 0 && (se = 3) : bl())),
        t.updateQueue !== null && (t.flags |= 4),
        fe(t),
        null);
    case 4:
        return Vr(),
        ga(e, t),
        e === null && Bn(t.stateNode.containerInfo),
        fe(t),
        null;
    case 10:
        return al(t.type._context),
        fe(t),
        null;
    case 17:
        return je(t.type) && ti(),
        fe(t),
        null;
    case 19:
        if (V(q),
        i = t.memoizedState,
        i === null)
            return fe(t),
            null;
        if (n = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (n)
                hn(i, !1);
            else {
                if (se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = li(e),
                        o !== null) {
                            for (t.flags |= 128,
                            hn(i, !1),
                            n = o.updateQueue,
                            n !== null && (t.updateQueue = n,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child; r !== null; )
                                i = r,
                                e = n,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return B(q, q.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Z() > qr && (t.flags |= 128,
                n = !0,
                hn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = li(o),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    hn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !H)
                        return fe(t),
                        null
                } else
                    2 * Z() - i.renderingStartTime > qr && r !== 1073741824 && (t.flags |= 128,
                    n = !0,
                    hn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (r = i.last,
            r !== null ? r.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Z(),
        t.sibling = null,
        r = q.current,
        B(q, n ? r & 1 | 2 : r & 1),
        t) : (fe(t),
        null);
    case 22:
    case 23:
        return Sl(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? Pe & 1073741824 && (fe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Fm(e, t) {
    switch (nl(t),
    t.tag) {
    case 1:
        return je(t.type) && ti(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Vr(),
        V(be),
        V(me),
        hl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return dl(t),
        null;
    case 13:
        if (V(q),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Br()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return V(q),
        null;
    case 4:
        return Vr(),
        null;
    case 10:
        return al(t.type._context),
        null;
    case 22:
    case 23:
        return Sl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Es = !1
  , pe = !1
  , Bm = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function Or(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                Q(e, t, n)
            }
        else
            r.current = null
}
function va(e, t, r) {
    try {
        r()
    } catch (n) {
        Q(e, t, n)
    }
}
var Au = !1;
function Wm(e, t) {
    if (ea = Ks,
    e = Nd(),
    tl(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var s = n.anchorOffset
                      , i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , d = 0
                      , h = e
                      , f = null;
                    t: for (; ; ) {
                        for (var w; h !== r || s !== 0 && h.nodeType !== 3 || (a = o + s),
                        h !== i || n !== 0 && h.nodeType !== 3 || (l = o + n),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (w = h.firstChild) !== null; )
                            f = h,
                            h = w;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (f === r && ++c === s && (a = o),
                            f === i && ++d === n && (l = o),
                            (w = h.nextSibling) !== null)
                                break;
                            h = f,
                            f = h.parentNode
                        }
                        h = w
                    }
                    r = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (ta = {
        focusedElem: e,
        selectionRange: r
    },
    Ks = !1,
    P = t; P !== null; )
        if (t = P,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            P = e;
        else
            for (; P !== null; ) {
                t = P;
                try {
                    var p = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (p !== null) {
                                var y = p.memoizedProps
                                  , b = p.memoizedState
                                  , m = t.stateNode
                                  , g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Be(t.type, y), b);
                                m.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (x) {
                    Q(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    P = e;
                    break
                }
                P = t.return
            }
    return p = Au,
    Au = !1,
    p
}
function Cn(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && va(t, r, i)
            }
            s = s.next
        } while (s !== n)
    }
}
function Ci(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}
function ya(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Sh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Sh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ze],
    delete t[Vn],
    delete t[sa],
    delete t[jm],
    delete t[Em])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function bh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Mu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || bh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function wa(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = ei));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (wa(e, t, r),
        e = e.sibling; e !== null; )
            wa(e, t, r),
            e = e.sibling
}
function xa(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (xa(e, t, r),
        e = e.sibling; e !== null; )
            xa(e, t, r),
            e = e.sibling
}
var ue = null
  , We = !1;
function gt(e, t, r) {
    for (r = r.child; r !== null; )
        jh(e, t, r),
        r = r.sibling
}
function jh(e, t, r) {
    if (et && typeof et.onCommitFiberUnmount == "function")
        try {
            et.onCommitFiberUnmount(_i, r)
        } catch {}
    switch (r.tag) {
    case 5:
        pe || Or(r, t);
    case 6:
        var n = ue
          , s = We;
        ue = null,
        gt(e, t, r),
        ue = n,
        We = s,
        ue !== null && (We ? (e = ue,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ue.removeChild(r.stateNode));
        break;
    case 18:
        ue !== null && (We ? (e = ue,
        r = r.stateNode,
        e.nodeType === 8 ? po(e.parentNode, r) : e.nodeType === 1 && po(e, r),
        Un(e)) : po(ue, r.stateNode));
        break;
    case 4:
        n = ue,
        s = We,
        ue = r.stateNode.containerInfo,
        We = !0,
        gt(e, t, r),
        ue = n,
        We = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!pe && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            s = n = n.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && va(r, t, o),
                s = s.next
            } while (s !== n)
        }
        gt(e, t, r);
        break;
    case 1:
        if (!pe && (Or(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (a) {
                Q(r, t, a)
            }
        gt(e, t, r);
        break;
    case 21:
        gt(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (pe = (n = pe) || r.memoizedState !== null,
        gt(e, t, r),
        pe = n) : gt(e, t, r);
        break;
    default:
        gt(e, t, r)
    }
}
function Uu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new Bm),
        t.forEach(function(n) {
            var s = Xm.bind(null, e, n);
            r.has(n) || (r.add(n),
            n.then(s, s))
        })
    }
}
function Fe(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ue = a.stateNode,
                        We = !1;
                        break e;
                    case 3:
                        ue = a.stateNode.containerInfo,
                        We = !0;
                        break e;
                    case 4:
                        ue = a.stateNode.containerInfo,
                        We = !0;
                        break e
                    }
                    a = a.return
                }
                if (ue === null)
                    throw Error(j(160));
                jh(i, o, s),
                ue = null,
                We = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (c) {
                Q(s, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Eh(t, e),
            t = t.sibling
}
function Eh(e, t) {
    var r = e.alternate
      , n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Fe(t, e),
        Ge(e),
        n & 4) {
            try {
                Cn(3, e, e.return),
                Ci(3, e)
            } catch (y) {
                Q(e, e.return, y)
            }
            try {
                Cn(5, e, e.return)
            } catch (y) {
                Q(e, e.return, y)
            }
        }
        break;
    case 1:
        Fe(t, e),
        Ge(e),
        n & 512 && r !== null && Or(r, r.return);
        break;
    case 5:
        if (Fe(t, e),
        Ge(e),
        n & 512 && r !== null && Or(r, r.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                In(s, "")
            } catch (y) {
                Q(e, e.return, y)
            }
        }
        if (n & 4 && (s = e.stateNode,
        s != null)) {
            var i = e.memoizedProps
              , o = r !== null ? r.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Jc(s, i),
                    Vo(a, o);
                    var c = Vo(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o]
                          , h = l[o + 1];
                        d === "style" ? Zc(s, h) : d === "dangerouslySetInnerHTML" ? Kc(s, h) : d === "children" ? In(s, h) : Ba(s, d, h, c)
                    }
                    switch (a) {
                    case "input":
                        Uo(s, i);
                        break;
                    case "textarea":
                        Qc(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var w = i.value;
                        w != null ? Lr(s, !!i.multiple, w, !1) : f !== !!i.multiple && (i.defaultValue != null ? Lr(s, !!i.multiple, i.defaultValue, !0) : Lr(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Vn] = i
                } catch (y) {
                    Q(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Fe(t, e),
        Ge(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (y) {
                Q(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Fe(t, e),
        Ge(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Un(t.containerInfo)
            } catch (y) {
                Q(e, e.return, y)
            }
        break;
    case 4:
        Fe(t, e),
        Ge(e);
        break;
    case 13:
        Fe(t, e),
        Ge(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (_l = Z())),
        n & 4 && Uu(e);
        break;
    case 22:
        if (d = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (pe = (c = pe) || d,
        Fe(t, e),
        pe = c) : Fe(t, e),
        Ge(e),
        n & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (P = e,
                d = e.child; d !== null; ) {
                    for (h = P = d; P !== null; ) {
                        switch (f = P,
                        w = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Cn(4, f, f.return);
                            break;
                        case 1:
                            Or(f, f.return);
                            var p = f.stateNode;
                            if (typeof p.componentWillUnmount == "function") {
                                n = f,
                                r = f.return;
                                try {
                                    t = n,
                                    p.props = t.memoizedProps,
                                    p.state = t.memoizedState,
                                    p.componentWillUnmount()
                                } catch (y) {
                                    Q(n, r, y)
                                }
                            }
                            break;
                        case 5:
                            Or(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Fu(h);
                                continue
                            }
                        }
                        w !== null ? (w.return = f,
                        P = w) : Fu(h)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (d === null) {
                        d = h;
                        try {
                            s = h.stateNode,
                            c ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = h.stateNode,
                            l = h.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Xc("display", o))
                        } catch (y) {
                            Q(e, e.return, y)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (y) {
                            Q(e, e.return, y)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    d === h && (d = null),
                    h = h.return
                }
                d === h && (d = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Fe(t, e),
        Ge(e),
        n & 4 && Uu(e);
        break;
    case 21:
        break;
    default:
        Fe(t, e),
        Ge(e)
    }
}
function Ge(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (bh(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(j(160))
            }
            switch (n.tag) {
            case 5:
                var s = n.stateNode;
                n.flags & 32 && (In(s, ""),
                n.flags &= -33);
                var i = Mu(e);
                xa(e, i, s);
                break;
            case 3:
            case 4:
                var o = n.stateNode.containerInfo
                  , a = Mu(e);
                wa(e, a, o);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            Q(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Vm(e, t, r) {
    P = e,
    Nh(e)
}
function Nh(e, t, r) {
    for (var n = (e.mode & 1) !== 0; P !== null; ) {
        var s = P
          , i = s.child;
        if (s.tag === 22 && n) {
            var o = s.memoizedState !== null || Es;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || pe;
                a = Es;
                var c = pe;
                if (Es = o,
                (pe = l) && !c)
                    for (P = s; P !== null; )
                        o = P,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Bu(s) : l !== null ? (l.return = o,
                        P = l) : Bu(s);
                for (; i !== null; )
                    P = i,
                    Nh(i),
                    i = i.sibling;
                P = s,
                Es = a,
                pe = c
            }
            zu(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            P = i) : zu(e)
    }
}
function zu(e) {
    for (; P !== null; ) {
        var t = P;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Ci(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !pe)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? r.memoizedProps : Be(t.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && bu(t, i, n);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            bu(t, o, r)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && Un(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                pe || t.flags & 512 && ya(t)
            } catch (f) {
                Q(t, t.return, f)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            P = r;
            break
        }
        P = t.return
    }
}
function Fu(e) {
    for (; P !== null; ) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            P = r;
            break
        }
        P = t.return
    }
}
function Bu(e) {
    for (; P !== null; ) {
        var t = P;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    Ci(4, t)
                } catch (l) {
                    Q(t, r, l)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        Q(t, s, l)
                    }
                }
                var i = t.return;
                try {
                    ya(t)
                } catch (l) {
                    Q(t, i, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    ya(t)
                } catch (l) {
                    Q(t, o, l)
                }
            }
        } catch (l) {
            Q(t, t.return, l)
        }
        if (t === e) {
            P = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            P = a;
            break
        }
        P = t.return
    }
}
var Hm = Math.ceil
  , di = mt.ReactCurrentDispatcher
  , wl = mt.ReactCurrentOwner
  , Ae = mt.ReactCurrentBatchConfig
  , M = 0
  , le = null
  , ee = null
  , ce = 0
  , Pe = 0
  , Rr = Ft(0)
  , se = 0
  , Gn = null
  , ar = 0
  , Ti = 0
  , xl = 0
  , Tn = null
  , _e = null
  , _l = 0
  , qr = 1 / 0
  , nt = null
  , hi = !1
  , _a = null
  , $t = null
  , Ns = !1
  , Nt = null
  , fi = 0
  , On = 0
  , ka = null
  , Ws = -1
  , Vs = 0;
function ve() {
    return M & 6 ? Z() : Ws !== -1 ? Ws : Ws = Z()
}
function It(e) {
    return e.mode & 1 ? M & 2 && ce !== 0 ? ce & -ce : Pm.transition !== null ? (Vs === 0 && (Vs = dd()),
    Vs) : (e = z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : yd(e.type)),
    e) : 1
}
function Ye(e, t, r, n) {
    if (50 < On)
        throw On = 0,
        ka = null,
        Error(j(185));
    rs(e, r, n),
    (!(M & 2) || e !== le) && (e === le && (!(M & 2) && (Ti |= r),
    se === 4 && bt(e, ce)),
    Ee(e, n),
    r === 1 && M === 0 && !(t.mode & 1) && (qr = Z() + 500,
    Ei && Bt()))
}
function Ee(e, t) {
    var r = e.callbackNode;
    Pp(e, t);
    var n = Gs(e, e === le ? ce : 0);
    if (n === 0)
        r !== null && Kl(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && Kl(r),
        t === 1)
            e.tag === 0 ? Nm(Wu.bind(null, e)) : Ad(Wu.bind(null, e)),
            Sm(function() {
                !(M & 6) && Bt()
            }),
            r = null;
        else {
            switch (hd(n)) {
            case 1:
                r = Ya;
                break;
            case 4:
                r = ud;
                break;
            case 16:
                r = Qs;
                break;
            case 536870912:
                r = cd;
                break;
            default:
                r = Qs
            }
            r = Ih(r, Ph.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function Ph(e, t) {
    if (Ws = -1,
    Vs = 0,
    M & 6)
        throw Error(j(327));
    var r = e.callbackNode;
    if (Mr() && e.callbackNode !== r)
        return null;
    var n = Gs(e, e === le ? ce : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = pi(e, n);
    else {
        t = n;
        var s = M;
        M |= 2;
        var i = Th();
        (le !== e || ce !== t) && (nt = null,
        qr = Z() + 500,
        rr(e, t));
        do
            try {
                Jm();
                break
            } catch (a) {
                Ch(e, a)
            }
        while (!0);
        ol(),
        di.current = i,
        M = s,
        ee !== null ? t = 0 : (le = null,
        ce = 0,
        t = se)
    }
    if (t !== 0) {
        if (t === 2 && (s = Qo(e),
        s !== 0 && (n = s,
        t = Sa(e, s))),
        t === 1)
            throw r = Gn,
            rr(e, 0),
            bt(e, n),
            Ee(e, Z()),
            r;
        if (t === 6)
            bt(e, n);
        else {
            if (s = e.current.alternate,
            !(n & 30) && !qm(s) && (t = pi(e, n),
            t === 2 && (i = Qo(e),
            i !== 0 && (n = i,
            t = Sa(e, i))),
            t === 1))
                throw r = Gn,
                rr(e, 0),
                bt(e, n),
                Ee(e, Z()),
                r;
            switch (e.finishedWork = s,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Qt(e, _e, nt);
                break;
            case 3:
                if (bt(e, n),
                (n & 130023424) === n && (t = _l + 500 - Z(),
                10 < t)) {
                    if (Gs(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & n) !== n) {
                        ve(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = na(Qt.bind(null, e, _e, nt), t);
                    break
                }
                Qt(e, _e, nt);
                break;
            case 4:
                if (bt(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < n; ) {
                    var o = 31 - qe(n);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    n &= ~i
                }
                if (n = s,
                n = Z() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Hm(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = na(Qt.bind(null, e, _e, nt), n);
                    break
                }
                Qt(e, _e, nt);
                break;
            case 5:
                Qt(e, _e, nt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Ee(e, Z()),
    e.callbackNode === r ? Ph.bind(null, e) : null
}
function Sa(e, t) {
    var r = Tn;
    return e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256),
    e = pi(e, t),
    e !== 2 && (t = _e,
    _e = r,
    t !== null && ba(t)),
    e
}
function ba(e) {
    _e === null ? _e = e : _e.push.apply(_e, e)
}
function qm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var s = r[n]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Je(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function bt(e, t) {
    for (t &= ~xl,
    t &= ~Ti,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - qe(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function Wu(e) {
    if (M & 6)
        throw Error(j(327));
    Mr();
    var t = Gs(e, 0);
    if (!(t & 1))
        return Ee(e, Z()),
        null;
    var r = pi(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = Qo(e);
        n !== 0 && (t = n,
        r = Sa(e, n))
    }
    if (r === 1)
        throw r = Gn,
        rr(e, 0),
        bt(e, t),
        Ee(e, Z()),
        r;
    if (r === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Qt(e, _e, nt),
    Ee(e, Z()),
    null
}
function kl(e, t) {
    var r = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = r,
        M === 0 && (qr = Z() + 500,
        Ei && Bt())
    }
}
function lr(e) {
    Nt !== null && Nt.tag === 0 && !(M & 6) && Mr();
    var t = M;
    M |= 1;
    var r = Ae.transition
      , n = z;
    try {
        if (Ae.transition = null,
        z = 1,
        e)
            return e()
    } finally {
        z = n,
        Ae.transition = r,
        M = t,
        !(M & 6) && Bt()
    }
}
function Sl() {
    Pe = Rr.current,
    V(Rr)
}
function rr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    km(r)),
    ee !== null)
        for (r = ee.return; r !== null; ) {
            var n = r;
            switch (nl(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && ti();
                break;
            case 3:
                Vr(),
                V(be),
                V(me),
                hl();
                break;
            case 5:
                dl(n);
                break;
            case 4:
                Vr();
                break;
            case 13:
                V(q);
                break;
            case 19:
                V(q);
                break;
            case 10:
                al(n.type._context);
                break;
            case 22:
            case 23:
                Sl()
            }
            r = r.return
        }
    if (le = e,
    ee = e = Dt(e.current, null),
    ce = Pe = t,
    se = 0,
    Gn = null,
    xl = Ti = ar = 0,
    _e = Tn = null,
    er !== null) {
        for (t = 0; t < er.length; t++)
            if (r = er[t],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var s = n.next
                  , i = r.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    n.next = o
                }
                r.pending = n
            }
        er = null
    }
    return e
}
function Ch(e, t) {
    do {
        var r = ee;
        try {
            if (ol(),
            zs.current = ci,
            ui) {
                for (var n = Y.memoizedState; n !== null; ) {
                    var s = n.queue;
                    s !== null && (s.pending = null),
                    n = n.next
                }
                ui = !1
            }
            if (or = 0,
            ae = ne = Y = null,
            Pn = !1,
            Yn = 0,
            wl.current = null,
            r === null || r.return === null) {
                se = 1,
                Gn = t,
                ee = null;
                break
            }
            e: {
                var i = e
                  , o = r.return
                  , a = r
                  , l = t;
                if (t = ce,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , d = a
                      , h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var w = Tu(o);
                    if (w !== null) {
                        w.flags &= -257,
                        Ou(w, o, a, i, t),
                        w.mode & 1 && Cu(i, c, t),
                        t = w,
                        l = c;
                        var p = t.updateQueue;
                        if (p === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            p.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Cu(i, c, t),
                            bl();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (H && a.mode & 1) {
                    var b = Tu(o);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256),
                        Ou(b, o, a, i, t),
                        sl(Hr(l, a));
                        break e
                    }
                }
                i = l = Hr(l, a),
                se !== 4 && (se = 2),
                Tn === null ? Tn = [i] : Tn.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = hh(i, l, t);
                        Su(i, m);
                        break e;
                    case 1:
                        a = l;
                        var g = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && ($t === null || !$t.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var x = fh(i, a, t);
                            Su(i, x);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Rh(r)
        } catch (S) {
            t = S,
            ee === r && r !== null && (ee = r = r.return);
            continue
        }
        break
    } while (!0)
}
function Th() {
    var e = di.current;
    return di.current = ci,
    e === null ? ci : e
}
function bl() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
    le === null || !(ar & 268435455) && !(Ti & 268435455) || bt(le, ce)
}
function pi(e, t) {
    var r = M;
    M |= 2;
    var n = Th();
    (le !== e || ce !== t) && (nt = null,
    rr(e, t));
    do
        try {
            Ym();
            break
        } catch (s) {
            Ch(e, s)
        }
    while (!0);
    if (ol(),
    M = r,
    di.current = n,
    ee !== null)
        throw Error(j(261));
    return le = null,
    ce = 0,
    se
}
function Ym() {
    for (; ee !== null; )
        Oh(ee)
}
function Jm() {
    for (; ee !== null && !wp(); )
        Oh(ee)
}
function Oh(e) {
    var t = $h(e.alternate, e, Pe);
    e.memoizedProps = e.pendingProps,
    t === null ? Rh(e) : ee = t,
    wl.current = null
}
function Rh(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = Fm(r, t),
            r !== null) {
                r.flags &= 32767,
                ee = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                se = 6,
                ee = null;
                return
            }
        } else if (r = zm(r, t, Pe),
        r !== null) {
            ee = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ee = t;
            return
        }
        ee = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}
function Qt(e, t, r) {
    var n = z
      , s = Ae.transition;
    try {
        Ae.transition = null,
        z = 1,
        Qm(e, t, r, n)
    } finally {
        Ae.transition = s,
        z = n
    }
    return null
}
function Qm(e, t, r, n) {
    do
        Mr();
    while (Nt !== null);
    if (M & 6)
        throw Error(j(327));
    r = e.finishedWork;
    var s = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Cp(e, i),
    e === le && (ee = le = null,
    ce = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Ns || (Ns = !0,
    Ih(Qs, function() {
        return Mr(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = Ae.transition,
        Ae.transition = null;
        var o = z;
        z = 1;
        var a = M;
        M |= 4,
        wl.current = null,
        Wm(e, r),
        Eh(r, e),
        mm(ta),
        Ks = !!ea,
        ta = ea = null,
        e.current = r,
        Vm(r),
        xp(),
        M = a,
        z = o,
        Ae.transition = i
    } else
        e.current = r;
    if (Ns && (Ns = !1,
    Nt = e,
    fi = s),
    i = e.pendingLanes,
    i === 0 && ($t = null),
    Sp(r.stateNode),
    Ee(e, Z()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            s = t[r],
            n(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (hi)
        throw hi = !1,
        e = _a,
        _a = null,
        e;
    return fi & 1 && e.tag !== 0 && Mr(),
    i = e.pendingLanes,
    i & 1 ? e === ka ? On++ : (On = 0,
    ka = e) : On = 0,
    Bt(),
    null
}
function Mr() {
    if (Nt !== null) {
        var e = hd(fi)
          , t = Ae.transition
          , r = z;
        try {
            if (Ae.transition = null,
            z = 16 > e ? 16 : e,
            Nt === null)
                var n = !1;
            else {
                if (e = Nt,
                Nt = null,
                fi = 0,
                M & 6)
                    throw Error(j(331));
                var s = M;
                for (M |= 4,
                P = e.current; P !== null; ) {
                    var i = P
                      , o = i.child;
                    if (P.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (P = c; P !== null; ) {
                                    var d = P;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Cn(8, d, i)
                                    }
                                    var h = d.child;
                                    if (h !== null)
                                        h.return = d,
                                        P = h;
                                    else
                                        for (; P !== null; ) {
                                            d = P;
                                            var f = d.sibling
                                              , w = d.return;
                                            if (Sh(d),
                                            d === c) {
                                                P = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = w,
                                                P = f;
                                                break
                                            }
                                            P = w
                                        }
                                }
                            }
                            var p = i.alternate;
                            if (p !== null) {
                                var y = p.child;
                                if (y !== null) {
                                    p.child = null;
                                    do {
                                        var b = y.sibling;
                                        y.sibling = null,
                                        y = b
                                    } while (y !== null)
                                }
                            }
                            P = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        P = o;
                    else
                        e: for (; P !== null; ) {
                            if (i = P,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cn(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                P = m;
                                break e
                            }
                            P = i.return
                        }
                }
                var g = e.current;
                for (P = g; P !== null; ) {
                    o = P;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                        P = v;
                    else
                        e: for (o = g; P !== null; ) {
                            if (a = P,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ci(9, a)
                                    }
                                } catch (S) {
                                    Q(a, a.return, S)
                                }
                            if (a === o) {
                                P = null;
                                break e
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                x.return = a.return,
                                P = x;
                                break e
                            }
                            P = a.return
                        }
                }
                if (M = s,
                Bt(),
                et && typeof et.onPostCommitFiberRoot == "function")
                    try {
                        et.onPostCommitFiberRoot(_i, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            z = r,
            Ae.transition = t
        }
    }
    return !1
}
function Vu(e, t, r) {
    t = Hr(r, t),
    t = hh(e, t, 1),
    e = Lt(e, t, 1),
    t = ve(),
    e !== null && (rs(e, 1, t),
    Ee(e, t))
}
function Q(e, t, r) {
    if (e.tag === 3)
        Vu(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vu(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && ($t === null || !$t.has(n))) {
                    e = Hr(r, e),
                    e = fh(t, e, 1),
                    t = Lt(t, e, 1),
                    e = ve(),
                    t !== null && (rs(t, 1, e),
                    Ee(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Gm(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = ve(),
    e.pingedLanes |= e.suspendedLanes & r,
    le === e && (ce & r) === r && (se === 4 || se === 3 && (ce & 130023424) === ce && 500 > Z() - _l ? rr(e, 0) : xl |= r),
    Ee(e, t)
}
function Lh(e, t) {
    t === 0 && (e.mode & 1 ? (t = vs,
    vs <<= 1,
    !(vs & 130023424) && (vs = 4194304)) : t = 1);
    var r = ve();
    e = ht(e, t),
    e !== null && (rs(e, t, r),
    Ee(e, r))
}
function Km(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    Lh(e, r)
}
function Xm(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode
          , s = e.memoizedState;
        s !== null && (r = s.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    n !== null && n.delete(t),
    Lh(e, r)
}
var $h;
$h = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || be.current)
            Se = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return Se = !1,
                Um(e, t, r);
            Se = !!(e.flags & 131072)
        }
    else
        Se = !1,
        H && t.flags & 1048576 && Md(t, si, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        Bs(e, t),
        e = t.pendingProps;
        var s = Fr(t, me.current);
        Ar(t, r),
        s = pl(null, t, n, e, s, r);
        var i = ml();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        je(n) ? (i = !0,
        ri(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        ul(t),
        s.updater = Pi,
        t.stateNode = s,
        s._reactInternals = t,
        ca(t, n, e, r),
        t = fa(null, t, n, !0, i, r)) : (t.tag = 0,
        H && i && rl(t),
        ge(null, t, s, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (Bs(e, t),
            e = t.pendingProps,
            s = n._init,
            n = s(n._payload),
            t.type = n,
            s = t.tag = eg(n),
            e = Be(n, e),
            s) {
            case 0:
                t = ha(null, t, n, e, r);
                break e;
            case 1:
                t = $u(null, t, n, e, r);
                break e;
            case 11:
                t = Ru(null, t, n, e, r);
                break e;
            case 14:
                t = Lu(null, t, n, Be(n.type, e), r);
                break e
            }
            throw Error(j(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Be(n, s),
        ha(e, t, n, s, r);
    case 1:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Be(n, s),
        $u(e, t, n, s, r);
    case 3:
        e: {
            if (vh(t),
            e === null)
                throw Error(j(387));
            n = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            Vd(e, t),
            ai(t, n, null, r);
            var o = t.memoizedState;
            if (n = o.element,
            i.isDehydrated)
                if (i = {
                    element: n,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    s = Hr(Error(j(423)), t),
                    t = Iu(e, t, n, r, s);
                    break e
                } else if (n !== s) {
                    s = Hr(Error(j(424)), t),
                    t = Iu(e, t, n, r, s);
                    break e
                } else
                    for (Ce = Rt(t.stateNode.containerInfo.firstChild),
                    Te = t,
                    H = !0,
                    He = null,
                    r = Bd(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Br(),
                n === s) {
                    t = ft(e, t, r);
                    break e
                }
                ge(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return Hd(t),
        e === null && aa(t),
        n = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        ra(n, s) ? o = null : i !== null && ra(n, i) && (t.flags |= 32),
        gh(e, t),
        ge(e, t, o, r),
        t.child;
    case 6:
        return e === null && aa(t),
        null;
    case 13:
        return yh(e, t, r);
    case 4:
        return cl(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Wr(t, null, n, r) : ge(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Be(n, s),
        Ru(e, t, n, s, r);
    case 7:
        return ge(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return ge(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return ge(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            B(ii, n._currentValue),
            n._currentValue = o,
            i !== null)
                if (Je(i.value, o)) {
                    if (i.children === s.children && !be.current) {
                        t = ft(e, t, r);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === n) {
                                    if (i.tag === 1) {
                                        l = ut(-1, r & -r),
                                        l.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            c.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    la(i.return, r, t),
                                    a.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(j(341));
                            o.lanes |= r,
                            a = o.alternate,
                            a !== null && (a.lanes |= r),
                            la(o, r, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            ge(e, t, s.children, r),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        n = t.pendingProps.children,
        Ar(t, r),
        s = Ue(s),
        n = n(s),
        t.flags |= 1,
        ge(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        s = Be(n, t.pendingProps),
        s = Be(n.type, s),
        Lu(e, t, n, s, r);
    case 15:
        return ph(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Be(n, s),
        Bs(e, t),
        t.tag = 1,
        je(n) ? (e = !0,
        ri(t)) : e = !1,
        Ar(t, r),
        dh(t, n, s),
        ca(t, n, s, r),
        fa(null, t, n, !0, e, r);
    case 19:
        return wh(e, t, r);
    case 22:
        return mh(e, t, r)
    }
    throw Error(j(156, t.tag))
}
;
function Ih(e, t) {
    return ld(e, t)
}
function Zm(e, t, r, n) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function De(e, t, r, n) {
    return new Zm(e,t,r,n)
}
function jl(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function eg(e) {
    if (typeof e == "function")
        return jl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Va)
            return 11;
        if (e === Ha)
            return 14
    }
    return 2
}
function Dt(e, t) {
    var r = e.alternate;
    return r === null ? (r = De(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function Hs(e, t, r, n, s, i) {
    var o = 2;
    if (n = e,
    typeof e == "function")
        jl(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case kr:
            return nr(r.children, s, i, t);
        case Wa:
            o = 8,
            s |= 8;
            break;
        case $o:
            return e = De(12, r, t, s | 2),
            e.elementType = $o,
            e.lanes = i,
            e;
        case Io:
            return e = De(13, r, t, s),
            e.elementType = Io,
            e.lanes = i,
            e;
        case Do:
            return e = De(19, r, t, s),
            e.elementType = Do,
            e.lanes = i,
            e;
        case Hc:
            return Oi(r, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wc:
                    o = 10;
                    break e;
                case Vc:
                    o = 9;
                    break e;
                case Va:
                    o = 11;
                    break e;
                case Ha:
                    o = 14;
                    break e;
                case xt:
                    o = 16,
                    n = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = De(o, r, t, s),
    t.elementType = e,
    t.type = n,
    t.lanes = i,
    t
}
function nr(e, t, r, n) {
    return e = De(7, e, n, t),
    e.lanes = r,
    e
}
function Oi(e, t, r, n) {
    return e = De(22, e, n, t),
    e.elementType = Hc,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ko(e, t, r) {
    return e = De(6, e, null, t),
    e.lanes = r,
    e
}
function So(e, t, r) {
    return t = De(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function tg(e, t, r, n, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ro(0),
    this.expirationTimes = ro(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ro(0),
    this.identifierPrefix = n,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function El(e, t, r, n, s, i, o, a, l) {
    return e = new tg(e,t,r,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = De(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ul(i),
    e
}
function rg(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: _r,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function Dh(e) {
    if (!e)
        return Ut;
    e = e._reactInternals;
    e: {
        if (dr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (je(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (je(r))
            return Dd(e, r, t)
    }
    return t
}
function Ah(e, t, r, n, s, i, o, a, l) {
    return e = El(r, n, !0, e, s, i, o, a, l),
    e.context = Dh(null),
    r = e.current,
    n = ve(),
    s = It(r),
    i = ut(n, s),
    i.callback = t ?? null,
    Lt(r, i, s),
    e.current.lanes = s,
    rs(e, s, n),
    Ee(e, n),
    e
}
function Ri(e, t, r, n) {
    var s = t.current
      , i = ve()
      , o = It(s);
    return r = Dh(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = ut(i, o),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = Lt(s, t, o),
    e !== null && (Ye(e, s, o, i),
    Us(e, s, o)),
    o
}
function mi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Hu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function Nl(e, t) {
    Hu(e, t),
    (e = e.alternate) && Hu(e, t)
}
function ng() {
    return null
}
var Mh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Pl(e) {
    this._internalRoot = e
}
Li.prototype.render = Pl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Ri(e, t, null, null)
}
;
Li.prototype.unmount = Pl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        lr(function() {
            Ri(null, e, null, null)
        }),
        t[dt] = null
    }
}
;
function Li(e) {
    this._internalRoot = e
}
Li.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = md();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < St.length && t !== 0 && t < St[r].priority; r++)
            ;
        St.splice(r, 0, e),
        r === 0 && vd(e)
    }
}
;
function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function $i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function qu() {}
function sg(e, t, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var c = mi(o);
                i.call(c)
            }
        }
        var o = Ah(t, n, e, 0, null, !1, !1, "", qu);
        return e._reactRootContainer = o,
        e[dt] = o.current,
        Bn(e.nodeType === 8 ? e.parentNode : e),
        lr(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof n == "function") {
        var a = n;
        n = function() {
            var c = mi(l);
            a.call(c)
        }
    }
    var l = El(e, 0, !1, null, null, !1, !1, "", qu);
    return e._reactRootContainer = l,
    e[dt] = l.current,
    Bn(e.nodeType === 8 ? e.parentNode : e),
    lr(function() {
        Ri(t, l, r, n)
    }),
    l
}
function Ii(e, t, r, n, s) {
    var i = r._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = mi(o);
                a.call(l)
            }
        }
        Ri(t, o, e, s)
    } else
        o = sg(r, t, e, s, n);
    return mi(o)
}
fd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = xn(t.pendingLanes);
            r !== 0 && (Ja(t, r | 1),
            Ee(t, Z()),
            !(M & 6) && (qr = Z() + 500,
            Bt()))
        }
        break;
    case 13:
        lr(function() {
            var n = ht(e, 1);
            if (n !== null) {
                var s = ve();
                Ye(n, e, 1, s)
            }
        }),
        Nl(e, 1)
    }
}
;
Qa = function(e) {
    if (e.tag === 13) {
        var t = ht(e, 134217728);
        if (t !== null) {
            var r = ve();
            Ye(t, e, 134217728, r)
        }
        Nl(e, 134217728)
    }
}
;
pd = function(e) {
    if (e.tag === 13) {
        var t = It(e)
          , r = ht(e, t);
        if (r !== null) {
            var n = ve();
            Ye(r, e, t, n)
        }
        Nl(e, t)
    }
}
;
md = function() {
    return z
}
;
gd = function(e, t) {
    var r = z;
    try {
        return z = e,
        t()
    } finally {
        z = r
    }
}
;
qo = function(e, t, r) {
    switch (t) {
    case "input":
        if (Uo(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var s = ji(n);
                    if (!s)
                        throw Error(j(90));
                    Yc(n),
                    Uo(n, s)
                }
            }
        }
        break;
    case "textarea":
        Qc(e, r);
        break;
    case "select":
        t = r.value,
        t != null && Lr(e, !!r.multiple, t, !1)
    }
}
;
rd = kl;
nd = lr;
var ig = {
    usingClientEntryPoint: !1,
    Events: [ss, Er, ji, ed, td, kl]
}
  , fn = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , og = {
    bundleType: fn.bundleType,
    version: fn.version,
    rendererPackageName: fn.rendererPackageName,
    rendererConfig: fn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = od(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: fn.findFiberByHostInstance || ng,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber)
        try {
            _i = Ps.inject(og),
            et = Ps
        } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
Re.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cl(t))
        throw Error(j(200));
    return rg(e, t, null, r)
}
;
Re.createRoot = function(e, t) {
    if (!Cl(e))
        throw Error(j(299));
    var r = !1
      , n = ""
      , s = Mh;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = El(e, 1, !1, null, null, r, !1, n, s),
    e[dt] = t.current,
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Pl(t)
}
;
Re.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = od(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Re.flushSync = function(e) {
    return lr(e)
}
;
Re.hydrate = function(e, t, r) {
    if (!$i(t))
        throw Error(j(200));
    return Ii(null, e, t, !0, r)
}
;
Re.hydrateRoot = function(e, t, r) {
    if (!Cl(e))
        throw Error(j(405));
    var n = r != null && r.hydratedSources || null
      , s = !1
      , i = ""
      , o = Mh;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    t = Ah(t, null, e, 1, r ?? null, s, !1, i, o),
    e[dt] = t.current,
    Bn(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            s = r._getVersion,
            s = s(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, s] : t.mutableSourceEagerHydrationData.push(r, s);
    return new Li(t)
}
;
Re.render = function(e, t, r) {
    if (!$i(t))
        throw Error(j(200));
    return Ii(null, e, t, !1, r)
}
;
Re.unmountComponentAtNode = function(e) {
    if (!$i(e))
        throw Error(j(40));
    return e._reactRootContainer ? (lr(function() {
        Ii(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[dt] = null
        })
    }),
    !0) : !1
}
;
Re.unstable_batchedUpdates = kl;
Re.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!$i(r))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Ii(e, t, r, !1, n)
}
;
Re.version = "18.3.1-next-f1338f8080-20240426";
function Uh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)
        } catch (e) {
            console.error(e)
        }
}
Uh(),
Uc.exports = Re;
var ag = Uc.exports, zh, Yu = ag;
zh = Yu.createRoot,
Yu.hydrateRoot;
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kn() {
    return Kn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Kn.apply(this, arguments)
}
var Pt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Pt || (Pt = {}));
const Ju = "popstate";
function lg(e) {
    e === void 0 && (e = {});
    function t(n, s) {
        let {pathname: i, search: o, hash: a} = n.location;
        return ja("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function r(n, s) {
        return typeof s == "string" ? s : gi(s)
    }
    return cg(t, r, null, e)
}
function te(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Fh(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function ug() {
    return Math.random().toString(36).substr(2, 8)
}
function Qu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function ja(e, t, r, n) {
    return r === void 0 && (r = null),
    Kn({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? rn(t) : t, {
        state: r,
        key: t && t.key || n || ug()
    })
}
function gi(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function rn(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n),
        e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function cg(e, t, r, n) {
    n === void 0 && (n = {});
    let {window: s=document.defaultView, v5Compat: i=!1} = n
      , o = s.history
      , a = Pt.Pop
      , l = null
      , c = d();
    c == null && (c = 0,
    o.replaceState(Kn({}, o.state, {
        idx: c
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        a = Pt.Pop;
        let b = d()
          , m = b == null ? null : b - c;
        c = b,
        l && l({
            action: a,
            location: y.location,
            delta: m
        })
    }
    function f(b, m) {
        a = Pt.Push;
        let g = ja(y.location, b, m);
        c = d() + 1;
        let v = Qu(g, c)
          , x = y.createHref(g);
        try {
            o.pushState(v, "", x)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            s.location.assign(x)
        }
        i && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function w(b, m) {
        a = Pt.Replace;
        let g = ja(y.location, b, m);
        c = d();
        let v = Qu(g, c)
          , x = y.createHref(g);
        o.replaceState(v, "", x),
        i && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function p(b) {
        let m = s.location.origin !== "null" ? s.location.origin : s.location.href
          , g = typeof b == "string" ? b : gi(b);
        return g = g.replace(/ $/, "%20"),
        te(m, "No window.location.(origin|href) available to create URL for href: " + g),
        new URL(g,m)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(s, o)
        },
        listen(b) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(Ju, h),
            l = b,
            () => {
                s.removeEventListener(Ju, h),
                l = null
            }
        },
        createHref(b) {
            return t(s, b)
        },
        createURL: p,
        encodeLocation(b) {
            let m = p(b);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: w,
        go(b) {
            return o.go(b)
        }
    };
    return y
}
var Gu;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Gu || (Gu = {}));
function dg(e, t, r) {
    return r === void 0 && (r = "/"),
    hg(e, t, r, !1)
}
function hg(e, t, r, n) {
    let s = typeof t == "string" ? rn(t) : t
      , i = Tl(s.pathname || "/", r);
    if (i == null)
        return null;
    let o = Bh(e);
    fg(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let c = bg(i);
        a = kg(o[l], c, n)
    }
    return a
}
function Bh(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        l.relativePath.startsWith("/") && (te(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let c = At([n, l.relativePath])
          , d = r.concat(l);
        i.children && i.children.length > 0 && (te(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        Bh(i.children, t, d, c)),
        !(i.path == null && !i.index) && t.push({
            path: c,
            score: xg(c, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
        else
            for (let l of Wh(i.path))
                s(i, o, l)
    }
    ),
    t
}
function Wh(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...n] = t
      , s = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (n.length === 0)
        return s ? [i, ""] : [i];
    let o = Wh(n.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? i : [i, l].join("/"))),
    s && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function fg(e) {
    e.sort( (t, r) => t.score !== r.score ? r.score - t.score : _g(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const pg = /^:[\w-]+$/
  , mg = 3
  , gg = 2
  , vg = 1
  , yg = 10
  , wg = -2
  , Ku = e => e === "*";
function xg(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(Ku) && (n += wg),
    t && (n += gg),
    r.filter(s => !Ku(s)).reduce( (s, i) => s + (pg.test(i) ? mg : i === "" ? vg : yg), n)
}
function _g(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (n, s) => n === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function kg(e, t, r) {
    let {routesMeta: n} = e
      , s = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < n.length; ++a) {
        let l = n[a]
          , c = a === n.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , h = Xu({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, d)
          , f = l.route;
        if (!h && c && r && !n[n.length - 1].route.index && (h = Xu({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        o.push({
            params: s,
            pathname: At([i, h.pathname]),
            pathnameBase: Pg(At([i, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (i = At([i, h.pathnameBase]))
    }
    return o
}
function Xu(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = Sg(e.path, e.caseSensitive, e.end)
      , s = t.match(r);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: n.reduce( (c, d, h) => {
            let {paramName: f, isOptional: w} = d;
            if (f === "*") {
                let y = a[h] || "";
                o = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const p = a[h];
            return w && !p ? c[f] = void 0 : c[f] = (p || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function Sg(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Fh(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (n.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), n]
}
function bg(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Fh(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Tl(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}
function jg(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: n="", hash: s=""} = typeof e == "string" ? rn(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : Eg(r, t) : t,
        search: Cg(n),
        hash: Tg(s)
    }
}
function Eg(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function bo(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Ng(e) {
    return e.filter( (t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}
function Vh(e, t) {
    let r = Ng(e);
    return t ? r.map( (n, s) => s === r.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}
function Hh(e, t, r, n) {
    n === void 0 && (n = !1);
    let s;
    typeof e == "string" ? s = rn(e) : (s = Kn({}, e),
    te(!s.pathname || !s.pathname.includes("?"), bo("?", "pathname", "search", s)),
    te(!s.pathname || !s.pathname.includes("#"), bo("#", "pathname", "hash", s)),
    te(!s.search || !s.search.includes("#"), bo("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "", o = i ? "/" : s.pathname, a;
    if (o == null)
        a = r;
    else {
        let h = t.length - 1;
        if (!n && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                h -= 1;
            s.pathname = f.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let l = jg(s, a)
      , c = o && o !== "/" && o.endsWith("/")
      , d = (i || o === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"),
    l
}
const At = e => e.join("/").replace(/\/\/+/g, "/")
  , Pg = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Cg = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Tg = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Og(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const qh = ["post", "put", "patch", "delete"];
new Set(qh);
const Rg = ["get", ...qh];
new Set(Rg);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xn() {
    return Xn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Xn.apply(this, arguments)
}
const Ol = k.createContext(null)
  , Lg = k.createContext(null)
  , hr = k.createContext(null)
  , Di = k.createContext(null)
  , fr = k.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yh = k.createContext(null);
function $g(e, t) {
    let {relative: r} = t === void 0 ? {} : t;
    os() || te(!1);
    let {basename: n, navigator: s} = k.useContext(hr)
      , {hash: i, pathname: o, search: a} = Qh(e, {
        relative: r
    })
      , l = o;
    return n !== "/" && (l = o === "/" ? n : At([n, o])),
    s.createHref({
        pathname: l,
        search: a,
        hash: i
    })
}
function os() {
    return k.useContext(Di) != null
}
function Ai() {
    return os() || te(!1),
    k.useContext(Di).location
}
function Jh(e) {
    k.useContext(hr).static || k.useLayoutEffect(e)
}
function as() {
    let {isDataRoute: e} = k.useContext(fr);
    return e ? Yg() : Ig()
}
function Ig() {
    os() || te(!1);
    let e = k.useContext(Ol)
      , {basename: t, future: r, navigator: n} = k.useContext(hr)
      , {matches: s} = k.useContext(fr)
      , {pathname: i} = Ai()
      , o = JSON.stringify(Vh(s, r.v7_relativeSplatPath))
      , a = k.useRef(!1);
    return Jh( () => {
        a.current = !0
    }
    ),
    k.useCallback(function(c, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof c == "number") {
            n.go(c);
            return
        }
        let h = Hh(c, JSON.parse(o), i, d.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : At([t, h.pathname])),
        (d.replace ? n.replace : n.push)(h, d.state, d)
    }, [t, n, o, i, e])
}
function Qh(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {future: n} = k.useContext(hr)
      , {matches: s} = k.useContext(fr)
      , {pathname: i} = Ai()
      , o = JSON.stringify(Vh(s, n.v7_relativeSplatPath));
    return k.useMemo( () => Hh(e, JSON.parse(o), i, r === "path"), [e, o, i, r])
}
function Dg(e, t) {
    return Ag(e, t)
}
function Ag(e, t, r, n) {
    os() || te(!1);
    let {navigator: s, static: i} = k.useContext(hr)
      , {matches: o} = k.useContext(fr)
      , a = o[o.length - 1]
      , l = a ? a.params : {};
    a && a.pathname;
    let c = a ? a.pathnameBase : "/";
    a && a.route;
    let d = Ai(), h;
    if (t) {
        var f;
        let m = typeof t == "string" ? rn(t) : t;
        c === "/" || (f = m.pathname) != null && f.startsWith(c) || te(!1),
        h = m
    } else
        h = d;
    let w = h.pathname || "/"
      , p = w;
    if (c !== "/") {
        let m = c.replace(/^\//, "").split("/");
        p = "/" + w.replace(/^\//, "").split("/").slice(m.length).join("/")
    }
    let y = !i && r && r.matches && r.matches.length > 0 ? r.matches : dg(e, {
        pathname: p
    })
      , b = Bg(y && y.map(m => Object.assign({}, m, {
        params: Object.assign({}, l, m.params),
        pathname: At([c, s.encodeLocation ? s.encodeLocation(m.pathname).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? c : At([c, s.encodeLocation ? s.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
    })), o, r, n);
    return t && b ? k.createElement(Di.Provider, {
        value: {
            location: Xn({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, h),
            navigationType: Pt.Pop
        }
    }, b) : b
}
function Mg() {
    let e = qg()
      , t = Og(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? k.createElement("pre", {
        style: s
    }, r) : null, null)
}
const Ug = k.createElement(Mg, null);
class zg extends k.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? k.createElement(fr.Provider, {
            value: this.props.routeContext
        }, k.createElement(Yh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Fg(e) {
    let {routeContext: t, match: r, children: n} = e
      , s = k.useContext(Ol);
    return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    k.createElement(fr.Provider, {
        value: t
    }, n)
}
function Bg(e, t, r, n) {
    var s;
    if (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null) {
        var i;
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if ((i = n) != null && i.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let o = e
      , a = (s = r) == null ? void 0 : s.errors;
    if (a != null) {
        let d = o.findIndex(h => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
        d >= 0 || te(!1),
        o = o.slice(0, Math.min(o.length, d + 1))
    }
    let l = !1
      , c = -1;
    if (r && n && n.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let h = o[d];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = d),
            h.route.id) {
                let {loaderData: f, errors: w} = r
                  , p = h.route.loader && f[h.route.id] === void 0 && (!w || w[h.route.id] === void 0);
                if (h.route.lazy || p) {
                    l = !0,
                    c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (d, h, f) => {
        let w, p = !1, y = null, b = null;
        r && (w = a && h.route.id ? a[h.route.id] : void 0,
        y = h.route.errorElement || Ug,
        l && (c < 0 && f === 0 ? (p = !0,
        b = null) : c === f && (p = !0,
        b = h.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, f + 1))
          , g = () => {
            let v;
            return w ? v = y : p ? v = b : h.route.Component ? v = k.createElement(h.route.Component, null) : h.route.element ? v = h.route.element : v = d,
            k.createElement(Fg, {
                match: h,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: r != null
                },
                children: v
            })
        }
        ;
        return r && (h.route.ErrorBoundary || h.route.errorElement || f === 0) ? k.createElement(zg, {
            location: r.location,
            revalidation: r.revalidation,
            component: y,
            error: w,
            children: g(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : g()
    }
    , null)
}
var Gh = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Gh || {})
  , vi = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(vi || {});
function Wg(e) {
    let t = k.useContext(Ol);
    return t || te(!1),
    t
}
function Vg(e) {
    let t = k.useContext(Lg);
    return t || te(!1),
    t
}
function Hg(e) {
    let t = k.useContext(fr);
    return t || te(!1),
    t
}
function Kh(e) {
    let t = Hg()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || te(!1),
    r.route.id
}
function qg() {
    var e;
    let t = k.useContext(Yh)
      , r = Vg(vi.UseRouteError)
      , n = Kh(vi.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function Yg() {
    let {router: e} = Wg(Gh.UseNavigateStable)
      , t = Kh(vi.UseNavigateStable)
      , r = k.useRef(!1);
    return Jh( () => {
        r.current = !0
    }
    ),
    k.useCallback(function(s, i) {
        i === void 0 && (i = {}),
        r.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, Xn({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function Jg(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function rt(e) {
    te(!1)
}
function Qg(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: s=Pt.Pop, navigator: i, static: o=!1, future: a} = e;
    os() && te(!1);
    let l = t.replace(/^\/*/, "/")
      , c = k.useMemo( () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Xn({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof n == "string" && (n = rn(n));
    let {pathname: d="/", search: h="", hash: f="", state: w=null, key: p="default"} = n
      , y = k.useMemo( () => {
        let b = Tl(d, l);
        return b == null ? null : {
            location: {
                pathname: b,
                search: h,
                hash: f,
                state: w,
                key: p
            },
            navigationType: s
        }
    }
    , [l, d, h, f, w, p, s]);
    return y == null ? null : k.createElement(hr.Provider, {
        value: c
    }, k.createElement(Di.Provider, {
        children: r,
        value: y
    }))
}
function Gg(e) {
    let {children: t, location: r} = e;
    return Dg(Ea(t), r)
}
new Promise( () => {}
);
function Ea(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return k.Children.forEach(e, (n, s) => {
        if (!k.isValidElement(n))
            return;
        let i = [...t, s];
        if (n.type === k.Fragment) {
            r.push.apply(r, Ea(n.props.children, i));
            return
        }
        n.type !== rt && te(!1),
        !n.props.index || !n.props.children || te(!1);
        let o = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (o.children = Ea(n.props.children, i)),
        r.push(o)
    }
    ),
    r
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Na() {
    return Na = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Na.apply(this, arguments)
}
function Kg(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), s, i;
    for (i = 0; i < n.length; i++)
        s = n[i],
        !(t.indexOf(s) >= 0) && (r[s] = e[s]);
    return r
}
function Xg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Zg(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Xg(e)
}
const e0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , t0 = "6";
try {
    window.__reactRouterVersion = t0
} catch {}
const r0 = "startTransition"
  , Zu = Gf[r0];
function n0(e) {
    let {basename: t, children: r, future: n, window: s} = e
      , i = k.useRef();
    i.current == null && (i.current = lg({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
      , [a,l] = k.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: c} = n || {}
      , d = k.useCallback(h => {
        c && Zu ? Zu( () => l(h)) : l(h)
    }
    , [l, c]);
    return k.useLayoutEffect( () => o.listen(d), [o, d]),
    k.useEffect( () => Jg(n), [n]),
    k.createElement(Qg, {
        basename: t,
        children: r,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: n
    })
}
const s0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , i0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , st = k.forwardRef(function(t, r) {
    let {onClick: n, relative: s, reloadDocument: i, replace: o, state: a, target: l, to: c, preventScrollReset: d, viewTransition: h} = t, f = Kg(t, e0), {basename: w} = k.useContext(hr), p, y = !1;
    if (typeof c == "string" && i0.test(c) && (p = c,
    s0))
        try {
            let v = new URL(window.location.href)
              , x = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c)
              , S = Tl(x.pathname, w);
            x.origin === v.origin && S != null ? c = S + x.search + x.hash : y = !0
        } catch {}
    let b = $g(c, {
        relative: s
    })
      , m = o0(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: s,
        viewTransition: h
    });
    function g(v) {
        n && n(v),
        v.defaultPrevented || m(v)
    }
    return k.createElement("a", Na({}, f, {
        href: p || b,
        onClick: y || i ? n : g,
        ref: r,
        target: l
    }))
});
var ec;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(ec || (ec = {}));
var tc;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(tc || (tc = {}));
function o0(e, t) {
    let {target: r, replace: n, state: s, preventScrollReset: i, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = as()
      , c = Ai()
      , d = Qh(e, {
        relative: o
    });
    return k.useCallback(h => {
        if (Zg(h, r)) {
            h.preventDefault();
            let f = n !== void 0 ? n : gi(c) === gi(d);
            l(e, {
                replace: f,
                state: s,
                preventScrollReset: i,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [c, l, d, n, s, r, e, i, o, a])
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var a0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , K = (e, t) => {
    const r = k.forwardRef( ({color: n="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: l, ...c}, d) => k.createElement("svg", {
        ref: d,
        ...a0,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${l0(e)}`, a].join(" "),
        ...c
    }, [...t.map( ([h,f]) => k.createElement(h, f)), ...Array.isArray(l) ? l : [l]]));
    return r.displayName = `${e}`,
    r
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = K("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = K("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = K("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = K("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = K("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = K("CircleUser", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}], ["path", {
    d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
    key: "154egf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = K("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = K("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = K("History", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M12 7v5l4 2",
    key: "1fdv2h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p0 = K("LogIn", [["path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    key: "u53s6r"
}], ["polyline", {
    points: "10 17 15 12 10 7",
    key: "1ail0h"
}], ["line", {
    x1: "15",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "v6grx8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = K("Music", [["path", {
    d: "M9 18V5l12-2v13",
    key: "1jmyc2"
}], ["circle", {
    cx: "6",
    cy: "18",
    r: "3",
    key: "fqmcym"
}], ["circle", {
    cx: "18",
    cy: "16",
    r: "3",
    key: "1hluhg"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = K("Pause", [["rect", {
    width: "4",
    height: "16",
    x: "6",
    y: "4",
    key: "iffhe4"
}], ["rect", {
    width: "4",
    height: "16",
    x: "14",
    y: "4",
    key: "sjin7j"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = K("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = K("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = K("Radio", [["path", {
    d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9",
    key: "1vaf9d"
}], ["path", {
    d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",
    key: "u1ii0m"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}], ["path", {
    d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",
    key: "1j5fej"
}], ["path", {
    d: "M19.1 4.9C23 8.8 23 15.1 19.1 19",
    key: "10b0cb"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = K("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = K("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = K("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = K("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = K("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = K("Volume2", [["polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    key: "16drj5"
}], ["path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07",
    key: "ltjumu"
}], ["path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14",
    key: "1kegas"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S0 = K("VolumeX", [["polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    key: "16drj5"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]])
  , b0 = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsenliZndybHRwbGV5dm1qbnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTY0OTMsImV4cCI6MjA2NDM3MjQ5M30.xRk4vB9ZGsy1D8egWNxeYRGavJs78YEoFNvJEIFARh0",
    VITE_SUPABASE_URL: "https://tlzybfwrltpleyvmjnxp.supabase.co"
}
  , rc = e => {
    let t;
    const r = new Set
      , n = (d, h) => {
        const f = typeof d == "function" ? d(t) : d;
        if (!Object.is(f, t)) {
            const w = t;
            t = h ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f),
            r.forEach(p => p(t, w))
        }
    }
      , s = () => t
      , l = {
        setState: n,
        getState: s,
        getInitialState: () => c,
        subscribe: d => (r.add(d),
        () => r.delete(d)),
        destroy: () => {
            (b0 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),
            r.clear()
        }
    }
      , c = t = e(n, s, l);
    return l
}
  , j0 = e => e ? rc(e) : rc;
var Zh = {
    exports: {}
}
  , ef = {}
  , tf = {
    exports: {}
}
  , rf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr = k;
function E0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var N0 = typeof Object.is == "function" ? Object.is : E0
  , P0 = Gr.useState
  , C0 = Gr.useEffect
  , T0 = Gr.useLayoutEffect
  , O0 = Gr.useDebugValue;
function R0(e, t) {
    var r = t()
      , n = P0({
        inst: {
            value: r,
            getSnapshot: t
        }
    })
      , s = n[0].inst
      , i = n[1];
    return T0(function() {
        s.value = r,
        s.getSnapshot = t,
        jo(s) && i({
            inst: s
        })
    }, [e, r, t]),
    C0(function() {
        return jo(s) && i({
            inst: s
        }),
        e(function() {
            jo(s) && i({
                inst: s
            })
        })
    }, [e]),
    O0(r),
    r
}
function jo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !N0(e, r)
    } catch {
        return !0
    }
}
function L0(e, t) {
    return t()
}
var $0 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? L0 : R0;
rf.useSyncExternalStore = Gr.useSyncExternalStore !== void 0 ? Gr.useSyncExternalStore : $0;
tf.exports = rf;
var I0 = tf.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui = k
  , D0 = I0;
function A0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var M0 = typeof Object.is == "function" ? Object.is : A0
  , U0 = D0.useSyncExternalStore
  , z0 = Ui.useRef
  , F0 = Ui.useEffect
  , B0 = Ui.useMemo
  , W0 = Ui.useDebugValue;
ef.useSyncExternalStoreWithSelector = function(e, t, r, n, s) {
    var i = z0(null);
    if (i.current === null) {
        var o = {
            hasValue: !1,
            value: null
        };
        i.current = o
    } else
        o = i.current;
    i = B0(function() {
        function l(w) {
            if (!c) {
                if (c = !0,
                d = w,
                w = n(w),
                s !== void 0 && o.hasValue) {
                    var p = o.value;
                    if (s(p, w))
                        return h = p
                }
                return h = w
            }
            if (p = h,
            M0(d, w))
                return p;
            var y = n(w);
            return s !== void 0 && s(p, y) ? (d = w,
            p) : (d = w,
            h = y)
        }
        var c = !1, d, h, f = r === void 0 ? null : r;
        return [function() {
            return l(t())
        }
        , f === null ? void 0 : function() {
            return l(f())
        }
        ]
    }, [t, r, n, s]);
    var a = U0(e, i[0], i[1]);
    return F0(function() {
        o.hasValue = !0,
        o.value = a
    }, [a]),
    W0(a),
    a
}
;
Zh.exports = ef;
var V0 = Zh.exports;
const H0 = Nc(V0)
  , nf = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsenliZndybHRwbGV5dm1qbnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTY0OTMsImV4cCI6MjA2NDM3MjQ5M30.xRk4vB9ZGsy1D8egWNxeYRGavJs78YEoFNvJEIFARh0",
    VITE_SUPABASE_URL: "https://tlzybfwrltpleyvmjnxp.supabase.co"
}
  , {useDebugValue: q0} = Ua
  , {useSyncExternalStoreWithSelector: Y0} = H0;
let nc = !1;
const J0 = e => e;
function Q0(e, t=J0, r) {
    (nf ? "production" : void 0) !== "production" && r && !nc && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),
    nc = !0);
    const n = Y0(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
    return q0(n),
    n
}
const sc = e => {
    (nf ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    const t = typeof e == "function" ? j0(e) : e
      , r = (n, s) => Q0(t, n, s);
    return Object.assign(r, t),
    r
}
  , G0 = e => e ? sc(e) : sc
  , K0 = "modulepreload"
  , X0 = function(e) {
    return "/" + e
}
  , ic = {}
  , Kr = function(t, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(r.map(l => {
            if (l = X0(l),
            l in ic)
                return;
            ic[l] = !0;
            const c = l.endsWith(".css")
              , d = c ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${d}`))
                return;
            const h = document.createElement("link");
            if (h.rel = c ? "stylesheet" : K0,
            c || (h.as = "script"),
            h.crossOrigin = "",
            h.href = l,
            a && h.setAttribute("nonce", a),
            document.head.appendChild(h),
            c)
                return new Promise( (f, w) => {
                    h.addEventListener("load", f),
                    h.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return s.then(o => {
        for (const a of o || [])
            a.status === "rejected" && i(a.reason);
        return t().catch(i)
    }
    )
}
  , Z0 = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...r) => Kr(async () => {
        const {default: n} = await Promise.resolve().then( () => nn);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : t = fetch,
    (...r) => t(...r)
}
;
class Ll extends Error {
    constructor(t, r="FunctionsError", n) {
        super(t),
        this.name = r,
        this.context = n
    }
}
class ev extends Ll {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class tv extends Ll {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class rv extends Ll {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Pa;
(function(e) {
    e.Any = "any",
    e.ApNortheast1 = "ap-northeast-1",
    e.ApNortheast2 = "ap-northeast-2",
    e.ApSouth1 = "ap-south-1",
    e.ApSoutheast1 = "ap-southeast-1",
    e.ApSoutheast2 = "ap-southeast-2",
    e.CaCentral1 = "ca-central-1",
    e.EuCentral1 = "eu-central-1",
    e.EuWest1 = "eu-west-1",
    e.EuWest2 = "eu-west-2",
    e.EuWest3 = "eu-west-3",
    e.SaEast1 = "sa-east-1",
    e.UsEast1 = "us-east-1",
    e.UsWest1 = "us-west-1",
    e.UsWest2 = "us-west-2"
}
)(Pa || (Pa = {}));
var nv = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
class sv {
    constructor(t, {headers: r={}, customFetch: n, region: s=Pa.Any}={}) {
        this.url = t,
        this.headers = r,
        this.region = s,
        this.fetch = Z0(n)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, r={}) {
        var n;
        return nv(this, void 0, void 0, function*() {
            try {
                const {headers: s, method: i, body: o} = r;
                let a = {}
                  , {region: l} = r;
                l || (l = this.region),
                l && l !== "any" && (a["x-region"] = l);
                let c;
                o && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream",
                c = o) : typeof o == "string" ? (a["Content-Type"] = "text/plain",
                c = o) : typeof FormData < "u" && o instanceof FormData ? c = o : (a["Content-Type"] = "application/json",
                c = JSON.stringify(o)));
                const d = yield this.fetch(`${this.url}/${t}`, {
                    method: i || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), s),
                    body: c
                }).catch(p => {
                    throw new ev(p)
                }
                )
                  , h = d.headers.get("x-relay-error");
                if (h && h === "true")
                    throw new tv(d);
                if (!d.ok)
                    throw new rv(d);
                let f = ((n = d.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), w;
                return f === "application/json" ? w = yield d.json() : f === "application/octet-stream" ? w = yield d.blob() : f === "text/event-stream" ? w = d : f === "multipart/form-data" ? w = yield d.formData() : w = yield d.text(),
                {
                    data: w,
                    error: null
                }
            } catch (s) {
                return {
                    data: null,
                    error: s
                }
            }
        })
    }
}
var ke = {}
  , $l = {}
  , zi = {}
  , ls = {}
  , Fi = {}
  , Bi = {}
  , iv = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , Xr = iv();
const ov = Xr.fetch
  , sf = Xr.fetch.bind(Xr)
  , of = Xr.Headers
  , av = Xr.Request
  , lv = Xr.Response
  , nn = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: of,
    Request: av,
    Response: lv,
    default: sf,
    fetch: ov
}, Symbol.toStringTag, {
    value: "Module"
}))
  , uv = $f(nn);
var Wi = {};
Object.defineProperty(Wi, "__esModule", {
    value: !0
});
let cv = class extends Error {
    constructor(t) {
        super(t.message),
        this.name = "PostgrestError",
        this.details = t.details,
        this.hint = t.hint,
        this.code = t.code
    }
}
;
Wi.default = cv;
var af = Me && Me.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Bi, "__esModule", {
    value: !0
});
const dv = af(uv)
  , hv = af(Wi);
let fv = class {
    constructor(t) {
        this.shouldThrowOnError = !1,
        this.method = t.method,
        this.url = t.url,
        this.headers = t.headers,
        this.schema = t.schema,
        this.body = t.body,
        this.shouldThrowOnError = t.shouldThrowOnError,
        this.signal = t.signal,
        this.isMaybeSingle = t.isMaybeSingle,
        t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = dv.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(t, r) {
        return this.headers = Object.assign({}, this.headers),
        this.headers[t] = r,
        this
    }
    then(t, r) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema),
        this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
        const n = this.fetch;
        let s = n(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async i => {
            var o, a, l;
            let c = null
              , d = null
              , h = null
              , f = i.status
              , w = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const m = await i.text();
                    m === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? d = m : d = JSON.parse(m))
                }
                const y = (o = this.headers.Prefer) === null || o === void 0 ? void 0 : o.match(/count=(exact|planned|estimated)/)
                  , b = (a = i.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
                y && b && b.length > 1 && (h = parseInt(b[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (c = {
                    code: "PGRST116",
                    details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                d = null,
                h = null,
                f = 406,
                w = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null)
            } else {
                const y = await i.text();
                try {
                    c = JSON.parse(y),
                    Array.isArray(c) && i.status === 404 && (d = [],
                    c = null,
                    f = 200,
                    w = "OK")
                } catch {
                    i.status === 404 && y === "" ? (f = 204,
                    w = "No Content") : c = {
                        message: y
                    }
                }
                if (c && this.isMaybeSingle && (!((l = c == null ? void 0 : c.details) === null || l === void 0) && l.includes("0 rows")) && (c = null,
                f = 200,
                w = "OK"),
                c && this.shouldThrowOnError)
                    throw new hv.default(c)
            }
            return {
                error: c,
                data: d,
                count: h,
                status: f,
                statusText: w
            }
        }
        );
        return this.shouldThrowOnError || (s = s.catch(i => {
            var o, a, l;
            return {
                error: {
                    message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : "FetchError"}: ${i == null ? void 0 : i.message}`,
                    details: `${(a = i == null ? void 0 : i.stack) !== null && a !== void 0 ? a : ""}`,
                    hint: "",
                    code: `${(l = i == null ? void 0 : i.code) !== null && l !== void 0 ? l : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        s.then(t, r)
    }
}
;
Bi.default = fv;
var pv = Me && Me.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Fi, "__esModule", {
    value: !0
});
const mv = pv(Bi);
let gv = class extends mv.default {
    select(t) {
        let r = !1;
        const n = (t ?? "*").split("").map(s => /\s/.test(s) && !r ? "" : (s === '"' && (r = !r),
        s)).join("");
        return this.url.searchParams.set("select", n),
        this.headers.Prefer && (this.headers.Prefer += ","),
        this.headers.Prefer += "return=representation",
        this
    }
    order(t, {ascending: r=!0, nullsFirst: n, foreignTable: s, referencedTable: i=s}={}) {
        const o = i ? `${i}.order` : "order"
          , a = this.url.searchParams.get(o);
        return this.url.searchParams.set(o, `${a ? `${a},` : ""}${t}.${r ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(t, {foreignTable: r, referencedTable: n=r}={}) {
        const s = typeof n > "u" ? "limit" : `${n}.limit`;
        return this.url.searchParams.set(s, `${t}`),
        this
    }
    range(t, r, {foreignTable: n, referencedTable: s=n}={}) {
        const i = typeof s > "u" ? "offset" : `${s}.offset`
          , o = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(i, `${t}`),
        this.url.searchParams.set(o, `${r - t + 1}`),
        this
    }
    abortSignal(t) {
        return this.signal = t,
        this
    }
    single() {
        return this.headers.Accept = "application/vnd.pgrst.object+json",
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.Accept = "text/csv",
        this
    }
    geojson() {
        return this.headers.Accept = "application/geo+json",
        this
    }
    explain({analyze: t=!1, verbose: r=!1, settings: n=!1, buffers: s=!1, wal: i=!1, format: o="text"}={}) {
        var a;
        const l = [t ? "analyze" : null, r ? "verbose" : null, n ? "settings" : null, s ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|")
          , c = (a = this.headers.Accept) !== null && a !== void 0 ? a : "application/json";
        return this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${c}"; options=${l};`,
        o === "json" ? this : this
    }
    rollback() {
        var t;
        return ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback",
        this
    }
    returns() {
        return this
    }
}
;
Fi.default = gv;
var vv = Me && Me.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ls, "__esModule", {
    value: !0
});
const yv = vv(Fi);
let wv = class extends yv.default {
    eq(t, r) {
        return this.url.searchParams.append(t, `eq.${r}`),
        this
    }
    neq(t, r) {
        return this.url.searchParams.append(t, `neq.${r}`),
        this
    }
    gt(t, r) {
        return this.url.searchParams.append(t, `gt.${r}`),
        this
    }
    gte(t, r) {
        return this.url.searchParams.append(t, `gte.${r}`),
        this
    }
    lt(t, r) {
        return this.url.searchParams.append(t, `lt.${r}`),
        this
    }
    lte(t, r) {
        return this.url.searchParams.append(t, `lte.${r}`),
        this
    }
    like(t, r) {
        return this.url.searchParams.append(t, `like.${r}`),
        this
    }
    likeAllOf(t, r) {
        return this.url.searchParams.append(t, `like(all).{${r.join(",")}}`),
        this
    }
    likeAnyOf(t, r) {
        return this.url.searchParams.append(t, `like(any).{${r.join(",")}}`),
        this
    }
    ilike(t, r) {
        return this.url.searchParams.append(t, `ilike.${r}`),
        this
    }
    ilikeAllOf(t, r) {
        return this.url.searchParams.append(t, `ilike(all).{${r.join(",")}}`),
        this
    }
    ilikeAnyOf(t, r) {
        return this.url.searchParams.append(t, `ilike(any).{${r.join(",")}}`),
        this
    }
    is(t, r) {
        return this.url.searchParams.append(t, `is.${r}`),
        this
    }
    in(t, r) {
        const n = Array.from(new Set(r)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(t, `in.(${n})`),
        this
    }
    contains(t, r) {
        return typeof r == "string" ? this.url.searchParams.append(t, `cs.${r}`) : Array.isArray(r) ? this.url.searchParams.append(t, `cs.{${r.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(r)}`),
        this
    }
    containedBy(t, r) {
        return typeof r == "string" ? this.url.searchParams.append(t, `cd.${r}`) : Array.isArray(r) ? this.url.searchParams.append(t, `cd.{${r.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(r)}`),
        this
    }
    rangeGt(t, r) {
        return this.url.searchParams.append(t, `sr.${r}`),
        this
    }
    rangeGte(t, r) {
        return this.url.searchParams.append(t, `nxl.${r}`),
        this
    }
    rangeLt(t, r) {
        return this.url.searchParams.append(t, `sl.${r}`),
        this
    }
    rangeLte(t, r) {
        return this.url.searchParams.append(t, `nxr.${r}`),
        this
    }
    rangeAdjacent(t, r) {
        return this.url.searchParams.append(t, `adj.${r}`),
        this
    }
    overlaps(t, r) {
        return typeof r == "string" ? this.url.searchParams.append(t, `ov.${r}`) : this.url.searchParams.append(t, `ov.{${r.join(",")}}`),
        this
    }
    textSearch(t, r, {config: n, type: s}={}) {
        let i = "";
        s === "plain" ? i = "pl" : s === "phrase" ? i = "ph" : s === "websearch" && (i = "w");
        const o = n === void 0 ? "" : `(${n})`;
        return this.url.searchParams.append(t, `${i}fts${o}.${r}`),
        this
    }
    match(t) {
        return Object.entries(t).forEach( ([r,n]) => {
            this.url.searchParams.append(r, `eq.${n}`)
        }
        ),
        this
    }
    not(t, r, n) {
        return this.url.searchParams.append(t, `not.${r}.${n}`),
        this
    }
    or(t, {foreignTable: r, referencedTable: n=r}={}) {
        const s = n ? `${n}.or` : "or";
        return this.url.searchParams.append(s, `(${t})`),
        this
    }
    filter(t, r, n) {
        return this.url.searchParams.append(t, `${r}.${n}`),
        this
    }
}
;
ls.default = wv;
var xv = Me && Me.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(zi, "__esModule", {
    value: !0
});
const pn = xv(ls);
let _v = class {
    constructor(t, {headers: r={}, schema: n, fetch: s}) {
        this.url = t,
        this.headers = r,
        this.schema = n,
        this.fetch = s
    }
    select(t, {head: r=!1, count: n}={}) {
        const s = r ? "HEAD" : "GET";
        let i = !1;
        const o = (t ?? "*").split("").map(a => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i),
        a)).join("");
        return this.url.searchParams.set("select", o),
        n && (this.headers.Prefer = `count=${n}`),
        new pn.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    insert(t, {count: r, defaultToNull: n=!0}={}) {
        const s = "POST"
          , i = [];
        if (this.headers.Prefer && i.push(this.headers.Prefer),
        r && i.push(`count=${r}`),
        n || i.push("missing=default"),
        this.headers.Prefer = i.join(","),
        Array.isArray(t)) {
            const o = t.reduce( (a, l) => a.concat(Object.keys(l)), []);
            if (o.length > 0) {
                const a = [...new Set(o)].map(l => `"${l}"`);
                this.url.searchParams.set("columns", a.join(","))
            }
        }
        return new pn.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    upsert(t, {onConflict: r, ignoreDuplicates: n=!1, count: s, defaultToNull: i=!0}={}) {
        const o = "POST"
          , a = [`resolution=${n ? "ignore" : "merge"}-duplicates`];
        if (r !== void 0 && this.url.searchParams.set("on_conflict", r),
        this.headers.Prefer && a.push(this.headers.Prefer),
        s && a.push(`count=${s}`),
        i || a.push("missing=default"),
        this.headers.Prefer = a.join(","),
        Array.isArray(t)) {
            const l = t.reduce( (c, d) => c.concat(Object.keys(d)), []);
            if (l.length > 0) {
                const c = [...new Set(l)].map(d => `"${d}"`);
                this.url.searchParams.set("columns", c.join(","))
            }
        }
        return new pn.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    update(t, {count: r}={}) {
        const n = "PATCH"
          , s = [];
        return this.headers.Prefer && s.push(this.headers.Prefer),
        r && s.push(`count=${r}`),
        this.headers.Prefer = s.join(","),
        new pn.default({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    delete({count: t}={}) {
        const r = "DELETE"
          , n = [];
        return t && n.push(`count=${t}`),
        this.headers.Prefer && n.unshift(this.headers.Prefer),
        this.headers.Prefer = n.join(","),
        new pn.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}
;
zi.default = _v;
var Vi = {}
  , Hi = {};
Object.defineProperty(Hi, "__esModule", {
    value: !0
});
Hi.version = void 0;
Hi.version = "0.0.0-automated";
Object.defineProperty(Vi, "__esModule", {
    value: !0
});
Vi.DEFAULT_HEADERS = void 0;
const kv = Hi;
Vi.DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${kv.version}`
};
var lf = Me && Me.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty($l, "__esModule", {
    value: !0
});
const Sv = lf(zi)
  , bv = lf(ls)
  , jv = Vi;
let Ev = class uf {
    constructor(t, {headers: r={}, schema: n, fetch: s}={}) {
        this.url = t,
        this.headers = Object.assign(Object.assign({}, jv.DEFAULT_HEADERS), r),
        this.schemaName = n,
        this.fetch = s
    }
    from(t) {
        const r = new URL(`${this.url}/${t}`);
        return new Sv.default(r,{
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new uf(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, r={}, {head: n=!1, get: s=!1, count: i}={}) {
        let o;
        const a = new URL(`${this.url}/rpc/${t}`);
        let l;
        n || s ? (o = n ? "HEAD" : "GET",
        Object.entries(r).filter( ([d,h]) => h !== void 0).map( ([d,h]) => [d, Array.isArray(h) ? `{${h.join(",")}}` : `${h}`]).forEach( ([d,h]) => {
            a.searchParams.append(d, h)
        }
        )) : (o = "POST",
        l = r);
        const c = Object.assign({}, this.headers);
        return i && (c.Prefer = `count=${i}`),
        new bv.default({
            method: o,
            url: a,
            headers: c,
            schema: this.schemaName,
            body: l,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}
;
$l.default = Ev;
var sn = Me && Me.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ke, "__esModule", {
    value: !0
});
ke.PostgrestError = ke.PostgrestBuilder = ke.PostgrestTransformBuilder = ke.PostgrestFilterBuilder = ke.PostgrestQueryBuilder = ke.PostgrestClient = void 0;
const cf = sn($l);
ke.PostgrestClient = cf.default;
const df = sn(zi);
ke.PostgrestQueryBuilder = df.default;
const hf = sn(ls);
ke.PostgrestFilterBuilder = hf.default;
const ff = sn(Fi);
ke.PostgrestTransformBuilder = ff.default;
const pf = sn(Bi);
ke.PostgrestBuilder = pf.default;
const mf = sn(Wi);
ke.PostgrestError = mf.default;
var Nv = ke.default = {
    PostgrestClient: cf.default,
    PostgrestQueryBuilder: df.default,
    PostgrestFilterBuilder: hf.default,
    PostgrestTransformBuilder: ff.default,
    PostgrestBuilder: pf.default,
    PostgrestError: mf.default
};
const {PostgrestClient: Pv, PostgrestQueryBuilder: Ax, PostgrestFilterBuilder: Mx, PostgrestTransformBuilder: Ux, PostgrestBuilder: zx, PostgrestError: Fx} = Nv
  , Cv = "2.11.2"
  , Tv = {
    "X-Client-Info": `realtime-js/${Cv}`
}
  , Ov = "1.0.0"
  , gf = 1e4
  , Rv = 1e3;
var Ur;
(function(e) {
    e[e.connecting = 0] = "connecting",
    e[e.open = 1] = "open",
    e[e.closing = 2] = "closing",
    e[e.closed = 3] = "closed"
}
)(Ur || (Ur = {}));
var Ne;
(function(e) {
    e.closed = "closed",
    e.errored = "errored",
    e.joined = "joined",
    e.joining = "joining",
    e.leaving = "leaving"
}
)(Ne || (Ne = {}));
var Ve;
(function(e) {
    e.close = "phx_close",
    e.error = "phx_error",
    e.join = "phx_join",
    e.reply = "phx_reply",
    e.leave = "phx_leave",
    e.access_token = "access_token"
}
)(Ve || (Ve = {}));
var Ca;
(function(e) {
    e.websocket = "websocket"
}
)(Ca || (Ca = {}));
var Xt;
(function(e) {
    e.Connecting = "connecting",
    e.Open = "open",
    e.Closing = "closing",
    e.Closed = "closed"
}
)(Xt || (Xt = {}));
class Lv {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, r) {
        return t.constructor === ArrayBuffer ? r(this._binaryDecode(t)) : r(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const r = new DataView(t)
          , n = new TextDecoder;
        return this._decodeBroadcast(t, r, n)
    }
    _decodeBroadcast(t, r, n) {
        const s = r.getUint8(1)
          , i = r.getUint8(2);
        let o = this.HEADER_LENGTH + 2;
        const a = n.decode(t.slice(o, o + s));
        o = o + s;
        const l = n.decode(t.slice(o, o + i));
        o = o + i;
        const c = JSON.parse(n.decode(t.slice(o, t.byteLength)));
        return {
            ref: null,
            topic: a,
            event: l,
            payload: c
        }
    }
}
class vf {
    constructor(t, r) {
        this.callback = t,
        this.timerCalc = r,
        this.timer = void 0,
        this.tries = 0,
        this.callback = t,
        this.timerCalc = r
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var F;
(function(e) {
    e.abstime = "abstime",
    e.bool = "bool",
    e.date = "date",
    e.daterange = "daterange",
    e.float4 = "float4",
    e.float8 = "float8",
    e.int2 = "int2",
    e.int4 = "int4",
    e.int4range = "int4range",
    e.int8 = "int8",
    e.int8range = "int8range",
    e.json = "json",
    e.jsonb = "jsonb",
    e.money = "money",
    e.numeric = "numeric",
    e.oid = "oid",
    e.reltime = "reltime",
    e.text = "text",
    e.time = "time",
    e.timestamp = "timestamp",
    e.timestamptz = "timestamptz",
    e.timetz = "timetz",
    e.tsrange = "tsrange",
    e.tstzrange = "tstzrange"
}
)(F || (F = {}));
const oc = (e, t, r={}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return Object.keys(t).reduce( (i, o) => (i[o] = $v(o, e, t, s),
    i), {})
}
  , $v = (e, t, r, n) => {
    const s = t.find(a => a.name === e)
      , i = s == null ? void 0 : s.type
      , o = r[e];
    return i && !n.includes(i) ? yf(i, o) : Ta(o)
}
  , yf = (e, t) => {
    if (e.charAt(0) === "_") {
        const r = e.slice(1, e.length);
        return Mv(t, r)
    }
    switch (e) {
    case F.bool:
        return Iv(t);
    case F.float4:
    case F.float8:
    case F.int2:
    case F.int4:
    case F.int8:
    case F.numeric:
    case F.oid:
        return Dv(t);
    case F.json:
    case F.jsonb:
        return Av(t);
    case F.timestamp:
        return Uv(t);
    case F.abstime:
    case F.date:
    case F.daterange:
    case F.int4range:
    case F.int8range:
    case F.money:
    case F.reltime:
    case F.text:
    case F.time:
    case F.timestamptz:
    case F.timetz:
    case F.tsrange:
    case F.tstzrange:
        return Ta(t);
    default:
        return Ta(t)
    }
}
  , Ta = e => e
  , Iv = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , Dv = e => {
    if (typeof e == "string") {
        const t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , Av = e => {
    if (typeof e == "string")
        try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`),
            e
        }
    return e
}
  , Mv = (e, t) => {
    if (typeof e != "string")
        return e;
    const r = e.length - 1
      , n = e[r];
    if (e[0] === "{" && n === "}") {
        let i;
        const o = e.slice(1, r);
        try {
            i = JSON.parse("[" + o + "]")
        } catch {
            i = o ? o.split(",") : []
        }
        return i.map(a => yf(t, a))
    }
    return e
}
  , Uv = e => typeof e == "string" ? e.replace(" ", "T") : e
  , wf = e => {
    let t = e;
    return t = t.replace(/^ws/i, "http"),
    t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    t.replace(/\/+$/, "")
}
;
class Eo {
    constructor(t, r, n={}, s=gf) {
        this.channel = t,
        this.event = r,
        this.payload = n,
        this.timeout = s,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(t) {
        this.timeout = t,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, r) {
        var n;
        return this._hasReceived(t) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response),
        this.recHooks.push({
            status: t,
            callback: r
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const t = r => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = r,
            this._matchReceive(r)
        }
        ;
        this.channel._on(this.refEvent, {}, t),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(t, r) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: r
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: t, response: r}) {
        this.recHooks.filter(n => n.status === t).forEach(n => n.callback(r))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var ac;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(ac || (ac = {}));
class Rn {
    constructor(t, r) {
        this.channel = t,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const n = (r == null ? void 0 : r.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(n.state, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = Rn.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(l => {
                this.state = Rn.syncDiff(this.state, l, i, o)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(n.diff, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Rn.syncDiff(this.state, s, i, o),
            a())
        }
        ),
        this.onJoin( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: i,
                newPresences: o
            })
        }
        ),
        this.onLeave( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: i,
                leftPresences: o
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(t, r, n, s) {
        const i = this.cloneDeep(t)
          , o = this.transformState(r)
          , a = {}
          , l = {};
        return this.map(i, (c, d) => {
            o[c] || (l[c] = d)
        }
        ),
        this.map(o, (c, d) => {
            const h = i[c];
            if (h) {
                const f = d.map(b => b.presence_ref)
                  , w = h.map(b => b.presence_ref)
                  , p = d.filter(b => w.indexOf(b.presence_ref) < 0)
                  , y = h.filter(b => f.indexOf(b.presence_ref) < 0);
                p.length > 0 && (a[c] = p),
                y.length > 0 && (l[c] = y)
            } else
                a[c] = d
        }
        ),
        this.syncDiff(i, {
            joins: a,
            leaves: l
        }, n, s)
    }
    static syncDiff(t, r, n, s) {
        const {joins: i, leaves: o} = {
            joins: this.transformState(r.joins),
            leaves: this.transformState(r.leaves)
        };
        return n || (n = () => {}
        ),
        s || (s = () => {}
        ),
        this.map(i, (a, l) => {
            var c;
            const d = (c = t[a]) !== null && c !== void 0 ? c : [];
            if (t[a] = this.cloneDeep(l),
            d.length > 0) {
                const h = t[a].map(w => w.presence_ref)
                  , f = d.filter(w => h.indexOf(w.presence_ref) < 0);
                t[a].unshift(...f)
            }
            n(a, d, l)
        }
        ),
        this.map(o, (a, l) => {
            let c = t[a];
            if (!c)
                return;
            const d = l.map(h => h.presence_ref);
            c = c.filter(h => d.indexOf(h.presence_ref) < 0),
            t[a] = c,
            s(a, c, l),
            c.length === 0 && delete t[a]
        }
        ),
        t
    }
    static map(t, r) {
        return Object.getOwnPropertyNames(t).map(n => r(n, t[n]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t),
        Object.getOwnPropertyNames(t).reduce( (r, n) => {
            const s = t[n];
            return "metas"in s ? r[n] = s.metas.map(i => (i.presence_ref = i.phx_ref,
            delete i.phx_ref,
            delete i.phx_ref_prev,
            i)) : r[n] = s,
            r
        }
        , {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var lc;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(lc || (lc = {}));
var uc;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(uc || (uc = {}));
var it;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(it || (it = {}));
class Il {
    constructor(t, r={
        config: {}
    }, n) {
        this.topic = t,
        this.params = r,
        this.socket = n,
        this.bindings = {},
        this.state = Ne.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = t.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ""
            },
            private: !1
        }, r.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new Eo(this,Ve.join,this.params,this.timeout),
        this.rejoinTimer = new vf( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = Ne.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = Ne.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = Ne.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = Ne.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Ve.reply, {}, (s, i) => {
            this._trigger(this._replyEventName(i), s)
        }
        ),
        this.presence = new Rn(this),
        this.broadcastEndpointURL = wf(this.socket.endPoint) + "/api/broadcast",
        this.private = this.params.config.private || !1
    }
    subscribe(t, r=this.timeout) {
        var n, s;
        if (this.socket.isConnected() || this.socket.connect(),
        this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
            const {config: {broadcast: i, presence: o, private: a}} = this.params;
            this._onError(d => t == null ? void 0 : t(it.CHANNEL_ERROR, d)),
            this._onClose( () => t == null ? void 0 : t(it.CLOSED));
            const l = {}
              , c = {
                broadcast: i,
                presence: o,
                postgres_changes: (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(d => d.filter)) !== null && s !== void 0 ? s : [],
                private: a
            };
            this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue),
            this.updateJoinPayload(Object.assign({
                config: c
            }, l)),
            this.joinedOnce = !0,
            this._rejoin(r),
            this.joinPush.receive("ok", async ({postgres_changes: d}) => {
                var h;
                if (this.socket.setAuth(),
                d === void 0) {
                    t == null || t(it.SUBSCRIBED);
                    return
                } else {
                    const f = this.bindings.postgres_changes
                      , w = (h = f == null ? void 0 : f.length) !== null && h !== void 0 ? h : 0
                      , p = [];
                    for (let y = 0; y < w; y++) {
                        const b = f[y]
                          , {filter: {event: m, schema: g, table: v, filter: x}} = b
                          , S = d && d[y];
                        if (S && S.event === m && S.schema === g && S.table === v && S.filter === x)
                            p.push(Object.assign(Object.assign({}, b), {
                                id: S.id
                            }));
                        else {
                            this.unsubscribe(),
                            t == null || t(it.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = p,
                    t && t(it.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", d => {
                t == null || t(it.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(it.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, r={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, r.timeout || this.timeout)
    }
    async untrack(t={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, r, n) {
        return this._on(t, r, n)
    }
    async send(t, r={}) {
        var n, s;
        if (!this._canPush() && t.type === "broadcast") {
            const {event: i, payload: o} = t
              , l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: o,
                        private: this.private
                    }]
                })
            };
            try {
                const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
                return await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()),
                c.ok ? "ok" : "error"
            } catch (c) {
                return c.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(i => {
                var o, a, l;
                const c = this._push(t.type, t, r.timeout || this.timeout);
                t.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"),
                c.receive("ok", () => i("ok")),
                c.receive("error", () => i("error")),
                c.receive("timeout", () => i("timed out"))
            }
            )
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t=this.timeout) {
        this.state = Ne.leaving;
        const r = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Ve.close, "leave", this._joinRef())
        }
        ;
        return this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise(n => {
            const s = new Eo(this,Ve.leave,{},t);
            s.receive("ok", () => {
                r(),
                n("ok")
            }
            ).receive("timeout", () => {
                r(),
                n("timed out")
            }
            ).receive("error", () => {
                n("error")
            }
            ),
            s.send(),
            this._canPush() || s.trigger("ok", {})
        }
        )
    }
    async _fetchWithTimeout(t, r, n) {
        const s = new AbortController
          , i = setTimeout( () => s.abort(), n)
          , o = await this.socket.fetch(t, Object.assign(Object.assign({}, r), {
            signal: s.signal
        }));
        return clearTimeout(i),
        o
    }
    _push(t, r, n=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new Eo(this,t,r,n);
        return this._canPush() ? s.send() : (s.startTimeout(),
        this.pushBuffer.push(s)),
        s
    }
    _onMessage(t, r, n) {
        return r
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, r, n) {
        var s, i;
        const o = t.toLocaleLowerCase()
          , {close: a, error: l, leave: c, join: d} = Ve;
        if (n && [a, l, c, d].indexOf(o) >= 0 && n !== this._joinRef())
            return;
        let f = this._onMessage(o, r, n);
        if (r && !f)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(o) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(w => {
            var p, y, b;
            return ((p = w.filter) === null || p === void 0 ? void 0 : p.event) === "*" || ((b = (y = w.filter) === null || y === void 0 ? void 0 : y.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase()) === o
        }
        ).map(w => w.callback(f, n)) : (i = this.bindings[o]) === null || i === void 0 || i.filter(w => {
            var p, y, b, m, g, v;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id"in w) {
                    const x = w.id
                      , S = (p = w.filter) === null || p === void 0 ? void 0 : p.event;
                    return x && ((y = r.ids) === null || y === void 0 ? void 0 : y.includes(x)) && (S === "*" || (S == null ? void 0 : S.toLocaleLowerCase()) === ((b = r.data) === null || b === void 0 ? void 0 : b.type.toLocaleLowerCase()))
                } else {
                    const x = (g = (m = w == null ? void 0 : w.filter) === null || m === void 0 ? void 0 : m.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase();
                    return x === "*" || x === ((v = r == null ? void 0 : r.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase())
                }
            else
                return w.type.toLocaleLowerCase() === o
        }
        ).map(w => {
            if (typeof f == "object" && "ids"in f) {
                const p = f.data
                  , {schema: y, table: b, commit_timestamp: m, type: g, errors: v} = p;
                f = Object.assign(Object.assign({}, {
                    schema: y,
                    table: b,
                    commit_timestamp: m,
                    eventType: g,
                    new: {},
                    old: {},
                    errors: v
                }), this._getPayloadRecords(p))
            }
            w.callback(f, n)
        }
        )
    }
    _isClosed() {
        return this.state === Ne.closed
    }
    _isJoined() {
        return this.state === Ne.joined
    }
    _isJoining() {
        return this.state === Ne.joining
    }
    _isLeaving() {
        return this.state === Ne.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, r, n) {
        const s = t.toLocaleLowerCase()
          , i = {
            type: s,
            filter: r,
            callback: n
        };
        return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i],
        this
    }
    _off(t, r) {
        const n = t.toLocaleLowerCase();
        return this.bindings[n] = this.bindings[n].filter(s => {
            var i;
            return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === n && Il.isEqual(s.filter, r))
        }
        ),
        this
    }
    static isEqual(t, r) {
        if (Object.keys(t).length !== Object.keys(r).length)
            return !1;
        for (const n in t)
            if (t[n] !== r[n])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(Ve.close, {}, t)
    }
    _onError(t) {
        this._on(Ve.error, {}, r => t(r))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = Ne.joining,
        this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const r = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = oc(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (r.old = oc(t.columns, t.old_record)),
        r
    }
}
const zv = () => {}
  , Fv = typeof WebSocket < "u"
  , Bv = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Wv {
    constructor(t, r) {
        var n;
        this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = [],
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = Tv,
        this.params = {},
        this.timeout = gf,
        this.heartbeatIntervalMs = 3e4,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.ref = 0,
        this.logger = zv,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new Lv,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._resolveFetch = i => {
            let o;
            return i ? o = i : typeof fetch > "u" ? o = (...a) => Kr(async () => {
                const {default: l} = await Promise.resolve().then( () => nn);
                return {
                    default: l
                }
            }
            , void 0).then( ({default: l}) => l(...a)) : o = fetch,
            (...a) => o(...a)
        }
        ,
        this.endPoint = `${t}/${Ca.websocket}`,
        this.httpEndpoint = wf(t),
        r != null && r.transport ? this.transport = r.transport : this.transport = null,
        r != null && r.params && (this.params = r.params),
        r != null && r.headers && (this.headers = Object.assign(Object.assign({}, this.headers), r.headers)),
        r != null && r.timeout && (this.timeout = r.timeout),
        r != null && r.logger && (this.logger = r.logger),
        r != null && r.heartbeatIntervalMs && (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
        const s = (n = r == null ? void 0 : r.params) === null || n === void 0 ? void 0 : n.apikey;
        if (s && (this.accessTokenValue = s,
        this.apiKey = s),
        this.reconnectAfterMs = r != null && r.reconnectAfterMs ? r.reconnectAfterMs : i => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4,
        this.encode = r != null && r.encode ? r.encode : (i, o) => o(JSON.stringify(i)),
        this.decode = r != null && r.decode ? r.decode : this.serializer.decode.bind(this.serializer),
        this.reconnectTimer = new vf(async () => {
            this.disconnect(),
            this.connect()
        }
        ,this.reconnectAfterMs),
        this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch),
        r != null && r.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.worker = (r == null ? void 0 : r.worker) || !1,
            this.workerUrl = r == null ? void 0 : r.workerUrl
        }
        this.accessToken = (r == null ? void 0 : r.accessToken) || null
    }
    connect() {
        if (!this.conn) {
            if (this.transport) {
                this.conn = new this.transport(this.endpointURL(),void 0,{
                    headers: this.headers
                });
                return
            }
            if (Fv) {
                this.conn = new WebSocket(this.endpointURL()),
                this.setupConnection();
                return
            }
            this.conn = new Vv(this.endpointURL(),void 0,{
                close: () => {
                    this.conn = null
                }
            }),
            Kr(async () => {
                const {default: t} = await import("./browser-D5-Au3wT.js").then(r => r.b);
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => {
                this.conn = new t(this.endpointURL(),void 0,{
                    headers: this.headers
                }),
                this.setupConnection()
            }
            )
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: Ov
        }))
    }
    disconnect(t, r) {
        this.conn && (this.conn.onclose = function() {}
        ,
        t ? this.conn.close(t, r ?? "") : this.conn.close(),
        this.conn = null,
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset())
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const r = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        r
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(r => r.unsubscribe()));
        return this.disconnect(),
        t
    }
    log(t, r, n) {
        this.logger(t, r, n)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case Ur.connecting:
            return Xt.Connecting;
        case Ur.open:
            return Xt.Open;
        case Ur.closing:
            return Xt.Closing;
        default:
            return Xt.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Xt.Open
    }
    channel(t, r={
        config: {}
    }) {
        const n = new Il(`realtime:${t}`,r,this);
        return this.channels.push(n),
        n
    }
    push(t) {
        const {topic: r, event: n, payload: s, ref: i} = t
          , o = () => {
            this.encode(t, a => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(a)
            }
            )
        }
        ;
        this.log("push", `${r} ${n} (${i})`, s),
        this.isConnected() ? o() : this.sendBuffer.push(o)
    }
    async setAuth(t=null) {
        let r = t || this.accessToken && await this.accessToken() || this.accessTokenValue;
        if (r) {
            let n = null;
            try {
                n = JSON.parse(atob(r.split(".")[1]))
            } catch {}
            if (n && n.exp && !(Math.floor(Date.now() / 1e3) - n.exp < 0))
                return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${n.exp}`),
                Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${n.exp}`);
            this.accessTokenValue = r,
            this.channels.forEach(s => {
                r && s.updateJoinPayload({
                    access_token: r
                }),
                s.joinedOnce && s._isJoined() && s._push(Ve.access_token, {
                    access_token: r
                })
            }
            )
        }
    }
    async sendHeartbeat() {
        var t;
        if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null,
                this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                (t = this.conn) === null || t === void 0 || t.close(Rv, "hearbeat timeout");
                return
            }
            this.pendingHeartbeatRef = this._makeRef(),
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }),
            this.setAuth()
        }
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t,
        this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let r = this.channels.find(n => n.topic === t && (n._isJoined() || n._isJoining()));
        r && (this.log("transport", `leaving duplicate topic "${t}"`),
        r.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(r => r._joinRef() !== t._joinRef())
    }
    setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer",
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = t => this._onConnError(t),
        this.conn.onmessage = t => this._onConnMessage(t),
        this.conn.onclose = t => this._onConnClose(t))
    }
    _onConnMessage(t) {
        this.decode(t.data, r => {
            let {topic: n, event: s, payload: i, ref: o} = r;
            o && o === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null),
            this.log("receive", `${i.status || ""} ${n} ${s} ${o && "(" + o + ")" || ""}`, i),
            this.channels.filter(a => a._isMember(n)).forEach(a => a._trigger(s, i, o)),
            this.stateChangeCallbacks.message.forEach(a => a(r))
        }
        )
    }
    async _onConnOpen() {
        if (this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs);
        else {
            this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
            const t = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(t),
            this.workerRef.onerror = r => {
                this.log("worker", "worker error", r.message),
                this.workerRef.terminate()
            }
            ,
            this.workerRef.onmessage = r => {
                r.data.event === "keepAlive" && this.sendHeartbeat()
            }
            ,
            this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            })
        }
        this.stateChangeCallbacks.open.forEach(t => t())
    }
    _onConnClose(t) {
        this.log("transport", "close", t),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach(r => r(t))
    }
    _onConnError(t) {
        this.log("transport", t.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach(r => r(t))
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(Ve.error))
    }
    _appendParams(t, r) {
        if (Object.keys(r).length === 0)
            return t;
        const n = t.match(/\?/) ? "&" : "?"
          , s = new URLSearchParams(r);
        return `${t}${n}${s}`
    }
    _workerObjectUrl(t) {
        let r;
        if (t)
            r = t;
        else {
            const n = new Blob([Bv],{
                type: "application/javascript"
            });
            r = URL.createObjectURL(n)
        }
        return r
    }
}
class Vv {
    constructor(t, r, n) {
        this.binaryType = "arraybuffer",
        this.onclose = () => {}
        ,
        this.onerror = () => {}
        ,
        this.onmessage = () => {}
        ,
        this.onopen = () => {}
        ,
        this.readyState = Ur.connecting,
        this.send = () => {}
        ,
        this.url = null,
        this.url = t,
        this.close = n.close
    }
}
class Dl extends Error {
    constructor(t) {
        super(t),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function oe(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
class Hv extends Dl {
    constructor(t, r) {
        super(t),
        this.name = "StorageApiError",
        this.status = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        }
    }
}
class Oa extends Dl {
    constructor(t, r) {
        super(t),
        this.name = "StorageUnknownError",
        this.originalError = r
    }
}
var qv = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
const xf = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...r) => Kr(async () => {
        const {default: n} = await Promise.resolve().then( () => nn);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : t = fetch,
    (...r) => t(...r)
}
  , Yv = () => qv(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield Kr( () => Promise.resolve().then( () => nn), void 0)).Response : Response
})
  , Ra = e => {
    if (Array.isArray(e))
        return e.map(r => Ra(r));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([r,n]) => {
        const s = r.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
        t[s] = Ra(n)
    }
    ),
    t
}
;
var pr = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
const No = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , Jv = (e, t, r) => pr(void 0, void 0, void 0, function*() {
    const n = yield Yv();
    e instanceof n && !(r != null && r.noResolveJson) ? e.json().then(s => {
        t(new Hv(No(s),e.status || 500))
    }
    ).catch(s => {
        t(new Oa(No(s),s))
    }
    ) : t(new Oa(No(e),e))
})
  , Qv = (e, t, r, n) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, t == null ? void 0 : t.headers),
    n && (s.body = JSON.stringify(n)),
    Object.assign(Object.assign({}, s), r))
}
;
function us(e, t, r, n, s, i) {
    return pr(this, void 0, void 0, function*() {
        return new Promise( (o, a) => {
            e(r, Qv(t, n, s, i)).then(l => {
                if (!l.ok)
                    throw l;
                return n != null && n.noResolveJson ? l : l.json()
            }
            ).then(l => o(l)).catch(l => Jv(l, a, n))
        }
        )
    })
}
function yi(e, t, r, n) {
    return pr(this, void 0, void 0, function*() {
        return us(e, "GET", t, r, n)
    })
}
function kt(e, t, r, n, s) {
    return pr(this, void 0, void 0, function*() {
        return us(e, "POST", t, n, s, r)
    })
}
function Gv(e, t, r, n, s) {
    return pr(this, void 0, void 0, function*() {
        return us(e, "PUT", t, n, s, r)
    })
}
function Kv(e, t, r, n) {
    return pr(this, void 0, void 0, function*() {
        return us(e, "HEAD", t, Object.assign(Object.assign({}, r), {
            noResolveJson: !0
        }), n)
    })
}
function _f(e, t, r, n, s) {
    return pr(this, void 0, void 0, function*() {
        return us(e, "DELETE", t, n, s, r)
    })
}
var xe = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
const Xv = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , cc = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class Zv {
    constructor(t, r={}, n, s) {
        this.url = t,
        this.headers = r,
        this.bucketId = n,
        this.fetch = xf(s)
    }
    uploadOrUpdate(t, r, n, s) {
        return xe(this, void 0, void 0, function*() {
            try {
                let i;
                const o = Object.assign(Object.assign({}, cc), s);
                let a = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(o.upsert)
                });
                const l = o.metadata;
                typeof Blob < "u" && n instanceof Blob ? (i = new FormData,
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l)),
                i.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (i = n,
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l))) : (i = n,
                a["cache-control"] = `max-age=${o.cacheControl}`,
                a["content-type"] = o.contentType,
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
                s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
                const c = this._removeEmptyFolders(r)
                  , d = this._getFinalPath(c)
                  , h = yield this.fetch(`${this.url}/object/${d}`, Object.assign({
                    method: t,
                    body: i,
                    headers: a
                }, o != null && o.duplex ? {
                    duplex: o.duplex
                } : {}))
                  , f = yield h.json();
                return h.ok ? {
                    data: {
                        path: c,
                        id: f.Id,
                        fullPath: f.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: f
                }
            } catch (i) {
                if (oe(i))
                    return {
                        data: null,
                        error: i
                    };
                throw i
            }
        })
    }
    upload(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, r, n)
        })
    }
    uploadToSignedUrl(t, r, n, s) {
        return xe(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(t)
              , o = this._getFinalPath(i)
              , a = new URL(this.url + `/object/upload/sign/${o}`);
            a.searchParams.set("token", r);
            try {
                let l;
                const c = Object.assign({
                    upsert: cc.upsert
                }, s)
                  , d = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(c.upsert)
                });
                typeof Blob < "u" && n instanceof Blob ? (l = new FormData,
                l.append("cacheControl", c.cacheControl),
                l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n,
                l.append("cacheControl", c.cacheControl)) : (l = n,
                d["cache-control"] = `max-age=${c.cacheControl}`,
                d["content-type"] = c.contentType);
                const h = yield this.fetch(a.toString(), {
                    method: "PUT",
                    body: l,
                    headers: d
                })
                  , f = yield h.json();
                return h.ok ? {
                    data: {
                        path: i,
                        fullPath: f.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: f
                }
            } catch (l) {
                if (oe(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(t, r) {
        return xe(this, void 0, void 0, function*() {
            try {
                let n = this._getFinalPath(t);
                const s = Object.assign({}, this.headers);
                r != null && r.upsert && (s["x-upsert"] = "true");
                const i = yield kt(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, {
                    headers: s
                })
                  , o = new URL(this.url + i.url)
                  , a = o.searchParams.get("token");
                if (!a)
                    throw new Dl("No token returned by API");
                return {
                    data: {
                        signedUrl: o.toString(),
                        path: t,
                        token: a
                    },
                    error: null
                }
            } catch (n) {
                if (oe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    update(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, r, n)
        })
    }
    move(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield kt(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: r,
                        destinationBucket: n == null ? void 0 : n.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (oe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield kt(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: r,
                            destinationBucket: n == null ? void 0 : n.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (oe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(t)
                  , i = yield kt(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                    expiresIn: r
                }, n != null && n.transform ? {
                    transform: n.transform
                } : {}), {
                    headers: this.headers
                });
                const o = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
                return i = {
                    signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`)
                },
                {
                    data: i,
                    error: null
                }
            } catch (s) {
                if (oe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            try {
                const s = yield kt(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: r,
                    paths: t
                }, {
                    headers: this.headers
                })
                  , i = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
                return {
                    data: s.map(o => Object.assign(Object.assign({}, o), {
                        signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (oe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(t, r) {
        return xe(this, void 0, void 0, function*() {
            const s = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image/authenticated" : "object"
              , i = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {})
              , o = i ? `?${i}` : "";
            try {
                const a = this._getFinalPath(t);
                return {
                    data: yield(yield yi(this.fetch, `${this.url}/${s}/${a}${o}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (a) {
                if (oe(a))
                    return {
                        data: null,
                        error: a
                    };
                throw a
            }
        })
    }
    info(t) {
        return xe(this, void 0, void 0, function*() {
            const r = this._getFinalPath(t);
            try {
                const n = yield yi(this.fetch, `${this.url}/object/info/${r}`, {
                    headers: this.headers
                });
                return {
                    data: Ra(n),
                    error: null
                }
            } catch (n) {
                if (oe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    exists(t) {
        return xe(this, void 0, void 0, function*() {
            const r = this._getFinalPath(t);
            try {
                return yield Kv(this.fetch, `${this.url}/object/${r}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (n) {
                if (oe(n) && n instanceof Oa) {
                    const s = n.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status))
                        return {
                            data: !1,
                            error: n
                        }
                }
                throw n
            }
        })
    }
    getPublicUrl(t, r) {
        const n = this._getFinalPath(t)
          , s = []
          , i = r != null && r.download ? `download=${r.download === !0 ? "" : r.download}` : "";
        i !== "" && s.push(i);
        const a = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image" : "object"
          , l = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {});
        l !== "" && s.push(l);
        let c = s.join("&");
        return c !== "" && (c = `?${c}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${n}${c}`)
            }
        }
    }
    remove(t) {
        return xe(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _f(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (oe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    list(t, r, n) {
        return xe(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, Xv), r), {
                    prefix: t || ""
                });
                return {
                    data: yield kt(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (s) {
                if (oe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const r = [];
        return t.width && r.push(`width=${t.width}`),
        t.height && r.push(`height=${t.height}`),
        t.resize && r.push(`resize=${t.resize}`),
        t.format && r.push(`format=${t.format}`),
        t.quality && r.push(`quality=${t.quality}`),
        r.join("&")
    }
}
const ey = "2.7.1"
  , ty = {
    "X-Client-Info": `storage-js/${ey}`
};
var vr = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
class ry {
    constructor(t, r={}, n) {
        this.url = t,
        this.headers = Object.assign(Object.assign({}, ty), r),
        this.fetch = xf(n)
    }
    listBuckets() {
        return vr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield yi(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (oe(t))
                    return {
                        data: null,
                        error: t
                    };
                throw t
            }
        })
    }
    getBucket(t) {
        return vr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield yi(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (oe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    createBucket(t, r={
        public: !1
    }) {
        return vr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield kt(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (oe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    updateBucket(t, r) {
        return vr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Gv(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (oe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    emptyBucket(t) {
        return vr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield kt(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (oe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteBucket(t) {
        return vr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _f(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (oe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
}
class ny extends ry {
    constructor(t, r={}, n) {
        super(t, r, n)
    }
    from(t) {
        return new Zv(this.url,this.headers,t,this.fetch)
    }
}
const sy = "2.48.1";
let kn = "";
typeof Deno < "u" ? kn = "deno" : typeof document < "u" ? kn = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? kn = "react-native" : kn = "node";
const iy = {
    "X-Client-Info": `supabase-js-${kn}/${sy}`
}
  , oy = {
    headers: iy
}
  , ay = {
    schema: "public"
}
  , ly = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , uy = {};
var cy = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
const dy = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = sf : t = fetch,
    (...r) => t(...r)
}
  , hy = () => typeof Headers > "u" ? of : Headers
  , fy = (e, t, r) => {
    const n = dy(r)
      , s = hy();
    return (i, o) => cy(void 0, void 0, void 0, function*() {
        var a;
        const l = (a = yield t()) !== null && a !== void 0 ? a : e;
        let c = new s(o == null ? void 0 : o.headers);
        return c.has("apikey") || c.set("apikey", e),
        c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
        n(i, Object.assign(Object.assign({}, o), {
            headers: c
        }))
    })
}
;
var py = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
function my(e) {
    return e.replace(/\/$/, "")
}
function gy(e, t) {
    const {db: r, auth: n, realtime: s, global: i} = e
      , {db: o, auth: a, realtime: l, global: c} = t
      , d = {
        db: Object.assign(Object.assign({}, o), r),
        auth: Object.assign(Object.assign({}, a), n),
        realtime: Object.assign(Object.assign({}, l), s),
        global: Object.assign(Object.assign({}, c), i),
        accessToken: () => py(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? d.accessToken = e.accessToken : delete d.accessToken,
    d
}
const kf = "2.67.3"
  , vy = "http://localhost:9999"
  , yy = "supabase.auth.token"
  , wy = {
    "X-Client-Info": `gotrue-js/${kf}`
}
  , dc = 10
  , La = "X-Supabase-Api-Version"
  , Sf = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
};
function xy(e) {
    return Math.round(Date.now() / 1e3) + e
}
function _y() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const Ke = () => typeof window < "u" && typeof document < "u"
  , Yt = {
    tested: !1,
    writable: !1
}
  , Ln = () => {
    if (!Ke())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Yt.tested)
        return Yt.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        Yt.tested = !0,
        Yt.writable = !0
    } catch {
        Yt.tested = !0,
        Yt.writable = !1
    }
    return Yt.writable
}
;
function ky(e) {
    const t = {}
      , r = new URL(e);
    if (r.hash && r.hash[0] === "#")
        try {
            new URLSearchParams(r.hash.substring(1)).forEach( (s, i) => {
                t[i] = s
            }
            )
        } catch {}
    return r.searchParams.forEach( (n, s) => {
        t[s] = n
    }
    ),
    t
}
const bf = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...r) => Kr(async () => {
        const {default: n} = await Promise.resolve().then( () => nn);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : t = fetch,
    (...r) => t(...r)
}
  , Sy = e => typeof e == "object" && e !== null && "status"in e && "ok"in e && "json"in e && typeof e.json == "function"
  , jf = async (e, t, r) => {
    await e.setItem(t, JSON.stringify(r))
}
  , Cs = async (e, t) => {
    const r = await e.getItem(t);
    if (!r)
        return null;
    try {
        return JSON.parse(r)
    } catch {
        return r
    }
}
  , Ts = async (e, t) => {
    await e.removeItem(t)
}
;
function by(e) {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let r = "", n, s, i, o, a, l, c, d = 0;
    for (e = e.replace("-", "+").replace("_", "/"); d < e.length; )
        o = t.indexOf(e.charAt(d++)),
        a = t.indexOf(e.charAt(d++)),
        l = t.indexOf(e.charAt(d++)),
        c = t.indexOf(e.charAt(d++)),
        n = o << 2 | a >> 4,
        s = (a & 15) << 4 | l >> 2,
        i = (l & 3) << 6 | c,
        r = r + String.fromCharCode(n),
        l != 64 && s != 0 && (r = r + String.fromCharCode(s)),
        c != 64 && i != 0 && (r = r + String.fromCharCode(i));
    return r
}
class qi {
    constructor() {
        this.promise = new qi.promiseConstructor( (t, r) => {
            this.resolve = t,
            this.reject = r
        }
        )
    }
}
qi.promiseConstructor = Promise;
function hc(e) {
    const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i
      , r = e.split(".");
    if (r.length !== 3)
        throw new Error("JWT is not valid: not a JWT structure");
    if (!t.test(r[1]))
        throw new Error("JWT is not valid: payload is not in base64url format");
    const n = r[1];
    return JSON.parse(by(n))
}
async function jy(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function Ey(e, t) {
    return new Promise( (n, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    const o = await e(i);
                    if (!t(i, null, o)) {
                        n(o);
                        return
                    }
                } catch (o) {
                    if (!t(i, o)) {
                        s(o);
                        return
                    }
                }
        }
        )()
    }
    )
}
function Ny(e) {
    return ("0" + e.toString(16)).substr(-2)
}
function Py() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , n = r.length;
        let s = "";
        for (let i = 0; i < 56; i++)
            s += r.charAt(Math.floor(Math.random() * n));
        return s
    }
    return crypto.getRandomValues(t),
    Array.from(t, Ny).join("")
}
async function Cy(e) {
    const r = new TextEncoder().encode(e)
      , n = await crypto.subtle.digest("SHA-256", r)
      , s = new Uint8Array(n);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
function Ty(e) {
    return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function Oy(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        e;
    const r = await Cy(e);
    return Ty(r)
}
async function yr(e, t, r=!1) {
    const n = Py();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"),
    await jf(e, `${t}-code-verifier`, s);
    const i = await Oy(n);
    return [i, n === i ? "plain" : "s256"]
}
const Ry = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ly(e) {
    const t = e.headers.get(La);
    if (!t || !t.match(Ry))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
class Al extends Error {
    constructor(t, r, n) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = r,
        this.code = n
    }
}
function R(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class $y extends Al {
    constructor(t, r, n) {
        super(t, r, n),
        this.name = "AuthApiError",
        this.status = r,
        this.code = n
    }
}
function Iy(e) {
    return R(e) && e.name === "AuthApiError"
}
class Ef extends Al {
    constructor(t, r) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = r
    }
}
class mr extends Al {
    constructor(t, r, n, s) {
        super(t, n, s),
        this.name = r,
        this.status = n
    }
}
class yt extends mr {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function Dy(e) {
    return R(e) && e.name === "AuthSessionMissingError"
}
class Po extends mr {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Os extends mr {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Rs extends mr {
    constructor(t, r=null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function Ay(e) {
    return R(e) && e.name === "AuthImplicitGrantRedirectError"
}
class fc extends mr {
    constructor(t, r=null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class $a extends mr {
    constructor(t, r) {
        super(t, "AuthRetryableFetchError", r, void 0)
    }
}
function Co(e) {
    return R(e) && e.name === "AuthRetryableFetchError"
}
class pc extends mr {
    constructor(t, r, n) {
        super(t, "AuthWeakPasswordError", r, "weak_password"),
        this.reasons = n
    }
}
var My = function(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
            t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    return r
};
const Gt = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , Uy = [502, 503, 504];
async function mc(e) {
    var t;
    if (!Sy(e))
        throw new $a(Gt(e),0);
    if (Uy.includes(e.status))
        throw new $a(Gt(e),e.status);
    let r;
    try {
        r = await e.json()
    } catch (i) {
        throw new Ef(Gt(i),i)
    }
    let n;
    const s = Ly(e);
    if (s && s.getTime() >= Sf["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code),
    n) {
        if (n === "weak_password")
            throw new pc(Gt(r),e.status,((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (n === "session_not_found")
            throw new yt
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new pc(Gt(r),e.status,r.weak_password.reasons);
    throw new $y(Gt(r),e.status || 500,n)
}
const zy = (e, t, r, n) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(n),
    Object.assign(Object.assign({}, s), r))
}
;
async function A(e, t, r, n) {
    var s;
    const i = Object.assign({}, n == null ? void 0 : n.headers);
    i[La] || (i[La] = Sf["2024-01-01"].name),
    n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
    const o = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
    n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
    const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
      , l = await Fy(e, t, r + a, {
        headers: i,
        noResolveJson: n == null ? void 0 : n.noResolveJson
    }, {}, n == null ? void 0 : n.body);
    return n != null && n.xform ? n == null ? void 0 : n.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function Fy(e, t, r, n, s, i) {
    const o = zy(t, n, s, i);
    let a;
    try {
        a = await e(r, Object.assign({}, o))
    } catch (l) {
        throw console.error(l),
        new $a(Gt(l),0)
    }
    if (a.ok || await mc(a),
    n != null && n.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await mc(l)
    }
}
function wt(e) {
    var t;
    let r = null;
    Hy(e) && (r = Object.assign({}, e),
    e.expires_at || (r.expires_at = xy(e.expires_in)));
    const n = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: r,
            user: n
        },
        error: null
    }
}
function gc(e) {
    const t = wt(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function jt(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}
function By(e) {
    return {
        data: e,
        error: null
    }
}
function Wy(e) {
    const {action_link: t, email_otp: r, hashed_token: n, redirect_to: s, verification_type: i} = e
      , o = My(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , a = {
        action_link: t,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: i
    }
      , l = Object.assign({}, o);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}
function Vy(e) {
    return e
}
function Hy(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
var qy = function(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
            t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    return r
};
class Yy {
    constructor({url: t="", headers: r={}, fetch: n}) {
        this.url = t,
        this.headers = r,
        this.fetch = bf(n),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, r="global") {
        try {
            return await A(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (n) {
            if (R(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async inviteUserByEmail(t, r={}) {
        try {
            return await A(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: jt
            })
        } catch (n) {
            if (R(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async generateLink(t) {
        try {
            const {options: r} = t
              , n = qy(t, ["options"])
              , s = Object.assign(Object.assign({}, n), r);
            return "newEmail"in n && (s.new_email = n == null ? void 0 : n.newEmail,
            delete s.newEmail),
            await A(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: Wy,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async createUser(t) {
        try {
            return await A(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: jt
            })
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async listUsers(t) {
        var r, n, s, i, o, a, l;
        try {
            const c = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , d = await A(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (n = (r = t == null ? void 0 : t.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                    per_page: (i = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: Vy
            });
            if (d.error)
                throw d.error;
            const h = await d.json()
              , f = (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , w = (l = (a = d.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return w.length > 0 && (w.forEach(p => {
                const y = parseInt(p.split(";")[0].split("=")[1].substring(0, 1))
                  , b = JSON.parse(p.split(";")[1].split("=")[1]);
                c[`${b}Page`] = y
            }
            ),
            c.total = parseInt(f)),
            {
                data: Object.assign(Object.assign({}, h), c),
                error: null
            }
        } catch (c) {
            if (R(c))
                return {
                    data: {
                        users: []
                    },
                    error: c
                };
            throw c
        }
    }
    async getUserById(t) {
        try {
            return await A(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: jt
            })
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async updateUserById(t, r) {
        try {
            return await A(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: r,
                headers: this.headers,
                xform: jt
            })
        } catch (n) {
            if (R(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async deleteUser(t, r=!1) {
        try {
            return await A(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: jt
            })
        } catch (n) {
            if (R(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _listFactors(t) {
        try {
            const {data: r, error: n} = await A(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: r,
                error: n
            }
        } catch (r) {
            if (R(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _deleteFactor(t) {
        try {
            return {
                data: await A(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (R(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
const Jy = {
    getItem: e => Ln() ? globalThis.localStorage.getItem(e) : null,
    setItem: (e, t) => {
        Ln() && globalThis.localStorage.setItem(e, t)
    }
    ,
    removeItem: e => {
        Ln() && globalThis.localStorage.removeItem(e)
    }
};
function vc(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, r) => {
            e[t] = r
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
function Qy() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
const wr = {
    debug: !!(globalThis && Ln() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Nf extends Error {
    constructor(t) {
        super(t),
        this.isAcquireTimeout = !0
    }
}
class Gy extends Nf {
}
async function Ky(e, t, r) {
    wr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const n = new globalThis.AbortController;
    return t > 0 && setTimeout( () => {
        n.abort(),
        wr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }
    , t),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: n.signal
    }, async s => {
        if (s) {
            wr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
            try {
                return await r()
            } finally {
                wr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name)
            }
        } else {
            if (t === 0)
                throw wr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                new Gy(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (wr.debug)
                try {
                    const i = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
                } catch (i) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await r()
        }
    }
    ))
}
Qy();
const Xy = {
    url: vy,
    storageKey: yy,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: wy,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
}
  , mn = 30 * 1e3
  , yc = 3;
async function wc(e, t, r) {
    return await r()
}
class Zn {
    constructor(t) {
        var r, n;
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = Zn.nextInstanceID,
        Zn.nextInstanceID += 1,
        this.instanceID > 0 && Ke() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, Xy), t);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new Yy({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = bf(s.fetch),
        this.lock = s.lock || wc,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : Ke() && (!((r = globalThis == null ? void 0 : globalThis.navigator) === null || r === void 0) && r.locks) ? this.lock = Ky : this.lock = wc,
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? s.storage ? this.storage = s.storage : Ln() ? this.storage = Jy : (this.memoryStorage = {},
        this.storage = vc(this.memoryStorage)) : (this.memoryStorage = {},
        this.storage = vc(this.memoryStorage)),
        Ke() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }
            (n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i),
                await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${kf}) ${new Date().toISOString()}`, ...t),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const r = ky(window.location.href);
            let n = "none";
            if (this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce"),
            Ke() && this.detectSessionInUrl && n !== "none") {
                const {data: s, error: i} = await this._getSessionFromURL(r, n);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i),
                    Ay(i)) {
                        const l = (t = i.details) === null || t === void 0 ? void 0 : t.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
                            return {
                                error: i
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: i
                    }
                }
                const {session: o, redirectType: a} = s;
                return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a),
                await this._saveSession(o),
                setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (r) {
            return R(r) ? {
                error: r
            } : {
                error: new Ef("Unexpected error during initialization",r)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var r, n, s;
        try {
            const i = await A(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (n = (r = t == null ? void 0 : t.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                    gotrue_meta_security: {
                        captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: wt
            })
              , {data: o, error: a} = i;
            if (a || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = o.session
              , c = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: c,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (R(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signUp(t) {
        var r, n, s;
        try {
            let i;
            if ("email"in t) {
                const {email: d, password: h, options: f} = t;
                let w = null
                  , p = null;
                this.flowType === "pkce" && ([w,p] = await yr(this.storage, this.storageKey)),
                i = await A(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: d,
                        password: h,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: w,
                        code_challenge_method: p
                    },
                    xform: wt
                })
            } else if ("phone"in t) {
                const {phone: d, password: h, options: f} = t;
                i = await A(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: h,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: wt
                })
            } else
                throw new Os("You must provide either an email or phone number and a password");
            const {data: o, error: a} = i;
            if (a || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = o.session
              , c = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: c,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (R(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithPassword(t) {
        try {
            let r;
            if ("email"in t) {
                const {email: i, password: o, options: a} = t;
                r = await A(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: gc
                })
            } else if ("phone"in t) {
                const {phone: i, password: o, options: a} = t;
                r = await A(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: gc
                })
            } else
                throw new Os("You must provide either an email or phone number and a password");
            const {data: n, error: s} = r;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !n || !n.session || !n.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Po
            } : (n.session && (await this._saveSession(n.session),
            await this._notifyAllSubscribers("SIGNED_IN", n.session)),
            {
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: s
            })
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async signInWithOAuth(t) {
        var r, n, s, i;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async _exchangeCodeForSession(t) {
        const r = await Cs(this.storage, `${this.storageKey}-code-verifier`)
          , [n,s] = (r ?? "").split("/");
        try {
            const {data: i, error: o} = await A(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: n
                },
                xform: wt
            });
            if (await Ts(this.storage, `${this.storageKey}-code-verifier`),
            o)
                throw o;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Po
            } : (i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: o
            })
        } catch (i) {
            if (R(i))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithIdToken(t) {
        try {
            const {options: r, provider: n, token: s, access_token: i, nonce: o} = t
              , a = await A(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: s,
                    access_token: i,
                    nonce: o,
                    gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken
                    }
                },
                xform: wt
            })
              , {data: l, error: c} = a;
            return c ? {
                data: {
                    user: null,
                    session: null
                },
                error: c
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Po
            } : (l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            {
                data: l,
                error: c
            })
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async signInWithOtp(t) {
        var r, n, s, i, o;
        try {
            if ("email"in t) {
                const {email: a, options: l} = t;
                let c = null
                  , d = null;
                this.flowType === "pkce" && ([c,d] = await yr(this.storage, this.storageKey));
                const {error: h} = await A(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
                        create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: c,
                        code_challenge_method: d
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                }
            }
            if ("phone"in t) {
                const {phone: a, options: l} = t
                  , {data: c, error: d} = await A(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: c == null ? void 0 : c.message_id
                    },
                    error: d
                }
            }
            throw new Os("You must provide either an email or phone number.")
        } catch (a) {
            if (R(a))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            throw a
        }
    }
    async verifyOtp(t) {
        var r, n;
        try {
            let s, i;
            "options"in t && (s = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
            i = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
            const {data: o, error: a} = await A(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: wt
            });
            if (a)
                throw a;
            if (!o)
                throw new Error("An error occurred on token verification.");
            const l = o.session
              , c = o.user;
            return l != null && l.access_token && (await this._saveSession(l),
            await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
            {
                data: {
                    user: c,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (R(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithSSO(t) {
        var r, n, s;
        try {
            let i = null
              , o = null;
            return this.flowType === "pkce" && ([i,o] = await yr(this.storage, this.storageKey)),
            await A(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in t ? {
                    provider_id: t.providerId
                } : null), "domain"in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
                }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: o
                }),
                headers: this.headers,
                xform: By
            })
        } catch (i) {
            if (R(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {data: {session: r}, error: n} = t;
                if (n)
                    throw n;
                if (!r)
                    throw new yt;
                const {error: s} = await A(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: r.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            }
            )
        } catch (t) {
            if (R(t))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: t
                };
            throw t
        }
    }
    async resend(t) {
        try {
            const r = `${this.url}/resend`;
            if ("email"in t) {
                const {email: n, type: s, options: i} = t
                  , {error: o} = await A(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                }
            } else if ("phone"in t) {
                const {phone: n, type: s, options: i} = t
                  , {data: o, error: a} = await A(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: o == null ? void 0 : o.message_id
                    },
                    error: a
                }
            }
            throw new Os("You must provide either an email or phone number and a type")
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async r => r))
    }
    async _acquireLock(t, r) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await n,
                await r()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const n = r();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await n
                        } catch {}
                    }
                    )()),
                    await n; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await n
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const r = await this.__loadSession();
            return await t(r)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const r = await Cs(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", r),
            r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !t)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const n = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
            if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at),
            !n) {
                if (this.storage.isServer) {
                    let o = this.suppressGetSessionWarning;
                    t = new Proxy(t,{
                        get: (l, c, d) => (!o && c === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        o = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(l, c, d))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {session: s, error: i} = await this._callRefreshToken(t.refresh_token);
            return i ? {
                data: {
                    session: null
                },
                error: i
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await A(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: jt
            }) : await this._useSession(async r => {
                var n, s, i;
                const {data: o, error: a} = r;
                if (a)
                    throw a;
                return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new yt
                } : await A(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: jt
                })
            }
            )
        } catch (r) {
            if (R(r))
                return Dy(r) && (await this._removeSession(),
                await Ts(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async updateUser(t, r={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(t, r))
    }
    async _updateUser(t, r={}) {
        try {
            return await this._useSession(async n => {
                const {data: s, error: i} = n;
                if (i)
                    throw i;
                if (!s.session)
                    throw new yt;
                const o = s.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && t.email != null && ([a,l] = await yr(this.storage, this.storageKey));
                const {data: c, error: d} = await A(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: o.access_token,
                    xform: jt
                });
                if (d)
                    throw d;
                return o.user = c.user,
                await this._saveSession(o),
                await this._notifyAllSubscribers("USER_UPDATED", o),
                {
                    data: {
                        user: o.user
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (R(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    _decodeJWT(t) {
        return hc(t)
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new yt;
            const r = Date.now() / 1e3;
            let n = r
              , s = !0
              , i = null;
            const o = hc(t.access_token);
            if (o.exp && (n = o.exp,
            s = n <= r),
            s) {
                const {session: a, error: l} = await this._callRefreshToken(t.refresh_token);
                if (l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    };
                if (!a)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                i = a
            } else {
                const {data: a, error: l} = await this._getUser(t.access_token);
                if (l)
                    throw l;
                i = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: n - r,
                    expires_at: n
                },
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            }
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async refreshSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async r => {
                var n;
                if (!t) {
                    const {data: o, error: a} = r;
                    if (a)
                        throw a;
                    t = (n = o.session) !== null && n !== void 0 ? n : void 0
                }
                if (!(t != null && t.refresh_token))
                    throw new yt;
                const {session: s, error: i} = await this._callRefreshToken(t.refresh_token);
                return i ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (R(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _getSessionFromURL(t, r) {
        try {
            if (!Ke())
                throw new Rs("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new Rs(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (r) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new fc("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new Rs("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new fc("No code detected.");
                const {data: g, error: v} = await this._exchangeCodeForSession(t.code);
                if (v)
                    throw v;
                const x = new URL(window.location.href);
                return x.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", x.toString()),
                {
                    data: {
                        session: g.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: n, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: c} = t;
            if (!i || !a || !o || !c)
                throw new Rs("No session defined in URL");
            const d = Math.round(Date.now() / 1e3)
              , h = parseInt(a);
            let f = d + h;
            l && (f = parseInt(l));
            const w = f - d;
            w * 1e3 <= mn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${h}s`);
            const p = f - h;
            d - p >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, f, d) : d - p < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", p, f, d);
            const {data: y, error: b} = await this._getUser(i);
            if (b)
                throw b;
            const m = {
                provider_token: n,
                provider_refresh_token: s,
                access_token: i,
                expires_in: h,
                expires_at: f,
                refresh_token: o,
                token_type: c,
                user: y.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: m,
                    redirectType: t.type
                },
                error: null
            }
        } catch (n) {
            if (R(n))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: n
                };
            throw n
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const r = await Cs(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && r)
    }
    async signOut(t={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({scope: t}={
        scope: "global"
    }) {
        return await this._useSession(async r => {
            var n;
            const {data: s, error: i} = r;
            if (i)
                return {
                    error: i
                };
            const o = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
            if (o) {
                const {error: a} = await this.admin.signOut(o, t);
                if (a && !(Iy(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
                    return {
                        error: a
                    }
            }
            return t !== "others" && (await this._removeSession(),
            await Ts(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(t) {
        const r = _y()
          , n = {
            id: r,
            callback: t,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", r),
                this.stateChangeEmitters.delete(r)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", r),
        this.stateChangeEmitters.set(r, n),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(r)
        }
        )))(),
        {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async r => {
            var n, s;
            try {
                const {data: {session: i}, error: o} = r;
                if (o)
                    throw o;
                await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)),
                this._debug("INITIAL_SESSION", "callback id", t, "session", i)
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", t, "error", i),
                console.error(i)
            }
        }
        )
    }
    async resetPasswordForEmail(t, r={}) {
        let n = null
          , s = null;
        this.flowType === "pkce" && ([n,s] = await yr(this.storage, this.storageKey, !0));
        try {
            return await A(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: n,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: r.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: r.redirectTo
            })
        } catch (i) {
            if (R(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {data: r, error: n} = await this.getUser();
            if (n)
                throw n;
            return {
                data: {
                    identities: (t = r.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (r) {
            if (R(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async linkIdentity(t) {
        var r;
        try {
            const {data: n, error: s} = await this._useSession(async i => {
                var o, a, l, c, d;
                const {data: h, error: f} = i;
                if (f)
                    throw f;
                const w = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await A(this.fetch, "GET", w, {
                    headers: this.headers,
                    jwt: (d = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && d !== void 0 ? d : void 0
                })
            }
            );
            if (s)
                throw s;
            return Ke() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url),
            {
                data: {
                    provider: t.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            }
        } catch (n) {
            if (R(n))
                return {
                    data: {
                        provider: t.provider,
                        url: null
                    },
                    error: n
                };
            throw n
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {data: i, error: o} = r;
                if (o)
                    throw o;
                return await A(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (r) {
            if (R(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _refreshAccessToken(t) {
        const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
        this._debug(r, "begin");
        try {
            const n = Date.now();
            return await Ey(async s => (s > 0 && await jy(200 * Math.pow(2, s - 1)),
            this._debug(r, "refreshing attempt", s),
            await A(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: wt
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && Co(i) && Date.now() + o - n < mn
            }
            )
        } catch (n) {
            if (this._debug(r, "error", n),
            R(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        } finally {
            this._debug(r, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token"in t && "refresh_token"in t && "expires_at"in t
    }
    async _handleProviderSignIn(t, r) {
        const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n),
        Ke() && !r.skipBrowserRedirect && window.location.assign(n),
        {
            data: {
                provider: t,
                url: n
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t;
        const r = "#_recoverAndRefresh()";
        this._debug(r, "begin");
        try {
            const n = await Cs(this.storage, this.storageKey);
            if (this._debug(r, "session from storage", n),
            !this._isValidSession(n)) {
                this._debug(r, "session is not valid"),
                n !== null && await this._removeSession();
                return
            }
            const s = Math.round(Date.now() / 1e3)
              , i = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) < s + dc;
            if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${dc}s`),
            i) {
                if (this.autoRefreshToken && n.refresh_token) {
                    const {error: o} = await this._callRefreshToken(n.refresh_token);
                    o && (console.error(o),
                    Co(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o),
                    await this._removeSession()))
                }
            } else
                await this._notifyAllSubscribers("SIGNED_IN", n)
        } catch (n) {
            this._debug(r, "error", n),
            console.error(n);
            return
        } finally {
            this._debug(r, "end")
        }
    }
    async _callRefreshToken(t) {
        var r, n;
        if (!t)
            throw new yt;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new qi;
            const {data: i, error: o} = await this._refreshAccessToken(t);
            if (o)
                throw o;
            if (!i.session)
                throw new yt;
            await this._saveSession(i.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const a = {
                session: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a),
            a
        } catch (i) {
            if (this._debug(s, "error", i),
            R(i)) {
                const o = {
                    session: null,
                    error: i
                };
                return Co(i) || await this._removeSession(),
                (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o),
                o
            }
            throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
            i
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(t, r, n=!0) {
        const s = `#_notifyAllSubscribers(${t})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: t,
                session: r
            });
            const i = []
              , o = Array.from(this.stateChangeEmitters.values()).map(async a => {
                try {
                    await a.callback(t, r)
                } catch (l) {
                    i.push(l)
                }
            }
            );
            if (await Promise.all(o),
            i.length > 0) {
                for (let a = 0; a < i.length; a += 1)
                    console.error(i[a]);
                throw i[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t),
        this.suppressGetSessionWarning = !0,
        await jf(this.storage, this.storageKey, t)
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await Ts(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Ke() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (r) {
            console.error("removing visibilitychange callback failed", r)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const t = setInterval( () => this._autoRefreshTokenTick(), mn);
        this.autoRefreshTicker = t,
        t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async r => {
                            const {data: {session: n}} = r;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((n.expires_at * 1e3 - t) / mn);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${mn}ms, refresh threshold is ${yc} ticks`),
                            s <= yc && await this._callRefreshToken(n.refresh_token)
                        }
                        )
                    } catch (r) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof Nf)
                this._debug("auto refresh token tick lock not available");
            else
                throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Ke() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const r = `#_onVisibilityChanged(${t})`;
        this._debug(r, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        t || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, r, n) {
        const s = [`provider=${encodeURIComponent(r)}`];
        if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
        n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
        this.flowType === "pkce") {
            const [i,o] = await yr(this.storage, this.storageKey)
              , a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(o)}`
            });
            s.push(a.toString())
        }
        if (n != null && n.queryParams) {
            const i = new URLSearchParams(n.queryParams);
            s.push(i.toString())
        }
        return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
        `${t}?${s.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async r => {
                var n;
                const {data: s, error: i} = r;
                return i ? {
                    data: null,
                    error: i
                } : await A(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            }
            )
        } catch (r) {
            if (R(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {data: i, error: o} = r;
                if (o)
                    return {
                        data: null,
                        error: o
                    };
                const a = Object.assign({
                    friendly_name: t.friendlyName,
                    factor_type: t.factorType
                }, t.factorType === "phone" ? {
                    phone: t.phone
                } : {
                    issuer: t.issuer
                })
                  , {data: l, error: c} = await A(this.fetch, "POST", `${this.url}/factors`, {
                    body: a,
                    headers: this.headers,
                    jwt: (n = i == null ? void 0 : i.session) === null || n === void 0 ? void 0 : n.access_token
                });
                return c ? {
                    data: null,
                    error: c
                } : (t.factorType === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                {
                    data: l,
                    error: null
                })
            }
            )
        } catch (r) {
            if (R(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {data: s, error: i} = r;
                    if (i)
                        return {
                            data: null,
                            error: i
                        };
                    const {data: o, error: a} = await A(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + o.expires_in
                    }, o)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                    {
                        data: o,
                        error: a
                    })
                }
                )
            } catch (r) {
                if (R(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        }
        )
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {data: s, error: i} = r;
                    return i ? {
                        data: null,
                        error: i
                    } : await A(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    })
                }
                )
            } catch (r) {
                if (R(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        }
        )
    }
    async _challengeAndVerify(t) {
        const {data: r, error: n} = await this._challenge({
            factorId: t.factorId
        });
        return n ? {
            data: null,
            error: n
        } : await this._verify({
            factorId: t.factorId,
            challengeId: r.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {data: {user: t}, error: r} = await this.getUser();
        if (r)
            return {
                data: null,
                error: r
            };
        const n = (t == null ? void 0 : t.factors) || []
          , s = n.filter(o => o.factor_type === "totp" && o.status === "verified")
          , i = n.filter(o => o.factor_type === "phone" && o.status === "verified");
        return {
            data: {
                all: n,
                totp: s,
                phone: i
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var r, n;
            const {data: {session: s}, error: i} = t;
            if (i)
                return {
                    data: null,
                    error: i
                };
            if (!s)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const o = this._decodeJWT(s.access_token);
            let a = null;
            o.aal && (a = o.aal);
            let l = a;
            ((n = (r = s.user.factors) === null || r === void 0 ? void 0 : r.filter(h => h.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (l = "aal2");
            const d = o.amr || [];
            return {
                data: {
                    currentLevel: a,
                    nextLevel: l,
                    currentAuthenticationMethods: d
                },
                error: null
            }
        }
        ))
    }
}
Zn.nextInstanceID = 0;
const Zy = Zn;
class ew extends Zy {
    constructor(t) {
        super(t)
    }
}
var tw = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(d) {
            try {
                c(n.next(d))
            } catch (h) {
                o(h)
            }
        }
        function l(d) {
            try {
                c(n.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
};
class rw {
    constructor(t, r, n) {
        var s, i, o;
        if (this.supabaseUrl = t,
        this.supabaseKey = r,
        !t)
            throw new Error("supabaseUrl is required.");
        if (!r)
            throw new Error("supabaseKey is required.");
        const a = my(t);
        this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"),
        this.authUrl = `${a}/auth/v1`,
        this.storageUrl = `${a}/storage/v1`,
        this.functionsUrl = `${a}/functions/v1`;
        const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`
          , c = {
            db: ay,
            realtime: uy,
            auth: Object.assign(Object.assign({}, ly), {
                storageKey: l
            }),
            global: oy
        }
          , d = gy(n ?? {}, c);
        this.storageKey = (s = d.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (i = d.global.headers) !== null && i !== void 0 ? i : {},
        d.accessToken ? (this.accessToken = d.accessToken,
        this.auth = new Proxy({},{
            get: (h, f) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((o = d.auth) !== null && o !== void 0 ? o : {}, this.headers, d.global.fetch),
        this.fetch = fy(r, this._getAccessToken.bind(this), d.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, d.realtime)),
        this.rest = new Pv(`${a}/rest/v1`,{
            headers: this.headers,
            schema: d.db.schema,
            fetch: this.fetch
        }),
        d.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new sv(this.functionsUrl,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    get storage() {
        return new ny(this.storageUrl,this.headers,this.fetch)
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, r={}, n={}) {
        return this.rest.rpc(t, r, n)
    }
    channel(t, r={
        config: {}
    }) {
        return this.realtime.channel(t, r)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, r;
        return tw(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: n} = yield this.auth.getSession();
            return (r = (t = n.session) === null || t === void 0 ? void 0 : t.access_token) !== null && r !== void 0 ? r : null
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: t, persistSession: r, detectSessionInUrl: n, storage: s, storageKey: i, flowType: o, lock: a, debug: l}, c, d) {
        const h = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new ew({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, h), c),
            storageKey: i,
            autoRefreshToken: t,
            persistSession: r,
            detectSessionInUrl: n,
            storage: s,
            flowType: o,
            lock: a,
            debug: l,
            fetch: d,
            hasCustomAuthorizationHeader: "Authorization"in this.headers
        })
    }
    _initRealtimeClient(t) {
        return new Wv(this.realtimeUrl,Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (r, n) => {
            this._handleTokenChanged(r, "CLIENT", n == null ? void 0 : n.access_token)
        }
        )
    }
    _handleTokenChanged(t, r, n) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== n ? this.changedAccessToken = n : t === "SIGNED_OUT" && (this.realtime.setAuth(),
        r == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const nw = (e, t, r) => new rw(e,t,r)
  , sw = "https://tlzybfwrltpleyvmjnxp.supabase.co"
  , iw = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsenliZndybHRwbGV5dm1qbnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTY0OTMsImV4cCI6MjA2NDM3MjQ5M30.xRk4vB9ZGsy1D8egWNxeYRGavJs78YEoFNvJEIFARh0"
  , G = nw(sw, iw)
  , Wt = G0(e => ({
    user: null,
    isPlaying: !1,
    setUser: t => e({
        user: t
    }),
    setIsPlaying: t => e({
        isPlaying: t
    }),
    logout: async () => {
        await G.auth.signOut(),
        e({
            user: null
        })
    }
}));
function ow() {
    const {user: e, logout: t} = Wt()
      , r = e && ["presenter", "manager", "developer", "co_director", "director"].includes(e.role);
    return u.jsx("nav", {
        className: "bg-gray-800 border-b border-gray-700",
        children: u.jsx("div", {
            className: "container mx-auto px-4",
            children: u.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [u.jsxs("div", {
                    className: "flex items-center space-x-8",
                    children: [u.jsxs(st, {
                        to: "/",
                        className: "flex items-center space-x-2 text-white",
                        children: [u.jsx(pt, {
                            size: 24
                        }), u.jsx("span", {
                            className: "font-bold text-xl",
                            children: "Peak Radio"
                        })]
                    }), u.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [u.jsxs(st, {
                            to: "/team",
                            className: "text-gray-300 hover:text-white flex items-center space-x-1",
                            children: [u.jsx(Qr, {
                                size: 18
                            }), u.jsx("span", {
                                children: "Team"
                            })]
                        }), u.jsxs(st, {
                            to: "/schedule",
                            className: "text-gray-300 hover:text-white flex items-center space-x-1",
                            children: [u.jsx(Yr, {
                                size: 18
                            }), u.jsx("span", {
                                children: "Schedule"
                            })]
                        }), (e == null ? void 0 : e.role) === "listener" && u.jsx(st, {
                            to: "/apply",
                            className: "text-gray-300 hover:text-white",
                            children: "Apply"
                        }), r && u.jsx(st, {
                            to: "/panel",
                            className: "text-gray-300 hover:text-white",
                            children: "Radio Panel"
                        })]
                    })]
                }), u.jsx("div", {
                    className: "flex items-center space-x-4",
                    children: e ? u.jsxs(u.Fragment, {
                        children: [u.jsxs(st, {
                            to: "/account",
                            className: "text-gray-300 hover:text-white flex items-center space-x-1",
                            children: [u.jsx(d0, {
                                size: 18
                            }), u.jsx("span", {
                                children: e.username
                            })]
                        }), u.jsx("button", {
                            onClick: t,
                            className: "text-gray-300 hover:text-white",
                            children: "Logout"
                        })]
                    }) : u.jsxs(st, {
                        to: "/login",
                        className: "text-gray-300 hover:text-white flex items-center space-x-1",
                        children: [u.jsx(p0, {
                            size: 18
                        }), u.jsx("span", {
                            children: "Login"
                        })]
                    })
                })]
            })
        })
    })
}
function aw() {
    const [e,t] = k.useState([])
      , [r,n] = k.useState(0);
    k.useEffect( () => {
        s()
    }
    , []),
    k.useEffect( () => {
        const a = setInterval( () => {
            n(l => (l + 1) % e.length)
        }
        , 1e4);
        return () => clearInterval(a)
    }
    , [e.length]);
    async function s() {
        try {
            const {data: a} = await G.from("banners").select("*").eq("active", !0).order("order");
            a && t(a)
        } catch (a) {
            console.error("Error fetching banners:", a)
        }
    }
    if (!e.length)
        return null;
    const i = () => {
        n(a => (a + 1) % e.length)
    }
      , o = () => {
        n(a => (a - 1 + e.length) % e.length)
    }
    ;
    return u.jsxs("div", {
        className: "relative h-[400px] overflow-hidden rounded-2xl bg-gray-900",
        children: [e.map( (a, l) => u.jsxs("div", {
            className: `absolute inset-0 transition-opacity duration-1000 ${l === r ? "opacity-100" : "opacity-0"}`,
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900/80"
            }), u.jsx("img", {
                src: a.image_url,
                alt: a.title,
                className: "w-full h-full object-cover"
            }), u.jsx("div", {
                className: "absolute inset-0 flex items-center",
                children: u.jsx("div", {
                    className: "max-w-7xl mx-auto px-6 w-full",
                    children: u.jsxs("div", {
                        className: "max-w-lg",
                        children: [u.jsx("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: a.title
                        }), u.jsx("p", {
                            className: "text-gray-300 text-lg mb-6",
                            children: a.description
                        }), a.link_url && u.jsx("a", {
                            href: a.link_url,
                            className: "inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors",
                            children: "Learn More"
                        })]
                    })
                })
            })]
        }, a.id)), u.jsx("button", {
            onClick: o,
            className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors",
            children: u.jsx(c0, {
                size: 24
            })
        }), u.jsx("button", {
            onClick: i,
            className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors",
            children: u.jsx(Xh, {
                size: 24
            })
        }), u.jsx("div", {
            className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
            children: e.map( (a, l) => u.jsx("button", {
                onClick: () => n(l),
                className: `w-2 h-2 rounded-full transition-colors ${l === r ? "bg-white" : "bg-white/50"}`
            }, l))
        })]
    })
}
function Qe(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function ur(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
const Pf = 6048e5
  , lw = 864e5;
let uw = {};
function Yi() {
    return uw
}
function es(e, t) {
    var a, l, c, d;
    const r = Yi()
      , n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0
      , s = Qe(e)
      , i = s.getDay()
      , o = (i < n ? 7 : 0) + i - n;
    return s.setDate(s.getDate() - o),
    s.setHours(0, 0, 0, 0),
    s
}
function wi(e) {
    return es(e, {
        weekStartsOn: 1
    })
}
function Cf(e) {
    const t = Qe(e)
      , r = t.getFullYear()
      , n = ur(e, 0);
    n.setFullYear(r + 1, 0, 4),
    n.setHours(0, 0, 0, 0);
    const s = wi(n)
      , i = ur(e, 0);
    i.setFullYear(r, 0, 4),
    i.setHours(0, 0, 0, 0);
    const o = wi(i);
    return t.getTime() >= s.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1
}
function xc(e) {
    const t = Qe(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function _c(e) {
    const t = Qe(e)
      , r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()),
    +e - +r
}
function cw(e, t) {
    const r = xc(e)
      , n = xc(t)
      , s = +r - _c(r)
      , i = +n - _c(n);
    return Math.round((s - i) / lw)
}
function dw(e) {
    const t = Cf(e)
      , r = ur(e, 0);
    return r.setFullYear(t, 0, 4),
    r.setHours(0, 0, 0, 0),
    wi(r)
}
function hw(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function fw(e) {
    if (!hw(e) && typeof e != "number")
        return !1;
    const t = Qe(e);
    return !isNaN(Number(t))
}
function pw(e) {
    const t = Qe(e)
      , r = ur(e, 0);
    return r.setFullYear(t.getFullYear(), 0, 1),
    r.setHours(0, 0, 0, 0),
    r
}
const mw = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , gw = (e, t, r) => {
    let n;
    const s = mw[e];
    return typeof s == "string" ? n = s : t === 1 ? n = s.one : n = s.other.replace("{{count}}", t.toString()),
    r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n
}
;
function To(e) {
    return (t={}) => {
        const r = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[r] || e.formats[e.defaultWidth]
    }
}
const vw = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , yw = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , ww = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , xw = {
    date: To({
        formats: vw,
        defaultWidth: "full"
    }),
    time: To({
        formats: yw,
        defaultWidth: "full"
    }),
    dateTime: To({
        formats: ww,
        defaultWidth: "full"
    })
}
  , _w = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , kw = (e, t, r, n) => _w[e];
function gn(e) {
    return (t, r) => {
        const n = r != null && r.context ? String(r.context) : "standalone";
        let s;
        if (n === "formatting" && e.formattingValues) {
            const o = e.defaultFormattingWidth || e.defaultWidth
              , a = r != null && r.width ? String(r.width) : o;
            s = e.formattingValues[a] || e.formattingValues[o]
        } else {
            const o = e.defaultWidth
              , a = r != null && r.width ? String(r.width) : e.defaultWidth;
            s = e.values[a] || e.values[o]
        }
        const i = e.argumentCallback ? e.argumentCallback(t) : t;
        return s[i]
    }
}
const Sw = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , bw = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , jw = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , Ew = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , Nw = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , Pw = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , Cw = (e, t) => {
    const r = Number(e)
      , n = r % 100;
    if (n > 20 || n < 10)
        switch (n % 10) {
        case 1:
            return r + "st";
        case 2:
            return r + "nd";
        case 3:
            return r + "rd"
        }
    return r + "th"
}
  , Tw = {
    ordinalNumber: Cw,
    era: gn({
        values: Sw,
        defaultWidth: "wide"
    }),
    quarter: gn({
        values: bw,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: gn({
        values: jw,
        defaultWidth: "wide"
    }),
    day: gn({
        values: Ew,
        defaultWidth: "wide"
    }),
    dayPeriod: gn({
        values: Nw,
        defaultWidth: "wide",
        formattingValues: Pw,
        defaultFormattingWidth: "wide"
    })
};
function vn(e) {
    return (t, r={}) => {
        const n = r.width
          , s = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth]
          , i = t.match(s);
        if (!i)
            return null;
        const o = i[0]
          , a = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth]
          , l = Array.isArray(a) ? Rw(a, h => h.test(o)) : Ow(a, h => h.test(o));
        let c;
        c = e.valueCallback ? e.valueCallback(l) : l,
        c = r.valueCallback ? r.valueCallback(c) : c;
        const d = t.slice(o.length);
        return {
            value: c,
            rest: d
        }
    }
}
function Ow(e, t) {
    for (const r in e)
        if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
            return r
}
function Rw(e, t) {
    for (let r = 0; r < e.length; r++)
        if (t(e[r]))
            return r
}
function Lw(e) {
    return (t, r={}) => {
        const n = t.match(e.matchPattern);
        if (!n)
            return null;
        const s = n[0]
          , i = t.match(e.parsePattern);
        if (!i)
            return null;
        let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
        o = r.valueCallback ? r.valueCallback(o) : o;
        const a = t.slice(s.length);
        return {
            value: o,
            rest: a
        }
    }
}
const $w = /^(\d+)(th|st|nd|rd)?/i
  , Iw = /\d+/i
  , Dw = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , Aw = {
    any: [/^b/i, /^(a|c)/i]
}
  , Mw = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , Uw = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , zw = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , Fw = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , Bw = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , Ww = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , Vw = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , Hw = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , qw = {
    ordinalNumber: Lw({
        matchPattern: $w,
        parsePattern: Iw,
        valueCallback: e => parseInt(e, 10)
    }),
    era: vn({
        matchPatterns: Dw,
        defaultMatchWidth: "wide",
        parsePatterns: Aw,
        defaultParseWidth: "any"
    }),
    quarter: vn({
        matchPatterns: Mw,
        defaultMatchWidth: "wide",
        parsePatterns: Uw,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: vn({
        matchPatterns: zw,
        defaultMatchWidth: "wide",
        parsePatterns: Fw,
        defaultParseWidth: "any"
    }),
    day: vn({
        matchPatterns: Bw,
        defaultMatchWidth: "wide",
        parsePatterns: Ww,
        defaultParseWidth: "any"
    }),
    dayPeriod: vn({
        matchPatterns: Vw,
        defaultMatchWidth: "any",
        parsePatterns: Hw,
        defaultParseWidth: "any"
    })
}
  , Yw = {
    code: "en-US",
    formatDistance: gw,
    formatLong: xw,
    formatRelative: kw,
    localize: Tw,
    match: qw,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function Jw(e) {
    const t = Qe(e);
    return cw(t, pw(t)) + 1
}
function Qw(e) {
    const t = Qe(e)
      , r = +wi(t) - +dw(t);
    return Math.round(r / Pf) + 1
}
function Tf(e, t) {
    var d, h, f, w;
    const r = Qe(e)
      , n = r.getFullYear()
      , s = Yi()
      , i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((w = (f = s.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1
      , o = ur(e, 0);
    o.setFullYear(n + 1, 0, i),
    o.setHours(0, 0, 0, 0);
    const a = es(o, t)
      , l = ur(e, 0);
    l.setFullYear(n, 0, i),
    l.setHours(0, 0, 0, 0);
    const c = es(l, t);
    return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= c.getTime() ? n : n - 1
}
function Gw(e, t) {
    var a, l, c, d;
    const r = Yi()
      , n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
      , s = Tf(e, t)
      , i = ur(e, 0);
    return i.setFullYear(s, 0, n),
    i.setHours(0, 0, 0, 0),
    es(i, t)
}
function Kw(e, t) {
    const r = Qe(e)
      , n = +es(r, t) - +Gw(r, t);
    return Math.round(n / Pf) + 1
}
function U(e, t) {
    const r = e < 0 ? "-" : ""
      , n = Math.abs(e).toString().padStart(t, "0");
    return r + n
}
const vt = {
    y(e, t) {
        const r = e.getFullYear()
          , n = r > 0 ? r : 1 - r;
        return U(t === "yy" ? n % 100 : n, t.length)
    },
    M(e, t) {
        const r = e.getMonth();
        return t === "M" ? String(r + 1) : U(r + 1, 2)
    },
    d(e, t) {
        return U(e.getDate(), t.length)
    },
    a(e, t) {
        const r = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return r.toUpperCase();
        case "aaa":
            return r;
        case "aaaaa":
            return r[0];
        case "aaaa":
        default:
            return r === "am" ? "a.m." : "p.m."
        }
    },
    h(e, t) {
        return U(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return U(e.getHours(), t.length)
    },
    m(e, t) {
        return U(e.getMinutes(), t.length)
    },
    s(e, t) {
        return U(e.getSeconds(), t.length)
    },
    S(e, t) {
        const r = t.length
          , n = e.getMilliseconds()
          , s = Math.trunc(n * Math.pow(10, r - 3));
        return U(s, t.length)
    }
}
  , xr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , kc = {
    G: function(e, t, r) {
        const n = e.getFullYear() > 0 ? 1 : 0;
        switch (t) {
        case "G":
        case "GG":
        case "GGG":
            return r.era(n, {
                width: "abbreviated"
            });
        case "GGGGG":
            return r.era(n, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return r.era(n, {
                width: "wide"
            })
        }
    },
    y: function(e, t, r) {
        if (t === "yo") {
            const n = e.getFullYear()
              , s = n > 0 ? n : 1 - n;
            return r.ordinalNumber(s, {
                unit: "year"
            })
        }
        return vt.y(e, t)
    },
    Y: function(e, t, r, n) {
        const s = Tf(e, n)
          , i = s > 0 ? s : 1 - s;
        if (t === "YY") {
            const o = i % 100;
            return U(o, 2)
        }
        return t === "Yo" ? r.ordinalNumber(i, {
            unit: "year"
        }) : U(i, t.length)
    },
    R: function(e, t) {
        const r = Cf(e);
        return U(r, t.length)
    },
    u: function(e, t) {
        const r = e.getFullYear();
        return U(r, t.length)
    },
    Q: function(e, t, r) {
        const n = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(n);
        case "QQ":
            return U(n, 2);
        case "Qo":
            return r.ordinalNumber(n, {
                unit: "quarter"
            });
        case "QQQ":
            return r.quarter(n, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return r.quarter(n, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return r.quarter(n, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, t, r) {
        const n = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "q":
            return String(n);
        case "qq":
            return U(n, 2);
        case "qo":
            return r.ordinalNumber(n, {
                unit: "quarter"
            });
        case "qqq":
            return r.quarter(n, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return r.quarter(n, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return r.quarter(n, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, t, r) {
        const n = e.getMonth();
        switch (t) {
        case "M":
        case "MM":
            return vt.M(e, t);
        case "Mo":
            return r.ordinalNumber(n + 1, {
                unit: "month"
            });
        case "MMM":
            return r.month(n, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return r.month(n, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return r.month(n, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, t, r) {
        const n = e.getMonth();
        switch (t) {
        case "L":
            return String(n + 1);
        case "LL":
            return U(n + 1, 2);
        case "Lo":
            return r.ordinalNumber(n + 1, {
                unit: "month"
            });
        case "LLL":
            return r.month(n, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return r.month(n, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return r.month(n, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, t, r, n) {
        const s = Kw(e, n);
        return t === "wo" ? r.ordinalNumber(s, {
            unit: "week"
        }) : U(s, t.length)
    },
    I: function(e, t, r) {
        const n = Qw(e);
        return t === "Io" ? r.ordinalNumber(n, {
            unit: "week"
        }) : U(n, t.length)
    },
    d: function(e, t, r) {
        return t === "do" ? r.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : vt.d(e, t)
    },
    D: function(e, t, r) {
        const n = Jw(e);
        return t === "Do" ? r.ordinalNumber(n, {
            unit: "dayOfYear"
        }) : U(n, t.length)
    },
    E: function(e, t, r) {
        const n = e.getDay();
        switch (t) {
        case "E":
        case "EE":
        case "EEE":
            return r.day(n, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return r.day(n, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return r.day(n, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return r.day(n, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, t, r, n) {
        const s = e.getDay()
          , i = (s - n.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "e":
            return String(i);
        case "ee":
            return U(i, 2);
        case "eo":
            return r.ordinalNumber(i, {
                unit: "day"
            });
        case "eee":
            return r.day(s, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return r.day(s, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return r.day(s, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return r.day(s, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, t, r, n) {
        const s = e.getDay()
          , i = (s - n.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "c":
            return String(i);
        case "cc":
            return U(i, t.length);
        case "co":
            return r.ordinalNumber(i, {
                unit: "day"
            });
        case "ccc":
            return r.day(s, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return r.day(s, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return r.day(s, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return r.day(s, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, t, r) {
        const n = e.getDay()
          , s = n === 0 ? 7 : n;
        switch (t) {
        case "i":
            return String(s);
        case "ii":
            return U(s, t.length);
        case "io":
            return r.ordinalNumber(s, {
                unit: "day"
            });
        case "iii":
            return r.day(n, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return r.day(n, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return r.day(n, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return r.day(n, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, t, r) {
        const s = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return r.dayPeriod(s, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return r.dayPeriod(s, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return r.dayPeriod(s, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return r.dayPeriod(s, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, t, r) {
        const n = e.getHours();
        let s;
        switch (n === 12 ? s = xr.noon : n === 0 ? s = xr.midnight : s = n / 12 >= 1 ? "pm" : "am",
        t) {
        case "b":
        case "bb":
            return r.dayPeriod(s, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return r.dayPeriod(s, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return r.dayPeriod(s, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return r.dayPeriod(s, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, t, r) {
        const n = e.getHours();
        let s;
        switch (n >= 17 ? s = xr.evening : n >= 12 ? s = xr.afternoon : n >= 4 ? s = xr.morning : s = xr.night,
        t) {
        case "B":
        case "BB":
        case "BBB":
            return r.dayPeriod(s, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return r.dayPeriod(s, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return r.dayPeriod(s, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, t, r) {
        if (t === "ho") {
            let n = e.getHours() % 12;
            return n === 0 && (n = 12),
            r.ordinalNumber(n, {
                unit: "hour"
            })
        }
        return vt.h(e, t)
    },
    H: function(e, t, r) {
        return t === "Ho" ? r.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : vt.H(e, t)
    },
    K: function(e, t, r) {
        const n = e.getHours() % 12;
        return t === "Ko" ? r.ordinalNumber(n, {
            unit: "hour"
        }) : U(n, t.length)
    },
    k: function(e, t, r) {
        let n = e.getHours();
        return n === 0 && (n = 24),
        t === "ko" ? r.ordinalNumber(n, {
            unit: "hour"
        }) : U(n, t.length)
    },
    m: function(e, t, r) {
        return t === "mo" ? r.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : vt.m(e, t)
    },
    s: function(e, t, r) {
        return t === "so" ? r.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : vt.s(e, t)
    },
    S: function(e, t) {
        return vt.S(e, t)
    },
    X: function(e, t, r) {
        const n = e.getTimezoneOffset();
        if (n === 0)
            return "Z";
        switch (t) {
        case "X":
            return bc(n);
        case "XXXX":
        case "XX":
            return Kt(n);
        case "XXXXX":
        case "XXX":
        default:
            return Kt(n, ":")
        }
    },
    x: function(e, t, r) {
        const n = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return bc(n);
        case "xxxx":
        case "xx":
            return Kt(n);
        case "xxxxx":
        case "xxx":
        default:
            return Kt(n, ":")
        }
    },
    O: function(e, t, r) {
        const n = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + Sc(n, ":");
        case "OOOO":
        default:
            return "GMT" + Kt(n, ":")
        }
    },
    z: function(e, t, r) {
        const n = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + Sc(n, ":");
        case "zzzz":
        default:
            return "GMT" + Kt(n, ":")
        }
    },
    t: function(e, t, r) {
        const n = Math.trunc(e.getTime() / 1e3);
        return U(n, t.length)
    },
    T: function(e, t, r) {
        const n = e.getTime();
        return U(n, t.length)
    }
};
function Sc(e, t="") {
    const r = e > 0 ? "-" : "+"
      , n = Math.abs(e)
      , s = Math.trunc(n / 60)
      , i = n % 60;
    return i === 0 ? r + String(s) : r + String(s) + t + U(i, 2)
}
function bc(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + U(Math.abs(e) / 60, 2) : Kt(e, t)
}
function Kt(e, t="") {
    const r = e > 0 ? "-" : "+"
      , n = Math.abs(e)
      , s = U(Math.trunc(n / 60), 2)
      , i = U(n % 60, 2);
    return r + s + t + i
}
const jc = (e, t) => {
    switch (e) {
    case "P":
        return t.date({
            width: "short"
        });
    case "PP":
        return t.date({
            width: "medium"
        });
    case "PPP":
        return t.date({
            width: "long"
        });
    case "PPPP":
    default:
        return t.date({
            width: "full"
        })
    }
}
  , Of = (e, t) => {
    switch (e) {
    case "p":
        return t.time({
            width: "short"
        });
    case "pp":
        return t.time({
            width: "medium"
        });
    case "ppp":
        return t.time({
            width: "long"
        });
    case "pppp":
    default:
        return t.time({
            width: "full"
        })
    }
}
  , Xw = (e, t) => {
    const r = e.match(/(P+)(p+)?/) || []
      , n = r[1]
      , s = r[2];
    if (!s)
        return jc(e, t);
    let i;
    switch (n) {
    case "P":
        i = t.dateTime({
            width: "short"
        });
        break;
    case "PP":
        i = t.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        i = t.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        i = t.dateTime({
            width: "full"
        });
        break
    }
    return i.replace("{{date}}", jc(n, t)).replace("{{time}}", Of(s, t))
}
  , Zw = {
    p: Of,
    P: Xw
}
  , ex = /^D+$/
  , tx = /^Y+$/
  , rx = ["D", "DD", "YY", "YYYY"];
function nx(e) {
    return ex.test(e)
}
function sx(e) {
    return tx.test(e)
}
function ix(e, t, r) {
    const n = ox(e, t, r);
    if (console.warn(n),
    rx.includes(e))
        throw new RangeError(n)
}
function ox(e, t, r) {
    const n = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const ax = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , lx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , ux = /^'([^]*?)'?$/
  , cx = /''/g
  , dx = /[a-zA-Z]/;
function Ec(e, t, r) {
    var d, h, f, w;
    const n = Yi()
      , s = n.locale ?? Yw
      , i = n.firstWeekContainsDate ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1
      , o = n.weekStartsOn ?? ((w = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : w.weekStartsOn) ?? 0
      , a = Qe(e);
    if (!fw(a))
        throw new RangeError("Invalid time value");
    let l = t.match(lx).map(p => {
        const y = p[0];
        if (y === "p" || y === "P") {
            const b = Zw[y];
            return b(p, s.formatLong)
        }
        return p
    }
    ).join("").match(ax).map(p => {
        if (p === "''")
            return {
                isToken: !1,
                value: "'"
            };
        const y = p[0];
        if (y === "'")
            return {
                isToken: !1,
                value: hx(p)
            };
        if (kc[y])
            return {
                isToken: !0,
                value: p
            };
        if (y.match(dx))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + y + "`");
        return {
            isToken: !1,
            value: p
        }
    }
    );
    s.localize.preprocessor && (l = s.localize.preprocessor(a, l));
    const c = {
        firstWeekContainsDate: i,
        weekStartsOn: o,
        locale: s
    };
    return l.map(p => {
        if (!p.isToken)
            return p.value;
        const y = p.value;
        (sx(y) || nx(y)) && ix(y, t, String(e));
        const b = kc[y[0]];
        return b(a, y, s.localize, c)
    }
    ).join("")
}
function hx(e) {
    const t = e.match(ux);
    return t ? t[1].replace(cx, "'") : e
}
const fx = "d3803df906c84436919d87525b148c41"
  , px = "5493e906cd9d49bbbb8163b0e61d4d16";
let Ls = null
  , Oo = null;
async function mx() {
    if (Ls && Oo && Date.now() < Oo)
        return Ls;
    try {
        const e = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(`${fx}:${px}`)}`
            },
            body: "grant_type=client_credentials"
        });
        if (!e.ok)
            throw new Error(`HTTP error! status: ${e.status}`);
        const t = await e.json();
        return Ls = t.access_token,
        Oo = Date.now() + t.expires_in * 1e3,
        Ls
    } catch (e) {
        throw console.error("Error getting Spotify access token:", e),
        e
    }
}
async function gx(e, t) {
    var r, n, s;
    try {
        const i = await mx()
          , o = encodeURIComponent(`${t} ${e}`)
          , a = await fetch(`https://api.spotify.com/v1/search?q=${o}&type=track&limit=1`, {
            headers: {
                Authorization: `Bearer ${i}`
            }
        });
        if (!a.ok)
            throw new Error(`HTTP error! status: ${a.status}`);
        const l = await a.json();
        if (!((n = (r = l.tracks) == null ? void 0 : r.items) != null && n.length))
            return null;
        const c = l.tracks.items[0];
        return {
            albumArt: ((s = c.album.images[0]) == null ? void 0 : s.url) || null,
            previewUrl: c.preview_url,
            spotifyUrl: c.external_urls.spotify
        }
    } catch (i) {
        return console.error("Error searching Spotify track:", i),
        null
    }
}
const Ro = {
    title: "Unknown Track",
    artist: "Unknown Artist"
};
async function vx() {
    var e, t, r, n;
    try {
        const {data: s, error: i} = await G.from("api_config").select("value").eq("key", "nowplaying_api_url").single();
        if (i || !(s != null && s.value))
            return console.warn("Now playing API URL not configured"),
            Ro;
        const o = new AbortController
          , a = setTimeout( () => o.abort(), 5e3)
          , l = await fetch(s.value, {
            signal: o.signal,
            headers: {
                Accept: "application/json"
            }
        }).finally( () => clearTimeout(a));
        if (!l.ok)
            throw new Error(`HTTP error! status: ${l.status}`);
        const c = l.headers.get("content-type");
        if (!c || !c.includes("application/json"))
            throw new Error("Invalid content type. Expected JSON.");
        const d = await l.json();
        return !((t = (e = d == null ? void 0 : d.now_playing) == null ? void 0 : e.song) != null && t.title) || !((n = (r = d == null ? void 0 : d.now_playing) == null ? void 0 : r.song) != null && n.artist) ? (console.warn("Invalid now playing data format:", d),
        Ro) : d.now_playing.song
    } catch (s) {
        return s instanceof Error && (s.name === "AbortError" ? console.error("Now playing request timed out") : console.error("Error fetching now playing:", s.message)),
        Ro
    }
}
async function yx() {
    try {
        const {data: e, error: t} = await G.from("radio_stations").select("stream_url").eq("active", !0).order("order").limit(1).single();
        return t ? (console.error("Error fetching stream URL:", t),
        "https://stream.peakradio.live/main") : e.stream_url
    } catch (e) {
        return console.error("Error fetching stream URL:", e),
        "https://stream.peakradio.live/main"
    }
}
function wx() {
    const {user: e} = Wt()
      , [t,r] = k.useState([])
      , [n,s] = k.useState({
        songTitle: "",
        artist: "",
        message: ""
    })
      , [i,o] = k.useState(!1)
      , [a,l] = k.useState(!1)
      , [c,d] = k.useState(null)
      , [h,f] = k.useState(1)
      , [w,p] = k.useState(!1)
      , [y,b] = k.useState(!1)
      , [m,g] = k.useState(null)
      , [v,x] = k.useState(null)
      , S = Ua.useRef(null);
    k.useEffect( () => {
        async function T() {
            if (S.current) {
                const Vt = await yx();
                S.current.src = Vt
            }
        }
        T();
        const re = setInterval(N, 1e4);
        return N(),
        _(),
        () => clearInterval(re)
    }
    , []);
    async function N() {
        try {
            const T = await vx();
            if (T) {
                const re = await gx(T.artist, T.title);
                g({
                    title: T.title,
                    artist: T.artist,
                    albumArt: re == null ? void 0 : re.albumArt,
                    spotifyUrl: re == null ? void 0 : re.spotifyUrl
                })
            }
        } catch (T) {
            console.error("Error updating now playing:", T)
        }
    }
    async function _() {
        try {
            const T = new Date().toISOString()
              , {data: re} = await G.from("shows").select("*, user:users(username, avatar_url, bio)").lte("start_time", T).gte("end_time", T).eq("approved", !0).single();
            x(re)
        } catch (T) {
            console.error("Error fetching current show:", T)
        }
    }
    const E = () => {
        S.current && (y ? S.current.pause() : S.current.play(),
        b(!y))
    }
      , D = () => {
        S.current && (S.current.muted = !w,
        p(!w))
    }
      , $ = T => {
        const re = parseFloat(T.target.value);
        S.current && (S.current.volume = re,
        f(re))
    }
    ;
    return u.jsxs("div", {
        className: "space-y-12 pb-24",
        children: [u.jsx(aw, {}), u.jsxs("section", {
            className: "relative bg-gradient-to-br from-indigo-900 to-purple-900 py-24",
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"
            }), u.jsxs("div", {
                className: "relative max-w-7xl mx-auto px-4",
                children: [u.jsxs("div", {
                    className: "text-center mb-12",
                    children: [u.jsx("h1", {
                        className: "text-5xl font-bold mb-6",
                        children: "Peak Radio"
                    }), u.jsx("p", {
                        className: "text-xl text-gray-300 max-w-2xl mx-auto",
                        children: "Your premier destination for the best music and entertainment. Broadcasting 24/7 with a diverse range of shows and talented presenters."
                    })]
                }), u.jsxs("div", {
                    className: "max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20",
                    children: [u.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8",
                        children: [u.jsxs("div", {
                            className: "flex items-center gap-6",
                            children: [u.jsxs("div", {
                                className: "relative",
                                children: [u.jsx("div", {
                                    className: "w-24 h-24 rounded-full overflow-hidden border-4 border-white/20",
                                    children: m != null && m.albumArt ? u.jsx("img", {
                                        src: m.albumArt,
                                        alt: `${m.title} by ${m.artist}`,
                                        className: "w-full h-full object-cover"
                                    }) : u.jsx("div", {
                                        className: "w-full h-full bg-white/10 flex items-center justify-center",
                                        children: u.jsx(Jr, {
                                            size: 32,
                                            className: "text-white/50"
                                        })
                                    })
                                }), u.jsx("div", {
                                    className: "absolute -bottom-2 -right-2",
                                    children: u.jsx("button", {
                                        onClick: E,
                                        className: "w-10 h-10 rounded-full bg-white hover:bg-white/90 transition-colors flex items-center justify-center text-indigo-900 shadow-lg",
                                        children: y ? u.jsx(m0, {
                                            size: 20
                                        }) : u.jsx(g0, {
                                            size: 20
                                        })
                                    })
                                })]
                            }), u.jsxs("div", {
                                className: "flex-grow",
                                children: [u.jsx("h2", {
                                    className: "font-semibold text-xl mb-1",
                                    children: (m == null ? void 0 : m.title) || "Loading..."
                                }), u.jsx("p", {
                                    className: "text-gray-300",
                                    children: (m == null ? void 0 : m.artist) || "Loading..."
                                }), (m == null ? void 0 : m.spotifyUrl) && u.jsxs("a", {
                                    href: m.spotifyUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 mt-2",
                                    children: [u.jsx(h0, {
                                        size: 14
                                    }), u.jsx("span", {
                                        children: "Listen on Spotify"
                                    })]
                                })]
                            })]
                        }), u.jsxs("div", {
                            className: "flex items-center gap-6 justify-end",
                            children: [u.jsxs("div", {
                                className: "text-right",
                                children: [u.jsx("h2", {
                                    className: "font-semibold text-xl mb-1",
                                    children: v ? v.title : "AutoDJ"
                                }), u.jsx("p", {
                                    className: "text-gray-300",
                                    children: v ? `with ${v.user.username}` : "Playing the best hits"
                                })]
                            }), u.jsx("div", {
                                className: "w-24 h-24 rounded-full overflow-hidden border-4 border-white/20",
                                children: v ? u.jsx("img", {
                                    src: v.user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${v.user.username}`,
                                    alt: v.user.username,
                                    className: "w-full h-full object-cover"
                                }) : u.jsx("img", {
                                    src: "https://tlzybfwrltpleyvmjnxp.supabase.co/storage/v1/object/public/storage/Profile%20Pictures/OyJt8J9_1.png",
                                    alt: "AutoDJ",
                                    className: "w-full h-full object-cover"
                                })
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [u.jsx("button", {
                            onClick: D,
                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                            children: w ? u.jsx(S0, {
                                size: 20
                            }) : u.jsx(k0, {
                                size: 20
                            })
                        }), u.jsx("input", {
                            type: "range",
                            min: "0",
                            max: "1",
                            step: "0.01",
                            value: h,
                            onChange: $,
                            className: "flex-grow accent-white"
                        })]
                    })]
                })]
            }), u.jsx("audio", {
                ref: S
            })]
        }), u.jsx("div", {
            className: "max-w-7xl mx-auto px-4",
            children: u.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [e && u.jsxs("div", {
                    className: "bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700",
                    children: [u.jsx("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Request a Song"
                    }), u.jsxs("form", {
                        onSubmit: T => {
                            T.preventDefault()
                        }
                        ,
                        className: "space-y-4",
                        children: [a && u.jsx("div", {
                            className: "bg-green-500/10 border border-green-500 text-green-500 p-3 rounded",
                            children: "Song request submitted successfully!"
                        }), c && u.jsx("div", {
                            className: "bg-red-500/10 border border-red-500 text-red-500 p-3 rounded",
                            children: c
                        }), u.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [u.jsxs("div", {
                                children: [u.jsx("label", {
                                    htmlFor: "songTitle",
                                    className: "block text-sm font-medium mb-1",
                                    children: "Song Title"
                                }), u.jsx("input", {
                                    id: "songTitle",
                                    type: "text",
                                    value: n.songTitle,
                                    onChange: T => s({
                                        ...n,
                                        songTitle: T.target.value
                                    }),
                                    className: "w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                    required: !0
                                })]
                            }), u.jsxs("div", {
                                children: [u.jsx("label", {
                                    htmlFor: "artist",
                                    className: "block text-sm font-medium mb-1",
                                    children: "Artist"
                                }), u.jsx("input", {
                                    id: "artist",
                                    type: "text",
                                    value: n.artist,
                                    onChange: T => s({
                                        ...n,
                                        artist: T.target.value
                                    }),
                                    className: "w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                    required: !0
                                })]
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("label", {
                                htmlFor: "message",
                                className: "block text-sm font-medium mb-1",
                                children: "Message (Optional)"
                            }), u.jsx("textarea", {
                                id: "message",
                                value: n.message,
                                onChange: T => s({
                                    ...n,
                                    message: T.target.value
                                }),
                                className: "w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                rows: 3
                            })]
                        }), u.jsx("button", {
                            type: "submit",
                            disabled: i,
                            className: "w-full bg-indigo-500 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                            children: i ? "Submitting..." : "Request Song"
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700",
                    children: [u.jsxs("h2", {
                        className: "text-2xl font-bold mb-6 flex items-center gap-2",
                        children: [u.jsx(Yr, {
                            size: 24
                        }), u.jsx("span", {
                            children: "Coming Up Next"
                        })]
                    }), t.length > 0 ? u.jsx("div", {
                        className: "space-y-6",
                        children: t.slice(0, 3).map(T => u.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [u.jsx("img", {
                                src: T.user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${T.user.username}`,
                                alt: T.user.username,
                                className: "w-12 h-12 rounded-full"
                            }), u.jsxs("div", {
                                children: [u.jsx("h3", {
                                    className: "font-medium",
                                    children: T.title
                                }), u.jsxs("p", {
                                    className: "text-gray-400 text-sm",
                                    children: ["with ", T.user.username]
                                }), u.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-500 mt-1",
                                    children: [u.jsx(Mi, {
                                        size: 14
                                    }), u.jsxs("span", {
                                        children: [Ec(new Date(T.start_time), "HH:mm"), " - ", Ec(new Date(T.end_time), "HH:mm")]
                                    })]
                                })]
                            })]
                        }, T.id))
                    }) : u.jsxs("div", {
                        className: "text-center py-8 text-gray-400",
                        children: [u.jsx(pt, {
                            size: 48,
                            className: "mx-auto mb-4 opacity-50"
                        }), u.jsx("p", {
                            children: "No upcoming shows scheduled"
                        })]
                    }), u.jsx(st, {
                        to: "/schedule",
                        className: "inline-block w-full text-center mt-6 text-indigo-400 hover:text-indigo-300 transition-colors",
                        children: "View Full Schedule"
                    })]
                })]
            })
        })]
    })
}
const xx = {
    director: "from-red-500 to-red-600",
    co_director: "from-orange-500 to-orange-600",
    developer: "from-blue-500 to-blue-600",
    manager: "from-green-500 to-green-600",
    presenter: "from-purple-500 to-purple-600",
    listener: "from-gray-500 to-gray-600"
}
  , _x = {
    director: "Director",
    co_director: "Co-Director",
    developer: "Developer",
    manager: "Radio Manager",
    presenter: "Radio Presenter",
    listener: "Listener"
}
  , kx = {
    director: x0,
    co_director: u0,
    developer: Qr,
    manager: pt,
    presenter: Jr,
    listener: Qr
};
function Sx() {
    const [e,t] = k.useState([])
      , [r,n] = k.useState(!0)
      , [s,i] = k.useState(null);
    return k.useEffect( () => {
        async function o() {
            try {
                const {data: a, error: l} = await G.from("users").select("*").not("role", "eq", "listener").order("role");
                if (l)
                    throw l;
                t(a || [])
            } catch (a) {
                i(a instanceof Error ? a.message : "An error occurred")
            } finally {
                n(!1)
            }
        }
        o()
    }
    , []),
    r ? u.jsx("div", {
        className: "flex items-center justify-center min-h-[400px]",
        children: u.jsx("div", {
            className: "animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"
        })
    }) : s ? u.jsx("div", {
        className: "bg-red-500/10 border border-red-500 text-red-500 p-4 rounded",
        children: s
    }) : u.jsxs("div", {
        className: "space-y-12",
        children: [u.jsxs("div", {
            className: "relative py-24 overflow-hidden",
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"
            }), u.jsxs("div", {
                className: "relative max-w-7xl mx-auto px-4 text-center",
                children: [u.jsx("h1", {
                    className: "text-5xl font-bold mb-6",
                    children: "Meet Our Team"
                }), u.jsx("p", {
                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                    children: "The passionate individuals who bring you the best music and entertainment around the clock. Each member contributes their unique talent and expertise to make Peak Radio extraordinary."
                })]
            })]
        }), u.jsx("div", {
            className: "max-w-7xl mx-auto px-4",
            children: u.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: e.map(o => {
                    const a = kx[o.role] || Qr
                      , l = xx[o.role] || "from-gray-500 to-gray-600"
                      , c = _x[o.role] || "Team Member";
                    return u.jsxs("div", {
                        className: "group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        }), u.jsxs("div", {
                            className: "relative aspect-w-16 aspect-h-9",
                            children: [u.jsx("img", {
                                src: o.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${o.username}`,
                                alt: o.username,
                                className: "object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            }), u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"
                            })]
                        }), u.jsxs("div", {
                            className: "relative p-6",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [u.jsx("h3", {
                                    className: "text-2xl font-bold",
                                    children: o.username
                                }), u.jsxs("div", {
                                    className: `flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gradient-to-r ${l}`,
                                    children: [u.jsx(a, {
                                        size: 16
                                    }), u.jsx("span", {
                                        children: c
                                    })]
                                })]
                            }), o.bio && u.jsx("p", {
                                className: "text-gray-400 mb-4",
                                children: o.bio
                            }), u.jsxs("div", {
                                className: "grid grid-cols-2 gap-4 text-sm",
                                children: [u.jsxs("div", {
                                    className: "bg-gray-900/50 rounded-xl p-3",
                                    children: [u.jsx("div", {
                                        className: "text-gray-400 mb-1",
                                        children: "Shows Hosted"
                                    }), u.jsx("div", {
                                        className: "text-xl font-bold",
                                        children: o.total_shows_hosted || 0
                                    })]
                                }), u.jsxs("div", {
                                    className: "bg-gray-900/50 rounded-xl p-3",
                                    children: [u.jsx("div", {
                                        className: "text-gray-400 mb-1",
                                        children: "Hours On Air"
                                    }), u.jsx("div", {
                                        className: "text-xl font-bold",
                                        children: Math.round((o.total_airtime_minutes || 0) / 60)
                                    })]
                                })]
                            }), o.social_links && Object.keys(o.social_links).length > 0 && u.jsxs("div", {
                                className: "mt-4 flex gap-3",
                                children: [o.social_links.twitter && u.jsx("a", {
                                    href: o.social_links.twitter,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: "Twitter"
                                }), o.social_links.instagram && u.jsx("a", {
                                    href: o.social_links.instagram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: "Instagram"
                                }), o.social_links.soundcloud && u.jsx("a", {
                                    href: o.social_links.soundcloud,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: "SoundCloud"
                                })]
                            })]
                        })]
                    }, o.id)
                }
                )
            })
        })]
    })
}
function bx() {
    const [e,t] = k.useState([])
      , [r,n] = k.useState(!0)
      , [s,i] = k.useState(null)
      , [o,a] = k.useState(new Date().toISOString().split("T")[0])
      , {user: l} = Wt();
    k.useEffect( () => {
        c()
    }
    , [o]);
    async function c() {
        try {
            const f = new Date(o);
            f.setHours(0, 0, 0, 0);
            const w = new Date(o);
            w.setHours(23, 59, 59, 999);
            const {data: p, error: y} = await G.from("shows").select("*, user:users(username, avatar_url)").gte("end_time", f.toISOString()).lte("start_time", w.toISOString()).order("start_time");
            if (y)
                throw y;
            t(p || [])
        } catch (f) {
            i(f instanceof Error ? f.message : "An error occurred")
        } finally {
            n(!1)
        }
    }
    const d = () => Array.from({
        length: 24
    }, (p, y) => y).map(p => {
        const y = new Date(o);
        y.setHours(p, 0, 0, 0);
        const b = e.filter(m => {
            const g = new Date(m.start_time)
              , v = new Date(m.end_time);
            return g.getHours() <= p && v.getHours() > p
        }
        );
        return {
            hour: p,
            time: y,
            shows: b
        }
    }
    )
      , h = () => {
        const f = []
          , w = new Date;
        for (let p = 0; p < 7; p++) {
            const y = new Date(w);
            y.setDate(w.getDate() + p),
            f.push(y)
        }
        return f
    }
    ;
    return r ? u.jsx("div", {
        className: "min-h-[400px] flex items-center justify-center",
        children: u.jsxs("div", {
            className: "flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700",
            children: [u.jsx("div", {
                className: "animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"
            }), u.jsx("span", {
                className: "text-gray-400",
                children: "Loading schedule..."
            })]
        })
    }) : s ? u.jsx("div", {
        className: "min-h-[400px] flex items-center justify-center",
        children: u.jsxs("div", {
            className: "flex items-center gap-4 bg-red-500/10 border border-red-500 text-red-500 p-6 rounded-xl max-w-lg mx-auto",
            children: [u.jsx(Rl, {
                size: 24
            }), u.jsx("p", {
                children: s
            })]
        })
    }) : u.jsxs("div", {
        className: "space-y-8",
        children: [u.jsxs("div", {
            className: "relative py-24 overflow-hidden",
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"
            }), u.jsxs("div", {
                className: "relative max-w-7xl mx-auto px-4 text-center",
                children: [u.jsx("h1", {
                    className: "text-5xl font-bold mb-6",
                    children: "Radio Schedule"
                }), u.jsx("p", {
                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                    children: "Discover what's coming up on Peak Radio. From chart-topping hits to underground gems, our presenters bring you the best in music 24/7."
                })]
            })]
        }), u.jsx("div", {
            className: "max-w-7xl mx-auto px-4",
            children: u.jsx("div", {
                className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700",
                children: u.jsx("div", {
                    className: "grid grid-cols-7 gap-2",
                    children: h().map( (f, w) => u.jsxs("button", {
                        onClick: () => a(f.toISOString().split("T")[0]),
                        className: `p-4 rounded-xl border transition-all ${o === f.toISOString().split("T")[0] ? "bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/20" : "border-gray-700 hover:border-indigo-500/50 hover:bg-gray-700/50"}`,
                        children: [u.jsx("div", {
                            className: "text-sm text-gray-400 mb-1",
                            children: f.toLocaleDateString(void 0, {
                                weekday: "short"
                            })
                        }), u.jsx("div", {
                            className: "text-2xl font-bold",
                            children: f.getDate()
                        }), u.jsx("div", {
                            className: "text-sm text-gray-400",
                            children: f.toLocaleDateString(void 0, {
                                month: "short"
                            })
                        })]
                    }, f.toISOString()))
                })
            })
        }), u.jsxs("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [u.jsx("div", {
                className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 divide-y divide-gray-700",
                children: d().map( ({hour: f, time: w, shows: p}) => u.jsxs("div", {
                    className: `flex items-stretch ${p.length > 0 ? "bg-gray-700/20" : ""}`,
                    children: [u.jsx("div", {
                        className: "w-32 flex-shrink-0 p-4 border-r border-gray-700",
                        children: u.jsx("div", {
                            className: "text-xl font-bold",
                            children: w.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })
                        })
                    }), u.jsx("div", {
                        className: "flex-grow p-4",
                        children: p.length > 0 ? u.jsx("div", {
                            className: "space-y-4",
                            children: p.map(y => u.jsxs("div", {
                                className: "flex items-center gap-4 bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-indigo-500/50 transition-colors",
                                children: [u.jsxs("div", {
                                    className: "relative",
                                    children: [u.jsx("img", {
                                        src: y.user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${y.user.username}`,
                                        alt: y.user.username,
                                        className: "w-16 h-16 rounded-lg"
                                    }), u.jsx("div", {
                                        className: "absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center",
                                        children: u.jsx(pt, {
                                            size: 14,
                                            className: "text-white"
                                        })
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex-grow",
                                    children: [u.jsx("h3", {
                                        className: "text-lg font-semibold",
                                        children: y.title
                                    }), u.jsx("p", {
                                        className: "text-gray-400",
                                        children: y.description
                                    }), u.jsxs("div", {
                                        className: "flex items-center gap-4 mt-2 text-sm text-gray-500",
                                        children: [u.jsxs("div", {
                                            className: "flex items-center gap-1",
                                            children: [u.jsx(Qr, {
                                                size: 14
                                            }), u.jsx("span", {
                                                children: y.user.username
                                            })]
                                        }), u.jsxs("div", {
                                            className: "flex items-center gap-1",
                                            children: [u.jsx(Mi, {
                                                size: 14
                                            }), u.jsxs("span", {
                                                children: [new Date(y.start_time).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                }), " - ", new Date(y.end_time).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), u.jsx(Xh, {
                                    size: 20,
                                    className: "text-gray-600"
                                })]
                            }, y.id))
                        }) : u.jsx("div", {
                            className: "h-full flex items-center justify-center text-gray-500",
                            children: "No shows scheduled"
                        })
                    })]
                }, f))
            }), l && u.jsxs("div", {
                className: "mt-8 text-center",
                children: [u.jsx("p", {
                    className: "text-gray-400 mb-4",
                    children: "Want to host your own show? Join our team of presenters!"
                }), u.jsxs("a", {
                    href: "/panel",
                    className: "inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-colors",
                    children: [u.jsx(pt, {
                        size: 20
                    }), u.jsx("span", {
                        children: "Schedule a Show"
                    })]
                })]
            })]
        })]
    })
}
function jx() {
    const [e,t] = k.useState("")
      , [r,n] = k.useState("")
      , [s,i] = k.useState(null)
      , [o,a] = k.useState(!1)
      , l = as()
      , {setUser: c} = Wt()
      , d = async h => {
        h.preventDefault(),
        a(!0),
        i(null);
        try {
            const {data: f, error: w} = await G.auth.signInWithPassword({
                email: e,
                password: r
            });
            if (w)
                throw w;
            if (f.user) {
                const {data: p, error: y} = await G.from("users").select("*").eq("id", f.user.id).single();
                if (y)
                    throw y;
                c(p),
                l("/")
            }
        } catch (f) {
            i(f instanceof Error ? f.message : "An error occurred")
        } finally {
            a(!1)
        }
    }
    ;
    return u.jsx("div", {
        className: "max-w-md mx-auto",
        children: u.jsxs("div", {
            className: "bg-gray-800 p-8 rounded-lg shadow-lg",
            children: [u.jsx("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Login to Peak Radio"
            }), s && u.jsx("div", {
                className: "bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4",
                children: s
            }), u.jsxs("form", {
                onSubmit: d,
                className: "space-y-4",
                children: [u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium mb-1",
                        children: "Email"
                    }), u.jsx("input", {
                        id: "email",
                        type: "email",
                        value: e,
                        onChange: h => t(h.target.value),
                        className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium mb-1",
                        children: "Password"
                    }), u.jsx("input", {
                        id: "password",
                        type: "password",
                        value: r,
                        onChange: h => n(h.target.value),
                        className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0
                    })]
                }), u.jsx("button", {
                    type: "submit",
                    disabled: o,
                    className: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: o ? "Logging in..." : "Login"
                })]
            }), u.jsx("div", {
                className: "mt-6 text-center",
                children: u.jsxs("p", {
                    className: "text-gray-400",
                    children: ["Don't have an account?", " ", u.jsx(st, {
                        to: "/register",
                        className: "text-indigo-400 hover:text-indigo-300",
                        children: "Sign up"
                    })]
                })
            })]
        })
    })
}
function Ex() {
    const [e,t] = k.useState("")
      , [r,n] = k.useState("")
      , [s,i] = k.useState("")
      , [o,a] = k.useState("")
      , [l,c] = k.useState(null)
      , [d,h] = k.useState(!1)
      , f = as()
      , w = async p => {
        p.preventDefault(),
        h(!0),
        c(null);
        try {
            const {error: y} = await G.auth.signUp({
                email: e,
                password: r,
                options: {
                    data: {
                        username: o || s
                    }
                }
            });
            if (y)
                throw y;
            f("/login")
        } catch (y) {
            c(y instanceof Error ? y.message : "An error occurred")
        } finally {
            h(!1)
        }
    }
    ;
    return u.jsx("div", {
        className: "max-w-md mx-auto",
        children: u.jsxs("div", {
            className: "bg-gray-800 p-8 rounded-lg shadow-lg",
            children: [u.jsx("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Register for Peak Radio"
            }), l && u.jsx("div", {
                className: "bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4",
                children: l
            }), u.jsxs("form", {
                onSubmit: w,
                className: "space-y-4",
                children: [u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "username",
                        className: "block text-sm font-medium mb-1",
                        children: "Username (for login)"
                    }), u.jsx("input", {
                        id: "username",
                        type: "text",
                        value: s,
                        onChange: p => i(p.target.value),
                        className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "displayName",
                        className: "block text-sm font-medium mb-1",
                        children: "Display Name (shown publicly)"
                    }), u.jsx("input", {
                        id: "displayName",
                        type: "text",
                        value: o,
                        onChange: p => a(p.target.value),
                        className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium mb-1",
                        children: "Email"
                    }), u.jsx("input", {
                        id: "email",
                        type: "email",
                        value: e,
                        onChange: p => t(p.target.value),
                        className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium mb-1",
                        children: "Password"
                    }), u.jsx("input", {
                        id: "password",
                        type: "password",
                        value: r,
                        onChange: p => n(p.target.value),
                        className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0
                    })]
                }), u.jsx("button", {
                    type: "submit",
                    disabled: d,
                    className: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: d ? "Creating account..." : "Register"
                })]
            })]
        })
    })
}
function Nx() {
    const {user: e, setUser: t} = Wt()
      , [r,n] = k.useState("profile")
      , [s,i] = k.useState(!1)
      , [o,a] = k.useState(null)
      , [l,c] = k.useState(!1)
      , [d,h] = k.useState([])
      , [f,w] = k.useState([])
      , [p,y] = k.useState({
        username: "",
        avatar_url: "",
        bio: "",
        favorite_genres: "",
        social_links: {
            twitter: "",
            instagram: "",
            soundcloud: ""
        }
    });
    k.useEffect( () => {
        e && (y({
            username: e.username || "",
            avatar_url: e.avatarUrl || "",
            bio: e.bio || "",
            favorite_genres: e.favorite_genres || "",
            social_links: e.social_links || {
                twitter: "",
                instagram: "",
                soundcloud: ""
            }
        }),
        b(),
        m(),
        g())
    }
    , [e]);
    async function b() {
        var x, S, N;
        if (e)
            try {
                const {data: _, error: E} = await G.from("users").select("*").eq("id", e.id).single();
                if (E)
                    throw E;
                y({
                    username: _.username || "",
                    avatar_url: _.avatar_url || "",
                    bio: _.bio || "",
                    favorite_genres: _.favorite_genres || "",
                    social_links: {
                        twitter: ((x = _.social_links) == null ? void 0 : x.twitter) || "",
                        instagram: ((S = _.social_links) == null ? void 0 : S.instagram) || "",
                        soundcloud: ((N = _.social_links) == null ? void 0 : N.soundcloud) || ""
                    }
                })
            } catch (_) {
                console.error("Error fetching user data:", _)
            }
    }
    async function m() {
        if (e)
            try {
                const {data: x, error: S} = await G.from("requests").select("*").eq("user_id", e.id).order("created_at", {
                    ascending: !1
                });
                if (S)
                    throw S;
                h(x || [])
            } catch (x) {
                console.error("Error fetching requests:", x)
            }
    }
    async function g() {
        if (e)
            try {
                const {data: x, error: S} = await G.from("shows").select("*").eq("user_id", e.id).order("start_time", {
                    ascending: !1
                });
                if (S)
                    throw S;
                w(x || [])
            } catch (x) {
                console.error("Error fetching shows:", x)
            }
    }
    const v = async x => {
        if (x.preventDefault(),
        !!e) {
            i(!0),
            a(null),
            c(!1);
            try {
                const {error: S} = await G.from("users").update({
                    username: p.username,
                    avatar_url: p.avatar_url,
                    bio: p.bio,
                    favorite_genres: p.favorite_genres,
                    social_links: p.social_links
                }).eq("id", e.id);
                if (S)
                    throw S;
                t({
                    ...e,
                    username: p.username,
                    avatarUrl: p.avatar_url,
                    bio: p.bio,
                    favorite_genres: p.favorite_genres,
                    social_links: p.social_links
                }),
                c(!0)
            } catch (S) {
                a(S instanceof Error ? S.message : "An error occurred")
            } finally {
                i(!1)
            }
        }
    }
    ;
    return e ? u.jsx("div", {
        className: "max-w-6xl mx-auto",
        children: u.jsxs("div", {
            className: "bg-gray-800 rounded-lg overflow-hidden",
            children: [u.jsx("div", {
                className: "relative h-48 bg-gradient-to-r from-indigo-600 to-purple-600",
                children: u.jsx("div", {
                    className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50",
                    children: u.jsxs("div", {
                        className: "flex items-end gap-6",
                        children: [u.jsx("div", {
                            className: "relative",
                            children: u.jsx("img", {
                                src: p.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${p.username}`,
                                alt: p.username,
                                className: "w-24 h-24 rounded-full border-4 border-gray-800"
                            })
                        }), u.jsxs("div", {
                            className: "flex-grow pb-2",
                            children: [u.jsx("h1", {
                                className: "text-3xl font-bold",
                                children: p.username
                            }), u.jsx("p", {
                                className: "text-gray-300",
                                children: e.role.replace("_", " ").charAt(0).toUpperCase() + e.role.slice(1)
                            })]
                        })]
                    })
                })
            }), u.jsx("div", {
                className: "border-b border-gray-700",
                children: u.jsxs("nav", {
                    className: "flex",
                    children: [u.jsxs("button", {
                        onClick: () => n("profile"),
                        className: `px-6 py-4 flex items-center gap-2 border-b-2 font-medium ${r === "profile" ? "border-indigo-500 text-indigo-500" : "border-transparent text-gray-400 hover:text-white"}`,
                        children: [u.jsx(w0, {
                            size: 18
                        }), "Profile Settings"]
                    }), u.jsxs("button", {
                        onClick: () => n("requests"),
                        className: `px-6 py-4 flex items-center gap-2 border-b-2 font-medium ${r === "requests" ? "border-indigo-500 text-indigo-500" : "border-transparent text-gray-400 hover:text-white"}`,
                        children: [u.jsx(Jr, {
                            size: 18
                        }), "Song Requests"]
                    }), u.jsxs("button", {
                        onClick: () => n("shows"),
                        className: `px-6 py-4 flex items-center gap-2 border-b-2 font-medium ${r === "shows" ? "border-indigo-500 text-indigo-500" : "border-transparent text-gray-400 hover:text-white"}`,
                        children: [u.jsx(pt, {
                            size: 18
                        }), "My Shows"]
                    })]
                })
            }), u.jsxs("div", {
                className: "p-6",
                children: [r === "profile" && u.jsxs("form", {
                    onSubmit: v,
                    className: "space-y-6 max-w-2xl",
                    children: [o && u.jsx("div", {
                        className: "bg-red-500/10 border border-red-500 text-red-500 p-3 rounded",
                        children: o
                    }), l && u.jsx("div", {
                        className: "bg-green-500/10 border border-green-500 text-green-500 p-3 rounded",
                        children: "Profile updated successfully!"
                    }), u.jsxs("div", {
                        children: [u.jsx("label", {
                            htmlFor: "username",
                            className: "block text-sm font-medium mb-1",
                            children: "Username"
                        }), u.jsx("input", {
                            id: "username",
                            type: "text",
                            value: p.username,
                            onChange: x => y({
                                ...p,
                                username: x.target.value
                            }),
                            className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                            required: !0
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsx("label", {
                            htmlFor: "avatar_url",
                            className: "block text-sm font-medium mb-1",
                            children: "Avatar URL"
                        }), u.jsx("input", {
                            id: "avatar_url",
                            type: "url",
                            value: p.avatar_url,
                            onChange: x => y({
                                ...p,
                                avatar_url: x.target.value
                            }),
                            className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsx("label", {
                            htmlFor: "bio",
                            className: "block text-sm font-medium mb-1",
                            children: "Bio"
                        }), u.jsx("textarea", {
                            id: "bio",
                            value: p.bio,
                            onChange: x => y({
                                ...p,
                                bio: x.target.value
                            }),
                            className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                            rows: 4
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsx("label", {
                            htmlFor: "favorite_genres",
                            className: "block text-sm font-medium mb-1",
                            children: "Favorite Music Genres"
                        }), u.jsx("input", {
                            id: "favorite_genres",
                            type: "text",
                            value: p.favorite_genres,
                            onChange: x => y({
                                ...p,
                                favorite_genres: x.target.value
                            }),
                            placeholder: "e.g., Rock, Jazz, Electronic",
                            className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                        })]
                    }), u.jsxs("div", {
                        className: "space-y-4",
                        children: [u.jsx("h3", {
                            className: "text-lg font-medium",
                            children: "Social Links"
                        }), u.jsxs("div", {
                            children: [u.jsx("label", {
                                htmlFor: "twitter",
                                className: "block text-sm font-medium mb-1",
                                children: "Twitter"
                            }), u.jsx("input", {
                                id: "twitter",
                                type: "url",
                                value: p.social_links.twitter,
                                onChange: x => y({
                                    ...p,
                                    social_links: {
                                        ...p.social_links,
                                        twitter: x.target.value
                                    }
                                }),
                                placeholder: "https://twitter.com/username",
                                className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("label", {
                                htmlFor: "instagram",
                                className: "block text-sm font-medium mb-1",
                                children: "Instagram"
                            }), u.jsx("input", {
                                id: "instagram",
                                type: "url",
                                value: p.social_links.instagram,
                                onChange: x => y({
                                    ...p,
                                    social_links: {
                                        ...p.social_links,
                                        instagram: x.target.value
                                    }
                                }),
                                placeholder: "https://instagram.com/username",
                                className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("label", {
                                htmlFor: "soundcloud",
                                className: "block text-sm font-medium mb-1",
                                children: "SoundCloud"
                            }), u.jsx("input", {
                                id: "soundcloud",
                                type: "url",
                                value: p.social_links.soundcloud,
                                onChange: x => y({
                                    ...p,
                                    social_links: {
                                        ...p.social_links,
                                        soundcloud: x.target.value
                                    }
                                }),
                                placeholder: "https://soundcloud.com/username",
                                className: "w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                            })]
                        })]
                    }), u.jsx("button", {
                        type: "submit",
                        disabled: s,
                        className: "w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: s ? "Saving..." : "Save Changes"
                    })]
                }), r === "requests" && u.jsxs("div", {
                    className: "space-y-6",
                    children: [u.jsxs("h2", {
                        className: "text-xl font-bold flex items-center gap-2",
                        children: [u.jsx(f0, {
                            size: 24
                        }), "Your Song Requests"]
                    }), d.length === 0 ? u.jsxs("div", {
                        className: "text-center py-8 text-gray-400",
                        children: [u.jsx(Jr, {
                            size: 48,
                            className: "mx-auto mb-4 opacity-50"
                        }), u.jsx("p", {
                            children: "You haven't made any song requests yet."
                        })]
                    }) : u.jsx("div", {
                        className: "space-y-4",
                        children: d.map(x => u.jsxs("div", {
                            className: "bg-gray-700/50 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between",
                            children: [u.jsxs("div", {
                                children: [u.jsx("h3", {
                                    className: "font-medium",
                                    children: x.song_title
                                }), u.jsx("p", {
                                    className: "text-gray-400",
                                    children: x.artist
                                }), x.message && u.jsx("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: x.message
                                }), u.jsxs("p", {
                                    className: "text-xs text-gray-500 mt-2",
                                    children: ["Requested on", " ", new Date(x.created_at).toLocaleDateString(void 0, {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })]
                                })]
                            }), u.jsx("div", {
                                className: "mt-4 md:mt-0",
                                children: u.jsx("span", {
                                    className: `px-3 py-1 rounded-full text-sm ${x.status === "approved" ? "bg-green-500/10 text-green-500" : x.status === "rejected" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"}`,
                                    children: x.status.charAt(0).toUpperCase() + x.status.slice(1)
                                })
                            })]
                        }, x.id))
                    })]
                }), r === "shows" && u.jsxs("div", {
                    className: "space-y-6",
                    children: [u.jsxs("h2", {
                        className: "text-xl font-bold flex items-center gap-2",
                        children: [u.jsx(Yr, {
                            size: 24
                        }), "Your Shows"]
                    }), f.length === 0 ? u.jsxs("div", {
                        className: "text-center py-8 text-gray-400",
                        children: [u.jsx(pt, {
                            size: 48,
                            className: "mx-auto mb-4 opacity-50"
                        }), u.jsx("p", {
                            children: "You haven't hosted any shows yet."
                        })]
                    }) : u.jsx("div", {
                        className: "space-y-4",
                        children: f.map(x => u.jsxs("div", {
                            className: "bg-gray-700/50 rounded-lg p-4",
                            children: [u.jsx("h3", {
                                className: "font-medium",
                                children: x.title
                            }), u.jsxs("div", {
                                className: "mt-2 flex items-center gap-4 text-sm text-gray-400",
                                children: [u.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [u.jsx(Yr, {
                                        size: 16
                                    }), u.jsx("span", {
                                        children: new Date(x.start_time).toLocaleDateString(void 0, {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [u.jsx(Mi, {
                                        size: 16
                                    }), u.jsxs("span", {
                                        children: [new Date(x.start_time).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        }), " - ", new Date(x.end_time).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })]
                                    })]
                                })]
                            })]
                        }, x.id))
                    })]
                })]
            })]
        })
    }) : u.jsx("div", {
        className: "text-center",
        children: u.jsx("p", {
            children: "Please log in to access your account."
        })
    })
}
const Px = [{
    value: "presenter",
    label: "Radio Presenter"
}, {
    value: "manager",
    label: "Radio Manager"
}, {
    value: "developer",
    label: "Developer"
}, {
    value: "co_director",
    label: "Co-Director"
}, {
    value: "director",
    label: "Director"
}];
function Cx() {
    const {user: e} = Wt()
      , t = as()
      , [r,n] = k.useState(!1)
      , [s,i] = k.useState(null)
      , [o,a] = k.useState(!1)
      , [l,c] = k.useState(null)
      , [d,h] = k.useState({
        role: "presenter",
        experience: "",
        motivation: ""
    });
    k.useEffect( () => {
        if (!e) {
            t("/login");
            return
        }
        f()
    }
    , [e, t]);
    async function f() {
        try {
            const {data: p} = await G.from("applications").select("*").eq("user_id", e == null ? void 0 : e.id).eq("status", "pending").single();
            p && c(p)
        } catch (p) {
            console.error("Error checking existing application:", p)
        }
    }
    const w = async p => {
        if (p.preventDefault(),
        !!e) {
            n(!0),
            i(null),
            a(!1);
            try {
                const {error: y} = await G.from("applications").insert({
                    user_id: e.id,
                    role: d.role,
                    experience: d.experience,
                    motivation: d.motivation
                });
                if (y)
                    throw y;
                a(!0),
                h({
                    role: "presenter",
                    experience: "",
                    motivation: ""
                }),
                f()
            } catch (y) {
                i(y instanceof Error ? y.message : "An error occurred")
            } finally {
                n(!1)
            }
        }
    }
    ;
    return l ? u.jsx("div", {
        className: "max-w-4xl mx-auto",
        children: u.jsxs("div", {
            className: "bg-gray-800 rounded-xl p-8",
            children: [u.jsxs("div", {
                className: "text-center mb-8",
                children: [u.jsx("div", {
                    className: "w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: u.jsx(pt, {
                        size: 32,
                        className: "text-indigo-500"
                    })
                }), u.jsx("h1", {
                    className: "text-2xl font-bold mb-2",
                    children: "Application Pending"
                }), u.jsx("p", {
                    className: "text-gray-400",
                    children: "Your application is currently being reviewed by our team. We'll notify you once a decision has been made."
                })]
            }), u.jsxs("div", {
                className: "bg-gray-700/50 rounded-lg p-6",
                children: [u.jsxs("div", {
                    className: "mb-4",
                    children: [u.jsx("h3", {
                        className: "text-lg font-medium mb-2",
                        children: "Application Details"
                    }), u.jsxs("p", {
                        className: "text-gray-400",
                        children: ["Submitted on ", new Date(l.created_at).toLocaleDateString()]
                    })]
                }), u.jsxs("div", {
                    className: "space-y-4",
                    children: [u.jsxs("div", {
                        children: [u.jsx("label", {
                            className: "block text-sm font-medium text-gray-300",
                            children: "Role"
                        }), u.jsx("p", {
                            className: "mt-1",
                            children: l.role.replace("_", " ").charAt(0).toUpperCase() + l.role.slice(1)
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsx("label", {
                            className: "block text-sm font-medium text-gray-300",
                            children: "Experience"
                        }), u.jsx("p", {
                            className: "mt-1 text-gray-400",
                            children: l.experience
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsx("label", {
                            className: "block text-sm font-medium text-gray-300",
                            children: "Motivation"
                        }), u.jsx("p", {
                            className: "mt-1 text-gray-400",
                            children: l.motivation
                        })]
                    })]
                })]
            })]
        })
    }) : u.jsx("div", {
        className: "max-w-4xl mx-auto",
        children: u.jsxs("div", {
            className: "bg-gray-800 rounded-xl p-8",
            children: [u.jsxs("div", {
                className: "text-center mb-8",
                children: [u.jsx("div", {
                    className: "w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: u.jsx(pt, {
                        size: 32,
                        className: "text-indigo-500"
                    })
                }), u.jsx("h1", {
                    className: "text-2xl font-bold mb-2",
                    children: "Join Our Team"
                }), u.jsx("p", {
                    className: "text-gray-400",
                    children: "We're always looking for passionate individuals to join Peak Radio. Tell us about yourself and how you'd like to contribute."
                })]
            }), s && u.jsxs("div", {
                className: "mb-6 bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg flex items-center gap-2",
                children: [u.jsx(Rl, {
                    size: 20
                }), u.jsx("p", {
                    children: s
                })]
            }), o && u.jsx("div", {
                className: "mb-6 bg-green-500/10 border border-green-500 text-green-500 p-4 rounded-lg",
                children: "Your application has been submitted successfully! We'll review it and get back to you soon."
            }), u.jsxs("form", {
                onSubmit: w,
                className: "space-y-6",
                children: [u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "role",
                        className: "block text-sm font-medium mb-2",
                        children: "What role are you interested in?"
                    }), u.jsx("select", {
                        id: "role",
                        value: d.role,
                        onChange: p => h({
                            ...d,
                            role: p.target.value
                        }),
                        className: "w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        required: !0,
                        children: Px.map(p => u.jsx("option", {
                            value: p.value,
                            children: p.label
                        }, p.value))
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "experience",
                        className: "block text-sm font-medium mb-2",
                        children: "Tell us about your relevant experience"
                    }), u.jsx("textarea", {
                        id: "experience",
                        value: d.experience,
                        onChange: p => h({
                            ...d,
                            experience: p.target.value
                        }),
                        className: "w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        rows: 4,
                        placeholder: "Share your experience in radio, music, technology, or any relevant field...",
                        required: !0
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("label", {
                        htmlFor: "motivation",
                        className: "block text-sm font-medium mb-2",
                        children: "Why do you want to join Peak Radio?"
                    }), u.jsx("textarea", {
                        id: "motivation",
                        value: d.motivation,
                        onChange: p => h({
                            ...d,
                            motivation: p.target.value
                        }),
                        className: "w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                        rows: 4,
                        placeholder: "Tell us what motivates you to join our team...",
                        required: !0
                    })]
                }), u.jsxs("button", {
                    type: "submit",
                    disabled: r,
                    className: "w-full bg-indigo-500 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2",
                    children: [u.jsx(y0, {
                        size: 20
                    }), r ? "Submitting..." : "Submit Application"]
                })]
            })]
        })
    })
}
function Tx() {
    const {user: e} = Wt()
      , t = as()
      , [r,n] = k.useState([])
      , [s,i] = k.useState([])
      , [o,a] = k.useState([])
      , [l,c] = k.useState(!1)
      , [d,h] = k.useState(null)
      , [f,w] = k.useState(!1)
      , [p,y] = k.useState({
        title: "",
        description: "",
        start_time: "",
        end_time: ""
    });
    k.useEffect( () => {
        if (!e) {
            t("/login");
            return
        }
        if (e.role === "listener") {
            t("/account");
            return
        }
        b()
    }
    , [e, t]);
    async function b() {
        await Promise.all([m(), g(), (e == null ? void 0 : e.role) !== "presenter" && v()])
    }
    async function m() {
        try {
            const _ = G.from("shows").select(`
          *,
          user:users (username, avatar_url)
        `).order("start_time", {
                ascending: !0
            });
            (e == null ? void 0 : e.role) === "presenter" && _.eq("user_id", e.id);
            const {data: E, error: D} = await _;
            if (D)
                throw D;
            n(E || [])
        } catch (_) {
            console.error("Error fetching shows:", _)
        }
    }
    async function g() {
        try {
            const {data: _, error: E} = await G.from("requests").select(`
          *,
          user:users(username)
        `).order("created_at", {
                ascending: !1
            });
            if (E)
                throw E;
            i(_ || [])
        } catch (_) {
            console.error("Error fetching requests:", _)
        }
    }
    async function v() {
        try {
            const {data: _, error: E} = await G.from("users").select("id, username, total_shows_hosted, total_airtime_minutes, role").not("role", "eq", "listener").order("total_shows_hosted", {
                ascending: !1
            });
            if (E)
                throw E;
            a(_ || [])
        } catch (_) {
            console.error("Error fetching user stats:", _)
        }
    }
    const x = async _ => {
        if (_.preventDefault(),
        !!e) {
            c(!0),
            h(null),
            w(!1);
            try {
                const {error: E} = await G.from("shows").insert({
                    title: p.title,
                    description: p.description,
                    start_time: p.start_time,
                    end_time: p.end_time,
                    user_id: e.id
                });
                if (E)
                    throw E;
                w(!0),
                y({
                    title: "",
                    description: "",
                    start_time: "",
                    end_time: ""
                }),
                m()
            } catch (E) {
                h(E instanceof Error ? E.message : "An error occurred")
            } finally {
                c(!1)
            }
        }
    }
      , S = async (_, E) => {
        if (e) {
            if (e.role === "presenter" && E !== e.id) {
                h("You can only delete your own shows");
                return
            }
            try {
                const {error: D} = await G.from("shows").delete().eq("id", _);
                if (D)
                    throw D;
                m()
            } catch (D) {
                console.error("Error deleting show:", D),
                h("Failed to delete show")
            }
        }
    }
      , N = async (_, E) => {
        try {
            const {error: D} = await G.from("requests").update({
                status: E
            }).eq("id", _);
            if (D)
                throw D;
            g()
        } catch (D) {
            console.error("Error updating request:", D),
            h("Failed to update request")
        }
    }
    ;
    return !e || e.role === "listener" ? null : u.jsxs("div", {
        className: "space-y-8",
        children: [u.jsx("div", {
            className: "bg-gray-800 border-b border-gray-700",
            children: u.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [u.jsx("h1", {
                    className: "text-2xl font-bold",
                    children: "Radio Panel"
                }), u.jsx("p", {
                    className: "text-gray-400",
                    children: "Manage shows and requests"
                })]
            })
        }), u.jsx("div", {
            className: "max-w-7xl mx-auto px-4",
            children: u.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [u.jsxs("div", {
                    className: "space-y-6",
                    children: [u.jsx("div", {
                        className: "flex items-center justify-between",
                        children: u.jsxs("h2", {
                            className: "text-xl font-semibold flex items-center gap-2",
                            children: [u.jsx(Yr, {
                                size: 24
                            }), "Radio Shows"]
                        })
                    }), u.jsxs("div", {
                        className: "bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700",
                        children: [u.jsx("h3", {
                            className: "text-lg font-medium mb-4",
                            children: "Schedule a Show"
                        }), d && u.jsxs("div", {
                            className: "mb-4 bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg flex items-center gap-2",
                            children: [u.jsx(Rl, {
                                size: 18
                            }), u.jsx("p", {
                                children: d
                            })]
                        }), f && u.jsx("div", {
                            className: "mb-4 bg-green-500/10 border border-green-500 text-green-500 p-3 rounded-lg",
                            children: "Show scheduled successfully!"
                        }), u.jsxs("form", {
                            onSubmit: x,
                            className: "space-y-4",
                            children: [u.jsxs("div", {
                                children: [u.jsx("label", {
                                    htmlFor: "title",
                                    className: "block text-sm font-medium mb-1",
                                    children: "Show Title"
                                }), u.jsx("input", {
                                    id: "title",
                                    type: "text",
                                    value: p.title,
                                    onChange: _ => y({
                                        ...p,
                                        title: _.target.value
                                    }),
                                    className: "w-full px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                    required: !0
                                })]
                            }), u.jsxs("div", {
                                children: [u.jsx("label", {
                                    htmlFor: "description",
                                    className: "block text-sm font-medium mb-1",
                                    children: "Description"
                                }), u.jsx("textarea", {
                                    id: "description",
                                    value: p.description,
                                    onChange: _ => y({
                                        ...p,
                                        description: _.target.value
                                    }),
                                    className: "w-full px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                    rows: 3
                                })]
                            }), u.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [u.jsxs("div", {
                                    children: [u.jsx("label", {
                                        htmlFor: "start_time",
                                        className: "block text-sm font-medium mb-1",
                                        children: "Start Time"
                                    }), u.jsx("input", {
                                        id: "start_time",
                                        type: "datetime-local",
                                        value: p.start_time,
                                        onChange: _ => y({
                                            ...p,
                                            start_time: _.target.value
                                        }),
                                        className: "w-full px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                        required: !0
                                    })]
                                }), u.jsxs("div", {
                                    children: [u.jsx("label", {
                                        htmlFor: "end_time",
                                        className: "block text-sm font-medium mb-1",
                                        children: "End Time"
                                    }), u.jsx("input", {
                                        id: "end_time",
                                        type: "datetime-local",
                                        value: p.end_time,
                                        onChange: _ => y({
                                            ...p,
                                            end_time: _.target.value
                                        }),
                                        className: "w-full px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
                                        required: !0
                                    })]
                                })]
                            }), u.jsxs("button", {
                                type: "submit",
                                disabled: l,
                                className: "w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2",
                                children: [u.jsx(v0, {
                                    size: 18
                                }), l ? "Scheduling..." : "Schedule Show"]
                            })]
                        })]
                    }), u.jsx("div", {
                        className: "space-y-4",
                        children: r.map(_ => u.jsxs("div", {
                            className: "bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [u.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [u.jsx("img", {
                                        src: _.user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${_.user.username}`,
                                        alt: _.user.username,
                                        className: "w-10 h-10 rounded-full"
                                    }), u.jsxs("div", {
                                        children: [u.jsx("h3", {
                                            className: "font-medium",
                                            children: _.title
                                        }), u.jsxs("p", {
                                            className: "text-sm text-gray-400",
                                            children: ["by ", _.user.username]
                                        })]
                                    })]
                                }), u.jsx("button", {
                                    onClick: () => S(_.id, _.user.id),
                                    className: "p-2 text-red-400 hover:text-red-300 transition-colors",
                                    children: u.jsx(_0, {
                                        size: 18
                                    })
                                })]
                            }), u.jsx("p", {
                                className: "text-gray-400 text-sm mb-4",
                                children: _.description
                            }), u.jsxs("div", {
                                className: "flex items-center gap-4 text-sm text-gray-500",
                                children: [u.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [u.jsx(Yr, {
                                        size: 14
                                    }), u.jsx("span", {
                                        children: new Date(_.start_time).toLocaleDateString()
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [u.jsx(Mi, {
                                        size: 14
                                    }), u.jsxs("span", {
                                        children: [new Date(_.start_time).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        }), " - ", new Date(_.end_time).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })]
                                    })]
                                })]
                            })]
                        }, _.id))
                    })]
                }), u.jsxs("div", {
                    className: "space-y-8",
                    children: [e.role !== "presenter" && u.jsxs("div", {
                        className: "space-y-6",
                        children: [u.jsxs("h2", {
                            className: "text-xl font-semibold flex items-center gap-2",
                            children: [u.jsx(Qr, {
                                size: 24
                            }), "Presenter Statistics"]
                        }), u.jsx("div", {
                            className: "bg-gray-800/50 backdrop-blur-lg rounded-xl divide-y divide-gray-700",
                            children: o.map(_ => u.jsxs("div", {
                                className: "p-4 flex items-center justify-between",
                                children: [u.jsxs("div", {
                                    children: [u.jsx("h3", {
                                        className: "font-medium",
                                        children: _.username
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: _.role
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex items-center gap-6",
                                    children: [u.jsxs("div", {
                                        className: "text-center",
                                        children: [u.jsx("p", {
                                            className: "text-2xl font-bold",
                                            children: _.total_shows_hosted
                                        }), u.jsx("p", {
                                            className: "text-xs text-gray-400",
                                            children: "Shows"
                                        })]
                                    }), u.jsxs("div", {
                                        className: "text-center",
                                        children: [u.jsx("p", {
                                            className: "text-2xl font-bold",
                                            children: Math.round(_.total_airtime_minutes / 60)
                                        }), u.jsx("p", {
                                            className: "text-xs text-gray-400",
                                            children: "Hours"
                                        })]
                                    })]
                                })]
                            }, _.id))
                        })]
                    }), u.jsxs("div", {
                        className: "space-y-6",
                        children: [u.jsxs("h2", {
                            className: "text-xl font-semibold flex items-center gap-2",
                            children: [u.jsx(Jr, {
                                size: 24
                            }), "Song Requests"]
                        }), u.jsxs("div", {
                            className: "space-y-4",
                            children: [s.map(_ => u.jsxs("div", {
                                className: "bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700",
                                children: [u.jsxs("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [u.jsx("h3", {
                                        className: "font-medium",
                                        children: _.song_title
                                    }), u.jsx("span", {
                                        className: `px-2 py-1 rounded-full text-xs ${_.status === "approved" ? "bg-green-500/10 text-green-500" : _.status === "rejected" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"}`,
                                        children: _.status.charAt(0).toUpperCase() + _.status.slice(1)
                                    })]
                                }), u.jsx("p", {
                                    className: "text-gray-400",
                                    children: _.artist
                                }), _.message && u.jsx("p", {
                                    className: "text-gray-500 text-sm mt-2",
                                    children: _.message
                                }), u.jsxs("div", {
                                    className: "flex items-center justify-between mt-4",
                                    children: [u.jsxs("div", {
                                        className: "text-sm text-gray-500",
                                        children: ["Requested by ", _.user.username, " on", " ", new Date(_.created_at).toLocaleDateString()]
                                    }), _.status === "pending" && u.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [u.jsx("button", {
                                            onClick: () => N(_.id, "approved"),
                                            className: "px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm hover:bg-green-500/20 transition-colors",
                                            children: "Approve"
                                        }), u.jsx("button", {
                                            onClick: () => N(_.id, "rejected"),
                                            className: "px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm hover:bg-red-500/20 transition-colors",
                                            children: "Reject"
                                        })]
                                    })]
                                })]
                            }, _.id)), s.length === 0 && u.jsxs("div", {
                                className: "text-center py-12 text-gray-400",
                                children: [u.jsx(Jr, {
                                    size: 48,
                                    className: "mx-auto mb-4 opacity-50"
                                }), u.jsx("p", {
                                    children: "No song requests yet"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
}
function Ox() {
    const {user: e} = Wt()
      , t = e && ["presenter", "manager", "developer", "co_director", "director"].includes(e.role);
    return u.jsx(n0, {
        children: u.jsxs("div", {
            className: "min-h-screen bg-gray-900 text-white flex flex-col",
            children: [u.jsx(ow, {}), u.jsx("main", {
                className: "container mx-auto px-4 py-8 flex-grow",
                children: u.jsxs(Gg, {
                    children: [u.jsx(rt, {
                        path: "/",
                        element: u.jsx(wx, {})
                    }), u.jsx(rt, {
                        path: "/team",
                        element: u.jsx(Sx, {})
                    }), u.jsx(rt, {
                        path: "/schedule",
                        element: u.jsx(bx, {})
                    }), u.jsx(rt, {
                        path: "/login",
                        element: u.jsx(jx, {})
                    }), u.jsx(rt, {
                        path: "/register",
                        element: u.jsx(Ex, {})
                    }), u.jsx(rt, {
                        path: "/apply",
                        element: u.jsx(Cx, {})
                    }), e && u.jsx(rt, {
                        path: "/account",
                        element: u.jsx(Nx, {})
                    }), t && u.jsx(rt, {
                        path: "/panel",
                        element: u.jsx(Tx, {})
                    })]
                })
            }), u.jsx("footer", {
                className: "bg-gray-800 border-t border-gray-700",
                children: u.jsxs("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [u.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: "About Peak Radio"
                            }), u.jsx("p", {
                                className: "text-gray-400",
                                children: "Your premier destination for the best music and entertainment. Broadcasting 24/7 with a diverse range of shows and talented presenters."
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: "Quick Links"
                            }), u.jsxs("ul", {
                                className: "space-y-2 text-gray-400",
                                children: [u.jsx("li", {
                                    children: u.jsx("a", {
                                        href: "/team",
                                        className: "hover:text-white transition-colors",
                                        children: "Our Team"
                                    })
                                }), u.jsx("li", {
                                    children: u.jsx("a", {
                                        href: "/schedule",
                                        className: "hover:text-white transition-colors",
                                        children: "Schedule"
                                    })
                                }), u.jsx("li", {
                                    children: u.jsx("a", {
                                        href: "/login",
                                        className: "hover:text-white transition-colors",
                                        children: "Login"
                                    })
                                })]
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: "Connect With Us"
                            }), u.jsxs("div", {
                                className: "flex space-x-4 text-gray-400",
                                children: [u.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Twitter"
                                }), u.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Facebook"
                                }), u.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Instagram"
                                })]
                            })]
                        })]
                    }), u.jsx("div", {
                        className: "mt-8 pt-8 border-t border-gray-700 text-center text-gray-400",
                        children: u.jsxs("p", {
                            children: ["© ", new Date().getFullYear(), " Peak Radio. All rights reserved."]
                        })
                    })]
                })
            })]
        })
    })
}
zh(document.getElementById("root")).render(u.jsx(k.StrictMode, {
    children: u.jsx(Ox, {})
}));
export {Nc as g};
