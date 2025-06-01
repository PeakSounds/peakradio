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
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
  , ki = {}
  , Cc = {
    exports: {}
}
  , D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns = Symbol.for("react.element")
  , Df = Symbol.for("react.portal")
  , If = Symbol.for("react.fragment")
  , Af = Symbol.for("react.strict_mode")
  , Mf = Symbol.for("react.profiler")
  , Uf = Symbol.for("react.provider")
  , zf = Symbol.for("react.context")
  , Ff = Symbol.for("react.forward_ref")
  , Bf = Symbol.for("react.suspense")
  , Wf = Symbol.for("react.memo")
  , Vf = Symbol.for("react.lazy")
  , zl = Symbol.iterator;
function Hf(e) {
    return e === null || typeof e != "object" ? null : (e = zl && e[zl] || e["@@iterator"],
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
function Kr(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Rc,
    this.updater = r || Tc
}
Kr.prototype.isReactComponent = {};
Kr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Kr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Lc() {}
Lc.prototype = Kr.prototype;
function Ia(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Rc,
    this.updater = r || Tc
}
var Aa = Ia.prototype = new Lc;
Aa.constructor = Ia;
Oc(Aa, Kr.prototype);
Aa.isPureReactComponent = !0;
var Fl = Array.isArray
  , $c = Object.prototype.hasOwnProperty
  , Ma = {
    current: null
}
  , Dc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ic(e, t, r) {
    var n, s = {}, i = null, o = null;
    if (t != null)
        for (n in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            $c.call(t, n) && !Dc.hasOwnProperty(n) && (s[n] = t[n]);
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
        $$typeof: ns,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Ma.current
    }
}
function qf(e, t) {
    return {
        $$typeof: ns,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ua(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ns
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
var Bl = /\/+/g;
function Xi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Yf("" + e.key) : t.toString(36)
}
function Is(e, t, r, n, s) {
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
            case ns:
            case Df:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = n === "" ? "." + Xi(o, 0) : n,
        Fl(s) ? (r = "",
        e != null && (r = e.replace(Bl, "$&/") + "/"),
        Is(s, t, r, "", function(c) {
            return c
        })) : s != null && (Ua(s) && (s = qf(s, r + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Bl, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    n = n === "" ? "." : n + ":",
    Fl(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = n + Xi(i, a);
            o += Is(i, t, r, l, s)
        }
    else if (l = Hf(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = n + Xi(i, a++),
            o += Is(i, t, r, l, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ps(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , s = 0;
    return Is(e, n, "", "", function(i) {
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
var ge = {
    current: null
}
  , As = {
    transition: null
}
  , Qf = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: As,
    ReactCurrentOwner: Ma
};
function Ac() {
    throw Error("act(...) is not supported in production builds of React.")
}
D.Children = {
    map: ps,
    forEach: function(e, t, r) {
        ps(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return ps(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ps(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ua(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
D.Component = Kr;
D.Fragment = If;
D.Profiler = Mf;
D.PureComponent = Ia;
D.StrictMode = Af;
D.Suspense = Bf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf;
D.act = Ac;
D.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = Oc({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Ma.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            $c.call(t, l) && !Dc.hasOwnProperty(l) && (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
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
        $$typeof: ns,
        type: e.type,
        key: s,
        ref: i,
        props: n,
        _owner: o
    }
}
;
D.createContext = function(e) {
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
D.createElement = Ic;
D.createFactory = function(e) {
    var t = Ic.bind(null, e);
    return t.type = e,
    t
}
;
D.createRef = function() {
    return {
        current: null
    }
}
;
D.forwardRef = function(e) {
    return {
        $$typeof: Ff,
        render: e
    }
}
;
D.isValidElement = Ua;
D.lazy = function(e) {
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
D.memo = function(e, t) {
    return {
        $$typeof: Wf,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
D.startTransition = function(e) {
    var t = As.transition;
    As.transition = {};
    try {
        e()
    } finally {
        As.transition = t
    }
}
;
D.unstable_act = Ac;
D.useCallback = function(e, t) {
    return ge.current.useCallback(e, t)
}
;
D.useContext = function(e) {
    return ge.current.useContext(e)
}
;
D.useDebugValue = function() {}
;
D.useDeferredValue = function(e) {
    return ge.current.useDeferredValue(e)
}
;
D.useEffect = function(e, t) {
    return ge.current.useEffect(e, t)
}
;
D.useId = function() {
    return ge.current.useId()
}
;
D.useImperativeHandle = function(e, t, r) {
    return ge.current.useImperativeHandle(e, t, r)
}
;
D.useInsertionEffect = function(e, t) {
    return ge.current.useInsertionEffect(e, t)
}
;
D.useLayoutEffect = function(e, t) {
    return ge.current.useLayoutEffect(e, t)
}
;
D.useMemo = function(e, t) {
    return ge.current.useMemo(e, t)
}
;
D.useReducer = function(e, t, r) {
    return ge.current.useReducer(e, t, r)
}
;
D.useRef = function(e) {
    return ge.current.useRef(e)
}
;
D.useState = function(e) {
    return ge.current.useState(e)
}
;
D.useSyncExternalStore = function(e, t, r) {
    return ge.current.useSyncExternalStore(e, t, r)
}
;
D.useTransition = function() {
    return ge.current.useTransition()
}
;
D.version = "18.3.1";
Cc.exports = D;
var k = Cc.exports;
const za = Nc(k)
  , Gf = Lf({
    __proto__: null,
    default: za
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
ki.Fragment = Zf;
ki.jsx = Mc;
ki.jsxs = Mc;
Pc.exports = ki;
var u = Pc.exports
  , Uc = {
    exports: {}
}
  , Oe = {}
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
    function t(T, R) {
        var $ = T.length;
        T.push(R);
        e: for (; 0 < $; ) {
            var K = $ - 1 >>> 1
              , ne = T[K];
            if (0 < s(ne, R))
                T[K] = R,
                T[$] = ne,
                $ = K;
            else
                break e
        }
    }
    function r(T) {
        return T.length === 0 ? null : T[0]
    }
    function n(T) {
        if (T.length === 0)
            return null;
        var R = T[0]
          , $ = T.pop();
        if ($ !== R) {
            T[0] = $;
            e: for (var K = 0, ne = T.length, hs = ne >>> 1; K < hs; ) {
                var Wt = 2 * (K + 1) - 1
                  , Ki = T[Wt]
                  , Vt = Wt + 1
                  , fs = T[Vt];
                if (0 > s(Ki, $))
                    Vt < ne && 0 > s(fs, Ki) ? (T[K] = fs,
                    T[Vt] = $,
                    K = Vt) : (T[K] = Ki,
                    T[Wt] = $,
                    K = Wt);
                else if (Vt < ne && 0 > s(fs, $))
                    T[K] = fs,
                    T[Vt] = $,
                    K = Vt;
                else
                    break e
            }
        }
        return R
    }
    function s(T, R) {
        var $ = T.sortIndex - R.sortIndex;
        return $ !== 0 ? $ : T.id - R.id
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
    function v(T) {
        for (var R = r(c); R !== null; ) {
            if (R.callback === null)
                n(c);
            else if (R.startTime <= T)
                n(c),
                R.sortIndex = R.expirationTime,
                t(l, R);
            else
                break;
            R = r(c)
        }
    }
    function x(T) {
        if (y = !1,
        v(T),
        !p)
            if (r(l) !== null)
                p = !0,
                Qi(S);
            else {
                var R = r(c);
                R !== null && Gi(x, R.startTime - T)
            }
    }
    function S(T, R) {
        p = !1,
        y && (y = !1,
        m(E),
        E = -1),
        w = !0;
        var $ = f;
        try {
            for (v(R),
            h = r(l); h !== null && (!(h.expirationTime > R) || T && !je()); ) {
                var K = h.callback;
                if (typeof K == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var ne = K(h.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof ne == "function" ? h.callback = ne : h === r(l) && n(l),
                    v(R)
                } else
                    n(l);
                h = r(l)
            }
            if (h !== null)
                var hs = !0;
            else {
                var Wt = r(c);
                Wt !== null && Gi(x, Wt.startTime - R),
                hs = !1
            }
            return hs
        } finally {
            h = null,
            f = $,
            w = !1
        }
    }
    var C = !1
      , _ = null
      , E = -1
      , N = 5
      , O = -1;
    function je() {
        return !(e.unstable_now() - O < N)
    }
    function nn() {
        if (_ !== null) {
            var T = e.unstable_now();
            O = T;
            var R = !0;
            try {
                R = _(!0, T)
            } finally {
                R ? sn() : (C = !1,
                _ = null)
            }
        } else
            C = !1
    }
    var sn;
    if (typeof g == "function")
        sn = function() {
            g(nn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Ul = new MessageChannel
          , Rf = Ul.port2;
        Ul.port1.onmessage = nn,
        sn = function() {
            Rf.postMessage(null)
        }
    } else
        sn = function() {
            b(nn, 0)
        }
        ;
    function Qi(T) {
        _ = T,
        C || (C = !0,
        sn())
    }
    function Gi(T, R) {
        E = b(function() {
            T(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        p || w || (p = !0,
        Qi(S))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < T ? Math.floor(1e3 / T) : 5
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
    e.unstable_next = function(T) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = f
        }
        var $ = f;
        f = R;
        try {
            return T()
        } finally {
            f = $
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, R) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var $ = f;
        f = T;
        try {
            return R()
        } finally {
            f = $
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, R, $) {
        var K = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
        $ = typeof $ == "number" && 0 < $ ? K + $ : K) : $ = K,
        T) {
        case 1:
            var ne = -1;
            break;
        case 2:
            ne = 250;
            break;
        case 5:
            ne = 1073741823;
            break;
        case 4:
            ne = 1e4;
            break;
        default:
            ne = 5e3
        }
        return ne = $ + ne,
        T = {
            id: d++,
            callback: R,
            priorityLevel: T,
            startTime: $,
            expirationTime: ne,
            sortIndex: -1
        },
        $ > K ? (T.sortIndex = $,
        t(c, T),
        r(l) === null && T === r(c) && (y ? (m(E),
        E = -1) : y = !0,
        Gi(x, $ - K))) : (T.sortIndex = ne,
        t(l, T),
        p || w || (p = !0,
        Qi(S))),
        T
    }
    ,
    e.unstable_shouldYield = je,
    e.unstable_wrapCallback = function(T) {
        var R = f;
        return function() {
            var $ = f;
            f = R;
            try {
                return T.apply(this, arguments)
            } finally {
                f = $
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
  , Te = np;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Bc = new Set
  , Dn = {};
function ur(e, t) {
    Ur(e, t),
    Ur(e + "Capture", t)
}
function Ur(e, t) {
    for (Dn[e] = t,
    e = 0; e < t.length; e++)
        Bc.add(t[e])
}
var lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , $o = Object.prototype.hasOwnProperty
  , ip = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Wl = {}
  , Vl = {};
function op(e) {
    return $o.call(Vl, e) ? !0 : $o.call(Wl, e) ? !1 : ip.test(e) ? Vl[e] = !0 : (Wl[e] = !0,
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
function ve(e, t, r, n, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = s,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ue[e] = new ve(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ue[t] = new ve(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ue[e] = new ve(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ue[e] = new ve(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ue[e] = new ve(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ue[e] = new ve(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ue[e] = new ve(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ue[e] = new ve(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ue[e] = new ve(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Fa = /[\-:]([a-z])/g;
function Ba(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Fa, Ba);
    ue[t] = new ve(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Fa, Ba);
    ue[t] = new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Fa, Ba);
    ue[t] = new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ue[e] = new ve(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ue.xlinkHref = new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ue[e] = new ve(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Wa(e, t, r, n) {
    var s = ue.hasOwnProperty(t) ? ue[t] : null;
    (s !== null ? s.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lp(t, r, s, n) && (r = null),
    n || s === null ? op(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : s.mustUseProperty ? e[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (t = s.attributeName,
    n = s.attributeNamespace,
    r === null ? e.removeAttribute(t) : (s = s.type,
    r = s === 3 || s === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var ft = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ms = Symbol.for("react.element")
  , xr = Symbol.for("react.portal")
  , _r = Symbol.for("react.fragment")
  , Va = Symbol.for("react.strict_mode")
  , Do = Symbol.for("react.profiler")
  , Wc = Symbol.for("react.provider")
  , Vc = Symbol.for("react.context")
  , Ha = Symbol.for("react.forward_ref")
  , Io = Symbol.for("react.suspense")
  , Ao = Symbol.for("react.suspense_list")
  , qa = Symbol.for("react.memo")
  , wt = Symbol.for("react.lazy")
  , Hc = Symbol.for("react.offscreen")
  , Hl = Symbol.iterator;
function on(e) {
    return e === null || typeof e != "object" ? null : (e = Hl && e[Hl] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Y = Object.assign, Zi;
function wn(e) {
    if (Zi === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Zi = t && t[1] || ""
        }
    return `
` + Zi + e
}
var eo = !1;
function to(e, t) {
    if (!e || eo)
        return "";
    eo = !0;
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
        eo = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? wn(e) : ""
}
function up(e) {
    switch (e.tag) {
    case 5:
        return wn(e.type);
    case 16:
        return wn("Lazy");
    case 13:
        return wn("Suspense");
    case 19:
        return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = to(e.type, !1),
        e;
    case 11:
        return e = to(e.type.render, !1),
        e;
    case 1:
        return e = to(e.type, !0),
        e;
    default:
        return ""
    }
}
function Mo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case _r:
        return "Fragment";
    case xr:
        return "Portal";
    case Do:
        return "Profiler";
    case Va:
        return "StrictMode";
    case Io:
        return "Suspense";
    case Ao:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Vc:
            return (e.displayName || "Context") + ".Consumer";
        case Wc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ha:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case qa:
            return t = e.displayName || null,
            t !== null ? t : Mo(e.type) || "Memo";
        case wt:
            t = e._payload,
            e = e._init;
            try {
                return Mo(e(t))
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
        return Mo(t);
    case 8:
        return t === Va ? "StrictMode" : "Mode";
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
function At(e) {
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
function gs(e) {
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
function Js(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Uo(e, t) {
    var r = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function ql(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = At(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Jc(e, t) {
    t = t.checked,
    t != null && Wa(e, "checked", t, !1)
}
function zo(e, t) {
    Jc(e, t);
    var r = At(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fo(e, t.type, r) : t.hasOwnProperty("defaultValue") && Fo(e, t.type, At(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Yl(e, t, r) {
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
function Fo(e, t, r) {
    (t !== "number" || Js(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var xn = Array.isArray;
function Rr(e, t, r, n) {
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
        for (r = "" + At(r),
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
function Bo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Jl(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(j(92));
            if (xn(r)) {
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
        initialValue: At(r)
    }
}
function Qc(e, t) {
    var r = At(t.value)
      , n = At(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function Ql(e) {
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
function Wo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var vs, Kc = function(e) {
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
        for (vs = vs || document.createElement("div"),
        vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = vs.firstChild; e.firstChild; )
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
var bn = {
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
Object.keys(bn).forEach(function(e) {
    hp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        bn[t] = bn[e]
    })
});
function Xc(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || bn.hasOwnProperty(e) && bn[e] ? ("" + t).trim() : t + "px"
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
var fp = Y({
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
function Vo(e, t) {
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
function Ho(e, t) {
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
var qo = null;
function Ya(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Yo = null
  , Lr = null
  , $r = null;
function Gl(e) {
    if (e = os(e)) {
        if (typeof Yo != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Ni(t),
        Yo(e.stateNode, e.type, t))
    }
}
function ed(e) {
    Lr ? $r ? $r.push(e) : $r = [e] : Lr = e
}
function td() {
    if (Lr) {
        var e = Lr
          , t = $r;
        if ($r = Lr = null,
        Gl(e),
        t)
            for (e = 0; e < t.length; e++)
                Gl(t[e])
    }
}
function rd(e, t) {
    return e(t)
}
function nd() {}
var ro = !1;
function sd(e, t, r) {
    if (ro)
        return e(t, r);
    ro = !0;
    try {
        return rd(e, t, r)
    } finally {
        ro = !1,
        (Lr !== null || $r !== null) && (nd(),
        td())
    }
}
function An(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = Ni(r);
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
var Jo = !1;
if (lt)
    try {
        var an = {};
        Object.defineProperty(an, "passive", {
            get: function() {
                Jo = !0
            }
        }),
        window.addEventListener("test", an, an),
        window.removeEventListener("test", an, an)
    } catch {
        Jo = !1
    }
function pp(e, t, r, n, s, i, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, c)
    } catch (d) {
        this.onError(d)
    }
}
var jn = !1
  , Qs = null
  , Gs = !1
  , Qo = null
  , mp = {
    onError: function(e) {
        jn = !0,
        Qs = e
    }
};
function gp(e, t, r, n, s, i, o, a, l) {
    jn = !1,
    Qs = null,
    pp.apply(mp, arguments)
}
function vp(e, t, r, n, s, i, o, a, l) {
    if (gp.apply(this, arguments),
    jn) {
        if (jn) {
            var c = Qs;
            jn = !1,
            Qs = null
        } else
            throw Error(j(198));
        Gs || (Gs = !0,
        Qo = c)
    }
}
function cr(e) {
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
function Kl(e) {
    if (cr(e) !== e)
        throw Error(j(188))
}
function yp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = cr(e),
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
                    return Kl(s),
                    e;
                if (i === n)
                    return Kl(s),
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
var ld = Te.unstable_scheduleCallback
  , Xl = Te.unstable_cancelCallback
  , wp = Te.unstable_shouldYield
  , xp = Te.unstable_requestPaint
  , X = Te.unstable_now
  , _p = Te.unstable_getCurrentPriorityLevel
  , Ja = Te.unstable_ImmediatePriority
  , ud = Te.unstable_UserBlockingPriority
  , Ks = Te.unstable_NormalPriority
  , kp = Te.unstable_LowPriority
  , cd = Te.unstable_IdlePriority
  , Si = null
  , Ze = null;
function Sp(e) {
    if (Ze && typeof Ze.onCommitFiberRoot == "function")
        try {
            Ze.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var He = Math.clz32 ? Math.clz32 : Ep
  , bp = Math.log
  , jp = Math.LN2;
function Ep(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (bp(e) / jp | 0) | 0
}
var ys = 64
  , ws = 4194304;
function _n(e) {
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
function Xs(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = r & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? n = _n(a) : (i &= o,
        i !== 0 && (n = _n(i)))
    } else
        o = r & ~s,
        o !== 0 ? n = _n(o) : i !== 0 && (n = _n(i));
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
            r = 31 - He(t),
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
        var o = 31 - He(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & r) || a & n) && (s[o] = Np(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Go(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function dd() {
    var e = ys;
    return ys <<= 1,
    !(ys & 4194240) && (ys = 64),
    e
}
function no(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function ss(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - He(t),
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
        var s = 31 - He(r)
          , i = 1 << s;
        t[s] = 0,
        n[s] = -1,
        e[s] = -1,
        r &= ~i
    }
}
function Qa(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - He(r)
          , s = 1 << n;
        s & t | e[n] & t && (e[n] |= t),
        r &= ~s
    }
}
var U = 0;
function hd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var fd, Ga, pd, md, gd, Ko = !1, xs = [], Pt = null, Ct = null, Tt = null, Mn = new Map, Un = new Map, kt = [], Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zl(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Pt = null;
        break;
    case "dragenter":
    case "dragleave":
        Ct = null;
        break;
    case "mouseover":
    case "mouseout":
        Tt = null;
        break;
    case "pointerover":
    case "pointerout":
        Mn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Un.delete(t.pointerId)
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
    t !== null && (t = os(t),
    t !== null && Ga(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function Op(e, t, r, n, s) {
    switch (t) {
    case "focusin":
        return Pt = ln(Pt, e, t, r, n, s),
        !0;
    case "dragenter":
        return Ct = ln(Ct, e, t, r, n, s),
        !0;
    case "mouseover":
        return Tt = ln(Tt, e, t, r, n, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Mn.set(i, ln(Mn.get(i) || null, e, t, r, n, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Un.set(i, ln(Un.get(i) || null, e, t, r, n, s)),
        !0
    }
    return !1
}
function vd(e) {
    var t = Kt(e.target);
    if (t !== null) {
        var r = cr(t);
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
function Ms(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            qo = n,
            r.target.dispatchEvent(n),
            qo = null
        } else
            return t = os(r),
            t !== null && Ga(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function eu(e, t, r) {
    Ms(e) && r.delete(t)
}
function Rp() {
    Ko = !1,
    Pt !== null && Ms(Pt) && (Pt = null),
    Ct !== null && Ms(Ct) && (Ct = null),
    Tt !== null && Ms(Tt) && (Tt = null),
    Mn.forEach(eu),
    Un.forEach(eu)
}
function un(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ko || (Ko = !0,
    Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Rp)))
}
function zn(e) {
    function t(s) {
        return un(s, e)
    }
    if (0 < xs.length) {
        un(xs[0], e);
        for (var r = 1; r < xs.length; r++) {
            var n = xs[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Pt !== null && un(Pt, e),
    Ct !== null && un(Ct, e),
    Tt !== null && un(Tt, e),
    Mn.forEach(t),
    Un.forEach(t),
    r = 0; r < kt.length; r++)
        n = kt[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < kt.length && (r = kt[0],
    r.blockedOn === null); )
        vd(r),
        r.blockedOn === null && kt.shift()
}
var Dr = ft.ReactCurrentBatchConfig
  , Zs = !0;
function Lp(e, t, r, n) {
    var s = U
      , i = Dr.transition;
    Dr.transition = null;
    try {
        U = 1,
        Ka(e, t, r, n)
    } finally {
        U = s,
        Dr.transition = i
    }
}
function $p(e, t, r, n) {
    var s = U
      , i = Dr.transition;
    Dr.transition = null;
    try {
        U = 4,
        Ka(e, t, r, n)
    } finally {
        U = s,
        Dr.transition = i
    }
}
function Ka(e, t, r, n) {
    if (Zs) {
        var s = Xo(e, t, r, n);
        if (s === null)
            po(e, t, n, ei, r),
            Zl(e, n);
        else if (Op(s, e, t, r, n))
            n.stopPropagation();
        else if (Zl(e, n),
        t & 4 && -1 < Tp.indexOf(e)) {
            for (; s !== null; ) {
                var i = os(s);
                if (i !== null && fd(i),
                i = Xo(e, t, r, n),
                i === null && po(e, t, n, ei, r),
                i === s)
                    break;
                s = i
            }
            s !== null && n.stopPropagation()
        } else
            po(e, t, n, null, r)
    }
}
var ei = null;
function Xo(e, t, r, n) {
    if (ei = null,
    e = Ya(n),
    e = Kt(e),
    e !== null)
        if (t = cr(e),
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
    return ei = e,
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
        case Ja:
            return 1;
        case ud:
            return 4;
        case Ks:
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
var jt = null
  , Xa = null
  , Us = null;
function wd() {
    if (Us)
        return Us;
    var e, t = Xa, r = t.length, n, s = "value"in jt ? jt.value : jt.textContent, i = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++)
        ;
    var o = r - e;
    for (n = 1; n <= o && t[r - n] === s[i - n]; n++)
        ;
    return Us = s.slice(e, 1 < n ? 1 - n : void 0)
}
function zs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function _s() {
    return !0
}
function tu() {
    return !1
}
function Re(e) {
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
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _s : tu,
        this.isPropagationStopped = tu,
        this
    }
    return Y(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = _s)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = _s)
        },
        persist: function() {},
        isPersistent: _s
    }),
    t
}
var Xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Za = Re(Xr), is = Y({}, Xr, {
    view: 0,
    detail: 0
}), Dp = Re(is), so, io, cn, bi = Y({}, is, {
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
    getModifierState: el,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== cn && (cn && e.type === "mousemove" ? (so = e.screenX - cn.screenX,
        io = e.screenY - cn.screenY) : io = so = 0,
        cn = e),
        so)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : io
    }
}), ru = Re(bi), Ip = Y({}, bi, {
    dataTransfer: 0
}), Ap = Re(Ip), Mp = Y({}, is, {
    relatedTarget: 0
}), oo = Re(Mp), Up = Y({}, Xr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), zp = Re(Up), Fp = Y({}, Xr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Bp = Re(Fp), Wp = Y({}, Xr, {
    data: 0
}), nu = Re(Wp), Vp = {
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
function el() {
    return Yp
}
var Jp = Y({}, is, {
    key: function(e) {
        if (e.key) {
            var t = Vp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = zs(e),
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
    getModifierState: el,
    charCode: function(e) {
        return e.type === "keypress" ? zs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Qp = Re(Jp)
  , Gp = Y({}, bi, {
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
  , su = Re(Gp)
  , Kp = Y({}, is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: el
})
  , Xp = Re(Kp)
  , Zp = Y({}, Xr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , em = Re(Zp)
  , tm = Y({}, bi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , rm = Re(tm)
  , nm = [9, 13, 27, 32]
  , tl = lt && "CompositionEvent"in window
  , En = null;
lt && "documentMode"in document && (En = document.documentMode);
var sm = lt && "TextEvent"in window && !En
  , xd = lt && (!tl || En && 8 < En && 11 >= En)
  , iu = " "
  , ou = !1;
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
var kr = !1;
function im(e, t) {
    switch (e) {
    case "compositionend":
        return kd(t);
    case "keypress":
        return t.which !== 32 ? null : (ou = !0,
        iu);
    case "textInput":
        return e = t.data,
        e === iu && ou ? null : e;
    default:
        return null
    }
}
function om(e, t) {
    if (kr)
        return e === "compositionend" || !tl && _d(e, t) ? (e = wd(),
        Us = Xa = jt = null,
        kr = !1,
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
function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!am[e.type] : t === "textarea"
}
function Sd(e, t, r, n) {
    ed(n),
    t = ti(t, "onChange"),
    0 < t.length && (r = new Za("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var Nn = null
  , Fn = null;
function lm(e) {
    $d(e, 0)
}
function ji(e) {
    var t = jr(e);
    if (Yc(t))
        return e
}
function um(e, t) {
    if (e === "change")
        return t
}
var bd = !1;
if (lt) {
    var ao;
    if (lt) {
        var lo = "oninput"in document;
        if (!lo) {
            var lu = document.createElement("div");
            lu.setAttribute("oninput", "return;"),
            lo = typeof lu.oninput == "function"
        }
        ao = lo
    } else
        ao = !1;
    bd = ao && (!document.documentMode || 9 < document.documentMode)
}
function uu() {
    Nn && (Nn.detachEvent("onpropertychange", jd),
    Fn = Nn = null)
}
function jd(e) {
    if (e.propertyName === "value" && ji(Fn)) {
        var t = [];
        Sd(t, Fn, e, Ya(e)),
        sd(lm, t)
    }
}
function cm(e, t, r) {
    e === "focusin" ? (uu(),
    Nn = t,
    Fn = r,
    Nn.attachEvent("onpropertychange", jd)) : e === "focusout" && uu()
}
function dm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ji(Fn)
}
function hm(e, t) {
    if (e === "click")
        return ji(t)
}
function fm(e, t) {
    if (e === "input" || e === "change")
        return ji(t)
}
function pm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ye = typeof Object.is == "function" ? Object.is : pm;
function Bn(e, t) {
    if (Ye(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!$o.call(t, s) || !Ye(e[s], t[s]))
            return !1
    }
    return !0
}
function cu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function du(e, t) {
    var r = cu(e);
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
        r = cu(r)
    }
}
function Ed(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Nd() {
    for (var e = window, t = Js(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = Js(e.document)
    }
    return t
}
function rl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function mm(e) {
    var t = Nd()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Ed(r.ownerDocument.documentElement, r)) {
        if (n !== null && rl(r)) {
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
                s = du(r, i);
                var o = du(r, n);
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
var gm = lt && "documentMode"in document && 11 >= document.documentMode
  , Sr = null
  , Zo = null
  , Pn = null
  , ea = !1;
function hu(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ea || Sr == null || Sr !== Js(n) || (n = Sr,
    "selectionStart"in n && rl(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    Pn && Bn(Pn, n) || (Pn = n,
    n = ti(Zo, "onSelect"),
    0 < n.length && (t = new Za("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = Sr)))
}
function ks(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var br = {
    animationend: ks("Animation", "AnimationEnd"),
    animationiteration: ks("Animation", "AnimationIteration"),
    animationstart: ks("Animation", "AnimationStart"),
    transitionend: ks("Transition", "TransitionEnd")
}
  , uo = {}
  , Pd = {};
lt && (Pd = document.createElement("div").style,
"AnimationEvent"in window || (delete br.animationend.animation,
delete br.animationiteration.animation,
delete br.animationstart.animation),
"TransitionEvent"in window || delete br.transitionend.transition);
function Ei(e) {
    if (uo[e])
        return uo[e];
    if (!br[e])
        return e;
    var t = br[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in Pd)
            return uo[e] = t[r];
    return e
}
var Cd = Ei("animationend")
  , Td = Ei("animationiteration")
  , Od = Ei("animationstart")
  , Rd = Ei("transitionend")
  , Ld = new Map
  , fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ut(e, t) {
    Ld.set(e, t),
    ur(t, [e])
}
for (var co = 0; co < fu.length; co++) {
    var ho = fu[co]
      , vm = ho.toLowerCase()
      , ym = ho[0].toUpperCase() + ho.slice(1);
    Ut(vm, "on" + ym)
}
Ut(Cd, "onAnimationEnd");
Ut(Td, "onAnimationIteration");
Ut(Od, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(Rd, "onTransitionEnd");
Ur("onMouseEnter", ["mouseout", "mouseover"]);
Ur("onMouseLeave", ["mouseout", "mouseover"]);
Ur("onPointerEnter", ["pointerout", "pointerover"]);
Ur("onPointerLeave", ["pointerout", "pointerover"]);
ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , wm = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function pu(e, t, r) {
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
                    pu(s, a, c),
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
                    pu(s, a, c),
                    i = l
                }
        }
    }
    if (Gs)
        throw e = Qo,
        Gs = !1,
        Qo = null,
        e
}
function B(e, t) {
    var r = t[ia];
    r === void 0 && (r = t[ia] = new Set);
    var n = e + "__bubble";
    r.has(n) || (Dd(t, e, 2, !1),
    r.add(n))
}
function fo(e, t, r) {
    var n = 0;
    t && (n |= 4),
    Dd(r, e, n, t)
}
var Ss = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
    if (!e[Ss]) {
        e[Ss] = !0,
        Bc.forEach(function(r) {
            r !== "selectionchange" && (wm.has(r) || fo(r, !1, e),
            fo(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ss] || (t[Ss] = !0,
        fo("selectionchange", !1, t))
    }
}
function Dd(e, t, r, n) {
    switch (yd(t)) {
    case 1:
        var s = Lp;
        break;
    case 4:
        s = $p;
        break;
    default:
        s = Ka
    }
    r = s.bind(null, t, r, e),
    s = void 0,
    !Jo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    n ? s !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, r, !0) : s !== void 0 ? e.addEventListener(t, r, {
        passive: s
    }) : e.addEventListener(t, r, !1)
}
function po(e, t, r, n, s) {
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
                    if (o = Kt(a),
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
          , d = Ya(r)
          , h = [];
        e: {
            var f = Ld.get(e);
            if (f !== void 0) {
                var w = Za
                  , p = e;
                switch (e) {
                case "keypress":
                    if (zs(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Qp;
                    break;
                case "focusin":
                    p = "focus",
                    w = oo;
                    break;
                case "focusout":
                    p = "blur",
                    w = oo;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = oo;
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
                    w = ru;
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
                    w = Dp;
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
                    w = su
                }
                var y = (t & 4) !== 0
                  , b = !y && e === "scroll"
                  , m = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var g = c, v; g !== null; ) {
                    v = g;
                    var x = v.stateNode;
                    if (v.tag === 5 && x !== null && (v = x,
                    m !== null && (x = An(g, m),
                    x != null && y.push(Vn(g, x, v)))),
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
                f && r !== qo && (p = r.relatedTarget || r.fromElement) && (Kt(p) || p[ut]))
                    break e;
                if ((w || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                w ? (p = r.relatedTarget || r.toElement,
                w = c,
                p = p ? Kt(p) : null,
                p !== null && (b = cr(p),
                p !== b || p.tag !== 5 && p.tag !== 6) && (p = null)) : (w = null,
                p = c),
                w !== p)) {
                    if (y = ru,
                    x = "onMouseLeave",
                    m = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = su,
                    x = "onPointerLeave",
                    m = "onPointerEnter",
                    g = "pointer"),
                    b = w == null ? f : jr(w),
                    v = p == null ? f : jr(p),
                    f = new y(x,g + "leave",w,r,d),
                    f.target = b,
                    f.relatedTarget = v,
                    x = null,
                    Kt(d) === c && (y = new y(m,g + "enter",p,r,d),
                    y.target = v,
                    y.relatedTarget = b,
                    x = y),
                    b = x,
                    w && p)
                        t: {
                            for (y = w,
                            m = p,
                            g = 0,
                            v = y; v; v = mr(v))
                                g++;
                            for (v = 0,
                            x = m; x; x = mr(x))
                                v++;
                            for (; 0 < g - v; )
                                y = mr(y),
                                g--;
                            for (; 0 < v - g; )
                                m = mr(m),
                                v--;
                            for (; g--; ) {
                                if (y === m || m !== null && y === m.alternate)
                                    break t;
                                y = mr(y),
                                m = mr(m)
                            }
                            y = null
                        }
                    else
                        y = null;
                    w !== null && mu(h, f, w, y, !1),
                    p !== null && b !== null && mu(h, b, p, y, !0)
                }
            }
            e: {
                if (f = c ? jr(c) : window,
                w = f.nodeName && f.nodeName.toLowerCase(),
                w === "select" || w === "input" && f.type === "file")
                    var S = um;
                else if (au(f))
                    if (bd)
                        S = fm;
                    else {
                        S = dm;
                        var C = cm
                    }
                else
                    (w = f.nodeName) && w.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = hm);
                if (S && (S = S(e, c))) {
                    Sd(h, S, r, d);
                    break e
                }
                C && C(e, f, c),
                e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Fo(f, "number", f.value)
            }
            switch (C = c ? jr(c) : window,
            e) {
            case "focusin":
                (au(C) || C.contentEditable === "true") && (Sr = C,
                Zo = c,
                Pn = null);
                break;
            case "focusout":
                Pn = Zo = Sr = null;
                break;
            case "mousedown":
                ea = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ea = !1,
                hu(h, r, d);
                break;
            case "selectionchange":
                if (gm)
                    break;
            case "keydown":
            case "keyup":
                hu(h, r, d)
            }
            var _;
            if (tl)
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
                kr ? _d(e, r) && (E = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
            E && (xd && r.locale !== "ko" && (kr || E !== "onCompositionStart" ? E === "onCompositionEnd" && kr && (_ = wd()) : (jt = d,
            Xa = "value"in jt ? jt.value : jt.textContent,
            kr = !0)),
            C = ti(c, E),
            0 < C.length && (E = new nu(E,e,null,r,d),
            h.push({
                event: E,
                listeners: C
            }),
            _ ? E.data = _ : (_ = kd(r),
            _ !== null && (E.data = _)))),
            (_ = sm ? im(e, r) : om(e, r)) && (c = ti(c, "onBeforeInput"),
            0 < c.length && (d = new nu("onBeforeInput","beforeinput",null,r,d),
            h.push({
                event: d,
                listeners: c
            }),
            d.data = _))
        }
        $d(h, t)
    })
}
function Vn(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function ti(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = An(e, r),
        i != null && n.unshift(Vn(e, i, s)),
        i = An(e, t),
        i != null && n.push(Vn(e, i, s))),
        e = e.return
    }
    return n
}
function mr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function mu(e, t, r, n, s) {
    for (var i = t._reactName, o = []; r !== null && r !== n; ) {
        var a = r
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === n)
            break;
        a.tag === 5 && c !== null && (a = c,
        s ? (l = An(r, i),
        l != null && o.unshift(Vn(r, l, a))) : s || (l = An(r, i),
        l != null && o.push(Vn(r, l, a)))),
        r = r.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var xm = /\r\n?/g
  , _m = /\u0000|\uFFFD/g;
function gu(e) {
    return (typeof e == "string" ? e : "" + e).replace(xm, `
`).replace(_m, "")
}
function bs(e, t, r) {
    if (t = gu(t),
    gu(e) !== t && r)
        throw Error(j(425))
}
function ri() {}
var ta = null
  , ra = null;
function na(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var sa = typeof setTimeout == "function" ? setTimeout : void 0
  , km = typeof clearTimeout == "function" ? clearTimeout : void 0
  , vu = typeof Promise == "function" ? Promise : void 0
  , Sm = typeof queueMicrotask == "function" ? queueMicrotask : typeof vu < "u" ? function(e) {
    return vu.resolve(null).then(e).catch(bm)
}
: sa;
function bm(e) {
    setTimeout(function() {
        throw e
    })
}
function mo(e, t) {
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
                    zn(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    zn(t)
}
function Ot(e) {
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
function yu(e) {
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
var Zr = Math.random().toString(36).slice(2)
  , Xe = "__reactFiber$" + Zr
  , Hn = "__reactProps$" + Zr
  , ut = "__reactContainer$" + Zr
  , ia = "__reactEvents$" + Zr
  , jm = "__reactListeners$" + Zr
  , Em = "__reactHandles$" + Zr;
function Kt(e) {
    var t = e[Xe];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[ut] || r[Xe]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = yu(e); e !== null; ) {
                    if (r = e[Xe])
                        return r;
                    e = yu(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function os(e) {
    return e = e[Xe] || e[ut],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function jr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Ni(e) {
    return e[Hn] || null
}
var oa = []
  , Er = -1;
function zt(e) {
    return {
        current: e
    }
}
function W(e) {
    0 > Er || (e.current = oa[Er],
    oa[Er] = null,
    Er--)
}
function F(e, t) {
    Er++,
    oa[Er] = e.current,
    e.current = t
}
var Mt = {}
  , fe = zt(Mt)
  , ke = zt(!1)
  , rr = Mt;
function zr(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return Mt;
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
function Se(e) {
    return e = e.childContextTypes,
    e != null
}
function ni() {
    W(ke),
    W(fe)
}
function wu(e, t, r) {
    if (fe.current !== Mt)
        throw Error(j(168));
    F(fe, t),
    F(ke, r)
}
function Id(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in t))
            throw Error(j(108, cp(e) || "Unknown", s));
    return Y({}, r, n)
}
function si(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt,
    rr = fe.current,
    F(fe, e),
    F(ke, ke.current),
    !0
}
function xu(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(j(169));
    r ? (e = Id(e, t, rr),
    n.__reactInternalMemoizedMergedChildContext = e,
    W(ke),
    W(fe),
    F(fe, e)) : W(ke),
    F(ke, r)
}
var st = null
  , Pi = !1
  , go = !1;
function Ad(e) {
    st === null ? st = [e] : st.push(e)
}
function Nm(e) {
    Pi = !0,
    Ad(e)
}
function Ft() {
    if (!go && st !== null) {
        go = !0;
        var e = 0
          , t = U;
        try {
            var r = st;
            for (U = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            st = null,
            Pi = !1
        } catch (s) {
            throw st !== null && (st = st.slice(e + 1)),
            ld(Ja, Ft),
            s
        } finally {
            U = t,
            go = !1
        }
    }
    return null
}
var Nr = []
  , Pr = 0
  , ii = null
  , oi = 0
  , Le = []
  , $e = 0
  , nr = null
  , it = 1
  , ot = "";
function qt(e, t) {
    Nr[Pr++] = oi,
    Nr[Pr++] = ii,
    ii = e,
    oi = t
}
function Md(e, t, r) {
    Le[$e++] = it,
    Le[$e++] = ot,
    Le[$e++] = nr,
    nr = e;
    var n = it;
    e = ot;
    var s = 32 - He(n) - 1;
    n &= ~(1 << s),
    r += 1;
    var i = 32 - He(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (n & (1 << o) - 1).toString(32),
        n >>= o,
        s -= o,
        it = 1 << 32 - He(t) + s | r << s | n,
        ot = i + e
    } else
        it = 1 << i | r << s | n,
        ot = e
}
function nl(e) {
    e.return !== null && (qt(e, 1),
    Md(e, 1, 0))
}
function sl(e) {
    for (; e === ii; )
        ii = Nr[--Pr],
        Nr[Pr] = null,
        oi = Nr[--Pr],
        Nr[Pr] = null;
    for (; e === nr; )
        nr = Le[--$e],
        Le[$e] = null,
        ot = Le[--$e],
        Le[$e] = null,
        it = Le[--$e],
        Le[$e] = null
}
var Ce = null
  , Pe = null
  , V = !1
  , Ve = null;
function Ud(e, t) {
    var r = De(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function _u(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ce = e,
        Pe = Ot(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ce = e,
        Pe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = nr !== null ? {
            id: it,
            overflow: ot
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
        Ce = e,
        Pe = null,
        !0) : !1;
    default:
        return !1
    }
}
function aa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function la(e) {
    if (V) {
        var t = Pe;
        if (t) {
            var r = t;
            if (!_u(e, t)) {
                if (aa(e))
                    throw Error(j(418));
                t = Ot(r.nextSibling);
                var n = Ce;
                t && _u(e, t) ? Ud(n, r) : (e.flags = e.flags & -4097 | 2,
                V = !1,
                Ce = e)
            }
        } else {
            if (aa(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            V = !1,
            Ce = e
        }
    }
}
function ku(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ce = e
}
function js(e) {
    if (e !== Ce)
        return !1;
    if (!V)
        return ku(e),
        V = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps)),
    t && (t = Pe)) {
        if (aa(e))
            throw zd(),
            Error(j(418));
        for (; t; )
            Ud(e, t),
            t = Ot(t.nextSibling)
    }
    if (ku(e),
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
                            Pe = Ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            Pe = null
        }
    } else
        Pe = Ce ? Ot(e.stateNode.nextSibling) : null;
    return !0
}
function zd() {
    for (var e = Pe; e; )
        e = Ot(e.nextSibling)
}
function Fr() {
    Pe = Ce = null,
    V = !1
}
function il(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
var Pm = ft.ReactCurrentBatchConfig;
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
function Es(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Su(e) {
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
        return g === null || g.tag !== 6 ? (g = So(v, m.mode, x),
        g.return = m,
        g) : (g = s(g, v),
        g.return = m,
        g)
    }
    function l(m, g, v, x) {
        var S = v.type;
        return S === _r ? d(m, g, v.props.children, x, v.key) : g !== null && (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && Su(S) === g.type) ? (x = s(g, v.props),
        x.ref = dn(m, g, v),
        x.return = m,
        x) : (x = Ys(v.type, v.key, v.props, null, m.mode, x),
        x.ref = dn(m, g, v),
        x.return = m,
        x)
    }
    function c(m, g, v, x) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== v.containerInfo || g.stateNode.implementation !== v.implementation ? (g = bo(v, m.mode, x),
        g.return = m,
        g) : (g = s(g, v.children || []),
        g.return = m,
        g)
    }
    function d(m, g, v, x, S) {
        return g === null || g.tag !== 7 ? (g = tr(v, m.mode, x, S),
        g.return = m,
        g) : (g = s(g, v),
        g.return = m,
        g)
    }
    function h(m, g, v) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = So("" + g, m.mode, v),
            g.return = m,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case ms:
                return v = Ys(g.type, g.key, g.props, null, m.mode, v),
                v.ref = dn(m, null, g),
                v.return = m,
                v;
            case xr:
                return g = bo(g, m.mode, v),
                g.return = m,
                g;
            case wt:
                var x = g._init;
                return h(m, x(g._payload), v)
            }
            if (xn(g) || on(g))
                return g = tr(g, m.mode, v, null),
                g.return = m,
                g;
            Es(m, g)
        }
        return null
    }
    function f(m, g, v, x) {
        var S = g !== null ? g.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return S !== null ? null : a(m, g, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case ms:
                return v.key === S ? l(m, g, v, x) : null;
            case xr:
                return v.key === S ? c(m, g, v, x) : null;
            case wt:
                return S = v._init,
                f(m, g, S(v._payload), x)
            }
            if (xn(v) || on(v))
                return S !== null ? null : d(m, g, v, x, null);
            Es(m, v)
        }
        return null
    }
    function w(m, g, v, x, S) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return m = m.get(v) || null,
            a(g, m, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ms:
                return m = m.get(x.key === null ? v : x.key) || null,
                l(g, m, x, S);
            case xr:
                return m = m.get(x.key === null ? v : x.key) || null,
                c(g, m, x, S);
            case wt:
                var C = x._init;
                return w(m, g, v, C(x._payload), S)
            }
            if (xn(x) || on(x))
                return m = m.get(v) || null,
                d(g, m, x, S, null);
            Es(g, x)
        }
        return null
    }
    function p(m, g, v, x) {
        for (var S = null, C = null, _ = g, E = g = 0, N = null; _ !== null && E < v.length; E++) {
            _.index > E ? (N = _,
            _ = null) : N = _.sibling;
            var O = f(m, _, v[E], x);
            if (O === null) {
                _ === null && (_ = N);
                break
            }
            e && _ && O.alternate === null && t(m, _),
            g = i(O, g, E),
            C === null ? S = O : C.sibling = O,
            C = O,
            _ = N
        }
        if (E === v.length)
            return r(m, _),
            V && qt(m, E),
            S;
        if (_ === null) {
            for (; E < v.length; E++)
                _ = h(m, v[E], x),
                _ !== null && (g = i(_, g, E),
                C === null ? S = _ : C.sibling = _,
                C = _);
            return V && qt(m, E),
            S
        }
        for (_ = n(m, _); E < v.length; E++)
            N = w(_, m, E, v[E], x),
            N !== null && (e && N.alternate !== null && _.delete(N.key === null ? E : N.key),
            g = i(N, g, E),
            C === null ? S = N : C.sibling = N,
            C = N);
        return e && _.forEach(function(je) {
            return t(m, je)
        }),
        V && qt(m, E),
        S
    }
    function y(m, g, v, x) {
        var S = on(v);
        if (typeof S != "function")
            throw Error(j(150));
        if (v = S.call(v),
        v == null)
            throw Error(j(151));
        for (var C = S = null, _ = g, E = g = 0, N = null, O = v.next(); _ !== null && !O.done; E++,
        O = v.next()) {
            _.index > E ? (N = _,
            _ = null) : N = _.sibling;
            var je = f(m, _, O.value, x);
            if (je === null) {
                _ === null && (_ = N);
                break
            }
            e && _ && je.alternate === null && t(m, _),
            g = i(je, g, E),
            C === null ? S = je : C.sibling = je,
            C = je,
            _ = N
        }
        if (O.done)
            return r(m, _),
            V && qt(m, E),
            S;
        if (_ === null) {
            for (; !O.done; E++,
            O = v.next())
                O = h(m, O.value, x),
                O !== null && (g = i(O, g, E),
                C === null ? S = O : C.sibling = O,
                C = O);
            return V && qt(m, E),
            S
        }
        for (_ = n(m, _); !O.done; E++,
        O = v.next())
            O = w(_, m, E, O.value, x),
            O !== null && (e && O.alternate !== null && _.delete(O.key === null ? E : O.key),
            g = i(O, g, E),
            C === null ? S = O : C.sibling = O,
            C = O);
        return e && _.forEach(function(nn) {
            return t(m, nn)
        }),
        V && qt(m, E),
        S
    }
    function b(m, g, v, x) {
        if (typeof v == "object" && v !== null && v.type === _r && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case ms:
                e: {
                    for (var S = v.key, C = g; C !== null; ) {
                        if (C.key === S) {
                            if (S = v.type,
                            S === _r) {
                                if (C.tag === 7) {
                                    r(m, C.sibling),
                                    g = s(C, v.props.children),
                                    g.return = m,
                                    m = g;
                                    break e
                                }
                            } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && Su(S) === C.type) {
                                r(m, C.sibling),
                                g = s(C, v.props),
                                g.ref = dn(m, C, v),
                                g.return = m,
                                m = g;
                                break e
                            }
                            r(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    v.type === _r ? (g = tr(v.props.children, m.mode, x, v.key),
                    g.return = m,
                    m = g) : (x = Ys(v.type, v.key, v.props, null, m.mode, x),
                    x.ref = dn(m, g, v),
                    x.return = m,
                    m = x)
                }
                return o(m);
            case xr:
                e: {
                    for (C = v.key; g !== null; ) {
                        if (g.key === C)
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
                    g = bo(v, m.mode, x),
                    g.return = m,
                    m = g
                }
                return o(m);
            case wt:
                return C = v._init,
                b(m, g, C(v._payload), x)
            }
            if (xn(v))
                return p(m, g, v, x);
            if (on(v))
                return y(m, g, v, x);
            Es(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        g !== null && g.tag === 6 ? (r(m, g.sibling),
        g = s(g, v),
        g.return = m,
        m = g) : (r(m, g),
        g = So(v, m.mode, x),
        g.return = m,
        m = g),
        o(m)) : r(m, g)
    }
    return b
}
var Br = Fd(!0)
  , Bd = Fd(!1)
  , ai = zt(null)
  , li = null
  , Cr = null
  , ol = null;
function al() {
    ol = Cr = li = null
}
function ll(e) {
    var t = ai.current;
    W(ai),
    e._currentValue = t
}
function ua(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function Ir(e, t) {
    li = e,
    ol = Cr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0),
    e.firstContext = null)
}
function Me(e) {
    var t = e._currentValue;
    if (ol !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Cr === null) {
            if (li === null)
                throw Error(j(308));
            Cr = e,
            li.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Cr = Cr.next = e;
    return t
}
var Xt = null;
function ul(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
function Wd(e, t, r, n) {
    var s = t.interleaved;
    return s === null ? (r.next = r,
    ul(t)) : (r.next = s.next,
    s.next = r),
    t.interleaved = r,
    ct(e, n)
}
function ct(e, t) {
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
var xt = !1;
function cl(e) {
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
function at(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Rt(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    A & 2) {
        var s = n.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        n.pending = t,
        ct(e, r)
    }
    return s = n.interleaved,
    s === null ? (t.next = t,
    ul(n)) : (t.next = s.next,
    s.next = t),
    n.interleaved = t,
    ct(e, r)
}
function Fs(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Qa(e, r)
    }
}
function bu(e, t) {
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
function ui(e, t, r, n) {
    var s = e.updateQueue;
    xt = !1;
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
                        h = Y({}, h, f);
                        break e;
                    case 2:
                        xt = !0
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
        ir |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function ju(e, t, r) {
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
var as = {}
  , et = zt(as)
  , qn = zt(as)
  , Yn = zt(as);
function Zt(e) {
    if (e === as)
        throw Error(j(174));
    return e
}
function dl(e, t) {
    switch (F(Yn, t),
    F(qn, e),
    F(et, as),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Wo(t, e)
    }
    W(et),
    F(et, t)
}
function Wr() {
    W(et),
    W(qn),
    W(Yn)
}
function Hd(e) {
    Zt(Yn.current);
    var t = Zt(et.current)
      , r = Wo(t, e.type);
    t !== r && (F(qn, e),
    F(et, r))
}
function hl(e) {
    qn.current === e && (W(et),
    W(qn))
}
var H = zt(0);
function ci(e) {
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
var vo = [];
function fl() {
    for (var e = 0; e < vo.length; e++)
        vo[e]._workInProgressVersionPrimary = null;
    vo.length = 0
}
var Bs = ft.ReactCurrentDispatcher
  , yo = ft.ReactCurrentBatchConfig
  , sr = 0
  , q = null
  , te = null
  , ie = null
  , di = !1
  , Cn = !1
  , Jn = 0
  , Cm = 0;
function ce() {
    throw Error(j(321))
}
function pl(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!Ye(e[r], t[r]))
            return !1;
    return !0
}
function ml(e, t, r, n, s, i) {
    if (sr = i,
    q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Bs.current = e === null || e.memoizedState === null ? Lm : $m,
    e = r(n, s),
    Cn) {
        i = 0;
        do {
            if (Cn = !1,
            Jn = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            ie = te = null,
            t.updateQueue = null,
            Bs.current = Dm,
            e = r(n, s)
        } while (Cn)
    }
    if (Bs.current = hi,
    t = te !== null && te.next !== null,
    sr = 0,
    ie = te = q = null,
    di = !1,
    t)
        throw Error(j(300));
    return e
}
function gl() {
    var e = Jn !== 0;
    return Jn = 0,
    e
}
function Ke() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? q.memoizedState = ie = e : ie = ie.next = e,
    ie
}
function Ue() {
    if (te === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = te.next;
    var t = ie === null ? q.memoizedState : ie.next;
    if (t !== null)
        ie = t,
        te = e;
    else {
        if (e === null)
            throw Error(j(310));
        te = e,
        e = {
            memoizedState: te.memoizedState,
            baseState: te.baseState,
            baseQueue: te.baseQueue,
            queue: te.queue,
            next: null
        },
        ie === null ? q.memoizedState = ie = e : ie = ie.next = e
    }
    return ie
}
function Qn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wo(e) {
    var t = Ue()
      , r = t.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = e;
    var n = te
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
            if ((sr & d) === d)
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
                q.lanes |= d,
                ir |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        l === null ? o = n : l.next = a,
        Ye(n, t.memoizedState) || (_e = !0),
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
            q.lanes |= i,
            ir |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function xo(e) {
    var t = Ue()
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
        Ye(i, t.memoizedState) || (_e = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function qd() {}
function Yd(e, t) {
    var r = q
      , n = Ue()
      , s = t()
      , i = !Ye(n.memoizedState, s);
    if (i && (n.memoizedState = s,
    _e = !0),
    n = n.queue,
    vl(Gd.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || ie !== null && ie.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        Gn(9, Qd.bind(null, r, n, s, t), void 0, null),
        oe === null)
            throw Error(j(349));
        sr & 30 || Jd(r, t, s)
    }
    return s
}
function Jd(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
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
        return !Ye(e, r)
    } catch {
        return !0
    }
}
function Xd(e) {
    var t = ct(e, 1);
    t !== null && qe(t, e, 1, -1)
}
function Eu(e) {
    var t = Ke();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Rm.bind(null, q, e),
    [t.memoizedState, e]
}
function Gn(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function Zd() {
    return Ue().memoizedState
}
function Ws(e, t, r, n) {
    var s = Ke();
    q.flags |= e,
    s.memoizedState = Gn(1 | t, r, void 0, n === void 0 ? null : n)
}
function Ci(e, t, r, n) {
    var s = Ue();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (te !== null) {
        var o = te.memoizedState;
        if (i = o.destroy,
        n !== null && pl(n, o.deps)) {
            s.memoizedState = Gn(t, r, i, n);
            return
        }
    }
    q.flags |= e,
    s.memoizedState = Gn(1 | t, r, i, n)
}
function Nu(e, t) {
    return Ws(8390656, 8, e, t)
}
function vl(e, t) {
    return Ci(2048, 8, e, t)
}
function eh(e, t) {
    return Ci(4, 2, e, t)
}
function th(e, t) {
    return Ci(4, 4, e, t)
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
    Ci(4, 4, rh.bind(null, t, e), r)
}
function yl() {}
function sh(e, t) {
    var r = Ue();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && pl(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function ih(e, t) {
    var r = Ue();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && pl(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function oh(e, t, r) {
    return sr & 21 ? (Ye(r, t) || (r = dd(),
    q.lanes |= r,
    ir |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    _e = !0),
    e.memoizedState = r)
}
function Tm(e, t) {
    var r = U;
    U = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = yo.transition;
    yo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        U = r,
        yo.transition = n
    }
}
function ah() {
    return Ue().memoizedState
}
function Om(e, t, r) {
    var n = $t(e);
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
        var s = me();
        qe(r, e, n, s),
        ch(r, t, n)
    }
}
function Rm(e, t, r) {
    var n = $t(e)
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
                Ye(a, o)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    ul(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        r = Wd(e, t, s, n),
        r !== null && (s = me(),
        qe(r, e, n, s),
        ch(r, t, n))
    }
}
function lh(e) {
    var t = e.alternate;
    return e === q || t !== null && t === q
}
function uh(e, t) {
    Cn = di = !0;
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
        Qa(e, r)
    }
}
var hi = {
    readContext: Me,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1
}
  , Lm = {
    readContext: Me,
    useCallback: function(e, t) {
        return Ke().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Me,
    useEffect: Nu,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        Ws(4194308, 4, rh.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return Ws(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ws(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = Ke();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = Ke();
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
        e = e.dispatch = Om.bind(null, q, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ke();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Eu,
    useDebugValue: yl,
    useDeferredValue: function(e) {
        return Ke().memoizedState = e
    },
    useTransition: function() {
        var e = Eu(!1)
          , t = e[0];
        return e = Tm.bind(null, e[1]),
        Ke().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = q
          , s = Ke();
        if (V) {
            if (r === void 0)
                throw Error(j(407));
            r = r()
        } else {
            if (r = t(),
            oe === null)
                throw Error(j(349));
            sr & 30 || Jd(n, t, r)
        }
        s.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: t
        };
        return s.queue = i,
        Nu(Gd.bind(null, n, i, e), [e]),
        n.flags |= 2048,
        Gn(9, Qd.bind(null, n, i, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = Ke()
          , t = oe.identifierPrefix;
        if (V) {
            var r = ot
              , n = it;
            r = (n & ~(1 << 32 - He(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = Jn++,
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
    readContext: Me,
    useCallback: sh,
    useContext: Me,
    useEffect: vl,
    useImperativeHandle: nh,
    useInsertionEffect: eh,
    useLayoutEffect: th,
    useMemo: ih,
    useReducer: wo,
    useRef: Zd,
    useState: function() {
        return wo(Qn)
    },
    useDebugValue: yl,
    useDeferredValue: function(e) {
        var t = Ue();
        return oh(t, te.memoizedState, e)
    },
    useTransition: function() {
        var e = wo(Qn)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: Yd,
    useId: ah,
    unstable_isNewReconciler: !1
}
  , Dm = {
    readContext: Me,
    useCallback: sh,
    useContext: Me,
    useEffect: vl,
    useImperativeHandle: nh,
    useInsertionEffect: eh,
    useLayoutEffect: th,
    useMemo: ih,
    useReducer: xo,
    useRef: Zd,
    useState: function() {
        return xo(Qn)
    },
    useDebugValue: yl,
    useDeferredValue: function(e) {
        var t = Ue();
        return te === null ? t.memoizedState = e : oh(t, te.memoizedState, e)
    },
    useTransition: function() {
        var e = xo(Qn)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: Yd,
    useId: ah,
    unstable_isNewReconciler: !1
};
function Fe(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
function ca(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : Y({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Ti = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? cr(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = me()
          , s = $t(e)
          , i = at(n, s);
        i.payload = t,
        r != null && (i.callback = r),
        t = Rt(e, i, s),
        t !== null && (qe(t, e, s, n),
        Fs(t, e, s))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = me()
          , s = $t(e)
          , i = at(n, s);
        i.tag = 1,
        i.payload = t,
        r != null && (i.callback = r),
        t = Rt(e, i, s),
        t !== null && (qe(t, e, s, n),
        Fs(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = me()
          , n = $t(e)
          , s = at(r, n);
        s.tag = 2,
        t != null && (s.callback = t),
        t = Rt(e, s, n),
        t !== null && (qe(t, e, n, r),
        Fs(t, e, n))
    }
};
function Pu(e, t, r, n, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(r, n) || !Bn(s, i) : !0
}
function dh(e, t, r) {
    var n = !1
      , s = Mt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Me(i) : (s = Se(t) ? rr : fe.current,
    n = t.contextTypes,
    i = (n = n != null) ? zr(e, s) : Mt),
    t = new t(r,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ti,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Cu(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ti.enqueueReplaceState(t, t.state, null)
}
function da(e, t, r, n) {
    var s = e.stateNode;
    s.props = r,
    s.state = e.memoizedState,
    s.refs = {},
    cl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = Me(i) : (i = Se(t) ? rr : fe.current,
    s.context = zr(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ca(e, t, i, r),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Ti.enqueueReplaceState(s, s.state, null),
    ui(e, r, s, n),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Vr(e, t) {
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
function _o(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function ha(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Im = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, r) {
    r = at(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        pi || (pi = !0,
        ka = n),
        ha(e, t)
    }
    ,
    r
}
function fh(e, t, r) {
    r = at(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = t.value;
        r.payload = function() {
            return n(s)
        }
        ,
        r.callback = function() {
            ha(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        ha(e, t),
        typeof n != "function" && (Lt === null ? Lt = new Set([this]) : Lt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    r
}
function Tu(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Im;
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
function Ou(e) {
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
function Ru(e, t, r, n, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = at(-1, 1),
    t.tag = 2,
    Rt(r, t, 1))),
    r.lanes |= 1),
    e)
}
var Am = ft.ReactCurrentOwner
  , _e = !1;
function pe(e, t, r, n) {
    t.child = e === null ? Bd(t, null, r, n) : Br(t, e.child, r, n)
}
function Lu(e, t, r, n, s) {
    r = r.render;
    var i = t.ref;
    return Ir(t, s),
    n = ml(e, t, r, n, i, s),
    r = gl(),
    e !== null && !_e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    dt(e, t, s)) : (V && r && nl(t),
    t.flags |= 1,
    pe(e, t, n, s),
    t.child)
}
function $u(e, t, r, n, s) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !El(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        ph(e, t, i, n, s)) : (e = Ys(r.type, null, n, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Bn,
        r(o, n) && e.ref === t.ref)
            return dt(e, t, s)
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
        if (Bn(i, n) && e.ref === t.ref)
            if (_e = !1,
            t.pendingProps = n = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (_e = !0);
            else
                return t.lanes = e.lanes,
                dt(e, t, s)
    }
    return fa(e, t, r, n, s)
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
            F(Or, Ne),
            Ne |= r;
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
                F(Or, Ne),
                Ne |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            F(Or, Ne),
            Ne |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        t.memoizedState = null) : n = r,
        F(Or, Ne),
        Ne |= n;
    return pe(e, t, s, r),
    t.child
}
function gh(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function fa(e, t, r, n, s) {
    var i = Se(r) ? rr : fe.current;
    return i = zr(t, i),
    Ir(t, s),
    r = ml(e, t, r, n, i, s),
    n = gl(),
    e !== null && !_e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    dt(e, t, s)) : (V && n && nl(t),
    t.flags |= 1,
    pe(e, t, r, s),
    t.child)
}
function Du(e, t, r, n, s) {
    if (Se(r)) {
        var i = !0;
        si(t)
    } else
        i = !1;
    if (Ir(t, s),
    t.stateNode === null)
        Vs(e, t),
        dh(t, r, n),
        da(t, r, n, s),
        n = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , c = r.contextType;
        typeof c == "object" && c !== null ? c = Me(c) : (c = Se(r) ? rr : fe.current,
        c = zr(t, c));
        var d = r.getDerivedStateFromProps
          , h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== c) && Cu(t, o, n, c),
        xt = !1;
        var f = t.memoizedState;
        o.state = f,
        ui(t, n, o, s),
        l = t.memoizedState,
        a !== n || f !== l || ke.current || xt ? (typeof d == "function" && (ca(t, r, d, n),
        l = t.memoizedState),
        (a = xt || Pu(t, r, a, n, f, l, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
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
        c = t.type === t.elementType ? a : Fe(t.type, a),
        o.props = c,
        h = t.pendingProps,
        f = o.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = Me(l) : (l = Se(r) ? rr : fe.current,
        l = zr(t, l));
        var w = r.getDerivedStateFromProps;
        (d = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || f !== l) && Cu(t, o, n, l),
        xt = !1,
        f = t.memoizedState,
        o.state = f,
        ui(t, n, o, s);
        var p = t.memoizedState;
        a !== h || f !== p || ke.current || xt ? (typeof w == "function" && (ca(t, r, w, n),
        p = t.memoizedState),
        (c = xt || Pu(t, r, c, n, f, p, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, p, l),
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
    return pa(e, t, r, n, i, s)
}
function pa(e, t, r, n, s, i) {
    gh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!n && !o)
        return s && xu(t, r, !1),
        dt(e, t, i);
    n = t.stateNode,
    Am.current = t;
    var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Br(t, e.child, null, i),
    t.child = Br(t, null, a, i)) : pe(e, t, a, i),
    t.memoizedState = n.state,
    s && xu(t, r, !0),
    t.child
}
function vh(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1),
    dl(e, t.containerInfo)
}
function Iu(e, t, r, n, s) {
    return Fr(),
    il(s),
    t.flags |= 256,
    pe(e, t, r, n),
    t.child
}
var ma = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ga(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function yh(e, t, r) {
    var n = t.pendingProps, s = H.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    F(H, s & 1),
    e === null)
        return la(t),
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
        i.pendingProps = o) : i = Li(o, n, 0, null),
        e = tr(e, n, r, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ga(r),
        t.memoizedState = ma,
        e) : wl(t, o));
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
        a !== null ? i = Dt(a, i) : (i = tr(i, o, r, null),
        i.flags |= 2),
        i.return = t,
        n.return = t,
        n.sibling = i,
        t.child = n,
        n = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? ga(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~r,
        t.memoizedState = ma,
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
function wl(e, t) {
    return t = Li({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ns(e, t, r, n) {
    return n !== null && il(n),
    Br(t, e.child, null, r),
    e = wl(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Mm(e, t, r, n, s, i, o) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = _o(Error(j(422))),
        Ns(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = n.fallback,
        s = t.mode,
        n = Li({
            mode: "visible",
            children: n.children
        }, s, 0, null),
        i = tr(i, s, o, null),
        i.flags |= 2,
        n.return = t,
        i.return = t,
        n.sibling = i,
        t.child = n,
        t.mode & 1 && Br(t, e.child, null, o),
        t.child.memoizedState = ga(o),
        t.memoizedState = ma,
        i);
    if (!(t.mode & 1))
        return Ns(e, t, o, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset,
        n)
            var a = n.dgst;
        return n = a,
        i = Error(j(419)),
        n = _o(i, n, void 0),
        Ns(e, t, o, n)
    }
    if (a = (o & e.childLanes) !== 0,
    _e || a) {
        if (n = oe,
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
            ct(e, s),
            qe(n, e, s, -1))
        }
        return jl(),
        n = _o(Error(j(421))),
        Ns(e, t, o, n)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Km.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    Pe = Ot(s.nextSibling),
    Ce = t,
    V = !0,
    Ve = null,
    e !== null && (Le[$e++] = it,
    Le[$e++] = ot,
    Le[$e++] = nr,
    it = e.id,
    ot = e.overflow,
    nr = t),
    t = wl(t, n.children),
    t.flags |= 4096,
    t)
}
function Au(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    ua(e.return, t, r)
}
function ko(e, t, r, n, s) {
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
    if (pe(e, t, n.children, r),
    n = H.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Au(e, r, t);
                else if (e.tag === 19)
                    Au(e, r, t);
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
    if (F(H, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (r = t.child,
            s = null; r !== null; )
                e = r.alternate,
                e !== null && ci(e) === null && (s = r),
                r = r.sibling;
            r = s,
            r === null ? (s = t.child,
            t.child = null) : (s = r.sibling,
            r.sibling = null),
            ko(t, !1, s, r, i);
            break;
        case "backwards":
            for (r = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && ci(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = r,
                r = s,
                s = e
            }
            ko(t, !0, r, null, i);
            break;
        case "together":
            ko(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Vs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function dt(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    ir |= t.lanes,
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
        Fr();
        break;
    case 5:
        Hd(t);
        break;
    case 1:
        Se(t.type) && si(t);
        break;
    case 4:
        dl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , s = t.memoizedProps.value;
        F(ai, n._currentValue),
        n._currentValue = s;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (F(H, H.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? yh(e, t, r) : (F(H, H.current & 1),
            e = dt(e, t, r),
            e !== null ? e.sibling : null);
        F(H, H.current & 1);
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
        F(H, H.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        mh(e, t, r)
    }
    return dt(e, t, r)
}
var xh, va, _h, kh;
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
va = function() {}
;
_h = function(e, t, r, n) {
    var s = e.memoizedProps;
    if (s !== n) {
        e = t.stateNode,
        Zt(et.current);
        var i = null;
        switch (r) {
        case "input":
            s = Uo(e, s),
            n = Uo(e, n),
            i = [];
            break;
        case "select":
            s = Y({}, s, {
                value: void 0
            }),
            n = Y({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = Bo(e, s),
            n = Bo(e, n),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ri)
        }
        Vo(r, n);
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
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Dn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
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
                    l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Dn.hasOwnProperty(c) ? (l != null && c === "onScroll" && B("scroll", e),
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
    if (!V)
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
function de(e) {
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
    switch (sl(t),
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
        return de(t),
        null;
    case 1:
        return Se(t.type) && ni(),
        de(t),
        null;
    case 3:
        return n = t.stateNode,
        Wr(),
        W(ke),
        W(fe),
        fl(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (js(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ve !== null && (ja(Ve),
        Ve = null))),
        va(e, t),
        de(t),
        null;
    case 5:
        hl(t);
        var s = Zt(Yn.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            _h(e, t, r, n, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return de(t),
                null
            }
            if (e = Zt(et.current),
            js(t)) {
                n = t.stateNode,
                r = t.type;
                var i = t.memoizedProps;
                switch (n[Xe] = t,
                n[Hn] = i,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    B("cancel", n),
                    B("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    B("load", n);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < kn.length; s++)
                        B(kn[s], n);
                    break;
                case "source":
                    B("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    B("error", n),
                    B("load", n);
                    break;
                case "details":
                    B("toggle", n);
                    break;
                case "input":
                    ql(n, i),
                    B("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    B("invalid", n);
                    break;
                case "textarea":
                    Jl(n, i),
                    B("invalid", n)
                }
                Vo(r, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && bs(n.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && bs(n.textContent, a, e),
                        s = ["children", "" + a]) : Dn.hasOwnProperty(o) && a != null && o === "onScroll" && B("scroll", n)
                    }
                switch (r) {
                case "input":
                    gs(n),
                    Yl(n, i, !0);
                    break;
                case "textarea":
                    gs(n),
                    Ql(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = ri)
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
                e[Xe] = t,
                e[Hn] = n,
                xh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Ho(r, n),
                    r) {
                    case "dialog":
                        B("cancel", e),
                        B("close", e),
                        s = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        B("load", e),
                        s = n;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < kn.length; s++)
                            B(kn[s], e);
                        s = n;
                        break;
                    case "source":
                        B("error", e),
                        s = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        B("error", e),
                        B("load", e),
                        s = n;
                        break;
                    case "details":
                        B("toggle", e),
                        s = n;
                        break;
                    case "input":
                        ql(e, n),
                        s = Uo(e, n),
                        B("invalid", e);
                        break;
                    case "option":
                        s = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        s = Y({}, n, {
                            value: void 0
                        }),
                        B("invalid", e);
                        break;
                    case "textarea":
                        Jl(e, n),
                        s = Bo(e, n),
                        B("invalid", e);
                        break;
                    default:
                        s = n
                    }
                    Vo(r, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Zc(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Kc(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && In(e, l) : typeof l == "number" && In(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Dn.hasOwnProperty(i) ? l != null && i === "onScroll" && B("scroll", e) : l != null && Wa(e, i, l, o))
                        }
                    switch (r) {
                    case "input":
                        gs(e),
                        Yl(e, n, !1);
                        break;
                    case "textarea":
                        gs(e),
                        Ql(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + At(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? Rr(e, !!n.multiple, i, !1) : n.defaultValue != null && Rr(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = ri)
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
        return de(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            kh(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(j(166));
            if (r = Zt(Yn.current),
            Zt(et.current),
            js(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[Xe] = t,
                (i = n.nodeValue !== r) && (e = Ce,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        bs(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && bs(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Xe] = t,
                t.stateNode = n
        }
        return de(t),
        null;
    case 13:
        if (W(H),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (V && Pe !== null && t.mode & 1 && !(t.flags & 128))
                zd(),
                Fr(),
                t.flags |= 98560,
                i = !1;
            else if (i = js(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[Xe] = t
                } else
                    Fr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                de(t),
                i = !1
            } else
                Ve !== null && (ja(Ve),
                Ve = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || H.current & 1 ? re === 0 && (re = 3) : jl())),
        t.updateQueue !== null && (t.flags |= 4),
        de(t),
        null);
    case 4:
        return Wr(),
        va(e, t),
        e === null && Wn(t.stateNode.containerInfo),
        de(t),
        null;
    case 10:
        return ll(t.type._context),
        de(t),
        null;
    case 17:
        return Se(t.type) && ni(),
        de(t),
        null;
    case 19:
        if (W(H),
        i = t.memoizedState,
        i === null)
            return de(t),
            null;
        if (n = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (n)
                hn(i, !1);
            else {
                if (re !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = ci(e),
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
                            return F(H, H.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && X() > Hr && (t.flags |= 128,
                n = !0,
                hn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = ci(o),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    hn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
                        return de(t),
                        null
                } else
                    2 * X() - i.renderingStartTime > Hr && r !== 1073741824 && (t.flags |= 128,
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
        i.renderingStartTime = X(),
        t.sibling = null,
        r = H.current,
        F(H, n ? r & 1 | 2 : r & 1),
        t) : (de(t),
        null);
    case 22:
    case 23:
        return bl(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? Ne & 1073741824 && (de(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Fm(e, t) {
    switch (sl(t),
    t.tag) {
    case 1:
        return Se(t.type) && ni(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Wr(),
        W(ke),
        W(fe),
        fl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return hl(t),
        null;
    case 13:
        if (W(H),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Fr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return W(H),
        null;
    case 4:
        return Wr(),
        null;
    case 10:
        return ll(t.type._context),
        null;
    case 22:
    case 23:
        return bl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ps = !1
  , he = !1
  , Bm = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function Tr(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                J(e, t, n)
            }
        else
            r.current = null
}
function ya(e, t, r) {
    try {
        r()
    } catch (n) {
        J(e, t, n)
    }
}
var Mu = !1;
function Wm(e, t) {
    if (ta = Zs,
    e = Nd(),
    rl(e)) {
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
    for (ra = {
        focusedElem: e,
        selectionRange: r
    },
    Zs = !1,
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
                                  , g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Fe(t.type, y), b);
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
                    J(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    P = e;
                    break
                }
                P = t.return
            }
    return p = Mu,
    Mu = !1,
    p
}
function Tn(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && ya(t, r, i)
            }
            s = s.next
        } while (s !== n)
    }
}
function Oi(e, t) {
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
function wa(e) {
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
    t !== null && (delete t[Xe],
    delete t[Hn],
    delete t[ia],
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
function Uu(e) {
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
function xa(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = ri));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (xa(e, t, r),
        e = e.sibling; e !== null; )
            xa(e, t, r),
            e = e.sibling
}
function _a(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (_a(e, t, r),
        e = e.sibling; e !== null; )
            _a(e, t, r),
            e = e.sibling
}
var ae = null
  , Be = !1;
function pt(e, t, r) {
    for (r = r.child; r !== null; )
        jh(e, t, r),
        r = r.sibling
}
function jh(e, t, r) {
    if (Ze && typeof Ze.onCommitFiberUnmount == "function")
        try {
            Ze.onCommitFiberUnmount(Si, r)
        } catch {}
    switch (r.tag) {
    case 5:
        he || Tr(r, t);
    case 6:
        var n = ae
          , s = Be;
        ae = null,
        pt(e, t, r),
        ae = n,
        Be = s,
        ae !== null && (Be ? (e = ae,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ae.removeChild(r.stateNode));
        break;
    case 18:
        ae !== null && (Be ? (e = ae,
        r = r.stateNode,
        e.nodeType === 8 ? mo(e.parentNode, r) : e.nodeType === 1 && mo(e, r),
        zn(e)) : mo(ae, r.stateNode));
        break;
    case 4:
        n = ae,
        s = Be,
        ae = r.stateNode.containerInfo,
        Be = !0,
        pt(e, t, r),
        ae = n,
        Be = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!he && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            s = n = n.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && ya(r, t, o),
                s = s.next
            } while (s !== n)
        }
        pt(e, t, r);
        break;
    case 1:
        if (!he && (Tr(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (a) {
                J(r, t, a)
            }
        pt(e, t, r);
        break;
    case 21:
        pt(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (he = (n = he) || r.memoizedState !== null,
        pt(e, t, r),
        he = n) : pt(e, t, r);
        break;
    default:
        pt(e, t, r)
    }
}
function zu(e) {
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
function ze(e, t) {
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
                        ae = a.stateNode,
                        Be = !1;
                        break e;
                    case 3:
                        ae = a.stateNode.containerInfo,
                        Be = !0;
                        break e;
                    case 4:
                        ae = a.stateNode.containerInfo,
                        Be = !0;
                        break e
                    }
                    a = a.return
                }
                if (ae === null)
                    throw Error(j(160));
                jh(i, o, s),
                ae = null,
                Be = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (c) {
                J(s, t, c)
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
        if (ze(t, e),
        Qe(e),
        n & 4) {
            try {
                Tn(3, e, e.return),
                Oi(3, e)
            } catch (y) {
                J(e, e.return, y)
            }
            try {
                Tn(5, e, e.return)
            } catch (y) {
                J(e, e.return, y)
            }
        }
        break;
    case 1:
        ze(t, e),
        Qe(e),
        n & 512 && r !== null && Tr(r, r.return);
        break;
    case 5:
        if (ze(t, e),
        Qe(e),
        n & 512 && r !== null && Tr(r, r.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                In(s, "")
            } catch (y) {
                J(e, e.return, y)
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
                    Ho(a, o);
                    var c = Ho(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o]
                          , h = l[o + 1];
                        d === "style" ? Zc(s, h) : d === "dangerouslySetInnerHTML" ? Kc(s, h) : d === "children" ? In(s, h) : Wa(s, d, h, c)
                    }
                    switch (a) {
                    case "input":
                        zo(s, i);
                        break;
                    case "textarea":
                        Qc(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var w = i.value;
                        w != null ? Rr(s, !!i.multiple, w, !1) : f !== !!i.multiple && (i.defaultValue != null ? Rr(s, !!i.multiple, i.defaultValue, !0) : Rr(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Hn] = i
                } catch (y) {
                    J(e, e.return, y)
                }
        }
        break;
    case 6:
        if (ze(t, e),
        Qe(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (y) {
                J(e, e.return, y)
            }
        }
        break;
    case 3:
        if (ze(t, e),
        Qe(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                zn(t.containerInfo)
            } catch (y) {
                J(e, e.return, y)
            }
        break;
    case 4:
        ze(t, e),
        Qe(e);
        break;
    case 13:
        ze(t, e),
        Qe(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (kl = X())),
        n & 4 && zu(e);
        break;
    case 22:
        if (d = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (he = (c = he) || d,
        ze(t, e),
        he = c) : ze(t, e),
        Qe(e),
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
                            Tn(4, f, f.return);
                            break;
                        case 1:
                            Tr(f, f.return);
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
                                    J(n, r, y)
                                }
                            }
                            break;
                        case 5:
                            Tr(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Bu(h);
                                continue
                            }
                        }
                        w !== null ? (w.return = f,
                        P = w) : Bu(h)
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
                            J(e, e.return, y)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (y) {
                            J(e, e.return, y)
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
        ze(t, e),
        Qe(e),
        n & 4 && zu(e);
        break;
    case 21:
        break;
    default:
        ze(t, e),
        Qe(e)
    }
}
function Qe(e) {
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
                var i = Uu(e);
                _a(e, i, s);
                break;
            case 3:
            case 4:
                var o = n.stateNode.containerInfo
                  , a = Uu(e);
                xa(e, a, o);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            J(e, e.return, l)
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
            var o = s.memoizedState !== null || Ps;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || he;
                a = Ps;
                var c = he;
                if (Ps = o,
                (he = l) && !c)
                    for (P = s; P !== null; )
                        o = P,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Wu(s) : l !== null ? (l.return = o,
                        P = l) : Wu(s);
                for (; i !== null; )
                    P = i,
                    Nh(i),
                    i = i.sibling;
                P = s,
                Ps = a,
                he = c
            }
            Fu(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            P = i) : Fu(e)
    }
}
function Fu(e) {
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
                        he || Oi(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !he)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? r.memoizedProps : Fe(t.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && ju(t, i, n);
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
                            ju(t, o, r)
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
                                    h !== null && zn(h)
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
                he || t.flags & 512 && wa(t)
            } catch (f) {
                J(t, t.return, f)
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
function Bu(e) {
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
function Wu(e) {
    for (; P !== null; ) {
        var t = P;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    Oi(4, t)
                } catch (l) {
                    J(t, r, l)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        J(t, s, l)
                    }
                }
                var i = t.return;
                try {
                    wa(t)
                } catch (l) {
                    J(t, i, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    wa(t)
                } catch (l) {
                    J(t, o, l)
                }
            }
        } catch (l) {
            J(t, t.return, l)
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
  , fi = ft.ReactCurrentDispatcher
  , xl = ft.ReactCurrentOwner
  , Ie = ft.ReactCurrentBatchConfig
  , A = 0
  , oe = null
  , Z = null
  , le = 0
  , Ne = 0
  , Or = zt(0)
  , re = 0
  , Kn = null
  , ir = 0
  , Ri = 0
  , _l = 0
  , On = null
  , we = null
  , kl = 0
  , Hr = 1 / 0
  , rt = null
  , pi = !1
  , ka = null
  , Lt = null
  , Cs = !1
  , Et = null
  , mi = 0
  , Rn = 0
  , Sa = null
  , Hs = -1
  , qs = 0;
function me() {
    return A & 6 ? X() : Hs !== -1 ? Hs : Hs = X()
}
function $t(e) {
    return e.mode & 1 ? A & 2 && le !== 0 ? le & -le : Pm.transition !== null ? (qs === 0 && (qs = dd()),
    qs) : (e = U,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : yd(e.type)),
    e) : 1
}
function qe(e, t, r, n) {
    if (50 < Rn)
        throw Rn = 0,
        Sa = null,
        Error(j(185));
    ss(e, r, n),
    (!(A & 2) || e !== oe) && (e === oe && (!(A & 2) && (Ri |= r),
    re === 4 && St(e, le)),
    be(e, n),
    r === 1 && A === 0 && !(t.mode & 1) && (Hr = X() + 500,
    Pi && Ft()))
}
function be(e, t) {
    var r = e.callbackNode;
    Pp(e, t);
    var n = Xs(e, e === oe ? le : 0);
    if (n === 0)
        r !== null && Xl(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && Xl(r),
        t === 1)
            e.tag === 0 ? Nm(Vu.bind(null, e)) : Ad(Vu.bind(null, e)),
            Sm(function() {
                !(A & 6) && Ft()
            }),
            r = null;
        else {
            switch (hd(n)) {
            case 1:
                r = Ja;
                break;
            case 4:
                r = ud;
                break;
            case 16:
                r = Ks;
                break;
            case 536870912:
                r = cd;
                break;
            default:
                r = Ks
            }
            r = Dh(r, Ph.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function Ph(e, t) {
    if (Hs = -1,
    qs = 0,
    A & 6)
        throw Error(j(327));
    var r = e.callbackNode;
    if (Ar() && e.callbackNode !== r)
        return null;
    var n = Xs(e, e === oe ? le : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = gi(e, n);
    else {
        t = n;
        var s = A;
        A |= 2;
        var i = Th();
        (oe !== e || le !== t) && (rt = null,
        Hr = X() + 500,
        er(e, t));
        do
            try {
                Jm();
                break
            } catch (a) {
                Ch(e, a)
            }
        while (!0);
        al(),
        fi.current = i,
        A = s,
        Z !== null ? t = 0 : (oe = null,
        le = 0,
        t = re)
    }
    if (t !== 0) {
        if (t === 2 && (s = Go(e),
        s !== 0 && (n = s,
        t = ba(e, s))),
        t === 1)
            throw r = Kn,
            er(e, 0),
            St(e, n),
            be(e, X()),
            r;
        if (t === 6)
            St(e, n);
        else {
            if (s = e.current.alternate,
            !(n & 30) && !qm(s) && (t = gi(e, n),
            t === 2 && (i = Go(e),
            i !== 0 && (n = i,
            t = ba(e, i))),
            t === 1))
                throw r = Kn,
                er(e, 0),
                St(e, n),
                be(e, X()),
                r;
            switch (e.finishedWork = s,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Yt(e, we, rt);
                break;
            case 3:
                if (St(e, n),
                (n & 130023424) === n && (t = kl + 500 - X(),
                10 < t)) {
                    if (Xs(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & n) !== n) {
                        me(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = sa(Yt.bind(null, e, we, rt), t);
                    break
                }
                Yt(e, we, rt);
                break;
            case 4:
                if (St(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < n; ) {
                    var o = 31 - He(n);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    n &= ~i
                }
                if (n = s,
                n = X() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Hm(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = sa(Yt.bind(null, e, we, rt), n);
                    break
                }
                Yt(e, we, rt);
                break;
            case 5:
                Yt(e, we, rt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return be(e, X()),
    e.callbackNode === r ? Ph.bind(null, e) : null
}
function ba(e, t) {
    var r = On;
    return e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    e = gi(e, t),
    e !== 2 && (t = we,
    we = r,
    t !== null && ja(t)),
    e
}
function ja(e) {
    we === null ? we = e : we.push.apply(we, e)
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
                        if (!Ye(i(), s))
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
function St(e, t) {
    for (t &= ~_l,
    t &= ~Ri,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - He(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function Vu(e) {
    if (A & 6)
        throw Error(j(327));
    Ar();
    var t = Xs(e, 0);
    if (!(t & 1))
        return be(e, X()),
        null;
    var r = gi(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = Go(e);
        n !== 0 && (t = n,
        r = ba(e, n))
    }
    if (r === 1)
        throw r = Kn,
        er(e, 0),
        St(e, t),
        be(e, X()),
        r;
    if (r === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Yt(e, we, rt),
    be(e, X()),
    null
}
function Sl(e, t) {
    var r = A;
    A |= 1;
    try {
        return e(t)
    } finally {
        A = r,
        A === 0 && (Hr = X() + 500,
        Pi && Ft())
    }
}
function or(e) {
    Et !== null && Et.tag === 0 && !(A & 6) && Ar();
    var t = A;
    A |= 1;
    var r = Ie.transition
      , n = U;
    try {
        if (Ie.transition = null,
        U = 1,
        e)
            return e()
    } finally {
        U = n,
        Ie.transition = r,
        A = t,
        !(A & 6) && Ft()
    }
}
function bl() {
    Ne = Or.current,
    W(Or)
}
function er(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    km(r)),
    Z !== null)
        for (r = Z.return; r !== null; ) {
            var n = r;
            switch (sl(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && ni();
                break;
            case 3:
                Wr(),
                W(ke),
                W(fe),
                fl();
                break;
            case 5:
                hl(n);
                break;
            case 4:
                Wr();
                break;
            case 13:
                W(H);
                break;
            case 19:
                W(H);
                break;
            case 10:
                ll(n.type._context);
                break;
            case 22:
            case 23:
                bl()
            }
            r = r.return
        }
    if (oe = e,
    Z = e = Dt(e.current, null),
    le = Ne = t,
    re = 0,
    Kn = null,
    _l = Ri = ir = 0,
    we = On = null,
    Xt !== null) {
        for (t = 0; t < Xt.length; t++)
            if (r = Xt[t],
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
        Xt = null
    }
    return e
}
function Ch(e, t) {
    do {
        var r = Z;
        try {
            if (al(),
            Bs.current = hi,
            di) {
                for (var n = q.memoizedState; n !== null; ) {
                    var s = n.queue;
                    s !== null && (s.pending = null),
                    n = n.next
                }
                di = !1
            }
            if (sr = 0,
            ie = te = q = null,
            Cn = !1,
            Jn = 0,
            xl.current = null,
            r === null || r.return === null) {
                re = 1,
                Kn = t,
                Z = null;
                break
            }
            e: {
                var i = e
                  , o = r.return
                  , a = r
                  , l = t;
                if (t = le,
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
                    var w = Ou(o);
                    if (w !== null) {
                        w.flags &= -257,
                        Ru(w, o, a, i, t),
                        w.mode & 1 && Tu(i, c, t),
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
                            Tu(i, c, t),
                            jl();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (V && a.mode & 1) {
                    var b = Ou(o);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256),
                        Ru(b, o, a, i, t),
                        il(Vr(l, a));
                        break e
                    }
                }
                i = l = Vr(l, a),
                re !== 4 && (re = 2),
                On === null ? On = [i] : On.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = hh(i, l, t);
                        bu(i, m);
                        break e;
                    case 1:
                        a = l;
                        var g = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Lt === null || !Lt.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var x = fh(i, a, t);
                            bu(i, x);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Rh(r)
        } catch (S) {
            t = S,
            Z === r && r !== null && (Z = r = r.return);
            continue
        }
        break
    } while (!0)
}
function Th() {
    var e = fi.current;
    return fi.current = hi,
    e === null ? hi : e
}
function jl() {
    (re === 0 || re === 3 || re === 2) && (re = 4),
    oe === null || !(ir & 268435455) && !(Ri & 268435455) || St(oe, le)
}
function gi(e, t) {
    var r = A;
    A |= 2;
    var n = Th();
    (oe !== e || le !== t) && (rt = null,
    er(e, t));
    do
        try {
            Ym();
            break
        } catch (s) {
            Ch(e, s)
        }
    while (!0);
    if (al(),
    A = r,
    fi.current = n,
    Z !== null)
        throw Error(j(261));
    return oe = null,
    le = 0,
    re
}
function Ym() {
    for (; Z !== null; )
        Oh(Z)
}
function Jm() {
    for (; Z !== null && !wp(); )
        Oh(Z)
}
function Oh(e) {
    var t = $h(e.alternate, e, Ne);
    e.memoizedProps = e.pendingProps,
    t === null ? Rh(e) : Z = t,
    xl.current = null
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
                Z = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                re = 6,
                Z = null;
                return
            }
        } else if (r = zm(r, t, Ne),
        r !== null) {
            Z = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Z = t;
            return
        }
        Z = t = e
    } while (t !== null);
    re === 0 && (re = 5)
}
function Yt(e, t, r) {
    var n = U
      , s = Ie.transition;
    try {
        Ie.transition = null,
        U = 1,
        Qm(e, t, r, n)
    } finally {
        Ie.transition = s,
        U = n
    }
    return null
}
function Qm(e, t, r, n) {
    do
        Ar();
    while (Et !== null);
    if (A & 6)
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
    e === oe && (Z = oe = null,
    le = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Cs || (Cs = !0,
    Dh(Ks, function() {
        return Ar(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = Ie.transition,
        Ie.transition = null;
        var o = U;
        U = 1;
        var a = A;
        A |= 4,
        xl.current = null,
        Wm(e, r),
        Eh(r, e),
        mm(ra),
        Zs = !!ta,
        ra = ta = null,
        e.current = r,
        Vm(r),
        xp(),
        A = a,
        U = o,
        Ie.transition = i
    } else
        e.current = r;
    if (Cs && (Cs = !1,
    Et = e,
    mi = s),
    i = e.pendingLanes,
    i === 0 && (Lt = null),
    Sp(r.stateNode),
    be(e, X()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            s = t[r],
            n(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (pi)
        throw pi = !1,
        e = ka,
        ka = null,
        e;
    return mi & 1 && e.tag !== 0 && Ar(),
    i = e.pendingLanes,
    i & 1 ? e === Sa ? Rn++ : (Rn = 0,
    Sa = e) : Rn = 0,
    Ft(),
    null
}
function Ar() {
    if (Et !== null) {
        var e = hd(mi)
          , t = Ie.transition
          , r = U;
        try {
            if (Ie.transition = null,
            U = 16 > e ? 16 : e,
            Et === null)
                var n = !1;
            else {
                if (e = Et,
                Et = null,
                mi = 0,
                A & 6)
                    throw Error(j(331));
                var s = A;
                for (A |= 4,
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
                                        Tn(8, d, i)
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
                                    Tn(9, i, i.return)
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
                                        Oi(9, a)
                                    }
                                } catch (S) {
                                    J(a, a.return, S)
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
                if (A = s,
                Ft(),
                Ze && typeof Ze.onPostCommitFiberRoot == "function")
                    try {
                        Ze.onPostCommitFiberRoot(Si, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            U = r,
            Ie.transition = t
        }
    }
    return !1
}
function Hu(e, t, r) {
    t = Vr(r, t),
    t = hh(e, t, 1),
    e = Rt(e, t, 1),
    t = me(),
    e !== null && (ss(e, 1, t),
    be(e, t))
}
function J(e, t, r) {
    if (e.tag === 3)
        Hu(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Hu(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Lt === null || !Lt.has(n))) {
                    e = Vr(r, e),
                    e = fh(t, e, 1),
                    t = Rt(t, e, 1),
                    e = me(),
                    t !== null && (ss(t, 1, e),
                    be(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Gm(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = me(),
    e.pingedLanes |= e.suspendedLanes & r,
    oe === e && (le & r) === r && (re === 4 || re === 3 && (le & 130023424) === le && 500 > X() - kl ? er(e, 0) : _l |= r),
    be(e, t)
}
function Lh(e, t) {
    t === 0 && (e.mode & 1 ? (t = ws,
    ws <<= 1,
    !(ws & 130023424) && (ws = 4194304)) : t = 1);
    var r = me();
    e = ct(e, t),
    e !== null && (ss(e, t, r),
    be(e, r))
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
        if (e.memoizedProps !== t.pendingProps || ke.current)
            _e = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return _e = !1,
                Um(e, t, r);
            _e = !!(e.flags & 131072)
        }
    else
        _e = !1,
        V && t.flags & 1048576 && Md(t, oi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        Vs(e, t),
        e = t.pendingProps;
        var s = zr(t, fe.current);
        Ir(t, r),
        s = ml(null, t, n, e, s, r);
        var i = gl();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Se(n) ? (i = !0,
        si(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        cl(t),
        s.updater = Ti,
        t.stateNode = s,
        s._reactInternals = t,
        da(t, n, e, r),
        t = pa(null, t, n, !0, i, r)) : (t.tag = 0,
        V && i && nl(t),
        pe(null, t, s, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (Vs(e, t),
            e = t.pendingProps,
            s = n._init,
            n = s(n._payload),
            t.type = n,
            s = t.tag = eg(n),
            e = Fe(n, e),
            s) {
            case 0:
                t = fa(null, t, n, e, r);
                break e;
            case 1:
                t = Du(null, t, n, e, r);
                break e;
            case 11:
                t = Lu(null, t, n, e, r);
                break e;
            case 14:
                t = $u(null, t, n, Fe(n.type, e), r);
                break e
            }
            throw Error(j(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Fe(n, s),
        fa(e, t, n, s, r);
    case 1:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Fe(n, s),
        Du(e, t, n, s, r);
    case 3:
        e: {
            if (vh(t),
            e === null)
                throw Error(j(387));
            n = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            Vd(e, t),
            ui(t, n, null, r);
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
                    s = Vr(Error(j(423)), t),
                    t = Iu(e, t, n, r, s);
                    break e
                } else if (n !== s) {
                    s = Vr(Error(j(424)), t),
                    t = Iu(e, t, n, r, s);
                    break e
                } else
                    for (Pe = Ot(t.stateNode.containerInfo.firstChild),
                    Ce = t,
                    V = !0,
                    Ve = null,
                    r = Bd(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Fr(),
                n === s) {
                    t = dt(e, t, r);
                    break e
                }
                pe(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return Hd(t),
        e === null && la(t),
        n = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        na(n, s) ? o = null : i !== null && na(n, i) && (t.flags |= 32),
        gh(e, t),
        pe(e, t, o, r),
        t.child;
    case 6:
        return e === null && la(t),
        null;
    case 13:
        return yh(e, t, r);
    case 4:
        return dl(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Br(t, null, n, r) : pe(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Fe(n, s),
        Lu(e, t, n, s, r);
    case 7:
        return pe(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return pe(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return pe(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            F(ai, n._currentValue),
            n._currentValue = o,
            i !== null)
                if (Ye(i.value, o)) {
                    if (i.children === s.children && !ke.current) {
                        t = dt(e, t, r);
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
                                        l = at(-1, r & -r),
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
                                    ua(i.return, r, t),
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
                            ua(o, r, t),
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
            pe(e, t, s.children, r),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        n = t.pendingProps.children,
        Ir(t, r),
        s = Me(s),
        n = n(s),
        t.flags |= 1,
        pe(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        s = Fe(n, t.pendingProps),
        s = Fe(n.type, s),
        $u(e, t, n, s, r);
    case 15:
        return ph(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        s = t.pendingProps,
        s = t.elementType === n ? s : Fe(n, s),
        Vs(e, t),
        t.tag = 1,
        Se(n) ? (e = !0,
        si(t)) : e = !1,
        Ir(t, r),
        dh(t, n, s),
        da(t, n, s, r),
        pa(null, t, n, !0, e, r);
    case 19:
        return wh(e, t, r);
    case 22:
        return mh(e, t, r)
    }
    throw Error(j(156, t.tag))
}
;
function Dh(e, t) {
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
function El(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function eg(e) {
    if (typeof e == "function")
        return El(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ha)
            return 11;
        if (e === qa)
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
function Ys(e, t, r, n, s, i) {
    var o = 2;
    if (n = e,
    typeof e == "function")
        El(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case _r:
            return tr(r.children, s, i, t);
        case Va:
            o = 8,
            s |= 8;
            break;
        case Do:
            return e = De(12, r, t, s | 2),
            e.elementType = Do,
            e.lanes = i,
            e;
        case Io:
            return e = De(13, r, t, s),
            e.elementType = Io,
            e.lanes = i,
            e;
        case Ao:
            return e = De(19, r, t, s),
            e.elementType = Ao,
            e.lanes = i,
            e;
        case Hc:
            return Li(r, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wc:
                    o = 10;
                    break e;
                case Vc:
                    o = 9;
                    break e;
                case Ha:
                    o = 11;
                    break e;
                case qa:
                    o = 14;
                    break e;
                case wt:
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
function tr(e, t, r, n) {
    return e = De(7, e, n, t),
    e.lanes = r,
    e
}
function Li(e, t, r, n) {
    return e = De(22, e, n, t),
    e.elementType = Hc,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function So(e, t, r) {
    return e = De(6, e, null, t),
    e.lanes = r,
    e
}
function bo(e, t, r) {
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
    this.eventTimes = no(0),
    this.expirationTimes = no(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = no(0),
    this.identifierPrefix = n,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Nl(e, t, r, n, s, i, o, a, l) {
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
    cl(i),
    e
}
function rg(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: xr,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function Ih(e) {
    if (!e)
        return Mt;
    e = e._reactInternals;
    e: {
        if (cr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Se(t.type)) {
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
        if (Se(r))
            return Id(e, r, t)
    }
    return t
}
function Ah(e, t, r, n, s, i, o, a, l) {
    return e = Nl(r, n, !0, e, s, i, o, a, l),
    e.context = Ih(null),
    r = e.current,
    n = me(),
    s = $t(r),
    i = at(n, s),
    i.callback = t ?? null,
    Rt(r, i, s),
    e.current.lanes = s,
    ss(e, s, n),
    be(e, n),
    e
}
function $i(e, t, r, n) {
    var s = t.current
      , i = me()
      , o = $t(s);
    return r = Ih(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = at(i, o),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = Rt(s, t, o),
    e !== null && (qe(e, s, o, i),
    Fs(e, s, o)),
    o
}
function vi(e) {
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
function qu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function Pl(e, t) {
    qu(e, t),
    (e = e.alternate) && qu(e, t)
}
function ng() {
    return null
}
var Mh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Cl(e) {
    this._internalRoot = e
}
Di.prototype.render = Cl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    $i(e, t, null, null)
}
;
Di.prototype.unmount = Cl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        or(function() {
            $i(null, e, null, null)
        }),
        t[ut] = null
    }
}
;
function Di(e) {
    this._internalRoot = e
}
Di.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = md();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < kt.length && t !== 0 && t < kt[r].priority; r++)
            ;
        kt.splice(r, 0, e),
        r === 0 && vd(e)
    }
}
;
function Tl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ii(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Yu() {}
function sg(e, t, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var c = vi(o);
                i.call(c)
            }
        }
        var o = Ah(t, n, e, 0, null, !1, !1, "", Yu);
        return e._reactRootContainer = o,
        e[ut] = o.current,
        Wn(e.nodeType === 8 ? e.parentNode : e),
        or(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof n == "function") {
        var a = n;
        n = function() {
            var c = vi(l);
            a.call(c)
        }
    }
    var l = Nl(e, 0, !1, null, null, !1, !1, "", Yu);
    return e._reactRootContainer = l,
    e[ut] = l.current,
    Wn(e.nodeType === 8 ? e.parentNode : e),
    or(function() {
        $i(t, l, r, n)
    }),
    l
}
function Ai(e, t, r, n, s) {
    var i = r._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = vi(o);
                a.call(l)
            }
        }
        $i(t, o, e, s)
    } else
        o = sg(r, t, e, s, n);
    return vi(o)
}
fd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = _n(t.pendingLanes);
            r !== 0 && (Qa(t, r | 1),
            be(t, X()),
            !(A & 6) && (Hr = X() + 500,
            Ft()))
        }
        break;
    case 13:
        or(function() {
            var n = ct(e, 1);
            if (n !== null) {
                var s = me();
                qe(n, e, 1, s)
            }
        }),
        Pl(e, 1)
    }
}
;
Ga = function(e) {
    if (e.tag === 13) {
        var t = ct(e, 134217728);
        if (t !== null) {
            var r = me();
            qe(t, e, 134217728, r)
        }
        Pl(e, 134217728)
    }
}
;
pd = function(e) {
    if (e.tag === 13) {
        var t = $t(e)
          , r = ct(e, t);
        if (r !== null) {
            var n = me();
            qe(r, e, t, n)
        }
        Pl(e, t)
    }
}
;
md = function() {
    return U
}
;
gd = function(e, t) {
    var r = U;
    try {
        return U = e,
        t()
    } finally {
        U = r
    }
}
;
Yo = function(e, t, r) {
    switch (t) {
    case "input":
        if (zo(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var s = Ni(n);
                    if (!s)
                        throw Error(j(90));
                    Yc(n),
                    zo(n, s)
                }
            }
        }
        break;
    case "textarea":
        Qc(e, r);
        break;
    case "select":
        t = r.value,
        t != null && Rr(e, !!r.multiple, t, !1)
    }
}
;
rd = Sl;
nd = or;
var ig = {
    usingClientEntryPoint: !1,
    Events: [os, jr, Ni, ed, td, Sl]
}
  , fn = {
    findFiberByHostInstance: Kt,
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
    currentDispatcherRef: ft.ReactCurrentDispatcher,
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
    var Ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ts.isDisabled && Ts.supportsFiber)
        try {
            Si = Ts.inject(og),
            Ze = Ts
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
Oe.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Tl(t))
        throw Error(j(200));
    return rg(e, t, null, r)
}
;
Oe.createRoot = function(e, t) {
    if (!Tl(e))
        throw Error(j(299));
    var r = !1
      , n = ""
      , s = Mh;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Nl(e, 1, !1, null, null, r, !1, n, s),
    e[ut] = t.current,
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Cl(t)
}
;
Oe.findDOMNode = function(e) {
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
Oe.flushSync = function(e) {
    return or(e)
}
;
Oe.hydrate = function(e, t, r) {
    if (!Ii(t))
        throw Error(j(200));
    return Ai(null, e, t, !0, r)
}
;
Oe.hydrateRoot = function(e, t, r) {
    if (!Tl(e))
        throw Error(j(405));
    var n = r != null && r.hydratedSources || null
      , s = !1
      , i = ""
      , o = Mh;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    t = Ah(t, null, e, 1, r ?? null, s, !1, i, o),
    e[ut] = t.current,
    Wn(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            s = r._getVersion,
            s = s(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, s] : t.mutableSourceEagerHydrationData.push(r, s);
    return new Di(t)
}
;
Oe.render = function(e, t, r) {
    if (!Ii(t))
        throw Error(j(200));
    return Ai(null, e, t, !1, r)
}
;
Oe.unmountComponentAtNode = function(e) {
    if (!Ii(e))
        throw Error(j(40));
    return e._reactRootContainer ? (or(function() {
        Ai(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ut] = null
        })
    }),
    !0) : !1
}
;
Oe.unstable_batchedUpdates = Sl;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!Ii(r))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Ai(e, t, r, !1, n)
}
;
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Uh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)
        } catch (e) {
            console.error(e)
        }
}
Uh(),
Uc.exports = Oe;
var ag = Uc.exports, zh, Ju = ag;
zh = Ju.createRoot,
Ju.hydrateRoot;
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
var Nt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Nt || (Nt = {}));
const Qu = "popstate";
function lg(e) {
    e === void 0 && (e = {});
    function t(n, s) {
        let {pathname: i, search: o, hash: a} = n.location;
        return Ea("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function r(n, s) {
        return typeof s == "string" ? s : yi(s)
    }
    return cg(t, r, null, e)
}
function ee(e, t) {
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
function Gu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ea(e, t, r, n) {
    return r === void 0 && (r = null),
    Xn({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? en(t) : t, {
        state: r,
        key: t && t.key || n || ug()
    })
}
function yi(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function en(e) {
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
      , a = Nt.Pop
      , l = null
      , c = d();
    c == null && (c = 0,
    o.replaceState(Xn({}, o.state, {
        idx: c
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        a = Nt.Pop;
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
        a = Nt.Push;
        let g = Ea(y.location, b, m);
        c = d() + 1;
        let v = Gu(g, c)
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
        a = Nt.Replace;
        let g = Ea(y.location, b, m);
        c = d();
        let v = Gu(g, c)
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
          , g = typeof b == "string" ? b : yi(b);
        return g = g.replace(/ $/, "%20"),
        ee(m, "No window.location.(origin|href) available to create URL for href: " + g),
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
            return s.addEventListener(Qu, h),
            l = b,
            () => {
                s.removeEventListener(Qu, h),
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
var Ku;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Ku || (Ku = {}));
function dg(e, t, r) {
    return r === void 0 && (r = "/"),
    hg(e, t, r, !1)
}
function hg(e, t, r, n) {
    let s = typeof t == "string" ? en(t) : t
      , i = Ol(s.pathname || "/", r);
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
        l.relativePath.startsWith("/") && (ee(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let c = It([n, l.relativePath])
          , d = r.concat(l);
        i.children && i.children.length > 0 && (ee(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
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
  , Xu = e => e === "*";
function xg(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(Xu) && (n += wg),
    t && (n += gg),
    r.filter(s => !Xu(s)).reduce( (s, i) => s + (pg.test(i) ? mg : i === "" ? vg : yg), n)
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
          , h = Zu({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, d)
          , f = l.route;
        if (!h && c && r && !n[n.length - 1].route.index && (h = Zu({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        o.push({
            params: s,
            pathname: It([i, h.pathname]),
            pathnameBase: Pg(It([i, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (i = It([i, h.pathnameBase]))
    }
    return o
}
function Zu(e, t) {
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
function Ol(e, t) {
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
    let {pathname: r, search: n="", hash: s=""} = typeof e == "string" ? en(e) : e;
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
function jo(e, t, r, n) {
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
    typeof e == "string" ? s = en(e) : (s = Xn({}, e),
    ee(!s.pathname || !s.pathname.includes("?"), jo("?", "pathname", "search", s)),
    ee(!s.pathname || !s.pathname.includes("#"), jo("#", "pathname", "hash", s)),
    ee(!s.search || !s.search.includes("#"), jo("#", "search", "hash", s)));
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
const It = e => e.join("/").replace(/\/\/+/g, "/")
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
function Zn() {
    return Zn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Zn.apply(this, arguments)
}
const Rl = k.createContext(null)
  , Lg = k.createContext(null)
  , dr = k.createContext(null)
  , Mi = k.createContext(null)
  , hr = k.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yh = k.createContext(null);
function $g(e, t) {
    let {relative: r} = t === void 0 ? {} : t;
    ls() || ee(!1);
    let {basename: n, navigator: s} = k.useContext(dr)
      , {hash: i, pathname: o, search: a} = Qh(e, {
        relative: r
    })
      , l = o;
    return n !== "/" && (l = o === "/" ? n : It([n, o])),
    s.createHref({
        pathname: l,
        search: a,
        hash: i
    })
}
function ls() {
    return k.useContext(Mi) != null
}
function Ui() {
    return ls() || ee(!1),
    k.useContext(Mi).location
}
function Jh(e) {
    k.useContext(dr).static || k.useLayoutEffect(e)
}
function us() {
    let {isDataRoute: e} = k.useContext(hr);
    return e ? Yg() : Dg()
}
function Dg() {
    ls() || ee(!1);
    let e = k.useContext(Rl)
      , {basename: t, future: r, navigator: n} = k.useContext(dr)
      , {matches: s} = k.useContext(hr)
      , {pathname: i} = Ui()
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
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : It([t, h.pathname])),
        (d.replace ? n.replace : n.push)(h, d.state, d)
    }, [t, n, o, i, e])
}
function Qh(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {future: n} = k.useContext(dr)
      , {matches: s} = k.useContext(hr)
      , {pathname: i} = Ui()
      , o = JSON.stringify(Vh(s, n.v7_relativeSplatPath));
    return k.useMemo( () => Hh(e, JSON.parse(o), i, r === "path"), [e, o, i, r])
}
function Ig(e, t) {
    return Ag(e, t)
}
function Ag(e, t, r, n) {
    ls() || ee(!1);
    let {navigator: s, static: i} = k.useContext(dr)
      , {matches: o} = k.useContext(hr)
      , a = o[o.length - 1]
      , l = a ? a.params : {};
    a && a.pathname;
    let c = a ? a.pathnameBase : "/";
    a && a.route;
    let d = Ui(), h;
    if (t) {
        var f;
        let m = typeof t == "string" ? en(t) : t;
        c === "/" || (f = m.pathname) != null && f.startsWith(c) || ee(!1),
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
        pathname: It([c, s.encodeLocation ? s.encodeLocation(m.pathname).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? c : It([c, s.encodeLocation ? s.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
    })), o, r, n);
    return t && b ? k.createElement(Mi.Provider, {
        value: {
            location: Zn({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, h),
            navigationType: Nt.Pop
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
        return this.state.error !== void 0 ? k.createElement(hr.Provider, {
            value: this.props.routeContext
        }, k.createElement(Yh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Fg(e) {
    let {routeContext: t, match: r, children: n} = e
      , s = k.useContext(Rl);
    return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    k.createElement(hr.Provider, {
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
        d >= 0 || ee(!1),
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
  , wi = function(e) {
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
}(wi || {});
function Wg(e) {
    let t = k.useContext(Rl);
    return t || ee(!1),
    t
}
function Vg(e) {
    let t = k.useContext(Lg);
    return t || ee(!1),
    t
}
function Hg(e) {
    let t = k.useContext(hr);
    return t || ee(!1),
    t
}
function Kh(e) {
    let t = Hg()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || ee(!1),
    r.route.id
}
function qg() {
    var e;
    let t = k.useContext(Yh)
      , r = Vg(wi.UseRouteError)
      , n = Kh(wi.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function Yg() {
    let {router: e} = Wg(Gh.UseNavigateStable)
      , t = Kh(wi.UseNavigateStable)
      , r = k.useRef(!1);
    return Jh( () => {
        r.current = !0
    }
    ),
    k.useCallback(function(s, i) {
        i === void 0 && (i = {}),
        r.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, Zn({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function Jg(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function tt(e) {
    ee(!1)
}
function Qg(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: s=Nt.Pop, navigator: i, static: o=!1, future: a} = e;
    ls() && ee(!1);
    let l = t.replace(/^\/*/, "/")
      , c = k.useMemo( () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Zn({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof n == "string" && (n = en(n));
    let {pathname: d="/", search: h="", hash: f="", state: w=null, key: p="default"} = n
      , y = k.useMemo( () => {
        let b = Ol(d, l);
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
    return y == null ? null : k.createElement(dr.Provider, {
        value: c
    }, k.createElement(Mi.Provider, {
        children: r,
        value: y
    }))
}
function Gg(e) {
    let {children: t, location: r} = e;
    return Ig(Na(t), r)
}
new Promise( () => {}
);
function Na(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return k.Children.forEach(e, (n, s) => {
        if (!k.isValidElement(n))
            return;
        let i = [...t, s];
        if (n.type === k.Fragment) {
            r.push.apply(r, Na(n.props.children, i));
            return
        }
        n.type !== tt && ee(!1),
        !n.props.index || !n.props.children || ee(!1);
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
        n.props.children && (o.children = Na(n.props.children, i)),
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
function Pa() {
    return Pa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Pa.apply(this, arguments)
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
  , ec = Gf[r0];
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
        c && ec ? ec( () => l(h)) : l(h)
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
  , gt = k.forwardRef(function(t, r) {
    let {onClick: n, relative: s, reloadDocument: i, replace: o, state: a, target: l, to: c, preventScrollReset: d, viewTransition: h} = t, f = Kg(t, e0), {basename: w} = k.useContext(dr), p, y = !1;
    if (typeof c == "string" && i0.test(c) && (p = c,
    s0))
        try {
            let v = new URL(window.location.href)
              , x = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c)
              , S = Ol(x.pathname, w);
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
    return k.createElement("a", Pa({}, f, {
        href: p || b,
        onClick: y || i ? n : g,
        ref: r,
        target: l
    }))
});
var tc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(tc || (tc = {}));
var rc;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(rc || (rc = {}));
function o0(e, t) {
    let {target: r, replace: n, state: s, preventScrollReset: i, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = us()
      , c = Ui()
      , d = Qh(e, {
        relative: o
    });
    return k.useCallback(h => {
        if (Zg(h, r)) {
            h.preventDefault();
            let f = n !== void 0 ? n : yi(c) === yi(d);
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
  , G = (e, t) => {
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
const Ll = G("AlertCircle", [["circle", {
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
const u0 = G("Award", [["circle", {
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
const ar = G("Calendar", [["path", {
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
const c0 = G("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = G("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = G("CircleUser", [["circle", {
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
const es = G("Clock", [["circle", {
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
const h0 = G("ExternalLink", [["path", {
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
const f0 = G("History", [["path", {
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
const p0 = G("LogIn", [["path", {
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
const qr = G("Music", [["path", {
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
const m0 = G("Pause", [["rect", {
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
const g0 = G("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = G("Plus", [["path", {
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
const ht = G("Radio", [["path", {
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
const y0 = G("Send", [["path", {
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
const w0 = G("Settings", [["path", {
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
const x0 = G("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = G("Trash2", [["path", {
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
const Yr = G("Users", [["path", {
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
const k0 = G("Volume2", [["polygon", {
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
const S0 = G("VolumeX", [["polygon", {
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
  , nc = e => {
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
  , j0 = e => e ? nc(e) : nc;
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
var Jr = k;
function E0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var N0 = typeof Object.is == "function" ? Object.is : E0
  , P0 = Jr.useState
  , C0 = Jr.useEffect
  , T0 = Jr.useLayoutEffect
  , O0 = Jr.useDebugValue;
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
        Eo(s) && i({
            inst: s
        })
    }, [e, r, t]),
    C0(function() {
        return Eo(s) && i({
            inst: s
        }),
        e(function() {
            Eo(s) && i({
                inst: s
            })
        })
    }, [e]),
    O0(r),
    r
}
function Eo(e) {
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
rf.useSyncExternalStore = Jr.useSyncExternalStore !== void 0 ? Jr.useSyncExternalStore : $0;
tf.exports = rf;
var D0 = tf.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi = k
  , I0 = D0;
function A0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var M0 = typeof Object.is == "function" ? Object.is : A0
  , U0 = I0.useSyncExternalStore
  , z0 = zi.useRef
  , F0 = zi.useEffect
  , B0 = zi.useMemo
  , W0 = zi.useDebugValue;
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
  , {useDebugValue: q0} = za
  , {useSyncExternalStoreWithSelector: Y0} = H0;
let sc = !1;
const J0 = e => e;
function Q0(e, t=J0, r) {
    (nf ? "production" : void 0) !== "production" && r && !sc && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),
    sc = !0);
    const n = Y0(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
    return q0(n),
    n
}
const ic = e => {
    (nf ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    const t = typeof e == "function" ? j0(e) : e
      , r = (n, s) => Q0(t, n, s);
    return Object.assign(r, t),
    r
}
  , G0 = e => e ? ic(e) : ic
  , K0 = "modulepreload"
  , X0 = function(e) {
    return "/" + e
}
  , oc = {}
  , Qr = function(t, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(r.map(l => {
            if (l = X0(l),
            l in oc)
                return;
            oc[l] = !0;
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
    return e ? t = e : typeof fetch > "u" ? t = (...r) => Qr(async () => {
        const {default: n} = await Promise.resolve().then( () => tn);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : t = fetch,
    (...r) => t(...r)
}
;
class $l extends Error {
    constructor(t, r="FunctionsError", n) {
        super(t),
        this.name = r,
        this.context = n
    }
}
class ev extends $l {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class tv extends $l {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class rv extends $l {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Ca;
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
)(Ca || (Ca = {}));
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
    constructor(t, {headers: r={}, customFetch: n, region: s=Ca.Any}={}) {
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
var xe = {}
  , Dl = {}
  , Fi = {}
  , cs = {}
  , Bi = {}
  , Wi = {}
  , iv = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , Gr = iv();
const ov = Gr.fetch
  , sf = Gr.fetch.bind(Gr)
  , of = Gr.Headers
  , av = Gr.Request
  , lv = Gr.Response
  , tn = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: of,
    Request: av,
    Response: lv,
    default: sf,
    fetch: ov
}, Symbol.toStringTag, {
    value: "Module"
}))
  , uv = $f(tn);
var Vi = {};
Object.defineProperty(Vi, "__esModule", {
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
Vi.default = cv;
var af = Ae && Ae.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Wi, "__esModule", {
    value: !0
});
const dv = af(uv)
  , hv = af(Vi);
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
Wi.default = fv;
var pv = Ae && Ae.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Bi, "__esModule", {
    value: !0
});
const mv = pv(Wi);
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
Bi.default = gv;
var vv = Ae && Ae.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(cs, "__esModule", {
    value: !0
});
const yv = vv(Bi);
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
cs.default = wv;
var xv = Ae && Ae.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Fi, "__esModule", {
    value: !0
});
const pn = xv(cs);
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
Fi.default = _v;
var Hi = {}
  , qi = {};
Object.defineProperty(qi, "__esModule", {
    value: !0
});
qi.version = void 0;
qi.version = "0.0.0-automated";
Object.defineProperty(Hi, "__esModule", {
    value: !0
});
Hi.DEFAULT_HEADERS = void 0;
const kv = qi;
Hi.DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${kv.version}`
};
var lf = Ae && Ae.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Dl, "__esModule", {
    value: !0
});
const Sv = lf(Fi)
  , bv = lf(cs)
  , jv = Hi;
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
Dl.default = Ev;
var rn = Ae && Ae.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(xe, "__esModule", {
    value: !0
});
xe.PostgrestError = xe.PostgrestBuilder = xe.PostgrestTransformBuilder = xe.PostgrestFilterBuilder = xe.PostgrestQueryBuilder = xe.PostgrestClient = void 0;
const cf = rn(Dl);
xe.PostgrestClient = cf.default;
const df = rn(Fi);
xe.PostgrestQueryBuilder = df.default;
const hf = rn(cs);
xe.PostgrestFilterBuilder = hf.default;
const ff = rn(Bi);
xe.PostgrestTransformBuilder = ff.default;
const pf = rn(Wi);
xe.PostgrestBuilder = pf.default;
const mf = rn(Vi);
xe.PostgrestError = mf.default;
var Nv = xe.default = {
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
var Mr;
(function(e) {
    e[e.connecting = 0] = "connecting",
    e[e.open = 1] = "open",
    e[e.closing = 2] = "closing",
    e[e.closed = 3] = "closed"
}
)(Mr || (Mr = {}));
var Ee;
(function(e) {
    e.closed = "closed",
    e.errored = "errored",
    e.joined = "joined",
    e.joining = "joining",
    e.leaving = "leaving"
}
)(Ee || (Ee = {}));
var We;
(function(e) {
    e.close = "phx_close",
    e.error = "phx_error",
    e.join = "phx_join",
    e.reply = "phx_reply",
    e.leave = "phx_leave",
    e.access_token = "access_token"
}
)(We || (We = {}));
var Ta;
(function(e) {
    e.websocket = "websocket"
}
)(Ta || (Ta = {}));
var Gt;
(function(e) {
    e.Connecting = "connecting",
    e.Open = "open",
    e.Closing = "closing",
    e.Closed = "closed"
}
)(Gt || (Gt = {}));
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
var z;
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
)(z || (z = {}));
const ac = (e, t, r={}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return Object.keys(t).reduce( (i, o) => (i[o] = $v(o, e, t, s),
    i), {})
}
  , $v = (e, t, r, n) => {
    const s = t.find(a => a.name === e)
      , i = s == null ? void 0 : s.type
      , o = r[e];
    return i && !n.includes(i) ? yf(i, o) : Oa(o)
}
  , yf = (e, t) => {
    if (e.charAt(0) === "_") {
        const r = e.slice(1, e.length);
        return Mv(t, r)
    }
    switch (e) {
    case z.bool:
        return Dv(t);
    case z.float4:
    case z.float8:
    case z.int2:
    case z.int4:
    case z.int8:
    case z.numeric:
    case z.oid:
        return Iv(t);
    case z.json:
    case z.jsonb:
        return Av(t);
    case z.timestamp:
        return Uv(t);
    case z.abstime:
    case z.date:
    case z.daterange:
    case z.int4range:
    case z.int8range:
    case z.money:
    case z.reltime:
    case z.text:
    case z.time:
    case z.timestamptz:
    case z.timetz:
    case z.tsrange:
    case z.tstzrange:
        return Oa(t);
    default:
        return Oa(t)
    }
}
  , Oa = e => e
  , Dv = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , Iv = e => {
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
class No {
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
var lc;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(lc || (lc = {}));
class Ln {
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
            this.state = Ln.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(l => {
                this.state = Ln.syncDiff(this.state, l, i, o)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(n.diff, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Ln.syncDiff(this.state, s, i, o),
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
var uc;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(uc || (uc = {}));
var cc;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(cc || (cc = {}));
var nt;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(nt || (nt = {}));
class Il {
    constructor(t, r={
        config: {}
    }, n) {
        this.topic = t,
        this.params = r,
        this.socket = n,
        this.bindings = {},
        this.state = Ee.closed,
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
        this.joinPush = new No(this,We.join,this.params,this.timeout),
        this.rejoinTimer = new vf( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = Ee.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = Ee.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = Ee.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = Ee.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(We.reply, {}, (s, i) => {
            this._trigger(this._replyEventName(i), s)
        }
        ),
        this.presence = new Ln(this),
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
            this._onError(d => t == null ? void 0 : t(nt.CHANNEL_ERROR, d)),
            this._onClose( () => t == null ? void 0 : t(nt.CLOSED));
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
                    t == null || t(nt.SUBSCRIBED);
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
                            t == null || t(nt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = p,
                    t && t(nt.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", d => {
                t == null || t(nt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(nt.TIMED_OUT)
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
        this.state = Ee.leaving;
        const r = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(We.close, "leave", this._joinRef())
        }
        ;
        return this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise(n => {
            const s = new No(this,We.leave,{},t);
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
        let s = new No(this,t,r,n);
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
          , {close: a, error: l, leave: c, join: d} = We;
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
        return this.state === Ee.closed
    }
    _isJoined() {
        return this.state === Ee.joined
    }
    _isJoining() {
        return this.state === Ee.joining
    }
    _isLeaving() {
        return this.state === Ee.leaving
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
        this._on(We.close, {}, t)
    }
    _onError(t) {
        this._on(We.error, {}, r => t(r))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = Ee.joining,
        this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const r = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = ac(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (r.old = ac(t.columns, t.old_record)),
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
            return i ? o = i : typeof fetch > "u" ? o = (...a) => Qr(async () => {
                const {default: l} = await Promise.resolve().then( () => tn);
                return {
                    default: l
                }
            }
            , void 0).then( ({default: l}) => l(...a)) : o = fetch,
            (...a) => o(...a)
        }
        ,
        this.endPoint = `${t}/${Ta.websocket}`,
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
            Qr(async () => {
                const {default: t} = await import("./browser-D1DGxH9i.js").then(r => r.b);
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
        case Mr.connecting:
            return Gt.Connecting;
        case Mr.open:
            return Gt.Open;
        case Mr.closing:
            return Gt.Closing;
        default:
            return Gt.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Gt.Open
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
                s.joinedOnce && s._isJoined() && s._push(We.access_token, {
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
        this.channels.forEach(t => t._trigger(We.error))
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
        this.readyState = Mr.connecting,
        this.send = () => {}
        ,
        this.url = null,
        this.url = t,
        this.close = n.close
    }
}
class Al extends Error {
    constructor(t) {
        super(t),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function se(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
class Hv extends Al {
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
class Ra extends Al {
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
    return e ? t = e : typeof fetch > "u" ? t = (...r) => Qr(async () => {
        const {default: n} = await Promise.resolve().then( () => tn);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : t = fetch,
    (...r) => t(...r)
}
  , Yv = () => qv(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield Qr( () => Promise.resolve().then( () => tn), void 0)).Response : Response
})
  , La = e => {
    if (Array.isArray(e))
        return e.map(r => La(r));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([r,n]) => {
        const s = r.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
        t[s] = La(n)
    }
    ),
    t
}
;
var fr = function(e, t, r, n) {
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
const Po = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , Jv = (e, t, r) => fr(void 0, void 0, void 0, function*() {
    const n = yield Yv();
    e instanceof n && !(r != null && r.noResolveJson) ? e.json().then(s => {
        t(new Hv(Po(s),e.status || 500))
    }
    ).catch(s => {
        t(new Ra(Po(s),s))
    }
    ) : t(new Ra(Po(e),e))
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
function ds(e, t, r, n, s, i) {
    return fr(this, void 0, void 0, function*() {
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
function xi(e, t, r, n) {
    return fr(this, void 0, void 0, function*() {
        return ds(e, "GET", t, r, n)
    })
}
function _t(e, t, r, n, s) {
    return fr(this, void 0, void 0, function*() {
        return ds(e, "POST", t, n, s, r)
    })
}
function Gv(e, t, r, n, s) {
    return fr(this, void 0, void 0, function*() {
        return ds(e, "PUT", t, n, s, r)
    })
}
function Kv(e, t, r, n) {
    return fr(this, void 0, void 0, function*() {
        return ds(e, "HEAD", t, Object.assign(Object.assign({}, r), {
            noResolveJson: !0
        }), n)
    })
}
function _f(e, t, r, n, s) {
    return fr(this, void 0, void 0, function*() {
        return ds(e, "DELETE", t, n, s, r)
    })
}
var ye = function(e, t, r, n) {
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
  , dc = {
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
        return ye(this, void 0, void 0, function*() {
            try {
                let i;
                const o = Object.assign(Object.assign({}, dc), s);
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
                if (se(i))
                    return {
                        data: null,
                        error: i
                    };
                throw i
            }
        })
    }
    upload(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, r, n)
        })
    }
    uploadToSignedUrl(t, r, n, s) {
        return ye(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(t)
              , o = this._getFinalPath(i)
              , a = new URL(this.url + `/object/upload/sign/${o}`);
            a.searchParams.set("token", r);
            try {
                let l;
                const c = Object.assign({
                    upsert: dc.upsert
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
                if (se(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(t, r) {
        return ye(this, void 0, void 0, function*() {
            try {
                let n = this._getFinalPath(t);
                const s = Object.assign({}, this.headers);
                r != null && r.upsert && (s["x-upsert"] = "true");
                const i = yield _t(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, {
                    headers: s
                })
                  , o = new URL(this.url + i.url)
                  , a = o.searchParams.get("token");
                if (!a)
                    throw new Al("No token returned by API");
                return {
                    data: {
                        signedUrl: o.toString(),
                        path: t,
                        token: a
                    },
                    error: null
                }
            } catch (n) {
                if (se(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    update(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, r, n)
        })
    }
    move(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _t(this.fetch, `${this.url}/object/move`, {
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
                if (se(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield _t(this.fetch, `${this.url}/object/copy`, {
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
                if (se(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(t)
                  , i = yield _t(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
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
                if (se(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                const s = yield _t(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
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
                if (se(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(t, r) {
        return ye(this, void 0, void 0, function*() {
            const s = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image/authenticated" : "object"
              , i = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {})
              , o = i ? `?${i}` : "";
            try {
                const a = this._getFinalPath(t);
                return {
                    data: yield(yield xi(this.fetch, `${this.url}/${s}/${a}${o}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (a) {
                if (se(a))
                    return {
                        data: null,
                        error: a
                    };
                throw a
            }
        })
    }
    info(t) {
        return ye(this, void 0, void 0, function*() {
            const r = this._getFinalPath(t);
            try {
                const n = yield xi(this.fetch, `${this.url}/object/info/${r}`, {
                    headers: this.headers
                });
                return {
                    data: La(n),
                    error: null
                }
            } catch (n) {
                if (se(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    exists(t) {
        return ye(this, void 0, void 0, function*() {
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
                if (se(n) && n instanceof Ra) {
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
        return ye(this, void 0, void 0, function*() {
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
                if (se(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    list(t, r, n) {
        return ye(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, Xv), r), {
                    prefix: t || ""
                });
                return {
                    data: yield _t(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (s) {
                if (se(s))
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
var gr = function(e, t, r, n) {
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
        return gr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield xi(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (se(t))
                    return {
                        data: null,
                        error: t
                    };
                throw t
            }
        })
    }
    getBucket(t) {
        return gr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield xi(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (se(r))
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
        return gr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _t(this.fetch, `${this.url}/bucket`, {
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
                if (se(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    updateBucket(t, r) {
        return gr(this, void 0, void 0, function*() {
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
                if (se(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    emptyBucket(t) {
        return gr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _t(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (se(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteBucket(t) {
        return gr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _f(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (se(r))
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
let Sn = "";
typeof Deno < "u" ? Sn = "deno" : typeof document < "u" ? Sn = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Sn = "react-native" : Sn = "node";
const iy = {
    "X-Client-Info": `supabase-js-${Sn}/${sy}`
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
  , hc = 10
  , $a = "X-Supabase-Api-Version"
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
const Ge = () => typeof window < "u" && typeof document < "u"
  , Ht = {
    tested: !1,
    writable: !1
}
  , $n = () => {
    if (!Ge())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Ht.tested)
        return Ht.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        Ht.tested = !0,
        Ht.writable = !0
    } catch {
        Ht.tested = !0,
        Ht.writable = !1
    }
    return Ht.writable
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
    return e ? t = e : typeof fetch > "u" ? t = (...r) => Qr(async () => {
        const {default: n} = await Promise.resolve().then( () => tn);
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
  , Os = async (e, t) => {
    const r = await e.getItem(t);
    if (!r)
        return null;
    try {
        return JSON.parse(r)
    } catch {
        return r
    }
}
  , Rs = async (e, t) => {
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
class Yi {
    constructor() {
        this.promise = new Yi.promiseConstructor( (t, r) => {
            this.resolve = t,
            this.reject = r
        }
        )
    }
}
Yi.promiseConstructor = Promise;
function fc(e) {
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
async function vr(e, t, r=!1) {
    const n = Py();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"),
    await jf(e, `${t}-code-verifier`, s);
    const i = await Oy(n);
    return [i, n === i ? "plain" : "s256"]
}
const Ry = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ly(e) {
    const t = e.headers.get($a);
    if (!t || !t.match(Ry))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
class Ml extends Error {
    constructor(t, r, n) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = r,
        this.code = n
    }
}
function L(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class $y extends Ml {
    constructor(t, r, n) {
        super(t, r, n),
        this.name = "AuthApiError",
        this.status = r,
        this.code = n
    }
}
function Dy(e) {
    return L(e) && e.name === "AuthApiError"
}
class Ef extends Ml {
    constructor(t, r) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = r
    }
}
class pr extends Ml {
    constructor(t, r, n, s) {
        super(t, n, s),
        this.name = r,
        this.status = n
    }
}
class vt extends pr {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function Iy(e) {
    return L(e) && e.name === "AuthSessionMissingError"
}
class Co extends pr {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Ls extends pr {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class $s extends pr {
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
    return L(e) && e.name === "AuthImplicitGrantRedirectError"
}
class pc extends pr {
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
class Da extends pr {
    constructor(t, r) {
        super(t, "AuthRetryableFetchError", r, void 0)
    }
}
function To(e) {
    return L(e) && e.name === "AuthRetryableFetchError"
}
class mc extends pr {
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
const Jt = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , Uy = [502, 503, 504];
async function gc(e) {
    var t;
    if (!Sy(e))
        throw new Da(Jt(e),0);
    if (Uy.includes(e.status))
        throw new Da(Jt(e),e.status);
    let r;
    try {
        r = await e.json()
    } catch (i) {
        throw new Ef(Jt(i),i)
    }
    let n;
    const s = Ly(e);
    if (s && s.getTime() >= Sf["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code),
    n) {
        if (n === "weak_password")
            throw new mc(Jt(r),e.status,((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (n === "session_not_found")
            throw new vt
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new mc(Jt(r),e.status,r.weak_password.reasons);
    throw new $y(Jt(r),e.status || 500,n)
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
async function I(e, t, r, n) {
    var s;
    const i = Object.assign({}, n == null ? void 0 : n.headers);
    i[$a] || (i[$a] = Sf["2024-01-01"].name),
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
        new Da(Jt(l),0)
    }
    if (a.ok || await gc(a),
    n != null && n.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await gc(l)
    }
}
function yt(e) {
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
function vc(e) {
    const t = yt(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function bt(e) {
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
            return await I(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (n) {
            if (L(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async inviteUserByEmail(t, r={}) {
        try {
            return await I(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: bt
            })
        } catch (n) {
            if (L(n))
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
            await I(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: Wy,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (L(r))
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
            return await I(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: bt
            })
        } catch (r) {
            if (L(r))
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
              , d = await I(this.fetch, "GET", `${this.url}/admin/users`, {
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
            if (L(c))
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
            return await I(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: bt
            })
        } catch (r) {
            if (L(r))
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
            return await I(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: r,
                headers: this.headers,
                xform: bt
            })
        } catch (n) {
            if (L(n))
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
            return await I(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: bt
            })
        } catch (n) {
            if (L(n))
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
            const {data: r, error: n} = await I(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
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
            if (L(r))
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
                data: await I(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (L(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
const Jy = {
    getItem: e => $n() ? globalThis.localStorage.getItem(e) : null,
    setItem: (e, t) => {
        $n() && globalThis.localStorage.setItem(e, t)
    }
    ,
    removeItem: e => {
        $n() && globalThis.localStorage.removeItem(e)
    }
};
function yc(e={}) {
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
const yr = {
    debug: !!(globalThis && $n() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
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
    yr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const n = new globalThis.AbortController;
    return t > 0 && setTimeout( () => {
        n.abort(),
        yr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
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
            yr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
            try {
                return await r()
            } finally {
                yr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name)
            }
        } else {
            if (t === 0)
                throw yr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                new Gy(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (yr.debug)
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
  , wc = 3;
async function xc(e, t, r) {
    return await r()
}
class ts {
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
        this.instanceID = ts.nextInstanceID,
        ts.nextInstanceID += 1,
        this.instanceID > 0 && Ge() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
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
        this.lock = s.lock || xc,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : Ge() && (!((r = globalThis == null ? void 0 : globalThis.navigator) === null || r === void 0) && r.locks) ? this.lock = Ky : this.lock = xc,
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? s.storage ? this.storage = s.storage : $n() ? this.storage = Jy : (this.memoryStorage = {},
        this.storage = yc(this.memoryStorage)) : (this.memoryStorage = {},
        this.storage = yc(this.memoryStorage)),
        Ge() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
            Ge() && this.detectSessionInUrl && n !== "none") {
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
            return L(r) ? {
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
            const i = await I(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (n = (r = t == null ? void 0 : t.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                    gotrue_meta_security: {
                        captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: yt
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
            if (L(i))
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
                this.flowType === "pkce" && ([w,p] = await vr(this.storage, this.storageKey)),
                i = await I(this.fetch, "POST", `${this.url}/signup`, {
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
                    xform: yt
                })
            } else if ("phone"in t) {
                const {phone: d, password: h, options: f} = t;
                i = await I(this.fetch, "POST", `${this.url}/signup`, {
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
                    xform: yt
                })
            } else
                throw new Ls("You must provide either an email or phone number and a password");
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
            if (L(i))
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
                r = await I(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: vc
                })
            } else if ("phone"in t) {
                const {phone: i, password: o, options: a} = t;
                r = await I(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: vc
                })
            } else
                throw new Ls("You must provide either an email or phone number and a password");
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
                error: new Co
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
            if (L(r))
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
        const r = await Os(this.storage, `${this.storageKey}-code-verifier`)
          , [n,s] = (r ?? "").split("/");
        try {
            const {data: i, error: o} = await I(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: n
                },
                xform: yt
            });
            if (await Rs(this.storage, `${this.storageKey}-code-verifier`),
            o)
                throw o;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Co
            } : (i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: o
            })
        } catch (i) {
            if (L(i))
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
              , a = await I(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
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
                xform: yt
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
                error: new Co
            } : (l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            {
                data: l,
                error: c
            })
        } catch (r) {
            if (L(r))
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
                this.flowType === "pkce" && ([c,d] = await vr(this.storage, this.storageKey));
                const {error: h} = await I(this.fetch, "POST", `${this.url}/otp`, {
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
                  , {data: c, error: d} = await I(this.fetch, "POST", `${this.url}/otp`, {
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
            throw new Ls("You must provide either an email or phone number.")
        } catch (a) {
            if (L(a))
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
            const {data: o, error: a} = await I(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: yt
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
            if (L(s))
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
            return this.flowType === "pkce" && ([i,o] = await vr(this.storage, this.storageKey)),
            await I(this.fetch, "POST", `${this.url}/sso`, {
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
            if (L(i))
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
                    throw new vt;
                const {error: s} = await I(this.fetch, "GET", `${this.url}/reauthenticate`, {
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
            if (L(t))
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
                  , {error: o} = await I(this.fetch, "POST", r, {
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
                  , {data: o, error: a} = await I(this.fetch, "POST", r, {
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
            throw new Ls("You must provide either an email or phone number and a type")
        } catch (r) {
            if (L(r))
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
            const r = await Os(this.storage, this.storageKey);
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
            return t ? await I(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: bt
            }) : await this._useSession(async r => {
                var n, s, i;
                const {data: o, error: a} = r;
                if (a)
                    throw a;
                return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new vt
                } : await I(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: bt
                })
            }
            )
        } catch (r) {
            if (L(r))
                return Iy(r) && (await this._removeSession(),
                await Rs(this.storage, `${this.storageKey}-code-verifier`)),
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
                    throw new vt;
                const o = s.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && t.email != null && ([a,l] = await vr(this.storage, this.storageKey));
                const {data: c, error: d} = await I(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: o.access_token,
                    xform: bt
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
            if (L(n))
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
        return fc(t)
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new vt;
            const r = Date.now() / 1e3;
            let n = r
              , s = !0
              , i = null;
            const o = fc(t.access_token);
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
            if (L(r))
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
                    throw new vt;
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
            if (L(r))
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
            if (!Ge())
                throw new $s("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new $s(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (r) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new pc("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new $s("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new pc("No code detected.");
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
                throw new $s("No session defined in URL");
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
            if (L(n))
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
        const r = await Os(this.storage, `${this.storageKey}-code-verifier`);
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
                if (a && !(Dy(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
                    return {
                        error: a
                    }
            }
            return t !== "others" && (await this._removeSession(),
            await Rs(this.storage, `${this.storageKey}-code-verifier`)),
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
        this.flowType === "pkce" && ([n,s] = await vr(this.storage, this.storageKey, !0));
        try {
            return await I(this.fetch, "POST", `${this.url}/recover`, {
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
            if (L(i))
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
            if (L(r))
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
                return await I(this.fetch, "GET", w, {
                    headers: this.headers,
                    jwt: (d = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && d !== void 0 ? d : void 0
                })
            }
            );
            if (s)
                throw s;
            return Ge() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url),
            {
                data: {
                    provider: t.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            }
        } catch (n) {
            if (L(n))
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
                return await I(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (r) {
            if (L(r))
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
            await I(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: yt
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && To(i) && Date.now() + o - n < mn
            }
            )
        } catch (n) {
            if (this._debug(r, "error", n),
            L(n))
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
        Ge() && !r.skipBrowserRedirect && window.location.assign(n),
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
            const n = await Os(this.storage, this.storageKey);
            if (this._debug(r, "session from storage", n),
            !this._isValidSession(n)) {
                this._debug(r, "session is not valid"),
                n !== null && await this._removeSession();
                return
            }
            const s = Math.round(Date.now() / 1e3)
              , i = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) < s + hc;
            if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${hc}s`),
            i) {
                if (this.autoRefreshToken && n.refresh_token) {
                    const {error: o} = await this._callRefreshToken(n.refresh_token);
                    o && (console.error(o),
                    To(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o),
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
            throw new vt;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new Yi;
            const {data: i, error: o} = await this._refreshAccessToken(t);
            if (o)
                throw o;
            if (!i.session)
                throw new vt;
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
            L(i)) {
                const o = {
                    session: null,
                    error: i
                };
                return To(i) || await this._removeSession(),
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
        await Rs(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Ge() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
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
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${mn}ms, refresh threshold is ${wc} ticks`),
                            s <= wc && await this._callRefreshToken(n.refresh_token)
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
        !Ge() || !(window != null && window.addEventListener))
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
            const [i,o] = await vr(this.storage, this.storageKey)
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
                } : await I(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            }
            )
        } catch (r) {
            if (L(r))
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
                  , {data: l, error: c} = await I(this.fetch, "POST", `${this.url}/factors`, {
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
            if (L(r))
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
                    const {data: o, error: a} = await I(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
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
                if (L(r))
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
                    } : await I(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    })
                }
                )
            } catch (r) {
                if (L(r))
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
ts.nextInstanceID = 0;
const Zy = ts;
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
  , Q = nw(sw, iw)
  , Bt = G0(e => ({
    user: null,
    isPlaying: !1,
    setUser: t => e({
        user: t
    }),
    setIsPlaying: t => e({
        isPlaying: t
    }),
    logout: async () => {
        await Q.auth.signOut(),
        e({
            user: null
        })
    }
}));
function ow() {
    const {user: e, logout: t} = Bt()
      , r = e && ["presenter", "manager", "developer", "co_director", "director"].includes(e.role);
    return u.jsx("nav", {
        className: "bg-gray-800 border-b border-gray-700",
        children: u.jsx("div", {
            className: "container mx-auto px-4",
            children: u.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [u.jsxs("div", {
                    className: "flex items-center space-x-8",
                    children: [u.jsxs(gt, {
                        to: "/",
                        className: "flex items-center space-x-2 text-white",
                        children: [u.jsx(ht, {
                            size: 24
                        }), u.jsx("span", {
                            className: "font-bold text-xl",
                            children: "Peak Radio"
                        })]
                    }), u.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [u.jsxs(gt, {
                            to: "/team",
                            className: "text-gray-300 hover:text-white flex items-center space-x-1",
                            children: [u.jsx(Yr, {
                                size: 18
                            }), u.jsx("span", {
                                children: "Team"
                            })]
                        }), u.jsxs(gt, {
                            to: "/schedule",
                            className: "text-gray-300 hover:text-white flex items-center space-x-1",
                            children: [u.jsx(ar, {
                                size: 18
                            }), u.jsx("span", {
                                children: "Schedule"
                            })]
                        }), (e == null ? void 0 : e.role) === "listener" && u.jsx(gt, {
                            to: "/apply",
                            className: "text-gray-300 hover:text-white",
                            children: "Apply"
                        }), r && u.jsx(gt, {
                            to: "/panel",
                            className: "text-gray-300 hover:text-white",
                            children: "Radio Panel"
                        })]
                    })]
                }), u.jsx("div", {
                    className: "flex items-center space-x-4",
                    children: e ? u.jsxs(u.Fragment, {
                        children: [u.jsxs(gt, {
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
                    }) : u.jsxs(gt, {
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
            const {data: a} = await Q.from("banners").select("*").eq("active", !0).order("order");
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
function Je(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function lr(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
const Pf = 6048e5
  , lw = 864e5;
let uw = {};
function Ji() {
    return uw
}
function rs(e, t) {
    var a, l, c, d;
    const r = Ji()
      , n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0
      , s = Je(e)
      , i = s.getDay()
      , o = (i < n ? 7 : 0) + i - n;
    return s.setDate(s.getDate() - o),
    s.setHours(0, 0, 0, 0),
    s
}
function _i(e) {
    return rs(e, {
        weekStartsOn: 1
    })
}
function Cf(e) {
    const t = Je(e)
      , r = t.getFullYear()
      , n = lr(e, 0);
    n.setFullYear(r + 1, 0, 4),
    n.setHours(0, 0, 0, 0);
    const s = _i(n)
      , i = lr(e, 0);
    i.setFullYear(r, 0, 4),
    i.setHours(0, 0, 0, 0);
    const o = _i(i);
    return t.getTime() >= s.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1
}
function _c(e) {
    const t = Je(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function kc(e) {
    const t = Je(e)
      , r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()),
    +e - +r
}
function cw(e, t) {
    const r = _c(e)
      , n = _c(t)
      , s = +r - kc(r)
      , i = +n - kc(n);
    return Math.round((s - i) / lw)
}
function dw(e) {
    const t = Cf(e)
      , r = lr(e, 0);
    return r.setFullYear(t, 0, 4),
    r.setHours(0, 0, 0, 0),
    _i(r)
}
function hw(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function fw(e) {
    if (!hw(e) && typeof e != "number")
        return !1;
    const t = Je(e);
    return !isNaN(Number(t))
}
function pw(e) {
    const t = Je(e)
      , r = lr(e, 0);
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
function Oo(e) {
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
    date: Oo({
        formats: vw,
        defaultWidth: "full"
    }),
    time: Oo({
        formats: yw,
        defaultWidth: "full"
    }),
    dateTime: Oo({
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
  , Dw = /\d+/i
  , Iw = {
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
        parsePattern: Dw,
        valueCallback: e => parseInt(e, 10)
    }),
    era: vn({
        matchPatterns: Iw,
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
    const t = Je(e);
    return cw(t, pw(t)) + 1
}
function Qw(e) {
    const t = Je(e)
      , r = +_i(t) - +dw(t);
    return Math.round(r / Pf) + 1
}
function Tf(e, t) {
    var d, h, f, w;
    const r = Je(e)
      , n = r.getFullYear()
      , s = Ji()
      , i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((w = (f = s.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1
      , o = lr(e, 0);
    o.setFullYear(n + 1, 0, i),
    o.setHours(0, 0, 0, 0);
    const a = rs(o, t)
      , l = lr(e, 0);
    l.setFullYear(n, 0, i),
    l.setHours(0, 0, 0, 0);
    const c = rs(l, t);
    return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= c.getTime() ? n : n - 1
}
function Gw(e, t) {
    var a, l, c, d;
    const r = Ji()
      , n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
      , s = Tf(e, t)
      , i = lr(e, 0);
    return i.setFullYear(s, 0, n),
    i.setHours(0, 0, 0, 0),
    rs(i, t)
}
function Kw(e, t) {
    const r = Je(e)
      , n = +rs(r, t) - +Gw(r, t);
    return Math.round(n / Pf) + 1
}
function M(e, t) {
    const r = e < 0 ? "-" : ""
      , n = Math.abs(e).toString().padStart(t, "0");
    return r + n
}
const mt = {
    y(e, t) {
        const r = e.getFullYear()
          , n = r > 0 ? r : 1 - r;
        return M(t === "yy" ? n % 100 : n, t.length)
    },
    M(e, t) {
        const r = e.getMonth();
        return t === "M" ? String(r + 1) : M(r + 1, 2)
    },
    d(e, t) {
        return M(e.getDate(), t.length)
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
        return M(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return M(e.getHours(), t.length)
    },
    m(e, t) {
        return M(e.getMinutes(), t.length)
    },
    s(e, t) {
        return M(e.getSeconds(), t.length)
    },
    S(e, t) {
        const r = t.length
          , n = e.getMilliseconds()
          , s = Math.trunc(n * Math.pow(10, r - 3));
        return M(s, t.length)
    }
}
  , wr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , Sc = {
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
        return mt.y(e, t)
    },
    Y: function(e, t, r, n) {
        const s = Tf(e, n)
          , i = s > 0 ? s : 1 - s;
        if (t === "YY") {
            const o = i % 100;
            return M(o, 2)
        }
        return t === "Yo" ? r.ordinalNumber(i, {
            unit: "year"
        }) : M(i, t.length)
    },
    R: function(e, t) {
        const r = Cf(e);
        return M(r, t.length)
    },
    u: function(e, t) {
        const r = e.getFullYear();
        return M(r, t.length)
    },
    Q: function(e, t, r) {
        const n = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(n);
        case "QQ":
            return M(n, 2);
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
            return M(n, 2);
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
            return mt.M(e, t);
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
            return M(n + 1, 2);
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
        }) : M(s, t.length)
    },
    I: function(e, t, r) {
        const n = Qw(e);
        return t === "Io" ? r.ordinalNumber(n, {
            unit: "week"
        }) : M(n, t.length)
    },
    d: function(e, t, r) {
        return t === "do" ? r.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : mt.d(e, t)
    },
    D: function(e, t, r) {
        const n = Jw(e);
        return t === "Do" ? r.ordinalNumber(n, {
            unit: "dayOfYear"
        }) : M(n, t.length)
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
            return M(i, 2);
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
            return M(i, t.length);
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
            return M(s, t.length);
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
        switch (n === 12 ? s = wr.noon : n === 0 ? s = wr.midnight : s = n / 12 >= 1 ? "pm" : "am",
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
        switch (n >= 17 ? s = wr.evening : n >= 12 ? s = wr.afternoon : n >= 4 ? s = wr.morning : s = wr.night,
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
        return mt.h(e, t)
    },
    H: function(e, t, r) {
        return t === "Ho" ? r.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : mt.H(e, t)
    },
    K: function(e, t, r) {
        const n = e.getHours() % 12;
        return t === "Ko" ? r.ordinalNumber(n, {
            unit: "hour"
        }) : M(n, t.length)
    },
    k: function(e, t, r) {
        let n = e.getHours();
        return n === 0 && (n = 24),
        t === "ko" ? r.ordinalNumber(n, {
            unit: "hour"
        }) : M(n, t.length)
    },
    m: function(e, t, r) {
        return t === "mo" ? r.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : mt.m(e, t)
    },
    s: function(e, t, r) {
        return t === "so" ? r.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : mt.s(e, t)
    },
    S: function(e, t) {
        return mt.S(e, t)
    },
    X: function(e, t, r) {
        const n = e.getTimezoneOffset();
        if (n === 0)
            return "Z";
        switch (t) {
        case "X":
            return jc(n);
        case "XXXX":
        case "XX":
            return Qt(n);
        case "XXXXX":
        case "XXX":
        default:
            return Qt(n, ":")
        }
    },
    x: function(e, t, r) {
        const n = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return jc(n);
        case "xxxx":
        case "xx":
            return Qt(n);
        case "xxxxx":
        case "xxx":
        default:
            return Qt(n, ":")
        }
    },
    O: function(e, t, r) {
        const n = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + bc(n, ":");
        case "OOOO":
        default:
            return "GMT" + Qt(n, ":")
        }
    },
    z: function(e, t, r) {
        const n = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + bc(n, ":");
        case "zzzz":
        default:
            return "GMT" + Qt(n, ":")
        }
    },
    t: function(e, t, r) {
        const n = Math.trunc(e.getTime() / 1e3);
        return M(n, t.length)
    },
    T: function(e, t, r) {
        const n = e.getTime();
        return M(n, t.length)
    }
};
function bc(e, t="") {
    const r = e > 0 ? "-" : "+"
      , n = Math.abs(e)
      , s = Math.trunc(n / 60)
      , i = n % 60;
    return i === 0 ? r + String(s) : r + String(s) + t + M(i, 2)
}
function jc(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + M(Math.abs(e) / 60, 2) : Qt(e, t)
}
function Qt(e, t="") {
    const r = e > 0 ? "-" : "+"
      , n = Math.abs(e)
      , s = M(Math.trunc(n / 60), 2)
      , i = M(n % 60, 2);
    return r + s + t + i
}
const Ec = (e, t) => {
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
        return Ec(e, t);
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
    return i.replace("{{date}}", Ec(n, t)).replace("{{time}}", Of(s, t))
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
function yn(e, t, r) {
    var d, h, f, w;
    const n = Ji()
      , s = n.locale ?? Yw
      , i = n.firstWeekContainsDate ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1
      , o = n.weekStartsOn ?? ((w = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : w.weekStartsOn) ?? 0
      , a = Je(e);
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
        if (Sc[y])
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
        const b = Sc[y[0]];
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
let Ds = null
  , Ro = null;
async function mx() {
    if (Ds && Ro && Date.now() < Ro)
        return Ds;
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
        return Ds = t.access_token,
        Ro = Date.now() + t.expires_in * 1e3,
        Ds
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
const Lo = {
    title: "Unknown Track",
    artist: "Unknown Artist"
};
async function vx() {
    var e, t, r, n;
    try {
        const {data: s, error: i} = await Q.from("api_config").select("value").eq("key", "nowplaying_api_url").single();
        if (i || !(s != null && s.value))
            return console.warn("Now playing API URL not configured"),
            Lo;
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
        Lo) : d.now_playing.song
    } catch (s) {
        return s instanceof Error && (s.name === "AbortError" ? console.error("Now playing request timed out") : console.error("Error fetching now playing:", s.message)),
        Lo
    }
}
async function yx() {
    try {
        const {data: e, error: t} = await Q.from("radio_stations").select("stream_url").eq("active", !0).order("order").limit(1).single();
        return t ? (console.error("Error fetching stream URL:", t),
        "https://stream.peakradio.live/main") : e.stream_url
    } catch (e) {
        return console.error("Error fetching stream URL:", e),
        "https://stream.peakradio.live/main"
    }
}
function wx() {
    const {user: e} = Bt()
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
      , v = za.useRef(null);
    k.useEffect( () => {
        async function N() {
            if (v.current) {
                const je = await yx();
                v.current.src = je
            }
        }
        N();
        const O = setInterval(x, 1e4);
        return x(),
        () => clearInterval(O)
    }
    , []);
    async function x() {
        try {
            const N = await vx();
            if (N) {
                const O = await gx(N.artist, N.title);
                g({
                    title: N.title,
                    artist: N.artist,
                    albumArt: O == null ? void 0 : O.albumArt,
                    spotifyUrl: O == null ? void 0 : O.spotifyUrl
                })
            }
        } catch (N) {
            console.error("Error updating now playing:", N)
        }
    }
    const S = () => {
        v.current && (y ? v.current.pause() : v.current.play(),
        b(!y))
    }
      , C = () => {
        v.current && (v.current.muted = !w,
        p(!w))
    }
      , _ = N => {
        const O = parseFloat(N.target.value);
        v.current && (v.current.volume = O,
        f(O))
    }
      , E = async N => {
        if (N.preventDefault(),
        !!e) {
            o(!0),
            d(null),
            l(!1);
            try {
                const {error: O} = await Q.from("requests").insert({
                    song_title: n.songTitle,
                    artist: n.artist,
                    message: n.message,
                    user_id: e.id
                });
                if (O)
                    throw O;
                l(!0),
                s({
                    songTitle: "",
                    artist: "",
                    message: ""
                })
            } catch (O) {
                d(O instanceof Error ? O.message : "An error occurred")
            } finally {
                o(!1)
            }
        }
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
                    className: "max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20",
                    children: [m && u.jsxs("div", {
                        className: "flex items-center gap-6 mb-6",
                        children: [m.albumArt ? u.jsx("img", {
                            src: m.albumArt,
                            alt: `${m.title} by ${m.artist}`,
                            className: "w-24 h-24 rounded-xl object-cover"
                        }) : u.jsx("div", {
                            className: "w-24 h-24 bg-white/10 rounded-xl flex items-center justify-center",
                            children: u.jsx(qr, {
                                size: 32,
                                className: "text-white/50"
                            })
                        }), u.jsxs("div", {
                            className: "flex-grow",
                            children: [u.jsx("h2", {
                                className: "font-semibold text-xl mb-1",
                                children: m.title
                            }), u.jsx("p", {
                                className: "text-gray-300",
                                children: m.artist
                            }), m.spotifyUrl && u.jsxs("a", {
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
                        }), u.jsx("button", {
                            onClick: S,
                            className: "w-14 h-14 rounded-full bg-white hover:bg-white/90 transition-colors flex items-center justify-center text-indigo-900",
                            children: y ? u.jsx(m0, {
                                size: 28
                            }) : u.jsx(g0, {
                                size: 28
                            })
                        })]
                    }), u.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [u.jsx("button", {
                            onClick: C,
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
                            onChange: _,
                            className: "flex-grow accent-white"
                        })]
                    })]
                })]
            }), u.jsx("audio", {
                ref: v
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
                        onSubmit: E,
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
                                    onChange: N => s({
                                        ...n,
                                        songTitle: N.target.value
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
                                    onChange: N => s({
                                        ...n,
                                        artist: N.target.value
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
                                onChange: N => s({
                                    ...n,
                                    message: N.target.value
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
                    children: [u.jsx("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Now Broadcasting"
                    }), t.length > 0 ? u.jsx("div", {
                        className: "space-y-6",
                        children: t.slice(0, 1).map(N => u.jsxs("div", {
                            className: "flex items-center gap-6",
                            children: [u.jsx("img", {
                                src: N.user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${N.user.username}`,
                                alt: N.user.username,
                                className: "w-24 h-24 rounded-xl"
                            }), u.jsxs("div", {
                                children: [u.jsx("h3", {
                                    className: "text-xl font-semibold mb-2",
                                    children: N.title
                                }), u.jsxs("p", {
                                    className: "text-gray-400 mb-3",
                                    children: ["with ", N.user.username]
                                }), u.jsx("div", {
                                    className: "flex items-center gap-4 text-sm text-gray-500",
                                    children: u.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [u.jsx(es, {
                                            size: 14
                                        }), u.jsxs("span", {
                                            children: [yn(new Date(N.start_time), "HH:mm"), " - ", yn(new Date(N.end_time), "HH:mm")]
                                        })]
                                    })
                                })]
                            })]
                        }, N.id))
                    }) : u.jsxs("div", {
                        className: "text-center py-8 text-gray-400",
                        children: [u.jsx(ht, {
                            size: 48,
                            className: "mx-auto mb-4 opacity-50"
                        }), u.jsx("p", {
                            children: "AutoDJ is currently playing the best hits!"
                        })]
                    })]
                })]
            })
        }), u.jsxs("section", {
            className: "max-w-7xl mx-auto px-4",
            children: [u.jsxs("h2", {
                className: "text-2xl font-bold mb-6 flex items-center space-x-2",
                children: [u.jsx(ar, {
                    size: 24
                }), u.jsx("span", {
                    children: "Upcoming Shows"
                })]
            }), u.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: t.slice(1).map(N => u.jsxs("div", {
                    className: "bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-colors",
                    children: [u.jsxs("div", {
                        className: "flex items-center space-x-4 mb-4",
                        children: [u.jsx("img", {
                            src: N.user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${N.user.username}`,
                            alt: N.user.username,
                            className: "w-12 h-12 rounded-full"
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "font-medium",
                                children: N.title
                            }), u.jsxs("p", {
                                className: "text-sm text-gray-400",
                                children: ["with ", N.user.username]
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "space-y-2 text-sm text-gray-400",
                        children: [u.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [u.jsx(ar, {
                                size: 16
                            }), u.jsx("span", {
                                children: yn(new Date(N.start_time), "EEEE, MMMM d")
                            })]
                        }), u.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [u.jsx(es, {
                                size: 16
                            }), u.jsxs("span", {
                                children: [yn(new Date(N.start_time), "HH:mm"), " - ", yn(new Date(N.end_time), "HH:mm")]
                            })]
                        })]
                    })]
                }, N.id))
            })]
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
    developer: Yr,
    manager: ht,
    presenter: qr,
    listener: Yr
};
function Sx() {
    const [e,t] = k.useState([])
      , [r,n] = k.useState(!0)
      , [s,i] = k.useState(null);
    return k.useEffect( () => {
        async function o() {
            try {
                const {data: a, error: l} = await Q.from("users").select("*").not("role", "eq", "listener").order("role");
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
                    const a = kx[o.role] || Yr
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
      , {user: l} = Bt();
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
            const {data: p, error: y} = await Q.from("shows").select("*, user:users(username, avatar_url)").gte("end_time", f.toISOString()).lte("start_time", w.toISOString()).order("start_time");
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
            children: [u.jsx(Ll, {
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
                                        children: u.jsx(ht, {
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
                                            children: [u.jsx(Yr, {
                                                size: 14
                                            }), u.jsx("span", {
                                                children: y.user.username
                                            })]
                                        }), u.jsxs("div", {
                                            className: "flex items-center gap-1",
                                            children: [u.jsx(es, {
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
                    children: [u.jsx(ht, {
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
      , l = us()
      , {setUser: c} = Bt()
      , d = async h => {
        h.preventDefault(),
        a(!0),
        i(null);
        try {
            const {data: f, error: w} = await Q.auth.signInWithPassword({
                email: e,
                password: r
            });
            if (w)
                throw w;
            if (f.user) {
                const {data: p, error: y} = await Q.from("users").select("*").eq("id", f.user.id).single();
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
                children: "Login to TuneRadio"
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
                    children: ["Don't have an account?", " ", u.jsx(gt, {
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
      , f = us()
      , w = async p => {
        p.preventDefault(),
        h(!0),
        c(null);
        try {
            const {error: y} = await Q.auth.signUp({
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
                children: "Register for TuneRadio"
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
    const {user: e, setUser: t} = Bt()
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
        var x, S, C;
        if (e)
            try {
                const {data: _, error: E} = await Q.from("users").select("*").eq("id", e.id).single();
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
                        soundcloud: ((C = _.social_links) == null ? void 0 : C.soundcloud) || ""
                    }
                })
            } catch (_) {
                console.error("Error fetching user data:", _)
            }
    }
    async function m() {
        if (e)
            try {
                const {data: x, error: S} = await Q.from("requests").select("*").eq("user_id", e.id).order("created_at", {
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
                const {data: x, error: S} = await Q.from("shows").select("*").eq("user_id", e.id).order("start_time", {
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
                const {error: S} = await Q.from("users").update({
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
                        children: [u.jsx(qr, {
                            size: 18
                        }), "Song Requests"]
                    }), u.jsxs("button", {
                        onClick: () => n("shows"),
                        className: `px-6 py-4 flex items-center gap-2 border-b-2 font-medium ${r === "shows" ? "border-indigo-500 text-indigo-500" : "border-transparent text-gray-400 hover:text-white"}`,
                        children: [u.jsx(ht, {
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
                        children: [u.jsx(qr, {
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
                        children: [u.jsx(ar, {
                            size: 24
                        }), "Your Shows"]
                    }), f.length === 0 ? u.jsxs("div", {
                        className: "text-center py-8 text-gray-400",
                        children: [u.jsx(ht, {
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
                                    children: [u.jsx(ar, {
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
                                    children: [u.jsx(es, {
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
    const {user: e} = Bt()
      , t = us()
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
            const {data: p} = await Q.from("applications").select("*").eq("user_id", e == null ? void 0 : e.id).eq("status", "pending").single();
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
                const {error: y} = await Q.from("applications").insert({
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
                    children: u.jsx(ht, {
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
                    children: u.jsx(ht, {
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
                children: [u.jsx(Ll, {
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
    const {user: e} = Bt()
      , t = us()
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
            const _ = Q.from("shows").select(`
          *,
          user:users (username, avatar_url)
        `).order("start_time", {
                ascending: !0
            });
            (e == null ? void 0 : e.role) === "presenter" && _.eq("user_id", e.id);
            const {data: E, error: N} = await _;
            if (N)
                throw N;
            n(E || [])
        } catch (_) {
            console.error("Error fetching shows:", _)
        }
    }
    async function g() {
        try {
            const {data: _, error: E} = await Q.from("requests").select(`
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
            const {data: _, error: E} = await Q.from("users").select("id, username, total_shows_hosted, total_airtime_minutes, role").not("role", "eq", "listener").order("total_shows_hosted", {
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
                const {error: E} = await Q.from("shows").insert({
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
                const {error: N} = await Q.from("shows").delete().eq("id", _);
                if (N)
                    throw N;
                m()
            } catch (N) {
                console.error("Error deleting show:", N),
                h("Failed to delete show")
            }
        }
    }
      , C = async (_, E) => {
        try {
            const {error: N} = await Q.from("requests").update({
                status: E
            }).eq("id", _);
            if (N)
                throw N;
            g()
        } catch (N) {
            console.error("Error updating request:", N),
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
                            children: [u.jsx(ar, {
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
                            children: [u.jsx(Ll, {
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
                                    children: [u.jsx(ar, {
                                        size: 14
                                    }), u.jsx("span", {
                                        children: new Date(_.start_time).toLocaleDateString()
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [u.jsx(es, {
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
                            children: [u.jsx(Yr, {
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
                            children: [u.jsx(qr, {
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
                                            onClick: () => C(_.id, "approved"),
                                            className: "px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm hover:bg-green-500/20 transition-colors",
                                            children: "Approve"
                                        }), u.jsx("button", {
                                            onClick: () => C(_.id, "rejected"),
                                            className: "px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm hover:bg-red-500/20 transition-colors",
                                            children: "Reject"
                                        })]
                                    })]
                                })]
                            }, _.id)), s.length === 0 && u.jsxs("div", {
                                className: "text-center py-12 text-gray-400",
                                children: [u.jsx(qr, {
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
    const {user: e} = Bt()
      , t = e && ["presenter", "manager", "developer", "co_director", "director"].includes(e.role);
    return u.jsx(n0, {
        children: u.jsxs("div", {
            className: "min-h-screen bg-gray-900 text-white flex flex-col",
            children: [u.jsx(ow, {}), u.jsx("main", {
                className: "container mx-auto px-4 py-8 flex-grow",
                children: u.jsxs(Gg, {
                    children: [u.jsx(tt, {
                        path: "/",
                        element: u.jsx(wx, {})
                    }), u.jsx(tt, {
                        path: "/team",
                        element: u.jsx(Sx, {})
                    }), u.jsx(tt, {
                        path: "/schedule",
                        element: u.jsx(bx, {})
                    }), u.jsx(tt, {
                        path: "/login",
                        element: u.jsx(jx, {})
                    }), u.jsx(tt, {
                        path: "/register",
                        element: u.jsx(Ex, {})
                    }), u.jsx(tt, {
                        path: "/apply",
                        element: u.jsx(Cx, {})
                    }), e && u.jsx(tt, {
                        path: "/account",
                        element: u.jsx(Nx, {})
                    }), t && u.jsx(tt, {
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
