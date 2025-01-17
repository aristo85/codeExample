"use strict";
exports.id = 1985;
exports.ids = [1985];
exports.modules = {

/***/ 81985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TS": () => (/* binding */ excursionFilterSlice),
/* harmony export */   "at": () => (/* binding */ setExcursionFilterValue),
/* harmony export */   "tE": () => (/* binding */ selectExcursionFilterValues)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81446);


const initialState = {
    excursionFilterData: {
        date: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.date */ .K.date,
        dateTo: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.dateTo */ .K.dateTo,
        withChildren: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.withChildren */ .K.withChildren,
        cityId: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.cityId */ .K.cityId,
        limit: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.limit */ .K.limit,
        offset: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.offset */ .K.offset,
        type: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.type */ .K.type,
        travelMode: _modules_excursion_constants__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExcursionValues.travelMode */ .K.travelMode
    }
};
const excursionFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "excursionFilter",
    initialState,
    reducers: {
        setExcursionFilterValue: (state, action)=>{
            state.excursionFilterData = {
                ...state.excursionFilterData,
                ...action.payload
            };
        }
    }
});
const { setExcursionFilterValue  } = excursionFilterSlice.actions;
const selectExcursionFilterValues = (state)=>state.excursionFilter.excursionFilterData;


/***/ })

};
;