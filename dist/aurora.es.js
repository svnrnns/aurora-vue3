var Xe = Object.defineProperty;
var Qe = (e, t, n) => t in e ? Xe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var j = (e, t, n) => (Qe(e, typeof t != "symbol" ? t + "" : t, n), n), he = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var G = (e, t, n) => (he(e, t, "read from private field"), n ? n.call(e) : t.get(e)), me = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, X = (e, t, n, r) => (he(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var q = (e, t, n, r) => ({
  set _(s) {
    X(e, t, s, n);
  },
  get _() {
    return G(e, t, r);
  }
});
import { ref as Q, watch as Y, computed as Ye } from "vue";
function ge(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ze } = Object.prototype, { getPrototypeOf: ce } = Object, J = /* @__PURE__ */ ((e) => (t) => {
  const n = Ze.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => J(t) === e), $ = (e) => (t) => typeof t === e, { isArray: B } = Array, D = $("undefined");
function et(e) {
  return e !== null && !D(e) && e.constructor !== null && !D(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ne = C("ArrayBuffer");
function tt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ne(e.buffer), t;
}
const nt = $("string"), A = $("function"), Fe = $("number"), V = (e) => e !== null && typeof e == "object", rt = (e) => e === !0 || e === !1, H = (e) => {
  if (J(e) !== "object")
    return !1;
  const t = ce(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, st = C("Date"), ot = C("File"), it = C("Blob"), at = C("FileList"), ct = (e) => V(e) && A(e.pipe), ut = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = J(e)) === "formdata" || // detect form-data instance
  t === "object" && A(e.toString) && e.toString() === "[object FormData]"));
}, lt = C("URLSearchParams"), ft = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _(e, t, { allOwnKeys: n = !1 } = {}) {
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
function Ie(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const je = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Le = (e) => !D(e) && e !== je;
function re() {
  const { caseless: e } = Le(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Ie(t, s) || s;
    H(t[o]) && H(r) ? t[o] = re(t[o], r) : H(r) ? t[o] = re({}, r) : B(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && _(arguments[r], n);
  return t;
}
const dt = (e, t, n, { allOwnKeys: r } = {}) => (_(t, (s, o) => {
  n && A(s) ? e[o] = ge(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), pt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ht = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, mt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ce(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, bt = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!Fe(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, wt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ce(Uint8Array)), Et = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Rt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, St = C("HTMLFormElement"), Ot = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), ye = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), At = C("RegExp"), Be = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Tt = (e) => {
  Be(e, (t, n) => {
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
}, xt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Ct = () => {
}, Pt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Z = "abcdefghijklmnopqrstuvwxyz", be = "0123456789", Ue = {
  DIGIT: be,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + be
}, gt = (e = 16, t = Ue.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Nt(e) {
  return !!(e && A(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ft = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (V(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = B(r) ? [] : {};
        return _(r, (i, c) => {
          const p = n(i, s + 1);
          !D(p) && (o[c] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, It = C("AsyncFunction"), jt = (e) => e && (V(e) || A(e)) && A(e.then) && A(e.catch), a = {
  isArray: B,
  isArrayBuffer: Ne,
  isBuffer: et,
  isFormData: ut,
  isArrayBufferView: tt,
  isString: nt,
  isNumber: Fe,
  isBoolean: rt,
  isObject: V,
  isPlainObject: H,
  isUndefined: D,
  isDate: st,
  isFile: ot,
  isBlob: it,
  isRegExp: At,
  isFunction: A,
  isStream: ct,
  isURLSearchParams: lt,
  isTypedArray: wt,
  isFileList: at,
  forEach: _,
  merge: re,
  extend: dt,
  trim: ft,
  stripBOM: pt,
  inherits: ht,
  toFlatObject: mt,
  kindOf: J,
  kindOfTest: C,
  endsWith: yt,
  toArray: bt,
  forEachEntry: Et,
  matchAll: Rt,
  isHTMLForm: St,
  hasOwnProperty: ye,
  hasOwnProp: ye,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Be,
  freezeMethods: Tt,
  toObjectSet: xt,
  toCamelCase: Ot,
  noop: Ct,
  toFiniteNumber: Pt,
  findKey: Ie,
  global: je,
  isContextDefined: Le,
  ALPHABET: Ue,
  generateString: gt,
  isSpecCompliantForm: Nt,
  toJSONObject: Ft,
  isAsyncFn: It,
  isThenable: jt
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
const De = m.prototype, _e = {};
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
  _e[e] = { value: e };
});
Object.defineProperties(m, _e);
Object.defineProperty(De, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(De);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Lt = null;
function se(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ke(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ke(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Bt(e) {
  return a.isArray(e) && !e.some(se);
}
const Ut = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function W(e, t, n) {
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
      else if (a.isArray(d) && Bt(d) || (a.isFileList(d) || a.endsWith(f, "[]")) && (E = a.toArray(d)))
        return f = ke(f), E.forEach(function(S, Ge) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? we([f], Ge, o) : i === null ? f : f + "[]",
            h(S)
          );
        }), !1;
    }
    return se(d) ? !0 : (t.append(we(w, f, o), h(d)), !1);
  }
  const u = [], y = Object.assign(Ut, {
    defaultVisitor: l,
    convertValue: h,
    isVisitable: se
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
function Ee(e) {
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
function ue(e, t) {
  this._pairs = [], e && W(e, this, t);
}
const qe = ue.prototype;
qe.append = function(t, n) {
  this._pairs.push([t, n]);
};
qe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ee);
  } : Ee;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Dt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function He(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Dt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ue(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Re {
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
const Me = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _t = typeof URLSearchParams < "u" ? URLSearchParams : ue, kt = typeof FormData < "u" ? FormData : null, qt = typeof Blob < "u" ? Blob : null, Ht = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _t,
    FormData: kt,
    Blob: qt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ve = typeof window < "u" && typeof document < "u", Mt = ((e) => ve && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), vt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ve,
  hasStandardBrowserEnv: Mt,
  hasStandardBrowserWebWorkerEnv: vt
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...zt,
  ...Ht
};
function Jt(e, t) {
  return W(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $t(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Vt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function ze(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Vt(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t($t(r), s, n, 0);
    }), n;
  }
  return null;
}
function Wt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const le = {
  transitional: Me,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(ze(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Jt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return W(
          c ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Wt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || le.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  le.headers[e] = {};
});
const fe = le, Kt = a.toObjectSet([
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
]), Gt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Kt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Se = Symbol("internals");
function U(e) {
  return e && String(e).trim().toLowerCase();
}
function M(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(M) : String(e);
}
function Xt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Qt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ee(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Yt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Zt(e, t) {
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
class K {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, h) {
      const l = U(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = a.findKey(s, l);
      (!u || s[u] === void 0 || h === !0 || h === void 0 && s[u] !== !1) && (s[u || p] = M(c));
    }
    const i = (c, p) => a.forEach(c, (h, l) => o(h, l, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Qt(t) ? i(Gt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = U(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Xt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = U(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = U(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ee(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ee(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = M(s), delete n[o];
        return;
      }
      const c = t ? Yt(o) : String(o).trim();
      c !== o && delete n[o], n[c] = M(s), r[c] = !0;
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
    const r = (this[Se] = this[Se] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = U(i);
      r[c] || (Zt(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
K.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(K.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(K);
const P = K;
function te(e, t) {
  const n = this || fe, r = t || n, s = P.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Je(e) {
  return !!(e && e.__CANCEL__);
}
function k(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(k, m, {
  __CANCEL__: !0
});
function en(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const tn = x.hasStandardBrowserEnv ? (
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
function nn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $e(e, t) {
  return e && !nn(t) ? rn(e, t) : t;
}
const sn = x.hasStandardBrowserEnv ? (
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
function on(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function an(e, t) {
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
function Oe(e, t) {
  let n = 0;
  const r = an(50, 250);
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
const cn = typeof XMLHttpRequest < "u", un = cn && function(e) {
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
    const y = $e(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), He(y, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
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
      en(function(S) {
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
      const E = e.transitional || Me;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), r(new m(
        w,
        E.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, x.hasStandardBrowserEnv && (c && a.isFunction(c) && (c = c(e)), c || c !== !1 && sn(y))) {
      const f = e.xsrfHeaderName && e.xsrfCookieName && tn.read(e.xsrfCookieName);
      f && o.set(e.xsrfHeaderName, f);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && a.forEach(o.toJSON(), function(w, E) {
      u.setRequestHeader(E, w);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Oe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Oe(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (f) => {
      u && (r(!f || f.type ? new k(null, e, u) : f), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const d = on(y);
    if (d && x.protocols.indexOf(d) === -1) {
      r(new m("Unsupported protocol " + d + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, oe = {
  http: Lt,
  xhr: un
};
a.forEach(oe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ae = (e) => `- ${e}`, ln = (e) => a.isFunction(e) || e === null || e === !1, Ve = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !ln(n) && (r = oe[(i = String(n)).toLowerCase()], r === void 0))
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
` + o.map(Ae).join(`
`) : " " + Ae(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: oe
};
function ne(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new k(null, e);
}
function Te(e) {
  return ne(e), e.headers = P.from(e.headers), e.data = te.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ve.getAdapter(e.adapter || fe.adapter)(e).then(function(r) {
    return ne(e), r.data = te.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return Je(r) || (ne(e), r && r.response && (r.response.data = te.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const xe = (e) => e instanceof P ? e.toJSON() : e;
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
    headers: (h, l) => s(xe(h), xe(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const u = p[l] || s, y = u(e[l], t[l], l);
    a.isUndefined(y) && u !== c || (n[l] = y);
  }), n;
}
const We = "1.6.5", de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ce = {};
de.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + We + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Ce[i] && (Ce[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function fn(e, t, n) {
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
const ie = {
  assertOptions: fn,
  validators: de
}, g = ie.validators;
class z {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Re(),
      response: new Re()
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
    r !== void 0 && ie.assertOptions(r, {
      silentJSONParsing: g.transitional(g.boolean),
      forcedJSONParsing: g.transitional(g.boolean),
      clarifyTimeoutError: g.transitional(g.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ie.assertOptions(s, {
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
      const d = [Te.bind(this), void 0];
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
      l = Te.call(this, R);
    } catch (d) {
      return Promise.reject(d);
    }
    for (u = 0, y = h.length; u < y; )
      l = l.then(h[u++], h[u++]);
    return l;
  }
  getUri(t) {
    t = L(this.defaults, t);
    const n = $e(t.baseURL, t.url);
    return He(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(n, r) {
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
  z.prototype[t] = n(), z.prototype[t + "Form"] = n(!0);
});
const v = z;
class pe {
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
      r.reason || (r.reason = new k(o, i, c), n(r.reason));
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
      token: new pe(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const dn = pe;
function pn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ae = {
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
Object.entries(ae).forEach(([e, t]) => {
  ae[t] = e;
});
const mn = ae;
function Ke(e) {
  const t = new v(e), n = ge(v.prototype.request, t);
  return a.extend(n, v.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ke(L(e, s));
  }, n;
}
const b = Ke(fe);
b.Axios = v;
b.CanceledError = k;
b.CancelToken = dn;
b.isCancel = Je;
b.VERSION = We;
b.toFormData = W;
b.AxiosError = m;
b.Cancel = b.CanceledError;
b.all = function(t) {
  return Promise.all(t);
};
b.spread = pn;
b.isAxiosError = hn;
b.mergeConfig = L;
b.AxiosHeaders = P;
b.formToJSON = (e) => ze(a.isHTMLForm(e) ? new FormData(e) : e);
b.getAdapter = Ve.getAdapter;
b.HttpStatusCode = mn;
b.default = b;
class yn {
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
    me(this, F, void 0);
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
    this.axiosInstance = b.create(), this.axiosInstance.defaults.baseURL = t, this.abortController = r, X(this, F, 0), this.axiosInstance.defaults.maxConcurrentRequests = n, this.axiosInstance.interceptors.request.use(
      (s) => O.requestInterceptor(s, this),
      (s) => O.simpleFailureInterceptor(s, this)
    ), this.axiosInstance.interceptors.response.use(
      (s) => O.simpleSuccessInterpector(s, this),
      (s) => O.simpleFailureInterceptor(s, this)
    );
  }
  static requestInterceptor(t, n) {
    if (q(n, F)._++, t.maxConcurrentRequests && O.isMaxConcurrentRequestsReached(
      n,
      t.maxConcurrentRequests
    )) {
      const r = b.CancelToken.source();
      t.cancelToken = r.token, r.cancel("Too many concurrent requests");
    }
    return t;
  }
  static simpleFailureInterceptor(t, n) {
    return q(n, F)._--, Promise.reject(t);
  }
  static simpleSuccessInterpector(t, n) {
    return q(n, F)._--, t;
  }
  static isMaxConcurrentRequestsReached(t, n) {
    return G(t, F) > n;
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
    const y = Q(!0), R = Q(null), d = Q(null), f = () => {
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
        d.value = new yn(S);
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
    return c && (n && Y(n, () => {
      p = O.mountEndpoint(
        this.axiosInstance.defaults.baseURL,
        n,
        c
      ), f();
    }), r && Y(r, () => {
      f();
    }), s && Y(s, () => {
      f();
    })), Ye(() => ({
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
let Pe = O;
export {
  Pe as default
};
