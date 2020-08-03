webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Products.js":
false,

/***/ "./components/products.js":
/*!********************************!*\
  !*** ./components/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
var _jsxFileName = "/home/huy/apps/loaloa/app/components/products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProductItem(_ref) {
  var products = _ref.products;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "OK") // <TableContainer>
  //   <Table aria-label="simple table">
  //     <TableHead>
  //       <TableRow>
  //         <TableCell></TableCell>
  //         <TableCell>Tên</TableCell>
  //         <TableCell align="right">SL</TableCell>
  //         <TableCell align="right">Bán</TableCell>
  //         <TableCell align="right">Hiện tại</TableCell>
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {products?.length
  //         ? products.map((product) => (
  //             <TableRow key={product.id}>
  //               <TableCell component="th" scope="row">
  //                 <img
  //                   style={{ maxWidth: "100%", maxHeight: 80 }}
  //                   src={
  //                     product.image
  //                       ? product.image.publicUrl
  //                       : product.images[0].file.publicUrl
  //                   }
  //                 />
  //               </TableCell>
  //               <TableCell>{product.product.name}</TableCell>
  //               <TableCell align="right">{product.quantity}</TableCell>
  //               <TableCell align="right">
  //                 {formatMoney(product.price, 0)}
  //               </TableCell>
  //               <TableCell align="right" color="textSecondary">
  //                 <Typography variant="body2" color="textSecondary">
  //                   {formatMoney(product.product.price, 0)}
  //                 </Typography>
  //               </TableCell>
  //             </TableRow>
  //           ))
  //         : null}
  //     </TableBody>
  //   </Table>
  // </TableContainer>
  ;
}

/***/ }),

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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/orders */ "./components/orders.js");
/* harmony import */ var _components_createOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/createOrder */ "./components/createOrder.js");
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/products */ "./components/products.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/huy/apps/loaloa/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  return __jsx(_components_workFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components_products__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_createOrder__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_orders__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.fc63b4324883cd4060b7.hot-update.js.map