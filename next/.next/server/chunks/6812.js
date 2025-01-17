"use strict";
exports.id = 6812;
exports.ids = [6812];
exports.modules = {

/***/ 16812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useFilterDataFromQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57441);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82741);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96894);






const useFilterDataFromQuery = ()=>{
    const dispatch = (0,_modules_core_hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const filterData = (0,_modules_core_hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_3__/* .selectFilterValues */ .N$);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const { numOfAdult , cityId , childAges , placementType , rating , offset , roomId , ratePlanId , specialOffer , breakfast , amenityCodes  } = router.query;
        let { arrivalDate , departureDate  } = router.query;
        const countChildAges = (childAges)=>{
            if (Array.isArray(childAges)) {
                return childAges;
            } else {
                return [
                    childAges
                ];
            }
        };
        if (dayjs__WEBPACK_IMPORTED_MODULE_4___default()(arrivalDate).format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_) < dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_)) {
            arrivalDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_);
            departureDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().add(1, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_);
        }
        dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_3__/* .setFilterValue */ .hL)({
            arrivalDate: arrivalDate ? String(arrivalDate) : filterData.arrivalDate,
            departureDate: departureDate ? String(departureDate) : filterData.departureDate,
            cityId: cityId && cityId !== "null" ? String(cityId) : filterData.cityId,
            rating: rating === "true",
            // TODO: Uncomment if needed add placementType to store, from query params
            // placementType: placementType
            //   ? (placementType as PlacementType)
            //   : filterData.placementType,
            numOfAdult: numOfAdult ? Number(numOfAdult) : filterData.numOfAdult,
            childAges: childAges ? countChildAges(childAges) : filterData.childAges,
            offset: offset ? Number(offset) : filterData.offset,
            roomId: roomId ? Number(roomId) : filterData.roomId,
            ratePlanId: ratePlanId ? Number(ratePlanId) : filterData.ratePlanId,
            popular: filterData.popular && !filterData.cityId,
            specialOffer: specialOffer === "true",
            breakfast: breakfast === "true",
            amenityCodes: amenityCodes ? amenityCodes.split(",") : []
        }));
    }, [
        router
    ]);
};


/***/ })

};
;