"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 90756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ queryHandler),
/* harmony export */   "v": () => (/* binding */ QueryLocation)
/* harmony export */ });
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49836);
/* harmony import */ var _modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64468);
/* harmony import */ var _modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50479);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96894);





var QueryLocation;
(function(QueryLocation) {
    QueryLocation["list"] = "LIST";
    QueryLocation["detail"] = "DETAIL";
    QueryLocation["map"] = "MAP";
    QueryLocation["home"] = "HOME";
    QueryLocation["form"] = "FORM";
    QueryLocation["payment"] = "PAYMENT";
})(QueryLocation || (QueryLocation = {}));
const queryHandler = (data, location)=>{
    const { numOfAdult =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.numOfAdult */ .np.numOfAdult , cityId =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.cityId */ .np.cityId , rating =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.rating */ .np.rating , breakfast =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.breakfast */ .np.breakfast , childAges =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.childAges */ .np.childAges , roomId =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.roomId */ .np.roomId , ratePlanId =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.ratePlanId */ .np.ratePlanId , placementType =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.placementType */ .np.placementType , specialOffer =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.specialOffer */ .np.specialOffer , popular =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.popular */ .np.popular , amenityCodes =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.amenityCodes */ .np.amenityCodes  } = data;
    let { arrivalDate =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.arrivalDate */ .np.arrivalDate , departureDate =_modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.departureDate */ .np.departureDate  } = data;
    if (dayjs__WEBPACK_IMPORTED_MODULE_2___default()(arrivalDate).format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_) < dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_)) {
        arrivalDate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
        departureDate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(1, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_DATE_FORMAT */ .K_);
    }
    let rawFilters = {};
    if (location === QueryLocation.detail || location === QueryLocation.map) {
        rawFilters = {
            numOfAdult,
            cityId,
            arrivalDate,
            departureDate,
            childAges,
            breakfast,
            rating,
            placementType,
            specialOffer,
            popular,
            amenityCodes
        };
    }
    if (location === QueryLocation.home || location === QueryLocation.list) {
        rawFilters = {
            numOfAdult,
            cityId,
            arrivalDate,
            departureDate,
            childAges,
            breakfast,
            rating,
            placementType,
            specialOffer,
            popular,
            amenityCodes,
            offset: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.offset */ .np.offset,
            limit: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultQueriesBookingValues.limit */ .np.limit
        };
    }
    if (location === QueryLocation.form || location === QueryLocation.payment) {
        rawFilters = {
            numOfAdult,
            cityId,
            arrivalDate,
            departureDate,
            childAges,
            breakfast,
            roomId,
            ratePlanId,
            rating,
            placementType,
            specialOffer,
            popular,
            amenityCodes
        };
    }
    rawFilters.cityId ? rawFilters.popular = false : rawFilters.popular = true;
    const filters = (0,_modules_core_helpers_deleteFalsyValuesFromObject__WEBPACK_IMPORTED_MODULE_4__/* .deleteFalsyParams */ .P)(rawFilters);
    const { childAges: formattingChildAges , ...rest } = filters;
    const mutateChildAgesParam = (childAges)=>{
        if (!childAges?.length) return "";
        if (typeof childAges === "string") return `&childAges=${childAges}`;
        const childAgesReturn = childAges?.join("&childAges=");
        return `&childAges=${childAgesReturn}`;
    };
    const queriesString = (0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__/* .getUrlQueries */ .z)(rest) + mutateChildAgesParam(formattingChildAges);
    return {
        filters,
        queriesString
    };
};


/***/ })

};
;