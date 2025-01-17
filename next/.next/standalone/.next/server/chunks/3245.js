"use strict";
exports.id = 3245;
exports.ids = [3245];
exports.modules = {

/***/ 83245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sN": () => (/* binding */ getAdditionalFieldsError),
/* harmony export */   "tr": () => (/* binding */ getAdditionalFieldsInfo)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let logger;
if (true) {
    // Check if we are on the server-side
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const graylog2 = __webpack_require__(14799);
    logger = new graylog2.graylog({
        servers: [
            {
                host: "173.212.230.84",
                port: 12201
            }
        ],
        facility: "g2k-next"
    });
    logger?.on("error", function(error) {
        console.error("Error while trying to write to graylog2:", error);
    });
    if (false) {}
}
function getAdditionalFieldsInfo(obj) {
    return {
        env: process.env.ENV,
        level: 6,
        Severity: "INFO",
        timestamp: new Date().toISOString(),
        ...obj
    };
}
function getAdditionalFieldsError(obj, e) {
    return {
        env: process.env.ENV,
        level: 3,
        Severity: "ERROR",
        timestamp: new Date().toISOString(),
        StackTrace: e instanceof Error ? e.stack : e?.toString(),
        message: e instanceof Error ? e.message : "Unexpected error",
        full_message: e instanceof Error ? e.message : "Unexpected error",
        ...obj
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);


/***/ })

};
;