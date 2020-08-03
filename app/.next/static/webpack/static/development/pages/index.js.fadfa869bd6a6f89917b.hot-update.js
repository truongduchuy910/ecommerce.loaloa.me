webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/orders.js":
/*!******************************!*\
  !*** ./components/orders.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orders; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "../node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "../node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "../node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "../node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "../node_modules/@apollo/client/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Link */ "../node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer */ "./components/customer.js");
/* harmony import */ var _orderItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orderItem */ "./components/orderItem.js");




var _jsxFileName = "/home/huy/apps/loaloa/app/components/orders.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query($limit: Int, $skip: Int) {\n    allOrders(orderBy: \"time_DESC\", first: $limit, skip: $skip) {\n      id\n      customer {\n        id\n        name\n        phone\n        address\n      }\n      items {\n        id\n        price\n        product {\n          id\n          name\n          price\n          sale\n          image {\n            publicUrl\n          }\n          images {\n            file {\n              publicUrl\n            }\n          }\n        }\n        quantity\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var query = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["gql"])(_templateObject());
var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default()(function (theme) {
  return {
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 350
    }
  };
});
function orders(_ref) {
  var newOrder = _ref.newOrder,
      setNewOrder = _ref.setNewOrder;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      moreResult = _useState[0],
      setMore = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      newKQ = _useState2[0],
      setNewKQ = _useState2[1];

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["useQuery"])(query, {
    variables: {
      limit: 1,
      skip: 0
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error,
      fetchMore = _useQuery.fetchMore,
      refetch = _useQuery.refetch;

  var allOrders = data === null || data === void 0 ? void 0 : data.allOrders;

  if (newOrder && !newKQ) {
    setNewKQ(newOrder);
    setNewOrder(false);
    refetch();
  }

  function loadingMore() {
    var count = data === null || data === void 0 ? void 0 : data.allOrders.length;
    fetchMore({
      variables: {
        limit: 12,
        skip: count
      },
      updateQuery: function updateQuery(prev, _ref2) {
        var fetchMoreResult = _ref2.fetchMoreResult;

        if (!fetchMoreResult) {
          setMore(false);
          return prev;
        }

        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, prev, {
          allOrders: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev.allOrders), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fetchMoreResult.allOrders))
        });
      }
    });
  } // step


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = ["Select master blaster campaign settings", "Create an ad group", "Create an ad"];

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return !loading ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, (allOrders === null || allOrders === void 0 ? void 0 : allOrders.length) ? allOrders === null || allOrders === void 0 ? void 0 : allOrders.map(function (order) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      key: order.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(Stepper, {
      activeStep: activeStep,
      alternativeLabel: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, steps.map(function (label) {
      return __jsx(Step, {
        key: label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(StepLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, label));
    })), "Đơn: ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "#", order === null || order === void 0 ? void 0 : order.id), __jsx(_customer__WEBPACK_IMPORTED_MODULE_16__["default"], {
      customer: order === null || order === void 0 ? void 0 : order.customer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "T\u1ED5ng: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_15__["default"])(order === null || order === void 0 ? void 0 : order.total, 0), " \u0111"), __jsx(_orderItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
      items: order === null || order === void 0 ? void 0 : order.items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })));
  }) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Danh s\xE1ch k\u1EBFt qu\u1EA3 tr\u1ED7ng."), moreResult && (allOrders === null || allOrders === void 0 ? void 0 : allOrders.length) ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: loadingMore,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Xem th\xEAm") : null) : __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animation: "wave",
    variant: "rect",
    height: "60vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.fadfa869bd6a6f89917b.hot-update.js.map