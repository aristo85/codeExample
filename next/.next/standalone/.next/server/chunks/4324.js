"use strict";
exports.id = 4324;
exports.ids = [4324];
exports.modules = {

/***/ 24324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ containers_StoreProvider),
  "CG": () => (/* binding */ useAppSelector),
  "YS": () => (/* binding */ wrapper)
});

// UNUSED EXPORTS: store

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./modules/core/api/apiSlice.ts + 1 modules
var apiSlice = __webpack_require__(70220);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: ./modules/auth/authSlice.ts
var authSlice = __webpack_require__(68270);
// EXTERNAL MODULE: ./modules/payment/paymentSlice.ts
var paymentSlice = __webpack_require__(37574);
// EXTERNAL MODULE: ./modules/core/api/filterSlice.ts
var filterSlice = __webpack_require__(82741);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(35648);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(73142);
;// CONCATENATED MODULE: ./modules/core/helpers/errorHandler.ts


const rtkQueryErrorLogger = (api)=>(next)=>(action)=>{
            const validationFormList = [
                "login",
                "register",
                "changePassword",
                "profileUpdate",
                "createExcursion",
                "updateExcursion",
                "createGuide",
                "updateGuide",
                "addPlacement",
                "bookCurrentRoom",
                "bookGuide",
                "bookExcursion"
            ];
            if ((0,toolkit_.isRejectedWithValue)(action)) {
                let message = action.payload.data?.message;
                const status = action.payload.status;
                const name = action.meta.arg.endpointName;
                if (validationFormList.includes(name) && status === 422 && action.payload.data?.data?.length > 0) {
                    message = "Найдены ошибки заполнения формы, пожалуйста, исправьте выделенные поля";
                }
                if (validationFormList.includes(name) && status === 409) {
                    message = "Условия проживания изменились, проверьте обновленные данные и попробуйте забронировать еще раз";
                }
                if (false) {}
            }
            return next(action);
        };

// EXTERNAL MODULE: ./modules/excursion/components/ExcursionFilter/ExcursionFilterSlice.ts
var ExcursionFilterSlice = __webpack_require__(81985);
// EXTERNAL MODULE: ./modules/guide/components/GuideFilter/guideFilterSlice.ts
var guideFilterSlice = __webpack_require__(2982);
// EXTERNAL MODULE: ./modules/leisure/leisureSlice.ts
var leisureSlice = __webpack_require__(23230);
// EXTERNAL MODULE: ./modules/excursion/excursionSlice.ts
var excursionSlice = __webpack_require__(83344);
// EXTERNAL MODULE: ./modules/guide/guideSlice.ts
var guideSlice = __webpack_require__(45138);
;// CONCATENATED MODULE: ./modules/core/containers/StoreProvider.tsx















const makeStore = ()=>{
    return (0,toolkit_.configureStore)({
        reducer: {
            [apiSlice/* apiSlice.reducerPath */.gk.reducerPath]: apiSlice/* apiSlice.reducer */.gk.reducer,
            auth: authSlice/* default */.ZP,
            payment: paymentSlice/* default */.ZP,
            filter: filterSlice/* default */.ZP,
            excursionFilter: ExcursionFilterSlice/* excursionFilterSlice.reducer */.TS.reducer,
            guideFilter: guideFilterSlice/* guideFilterSlice.reducer */.oz.reducer,
            leisureFilter: leisureSlice/* leisureFilterSlice.reducer */.k_.reducer,
            excursion: excursionSlice/* excursionSlice.reducer */.pI.reducer,
            guide: guideSlice/* guideSlice.reducer */.QU.reducer
        },
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice/* apiSlice.middleware */.gk.middleware, rtkQueryErrorLogger)
    });
};
const store = makeStore();
const StoreProvider = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: children
    });
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
    debug: false
});
const useAppSelector = external_react_redux_.useSelector;
/* harmony default export */ const containers_StoreProvider = (StoreProvider);


/***/ }),

/***/ 83344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jd": () => (/* binding */ setBookingExcursionForm),
/* harmony export */   "Xu": () => (/* binding */ selectExcursionForm),
/* harmony export */   "pI": () => (/* binding */ excursionSlice),
/* harmony export */   "pz": () => (/* binding */ selectBookingExcursionForm),
/* harmony export */   "rF": () => (/* binding */ setExcursionCreateForm)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30838);


const initialState = {
    createExcursionForm: {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .ExcursionType.INDIVIDUAL */ .CN.INDIVIDUAL
    },
    bookingExcursionForm: {}
};
const excursionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "excursion",
    initialState,
    reducers: {
        setExcursionCreateForm: (state, action)=>{
            state.createExcursionForm = action.payload;
        },
        setBookingExcursionForm: (state, action)=>{
            state.bookingExcursionForm = action.payload;
        }
    }
});
const { setExcursionCreateForm , setBookingExcursionForm  } = excursionSlice.actions;
const selectExcursionForm = (state)=>state.excursion.createExcursionForm;
const selectBookingExcursionForm = (state)=>state.excursion.bookingExcursionForm;


/***/ }),

/***/ 45138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B8": () => (/* binding */ setGuideCreateForm),
/* harmony export */   "Mg": () => (/* binding */ selectBookingGuideForm),
/* harmony export */   "N6": () => (/* binding */ selectGuideForm),
/* harmony export */   "QU": () => (/* binding */ guideSlice),
/* harmony export */   "pJ": () => (/* binding */ setBookingGuideForm)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    createGuideForm: {},
    bookingGuideForm: {}
};
const guideSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "guide",
    initialState,
    reducers: {
        setGuideCreateForm: (state, action)=>{
            state.createGuideForm = action.payload;
        },
        setBookingGuideForm: (state, action)=>{
            state.bookingGuideForm = action.payload;
        }
    }
});
const { setGuideCreateForm , setBookingGuideForm  } = guideSlice.actions;
const selectGuideForm = (state)=>state.guide.createGuideForm;
const selectBookingGuideForm = (state)=>state.guide.bookingGuideForm;


/***/ }),

/***/ 37574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ds": () => (/* binding */ setPaymentData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hH": () => (/* binding */ useAppPaymentSelector)
/* harmony export */ });
/* unused harmony exports paymentSlice, resetPaymentData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57441);


const initialState = {};
const paymentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "payment",
    initialState,
    reducers: {
        setPaymentData: (state, action)=>{
            const { confirmationToken , returnUrl  } = action.payload;
            state.confirmationToken = confirmationToken;
            state.returnUrl = returnUrl;
        },
        resetPaymentData: (state)=>{
            state.confirmationToken = undefined;
            state.returnUrl = undefined;
        }
    }
});
const { setPaymentData , resetPaymentData  } = paymentSlice.actions;
const useAppPaymentSelector = ()=>(0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.payment);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paymentSlice.reducer);


/***/ })

};
;