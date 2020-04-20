module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// CONCATENATED MODULE: ./src/Copyright.js
var __jsx = external_react_default.a.createElement;



function Copyright() {
  return __jsx(Typography_default.a, {
    style: {
      margin: 7
    },
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", __jsx(Link_default.a, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Loaloa.tech"), " ", new Date().getFullYear(), ".");
}
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__("SMlj");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./src/Layout.js
var Layout = __webpack_require__("eUpb");

// EXTERNAL MODULE: external "react-facebook"
var external_react_facebook_ = __webpack_require__("ekOq");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;










function Index({
  email,
  id
}) {
  let {
    0: status,
    1: updateStatus
  } = Object(external_react_["useState"])(false);
  return pages_jsx(Layout["a" /* default */], null, pages_jsx(Grid_default.a, {
    container: true,
    spacing: 0,
    justify: "center",
    alignItems: "center"
  }, pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    style: {
      backgroundColor: "#212121"
    }
  }, pages_jsx(Container_default.a, {
    maxWidth: "lg"
  }, pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center"
  }, pages_jsx(Grid_default.a, {
    item: true,
    sm: 7,
    md: 6
  }, pages_jsx(Typography_default.a, {
    variant: "h5",
    style: {
      marginTop: 21,
      marginBottom: 21,
      color: "white",
      fontWeight: 800
    }
  }, "Loa Loa Team"), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary"
  }, "Xin Ch\xE0o, ", email, pages_jsx("br", null), pages_jsx(Button_default.a, {
    href: "/admin",
    variant: "outlined",
    color: "secondary",
    style: {
      marginTop: 21,
      marginBottom: 21
    }
  }, "\u0110i \u0111\xEAn qu\u1EA3n l\xED s\u1EA3n ph\u1EA9m")), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary",
    style: {
      marginBottom: 21
    }
  }, "M\xE3 nh\u1EADn th\xF4ng b\xE1o c\u1EE7a b\u1EA1n l\xE0: ", pages_jsx("code", null, id), pages_jsx("br", null), "G\u1EEDi m\xE3 tr\xEAn v\xE0o tin nh\u1EAFn."), pages_jsx(external_react_facebook_["MessageUs"], {
    messengerAppId: "335701763968445",
    pageId: "395622761034219"
  })), pages_jsx(Grid_default.a, {
    item: true,
    sm: 5,
    md: 6
  }, pages_jsx("img", {
    style: {
      width: "100%",
      padding: 21
    },
    src: "/img/development.png"
  }))))), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, pages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    style: {
      position: "absolute",
      zIndex: -1
    }
  }, pages_jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
  }))), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    container: true,
    spacing: 2,
    justify: "center",
    alignItems: "center"
  }, pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 5,
    md: 4,
    lg: 3
  }, pages_jsx("img", {
    style: {
      width: "100%",
      padding: 21
    },
    src: "/img/coder.png"
  })), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 5,
    md: 12
  }, pages_jsx(Typography_default.a, {
    variant: "h6",
    align: "center",
    style: {
      color: "white"
    }
  }, "Li\xEAn H\u1EC7"), pages_jsx(Typography_default.a, {
    variant: "body1",
    align: "center",
    color: "secondary"
  }, "Tr\u1EA7n Ng\u1ECDc Huy", pages_jsx("br", null), "100 Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, Li\xEAn Chi\u1EC3u, \u0110\xE0 N\u1EB5ng.", pages_jsx("br", null), "0332813077", pages_jsx("br", null), "truongduchuy910@gmail.com"), pages_jsx(Copyright, null)))));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(auth["c" /* withAuthSync */])(Index));

/***/ }),

/***/ "SMlj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signup; });
/* unused harmony export auth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dAJ7");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getGraphUri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iiV7");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const login = ({
  token,
  id,
  email
}) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("id", id, {
    path: ""
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("email", email, {
    path: ""
  });
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", token, {
    path: ""
  });
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
};
const signup = () => {
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
};
const auth = ctx => {
  const {
    token,
    id,
    email
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
  console.log(token, email);

  if (!token) {
    if (ctx.req) {
      ctx.res.writeHead(302, {
        Location: "/login"
      });
      ctx.res.end();
    } else next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
  }

  return {
    token,
    id,
    email
  };
};

const getDisplayName = Component => Component.displayName || Component.name || "Component";

const withAuthSync = WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(ctx) {
      const {
        token,
        id,
        email
      } = auth(ctx);
      const client = new graphql_request__WEBPACK_IMPORTED_MODULE_4__["GraphQLClient"](Object(_utils_getGraphUri__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ctx), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      ctx.client = client;
      ctx.id = id;
      ctx.email = email;
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      return _objectSpread({}, componentProps, {
        client,
        token,
        id,
        email
      });
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  }, _defineProperty(_class, "displayName", `withAuthSync(${getDisplayName(WrappedComponent)})`), _temp;
};

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "eUpb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("s051");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ekOq");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Layout(props) {
  return __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_4__["FacebookProvider"], {
    appId: "335701763968445",
    chatSupport: true
  }, __jsx(CustomChat, {
    pageId: "395622761034219",
    minimized: false
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      backgroundColor: "rgb(250, 251, 252)"
    }
  }, props.children));
}

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "ekOq":
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),

/***/ "iiV7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (ctx => {
  let a = "";
  let uri = "";
  if (false) {}else a = "https://";

  if (ctx && ctx.req) {
    uri = a + ctx.req.headers.host + "/admin/api";
  } else {
    uri = window.location.origin + "/admin/api";
  }

  return uri;
});

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });