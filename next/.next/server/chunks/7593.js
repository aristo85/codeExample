"use strict";
exports.id = 7593;
exports.ids = [7593];
exports.modules = {

/***/ 77593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ withLogging)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83245);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const withLogging = (getServerSideProps)=>{
    return async (ctx)=>{
        let serverSideProps;
        try {
            serverSideProps = await getServerSideProps(ctx);
        } catch (e) {
            _logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.error("Unexpected Error", "An error occurred during getServerSideProps", (0,_logger__WEBPACK_IMPORTED_MODULE_0__/* .getAdditionalFieldsError */ .sN)({
                LoggerName: path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename),
                headers: ctx.req?.headers,
                httpMethod: ctx.req?.method,
                originalUrl: ctx.req?.url,
                queryParameters: ctx.query,
                requestPath: ctx.resolvedUrl,
                responseStatus: ctx.res?.statusCode,
                responseHeaders: ctx.res?.getHeaders()
            }, e instanceof Error ? e : undefined));
            return {
                props: {
                    errorData: {
                        status: 500,
                        message: "An unexpected error occurred."
                    }
                }
            };
        }
        const props = serverSideProps.props;
        if (props.errorData) {
            _logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.error("Error", "An error returned from backend", (0,_logger__WEBPACK_IMPORTED_MODULE_0__/* .getAdditionalFieldsError */ .sN)({
                LoggerName: path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename),
                headers: ctx.req?.headers,
                httpMethod: ctx.req?.method,
                originalUrl: ctx.req?.url,
                queryParameters: ctx.query,
                requestPath: ctx.resolvedUrl,
                responseStatus: ctx.res?.statusCode,
                responseHeaders: ctx.res?.getHeaders(),
                responseBody: props.errorData
            }, props.errorData instanceof Error ? props.errorData : undefined));
        } else {
            _logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.info("Request", "Server side props request", (0,_logger__WEBPACK_IMPORTED_MODULE_0__/* .getAdditionalFieldsInfo */ .tr)({
                // logging details here
                LoggerName: path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename),
                headers: ctx.req?.headers,
                httpMethod: ctx.req?.method,
                originalUrl: ctx.req?.url,
                queryParameters: ctx.query,
                requestPath: ctx.resolvedUrl,
                responseStatus: ctx.res?.statusCode,
                responseHeaders: ctx.res?.getHeaders(),
                responseBody: props.data
            }));
        }
        return serverSideProps;
    };
};


/***/ })

};
;