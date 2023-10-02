var is = Object.defineProperty;
var ss = (C, f, m) => f in C ? is(C, f, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: m
}) : C[f] = m;
var re = (C, f, m) => (ss(C, typeof f != "symbol" ? f + "" : f, m), m);
import {
  c as os,
  g as as
} from "./common.js";
var Ur = {
  exports: {}
};
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function (C) {
  (function (f, m) {
    C.exports = f.document ? m(f, !0) : function (x) {
      if (!x.document) throw new Error("jQuery requires a window with a document");
      return m(x)
    }
  })(typeof window < "u" ? window : os, function (f, m) {
    var x = [],
      N = Object.getPrototypeOf,
      _ = x.slice,
      D = x.flat ? function (e) {
        return x.flat.call(e)
      } : function (e) {
        return x.concat.apply([], e)
      },
      k = x.push,
      ee = x.indexOf,
      _t = {},
      Gn = _t.toString,
      Dt = _t.hasOwnProperty,
      Xn = Dt.toString,
      Vr = Xn.call(Object),
      X = {},
      W = function (t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function"
      },
      Ke = function (t) {
        return t != null && t === t.window
      },
      B = f.document,
      Gr = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

    function Kn(e, t, n) {
      n = n || B;
      var r, s, o = n.createElement("script");
      if (o.text = e, t)
        for (r in Gr) s = t[r] || t.getAttribute && t.getAttribute(r), s && o.setAttribute(r, s);
      n.head.appendChild(o).parentNode.removeChild(o)
    }

    function Qe(e) {
      return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? _t[Gn.call(e)] || "object" : typeof e
    }
    var Qn = "3.6.0",
      i = function (e, t) {
        return new i.fn.init(e, t)
      };
    i.fn = i.prototype = {
      jquery: Qn,
      constructor: i,
      length: 0,
      toArray: function () {
        return _.call(this)
      },
      get: function (e) {
        return e == null ? _.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function (e) {
        var t = i.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function (e) {
        return i.each(this, e)
      },
      map: function (e) {
        return this.pushStack(i.map(this, function (t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function () {
        return this.pushStack(_.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(i.grep(this, function (e, t) {
          return (t + 1) % 2
        }))
      },
      odd: function () {
        return this.pushStack(i.grep(this, function (e, t) {
          return t % 2
        }))
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: k,
      sort: x.sort,
      splice: x.splice
    }, i.extend = i.fn.extend = function () {
      var e, t, n, r, s, o, a = arguments[0] || {},
        c = 1,
        d = arguments.length,
        h = !1;
      for (typeof a == "boolean" && (h = a, a = arguments[c] || {}, c++), typeof a != "object" && !W(a) && (a = {}), c === d && (a = this, c--); c < d; c++)
        if ((e = arguments[c]) != null)
          for (t in e) r = e[t], !(t === "__proto__" || a === r) && (h && r && (i.isPlainObject(r) || (s = Array.isArray(r))) ? (n = a[t], s && !Array.isArray(n) ? o = [] : !s && !i.isPlainObject(n) ? o = {} : o = n, s = !1, a[t] = i.extend(h, o, r)) : r !== void 0 && (a[t] = r));
      return a
    }, i.extend({
      expando: "jQuery" + (Qn + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !e || Gn.call(e) !== "[object Object]" ? !1 : (t = N(e), t ? (n = Dt.call(t, "constructor") && t.constructor, typeof n == "function" && Xn.call(n) === Vr) : !0)
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function (e, t, n) {
        Kn(e, {
          nonce: t && t.nonce
        }, n)
      },
      each: function (e, t) {
        var n, r = 0;
        if (on(e))
          for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
        else
          for (r in e)
            if (t.call(e[r], r, e[r]) === !1) break;
        return e
      },
      makeArray: function (e, t) {
        var n = t || [];
        return e != null && (on(Object(e)) ? i.merge(n, typeof e == "string" ? [e] : e) : k.call(n, e)), n
      },
      inArray: function (e, t, n) {
        return t == null ? -1 : ee.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, s = e.length; r < n; r++) e[s++] = t[r];
        return e.length = s, e
      },
      grep: function (e, t, n) {
        for (var r, s = [], o = 0, a = e.length, c = !n; o < a; o++) r = !t(e[o], o), r !== c && s.push(e[o]);
        return s
      },
      map: function (e, t, n) {
        var r, s, o = 0,
          a = [];
        if (on(e))
          for (r = e.length; o < r; o++) s = t(e[o], o, n), s != null && a.push(s);
        else
          for (o in e) s = t(e[o], o, n), s != null && a.push(s);
        return D(a)
      },
      guid: 1,
      support: X
    }), typeof Symbol == "function" && (i.fn[Symbol.iterator] = x[Symbol.iterator]), i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      _t["[object " + t + "]"] = t.toLowerCase()
    });

    function on(e) {
      var t = !!e && "length" in e && e.length,
        n = Qe(e);
      return W(e) || Ke(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }
    var Me = function (e) {
      var t, n, r, s, o, a, c, d, h, v, S, y, b, L, $, P, se, ie, ve, Y = "sizzle" + 1 * new Date,
        M = e.document,
        he = 0,
        U = 0,
        ne = Wt(),
        ht = Wt(),
        It = Wt(),
        me = Wt(),
        Be = function (u, l) {
          return u === l && (S = !0), 0
        },
        ze = {}.hasOwnProperty,
        ge = [],
        Re = ge.pop,
        Ee = ge.push,
        Ie = ge.push,
        Or = ge.slice,
        Ue = function (u, l) {
          for (var p = 0, w = u.length; p < w; p++)
            if (u[p] === l) return p;
          return -1
        },
        Tn = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        Ve = "(?:\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        Hr = "\\[" + K + "*(" + Ve + ")(?:" + K + "*([*^$|!~]?=)" + K + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ve + "))|)" + K + "*\\]",
        Cn = ":(" + Ve + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Hr + ")*)|.*)\\)|)",
        zi = new RegExp(K + "+", "g"),
        Mt = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Ui = new RegExp("^" + K + "*," + K + "*"),
        Rr = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        Vi = new RegExp(K + "|>"),
        Gi = new RegExp(Cn),
        Xi = new RegExp("^" + Ve + "$"),
        $t = {
          ID: new RegExp("^#(" + Ve + ")"),
          CLASS: new RegExp("^\\.(" + Ve + ")"),
          TAG: new RegExp("^(" + Ve + "|[*])"),
          ATTR: new RegExp("^" + Hr),
          PSEUDO: new RegExp("^" + Cn),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Tn + ")$", "i"),
          needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        },
        Ki = /HTML$/i,
        Qi = /^(?:input|select|textarea|button)$/i,
        Yi = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        Ji = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Sn = /[+~]/,
        Oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\([^\\r\\n\\f])", "g"),
        He = function (u, l) {
          var p = "0x" + u.slice(1) - 65536;
          return l || (p < 0 ? String.fromCharCode(p + 65536) : String.fromCharCode(p >> 10 | 55296, p & 1023 | 56320))
        },
        Ir = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Mr = function (u, l) {
          return l ? u === "\0" ? "�" : u.slice(0, -1) + "\\" + u.charCodeAt(u.length - 1).toString(16) + " " : "\\" + u
        },
        $r = function () {
          y()
        },
        Zi = Bt(function (u) {
          return u.disabled === !0 && u.nodeName.toLowerCase() === "fieldset"
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        Ie.apply(ge = Or.call(M.childNodes), M.childNodes), ge[M.childNodes.length].nodeType
      } catch {
        Ie = {
          apply: ge.length ? function (l, p) {
            Ee.apply(l, Or.call(p))
          } : function (l, p) {
            for (var w = l.length, g = 0; l[w++] = p[g++];);
            l.length = w - 1
          }
        }
      }

      function J(u, l, p, w) {
        var g, T, E, A, j, O, q, I = l && l.ownerDocument,
          F = l ? l.nodeType : 9;
        if (p = p || [], typeof u != "string" || !u || F !== 1 && F !== 9 && F !== 11) return p;
        if (!w && (y(l), l = l || b, $)) {
          if (F !== 11 && (j = Ji.exec(u)))
            if (g = j[1]) {
              if (F === 9)
                if (E = l.getElementById(g)) {
                  if (E.id === g) return p.push(E), p
                } else return p;
              else if (I && (E = I.getElementById(g)) && ve(l, E) && E.id === g) return p.push(E), p
            } else {
              if (j[2]) return Ie.apply(p, l.getElementsByTagName(u)), p;
              if ((g = j[3]) && n.getElementsByClassName && l.getElementsByClassName) return Ie.apply(p, l.getElementsByClassName(g)), p
            } if (n.qsa && !me[u + " "] && (!P || !P.test(u)) && (F !== 1 || l.nodeName.toLowerCase() !== "object")) {
            if (q = u, I = l, F === 1 && (Vi.test(u) || Rr.test(u))) {
              for (I = Sn.test(u) && Nn(l.parentNode) || l, (I !== l || !n.scope) && ((A = l.getAttribute("id")) ? A = A.replace(Ir, Mr) : l.setAttribute("id", A = Y)), O = a(u), T = O.length; T--;) O[T] = (A ? "#" + A : ":scope") + " " + Ft(O[T]);
              q = O.join(",")
            }
            try {
              return Ie.apply(p, I.querySelectorAll(q)), p
            } catch {
              me(u, !0)
            } finally {
              A === Y && l.removeAttribute("id")
            }
          }
        }
        return d(u.replace(Mt, "$1"), l, p, w)
      }

      function Wt() {
        var u = [];

        function l(p, w) {
          return u.push(p + " ") > r.cacheLength && delete l[u.shift()], l[p + " "] = w
        }
        return l
      }

      function ke(u) {
        return u[Y] = !0, u
      }

      function Ae(u) {
        var l = b.createElement("fieldset");
        try {
          return !!u(l)
        } catch {
          return !1
        } finally {
          l.parentNode && l.parentNode.removeChild(l), l = null
        }
      }

      function En(u, l) {
        for (var p = u.split("|"), w = p.length; w--;) r.attrHandle[p[w]] = l
      }

      function Wr(u, l) {
        var p = l && u,
          w = p && u.nodeType === 1 && l.nodeType === 1 && u.sourceIndex - l.sourceIndex;
        if (w) return w;
        if (p) {
          for (; p = p.nextSibling;)
            if (p === l) return -1
        }
        return u ? 1 : -1
      }

      function es(u) {
        return function (l) {
          var p = l.nodeName.toLowerCase();
          return p === "input" && l.type === u
        }
      }

      function ts(u) {
        return function (l) {
          var p = l.nodeName.toLowerCase();
          return (p === "input" || p === "button") && l.type === u
        }
      }

      function Fr(u) {
        return function (l) {
          return "form" in l ? l.parentNode && l.disabled === !1 ? "label" in l ? "label" in l.parentNode ? l.parentNode.disabled === u : l.disabled === u : l.isDisabled === u || l.isDisabled !== !u && Zi(l) === u : l.disabled === u : "label" in l ? l.disabled === u : !1
        }
      }

      function Ge(u) {
        return ke(function (l) {
          return l = +l, ke(function (p, w) {
            for (var g, T = u([], p.length, l), E = T.length; E--;) p[g = T[E]] && (p[g] = !(w[g] = p[g]))
          })
        })
      }

      function Nn(u) {
        return u && typeof u.getElementsByTagName < "u" && u
      }
      n = J.support = {}, o = J.isXML = function (u) {
        var l = u && u.namespaceURI,
          p = u && (u.ownerDocument || u).documentElement;
        return !Ki.test(l || p && p.nodeName || "HTML")
      }, y = J.setDocument = function (u) {
        var l, p, w = u ? u.ownerDocument || u : M;
        return w == b || w.nodeType !== 9 || !w.documentElement || (b = w, L = b.documentElement, $ = !o(b), M != b && (p = b.defaultView) && p.top !== p && (p.addEventListener ? p.addEventListener("unload", $r, !1) : p.attachEvent && p.attachEvent("onunload", $r)), n.scope = Ae(function (g) {
          return L.appendChild(g).appendChild(b.createElement("div")), typeof g.querySelectorAll < "u" && !g.querySelectorAll(":scope fieldset div").length
        }), n.attributes = Ae(function (g) {
          return g.className = "i", !g.getAttribute("className")
        }), n.getElementsByTagName = Ae(function (g) {
          return g.appendChild(b.createComment("")), !g.getElementsByTagName("*").length
        }), n.getElementsByClassName = gt.test(b.getElementsByClassName), n.getById = Ae(function (g) {
          return L.appendChild(g).id = Y, !b.getElementsByName || !b.getElementsByName(Y).length
        }), n.getById ? (r.filter.ID = function (g) {
          var T = g.replace(Oe, He);
          return function (E) {
            return E.getAttribute("id") === T
          }
        }, r.find.ID = function (g, T) {
          if (typeof T.getElementById < "u" && $) {
            var E = T.getElementById(g);
            return E ? [E] : []
          }
        }) : (r.filter.ID = function (g) {
          var T = g.replace(Oe, He);
          return function (E) {
            var A = typeof E.getAttributeNode < "u" && E.getAttributeNode("id");
            return A && A.value === T
          }
        }, r.find.ID = function (g, T) {
          if (typeof T.getElementById < "u" && $) {
            var E, A, j, O = T.getElementById(g);
            if (O) {
              if (E = O.getAttributeNode("id"), E && E.value === g) return [O];
              for (j = T.getElementsByName(g), A = 0; O = j[A++];)
                if (E = O.getAttributeNode("id"), E && E.value === g) return [O]
            }
            return []
          }
        }), r.find.TAG = n.getElementsByTagName ? function (g, T) {
          if (typeof T.getElementsByTagName < "u") return T.getElementsByTagName(g);
          if (n.qsa) return T.querySelectorAll(g)
        } : function (g, T) {
          var E, A = [],
            j = 0,
            O = T.getElementsByTagName(g);
          if (g === "*") {
            for (; E = O[j++];) E.nodeType === 1 && A.push(E);
            return A
          }
          return O
        }, r.find.CLASS = n.getElementsByClassName && function (g, T) {
          if (typeof T.getElementsByClassName < "u" && $) return T.getElementsByClassName(g)
        }, se = [], P = [], (n.qsa = gt.test(b.querySelectorAll)) && (Ae(function (g) {
          var T;
          L.appendChild(g).innerHTML = "<a id='" + Y + "'></a><select id='" + Y + "-\r\\' msallowcapture=''><option selected=''></option></select>", g.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + K + `*(?:''|"")`), g.querySelectorAll("[selected]").length || P.push("\\[" + K + "*(?:value|" + Tn + ")"), g.querySelectorAll("[id~=" + Y + "-]").length || P.push("~="), T = b.createElement("input"), T.setAttribute("name", ""), g.appendChild(T), g.querySelectorAll("[name='']").length || P.push("\\[" + K + "*name" + K + "*=" + K + `*(?:''|"")`), g.querySelectorAll(":checked").length || P.push(":checked"), g.querySelectorAll("a#" + Y + "+*").length || P.push(".#.+[+~]"), g.querySelectorAll("\\\f"), P.push("[\\r\\n\\f]")
        }), Ae(function (g) {
          g.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var T = b.createElement("input");
          T.setAttribute("type", "hidden"), g.appendChild(T).setAttribute("name", "D"), g.querySelectorAll("[name=d]").length && P.push("name" + K + "*[*^$|!~]?="), g.querySelectorAll(":enabled").length !== 2 && P.push(":enabled", ":disabled"), L.appendChild(g).disabled = !0, g.querySelectorAll(":disabled").length !== 2 && P.push(":enabled", ":disabled"), g.querySelectorAll("*,:x"), P.push(",.*:")
        })), (n.matchesSelector = gt.test(ie = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && Ae(function (g) {
          n.disconnectedMatch = ie.call(g, "*"), ie.call(g, "[s!='']:x"), se.push("!=", Cn)
        }), P = P.length && new RegExp(P.join("|")), se = se.length && new RegExp(se.join("|")), l = gt.test(L.compareDocumentPosition), ve = l || gt.test(L.contains) ? function (g, T) {
          var E = g.nodeType === 9 ? g.documentElement : g,
            A = T && T.parentNode;
          return g === A || !!(A && A.nodeType === 1 && (E.contains ? E.contains(A) : g.compareDocumentPosition && g.compareDocumentPosition(A) & 16))
        } : function (g, T) {
          if (T) {
            for (; T = T.parentNode;)
              if (T === g) return !0
          }
          return !1
        }, Be = l ? function (g, T) {
          if (g === T) return S = !0, 0;
          var E = !g.compareDocumentPosition - !T.compareDocumentPosition;
          return E || (E = (g.ownerDocument || g) == (T.ownerDocument || T) ? g.compareDocumentPosition(T) : 1, E & 1 || !n.sortDetached && T.compareDocumentPosition(g) === E ? g == b || g.ownerDocument == M && ve(M, g) ? -1 : T == b || T.ownerDocument == M && ve(M, T) ? 1 : v ? Ue(v, g) - Ue(v, T) : 0 : E & 4 ? -1 : 1)
        } : function (g, T) {
          if (g === T) return S = !0, 0;
          var E, A = 0,
            j = g.parentNode,
            O = T.parentNode,
            q = [g],
            I = [T];
          if (!j || !O) return g == b ? -1 : T == b ? 1 : j ? -1 : O ? 1 : v ? Ue(v, g) - Ue(v, T) : 0;
          if (j === O) return Wr(g, T);
          for (E = g; E = E.parentNode;) q.unshift(E);
          for (E = T; E = E.parentNode;) I.unshift(E);
          for (; q[A] === I[A];) A++;
          return A ? Wr(q[A], I[A]) : q[A] == M ? -1 : I[A] == M ? 1 : 0
        }), b
      }, J.matches = function (u, l) {
        return J(u, null, null, l)
      }, J.matchesSelector = function (u, l) {
        if (y(u), n.matchesSelector && $ && !me[l + " "] && (!se || !se.test(l)) && (!P || !P.test(l))) try {
          var p = ie.call(u, l);
          if (p || n.disconnectedMatch || u.document && u.document.nodeType !== 11) return p
        } catch {
          me(l, !0)
        }
        return J(l, b, null, [u]).length > 0
      }, J.contains = function (u, l) {
        return (u.ownerDocument || u) != b && y(u), ve(u, l)
      }, J.attr = function (u, l) {
        (u.ownerDocument || u) != b && y(u);
        var p = r.attrHandle[l.toLowerCase()],
          w = p && ze.call(r.attrHandle, l.toLowerCase()) ? p(u, l, !$) : void 0;
        return w !== void 0 ? w : n.attributes || !$ ? u.getAttribute(l) : (w = u.getAttributeNode(l)) && w.specified ? w.value : null
      }, J.escape = function (u) {
        return (u + "").replace(Ir, Mr)
      }, J.error = function (u) {
        throw new Error("Syntax error, unrecognized expression: " + u)
      }, J.uniqueSort = function (u) {
        var l, p = [],
          w = 0,
          g = 0;
        if (S = !n.detectDuplicates, v = !n.sortStable && u.slice(0), u.sort(Be), S) {
          for (; l = u[g++];) l === u[g] && (w = p.push(g));
          for (; w--;) u.splice(p[w], 1)
        }
        return v = null, u
      }, s = J.getText = function (u) {
        var l, p = "",
          w = 0,
          g = u.nodeType;
        if (g) {
          if (g === 1 || g === 9 || g === 11) {
            if (typeof u.textContent == "string") return u.textContent;
            for (u = u.firstChild; u; u = u.nextSibling) p += s(u)
          } else if (g === 3 || g === 4) return u.nodeValue
        } else
          for (; l = u[w++];) p += s(l);
        return p
      }, r = J.selectors = {
        cacheLength: 50,
        createPseudo: ke,
        match: $t,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (u) {
            return u[1] = u[1].replace(Oe, He), u[3] = (u[3] || u[4] || u[5] || "").replace(Oe, He), u[2] === "~=" && (u[3] = " " + u[3] + " "), u.slice(0, 4)
          },
          CHILD: function (u) {
            return u[1] = u[1].toLowerCase(), u[1].slice(0, 3) === "nth" ? (u[3] || J.error(u[0]), u[4] = +(u[4] ? u[5] + (u[6] || 1) : 2 * (u[3] === "even" || u[3] === "odd")), u[5] = +(u[7] + u[8] || u[3] === "odd")) : u[3] && J.error(u[0]), u
          },
          PSEUDO: function (u) {
            var l, p = !u[6] && u[2];
            return $t.CHILD.test(u[0]) ? null : (u[3] ? u[2] = u[4] || u[5] || "" : p && Gi.test(p) && (l = a(p, !0)) && (l = p.indexOf(")", p.length - l) - p.length) && (u[0] = u[0].slice(0, l), u[2] = p.slice(0, l)), u.slice(0, 3))
          }
        },
        filter: {
          TAG: function (u) {
            var l = u.replace(Oe, He).toLowerCase();
            return u === "*" ? function () {
              return !0
            } : function (p) {
              return p.nodeName && p.nodeName.toLowerCase() === l
            }
          },
          CLASS: function (u) {
            var l = ne[u + " "];
            return l || (l = new RegExp("(^|" + K + ")" + u + "(" + K + "|$)")) && ne(u, function (p) {
              return l.test(typeof p.className == "string" && p.className || typeof p.getAttribute < "u" && p.getAttribute("class") || "")
            })
          },
          ATTR: function (u, l, p) {
            return function (w) {
              var g = J.attr(w, u);
              return g == null ? l === "!=" : l ? (g += "", l === "=" ? g === p : l === "!=" ? g !== p : l === "^=" ? p && g.indexOf(p) === 0 : l === "*=" ? p && g.indexOf(p) > -1 : l === "$=" ? p && g.slice(-p.length) === p : l === "~=" ? (" " + g.replace(zi, " ") + " ").indexOf(p) > -1 : l === "|=" ? g === p || g.slice(0, p.length + 1) === p + "-" : !1) : !0
            }
          },
          CHILD: function (u, l, p, w, g) {
            var T = u.slice(0, 3) !== "nth",
              E = u.slice(-4) !== "last",
              A = l === "of-type";
            return w === 1 && g === 0 ? function (j) {
              return !!j.parentNode
            } : function (j, O, q) {
              var I, F, Z, H, oe, fe, be = T !== E ? "nextSibling" : "previousSibling",
                te = j.parentNode,
                yt = A && j.nodeName.toLowerCase(),
                vt = !q && !A,
                we = !1;
              if (te) {
                if (T) {
                  for (; be;) {
                    for (H = j; H = H[be];)
                      if (A ? H.nodeName.toLowerCase() === yt : H.nodeType === 1) return !1;
                    fe = be = u === "only" && !fe && "nextSibling"
                  }
                  return !0
                }
                if (fe = [E ? te.firstChild : te.lastChild], E && vt) {
                  for (H = te, Z = H[Y] || (H[Y] = {}), F = Z[H.uniqueID] || (Z[H.uniqueID] = {}), I = F[u] || [], oe = I[0] === he && I[1], we = oe && I[2], H = oe && te.childNodes[oe]; H = ++oe && H && H[be] || (we = oe = 0) || fe.pop();)
                    if (H.nodeType === 1 && ++we && H === j) {
                      F[u] = [he, oe, we];
                      break
                    }
                } else if (vt && (H = j, Z = H[Y] || (H[Y] = {}), F = Z[H.uniqueID] || (Z[H.uniqueID] = {}), I = F[u] || [], oe = I[0] === he && I[1], we = oe), we === !1)
                  for (;
                    (H = ++oe && H && H[be] || (we = oe = 0) || fe.pop()) && !((A ? H.nodeName.toLowerCase() === yt : H.nodeType === 1) && ++we && (vt && (Z = H[Y] || (H[Y] = {}), F = Z[H.uniqueID] || (Z[H.uniqueID] = {}), F[u] = [he, we]), H === j)););
                return we -= g, we === w || we % w === 0 && we / w >= 0
              }
            }
          },
          PSEUDO: function (u, l) {
            var p, w = r.pseudos[u] || r.setFilters[u.toLowerCase()] || J.error("unsupported pseudo: " + u);
            return w[Y] ? w(l) : w.length > 1 ? (p = [u, u, "", l], r.setFilters.hasOwnProperty(u.toLowerCase()) ? ke(function (g, T) {
              for (var E, A = w(g, l), j = A.length; j--;) E = Ue(g, A[j]), g[E] = !(T[E] = A[j])
            }) : function (g) {
              return w(g, 0, p)
            }) : w
          }
        },
        pseudos: {
          not: ke(function (u) {
            var l = [],
              p = [],
              w = c(u.replace(Mt, "$1"));
            return w[Y] ? ke(function (g, T, E, A) {
              for (var j, O = w(g, null, A, []), q = g.length; q--;)(j = O[q]) && (g[q] = !(T[q] = j))
            }) : function (g, T, E) {
              return l[0] = g, w(l, null, E, p), l[0] = null, !p.pop()
            }
          }),
          has: ke(function (u) {
            return function (l) {
              return J(u, l).length > 0
            }
          }),
          contains: ke(function (u) {
            return u = u.replace(Oe, He),
              function (l) {
                return (l.textContent || s(l)).indexOf(u) > -1
              }
          }),
          lang: ke(function (u) {
            return Xi.test(u || "") || J.error("unsupported lang: " + u), u = u.replace(Oe, He).toLowerCase(),
              function (l) {
                var p;
                do
                  if (p = $ ? l.lang : l.getAttribute("xml:lang") || l.getAttribute("lang")) return p = p.toLowerCase(), p === u || p.indexOf(u + "-") === 0; while ((l = l.parentNode) && l.nodeType === 1);
                return !1
              }
          }),
          target: function (u) {
            var l = e.location && e.location.hash;
            return l && l.slice(1) === u.id
          },
          root: function (u) {
            return u === L
          },
          focus: function (u) {
            return u === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(u.type || u.href || ~u.tabIndex)
          },
          enabled: Fr(!1),
          disabled: Fr(!0),
          checked: function (u) {
            var l = u.nodeName.toLowerCase();
            return l === "input" && !!u.checked || l === "option" && !!u.selected
          },
          selected: function (u) {
            return u.parentNode && u.parentNode.selectedIndex, u.selected === !0
          },
          empty: function (u) {
            for (u = u.firstChild; u; u = u.nextSibling)
              if (u.nodeType < 6) return !1;
            return !0
          },
          parent: function (u) {
            return !r.pseudos.empty(u)
          },
          header: function (u) {
            return Yi.test(u.nodeName)
          },
          input: function (u) {
            return Qi.test(u.nodeName)
          },
          button: function (u) {
            var l = u.nodeName.toLowerCase();
            return l === "input" && u.type === "button" || l === "button"
          },
          text: function (u) {
            var l;
            return u.nodeName.toLowerCase() === "input" && u.type === "text" && ((l = u.getAttribute("type")) == null || l.toLowerCase() === "text")
          },
          first: Ge(function () {
            return [0]
          }),
          last: Ge(function (u, l) {
            return [l - 1]
          }),
          eq: Ge(function (u, l, p) {
            return [p < 0 ? p + l : p]
          }),
          even: Ge(function (u, l) {
            for (var p = 0; p < l; p += 2) u.push(p);
            return u
          }),
          odd: Ge(function (u, l) {
            for (var p = 1; p < l; p += 2) u.push(p);
            return u
          }),
          lt: Ge(function (u, l, p) {
            for (var w = p < 0 ? p + l : p > l ? l : p; --w >= 0;) u.push(w);
            return u
          }),
          gt: Ge(function (u, l, p) {
            for (var w = p < 0 ? p + l : p; ++w < l;) u.push(w);
            return u
          })
        }
      }, r.pseudos.nth = r.pseudos.eq;
      for (t in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[t] = es(t);
      for (t in {
          submit: !0,
          reset: !0
        }) r.pseudos[t] = ts(t);

      function Br() {}
      Br.prototype = r.filters = r.pseudos, r.setFilters = new Br, a = J.tokenize = function (u, l) {
        var p, w, g, T, E, A, j, O = ht[u + " "];
        if (O) return l ? 0 : O.slice(0);
        for (E = u, A = [], j = r.preFilter; E;) {
          (!p || (w = Ui.exec(E))) && (w && (E = E.slice(w[0].length) || E), A.push(g = [])), p = !1, (w = Rr.exec(E)) && (p = w.shift(), g.push({
            value: p,
            type: w[0].replace(Mt, " ")
          }), E = E.slice(p.length));
          for (T in r.filter)(w = $t[T].exec(E)) && (!j[T] || (w = j[T](w))) && (p = w.shift(), g.push({
            value: p,
            type: T,
            matches: w
          }), E = E.slice(p.length));
          if (!p) break
        }
        return l ? E.length : E ? J.error(u) : ht(u, A).slice(0)
      };

      function Ft(u) {
        for (var l = 0, p = u.length, w = ""; l < p; l++) w += u[l].value;
        return w
      }

      function Bt(u, l, p) {
        var w = l.dir,
          g = l.next,
          T = g || w,
          E = p && T === "parentNode",
          A = U++;
        return l.first ? function (j, O, q) {
          for (; j = j[w];)
            if (j.nodeType === 1 || E) return u(j, O, q);
          return !1
        } : function (j, O, q) {
          var I, F, Z, H = [he, A];
          if (q) {
            for (; j = j[w];)
              if ((j.nodeType === 1 || E) && u(j, O, q)) return !0
          } else
            for (; j = j[w];)
              if (j.nodeType === 1 || E)
                if (Z = j[Y] || (j[Y] = {}), F = Z[j.uniqueID] || (Z[j.uniqueID] = {}), g && g === j.nodeName.toLowerCase()) j = j[w] || j;
                else {
                  if ((I = F[T]) && I[0] === he && I[1] === A) return H[2] = I[2];
                  if (F[T] = H, H[2] = u(j, O, q)) return !0
                } return !1
        }
      }

      function kn(u) {
        return u.length > 1 ? function (l, p, w) {
          for (var g = u.length; g--;)
            if (!u[g](l, p, w)) return !1;
          return !0
        } : u[0]
      }

      function ns(u, l, p) {
        for (var w = 0, g = l.length; w < g; w++) J(u, l[w], p);
        return p
      }

      function zt(u, l, p, w, g) {
        for (var T, E = [], A = 0, j = u.length, O = l != null; A < j; A++)(T = u[A]) && (!p || p(T, w, g)) && (E.push(T), O && l.push(A));
        return E
      }

      function An(u, l, p, w, g, T) {
        return w && !w[Y] && (w = An(w)), g && !g[Y] && (g = An(g, T)), ke(function (E, A, j, O) {
          var q, I, F, Z = [],
            H = [],
            oe = A.length,
            fe = E || ns(l || "*", j.nodeType ? [j] : j, []),
            be = u && (E || !l) ? zt(fe, Z, u, j, O) : fe,
            te = p ? g || (E ? u : oe || w) ? [] : A : be;
          if (p && p(be, te, j, O), w)
            for (q = zt(te, H), w(q, [], j, O), I = q.length; I--;)(F = q[I]) && (te[H[I]] = !(be[H[I]] = F));
          if (E) {
            if (g || u) {
              if (g) {
                for (q = [], I = te.length; I--;)(F = te[I]) && q.push(be[I] = F);
                g(null, te = [], q, O)
              }
              for (I = te.length; I--;)(F = te[I]) && (q = g ? Ue(E, F) : Z[I]) > -1 && (E[q] = !(A[q] = F))
            }
          } else te = zt(te === A ? te.splice(oe, te.length) : te), g ? g(null, A, te, O) : Ie.apply(A, te)
        })
      }

      function _n(u) {
        for (var l, p, w, g = u.length, T = r.relative[u[0].type], E = T || r.relative[" "], A = T ? 1 : 0, j = Bt(function (I) {
            return I === l
          }, E, !0), O = Bt(function (I) {
            return Ue(l, I) > -1
          }, E, !0), q = [function (I, F, Z) {
            var H = !T && (Z || F !== h) || ((l = F).nodeType ? j(I, F, Z) : O(I, F, Z));
            return l = null, H
          }]; A < g; A++)
          if (p = r.relative[u[A].type]) q = [Bt(kn(q), p)];
          else {
            if (p = r.filter[u[A].type].apply(null, u[A].matches), p[Y]) {
              for (w = ++A; w < g && !r.relative[u[w].type]; w++);
              return An(A > 1 && kn(q), A > 1 && Ft(u.slice(0, A - 1).concat({
                value: u[A - 2].type === " " ? "*" : ""
              })).replace(Mt, "$1"), p, A < w && _n(u.slice(A, w)), w < g && _n(u = u.slice(w)), w < g && Ft(u))
            }
            q.push(p)
          } return kn(q)
      }

      function rs(u, l) {
        var p = l.length > 0,
          w = u.length > 0,
          g = function (T, E, A, j, O) {
            var q, I, F, Z = 0,
              H = "0",
              oe = T && [],
              fe = [],
              be = h,
              te = T || w && r.find.TAG("*", O),
              yt = he += be == null ? 1 : Math.random() || .1,
              vt = te.length;
            for (O && (h = E == b || E || O); H !== vt && (q = te[H]) != null; H++) {
              if (w && q) {
                for (I = 0, !E && q.ownerDocument != b && (y(q), A = !$); F = u[I++];)
                  if (F(q, E || b, A)) {
                    j.push(q);
                    break
                  } O && (he = yt)
              }
              p && ((q = !F && q) && Z--, T && oe.push(q))
            }
            if (Z += H, p && H !== Z) {
              for (I = 0; F = l[I++];) F(oe, fe, E, A);
              if (T) {
                if (Z > 0)
                  for (; H--;) oe[H] || fe[H] || (fe[H] = Re.call(j));
                fe = zt(fe)
              }
              Ie.apply(j, fe), O && !T && fe.length > 0 && Z + l.length > 1 && J.uniqueSort(j)
            }
            return O && (he = yt, h = be), oe
          };
        return p ? ke(g) : g
      }
      return c = J.compile = function (u, l) {
        var p, w = [],
          g = [],
          T = It[u + " "];
        if (!T) {
          for (l || (l = a(u)), p = l.length; p--;) T = _n(l[p]), T[Y] ? w.push(T) : g.push(T);
          T = It(u, rs(g, w)), T.selector = u
        }
        return T
      }, d = J.select = function (u, l, p, w) {
        var g, T, E, A, j, O = typeof u == "function" && u,
          q = !w && a(u = O.selector || u);
        if (p = p || [], q.length === 1) {
          if (T = q[0] = q[0].slice(0), T.length > 2 && (E = T[0]).type === "ID" && l.nodeType === 9 && $ && r.relative[T[1].type]) {
            if (l = (r.find.ID(E.matches[0].replace(Oe, He), l) || [])[0], l) O && (l = l.parentNode);
            else return p;
            u = u.slice(T.shift().value.length)
          }
          for (g = $t.needsContext.test(u) ? 0 : T.length; g-- && (E = T[g], !r.relative[A = E.type]);)
            if ((j = r.find[A]) && (w = j(E.matches[0].replace(Oe, He), Sn.test(T[0].type) && Nn(l.parentNode) || l))) {
              if (T.splice(g, 1), u = w.length && Ft(T), !u) return Ie.apply(p, w), p;
              break
            }
        }
        return (O || c(u, q))(w, l, !$, p, !l || Sn.test(u) && Nn(l.parentNode) || l), p
      }, n.sortStable = Y.split("").sort(Be).join("") === Y, n.detectDuplicates = !!S, y(), n.sortDetached = Ae(function (u) {
        return u.compareDocumentPosition(b.createElement("fieldset")) & 1
      }), Ae(function (u) {
        return u.innerHTML = "<a href='#'></a>", u.firstChild.getAttribute("href") === "#"
      }) || En("type|href|height|width", function (u, l, p) {
        if (!p) return u.getAttribute(l, l.toLowerCase() === "type" ? 1 : 2)
      }), (!n.attributes || !Ae(function (u) {
        return u.innerHTML = "<input/>", u.firstChild.setAttribute("value", ""), u.firstChild.getAttribute("value") === ""
      })) && En("value", function (u, l, p) {
        if (!p && u.nodeName.toLowerCase() === "input") return u.defaultValue
      }), Ae(function (u) {
        return u.getAttribute("disabled") == null
      }) || En(Tn, function (u, l, p) {
        var w;
        if (!p) return u[l] === !0 ? l.toLowerCase() : (w = u.getAttributeNode(l)) && w.specified ? w.value : null
      }), J
    }(f);
    i.find = Me, i.expr = Me.selectors, i.expr[":"] = i.expr.pseudos, i.uniqueSort = i.unique = Me.uniqueSort, i.text = Me.getText, i.isXMLDoc = Me.isXML, i.contains = Me.contains, i.escapeSelector = Me.escape;
    var Ye = function (e, t, n) {
        for (var r = [], s = n !== void 0;
          (e = e[t]) && e.nodeType !== 9;)
          if (e.nodeType === 1) {
            if (s && i(e).is(n)) break;
            r.push(e)
          } return r
      },
      Yn = function (e, t) {
        for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
        return n
      },
      Jn = i.expr.match.needsContext;

    function Ce(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var Zn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function an(e, t, n) {
      return W(t) ? i.grep(e, function (r, s) {
        return !!t.call(r, s, r) !== n
      }) : t.nodeType ? i.grep(e, function (r) {
        return r === t !== n
      }) : typeof t != "string" ? i.grep(e, function (r) {
        return ee.call(t, r) > -1 !== n
      }) : i.filter(t, e, n)
    }
    i.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function (s) {
        return s.nodeType === 1
      }))
    }, i.fn.extend({
      find: function (e) {
        var t, n, r = this.length,
          s = this;
        if (typeof e != "string") return this.pushStack(i(e).filter(function () {
          for (t = 0; t < r; t++)
            if (i.contains(s[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, s[t], n);
        return r > 1 ? i.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(an(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(an(this, e || [], !0))
      },
      is: function (e) {
        return !!an(this, typeof e == "string" && Jn.test(e) ? i(e) : e || [], !1).length
      }
    });
    var er, Xr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Kr = i.fn.init = function (e, t, n) {
        var r, s;
        if (!e) return this;
        if (n = n || er, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = Xr.exec(e), r && (r[1] || !t))
            if (r[1]) {
              if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : B, !0)), Zn.test(r[1]) && i.isPlainObject(t))
                for (r in t) W(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this
            } else return s = B.getElementById(r[2]), s && (this[0] = s, this.length = 1), this;
        else return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        else {
          if (e.nodeType) return this[0] = e, this.length = 1, this;
          if (W(e)) return n.ready !== void 0 ? n.ready(e) : e(i)
        }
        return i.makeArray(e, this)
      };
    Kr.prototype = i.fn, er = i(B);
    var Qr = /^(?:parents|prev(?:Until|All))/,
      Yr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    i.fn.extend({
      has: function (e) {
        var t = i(e, this),
          n = t.length;
        return this.filter(function () {
          for (var r = 0; r < n; r++)
            if (i.contains(this, t[r])) return !0
        })
      },
      closest: function (e, t) {
        var n, r = 0,
          s = this.length,
          o = [],
          a = typeof e != "string" && i(e);
        if (!Jn.test(e)) {
          for (; r < s; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && i.find.matchesSelector(n, e))) {
                o.push(n);
                break
              }
        }
        return this.pushStack(o.length > 1 ? i.uniqueSort(o) : o)
      },
      index: function (e) {
        return e ? typeof e == "string" ? ee.call(i(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (e, t) {
        return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))))
      },
      addBack: function (e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
      }
    });

    function tr(e, t) {
      for (;
        (e = e[t]) && e.nodeType !== 1;);
      return e
    }
    i.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null
      },
      parents: function (e) {
        return Ye(e, "parentNode")
      },
      parentsUntil: function (e, t, n) {
        return Ye(e, "parentNode", n)
      },
      next: function (e) {
        return tr(e, "nextSibling")
      },
      prev: function (e) {
        return tr(e, "previousSibling")
      },
      nextAll: function (e) {
        return Ye(e, "nextSibling")
      },
      prevAll: function (e) {
        return Ye(e, "previousSibling")
      },
      nextUntil: function (e, t, n) {
        return Ye(e, "nextSibling", n)
      },
      prevUntil: function (e, t, n) {
        return Ye(e, "previousSibling", n)
      },
      siblings: function (e) {
        return Yn((e.parentNode || {}).firstChild, e)
      },
      children: function (e) {
        return Yn(e.firstChild)
      },
      contents: function (e) {
        return e.contentDocument != null && N(e.contentDocument) ? e.contentDocument : (Ce(e, "template") && (e = e.content || e), i.merge([], e.childNodes))
      }
    }, function (e, t) {
      i.fn[e] = function (n, r) {
        var s = i.map(this, t, n);
        return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (s = i.filter(r, s)), this.length > 1 && (Yr[e] || i.uniqueSort(s), Qr.test(e) && s.reverse()), this.pushStack(s)
      }
    });
    var _e = /[^\x20\t\r\n\f]+/g;

    function Jr(e) {
      var t = {};
      return i.each(e.match(_e) || [], function (n, r) {
        t[r] = !0
      }), t
    }
    i.Callbacks = function (e) {
      e = typeof e == "string" ? Jr(e) : i.extend({}, e);
      var t, n, r, s, o = [],
        a = [],
        c = -1,
        d = function () {
          for (s = s || e.once, r = t = !0; a.length; c = -1)
            for (n = a.shift(); ++c < o.length;) o[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = o.length, n = !1);
          e.memory || (n = !1), t = !1, s && (n ? o = [] : o = "")
        },
        h = {
          add: function () {
            return o && (n && !t && (c = o.length - 1, a.push(n)), function v(S) {
              i.each(S, function (y, b) {
                W(b) ? (!e.unique || !h.has(b)) && o.push(b) : b && b.length && Qe(b) !== "string" && v(b)
              })
            }(arguments), n && !t && d()), this
          },
          remove: function () {
            return i.each(arguments, function (v, S) {
              for (var y;
                (y = i.inArray(S, o, y)) > -1;) o.splice(y, 1), y <= c && c--
            }), this
          },
          has: function (v) {
            return v ? i.inArray(v, o) > -1 : o.length > 0
          },
          empty: function () {
            return o && (o = []), this
          },
          disable: function () {
            return s = a = [], o = n = "", this
          },
          disabled: function () {
            return !o
          },
          lock: function () {
            return s = a = [], !n && !t && (o = n = ""), this
          },
          locked: function () {
            return !!s
          },
          fireWith: function (v, S) {
            return s || (S = S || [], S = [v, S.slice ? S.slice() : S], a.push(S), t || d()), this
          },
          fire: function () {
            return h.fireWith(this, arguments), this
          },
          fired: function () {
            return !!r
          }
        };
      return h
    };

    function Je(e) {
      return e
    }

    function jt(e) {
      throw e
    }

    function nr(e, t, n, r) {
      var s;
      try {
        e && W(s = e.promise) ? s.call(e).done(t).fail(n) : e && W(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (o) {
        n.apply(void 0, [o])
      }
    }
    i.extend({
      Deferred: function (e) {
        var t = [
            ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
            ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
          ],
          n = "pending",
          r = {
            state: function () {
              return n
            },
            always: function () {
              return s.done(arguments).fail(arguments), this
            },
            catch: function (o) {
              return r.then(null, o)
            },
            pipe: function () {
              var o = arguments;
              return i.Deferred(function (a) {
                i.each(t, function (c, d) {
                  var h = W(o[d[4]]) && o[d[4]];
                  s[d[1]](function () {
                    var v = h && h.apply(this, arguments);
                    v && W(v.promise) ? v.promise().progress(a.notify).done(a.resolve).fail(a.reject) : a[d[0] + "With"](this, h ? [v] : arguments)
                  })
                }), o = null
              }).promise()
            },
            then: function (o, a, c) {
              var d = 0;

              function h(v, S, y, b) {
                return function () {
                  var L = this,
                    $ = arguments,
                    P = function () {
                      var ie, ve;
                      if (!(v < d)) {
                        if (ie = y.apply(L, $), ie === S.promise()) throw new TypeError("Thenable self-resolution");
                        ve = ie && (typeof ie == "object" || typeof ie == "function") && ie.then, W(ve) ? b ? ve.call(ie, h(d, S, Je, b), h(d, S, jt, b)) : (d++, ve.call(ie, h(d, S, Je, b), h(d, S, jt, b), h(d, S, Je, S.notifyWith))) : (y !== Je && (L = void 0, $ = [ie]), (b || S.resolveWith)(L, $))
                      }
                    },
                    se = b ? P : function () {
                      try {
                        P()
                      } catch (ie) {
                        i.Deferred.exceptionHook && i.Deferred.exceptionHook(ie, se.stackTrace), v + 1 >= d && (y !== jt && (L = void 0, $ = [ie]), S.rejectWith(L, $))
                      }
                    };
                  v ? se() : (i.Deferred.getStackHook && (se.stackTrace = i.Deferred.getStackHook()), f.setTimeout(se))
                }
              }
              return i.Deferred(function (v) {
                t[0][3].add(h(0, v, W(c) ? c : Je, v.notifyWith)), t[1][3].add(h(0, v, W(o) ? o : Je)), t[2][3].add(h(0, v, W(a) ? a : jt))
              }).promise()
            },
            promise: function (o) {
              return o != null ? i.extend(o, r) : r
            }
          },
          s = {};
        return i.each(t, function (o, a) {
          var c = a[2],
            d = a[5];
          r[a[1]] = c.add, d && c.add(function () {
            n = d
          }, t[3 - o][2].disable, t[3 - o][3].disable, t[0][2].lock, t[0][3].lock), c.add(a[3].fire), s[a[0]] = function () {
            return s[a[0] + "With"](this === s ? void 0 : this, arguments), this
          }, s[a[0] + "With"] = c.fireWith
        }), r.promise(s), e && e.call(s, s), s
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          s = _.call(arguments),
          o = i.Deferred(),
          a = function (c) {
            return function (d) {
              r[c] = this, s[c] = arguments.length > 1 ? _.call(arguments) : d, --t || o.resolveWith(r, s)
            }
          };
        if (t <= 1 && (nr(e, o.done(a(n)).resolve, o.reject, !t), o.state() === "pending" || W(s[n] && s[n].then))) return o.then();
        for (; n--;) nr(s[n], a(n), o.reject);
        return o.promise()
      }
    });
    var Zr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function (e, t) {
      f.console && f.console.warn && e && Zr.test(e.name) && f.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, i.readyException = function (e) {
      f.setTimeout(function () {
        throw e
      })
    };
    var un = i.Deferred();
    i.fn.ready = function (e) {
      return un.then(e).catch(function (t) {
        i.readyException(t)
      }), this
    }, i.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (e === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, !(e !== !0 && --i.readyWait > 0) && un.resolveWith(B, [i]))
      }
    }), i.ready.then = un.then;

    function Lt() {
      B.removeEventListener("DOMContentLoaded", Lt), f.removeEventListener("load", Lt), i.ready()
    }
    B.readyState === "complete" || B.readyState !== "loading" && !B.documentElement.doScroll ? f.setTimeout(i.ready) : (B.addEventListener("DOMContentLoaded", Lt), f.addEventListener("load", Lt));
    var Pe = function (e, t, n, r, s, o, a) {
        var c = 0,
          d = e.length,
          h = n == null;
        if (Qe(n) === "object") {
          s = !0;
          for (c in n) Pe(e, t, c, n[c], !0, o, a)
        } else if (r !== void 0 && (s = !0, W(r) || (a = !0), h && (a ? (t.call(e, r), t = null) : (h = t, t = function (v, S, y) {
            return h.call(i(v), y)
          })), t))
          for (; c < d; c++) t(e[c], n, a ? r : r.call(e[c], c, t(e[c], n)));
        return s ? e : h ? t.call(e) : d ? t(e[0], n) : o
      },
      ei = /^-ms-/,
      ti = /-([a-z])/g;

    function ni(e, t) {
      return t.toUpperCase()
    }

    function De(e) {
      return e.replace(ei, "ms-").replace(ti, ni)
    }
    var ot = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
    };

    function at() {
      this.expando = i.expando + at.uid++
    }
    at.uid = 1, at.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || (t = {}, ot(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function (e, t, n) {
        var r, s = this.cache(e);
        if (typeof t == "string") s[De(t)] = n;
        else
          for (r in t) s[De(r)] = t[r];
        return s
      },
      get: function (e, t) {
        return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][De(t)]
      },
      access: function (e, t, n) {
        return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t)
      },
      remove: function (e, t) {
        var n, r = e[this.expando];
        if (r !== void 0) {
          if (t !== void 0)
            for (Array.isArray(t) ? t = t.map(De) : (t = De(t), t = t in r ? [t] : t.match(_e) || []), n = t.length; n--;) delete r[t[n]];
          (t === void 0 || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return t !== void 0 && !i.isEmptyObject(t)
      }
    };
    var R = new at,
      ce = new at,
      ri = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ii = /[A-Z]/g;

    function si(e) {
      return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : ri.test(e) ? JSON.parse(e) : e
    }

    function rr(e, t, n) {
      var r;
      if (n === void 0 && e.nodeType === 1)
        if (r = "data-" + t.replace(ii, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
          try {
            n = si(n)
          } catch {}
          ce.set(e, t, n)
        } else n = void 0;
      return n
    }
    i.extend({
      hasData: function (e) {
        return ce.hasData(e) || R.hasData(e)
      },
      data: function (e, t, n) {
        return ce.access(e, t, n)
      },
      removeData: function (e, t) {
        ce.remove(e, t)
      },
      _data: function (e, t, n) {
        return R.access(e, t, n)
      },
      _removeData: function (e, t) {
        R.remove(e, t)
      }
    }), i.fn.extend({
      data: function (e, t) {
        var n, r, s, o = this[0],
          a = o && o.attributes;
        if (e === void 0) {
          if (this.length && (s = ce.get(o), o.nodeType === 1 && !R.get(o, "hasDataAttrs"))) {
            for (n = a.length; n--;) a[n] && (r = a[n].name, r.indexOf("data-") === 0 && (r = De(r.slice(5)), rr(o, r, s[r])));
            R.set(o, "hasDataAttrs", !0)
          }
          return s
        }
        return typeof e == "object" ? this.each(function () {
          ce.set(this, e)
        }) : Pe(this, function (c) {
          var d;
          if (o && c === void 0) return d = ce.get(o, e), d !== void 0 || (d = rr(o, e), d !== void 0) ? d : void 0;
          this.each(function () {
            ce.set(this, e, c)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function (e) {
        return this.each(function () {
          ce.remove(this, e)
        })
      }
    }), i.extend({
      queue: function (e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || Array.isArray(n) ? r = R.access(e, t, i.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = i.queue(e, t),
          r = n.length,
          s = n.shift(),
          o = i._queueHooks(e, t),
          a = function () {
            i.dequeue(e, t)
          };
        s === "inprogress" && (s = n.shift(), r--), s && (t === "fx" && n.unshift("inprogress"), delete o.stop, s.call(e, a, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return R.get(e, n) || R.access(e, n, {
          empty: i.Callbacks("once memory").add(function () {
            R.remove(e, [t + "queue", n])
          })
        })
      }
    }), i.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : t === void 0 ? this : this.each(function () {
          var r = i.queue(this, e, t);
          i._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e)
        })
      },
      dequeue: function (e) {
        return this.each(function () {
          i.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n, r = 1,
          s = i.Deferred(),
          o = this,
          a = this.length,
          c = function () {
            --r || s.resolveWith(o, [o])
          };
        for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; a--;) n = R.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(c));
        return c(), s.promise(t)
      }
    });
    var ir = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ut = new RegExp("^(?:([+-])=|)(" + ir + ")([a-z%]*)$", "i"),
      qe = ["Top", "Right", "Bottom", "Left"],
      $e = B.documentElement,
      Ze = function (e) {
        return i.contains(e.ownerDocument, e)
      },
      oi = {
        composed: !0
      };
    $e.getRootNode && (Ze = function (e) {
      return i.contains(e.ownerDocument, e) || e.getRootNode(oi) === e.ownerDocument
    });
    var Pt = function (e, t) {
      return e = t || e, e.style.display === "none" || e.style.display === "" && Ze(e) && i.css(e, "display") === "none"
    };

    function sr(e, t, n, r) {
      var s, o, a = 20,
        c = r ? function () {
          return r.cur()
        } : function () {
          return i.css(e, t, "")
        },
        d = c(),
        h = n && n[3] || (i.cssNumber[t] ? "" : "px"),
        v = e.nodeType && (i.cssNumber[t] || h !== "px" && +d) && ut.exec(i.css(e, t));
      if (v && v[3] !== h) {
        for (d = d / 2, h = h || v[3], v = +d || 1; a--;) i.style(e, t, v + h), (1 - o) * (1 - (o = c() / d || .5)) <= 0 && (a = 0), v = v / o;
        v = v * 2, i.style(e, t, v + h), n = n || []
      }
      return n && (v = +v || +d || 0, s = n[1] ? v + (n[1] + 1) * n[2] : +n[2], r && (r.unit = h, r.start = v, r.end = s)), s
    }
    var or = {};

    function ai(e) {
      var t, n = e.ownerDocument,
        r = e.nodeName,
        s = or[r];
      return s || (t = n.body.appendChild(n.createElement(r)), s = i.css(t, "display"), t.parentNode.removeChild(t), s === "none" && (s = "block"), or[r] = s, s)
    }

    function et(e, t) {
      for (var n, r, s = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? (n === "none" && (s[o] = R.get(r, "display") || null, s[o] || (r.style.display = "")), r.style.display === "" && Pt(r) && (s[o] = ai(r))) : n !== "none" && (s[o] = "none", R.set(r, "display", n)));
      for (o = 0; o < a; o++) s[o] != null && (e[o].style.display = s[o]);
      return e
    }
    i.fn.extend({
      show: function () {
        return et(this, !0)
      },
      hide: function () {
        return et(this)
      },
      toggle: function (e) {
        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
          Pt(this) ? i(this).show() : i(this).hide()
        })
      }
    });
    var ft = /^(?:checkbox|radio)$/i,
      ar = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ur = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var e = B.createDocumentFragment(),
        t = e.appendChild(B.createElement("div")),
        n = B.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), X.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", X.option = !!t.lastChild
    })();
    var Se = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, X.option || (Se.optgroup = Se.option = [1, "<select multiple='multiple'>", "</select>"]);

    function de(e, t) {
      var n;
      return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && Ce(e, t) ? i.merge([e], n) : n
    }

    function fn(e, t) {
      for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    var ui = /<|&#?\w+;/;

    function fr(e, t, n, r, s) {
      for (var o, a, c, d, h, v, S = t.createDocumentFragment(), y = [], b = 0, L = e.length; b < L; b++)
        if (o = e[b], o || o === 0)
          if (Qe(o) === "object") i.merge(y, o.nodeType ? [o] : o);
          else if (!ui.test(o)) y.push(t.createTextNode(o));
      else {
        for (a = a || S.appendChild(t.createElement("div")), c = (ar.exec(o) || ["", ""])[1].toLowerCase(), d = Se[c] || Se._default, a.innerHTML = d[1] + i.htmlPrefilter(o) + d[2], v = d[0]; v--;) a = a.lastChild;
        i.merge(y, a.childNodes), a = S.firstChild, a.textContent = ""
      }
      for (S.textContent = "", b = 0; o = y[b++];) {
        if (r && i.inArray(o, r) > -1) {
          s && s.push(o);
          continue
        }
        if (h = Ze(o), a = de(S.appendChild(o), "script"), h && fn(a), n)
          for (v = 0; o = a[v++];) ur.test(o.type || "") && n.push(o)
      }
      return S
    }
    var lr = /^([^.]*)(?:\.(.+)|)/;

    function tt() {
      return !0
    }

    function nt() {
      return !1
    }

    function fi(e, t) {
      return e === li() == (t === "focus")
    }

    function li() {
      try {
        return B.activeElement
      } catch {}
    }

    function ln(e, t, n, r, s, o) {
      var a, c;
      if (typeof t == "object") {
        typeof n != "string" && (r = r || n, n = void 0);
        for (c in t) ln(e, c, n, r, t[c], o);
        return e
      }
      if (r == null && s == null ? (s = n, r = n = void 0) : s == null && (typeof n == "string" ? (s = r, r = void 0) : (s = r, r = n, n = void 0)), s === !1) s = nt;
      else if (!s) return e;
      return o === 1 && (a = s, s = function (d) {
        return i().off(d), a.apply(this, arguments)
      }, s.guid = a.guid || (a.guid = i.guid++)), e.each(function () {
        i.event.add(this, t, s, r, n)
      })
    }
    i.event = {
      global: {},
      add: function (e, t, n, r, s) {
        var o, a, c, d, h, v, S, y, b, L, $, P = R.get(e);
        if (ot(e))
          for (n.handler && (o = n, n = o.handler, s = o.selector), s && i.find.matchesSelector($e, s), n.guid || (n.guid = i.guid++), (d = P.events) || (d = P.events = Object.create(null)), (a = P.handle) || (a = P.handle = function (se) {
              return typeof i < "u" && i.event.triggered !== se.type ? i.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(_e) || [""], h = t.length; h--;) c = lr.exec(t[h]) || [], b = $ = c[1], L = (c[2] || "").split(".").sort(), b && (S = i.event.special[b] || {}, b = (s ? S.delegateType : S.bindType) || b, S = i.event.special[b] || {}, v = i.extend({
            type: b,
            origType: $,
            data: r,
            handler: n,
            guid: n.guid,
            selector: s,
            needsContext: s && i.expr.match.needsContext.test(s),
            namespace: L.join(".")
          }, o), (y = d[b]) || (y = d[b] = [], y.delegateCount = 0, (!S.setup || S.setup.call(e, r, L, a) === !1) && e.addEventListener && e.addEventListener(b, a)), S.add && (S.add.call(e, v), v.handler.guid || (v.handler.guid = n.guid)), s ? y.splice(y.delegateCount++, 0, v) : y.push(v), i.event.global[b] = !0)
      },
      remove: function (e, t, n, r, s) {
        var o, a, c, d, h, v, S, y, b, L, $, P = R.hasData(e) && R.get(e);
        if (!(!P || !(d = P.events))) {
          for (t = (t || "").match(_e) || [""], h = t.length; h--;) {
            if (c = lr.exec(t[h]) || [], b = $ = c[1], L = (c[2] || "").split(".").sort(), !b) {
              for (b in d) i.event.remove(e, b + t[h], n, r, !0);
              continue
            }
            for (S = i.event.special[b] || {}, b = (r ? S.delegateType : S.bindType) || b, y = d[b] || [], c = c[2] && new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = y.length; o--;) v = y[o], (s || $ === v.origType) && (!n || n.guid === v.guid) && (!c || c.test(v.namespace)) && (!r || r === v.selector || r === "**" && v.selector) && (y.splice(o, 1), v.selector && y.delegateCount--, S.remove && S.remove.call(e, v));
            a && !y.length && ((!S.teardown || S.teardown.call(e, L, P.handle) === !1) && i.removeEvent(e, b, P.handle), delete d[b])
          }
          i.isEmptyObject(d) && R.remove(e, "handle events")
        }
      },
      dispatch: function (e) {
        var t, n, r, s, o, a, c = new Array(arguments.length),
          d = i.event.fix(e),
          h = (R.get(this, "events") || Object.create(null))[d.type] || [],
          v = i.event.special[d.type] || {};
        for (c[0] = d, t = 1; t < arguments.length; t++) c[t] = arguments[t];
        if (d.delegateTarget = this, !(v.preDispatch && v.preDispatch.call(this, d) === !1)) {
          for (a = i.event.handlers.call(this, d, h), t = 0;
            (s = a[t++]) && !d.isPropagationStopped();)
            for (d.currentTarget = s.elem, n = 0;
              (o = s.handlers[n++]) && !d.isImmediatePropagationStopped();)(!d.rnamespace || o.namespace === !1 || d.rnamespace.test(o.namespace)) && (d.handleObj = o, d.data = o.data, r = ((i.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, c), r !== void 0 && (d.result = r) === !1 && (d.preventDefault(), d.stopPropagation()));
          return v.postDispatch && v.postDispatch.call(this, d), d.result
        }
      },
      handlers: function (e, t) {
        var n, r, s, o, a, c = [],
          d = t.delegateCount,
          h = e.target;
        if (d && h.nodeType && !(e.type === "click" && e.button >= 1)) {
          for (; h !== this; h = h.parentNode || this)
            if (h.nodeType === 1 && !(e.type === "click" && h.disabled === !0)) {
              for (o = [], a = {}, n = 0; n < d; n++) r = t[n], s = r.selector + " ", a[s] === void 0 && (a[s] = r.needsContext ? i(s, this).index(h) > -1 : i.find(s, this, null, [h]).length), a[s] && o.push(r);
              o.length && c.push({
                elem: h,
                handlers: o
              })
            }
        }
        return h = this, d < t.length && c.push({
          elem: h,
          handlers: t.slice(d)
        }), c
      },
      addProp: function (e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: W(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function (n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            })
          }
        })
      },
      fix: function (e) {
        return e[i.expando] ? e : new i.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function (e) {
            var t = this || e;
            return ft.test(t.type) && t.click && Ce(t, "input") && qt(t, "click", tt), !1
          },
          trigger: function (e) {
            var t = this || e;
            return ft.test(t.type) && t.click && Ce(t, "input") && qt(t, "click"), !0
          },
          _default: function (e) {
            var t = e.target;
            return ft.test(t.type) && t.click && Ce(t, "input") && R.get(t, "click") || Ce(t, "a")
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    };

    function qt(e, t, n) {
      if (!n) {
        R.get(e, t) === void 0 && i.event.add(e, t, tt);
        return
      }
      R.set(e, t, !1), i.event.add(e, t, {
        namespace: !1,
        handler: function (r) {
          var s, o, a = R.get(this, t);
          if (r.isTrigger & 1 && this[t]) {
            if (a.length)(i.event.special[t] || {}).delegateType && r.stopPropagation();
            else if (a = _.call(arguments), R.set(this, t, a), s = n(this, t), this[t](), o = R.get(this, t), a !== o || s ? R.set(this, t, !1) : o = {}, a !== o) return r.stopImmediatePropagation(), r.preventDefault(), o && o.value
          } else a.length && (R.set(this, t, {
            value: i.event.trigger(i.extend(a[0], i.Event.prototype), a.slice(1), this)
          }), r.stopImmediatePropagation())
        }
      })
    }
    i.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, i.Event = function (e, t) {
      if (!(this instanceof i.Event)) return new i.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? tt : nt, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[i.expando] = !0
    }, i.Event.prototype = {
      constructor: i.Event,
      isDefaultPrevented: nt,
      isPropagationStopped: nt,
      isImmediatePropagationStopped: nt,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = tt, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = tt, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = tt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, i.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, i.event.addProp), i.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      i.event.special[e] = {
        setup: function () {
          return qt(this, e, fi), !1
        },
        trigger: function () {
          return qt(this, e), !0
        },
        _default: function () {
          return !0
        },
        delegateType: t
      }
    }), i.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      i.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (n) {
          var r, s = this,
            o = n.relatedTarget,
            a = n.handleObj;
          return (!o || o !== s && !i.contains(s, o)) && (n.type = a.origType, r = a.handler.apply(this, arguments), n.type = t), r
        }
      }
    }), i.fn.extend({
      on: function (e, t, n, r) {
        return ln(this, e, t, n, r)
      },
      one: function (e, t, n, r) {
        return ln(this, e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, s;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if (typeof e == "object") {
          for (s in e) this.off(s, t, e[s]);
          return this
        }
        return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = nt), this.each(function () {
          i.event.remove(this, e, n, t)
        })
      }
    });
    var ci = /<script|<style|<link/i,
      di = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function cr(e, t) {
      return Ce(e, "table") && Ce(t.nodeType !== 11 ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e
    }

    function hi(e) {
      return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
    }

    function gi(e) {
      return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function dr(e, t) {
      var n, r, s, o, a, c, d;
      if (t.nodeType === 1) {
        if (R.hasData(e) && (o = R.get(e), d = o.events, d)) {
          R.remove(t, "handle events");
          for (s in d)
            for (n = 0, r = d[s].length; n < r; n++) i.event.add(t, s, d[s][n])
        }
        ce.hasData(e) && (a = ce.access(e), c = i.extend({}, a), ce.set(t, c))
      }
    }

    function yi(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && ft.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue)
    }

    function rt(e, t, n, r) {
      t = D(t);
      var s, o, a, c, d, h, v = 0,
        S = e.length,
        y = S - 1,
        b = t[0],
        L = W(b);
      if (L || S > 1 && typeof b == "string" && !X.checkClone && di.test(b)) return e.each(function ($) {
        var P = e.eq($);
        L && (t[0] = b.call(this, $, P.html())), rt(P, t, n, r)
      });
      if (S && (s = fr(t, e[0].ownerDocument, !1, e, r), o = s.firstChild, s.childNodes.length === 1 && (s = o), o || r)) {
        for (a = i.map(de(s, "script"), hi), c = a.length; v < S; v++) d = s, v !== y && (d = i.clone(d, !0, !0), c && i.merge(a, de(d, "script"))), n.call(e[v], d, v);
        if (c)
          for (h = a[a.length - 1].ownerDocument, i.map(a, gi), v = 0; v < c; v++) d = a[v], ur.test(d.type || "") && !R.access(d, "globalEval") && i.contains(h, d) && (d.src && (d.type || "").toLowerCase() !== "module" ? i._evalUrl && !d.noModule && i._evalUrl(d.src, {
            nonce: d.nonce || d.getAttribute("nonce")
          }, h) : Kn(d.textContent.replace(pi, ""), d, h))
      }
      return e
    }

    function pr(e, t, n) {
      for (var r, s = t ? i.filter(t, e) : e, o = 0;
        (r = s[o]) != null; o++) !n && r.nodeType === 1 && i.cleanData(de(r)), r.parentNode && (n && Ze(r) && fn(de(r, "script")), r.parentNode.removeChild(r));
      return e
    }
    i.extend({
      htmlPrefilter: function (e) {
        return e
      },
      clone: function (e, t, n) {
        var r, s, o, a, c = e.cloneNode(!0),
          d = Ze(e);
        if (!X.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e))
          for (a = de(c), o = de(e), r = 0, s = o.length; r < s; r++) yi(o[r], a[r]);
        if (t)
          if (n)
            for (o = o || de(e), a = a || de(c), r = 0, s = o.length; r < s; r++) dr(o[r], a[r]);
          else dr(e, c);
        return a = de(c, "script"), a.length > 0 && fn(a, !d && de(e, "script")), c
      },
      cleanData: function (e) {
        for (var t, n, r, s = i.event.special, o = 0;
          (n = e[o]) !== void 0; o++)
          if (ot(n)) {
            if (t = n[R.expando]) {
              if (t.events)
                for (r in t.events) s[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[R.expando] = void 0
            }
            n[ce.expando] && (n[ce.expando] = void 0)
          }
      }
    }), i.fn.extend({
      detach: function (e) {
        return pr(this, e, !0)
      },
      remove: function (e) {
        return pr(this, e)
      },
      text: function (e) {
        return Pe(this, function (t) {
          return t === void 0 ? i.text(this) : this.empty().each(function () {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t)
          })
        }, null, e, arguments.length)
      },
      append: function () {
        return rt(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = cr(this, e);
            t.appendChild(e)
          }
        })
      },
      prepend: function () {
        return rt(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = cr(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return rt(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return rt(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0;
          (e = this[t]) != null; t++) e.nodeType === 1 && (i.cleanData(de(e, !1)), e.textContent = "");
        return this
      },
      clone: function (e, t) {
        return e = e ? ? !1, t = t ? ? e, this.map(function () {
          return i.clone(this, e, t)
        })
      },
      html: function (e) {
        return Pe(this, function (t) {
          var n = this[0] || {},
            r = 0,
            s = this.length;
          if (t === void 0 && n.nodeType === 1) return n.innerHTML;
          if (typeof t == "string" && !ci.test(t) && !Se[(ar.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = i.htmlPrefilter(t);
            try {
              for (; r < s; r++) n = this[r] || {}, n.nodeType === 1 && (i.cleanData(de(n, !1)), n.innerHTML = t);
              n = 0
            } catch {}
          }
          n && this.empty().append(t)
        }, null, e, arguments.length)
      },
      replaceWith: function () {
        var e = [];
        return rt(this, arguments, function (t) {
          var n = this.parentNode;
          i.inArray(this, e) < 0 && (i.cleanData(de(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), i.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      i.fn[e] = function (n) {
        for (var r, s = [], o = i(n), a = o.length - 1, c = 0; c <= a; c++) r = c === a ? this : this.clone(!0), i(o[c])[t](r), k.apply(s, r.get());
        return this.pushStack(s)
      }
    });
    var cn = new RegExp("^(" + ir + ")(?!px)[a-z%]+$", "i"),
      Ot = function (e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = f), t.getComputedStyle(e)
      },
      hr = function (e, t, n) {
        var r, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        r = n.call(e);
        for (s in t) e.style[s] = o[s];
        return r
      },
      vi = new RegExp(qe.join("|"), "i");
    (function () {
      function e() {
        if (h) {
          d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", $e.appendChild(d).appendChild(h);
          var v = f.getComputedStyle(h);
          n = v.top !== "1%", c = t(v.marginLeft) === 12, h.style.right = "60%", o = t(v.right) === 36, r = t(v.width) === 36, h.style.position = "absolute", s = t(h.offsetWidth / 3) === 12, $e.removeChild(d), h = null
        }
      }

      function t(v) {
        return Math.round(parseFloat(v))
      }
      var n, r, s, o, a, c, d = B.createElement("div"),
        h = B.createElement("div");
      h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = h.style.backgroundClip === "content-box", i.extend(X, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), o
        },
        pixelPosition: function () {
          return e(), n
        },
        reliableMarginLeft: function () {
          return e(), c
        },
        scrollboxSize: function () {
          return e(), s
        },
        reliableTrDimensions: function () {
          var v, S, y, b;
          return a == null && (v = B.createElement("table"), S = B.createElement("tr"), y = B.createElement("div"), v.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", S.style.cssText = "border:1px solid", S.style.height = "1px", y.style.height = "9px", y.style.display = "block", $e.appendChild(v).appendChild(S).appendChild(y), b = f.getComputedStyle(S), a = parseInt(b.height, 10) + parseInt(b.borderTopWidth, 10) + parseInt(b.borderBottomWidth, 10) === S.offsetHeight, $e.removeChild(v)), a
        }
      }))
    })();

    function lt(e, t, n) {
      var r, s, o, a, c = e.style;
      return n = n || Ot(e), n && (a = n.getPropertyValue(t) || n[t], a === "" && !Ze(e) && (a = i.style(e, t)), !X.pixelBoxStyles() && cn.test(a) && vi.test(t) && (r = c.width, s = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = a, a = n.width, c.width = r, c.minWidth = s, c.maxWidth = o)), a !== void 0 ? a + "" : a
    }

    function gr(e, t) {
      return {
        get: function () {
          if (e()) {
            delete this.get;
            return
          }
          return (this.get = t).apply(this, arguments)
        }
      }
    }
    var yr = ["Webkit", "Moz", "ms"],
      vr = B.createElement("div").style,
      mr = {};

    function mi(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = yr.length; n--;)
        if (e = yr[n] + t, e in vr) return e
    }

    function dn(e) {
      var t = i.cssProps[e] || mr[e];
      return t || (e in vr ? e : mr[e] = mi(e) || e)
    }
    var bi = /^(none|table(?!-c[ea]).+)/,
      br = /^--/,
      wi = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      wr = {
        letterSpacing: "0",
        fontWeight: "400"
      };

    function xr(e, t, n) {
      var r = ut.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function pn(e, t, n, r, s, o) {
      var a = t === "width" ? 1 : 0,
        c = 0,
        d = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) n === "margin" && (d += i.css(e, n + qe[a], !0, s)), r ? (n === "content" && (d -= i.css(e, "padding" + qe[a], !0, s)), n !== "margin" && (d -= i.css(e, "border" + qe[a] + "Width", !0, s))) : (d += i.css(e, "padding" + qe[a], !0, s), n !== "padding" ? d += i.css(e, "border" + qe[a] + "Width", !0, s) : c += i.css(e, "border" + qe[a] + "Width", !0, s));
      return !r && o >= 0 && (d += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - d - c - .5)) || 0), d
    }

    function Tr(e, t, n) {
      var r = Ot(e),
        s = !X.boxSizingReliable() || n,
        o = s && i.css(e, "boxSizing", !1, r) === "border-box",
        a = o,
        c = lt(e, t, r),
        d = "offset" + t[0].toUpperCase() + t.slice(1);
      if (cn.test(c)) {
        if (!n) return c;
        c = "auto"
      }
      return (!X.boxSizingReliable() && o || !X.reliableTrDimensions() && Ce(e, "tr") || c === "auto" || !parseFloat(c) && i.css(e, "display", !1, r) === "inline") && e.getClientRects().length && (o = i.css(e, "boxSizing", !1, r) === "border-box", a = d in e, a && (c = e[d])), c = parseFloat(c) || 0, c + pn(e, t, n || (o ? "border" : "content"), a, r, c) + "px"
    }
    i.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = lt(e, "opacity");
              return n === "" ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var s, o, a, c = De(t),
            d = br.test(t),
            h = e.style;
          if (d || (t = dn(c)), a = i.cssHooks[t] || i.cssHooks[c], n !== void 0) {
            if (o = typeof n, o === "string" && (s = ut.exec(n)) && s[1] && (n = sr(e, t, s), o = "number"), n == null || n !== n) return;
            o === "number" && !d && (n += s && s[3] || (i.cssNumber[c] ? "" : "px")), !X.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (h[t] = "inherit"), (!a || !("set" in a) || (n = a.set(e, n, r)) !== void 0) && (d ? h.setProperty(t, n) : h[t] = n)
          } else return a && "get" in a && (s = a.get(e, !1, r)) !== void 0 ? s : h[t]
        }
      },
      css: function (e, t, n, r) {
        var s, o, a, c = De(t),
          d = br.test(t);
        return d || (t = dn(c)), a = i.cssHooks[t] || i.cssHooks[c], a && "get" in a && (s = a.get(e, !0, n)), s === void 0 && (s = lt(e, t, r)), s === "normal" && t in wr && (s = wr[t]), n === "" || n ? (o = parseFloat(s), n === !0 || isFinite(o) ? o || 0 : s) : s
      }
    }), i.each(["height", "width"], function (e, t) {
      i.cssHooks[t] = {
        get: function (n, r, s) {
          if (r) return bi.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? hr(n, wi, function () {
            return Tr(n, t, s)
          }) : Tr(n, t, s)
        },
        set: function (n, r, s) {
          var o, a = Ot(n),
            c = !X.scrollboxSize() && a.position === "absolute",
            d = c || s,
            h = d && i.css(n, "boxSizing", !1, a) === "border-box",
            v = s ? pn(n, t, s, h, a) : 0;
          return h && c && (v -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - pn(n, t, "border", !1, a) - .5)), v && (o = ut.exec(r)) && (o[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), xr(n, r, v)
        }
      }
    }), i.cssHooks.marginLeft = gr(X.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(lt(e, "marginLeft")) || e.getBoundingClientRect().left - hr(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left
      })) + "px"
    }), i.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      i.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, s = {}, o = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++) s[e + qe[r] + t] = o[r] || o[r - 2] || o[0];
          return s
        }
      }, e !== "margin" && (i.cssHooks[e + t].set = xr)
    }), i.fn.extend({
      css: function (e, t) {
        return Pe(this, function (n, r, s) {
          var o, a, c = {},
            d = 0;
          if (Array.isArray(r)) {
            for (o = Ot(n), a = r.length; d < a; d++) c[r[d]] = i.css(n, r[d], !1, o);
            return c
          }
          return s !== void 0 ? i.style(n, r, s) : i.css(n, r)
        }, e, t, arguments.length > 1)
      }
    });

    function pe(e, t, n, r, s) {
      return new pe.prototype.init(e, t, n, r, s)
    }
    i.Tween = pe, pe.prototype = {
      constructor: pe,
      init: function (e, t, n, r, s, o) {
        this.elem = e, this.prop = n, this.easing = s || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (i.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var e = pe.propHooks[this.prop];
        return e && e.get ? e.get(this) : pe.propHooks._default.get(this)
      },
      run: function (e) {
        var t, n = pe.propHooks[this.prop];
        return this.options.duration ? this.pos = t = i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : pe.propHooks._default.set(this), this
      }
    }, pe.prototype.init.prototype = pe.prototype, pe.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
        },
        set: function (e) {
          i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[dn(e.prop)] != null) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }, pe.propHooks.scrollTop = pe.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, i.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, i.fx = pe.prototype.init, i.fx.step = {};
    var it, Ht, xi = /^(?:toggle|show|hide)$/,
      Ti = /queueHooks$/;

    function hn() {
      Ht && (B.hidden === !1 && f.requestAnimationFrame ? f.requestAnimationFrame(hn) : f.setTimeout(hn, i.fx.interval), i.fx.tick())
    }

    function Cr() {
      return f.setTimeout(function () {
        it = void 0
      }), it = Date.now()
    }

    function Rt(e, t) {
      var n, r = 0,
        s = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) n = qe[r], s["margin" + n] = s["padding" + n] = e;
      return t && (s.opacity = s.width = e), s
    }

    function Sr(e, t, n) {
      for (var r, s = (Ne.tweeners[t] || []).concat(Ne.tweeners["*"]), o = 0, a = s.length; o < a; o++)
        if (r = s[o].call(n, t, e)) return r
    }

    function Ci(e, t, n) {
      var r, s, o, a, c, d, h, v, S = "width" in t || "height" in t,
        y = this,
        b = {},
        L = e.style,
        $ = e.nodeType && Pt(e),
        P = R.get(e, "fxshow");
      n.queue || (a = i._queueHooks(e, "fx"), a.unqueued == null && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function () {
        a.unqueued || c()
      }), a.unqueued++, y.always(function () {
        y.always(function () {
          a.unqueued--, i.queue(e, "fx").length || a.empty.fire()
        })
      }));
      for (r in t)
        if (s = t[r], xi.test(s)) {
          if (delete t[r], o = o || s === "toggle", s === ($ ? "hide" : "show"))
            if (s === "show" && P && P[r] !== void 0) $ = !0;
            else continue;
          b[r] = P && P[r] || i.style(e, r)
        } if (d = !i.isEmptyObject(t), !(!d && i.isEmptyObject(b))) {
        S && e.nodeType === 1 && (n.overflow = [L.overflow, L.overflowX, L.overflowY], h = P && P.display, h == null && (h = R.get(e, "display")), v = i.css(e, "display"), v === "none" && (h ? v = h : (et([e], !0), h = e.style.display || h, v = i.css(e, "display"), et([e]))), (v === "inline" || v === "inline-block" && h != null) && i.css(e, "float") === "none" && (d || (y.done(function () {
          L.display = h
        }), h == null && (v = L.display, h = v === "none" ? "" : v)), L.display = "inline-block")), n.overflow && (L.overflow = "hidden", y.always(function () {
          L.overflow = n.overflow[0], L.overflowX = n.overflow[1], L.overflowY = n.overflow[2]
        })), d = !1;
        for (r in b) d || (P ? "hidden" in P && ($ = P.hidden) : P = R.access(e, "fxshow", {
          display: h
        }), o && (P.hidden = !$), $ && et([e], !0), y.done(function () {
          $ || et([e]), R.remove(e, "fxshow");
          for (r in b) i.style(e, r, b[r])
        })), d = Sr($ ? P[r] : 0, r, y), r in P || (P[r] = d.start, $ && (d.end = d.start, d.start = 0))
      }
    }

    function Si(e, t) {
      var n, r, s, o, a;
      for (n in e)
        if (r = De(n), s = t[r], o = e[n], Array.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = i.cssHooks[r], a && "expand" in a) {
          o = a.expand(o), delete e[r];
          for (n in o) n in e || (e[n] = o[n], t[n] = s)
        } else t[r] = s
    }

    function Ne(e, t, n) {
      var r, s, o = 0,
        a = Ne.prefilters.length,
        c = i.Deferred().always(function () {
          delete d.elem
        }),
        d = function () {
          if (s) return !1;
          for (var S = it || Cr(), y = Math.max(0, h.startTime + h.duration - S), b = y / h.duration || 0, L = 1 - b, $ = 0, P = h.tweens.length; $ < P; $++) h.tweens[$].run(L);
          return c.notifyWith(e, [h, L, y]), L < 1 && P ? y : (P || c.notifyWith(e, [h, 1, 0]), c.resolveWith(e, [h]), !1)
        },
        h = c.promise({
          elem: e,
          props: i.extend({}, t),
          opts: i.extend(!0, {
            specialEasing: {},
            easing: i.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: it || Cr(),
          duration: n.duration,
          tweens: [],
          createTween: function (S, y) {
            var b = i.Tween(e, h.opts, S, y, h.opts.specialEasing[S] || h.opts.easing);
            return h.tweens.push(b), b
          },
          stop: function (S) {
            var y = 0,
              b = S ? h.tweens.length : 0;
            if (s) return this;
            for (s = !0; y < b; y++) h.tweens[y].run(1);
            return S ? (c.notifyWith(e, [h, 1, 0]), c.resolveWith(e, [h, S])) : c.rejectWith(e, [h, S]), this
          }
        }),
        v = h.props;
      for (Si(v, h.opts.specialEasing); o < a; o++)
        if (r = Ne.prefilters[o].call(h, e, v, h.opts), r) return W(r.stop) && (i._queueHooks(h.elem, h.opts.queue).stop = r.stop.bind(r)), r;
      return i.map(v, Sr, h), W(h.opts.start) && h.opts.start.call(e, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), i.fx.timer(i.extend(d, {
        elem: e,
        anim: h,
        queue: h.opts.queue
      })), h
    }
    i.Animation = i.extend(Ne, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return sr(n.elem, e, ut.exec(t), n), n
          }]
        },
        tweener: function (e, t) {
          W(e) ? (t = e, e = ["*"]) : e = e.match(_e);
          for (var n, r = 0, s = e.length; r < s; r++) n = e[r], Ne.tweeners[n] = Ne.tweeners[n] || [], Ne.tweeners[n].unshift(t)
        },
        prefilters: [Ci],
        prefilter: function (e, t) {
          t ? Ne.prefilters.unshift(e) : Ne.prefilters.push(e)
        }
      }), i.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? i.extend({}, e) : {
          complete: n || !n && t || W(e) && e,
          duration: e,
          easing: n && t || t && !W(t) && t
        };
        return i.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in i.fx.speeds ? r.duration = i.fx.speeds[r.duration] : r.duration = i.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          W(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue)
        }, r
      }, i.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(Pt).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r)
        },
        animate: function (e, t, n, r) {
          var s = i.isEmptyObject(e),
            o = i.speed(t, n, r),
            a = function () {
              var c = Ne(this, i.extend({}, e), o);
              (s || R.get(this, "finish")) && c.stop(!0)
            };
          return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, t, n) {
          var r = function (s) {
            var o = s.stop;
            delete s.stop, o(n)
          };
          return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
            var s = !0,
              o = e != null && e + "queueHooks",
              a = i.timers,
              c = R.get(this);
            if (o) c[o] && c[o].stop && r(c[o]);
            else
              for (o in c) c[o] && c[o].stop && Ti.test(o) && r(c[o]);
            for (o = a.length; o--;) a[o].elem === this && (e == null || a[o].queue === e) && (a[o].anim.stop(n), s = !1, a.splice(o, 1));
            (s || !n) && i.dequeue(this, e)
          })
        },
        finish: function (e) {
          return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, n = R.get(this),
              r = n[e + "queue"],
              s = n[e + "queueHooks"],
              o = i.timers,
              a = r ? r.length : 0;
            for (n.finish = !0, i.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      }), i.each(["toggle", "show", "hide"], function (e, t) {
        var n = i.fn[t];
        i.fn[t] = function (r, s, o) {
          return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(Rt(t, !0), r, s, o)
        }
      }), i.each({
        slideDown: Rt("show"),
        slideUp: Rt("hide"),
        slideToggle: Rt("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, t) {
        i.fn[e] = function (n, r, s) {
          return this.animate(t, n, r, s)
        }
      }), i.timers = [], i.fx.tick = function () {
        var e, t = 0,
          n = i.timers;
        for (it = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
        n.length || i.fx.stop(), it = void 0
      }, i.fx.timer = function (e) {
        i.timers.push(e), i.fx.start()
      }, i.fx.interval = 13, i.fx.start = function () {
        Ht || (Ht = !0, hn())
      }, i.fx.stop = function () {
        Ht = null
      }, i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, i.fn.delay = function (e, t) {
        return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (n, r) {
          var s = f.setTimeout(n, e);
          r.stop = function () {
            f.clearTimeout(s)
          }
        })
      },
      function () {
        var e = B.createElement("input"),
          t = B.createElement("select"),
          n = t.appendChild(B.createElement("option"));
        e.type = "checkbox", X.checkOn = e.value !== "", X.optSelected = n.selected, e = B.createElement("input"), e.value = "t", e.type = "radio", X.radioValue = e.value === "t"
      }();
    var Er, ct = i.expr.attrHandle;
    i.fn.extend({
      attr: function (e, t) {
        return Pe(this, i.attr, e, t, arguments.length > 1)
      },
      removeAttr: function (e) {
        return this.each(function () {
          i.removeAttr(this, e)
        })
      }
    }), i.extend({
      attr: function (e, t, n) {
        var r, s, o = e.nodeType;
        if (!(o === 3 || o === 8 || o === 2)) {
          if (typeof e.getAttribute > "u") return i.prop(e, t, n);
          if ((o !== 1 || !i.isXMLDoc(e)) && (s = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? Er : void 0)), n !== void 0) {
            if (n === null) {
              i.removeAttr(e, t);
              return
            }
            return s && "set" in s && (r = s.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n)
          }
          return s && "get" in s && (r = s.get(e, t)) !== null ? r : (r = i.find.attr(e, t), r ? ? void 0)
        }
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!X.radioValue && t === "radio" && Ce(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n, r = 0,
          s = t && t.match(_e);
        if (s && e.nodeType === 1)
          for (; n = s[r++];) e.removeAttribute(n)
      }
    }), Er = {
      set: function (e, t, n) {
        return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ct[t] || i.find.attr;
      ct[t] = function (r, s, o) {
        var a, c, d = s.toLowerCase();
        return o || (c = ct[d], ct[d] = a, a = n(r, s, o) != null ? d : null, ct[d] = c), a
      }
    });
    var Ei = /^(?:input|select|textarea|button)$/i,
      Ni = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function (e, t) {
        return Pe(this, i.prop, e, t, arguments.length > 1)
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[i.propFix[e] || e]
        })
      }
    }), i.extend({
      prop: function (e, t, n) {
        var r, s, o = e.nodeType;
        if (!(o === 3 || o === 8 || o === 2)) return (o !== 1 || !i.isXMLDoc(e)) && (t = i.propFix[t] || t, s = i.propHooks[t]), n !== void 0 ? s && "set" in s && (r = s.set(e, n, t)) !== void 0 ? r : e[t] = n : s && "get" in s && (r = s.get(e, t)) !== null ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = i.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Ei.test(e.nodeName) || Ni.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), X.optSelected || (i.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      i.propFix[this.toLowerCase()] = this
    });

    function We(e) {
      var t = e.match(_e) || [];
      return t.join(" ")
    }

    function Fe(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function gn(e) {
      return Array.isArray(e) ? e : typeof e == "string" ? e.match(_e) || [] : []
    }
    i.fn.extend({
      addClass: function (e) {
        var t, n, r, s, o, a, c, d = 0;
        if (W(e)) return this.each(function (h) {
          i(this).addClass(e.call(this, h, Fe(this)))
        });
        if (t = gn(e), t.length) {
          for (; n = this[d++];)
            if (s = Fe(n), r = n.nodeType === 1 && " " + We(s) + " ", r) {
              for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              c = We(r), s !== c && n.setAttribute("class", c)
            }
        }
        return this
      },
      removeClass: function (e) {
        var t, n, r, s, o, a, c, d = 0;
        if (W(e)) return this.each(function (h) {
          i(this).removeClass(e.call(this, h, Fe(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if (t = gn(e), t.length) {
          for (; n = this[d++];)
            if (s = Fe(n), r = n.nodeType === 1 && " " + We(s) + " ", r) {
              for (a = 0; o = t[a++];)
                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
              c = We(r), s !== c && n.setAttribute("class", c)
            }
        }
        return this
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          r = n === "string" || Array.isArray(e);
        return typeof t == "boolean" && r ? t ? this.addClass(e) : this.removeClass(e) : W(e) ? this.each(function (s) {
          i(this).toggleClass(e.call(this, s, Fe(this), t), t)
        }) : this.each(function () {
          var s, o, a, c;
          if (r)
            for (o = 0, a = i(this), c = gn(e); s = c[o++];) a.hasClass(s) ? a.removeClass(s) : a.addClass(s);
          else(e === void 0 || n === "boolean") && (s = Fe(this), s && R.set(this, "__className__", s), this.setAttribute && this.setAttribute("class", s || e === !1 ? "" : R.get(this, "__className__") || ""))
        })
      },
      hasClass: function (e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (n.nodeType === 1 && (" " + We(Fe(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var ki = /\r/g;
    i.fn.extend({
      val: function (e) {
        var t, n, r, s = this[0];
        return arguments.length ? (r = W(e), this.each(function (o) {
          var a;
          this.nodeType === 1 && (r ? a = e.call(this, o, i(this).val()) : a = e, a == null ? a = "" : typeof a == "number" ? a += "" : Array.isArray(a) && (a = i.map(a, function (c) {
            return c == null ? "" : c + ""
          })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, a, "value") === void 0) && (this.value = a))
        })) : s ? (t = i.valHooks[s.type] || i.valHooks[s.nodeName.toLowerCase()], t && "get" in t && (n = t.get(s, "value")) !== void 0 ? n : (n = s.value, typeof n == "string" ? n.replace(ki, "") : n ? ? "")) : void 0
      }
    }), i.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = i.find.attr(e, "value");
            return t ? ? We(i.text(e))
          }
        },
        select: {
          get: function (e) {
            var t, n, r, s = e.options,
              o = e.selectedIndex,
              a = e.type === "select-one",
              c = a ? null : [],
              d = a ? o + 1 : s.length;
            for (o < 0 ? r = d : r = a ? o : 0; r < d; r++)
              if (n = s[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !Ce(n.parentNode, "optgroup"))) {
                if (t = i(n).val(), a) return t;
                c.push(t)
              } return c
          },
          set: function (e, t) {
            for (var n, r, s = e.options, o = i.makeArray(t), a = s.length; a--;) r = s[a], (r.selected = i.inArray(i.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), i.each(["radio", "checkbox"], function () {
      i.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return e.checked = i.inArray(i(e).val(), t) > -1
        }
      }, X.checkOn || (i.valHooks[this].get = function (e) {
        return e.getAttribute("value") === null ? "on" : e.value
      })
    }), X.focusin = "onfocusin" in f;
    var Nr = /^(?:focusinfocus|focusoutblur)$/,
      kr = function (e) {
        e.stopPropagation()
      };
    i.extend(i.event, {
      trigger: function (e, t, n, r) {
        var s, o, a, c, d, h, v, S, y = [n || B],
          b = Dt.call(e, "type") ? e.type : e,
          L = Dt.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = S = a = n = n || B, !(n.nodeType === 3 || n.nodeType === 8) && !Nr.test(b + i.event.triggered) && (b.indexOf(".") > -1 && (L = b.split("."), b = L.shift(), L.sort()), d = b.indexOf(":") < 0 && "on" + b, e = e[i.expando] ? e : new i.Event(b, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = L.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), v = i.event.special[b] || {}, !(!r && v.trigger && v.trigger.apply(n, t) === !1))) {
          if (!r && !v.noBubble && !Ke(n)) {
            for (c = v.delegateType || b, Nr.test(c + b) || (o = o.parentNode); o; o = o.parentNode) y.push(o), a = o;
            a === (n.ownerDocument || B) && y.push(a.defaultView || a.parentWindow || f)
          }
          for (s = 0;
            (o = y[s++]) && !e.isPropagationStopped();) S = o, e.type = s > 1 ? c : v.bindType || b, h = (R.get(o, "events") || Object.create(null))[e.type] && R.get(o, "handle"), h && h.apply(o, t), h = d && o[d], h && h.apply && ot(o) && (e.result = h.apply(o, t), e.result === !1 && e.preventDefault());
          return e.type = b, !r && !e.isDefaultPrevented() && (!v._default || v._default.apply(y.pop(), t) === !1) && ot(n) && d && W(n[b]) && !Ke(n) && (a = n[d], a && (n[d] = null), i.event.triggered = b, e.isPropagationStopped() && S.addEventListener(b, kr), n[b](), e.isPropagationStopped() && S.removeEventListener(b, kr), i.event.triggered = void 0, a && (n[d] = a)), e.result
        }
      },
      simulate: function (e, t, n) {
        var r = i.extend(new i.Event, n, {
          type: e,
          isSimulated: !0
        });
        i.event.trigger(r, null, t)
      }
    }), i.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          i.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return i.event.trigger(e, t, n, !0)
      }
    }), X.focusin || i.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function (r) {
        i.event.simulate(t, r.target, i.event.fix(r))
      };
      i.event.special[t] = {
        setup: function () {
          var r = this.ownerDocument || this.document || this,
            s = R.access(r, t);
          s || r.addEventListener(e, n, !0), R.access(r, t, (s || 0) + 1)
        },
        teardown: function () {
          var r = this.ownerDocument || this.document || this,
            s = R.access(r, t) - 1;
          s ? R.access(r, t, s) : (r.removeEventListener(e, n, !0), R.remove(r, t))
        }
      }
    });
    var dt = f.location,
      Ar = {
        guid: Date.now()
      },
      yn = /\?/;
    i.parseXML = function (e) {
      var t, n;
      if (!e || typeof e != "string") return null;
      try {
        t = new f.DOMParser().parseFromString(e, "text/xml")
      } catch {}
      return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && i.error("Invalid XML: " + (n ? i.map(n.childNodes, function (r) {
        return r.textContent
      }).join(`
`) : e)), t
    };
    var Ai = /\[\]$/,
      _r = /\r?\n/g,
      _i = /^(?:submit|button|image|reset|file)$/i,
      Di = /^(?:input|select|textarea|keygen)/i;

    function vn(e, t, n, r) {
      var s;
      if (Array.isArray(t)) i.each(t, function (o, a) {
        n || Ai.test(e) ? r(e, a) : vn(e + "[" + (typeof a == "object" && a != null ? o : "") + "]", a, n, r)
      });
      else if (!n && Qe(t) === "object")
        for (s in t) vn(e + "[" + s + "]", t[s], n, r);
      else r(e, t)
    }
    i.param = function (e, t) {
      var n, r = [],
        s = function (o, a) {
          var c = W(a) ? a() : a;
          r[r.length] = encodeURIComponent(o) + "=" + encodeURIComponent(c ? ? "")
        };
      if (e == null) return "";
      if (Array.isArray(e) || e.jquery && !i.isPlainObject(e)) i.each(e, function () {
        s(this.name, this.value)
      });
      else
        for (n in e) vn(n, e[n], t, s);
      return r.join("&")
    }, i.fn.extend({
      serialize: function () {
        return i.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = i.prop(this, "elements");
          return e ? i.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !i(this).is(":disabled") && Di.test(this.nodeName) && !_i.test(e) && (this.checked || !ft.test(e))
        }).map(function (e, t) {
          var n = i(this).val();
          return n == null ? null : Array.isArray(n) ? i.map(n, function (r) {
            return {
              name: t.name,
              value: r.replace(_r, `\r
`)
            }
          }) : {
            name: t.name,
            value: n.replace(_r, `\r
`)
          }
        }).get()
      }
    });
    var ji = /%20/g,
      Li = /#.*$/,
      Pi = /([?&])_=[^&]*/,
      qi = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      Oi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Hi = /^(?:GET|HEAD)$/,
      Ri = /^\/\//,
      Dr = {},
      mn = {},
      jr = "*/".concat("*"),
      bn = B.createElement("a");
    bn.href = dt.href;

    function Lr(e) {
      return function (t, n) {
        typeof t != "string" && (n = t, t = "*");
        var r, s = 0,
          o = t.toLowerCase().match(_e) || [];
        if (W(n))
          for (; r = o[s++];) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
    }

    function Pr(e, t, n, r) {
      var s = {},
        o = e === mn;

      function a(c) {
        var d;
        return s[c] = !0, i.each(e[c] || [], function (h, v) {
          var S = v(t, n, r);
          if (typeof S == "string" && !o && !s[S]) return t.dataTypes.unshift(S), a(S), !1;
          if (o) return !(d = S)
        }), d
      }
      return a(t.dataTypes[0]) || !s["*"] && a("*")
    }

    function wn(e, t) {
      var n, r, s = i.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== void 0 && ((s[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e
    }

    function Ii(e, t, n) {
      for (var r, s, o, a, c = e.contents, d = e.dataTypes; d[0] === "*";) d.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r) {
        for (s in c)
          if (c[s] && c[s].test(r)) {
            d.unshift(s);
            break
          }
      }
      if (d[0] in n) o = d[0];
      else {
        for (s in n) {
          if (!d[0] || e.converters[s + " " + d[0]]) {
            o = s;
            break
          }
          a || (a = s)
        }
        o = o || a
      }
      if (o) return o !== d[0] && d.unshift(o), n[o]
    }

    function Mi(e, t, n, r) {
      var s, o, a, c, d, h = {},
        v = e.dataTypes.slice();
      if (v[1])
        for (a in e.converters) h[a.toLowerCase()] = e.converters[a];
      for (o = v.shift(); o;)
        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !d && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = o, o = v.shift(), o) {
          if (o === "*") o = d;
          else if (d !== "*" && d !== o) {
            if (a = h[d + " " + o] || h["* " + o], !a) {
              for (s in h)
                if (c = s.split(" "), c[1] === o && (a = h[d + " " + c[0]] || h["* " + c[0]], a)) {
                  a === !0 ? a = h[s] : h[s] !== !0 && (o = c[0], v.unshift(c[1]));
                  break
                }
            }
            if (a !== !0)
              if (a && e.throws) t = a(t);
              else try {
                t = a(t)
              } catch (S) {
                return {
                  state: "parsererror",
                  error: a ? S : "No conversion from " + d + " to " + o
                }
              }
          }
        } return {
        state: "success",
        data: t
      }
    }
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: dt.href,
        type: "GET",
        isLocal: Oi.test(dt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": jr,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (e, t) {
        return t ? wn(wn(e, i.ajaxSettings), t) : wn(i.ajaxSettings, e)
      },
      ajaxPrefilter: Lr(Dr),
      ajaxTransport: Lr(mn),
      ajax: function (e, t) {
        typeof e == "object" && (t = e, e = void 0), t = t || {};
        var n, r, s, o, a, c, d, h, v, S, y = i.ajaxSetup({}, t),
          b = y.context || y,
          L = y.context && (b.nodeType || b.jquery) ? i(b) : i.event,
          $ = i.Deferred(),
          P = i.Callbacks("once memory"),
          se = y.statusCode || {},
          ie = {},
          ve = {},
          Y = "canceled",
          M = {
            readyState: 0,
            getResponseHeader: function (U) {
              var ne;
              if (d) {
                if (!o)
                  for (o = {}; ne = qi.exec(s);) o[ne[1].toLowerCase() + " "] = (o[ne[1].toLowerCase() + " "] || []).concat(ne[2]);
                ne = o[U.toLowerCase() + " "]
              }
              return ne == null ? null : ne.join(", ")
            },
            getAllResponseHeaders: function () {
              return d ? s : null
            },
            setRequestHeader: function (U, ne) {
              return d == null && (U = ve[U.toLowerCase()] = ve[U.toLowerCase()] || U, ie[U] = ne), this
            },
            overrideMimeType: function (U) {
              return d == null && (y.mimeType = U), this
            },
            statusCode: function (U) {
              var ne;
              if (U)
                if (d) M.always(U[M.status]);
                else
                  for (ne in U) se[ne] = [se[ne], U[ne]];
              return this
            },
            abort: function (U) {
              var ne = U || Y;
              return n && n.abort(ne), he(0, ne), this
            }
          };
        if ($.promise(M), y.url = ((e || y.url || dt.href) + "").replace(Ri, dt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(_e) || [""], y.crossDomain == null) {
          c = B.createElement("a");
          try {
            c.href = y.url, c.href = c.href, y.crossDomain = bn.protocol + "//" + bn.host != c.protocol + "//" + c.host
          } catch {
            y.crossDomain = !0
          }
        }
        if (y.data && y.processData && typeof y.data != "string" && (y.data = i.param(y.data, y.traditional)), Pr(Dr, y, t, M), d) return M;
        h = i.event && y.global, h && i.active++ === 0 && i.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Hi.test(y.type), r = y.url.replace(Li, ""), y.hasContent ? y.data && y.processData && (y.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (y.data = y.data.replace(ji, "+")) : (S = y.url.slice(r.length), y.data && (y.processData || typeof y.data == "string") && (r += (yn.test(r) ? "&" : "?") + y.data, delete y.data), y.cache === !1 && (r = r.replace(Pi, "$1"), S = (yn.test(r) ? "&" : "?") + "_=" + Ar.guid++ + S), y.url = r + S), y.ifModified && (i.lastModified[r] && M.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && M.setRequestHeader("If-None-Match", i.etag[r])), (y.data && y.hasContent && y.contentType !== !1 || t.contentType) && M.setRequestHeader("Content-Type", y.contentType), M.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + (y.dataTypes[0] !== "*" ? ", " + jr + "; q=0.01" : "") : y.accepts["*"]);
        for (v in y.headers) M.setRequestHeader(v, y.headers[v]);
        if (y.beforeSend && (y.beforeSend.call(b, M, y) === !1 || d)) return M.abort();
        if (Y = "abort", P.add(y.complete), M.done(y.success), M.fail(y.error), n = Pr(mn, y, t, M), !n) he(-1, "No Transport");
        else {
          if (M.readyState = 1, h && L.trigger("ajaxSend", [M, y]), d) return M;
          y.async && y.timeout > 0 && (a = f.setTimeout(function () {
            M.abort("timeout")
          }, y.timeout));
          try {
            d = !1, n.send(ie, he)
          } catch (U) {
            if (d) throw U;
            he(-1, U)
          }
        }

        function he(U, ne, ht, It) {
          var me, Be, ze, ge, Re, Ee = ne;
          d || (d = !0, a && f.clearTimeout(a), n = void 0, s = It || "", M.readyState = U > 0 ? 4 : 0, me = U >= 200 && U < 300 || U === 304, ht && (ge = Ii(y, M, ht)), !me && i.inArray("script", y.dataTypes) > -1 && i.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () {}), ge = Mi(y, ge, M, me), me ? (y.ifModified && (Re = M.getResponseHeader("Last-Modified"), Re && (i.lastModified[r] = Re), Re = M.getResponseHeader("etag"), Re && (i.etag[r] = Re)), U === 204 || y.type === "HEAD" ? Ee = "nocontent" : U === 304 ? Ee = "notmodified" : (Ee = ge.state, Be = ge.data, ze = ge.error, me = !ze)) : (ze = Ee, (U || !Ee) && (Ee = "error", U < 0 && (U = 0))), M.status = U, M.statusText = (ne || Ee) + "", me ? $.resolveWith(b, [Be, Ee, M]) : $.rejectWith(b, [M, Ee, ze]), M.statusCode(se), se = void 0, h && L.trigger(me ? "ajaxSuccess" : "ajaxError", [M, y, me ? Be : ze]), P.fireWith(b, [M, Ee]), h && (L.trigger("ajaxComplete", [M, y]), --i.active || i.event.trigger("ajaxStop")))
        }
        return M
      },
      getJSON: function (e, t, n) {
        return i.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return i.get(e, void 0, t, "script")
      }
    }), i.each(["get", "post"], function (e, t) {
      i[t] = function (n, r, s, o) {
        return W(r) && (o = o || s, s = r, r = void 0), i.ajax(i.extend({
          url: n,
          type: t,
          dataType: o,
          data: r,
          success: s
        }, i.isPlainObject(n) && n))
      }
    }), i.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
    }), i._evalUrl = function (e, t, n) {
      return i.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (r) {
          i.globalEval(r, t, n)
        }
      })
    }, i.fn.extend({
      wrapAll: function (e) {
        var t;
        return this[0] && (W(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var n = this; n.firstElementChild;) n = n.firstElementChild;
          return n
        }).append(this)), this
      },
      wrapInner: function (e) {
        return W(e) ? this.each(function (t) {
          i(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
          var t = i(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function (e) {
        var t = W(e);
        return this.each(function (n) {
          i(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function (e) {
        return this.parent(e).not("body").each(function () {
          i(this).replaceWith(this.childNodes)
        }), this
      }
    }), i.expr.pseudos.hidden = function (e) {
      return !i.expr.pseudos.visible(e)
    }, i.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, i.ajaxSettings.xhr = function () {
      try {
        return new f.XMLHttpRequest
      } catch {}
    };
    var $i = {
        0: 200,
        1223: 204
      },
      pt = i.ajaxSettings.xhr();
    X.cors = !!pt && "withCredentials" in pt, X.ajax = pt = !!pt, i.ajaxTransport(function (e) {
      var t, n;
      if (X.cors || pt && !e.crossDomain) return {
        send: function (r, s) {
          var o, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (o in e.xhrFields) a[o] = e.xhrFields[o];
          e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
          for (o in r) a.setRequestHeader(o, r[o]);
          t = function (c) {
            return function () {
              t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, c === "abort" ? a.abort() : c === "error" ? typeof a.status != "number" ? s(0, "error") : s(a.status, a.statusText) : s($i[a.status] || a.status, a.statusText, (a.responseType || "text") !== "text" || typeof a.responseText != "string" ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), a.onabort !== void 0 ? a.onabort = n : a.onreadystatechange = function () {
            a.readyState === 4 && f.setTimeout(function () {
              t && n()
            })
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (c) {
            if (t) throw c
          }
        },
        abort: function () {
          t && t()
        }
      }
    }), i.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }), i.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          return i.globalEval(e), e
        }
      }
    }), i.ajaxPrefilter("script", function (e) {
      e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), i.ajaxTransport("script", function (e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, n;
        return {
          send: function (r, s) {
            t = i("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function (o) {
              t.remove(), n = null, o && s(o.type === "error" ? 404 : 200, o.type)
            }), B.head.appendChild(t[0])
          },
          abort: function () {
            n && n()
          }
        }
      }
    });
    var qr = [],
      xn = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = qr.pop() || i.expando + "_" + Ar.guid++;
        return this[e] = !0, e
      }
    }), i.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r, s, o, a = e.jsonp !== !1 && (xn.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && xn.test(e.data) && "data");
      if (a || e.dataTypes[0] === "jsonp") return r = e.jsonpCallback = W(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(xn, "$1" + r) : e.jsonp !== !1 && (e.url += (yn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return o || i.error(r + " was not called"), o[0]
      }, e.dataTypes[0] = "json", s = f[r], f[r] = function () {
        o = arguments
      }, n.always(function () {
        s === void 0 ? i(f).removeProp(r) : f[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, qr.push(r)), o && W(s) && s(o[0]), o = s = void 0
      }), "script"
    }), X.createHTMLDocument = function () {
      var e = B.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2
    }(), i.parseHTML = function (e, t, n) {
      if (typeof e != "string") return [];
      typeof t == "boolean" && (n = t, t = !1);
      var r, s, o;
      return t || (X.createHTMLDocument ? (t = B.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = B.location.href, t.head.appendChild(r)) : t = B), s = Zn.exec(e), o = !n && [], s ? [t.createElement(s[1])] : (s = fr([e], t, o), o && o.length && i(o).remove(), i.merge([], s.childNodes))
    }, i.fn.load = function (e, t, n) {
      var r, s, o, a = this,
        c = e.indexOf(" ");
      return c > -1 && (r = We(e.slice(c)), e = e.slice(0, c)), W(t) ? (n = t, t = void 0) : t && typeof t == "object" && (s = "POST"), a.length > 0 && i.ajax({
        url: e,
        type: s || "GET",
        dataType: "html",
        data: t
      }).done(function (d) {
        o = arguments, a.html(r ? i("<div>").append(i.parseHTML(d)).find(r) : d)
      }).always(n && function (d, h) {
        a.each(function () {
          n.apply(this, o || [d.responseText, h, d])
        })
      }), this
    }, i.expr.pseudos.animated = function (e) {
      return i.grep(i.timers, function (t) {
        return e === t.elem
      }).length
    }, i.offset = {
      setOffset: function (e, t, n) {
        var r, s, o, a, c, d, h, v = i.css(e, "position"),
          S = i(e),
          y = {};
        v === "static" && (e.style.position = "relative"), c = S.offset(), o = i.css(e, "top"), d = i.css(e, "left"), h = (v === "absolute" || v === "fixed") && (o + d).indexOf("auto") > -1, h ? (r = S.position(), a = r.top, s = r.left) : (a = parseFloat(o) || 0, s = parseFloat(d) || 0), W(t) && (t = t.call(e, n, i.extend({}, c))), t.top != null && (y.top = t.top - c.top + a), t.left != null && (y.left = t.left - c.left + s), "using" in t ? t.using.call(e, y) : S.css(y)
      }
    }, i.fn.extend({
      offset: function (e) {
        if (arguments.length) return e === void 0 ? this : this.each(function (s) {
          i.offset.setOffset(this, e, s)
        });
        var t, n, r = this[0];
        if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        }
      },
      position: function () {
        if (this[0]) {
          var e, t, n, r = this[0],
            s = {
              top: 0,
              left: 0
            };
          if (i.css(r, "position") === "fixed") t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && i.css(e, "position") === "static";) e = e.parentNode;
            e && e !== r && e.nodeType === 1 && (s = i(e).offset(), s.top += i.css(e, "borderTopWidth", !0), s.left += i.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - s.top - i.css(r, "marginTop", !0),
            left: t.left - s.left - i.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && i.css(e, "position") === "static";) e = e.offsetParent;
          return e || $e
        })
      }
    }), i.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = t === "pageYOffset";
      i.fn[e] = function (r) {
        return Pe(this, function (s, o, a) {
          var c;
          if (Ke(s) ? c = s : s.nodeType === 9 && (c = s.defaultView), a === void 0) return c ? c[t] : s[o];
          c ? c.scrollTo(n ? c.pageXOffset : a, n ? a : c.pageYOffset) : s[o] = a
        }, e, r, arguments.length)
      }
    }), i.each(["top", "left"], function (e, t) {
      i.cssHooks[t] = gr(X.pixelPosition, function (n, r) {
        if (r) return r = lt(n, t), cn.test(r) ? i(n).position()[t] + "px" : r
      })
    }), i.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      i.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        i.fn[r] = function (s, o) {
          var a = arguments.length && (n || typeof s != "boolean"),
            c = n || (s === !0 || o === !0 ? "margin" : "border");
          return Pe(this, function (d, h, v) {
            var S;
            return Ke(d) ? r.indexOf("outer") === 0 ? d["inner" + e] : d.document.documentElement["client" + e] : d.nodeType === 9 ? (S = d.documentElement, Math.max(d.body["scroll" + e], S["scroll" + e], d.body["offset" + e], S["offset" + e], S["client" + e])) : v === void 0 ? i.css(d, h, c) : i.style(d, h, v, c)
          }, t, a ? s : void 0, a)
        }
      })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      i.fn[t] = function (n) {
        return this.on(t, n)
      }
    }), i.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      i.fn[t] = function (n, r) {
        return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t)
      }
    });
    var Wi = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    i.proxy = function (e, t) {
      var n, r, s;
      if (typeof t == "string" && (n = e[t], t = e, e = n), !!W(e)) return r = _.call(arguments, 2), s = function () {
        return e.apply(t || this, r.concat(_.call(arguments)))
      }, s.guid = e.guid = e.guid || i.guid++, s
    }, i.holdReady = function (e) {
      e ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = Ce, i.isFunction = W, i.isWindow = Ke, i.camelCase = De, i.type = Qe, i.now = Date.now, i.isNumeric = function (e) {
      var t = i.type(e);
      return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
    }, i.trim = function (e) {
      return e == null ? "" : (e + "").replace(Wi, "")
    };
    var Fi = f.jQuery,
      Bi = f.$;
    return i.noConflict = function (e) {
      return f.$ === i && (f.$ = Bi), e && f.jQuery === i && (f.jQuery = Fi), i
    }, typeof m > "u" && (f.jQuery = f.$ = i), i
  })
})(Ur);
var us = Ur.exports;
const ue = as(us);
class V {
  constructor(f) {
    re(this, "get", f => {
      if (f) {
        f = f.split("-");
        let m = Number(f[0]),
          x = Number(f[1]);
        return this.board[m][x]
      } else return []
    });
    re(this, "get_top", f => (f = this.get(f), this.get_array_top(f)));
    re(this, "get_array_top", f => {
      for (let m = f.length; m >= 0; m--)
        if (f[m]) return f[m];
      return null
    });
    re(this, "moves", f => f ? f.Possible_moves(this.board).filter(m => this.legal_moves(m)) : []);
    re(this, "move", f => {
      let m, x, N, _;
      switch (f.type) {
        case this.MOVEMENT:
          return x = Number(f.piece.src.split("-")[0]), N = Number(f.piece.src.split("-")[1]), _ = this.board[x][N].indexOf(f.piece), this.board[x][N][_] = null, f.piece.tier = 1, f.piece.src = f.dst, x = Number(f.dst.split("-")[0]), N = Number(f.dst.split("-")[1]), this.board[x][N][f.piece.tier - 1] = f.piece, {
            piece: f.piece,
            dst: f.dst,
            type: f.type
          };
        case this.STACK:
          return m = this.get_top(f.dst), x = Number(f.piece.src.split("-")[0]), N = Number(f.piece.src.split("-")[1]), _ = this.board[x][N].indexOf(f.piece), this.board[x][N][_] = null, f.piece.tier = m.tier + 1, f.piece.src = f.dst, x = Number(f.dst.split("-")[0]), N = Number(f.dst.split("-")[1]), this.board[x][N][f.piece.tier - 1] = f.piece, {
            piece: f.piece,
            dst: f.dst,
            type: this.STACK
          }
      }
    });
    re(this, "board_generator", (f, m) => {
      let x = [];
      for (let N = 0; N < f; N++) {
        let _ = [];
        for (let D = 0; D < m; D++) _.push([null, null, null]);
        x.push(_)
      }
      return x
    });
    re(this, "update_territory", () => {
      this.territory = {
        b: [],
        w: []
      };
      let f;
      this.board.forEach((m, x) => {
        m.forEach((N, _) => {
          f = this.get_array_top(N), f && (this.territory[f.color] = this.territory[f.color].concat(f.Possible_moves(this.board)))
        })
      })
    });
    re(this, "legal_moves", f => {
      let m = [];
      return f.piece.name == "fortress" && f.type == "stack" && m.push(!1), m.indexOf(!1) == -1
    });
    this.BLACK = "b", this.WHITE = "w", this.DRAFT = "draft", this.GAME = "game", this.ATTACK = "attack", this.MOVEMENT = "move", this.STACK = "stack", this.PLACE = "place", this.READY = "ready", this.MAJOR_GENERAL = "小", this.LIEUTENANT = "中", this.GENERAL = "大", this.ARCHER = "弓", this.KNIGHT = "馬", this.MUSKETEER = "筒", this.CAPTAIN = "謀", this.SAMURAI = "侍", this.FORTRESS = "砦", this.CANNON = "砲", this.SPY = "忍", this.PAWN = "兵", this.MARSHAL = "帥", this.TIER1_WHITE = "一", this.TIER2_WHITE = "二", this.TIER3_WHITE = "三", this.TIER1_BLACK = "壱", this.TIER2_BLACK = "弐", this.TIER3_BLACK = "参", this.ROW = 9, this.COLUMN = 9, this.tag = f, this.board = this.board_generator(this.ROW, this.COLUMN)
  }
}
class fs {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        default:
          return Q(this, f)
      }
    });
    this.color = f, this.name = "king", this.symbol = "帥", this.tier = m, this.src = x
  }
}
class le {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, 0]
          ]);
        case 2:
          return Q(this, f, [
            [1, 0],
            [1, 1],
            [1, -1]
          ]);
        case 3:
          return Q(this, f, [
            [1, 0],
            [1, 1],
            [1, -1]
          ]);
        default:
          return null
      }
    });
    this.color = f, this.name = "pawn", this.symbol = "兵", this.tier = m, this.src = x
  }
}
class jn {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, 0]
          ]);
        case 2:
          return Q(this, f, [
            [1, -1],
            [1, 1],
            [-1, -1],
            [-1, 1]
          ]);
        case 3:
          return Hn(this, f, ["East", "North", "NE", "SE"]);
        default:
          return null
      }
    });
    this.color = f, this.name = "spy", this.symbol = "忍", this.tier = m, this.src = x
  }
}
class Vt {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, 0],
            [-1, 0],
            [0, -1],
            [0, 1]
          ]);
        case 2:
          return Dn(this, f);
        case 3:
          return Hn(this, f, ["East", "North"]);
        default:
          return null
      }
    });
    this.color = f, this.name = "cannon", this.symbol = "砲", this.tier = m, this.src = x
  }
}
class ls {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        default:
          return Q(this, f)
      }
    });
    this.color = f, this.name = "fortress", this.symbol = "砦", this.tier = m, this.src = x
  }
}
class Le {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, -1],
            [1, 1],
            [-1, -1],
            [-1, 1]
          ]);
        case 2:
          return Q(this, f, [
            [2, -2],
            [2, 2],
            [-2, -2],
            [-2, 2]
          ]);
        case 3:
          return Hn(this, f, ["NE", "SE"]);
        default:
          return null
      }
    });
    this.color = f, this.name = "samurai", this.symbol = "侍", this.tier = m, this.src = x
  }
}
class cs {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f);
        default:
          let x = this.src.split("-")[0],
            N = this.src.split("-")[1],
            _ = f[x][N][this.tier - 2];
          if (_.name == this.name)
            if (this.tier == 3) {
              _ = f[x][N][this.tier - 3];
              let k = new _.constructor(this.color, this.tier, this.src).Possible_moves(f);
              return k = k.map(ee => ({
                piece: this,
                dst: ee.dst,
                type: ee.type
              })), k
            } else return Q(this, f);
          else {
            let k = new _.constructor(this.color, this.tier, this.src).Possible_moves(f);
            return k = k.map(ee => ({
              piece: this,
              dst: ee.dst,
              type: ee.type
            })), k
          }
      }
    });
    this.color = f, this.name = "captain", this.symbol = "謀", this.tier = m, this.src = x
  }
}
class Ln {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, 0]
          ]);
        case 2:
          return Dn(this, f, [this.color == "w" ? "North" : "South"]);
        case 3:
          return Dn(this, f, [this.color == "w" ? "North" : "South"], 8);
        default:
          return null
      }
    });
    this.color = f, this.name = "musketeer", this.symbol = "筒", this.tier = m, this.src = x
  }
}
class ae {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [0, -1],
            [0, 1],
            [2, 1],
            [2, -1]
          ]);
        case 2:
          return Q(this, f, [
            [1, 2],
            [1, -2],
            [2, 1],
            [2, -1]
          ]);
        case 3:
          return Q(this, f, [
            [1, 2],
            [1, -2],
            [2, 1],
            [2, -1],
            [-1, 2],
            [-1, -2],
            [-2, 1],
            [-2, -1]
          ]);
        default:
          return null
      }
    });
    this.color = f, this.name = "knight", this.symbol = "馬", this.tier = m, this.src = x
  }
}
class Gt {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f);
        case 2:
          return Q(this, f, [
            [-2, -2],
            [-2, -1],
            [-2, 0],
            [-2, 1],
            [-2, 2],
            [-1, -2],
            [-1, 2],
            [0, -2],
            [0, 2],
            [1, -2],
            [1, 2],
            [2, -2],
            [2, -1],
            [2, 0],
            [2, 1],
            [2, 2]
          ]);
        case 3:
          return Q(this, f, [
            [-3, -3],
            [-3, -2],
            [-3, -1],
            [-3, 0],
            [-3, 1],
            [-3, 2],
            [-3, 3],
            [-2, -3],
            [-2, 3],
            [-1, -3],
            [-1, 3],
            [0, -3],
            [0, 3],
            [1, -3],
            [1, 3],
            [2, -3],
            [2, 3],
            [3, -3],
            [3, -2],
            [3, -1],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3]
          ]);
        default:
          return null
      }
    });
    this.color = f, this.name = "archer", this.symbol = "弓", this.tier = m, this.src = x
  }
}
class Pn {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, -1],
            [1, 0],
            [1, 1],
            [-1, 0],
            [0, -1],
            [0, 1]
          ]);
        case 2:
          return Q(this, f);
        case 3:
          return ds(this, f);
        default:
          return null
      }
    });
    this.color = f, this.name = "general", this.symbol = "大", this.tier = m, this.src = x
  }
}
class qn {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, -1],
            [1, 0],
            [1, 1],
            [-1, -1],
            [-1, 1]
          ]);
        case 2:
          return Q(this, f, [
            [1, -1],
            [1, 0],
            [1, 1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
          ]);
        case 3:
          return Q(this, f);
        default:
          return null
      }
    });
    this.color = f, this.name = "lieutenant", this.symbol = "中", this.tier = m, this.src = x
  }
}
class On {
  constructor(f, m = 0, x = null) {
    re(this, "Possible_moves", f => {
      switch (this.tier) {
        case -1:
          return null;
        case 0:
          let m = Te(this, f);
          return m != [] ? m : null;
        case 1:
          return Q(this, f, [
            [1, -1],
            [1, 1]
          ]);
        case 2:
          return Q(this, f, [
            [1, -1],
            [1, 0],
            [1, 1],
            [-1, -1],
            [-1, 1]
          ]);
        case 3:
          return Q(this, f, [
            [1, -1],
            [1, 0],
            [1, 1],
            [-1, 0],
            [0, -1],
            [0, 1]
          ]);
        default:
          return null
      }
    });
    this.color = f, this.name = "minor_general", this.symbol = "小", this.tier = m, this.src = x
  }
}

function Hn(C, f, m = ["East"]) {
  let x = [],
    N = {
      x: Number(C.src.split("-")[0]),
      y: Number(C.src.split("-")[1])
    };
  return m.forEach(_ => {
    switch (_) {
      case "East":
        for (let D = N.y + 1; D < 9; D++) {
          if (f[N.x][D][0]) {
            let k = ye(f[N.x][D]);
            x = x.concat(xe(C, k, N.x + "-" + D));
            break
          }
          x.push({
            piece: C,
            dst: N.x + "-" + D,
            type: "move"
          })
        }
        for (let D = N.y - 1; D >= 0; D--) {
          if (f[N.x][D][0]) {
            let k = ye(f[N.x][D]);
            x = x.concat(xe(C, k, N.x + "-" + D));
            break
          }
          x.push({
            piece: C,
            dst: N.x + "-" + D,
            type: "move"
          })
        }
        break;
      case "North":
        for (let D = N.x + 1; D < 9; D++) {
          if (f[D][N.y][0]) {
            let k = ye(f[D][N.y]);
            x = x.concat(xe(C, k, D + "-" + N.y));
            break
          }
          x.push({
            piece: C,
            dst: D + "-" + N.y,
            type: "move"
          })
        }
        for (let D = N.x - 1; D >= 0; D--) {
          if (f[D][N.y][0]) {
            let k = ye(f[D][N.y]);
            x = x.concat(xe(C, k, D + "-" + N.y));
            break
          }
          x.push({
            piece: C,
            dst: D + "-" + N.y,
            type: "move"
          })
        }
        break;
      case "NE":
        for (let D = N.x + 1, k = N.y + 1; D < 9 && k < 9; D++, k++) {
          if (f[D][k][0]) {
            let ee = ye(f[D][k]);
            x = x.concat(xe(C, ee, D + "-" + k));
            break
          }
          x.push({
            piece: C,
            dst: D + "-" + k,
            type: "move"
          })
        }
        for (let D = N.x - 1, k = N.y - 1; D >= 0 && k >= 0; D--, k--) {
          if (f[D][k][0]) {
            let ee = ye(f[D][k]);
            x = x.concat(xe(C, ee, D + "-" + k));
            break
          }
          x.push({
            piece: C,
            dst: D + "-" + k,
            type: "move"
          })
        }
        break;
      case "SE":
        for (let D = N.x + 1, k = N.y - 1; D < 9 && k >= 0; D++, k--) {
          if (f[D][k][0]) {
            let ee = ye(f[D][k]);
            x = x.concat(xe(C, ee, D + "-" + k));
            break
          }
          x.push({
            piece: C,
            dst: D + "-" + k,
            type: "move"
          })
        }
        for (let D = N.x - 1, k = N.y + 1; D >= 0 && k < 9; D--, k++) {
          if (f[D][k][0]) {
            let ee = ye(f[D][k]);
            x = x.concat(xe(C, ee, D + "-" + k));
            break
          }
          x.push({
            piece: C,
            dst: D + "-" + k,
            type: "move"
          })
        }
    }
  }), x
}

function Q(C, f, m = [
  [1, -1],
  [1, 0],
  [1, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1]
]) {
  let x = [],
    N = {
      x: Number(C.src.split("-")[0]),
      y: Number(C.src.split("-")[1])
    };
  return m.forEach(_ => {
    let D = C.color == "b" ? _[0] : -_[0];
    if (N.x + D < 9 && N.x + D >= 0 && N.y + _[1] < 9 && N.y + _[1] >= 0)
      if (f[N.x + D][N.y + _[1]][0]) {
        let k = ye(f[N.x + D][N.y + _[1]]);
        x = x.concat(xe(C, k, N.x + D + "-" + (N.y + _[1])))
      } else x.push({
        piece: C,
        dst: N.x + D + "-" + (N.y + _[1]),
        type: "move"
      })
  }), x
}

function Dn(C, f, m = ["East", "West", "North", "South"], x = 2) {
  let N = [],
    _ = {
      x: Number(C.src.split("-")[0]),
      y: Number(C.src.split("-")[1])
    };
  return m.forEach(D => {
    switch (D) {
      case "East":
        for (let k = _.y + 1; k < 9 && k <= _.y + x; k++) {
          if (f[_.x][k][0]) {
            let ee = ye(f[_.x][k]);
            N = N.concat(xe(C, ee, _.x + "-" + k));
            break
          }
          N.push({
            piece: C,
            dst: _.x + "-" + k,
            type: "move"
          })
        }
        break;
      case "West":
        for (let k = _.y - 1; k >= 0 && k >= _.y - x; k--) {
          if (f[_.x][k][0]) {
            let ee = ye(f[_.x][k]);
            N = N.concat(xe(C, ee, _.x + "-" + k));
            break
          }
          N.push({
            piece: C,
            dst: _.x + "-" + k,
            type: "move"
          })
        }
        break;
      case "North":
        for (let k = _.x - 1; k >= 0 && _.x - x <= k; k--) {
          if (f[k][_.y][0]) {
            let ee = ye(f[k][_.y]);
            N = N.concat(xe(C, ee, k + "-" + _.y));
            break
          }
          N.push({
            piece: C,
            dst: k + "-" + _.y,
            type: "move"
          })
        }
        break;
      case "South":
        for (let k = _.x + 1; k < 9 && _.x + x >= k; k++) {
          if (f[k][_.y][0]) {
            let ee = ye(f[k][_.y]);
            N = N.concat(xe(C, ee, k + "-" + _.y));
            break
          }
          N.push({
            piece: C,
            dst: k + "-" + _.y,
            type: "move"
          })
        }
        break
    }
  }), N
}

function ds(C, f) {
  let m = Q(C, f),
    x = {
      x: Number(C.src.split("-")[0]),
      y: Number(C.src.split("-")[1])
    },
    N = C.color == "b" ? 2 : -2;
  for (let _ = -1; _ < 2; _++) x.x + N / 2 < 9 && x.x + N / 2 > 0 && x.y + _ < 9 && x.y + _ > 0 && !f[x.x + N / 2][x.y + _][0] && (m = m.concat(Q(C, f, [
    [2, _]
  ])));
  return m
}

function ye(C) {
  for (let f = C.length; f >= 0; f--)
    if (C[f]) return C[f];
  return null
}

function xe(C, f, m) {
  return f.color === C.color ? f.name != "king" && f.tier != 3 ? [{
    piece: C,
    dst: m,
    type: "stack"
  }] : [] : f.name != "king" && f.tier != 3 ? [{
    piece: C,
    dst: m,
    type: "stack"
  }, {
    piece: C,
    dst: m,
    type: "attack"
  }] : [{
    piece: C,
    dst: m,
    type: "attack"
  }]
}

function Te(C, f) {
  let m = [],
    x;
  for (let N = [C.color == "w" ? 3 : 0]; N < [C.color == "w" ? 9 : 6]; N++)
    for (let _ = 0; _ < 9; _++) x = ye(f[N][_]), (!x || x.name != "king" && x.tier < 3) && m.push({
      piece: C,
      dst: N + "-" + _,
      type: "place"
    });
  return m
}
const ps = ["#000000", "#8a8a8a", "#fc9803", "#cc0000"];

function hs(C, f, m) {
  ue(C).css({
    color: ps[m - 1],
    "border-radius": "50px",
    outline: "5px #d1d1d1 solid",
    "outline-offset": "-5px",
    "background-color": "white"
  }), ue(C).text(f)
}

function gs(C, f = "#ffba75") {
  ue(C).css({
    color: f,
    "border-radius": "5px",
    outline: "0px #999999 solid",
    "outline-offset": "0px"
  })
}

function ys(C, f, m) {
  let x = C.get_top(f);
  return C.moves(x).filter(_ => _.dst == m)
}

function zr(C = [".box", ".tier", ".stockpile", ".captured"]) {
  ue.each(C, (f, m) => {
    ue(m).css({
      border: "1px solid #ffba75",
      "box-shadow": "0px 0px 0px 0px #999999"
    })
  })
}

function vs(C, f) {
  ue(C).css({
    border: "1px solid " + f,
    "box-shadow": "0px 0px 5px 1px " + f
  })
}

function ms(C, f) {
  let m = C.move(f);
  if (m) {
    switch (f.type) {
      case C.MOVEMENT:
        z(C);
        break;
      case C.STACK:
        z(C);
        break
    }
    return m
  }
}

function z(C) {
  C.board.forEach((f, m) => {
    f.forEach((x, N) => {
      x.forEach((_, D) => {
        _ == null && D == 0 ? (gs(`#${C.tag}-${m}-${N}`), ue(`#${C.tag}-${m}-${N}`).css({
          "background-color": "#ffba75"
        })) : _ && hs(`#${C.tag}-${m}-${N}`, _.symbol, _.tier)
      })
    })
  })
}

function bs(C, f) {
  let m = C.moves(C.get_top(f));
  return m.length > 0 && ue.each(m, (x, N) => {
    N.type == "move" ? ue(`#${C.tag}-${N.dst}`).css({
      border: "1px solid #009699",
      "box-shadow": "0px 0px 5px 1px #009699"
    }) : ue(`#${C.tag}-${N.dst}`).css({
      border: "1px solid red",
      "box-shadow": "0px 0px 5px 1px red"
    })
  }), m.length
}

function G(C, f) {
  for (let m = 0; m < 9; m++)
    for (let x = 0; x < 9; x++) ue(C).append(`<label class='box boarder' type='text' id='${f}-${m}-${x}' name='${m}-${x}'>${m}${x}</label>`)
}
G("#king_1", "m1");
G("#pawn_1", "p1");
G("#pawn_2", "p2");
G("#pawn_3", "p3");
G("#spy_1", "s1");
G("#spy_2", "s2");
G("#spy_3", "s3");
G("#cannon_1", "c1");
G("#cannon_2", "c2");
G("#cannon_3", "c3");
G("#fortress_1", "f1");
G("#samurai_1", "sa1");
G("#samurai_2", "sa2");
G("#samurai_3", "sa3");
G("#captain_1", "ca1");
G("#musketeer_1", "ma1");
G("#musketeer_2", "ma2");
G("#musketeer_3", "ma3");
G("#knight_1", "k1");
G("#knight_2", "k2");
G("#knight_3", "k3");
G("#archer_1", "a1");
G("#archer_2", "a2");
G("#archer_3", "a3");
G("#general_1", "g1");
G("#general_2", "g2");
G("#general_3", "g3");
G("#lieutenant_1", "l1");
G("#lieutenant_2", "l2");
G("#lieutenant_3", "l3");
G("#minor_general_1", "mg1");
G("#minor_general_2", "mg2");
G("#minor_general_3", "mg3");
const st = new V("m1");
st.board[4][4][0] = new fs("w", 1, "4-4");
st.board[2][6][0] = new le("w", 1, "2-6");
st.board[2][2][0] = new ae("w", 1, "2-2");
st.board[2][2][1] = new Le("w", 2, "2-2");
z(st);
const Rn = new V("p1");
Rn.board[4][4][0] = new le("w", 1, "4-4");
z(Rn);
const Xt = new V("p2");
Xt.board[4][4][0] = new ae("w", 1, "4-4");
Xt.board[4][4][1] = new le("w", 2, "4-4");
z(Xt);
const bt = new V("p3");
bt.board[4][4][0] = new ae("w", 1, "4-4");
bt.board[4][4][1] = new Le("w", 2, "4-4");
bt.board[4][4][2] = new le("w", 3, "4-4");
z(bt);
const In = new V("s1");
In.board[4][4][0] = new jn("w", 1, "4-4");
z(In);
const Kt = new V("s2");
Kt.board[4][4][0] = new ae("w", 1, "4-4");
Kt.board[4][4][1] = new jn("w", 2, "4-4");
z(Kt);
const wt = new V("s3");
wt.board[4][4][0] = new ae("w", 1, "4-4");
wt.board[4][4][1] = new Le("w", 2, "4-4");
wt.board[4][4][2] = new jn("w", 3, "4-4");
z(wt);
const Mn = new V("c1");
Mn.board[4][4][0] = new Vt("w", 1, "4-4");
z(Mn);
const Qt = new V("c2");
Qt.board[4][4][0] = new ae("w", 1, "4-4");
Qt.board[4][4][1] = new Vt("w", 2, "4-4");
z(Qt);
const xt = new V("c3");
xt.board[4][4][0] = new ae("w", 1, "4-4");
xt.board[4][4][1] = new Le("w", 2, "4-4");
xt.board[4][4][2] = new Vt("w", 3, "4-4");
z(xt);
const Yt = new V("f1");
Yt.board[4][4][0] = new ls("w", 1, "4-4");
Yt.board[2][5][0] = new le("w", 1, "2-5");
z(Yt);
const $n = new V("sa1");
$n.board[4][4][0] = new Le("w", 1, "4-4");
z($n);
const Jt = new V("sa2");
Jt.board[4][4][0] = new ae("w", 1, "4-4");
Jt.board[4][4][1] = new Le("w", 2, "4-4");
z(Jt);
const Tt = new V("sa3");
Tt.board[4][4][0] = new ae("w", 1, "4-4");
Tt.board[4][4][1] = new Vt("w", 2, "4-4");
Tt.board[4][4][2] = new Le("w", 3, "4-4");
z(Tt);
const Xe = new V("ca1");
Xe.board[4][4][0] = new cs("w", 1, "4-4");
Xe.board[2][5][0] = new le("w", 1, "2-5");
Xe.board[2][2][0] = new ae("w", 1, "2-2");
Xe.board[2][2][1] = new Le("w", 2, "2-2");
Xe.board[6][6][0] = new Gt("w", 1, "6-6");
z(Xe);
const Wn = new V("ma1");
Wn.board[4][4][0] = new Ln("w", 1, "4-4");
z(Wn);
const Zt = new V("ma2");
Zt.board[4][4][0] = new ae("w", 1, "4-4");
Zt.board[4][4][1] = new Ln("w", 2, "4-4");
z(Zt);
const Ct = new V("ma3");
Ct.board[4][4][0] = new ae("w", 1, "4-4");
Ct.board[4][4][1] = new Le("w", 2, "4-4");
Ct.board[4][4][2] = new Ln("w", 3, "4-4");
z(Ct);
const Fn = new V("k1");
Fn.board[4][4][0] = new ae("w", 1, "4-4");
z(Fn);
const en = new V("k2");
en.board[4][4][0] = new le("w", 1, "4-4");
en.board[4][4][1] = new ae("w", 2, "4-4");
z(en);
const St = new V("k3");
St.board[4][4][0] = new le("w", 1, "4-4");
St.board[4][4][1] = new Le("w", 2, "4-4");
St.board[4][4][2] = new ae("w", 3, "4-4");
z(St);
const Bn = new V("a1");
Bn.board[4][4][0] = new Gt("w", 1, "4-4");
z(Bn);
const tn = new V("a2");
tn.board[4][4][0] = new le("w", 1, "4-4");
tn.board[4][4][1] = new Gt("w", 2, "4-4");
z(tn);
const Et = new V("a3");
Et.board[4][4][0] = new le("w", 1, "4-4");
Et.board[4][4][1] = new ae("w", 2, "4-4");
Et.board[4][4][2] = new Gt("w", 3, "4-4");
z(Et);
const zn = new V("g1");
zn.board[4][4][0] = new Pn("w", 1, "4-4");
z(zn);
const nn = new V("g2");
nn.board[4][4][0] = new le("w", 1, "4-4");
nn.board[4][4][1] = new Pn("w", 2, "4-4");
z(nn);
const Nt = new V("g3");
Nt.board[4][4][0] = new le("w", 1, "4-4");
Nt.board[4][4][1] = new ae("w", 2, "4-4");
Nt.board[4][4][2] = new Pn("w", 3, "4-4");
z(Nt);
const Un = new V("l1");
Un.board[4][4][0] = new qn("w", 1, "4-4");
z(Un);
const rn = new V("l2");
rn.board[4][4][0] = new le("w", 1, "4-4");
rn.board[4][4][1] = new qn("w", 2, "4-4");
z(rn);
const kt = new V("l3");
kt.board[4][4][0] = new le("w", 1, "4-4");
kt.board[4][4][1] = new ae("w", 2, "4-4");
kt.board[4][4][2] = new qn("w", 3, "4-4");
z(kt);
const Vn = new V("mg1");
Vn.board[4][4][0] = new On("w", 1, "4-4");
z(Vn);
const sn = new V("mg2");
sn.board[4][4][0] = new le("w", 1, "4-4");
sn.board[4][4][1] = new On("w", 2, "4-4");
z(sn);
const At = new V("mg3");
At.board[4][4][0] = new le("w", 1, "4-4");
At.board[4][4][1] = new ae("w", 2, "4-4");
At.board[4][4][2] = new On("w", 3, "4-4");
z(At);
const Ut = {
  m1: st,
  p1: Rn,
  p2: Xt,
  p3: bt,
  s1: In,
  s2: Kt,
  s3: wt,
  c1: Mn,
  c2: Qt,
  c3: xt,
  f1: Yt,
  sa1: $n,
  sa2: Jt,
  sa3: Tt,
  ca1: Xe,
  ma1: Wn,
  ma2: Zt,
  ma3: Ct,
  k1: Fn,
  k2: en,
  k3: St,
  a1: Bn,
  a2: tn,
  a3: Et,
  g1: zn,
  g2: nn,
  g3: Nt,
  l1: Un,
  l2: rn,
  l3: kt,
  mg1: Vn,
  mg2: sn,
  mg3: At
};
var mt, je = {
  src: null,
  dst: null
};
ue(".box").mousedown(function (C) {
  switch (C.which) {
    case 1:
      zr(), vs(this, "green"), mt = ue(this).attr("id").split("-")[0], je.dst = ue(this).attr("name");
      let f = ys(Ut[mt], je.src, je.dst);
      f.length == 1 && (ms(Ut[mt], {
        piece: Ut[mt].get_top(je.src),
        dst: je.dst,
        type: f[0].type
      }), je.src = null, je.dst = null, zr()), bs(Ut[mt], ue(this).attr("name")) > 0 ? je.src = ue(this).attr("name") : (je.src = null, je.dst = null);
      break;
    default:
      console.log("You have a strange Mouse!");
      break
  }
});
ue(document).bind("contextmenu", function (C) {
  return !1
});