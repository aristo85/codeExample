"use strict";
(() => {
var exports = {};
exports.id = 6386;
exports.ids = [6386,3076];
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

/***/ 58602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _pages_api_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73952);
// pages/api/v1/[...slugs].ts

const dataToken = {
    accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImF1ZCI6Imcyay1hdWRpZW5jZSIsImlzcyI6Imh0dHA6Ly8wLjAuMC4wOjgwIiwiaWF0IjoxNjg2MDYzNTI2LCJ0eXBlIjoiQUNDRVNTIiwidXNlciI6eyJpZCI6MTIsInJvbGVUeXBlIjoyMH0sImV4cCI6MTY4NjA4MTUyNn0.m9p_SqnZVugHDmDVAG9c2fQNG027V561kNozTO26kiTRmDSWUHy6Z2T1-FjE5bINLRdFMn7G8Su4-rPf-LBYag",
    refreshToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImF1ZCI6Imcyay1hdWRpZW5jZSIsImlzcyI6Imh0dHA6Ly8wLjAuMC4wOjgwIiwiaWF0IjoxNjg2MDYzNTI2LCJ0eXBlIjoiUkVGUkVTSCIsInVzZXIiOnsiaWQiOjEyLCJyb2xlVHlwZSI6MjB9LCJleHAiOjE2ODY2NjgzMjZ9.WqdGlmyew_GwNjAqgn9QL5QcmchDk5tZNb_LPFb5wNCu1GkC3lJLC_1uLQUmn_D3gOmd51Hu2BWhmUsflgKUtA"
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
                message: `User endpoint reached ${slugs}`
            });
            break;
        case "POST":
            if (slugs[0] === "sign-in") {
                const { email , password  } = req.body;
                // Perform authentication logic here (e.g., validate email and password)
                res.status(200).json({
                    data: {
                        ...dataToken
                    },
                    email
                });
            } else if (slugs[0] === "sign-up") {
                const { role , contactName , email , password , passwordRepeat  } = req.body;
                res.status(200).json({
                    success: true
                });
            } else if (slugs[0] === "restore-by-email") {
                const { email  } = req.body;
                res.status(200).json({
                    success: true,
                    email
                });
            } else if (slugs[0] === "resend-email") {
                const { email  } = req.body;
                res.status(200).json({
                    success: true,
                    email
                });
            } else {
                res.status(405).json({
                    error: "Method Not Allowed"
                });
            }
            break;
        case "PUT":
            if (slugs[0] === "confirm-email") {
                const { role , contactName , email , password , passwordRepeat  } = req.body;
                const token = "any-token";
                res.status(200).json({
                    success: true
                });
            } else if (slugs[0] === "restore-by-email") {
                const { confirmationToken  } = req.body;
                res.status(200).json({
                    success: true
                });
            } else {
                res.status(405).json({
                    error: "Method Not Allowed"
                });
            }
            break;
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
var __webpack_exports__ = (__webpack_exec__(58602));
module.exports = __webpack_exports__;

})();