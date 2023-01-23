/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (b.call(c, f, d, a)) return { i: d, v: f };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
      };
$jscomp.getGlobal = function (a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function (a, b, c, e) {
  b &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(a, b, c, e)
      : $jscomp.polyfillUnisolated(a, b, c, e));
};
$jscomp.polyfillUnisolated = function (a, b, c, e) {
  c = $jscomp.global;
  a = a.split(".");
  for (e = 0; e < a.length - 1; e++) {
    var d = a[e];
    if (!(d in c)) return;
    c = c[d];
  }
  a = a[a.length - 1];
  e = c[a];
  b = b(e);
  b != e &&
    null != b &&
    $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b });
};
$jscomp.polyfillIsolated = function (a, b, c, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < d.length - 1; f++) {
    var g = d[f];
    if (!(g in e)) return;
    e = e[g];
  }
  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
  b = b(c);
  null != b &&
    (a
      ? $jscomp.defineProperty($jscomp.polyfills, d, {
          configurable: !0,
          writable: !0,
          value: b,
        })
      : b !== c &&
        (($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(d)
          : $jscomp.POLYFILL_PREFIX + d),
        (d = $jscomp.propertyToPolyfillSymbol[d]),
        $jscomp.defineProperty(e, d, {
          configurable: !0,
          writable: !0,
          value: b,
        })));
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
    return a
      ? a
      : function (b, c) {
          return $jscomp.findInternal(this, b, c).v;
        };
  },
  "es6",
  "es3"
);
(function (a) {
  "function" === typeof define && define.amd
    ? define([
        "jquery",
        "datatables.net-bs4",
        "datatables.net-responsive",
      ], function (b) {
        return a(b, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (b, c) {
        b || (b = window);
        (c && c.fn.dataTable) || (c = require("datatables.net-bs4")(b, c).$);
        c.fn.dataTable.Responsive || require("datatables.net-responsive")(b, c);
        return a(c, b, b.document);
      })
    : a(jQuery, window, document);
})(function (a, b, c, e) {
  b = a.fn.dataTable;
  c = b.Responsive.display;
  var d = c.modal,
    f = a(
      '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>'
    );
  c.modal = function (g) {
    return function (k, h, l) {
      if (!a.fn.modal) d(k, h, l);
      else if (!h) {
        if (g && g.header) {
          h = f.find("div.modal-header");
          var m = h.find("button").detach();
          h.empty()
            .append('<h4 class="modal-title">' + g.header(k) + "</h4>")
            .append(m);
        }
        f.find("div.modal-body").empty().append(l());
        f.appendTo("body").modal();
      }
    };
  };
  return b.Responsive;
});
