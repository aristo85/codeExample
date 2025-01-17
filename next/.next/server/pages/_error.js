"use strict";
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 57352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83245);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);




const Error = ({ statusCode  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {
        statusCode: statusCode ?? 400,
        title: `Something went wrong on the client`
    });
};
Error.getInitialProps = ({ res , err  })=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    _logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP?.error("Unexpected Error", `An error occurred ${statusCode ?? "on client side"}`, (0,_logger__WEBPACK_IMPORTED_MODULE_1__/* .getAdditionalFieldsError */ .sN)({
        LoggerName: path__WEBPACK_IMPORTED_MODULE_2___default().basename(__filename)
    }, err instanceof Error ? err : undefined));
    return {
        statusCode
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 14799:
/***/ ((module) => {

module.exports = require("graylog2");

/***/ }),

/***/ 95566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3245], () => (__webpack_exec__(57352)));
module.exports = __webpack_exports__;

})();