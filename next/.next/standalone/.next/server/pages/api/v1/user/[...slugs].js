"use strict";
(() => {
var exports = {};
exports.id = 5204;
exports.ids = [5204,3076];
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

/***/ 53613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _pages_api_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73952);

const dataToken = {
    accessToken: "any_access_Token",
    refreshToken: "any_refresh_Token"
};
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
            res.status(200).json({
                success: true,
                data: {
                    id: 1,
                    firstName: "Иван",
                    lastName: "Иванов",
                    email: "mail@mail.ru",
                    phone: "79004565656",
                    birthdayDate: "2010-01-01T12:00:00+01:00",
                    commission: "13",
                    company: "Company"
                }
            });
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
var __webpack_exports__ = (__webpack_exec__(53613));
module.exports = __webpack_exports__;

})();