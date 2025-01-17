"use strict";
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 24570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ArrowSelectUp = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 10,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            stroke: props.stroke || "#222121",
            strokeLinecap: "round",
            strokeWidth: 2,
            d: "M17 1L9.707 8.293a1 1 0 01-1.414 0L1 1"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSelectUp);


/***/ }),

/***/ 81446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ DefaultExcursionValues),
  "j": () => (/* binding */ excursionType)
});

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./modules/core/api/model/excursion/excursionType.ts
/**
 * Go2kavkaz Backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: hello@icerockdev.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ const ExcursionType = {
    INDIVIDUAL: "INDIVIDUAL",
    GROUP: "GROUP"
};

// EXTERNAL MODULE: ./modules/core/constants.ts + 1 modules
var constants = __webpack_require__(96894);
;// CONCATENATED MODULE: ./modules/excursion/constants.ts



const DefaultExcursionValues = {
    type: null,
    date: external_dayjs_default()().format(constants/* DEFAULT_DATE_FORMAT */.K_),
    dateTo: external_dayjs_default()().add(3, "days").format(constants/* DEFAULT_DATE_FORMAT */.K_),
    cityId: null,
    offset: 0,
    limit: 10,
    travelMode: null,
    withChildren: false
};
const excursionType = [
    {
        title: "Групповой",
        value: ExcursionType.GROUP
    },
    {
        title: "Индивидуальный",
        value: ExcursionType.INDIVIDUAL
    }
];


/***/ })

};
;