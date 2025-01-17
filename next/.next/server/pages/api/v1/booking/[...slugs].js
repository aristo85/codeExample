"use strict";
(() => {
var exports = {};
exports.id = 7049;
exports.ids = [7049,3076];
exports.modules = {

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

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

/***/ 87709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _pages_api_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73952);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    const { method  } = req;
    const { slugs  } = req.query;
    await (0,_pages_api_cors__WEBPACK_IMPORTED_MODULE_0__.cors)(req, res);
    if (!slugs) {
        res.status(200).json({
            message: `User endpoint reached base`
        });
        return;
    }
    switch(method){
        case "GET":
            const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "public/data/booked.json");
            const jsonData = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8");
            const data = JSON.parse(jsonData);
            setTimeout(()=>{
                res.status(200).json({
                    data: data.data
                });
            }, 500);
            break;
        case "POST":
        case "PUT":
        default:
            res.status(405).json({
                message: "Method Not Allowed"
            });
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(87709));
module.exports = __webpack_exports__;

})();