"use strict";
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 51667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ GuideQueryLocation),
/* harmony export */   "w": () => (/* binding */ guideQueryHandler)
/* harmony export */ });
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49836);
/* harmony import */ var _modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50479);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75722);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96894);





var GuideQueryLocation;
(function(GuideQueryLocation) {
    GuideQueryLocation["list"] = "LIST";
    GuideQueryLocation["detail"] = "DETAIL";
    GuideQueryLocation["form"] = "FORM";
    GuideQueryLocation["payment"] = "PAYMENT";
})(GuideQueryLocation || (GuideQueryLocation = {}));
const guideQueryHandler = (data, location)=>{
    const { cityId =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.cityId */ .X.cityId , limit =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.limit */ .X.limit , travelMode =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.travelMode */ .X.travelMode , withChildren =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.withChildren */ .X.withChildren , offset =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.offset */ .X.offset , sort =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.sort */ .X.sort  } = data;
    let { date =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.date */ .X.date , dateTo =_modules_guide_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultGuideValues.dateTo */ .X.dateTo  } = data;
    if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().startOf("D"))) {
        date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
        dateTo = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).add(3, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTo).isBefore(date)) {
        dateTo = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).add(3, "days").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    let rawFilters = {};
    if (location === GuideQueryLocation.detail) {
        rawFilters = {
            date,
            dateTo,
            cityId,
            travelMode,
            withChildren
        };
    }
    if (location === GuideQueryLocation.list) {
        rawFilters = {
            date,
            dateTo,
            cityId,
            travelMode,
            withChildren,
            limit,
            offset
        };
    }
    if (location === GuideQueryLocation.form || location === GuideQueryLocation.payment) {
        rawFilters = {
            date,
            dateTo,
            cityId,
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


/***/ }),

/***/ 2982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f6": () => (/* binding */ setGuideFilterValue),
/* harmony export */   "jn": () => (/* binding */ selectGuideFilterValues),
/* harmony export */   "oz": () => (/* binding */ guideFilterSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81446);


const initialState = {
    guideFilterData: {
        date: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.date */ .K.date,
        dateTo: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.dateTo */ .K.dateTo,
        withChildren: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.withChildren */ .K.withChildren,
        cityId: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.cityId */ .K.cityId,
        limit: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.limit */ .K.limit,
        offset: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.offset */ .K.offset,
        travelMode: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.travelMode */ .K.travelMode
    }
};
const guideFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "guideFilter",
    initialState,
    reducers: {
        setGuideFilterValue: (state, action)=>{
            state.guideFilterData = {
                ...state.guideFilterData,
                ...action.payload
            };
        }
    }
});
const { setGuideFilterValue  } = guideFilterSlice.actions;
const selectGuideFilterValues = (state)=>state.guideFilter.guideFilterData;


/***/ }),

/***/ 75722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ DefaultGuideValues)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96894);


const DefaultGuideValues = {
    date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_DATE_FORMAT */ .K_),
    dateTo: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(3, "days").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_DATE_FORMAT */ .K_),
    cityId: null,
    offset: 0,
    limit: _modules_core_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LIMIT */ .UZ,
    travelMode: null,
    withChildren: false
};


/***/ })

};
;