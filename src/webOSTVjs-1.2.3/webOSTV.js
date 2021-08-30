window.webOS = (function (e) {
  var n = {};
  function r(o) {
    if (n[o]) return n[o].exports;
    var t = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  return (
    (r.m = e),
    (r.c = n),
    (r.d = function (e, n, o) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var t in e)
          r.d(
            o,
            t,
            function (n) {
              return e[n];
            }.bind(null, t)
          );
      return o;
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = ""),
    r((r.s = 0))
  );
})([
  function (e, n, r) {
    "use strict";
    r.r(n),
      r.d(n, "deviceInfo", function () {
        return P;
      }),
      r.d(n, "fetchAppId", function () {
        return o;
      }),
      r.d(n, "fetchAppInfo", function () {
        return i;
      }),
      r.d(n, "fetchAppRootPath", function () {
        return s;
      }),
      r.d(n, "keyboard", function () {
        return j;
      }),
      r.d(n, "libVersion", function () {
        return x;
      }),
      r.d(n, "platformBack", function () {
        return a;
      }),
      r.d(n, "platform", function () {
        return O;
      }),
      r.d(n, "service", function () {
        return v;
      }),
      r.d(n, "systemInfo", function () {
        return k;
      });
    var o = function () {
        return window.PalmSystem && window.PalmSystem.identifier
          ? window.PalmSystem.identifier.split(" ")[0]
          : "";
      },
      t = {},
      i = function (e, n) {
        if (0 === Object.keys(t).length) {
          var r = function (n, r) {
              if (!n && r)
                try {
                  (t = JSON.parse(r)), e && e(t);
                } catch (n) {
                  console.error("Unable to parse appinfo.json file for", o()),
                    e && e();
                }
              else e && e();
            },
            i = new window.XMLHttpRequest();
          i.onreadystatechange = function () {
            4 === i.readyState &&
              ((i.status >= 200 && i.status < 300) || 0 === i.status
                ? r(null, i.responseText)
                : r({ status: 404 }));
          };
          try {
            i.open("GET", n || "appinfo.json", !0), i.send(null);
          } catch (e) {
            r({ status: 404 });
          }
        } else e && e(t);
      },
      s = function () {
        var e = window.location.href;
        if ("baseURI" in window.document) e = window.document.baseURI;
        else {
          var n = window.document.getElementsByTagName("base");
          n.length > 0 && (e = n[0].href);
        }
        var r = e.match(new RegExp(".*://[^#]*/"));
        return r ? r[0] : "";
      },
      a = function () {
        if (window.PalmSystem && window.PalmSystem.platformBack)
          return window.PalmSystem.platformBack();
      };
    function c(e, n) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n &&
          (o = o.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function u(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? c(Object(r), !0).forEach(function (n) {
              d(e, n, r[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : c(Object(r)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(r, n)
              );
            });
      }
      return e;
    }
    function d(e, n, r) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = r),
        e
      );
    }
    function l(e, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var f = {},
      m = (function () {
        function e() {
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.bridge = null),
            (this.cancelled = !1),
            (this.subscribe = !1);
        }
        var n, r, o;
        return (
          (n = e),
          (r = [
            {
              key: "send",
              value: function (e) {
                var n = e.service,
                  r = void 0 === n ? "" : n,
                  o = e.method,
                  t = void 0 === o ? "" : o,
                  i = e.parameters,
                  s = void 0 === i ? {} : i,
                  a = e.onSuccess,
                  c = void 0 === a ? function () {} : a,
                  d = e.onFailure,
                  l = void 0 === d ? function () {} : d,
                  m = e.onComplete,
                  v = void 0 === m ? function () {} : m,
                  p = e.subscribe,
                  w = void 0 !== p && p;
                if (!window.PalmServiceBridge) {
                  var y = {
                    errorCode: -1,
                    errorText: "PalmServiceBridge is not found.",
                    returnValue: !1,
                  };
                  return (
                    l(y),
                    v(y),
                    console.error("PalmServiceBridge is not found."),
                    this
                  );
                }
                this.ts && f[this.ts] && delete f[this.ts];
                var g,
                  h = u({}, s);
                return (
                  (this.subscribe = w),
                  this.subscribe && (h.subscribe = this.subscribe),
                  h.subscribe && (this.subscribe = h.subscribe),
                  (this.ts = Date.now()),
                  (f[this.ts] = this),
                  (this.bridge = new PalmServiceBridge()),
                  (this.bridge.onservicecallback = this.callback.bind(
                    this,
                    c,
                    l,
                    v
                  )),
                  this.bridge.call(
                    ("/" !== (g = r).slice(-1) && (g += "/"), g + t),
                    JSON.stringify(h)
                  ),
                  this
                );
              },
            },
            {
              key: "callback",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function () {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : function () {},
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : function () {},
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "";
                if (!this.cancelled) {
                  var t = {};
                  try {
                    t = JSON.parse(o);
                  } catch (e) {
                    t = { errorCode: -1, errorText: o, returnValue: !1 };
                  }
                  var i = t,
                    s = i.errorCode,
                    a = i.returnValue;
                  s || !1 === a
                    ? ((t.returnValue = !1), n(t))
                    : ((t.returnValue = !0), e(t)),
                    r(t),
                    this.subscribe || this.cancel();
                }
              },
            },
            {
              key: "cancel",
              value: function () {
                (this.cancelled = !0),
                  null !== this.bridge &&
                    (this.bridge.cancel(), (this.bridge = null)),
                  this.ts && f[this.ts] && delete f[this.ts];
              },
            },
          ]) && l(n.prototype, r),
          o && l(n, o),
          e
        );
      })(),
      v = {
        request: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = u({ service: e }, n);
          return new m().send(r);
        },
      };
    function p(e) {
      return (p =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var w = {};
    if (
      "object" === ("undefined" == typeof window ? "undefined" : p(window)) &&
      window.PalmSystem
    ) {
      if (window.navigator.userAgent.indexOf("SmartWatch") > -1) w.watch = !0;
      else if (
        window.navigator.userAgent.indexOf("SmartTV") > -1 ||
        window.navigator.userAgent.indexOf("Large Screen") > -1
      )
        w.tv = !0;
      else {
        try {
          var y = JSON.parse(window.PalmSystem.deviceInfo || "{}");
          if (y.platformVersionMajor && y.platformVersionMinor) {
            var g = Number(y.platformVersionMajor),
              h = Number(y.platformVersionMinor);
            g < 3 || (3 === g && h <= 0) ? (w.legacy = !0) : (w.open = !0);
          }
        } catch (e) {
          w.open = !0;
        }
        (window.Mojo = window.Mojo || { relaunch: function () {} }),
          window.PalmSystem.stageReady && window.PalmSystem.stageReady();
      }
      if (
        window.navigator.userAgent.indexOf("Chr0me") > -1 ||
        window.navigator.userAgent.indexOf("Chrome") > -1
      ) {
        var b =
            window.navigator.userAgent.indexOf("Chr0me") > -1
              ? window.navigator.userAgent.indexOf("Chr0me")
              : window.navigator.userAgent.indexOf("Chrome"),
          S = window.navigator.userAgent.slice(b).indexOf(" "),
          V = window.navigator.userAgent.slice(b + 7, b + S).split(".");
        w.chrome = Number(V[0]);
      } else w.chrome = 0;
    } else w.unknown = !0;
    var O = w,
      D = {},
      P = function (e) {
        if (0 === Object.keys(D).length) {
          try {
            var n = JSON.parse(window.PalmSystem.deviceInfo);
            (D.modelName = n.modelName),
              (D.version = n.platformVersion),
              (D.versionMajor = n.platformVersionMajor),
              (D.versionMinor = n.platformVersionMinor),
              (D.versionDot = n.platformVersionDot),
              (D.sdkVersion = n.platformVersion),
              (D.screenWidth = n.screenWidth),
              (D.screenHeight = n.screenHeight);
          } catch (e) {
            D.modelName = "webOS Device";
          }
          (D.screenHeight = D.screenHeight || window.screen.height),
            (D.screenWidth = D.screenWidth || window.screen.width),
            O.tv &&
              (O.chrome >= 68
                ? new m().send({
                    service: "luna://com.webos.service.config",
                    method: "getConfigs",
                    parameters: {
                      configNames: [
                        "tv.model.modelname",
                        "tv.nyx.platformVersion",
                        "tv.nyx.firmwareVersion",
                        "tv.hw.panelResolution",
                        "tv.hw.displayType",
                        "tv.hw.ddrSize",
                        "tv.model.supportHDR",
                        "tv.config.supportDolbyHDRContents",
                        "tv.config.supportDolbyTVATMOS",
                      ],
                    },
                    onSuccess: function (n) {
                      if (
                        ((D.modelName =
                          n.configs["tv.model.modelname"] || D.modelName),
                        (D.sdkVersion =
                          n.configs["tv.nyx.platformVersion"] || D.sdkVersion),
                        (D.uhd =
                          "UD" === n.configs["tv.hw.panelResolution"] ||
                          "8K" === n.configs["tv.hw.panelResolution"]),
                        (D.uhd8K = "8K" === n.configs["tv.hw.panelResolution"]),
                        (D.oled = "OLED" === n.configs["tv.hw.displayType"]),
                        (D.ddrSize = n.configs["tv.hw.ddrSize"]),
                        (D.hdr10 = !0 === n.configs["tv.model.supportHDR"]),
                        (D.dolbyVision =
                          !0 ===
                          n.configs["tv.config.supportDolbyHDRContents"]),
                        (D.dolbyAtmos =
                          !0 === n.configs["tv.config.supportDolbyTVATMOS"]),
                        (n.configs["tv.nyx.firmwareVersion"] &&
                          "0.0.0" !== n.configs["tv.nyx.firmwareVersion"]) ||
                          (n.configs["tv.nyx.firmwareVersion"] =
                            n.configs["tv.nyx.platformVersion"]),
                        n.configs["tv.nyx.firmwareVersion"])
                      ) {
                        D.version = n.configs["tv.nyx.firmwareVersion"];
                        for (
                          var r = D.version.split("."),
                            o = ["versionMajor", "versionMinor", "versionDot"],
                            t = 0;
                          t < o.length;
                          t += 1
                        )
                          try {
                            D[o[t]] = parseInt(r[t], 10);
                          } catch (e) {
                            D[o[t]] = r[t];
                          }
                      }
                      e(D);
                    },
                    onFailure: function () {
                      e(D);
                    },
                  })
                : new m().send({
                    service: "luna://com.webos.service.tv.systemproperty",
                    method: "getSystemInfo",
                    parameters: {
                      keys: [
                        "firmwareVersion",
                        "modelName",
                        "sdkVersion",
                        "UHD",
                        "OLED",
                        "ddrSize",
                      ],
                    },
                    onSuccess: function (n) {
                      if (
                        ((D.modelName = n.modelName || D.modelName),
                        (D.sdkVersion = n.sdkVersion || D.sdkVersion),
                        (D.uhd = n.UHD ? "true" === n.UHD : void 0),
                        (D.oled = n.OLED ? "true" === n.OLED : void 0),
                        (D.ddrSize = n.ddrSize),
                        (n.firmwareVersion && "0.0.0" !== n.firmwareVersion) ||
                          (n.firmwareVersion = n.sdkVersion),
                        n.firmwareVersion)
                      ) {
                        D.version = n.firmwareVersion;
                        for (
                          var r = D.version.split("."),
                            o = ["versionMajor", "versionMinor", "versionDot"],
                            t = 0;
                          t < o.length;
                          t += 1
                        )
                          try {
                            D[o[t]] = parseInt(r[t], 10);
                          } catch (e) {
                            D[o[t]] = r[t];
                          }
                      }
                      new m().send({
                        service: "luna://com.webos.service.config",
                        method: "getConfigs",
                        parameters: {
                          configNames: [
                            "tv.model.supportTemp8K",
                            "tv.model.supportHDR",
                            "tv.config.supportDolbyHDRContents",
                            "tv.config.supportDolbyTVATMOS",
                          ],
                        },
                        onSuccess: function (n) {
                          n.configs &&
                            ((D.uhd8K =
                              !0 === n.configs["tv.model.supportTemp8K"]),
                            (D.hdr10 = !0 === n.configs["tv.model.supportHDR"]),
                            (D.dolbyVision =
                              !0 ===
                              n.configs["tv.config.supportDolbyHDRContents"]),
                            (D.dolbyAtmos =
                              !0 ===
                              n.configs["tv.config.supportDolbyTVATMOS"])),
                            e(D);
                        },
                        onFailure: function () {
                          (D.uhd8K = !1),
                            (D.hdr10 = !1),
                            (D.dolbyVision = !1),
                            (D.dolbyAtmos = !1),
                            e(D);
                        },
                      });
                    },
                    onFailure: function (n) {
                      if (
                        ((D.modelName = n.modelName || D.modelName),
                        (D.sdkVersion = n.sdkVersion || D.sdkVersion),
                        (n.firmwareVersion && "0.0.0" !== n.firmwareVersion) ||
                          (n.firmwareVersion = n.sdkVersion),
                        n.firmwareVersion)
                      ) {
                        D.version = n.firmwareVersion;
                        for (
                          var r = D.version.split("."),
                            o = ["versionMajor", "versionMinor", "versionDot"],
                            t = 0;
                          t < o.length;
                          t += 1
                        )
                          try {
                            D[o[t]] = parseInt(r[t], 10);
                          } catch (e) {
                            D[o[t]] = r[t];
                          }
                      }
                      (D.uhd = n.UHD ? "true" === n.UHD : void 0),
                        (D.uhd8K = !1),
                        (D.oled = n.OLED ? "true" === n.OLED : void 0),
                        (D.ddrSize = n.ddrSize),
                        (D.hdr10 = !1),
                        (D.dolbyVision = !1),
                        (D.dolbyAtmos = !1),
                        e(D);
                    },
                  }));
        } else e(D);
      },
      j = {
        isShowing: function () {
          return PalmSystem && PalmSystem.isKeyboardVisible;
        },
      },
      k = function () {
        var e = {};
        if (window.PalmSystem) {
          if (window.PalmSystem.country) {
            var n = JSON.parse(window.PalmSystem.country);
            (e.country = n.country),
              (e.smartServiceCountry = n.smartServiceCountry);
          }
          window.PalmSystem.timeZone &&
            (e.timezone = window.PalmSystem.timeZone);
        }
        return e;
      },
      x = "1.2.3";
  },
]);
