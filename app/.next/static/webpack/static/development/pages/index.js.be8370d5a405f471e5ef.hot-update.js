webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CreateOrder.js":
/*!***********************************!*\
  !*** ./components/CreateOrder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createKetQuas; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "../node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "../node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "../node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "../node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_laSoAdapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/laSoAdapter */ "./lib/laSoAdapter.js");
/* harmony import */ var _lib_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/form */ "./lib/form.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Add */ "../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Edit */ "../node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Search */ "../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Customer */ "./components/Customer.js");
/* harmony import */ var _Customers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Customers */ "./components/Customers.js");
/* harmony import */ var _orderItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orderItem */ "./components/orderItem.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Products */ "./components/Products.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");



var _jsxFileName = "/home/huy/apps/loaloa/app/components/CreateOrder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation(\n    $cung: CungWhereUniqueInput\n    $cungVi: CungViWhereUniqueInput\n    $chinhTinhs: [TinhWhereUniqueInput]\n    $phuTinhs: [PhuTinhWhereUniqueInput]\n  ) {\n    createKetQua(\n      data: {\n        cung: { connect: $cung }\n        cungVi: { connect: $cungVi }\n        chinhTinh: { connect: $chinhTinhs, disconnectAll: true }\n        phuTinh: { connect: $phuTinhs, disconnectAll: true }\n      }\n    ) {\n      id\n      cung {\n        name\n      }\n      loiGiais: ketQua {\n        id\n        cung {\n          name\n        }\n        chinhTinh {\n          id\n          name\n        }\n        phuTinh {\n          id\n          name\n        }\n        giai\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}























var createKetQuaMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["gql"])(_templateObject());
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      height: "70vh"
    },
    icon: {
      marginRight: theme.spacing(1)
    }
  };
});
function createKetQuas(_ref) {
  var onCreate = _ref.onCreate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      customer = _useState[0],
      setCustomer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      orderItems = _useState3[0],
      setOrderItems = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sale = _useState4[0],
      setSale = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      drawerStatus = _useState5[0],
      setDrawerStatus = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      order = _useState6[0],
      setOrder = _useState6[1];

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(createKetQuaMutation),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      createKetQua = _useMutation2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      items = _useState7[0],
      setItems = _useState7[1]; //


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState8[0],
      setLoading = _useState8[1]; // alert


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      alertOpen = _React$useState2[0],
      setAlertOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      alertMessage = _React$useState4[0],
      setAlertMessage = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {});

  function handleSubmit() {
    var variables, _ref2, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            variables = {};
            _context.prev = 2;
            _context.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(createKetQua({
              variables: variables
            }));

          case 5:
            _ref2 = _context.sent;
            data = _ref2.data;
            onCreate(data === null || data === void 0 ? void 0 : data.createKetQua);
            setLoading(false);
            _context.next = 18;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            setAlertMessage(Object(_lib_form__WEBPACK_IMPORTED_MODULE_15__["getErrorMessage"])(_context.t0));
            setAlertOpen(true);
            setLoading(false);
            _context.next = 18;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(router.push("/"));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 11]]);
  }

  function alertClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  }

  var classes = useStyles();

  function handleCreate() {
    setDrawerStatus(true);
  }

  function toggleDrawer(event) {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerStatus(!drawerStatus);
  }

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Table"], {
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_Customers__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: function onClick(_ref3) {
      var customer = _ref3.customer;
      console.log(customer);
      setCustomer(customer);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "T\xEAn"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "\u0110i\u1EC7n tho\u1EA1i"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "\u0110\u1ECBa ch\u1EC9"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, customer ? [customer].map(function (product) {
    var _product$id;

    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableRow"], {
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, (_product$id = product.id) === null || _product$id === void 0 ? void 0 : _product$id.toString().slice(0, 4), "..."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, product.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, product.phone), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, product.address));
  }) : null)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Table"], {
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_Products__WEBPACK_IMPORTED_MODULE_23__["default"], {
    onClick: function onClick(_ref4) {
      var product = _ref4.product;
      setProducts(products.concat([product]));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "T\xEAn"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "SL"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Ni\xEAm y\u1EBFt"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Gi\u1EA3m (-)"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, (products === null || products === void 0 ? void 0 : products.length) ? products.map(function (product) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableRow"], {
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("img", {
      style: {
        maxWidth: "100%",
        maxHeight: 40
      },
      src: product.image ? product.image.publicUrl : product.images[0].file.publicUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, product.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, product.quantity), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_24__["default"])(price, 0)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TextField"], {
      align: "right",
      onChange: function onChange(event) {},
      InputProps: {
        value: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_24__["default"])(product.sale, 0)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TableCell"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_24__["default"])(product.price - product.sale, 0)));
  }) : null))))));
}

/***/ })

})
//# sourceMappingURL=index.js.be8370d5a405f471e5ef.hot-update.js.map