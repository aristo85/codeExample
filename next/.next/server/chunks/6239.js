"use strict";
exports.id = 6239;
exports.ids = [6239];
exports.modules = {

/***/ 26239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ excursionQueryHandler),
/* harmony export */   "y": () => (/* binding */ ExcursionQueryLocation)
/* harmony export */ });
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49836);
/* harmony import */ var _modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50479);
/* harmony import */ var _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81446);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96894);





var ExcursionQueryLocation;
(function(ExcursionQueryLocation) {
    ExcursionQueryLocation["list"] = "LIST";
    ExcursionQueryLocation["detail"] = "DETAIL";
    ExcursionQueryLocation["form"] = "FORM";
    ExcursionQueryLocation["payment"] = "PAYMENT";
})(ExcursionQueryLocation || (ExcursionQueryLocation = {}));
const excursionQueryHandler = (data, location)=>{
    const { cityId =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.cityId */ .K.cityId , limit =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.limit */ .K.limit , type =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.type */ .K.type , travelMode =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.travelMode */ .K.travelMode , withChildren =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.withChildren */ .K.withChildren , offset =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.offset */ .K.offset , sort =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.sort */ .K.sort  } = data;
    let { date =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.date */ .K.date , dateTo =_modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.dateTo */ .K.dateTo  } = data;
    if (dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().startOf("D"))) {
        date = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
        dateTo = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).add(3, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    if (dayjs__WEBPACK_IMPORTED_MODULE_2___default()(dateTo).isBefore(date)) {
        dateTo = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).add(3, "days").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    let rawFilters = {};
    if (location === ExcursionQueryLocation.detail) {
        rawFilters = {
            date,
            dateTo,
            cityId,
            type,
            travelMode,
            withChildren
        };
    }
    if (location === ExcursionQueryLocation.list) {
        rawFilters = {
            date,
            dateTo,
            cityId,
            type,
            travelMode,
            withChildren,
            limit,
            offset
        };
    }
    if (location === ExcursionQueryLocation.form || location === ExcursionQueryLocation.payment) {
        rawFilters = {
            date,
            dateTo,
            cityId,
            type,
            travelMode,
            withChildren
        };
    }
    const filters = (0,_modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_4__/* .deleteFalsyParams */ .P)(rawFilters);
    const queriesString = (0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__/* .getUrlQueries */ .z)(filters);
    return {
        filters,
        queriesString
    };
};


/***/ })

};
;