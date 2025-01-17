"use strict";
exports.id = 7499;
exports.ids = [7499];
exports.modules = {

/***/ 82741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N$": () => (/* binding */ selectFilterValues),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hL": () => (/* binding */ setFilterValue),
/* harmony export */   "tu": () => (/* binding */ useGetCitiesQuery)
/* harmony export */ });
/* unused harmony exports filterSlice, apiFilterSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70220);
/* harmony import */ var _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64468);



const initialState = {
    filterData: {
        arrivalDate: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.arrivalDate */ .np.arrivalDate,
        departureDate: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.departureDate */ .np.departureDate,
        cityId: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.cityId */ .np.cityId,
        rating: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.rating */ .np.rating,
        numOfAdult: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.numOfAdult */ .np.numOfAdult,
        childAges: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.childAges */ .np.childAges,
        roomId: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.roomId */ .np.roomId,
        ratePlanId: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.ratePlanId */ .np.ratePlanId,
        limit: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.limit */ .np.limit,
        offset: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.offset */ .np.offset,
        popular: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.popular */ .np.popular,
        placementType: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.placementType */ .np.placementType,
        breakfast: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.breakfast */ .np.breakfast,
        amenityCodes: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.amenityCodes */ .np.amenityCodes,
        specialOffer: _modules_placement_constants__WEBPACK_IMPORTED_MODULE_2__/* .DefaultQueriesBookingValues.specialOffer */ .np.specialOffer
    }
};
const filterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filter",
    initialState,
    reducers: {
        setFilterValue: (state, action)=>{
            state.filterData = {
                ...state.filterData,
                ...action.payload
            };
        }
    }
});
const apiFilterSlice = _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.injectEndpoints */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            getCities: builder.query({
                query: ()=>({
                        url: `/configuration`
                    })
            })
        }),
    overrideExisting: true
});
const { useGetCitiesQuery  } = apiFilterSlice;
const { setFilterValue  } = filterSlice.actions;
const selectFilterValues = (state)=>state.filter.filterData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterSlice.reducer);


/***/ }),

/***/ 50479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ deleteFalsyParams)
/* harmony export */ });
const deleteFalsyParams = (obj)=>{
    for(const key in obj){
        const value = obj[key];
        if (obj[key] === false || obj[key] === "false" || Array.isArray(value) && value.length === 0) {
            delete obj[key];
        }
    }
    return obj;
};


/***/ }),

/***/ 64468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SU": () => (/* binding */ placementFormValidationSchema),
/* harmony export */   "Tl": () => (/* binding */ CurrencyEnum),
/* harmony export */   "fd": () => (/* binding */ currencyNameFormatter),
/* harmony export */   "np": () => (/* binding */ DefaultQueriesBookingValues)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89882);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96894);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);




const DefaultQueriesBookingValues = {
    arrivalDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_DATE_FORMAT */ .K_),
    departureDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_DATE_FORMAT */ .K_),
    cityId: null,
    rating: false,
    numOfAdult: 2,
    childAges: [],
    offset: 0,
    limit: _modules_core_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LIMIT */ .UZ,
    roomId: null,
    ratePlanId: null,
    popular: true,
    placementType: null,
    breakfast: false,
    specialOffer: false,
    amenityCodes: []
};
var CurrencyEnum;
(function(CurrencyEnum) {
    CurrencyEnum["rubles"] = "RUB";
})(CurrencyEnum || (CurrencyEnum = {}));
const currencyValues = {
    [CurrencyEnum.rubles]: [
        "рубль",
        "рубля",
        "рублей"
    ]
};
const currencyNameFormatter = (value, currencyCode)=>{
    if (currencyCode) {
        return `${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_3__/* .pluralizationFn */ .$)(value, currencyValues[currencyCode])}`;
    }
    return "";
};
const placementFormValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    popular: yup__WEBPACK_IMPORTED_MODULE_2__.boolean(),
    cityId: yup__WEBPACK_IMPORTED_MODULE_2__.string().nullable().when([
        "popular"
    ], {
        is: true,
        then: (schema)=>schema,
        otherwise: (schema)=>schema.required("Выберите город")
    }),
    childAges: yup__WEBPACK_IMPORTED_MODULE_2__.array().of(yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        value: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Укажите возраст")
    })),
    arrivalDate: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Укажите дату прибытия"),
    departureDate: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Укажите дату отъезда")
});


/***/ })

};
;