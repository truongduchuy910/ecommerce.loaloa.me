webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/orderItem.js":
/*!*********************************!*\
  !*** ./components/orderItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
var _jsxFileName = "/home/huy/apps/loaloa/app/components/orderItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function OrderItem(_ref) {
  var items = _ref.items;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "T\xEAn"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "SL"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Gi\xE1"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Hi\u1EC7n t\u1EA1i"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, (items === null || items === void 0 ? void 0 : items.length) ? items.map(function (item) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      style: {
        maxWidth: "100%",
        maxHeight: 80
      },
      src: item.product.image ? item.product.image.publicUrl : item.product.images[0].file.publicUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.product.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.quantity), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__["default"])(item.price, 0)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      align: "right",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__["default"])(item.product.price, 0))));
  }) : null)));
}

/***/ })

})
//# sourceMappingURL=index.js.59962c70a7651a58a15d.hot-update.js.map