(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./Component/Problem001/Problem001.js":
/*!********************************************!*\
  !*** ./Component/Problem001/Problem001.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\mpatel\\source\\project\\projectEuler100\\Component\\Problem001\\Problem001.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Problem001 = function Problem001() {
  var arr = [];

  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }

  var sum = arr.reduce(function (a, r) {
    return a + r;
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Multiples of 3 and 5"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Problem 1"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000."), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Solution"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, sum)));
};

/* harmony default export */ __webpack_exports__["default"] = (Problem001);

/***/ }),

/***/ "./Component/Problem002/Problem002.js":
/*!********************************************!*\
  !*** ./Component/Problem002/Problem002.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\mpatel\\source\\project\\projectEuler100\\Component\\Problem002\\Problem002.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Problem002 = function Problem002() {
  function fibonacci(n) {
    return n <= 1 ? 1 : n == 2 ? 2 : fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(4));
  var count = 1;
  var arr_fib = [];

  while (fibonacci(count) < 4000000) {
    arr_fib.push(fibonacci(count));
    count++;
  }

  console.log(arr_fib);
  var arr_fib_even = [];
  arr_fib.map(function (data) {
    if (data % 2 == 0) {
      arr_fib_even.push(data);
    }
  });
  console.log(arr_fib_even);
  var arr_fib_even_sum = arr_fib_even.reduce(function (a, r) {
    return a + r;
  });
  console.log(arr_fib_even_sum);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Even Fibonacci numbers"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Problem 2"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Solution"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, arr_fib_even_sum)));
};

/* harmony default export */ __webpack_exports__["default"] = (Problem002);

/***/ }),

/***/ "./Component/Problem003/Problem003.js":
/*!********************************************!*\
  !*** ./Component/Problem003/Problem003.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\mpatel\\source\\project\\projectEuler100\\Component\\Problem003\\Problem003.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Problem003 = function Problem003() {
  var is_Prime = function is_Prime(num) {
    for (var i = 2; i < Math.sqrt(num); i++) {
      if (num % i == 0) return false;
      return true;
    }
  };

  var factors = [];

  var prime_factors = function prime_factors(num) {
    for (var i = 2; i <= num; i++) {
      while (is_Prime(i) && num % i === 0) {
        if (!factors.includes(i)) factors.push(i);
        num /= i;
      }
    }

    return factors;
  };

  console.log(prime_factors(600851475143)); // all prime factors

  var max_prime_factors = factors.reduce(function (a, b) {
    return a > b ? a : b;
  }); // max prime factors

  console.log(max_prime_factors);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Largest prime factor"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Problem 3"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Solution"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, max_prime_factors)));
};

/* harmony default export */ __webpack_exports__["default"] = (Problem003);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmpatel%5Csource%5Cproject%5CprojectEuler100%5Cpages%5Cindex.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmpatel%5Csource%5Cproject%5CprojectEuler100%5Cpages%5Cindex.js ***!
  \******************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Component_Problem001_Problem001__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/Problem001/Problem001 */ "./Component/Problem001/Problem001.js");
/* harmony import */ var _Component_Problem002_Problem002__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/Problem002/Problem002 */ "./Component/Problem002/Problem002.js");
/* harmony import */ var _Component_Problem003_Problem003__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Component/Problem003/Problem003 */ "./Component/Problem003/Problem003.js");
var _jsxFileName = "C:\\Users\\mpatel\\source\\project\\projectEuler100\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = function App() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "#ProjectEuler100"), __jsx(_Component_Problem001_Problem001__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_Component_Problem002_Problem002__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_Component_Problem003_Problem003__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmpatel%5Csource%5Cproject%5CprojectEuler100%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmpatel%5Csource%5Cproject%5CprojectEuler100%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmpatel%5Csource%5Cproject%5CprojectEuler100%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map