"use strict";
(() => {
var exports = {};
exports.id = 9010;
exports.ids = [9010,3076];
exports.modules = {

/***/ 73952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cors": () => (/* binding */ cors)
});

;// CONCATENATED MODULE: external "nextjs-cors"
const external_nextjs_cors_namespaceObject = require("nextjs-cors");
var external_nextjs_cors_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_cors_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/cors.ts

const cors = async (req, res)=>await external_nextjs_cors_default()(req, res, {
        // Options
        methods: [
            "GET",
            "HEAD",
            "PUT",
            "PATCH",
            "POST",
            "DELETE"
        ],
        origin: "*",
        optionsSuccessStatus: 200
    });


/***/ }),

/***/ 21441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _pages_api_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73952);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
    await (0,_pages_api_cors__WEBPACK_IMPORTED_MODULE_0__.cors)(req, res);
    res.status(200).json({
        name: "John Doe"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(21441));
module.exports = __webpack_exports__;

})();