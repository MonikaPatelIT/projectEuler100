webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.e264acf73eb45c450baf.hot-update.js.map