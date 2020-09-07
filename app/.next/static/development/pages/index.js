(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../node_modules/can-use-dom/index.js":
/*!********************************************!*\
  !*** ../node_modules/can-use-dom/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),

/***/ "../node_modules/next/dist/build/polyfills/object-assign.js":
/*!************************************************************************************************************************!*\
  !*** delegated ../node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_99873879131b459af989 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_99873879131b459af989 */ "dll-reference dll_99873879131b459af989"))("../node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fhuy%2Fapps%2Fecommerce%2Fapp%2Fpages%2Findex.js!./":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fhuy%2Fapps%2Fecommerce%2Fapp%2Fpages%2Findex.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/prop-types/checkPropTypes.js from dll-reference dll_99873879131b459af989 ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_99873879131b459af989 */ "dll-reference dll_99873879131b459af989"))("../node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************************************************************!*\
  !*** delegated ../node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_99873879131b459af989 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_99873879131b459af989 */ "dll-reference dll_99873879131b459af989"))("../node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "../node_modules/react-facebook/lib/Comments.js":
/*!******************************************************!*\
  !*** ../node_modules/react-facebook/lib/Comments.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Comments =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Comments, _PureComponent);

  function Comments() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Comments.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        colorScheme = _this$props.colorScheme,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        numPosts = _this$props.numPosts,
        orderBy = _this$props.orderBy,
        width = _this$props.width,
        children = _this$props.children,
        mobile = _this$props.mobile;
    return _react.default.createElement("div", {
      className: "fb-comments",
      "data-colorscheme": colorScheme,
      "data-numposts": numPosts,
      "data-href": href,
      "data-order-by": orderBy,
      "data-width": width,
      "data-skin": colorScheme,
      "data-mobile": mobile
    }, children);
  };

  return Comments;
}(_react.PureComponent);

(0, _defineProperty2.default)(Comments, "defaultProps", {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Comments, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Comments.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/CommentsCount.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-facebook/lib/CommentsCount.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var CommentsCount =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(CommentsCount, _PureComponent);

  function CommentsCount() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CommentsCount.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        children = _this$props.children;
    return _react.default.createElement("span", {
      className: "fb-comments-count",
      "data-href": href
    }, children);
  };

  return CommentsCount;
}(_react.PureComponent);

(0, _defineProperty2.default)(CommentsCount, "defaultProps", {
  href: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(CommentsCount, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=CommentsCount.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/CustomChat.js":
/*!********************************************************!*\
  !*** ../node_modules/react-facebook/lib/CustomChat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var CustomChat =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(CustomChat, _PureComponent);

  function CustomChat() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CustomChat.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        minimized = _this$props.minimized,
        children = _this$props.children,
        pageId = _this$props.pageId,
        themeColor = _this$props.themeColor,
        loggedInGreeting = _this$props.loggedInGreeting,
        loggedOutGreeting = _this$props.loggedOutGreeting,
        dataRef = _this$props.dataRef;
    return _react.default.createElement("div", {
      className: "fb-customerchat",
      page_id: pageId,
      minimized: minimized,
      theme_color: themeColor,
      logged_in_greeting: loggedInGreeting,
      logged_out_greeting: loggedOutGreeting,
      "data-ref": dataRef
    }, children);
  };

  return CustomChat;
}(_react.PureComponent);

(0, _defineProperty2.default)(CustomChat, "defaultProps", {
  minimized: undefined,
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  dataRef: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(CustomChat, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=CustomChat.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/EmbeddedPost.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-facebook/lib/EmbeddedPost.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var EmbeddedPost =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(EmbeddedPost, _PureComponent);

  function EmbeddedPost() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = EmbeddedPost.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        href = _this$props.href,
        width = _this$props.width,
        showText = _this$props.showText,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: "fb-post",
      "data-href": href,
      "data-width": width,
      "data-show-text": showText
    }, children);
  };

  return EmbeddedPost;
}(_react.PureComponent);

(0, _defineProperty2.default)(EmbeddedPost, "defaultProps", {
  width: undefined,
  showText: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(EmbeddedPost, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=EmbeddedPost.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/EmbeddedVideo.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-facebook/lib/EmbeddedVideo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var EmbeddedVideo =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(EmbeddedVideo, _PureComponent);

  function EmbeddedVideo() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = EmbeddedVideo.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        href = _this$props.href,
        width = _this$props.width,
        showText = _this$props.showText,
        allowFullScreen = _this$props.allowFullScreen,
        autoPlay = _this$props.autoPlay,
        showCaptions = _this$props.showCaptions,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: "fb-video",
      "data-href": href,
      "data-width": width,
      "data-show-text": showText,
      "data-show-captions": showCaptions,
      "data-autoplay": autoPlay,
      "data-allowfullscreen": allowFullScreen
    }, children);
  };

  return EmbeddedVideo;
}(_react.PureComponent);

(0, _defineProperty2.default)(EmbeddedVideo, "defaultProps", {
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(EmbeddedVideo, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=EmbeddedVideo.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Facebook.js":
/*!******************************************************!*\
  !*** ../node_modules/react-facebook/lib/Facebook.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.Method = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _LoginStatus = _interopRequireDefault(__webpack_require__(/*! ./constants/LoginStatus */ "../node_modules/react-facebook/lib/constants/LoginStatus.js"));

var Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete'
};
exports.Method = Method;

var Facebook =
/*#__PURE__*/
function () {
  function Facebook(options) {
    if (options === void 0) {
      options = {};
    }

    this.options = (0, _extends2.default)({
      domain: 'connect.facebook.net',
      version: 'v3.2',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false,
      debug: false
    }, options);

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    if (!this.options.wait) {
      this.init();
    }
  }

  var _proto = Facebook.prototype;

  _proto.getAppId = function getAppId() {
    return this.options.appId;
  };

  _proto.init =
  /*#__PURE__*/
  function () {
    var _init = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _this = this;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.loadingPromise) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", this.loadingPromise);

            case 2:
              this.loadingPromise = new Promise(function (resolve) {
                var _this$options = _this.options,
                    domain = _this$options.domain,
                    language = _this$options.language,
                    debug = _this$options.debug,
                    restOptions = (0, _objectWithoutPropertiesLoose2.default)(_this$options, ["domain", "language", "debug"]);

                window.fbAsyncInit = function () {
                  window.FB.init({
                    appId: restOptions.appId,
                    version: restOptions.version,
                    cookie: restOptions.cookie,
                    status: restOptions.status,
                    xfbml: restOptions.xfbml,
                    frictionlessRequests: _this.frictionlessRequests
                  });
                  resolve(window.FB);
                };

                if (window.document.getElementById('facebook-jssdk')) {
                  return;
                }

                var js = window.document.createElement('script');
                js.id = 'facebook-jssdk';
                js.async = true;
                js.defer = true;
                js.src = "https://" + domain + "/" + language + "/sdk" + (debug ? '/debug' : '') + ".js";
                window.document.body.appendChild(js);
              });
              return _context.abrupt("return", this.loadingPromise);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.process =
  /*#__PURE__*/
  function () {
    var _process = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(method, before, after) {
      var fb;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (before === void 0) {
                before = [];
              }

              if (after === void 0) {
                after = [];
              }

              _context2.next = 4;
              return this.init();

            case 4:
              fb = _context2.sent;
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                fb[method].apply(fb, before.concat([function (response) {
                  if (!response) {
                    reject(new Error('Response is undefined'));
                  } else if (response.error) {
                    var _response$error = response.error,
                        code = _response$error.code,
                        type = _response$error.type,
                        message = _response$error.message;
                    var error = new Error(message);
                    error.code = code;
                    error.type = type;
                    reject(error);
                  } else {
                    resolve(response);
                  }
                }], after));
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function process(_x, _x2, _x3) {
      return _process.apply(this, arguments);
    }

    return process;
  }();

  _proto.ui =
  /*#__PURE__*/
  function () {
    var _ui = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(options) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.process('ui', [options]));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function ui(_x4) {
      return _ui.apply(this, arguments);
    }

    return ui;
  }();

  _proto.api =
  /*#__PURE__*/
  function () {
    var _api = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(path, method, params) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (method === void 0) {
                method = Method.GET;
              }

              if (params === void 0) {
                params = {};
              }

              return _context4.abrupt("return", this.process('api', [path, method, params]));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function api(_x5, _x6, _x7) {
      return _api.apply(this, arguments);
    }

    return api;
  }();

  _proto.login =
  /*#__PURE__*/
  function () {
    var _login = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(opts) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (opts === void 0) {
                opts = null;
              }

              return _context5.abrupt("return", this.process('login', [], [opts]));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function login(_x8) {
      return _login.apply(this, arguments);
    }

    return login;
  }();

  _proto.logout =
  /*#__PURE__*/
  function () {
    var _logout = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6() {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.process('logout'));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function logout() {
      return _logout.apply(this, arguments);
    }

    return logout;
  }();

  _proto.getLoginStatus =
  /*#__PURE__*/
  function () {
    var _getLoginStatus = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7() {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.process('getLoginStatus'));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getLoginStatus() {
      return _getLoginStatus.apply(this, arguments);
    }

    return getLoginStatus;
  }();

  _proto.getAuthResponse =
  /*#__PURE__*/
  function () {
    var _getAuthResponse = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8() {
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.process('getAuthResponse'));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function getAuthResponse() {
      return _getAuthResponse.apply(this, arguments);
    }

    return getAuthResponse;
  }();

  _proto.getTokenDetail =
  /*#__PURE__*/
  function () {
    var _getTokenDetail = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9(loginResponse) {
      var response;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(loginResponse.status === _LoginStatus.default.CONNECTED && loginResponse.authResponse)) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt("return", loginResponse.authResponse);

            case 2:
              _context9.next = 4;
              return this.getLoginStatus();

            case 4:
              response = _context9.sent;

              if (!(response.status === _LoginStatus.default.CONNECTED && response.authResponse)) {
                _context9.next = 7;
                break;
              }

              return _context9.abrupt("return", response.authResponse);

            case 7:
              throw new Error('Token is undefined');

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getTokenDetail(_x9) {
      return _getTokenDetail.apply(this, arguments);
    }

    return getTokenDetail;
  }();

  _proto.getProfile =
  /*#__PURE__*/
  function () {
    var _getProfile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10(params) {
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.api('/me', Method.GET, params));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function getProfile(_x10) {
      return _getProfile.apply(this, arguments);
    }

    return getProfile;
  }();

  _proto.getTokenDetailWithProfile =
  /*#__PURE__*/
  function () {
    var _getTokenDetailWithProfile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee11(params, response) {
      var tokenDetail, profile;
      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getTokenDetail(response);

            case 2:
              tokenDetail = _context11.sent;
              _context11.next = 5;
              return this.getProfile(params);

            case 5:
              profile = _context11.sent;
              return _context11.abrupt("return", {
                profile: profile,
                tokenDetail: tokenDetail
              });

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function getTokenDetailWithProfile(_x11, _x12) {
      return _getTokenDetailWithProfile.apply(this, arguments);
    }

    return getTokenDetailWithProfile;
  }();

  _proto.getToken =
  /*#__PURE__*/
  function () {
    var _getToken = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee12() {
      var authResponse;
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.getTokenDetail();

            case 2:
              authResponse = _context12.sent;
              return _context12.abrupt("return", authResponse.accessToken);

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function getToken() {
      return _getToken.apply(this, arguments);
    }

    return getToken;
  }();

  _proto.getUserId =
  /*#__PURE__*/
  function () {
    var _getUserId = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee13() {
      var authResponse;
      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.getTokenDetail();

            case 2:
              authResponse = _context13.sent;
              return _context13.abrupt("return", authResponse.userID);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function getUserId() {
      return _getUserId.apply(this, arguments);
    }

    return getUserId;
  }();

  _proto.sendInvite =
  /*#__PURE__*/
  function () {
    var _sendInvite = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee14(to, options) {
      return _regenerator.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.ui((0, _extends2.default)({
                to: to,
                method: 'apprequests'
              }, options)));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function sendInvite(_x13, _x14) {
      return _sendInvite.apply(this, arguments);
    }

    return sendInvite;
  }();

  _proto.postAction =
  /*#__PURE__*/
  function () {
    var _postAction = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee15(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
      var url;
      return _regenerator.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              url = "/me/" + ogNamespace + ":" + ogAction + "?" + ogObject + "=" + encodeURIComponent(ogObjectUrl);

              if (noFeedStory === true) {
                url += '&no_feed_story=true';
              }

              return _context15.abrupt("return", this.api(url, Method.POST));

            case 3:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function postAction(_x15, _x16, _x17, _x18, _x19) {
      return _postAction.apply(this, arguments);
    }

    return postAction;
  }();

  _proto.getPermissions =
  /*#__PURE__*/
  function () {
    var _getPermissions = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee16() {
      var response;
      return _regenerator.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this.api('/me/permissions');

            case 2:
              response = _context16.sent;
              return _context16.abrupt("return", response.data);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function getPermissions() {
      return _getPermissions.apply(this, arguments);
    }

    return getPermissions;
  }();

  _proto.hasPermissions =
  /*#__PURE__*/
  function () {
    var _hasPermissions = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee17(permissions) {
      var usersPermissions, findedPermissions;
      return _regenerator.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this.getPermissions();

            case 2:
              usersPermissions = _context17.sent;
              findedPermissions = permissions.filter(function (p) {
                var currentPermission = usersPermissions.find(function (row) {
                  var permission = row.permission,
                      status = row.status;
                  return status === 'granted' && permission === p;
                });
                return !!currentPermission;
              });
              return _context17.abrupt("return", findedPermissions.length === permissions.length);

            case 5:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function hasPermissions(_x20) {
      return _hasPermissions.apply(this, arguments);
    }

    return hasPermissions;
  }();

  _proto.subscribe =
  /*#__PURE__*/
  function () {
    var _subscribe = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee18(eventName, callback) {
      var fb;
      return _regenerator.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return this.init();

            case 2:
              fb = _context18.sent;
              fb.Event.subscribe(eventName, callback);

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function subscribe(_x21, _x22) {
      return _subscribe.apply(this, arguments);
    }

    return subscribe;
  }();

  _proto.unsubscribe =
  /*#__PURE__*/
  function () {
    var _unsubscribe = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee19(eventName, callback) {
      var fb;
      return _regenerator.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return this.init();

            case 2:
              fb = _context19.sent;
              fb.Event.unsubscribe(eventName, callback);

            case 4:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function unsubscribe(_x23, _x24) {
      return _unsubscribe.apply(this, arguments);
    }

    return unsubscribe;
  }();

  _proto.parse =
  /*#__PURE__*/
  function () {
    var _parse = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee20(parentNode) {
      var fb;
      return _regenerator.default.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return this.init();

            case 2:
              fb = _context20.sent;

              if (typeof parentNode === 'undefined') {
                fb.XFBML.parse();
              } else {
                fb.XFBML.parse(parentNode);
              }

            case 4:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function parse(_x25) {
      return _parse.apply(this, arguments);
    }

    return parse;
  }();

  _proto.getRequests =
  /*#__PURE__*/
  function () {
    var _getRequests = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee21() {
      return _regenerator.default.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", this.api('/me/apprequests'));

            case 1:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function getRequests() {
      return _getRequests.apply(this, arguments);
    }

    return getRequests;
  }();

  _proto.removeRequest =
  /*#__PURE__*/
  function () {
    var _removeRequest = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee22(requestID) {
      return _regenerator.default.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt("return", this.api(requestID, Method.DELETE));

            case 1:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function removeRequest(_x26) {
      return _removeRequest.apply(this, arguments);
    }

    return removeRequest;
  }();

  _proto.setAutoGrow =
  /*#__PURE__*/
  function () {
    var _setAutoGrow = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee23() {
      var fb;
      return _regenerator.default.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return this.init();

            case 2:
              fb = _context23.sent;
              fb.Canvas.setAutoGrow();

            case 4:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function setAutoGrow() {
      return _setAutoGrow.apply(this, arguments);
    }

    return setAutoGrow;
  }();

  _proto.paySimple =
  /*#__PURE__*/
  function () {
    var _paySimple = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee24(product, quantity) {
      return _regenerator.default.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (quantity === void 0) {
                quantity = 1;
              }

              return _context24.abrupt("return", this.ui({
                method: 'pay',
                action: 'purchaseitem',
                product: product,
                quantity: quantity
              }));

            case 2:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function paySimple(_x27, _x28) {
      return _paySimple.apply(this, arguments);
    }

    return paySimple;
  }();

  _proto.pay =
  /*#__PURE__*/
  function () {
    var _pay = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee25(product, options) {
      return _regenerator.default.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              return _context25.abrupt("return", this.ui((0, _extends2.default)({
                method: 'pay',
                action: 'purchaseitem',
                product: product
              }, options)));

            case 1:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function pay(_x29, _x30) {
      return _pay.apply(this, arguments);
    }

    return pay;
  }();

  return Facebook;
}();
/*
  sendToFriends: function(options, callback) {
    if(!options) {
      options = {};
    }

    options.method = 'send';

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        method: 'stream.publish',
        message: message,
        attachment: {
          name: name,
          caption: caption,
          description: description,
          href: url,
          media:[{
            type: 'image',
            src:  imgUrl,
            href: url
          }]
        },
        action_links: [{
          text: 'Code',
          href: url
        }],
        user_prompt_message: message
      },
      function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendInviteForm: function(options, callback) {
    if(typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method = options.method || 'apprequests';


      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  checkPageLike: function(pageID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      fbApi.getUserID(function(err, userID) {
        if(err) {
          return callback(err);
        }

        var fqlQuery = `SELECT uid FROM page_fan WHERE page_id = ${pageID} and uid = ${userID}`;
        var query = FB.Data.query(fqlQuery);

        query.wait(function(rows) {
          if (rows.length === 1 && rows[0].uid === userID) {
            callback(null, true, query);
          }
          else {
            callback(null, false, query);
          }
        });
      });
    });
  },

  sendMessageToFriend: function (friendID, link, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        to: friendID,
        method: 'send',
        link: link
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  _prepareUsers: function(data) {
    var users=[];

    for(var index in data) {
      var userData=data[index];

      var user = {
        provider_uid: 'facebook'+'_'+userData.uid,
        provider: 'facebook',
        id: userData.uid,
        name: userData.name,
        first_name: userData.first_name,
        last_name: userData.last_name,
        status: (userData.status!==null) ? userData.status : null,
        image: '//graph.facebook.com/'+userData.uid+'/picture?'
      };

      users.push(user);
    }

    return users;
  },

  getUserList: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('fql', {
        q: `
          SELECT uid, name, first_name, last_name, online_presence, status
          FROM user
          WHERE uid IN
            ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name
        `,
      }, function (response)
      {
        var users = fbApi._prepareUsers(response.data);
        callback(null, users, response);
      });
    });
  },

  postFeed: function(options, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method='feed';

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  createAlbum: function(name, description, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', 'post', {
        name: name,
        description: description
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  addImageToAlbum: function(albumID, imageURL, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', 'post', {
        message: message,
        url: imageURL
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbums: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumPhotos: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumCoverPicture: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/picture', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'publish_stream'
  postPhoto: function(photoUrl, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/photos', 'post', {
        message: message,
        url: photoUrl
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  getPageInfo: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.Canvas.getPageInfo(function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  }
*/


exports.default = Facebook;
//# sourceMappingURL=Facebook.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/FacebookContext.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-facebook/lib/FacebookContext.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _default = (0, _react.createContext)();

exports.default = _default;
//# sourceMappingURL=FacebookContext.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/FacebookProvider.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-facebook/lib/FacebookProvider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! can-use-dom */ "../node_modules/can-use-dom/index.js"));

var _Facebook = _interopRequireDefault(__webpack_require__(/*! ./Facebook */ "../node_modules/react-facebook/lib/Facebook.js"));

var _FacebookContext = _interopRequireDefault(__webpack_require__(/*! ./FacebookContext */ "../node_modules/react-facebook/lib/FacebookContext.js"));

var api = null;

var Facebook =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Facebook, _Component);

  function Facebook() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isReady: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleInit",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var isReady, _this$props, domain, version, appId, cookie, status, xfbml, language, frictionlessRequests, wait, debug;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_canUseDom.default) {
                _context.next = 2;
                break;
              }

              throw new Error('You can not use Facebook without DOM');

            case 2:
              isReady = _this.state.isReady;

              if (!isReady) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", api);

            case 5:
              if (!api) {
                _this$props = _this.props, domain = _this$props.domain, version = _this$props.version, appId = _this$props.appId, cookie = _this$props.cookie, status = _this$props.status, xfbml = _this$props.xfbml, language = _this$props.language, frictionlessRequests = _this$props.frictionlessRequests, wait = _this$props.wait, debug = _this$props.debug;
                api = new _Facebook.default({
                  domain: domain,
                  appId: appId,
                  version: version,
                  cookie: cookie,
                  status: status,
                  xfbml: xfbml,
                  language: language,
                  frictionlessRequests: frictionlessRequests,
                  wait: wait,
                  debug: debug
                });
              }

              _context.next = 8;
              return api.init();

            case 8:
              if (!_this.state.isReady) {
                _this.setState({
                  isReady: true
                });
              }

              return _context.abrupt("return", api);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }

  var _proto = Facebook.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var wait = this.props.wait;

    if (!wait) {
      this.handleInit();
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        isReady = _this$state.isReady,
        error = _this$state.error;
    var handleInit = this.handleInit;
    var value = {
      isReady: isReady,
      error: error,
      handleInit: handleInit,
      api: api
    };
    return _react.default.createElement(_FacebookContext.default.Provider, {
      value: value
    }, children);
  };

  return Facebook;
}(_react.Component);

exports.default = Facebook;
(0, _defineProperty2.default)(Facebook, "defaultProps", {
  version: 'v3.1',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false,
  debug: false
});
//# sourceMappingURL=FacebookProvider.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Feed.js":
/*!**************************************************!*\
  !*** ../node_modules/react-facebook/lib/Feed.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ./utils/clearUndefinedProperties */ "../node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "../node_modules/react-facebook/lib/Process.js"));

var Feed =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Feed, _Component);

  function Feed() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(evn) {
        var handleProcess;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evn.preventDefault();
                handleProcess = _this.props.handleProcess;
                return _context2.abrupt("return", handleProcess(
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(api) {
                    var _this$props, _this$props$link, link, display, _this$props$appId, appId, redirectURI, from, to, picture, source, name, caption, description, dataRef;

                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this$props = _this.props, _this$props$link = _this$props.link, link = _this$props$link === void 0 ? (0, _getCurrentHref.default)() : _this$props$link, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, redirectURI = _this$props.redirectURI, from = _this$props.from, to = _this$props.to, picture = _this$props.picture, source = _this$props.source, name = _this$props.name, caption = _this$props.caption, description = _this$props.description, dataRef = _this$props.dataRef;
                            return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                              method: 'feed',
                              link: link,
                              display: display,
                              app_id: appId,
                              redirect_uri: redirectURI,
                              from: from,
                              to: to,
                              picture: picture,
                              source: source,
                              name: name,
                              caption: caption,
                              description: description,
                              ref: dataRef
                            })));

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }

  var _proto = Feed.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading,
        error = _this$props2.error,
        data = _this$props2.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Feed;
}(_react.Component);

(0, _defineProperty2.default)(Feed, "defaultProps", {
  link: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined,
  from: undefined,
  to: undefined,
  source: undefined,
  picture: undefined,
  name: undefined,
  caption: undefined,
  description: undefined,
  dataRef: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref3) {
    var loading = _ref3.loading,
        handleProcess = _ref3.handleProcess,
        error = _ref3.error,
        data = _ref3.data;
    return _react.default.createElement(Feed, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Feed.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Group.js":
/*!***************************************************!*\
  !*** ../node_modules/react-facebook/lib/Group.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Group =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Group, _PureComponent);

  function Group() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Group.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        width = _this$props.width,
        showSocialContext = _this$props.showSocialContext,
        showMetaData = _this$props.showMetaData,
        children = _this$props.children,
        skin = _this$props.skin;
    return _react.default.createElement("div", {
      className: "fb-group",
      style: style,
      "data-href": href,
      "data-width": width,
      "data-show-social-context": showSocialContext,
      "data-show-metadata": showMetaData,
      "data-skin": skin
    }, children);
  };

  return Group;
}(_react.PureComponent);

(0, _defineProperty2.default)(Group, "defaultProps", {
  showSocialContext: undefined,
  showMetaData: undefined,
  width: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
  skin: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Group, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Group.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Initialize.js":
/*!********************************************************!*\
  !*** ../node_modules/react-facebook/lib/Initialize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _FacebookContext = _interopRequireDefault(__webpack_require__(/*! ./FacebookContext */ "../node_modules/react-facebook/lib/FacebookContext.js"));

var Initialize =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Initialize, _Component);

  function Initialize() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Initialize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.$isMounted = true;
    this.prepare();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.$isMounted = false;
  };

  _proto.prepare =
  /*#__PURE__*/
  function () {
    var _prepare = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _this$props, onReady, handleInit, api;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, onReady = _this$props.onReady, handleInit = _this$props.handleInit;
              _context.next = 3;
              return handleInit();

            case 3:
              api = _context.sent;

              if (onReady && this.$isMounted) {
                onReady(api);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function prepare() {
      return _prepare.apply(this, arguments);
    }

    return prepare;
  }();

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        isReady = _this$props2.isReady,
        api = _this$props2.api;
    var childrenProps = {
      isReady: isReady,
      api: api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  };

  return Initialize;
}(_react.Component);

(0, _defineProperty2.default)(Initialize, "defaultProps", {
  onReady: undefined,
  api: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_FacebookContext.default.Consumer, null, function (_ref) {
    var handleInit = _ref.handleInit,
        isReady = _ref.isReady,
        api = _ref.api;
    return _react.default.createElement(Initialize, (0, _extends2.default)({}, props, {
      handleInit: handleInit,
      isReady: isReady,
      api: api,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Initialize.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Like.js":
/*!**************************************************!*\
  !*** ../node_modules/react-facebook/lib/Like.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Like =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Like, _PureComponent);

  function Like() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Like.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        layout = _this$props.layout,
        colorScheme = _this$props.colorScheme,
        action = _this$props.action,
        showFaces = _this$props.showFaces,
        share = _this$props.share,
        children = _this$props.children,
        width = _this$props.width,
        size = _this$props.size,
        kidDirectedSite = _this$props.kidDirectedSite,
        referral = _this$props.referral;
    return _react.default.createElement("div", {
      className: "fb-like",
      "data-ref": referral,
      "data-href": href,
      "data-layout": layout,
      "data-colorscheme": colorScheme,
      "data-action": action,
      "data-show-faces": showFaces,
      "data-share": share,
      "data-width": width,
      "data-size": size,
      "data-kid-directed-site": kidDirectedSite
    }, children);
  };

  return Like;
}(_react.PureComponent);

(0, _defineProperty2.default)(Like, "defaultProps", {
  layout: undefined,
  showFaces: undefined,
  colorScheme: undefined,
  action: undefined,
  share: undefined,
  size: undefined,
  kidDirectedSite: undefined,
  children: undefined,
  href: undefined,
  referral: undefined,
  width: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Like, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Like.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Login.js":
/*!***************************************************!*\
  !*** ../node_modules/react-facebook/lib/Login.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "../node_modules/react-facebook/lib/Process.js"));

var _Fields = _interopRequireDefault(__webpack_require__(/*! ./constants/Fields */ "../node_modules/react-facebook/lib/constants/Fields.js"));

var Login =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Login, _Component);

  function Login() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(evn) {
        var _this$props, handleProcess, onCompleted, onError, onSuccess;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evn.preventDefault();
                _this$props = _this.props, handleProcess = _this$props.handleProcess, onCompleted = _this$props.onCompleted, onError = _this$props.onError, onSuccess = _this$props.onSuccess;
                _context2.prev = 2;
                _context2.next = 5;
                return handleProcess(
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(api) {
                    var _this$props2, scope, fields, returnScopes, rerequest, reauthorize, eventKey, loginQpts, authType, loginResponse, data;

                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this$props2 = _this.props, scope = _this$props2.scope, fields = _this$props2.fields, returnScopes = _this$props2.returnScopes, rerequest = _this$props2.rerequest, reauthorize = _this$props2.reauthorize, eventKey = _this$props2.eventKey;
                            loginQpts = {
                              scope: scope
                            };
                            authType = [];

                            if (returnScopes) {
                              loginQpts.return_scopes = true;
                            }

                            if (rerequest) {
                              authType.push('rerequest');
                            }

                            if (reauthorize) {
                              authType.push('reauthenticate');
                            }

                            if (authType.length) {
                              loginQpts.auth_type = authType.join(',');
                            }

                            _context.next = 9;
                            return api.login(loginQpts);

                          case 9:
                            loginResponse = _context.sent;

                            if (!(loginResponse.status !== 'connected')) {
                              _context.next = 12;
                              break;
                            }

                            throw new Error('Unauthorized user');

                          case 12:
                            _context.next = 14;
                            return api.getTokenDetailWithProfile({
                              fields: fields
                            }, loginResponse);

                          case 14:
                            data = _context.sent;

                            if (!onCompleted) {
                              _context.next = 18;
                              break;
                            }

                            _context.next = 18;
                            return onCompleted((0, _extends2.default)({}, data, {
                              eventKey: eventKey
                            }));

                          case 18:
                            return _context.abrupt("return", data);

                          case 19:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }(), onSuccess);

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](2);

                if (onError) {
                  onError(_context2.t0);
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }

  var _proto = Login.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        children = _this$props3.children,
        loading = _this$props3.loading,
        error = _this$props3.error,
        data = _this$props3.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Login;
}(_react.Component);

(0, _defineProperty2.default)(Login, "defaultProps", {
  scope: '',
  fields: _Fields.default,
  returnScopes: false,
  rerequest: false,
  reauthorize: false,
  onCompleted: undefined,
  onError: undefined,
  eventKey: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref3) {
    var loading = _ref3.loading,
        handleProcess = _ref3.handleProcess,
        data = _ref3.data,
        error = _ref3.error;
    return _react.default.createElement(Login, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Login.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/LoginButton.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-facebook/lib/LoginButton.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = LoginButton;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _reactSpinnerChildren = _interopRequireDefault(__webpack_require__(/*! react-spinner-children */ "../node_modules/react-spinner-children/dist/index.js"));

var _Login = _interopRequireDefault(__webpack_require__(/*! ./Login */ "../node_modules/react-facebook/lib/Login.js"));

function LoginButton(props) {
  var children = props.children,
      className = props.className,
      spinner = props.spinner,
      spinnerConfig = props.spinnerConfig,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "className", "spinner", "spinnerConfig"]);
  return _react.default.createElement(_Login.default, rest, function (_ref) {
    var loading = _ref.loading,
        handleClick = _ref.handleClick;
    return _react.default.createElement("button", {
      type: "button",
      className: className,
      onClick: handleClick,
      disabled: loading
    }, children, spinner && loading && _react.default.createElement(_reactSpinnerChildren.default, {
      config: spinnerConfig
    }));
  });
}

LoginButton.defaultProps = (0, _extends2.default)({}, _Login.default.defaultProps, {
  className: undefined,
  spinnerConfig: {},
  spinner: true
});
//# sourceMappingURL=LoginButton.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/MessageUs.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-facebook/lib/MessageUs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var MessageUs =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(MessageUs, _PureComponent);

  function MessageUs() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MessageUs.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        size = _this$props.size;
    return _react.default.createElement("div", {
      className: "fb-messengermessageus",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      color: color,
      size: size
    }, children);
  };

  return MessageUs;
}(_react.PureComponent);

(0, _defineProperty2.default)(MessageUs, "defaultProps", {
  color: undefined,
  size: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(MessageUs, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=MessageUs.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/MessengerCheckbox.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-facebook/lib/MessengerCheckbox.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var MessengerCheckbox =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(MessengerCheckbox, _PureComponent);

  function MessengerCheckbox() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MessengerCheckbox.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        origin = _this$props.origin,
        prechecked = _this$props.prechecked,
        allowLogin = _this$props.allowLogin,
        userRef = _this$props.userRef,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        size = _this$props.size,
        centerAlign = _this$props.centerAlign,
        skin = _this$props.skin;
    return _react.default.createElement("div", {
      className: "fb-messenger-checkbox",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      size: size,
      origin: origin,
      user_ref: userRef,
      prechecked: prechecked,
      allow_login: allowLogin,
      skin: skin,
      center_align: centerAlign
    }, children);
  };

  return MessengerCheckbox;
}(_react.PureComponent);

(0, _defineProperty2.default)(MessengerCheckbox, "defaultProps", {
  size: undefined,
  allowLogin: undefined,
  prechecked: undefined,
  userRef: undefined,
  children: undefined,
  origin: undefined,
  skin: undefined,
  centerAlign: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(MessengerCheckbox, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=MessengerCheckbox.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Page.js":
/*!**************************************************!*\
  !*** ../node_modules/react-facebook/lib/Page.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Page =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Page, _PureComponent);

  function Page() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        tabs = _this$props.tabs,
        hideCover = _this$props.hideCover,
        width = _this$props.width,
        height = _this$props.height,
        showFacepile = _this$props.showFacepile,
        hideCTA = _this$props.hideCTA,
        smallHeader = _this$props.smallHeader,
        adaptContainerWidth = _this$props.adaptContainerWidth,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: "fb-page",
      style: style,
      "data-tabs": tabs,
      "data-hide-cover": hideCover,
      "data-show-facepile": showFacepile,
      "data-hide-cta": hideCTA,
      "data-href": href,
      "data-small-header": smallHeader,
      "data-adapt-container-width": adaptContainerWidth,
      "data-height": height,
      "data-width": width
    }, children);
  };

  return Page;
}(_react.PureComponent);

(0, _defineProperty2.default)(Page, "defaultProps", {
  width: undefined,
  height: undefined,
  tabs: undefined,
  hideCover: undefined,
  showFacepile: undefined,
  hideCTA: undefined,
  smallHeader: undefined,
  adaptContainerWidth: undefined,
  children: undefined,
  style: undefined,
  href: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Page, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Page.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Parser.js":
/*!****************************************************!*\
  !*** ../node_modules/react-facebook/lib/Parser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "../node_modules/react-facebook/lib/Initialize.js"));

var Parser =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Parser, _Component);

  function Parser() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function (api) {
      _this.setState({
        api: api
      }, _this.handleParse);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleContainer", function (container) {
      _this.setState({
        container: container
      }, _this.handleParse);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleParse", function () {
      var _this$state = _this.state,
          api = _this$state.api,
          container = _this$state.container;

      if (!api || !container) {
        return;
      }

      api.parse(container);
    });
    return _this;
  }

  var _proto = Parser.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: className,
      ref: this.handleContainer
    }, _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      handleParse: this.handleParse
    })));
  };

  return Parser;
}(_react.Component);

exports.default = Parser;
(0, _defineProperty2.default)(Parser, "defaultProps", {
  className: undefined
});
//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Process.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-facebook/lib/Process.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "../node_modules/react-facebook/lib/Initialize.js"));

var Process =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Process, _Component);

  function Process() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      api: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleProcess",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(fn, handleSuccess) {
        var api, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (handleSuccess === void 0) {
                  handleSuccess = function handleSuccess() {};
                }

                _this.setState({
                  data: undefined,
                  error: undefined,
                  loading: true
                });

                _context.prev = 2;
                api = _this.state.api;

                if (api) {
                  _context.next = 6;
                  break;
                }

                throw new Error('Facebook is not initialized. Wait for isReady');

              case 6:
                _context.next = 8;
                return fn(api);

              case 8:
                data = _context.sent;

                _this.setState({
                  data: data,
                  loading: false
                }, handleSuccess);

                return _context.abrupt("return", data);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  error: _context.t0,
                  loading: false
                });

                throw _context.t0;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 13]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function (api) {
      _this.setState({
        api: api
      });
    });
    return _this;
  }

  var _proto = Process.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        api = _this$state.api,
        loading = _this$state.loading,
        data = _this$state.data,
        error = _this$state.error;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      loading: !api || loading,
      handleProcess: this.handleProcess,
      data: data,
      error: error
    }));
  };

  return Process;
}(_react.Component);

exports.default = Process;
//# sourceMappingURL=Process.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Profile.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-facebook/lib/Profile.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "../node_modules/react-facebook/lib/Initialize.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ./Subscribe */ "../node_modules/react-facebook/lib/Subscribe.js"));

var _Fields = _interopRequireDefault(__webpack_require__(/*! ./constants/Fields */ "../node_modules/react-facebook/lib/constants/Fields.js"));

var _LoginStatus = _interopRequireDefault(__webpack_require__(/*! ./constants/LoginStatus */ "../node_modules/react-facebook/lib/constants/LoginStatus.js"));

var Profile =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Profile, _Component);

  function Profile() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      loading: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(api) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.api = api;

                _this.updateProfile();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleStatusChange", function () {
      _this.updateProfile();
    });
    return _this;
  }

  var _proto = Profile.prototype;

  _proto.updateProfile =
  /*#__PURE__*/
  function () {
    var _updateProfile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var api, fields, response, profile;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              api = this.api, fields = this.props.fields;

              if (api) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              _context2.prev = 3;
              _context2.next = 6;
              return api.getLoginStatus();

            case 6:
              response = _context2.sent;

              if (!(response.status !== _LoginStatus.default.CONNECTED)) {
                _context2.next = 10;
                break;
              }

              this.setState({
                profile: undefined,
                loading: false,
                error: undefined
              });
              return _context2.abrupt("return");

            case 10:
              _context2.next = 12;
              return api.getProfile({
                fields: fields
              });

            case 12:
              profile = _context2.sent;
              this.setState({
                profile: profile,
                loading: false,
                error: undefined
              });
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](3);
              this.setState({
                profile: undefined,
                loading: false,
                error: _context2.t0
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 16]]);
    }));

    function updateProfile() {
      return _updateProfile.apply(this, arguments);
    }

    return updateProfile;
  }();

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        profile = _this$state.profile,
        loading = _this$state.loading,
        error = _this$state.error;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      profile: profile,
      loading: loading,
      error: error
    })));
  };

  return Profile;
}(_react.Component);

exports.default = Profile;
(0, _defineProperty2.default)(Profile, "defaultProps", {
  fields: _Fields.default
});
//# sourceMappingURL=Profile.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Send.js":
/*!**************************************************!*\
  !*** ../node_modules/react-facebook/lib/Send.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ./utils/clearUndefinedProperties */ "../node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "../node_modules/react-facebook/lib/Process.js"));

var Send =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Send, _Component);

  function Send() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(evn) {
        var handleProcess;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evn.preventDefault();
                handleProcess = _this.props.handleProcess;
                return _context2.abrupt("return", handleProcess(
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(api) {
                    var _this$props, _this$props$link, link, display, _this$props$appId, appId, to, redirectURI;

                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this$props = _this.props, _this$props$link = _this$props.link, link = _this$props$link === void 0 ? (0, _getCurrentHref.default)() : _this$props$link, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, to = _this$props.to, redirectURI = _this$props.redirectURI;
                            return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                              method: 'send',
                              link: link,
                              display: display,
                              app_id: appId,
                              to: to,
                              redirect_uri: redirectURI
                            })));

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }

  var _proto = Send.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading;
    return children({
      loading: loading,
      handleClick: this.handleClick
    });
  };

  return Send;
}(_react.Component);

(0, _defineProperty2.default)(Send, "defaultProps", {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref3) {
    var loading = _ref3.loading,
        handleProcess = _ref3.handleProcess;
    return _react.default.createElement(Send, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Send.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/SendToMessenger.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-facebook/lib/SendToMessenger.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

var SendToMessenger =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(SendToMessenger, _PureComponent);

  function SendToMessenger() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = SendToMessenger.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        dataRef = _this$props.dataRef,
        size = _this$props.size;
    return _react.default.createElement("div", {
      className: "fb-send-to-messenger",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      "data-color": color,
      "data-size": size,
      "data-ref": dataRef
    }, children);
  };

  return SendToMessenger;
}(_react.PureComponent);

(0, _defineProperty2.default)(SendToMessenger, "defaultProps", {
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(SendToMessenger, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=SendToMessenger.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Share.js":
/*!***************************************************!*\
  !*** ../node_modules/react-facebook/lib/Share.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "../node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ./utils/clearUndefinedProperties */ "../node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "../node_modules/react-facebook/lib/Process.js"));

var Share =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Share, _Component);

  function Share() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(evn) {
        var handleProcess;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evn.preventDefault();
                handleProcess = _this.props.handleProcess;
                return _context2.abrupt("return", handleProcess(
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(api) {
                    var _this$props, _this$props$href, href, display, _this$props$appId, appId, hashtag, redirectURI, quote, mobileIframe;

                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this$props = _this.props, _this$props$href = _this$props.href, href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, hashtag = _this$props.hashtag, redirectURI = _this$props.redirectURI, quote = _this$props.quote, mobileIframe = _this$props.mobileIframe;
                            return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                              method: 'share',
                              href: href,
                              display: display,
                              app_id: appId,
                              hashtag: hashtag,
                              redirect_uri: redirectURI,
                              quote: quote,
                              mobile_iframe: mobileIframe
                            })));

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }

  var _proto = Share.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading,
        error = _this$props2.error,
        data = _this$props2.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Share;
}(_react.Component);

(0, _defineProperty2.default)(Share, "defaultProps", {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref3) {
    var loading = _ref3.loading,
        handleProcess = _ref3.handleProcess,
        data = _ref3.data,
        error = _ref3.error;
    return _react.default.createElement(Share, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Share.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/ShareButton.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-facebook/lib/ShareButton.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = ShareButton;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Share = _interopRequireDefault(__webpack_require__(/*! ./Share */ "../node_modules/react-facebook/lib/Share.js"));

function ShareButton(props) {
  var className = props.className,
      children = props.children,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "children"]);
  return _react.default.createElement(_Share.default, rest, function (_ref) {
    var loading = _ref.loading,
        handleClick = _ref.handleClick;
    return _react.default.createElement("button", {
      type: "button",
      disabled: loading,
      className: className,
      onClick: handleClick
    }, children);
  });
}

ShareButton.defaultProps = (0, _extends2.default)({}, _Share.default.defaultProps, {
  className: undefined
});
//# sourceMappingURL=ShareButton.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Status.js":
/*!****************************************************!*\
  !*** ../node_modules/react-facebook/lib/Status.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "../node_modules/react-facebook/lib/Initialize.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ./Subscribe */ "../node_modules/react-facebook/lib/Subscribe.js"));

function getLoginStatus(_x) {
  return _getLoginStatus.apply(this, arguments);
}

function _getLoginStatus() {
  _getLoginStatus = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(api) {
    var response;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return api.getLoginStatus();

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.status);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLoginStatus.apply(this, arguments);
}

var Status =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Status, _Component);

  function Status() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      loading: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(api) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _this;
                _context.next = 3;
                return getLoginStatus(api);

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  status: _context.t1,
                  loading: false
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleStatusChange", function (response) {
      _this.setState({
        status: response.status,
        loading: false
      });
    });
    return _this;
  }

  var _proto = Status.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        status = _this$state.status,
        loading = _this$state.loading;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      status: status,
      loading: loading
    })));
  };

  return Status;
}(_react.Component);

exports.default = Status;
//# sourceMappingURL=Status.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/Subscribe.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-facebook/lib/Subscribe.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "../node_modules/react-facebook/lib/Initialize.js"));

var LoginStatus =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(LoginStatus, _Component);

  function LoginStatus() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(api) {
        var event;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = _this.props.event;

                _this.setState({
                  api: api
                });

                _context.next = 4;
                return api.subscribe(event, _this.handleChange);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function () {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange.apply(void 0, arguments);
      }
    });
    return _this;
  }

  var _proto = LoginStatus.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    var api = this.state.api,
        event = this.props.event;

    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children);
  };

  return LoginStatus;
}(_react.Component);

exports.default = LoginStatus;
(0, _defineProperty2.default)(LoginStatus, "defaultProps", {
  onChange: undefined
});
//# sourceMappingURL=Subscribe.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/ColorScheme.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/ColorScheme.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  LIGHT: 'light',
  DARK: 'dark'
};
exports.default = _default;
//# sourceMappingURL=ColorScheme.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/CommentsOrderBy.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/CommentsOrderBy.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  SOCIAL: 'social',
  REVERSE_TIME: 'reverse_time',
  TIME: 'time'
};
exports.default = _default;
//# sourceMappingURL=CommentsOrderBy.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/Fields.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/Fields.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// 3.0 fields without app review https://developers.facebook.com/docs/facebook-login/permissions/?locale=en_US#reference-default
var _default = ['id', 'first_name', 'last_name', 'middle_name', 'name', 'name_format', 'picture', 'short_name', 'email'];
exports.default = _default;
//# sourceMappingURL=Fields.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/LikeAction.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/LikeAction.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  LIKE: 'like',
  RECOMMEND: 'recommend'
};
exports.default = _default;
//# sourceMappingURL=LikeAction.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/LikeLayout.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/LikeLayout.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  STANDARD: 'standard',
  BUTTON_COUNT: 'button_count',
  BUTTON: 'button',
  BOX_COUNT: 'box_count'
};
exports.default = _default;
//# sourceMappingURL=LikeLayout.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/LikeSize.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/LikeSize.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  SMALL: 'small',
  LARGE: 'large'
};
exports.default = _default;
//# sourceMappingURL=LikeSize.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/LoginStatus.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/LoginStatus.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  CONNECTED: 'connected',
  AUTHORIZATION_EXPIRED: 'authorization_expired',
  NOT_AUTHORIZED: 'not_authorized',
  UNKNOWN: 'unknown'
};
exports.default = _default;
//# sourceMappingURL=LoginStatus.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/MessengerColor.js":
/*!**********************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/MessengerColor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  BLUE: 'blue',
  WHITE: 'white'
};
exports.default = _default;
//# sourceMappingURL=MessengerColor.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/constants/MessengerSize.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-facebook/lib/constants/MessengerSize.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  SMALL: 'small',
  MEDIUM: 'medium',
  STANDARD: 'standard',
  LARGE: 'large',
  XLARGE: 'xlarge'
};
exports.default = _default;
//# sourceMappingURL=MessengerSize.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/hooks/useApi.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-facebook/lib/hooks/useApi.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! can-use-dom */ "../node_modules/can-use-dom/index.js"));

var _FacebookContext = _interopRequireDefault(__webpack_require__(/*! ../FacebookContext */ "../node_modules/react-facebook/lib/FacebookContext.js"));

var _default = function _default(onReady) {
  var _useContext = (0, _react.useContext)(_FacebookContext.default),
      handleInit = _useContext.handleInit,
      api = _useContext.api;

  (0, _react.useState)(
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var api2;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_canUseDom.default) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return handleInit();

          case 3:
            api2 = _context.sent;

            if (onReady) {
              onReady(api2);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  return [api, handleInit];
};

exports.default = _default;
//# sourceMappingURL=useApi.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/hooks/useShare.js":
/*!************************************************************!*\
  !*** ../node_modules/react-facebook/lib/hooks/useShare.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ../utils/clearUndefinedProperties */ "../node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _useApi2 = _interopRequireDefault(__webpack_require__(/*! ./useApi */ "../node_modules/react-facebook/lib/hooks/useApi.js"));

var _default = function _default() {
  var _useApi = (0, _useApi2.default)(),
      prepareApi = _useApi[1];

  function handleShare(_x) {
    return _handleShare.apply(this, arguments);
  }

  function _handleShare() {
    _handleShare = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(options) {
      var href, display, hashtag, redirectUri, quote, mobileIframe, rest, api;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              href = options.href, display = options.display, hashtag = options.hashtag, redirectUri = options.redirectUri, quote = options.quote, mobileIframe = options.mobileIframe, rest = (0, _objectWithoutPropertiesLoose2.default)(options, ["href", "display", "hashtag", "redirectUri", "quote", "mobileIframe"]);
              _context.next = 3;
              return prepareApi();

            case 3:
              api = _context.sent;
              return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)((0, _extends2.default)({
                method: 'share',
                href: href,
                display: display,
                app_id: api.getAppId(),
                hashtag: hashtag,
                redirect_uri: redirectUri,
                quote: quote,
                mobile_iframe: mobileIframe
              }, rest))));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleShare.apply(this, arguments);
  }

  return handleShare;
};

exports.default = _default;
//# sourceMappingURL=useShare.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/index.js":
/*!***************************************************!*\
  !*** ../node_modules/react-facebook/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;

var _FacebookProvider2 = _interopRequireDefault(__webpack_require__(/*! ./FacebookProvider */ "../node_modules/react-facebook/lib/FacebookProvider.js"));

exports.FacebookProvider = _FacebookProvider2.default;

var _Parser2 = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "../node_modules/react-facebook/lib/Parser.js"));

exports.Parser = _Parser2.default;

var _Initialize2 = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "../node_modules/react-facebook/lib/Initialize.js"));

exports.Initialize = _Initialize2.default;

var _Like2 = _interopRequireDefault(__webpack_require__(/*! ./Like */ "../node_modules/react-facebook/lib/Like.js"));

exports.Like = _Like2.default;

var _Send2 = _interopRequireDefault(__webpack_require__(/*! ./Send */ "../node_modules/react-facebook/lib/Send.js"));

exports.Send = _Send2.default;

var _Share2 = _interopRequireDefault(__webpack_require__(/*! ./Share */ "../node_modules/react-facebook/lib/Share.js"));

exports.Share = _Share2.default;

var _ShareButton2 = _interopRequireDefault(__webpack_require__(/*! ./ShareButton */ "../node_modules/react-facebook/lib/ShareButton.js"));

exports.ShareButton = _ShareButton2.default;

var _Page2 = _interopRequireDefault(__webpack_require__(/*! ./Page */ "../node_modules/react-facebook/lib/Page.js"));

exports.Page = _Page2.default;

var _Login2 = _interopRequireDefault(__webpack_require__(/*! ./Login */ "../node_modules/react-facebook/lib/Login.js"));

exports.Login = _Login2.default;

var _LoginButton2 = _interopRequireDefault(__webpack_require__(/*! ./LoginButton */ "../node_modules/react-facebook/lib/LoginButton.js"));

exports.LoginButton = _LoginButton2.default;

var _EmbeddedPost2 = _interopRequireDefault(__webpack_require__(/*! ./EmbeddedPost */ "../node_modules/react-facebook/lib/EmbeddedPost.js"));

exports.EmbeddedPost = _EmbeddedPost2.default;

var _EmbeddedVideo2 = _interopRequireDefault(__webpack_require__(/*! ./EmbeddedVideo */ "../node_modules/react-facebook/lib/EmbeddedVideo.js"));

exports.EmbeddedVideo = _EmbeddedVideo2.default;

var _Comments2 = _interopRequireDefault(__webpack_require__(/*! ./Comments */ "../node_modules/react-facebook/lib/Comments.js"));

exports.Comments = _Comments2.default;

var _CommentsCount2 = _interopRequireDefault(__webpack_require__(/*! ./CommentsCount */ "../node_modules/react-facebook/lib/CommentsCount.js"));

exports.CommentsCount = _CommentsCount2.default;

var _Feed2 = _interopRequireDefault(__webpack_require__(/*! ./Feed */ "../node_modules/react-facebook/lib/Feed.js"));

exports.Feed = _Feed2.default;

var _Group2 = _interopRequireDefault(__webpack_require__(/*! ./Group */ "../node_modules/react-facebook/lib/Group.js"));

exports.Group = _Group2.default;

var _Subscribe2 = _interopRequireDefault(__webpack_require__(/*! ./Subscribe */ "../node_modules/react-facebook/lib/Subscribe.js"));

exports.Subscribe = _Subscribe2.default;

var _Status2 = _interopRequireDefault(__webpack_require__(/*! ./Status */ "../node_modules/react-facebook/lib/Status.js"));

exports.Status = _Status2.default;

var _Profile2 = _interopRequireDefault(__webpack_require__(/*! ./Profile */ "../node_modules/react-facebook/lib/Profile.js"));

exports.Profile = _Profile2.default;

var _CustomChat2 = _interopRequireDefault(__webpack_require__(/*! ./CustomChat */ "../node_modules/react-facebook/lib/CustomChat.js"));

exports.CustomChat = _CustomChat2.default;

var _MessageUs2 = _interopRequireDefault(__webpack_require__(/*! ./MessageUs */ "../node_modules/react-facebook/lib/MessageUs.js"));

exports.MessageUs = _MessageUs2.default;

var _MessengerCheckbox2 = _interopRequireDefault(__webpack_require__(/*! ./MessengerCheckbox */ "../node_modules/react-facebook/lib/MessengerCheckbox.js"));

exports.MessengerCheckbox = _MessengerCheckbox2.default;

var _SendToMessenger2 = _interopRequireDefault(__webpack_require__(/*! ./SendToMessenger */ "../node_modules/react-facebook/lib/SendToMessenger.js"));

exports.SendToMessenger = _SendToMessenger2.default;

var _LikeSize2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LikeSize */ "../node_modules/react-facebook/lib/constants/LikeSize.js"));

exports.LikeSize = _LikeSize2.default;

var _LikeLayout2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LikeLayout */ "../node_modules/react-facebook/lib/constants/LikeLayout.js"));

exports.LikeLayout = _LikeLayout2.default;

var _ColorScheme2 = _interopRequireDefault(__webpack_require__(/*! ./constants/ColorScheme */ "../node_modules/react-facebook/lib/constants/ColorScheme.js"));

exports.ColorScheme = _ColorScheme2.default;

var _LikeAction2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LikeAction */ "../node_modules/react-facebook/lib/constants/LikeAction.js"));

exports.LikeAction = _LikeAction2.default;

var _CommentsOrderBy2 = _interopRequireDefault(__webpack_require__(/*! ./constants/CommentsOrderBy */ "../node_modules/react-facebook/lib/constants/CommentsOrderBy.js"));

exports.CommentsOrderBy = _CommentsOrderBy2.default;

var _MessengerSize2 = _interopRequireDefault(__webpack_require__(/*! ./constants/MessengerSize */ "../node_modules/react-facebook/lib/constants/MessengerSize.js"));

exports.MessengerSize = _MessengerSize2.default;

var _MessengerColor2 = _interopRequireDefault(__webpack_require__(/*! ./constants/MessengerColor */ "../node_modules/react-facebook/lib/constants/MessengerColor.js"));

exports.MessengerColor = _MessengerColor2.default;

var _LoginStatus2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LoginStatus */ "../node_modules/react-facebook/lib/constants/LoginStatus.js"));

exports.LoginStatus = _LoginStatus2.default;

var _Fields2 = _interopRequireDefault(__webpack_require__(/*! ./constants/Fields */ "../node_modules/react-facebook/lib/constants/Fields.js"));

exports.Fields = _Fields2.default;

var _FacebookContext2 = _interopRequireDefault(__webpack_require__(/*! ./FacebookContext */ "../node_modules/react-facebook/lib/FacebookContext.js"));

exports.FacebookContext = _FacebookContext2.default;

var _useShare2 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useShare */ "../node_modules/react-facebook/lib/hooks/useShare.js"));

exports.useShare = _useShare2.default;

var _useApi2 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useApi */ "../node_modules/react-facebook/lib/hooks/useApi.js"));

exports.useApi = _useApi2.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/utils/clearUndefinedProperties.js":
/*!****************************************************************************!*\
  !*** ../node_modules/react-facebook/lib/utils/clearUndefinedProperties.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = clearUndefinedProperties;

function clearUndefinedProperties(obj) {
  if (!obj) {
    return obj;
  }

  var newObj = {};
  Object.keys(obj).forEach(function (propertyName) {
    var value = obj[propertyName];

    if (value !== undefined) {
      newObj[propertyName] = value;
    }
  });
  return newObj;
}
//# sourceMappingURL=clearUndefinedProperties.js.map

/***/ }),

/***/ "../node_modules/react-facebook/lib/utils/getCurrentHref.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-facebook/lib/utils/getCurrentHref.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = getCurrentHref;

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! can-use-dom */ "../node_modules/can-use-dom/index.js"));

function getCurrentHref() {
  if (!_canUseDom.default) {
    return 'https://www.facebook.com';
  }

  return window.location.href;
}
//# sourceMappingURL=getCurrentHref.js.map

/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react-spinner-children/dist/index.js":
/*!************************************************************!*\
  !*** ../node_modules/react-spinner-children/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = __webpack_require__(/*! spin.js */ "../node_modules/spin.js/spin.js");

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateSpinner();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateSpinner();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.spinner) {
        this.spinner.stop();
        this.spinner = null;
      }
    }
  }, {
    key: 'updateSpinner',
    value: function updateSpinner() {
      var loaded = this.props.loaded;

      if (!loaded && !this.spinner) {
        this.spinner = new _spin2.default(this.props.config);
        this.spinner.spin(this.refs.loader);
      } else if (loaded && this.spinner) {
        this.spinner.stop();
        this.spinner = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loaded = _props.loaded,
          className = _props.className;


      if (loaded) {
        return this.props.children ? _react.Children.only(this.props.children) : null;
      }

      return _react2.default.createElement('div', { className: className, ref: 'loader' });
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  className: _propTypes2.default.string,
  config: _propTypes2.default.object.isRequired,
  loaded: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node
};
Spinner.defaultProps = {
  config: {},
  loaded: false,
  className: 'loader'
};
exports.default = Spinner;

/***/ }),

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_99873879131b459af989 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_99873879131b459af989 */ "dll-reference dll_99873879131b459af989"))("../node_modules/react/index.js");

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../node_modules/spin.js/spin.js":
/*!***************************************!*\
  !*** ../node_modules/spin.js/spin.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if ( true && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else {}
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ "../node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/huy/apps/ecommerce/app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__["FacebookProvider"], {
    appId: "335701763968445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__["Like"], {
    href: "http://www.facebook.com",
    colorScheme: "dark",
    showFaces: true,
    share: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
});

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fhuy%2Fapps%2Fecommerce%2Fapp%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fhuy%2Fapps%2Fecommerce%2Fapp%2Fpages%2Findex.js! */"../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fhuy%2Fapps%2Fecommerce%2Fapp%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_99873879131b459af989":
/*!*******************************************!*\
  !*** external "dll_99873879131b459af989" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_99873879131b459af989;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map