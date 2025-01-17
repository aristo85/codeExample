"use strict";
exports.id = 1158;
exports.ids = [1158];
exports.modules = {

/***/ 6153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CopyIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "#8DAEC1",
            d: "M21.188 24H8.438a2.815 2.815 0 01-2.813-2.813V8.438a2.815 2.815 0 012.813-2.812h12.75A2.815 2.815 0 0124 8.438v12.75A2.815 2.815 0 0121.187 24zM8.438 7.5a.939.939 0 00-.938.938v12.75c0 .516.42.937.938.937h12.75c.516 0 .937-.42.937-.938V8.438a.939.939 0 00-.938-.937H8.438zm-4.688 9h-.938a.939.939 0 01-.937-.938V2.813c0-.516.42-.937.938-.937h12.75c.516 0 .937.42.937.938v.89h1.875v-.89A2.815 2.815 0 0015.562 0H2.813A2.815 2.815 0 000 2.813v12.75a2.815 2.815 0 002.813 2.812h.937V16.5z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyIcon);


/***/ }),

/***/ 95513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useCopyToClipboard)
/* harmony export */ });
/* harmony import */ var _modules_core_hooks_useNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51949);

const useCopyToClipboard = ()=>{
    const toast = (0,_modules_core_hooks_useNotification__WEBPACK_IMPORTED_MODULE_0__/* .useNotification */ .l)();
    const handleCopyToClipboard = (data)=>{
        navigator.clipboard.writeText(data).then(()=>toast("Вы удачно скопировали поле", "success")).catch(()=>toast("Что-то пошло не так, попробуйте заново", "error"));
    };
    return [
        handleCopyToClipboard
    ];
};


/***/ })

};
;