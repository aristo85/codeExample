"use strict";
exports.id = 3230;
exports.ids = [3230];
exports.modules = {

/***/ 72938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aw": () => (/* binding */ leisureQueryHandler),
/* harmony export */   "NR": () => (/* binding */ DefaultLeisureValues),
/* harmony export */   "Xm": () => (/* binding */ LeisureQueryLocation)
/* harmony export */ });
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49836);
/* harmony import */ var _modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50479);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96894);




const DefaultLeisureValues = {
    date: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_DATE_FORMAT */ .K_),
    dateTo: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(3, "days").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_DATE_FORMAT */ .K_),
    cityId: null,
    offset: 0,
    limit: 10,
    travelMode: [],
    withChildren: false,
    excursionType: [],
    type: null,
    popular: true,
    specialOffer: true
};
var LeisureQueryLocation;
(function(LeisureQueryLocation) {
    LeisureQueryLocation["list"] = "LIST";
})(LeisureQueryLocation || (LeisureQueryLocation = {}));
const leisureQueryHandler = (data, location)=>{
    const { cityId =DefaultLeisureValues.cityId , limit =DefaultLeisureValues.limit , travelMode =DefaultLeisureValues.travelMode , withChildren =DefaultLeisureValues.withChildren , excursionType =DefaultLeisureValues.excursionType , specialOffer =DefaultLeisureValues.specialOffer , type =DefaultLeisureValues.type , offset =DefaultLeisureValues.offset , popular =DefaultLeisureValues.popular  } = data;
    let { date =DefaultLeisureValues.date , dateTo =DefaultLeisureValues.dateTo  } = data;
    if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().startOf("D"))) {
        date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_DATE_FORMAT */ .K_);
        dateTo = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).add(3, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTo).isBefore(date)) {
        dateTo = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).add(3, "days").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    let rawFilters = {};
    if (location === LeisureQueryLocation.list) {
        rawFilters = {
            date,
            dateTo,
            cityId,
            travelMode,
            withChildren,
            excursionType,
            specialOffer,
            type,
            limit,
            offset,
            popular
        };
    }
    const filters = (0,_modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_3__/* .deleteFalsyParams */ .P)(rawFilters);
    const queriesString = (0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__/* .getUrlQueries */ .z)(filters);
    return {
        filters,
        queriesString
    };
};


/***/ }),

/***/ 23230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KF": () => (/* binding */ setLeisureFilterValue),
/* harmony export */   "k_": () => (/* binding */ leisureFilterSlice),
/* harmony export */   "n_": () => (/* binding */ selectLeisureFilterValues)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72938);


const initialState = {
    leisureFilterData: {
        date: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.date */ .NR.date,
        dateTo: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.dateTo */ .NR.dateTo,
        withChildren: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.withChildren */ .NR.withChildren,
        cityId: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.cityId */ .NR.cityId,
        limit: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.limit */ .NR.limit,
        offset: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.offset */ .NR.offset,
        travelMode: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.travelMode */ .NR.travelMode,
        excursionType: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.excursionType */ .NR.excursionType,
        type: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.type */ .NR.type,
        popular: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.popular */ .NR.popular,
        specialOffer: _core_helpers_leisureQueryHandler__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLeisureValues.specialOffer */ .NR.specialOffer
    }
};
const leisureFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "leisureFilter",
    initialState,
    reducers: {
        setLeisureFilterValue: (state, action)=>{
            state.leisureFilterData = {
                ...state.leisureFilterData,
                ...action.payload
            };
        }
    }
});
const { setLeisureFilterValue  } = leisureFilterSlice.actions;
const selectLeisureFilterValues = (state)=>state.leisureFilter.leisureFilterData;


/***/ })

};
;