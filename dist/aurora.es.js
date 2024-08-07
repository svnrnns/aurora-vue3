var Qe = Object.defineProperty;
var Ye = (e, t, n) => t in e ? Qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var j = (e, t, n) => (Ye(e, typeof t != "symbol" ? t + "" : t, n), n), ye = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var X = (e, t, n) => (ye(e, t, "read from private field"), n ? n.call(e) : t.get(e)), be = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Q = (e, t, n, r) => (ye(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var H = (e, t, n, r) => ({
  set _(s) {
    Q(e, t, s, n);
  },
  get _() {
    return X(e, t, r);
  }
});
import { ref as Y, watch as Z, computed as Ze } from "vue";
function Ne(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: et } = Object.prototype, { getPrototypeOf: le } = Object, $ = /* @__PURE__ */ ((e) => (t) => {
  const n = et.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => $(t) === e), V = (e) => (t) => typeof t === e, { isArray: B } = Array, _ = V("undefined");
function tt(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Fe = C("ArrayBuffer");
function nt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fe(e.buffer), t;
}
const rt = V("string"), A = V("function"), Ie = V("number"), W = (e) => e !== null && typeof e == "object", st = (e) => e === !0 || e === !1, M = (e) => {
  if ($(e) !== "object")
    return !1;
  const t = le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ot = C("Date"), it = C("File"), at = C("Blob"), ct = C("FileList"), ut = (e) => W(e) && A(e.pipe), lt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = $(e)) === "formdata" || // detect form-data instance
  t === "object" && A(e.toString) && e.toString() === "[object FormData]"));
}, ft = C("URLSearchParams"), dt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function je(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Le = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Be = (e) => !_(e) && e !== Le;
function se() {
  const { caseless: e } = Be(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && je(t, s) || s;
    M(t[o]) && M(r) ? t[o] = se(t[o], r) : M(r) ? t[o] = se({}, r) : B(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const pt = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (s, o) => {
  n && A(s) ? e[o] = Ne(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), ht = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), mt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, yt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && le(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, bt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, wt = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!Ie(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Et = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && le(Uint8Array)), Rt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, St = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ot = C("HTMLFormElement"), At = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), we = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Tt = C("RegExp"), Ue = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, xt = (e) => {
  Ue(e, (t, n) => {
    if (A(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (A(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ct = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Pt = () => {
}, gt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ee = "abcdefghijklmnopqrstuvwxyz", Ee = "0123456789", De = {
  DIGIT: Ee,
  ALPHA: ee,
  ALPHA_DIGIT: ee + ee.toUpperCase() + Ee
}, Nt = (e = 16, t = De.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ft(e) {
  return !!(e && A(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const It = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (W(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = B(r) ? [] : {};
        return k(r, (i, c) => {
          const p = n(i, s + 1);
          !_(p) && (o[c] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, jt = C("AsyncFunction"), Lt = (e) => e && (W(e) || A(e)) && A(e.then) && A(e.catch), a = {
  isArray: B,
  isArrayBuffer: Fe,
  isBuffer: tt,
  isFormData: lt,
  isArrayBufferView: nt,
  isString: rt,
  isNumber: Ie,
  isBoolean: st,
  isObject: W,
  isPlainObject: M,
  isUndefined: _,
  isDate: ot,
  isFile: it,
  isBlob: at,
  isRegExp: Tt,
  isFunction: A,
  isStream: ut,
  isURLSearchParams: ft,
  isTypedArray: Et,
  isFileList: ct,
  forEach: k,
  merge: se,
  extend: pt,
  trim: dt,
  stripBOM: ht,
  inherits: mt,
  toFlatObject: yt,
  kindOf: $,
  kindOfTest: C,
  endsWith: bt,
  toArray: wt,
  forEachEntry: Rt,
  matchAll: St,
  isHTMLForm: Ot,
  hasOwnProperty: we,
  hasOwnProp: we,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ue,
  freezeMethods: xt,
  toObjectSet: Ct,
  toCamelCase: At,
  noop: Pt,
  toFiniteNumber: gt,
  findKey: je,
  global: Le,
  isContextDefined: Be,
  ALPHABET: De,
  generateString: Nt,
  isSpecCompliantForm: Ft,
  toJSONObject: It,
  isAsyncFn: jt,
  isThenable: Lt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const _e = m.prototype, ke = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ke[e] = { value: e };
});
Object.defineProperties(m, ke);
Object.defineProperty(_e, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(_e);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Bt = null;
function oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function qe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Re(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = qe(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ut(e) {
  return a.isArray(e) && !e.some(oe);
}
const Dt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function K(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, w) {
    return !a.isUndefined(w[f]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(d) {
    if (d === null)
      return "";
    if (a.isDate(d))
      return d.toISOString();
    if (!p && a.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? p && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, f, w) {
    let E = d;
    if (d && !w && typeof d == "object") {
      if (a.endsWith(f, "{}"))
        f = r ? f : f.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && Ut(d) || (a.isFileList(d) || a.endsWith(f, "[]")) && (E = a.toArray(d)))
        return f = qe(f), E.forEach(function(S, Xe) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Re([f], Xe, o) : i === null ? f : f + "[]",
            h(S)
          );
        }), !1;
    }
    return oe(d) ? !0 : (t.append(Re(w, f, o), h(d)), !1);
  }
  const u = [], y = Object.assign(Dt, {
    defaultVisitor: l,
    convertValue: h,
    isVisitable: oe
  });
  function R(d, f) {
    if (!a.isUndefined(d)) {
      if (u.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      u.push(d), a.forEach(d, function(E, T) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(T) ? T.trim() : T,
          f,
          y
        )) === !0 && R(E, f ? f.concat(T) : [T]);
      }), u.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function Se(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function fe(e, t) {
  this._pairs = [], e && K(e, this, t);
}
const He = fe.prototype;
He.append = function(t, n) {
  this._pairs.push([t, n]);
};
He.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Se);
  } : Se;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function _t(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || _t, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new fe(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Oe {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ve = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kt = typeof URLSearchParams < "u" ? URLSearchParams : fe, qt = typeof FormData < "u" ? FormData : null, Ht = typeof Blob < "u" ? Blob : null, Mt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kt,
    FormData: qt,
    Blob: Ht
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ze = typeof window < "u" && typeof document < "u", vt = ((e) => ze && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), zt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ze,
  hasStandardBrowserEnv: vt,
  hasStandardBrowserWebWorkerEnv: zt
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...Jt,
  ...Mt
};
function $t(e, t) {
  return K(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Vt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Je(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Wt(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Vt(r), s, n, 0);
    }), n;
  }
  return null;
}
function Kt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const de = {
  transitional: ve,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(Je(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return $t(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return K(
          c ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Kt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || de.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: x.classes.FormData,
    Blob: x.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  de.headers[e] = {};
});
const pe = de, Gt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Xt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Gt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ae = Symbol("internals");
function D(e) {
  return e && String(e).trim().toLowerCase();
}
function v(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(v) : String(e);
}
function Qt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Yt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function te(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Zt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function en(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class G {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, h) {
      const l = D(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = a.findKey(s, l);
      (!u || s[u] === void 0 || h === !0 || h === void 0 && s[u] !== !1) && (s[u || p] = v(c));
    }
    const i = (c, p) => a.forEach(c, (h, l) => o(h, l, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Yt(t) ? i(Xt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = D(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Qt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = D(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || te(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = D(i), i) {
        const c = a.findKey(r, i);
        c && (!n || te(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || te(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = v(s), delete n[o];
        return;
      }
      const c = t ? Zt(o) : String(o).trim();
      c !== o && delete n[o], n[c] = v(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ae] = this[Ae] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = D(i);
      r[c] || (en(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
G.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(G.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(G);
const P = G;
function ne(e, t) {
  const n = this || pe, r = t || n, s = P.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function $e(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(q, m, {
  __CANCEL__: !0
});
function tn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const nn = x.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function rn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ve(e, t) {
  return e && !rn(t) ? sn(e, t) : t;
}
const on = x.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function an(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function cn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const h = Date.now(), l = r[o];
    i || (i = h), n[s] = p, r[s] = h;
    let u = o, y = 0;
    for (; u !== s; )
      y += n[u++], u = u % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), h - i < t)
      return;
    const R = l && h - l;
    return R ? Math.round(y * 1e3 / R) : void 0;
  };
}
function Te(e, t) {
  let n = 0;
  const r = cn(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, c = o - n, p = r(c), h = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const un = typeof XMLHttpRequest < "u", ln = un && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = P.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: c } = e, p;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    let l;
    if (a.isFormData(s)) {
      if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [f, ...w] = l ? l.split(";").map((E) => E.trim()).filter(Boolean) : [];
        o.setContentType([f || "multipart/form-data", ...w].join("; "));
      }
    }
    let u = new XMLHttpRequest();
    if (e.auth) {
      const f = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(f + ":" + w));
    }
    const y = Ve(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Me(y, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function R() {
      if (!u)
        return;
      const f = P.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: f,
        config: e,
        request: u
      };
      tn(function(S) {
        n(S), h();
      }, function(S) {
        r(S), h();
      }, E), u = null;
    }
    if ("onloadend" in u ? u.onloadend = R : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, u.onabort = function() {
      u && (r(new m("Request aborted", m.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || ve;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), r(new m(
        w,
        E.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, x.hasStandardBrowserEnv && (c && a.isFunction(c) && (c = c(e)), c || c !== !1 && on(y))) {
      const f = e.xsrfHeaderName && e.xsrfCookieName && nn.read(e.xsrfCookieName);
      f && o.set(e.xsrfHeaderName, f);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && a.forEach(o.toJSON(), function(w, E) {
      u.setRequestHeader(E, w);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Te(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Te(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (f) => {
      u && (r(!f || f.type ? new q(null, e, u) : f), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const d = an(y);
    if (d && x.protocols.indexOf(d) === -1) {
      r(new m("Unsupported protocol " + d + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, ie = {
  http: Bt,
  xhr: ln
};
a.forEach(ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xe = (e) => `- ${e}`, fn = (e) => a.isFunction(e) || e === null || e === !1, We = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !fn(n) && (r = ie[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, p]) => `adapter ${c} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(xe).join(`
`) : " " + xe(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ie
};
function re(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new q(null, e);
}
function Ce(e) {
  return re(e), e.headers = P.from(e.headers), e.data = ne.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), We.getAdapter(e.adapter || pe.adapter)(e).then(function(r) {
    return re(e), r.data = ne.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return $e(r) || (re(e), r && r.response && (r.response.data = ne.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const Pe = (e) => e instanceof P ? e.toJSON() : e;
function L(e, t) {
  t = t || {};
  const n = {};
  function r(h, l, u) {
    return a.isPlainObject(h) && a.isPlainObject(l) ? a.merge.call({ caseless: u }, h, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(h, l, u) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h, u);
    } else
      return r(h, l, u);
  }
  function o(h, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(h, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, l);
  }
  function c(h, l, u) {
    if (u in t)
      return r(h, l);
    if (u in e)
      return r(void 0, h);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (h, l) => s(Pe(h), Pe(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const u = p[l] || s, y = u(e[l], t[l], l);
    a.isUndefined(y) && u !== c || (n[l] = y);
  }), n;
}
const Ke = "1.6.5", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  he[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ge = {};
he.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ke + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !ge[i] && (ge[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function dn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], p = c === void 0 || i(c, o, e);
      if (p !== !0)
        throw new m("option " + o + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: dn,
  validators: he
}, g = ae.validators;
class J {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Oe(),
      response: new Oe()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = L(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ae.assertOptions(r, {
      silentJSONParsing: g.transitional(g.boolean),
      forcedJSONParsing: g.transitional(g.boolean),
      clarifyTimeoutError: g.transitional(g.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ae.assertOptions(s, {
      encode: g.function,
      serialize: g.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = P.concat(i, o);
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(n) === !1 || (p = p && f.synchronous, c.unshift(f.fulfilled, f.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(f) {
      h.push(f.fulfilled, f.rejected);
    });
    let l, u = 0, y;
    if (!p) {
      const d = [Ce.bind(this), void 0];
      for (d.unshift.apply(d, c), d.push.apply(d, h), y = d.length, l = Promise.resolve(n); u < y; )
        l = l.then(d[u++], d[u++]);
      return l;
    }
    y = c.length;
    let R = n;
    for (u = 0; u < y; ) {
      const d = c[u++], f = c[u++];
      try {
        R = d(R);
      } catch (w) {
        f.call(this, w);
        break;
      }
    }
    try {
      l = Ce.call(this, R);
    } catch (d) {
      return Promise.reject(d);
    }
    for (u = 0, y = h.length; u < y; )
      l = l.then(h[u++], h[u++]);
    return l;
  }
  getUri(t) {
    t = L(this.defaults, t);
    const n = Ve(t.baseURL, t.url);
    return Me(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(L(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(L(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  J.prototype[t] = n(), J.prototype[t + "Form"] = n(!0);
});
const z = J;
class me {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new q(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new me(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const pn = me;
function hn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function mn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ce = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ce).forEach(([e, t]) => {
  ce[t] = e;
});
const yn = ce;
function Ge(e) {
  const t = new z(e), n = Ne(z.prototype.request, t);
  return a.extend(n, z.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ge(L(e, s));
  }, n;
}
const b = Ge(pe);
b.Axios = z;
b.CanceledError = q;
b.CancelToken = pn;
b.isCancel = $e;
b.VERSION = Ke;
b.toFormData = K;
b.AxiosError = m;
b.Cancel = b.CanceledError;
b.all = function(t) {
  return Promise.all(t);
};
b.spread = hn;
b.isAxiosError = mn;
b.mergeConfig = L;
b.AxiosHeaders = P;
b.formToJSON = (e) => Je(a.isHTMLForm(e) ? new FormData(e) : e);
b.getAdapter = We.getAdapter;
b.HttpStatusCode = yn;
b.default = b;
class bn {
  constructor(t) {
    this.name = "AuroraPromiseError", this.msg = t.message, this.errorCode = t.code, this.requestStatus = t.request.status, this.responseStatus = t.response.status, this.axiosInstanceConfig = t.config;
  }
}
class N extends Error {
  constructor(t) {
    super(t), this.name = "AuroraInstanceError";
  }
}
class I extends Error {
  constructor(t) {
    super(t), this.name = "AuroraClassError";
  }
}
var F;
const O = class O {
  constructor(t = "", n = Number.POSITIVE_INFINITY, r = new AbortController()) {
    be(this, F, void 0);
    /**
     * Alias for making an HTTP GET request using the 'call' method.
     *
     * @function
     * @memberof Aurora
     * @name get
     * @param {string} method - The HTTP method (get/post/put/patch/delete).
     * @param {string} endpoint - The endpoint url.
     * @param {Object} headers - Additional headers to include in the request.
     * @param {Object} params - Query parameters to include in the request.
     * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
     * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
     * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
     * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
     * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
     * @throws {AuroraInstanceError} Throws an error if the headers param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the params param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the config param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the abortController param is not of type AbortController (if given).
     */
    j(this, "get", this.call.bind(this, "get"));
    /**
     * Alias for making an HTTP POST request using the 'call' method.
     *
     * @function
     * @memberof Aurora
     * @name post
     * @param {string} method - The HTTP method (get/post/put/patch/delete).
     * @param {string} endpoint - The endpoint url.
     * @param {Object} headers - Additional headers to include in the request.
     * @param {Object} params - Query parameters to include in the request.
     * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
     * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
     * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
     * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
     * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
     * @throws {AuroraInstanceError} Throws an error if the headers param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the params param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the config param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the abortController param is not of type AbortController (if given).
     */
    j(this, "post", this.call.bind(this, "post"));
    /**
     * Alias for making an HTTP PUT request using the 'call' method.
     *
     * @function
     * @memberof Aurora
     * @name put
     * @param {string} method - The HTTP method (get/post/put/patch/delete).
     * @param {string} endpoint - The endpoint url.
     * @param {Object} headers - Additional headers to include in the request.
     * @param {Object} params - Query parameters to include in the request.
     * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
     * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
     * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
     * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
     * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
     * @throws {AuroraInstanceError} Throws an error if the headers param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the params param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the config param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the abortController param is not of type AbortController (if given).
     */
    j(this, "put", this.call.bind(this, "put"));
    /**
     * Alias for making an HTTP PATCH request using the 'call' method.
     *
     * @function
     * @memberof Aurora
     * @name patch
     * @param {string} method - The HTTP method (get/post/put/patch/delete).
     * @param {string} endpoint - The endpoint url.
     * @param {Object} headers - Additional headers to include in the request.
     * @param {Object} params - Query parameters to include in the request.
     * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
     * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
     * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
     * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
     * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
     */
    j(this, "patch", this.call.bind(this, "patch"));
    /**
     * Alias for making an HTTP DELETE request using the 'call' method.
     *
     * @function
     * @memberof Aurora
     * @name delete
     * @param {string} method - The HTTP method (get/post/put/patch/delete).
     * @param {string} endpoint - The endpoint url.
     * @param {Object} headers - Additional headers to include in the request.
     * @param {Object} params - Query parameters to include in the request.
     * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
     * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
     * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
     * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
     * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
     * @throws {AuroraInstanceError} Throws an error if the headers param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the params param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the config param is not of type object (if given).
     * @throws {AuroraInstanceError} Throws an error if the abortController param is not of type AbortController (if given).
     */
    j(this, "delete", this.call.bind(this, "delete"));
    if (typeof t != "string")
      throw new I("Variable must be of type String");
    this.axiosInstance = b.create(), this.axiosInstance.defaults.baseURL = t, this.abortController = r, Q(this, F, 0), this.axiosInstance.defaults.maxConcurrentRequests = n, this.axiosInstance.interceptors.request.use(
      (s) => O.requestInterceptor(s, this),
      (s) => O.simpleFailureInterceptor(s, this)
    ), this.axiosInstance.interceptors.response.use(
      (s) => O.simpleSuccessInterpector(s, this),
      (s) => O.simpleFailureInterceptor(s, this)
    );
  }
  static requestInterceptor(t, n) {
    if (H(n, F)._++, t.maxConcurrentRequests && O.isMaxConcurrentRequestsReached(
      n,
      t.maxConcurrentRequests
    )) {
      const r = b.CancelToken.source();
      t.cancelToken = r.token, r.cancel("Too many concurrent requests");
    }
    return t;
  }
  static simpleFailureInterceptor(t, n) {
    return H(n, F)._--, Promise.reject(t);
  }
  static simpleSuccessInterpector(t, n) {
    return H(n, F)._--, t;
  }
  static isMaxConcurrentRequestsReached(t, n) {
    return X(t, F) > n;
  }
  /**
   * Sets the maximum concurrent requests limit for the Aurora Axios instance.
   *
   * @param {number|null|undefined} limit - The maximum concurrent requests limit.
   *   If null or undefined (left empty), or if 0, concurrency control is effectively disabled.
   *   If a positive number, sets the maximum concurrent requests to that value.
   * @throws {AuroraClassError} Throws an error if the parameter is not a number or is an infinite number.
   */
  setMaxConcurrentRequestsLimit(t) {
    if (t == null || t === 0)
      this.axiosInstance.defaults.maxConcurrentRequests = Number.POSITIVE_INFINITY;
    else if (typeof t == "number" && Number.isFinite(t))
      this.axiosInstance.defaults.maxConcurrentRequests = t;
    else
      throw new I("Param must be of type Number of left empty");
  }
  /**
   * Adds common headers to the Axios instance.
   *
   * @param {Object} headers - An object containing key-value pairs representing headers to be added.
   * @throws {AuroraClassError} Throws an error if the parameter is not of type 'object' or is null.
   */
  addHeaders(t) {
    if (typeof t == "object" && t !== null)
      for (const [n, r] of Object.entries(t))
        this.axiosInstance.defaults.headers.common[n] = r;
    else
      throw new I("Param must be of type Object");
  }
  /**
   * Removes specified headers from the common headers Axios instance. If no parameters are provided, removes all headers.
   *
   * @param {Array<string>?} headerNames - An optional array of header names to be removed. If not provided, removes all headers.
   * @throws {AuroraClassError} Throws an error if the parameter is not an array when provided.
   */
  removeHeaders(t) {
    if (t === void 0)
      this.axiosInstance.defaults.headers.common = {};
    else if (Array.isArray(t))
      t.forEach((n) => {
        delete this.axiosInstance.defaults.headers.common[n];
      });
    else
      throw new I(
        "Invalid input. Please provide an array of header names or no params to remove all headers."
      );
  }
  /**
   * Adds common query parameters to the Axios instance.
   *
   * @param {Object} params - An object containing key-value pairs representing query parameters to be added.
   * @throws {AuroraClassError} Throws an error if the parameter is not of type 'object'.
   */
  addParams(t) {
    if (typeof t == "object" && t !== null)
      for (const [n, r] of Object.entries(t))
        this.axiosInstance.defaults.params[n] = r;
    else
      throw new I("Param must be of type Object");
  }
  /**
   * Removes specified query parameters from the common parameters in the Axios instance. If no parameters are provided, removes all parameters.
   *
   * @param {Array<string>?} paramNames - An optional array of parameter names to be removed. If not provided, removes all parameters.
   * @throws {AuroraClassError} Throws an error if the parameter is not an array when provided.
   */
  removeParams(t) {
    if (t === void 0)
      this.axiosInstance.defaults.params = {};
    else if (Array.isArray(t))
      t.forEach((n) => {
        delete this.axiosInstance.defaults.params[n];
      });
    else
      throw new I(
        "Invalid input. Please provide an array of parameter names or no params to remove all parameters."
      );
  }
  /**
   * Adds a timeout configuration to the Axios instance defaults.
   *
   * @param {number} timeout - Timeout value in milliseconds.
   * @throws {AuroraClassError} Throws an error if the parameter is not a Number.
   */
  addTimeout(t) {
    if (typeof t == "number")
      this.axiosInstance.defaults.timeout = t;
    else
      throw new I("Timeout must be a number in milliseconds.");
  }
  /**
   * Removes the timeout configuration from the Axios instance defaults.
   */
  removeTimeout() {
    delete this.axiosInstance.defaults.timeout;
  }
  /**
   * Simply cancells all ongoing requests that are using the main class controller signal.
   */
  abortAll() {
    this.abortController.abort();
  }
  static validateCall(t, n, r, s, o, i) {
    if (n == null || n.trim() == "")
      throw new N("URL cannot be null");
    if (typeof t != "string")
      throw new N(
        "Method must be of type string (get/post/put/patch/delete)"
      );
    if (r && typeof r != "object")
      throw new N("Headers must be of type object.");
    if (s && typeof s != "object")
      throw new N("Query Params must be of type object.");
    if (o && typeof o != "object")
      throw new N("Config must be of type object.");
    if (i && typeof i != "object")
      throw new N(
        "The AbortController must be of type AbortController."
      );
  }
  static combineURL(t, n) {
    const r = t.replace(/\/+$/, ""), s = n.replace(/^\/+/, "");
    return `${r}/${s}`;
  }
  static mountEndpoint(t, n, r) {
    if (!r && typeof n == "object")
      throw new N(
        "URL or Endpoint cannot be of type object if the call is not reactive."
      );
    if (typeof n == "number")
      throw new N("URL or Endpoint cannot be a number");
    if (r)
      return n == null ? t : t == null || t.trim() == "" ? n.value : O.combineURL(t, n.value);
    if (!r)
      return n == null || n.trim() == "" ? t : t == null || t.trim() == "" ? n : O.combineURL(t, n);
  }
  /**
   * Makes an HTTP request.
   *
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} endpoint - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   * @throws {AuroraInstanceError} Throws an error if the headers param is not of type object (if given).
   * @throws {AuroraInstanceError} Throws an error if the params param is not of type object (if given).
   * @throws {AuroraInstanceError} Throws an error if the config param is not of type object (if given).
   * @throws {AuroraInstanceError} Throws an error if the abortController param is not of type AbortController (if given).
   */
  call(t, n, r, s, o = null, i = null) {
    const c = !!(o && o.reactive);
    let p = O.mountEndpoint(
      this.axiosInstance.defaults.baseURL,
      n,
      c
    );
    O.validateCall(
      t,
      p,
      r,
      s,
      o,
      i
    );
    let h = i ?? this.abortController, l = o && o.timeout ? o.timeout : this.axiosInstance.defaults.timeout, u = o && o.interval ? o.interval : 0;
    const y = Y(!0), R = Y(null), d = Y(null), f = () => {
      y.value = !0, this.axiosInstance({
        url: p,
        method: t.toLowerCase(),
        headers: r,
        params: s,
        signal: h.signal,
        timeout: l
      }).then((S) => {
        R.value = S;
      }).catch((S) => {
        d.value = new bn(S);
      }).finally(() => {
        y.value = !1;
      });
    }, w = setInterval(f, u);
    u <= 0 && setTimeout(() => {
      clearInterval(w);
    }, u + 1);
    const E = () => {
      f();
    }, T = () => {
      clearInterval(w);
    };
    return c && (n && Z(n, () => {
      p = O.mountEndpoint(
        this.axiosInstance.defaults.baseURL,
        n,
        c
      ), f();
    }), r && Z(r, () => {
      f();
    }), s && Z(s, () => {
      f();
    })), Ze(() => ({
      isLoading: y.value,
      response: R.value,
      abortController: h,
      error: d.value,
      recall: E,
      stop: T
    }));
  }
};
F = new WeakMap();
let ue = O;
const U = new ue(), Rn = (e, t, n, r, s, o) => U.call(
  e,
  t,
  n,
  r,
  s,
  o
), Sn = (e, t, n, r, s) => U.get(e, t, n, r, s), On = (e, t, n, r, s) => U.post(e, t, n, r, s), An = (e, t, n, r, s) => U.put(e, t, n, r, s), Tn = (e, t, n, r, s) => U.patch(e, t, n, r, s), xn = (e, t, n, r, s) => U.delete(e, t, n, r, s);
export {
  ue as default,
  Rn as useCall,
  xn as useDelete,
  Sn as useGet,
  Tn as usePatch,
  On as usePost,
  An as usePut
};
