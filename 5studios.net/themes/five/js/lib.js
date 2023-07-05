!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (T, e) {
    "use strict";
    var t = [], C = T.document, n = Object.getPrototypeOf, o = t.slice, m = t.concat, l = t.push, r = t.indexOf, i = {},
        a = i.toString, v = i.hasOwnProperty, s = v.toString, c = s.call(Object), g = {}, y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, b = function (e) {
            return null != e && e === e.window
        }, u = {type: !0, src: !0, noModule: !0};

    function w(e, t, i) {
        var n, r = (t = t || C).createElement("script");
        if (r.text = e, i) for (n in u) i[n] && (r[n] = i[n]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
    }

    var d = "3.3.1", _ = function (e, t) {
        return new _.fn.init(e, t)
    }, h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length, i = x(e);
        return !y(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    _.fn = _.prototype = {
        jquery: d, constructor: _, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return _.each(this, e)
        }, map: function (i) {
            return this.pushStack(_.map(this, function (e, t) {
                return i.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: l, sort: t.sort, splice: t.splice
    }, _.extend = _.fn.extend = function () {
        var e, t, i, n, r, a, s = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[o] || {}, o++), "object" == typeof s || y(s) || (s = {}), o === l && (s = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) i = s[t], s !== (n = e[t]) && (c && n && (_.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, a = i && Array.isArray(i) ? i : []) : a = i && _.isPlainObject(i) ? i : {}, s[t] = _.extend(c, a, n)) : void 0 !== n && (s[t] = n));
        return s
    }, _.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, i;
            return !(!e || "[object Object]" !== a.call(e)) && (!(t = n(e)) || "function" == typeof (i = v.call(t, "constructor") && t.constructor) && s.call(i) === c)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            w(e)
        }, each: function (e, t) {
            var i, n = 0;
            if (p(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) ; else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(h, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (p(Object(e)) ? _.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
        }, inArray: function (e, t, i) {
            return null == t ? -1 : r.call(t, e, i)
        }, merge: function (e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        }, grep: function (e, t, i) {
            for (var n = [], r = 0, a = e.length, s = !i; r < a; r++) !t(e[r], r) !== s && n.push(e[r]);
            return n
        }, map: function (e, t, i) {
            var n, r, a = 0, s = [];
            if (p(e)) for (n = e.length; a < n; a++) null != (r = t(e[a], a, i)) && s.push(r); else for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
            return m.apply([], s)
        }, guid: 1, support: g
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = t[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function (i) {
        var e, p, w, a, r, f, d, m, x, l, c, E, T, s, C, v, o, u, g, _ = "sizzle" + 1 * new Date, y = i.document, S = 0,
            n = 0, h = se(), b = se(), k = se(), A = function (e, t) {
                return e === t && (c = !0), 0
            }, D = {}.hasOwnProperty, t = [], I = t.pop, M = t.push, P = t.push, O = t.slice, N = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + z + "*(" + j + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + z + "*\\]",
            R = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            $ = new RegExp(z + "+", "g"), q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            F = new RegExp("^" + z + "*," + z + "*"), B = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            W = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"), Y = new RegExp(R),
            V = new RegExp("^" + j + "$"), G = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            }, X = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"), ee = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ne = function () {
                E()
            }, re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            P.apply(t = O.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function (e, t) {
                    M.apply(e, O.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];) ;
                    e.length = i - 1
                }
            }
        }

        function ae(e, t, i, n) {
            var r, a, s, o, l, c, u, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
            if (!n && ((t ? t.ownerDocument || t : y) !== T && E(t), t = t || T, C)) {
                if (11 !== h && (l = Q.exec(e))) if (r = l[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(r))) return i;
                        if (s.id === r) return i.push(s), i
                    } else if (d && (s = d.getElementById(r)) && g(t, s) && s.id === r) return i.push(s), i
                } else {
                    if (l[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                    if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(r)), i
                }
                if (p.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== h) d = t, u = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(te, ie) : t.setAttribute("id", o = _), a = (c = f(e)).length; a--;) c[a] = "#" + o + " " + ge(c[a]);
                        u = c.join(","), d = J.test(e) && me(t.parentNode) || t
                    }
                    if (u) try {
                        return P.apply(i, d.querySelectorAll(u)), i
                    } catch (e) {
                    } finally {
                        o === _ && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(q, "$1"), t, i, n)
        }

        function se() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function oe(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function ue(e, t) {
            var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(i) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function pe(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function fe(s) {
            return oe(function (a) {
                return a = +a, oe(function (e, t) {
                    for (var i, n = s([], e.length, a), r = n.length; r--;) e[i = n[r]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (e in p = ae.support = {}, r = ae.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, E = ae.setDocument = function (e) {
            var t, i, n = e ? e.ownerDocument || e : y;
            return n !== T && 9 === n.nodeType && n.documentElement && (s = (T = n).documentElement, C = !r(T), y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), p.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), p.getElementsByTagName = le(function (e) {
                return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
            }), p.getElementsByClassName = K.test(T.getElementsByClassName), p.getById = le(function (e) {
                return s.appendChild(e).id = _, !T.getElementsByName || !T.getElementsByName(_).length
            }), p.getById ? (w.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && C) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }) : (w.filter.ID = function (e) {
                var i = e.replace(Z, ee);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && C) {
                    var i, n, r, a = t.getElementById(e);
                    if (a) {
                        if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                        for (r = t.getElementsByName(e), n = 0; a = r[n++];) if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
                    }
                    return []
                }
            }), w.find.TAG = p.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var i, n = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = a[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return a
            }, w.find.CLASS = p.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, o = [], v = [], (p.qsa = K.test(T.querySelectorAll)) && (le(function (e) {
                s.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + z + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || v.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + z + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (p.matchesSelector = K.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function (e) {
                p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), o.push("!=", R)
            }), v = v.length && new RegExp(v.join("|")), o = o.length && new RegExp(o.join("|")), t = K.test(s.compareDocumentPosition), g = t || K.test(s.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, A = t ? function (e, t) {
                if (e === t) return c = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === y && g(y, e) ? -1 : t === T || t.ownerDocument === y && g(y, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return c = !0, 0;
                var i, n = 0, r = e.parentNode, a = t.parentNode, s = [e], o = [t];
                if (!r || !a) return e === T ? -1 : t === T ? 1 : r ? -1 : a ? 1 : l ? N(l, e) - N(l, t) : 0;
                if (r === a) return ue(e, t);
                for (i = e; i = i.parentNode;) s.unshift(i);
                for (i = t; i = i.parentNode;) o.unshift(i);
                for (; s[n] === o[n];) n++;
                return n ? ue(s[n], o[n]) : s[n] === y ? -1 : o[n] === y ? 1 : 0
            }), T
        }, ae.matches = function (e, t) {
            return ae(e, null, null, t)
        }, ae.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== T && E(e), t = t.replace(W, "='$1']"), p.matchesSelector && C && !k[t + " "] && (!o || !o.test(t)) && (!v || !v.test(t))) try {
                var i = u.call(e, t);
                if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return 0 < ae(t, T, null, [e]).length
        }, ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && E(e), g(e, t)
        }, ae.attr = function (e, t) {
            (e.ownerDocument || e) !== T && E(e);
            var i = w.attrHandle[t.toLowerCase()],
                n = i && D.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !C) : void 0;
            return void 0 !== n ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, ae.escape = function (e) {
            return (e + "").replace(te, ie)
        }, ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ae.uniqueSort = function (e) {
            var t, i = [], n = 0, r = 0;
            if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(A), c) {
                for (; t = e[r++];) t === e[r] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1)
            }
            return l = null, e
        }, a = ae.getText = function (e) {
            var t, i = "", n = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += a(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[n++];) i += a(t);
            return i
        }, (w = ae.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = h[e + " "];
                    return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && h(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (i, n, r) {
                    return function (e) {
                        var t = ae.attr(e, i);
                        return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === r : "!=" === n ? t !== r : "^=" === n ? r && 0 === t.indexOf(r) : "*=" === n ? r && -1 < t.indexOf(r) : "$=" === n ? r && t.slice(-r.length) === r : "~=" === n ? -1 < (" " + t.replace($, " ") + " ").indexOf(r) : "|=" === n && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (f, e, t, m, v) {
                    var g = "nth" !== f.slice(0, 3), y = "last" !== f.slice(-4), b = "of-type" === e;
                    return 1 === m && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, i) {
                        var n, r, a, s, o, l, c = g !== y ? "nextSibling" : "previousSibling", u = e.parentNode,
                            d = b && e.nodeName.toLowerCase(), h = !i && !b, p = !1;
                        if (u) {
                            if (g) {
                                for (; c;) {
                                    for (s = e; s = s[c];) if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                    l = c = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                for (p = (o = (n = (r = (a = (s = u)[_] || (s[_] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === S && n[1]) && n[2], s = o && u.childNodes[o]; s = ++o && s && s[c] || (p = o = 0) || l.pop();) if (1 === s.nodeType && ++p && s === e) {
                                    r[f] = [S, o, p];
                                    break
                                }
                            } else if (h && (p = o = (n = (r = (a = (s = e)[_] || (s[_] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === S && n[1]), !1 === p) for (; (s = ++o && s && s[c] || (p = o = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (h && ((r = (a = s[_] || (s[_] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [S, p]), s !== e));) ;
                            return (p -= v) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                }, PSEUDO: function (e, a) {
                    var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[_] ? s(a) : 1 < s.length ? (t = [e, e, "", a], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                        for (var i, n = s(e, a), r = n.length; r--;) e[i = N(e, n[r])] = !(t[i] = n[r])
                    }) : function (e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: oe(function (e) {
                    var n = [], r = [], o = d(e.replace(q, "$1"));
                    return o[_] ? oe(function (e, t, i, n) {
                        for (var r, a = o(e, null, n, []), s = e.length; s--;) (r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, t, i) {
                        return n[0] = e, o(n, null, i, r), n[0] = null, !r.pop()
                    }
                }), has: oe(function (t) {
                    return function (e) {
                        return 0 < ae(t, e).length
                    }
                }), contains: oe(function (t) {
                    return t = t.replace(Z, ee), function (e) {
                        return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                    }
                }), lang: oe(function (i) {
                    return V.test(i || "") || ae.error("unsupported lang: " + i), i = i.replace(Z, ee).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === s
                }, focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: pe(!1), disabled: pe(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return U.test(e.nodeName)
                }, input: function (e) {
                    return X.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: fe(function () {
                    return [0]
                }), last: fe(function (e, t) {
                    return [t - 1]
                }), eq: fe(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: fe(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }), odd: fe(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }), lt: fe(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                    return e
                }), gt: fe(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) w.pseudos[e] = he(e);

        function ve() {
        }

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(o, e, t) {
            var l = e.dir, c = e.next, u = c || l, d = t && "parentNode" === u, h = n++;
            return e.first ? function (e, t, i) {
                for (; e = e[l];) if (1 === e.nodeType || d) return o(e, t, i);
                return !1
            } : function (e, t, i) {
                var n, r, a, s = [S, h];
                if (i) {
                    for (; e = e[l];) if ((1 === e.nodeType || d) && o(e, t, i)) return !0
                } else for (; e = e[l];) if (1 === e.nodeType || d) if (r = (a = e[_] || (e[_] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e; else {
                    if ((n = r[u]) && n[0] === S && n[1] === h) return s[2] = n[2];
                    if ((r[u] = s)[2] = o(e, t, i)) return !0
                }
                return !1
            }
        }

        function be(r) {
            return 1 < r.length ? function (e, t, i) {
                for (var n = r.length; n--;) if (!r[n](e, t, i)) return !1;
                return !0
            } : r[0]
        }

        function we(e, t, i, n, r) {
            for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++) (a = e[o]) && (i && !i(a, n, r) || (s.push(a), c && t.push(o)));
            return s
        }

        function xe(p, f, m, v, g, e) {
            return v && !v[_] && (v = xe(v)), g && !g[_] && (g = xe(g, e)), oe(function (e, t, i, n) {
                var r, a, s, o = [], l = [], c = t.length, u = e || function (e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) ae(e, t[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []), d = !p || !e && f ? u : we(u, o, p, i, n),
                    h = m ? g || (e ? p : c || v) ? [] : t : d;
                if (m && m(d, h, i, n), v) for (r = we(h, l), v(r, [], i, n), a = r.length; a--;) (s = r[a]) && (h[l[a]] = !(d[l[a]] = s));
                if (e) {
                    if (g || p) {
                        if (g) {
                            for (r = [], a = h.length; a--;) (s = h[a]) && r.push(d[a] = s);
                            g(null, h = [], r, n)
                        }
                        for (a = h.length; a--;) (s = h[a]) && -1 < (r = g ? N(e, s) : o[a]) && (e[r] = !(t[r] = s))
                    }
                } else h = we(h === t ? h.splice(c, h.length) : h), g ? g(null, t, h, n) : P.apply(t, h)
            })
        }

        function Ee(e) {
            for (var r, t, i, n = e.length, a = w.relative[e[0].type], s = a || w.relative[" "], o = a ? 1 : 0, l = ye(function (e) {
                return e === r
            }, s, !0), c = ye(function (e) {
                return -1 < N(r, e)
            }, s, !0), u = [function (e, t, i) {
                var n = !a && (i || t !== x) || ((r = t).nodeType ? l(e, t, i) : c(e, t, i));
                return r = null, n
            }]; o < n; o++) if (t = w.relative[e[o].type]) u = [ye(be(u), t)]; else {
                if ((t = w.filter[e[o].type].apply(null, e[o].matches))[_]) {
                    for (i = ++o; i < n && !w.relative[e[i].type]; i++) ;
                    return xe(1 < o && be(u), 1 < o && ge(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(q, "$1"), t, o < i && Ee(e.slice(o, i)), i < n && Ee(e = e.slice(i)), i < n && ge(e))
                }
                u.push(t)
            }
            return be(u)
        }

        return ve.prototype = w.filters = w.pseudos, w.setFilters = new ve, f = ae.tokenize = function (e, t) {
            var i, n, r, a, s, o, l, c = b[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, o = [], l = w.preFilter; s;) {
                for (a in i && !(n = F.exec(s)) || (n && (s = s.slice(n[0].length) || s), o.push(r = [])), i = !1, (n = B.exec(s)) && (i = n.shift(), r.push({
                    value: i,
                    type: n[0].replace(q, " ")
                }), s = s.slice(i.length)), w.filter) !(n = G[a].exec(s)) || l[a] && !(n = l[a](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: a,
                    matches: n
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length : s ? ae.error(e) : b(e, o).slice(0)
        }, d = ae.compile = function (e, t) {
            var i, v, g, y, b, n, r = [], a = [], s = k[e + " "];
            if (!s) {
                for (t || (t = f(e)), i = t.length; i--;) (s = Ee(t[i]))[_] ? r.push(s) : a.push(s);
                (s = k(e, (v = a, y = 0 < (g = r).length, b = 0 < v.length, n = function (e, t, i, n, r) {
                    var a, s, o, l = 0, c = "0", u = e && [], d = [], h = x, p = e || b && w.find.TAG("*", r),
                        f = S += null == h ? 1 : Math.random() || .1, m = p.length;
                    for (r && (x = t === T || t || r); c !== m && null != (a = p[c]); c++) {
                        if (b && a) {
                            for (s = 0, t || a.ownerDocument === T || (E(a), i = !C); o = v[s++];) if (o(a, t || T, i)) {
                                n.push(a);
                                break
                            }
                            r && (S = f)
                        }
                        y && ((a = !o && a) && l--, e && u.push(a))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; o = g[s++];) o(u, d, t, i);
                        if (e) {
                            if (0 < l) for (; c--;) u[c] || d[c] || (d[c] = I.call(n));
                            d = we(d)
                        }
                        P.apply(n, d), r && !e && 0 < d.length && 1 < l + g.length && ae.uniqueSort(n)
                    }
                    return r && (S = f, x = h), u
                }, y ? oe(n) : n))).selector = e
            }
            return s
        }, m = ae.select = function (e, t, i, n) {
            var r, a, s, o, l, c = "function" == typeof e && e, u = !n && f(e = c.selector || e);
            if (i = i || [], 1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && C && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    c && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = G.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !w.relative[o = s.type]);) if ((l = w.find[o]) && (n = l(s.matches[0].replace(Z, ee), J.test(a[0].type) && me(t.parentNode) || t))) {
                    if (a.splice(r, 1), !(e = n.length && ge(a))) return P.apply(i, n), i;
                    break
                }
            }
            return (c || d(e, u))(n, t, !C, i, !t || J.test(e) && me(t.parentNode) || t), i
        }, p.sortStable = _.split("").sort(A).join("") === _, p.detectDuplicates = !!c, E(), p.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(L, function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), ae
    }(T);
    _.find = f, _.expr = f.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = f.uniqueSort, _.text = f.getText, _.isXMLDoc = f.isXML, _.contains = f.contains, _.escapeSelector = f.escape;
    var E = function (e, t, i) {
        for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && _(e).is(i)) break;
            n.push(e)
        }
        return n
    }, S = function (e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
    }, k = _.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, i, n) {
        return y(i) ? _.grep(e, function (e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? _.grep(e, function (e) {
            return e === i !== n
        }) : "string" != typeof i ? _.grep(e, function (e) {
            return -1 < r.call(i, e) !== n
        }) : _.filter(i, e, n)
    }

    _.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? _.find.matchesSelector(n, e) ? [n] : [] : _.find.matches(e, _.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function (e) {
            var t, i, n = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
                for (t = 0; t < n; t++) if (_.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) _.find(e, r[t], i);
            return 1 < n ? _.uniqueSort(i) : i
        }, filter: function (e) {
            return this.pushStack(I(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(I(this, e || [], !0))
        }, is: function (e) {
            return !!I(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1).length
        }
    });
    var M, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (e, t, i) {
        var n, r;
        if (!e) return this;
        if (i = i || M, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : P.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), D.test(n[1]) && _.isPlainObject(t)) for (n in t) y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = C.getElementById(n[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, M = _(C);
    var O = /^(?:parents|prev(?:Until|All))/, N = {children: !0, contents: !0, next: !0, prev: !0};

    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    _.fn.extend({
        has: function (e) {
            var t = _(e, this), i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++) if (_.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var i, n = 0, r = this.length, a = [], s = "string" != typeof e && _(e);
            if (!k.test(e)) for (; n < r; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && _.find.matchesSelector(i, e))) {
                a.push(i);
                break
            }
            return this.pushStack(1 < a.length ? _.uniqueSort(a) : a)
        }, index: function (e) {
            return e ? "string" == typeof e ? r.call(_(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return E(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return E(e, "parentNode", i)
        }, next: function (e) {
            return L(e, "nextSibling")
        }, prev: function (e) {
            return L(e, "previousSibling")
        }, nextAll: function (e) {
            return E(e, "nextSibling")
        }, prevAll: function (e) {
            return E(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return E(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return E(e, "previousSibling", i)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function (n, r) {
        _.fn[n] = function (e, t) {
            var i = _.map(this, r, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = _.filter(t, i)), 1 < this.length && (N[n] || _.uniqueSort(i), O.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function R(e, t, i, n) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(i) : e && y(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }

    _.Callbacks = function (n) {
        var e, i;
        n = "string" == typeof n ? (e = n, i = {}, _.each(e.match(z) || [], function (e, t) {
            i[t] = !0
        }), i) : _.extend({}, n);
        var r, t, a, s, o = [], l = [], c = -1, u = function () {
            for (s = s || n.once, a = r = !0; l.length; c = -1) for (t = l.shift(); ++c < o.length;) !1 === o[c].apply(t[0], t[1]) && n.stopOnFalse && (c = o.length, t = !1);
            n.memory || (t = !1), r = !1, s && (o = t ? [] : "")
        }, d = {
            add: function () {
                return o && (t && !r && (c = o.length - 1, l.push(t)), function i(e) {
                    _.each(e, function (e, t) {
                        y(t) ? n.unique && d.has(t) || o.push(t) : t && t.length && "string" !== x(t) && i(t)
                    })
                }(arguments), t && !r && u()), this
            }, remove: function () {
                return _.each(arguments, function (e, t) {
                    for (var i; -1 < (i = _.inArray(t, o, i));) o.splice(i, 1), i <= c && c--
                }), this
            }, has: function (e) {
                return e ? -1 < _.inArray(e, o) : 0 < o.length
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return s = l = [], o = t = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return s = l = [], t || r || (o = t = ""), this
            }, locked: function () {
                return !!s
            }, fireWith: function (e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!a
            }
        };
        return d
    }, _.extend({
        Deferred: function (e) {
            var a = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", s = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return s.then(null, e)
                    }, pipe: function () {
                        var r = arguments;
                        return _.Deferred(function (n) {
                            _.each(a, function (e, t) {
                                var i = y(r[t[4]]) && r[t[4]];
                                o[t[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    }, then: function (t, i, n) {
                        var l = 0;

                        function c(r, a, s, o) {
                            return function () {
                                var i = this, n = arguments, e = function () {
                                    var e, t;
                                    if (!(r < l)) {
                                        if ((e = s.apply(i, n)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? o ? t.call(e, c(l, a, j, o), c(l, a, H, o)) : (l++, t.call(e, c(l, a, j, o), c(l, a, H, o), c(l, a, j, a.notifyWith))) : (s !== j && (i = void 0, n = [e]), (o || a.resolveWith)(i, n))
                                    }
                                }, t = o ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== H && (i = void 0, n = [e]), a.rejectWith(i, n))
                                    }
                                };
                                r ? t() : (_.Deferred.getStackHook && (t.stackTrace = _.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }

                        return _.Deferred(function (e) {
                            a[0][3].add(c(0, e, y(n) ? n : j, e.notifyWith)), a[1][3].add(c(0, e, y(t) ? t : j)), a[2][3].add(c(0, e, y(i) ? i : H))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? _.extend(e, s) : s
                    }
                }, o = {};
            return _.each(a, function (e, t) {
                var i = t[2], n = t[5];
                s[t[1]] = i.add, n && i.add(function () {
                    r = n
                }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), i.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = i.fireWith
            }), s.promise(o), e && e.call(o, o), o
        }, when: function (e) {
            var i = arguments.length, t = i, n = Array(t), r = o.call(arguments), a = _.Deferred(), s = function (t) {
                return function (e) {
                    n[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : e, --i || a.resolveWith(n, r)
                }
            };
            if (i <= 1 && (R(e, a.done(s(t)).resolve, a.reject, !i), "pending" === a.state() || y(r[t] && r[t].then))) return a.then();
            for (; t--;) R(r[t], s(t), a.reject);
            return a.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (e, t) {
        T.console && T.console.warn && e && $.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, _.readyException = function (e) {
        T.setTimeout(function () {
            throw e
        })
    };
    var q = _.Deferred();

    function F() {
        C.removeEventListener("DOMContentLoaded", F), T.removeEventListener("load", F), _.ready()
    }

    _.fn.ready = function (e) {
        return q.then(e).catch(function (e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || q.resolveWith(C, [_])
        }
    }), _.ready.then = q.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(_.ready) : (C.addEventListener("DOMContentLoaded", F), T.addEventListener("load", F));
    var B = function (e, t, i, n, r, a, s) {
        var o = 0, l = e.length, c = null == i;
        if ("object" === x(i)) for (o in r = !0, i) B(e, t, o, i[o], !0, a, s); else if (void 0 !== n && (r = !0, y(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
            return c.call(_(e), i)
        })), t)) for (; o < l; o++) t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
        return r ? e : c ? t.call(e) : l ? t(e[0], i) : a
    }, W = /^-ms-/, Y = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(W, "ms-").replace(Y, V)
    }

    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function U() {
        this.expando = _.expando + U.uid++
    }

    U.uid = 1, U.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[G(t)] = i; else for (n in t) r[G(n)] = t[n];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        }, remove: function (e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in n ? [t] : t.match(z) || []).length;
                    for (; i--;) delete n[t[i]]
                }
                (void 0 === t || _.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var K = new U, Q = new U, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function ee(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
            try {
                i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
            } catch (e) {
            }
            Q.set(e, t, i)
        } else i = void 0;
        return i
    }

    _.extend({
        hasData: function (e) {
            return Q.hasData(e) || K.hasData(e)
        }, data: function (e, t, i) {
            return Q.access(e, t, i)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, i) {
            return K.access(e, t, i)
        }, _removeData: function (e, t) {
            K.remove(e, t)
        }
    }), _.fn.extend({
        data: function (i, e) {
            var t, n, r, a = this[0], s = a && a.attributes;
            if (void 0 === i) {
                if (this.length && (r = Q.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = G(n.slice(5)), ee(a, n, r[n]));
                    K.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof i ? this.each(function () {
                Q.set(this, i)
            }) : B(this, function (e) {
                var t;
                if (a && void 0 === e) return void 0 !== (t = Q.get(a, i)) ? t : void 0 !== (t = ee(a, i)) ? t : void 0;
                this.each(function () {
                    Q.set(this, i, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), _.extend({
        queue: function (e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = K.get(e, t), i && (!n || Array.isArray(i) ? n = K.access(e, t, _.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = _.queue(e, t), n = i.length, r = i.shift(), a = _._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete a.stop, r.call(e, function () {
                _.dequeue(e, t)
            }, a)), !n && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return K.get(e, i) || K.access(e, i, {
                empty: _.Callbacks("once memory").add(function () {
                    K.remove(e, [t + "queue", i])
                })
            })
        }
    }), _.fn.extend({
        queue: function (t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? _.queue(this[0], t) : void 0 === i ? this : this.each(function () {
                var e = _.queue(this, t, i);
                _._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && _.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                _.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var i, n = 1, r = _.Deferred(), a = this, s = this.length, o = function () {
                --n || r.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (i = K.get(a[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        }, ae = function (e, t, i, n) {
            var r, a, s = {};
            for (a in t) s[a] = e.style[a], e.style[a] = t[a];
            for (a in r = i.apply(e, n || []), t) e.style[a] = s[a];
            return r
        };

    function se(e, t, i, n) {
        var r, a, s = 20, o = n ? function () {
                return n.cur()
            } : function () {
                return _.css(e, t, "")
            }, l = o(), c = i && i[3] || (_.cssNumber[t] ? "" : "px"),
            u = (_.cssNumber[t] || "px" !== c && +l) && ie.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(e, t, u + c), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), u /= a;
            u *= 2, _.style(e, t, u + c), i = i || []
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
    }

    var oe = {};

    function le(e, t) {
        for (var i, n, r, a, s, o, l, c = [], u = 0, d = e.length; u < d; u++) (n = e[u]).style && (i = n.style.display, t ? ("none" === i && (c[u] = K.get(n, "display") || null, c[u] || (n.style.display = "")), "" === n.style.display && re(n) && (c[u] = (l = s = a = void 0, s = (r = n).ownerDocument, o = r.nodeName, (l = oe[o]) || (a = s.body.appendChild(s.createElement(o)), l = _.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), oe[o] = l)))) : "none" !== i && (c[u] = "none", K.set(n, "display", i)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }

    _.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                re(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i, ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, de = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? _.merge([e], i) : i
    }

    function fe(e, t) {
        for (var i = 0, n = e.length; i < n; i++) K.set(e[i], "globalEval", !t || K.get(t[i], "globalEval"))
    }

    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var me, ve, ge = /<|&#?\w+;/;

    function ye(e, t, i, n, r) {
        for (var a, s, o, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++) if ((a = e[p]) || 0 === a) if ("object" === x(a)) _.merge(h, a.nodeType ? [a] : a); else if (ge.test(a)) {
            for (s = s || d.appendChild(t.createElement("div")), o = (ue.exec(a) || ["", ""])[1].toLowerCase(), l = he[o] || he._default, s.innerHTML = l[1] + _.htmlPrefilter(a) + l[2], u = l[0]; u--;) s = s.lastChild;
            _.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(a));
        for (d.textContent = "", p = 0; a = h[p++];) if (n && -1 < _.inArray(a, n)) r && r.push(a); else if (c = _.contains(a.ownerDocument, a), s = pe(d.appendChild(a), "script"), c && fe(s), i) for (u = 0; a = s[u++];) de.test(a.type || "") && i.push(a);
        return d
    }

    me = C.createDocumentFragment().appendChild(C.createElement("div")), (ve = C.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), me.appendChild(ve), g.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var be = C.documentElement, we = /^key/, xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ce() {
        return !1
    }

    function _e() {
        try {
            return C.activeElement
        } catch (e) {
        }
    }

    function Se(e, t, i, n, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Ce; else if (!r) return e;
        return 1 === a && (s = r, (r = function (e) {
            return _().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), e.each(function () {
            _.event.add(this, t, r, n, i)
        })
    }

    _.event = {
        global: {}, add: function (t, e, i, n, r) {
            var a, s, o, l, c, u, d, h, p, f, m, v = K.get(t);
            if (v) for (i.handler && (i = (a = i).handler, r = a.selector), r && _.find.matchesSelector(be, r), i.guid || (i.guid = _.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
                return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(z) || [""]).length; c--;) p = m = (o = Ee.exec(e[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (d = _.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = _.event.special[p] || {}, u = _.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: r,
                needsContext: r && _.expr.match.needsContext.test(r),
                namespace: f.join(".")
            }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[p] = !0)
        }, remove: function (e, t, i, n, r) {
            var a, s, o, l, c, u, d, h, p, f, m, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(z) || [""]).length; c--;) if (p = m = (o = Ee.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                    for (d = _.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--;) u = h[a], !r && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                    s && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || _.removeEvent(e, p, v.handle), delete l[p])
                } else for (p in l) _.event.remove(e, p + t[c], i, n, !0);
                _.isEmptyObject(l) && K.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, i, n, r, a, s, o = _.event.fix(e), l = new Array(arguments.length),
                c = (K.get(this, "events") || {})[o.type] || [], u = _.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (s = _.event.handlers.call(this, o, c), t = 0; (r = s[t++]) && !o.isPropagationStopped();) for (o.currentTarget = r.elem, i = 0; (a = r.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((_.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result
            }
        }, handlers: function (e, t) {
            var i, n, r, a, s, o = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (a = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? -1 < _(r, this).index(c) : _.find(r, this, null, [c]).length), s[r] && a.push(n);
                a.length && o.push({elem: c, handlers: a})
            }
            return c = this, l < t.length && o.push({elem: c, handlers: t.slice(l)}), o
        }, addProp: function (t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: y(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[_.expando] ? e : new _.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== _e() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === _e() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return A(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, _.Event = function (e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
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
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, r) {
        _.event.special[e] = {
            delegateType: r, bindType: r, handle: function (e) {
                var t, i = e.relatedTarget, n = e.handleObj;
                return i && (i === this || _.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), _.fn.extend({
        on: function (e, t, i, n) {
            return Se(this, e, t, i, n)
        }, one: function (e, t, i, n) {
            return Se(this, e, t, i, n, 1)
        }, off: function (e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, _(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Ce), this.each(function () {
                _.event.remove(this, e, i, t)
            })
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var i, n, r, a, s, o, l, c;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.access(e), s = K.set(t, a), c = a.events)) for (r in delete s.handle, s.events = {}, c) for (i = 0, n = c[r].length; i < n; i++) _.event.add(t, r, c[r][i]);
            Q.hasData(e) && (o = Q.access(e), l = _.extend({}, o), Q.set(t, l))
        }
    }

    function Le(i, n, r, a) {
        n = m.apply([], n);
        var e, t, s, o, l, c, u = 0, d = i.length, h = d - 1, p = n[0], f = y(p);
        if (f || 1 < d && "string" == typeof p && !g.checkClone && De.test(p)) return i.each(function (e) {
            var t = i.eq(e);
            f && (n[0] = p.call(this, e, t.html())), Le(t, n, r, a)
        });
        if (d && (t = (e = ye(n, i[0].ownerDocument, !1, i, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (s = _.map(pe(e, "script"), Pe)).length; u < d; u++) l = e, u !== h && (l = _.clone(l, !0, !0), o && _.merge(s, pe(l, "script"))), r.call(i[u], l, u);
            if (o) for (c = s[s.length - 1].ownerDocument, _.map(s, Oe), u = 0; u < o; u++) l = s[u], de.test(l.type || "") && !K.access(l, "globalEval") && _.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(l.src) : w(l.textContent.replace(Ie, ""), c, l))
        }
        return i
    }

    function ze(e, t, i) {
        for (var n, r = t ? _.filter(t, e) : e, a = 0; null != (n = r[a]); a++) i || 1 !== n.nodeType || _.cleanData(pe(n)), n.parentNode && (i && _.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    _.extend({
        htmlPrefilter: function (e) {
            return e.replace(ke, "<$1></$2>")
        }, clone: function (e, t, i) {
            var n, r, a, s, o, l, c, u = e.cloneNode(!0), d = _.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (s = pe(u), n = 0, r = (a = pe(e)).length; n < r; n++) o = a[n], l = s[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
            if (t) if (i) for (a = a || pe(e), s = s || pe(u), n = 0, r = a.length; n < r; n++) Ne(a[n], s[n]); else Ne(e, u);
            return 0 < (s = pe(u, "script")).length && fe(s, !d && pe(e, "script")), u
        }, cleanData: function (e) {
            for (var t, i, n, r = _.event.special, a = 0; void 0 !== (i = e[a]); a++) if (X(i)) {
                if (t = i[K.expando]) {
                    if (t.events) for (n in t.events) r[n] ? _.event.remove(i, n) : _.removeEvent(i, n, t.handle);
                    i[K.expando] = void 0
                }
                i[Q.expando] && (i[Q.expando] = void 0)
            }
        }
    }), _.fn.extend({
        detach: function (e) {
            return ze(this, e, !0)
        }, remove: function (e) {
            return ze(this, e)
        }, text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? _.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Le(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Le(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(pe(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return _.clone(this, e, t)
            })
        }, html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {}, i = 0, n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (_.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var i = [];
            return Le(this, arguments, function (e) {
                var t = this.parentNode;
                _.inArray(this, i) < 0 && (_.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        _.fn[e] = function (e) {
            for (var t, i = [], n = _(e), r = n.length - 1, a = 0; a <= r; a++) t = a === r ? this : this.clone(!0), _(n[a])[s](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var je = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), He = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T), t.getComputedStyle(e)
    }, Re = new RegExp(ne.join("|"), "i");

    function $e(e, t, i) {
        var n, r, a, s, o = e.style;
        return (i = i || He(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !g.pixelBoxStyles() && je.test(s) && Re.test(t) && (n = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = i.width, o.width = n, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(o).appendChild(l);
                var e = T.getComputedStyle(l);
                i = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), n = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", be.removeChild(o), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var i, n, r, a, s, o = C.createElement("div"), l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === l.style.backgroundClip, _.extend(g, {
            boxSizingReliable: function () {
                return e(), n
            }, pixelBoxStyles: function () {
                return e(), a
            }, pixelPosition: function () {
                return e(), i
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), r
            }
        }))
    }();
    var Fe = /^(none|table(?!-c[ea]).+)/, Be = /^--/,
        We = {position: "absolute", visibility: "hidden", display: "block"},
        Ye = {letterSpacing: "0", fontWeight: "400"}, Ve = ["Webkit", "Moz", "ms"], Ge = C.createElement("div").style;

    function Xe(e) {
        var t = _.cssProps[e];
        return t || (t = _.cssProps[e] = function (e) {
            if (e in Ge) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Ve.length; i--;) if ((e = Ve[i] + t) in Ge) return e
        }(e) || e), t
    }

    function Ue(e, t, i) {
        var n = ie.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ke(e, t, i, n, r, a) {
        var s = "width" === t ? 1 : 0, o = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += _.css(e, i + ne[s], !0, r)), n ? ("content" === i && (l -= _.css(e, "padding" + ne[s], !0, r)), "margin" !== i && (l -= _.css(e, "border" + ne[s] + "Width", !0, r))) : (l += _.css(e, "padding" + ne[s], !0, r), "padding" !== i ? l += _.css(e, "border" + ne[s] + "Width", !0, r) : o += _.css(e, "border" + ne[s] + "Width", !0, r));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
    }

    function Qe(e, t, i) {
        var n = He(e), r = $e(e, t, n), a = "border-box" === _.css(e, "boxSizing", !1, n), s = a;
        if (je.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return s = s && (g.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === _.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ke(e, t, i || (a ? "border" : "content"), s, n, r) + "px"
    }

    function Je(e, t, i, n, r) {
        return new Je.prototype.init(e, t, i, n, r)
    }

    _.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = $e(e, "opacity");
                        return "" === i ? "1" : i
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = G(t), l = Be.test(t), c = e.style;
                if (l || (t = Xe(o)), s = _.cssHooks[t] || _.cssHooks[o], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : c[t];
                "string" === (a = typeof i) && (r = ie.exec(i)) && r[1] && (i = se(e, t, r), a = "number"), null != i && i == i && ("number" === a && (i += r && r[3] || (_.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function (e, t, i, n) {
            var r, a, s, o = G(t);
            return Be.test(t) || (t = Xe(o)), (s = _.cssHooks[t] || _.cssHooks[o]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = $e(e, t, n)), "normal" === r && t in Ye && (r = Ye[t]), "" === i || i ? (a = parseFloat(r), !0 === i || isFinite(a) ? a || 0 : r) : r
        }
    }), _.each(["height", "width"], function (e, o) {
        _.cssHooks[o] = {
            get: function (e, t, i) {
                if (t) return !Fe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, o, i) : ae(e, We, function () {
                    return Qe(e, o, i)
                })
            }, set: function (e, t, i) {
                var n, r = He(e), a = "border-box" === _.css(e, "boxSizing", !1, r), s = i && Ke(e, o, i, a, r);
                return a && g.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - Ke(e, o, "border", !1, r) - .5)), s && (n = ie.exec(t)) && "px" !== (n[3] || "px") && (e.style[o] = t, t = _.css(e, o)), Ue(0, t, s)
            }
        }
    }), _.cssHooks.marginLeft = qe(g.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({margin: "", padding: "", border: "Width"}, function (r, a) {
        _.cssHooks[r + a] = {
            expand: function (e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[r + ne[t] + a] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, "margin" !== r && (_.cssHooks[r + a].set = Ue)
    }), _.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, i) {
                var n, r, a = {}, s = 0;
                if (Array.isArray(t)) {
                    for (n = He(e), r = t.length; s < r; s++) a[t[s]] = _.css(e, t[s], !1, n);
                    return a
                }
                return void 0 !== i ? _.style(e, t, i) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((_.Tween = Je).prototype = {
        constructor: Je, init: function (e, t, i, n, r, a) {
            this.elem = e, this.prop = i, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (_.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, _.fx = Je.prototype.init, _.fx.step = {};
    var Ze, et, tt, it, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;

    function at() {
        et && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(at) : T.setTimeout(at, _.fx.interval), _.fx.tick())
    }

    function st() {
        return T.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var i, n = 0, r = {height: e};
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ne[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function lt(e, t, i) {
        for (var n, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), a = 0, s = r.length; a < s; a++) if (n = r[a].call(i, t, e)) return n
    }

    function ct(a, e, t) {
        var i, s, n = 0, r = ct.prefilters.length, o = _.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = Ze || st(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, r = c.tweens.length; n < r; n++) c.tweens[n].run(i);
            return o.notifyWith(a, [c, i, t]), i < 1 && r ? t : (r || o.notifyWith(a, [c, 1, 0]), o.resolveWith(a, [c]), !1)
        }, c = o.promise({
            elem: a,
            props: _.extend({}, e),
            opts: _.extend(!0, {specialEasing: {}, easing: _.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || st(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var i = _.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (e) {
                var t = 0, i = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < i; t++) c.tweens[t].run(1);
                return e ? (o.notifyWith(a, [c, 1, 0]), o.resolveWith(a, [c, e])) : o.rejectWith(a, [c, e]), this
            }
        }), u = c.props;
        for (!function (e, t) {
            var i, n, r, a, s;
            for (i in e) if (r = t[n = G(i)], a = e[i], Array.isArray(a) && (r = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (s = _.cssHooks[n]) && "expand" in s) for (i in a = s.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = r); else t[n] = r
        }(u, c.opts.specialEasing); n < r; n++) if (i = ct.prefilters[n].call(c, a, u, c.opts)) return y(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(u, lt, c), y(c.opts.start) && c.opts.start.call(a, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: a,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    _.Animation = _.extend(ct, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return se(i.elem, e, ie.exec(t), i), i
            }]
        }, tweener: function (e, t) {
            y(e) ? (t = e, e = ["*"]) : e = e.match(z);
            for (var i, n = 0, r = e.length; n < r; n++) i = e[n], ct.tweeners[i] = ct.tweeners[i] || [], ct.tweeners[i].unshift(t)
        }, prefilters: [function (e, t, i) {
            var n, r, a, s, o, l, c, u, d = "width" in t || "height" in t, h = this, p = {}, f = e.style,
                m = e.nodeType && re(e), v = K.get(e, "fxshow");
            for (n in i.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
                s.unqueued || o()
            }), s.unqueued++, h.always(function () {
                h.always(function () {
                    s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                })
            })), t) if (r = t[n], nt.test(r)) {
                if (delete t[n], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[n]) continue;
                    m = !0
                }
                p[n] = v && v[n] || _.style(e, n)
            }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p)) for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = K.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = _.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done(function () {
                f.display = c
            }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = K.access(e, "fxshow", {display: c}), a && (v.hidden = !m), m && le([e], !0), h.done(function () {
                for (n in m || le([e]), K.remove(e, "fxshow"), p) _.style(e, n, p[n])
            })), l = lt(m ? v[n] : 0, n, h), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), _.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? _.extend({}, e) : {
            complete: i || !i && t || y(e) && e,
            duration: e,
            easing: i && t || t && !y(t) && t
        };
        return _.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in _.fx.speeds ? n.duration = _.fx.speeds[n.duration] : n.duration = _.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            y(n.old) && n.old.call(this), n.queue && _.dequeue(this, n.queue)
        }, n
    }, _.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(re).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (t, e, i, n) {
            var r = _.isEmptyObject(t), a = _.speed(e, i, n), s = function () {
                var e = ct(this, _.extend({}, t), a);
                (r || K.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        }, stop: function (r, e, a) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(a)
            };
            return "string" != typeof r && (a = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var e = !0, t = null != r && r + "queueHooks", i = _.timers, n = K.get(this);
                if (t) n[t] && n[t].stop && s(n[t]); else for (t in n) n[t] && n[t].stop && rt.test(t) && s(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != r && i[t].queue !== r || (i[t].anim.stop(a), e = !1, i.splice(t, 1));
                !e && a || _.dequeue(this, r)
            })
        }, finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = K.get(this), i = t[s + "queue"], n = t[s + "queueHooks"], r = _.timers, a = i ? i.length : 0;
                for (t.finish = !0, _.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (e, n) {
        var r = _.fn[n];
        _.fn[n] = function (e, t, i) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ot(n, !0), e, t, i)
        }
    }), _.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, n) {
        _.fn[e] = function (e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), _.timers = [], _.fx.tick = function () {
        var e, t = 0, i = _.timers;
        for (Ze = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || _.fx.stop(), Ze = void 0
    }, _.fx.timer = function (e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
        et || (et = !0, at())
    }, _.fx.stop = function () {
        et = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (n, e) {
        return n = _.fx && _.fx.speeds[n] || n, e = e || "fx", this.queue(e, function (e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function () {
                T.clearTimeout(i)
            }
        })
    }, tt = C.createElement("input"), it = C.createElement("select").appendChild(C.createElement("option")), tt.type = "checkbox", g.checkOn = "" !== tt.value, g.optSelected = it.selected, (tt = C.createElement("input")).value = "t", tt.type = "radio", g.radioValue = "t" === tt.value;
    var ut, dt = _.expr.attrHandle;
    _.fn.extend({
        attr: function (e, t) {
            return B(this, _.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function (e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? _.prop(e, t, i) : (1 === a && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ut : void 0)), void 0 !== i ? null === i ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = _.find.attr(e, t)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!g.radioValue && "radio" === t && A(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var i, n = 0, r = t && t.match(z);
            if (r && 1 === e.nodeType) for (; i = r[n++];) e.removeAttribute(i)
        }
    }), ut = {
        set: function (e, t, i) {
            return !1 === t ? _.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var s = dt[t] || _.find.attr;
        dt[t] = function (e, t, i) {
            var n, r, a = t.toLowerCase();
            return i || (r = dt[a], dt[a] = n, n = null != s(e, t, i) ? a : null, dt[a] = r), n
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i, pt = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(z) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
    }

    _.fn.extend({
        prop: function (e, t) {
            return B(this, _.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function (e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), g.optSelected || (_.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function (t) {
            var e, i, n, r, a, s, o, l = 0;
            if (y(t)) return this.each(function (e) {
                _(this).addClass(t.call(this, e, mt(this)))
            });
            if ((e = vt(t)).length) for (; i = this[l++];) if (r = mt(i), n = 1 === i.nodeType && " " + ft(r) + " ") {
                for (s = 0; a = e[s++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                r !== (o = ft(n)) && i.setAttribute("class", o)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, r, a, s, o, l = 0;
            if (y(t)) return this.each(function (e) {
                _(this).removeClass(t.call(this, e, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length) for (; i = this[l++];) if (r = mt(i), n = 1 === i.nodeType && " " + ft(r) + " ") {
                for (s = 0; a = e[s++];) for (; -1 < n.indexOf(" " + a + " ");) n = n.replace(" " + a + " ", " ");
                r !== (o = ft(n)) && i.setAttribute("class", o)
            }
            return this
        }, toggleClass: function (r, t) {
            var a = typeof r, s = "string" === a || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function (e) {
                _(this).toggleClass(r.call(this, e, mt(this), t), t)
            }) : this.each(function () {
                var e, t, i, n;
                if (s) for (t = 0, i = _(this), n = vt(r); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== r && "boolean" !== a || ((e = mt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : K.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];) if (1 === i.nodeType && -1 < (" " + ft(mt(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    _.fn.extend({
        val: function (i) {
            var n, e, r, t = this[0];
            return arguments.length ? (r = y(i), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = r ? i.call(this, e, _(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = _.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (n = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = _.valHooks[t.type] || _.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : ft(_.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, i, n, r = e.options, a = e.selectedIndex, s = "select-one" === e.type, o = s ? null : [],
                        l = s ? a + 1 : r.length;
                    for (n = a < 0 ? l : s ? a : 0; n < l; n++) if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                        if (t = _(i).val(), s) return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var i, n, r = e.options, a = _.makeArray(t), s = r.length; s--;) ((n = r[s]).selected = -1 < _.inArray(_.valHooks.option.get(n), a)) && (i = !0);
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        }, g.checkOn || (_.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), g.focusin = "onfocusin" in T;
    var yt = /^(?:focusinfocus|focusoutblur)$/, bt = function (e) {
        e.stopPropagation()
    };
    _.extend(_.event, {
        trigger: function (e, t, i, n) {
            var r, a, s, o, l, c, u, d, h = [i || C], p = v.call(e, "type") ? e.type : e,
                f = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = d = s = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(p + _.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[_.expando] ? e : new _.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : _.makeArray(t, [e]), u = _.event.special[p] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                if (!n && !u.noBubble && !b(i)) {
                    for (o = u.delegateType || p, yt.test(o + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                    s === (i.ownerDocument || C) && h.push(s.defaultView || s.parentWindow || T)
                }
                for (r = 0; (a = h[r++]) && !e.isPropagationStopped();) d = a, e.type = 1 < r ? o : u.bindType || p, (c = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && X(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !X(i) || l && y(i[p]) && !b(i) && ((s = i[l]) && (i[l] = null), _.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, bt), i[p](), e.isPropagationStopped() && d.removeEventListener(p, bt), _.event.triggered = void 0, s && (i[l] = s)), e.result
            }
        }, simulate: function (e, t, i) {
            var n = _.extend(new _.Event, i, {type: e, isSimulated: !0});
            _.event.trigger(n, null, t)
        }
    }), _.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                _.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return _.event.trigger(e, t, i, !0)
        }
    }), g.focusin || _.each({focus: "focusin", blur: "focusout"}, function (i, n) {
        var r = function (e) {
            _.event.simulate(n, e.target, _.event.fix(e))
        };
        _.event.special[n] = {
            setup: function () {
                var e = this.ownerDocument || this, t = K.access(e, n);
                t || e.addEventListener(i, r, !0), K.access(e, n, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = K.access(e, n) - 1;
                t ? K.access(e, n, t) : (e.removeEventListener(i, r, !0), K.remove(e, n))
            }
        }
    });
    var wt = T.location, xt = Date.now(), Et = /\?/;
    _.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t
    };
    var Tt = /\[\]$/, Ct = /\r?\n/g, _t = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function kt(i, e, n, r) {
        var t;
        if (Array.isArray(e)) _.each(e, function (e, t) {
            n || Tt.test(i) ? r(i, t) : kt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, r)
        }); else if (n || "object" !== x(e)) r(i, e); else for (t in e) kt(i + "[" + t + "]", e[t], n, r)
    }

    _.param = function (e, t) {
        var i, n = [], r = function (e, t) {
            var i = y(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
            r(this.name, this.value)
        }); else for (i in e) kt(i, e[i], t, r);
        return n.join("&")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && St.test(this.nodeName) && !_t.test(e) && (this.checked || !ce.test(e))
            }).map(function (e, t) {
                var i = _(this).val();
                return null == i ? null : Array.isArray(i) ? _.map(i, function (e) {
                    return {name: t.name, value: e.replace(Ct, "\r\n")}
                }) : {name: t.name, value: i.replace(Ct, "\r\n")}
            }).get()
        }
    });
    var At = /%20/g, Dt = /#.*$/, It = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//, Nt = {}, Lt = {}, zt = "*/".concat("*"), jt = C.createElement("a");

    function Ht(a) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0, r = e.toLowerCase().match(z) || [];
            if (y(t)) for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
        }
    }

    function Rt(t, r, a, s) {
        var o = {}, l = t === Lt;

        function c(e) {
            var n;
            return o[e] = !0, _.each(t[e] || [], function (e, t) {
                var i = t(r, a, s);
                return "string" != typeof i || l || o[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i), c(i), !1)
            }), n
        }

        return c(r.dataTypes[0]) || !o["*"] && c("*")
    }

    function $t(e, t) {
        var i, n, r = _.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && _.extend(!0, e, n), e
    }

    jt.href = wt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? $t($t(e, _.ajaxSettings), t) : $t(_.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Nt),
        ajaxTransport: Ht(Lt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, h, i, p, n, f, m, r, a, v = _.ajaxSetup({}, t), g = v.context || v,
                y = v.context && (g.nodeType || g.jquery) ? _(g) : _.event, b = _.Deferred(),
                w = _.Callbacks("once memory"), x = v.statusCode || {}, s = {}, o = {}, l = "canceled", E = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (f) {
                            if (!i) for (i = {}; t = Mt.exec(h);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return f ? h : null
                    }, setRequestHeader: function (e, t) {
                        return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, s[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == f && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (f) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(E), v.url = ((e || v.url || wt.href) + "").replace(Ot, wt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(z) || [""], null == v.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = v.url, n.href = n.href, v.crossDomain = jt.protocol + "//" + jt.host != n.protocol + "//" + n.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = _.param(v.data, v.traditional)), Rt(Nt, v, t, E), f) return E;
            for (r in (m = _.event && v.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Pt.test(v.type), d = v.url.replace(Dt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(At, "+")) : (a = v.url.slice(d.length), v.data && (v.processData || "string" == typeof v.data) && (d += (Et.test(d) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (d = d.replace(It, "$1"), a = (Et.test(d) ? "&" : "?") + "_=" + xt++ + a), v.url = d + a), v.ifModified && (_.lastModified[d] && E.setRequestHeader("If-Modified-Since", _.lastModified[d]), _.etag[d] && E.setRequestHeader("If-None-Match", _.etag[d])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && E.setRequestHeader("Content-Type", v.contentType), E.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) E.setRequestHeader(r, v.headers[r]);
            if (v.beforeSend && (!1 === v.beforeSend.call(g, E, v) || f)) return E.abort();
            if (l = "abort", w.add(v.complete), E.done(v.success), E.fail(v.error), u = Rt(Lt, v, t, E)) {
                if (E.readyState = 1, m && y.trigger("ajaxSend", [E, v]), f) return E;
                v.async && 0 < v.timeout && (p = T.setTimeout(function () {
                    E.abort("timeout")
                }, v.timeout));
                try {
                    f = !1, u.send(s, c)
                } catch (e) {
                    if (f) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, i, n) {
                var r, a, s, o, l, c = t;
                f || (f = !0, p && T.clearTimeout(p), u = void 0, h = n || "", E.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, i && (o = function (e, t, i) {
                    for (var n, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n) for (r in o) if (o[r] && o[r].test(n)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in i) a = l[0]; else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s || (s = r)
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), i[a]
                }(v, E, i)), o = function (e, t, i, n) {
                    var r, a, s, o, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;) if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                        if (!(s = c[l + " " + a] || c["* " + a])) for (r in c) if ((o = r.split(" "))[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (a = o[0], u.unshift(o[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t)
                        } catch (e) {
                            return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a}
                        }
                    }
                    return {state: "success", data: t}
                }(v, o, E, r), r ? (v.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (_.lastModified[d] = l), (l = E.getResponseHeader("etag")) && (_.etag[d] = l)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = o.state, a = o.data, r = !(s = o.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || c) + "", r ? b.resolveWith(g, [a, c, E]) : b.rejectWith(g, [E, c, s]), E.statusCode(x), x = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, v, r ? a : s]), w.fireWith(g, [E, c]), m && (y.trigger("ajaxComplete", [E, v]), --_.active || _.event.trigger("ajaxStop")))
            }

            return E
        },
        getJSON: function (e, t, i) {
            return _.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function (e, r) {
        _[r] = function (e, t, i, n) {
            return y(t) && (n = n || i, i = t, t = void 0), _.ajax(_.extend({
                url: e,
                type: r,
                dataType: n,
                data: t,
                success: i
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function (e) {
        return _.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, _.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (i) {
            return y(i) ? this.each(function (e) {
                _(this).wrapInner(i.call(this, e))
            }) : this.each(function () {
                var e = _(this), t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        }, wrap: function (t) {
            var i = y(t);
            return this.each(function (e) {
                _(this).wrapAll(i ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function (e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (e) {
        }
    };
    var qt = {0: 200, 1223: 204}, Ft = _.ajaxSettings.xhr();
    g.cors = !!Ft && "withCredentials" in Ft, g.ajax = Ft = !!Ft, _.ajaxTransport(function (r) {
        var a, s;
        if (g.cors || Ft && !r.crossDomain) return {
            send: function (e, t) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                a = function (e) {
                    return function () {
                        a && (a = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(qt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {binary: n.response} : {text: n.responseText}, n.getAllResponseHeaders()))
                    }
                }, n.onload = a(), s = n.onerror = n.ontimeout = a("error"), void 0 !== n.onabort ? n.onabort = s : n.onreadystatechange = function () {
                    4 === n.readyState && T.setTimeout(function () {
                        a && s()
                    })
                }, a = a("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (a) throw e
                }
            }, abort: function () {
                a && a()
            }
        }
    }), _.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function (i) {
        var n, r;
        if (i.crossDomain) return {
            send: function (e, t) {
                n = _("<script>").prop({charset: i.scriptCharset, src: i.url}).on("load error", r = function (e) {
                    n.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(n[0])
            }, abort: function () {
                r && r()
            }
        }
    });
    var Bt, Wt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Wt.pop() || _.expando + "_" + xt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function (e, t, i) {
        var n, r, a,
            s = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Yt, "$1" + n) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
            return a || _.error(n + " was not called"), a[0]
        }, e.dataTypes[0] = "json", r = T[n], T[n] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === r ? _(T).removeProp(n) : T[n] = r, e[n] && (e.jsonpCallback = t.jsonpCallback, Wt.push(n)), a && y(r) && r(a[0]), a = r = void 0
        }), "script"
    }), g.createHTMLDocument = ((Bt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), _.parseHTML = function (e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (g.createHTMLDocument ? ((n = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(n)) : t = C), a = !i && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, a), a && a.length && _(a).remove(), _.merge([], r.childNodes)));
        var n, r, a
    }, _.fn.load = function (e, t, i) {
        var n, r, a, s = this, o = e.indexOf(" ");
        return -1 < o && (n = ft(e.slice(o)), e = e.slice(0, o)), y(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            a = arguments, s.html(n ? _("<div>").append(_.parseHTML(e)).find(n) : e)
        }).always(i && function (e, t) {
            s.each(function () {
                i.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        _.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function (t) {
        return _.grep(_.timers, function (e) {
            return t === e.elem
        }).length
    }, _.offset = {
        setOffset: function (e, t, i) {
            var n, r, a, s, o, l, c = _.css(e, "position"), u = _(e), d = {};
            "static" === c && (e.style.position = "relative"), o = u.offset(), a = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto") ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, i, _.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, _.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                _.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, i, n = this[0], r = {top: 0, left: 0};
                if ("fixed" === _.css(n, "position")) t = n.getBoundingClientRect(); else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - _.css(n, "marginTop", !0),
                    left: t.left - r.left - _.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || be
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
        var a = "pageYOffset" === r;
        _.fn[t] = function (e) {
            return B(this, function (e, t, i) {
                var n;
                if (b(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[r] : e[t];
                n ? n.scrollTo(a ? n.pageXOffset : i, a ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }), _.each(["top", "left"], function (e, i) {
        _.cssHooks[i] = qe(g.pixelPosition, function (e, t) {
            if (t) return t = $e(e, i), je.test(t) ? _(e).position()[i] + "px" : t
        })
    }), _.each({Height: "height", Width: "width"}, function (s, o) {
        _.each({padding: "inner" + s, content: o, "": "outer" + s}, function (n, a) {
            _.fn[a] = function (e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    r = n || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function (e, t, i) {
                    var n;
                    return b(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? _.css(e, t, r) : _.style(e, t, i, r)
                }, o, i ? e : void 0, i)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, i) {
        _.fn[i] = function (e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), _.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), _.proxy = function (e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = o.call(arguments, 2), (r = function () {
            return e.apply(t || this, n.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, r
    }, _.holdReady = function (e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = A, _.isFunction = y, _.isWindow = b, _.camelCase = G, _.type = x, _.now = Date.now, _.isNumeric = function (e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Vt = T.jQuery, Gt = T.$;
    return _.noConflict = function (e) {
        return T.$ === _ && (T.$ = Gt), e && T.jQuery === _ && (T.jQuery = Vt), _
    }, e || (T.jQuery = T.$ = _), _
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (e, t, i, n, r) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
    }, easeInQuad: function (e, t, i, n, r) {
        return n * (t /= r) * t + i
    }, easeOutQuad: function (e, t, i, n, r) {
        return -n * (t /= r) * (t - 2) + i
    }, easeInOutQuad: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    }, easeInCubic: function (e, t, i, n, r) {
        return n * (t /= r) * t * t + i
    }, easeOutCubic: function (e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t + 1) + i
    }, easeInOutCubic: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    }, easeInQuart: function (e, t, i, n, r) {
        return n * (t /= r) * t * t * t + i
    }, easeOutQuart: function (e, t, i, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + i
    }, easeInOutQuart: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    }, easeInQuint: function (e, t, i, n, r) {
        return n * (t /= r) * t * t * t * t + i
    }, easeOutQuint: function (e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t * t * t + 1) + i
    }, easeInOutQuint: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    }, easeInSine: function (e, t, i, n, r) {
        return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
    }, easeOutSine: function (e, t, i, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + i
    }, easeInOutSine: function (e, t, i, n, r) {
        return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
    }, easeInExpo: function (e, t, i, n, r) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
    }, easeOutExpo: function (e, t, i, n, r) {
        return t == r ? i + n : n * (1 - Math.pow(2, -10 * t / r)) + i
    }, easeInOutExpo: function (e, t, i, n, r) {
        return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
    }, easeInCirc: function (e, t, i, n, r) {
        return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
    }, easeOutCirc: function (e, t, i, n, r) {
        return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
    }, easeInOutCirc: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    }, easeInElastic: function (e, t, i, n, r) {
        var a = 1.70158, s = 0, o = n;
        if (0 == t) return i;
        if (1 == (t /= r)) return i + n;
        if (s || (s = .3 * r), o < Math.abs(n)) {
            o = n;
            a = s / 4
        } else a = s / (2 * Math.PI) * Math.asin(n / o);
        return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + i
    }, easeOutElastic: function (e, t, i, n, r) {
        var a = 1.70158, s = 0, o = n;
        if (0 == t) return i;
        if (1 == (t /= r)) return i + n;
        if (s || (s = .3 * r), o < Math.abs(n)) {
            o = n;
            a = s / 4
        } else a = s / (2 * Math.PI) * Math.asin(n / o);
        return o * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - a) * Math.PI / s) + n + i
    }, easeInOutElastic: function (e, t, i, n, r) {
        var a = 1.70158, s = 0, o = n;
        if (0 == t) return i;
        if (2 == (t /= r / 2)) return i + n;
        if (s || (s = .3 * r * 1.5), o < Math.abs(n)) {
            o = n;
            a = s / 4
        } else a = s / (2 * Math.PI) * Math.asin(n / o);
        return t < 1 ? -.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + i : o * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) * .5 + n + i
    }, easeInBack: function (e, t, i, n, r, a) {
        return null == a && (a = 1.70158), n * (t /= r) * t * ((a + 1) * t - a) + i
    }, easeOutBack: function (e, t, i, n, r, a) {
        return null == a && (a = 1.70158), n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i
    }, easeInOutBack: function (e, t, i, n, r, a) {
        return null == a && (a = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (a *= 1.525)) * t - a) + i : n / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + i
    }, easeInBounce: function (e, t, i, n, r) {
        return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
    }, easeOutBounce: function (e, t, i, n, r) {
        return (t /= r) < 1 / 2.75 ? 7.5625 * n * t * t + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    }, easeInOutBounce: function (e, t, i, n, r) {
        return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
    }
}), function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function () {
    return function (i) {
        function n(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {exports: {}, id: e, loaded: !1};
            return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
        }

        var r = {};
        return n.m = i, n.c = r, n.p = "dist/index.html", n(0)
    }([function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }, a = n((n(i(1)), i(5))), s = n(i(6)), o = n(i(7)), l = n(i(8)), c = n(i(9)), u = n(i(10)), d = n(i(13)),
            h = [], p = !1, f = document.all && !window.atob, m = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            }, v = function () {
                return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (p = !0), p ? (h = (0, u.default)(h, m), (0, c.default)(h, m.once), h) : void 0
            }, g = function () {
                h = (0, d.default)(), v()
            };
        e.exports = {
            init: function (e) {
                return m = r(m, e), h = (0, d.default)(), !0 === (t = m.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || f ? void h.forEach(function (e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? v(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, function () {
                    v(!0)
                }) : document.addEventListener(m.startEvent, function () {
                    v(!0)
                }), window.addEventListener("resize", (0, s.default)(v, 50, !0)), window.addEventListener("orientationchange", (0, s.default)(v, 50, !0)), window.addEventListener("scroll", (0, a.default)(function () {
                    (0, c.default)(h, m.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function (e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, s.default)(g, 50, !0)
                }), (0, o.default)("[data-aos]", g), h);
                var t
            }, refresh: v, refreshHard: g
        }
    }, function (e, t) {
    }, , , , function (e, t, i) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        }, l = i(6), c = "Expected a function";
        e.exports = function (e, t, i) {
            var n, r, a = !0, s = !0;
            if ("function" != typeof e) throw new TypeError(c);
            return r = void 0 === (n = i) ? "undefined" : o(n), !!n && ("object" == r || "function" == r) && (a = "leading" in i ? !!i.leading : a, s = "trailing" in i ? !!i.trailing : s), l(e, t, {
                leading: a,
                maxWait: t,
                trailing: s
            })
        }
    }, function (e, t) {
        "use strict";

        function y(e) {
            var t = void 0 === e ? "undefined" : i(e);
            return !!e && ("object" == t || "function" == t)
        }

        function a(e) {
            return "symbol" == (void 0 === e ? "undefined" : i(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : i(t)) && f.call(e) == n;
            var t
        }

        function b(e) {
            if ("number" == typeof e) return e;
            if (a(e)) return s;
            if (y(e)) {
                var t = (i = e.valueOf, (n = y(i) ? f.call(i) : "") == o || n == l ? e.valueOf() : e);
                e = y(t) ? t + "" : t
            }
            var i, n;
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(c, "");
            var r = d.test(e);
            return r || h.test(e) ? p(e.slice(2), r ? 2 : 8) : u.test(e) ? s : +e
        }

        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, w = "Expected a function", s = NaN, o = "[object Function]", l = "[object GeneratorFunction]",
            n = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, d = /^0b[01]+$/i, h = /^0o[0-7]+$/i,
            p = parseInt, f = Object.prototype.toString, x = Math.max, E = Math.min, T = Date.now;
        e.exports = function (n, r, e) {
            function a(e) {
                var t = c, i = u;
                return c = u = void 0, m = e, h = n.apply(i, t)
            }

            function s(e) {
                var t = e - f;
                return !f || r <= t || t < 0 || g && d <= e - m
            }

            function o() {
                var e, t, i = T();
                return s(i) ? l(i) : void (p = setTimeout(o, (t = r - ((e = i) - f), g ? E(t, d - (e - m)) : t)))
            }

            function l(e) {
                return clearTimeout(p), p = void 0, i && c ? a(e) : (c = u = void 0, h)
            }

            function t() {
                var e, t = T(), i = s(t);
                if (c = arguments, u = this, f = t, i) {
                    if (void 0 === p) return m = e = f, p = setTimeout(o, r), v ? a(e) : h;
                    if (g) return clearTimeout(p), p = setTimeout(o, r), a(f)
                }
                return void 0 === p && (p = setTimeout(o, r)), h
            }

            var c, u, d, h, p, f = 0, m = 0, v = !1, g = !1, i = !0;
            if ("function" != typeof n) throw new TypeError(w);
            return r = b(r) || 0, y(e) && (v = !!e.leading, d = (g = "maxWait" in e) ? x(b(e.maxWait) || 0, r) : d, i = "trailing" in e ? !!e.trailing : i), t.cancel = function () {
                void 0 !== p && clearTimeout(p), f = m = 0, c = u = p = void 0
            }, t.flush = function () {
                return void 0 === p ? h : l(T())
            }, t
        }
    }, function (e, t) {
        "use strict";

        function i() {
            for (var e, t, i = 0, n = l.length; i < n; i++) {
                e = l[i];
                for (var r, a = 0, s = (t = o.querySelectorAll(e.selector)).length; a < s; a++) (r = t[a]).ready || (r.ready = !0, e.fn.call(r, r))
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = window.document, n = window.MutationObserver || window.WebKitMutationObserver, l = [], r = void 0;
        t.default = function (e, t) {
            l.push({selector: e, fn: t}), !r && n && (r = new n(i)).observe(o.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            }), i()
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }(), n = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            return i(e, [{
                key: "phone", value: function () {
                    var e, t = !1;
                    return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                }
            }, {
                key: "mobile", value: function () {
                    var e, t = !1;
                    return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                }
            }, {
                key: "tablet", value: function () {
                    return this.mobile() && !this.phone()
                }
            }]), e
        }();
        t.default = new n
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = function (e, s) {
            var o = window.pageYOffset, l = window.innerHeight;
            e.forEach(function (e, t) {
                var i, n, r, a;
                n = l + o, r = s, a = (i = e).node.getAttribute("data-aos-once"), n > i.position ? i.node.classList.add("aos-animate") : void 0 !== a && ("false" === a || !r && "true" !== a) && i.node.classList.remove("aos-animate")
            })
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n, r = i(11), a = (n = r) && n.__esModule ? n : {default: n};
        t.default = function (e, i) {
            return e.forEach(function (e, t) {
                e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, i.offset)
            }), e
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n, r = i(12), s = (n = r) && n.__esModule ? n : {default: n};
        t.default = function (e, t) {
            var i = 0, n = 0, r = window.innerHeight, a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (a.offset && !isNaN(a.offset) && (n = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), i = (0, s.default)(e).top, a.anchorPlacement) {
                case"top-bottom":
                    break;
                case"center-bottom":
                    i += e.offsetHeight / 2;
                    break;
                case"bottom-bottom":
                    i += e.offsetHeight;
                    break;
                case"top-center":
                    i += r / 2;
                    break;
                case"bottom-center":
                    i += r / 2 + e.offsetHeight;
                    break;
                case"center-center":
                    i += r / 2 + e.offsetHeight / 2;
                    break;
                case"top-top":
                    i += r;
                    break;
                case"bottom-top":
                    i += e.offsetHeight + r;
                    break;
                case"center-top":
                    i += e.offsetHeight / 2 + r
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (n = t), i + n
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = function (e) {
            for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {top: i, left: t}
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = function (e) {
            e = e || document.querySelectorAll("[data-aos]");
            var i = [];
            return [].forEach.call(e, function (e, t) {
                i.push({node: e})
            }), i
        }
    }])
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (u) {
    u.extend(u.fn, {
        validate: function (e) {
            if (this.length) {
                var n = u.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new u.validator(e, this[0]), u.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
                    n.submitButton = e.currentTarget, u(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function (i) {
                    function e() {
                        var e, t;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (e = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (t = n.settings.submitHandler.call(n, n.currentForm, i), e && e.remove(), void 0 !== t && t)
                    }

                    return n.settings.debug && i.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, e()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : e() : (n.focusInvalid(), !1)
                })), n)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        }, valid: function () {
            var e, t, i;
            return u(this[0]).is("form") ? e = this.validate().form() : (i = [], e = !0, t = u(this[0].form).validate(), this.each(function () {
                (e = t.element(this) && e) || (i = i.concat(t.errorList))
            }), t.errorList = i), e
        }, rules: function (e, t) {
            var i, n, r, a, s, o, l = this[0];
            if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                if (e) switch (n = (i = u.data(l.form, "validator").settings).rules, r = u.validator.staticRules(l), e) {
                    case"add":
                        u.extend(r, u.validator.normalizeRule(t)), delete r.messages, n[l.name] = r, t.messages && (i.messages[l.name] = u.extend(i.messages[l.name], t.messages));
                        break;
                    case"remove":
                        return t ? (o = {}, u.each(t.split(/\s/), function (e, t) {
                            o[t] = r[t], delete r[t]
                        }), o) : (delete n[l.name], r)
                }
                return (a = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (s = a.required, delete a.required, a = u.extend({required: s}, a)), a.remote && (s = a.remote, delete a.remote, a = u.extend(a, {remote: s})), a
            }
        }
    }), u.extend(u.expr.pseudos || u.expr[":"], {
        blank: function (e) {
            return !u.trim("" + u(e).val())
        }, filled: function (e) {
            var t = u(e).val();
            return null !== t && !!u.trim("" + t)
        }, unchecked: function (e) {
            return !u(e).prop("checked")
        }
    }), u.validator = function (e, t) {
        this.settings = u.extend(!0, {}, u.validator.defaults, e), this.currentForm = t, this.init()
    }, u.validator.format = function (i, e) {
        return 1 === arguments.length ? function () {
            var e = u.makeArray(arguments);
            return e.unshift(i), u.validator.format.apply(this, e)
        } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = u.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), u.each(e, function (e, t) {
            i = i.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                return t
            })
        })), i)
    }, u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function (e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function (e, t) {
                9 === t.which && "" === this.elementValue(e) || -1 !== u.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function (e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function (e, t, i) {
                "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(i) : u(e).addClass(t).removeClass(i)
            },
            unhighlight: function (e, t, i) {
                "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(i) : u(e).removeClass(t).addClass(i)
            }
        },
        setDefaults: function (e) {
            u.extend(u.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};

                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name"));
                    var t = u.data(this.form, "validator"), i = "on" + e.type.replace(/^validate/, ""), n = t.settings;
                    n[i] && !u(this).is(n.ignore) && n[i].call(t, this, e)
                }

                u.each(this.settings.groups, function (i, e) {
                    "string" == typeof e && (e = e.split(/\s/)), u.each(e, function (e, t) {
                        n[t] = i
                    })
                }), i = this.settings.rules, u.each(i, function (e, t) {
                    i[e] = u.validator.normalizeRule(t)
                }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            }, element: function (e) {
                var t, i, n = this.clean(e), r = this.validationTargetFor(n), a = this, s = !0;
                return void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = u(r), (i = this.groups[r.name]) && u.each(this.groups, function (e, t) {
                    t === i && e !== r.name && (n = a.validationTargetFor(a.clean(a.findByName(e)))) && n.name in a.invalid && (a.currentElements.push(n), s = a.check(n) && s)
                }), t = !1 !== this.check(r), s = s && t, this.invalid[r.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(e).attr("aria-invalid", !t)), s
            }, showErrors: function (t) {
                if (t) {
                    var i = this;
                    u.extend(this.errorMap, t), this.errorList = u.map(this.errorMap, function (e, t) {
                        return {message: e, element: i.findByName(t)[0]}
                    }), this.successList = u.grep(this.successList, function (e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            }, resetElements: function (e) {
                var t;
                if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass); else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (e) {
                var t, i = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
                return i
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === u.grep(this.errorList, function (e) {
                    return e.element.name === t.name
                }).length && t
            }, elements: function () {
                var t = this, i = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var e = this.name || u(this).attr("name");
                    return !e && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = e), !(e in i || !t.objectLength(u(this).rules())) && (i[e] = !0)
                })
            }, clean: function (e) {
                return u(e)[0]
            }, errors: function () {
                var e = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + e, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = u([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (e) {
                this.reset(), this.toHide = this.errorsFor(e)
            }, elementValue: function (e) {
                var t, i, n = u(e), r = e.type;
                return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : n.val() : (t = e.hasAttribute("contenteditable") ? n.text() : n.val(), "file" === r ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (i = t.lastIndexOf("https://5studios.net/")) ? t.substr(i + 1) : 0 <= (i = t.lastIndexOf("\\")) ? t.substr(i + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
            }, check: function (t) {
                t = this.validationTargetFor(this.clean(t));
                var e, i, n, r, a = u(t).rules(), s = u.map(a, function (e, t) {
                    return t
                }).length, o = !1, l = this.elementValue(t);
                if ("function" == typeof a.normalizer ? r = a.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r) {
                    if ("string" != typeof (l = r.call(t, l))) throw new TypeError("The normalizer should return a string value.");
                    delete a.normalizer
                }
                for (i in a) {
                    n = {method: i, parameters: a[i]};
                    try {
                        if ("dependency-mismatch" === (e = u.validator.methods[i].call(this, l, t, n.parameters)) && 1 === s) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === e) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!e) return this.formatAndAdd(t, n), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method."), e
                    }
                }
                if (!o) return this.objectLength(a) && this.successList.push(t), !0
            }, customDataMessage: function (e, t) {
                return u(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || u(e).data("msg")
            }, customMessage: function (e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            }, findDefined: function () {
                for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
            }, defaultMessage: function (e, t) {
                "string" == typeof t && (t = {method: t});
                var i = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, u.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    n = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, t.parameters, e) : n.test(i) && (i = u.validator.format(i.replace(n, "{$1}"), t.parameters)), i
            }, formatAndAdd: function (e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = i, this.submitted[e.name] = i
            }, addWrapper: function (e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            }, defaultShowErrors: function () {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return u(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (e, t) {
                var i, n, r, a, s = this.errorsFor(e), o = this.idOrName(e), l = u(e).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(t)) : (i = s = u("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(e)) : i.insertAfter(e), s.is("label") ? s.attr("for", o) : 0 === s.parents("label[for='" + this.escapeCssMeta(o) + "']").length && (r = s.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, u(e).attr("aria-describedby", l), (n = this.groups[e.name]) && (a = this, u.each(a.groups, function (e, t) {
                    t === n && u("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", s.attr("id"))
                })))), !t && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            }, errorsFor: function (e) {
                var t = this.escapeCssMeta(this.idOrName(e)), i = u(e).attr("aria-describedby"),
                    n = "label[for='" + t + "'], label[for='" + t + "'] *";
                return i && (n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(n)
            }, escapeCssMeta: function (e) {
                return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            }, validationTargetFor: function (e) {
                return this.checkable(e) && (e = this.findByName(e.name)), u(e).not(this.settings.ignore)[0]
            }, checkable: function (e) {
                return /radio|checkbox/i.test(e.type)
            }, findByName: function (e) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            }, getLength: function (e, t) {
                switch (t.nodeName.toLowerCase()) {
                    case"select":
                        return u("option:selected", t).length;
                    case"input":
                        if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            }, depend: function (e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            }, dependTypes: {
                boolean: function (e) {
                    return e
                }, string: function (e, t) {
                    return !!u(e, t.form).length
                }, function: function (e, t) {
                    return e(t)
                }
            }, optional: function (e) {
                var t = this.elementValue(e);
                return !u.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            }, startRequest: function (e) {
                this.pending[e.name] || (this.pendingRequest++, u(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            }, stopRequest: function (e, t) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], u(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (e, t) {
                return t = "string" == typeof t && t || "remote", u.data(e, "previousValue") || u.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {method: t})
                })
            }, destroy: function () {
                this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : u.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var t = {}, i = u(e).attr("class");
            return i && u.each(i.split(" "), function () {
                this in u.validator.classRuleSettings && u.extend(t, u.validator.classRuleSettings[this])
            }), t
        },
        normalizeAttributeRule: function (e, t, i, n) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function (e) {
            var t, i, n = {}, r = u(e), a = e.getAttribute("type");
            for (t in u.validator.methods) "required" === t ? ("" === (i = e.getAttribute(t)) && (i = !0), i = !!i) : i = r.attr(t), this.normalizeAttributeRule(n, a, t, i);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        dataRules: function (e) {
            var t, i, n = {}, r = u(e), a = e.getAttribute("type");
            for (t in u.validator.methods) i = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()), this.normalizeAttributeRule(n, a, t, i);
            return n
        },
        staticRules: function (e) {
            var t = {}, i = u.data(e.form, "validator");
            return i.settings.rules && (t = u.validator.normalizeRule(i.settings.rules[e.name]) || {}), t
        },
        normalizeRules: function (n, r) {
            return u.each(n, function (e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var i = !0;
                        switch (typeof t.depends) {
                            case"string":
                                i = !!u(t.depends, r.form).length;
                                break;
                            case"function":
                                i = t.depends.call(r, r)
                        }
                        i ? n[e] = void 0 === t.param || t.param : (u.data(r.form, "validator").resetElements(u(r)), delete n[e])
                    }
                } else delete n[e]
            }), u.each(n, function (e, t) {
                n[e] = u.isFunction(t) && "normalizer" !== e ? t(r) : t
            }), u.each(["minlength", "maxlength"], function () {
                n[this] && (n[this] = Number(n[this]))
            }), u.each(["rangelength", "range"], function () {
                var e;
                n[this] && (u.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (e = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/), n[this] = [Number(e[0]), Number(e[1])]))
            }), u.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var t = {};
                u.each(e.split(/\s/), function () {
                    t[this] = !0
                }), e = t
            }
            return e
        },
        addMethod: function (e, t, i) {
            u.validator.methods[e] = t, u.validator.messages[e] = void 0 !== i ? i : u.validator.messages[e], t.length < 3 && u.validator.addClassRules(e, u.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, t, i) {
                if (!this.depend(i, t)) return "dependency-mismatch";
                if ("select" === t.nodeName.toLowerCase()) {
                    var n = u(t).val();
                    return n && 0 < n.length
                }
                return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length
            }, email: function (e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            }, url: function (e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            }, date: function (e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }, dateISO: function (e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            }, number: function (e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            }, digits: function (e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            }, minlength: function (e, t, i) {
                var n = u.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i <= n
            }, maxlength: function (e, t, i) {
                var n = u.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n <= i
            }, rangelength: function (e, t, i) {
                var n = u.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n >= i[0] && n <= i[1]
            }, min: function (e, t, i) {
                return this.optional(t) || i <= e
            }, max: function (e, t, i) {
                return this.optional(t) || e <= i
            }, range: function (e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            }, step: function (e, t, i) {
                var n, r = u(t).attr("type"), a = "Step attribute on input type " + r + " is not supported.",
                    s = new RegExp("\\b" + r + "\\b"), o = function (e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    }, l = function (e) {
                        return Math.round(e * Math.pow(10, n))
                    }, c = !0;
                if (r && !s.test(["text", "number", "range"].join())) throw new Error(a);
                return n = o(i), (o(e) > n || l(e) % l(i) != 0) && (c = !1), this.optional(t) || c
            }, equalTo: function (e, t, i) {
                var n = u(i);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    u(t).valid()
                }), e === n.val()
            }, remote: function (a, s, e, o) {
                if (this.optional(s)) return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var l, t, i, c = this.previousValue(s, o);
                return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), c.originalMessage = c.originalMessage || this.settings.messages[s.name][o], this.settings.messages[s.name][o] = c.message, e = "string" == typeof e && {url: e} || e, i = u.param(u.extend({data: a}, e.data)), c.old === i ? c.valid : (c.old = i, (l = this).startRequest(s), (t = {})[s.name] = a, u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + s.name,
                    dataType: "json",
                    data: t,
                    context: l.currentForm,
                    success: function (e) {
                        var t, i, n, r = !0 === e || "true" === e;
                        l.settings.messages[s.name][o] = c.originalMessage, r ? (n = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(s), l.formSubmitted = n, l.successList.push(s), l.invalid[s.name] = !1, l.showErrors()) : (t = {}, i = e || l.defaultMessage(s, {
                            method: o,
                            parameters: a
                        }), t[s.name] = c.message = i, l.invalid[s.name] = !0, l.showErrors(t)), c.valid = r, l.stopRequest(s, r)
                    }
                }, e)), "pending")
            }
        }
    });
    var n, r = {};
    return u.ajaxPrefilter ? u.ajaxPrefilter(function (e, t, i) {
        var n = e.port;
        "abort" === e.mode && (r[n] && r[n].abort(), r[n] = i)
    }) : (n = u.ajax, u.ajax = function (e) {
        var t = ("mode" in e ? e : u.ajaxSettings).mode, i = ("port" in e ? e : u.ajaxSettings).port;
        return "abort" === t ? (r[i] && r[i].abort(), r[i] = n.apply(this, arguments), r[i]) : n.apply(this, arguments)
    }), u
});
var pJS = function (e, t) {
    var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {el: i, w: i.offsetWidth, h: i.offsetHeight},
        particles: {
            number: {value: 400, density: {enable: !0, value_area: 800}},
            color: {value: "#fff"},
            shape: {
                type: "circle",
                stroke: {width: 0, color: "#ff0000"},
                polygon: {nb_sides: 5},
                image: {src: "", width: 100, height: 100}
            },
            opacity: {value: 1, random: !1, anim: {enable: !1, speed: 2, opacity_min: 0, sync: !1}},
            size: {value: 20, random: !1, anim: {enable: !1, speed: 20, size_min: 0, sync: !1}},
            line_linked: {enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1},
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {enable: !1, rotateX: 3e3, rotateY: 3e3}
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {onhover: {enable: !0, mode: "grab"}, onclick: {enable: !0, mode: "push"}, resize: !0},
            modes: {
                grab: {distance: 100, line_linked: {opacity: 1}},
                bubble: {distance: 200, size: 80, duration: .4},
                repulse: {distance: 200, duration: .4},
                push: {particles_nb: 4},
                remove: {particles_nb: 2}
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {interact: {}, modes: {}, vendors: {}},
        tmp: {}
    };
    var p = this.pJS;
    t && Object.deepExtend(p, t), p.tmp.obj = {
        size_value: p.particles.size.value,
        size_anim_speed: p.particles.size.anim.speed,
        move_speed: p.particles.move.speed,
        line_linked_distance: p.particles.line_linked.distance,
        line_linked_width: p.particles.line_linked.width,
        mode_grab_distance: p.interactivity.modes.grab.distance,
        mode_bubble_distance: p.interactivity.modes.bubble.distance,
        mode_bubble_size: p.interactivity.modes.bubble.size,
        mode_repulse_distance: p.interactivity.modes.repulse.distance
    }, p.fn.retinaInit = function () {
        p.retina_detect && 1 < window.devicePixelRatio ? (p.canvas.pxratio = window.devicePixelRatio, p.tmp.retina = !0) : (p.canvas.pxratio = 1, p.tmp.retina = !1), p.canvas.w = p.canvas.el.offsetWidth * p.canvas.pxratio, p.canvas.h = p.canvas.el.offsetHeight * p.canvas.pxratio, p.particles.size.value = p.tmp.obj.size_value * p.canvas.pxratio, p.particles.size.anim.speed = p.tmp.obj.size_anim_speed * p.canvas.pxratio, p.particles.move.speed = p.tmp.obj.move_speed * p.canvas.pxratio, p.particles.line_linked.distance = p.tmp.obj.line_linked_distance * p.canvas.pxratio, p.interactivity.modes.grab.distance = p.tmp.obj.mode_grab_distance * p.canvas.pxratio, p.interactivity.modes.bubble.distance = p.tmp.obj.mode_bubble_distance * p.canvas.pxratio, p.particles.line_linked.width = p.tmp.obj.line_linked_width * p.canvas.pxratio, p.interactivity.modes.bubble.size = p.tmp.obj.mode_bubble_size * p.canvas.pxratio, p.interactivity.modes.repulse.distance = p.tmp.obj.mode_repulse_distance * p.canvas.pxratio
    }, p.fn.canvasInit = function () {
        p.canvas.ctx = p.canvas.el.getContext("2d")
    }, p.fn.canvasSize = function () {
        p.canvas.el.width = p.canvas.w, p.canvas.el.height = p.canvas.h, p && p.interactivity.events.resize && window.addEventListener("resize", function () {
            p.canvas.w = p.canvas.el.offsetWidth, p.canvas.h = p.canvas.el.offsetHeight, p.tmp.retina && (p.canvas.w *= p.canvas.pxratio, p.canvas.h *= p.canvas.pxratio), p.canvas.el.width = p.canvas.w, p.canvas.el.height = p.canvas.h, p.particles.move.enable || (p.fn.particlesEmpty(), p.fn.particlesCreate(), p.fn.particlesDraw(), p.fn.vendors.densityAutoParticles()), p.fn.vendors.densityAutoParticles()
        })
    }, p.fn.canvasPaint = function () {
        p.canvas.ctx.fillRect(0, 0, p.canvas.w, p.canvas.h)
    }, p.fn.canvasClear = function () {
        p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h)
    }, p.fn.particle = function (e, t, i) {
        if (this.radius = (p.particles.size.random ? Math.random() : 1) * p.particles.size.value, p.particles.size.anim.enable && (this.size_status = !1, this.vs = p.particles.size.anim.speed / 100, p.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * p.canvas.w, this.y = i ? i.y : Math.random() * p.canvas.h, this.x > p.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > p.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), p.particles.move.bounce && p.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof e.value) if (e.value instanceof Array) {
            var n = e.value[Math.floor(Math.random() * p.particles.color.value.length)];
            this.color.rgb = hexToRgb(n)
        } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
            r: e.value.r,
            g: e.value.g,
            b: e.value.b
        }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
            h: e.value.h,
            s: e.value.s,
            l: e.value.l
        }); else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (p.particles.opacity.random ? Math.random() : 1) * p.particles.opacity.value, p.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = p.particles.opacity.anim.speed / 100, p.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var r = {};
        switch (p.particles.move.direction) {
            case"top":
                r = {x: 0, y: -1};
                break;
            case"top-right":
                r = {x: .5, y: -.5};
                break;
            case"right":
                r = {x: 1, y: -0};
                break;
            case"bottom-right":
                r = {x: .5, y: .5};
                break;
            case"bottom":
                r = {x: 0, y: 1};
                break;
            case"bottom-left":
                r = {x: -.5, y: 1};
                break;
            case"left":
                r = {x: -1, y: 0};
                break;
            case"top-left":
                r = {x: -.5, y: -.5};
                break;
            default:
                r = {x: 0, y: 0}
        }
        p.particles.move.straight ? (this.vx = r.x, this.vy = r.y, p.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var a = p.particles.shape.type;
        if ("object" == typeof a) {
            if (a instanceof Array) {
                var s = a[Math.floor(Math.random() * a.length)];
                this.shape = s
            }
        } else this.shape = a;
        if ("image" == this.shape) {
            var o = p.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == p.tmp.img_type && null != p.tmp.source_svg && (p.fn.vendors.createSvgImg(this), p.tmp.pushing && (this.img.loaded = !1))
        }
    }, p.fn.particle.prototype.draw = function () {
        var e = this;
        if (null != e.radius_bubble) var t = e.radius_bubble; else t = e.radius;
        if (null != e.opacity_bubble) var i = e.opacity_bubble; else i = e.opacity;
        if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")"; else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
        switch (p.canvas.ctx.fillStyle = n, p.canvas.ctx.beginPath(), e.shape) {
            case"circle":
                p.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case"edge":
                p.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case"triangle":
                p.fn.vendors.drawShape(p.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case"polygon":
                p.fn.vendors.drawShape(p.canvas.ctx, e.x - t / (p.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (p.particles.shape.polygon.nb_sides / 3), p.particles.shape.polygon.nb_sides, 1);
                break;
            case"star":
                p.fn.vendors.drawShape(p.canvas.ctx, e.x - 2 * t / (p.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (p.particles.shape.polygon.nb_sides / 3), p.particles.shape.polygon.nb_sides, 2);
                break;
            case"image":
                ;
                if ("svg" == p.tmp.img_type) var r = e.img.obj; else r = p.tmp.img_obj;
                r && p.canvas.ctx.drawImage(r, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        p.canvas.ctx.closePath(), 0 < p.particles.shape.stroke.width && (p.canvas.ctx.strokeStyle = p.particles.shape.stroke.color, p.canvas.ctx.lineWidth = p.particles.shape.stroke.width, p.canvas.ctx.stroke()), p.canvas.ctx.fill()
    }, p.fn.particlesCreate = function () {
        for (var e = 0; e < p.particles.number.value; e++) p.particles.array.push(new p.fn.particle(p.particles.color, p.particles.opacity.value))
    }, p.fn.particlesUpdate = function () {
        for (var e = 0; e < p.particles.array.length; e++) {
            var t = p.particles.array[e];
            if (p.particles.move.enable) {
                var i = p.particles.move.speed / 2;
                t.x += t.vx * i, t.y += t.vy * i
            }
            if (p.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= p.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= p.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), p.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= p.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= p.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == p.particles.move.out_mode) var n = {
                x_left: t.radius,
                x_right: p.canvas.w,
                y_top: t.radius,
                y_bottom: p.canvas.h
            }; else n = {
                x_left: -t.radius,
                x_right: p.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: p.canvas.h + t.radius
            };
            switch (t.x - t.radius > p.canvas.w ? (t.x = n.x_left, t.y = Math.random() * p.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * p.canvas.h), t.y - t.radius > p.canvas.h ? (t.y = n.y_top, t.x = Math.random() * p.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * p.canvas.w), p.particles.move.out_mode) {
                case"bounce":
                    t.x + t.radius > p.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > p.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", p.interactivity.events.onhover.mode) && p.fn.modes.grabParticle(t), (isInArray("bubble", p.interactivity.events.onhover.mode) || isInArray("bubble", p.interactivity.events.onclick.mode)) && p.fn.modes.bubbleParticle(t), (isInArray("repulse", p.interactivity.events.onhover.mode) || isInArray("repulse", p.interactivity.events.onclick.mode)) && p.fn.modes.repulseParticle(t), p.particles.line_linked.enable || p.particles.move.attract.enable) for (var r = e + 1; r < p.particles.array.length; r++) {
                var a = p.particles.array[r];
                p.particles.line_linked.enable && p.fn.interact.linkParticles(t, a), p.particles.move.attract.enable && p.fn.interact.attractParticles(t, a), p.particles.move.bounce && p.fn.interact.bounceParticles(t, a)
            }
        }
    }, p.fn.particlesDraw = function () {
        p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h), p.fn.particlesUpdate();
        for (var e = 0; e < p.particles.array.length; e++) {
            p.particles.array[e].draw()
        }
    }, p.fn.particlesEmpty = function () {
        p.particles.array = []
    }, p.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(p.fn.checkAnimFrame), cancelRequestAnimFrame(p.fn.drawAnimFrame), p.tmp.source_svg = void 0, p.tmp.img_obj = void 0, p.tmp.count_svg = 0, p.fn.particlesEmpty(), p.fn.canvasClear(), p.fn.vendors.start()
    }, p.fn.interact.linkParticles = function (e, t) {
        var i = e.x - t.x, n = e.y - t.y, r = Math.sqrt(i * i + n * n);
        if (r <= p.particles.line_linked.distance) {
            var a = p.particles.line_linked.opacity - r / (1 / p.particles.line_linked.opacity) / p.particles.line_linked.distance;
            if (0 < a) {
                var s = p.particles.line_linked.color_rgb_line;
                p.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + a + ")", p.canvas.ctx.lineWidth = p.particles.line_linked.width, p.canvas.ctx.beginPath(), p.canvas.ctx.moveTo(e.x, e.y), p.canvas.ctx.lineTo(t.x, t.y), p.canvas.ctx.stroke(), p.canvas.ctx.closePath()
            }
        }
    }, p.fn.interact.attractParticles = function (e, t) {
        var i = e.x - t.x, n = e.y - t.y;
        if (Math.sqrt(i * i + n * n) <= p.particles.line_linked.distance) {
            var r = i / (1e3 * p.particles.move.attract.rotateX), a = n / (1e3 * p.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= a, t.vx += r, t.vy += a
        }
    }, p.fn.interact.bounceParticles = function (e, t) {
        var i = e.x - t.x, n = e.y - t.y;
        Math.sqrt(i * i + n * n) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, p.fn.modes.pushParticles = function (e, t) {
        p.tmp.pushing = !0;
        for (var i = 0; i < e; i++) p.particles.array.push(new p.fn.particle(p.particles.color, p.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * p.canvas.w,
            y: t ? t.pos_y : Math.random() * p.canvas.h
        })), i == e - 1 && (p.particles.move.enable || p.fn.particlesDraw(), p.tmp.pushing = !1)
    }, p.fn.modes.removeParticles = function (e) {
        p.particles.array.splice(0, e), p.particles.move.enable || p.fn.particlesDraw()
    }, p.fn.modes.bubbleParticle = function (o) {
        if (p.interactivity.events.onhover.enable && isInArray("bubble", p.interactivity.events.onhover.mode)) {
            var e = o.x - p.interactivity.mouse.pos_x, t = o.y - p.interactivity.mouse.pos_y,
                i = 1 - (l = Math.sqrt(e * e + t * t)) / p.interactivity.modes.bubble.distance;

            function n() {
                o.opacity_bubble = o.opacity, o.radius_bubble = o.radius
            }

            if (l <= p.interactivity.modes.bubble.distance) {
                if (0 <= i && "mousemove" == p.interactivity.status) {
                    if (p.interactivity.modes.bubble.size != p.particles.size.value) if (p.interactivity.modes.bubble.size > p.particles.size.value) {
                        0 <= (a = o.radius + p.interactivity.modes.bubble.size * i) && (o.radius_bubble = a)
                    } else {
                        var r = o.radius - p.interactivity.modes.bubble.size, a = o.radius - r * i;
                        o.radius_bubble = 0 < a ? a : 0
                    }
                    var s;
                    if (p.interactivity.modes.bubble.opacity != p.particles.opacity.value) if (p.interactivity.modes.bubble.opacity > p.particles.opacity.value) (s = p.interactivity.modes.bubble.opacity * i) > o.opacity && s <= p.interactivity.modes.bubble.opacity && (o.opacity_bubble = s); else (s = o.opacity - (p.particles.opacity.value - p.interactivity.modes.bubble.opacity) * i) < o.opacity && s >= p.interactivity.modes.bubble.opacity && (o.opacity_bubble = s)
                }
            } else n();
            "mouseleave" == p.interactivity.status && n()
        } else if (p.interactivity.events.onclick.enable && isInArray("bubble", p.interactivity.events.onclick.mode)) {
            if (p.tmp.bubble_clicking) {
                e = o.x - p.interactivity.mouse.click_pos_x, t = o.y - p.interactivity.mouse.click_pos_y;
                var l = Math.sqrt(e * e + t * t), c = ((new Date).getTime() - p.interactivity.mouse.click_time) / 1e3;
                c > p.interactivity.modes.bubble.duration && (p.tmp.bubble_duration_end = !0), c > 2 * p.interactivity.modes.bubble.duration && (p.tmp.bubble_clicking = !1, p.tmp.bubble_duration_end = !1)
            }

            function u(e, t, i, n, r) {
                if (e != t) if (p.tmp.bubble_duration_end) null != i && (s = e + (e - (n - c * (n - e) / p.interactivity.modes.bubble.duration)), "size" == r && (o.radius_bubble = s), "opacity" == r && (o.opacity_bubble = s)); else if (l <= p.interactivity.modes.bubble.distance) {
                    if (null != i) var a = i; else a = n;
                    if (a != e) {
                        var s = n - c * (n - e) / p.interactivity.modes.bubble.duration;
                        "size" == r && (o.radius_bubble = s), "opacity" == r && (o.opacity_bubble = s)
                    }
                } else "size" == r && (o.radius_bubble = void 0), "opacity" == r && (o.opacity_bubble = void 0)
            }

            p.tmp.bubble_clicking && (u(p.interactivity.modes.bubble.size, p.particles.size.value, o.radius_bubble, o.radius, "size"), u(p.interactivity.modes.bubble.opacity, p.particles.opacity.value, o.opacity_bubble, o.opacity, "opacity"))
        }
    }, p.fn.modes.repulseParticle = function (n) {
        if (p.interactivity.events.onhover.enable && isInArray("repulse", p.interactivity.events.onhover.mode) && "mousemove" == p.interactivity.status) {
            var e = n.x - p.interactivity.mouse.pos_x, t = n.y - p.interactivity.mouse.pos_y,
                i = Math.sqrt(e * e + t * t), r = e / i, a = t / i,
                s = clamp(1 / (l = p.interactivity.modes.repulse.distance) * (-1 * Math.pow(i / l, 2) + 1) * l * 100, 0, 50),
                o = {x: n.x + r * s, y: n.y + a * s};
            "bounce" == p.particles.move.out_mode ? (0 < o.x - n.radius && o.x + n.radius < p.canvas.w && (n.x = o.x), 0 < o.y - n.radius && o.y + n.radius < p.canvas.h && (n.y = o.y)) : (n.x = o.x, n.y = o.y)
        } else if (p.interactivity.events.onclick.enable && isInArray("repulse", p.interactivity.events.onclick.mode)) if (p.tmp.repulse_finish || (p.tmp.repulse_count++, p.tmp.repulse_count == p.particles.array.length && (p.tmp.repulse_finish = !0)), p.tmp.repulse_clicking) {
            var l = Math.pow(p.interactivity.modes.repulse.distance / 6, 3),
                c = p.interactivity.mouse.click_pos_x - n.x, u = p.interactivity.mouse.click_pos_y - n.y,
                d = c * c + u * u, h = -l / d * 1;
            d <= l && function () {
                var e = Math.atan2(u, c);
                if (n.vx = h * Math.cos(e), n.vy = h * Math.sin(e), "bounce" == p.particles.move.out_mode) {
                    var t = n.x + n.vx, i = n.y + n.vy;
                    t + n.radius > p.canvas.w ? n.vx = -n.vx : t - n.radius < 0 && (n.vx = -n.vx), i + n.radius > p.canvas.h ? n.vy = -n.vy : i - n.radius < 0 && (n.vy = -n.vy)
                }
            }()
        } else 0 == p.tmp.repulse_clicking && (n.vx = n.vx_i, n.vy = n.vy_i)
    }, p.fn.modes.grabParticle = function (e) {
        if (p.interactivity.events.onhover.enable && "mousemove" == p.interactivity.status) {
            var t = e.x - p.interactivity.mouse.pos_x, i = e.y - p.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + i * i);
            if (n <= p.interactivity.modes.grab.distance) {
                var r = p.interactivity.modes.grab.line_linked.opacity - n / (1 / p.interactivity.modes.grab.line_linked.opacity) / p.interactivity.modes.grab.distance;
                if (0 < r) {
                    var a = p.particles.line_linked.color_rgb_line;
                    p.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + r + ")", p.canvas.ctx.lineWidth = p.particles.line_linked.width, p.canvas.ctx.beginPath(), p.canvas.ctx.moveTo(e.x, e.y), p.canvas.ctx.lineTo(p.interactivity.mouse.pos_x, p.interactivity.mouse.pos_y), p.canvas.ctx.stroke(), p.canvas.ctx.closePath()
                }
            }
        }
    }, p.fn.vendors.eventsListeners = function () {
        "window" == p.interactivity.detect_on ? p.interactivity.el = window : p.interactivity.el = p.canvas.el, (p.interactivity.events.onhover.enable || p.interactivity.events.onclick.enable) && (p.interactivity.el.addEventListener("mousemove", function (e) {
            if (p.interactivity.el == window) var t = e.clientX,
                i = e.clientY; else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
            p.interactivity.mouse.pos_x = t, p.interactivity.mouse.pos_y = i, p.tmp.retina && (p.interactivity.mouse.pos_x *= p.canvas.pxratio, p.interactivity.mouse.pos_y *= p.canvas.pxratio), p.interactivity.status = "mousemove"
        }), p.interactivity.el.addEventListener("mouseleave", function (e) {
            p.interactivity.mouse.pos_x = null, p.interactivity.mouse.pos_y = null, p.interactivity.status = "mouseleave"
        })), p.interactivity.events.onclick.enable && p.interactivity.el.addEventListener("click", function () {
            if (p.interactivity.mouse.click_pos_x = p.interactivity.mouse.pos_x, p.interactivity.mouse.click_pos_y = p.interactivity.mouse.pos_y, p.interactivity.mouse.click_time = (new Date).getTime(), p.interactivity.events.onclick.enable) switch (p.interactivity.events.onclick.mode) {
                case"push":
                    p.particles.move.enable ? p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb, p.interactivity.mouse) : 1 == p.interactivity.modes.push.particles_nb ? p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb, p.interactivity.mouse) : 1 < p.interactivity.modes.push.particles_nb && p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb);
                    break;
                case"remove":
                    p.fn.modes.removeParticles(p.interactivity.modes.remove.particles_nb);
                    break;
                case"bubble":
                    p.tmp.bubble_clicking = !0;
                    break;
                case"repulse":
                    p.tmp.repulse_clicking = !0, p.tmp.repulse_count = 0, p.tmp.repulse_finish = !1, setTimeout(function () {
                        p.tmp.repulse_clicking = !1
                    }, 1e3 * p.interactivity.modes.repulse.duration)
            }
        })
    }, p.fn.vendors.densityAutoParticles = function () {
        if (p.particles.number.density.enable) {
            var e = p.canvas.el.width * p.canvas.el.height / 1e3;
            p.tmp.retina && (e /= 2 * p.canvas.pxratio);
            var t = e * p.particles.number.value / p.particles.number.density.value_area,
                i = p.particles.array.length - t;
            i < 0 ? p.fn.modes.pushParticles(Math.abs(i)) : p.fn.modes.removeParticles(i)
        }
    }, p.fn.vendors.checkOverlap = function (e, t) {
        for (var i = 0; i < p.particles.array.length; i++) {
            var n = p.particles.array[i], r = e.x - n.x, a = e.y - n.y;
            Math.sqrt(r * r + a * a) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * p.canvas.w, e.y = t ? t.y : Math.random() * p.canvas.h, p.fn.vendors.checkOverlap(e))
        }
    }, p.fn.vendors.createSvgImg = function (a) {
        var e = p.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (e, t, i, n) {
                if (a.color.rgb) var r = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + a.opacity + ")"; else r = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + a.opacity + ")";
                return r
            }), t = new Blob([e], {type: "image/svg+xml;charset=utf-8"}), i = window.URL || window.webkitURL || window,
            n = i.createObjectURL(t), r = new Image;
        r.addEventListener("load", function () {
            a.img.obj = r, a.img.loaded = !0, i.revokeObjectURL(n), p.tmp.count_svg++
        }), r.src = n
    }, p.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(p.fn.drawAnimFrame), i.remove(), pJSDom = null
    }, p.fn.vendors.drawShape = function (e, t, i, n, r, a) {
        var s = r * a, o = r / a, l = 180 * (o - 2) / o, c = Math.PI - Math.PI * l / 180;
        e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
        for (var u = 0; u < s; u++) e.lineTo(n, 0), e.translate(n, 0), e.rotate(c);
        e.fill(), e.restore()
    }, p.fn.vendors.exportImg = function () {
        window.open(p.canvas.el.toDataURL("image/png"), "_blank")
    }, p.fn.vendors.loadImg = function (e) {
        if (p.tmp.img_error = void 0, "" != p.particles.shape.image.src) if ("svg" == e) {
            var t = new XMLHttpRequest;
            t.open("GET", p.particles.shape.image.src), t.onreadystatechange = function (e) {
                4 == t.readyState && (200 == t.status ? (p.tmp.source_svg = e.currentTarget.response, p.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), p.tmp.img_error = !0))
            }, t.send()
        } else {
            var i = new Image;
            i.addEventListener("load", function () {
                p.tmp.img_obj = i, p.fn.vendors.checkBeforeDraw()
            }), i.src = p.particles.shape.image.src
        } else console.log("Error pJS - No image.src"), p.tmp.img_error = !0
    }, p.fn.vendors.draw = function () {
        "image" == p.particles.shape.type ? "svg" == p.tmp.img_type ? p.tmp.count_svg >= p.particles.number.value ? (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw) : cancelRequestAnimFrame(p.fn.drawAnimFrame)) : p.tmp.img_error || (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw)) : null != p.tmp.img_obj ? (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw) : cancelRequestAnimFrame(p.fn.drawAnimFrame)) : p.tmp.img_error || (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw)) : (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw) : cancelRequestAnimFrame(p.fn.drawAnimFrame))
    }, p.fn.vendors.checkBeforeDraw = function () {
        "image" == p.particles.shape.type ? "svg" == p.tmp.img_type && null == p.tmp.source_svg ? p.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(p.tmp.checkAnimFrame), p.tmp.img_error || (p.fn.vendors.init(), p.fn.vendors.draw())) : (p.fn.vendors.init(), p.fn.vendors.draw())
    }, p.fn.vendors.init = function () {
        p.fn.retinaInit(), p.fn.canvasInit(), p.fn.canvasSize(), p.fn.canvasPaint(), p.fn.particlesCreate(), p.fn.vendors.densityAutoParticles(), p.particles.line_linked.color_rgb_line = hexToRgb(p.particles.line_linked.color)
    }, p.fn.vendors.start = function () {
        isInArray("image", p.particles.shape.type) ? (p.tmp.img_type = p.particles.shape.image.src.substr(p.particles.shape.image.src.length - 3), p.fn.vendors.loadImg(p.tmp.img_type)) : p.fn.vendors.checkBeforeDraw()
    }, p.fn.vendors.eventsListeners(), p.fn.vendors.start()
};

function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
        return t + t + i + i + n + n
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
}

function clamp(e, t, i) {
    return Math.min(Math.max(e, t), i)
}

function isInArray(e, t) {
    return -1 < t.indexOf(e)
}

Object.deepExtend = function (e, t) {
    for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
    return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60)
}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var i = document.getElementById(e), n = "particles-js-canvas-el", r = i.getElementsByClassName(n);
    if (r.length) for (; 0 < r.length;) i.removeChild(r[0]);
    var a = document.createElement("canvas");
    a.className = n, a.style.width = "100%", a.style.height = "100%", null != document.getElementById(e).appendChild(a) && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function (i, e, n) {
    var r = new XMLHttpRequest;
    r.open("GET", e), r.onreadystatechange = function (e) {
        if (4 == r.readyState) if (200 == r.status) {
            var t = JSON.parse(e.currentTarget.response);
            window.particlesJS(i, t), n && n()
        } else console.log("Error pJS - XMLHttpRequest status: " + r.status), console.log("Error pJS - File config not found")
    }, r.send()
}, function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Typed = t() : e.Typed = t()
}(this, function () {
    return function (i) {
        var n = {};

        function r(e) {
            if (n[e]) return n[e].exports;
            var t = n[e] = {exports: {}, id: e, loaded: !1};
            return i[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports
        }

        return r.m = i, r.c = n, r.p = "", r(0)
    }([function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }();
        var r = i(1), u = i(3), a = function () {
            function i(e, t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), r.initializer.load(this, t, e), this.begin()
            }

            return n(i, [{
                key: "toggle", value: function () {
                    this.pause.status ? this.start() : this.stop()
                }
            }, {
                key: "stop", value: function () {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                }
            }, {
                key: "start", value: function () {
                    this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                }
            }, {
                key: "destroy", value: function () {
                    this.reset(!1), this.options.onDestroy(this)
                }
            }, {
                key: "reset", value: function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                }
            }, {
                key: "begin", value: function () {
                    var e = this;
                    this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                        e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                    }, this.startDelay)
                }
            }, {
                key: "typewrite", value: function (s, o) {
                    var l = this;
                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                    var e = this.humanizer(this.typeSpeed), c = 1;
                    !0 !== this.pause.status ? this.timeout = setTimeout(function () {
                        o = u.htmlParser.typeHtmlChars(s, o, l);
                        var e = 0, t = s.substr(o);
                        if ("^" === t.charAt(0) && /^\^\d+/.test(t)) {
                            var i = 1;
                            i += (t = /\d+/.exec(t)[0]).length, e = parseInt(t), l.temporaryPause = !0, l.options.onTypingPaused(l.arrayPos, l), s = s.substring(0, o) + s.substring(o + i), l.toggleBlinking(!0)
                        }
                        if ("`" === t.charAt(0)) {
                            for (; "`" !== s.substr(o + c).charAt(0) && !(o + ++c > s.length);) ;
                            var n = s.substring(0, o), r = s.substring(n.length + 1, o + c), a = s.substring(o + c + 1);
                            s = n + r + a, c--
                        }
                        l.timeout = setTimeout(function () {
                            l.toggleBlinking(!1), o === s.length ? l.doneTyping(s, o) : l.keepTyping(s, o, c), l.temporaryPause && (l.temporaryPause = !1, l.options.onTypingResumed(l.arrayPos, l))
                        }, e)
                    }, e) : this.setPauseStatus(s, o, !0)
                }
            }, {
                key: "keepTyping", value: function (e, t, i) {
                    0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += i;
                    var n = e.substr(0, t);
                    this.replaceText(n), this.typewrite(e, t)
                }
            }, {
                key: "doneTyping", value: function (e, t) {
                    var i = this;
                    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
                        i.backspace(e, t)
                    }, this.backDelay))
                }
            }, {
                key: "backspace", value: function (i, n) {
                    var r = this;
                    if (!0 !== this.pause.status) {
                        if (this.fadeOut) return this.initFadeOut();
                        this.toggleBlinking(!1);
                        var e = this.humanizer(this.backSpeed);
                        this.timeout = setTimeout(function () {
                            n = u.htmlParser.backSpaceHtmlChars(i, n, r);
                            var e = i.substr(0, n);
                            if (r.replaceText(e), r.smartBackspace) {
                                var t = r.strings[r.arrayPos + 1];
                                t && e === t.substr(0, n) ? r.stopNum = n : r.stopNum = 0
                            }
                            n > r.stopNum ? (n--, r.backspace(i, n)) : n <= r.stopNum && (r.arrayPos++, r.arrayPos === r.strings.length ? (r.arrayPos = 0, r.options.onLastStringBackspaced(), r.shuffleStringsIfNeeded(), r.begin()) : r.typewrite(r.strings[r.sequence[r.arrayPos]], n))
                        }, e)
                    } else this.setPauseStatus(i, n, !0)
                }
            }, {
                key: "complete", value: function () {
                    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                }
            }, {
                key: "setPauseStatus", value: function (e, t, i) {
                    this.pause.typewrite = i, this.pause.curString = e, this.pause.curStrPos = t
                }
            }, {
                key: "toggleBlinking", value: function (e) {
                    if (this.cursor && !this.pause.status && this.cursorBlinking !== e) {
                        var t = (this.cursorBlinking = e) ? "infinite" : 0;
                        this.cursor.style.animationIterationCount = t
                    }
                }
            }, {
                key: "humanizer", value: function (e) {
                    return Math.round(Math.random() * e / 2) + e
                }
            }, {
                key: "shuffleStringsIfNeeded", value: function () {
                    this.shuffle && (this.sequence = this.sequence.sort(function () {
                        return Math.random() - .5
                    }))
                }
            }, {
                key: "initFadeOut", value: function () {
                    var e = this;
                    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                        e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                    }, this.fadeOutDelay)
                }
            }, {
                key: "replaceText", value: function (e) {
                    this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                }
            }, {
                key: "bindFocusEvents", value: function () {
                    var t = this;
                    this.isInput && (this.el.addEventListener("focus", function (e) {
                        t.stop()
                    }), this.el.addEventListener("blur", function (e) {
                        t.el.value && 0 !== t.el.value.length || t.start()
                    }))
                }
            }, {
                key: "insertCursor", value: function () {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                }
            }]), i
        }();
        t.default = a, e.exports = t.default
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }, n = function () {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }();
        var r, a = i(2), l = (r = a) && r.__esModule ? r : {default: r}, s = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            return n(e, [{
                key: "load", value: function (e, t, i) {
                    if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = o({}, l.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function (e) {
                        return e.trim()
                    }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                        e.strings = [], e.stringsElement.style.display = "none";
                        var n = Array.prototype.slice.apply(e.stringsElement.children), r = n.length;
                        if (r) for (var a = 0; a < r; a += 1) {
                            var s = n[a];
                            e.strings.push(s.innerHTML.trim())
                        }
                    }
                    for (var a in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                        status: !1,
                        typewrite: !0,
                        curString: "",
                        curStrPos: 0
                    }, e.typingComplete = !1, e.strings) e.sequence[a] = a;
                    e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                }
            }, {
                key: "getCurrentElContent", value: function (e) {
                    return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                }
            }, {
                key: "appendAnimationCss", value: function (e) {
                    if (e.autoInsertCss && e.showCursor && e.fadeOut) {
                        var t = document.createElement("style");
                        t.type = "text/css";
                        var i = "";
                        e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = i, document.head.appendChild(t))
                    }
                }
            }]), e
        }(), c = new (t.default = s);
        t.initializer = c
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onComplete: function (e) {
            },
            preStringTyped: function (e, t) {
            },
            onStringTyped: function (e, t) {
            },
            onLastStringBackspaced: function (e) {
            },
            onTypingPaused: function (e, t) {
            },
            onTypingResumed: function (e, t) {
            },
            onReset: function (e) {
            },
            onStop: function (e, t) {
            },
            onStart: function (e, t) {
            },
            onDestroy: function (e) {
            }
        };
        t.default = i, e.exports = t.default
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }();
        var n = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            return i(e, [{
                key: "typeHtmlChars", value: function (e, t, i) {
                    if ("html" !== i.contentType) return t;
                    var n = e.substr(t).charAt(0);
                    if ("<" === n || "&" === n) {
                        var r = "";
                        for (r = "<" === n ? ">" : ";"; e.substr(t + 1).charAt(0) !== r && !(++t + 1 > e.length);) ;
                        t++
                    }
                    return t
                }
            }, {
                key: "backSpaceHtmlChars", value: function (e, t, i) {
                    if ("html" !== i.contentType) return t;
                    var n = e.substr(t).charAt(0);
                    if (">" === n || ";" === n) {
                        var r = "";
                        for (r = ">" === n ? "<" : "&"; e.substr(t - 1).charAt(0) !== r && !(--t < 0);) ;
                        t--
                    }
                    return t
                }
            }]), e
        }(), r = new (t.default = n);
        t.htmlParser = r
    }])
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";
    for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], i = 0, n = 0; n < t.length; n += 1) if (e && 0 <= navigator.userAgent.indexOf(t[n])) {
        i = 1;
        break
    }
    var s = e && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, i))
        }
    };

    function o(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function w(e, t) {
        if (1 !== e.nodeType) return [];
        var i = getComputedStyle(e, null);
        return t ? i[t] : i
    }

    function h(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function f(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var t = w(e), i = t.overflow, n = t.overflowX, r = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + r + n) ? e : f(h(e))
    }

    var r = e && !(!window.MSInputMethodContext || !document.documentMode),
        a = e && /MSIE 10/.test(navigator.userAgent);

    function m(e) {
        return 11 === e ? r : 10 === e ? a : r || a
    }

    function y(e) {
        if (!e) return document.documentElement;
        for (var t = m(10) ? document.body : null, i = e.offsetParent; i === t && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === w(i, "position") ? y(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }

    function p(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = i ? e : t, r = i ? t : e,
            a = document.createRange();
        a.setStart(n, 0), a.setEnd(r, 0);
        var s, o, l = a.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(r)) return "BODY" === (o = (s = l).nodeName) || "HTML" !== o && y(s.firstElementChild) !== s ? y(l) : l;
        var c = u(e);
        return c.host ? p(c.host, t) : p(e, u(t).host)
    }

    function v(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var n = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || n)[t]
        }
        return e[t]
    }

    function d(e, t) {
        var i = "x" === t ? "Left" : "Top", n = "Left" === i ? "Right" : "Bottom";
        return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
    }

    function l(e, t, i, n) {
        return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], m(10) ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function g() {
        var e = document.body, t = document.documentElement, i = m(10) && getComputedStyle(t);
        return {height: l("Height", e, t, i), width: l("Width", e, t, i)}
    }

    var c = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, b = function () {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
    }(), x = function (e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }, E = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    };

    function T(e) {
        return E({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function C(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var i = v(e, "top"), n = v(e, "left");
                t.top += i, t.left += n, t.bottom += i, t.right += n
            } else t = e.getBoundingClientRect()
        } catch (e) {
        }
        var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
            a = "HTML" === e.nodeName ? g() : {}, s = a.width || e.clientWidth || r.right - r.left,
            o = a.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, c = e.offsetHeight - o;
        if (l || c) {
            var u = w(e);
            l -= d(u, "x"), c -= d(u, "y"), r.width -= l, r.height -= c
        }
        return T(r)
    }

    function _(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = m(10), r = "HTML" === t.nodeName,
            a = C(e), s = C(t), o = f(e), l = w(t), c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        i && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var d = T({top: a.top - s.top - c, left: a.left - s.left - u, width: a.width, height: a.height});
        if (d.marginTop = 0, d.marginLeft = 0, !n && r) {
            var h = parseFloat(l.marginTop, 10), p = parseFloat(l.marginLeft, 10);
            d.top -= c - h, d.bottom -= c - h, d.left -= u - p, d.right -= u - p, d.marginTop = h, d.marginLeft = p
        }
        return (n && !i ? t.contains(o) : t === o && "BODY" !== o.nodeName) && (d = function (e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = v(t, "top"), r = v(t, "left"),
                a = i ? -1 : 1;
            return e.top += n * a, e.bottom += n * a, e.left += r * a, e.right += r * a, e
        }(d, t)), d
    }

    function S(e) {
        if (!e || !e.parentElement || m()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function k(e, t, i, n) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], a = {top: 0, left: 0},
            s = r ? S(e) : p(e, t);
        if ("viewport" === n) a = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                i = e.ownerDocument.documentElement, n = _(e, i), r = Math.max(i.clientWidth, window.innerWidth || 0),
                a = Math.max(i.clientHeight, window.innerHeight || 0), s = t ? 0 : v(i), o = t ? 0 : v(i, "left");
            return T({top: s - n.top + n.marginTop, left: o - n.left + n.marginLeft, width: r, height: a})
        }(s, r); else {
            var o = void 0;
            "scrollParent" === n ? "BODY" === (o = f(h(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === n ? e.ownerDocument.documentElement : n;
            var l = _(o, s, r);
            if ("HTML" !== o.nodeName || function e(t) {
                var i = t.nodeName;
                return "BODY" !== i && "HTML" !== i && ("fixed" === w(t, "position") || e(h(t)))
            }(s)) a = l; else {
                var c = g(), u = c.height, d = c.width;
                a.top += l.top - l.marginTop, a.bottom = u + l.top, a.left += l.left - l.marginLeft, a.right = d + l.left
            }
        }
        return a.left += i, a.top += i, a.right -= i, a.bottom -= i, a
    }

    function A(e, t, n, i, r) {
        var a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = k(n, i, a, r), o = {
            top: {width: s.width, height: t.top - s.top},
            right: {width: s.right - t.right, height: s.height},
            bottom: {width: s.width, height: s.bottom - t.bottom},
            left: {width: t.left - s.left, height: s.height}
        }, l = Object.keys(o).map(function (e) {
            return E({key: e}, o[e], {area: (t = o[e], t.width * t.height)});
            var t
        }).sort(function (e, t) {
            return t.area - e.area
        }), c = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), u = 0 < c.length ? c[0].key : l[0].key, d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function D(e, t, i) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return _(i, n ? S(t) : p(t, i), n)
    }

    function I(e) {
        var t = getComputedStyle(e), i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + n, height: e.offsetHeight + i}
    }

    function M(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function P(e, t, i) {
        i = i.split("-")[0];
        var n = I(e), r = {width: n.width, height: n.height}, a = -1 !== ["right", "left"].indexOf(i),
            s = a ? "top" : "left", o = a ? "left" : "top", l = a ? "height" : "width", c = a ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - n[l] / 2, r[o] = i === o ? t[o] - n[c] : t[M(o)], r
    }

    function O(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, i, t) {
        return (void 0 === t ? e : e.slice(0, function (e, t, i) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === i
            });
            var n = O(e, function (e) {
                return e[t] === i
            });
            return e.indexOf(n)
        }(e, "name", t))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && o(t) && (i.offsets.popper = T(i.offsets.popper), i.offsets.reference = T(i.offsets.reference), i = t(i, e))
        }), i
    }

    function L(e, i) {
        return e.some(function (e) {
            var t = e.name;
            return e.enabled && t === i
        })
    }

    function z(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var r = t[n], a = r ? "" + r + i : e;
            if (void 0 !== document.body.style[a]) return a
        }
        return null
    }

    function j(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function H(e, t, i, n) {
        i.updateBound = n, j(e).addEventListener("resize", i.updateBound, {passive: !0});
        var r = f(e);
        return function e(t, i, n, r) {
            var a = "BODY" === t.nodeName, s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(i, n, {passive: !0}), a || e(f(s.parentNode), i, n, r), r.push(s)
        }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
    }

    function R() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, j(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function $(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function q(i, n) {
        Object.keys(n).forEach(function (e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && $(n[e]) && (t = "px"), i.style[e] = n[e] + t
        })
    }

    function F(e, t, i) {
        var n = O(e, function (e) {
            return e.name === t
        }), r = !!n && e.some(function (e) {
            return e.name === i && e.enabled && e.order < n.order
        });
        if (!r) {
            var a = "`" + t + "`", s = "`" + i + "`";
            console.warn(s + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
        }
        return r
    }

    var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        W = B.slice(3);

    function Y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], i = W.indexOf(e),
            n = W.slice(i + 1).concat(W.slice(0, i));
        return t ? n.reverse() : n
    }

    var V = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

    function G(e, r, a, t) {
        var s = [0, 0], o = -1 !== ["right", "left"].indexOf(t), i = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), n = i.indexOf(O(i, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        i[n] && -1 === i[n].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== n ? [i.slice(0, n).concat([i[n].split(l)[0]]), [i[n].split(l)[1]].concat(i.slice(n + 1))] : [i];
        return (c = c.map(function (e, t) {
            var i = (1 === t ? !o : o) ? "height" : "width", n = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, n = !0, e) : n ? (e[e.length - 1] += t, n = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, i, n) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), a = +r[1], s = r[2];
                    if (!a) return e;
                    if (0 === s.indexOf("%")) {
                        var o = void 0;
                        switch (s) {
                            case"%p":
                                o = i;
                                break;
                            case"%":
                            case"%r":
                            default:
                                o = n
                        }
                        return T(o)[t] / 100 * a
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
                    return a
                }(e, i, r, a)
            })
        })).forEach(function (i, n) {
            i.forEach(function (e, t) {
                $(e) && (s[n] += e * ("-" === i[t - 1] ? -1 : 1))
            })
        }), s
    }

    var X = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, i = t.split("-")[0], n = t.split("-")[1];
                    if (n) {
                        var r = e.offsets, a = r.reference, s = r.popper, o = -1 !== ["bottom", "top"].indexOf(i),
                            l = o ? "left" : "top", c = o ? "width" : "height",
                            u = {start: x({}, l, a[l]), end: x({}, l, a[l] + a[c] - s[c])};
                        e.offsets.popper = E({}, s, u[n])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var i = t.offset, n = e.placement, r = e.offsets, a = r.popper, s = r.reference,
                        o = n.split("-")[0], l = void 0;
                    return l = $(+i) ? [+i, 0] : G(i, a, s, o), "left" === o ? (a.top += l[0], a.left -= l[1]) : "right" === o ? (a.top += l[0], a.left += l[1]) : "top" === o ? (a.left += l[0], a.top -= l[1]) : "bottom" === o && (a.left += l[0], a.top += l[1]), e.popper = a, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, n) {
                    var t = n.boundariesElement || y(e.instance.popper);
                    e.instance.reference === t && (t = y(t));
                    var i = z("transform"), r = e.instance.popper.style, a = r.top, s = r.left, o = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var l = k(e.instance.popper, e.instance.reference, n.padding, t, e.positionFixed);
                    r.top = a, r.left = s, r[i] = o, n.boundaries = l;
                    var c = n.priority, u = e.offsets.popper, d = {
                        primary: function (e) {
                            var t = u[e];
                            return u[e] < l[e] && !n.escapeWithReference && (t = Math.max(u[e], l[e])), x({}, e, t)
                        }, secondary: function (e) {
                            var t = "right" === e ? "left" : "top", i = u[t];
                            return u[e] > l[e] && !n.escapeWithReference && (i = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), x({}, t, i)
                        }
                    };
                    return c.forEach(function (e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = E({}, u, d[t](e))
                    }), e.offsets.popper = u, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, i = t.popper, n = t.reference, r = e.placement.split("-")[0], a = Math.floor,
                        s = -1 !== ["top", "bottom"].indexOf(r), o = s ? "right" : "bottom", l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return i[o] < a(n[l]) && (e.offsets.popper[l] = a(n[l]) - i[c]), i[l] > a(n[o]) && (e.offsets.popper[l] = a(n[o])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, t) {
                    var i;
                    if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var n = t.element;
                    if ("string" == typeof n) {
                        if (!(n = e.instance.popper.querySelector(n))) return e
                    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], a = e.offsets, s = a.popper, o = a.reference,
                        l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", u = l ? "Top" : "Left",
                        d = u.toLowerCase(), h = l ? "left" : "top", p = l ? "bottom" : "right", f = I(n)[c];
                    o[p] - f < s[d] && (e.offsets.popper[d] -= s[d] - (o[p] - f)), o[d] + f > s[p] && (e.offsets.popper[d] += o[d] + f - s[p]), e.offsets.popper = T(e.offsets.popper);
                    var m = o[d] + o[c] / 2 - f / 2, v = w(e.instance.popper), g = parseFloat(v["margin" + u], 10),
                        y = parseFloat(v["border" + u + "Width"], 10), b = m - e.offsets.popper[d] - g - y;
                    return b = Math.max(Math.min(s[c] - f, b), 0), e.arrowElement = n, e.offsets.arrow = (x(i = {}, d, Math.round(b)), x(i, h, ""), i), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (f, m) {
                    if (L(f.instance.modifiers, "inner")) return f;
                    if (f.flipped && f.placement === f.originalPlacement) return f;
                    var v = k(f.instance.popper, f.instance.reference, m.padding, m.boundariesElement, f.positionFixed),
                        g = f.placement.split("-")[0], y = M(g), b = f.placement.split("-")[1] || "", w = [];
                    switch (m.behavior) {
                        case V.FLIP:
                            w = [g, y];
                            break;
                        case V.CLOCKWISE:
                            w = Y(g);
                            break;
                        case V.COUNTERCLOCKWISE:
                            w = Y(g, !0);
                            break;
                        default:
                            w = m.behavior
                    }
                    return w.forEach(function (e, t) {
                        if (g !== e || w.length === t + 1) return f;
                        g = f.placement.split("-")[0], y = M(g);
                        var i, n = f.offsets.popper, r = f.offsets.reference, a = Math.floor,
                            s = "left" === g && a(n.right) > a(r.left) || "right" === g && a(n.left) < a(r.right) || "top" === g && a(n.bottom) > a(r.top) || "bottom" === g && a(n.top) < a(r.bottom),
                            o = a(n.left) < a(v.left), l = a(n.right) > a(v.right), c = a(n.top) < a(v.top),
                            u = a(n.bottom) > a(v.bottom),
                            d = "left" === g && o || "right" === g && l || "top" === g && c || "bottom" === g && u,
                            h = -1 !== ["top", "bottom"].indexOf(g),
                            p = !!m.flipVariations && (h && "start" === b && o || h && "end" === b && l || !h && "start" === b && c || !h && "end" === b && u);
                        (s || d || p) && (f.flipped = !0, (s || d) && (g = w[t + 1]), p && (b = "end" === (i = b) ? "start" : "start" === i ? "end" : i), f.placement = g + (b ? "-" + b : ""), f.offsets.popper = E({}, f.offsets.popper, P(f.instance.popper, f.offsets.reference, f.placement)), f = N(f.instance.modifiers, f, "flip"))
                    }), f
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, i = t.split("-")[0], n = e.offsets, r = n.popper, a = n.reference,
                        s = -1 !== ["left", "right"].indexOf(i), o = -1 === ["top", "left"].indexOf(i);
                    return r[s ? "left" : "top"] = a[i] - (o ? r[s ? "width" : "height"] : 0), e.placement = M(t), e.offsets.popper = T(r), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, i = O(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var i = t.x, n = t.y, r = e.offsets.popper, a = O(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== a ? a : t.gpuAcceleration, o = C(y(e.instance.popper)),
                        l = {position: r.position}, c = {
                            left: Math.floor(r.left),
                            top: Math.round(r.top),
                            bottom: Math.round(r.bottom),
                            right: Math.floor(r.right)
                        }, u = "bottom" === i ? "top" : "bottom", d = "right" === n ? "left" : "right", h = z("transform"),
                        p = void 0, f = void 0;
                    if (f = "bottom" === u ? -o.height + c.bottom : c.top, p = "right" === d ? -o.width + c.right : c.left, s && h) l[h] = "translate3d(" + p + "px, " + f + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform"; else {
                        var m = "bottom" === u ? -1 : 1, v = "right" === d ? -1 : 1;
                        l[u] = f * m, l[d] = p * v, l.willChange = u + ", " + d
                    }
                    var g = {"x-placement": e.placement};
                    return e.attributes = E({}, g, e.attributes), e.styles = E({}, l, e.styles), e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    var t, i;
                    return q(e.instance.popper, e.styles), t = e.instance.popper, i = e.attributes, Object.keys(i).forEach(function (e) {
                        !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, i, n, r) {
                    var a = D(r, t, e, i.positionFixed),
                        s = A(i.placement, a, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), q(t, {position: i.positionFixed ? "fixed" : "absolute"}), i
                }, gpuAcceleration: void 0
            }
        }
    }, U = function () {
        function a(e, t) {
            var i = this, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            c(this, a), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = s(this.update.bind(this)), this.options = E({}, a.Defaults, n), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(E({}, a.Defaults.modifiers, n.modifiers)).forEach(function (e) {
                i.options.modifiers[e] = E({}, a.Defaults.modifiers[e] || {}, n.modifiers ? n.modifiers[e] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return E({name: e}, i.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (e) {
                e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }), this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(), this.state.eventsEnabled = r
        }

        return b(a, [{
            key: "update", value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return function () {
                    return this.state.isDestroyed = !0, L(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return R.call(this)
            }
        }]), a
    }();
    return U.Utils = ("undefined" != typeof window ? window : global).PopperUtils, U.placements = B, U.Defaults = X, U
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, u) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function s(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function c(r) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {}, t = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), t.forEach(function (e) {
                var t, i, n;
                t = r, n = a[i = e], i in t ? Object.defineProperty(t, i, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = n
            })
        }
        return r
    }

    t = t && t.hasOwnProperty("default") ? t.default : t, u = u && u.hasOwnProperty("default") ? u.default : u;
    var r, i, a, o, l, d, h, p, f, m, v, g, y, b, w, x, E, T, C, _, S, k, A, D, I, M, P, O, N, L, z, j, H, R, $, q, F,
        B, W, Y, V, G, X, U, K, Q, J, Z, ee, te, ie, ne, re, ae, se, oe, le, ce, ue, de, he, pe, fe, me, ve, ge, ye, be,
        we, xe, Ee, Te, Ce, _e, Se, ke, Ae, De, Ie, Me, Pe, Oe, Ne, Le, ze, je, He, Re, $e, qe, Fe, Be, We, Ye, Ve, Ge,
        Xe, Ue, Ke, Qe, Je, Ze, et, tt, it, nt, rt, at, st, ot, lt, ct, ut, dt, ht, pt, ft, mt, vt, gt, yt, bt, wt, xt,
        Et, Tt, Ct, _t, St, kt, At, Dt, It, Mt, Pt, Ot, Nt, Lt, zt, jt, Ht, Rt, $t, qt, Ft, Bt, Wt, Yt, Vt, Gt, Xt, Ut,
        Kt, Qt, Jt, Zt, ei, ti, ii, ni, ri, ai, si, oi, li, ci, ui, di, hi, pi, fi, mi, vi, gi, yi, bi,
        wi = function (n) {
            var t = "transitionend";

            function e(e) {
                var t = this, i = !1;
                return n(this).one(l.TRANSITION_END, function () {
                    i = !0
                }), setTimeout(function () {
                    i || l.triggerTransitionEnd(t)
                }, e), this
            }

            var l = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                    for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) ;
                    return e
                }, getSelectorFromElement: function (e) {
                    var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || "");
                    try {
                        return 0 < n(document).find(t).length ? t : null
                    } catch (e) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (e) {
                    if (!e) return 0;
                    var t = n(e).css("transition-duration");
                    return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
                }, reflow: function (e) {
                    return e.offsetHeight
                }, triggerTransitionEnd: function (e) {
                    n(e).trigger(t)
                }, supportsTransitionEnd: function () {
                    return Boolean(t)
                }, isElement: function (e) {
                    return (e[0] || e).nodeType
                }, typeCheckConfig: function (e, t, i) {
                    for (var n in i) if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var r = i[n], a = t[n],
                            s = a && l.isElement(a) ? "element" : (o = a, {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                    var o
                }
            };
            return n.fn.emulateTransitionEnd = e, n.event.special[l.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function (e) {
                    if (n(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(t), xi = (i = "alert", o = "." + (a = "bs.alert"), l = (r = t).fn[i], d = {
            CLOSE: "close" + o,
            CLOSED: "closed" + o,
            CLICK_DATA_API: "click" + o + ".data-api"
        }, h = "alert", p = "fade", f = "show", m = function () {
            function n(e) {
                this._element = e
            }

            var e = n.prototype;
            return e.close = function (e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function () {
                r.removeData(this._element, a), this._element = null
            }, e._getRootElement = function (e) {
                var t = wi.getSelectorFromElement(e), i = !1;
                return t && (i = r(t)[0]), i || (i = r(e).closest("." + h)[0]), i
            }, e._triggerCloseEvent = function (e) {
                var t = r.Event(d.CLOSE);
                return r(e).trigger(t), t
            }, e._removeElement = function (t) {
                var i = this;
                if (r(t).removeClass(f), r(t).hasClass(p)) {
                    var e = wi.getTransitionDurationFromElement(t);
                    r(t).one(wi.TRANSITION_END, function (e) {
                        return i._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function (e) {
                r(e).detach().trigger(d.CLOSED).remove()
            }, n._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = r(this), t = e.data(a);
                    t || (t = new n(this), e.data(a, t)), "close" === i && t[i](this)
                })
            }, n._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }]), n
        }(), r(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), r.fn[i] = m._jQueryInterface, r.fn[i].Constructor = m, r.fn[i].noConflict = function () {
            return r.fn[i] = l, m._jQueryInterface
        }, m),
        Ei = (g = "button", b = "." + (y = "bs.button"), w = ".data-api", x = (v = t).fn[g], E = "active", T = "btn", _ = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', k = "input", A = ".active", D = ".btn", I = {
            CLICK_DATA_API: "click" + b + w,
            FOCUS_BLUR_DATA_API: (C = "focus") + b + w + " blur" + b + w
        }, M = function () {
            function i(e) {
                this._element = e
            }

            var e = i.prototype;
            return e.toggle = function () {
                var e = !0, t = !0, i = v(this._element).closest(S)[0];
                if (i) {
                    var n = v(this._element).find(k)[0];
                    if (n) {
                        if ("radio" === n.type) if (n.checked && v(this._element).hasClass(E)) e = !1; else {
                            var r = v(i).find(A)[0];
                            r && v(r).removeClass(E)
                        }
                        if (e) {
                            if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            n.checked = !v(this._element).hasClass(E), v(n).trigger("change")
                        }
                        n.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !v(this._element).hasClass(E)), e && v(this._element).toggleClass(E)
            }, e.dispose = function () {
                v.removeData(this._element, y), this._element = null
            }, i._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = v(this).data(y);
                    e || (e = new i(this), v(this).data(y, e)), "toggle" === t && e[t]()
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }]), i
        }(), v(document).on(I.CLICK_DATA_API, _, function (e) {
            e.preventDefault();
            var t = e.target;
            v(t).hasClass(T) || (t = v(t).closest(D)), M._jQueryInterface.call(v(t), "toggle")
        }).on(I.FOCUS_BLUR_DATA_API, _, function (e) {
            var t = v(e.target).closest(D)[0];
            v(t).toggleClass(C, /^focus(in)?$/.test(e.type))
        }), v.fn[g] = M._jQueryInterface, v.fn[g].Constructor = M, v.fn[g].noConflict = function () {
            return v.fn[g] = x, M._jQueryInterface
        }, M), Ti = (O = "carousel", L = "." + (N = "bs.carousel"), z = (P = t).fn[O], j = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, H = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, R = "next", $ = "prev", q = "left", F = "right", B = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + ".data-api",
            CLICK_DATA_API: "click" + L + ".data-api"
        }, W = "carousel", Y = "active", V = "slide", G = "carousel-item-right", X = "carousel-item-left", U = "carousel-item-next", K = "carousel-item-prev", Q = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, J = function () {
            function a(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = P(e)[0], this._indicatorsElement = P(this._element).find(Q.INDICATORS)[0], this._addEventListeners()
            }

            var e = a.prototype;
            return e.next = function () {
                this._isSliding || this._slide(R)
            }, e.nextWhenVisible = function () {
                !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
            }, e.prev = function () {
                this._isSliding || this._slide($)
            }, e.pause = function (e) {
                e || (this._isPaused = !0), P(this._element).find(Q.NEXT_PREV)[0] && (wi.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function (e) {
                var t = this;
                this._activeElement = P(this._element).find(Q.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) P(this._element).one(B.SLID, function () {
                    return t.to(e)
                }); else {
                    if (i === e) return this.pause(), void this.cycle();
                    var n = i < e ? R : $;
                    this._slide(n, this._items[e])
                }
            }, e.dispose = function () {
                P(this._element).off(L), P.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function (e) {
                return e = c({}, j, e), wi.typeCheckConfig(O, e, H), e
            }, e._addEventListeners = function () {
                var t = this;
                this._config.keyboard && P(this._element).on(B.KEYDOWN, function (e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (P(this._element).on(B.MOUSEENTER, function (e) {
                    return t.pause(e)
                }).on(B.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && P(this._element).on(B.TOUCHEND, function () {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, e._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function (e) {
                return this._items = P.makeArray(P(e).parent().find(Q.ITEM)), this._items.indexOf(e)
            }, e._getItemByDirection = function (e, t) {
                var i = e === R, n = e === $, r = this._getItemIndex(t), a = this._items.length - 1;
                if ((n && 0 === r || i && r === a) && !this._config.wrap) return t;
                var s = (r + (e === $ ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function (e, t) {
                var i = this._getItemIndex(e), n = this._getItemIndex(P(this._element).find(Q.ACTIVE_ITEM)[0]),
                    r = P.Event(B.SLIDE, {relatedTarget: e, direction: t, from: n, to: i});
                return P(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    P(this._indicatorsElement).find(Q.ACTIVE).removeClass(Y);
                    var t = this._indicatorsElement.children[this._getItemIndex(e)];
                    t && P(t).addClass(Y)
                }
            }, e._slide = function (e, t) {
                var i, n, r, a = this, s = P(this._element).find(Q.ACTIVE_ITEM)[0], o = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
                if (e === R ? (i = X, n = U, r = q) : (i = G, n = K, r = F), l && P(l).hasClass(Y)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var d = P.Event(B.SLID, {relatedTarget: l, direction: r, from: o, to: c});
                    if (P(this._element).hasClass(V)) {
                        P(l).addClass(n), wi.reflow(l), P(s).addClass(i), P(l).addClass(i);
                        var h = wi.getTransitionDurationFromElement(s);
                        P(s).one(wi.TRANSITION_END, function () {
                            P(l).removeClass(i + " " + n).addClass(Y), P(s).removeClass(Y + " " + n + " " + i), a._isSliding = !1, setTimeout(function () {
                                return P(a._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else P(s).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(d);
                    u && this.cycle()
                }
            }, a._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = P(this).data(N), t = c({}, j, P(this).data());
                    "object" == typeof n && (t = c({}, t, n));
                    var i = "string" == typeof n ? n : t.slide;
                    if (e || (e = new a(this, t), P(this).data(N, e)), "number" == typeof n) e.to(n); else if ("string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    } else t.interval && (e.pause(), e.cycle())
                })
            }, a._dataApiClickHandler = function (e) {
                var t = wi.getSelectorFromElement(this);
                if (t) {
                    var i = P(t)[0];
                    if (i && P(i).hasClass(W)) {
                        var n = c({}, P(i).data(), P(this).data()), r = this.getAttribute("data-slide-to");
                        r && (n.interval = !1), a._jQueryInterface.call(P(i), n), r && P(i).data(N).to(r), e.preventDefault()
                    }
                }
            }, s(a, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return j
                }
            }]), a
        }(), P(document).on(B.CLICK_DATA_API, Q.DATA_SLIDE, J._dataApiClickHandler), P(window).on(B.LOAD_DATA_API, function () {
            P(Q.DATA_RIDE).each(function () {
                var e = P(this);
                J._jQueryInterface.call(e, e.data())
            })
        }), P.fn[O] = J._jQueryInterface, P.fn[O].Constructor = J, P.fn[O].noConflict = function () {
            return P.fn[O] = z, J._jQueryInterface
        }, J), Ci = (ee = "collapse", ie = "." + (te = "bs.collapse"), ne = (Z = t).fn[ee], re = {
            toggle: !0,
            parent: ""
        }, ae = {toggle: "boolean", parent: "(string|element)"}, se = {
            SHOW: "show" + ie,
            SHOWN: "shown" + ie,
            HIDE: "hide" + ie,
            HIDDEN: "hidden" + ie,
            CLICK_DATA_API: "click" + ie + ".data-api"
        }, oe = "show", le = "collapse", ce = "collapsing", ue = "collapsed", de = "width", he = "height", pe = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, fe = function () {
            function o(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = Z.makeArray(Z('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = Z(pe.DATA_TOGGLE), n = 0; n < i.length; n++) {
                    var r = i[n], a = wi.getSelectorFromElement(r);
                    null !== a && 0 < Z(a).filter(e).length && (this._selector = a, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var e = o.prototype;
            return e.toggle = function () {
                Z(this._element).hasClass(oe) ? this.hide() : this.show()
            }, e.show = function () {
                var e, t, i = this;
                if (!this._isTransitioning && !Z(this._element).hasClass(oe) && (this._parent && 0 === (e = Z.makeArray(Z(this._parent).find(pe.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (t = Z(e).not(this._selector).data(te)) && t._isTransitioning))) {
                    var n = Z.Event(se.SHOW);
                    if (Z(this._element).trigger(n), !n.isDefaultPrevented()) {
                        e && (o._jQueryInterface.call(Z(e).not(this._selector), "hide"), t || Z(e).data(te, null));
                        var r = this._getDimension();
                        Z(this._element).removeClass(le).addClass(ce), (this._element.style[r] = 0) < this._triggerArray.length && Z(this._triggerArray).removeClass(ue).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = wi.getTransitionDurationFromElement(this._element);
                        Z(this._element).one(wi.TRANSITION_END, function () {
                            Z(i._element).removeClass(ce).addClass(le).addClass(oe), i._element.style[r] = "", i.setTransitioning(!1), Z(i._element).trigger(se.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[a] + "px"
                    }
                }
            }, e.hide = function () {
                var e = this;
                if (!this._isTransitioning && Z(this._element).hasClass(oe)) {
                    var t = Z.Event(se.HIDE);
                    if (Z(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", wi.reflow(this._element), Z(this._element).addClass(ce).removeClass(le).removeClass(oe), 0 < this._triggerArray.length) for (var n = 0; n < this._triggerArray.length; n++) {
                            var r = this._triggerArray[n], a = wi.getSelectorFromElement(r);
                            if (null !== a) Z(a).hasClass(oe) || Z(r).addClass(ue).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var s = wi.getTransitionDurationFromElement(this._element);
                        Z(this._element).one(wi.TRANSITION_END, function () {
                            e.setTransitioning(!1), Z(e._element).removeClass(ce).addClass(le).trigger(se.HIDDEN)
                        }).emulateTransitionEnd(s)
                    }
                }
            }, e.setTransitioning = function (e) {
                this._isTransitioning = e
            }, e.dispose = function () {
                Z.removeData(this._element, te), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function (e) {
                return (e = c({}, re, e)).toggle = Boolean(e.toggle), wi.typeCheckConfig(ee, e, ae), e
            }, e._getDimension = function () {
                return Z(this._element).hasClass(de) ? de : he
            }, e._getParent = function () {
                var i = this, e = null;
                wi.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = Z(this._config.parent)[0];
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return Z(e).find(t).each(function (e, t) {
                    i._addAriaAndCollapsedClass(o._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function (e, t) {
                if (e) {
                    var i = Z(e).hasClass(oe);
                    0 < t.length && Z(t).toggleClass(ue, !i).attr("aria-expanded", i)
                }
            }, o._getTargetFromElement = function (e) {
                var t = wi.getSelectorFromElement(e);
                return t ? Z(t)[0] : null
            }, o._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Z(this), t = e.data(te), i = c({}, re, e.data(), "object" == typeof n && n);
                    if (!t && i.toggle && /show|hide/.test(n) && (i.toggle = !1), t || (t = new o(this, i), e.data(te, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(o, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return re
                }
            }]), o
        }(), Z(document).on(se.CLICK_DATA_API, pe.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = Z(this), t = wi.getSelectorFromElement(this);
            Z(t).each(function () {
                var e = Z(this), t = e.data(te) ? "toggle" : i.data();
                fe._jQueryInterface.call(e, t)
            })
        }), Z.fn[ee] = fe._jQueryInterface, Z.fn[ee].Constructor = fe, Z.fn[ee].noConflict = function () {
            return Z.fn[ee] = ne, fe._jQueryInterface
        }, fe),
        _i = (ve = "dropdown", ye = "." + (ge = "bs.dropdown"), be = ".data-api", we = (me = t).fn[ve], xe = new RegExp("38|40|27"), Ee = {
            HIDE: "hide" + ye,
            HIDDEN: "hidden" + ye,
            SHOW: "show" + ye,
            SHOWN: "shown" + ye,
            CLICK: "click" + ye,
            CLICK_DATA_API: "click" + ye + be,
            KEYDOWN_DATA_API: "keydown" + ye + be,
            KEYUP_DATA_API: "keyup" + ye + be
        }, Te = "disabled", Ce = "show", _e = "dropup", Se = "dropright", ke = "dropleft", Ae = "dropdown-menu-right", De = "position-static", Ie = '[data-toggle="dropdown"]', Me = ".dropdown form", Pe = ".dropdown-menu", Oe = ".navbar-nav", Ne = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Le = "top-start", ze = "top-end", je = "bottom-start", He = "bottom-end", Re = "right-start", $e = "left-start", qe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Fe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Be = function () {
            function l(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var e = l.prototype;
            return e.toggle = function () {
                if (!this._element.disabled && !me(this._element).hasClass(Te)) {
                    var e = l._getParentFromElement(this._element), t = me(this._menu).hasClass(Ce);
                    if (l._clearMenus(), !t) {
                        var i = {relatedTarget: this._element}, n = me.Event(Ee.SHOW, i);
                        if (me(e).trigger(n), !n.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === u) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : wi.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && me(e).addClass(De), this._popper = new u(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === me(e).closest(Oe).length && me(document.body).children().on("mouseover", null, me.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), me(this._menu).toggleClass(Ce), me(e).toggleClass(Ce).trigger(me.Event(Ee.SHOWN, i))
                        }
                    }
                }
            }, e.dispose = function () {
                me.removeData(this._element, ge), me(this._element).off(ye), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function () {
                var t = this;
                me(this._element).on(Ee.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function (e) {
                return e = c({}, this.constructor.Default, me(this._element).data(), e), wi.typeCheckConfig(ve, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function () {
                if (!this._menu) {
                    var e = l._getParentFromElement(this._element);
                    this._menu = me(e).find(Pe)[0]
                }
                return this._menu
            }, e._getPlacement = function () {
                var e = me(this._element).parent(), t = je;
                return e.hasClass(_e) ? (t = Le, me(this._menu).hasClass(Ae) && (t = ze)) : e.hasClass(Se) ? t = Re : e.hasClass(ke) ? t = $e : me(this._menu).hasClass(Ae) && (t = He), t
            }, e._detectNavbar = function () {
                return 0 < me(this._element).closest(".navbar").length
            }, e._getPopperConfig = function () {
                var t = this, e = {};
                "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = c({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var i = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (i.modifiers.applyStyle = {enabled: !1}), i
            }, l._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = me(this).data(ge);
                    if (e || (e = new l(this, "object" == typeof t ? t : null), me(this).data(ge, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, l._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = me.makeArray(me(Ie)), i = 0; i < t.length; i++) {
                    var n = l._getParentFromElement(t[i]), r = me(t[i]).data(ge), a = {relatedTarget: t[i]};
                    if (r) {
                        var s = r._menu;
                        if (me(n).hasClass(Ce) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && me.contains(n, e.target))) {
                            var o = me.Event(Ee.HIDE, a);
                            me(n).trigger(o), o.isDefaultPrevented() || ("ontouchstart" in document.documentElement && me(document.body).children().off("mouseover", null, me.noop), t[i].setAttribute("aria-expanded", "false"), me(s).removeClass(Ce), me(n).removeClass(Ce).trigger(me.Event(Ee.HIDDEN, a)))
                        }
                    }
                }
            }, l._getParentFromElement = function (e) {
                var t, i = wi.getSelectorFromElement(e);
                return i && (t = me(i)[0]), t || e.parentNode
            }, l._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || me(e.target).closest(Pe).length)) : xe.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !me(this).hasClass(Te))) {
                    var t = l._getParentFromElement(this), i = me(t).hasClass(Ce);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var n = me(t).find(Ne).get();
                        if (0 !== n.length) {
                            var r = n.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < n.length - 1 && r++, r < 0 && (r = 0), n[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var a = me(t).find(Ie)[0];
                            me(a).trigger("focus")
                        }
                        me(this).trigger("click")
                    }
                }
            }, s(l, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return qe
                }
            }, {
                key: "DefaultType", get: function () {
                    return Fe
                }
            }]), l
        }(), me(document).on(Ee.KEYDOWN_DATA_API, Ie, Be._dataApiKeydownHandler).on(Ee.KEYDOWN_DATA_API, Pe, Be._dataApiKeydownHandler).on(Ee.CLICK_DATA_API + " " + Ee.KEYUP_DATA_API, Be._clearMenus).on(Ee.CLICK_DATA_API, Ie, function (e) {
            e.preventDefault(), e.stopPropagation(), Be._jQueryInterface.call(me(this), "toggle")
        }).on(Ee.CLICK_DATA_API, Me, function (e) {
            e.stopPropagation()
        }), me.fn[ve] = Be._jQueryInterface, me.fn[ve].Constructor = Be, me.fn[ve].noConflict = function () {
            return me.fn[ve] = we, Be._jQueryInterface
        }, Be), Si = (Ye = "modal", Ge = "." + (Ve = "bs.modal"), Xe = (We = t).fn[Ye], Ue = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Ke = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Qe = {
            HIDE: "hide" + Ge,
            HIDDEN: "hidden" + Ge,
            SHOW: "show" + Ge,
            SHOWN: "shown" + Ge,
            FOCUSIN: "focusin" + Ge,
            RESIZE: "resize" + Ge,
            CLICK_DISMISS: "click.dismiss" + Ge,
            KEYDOWN_DISMISS: "keydown.dismiss" + Ge,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Ge,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ge,
            CLICK_DATA_API: "click" + Ge + ".data-api"
        }, Je = "modal-scrollbar-measure", Ze = "modal-backdrop", et = "modal-open", tt = "fade", it = "show", nt = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, rt = function () {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = We(e).find(nt.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }

            var e = r.prototype;
            return e.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    We(this._element).hasClass(tt) && (this._isTransitioning = !0);
                    var i = We.Event(Qe.SHOW, {relatedTarget: e});
                    We(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), We(document.body).addClass(et), this._setEscapeEvent(), this._setResizeEvent(), We(this._element).on(Qe.CLICK_DISMISS, nt.DATA_DISMISS, function (e) {
                        return t.hide(e)
                    }), We(this._dialog).on(Qe.MOUSEDOWN_DISMISS, function () {
                        We(t._element).one(Qe.MOUSEUP_DISMISS, function (e) {
                            We(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = We.Event(Qe.HIDE);
                    if (We(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var n = We(this._element).hasClass(tt);
                        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), We(document).off(Qe.FOCUSIN), We(this._element).removeClass(it), We(this._element).off(Qe.CLICK_DISMISS), We(this._dialog).off(Qe.MOUSEDOWN_DISMISS), n) {
                            var r = wi.getTransitionDurationFromElement(this._element);
                            We(this._element).one(wi.TRANSITION_END, function (e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function () {
                We.removeData(this._element, Ve), We(window, document, this._element, this._backdrop).off(Ge), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function () {
                this._adjustDialog()
            }, e._getConfig = function (e) {
                return e = c({}, Ue, e), wi.typeCheckConfig(Ye, e, Ke), e
            }, e._showElement = function (e) {
                var t = this, i = We(this._element).hasClass(tt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && wi.reflow(this._element), We(this._element).addClass(it), this._config.focus && this._enforceFocus();
                var n = We.Event(Qe.SHOWN, {relatedTarget: e}), r = function () {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, We(t._element).trigger(n)
                };
                if (i) {
                    var a = wi.getTransitionDurationFromElement(this._element);
                    We(this._dialog).one(wi.TRANSITION_END, r).emulateTransitionEnd(a)
                } else r()
            }, e._enforceFocus = function () {
                var t = this;
                We(document).off(Qe.FOCUSIN).on(Qe.FOCUSIN, function (e) {
                    document !== e.target && t._element !== e.target && 0 === We(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? We(this._element).on(Qe.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || We(this._element).off(Qe.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function () {
                var t = this;
                this._isShown ? We(window).on(Qe.RESIZE, function (e) {
                    return t.handleUpdate(e)
                }) : We(window).off(Qe.RESIZE)
            }, e._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    We(document.body).removeClass(et), e._resetAdjustments(), e._resetScrollbar(), We(e._element).trigger(Qe.HIDDEN)
                })
            }, e._removeBackdrop = function () {
                this._backdrop && (We(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function (e) {
                var t = this, i = We(this._element).hasClass(tt) ? tt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = Ze, i && We(this._backdrop).addClass(i), We(this._backdrop).appendTo(document.body), We(this._element).on(Qe.CLICK_DISMISS, function (e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), i && wi.reflow(this._backdrop), We(this._backdrop).addClass(it), !e) return;
                    if (!i) return void e();
                    var n = wi.getTransitionDurationFromElement(this._backdrop);
                    We(this._backdrop).one(wi.TRANSITION_END, e).emulateTransitionEnd(n)
                } else if (!this._isShown && this._backdrop) {
                    We(this._backdrop).removeClass(it);
                    var r = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if (We(this._element).hasClass(tt)) {
                        var a = wi.getTransitionDurationFromElement(this._backdrop);
                        We(this._backdrop).one(wi.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function () {
                var r = this;
                if (this._isBodyOverflowing) {
                    We(nt.FIXED_CONTENT).each(function (e, t) {
                        var i = We(t)[0].style.paddingRight, n = We(t).css("padding-right");
                        We(t).data("padding-right", i).css("padding-right", parseFloat(n) + r._scrollbarWidth + "px")
                    }), We(nt.STICKY_CONTENT).each(function (e, t) {
                        var i = We(t)[0].style.marginRight, n = We(t).css("margin-right");
                        We(t).data("margin-right", i).css("margin-right", parseFloat(n) - r._scrollbarWidth + "px")
                    }), We(nt.NAVBAR_TOGGLER).each(function (e, t) {
                        var i = We(t)[0].style.marginRight, n = We(t).css("margin-right");
                        We(t).data("margin-right", i).css("margin-right", parseFloat(n) + r._scrollbarWidth + "px")
                    });
                    var e = document.body.style.paddingRight, t = We(document.body).css("padding-right");
                    We(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function () {
                We(nt.FIXED_CONTENT).each(function (e, t) {
                    var i = We(t).data("padding-right");
                    void 0 !== i && We(t).css("padding-right", i).removeData("padding-right")
                }), We(nt.STICKY_CONTENT + ", " + nt.NAVBAR_TOGGLER).each(function (e, t) {
                    var i = We(t).data("margin-right");
                    void 0 !== i && We(t).css("margin-right", i).removeData("margin-right")
                });
                var e = We(document.body).data("padding-right");
                void 0 !== e && We(document.body).css("padding-right", e).removeData("padding-right")
            }, e._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = Je, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function (i, n) {
                return this.each(function () {
                    var e = We(this).data(Ve), t = c({}, r.Default, We(this).data(), "object" == typeof i && i);
                    if (e || (e = new r(this, t), We(this).data(Ve, e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i](n)
                    } else t.show && e.show(n)
                })
            }, s(r, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return Ue
                }
            }]), r
        }(), We(document).on(Qe.CLICK_DATA_API, nt.DATA_TOGGLE, function (e) {
            var t, i = this, n = wi.getSelectorFromElement(this);
            n && (t = We(n)[0]);
            var r = We(t).data(Ve) ? "toggle" : c({}, We(t).data(), We(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = We(t).one(Qe.SHOW, function (e) {
                e.isDefaultPrevented() || a.one(Qe.HIDDEN, function () {
                    We(i).is(":visible") && i.focus()
                })
            });
            rt._jQueryInterface.call(We(t), r, this)
        }), We.fn[Ye] = rt._jQueryInterface, We.fn[Ye].Constructor = rt, We.fn[Ye].noConflict = function () {
            return We.fn[Ye] = Xe, rt._jQueryInterface
        }, rt),
        ki = (st = "tooltip", lt = "." + (ot = "bs.tooltip"), ct = (at = t).fn[st], ut = "bs-tooltip", dt = new RegExp("(^|\\s)" + ut + "\\S+", "g"), ft = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(pt = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}),
            selector: !(ht = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, vt = "out", gt = {
            HIDE: "hide" + lt,
            HIDDEN: "hidden" + lt,
            SHOW: (mt = "show") + lt,
            SHOWN: "shown" + lt,
            INSERTED: "inserted" + lt,
            CLICK: "click" + lt,
            FOCUSIN: "focusin" + lt,
            FOCUSOUT: "focusout" + lt,
            MOUSEENTER: "mouseenter" + lt,
            MOUSELEAVE: "mouseleave" + lt
        }, yt = "fade", bt = "show", wt = ".tooltip-inner", xt = ".arrow", Et = "hover", Tt = "focus", Ct = "click", _t = "manual", St = function () {
            function n(e, t) {
                if (void 0 === u) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var e = n.prototype;
            return e.enable = function () {
                this._isEnabled = !0
            }, e.disable = function () {
                this._isEnabled = !1
            }, e.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var t = this.constructor.DATA_KEY, i = at(e.currentTarget).data(t);
                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), at(e.currentTarget).data(t, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (at(this.getTipElement()).hasClass(bt)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, e.dispose = function () {
                clearTimeout(this._timeout), at.removeData(this.element, this.constructor.DATA_KEY), at(this.element).off(this.constructor.EVENT_KEY), at(this.element).closest(".modal").off("hide.bs.modal"), this.tip && at(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function () {
                var t = this;
                if ("none" === at(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = at.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    at(this.element).trigger(e);
                    var i = at.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !i) return;
                    var n = this.getTipElement(), r = wi.getUID(this.constructor.NAME);
                    n.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && at(n).addClass(yt);
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
                        s = this._getAttachment(a);
                    this.addAttachmentClass(s);
                    var o = !1 === this.config.container ? document.body : at(this.config.container);
                    at(n).data(this.constructor.DATA_KEY, this), at.contains(this.element.ownerDocument.documentElement, this.tip) || at(n).appendTo(o), at(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, n, {
                        placement: s,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: xt},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), at(n).addClass(bt), "ontouchstart" in document.documentElement && at(document.body).children().on("mouseover", null, at.noop);
                    var l = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, at(t.element).trigger(t.constructor.Event.SHOWN), e === vt && t._leave(null, t)
                    };
                    if (at(this.tip).hasClass(yt)) {
                        var c = wi.getTransitionDurationFromElement(this.tip);
                        at(this.tip).one(wi.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, e.hide = function (e) {
                var t = this, i = this.getTipElement(), n = at.Event(this.constructor.Event.HIDE), r = function () {
                    t._hoverState !== mt && i.parentNode && i.parentNode.removeChild(i), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), at(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                };
                if (at(this.element).trigger(n), !n.isDefaultPrevented()) {
                    if (at(i).removeClass(bt), "ontouchstart" in document.documentElement && at(document.body).children().off("mouseover", null, at.noop), this._activeTrigger[Ct] = !1, this._activeTrigger[Tt] = !1, this._activeTrigger[Et] = !1, at(this.tip).hasClass(yt)) {
                        var a = wi.getTransitionDurationFromElement(i);
                        at(i).one(wi.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function () {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function (e) {
                at(this.getTipElement()).addClass(ut + "-" + e)
            }, e.getTipElement = function () {
                return this.tip = this.tip || at(this.config.template)[0], this.tip
            }, e.setContent = function () {
                var e = at(this.getTipElement());
                this.setElementContent(e.find(wt), this.getTitle()), e.removeClass(yt + " " + bt)
            }, e.setElementContent = function (e, t) {
                var i = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? i ? at(t).parent().is(e) || e.empty().append(t) : e.text(at(t).text()) : e[i ? "html" : "text"](t)
            }, e.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, e._getAttachment = function (e) {
                return pt[e.toUpperCase()]
            }, e._setListeners = function () {
                var n = this;
                this.config.trigger.split(" ").forEach(function (e) {
                    if ("click" === e) at(n.element).on(n.constructor.Event.CLICK, n.config.selector, function (e) {
                        return n.toggle(e)
                    }); else if (e !== _t) {
                        var t = e === Et ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                            i = e === Et ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                        at(n.element).on(t, n.config.selector, function (e) {
                            return n._enter(e)
                        }).on(i, n.config.selector, function (e) {
                            return n._leave(e)
                        })
                    }
                    at(n.element).closest(".modal").on("hide.bs.modal", function () {
                        return n.hide()
                    })
                }), this.config.selector ? this.config = c({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function (e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || at(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), at(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusin" === e.type ? Tt : Et] = !0), at(t.getTipElement()).hasClass(bt) || t._hoverState === mt ? t._hoverState = mt : (clearTimeout(t._timeout), t._hoverState = mt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === mt && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function (e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || at(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), at(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusout" === e.type ? Tt : Et] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = vt, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    t._hoverState === vt && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function (e) {
                return "number" == typeof (e = c({}, this.constructor.Default, at(this.element).data(), e)).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), wi.typeCheckConfig(st, e, this.constructor.DefaultType), e
            }, e._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function () {
                var e = at(this.getTipElement()), t = e.attr("class").match(dt);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function () {
                var e = this.getTipElement(), t = this.config.animation;
                null === e.getAttribute("x-placement") && (at(e).removeClass(yt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, n._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = at(this).data(ot), t = "object" == typeof i && i;
                    if ((e || !/dispose|hide/.test(i)) && (e || (e = new n(this, t), at(this).data(ot, e)), "string" == typeof i)) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return ft
                }
            }, {
                key: "NAME", get: function () {
                    return st
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return ot
                }
            }, {
                key: "Event", get: function () {
                    return gt
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return lt
                }
            }, {
                key: "DefaultType", get: function () {
                    return ht
                }
            }]), n
        }(), at.fn[st] = St._jQueryInterface, at.fn[st].Constructor = St, at.fn[st].noConflict = function () {
            return at.fn[st] = ct, St._jQueryInterface
        }, St),
        Ai = (At = "popover", It = "." + (Dt = "bs.popover"), Mt = (kt = t).fn[At], Pt = "bs-popover", Ot = new RegExp("(^|\\s)" + Pt + "\\S+", "g"), Nt = c({}, ki.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Lt = c({}, ki.DefaultType, {content: "(string|element|function)"}), zt = "fade", Ht = ".popover-header", Rt = ".popover-body", $t = {
            HIDE: "hide" + It,
            HIDDEN: "hidden" + It,
            SHOW: (jt = "show") + It,
            SHOWN: "shown" + It,
            INSERTED: "inserted" + It,
            CLICK: "click" + It,
            FOCUSIN: "focusin" + It,
            FOCUSOUT: "focusout" + It,
            MOUSEENTER: "mouseenter" + It,
            MOUSELEAVE: "mouseleave" + It
        }, qt = function (e) {
            var t, i;

            function n() {
                return e.apply(this, arguments) || this
            }

            i = e, (t = n).prototype = Object.create(i.prototype), (t.prototype.constructor = t).__proto__ = i;
            var r = n.prototype;
            return r.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function (e) {
                kt(this.getTipElement()).addClass(Pt + "-" + e)
            }, r.getTipElement = function () {
                return this.tip = this.tip || kt(this.config.template)[0], this.tip
            }, r.setContent = function () {
                var e = kt(this.getTipElement());
                this.setElementContent(e.find(Ht), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Rt), t), e.removeClass(zt + " " + jt)
            }, r._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function () {
                var e = kt(this.getTipElement()), t = e.attr("class").match(Ot);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, n._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = kt(this).data(Dt), t = "object" == typeof i ? i : null;
                    if ((e || !/destroy|hide/.test(i)) && (e || (e = new n(this, t), kt(this).data(Dt, e)), "string" == typeof i)) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return Nt
                }
            }, {
                key: "NAME", get: function () {
                    return At
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Dt
                }
            }, {
                key: "Event", get: function () {
                    return $t
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return It
                }
            }, {
                key: "DefaultType", get: function () {
                    return Lt
                }
            }]), n
        }(ki), kt.fn[At] = qt._jQueryInterface, kt.fn[At].Constructor = qt, kt.fn[At].noConflict = function () {
            return kt.fn[At] = Mt, qt._jQueryInterface
        }, qt), Di = (Bt = "scrollspy", Yt = "." + (Wt = "bs.scrollspy"), Vt = (Ft = t).fn[Bt], Gt = {
            offset: 10,
            method: "auto",
            target: ""
        }, Xt = {offset: "number", method: "string", target: "(string|element)"}, Ut = {
            ACTIVATE: "activate" + Yt,
            SCROLL: "scroll" + Yt,
            LOAD_DATA_API: "load" + Yt + ".data-api"
        }, Kt = "dropdown-item", Qt = "active", Jt = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, Zt = "offset", ei = "position", ti = function () {
            function i(e, t) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Jt.NAV_LINKS + "," + this._config.target + " " + Jt.LIST_ITEMS + "," + this._config.target + " " + Jt.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ft(this._scrollElement).on(Ut.SCROLL, function (e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }

            var e = i.prototype;
            return e.refresh = function () {
                var t = this, e = this._scrollElement === this._scrollElement.window ? Zt : ei,
                    r = "auto" === this._config.method ? e : this._config.method, a = r === ei ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ft.makeArray(Ft(this._selector)).map(function (e) {
                    var t, i = wi.getSelectorFromElement(e);
                    if (i && (t = Ft(i)[0]), t) {
                        var n = t.getBoundingClientRect();
                        if (n.width || n.height) return [Ft(t)[r]().top + a, i]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function () {
                Ft.removeData(this._element, Wt), Ft(this._scrollElement).off(Yt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function (e) {
                if ("string" != typeof (e = c({}, Gt, e)).target) {
                    var t = Ft(e.target).attr("id");
                    t || (t = wi.getUID(Bt), Ft(e.target).attr("id", t)), e.target = "#" + t
                }
                return wi.typeCheckConfig(Bt, e, Xt), e
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    i = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), i <= e) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, e._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var i = Ft(e.join(","));
                i.hasClass(Kt) ? (i.closest(Jt.DROPDOWN).find(Jt.DROPDOWN_TOGGLE).addClass(Qt), i.addClass(Qt)) : (i.addClass(Qt), i.parents(Jt.NAV_LIST_GROUP).prev(Jt.NAV_LINKS + ", " + Jt.LIST_ITEMS).addClass(Qt), i.parents(Jt.NAV_LIST_GROUP).prev(Jt.NAV_ITEMS).children(Jt.NAV_LINKS).addClass(Qt)), Ft(this._scrollElement).trigger(Ut.ACTIVATE, {relatedTarget: t})
            }, e._clear = function () {
                Ft(this._selector).filter(Jt.ACTIVE).removeClass(Qt)
            }, i._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = Ft(this).data(Wt);
                    if (e || (e = new i(this, "object" == typeof t && t), Ft(this).data(Wt, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default", get: function () {
                    return Gt
                }
            }]), i
        }(), Ft(window).on(Ut.LOAD_DATA_API, function () {
            for (var e = Ft.makeArray(Ft(Jt.DATA_SPY)), t = e.length; t--;) {
                var i = Ft(e[t]);
                ti._jQueryInterface.call(i, i.data())
            }
        }), Ft.fn[Bt] = ti._jQueryInterface, Ft.fn[Bt].Constructor = ti, Ft.fn[Bt].noConflict = function () {
            return Ft.fn[Bt] = Vt, ti._jQueryInterface
        }, ti), Ii = (ri = "." + (ni = "bs.tab"), ai = (ii = t).fn.tab, si = {
            HIDE: "hide" + ri,
            HIDDEN: "hidden" + ri,
            SHOW: "show" + ri,
            SHOWN: "shown" + ri,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }, oi = "dropdown-menu", li = "active", ci = "disabled", ui = "fade", di = "show", hi = ".dropdown", pi = ".nav, .list-group", fi = ".active", mi = "> li > .active", vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', gi = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = function () {
            function n(e) {
                this._element = e
            }

            var e = n.prototype;
            return e.show = function () {
                var i = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ii(this._element).hasClass(li) || ii(this._element).hasClass(ci))) {
                    var e, n, t = ii(this._element).closest(pi)[0], r = wi.getSelectorFromElement(this._element);
                    if (t) {
                        var a = "UL" === t.nodeName ? mi : fi;
                        n = (n = ii.makeArray(ii(t).find(a)))[n.length - 1]
                    }
                    var s = ii.Event(si.HIDE, {relatedTarget: this._element}), o = ii.Event(si.SHOW, {relatedTarget: n});
                    if (n && ii(n).trigger(s), ii(this._element).trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = ii(r)[0]), this._activate(this._element, t);
                        var l = function () {
                            var e = ii.Event(si.HIDDEN, {relatedTarget: i._element}),
                                t = ii.Event(si.SHOWN, {relatedTarget: n});
                            ii(n).trigger(e), ii(i._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function () {
                ii.removeData(this._element, ni), this._element = null
            }, e._activate = function (e, t, i) {
                var n = this, r = ("UL" === t.nodeName ? ii(t).find(mi) : ii(t).children(fi))[0],
                    a = i && r && ii(r).hasClass(ui), s = function () {
                        return n._transitionComplete(e, r, i)
                    };
                if (r && a) {
                    var o = wi.getTransitionDurationFromElement(r);
                    ii(r).one(wi.TRANSITION_END, s).emulateTransitionEnd(o)
                } else s()
            }, e._transitionComplete = function (e, t, i) {
                if (t) {
                    ii(t).removeClass(di + " " + li);
                    var n = ii(t.parentNode).find(yi)[0];
                    n && ii(n).removeClass(li), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (ii(e).addClass(li), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), wi.reflow(e), ii(e).addClass(di), e.parentNode && ii(e.parentNode).hasClass(oi)) {
                    var r = ii(e).closest(hi)[0];
                    r && ii(r).find(gi).addClass(li), e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, n._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = ii(this), t = e.data(ni);
                    if (t || (t = new n(this), e.data(ni, t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.0"
                }
            }]), n
        }(), ii(document).on(si.CLICK_DATA_API, vi, function (e) {
            e.preventDefault(), bi._jQueryInterface.call(ii(this), "show")
        }), ii.fn.tab = bi._jQueryInterface, ii.fn.tab.Constructor = bi, ii.fn.tab.noConflict = function () {
            return ii.fn.tab = ai, bi._jQueryInterface
        }, bi);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = wi, e.Alert = xi, e.Button = Ei, e.Carousel = Ti, e.Collapse = Ci, e.Dropdown = _i, e.Modal = Si, e.Popover = Ai, e.Scrollspy = Di, e.Tab = Ii, e.Tooltip = ki, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";
    var m = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, d = "undefined" == typeof window ? {
        document: m,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function M(e, t) {
        var i = [], n = 0;
        if (e && !t && e instanceof l) return e;
        if (e) if ("string" == typeof e) {
            var r, a, s = e.trim();
            if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) {
                var o = "div";
                for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), (a = m.createElement(o)).innerHTML = s, n = 0; n < a.childNodes.length; n += 1) i.push(a.childNodes[n])
            } else for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split("#")[1])], n = 0; n < r.length; n += 1) r[n] && i.push(r[n])
        } else if (e.nodeType || e === d || e === m) i.push(e); else if (0 < e.length && e[0].nodeType) for (n = 0; n < e.length; n += 1) i.push(e[n]);
        return new l(i)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    M.fn = l.prototype, M.Class = l, M.Dom7 = l;
    "resize scroll".split(" ");
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1) if (2 === i.length) this[n].setAttribute(e, t); else for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var r = i.getAttribute("data-" + e);
                return r || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n = e[0], a = e[1], s = e[2], r = e[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.unshift(e), M(t).is(a)) s.apply(t, i); else for (var n = M(t).parents(), r = 0; r < n.length; r += 1) M(n[r]).is(a) && s.apply(n[r], i)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.unshift(e), s.apply(this, t)
            }

            "function" == typeof e[1] && (n = (i = e)[0], s = i[1], r = i[2], a = void 0), r || (r = !1);
            for (var c, u = n.split(" "), d = 0; d < this.length; d += 1) {
                var h = this[d];
                if (a) for (c = 0; c < u.length; c += 1) h.dom7LiveListeners || (h.dom7LiveListeners = []), h.dom7LiveListeners.push({
                    type: n,
                    listener: s,
                    proxyListener: o
                }), h.addEventListener(u[c], o, r); else for (c = 0; c < u.length; c += 1) h.dom7Listeners || (h.dom7Listeners = []), h.dom7Listeners.push({
                    type: n,
                    listener: s,
                    proxyListener: l
                }), h.addEventListener(u[c], l, r)
            }
            return this
        }, off: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n = e[0], r = e[1], a = e[2], s = e[3];
            "function" == typeof e[1] && (n = (i = e)[0], a = i[1], s = i[2], r = void 0), s || (s = !1);
            for (var o = n.split(" "), l = 0; l < o.length; l += 1) for (var c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) {
                    if (u.dom7LiveListeners) for (var d = 0; d < u.dom7LiveListeners.length; d += 1) a ? u.dom7LiveListeners[d].listener === a && u.removeEventListener(o[l], u.dom7LiveListeners[d].proxyListener, s) : u.dom7LiveListeners[d].type === o[l] && u.removeEventListener(o[l], u.dom7LiveListeners[d].proxyListener, s)
                } else if (u.dom7Listeners) for (var h = 0; h < u.dom7Listeners.length; h += 1) a ? u.dom7Listeners[h].listener === a && u.removeEventListener(o[l], u.dom7Listeners[h].proxyListener, s) : u.dom7Listeners[h].type === o[l] && u.removeEventListener(o[l], u.dom7Listeners[h].proxyListener, s)
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), n = e[1], r = 0; r < i.length; r += 1) for (var a = 0; a < this.length; a += 1) {
                var s = void 0;
                try {
                    s = new d.CustomEvent(i[r], {detail: n, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (s = m.createEvent("Event")).initEvent(i[r], !0, !0), s.detail = n
                }
                this[a].dom7EventData = e.filter(function (e, t) {
                    return 0 < t
                }), this[a].dispatchEvent(s), this[a].dom7EventData = [], delete this[a].dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            var i, n = ["webkitTransitionEnd", "transitionend"], r = this;

            function a(e) {
                if (e.target === this) for (t.call(this, e), i = 0; i < n.length; i += 1) r.off(n[i], a)
            }

            if (t) for (i = 0; i < n.length; i += 1) r.on(n[i], a);
            return this
        }, outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (0 < this.length) {
                var e = this[0], t = e.getBoundingClientRect(), i = m.body, n = e.clientTop || i.clientTop || 0,
                    r = e.clientLeft || i.clientLeft || 0, a = e === d ? d.scrollY : e.scrollTop,
                    s = e === d ? d.scrollX : e.scrollLeft;
                return {top: t.top + a - n, left: t.left + s - r}
            }
            return null
        }, css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
                    return this
                }
                if (this[0]) return d.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, i, n = this[0];
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (t = M(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
                return !1
            }
            if (e === m) return n === m;
            if (e === d) return n === d;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, i = this.length;
            return new l(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            for (var n = 0; n < t.length; n += 1) {
                e = t[n];
                for (var r = 0; r < this.length; r += 1) if ("string" == typeof e) {
                    var a = m.createElement("div");
                    for (a.innerHTML = e; a.firstChild;) this[r].appendChild(a.firstChild)
                } else if (e instanceof l) for (var s = 0; s < e.length; s += 1) this[r].appendChild(e[s]); else this[r].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, i;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var n = m.createElement("div");
                for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
            } else if (e instanceof l) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && M(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        }, nextAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new l([]);
            for (; i.nextElementSibling;) {
                var n = i.nextElementSibling;
                e ? M(n).is(e) && t.push(n) : t.push(n), i = n
            }
            return new l(t)
        }, prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && M(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        }, prevAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new l([]);
            for (; i.previousElementSibling;) {
                var n = i.previousElementSibling;
                e ? M(n).is(e) && t.push(n) : t.push(n), i = n
            }
            return new l(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? M(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return M(a(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n;) e ? M(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
            return M(a(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
            return new l(t)
        }, children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].childNodes, r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && M(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r]);
            return new l(a(t))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n;
            for (i = 0; i < e.length; i += 1) {
                var r = M(e[i]);
                for (n = 0; n < r.length; n += 1) this[this.length] = r[n], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? d.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function (e) {
        M.fn[e] = t[e]
    });
    var e, i, n, O = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var i, n, r;
            void 0 === t && (t = "x");
            var a = d.getComputedStyle(e, null);
            return d.WebKitCSSMatrix ? (6 < (n = a.transform || a.webkitTransform).split(",").length && (n = n.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), r = new d.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = d.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = d.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        }, parseUrlQuery: function (e) {
            var t, i, n, r, a = {}, s = e || d.location.href;
            if ("string" == typeof s && s.length) for (r = (i = (s = -1 < s.indexOf("?") ? s.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; t < r; t += 1) n = i[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
            return a
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                var r = e[n];
                if (null != r) for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                    var l = a[s], c = Object.getOwnPropertyDescriptor(r, l);
                    void 0 !== c && c.enumerable && (O.isObject(i[l]) && O.isObject(r[l]) ? O.extend(i[l], r[l]) : !O.isObject(i[l]) && O.isObject(r[l]) ? (i[l] = {}, O.extend(i[l], r[l])) : i[l] = r[l])
                }
            }
            return i
        }
    }, N = (n = m.createElement("div"), {
        touch: d.Modernizr && !0 === d.Modernizr.touch || !!("ontouchstart" in d || d.DocumentTouch && m instanceof d.DocumentTouch),
        pointerEvents: !(!d.navigator.pointerEnabled && !d.PointerEvent),
        prefixedPointerEvents: !!d.navigator.msPointerEnabled,
        transition: (i = n.style, "transition" in i || "webkitTransition" in i || "MozTransition" in i),
        transforms3d: d.Modernizr && !0 === d.Modernizr.csstransforms3d || (e = n.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
        flexbox: function () {
            for (var e = n.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in d || "WebkitMutationObserver" in d,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                d.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in d
    }), r = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, s = {components: {configurable: !0}};
    r.prototype.on = function (e, t) {
        var i = this;
        return "function" != typeof t || e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
        }), i
    }, r.prototype.once = function (n, r) {
        var a = this;
        if ("function" != typeof r) return a;
        return a.on(n, function e() {
            for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
            r.apply(a, t), a.off(n, e)
        })
    }, r.prototype.off = function (e, n) {
        var r = this;
        return e.split(" ").forEach(function (i) {
            void 0 === n ? r.eventsListeners[i] = [] : r.eventsListeners[i].forEach(function (e, t) {
                e === n && r.eventsListeners[i].splice(t, 1)
            })
        }), r
    }, r.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, n, r, a = this;
        return a.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), r = a) : (i = e[0].events, n = e[0].data, r = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
            if (a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(r, n)
                })
            }
        })), a
    }, r.prototype.useModulesParams = function (i) {
        var n = this;
        n.modules && Object.keys(n.modules).forEach(function (e) {
            var t = n.modules[e];
            t.params && O.extend(i, t.params)
        })
    }, r.prototype.useModules = function (n) {
        void 0 === n && (n = {});
        var r = this;
        r.modules && Object.keys(r.modules).forEach(function (e) {
            var i = r.modules[e], t = n[e] || {};
            i.instance && Object.keys(i.instance).forEach(function (e) {
                var t = i.instance[e];
                r[e] = "function" == typeof t ? t.bind(r) : t
            }), i.on && r.on && Object.keys(i.on).forEach(function (e) {
                r.on(e, i.on[e])
            }), i.create && i.create.bind(r)(t)
        })
    }, s.components.set = function (e) {
        this.use && this.use(e)
    }, r.installModule = function (t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = t.name || Object.keys(n.prototype.modules).length + "_" + O.now();
        return (n.prototype.modules[r] = t).proto && Object.keys(t.proto).forEach(function (e) {
            n.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            n[e] = t.static[e]
        }), t.install && t.install.apply(n, e), n
    }, r.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(r, s);
    var o = {
        updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), O.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this, t = e.params, i = e.$wrapperEl, n = e.size, r = e.rtl, a = e.wrongRTL,
                s = i.children("." + e.params.slideClass),
                o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : s.length, l = [], c = [], u = [],
                d = t.slidesOffsetBefore;
            "function" == typeof d && (d = t.slidesOffsetBefore.call(e));
            var h = t.slidesOffsetAfter;
            "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
            var p = o, f = e.snapGrid.length, m = e.snapGrid.length, v = t.spaceBetween, g = -d, y = 0, b = 0;
            if (void 0 !== n) {
                var w, x;
                "string" == typeof v && 0 <= v.indexOf("%") && (v = parseFloat(v.replace("%", "")) / 100 * n), e.virtualSize = -v, r ? s.css({
                    marginLeft: "",
                    marginTop: ""
                }) : s.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (w = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
                for (var E, T = t.slidesPerColumn, C = w / T, _ = C - (t.slidesPerColumn * C - o), S = 0; S < o; S += 1) {
                    x = 0;
                    var k = s.eq(S);
                    if (1 < t.slidesPerColumn) {
                        var A = void 0, D = void 0, I = void 0;
                        "column" === t.slidesPerColumnFill ? (I = S - (D = Math.floor(S / T)) * T, (_ < D || D === _ && I === T - 1) && T <= (I += 1) && (I = 0, D += 1), A = D + I * w / T, k.css({
                            "-webkit-box-ordinal-group": A,
                            "-moz-box-ordinal-group": A,
                            "-ms-flex-order": A,
                            "-webkit-order": A,
                            order: A
                        })) : D = S - (I = Math.floor(S / C)) * C, k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", D).attr("data-swiper-row", I)
                    }
                    "none" !== k.css("display") && ("auto" === t.slidesPerView ? (x = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0), t.roundLengths && (x = Math.floor(x))) : (x = (n - (t.slidesPerView - 1) * v) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), s[S] && (e.isHorizontal() ? s[S].style.width = x + "px" : s[S].style.height = x + "px")), s[S] && (s[S].swiperSlideSize = x), u.push(x), t.centeredSlides ? (g = g + x / 2 + y / 2 + v, 0 === y && 0 !== S && (g = g - n / 2 - v), 0 === S && (g = g - n / 2 - v), Math.abs(g) < .001 && (g = 0), b % t.slidesPerGroup == 0 && l.push(g), c.push(g)) : (b % t.slidesPerGroup == 0 && l.push(g), c.push(g), g = g + x + v), e.virtualSize += x + v, y = x, b += 1)
                }
                if (e.virtualSize = Math.max(e.virtualSize, n) + h, r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: e.virtualSize + t.spaceBetween + "px"}), N.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (x + t.spaceBetween) * w, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    E = [];
                    for (var M = 0; M < l.length; M += 1) l[M] < e.virtualSize + l[0] && E.push(l[M]);
                    l = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var P = 0; P < l.length; P += 1) l[P] <= e.virtualSize - n && E.push(l[P]);
                    l = E, 1 < Math.floor(e.virtualSize - n) - Math.floor(l[l.length - 1]) && l.push(e.virtualSize - n)
                }
                0 === l.length && (l = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? s.css({marginLeft: v + "px"}) : s.css({marginRight: v + "px"}) : s.css({marginBottom: v + "px"})), O.extend(e, {
                    slides: s,
                    snapGrid: l,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), o !== p && e.emit("slidesLengthChange"), l.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }, updateAutoHeight: function () {
            var e, t = [], i = 0;
            if ("auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView) for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                var n = this.activeIndex + e;
                if (n > this.slides.length) break;
                t.push(this.slides.eq(n)[0])
            } else t.push(this.slides.eq(this.activeIndex)[0]);
            for (e = 0; e < t.length; e += 1) if (void 0 !== t[e]) {
                var r = t[e].offsetHeight;
                i = i < r ? r : i
            }
            i && this.$wrapperEl.css("height", i + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params, i = this.slides, n = this.rtl;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                n && (r = e), i.removeClass(t.slideVisibleClass);
                for (var a = 0; a < i.length; a += 1) {
                    var s = i[a],
                        o = (r + (t.centeredSlides ? this.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(r - s.swiperSlideOffset), c = l + this.slidesSizesGrid[a];
                        (0 <= l && l < this.size || 0 < c && c <= this.size || l <= 0 && c >= this.size) && i.eq(a).addClass(t.slideVisibleClass)
                    }
                    s.progress = n ? -o : o
                }
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this, i = t.params, n = t.maxTranslate() - t.minTranslate(), r = t.progress, a = t.isBeginning,
                s = t.isEnd, o = a, l = s;
            0 === n ? s = a = !(r = 0) : (a = (r = (e - t.minTranslate()) / n) <= 0, s = 1 <= r), O.extend(t, {
                progress: r,
                isBeginning: a,
                isEnd: s
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
        }, updateSlidesClasses: function () {
            var e, t = this.slides, i = this.params, n = this.$wrapperEl, r = this.activeIndex, a = this.realIndex,
                s = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = s ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, i = this, n = i.rtl ? i.translate : -i.translate, r = i.slidesGrid, a = i.snapGrid, s = i.params,
                o = i.activeIndex, l = i.realIndex, c = i.snapIndex, u = e;
            if (void 0 === u) {
                for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? n >= r[d] && n < r[d + 1] - (r[d + 1] - r[d]) / 2 ? u = d : n >= r[d] && n < r[d + 1] && (u = d + 1) : n >= r[d] && (u = d);
                s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if ((t = 0 <= a.indexOf(n) ? a.indexOf(n) : Math.floor(u / s.slidesPerGroup)) >= a.length && (t = a.length - 1), u !== o) {
                var h = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                O.extend(i, {
                    snapIndex: t,
                    realIndex: h,
                    previousIndex: o,
                    activeIndex: u
                }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), i.emit("slideChange")
            } else t !== c && (i.snapIndex = t, i.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this, i = t.params, n = M(e.target).closest("." + i.slideClass)[0], r = !1;
            if (n) for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === n && (r = !0);
            if (!n || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(M(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = M(n).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    }, c = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtl, n = this.translate, r = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -n : n;
            var a = O.getTranslate(r[0], e);
            return i && (a = -a), a || 0
        }, setTranslate: function (e, t) {
            var i = this, n = i.rtl, r = i.params, a = i.$wrapperEl, s = i.progress, o = 0, l = 0;
            i.isHorizontal() ? o = n ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (N.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), i.translate = i.isHorizontal() ? o : l;
            var c = i.maxTranslate() - i.minTranslate();
            (0 === c ? 0 : (e - i.minTranslate()) / c) !== s && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    }, u = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, n = this.params, r = this.previousIndex;
            n.autoHeight && this.updateAutoHeight();
            var a = t;
            if (a || (a = r < i ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), e && i !== r) {
                if ("reset" === a) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, n = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var r = t;
            if (r || (r = n < i ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
                if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    }, h = {
        slideTo: function (e, t, i, n) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this, a = e;
            a < 0 && (a = 0);
            var s = r.params, o = r.snapGrid, l = r.slidesGrid, c = r.previousIndex, u = r.activeIndex, d = r.rtl,
                h = r.$wrapperEl;
            if (r.animating && s.preventIntercationOnTransition) return !1;
            var p = Math.floor(a / s.slidesPerGroup);
            p >= o.length && (p = o.length - 1), (u || s.initialSlide || 0) === (c || 0) && i && r.emit("beforeSlideChangeStart");
            var f, m = -o[p];
            if (r.updateProgress(m), s.normalizeSlideIndex) for (var v = 0; v < l.length; v += 1) -Math.floor(100 * m) >= Math.floor(100 * l[v]) && (a = v);
            if (r.initialized && a !== u) {
                if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (u || 0) !== a) return !1
            }
            return f = u < a ? "next" : a < u ? "prev" : "reset", d && -m === r.translate || !d && m === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1) : (0 !== t && N.transition ? (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.animating || (r.animating = !0, h.transitionEnd(function () {
                r && !r.destroyed && r.transitionEnd(i, f)
            }))) : (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.transitionEnd(i, f)), !0)
        }, slideToLoop: function (e, t, i, n) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = e;
            return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var n = this.params, r = this.animating;
            return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var n = this.params, r = this.animating;
            return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
        }, slideReset: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            return this.slideTo(this.activeIndex, e, t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, n = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(M(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), O.nextTick(function () {
                    t.slideTo(a)
                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), O.nextTick(function () {
                    t.slideTo(a)
                })) : t.slideTo(a)
            } else t.slideTo(a)
        }
    }, p = {
        loopCreate: function () {
            var n = this, e = n.params, t = n.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var r = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var i = e.slidesPerGroup - r.length % e.slidesPerGroup;
                if (i !== e.slidesPerGroup) {
                    for (var a = 0; a < i; a += 1) {
                        var s = M(m.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(s)
                    }
                    r = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length), n.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), n.loopedSlides += e.loopAdditionalSlides, n.loopedSlides > r.length && (n.loopedSlides = r.length);
            var o = [], l = [];
            r.each(function (e, t) {
                var i = M(t);
                e < n.loopedSlides && l.push(t), e < r.length && e >= r.length - n.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e)
            });
            for (var c = 0; c < l.length; c += 1) t.append(M(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var u = o.length - 1; 0 <= u; u -= 1) t.prepend(M(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
        }, loopFix: function () {
            var e, t = this, i = t.params, n = t.activeIndex, r = t.slides, a = t.loopedSlides, s = t.allowSlidePrev,
                o = t.allowSlideNext, l = t.snapGrid, c = t.rtl;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var u = -l[n] - t.getTranslate();
            n < a ? (e = r.length - 3 * a + n, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u)) : ("auto" === i.slidesPerView && 2 * a <= n || n > r.length - 2 * i.slidesPerView) && (e = -r.length + n + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u));
            t.allowSlidePrev = s, t.allowSlideNext = o
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    }, f = {
        setGrabCursor: function (e) {
            if (!N.touch && this.params.simulateTouch) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            N.touch || (this.el.style.cursor = "")
        }
    }, v = {
        appendSlide: function (e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && N.observer || this.update()
        }, prependSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, n = this.activeIndex;
            t.loop && this.loopDestroy();
            var r = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                r = n + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && N.observer || this.update(), this.slideTo(r, 0, !1)
        }, removeSlide: function (e) {
            var t = this, i = t.params, n = t.$wrapperEl, r = t.activeIndex;
            i.loop && (t.loopDestroy(), t.slides = n.children("." + i.slideClass));
            var a, s = r;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                s = Math.max(s, 0)
            } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
            i.loop && t.loopCreate(), i.observer && N.observer || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, g = function () {
        var e = d.navigator.userAgent, t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: d.cordova || d.phonegap,
                phonegap: d.cordova || d.phonegap
            }, i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            r = e.match(/(iPad).*OS\s([\d_]+)/), a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (r || s || a) && (t.os = "ios", t.ios = !0), s && !a && (t.osVersion = s[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            var o = t.osVersion.split("."), l = m.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = d.devicePixelRatio || 1, t
    }(), y = function (e) {
        var t = this, i = t.touchEventsData, n = t.params, r = t.touches;
        if (!t.animating || !n.preventIntercationOnTransition) {
            var a = e;
            if (a.originalEvent && (a = a.originalEvent), i.isTouchEvent = "touchstart" === a.type, (i.isTouchEvent || !("which" in a) || 3 !== a.which) && (!i.isTouched || !i.isMoved)) if (n.noSwiping && M(a.target).closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) t.allowClick = !0; else if (!n.swipeHandler || M(a).closest(n.swipeHandler)[0]) {
                r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                var s = r.currentX, o = r.currentY;
                if (!(g.ios && !g.cordova && n.iOSEdgeSwipeDetection && s <= n.iOSEdgeSwipeThreshold && s >= d.screen.width - n.iOSEdgeSwipeThreshold)) {
                    if (O.extend(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), r.startX = s, r.startY = o, i.touchStartTime = O.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < n.threshold && (i.allowThresholdMove = !1), "touchstart" !== a.type) {
                        var l = !0;
                        M(a.target).is(i.formElements) && (l = !1), m.activeElement && M(m.activeElement).is(i.formElements) && m.activeElement !== a.target && m.activeElement.blur(), l && t.allowTouchMove && a.preventDefault()
                    }
                    t.emit("touchStart", a)
                }
            }
        }
    }, b = function (e) {
        var t = this, i = t.touchEventsData, n = t.params, r = t.touches, a = t.rtl, s = e;
        if (s.originalEvent && (s = s.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== s.type) {
                var o = "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX,
                    l = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY;
                if (s.preventedByNestedSwiper) return r.startX = o, void (r.startY = l);
                if (!t.allowTouchMove) return t.allowClick = !1, void (i.isTouched && (O.extend(r, {
                    startX: o,
                    startY: l,
                    currentX: o,
                    currentY: l
                }), i.touchStartTime = O.now()));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (t.isVertical()) {
                    if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                } else if (o < r.startX && t.translate <= t.maxTranslate() || o > r.startX && t.translate >= t.minTranslate()) return;
                if (i.isTouchEvent && m.activeElement && s.target === m.activeElement && M(s.target).is(i.formElements)) return i.isMoved = !0, void (t.allowClick = !1);
                if (i.allowTouchCallbacks && t.emit("touchMove", s), !(s.targetTouches && 1 < s.targetTouches.length)) {
                    r.currentX = o, r.currentY = l;
                    var c, u = r.currentX - r.startX, d = r.currentY - r.startY;
                    if (void 0 === i.isScrolling) t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : 25 <= u * u + d * d && (c = 180 * Math.atan2(Math.abs(d), Math.abs(u)) / Math.PI, i.isScrolling = t.isHorizontal() ? c > n.touchAngle : 90 - c > n.touchAngle);
                    if (i.isScrolling && t.emit("touchMoveOpposite", s), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                        t.allowClick = !1, s.preventDefault(), n.touchMoveStopPropagation && !n.nested && s.stopPropagation(), i.isMoved || (n.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", s)), t.emit("sliderMove", s), i.isMoved = !0;
                        var h = t.isHorizontal() ? u : d;
                        r.diff = h, h *= n.touchRatio, a && (h = -h), t.swipeDirection = 0 < h ? "prev" : "next", i.currentTranslate = h + i.startTranslate;
                        var p = !0, f = n.resistanceRatio;
                        if (n.touchReleaseOnEdges && (f = 0), 0 < h && i.currentTranslate > t.minTranslate() ? (p = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + h, f))) : h < 0 && i.currentTranslate < t.maxTranslate() && (p = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - h, f))), p && (s.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 0 < n.threshold) {
                            if (!(Math.abs(h) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                        }
                        n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: r[t.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: r[t.isHorizontal() ? "currentX" : "currentY"],
                            time: O.now()
                        })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
                    }
                }
            }
        } else i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", s)
    }, w = function (e) {
        var t = this, i = t.touchEventsData, n = t.params, r = t.touches, a = t.rtl, s = t.$wrapperEl, o = t.slidesGrid,
            l = t.snapGrid, c = e;
        if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var u, d = O.now(), h = d - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), h < 300 && 300 < d - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = O.nextTick(function () {
            t && !t.destroyed && t.emit("click", c)
        }, 300)), h < 300 && d - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = O.now(), O.nextTick(function () {
            t.destroyed || (t.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (n.freeModeMomentum) {
                if (1 < i.velocities.length) {
                    var p = i.velocities.pop(), f = i.velocities.pop(), m = p.position - f.position,
                        v = p.time - f.time;
                    t.velocity = m / v, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < O.now() - p.time) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var g = 1e3 * n.freeModeMomentumRatio, y = t.velocity * g, b = t.translate + y;
                a && (b = -b);
                var w, x = !1, E = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                if (b < t.maxTranslate()) n.freeModeMomentumBounce ? (b + t.maxTranslate() < -E && (b = t.maxTranslate() - E), w = t.maxTranslate(), x = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(); else if (b > t.minTranslate()) n.freeModeMomentumBounce ? (b - t.minTranslate() > E && (b = t.minTranslate() + E), w = t.minTranslate(), x = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(); else if (n.freeModeSticky) {
                    for (var T, C = 0; C < l.length; C += 1) if (l[C] > -b) {
                        T = C;
                        break
                    }
                    b = -(b = Math.abs(l[T] - b) < Math.abs(l[T - 1] - b) || "next" === t.swipeDirection ? l[T] : l[T - 1])
                }
                if (0 !== t.velocity) g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity); else if (n.freeModeSticky) return void t.slideReset();
                n.freeModeMomentumBounce && x ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(w), s.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd()
                    }))
                })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
            }
            (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
            for (var _ = 0, S = t.slidesSizesGrid[0], k = 0; k < o.length; k += n.slidesPerGroup) void 0 !== o[k + n.slidesPerGroup] ? u >= o[k] && u < o[k + n.slidesPerGroup] && (S = o[(_ = k) + n.slidesPerGroup] - o[k]) : u >= o[k] && (_ = k, S = o[o.length - 1] - o[o.length - 2]);
            var A = (u - o[_]) / S;
            if (h > n.longSwipesMs) {
                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (A >= n.longSwipesRatio ? t.slideTo(_ + n.slidesPerGroup) : t.slideTo(_)), "prev" === t.swipeDirection && (A > 1 - n.longSwipesRatio ? t.slideTo(_ + n.slidesPerGroup) : t.slideTo(_))
            } else {
                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(_ + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(_)
            }
        }
    }, x = function () {
        var e = this, t = e.params, i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var n = e.allowSlideNext, r = e.allowSlidePrev;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = r, e.allowSlideNext = n
        }
    }, E = function (e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    };
    var T, C = {
        attachEvents: function () {
            var e = this, t = e.params, i = e.touchEvents, n = e.el, r = e.wrapperEl;
            e.onTouchStart = y.bind(e), e.onTouchMove = b.bind(e), e.onTouchEnd = w.bind(e), e.onClick = E.bind(e);
            var a = "container" === t.touchEventsTarget ? n : r, s = !!t.nested;
            if (N.touch || !N.pointerEvents && !N.prefixedPointerEvents) {
                if (N.touch) {
                    var o = !("touchstart" !== i.start || !N.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.addEventListener(i.start, e.onTouchStart, o), a.addEventListener(i.move, e.onTouchMove, N.passiveListener ? {
                        passive: !1,
                        capture: s
                    } : s), a.addEventListener(i.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !N.touch && g.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), m.addEventListener("mousemove", e.onTouchMove, s), m.addEventListener("mouseup", e.onTouchEnd, !1))
            } else a.addEventListener(i.start, e.onTouchStart, !1), m.addEventListener(i.move, e.onTouchMove, s), m.addEventListener(i.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", x)
        }, detachEvents: function () {
            var e = this, t = e.params, i = e.touchEvents, n = e.el, r = e.wrapperEl,
                a = "container" === t.touchEventsTarget ? n : r, s = !!t.nested;
            if (N.touch || !N.pointerEvents && !N.prefixedPointerEvents) {
                if (N.touch) {
                    var o = !("onTouchStart" !== i.start || !N.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.removeEventListener(i.start, e.onTouchStart, o), a.removeEventListener(i.move, e.onTouchMove, s), a.removeEventListener(i.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !N.touch && g.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), m.removeEventListener("mousemove", e.onTouchMove, s), m.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else a.removeEventListener(i.start, e.onTouchStart, !1), m.removeEventListener(i.move, e.onTouchMove, s), m.removeEventListener(i.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", x)
        }
    }, _ = {
        setBreakpoint: function () {
            var e = this, t = e.activeIndex, i = e.loopedSlides;
            void 0 === i && (i = 0);
            var n = e.params, r = n.breakpoints;
            if (r && (!r || 0 !== Object.keys(r).length)) {
                var a = e.getBreakpoint(r);
                if (a && e.currentBreakpoint !== a) {
                    var s = a in r ? r[a] : e.originalParams, o = n.loop && s.slidesPerView !== n.slidesPerView;
                    O.extend(e.params, s), O.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), e.currentBreakpoint = a, o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", s)
                }
            }
        }, getBreakpoint: function (e) {
            if (e) {
                var t = !1, i = [];
                Object.keys(e).forEach(function (e) {
                    i.push(e)
                }), i.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var n = 0; n < i.length; n += 1) {
                    var r = i[n];
                    r >= d.innerWidth && !t && (t = r)
                }
                return t || "max"
            }
        }
    }, P = {
        isIE: !!d.navigator.userAgent.match(/Trident/g) || !!d.navigator.userAgent.match(/MSIE/g),
        isSafari: (T = d.navigator.userAgent.toLowerCase(), 0 <= T.indexOf("safari") && T.indexOf("chrome") < 0 && T.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(d.navigator.userAgent)
    };
    var S = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, k = {
            update: o,
            translate: c,
            transition: u,
            slide: h,
            loop: p,
            grabCursor: f,
            manipulation: v,
            events: C,
            breakpoints: _,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames, i = this.params, e = this.rtl, n = this.$el, r = [];
                    r.push(i.direction), i.freeMode && r.push("free-mode"), N.flexbox || r.push("no-flexbox"), i.autoHeight && r.push("autoheight"), e && r.push("rtl"), 1 < i.slidesPerColumn && r.push("multirow"), g.android && r.push("android"), g.ios && r.push("ios"), P.isIE && (N.pointerEvents || N.prefixedPointerEvents) && r.push("wp8-" + i.direction), r.forEach(function (e) {
                        t.push(i.containerModifierClass + e)
                    }), n.addClass(t.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, i, n, r, a) {
                    var s;

                    function o() {
                        a && a()
                    }

                    e.complete && r ? o() : t ? ((s = new d.Image).onload = o, s.onerror = o, n && (s.sizes = n), i && (s.srcset = i), t && (s.src = t)) : o()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var n = e.imagesToLoad[i];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, A = {}, D = function (h) {
            function p() {
                for (var e, r, t, i = [], n = arguments.length; n--;) i[n] = arguments[n];
                1 === i.length && i[0].constructor && i[0].constructor === Object ? r = i[0] : (e = (t = i)[0], r = t[1]);
                r || (r = {}), r = O.extend({}, r), e && !r.el && (r.el = e), h.call(this, r), Object.keys(k).forEach(function (t) {
                    Object.keys(k[t]).forEach(function (e) {
                        p.prototype[e] || (p.prototype[e] = k[t][e])
                    })
                });
                var a = this;
                void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function (e) {
                    var t = a.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0], n = t.params[i];
                        if ("object" != typeof n) return;
                        if (!(i in r && "enabled" in n)) return;
                        !0 === r[i] && (r[i] = {enabled: !0}), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {enabled: !1})
                    }
                });
                var s = O.extend({}, S);
                a.useModulesParams(s), a.params = O.extend({}, s, A, r), a.originalParams = O.extend({}, a.params), a.passedParams = O.extend({}, r);
                var o = (a.$ = M)(a.params.el);
                if (e = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function (e, t) {
                            var i = O.extend({}, r, {el: t});
                            l.push(new p(i))
                        }), l
                    }
                    e.swiper = a, o.data("swiper", a);
                    var c, u, d = o.children("." + a.params.wrapperClass);
                    return O.extend(a, {
                        $el: o,
                        el: e,
                        $wrapperEl: d,
                        wrapperEl: d[0],
                        classNames: [],
                        slides: M(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === a.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === a.params.direction
                        },
                        rtl: "horizontal" === a.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === d.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents: (c = ["touchstart", "touchmove", "touchend"], u = ["mousedown", "mousemove", "mouseup"], N.pointerEvents ? u = ["pointerdown", "pointermove", "pointerup"] : N.prefixedPointerEvents && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), a.touchEventsTouch = {
                            start: c[0],
                            move: c[1],
                            end: c[2]
                        }, a.touchEventsDesktop = {
                            start: u[0],
                            move: u[1],
                            end: u[2]
                        }, N.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: O.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), a.useModules(), a.params.init && a.init(), a
                }
            }

            h && (p.__proto__ = h);
            var e = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return ((p.prototype = Object.create(h && h.prototype)).constructor = p).prototype.slidesPerViewDynamic = function () {
                var e = this.params, t = this.slides, i = this.slidesGrid, n = this.size, r = this.activeIndex, a = 1;
                if (e.centeredSlides) {
                    for (var s, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !s && (a += 1, n < (o += t[l].swiperSlideSize) && (s = !0));
                    for (var c = r - 1; 0 <= c; c -= 1) t[c] && !s && (a += 1, n < (o += t[c].swiperSlideSize) && (s = !0))
                } else for (var u = r + 1; u < t.length; u += 1) i[u] - i[r] < n && (a += 1);
                return a
            }, p.prototype.update = function () {
                var i = this;
                i && !i.destroyed && (i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (e(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || e(), i.emit("update"));

                function e() {
                    var e = i.rtl ? -1 * i.translate : i.translate,
                        t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                    i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses()
                }
            }, p.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, p.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, n = i.params, r = i.$el, a = i.$wrapperEl, s = i.slides;
                i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), O.deleteProps(i)), i.destroyed = !0
            }, p.extendDefaults = function (e) {
                O.extend(A, e)
            }, e.extendedDefaults.get = function () {
                return A
            }, e.defaults.get = function () {
                return S
            }, e.Class.get = function () {
                return h
            }, e.$.get = function () {
                return M
            }, Object.defineProperties(p, e), p
        }(r), I = {name: "device", proto: {device: g}, static: {device: g}},
        L = {name: "support", proto: {support: N}, static: {support: N}},
        z = {name: "browser", proto: {browser: P}, static: {browser: P}}, j = {
            name: "resize", create: function () {
                var e = this;
                O.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    d.addEventListener("resize", this.resize.resizeHandler), d.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    d.removeEventListener("resize", this.resize.resizeHandler), d.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, H = {
            func: d.MutationObserver || d.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, n = new (0, H.func)(function (e) {
                    e.forEach(function (e) {
                        i.emit("observerUpdate", e)
                    })
                });
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(n)
            }, init: function () {
                if (N.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {childList: !1}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, R = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                O.extend(this, {
                    observer: {
                        init: H.init.bind(this),
                        attach: H.attach.bind(this),
                        destroy: H.destroy.bind(this),
                        observers: []
                    }
                })
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, $ = {
            update: function (e) {
                var t = this, i = t.params, n = i.slidesPerView, r = i.slidesPerGroup, a = i.centeredSlides, s = t.virtual,
                    o = s.from, l = s.to, c = s.slides, u = s.slidesGrid, d = s.renderSlide, h = s.offset;
                t.updateActiveIndex();
                var p, f, m, v = t.activeIndex || 0;
                p = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top", a ? (f = Math.floor(n / 2) + r, m = Math.floor(n / 2) + r) : (f = n + (r - 1), m = r);
                var g = Math.max((v || 0) - m, 0), y = Math.min((v || 0) + f, c.length - 1),
                    b = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);

                function w() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (O.extend(t.virtual, {
                    from: g,
                    to: y,
                    offset: b,
                    slidesGrid: t.slidesGrid
                }), o === g && l === y && !e) return t.slidesGrid !== u && b !== h && t.slides.css(p, b + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: b,
                    from: g,
                    to: y,
                    slides: function () {
                        for (var e = [], t = g; t <= y; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void w();
                var x = [], E = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var T = o; T <= l; T += 1) (T < g || y < T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
                for (var C = 0; C < c.length; C += 1) g <= C && C <= y && (void 0 === l || e ? E.push(C) : (l < C && E.push(C), C < o && x.push(C)));
                E.forEach(function (e) {
                    t.$wrapperEl.append(d(c[e], e))
                }), x.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(d(c[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(p, b + "px"), w()
            }, renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var n = i.renderSlide ? M(i.renderSlide.call(this, e, t)) : M('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = n), n
            }, appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            }, prependSlide: function (e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache, i = {};
                    Object.keys(t).forEach(function (e) {
                        i[e + 1] = t[e]
                    }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        }, q = {
            name: "virtual",
            params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
            create: function () {
                O.extend(this, {
                    virtual: {
                        update: $.update.bind(this),
                        appendSlide: $.appendSlide.bind(this),
                        prependSlide: $.prependSlide.bind(this),
                        renderSlide: $.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {watchSlidesProgress: !0};
                        O.extend(this.params, e), O.extend(this.originalParams, e), this.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, F = {
            handle: function (e) {
                var t = this, i = e;
                i.originalEvent && (i = i.originalEvent);
                var n = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === n || t.isVertical() && 40 === n)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === n || t.isVertical() && 38 === n)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === n || 39 === n || 38 === n || 40 === n)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var a = d.innerWidth, s = d.innerHeight, o = t.$el.offset();
                        t.rtl && (o.left -= t.$el[0].scrollLeft);
                        for (var l = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]], c = 0; c < l.length; c += 1) {
                            var u = l[c];
                            0 <= u[0] && u[0] <= a && 0 <= u[1] && u[1] <= s && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== n && 39 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === n && !t.rtl || 37 === n && t.rtl) && t.slideNext(), (37 === n && !t.rtl || 39 === n && t.rtl) && t.slidePrev()) : (38 !== n && 40 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === n && t.slideNext(), 38 === n && t.slidePrev()), t.emit("keyPress", n)
                }
            }, enable: function () {
                this.keyboard.enabled || (M(m).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (M(m).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, B = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                O.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: F.enable.bind(this),
                        disable: F.disable.bind(this),
                        handle: F.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var W = {
        lastScrollTime: O.now(), event: -1 < d.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
            var e = "onwheel", t = e in m;
            if (!t) {
                var i = m.createElement("div");
                i.setAttribute(e, "return;"), t = "function" == typeof i[e]
            }
            return !t && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (t = m.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel", normalize: function (e) {
            var t = 0, i = 0, n = 0, r = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: n,
                pixelY: r
            }
        }, handle: function (e) {
            var t = e, i = this, n = i.params.mousewheel;
            t.originalEvent && (t = t.originalEvent);
            var r = 0, a = i.rtl ? -1 : 1, s = W.normalize(t);
            if (n.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
                r = s.pixelX * a
            } else {
                if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
                r = s.pixelY
            } else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
            if (0 === r) return !0;
            if (n.invert && (r = -r), i.params.freeMode) {
                var o = i.getTranslate() + r * n.sensitivity, l = i.isBeginning, c = i.isEnd;
                if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), i.setTransition(0), i.setTranslate(o), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!l && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = O.nextTick(function () {
                    i.slideReset()
                }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), o === i.minTranslate() || o === i.maxTranslate()) return !0
            } else {
                if (60 < O.now() - i.mousewheel.lastScrollTime) if (r < 0) if (i.isEnd && !i.params.loop || i.animating) {
                    if (n.releaseOnEdges) return !0
                } else i.slideNext(), i.emit("scroll", t); else if (i.isBeginning && !i.params.loop || i.animating) {
                    if (n.releaseOnEdges) return !0
                } else i.slidePrev(), i.emit("scroll", t);
                i.mousewheel.lastScrollTime = (new d.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }, enable: function () {
            if (!W.event) return !1;
            if (this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = M(this.params.mousewheel.eventsTarged)), e.on(W.event, this.mousewheel.handle), this.mousewheel.enabled = !0
        }, disable: function () {
            if (!W.event) return !1;
            if (!this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = M(this.params.mousewheel.eventsTarged)), e.off(W.event, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
        }
    }, Y = {
        update: function () {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, n = t.$prevEl;
                n && 0 < n.length && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && 0 < i.length && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        }, init: function () {
            var e, t, i = this, n = i.params.navigation;
            (n.nextEl || n.prevEl) && (n.nextEl && (e = M(n.nextEl), i.params.uniqueNavElements && "string" == typeof n.nextEl && 1 < e.length && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))), n.prevEl && (t = M(n.prevEl), i.params.uniqueNavElements && "string" == typeof n.prevEl && 1 < t.length && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))), e && 0 < e.length && e.on("click", function (e) {
                e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
            }), t && 0 < t.length && t.on("click", function (e) {
                e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
            }), O.extend(i.navigation, {$nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0]}))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
        }
    }, V = {
        update: function () {
            var e = this, t = e.rtl, r = e.params.pagination;
            if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a, i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    n = e.pagination.$el,
                    s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (a -= i - 2 * e.loopedSlides), s - 1 < a && (a -= s), a < 0 && "bullets" !== e.params.paginationType && (a = s + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, c, u = e.pagination.bullets;
                    if (r.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"), 1 < r.dynamicMainBullets && void 0 !== e.previousIndex && (a > e.previousIndex && e.pagination.dynamicBulletIndex < r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex += 1 : a < e.previousIndex && 0 < e.pagination.dynamicBulletIndex && (e.pagination.dynamicBulletIndex -= 1)), o = a - e.pagination.dynamicBulletIndex, c = ((l = o + (r.dynamicMainBullets - 1)) + o) / 2), u.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"), 1 < n.length) u.each(function (e, t) {
                        var i = M(t), n = i.index();
                        n === a && i.addClass(r.bulletActiveClass), r.dynamicBullets && (o <= n && n <= l && i.addClass(r.bulletActiveClass + "-main"), n === o && i.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), n === l && i.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
                    }); else if (u.eq(a).addClass(r.bulletActiveClass), r.dynamicBullets) {
                        for (var d = u.eq(o), h = u.eq(l), p = o; p <= l; p += 1) u.eq(p).addClass(r.bulletActiveClass + "-main");
                        d.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), h.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
                    }
                    if (r.dynamicBullets) {
                        var f = Math.min(u.length, r.dynamicMainBullets + 4),
                            m = (e.pagination.bulletSize * f - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                            v = t ? "right" : "left";
                        u.css(e.isHorizontal() ? v : "top", m + "px")
                    }
                }
                if ("fraction" === r.type && (n.find("." + r.currentClass).text(a + 1), n.find("." + r.totalClass).text(s)), "progressbar" === r.type) {
                    var g = (a + 1) / s, y = g, b = 1;
                    e.isHorizontal() || (b = g, y = 1), n.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + y + ") scaleY(" + b + ")").transition(e.params.speed)
                }
                "custom" === r.type && r.renderCustom ? (n.html(r.renderCustom(e, a + 1, s)), e.emit("paginationRender", e, n[0])) : e.emit("paginationUpdate", e, n[0]), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    n = e.pagination.$el, r = "";
                if ("bullets" === t.type) {
                    for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    n.html(r), e.pagination.bullets = n.find("." + t.bulletClass)
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var i = this, e = i.params.pagination;
            if (e.el) {
                var t = M(e.el);
                0 !== t.length && (i.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), i.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
                    e.preventDefault();
                    var t = M(this).index() * i.params.slidesPerGroup;
                    i.params.loop && (t += i.loopedSlides), i.slideTo(t)
                }), O.extend(i.pagination, {$el: t, el: t[0]}))
            }
        }, destroy: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }, G = {
        setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, i = e.rtl, n = e.progress, r = t.dragSize, a = t.trackSize, s = t.$dragEl,
                    o = t.$el, l = e.params.scrollbar, c = r, u = (a - r) * n;
                i && e.isHorizontal() ? 0 < (u = -u) ? (c = r - u, u = 0) : a < -u + r && (c = a + u) : u < 0 ? (c = r + u, u = 0) : a < u + r && (c = a - u), e.isHorizontal() ? (N.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"), s[0].style.width = c + "px") : (N.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"), s[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                    o[0].style.opacity = 0, o.transition(400)
                }, 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, i = t.$dragEl, n = t.$el;
                i[0].style.width = "", i[0].style.height = "";
                var r, a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, s = e.size / e.virtualSize,
                    o = s * (a / e.size);
                r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = r + "px" : i[0].style.height = r + "px", n[0].style.display = 1 <= s ? "none" : "", e.params.scrollbarHide && (n[0].style.opacity = 0), O.extend(t, {
                    trackSize: a,
                    divider: s,
                    moveDivider: o,
                    dragSize: r
                }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        }, setDragPosition: function (e) {
            var t, i = this, n = i.scrollbar, r = n.$el, a = n.dragSize, s = n.trackSize;
            t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[i.isHorizontal() ? "left" : "top"] - a / 2) / (s - a), t = Math.max(Math.min(t, 1), 0), i.rtl && (t = 1 - t);
            var o = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
            i.updateProgress(o), i.setTranslate(o), i.updateActiveIndex(), i.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, n = this.$wrapperEl, r = i.$el, a = i.$dragEl;
            this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), r.transition(0), t.hide && r.css("opacity", 1), this.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, n = t.$el, r = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = O.nextTick(function () {
                i.css("opacity", 0), i.transition(400)
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideReset())
        }, enableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, i = e.touchEvents, n = e.touchEventsDesktop, r = e.params, a = t.$el[0],
                    s = !(!N.passiveListener || !r.passiveListener) && {passive: !1, capture: !1},
                    o = !(!N.passiveListener || !r.passiveListener) && {passive: !0, capture: !1};
                N.touch || !N.pointerEvents && !N.prefixedPointerEvents ? (N.touch && (a.addEventListener(i.start, e.scrollbar.onDragStart, s), a.addEventListener(i.move, e.scrollbar.onDragMove, s), a.addEventListener(i.end, e.scrollbar.onDragEnd, o)), (r.simulateTouch && !g.ios && !g.android || r.simulateTouch && !N.touch && g.ios) && (a.addEventListener("mousedown", e.scrollbar.onDragStart, s), m.addEventListener("mousemove", e.scrollbar.onDragMove, s), m.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (a.addEventListener(n.start, e.scrollbar.onDragStart, s), m.addEventListener(n.move, e.scrollbar.onDragMove, s), m.addEventListener(n.end, e.scrollbar.onDragEnd, o))
            }
        }, disableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, i = e.touchEvents, n = e.touchEventsDesktop, r = e.params, a = t.$el[0],
                    s = !(!N.passiveListener || !r.passiveListener) && {passive: !1, capture: !1},
                    o = !(!N.passiveListener || !r.passiveListener) && {passive: !0, capture: !1};
                N.touch || !N.pointerEvents && !N.prefixedPointerEvents ? (N.touch && (a.removeEventListener(i.start, e.scrollbar.onDragStart, s), a.removeEventListener(i.move, e.scrollbar.onDragMove, s), a.removeEventListener(i.end, e.scrollbar.onDragEnd, o)), (r.simulateTouch && !g.ios && !g.android || r.simulateTouch && !N.touch && g.ios) && (a.removeEventListener("mousedown", e.scrollbar.onDragStart, s), m.removeEventListener("mousemove", e.scrollbar.onDragMove, s), m.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (a.removeEventListener(n.start, e.scrollbar.onDragStart, s), m.removeEventListener(n.move, e.scrollbar.onDragMove, s), m.removeEventListener(n.end, e.scrollbar.onDragEnd, o))
            }
        }, init: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, n = M(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && 1 < n.length && 1 === t.find(i.el).length && (n = t.find(i.el));
                var r = n.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = M('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(r)), O.extend(e, {
                    $el: n,
                    el: n[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, X = {
        setTransform: function (e, t) {
            var i = this.rtl, n = M(e), r = i ? -1 : 1, a = n.attr("data-swiper-parallax") || "0",
                s = n.attr("data-swiper-parallax-x"), o = n.attr("data-swiper-parallax-y"),
                l = n.attr("data-swiper-parallax-scale"), c = n.attr("data-swiper-parallax-opacity");
            if (s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = a, o = "0") : (o = a, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != c) {
                var u = c - (c - 1) * (1 - Math.abs(t));
                n[0].style.opacity = u
            }
            if (null == l) n.transform("translate3d(" + s + ", " + o + ", 0px)"); else {
                var d = l - (l - 1) * (1 - Math.abs(t));
                n.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + d + ")")
            }
        }, setTranslate: function () {
            var n = this, e = n.$el, t = n.slides, r = n.progress, a = n.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                n.parallax.setTransform(t, r)
            }), t.each(function (e, t) {
                var i = t.progress;
                1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (i += Math.ceil(e / 2) - r * (a.length - 1)), i = Math.min(Math.max(i, -1), 1), M(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    n.parallax.setTransform(t, i)
                })
            })
        }, setTransition: function (r) {
            void 0 === r && (r = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                var i = M(t), n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || r;
                0 === r && (n = 0), i.transition(n)
            })
        }
    }, U = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                r = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
        }, onGestureStart: function (e) {
            var t = this.params.zoom, i = this.zoom, n = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !N.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, n.scaleStart = U.getDistanceBetweenTouches(e)
            }
            n.$slideEl && n.$slideEl.length || (n.$slideEl = M(e.target).closest(".swiper-slide"), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, n = i.gesture;
            if (!N.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, n.scaleMove = U.getDistanceBetweenTouches(e)
            }
            n.$imageEl && 0 !== n.$imageEl.length && (N.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, n = i.gesture;
            if (!N.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, n = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (g.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this.zoom, i = t.gesture, n = t.image, r = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = O.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = O.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX), this.rtl && (n.startY = -n.startY));
                var a = n.width * t.scale, s = n.height * t.scale;
                if (!(a < i.slideWidth && s < i.slideHeight)) {
                    if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - s / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void (n.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void (n.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = n.touchesCurrent.x, r.prevPositionY = n.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, n = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var r = 300, a = 300, s = n.x * r, o = i.currentX + s, l = n.y * a, c = i.currentY + l;
                0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((c - i.currentY) / n.y));
                var u = Math.max(r, a);
                i.currentX = o, i.currentY = c;
                var d = i.width * e.scale, h = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - d / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, n, r, a, s, o, l, c, u, d, h, p, f, m, v, g = this.zoom, y = this.params.zoom, b = g.gesture,
                w = g.image;
            (b.$slideEl || (b.$slideEl = this.clickedSlide ? M(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x, i = w.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, v = b.$slideEl[0].offsetHeight, n = b.$slideEl.offset().left + m / 2 - t, r = b.$slideEl.offset().top + v / 2 - i, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, c = o * g.scale, u = l * g.scale, p = -(d = Math.min(m / 2 - c / 2, 0)), f = -(h = Math.min(v / 2 - u / 2, 0)), (a = n * g.scale) < d && (a = d), p < a && (a = p), (s = r * g.scale) < h && (s = h), f < s && (s = f)) : s = a = 0, b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + s + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        }, out: function () {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? M(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this, t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var i = !("touchstart" !== e.touchEvents.start || !N.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                N.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }, disable: function () {
            var e = this, t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var i = !("touchstart" !== e.touchEvents.start || !N.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                N.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }, K = {
        loadInSlide: function (e, l) {
            void 0 === l && (l = !0);
            var c = this, u = c.params.lazy;
            if (void 0 !== e && 0 !== c.slides.length) {
                var d = c.virtual && c.params.virtual.enabled ? c.$wrapperEl.children("." + c.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : c.slides.eq(e),
                    t = d.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                !d.hasClass(u.elementClass) || d.hasClass(u.loadedClass) || d.hasClass(u.loadingClass) || (t = t.add(d[0])), 0 !== t.length && t.each(function (e, t) {
                    var n = M(t);
                    n.addClass(u.loadingClass);
                    var r = n.attr("data-background"), a = n.attr("data-src"), s = n.attr("data-srcset"),
                        o = n.attr("data-sizes");
                    c.loadImage(n[0], a || r, s, o, !1, function () {
                        if (null != c && c && (!c || c.params) && !c.destroyed) {
                            if (r ? (n.css("background-image", 'url("' + r + '")'), n.removeAttr("data-background")) : (s && (n.attr("srcset", s), n.removeAttr("data-srcset")), o && (n.attr("sizes", o), n.removeAttr("data-sizes")), a && (n.attr("src", a), n.removeAttr("data-src"))), n.addClass(u.loadedClass).removeClass(u.loadingClass), d.find("." + u.preloaderClass).remove(), c.params.loop && l) {
                                var e = d.attr("data-swiper-slide-index");
                                if (d.hasClass(c.params.slideDuplicateClass)) {
                                    var t = c.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + c.params.slideDuplicateClass + ")");
                                    c.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var i = c.$wrapperEl.children("." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    c.lazy.loadInSlide(i.index(), !1)
                                }
                            }
                            c.emit("lazyImageReady", d[0], n[0])
                        }
                    }), c.emit("lazyImageLoad", d[0], n[0])
                })
            }
        }, load: function () {
            var n = this, t = n.$wrapperEl, i = n.params, r = n.slides, e = n.activeIndex,
                a = n.virtual && i.virtual.enabled, s = i.lazy, o = i.slidesPerView;

            function l(e) {
                if (a) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (r[e]) return !0;
                return !1
            }

            function c(e) {
                return a ? M(e).attr("data-swiper-slide-index") : M(e).index()
            }

            if ("auto" === o && (o = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (e, t) {
                var i = a ? M(t).attr("data-swiper-slide-index") : M(t).index();
                n.lazy.loadInSlide(i)
            }); else if (1 < o) for (var u = e; u < e + o; u += 1) l(u) && n.lazy.loadInSlide(u); else n.lazy.loadInSlide(e);
            if (s.loadPrevNext) if (1 < o || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) {
                for (var d = s.loadPrevNextAmount, h = o, p = Math.min(e + h + Math.max(d, h), r.length), f = Math.max(e - Math.max(h, d), 0), m = e + o; m < p; m += 1) l(m) && n.lazy.loadInSlide(m);
                for (var v = f; v < e; v += 1) l(v) && n.lazy.loadInSlide(v)
            } else {
                var g = t.children("." + i.slideNextClass);
                0 < g.length && n.lazy.loadInSlide(c(g));
                var y = t.children("." + i.slidePrevClass);
                0 < y.length && n.lazy.loadInSlide(c(y))
            }
        }
    }, Q = {
        LinearSpline: function (e, t) {
            var i, n, r, a, s, o = function (e, t) {
                for (n = -1, i = e.length; 1 < i - n;) e[r = i + n >> 1] <= t ? n = r : i = r;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (s = o(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new Q.LinearSpline(this.slidesGrid, e.slidesGrid) : new Q.LinearSpline(this.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, n, r = this, a = r.controller.control;

            function s(e) {
                var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), n = -r.controller.spline.interpolate(-t)), n && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), n = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, r), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(a)) for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof D && s(a[o]); else a instanceof D && t !== a && s(a)
        }, setTransition: function (t, e) {
            var i, n = this, r = n.controller.control;

            function a(e) {
                e.setTransition(t, n), 0 !== t && (e.transitionStart(), e.$wrapperEl.transitionEnd(function () {
                    r && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd())
                }))
            }

            if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== e && r[i] instanceof D && a(r[i]); else r instanceof D && e !== r && a(r)
        }
    }, J = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this, i = t.params.a11y;
            if (13 === e.keyCode) {
                var n = M(e.target);
                t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && n.is("." + t.params.pagination.bulletClass) && n[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            if (!this.params.loop) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        }, updatePagination: function () {
            var n = this, r = n.params.a11y;
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function (e, t) {
                var i = M(t);
                n.a11y.makeElFocusable(i), n.a11y.addElRole(i, "button"), n.a11y.addElLabel(i, r.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
            })
        }, init: function () {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, i, n = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }, destroy: function () {
            var e, t, i = this;
            i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
        }
    }, Z = {
        init: function () {
            if (this.params.history) {
                if (!d.history || !d.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = Z.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || d.addEventListener("popstate", this.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || d.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = Z.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = d.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t), n = Z.slugify(i.attr("data-history"));
                d.location.pathname.includes(e) || (n = e + "/" + n);
                var r = d.history.state;
                r && r.value === n || (this.params.history.replaceState ? d.history.replaceState({value: n}, null, n) : d.history.pushState({value: n}, null, n))
            }
        }, slugify: function (e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            if (t) for (var n = 0, r = this.slides.length; n < r; n += 1) {
                var a = this.slides.eq(n);
                if (Z.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                    var s = a.index();
                    this.slideTo(s, e, i)
                }
            } else this.slideTo(0, e, i)
        }
    }, ee = {
        onHashCange: function () {
            var e = m.location.hash.replace("#", "");
            e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
        }, setHash: function () {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                var e = this.slides.eq(this.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                m.location.hash = t || ""
            }
        }, init: function () {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = m.location.hash.replace("#", "");
                if (t) for (var i = 0, n = e.slides.length; i < n; i += 1) {
                    var r = e.slides.eq(i);
                    if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                        var a = r.index();
                        e.slideTo(a, 0, e.params.runCallbacksOnInit, !0)
                    }
                }
                e.params.hashNavigation.watchState && M(d).on("hashchange", e.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && M(d).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, te = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = O.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, i)
        }, start: function () {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop: function () {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
                t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    }, ie = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), n = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (n -= this.translate);
                var r = 0;
                this.isHorizontal() || (r = n, n = 0);
                var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: a}).transform("translate3d(" + n + "px, " + r + "px, 0px)")
            }
        }, setTransition: function (e) {
            var i = this, t = i.slides, n = i.$wrapperEl;
            if (t.transition(e), i.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.transitionEnd(function () {
                    if (!r && i && !i.destroyed) {
                        r = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) n.trigger(e[t])
                    }
                })
            }
        }
    }, ne = {
        setTranslate: function () {
            var e, t = this, i = t.$el, n = t.$wrapperEl, r = t.slides, a = t.width, s = t.height, o = t.rtl,
                l = t.size, c = t.params.cubeEffect, u = t.isHorizontal(), d = t.virtual && t.params.virtual.enabled,
                h = 0;
            c.shadow && (u ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = M('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({height: a + "px"})) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = M('<div class="swiper-cube-shadow"></div>'), i.append(e)));
            for (var p = 0; p < r.length; p += 1) {
                var f = r.eq(p), m = p;
                d && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                var v = 90 * m, g = Math.floor(v / 360);
                o && (v = -v, g = Math.floor(-v / 360));
                var y = Math.max(Math.min(f[0].progress, 1), -1), b = 0, w = 0, x = 0;
                m % 4 == 0 ? (b = 4 * -g * l, x = 0) : (m - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (m - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (m - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g), o && (b = -b), u || (w = b, b = 0);
                var E = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                if (y <= 1 && -1 < y && (h = 90 * m + 90 * y, o && (h = 90 * -m - 90 * y)), f.transform(E), c.slideShadows) {
                    var T = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                        C = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = M('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(T)), 0 === C.length && (C = M('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(C)), T.length && (T[0].style.opacity = Math.max(-y, 0)), C.length && (C[0].style.opacity = Math.max(y, 0))
                }
            }
            if (n.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), c.shadow) if (u) e.transform("translate3d(0px, " + (a / 2 + c.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")"); else {
                var _ = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                    S = 1.5 - (Math.sin(2 * _ * Math.PI / 360) / 2 + Math.cos(2 * _ * Math.PI / 360) / 2),
                    k = c.shadowScale, A = c.shadowScale / S, D = c.shadowOffset;
                e.transform("scale3d(" + k + ", 1, " + A + ") translate3d(0px, " + (s / 2 + D) + "px, " + -s / 2 / A + "px) rotateX(-90deg)")
            }
            var I = P.isSafari || P.isUiWebView ? -l / 2 : 0;
            n.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, re = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = e.eq(t), n = i[0].progress;
                this.params.flipEffect.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                var r = -180 * n, a = 0, s = -i[0].swiperSlideOffset, o = 0;
                if (this.isHorizontal() ? this.rtl && (r = -r) : (o = s, a = -r, r = s = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + e.length, this.params.flipEffect.slideShadows) {
                    var l = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                        c = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                    0 === l.length && (l = M('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(l)), 0 === c.length && (c = M('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(c)), l.length && (l[0].style.opacity = Math.max(-n, 0)), c.length && (c[0].style.opacity = Math.max(n, 0))
                }
                i.transform("translate3d(" + s + "px, " + o + "px, 0px) rotateX(" + a + "deg) rotateY(" + r + "deg)")
            }
        }, setTransition: function (e) {
            var i = this, t = i.slides, n = i.activeIndex, r = i.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), i.params.virtualTranslate && 0 !== e) {
                var a = !1;
                t.eq(n).transitionEnd(function () {
                    if (!a && i && !i.destroyed) {
                        a = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) r.trigger(e[t])
                    }
                })
            }
        }
    }, ae = {
        setTranslate: function () {
            for (var e = this.width, t = this.height, i = this.slides, n = this.$wrapperEl, r = this.slidesSizesGrid, a = this.params.coverflowEffect, s = this.isHorizontal(), o = this.translate, l = s ? e / 2 - o : t / 2 - o, c = s ? a.rotate : -a.rotate, u = a.depth, d = 0, h = i.length; d < h; d += 1) {
                var p = i.eq(d), f = r[d], m = (l - p[0].swiperSlideOffset - f / 2) / f * a.modifier, v = s ? c * m : 0,
                    g = s ? 0 : c * m, y = -u * Math.abs(m), b = s ? 0 : a.stretch * m, w = s ? a.stretch * m : 0;
                Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0);
                var x = "translate3d(" + w + "px," + b + "px," + y + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)";
                if (p.transform(x), p[0].style.zIndex = 1 - Math.abs(Math.round(m)), a.slideShadows) {
                    var E = s ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                        T = s ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = M('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), p.append(E)), 0 === T.length && (T = M('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), p.append(T)), E.length && (E[0].style.opacity = 0 < m ? m : 0), T.length && (T[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (N.pointerEvents || N.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = l + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, se = [I, L, z, j, R, q, B, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            O.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: W.enable.bind(this),
                    disable: W.disable.bind(this),
                    handle: W.handle.bind(this),
                    lastScrollTime: O.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            O.extend(this, {
                navigation: {
                    init: Y.init.bind(this),
                    update: Y.update.bind(this),
                    destroy: Y.destroy.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t = this.navigation, i = t.$nextEl, n = t.$prevEl;
                !this.params.navigation.hideOnClick || M(e.target).is(n) || M(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            O.extend(this, {
                pagination: {
                    init: V.init.bind(this),
                    render: V.render.bind(this),
                    update: V.update.bind(this),
                    destroy: V.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !M(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            var e = this;
            O.extend(e, {
                scrollbar: {
                    init: G.init.bind(e),
                    destroy: G.destroy.bind(e),
                    updateSize: G.updateSize.bind(e),
                    setTranslate: G.setTranslate.bind(e),
                    setTransition: G.setTransition.bind(e),
                    enableDraggable: G.enableDraggable.bind(e),
                    disableDraggable: G.disableDraggable.bind(e),
                    setDragPosition: G.setDragPosition.bind(e),
                    onDragStart: G.onDragStart.bind(e),
                    onDragMove: G.onDragMove.bind(e),
                    onDragEnd: G.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            O.extend(this, {
                parallax: {
                    setTransform: X.setTransform.bind(this),
                    setTranslate: X.setTranslate.bind(this),
                    setTransition: X.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var t = this, i = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                i[e] = U[e].bind(t)
            }), O.extend(t, {zoom: i})
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            O.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: K.load.bind(this),
                    loadInSlide: K.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            O.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: Q.getInterpolateFunction.bind(this),
                    setTranslate: Q.setTranslate.bind(this),
                    setTransition: Q.setTransition.bind(this)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !1,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var t = this;
            O.extend(t, {a11y: {liveRegion: M('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(J).forEach(function (e) {
                t.a11y[e] = J[e].bind(t)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            O.extend(this, {
                history: {
                    init: Z.init.bind(this),
                    setHistory: Z.setHistory.bind(this),
                    setHistoryPopState: Z.setHistoryPopState.bind(this),
                    scrollToSlide: Z.scrollToSlide.bind(this),
                    destroy: Z.destroy.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            O.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: ee.init.bind(this),
                    destroy: ee.destroy.bind(this),
                    setHash: ee.setHash.bind(this),
                    onHashCange: ee.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            O.extend(this, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: te.run.bind(this),
                    start: te.start.bind(this),
                    stop: te.stop.bind(this),
                    pause: te.pause.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            O.extend(this, {
                fadeEffect: {
                    setTranslate: ie.setTranslate.bind(this),
                    setTransition: ie.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    O.extend(this.params, e), O.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            O.extend(this, {
                cubeEffect: {
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    O.extend(this.params, e), O.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            O.extend(this, {
                flipEffect: {
                    setTranslate: re.setTranslate.bind(this),
                    setTransition: re.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    O.extend(this.params, e), O.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            O.extend(this, {
                coverflowEffect: {
                    setTranslate: ae.setTranslate.bind(this),
                    setTransition: ae.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }];
    return void 0 === D.use && (D.use = D.Class.use, D.installModule = D.Class.installModule), D.use(se), D
});