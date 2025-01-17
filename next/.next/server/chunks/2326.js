"use strict";
exports.id = 2326;
exports.ids = [2326];
exports.modules = {

/***/ 42326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89882);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const useGetDaysAndNights = ({ arrivalDate , departureDate  })=>{
    if (!arrivalDate || !departureDate) {
        return {
            daysString: null,
            dateRangeString: null,
            datesWithTime: {
                arrivalDate: null,
                departureDate: null
            }
        };
    }
    const datesWithoutTime = {
        departureDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(departureDate.split("T")[0]),
        arrivalDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(arrivalDate.split("T")[0])
    };
    const datesWithTime = {
        departureDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(departureDate),
        arrivalDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(arrivalDate)
    };
    const nights = datesWithoutTime.departureDate.diff(datesWithoutTime.arrivalDate, "day", true);
    const daysString = `${nights + 1} ${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_1__/* .pluralizationFn */ .$)(nights + 1, [
        "день",
        "дня",
        "дней"
    ])}, ${nights} ${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_1__/* .pluralizationFn */ .$)(nights, [
        "ночь",
        "ночи",
        "ночей"
    ])}`;
    const dateRangeString = `${datesWithoutTime.arrivalDate.format("DD MMM")} - ${datesWithoutTime.departureDate.format("DD MMM, YYYY")}`;
    return {
        daysString,
        dateRangeString,
        datesWithTime,
        nights
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetDaysAndNights);


/***/ })

};
;