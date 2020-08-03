webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_workFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/workFrame */ "./components/workFrame.js");
/* harmony import */ var _components_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/orders */ "./components/orders.js");
/* harmony import */ var _components_createOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createOrder */ "./components/createOrder.js");
/* harmony import */ var _components_getProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/getProduct */ "./components/getProduct.js");
/* harmony import */ var _components_getCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getCustomer */ "./components/getCustomer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/huy/apps/loaloa/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      drawerStatus = _useState[0],
      setDrawerStatus = _useState[1];

  function handleCreate() {
    setDrawerStatus(true);
  }

  function toggleDrawer(event) {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerStatus(!drawerStatus);
  }

  return __jsx(_components_workFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Drawer"], {
    open: drawerStatus,
    onClose: toggleDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_createOrder__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleCreate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Create")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_orders__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.0cd23f1ee0861c09eaca.hot-update.js.map