webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Order.js":
/*!*****************************!*\
  !*** ./components/Order.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Order; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "../node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Customer */ "./components/Customer.js");
/* harmony import */ var _orderItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orderItem */ "./components/orderItem.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "../node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/form */ "./lib/form.js");



var _jsxFileName = "/home/huy/apps/loaloa/app/components/Order.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation($id: ID!, $step: Int) {\n    updateOrder(id: $id, data: { step: $step }) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var steps = ["Đặt", "Xử lí", "Giao", "Thanh toán"];
var updateStepQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject());
var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(function (theme) {
  return {
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    btn: {
      marginTop: theme.spacing(2)
    }
  };
});
function Order(_ref) {
  var order = _ref.order,
      nextStep = _ref.nextStep;
  var classes = useStyles();

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(updateStepQuery),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      updateStep = _useMutation2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      errorMsg = _useState[0],
      setErrorMsg = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  function handleNext(_ref2) {
    var id, step, _ref3, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleNext$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.id, step = _ref2.step;
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(updateStep({
              variables: {
                id: id,
                step: step
              }
            }));

          case 4:
            _ref3 = _context.sent;
            data = _ref3.data;
            nextStep();
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            setErrorMsg(Object(_lib_form__WEBPACK_IMPORTED_MODULE_10__["getErrorMessage"])(_context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Stepper"], {
    activeStep: order === null || order === void 0 ? void 0 : order.step,
    alternativeLabel: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, steps.map(function (label) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Step"], {
      key: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["StepLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, label));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u0110\u01A1n:"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "C\u1EADp nh\u1EADt l\xFAc:", " ", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, new Date(order === null || order === void 0 ? void 0 : order.time).toLocaleString("tr-TR"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Id: ", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "#", order === null || order === void 0 ? void 0 : order.id)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "T\u1ED5ng: ", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__["default"])(order === null || order === void 0 ? void 0 : order.total, 0))), __jsx(_Customer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    customer: order === null || order === void 0 ? void 0 : order.customer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_orderItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: order === null || order === void 0 ? void 0 : order.items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), order.step < 4 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    variant: "contained",
    color: "primary",
    className: classes.btn,
    onClick: function onClick() {
      return handleNext({
        id: order.id,
        step: order.step + 1
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u0110\xE3 ", steps[order.step], " xong") : null);
}

/***/ })

})
//# sourceMappingURL=index.js.0769239024787eb58918.hot-update.js.map