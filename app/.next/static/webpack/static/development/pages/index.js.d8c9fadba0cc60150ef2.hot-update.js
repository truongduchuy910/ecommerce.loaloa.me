webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/products.js":
/*!********************************!*\
  !*** ./components/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "../node_modules/@apollo/client/index.js");

var _jsxFileName = "/home/huy/apps/loaloa/app/components/products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($limit: Int) {\n    allProducts(first: $limit) {\n      id\n      image {\n        publicUrl\n      }\n      images {\n        file {\n          publicUrl\n        }\n      }\n      name\n      price\n      sale\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var query = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  };
});
function ProductItem(_ref) {
  var products = _ref.products;
  var classes = useStyles();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(query, {
    variables: {
      limit: 6
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error,
      fetchMore = _useQuery.fetchMore,
      refetch = _useQuery.refetch;

  var allProducts = data === null || data === void 0 ? void 0 : data.allProducts;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "OK")) // <TableContainer>
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

/***/ })

})
//# sourceMappingURL=index.js.d8c9fadba0cc60150ef2.hot-update.js.map