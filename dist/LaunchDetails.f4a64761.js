// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/Error/Error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// STYLES
var Error = function Error() {
  return /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    justifyContent: "center",
    wrap: "wrap",
    align: "center",
    gridGap: "1.5rem",
    py: "2rem"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "2xl",
    color: "red.500"
  }, "Something went wrong."));
};

var _default = Error;
exports.default = _default;
},{"react":"../node_modules/react/index.js","@chakra-ui/react":"../node_modules/@chakra-ui/react/dist/esm/index.js"}],"components/LanuchDetails/Details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LazyLoadImg = _interopRequireDefault(require("../LazyLoadImg/LazyLoadImg"));

var _react2 = require("@chakra-ui/react");

var _icons = require("@chakra-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COMPONENTS
// STYLES
var Details = function Details(_ref) {
  var launch = _ref.launch;
  return /*#__PURE__*/_react.default.createElement(_react2.Grid, {
    templateColumns: ['repeat(1, 1fr)', null, 'repeat(12, 1fr)'],
    gap: "1rem"
  }, /*#__PURE__*/_react.default.createElement(_react2.GridItem, {
    colStart: [1, null, 1],
    colSpan: [null, null, 4]
  }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    maxW: "100%",
    boxShadow: "md",
    borderRadius: "0.5rem"
  }, /*#__PURE__*/_react.default.createElement(_react2.AspectRatio, {
    ratio: {
      base: 4 / 3,
      md: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_LazyLoadImg.default, {
    src: launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : launch.links.mission_patch,
    alt: launch.mission_name
  })))), /*#__PURE__*/_react.default.createElement(_react2.GridItem, {
    colStart: [1, null, 5],
    colSpan: [null, null, 8]
  }, /*#__PURE__*/_react.default.createElement(_react2.Container, {
    p: "1rem",
    maxW: "100%",
    border: "1px",
    boxShadow: "md",
    borderRadius: ".5rem"
  }, /*#__PURE__*/_react.default.createElement(_react2.Stack, {
    direction: "column",
    spacing: "1rem"
  }, /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.Heading, null, launch.mission_name), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "gray.600",
    fontSize: "md"
  }, "\uD83D\uDE80 ", launch.rocket.rocket_name, " | ", new Date(launch.launch_date_utc).toLocaleString())), /*#__PURE__*/_react.default.createElement(_react2.Box, {
    maxW: "xl"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, null, launch.details)), /*#__PURE__*/_react.default.createElement(_react2.Divider, null), /*#__PURE__*/_react.default.createElement(_react2.HStack, {
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "gray.600",
    fontWeight: "bold"
  }, "Launch Site"), /*#__PURE__*/_react.default.createElement(_react2.Spacer, null), /*#__PURE__*/_react.default.createElement(_react2.Text, null, launch.launch_site.site_name_long)), /*#__PURE__*/_react.default.createElement(_react2.Divider, null), /*#__PURE__*/_react.default.createElement(_react2.HStack, {
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "gray.600",
    fontWeight: "bold"
  }, "Article"), /*#__PURE__*/_react.default.createElement(_react2.Spacer, null), /*#__PURE__*/_react.default.createElement(_react2.Link, {
    href: launch.links.article_link,
    isExternal: true
  }, "Article Link ", /*#__PURE__*/_react.default.createElement(_icons.ExternalLinkIcon, null))), /*#__PURE__*/_react.default.createElement(_react2.Divider, null), /*#__PURE__*/_react.default.createElement(_react2.HStack, null, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "gray.600",
    fontWeight: "bold"
  }, "Video"), /*#__PURE__*/_react.default.createElement(_react2.Spacer, null), /*#__PURE__*/_react.default.createElement(_react2.Link, {
    href: launch.links.video_link,
    isExternal: true
  }, "Video ", /*#__PURE__*/_react.default.createElement(_icons.ExternalLinkIcon, null))), /*#__PURE__*/_react.default.createElement(_react2.Divider, null), /*#__PURE__*/_react.default.createElement(_react2.Stack, null, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "gray.600",
    fontWeight: "bold"
  }, "Pictures"), /*#__PURE__*/_react.default.createElement(_react2.Grid, {
    templateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    autoRows: "200px",
    gap: "1rem",
    autoFlow: "dense"
  }, launch.links.flickr_images.map(function (img) {
    return /*#__PURE__*/_react.default.createElement(_react2.AspectRatio, {
      ratio: 4 / 3,
      key: img
    }, /*#__PURE__*/_react.default.createElement(_LazyLoadImg.default, {
      src: img,
      alt: launch.mission_name
    }));
  })))))));
};

var _default = Details;
exports.default = _default;
},{"react":"../node_modules/react/index.js","../LazyLoadImg/LazyLoadImg":"components/LazyLoadImg/LazyLoadImg.js","@chakra-ui/react":"../node_modules/@chakra-ui/react/dist/esm/index.js","@chakra-ui/icons":"../node_modules/@chakra-ui/icons/dist/esm/index.js"}],"components/LanuchDetails/LaunchDetails.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LaunchDetails;

var _react = _interopRequireDefault(require("react"));

var _graphql = require("../../gql/graphql");

var _Loading = _interopRequireDefault(require("../Loading/Loading"));

var _Error = _interopRequireDefault(require("../Error/Error"));

var _Details = _interopRequireDefault(require("./Details"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// STYLES
// COMPONENTS
function LaunchDetails(props) {
  var _useLaunchDetailsQuer = (0, _graphql.useLaunchDetailsQuery)({
    variables: {
      id: props.launchID
    }
  }),
      loading = _useLaunchDetailsQuer.loading,
      data = _useLaunchDetailsQuer.data,
      error = _useLaunchDetailsQuer.error;

  var component = null;
  if (loading) component = /*#__PURE__*/_react.default.createElement(_Loading.default, null);else if (error) component = /*#__PURE__*/_react.default.createElement(_Error.default, null);else component = /*#__PURE__*/_react.default.createElement(_Details.default, {
    launch: data.launch
  });
  return component;
}
},{"react":"../node_modules/react/index.js","../../gql/graphql":"gql/graphql.tsx","../Loading/Loading":"components/Loading/Loading.js","../Error/Error":"components/Error/Error.js","./Details":"components/LanuchDetails/Details.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60782" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/LaunchDetails.f4a64761.js.map