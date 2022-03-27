/**
 * @license
 p5.sound.js v0.3.11 2019-03-14 */
'use strict';
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"], {
    "5d27": function (branchData, beforeZero, afterZero) {
    },
    "5f6d": function (module, __webpack_exports__, __webpack_require__) {
        /**
         * @param {!Object} options
         * @param {?} e
         * @return {?}
         */
        function test(options, e) {
            return function (p) {
                /**
                 * @param {?} options
                 * @return {undefined}
                 */
                p.restart = function (options) {
                    /** @type {number} */
                    p.beginX = p.width / 2;
                    /** @type {number} */
                    p.beginY = p.height / 2;
                    /** @type {number} */
                    p.x_left = p.beginX;
                    /** @type {number} */
                    p.x_right = p.beginX;
                    /** @type {number} */
                    p.y = p.beginY;
                    /** @type {number} */
                    p.screenCenterX = p.width / 2;
                    /** @type {number} */
                    p.screenCenterY = p.height / 2;
                    /** @type {number} */
                    p.framerate = 30;
                    p.breatheInTime = options.breatheInTime;
                    /** @type {number} */
                    p.breatheInTimeFrames = options.breatheInTime * p.framerate;
                    p.holdTime = options.holdTime;
                    /** @type {number} */
                    p.holdTimeFrames = options.holdTime * p.framerate + p.breatheInTimeFrames;
                    p.breatheOutTime = options.breatheOutTime;
                    /** @type {number} */
                    p.breatheOutTimeFrames = options.breatheOutTime * p.framerate;
                    /** @type {number} */
                    p.breatheOutTimeFramesStop = p.breatheOutTimeFrames + p.holdTimeFrames;
                    /** @type {number} */
                    p.frame = 0;
                    /** @type {number} */
                    p.circleSize = 100;
                    /** @type {number} */
                    p.freq = 180;
                    /** @type {number} */
                    p.volume = 0;
                    if (void 0 !== p.osc) {
                        if (1 == options.playSound) {
                            p.osc.start();
                        } else {
                            p.osc.stop();
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                p.setup = function () {
                    var $link = p.createCanvas(350, 300);
                    $link.parent(options.$el);
                    p.restart(options.data);
                    p.rectMode(p.CENTER);
                    p.ellipseMode(p.RADIUS);
                    p.frameRate(p.framerate);
                    p.noFill();
                    p.strokeWeight(2);
                    p.smooth(8);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(24);
                    p.osc = new e.Oscillator("sine");
                    p.osc.freq(p.freq, .1);
                    p.osc.amp(p.volume, .1);
                    if (1 == options.data.playSound) {
                        p.osc.start();
                    }
                };
                /**
                 * @return {undefined}
                 */
                p.draw = function () {
                    if (0 === p.frame) {
                        console.log(new Date);
                    }
                    p.background("#464646");
                    p.frame += 1;
                    /** @type {string} */
                    var prev = "";
                    if (p.frame <= p.breatheInTimeFrames) {
                        /** @type {string} */
                        prev = "inhale";
                        /** @type {number} */
                        p.x_left = p.x_left - 60 / p.breatheInTimeFrames;
                        p.x_right = p.x_right + 60 / p.breatheInTimeFrames;
                        p.y = p.beginY;
                        p.volume += .8 / p.breatheInTimeFrames;
                        p.freq += 60 / p.breatheInTimeFrames;
                        p.osc.freq(p.freq, .1);
                        p.osc.amp(.5, .1);
                    } else {
                        if (p.frame <= p.holdTimeFrames) {
                            /** @type {string} */
                            prev = "hold";
                            p.osc.amp(0, .1);
                        } else {
                            if (p.frame <= p.breatheOutTimeFramesStop) {
                                /** @type {string} */
                                prev = "exhale";
                                p.x_left = p.x_left + 60 / p.breatheOutTimeFrames;
                                /** @type {number} */
                                p.x_right = p.x_right - 60 / p.breatheOutTimeFrames;
                                p.y = p.beginY;
                                p.volume -= .8 / p.breatheOutTimeFrames;
                                p.freq -= 60 / p.breatheOutTimeFrames;
                                p.osc.freq(p.freq, .1);
                                p.osc.amp(.5, .1);
                            } else {
                                p.x_left = p.beginX;
                                p.x_right = p.beginX;
                                /** @type {number} */
                                p.frame = 0;
                            }
                        }
                    }
                    p.fill(255, 0);
                    p.stroke("#dcdccc");
                    p.ellipse(p.beginX, p.beginY, p.circleSize, p.circleSize);
                    p.ellipse(p.x_left, p.y, p.circleSize, p.circleSize);
                    p.ellipse(p.x_right, p.y, p.circleSize, p.circleSize);
                    p.noStroke();
                    p.fill("#8faf9f");
                    p.text(prev, p.screenCenterX, p.screenCenterY);
                };
                /**
                 * @param {?} callback
                 * @param {?} cache
                 * @return {undefined}
                 */
                p.dataChanged = function (callback, cache) {
                    p.restart(callback);
                };
                /**
                 * @return {undefined}
                 */
                p.stop = function () {
                    if (void 0 !== p.osc) {
                        p.osc.stop();
                    }
                    p.remove();
                };
            };
        }

        __webpack_require__.d(__webpack_exports__, "a", function () {
            return test;
        });
        __webpack_require__("cb29");
    },
    "661b": function (module, __webpack_exports__, __webpack_require__) {
        /**
         * @param {!Object} options
         * @param {?} e
         * @return {?}
         */
        function test(options, e) {
            return function (p) {
                /**
                 * @param {?} options
                 * @return {undefined}
                 */
                p.restart = function (options) {
                    /** @type {number} */
                    p.n = 1;
                    /** @type {number} */
                    p.r = 100;
                    /** @type {number} */
                    p.r2 = 115;
                    /** @type {number} */
                    p.base = -90;
                    /** @type {number} */
                    p.screenCenterX = p.width / 2;
                    /** @type {number} */
                    p.screenCenterY = p.height / 2;
                    /** @type {number} */
                    p.framerate = 30;
                    /** @type {number} */
                    p.speed = 360 / p.framerate / (options.breatheInTime + options.holdTime + options.breatheOutTime);
                    p.totalTime = options.breatheInTime + options.holdTime + options.breatheOutTime;
                    p.breatheInTime = options.breatheInTime;
                    /** @type {number} */
                    p.breatheInTimeFrames = options.breatheInTime * p.framerate;
                    p.holdTime = options.holdTime;
                    /** @type {number} */
                    p.holdTimeFrames = options.holdTime * p.framerate + p.breatheInTimeFrames;
                    p.breatheOutTime = options.breatheOutTime;
                    /** @type {number} */
                    p.breatheOutTimeFrames = options.breatheOutTime * p.framerate;
                    /** @type {number} */
                    p.breatheOutTimeFramesStop = p.breatheOutTimeFrames + p.holdTimeFrames;
                    /** @type {number} */
                    p.frame = 0;
                    /** @type {number} */
                    p.canvasScale = 1;
                    /** @type {number} */
                    p.radiansSecond = 360 / p.totalTime;
                    /** @type {number} */
                    p.freq = 180;
                    /** @type {number} */
                    p.volume = 0;
                    if (void 0 !== p.osc) {
                        if (1 == options.playSound) {
                            p.osc.start();
                        } else {
                            p.osc.stop();
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                p.setup = function () {
                    var $link = p.createCanvas(350, 320);
                    $link.parent(options.$el);
                    p.restart(options.data);
                    p.rectMode(p.CENTER);
                    p.ellipseMode(p.RADIUS);
                    p.frameRate(p.framerate);
                    p.noFill();
                    p.strokeWeight(10);
                    p.stroke(255);
                    p.smooth(8);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(24);
                    p.osc = new e.Oscillator("sine");
                    p.osc.freq(p.freq, .1);
                    p.osc.amp(p.volume, .1);
                    if (1 == options.data.playSound) {
                        p.osc.start();
                    }
                };
                /**
                 * @return {undefined}
                 */
                p.draw = function () {
                    if (-90 === p.base) {
                        console.log(new Date);
                    }
                    p.background("#464646");
                    p.fill("#dcdccc");
                    p.frame += 1;
                    p.translate(p.screenCenterX, p.screenCenterY);
                    p.scale(p.canvasScale);
                    p.translate(-p.screenCenterX, -p.screenCenterY);
                    if (p.frame <= p.breatheInTimeFrames) {
                        p.volume += .8 / p.breatheInTimeFrames;
                        p.freq += 60 / p.breatheInTimeFrames;
                        p.osc.freq(p.freq, .1);
                        p.osc.amp(.5, .1);
                        p.canvasScale += .24 / p.breatheInTimeFrames;
                        p.text("inhale", p.screenCenterX, p.screenCenterY);
                    } else {
                        if (p.frame <= p.holdTimeFrames) {
                            p.osc.amp(0, .1);
                            p.text("hold", p.screenCenterX, p.screenCenterY);
                        } else {
                            if (p.frame <= p.breatheOutTimeFramesStop) {
                                p.volume -= .8 / p.breatheOutTimeFrames;
                                p.freq -= 60 / p.breatheOutTimeFrames;
                                p.osc.freq(p.freq, .1);
                                p.osc.amp(.5, .1);
                                p.canvasScale -= .24 / p.breatheOutTimeFrames;
                                p.text("exhale", p.screenCenterX, p.screenCenterY);
                            }
                        }
                    }
                    p.strokeCap(p.SQUARE);
                    p.noFill();
                    p.stroke("#7f9f7f");
                    /** @type {number} */
                    var end = p.radiansSecond * p.breatheInTime - 90;
                    p.arc(p.width / 2, p.height / 2, p.r, p.r, p.radians(-90), p.radians(end), p.OPEN);
                    /** @type {number} */
                    var start = end;
                    if (p.holdTime > 0) {
                        /** @type {number} */
                        start = end + p.radiansSecond * p.holdTime;
                        p.stroke("#dcdccc");
                        p.arc(p.width / 2, p.height / 2, p.r, p.r, p.radians(end), p.radians(start), p.OPEN);
                    }
                    /** @type {number} */
                    var angle = start + p.radiansSecond * p.breatheOutTime;
                    p.stroke("#8faf9f");
                    p.arc(p.width / 2, p.height / 2, p.r, p.r, p.radians(start), p.radians(angle), p.OPEN);
                    p.translate(p.width / 2, p.height / 2);
                    var t = p.radians(p.base + p.speed);
                    p.base = p.base + p.speed;
                    /** @type {number} */
                    var lx = p.cos(t) * p.r2;
                    /** @type {number} */
                    var n = p.sin(t) * p.r2;
                    p.fill("#dca3a3");
                    p.noStroke();
                    p.circle(lx, n, 10);
                    if (p.base > 270) {
                        /** @type {number} */
                        p.base = -90;
                        /** @type {number} */
                        p.frame = 0;
                    }
                };
                /**
                 * @param {?} callback
                 * @param {?} cache
                 * @return {undefined}
                 */
                p.dataChanged = function (callback, cache) {
                    p.restart(callback);
                };
                /**
                 * @return {undefined}
                 */
                p.stop = function () {
                    if (void 0 !== p.osc) {
                        p.osc.stop();
                    }
                    p.remove();
                };
            };
        }

        __webpack_require__.d(__webpack_exports__, "a", function () {
            return test;
        });
        __webpack_require__("cb29");
    },
    "684d": function (main_file, modules, initCallback) {
        /**
         * @return {?}
         */
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var h = _vm._self._c || _h;
            return h("nav", {
                attrs: {
                    role: "navigation"
                }
            }, [h("div", {
                attrs: {
                    id: "menuToggle"
                }
            }, [h("input", {
                attrs: {
                    type: "checkbox",
                    checked: ""
                }
            }), h("span"), h("span"), h("span"), h("div", {
                attrs: {
                    id: "menu"
                }
            }, [_vm._m(0), h("p", [_vm._v(" " + _vm._s(_vm.text) + " ")]), 1 == _vm.showAnimationList ? h("p", {
                staticClass: "sectionHead"
            }, [_vm._v(" Animations: ")]) : _vm._e(), 1 == _vm.showAnimationList ? h("div", [h("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedAnimation,
                    expression: "selectedAnimation"
                }],
                attrs: {
                    type: "radio",
                    id: "anim1",
                    value: "0"
                },
                domProps: {
                    checked: _vm._q(_vm.selectedAnimation, "0")
                },
                on: {
                    change: function (newRangeElements) {
                        /** @type {string} */
                        _vm.selectedAnimation = "0";
                    }
                }
            }), h("label", {
                attrs: {
                    for: "anim1"
                }
            }, [_vm._v("Default")]), h("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedAnimation,
                    expression: "selectedAnimation"
                }],
                attrs: {
                    type: "radio",
                    id: "anim2",
                    value: "1"
                },
                domProps: {
                    checked: _vm._q(_vm.selectedAnimation, "1")
                },
                on: {
                    change: function (newRangeElements) {
                        /** @type {string} */
                        _vm.selectedAnimation = "1";
                    }
                }
            }), h("label", {
                attrs: {
                    for: "anim2"
                }
            }, [_vm._v("3 Circles")])]) : _vm._e(), 1 == _vm.showSoundSelection ? h("p", {
                staticClass: "sectionHead"
            }, [_vm._v(" Sounds: ")]) : _vm._e(), 1 == _vm.showSoundSelection ? h("div", [h("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedSound,
                    expression: "selectedSound"
                }],
                attrs: {
                    type: "radio",
                    id: "two",
                    value: "false"
                },
                domProps: {
                    checked: _vm._q(_vm.selectedSound, "false")
                },
                on: {
                    change: function (newRangeElements) {
                        /** @type {string} */
                        _vm.selectedSound = "false";
                    }
                }
            }), h("label", {
                attrs: {
                    for: "two"
                }
            }, [_vm._v("No Sound")]), h("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedSound,
                    expression: "selectedSound"
                }],
                attrs: {
                    type: "radio",
                    id: "one",
                    value: "true"
                },
                domProps: {
                    checked: _vm._q(_vm.selectedSound, "true")
                },
                on: {
                    change: function (newRangeElements) {
                        /** @type {string} */
                        _vm.selectedSound = "true";
                    }
                }
            }), h("label", {
                attrs: {
                    for: "two"
                }
            }, [_vm._v("Sound")])]) : _vm._e(), h("p", {
                staticClass: "sectionHead"
            }, [_vm._v("")]), _vm._m(1), _vm._m(2)])])]);
        };
        /** @type {!Array} */
        var retObjectS = [function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("", [_vm._v("Online "), _c("wbr"), _vm._v("Breathing Timer")]);
        }, function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("", [_c("li", [_c("a", {
                attrs: {
                    href: "."
                }
            }, [_vm._v("4-2-4 breathing timer")])]), _c("li", [_c("a", {
                attrs: {
                    href: "4-7-8-breathing"
                }
            }, [_vm._v("4 7 8 breathing timer")])]), _c("li", [_c("a", {
                attrs: {
                    href: "box-breathing"
                }
            }, [_vm._v("Box breathing timer")])]), _c("li", [_c("a", {
                attrs: {
                    href: "hrv-breathing"
                }
            }, [_vm._v("HRV breathing timer")])]), _c("li", [_c("a", {
                attrs: {
                    href: "breathing-timer-gifs"
                }
            }, [_vm._v("Get as GIFs")])])]);
        }, function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("", [_c("a", {
                attrs: {
                    href: "https://www.buymeacoffee.com/zenmix",
                    rel: "noopener",
                    target: "_blank"
                }
            }, [_c("", {
                staticClass: "donate",
                attrs: {
                    width: "150",
                    height: "50",
                    src: "img/buymeacoffee.gif",
                    alt: "support me with a coffee"
                }
            })])]);
        }];
        var data = {
            name: "sidebar",
            props: ["text", "showAnimationList", "showSoundSelection"],
            methods: {},
            data: function () {
                return {
                    selectedAnimation: 0,
                    selectedSound: false
                };
            },
            watch: {
                selectedSound: {
                    handler: function (msg, suppress_activity) {
                        this.$emit("sound-changed", "true" == msg);
                    },
                    deep: true
                },
                selectedAnimation: {
                    handler: function (e, dd) {
                        this.$emit("animation-changed", parseInt(e));
                    }
                }
            }
        };
        var request = data;
        var attrs = (initCallback("a916"), initCallback("2877"));
        var output = Object(attrs["a"])(request, render, retObjectS, false, null, "6d938342", null);
        modules["a"] = output.exports;
    },
    a916: function (data, linkedEntities, force) {
        force("5d27");
    },
    c138: function (module, basePath, msg) {
        /** @type {string} */
        module.exports = msg.p + "img/logo-white-small-space.a98699d3.png";
    },
    ddb8: function (mosaicDefinitionArray, keys, clone) {
        var attrs = clone("9483");
        Object(attrs["a"])("".concat("/breathing-timer/", "service-worker.js"), {
            ready: function () {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB");
            },
            registered: function () {
                console.log("Service worker has been registered.");
            },
            cached: function () {
                console.log("Content has been cached for offline use.");
            },
            updatefound: function () {
                console.log("New content is downloading.");
            },
            updated: function () {
                /** @type {string} */
                var ticketID = "1.0.8b";
                console.log("New content is available; please refresh." + ticketID);
                if (!window.refreshing) {
                    window.location.reload(true);
                    /** @type {boolean} */
                    window.refreshing = true;
                }
            },
            offline: function () {
                console.log("No internet connection found. App is running in offline mode.");
            },
            error: function (it) {
                console.error("Error during service worker registration:", it);
            }
        });
    },
    deac: function (main_file, modules, __webpack_require__) {
        /**
         * @return {?}
         */
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div");
        };
        /** @type {!Array} */
        var retObjectS = [];
        var __WEBPACK_IMPORTED_MODULE_20_date_fns_min__ = __webpack_require__("3425");
        var M = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_min__);
        var a = (__webpack_require__("e114"), {
            p5: M.a,
            name: "p5component",
            props: ["sketch", "data"],
            methods: {
                loadSketch: function () {
                    this.myp5 = new M.a(this.sketch(this, M.a));
                },
                stopSketch: function () {
                    if (this.myp5.stop) {
                        this.myp5.stop();
                    }
                }
            },
            data: function () {
                return {
                    myp5: {}
                };
            },
            mounted: function () {
                this.loadSketch();
            },
            watch: {
                data: {
                    handler: function (callback, index) {
                        if (this.myp5.dataChanged) {
                            this.myp5.dataChanged(callback, index);
                        }
                    },
                    deep: true
                }
            }
        });
        var string = a;
        var attributes = __webpack_require__("2877");
        var output = Object(attributes["a"])(string, render, retObjectS, false, null, "63e9f24c", null);
        modules["a"] = output.exports;
    },
    e114: function (m, e, doCommit) {
        var sha;
        var o;
        doCommit("4de4");
        doCommit("4160");
        doCommit("c975");
        doCommit("a15b");
        doCommit("d81d");
        doCommit("13d5");
        doCommit("fb6a");
        doCommit("45fc");
        doCommit("a434");
        doCommit("c19f");
        doCommit("b0c0");
        doCommit("a9e3");
        doCommit("b680");
        doCommit("b64b");
        doCommit("d3b7");
        doCommit("ac1f");
        doCommit("25f0");
        doCommit("3ca3");
        doCommit("466d");
        doCommit("5319");
        doCommit("1276");
        doCommit("498a");
        doCommit("4c53");
        doCommit("cfc3");
        doCommit("5cc6");
        doCommit("9a8c");
        doCommit("a975");
        doCommit("735e");
        doCommit("c1ac");
        doCommit("d139");
        doCommit("3a7b");
        doCommit("d5d6");
        doCommit("82f8");
        doCommit("e91f");
        doCommit("60bd");
        doCommit("5f96");
        doCommit("3280");
        doCommit("3fcc");
        doCommit("ca91");
        doCommit("25a1");
        doCommit("cd26");
        doCommit("3c5d");
        doCommit("2954");
        doCommit("649e");
        doCommit("219c");
        doCommit("170b");
        doCommit("b39a");
        doCommit("72f7");
        doCommit("159b");
        doCommit("ddb0");
        doCommit("2b3d");
        var prepFilesForDownload = doCommit("7037");
        (function (addedRenderer, saveNotifs) {
            /** @type {!Array} */
            sha = [doCommit("3425")];
            o = function (notifications) {
                saveNotifs(notifications);
            }.apply(e, sha);
            if (!(void 0 === o)) {
                m.exports = o;
            }
        })(0, function (Tone) {
            var e;
            var i;
            var returnValue;
            var master;
            var _;
            var a;
            var slater;
            var firstIsCO;
            var ivib;
            var tmpCkEl;
            var offset;
            var type;
            var e6484;
            var newPath;
            var y;
            var geocoderElem;
            var start_flight_idx;
            (function () {
                (function () {
                    /**
                     * @param {number} param
                     * @return {undefined}
                     */
                    function fixSetTarget(param) {
                        if (param) {
                            if (!param.setTargetAtTime) {
                                param.setTargetAtTime = param.setTargetValueAtTime;
                            }
                        }
                    }

                    if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
                        window.AudioContext = window.webkitAudioContext;
                        if ("function" !== typeof AudioContext.prototype.createGain) {
                            /** @type {function(this:AudioContext): !GainNode} */
                            AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
                        }
                        if ("function" !== typeof AudioContext.prototype.createDelay) {
                            /** @type {function(this:AudioContext, number=): !DelayNode} */
                            AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
                        }
                        if ("function" !== typeof AudioContext.prototype.createScriptProcessor) {
                            /** @type {function(this:AudioContext, number, number, number): !ScriptProcessorNode} */
                            AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
                        }
                        if ("function" !== typeof AudioContext.prototype.createPeriodicWave) {
                            AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
                        }
                        /** @type {function(this:AudioContext): !GainNode} */
                        AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
                        /**
                         * @return {!GainNode}
                         */
                        AudioContext.prototype.createGain = function () {
                            /** @type {!GainNode} */
                            var node = this.internal_createGain();
                            return fixSetTarget(node.gain), node;
                        };
                        /** @type {function(this:AudioContext, number=): !DelayNode} */
                        AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
                        /**
                         * @param {number=} maxDelayTime
                         * @return {!DelayNode}
                         */
                        AudioContext.prototype.createDelay = function (maxDelayTime) {
                            /** @type {!DelayNode} */
                            var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
                            return fixSetTarget(node.delayTime), node;
                        };
                        /** @type {function(this:AudioContext): !AudioBufferSourceNode} */
                        AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
                        /**
                         * @return {!AudioBufferSourceNode}
                         */
                        AudioContext.prototype.createBufferSource = function () {
                            /** @type {!AudioBufferSourceNode} */
                            var node = this.internal_createBufferSource();
                            return node.start ? (node.internal_start = node.start, node.start = function (when, offset, duration) {
                                if ("undefined" !== typeof duration) {
                                    node.internal_start(when || 0, offset, duration);
                                } else {
                                    node.internal_start(when || 0, offset || 0);
                                }
                            }) : node.start = function (when, offset, duration) {
                                if (offset || duration) {
                                    this.noteGrainOn(when || 0, offset, duration);
                                } else {
                                    this.noteOn(when || 0);
                                }
                            }, node.stop ? (node.internal_stop = node.stop, node.stop = function (when) {
                                node.internal_stop(when || 0);
                            }) : node.stop = function (when) {
                                this.noteOff(when || 0);
                            }, fixSetTarget(node.playbackRate), node;
                        };
                        /** @type {function(this:AudioContext): !DynamicsCompressorNode} */
                        AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
                        /**
                         * @return {!DynamicsCompressorNode}
                         */
                        AudioContext.prototype.createDynamicsCompressor = function () {
                            /** @type {!DynamicsCompressorNode} */
                            var node = this.internal_createDynamicsCompressor();
                            return fixSetTarget(node.threshold), fixSetTarget(node.knee), fixSetTarget(node.ratio), fixSetTarget(node.reduction), fixSetTarget(node.attack), fixSetTarget(node.release), node;
                        };
                        /** @type {function(this:AudioContext): !BiquadFilterNode} */
                        AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
                        /**
                         * @return {!BiquadFilterNode}
                         */
                        AudioContext.prototype.createBiquadFilter = function () {
                            /** @type {!BiquadFilterNode} */
                            var node = this.internal_createBiquadFilter();
                            return fixSetTarget(node.frequency), fixSetTarget(node.detune), fixSetTarget(node.Q), fixSetTarget(node.gain), node;
                        };
                        if ("function" !== typeof AudioContext.prototype.createOscillator) {
                            /** @type {function(this:AudioContext): !OscillatorNode} */
                            AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
                            /**
                             * @return {!OscillatorNode}
                             */
                            AudioContext.prototype.createOscillator = function () {
                                /** @type {!OscillatorNode} */
                                var node = this.internal_createOscillator();
                                return node.start ? (node.internal_start = node.start, node.start = function (when) {
                                    node.internal_start(when || 0);
                                }) : node.start = function (when) {
                                    this.noteOn(when || 0);
                                }, node.stop ? (node.internal_stop = node.stop, node.stop = function (when) {
                                    node.internal_stop(when || 0);
                                }) : node.stop = function (when) {
                                    this.noteOff(when || 0);
                                }, node.setPeriodicWave || (node.setPeriodicWave = node.setWaveTable), fixSetTarget(node.frequency), fixSetTarget(node.detune), node;
                            };
                        }
                    }
                    if (window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext")) {
                        window.OfflineAudioContext = window.webkitOfflineAudioContext;
                    }
                })(window);
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                /** @type {!Element} */
                var doc = document.createElement("audio");
                /**
                 * @return {?}
                 */
                Tone.prototype.isSupported = function () {
                    return !!doc.canPlayType;
                };
                /**
                 * @return {?}
                 */
                var isMP3Supported = function () {
                    return !!doc.canPlayType && doc.canPlayType('audio/ogg; codecs="vorbis"');
                };
                /**
                 * @return {?}
                 */
                var isAACSupported = function () {
                    return !!doc.canPlayType && doc.canPlayType("audio/mpeg;");
                };
                /**
                 * @return {?}
                 */
                var isAIFSupported = function () {
                    return !!doc.canPlayType && doc.canPlayType('audio/wav; codecs="1"');
                };
                /**
                 * @return {?}
                 */
                var isWAVSupported = function () {
                    return !!doc.canPlayType && (doc.canPlayType("audio/x-m4a;") || doc.canPlayType("audio/aac;"));
                };
                /**
                 * @return {?}
                 */
                var isOGGSupported = function () {
                    return !!doc.canPlayType && doc.canPlayType("audio/x-aiff;");
                };
                /**
                 * @param {string} filePath
                 * @return {?}
                 */
                Tone.prototype.isFileSupported = function (filePath) {
                    switch (filePath.toLowerCase()) {
                        case "mp3":
                            return isAACSupported();
                        case "wav":
                            return isAIFSupported();
                        case "ogg":
                            return isMP3Supported();
                        case "aac":
                        case "m4a":
                        case "mp4":
                            return isWAVSupported();
                        case "aif":
                        case "aiff":
                            return isOGGSupported();
                        default:
                            return false;
                    }
                };
            })();
            (function (addedRenderer, saveNotifs) {
                e = function () {
                    return saveNotifs();
                }();
            })(0, function () {
                /**
                 * @param {!Object} context
                 * @return {undefined}
                 */
                function start(context) {
                    var soundBuff = context.createBuffer(1, 1, context.sampleRate);
                    var source = context.createBufferSource();
                    source.buffer = soundBuff;
                    source.connect(context.destination);
                    source.start(0);
                    if (context.resume) {
                        context.resume();
                    }
                }

                /**
                 * @param {!Object} f
                 * @return {?}
                 */
                function _validate(f) {
                    return "running" === f.state;
                }

                /**
                 * @param {!Object} message
                 * @param {!Function} loop
                 * @return {undefined}
                 */
                function play(message, loop) {
                    /**
                     * @return {undefined}
                     */
                    function resume() {
                        if (_validate(message)) {
                            loop();
                        } else {
                            requestAnimationFrame(resume);
                            if (message.resume) {
                                message.resume();
                            }
                        }
                    }

                    if (_validate(message)) {
                        loop();
                    } else {
                        resume();
                    }
                }

                /**
                 * @param {!Object} element
                 * @param {!Array} map
                 * @param {string} data
                 * @return {undefined}
                 */
                function callback(element, map, data) {
                    if (Array.isArray(element) || NodeList && element instanceof NodeList) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < element.length; i++) {
                            callback(element[i], map, data);
                        }
                    } else {
                        if ("string" === typeof element) {
                            callback(document.querySelectorAll(element), map, data);
                        } else {
                            if (element.jquery && "function" === typeof element.toArray) {
                                callback(element.toArray(), map, data);
                            } else {
                                if (Element && element instanceof Element) {
                                    var tap = new TapListener(element, data);
                                    map.push(tap);
                                }
                            }
                        }
                    }
                }

                /**
                 * @param {undefined} data
                 * @param {!Element} value
                 * @param {?} play
                 * @return {?}
                 */
                function update(data, value, play) {
                    /** @type {!Promise} */
                    var serializerPromise = new Promise(function (url) {
                        play(data, url);
                    });
                    /** @type {!Array} */
                    var children = [];
                    return value || (value = document.body), callback(value, children, data), serializerPromise.then(function () {
                        /** @type {number} */
                        var i = 0;
                        for (; i < children.length; i++) {
                            children[i].dispose();
                        }
                        /** @type {null} */
                        children = null;
                        if (play) {
                            play();
                        }
                    }), serializerPromise;
                }

                /**
                 * @param {!Element} element
                 * @param {?} elem
                 * @return {undefined}
                 */
                var TapListener = function (element, elem) {
                    /** @type {boolean} */
                    this._dragged = false;
                    /** @type {!Element} */
                    this._element = element;
                    this._bindedMove = this._moved.bind(this);
                    this._bindedEnd = this._ended.bind(this, elem);
                    element.addEventListener("touchstart", this._bindedEnd);
                    element.addEventListener("touchmove", this._bindedMove);
                    element.addEventListener("touchend", this._bindedEnd);
                    element.addEventListener("mouseup", this._bindedEnd);
                };
                return TapListener.prototype._moved = function (e) {
                    /** @type {boolean} */
                    this._dragged = true;
                }, TapListener.prototype._ended = function (e) {
                    if (!this._dragged) {
                        start(e);
                    }
                    /** @type {boolean} */
                    this._dragged = false;
                }, TapListener.prototype.dispose = function () {
                    this._element.removeEventListener("touchstart", this._bindedEnd);
                    this._element.removeEventListener("touchmove", this._bindedMove);
                    this._element.removeEventListener("touchend", this._bindedEnd);
                    this._element.removeEventListener("mouseup", this._bindedEnd);
                    /** @type {null} */
                    this._bindedMove = null;
                    /** @type {null} */
                    this._bindedEnd = null;
                    /** @type {null} */
                    this._element = null;
                }, update;
            });
            i = function () {
                var ctx;
                /**
                 * @param {number} inputs
                 * @param {number} outputs
                 * @return {undefined}
                 */
                var Tone = function (inputs, outputs) {
                    if (this.isUndef(inputs) || 1 === inputs) {
                        this.input = this.context.createGain();
                    } else {
                        if (inputs > 1) {
                            /** @type {!Array} */
                            this.input = new Array(inputs);
                        }
                    }
                    if (this.isUndef(outputs) || 1 === outputs) {
                        this.output = this.context.createGain();
                    } else {
                        if (outputs > 1) {
                            /** @type {!Array} */
                            this.output = new Array(inputs);
                        }
                    }
                };
                return Tone.prototype.set = function (obj, value, rampTime) {
                    if (this.isObject(obj)) {
                        /** @type {number} */
                        rampTime = value;
                    } else {
                        if (this.isString(obj)) {
                            var parent = {};
                            /** @type {number} */
                            parent[obj] = value;
                            obj = parent;
                        }
                    }
                    var name;
                    t: for (name in obj) {
                        value = obj[name];
                        var params = this;
                        if (-1 !== name.indexOf(".")) {
                            /** @type {!Array<string>} */
                            var segments = name.split(".");
                            /** @type {number} */
                            var i = 0;
                            for (; i < segments.length - 1; i++) {
                                if (params = params[segments[i]], params instanceof Tone) {
                                    segments.splice(0, i + 1);
                                    /** @type {string} */
                                    var c = segments.join(".");
                                    params.set(c, value);
                                    continue t;
                                }
                            }
                            /** @type {string} */
                            name = segments[segments.length - 1];
                        }
                        var param = params[name];
                        if (!this.isUndef(param)) {
                            if (Tone.Signal && param instanceof Tone.Signal || Tone.Param && param instanceof Tone.Param) {
                                if (param.value !== value) {
                                    if (this.isUndef(rampTime)) {
                                        /** @type {number} */
                                        param.value = value;
                                    } else {
                                        param.rampTo(value, rampTime);
                                    }
                                }
                            } else {
                                if (param instanceof AudioParam) {
                                    if (param.value !== value) {
                                        /** @type {number} */
                                        param.value = value;
                                    }
                                } else {
                                    if (param instanceof Tone) {
                                        param.set(value);
                                    } else {
                                        if (param !== value) {
                                            /** @type {number} */
                                            params[name] = value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return this;
                }, Tone.prototype.get = function (params) {
                    if (this.isUndef(params)) {
                        params = this._collectDefaults(this.constructor);
                    } else {
                        if (this.isString(params)) {
                            /** @type {!Array} */
                            params = [params];
                        }
                    }
                    var ret = {};
                    /** @type {number} */
                    var i = 0;
                    for (; i < params.length; i++) {
                        var attr = params[i];
                        var parent = this;
                        var subRet = ret;
                        if (-1 !== attr.indexOf(".")) {
                            var attrSplit = attr.split(".");
                            /** @type {number} */
                            var j = 0;
                            for (; j < attrSplit.length - 1; j++) {
                                var subAttr = attrSplit[j];
                                subRet[subAttr] = subRet[subAttr] || {};
                                subRet = subRet[subAttr];
                                parent = parent[subAttr];
                            }
                            attr = attrSplit[attrSplit.length - 1];
                        }
                        var param = parent[attr];
                        if (this.isObject(params[attr])) {
                            subRet[attr] = param.get();
                        } else {
                            if (Tone.Signal && param instanceof Tone.Signal || Tone.Param && param instanceof Tone.Param || param instanceof AudioParam) {
                                subRet[attr] = param.value;
                            } else {
                                if (param instanceof Tone) {
                                    subRet[attr] = param.get();
                                } else {
                                    if (!(this.isFunction(param) || this.isUndef(param))) {
                                        subRet[attr] = param;
                                    }
                                }
                            }
                        }
                    }
                    return ret;
                }, Tone.prototype._collectDefaults = function (constr) {
                    /** @type {!Array} */
                    var ret = [];
                    if (this.isUndef(constr.defaults) || (ret = Object.keys(constr.defaults)), !this.isUndef(constr._super)) {
                        var superDefs = this._collectDefaults(constr._super);
                        /** @type {number} */
                        var i = 0;
                        for (; i < superDefs.length; i++) {
                            if (-1 === ret.indexOf(superDefs[i])) {
                                ret.push(superDefs[i]);
                            }
                        }
                    }
                    return ret;
                }, Tone.prototype.toString = function () {
                    var className;
                    for (className in Tone) {
                        var isLetter = className[0].match(/^[A-Z]$/);
                        /** @type {boolean} */
                        var sameConstructor = Tone[className] === this.constructor;
                        if (this.isFunction(Tone[className]) && isLetter && sameConstructor) {
                            return className;
                        }
                    }
                    return "Tone";
                }, Object.defineProperty(Tone.prototype, "numberOfInputs", {
                    get: function () {
                        return this.input ? this.isArray(this.input) ? this.input.length : 1 : 0;
                    }
                }), Object.defineProperty(Tone.prototype, "numberOfOutputs", {
                    get: function () {
                        return this.output ? this.isArray(this.output) ? this.output.length : 1 : 0;
                    }
                }), Tone.prototype.dispose = function () {
                    return this.isUndef(this.input) || (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), this.isUndef(this.output) || (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this;
                }, Tone.prototype.connect = function (unit, callback, i) {
                    return Array.isArray(this.output) ? (callback = this.defaultArg(callback, 0), this.output[callback].connect(unit, 0, i)) : this.output.connect(unit, callback, i), this;
                }, Tone.prototype.disconnect = function (destination, outputNum, inputNum) {
                    if (this.isArray(this.output)) {
                        if (this.isNumber(destination)) {
                            this.output[destination].disconnect();
                        } else {
                            outputNum = this.defaultArg(outputNum, 0);
                            this.output[outputNum].disconnect(destination, 0, inputNum);
                        }
                    } else {
                        this.output.disconnect.apply(this.output, arguments);
                    }
                }, Tone.prototype.connectSeries = function () {
                    if (arguments.length > 1) {
                        var t = arguments[0];
                        /** @type {number} */
                        var _i = 1;
                        for (; _i < arguments.length; _i++) {
                            var i = arguments[_i];
                            t.connect(i);
                            t = i;
                        }
                    }
                    return this;
                }, Tone.prototype.chain = function () {
                    if (arguments.length > 0) {
                        var t = this;
                        /** @type {number} */
                        var _i = 0;
                        for (; _i < arguments.length; _i++) {
                            var i = arguments[_i];
                            t.connect(i);
                            t = i;
                        }
                    }
                    return this;
                }, Tone.prototype.fan = function () {
                    if (arguments.length > 0) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < arguments.length; i++) {
                            this.connect(arguments[i]);
                        }
                    }
                    return this;
                }, AudioNode.prototype.chain = Tone.prototype.chain, AudioNode.prototype.fan = Tone.prototype.fan, Tone.prototype.defaultArg = function (given, fallback) {
                    if (this.isObject(given) && this.isObject(fallback)) {
                        var ret = {};
                        var givenProp;
                        for (givenProp in given) {
                            ret[givenProp] = this.defaultArg(fallback[givenProp], given[givenProp]);
                        }
                        var fallbackProp;
                        for (fallbackProp in fallback) {
                            ret[fallbackProp] = this.defaultArg(given[fallbackProp], fallback[fallbackProp]);
                        }
                        return ret;
                    }
                    return this.isUndef(given) ? fallback : given;
                }, Tone.prototype.optionsObject = function (values, keys, defaults) {
                    var options = {};
                    if (1 === values.length && this.isObject(values[0])) {
                        options = values[0];
                    } else {
                        /** @type {number} */
                        var i = 0;
                        for (; i < keys.length; i++) {
                            options[keys[i]] = values[i];
                        }
                    }
                    return this.isUndef(defaults) ? options : this.defaultArg(options, defaults);
                }, Tone.prototype.isUndef = function (val) {
                    return "undefined" === typeof val;
                }, Tone.prototype.isFunction = function (obj) {
                    return "function" === typeof obj;
                }, Tone.prototype.isNumber = function (val) {
                    return "number" === typeof val;
                }, Tone.prototype.isObject = function (obj) {
                    return "[object Object]" === Object.prototype.toString.call(obj) && obj.constructor === Object;
                }, Tone.prototype.isBoolean = function (val) {
                    return "boolean" === typeof val;
                }, Tone.prototype.isArray = function (arr) {
                    return Array.isArray(arr);
                }, Tone.prototype.isString = function (val) {
                    return "string" === typeof val;
                }, Tone.noOp = function () {
                }, Tone.prototype._readOnly = function (property) {
                    if (Array.isArray(property)) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < property.length; i++) {
                            this._readOnly(property[i]);
                        }
                    } else {
                        Object.defineProperty(this, property, {
                            writable: false,
                            enumerable: true
                        });
                    }
                }, Tone.prototype._writable = function (property) {
                    if (Array.isArray(property)) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < property.length; i++) {
                            this._writable(property[i]);
                        }
                    } else {
                        Object.defineProperty(this, property, {
                            writable: true
                        });
                    }
                }, Tone.State = {
                    Started: "started",
                    Stopped: "stopped",
                    Paused: "paused"
                }, Tone.prototype.equalPowerScale = function (percent) {
                    /** @type {number} */
                    var PI2 = .5 * Math.PI;
                    return Math.sin(percent * PI2);
                }, Tone.prototype.dbToGain = function (diff) {
                    return Math.pow(2, diff / 6);
                }, Tone.prototype.gainToDb = function (gain) {
                    return Math.log(gain) / Math.LN10 * 20;
                }, Tone.prototype.intervalToFrequencyRatio = function (interval) {
                    return Math.pow(2, interval / 12);
                }, Tone.prototype.now = function () {
                    return Tone.context.now();
                }, Tone.now = function () {
                    return Tone.context.now();
                }, Tone.extend = function (child, parent) {
                    /**
                     * @return {undefined}
                     */
                    function ctor() {
                    }

                    if (Tone.prototype.isUndef(parent)) {
                        /** @type {function(number, number): undefined} */
                        parent = Tone;
                    }
                    ctor.prototype = parent.prototype;
                    child.prototype = new ctor;
                    /** @type {!Function} */
                    child.prototype.constructor = child;
                    /** @type {!Function} */
                    child._super = parent;
                }, Object.defineProperty(Tone, "context", {
                    get: function () {
                        return ctx;
                    },
                    set: function (context) {
                        ctx = Tone.Context && context instanceof Tone.Context ? context : new Tone.Context(context);
                        if (Tone.Context) {
                            Tone.Context.emit("init", ctx);
                        }
                    }
                }), Object.defineProperty(Tone.prototype, "context", {
                    get: function () {
                        return Tone.context;
                    }
                }), Tone.setContext = function (context) {
                    /** @type {!Object} */
                    Tone.context = context;
                }, Object.defineProperty(Tone.prototype, "blockTime", {
                    get: function () {
                        return 128 / this.context.sampleRate;
                    }
                }), Object.defineProperty(Tone.prototype, "sampleTime", {
                    get: function () {
                        return 1 / this.context.sampleRate;
                    }
                }), Object.defineProperty(Tone, "supported", {
                    get: function () {
                        /** @type {boolean} */
                        var hasAudioContext = window.hasOwnProperty("AudioContext") || window.hasOwnProperty("webkitAudioContext");
                        /** @type {boolean} */
                        var hasPromises = window.hasOwnProperty("Promise");
                        /** @type {boolean} */
                        var hasWorkers = window.hasOwnProperty("Worker");
                        return hasAudioContext && hasPromises && hasWorkers;
                    }
                }), Tone.version = "r10", window.TONE_SILENCE_VERSION_LOGGING, Tone;
            }();
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.Emitter = function () {
                    this._events = {};
                };
                Tone.extend(Tone.Emitter);
                /**
                 * @param {string} type
                 * @param {?} data
                 * @return {?}
                 */
                Tone.Emitter.prototype.on = function (type, data) {
                    var dataPart = type.split(/\W+/);
                    /** @type {number} */
                    var i = 0;
                    for (; i < dataPart.length; i++) {
                        var type = dataPart[i];
                        if (!this._events.hasOwnProperty(type)) {
                            /** @type {!Array} */
                            this._events[type] = [];
                        }
                        this._events[type].push(data);
                    }
                    return this;
                };
                /**
                 * @param {string} type
                 * @param {!Function} callback
                 * @return {?}
                 */
                Tone.Emitter.prototype.off = function (type, callback) {
                    var ta = type.split(/\W+/);
                    /** @type {number} */
                    var i = 0;
                    for (; i < ta.length; i++) {
                        if (type = ta[i], this._events.hasOwnProperty(type)) {
                            if (Tone.prototype.isUndef(callback)) {
                                /** @type {!Array} */
                                this._events[type] = [];
                            } else {
                                var listeners = this._events[type];
                                /** @type {number} */
                                var i = 0;
                                for (; i < listeners.length; i++) {
                                    if (listeners[i] === callback) {
                                        listeners.splice(i, 1);
                                    }
                                }
                            }
                        }
                    }
                    return this;
                };
                /**
                 * @param {string} type
                 * @return {?}
                 */
                Tone.Emitter.prototype.emit = function (type) {
                    if (this._events) {
                        var searchPipeline = Array.apply(null, arguments).slice(1);
                        if (this._events.hasOwnProperty(type)) {
                            var arr = this._events[type];
                            /** @type {number} */
                            var i = 0;
                            var arrSize = arr.length;
                            for (; i < arrSize; i++) {
                                arr[i].apply(this, searchPipeline);
                            }
                        }
                    }
                    return this;
                };
                /**
                 * @param {!Object} result
                 * @return {undefined}
                 */
                Tone.Emitter.mixin = function (result) {
                    /** @type {!Array} */
                    var props = ["on", "off", "emit"];
                    result._events = {};
                    /** @type {number} */
                    var i = 0;
                    for (; i < props.length; i++) {
                        var name = props[i];
                        var iter = Tone.Emitter.prototype[name];
                        result[name] = iter;
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.Emitter.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._events = null, this;
                };
                Tone.Emitter;
            })(i);
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                function SailsIOClient() {
                    /**
                     * @param {!Object} unit
                     * @param {number} n
                     * @param {number} i
                     * @return {undefined}
                     */
                    function connect(unit, n, i) {
                        if (unit.input) {
                            if (Array.isArray(unit.input)) {
                                if (Tone.prototype.isUndef(i)) {
                                    /** @type {number} */
                                    i = 0;
                                }
                                this.connect(unit.input[i]);
                            } else {
                                this.connect(unit.input, n, i);
                            }
                        } else {
                            try {
                                if (unit instanceof AudioNode) {
                                    util.call(this, unit, n, i);
                                } else {
                                    util.call(this, unit, n);
                                }
                            } catch (to3) {
                                throw new Error("error connecting to node: " + unit + "\n" + to3);
                            }
                        }
                    }

                    /**
                     * @param {string} B
                     * @param {number} outNum
                     * @param {number} inNum
                     * @return {undefined}
                     */
                    function toneDisconnect(B, outNum, inNum) {
                        if (B && B.input && Array.isArray(B.input)) {
                            if (Tone.prototype.isUndef(inNum)) {
                                /** @type {number} */
                                inNum = 0;
                            }
                            this.disconnect(B.input[inNum], outNum, inNum);
                        } else {
                            if (B && B.input) {
                                this.disconnect(B.input, outNum, inNum);
                            } else {
                                try {
                                    disconnect.apply(this, arguments);
                                } catch (to3) {
                                    throw new Error("error disconnecting node: " + B + "\n" + to3);
                                }
                            }
                        }
                    }

                    /** @type {function(this:AudioNode, (AudioNode|AudioParam), number=, number=): (AudioNode|null|undefined)} */
                    var util = AudioNode.prototype.connect;
                    /** @type {function(this:AudioNode, (AudioNode|AudioParam|number)=, number=, number=): ?} */
                    var disconnect = AudioNode.prototype.disconnect;
                    if (AudioNode.prototype.connect !== connect) {
                        /** @type {function(!Object, number, number): undefined} */
                        AudioNode.prototype.connect = connect;
                        /** @type {function(string, number, number): undefined} */
                        AudioNode.prototype.disconnect = toneDisconnect;
                    }
                }

                if (!window.hasOwnProperty("AudioContext") && window.hasOwnProperty("webkitAudioContext")) {
                    window.AudioContext = window.webkitAudioContext;
                }
                /**
                 * @param {!AudioContext} value
                 * @return {undefined}
                 */
                Tone.Context = function (value) {
                    var prop;
                    for (prop in Tone.Emitter.call(this), value || (value = new window.AudioContext), this._context = value, this._context) {
                        this._defineProperty(this._context, prop);
                    }
                    /** @type {string} */
                    this._latencyHint = "interactive";
                    /** @type {number} */
                    this._lookAhead = .1;
                    /** @type {number} */
                    this._updateInterval = this._lookAhead / 3;
                    /** @type {number} */
                    this._computedUpdateInterval = 0;
                    this._worker = this._createWorker();
                    this._constants = {};
                };
                Tone.extend(Tone.Context, Tone.Emitter);
                Tone.Emitter.mixin(Tone.Context);
                /**
                 * @param {!Object} obj
                 * @param {string} prop
                 * @return {undefined}
                 */
                Tone.Context.prototype._defineProperty = function (obj, prop) {
                    if (this.isUndef(this[prop])) {
                        Object.defineProperty(this, prop, {
                            get: function () {
                                return "function" === typeof obj[prop] ? obj[prop].bind(obj) : obj[prop];
                            },
                            set: function (value) {
                                /** @type {!Object} */
                                obj[prop] = value;
                            }
                        });
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.Context.prototype.now = function () {
                    return this._context.currentTime;
                };
                /**
                 * @return {?}
                 */
                Tone.Context.prototype._createWorker = function () {
                    window.URL = window.URL || window.webkitURL;
                    /** @type {!Blob} */
                    var moduleBlob = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]);
                    /** @type {string} */
                    var workerFilename = URL.createObjectURL(moduleBlob);
                    /** @type {!Worker} */
                    var pdfWorker = new Worker(workerFilename);
                    return pdfWorker.addEventListener("message", function () {
                        this.emit("tick");
                    }.bind(this)), pdfWorker.addEventListener("message", function () {
                        var now = this.now();
                        if (this.isNumber(this._lastUpdate)) {
                            /** @type {number} */
                            var diff = now - this._lastUpdate;
                            /** @type {number} */
                            this._computedUpdateInterval = Math.max(diff, .97 * this._computedUpdateInterval);
                        }
                        this._lastUpdate = now;
                    }.bind(this)), pdfWorker;
                };
                /**
                 * @param {number} val
                 * @return {?}
                 */
                Tone.Context.prototype.getConstant = function (val) {
                    if (this._constants[val]) {
                        return this._constants[val];
                    }
                    var buffer = this._context.createBuffer(1, 128, this._context.sampleRate);
                    var curCont = buffer.getChannelData(0);
                    /** @type {number} */
                    var j = 0;
                    for (; j < curCont.length; j++) {
                        /** @type {number} */
                        curCont[j] = val;
                    }
                    var constant = this._context.createBufferSource();
                    return constant.channelCount = 1, constant.channelCountMode = "explicit", constant.buffer = buffer, constant.loop = true, constant.start(0), this._constants[val] = constant, constant;
                };
                Object.defineProperty(Tone.Context.prototype, "lag", {
                    get: function () {
                        /** @type {number} */
                        var diff = this._computedUpdateInterval - this._updateInterval;
                        return diff = Math.max(diff, 0), diff;
                    }
                });
                Object.defineProperty(Tone.Context.prototype, "lookAhead", {
                    get: function () {
                        return this._lookAhead;
                    },
                    set: function (value) {
                        /** @type {!Object} */
                        this._lookAhead = value;
                    }
                });
                Object.defineProperty(Tone.Context.prototype, "updateInterval", {
                    get: function () {
                        return this._updateInterval;
                    },
                    set: function (value) {
                        /** @type {number} */
                        this._updateInterval = Math.max(value, Tone.prototype.blockTime);
                        this._worker.postMessage(Math.max(1e3 * value, 1));
                    }
                });
                Object.defineProperty(Tone.Context.prototype, "latencyHint", {
                    get: function () {
                        return this._latencyHint;
                    },
                    set: function (i) {
                        /** @type {string} */
                        var lookAhead = i;
                        if (this._latencyHint = i, this.isString(i)) {
                            switch (i) {
                                case "interactive":
                                    /** @type {number} */
                                    lookAhead = .1;
                                    /** @type {string} */
                                    this._context.latencyHint = i;
                                    break;
                                case "playback":
                                    /** @type {number} */
                                    lookAhead = .8;
                                    /** @type {string} */
                                    this._context.latencyHint = i;
                                    break;
                                case "balanced":
                                    /** @type {number} */
                                    lookAhead = .25;
                                    /** @type {string} */
                                    this._context.latencyHint = i;
                                    break;
                                case "fastest":
                                    /** @type {number} */
                                    lookAhead = .01;
                                    break;
                            }
                        }
                        this.lookAhead = lookAhead;
                        /** @type {number} */
                        this.updateInterval = lookAhead / 3;
                    }
                });
                if (Tone.supported) {
                    SailsIOClient();
                    Tone.context = new Tone.Context;
                } else {
                    console.warn("This browser does not support Tone.js");
                }
                Tone.Context;
            })(i);
            returnValue = function (e, addedRenderer, page) {
                var context = new window.AudioContext;
                return page.context.dispose(), page.setContext(context), Tone.prototype.getAudioContext = function () {
                    return context;
                }, Tone.prototype.userStartAudio = function (x, n) {
                    /** @type {!Object} */
                    var p = x;
                    return x instanceof Tone.Element ? p = x.elt : x instanceof Array && x[0] instanceof Tone.Element && (p = x.map(function (dropZone) {
                        return dropZone.elt;
                    })), e(context, p, n);
                }, context;
            }(e, 0, i);
            master = function (audiocontext) {
                /**
                 * @return {undefined}
                 */
                var Master = function () {
                    this.input = audiocontext.createGain();
                    this.output = audiocontext.createGain();
                    this.limiter = audiocontext.createDynamicsCompressor();
                    /** @type {number} */
                    this.limiter.threshold.value = -3;
                    /** @type {number} */
                    this.limiter.ratio.value = 20;
                    /** @type {number} */
                    this.limiter.knee.value = 1;
                    /** @type {!AudioContext} */
                    this.audiocontext = audiocontext;
                    this.output.disconnect();
                    this.input.connect(this.limiter);
                    this.limiter.connect(this.output);
                    this.meter = audiocontext.createGain();
                    this.fftMeter = audiocontext.createGain();
                    this.output.connect(this.meter);
                    this.output.connect(this.fftMeter);
                    this.output.connect(this.audiocontext.destination);
                    /** @type {!Array} */
                    this.soundArray = [];
                    /** @type {!Array} */
                    this.parts = [];
                    /** @type {!Array} */
                    this.extensions = [];
                };
                var p5sound = new Master;
                return Tone.prototype.getMasterVolume = function () {
                    return p5sound.output.gain.value;
                }, Tone.prototype.masterVolume = function (value, rampTime, tFromNow) {
                    if ("number" === typeof value) {
                        rampTime = rampTime || 0;
                        tFromNow = tFromNow || 0;
                        var now = p5sound.audiocontext.currentTime;
                        var A = p5sound.output.gain.value;
                        p5sound.output.gain.cancelScheduledValues(now + tFromNow);
                        p5sound.output.gain.linearRampToValueAtTime(A, now + tFromNow);
                        p5sound.output.gain.linearRampToValueAtTime(value, now + tFromNow + rampTime);
                    } else {
                        if (!value) {
                            return p5sound.output.gain;
                        }
                        value.connect(p5sound.output.gain);
                    }
                }, Tone.prototype.soundOut = Tone.soundOut = p5sound, Tone.soundOut._silentNode = p5sound.audiocontext.createGain(), Tone.soundOut._silentNode.gain.value = 0, Tone.soundOut._silentNode.connect(p5sound.audiocontext.destination), p5sound;
            }(returnValue);
            _ = function () {
                /**
                 * @param {!AudioBuffer} from
                 * @return {?}
                 */
                function mergeAudioBuffers(from) {
                    var bufferL;
                    var bufferR;
                    bufferL = from.getChannelData(0);
                    bufferR = from.numberOfChannels > 1 ? from.getChannelData(1) : bufferL;
                    var interleaved = interleave(bufferL, bufferR);
                    var options = new window.ArrayBuffer(44 + 2 * interleaved.length);
                    var view = new window.DataView(options);
                    writeUTFBytes(view, 0, "RIFF");
                    view.setUint32(4, 36 + 2 * interleaved.length, true);
                    writeUTFBytes(view, 8, "WAVE");
                    writeUTFBytes(view, 12, "fmt ");
                    view.setUint32(16, 16, true);
                    view.setUint16(20, 1, true);
                    view.setUint16(22, 2, true);
                    view.setUint32(24, p5sound.audiocontext.sampleRate, true);
                    view.setUint32(28, 4 * p5sound.audiocontext.sampleRate, true);
                    view.setUint16(32, 4, true);
                    view.setUint16(34, 16, true);
                    writeUTFBytes(view, 36, "data");
                    view.setUint32(40, 2 * interleaved.length, true);
                    var lng = interleaved.length;
                    /** @type {number} */
                    var offset = 44;
                    /** @type {number} */
                    var volume = 1;
                    /** @type {number} */
                    var i = 0;
                    for (; i < lng; i++) {
                        view.setInt16(offset, interleaved[i] * (32767 * volume), true);
                        /** @type {number} */
                        offset = offset + 2;
                    }
                    return view;
                }

                /**
                 * @param {number} inputL
                 * @param {number} inputR
                 * @return {?}
                 */
                function interleave(inputL, inputR) {
                    var recordingLength = inputL.length + inputR.length;
                    /** @type {!Float32Array} */
                    var result = new Float32Array(recordingLength);
                    /** @type {number} */
                    var inputIndex = 0;
                    /** @type {number} */
                    var j = 0;
                    for (; j < recordingLength;) {
                        result[j++] = inputL[inputIndex];
                        result[j++] = inputR[inputIndex];
                        inputIndex++;
                    }
                    return result;
                }

                /**
                 * @param {?} view
                 * @param {number} offset
                 * @param {string} string
                 * @return {undefined}
                 */
                function writeUTFBytes(view, offset, string) {
                    var stringLength = string.length;
                    /** @type {number} */
                    var i = 0;
                    for (; i < stringLength; i++) {
                        view.setUint8(offset + i, string.charCodeAt(i));
                    }
                }

                var p5sound = master;
                /**
                 * @return {?}
                 */
                Tone.prototype.sampleRate = function () {
                    return p5sound.audiocontext.sampleRate;
                };
                /**
                 * @param {number} v
                 * @return {?}
                 */
                Tone.prototype.freqToMidi = function (v) {
                    /** @type {number} */
                    var ipw = Math.log(v / 440) / Math.log(2);
                    /** @type {number} */
                    var m = Math.round(12 * ipw) + 69;
                    return m;
                };
                /** @type {function(number): ?} */
                var resolve = Tone.prototype.midiToFreq = function (v) {
                    return 440 * Math.pow(2, (v - 69) / 12);
                };
                /**
                 * @param {string} a
                 * @return {?}
                 */
                var k = function (a) {
                    if ("string" !== typeof a) {
                        return a;
                    }
                    var docs = {
                        A: 21,
                        B: 23,
                        C: 24,
                        D: 26,
                        E: 28,
                        F: 29,
                        G: 31
                    };
                    var result = docs[a[0].toUpperCase()];
                    /** @type {number} */
                    var o = ~~a.slice(-1);
                    switch (result = result + 12 * (o - 1), a[1]) {
                        case "#":
                            result = result + 1;
                            break;
                        case "b":
                            /** @type {number} */
                            result = result - 1;
                            break;
                        default:
                            break;
                    }
                    return resolve(result);
                };
                return Tone.prototype.soundFormats = function () {
                    /** @type {!Array} */
                    p5sound.extensions = [];
                    /** @type {number} */
                    var i = 0;
                    for (; i < arguments.length; i++) {
                        if (arguments[i] = arguments[i].toLowerCase(), !(["mp3", "wav", "ogg", "m4a", "aac"].indexOf(arguments[i]) > -1)) {
                            throw arguments[i] + " is not a valid sound format!";
                        }
                        p5sound.extensions.push(arguments[i]);
                    }
                }, Tone.prototype.disposeSound = function () {
                    /** @type {number} */
                    var i = 0;
                    for (; i < p5sound.soundArray.length; i++) {
                        p5sound.soundArray[i].dispose();
                    }
                }, Tone.prototype.registerMethod("remove", Tone.prototype.disposeSound), Tone.prototype._checkFileFormats = function (paths) {
                    var path;
                    if ("string" === typeof paths) {
                        /** @type {string} */
                        path = paths;
                        /** @type {string} */
                        var filePath = path.split(".").pop();
                        if (["mp3", "wav", "ogg", "m4a", "aac"].indexOf(filePath) > -1) {
                            if (Tone.prototype.isFileSupported(filePath)) {
                                /** @type {string} */
                                path = path;
                            } else {
                                /** @type {!Array<string>} */
                                var pathSplit = path.split(".");
                                /** @type {string} */
                                var pathCore = pathSplit[pathSplit.length - 1];
                                /** @type {number} */
                                var i = 0;
                                for (; i < p5sound.extensions.length; i++) {
                                    var file = p5sound.extensions[i];
                                    var tmpFileInfo = Tone.prototype.isFileSupported(file);
                                    if (tmpFileInfo) {
                                        /** @type {string} */
                                        pathCore = "";
                                        if (2 === pathSplit.length) {
                                            /** @type {string} */
                                            pathCore = pathCore + pathSplit[0];
                                        }
                                        /** @type {number} */
                                        i = 1;
                                        for (; i <= pathSplit.length - 2; i++) {
                                            /** @type {string} */
                                            var p = pathSplit[i];
                                            /** @type {string} */
                                            pathCore = pathCore + ("." + p);
                                        }
                                        path = pathCore = pathCore + ".";
                                        path = path = path + file;
                                        break;
                                    }
                                }
                            }
                        } else {
                            /** @type {number} */
                            i = 0;
                            for (; i < p5sound.extensions.length; i++) {
                                file = p5sound.extensions[i];
                                tmpFileInfo = Tone.prototype.isFileSupported(file);
                                if (tmpFileInfo) {
                                    /** @type {string} */
                                    path = path + "." + file;
                                    break;
                                }
                            }
                        }
                    } else {
                        if ("object" === prepFilesForDownload(paths)) {
                            /** @type {number} */
                            i = 0;
                            for (; i < paths.length; i++) {
                                file = paths[i].split(".").pop();
                                tmpFileInfo = Tone.prototype.isFileSupported(file);
                                if (tmpFileInfo) {
                                    path = paths[i];
                                    break;
                                }
                            }
                        }
                    }
                    return path;
                }, Tone.prototype._mathChain = function (o, mathObj, thisChain, nextChain, type) {
                    var i;
                    for (i in o.mathOps) {
                        if (o.mathOps[i] instanceof type) {
                            o.mathOps[i].dispose();
                            /** @type {string} */
                            thisChain = i;
                            if (thisChain < o.mathOps.length - 1) {
                                nextChain = o.mathOps[i + 1];
                            }
                        }
                    }
                    return o.mathOps[thisChain - 1].disconnect(), o.mathOps[thisChain - 1].connect(mathObj), mathObj.connect(nextChain), o.mathOps[thisChain] = mathObj, o;
                }, {
                    convertToWav: mergeAudioBuffers,
                    midiToFreq: resolve,
                    noteToFreq: k
                };
            }();
            a = function () {
                /**
                 * @param {string} name
                 * @param {string} errorTrace
                 * @param {string} failedPath
                 * @return {?}
                 */
                var CustomError = function (name, errorTrace, failedPath) {
                    var tempStack;
                    /** @type {!Error} */
                    var err = new Error;
                    /** @type {string} */
                    err.name = name;
                    /** @type {string} */
                    err.originalStack = err.stack + errorTrace;
                    /** @type {string} */
                    tempStack = err.stack + errorTrace;
                    /** @type {string} */
                    err.failedPath = failedPath;
                    /** @type {!Array<string>} */
                    var selectedStateNames = tempStack.split("\n");
                    return selectedStateNames = selectedStateNames.filter(function (strRect) {
                        return !strRect.match(/(p5.|native code|globalInit)/g);
                    }), err.stack = selectedStateNames.join("\n"), err;
                };
                return CustomError;
            }();
            (function () {
                var p5sound = master;
                var ac = p5sound.audiocontext;
                if ("undefined" !== typeof ac.createStereoPanner) {
                    /**
                     * @param {!Object} input
                     * @param {!Object} output
                     * @return {undefined}
                     */
                    Tone.Panner = function (input, output) {
                        this.stereoPanner = this.input = ac.createStereoPanner();
                        input.connect(this.stereoPanner);
                        this.stereoPanner.connect(output);
                    };
                    /**
                     * @param {?} pval
                     * @param {number} tFromNow
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.pan = function (pval, tFromNow) {
                        var time = tFromNow || 0;
                        var t = ac.currentTime + time;
                        this.stereoPanner.pan.linearRampToValueAtTime(pval, t);
                    };
                    /**
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.inputChannels = function () {
                    };
                    /**
                     * @param {!Object} unit
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.connect = function (unit) {
                        this.stereoPanner.connect(unit);
                    };
                    /**
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.disconnect = function () {
                        if (this.stereoPanner) {
                            this.stereoPanner.disconnect();
                        }
                    };
                } else {
                    /**
                     * @param {!Object} input
                     * @param {!Object} output
                     * @param {number} numInputChannels
                     * @return {undefined}
                     */
                    Tone.Panner = function (input, output, numInputChannels) {
                        this.input = ac.createGain();
                        input.connect(this.input);
                        this.left = ac.createGain();
                        this.right = ac.createGain();
                        /** @type {string} */
                        this.left.channelInterpretation = "discrete";
                        /** @type {string} */
                        this.right.channelInterpretation = "discrete";
                        if (numInputChannels > 1) {
                            this.splitter = ac.createChannelSplitter(2);
                            this.input.connect(this.splitter);
                            this.splitter.connect(this.left, 1);
                            this.splitter.connect(this.right, 0);
                        } else {
                            this.input.connect(this.left);
                            this.input.connect(this.right);
                        }
                        this.output = ac.createChannelMerger(2);
                        this.left.connect(this.output, 0, 1);
                        this.right.connect(this.output, 0, 0);
                        this.output.connect(output);
                    };
                    /**
                     * @param {number} pval
                     * @param {number} tFromNow
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.pan = function (pval, tFromNow) {
                        var time = tFromNow || 0;
                        var t = ac.currentTime + time;
                        /** @type {number} */
                        var r = (pval + 1) / 2;
                        /** @type {number} */
                        var A = Math.cos(r * Math.PI / 2);
                        /** @type {number} */
                        var endValue = Math.sin(r * Math.PI / 2);
                        this.left.gain.linearRampToValueAtTime(endValue, t);
                        this.right.gain.linearRampToValueAtTime(A, t);
                    };
                    /**
                     * @param {number} numChannels
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.inputChannels = function (numChannels) {
                        if (1 === numChannels) {
                            this.input.disconnect();
                            this.input.connect(this.left);
                            this.input.connect(this.right);
                        } else {
                            if (2 === numChannels) {
                                if (prepFilesForDownload("undefined" === this.splitter)) {
                                    this.splitter = ac.createChannelSplitter(2);
                                }
                                this.input.disconnect();
                                this.input.connect(this.splitter);
                                this.splitter.connect(this.left, 1);
                                this.splitter.connect(this.right, 0);
                            }
                        }
                    };
                    /**
                     * @param {!Object} unit
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.connect = function (unit) {
                        this.output.connect(unit);
                    };
                    /**
                     * @return {undefined}
                     */
                    Tone.Panner.prototype.disconnect = function () {
                        if (this.output) {
                            this.output.disconnect();
                        }
                    };
                }
            })();
            (function () {
                /**
                 * @param {!NodeList} data
                 * @param {?} threshold
                 * @return {?}
                 */
                function getPeaksAtThreshold(data, threshold) {
                    var peaksObj = {};
                    var tldCount = data.length;
                    /** @type {number} */
                    var i = 0;
                    for (; i < tldCount; i++) {
                        if (data[i] > threshold) {
                            var amp = data[i];
                            var peak = new Peak(amp, i);
                            peaksObj[i] = peak;
                            /** @type {number} */
                            i = i + 6e3;
                        }
                        i++;
                    }
                    return peaksObj;
                }

                /**
                 * @param {!Object} peaksObj
                 * @return {?}
                 */
                function countIntervalsBetweenNearbyPeaks(peaksObj) {
                    /** @type {!Array} */
                    var intervalCounts = [];
                    /** @type {!Array<string>} */
                    var peaksArray = Object.keys(peaksObj).sort();
                    /** @type {number} */
                    var index = 0;
                    for (; index < peaksArray.length; index++) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < 10; i++) {
                            var startPeak = peaksObj[peaksArray[index]];
                            var endPeak = peaksObj[peaksArray[index + i]];
                            if (startPeak && endPeak) {
                                var startPos = startPeak.sampleIndex;
                                var endPos = endPeak.sampleIndex;
                                /** @type {number} */
                                var interval = endPos - startPos;
                                if (interval > 0) {
                                    startPeak.intervals.push(interval);
                                }
                                /** @type {boolean} */
                                var h = intervalCounts.some(function (intervalCount) {
                                    if (intervalCount.interval === interval) {
                                        return intervalCount.count++, intervalCount;
                                    }
                                });
                                if (!h) {
                                    intervalCounts.push({
                                        interval: interval,
                                        count: 1
                                    });
                                }
                            }
                        }
                    }
                    return intervalCounts;
                }

                /**
                 * @param {!Array} intervalCounts
                 * @param {?} sampleRate
                 * @return {?}
                 */
                function groupNeighborsByTempo(intervalCounts, sampleRate) {
                    /** @type {!Array} */
                    var tempoCounts = [];
                    return intervalCounts.forEach(function (intervalCount) {
                        try {
                            /** @type {number} */
                            var theoreticalTempo = Math.abs(60 / (intervalCount.interval / sampleRate));
                            theoreticalTempo = mapTempo(theoreticalTempo);
                            /** @type {boolean} */
                            var o = tempoCounts.some(function (tempoCount) {
                                if (tempoCount.tempo === theoreticalTempo) {
                                    return tempoCount.count += intervalCount.count;
                                }
                            });
                            if (!o) {
                                if (isNaN(theoreticalTempo)) {
                                    return;
                                }
                                tempoCounts.push({
                                    tempo: Math.round(theoreticalTempo),
                                    count: intervalCount.count
                                });
                            }
                        } catch (r) {
                            throw r;
                        }
                    }), tempoCounts;
                }

                /**
                 * @param {!Object} peaksObj
                 * @param {number} tempo
                 * @param {?} sampleRate
                 * @param {number} bpmVariance
                 * @return {?}
                 */
                function getPeaksAtTopTempo(peaksObj, tempo, sampleRate, bpmVariance) {
                    /** @type {!Array} */
                    var peaksAtTopTempo = [];
                    /** @type {!Array<string>} */
                    var notActiveCursors = Object.keys(peaksObj).sort();
                    /** @type {number} */
                    var i = 0;
                    for (; i < notActiveCursors.length; i++) {
                        /** @type {string} */
                        var key = notActiveCursors[i];
                        var peak = peaksObj[key];
                        /** @type {number} */
                        var j = 0;
                        for (; j < peak.intervals.length; j++) {
                            /** @type {number} */
                            var intervalBPM = Math.round(Math.abs(60 / (peak.intervals[j] / sampleRate)));
                            intervalBPM = mapTempo(intervalBPM);
                            if (Math.abs(intervalBPM - tempo) < bpmVariance) {
                                peaksAtTopTempo.push(peak.sampleIndex / sampleRate);
                            }
                        }
                    }
                    return peaksAtTopTempo = peaksAtTopTempo.filter(function (currentPriceNextPeriod, Set, elem) {
                        /** @type {number} */
                        var priceDiff = elem[Set + 1] - currentPriceNextPeriod;
                        if (priceDiff > .01) {
                            return true;
                        }
                    }), peaksAtTopTempo;
                }

                /**
                 * @param {number} theoreticalTempo
                 * @return {?}
                 */
                function mapTempo(theoreticalTempo) {
                    if (isFinite(theoreticalTempo) && 0 !== theoreticalTempo) {
                        for (; theoreticalTempo < 90;) {
                            /** @type {number} */
                            theoreticalTempo = theoreticalTempo * 2;
                        }
                        for (; theoreticalTempo > 180 && theoreticalTempo > 90;) {
                            /** @type {number} */
                            theoreticalTempo = theoreticalTempo / 2;
                        }
                        return theoreticalTempo;
                    }
                }

                /**
                 * @param {!AudioProcessingEvent} event
                 * @return {undefined}
                 */
                function defaultFunction(event) {
                    var expRecords = event.inputBuffer.getChannelData(0);
                    this._lastPos = expRecords[expRecords.length - 1] || 0;
                    this._onTimeUpdate(self._lastPos);
                }

                /**
                 * @param {!Event} e
                 * @return {undefined}
                 */
                function clearOnEnd(e) {
                    var target = e.target;
                    var self = this;
                    /** @type {boolean} */
                    target._playing = false;
                    target.removeEventListener("ended", self._clearOnEnd);
                    self._onended(self);
                    self.bufferSourceNodes.forEach(function (n, idxC) {
                        if (false === n._playing) {
                            self.bufferSourceNodes.splice(idxC);
                        }
                    });
                    if (0 === self.bufferSourceNodes.length) {
                        /** @type {boolean} */
                        self._playing = false;
                    }
                }

                var CustomError = a;
                var p5sound = master;
                var ac = p5sound.audiocontext;
                var c = _.midiToFreq;
                var callback = _.convertToWav;
                /**
                 * @param {string} paths
                 * @param {?} index
                 * @param {?} onload
                 * @param {!Function} onerror
                 * @return {undefined}
                 */
                Tone.SoundFile = function (paths, index, onload, onerror) {
                    if ("undefined" !== typeof paths) {
                        if ("string" === typeof paths || "string" === typeof paths[0]) {
                            var path = Tone.prototype._checkFileFormats(paths);
                            this.url = path;
                        } else {
                            if ("object" === prepFilesForDownload(paths) && !(window.File && window.FileReader && window.FileList && window.Blob)) {
                                throw "Unable to load file because the File API is not supported";
                            }
                        }
                        if (paths.file) {
                            paths = paths.file;
                        }
                        /** @type {string} */
                        this.file = paths;
                    }
                    /**
                     * @return {undefined}
                     */
                    this._onended = function () {
                    };
                    /** @type {boolean} */
                    this._looping = false;
                    /** @type {boolean} */
                    this._playing = false;
                    /** @type {boolean} */
                    this._paused = false;
                    /** @type {number} */
                    this._pauseTime = 0;
                    /** @type {!Array} */
                    this._cues = [];
                    /** @type {number} */
                    this._cueIDCounter = 0;
                    /** @type {number} */
                    this._lastPos = 0;
                    /** @type {null} */
                    this._counterNode = null;
                    /** @type {null} */
                    this._scopeNode = null;
                    /** @type {!Array} */
                    this.bufferSourceNodes = [];
                    /** @type {null} */
                    this.bufferSourceNode = null;
                    /** @type {null} */
                    this.buffer = null;
                    /** @type {number} */
                    this.playbackRate = 1;
                    this.input = p5sound.audiocontext.createGain();
                    this.output = p5sound.audiocontext.createGain();
                    /** @type {boolean} */
                    this.reversed = false;
                    /** @type {number} */
                    this.startTime = 0;
                    /** @type {null} */
                    this.endTime = null;
                    /** @type {number} */
                    this.pauseTime = 0;
                    /** @type {string} */
                    this.mode = "sustain";
                    /** @type {null} */
                    this.startMillis = null;
                    /** @type {number} */
                    this.panPosition = 0;
                    this.panner = new Tone.Panner(this.output, p5sound.input, 2);
                    if (this.url || this.file) {
                        this.load(index, onload);
                    }
                    p5sound.soundArray.push(this);
                    /** @type {!Function} */
                    this._whileLoading = "function" === typeof onerror ? onerror : function () {
                    };
                    this._onAudioProcess = defaultFunction.bind(this);
                    this._clearOnEnd = clearOnEnd.bind(this);
                };
                Tone.prototype.registerPreloadMethod("loadSound", Tone.prototype);
                /**
                 * @param {!Object} name
                 * @param {!Function} callback
                 * @param {!Function} onerror
                 * @param {!Function} whileLoading
                 * @return {?}
                 */
                Tone.prototype.loadSound = function (name, callback, onerror, whileLoading) {
                    if (window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova) {
                        window.alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS");
                    }
                    var elem = this;
                    var s = new Tone.SoundFile(name, function () {
                        if ("function" === typeof callback) {
                            callback.apply(elem, arguments);
                        }
                        if ("function" === typeof elem._decrementPreload) {
                            elem._decrementPreload();
                        }
                    }, onerror, whileLoading);
                    return s;
                };
                /**
                 * @param {?} func
                 * @param {?} cb
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.load = function (func, cb) {
                    var self = this;
                    /** @type {string} */
                    var errorTrace = (new Error).stack;
                    if (void 0 !== this.url && "" !== this.url) {
                        /** @type {!XMLHttpRequest} */
                        var request = new XMLHttpRequest;
                        request.addEventListener("progress", function (evt) {
                            self._updateProgress(evt);
                        }, false);
                        request.open("GET", this.url, true);
                        /** @type {string} */
                        request.responseType = "arraybuffer";
                        /**
                         * @return {undefined}
                         */
                        request.onload = function () {
                            if (200 === request.status) {
                                if (!self.panner) {
                                    return;
                                }
                                ac.decodeAudioData(request.response, function (buff) {
                                    if (self.panner) {
                                        /** @type {string} */
                                        self.buffer = buff;
                                        self.panner.inputChannels(buff.numberOfChannels);
                                        if (func) {
                                            func(self);
                                        }
                                    }
                                }, function () {
                                    if (self.panner) {
                                        var err = new CustomError("decodeAudioData", errorTrace, self.url);
                                        /** @type {string} */
                                        var msg = "AudioContext error at decodeAudioData for " + self.url;
                                        if (cb) {
                                            /** @type {string} */
                                            err.msg = msg;
                                            cb(err);
                                        } else {
                                            console.error(msg + "\n The error stack trace includes: \n" + err.stack);
                                        }
                                    }
                                });
                            } else {
                                if (!self.panner) {
                                    return;
                                }
                                var err = new CustomError("loadSound", errorTrace, self.url);
                                /** @type {string} */
                                var file = "Unable to load " + self.url + ". The request status was: " + request.status + " (" + request.statusText + ")";
                                if (cb) {
                                    /** @type {string} */
                                    err.message = file;
                                    cb(err);
                                } else {
                                    console.error(file + "\n The error stack trace includes: \n" + err.stack);
                                }
                            }
                        };
                        /**
                         * @return {undefined}
                         */
                        request.onerror = function () {
                            var err = new CustomError("loadSound", errorTrace, self.url);
                            /** @type {string} */
                            var file = "There was no response from the server at " + self.url + ". Check the url and internet connectivity.";
                            if (cb) {
                                /** @type {string} */
                                err.message = file;
                                cb(err);
                            } else {
                                console.error(file + "\n The error stack trace includes: \n" + err.stack);
                            }
                        };
                        request.send();
                    } else {
                        if (void 0 !== this.file) {
                            /** @type {!FileReader} */
                            var reader = new FileReader;
                            /**
                             * @return {undefined}
                             */
                            reader.onload = function () {
                                if (self.panner) {
                                    ac.decodeAudioData(reader.result, function (buff) {
                                        if (self.panner) {
                                            /** @type {string} */
                                            self.buffer = buff;
                                            self.panner.inputChannels(buff.numberOfChannels);
                                            if (func) {
                                                func(self);
                                            }
                                        }
                                    });
                                }
                            };
                            /**
                             * @param {?} e
                             * @return {undefined}
                             */
                            reader.onerror = function (e) {
                                if (self.panner && onerror) {
                                    onerror(e);
                                }
                            };
                            reader.readAsArrayBuffer(this.file);
                        }
                    }
                };
                /**
                 * @param {!Event} evt
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype._updateProgress = function (evt) {
                    if (evt.lengthComputable) {
                        /** @type {number} */
                        var percentComplete = evt.loaded / evt.total * .99;
                        this._whileLoading(percentComplete, evt);
                    } else {
                        this._whileLoading("size unknown");
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.isLoaded = function () {
                    return !!this.buffer;
                };
                /**
                 * @param {number} timestamp
                 * @param {number} type
                 * @param {?} id
                 * @param {number} startTime
                 * @param {number} duration
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.play = function (timestamp, type, id, startTime, duration) {
                    if (this.output) {
                        var start;
                        var cueEnd;
                        var time = p5sound.audiocontext.currentTime;
                        var now = timestamp || 0;
                        if (now < 0 && (now = 0), now = now + time, "undefined" !== typeof type && this.rate(type), "undefined" !== typeof id && this.setVolume(id), !this.buffer) {
                            throw "not ready to play file, buffer has yet to load. Try preload()";
                        }
                        if (this._pauseTime = 0, "restart" === this.mode && this.buffer && this.bufferSourceNode && (this.bufferSourceNode.stop(now), this._counterNode.stop(now)), "untildone" !== this.mode || !this.isPlaying()) {
                            if (this.bufferSourceNode = this._initSourceNode(), delete this._counterNode, this._counterNode = this._initCounterNode(), startTime) {
                                if (!(startTime >= 0 && startTime < this.buffer.duration)) {
                                    throw "start time out of range";
                                }
                                /** @type {number} */
                                start = startTime;
                            } else {
                                /** @type {number} */
                                start = 0;
                            }
                            if (duration) {
                                duration = duration <= this.buffer.duration - start ? duration : this.buffer.duration;
                            }
                            if (this._paused) {
                                this.bufferSourceNode.start(now, this.pauseTime, duration);
                                this._counterNode.start(now, this.pauseTime, duration);
                            } else {
                                this.bufferSourceNode.start(now, start, duration);
                                this._counterNode.start(now, start, duration);
                            }
                            /** @type {boolean} */
                            this._playing = true;
                            /** @type {boolean} */
                            this._paused = false;
                            this.bufferSourceNodes.push(this.bufferSourceNode);
                            /** @type {number} */
                            this.bufferSourceNode._arrayIndex = this.bufferSourceNodes.length - 1;
                            this.bufferSourceNode.addEventListener("ended", this._clearOnEnd);
                            this.bufferSourceNode.loop = this._looping;
                            this._counterNode.loop = this._looping;
                            if (true === this._looping) {
                                cueEnd = duration || start - 1e-15;
                                this.bufferSourceNode.loopStart = start;
                                this.bufferSourceNode.loopEnd = cueEnd;
                                this._counterNode.loopStart = start;
                                this._counterNode.loopEnd = cueEnd;
                            }
                        }
                    } else {
                        console.warn("SoundFile.play() called after dispose");
                    }
                };
                /**
                 * @param {string} str
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.playMode = function (str) {
                    var type = str.toLowerCase();
                    if ("restart" === type && this.buffer && this.bufferSourceNode) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < this.bufferSourceNodes.length - 1; i++) {
                            var now = p5sound.audiocontext.currentTime;
                            this.bufferSourceNodes[i].stop(now);
                        }
                    }
                    if ("restart" !== type && "sustain" !== type && "untildone" !== type) {
                        throw 'Invalid play mode. Must be either "restart" or "sustain"';
                    }
                    this.mode = type;
                };
                /**
                 * @param {number} param
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.pause = function (param) {
                    var timestamp = p5sound.audiocontext.currentTime;
                    var sec = param || 0;
                    var time = sec + timestamp;
                    if (this.isPlaying() && this.buffer && this.bufferSourceNode) {
                        this.pauseTime = this.currentTime();
                        this.bufferSourceNode.stop(time);
                        this._counterNode.stop(time);
                        /** @type {boolean} */
                        this._paused = true;
                        /** @type {boolean} */
                        this._playing = false;
                        this._pauseTime = this.currentTime();
                    } else {
                        /** @type {number} */
                        this._pauseTime = 0;
                    }
                };
                /**
                 * @param {undefined} t
                 * @param {undefined} value
                 * @param {undefined} amp
                 * @param {undefined} loopStart
                 * @param {undefined} duration
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.loop = function (t, value, amp, loopStart, duration) {
                    /** @type {boolean} */
                    this._looping = true;
                    this.play(t, value, amp, loopStart, duration);
                };
                /**
                 * @param {boolean} value
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.setLoop = function (value) {
                    if (true === value) {
                        /** @type {boolean} */
                        this._looping = true;
                    } else {
                        if (false !== value) {
                            throw "Error: setLoop accepts either true or false";
                        }
                        /** @type {boolean} */
                        this._looping = false;
                    }
                    if (this.bufferSourceNode) {
                        /** @type {boolean} */
                        this.bufferSourceNode.loop = this._looping;
                        /** @type {boolean} */
                        this._counterNode.loop = this._looping;
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.isLooping = function () {
                    return !!this.bufferSourceNode && (true === this._looping && true === this.isPlaying());
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.isPlaying = function () {
                    return this._playing;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.isPaused = function () {
                    return this._paused;
                };
                /**
                 * @param {number} start
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.stop = function (start) {
                    var time = start || 0;
                    if ("sustain" === this.mode || "untildone" === this.mode) {
                        this.stopAll(time);
                        /** @type {boolean} */
                        this._playing = false;
                        /** @type {number} */
                        this.pauseTime = 0;
                        /** @type {boolean} */
                        this._paused = false;
                    } else {
                        if (this.buffer && this.bufferSourceNode) {
                            var now = p5sound.audiocontext.currentTime;
                            var t = time || 0;
                            /** @type {number} */
                            this.pauseTime = 0;
                            this.bufferSourceNode.stop(now + t);
                            this._counterNode.stop(now + t);
                            /** @type {boolean} */
                            this._playing = false;
                            /** @type {boolean} */
                            this._paused = false;
                        }
                    }
                };
                /**
                 * @param {number} _time
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.stopAll = function (_time) {
                    var now = p5sound.audiocontext.currentTime;
                    var time = _time || 0;
                    if (this.buffer && this.bufferSourceNode) {
                        var i;
                        for (i in this.bufferSourceNodes) {
                            var args = this.bufferSourceNodes[i];
                            if (args) {
                                try {
                                    args.stop(now + time);
                                } catch (s) {
                                }
                            }
                        }
                        this._counterNode.stop(now + time);
                        this._onended(this);
                    }
                };
                /**
                 * @param {!Object} value
                 * @param {number} t
                 * @param {number} n
                 * @return {?}
                 */
                Tone.SoundFile.prototype.setVolume = function (value, t, n) {
                    if ("number" === typeof value) {
                        var rampTime = t || 0;
                        var tFromNow = n || 0;
                        var now = p5sound.audiocontext.currentTime;
                        var A = this.output.gain.value;
                        this.output.gain.cancelScheduledValues(now + tFromNow);
                        this.output.gain.linearRampToValueAtTime(A, now + tFromNow);
                        this.output.gain.linearRampToValueAtTime(value, now + tFromNow + rampTime);
                    } else {
                        if (!value) {
                            return this.output.gain;
                        }
                        value.connect(this.output.gain);
                    }
                };
                /** @type {function(!Object, number, number): ?} */
                Tone.SoundFile.prototype.amp = Tone.SoundFile.prototype.setVolume;
                /** @type {function(!Object, number, number): ?} */
                Tone.SoundFile.prototype.fade = Tone.SoundFile.prototype.setVolume;
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.getVolume = function () {
                    return this.output.gain.value;
                };
                /**
                 * @param {number} pval
                 * @param {number} tFromNow
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.pan = function (pval, tFromNow) {
                    /** @type {number} */
                    this.panPosition = pval;
                    this.panner.pan(pval, tFromNow);
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.getPan = function () {
                    return this.panPosition;
                };
                /**
                 * @param {number} playbackRate
                 * @return {?}
                 */
                Tone.SoundFile.prototype.rate = function (playbackRate) {
                    /** @type {boolean} */
                    var e = false;
                    if ("undefined" === typeof playbackRate) {
                        return this.playbackRate;
                    }
                    if (this.playbackRate = playbackRate, 0 === playbackRate ? playbackRate = 1e-13 : playbackRate < 0 && !this.reversed ? (playbackRate = Math.abs(playbackRate), e = true) : playbackRate > 0 && this.reversed && (e = true), this.bufferSourceNode) {
                        var now = p5sound.audiocontext.currentTime;
                        this.bufferSourceNode.playbackRate.cancelScheduledValues(now);
                        this.bufferSourceNode.playbackRate.linearRampToValueAtTime(Math.abs(playbackRate), now);
                        this._counterNode.playbackRate.cancelScheduledValues(now);
                        this._counterNode.playbackRate.linearRampToValueAtTime(Math.abs(playbackRate), now);
                    }
                    return e && this.reverseBuffer(), this.playbackRate;
                };
                /**
                 * @param {undefined} p
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.setPitch = function (p) {
                    /** @type {number} */
                    var newPlaybackRate = c(p) / c(60);
                    this.rate(newPlaybackRate);
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.getPlaybackRate = function () {
                    return this.playbackRate;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.duration = function () {
                    return this.buffer ? this.buffer.duration : 0;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.currentTime = function () {
                    return this.reversed ? Math.abs(this._lastPos - this.buffer.length) / ac.sampleRate : this._lastPos / ac.sampleRate;
                };
                /**
                 * @param {number} cueTime
                 * @param {string} duration
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.jump = function (cueTime, duration) {
                    if (cueTime < 0 || cueTime > this.buffer.duration) {
                        throw "jump time out of range";
                    }
                    if (duration > this.buffer.duration - cueTime) {
                        throw "end time out of range";
                    }
                    var cTime = cueTime || 0;
                    var dur = duration || void 0;
                    if (this.isPlaying()) {
                        this.stop(0);
                    }
                    this.play(0, this.playbackRate, this.output.gain.value, cTime, dur);
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.channels = function () {
                    return this.buffer.numberOfChannels;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.sampleRate = function () {
                    return this.buffer.sampleRate;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.frames = function () {
                    return this.buffer.length;
                };
                /**
                 * @param {number} length
                 * @return {?}
                 */
                Tone.SoundFile.prototype.getPeaks = function (length) {
                    if (!this.buffer) {
                        throw "Cannot load peaks yet, buffer is not loaded";
                    }
                    if (length || (length = 5 * window.width), this.buffer) {
                        var buffer = this.buffer;
                        /** @type {number} */
                        var width = buffer.length / length;
                        /** @type {number} */
                        var nullLength = ~~(width / 10) || 1;
                        var chanNumber = buffer.numberOfChannels;
                        /** @type {!Float32Array} */
                        var peaks = new Float32Array(Math.round(length));
                        /** @type {number} */
                        var index = 0;
                        for (; index < chanNumber; index++) {
                            var lo = buffer.getChannelData(index);
                            /** @type {number} */
                            var i = 0;
                            for (; i < length; i++) {
                                /** @type {number} */
                                var x = ~~(i * width);
                                /** @type {number} */
                                var rown = ~~(x + width);
                                /** @type {number} */
                                var max = 0;
                                /** @type {number} */
                                var j = x;
                                for (; j < rown; j = j + nullLength) {
                                    var min = lo[j];
                                    if (min > max || -min > max) {
                                        max = min;
                                    }
                                }
                                if (0 === index || Math.abs(max) > peaks[i]) {
                                    peaks[i] = max;
                                }
                            }
                        }
                        return peaks;
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.reverseBuffer = function () {
                    if (!this.buffer) {
                        throw "SoundFile is not done loading";
                    }
                    /** @type {number} */
                    var curr = this._lastPos / ac.sampleRate;
                    var volume = this.getVolume();
                    this.setVolume(0, .001);
                    var channels = this.buffer.numberOfChannels;
                    /** @type {number} */
                    var i = 0;
                    for (; i < channels; i++) {
                        this.buffer.getChannelData(i).reverse();
                    }
                    /** @type {boolean} */
                    this.reversed = !this.reversed;
                    if (curr) {
                        this.jump(this.duration() - curr);
                    }
                    this.setVolume(volume, .001);
                };
                /**
                 * @param {!Function} callback
                 * @return {?}
                 */
                Tone.SoundFile.prototype.onended = function (callback) {
                    return this._onended = callback, this;
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.add = function () {
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.dispose = function () {
                    var now = p5sound.audiocontext.currentTime;
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    if (p5sound.soundArray.splice(existingProxyIndex, 1), this.stop(now), this.buffer && this.bufferSourceNode) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < this.bufferSourceNodes.length - 1; i++) {
                            if (null !== this.bufferSourceNodes[i]) {
                                this.bufferSourceNodes[i].disconnect();
                                try {
                                    this.bufferSourceNodes[i].stop(now);
                                } catch (o) {
                                    console.warning("no buffer source node to dispose");
                                }
                                /** @type {null} */
                                this.bufferSourceNodes[i] = null;
                            }
                        }
                        if (this.isPlaying()) {
                            try {
                                this._counterNode.stop(now);
                            } catch (conv_reverse_sort) {
                                console.log(conv_reverse_sort);
                            }
                            /** @type {null} */
                            this._counterNode = null;
                        }
                    }
                    if (this.output) {
                        this.output.disconnect();
                        /** @type {null} */
                        this.output = null;
                    }
                    if (this.panner) {
                        this.panner.disconnect();
                        /** @type {null} */
                        this.panner = null;
                    }
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.connect = function (unit) {
                    if (unit) {
                        if (unit.hasOwnProperty("input")) {
                            this.panner.connect(unit.input);
                        } else {
                            this.panner.connect(unit);
                        }
                    } else {
                        this.panner.connect(p5sound.input);
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.disconnect = function () {
                    if (this.panner) {
                        this.panner.disconnect();
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.getLevel = function () {
                    console.warn("p5.SoundFile.getLevel has been removed from the library. Use p5.Amplitude instead");
                };
                /**
                 * @param {string} p
                 * @param {?} obj
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.setPath = function (p, obj) {
                    var url = Tone.prototype._checkFileFormats(p);
                    this.url = url;
                    this.load(obj);
                };
                /**
                 * @param {!Object} buffer
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.setBuffer = function (buffer) {
                    var numChannels = buffer.length;
                    var size = buffer[0].length;
                    var newBuffer = ac.createBuffer(numChannels, size, ac.sampleRate);
                    if (!(buffer[0] instanceof Float32Array)) {
                        /** @type {!Float32Array} */
                        buffer[0] = new Float32Array(buffer[0]);
                    }
                    /** @type {number} */
                    var i = 0;
                    for (; i < numChannels; i++) {
                        var back = newBuffer.getChannelData(i);
                        back.set(buffer[i]);
                    }
                    this.buffer = newBuffer;
                    this.panner.inputChannels(numChannels);
                };
                /**
                 * @param {!NodeList} buffer
                 * @return {?}
                 */
                var _createCounterBuffer = function (buffer) {
                    var samplesNeeded = buffer.length;
                    var audioBuf = ac.createBuffer(1, buffer.length, ac.sampleRate);
                    var vertexIdOld = audioBuf.getChannelData(0);
                    /** @type {number} */
                    var i = 0;
                    for (; i < samplesNeeded; i++) {
                        /** @type {number} */
                        vertexIdOld[i] = i;
                    }
                    return audioBuf;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype._initCounterNode = function () {
                    var self = this;
                    var now = ac.currentTime;
                    var cNode = ac.createBufferSource();
                    return self._scopeNode && (self._scopeNode.disconnect(), self._scopeNode.removeEventListener("audioprocess", self._onAudioProcess), delete self._scopeNode), self._scopeNode = ac.createScriptProcessor(256, 1, 1), cNode.buffer = _createCounterBuffer(self.buffer), cNode.playbackRate.setValueAtTime(self.playbackRate, now), cNode.connect(self._scopeNode), self._scopeNode.connect(Tone.soundOut._silentNode), self._scopeNode.addEventListener("audioprocess", self._onAudioProcess), cNode;
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype._initSourceNode = function () {
                    var source = ac.createBufferSource();
                    return source.buffer = this.buffer, source.playbackRate.value = this.playbackRate, source.connect(this.output), source;
                };
                /**
                 * @param {?} callback
                 * @param {number} _minThreshold
                 * @param {number} _minPeaks
                 * @param {number} _initThreshold
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.processPeaks = function (callback, _minThreshold, _minPeaks, _initThreshold) {
                    var bufLen = this.buffer.length;
                    var sampleRate = this.buffer.sampleRate;
                    var data = this.buffer;
                    /** @type {!Array} */
                    var allPeaks = [];
                    var value = _minThreshold || .9;
                    var threshold = value;
                    var minThresold = _minPeaks || .22;
                    var minPeaks = _initThreshold || 200;
                    var offlineContext = new window.OfflineAudioContext(1, bufLen, sampleRate);
                    var v = offlineContext.createBufferSource();
                    v.buffer = data;
                    var filter = offlineContext.createBiquadFilter();
                    /** @type {string} */
                    filter.type = "lowpass";
                    v.connect(filter);
                    filter.connect(offlineContext.destination);
                    v.start(0);
                    offlineContext.startRendering();
                    /**
                     * @param {?} e
                     * @return {undefined}
                     */
                    offlineContext.oncomplete = function (e) {
                        if (self.panner) {
                            var filteredBuffer = e.renderedBuffer;
                            var bufferData = filteredBuffer.getChannelData(0);
                            do {
                                allPeaks = getPeaksAtThreshold(bufferData, threshold);
                                /** @type {number} */
                                threshold = threshold - .005;
                            } while (Object.keys(allPeaks).length < minPeaks && threshold >= minThresold);
                            var intervalCounts = countIntervalsBetweenNearbyPeaks(allPeaks);
                            var groups = groupNeighborsByTempo(intervalCounts, filteredBuffer.sampleRate);
                            var trigger = groups.sort(function (a, b) {
                                return b.count - a.count;
                            }).splice(0, 5);
                            this.tempo = trigger[0].tempo;
                            /** @type {number} */
                            var bpmVariance = 5;
                            var tempoPeaks = getPeaksAtTopTempo(allPeaks, trigger[0].tempo, filteredBuffer.sampleRate, bpmVariance);
                            callback(tempoPeaks);
                        }
                    };
                };
                /**
                 * @param {!Object} amp
                 * @param {?} i
                 * @return {undefined}
                 */
                var Peak = function (amp, i) {
                    this.sampleIndex = i;
                    /** @type {!Object} */
                    this.amplitude = amp;
                    /** @type {!Array} */
                    this.tempos = [];
                    /** @type {!Array} */
                    this.intervals = [];
                };
                /**
                 * @param {!Function} callback
                 * @param {number} time
                 * @param {string} id
                 * @param {string} val
                 * @return {undefined}
                 */
                var Cue = function (callback, time, id, val) {
                    /** @type {!Function} */
                    this.callback = callback;
                    /** @type {number} */
                    this.time = time;
                    /** @type {string} */
                    this.id = id;
                    /** @type {string} */
                    this.val = val;
                };
                /**
                 * @param {number} time
                 * @param {number} callback
                 * @param {number} val
                 * @return {?}
                 */
                Tone.SoundFile.prototype.addCue = function (time, callback, val) {
                    /** @type {number} */
                    var id = this._cueIDCounter++;
                    var cue = new Cue(callback, time, id, val);
                    return this._cues.push(cue), id;
                };
                /**
                 * @param {?} id
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.removeCue = function (id) {
                    var cueLength = this._cues.length;
                    /** @type {number} */
                    var i = 0;
                    for (; i < cueLength; i++) {
                        var cue = this._cues[i];
                        if (cue.id === id) {
                            this._cues.splice(i, 1);
                            break;
                        }
                    }
                    this._cues.length;
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.clearCues = function () {
                    /** @type {!Array} */
                    this._cues = [];
                };
                /**
                 * @param {?} position
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype._onTimeUpdate = function (position) {
                    /** @type {number} */
                    var playbackTime = position / this.buffer.sampleRate;
                    var cueLength = this._cues.length;
                    /** @type {number} */
                    var i = 0;
                    for (; i < cueLength; i++) {
                        var cue = this._cues[i];
                        var callbackTime = cue.time;
                        var val = cue.val;
                        if (this._prevTime < callbackTime && callbackTime <= playbackTime) {
                            cue.callback(val);
                        }
                    }
                    /** @type {number} */
                    this._prevTime = playbackTime;
                };
                /**
                 * @param {?} url1
                 * @return {undefined}
                 */
                Tone.SoundFile.prototype.save = function (url1) {
                    var result = callback(this.buffer);
                    Tone.prototype.saveSound([result], url1, "wav");
                };
                /**
                 * @return {?}
                 */
                Tone.SoundFile.prototype.getBlob = function () {
                    var result = callback(this.buffer);
                    return new Blob([result], {
                        type: "audio/wav"
                    });
                };
            })();
            (function () {
                var p5sound = master;
                /**
                 * @param {number} smoothing
                 * @return {undefined}
                 */
                Tone.Amplitude = function (smoothing) {
                    /** @type {number} */
                    this.bufferSize = 2048;
                    this.audiocontext = p5sound.audiocontext;
                    this.processor = this.audiocontext.createScriptProcessor(this.bufferSize, 2, 1);
                    this.input = this.processor;
                    this.output = this.audiocontext.createGain();
                    this.smoothing = smoothing || 0;
                    /** @type {number} */
                    this.volume = 0;
                    /** @type {number} */
                    this.average = 0;
                    /** @type {!Array} */
                    this.stereoVol = [0, 0];
                    /** @type {!Array} */
                    this.stereoAvg = [0, 0];
                    /** @type {!Array} */
                    this.stereoVolNorm = [0, 0];
                    /** @type {number} */
                    this.volMax = .001;
                    /** @type {boolean} */
                    this.normalize = false;
                    this.processor.onaudioprocess = this._audioProcess.bind(this);
                    this.processor.connect(this.output);
                    /** @type {number} */
                    this.output.gain.value = 0;
                    this.output.connect(this.audiocontext.destination);
                    p5sound.meter.connect(this.processor);
                    p5sound.soundArray.push(this);
                };
                /**
                 * @param {number} source
                 * @param {number} smoothing
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype.setInput = function (source, smoothing) {
                    p5sound.meter.disconnect();
                    if (smoothing) {
                        /** @type {number} */
                        this.smoothing = smoothing;
                    }
                    if (null == source) {
                        console.log("Amplitude input source is not ready! Connecting to master output instead");
                        p5sound.meter.connect(this.processor);
                    } else {
                        if (source instanceof Tone.Signal) {
                            source.output.connect(this.processor);
                        } else {
                            if (source) {
                                source.connect(this.processor);
                                this.processor.disconnect();
                                this.processor.connect(this.output);
                            } else {
                                p5sound.meter.connect(this.processor);
                            }
                        }
                    }
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype.connect = function (unit) {
                    if (unit) {
                        if (unit.hasOwnProperty("input")) {
                            this.output.connect(unit.input);
                        } else {
                            this.output.connect(unit);
                        }
                    } else {
                        this.output.connect(this.panner.connect(p5sound.input));
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                };
                /**
                 * @param {!AudioProcessingEvent} event
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype._audioProcess = function (event) {
                    /** @type {number} */
                    var channel = 0;
                    for (; channel < event.inputBuffer.numberOfChannels; channel++) {
                        var x;
                        var inputBuffer = event.inputBuffer.getChannelData(channel);
                        var bufLength = inputBuffer.length;
                        /** @type {number} */
                        var sum = 0;
                        /** @type {number} */
                        var sd = 0;
                        /** @type {number} */
                        var i = 0;
                        for (; i < bufLength; i++) {
                            x = inputBuffer[i];
                            if (this.normalize) {
                                /** @type {number} */
                                sum = sum + Math.max(Math.min(x / this.volMax, 1), -1);
                                /** @type {number} */
                                sd = sd + Math.max(Math.min(x / this.volMax, 1), -1) * Math.max(Math.min(x / this.volMax, 1), -1);
                            } else {
                                sum = sum + x;
                                /** @type {number} */
                                sd = sd + x * x;
                            }
                        }
                        /** @type {number} */
                        var average = sum / bufLength;
                        /** @type {number} */
                        var rms = Math.sqrt(sd / bufLength);
                        /** @type {number} */
                        this.stereoVol[channel] = Math.max(rms, this.stereoVol[channel] * this.smoothing);
                        /** @type {number} */
                        this.stereoAvg[channel] = Math.max(average, this.stereoVol[channel] * this.smoothing);
                        /** @type {number} */
                        this.volMax = Math.max(this.stereoVol[channel], this.volMax);
                    }
                    var self = this;
                    var volSum = this.stereoVol.reduce(function (buckets, name, index) {
                        return self.stereoVolNorm[index - 1] = Math.max(Math.min(self.stereoVol[index - 1] / self.volMax, 1), 0), self.stereoVolNorm[index] = Math.max(Math.min(self.stereoVol[index] / self.volMax, 1), 0), buckets + name;
                    });
                    /** @type {number} */
                    this.volume = volSum / this.stereoVol.length;
                    /** @type {number} */
                    this.volNorm = Math.max(Math.min(this.volume / this.volMax, 1), 0);
                };
                /**
                 * @param {?} channel
                 * @return {?}
                 */
                Tone.Amplitude.prototype.getLevel = function (channel) {
                    return "undefined" !== typeof channel ? this.normalize ? this.stereoVolNorm[channel] : this.stereoVol[channel] : this.normalize ? this.volNorm : this.volume;
                };
                /**
                 * @param {boolean} async
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype.toggleNormalize = function (async) {
                    /** @type {boolean} */
                    this.normalize = "boolean" === typeof async ? async : !this.normalize;
                };
                /**
                 * @param {number} data
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype.smooth = function (data) {
                    if (data >= 0 && data < 1) {
                        /** @type {number} */
                        this.smoothing = data;
                    } else {
                        console.log("Error: smoothing must be between 0 and 1");
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Amplitude.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    if (this.input) {
                        this.input.disconnect();
                        delete this.input;
                    }
                    if (this.output) {
                        this.output.disconnect();
                        delete this.output;
                    }
                    delete this.processor;
                };
            })();
            (function () {
                var p5sound = master;
                /**
                 * @param {undefined} size
                 * @param {number} bins
                 * @return {undefined}
                 */
                Tone.FFT = function (size, bins) {
                    this.input = this.analyser = p5sound.audiocontext.createAnalyser();
                    Object.defineProperties(this, {
                        bins: {
                            get: function () {
                                return this.analyser.fftSize / 2;
                            },
                            set: function (value) {
                                /** @type {number} */
                                this.analyser.fftSize = 2 * value;
                            },
                            configurable: true,
                            enumerable: true
                        },
                        smoothing: {
                            get: function () {
                                return this.analyser.smoothingTimeConstant;
                            },
                            set: function (value) {
                                /** @type {number} */
                                this.analyser.smoothingTimeConstant = value;
                            },
                            configurable: true,
                            enumerable: true
                        }
                    });
                    this.smooth(size);
                    this.bins = bins || 1024;
                    p5sound.fftMeter.connect(this.analyser);
                    /** @type {!Uint8Array} */
                    this.freqDomain = new Uint8Array(this.analyser.frequencyBinCount);
                    /** @type {!Uint8Array} */
                    this.timeDomain = new Uint8Array(this.analyser.frequencyBinCount);
                    /** @type {!Array} */
                    this.bass = [20, 140];
                    /** @type {!Array} */
                    this.lowMid = [140, 400];
                    /** @type {!Array} */
                    this.mid = [400, 2600];
                    /** @type {!Array} */
                    this.highMid = [2600, 5200];
                    /** @type {!Array} */
                    this.treble = [5200, 14e3];
                    p5sound.soundArray.push(this);
                };
                /**
                 * @param {number} source
                 * @return {undefined}
                 */
                Tone.FFT.prototype.setInput = function (source) {
                    if (source) {
                        if (source.output) {
                            source.output.connect(this.analyser);
                        } else {
                            if (source.connect) {
                                source.connect(this.analyser);
                            }
                        }
                        p5sound.fftMeter.disconnect();
                    } else {
                        p5sound.fftMeter.connect(this.analyser);
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.FFT.prototype.waveform = function () {
                    var trait;
                    var _ref1;
                    /** @type {number} */
                    var _i = 0;
                    for (; _i < arguments.length; _i++) {
                        if ("number" === typeof arguments[_i]) {
                            trait = arguments[_i];
                            /** @type {number} */
                            this.analyser.fftSize = 2 * trait;
                        }
                        if ("string" === typeof arguments[_i]) {
                            _ref1 = arguments[_i];
                        }
                    }
                    if (_ref1 && !Tone.prototype._isSafari()) {
                        return timeToFloat(this, this.timeDomain), this.analyser.getFloatTimeDomainData(this.timeDomain), this.timeDomain;
                    }
                    timeToInt(this, this.timeDomain);
                    this.analyser.getByteTimeDomainData(this.timeDomain);
                    /** @type {!Array} */
                    var output = new Array;
                    /** @type {number} */
                    var i = 0;
                    for (; i < this.timeDomain.length; i++) {
                        var falseySection = Tone.prototype.map(this.timeDomain[i], 0, 255, -1, 1);
                        output.push(falseySection);
                    }
                    return output;
                };
                /**
                 * @return {?}
                 */
                Tone.FFT.prototype.analyze = function () {
                    var t;
                    /** @type {number} */
                    var i = 0;
                    for (; i < arguments.length; i++) {
                        if ("number" === typeof arguments[i]) {
                            this.bins = arguments[i];
                            /** @type {number} */
                            this.analyser.fftSize = 2 * this.bins;
                        }
                        if ("string" === typeof arguments[i]) {
                            t = arguments[i];
                        }
                    }
                    if (t && "db" === t.toLowerCase()) {
                        return freqToFloat(this), this.analyser.getFloatFrequencyData(this.freqDomain), this.freqDomain;
                    }
                    freqToInt(this, this.freqDomain);
                    this.analyser.getByteFrequencyData(this.freqDomain);
                    var normalArray = Array.apply([], this.freqDomain);
                    return normalArray.length, this.analyser.fftSize, normalArray.constructor, normalArray;
                };
                /**
                 * @param {!Object} frequency1
                 * @param {number} frequency2
                 * @return {?}
                 */
                Tone.FFT.prototype.getEnergy = function (frequency1, frequency2) {
                    /** @type {number} */
                    var nyquist = p5sound.audiocontext.sampleRate / 2;
                    if ("bass" === frequency1 ? (frequency1 = this.bass[0], frequency2 = this.bass[1]) : "lowMid" === frequency1 ? (frequency1 = this.lowMid[0], frequency2 = this.lowMid[1]) : "mid" === frequency1 ? (frequency1 = this.mid[0], frequency2 = this.mid[1]) : "highMid" === frequency1 ? (frequency1 = this.highMid[0], frequency2 = this.highMid[1]) : "treble" === frequency1 && (frequency1 = this.treble[0], frequency2 = this.treble[1]), "number" !== typeof frequency1) {
                        throw "invalid input for getEnergy()";
                    }
                    if (frequency2) {
                        if (frequency1 && frequency2) {
                            if (frequency1 > frequency2) {
                                /** @type {number} */
                                var swap = frequency2;
                                /** @type {!Object} */
                                frequency2 = frequency1;
                                frequency1 = swap;
                            }
                            /** @type {number} */
                            var firstDisplayed = Math.round(frequency1 / nyquist * this.freqDomain.length);
                            /** @type {number} */
                            var zIncLen = Math.round(frequency2 / nyquist * this.freqDomain.length);
                            /** @type {number} */
                            var total = 0;
                            /** @type {number} */
                            var numFrequencies = 0;
                            /** @type {number} */
                            var i = firstDisplayed;
                            for (; i <= zIncLen; i++) {
                                total = total + this.freqDomain[i];
                                /** @type {number} */
                                numFrequencies = numFrequencies + 1;
                            }
                            /** @type {number} */
                            var toReturn = total / numFrequencies;
                            return toReturn;
                        }
                        throw "invalid input for getEnergy()";
                    }
                    /** @type {number} */
                    var i = Math.round(frequency1 / nyquist * this.freqDomain.length);
                    return this.freqDomain[i];
                };
                /**
                 * @param {!Object} freq1
                 * @param {undefined} freq2
                 * @return {?}
                 */
                Tone.FFT.prototype.getFreq = function (freq1, freq2) {
                    console.log("getFreq() is deprecated. Please use getEnergy() instead.");
                    var x = this.getEnergy(freq1, freq2);
                    return x;
                };
                /**
                 * @return {?}
                 */
                Tone.FFT.prototype.getCentroid = function () {
                    /** @type {number} */
                    var nyquist = p5sound.audiocontext.sampleRate / 2;
                    /** @type {number} */
                    var cumulative_sum = 0;
                    /** @type {number} */
                    var centroid_normalization = 0;
                    /** @type {number} */
                    var i = 0;
                    for (; i < this.freqDomain.length; i++) {
                        /** @type {number} */
                        cumulative_sum = cumulative_sum + i * this.freqDomain[i];
                        centroid_normalization = centroid_normalization + this.freqDomain[i];
                    }
                    /** @type {number} */
                    var mean_freq_index = 0;
                    if (0 !== centroid_normalization) {
                        /** @type {number} */
                        mean_freq_index = cumulative_sum / centroid_normalization;
                    }
                    /** @type {number} */
                    var spec_centroid_freq = mean_freq_index * (nyquist / this.freqDomain.length);
                    return spec_centroid_freq;
                };
                /**
                 * @param {number} data
                 * @return {?}
                 */
                Tone.FFT.prototype.smooth = function (data) {
                    return "undefined" !== typeof data && (this.smoothing = data), this.smoothing;
                };
                /**
                 * @return {undefined}
                 */
                Tone.FFT.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    if (this.analyser) {
                        this.analyser.disconnect();
                        delete this.analyser;
                    }
                };
                /**
                 * @param {number} N
                 * @return {?}
                 */
                Tone.FFT.prototype.linAverages = function (N) {
                    N = N || 16;
                    var spectrum = this.freqDomain;
                    var diff = spectrum.length;
                    /** @type {number} */
                    var numElementsInARow = Math.floor(diff / N);
                    /** @type {!Array} */
                    var linearAverages = new Array(N);
                    /** @type {number} */
                    var groupIndex = 0;
                    /** @type {number} */
                    var i = 0;
                    for (; i < diff; i++) {
                        linearAverages[groupIndex] = void 0 !== linearAverages[groupIndex] ? (linearAverages[groupIndex] + spectrum[i]) / 2 : spectrum[i];
                        if (i % numElementsInARow === numElementsInARow - 1) {
                            groupIndex++;
                        }
                    }
                    return linearAverages;
                };
                /**
                 * @param {!NodeList} octaveBands
                 * @return {?}
                 */
                Tone.FFT.prototype.logAverages = function (octaveBands) {
                    /** @type {number} */
                    var nyquist = p5sound.audiocontext.sampleRate / 2;
                    var spectrum = this.freqDomain;
                    var spectrumLength = spectrum.length;
                    /** @type {!Array} */
                    var logAverages = new Array(octaveBands.length);
                    /** @type {number} */
                    var octaveIndex = 0;
                    /** @type {number} */
                    var specIndex = 0;
                    for (; specIndex < spectrumLength; specIndex++) {
                        /** @type {number} */
                        var specIndexFrequency = Math.round(specIndex * nyquist / this.freqDomain.length);
                        if (specIndexFrequency > octaveBands[octaveIndex].hi) {
                            octaveIndex++;
                        }
                        logAverages[octaveIndex] = void 0 !== logAverages[octaveIndex] ? (logAverages[octaveIndex] + spectrum[specIndex]) / 2 : spectrum[specIndex];
                    }
                    return logAverages;
                };
                /**
                 * @param {number} N
                 * @param {number} fCtr0
                 * @return {?}
                 */
                Tone.FFT.prototype.getOctaveBands = function (N, fCtr0) {
                    N = N || 3;
                    fCtr0 = fCtr0 || 15.625;
                    /** @type {!Array} */
                    var octaveBands = [];
                    var lastFrequencyBand = {
                        lo: fCtr0 / Math.pow(2, 1 / (2 * N)),
                        ctr: fCtr0,
                        hi: fCtr0 * Math.pow(2, 1 / (2 * N))
                    };
                    octaveBands.push(lastFrequencyBand);
                    /** @type {number} */
                    var nyquist = p5sound.audiocontext.sampleRate / 2;
                    for (; lastFrequencyBand.hi < nyquist;) {
                        var newFrequencyBand = {};
                        /** @type {number} */
                        newFrequencyBand.lo = lastFrequencyBand.hi;
                        /** @type {number} */
                        newFrequencyBand.ctr = lastFrequencyBand.ctr * Math.pow(2, 1 / N);
                        /** @type {number} */
                        newFrequencyBand.hi = newFrequencyBand.ctr * Math.pow(2, 1 / (2 * N));
                        octaveBands.push(newFrequencyBand);
                        lastFrequencyBand = newFrequencyBand;
                    }
                    return octaveBands;
                };
                /**
                 * @param {!Object} fft
                 * @return {undefined}
                 */
                var freqToFloat = function (fft) {
                    if (fft.freqDomain instanceof Float32Array === false) {
                        /** @type {!Float32Array} */
                        fft.freqDomain = new Float32Array(fft.analyser.frequencyBinCount);
                    }
                };
                /**
                 * @param {!Object} fft
                 * @return {undefined}
                 */
                var freqToInt = function (fft) {
                    if (fft.freqDomain instanceof Uint8Array === false) {
                        /** @type {!Uint8Array} */
                        fft.freqDomain = new Uint8Array(fft.analyser.frequencyBinCount);
                    }
                };
                /**
                 * @param {!Object} fft
                 * @return {undefined}
                 */
                var timeToFloat = function (fft) {
                    if (fft.timeDomain instanceof Float32Array === false) {
                        /** @type {!Float32Array} */
                        fft.timeDomain = new Float32Array(fft.analyser.frequencyBinCount);
                    }
                };
                /**
                 * @param {!Object} fft
                 * @return {undefined}
                 */
                var timeToInt = function (fft) {
                    if (fft.timeDomain instanceof Uint8Array === false) {
                        /** @type {!Uint8Array} */
                        fft.timeDomain = new Uint8Array(fft.analyser.frequencyBinCount);
                    }
                };
            })();
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.SignalBase = function () {
                };
                Tone.extend(Tone.SignalBase);
                /**
                 * @param {!Object} unit
                 * @param {number} id
                 * @param {number} n
                 * @return {?}
                 */
                Tone.SignalBase.prototype.connect = function (unit, id, n) {
                    return Tone.Signal && Tone.Signal === unit.constructor || Tone.Param && Tone.Param === unit.constructor || Tone.TimelineSignal && Tone.TimelineSignal === unit.constructor ? (unit._param.cancelScheduledValues(0), unit._param.value = 0, unit.overridden = true) : unit instanceof AudioParam && (unit.cancelScheduledValues(0), unit.value = 0), Tone.prototype.connect.call(this, unit, id, n), this;
                };
                Tone.SignalBase;
            })(i);
            (function (Tone) {
                /**
                 * @param {number} mapping
                 * @param {!Object} bufferLen
                 * @return {undefined}
                 */
                Tone.WaveShaper = function (mapping, bufferLen) {
                    this._shaper = this.input = this.output = this.context.createWaveShaper();
                    /** @type {null} */
                    this._curve = null;
                    if (Array.isArray(mapping)) {
                        /** @type {number} */
                        this.curve = mapping;
                    } else {
                        if (isFinite(mapping) || this.isUndef(mapping)) {
                            /** @type {!Float32Array} */
                            this._curve = new Float32Array(this.defaultArg(mapping, 1024));
                        } else {
                            if (this.isFunction(mapping)) {
                                /** @type {!Float32Array} */
                                this._curve = new Float32Array(this.defaultArg(bufferLen, 1024));
                                this.setMap(mapping);
                            }
                        }
                    }
                };
                Tone.extend(Tone.WaveShaper, Tone.SignalBase);
                /**
                 * @param {!Function} mapping
                 * @return {?}
                 */
                Tone.WaveShaper.prototype.setMap = function (mapping) {
                    /** @type {number} */
                    var i = 0;
                    var len = this._curve.length;
                    for (; i < len; i++) {
                        /** @type {number} */
                        var normalized = i / (len - 1) * 2 - 1;
                        this._curve[i] = mapping(normalized, i);
                    }
                    return this._shaper.curve = this._curve, this;
                };
                Object.defineProperty(Tone.WaveShaper.prototype, "curve", {
                    get: function () {
                        return this._shaper.curve;
                    },
                    set: function (value) {
                        /** @type {!Float32Array} */
                        this._curve = new Float32Array(value);
                        /** @type {!Float32Array} */
                        this._shaper.curve = this._curve;
                    }
                });
                Object.defineProperty(Tone.WaveShaper.prototype, "oversample", {
                    get: function () {
                        return this._shaper.oversample;
                    },
                    set: function (obj) {
                        if (-1 === ["none", "2x", "4x"].indexOf(obj)) {
                            throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                        }
                        /** @type {string} */
                        this._shaper.oversample = obj;
                    }
                });
                /**
                 * @return {?}
                 */
                Tone.WaveShaper.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this;
                };
                Tone.WaveShaper;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} val
                 * @param {!Object} units
                 * @return {?}
                 */
                Tone.TimeBase = function (val, units) {
                    if (!(this instanceof Tone.TimeBase)) {
                        return new Tone.TimeBase(val, units);
                    }
                    if (this._expr = this._noOp, val instanceof Tone.TimeBase) {
                        this.copy(val);
                    } else {
                        if (!this.isUndef(units) || this.isNumber(val)) {
                            units = this.defaultArg(units, this._defaultUnits);
                            var method = this._primaryExpressions[units].method;
                            this._expr = method.bind(this, val);
                        } else {
                            if (this.isString(val)) {
                                this.set(val);
                            } else {
                                if (this.isUndef(val)) {
                                    this._expr = this._defaultExpr();
                                }
                            }
                        }
                    }
                };
                Tone.extend(Tone.TimeBase);
                /**
                 * @param {!Object} obj
                 * @return {?}
                 */
                Tone.TimeBase.prototype.set = function (obj) {
                    return this._expr = this._parseExprString(obj), this;
                };
                /**
                 * @return {?}
                 */
                Tone.TimeBase.prototype.clone = function () {
                    var relation = new this.constructor;
                    return relation.copy(this), relation;
                };
                /**
                 * @param {?} a
                 * @return {?}
                 */
                Tone.TimeBase.prototype.copy = function (a) {
                    var e = a._expr();
                    return this.set(e);
                };
                Tone.TimeBase.prototype._primaryExpressions = {
                    n: {
                        regexp: /^(\d+)n/i,
                        method: function (value) {
                            return value = parseInt(value), 1 === value ? this._beatsToUnits(this._timeSignature()) : this._beatsToUnits(4 / value);
                        }
                    },
                    t: {
                        regexp: /^(\d+)t/i,
                        method: function (duration) {
                            return duration = parseInt(duration), this._beatsToUnits(8 / (3 * parseInt(duration)));
                        }
                    },
                    m: {
                        regexp: /^(\d+)m/i,
                        method: function (value) {
                            return this._beatsToUnits(parseInt(value) * this._timeSignature());
                        }
                    },
                    i: {
                        regexp: /^(\d+)i/i,
                        method: function (value) {
                            return this._ticksToUnits(parseInt(value));
                        }
                    },
                    hz: {
                        regexp: /^(\d+(?:\.\d+)?)hz/i,
                        method: function (value) {
                            return this._frequencyToUnits(parseFloat(value));
                        }
                    },
                    tr: {
                        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                        method: function (name, w, e) {
                            /** @type {number} */
                            var fns = 0;
                            return name && "0" !== name && (fns = fns + this._beatsToUnits(this._timeSignature() * parseFloat(name))), w && "0" !== w && (fns = fns + this._beatsToUnits(parseFloat(w))), e && "0" !== e && (fns = fns + this._beatsToUnits(parseFloat(e) / 4)), fns;
                        }
                    },
                    s: {
                        regexp: /^(\d+(?:\.\d+)?s)/,
                        method: function (value) {
                            return this._secondsToUnits(parseFloat(value));
                        }
                    },
                    samples: {
                        regexp: /^(\d+)samples/,
                        method: function (value) {
                            return parseInt(value) / this.context.sampleRate;
                        }
                    },
                    default: {
                        regexp: /^(\d+(?:\.\d+)?)/,
                        method: function (name) {
                            return this._primaryExpressions[this._defaultUnits].method.call(this, name);
                        }
                    }
                };
                Tone.TimeBase.prototype._binaryExpressions = {
                    "+": {
                        regexp: /^\+/,
                        precedence: 2,
                        method: function (e, f) {
                            return e() + f();
                        }
                    },
                    "-": {
                        regexp: /^\-/,
                        precedence: 2,
                        method: function (e, action) {
                            return e() - action();
                        }
                    },
                    "*": {
                        regexp: /^\*/,
                        precedence: 1,
                        method: function (lh, rh) {
                            return lh() * rh();
                        }
                    },
                    "/": {
                        regexp: /^\//,
                        precedence: 1,
                        method: function (lh, rh) {
                            return lh() / rh();
                        }
                    }
                };
                Tone.TimeBase.prototype._unaryExpressions = {
                    neg: {
                        regexp: /^\-/,
                        method: function (unblock) {
                            return -unblock();
                        }
                    }
                };
                Tone.TimeBase.prototype._syntaxGlue = {
                    "(": {
                        regexp: /^\(/
                    },
                    ")": {
                        regexp: /^\)/
                    }
                };
                /**
                 * @param {string} expr
                 * @return {?}
                 */
                Tone.TimeBase.prototype._tokenize = function (expr) {
                    /**
                     * @param {string} expr
                     * @param {?} context
                     * @return {?}
                     */
                    function getNextToken(expr, context) {
                        /** @type {!Array} */
                        var expressions = ["_binaryExpressions", "_unaryExpressions", "_primaryExpressions", "_syntaxGlue"];
                        /** @type {number} */
                        var i = 0;
                        for (; i < expressions.length; i++) {
                            var ops = context[expressions[i]];
                            var opi;
                            for (opi in ops) {
                                var op = ops[opi];
                                var reg = op.regexp;
                                var m = expr.match(reg);
                                if (null !== m) {
                                    return {
                                        method: op.method,
                                        precedence: op.precedence,
                                        regexp: op.regexp,
                                        value: m[0]
                                    };
                                }
                            }
                        }
                        throw new SyntaxError("Tone.TimeBase: Unexpected token " + expr);
                    }

                    /** @type {number} */
                    var i = -1;
                    /** @type {!Array} */
                    var events = [];
                    for (; expr.length > 0;) {
                        expr = expr.trim();
                        var token = getNextToken(expr, this);
                        events.push(token);
                        expr = expr.substr(token.value.length);
                    }
                    return {
                        next: function () {
                            return events[++i];
                        },
                        peek: function () {
                            return events[i + 1];
                        }
                    };
                };
                /**
                 * @param {!Object} token
                 * @param {!Object} group
                 * @param {number} prec
                 * @return {?}
                 */
                Tone.TimeBase.prototype._matchGroup = function (token, group, prec) {
                    /** @type {boolean} */
                    var op = false;
                    if (!this.isUndef(token)) {
                        var method;
                        for (method in group) {
                            var op = group[method];
                            if (op.regexp.test(token.value)) {
                                if (this.isUndef(prec)) {
                                    return op;
                                }
                                if (op.precedence === prec) {
                                    return op;
                                }
                            }
                        }
                    }
                    return op;
                };
                /**
                 * @param {?} lexer
                 * @param {number} precedence
                 * @return {?}
                 */
                Tone.TimeBase.prototype._parseBinary = function (lexer, precedence) {
                    var expr;
                    if (this.isUndef(precedence)) {
                        /** @type {number} */
                        precedence = 2;
                    }
                    expr = precedence < 0 ? this._parseUnary(lexer) : this._parseBinary(lexer, precedence - 1);
                    var token = lexer.peek();
                    for (; token && this._matchGroup(token, this._binaryExpressions, precedence);) {
                        token = lexer.next();
                        expr = token.method.bind(this, expr, this._parseBinary(lexer, precedence - 1));
                        token = lexer.peek();
                    }
                    return expr;
                };
                /**
                 * @param {?} lexer
                 * @return {?}
                 */
                Tone.TimeBase.prototype._parseUnary = function (lexer) {
                    var token;
                    var expr;
                    token = lexer.peek();
                    var op = this._matchGroup(token, this._unaryExpressions);
                    return op ? (token = lexer.next(), expr = this._parseUnary(lexer), op.method.bind(this, expr)) : this._parsePrimary(lexer);
                };
                /**
                 * @param {?} lexer
                 * @return {?}
                 */
                Tone.TimeBase.prototype._parsePrimary = function (lexer) {
                    var token;
                    var expr;
                    if (token = lexer.peek(), this.isUndef(token)) {
                        throw new SyntaxError("Tone.TimeBase: Unexpected end of expression");
                    }
                    if (this._matchGroup(token, this._primaryExpressions)) {
                        token = lexer.next();
                        var matching = token.value.match(token.regexp);
                        return token.method.bind(this, matching[1], matching[2], matching[3]);
                    }
                    if (token && "(" === token.value) {
                        if (lexer.next(), expr = this._parseBinary(lexer), token = lexer.next(), !token || ")" !== token.value) {
                            throw new SyntaxError("Expected )");
                        }
                        return expr;
                    }
                    throw new SyntaxError("Tone.TimeBase: Cannot process token " + token.value);
                };
                /**
                 * @param {!Object} node
                 * @return {?}
                 */
                Tone.TimeBase.prototype._parseExprString = function (node) {
                    if (!this.isString(node)) {
                        node = node.toString();
                    }
                    var lexer = this._tokenize(node);
                    var tree = this._parseBinary(lexer);
                    return tree;
                };
                /**
                 * @return {?}
                 */
                Tone.TimeBase.prototype._noOp = function () {
                    return 0;
                };
                /**
                 * @return {?}
                 */
                Tone.TimeBase.prototype._defaultExpr = function () {
                    return this._noOp;
                };
                /** @type {string} */
                Tone.TimeBase.prototype._defaultUnits = "s";
                /**
                 * @param {number} freq
                 * @return {?}
                 */
                Tone.TimeBase.prototype._frequencyToUnits = function (freq) {
                    return 1 / freq;
                };
                /**
                 * @param {number} beats
                 * @return {?}
                 */
                Tone.TimeBase.prototype._beatsToUnits = function (beats) {
                    return 60 / Tone.Transport.bpm.value * beats;
                };
                /**
                 * @param {number} seconds
                 * @return {?}
                 */
                Tone.TimeBase.prototype._secondsToUnits = function (seconds) {
                    return seconds;
                };
                /**
                 * @param {number} ticks
                 * @return {?}
                 */
                Tone.TimeBase.prototype._ticksToUnits = function (ticks) {
                    return ticks * (this._beatsToUnits(1) / Tone.Transport.PPQ);
                };
                /**
                 * @return {?}
                 */
                Tone.TimeBase.prototype._timeSignature = function () {
                    return Tone.Transport.timeSignature;
                };
                /**
                 * @param {?} val
                 * @param {string} name
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.TimeBase.prototype._pushExpr = function (val, name, units) {
                    return val instanceof Tone.TimeBase || (val = new this.constructor(val, units)), this._expr = this._binaryExpressions[name].method.bind(this, this._expr, val._expr), this;
                };
                /**
                 * @param {?} val
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.TimeBase.prototype.add = function (val, units) {
                    return this._pushExpr(val, "+", units);
                };
                /**
                 * @param {?} val
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.TimeBase.prototype.sub = function (val, units) {
                    return this._pushExpr(val, "-", units);
                };
                /**
                 * @param {number} val
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.TimeBase.prototype.mult = function (val, units) {
                    return this._pushExpr(val, "*", units);
                };
                /**
                 * @param {?} val
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.TimeBase.prototype.div = function (val, units) {
                    return this._pushExpr(val, "/", units);
                };
                /**
                 * @return {?}
                 */
                Tone.TimeBase.prototype.valueOf = function () {
                    return this._expr();
                };
                /**
                 * @return {undefined}
                 */
                Tone.TimeBase.prototype.dispose = function () {
                    /** @type {null} */
                    this._expr = null;
                };
                Tone.TimeBase;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} time
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.Time = function (time, units) {
                    if (!(this instanceof Tone.Time)) {
                        return new Tone.Time(time, units);
                    }
                    /** @type {boolean} */
                    this._plusNow = false;
                    Tone.TimeBase.call(this, time, units);
                };
                Tone.extend(Tone.Time, Tone.TimeBase);
                /** @type {!Object} */
                Tone.Time.prototype._unaryExpressions = Object.create(Tone.TimeBase.prototype._unaryExpressions);
                Tone.Time.prototype._unaryExpressions.quantize = {
                    regexp: /^@/,
                    method: function (rh) {
                        return Tone.Transport.nextSubdivision(rh());
                    }
                };
                Tone.Time.prototype._unaryExpressions.now = {
                    regexp: /^\+/,
                    method: function (unblock) {
                        return this._plusNow = true, unblock();
                    }
                };
                /**
                 * @param {?} subdiv
                 * @param {?} percent
                 * @return {?}
                 */
                Tone.Time.prototype.quantize = function (subdiv, percent) {
                    return percent = this.defaultArg(percent, 1), this._expr = function (i, duration, channelCount) {
                        i = i();
                        duration = duration.toSeconds();
                        /** @type {number} */
                        var sampleRate = Math.round(i / duration);
                        /** @type {number} */
                        var length = sampleRate * duration;
                        /** @type {number} */
                        var n = length - i;
                        return i + n * channelCount;
                    }.bind(this, this._expr, new this.constructor(subdiv), percent), this;
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.addNow = function () {
                    return this._plusNow = true, this;
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype._defaultExpr = function () {
                    return this._plusNow = true, this._noOp;
                };
                /**
                 * @param {?} time
                 * @return {?}
                 */
                Tone.Time.prototype.copy = function (time) {
                    return Tone.TimeBase.prototype.copy.call(this, time), this._plusNow = time._plusNow, this;
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toNotation = function () {
                    var time = this.toSeconds();
                    /** @type {!Array} */
                    var testNotations = ["1m", "2n", "4n", "8n", "16n", "32n", "64n", "128n"];
                    var retNotation = this._toNotationHelper(time, testNotations);
                    /** @type {!Array} */
                    var testTripletNotations = ["1m", "2n", "2t", "4n", "4t", "8n", "8t", "16n", "16t", "32n", "32t", "64n", "64t", "128n"];
                    var retTripletNotation = this._toNotationHelper(time, testTripletNotations);
                    return retTripletNotation.split("+").length < retNotation.split("+").length ? retTripletNotation : retNotation;
                };
                /**
                 * @param {number} units
                 * @param {!Array} testNotations
                 * @return {?}
                 */
                Tone.Time.prototype._toNotationHelper = function (units, testNotations) {
                    var threshold = this._notationToUnits(testNotations[testNotations.length - 1]);
                    /** @type {string} */
                    var name = "";
                    /** @type {number} */
                    var i = 0;
                    for (; i < testNotations.length; i++) {
                        var notationTime = this._notationToUnits(testNotations[i]);
                        /** @type {number} */
                        var multiple = units / notationTime;
                        /** @type {number} */
                        var floatingPointError = 1e-6;
                        if (1 - multiple % 1 < floatingPointError && (multiple = multiple + floatingPointError), multiple = Math.floor(multiple), multiple > 0) {
                            if (name = name + (1 === multiple ? testNotations[i] : multiple.toString() + "*" + testNotations[i]), units = units - multiple * notationTime, units < threshold) {
                                break;
                            }
                            /** @type {string} */
                            name = name + " + ";
                        }
                    }
                    return "" === name && (name = "0"), name;
                };
                /**
                 * @param {string} notation
                 * @return {?}
                 */
                Tone.Time.prototype._notationToUnits = function (notation) {
                    var primaryExprs = this._primaryExpressions;
                    /** @type {!Array} */
                    var clusteringKey = [primaryExprs.n, primaryExprs.t, primaryExprs.m];
                    /** @type {number} */
                    var field = 0;
                    for (; field < clusteringKey.length; field++) {
                        var expr = clusteringKey[field];
                        var soop = notation.match(expr.regexp);
                        if (soop) {
                            return expr.method.call(this, soop[1]);
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toBarsBeatsSixteenths = function () {
                    var quarterTime = this._beatsToUnits(1);
                    /** @type {number} */
                    var quarters = this.toSeconds() / quarterTime;
                    /** @type {number} */
                    var review = Math.floor(quarters / this._timeSignature());
                    /** @type {number} */
                    var n = quarters % 1 * 4;
                    /** @type {number} */
                    quarters = Math.floor(quarters) % this._timeSignature();
                    /** @type {string} */
                    n = n.toString();
                    if (n.length > 3) {
                        /** @type {string} */
                        n = parseFloat(n).toFixed(3);
                    }
                    /** @type {!Array} */
                    var responses = [review, quarters, n];
                    return responses.join(":");
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toTicks = function () {
                    var quarterTime = this._beatsToUnits(1);
                    /** @type {number} */
                    var quarters = this.valueOf() / quarterTime;
                    return Math.floor(quarters * Tone.Transport.PPQ);
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toSamples = function () {
                    return this.toSeconds() * this.context.sampleRate;
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toFrequency = function () {
                    return 1 / this.toSeconds();
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toSeconds = function () {
                    return this.valueOf();
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.toMilliseconds = function () {
                    return 1e3 * this.toSeconds();
                };
                /**
                 * @return {?}
                 */
                Tone.Time.prototype.valueOf = function () {
                    var val = this._expr();
                    return val + (this._plusNow ? this.now() : 0);
                };
                Tone.Time;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} val
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.Frequency = function (val, units) {
                    if (!(this instanceof Tone.Frequency)) {
                        return new Tone.Frequency(val, units);
                    }
                    Tone.TimeBase.call(this, val, units);
                };
                Tone.extend(Tone.Frequency, Tone.TimeBase);
                /** @type {!Object} */
                Tone.Frequency.prototype._primaryExpressions = Object.create(Tone.TimeBase.prototype._primaryExpressions);
                Tone.Frequency.prototype._primaryExpressions.midi = {
                    regexp: /^(\d+(?:\.\d+)?midi)/,
                    method: function (value) {
                        return this.midiToFrequency(value);
                    }
                };
                Tone.Frequency.prototype._primaryExpressions.note = {
                    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                    method: function (i, param) {
                        var index = noteToScaleIndex[i.toLowerCase()];
                        var value = index + 12 * (parseInt(param) + 1);
                        return this.midiToFrequency(value);
                    }
                };
                Tone.Frequency.prototype._primaryExpressions.tr = {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                    method: function (item, w, n) {
                        /** @type {number} */
                        var a = 1;
                        return item && "0" !== item && (a = a * this._beatsToUnits(this._timeSignature() * parseFloat(item))), w && "0" !== w && (a = a * this._beatsToUnits(parseFloat(w))), n && "0" !== n && (a = a * this._beatsToUnits(parseFloat(n) / 4)), a;
                    }
                };
                /**
                 * @param {?} interval
                 * @return {?}
                 */
                Tone.Frequency.prototype.transpose = function (interval) {
                    return this._expr = function (expr, interval) {
                        var val = expr();
                        return val * this.intervalToFrequencyRatio(interval);
                    }.bind(this, this._expr, interval), this;
                };
                /**
                 * @param {?} intervals
                 * @return {?}
                 */
                Tone.Frequency.prototype.harmonize = function (intervals) {
                    return this._expr = function (expr, intervals) {
                        var val = expr();
                        /** @type {!Array} */
                        var ret = [];
                        /** @type {number} */
                        var i = 0;
                        for (; i < intervals.length; i++) {
                            /** @type {number} */
                            ret[i] = val * this.intervalToFrequencyRatio(intervals[i]);
                        }
                        return ret;
                    }.bind(this, this._expr, intervals), this;
                };
                /**
                 * @return {?}
                 */
                Tone.Frequency.prototype.toMidi = function () {
                    return this.frequencyToMidi(this.valueOf());
                };
                /**
                 * @return {?}
                 */
                Tone.Frequency.prototype.toNote = function () {
                    var freq = this.valueOf();
                    /** @type {number} */
                    var ipw = Math.log(freq / Tone.Frequency.A4) / Math.LN2;
                    /** @type {number} */
                    var num = Math.round(12 * ipw) + 57;
                    /** @type {number} */
                    var place = Math.floor(num / 12);
                    if (place < 0) {
                        /** @type {number} */
                        num = num + -12 * place;
                    }
                    var note = notes[num % 12];
                    return note + place.toString();
                };
                /**
                 * @return {?}
                 */
                Tone.Frequency.prototype.toSeconds = function () {
                    return 1 / this.valueOf();
                };
                /**
                 * @return {?}
                 */
                Tone.Frequency.prototype.toFrequency = function () {
                    return this.valueOf();
                };
                /**
                 * @return {?}
                 */
                Tone.Frequency.prototype.toTicks = function () {
                    var quarterTime = this._beatsToUnits(1);
                    /** @type {number} */
                    var quarters = this.valueOf() / quarterTime;
                    return Math.floor(quarters * Tone.Transport.PPQ);
                };
                /**
                 * @param {number} freq
                 * @return {?}
                 */
                Tone.Frequency.prototype._frequencyToUnits = function (freq) {
                    return freq;
                };
                /**
                 * @param {number} ticks
                 * @return {?}
                 */
                Tone.Frequency.prototype._ticksToUnits = function (ticks) {
                    return 1 / (60 * ticks / (Tone.Transport.bpm.value * Tone.Transport.PPQ));
                };
                /**
                 * @param {number} beats
                 * @return {?}
                 */
                Tone.Frequency.prototype._beatsToUnits = function (beats) {
                    return 1 / Tone.TimeBase.prototype._beatsToUnits.call(this, beats);
                };
                /**
                 * @param {number} seconds
                 * @return {?}
                 */
                Tone.Frequency.prototype._secondsToUnits = function (seconds) {
                    return 1 / seconds;
                };
                /** @type {string} */
                Tone.Frequency.prototype._defaultUnits = "hz";
                var noteToScaleIndex = {
                    cbb: -2,
                    cb: -1,
                    c: 0,
                    "c#": 1,
                    cx: 2,
                    dbb: 0,
                    db: 1,
                    d: 2,
                    "d#": 3,
                    dx: 4,
                    ebb: 2,
                    eb: 3,
                    e: 4,
                    "e#": 5,
                    ex: 6,
                    fbb: 3,
                    fb: 4,
                    f: 5,
                    "f#": 6,
                    fx: 7,
                    gbb: 5,
                    gb: 6,
                    g: 7,
                    "g#": 8,
                    gx: 9,
                    abb: 7,
                    ab: 8,
                    a: 9,
                    "a#": 10,
                    ax: 11,
                    bbb: 9,
                    bb: 10,
                    b: 11,
                    "b#": 12,
                    bx: 13
                };
                /** @type {!Array} */
                var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
                /** @type {number} */
                Tone.Frequency.A4 = 440;
                /**
                 * @param {number} midi
                 * @return {?}
                 */
                Tone.Frequency.prototype.midiToFrequency = function (midi) {
                    return Tone.Frequency.A4 * Math.pow(2, (midi - 69) / 12);
                };
                /**
                 * @param {number} frequency
                 * @return {?}
                 */
                Tone.Frequency.prototype.frequencyToMidi = function (frequency) {
                    return 69 + 12 * Math.log(frequency / Tone.Frequency.A4) / Math.LN2;
                };
                Tone.Frequency;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} val
                 * @param {boolean} units
                 * @return {?}
                 */
                Tone.TransportTime = function (val, units) {
                    if (!(this instanceof Tone.TransportTime)) {
                        return new Tone.TransportTime(val, units);
                    }
                    Tone.Time.call(this, val, units);
                };
                Tone.extend(Tone.TransportTime, Tone.Time);
                /** @type {!Object} */
                Tone.TransportTime.prototype._unaryExpressions = Object.create(Tone.Time.prototype._unaryExpressions);
                Tone.TransportTime.prototype._unaryExpressions.quantize = {
                    regexp: /^@/,
                    method: function (rh) {
                        var subdivision = this._secondsToTicks(rh());
                        /** @type {number} */
                        var multiple = Math.ceil(Tone.Transport.ticks / subdivision);
                        return this._ticksToUnits(multiple * subdivision);
                    }
                };
                /**
                 * @param {?} seconds
                 * @return {?}
                 */
                Tone.TransportTime.prototype._secondsToTicks = function (seconds) {
                    var quarterTime = this._beatsToUnits(1);
                    /** @type {number} */
                    var quarters = seconds / quarterTime;
                    return Math.round(quarters * Tone.Transport.PPQ);
                };
                /**
                 * @return {?}
                 */
                Tone.TransportTime.prototype.valueOf = function () {
                    var val = this._secondsToTicks(this._expr());
                    return val + (this._plusNow ? Tone.Transport.ticks : 0);
                };
                /**
                 * @return {?}
                 */
                Tone.TransportTime.prototype.toTicks = function () {
                    return this.valueOf();
                };
                /**
                 * @return {?}
                 */
                Tone.TransportTime.prototype.toSeconds = function () {
                    var val = this._expr();
                    return val + (this._plusNow ? Tone.Transport.seconds : 0);
                };
                /**
                 * @return {?}
                 */
                Tone.TransportTime.prototype.toFrequency = function () {
                    return 1 / this.toSeconds();
                };
                Tone.TransportTime;
            })(i);
            (function (Tone) {
                Tone.Type = {
                    Default: "number",
                    Time: "time",
                    Frequency: "frequency",
                    TransportTime: "transportTime",
                    Ticks: "ticks",
                    NormalRange: "normalRange",
                    AudioRange: "audioRange",
                    Decibels: "db",
                    Interval: "interval",
                    BPM: "bpm",
                    Positive: "positive",
                    Cents: "cents",
                    Degrees: "degrees",
                    MIDI: "midi",
                    BarsBeatsSixteenths: "barsBeatsSixteenths",
                    Samples: "samples",
                    Hertz: "hertz",
                    Note: "note",
                    Milliseconds: "milliseconds",
                    Seconds: "seconds",
                    Notation: "notation"
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.prototype.toSeconds = function (time) {
                    return this.isNumber(time) ? time : this.isUndef(time) ? this.now() : this.isString(time) ? (new Tone.Time(time)).toSeconds() : time instanceof Tone.TimeBase ? time.toSeconds() : void 0;
                };
                /**
                 * @param {!Object} freq
                 * @return {?}
                 */
                Tone.prototype.toFrequency = function (freq) {
                    return this.isNumber(freq) ? freq : this.isString(freq) || this.isUndef(freq) ? (new Tone.Frequency(freq)).valueOf() : freq instanceof Tone.TimeBase ? freq.toFrequency() : void 0;
                };
                /**
                 * @param {!Object} time
                 * @return {?}
                 */
                Tone.prototype.toTicks = function (time) {
                    return this.isNumber(time) || this.isString(time) ? (new Tone.TransportTime(time)).toTicks() : this.isUndef(time) ? Tone.Transport.ticks : time instanceof Tone.TimeBase ? time.toTicks() : void 0;
                };
            })(i);
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.Param = function () {
                    var options = this.optionsObject(arguments, ["param", "units", "convert"], Tone.Param.defaults);
                    this._param = this.input = options.param;
                    this.units = options.units;
                    this.convert = options.convert;
                    /** @type {boolean} */
                    this.overridden = false;
                    /** @type {null} */
                    this._lfo = null;
                    if (this.isObject(options.lfo)) {
                        this.value = options.lfo;
                    } else {
                        if (!this.isUndef(options.value)) {
                            this.value = options.value;
                        }
                    }
                };
                Tone.extend(Tone.Param);
                Tone.Param.defaults = {
                    units: Tone.Type.Default,
                    convert: true,
                    param: void 0
                };
                Object.defineProperty(Tone.Param.prototype, "value", {
                    get: function () {
                        return this._toUnits(this._param.value);
                    },
                    set: function (value) {
                        if (this.isObject(value)) {
                            if (this.isUndef(Tone.LFO)) {
                                throw new Error("Include 'Tone.LFO' to use an LFO as a Param value.");
                            }
                            if (this._lfo) {
                                this._lfo.dispose();
                            }
                            this._lfo = (new Tone.LFO(value)).start();
                            this._lfo.connect(this.input);
                        } else {
                            var convertedVal = this._fromUnits(value);
                            this._param.cancelScheduledValues(0);
                            this._param.value = convertedVal;
                        }
                    }
                });
                /**
                 * @param {?} val
                 * @return {?}
                 */
                Tone.Param.prototype._fromUnits = function (val) {
                    if (!this.convert && !this.isUndef(this.convert)) {
                        return val;
                    }
                    switch (this.units) {
                        case Tone.Type.Time:
                            return this.toSeconds(val);
                        case Tone.Type.Frequency:
                            return this.toFrequency(val);
                        case Tone.Type.Decibels:
                            return this.dbToGain(val);
                        case Tone.Type.NormalRange:
                            return Math.min(Math.max(val, 0), 1);
                        case Tone.Type.AudioRange:
                            return Math.min(Math.max(val, -1), 1);
                        case Tone.Type.Positive:
                            return Math.max(val, 0);
                        default:
                            return val;
                    }
                };
                /**
                 * @param {?} val
                 * @return {?}
                 */
                Tone.Param.prototype._toUnits = function (val) {
                    if (!this.convert && !this.isUndef(this.convert)) {
                        return val;
                    }
                    switch (this.units) {
                        case Tone.Type.Decibels:
                            return this.gainToDb(val);
                        default:
                            return val;
                    }
                };
                /** @type {number} */
                Tone.Param.prototype._minOutput = 1e-5;
                /**
                 * @param {number} value
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Param.prototype.setValueAtTime = function (value, time) {
                    return value = this._fromUnits(value), time = this.toSeconds(time), time <= this.now() + this.blockTime ? this._param.value = value : this._param.setValueAtTime(value, time), this;
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Param.prototype.setRampPoint = function (time) {
                    time = this.defaultArg(time, this.now());
                    var currentVal = this._param.value;
                    return 0 === currentVal && (currentVal = this._minOutput), this._param.setValueAtTime(currentVal, time), this;
                };
                /**
                 * @param {?} value
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Param.prototype.linearRampToValueAtTime = function (value, time) {
                    return value = this._fromUnits(value), this._param.linearRampToValueAtTime(value, this.toSeconds(time)), this;
                };
                /**
                 * @param {number} value
                 * @param {number} endTime
                 * @return {?}
                 */
                Tone.Param.prototype.exponentialRampToValueAtTime = function (value, endTime) {
                    return value = this._fromUnits(value), value = Math.max(this._minOutput, value), this._param.exponentialRampToValueAtTime(value, this.toSeconds(endTime)), this;
                };
                /**
                 * @param {number} value
                 * @param {boolean} rampTime
                 * @param {number} startTime
                 * @return {?}
                 */
                Tone.Param.prototype.exponentialRampToValue = function (value, rampTime, startTime) {
                    return startTime = this.toSeconds(startTime), this.setRampPoint(startTime), this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime)), this;
                };
                /**
                 * @param {?} value
                 * @param {boolean} rampTime
                 * @param {number} startTime
                 * @return {?}
                 */
                Tone.Param.prototype.linearRampToValue = function (value, rampTime, startTime) {
                    return startTime = this.toSeconds(startTime), this.setRampPoint(startTime), this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime)), this;
                };
                /**
                 * @param {?} value
                 * @param {number} startTime
                 * @param {number} timeConstant
                 * @return {?}
                 */
                Tone.Param.prototype.setTargetAtTime = function (value, startTime, timeConstant) {
                    return value = this._fromUnits(value), value = Math.max(this._minOutput, value), timeConstant = Math.max(this._minOutput, timeConstant), this._param.setTargetAtTime(value, this.toSeconds(startTime), timeConstant), this;
                };
                /**
                 * @param {number} values
                 * @param {undefined} startTime
                 * @param {undefined} duration
                 * @return {?}
                 */
                Tone.Param.prototype.setValueCurveAtTime = function (values, startTime, duration) {
                    /** @type {number} */
                    var i = 0;
                    for (; i < values.length; i++) {
                        values[i] = this._fromUnits(values[i]);
                    }
                    return this._param.setValueCurveAtTime(values, this.toSeconds(startTime), this.toSeconds(duration)), this;
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Param.prototype.cancelScheduledValues = function (time) {
                    return this._param.cancelScheduledValues(this.toSeconds(time)), this;
                };
                /**
                 * @param {number} value
                 * @param {!Object} rampTime
                 * @param {undefined} startTime
                 * @return {?}
                 */
                Tone.Param.prototype.rampTo = function (value, rampTime, startTime) {
                    return rampTime = this.defaultArg(rampTime, 0), this.units === Tone.Type.Frequency || this.units === Tone.Type.BPM || this.units === Tone.Type.Decibels ? this.exponentialRampToValue(value, rampTime, startTime) : this.linearRampToValue(value, rampTime, startTime), this;
                };
                Object.defineProperty(Tone.Param.prototype, "lfo", {
                    get: function () {
                        return this._lfo;
                    }
                });
                /**
                 * @return {?}
                 */
                Tone.Param.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._param = null, this._lfo && (this._lfo.dispose(), this._lfo = null), this;
                };
                Tone.Param;
            })(i);
            (function (Tone) {
                if (window.GainNode && !AudioContext.prototype.createGain) {
                    /** @type {function(this:AudioContext): !GainNode} */
                    AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
                }
                /**
                 * @return {undefined}
                 */
                Tone.Gain = function () {
                    var options = this.optionsObject(arguments, ["gain", "units"], Tone.Gain.defaults);
                    this.input = this.output = this._gainNode = this.context.createGain();
                    this.gain = new Tone.Param({
                        param: this._gainNode.gain,
                        units: options.units,
                        value: options.gain,
                        convert: options.convert
                    });
                    this._readOnly("gain");
                };
                Tone.extend(Tone.Gain);
                Tone.Gain.defaults = {
                    gain: 1,
                    convert: true
                };
                /**
                 * @return {undefined}
                 */
                Tone.Gain.prototype.dispose = function () {
                    Tone.Param.prototype.dispose.call(this);
                    this._gainNode.disconnect();
                    /** @type {null} */
                    this._gainNode = null;
                    this._writable("gain");
                    this.gain.dispose();
                    /** @type {null} */
                    this.gain = null;
                };
                /**
                 * @param {number} inputs
                 * @param {number} outputs
                 * @return {undefined}
                 */
                Tone.prototype.createInsOuts = function (inputs, outputs) {
                    if (1 === inputs) {
                        this.input = new Tone.Gain;
                    } else {
                        if (inputs > 1) {
                            /** @type {!Array} */
                            this.input = new Array(inputs);
                        }
                    }
                    if (1 === outputs) {
                        this.output = new Tone.Gain;
                    } else {
                        if (outputs > 1) {
                            /** @type {!Array} */
                            this.output = new Array(inputs);
                        }
                    }
                };
                Tone.Gain;
            })(i);
            slater = function (Tone) {
                return Tone.Signal = function () {
                    var options = this.optionsObject(arguments, ["value", "units"], Tone.Signal.defaults);
                    this.output = this._gain = this.context.createGain();
                    options.param = this._gain.gain;
                    Tone.Param.call(this, options);
                    this.input = this._param = this._gain.gain;
                    this.context.getConstant(1).chain(this._gain);
                }, Tone.extend(Tone.Signal, Tone.Param), Tone.Signal.defaults = {
                    value: 0,
                    units: Tone.Type.Default,
                    convert: true
                }, Tone.Signal.prototype.connect = Tone.SignalBase.prototype.connect, Tone.Signal.prototype.dispose = function () {
                    return Tone.Param.prototype.dispose.call(this), this._param = null, this._gain.disconnect(), this._gain = null, this;
                }, Tone.Signal;
            }(i);
            firstIsCO = function (Tone) {
                return Tone.Add = function (value) {
                    this.createInsOuts(2, 0);
                    this._sum = this.input[0] = this.input[1] = this.output = new Tone.Gain;
                    this._param = this.input[1] = new Tone.Signal(value);
                    this._param.connect(this._sum);
                }, Tone.extend(Tone.Add, Tone.Signal), Tone.Add.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._sum.dispose(), this._sum = null, this._param.dispose(), this._param = null, this;
                }, Tone.Add;
            }(i);
            ivib = function (Tone) {
                return Tone.Multiply = function (value) {
                    this.createInsOuts(2, 0);
                    this._mult = this.input[0] = this.output = new Tone.Gain;
                    this._param = this.input[1] = this.output.gain;
                    this._param.value = this.defaultArg(value, 0);
                }, Tone.extend(Tone.Multiply, Tone.Signal), Tone.Multiply.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._mult.dispose(), this._mult = null, this._param = null, this;
                }, Tone.Multiply;
            }(i);
            tmpCkEl = function (Tone) {
                return Tone.Scale = function (outputMin, outputMax) {
                    this._outputMin = this.defaultArg(outputMin, 0);
                    this._outputMax = this.defaultArg(outputMax, 1);
                    this._scale = this.input = new Tone.Multiply(1);
                    this._add = this.output = new Tone.Add(0);
                    this._scale.connect(this._add);
                    this._setRange();
                }, Tone.extend(Tone.Scale, Tone.SignalBase), Object.defineProperty(Tone.Scale.prototype, "min", {
                    get: function () {
                        return this._outputMin;
                    },
                    set: function (value) {
                        /** @type {!Object} */
                        this._outputMin = value;
                        this._setRange();
                    }
                }), Object.defineProperty(Tone.Scale.prototype, "max", {
                    get: function () {
                        return this._outputMax;
                    },
                    set: function (value) {
                        /** @type {!Object} */
                        this._outputMax = value;
                        this._setRange();
                    }
                }), Tone.Scale.prototype._setRange = function () {
                    this._add.value = this._outputMin;
                    /** @type {number} */
                    this._scale.value = this._outputMax - this._outputMin;
                }, Tone.Scale.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this;
                }, Tone.Scale;
            }(i);
            (function () {
                var Signal = slater;
                var Add = firstIsCO;
                var Mult = ivib;
                var Scale = tmpCkEl;
                /**
                 * @param {?} value
                 * @return {?}
                 */
                Tone.Signal = function (value) {
                    var s = new Signal(value);
                    return s;
                };
                Signal.prototype.fade = Signal.prototype.linearRampToValueAtTime;
                Mult.prototype.fade = Signal.prototype.fade;
                Add.prototype.fade = Signal.prototype.fade;
                Scale.prototype.fade = Signal.prototype.fade;
                /**
                 * @param {number} _input
                 * @return {undefined}
                 */
                Signal.prototype.setInput = function (_input) {
                    _input.connect(this);
                };
                /** @type {function(number): undefined} */
                Mult.prototype.setInput = Signal.prototype.setInput;
                /** @type {function(number): undefined} */
                Add.prototype.setInput = Signal.prototype.setInput;
                /** @type {function(number): undefined} */
                Scale.prototype.setInput = Signal.prototype.setInput;
                /**
                 * @param {?} object
                 * @return {?}
                 */
                Signal.prototype.add = function (object) {
                    var v = new Add(object);
                    return this.connect(v), v;
                };
                /** @type {function(?): ?} */
                Mult.prototype.add = Signal.prototype.add;
                /** @type {function(?): ?} */
                Add.prototype.add = Signal.prototype.add;
                /** @type {function(?): ?} */
                Scale.prototype.add = Signal.prototype.add;
                /**
                 * @param {number} ch
                 * @return {?}
                 */
                Signal.prototype.mult = function (ch) {
                    var m = new Mult(ch);
                    return this.connect(m), m;
                };
                /** @type {function(number): ?} */
                Mult.prototype.mult = Signal.prototype.mult;
                /** @type {function(number): ?} */
                Add.prototype.mult = Signal.prototype.mult;
                /** @type {function(number): ?} */
                Scale.prototype.mult = Signal.prototype.mult;
                /**
                 * @param {?} callback
                 * @param {?} max
                 * @param {?} colors
                 * @param {?} data
                 * @return {?}
                 */
                Signal.prototype.scale = function (callback, max, colors, data) {
                    var options;
                    var toX;
                    if (4 === arguments.length) {
                        /** @type {number} */
                        options = Tone.prototype.map(colors, callback, max, 0, 1) - .5;
                        /** @type {number} */
                        toX = Tone.prototype.map(data, callback, max, 0, 1) - .5;
                    } else {
                        options = arguments[0];
                        toX = arguments[1];
                    }
                    var t = new Scale(options, toX);
                    return this.connect(t), t;
                };
                /** @type {function(?, ?, ?, ?): ?} */
                Mult.prototype.scale = Signal.prototype.scale;
                /** @type {function(?, ?, ?, ?): ?} */
                Add.prototype.scale = Signal.prototype.scale;
                /** @type {function(?, ?, ?, ?): ?} */
                Scale.prototype.scale = Signal.prototype.scale;
            })();
            (function () {
                var p5sound = master;
                var Add = firstIsCO;
                var Mult = ivib;
                var Scale = tmpCkEl;
                /**
                 * @param {string} freq
                 * @param {string} type
                 * @return {undefined}
                 */
                Tone.Oscillator = function (freq, type) {
                    if ("string" === typeof freq) {
                        /** @type {string} */
                        var f = type;
                        /** @type {string} */
                        type = freq;
                        freq = f;
                    }
                    if ("number" === typeof type) {
                        /** @type {string} */
                        f = type;
                        /** @type {string} */
                        type = freq;
                        /** @type {number} */
                        freq = f;
                    }
                    /** @type {boolean} */
                    this.started = false;
                    this.phaseAmount = void 0;
                    this.oscillator = p5sound.audiocontext.createOscillator();
                    this.f = freq || 440;
                    this.oscillator.type = type || "sine";
                    this.oscillator.frequency.setValueAtTime(this.f, p5sound.audiocontext.currentTime);
                    this.output = p5sound.audiocontext.createGain();
                    /** @type {!Array} */
                    this._freqMods = [];
                    /** @type {number} */
                    this.output.gain.value = .5;
                    this.output.gain.setValueAtTime(.5, p5sound.audiocontext.currentTime);
                    this.oscillator.connect(this.output);
                    /** @type {number} */
                    this.panPosition = 0;
                    this.connection = p5sound.input;
                    this.panner = new Tone.Panner(this.output, this.connection, 1);
                    /** @type {!Array} */
                    this.mathOps = [this.output];
                    p5sound.soundArray.push(this);
                };
                /**
                 * @param {number} time
                 * @param {number} f
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.start = function (time, f) {
                    if (this.started) {
                        var now = p5sound.audiocontext.currentTime;
                        this.stop(now);
                    }
                    if (!this.started) {
                        var freq = f || this.f;
                        var type = this.oscillator.type;
                        var i;
                        for (i in this.oscillator && (this.oscillator.disconnect(), delete this.oscillator), this.oscillator = p5sound.audiocontext.createOscillator(), this.oscillator.frequency.value = Math.abs(freq), this.oscillator.type = type, this.oscillator.connect(this.output), time = time || 0, this.oscillator.start(time + p5sound.audiocontext.currentTime), this.freqNode = this.oscillator.frequency, this._freqMods) {
                            if ("undefined" !== typeof this._freqMods[i].connect) {
                                this._freqMods[i].connect(this.oscillator.frequency);
                            }
                        }
                        /** @type {boolean} */
                        this.started = true;
                    }
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.stop = function (time) {
                    if (this.started) {
                        var t = time || 0;
                        var now = p5sound.audiocontext.currentTime;
                        this.oscillator.stop(t + now);
                        /** @type {boolean} */
                        this.started = false;
                    }
                };
                /**
                 * @param {!Object} value
                 * @param {number} t
                 * @param {number} e
                 * @return {?}
                 */
                Tone.Oscillator.prototype.amp = function (value, t, e) {
                    var sfile = this;
                    if ("number" === typeof value) {
                        t = t || 0;
                        e = e || 0;
                        var s = p5sound.audiocontext.currentTime;
                        this.output.gain.linearRampToValueAtTime(value, s + e + t);
                    } else {
                        if (!value) {
                            return this.output.gain;
                        }
                        value.connect(sfile.output.gain);
                    }
                };
                /** @type {function(!Object, number, number): ?} */
                Tone.Oscillator.prototype.fade = Tone.Oscillator.prototype.amp;
                /**
                 * @return {?}
                 */
                Tone.Oscillator.prototype.getAmp = function () {
                    return this.output.gain.value;
                };
                /**
                 * @param {number} val
                 * @param {number} delay
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Oscillator.prototype.freq = function (val, delay, time) {
                    if ("number" !== typeof val || isNaN(val)) {
                        if (!val) {
                            return this.oscillator.frequency;
                        }
                        if (val.output) {
                            val = val.output;
                        }
                        val.connect(this.oscillator.frequency);
                        this._freqMods.push(val);
                    } else {
                        /** @type {number} */
                        this.f = val;
                        var duration = p5sound.audiocontext.currentTime;
                        delay = delay || 0;
                        time = time || 0;
                        if (0 === delay) {
                            this.oscillator.frequency.setValueAtTime(val, time + duration);
                        } else {
                            if (val > 0) {
                                this.oscillator.frequency.exponentialRampToValueAtTime(val, time + delay + duration);
                            } else {
                                this.oscillator.frequency.linearRampToValueAtTime(val, time + delay + duration);
                            }
                        }
                        if (this.phaseAmount) {
                            this.phase(this.phaseAmount);
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.Oscillator.prototype.getFreq = function () {
                    return this.oscillator.frequency.value;
                };
                /**
                 * @param {number} type
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.setType = function (type) {
                    /** @type {number} */
                    this.oscillator.type = type;
                };
                /**
                 * @return {?}
                 */
                Tone.Oscillator.prototype.getType = function () {
                    return this.oscillator.type;
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.connect = function (unit) {
                    if (unit) {
                        if (unit.hasOwnProperty("input")) {
                            this.panner.connect(unit.input);
                            this.connection = unit.input;
                        } else {
                            this.panner.connect(unit);
                            /** @type {!Object} */
                            this.connection = unit;
                        }
                    } else {
                        this.panner.connect(p5sound.input);
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                    if (this.panner) {
                        this.panner.disconnect();
                        if (this.output) {
                            this.output.connect(this.panner);
                        }
                    }
                    /** @type {!Array} */
                    this.oscMods = [];
                };
                /**
                 * @param {number} pval
                 * @param {number} tFromNow
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.pan = function (pval, tFromNow) {
                    /** @type {number} */
                    this.panPosition = pval;
                    this.panner.pan(pval, tFromNow);
                };
                /**
                 * @return {?}
                 */
                Tone.Oscillator.prototype.getPan = function () {
                    return this.panPosition;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    if (p5sound.soundArray.splice(existingProxyIndex, 1), this.oscillator) {
                        var now = p5sound.audiocontext.currentTime;
                        this.stop(now);
                        this.disconnect();
                        /** @type {null} */
                        this.panner = null;
                        /** @type {null} */
                        this.oscillator = null;
                    }
                    if (this.osc2) {
                        this.osc2.dispose();
                    }
                };
                /**
                 * @param {number} p
                 * @return {undefined}
                 */
                Tone.Oscillator.prototype.phase = function (p) {
                    var note = Tone.prototype.map(p, 0, 1, 0, 1 / this.f);
                    var now = p5sound.audiocontext.currentTime;
                    /** @type {number} */
                    this.phaseAmount = p;
                    if (!this.dNode) {
                        this.dNode = p5sound.audiocontext.createDelay();
                        this.oscillator.disconnect();
                        this.oscillator.connect(this.dNode);
                        this.dNode.connect(this.output);
                    }
                    this.dNode.delayTime.setValueAtTime(note, now);
                };
                /**
                 * @param {!Object} o
                 * @param {!Object} mathObj
                 * @param {number} thisChain
                 * @param {?} nextChain
                 * @param {?} type
                 * @return {?}
                 */
                var sigChain = function (o, mathObj, thisChain, nextChain, type) {
                    var chainSource = o.oscillator;
                    var i;
                    for (i in o.mathOps) {
                        if (o.mathOps[i] instanceof type) {
                            chainSource.disconnect();
                            o.mathOps[i].dispose();
                            /** @type {string} */
                            thisChain = i;
                            if (thisChain < o.mathOps.length - 2) {
                                nextChain = o.mathOps[i + 1];
                            }
                        }
                    }
                    return thisChain === o.mathOps.length - 1 && o.mathOps.push(nextChain), i > 0 && (chainSource = o.mathOps[i - 1]), chainSource.disconnect(), chainSource.connect(mathObj), mathObj.connect(nextChain), o.mathOps[thisChain] = mathObj, o;
                };
                /**
                 * @param {?} num
                 * @return {?}
                 */
                Tone.Oscillator.prototype.add = function (num) {
                    var add = new Add(num);
                    /** @type {number} */
                    var thisChain = this.mathOps.length - 1;
                    var nextChain = this.output;
                    return sigChain(this, add, thisChain, nextChain, Add);
                };
                /**
                 * @param {number} num
                 * @return {?}
                 */
                Tone.Oscillator.prototype.mult = function (num) {
                    var mult = new Mult(num);
                    /** @type {number} */
                    var thisChain = this.mathOps.length - 1;
                    var nextChain = this.output;
                    return sigChain(this, mult, thisChain, nextChain, Mult);
                };
                /**
                 * @param {?} args
                 * @param {?} db
                 * @param {?} data
                 * @param {?} datapoints
                 * @return {?}
                 */
                Tone.Oscillator.prototype.scale = function (args, db, data, datapoints) {
                    var mapOutMin;
                    var mapOutMax;
                    if (4 === arguments.length) {
                        /** @type {number} */
                        mapOutMin = Tone.prototype.map(data, args, db, 0, 1) - .5;
                        /** @type {number} */
                        mapOutMax = Tone.prototype.map(datapoints, args, db, 0, 1) - .5;
                    } else {
                        mapOutMin = arguments[0];
                        mapOutMax = arguments[1];
                    }
                    var scale = new Scale(mapOutMin, mapOutMax);
                    /** @type {number} */
                    var thisChain = this.mathOps.length - 1;
                    var nextChain = this.output;
                    return sigChain(this, scale, thisChain, nextChain, Scale);
                };
                /**
                 * @param {?} freq
                 * @return {undefined}
                 */
                Tone.SinOsc = function (freq) {
                    Tone.Oscillator.call(this, freq, "sine");
                };
                /** @type {!Object} */
                Tone.SinOsc.prototype = Object.create(Tone.Oscillator.prototype);
                /**
                 * @param {?} freq
                 * @return {undefined}
                 */
                Tone.TriOsc = function (freq) {
                    Tone.Oscillator.call(this, freq, "triangle");
                };
                /** @type {!Object} */
                Tone.TriOsc.prototype = Object.create(Tone.Oscillator.prototype);
                /**
                 * @param {?} freq
                 * @return {undefined}
                 */
                Tone.SawOsc = function (freq) {
                    Tone.Oscillator.call(this, freq, "sawtooth");
                };
                /** @type {!Object} */
                Tone.SawOsc.prototype = Object.create(Tone.Oscillator.prototype);
                /**
                 * @param {?} freq
                 * @return {undefined}
                 */
                Tone.SqrOsc = function (freq) {
                    Tone.Oscillator.call(this, freq, "square");
                };
                /** @type {!Object} */
                Tone.SqrOsc.prototype = Object.create(Tone.Oscillator.prototype);
            })();
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.Timeline = function () {
                    var options = this.optionsObject(arguments, ["memory"], Tone.Timeline.defaults);
                    /** @type {!Array} */
                    this._timeline = [];
                    /** @type {!Array} */
                    this._toRemove = [];
                    /** @type {boolean} */
                    this._iterating = false;
                    this.memory = options.memory;
                };
                Tone.extend(Tone.Timeline);
                Tone.Timeline.defaults = {
                    memory: 1 / 0
                };
                Object.defineProperty(Tone.Timeline.prototype, "length", {
                    get: function () {
                        return this._timeline.length;
                    }
                });
                /**
                 * @param {!Object} event
                 * @return {?}
                 */
                Tone.Timeline.prototype.add = function (event) {
                    if (this.isUndef(event.time)) {
                        throw new Error("Tone.Timeline: events must have a time attribute");
                    }
                    if (this._timeline.length) {
                        var index = this._search(event.time);
                        this._timeline.splice(index + 1, 0, event);
                    } else {
                        this._timeline.push(event);
                    }
                    if (this.length > this.memory) {
                        /** @type {number} */
                        var diff = this.length - this.memory;
                        this._timeline.splice(0, diff);
                    }
                    return this;
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                Tone.Timeline.prototype.remove = function (index) {
                    if (this._iterating) {
                        this._toRemove.push(index);
                    } else {
                        var i = this._timeline.indexOf(index);
                        if (-1 !== i) {
                            this._timeline.splice(i, 1);
                        }
                    }
                    return this;
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Timeline.prototype.get = function (time) {
                    var lowerBound = this._search(time);
                    return -1 !== lowerBound ? this._timeline[lowerBound] : null;
                };
                /**
                 * @return {?}
                 */
                Tone.Timeline.prototype.peek = function () {
                    return this._timeline[0];
                };
                /**
                 * @return {?}
                 */
                Tone.Timeline.prototype.shift = function () {
                    return this._timeline.shift();
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Timeline.prototype.getAfter = function (time) {
                    var index = this._search(time);
                    return index + 1 < this._timeline.length ? this._timeline[index + 1] : null;
                };
                /**
                 * @param {undefined} time
                 * @return {?}
                 */
                Tone.Timeline.prototype.getBefore = function (time) {
                    var len = this._timeline.length;
                    if (len > 0 && this._timeline[len - 1].time < time) {
                        return this._timeline[len - 1];
                    }
                    var index = this._search(time);
                    return index - 1 >= 0 ? this._timeline[index - 1] : null;
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Timeline.prototype.cancel = function (time) {
                    if (this._timeline.length > 1) {
                        var index = this._search(time);
                        if (index >= 0) {
                            if (this._timeline[index].time === time) {
                                var i = index;
                                for (; i >= 0; i--) {
                                    if (this._timeline[i].time !== time) {
                                        break;
                                    }
                                    index = i;
                                }
                                this._timeline = this._timeline.slice(0, index);
                            } else {
                                this._timeline = this._timeline.slice(0, index + 1);
                            }
                        } else {
                            /** @type {!Array} */
                            this._timeline = [];
                        }
                    } else {
                        if (1 === this._timeline.length && this._timeline[0].time >= time) {
                            /** @type {!Array} */
                            this._timeline = [];
                        }
                    }
                    return this;
                };
                /**
                 * @param {undefined} time
                 * @return {?}
                 */
                Tone.Timeline.prototype.cancelBefore = function (time) {
                    if (this._timeline.length) {
                        var index = this._search(time);
                        if (index >= 0) {
                            this._timeline = this._timeline.slice(index + 1);
                        }
                    }
                    return this;
                };
                /**
                 * @param {number} time
                 * @return {?}
                 */
                Tone.Timeline.prototype._search = function (time) {
                    /** @type {number} */
                    var beginning = 0;
                    var len = this._timeline.length;
                    var end = len;
                    if (len > 0 && this._timeline[len - 1].time <= time) {
                        return len - 1;
                    }
                    for (; beginning < end;) {
                        /** @type {number} */
                        var midPoint = Math.floor(beginning + (end - beginning) / 2);
                        var event = this._timeline[midPoint];
                        var nextEvent = this._timeline[midPoint + 1];
                        if (event.time === time) {
                            /** @type {number} */
                            var i = midPoint;
                            for (; i < this._timeline.length; i++) {
                                var testEvent = this._timeline[i];
                                if (testEvent.time === time) {
                                    /** @type {number} */
                                    midPoint = i;
                                }
                            }
                            return midPoint;
                        }
                        if (event.time < time && nextEvent.time > time) {
                            return midPoint;
                        }
                        if (event.time > time) {
                            /** @type {number} */
                            end = midPoint;
                        } else {
                            if (event.time < time) {
                                /** @type {number} */
                                beginning = midPoint + 1;
                            }
                        }
                    }
                    return -1;
                };
                /**
                 * @param {!Function} callback
                 * @param {number} lowerBound
                 * @param {?} upperBound
                 * @return {undefined}
                 */
                Tone.Timeline.prototype._iterate = function (callback, lowerBound, upperBound) {
                    /** @type {boolean} */
                    this._iterating = true;
                    lowerBound = this.defaultArg(lowerBound, 0);
                    upperBound = this.defaultArg(upperBound, this._timeline.length - 1);
                    /** @type {number} */
                    var i = lowerBound;
                    for (; i <= upperBound; i++) {
                        callback(this._timeline[i]);
                    }
                    if (this._iterating = false, this._toRemove.length > 0) {
                        /** @type {number} */
                        var j = 0;
                        for (; j < this._toRemove.length; j++) {
                            var i = this._timeline.indexOf(this._toRemove[j]);
                            if (-1 !== i) {
                                this._timeline.splice(i, 1);
                            }
                        }
                        /** @type {!Array} */
                        this._toRemove = [];
                    }
                };
                /**
                 * @param {!Function} callback
                 * @return {?}
                 */
                Tone.Timeline.prototype.forEach = function (callback) {
                    return this._iterate(callback), this;
                };
                /**
                 * @param {undefined} time
                 * @param {!Function} callback
                 * @return {?}
                 */
                Tone.Timeline.prototype.forEachBefore = function (time, callback) {
                    var upperBound = this._search(time);
                    return -1 !== upperBound && this._iterate(callback, 0, upperBound), this;
                };
                /**
                 * @param {undefined} time
                 * @param {!Function} callback
                 * @return {?}
                 */
                Tone.Timeline.prototype.forEachAfter = function (time, callback) {
                    var lowerBound = this._search(time);
                    return this._iterate(callback, lowerBound + 1), this;
                };
                /**
                 * @param {undefined} time
                 * @param {!Function} callback
                 * @return {?}
                 */
                Tone.Timeline.prototype.forEachFrom = function (time, callback) {
                    var lowerBound = this._search(time);
                    for (; lowerBound >= 0 && this._timeline[lowerBound].time >= time;) {
                        lowerBound--;
                    }
                    return this._iterate(callback, lowerBound + 1), this;
                };
                /**
                 * @param {undefined} time
                 * @param {?} callback
                 * @return {?}
                 */
                Tone.Timeline.prototype.forEachAtTime = function (time, callback) {
                    var upperBound = this._search(time);
                    return -1 !== upperBound && this._iterate(function (move) {
                        if (move.time === time) {
                            callback(move);
                        }
                    }, 0, upperBound), this;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Timeline.prototype.dispose = function () {
                    Tone.prototype.dispose.call(this);
                    /** @type {null} */
                    this._timeline = null;
                    /** @type {null} */
                    this._toRemove = null;
                };
                Tone.Timeline;
            })(i);
            offset = function (Tone) {
                return Tone.TimelineSignal = function () {
                    var options = this.optionsObject(arguments, ["value", "units"], Tone.Signal.defaults);
                    this._events = new Tone.Timeline(10);
                    Tone.Signal.apply(this, options);
                    options.param = this._param;
                    Tone.Param.call(this, options);
                    this._initial = this._fromUnits(this._param.value);
                }, Tone.extend(Tone.TimelineSignal, Tone.Param), Tone.TimelineSignal.Type = {
                    Linear: "linear",
                    Exponential: "exponential",
                    Target: "target",
                    Curve: "curve",
                    Set: "set"
                }, Object.defineProperty(Tone.TimelineSignal.prototype, "value", {
                    get: function () {
                        var now = this.now();
                        var val = this.getValueAtTime(now);
                        return this._toUnits(val);
                    },
                    set: function (value) {
                        var convertedVal = this._fromUnits(value);
                        this._initial = convertedVal;
                        this.cancelScheduledValues();
                        this._param.value = convertedVal;
                    }
                }), Tone.TimelineSignal.prototype.setValueAtTime = function (value, time) {
                    return value = this._fromUnits(value), time = this.toSeconds(time), this._events.add({
                        type: Tone.TimelineSignal.Type.Set,
                        value: value,
                        time: time
                    }), this._param.setValueAtTime(value, time), this;
                }, Tone.TimelineSignal.prototype.linearRampToValueAtTime = function (value, time) {
                    return value = this._fromUnits(value), time = this.toSeconds(time), this._events.add({
                        type: Tone.TimelineSignal.Type.Linear,
                        value: value,
                        time: time
                    }), this._param.linearRampToValueAtTime(value, time), this;
                }, Tone.TimelineSignal.prototype.exponentialRampToValueAtTime = function (value, endTime) {
                    endTime = this.toSeconds(endTime);
                    var beforeEvent = this._searchBefore(endTime);
                    if (beforeEvent && 0 === beforeEvent.value) {
                        this.setValueAtTime(this._minOutput, beforeEvent.time);
                    }
                    value = this._fromUnits(value);
                    /** @type {number} */
                    var setValue = Math.max(value, this._minOutput);
                    return this._events.add({
                        type: Tone.TimelineSignal.Type.Exponential,
                        value: setValue,
                        time: endTime
                    }), value < this._minOutput ? (this._param.exponentialRampToValueAtTime(this._minOutput, endTime - this.sampleTime), this.setValueAtTime(0, endTime)) : this._param.exponentialRampToValueAtTime(value, endTime), this;
                }, Tone.TimelineSignal.prototype.setTargetAtTime = function (value, startTime, timeConstant) {
                    return value = this._fromUnits(value), value = Math.max(this._minOutput, value), timeConstant = Math.max(this._minOutput, timeConstant), startTime = this.toSeconds(startTime), this._events.add({
                        type: Tone.TimelineSignal.Type.Target,
                        value: value,
                        time: startTime,
                        constant: timeConstant
                    }), this._param.setTargetAtTime(value, startTime, timeConstant), this;
                }, Tone.TimelineSignal.prototype.setValueCurveAtTime = function (values, startTime, duration, scaling) {
                    scaling = this.defaultArg(scaling, 1);
                    /** @type {!Array} */
                    var floats = new Array(values.length);
                    /** @type {number} */
                    var i = 0;
                    for (; i < floats.length; i++) {
                        /** @type {number} */
                        floats[i] = this._fromUnits(values[i]) * scaling;
                    }
                    startTime = this.toSeconds(startTime);
                    duration = this.toSeconds(duration);
                    this._events.add({
                        type: Tone.TimelineSignal.Type.Curve,
                        value: floats,
                        time: startTime,
                        duration: duration
                    });
                    this._param.setValueAtTime(floats[0], startTime);
                    /** @type {number} */
                    var j = 1;
                    for (; j < floats.length; j++) {
                        var endTime = startTime + j / (floats.length - 1) * duration;
                        this._param.linearRampToValueAtTime(floats[j], endTime);
                    }
                    return this;
                }, Tone.TimelineSignal.prototype.cancelScheduledValues = function (time) {
                    return time = this.toSeconds(time), this._events.cancel(time), this._param.cancelScheduledValues(time), this;
                }, Tone.TimelineSignal.prototype.setRampPoint = function (time) {
                    time = this.toSeconds(time);
                    var val = this._toUnits(this.getValueAtTime(time));
                    var before = this._searchBefore(time);
                    if (before && before.time === time) {
                        this.cancelScheduledValues(time + this.sampleTime);
                    } else {
                        if (before && before.type === Tone.TimelineSignal.Type.Curve && before.time + before.duration > time) {
                            this.cancelScheduledValues(time);
                            this.linearRampToValueAtTime(val, time);
                        } else {
                            var after = this._searchAfter(time);
                            if (after) {
                                this.cancelScheduledValues(time);
                                if (after.type === Tone.TimelineSignal.Type.Linear) {
                                    this.linearRampToValueAtTime(val, time);
                                } else {
                                    if (after.type === Tone.TimelineSignal.Type.Exponential) {
                                        this.exponentialRampToValueAtTime(val, time);
                                    }
                                }
                            }
                            this.setValueAtTime(val, time);
                        }
                    }
                    return this;
                }, Tone.TimelineSignal.prototype.linearRampToValueBetween = function (value, start, time) {
                    return this.setRampPoint(start), this.linearRampToValueAtTime(value, time), this;
                }, Tone.TimelineSignal.prototype.exponentialRampToValueBetween = function (value, start, finish) {
                    return this.setRampPoint(start), this.exponentialRampToValueAtTime(value, finish), this;
                }, Tone.TimelineSignal.prototype._searchBefore = function (time) {
                    return this._events.get(time);
                }, Tone.TimelineSignal.prototype._searchAfter = function (time) {
                    return this._events.getAfter(time);
                }, Tone.TimelineSignal.prototype.getValueAtTime = function (time) {
                    time = this.toSeconds(time);
                    var after = this._searchAfter(time);
                    var before = this._searchBefore(time);
                    var value = this._initial;
                    if (null === before) {
                        value = this._initial;
                    } else {
                        if (before.type === Tone.TimelineSignal.Type.Target) {
                            var previouVal;
                            var level = this._events.getBefore(before.time);
                            previouVal = null === level ? this._initial : level.value;
                            value = this._exponentialApproach(before.time, previouVal, before.value, before.constant, time);
                        } else {
                            value = before.type === Tone.TimelineSignal.Type.Curve ? this._curveInterpolate(before.time, before.value, before.duration, time) : null === after ? before.value : after.type === Tone.TimelineSignal.Type.Linear ? this._linearInterpolate(before.time, before.value, after.time, after.value, time) : after.type === Tone.TimelineSignal.Type.Exponential ? this._exponentialInterpolate(before.time, before.value, after.time, after.value, time) : before.value;
                        }
                    }
                    return value;
                }, Tone.TimelineSignal.prototype.connect = Tone.SignalBase.prototype.connect, Tone.TimelineSignal.prototype._exponentialApproach = function (t0, v0, v1, timeConstant, t) {
                    return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
                }, Tone.TimelineSignal.prototype._linearInterpolate = function (t0, v0, t1, v1, t) {
                    return v0 + (t - t0) / (t1 - t0) * (v1 - v0);
                }, Tone.TimelineSignal.prototype._exponentialInterpolate = function (t0, v0, t1, v1, t) {
                    return v0 = Math.max(this._minOutput, v0), v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
                }, Tone.TimelineSignal.prototype._curveInterpolate = function (start, curve, duration, time) {
                    var len = curve.length;
                    if (time >= start + duration) {
                        return curve[len - 1];
                    }
                    if (time <= start) {
                        return curve[0];
                    }
                    /** @type {number} */
                    var progress = (time - start) / duration;
                    /** @type {number} */
                    var lowerIndex = Math.floor((len - 1) * progress);
                    /** @type {number} */
                    var upperIndex = Math.ceil((len - 1) * progress);
                    var lowerVal = curve[lowerIndex];
                    var upperVal = curve[upperIndex];
                    return upperIndex === lowerIndex ? lowerVal : this._linearInterpolate(lowerIndex, lowerVal, upperIndex, upperVal, progress * (len - 1));
                }, Tone.TimelineSignal.prototype.dispose = function () {
                    Tone.Signal.prototype.dispose.call(this);
                    Tone.Param.prototype.dispose.call(this);
                    this._events.dispose();
                    /** @type {null} */
                    this._events = null;
                }, Tone.TimelineSignal;
            }(i);
            (function () {
                var p5sound = master;
                var Add = firstIsCO;
                var Mult = ivib;
                var Scale = tmpCkEl;
                var endOfCentralDirOffset = offset;
                /**
                 * @param {number} container
                 * @param {number} bounds
                 * @param {number} context
                 * @param {number} l2
                 * @param {number} t3
                 * @param {number} l3
                 * @return {undefined}
                 */
                Tone.Envelope = function (container, bounds, context, l2, t3, l3) {
                    this.aTime = container || .1;
                    this.aLevel = bounds || 1;
                    this.dTime = context || .5;
                    this.dLevel = l2 || 0;
                    this.rTime = t3 || 0;
                    this.rLevel = l3 || 0;
                    /** @type {number} */
                    this._rampHighPercentage = .98;
                    /** @type {number} */
                    this._rampLowPercentage = .02;
                    this.output = p5sound.audiocontext.createGain();
                    this.control = new endOfCentralDirOffset;
                    this._init();
                    this.control.connect(this.output);
                    /** @type {null} */
                    this.connection = null;
                    /** @type {!Array} */
                    this.mathOps = [this.control];
                    /** @type {boolean} */
                    this.isExponential = false;
                    /** @type {null} */
                    this.sourceToClear = null;
                    /** @type {boolean} */
                    this.wasTriggered = false;
                    p5sound.soundArray.push(this);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Envelope.prototype._init = function () {
                    var currentTime = p5sound.audiocontext.currentTime;
                    var startTime = currentTime;
                    this.control.setTargetAtTime(1e-5, startTime, .001);
                    this._setRampAD(this.aTime, this.dTime);
                };
                /**
                 * @param {!Object} value
                 * @param {number} _
                 * @param {number} t2
                 * @param {number} l2
                 * @param {number} t3
                 * @param {number} l3
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.set = function (value, _, t2, l2, t3, l3) {
                    /** @type {!Object} */
                    this.aTime = value;
                    /** @type {number} */
                    this.aLevel = _;
                    this.dTime = t2 || 0;
                    this.dLevel = l2 || 0;
                    this.rTime = t3 || 0;
                    this.rLevel = l3 || 0;
                    this._setRampAD(value, t2);
                };
                /**
                 * @param {number} t
                 * @param {number} b
                 * @param {number} data
                 * @param {number} start
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.setADSR = function (t, b, data, start) {
                    /** @type {number} */
                    this.aTime = t;
                    this.dTime = b || 0;
                    this.sPercent = data || 0;
                    this.dLevel = "undefined" !== typeof data ? data * (this.aLevel - this.rLevel) + this.rLevel : 0;
                    this.rTime = start || 0;
                    this._setRampAD(t, b);
                };
                /**
                 * @param {number} aLevel
                 * @param {number} rLevel
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.setRange = function (aLevel, rLevel) {
                    this.aLevel = aLevel || 1;
                    this.rLevel = rLevel || 0;
                };
                /**
                 * @param {?} t1
                 * @param {number} t2
                 * @return {undefined}
                 */
                Tone.Envelope.prototype._setRampAD = function (t1, t2) {
                    this._rampAttackTime = this.checkExpInput(t1);
                    this._rampDecayTime = this.checkExpInput(t2);
                    /** @type {number} */
                    var TCDenominator = 1;
                    /** @type {number} */
                    TCDenominator = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage));
                    /** @type {number} */
                    this._rampAttackTC = t1 / this.checkExpInput(TCDenominator);
                    /** @type {number} */
                    TCDenominator = Math.log(1 / this._rampLowPercentage);
                    /** @type {number} */
                    this._rampDecayTC = t2 / this.checkExpInput(TCDenominator);
                };
                /**
                 * @param {undefined} p1
                 * @param {undefined} p2
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.setRampPercentages = function (p1, p2) {
                    this._rampHighPercentage = this.checkExpInput(p1);
                    this._rampLowPercentage = this.checkExpInput(p2);
                    /** @type {number} */
                    var TCDenominator = 1;
                    /** @type {number} */
                    TCDenominator = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage));
                    /** @type {number} */
                    this._rampAttackTC = this._rampAttackTime / this.checkExpInput(TCDenominator);
                    /** @type {number} */
                    TCDenominator = Math.log(1 / this._rampLowPercentage);
                    /** @type {number} */
                    this._rampDecayTC = this._rampDecayTime / this.checkExpInput(TCDenominator);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.setInput = function () {
                    /** @type {number} */
                    var i = 0;
                    for (; i < arguments.length; i++) {
                        this.connect(arguments[i]);
                    }
                };
                /**
                 * @param {!Function} isExp
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.setExp = function (isExp) {
                    /** @type {!Function} */
                    this.isExponential = isExp;
                };
                /**
                 * @param {number} value
                 * @return {?}
                 */
                Tone.Envelope.prototype.checkExpInput = function (value) {
                    return value <= 0 && (value = 1e-8), value;
                };
                /**
                 * @param {!Object} unit
                 * @param {number} secondsFromNow
                 * @param {number} susTime
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.play = function (unit, secondsFromNow, susTime) {
                    var tFromNow = secondsFromNow || 0;
                    susTime = susTime || 0;
                    if (unit && this.connection !== unit) {
                        this.connect(unit);
                    }
                    this.triggerAttack(unit, tFromNow);
                    this.triggerRelease(unit, tFromNow + this.aTime + this.dTime + susTime);
                };
                /**
                 * @param {!Object} name
                 * @param {number} input
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.triggerAttack = function (name, input) {
                    var time = p5sound.audiocontext.currentTime;
                    var s = input || 0;
                    var t = time + s;
                    this.lastAttack = t;
                    /** @type {boolean} */
                    this.wasTriggered = true;
                    if (name && this.connection !== name) {
                        this.connect(name);
                    }
                    var valToSet = this.control.getValueAtTime(t);
                    if (true === this.isExponential) {
                        this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
                    } else {
                        this.control.linearRampToValueAtTime(valToSet, t);
                    }
                    t = t + this.aTime;
                    if (true === this.isExponential) {
                        this.control.exponentialRampToValueAtTime(this.checkExpInput(this.aLevel), t);
                        valToSet = this.checkExpInput(this.control.getValueAtTime(t));
                        this.control.cancelScheduledValues(t);
                        this.control.exponentialRampToValueAtTime(valToSet, t);
                    } else {
                        this.control.linearRampToValueAtTime(this.aLevel, t);
                        valToSet = this.control.getValueAtTime(t);
                        this.control.cancelScheduledValues(t);
                        this.control.linearRampToValueAtTime(valToSet, t);
                    }
                    t = t + this.dTime;
                    if (true === this.isExponential) {
                        this.control.exponentialRampToValueAtTime(this.checkExpInput(this.dLevel), t);
                        valToSet = this.checkExpInput(this.control.getValueAtTime(t));
                        this.control.cancelScheduledValues(t);
                        this.control.exponentialRampToValueAtTime(valToSet, t);
                    } else {
                        this.control.linearRampToValueAtTime(this.dLevel, t);
                        valToSet = this.control.getValueAtTime(t);
                        this.control.cancelScheduledValues(t);
                        this.control.linearRampToValueAtTime(valToSet, t);
                    }
                };
                /**
                 * @param {!Object} unit
                 * @param {number} size
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.triggerRelease = function (unit, size) {
                    if (this.wasTriggered) {
                        var time = p5sound.audiocontext.currentTime;
                        var s = size || 0;
                        var t = time + s;
                        if (unit && this.connection !== unit) {
                            this.connect(unit);
                        }
                        var valToSet = this.control.getValueAtTime(t);
                        if (true === this.isExponential) {
                            this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
                        } else {
                            this.control.linearRampToValueAtTime(valToSet, t);
                        }
                        t = t + this.rTime;
                        if (true === this.isExponential) {
                            this.control.exponentialRampToValueAtTime(this.checkExpInput(this.rLevel), t);
                            valToSet = this.checkExpInput(this.control.getValueAtTime(t));
                            this.control.cancelScheduledValues(t);
                            this.control.exponentialRampToValueAtTime(valToSet, t);
                        } else {
                            this.control.linearRampToValueAtTime(this.rLevel, t);
                            valToSet = this.control.getValueAtTime(t);
                            this.control.cancelScheduledValues(t);
                            this.control.linearRampToValueAtTime(valToSet, t);
                        }
                        /** @type {boolean} */
                        this.wasTriggered = false;
                    }
                };
                /**
                 * @param {!Object} unit
                 * @param {string} range
                 * @param {number} v1
                 * @param {undefined} v2
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.ramp = function (unit, range, v1, v2) {
                    var p3 = p5sound.audiocontext.currentTime;
                    var p4 = range || 0;
                    var t = p3 + p4;
                    var destination1 = this.checkExpInput(v1);
                    var value = "undefined" !== typeof v2 ? this.checkExpInput(v2) : void 0;
                    if (unit && this.connection !== unit) {
                        this.connect(unit);
                    }
                    var currentVal = this.checkExpInput(this.control.getValueAtTime(t));
                    if (destination1 > currentVal) {
                        this.control.setTargetAtTime(destination1, t, this._rampAttackTC);
                        t = t + this._rampAttackTime;
                    } else {
                        if (destination1 < currentVal) {
                            this.control.setTargetAtTime(destination1, t, this._rampDecayTC);
                            t = t + this._rampDecayTime;
                        }
                    }
                    if (void 0 !== value) {
                        if (value > destination1) {
                            this.control.setTargetAtTime(value, t, this._rampAttackTC);
                        } else {
                            if (value < destination1) {
                                this.control.setTargetAtTime(value, t, this._rampDecayTC);
                            }
                        }
                    }
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.connect = function (unit) {
                    /** @type {!Object} */
                    this.connection = unit;
                    if (unit instanceof Tone.Oscillator || unit instanceof Tone.SoundFile || unit instanceof Tone.AudioIn || unit instanceof Tone.Reverb || unit instanceof Tone.Noise || unit instanceof Tone.Filter || unit instanceof Tone.Delay) {
                        unit = unit.output.gain;
                    }
                    if (unit instanceof AudioParam) {
                        unit.setValueAtTime(0, p5sound.audiocontext.currentTime);
                    }
                    if (unit instanceof Tone.Signal) {
                        unit.setValue(0);
                    }
                    this.output.connect(unit);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                };
                /**
                 * @param {?} num
                 * @return {?}
                 */
                Tone.Envelope.prototype.add = function (num) {
                    var add = new Add(num);
                    var thisChain = this.mathOps.length;
                    var nextChain = this.output;
                    return Tone.prototype._mathChain(this, add, thisChain, nextChain, Add);
                };
                /**
                 * @param {number} num
                 * @return {?}
                 */
                Tone.Envelope.prototype.mult = function (num) {
                    var mult = new Mult(num);
                    var thisChain = this.mathOps.length;
                    var nextChain = this.output;
                    return Tone.prototype._mathChain(this, mult, thisChain, nextChain, Mult);
                };
                /**
                 * @param {?} inMin
                 * @param {!Element} inMax
                 * @param {?} outMin
                 * @param {?} outMax
                 * @return {?}
                 */
                Tone.Envelope.prototype.scale = function (inMin, inMax, outMin, outMax) {
                    var scale = new Scale(inMin, inMax, outMin, outMax);
                    var thisChain = this.mathOps.length;
                    var nextChain = this.output;
                    return Tone.prototype._mathChain(this, scale, thisChain, nextChain, Scale);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Envelope.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    this.disconnect();
                    if (this.control) {
                        this.control.dispose();
                        /** @type {null} */
                        this.control = null;
                    }
                    /** @type {number} */
                    var i = 1;
                    for (; i < this.mathOps.length; i++) {
                        this.mathOps[i].dispose();
                    }
                };
                /**
                 * @param {?} sustainTime
                 * @param {?} releaseTime
                 * @param {?} subjectIdentifier
                 * @param {?} bodyIdentifier
                 * @param {?} cb
                 * @param {?} options
                 * @return {undefined}
                 */
                Tone.Env = function (sustainTime, releaseTime, subjectIdentifier, bodyIdentifier, cb, options) {
                    console.warn("WARNING: p5.Env is now deprecated and may be removed in future versions. Please use the new p5.Envelope instead.");
                    Tone.Envelope.call(this, sustainTime, releaseTime, subjectIdentifier, bodyIdentifier, cb, options);
                };
                /** @type {!Object} */
                Tone.Env.prototype = Object.create(Tone.Envelope.prototype);
            })();
            (function () {
                /**
                 * @return {?}
                 */
                function createDCOffset() {
                    var ac = p5sound.audiocontext;
                    var audioBuffer = ac.createBuffer(1, 2048, ac.sampleRate);
                    var n = audioBuffer.getChannelData(0);
                    /** @type {number} */
                    var themeprop = 0;
                    for (; themeprop < 2048; themeprop++) {
                        /** @type {number} */
                        n[themeprop] = 1;
                    }
                    var bufferNode = ac.createBufferSource();
                    return bufferNode.buffer = audioBuffer, bufferNode.loop = true, bufferNode;
                }

                var p5sound = master;
                /**
                 * @param {number} freq
                 * @param {number} w
                 * @return {undefined}
                 */
                Tone.Pulse = function (freq, w) {
                    Tone.Oscillator.call(this, freq, "sawtooth");
                    this.w = w || 0;
                    this.osc2 = new Tone.SawOsc(freq);
                    this.dNode = p5sound.audiocontext.createDelay();
                    this.dcOffset = createDCOffset();
                    this.dcGain = p5sound.audiocontext.createGain();
                    this.dcOffset.connect(this.dcGain);
                    this.dcGain.connect(this.output);
                    this.f = freq || 440;
                    /** @type {number} */
                    var mW = this.w / this.oscillator.frequency.value;
                    /** @type {number} */
                    this.dNode.delayTime.value = mW;
                    /** @type {number} */
                    this.dcGain.gain.value = 1.7 * (.5 - this.w);
                    this.osc2.disconnect();
                    this.osc2.panner.disconnect();
                    this.osc2.amp(-1);
                    this.osc2.output.connect(this.dNode);
                    this.dNode.connect(this.output);
                    /** @type {number} */
                    this.output.gain.value = 1;
                    this.output.connect(this.panner);
                };
                /** @type {!Object} */
                Tone.Pulse.prototype = Object.create(Tone.Oscillator.prototype);
                /**
                 * @param {number} value
                 * @return {undefined}
                 */
                Tone.Pulse.prototype.width = function (value) {
                    if ("number" === typeof value) {
                        if (value <= 1 && value >= 0) {
                            /** @type {number} */
                            this.w = value;
                            /** @type {number} */
                            var mW = this.w / this.oscillator.frequency.value;
                            /** @type {number} */
                            this.dNode.delayTime.value = mW;
                        }
                        /** @type {number} */
                        this.dcGain.gain.value = 1.7 * (.5 - this.w);
                    } else {
                        value.connect(this.dNode.delayTime);
                        var sig = new Tone.SignalAdd(-.5);
                        sig.setInput(value);
                        sig = sig.mult(-1);
                        sig = sig.mult(1.7);
                        sig.connect(this.dcGain.gain);
                    }
                };
                /**
                 * @param {number} source
                 * @param {number} start
                 * @return {undefined}
                 */
                Tone.Pulse.prototype.start = function (source, start) {
                    var now = p5sound.audiocontext.currentTime;
                    var t = start || 0;
                    if (!this.started) {
                        var freq = source || this.f;
                        var type = this.oscillator.type;
                        this.oscillator = p5sound.audiocontext.createOscillator();
                        this.oscillator.frequency.setValueAtTime(freq, now);
                        this.oscillator.type = type;
                        this.oscillator.connect(this.output);
                        this.oscillator.start(t + now);
                        this.osc2.oscillator = p5sound.audiocontext.createOscillator();
                        this.osc2.oscillator.frequency.setValueAtTime(freq, t + now);
                        this.osc2.oscillator.type = type;
                        this.osc2.oscillator.connect(this.osc2.output);
                        this.osc2.start(t + now);
                        /** @type {!Array} */
                        this.freqNode = [this.oscillator.frequency, this.osc2.oscillator.frequency];
                        this.dcOffset = createDCOffset();
                        this.dcOffset.connect(this.dcGain);
                        this.dcOffset.start(t + now);
                        if (void 0 !== this.mods && void 0 !== this.mods.frequency) {
                            this.mods.frequency.connect(this.freqNode[0]);
                            this.mods.frequency.connect(this.freqNode[1]);
                        }
                        /** @type {boolean} */
                        this.started = true;
                        /** @type {boolean} */
                        this.osc2.started = true;
                    }
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Pulse.prototype.stop = function (time) {
                    if (this.started) {
                        var t = time || 0;
                        var now = p5sound.audiocontext.currentTime;
                        this.oscillator.stop(t + now);
                        if (this.osc2.oscillator) {
                            this.osc2.oscillator.stop(t + now);
                        }
                        this.dcOffset.stop(t + now);
                        /** @type {boolean} */
                        this.started = false;
                        /** @type {boolean} */
                        this.osc2.started = false;
                    }
                };
                /**
                 * @param {number} val
                 * @param {number} duration
                 * @param {number} delay
                 * @return {undefined}
                 */
                Tone.Pulse.prototype.freq = function (val, duration, delay) {
                    if ("number" === typeof val) {
                        /** @type {number} */
                        this.f = val;
                        var now = p5sound.audiocontext.currentTime;
                        var value = (duration = duration || 0, delay = delay || 0, this.oscillator.frequency.value);
                        this.oscillator.frequency.cancelScheduledValues(now);
                        this.oscillator.frequency.setValueAtTime(value, now + delay);
                        this.oscillator.frequency.exponentialRampToValueAtTime(val, delay + duration + now);
                        this.osc2.oscillator.frequency.cancelScheduledValues(now);
                        this.osc2.oscillator.frequency.setValueAtTime(value, now + delay);
                        this.osc2.oscillator.frequency.exponentialRampToValueAtTime(val, delay + duration + now);
                        if (this.freqMod) {
                            this.freqMod.output.disconnect();
                            /** @type {null} */
                            this.freqMod = null;
                        }
                    } else {
                        if (val.output) {
                            val.output.disconnect();
                            val.output.connect(this.oscillator.frequency);
                            val.output.connect(this.osc2.oscillator.frequency);
                            /** @type {number} */
                            this.freqMod = val;
                        }
                    }
                };
            })();
            (function () {
                var p5sound = master;
                /**
                 * @param {string} type
                 * @return {undefined}
                 */
                Tone.Noise = function (type) {
                    var text;
                    Tone.Oscillator.call(this);
                    delete this.f;
                    delete this.freq;
                    delete this.oscillator;
                    text = "brown" === type ? value : "pink" === type ? INSERT : REPLACE;
                    this.buffer = text;
                };
                /** @type {!Object} */
                Tone.Noise.prototype = Object.create(Tone.Oscillator.prototype);
                var REPLACE = function () {
                    /** @type {number} */
                    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
                    var whiteBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
                    var conf_shortcuts_icon = whiteBuffer.getChannelData(0);
                    /** @type {number} */
                    var i = 0;
                    for (; i < bufferSize; i++) {
                        /** @type {number} */
                        conf_shortcuts_icon[i] = 2 * Math.random() - 1;
                    }
                    return whiteBuffer.type = "white", whiteBuffer;
                }();
                var INSERT = function () {
                    var t;
                    var u;
                    var v;
                    var c;
                    var d;
                    var e;
                    var h;
                    /** @type {number} */
                    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
                    var pinkBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
                    var nonDuplicateIds = pinkBuffer.getChannelData(0);
                    /** @type {number} */
                    t = u = v = c = d = e = h = 0;
                    /** @type {number} */
                    var j = 0;
                    for (; j < bufferSize; j++) {
                        /** @type {number} */
                        var s = 2 * Math.random() - 1;
                        /** @type {number} */
                        t = .99886 * t + .0555179 * s;
                        /** @type {number} */
                        u = .99332 * u + .0750759 * s;
                        /** @type {number} */
                        v = .969 * v + .153852 * s;
                        /** @type {number} */
                        c = .8665 * c + .3104856 * s;
                        /** @type {number} */
                        d = .55 * d + .5329522 * s;
                        /** @type {number} */
                        e = -.7616 * e - .016898 * s;
                        /** @type {number} */
                        nonDuplicateIds[j] = t + u + v + c + d + e + h + .5362 * s;
                        nonDuplicateIds[j] *= .11;
                        /** @type {number} */
                        h = .115926 * s;
                    }
                    return pinkBuffer.type = "pink", pinkBuffer;
                }();
                var value = function () {
                    /** @type {number} */
                    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
                    var brownBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
                    var nonDuplicateIds = brownBuffer.getChannelData(0);
                    /** @type {number} */
                    var id = 0;
                    /** @type {number} */
                    var j = 0;
                    for (; j < bufferSize; j++) {
                        /** @type {number} */
                        var curZoom = 2 * Math.random() - 1;
                        /** @type {number} */
                        nonDuplicateIds[j] = (id + .02 * curZoom) / 1.02;
                        id = nonDuplicateIds[j];
                        nonDuplicateIds[j] *= 3.5;
                    }
                    return brownBuffer.type = "brown", brownBuffer;
                }();
                /**
                 * @param {number} type
                 * @return {undefined}
                 */
                Tone.Noise.prototype.setType = function (type) {
                    switch (type) {
                        case "white":
                            this.buffer = REPLACE;
                            break;
                        case "pink":
                            this.buffer = INSERT;
                            break;
                        case "brown":
                            this.buffer = value;
                            break;
                        default:
                            this.buffer = REPLACE;
                    }
                    if (this.started) {
                        var now = p5sound.audiocontext.currentTime;
                        this.stop(now);
                        this.start(now + .01);
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.Noise.prototype.getType = function () {
                    return this.buffer.type;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Noise.prototype.start = function () {
                    if (this.started) {
                        this.stop();
                    }
                    this.noise = p5sound.audiocontext.createBufferSource();
                    this.noise.buffer = this.buffer;
                    /** @type {boolean} */
                    this.noise.loop = true;
                    this.noise.connect(this.output);
                    var now = p5sound.audiocontext.currentTime;
                    this.noise.start(now);
                    /** @type {boolean} */
                    this.started = true;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Noise.prototype.stop = function () {
                    var now = p5sound.audiocontext.currentTime;
                    if (this.noise) {
                        this.noise.stop(now);
                        /** @type {boolean} */
                        this.started = false;
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Noise.prototype.dispose = function () {
                    var now = p5sound.audiocontext.currentTime;
                    var i = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(i, 1);
                    if (this.noise) {
                        this.noise.disconnect();
                        this.stop(now);
                    }
                    if (this.output) {
                        this.output.disconnect();
                    }
                    if (this.panner) {
                        this.panner.disconnect();
                    }
                    /** @type {null} */
                    this.output = null;
                    /** @type {null} */
                    this.panner = null;
                    /** @type {null} */
                    this.buffer = null;
                    /** @type {null} */
                    this.noise = null;
                };
            })();
            (function () {
                var p5sound = master;
                /** @type {!Array} */
                p5sound.inputSources = [];
                /**
                 * @param {?} errorCallback
                 * @return {undefined}
                 */
                Tone.AudioIn = function (errorCallback) {
                    this.input = p5sound.audiocontext.createGain();
                    this.output = p5sound.audiocontext.createGain();
                    /** @type {null} */
                    this.stream = null;
                    /** @type {null} */
                    this.mediaStream = null;
                    /** @type {null} */
                    this.currentSource = null;
                    /** @type {boolean} */
                    this.enabled = false;
                    this.amplitude = new Tone.Amplitude;
                    this.output.connect(this.amplitude.input);
                    if (!(window.MediaStreamTrack && window.navigator.mediaDevices && window.navigator.mediaDevices.getUserMedia)) {
                        if (errorCallback) {
                            errorCallback();
                        } else {
                            window.alert("This browser does not support MediaStreamTrack and mediaDevices");
                        }
                    }
                    p5sound.soundArray.push(this);
                };
                /**
                 * @param {number} time
                 * @param {number} status
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.start = function (time, status) {
                    var self = this;
                    if (this.stream) {
                        this.stop();
                    }
                    var authInfo = p5sound.inputSources[self.currentSource];
                    var constraints = {
                        audio: {
                            sampleRate: p5sound.audiocontext.sampleRate,
                            echoCancellation: false
                        }
                    };
                    if (p5sound.inputSources[this.currentSource]) {
                        constraints.audio.deviceId = authInfo.deviceId;
                    }
                    window.navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                        /** @type {!MediaStream} */
                        self.stream = stream;
                        /** @type {boolean} */
                        self.enabled = true;
                        self.mediaStream = p5sound.audiocontext.createMediaStreamSource(stream);
                        self.mediaStream.connect(self.output);
                        self.amplitude.setInput(self.output);
                        if (time) {
                            time();
                        }
                    }).catch(function (desc) {
                        if (status) {
                            status(desc);
                        } else {
                            console.error(desc);
                        }
                    });
                };
                /**
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.stop = function () {
                    if (this.stream) {
                        this.stream.getTracks().forEach(function (incoming_item) {
                            incoming_item.stop();
                        });
                        this.mediaStream.disconnect();
                        delete this.mediaStream;
                        delete this.stream;
                    }
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.connect = function (unit) {
                    if (unit) {
                        if (unit.hasOwnProperty("input")) {
                            this.output.connect(unit.input);
                        } else {
                            if (unit.hasOwnProperty("analyser")) {
                                this.output.connect(unit.analyser);
                            } else {
                                this.output.connect(unit);
                            }
                        }
                    } else {
                        this.output.connect(p5sound.input);
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                        this.output.connect(this.amplitude.input);
                    }
                };
                /**
                 * @param {number} smoothing
                 * @return {?}
                 */
                Tone.AudioIn.prototype.getLevel = function (smoothing) {
                    return smoothing && (this.amplitude.smoothing = smoothing), this.amplitude.getLevel();
                };
                /**
                 * @param {?} value
                 * @param {number} t
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.amp = function (value, t) {
                    if (t) {
                        var rampTime = t || 0;
                        var startValue = this.output.gain.value;
                        this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
                        this.output.gain.setValueAtTime(startValue, p5sound.audiocontext.currentTime);
                        this.output.gain.linearRampToValueAtTime(value, rampTime + p5sound.audiocontext.currentTime);
                    } else {
                        this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
                        this.output.gain.setValueAtTime(value, p5sound.audiocontext.currentTime);
                    }
                };
                /**
                 * @param {?} callback
                 * @param {?} query
                 * @return {?}
                 */
                Tone.AudioIn.prototype.getSources = function (callback, query) {
                    return new Promise(function (saveNotifs, filter) {
                        window.navigator.mediaDevices.enumerateDevices().then(function (swimlanes) {
                            /** @type {!Array<MediaDeviceInfo>} */
                            p5sound.inputSources = swimlanes.filter(function (mobValue) {
                                return "audioinput" === mobValue.kind;
                            });
                            saveNotifs(p5sound.inputSources);
                            if (callback) {
                                callback(p5sound.inputSources);
                            }
                        }).catch(function (params) {
                            filter(params);
                            if (query) {
                                query(params);
                            } else {
                                console.error("This browser does not support MediaStreamTrack.getSources()");
                            }
                        });
                    });
                };
                /**
                 * @param {number} o
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.setSource = function (o) {
                    if (p5sound.inputSources.length > 0 && o < p5sound.inputSources.length) {
                        /** @type {number} */
                        this.currentSource = o;
                        console.log("set source to ", p5sound.inputSources[this.currentSource]);
                    } else {
                        console.log("unable to set input source");
                    }
                    if (this.stream && this.stream.active) {
                        this.start();
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.AudioIn.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    this.stop();
                    if (this.output) {
                        this.output.disconnect();
                    }
                    if (this.amplitude) {
                        this.amplitude.disconnect();
                    }
                    delete this.amplitude;
                    delete this.output;
                };
            })();
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.Negate = function () {
                    this._multiply = this.input = this.output = new Tone.Multiply(-1);
                };
                Tone.extend(Tone.Negate, Tone.SignalBase);
                /**
                 * @return {?}
                 */
                Tone.Negate.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._multiply.dispose(), this._multiply = null, this;
                };
                Tone.Negate;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                Tone.Subtract = function (value) {
                    this.createInsOuts(2, 0);
                    this._sum = this.input[0] = this.output = new Tone.Gain;
                    this._neg = new Tone.Negate;
                    this._param = this.input[1] = new Tone.Signal(value);
                    this._param.chain(this._neg, this._sum);
                };
                Tone.extend(Tone.Subtract, Tone.Signal);
                /**
                 * @return {?}
                 */
                Tone.Subtract.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._sum.disconnect(), this._sum = null, this._param.dispose(), this._param = null, this;
                };
                Tone.Subtract;
            })(i);
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.GreaterThanZero = function () {
                    this._thresh = this.output = new Tone.WaveShaper(function (canCreateDiscussions) {
                        return canCreateDiscussions <= 0 ? 0 : 1;
                    }, 127);
                    this._scale = this.input = new Tone.Multiply(1e4);
                    this._scale.connect(this._thresh);
                };
                Tone.extend(Tone.GreaterThanZero, Tone.SignalBase);
                /**
                 * @return {?}
                 */
                Tone.GreaterThanZero.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this;
                };
                Tone.GreaterThanZero;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                Tone.GreaterThan = function (value) {
                    this.createInsOuts(2, 0);
                    this._param = this.input[0] = new Tone.Subtract(value);
                    this.input[1] = this._param.input[1];
                    this._gtz = this.output = new Tone.GreaterThanZero;
                    this._param.connect(this._gtz);
                };
                Tone.extend(Tone.GreaterThan, Tone.Signal);
                /**
                 * @return {?}
                 */
                Tone.GreaterThan.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._param.dispose(), this._param = null, this._gtz.dispose(), this._gtz = null, this;
                };
                Tone.GreaterThan;
            })(i);
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.Abs = function () {
                    this._abs = this.input = this.output = new Tone.WaveShaper(function (mercatorX) {
                        return 0 === mercatorX ? 0 : Math.abs(mercatorX);
                    }, 127);
                };
                Tone.extend(Tone.Abs, Tone.SignalBase);
                /**
                 * @return {?}
                 */
                Tone.Abs.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._abs.dispose(), this._abs = null, this;
                };
                Tone.Abs;
            })(i);
            (function (Tone) {
                /**
                 * @param {!Object} modulus
                 * @return {undefined}
                 */
                Tone.Modulo = function (modulus) {
                    this.createInsOuts(1, 0);
                    this._shaper = new Tone.WaveShaper(Math.pow(2, 16));
                    this._multiply = new Tone.Multiply;
                    this._subtract = this.output = new Tone.Subtract;
                    this._modSignal = new Tone.Signal(modulus);
                    this.input.fan(this._shaper, this._subtract);
                    this._modSignal.connect(this._multiply, 0, 0);
                    this._shaper.connect(this._multiply, 0, 1);
                    this._multiply.connect(this._subtract, 0, 1);
                    this._setWaveShaper(modulus);
                };
                Tone.extend(Tone.Modulo, Tone.SignalBase);
                /**
                 * @param {!Object} s
                 * @return {undefined}
                 */
                Tone.Modulo.prototype._setWaveShaper = function (s) {
                    this._shaper.setMap(function (m7) {
                        /** @type {number} */
                        var multiple = Math.floor((m7 + 1e-4) / s);
                        return multiple;
                    });
                };
                Object.defineProperty(Tone.Modulo.prototype, "value", {
                    get: function () {
                        return this._modSignal.value;
                    },
                    set: function (obj) {
                        /** @type {!Object} */
                        this._modSignal.value = obj;
                        this._setWaveShaper(obj);
                    }
                });
                /**
                 * @return {?}
                 */
                Tone.Modulo.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this._multiply.dispose(), this._multiply = null, this._subtract.dispose(), this._subtract = null, this._modSignal.dispose(), this._modSignal = null, this;
                };
                Tone.Modulo;
            })(i);
            (function (Tone) {
                /**
                 * @param {!Object} exp
                 * @return {undefined}
                 */
                Tone.Pow = function (exp) {
                    this._exp = this.defaultArg(exp, 1);
                    this._expScaler = this.input = this.output = new Tone.WaveShaper(this._expFunc(this._exp), 8192);
                };
                Tone.extend(Tone.Pow, Tone.SignalBase);
                Object.defineProperty(Tone.Pow.prototype, "value", {
                    get: function () {
                        return this._exp;
                    },
                    set: function (value) {
                        /** @type {!Object} */
                        this._exp = value;
                        this._expScaler.setMap(this._expFunc(this._exp));
                    }
                });
                /**
                 * @param {?} exp
                 * @return {?}
                 */
                Tone.Pow.prototype._expFunc = function (exp) {
                    return function (phi1) {
                        return Math.pow(Math.abs(phi1), exp);
                    };
                };
                /**
                 * @return {?}
                 */
                Tone.Pow.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._expScaler.dispose(), this._expScaler = null, this;
                };
                Tone.Pow;
            })(i);
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.AudioToGain = function () {
                    this._norm = this.input = this.output = new Tone.WaveShaper(function (canCreateDiscussions) {
                        return (canCreateDiscussions + 1) / 2;
                    });
                };
                Tone.extend(Tone.AudioToGain, Tone.SignalBase);
                /**
                 * @return {?}
                 */
                Tone.AudioToGain.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this;
                };
                Tone.AudioToGain;
            })(i);
            (function (Tone) {
                /**
                 * @param {?} Constructor
                 * @param {!Object} args
                 * @param {?} self
                 * @return {?}
                 */
                function applyBinary(Constructor, args, self) {
                    var op = new Constructor;
                    return self._eval(args[0]).connect(op, 0, 0), self._eval(args[1]).connect(op, 0, 1), op;
                }

                /**
                 * @param {?} Constructor
                 * @param {!Object} args
                 * @param {?} self
                 * @return {?}
                 */
                function applyUnary(Constructor, args, self) {
                    var node = new Constructor;
                    return self._eval(args[0]).connect(node, 0, 0), node;
                }

                /**
                 * @param {string} value
                 * @return {?}
                 */
                function getNumber(value) {
                    return value ? parseFloat(value) : void 0;
                }

                /**
                 * @param {!Object} arg
                 * @return {?}
                 */
                function literalNumber(arg) {
                    return arg && arg.args ? parseFloat(arg.args) : void 0;
                }

                /**
                 * @return {undefined}
                 */
                Tone.Expr = function () {
                    var expr = this._replacements(Array.prototype.slice.call(arguments));
                    var inputCount = this._parseInputs(expr);
                    /** @type {!Array} */
                    this._nodes = [];
                    /** @type {!Array} */
                    this.input = new Array(inputCount);
                    /** @type {number} */
                    var i = 0;
                    for (; i < inputCount; i++) {
                        this.input[i] = this.context.createGain();
                    }
                    var result;
                    var tree = this._parseTree(expr);
                    try {
                        result = this._eval(tree);
                    } catch (r) {
                        throw this._disposeNodes(), new Error("Tone.Expr: Could evaluate expression: " + expr);
                    }
                    this.output = result;
                };
                Tone.extend(Tone.Expr, Tone.SignalBase);
                Tone.Expr._Expressions = {
                    value: {
                        signal: {
                            regexp: /^\d+\.\d+|^\d+/,
                            method: function (arg) {
                                var REQUEST_STREAM = new Tone.Signal(getNumber(arg));
                                return REQUEST_STREAM;
                            }
                        },
                        input: {
                            regexp: /^\$\d/,
                            method: function (e, self) {
                                return self.input[getNumber(e.substr(1))];
                            }
                        }
                    },
                    glue: {
                        "(": {
                            regexp: /^\(/
                        },
                        ")": {
                            regexp: /^\)/
                        },
                        ",": {
                            regexp: /^,/
                        }
                    },
                    func: {
                        abs: {
                            regexp: /^abs/,
                            method: applyUnary.bind(this, Tone.Abs)
                        },
                        mod: {
                            regexp: /^mod/,
                            method: function (args, self) {
                                var modulus = literalNumber(args[1]);
                                var op = new Tone.Modulo(modulus);
                                return self._eval(args[0]).connect(op), op;
                            }
                        },
                        pow: {
                            regexp: /^pow/,
                            method: function (args, self) {
                                var exp = literalNumber(args[1]);
                                var op = new Tone.Pow(exp);
                                return self._eval(args[0]).connect(op), op;
                            }
                        },
                        a2g: {
                            regexp: /^a2g/,
                            method: function (args, self) {
                                var unit = new Tone.AudioToGain;
                                return self._eval(args[0]).connect(unit), unit;
                            }
                        }
                    },
                    binary: {
                        "+": {
                            regexp: /^\+/,
                            precedence: 1,
                            method: applyBinary.bind(this, Tone.Add)
                        },
                        "-": {
                            regexp: /^\-/,
                            precedence: 1,
                            method: function (args, self) {
                                return 1 === args.length ? applyUnary(Tone.Negate, args, self) : applyBinary(Tone.Subtract, args, self);
                            }
                        },
                        "*": {
                            regexp: /^\*/,
                            precedence: 0,
                            method: applyBinary.bind(this, Tone.Multiply)
                        }
                    },
                    unary: {
                        "-": {
                            regexp: /^\-/,
                            method: applyUnary.bind(this, Tone.Negate)
                        },
                        "!": {
                            regexp: /^!/,
                            method: applyUnary.bind(this, Tone.NOT)
                        }
                    }
                };
                /**
                 * @param {string} expr
                 * @return {?}
                 */
                Tone.Expr.prototype._parseInputs = function (expr) {
                    var rawRequiredAttributes = expr.match(/\$\d/g);
                    /** @type {number} */
                    var inputMax = 0;
                    if (null !== rawRequiredAttributes) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < rawRequiredAttributes.length; i++) {
                            /** @type {number} */
                            var inputNum = parseInt(rawRequiredAttributes[i].substr(1)) + 1;
                            /** @type {number} */
                            inputMax = Math.max(inputMax, inputNum);
                        }
                    }
                    return inputMax;
                };
                /**
                 * @param {!Array} args
                 * @return {?}
                 */
                Tone.Expr.prototype._replacements = function (args) {
                    var expr = args.shift();
                    /** @type {number} */
                    var i = 0;
                    for (; i < args.length; i++) {
                        expr = expr.replace(/%/i, args[i]);
                    }
                    return expr;
                };
                /**
                 * @param {!Object} expr
                 * @return {?}
                 */
                Tone.Expr.prototype._tokenize = function (expr) {
                    /**
                     * @param {!Object} expr
                     * @return {?}
                     */
                    function getNextToken(expr) {
                        var type;
                        for (type in Tone.Expr._Expressions) {
                            var arr = Tone.Expr._Expressions[type];
                            var item;
                            for (item in arr) {
                                var op = arr[item];
                                var reg = op.regexp;
                                var m = expr.match(reg);
                                if (null !== m) {
                                    return {
                                        type: type,
                                        value: m[0],
                                        method: op.method
                                    };
                                }
                            }
                        }
                        throw new SyntaxError("Tone.Expr: Unexpected token " + expr);
                    }

                    /** @type {number} */
                    var i = -1;
                    /** @type {!Array} */
                    var dynargs = [];
                    for (; expr.length > 0;) {
                        expr = expr.trim();
                        var token = getNextToken(expr);
                        dynargs.push(token);
                        expr = expr.substr(token.value.length);
                    }
                    return {
                        next: function () {
                            return dynargs[++i];
                        },
                        peek: function () {
                            return dynargs[i + 1];
                        }
                    };
                };
                /**
                 * @param {undefined} expr
                 * @return {?}
                 */
                Tone.Expr.prototype._parseTree = function (expr) {
                    /**
                     * @param {!Object} token
                     * @param {string} syn
                     * @return {?}
                     */
                    function matchSyntax(token, syn) {
                        return !isUndef(token) && "glue" === token.type && token.value === syn;
                    }

                    /**
                     * @param {!Object} token
                     * @param {string} groupName
                     * @param {number} prec
                     * @return {?}
                     */
                    function matchGroup(token, groupName, prec) {
                        /** @type {boolean} */
                        var ret = false;
                        var group = Tone.Expr._Expressions[groupName];
                        if (!isUndef(token)) {
                            var method;
                            for (method in group) {
                                var op = group[method];
                                if (op.regexp.test(token.value)) {
                                    if (isUndef(prec)) {
                                        return true;
                                    }
                                    if (op.precedence === prec) {
                                        return true;
                                    }
                                }
                            }
                        }
                        return ret;
                    }

                    /**
                     * @param {number} precedence
                     * @return {?}
                     */
                    function parseExpression(precedence) {
                        var expr;
                        if (isUndef(precedence)) {
                            /** @type {number} */
                            precedence = 5;
                        }
                        expr = precedence < 0 ? parseUnary() : parseExpression(precedence - 1);
                        var token = lexer.peek();
                        for (; matchGroup(token, "binary", precedence);) {
                            token = lexer.next();
                            expr = {
                                operator: token.value,
                                method: token.method,
                                args: [expr, parseExpression(precedence - 1)]
                            };
                            token = lexer.peek();
                        }
                        return expr;
                    }

                    /**
                     * @return {?}
                     */
                    function parseUnary() {
                        var token;
                        var expr;
                        return token = lexer.peek(), matchGroup(token, "unary") ? (token = lexer.next(), expr = parseUnary(), {
                            operator: token.value,
                            method: token.method,
                            args: [expr]
                        }) : parsePrimary();
                    }

                    /**
                     * @return {?}
                     */
                    function parsePrimary() {
                        var token;
                        var expr;
                        if (token = lexer.peek(), isUndef(token)) {
                            throw new SyntaxError("Tone.Expr: Unexpected termination of expression");
                        }
                        if ("func" === token.type) {
                            return token = lexer.next(), parseFunctionCall(token);
                        }
                        if ("value" === token.type) {
                            return token = lexer.next(), {
                                method: token.method,
                                args: token.value
                            };
                        }
                        if (matchSyntax(token, "(")) {
                            if (lexer.next(), expr = parseExpression(), token = lexer.next(), !matchSyntax(token, ")")) {
                                throw new SyntaxError("Expected )");
                            }
                            return expr;
                        }
                        throw new SyntaxError("Tone.Expr: Parse error, cannot process token " + token.value);
                    }

                    /**
                     * @param {!Object} func
                     * @return {?}
                     */
                    function parseFunctionCall(func) {
                        var token;
                        /** @type {!Array} */
                        var args = [];
                        if (token = lexer.next(), !matchSyntax(token, "(")) {
                            throw new SyntaxError('Tone.Expr: Expected ( in a function call "' + func.value + '"');
                        }
                        if (token = lexer.peek(), matchSyntax(token, ")") || (args = parseArgumentList()), token = lexer.next(), !matchSyntax(token, ")")) {
                            throw new SyntaxError('Tone.Expr: Expected ) in a function call "' + func.value + '"');
                        }
                        return {
                            method: func.method,
                            args: args,
                            name: name
                        };
                    }

                    /**
                     * @return {?}
                     */
                    function parseArgumentList() {
                        var token;
                        var handler;
                        /** @type {!Array} */
                        var args = [];
                        for (; 1;) {
                            if (handler = parseExpression(), isUndef(handler)) {
                                break;
                            }
                            if (args.push(handler), token = lexer.peek(), !matchSyntax(token, ",")) {
                                break;
                            }
                            lexer.next();
                        }
                        return args;
                    }

                    var lexer = this._tokenize(expr);
                    var isUndef = this.isUndef.bind(this);
                    return parseExpression();
                };
                /**
                 * @param {!Object} tree
                 * @return {?}
                 */
                Tone.Expr.prototype._eval = function (tree) {
                    if (!this.isUndef(tree)) {
                        var name = tree.method(tree.args, this);
                        return this._nodes.push(name), name;
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Expr.prototype._disposeNodes = function () {
                    /** @type {number} */
                    var i = 0;
                    for (; i < this._nodes.length; i++) {
                        var node = this._nodes[i];
                        if (this.isFunction(node.dispose)) {
                            node.dispose();
                        } else {
                            if (this.isFunction(node.disconnect)) {
                                node.disconnect();
                            }
                        }
                        /** @type {null} */
                        node = null;
                        /** @type {null} */
                        this._nodes[i] = null;
                    }
                    /** @type {null} */
                    this._nodes = null;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Expr.prototype.dispose = function () {
                    Tone.prototype.dispose.call(this);
                    this._disposeNodes();
                };
                Tone.Expr;
            })(i);
            (function (Tone) {
                /**
                 * @return {undefined}
                 */
                Tone.EqualPowerGain = function () {
                    this._eqPower = this.input = this.output = new Tone.WaveShaper(function (val) {
                        return Math.abs(val) < .001 ? 0 : this.equalPowerScale(val);
                    }.bind(this), 4096);
                };
                Tone.extend(Tone.EqualPowerGain, Tone.SignalBase);
                /**
                 * @return {?}
                 */
                Tone.EqualPowerGain.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._eqPower.dispose(), this._eqPower = null, this;
                };
                Tone.EqualPowerGain;
            })(i);
            type = function (Tone) {
                return Tone.CrossFade = function (initialFade) {
                    this.createInsOuts(2, 1);
                    this.a = this.input[0] = new Tone.Gain;
                    this.b = this.input[1] = new Tone.Gain;
                    this.fade = new Tone.Signal(this.defaultArg(initialFade, .5), Tone.Type.NormalRange);
                    this._equalPowerA = new Tone.EqualPowerGain;
                    this._equalPowerB = new Tone.EqualPowerGain;
                    this._invert = new Tone.Expr("1 - $0");
                    this.a.connect(this.output);
                    this.b.connect(this.output);
                    this.fade.chain(this._equalPowerB, this.b.gain);
                    this.fade.chain(this._invert, this._equalPowerA, this.a.gain);
                    this._readOnly("fade");
                }, Tone.extend(Tone.CrossFade), Tone.CrossFade.prototype.dispose = function () {
                    return Tone.prototype.dispose.call(this), this._writable("fade"), this._equalPowerA.dispose(), this._equalPowerA = null, this._equalPowerB.dispose(), this._equalPowerB = null, this.fade.dispose(), this.fade = null, this._invert.dispose(), this._invert = null, this.a.dispose(), this.a = null, this.b.dispose(), this.b = null, this;
                }, Tone.CrossFade;
            }(i);
            e6484 = function () {
                var p5sound = master;
                var graphTypeBaseName = type;
                return Tone.Effect = function () {
                    this.ac = p5sound.audiocontext;
                    this.input = this.ac.createGain();
                    this.output = this.ac.createGain();
                    this._drywet = new graphTypeBaseName(1);
                    this.wet = this.ac.createGain();
                    this.input.connect(this._drywet.a);
                    this.wet.connect(this._drywet.b);
                    this._drywet.connect(this.output);
                    this.connect();
                    p5sound.soundArray.push(this);
                }, Tone.Effect.prototype.amp = function (value, t, tFromNow) {
                    t = t || 0;
                    tFromNow = tFromNow || 0;
                    var now = p5sound.audiocontext.currentTime;
                    var A = this.output.gain.value;
                    this.output.gain.cancelScheduledValues(now);
                    this.output.gain.linearRampToValueAtTime(A, now + tFromNow + .001);
                    this.output.gain.linearRampToValueAtTime(value, now + tFromNow + t + .001);
                }, Tone.Effect.prototype.chain = function () {
                    if (arguments.length > 0) {
                        this.connect(arguments[0]);
                        /** @type {number} */
                        var i = 1;
                        for (; i < arguments.length; i = i + 1) {
                            arguments[i - 1].connect(arguments[i]);
                        }
                    }
                    return this;
                }, Tone.Effect.prototype.drywet = function (parentValue) {
                    return "undefined" !== typeof parentValue && (this._drywet.fade.value = parentValue), this._drywet.fade.value;
                }, Tone.Effect.prototype.connect = function (unit) {
                    var u = unit || Tone.soundOut.input;
                    this.output.connect(u.input ? u.input : u);
                }, Tone.Effect.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                }, Tone.Effect.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    if (this.input) {
                        this.input.disconnect();
                        delete this.input;
                    }
                    if (this.output) {
                        this.output.disconnect();
                        delete this.output;
                    }
                    if (this._drywet) {
                        this._drywet.disconnect();
                        delete this._drywet;
                    }
                    if (this.wet) {
                        this.wet.disconnect();
                        delete this.wet;
                    }
                    this.ac = void 0;
                }, Tone.Effect;
            }();
            newPath = function () {
                var e = e6484;
                return Tone.Filter = function (value) {
                    e.call(this);
                    this.biquad = this.ac.createBiquadFilter();
                    this.input.connect(this.biquad);
                    this.biquad.connect(this.wet);
                    if (value) {
                        this.setType(value);
                    }
                    /** @type {boolean} */
                    this._on = true;
                    this._untoggledType = this.biquad.type;
                }, Tone.Filter.prototype = Object.create(e.prototype), Tone.Filter.prototype.process = function (src, data, last, current) {
                    src.connect(this.input);
                    this.set(data, last, current);
                }, Tone.Filter.prototype.set = function (obj, x, time) {
                    if (obj) {
                        this.freq(obj, time);
                    }
                    if (x) {
                        this.res(x, time);
                    }
                }, Tone.Filter.prototype.freq = function (val, time) {
                    var t = time || 0;
                    return val <= 0 && (val = 1), "number" === typeof val ? (this.biquad.frequency.cancelScheduledValues(this.ac.currentTime + .01 + t), this.biquad.frequency.exponentialRampToValueAtTime(val, this.ac.currentTime + .02 + t)) : val && val.connect(this.biquad.frequency), this.biquad.frequency.value;
                }, Tone.Filter.prototype.res = function (value, range) {
                    var tFromNow = range || 0;
                    return "number" === typeof value ? (this.biquad.Q.value = value, this.biquad.Q.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.biquad.Q.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.biquad.Q), this.biquad.Q.value;
                }, Tone.Filter.prototype.gain = function (value, start) {
                    var t = start || 0;
                    return "number" === typeof value ? (this.biquad.gain.value = value, this.biquad.gain.cancelScheduledValues(this.ac.currentTime + .01 + t), this.biquad.gain.linearRampToValueAtTime(value, this.ac.currentTime + .02 + t)) : value && value.connect(this.biquad.gain), this.biquad.gain.value;
                }, Tone.Filter.prototype.toggle = function () {
                    return this._on = !this._on, true === this._on ? this.biquad.type = this._untoggledType : false === this._on && (this.biquad.type = "allpass"), this._on;
                }, Tone.Filter.prototype.setType = function (t) {
                    /** @type {number} */
                    this.biquad.type = t;
                    this._untoggledType = this.biquad.type;
                }, Tone.Filter.prototype.dispose = function () {
                    e.prototype.dispose.apply(this);
                    if (this.biquad) {
                        this.biquad.disconnect();
                        delete this.biquad;
                    }
                }, Tone.LowPass = function () {
                    Tone.Filter.call(this, "lowpass");
                }, Tone.LowPass.prototype = Object.create(Tone.Filter.prototype), Tone.HighPass = function () {
                    Tone.Filter.call(this, "highpass");
                }, Tone.HighPass.prototype = Object.create(Tone.Filter.prototype), Tone.BandPass = function () {
                    Tone.Filter.call(this, "bandpass");
                }, Tone.BandPass.prototype = Object.create(Tone.Filter.prototype), Tone.Filter;
            }();
            y = function () {
                var RandomBaseTimeSeriesDataModel = newPath;
                var p5sound = master;
                /**
                 * @param {undefined} target
                 * @param {undefined} options
                 * @return {undefined}
                 */
                var Equalizer = function (target, options) {
                    RandomBaseTimeSeriesDataModel.call(this, "peaking");
                    this.disconnect();
                    this.set(target, options);
                    /** @type {number} */
                    this.biquad.gain.value = 0;
                    delete this.input;
                    delete this.output;
                    delete this._drywet;
                    delete this.wet;
                };
                return Equalizer.prototype = Object.create(RandomBaseTimeSeriesDataModel.prototype), Equalizer.prototype.amp = function () {
                    console.warn("`amp()` is not available for p5.EQ bands. Use `.gain()`");
                }, Equalizer.prototype.drywet = function () {
                    console.warn("`drywet()` is not available for p5.EQ bands.");
                }, Equalizer.prototype.connect = function (unit) {
                    var u = unit || Tone.soundOut.input;
                    if (this.biquad) {
                        this.biquad.connect(u.input ? u.input : u);
                    } else {
                        this.output.connect(u.input ? u.input : u);
                    }
                }, Equalizer.prototype.disconnect = function () {
                    if (this.biquad) {
                        this.biquad.disconnect();
                    }
                }, Equalizer.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    this.disconnect();
                    delete this.biquad;
                }, Equalizer;
            }();
            (function () {
                var e = e6484;
                var RealTester = y;
                /**
                 * @param {number} number
                 * @return {undefined}
                 */
                Tone.EQ = function (number) {
                    var r;
                    var m;
                    var xPixArray;
                    e.call(this);
                    number = 3 === number || 8 === number ? number : 3;
                    /** @type {number} */
                    r = 3 === number ? Math.pow(2, 3) : 2;
                    /** @type {!Array} */
                    this.bands = [];
                    /** @type {number} */
                    var i = 0;
                    for (; i < number; i++) {
                        if (i === number - 1) {
                            /** @type {number} */
                            m = 21e3;
                            /** @type {number} */
                            xPixArray = .01;
                        } else {
                            if (0 === i) {
                                /** @type {number} */
                                m = 100;
                                /** @type {number} */
                                xPixArray = .1;
                            } else {
                                if (1 === i) {
                                    /** @type {number} */
                                    m = 3 === number ? 360 * r : 360;
                                    /** @type {number} */
                                    xPixArray = 1;
                                } else {
                                    /** @type {number} */
                                    m = this.bands[i - 1].freq() * r;
                                    /** @type {number} */
                                    xPixArray = 1;
                                }
                            }
                        }
                        this.bands[i] = this._newBand(m, xPixArray);
                        if (i > 0) {
                            this.bands[i - 1].connect(this.bands[i].biquad);
                        } else {
                            this.input.connect(this.bands[i].biquad);
                        }
                    }
                    this.bands[number - 1].connect(this.output);
                };
                /** @type {!Object} */
                Tone.EQ.prototype = Object.create(e.prototype);
                /**
                 * @param {!Object} src
                 * @return {undefined}
                 */
                Tone.EQ.prototype.process = function (src) {
                    src.connect(this.input);
                };
                /**
                 * @return {undefined}
                 */
                Tone.EQ.prototype.set = function () {
                    if (arguments.length === 2 * this.bands.length) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < arguments.length; i = i + 2) {
                            this.bands[i / 2].freq(arguments[i]);
                            this.bands[i / 2].gain(arguments[i + 1]);
                        }
                    } else {
                        console.error("Argument mismatch. .set() should be called with " + 2 * this.bands.length + " arguments. (one frequency and gain value pair for each band of the eq)");
                    }
                };
                /**
                 * @param {number} t
                 * @param {number} fixture
                 * @return {?}
                 */
                Tone.EQ.prototype._newBand = function (t, fixture) {
                    return new RealTester(t, fixture);
                };
                /**
                 * @return {undefined}
                 */
                Tone.EQ.prototype.dispose = function () {
                    if (e.prototype.dispose.apply(this), this.bands) {
                        for (; this.bands.length > 0;) {
                            this.bands.pop().dispose();
                        }
                        delete this.bands;
                    }
                };
                Tone.EQ;
            })();
            (function () {
                var e = e6484;
                /**
                 * @return {undefined}
                 */
                Tone.Panner3D = function () {
                    e.call(this);
                    this.panner = this.ac.createPanner();
                    /** @type {string} */
                    this.panner.panningModel = "HRTF";
                    /** @type {string} */
                    this.panner.distanceModel = "linear";
                    this.panner.connect(this.output);
                    this.input.connect(this.panner);
                };
                /** @type {!Object} */
                Tone.Panner3D.prototype = Object.create(e.prototype);
                /**
                 * @param {!Object} src
                 * @return {undefined}
                 */
                Tone.Panner3D.prototype.process = function (src) {
                    src.connect(this.input);
                };
                /**
                 * @param {!Object} name
                 * @param {number} value
                 * @param {number} language
                 * @param {number} conf
                 * @return {?}
                 */
                Tone.Panner3D.prototype.set = function (name, value, language, conf) {
                    return this.positionX(name, conf), this.positionY(value, conf), this.positionZ(language, conf), [this.panner.positionX.value, this.panner.positionY.value, this.panner.positionZ.value];
                };
                /**
                 * @param {string} val
                 * @param {number} x
                 * @return {?}
                 */
                Tone.Panner3D.prototype.positionX = function (val, x) {
                    var tFromNow = x || 0;
                    return "number" === typeof val ? (this.panner.positionX.value = val, this.panner.positionX.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.panner.positionX.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.panner.positionX), this.panner.positionX.value;
                };
                /**
                 * @param {!Object} val
                 * @param {number} options
                 * @return {?}
                 */
                Tone.Panner3D.prototype.positionY = function (val, options) {
                    var tFromNow = options || 0;
                    return "number" === typeof val ? (this.panner.positionY.value = val, this.panner.positionY.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.panner.positionY.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.panner.positionY), this.panner.positionY.value;
                };
                /**
                 * @param {number} val
                 * @param {number} options
                 * @return {?}
                 */
                Tone.Panner3D.prototype.positionZ = function (val, options) {
                    var tFromNow = options || 0;
                    return "number" === typeof val ? (this.panner.positionZ.value = val, this.panner.positionZ.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.panner.positionZ.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.panner.positionZ), this.panner.positionZ.value;
                };
                /**
                 * @param {string} d
                 * @param {string} _
                 * @param {!Object} x
                 * @param {undefined} i
                 * @return {?}
                 */
                Tone.Panner3D.prototype.orient = function (d, _, x, i) {
                    return this.orientX(d, i), this.orientY(_, i), this.orientZ(x, i), [this.panner.orientationX.value, this.panner.orientationY.value, this.panner.orientationZ.value];
                };
                /**
                 * @param {string} val
                 * @param {number} from
                 * @return {?}
                 */
                Tone.Panner3D.prototype.orientX = function (val, from) {
                    var tFromNow = from || 0;
                    return "number" === typeof val ? (this.panner.orientationX.value = val, this.panner.orientationX.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.panner.orientationX.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.panner.orientationX), this.panner.orientationX.value;
                };
                /**
                 * @param {string} value
                 * @param {number} namespace
                 * @return {?}
                 */
                Tone.Panner3D.prototype.orientY = function (value, namespace) {
                    var tFromNow = namespace || 0;
                    return "number" === typeof value ? (this.panner.orientationY.value = value, this.panner.orientationY.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.panner.orientationY.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.panner.orientationY), this.panner.orientationY.value;
                };
                /**
                 * @param {!Object} value
                 * @param {number} namespace
                 * @return {?}
                 */
                Tone.Panner3D.prototype.orientZ = function (value, namespace) {
                    var tFromNow = namespace || 0;
                    return "number" === typeof value ? (this.panner.orientationZ.value = value, this.panner.orientationZ.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.panner.orientationZ.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.panner.orientationZ), this.panner.orientationZ.value;
                };
                /**
                 * @param {undefined} childCompute
                 * @param {undefined} parentCompute
                 * @return {undefined}
                 */
                Tone.Panner3D.prototype.setFalloff = function (childCompute, parentCompute) {
                    this.maxDist(childCompute);
                    this.rolloff(parentCompute);
                };
                /**
                 * @param {number} value
                 * @return {?}
                 */
                Tone.Panner3D.prototype.maxDist = function (value) {
                    return "number" === typeof value && (this.panner.maxDistance = value), this.panner.maxDistance;
                };
                /**
                 * @param {number} value
                 * @return {?}
                 */
                Tone.Panner3D.prototype.rolloff = function (value) {
                    return "number" === typeof value && (this.panner.rolloffFactor = value), this.panner.rolloffFactor;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Panner3D.dispose = function () {
                    e.prototype.dispose.apply(this);
                    if (this.panner) {
                        this.panner.disconnect();
                        delete this.panner;
                    }
                };
                Tone.Panner3D;
            })();
            (function () {
                var p5sound = master;
                /**
                 * @param {?} canCreateDiscussions
                 * @return {undefined}
                 */
                Tone.Listener3D = function (canCreateDiscussions) {
                    this.ac = p5sound.audiocontext;
                    this.listener = this.ac.listener;
                };
                /**
                 * @param {!Object} src
                 * @return {undefined}
                 */
                Tone.Listener3D.prototype.process = function (src) {
                    src.connect(this.input);
                };
                /**
                 * @param {string} i
                 * @param {undefined} e
                 * @param {undefined} num
                 * @param {undefined} base
                 * @return {?}
                 */
                Tone.Listener3D.prototype.position = function (i, e, num, base) {
                    return this.positionX(i, base), this.positionY(e, base), this.positionZ(num, base), [this.listener.positionX.value, this.listener.positionY.value, this.listener.positionZ.value];
                };
                /**
                 * @param {string} val
                 * @param {number} x
                 * @return {?}
                 */
                Tone.Listener3D.prototype.positionX = function (val, x) {
                    var tFromNow = x || 0;
                    return "number" === typeof val ? (this.listener.positionX.value = val, this.listener.positionX.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.positionX.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.listener.positionX), this.listener.positionX.value;
                };
                /**
                 * @param {number} val
                 * @param {number} options
                 * @return {?}
                 */
                Tone.Listener3D.prototype.positionY = function (val, options) {
                    var tFromNow = options || 0;
                    return "number" === typeof val ? (this.listener.positionY.value = val, this.listener.positionY.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.positionY.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.listener.positionY), this.listener.positionY.value;
                };
                /**
                 * @param {number} val
                 * @param {number} options
                 * @return {?}
                 */
                Tone.Listener3D.prototype.positionZ = function (val, options) {
                    var tFromNow = options || 0;
                    return "number" === typeof val ? (this.listener.positionZ.value = val, this.listener.positionZ.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.positionZ.linearRampToValueAtTime(val, this.ac.currentTime + .02 + tFromNow)) : val && val.connect(this.listener.positionZ), this.listener.positionZ.value;
                };
                /**
                 * @param {undefined} x
                 * @param {undefined} stage
                 * @param {undefined} args
                 * @param {undefined} val
                 * @param {undefined} _
                 * @param {undefined} value
                 * @param {number} options
                 * @return {?}
                 */
                Tone.Listener3D.prototype.orient = function (x, stage, args, val, _, value, options) {
                    return 3 === arguments.length || 4 === arguments.length ? (options = arguments[3], this.orientForward(x, stage, args, options)) : 6 !== arguments.length && 7 !== arguments || (this.orientForward(x, stage, args), this.orientUp(val, _, value, options)), [this.listener.forwardX.value, this.listener.forwardY.value, this.listener.forwardZ.value, this.listener.upX.value, this.listener.upY.value, this.listener.upZ.value];
                };
                /**
                 * @param {number} table
                 * @param {number} e
                 * @param {number} elements
                 * @param {number} base
                 * @return {?}
                 */
                Tone.Listener3D.prototype.orientForward = function (table, e, elements, base) {
                    return this.forwardX(table, base), this.forwardY(e, base), this.forwardZ(elements, base), [this.listener.forwardX, this.listener.forwardY, this.listener.forwardZ];
                };
                /**
                 * @param {number} i
                 * @param {number} e
                 * @param {number} tree
                 * @param {number} base
                 * @return {?}
                 */
                Tone.Listener3D.prototype.orientUp = function (i, e, tree, base) {
                    return this.upX(i, base), this.upY(e, base), this.upZ(tree, base), [this.listener.upX, this.listener.upY, this.listener.upZ];
                };
                /**
                 * @param {number} value
                 * @param {number} defaultValue
                 * @return {?}
                 */
                Tone.Listener3D.prototype.forwardX = function (value, defaultValue) {
                    var tFromNow = defaultValue || 0;
                    return "number" === typeof value ? (this.listener.forwardX.value = value, this.listener.forwardX.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.forwardX.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.listener.forwardX), this.listener.forwardX.value;
                };
                /**
                 * @param {number} value
                 * @param {number} defaultValue
                 * @return {?}
                 */
                Tone.Listener3D.prototype.forwardY = function (value, defaultValue) {
                    var tFromNow = defaultValue || 0;
                    return "number" === typeof value ? (this.listener.forwardY.value = value, this.listener.forwardY.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.forwardY.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.listener.forwardY), this.listener.forwardY.value;
                };
                /**
                 * @param {number} value
                 * @param {number} defaultValue
                 * @return {?}
                 */
                Tone.Listener3D.prototype.forwardZ = function (value, defaultValue) {
                    var tFromNow = defaultValue || 0;
                    return "number" === typeof value ? (this.listener.forwardZ.value = value, this.listener.forwardZ.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.forwardZ.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.listener.forwardZ), this.listener.forwardZ.value;
                };
                /**
                 * @param {number} value
                 * @param {number} defaultValue
                 * @return {?}
                 */
                Tone.Listener3D.prototype.upX = function (value, defaultValue) {
                    var tFromNow = defaultValue || 0;
                    return "number" === typeof value ? (this.listener.upX.value = value, this.listener.upX.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.upX.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.listener.upX), this.listener.upX.value;
                };
                /**
                 * @param {number} value
                 * @param {number} defaultValue
                 * @return {?}
                 */
                Tone.Listener3D.prototype.upY = function (value, defaultValue) {
                    var tFromNow = defaultValue || 0;
                    return "number" === typeof value ? (this.listener.upY.value = value, this.listener.upY.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.upY.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.listener.upY), this.listener.upY.value;
                };
                /**
                 * @param {number} value
                 * @param {number} defaultValue
                 * @return {?}
                 */
                Tone.Listener3D.prototype.upZ = function (value, defaultValue) {
                    var tFromNow = defaultValue || 0;
                    return "number" === typeof value ? (this.listener.upZ.value = value, this.listener.upZ.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.listener.upZ.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : value && value.connect(this.listener.upZ), this.listener.upZ.value;
                };
                Tone.Listener3D;
            })();
            (function () {
                var origNewPath = newPath;
                var e = e6484;
                /**
                 * @return {undefined}
                 */
                Tone.Delay = function () {
                    e.call(this);
                    this._split = this.ac.createChannelSplitter(2);
                    this._merge = this.ac.createChannelMerger(2);
                    this._leftGain = this.ac.createGain();
                    this._rightGain = this.ac.createGain();
                    this.leftDelay = this.ac.createDelay();
                    this.rightDelay = this.ac.createDelay();
                    this._leftFilter = new origNewPath;
                    this._rightFilter = new origNewPath;
                    this._leftFilter.disconnect();
                    this._rightFilter.disconnect();
                    this._leftFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);
                    this._rightFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);
                    this._leftFilter.biquad.Q.setValueAtTime(.3, this.ac.currentTime);
                    this._rightFilter.biquad.Q.setValueAtTime(.3, this.ac.currentTime);
                    this.input.connect(this._split);
                    this.leftDelay.connect(this._leftGain);
                    this.rightDelay.connect(this._rightGain);
                    this._leftGain.connect(this._leftFilter.input);
                    this._rightGain.connect(this._rightFilter.input);
                    this._merge.connect(this.wet);
                    this._leftFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);
                    this._rightFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);
                    this.setType(0);
                    this._maxDelay = this.leftDelay.delayTime.maxValue;
                    this.feedback(.5);
                };
                /** @type {!Object} */
                Tone.Delay.prototype = Object.create(e.prototype);
                /**
                 * @param {!Object} src
                 * @param {number} str
                 * @param {number} data
                 * @param {undefined} freq
                 * @return {undefined}
                 */
                Tone.Delay.prototype.process = function (src, str, data, freq) {
                    var obj = data || 0;
                    var value = str || 0;
                    if (obj >= 1) {
                        throw new Error("Feedback value will force a positive feedback loop.");
                    }
                    if (value >= this._maxDelay) {
                        throw new Error("Delay Time exceeds maximum delay time of " + this._maxDelay + " second.");
                    }
                    src.connect(this.input);
                    this.leftDelay.delayTime.setValueAtTime(value, this.ac.currentTime);
                    this.rightDelay.delayTime.setValueAtTime(value, this.ac.currentTime);
                    this._leftGain.gain.value = obj;
                    this._rightGain.gain.value = obj;
                    if (freq) {
                        this._leftFilter.freq(freq);
                        this._rightFilter.freq(freq);
                    }
                };
                /**
                 * @param {!Object} t
                 * @return {undefined}
                 */
                Tone.Delay.prototype.delayTime = function (t) {
                    if ("number" !== typeof t) {
                        t.connect(this.leftDelay.delayTime);
                        t.connect(this.rightDelay.delayTime);
                    } else {
                        this.leftDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
                        this.rightDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
                        this.leftDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
                        this.rightDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
                    }
                };
                /**
                 * @param {number} f
                 * @return {?}
                 */
                Tone.Delay.prototype.feedback = function (f) {
                    if (f && "number" !== typeof f) {
                        f.connect(this._leftGain.gain);
                        f.connect(this._rightGain.gain);
                    } else {
                        if (f >= 1) {
                            throw new Error("Feedback value will force a positive feedback loop.");
                        }
                        if ("number" === typeof f) {
                            /** @type {number} */
                            this._leftGain.gain.value = f;
                            /** @type {number} */
                            this._rightGain.gain.value = f;
                        }
                    }
                    return this._leftGain.gain.value;
                };
                /**
                 * @param {!Array} freq
                 * @param {undefined} q
                 * @return {undefined}
                 */
                Tone.Delay.prototype.filter = function (freq, q) {
                    this._leftFilter.set(freq, q);
                    this._rightFilter.set(freq, q);
                };
                /**
                 * @param {number} name
                 * @return {undefined}
                 */
                Tone.Delay.prototype.setType = function (name) {
                    switch (1 === name && (name = "pingPong"), this._split.disconnect(), this._leftFilter.disconnect(), this._rightFilter.disconnect(), this._split.connect(this.leftDelay, 0), this._split.connect(this.rightDelay, 1), name) {
                        case "pingPong":
                            this._rightFilter.setType(this._leftFilter.biquad.type);
                            this._leftFilter.output.connect(this._merge, 0, 0);
                            this._rightFilter.output.connect(this._merge, 0, 1);
                            this._leftFilter.output.connect(this.rightDelay);
                            this._rightFilter.output.connect(this.leftDelay);
                            break;
                        default:
                            this._leftFilter.output.connect(this._merge, 0, 0);
                            this._rightFilter.output.connect(this._merge, 0, 1);
                            this._leftFilter.output.connect(this.leftDelay);
                            this._rightFilter.output.connect(this.rightDelay);
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Delay.prototype.dispose = function () {
                    e.prototype.dispose.apply(this);
                    this._split.disconnect();
                    this._leftFilter.dispose();
                    this._rightFilter.dispose();
                    this._merge.disconnect();
                    this._leftGain.disconnect();
                    this._rightGain.disconnect();
                    this.leftDelay.disconnect();
                    this.rightDelay.disconnect();
                    this._split = void 0;
                    this._leftFilter = void 0;
                    this._rightFilter = void 0;
                    this._merge = void 0;
                    this._leftGain = void 0;
                    this._rightGain = void 0;
                    this.leftDelay = void 0;
                    this.rightDelay = void 0;
                };
            })();
            (function () {
                var CustomError = a;
                var e = e6484;
                /**
                 * @return {undefined}
                 */
                Tone.Reverb = function () {
                    e.call(this);
                    this._initConvolverNode();
                    /** @type {number} */
                    this.input.gain.value = .5;
                    /** @type {number} */
                    this._seconds = 3;
                    /** @type {number} */
                    this._decay = 2;
                    /** @type {boolean} */
                    this._reverse = false;
                    this._buildImpulse();
                };
                /** @type {!Object} */
                Tone.Reverb.prototype = Object.create(e.prototype);
                /**
                 * @return {undefined}
                 */
                Tone.Reverb.prototype._initConvolverNode = function () {
                    this.convolverNode = this.ac.createConvolver();
                    this.input.connect(this.convolverNode);
                    this.convolverNode.connect(this.wet);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Reverb.prototype._teardownConvolverNode = function () {
                    if (this.convolverNode) {
                        this.convolverNode.disconnect();
                        delete this.convolverNode;
                    }
                };
                /**
                 * @param {string} impulse
                 * @return {undefined}
                 */
                Tone.Reverb.prototype._setBuffer = function (impulse) {
                    this._teardownConvolverNode();
                    this._initConvolverNode();
                    /** @type {string} */
                    this.convolverNode.buffer = impulse;
                };
                /**
                 * @param {!Object} src
                 * @param {number} seconds
                 * @param {number} decayRate
                 * @param {boolean} reverse
                 * @return {undefined}
                 */
                Tone.Reverb.prototype.process = function (src, seconds, decayRate, reverse) {
                    src.connect(this.input);
                    /** @type {boolean} */
                    var o = false;
                    if (seconds) {
                        /** @type {number} */
                        this._seconds = seconds;
                        /** @type {boolean} */
                        o = true;
                    }
                    if (decayRate) {
                        /** @type {number} */
                        this._decay = decayRate;
                    }
                    if (reverse) {
                        /** @type {boolean} */
                        this._reverse = reverse;
                    }
                    if (o) {
                        this._buildImpulse();
                    }
                };
                /**
                 * @param {number} value
                 * @param {number} key
                 * @param {boolean} n
                 * @return {undefined}
                 */
                Tone.Reverb.prototype.set = function (value, key, n) {
                    /** @type {boolean} */
                    var i = false;
                    if (value) {
                        /** @type {number} */
                        this._seconds = value;
                        /** @type {boolean} */
                        i = true;
                    }
                    if (key) {
                        /** @type {number} */
                        this._decay = key;
                    }
                    if (n) {
                        /** @type {boolean} */
                        this._reverse = n;
                    }
                    if (i) {
                        this._buildImpulse();
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Reverb.prototype._buildImpulse = function () {
                    var position;
                    var index;
                    var rate = this.ac.sampleRate;
                    /** @type {number} */
                    var length = rate * this._seconds;
                    var decay = this._decay;
                    var impulse = this.ac.createBuffer(2, length, rate);
                    var missingPath = impulse.getChannelData(0);
                    var barWidths = impulse.getChannelData(1);
                    /** @type {number} */
                    index = 0;
                    for (; index < length; index++) {
                        /** @type {number} */
                        position = this._reverse ? length - index : index;
                        /** @type {number} */
                        missingPath[index] = (2 * Math.random() - 1) * Math.pow(1 - position / length, decay);
                        /** @type {number} */
                        barWidths[index] = (2 * Math.random() - 1) * Math.pow(1 - position / length, decay);
                    }
                    this._setBuffer(impulse);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Reverb.prototype.dispose = function () {
                    e.prototype.dispose.apply(this);
                    this._teardownConvolverNode();
                };
                /**
                 * @param {string} path
                 * @param {?} callback
                 * @param {?} errorCallback
                 * @return {undefined}
                 */
                Tone.Convolver = function (path, callback, errorCallback) {
                    Tone.Reverb.call(this);
                    this._initConvolverNode();
                    /** @type {number} */
                    this.input.gain.value = .5;
                    if (path) {
                        /** @type {!Array} */
                        this.impulses = [];
                        this._loadBuffer(path, callback, errorCallback);
                    } else {
                        /** @type {number} */
                        this._seconds = 3;
                        /** @type {number} */
                        this._decay = 2;
                        /** @type {boolean} */
                        this._reverse = false;
                        this._buildImpulse();
                    }
                };
                /** @type {!Object} */
                Tone.Convolver.prototype = Object.create(Tone.Reverb.prototype);
                Tone.prototype.registerPreloadMethod("createConvolver", Tone.prototype);
                /**
                 * @param {!Object} path
                 * @param {?} callback
                 * @param {!Function} errorCallback
                 * @return {?}
                 */
                Tone.prototype.createConvolver = function (path, callback, errorCallback) {
                    if (window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova) {
                        alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS");
                    }
                    var o = this;
                    var cReverb = new Tone.Convolver(path, function (identifierPositions) {
                        if ("function" === typeof callback) {
                            callback(identifierPositions);
                        }
                        if ("function" === typeof o._decrementPreload) {
                            o._decrementPreload();
                        }
                    }, errorCallback);
                    return cReverb.impulses = [], cReverb;
                };
                /**
                 * @param {string} path
                 * @param {?} callback
                 * @param {?} errorCallback
                 * @return {undefined}
                 */
                Tone.Convolver.prototype._loadBuffer = function (path, callback, errorCallback) {
                    path = Tone.prototype._checkFileFormats(path);
                    var self = this;
                    /** @type {string} */
                    var errorTrace = (new Error).stack;
                    var ctx = Tone.prototype.getAudioContext();
                    /** @type {!XMLHttpRequest} */
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", path, true);
                    /** @type {string} */
                    xhr.responseType = "arraybuffer";
                    /**
                     * @return {undefined}
                     */
                    xhr.onload = function () {
                        if (200 === xhr.status) {
                            ctx.decodeAudioData(xhr.response, function (innerException) {
                                var e = {};
                                var params = path.split("/");
                                e.name = params[params.length - 1];
                                e.audioBuffer = innerException;
                                self.impulses.push(e);
                                self._setBuffer(e.audioBuffer);
                                if (callback) {
                                    callback(e);
                                }
                            }, function () {
                                var err = new CustomError("decodeAudioData", errorTrace, self.url);
                                /** @type {string} */
                                var msg = "AudioContext error at decodeAudioData for " + self.url;
                                if (errorCallback) {
                                    /** @type {string} */
                                    err.msg = msg;
                                    errorCallback(err);
                                } else {
                                    console.error(msg + "\n The error stack trace includes: \n" + err.stack);
                                }
                            });
                        } else {
                            var err = new CustomError("loadConvolver", errorTrace, self.url);
                            /** @type {string} */
                            var file = "Unable to load " + self.url + ". The request status was: " + xhr.status + " (" + xhr.statusText + ")";
                            if (errorCallback) {
                                /** @type {string} */
                                err.message = file;
                                errorCallback(err);
                            } else {
                                console.error(file + "\n The error stack trace includes: \n" + err.stack);
                            }
                        }
                    };
                    /**
                     * @return {undefined}
                     */
                    xhr.onerror = function () {
                        var err = new CustomError("loadConvolver", errorTrace, self.url);
                        /** @type {string} */
                        var file = "There was no response from the server at " + self.url + ". Check the url and internet connectivity.";
                        if (errorCallback) {
                            /** @type {string} */
                            err.message = file;
                            errorCallback(err);
                        } else {
                            console.error(file + "\n The error stack trace includes: \n" + err.stack);
                        }
                    };
                    xhr.send();
                };
                /** @type {null} */
                Tone.Convolver.prototype.set = null;
                /**
                 * @param {!Object} src
                 * @return {undefined}
                 */
                Tone.Convolver.prototype.process = function (src) {
                    src.connect(this.input);
                };
                /** @type {!Array} */
                Tone.Convolver.prototype.impulses = [];
                /**
                 * @param {string} path
                 * @param {?} callback
                 * @param {?} errorCallback
                 * @return {undefined}
                 */
                Tone.Convolver.prototype.addImpulse = function (path, callback, errorCallback) {
                    if (window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova) {
                        alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS");
                    }
                    this._loadBuffer(path, callback, errorCallback);
                };
                /**
                 * @param {string} path
                 * @param {?} callback
                 * @param {?} errorCallback
                 * @return {undefined}
                 */
                Tone.Convolver.prototype.resetImpulse = function (path, callback, errorCallback) {
                    if (window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova) {
                        alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS");
                    }
                    /** @type {!Array} */
                    this.impulses = [];
                    this._loadBuffer(path, callback, errorCallback);
                };
                /**
                 * @param {number} id
                 * @return {undefined}
                 */
                Tone.Convolver.prototype.toggleImpulse = function (id) {
                    if ("number" === typeof id && id < this.impulses.length && this._setBuffer(this.impulses[id].audioBuffer), "string" === typeof id) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < this.impulses.length; i++) {
                            if (this.impulses[i].name === id) {
                                this._setBuffer(this.impulses[i].audioBuffer);
                                break;
                            }
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.Convolver.prototype.dispose = function () {
                    var i;
                    for (i in Tone.Reverb.prototype.dispose.apply(this), this.impulses) {
                        if (this.impulses[i]) {
                            /** @type {null} */
                            this.impulses[i] = null;
                        }
                    }
                };
            })();
            (function (Tone) {
                /**
                 * @param {string} initial
                 * @return {undefined}
                 */
                Tone.TimelineState = function (initial) {
                    Tone.Timeline.call(this);
                    /** @type {string} */
                    this._initial = initial;
                };
                Tone.extend(Tone.TimelineState, Tone.Timeline);
                /**
                 * @param {number} start
                 * @return {?}
                 */
                Tone.TimelineState.prototype.getValueAtTime = function (start) {
                    var index = this.get(start);
                    return null !== index ? index.state : this._initial;
                };
                /**
                 * @param {!Object} state
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.TimelineState.prototype.setStateAtTime = function (state, time) {
                    this.add({
                        state: state,
                        time: time
                    });
                };
                Tone.TimelineState;
            })(i);
            geocoderElem = function (Tone) {
                return Tone.Clock = function () {
                    Tone.Emitter.call(this);
                    var options = this.optionsObject(arguments, ["callback", "frequency"], Tone.Clock.defaults);
                    this.callback = options.callback;
                    /** @type {number} */
                    this._nextTick = 0;
                    this._lastState = Tone.State.Stopped;
                    this.frequency = new Tone.TimelineSignal(options.frequency, Tone.Type.Frequency);
                    this._readOnly("frequency");
                    /** @type {number} */
                    this.ticks = 0;
                    this._state = new Tone.TimelineState(Tone.State.Stopped);
                    this._boundLoop = this._loop.bind(this);
                    this.context.on("tick", this._boundLoop);
                }, Tone.extend(Tone.Clock, Tone.Emitter), Tone.Clock.defaults = {
                    callback: Tone.noOp,
                    frequency: 1,
                    lookAhead: "auto"
                }, Object.defineProperty(Tone.Clock.prototype, "state", {
                    get: function () {
                        return this._state.getValueAtTime(this.now());
                    }
                }), Tone.Clock.prototype.start = function (time, offset) {
                    return time = this.toSeconds(time), this._state.getValueAtTime(time) !== Tone.State.Started && this._state.add({
                        state: Tone.State.Started,
                        time: time,
                        offset: offset
                    }), this;
                }, Tone.Clock.prototype.stop = function (time) {
                    return time = this.toSeconds(time), this._state.cancel(time), this._state.setStateAtTime(Tone.State.Stopped, time), this;
                }, Tone.Clock.prototype.pause = function (time) {
                    return time = this.toSeconds(time), this._state.getValueAtTime(time) === Tone.State.Started && this._state.setStateAtTime(Tone.State.Paused, time), this;
                }, Tone.Clock.prototype._loop = function () {
                    var now = this.now();
                    var lookAhead = this.context.lookAhead;
                    var updateInterval = this.context.updateInterval;
                    /** @type {number} */
                    var lagCompensation = 2 * this.context.lag;
                    var loopInterval = now + lookAhead + updateInterval + lagCompensation;
                    for (; loopInterval > this._nextTick && this._state;) {
                        var currentState = this._state.getValueAtTime(this._nextTick);
                        if (currentState !== this._lastState) {
                            this._lastState = currentState;
                            var event = this._state.get(this._nextTick);
                            if (currentState === Tone.State.Started) {
                                this._nextTick = event.time;
                                if (!this.isUndef(event.offset)) {
                                    this.ticks = event.offset;
                                }
                                this.emit("start", event.time, this.ticks);
                            } else {
                                if (currentState === Tone.State.Stopped) {
                                    /** @type {number} */
                                    this.ticks = 0;
                                    this.emit("stop", event.time);
                                } else {
                                    if (currentState === Tone.State.Paused) {
                                        this.emit("pause", event.time);
                                    }
                                }
                            }
                        }
                        var e = this._nextTick;
                        if (this.frequency) {
                            this._nextTick += 1 / this.frequency.getValueAtTime(this._nextTick);
                            if (currentState === Tone.State.Started) {
                                this.callback(e);
                                this.ticks++;
                            }
                        }
                    }
                }, Tone.Clock.prototype.getStateAtTime = function (time) {
                    return time = this.toSeconds(time), this._state.getValueAtTime(time);
                }, Tone.Clock.prototype.dispose = function () {
                    Tone.Emitter.prototype.dispose.call(this);
                    this.context.off("tick", this._boundLoop);
                    this._writable("frequency");
                    this.frequency.dispose();
                    /** @type {null} */
                    this.frequency = null;
                    /** @type {null} */
                    this._boundLoop = null;
                    /** @type {number} */
                    this._nextTick = 1 / 0;
                    /** @type {null} */
                    this.callback = null;
                    this._state.dispose();
                    /** @type {null} */
                    this._state = null;
                }, Tone.Clock;
            }(i);
            (function () {
                var p5sound = master;
                var Clock = geocoderElem;
                /**
                 * @return {undefined}
                 */
                Tone.Metro = function () {
                    this.clock = new Clock({
                        callback: this.ontick.bind(this)
                    });
                    /** @type {!Array} */
                    this.syncedParts = [];
                    /** @type {number} */
                    this.bpm = 120;
                    this._init();
                    /** @type {number} */
                    this.prevTick = 0;
                    /** @type {number} */
                    this.tatumTime = 0;
                    /**
                     * @return {undefined}
                     */
                    this.tickCallback = function () {
                    };
                };
                /**
                 * @param {number} tickTime
                 * @return {undefined}
                 */
                Tone.Metro.prototype.ontick = function (tickTime) {
                    /** @type {number} */
                    var elapsedTime = tickTime - this.prevTick;
                    /** @type {number} */
                    var secondsFromNow = tickTime - p5sound.audiocontext.currentTime;
                    if (!(elapsedTime - this.tatumTime <= -.02)) {
                        /** @type {number} */
                        this.prevTick = tickTime;
                        var source = this;
                        this.syncedParts.forEach(function ($scope) {
                            if ($scope.isPlaying) {
                                $scope.incrementStep(secondsFromNow);
                                $scope.phrases.forEach(function (thisPhrase) {
                                    var phraseArray = thisPhrase.sequence;
                                    /** @type {number} */
                                    var bNum = source.metroTicks % phraseArray.length;
                                    if (0 !== phraseArray[bNum] && (source.metroTicks < phraseArray.length || !thisPhrase.looping)) {
                                        thisPhrase.callback(secondsFromNow, phraseArray[bNum]);
                                    }
                                });
                            }
                        });
                        this.metroTicks += 1;
                        this.tickCallback(secondsFromNow);
                    }
                };
                /**
                 * @param {number} value
                 * @param {number} rampTime
                 * @return {undefined}
                 */
                Tone.Metro.prototype.setBPM = function (value, rampTime) {
                    /** @type {number} */
                    var beatTime = 60 / (value * this.tatums);
                    var now = p5sound.audiocontext.currentTime;
                    /** @type {number} */
                    this.tatumTime = beatTime;
                    rampTime = rampTime || 0;
                    this.clock.frequency.setValueAtTime(this.clock.frequency.value, now);
                    this.clock.frequency.linearRampToValueAtTime(value, now + rampTime);
                    /** @type {number} */
                    this.bpm = value;
                };
                /**
                 * @return {?}
                 */
                Tone.Metro.prototype.getBPM = function () {
                    return this.clock.getRate() / this.tatums * 60;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Metro.prototype._init = function () {
                    /** @type {number} */
                    this.metroTicks = 0;
                };
                /**
                 * @param {?} part
                 * @return {undefined}
                 */
                Tone.Metro.prototype.resetSync = function (part) {
                    /** @type {!Array} */
                    this.syncedParts = [part];
                };
                /**
                 * @param {?} part
                 * @return {undefined}
                 */
                Tone.Metro.prototype.pushSync = function (part) {
                    this.syncedParts.push(part);
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Metro.prototype.start = function (time) {
                    var t = time || 0;
                    var now = p5sound.audiocontext.currentTime;
                    this.clock.start(now + t);
                    this.setBPM(this.bpm);
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Metro.prototype.stop = function (time) {
                    var t = time || 0;
                    var now = p5sound.audiocontext.currentTime;
                    this.clock.stop(now + t);
                };
                /**
                 * @param {number} tatums
                 * @return {undefined}
                 */
                Tone.Metro.prototype.beatLength = function (tatums) {
                    /** @type {number} */
                    this.tatums = 1 / tatums / 4;
                };
            })();
            (function () {
                /**
                 * @param {!Object} aScore
                 * @return {undefined}
                 */
                function playNextPart(aScore) {
                    aScore.currentPart++;
                    if (aScore.currentPart >= aScore.parts.length) {
                        /** @type {number} */
                        aScore.scoreStep = 0;
                        aScore.onended();
                    } else {
                        /** @type {number} */
                        aScore.scoreStep = 0;
                        aScore.parts[aScore.currentPart - 1].stop();
                        aScore.parts[aScore.currentPart].start();
                    }
                }

                var p5sound = master;
                /** @type {number} */
                var tempo = 120;
                /**
                 * @param {number} bpm
                 * @param {number} rampTime
                 * @return {undefined}
                 */
                Tone.prototype.setBPM = function (bpm, rampTime) {
                    var i;
                    for (i in tempo = bpm, p5sound.parts) {
                        if (p5sound.parts[i]) {
                            p5sound.parts[i].setBPM(bpm, rampTime);
                        }
                    }
                };
                /**
                 * @param {string} callback
                 * @param {!Function} options
                 * @param {!Array} sequence
                 * @return {undefined}
                 */
                Tone.Phrase = function (callback, options, sequence) {
                    /** @type {number} */
                    this.phraseStep = 0;
                    /** @type {string} */
                    this.name = callback;
                    /** @type {!Function} */
                    this.callback = options;
                    /** @type {!Array} */
                    this.sequence = sequence;
                };
                /**
                 * @param {number} steps
                 * @param {number} bLength
                 * @return {undefined}
                 */
                Tone.Part = function (steps, bLength) {
                    this.length = steps || 0;
                    /** @type {number} */
                    this.partStep = 0;
                    /** @type {!Array} */
                    this.phrases = [];
                    /** @type {boolean} */
                    this.isPlaying = false;
                    this.noLoop();
                    this.tatums = bLength || .0625;
                    this.metro = new Tone.Metro;
                    this.metro._init();
                    this.metro.beatLength(this.tatums);
                    this.metro.setBPM(tempo);
                    p5sound.parts.push(this);
                    /**
                     * @return {undefined}
                     */
                    this.callback = function () {
                    };
                };
                /**
                 * @param {number} tempo
                 * @param {number} rampTime
                 * @return {undefined}
                 */
                Tone.Part.prototype.setBPM = function (tempo, rampTime) {
                    this.metro.setBPM(tempo, rampTime);
                };
                /**
                 * @return {?}
                 */
                Tone.Part.prototype.getBPM = function () {
                    return this.metro.getBPM();
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Part.prototype.start = function (time) {
                    if (!this.isPlaying) {
                        /** @type {boolean} */
                        this.isPlaying = true;
                        this.metro.resetSync(this);
                        var t = time || 0;
                        this.metro.start(t);
                    }
                };
                /**
                 * @param {number} data
                 * @return {undefined}
                 */
                Tone.Part.prototype.loop = function (data) {
                    /** @type {boolean} */
                    this.looping = true;
                    /**
                     * @return {undefined}
                     */
                    this.onended = function () {
                        /** @type {number} */
                        this.partStep = 0;
                    };
                    var d = data || 0;
                    this.start(d);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Part.prototype.noLoop = function () {
                    /** @type {boolean} */
                    this.looping = false;
                    /**
                     * @return {undefined}
                     */
                    this.onended = function () {
                        this.stop();
                    };
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Part.prototype.stop = function (time) {
                    /** @type {number} */
                    this.partStep = 0;
                    this.pause(time);
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Part.prototype.pause = function (time) {
                    /** @type {boolean} */
                    this.isPlaying = false;
                    var t = time || 0;
                    this.metro.stop(t);
                };
                /**
                 * @param {?} name
                 * @param {boolean} callback
                 * @param {boolean} array
                 * @return {undefined}
                 */
                Tone.Part.prototype.addPhrase = function (name, callback, array) {
                    var p;
                    if (3 === arguments.length) {
                        p = new Tone.Phrase(name, callback, array);
                    } else {
                        if (!(arguments[0] instanceof Tone.Phrase)) {
                            throw "invalid input. addPhrase accepts name, callback, array or a p5.Phrase";
                        }
                        p = arguments[0];
                    }
                    this.phrases.push(p);
                    if (p.sequence.length > this.length) {
                        this.length = p.sequence.length;
                    }
                };
                /**
                 * @param {?} name
                 * @return {undefined}
                 */
                Tone.Part.prototype.removePhrase = function (name) {
                    var i;
                    for (i in this.phrases) {
                        if (this.phrases[i].name === name) {
                            this.phrases.splice(i, 1);
                        }
                    }
                };
                /**
                 * @param {?} name
                 * @return {?}
                 */
                Tone.Part.prototype.getPhrase = function (name) {
                    var i;
                    for (i in this.phrases) {
                        if (this.phrases[i].name === name) {
                            return this.phrases[i];
                        }
                    }
                };
                /**
                 * @param {?} input
                 * @param {!Array} array
                 * @return {undefined}
                 */
                Tone.Part.prototype.replaceSequence = function (input, array) {
                    var i;
                    for (i in this.phrases) {
                        if (this.phrases[i].name === input) {
                            /** @type {!Array} */
                            this.phrases[i].sequence = array;
                        }
                    }
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.Part.prototype.incrementStep = function (time) {
                    if (this.partStep < this.length - 1) {
                        this.callback(time);
                        this.partStep += 1;
                    } else {
                        if (!(this.looping || this.partStep !== this.length - 1)) {
                            console.log("done");
                            this.onended();
                        }
                    }
                };
                /**
                 * @param {!Function} callback
                 * @return {undefined}
                 */
                Tone.Part.prototype.onStep = function (callback) {
                    /** @type {!Function} */
                    this.callback = callback;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score = function () {
                    /** @type {!Array} */
                    this.parts = [];
                    /** @type {number} */
                    this.currentPart = 0;
                    var thisScore = this;
                    var i;
                    for (i in arguments) {
                        if (arguments[i] && this.parts[i]) {
                            this.parts[i] = arguments[i];
                            this.parts[i].nextPart = this.parts[i + 1];
                            /**
                             * @return {undefined}
                             */
                            this.parts[i].onended = function () {
                                thisScore.resetPart(i);
                                playNextPart(thisScore);
                            };
                        }
                    }
                    /** @type {boolean} */
                    this.looping = false;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.onended = function () {
                    if (this.looping) {
                        this.parts[0].start();
                    } else {
                        /**
                         * @return {undefined}
                         */
                        this.parts[this.parts.length - 1].onended = function () {
                            this.stop();
                            this.resetParts();
                        };
                    }
                    /** @type {number} */
                    this.currentPart = 0;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.start = function () {
                    this.parts[this.currentPart].start();
                    /** @type {number} */
                    this.scoreStep = 0;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.stop = function () {
                    this.parts[this.currentPart].stop();
                    /** @type {number} */
                    this.currentPart = 0;
                    /** @type {number} */
                    this.scoreStep = 0;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.pause = function () {
                    this.parts[this.currentPart].stop();
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.loop = function () {
                    /** @type {boolean} */
                    this.looping = true;
                    this.start();
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.noLoop = function () {
                    /** @type {boolean} */
                    this.looping = false;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Score.prototype.resetParts = function () {
                    var t = this;
                    this.parts.forEach(function (topo_objectName) {
                        t.resetParts[topo_objectName];
                    });
                };
                /**
                 * @param {string} i
                 * @return {undefined}
                 */
                Tone.Score.prototype.resetPart = function (i) {
                    var p;
                    for (p in this.parts[i].stop(), this.parts[i].partStep = 0, this.parts[i].phrases) {
                        if (this.parts[i]) {
                            /** @type {number} */
                            this.parts[i].phrases[p].phraseStep = 0;
                        }
                    }
                };
                /**
                 * @param {number} tempo
                 * @param {number} rampTime
                 * @return {undefined}
                 */
                Tone.Score.prototype.setBPM = function (tempo, rampTime) {
                    var i;
                    for (i in this.parts) {
                        if (this.parts[i]) {
                            this.parts[i].setBPM(tempo, rampTime);
                        }
                    }
                };
            })();
            (function () {
                var p5sound = master;
                var Clock = geocoderElem;
                /**
                 * @param {!Function} callback
                 * @param {number} interval
                 * @return {undefined}
                 */
                Tone.SoundLoop = function (callback, interval) {
                    /** @type {!Function} */
                    this.callback = callback;
                    /** @type {boolean} */
                    this.musicalTimeMode = "number" !== typeof this._interval;
                    this._interval = interval || 1;
                    /** @type {number} */
                    this._timeSignature = 4;
                    /** @type {number} */
                    this._bpm = 60;
                    /** @type {boolean} */
                    this.isPlaying = false;
                    /** @type {number} */
                    this.maxIterations = 1 / 0;
                    var settings = this;
                    this.clock = new Clock({
                        callback: function (t) {
                            /** @type {number} */
                            var e = t - p5sound.audiocontext.currentTime;
                            if (e > 0 && settings.iterations <= settings.maxIterations) {
                                settings.callback(e);
                            }
                        },
                        frequency: this._calcFreq()
                    });
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.SoundLoop.prototype.start = function (time) {
                    var t = time || 0;
                    var now = p5sound.audiocontext.currentTime;
                    if (!this.isPlaying) {
                        this.clock.start(now + t);
                        /** @type {boolean} */
                        this.isPlaying = true;
                    }
                };
                /**
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.SoundLoop.prototype.stop = function (time) {
                    var t = time || 0;
                    var now = p5sound.audiocontext.currentTime;
                    if (this.isPlaying) {
                        this.clock.stop(now + t);
                        /** @type {boolean} */
                        this.isPlaying = false;
                    }
                };
                /**
                 * @param {number} param
                 * @return {undefined}
                 */
                Tone.SoundLoop.prototype.pause = function (param) {
                    var oneHour = param || 0;
                    var now = p5sound.audiocontext.currentTime;
                    if (this.isPlaying) {
                        this.clock.pause(now + oneHour);
                        /** @type {boolean} */
                        this.isPlaying = false;
                    }
                };
                /**
                 * @param {!Object} s
                 * @param {number} ms
                 * @return {undefined}
                 */
                Tone.SoundLoop.prototype.syncedStart = function (s, ms) {
                    var delay = ms || 0;
                    var now = p5sound.audiocontext.currentTime;
                    if (s.isPlaying) {
                        if (s.isPlaying) {
                            /** @type {number} */
                            var t = s.clock._nextTick - p5sound.audiocontext.currentTime;
                            this.clock.start(now + t);
                            /** @type {boolean} */
                            this.isPlaying = true;
                        }
                    } else {
                        s.clock.start(now + delay);
                        /** @type {boolean} */
                        s.isPlaying = true;
                        this.clock.start(now + delay);
                        /** @type {boolean} */
                        this.isPlaying = true;
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundLoop.prototype._update = function () {
                    this.clock.frequency.value = this._calcFreq();
                };
                /**
                 * @return {?}
                 */
                Tone.SoundLoop.prototype._calcFreq = function () {
                    return "number" === typeof this._interval ? (this.musicalTimeMode = false, 1 / this._interval) : "string" === typeof this._interval ? (this.musicalTimeMode = true, this._bpm / 60 / this._convertNotation(this._interval) * (this._timeSignature / 4)) : void 0;
                };
                /**
                 * @param {?} text
                 * @return {?}
                 */
                Tone.SoundLoop.prototype._convertNotation = function (text) {
                    var iemobile = text.slice(-1);
                    switch (text = Number(text.slice(0, -1)), iemobile) {
                        case "m":
                            return this._measure(text);
                        case "n":
                            return this._note(text);
                        default:
                            console.warn("Specified interval is not formatted correctly. See Tone.js timing reference for more info: https://github.com/Tonejs/Tone.js/wiki/Time");
                    }
                };
                /**
                 * @param {number} text
                 * @return {?}
                 */
                Tone.SoundLoop.prototype._measure = function (text) {
                    return text * this._timeSignature;
                };
                /**
                 * @param {?} config
                 * @return {?}
                 */
                Tone.SoundLoop.prototype._note = function (config) {
                    return this._timeSignature / config;
                };
                Object.defineProperty(Tone.SoundLoop.prototype, "bpm", {
                    get: function () {
                        return this._bpm;
                    },
                    set: function (v) {
                        if (!this.musicalTimeMode) {
                            console.warn('Changing the BPM in "seconds" mode has no effect. BPM is only relevant in musicalTimeMode when the interval is specified as a string ("2n", "4n", "1m"...etc)');
                        }
                        /** @type {!Object} */
                        this._bpm = v;
                        this._update();
                    }
                });
                Object.defineProperty(Tone.SoundLoop.prototype, "timeSignature", {
                    get: function () {
                        return this._timeSignature;
                    },
                    set: function (value) {
                        if (!this.musicalTimeMode) {
                            console.warn('Changing the timeSignature in "seconds" mode has no effect. BPM is only relevant in musicalTimeMode when the interval is specified as a string ("2n", "4n", "1m"...etc)');
                        }
                        /** @type {!Object} */
                        this._timeSignature = value;
                        this._update();
                    }
                });
                Object.defineProperty(Tone.SoundLoop.prototype, "interval", {
                    get: function () {
                        return this._interval;
                    },
                    set: function (value) {
                        /** @type {boolean} */
                        this.musicalTimeMode = "Number" !== typeof value;
                        /** @type {number} */
                        this._interval = value;
                        this._update();
                    }
                });
                Object.defineProperty(Tone.SoundLoop.prototype, "iterations", {
                    get: function () {
                        return this.clock.ticks;
                    }
                });
                Tone.SoundLoop;
            })();
            (function () {
                var e = e6484;
                /**
                 * @return {undefined}
                 */
                Tone.Compressor = function () {
                    e.call(this);
                    this.compressor = this.ac.createDynamicsCompressor();
                    this.input.connect(this.compressor);
                    this.compressor.connect(this.wet);
                };
                /** @type {!Object} */
                Tone.Compressor.prototype = Object.create(e.prototype);
                /**
                 * @param {!Object} src
                 * @param {undefined} e
                 * @param {undefined} i
                 * @param {undefined} current
                 * @param {undefined} value
                 * @param {undefined} path
                 * @return {undefined}
                 */
                Tone.Compressor.prototype.process = function (src, e, i, current, value, path) {
                    src.connect(this.input);
                    this.set(e, i, current, value, path);
                };
                /**
                 * @param {?} value
                 * @param {number} str
                 * @param {number} position
                 * @param {number} target
                 * @param {number} name
                 * @return {undefined}
                 */
                Tone.Compressor.prototype.set = function (value, str, position, target, name) {
                    if ("undefined" !== typeof value) {
                        this.attack(value);
                    }
                    if ("undefined" !== typeof str) {
                        this.knee(str);
                    }
                    if ("undefined" !== typeof position) {
                        this.ratio(position);
                    }
                    if ("undefined" !== typeof target) {
                        this.threshold(target);
                    }
                    if ("undefined" !== typeof name) {
                        this.release(name);
                    }
                };
                /**
                 * @param {number} value
                 * @param {number} type
                 * @return {?}
                 */
                Tone.Compressor.prototype.attack = function (value, type) {
                    var t = type || 0;
                    return "number" == typeof value ? (this.compressor.attack.value = value, this.compressor.attack.cancelScheduledValues(this.ac.currentTime + .01 + t), this.compressor.attack.linearRampToValueAtTime(value, this.ac.currentTime + .02 + t)) : "undefined" !== typeof value && value.connect(this.compressor.attack), this.compressor.attack.value;
                };
                /**
                 * @param {number} value
                 * @param {number} lazyEmit
                 * @return {?}
                 */
                Tone.Compressor.prototype.knee = function (value, lazyEmit) {
                    var tFromNow = lazyEmit || 0;
                    return "number" == typeof value ? (this.compressor.knee.value = value, this.compressor.knee.cancelScheduledValues(this.ac.currentTime + .01 + tFromNow), this.compressor.knee.linearRampToValueAtTime(value, this.ac.currentTime + .02 + tFromNow)) : "undefined" !== typeof value && value.connect(this.compressor.knee), this.compressor.knee.value;
                };
                /**
                 * @param {number} value
                 * @param {number} start
                 * @return {?}
                 */
                Tone.Compressor.prototype.ratio = function (value, start) {
                    var t = start || 0;
                    return "number" == typeof value ? (this.compressor.ratio.value = value, this.compressor.ratio.cancelScheduledValues(this.ac.currentTime + .01 + t), this.compressor.ratio.linearRampToValueAtTime(value, this.ac.currentTime + .02 + t)) : "undefined" !== typeof value && value.connect(this.compressor.ratio), this.compressor.ratio.value;
                };
                /**
                 * @param {number} value
                 * @param {number} e
                 * @return {?}
                 */
                Tone.Compressor.prototype.threshold = function (value, e) {
                    var t = e || 0;
                    return "number" == typeof value ? (this.compressor.threshold.value = value, this.compressor.threshold.cancelScheduledValues(this.ac.currentTime + .01 + t), this.compressor.threshold.linearRampToValueAtTime(value, this.ac.currentTime + .02 + t)) : "undefined" !== typeof value && value.connect(this.compressor.threshold), this.compressor.threshold.value;
                };
                /**
                 * @param {number} value
                 * @param {number} timeout
                 * @return {?}
                 */
                Tone.Compressor.prototype.release = function (value, timeout) {
                    var t = timeout || 0;
                    return "number" == typeof value ? (this.compressor.release.value = value, this.compressor.release.cancelScheduledValues(this.ac.currentTime + .01 + t), this.compressor.release.linearRampToValueAtTime(value, this.ac.currentTime + .02 + t)) : "undefined" !== typeof number && value.connect(this.compressor.release), this.compressor.release.value;
                };
                /**
                 * @return {?}
                 */
                Tone.Compressor.prototype.reduction = function () {
                    return this.compressor.reduction.value;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Compressor.prototype.dispose = function () {
                    e.prototype.dispose.apply(this);
                    if (this.compressor) {
                        this.compressor.disconnect();
                        delete this.compressor;
                    }
                };
                Tone.Compressor;
            })();
            (function () {
                var p5sound = master;
                var isArray = _.convertToWav;
                var ac = p5sound.audiocontext;
                /**
                 * @return {undefined}
                 */
                Tone.SoundRecorder = function () {
                    this.input = ac.createGain();
                    this.output = ac.createGain();
                    /** @type {boolean} */
                    this.recording = false;
                    /** @type {number} */
                    this.bufferSize = 1024;
                    /** @type {number} */
                    this._channels = 2;
                    this._clear();
                    this._jsNode = ac.createScriptProcessor(this.bufferSize, this._channels, 2);
                    this._jsNode.onaudioprocess = this._audioprocess.bind(this);
                    /**
                     * @return {undefined}
                     */
                    this._callback = function () {
                    };
                    this._jsNode.connect(Tone.soundOut._silentNode);
                    this.setInput();
                    p5sound.soundArray.push(this);
                };
                /**
                 * @param {number} input
                 * @return {undefined}
                 */
                Tone.SoundRecorder.prototype.setInput = function (input) {
                    this.input.disconnect();
                    /** @type {null} */
                    this.input = null;
                    this.input = ac.createGain();
                    this.input.connect(this._jsNode);
                    this.input.connect(this.output);
                    if (input) {
                        input.connect(this.input);
                    } else {
                        Tone.soundOut.output.connect(this.input);
                    }
                };
                /**
                 * @param {boolean} sFile
                 * @param {?} duration
                 * @param {!Function} callback
                 * @return {undefined}
                 */
                Tone.SoundRecorder.prototype.record = function (sFile, duration, callback) {
                    /** @type {boolean} */
                    this.recording = true;
                    if (duration) {
                        /** @type {number} */
                        this.sampleLimit = Math.round(duration * ac.sampleRate);
                    }
                    if (sFile && callback) {
                        /**
                         * @return {undefined}
                         */
                        this._callback = function () {
                            this.buffer = this._getBuffer();
                            sFile.setBuffer(this.buffer);
                            callback();
                        };
                    } else {
                        if (sFile) {
                            /**
                             * @return {undefined}
                             */
                            this._callback = function () {
                                this.buffer = this._getBuffer();
                                sFile.setBuffer(this.buffer);
                            };
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundRecorder.prototype.stop = function () {
                    /** @type {boolean} */
                    this.recording = false;
                    this._callback();
                    this._clear();
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundRecorder.prototype._clear = function () {
                    /** @type {!Array} */
                    this._leftBuffers = [];
                    /** @type {!Array} */
                    this._rightBuffers = [];
                    /** @type {number} */
                    this.recordedSamples = 0;
                    /** @type {null} */
                    this.sampleLimit = null;
                };
                /**
                 * @param {!AudioProcessingEvent} event
                 * @return {undefined}
                 */
                Tone.SoundRecorder.prototype._audioprocess = function (event) {
                    if (false !== this.recording && true === this.recording) {
                        if (this.sampleLimit && this.recordedSamples >= this.sampleLimit) {
                            this.stop();
                        } else {
                            var left = event.inputBuffer.getChannelData(0);
                            var right = event.inputBuffer.getChannelData(1);
                            this._leftBuffers.push(new Float32Array(left));
                            this._rightBuffers.push(new Float32Array(right));
                            this.recordedSamples += this.bufferSize;
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.SoundRecorder.prototype._getBuffer = function () {
                    /** @type {!Array} */
                    var buffers = [];
                    return buffers.push(this._mergeBuffers(this._leftBuffers)), buffers.push(this._mergeBuffers(this._rightBuffers)), buffers;
                };
                /**
                 * @param {!NodeList} channelBuffer
                 * @return {?}
                 */
                Tone.SoundRecorder.prototype._mergeBuffers = function (channelBuffer) {
                    /** @type {!Float32Array} */
                    var result = new Float32Array(this.recordedSamples);
                    /** @type {number} */
                    var offset = 0;
                    var lng = channelBuffer.length;
                    /** @type {number} */
                    var i = 0;
                    for (; i < lng; i++) {
                        var buffer = channelBuffer[i];
                        result.set(buffer, offset);
                        offset = offset + buffer.length;
                    }
                    return result;
                };
                /**
                 * @return {undefined}
                 */
                Tone.SoundRecorder.prototype.dispose = function () {
                    this._clear();
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    /**
                     * @return {undefined}
                     */
                    this._callback = function () {
                    };
                    if (this.input) {
                        this.input.disconnect();
                    }
                    /** @type {null} */
                    this.input = null;
                    /** @type {null} */
                    this._jsNode = null;
                };
                /**
                 * @param {!Object} data
                 * @param {?} s
                 * @return {undefined}
                 */
                Tone.prototype.saveSound = function (data, s) {
                    var view = isArray(data.buffer);
                    Tone.prototype.writeFile([view], s, "wav");
                };
            })();
            (function () {
                /**
                 * @param {number} freq1
                 * @param {number} freq2
                 * @param {number} threshold
                 * @param {number} _framesPerPeak
                 * @return {undefined}
                 */
                Tone.PeakDetect = function (freq1, freq2, threshold, _framesPerPeak) {
                    this.framesPerPeak = _framesPerPeak || 20;
                    /** @type {number} */
                    this.framesSinceLastPeak = 0;
                    /** @type {number} */
                    this.decayRate = .95;
                    this.threshold = threshold || .35;
                    /** @type {number} */
                    this.cutoff = 0;
                    /** @type {number} */
                    this.cutoffMult = 1.5;
                    /** @type {number} */
                    this.energy = 0;
                    /** @type {number} */
                    this.penergy = 0;
                    /** @type {number} */
                    this.currentValue = 0;
                    /** @type {boolean} */
                    this.isDetected = false;
                    this.f1 = freq1 || 40;
                    this.f2 = freq2 || 2e4;
                    /**
                     * @return {undefined}
                     */
                    this._onPeak = function () {
                    };
                };
                /**
                 * @param {?} fftObject
                 * @return {undefined}
                 */
                Tone.PeakDetect.prototype.update = function (fftObject) {
                    /** @type {number} */
                    var nrg = this.energy = fftObject.getEnergy(this.f1, this.f2) / 255;
                    if (nrg > this.cutoff && nrg > this.threshold && nrg - this.penergy > 0) {
                        this._onPeak();
                        /** @type {boolean} */
                        this.isDetected = true;
                        /** @type {number} */
                        this.cutoff = nrg * this.cutoffMult;
                        /** @type {number} */
                        this.framesSinceLastPeak = 0;
                    } else {
                        /** @type {boolean} */
                        this.isDetected = false;
                        if (this.framesSinceLastPeak <= this.framesPerPeak) {
                            this.framesSinceLastPeak++;
                        } else {
                            this.cutoff *= this.decayRate;
                            /** @type {number} */
                            this.cutoff = Math.max(this.cutoff, this.threshold);
                        }
                    }
                    /** @type {number} */
                    this.currentValue = nrg;
                    /** @type {number} */
                    this.penergy = nrg;
                };
                /**
                 * @param {?} callback
                 * @param {?} val
                 * @return {undefined}
                 */
                Tone.PeakDetect.prototype.onPeak = function (callback, val) {
                    var self = this;
                    /**
                     * @return {undefined}
                     */
                    self._onPeak = function () {
                        callback(self.energy, val);
                    };
                };
            })();
            (function () {
                var p5sound = master;
                /**
                 * @return {undefined}
                 */
                Tone.Gain = function () {
                    this.ac = p5sound.audiocontext;
                    this.input = this.ac.createGain();
                    this.output = this.ac.createGain();
                    /** @type {number} */
                    this.input.gain.value = .5;
                    this.input.connect(this.output);
                    p5sound.soundArray.push(this);
                };
                /**
                 * @param {number} input
                 * @return {undefined}
                 */
                Tone.Gain.prototype.setInput = function (input) {
                    input.connect(this.input);
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.Gain.prototype.connect = function (unit) {
                    var u = unit || Tone.soundOut.input;
                    this.output.connect(u.input ? u.input : u);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Gain.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                };
                /**
                 * @param {?} value
                 * @param {number} t
                 * @param {number} tFromNow
                 * @return {undefined}
                 */
                Tone.Gain.prototype.amp = function (value, t, tFromNow) {
                    t = t || 0;
                    tFromNow = tFromNow || 0;
                    var now = p5sound.audiocontext.currentTime;
                    var A = this.output.gain.value;
                    this.output.gain.cancelScheduledValues(now);
                    this.output.gain.linearRampToValueAtTime(A, now + tFromNow);
                    this.output.gain.linearRampToValueAtTime(value, now + tFromNow + t);
                };
                /**
                 * @return {undefined}
                 */
                Tone.Gain.prototype.dispose = function () {
                    var existingProxyIndex = p5sound.soundArray.indexOf(this);
                    p5sound.soundArray.splice(existingProxyIndex, 1);
                    if (this.output) {
                        this.output.disconnect();
                        delete this.output;
                    }
                    if (this.input) {
                        this.input.disconnect();
                        delete this.input;
                    }
                };
            })();
            start_flight_idx = function () {
                var p5sound = master;
                return Tone.AudioVoice = function () {
                    this.ac = p5sound.audiocontext;
                    this.output = this.ac.createGain();
                    this.connect();
                    p5sound.soundArray.push(this);
                }, Tone.AudioVoice.prototype.play = function (status, e, id, num) {
                }, Tone.AudioVoice.prototype.triggerAttack = function (name, time, unit) {
                }, Tone.AudioVoice.prototype.triggerRelease = function (unit) {
                }, Tone.AudioVoice.prototype.amp = function (value, t) {
                }, Tone.AudioVoice.prototype.connect = function (unit) {
                    var u = unit || p5sound.input;
                    this.output.connect(u.input ? u.input : u);
                }, Tone.AudioVoice.prototype.disconnect = function () {
                    this.output.disconnect();
                }, Tone.AudioVoice.prototype.dispose = function () {
                    if (this.output) {
                        this.output.disconnect();
                        delete this.output;
                    }
                }, Tone.AudioVoice;
            }();
            (function () {
                var p5sound = master;
                var OpWizard = start_flight_idx;
                var map = _.noteToFreq;
                /** @type {number} */
                var r = .15;
                /**
                 * @return {undefined}
                 */
                Tone.MonoSynth = function () {
                    OpWizard.call(this);
                    this.oscillator = new Tone.Oscillator;
                    this.env = new Tone.Envelope;
                    this.env.setRange(1, 0);
                    this.env.setExp(true);
                    this.setADSR(.02, .25, .05, .35);
                    this.oscillator.disconnect();
                    this.oscillator.connect(this.output);
                    this.env.disconnect();
                    this.env.setInput(this.output.gain);
                    /** @type {number} */
                    this.oscillator.output.gain.value = 1;
                    this.oscillator.start();
                    this.connect();
                    p5sound.soundArray.push(this);
                };
                /** @type {!Object} */
                Tone.MonoSynth.prototype = Object.create(Tone.AudioVoice.prototype);
                /**
                 * @param {!Object} scale
                 * @param {number} time
                 * @param {!Object} id
                 * @param {number} num
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.play = function (scale, time, id, num) {
                    this.triggerAttack(scale, time, ~~id);
                    this.triggerRelease(~~id + (num || r));
                };
                /**
                 * @param {!Function} name
                 * @param {number} id
                 * @param {number} time
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.triggerAttack = function (name, id, time) {
                    /** @type {number} */
                    time = ~~time;
                    var freq = map(name);
                    var target = id || .1;
                    this.oscillator.freq(freq, 0, time);
                    this.env.ramp(this.output.gain, time, target);
                };
                /**
                 * @param {string} time
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.triggerRelease = function (time) {
                    time = time || 0;
                    this.env.ramp(this.output.gain, time, 0);
                };
                /**
                 * @param {number} id
                 * @param {number} expected
                 * @param {?} options
                 * @param {number} key
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.setADSR = function (id, expected, options, key) {
                    this.env.setADSR(id, expected, options, key);
                };
                Object.defineProperties(Tone.MonoSynth.prototype, {
                    attack: {
                        get: function () {
                            return this.env.aTime;
                        },
                        set: function (value) {
                            this.env.setADSR(value, this.env.dTime, this.env.sPercent, this.env.rTime);
                        }
                    },
                    decay: {
                        get: function () {
                            return this.env.dTime;
                        },
                        set: function (options) {
                            this.env.setADSR(this.env.aTime, options, this.env.sPercent, this.env.rTime);
                        }
                    },
                    sustain: {
                        get: function () {
                            return this.env.sPercent;
                        },
                        set: function (options) {
                            this.env.setADSR(this.env.aTime, this.env.dTime, options, this.env.rTime);
                        }
                    },
                    release: {
                        get: function () {
                            return this.env.rTime;
                        },
                        set: function (value) {
                            this.env.setADSR(this.env.aTime, this.env.dTime, this.env.sPercent, value);
                        }
                    }
                });
                /**
                 * @param {?} value
                 * @param {number} t
                 * @return {?}
                 */
                Tone.MonoSynth.prototype.amp = function (value, t) {
                    var to = t || 0;
                    return "undefined" !== typeof value && this.oscillator.amp(value, to), this.oscillator.amp().value;
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.connect = function (unit) {
                    var u = unit || p5sound.input;
                    this.output.connect(u.input ? u.input : u);
                };
                /**
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.MonoSynth.prototype.dispose = function () {
                    OpWizard.prototype.dispose.apply(this);
                    if (this.env) {
                        this.env.dispose();
                    }
                    if (this.oscillator) {
                        this.oscillator.dispose();
                    }
                };
            })();
            (function () {
                var p5sound = master;
                var endOfCentralDirOffset = offset;
                var fn = _.noteToFreq;
                /**
                 * @param {!Array} num
                 * @param {number} synthVoice
                 * @return {undefined}
                 */
                Tone.PolySynth = function (num, synthVoice) {
                    /** @type {!Array} */
                    this.audiovoices = [];
                    this.notes = {};
                    /** @type {number} */
                    this._newest = 0;
                    /** @type {number} */
                    this._oldest = 0;
                    this.maxVoices = synthVoice || 8;
                    this.AudioVoice = void 0 === num ? Tone.MonoSynth : num;
                    this._voicesInUse = new endOfCentralDirOffset(0);
                    this.output = p5sound.audiocontext.createGain();
                    this.connect();
                    this._allocateVoices();
                    p5sound.soundArray.push(this);
                };
                /**
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype._allocateVoices = function () {
                    /** @type {number} */
                    var id = 0;
                    for (; id < this.maxVoices; id++) {
                        this.audiovoices.push(new this.AudioVoice);
                        this.audiovoices[id].disconnect();
                        this.audiovoices[id].connect(this.output);
                    }
                };
                /**
                 * @param {!Function} result
                 * @param {number} e
                 * @param {number} i
                 * @param {number} num
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.play = function (result, e, i, num) {
                    num = num || 1;
                    this.noteAttack(result, e, i);
                    this.noteRelease(result, i + num);
                };
                /**
                 * @param {?} i
                 * @param {undefined} m
                 * @param {undefined} s
                 * @param {undefined} type
                 * @param {undefined} index
                 * @param {number} prop
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.noteADSR = function (i, m, s, type, index, prop) {
                    var ns = p5sound.audiocontext.currentTime;
                    var t = (prop = prop || 0, ns + prop);
                    this.audiovoices[this.notes[i].getValueAtTime(t)].setADSR(m, s, type, index);
                };
                /**
                 * @param {number} prop
                 * @param {number} data
                 * @param {?} i
                 * @param {number} value
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.setADSR = function (prop, data, i, value) {
                    this.audiovoices.forEach(function (jQuery) {
                        jQuery.setADSR(prop, data, i, value);
                    });
                };
                /**
                 * @param {!Function} obj
                 * @param {number} taskid
                 * @param {number} seconds
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.noteAttack = function (obj, taskid, seconds) {
                    /** @type {number} */
                    seconds = ~~seconds;
                    var note;
                    var time = p5sound.audiocontext.currentTime + seconds;
                    var k = fn(obj);
                    var value = taskid || .1;
                    if (this.notes[k] && null !== this.notes[k].getValueAtTime(time) && this.noteRelease(k, 0), this._voicesInUse.getValueAtTime(time) < this.maxVoices) {
                        /** @type {number} */
                        note = Math.max(~~this._voicesInUse.getValueAtTime(time), 0);
                    } else {
                        note = this._oldest;
                        var nameArgs = Tone.prototype.freqToMidi(this.audiovoices[this._oldest].oscillator.freq().value);
                        this.noteRelease(nameArgs);
                        /** @type {number} */
                        this._oldest = (this._oldest + 1) % (this.maxVoices - 1);
                    }
                    this.notes[k] = new endOfCentralDirOffset;
                    this.notes[k].setValueAtTime(note, time);
                    var l = null === this._voicesInUse._searchBefore(time) ? 0 : this._voicesInUse._searchBefore(time).value;
                    if (this._voicesInUse.setValueAtTime(l + 1, time), this._updateAfter(time, 1), this._newest = note, "number" === typeof value) {
                        /** @type {number} */
                        var pwmResolution = 1 / this._voicesInUse.getValueAtTime(time) * 2;
                        value = value > pwmResolution ? pwmResolution : value;
                    }
                    this.audiovoices[note].triggerAttack(k, value, seconds);
                };
                /**
                 * @param {undefined} time
                 * @param {number} delta
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype._updateAfter = function (time, delta) {
                    if (null !== this._voicesInUse._searchAfter(time)) {
                        this._voicesInUse._searchAfter(time).value += delta;
                        var secondTime = this._voicesInUse._searchAfter(time).time;
                        this._updateAfter(secondTime, delta);
                    }
                };
                /**
                 * @param {!Function} t
                 * @param {number} isTangent
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.noteRelease = function (t, isTangent) {
                    var now = p5sound.audiocontext.currentTime;
                    var minutes = isTangent || 0;
                    var time = now + minutes;
                    if (t) {
                        var k = fn(t);
                        if (this.notes[k] && null !== this.notes[k].getValueAtTime(time)) {
                            /** @type {number} */
                            var u = Math.max(~~this._voicesInUse.getValueAtTime(time).value, 1);
                            this._voicesInUse.setValueAtTime(u - 1, time);
                            if (u > 0) {
                                this._updateAfter(time, -1);
                            }
                            this.audiovoices[this.notes[k].getValueAtTime(time)].triggerRelease(minutes);
                            this.notes[k].dispose();
                            delete this.notes[k];
                            /** @type {number} */
                            this._newest = 0 === this._newest ? 0 : (this._newest - 1) % (this.maxVoices - 1);
                        } else {
                            console.warn("Cannot release a note that is not already playing");
                        }
                    } else {
                        var i;
                        for (i in this.audiovoices.forEach(function (min) {
                            min.triggerRelease(minutes);
                        }), this._voicesInUse.setValueAtTime(0, time), this.notes) {
                            this.notes[i].dispose();
                            delete this.notes[i];
                        }
                    }
                };
                /**
                 * @param {!Object} unit
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.connect = function (unit) {
                    var u = unit || p5sound.input;
                    this.output.connect(u.input ? u.input : u);
                };
                /**
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.disconnect = function () {
                    if (this.output) {
                        this.output.disconnect();
                    }
                };
                /**
                 * @return {undefined}
                 */
                Tone.PolySynth.prototype.dispose = function () {
                    this.audiovoices.forEach(function (backdropRef) {
                        backdropRef.dispose();
                    });
                    if (this.output) {
                        this.output.disconnect();
                        delete this.output;
                    }
                };
            })();
            (function () {
                /**
                 * @param {number} amount
                 * @return {?}
                 */
                function makeDistortionCurve(amount) {
                    var x;
                    /** @type {number} */
                    var k = "number" === typeof amount ? amount : 50;
                    /** @type {number} */
                    var n = 44100;
                    /** @type {!Float32Array} */
                    var curve = new Float32Array(n);
                    /** @type {number} */
                    var r = Math.PI / 180;
                    /** @type {number} */
                    var j = 0;
                    for (; j < n; ++j) {
                        /** @type {number} */
                        x = 2 * j / n - 1;
                        /** @type {number} */
                        curve[j] = (3 + k) * x * 20 * r / (Math.PI + k * Math.abs(x));
                    }
                    return curve;
                }

                var e = e6484;
                /**
                 * @param {number} amount
                 * @param {string} oversample
                 * @return {undefined}
                 */
                Tone.Distortion = function (amount, oversample) {
                    if (e.call(this), "undefined" === typeof amount && (amount = .25), "number" !== typeof amount) {
                        throw new Error("amount must be a number");
                    }
                    if ("undefined" === typeof oversample && (oversample = "2x"), "string" !== typeof oversample) {
                        throw new Error("oversample must be a String");
                    }
                    var curveAmount = Tone.prototype.map(amount, 0, 1, 0, 2e3);
                    this.waveShaperNode = this.ac.createWaveShaper();
                    this.amount = curveAmount;
                    this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
                    /** @type {string} */
                    this.waveShaperNode.oversample = oversample;
                    this.input.connect(this.waveShaperNode);
                    this.waveShaperNode.connect(this.wet);
                };
                /** @type {!Object} */
                Tone.Distortion.prototype = Object.create(e.prototype);
                /**
                 * @param {!Object} src
                 * @param {undefined} e
                 * @param {undefined} tags
                 * @return {undefined}
                 */
                Tone.Distortion.prototype.process = function (src, e, tags) {
                    src.connect(this.input);
                    this.set(e, tags);
                };
                /**
                 * @param {!Object} obj
                 * @param {string} key
                 * @return {undefined}
                 */
                Tone.Distortion.prototype.set = function (obj, key) {
                    if (obj) {
                        var curveAmount = Tone.prototype.map(obj, 0, 1, 0, 2e3);
                        this.amount = curveAmount;
                        this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
                    }
                    if (key) {
                        /** @type {string} */
                        this.waveShaperNode.oversample = key;
                    }
                };
                /**
                 * @return {?}
                 */
                Tone.Distortion.prototype.getAmount = function () {
                    return this.amount;
                };
                /**
                 * @return {?}
                 */
                Tone.Distortion.prototype.getOversample = function () {
                    return this.waveShaperNode.oversample;
                };
                /**
                 * @return {undefined}
                 */
                Tone.Distortion.prototype.dispose = function () {
                    e.prototype.dispose.apply(this);
                    if (this.waveShaperNode) {
                        this.waveShaperNode.disconnect();
                        /** @type {null} */
                        this.waveShaperNode = null;
                    }
                };
            })();
            (function () {
                var tag = master;
            })();
        });
    }
}]);
