'use strict';
(function (m) {
    /**
     * @param {!Array} data
     * @return {?}
     */
    function push(data) {
        var attr;
        var prop;
        var intFields = data[0];
        var m2 = data[1];
        var instances = data[2];
        /** @type {number} */
        var i = 0;
        /** @type {!Array} */
        var _sizeAnimateTimeStamps = [];
        for (; i < intFields.length; i++) {
            prop = intFields[i];
            if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop]) {
                _sizeAnimateTimeStamps.push(obj[prop][0]);
            }
            /** @type {number} */
            obj[prop] = 0;
        }
        for (attr in m2) {
            if (Object.prototype.hasOwnProperty.call(m2, attr)) {
                m[attr] = m2[attr];
            }
        }
        if (h) {
            h(data);
        }
        for (; _sizeAnimateTimeStamps.length;) {
            _sizeAnimateTimeStamps.shift()();
        }
        return buffer.push.apply(buffer, instances || []), done();
    }

    /**
     * @return {?}
     */
    function done() {
        var message;
        /** @type {number} */
        var k = 0;
        for (; k < buffer.length; k++) {
            var data = buffer[k];
            /** @type {boolean} */
            var r = true;
            /** @type {number} */
            var i = 1;
            for (; i < data.length; i++) {
                var u = data[i];
                if (0 !== obj[u]) {
                    /** @type {boolean} */
                    r = false;
                }
            }
            if (r) {
                buffer.splice(k--, 1);
                message = t(t.s = data[0]);
            }
        }
        return message;
    }

    /**
     * @param {number} i
     * @return {?}
     */
    function t(i) {
        if (n[i]) {
            return n[i].exports;
        }
        var module = n[i] = {
            i: i,
            l: false,
            exports: {}
        };
        return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
    }

    var n = {};
    var obj = {
        index: 0
    };
    /** @type {!Array} */
    var buffer = [];
    t.m = m;
    t.c = n;
    /**
     * @param {!Function} d
     * @param {string} name
     * @param {!Function} n
     * @return {undefined}
     */
    t.d = function (d, name, n) {
        if (!t.o(d, name)) {
            Object.defineProperty(d, name, {
                enumerable: true,
                get: n
            });
        }
    };
    /**
     * @param {!Object} x
     * @return {undefined}
     */
    t.r = function (x) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) {
            Object.defineProperty(x, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(x, "__esModule", {
            value: true
        });
    };
    /**
     * @param {number} value
     * @param {number} defaultValue
     * @return {?}
     */
    t.t = function (value, defaultValue) {
        if (1 & defaultValue && (value = t(value)), 8 & defaultValue) {
            return value;
        }
        if (4 & defaultValue && "object" === typeof value && value && value.__esModule) {
            return value;
        }
        /** @type {!Object} */
        var d = Object.create(null);
        if (t.r(d), Object.defineProperty(d, "default", {
            enumerable: true,
            value: value
        }), 2 & defaultValue && "string" != typeof value) {
            var s;
            for (s in value) {
                t.d(d, s, function (subel) {
                    return value[subel];
                }.bind(null, s));
            }
        }
        return d;
    };
    /**
     * @param {!Object} module
     * @return {?}
     */
    t.n = function (module) {
        var n = module && module.__esModule ? function () {
            return module["default"];
        } : function () {
            return module;
        };
        return t.d(n, "a", n), n;
    };
    /**
     * @param {!Function} property
     * @param {string} object
     * @return {?}
     */
    t.o = function (property, object) {
        return Object.prototype.hasOwnProperty.call(property, object);
    };
    /** @type {string} */
    t.p = "/breathing-timer/";
    var p = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var fn = p.push.bind(p);
    /** @type {function(!Array): ?} */
    p.push = push;
    p = p.slice();
    /** @type {number} */
    var x = 0;
    for (; x < p.length; x++) {
        push(p[x]);
    }
    var h = fn;
    buffer.push([0, "chunk-vendors", "chunk-common"]);
    done();
})({
    0: function (module, object, instantiate) {
        module.exports = instantiate("56d7");
    },
    "034f": function (data, linkedEntities, force) {
        force("85ec");
    },
    "56d7": function (cond, t, n) {
        n.r(t);
        n("e260");
        n("e6cf");
        n("cca6");
        n("a79d");
        var currentServices = n("2b0e");
        /**
         * @return {?}
         */
        var render = function () {
            var self = this;
            var _h = self.$createElement;
            var _c = self._self._c || _h;
            return _c("div", {
                attrs: {
                    id: "app"
                }
            }, [_c("div", {
                staticClass: "timer-box",
                attrs: {
                    id: "timer-box"
                }
            }, [_c("div", {
                staticClass: "container",
                attrs: {
                    id: "container"
                }
            }, [_c("p5c", {
                key: self.animationType,
                ref: "sketch",
                attrs: {
                    sketch: self.sketchScript,
                    data: self.data
                }
            })], 1), self._m(0)]), _c("sidebar", {
                attrs: {
                },
                on: {
                    "animation-changed": self.changedAnimation,
                    "sound-changed": self.changedSound
                }
            })], 1);
        };
        /** @type {!Array} */
        var thirdArgument = [function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var createElement = _vm._self._c || _h;
            return createElement("", [createElement("", {
            }, [createElement("", {
            })]), _vm._v(" \u2192 "), createElement("", {

            }, [_vm._v("")]), _vm._v(" "), createElement(""), createElement("", [createElement("", {

            }, [_vm._v("")]), _vm._v(" - "), createElement("", {

            }, [_vm._v("")])])]);
        }];
        var l = n("deac");
        var m = n("684d");
        var i = n("661b");
        var h = n("5f6d");
        var defaultOptions = {
            name: "App",
            components: {
                p5c: l["a"],
                sidebar: m["a"]
            },
            data: function () {
                return {
                    animationType: 0,
                    data: {
                        breatheInTime: 20,
                        holdTime: 5,
                        breatheOutTime: 5,
                        playSound: false
                    }
                };
            },
            computed: {
                sketchScript: function () {
                    return 1 === this.animationType ? h["a"] : i["a"];
                }
            },
            mounted: function () {
            },
            methods: {
                changeTimer: function () {
                    /** @type {number} */
                    this.data.breatheInTime = 8;
                },
                changedAnimation: function (name) {
                    this.$refs.sketch.stopSketch();
                    /** @type {!Object} */
                    this.animationType = name;
                },
                changedSound: function (filterBySyncano) {
                    this.data.playSound = filterBySyncano;
                },
                enterFullscreen: function () {
                    /** @type {(Element|null)} */
                    var c = document.getElementById("timer-box");
                    if (c.requestFullscreen) {
                        c.requestFullscreen();
                    } else {
                        if (c.mozRequestFullScreen) {
                            c.mozRequestFullScreen();
                        } else {
                            if (c.webkitRequestFullscreen) {
                                c.webkitRequestFullscreen();
                            } else {
                                if (c.msRequestFullscreen) {
                                    c.msRequestFullscreen();
                                }
                            }
                        }
                    }
                }
            }
        };
        var options = defaultOptions;
        var attrs = (n("034f"), n("2877"));
        var value = Object(attrs["a"])(options, render, thirdArgument, false, null, null, null);
        var simple = value.exports;
        n("ddb8");
        /** @type {boolean} */
        currentServices["a"].config.productionTip = false;
        (new currentServices["a"]({
            render: function ($) {
                return $(simple);
            }
        })).$mount("#app");
    },
    "85ec": function (eta, lmbda, n) {
    }
});
