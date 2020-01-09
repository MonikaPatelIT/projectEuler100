webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.8039f9d1d9390deac8f6.hot-update.js.map